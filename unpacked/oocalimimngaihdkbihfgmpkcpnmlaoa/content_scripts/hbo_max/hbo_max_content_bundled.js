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
      7206: (t) => {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\r\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\r\n\r\n    </iframe>\r\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\r\n    .hidden {\r\n    display: none !important;\r\n}   \r\n</style>\r\n<div class="hidden" id="tpIconContainer" tpInjected>\r\n    <div class="hidden" id="tp-buttons-container">\r\n        <button id="tp-icon-container">\r\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\r\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\r\n            <div class="hidden" id="tp-message-indicator"></div>\r\n        </button>\r\n        <div class="tp-seperator"></div>\r\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\r\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\r\n        </button> --\x3e\r\n        <div class="hidden" id="tp-party-active">\r\n            <button class="tp-control-button" id="tp-link-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-chat-button">\r\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\r\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\r\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\r\n                <div class="hidden" id="tp-message-indicator"></div>\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-disconnect-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\r\n                    src=\'{DISCONNECT_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\r\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\r\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\r\n    </button> --\x3e\r\n    <div id="tp-error-box" class="hidden">\r\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\r\n            Failed to connect to background script. Please Try again later\r\n        </p>\r\n    </div>\r\n</div>';
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
        e = function (t, e, i, n) {
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
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(t || (t = {}));
      var n;
      function s(e) {
        return e.includes("urn:hbo:feature")
          ? t.FEATURE
          : e.includes("urn:hbo:episode") || (e.includes("urn:hbo:page:") && e.includes(":type:episode"))
          ? t.EPISODE
          : e.includes("urn:hbo:extra")
          ? t.EXTRA
          : t.OTHER;
      }
      function u(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function o(t, e, i) {
        const { width: n, height: s, left: u, top: o } = t.getBoundingClientRect(),
          r = u + n * e,
          a = o + s / 2,
          c = document.createEvent("MouseEvents");
        c.initMouseEvent(i, !0, !0, window, 0, 0, 0, r, a, !1, !1, !1, !1, 0, null), t.dispatchEvent(c);
      }
      function r(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : u(i)().then(s);
            };
          return s();
        };
      }
      function a(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function c(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(n || (n = {}));
      class D {
        constructor() {
          this.resetTasks(), (this.l = []), (this.p = 0), (this.g = Promise.resolve()), (this.v = !0);
        }
        createInstance() {
          return new D();
        }
        pushTask(t, e) {
          if (!this.v) return;
          const i = { action: t, name: e };
          0 === this.p && this.resetTasks(),
            (this.p = this.l.push(i)),
            (this.g = this.g.then(() => {
              if (this.l.includes(i) && this.v)
                return this.F(i)().then(() => {
                  this.l.shift(), (this.p -= 1);
                });
            }));
        }
        disable() {
          (this.v = !1), this.resetTasks();
        }
        resetTasks() {
          (this.g = Promise.resolve()), (this.l = []), (this.p = 0);
        }
        F(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.p;
        }
        hasTaskInQueue(t) {
          return this.l.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.l),
            (this.l = this.l.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.p = this.l.length),
            console.log(this.l);
        }
      }
      const h = new D();
      var d = console.log.bind(window.console);
      const l = 340,
        p = chrome.runtime.id,
        g = "reactionContainerOpen",
        v = "https://sessions.teleparty.com",
        F = "https://redirect.teleparty.com",
        y = F,
        m = `${F}/sidebar`,
        f = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        C = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        w = "recentlyUsedEmojiMap",
        E = "redirectDataMap",
        _ = [
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
        b =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g,
        j = [
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
        B = [
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
        A = [
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
        k = {
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
      function Q(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                b,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(b, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(b) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const I = {
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
        x = chrome.extension.getURL("img/x-circle.svg"),
        S = "[data-testid='SkipButton']",
        T = "[data-testid*='UpNext']",
        M = 1e3,
        P = 72e5,
        V = 12e4,
        $ = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        N = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        R = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        U = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function G(t, e) {
        O();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${x}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${x}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            O();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              O(), (window.location.href = e);
            });
      }
      function O() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const L = { showAlert: !1 },
        H = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        },
        W = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content:
              "Sorry, long parties only work for consecutive episodes for now. Please share a new Teleparty to continue watching together, or click the button below to rejoin the party.",
            buttonTitle: "Return to Party"
          }
        },
        z = { showAlert: !0, alertModal: R };
      class Y {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${y}/join/${t}`;
        }
      }
      var K;
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
      })(K || (K = {}));
      const J = new (class extends Y {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== s(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + s(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const u = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let o = u && u.length > 0 ? u[1] : void 0;
          return o || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (o = null != n && 3 == n.length ? n[2] : void 0)), o;
        }
        getVideoType(t) {
          return s(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", K.HBO_MAX, !1);
      Object.freeze(J);
      const X = J;
      i(5640);
      const q = "PING",
        Z = "SYNC",
        tt = "BROADCAST";
      var et = function (t, e, i, n) {
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
      class it extends class {
        constructor(t) {
          (this.m = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return e(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return e(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return e(this, void 0, void 0, function* () {
            yield null === (t = this.C) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this._();
        }
        stopListening() {
          this.j();
        }
        _() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            e(this, void 0, void 0, function* () {
              this.B(), this.m.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              e(this, void 0, void 0, function* () {
                this.B(), this.m.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        j() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        A() {
          var t;
          null === (t = this.C) || void 0 === t || t.tryBroadcast(!1);
        }
        B() {
          var t;
          console.log("Going to wait for change"), null === (t = this.C) || void 0 === t || t.tryBroadcast(!0);
        }
        k() {
          var t;
          null === (t = this.C) || void 0 === t || t.setBuffering(!0);
        }
        I(t) {
          var e;
          null === (e = this.C) || void 0 === e || e.setWatchingAds(!0, t);
        }
        S() {
          var t, e;
          null === (t = this.C) || void 0 === t || t.setWatchingAds(!1), null === (e = this.C) || void 0 === e || e.forceSync();
        }
        T() {
          var t;
          null === (t = this.C) || void 0 === t || t.setBuffering(!1);
        }
        M(t) {
          var e;
          null === (e = this.C) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        P(t) {
          var e;
          null === (e = this.C) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.C = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i, n;
          super(t),
            (this.V = !1),
            (this.$ = this.checkWatchingAds.bind(this)),
            (this.N = this.B.bind(this)),
            (this.R = this.k.bind(this)),
            (this.U = this.T.bind(this)),
            (this.G = this.O.bind(this)),
            (this.L = this.reloadListeners.bind(this)),
            (this.H = !1),
            (this.W = 70),
            (this.Y = () =>
              et(this, void 0, void 0, function* () {
                console.log("Interaction"), h.tasksInFlight < 5 && !h.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE") && this.B();
              })),
            (this.K = () => {
              this.m.canFixChat() ||
                u(100)().then(() => {
                  this.J.getChatVisible() &&
                    (document.webkitIsFullScreen
                      ? jQuery("video:not(.gif-img):not(.tp-video-gif)").width(window.innerWidth)
                      : jQuery("video:not(.gif-img):not(.tp-video-gif)").width(window.innerWidth - l));
                });
            }),
            (this.m = t),
            this.m.setVideoEventListener(this),
            (this.J = e),
            (this.X = this.m.onNode.bind(this.m)),
            (this.q = new MutationObserver(this.Z.bind(this))),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/hbo_max/hbo_max_injected_bundled.js")),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.replaceScriptLoaded) ||
              (d("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            this.initListeners();
        }
        tt() {
          return document.querySelector("[aria-label*='Up Next']");
        }
        et() {
          var t, e, i;
          return et(this, void 0, void 0, function* () {
            if (!this.V && !(null === (t = this.C) || void 0 === t ? void 0 : t.changingVideo)) {
              this.V = !0;
              try {
                yield r(this.m.removeVideoCover.bind(this.m), 2500)(),
                  yield u(500)(),
                  (null === (e = this.C) || void 0 === e ? void 0 : e.changingVideo) ||
                    (h.pushTask(this.m.skipPromo), this.reloadListeners(), null === (i = this.C) || void 0 === i || i.forceSync());
              } catch (t) {
                this.m.logError("unable to remove video cover", t);
              } finally {
                this.V = !1;
              }
            }
          });
        }
        Z() {
          this.et();
        }
        it() {
          return document.querySelector("[style*='icn_tile_play_max_large_3']");
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        initListeners() {
          window.addEventListener("resize", this.K.bind(this)),
            window.addEventListener("message", this.G, !1),
            window.addEventListener("FromNode", this.X, !1),
            window.addEventListener("reloadVideoListener", this.L, !1);
        }
        startListening() {
          super.startListening(),
            this.q.disconnect(),
            (this.nt = setInterval(() => {
              this.checkWatchingAds();
            }, 2e3));
          const t = this.it();
          t && this.q.observe(t, { childList: !0, characterData: !0, attributes: !0, subtree: !0 });
          const e = this.st();
          e && (e.addEventListener("waiting", this.R), e.addEventListener("canplay", this.U), e.addEventListener("loadstart", this.$)),
            window.addEventListener("mouseup", this.Y),
            window.addEventListener("keyup", this.Y),
            window.addEventListener("message", this.G, !1),
            window.addEventListener("FromNode", this.X, !1),
            this.m.showControls();
        }
        st() {
          const t = jQuery("video");
          return t && t.length ? t[0] : void 0;
        }
        stopListening() {
          super.stopListening(), this.q.disconnect();
          const t = this.st();
          t &&
            (t.removeEventListener("waiting", this.R),
            t.removeEventListener("buffering", this.U),
            t.removeEventListener("play", this.N),
            t.removeEventListener("pause", this.N),
            t.removeEventListener("seeking", this.N),
            t.removeEventListener("loadstart", this.$)),
            this.ut && clearInterval(this.ut),
            this.nt && clearInterval(this.nt),
            window.removeEventListener("resize", this.K),
            window.document.removeEventListener("webkitfullscreenchange", this.K),
            window.removeEventListener("message", this.G, !1),
            window.removeEventListener("FromNode", this.X, !1),
            window.addEventListener("reloadVideoListener", this.L, !1);
        }
        loadNewVideoAsync(t) {
          return et(this, void 0, void 0, function* () {
            yield new Promise((e, i) => {
              const n = performance.now(),
                s = setInterval(() => {
                  if ((this.m.checkUpdateId(), this.m.videoId === t)) {
                    const t = this.m.getVideoElement();
                    t instanceof Element && t.src && (clearInterval(s), e());
                  }
                  performance.now() - n >= 2e4 && (clearInterval(s), i("Could not load new video in time."));
                }, 200);
            }),
              yield r(() => {
                const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
                return window.dispatchEvent(t), this.m.isVideoReady();
              }, 1 / 0)(),
              yield this.m.skipPromo(),
              this.K(),
              this.T();
          });
        }
        ot() {
          try {
            return jQuery("[style*='metadata_pipe.png']").parent().next().children().children()[1].innerText;
          } catch (t) {
            return void this.m.logError("unable to get video title (old method)", t);
          }
        }
        rt() {
          const t = document.querySelector("[style*='slider']");
          if (t && t.parentElement && t.parentElement.parentElement && t.parentElement.parentElement.parentElement)
            return t.parentElement.parentElement.parentElement;
        }
        ct() {
          return et(this, void 0, void 0, function* () {
            yield r(() => {
              const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
              return window.dispatchEvent(t), !this.m.isWatchingAd();
            }, 1 / 0)(),
              this.S();
          });
        }
        Dt() {
          if (document.querySelector(T)) {
            const t = jQuery(T).closest("[style*='bottom: 125px;']");
            t && t.length && (t[0].style.paddingRight = this.J.getChatVisible() ? "340px" : "0px");
          }
        }
        ht() {
          if (document.querySelector(S)) {
            const t = jQuery(S).closest("[style*='bottom: 125px;']");
            t && t.length && (t[0].style.paddingRight = this.J.getChatVisible() ? "340px" : "0px");
          }
        }
        checkWatchingAds() {
          var t;
          return et(this, void 0, void 0, function* () {
            this.Dt(),
              this.ht(),
              yield this.m.waitUpdateAPIState(),
              this.m.isWatchingAd() && !(null === (t = this.C) || void 0 === t ? void 0 : t.isWatchingAds()) && (this.I(), this.ct());
          });
        }
        dt() {
          var t;
          return (
            null == this.C || ((null === (t = this.C) || void 0 === t ? void 0 : t.changingVideo) && !this.H) || null == this.C.videoId
          );
        }
        O(e) {
          var i, n, s;
          return et(this, void 0, void 0, function* () {
            if (e.source != window || this.dt()) return;
            const u = X.getVideoType(new URL(window.location.href)) != t.OTHER && null != this.m.getVideoElement();
            if ("FROM_PAGE_POP" !== e.data.type && u) {
              if (e.data.type && "FROM_PAGE" == e.data.type) {
                if ((d("Replace called"), "episode" !== this.m.videoType || "episode" !== X.getVideoType(new URL(window.location.href))))
                  return;
                this.C && (this.C.changingVideo = !0), (this.H = !1);
                try {
                  yield this.m.updateVideoId();
                  const t = this.m.videoId;
                  t ? this.M(t) : d("No next episode: " + t + " : " + (null === (i = this.C) || void 0 === i ? void 0 : i.videoId));
                } catch (t) {
                  null === this.m.getVideoElement && this.P(L),
                    d("Replace failed " + t),
                    this.m.videoId !== (null === (n = this.C) || void 0 === n ? void 0 : n.videoId)
                      ? (null === (s = this.C) || void 0 === s ? void 0 : s.changingVideo)
                        ? this.P(z)
                        : this.P(W)
                      : this.C && (this.C.changingVideo = !1);
                }
              }
            } else this.P(L);
          });
        }
      }
      const nt = "Service_Background",
        st = "Popup",
        ut = "Content_Script",
        ot = "Page_Controls";
      var rt;
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
      })(rt || (rt = {}));
      const at = new (class {
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
                chrome.runtime.lastError && d(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
              });
            } catch (t) {
              clearTimeout(u), s(t);
            }
          });
        }
        lt(t, e) {
          return new Promise((i, n) => {
            let s = null;
            e &&
              (s = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(p, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
              });
            } catch (t) {
              s && clearTimeout(s), n(t);
            }
          });
        }
      })();
      class ct {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class Dt extends ct {
        constructor(t, e, i) {
          super(t, e, i), (this.gt = i);
        }
      }
      var ht, dt, lt, pt;
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
      })(ht || (ht = {}));
      class gt extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.GET_SESSION_DATA), (this.data = i);
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
      })(dt || (dt = {}));
      class vt {
        constructor() {
          (this.vt = this.Ft.bind(this)), (this.yt = []), this.ft();
        }
        addMessageListener(t) {
          this.yt.push(t);
        }
        removeMessageListener(t) {
          this.yt = this.yt.filter((t) => {});
        }
        ft() {
          at.addListener(this.vt);
        }
        teardown() {
          (this.yt = []), at.removeListener(this.vt);
        }
        Ft(t, e, i) {
          if (!this.Ct(t)) return !1;
          return !!this.wt(t, e, i) || (i({}), !1);
        }
        Ct(t) {
          return t.target === ut;
        }
        wt(t, e, i) {
          let n = !1;
          return (
            this.yt.forEach((s) => {
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
      })(lt || (lt = {})),
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
        })(pt || (pt = {}));
      var Ft,
        yt,
        mt,
        ft = function (t, e, i, n) {
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
      class Ct {
        constructor(t, e) {
          (this.J = t), (this.Et = e), d("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case dt.LOAD_SESSION: {
              const e = t;
              return this._t(e.data), !1;
            }
            case lt.ON_MESSAGE: {
              const e = t;
              return this.bt(e), this.Et.onChatMessage(), !1;
            }
            case lt.ON_BUFFER: {
              const e = t;
              return this.jt(e), !1;
            }
            case lt.ON_TYPING: {
              const e = t;
              return this.Bt(e), !1;
            }
            case lt.ON_WATCHING_ADS: {
              const e = t;
              return this.At(e), !1;
            }
            case lt.UPDATE_SETTINGS: {
              const e = t;
              return this.kt(e), !1;
            }
            case lt.ON_REACTION: {
              const e = t;
              return this.Qt(e), !1;
            }
            case lt.ON_GIF: {
              const e = t;
              return this.It(e), !1;
            }
            case lt.USER_LIST: {
              const e = t;
              return this.xt(e), !1;
            }
            case lt.ON_WEB_RTC:
              return this.J.onWebRTC(t.data), !0;
            case rt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.St(e.data), i(), !1;
            }
            case pt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.J.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case pt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case pt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.J.doUpdateSettings(e), i(), !0;
            }
            case pt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case pt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.J.setReactionsActive(e), i(), !0;
            }
            case pt.RESET_VIEW:
              return this.J.resetChatWindow(!0), i(), !0;
            case pt.ON_FOCUS:
              return this.J.onSidebarFocus(), i(), !0;
            case pt.PREVIEW_REACTION: {
              const e = t.data;
              return this.J.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.J.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.J.teardown();
        }
        St(t) {
          return ft(this, void 0, void 0, function* () {
            this.J.isPartyWindowsActive()
              ? t.visible
                ? yield this.J.resetChatWindow()
                : yield this.J.hideChatWindow()
              : (yield this.J.setChatVisible(t.visible), this.J.fixPageControls());
          });
        }
        _t(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${y}/join/${e}`;
          if (
            (this.J.loadInitData(t),
            this.J.setPartyUrl(i),
            this.J.setSessionId(e),
            this.J.Tt(t.storageData),
            this.Et.onInitChat(),
            this.J.setSessionCreated(t.isCreate),
            this.J.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.J.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.J.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.J.addGif(e) : this.J.addMessage(e, !0);
        }
        bt(t) {
          this.J.addMessage(t.data);
        }
        Qt(t) {
          this.J.showReaction(t.data);
        }
        It(t) {
          this.J.addGif(t.data);
        }
        jt(t) {
          this.J.onBufferingMessage(t.data);
        }
        Bt(t) {
          this.J.onTypingMessage(t.data);
        }
        At(t) {
          this.J.onWatchingAdsMessage(t.data);
        }
        kt(t) {
          this.J.onUpdateSettingsMessage(t.data);
        }
        xt(t) {
          this.J.loadUserList(t.data.userList), this.J.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(Ft || (Ft = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(yt || (yt = {})),
        (function (t) {
          (t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty");
        })(mt || (mt = {}));
      class wt extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.BROADCAST), (this.data = i);
        }
      }
      class Et extends ct {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class _t extends Et {
        constructor(t, e, i) {
          super(t, e, dt.TEARDOWN), (this.data = i);
        }
      }
      class bt extends ct {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class jt extends bt {
        constructor(t, e) {
          super(t, e, mt.GET_SERVER_TIME);
        }
      }
      class Bt extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class At extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SET_BUFFERING), (this.data = i);
        }
      }
      class kt extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SET_WATCHING_ADS), (this.data = i);
        }
      }
      class Qt extends Et {
        constructor(t, e, i) {
          super(t, e, dt.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      class It extends Et {
        constructor(t, e, i) {
          super(t, e, dt.STAY_ALIVE), (this.data = i);
        }
      }
      const xt = "Failed to read chrome storage. Please refresh the page and try again",
        St = "Failed to connect to Script. Please refresh the page and try again",
        Tt = "An unexpected error occured. Please refresh the page and try again.";
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
        getItemsAsync(t) {
          return Mt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? i(new Error(xt)) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return Mt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? e(new Error(xt)) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(Pt);
      const Vt = Pt;
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
      const Nt = new (class {
        setItemsAsync(t) {
          return $t(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(Nt);
      const Rt = Nt;
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
      const Gt = new (class {
        getRedirectDataForTabAsync(t) {
          return Ut(this, void 0, void 0, function* () {
            const e = (yield Vt.getItemsAsync([E])).redirectDataMap,
              i = this.Mt(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.Pt(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return Ut(this, void 0, void 0, function* () {
            const e = (yield Vt.getItemsAsync([E])).redirectDataMap,
              i = this.Mt(t);
            e && e[i] && delete e[i], yield Rt.setItemsAsync({ [E]: e });
          });
        }
        Mt(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return Ut(this, void 0, void 0, function* () {
            const i = this.Mt(e);
            let n = yield Vt.getItemsAsync([E]);
            (n[i] = t), (n = this.Vt(n)), yield Rt.setItemsAsync({ [E]: n });
          });
        }
        Vt(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.Pt);
        }
        Pt(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(Gt);
      const Ot = Gt;
      var Lt = function (t, e, i, n) {
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
      class Ht {
        constructor(t, e, i) {
          (this.$t = []),
            (this.Nt = 0),
            (this.Rt = 0),
            (this.Ut = []),
            (this.Gt = !1),
            (this.Ot = !1),
            (this.Lt = !1),
            (this.Ht = !1),
            (this.Wt = void 0),
            (this.zt = () =>
              Lt(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Wt = !1);
                } catch (t) {
                  this.Wt = !0;
                }
              })),
            (this.Yt = (t = !1, e = !1) =>
              Lt(this, void 0, void 0, function* () {
                if (this.Kt) return;
                if (this.Lt) return void this.forceSync();
                if (!this.Ht && !e) return;
                const i = yield this.Jt();
                if (yield this.Xt(i.data, e)) yield this.qt(i);
                else if (t) {
                  if (yield this.Zt(e)) {
                    const t = yield this.Jt();
                    yield this.qt(t);
                  }
                }
              })),
            (this.te = () =>
              Lt(this, void 0, void 0, function* () {
                if (
                  (this.ee == Ft.PAUSED &&
                    this.ie &&
                    (clearInterval(this.ie),
                    (this.ie = setInterval(() => {
                      this.ne();
                    }, 6e4))),
                  this.se())
                )
                  return;
                if ((yield this.m.waitVideoDoneLoadingAsync(), this.se())) return;
                const t = yield this.m.getStateAsync();
                this.ee == Ft.PAUSED ? yield this.ue(t) : this.ee == Ft.PLAYING && (yield this.oe(t)), !1 === this.Ht && (this.Ht = !0);
              })),
            (this.m = t),
            (this.J = e),
            (this.re = i),
            this.re.setMessageForwarder(this),
            (this.ae = 0),
            (this.Kt = !1),
            (this.ee = Ft.PAUSED),
            (this.ce = 0),
            (this.De = 0),
            (this.he = 0),
            (this.de = this.m.getStreamingServiceName()),
            d("Video forwarder"),
            this.zt();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case dt.GET_VIDEO_DATA:
              return this.le(i), !0;
            case dt.LOAD_SESSION: {
              const e = t;
              return this.pe(e.data), !1;
            }
            case mt.UPDATE_SESSION: {
              const e = t;
              return this.ge(e.data), !1;
            }
            case mt.NEXT_EPISODE: {
              const e = t;
              return this.ve(e.data), !1;
            }
            case mt.REBOOT_SESSION: {
              const e = t;
              return this.Fe(e.data, i), !0;
            }
            case mt.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case lt.ON_WATCHING_ADS: {
              const e = t;
              return this.At(e), !1;
            }
            default:
              return !1;
          }
        }
        At(t) {
          t.data.anyoneWatchingAds && !this.Ot && (h.pushTask(this.m.doAdCheck.bind(this.m)), this.forceSync()),
            (this.Ot = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.ye;
        }
        set videoId(t) {
          this.ye = t;
        }
        sendTeardown(t) {
          const e = new _t(ut, nt, t);
          at.lt(e);
        }
        teardown() {
          (this.fe = void 0),
            this.Ce && clearInterval(this.Ce),
            this.ie && clearInterval(this.ie),
            this.m.pause(),
            h.disable(),
            this.re.stopListening();
        }
        Fe(t, e) {
          h.resetTasks(), this.ye == t.videoId && this.ge(t), e(this.ye == t.videoId);
          const i = new Qt(ut, nt, { eventType: "reboot", sessionId: this.fe });
          at.lt(i);
        }
        tryBroadcast(t = !1) {
          this.Gt ||
            (this.Lt
              ? this.forceSync()
              : 0 != this.m.uiEventsHappening || this.Kt || !this.fe || h.hasTaskInQueue(tt) || h.pushTask(() => this.Yt(t), tt));
        }
        setBuffering(t) {
          if (this.fe) {
            const e = new At(ut, nt, { buffering: t });
            at.lt(e);
          }
        }
        isWatchingAds() {
          return this.Gt;
        }
        setWatchingAds(t, e) {
          if (this.fe) {
            this.Gt = t;
            const i = new kt(ut, nt, { watchingAds: t, adDurationLeft: e });
            at.lt(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return Lt(this, void 0, void 0, function* () {
            if (this.fe && t !== this.ye && t !== this.we) {
              (this.we = t), (this.Kt = !0);
              const e = new Bt(ut, nt, { nextEpisode: t }),
                i = yield at.lt(e);
              i && "Locked Session" === i.errorMessage && (yield this.Ee(t));
            }
          });
        }
        Ee(t) {
          return Lt(this, void 0, void 0, function* () {
            try {
              yield r(() => t == this.ye, 1e4)(), (this.Kt = !1);
            } catch (t) {
              this._e("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: $ };
              this.sendTeardown(e);
            }
          });
        }
        Xt(t, e) {
          return Lt(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === Ft.PAUSED && t.lastKnownTime < M) return !1;
            const i = Math.abs(t.lastKnownTime - this.be());
            if (t.state == this.ee && i < M) return !1;
            if (i >= M) {
              const t = new Qt(ut, nt, { name: "video_seek", action: { source: "self" } });
              at.lt(t), this.de == K.AMAZON || this.de == K.PARAMOUNT ? yield u(200)() : this.de == K.HBO_MAX && (yield u(500)());
            }
            return !0;
          });
        }
        Jt() {
          return Lt(this, void 0, void 0, function* () {
            const t = yield this.m.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Rt), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new wt(ut, nt, t);
          });
        }
        forceSync() {
          h.pushTask(this.te, Z);
        }
        ve(t) {
          return Lt(this, void 0, void 0, function* () {
            (this.ae = Date.now()), h.pushTask(() => this.je(t));
          });
        }
        je(t) {
          return Lt(this, void 0, void 0, function* () {
            try {
              d("Continue next episode called"),
                (this.Kt = !0),
                yield this.m.jumpToNextEpisode(t),
                yield this.re.loadNewVideoAsync(t.videoId),
                d("After load new video"),
                this.re.reloadListeners(),
                this.he < this.ae &&
                  ((this.ee = Ft.PAUSED),
                  (this.ce = 0),
                  (this.De = Date.now()),
                  d("Sending broadcast after next episode"),
                  h.pushTask(() => this.Yt(!0, !0), tt),
                  h.removeTask(Z)),
                (this.ye = t.videoId),
                (this.Kt = !1);
              const e = new Qt(ut, nt, { name: "video_start", action: { description: "video session has begun" } });
              at.lt(e);
            } catch (t) {
              this._e("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return Lt(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new It(ut, nt, { tabId: n, persist: t });
            at.lt(s);
            const u = yield this.Be();
            (u.date = Date.now()), Ot.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return Lt(this, void 0, void 0, function* () {
            try {
              const i = yield this.Be();
              i.date = Date.now();
              const n = yield this.Ae(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new It(ut, nt, { tabId: s, persist: !1 });
              yield at.lt(u), yield Ot.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this._e("Failed to fix next episode.");
              const e = new _t(ut, nt, { showAlert: !0, alertModal: R });
              at.lt(e);
            }
          });
        }
        Be() {
          return Lt(this, void 0, void 0, function* () {
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
                      e(t), this._e("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.fe, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        Ae(t) {
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
        ge(t) {
          (this.he = Date.now()), h.pushTask(this.ke(t).bind(this));
        }
        ke(t) {
          if (t.state === Ft.PAUSED && this.ee === Ft.PLAYING) {
            this.ne();
            const t = new Qt(ut, nt, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            at.lt(t);
          } else if (t.state === Ft.PLAYING && this.ee === Ft.PAUSED) {
            const t = new Qt(ut, nt, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            at.lt(t), this.ne();
          }
          return (this.ee = t.state), (this.ce = t.lastKnownTime), (this.De = t.lastKnownTimeUpdatedAt), this.te;
        }
        le(t) {
          var e;
          return Lt(this, void 0, void 0, function* () {
            try {
              const e = yield this.m.getVideoDataAsync(),
                i = yield this.m.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.J.getChatVisible()),
                (e.is_adblock_enabled = this.Wt),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.ce),
                t(e);
            } catch (i) {
              this._e(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        _e(t) {
          const e = new Qt(ut, nt, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          at.lt(e);
        }
        Zt(t) {
          return Lt(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  Lt(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Jt();
                      (yield this.Xt(i.data, t))
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
        qt(t) {
          return Lt(this, void 0, void 0, function* () {
            if (this.Kt || this.Gt) return;
            const e = this.ee;
            if (t.data.bufferingState) {
              (t.data.state = Ft.PAUSED), yield at.lt(t, 1e3), yield this.m.waitVideoDoneLoadingAsync();
              const i = yield this.Jt();
              (i.data.bufferingState = !0), e == Ft.PLAYING && (i.data.state = Ft.PLAYING), yield at.lt(i, 1e3);
            } else yield at.lt(t, 1e3);
          });
        }
        pe(t) {
          return Lt(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.fe = e.sessionId),
              (this.ee = e.state),
              (this.ce = Number(e.lastKnownTime)),
              (this.De = Number(e.lastKnownTimeUpdatedAt)),
              (this.ye = e.videoId),
              (this.Ot = !1),
              "true" == e.controlLock && (this.Lt = !0),
              t.isCreate ? ((this.Ht = !0), h.pushTask(this.Yt.bind(this), tt)) : this.forceSync();
            const i = new Qt(ut, nt, { name: "video_start", action: { description: "video session has begun" } });
            at.lt(i), this.re.startListening(), this.Qe();
          });
        }
        Ie() {
          return new Promise((t) => {
            const e = new jt(ut, nt),
              i = Date.now();
            at
              .lt(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (a(this.$t, e - i, 5), (this.Nt = c(this.$t)), a(this.Ut, e - Math.round(this.Nt / 2) - n, 5), (this.Rt = c(this.Ut)));
                }
              })
              .catch((t) => {
                d(t), this._e(t);
              }),
              t();
          });
        }
        ne() {
          const t = new Qt(ut, nt, {
            name: "video_heartbeat",
            action: { description: "new heartbeat", reason: "Heartbeat session was due" }
          });
          at.lt(t);
        }
        Qe() {
          this.Ce && clearInterval(this.Ce),
            this.ie && clearInterval(this.ie),
            (this.Ce = setInterval(() => {
              h.hasTaskInQueue(Z) || h.pushTask(this.te, Z);
            }, 5e3)),
            (this.ie = setInterval(() => {
              this.ne();
            }, 6e4)),
            (this.xe = setInterval(() => {
              h.hasTaskInQueue(q) || h.pushTask(this.Ie.bind(this), q);
            }, 12500)),
            this.Ie();
        }
        se() {
          return !this.fe || this.m.uiEventsHappening > 0 || this.Gt || this.Kt || !this.re.shouldSync();
        }
        ue(t) {
          return Lt(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== yt.PAUSED && (yield this.m.pause()), Math.abs(this.ce - i) > 2500)) {
              yield this.m.setCurrentTime(this.ce);
              const t = new Qt(ut, nt, { name: "video_seek", action: { source: "another user" } });
              at.lt(t);
            }
          });
        }
        oe(t) {
          return Lt(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.be();
            if ((e == yt.PAUSED && (yield this.m.play()), Math.abs(n - i) > 2500)) {
              yield this.m.setCurrentTime(n), yield this.m.play();
              const t = new Qt(ut, nt, { name: "video_seek", action: { source: "another user" } });
              at.lt(t);
            }
          });
        }
        Se() {
          return this.ee === Ft.PLAYING ? Date.now() - (this.De + this.Rt) : 0;
        }
        be() {
          return this.ce + this.Se();
        }
        get changingVideo() {
          return this.Kt;
        }
        set changingVideo(t) {
          this.Kt = t;
        }
      }
      var Wt = function (t, e, i, n) {
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
      var zt = function (t, e, i, n) {
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
      var Yt = function (t, e, i, n) {
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
      class Kt extends class {
        constructor() {
          (this.Te = 0), (this.Lt = !1);
        }
        set hostOnly(t) {
          this.Lt = t;
        }
        get hostOnly() {
          return this.Lt;
        }
        get uiEventsHappening() {
          return this.Te;
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
          const i = new Qt(ut, nt, { name: "video_error", action: { description: t, reason: e } });
          at.lt(i);
        }
        doAdCheck() {
          return zt(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          var t, e;
          super(),
            (this.Me = !1),
            (this.Pe = 500),
            (this.Ve = 0),
            (this.$e = {}),
            (this.Ne = null !== (t = this.ot()) && void 0 !== t ? t : ""),
            (this.Re = X.getVideoType(new URL(window.location.href))),
            (this.Ue = new CustomEvent("tpVideoNode", { detail: { type: "play" } })),
            (this.Ge = new CustomEvent("tpVideoNode", { detail: { type: "pause" } })),
            (this.Te = 0),
            (this.Oe = 0),
            (this.Le = {
              time: 0,
              playbackState: 1,
              currentAd: void 0,
              duration: 0,
              videoId: null !== (e = this.He()) && void 0 !== e ? e : "",
              canFixChat: !0
            });
        }
        canFixChat() {
          return this.Le.canFixChat;
        }
        isWatchingAd() {
          return void 0 !== this.Le.currentAd;
        }
        setVideoEventListener(t) {
          this.re = t;
        }
        get videoType() {
          return this.Re;
        }
        getSeriesName() {
          return this.Le.seriesName;
        }
        get playCheckRunning() {
          return this.Me;
        }
        set playCheckRunning(t) {
          this.Me = t;
        }
        onNode(t) {
          const e = t.detail;
          if ("ManualClick" == e.type) {
            const t = this.getVideoElement();
            t && (this.We(t, 0.5, "mousedown"), this.We(t, 0.5, "mouseup"));
          } else "StateUpdate" == e.type && ((this.Ve = e.updatedAt), (this.Le = e.playerState));
        }
        removeVideoCover() {
          if (jQuery("[aria-label*='Choose language']").length) return !1;
          if (!jQuery("[style*='btn_play_large_initial']").length || !jQuery("[style*='btn_play_large_initial']").is(":visible"))
            return (
              !(
                !jQuery("[data-testid='ContentDetailsPlayVideoButton']").length ||
                !jQuery("[data-testid='ContentDetailsPlayVideoButton']").is(":visible")
              ) && (jQuery("[data-testid='ContentDetailsPlayVideoButton']").click(), !0)
            );
          jQuery("[style*='btn_play_large_initial']").addClass("startPlay");
          const t = document.querySelector(".startPlay");
          return !!t && (this.We(t, 0.5, "mousedown"), this.We(t, 0.5, "mouseup"), !0);
        }
        loadVideoData() {
          var t;
          (this.Ne = null !== (t = this.ot()) && void 0 !== t ? t : ""), (this.Re = X.getVideoType(new URL(window.location.href)));
        }
        isVideoReady() {
          const t = this.ze();
          return "paused" === t || "playing" === t;
        }
        waitVideoApiReadyAsync() {
          var e, i;
          return Yt(this, void 0, void 0, function* () {
            console.log("checking if joining");
            const n =
              null !=
              (yield Ot.getRedirectDataForTabAsync(
                null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0
              ));
            yield r(
              () => (
                n && this.removeVideoCover(),
                (this.Re = X.getVideoType(new URL(window.location.href))),
                null != this.getVideoElement() && this.Re !== t.OTHER
              ),
              1 / 0,
              this.Pe
            )(),
              n && this.removeVideoCover(),
              yield this.waitUpdateAPIState(),
              yield this.skipPromo(),
              this.loadVideoData();
          });
        }
        waitVideoDoneLoadingAsync() {
          var t;
          return Yt(this, void 0, void 0, function* () {
            yield null === (t = this.re) || void 0 === t ? void 0 : t.checkWatchingAds();
            const e = this.getVideoElement();
            e && 1 === e.readyState && (this.We(e, 0.5, "mousedown"), this.We(e, 0.5, "mouseup")),
              yield r(() => {
                const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
                return window.dispatchEvent(t), this.ze() !== yt.LOADING;
              }, 5e3)();
          });
        }
        get videoId() {
          return this.ye;
        }
        set videoId(t) {
          this.ye = t;
        }
        checkUpdateId() {
          this.Le.videoId != this.videoId && (d("Id change"), (this.videoId = this.Le.videoId));
        }
        getStateAsync() {
          return Yt(this, void 0, void 0, function* () {
            return (
              yield this.waitUpdateAPIState(),
              new Promise((t, e) => {
                const i = this.ze(),
                  n = this.Ye();
                null != i && null != n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
              })
            );
          });
        }
        waitUpdateAPIState() {
          var t, e, i, n, s, u;
          return Yt(this, void 0, void 0, function* () {
            const o = Date.now(),
              a = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
            window.dispatchEvent(a);
            try {
              yield r(() => this.Ve >= o, 500, 10)();
            } catch (o) {
              (this.Le = {
                playbackState: (null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.paused) ? 3 : 2,
                time: Math.floor(
                  1e3 *
                    (null !== (i = null === (e = this.getVideoElement()) || void 0 === e ? void 0 : e.currentTime) && void 0 !== i ? i : 0)
                ),
                currentAd: void 0,
                videoId: null !== (n = this.He()) && void 0 !== n ? n : "",
                duration: Math.floor(
                  1e3 * (null !== (u = null === (s = this.getVideoElement()) || void 0 === s ? void 0 : s.duration) && void 0 !== u ? u : 0)
                ),
                canFixChat: !0,
                seriesName: this.Le.seriesName,
                episodeNum: this.Le.episodeNum,
                seasonNum: this.Le.seasonNum
              }),
                (this.Ve = Date.now());
            }
          });
        }
        getVideoDataAsync() {
          var t, e, i;
          return Yt(this, void 0, void 0, function* () {
            yield this.waitUpdateAPIState(), this.loadVideoData(), (this.ye = this.Le.videoId);
            const n = this.ot(),
              s = this.getScreenSize(),
              u = this.Ke(),
              o = this.getVideoContent(
                null !== (t = this.videoId) && void 0 !== t ? t : "",
                null != n ? n : "",
                window.location.href,
                this.Re,
                u
              ),
              r = yield this.getStateAsync();
            return {
              videoTitle: this.Ne,
              videoDuration: Math.floor(null !== (e = this.Le.duration) && void 0 !== e ? e : 0),
              videoId: null !== (i = this.Le.videoId) && void 0 !== i ? i : "",
              videoType: this.Re,
              screen: s,
              content: o,
              videoState: r.playbackState
            };
          });
        }
        jumpToNextEpisode(t) {
          return Yt(this, void 0, void 0, function* () {
            if (((this.Te += 1), this.videoId !== t.videoId))
              try {
                window.dispatchEvent(
                  new CustomEvent("tpVideoNode", { detail: { type: "nextEpisode", videoId: t.videoId, videoType: t.videoType } })
                );
              } catch (t) {
                d("Click next episode failed, but we will wait and see if the video changes in time. " + t),
                  this.logError("Click next episode failed, but we will wait and see if the video changes in time. ", t);
              }
            this.Te -= 1;
          });
        }
        skipPromo() {
          return Yt(this, void 0, void 0, function* () {});
        }
        getStreamingServiceName() {
          return K.HBO_MAX;
        }
        pause() {
          return new Promise((t, e) => {
            d("Attempting to pause"),
              (this.Te += 1),
              (() => {
                Yt(this, void 0, void 0, function* () {
                  try {
                    window.dispatchEvent(this.Ge),
                      yield r(() => {
                        const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
                        return window.dispatchEvent(t), this.ze() === yt.PAUSED;
                      }, 2500)(),
                      t();
                  } catch (t) {
                    this.logError("video was unable to pause correctly", t), e(t);
                  } finally {
                    this.Te -= 1;
                  }
                });
              })();
          });
        }
        play() {
          return new Promise((t, e) => {
            d("Attempting to play"),
              (this.Te += 1),
              (() => {
                Yt(this, void 0, void 0, function* () {
                  try {
                    window.dispatchEvent(this.Ue),
                      yield r(() => {
                        const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
                        return window.dispatchEvent(t), this.ze() === yt.PLAYING;
                      }, 2500)(),
                      t();
                  } catch (t) {
                    this.logError("video was unable to play correctly", t), e(t);
                  } finally {
                    this.Te -= 1;
                  }
                });
              })();
          });
        }
        freeze(t) {
          return Yt(this, void 0, void 0, function* () {
            this.Te += 1;
            try {
              yield this.pause(), yield u(t)(), yield this.play();
            } finally {
              this.Te -= 1;
            }
          });
        }
        setCurrentTime(t) {
          return Yt(this, void 0, void 0, function* () {
            d("Seek called", !0), (this.Te += 1);
            try {
              window.dispatchEvent(new CustomEvent("tpVideoNode", { detail: { type: "seek", time: t / 1e3 } })),
                yield u(500)(),
                yield this.waitVideoDoneLoadingAsync();
            } finally {
              this.Te -= 1;
            }
          });
        }
        Je() {
          return this.Oe;
        }
        Ye() {
          return Math.floor(this.Le.time);
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        ze() {
          const t = this.getVideoElement();
          return null === t || "" === t.src
            ? yt.NOT_READY
            : 4 == this.Le.playbackState
            ? yt.LOADING
            : 3 == this.Le.playbackState
            ? yt.PAUSED
            : 2 == this.Le.playbackState
            ? yt.PLAYING
            : yt.NOT_READY;
        }
        ot() {
          var t;
          if (this.Le) return null !== (t = this.Le.seriesName) && void 0 !== t ? t : this.Le.episodeName;
        }
        Ke() {
          let t = {};
          return (t = { episodeNum: this.Le.episodeNum, seasonNum: this.Le.seasonNum, title: this.Le.episodeName }), t;
        }
        tryUpdateVideoTitle() {
          const t = this.ot();
          return null != t && t !== this.Ne && (d("New current Title: " + t), (this.Ne = t), !0);
        }
        updateVideoId() {
          return Yt(this, void 0, void 0, function* () {
            yield this.waitUpdateAPIState(), d("Trying to update Video iD");
            try {
              yield r(() => {
                const t = new CustomEvent("tpVideoNode", { detail: { type: "UpdateState" } });
                return (
                  window.dispatchEvent(t), !(!this.Le.videoId || this.Le.videoId == this.videoId) && ((this.videoId = this.Le.videoId), !0)
                );
              }, 1e4)(),
                d("UPDATED VIDEO ID: " + this.Ne + "|" + this.videoId);
            } catch (t) {
              throw (this.logError("unable to get new vieoId in time with error " + t), new Error("Couldn't get new videoId in time."));
            }
          });
        }
        He() {
          return X.getVideoId(new URL(window.location.href));
        }
        triggerNextEpisode() {
          const t = this.getVideoElement();
          if (null === t) throw new Error("Video element not found.");
          d("TRIGGERING NEXT EPISODE"), (t.currentTime = t.duration);
        }
        showControls() {
          var t, e, i, n;
          (this.Te += 1), jQuery("video").addClass("videoObject");
          const s = document.querySelector(".videoObject");
          if (s) {
            const u = 100,
              o = 100,
              r = jQuery(window),
              a = {
                bubbles: !0,
                button: 0,
                screenX: u - (null !== (t = r.scrollLeft()) && void 0 !== t ? t : 0),
                screenY: o - (null !== (e = r.scrollTop()) && void 0 !== e ? e : 0),
                clientX: u - (null !== (i = r.scrollLeft()) && void 0 !== i ? i : 0),
                clientY: o - (null !== (n = r.scrollTop()) && void 0 !== n ? n : 0),
                offsetX: u,
                offsetY: o,
                pageX: u,
                pageY: o,
                currentTarget: s
              };
            s.dispatchEvent(new MouseEvent("mousemove", a));
          }
          this.Te -= 1;
        }
        rt() {
          const t = document.querySelector("[style*='slider']");
          if (t && t.parentElement && t.parentElement.parentElement && t.parentElement.parentElement.parentElement)
            return t.parentElement.parentElement.parentElement;
        }
        We(t, e, i) {
          const { width: n, height: s, left: u, top: o } = t.getBoundingClientRect(),
            r = u + n * e,
            a = o + s / 2,
            c = document.createEvent("MouseEvents");
          c.initMouseEvent(i, !0, !0, window, 0, 0, 0, r, a, !1, !1, !1, !1, 0, null), t.dispatchEvent(c);
        }
        getUpdateSessionDataAsync() {
          return Yt(this, void 0, void 0, function* () {
            yield this.waitUpdateAPIState();
            const t = this.Ye();
            if (void 0 === t) throw new Error();
            const e = this.getVideoElement();
            return { state: e && !e.paused ? Ft.PLAYING : Ft.PAUSED, lastKnownTime: t, lastKnownTimeUpdatedAt: Date.now() };
          });
        }
      }
      var Jt,
        Xt = i(7206),
        qt = i.n(Xt),
        Zt = function (t, e, i, n) {
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
          var e, i, n, s, u, o;
          (this.Xe = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : C
          }),
            (this.qe = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = Q(t)),
            (this.Xe.userIcon = t),
            Rt.setItemsAsync({ userIcon: t }),
            d("new user settings after set user icon: " + JSON.stringify(this.Xe));
        }
        saveUserNickname(t) {
          (this.Xe.userNickname = t),
            Rt.setItemsAsync({ userNickname: t }),
            d("new user settings after set user nickname: " + JSON.stringify(this.Xe));
        }
        saveUserSettings(t) {
          return Zt(this, void 0, void 0, function* () {
            const e = Q(t.userIcon);
            (this.Xe = t),
              (this.Xe.userIcon = e),
              yield Rt.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              d("new user settings after save: " + JSON.stringify(this.Xe));
          });
        }
        get userSettings() {
          return this.Xe;
        }
        get permId() {
          return this.qe;
        }
        get userIcon() {
          return this.Xe.userIcon;
        }
        get userNickname() {
          return this.Xe.userNickname;
        }
      }
      class ee extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SET_TYPING), (this.data = i);
        }
      }
      class ie extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SEND_MESSAGE), (this.data = i);
        }
      }
      class ne extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class se extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SEND_REACTION), (this.data = i);
        }
      }
      class ue extends Dt {
        constructor(t, e, i) {
          super(t, e, ht.SEND_GIF), (this.data = i);
        }
      }
      var oe = new Uint8Array(16);
      function re() {
        if (
          !Jt &&
          !(Jt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Jt(oe);
      }
      const ae = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const ce = function (t) {
        return "string" == typeof t && ae.test(t);
      };
      for (var De = [], he = 0; he < 256; ++he) De.push((he + 256).toString(16).substr(1));
      const de = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            De[t[e + 0]] +
            De[t[e + 1]] +
            De[t[e + 2]] +
            De[t[e + 3]] +
            "-" +
            De[t[e + 4]] +
            De[t[e + 5]] +
            "-" +
            De[t[e + 6]] +
            De[t[e + 7]] +
            "-" +
            De[t[e + 8]] +
            De[t[e + 9]] +
            "-" +
            De[t[e + 10]] +
            De[t[e + 11]] +
            De[t[e + 12]] +
            De[t[e + 13]] +
            De[t[e + 14]] +
            De[t[e + 15]]
          ).toLowerCase();
        if (!ce(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const le = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || re)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return de(n);
      };
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
      const ge = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? A.includes(t.split("?newIconUrl=")[1]) && j.includes(t.split("?newIconUrl=")[0]) : A.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return B[Math.floor(Math.random() * B.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        Ze(t) {
          return pe(this, void 0, void 0, function* () {
            try {
              yield Rt.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return pe(this, void 0, void 0, function* () {
            const t = yield Vt.getAllItemsAsync(),
              e = ge.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.Ze(e), e;
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
      Object.freeze(ge);
      const ve = ge;
      var Fe;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Fe || (Fe = {}));
      var ye = function (t, e, i, n) {
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
      class me {
        constructor(t) {
          (this.ti = this.ei.bind(this)),
            (this.ii = this.resetIdleTimer.bind(this)),
            (this.bt = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.ni(t.data);
            }),
            (this.si = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.ui = (t) => {
              this.J.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new Qt(ut, nt, n);
              at.lt(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.J.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.J.toggleGIFs();
            }),
            (this.ni = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new Qt(ut, nt, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              at.lt(n);
              const s = new Qt(ut, nt, { eventType: `emoji-click-${i}`, sessionId: this.J.getSessionId() });
              at.lt(s), h.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.J.focusChat(), this.oi(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.ri(), this.J.onInputChange();
            }),
            (this.J = t);
        }
        ai() {
          d("Idle Warning called"), G(N);
          const t = new Qt(ut, nt, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          at.lt(t);
          const e = new Qt(ut, nt, { eventType: "idle-warn-2hr", sessionId: this.J.getSessionId() });
          at.lt(e), (this.ci = setTimeout(this.Di.bind(this), V));
        }
        Di() {
          d("Idle kick called");
          const t = new Qt(ut, nt, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new _t(ut, nt, H);
          at.lt(t), at.lt(e);
        }
        resetIdleTimer() {
          this.hi && clearTimeout(this.hi), this.ci && (O(), clearTimeout(this.ci)), (this.hi = setTimeout(this.ai.bind(this), P));
        }
        di() {
          (this.hi = setTimeout(this.ai.bind(this), P)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.ii();
            }),
            (window.onfocus = () => this.ii()),
            (window.onmousedown = () => this.ii()),
            (window.ontouchstart = () => this.ii()),
            (window.onkeydown = () => this.ii());
        }
        li() {
          this.hi && clearTimeout(this.hi),
            this.ci && clearTimeout(this.ci),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          d("Listening for chat events"), this.di(), this.pi(), this.initWindowListeners();
        }
        stopListening() {
          this.gi(), this.li(), this.vi();
        }
        ei() {
          this.J.clearUnreadCount();
        }
        Fi(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.J.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.ti),
            window.addEventListener("message", this.bt),
            document.addEventListener("dragstart", this.yi.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.J.onFullScreen),
            document.addEventListener("fullscreenchange", this.J.onFullScreen),
            document.addEventListener("keydown", this.si, !0),
            document.addEventListener("emoji-click", this.ni),
            document.addEventListener("click", this.ui);
        }
        pi() {
          jQuery(window).on("focus", this.ti),
            jQuery("#party-tab").on("click", this.J.togglePartyTab.bind(this.J)),
            jQuery("#friends-tab").on("click", this.J.toggleFriendsTab.bind(this.J)),
            jQuery(".user-icon").on("click", this.J.toggleLargeUserIconButton.bind(this.J)),
            jQuery("#user-icon").on("click", this.J.toggleIconContainer.bind(this.J)),
            jQuery("#link-icon").on("click", this.J.linkIconListener.bind(this.J)),
            jQuery("#reset-icon").on("click", this.J.resetIconListener.bind(this.J)),
            jQuery(".image-button").on("click", this.J.userIconSelectorListener.bind(this.J)),
            jQuery("#chat-input-container").on("keydown", this.J.onChatKeyDown.bind(this.J)),
            jQuery("#nickname-edit").on("keydown", this.J.onChatKeyDown.bind(this.J)),
            jQuery("#chat-input").on("keypress", this.J.onChatKeyPress.bind(this.J)),
            jQuery("#chat-input").on("input", this.J.onInputChange.bind(this.J)),
            jQuery("#gif-search").on("keyup", this.J.onGifSearch.bind(this.J)),
            jQuery("#saveChanges").on("click", this.J.saveChangesListener.bind(this.J)),
            jQuery("#cancelNickname").on("click", this.J.cancelNicknameListener.bind(this.J)),
            jQuery("#chat-wrapper").on("mouseup", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.J.onChatKeyUp.bind(this.J)),
            jQuery("#emoji-picker-btn").on("click", this.J.addEmojiPicker.bind(this.J)),
            jQuery("#gif-btn").on("click", this.J.addGifPicker.bind(this.J)),
            jQuery(".gif-img").on("click", this.J.clickGif.bind(this.J)),
            jQuery(".gif-results").on("click", "video, img", this.J.clickGif.bind(this.J)),
            jQuery("#category-container").on("click", "video", this.J.clickGif.bind(this.J)),
            jQuery("#gif-input-back").on("click", this.J.resetGif.bind(this.J)),
            jQuery("#reaction-btn").on("click", this.J.addReactionTab.bind(this.J)),
            jQuery("#chat-input-container").on("click", this.mi.bind(this)),
            jQuery("#chat-input").on("input", this.ri.bind(this)),
            jQuery("#chat-input").on("drop", this.fi.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.J.onScrollToBottom.bind(this.J)),
            this.Ci(),
            document.addEventListener("keydown", this.si.bind(this), !0),
            this.J.initCustomListeners();
        }
        Ci() {
          jQuery("#tp-heart-button").on("click", () => {
            this.J.onReactionClicked(Fe.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.J.onReactionClicked(Fe.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.J.onReactionClicked(Fe.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.J.onReactionClicked(Fe.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.J.onReactionClicked(Fe.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.J.onReactionClicked(Fe.FIRE);
            });
        }
        ri() {
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
        fi(t) {
          t.preventDefault();
        }
        yi(t) {
          t.preventDefault();
        }
        mi(t) {
          t.target === jQuery("#chat-input")[0] && this.J.focusChat();
        }
        oi(t) {
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
        wi(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Ei(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.wi(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return ye(this, void 0, void 0, function* () {
            const i = yield Vt.getItemsAsync([w]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : _;
            this.Ei(n) || (n = _),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield Rt.setItemsAsync({ [w]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        vi() {
          jQuery(window).off("focus", this.ti),
            document.removeEventListener("emoji-click", this.ni),
            document.removeEventListener("keydown", this.si, !0),
            document.removeEventListener("click", this.ui),
            window.removeEventListener("message", this.bt),
            document.removeEventListener("webkitfullscreenchange", this.J.onFullScreen),
            document.removeEventListener("fullscreenchange", this.J.onFullScreen);
        }
        gi() {
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
      class fe {
        constructor(t) {
          (this.J = t),
            (this._i = []),
            (this.bi = 0),
            (this.ji = document.title),
            (this.Bi = 0),
            (this.Ai = new Map()),
            (this.ki = new Map()),
            (this.Qi = []),
            (this.Ii = []),
            (this.xi = ""),
            d("Message Controller");
        }
        Si(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${Q(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${Q(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Ti(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.J.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${Q(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${Q(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Q(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Mi(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Q(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Q(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Pi(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.J.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Q(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${Q(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Q(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Vi(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.qe = e.permId), (u.$i = i), (u.Ni = n), (u.Ri = e), (u.Ui = s);
        }
        reloadMessages() {
          this.J.queueMessageForFrame(pt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this._i));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this._i = t;
        }
        Gi(t, e) {
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
            (void 0 === i && (i = this._i.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.Ai.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this._i.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Gi(n, t);
          this._i.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.J.queueMessageForFrame(pt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Mi(o, u, s) : this.Si(o, r, u, s);
          this.Vi(a, u, o, r, s), this.scrollToBottom(), this.Oi();
        }
        addGif(t, e) {
          void 0 === e && (e = this._i.length);
          const i = this._i.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Gi(i, t);
          this._i.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            o = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.J.queueMessageForFrame(pt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: o });
          const r = "" === o ? this.Pi(s, t, n) : this.Ti(s, o, t, n);
          (r[0].Li = !0), this.Vi(r, t, s, o, n), u(100)().then(this.scrollToBottom.bind(this)), this.Oi();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.bi > 0 && ((this.bi = 0), (document.title = this.ji));
        }
        Oi() {
          (this.bi += 1), (this.Bi += 1), document.hasFocus() || (document.title = "(" + String(this.bi) + ") " + this.ji);
        }
        getUserIconURL(t, e = "") {
          if (!this.Ai.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Hi();
            this.Ai.set(t, n), this.Ii.push(n);
          }
          return this.Ai.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return A.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : j.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.ki.has(t) || (this.ki.set(t, e), this.Qi.push(e)), Q(this.ki.get(t));
        }
        Hi() {
          let t = chrome.runtime.getURL("img/icons/General/" + j[Math.floor(Math.random() * j.length)]);
          if (this.Ii.length < k.General.length)
            for (; this.Ii.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + j[Math.floor(Math.random() * j.length)]);
          return t;
        }
        Wi(t) {
          const e = t[0],
            i = e.qe;
          let n = e.$i;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.$i = n));
          const s = e.Ni;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Ri,
                o = e.Ui;
              let r;
              if (
                (e.Li && s && "gifObject" in s && o && (r = "" == u ? this.Pi(n, s, o) : this.Ti(n, u, s, o)),
                !e.Li && s && "isSystemMessage" in s && o && (r = "" == u ? this.Mi(n, s, o) : this.Si(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.qe = i), (e.$i = n), (e.Ni = u), (e.Ri = s), (e.Ui = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.xi = t), this.J.queueMessageForFrame(pt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.xi), jQuery(".user-icon img").attr("src", this.xi);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Wi(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Wi(jQuery(e[t]));
          this.J.isChatFrameActive() && this.reloadMessages();
        }
        zi(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              A.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : j.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              A.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : j.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = k.General.filter((t) => !this.Ii.includes(t));
            0 === t.length && (t = k.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.zi(e);
          this.Ai.set(t, i), this.Ii.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = Q(e);
          this.ki.set(t, i), this.Qi.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.zi(e);
          this.Ai.set(t, n), this.Ii.push(n), this.ki.set(t, i), this.Qi.push(i), this.renderSidebar();
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
          const t = new Qt(ut, nt, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          at.lt(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.J.getSessionId() },
            i = new Qt(ut, nt, e);
          at.lt(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new Qt(ut, nt, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              at.lt(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.J.getSessionId() },
                i = new Qt(ut, nt, e);
              at.lt(i);
            });
        }
      }
      class Ce {
        constructor(t) {
          (this.Yi = !1), (this.Ki = !1), (this.Ot = !1), (this.J = t);
        }
        setupPresenceIndicator() {
          (this.Yi = !1), (this.Ki = !1), (this.Ot = !1), this.Ji();
        }
        Xi() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Yi = t), this.Ji();
        }
        setBufferingPresenceVisible(t) {
          (this.Ki = t), this.Ji();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Ot = t), this.Ji();
        }
        getWatchingAdsVisible() {
          return this.Ot;
        }
        qi() {
          return this.Ot
            ? "People are watching ads..."
            : this.Yi && this.Ki
            ? "People are typing and buffering..."
            : this.Yi
            ? "People are typing..."
            : this.Ki
            ? "People are buffering..."
            : "";
        }
        Ji() {
          const t = this.qi();
          this.Xi().text(t), this.J.queueMessageForFrame(pt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var we = function (t, e, i, n) {
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
      class _e extends class {
        constructor() {
          (this.Zi = !1),
            (this.tn = 1),
            (this.en = ""),
            (this.fe = ""),
            (this.nn = "0"),
            (this.sn = ""),
            (this.un = !0),
            (this.on = !1),
            (this.rn = 0),
            (this.an = []),
            (this.cn = new D()),
            (this.Dn = !1),
            (this.hn = void 0),
            (this.dn = !0),
            (this.ln = this.pn()),
            (this.gn = this.pn()),
            (this.vn = !1),
            (this.Fn = !1),
            (this.yn = []),
            (this.logEvent = (t) => {
              const e = new Qt(ut, nt, t);
              at.lt(e);
            }),
            (this.checkInitReactionContainer = () => {
              Vt.getItemsAsync([g]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.Et) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.cn.pushTask(() => Rt.setItemsAsync({ [g]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.pn() && ((this.ln = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.pn() && ((this.ln = this.pn()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.Et) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.mn = !1),
            (this.Cn = new me(this)),
            (this.wn = new Ce(this)),
            (this.En = new fe(this)),
            (this._n = void 0),
            (this.bn = void 0),
            (this.jn = !1);
        }
        setPageControls(t) {
          this.Et = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.Et) || void 0 === t || t.enablePartyIcons(), null === (e = this.Et) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return we(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.un = t), t && !this.Bn() && this.reloadChat();
          });
        }
        _e(t, e) {
          const i = new Qt(ut, nt, { name: "error", action: { reason: e, description: t } });
          at.lt(i);
        }
        getChatWindowVisible() {
          return this.gn;
        }
        setChatWindowActive(t) {
          this.ln = t;
        }
        isChatFrameActive() {
          return this.dn;
        }
        isPartyWindowsActive() {
          return this.ln;
        }
        shouldChatBeVisible() {
          return this.un;
        }
        incrementEmojiCount() {
          this.rn++;
        }
        resetEmojiCount() {
          this.rn = 0;
        }
        getEmojiCount() {
          return this.rn;
        }
        setChatFrameReady(t) {
          this.Dn && this.An(), (this.Dn = !0), (this.kn = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              this.Qn(t, e);
            })
          );
        }
        Qn(t, e) {
          return we(this, void 0, void 0, function* () {
            const i = this.kn,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: ut };
            at.lt(n);
          });
        }
        In() {
          var t;
          return we(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield r(() => this.Dn && null != this.kn, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.hn && this.xn(this.hn),
                null === (t = this.Et) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this._e("Sidewindow didn't load in time", t);
            }
          });
        }
        pn() {
          return !1;
        }
        Sn() {
          return we(this, void 0, void 0, function* () {
            yield at.lt(new Et(ut, nt, dt.LOAD_CHAT_WINDOW)), console.log(this.kn);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return we(this, void 0, void 0, function* () {
            yield at.lt(new Et(ut, nt, dt.RESET_CHAT_WINDOW)),
              console.log(this.kn),
              (this.gn = !0),
              (this.un = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.vn && t && (this.resetIconListener(), null === (e = this.Et) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return we(this, void 0, void 0, function* () {
            yield at.lt(new Et(ut, nt, dt.HIDE_CHAT_WINDOW)), (this.gn = !1), (this.un = !1);
          });
        }
        Tn() {
          return we(this, void 0, void 0, function* () {
            this.Sn(), this.cn.pushTask(this.In.bind(this));
          });
        }
        loadInitData(t) {
          this.hn = t;
        }
        xn(t) {
          var e;
          return we(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = k), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield ve.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(pt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(pt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(pt.SET_USER_LIST, this.yn),
              this.queueMessageForFrame(pt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Mn) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        An() {
          return we(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.hn && (yield this.xn(this.hn)), this.Mn)) {
              const t = this.En.getUserIconURL(this.Mn.permId, this.Mn.userIcon);
              this.queueMessageForFrame(pt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(pt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Pn() {
          return we(this, void 0, void 0, function* () {
            this.Vn(),
              yield u(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.$n(),
              this.wn.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Tt(t) {
          this.Cn.initWindowListeners(), this.pn() && this.Tn(), this.cn.pushTask(this.In.bind(this)), O(), (this.Mn = new te(t));
          const e = this.En.getUserIconURL(this.Mn.permId, this.Mn.userIcon);
          this.En.setUserIconUrl(e),
            this.En.renderSidebar(),
            this.Bn() && this.removeChat(),
            (this.mn = !0),
            this.Nn(),
            this.pn()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Pn(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return we(this, void 0, void 0, function* () {
            "true" !== (yield Vt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.En.addYoutubePromo(), Rt.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.hn = t;
          const e = Object.assign({}, t);
          (e.iconMap = k),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(pt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return we(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.Bn() ||
                this.isPartyWindowsActive() ||
                (this.Vn(),
                yield u(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.un),
                this.addIconSelector(),
                this.Rn(),
                this.$n(),
                this.wn.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new _t(ut, nt, t);
          at.lt(e);
        }
        Bn() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.En.clearUnreadCount();
        }
        Un() {
          return we(this, void 0, void 0, function* () {
            try {
              yield r(() => null !== document.querySelector("#chat-history") || this.ln || (this.Dn && this.dn), 1e4)();
            } catch (t) {
              this._e("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              yield this.Un(), this.En.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              yield this.Un(), this.En.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.En.reloadMessages();
        }
        scrollToBottom() {
          this.En.scrollToBottom();
        }
        addReviewMessage() {
          this.En.addReviewMessage(), (this.jn = !0);
        }
        get showingReveiwMessage() {
          return this.jn;
        }
        set shouldReturnToVideo(t) {
          this.vn = t;
        }
        onBufferingMessage(t) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              yield this.Un(), this.wn.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              yield this.Un(), this.wn.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.cn.pushTask(() =>
            we(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Un(), this.wn.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.wn.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Mn) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Gn(this.On(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.En.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Mn)) {
            const t = this.En.getUserIconURL(this.Mn.permId, this.Mn.userIcon);
            this.En.setUserIconUrl(t), this.En.renderSidebar();
          }
        }
        $n() {
          r(() => this.Bn(), 1e4)().then(() => {
            this.Cn.startListening();
          });
        }
        Rn() {
          this.Cn.stopListening(), this.Ln && (clearTimeout(this.Ln), (this.on = !1));
        }
        teardown() {
          (this.mn = !1),
            (this.fe = void 0),
            (this.Hn = void 0),
            this.Rn(),
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
            this.cn.pushTask(() => Rt.setItemsAsync({ [g]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return we(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.En.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(pt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new Qt(ut, nt, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          at.lt(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new Qt(ut, nt, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          at.lt(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new Qt(ut, nt, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          at.lt(e), this.toggleReactions();
        }
        Nn() {
          if (
            (d("Set Chat Html called"),
            (this.Wn = qt()),
            (this.Wn = this.Wn.replace(/{EXTENSION_LOGO}/g, Q(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Mn)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.Wn = this.Wn.replace(/{CHAT_URL}/g, `${m}?t=${Date.now()}`);
          for (const t of f) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Wn = this.Wn.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Wn = this.Wn.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Wn = this.Wn.replace(/{USER_NICKNAME}/g, this.Mn.userNickname ? Q(this.Mn.userNickname) : "Add a nickname")),
            (this.Wn = this.Wn.replace(/{USER_ICON}/g, this.En.getUserIconURL(this.Mn.permId, this.Mn.userIcon))),
            (this.Wn = this.Wn.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Wn = this.Wn.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Wn = this.Wn.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Wn = this.Wn.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Wn = this.Wn.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Wn = this.Wn.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Wn = this.Wn.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Wn = this.Wn.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Wn = this.Wn.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.Fn ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.on && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Mn) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Mn) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.Fn = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.Fn = !1);
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
          if (null === (t = this.C) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.C.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.en = t;
        }
        setMessageForwarder(t) {
          this.C = t;
        }
        setSessionId(t) {
          this.fe = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(pt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(pt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.En.getUserIconURL(t.permId, e.userIcon),
                n = this.En.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.yn = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(pt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Hn = t;
        }
        getSessionCreated() {
          return this.Hn;
        }
        getSessionId() {
          return this.fe;
        }
        getPartyUrl() {
          return this.en;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (d("userIconSelector button clicked: " + e),
            this.Mn &&
              (this.Mn.saveUserIcon(e),
              this.queueMessageForFrame(pt.UPDATE_SETTINGS, { userSettings: this.Mn.userSettings }),
              this.Gn(this.On(this.Mn.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Gn(t, e) {
          at.lt(t).then(e);
        }
        zn(t) {
          return new se(ut, nt, { reactionType: t });
        }
        Yn(t) {
          return new ue(ut, nt, { gifObject: t });
        }
        Kn(t) {
          return new ie(ut, nt, { body: t });
        }
        Jn(t) {
          return new ee(ut, nt, { typing: t });
        }
        On(t) {
          return new ne(ut, nt, { userSettings: t });
        }
        Xn(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? l : 0) - t,
              s = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? l : 0),
              u = this.Xn(e),
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
          console.log(t), this.Gn(this.zn(t));
          const e = new Qt(ut, nt, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          at.lt(e);
          const i = new Qt(ut, nt, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          at.lt(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.Cn.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this._e("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.an.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Gn(this.Yn(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new Qt(ut, nt, e);
              at.lt(i);
              const n = new Qt(ut, nt, { eventType: "gif-share", sessionId: this.getSessionId() });
              at.lt(n);
            }),
              this.toggleGIFs();
          }
        }
        qn(t) {
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
        Zn(t) {
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
            this.an.push(...t.results),
            (this.nn = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.qn(t) : this.Zn(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.tn < 6 && this.ts(),
            setTimeout(() => {
              this.Zi = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return we(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Zi) t.preventDefault();
            else if ("0" !== this.nn && e && this.tn < 6) {
              (this.tn += 1), (this.Zi = !0), t.preventDefault();
              const e = yield fetch(this.sn + `&pos=${this.nn}`),
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
        es() {
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
        ts() {
          return we(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.es()), jQuery("#gif-results-right")[0].append(...this.es());
          });
        }
        logShare(t, e) {
          return we(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${v}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return we(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.tn = 1),
              (this.Zi = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.an = []),
              this.ts();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.sn = `${v}/${u}${s}`);
            const o = yield fetch(`${v}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${v}/trending_gifs?${s}`);
              this.sn = `${v}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.bn && clearTimeout(this.bn), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.bn = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        ns(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this._n ? this.Gn(this.Jn(!0)) : clearTimeout(this._n),
              (this._n = setTimeout(() => {
                (this._n = void 0), this.Gn(this.Jn(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.ns(i)) {
              void 0 !== this._n && (clearTimeout(this._n), (this._n = void 0), this.Gn(this.Jn(!1))),
                e.prop("contenteditable", !1),
                this.Gn(this.Kn(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return le();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new Qt(ut, nt, t);
              at.lt(n);
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
          const e = t.replace(b, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(b) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          d("saveChanges button clicked: " + e),
            e !== (null === (t = this.Mn) || void 0 === t ? void 0 : t.userNickname) &&
              this.Mn &&
              (this.Mn.saveUserNickname(e),
              this.queueMessageForFrame(pt.UPDATE_SETTINGS, { userSettings: this.Mn.userSettings }),
              this.Gn(this.On(this.Mn.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.mn;
        }
        addIconSelector() {
          Object.keys(k).forEach((t) => {
            if (I[t]()) {
              const e = k[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.ss(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(b) || []).length,
            i = t.replace(b, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        ss(t, e, i) {
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
            (this.us =
              "\n          .chat-wrapper-short {\n            height: calc(100% - 126px) !important;\n            position: absolute !important;\n          }\n\n          .tp-left-align {\n            align-items: flex-start !important;\n          }\n        "),
            (this.m = t);
        }
        shouldShowReaction() {
          return !this.m.isWatchingAd();
        }
        shouldUseVideoGIF() {
          return !0;
        }
        teardown() {
          super.teardown(), (document.documentElement.style.overflow = "auto");
        }
        getReactionContainer() {
          return jQuery("body");
        }
        Vn() {
          this.Wn &&
            (jQuery("#rn-video")
              .parent()
              .append(
                (function (t, e = "") {
                  return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/chat.css"
                  )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
                })(this.Wn, this.us)
              ),
            (document.documentElement.style.overflow = "hidden"));
        }
        getVideoTitle() {
          return Ee(this, void 0, void 0, function* () {
            return yield this.m.waitUpdateAPIState(), this.m.getSeriesName();
          });
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        shouldAddReactionSpace() {
          return !0;
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Ee(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (e) {
              if (!t) {
                const e = new CustomEvent("tpVideoNode", { detail: { type: "SetChatVisible", visible: t } });
                window.dispatchEvent(e);
              }
              return;
            }
            if ((console.log("set chat"), this.m.canFixChat())) {
              const e = new CustomEvent("tpVideoNode", { detail: { type: "SetChatVisible", visible: t } });
              window.dispatchEvent(e);
              const i = jQuery("#rn-video").parent();
              t
                ? (jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount(), i.addClass("tp-left-align"))
                : (jQuery("#chat-wrapper").hide(), i.removeClass("tp-left-align"));
            } else this.os(t);
          });
        }
        os(t) {
          return Ee(this, void 0, void 0, function* () {
            t
              ? (jQuery("video").width(window.innerWidth - l),
                jQuery("video").addClass("tp-video"),
                jQuery("#chat-wrapper").addClass("chat-wrapper-short"),
                jQuery("#chat-wrapper").show(),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery("video").width(window.innerWidth), jQuery("#chat-wrapper").hide(), jQuery(window).trigger("resize")),
              this.rs(t);
          });
        }
        rs(t) {
          const e = document.querySelector(S);
          e &&
            ((e.style.left = t ? "-250px" : "10px"),
            console.log("Fixing skip button" + e),
            (e.onclick = (t) =>
              Ee(this, void 0, void 0, function* () {
                return (
                  console.log("Clicked skip"),
                  t.stopPropagation(),
                  t.stopImmediatePropagation(),
                  (e.style.left = "10px"),
                  yield u(250)(),
                  o(e, 0.5, "mousedown"),
                  o(e, 0.5, "mouseup"),
                  !1
                );
              })));
          const i = document.querySelector(T);
          i && (i.style.left = t ? "-250px" : "10px");
        }
      }
      var be = i(4296),
        je = i.n(be);
      class Be extends ct {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Ae extends Be {
        constructor(t, e, i) {
          super(t, e, rt.CREATE_SESSION), (this.data = i);
        }
      }
      const ke = new (class extends Y {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", K.NETFLIX, !1);
      Object.freeze(ke);
      const Qe = ke;
      const Ie = new (class extends Y {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", K.HULU, !1);
      Object.freeze(Ie);
      const xe = Ie;
      const Se = new (class extends Y {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", K.DISNEY_PLUS, !1);
      Object.freeze(Se);
      const Te = Se;
      const Me = new (class extends Y {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", K.AMAZON, !1);
      Object.freeze(Me);
      const Pe = Me;
      const Ve = new (class extends Y {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", K.CRUNCHYROLL, !1);
      Object.freeze(Ve);
      const $e = Ve;
      const Ne = new (class extends Y {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", K.YOUTUBE, !1);
      Object.freeze(Ne);
      const Re = Ne;
      const Ue = new (class extends Y {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", K.ESPN, !1);
      Object.freeze(Ue);
      const Ge = Ue;
      const Oe = new (class extends Y {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", K.PARAMOUNT, !1);
      Object.freeze(Oe);
      const Le = Oe;
      const He = new (class extends Y {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", K.HOTSTAR, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends Y {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", K.PEACOCK, !1);
      Object.freeze(ze);
      const Ye = ze;
      const Ke = new (class extends Y {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", K.FUNIMATION, !1);
      Object.freeze(Ke);
      const Je = Ke;
      const Xe = new (class extends Y {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", K.MAX, !1);
      Object.freeze(Xe);
      const qe = Xe;
      const Ze = new (class extends Y {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", K.STAR_PLUS, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends Y {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", K.PLUTO_TV, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends Y {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", K.APPLE_TV, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends Y {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", K.JIO_CINEMA, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends Y {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", K.TUBI_TV, !1);
      Object.freeze(ri);
      const ai = ri;
      const ci = new (class extends Y {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", K.CRAVE, !1);
      Object.freeze(ci);
      const Di = ci;
      const hi = new (class extends Y {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", K.MUBI, !1);
      Object.freeze(hi);
      const di = hi;
      const li = new (class extends Y {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", K.STAN, !1);
      Object.freeze(li);
      const pi = li;
      class gi {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [Qe, xe, Te, X, Pe, Re, $e, Ge, Le, We, Ye, ti, qe, Je, si, ii, oi, ai, di, pi, Di];
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
      class vi extends Be {
        constructor(t, e, i) {
          super(t, e, rt.RE_INJECT), (this.data = i);
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
      var yi,
        mi = function (t, e, i, n) {
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
      class fi extends class {
        constructor(t) {
          var e, i, n;
          (this.cs = !1),
            (this.Ds = !1),
            (this.hs = !1),
            (this.ds = 0),
            (this.ls = !1),
            (this.ps = !1),
            (this.gs = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.vs() : this.Fs();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.ys = new gi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.fs = t),
            this.fs.setPageControls(this);
        }
        setChatApi(t) {
          (this.fs = t), this.fs.setPageControls(this);
        }
        Cs() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.hs ? "Only I have control" : "Everyone has control"),
            this.hs
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        ws() {
          this.Ds || ((this.hs = !this.hs), this.Cs());
        }
        setResetChatButton() {
          this.fs.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.fs.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        Es() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.fs.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.ds} unread ${1 == this.ds ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.fs.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.fs.shouldChatBeVisible() ||
            this.fs.isPartyWindowsActive() ||
            (this.ds++,
            this.Es(),
            (this.ls = !0),
            this.vs(),
            u(1e3)().then(() => {
              this.ls = !1;
            }));
        }
        teardown() {
          this._s(), this.Fs(), this.bs && clearInterval(this.bs);
        }
        js() {
          var t;
          return Fi(this, void 0, void 0, function* () {
            if (this.Ds || this.fs.inSession) return;
            if ((this.Bs(), (this.Ds = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new vi(ot, nt, { extensionTabData: this.ys });
              try {
                yield at.lt(t);
              } catch (t) {
                return console.log(t), this.As(), this._e(t), this.ks(Tt), void (this.Ds = !1);
              }
            }
            console.log("Sending create");
            const e = this.Qs();
            try {
              const t = yield at.lt(e);
              t.error ? (this.ks(t.error.message), this._e(t.error.message)) : ((this.Ds = !1), this.Is(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.ks(Tt), this._e(t);
            }
            this.As(), (this.Ds = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        _s() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        _e(t) {
          const e = new Qt(st, nt, { name: "error", action: { description: "an error has occured", reason: t } });
          at.lt(e);
        }
        ks(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        xs(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, Q(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, Q(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, Q(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, Q(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, Q(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, Q(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Fs() {
          this.ls || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        vs() {
          return Fi(this, void 0, void 0, function* () {
            if (!this.ps && (this.gs || this.fs.inSession)) {
              this.ps = !0;
              try {
                yield this.addTpIcon(),
                  this.fs.inSession ? this.enablePartyIcons() : this._s(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.ps = !1;
              }
            }
          });
        }
        startEventListener() {
          this.bs = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.bs && clearInterval(this.bs);
        }
        Ss() {
          return "100px";
        }
        addTpIcon() {
          return Fi(this, void 0, void 0, function* () {
            if ((this.gs || this.fs.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.xs(je()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.Ts());
            }
          });
        }
        Ts() {
          jQuery("#tp-control-lock-button").click(this.ws.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.Ss()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.Ss()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.Ss()}`),
            jQuery("#tp-link-button").click(this.Ms.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.Ps(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.Vs();
            });
        }
        Vs() {
          const t = new _t(ot, nt, L);
          at.lt(t), this.Fs();
        }
        Ms() {
          this.fs.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        Ps() {
          return Fi(this, void 0, void 0, function* () {
            (this.ds = 0),
              this.hideMessageIndicator(),
              this.fs.isPartyWindowsActive()
                ? this.fs.resetChatWindow(!0)
                : (this.fs.shouldChatBeVisible(), yield this.fs.setChatVisible(!this.fs.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.cs && this.vs();
        }
        setChatButtons() {
          this.fs.inSession && this.fs.getChatVisible() ? this.Is() : this.$s(),
            this.fs.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Is() {
          return Fi(this, void 0, void 0, function* () {
            this.fs.inSession &&
              this.fs.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        $s() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        Qs() {
          return new Ae(ot, nt, this.Ns());
        }
        Ns() {
          return { createSettings: { controlLock: this.hs }, extensionTabData: this.ys, source: "pc" };
        }
        Bs() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        As() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        constructor() {
          super(...arguments), (this.Rs = !1);
        }
        getControlsRoot() {
          return mi(this, void 0, void 0, function* () {
            return jQuery("body");
          });
        }
        shouldMenuBeVisible() {
          return null !== document.querySelector("[aria-label='Dismiss Controls']");
        }
        getControlsHeight() {
          return "100px";
        }
      }
      class Ci extends class {
        constructor(t, e, i, n) {
          (this.J = t),
            (this.m = e),
            (this.re = i),
            (this.Et = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.J), console.log("Resetting Chat Api for old controls")),
            (this.Us = new Ct(this.J, this.Et)),
            (this.C = new Ht(this.m, this.J, this.re)),
            (this.Gs = !1),
            (this.Os = !1),
            (this.jn = !1),
            (this.vt = new vt()),
            this.vt.addMessageListener(this.C),
            this.vt.addMessageListener(this.Us),
            this.vt.addMessageListener(this),
            (this.Ls = !1),
            this.Hs();
        }
        Ws() {
          return Wt(this, void 0, void 0, function* () {
            yield this.Et.addTpIcon(), this.Et.startEventListener();
          });
        }
        loadBrowseButton() {
          return Wt(this, void 0, void 0, function* () {
            yield this.Et.addTpIcon(), this.Et.startEventListener();
          });
        }
        Hs() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.J.inSession, alertModal: U };
            this.zs(t);
          }),
            t.onMessage.addListener(() => {
              d("Got background script"), (this.Ls = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == ut) {
            if (t.type === rt.IS_CONTENT_SCRIPT_READY) {
              if (this.Gs) {
                i({ ready: !0 });
              } else this.Os || ((this.Os = !0), this.Ys().then(i));
              return !0;
            }
            if (t.type === rt.GET_INIT_DATA) {
              return i(this.Ks()), !0;
            }
            if (t.type === rt.DISCONNECT && t.sender == st) {
              const t = new _t(ut, nt, L);
              at.lt(t), i();
            } else {
              if (t.type == dt.TEARDOWN) {
                const e = t;
                return this.zs(e.data), i(), !0;
              }
              t.type === dt.ON_NOTIF && this.Js();
            }
          }
          return !1;
        }
        Js() {
          console.log("Show Notification");
        }
        zs(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.J.getPartyUrl();
            G(t.alertModal, i);
          }
          this.Et.teardown(), this.C.teardown(), this.Us.teardown(), this.vt.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new Qt(ut, nt, s);
          at.lt(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        _e(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new Qt(ut, nt, { name: "error", action: { reason: t } });
          at.lt(e);
        }
        Xs() {
          return Wt(this, void 0, void 0, function* () {
            return r(() => this.Ls, 5e3)();
          });
        }
        Ys() {
          return Wt(this, void 0, void 0, function* () {
            try {
              yield this.Xs();
              const t = yield this.qs();
              return this.Ws(), t;
            } catch (t) {
              const e = { message: St, showButton: !1 };
              return this._e(St), { ready: !1, error: e };
            } finally {
              this.Os = !1;
            }
          });
        }
        qs() {
          return Wt(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.m.waitVideoApiReadyAsync();
              const e = yield this.Zs();
              e && e.error
                ? (d("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.Gs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.jn = !0),
                  (this.Gs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this._e(e.message);
            }
            return { ready: this.Gs, error: t };
          });
        }
        Ks() {
          return {
            inSession: this.J.inSession,
            isChatVisible: this.J.isPartyWindowsActive() ? this.J.getChatWindowVisible() : this.J.getChatVisible(),
            partyUrl: this.J.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.J.isPartyWindowsActive()
          };
        }
        Zs() {
          return Wt(this, void 0, void 0, function* () {
            const t = yield this.tu();
            return at.lt(t);
          });
        }
        tu() {
          return Wt(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.m.getVideoDataAsync()).videoId };
            return new gt(ut, nt, t);
          });
        }
      } {
        constructor() {
          const t = new Kt(),
            e = new _e(t),
            i = new it(t, e);
          let n;
          window.teleparty && window.teleparty.pageControls
            ? ((n = window.teleparty.pageControls), console.log("Using existing page controls"))
            : (n = new fi(e)),
            super(e, t, i, n);
        }
      }
      (window.teleparty && (null === (yi = window.teleparty) || void 0 === yi ? void 0 : yi.contentScriptInjected)) ||
        (window.teleparty || (window.teleparty = {}), (window.teleparty.contentScriptInjected = !0), new Ci());
    })();
})();
