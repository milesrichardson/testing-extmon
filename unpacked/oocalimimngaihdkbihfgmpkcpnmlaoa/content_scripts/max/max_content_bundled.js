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
      const t = chrome.runtime.id,
        e = "reactionContainerOpen",
        n = "https://sessions.teleparty.com",
        s = "https://redirect.teleparty.com",
        u = s,
        o = `${s}/sidebar`,
        r = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        a = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        c = "recentlyUsedEmojiMap",
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
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g,
        l = [
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
        p = [
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
        g = [
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
        F = {
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
      function v(t) {
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
      const y = {
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
      var m;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(m || (m = {}));
      var f;
      function C(t) {
        return t.includes("urn:hbo:feature")
          ? m.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? m.EPISODE
          : t.includes("urn:hbo:extra")
          ? m.EXTRA
          : m.OTHER;
      }
      function E(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function w(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : E(i)().then(s);
            };
          return s();
        };
      }
      function _(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function b(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(f || (f = {}));
      var j = function (t, e, i, n) {
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
      var B = console.log.bind(window.console);
      const A = 1e3,
        k = 72e5,
        Q = 12e4;
      class I {
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
      var x;
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
      })(x || (x = {}));
      const T = new (class extends I {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", x.MAX, !1);
      Object.freeze(T);
      const S = T,
        M = chrome.extension.getURL("img/x-circle.svg"),
        P = "with-chat",
        $ = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        R = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        G = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        L = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function O(t, e) {
        V();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${M}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${M}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            V();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              V(), (window.location.href = e);
            });
      }
      function V() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const U = { showAlert: !1 },
        N = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var H = function (t, e, i, n) {
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
      class W {
        constructor() {
          this.resetTasks(), (this.l = []), (this.p = 0), (this.g = Promise.resolve()), (this.F = !0);
        }
        createInstance() {
          return new W();
        }
        pushTask(t, e) {
          if (!this.F) return;
          const i = { action: t, name: e };
          0 === this.p && this.resetTasks(),
            (this.p = this.l.push(i)),
            (this.g = this.g.then(() => {
              if (this.l.includes(i) && this.F)
                return this.v(i)().then(() => {
                  this.l.shift(), (this.p -= 1);
                });
            }));
        }
        disable() {
          (this.F = !1), this.resetTasks();
        }
        resetTasks() {
          (this.g = Promise.resolve()), (this.l = []), (this.p = 0);
        }
        v(t) {
          return function () {
            return H(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
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
      const z = new W();
      var K = function (t, e, i, n) {
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
        constructor(t) {
          (this.m = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return j(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return j(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return j(this, void 0, void 0, function* () {
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
            j(this, void 0, void 0, function* () {
              this.B(), this.m.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              j(this, void 0, void 0, function* () {
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
        T() {
          var t, e;
          null === (t = this.C) || void 0 === t || t.setWatchingAds(!1), null === (e = this.C) || void 0 === e || e.forceSync();
        }
        S() {
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
            (this.$ = this.onInteraction.bind(this)),
            (this.R = this.G.bind(this)),
            (this.L = this.onSeeking.bind(this)),
            (this.O = this.k.bind(this)),
            (this.V = this.S.bind(this)),
            (this.U = () =>
              K(this, void 0, void 0, function* () {
                yield w(() => (this.m.play(), this.m.isWatchingAd() || (this.T(), (this.N = !1)), !this.m.isWatchingAd()), 1 / 0)();
              })),
            (this.H = () =>
              K(this, void 0, void 0, function* () {
                this.m.isWatchingAd() && !this.N && ((this.N = !0), this.I(), yield this.U());
              })),
            (this.m = t),
            this.m.setVideoEventListener(this),
            (this.W = this.m.onNode.bind(this.m)),
            this.initListeners(),
            (this.K = e),
            (this.N = !1),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/max/max_injected_bundled.js")),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.replaceScriptLoaded) ||
              (B("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              ));
        }
        initListeners() {
          window.addEventListener("FromNode", this.W, !1);
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        onInteraction() {
          z.tasksInFlight < 5 && !this.m.isWatchingAd() && this.B();
        }
        onSeeking() {
          const t = this.m.getVideoElement();
          t && t.readyState < 4 && this.k(), this.A();
        }
        startListening() {
          super.startListening(),
            window.addEventListener("mouseup", this.$),
            window.addEventListener("keyup", this.$),
            (this.Y = setInterval(() => {
              this.H();
            }, 1e3)),
            window.addEventListener("message", this.R, !1);
        }
        stopListening() {
          super.stopListening(),
            this.Y && clearInterval(this.Y),
            window.removeEventListener("mouseup", this.$),
            window.removeEventListener("keyup", this.$),
            window.removeEventListener("message", this.R, !1);
        }
        loadNewVideoAsync(t) {
          return K(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                const u = S.getVideoId(new URL(window.location.href)),
                  o = this.m.uniqueVideoTitle();
                if (u === t && o === this.m.uniqTitle) {
                  const t = this.m.getVideoElement();
                  if (t instanceof Element && t.src) return B("Loaded new Max video"), clearInterval(s), void i();
                }
                performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.m.waitVideoApiReadyAsync();
          });
        }
        G(t) {
          var e;
          if (t.source == window)
            if ("FROM_PAGE_POP" !== t.data.type) {
              if (t.data.type && "FROM_PAGE" == t.data.type) {
                B("***********************************"), B("Content script received: " + t.data.text);
                const i = S.isValidUrl(new URL(window.location.href));
                if ((B(window.location.href), i)) {
                  const t = S.getVideoId(new URL(window.location.href));
                  if (!t) return B("No video found. Tearing down"), void this.P(U);
                  t !== (null === (e = this.C) || void 0 === e ? void 0 : e.videoId) &&
                    E(1e3)().then(() => {
                      w(() => !this.m.isWatchingAd(), 1 / 0)().then(() => {
                        this.M(t);
                      });
                    });
                } else this.P(U);
              }
            } else this.P(U);
        }
      }
      const J = "Service_Background",
        q = "Popup",
        X = "Content_Script",
        Z = "Page_Controls";
      var tt;
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
      })(tt || (tt = {}));
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
      const it = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return et(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && B(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        J(e, i) {
          return et(this, void 0, void 0, function* () {
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
      class nt {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class st extends nt {
        constructor(t, e, i) {
          super(t, e, i), (this.q = i);
        }
      }
      var ut, ot, rt, at;
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
      })(ut || (ut = {}));
      class ct extends st {
        constructor(t, e, i) {
          super(t, e, ut.GET_SESSION_DATA), (this.data = i);
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
      })(ot || (ot = {}));
      class Dt {
        constructor() {
          (this.X = this.Z.bind(this)), (this.tt = []), this.et();
        }
        addMessageListener(t) {
          this.tt.push(t);
        }
        removeMessageListener(t) {
          this.tt = this.tt.filter((t) => {});
        }
        et() {
          it.addListener(this.X);
        }
        teardown() {
          (this.tt = []), it.removeListener(this.X);
        }
        Z(t, e, i) {
          if (!this.it(t)) return !1;
          return !!this.nt(t, e, i) || (i({}), !1);
        }
        it(t) {
          return t.target === X;
        }
        nt(t, e, i) {
          let n = !1;
          return (
            this.tt.forEach((s) => {
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
      })(rt || (rt = {})),
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
        })(at || (at = {}));
      var ht,
        dt,
        lt,
        pt = function (t, e, i, n) {
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
      class gt {
        constructor(t, e) {
          (this.K = t), (this.st = e), B("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case ot.LOAD_SESSION: {
              const e = t;
              return this.ut(e.data), !1;
            }
            case rt.ON_MESSAGE: {
              const e = t;
              return this.ot(e), this.st.onChatMessage(), !1;
            }
            case rt.ON_BUFFER: {
              const e = t;
              return this.rt(e), !1;
            }
            case rt.ON_TYPING: {
              const e = t;
              return this.ct(e), !1;
            }
            case rt.ON_WATCHING_ADS: {
              const e = t;
              return this.Dt(e), !1;
            }
            case rt.UPDATE_SETTINGS: {
              const e = t;
              return this.ht(e), !1;
            }
            case rt.ON_REACTION: {
              const e = t;
              return this.dt(e), !1;
            }
            case rt.ON_GIF: {
              const e = t;
              return this.lt(e), !1;
            }
            case rt.USER_LIST: {
              const e = t;
              return this.gt(e), !1;
            }
            case rt.ON_WEB_RTC:
              return this.K.onWebRTC(t.data), !0;
            case tt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.Ft(e.data), i(), !1;
            }
            case at.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.K.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case at.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case at.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.K.doUpdateSettings(e), i(), !0;
            }
            case at.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case at.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.K.setReactionsActive(e), i(), !0;
            }
            case at.RESET_VIEW:
              return this.K.resetChatWindow(!0), i(), !0;
            case at.ON_FOCUS:
              return this.K.onSidebarFocus(), i(), !0;
            case at.PREVIEW_REACTION: {
              const e = t.data;
              return this.K.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.K.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.K.teardown();
        }
        Ft(t) {
          return pt(this, void 0, void 0, function* () {
            this.K.isPartyWindowsActive()
              ? t.visible
                ? yield this.K.resetChatWindow()
                : yield this.K.hideChatWindow()
              : (yield this.K.setChatVisible(t.visible), this.K.fixPageControls());
          });
        }
        ut(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${u}/join/${e}`;
          if (
            (this.K.loadInitData(t),
            this.K.setPartyUrl(i),
            this.K.setSessionId(e),
            this.K.vt(t.storageData),
            this.st.onInitChat(),
            this.K.setSessionCreated(t.isCreate),
            this.K.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.K.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.K.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.K.addGif(e) : this.K.addMessage(e, !0);
        }
        ot(t) {
          this.K.addMessage(t.data);
        }
        dt(t) {
          this.K.showReaction(t.data);
        }
        lt(t) {
          this.K.addGif(t.data);
        }
        rt(t) {
          this.K.onBufferingMessage(t.data);
        }
        ct(t) {
          this.K.onTypingMessage(t.data);
        }
        Dt(t) {
          this.K.onWatchingAdsMessage(t.data);
        }
        ht(t) {
          this.K.onUpdateSettingsMessage(t.data);
        }
        gt(t) {
          this.K.loadUserList(t.data.userList), this.K.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(ht || (ht = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(dt || (dt = {})),
        (function (t) {
          (t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty");
        })(lt || (lt = {}));
      class Ft extends st {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST), (this.data = i);
        }
      }
      class vt extends nt {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class yt extends vt {
        constructor(t, e, i) {
          super(t, e, ot.TEARDOWN), (this.data = i);
        }
      }
      class mt extends nt {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ft extends mt {
        constructor(t, e) {
          super(t, e, lt.GET_SERVER_TIME);
        }
      }
      class Ct extends st {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class Et extends st {
        constructor(t, e, i) {
          super(t, e, ut.SET_BUFFERING), (this.data = i);
        }
      }
      class wt extends st {
        constructor(t, e, i) {
          super(t, e, ut.SET_WATCHING_ADS), (this.data = i);
        }
      }
      class _t extends vt {
        constructor(t, e, i) {
          super(t, e, ot.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const bt = "PING",
        jt = "SYNC",
        Bt = "BROADCAST";
      class At extends vt {
        constructor(t, e, i) {
          super(t, e, ot.STAY_ALIVE), (this.data = i);
        }
      }
      const kt = "Failed to read chrome storage. Please refresh the page and try again",
        Qt = "Failed to connect to Script. Please refresh the page and try again",
        It = "An unexpected error occured. Please refresh the page and try again.";
      var xt = function (t, e, i, n) {
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
        getItemsAsync(t) {
          return xt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(kt))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return xt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(kt))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(Tt);
      const St = Tt;
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
        setItemsAsync(t) {
          return Mt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(Pt);
      const $t = Pt;
      var Rt = function (t, e, i, n) {
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
          return Rt(this, void 0, void 0, function* () {
            const e = (yield St.getItemsAsync([D])).redirectDataMap,
              i = this.yt(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.ft(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return Rt(this, void 0, void 0, function* () {
            const e = (yield St.getItemsAsync([D])).redirectDataMap,
              i = this.yt(t);
            e && e[i] && delete e[i], yield $t.setItemsAsync({ [D]: e });
          });
        }
        yt(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return Rt(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.yt(e);
            let n = yield St.getItemsAsync([D]);
            (n[i] = t), (n = this.Ct(n)), yield $t.setItemsAsync({ [D]: n });
          });
        }
        Ct(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.ft);
        }
        ft(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(Gt);
      const Lt = Gt;
      var Ot = function (t, e, i, n) {
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
      class Vt {
        constructor(t, e, i) {
          (this.Et = []),
            (this.wt = 0),
            (this._t = 0),
            (this.bt = []),
            (this.jt = !1),
            (this.Bt = !1),
            (this.At = !1),
            (this.kt = !1),
            (this.Qt = void 0),
            (this.It = () =>
              Ot(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Qt = !1);
                } catch (t) {
                  this.Qt = !0;
                }
              })),
            (this.xt = (t = !1, e = !1) =>
              Ot(this, void 0, void 0, function* () {
                if (this.Tt) return;
                if (this.At) return void this.forceSync();
                if (!this.kt && !e) return;
                const i = yield this.St();
                if (yield this.Mt(i.data, e)) yield this.Pt(i);
                else if (t) {
                  if (yield this.$t(e)) {
                    const t = yield this.St();
                    yield this.Pt(t);
                  }
                }
              })),
            (this.Rt = () =>
              Ot(this, void 0, void 0, function* () {
                if (
                  (this.Gt == ht.PAUSED &&
                    this.Lt &&
                    (clearInterval(this.Lt),
                    (this.Lt = setInterval(() => {
                      this.Ot();
                    }, 6e4))),
                  this.Vt())
                )
                  return;
                if ((yield this.m.waitVideoDoneLoadingAsync(), this.Vt())) return;
                const t = yield this.m.getStateAsync();
                this.Gt == ht.PAUSED ? yield this.Ut(t) : this.Gt == ht.PLAYING && (yield this.Nt(t)), !1 === this.kt && (this.kt = !0);
              })),
            (this.m = t),
            (this.K = e),
            (this.Ht = i),
            this.Ht.setMessageForwarder(this),
            (this.Wt = 0),
            (this.Tt = !1),
            (this.Gt = ht.PAUSED),
            (this.zt = 0),
            (this.Kt = 0),
            (this.Yt = 0),
            (this.Jt = this.m.getStreamingServiceName()),
            B("Video forwarder"),
            this.It();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case ot.GET_VIDEO_DATA:
              return this.qt(i), !0;
            case ot.LOAD_SESSION: {
              const e = t;
              return this.Xt(e.data), !1;
            }
            case lt.UPDATE_SESSION: {
              const e = t;
              return this.Zt(e.data), !1;
            }
            case lt.NEXT_EPISODE: {
              const e = t;
              return this.te(e.data), !1;
            }
            case lt.REBOOT_SESSION: {
              const e = t;
              return this.ee(e.data, i), !0;
            }
            case lt.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case rt.ON_WATCHING_ADS: {
              const e = t;
              return this.Dt(e), !1;
            }
            default:
              return !1;
          }
        }
        Dt(t) {
          t.data.anyoneWatchingAds && !this.Bt && (z.pushTask(this.m.doAdCheck.bind(this.m)), this.forceSync()),
            (this.Bt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.ie;
        }
        set videoId(t) {
          this.ie = t;
        }
        sendTeardown(t) {
          const e = new yt(X, J, t);
          it.J(e);
        }
        teardown() {
          (this.ne = void 0),
            this.se && clearInterval(this.se),
            this.Lt && clearInterval(this.Lt),
            this.m.pause(),
            z.disable(),
            this.Ht.stopListening();
        }
        ee(t, e) {
          z.resetTasks(), this.ie == t.videoId && this.Zt(t), e(this.ie == t.videoId);
          const i = new _t(X, J, { eventType: "reboot", sessionId: this.ne });
          it.J(i);
        }
        tryBroadcast(t = !1) {
          this.jt ||
            (this.At
              ? this.forceSync()
              : 0 != this.m.uiEventsHappening || this.Tt || !this.ne || z.hasTaskInQueue(Bt) || z.pushTask(() => this.xt(t), Bt));
        }
        setBuffering(t) {
          if (this.ne) {
            const e = new Et(X, J, { buffering: t });
            it.J(e);
          }
        }
        isWatchingAds() {
          return this.jt;
        }
        setWatchingAds(t, e) {
          if (this.ne) {
            this.jt = t;
            const i = new wt(X, J, { watchingAds: t, adDurationLeft: e });
            it.J(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return Ot(this, void 0, void 0, function* () {
            if (this.ne && t !== this.ie && t !== this.ue) {
              (this.ue = t), (this.Tt = !0);
              const e = new Ct(X, J, { nextEpisode: t }),
                i = yield it.J(e);
              i && "Locked Session" === i.errorMessage && (yield this.oe(t));
            }
          });
        }
        oe(t) {
          return Ot(this, void 0, void 0, function* () {
            try {
              yield w(() => t == this.ie, 1e4)(), (this.Tt = !1);
            } catch (t) {
              this.re("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: $ };
              this.sendTeardown(e);
            }
          });
        }
        Mt(t, e) {
          return Ot(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === ht.PAUSED && t.lastKnownTime < A) return !1;
            const i = Math.abs(t.lastKnownTime - this.ae());
            if (t.state == this.Gt && i < A) return !1;
            if (i >= A) {
              const t = new _t(X, J, { name: "video_seek", action: { source: "self" } });
              it.J(t), this.Jt == x.AMAZON || this.Jt == x.PARAMOUNT ? yield E(200)() : this.Jt == x.HBO_MAX && (yield E(500)());
            }
            return !0;
          });
        }
        St() {
          return Ot(this, void 0, void 0, function* () {
            const t = yield this.m.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this._t), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new Ft(X, J, t);
          });
        }
        forceSync() {
          z.pushTask(this.Rt, jt);
        }
        te(t) {
          return Ot(this, void 0, void 0, function* () {
            (this.Wt = Date.now()), z.pushTask(() => this.ce(t));
          });
        }
        ce(t) {
          return Ot(this, void 0, void 0, function* () {
            try {
              B("Continue next episode called"),
                (this.Tt = !0),
                yield this.m.jumpToNextEpisode(t),
                yield this.Ht.loadNewVideoAsync(t.videoId),
                B("After load new video"),
                this.Ht.reloadListeners(),
                this.Yt < this.Wt &&
                  ((this.Gt = ht.PAUSED),
                  (this.zt = 0),
                  (this.Kt = Date.now()),
                  B("Sending broadcast after next episode"),
                  z.pushTask(() => this.xt(!0, !0), Bt),
                  z.removeTask(jt)),
                (this.ie = t.videoId),
                (this.Tt = !1);
              const e = new _t(X, J, { name: "video_start", action: { description: "video session has begun" } });
              it.J(e);
            } catch (t) {
              this.re("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return Ot(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new At(X, J, { tabId: n, persist: t });
            it.J(s);
            const u = yield this.De();
            (u.date = Date.now()), Lt.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return Ot(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.De();
              i.date = Date.now();
              const n = yield this.he(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new At(X, J, { tabId: s, persist: !1 });
              yield it.J(u), yield Lt.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.re("Failed to fix next episode.");
              const e = new yt(X, J, { showAlert: !0, alertModal: G });
              it.J(e);
            }
          });
        }
        De() {
          return Ot(this, void 0, void 0, function* () {
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
                      e(t), this.re("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.ne, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        he(t) {
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
        Zt(t) {
          (this.Yt = Date.now()), z.pushTask(this.de(t).bind(this));
        }
        de(t) {
          if (t.state === ht.PAUSED && this.Gt === ht.PLAYING) {
            this.Ot();
            const t = new _t(X, J, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            it.J(t);
          } else if (t.state === ht.PLAYING && this.Gt === ht.PAUSED) {
            const t = new _t(X, J, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            it.J(t), this.Ot();
          }
          return (this.Gt = t.state), (this.zt = t.lastKnownTime), (this.Kt = t.lastKnownTimeUpdatedAt), this.Rt;
        }
        qt(t) {
          var e;
          return Ot(this, void 0, void 0, function* () {
            try {
              const e = yield this.m.getVideoDataAsync(),
                i = yield this.m.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.K.getChatVisible()),
                (e.is_adblock_enabled = this.Qt),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.zt),
                t(e);
            } catch (i) {
              this.re(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        re(t) {
          const e = new _t(X, J, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          it.J(e);
        }
        $t(t) {
          return Ot(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  Ot(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.St();
                      (yield this.Mt(i.data, t))
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
        Pt(t) {
          return Ot(this, void 0, void 0, function* () {
            if (this.Tt || this.jt) return;
            const e = this.Gt;
            if (t.data.bufferingState) {
              (t.data.state = ht.PAUSED), yield it.J(t, 1e3), yield this.m.waitVideoDoneLoadingAsync();
              const i = yield this.St();
              (i.data.bufferingState = !0), e == ht.PLAYING && (i.data.state = ht.PLAYING), yield it.J(i, 1e3);
            } else yield it.J(t, 1e3);
          });
        }
        Xt(t) {
          return Ot(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.ne = e.sessionId),
              (this.Gt = e.state),
              (this.zt = Number(e.lastKnownTime)),
              (this.Kt = Number(e.lastKnownTimeUpdatedAt)),
              (this.ie = e.videoId),
              (this.Bt = !1),
              "true" == e.controlLock && (this.At = !0),
              t.isCreate ? ((this.kt = !0), z.pushTask(this.xt.bind(this), Bt)) : this.forceSync();
            const i = new _t(X, J, { name: "video_start", action: { description: "video session has begun" } });
            it.J(i), this.Ht.startListening(), this.le();
          });
        }
        pe() {
          return new Promise((t) => {
            const e = new ft(X, J),
              i = Date.now();
            it
              .J(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (_(this.Et, e - i, 5), (this.wt = b(this.Et)), _(this.bt, e - Math.round(this.wt / 2) - n, 5), (this._t = b(this.bt)));
                }
              })
              .catch((t) => {
                B(t), this.re(t);
              }),
              t();
          });
        }
        Ot() {
          const t = new _t(X, J, {
            name: "video_heartbeat",
            action: { description: "new heartbeat", reason: "Heartbeat session was due" }
          });
          it.J(t);
        }
        le() {
          this.se && clearInterval(this.se),
            this.Lt && clearInterval(this.Lt),
            (this.se = setInterval(() => {
              z.hasTaskInQueue(jt) || z.pushTask(this.Rt, jt);
            }, 5e3)),
            (this.Lt = setInterval(() => {
              this.Ot();
            }, 6e4)),
            (this.ge = setInterval(() => {
              z.hasTaskInQueue(bt) || z.pushTask(this.pe.bind(this), bt);
            }, 12500)),
            this.pe();
        }
        Vt() {
          return !this.ne || this.m.uiEventsHappening > 0 || this.jt || this.Tt || !this.Ht.shouldSync();
        }
        Ut(t) {
          return Ot(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== dt.PAUSED && (yield this.m.pause()), Math.abs(this.zt - i) > 2500)) {
              yield this.m.setCurrentTime(this.zt);
              const t = new _t(X, J, { name: "video_seek", action: { source: "another user" } });
              it.J(t);
            }
          });
        }
        Nt(t) {
          return Ot(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.ae();
            if ((e == dt.PAUSED && (yield this.m.play()), Math.abs(n - i) > 2500)) {
              yield this.m.setCurrentTime(n), yield this.m.play();
              const t = new _t(X, J, { name: "video_seek", action: { source: "another user" } });
              it.J(t);
            }
          });
        }
        Fe() {
          return this.Gt === ht.PLAYING ? Date.now() - (this.Kt + this._t) : 0;
        }
        ae() {
          return this.zt + this.Fe();
        }
        get changingVideo() {
          return this.Tt;
        }
        set changingVideo(t) {
          this.Tt = t;
        }
      }
      i(5640);
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
      var Nt = function (t, e, i, n) {
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
      var Ht = function (t, e, i, n) {
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
      class Wt extends class {
        constructor() {
          (this.ve = 0), (this.At = !1);
        }
        set hostOnly(t) {
          this.At = t;
        }
        get hostOnly() {
          return this.At;
        }
        get uiEventsHappening() {
          return this.ve;
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
          const i = new _t(X, J, { name: "video_error", action: { description: t, reason: e } });
          it.J(i);
        }
        doAdCheck() {
          return Nt(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.ye = 0), (this.fe = []), (this.uniqTitle = "");
        }
        onNode(t) {
          const e = t.detail;
          "getAd" == e.type && ((this.ye = Date.now()), (this.fe = e.adList));
        }
        updateAdList() {
          return Ht(this, void 0, void 0, function* () {
            try {
              const t = Date.now(),
                e = new CustomEvent("MaxVideoMessage", { detail: { type: "getAdList" } });
              yield w(() => (window.dispatchEvent(e), 0 != this.ye && this.ye > t), 500, 10)();
            } catch (t) {
              console.log(t);
            }
          });
        }
        waitVideoApiReadyAsync() {
          return Ht(this, void 0, void 0, function* () {
            yield w(() => {
              const t = this.Ce();
              return "paused" === t || "playing" === t;
            }, 1 / 0)();
            const t = Date.now(),
              e = new CustomEvent("MaxVideoMessage", { detail: { type: "getAdList" } });
            yield w(() => (window.dispatchEvent(e), 0 != this.ye && this.ye > t), 1 / 0)();
          });
        }
        Ce() {
          const t = this.getVideoElement();
          return null == t ? dt.NOT_READY : t.readyState < t.HAVE_FUTURE_DATA ? dt.LOADING : t.paused ? dt.PAUSED : dt.PLAYING;
        }
        setVideoEventListener(t) {
          this.Ht = t;
        }
        waitVideoDoneLoadingAsync() {
          var t;
          return Ht(this, void 0, void 0, function* () {
            return yield null === (t = this.Ht) || void 0 === t ? void 0 : t.H(), w(() => this.Ce() !== dt.LOADING, 25e3)();
          });
        }
        getStreamingServiceName() {
          return x.MAX;
        }
        Ee() {
          const t = this.getVideoElement();
          return t ? t.duration - this.we() : 0;
        }
        we() {
          const t = this.fe;
          let e = 0;
          if (t)
            try {
              t.forEach((t) => {
                e += t.adDuration / 1e3;
              });
            } catch (t) {
              return 0;
            }
          return e;
        }
        _e(t) {
          var e;
          const i = null === (e = this.getVideoElement()) || void 0 === e ? void 0 : e.currentTime,
            n = this.fe;
          let s = 0;
          if (n && null != i)
            try {
              n.forEach((t) => {
                i > t.adStartTime / 1e3 &&
                  (i < (t.adStartTime + t.adDuration) / 1e3 ? (s += i - t.adStartTime / 1e3) : (s += t.adDuration / 1e3));
              });
            } catch (t) {
              return 0;
            }
          return s;
        }
        be(t) {
          var e;
          const i = null === (e = this.getVideoElement()) || void 0 === e ? void 0 : e.currentTime,
            n = this.fe;
          let s = 0;
          if (n && null != i)
            try {
              n.forEach((t) => {
                i - s < (t.adStartTime + t.adDuration) / 1e3 ? (s += i - t.adStartTime / 1e3) : (s += t.adDuration / 1e3);
              });
            } catch (t) {
              return 0;
            }
          return s;
        }
        getCurrentTime() {
          const t = this.getVideoElement();
          if (t) {
            const e = this._e(),
              i = t.currentTime - e;
            return Math.floor(1e3 * i);
          }
        }
        possibleAd() {
          const t = this.getVideoElement(),
            e = null == t ? void 0 : t.currentTime,
            i = this.fe;
          let n = 0;
          if (i && e)
            try {
              return i.some((t) => {
                const i = e,
                  s = t.adStartTime / 1e3;
                if (i > s) {
                  if (i < s + t.adDuration / 1e3) return !0;
                  n += t.adDuration / 1e3;
                }
                return !1;
              });
            } catch (t) {
              return !1;
            }
          return !1;
        }
        setCurrentTime(t) {
          return Ht(this, void 0, void 0, function* () {
            this.ve += 1;
            try {
              const e = this.getVideoElement();
              e && (e.currentTime = t / 1e3 + this._e(t / 1e3));
            } finally {
              this.ve -= 1;
            }
          });
        }
        je() {
          return this.getCurrentTime();
        }
        getStateAsync() {
          return new Promise((t, e) => {
            const i = this.Ce(),
              n = this.je();
            void 0 !== n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
          });
        }
        getUpdateSessionDataAsync() {
          return Ht(this, void 0, void 0, function* () {
            const t = this.je();
            if (void 0 === t) throw new Error();
            const e = this.getVideoElement();
            return { state: e && !e.paused ? ht.PLAYING : ht.PAUSED, lastKnownTime: t, lastKnownTimeUpdatedAt: Date.now() };
          });
        }
        isWatchingAd() {
          return this.possibleAd();
        }
        Be() {
          var t;
          const e = document.querySelector('[data-testid="player-ux-asset-title"]');
          return e && null !== (t = e.innerHTML) && void 0 !== t ? t : "";
        }
        Ae() {
          return document.querySelector('[data-testid="player-ux-season-episode"]') ? m.EPISODE : m.FEATURE;
        }
        ke() {
          var t, e, i, n, s;
          let u = {};
          const o =
            null === (t = document.querySelector('[data-testid="player-ux-season-episode"]')) || void 0 === t ? void 0 : t.textContent;
          if (o) {
            const t = null !== (e = null == o ? void 0 : o.match(/S(\d*)/)) && void 0 !== e ? e : [""],
              r = null !== (i = null == o ? void 0 : o.match(/E(\d*)/)) && void 0 !== i ? i : [""];
            u = {
              episodeNum: Number(r[1]),
              seasonNum: Number(t[1]),
              title:
                null !==
                  (s =
                    null === (n = document.querySelector('[data-testid="player-ux-asset-subtitle"]')) || void 0 === n
                      ? void 0
                      : n.textContent) && void 0 !== s
                  ? s
                  : this.Be()
            };
          }
          return u;
        }
        uniqueVideoTitle() {
          var t;
          return this.Be() + (null !== (t = this.ke().title) && void 0 !== t ? t : "");
        }
        getVideoDataAsync() {
          return Ht(this, void 0, void 0, function* () {
            const t = this.uniqueVideoTitle();
            return (
              t != this.uniqTitle && (this.uniqTitle = t),
              new Promise((t, e) => {
                var i, n;
                const s = this.Ee(),
                  u = null !== (i = this.Qe()) && void 0 !== i ? i : "",
                  o = this.getScreenSize(),
                  r = null !== (n = this.Be()) && void 0 !== n ? n : "",
                  a = this.Ae(),
                  c = this.ke(),
                  D = this.getVideoContent(u, r, window.location.href, a, c);
                void 0 !== s && void 0 !== u && void 0 !== r
                  ? t({ videoId: u, videoTitle: r, videoDuration: s, screen: o, videoType: a, content: D, videoState: this.Ce() })
                  : e();
              })
            );
          });
        }
        Qe() {
          var t;
          return null !== (t = S.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "";
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        jumpToNextEpisode(t) {
          var e;
          return Ht(this, void 0, void 0, function* () {
            if (this.Qe() != t.videoId) {
              console.log("jump episodes");
              try {
                yield null === (e = this.Ht) || void 0 === e ? void 0 : e.reloadNextEpisode();
              } catch (t) {
                console.log("Failed to jump to next episode:", t);
              }
            }
          });
        }
        freeze(t) {
          return Ht(this, void 0, void 0, function* () {
            this.ve += 1;
            try {
              yield this.pause(), yield E(t)(), yield this.play();
            } finally {
              this.ve -= 1;
            }
          });
        }
        pause() {
          var t;
          return Ht(this, void 0, void 0, function* () {
            this.ve += 1;
            try {
              null === (t = this.getVideoElement()) || void 0 === t || t.pause(), yield w(() => this.Ce() === dt.PAUSED, 1e3)();
            } catch (t) {
              if (this.Ce() !== dt.PAUSED) throw t;
            } finally {
              this.ve -= 1;
            }
          });
        }
        play() {
          var t;
          return Ht(this, void 0, void 0, function* () {
            this.ve += 1;
            try {
              yield null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.play(),
                yield w(() => this.Ce() === dt.PLAYING, 1e3)();
            } catch (t) {
              if (this.Ce() !== dt.PLAYING) throw t;
            } finally {
              this.ve -= 1;
            }
          });
        }
      }
      var zt,
        Kt = i(7206),
        Yt = i.n(Kt),
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
      class qt {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.Ie = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : a
          }),
            (this.xe = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = v(t)),
            (this.Ie.userIcon = t),
            $t.setItemsAsync({ userIcon: t }),
            B("new user settings after set user icon: " + JSON.stringify(this.Ie));
        }
        saveUserNickname(t) {
          (this.Ie.userNickname = t),
            $t.setItemsAsync({ userNickname: t }),
            B("new user settings after set user nickname: " + JSON.stringify(this.Ie));
        }
        saveUserSettings(t) {
          return Jt(this, void 0, void 0, function* () {
            const e = v(t.userIcon);
            (this.Ie = t),
              (this.Ie.userIcon = e),
              yield $t.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              B("new user settings after save: " + JSON.stringify(this.Ie));
          });
        }
        get userSettings() {
          return this.Ie;
        }
        get permId() {
          return this.xe;
        }
        get userIcon() {
          return this.Ie.userIcon;
        }
        get userNickname() {
          return this.Ie.userNickname;
        }
      }
      class Xt extends st {
        constructor(t, e, i) {
          super(t, e, ut.SET_TYPING), (this.data = i);
        }
      }
      class Zt extends st {
        constructor(t, e, i) {
          super(t, e, ut.SEND_MESSAGE), (this.data = i);
        }
      }
      class te extends st {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class ee extends st {
        constructor(t, e, i) {
          super(t, e, ut.SEND_REACTION), (this.data = i);
        }
      }
      class ie extends st {
        constructor(t, e, i) {
          super(t, e, ut.SEND_GIF), (this.data = i);
        }
      }
      var ne = new Uint8Array(16);
      function se() {
        if (
          !zt &&
          !(zt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return zt(ne);
      }
      const ue = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const oe = function (t) {
        return "string" == typeof t && ue.test(t);
      };
      for (var re = [], ae = 0; ae < 256; ++ae) re.push((ae + 256).toString(16).substr(1));
      const ce = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            re[t[e + 0]] +
            re[t[e + 1]] +
            re[t[e + 2]] +
            re[t[e + 3]] +
            "-" +
            re[t[e + 4]] +
            re[t[e + 5]] +
            "-" +
            re[t[e + 6]] +
            re[t[e + 7]] +
            "-" +
            re[t[e + 8]] +
            re[t[e + 9]] +
            "-" +
            re[t[e + 10]] +
            re[t[e + 11]] +
            re[t[e + 12]] +
            re[t[e + 13]] +
            re[t[e + 14]] +
            re[t[e + 15]]
          ).toLowerCase();
        if (!oe(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const De = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || se)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return ce(n);
      };
      var he = function (t, e, i, n) {
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
      const de = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? g.includes(t.split("?newIconUrl=")[1]) && l.includes(t.split("?newIconUrl=")[0]) : g.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return p[Math.floor(Math.random() * p.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        Te(t) {
          return he(this, void 0, void 0, function* () {
            try {
              yield $t.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return he(this, void 0, void 0, function* () {
            const t = yield St.getAllItemsAsync(),
              e = de.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.Te(e), e;
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
      Object.freeze(de);
      const le = de;
      var pe;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(pe || (pe = {}));
      var ge = function (t, e, i, n) {
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
      class Fe {
        constructor(t) {
          (this.Se = this.Me.bind(this)),
            (this.Pe = this.resetIdleTimer.bind(this)),
            (this.ot = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.$e(t.data);
            }),
            (this.Re = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.Ge = (t) => {
              this.K.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new _t(X, J, n);
              it.J(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.K.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.K.toggleGIFs();
            }),
            (this.$e = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new _t(X, J, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              it.J(n);
              const s = new _t(X, J, { eventType: `emoji-click-${i}`, sessionId: this.K.getSessionId() });
              it.J(s), z.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.K.focusChat(), this.Le(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.Oe(), this.K.onInputChange();
            }),
            (this.K = t);
        }
        Ve() {
          B("Idle Warning called"), O(R);
          const t = new _t(X, J, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          it.J(t);
          const e = new _t(X, J, { eventType: "idle-warn-2hr", sessionId: this.K.getSessionId() });
          it.J(e), (this.Ue = setTimeout(this.Ne.bind(this), Q));
        }
        Ne() {
          B("Idle kick called");
          const t = new _t(X, J, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new yt(X, J, N);
          it.J(t), it.J(e);
        }
        resetIdleTimer() {
          this.He && clearTimeout(this.He), this.Ue && (V(), clearTimeout(this.Ue)), (this.He = setTimeout(this.Ve.bind(this), k));
        }
        We() {
          (this.He = setTimeout(this.Ve.bind(this), k)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.Pe();
            }),
            (window.onfocus = () => this.Pe()),
            (window.onmousedown = () => this.Pe()),
            (window.ontouchstart = () => this.Pe()),
            (window.onkeydown = () => this.Pe());
        }
        ze() {
          this.He && clearTimeout(this.He),
            this.Ue && clearTimeout(this.Ue),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          B("Listening for chat events"), this.We(), this.Ke(), this.initWindowListeners();
        }
        stopListening() {
          this.Ye(), this.ze(), this.Je();
        }
        Me() {
          this.K.clearUnreadCount();
        }
        qe(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.K.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.Se),
            window.addEventListener("message", this.ot),
            document.addEventListener("dragstart", this.Xe.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.K.onFullScreen),
            document.addEventListener("fullscreenchange", this.K.onFullScreen),
            document.addEventListener("keydown", this.Re, !0),
            document.addEventListener("emoji-click", this.$e),
            document.addEventListener("click", this.Ge);
        }
        Ke() {
          jQuery(window).on("focus", this.Se),
            jQuery("#party-tab").on("click", this.K.togglePartyTab.bind(this.K)),
            jQuery("#friends-tab").on("click", this.K.toggleFriendsTab.bind(this.K)),
            jQuery(".user-icon").on("click", this.K.toggleLargeUserIconButton.bind(this.K)),
            jQuery("#user-icon").on("click", this.K.toggleIconContainer.bind(this.K)),
            jQuery("#link-icon").on("click", this.K.linkIconListener.bind(this.K)),
            jQuery("#reset-icon").on("click", this.K.resetIconListener.bind(this.K)),
            jQuery(".image-button").on("click", this.K.userIconSelectorListener.bind(this.K)),
            jQuery("#chat-input-container").on("keydown", this.K.onChatKeyDown.bind(this.K)),
            jQuery("#nickname-edit").on("keydown", this.K.onChatKeyDown.bind(this.K)),
            jQuery("#chat-input").on("keypress", this.K.onChatKeyPress.bind(this.K)),
            jQuery("#chat-input").on("input", this.K.onInputChange.bind(this.K)),
            jQuery("#gif-search").on("keyup", this.K.onGifSearch.bind(this.K)),
            jQuery("#saveChanges").on("click", this.K.saveChangesListener.bind(this.K)),
            jQuery("#cancelNickname").on("click", this.K.cancelNicknameListener.bind(this.K)),
            jQuery("#chat-wrapper").on("mouseup", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.K.onChatKeyUp.bind(this.K)),
            jQuery("#emoji-picker-btn").on("click", this.K.addEmojiPicker.bind(this.K)),
            jQuery("#gif-btn").on("click", this.K.addGifPicker.bind(this.K)),
            jQuery(".gif-img").on("click", this.K.clickGif.bind(this.K)),
            jQuery(".gif-results").on("click", "video, img", this.K.clickGif.bind(this.K)),
            jQuery("#category-container").on("click", "video", this.K.clickGif.bind(this.K)),
            jQuery("#gif-input-back").on("click", this.K.resetGif.bind(this.K)),
            jQuery("#reaction-btn").on("click", this.K.addReactionTab.bind(this.K)),
            jQuery("#chat-input-container").on("click", this.Ze.bind(this)),
            jQuery("#chat-input").on("input", this.Oe.bind(this)),
            jQuery("#chat-input").on("drop", this.ti.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.K.onScrollToBottom.bind(this.K)),
            this.ei(),
            document.addEventListener("keydown", this.Re.bind(this), !0),
            this.K.initCustomListeners();
        }
        ei() {
          jQuery("#tp-heart-button").on("click", () => {
            this.K.onReactionClicked(pe.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.K.onReactionClicked(pe.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.K.onReactionClicked(pe.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.K.onReactionClicked(pe.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.K.onReactionClicked(pe.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.K.onReactionClicked(pe.FIRE);
            });
        }
        Oe() {
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
        ti(t) {
          t.preventDefault();
        }
        Xe(t) {
          t.preventDefault();
        }
        Ze(t) {
          t.target === jQuery("#chat-input")[0] && this.K.focusChat();
        }
        Le(t) {
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
        ii(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        ni(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.ii(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return ge(this, void 0, void 0, function* () {
            const i = yield St.getItemsAsync([c]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : h;
            this.ni(n) || (n = h),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield $t.setItemsAsync({ [c]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        Je() {
          jQuery(window).off("focus", this.Se),
            document.removeEventListener("emoji-click", this.$e),
            document.removeEventListener("keydown", this.Re, !0),
            document.removeEventListener("click", this.Ge),
            window.removeEventListener("message", this.ot),
            document.removeEventListener("webkitfullscreenchange", this.K.onFullScreen),
            document.removeEventListener("fullscreenchange", this.K.onFullScreen);
        }
        Ye() {
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
      class ve {
        constructor(t) {
          (this.K = t),
            (this.si = []),
            (this.ui = 0),
            (this.oi = document.title),
            (this.ri = 0),
            (this.ai = new Map()),
            (this.ci = new Map()),
            (this.Di = []),
            (this.hi = []),
            (this.di = ""),
            B("Message Controller");
        }
        li(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${v(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${v(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        pi(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.K.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${v(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${v(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${v(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        gi(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${v(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${v(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Fi(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.K.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${v(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${v(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${v(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        vi(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.xe = e.permId), (u.yi = i), (u.mi = n), (u.fi = e), (u.Ci = s);
        }
        reloadMessages() {
          this.K.queueMessageForFrame(at.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.si));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.si = t;
        }
        Ei(t, e) {
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
            (void 0 === i && (i = this.si.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.ai.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.si.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Ei(n, t);
          this.si.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.K.queueMessageForFrame(at.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.gi(o, u, s) : this.li(o, r, u, s);
          this.vi(a, u, o, r, s), this.scrollToBottom(), this.wi();
        }
        addGif(t, e) {
          void 0 === e && (e = this.si.length);
          const i = this.si.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Ei(i, t);
          this.si.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.K.queueMessageForFrame(at.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Fi(s, t, n) : this.pi(s, u, t, n);
          (o[0]._i = !0), this.vi(o, t, s, u, n), E(100)().then(this.scrollToBottom.bind(this)), this.wi();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.ui > 0 && ((this.ui = 0), (document.title = this.oi));
        }
        wi() {
          (this.ui += 1), (this.ri += 1), document.hasFocus() || (document.title = "(" + String(this.ui) + ") " + this.oi);
        }
        getUserIconURL(t, e = "") {
          if (!this.ai.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.bi();
            this.ai.set(t, n), this.hi.push(n);
          }
          return this.ai.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return g.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : l.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.ci.has(t) || (this.ci.set(t, e), this.Di.push(e)), v(this.ci.get(t));
        }
        bi() {
          let t = chrome.runtime.getURL("img/icons/General/" + l[Math.floor(Math.random() * l.length)]);
          if (this.hi.length < F.General.length)
            for (; this.hi.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + l[Math.floor(Math.random() * l.length)]);
          return t;
        }
        ji(t) {
          const e = t[0],
            i = e.xe;
          let n = e.yi;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.yi = n));
          const s = e.mi;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.fi,
                o = e.Ci;
              let r;
              if (
                (e._i && s && "gifObject" in s && o && (r = "" == u ? this.Fi(n, s, o) : this.pi(n, u, s, o)),
                !e._i && s && "isSystemMessage" in s && o && (r = "" == u ? this.gi(n, s, o) : this.li(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.xe = i), (e.yi = n), (e.mi = u), (e.fi = s), (e.Ci = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.di = t), this.K.queueMessageForFrame(at.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.di), jQuery(".user-icon img").attr("src", this.di);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.ji(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.ji(jQuery(e[t]));
          this.K.isChatFrameActive() && this.reloadMessages();
        }
        Bi(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              g.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : l.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              g.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : l.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = F.General.filter((t) => !this.hi.includes(t));
            0 === t.length && (t = F.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Bi(e);
          this.ai.set(t, i), this.hi.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = v(e);
          this.ci.set(t, i), this.Di.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Bi(e);
          this.ai.set(t, n), this.hi.push(n), this.ci.set(t, i), this.Di.push(i), this.renderSidebar();
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
          const t = new _t(X, J, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          it.J(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.K.getSessionId() },
            i = new _t(X, J, e);
          it.J(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new _t(X, J, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              it.J(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.K.getSessionId() },
                i = new _t(X, J, e);
              it.J(i);
            });
        }
      }
      class ye {
        constructor(t) {
          (this.Ai = !1), (this.ki = !1), (this.Bt = !1), (this.K = t);
        }
        setupPresenceIndicator() {
          (this.Ai = !1), (this.ki = !1), (this.Bt = !1), this.Qi();
        }
        Ii() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Ai = t), this.Qi();
        }
        setBufferingPresenceVisible(t) {
          (this.ki = t), this.Qi();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Bt = t), this.Qi();
        }
        getWatchingAdsVisible() {
          return this.Bt;
        }
        xi() {
          return this.Bt
            ? "People are watching ads..."
            : this.Ai && this.ki
            ? "People are typing and buffering..."
            : this.Ai
            ? "People are typing..."
            : this.ki
            ? "People are buffering..."
            : "";
        }
        Qi() {
          const t = this.xi();
          this.Ii().text(t), this.K.queueMessageForFrame(at.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var me = function (t, e, i, n) {
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
          (this.Ti = !1),
            (this.Si = 1),
            (this.Mi = ""),
            (this.ne = ""),
            (this.Pi = "0"),
            (this.$i = ""),
            (this.Ri = !0),
            (this.Gi = !1),
            (this.Li = 0),
            (this.Oi = []),
            (this.Vi = new W()),
            (this.Ui = !1),
            (this.Ni = void 0),
            (this.Hi = !0),
            (this.Wi = this.zi()),
            (this.Ki = this.zi()),
            (this.Yi = !1),
            (this.Ji = !1),
            (this.qi = []),
            (this.logEvent = (t) => {
              const e = new _t(X, J, t);
              it.J(e);
            }),
            (this.checkInitReactionContainer = () => {
              St.getItemsAsync([e]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.st) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.Vi.pushTask(() => $t.setItemsAsync({ [e]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.st) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.Xi = !1),
            (this.Zi = new Fe(this)),
            (this.tn = new ye(this)),
            (this.en = new ve(this)),
            (this.nn = void 0),
            (this.sn = void 0),
            (this.un = !1);
        }
        setPageControls(t) {
          this.st = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.st) || void 0 === t || t.enablePartyIcons(), null === (e = this.st) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return me(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.Ri = t), t && !this.on() && this.reloadChat();
          });
        }
        re(t, e) {
          const i = new _t(X, J, { name: "error", action: { reason: e, description: t } });
          it.J(i);
        }
        getChatWindowVisible() {
          return this.Ki;
        }
        setChatWindowActive(t) {
          this.Wi = t;
        }
        isChatFrameActive() {
          return this.Hi;
        }
        isPartyWindowsActive() {
          return this.Wi;
        }
        shouldChatBeVisible() {
          return this.Ri;
        }
        incrementEmojiCount() {
          this.Li++;
        }
        resetEmojiCount() {
          this.Li = 0;
        }
        getEmojiCount() {
          return this.Li;
        }
        setChatFrameReady(t) {
          this.Ui && this.rn(), (this.Ui = !0), (this.an = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              this.cn(t, e);
            })
          );
        }
        cn(t, e) {
          return me(this, void 0, void 0, function* () {
            const i = this.an,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: X };
            it.J(n);
          });
        }
        Dn() {
          var t;
          return me(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield w(() => this.Ui && null != this.an, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Ni && this.hn(this.Ni),
                null === (t = this.st) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.re("Sidewindow didn't load in time", t);
            }
          });
        }
        zi() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        dn() {
          return me(this, void 0, void 0, function* () {
            yield it.J(new vt(X, J, ot.LOAD_CHAT_WINDOW)), console.log(this.an);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return me(this, void 0, void 0, function* () {
            yield it.J(new vt(X, J, ot.RESET_CHAT_WINDOW)),
              console.log(this.an),
              (this.Ki = !0),
              (this.Ri = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.Yi && t && (this.resetIconListener(), null === (e = this.st) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return me(this, void 0, void 0, function* () {
            yield it.J(new vt(X, J, ot.HIDE_CHAT_WINDOW)), (this.Ki = !1), (this.Ri = !1);
          });
        }
        ln() {
          return me(this, void 0, void 0, function* () {
            this.dn(), this.Vi.pushTask(this.Dn.bind(this));
          });
        }
        loadInitData(t) {
          this.Ni = t;
        }
        hn(t) {
          var e;
          return me(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = F), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield le.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(at.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(at.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(at.SET_USER_LIST, this.qi),
              this.queueMessageForFrame(at.UPDATE_SETTINGS, {
                userSettings: null === (e = this.pn) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        rn() {
          return me(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Ni && (yield this.hn(this.Ni)), this.pn)) {
              const t = this.en.getUserIconURL(this.pn.permId, this.pn.userIcon);
              this.queueMessageForFrame(at.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(at.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        gn() {
          return me(this, void 0, void 0, function* () {
            this.Fn(),
              yield E(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.vn(),
              this.tn.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        vt(t) {
          this.Zi.initWindowListeners(), this.zi() && this.ln(), this.Vi.pushTask(this.Dn.bind(this)), V(), (this.pn = new qt(t));
          const e = this.en.getUserIconURL(this.pn.permId, this.pn.userIcon);
          this.en.setUserIconUrl(e),
            this.en.renderSidebar(),
            this.on() && this.removeChat(),
            (this.Xi = !0),
            this.yn(),
            this.zi()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.gn(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return me(this, void 0, void 0, function* () {
            "true" !== (yield St.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.en.addYoutubePromo(), $t.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Ni = t;
          const e = Object.assign({}, t);
          (e.iconMap = F),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(at.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return me(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.on() ||
                this.isPartyWindowsActive() ||
                (this.Fn(),
                yield E(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.Ri),
                this.addIconSelector(),
                this.mn(),
                this.vn(),
                this.tn.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new yt(X, J, t);
          it.J(e);
        }
        on() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.en.clearUnreadCount();
        }
        Cn() {
          return me(this, void 0, void 0, function* () {
            try {
              yield w(() => null !== document.querySelector("#chat-history") || this.Wi || (this.Ui && this.Hi), 1e4)();
            } catch (t) {
              this.re("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Cn(), this.en.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Cn(), this.en.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.en.reloadMessages();
        }
        scrollToBottom() {
          this.en.scrollToBottom();
        }
        addReviewMessage() {
          this.en.addReviewMessage(), (this.un = !0);
        }
        get showingReveiwMessage() {
          return this.un;
        }
        set shouldReturnToVideo(t) {
          this.Yi = t;
        }
        onBufferingMessage(t) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Cn(), this.tn.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Cn(), this.tn.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.Vi.pushTask(() =>
            me(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Cn(), this.tn.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.tn.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.pn) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.En(this.wn(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.en.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.pn)) {
            const t = this.en.getUserIconURL(this.pn.permId, this.pn.userIcon);
            this.en.setUserIconUrl(t), this.en.renderSidebar();
          }
        }
        vn() {
          w(() => this.on(), 1e4)().then(() => {
            this.Zi.startListening();
          });
        }
        mn() {
          this.Zi.stopListening(), this._n && (clearTimeout(this._n), (this.Gi = !1));
        }
        teardown() {
          (this.Xi = !1),
            (this.ne = void 0),
            (this.bn = void 0),
            this.mn(),
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
            this.Vi.pushTask(() => $t.setItemsAsync({ [e]: !1 }));
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.en.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(at.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new _t(X, J, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          it.J(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new _t(X, J, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          it.J(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new _t(X, J, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          it.J(e), this.toggleReactions();
        }
        yn() {
          if (
            (B("Set Chat Html called"),
            (this.jn = Yt()),
            (this.jn = this.jn.replace(/{EXTENSION_LOGO}/g, v(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.pn)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.jn = this.jn.replace(/{CHAT_URL}/g, `${o}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of r) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.jn = this.jn.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.jn = this.jn.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.jn = this.jn.replace(/{USER_NICKNAME}/g, this.pn.userNickname ? v(this.pn.userNickname) : "Add a nickname")),
            (this.jn = this.jn.replace(/{USER_ICON}/g, this.en.getUserIconURL(this.pn.permId, this.pn.userIcon))),
            (this.jn = this.jn.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.jn = this.jn.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.jn = this.jn.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.jn = this.jn.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.jn = this.jn.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.jn = this.jn.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.jn = this.jn.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.jn = this.jn.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.jn = this.jn.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.Ji ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.Gi && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.pn) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.pn) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.Ji = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.Ji = !1);
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
          this.Mi = t;
        }
        setMessageForwarder(t) {
          this.C = t;
        }
        setSessionId(t) {
          this.ne = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(at.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(at.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.en.getUserIconURL(t.permId, e.userIcon),
                n = this.en.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.qi = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(at.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.bn = t;
        }
        getSessionCreated() {
          return this.bn;
        }
        getSessionId() {
          return this.ne;
        }
        getPartyUrl() {
          return this.Mi;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (B("userIconSelector button clicked: " + e),
            this.pn &&
              (this.pn.saveUserIcon(e),
              this.queueMessageForFrame(at.UPDATE_SETTINGS, { userSettings: this.pn.userSettings }),
              this.En(this.wn(this.pn.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        En(t, e) {
          it.J(t).then(e);
        }
        Bn(t) {
          return new ee(X, J, { reactionType: t });
        }
        An(t) {
          return new ie(X, J, { gifObject: t });
        }
        kn(t) {
          return new Zt(X, J, { body: t });
        }
        Qn(t) {
          return new Xt(X, J, { typing: t });
        }
        wn(t) {
          return new te(X, J, { userSettings: t });
        }
        In(t) {
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
              u = this.In(e),
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
          console.log(t), this.En(this.Bn(t));
          const e = new _t(X, J, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          it.J(e);
          const i = new _t(X, J, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          it.J(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.Zi.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.re("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.Oi.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.En(this.An(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new _t(X, J, e);
              it.J(i);
              const n = new _t(X, J, { eventType: "gif-share", sessionId: this.getSessionId() });
              it.J(n);
            }),
              this.toggleGIFs();
          }
        }
        xn(t) {
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
        Tn(t) {
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
            this.Oi.push(...t.results),
            (this.Pi = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.xn(t) : this.Tn(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Si < 6 && this.Sn(),
            setTimeout(() => {
              this.Ti = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return me(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Ti) t.preventDefault();
            else if ("0" !== this.Pi && e && this.Si < 6) {
              (this.Si += 1), (this.Ti = !0), t.preventDefault();
              const e = yield fetch(this.$i + `&pos=${this.Pi}`),
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
        Mn() {
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
        Sn() {
          return me(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.Mn()), jQuery("#gif-results-right")[0].append(...this.Mn());
          });
        }
        logShare(t, e) {
          return me(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              s = i ? `&locale=${i}` : "",
              u = `&id=${t}`,
              o = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${n}/register-share?${o}${s}${u}`);
          });
        }
        fetchGIFs(t) {
          return me(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Si = 1),
              (this.Ti = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.Oi = []),
              this.Sn();
            const s = this.getClientLocale(),
              u = s ? `&locale=${s}` : "";
            let o = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (o = t ? `search-gifs?q=${t}` : o), (this.$i = `${n}/${o}${u}`);
            const r = yield fetch(`${n}/${o}${u}`),
              a = yield r.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${n}/trending_gifs?${u}`);
              this.$i = `${n}/trending_gifs?${u}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.sn && clearTimeout(this.sn), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.sn = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        Pn(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.nn ? this.En(this.Qn(!0)) : clearTimeout(this.nn),
              (this.nn = setTimeout(() => {
                (this.nn = void 0), this.En(this.Qn(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Pn(i)) {
              void 0 !== this.nn && (clearTimeout(this.nn), (this.nn = void 0), this.En(this.Qn(!1))),
                e.prop("contenteditable", !1),
                this.En(this.kn(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return De();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new _t(X, J, t);
              it.J(n);
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
          B("saveChanges button clicked: " + e),
            e !== (null === (t = this.pn) || void 0 === t ? void 0 : t.userNickname) &&
              this.pn &&
              (this.pn.saveUserNickname(e),
              this.queueMessageForFrame(at.UPDATE_SETTINGS, { userSettings: this.pn.userSettings }),
              this.En(this.wn(this.pn.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.Xi;
        }
        addIconSelector() {
          Object.keys(F).forEach((t) => {
            if (y[t]()) {
              const e = F[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.$n(`${t}/${n}`, i, n);
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
        $n(t, e, i) {
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
            (this.Rn =
              "\n          .chat-wrapper-short {\n            height: calc(100% - 126px) !important;\n            position: absolute !important;\n          }\n\n          .tp-left-align {\n            align-items: flex-start !important;\n          }\n        "),
            (this.m = t);
        }
        shouldShowReaction() {
          return !this.m.isWatchingAd();
        }
        shouldUseVideoGIF() {
          return !0;
        }
        getReactionContainer() {
          return jQuery('[data-testid="playerContainer"]');
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return fe(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery("#chat-wrapper").show(), jQuery("video").addClass(P), jQuery("#overlay-root").addClass(P))
              : (jQuery("#chat-wrapper").hide(), jQuery("video").removeClass(P), jQuery("#overlay-root").removeClass(P));
          });
        }
        getVideoTitle() {
          var t;
          return fe(this, void 0, void 0, function* () {
            const e = document.querySelector('[data-testid="player-ux-asset-title"]');
            if (e) return null !== (t = e.innerHTML) && void 0 !== t ? t : void 0;
          });
        }
        shouldAddReactionSpace() {
          return !0;
        }
        Fn() {
          this.jn &&
            jQuery("video")
              .parent()
              .append(
                (function (t, e = "") {
                  return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/chat.css"
                  )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
                })(this.jn, this.Rn)
              );
        }
      }
      Ce.MAIN_WRAPPER_SELECTOR = "#layer-root-player-screen";
      var Ee = i(4296),
        we = i.n(Ee);
      class _e extends nt {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class be extends _e {
        constructor(t, e, i) {
          super(t, e, tt.CREATE_SESSION), (this.data = i);
        }
      }
      const je = new (class extends I {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", x.NETFLIX, !1);
      Object.freeze(je);
      const Be = je;
      const Ae = new (class extends I {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", x.HULU, !1);
      Object.freeze(Ae);
      const ke = Ae;
      const Qe = new (class extends I {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", x.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(Qe);
      const Ie = Qe;
      const xe = new (class extends I {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== C(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + C(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return C(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", x.HBO_MAX, !1);
      Object.freeze(xe);
      const Te = xe;
      const Se = new (class extends I {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", x.AMAZON, !1);
      Object.freeze(Se);
      const Me = Se;
      const Pe = new (class extends I {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", x.CRUNCHYROLL, !1);
      Object.freeze(Pe);
      const $e = Pe;
      const Re = new (class extends I {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", x.YOUTUBE, !1);
      Object.freeze(Re);
      const Ge = Re;
      const Le = new (class extends I {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", x.ESPN, !1);
      Object.freeze(Le);
      const Oe = Le;
      const Ve = new (class extends I {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", x.PARAMOUNT, !1);
      Object.freeze(Ve);
      const Ue = Ve;
      const Ne = new (class extends I {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", x.HOTSTAR, !1);
      Object.freeze(Ne);
      const He = Ne;
      const We = new (class extends I {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", x.PEACOCK, !1);
      Object.freeze(We);
      const ze = We;
      const Ke = new (class extends I {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", x.FUNIMATION, !1);
      Object.freeze(Ke);
      const Ye = Ke;
      const Je = new (class extends I {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", x.STAR_PLUS, !1);
      Object.freeze(Je);
      const qe = Je;
      const Xe = new (class extends I {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", x.PLUTO_TV, !1);
      Object.freeze(Xe);
      const Ze = Xe;
      const ti = new (class extends I {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", x.APPLE_TV, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends I {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", x.JIO_CINEMA, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends I {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", x.TUBI_TV, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends I {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", x.CRAVE, !1);
      Object.freeze(oi);
      const ri = oi;
      const ai = new (class extends I {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", x.MUBI, !1);
      Object.freeze(ai);
      const ci = ai;
      const Di = new (class extends I {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", x.STAN, !1);
      Object.freeze(Di);
      const hi = Di;
      const di = new (class extends I {
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
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", x.SLING, !1);
      Object.freeze(di);
      const li = di;
      const pi = new (class extends I {
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
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", x.DISNEY_PLUS_MENA, !1);
      Object.freeze(pi);
      const gi = pi;
      class Fi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [ei],
            n = [Be, ke, Ie, Te, Me, Ge, $e, Oe, Ue, He, ze, qe, S, Ye, ei, Ze, ni, ui, ci, hi, ri, li, gi];
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
      class vi extends _e {
        constructor(t, e, i) {
          super(t, e, tt.RE_INJECT), (this.data = i);
        }
      }
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
      var mi,
        fi = function (t, e, i, n) {
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
      class Ci extends class {
        constructor(t) {
          var e, i, n;
          (this.Gn = !1),
            (this.Ln = !1),
            (this.On = !1),
            (this.Vn = 0),
            (this.Un = !1),
            (this.Nn = !1),
            (this.Hn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Wn() : this.zn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Kn = new Fi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Yn = t),
            this.Yn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Yn = t), this.Yn.setPageControls(this);
        }
        Jn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.On ? "Only I have control" : "Everyone has control"),
            this.On
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        qn() {
          this.Ln || ((this.On = !this.On), this.Jn());
        }
        setResetChatButton() {
          this.Yn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Yn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        Xn() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Yn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.Vn} unread ${1 == this.Vn ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Yn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Yn.shouldChatBeVisible() ||
            this.Yn.isPartyWindowsActive() ||
            (this.Vn++,
            this.Xn(),
            (this.Un = !0),
            this.Wn(),
            E(1e3)().then(() => {
              this.Un = !1;
            }));
        }
        teardown() {
          this.Zn(), this.zn(), this.ts && clearInterval(this.ts);
        }
        es() {
          var t;
          return yi(this, void 0, void 0, function* () {
            if (this.Ln || this.Yn.inSession) return;
            if ((this.ns(), (this.Ln = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new vi(Z, J, { extensionTabData: this.Kn });
              try {
                yield it.J(t);
              } catch (t) {
                return console.log(t), this.ss(), this.re(t), this.us(It), void (this.Ln = !1);
              }
            }
            console.log("Sending create");
            const e = this.os();
            try {
              const t = yield it.J(e);
              t.error ? (this.us(t.error.message), this.re(t.error.message)) : ((this.Ln = !1), this.rs(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.us(It), this.re(t);
            }
            this.ss(), (this.Ln = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        Zn() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        re(t) {
          const e = new _t(q, J, { name: "error", action: { description: "an error has occured", reason: t } });
          it.J(e);
        }
        us(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        cs(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, v(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, v(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, v(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, v(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, v(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, v(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, v(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, v(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, v(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, v(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, v(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, v(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, v(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        zn() {
          this.Un || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Wn() {
          return yi(this, void 0, void 0, function* () {
            if (!this.Nn && (this.Hn || this.Yn.inSession)) {
              this.Nn = !0;
              try {
                yield this.addTpIcon(),
                  this.Yn.inSession ? this.enablePartyIcons() : this.Zn(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Nn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.ts = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.ts && clearInterval(this.ts);
        }
        Ds() {
          return "100px";
        }
        addTpIcon() {
          return yi(this, void 0, void 0, function* () {
            if ((this.Hn || this.Yn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.cs(we()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.hs());
            }
          });
        }
        hs() {
          jQuery("#tp-control-lock-button").click(this.qn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.Ds()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.Ds()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.Ds()}`),
            jQuery("#tp-link-button").click(this.ds.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.ls(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.ps();
            });
        }
        ps() {
          const t = new yt(Z, J, U);
          it.J(t), this.zn();
        }
        ds() {
          this.Yn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        ls() {
          return yi(this, void 0, void 0, function* () {
            (this.Vn = 0),
              this.hideMessageIndicator(),
              this.Yn.isPartyWindowsActive()
                ? this.Yn.resetChatWindow(!0)
                : (this.Yn.shouldChatBeVisible(), yield this.Yn.setChatVisible(!this.Yn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Gn && this.Wn();
        }
        setChatButtons() {
          this.Yn.inSession && this.Yn.getChatVisible() ? this.rs() : this.gs(),
            this.Yn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        rs() {
          return yi(this, void 0, void 0, function* () {
            this.Yn.inSession &&
              this.Yn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        gs() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        os() {
          return new be(Z, J, this.Fs());
        }
        Fs() {
          return { createSettings: { controlLock: this.On }, streamingService: this.Kn.streamingService, tabId: this.Kn.id, source: "pc" };
        }
        ns() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        ss() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        getControlsRoot() {
          return fi(this, void 0, void 0, function* () {
            return jQuery("video").parent();
          });
        }
        shouldMenuBeVisible() {
          return "hidden" !== document.querySelector('[data-testid="playback_controls"]').style.visibility;
        }
        getControlsHeight() {
          return "100px";
        }
      }
      class Ei extends class {
        constructor(t, e, i, n) {
          (this.K = t),
            (this.m = e),
            (this.Ht = i),
            (this.st = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.K), console.log("Resetting Chat Api for old controls")),
            (this.vs = new gt(this.K, this.st)),
            (this.C = new Vt(this.m, this.K, this.Ht)),
            (this.ys = !1),
            (this.fs = !1),
            (this.un = !1),
            (this.X = new Dt()),
            this.X.addMessageListener(this.C),
            this.X.addMessageListener(this.vs),
            this.X.addMessageListener(this),
            (this.Cs = !1),
            this.Es();
        }
        ws() {
          return Ut(this, void 0, void 0, function* () {
            yield this.st.addTpIcon(), this.st.startEventListener();
          });
        }
        loadBrowseButton() {
          return Ut(this, void 0, void 0, function* () {
            yield this.st.addTpIcon(), this.st.startEventListener();
          });
        }
        Es() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.K.inSession, alertModal: L };
            this._s(t);
          }),
            t.onMessage.addListener(() => {
              B("Got background script"), (this.Cs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == X) {
            if (t.type === tt.IS_CONTENT_SCRIPT_READY) {
              if (this.ys) {
                i({ ready: !0 });
              } else (this.fs = !0), this.bs().then(i);
              return !0;
            }
            if (t.type === tt.GET_INIT_DATA) {
              return i(this.js()), !0;
            }
            if (t.type === tt.DISCONNECT && t.sender == q) {
              const t = new yt(X, J, U);
              it.J(t), i();
            } else {
              if (t.type == ot.TEARDOWN) {
                const e = t;
                return this._s(e.data), i(), !0;
              }
              t.type === ot.ON_NOTIF && this.Bs();
            }
          }
          return !1;
        }
        Bs() {
          console.log("Show Notification");
        }
        _s(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.K.getPartyUrl();
            O(t.alertModal, i);
          }
          this.st.teardown(), this.C.teardown(), this.vs.teardown(), this.X.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new _t(X, J, s);
          it.J(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        re(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new _t(X, J, { name: "error", action: { reason: t } });
          it.J(e);
        }
        As() {
          return Ut(this, void 0, void 0, function* () {
            return w(() => this.Cs, 5e3)();
          });
        }
        bs() {
          return Ut(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.As();
              const t = yield this.ks();
              return this.ws(), t;
            } catch (t) {
              const e = { message: Qt, showButton: !1 };
              return this.re(Qt), { ready: !1, error: e };
            } finally {
              this.fs = !1;
            }
          });
        }
        ks() {
          return Ut(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.m.waitVideoApiReadyAsync();
              const e = yield this.Qs();
              e && e.error
                ? (B("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.ys = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.un = !0),
                  (this.ys = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.re(e.message);
            }
            return { ready: this.ys, error: t };
          });
        }
        js() {
          return {
            inSession: this.K.inSession,
            isChatVisible: this.K.isPartyWindowsActive() ? this.K.getChatWindowVisible() : this.K.getChatVisible(),
            partyUrl: this.K.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.K.isPartyWindowsActive()
          };
        }
        Qs() {
          return Ut(this, void 0, void 0, function* () {
            const t = yield this.Is();
            return it.J(t);
          });
        }
        Is() {
          return Ut(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.m.getVideoDataAsync()).videoId };
            return new ct(X, J, t);
          });
        }
      } {
        constructor() {
          const t = new Wt(),
            e = new Ce(t),
            i = new Y(t, e);
          let n;
          window.teleparty && window.teleparty.pageControls
            ? ((n = window.teleparty.pageControls), console.log("Using existing page controls"))
            : (n = new Ci(e)),
            super(e, t, i, n);
        }
      }
      (window.teleparty && (null === (mi = window.teleparty) || void 0 === mi ? void 0 : mi.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new Ei(),
        B("Initialized content script"));
    })();
})();
