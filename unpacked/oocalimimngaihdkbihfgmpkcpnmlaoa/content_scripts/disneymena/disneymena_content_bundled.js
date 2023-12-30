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
      7206: (t) => {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\n\n    </iframe>\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\n    .hidden {\n    display: none !important;\n}   \n</style>\n<div class="hidden" id="tpIconContainer" tpInjected>\n    <div class="hidden" id="tp-buttons-container">\n        <button id="tp-icon-container">\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\n            <div class="hidden" id="tp-message-indicator"></div>\n        </button>\n        <div class="tp-seperator"></div>\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\n        </button> --\x3e\n        <div class="hidden" id="tp-party-active">\n            <button class="tp-control-button" id="tp-link-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\n            </button>\n            <button class="tp-control-button" id="tp-chat-button">\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\n                <div class="hidden" id="tp-message-indicator"></div>\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\n            </button>\n            <button class="tp-control-button" id="tp-disconnect-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\n                    src=\'{DISCONNECT_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\n            </button>\n        </div>\n    </div>\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\n    </button> --\x3e\n    <div id="tp-error-box" class="hidden">\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\n            Failed to connect to background script. Please Try again later\n        </p>\n    </div>\n</div>';
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
      var t = console.log.bind(window.console);
      const e = chrome.runtime.id,
        n = "reactionContainerOpen",
        s = "https://sessions.teleparty.com",
        u = "https://redirect.teleparty.com",
        o = u,
        r = `${u}/sidebar`,
        c = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        a = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        D = "recentlyUsedEmojiMap",
        h = "redirectDataMap",
        d = '[data-testid="ad-info"]',
        l = [
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
        p =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var g = i(7206),
        F = i.n(g);
      const v = [
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
                p,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(p, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(p) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const E = {
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
        w = "Failed to read chrome storage. Please refresh the page and try again",
        _ = "Failed to connect to Script. Please refresh the page and try again",
        b = "Failed to load video in time. Please refresh the page and try again.",
        j = "An unexpected error occured. Please refresh the page and try again.";
      var B = function (t, e, i, n) {
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
      const A = new (class {
        setItemsAsync(t) {
          return B(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(A);
      const k = A;
      var Q = function (t, e, i, n) {
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
      class I {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.l = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : a
          }),
            (this.p = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(e) {
          (e = C(e)),
            (this.l.userIcon = e),
            k.setItemsAsync({ userIcon: e }),
            t("new user settings after set user icon: " + JSON.stringify(this.l));
        }
        saveUserNickname(e) {
          (this.l.userNickname = e),
            k.setItemsAsync({ userNickname: e }),
            t("new user settings after set user nickname: " + JSON.stringify(this.l));
        }
        saveUserSettings(e) {
          return Q(this, void 0, void 0, function* () {
            const i = C(e.userIcon);
            (this.l = e),
              (this.l.userIcon = i),
              yield k.setItemsAsync({
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
      const x = "Service_Background",
        T = "Popup",
        S = "Content_Script",
        M = "Page_Controls";
      var P = function (t, e, i, n) {
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
      const $ = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(e, i, n = 2e4) {
          return P(this, void 0, void 0, function* () {
            return new Promise((s, u) => {
              const o = setTimeout(() => {
                console.log("send timeout"), u("Message Timeout");
              }, n);
              try {
                chrome.tabs.sendMessage(i, e, (i) => {
                  chrome.runtime.lastError && t(chrome.runtime.lastError.message + JSON.stringify(e)), clearTimeout(o), s(i);
                });
              } catch (t) {
                clearTimeout(o), u(t);
              }
            });
          });
        }
        g(t, i) {
          return P(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              let u = null;
              i &&
                (u = setTimeout(() => {
                  s({ error: "Send Message Timeout" });
                }, i));
              try {
                chrome.runtime.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), u && clearTimeout(u), n(e);
                });
              } catch (t) {
                u && clearTimeout(u), s(t);
              }
            });
          });
        }
      })();
      class R {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class O extends R {
        constructor(t, e, i) {
          super(t, e, i), (this.F = i);
        }
      }
      var U, G;
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
      })(U || (U = {}));
      class L extends O {
        constructor(t, e, i) {
          super(t, e, U.SET_TYPING), (this.data = i);
        }
      }
      class V extends O {
        constructor(t, e, i) {
          super(t, e, U.SEND_MESSAGE), (this.data = i);
        }
      }
      class N extends O {
        constructor(t, e, i) {
          super(t, e, U.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class H extends R {
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
      })(G || (G = {}));
      class W extends H {
        constructor(t, e, i) {
          super(t, e, G.TEARDOWN), (this.data = i);
        }
      }
      class z extends H {
        constructor(t, e, i) {
          super(t, e, G.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      class K extends O {
        constructor(t, e, i) {
          super(t, e, U.SEND_REACTION), (this.data = i);
        }
      }
      class Y extends O {
        constructor(t, e, i) {
          super(t, e, U.SEND_GIF), (this.data = i);
        }
      }
      var J = function (t, e, i, n) {
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
      class q {
        constructor() {
          this.resetTasks(), (this.v = []), (this.m = 0), (this.C = Promise.resolve()), (this._ = !0);
        }
        createInstance() {
          return new q();
        }
        pushTask(t, e) {
          if (!this._) return;
          const i = { action: t, name: e };
          0 === this.m && this.resetTasks(),
            (this.m = this.v.push(i)),
            (this.C = this.C.then(() => {
              if (this.v.includes(i) && this._)
                return this.j(i)().then(() => {
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
        j(t) {
          return function () {
            return J(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
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
      const X = new q();
      var Z = function (t, e, i, n) {
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
      const tt = new (class {
        getItemsAsync(t) {
          return Z(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(w))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return Z(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(w))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(tt);
      const et = tt;
      var it,
        nt = new Uint8Array(16);
      function st() {
        if (
          !it &&
          !(it =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return it(nt);
      }
      const ut = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const ot = function (t) {
        return "string" == typeof t && ut.test(t);
      };
      for (var rt = [], ct = 0; ct < 256; ++ct) rt.push((ct + 256).toString(16).substr(1));
      const at = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            rt[t[e + 0]] +
            rt[t[e + 1]] +
            rt[t[e + 2]] +
            rt[t[e + 3]] +
            "-" +
            rt[t[e + 4]] +
            rt[t[e + 5]] +
            "-" +
            rt[t[e + 6]] +
            rt[t[e + 7]] +
            "-" +
            rt[t[e + 8]] +
            rt[t[e + 9]] +
            "-" +
            rt[t[e + 10]] +
            rt[t[e + 11]] +
            rt[t[e + 12]] +
            rt[t[e + 13]] +
            rt[t[e + 14]] +
            rt[t[e + 15]]
          ).toLowerCase();
        if (!ot(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const Dt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || st)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return at(n);
      };
      var ht;
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
      })(ht || (ht = {}));
      const dt = chrome.extension.getURL("img/x-circle.svg"),
        lt = "with-chat";
      var pt = function (t, e, i, n) {
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
      const gt = new (class {
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
        B(t) {
          return pt(this, void 0, void 0, function* () {
            try {
              yield k.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return pt(this, void 0, void 0, function* () {
            const t = yield et.getAllItemsAsync(),
              e = gt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.B(e), e;
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
      Object.freeze(gt);
      const Ft = gt,
        vt = 1e3,
        yt = 72e5,
        mt = 12e4,
        ft = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Ct = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Et = {
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
      function _t(t, e) {
        bt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${dt}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${dt}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
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
      const jt = { showAlert: !1 },
        Bt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var At;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(At || (At = {}));
      var kt,
        Qt = function (t, e, i, n) {
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
      class It {
        constructor(t) {
          (this.A = this.k.bind(this)),
            (this.I = this.resetIdleTimer.bind(this)),
            (this.T = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.S(t.data);
            }),
            (this.M = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.P = (t) => {
              this.$.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new z(S, x, n);
              $.g(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.$.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.$.toggleGIFs();
            }),
            (this.S = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new z(S, x, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              $.g(n);
              const s = new z(S, x, { eventType: `emoji-click-${i}`, sessionId: this.$.getSessionId() });
              $.g(s), X.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.$.focusChat(), this.R(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.O(), this.$.onInputChange();
            }),
            (this.$ = t);
        }
        U() {
          t("Idle Warning called"), _t(Ct);
          const e = new z(S, x, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          $.g(e);
          const i = new z(S, x, { eventType: "idle-warn-2hr", sessionId: this.$.getSessionId() });
          $.g(i), (this.G = setTimeout(this.L.bind(this), mt));
        }
        L() {
          t("Idle kick called");
          const e = new z(S, x, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            i = new W(S, x, Bt);
          $.g(e), $.g(i);
        }
        resetIdleTimer() {
          this.V && clearTimeout(this.V), this.G && (bt(), clearTimeout(this.G)), (this.V = setTimeout(this.U.bind(this), yt));
        }
        N() {
          (this.V = setTimeout(this.U.bind(this), yt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.I();
            }),
            (window.onfocus = () => this.I()),
            (window.onmousedown = () => this.I()),
            (window.ontouchstart = () => this.I()),
            (window.onkeydown = () => this.I());
        }
        H() {
          this.V && clearTimeout(this.V),
            this.G && clearTimeout(this.G),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          t("Listening for chat events"), this.N(), this.W(), this.initWindowListeners();
        }
        stopListening() {
          this.K(), this.H(), this.Y();
        }
        k() {
          this.$.clearUnreadCount();
        }
        J(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.$.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.A),
            window.addEventListener("message", this.T),
            document.addEventListener("dragstart", this.q.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.$.onFullScreen),
            document.addEventListener("fullscreenchange", this.$.onFullScreen),
            document.addEventListener("keydown", this.M, !0),
            document.addEventListener("emoji-click", this.S),
            document.addEventListener("click", this.P);
        }
        W() {
          jQuery(window).on("focus", this.A),
            jQuery("#party-tab").on("click", this.$.togglePartyTab.bind(this.$)),
            jQuery("#friends-tab").on("click", this.$.toggleFriendsTab.bind(this.$)),
            jQuery(".user-icon").on("click", this.$.toggleLargeUserIconButton.bind(this.$)),
            jQuery("#user-icon").on("click", this.$.toggleIconContainer.bind(this.$)),
            jQuery("#link-icon").on("click", this.$.linkIconListener.bind(this.$)),
            jQuery("#reset-icon").on("click", this.$.resetIconListener.bind(this.$)),
            jQuery(".image-button").on("click", this.$.userIconSelectorListener.bind(this.$)),
            jQuery("#chat-input-container").on("keydown", this.$.onChatKeyDown.bind(this.$)),
            jQuery("#nickname-edit").on("keydown", this.$.onChatKeyDown.bind(this.$)),
            jQuery("#chat-input").on("keypress", this.$.onChatKeyPress.bind(this.$)),
            jQuery("#chat-input").on("input", this.$.onInputChange.bind(this.$)),
            jQuery("#gif-search").on("keyup", this.$.onGifSearch.bind(this.$)),
            jQuery("#saveChanges").on("click", this.$.saveChangesListener.bind(this.$)),
            jQuery("#cancelNickname").on("click", this.$.cancelNicknameListener.bind(this.$)),
            jQuery("#chat-wrapper").on("mouseup", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.$.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.$.onChatKeyUp.bind(this.$)),
            jQuery("#emoji-picker-btn").on("click", this.$.addEmojiPicker.bind(this.$)),
            jQuery("#gif-btn").on("click", this.$.addGifPicker.bind(this.$)),
            jQuery(".gif-img").on("click", this.$.clickGif.bind(this.$)),
            jQuery(".gif-results").on("click", "video, img", this.$.clickGif.bind(this.$)),
            jQuery("#category-container").on("click", "video", this.$.clickGif.bind(this.$)),
            jQuery("#gif-input-back").on("click", this.$.resetGif.bind(this.$)),
            jQuery("#reaction-btn").on("click", this.$.addReactionTab.bind(this.$)),
            jQuery("#chat-input-container").on("click", this.X.bind(this)),
            jQuery("#chat-input").on("input", this.O.bind(this)),
            jQuery("#chat-input").on("drop", this.Z.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.$.onScrollToBottom.bind(this.$)),
            this.tt(),
            document.addEventListener("keydown", this.M.bind(this), !0),
            this.$.initCustomListeners();
        }
        tt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.$.onReactionClicked(At.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.$.onReactionClicked(At.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.$.onReactionClicked(At.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.$.onReactionClicked(At.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.$.onReactionClicked(At.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.$.onReactionClicked(At.FIRE);
            });
        }
        O() {
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
        Z(t) {
          t.preventDefault();
        }
        q(t) {
          t.preventDefault();
        }
        X(t) {
          t.target === jQuery("#chat-input")[0] && this.$.focusChat();
        }
        R(t) {
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
        et(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        it(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.et(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Qt(this, void 0, void 0, function* () {
            const i = yield et.getItemsAsync([D]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : l;
            this.it(n) || (n = l),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield k.setItemsAsync({ [D]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        Y() {
          jQuery(window).off("focus", this.A),
            document.removeEventListener("emoji-click", this.S),
            document.removeEventListener("keydown", this.M, !0),
            document.removeEventListener("click", this.P),
            window.removeEventListener("message", this.T),
            document.removeEventListener("webkitfullscreenchange", this.$.onFullScreen),
            document.removeEventListener("fullscreenchange", this.$.onFullScreen);
        }
        K() {
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
      })(kt || (kt = {}));
      var xt;
      function Tt(t) {
        return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
      }
      function St(t) {
        return t.includes("urn:hbo:feature")
          ? kt.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? kt.EPISODE
          : t.includes("urn:hbo:extra")
          ? kt.EXTRA
          : kt.OTHER;
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
      function Rt(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(xt || (xt = {}));
      class Ot {
        constructor(e) {
          (this.$ = e),
            (this.nt = []),
            (this.st = 0),
            (this.ut = document.title),
            (this.ot = 0),
            (this.rt = new Map()),
            (this.ct = new Map()),
            (this.Dt = []),
            (this.ht = []),
            (this.dt = ""),
            t("Message Controller");
        }
        lt(t, e, i, n) {
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
        gt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.$.shouldUseVideoGIF();
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
        Ft(t, e, i) {
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
        vt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.$.shouldUseVideoGIF();
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
        yt(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.p = e.permId), (u.ft = i), (u.Ct = n), (u.Et = e), (u.wt = s);
        }
        reloadMessages() {
          this.$.queueMessageForFrame(ht.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.nt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.nt = t;
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
            (void 0 === i && (i = this.nt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.rt.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.nt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this._t(n, t);
          this.nt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.$.queueMessageForFrame(ht.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const c = "" === r ? this.Ft(o, u, s) : this.lt(o, r, u, s);
          this.yt(c, u, o, r, s), this.scrollToBottom(), this.bt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.nt.length);
          const i = this.nt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this._t(i, t);
          this.nt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.$.queueMessageForFrame(ht.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.vt(s, t, n) : this.gt(s, u, t, n);
          (o[0].jt = !0), this.yt(o, t, s, u, n), Mt(100)().then(this.scrollToBottom.bind(this)), this.bt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.st > 0 && ((this.st = 0), (document.title = this.ut));
        }
        bt() {
          (this.st += 1), (this.ot += 1), document.hasFocus() || (document.title = "(" + String(this.st) + ") " + this.ut);
        }
        getUserIconURL(t, e = "") {
          if (!this.rt.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Bt();
            this.rt.set(t, n), this.ht.push(n);
          }
          return this.rt.get(t);
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
          return this.ct.has(t) || (this.ct.set(t, e), this.Dt.push(e)), C(this.ct.get(t));
        }
        Bt() {
          let t = chrome.runtime.getURL("img/icons/General/" + v[Math.floor(Math.random() * v.length)]);
          if (this.ht.length < f.General.length)
            for (; this.ht.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + v[Math.floor(Math.random() * v.length)]);
          return t;
        }
        At(t) {
          const e = t[0],
            i = e.p;
          let n = e.ft;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.ft = n));
          const s = e.Ct;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Et,
                o = e.wt;
              let r;
              if (
                (e.jt && s && "gifObject" in s && o && (r = "" == u ? this.vt(n, s, o) : this.gt(n, u, s, o)),
                !e.jt && s && "isSystemMessage" in s && o && (r = "" == u ? this.Ft(n, s, o) : this.lt(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.p = i), (e.ft = n), (e.Ct = u), (e.Et = s), (e.wt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.dt = t), this.$.queueMessageForFrame(ht.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.dt), jQuery(".user-icon img").attr("src", this.dt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.At(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.At(jQuery(e[t]));
          this.$.isChatFrameActive() && this.reloadMessages();
        }
        kt(t) {
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
            let t = f.General.filter((t) => !this.ht.includes(t));
            0 === t.length && (t = f.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.kt(e);
          this.rt.set(t, i), this.ht.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = C(e);
          this.ct.set(t, i), this.Dt.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.kt(e);
          this.rt.set(t, n), this.ht.push(n), this.ct.set(t, i), this.Dt.push(i), this.renderSidebar();
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
          const t = new z(S, x, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          $.g(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.$.getSessionId() },
            i = new z(S, x, e);
          $.g(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new z(S, x, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              $.g(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.$.getSessionId() },
                i = new z(S, x, e);
              $.g(i);
            });
        }
      }
      class Ut {
        constructor(t) {
          (this.Qt = !1), (this.It = !1), (this.xt = !1), (this.$ = t);
        }
        setupPresenceIndicator() {
          (this.Qt = !1), (this.It = !1), (this.xt = !1), this.Tt();
        }
        St() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Qt = t), this.Tt();
        }
        setBufferingPresenceVisible(t) {
          (this.It = t), this.Tt();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.xt = t), this.Tt();
        }
        getWatchingAdsVisible() {
          return this.xt;
        }
        Mt() {
          return this.xt
            ? "People are watching ads..."
            : this.Qt && this.It
            ? "People are typing and buffering..."
            : this.Qt
            ? "People are typing..."
            : this.It
            ? "People are buffering..."
            : "";
        }
        Tt() {
          const t = this.Mt();
          this.St().text(t), this.$.queueMessageForFrame(ht.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Gt = function (t, e, i, n) {
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
      var Lt = function (t, e, i, n) {
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
      class Vt extends class {
        constructor() {
          (this.Pt = !1),
            (this.$t = 1),
            (this.Rt = ""),
            (this.Ot = ""),
            (this.Ut = "0"),
            (this.Gt = ""),
            (this.Lt = !0),
            (this.Vt = !1),
            (this.Nt = 0),
            (this.Ht = []),
            (this.Wt = new q()),
            (this.zt = !1),
            (this.Kt = void 0),
            (this.Yt = !0),
            (this.Jt = this.qt()),
            (this.Xt = this.qt()),
            (this.Zt = !1),
            (this.te = !1),
            (this.ee = []),
            (this.logEvent = (t) => {
              const e = new z(S, x, t);
              $.g(e);
            }),
            (this.checkInitReactionContainer = () => {
              et.getItemsAsync([n]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.ie) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.Wt.pushTask(() => k.setItemsAsync({ [n]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.ie) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.ne = !1),
            (this.se = new It(this)),
            (this.ue = new Ut(this)),
            (this.oe = new Ot(this)),
            (this.re = void 0),
            (this.ce = void 0),
            (this.ae = !1);
        }
        setPageControls(t) {
          this.ie = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.ie) || void 0 === t || t.enablePartyIcons(), null === (e = this.ie) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Gt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.Lt = t), t && !this.De() && this.reloadChat();
          });
        }
        he(t, e) {
          const i = new z(S, x, { name: "error", action: { reason: e, description: t } });
          $.g(i);
        }
        getChatWindowVisible() {
          return this.Xt;
        }
        setChatWindowActive(t) {
          this.Jt = t;
        }
        isChatFrameActive() {
          return this.Yt;
        }
        isPartyWindowsActive() {
          return this.Jt;
        }
        shouldChatBeVisible() {
          return this.Lt;
        }
        incrementEmojiCount() {
          this.Nt++;
        }
        resetEmojiCount() {
          this.Nt = 0;
        }
        getEmojiCount() {
          return this.Nt;
        }
        setChatFrameReady(t) {
          this.zt && this.de(), (this.zt = !0), (this.le = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              this.pe(t, e);
            })
          );
        }
        pe(t, e) {
          return Gt(this, void 0, void 0, function* () {
            const i = this.le,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: S };
            $.g(n);
          });
        }
        ge() {
          var t;
          return Gt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield Pt(() => this.zt && null != this.le, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Kt && this.Fe(this.Kt),
                null === (t = this.ie) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.he("Sidewindow didn't load in time", t);
            }
          });
        }
        qt() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        ve() {
          return Gt(this, void 0, void 0, function* () {
            yield $.g(new H(S, x, G.LOAD_CHAT_WINDOW)), console.log(this.le);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Gt(this, void 0, void 0, function* () {
            yield $.g(new H(S, x, G.RESET_CHAT_WINDOW)),
              console.log(this.le),
              (this.Xt = !0),
              (this.Lt = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.Zt && t && (this.resetIconListener(), null === (e = this.ie) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Gt(this, void 0, void 0, function* () {
            yield $.g(new H(S, x, G.HIDE_CHAT_WINDOW)), (this.Xt = !1), (this.Lt = !1);
          });
        }
        ye() {
          return Gt(this, void 0, void 0, function* () {
            this.ve(), this.Wt.pushTask(this.ge.bind(this));
          });
        }
        loadInitData(t) {
          this.Kt = t;
        }
        Fe(t) {
          var e;
          return Gt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = f), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield Ft.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(ht.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(ht.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(ht.SET_USER_LIST, this.ee),
              this.queueMessageForFrame(ht.UPDATE_SETTINGS, {
                userSettings: null === (e = this.fe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        de() {
          return Gt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Kt && (yield this.Fe(this.Kt)), this.fe)) {
              const t = this.oe.getUserIconURL(this.fe.permId, this.fe.userIcon);
              this.queueMessageForFrame(ht.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(ht.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Ce() {
          return Gt(this, void 0, void 0, function* () {
            this.Ee(),
              yield Mt(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.we(),
              this.ue.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        _e(t) {
          this.se.initWindowListeners(), this.qt() && this.ye(), this.Wt.pushTask(this.ge.bind(this)), bt(), (this.fe = new I(t));
          const e = this.oe.getUserIconURL(this.fe.permId, this.fe.userIcon);
          this.oe.setUserIconUrl(e),
            this.oe.renderSidebar(),
            this.De() && this.removeChat(),
            (this.ne = !0),
            this.be(),
            this.qt()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Ce(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Gt(this, void 0, void 0, function* () {
            "true" !== (yield et.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.oe.addYoutubePromo(), k.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Kt = t;
          const e = Object.assign({}, t);
          (e.iconMap = f),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(ht.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Gt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.De() ||
                this.isPartyWindowsActive() ||
                (this.Ee(),
                yield Mt(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.Lt),
                this.addIconSelector(),
                this.je(),
                this.we(),
                this.ue.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new W(S, x, t);
          $.g(e);
        }
        De() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.oe.clearUnreadCount();
        }
        Be() {
          return Gt(this, void 0, void 0, function* () {
            try {
              yield Pt(() => null !== document.querySelector("#chat-history") || this.Jt || (this.zt && this.Yt), 1e4)();
            } catch (t) {
              this.he("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              yield this.Be(), this.oe.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              yield this.Be(), this.oe.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.oe.reloadMessages();
        }
        scrollToBottom() {
          this.oe.scrollToBottom();
        }
        addReviewMessage() {
          this.oe.addReviewMessage(), (this.ae = !0);
        }
        get showingReveiwMessage() {
          return this.ae;
        }
        set shouldReturnToVideo(t) {
          this.Zt = t;
        }
        onBufferingMessage(t) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              yield this.Be(), this.ue.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              yield this.Be(), this.ue.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.Wt.pushTask(() =>
            Gt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Be(), this.ue.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.ue.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.fe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ae(this.ke(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.oe.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.fe)) {
            const t = this.oe.getUserIconURL(this.fe.permId, this.fe.userIcon);
            this.oe.setUserIconUrl(t), this.oe.renderSidebar();
          }
        }
        we() {
          Pt(() => this.De(), 1e4)().then(() => {
            this.se.startListening();
          });
        }
        je() {
          this.se.stopListening(), this.Qe && (clearTimeout(this.Qe), (this.Vt = !1));
        }
        teardown() {
          (this.ne = !1),
            (this.Ot = void 0),
            (this.Ie = void 0),
            this.je(),
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
            this.Wt.pushTask(() => k.setItemsAsync({ [n]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Gt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.oe.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(ht.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new z(S, x, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new z(S, x, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new z(S, x, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleReactions();
        }
        be() {
          if (
            (t("Set Chat Html called"),
            (this.xe = F()),
            (this.xe = this.xe.replace(/{EXTENSION_LOGO}/g, C(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.fe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const e = chrome.runtime.getURL("");
          this.xe = this.xe.replace(/{CHAT_URL}/g, `${r}?t=${Date.now()}&id=${encodeURIComponent(e.substring(0, e.length - 1))}`);
          for (const t of c) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.xe = this.xe.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.xe = this.xe.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.xe = this.xe.replace(/{USER_NICKNAME}/g, this.fe.userNickname ? C(this.fe.userNickname) : "Add a nickname")),
            (this.xe = this.xe.replace(/{USER_ICON}/g, this.oe.getUserIconURL(this.fe.permId, this.fe.userIcon))),
            (this.xe = this.xe.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.xe = this.xe.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.xe = this.xe.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.xe = this.xe.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.xe = this.xe.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.xe = this.xe.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.xe = this.xe.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.xe = this.xe.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.xe = this.xe.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.te ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.Vt && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.fe) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.fe) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.te = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.te = !1);
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
          this.Rt = t;
        }
        setMessageForwarder(t) {
          this.Te = t;
        }
        setSessionId(t) {
          this.Ot = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(ht.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(ht.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.oe.getUserIconURL(t.permId, e.userIcon),
                n = this.oe.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.ee = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(ht.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Ie = t;
        }
        getSessionCreated() {
          return this.Ie;
        }
        getSessionId() {
          return this.Ot;
        }
        getPartyUrl() {
          return this.Rt;
        }
        userIconSelectorListener(e) {
          const i = jQuery(e.currentTarget).data("icon");
          i &&
            (t("userIconSelector button clicked: " + i),
            this.fe &&
              (this.fe.saveUserIcon(i),
              this.queueMessageForFrame(ht.UPDATE_SETTINGS, { userSettings: this.fe.userSettings }),
              this.Ae(this.ke(this.fe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ae(t, e) {
          $.g(t).then(e);
        }
        Se(t) {
          return new K(S, x, { reactionType: t });
        }
        Me(t) {
          return new Y(S, x, { gifObject: t });
        }
        Pe(t) {
          return new V(S, x, { body: t });
        }
        $e(t) {
          return new L(S, x, { typing: t });
        }
        ke(t) {
          return new N(S, x, { userSettings: t });
        }
        Re(t) {
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
              u = this.Re(e),
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
          console.log(t), this.Ae(this.Se(t));
          const e = new z(S, x, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          $.g(e);
          const i = new z(S, x, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          $.g(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.se.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.he("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.Ht.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ae(this.Me(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new z(S, x, e);
              $.g(i);
              const n = new z(S, x, { eventType: "gif-share", sessionId: this.getSessionId() });
              $.g(n);
            }),
              this.toggleGIFs();
          }
        }
        Oe(t) {
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
        Ue(t) {
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
            this.Ht.push(...t.results),
            (this.Ut = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Oe(t) : this.Ue(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.$t < 6 && this.Ge(),
            setTimeout(() => {
              this.Pt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Gt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Pt) t.preventDefault();
            else if ("0" !== this.Ut && e && this.$t < 6) {
              (this.$t += 1), (this.Pt = !0), t.preventDefault();
              const e = yield fetch(this.Gt + `&pos=${this.Ut}`),
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
        Le() {
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
        Ge() {
          return Gt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.Le()), jQuery("#gif-results-right")[0].append(...this.Le());
          });
        }
        logShare(t, e) {
          return Gt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              u = `&id=${t}`,
              o = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${s}/register-share?${o}${n}${u}`);
          });
        }
        fetchGIFs(t) {
          return Gt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.$t = 1),
              (this.Pt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.Ht = []),
              this.Ge();
            const n = this.getClientLocale(),
              u = n ? `&locale=${n}` : "";
            let o = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (o = t ? `search-gifs?q=${t}` : o), (this.Gt = `${s}/${o}${u}`);
            const r = yield fetch(`${s}/${o}${u}`),
              c = yield r.json();
            if (c.results && c.results.length > 0) this.loadGIFs(c);
            else if (!t) {
              const t = yield fetch(`${s}/trending_gifs?${u}`);
              this.Gt = `${s}/trending_gifs?${u}`;
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
        Ve(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.re ? this.Ae(this.$e(!0)) : clearTimeout(this.re),
              (this.re = setTimeout(() => {
                (this.re = void 0), this.Ae(this.$e(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Ve(i)) {
              void 0 !== this.re && (clearTimeout(this.re), (this.re = void 0), this.Ae(this.$e(!1))),
                e.prop("contenteditable", !1),
                this.Ae(this.Pe(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return Dt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new z(S, x, t);
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
          const e = t.replace(p, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(p) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var e;
          const i = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          t("saveChanges button clicked: " + i),
            i !== (null === (e = this.fe) || void 0 === e ? void 0 : e.userNickname) &&
              this.fe &&
              (this.fe.saveUserNickname(i),
              this.queueMessageForFrame(ht.UPDATE_SETTINGS, { userSettings: this.fe.userSettings }),
              this.Ae(this.ke(this.fe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", i),
              jQuery("#nickname-edit").text(i)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.ne;
        }
        addIconSelector() {
          Object.keys(f).forEach((t) => {
            if (E[t]()) {
              const e = f[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.Ne(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(p) || []).length,
            i = t.replace(p, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        Ne(t, e, i) {
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
        shouldAddReactionSpace() {
          return !1;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !0;
        }
        getReactionContainer() {
          return jQuery("#video-container");
        }
        Ee() {
          console.log("CHATHTML", this.xe),
            this.xe &&
              jQuery('[data-testid="player-space-container"]').after(
                (function (t, e = "") {
                  return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/chat.css"
                  )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
                })(this.xe)
              );
        }
        getChatVisible() {
          return jQuery(Vt.MAIN_WRAPPER_SELECTOR).hasClass(lt);
        }
        getVideoTitle() {
          var t;
          return Lt(this, void 0, void 0, function* () {
            const e = document.querySelector(".ON_IMAGE.BUTTON1_MEDIUM");
            if (e) return null !== (t = e.textContent) && void 0 !== t ? t : void 0;
          });
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Lt(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery("#chat-wrapper").show(),
                jQuery(Vt.MAIN_WRAPPER_SELECTOR).addClass(lt),
                jQuery("#video-container").addClass(lt),
                jQuery('[data-testid="loader"]').parent().addClass(lt),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery("#chat-wrapper").hide(),
                jQuery(Vt.MAIN_WRAPPER_SELECTOR).removeClass(lt),
                jQuery("#video-container").removeClass(lt),
                jQuery('[data-testid="loader"]').parent().removeClass(lt));
          });
        }
        removeChat() {
          super.removeChat(), jQuery(Vt.MAIN_WRAPPER_SELECTOR).removeClass(lt);
        }
      }
      Vt.MAIN_WRAPPER_SELECTOR = "#page-container";
      var Nt,
        Ht,
        Wt,
        zt = function (t, e, i, n) {
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
      !(function (t) {
        (t.LOADING = "loading"),
          (t.PLAYING = "playing"),
          (t.IDLE = "idle"),
          (t.AD_PLAYING = "ad_playing"),
          (t.PAUSED = "paused"),
          (t.NOT_READY = "not_ready");
      })(Nt || (Nt = {})),
        (function (t) {
          (t.PAUSED = "paused"), (t.PLAYING = "playing");
        })(Ht || (Ht = {})),
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
        })(Wt || (Wt = {}));
      class Kt {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${o}/join/${t}`;
        }
      }
      const Yt = new (class extends Kt {
        isValidUrl(t) {
          return Tt(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          return e && e.length > 1 ? e[e.length - 2] : void 0;
        }
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", Wt.DISNEY_PLUS_MENA, !1);
      Object.freeze(Yt);
      const Jt = Yt;
      var qt = function (t, e, i, n) {
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
      class Xt extends class {
        constructor() {
          (this.He = 0), (this.We = !1);
        }
        set hostOnly(t) {
          this.We = t;
        }
        get hostOnly() {
          return this.We;
        }
        get uiEventsHappening() {
          return this.He;
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
          const i = new z(S, x, { name: "video_error", action: { description: t, reason: e } });
          $.g(i);
        }
        doAdCheck() {
          return zt(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.ze = () => document.querySelector(d)), (this.He = 0), console.log("DisneyMena video");
        }
        getStreamingServiceName() {
          return Wt.DISNEY_PLUS_MENA;
        }
        get currentlyWatchingAds() {
          return !!this.ze();
        }
        setVideoEventListener(t) {
          this.Ke = t;
        }
        waitVideoReady() {
          var t;
          return qt(this, void 0, void 0, function* () {
            if (!this.Ye)
              try {
                yield Pt(() => {
                  const t = this.getVideoElement();
                  return t instanceof Element && t.readyState > 0;
                }, 8e3)(),
                  (this.Ye = null !== (t = this.getVideoElement()) && void 0 !== t ? t : void 0);
              } catch (t) {
                throw (this.logError(b, t), new Error(b));
              }
          });
        }
        Je(t, e, i) {
          const { height: n, top: s } = t.getBoundingClientRect(),
            u = s + n / 2;
          document.createEvent("MouseEvents").initMouseEvent(i, !0, !0, window, 0, 0, 0, e, u, !1, !1, !1, !1, 0, null);
          const o = new PointerEvent(i, { pointerId: 1, isPrimary: !0, view: window, bubbles: !0, cancelable: !0, clientX: e, clientY: u });
          t.dispatchEvent(o);
        }
        qe() {
          const t = document.querySelector(".SEEKBAR_TRACK_DEFAULT");
          if (t && t instanceof HTMLElement) return t;
        }
        Xe(t) {
          const e = this.qe();
          if (e) {
            const i = e.getBoundingClientRect();
            return t * e.offsetWidth + i.left;
          }
        }
        Ze() {
          return qt(this, void 0, void 0, function* () {
            const t = this.getVideoElement();
            t && t.click();
          });
        }
        ti() {
          return document.querySelector(".ON_IMAGE_ALT2.BUTTON3_MEDIUM") ? kt.EPISODE : kt.FEATURE;
        }
        ei() {
          var t, e, i;
          const n = null === (t = document.querySelector(".ON_IMAGE_ALT2.BUTTON3_MEDIUM")) || void 0 === t ? void 0 : t.textContent;
          let s = {};
          if (n) {
            const t = n.split(/(?<=^\S+)\s/),
              u = null !== (e = t[0].match(/S(\d*):/)) && void 0 !== e ? e : [""],
              o = null !== (i = t[0].match(/E(\d*)/)) && void 0 !== i ? i : [""];
            s = { seasonNum: Number(u[1]), episodeNum: Number(o[1]), title: t[1] };
          }
          return s;
        }
        waitVideoApiReadyAsync() {
          return qt(this, void 0, void 0, function* () {
            yield Pt(() => {
              const t = this.ii();
              return "paused" === t || "playing" === t;
            }, 1 / 0)();
          });
        }
        waitVideoDoneLoadingAsync() {
          return Pt(() => this.ii() !== Nt.LOADING, 1e4)();
        }
        getStateAsync() {
          return new Promise((t, e) => {
            const i = this.ii(),
              n = this.ni();
            void 0 !== n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
          });
        }
        getVideoDataAsync() {
          return new Promise((t, e) => {
            var i, n;
            const s = this.si(),
              u = null !== (i = this.ui()) && void 0 !== i ? i : "",
              o = null !== (n = this.oi()) && void 0 !== n ? n : "",
              r = this.getScreenSize(),
              c = this.ti(),
              a = this.ei(),
              D = this.getVideoContent(u, o, window.location.href, c, a);
            void 0 !== s && void 0 !== u && void 0 !== o
              ? t({
                  videoId: u,
                  videoTitle: o,
                  videoDuration: s,
                  screen: r,
                  serviceDomain: window.location.hostname,
                  content: D,
                  videoState: this.ii()
                })
              : e();
          });
        }
        jumpToNextEpisode(t) {
          var e;
          return qt(this, void 0, void 0, function* () {
            this.He += 1;
            Jt.getVideoId(new URL(window.location.href)) != t.videoId &&
              (yield null === (e = this.Ke) || void 0 === e ? void 0 : e.reloadNextEpisode()),
              (this.He -= 1);
          });
        }
        freeze(t) {
          return qt(this, void 0, void 0, function* () {
            this.He += 1;
            try {
              yield this.pause(), yield Mt(t)(), yield this.play();
            } finally {
              this.He -= 1;
            }
          });
        }
        pause() {
          return qt(this, void 0, void 0, function* () {
            this.He += 1;
            try {
              const t = this.getVideoElement();
              t && t.pause();
            } catch (t) {
              if (this.ii() !== Nt.PAUSED) throw (this.logError("video was unable to pause correctly", t), t);
            } finally {
              this.He -= 1;
            }
          });
        }
        play() {
          return qt(this, void 0, void 0, function* () {
            this.He += 1;
            try {
              const t = this.getVideoElement();
              t && t.play();
            } catch (t) {
              if (this.ii() !== Nt.PLAYING) throw (this.logError("video was unable to play correctly", t), t);
            } finally {
              this.He -= 1;
            }
          });
        }
        setCurrentTime(e) {
          return qt(this, void 0, void 0, function* () {
            t("Seeking: " + e), (this.He += 1);
            try {
              const t = this.getVideoElement();
              t && (t.currentTime = e / 1e3);
            } finally {
              this.He -= 1;
            }
          });
        }
        getVideoElement() {
          var t;
          return null !== (t = document.querySelector("#ad-video-container video")) && void 0 !== t
            ? t
            : document.querySelector("#video-container video");
        }
        ii() {
          const t = this.getVideoElement();
          return null == t ? Nt.NOT_READY : t.readyState < t.HAVE_FUTURE_DATA ? Nt.LOADING : t.paused ? Nt.PAUSED : Nt.PLAYING;
        }
        ni() {
          const t = this.getVideoElement();
          if (t) return Math.floor(1e3 * t.currentTime);
        }
        si() {
          let t;
          const e = this.getVideoElement();
          return e && (t = Math.floor(1e3 * e.duration)), t;
        }
        ui() {
          var t;
          return null !== (t = Jt.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "";
        }
        oi() {
          var t;
          const e = document.querySelector(".ON_IMAGE.BUTTON1_MEDIUM");
          if (e) return null !== (t = e.textContent) && void 0 !== t ? t : void 0;
        }
        getUpdateSessionDataAsync() {
          return qt(this, void 0, void 0, function* () {
            const t = this.ni();
            if (void 0 === t) throw new Error();
            const e = this.getVideoElement();
            return { state: e && !e.paused ? Ht.PLAYING : Ht.PAUSED, lastKnownTime: t, lastKnownTimeUpdatedAt: Date.now() };
          });
        }
      }
      var Zt = function (t, e, i, n) {
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
      var te,
        ee,
        ie = function (t, e, i, n) {
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
      class ne extends class {
        constructor(t) {
          (this.ri = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return Zt(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Zt(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Zt(this, void 0, void 0, function* () {
            yield null === (t = this.Te) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.ci();
        }
        stopListening() {
          this.ai();
        }
        ci() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            Zt(this, void 0, void 0, function* () {
              this.Di(), this.ri.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Zt(this, void 0, void 0, function* () {
                this.Di(), this.ri.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        ai() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        hi() {
          var t;
          null === (t = this.Te) || void 0 === t || t.tryBroadcast(!1);
        }
        Di() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Te) || void 0 === t || t.tryBroadcast(!0);
        }
        di() {
          var t;
          null === (t = this.Te) || void 0 === t || t.setBuffering(!0);
        }
        li(t) {
          var e;
          null === (e = this.Te) || void 0 === e || e.setWatchingAds(!0, t);
        }
        pi() {
          var t, e;
          null === (t = this.Te) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Te) || void 0 === e || e.forceSync();
        }
        gi() {
          var t;
          null === (t = this.Te) || void 0 === t || t.setBuffering(!1);
        }
        Fi(t) {
          var e;
          null === (e = this.Te) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        vi(t) {
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
        constructor(e, i, n) {
          var s, u;
          super(e),
            (this.yi = this.hi.bind(this)),
            (this.mi = this.fi.bind(this)),
            (this.Ci = () =>
              ie(this, void 0, void 0, function* () {
                yield this.ri.play(), yield Pt(() => (document.querySelector(d) || this.pi(), !document.querySelector(d)), 1 / 0)();
              })),
            (this.Ei = () =>
              ie(this, void 0, void 0, function* () {
                document.querySelector(d) && (this.li(), yield this.Ci());
              })),
            (this.ri = e),
            (this.$ = i),
            this.ri.setVideoEventListener(this),
            (this.ie = n),
            (null === (s = window.teleparty) || void 0 === s ? void 0 : s.replaceScriptLoaded) ||
              (t("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (u = window.teleparty) || void 0 === u ? void 0 : u.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/disneymena/disneymena_injected_bundled.js"));
        }
        reloadListeners() {
          const t = this.ri.getVideoElement();
          t && (t.addEventListener("play", this.yi), t.addEventListener("pause", this.yi), t.addEventListener("seeking", this.yi));
        }
        startListening() {
          super.startListening();
          const t = this.ri.getVideoElement();
          t &&
            (t.addEventListener("play", this.yi),
            t.addEventListener("pause", this.yi),
            t.addEventListener("seeking", this.yi),
            (this.wi = setInterval(() => {
              this.Ei();
            }, 2e3))),
            window.addEventListener("message", this.mi, !1);
        }
        stopListening() {
          super.stopListening(), this.wi && clearInterval(this.wi);
          const t = this.ri.getVideoElement();
          t && (t.removeEventListener("play", this.yi), t.removeEventListener("pause", this.yi), t.removeEventListener("seeking", this.yi)),
            window.removeEventListener("message", this.mi, !1);
        }
        loadNewVideoAsync(e) {
          return ie(this, void 0, void 0, function* () {
            const i = performance.now();
            yield new Promise((n, s) => {
              const u = setInterval(() => {
                if (Jt.getVideoId(new URL(window.location.href)) === e) {
                  const e = this.ri.getVideoElement();
                  if (e instanceof Element && e.src) return t("Loaded new DisneyMena video"), clearInterval(u), void n();
                }
                performance.now() - i >= 2e4 && (clearInterval(u), s(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.ri.waitVideoDoneLoadingAsync();
          });
        }
        fi(e) {
          var i;
          if (e.source == window)
            if ("FROM_PAGE_POP" !== e.data.type) {
              if (e.data.type && "FROM_PAGE" == e.data.type) {
                if (
                  (t("***********************************"),
                  t("Content script received: " + e.data.text),
                  t(window.location.href),
                  !Tt(new URL(window.location.href)))
                )
                  return void this.vi(jt);
                {
                  const e = Jt.getVideoId(new URL(window.location.href));
                  if (!e) return t("No video found. Tearing down"), void this.vi(jt);
                  e !== (null === (i = this.Te) || void 0 === i ? void 0 : i.videoId) &&
                    (this.$.setChatVisible(this.$.shouldChatBeVisible()), this.Fi(e));
                }
              }
            } else this.vi(jt);
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
      })(te || (te = {}));
      class se extends O {
        constructor(t, e, i) {
          super(t, e, U.GET_SESSION_DATA), (this.data = i);
        }
      }
      class ue {
        constructor() {
          (this._i = this.bi.bind(this)), (this.ji = []), this.Bi();
        }
        addMessageListener(t) {
          this.ji.push(t);
        }
        removeMessageListener(t) {
          this.ji = this.ji.filter((t) => {});
        }
        Bi() {
          $.addListener(this._i);
        }
        teardown() {
          (this.ji = []), $.removeListener(this._i);
        }
        bi(t, e, i) {
          if (!this.Ai(t)) return !1;
          return !!this.ki(t, e, i) || (i({}), !1);
        }
        Ai(t) {
          return t.target === S;
        }
        ki(t, e, i) {
          let n = !1;
          return (
            this.ji.forEach((s) => {
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
      })(ee || (ee = {}));
      var oe,
        re = function (t, e, i, n) {
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
      class ce {
        constructor(e, i) {
          (this.$ = e), (this.ie = i), t("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case G.LOAD_SESSION: {
              const e = t;
              return this.Qi(e.data), !1;
            }
            case ee.ON_MESSAGE: {
              const e = t;
              return this.T(e), this.ie.onChatMessage(), !1;
            }
            case ee.ON_BUFFER: {
              const e = t;
              return this.Ii(e), !1;
            }
            case ee.ON_TYPING: {
              const e = t;
              return this.xi(e), !1;
            }
            case ee.ON_WATCHING_ADS: {
              const e = t;
              return this.Ti(e), !1;
            }
            case ee.UPDATE_SETTINGS: {
              const e = t;
              return this.Si(e), !1;
            }
            case ee.ON_REACTION: {
              const e = t;
              return this.Mi(e), !1;
            }
            case ee.ON_GIF: {
              const e = t;
              return this.Pi(e), !1;
            }
            case ee.USER_LIST: {
              const e = t;
              return this.$i(e), !1;
            }
            case ee.ON_WEB_RTC:
              return this.$.onWebRTC(t.data), !0;
            case te.SET_CHAT_VISIBLE: {
              const e = t;
              return this.Ri(e.data), i(), !1;
            }
            case ht.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.$.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case ht.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case ht.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.$.doUpdateSettings(e), i(), !0;
            }
            case ht.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case ht.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.$.setReactionsActive(e), i(), !0;
            }
            case ht.RESET_VIEW:
              return this.$.resetChatWindow(!0), i(), !0;
            case ht.ON_FOCUS:
              return this.$.onSidebarFocus(), i(), !0;
            case ht.PREVIEW_REACTION: {
              const e = t.data;
              return this.$.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.$.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.$.teardown();
        }
        Ri(t) {
          return re(this, void 0, void 0, function* () {
            this.$.isPartyWindowsActive()
              ? t.visible
                ? yield this.$.resetChatWindow()
                : yield this.$.hideChatWindow()
              : (yield this.$.setChatVisible(t.visible), this.$.fixPageControls());
          });
        }
        Qi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${o}/join/${e}`;
          if (
            (this.$.loadInitData(t),
            this.$.setPartyUrl(i),
            this.$.setSessionId(e),
            this.$._e(t.storageData),
            this.ie.onInitChat(),
            this.$.setSessionCreated(t.isCreate),
            this.$.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.$.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.$.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.$.addGif(e) : this.$.addMessage(e, !0);
        }
        T(t) {
          this.$.addMessage(t.data);
        }
        Mi(t) {
          this.$.showReaction(t.data);
        }
        Pi(t) {
          this.$.addGif(t.data);
        }
        Ii(t) {
          this.$.onBufferingMessage(t.data);
        }
        xi(t) {
          this.$.onTypingMessage(t.data);
        }
        Ti(t) {
          this.$.onWatchingAdsMessage(t.data);
        }
        Si(t) {
          this.$.onUpdateSettingsMessage(t.data);
        }
        $i(t) {
          this.$.loadUserList(t.data.userList), this.$.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(oe || (oe = {}));
      class ae extends O {
        constructor(t, e, i) {
          super(t, e, U.BROADCAST), (this.data = i);
        }
      }
      class De extends R {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class he extends De {
        constructor(t, e) {
          super(t, e, oe.GET_SERVER_TIME);
        }
      }
      class de extends O {
        constructor(t, e, i) {
          super(t, e, U.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class le extends O {
        constructor(t, e, i) {
          super(t, e, U.SET_BUFFERING), (this.data = i);
        }
      }
      class pe extends O {
        constructor(t, e, i) {
          super(t, e, U.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const ge = "PING",
        Fe = "SYNC",
        ve = "BROADCAST";
      class ye extends H {
        constructor(t, e, i) {
          super(t, e, G.STAY_ALIVE), (this.data = i);
        }
      }
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
      const fe = new (class {
        getRedirectDataForTabAsync(t) {
          return me(this, void 0, void 0, function* () {
            const e = (yield et.getItemsAsync([h])).redirectDataMap,
              i = this.Oi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.Ui(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return me(this, void 0, void 0, function* () {
            const e = (yield et.getItemsAsync([h])).redirectDataMap,
              i = this.Oi(t);
            e && e[i] && delete e[i], yield k.setItemsAsync({ [h]: e });
          });
        }
        Oi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return me(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.Oi(e);
            let n = yield et.getItemsAsync([h]);
            (n[i] = t), (n = this.Gi(n)), yield k.setItemsAsync({ [h]: n });
          });
        }
        Gi(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.Ui);
        }
        Ui(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(fe);
      const Ce = fe;
      var Ee = function (t, e, i, n) {
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
      class we {
        constructor(e, i, n) {
          (this.Li = []),
            (this.Vi = 0),
            (this.Ni = 0),
            (this.Hi = []),
            (this.Wi = !1),
            (this.xt = !1),
            (this.We = !1),
            (this.zi = !1),
            (this.Ki = void 0),
            (this.Yi = () =>
              Ee(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Ki = !1);
                } catch (t) {
                  this.Ki = !0;
                }
              })),
            (this.Ji = (t = !1, e = !1) =>
              Ee(this, void 0, void 0, function* () {
                if (this.qi) return;
                if (this.We) return void this.forceSync();
                if (!this.zi && !e) return;
                const i = yield this.Xi();
                if (yield this.Zi(i.data, e)) yield this.tn(i);
                else if (t) {
                  if (yield this.en(e)) {
                    const t = yield this.Xi();
                    yield this.tn(t);
                  }
                }
              })),
            (this.nn = () =>
              Ee(this, void 0, void 0, function* () {
                if (
                  (this.sn == Ht.PAUSED &&
                    this.un &&
                    (clearInterval(this.un),
                    (this.un = setInterval(() => {
                      this.on();
                    }, 6e4))),
                  this.rn())
                )
                  return;
                if ((yield this.ri.waitVideoDoneLoadingAsync(), this.rn())) return;
                const t = yield this.ri.getStateAsync();
                this.sn == Ht.PAUSED ? yield this.cn(t) : this.sn == Ht.PLAYING && (yield this.an(t)), !1 === this.zi && (this.zi = !0);
              })),
            (this.ri = e),
            (this.$ = i),
            (this.Ke = n),
            this.Ke.setMessageForwarder(this),
            (this.Dn = 0),
            (this.qi = !1),
            (this.sn = Ht.PAUSED),
            (this.hn = 0),
            (this.dn = 0),
            (this.ln = 0),
            (this.pn = this.ri.getStreamingServiceName()),
            t("Video forwarder"),
            this.Yi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case G.GET_VIDEO_DATA:
              return this.gn(i), !0;
            case G.LOAD_SESSION: {
              const e = t;
              return this.Fn(e.data), !1;
            }
            case oe.UPDATE_SESSION: {
              const e = t;
              return this.vn(e.data), !1;
            }
            case oe.NEXT_EPISODE: {
              const e = t;
              return this.yn(e.data), !1;
            }
            case oe.REBOOT_SESSION: {
              const e = t;
              return this.mn(e.data, i), !0;
            }
            case oe.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case ee.ON_WATCHING_ADS: {
              const e = t;
              return this.Ti(e), !1;
            }
            default:
              return !1;
          }
        }
        Ti(t) {
          t.data.anyoneWatchingAds && !this.xt && (X.pushTask(this.ri.doAdCheck.bind(this.ri)), this.forceSync()),
            (this.xt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.Cn;
        }
        set videoId(t) {
          this.Cn = t;
        }
        sendTeardown(t) {
          const e = new W(S, x, t);
          $.g(e);
        }
        teardown() {
          (this.Ot = void 0),
            this.En && clearInterval(this.En),
            this.un && clearInterval(this.un),
            this.ri.pause(),
            X.disable(),
            this.Ke.stopListening();
        }
        mn(t, e) {
          X.resetTasks(), this.Cn == t.videoId && this.vn(t), e(this.Cn == t.videoId);
          const i = new z(S, x, { eventType: "reboot", sessionId: this.Ot });
          $.g(i);
        }
        tryBroadcast(t = !1) {
          this.Wi ||
            (this.We
              ? this.forceSync()
              : 0 != this.ri.uiEventsHappening || this.qi || !this.Ot || X.hasTaskInQueue(ve) || X.pushTask(() => this.Ji(t), ve));
        }
        setBuffering(t) {
          if (this.Ot) {
            const e = new le(S, x, { buffering: t });
            $.g(e);
          }
        }
        isWatchingAds() {
          return this.Wi;
        }
        setWatchingAds(t, e) {
          if (this.Ot) {
            this.Wi = t;
            const i = new pe(S, x, { watchingAds: t, adDurationLeft: e });
            $.g(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return Ee(this, void 0, void 0, function* () {
            if (this.Ot && t !== this.Cn && t !== this.wn) {
              (this.wn = t), (this.qi = !0);
              const e = new de(S, x, { nextEpisode: t }),
                i = yield $.g(e);
              i && "Locked Session" === i.errorMessage && (yield this._n(t));
            }
          });
        }
        _n(t) {
          return Ee(this, void 0, void 0, function* () {
            try {
              yield Pt(() => t == this.Cn, 1e4)(), (this.qi = !1);
            } catch (t) {
              this.he("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: ft };
              this.sendTeardown(e);
            }
          });
        }
        Zi(t, e) {
          return Ee(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === Ht.PAUSED && t.lastKnownTime < vt) return !1;
            const i = Math.abs(t.lastKnownTime - this.bn());
            if (t.state == this.sn && i < vt) return !1;
            if (i >= vt) {
              const t = new z(S, x, { name: "video_seek", action: { source: "self" } });
              $.g(t), this.pn == Wt.AMAZON || this.pn == Wt.PARAMOUNT ? yield Mt(200)() : this.pn == Wt.HBO_MAX && (yield Mt(500)());
            }
            return !0;
          });
        }
        Xi() {
          return Ee(this, void 0, void 0, function* () {
            const t = yield this.ri.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Ni), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new ae(S, x, t);
          });
        }
        forceSync() {
          X.pushTask(this.nn, Fe);
        }
        yn(t) {
          return Ee(this, void 0, void 0, function* () {
            (this.Dn = Date.now()), X.pushTask(() => this.jn(t));
          });
        }
        jn(e) {
          return Ee(this, void 0, void 0, function* () {
            try {
              t("Continue next episode called"),
                (this.qi = !0),
                yield this.ri.jumpToNextEpisode(e),
                yield this.Ke.loadNewVideoAsync(e.videoId),
                t("After load new video"),
                this.Ke.reloadListeners(),
                this.ln < this.Dn &&
                  ((this.sn = Ht.PAUSED),
                  (this.hn = 0),
                  (this.dn = Date.now()),
                  t("Sending broadcast after next episode"),
                  X.pushTask(() => this.Ji(!0, !0), ve),
                  X.removeTask(Fe)),
                (this.Cn = e.videoId),
                (this.qi = !1);
              const i = new z(S, x, { name: "video_start", action: { description: "video session has begun" } });
              $.g(i);
            } catch (t) {
              this.he("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return Ee(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new ye(S, x, { tabId: n, persist: t });
            $.g(s);
            const u = yield this.Bn();
            (u.date = Date.now()), Ce.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return Ee(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.Bn();
              i.date = Date.now();
              const n = yield this.An(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new ye(S, x, { tabId: s, persist: !1 });
              yield $.g(u), yield Ce.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.he("Failed to fix next episode.");
              const e = new W(S, x, { showAlert: !0, alertModal: Et });
              $.g(e);
            }
          });
        }
        Bn() {
          return Ee(this, void 0, void 0, function* () {
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
                      e(t), this.he("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Ot, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        An(t) {
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
        vn(t) {
          (this.ln = Date.now()), X.pushTask(this.kn(t).bind(this));
        }
        kn(t) {
          if (t.state === Ht.PAUSED && this.sn === Ht.PLAYING) {
            this.on();
            const t = new z(S, x, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.g(t);
          } else if (t.state === Ht.PLAYING && this.sn === Ht.PAUSED) {
            const t = new z(S, x, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.g(t), this.on();
          }
          return (this.sn = t.state), (this.hn = t.lastKnownTime), (this.dn = t.lastKnownTimeUpdatedAt), this.nn;
        }
        gn(t) {
          var e;
          return Ee(this, void 0, void 0, function* () {
            try {
              const e = yield this.ri.getVideoDataAsync(),
                i = yield this.ri.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.$.getChatVisible()),
                (e.is_adblock_enabled = this.Ki),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.hn),
                t(e);
            } catch (i) {
              this.he(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        he(t) {
          const e = new z(S, x, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          $.g(e);
        }
        en(t) {
          return Ee(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  Ee(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Xi();
                      (yield this.Zi(i.data, t))
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
        tn(t) {
          return Ee(this, void 0, void 0, function* () {
            if (this.qi || this.Wi) return;
            const e = this.sn;
            if (t.data.bufferingState) {
              (t.data.state = Ht.PAUSED), yield $.g(t, 1e3), yield this.ri.waitVideoDoneLoadingAsync();
              const i = yield this.Xi();
              (i.data.bufferingState = !0), e == Ht.PLAYING && (i.data.state = Ht.PLAYING), yield $.g(i, 1e3);
            } else yield $.g(t, 1e3);
          });
        }
        Fn(t) {
          return Ee(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Ot = e.sessionId),
              (this.sn = e.state),
              (this.hn = Number(e.lastKnownTime)),
              (this.dn = Number(e.lastKnownTimeUpdatedAt)),
              (this.Cn = e.videoId),
              (this.xt = !1),
              "true" == e.controlLock && (this.We = !0),
              t.isCreate ? ((this.zi = !0), X.pushTask(this.Ji.bind(this), ve)) : this.forceSync();
            const i = new z(S, x, { name: "video_start", action: { description: "video session has begun" } });
            $.g(i), this.Ke.startListening(), this.Qn();
          });
        }
        In() {
          return new Promise((e) => {
            const i = new he(S, x),
              n = Date.now();
            $.g(i)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const i = t.serverTime;
                  i &&
                    ($t(this.Li, e - n, 5),
                    (this.Vi = Rt(this.Li)),
                    $t(this.Hi, e - Math.round(this.Vi / 2) - i, 5),
                    (this.Ni = Rt(this.Hi)));
                }
              })
              .catch((e) => {
                t(e), this.he(e);
              }),
              e();
          });
        }
        on() {
          const t = new z(S, x, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          $.g(t);
        }
        Qn() {
          this.En && clearInterval(this.En),
            this.un && clearInterval(this.un),
            (this.En = setInterval(() => {
              X.hasTaskInQueue(Fe) || X.pushTask(this.nn, Fe);
            }, 5e3)),
            (this.un = setInterval(() => {
              this.on();
            }, 6e4)),
            (this.xn = setInterval(() => {
              X.hasTaskInQueue(ge) || X.pushTask(this.In.bind(this), ge);
            }, 12500)),
            this.In();
        }
        rn() {
          return !this.Ot || this.ri.uiEventsHappening > 0 || this.Wi || this.qi || !this.Ke.shouldSync();
        }
        cn(t) {
          return Ee(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== Nt.PAUSED && (yield this.ri.pause()), Math.abs(this.hn - i) > 2500)) {
              yield this.ri.setCurrentTime(this.hn);
              const t = new z(S, x, { name: "video_seek", action: { source: "another user" } });
              $.g(t);
            }
          });
        }
        an(t) {
          return Ee(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.bn();
            if ((e == Nt.PAUSED && (yield this.ri.play()), Math.abs(n - i) > 2500)) {
              yield this.ri.setCurrentTime(n), yield this.ri.play();
              const t = new z(S, x, { name: "video_seek", action: { source: "another user" } });
              $.g(t);
            }
          });
        }
        Tn() {
          return this.sn === Ht.PLAYING ? Date.now() - (this.dn + this.Ni) : 0;
        }
        bn() {
          return this.hn + this.Tn();
        }
        get changingVideo() {
          return this.qi;
        }
        set changingVideo(t) {
          this.qi = t;
        }
      }
      i(5640);
      var _e = function (t, e, i, n) {
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
      var be = i(4296),
        je = i.n(be);
      class Be extends R {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Ae extends Be {
        constructor(t, e, i) {
          super(t, e, te.CREATE_SESSION), (this.data = i);
        }
      }
      const ke = new (class extends Kt {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", Wt.NETFLIX, !1);
      Object.freeze(ke);
      const Qe = ke;
      const Ie = new (class extends Kt {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", Wt.HULU, !1);
      Object.freeze(Ie);
      const xe = Ie;
      const Te = new (class extends Kt {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", Wt.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(Te);
      const Se = Te;
      const Me = new (class extends Kt {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== St(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + St(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return St(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", Wt.HBO_MAX, !1);
      Object.freeze(Me);
      const Pe = Me;
      const $e = new (class extends Kt {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", Wt.AMAZON, !1);
      Object.freeze($e);
      const Re = $e;
      const Oe = new (class extends Kt {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", Wt.CRUNCHYROLL, !1);
      Object.freeze(Oe);
      const Ue = Oe;
      const Ge = new (class extends Kt {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", Wt.YOUTUBE, !1);
      Object.freeze(Ge);
      const Le = Ge;
      const Ve = new (class extends Kt {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", Wt.ESPN, !1);
      Object.freeze(Ve);
      const Ne = Ve;
      const He = new (class extends Kt {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", Wt.PARAMOUNT, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends Kt {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", Wt.HOTSTAR, !1);
      Object.freeze(ze);
      const Ke = ze;
      const Ye = new (class extends Kt {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", Wt.PEACOCK, !1);
      Object.freeze(Ye);
      const Je = Ye;
      const qe = new (class extends Kt {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", Wt.FUNIMATION, !1);
      Object.freeze(qe);
      const Xe = qe;
      const Ze = new (class extends Kt {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", Wt.MAX, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends Kt {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", Wt.STAR_PLUS, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends Kt {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", Wt.PLUTO_TV, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends Kt {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", Wt.APPLE_TV, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends Kt {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", Wt.JIO_CINEMA, !1);
      Object.freeze(ri);
      const ci = ri;
      const ai = new (class extends Kt {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", Wt.TUBI_TV, !1);
      Object.freeze(ai);
      const Di = ai;
      const hi = new (class extends Kt {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", Wt.CRAVE, !1);
      Object.freeze(hi);
      const di = hi;
      const li = new (class extends Kt {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", Wt.MUBI, !1);
      Object.freeze(li);
      const pi = li;
      const gi = new (class extends Kt {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", Wt.STAN, !1);
      Object.freeze(gi);
      const Fi = gi;
      const vi = new (class extends Kt {
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
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", Wt.SLING, !1);
      Object.freeze(vi);
      const yi = vi;
      class mi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [oi],
            n = [Qe, xe, Se, Pe, Re, Le, Ue, Ne, We, Ke, Je, ii, ti, Xe, oi, si, ci, Di, pi, Fi, di, yi, Jt];
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
      class fi extends Be {
        constructor(t, e, i) {
          super(t, e, te.RE_INJECT), (this.data = i);
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
          (this.Sn = !1),
            (this.Mn = !1),
            (this.Pn = !1),
            (this.$n = 0),
            (this.Rn = !1),
            (this.On = !1),
            (this.Un = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Gn() : this.Ln();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Vn = new mi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Nn = t),
            this.Nn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Nn = t), this.Nn.setPageControls(this);
        }
        Hn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Pn ? "Only I have control" : "Everyone has control"),
            this.Pn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Wn() {
          this.Mn || ((this.Pn = !this.Pn), this.Hn());
        }
        setResetChatButton() {
          this.Nn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Nn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        zn() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Nn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.$n} unread ${1 == this.$n ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Nn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Nn.shouldChatBeVisible() ||
            this.Nn.isPartyWindowsActive() ||
            (this.$n++,
            this.zn(),
            (this.Rn = !0),
            this.Gn(),
            Mt(1e3)().then(() => {
              this.Rn = !1;
            }));
        }
        teardown() {
          this.Kn(), this.Ln(), this.Yn && clearInterval(this.Yn);
        }
        Jn() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            if (this.Mn || this.Nn.inSession) return;
            if ((this.qn(), (this.Mn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new fi(M, x, { extensionTabData: this.Vn });
              try {
                yield $.g(t);
              } catch (t) {
                return console.log(t), this.Xn(), this.he(t), this.Zn(j), void (this.Mn = !1);
              }
            }
            console.log("Sending create");
            const e = this.ts();
            try {
              const t = yield $.g(e);
              t.error ? (this.Zn(t.error.message), this.he(t.error.message)) : ((this.Mn = !1), this.es(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Zn(j), this.he(t);
            }
            this.Xn(), (this.Mn = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        Kn() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        he(t) {
          const e = new z(T, x, { name: "error", action: { description: "an error has occured", reason: t } });
          $.g(e);
        }
        Zn(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        ns(t) {
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
        Ln() {
          this.Rn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Gn() {
          return Ci(this, void 0, void 0, function* () {
            if (!this.On && (this.Un || this.Nn.inSession)) {
              this.On = !0;
              try {
                yield this.addTpIcon(),
                  this.Nn.inSession ? this.enablePartyIcons() : this.Kn(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.On = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Yn = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Yn && clearInterval(this.Yn);
        }
        ss() {
          return "100px";
        }
        addTpIcon() {
          return Ci(this, void 0, void 0, function* () {
            if ((this.Un || this.Nn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.ns(je()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.us());
            }
          });
        }
        us() {
          jQuery("#tp-control-lock-button").click(this.Wn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.ss()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.ss()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.ss()}`),
            jQuery("#tp-link-button").click(this.os.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.rs(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.cs();
            });
        }
        cs() {
          const t = new W(M, x, jt);
          $.g(t), this.Ln();
        }
        os() {
          this.Nn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        rs() {
          return Ci(this, void 0, void 0, function* () {
            (this.$n = 0),
              this.hideMessageIndicator(),
              this.Nn.isPartyWindowsActive()
                ? this.Nn.resetChatWindow(!0)
                : (this.Nn.shouldChatBeVisible(), yield this.Nn.setChatVisible(!this.Nn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Sn && this.Gn();
        }
        setChatButtons() {
          this.Nn.inSession && this.Nn.getChatVisible() ? this.es() : this.Ds(),
            this.Nn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        es() {
          return Ci(this, void 0, void 0, function* () {
            this.Nn.inSession &&
              this.Nn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Ds() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        ts() {
          return new Ae(M, x, this.hs());
        }
        hs() {
          return { createSettings: { controlLock: this.Pn }, streamingService: this.Vn.streamingService, tabId: this.Vn.id, source: "pc" };
        }
        qn() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        Xn() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        shouldMenuBeVisible() {
          const t = document.querySelector('[data-testid="player-space-container"]');
          return !t || "none" !== t.style.cursor;
        }
        getControlsRoot() {
          return wi(this, void 0, void 0, function* () {
            return jQuery('[data-testid="player-space-container"]');
          });
        }
        getControlsHeight() {
          return "100px";
        }
        reloadListeners() {
          this.stopEventListener(), this.startEventListener();
        }
      }
      class bi extends class {
        constructor(t, e, i, n) {
          (this.$ = t),
            (this.ri = e),
            (this.Ke = i),
            (this.ie = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.$), console.log("Resetting Chat Api for old controls")),
            (this.ds = new ce(this.$, this.ie)),
            (this.Te = new we(this.ri, this.$, this.Ke)),
            (this.ls = !1),
            (this.ps = !1),
            (this.ae = !1),
            (this._i = new ue()),
            this._i.addMessageListener(this.Te),
            this._i.addMessageListener(this.ds),
            this._i.addMessageListener(this),
            (this.gs = !1),
            this.Fs();
        }
        vs() {
          return _e(this, void 0, void 0, function* () {
            yield this.ie.addTpIcon(), this.ie.startEventListener();
          });
        }
        loadBrowseButton() {
          return _e(this, void 0, void 0, function* () {
            yield this.ie.addTpIcon(), this.ie.startEventListener();
          });
        }
        Fs() {
          const e = chrome.runtime.connect();
          e.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.$.inSession, alertModal: wt };
            this.ys(t);
          }),
            e.onMessage.addListener(() => {
              t("Got background script"), (this.gs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == S) {
            if (t.type === te.IS_CONTENT_SCRIPT_READY) {
              if (this.ls) {
                i({ ready: !0 });
              } else (this.ps = !0), this.fs().then(i);
              return !0;
            }
            if (t.type === te.GET_INIT_DATA) {
              return i(this.Cs()), !0;
            }
            if (t.type === te.DISCONNECT && t.sender == T) {
              const t = new W(S, x, jt);
              $.g(t), i();
            } else {
              if (t.type == G.TEARDOWN) {
                const e = t;
                return this.ys(e.data), i(), !0;
              }
              t.type === G.ON_NOTIF && this.Es();
            }
          }
          return !1;
        }
        Es() {
          console.log("Show Notification");
        }
        ys(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.$.getPartyUrl();
            _t(t.alertModal, i);
          }
          this.ie.teardown(), this.Te.teardown(), this.ds.teardown(), this._i.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new z(S, x, s);
          $.g(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        he(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new z(S, x, { name: "error", action: { reason: t } });
          $.g(e);
        }
        ws() {
          return _e(this, void 0, void 0, function* () {
            return Pt(() => this.gs, 5e3)();
          });
        }
        fs() {
          return _e(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.ws();
              const t = yield this._s();
              return this.vs(), t;
            } catch (t) {
              const e = { message: _, showButton: !1 };
              return this.he(_), { ready: !1, error: e };
            } finally {
              this.ps = !1;
            }
          });
        }
        _s() {
          return _e(this, void 0, void 0, function* () {
            let e;
            try {
              yield this.ri.waitVideoApiReadyAsync();
              const i = yield this.bs();
              i && i.error
                ? (t("Error is:", i.error),
                  (e = { message: i.error, showButton: !0 }),
                  (this.ls = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (i && i.showReviewMessage && (this.ae = !0),
                  (this.ls = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (t) {
              (e = { message: t.message, showButton: !1 }), this.he(t.message);
            }
            return { ready: this.ls, error: e };
          });
        }
        Cs() {
          return {
            inSession: this.$.inSession,
            isChatVisible: this.$.isPartyWindowsActive() ? this.$.getChatWindowVisible() : this.$.getChatVisible(),
            partyUrl: this.$.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.$.isPartyWindowsActive()
          };
        }
        bs() {
          return _e(this, void 0, void 0, function* () {
            const t = yield this.js();
            return $.g(t);
          });
        }
        js() {
          return _e(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.ri.getVideoDataAsync()).videoId };
            return new se(S, x, t);
          });
        }
      } {
        constructor() {
          const e = new Vt(),
            i = new Xt();
          let n;
          window.teleparty && window.teleparty.pageControls
            ? ((n = window.teleparty.pageControls), console.log("Using existing page controls"))
            : (n = new _i(e));
          super(e, i, new ne(i, e, n), n), t("DisneyMena Content Script");
        }
      }
      (window.teleparty && (null === (Ei = window.teleparty) || void 0 === Ei ? void 0 : Ei.contentScriptInjected)) ||
        (window.teleparty || (window.teleparty = {}), (window.teleparty.contentScriptInjected = !0), new bi(), t("Listening to messages"));
    })();
})();
