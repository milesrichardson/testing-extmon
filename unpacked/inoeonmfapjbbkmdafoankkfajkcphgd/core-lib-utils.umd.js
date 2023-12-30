/*!************************************************************************
 **
 ** Copyright (c) 2022-2023 Don Johnston, Inc. All rights reserved.
 **
 **************************************************************************/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).__DjiCoreLibUtils = {}));
})(this, function (e) {
  "use strict";
  const t = { paragraphSeparator: {}, sentenceSeparator: {}, wordSeparator: {}, whiteSpace: {}, invisibleWhiteSpace: {} };
  (t.paragraphSeparator.characterIsMember = function (e) {
    return "\r" === e || "\n" === e;
  }),
    (t.sentenceSeparator.characterIsMember = function (e) {
      return "." === e || "!" === e || "?" === e || "\r" === e || "\n" === e;
    }),
    (t.wordSeparator.characterIsMember = function (e) {
      if (1 !== e.length) return !1;
      const t = e.charCodeAt(0);
      switch (t) {
        case 160:
        case 451:
        case 8220:
        case 8221:
          return !0;
        default:
          if (10 !== t && 13 !== t && t >= 0 && t <= 31) return !0;
      }
      return (
        " " === e ||
        "\t" === e ||
        "@" === e ||
        "#" === e ||
        "$" === e ||
        "%" === e ||
        "^" === e ||
        "&" === e ||
        "*" === e ||
        "(" === e ||
        ")" === e ||
        "-" === e ||
        "+" === e ||
        "=" === e ||
        "{" === e ||
        "[" === e ||
        "]" === e ||
        "}" === e ||
        "|" === e ||
        "\\" === e ||
        "~" === e ||
        "<" === e ||
        ">" === e ||
        "/" === e ||
        "," === e ||
        ";" === e ||
        ":" === e ||
        "." === e ||
        "!" === e ||
        "?" === e ||
        "\r" === e ||
        "\n" === e
      );
    }),
    (t.wordSeparator.characterIsMemberNoHypen = function (e) {
      return t.wordSeparator.characterIsMember(e) && "-" !== e && 8211 !== e.charCodeAt(0);
    }),
    (t.whiteSpace.characterIsMember = function (e) {
      if (1 !== e.length) return !1;
      const t = e.charCodeAt(0);
      return 160 === t || (8 !== t && 10 !== t && 13 !== t && t >= 0 && t <= 31) || " " === e || "\t" === e || "\r" === e || "\n" === e;
    }),
    (t.whiteSpace.whiteSpaces = function () {
      return /[ \t@#$%^&*()-+={}~[\]|<>,;:.!?\r\n/\\]+/;
    }),
    (t.invisibleWhiteSpace.characterIsMember = function (e) {
      if (1 !== e.length) return !1;
      switch (e.charCodeAt(0)) {
        case 8203:
        case 8204:
          return !0;
      }
      return !1;
    }),
    Object.freeze(t);
  const n = {};
  let o = 0;
  const r = [],
    i = () => {};
  function s() {
    (n.todo = o <= n.levels.TODO ? console.warn.bind(console) : i),
      (n.log = o <= n.levels.LOG ? console.log.bind(console) : i),
      (n.debug = o <= n.levels.DEBUG ? console.debug.bind(console) : i),
      (n.info = o <= n.levels.INFO ? console.info.bind(console) : i),
      (n.warn = o <= n.levels.WARNING ? console.warn.bind(console) : i),
      (n.warning = o <= n.levels.WARNING ? console.warn.bind(console) : i),
      (n.error = o <= n.levels.ERROR ? console.error.bind(console) : i),
      (n.group = o <= n.levels.ERROR ? console.group.bind(console) : i),
      (n.groupCollapsed = o <= n.levels.ERROR ? console.groupCollapsed.bind(console) : i),
      (n.groupEnd = o <= n.levels.ERROR ? console.groupEnd.bind(console) : i);
  }
  function a(e) {
    if (e.__proto__ === Object.prototype) {
      (e = { ...e }).access_token && (e.access_token = "***");
      const t = Object.keys(e),
        n = t.length;
      for (let o = 0; o < n; o += 1) {
        const n = t[o];
        try {
          e[n] instanceof Object && e[n].__proto__ === Object.prototype && (e[n] = a(e[n]));
        } catch (e) {}
      }
    }
    return e;
  }
  (n.levels = { TODO: 0, LOG: 10, DEBUG: 11, INFO: 12, WARNING: 13, ERROR: 14, NONE: 100 }),
    (n.dump = console.warn.bind(console)),
    s(),
    (n.trace = console.trace.bind(console)),
    (n.logLevel = function (e) {
      return null == e || ((o = e), s()), o;
    }),
    (n.monitor = function (...e) {
      e = e.map((e) => a(e));
      const t = new Date(),
        n = { timestamp: t.getTime(), date: t.toISOString(), event: void 0, reason: void 0, error: void 0, details: e };
      if (
        e.length > 0 &&
        e[0].__proto__ === Object.prototype &&
        (e[0].event && ((n.event = e[0].event), delete e[0].event),
        e[0].reason && ((n.reason = e[0].reason), delete e[0].reason),
        e[0].error instanceof Error)
      ) {
        const { error: t } = e[0];
        e[0].error = { code: t.code, message: t.message, stack: t.stack };
      }
      r.push(n), r.length > 2e3 && r.splice(0, r.length - 2e3);
    }),
    (n.dump = function () {
      return r.map((e) => JSON.stringify(e)).join("\n");
    });
  const c = { IFRAME: "IFRAME", FRAME: "FRAME", IFRAME_AND_FRAME: "IFRAME, FRAME", INTERACTIVE: "interactive", COMPLETE: "complete" },
    l = { IFRAMES_CHANGED: "dji.iframesChanged", IFRAME_LOADED: "dji.iframeLoaded" },
    u = { childList: !0, subtree: !0 };
  let d = null;
  const f = new EventTarget();
  function h(e, t) {
    let o = -1;
    if (!e || e.length <= 0) return [];
    o = (e = e instanceof Array ? [...e] : [e]).length;
    for (let t = 0; t < e.length; t += 1) {
      const o = e[t];
      if (o.nodeType !== Node.ELEMENT_NODE) throw new Error("Invalid parameters (HTMLElement expected)!");
      try {
        const t = o.tagName === c.IFRAME || o.tagName === c.FRAME ? o.contentDocument : o;
        if (t) {
          const n = t.querySelectorAll(c.IFRAME_AND_FRAME);
          n.length > 0 && e.push(...n);
        }
      } catch (e) {
        n.error(e);
      }
    }
    return (
      t ? (e = e.filter((e) => e.nodeType === Node.ELEMENT_NODE && (e.tagName === c.IFRAME || e.tagName === c.FRAME))) : e.splice(0, o),
      [...new Set(e)]
    );
  }
  function m(e, t) {
    let n = [];
    const o = e.length;
    for (let r = 0; r < o; r += 1) {
      const o = e[r][t],
        i = o.length;
      for (let e = 0; e < i; e += 1) {
        const t = o[e];
        if (t.nodeType === Node.ELEMENT_NODE) {
          const e = t.nodeName.toUpperCase();
          e === c.IFRAME || e === c.FRAME ? n.push(t) : n.push(...t.querySelectorAll(c.IFRAME_AND_FRAME));
        }
      }
    }
    return (n = h(n, !0)), n;
  }
  function p(e, t) {
    ((e && e.length > 0) || (t && t.length > 0)) &&
      f.dispatchEvent(
        (function (e, t) {
          const n = new Event(l.IFRAMES_CHANGED);
          return (n.addedIframes = e || []), (n.removedIframes = t || []), n;
        })(e, t)
      );
  }
  function g(e) {
    const t = e.length;
    for (let n = 0; n < t; n += 1) y(e[n]);
  }
  function _() {
    if (
      ((e = this),
      f.dispatchEvent(
        (function (e) {
          const t = new Event(l.IFRAME_LOADED);
          return (t.iframe = e), t;
        })(e)
      ),
      this.contentDocument)
    ) {
      const e = h(this);
      p(e), d.observe(this.contentDocument, u), g(e);
    }
    var e;
  }
  function y(e) {
    e.removeEventListener("load", _), e.addEventListener("load", _);
    try {
      e.contentDocument && e.contentDocument.readyState === c.COMPLETE && _.call(e);
    } catch (e) {
      n.error(e);
    }
  }
  function E(e) {
    const t = m(e, "addedNodes");
    p(t, m(e, "removedNodes")), g(t);
  }
  const v = f.addEventListener.bind(f),
    w = f.removeEventListener.bind(f);
  var b = {
    EventTypes: l,
    initialize: function () {
      null === d && ((d = new MutationObserver(E)), d.observe(document, u), g(document.querySelectorAll(c.IFRAME_AND_FRAME)));
    },
    addEventListener: v,
    removeEventListener: w
  };
  function S(e, t) {
    return e.x <= t && t <= e.x + e.width;
  }
  function A(e, t) {
    return e.y <= t && t <= e.y + e.height;
  }
  var N = {
    containsX: S,
    containsY: A,
    contains: function (e, t, n) {
      return S(e, t) && A(e, n);
    },
    equalsTo: function (e, t) {
      return e === t || (!!t && e.top === t.top && e.left === t.left && e.width === t.width && e.height === t.height);
    },
    isWithinProximityTo: function (e, t, n) {
      return e === t || (!!t && Math.abs(e.left - t.left) <= n);
    },
    intersectsRect: function (e, t) {
      return e.left < t.right && t.left < e.right && e.top < t.bottom && t.top < e.bottom;
    }
  };
  const T = {};
  !(function () {
    const e = ["START", "STOP", "ERROR", "PROGRESS", "WAIT"],
      t = new Map();
    t.set("app", ["ACTIVATE", "DEACTIVATE", "QUERY_STATE"]),
      t.set("chrome", [
        "ACTIVATE",
        "DEACTIVATE",
        "ENGINE_READY",
        "SETUP",
        "NOTIFICATION",
        "TOGGLE",
        "NEEDS_SETUP",
        "DOCUMENT_READY",
        "DOCUMENT_CAPABILITIES_UPDATE",
        "SETTINGS",
        "OPTIONS",
        "OPEN_CONTENT_SETTINGS"
      ]),
      t.set("ui", ["RESOURCES"]),
      t.set("tts", e),
      t.set("speak", ["SPEAK", "SCHEDULE", "STOP"]),
      t.set("speech_recognition", ["TOGGLE", "NOTIFICATION", "PROGRESS", "END"]),
      t.set("topics", [
        "CREATE",
        "DATA",
        "UPDATE",
        "ACTIVATE",
        "SEARCH_WEB",
        "GET_CONTEXT_FOR_MOMENTARY_TOPIC",
        "CONTEXT_FOR_MOMENTARY_TOPIC_AVAILABLE"
      ]),
      t.set("ime", [
        "CONTEXT_AVAILABLE",
        "GUESS_SELECTED",
        "RESTART_GUESSES",
        "ACTIVATION_CHANGED",
        "ACCUMULATE_DATA",
        "GUESS_WINDOW_POS_UPDATE",
        "REPLACE_TEXT",
        "SPELLCHECK_DONE",
        "GUESSES_AVAILABLE",
        "TRANSLATIONS_AVAILABLE"
      ]),
      t.set("personal_words", ["ADD", "REMOVE"]),
      t.set("highlighting", [
        "INIT",
        "RESET",
        "DESTROY",
        "SET_GRANULARITY",
        "REPLACE_LAST_WORD",
        "SET_OPTIONS",
        "ENABLE_HIGHLIGHTING",
        "DISABLE_HIGHLIGHTING",
        "HIGHLIGHT",
        "MAP_TEXT_FOR_HIGHLIGHTING",
        "CANCEL"
      ]),
      t.set("i18n", ["TRANSLATE_TEXT"]);
    const n = new Map();
    n.set("", [
      "REWORDIFY",
      "TRANSLATE",
      "TRANSLATE_FROM_TOOLBAR",
      "OCR",
      "BACKGROUND_READY",
      "CONTENT_SCRIPT_READY",
      "SIGNIN",
      "SIGNOUT",
      "USER",
      "ACTIVATE_EXTENSION",
      "SETTINGS",
      "LOG"
    ]),
      n.set("content_script", ["READY", "CSS_READY", "RESTRICTIONS_READY"]),
      n.set("tts", e),
      n.set("overlay", ["ACTIVATION_CHANGE"]),
      (T.cwe = {}),
      (T.sru = {});
    let o = 0;
    function r(e, t) {
      t.forEach((t, n) => {
        !(function (e, t, n) {
          if (n.length > 0) {
            const r = {},
              i = t.length;
            for (let e = 0; e < i; e += 1) {
              const n = t[e];
              Object.defineProperty(r, n, { value: o, writable: !1 }), (o += 1);
            }
            Object.freeze(r), Object.defineProperty(e, n, { value: r, writable: !1 });
          } else {
            const n = t.length;
            for (let r = 0; r < n; r += 1) {
              const n = t[r];
              Object.defineProperty(e, n, { value: o, writable: !1 }), (o += 1);
            }
          }
        })(e, t, n);
      }),
        Object.freeze(e);
    }
    r(T.cwe, t), r(T.sru, n);
  })();
  const k = {},
    O = [
      "imgmjcnolbhljlnimjbnmeokfljgjokj",
      "emmgndmggimgmmpciejhnkcnlillakfn",
      "ifajfiofeifbbhbionejdliodenmecna",
      "mloajfnmjckfjbeeofcdaecbelnblden",
      "cbcfbhjolgdaepkoaoepejclfggmdand",
      "ioadmlabdmgldhncokgjbhlnpalnfccd",
      "ibbhadmnjccbljgfehndobbpjghoccio",
      "ikiamffdnlaifhblcjlmjhchbbegblfo",
      "dkbcbhadpkbopmfmgbkacikhfgelohmo",
      "imhhmknkhjkgoomhdbpgpfmjghhbgjic"
    ],
    C = { onNotification: null, onQuery: null };
  let R = !1,
    D = 0;
  function M(e, ...t) {
    if (e)
      try {
        e.apply(this, t);
      } catch (e) {
        n.error(e);
      }
  }
  function I(e) {
    return O.indexOf(e) >= 0;
  }
  function x(e) {
    const t = this;
    "notification" === e.type
      ? C.onNotification && M(C.onNotification, e.data)
      : "query" === e.type &&
        (C.onQuery
          ? M(C.onNotification, e.data, (n) => {
              t.postMessage({ queryId: e.id, type: "answer", data: n });
            })
          : t.postMessage({ queryId: e.id, type: "answer", data: null }));
  }
  function B(e) {
    e && e.sender && e.sender.id && I(e.sender.id) && e.onMessage.addListener(x.bind(e));
  }
  (k.init = function (e) {
    R ||
      ((e = e || {}),
      (C.onNotification = e.onNotification || null),
      (C.onQuery = e.onQuery || null),
      (R = !0),
      chrome.runtime.onConnectExternal.addListener(B));
  }),
    (k.broadcastNotification = function (e) {
      const t = chrome.runtime.id;
      for (let n = 0; n < O.length; n += 1) O[n] !== t && k.sendNotification(O[n], e);
    }),
    (k.sendNotification = function (e, t, n) {
      if (!I(e)) return;
      const o = chrome.runtime.connect(e);
      o.onDisconnect.addListener(() => {});
      try {
        (D += 1), o.postMessage({ id: D, type: "notification", data: t }), o.disconnect(), M(n, { success: !0 });
      } catch (e) {
        M(n, { success: !1 });
      }
    }),
    (k.sendQuery = function (e, t, o) {
      if (!I(e) || !o || "function" != typeof o) return;
      const r = function () {
          M(o, null);
        },
        i = chrome.runtime.connect(e);
      i.onDisconnect.addListener(r),
        i.onMessage.addListener((e) => {
          i.onDisconnect.removeListener(r), i.disconnect(), M(o, e);
        });
      try {
        (D += 1), i.postMessage({ id: D, type: "query", data: t });
      } catch (e) {
        n.error(e), M(o, null);
      }
    });
  var L =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    F = { exports: {} };
  !(function (e, t) {
    var n, o, r, i, s, a, c, l, u;
    e.exports =
      ((u =
        u ||
        (function (e, t) {
          var n;
          if (
            ("undefined" != typeof window && window.crypto && (n = window.crypto),
            "undefined" != typeof self && self.crypto && (n = self.crypto),
            "undefined" != typeof globalThis && globalThis.crypto && (n = globalThis.crypto),
            !n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto),
            !n && void 0 !== L && L.crypto && (n = L.crypto),
            !n)
          )
            try {
              n = require("crypto");
            } catch (e) {}
          var o = function () {
              if (n) {
                if ("function" == typeof n.getRandomValues)
                  try {
                    return n.getRandomValues(new Uint32Array(1))[0];
                  } catch (e) {}
                if ("function" == typeof n.randomBytes)
                  try {
                    return n.randomBytes(4).readInt32LE();
                  } catch (e) {}
              }
              throw new Error("Native crypto module could not be used to get secure random number.");
            },
            r =
              Object.create ||
              (function () {
                function e() {}
                return function (t) {
                  var n;
                  return (e.prototype = t), (n = new e()), (e.prototype = null), n;
                };
              })(),
            i = {},
            s = (i.lib = {}),
            a = (s.Base = {
              extend: function (e) {
                var t = r(this);
                return (
                  e && t.mixIn(e),
                  (t.hasOwnProperty("init") && this.init !== t.init) ||
                    (t.init = function () {
                      t.$super.init.apply(this, arguments);
                    }),
                  (t.init.prototype = t),
                  (t.$super = this),
                  t
                );
              },
              create: function () {
                var e = this.extend();
                return e.init.apply(e, arguments), e;
              },
              init: function () {},
              mixIn: function (e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              }
            }),
            c = (s.WordArray = a.extend({
              init: function (e, t) {
                (e = this.words = e || []), (this.sigBytes = null != t ? t : 4 * e.length);
              },
              toString: function (e) {
                return (e || u).stringify(this);
              },
              concat: function (e) {
                var t = this.words,
                  n = e.words,
                  o = this.sigBytes,
                  r = e.sigBytes;
                if ((this.clamp(), o % 4))
                  for (var i = 0; i < r; i++) {
                    var s = (n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                    t[(o + i) >>> 2] |= s << (24 - ((o + i) % 4) * 8);
                  }
                else for (var a = 0; a < r; a += 4) t[(o + a) >>> 2] = n[a >>> 2];
                return (this.sigBytes += r), this;
              },
              clamp: function () {
                var t = this.words,
                  n = this.sigBytes;
                (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)), (t.length = e.ceil(n / 4));
              },
              clone: function () {
                var e = a.clone.call(this);
                return (e.words = this.words.slice(0)), e;
              },
              random: function (e) {
                for (var t = [], n = 0; n < e; n += 4) t.push(o());
                return new c.init(t, e);
              }
            })),
            l = (i.enc = {}),
            u = (l.Hex = {
              stringify: function (e) {
                for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                  var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                  o.push((i >>> 4).toString(16)), o.push((15 & i).toString(16));
                }
                return o.join("");
              },
              parse: function (e) {
                for (var t = e.length, n = [], o = 0; o < t; o += 2) n[o >>> 3] |= parseInt(e.substr(o, 2), 16) << (24 - (o % 8) * 4);
                return new c.init(n, t / 2);
              }
            }),
            d = (l.Latin1 = {
              stringify: function (e) {
                for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                  var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                  o.push(String.fromCharCode(i));
                }
                return o.join("");
              },
              parse: function (e) {
                for (var t = e.length, n = [], o = 0; o < t; o++) n[o >>> 2] |= (255 & e.charCodeAt(o)) << (24 - (o % 4) * 8);
                return new c.init(n, t);
              }
            }),
            f = (l.Utf8 = {
              stringify: function (e) {
                try {
                  return decodeURIComponent(escape(d.stringify(e)));
                } catch (e) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (e) {
                return d.parse(unescape(encodeURIComponent(e)));
              }
            }),
            h = (s.BufferedBlockAlgorithm = a.extend({
              reset: function () {
                (this._data = new c.init()), (this._nDataBytes = 0);
              },
              _append: function (e) {
                "string" == typeof e && (e = f.parse(e)), this._data.concat(e), (this._nDataBytes += e.sigBytes);
              },
              _process: function (t) {
                var n,
                  o = this._data,
                  r = o.words,
                  i = o.sigBytes,
                  s = this.blockSize,
                  a = i / (4 * s),
                  l = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                  u = e.min(4 * l, i);
                if (l) {
                  for (var d = 0; d < l; d += s) this._doProcessBlock(r, d);
                  (n = r.splice(0, l)), (o.sigBytes -= u);
                }
                return new c.init(n, u);
              },
              clone: function () {
                var e = a.clone.call(this);
                return (e._data = this._data.clone()), e;
              },
              _minBufferSize: 0
            }));
          s.Hasher = h.extend({
            cfg: a.extend(),
            init: function (e) {
              (this.cfg = this.cfg.extend(e)), this.reset();
            },
            reset: function () {
              h.reset.call(this), this._doReset();
            },
            update: function (e) {
              return this._append(e), this._process(), this;
            },
            finalize: function (e) {
              return e && this._append(e), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (e) {
              return function (t, n) {
                return new e.init(n).finalize(t);
              };
            },
            _createHmacHelper: function (e) {
              return function (t, n) {
                return new m.HMAC.init(e, n).finalize(t);
              };
            }
          });
          var m = (i.algo = {});
          return i;
        })(Math)),
      (s = (i = u).lib),
      (a = s.Base),
      (c = s.WordArray),
      ((l = i.x64 = {}).Word = a.extend({
        init: function (e, t) {
          (this.high = e), (this.low = t);
        }
      })),
      (l.WordArray = a.extend({
        init: function (e, t) {
          (e = this.words = e || []), (this.sigBytes = null != t ? t : 8 * e.length);
        },
        toX32: function () {
          for (var e = this.words, t = e.length, n = [], o = 0; o < t; o++) {
            var r = e[o];
            n.push(r.high), n.push(r.low);
          }
          return c.create(n, this.sigBytes);
        },
        clone: function () {
          for (var e = a.clone.call(this), t = (e.words = this.words.slice(0)), n = t.length, o = 0; o < n; o++) t[o] = t[o].clone();
          return e;
        }
      })),
      (function () {
        if ("function" == typeof ArrayBuffer) {
          var e = u.lib.WordArray,
            t = e.init,
            n = (e.init = function (e) {
              if (
                (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                (e instanceof Int8Array ||
                  ("undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray) ||
                  e instanceof Int16Array ||
                  e instanceof Uint16Array ||
                  e instanceof Int32Array ||
                  e instanceof Uint32Array ||
                  e instanceof Float32Array ||
                  e instanceof Float64Array) &&
                  (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
                e instanceof Uint8Array)
              ) {
                for (var n = e.byteLength, o = [], r = 0; r < n; r++) o[r >>> 2] |= e[r] << (24 - (r % 4) * 8);
                t.call(this, o, n);
              } else t.apply(this, arguments);
            });
          n.prototype = e;
        }
      })(),
      (function () {
        var e = u,
          t = e.lib.WordArray,
          n = e.enc;
        function o(e) {
          return ((e << 8) & 4278255360) | ((e >>> 8) & 16711935);
        }
        (n.Utf16 = n.Utf16BE =
          {
            stringify: function (e) {
              for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r += 2) {
                var i = (t[r >>> 2] >>> (16 - (r % 4) * 8)) & 65535;
                o.push(String.fromCharCode(i));
              }
              return o.join("");
            },
            parse: function (e) {
              for (var n = e.length, o = [], r = 0; r < n; r++) o[r >>> 1] |= e.charCodeAt(r) << (16 - (r % 2) * 16);
              return t.create(o, 2 * n);
            }
          }),
          (n.Utf16LE = {
            stringify: function (e) {
              for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
                var s = o((t[i >>> 2] >>> (16 - (i % 4) * 8)) & 65535);
                r.push(String.fromCharCode(s));
              }
              return r.join("");
            },
            parse: function (e) {
              for (var n = e.length, r = [], i = 0; i < n; i++) r[i >>> 1] |= o(e.charCodeAt(i) << (16 - (i % 2) * 16));
              return t.create(r, 2 * n);
            }
          });
      })(),
      (function () {
        var e = u,
          t = e.lib.WordArray;
        e.enc.Base64 = {
          stringify: function (e) {
            var t = e.words,
              n = e.sigBytes,
              o = this._map;
            e.clamp();
            for (var r = [], i = 0; i < n; i += 3)
              for (
                var s =
                    (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                    (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                    ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                  a = 0;
                a < 4 && i + 0.75 * a < n;
                a++
              )
                r.push(o.charAt((s >>> (6 * (3 - a))) & 63));
            var c = o.charAt(64);
            if (c) for (; r.length % 4; ) r.push(c);
            return r.join("");
          },
          parse: function (e) {
            var n = e.length,
              o = this._map,
              r = this._reverseMap;
            if (!r) {
              r = this._reverseMap = [];
              for (var i = 0; i < o.length; i++) r[o.charCodeAt(i)] = i;
            }
            var s = o.charAt(64);
            if (s) {
              var a = e.indexOf(s);
              -1 !== a && (n = a);
            }
            return (function (e, n, o) {
              for (var r = [], i = 0, s = 0; s < n; s++)
                if (s % 4) {
                  var a = (o[e.charCodeAt(s - 1)] << ((s % 4) * 2)) | (o[e.charCodeAt(s)] >>> (6 - (s % 4) * 2));
                  (r[i >>> 2] |= a << (24 - (i % 4) * 8)), i++;
                }
              return t.create(r, i);
            })(e, n, r);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
      })(),
      (function () {
        var e = u,
          t = e.lib.WordArray;
        e.enc.Base64url = {
          stringify: function (e, t = !0) {
            var n = e.words,
              o = e.sigBytes,
              r = t ? this._safe_map : this._map;
            e.clamp();
            for (var i = [], s = 0; s < o; s += 3)
              for (
                var a =
                    (((n[s >>> 2] >>> (24 - (s % 4) * 8)) & 255) << 16) |
                    (((n[(s + 1) >>> 2] >>> (24 - ((s + 1) % 4) * 8)) & 255) << 8) |
                    ((n[(s + 2) >>> 2] >>> (24 - ((s + 2) % 4) * 8)) & 255),
                  c = 0;
                c < 4 && s + 0.75 * c < o;
                c++
              )
                i.push(r.charAt((a >>> (6 * (3 - c))) & 63));
            var l = r.charAt(64);
            if (l) for (; i.length % 4; ) i.push(l);
            return i.join("");
          },
          parse: function (e, n = !0) {
            var o = e.length,
              r = n ? this._safe_map : this._map,
              i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var s = 0; s < r.length; s++) i[r.charCodeAt(s)] = s;
            }
            var a = r.charAt(64);
            if (a) {
              var c = e.indexOf(a);
              -1 !== c && (o = c);
            }
            return (function (e, n, o) {
              for (var r = [], i = 0, s = 0; s < n; s++)
                if (s % 4) {
                  var a = (o[e.charCodeAt(s - 1)] << ((s % 4) * 2)) | (o[e.charCodeAt(s)] >>> (6 - (s % 4) * 2));
                  (r[i >>> 2] |= a << (24 - (i % 4) * 8)), i++;
                }
              return t.create(r, i);
            })(e, o, i);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
      })(),
      (function (e) {
        var t = u,
          n = t.lib,
          o = n.WordArray,
          r = n.Hasher,
          i = t.algo,
          s = [];
        !(function () {
          for (var t = 0; t < 64; t++) s[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
        })();
        var a = (i.MD5 = r.extend({
          _doReset: function () {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function (e, t) {
            for (var n = 0; n < 16; n++) {
              var o = t + n,
                r = e[o];
              e[o] = (16711935 & ((r << 8) | (r >>> 24))) | (4278255360 & ((r << 24) | (r >>> 8)));
            }
            var i = this._hash.words,
              a = e[t + 0],
              u = e[t + 1],
              h = e[t + 2],
              m = e[t + 3],
              p = e[t + 4],
              g = e[t + 5],
              _ = e[t + 6],
              y = e[t + 7],
              E = e[t + 8],
              v = e[t + 9],
              w = e[t + 10],
              b = e[t + 11],
              S = e[t + 12],
              A = e[t + 13],
              N = e[t + 14],
              T = e[t + 15],
              k = i[0],
              O = i[1],
              C = i[2],
              R = i[3];
            (k = c(k, O, C, R, a, 7, s[0])),
              (R = c(R, k, O, C, u, 12, s[1])),
              (C = c(C, R, k, O, h, 17, s[2])),
              (O = c(O, C, R, k, m, 22, s[3])),
              (k = c(k, O, C, R, p, 7, s[4])),
              (R = c(R, k, O, C, g, 12, s[5])),
              (C = c(C, R, k, O, _, 17, s[6])),
              (O = c(O, C, R, k, y, 22, s[7])),
              (k = c(k, O, C, R, E, 7, s[8])),
              (R = c(R, k, O, C, v, 12, s[9])),
              (C = c(C, R, k, O, w, 17, s[10])),
              (O = c(O, C, R, k, b, 22, s[11])),
              (k = c(k, O, C, R, S, 7, s[12])),
              (R = c(R, k, O, C, A, 12, s[13])),
              (C = c(C, R, k, O, N, 17, s[14])),
              (k = l(k, (O = c(O, C, R, k, T, 22, s[15])), C, R, u, 5, s[16])),
              (R = l(R, k, O, C, _, 9, s[17])),
              (C = l(C, R, k, O, b, 14, s[18])),
              (O = l(O, C, R, k, a, 20, s[19])),
              (k = l(k, O, C, R, g, 5, s[20])),
              (R = l(R, k, O, C, w, 9, s[21])),
              (C = l(C, R, k, O, T, 14, s[22])),
              (O = l(O, C, R, k, p, 20, s[23])),
              (k = l(k, O, C, R, v, 5, s[24])),
              (R = l(R, k, O, C, N, 9, s[25])),
              (C = l(C, R, k, O, m, 14, s[26])),
              (O = l(O, C, R, k, E, 20, s[27])),
              (k = l(k, O, C, R, A, 5, s[28])),
              (R = l(R, k, O, C, h, 9, s[29])),
              (C = l(C, R, k, O, y, 14, s[30])),
              (k = d(k, (O = l(O, C, R, k, S, 20, s[31])), C, R, g, 4, s[32])),
              (R = d(R, k, O, C, E, 11, s[33])),
              (C = d(C, R, k, O, b, 16, s[34])),
              (O = d(O, C, R, k, N, 23, s[35])),
              (k = d(k, O, C, R, u, 4, s[36])),
              (R = d(R, k, O, C, p, 11, s[37])),
              (C = d(C, R, k, O, y, 16, s[38])),
              (O = d(O, C, R, k, w, 23, s[39])),
              (k = d(k, O, C, R, A, 4, s[40])),
              (R = d(R, k, O, C, a, 11, s[41])),
              (C = d(C, R, k, O, m, 16, s[42])),
              (O = d(O, C, R, k, _, 23, s[43])),
              (k = d(k, O, C, R, v, 4, s[44])),
              (R = d(R, k, O, C, S, 11, s[45])),
              (C = d(C, R, k, O, T, 16, s[46])),
              (k = f(k, (O = d(O, C, R, k, h, 23, s[47])), C, R, a, 6, s[48])),
              (R = f(R, k, O, C, y, 10, s[49])),
              (C = f(C, R, k, O, N, 15, s[50])),
              (O = f(O, C, R, k, g, 21, s[51])),
              (k = f(k, O, C, R, S, 6, s[52])),
              (R = f(R, k, O, C, m, 10, s[53])),
              (C = f(C, R, k, O, w, 15, s[54])),
              (O = f(O, C, R, k, u, 21, s[55])),
              (k = f(k, O, C, R, E, 6, s[56])),
              (R = f(R, k, O, C, T, 10, s[57])),
              (C = f(C, R, k, O, _, 15, s[58])),
              (O = f(O, C, R, k, A, 21, s[59])),
              (k = f(k, O, C, R, p, 6, s[60])),
              (R = f(R, k, O, C, b, 10, s[61])),
              (C = f(C, R, k, O, h, 15, s[62])),
              (O = f(O, C, R, k, v, 21, s[63])),
              (i[0] = (i[0] + k) | 0),
              (i[1] = (i[1] + O) | 0),
              (i[2] = (i[2] + C) | 0),
              (i[3] = (i[3] + R) | 0);
          },
          _doFinalize: function () {
            var t = this._data,
              n = t.words,
              o = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            n[r >>> 5] |= 128 << (24 - (r % 32));
            var i = e.floor(o / 4294967296),
              s = o;
            (n[15 + (((r + 64) >>> 9) << 4)] = (16711935 & ((i << 8) | (i >>> 24))) | (4278255360 & ((i << 24) | (i >>> 8)))),
              (n[14 + (((r + 64) >>> 9) << 4)] = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8)))),
              (t.sigBytes = 4 * (n.length + 1)),
              this._process();
            for (var a = this._hash, c = a.words, l = 0; l < 4; l++) {
              var u = c[l];
              c[l] = (16711935 & ((u << 8) | (u >>> 24))) | (4278255360 & ((u << 24) | (u >>> 8)));
            }
            return a;
          },
          clone: function () {
            var e = r.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          }
        }));
        function c(e, t, n, o, r, i, s) {
          var a = e + ((t & n) | (~t & o)) + r + s;
          return ((a << i) | (a >>> (32 - i))) + t;
        }
        function l(e, t, n, o, r, i, s) {
          var a = e + ((t & o) | (n & ~o)) + r + s;
          return ((a << i) | (a >>> (32 - i))) + t;
        }
        function d(e, t, n, o, r, i, s) {
          var a = e + (t ^ n ^ o) + r + s;
          return ((a << i) | (a >>> (32 - i))) + t;
        }
        function f(e, t, n, o, r, i, s) {
          var a = e + (n ^ (t | ~o)) + r + s;
          return ((a << i) | (a >>> (32 - i))) + t;
        }
        (t.MD5 = r._createHelper(a)), (t.HmacMD5 = r._createHmacHelper(a));
      })(Math),
      (function () {
        var e = u,
          t = e.lib,
          n = t.WordArray,
          o = t.Hasher,
          r = e.algo,
          i = [],
          s = (r.SHA1 = o.extend({
            _doReset: function () {
              this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (e, t) {
              for (var n = this._hash.words, o = n[0], r = n[1], s = n[2], a = n[3], c = n[4], l = 0; l < 80; l++) {
                if (l < 16) i[l] = 0 | e[t + l];
                else {
                  var u = i[l - 3] ^ i[l - 8] ^ i[l - 14] ^ i[l - 16];
                  i[l] = (u << 1) | (u >>> 31);
                }
                var d = ((o << 5) | (o >>> 27)) + c + i[l];
                (d +=
                  l < 20
                    ? 1518500249 + ((r & s) | (~r & a))
                    : l < 40
                    ? 1859775393 + (r ^ s ^ a)
                    : l < 60
                    ? ((r & s) | (r & a) | (s & a)) - 1894007588
                    : (r ^ s ^ a) - 899497514),
                  (c = a),
                  (a = s),
                  (s = (r << 30) | (r >>> 2)),
                  (r = o),
                  (o = d);
              }
              (n[0] = (n[0] + o) | 0), (n[1] = (n[1] + r) | 0), (n[2] = (n[2] + s) | 0), (n[3] = (n[3] + a) | 0), (n[4] = (n[4] + c) | 0);
            },
            _doFinalize: function () {
              var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                o = 8 * e.sigBytes;
              return (
                (t[o >>> 5] |= 128 << (24 - (o % 32))),
                (t[14 + (((o + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
                (t[15 + (((o + 64) >>> 9) << 4)] = n),
                (e.sigBytes = 4 * t.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var e = o.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            }
          }));
        (e.SHA1 = o._createHelper(s)), (e.HmacSHA1 = o._createHmacHelper(s));
      })(),
      (function (e) {
        var t = u,
          n = t.lib,
          o = n.WordArray,
          r = n.Hasher,
          i = t.algo,
          s = [],
          a = [];
        !(function () {
          function t(t) {
            for (var n = e.sqrt(t), o = 2; o <= n; o++) if (!(t % o)) return !1;
            return !0;
          }
          function n(e) {
            return (4294967296 * (e - (0 | e))) | 0;
          }
          for (var o = 2, r = 0; r < 64; ) t(o) && (r < 8 && (s[r] = n(e.pow(o, 0.5))), (a[r] = n(e.pow(o, 1 / 3))), r++), o++;
        })();
        var c = [],
          l = (i.SHA256 = r.extend({
            _doReset: function () {
              this._hash = new o.init(s.slice(0));
            },
            _doProcessBlock: function (e, t) {
              for (
                var n = this._hash.words, o = n[0], r = n[1], i = n[2], s = n[3], l = n[4], u = n[5], d = n[6], f = n[7], h = 0;
                h < 64;
                h++
              ) {
                if (h < 16) c[h] = 0 | e[t + h];
                else {
                  var m = c[h - 15],
                    p = ((m << 25) | (m >>> 7)) ^ ((m << 14) | (m >>> 18)) ^ (m >>> 3),
                    g = c[h - 2],
                    _ = ((g << 15) | (g >>> 17)) ^ ((g << 13) | (g >>> 19)) ^ (g >>> 10);
                  c[h] = p + c[h - 7] + _ + c[h - 16];
                }
                var y = (o & r) ^ (o & i) ^ (r & i),
                  E = ((o << 30) | (o >>> 2)) ^ ((o << 19) | (o >>> 13)) ^ ((o << 10) | (o >>> 22)),
                  v =
                    f + (((l << 26) | (l >>> 6)) ^ ((l << 21) | (l >>> 11)) ^ ((l << 7) | (l >>> 25))) + ((l & u) ^ (~l & d)) + a[h] + c[h];
                (f = d), (d = u), (u = l), (l = (s + v) | 0), (s = i), (i = r), (r = o), (o = (v + (E + y)) | 0);
              }
              (n[0] = (n[0] + o) | 0),
                (n[1] = (n[1] + r) | 0),
                (n[2] = (n[2] + i) | 0),
                (n[3] = (n[3] + s) | 0),
                (n[4] = (n[4] + l) | 0),
                (n[5] = (n[5] + u) | 0),
                (n[6] = (n[6] + d) | 0),
                (n[7] = (n[7] + f) | 0);
            },
            _doFinalize: function () {
              var t = this._data,
                n = t.words,
                o = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;
              return (
                (n[r >>> 5] |= 128 << (24 - (r % 32))),
                (n[14 + (((r + 64) >>> 9) << 4)] = e.floor(o / 4294967296)),
                (n[15 + (((r + 64) >>> 9) << 4)] = o),
                (t.sigBytes = 4 * n.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var e = r.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            }
          }));
        (t.SHA256 = r._createHelper(l)), (t.HmacSHA256 = r._createHmacHelper(l));
      })(Math),
      (function () {
        var e = u,
          t = e.lib.WordArray,
          n = e.algo,
          o = n.SHA256,
          r = (n.SHA224 = o.extend({
            _doReset: function () {
              this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
            },
            _doFinalize: function () {
              var e = o._doFinalize.call(this);
              return (e.sigBytes -= 4), e;
            }
          }));
        (e.SHA224 = o._createHelper(r)), (e.HmacSHA224 = o._createHmacHelper(r));
      })(),
      (function () {
        var e = u,
          t = e.lib.Hasher,
          n = e.x64,
          o = n.Word,
          r = n.WordArray,
          i = e.algo;
        function s() {
          return o.create.apply(o, arguments);
        }
        var a = [
            s(1116352408, 3609767458),
            s(1899447441, 602891725),
            s(3049323471, 3964484399),
            s(3921009573, 2173295548),
            s(961987163, 4081628472),
            s(1508970993, 3053834265),
            s(2453635748, 2937671579),
            s(2870763221, 3664609560),
            s(3624381080, 2734883394),
            s(310598401, 1164996542),
            s(607225278, 1323610764),
            s(1426881987, 3590304994),
            s(1925078388, 4068182383),
            s(2162078206, 991336113),
            s(2614888103, 633803317),
            s(3248222580, 3479774868),
            s(3835390401, 2666613458),
            s(4022224774, 944711139),
            s(264347078, 2341262773),
            s(604807628, 2007800933),
            s(770255983, 1495990901),
            s(1249150122, 1856431235),
            s(1555081692, 3175218132),
            s(1996064986, 2198950837),
            s(2554220882, 3999719339),
            s(2821834349, 766784016),
            s(2952996808, 2566594879),
            s(3210313671, 3203337956),
            s(3336571891, 1034457026),
            s(3584528711, 2466948901),
            s(113926993, 3758326383),
            s(338241895, 168717936),
            s(666307205, 1188179964),
            s(773529912, 1546045734),
            s(1294757372, 1522805485),
            s(1396182291, 2643833823),
            s(1695183700, 2343527390),
            s(1986661051, 1014477480),
            s(2177026350, 1206759142),
            s(2456956037, 344077627),
            s(2730485921, 1290863460),
            s(2820302411, 3158454273),
            s(3259730800, 3505952657),
            s(3345764771, 106217008),
            s(3516065817, 3606008344),
            s(3600352804, 1432725776),
            s(4094571909, 1467031594),
            s(275423344, 851169720),
            s(430227734, 3100823752),
            s(506948616, 1363258195),
            s(659060556, 3750685593),
            s(883997877, 3785050280),
            s(958139571, 3318307427),
            s(1322822218, 3812723403),
            s(1537002063, 2003034995),
            s(1747873779, 3602036899),
            s(1955562222, 1575990012),
            s(2024104815, 1125592928),
            s(2227730452, 2716904306),
            s(2361852424, 442776044),
            s(2428436474, 593698344),
            s(2756734187, 3733110249),
            s(3204031479, 2999351573),
            s(3329325298, 3815920427),
            s(3391569614, 3928383900),
            s(3515267271, 566280711),
            s(3940187606, 3454069534),
            s(4118630271, 4000239992),
            s(116418474, 1914138554),
            s(174292421, 2731055270),
            s(289380356, 3203993006),
            s(460393269, 320620315),
            s(685471733, 587496836),
            s(852142971, 1086792851),
            s(1017036298, 365543100),
            s(1126000580, 2618297676),
            s(1288033470, 3409855158),
            s(1501505948, 4234509866),
            s(1607167915, 987167468),
            s(1816402316, 1246189591)
          ],
          c = [];
        !(function () {
          for (var e = 0; e < 80; e++) c[e] = s();
        })();
        var l = (i.SHA512 = t.extend({
          _doReset: function () {
            this._hash = new r.init([
              new o.init(1779033703, 4089235720),
              new o.init(3144134277, 2227873595),
              new o.init(1013904242, 4271175723),
              new o.init(2773480762, 1595750129),
              new o.init(1359893119, 2917565137),
              new o.init(2600822924, 725511199),
              new o.init(528734635, 4215389547),
              new o.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function (e, t) {
            for (
              var n = this._hash.words,
                o = n[0],
                r = n[1],
                i = n[2],
                s = n[3],
                l = n[4],
                u = n[5],
                d = n[6],
                f = n[7],
                h = o.high,
                m = o.low,
                p = r.high,
                g = r.low,
                _ = i.high,
                y = i.low,
                E = s.high,
                v = s.low,
                w = l.high,
                b = l.low,
                S = u.high,
                A = u.low,
                N = d.high,
                T = d.low,
                k = f.high,
                O = f.low,
                C = h,
                R = m,
                D = p,
                M = g,
                I = _,
                x = y,
                B = E,
                L = v,
                F = w,
                P = b,
                H = S,
                j = A,
                W = N,
                G = T,
                z = k,
                U = O,
                V = 0;
              V < 80;
              V++
            ) {
              var q,
                $,
                X = c[V];
              if (V < 16) ($ = X.high = 0 | e[t + 2 * V]), (q = X.low = 0 | e[t + 2 * V + 1]);
              else {
                var K = c[V - 15],
                  Y = K.high,
                  J = K.low,
                  Q = ((Y >>> 1) | (J << 31)) ^ ((Y >>> 8) | (J << 24)) ^ (Y >>> 7),
                  Z = ((J >>> 1) | (Y << 31)) ^ ((J >>> 8) | (Y << 24)) ^ ((J >>> 7) | (Y << 25)),
                  ee = c[V - 2],
                  te = ee.high,
                  ne = ee.low,
                  oe = ((te >>> 19) | (ne << 13)) ^ ((te << 3) | (ne >>> 29)) ^ (te >>> 6),
                  re = ((ne >>> 19) | (te << 13)) ^ ((ne << 3) | (te >>> 29)) ^ ((ne >>> 6) | (te << 26)),
                  ie = c[V - 7],
                  se = ie.high,
                  ae = ie.low,
                  ce = c[V - 16],
                  le = ce.high,
                  ue = ce.low;
                ($ =
                  ($ = ($ = Q + se + ((q = Z + ae) >>> 0 < Z >>> 0 ? 1 : 0)) + oe + ((q += re) >>> 0 < re >>> 0 ? 1 : 0)) +
                  le +
                  ((q += ue) >>> 0 < ue >>> 0 ? 1 : 0)),
                  (X.high = $),
                  (X.low = q);
              }
              var de,
                fe = (F & H) ^ (~F & W),
                he = (P & j) ^ (~P & G),
                me = (C & D) ^ (C & I) ^ (D & I),
                pe = (R & M) ^ (R & x) ^ (M & x),
                ge = ((C >>> 28) | (R << 4)) ^ ((C << 30) | (R >>> 2)) ^ ((C << 25) | (R >>> 7)),
                _e = ((R >>> 28) | (C << 4)) ^ ((R << 30) | (C >>> 2)) ^ ((R << 25) | (C >>> 7)),
                ye = ((F >>> 14) | (P << 18)) ^ ((F >>> 18) | (P << 14)) ^ ((F << 23) | (P >>> 9)),
                Ee = ((P >>> 14) | (F << 18)) ^ ((P >>> 18) | (F << 14)) ^ ((P << 23) | (F >>> 9)),
                ve = a[V],
                we = ve.high,
                be = ve.low,
                Se = z + ye + ((de = U + Ee) >>> 0 < U >>> 0 ? 1 : 0),
                Ae = _e + pe;
              (z = W),
                (U = G),
                (W = H),
                (G = j),
                (H = F),
                (j = P),
                (F =
                  (B +
                    (Se =
                      (Se = (Se = Se + fe + ((de += he) >>> 0 < he >>> 0 ? 1 : 0)) + we + ((de += be) >>> 0 < be >>> 0 ? 1 : 0)) +
                      $ +
                      ((de += q) >>> 0 < q >>> 0 ? 1 : 0)) +
                    ((P = (L + de) | 0) >>> 0 < L >>> 0 ? 1 : 0)) |
                  0),
                (B = I),
                (L = x),
                (I = D),
                (x = M),
                (D = C),
                (M = R),
                (C = (Se + (ge + me + (Ae >>> 0 < _e >>> 0 ? 1 : 0)) + ((R = (de + Ae) | 0) >>> 0 < de >>> 0 ? 1 : 0)) | 0);
            }
            (m = o.low = m + R),
              (o.high = h + C + (m >>> 0 < R >>> 0 ? 1 : 0)),
              (g = r.low = g + M),
              (r.high = p + D + (g >>> 0 < M >>> 0 ? 1 : 0)),
              (y = i.low = y + x),
              (i.high = _ + I + (y >>> 0 < x >>> 0 ? 1 : 0)),
              (v = s.low = v + L),
              (s.high = E + B + (v >>> 0 < L >>> 0 ? 1 : 0)),
              (b = l.low = b + P),
              (l.high = w + F + (b >>> 0 < P >>> 0 ? 1 : 0)),
              (A = u.low = A + j),
              (u.high = S + H + (A >>> 0 < j >>> 0 ? 1 : 0)),
              (T = d.low = T + G),
              (d.high = N + W + (T >>> 0 < G >>> 0 ? 1 : 0)),
              (O = f.low = O + U),
              (f.high = k + z + (O >>> 0 < U >>> 0 ? 1 : 0));
          },
          _doFinalize: function () {
            var e = this._data,
              t = e.words,
              n = 8 * this._nDataBytes,
              o = 8 * e.sigBytes;
            return (
              (t[o >>> 5] |= 128 << (24 - (o % 32))),
              (t[30 + (((o + 128) >>> 10) << 5)] = Math.floor(n / 4294967296)),
              (t[31 + (((o + 128) >>> 10) << 5)] = n),
              (e.sigBytes = 4 * t.length),
              this._process(),
              this._hash.toX32()
            );
          },
          clone: function () {
            var e = t.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          },
          blockSize: 32
        }));
        (e.SHA512 = t._createHelper(l)), (e.HmacSHA512 = t._createHmacHelper(l));
      })(),
      (function () {
        var e = u,
          t = e.x64,
          n = t.Word,
          o = t.WordArray,
          r = e.algo,
          i = r.SHA512,
          s = (r.SHA384 = i.extend({
            _doReset: function () {
              this._hash = new o.init([
                new n.init(3418070365, 3238371032),
                new n.init(1654270250, 914150663),
                new n.init(2438529370, 812702999),
                new n.init(355462360, 4144912697),
                new n.init(1731405415, 4290775857),
                new n.init(2394180231, 1750603025),
                new n.init(3675008525, 1694076839),
                new n.init(1203062813, 3204075428)
              ]);
            },
            _doFinalize: function () {
              var e = i._doFinalize.call(this);
              return (e.sigBytes -= 16), e;
            }
          }));
        (e.SHA384 = i._createHelper(s)), (e.HmacSHA384 = i._createHmacHelper(s));
      })(),
      (function (e) {
        var t = u,
          n = t.lib,
          o = n.WordArray,
          r = n.Hasher,
          i = t.x64.Word,
          s = t.algo,
          a = [],
          c = [],
          l = [];
        !(function () {
          for (var e = 1, t = 0, n = 0; n < 24; n++) {
            a[e + 5 * t] = (((n + 1) * (n + 2)) / 2) % 64;
            var o = (2 * e + 3 * t) % 5;
            (e = t % 5), (t = o);
          }
          for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) c[e + 5 * t] = t + ((2 * e + 3 * t) % 5) * 5;
          for (var r = 1, s = 0; s < 24; s++) {
            for (var u = 0, d = 0, f = 0; f < 7; f++) {
              if (1 & r) {
                var h = (1 << f) - 1;
                h < 32 ? (d ^= 1 << h) : (u ^= 1 << (h - 32));
              }
              128 & r ? (r = (r << 1) ^ 113) : (r <<= 1);
            }
            l[s] = i.create(u, d);
          }
        })();
        var d = [];
        !(function () {
          for (var e = 0; e < 25; e++) d[e] = i.create();
        })();
        var f = (s.SHA3 = r.extend({
          cfg: r.cfg.extend({ outputLength: 512 }),
          _doReset: function () {
            for (var e = (this._state = []), t = 0; t < 25; t++) e[t] = new i.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function (e, t) {
            for (var n = this._state, o = this.blockSize / 2, r = 0; r < o; r++) {
              var i = e[t + 2 * r],
                s = e[t + 2 * r + 1];
              (i = (16711935 & ((i << 8) | (i >>> 24))) | (4278255360 & ((i << 24) | (i >>> 8)))),
                (s = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8)))),
                ((O = n[r]).high ^= s),
                (O.low ^= i);
            }
            for (var u = 0; u < 24; u++) {
              for (var f = 0; f < 5; f++) {
                for (var h = 0, m = 0, p = 0; p < 5; p++) (h ^= (O = n[f + 5 * p]).high), (m ^= O.low);
                var g = d[f];
                (g.high = h), (g.low = m);
              }
              for (f = 0; f < 5; f++) {
                var _ = d[(f + 4) % 5],
                  y = d[(f + 1) % 5],
                  E = y.high,
                  v = y.low;
                for (h = _.high ^ ((E << 1) | (v >>> 31)), m = _.low ^ ((v << 1) | (E >>> 31)), p = 0; p < 5; p++)
                  ((O = n[f + 5 * p]).high ^= h), (O.low ^= m);
              }
              for (var w = 1; w < 25; w++) {
                var b = (O = n[w]).high,
                  S = O.low,
                  A = a[w];
                A < 32
                  ? ((h = (b << A) | (S >>> (32 - A))), (m = (S << A) | (b >>> (32 - A))))
                  : ((h = (S << (A - 32)) | (b >>> (64 - A))), (m = (b << (A - 32)) | (S >>> (64 - A))));
                var N = d[c[w]];
                (N.high = h), (N.low = m);
              }
              var T = d[0],
                k = n[0];
              for (T.high = k.high, T.low = k.low, f = 0; f < 5; f++)
                for (p = 0; p < 5; p++) {
                  var O = n[(w = f + 5 * p)],
                    C = d[w],
                    R = d[((f + 1) % 5) + 5 * p],
                    D = d[((f + 2) % 5) + 5 * p];
                  (O.high = C.high ^ (~R.high & D.high)), (O.low = C.low ^ (~R.low & D.low));
                }
              O = n[0];
              var M = l[u];
              (O.high ^= M.high), (O.low ^= M.low);
            }
          },
          _doFinalize: function () {
            var t = this._data,
              n = t.words;
            this._nDataBytes;
            var r = 8 * t.sigBytes,
              i = 32 * this.blockSize;
            (n[r >>> 5] |= 1 << (24 - (r % 32))),
              (n[((e.ceil((r + 1) / i) * i) >>> 5) - 1] |= 128),
              (t.sigBytes = 4 * n.length),
              this._process();
            for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, l = [], u = 0; u < c; u++) {
              var d = s[u],
                f = d.high,
                h = d.low;
              (f = (16711935 & ((f << 8) | (f >>> 24))) | (4278255360 & ((f << 24) | (f >>> 8)))),
                (h = (16711935 & ((h << 8) | (h >>> 24))) | (4278255360 & ((h << 24) | (h >>> 8)))),
                l.push(h),
                l.push(f);
            }
            return new o.init(l, a);
          },
          clone: function () {
            for (var e = r.clone.call(this), t = (e._state = this._state.slice(0)), n = 0; n < 25; n++) t[n] = t[n].clone();
            return e;
          }
        }));
        (t.SHA3 = r._createHelper(f)), (t.HmacSHA3 = r._createHmacHelper(f));
      })(Math),
      (function (e) {
        var t = u,
          n = t.lib,
          o = n.WordArray,
          r = n.Hasher,
          i = t.algo,
          s = o.create([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15,
            8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8,
            11, 6, 15, 13
          ]),
          a = o.create([
            5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14,
            6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14,
            0, 3, 9, 11
          ]),
          c = o.create([
            11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7,
            14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5,
            12, 13, 14, 11, 8, 5, 6
          ]),
          l = o.create([
            8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8,
            6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13,
            6, 5, 15, 13, 11, 11
          ]),
          d = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
          f = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
          h = (i.RIPEMD160 = r.extend({
            _doReset: function () {
              this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (e, t) {
              for (var n = 0; n < 16; n++) {
                var o = t + n,
                  r = e[o];
                e[o] = (16711935 & ((r << 8) | (r >>> 24))) | (4278255360 & ((r << 24) | (r >>> 8)));
              }
              var i,
                u,
                h,
                v,
                w,
                b,
                S,
                A,
                N,
                T,
                k,
                O = this._hash.words,
                C = d.words,
                R = f.words,
                D = s.words,
                M = a.words,
                I = c.words,
                x = l.words;
              for (b = i = O[0], S = u = O[1], A = h = O[2], N = v = O[3], T = w = O[4], n = 0; n < 80; n += 1)
                (k = (i + e[t + D[n]]) | 0),
                  (k +=
                    n < 16
                      ? m(u, h, v) + C[0]
                      : n < 32
                      ? p(u, h, v) + C[1]
                      : n < 48
                      ? g(u, h, v) + C[2]
                      : n < 64
                      ? _(u, h, v) + C[3]
                      : y(u, h, v) + C[4]),
                  (k = ((k = E((k |= 0), I[n])) + w) | 0),
                  (i = w),
                  (w = v),
                  (v = E(h, 10)),
                  (h = u),
                  (u = k),
                  (k = (b + e[t + M[n]]) | 0),
                  (k +=
                    n < 16
                      ? y(S, A, N) + R[0]
                      : n < 32
                      ? _(S, A, N) + R[1]
                      : n < 48
                      ? g(S, A, N) + R[2]
                      : n < 64
                      ? p(S, A, N) + R[3]
                      : m(S, A, N) + R[4]),
                  (k = ((k = E((k |= 0), x[n])) + T) | 0),
                  (b = T),
                  (T = N),
                  (N = E(A, 10)),
                  (A = S),
                  (S = k);
              (k = (O[1] + h + N) | 0),
                (O[1] = (O[2] + v + T) | 0),
                (O[2] = (O[3] + w + b) | 0),
                (O[3] = (O[4] + i + S) | 0),
                (O[4] = (O[0] + u + A) | 0),
                (O[0] = k);
            },
            _doFinalize: function () {
              var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                o = 8 * e.sigBytes;
              (t[o >>> 5] |= 128 << (24 - (o % 32))),
                (t[14 + (((o + 64) >>> 9) << 4)] = (16711935 & ((n << 8) | (n >>> 24))) | (4278255360 & ((n << 24) | (n >>> 8)))),
                (e.sigBytes = 4 * (t.length + 1)),
                this._process();
              for (var r = this._hash, i = r.words, s = 0; s < 5; s++) {
                var a = i[s];
                i[s] = (16711935 & ((a << 8) | (a >>> 24))) | (4278255360 & ((a << 24) | (a >>> 8)));
              }
              return r;
            },
            clone: function () {
              var e = r.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            }
          }));
        function m(e, t, n) {
          return e ^ t ^ n;
        }
        function p(e, t, n) {
          return (e & t) | (~e & n);
        }
        function g(e, t, n) {
          return (e | ~t) ^ n;
        }
        function _(e, t, n) {
          return (e & n) | (t & ~n);
        }
        function y(e, t, n) {
          return e ^ (t | ~n);
        }
        function E(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        (t.RIPEMD160 = r._createHelper(h)), (t.HmacRIPEMD160 = r._createHmacHelper(h));
      })(),
      (function () {
        var e = u,
          t = e.lib.Base,
          n = e.enc.Utf8;
        e.algo.HMAC = t.extend({
          init: function (e, t) {
            (e = this._hasher = new e.init()), "string" == typeof t && (t = n.parse(t));
            var o = e.blockSize,
              r = 4 * o;
            t.sigBytes > r && (t = e.finalize(t)), t.clamp();
            for (var i = (this._oKey = t.clone()), s = (this._iKey = t.clone()), a = i.words, c = s.words, l = 0; l < o; l++)
              (a[l] ^= 1549556828), (c[l] ^= 909522486);
            (i.sigBytes = s.sigBytes = r), this.reset();
          },
          reset: function () {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
          },
          update: function (e) {
            return this._hasher.update(e), this;
          },
          finalize: function (e) {
            var t = this._hasher,
              n = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(n));
          }
        });
      })(),
      (function () {
        var e = u,
          t = e.lib,
          n = t.Base,
          o = t.WordArray,
          r = e.algo,
          i = r.SHA1,
          s = r.HMAC,
          a = (r.PBKDF2 = n.extend({
            cfg: n.extend({ keySize: 4, hasher: i, iterations: 1 }),
            init: function (e) {
              this.cfg = this.cfg.extend(e);
            },
            compute: function (e, t) {
              for (
                var n = this.cfg,
                  r = s.create(n.hasher, e),
                  i = o.create(),
                  a = o.create([1]),
                  c = i.words,
                  l = a.words,
                  u = n.keySize,
                  d = n.iterations;
                c.length < u;

              ) {
                var f = r.update(t).finalize(a);
                r.reset();
                for (var h = f.words, m = h.length, p = f, g = 1; g < d; g++) {
                  (p = r.finalize(p)), r.reset();
                  for (var _ = p.words, y = 0; y < m; y++) h[y] ^= _[y];
                }
                i.concat(f), l[0]++;
              }
              return (i.sigBytes = 4 * u), i;
            }
          }));
        e.PBKDF2 = function (e, t, n) {
          return a.create(n).compute(e, t);
        };
      })(),
      (function () {
        var e = u,
          t = e.lib,
          n = t.Base,
          o = t.WordArray,
          r = e.algo,
          i = r.MD5,
          s = (r.EvpKDF = n.extend({
            cfg: n.extend({ keySize: 4, hasher: i, iterations: 1 }),
            init: function (e) {
              this.cfg = this.cfg.extend(e);
            },
            compute: function (e, t) {
              for (
                var n, r = this.cfg, i = r.hasher.create(), s = o.create(), a = s.words, c = r.keySize, l = r.iterations;
                a.length < c;

              ) {
                n && i.update(n), (n = i.update(e).finalize(t)), i.reset();
                for (var u = 1; u < l; u++) (n = i.finalize(n)), i.reset();
                s.concat(n);
              }
              return (s.sigBytes = 4 * c), s;
            }
          }));
        e.EvpKDF = function (e, t, n) {
          return s.create(n).compute(e, t);
        };
      })(),
      u.lib.Cipher ||
        (function (e) {
          var t = u,
            n = t.lib,
            o = n.Base,
            r = n.WordArray,
            i = n.BufferedBlockAlgorithm,
            s = t.enc;
          s.Utf8;
          var a = s.Base64,
            c = t.algo.EvpKDF,
            l = (n.Cipher = i.extend({
              cfg: o.extend(),
              createEncryptor: function (e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t);
              },
              createDecryptor: function (e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t);
              },
              init: function (e, t, n) {
                (this.cfg = this.cfg.extend(n)), (this._xformMode = e), (this._key = t), this.reset();
              },
              reset: function () {
                i.reset.call(this), this._doReset();
              },
              process: function (e) {
                return this._append(e), this._process();
              },
              finalize: function (e) {
                return e && this._append(e), this._doFinalize();
              },
              keySize: 4,
              ivSize: 4,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              _createHelper: (function () {
                function e(e) {
                  return "string" == typeof e ? E : _;
                }
                return function (t) {
                  return {
                    encrypt: function (n, o, r) {
                      return e(o).encrypt(t, n, o, r);
                    },
                    decrypt: function (n, o, r) {
                      return e(o).decrypt(t, n, o, r);
                    }
                  };
                };
              })()
            }));
          n.StreamCipher = l.extend({
            _doFinalize: function () {
              return this._process(!0);
            },
            blockSize: 1
          });
          var d = (t.mode = {}),
            f = (n.BlockCipherMode = o.extend({
              createEncryptor: function (e, t) {
                return this.Encryptor.create(e, t);
              },
              createDecryptor: function (e, t) {
                return this.Decryptor.create(e, t);
              },
              init: function (e, t) {
                (this._cipher = e), (this._iv = t);
              }
            })),
            h = (d.CBC = (function () {
              var e = f.extend();
              function t(e, t, n) {
                var o,
                  r = this._iv;
                r ? ((o = r), (this._iv = undefined)) : (o = this._prevBlock);
                for (var i = 0; i < n; i++) e[t + i] ^= o[i];
              }
              return (
                (e.Encryptor = e.extend({
                  processBlock: function (e, n) {
                    var o = this._cipher,
                      r = o.blockSize;
                    t.call(this, e, n, r), o.encryptBlock(e, n), (this._prevBlock = e.slice(n, n + r));
                  }
                })),
                (e.Decryptor = e.extend({
                  processBlock: function (e, n) {
                    var o = this._cipher,
                      r = o.blockSize,
                      i = e.slice(n, n + r);
                    o.decryptBlock(e, n), t.call(this, e, n, r), (this._prevBlock = i);
                  }
                })),
                e
              );
            })()),
            m = ((t.pad = {}).Pkcs7 = {
              pad: function (e, t) {
                for (var n = 4 * t, o = n - (e.sigBytes % n), i = (o << 24) | (o << 16) | (o << 8) | o, s = [], a = 0; a < o; a += 4)
                  s.push(i);
                var c = r.create(s, o);
                e.concat(c);
              },
              unpad: function (e) {
                var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
                e.sigBytes -= t;
              }
            });
          n.BlockCipher = l.extend({
            cfg: l.cfg.extend({ mode: h, padding: m }),
            reset: function () {
              var e;
              l.reset.call(this);
              var t = this.cfg,
                n = t.iv,
                o = t.mode;
              this._xformMode == this._ENC_XFORM_MODE ? (e = o.createEncryptor) : ((e = o.createDecryptor), (this._minBufferSize = 1)),
                this._mode && this._mode.__creator == e
                  ? this._mode.init(this, n && n.words)
                  : ((this._mode = e.call(o, this, n && n.words)), (this._mode.__creator = e));
            },
            _doProcessBlock: function (e, t) {
              this._mode.processBlock(e, t);
            },
            _doFinalize: function () {
              var e,
                t = this.cfg.padding;
              return (
                this._xformMode == this._ENC_XFORM_MODE
                  ? (t.pad(this._data, this.blockSize), (e = this._process(!0)))
                  : ((e = this._process(!0)), t.unpad(e)),
                e
              );
            },
            blockSize: 4
          });
          var p = (n.CipherParams = o.extend({
              init: function (e) {
                this.mixIn(e);
              },
              toString: function (e) {
                return (e || this.formatter).stringify(this);
              }
            })),
            g = ((t.format = {}).OpenSSL = {
              stringify: function (e) {
                var t = e.ciphertext,
                  n = e.salt;
                return (n ? r.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(a);
              },
              parse: function (e) {
                var t,
                  n = a.parse(e),
                  o = n.words;
                return (
                  1398893684 == o[0] && 1701076831 == o[1] && ((t = r.create(o.slice(2, 4))), o.splice(0, 4), (n.sigBytes -= 16)),
                  p.create({ ciphertext: n, salt: t })
                );
              }
            }),
            _ = (n.SerializableCipher = o.extend({
              cfg: o.extend({ format: g }),
              encrypt: function (e, t, n, o) {
                o = this.cfg.extend(o);
                var r = e.createEncryptor(n, o),
                  i = r.finalize(t),
                  s = r.cfg;
                return p.create({
                  ciphertext: i,
                  key: n,
                  iv: s.iv,
                  algorithm: e,
                  mode: s.mode,
                  padding: s.padding,
                  blockSize: e.blockSize,
                  formatter: o.format
                });
              },
              decrypt: function (e, t, n, o) {
                return (o = this.cfg.extend(o)), (t = this._parse(t, o.format)), e.createDecryptor(n, o).finalize(t.ciphertext);
              },
              _parse: function (e, t) {
                return "string" == typeof e ? t.parse(e, this) : e;
              }
            })),
            y = ((t.kdf = {}).OpenSSL = {
              execute: function (e, t, n, o) {
                o || (o = r.random(8));
                var i = c.create({ keySize: t + n }).compute(e, o),
                  s = r.create(i.words.slice(t), 4 * n);
                return (i.sigBytes = 4 * t), p.create({ key: i, iv: s, salt: o });
              }
            }),
            E = (n.PasswordBasedCipher = _.extend({
              cfg: _.cfg.extend({ kdf: y }),
              encrypt: function (e, t, n, o) {
                var r = (o = this.cfg.extend(o)).kdf.execute(n, e.keySize, e.ivSize);
                o.iv = r.iv;
                var i = _.encrypt.call(this, e, t, r.key, o);
                return i.mixIn(r), i;
              },
              decrypt: function (e, t, n, o) {
                (o = this.cfg.extend(o)), (t = this._parse(t, o.format));
                var r = o.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                return (o.iv = r.iv), _.decrypt.call(this, e, t, r.key, o);
              }
            }));
        })(),
      (u.mode.CFB = (function () {
        var e = u.lib.BlockCipherMode.extend();
        function t(e, t, n, o) {
          var r,
            i = this._iv;
          i ? ((r = i.slice(0)), (this._iv = void 0)) : (r = this._prevBlock), o.encryptBlock(r, 0);
          for (var s = 0; s < n; s++) e[t + s] ^= r[s];
        }
        return (
          (e.Encryptor = e.extend({
            processBlock: function (e, n) {
              var o = this._cipher,
                r = o.blockSize;
              t.call(this, e, n, r, o), (this._prevBlock = e.slice(n, n + r));
            }
          })),
          (e.Decryptor = e.extend({
            processBlock: function (e, n) {
              var o = this._cipher,
                r = o.blockSize,
                i = e.slice(n, n + r);
              t.call(this, e, n, r, o), (this._prevBlock = i);
            }
          })),
          e
        );
      })()),
      (u.mode.CTR =
        ((r = (o = u.lib.BlockCipherMode.extend()).Encryptor =
          o.extend({
            processBlock: function (e, t) {
              var n = this._cipher,
                o = n.blockSize,
                r = this._iv,
                i = this._counter;
              r && ((i = this._counter = r.slice(0)), (this._iv = void 0));
              var s = i.slice(0);
              n.encryptBlock(s, 0), (i[o - 1] = (i[o - 1] + 1) | 0);
              for (var a = 0; a < o; a++) e[t + a] ^= s[a];
            }
          })),
        (o.Decryptor = r),
        o)),
      (u.mode.CTRGladman = (function () {
        var e = u.lib.BlockCipherMode.extend();
        function t(e) {
          if (255 == ((e >> 24) & 255)) {
            var t = (e >> 16) & 255,
              n = (e >> 8) & 255,
              o = 255 & e;
            255 === t ? ((t = 0), 255 === n ? ((n = 0), 255 === o ? (o = 0) : ++o) : ++n) : ++t,
              (e = 0),
              (e += t << 16),
              (e += n << 8),
              (e += o);
          } else e += 1 << 24;
          return e;
        }
        var n = (e.Encryptor = e.extend({
          processBlock: function (e, n) {
            var o = this._cipher,
              r = o.blockSize,
              i = this._iv,
              s = this._counter;
            i && ((s = this._counter = i.slice(0)), (this._iv = void 0)),
              (function (e) {
                0 === (e[0] = t(e[0])) && (e[1] = t(e[1]));
              })(s);
            var a = s.slice(0);
            o.encryptBlock(a, 0);
            for (var c = 0; c < r; c++) e[n + c] ^= a[c];
          }
        }));
        return (e.Decryptor = n), e;
      })()),
      (u.mode.OFB = (function () {
        var e = u.lib.BlockCipherMode.extend(),
          t = (e.Encryptor = e.extend({
            processBlock: function (e, t) {
              var n = this._cipher,
                o = n.blockSize,
                r = this._iv,
                i = this._keystream;
              r && ((i = this._keystream = r.slice(0)), (this._iv = void 0)), n.encryptBlock(i, 0);
              for (var s = 0; s < o; s++) e[t + s] ^= i[s];
            }
          }));
        return (e.Decryptor = t), e;
      })()),
      (u.mode.ECB =
        (((n = u.lib.BlockCipherMode.extend()).Encryptor = n.extend({
          processBlock: function (e, t) {
            this._cipher.encryptBlock(e, t);
          }
        })),
        (n.Decryptor = n.extend({
          processBlock: function (e, t) {
            this._cipher.decryptBlock(e, t);
          }
        })),
        n)),
      (u.pad.AnsiX923 = {
        pad: function (e, t) {
          var n = e.sigBytes,
            o = 4 * t,
            r = o - (n % o),
            i = n + r - 1;
          e.clamp(), (e.words[i >>> 2] |= r << (24 - (i % 4) * 8)), (e.sigBytes += r);
        },
        unpad: function (e) {
          var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
          e.sigBytes -= t;
        }
      }),
      (u.pad.Iso10126 = {
        pad: function (e, t) {
          var n = 4 * t,
            o = n - (e.sigBytes % n);
          e.concat(u.lib.WordArray.random(o - 1)).concat(u.lib.WordArray.create([o << 24], 1));
        },
        unpad: function (e) {
          var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
          e.sigBytes -= t;
        }
      }),
      (u.pad.Iso97971 = {
        pad: function (e, t) {
          e.concat(u.lib.WordArray.create([2147483648], 1)), u.pad.ZeroPadding.pad(e, t);
        },
        unpad: function (e) {
          u.pad.ZeroPadding.unpad(e), e.sigBytes--;
        }
      }),
      (u.pad.ZeroPadding = {
        pad: function (e, t) {
          var n = 4 * t;
          e.clamp(), (e.sigBytes += n - (e.sigBytes % n || n));
        },
        unpad: function (e) {
          var t = e.words,
            n = e.sigBytes - 1;
          for (n = e.sigBytes - 1; n >= 0; n--)
            if ((t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) {
              e.sigBytes = n + 1;
              break;
            }
        }
      }),
      (u.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
      (function (e) {
        var t = u,
          n = t.lib.CipherParams,
          o = t.enc.Hex;
        t.format.Hex = {
          stringify: function (e) {
            return e.ciphertext.toString(o);
          },
          parse: function (e) {
            var t = o.parse(e);
            return n.create({ ciphertext: t });
          }
        };
      })(),
      (function () {
        var e = u,
          t = e.lib.BlockCipher,
          n = e.algo,
          o = [],
          r = [],
          i = [],
          s = [],
          a = [],
          c = [],
          l = [],
          d = [],
          f = [],
          h = [];
        !(function () {
          for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
          var n = 0,
            u = 0;
          for (t = 0; t < 256; t++) {
            var m = u ^ (u << 1) ^ (u << 2) ^ (u << 3) ^ (u << 4);
            (m = (m >>> 8) ^ (255 & m) ^ 99), (o[n] = m), (r[m] = n);
            var p = e[n],
              g = e[p],
              _ = e[g],
              y = (257 * e[m]) ^ (16843008 * m);
            (i[n] = (y << 24) | (y >>> 8)),
              (s[n] = (y << 16) | (y >>> 16)),
              (a[n] = (y << 8) | (y >>> 24)),
              (c[n] = y),
              (y = (16843009 * _) ^ (65537 * g) ^ (257 * p) ^ (16843008 * n)),
              (l[m] = (y << 24) | (y >>> 8)),
              (d[m] = (y << 16) | (y >>> 16)),
              (f[m] = (y << 8) | (y >>> 24)),
              (h[m] = y),
              n ? ((n = p ^ e[e[e[_ ^ p]]]), (u ^= e[e[u]])) : (n = u = 1);
          }
        })();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
          p = (n.AES = t.extend({
            _doReset: function () {
              if (!this._nRounds || this._keyPriorReset !== this._key) {
                for (
                  var e = (this._keyPriorReset = this._key),
                    t = e.words,
                    n = e.sigBytes / 4,
                    r = 4 * ((this._nRounds = n + 6) + 1),
                    i = (this._keySchedule = []),
                    s = 0;
                  s < r;
                  s++
                )
                  s < n
                    ? (i[s] = t[s])
                    : ((u = i[s - 1]),
                      s % n
                        ? n > 6 &&
                          s % n == 4 &&
                          (u = (o[u >>> 24] << 24) | (o[(u >>> 16) & 255] << 16) | (o[(u >>> 8) & 255] << 8) | o[255 & u])
                        : ((u =
                            (o[(u = (u << 8) | (u >>> 24)) >>> 24] << 24) |
                            (o[(u >>> 16) & 255] << 16) |
                            (o[(u >>> 8) & 255] << 8) |
                            o[255 & u]),
                          (u ^= m[(s / n) | 0] << 24)),
                      (i[s] = i[s - n] ^ u));
                for (var a = (this._invKeySchedule = []), c = 0; c < r; c++) {
                  if (((s = r - c), c % 4)) var u = i[s];
                  else u = i[s - 4];
                  a[c] = c < 4 || s <= 4 ? u : l[o[u >>> 24]] ^ d[o[(u >>> 16) & 255]] ^ f[o[(u >>> 8) & 255]] ^ h[o[255 & u]];
                }
              }
            },
            encryptBlock: function (e, t) {
              this._doCryptBlock(e, t, this._keySchedule, i, s, a, c, o);
            },
            decryptBlock: function (e, t) {
              var n = e[t + 1];
              (e[t + 1] = e[t + 3]),
                (e[t + 3] = n),
                this._doCryptBlock(e, t, this._invKeySchedule, l, d, f, h, r),
                (n = e[t + 1]),
                (e[t + 1] = e[t + 3]),
                (e[t + 3] = n);
            },
            _doCryptBlock: function (e, t, n, o, r, i, s, a) {
              for (
                var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], h = 4, m = 1;
                m < c;
                m++
              ) {
                var p = o[l >>> 24] ^ r[(u >>> 16) & 255] ^ i[(d >>> 8) & 255] ^ s[255 & f] ^ n[h++],
                  g = o[u >>> 24] ^ r[(d >>> 16) & 255] ^ i[(f >>> 8) & 255] ^ s[255 & l] ^ n[h++],
                  _ = o[d >>> 24] ^ r[(f >>> 16) & 255] ^ i[(l >>> 8) & 255] ^ s[255 & u] ^ n[h++],
                  y = o[f >>> 24] ^ r[(l >>> 16) & 255] ^ i[(u >>> 8) & 255] ^ s[255 & d] ^ n[h++];
                (l = p), (u = g), (d = _), (f = y);
              }
              (p = ((a[l >>> 24] << 24) | (a[(u >>> 16) & 255] << 16) | (a[(d >>> 8) & 255] << 8) | a[255 & f]) ^ n[h++]),
                (g = ((a[u >>> 24] << 24) | (a[(d >>> 16) & 255] << 16) | (a[(f >>> 8) & 255] << 8) | a[255 & l]) ^ n[h++]),
                (_ = ((a[d >>> 24] << 24) | (a[(f >>> 16) & 255] << 16) | (a[(l >>> 8) & 255] << 8) | a[255 & u]) ^ n[h++]),
                (y = ((a[f >>> 24] << 24) | (a[(l >>> 16) & 255] << 16) | (a[(u >>> 8) & 255] << 8) | a[255 & d]) ^ n[h++]),
                (e[t] = p),
                (e[t + 1] = g),
                (e[t + 2] = _),
                (e[t + 3] = y);
            },
            keySize: 8
          }));
        e.AES = t._createHelper(p);
      })(),
      (function () {
        var e = u,
          t = e.lib,
          n = t.WordArray,
          o = t.BlockCipher,
          r = e.algo,
          i = [
            57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31,
            23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4
          ],
          s = [
            14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45,
            33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32
          ],
          a = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
          c = [
            {
              0: 8421888,
              268435456: 32768,
              536870912: 8421378,
              805306368: 2,
              1073741824: 512,
              1342177280: 8421890,
              1610612736: 8389122,
              1879048192: 8388608,
              2147483648: 514,
              2415919104: 8389120,
              2684354560: 33280,
              2952790016: 8421376,
              3221225472: 32770,
              3489660928: 8388610,
              3758096384: 0,
              4026531840: 33282,
              134217728: 0,
              402653184: 8421890,
              671088640: 33282,
              939524096: 32768,
              1207959552: 8421888,
              1476395008: 512,
              1744830464: 8421378,
              2013265920: 2,
              2281701376: 8389120,
              2550136832: 33280,
              2818572288: 8421376,
              3087007744: 8389122,
              3355443200: 8388610,
              3623878656: 32770,
              3892314112: 514,
              4160749568: 8388608,
              1: 32768,
              268435457: 2,
              536870913: 8421888,
              805306369: 8388608,
              1073741825: 8421378,
              1342177281: 33280,
              1610612737: 512,
              1879048193: 8389122,
              2147483649: 8421890,
              2415919105: 8421376,
              2684354561: 8388610,
              2952790017: 33282,
              3221225473: 514,
              3489660929: 8389120,
              3758096385: 32770,
              4026531841: 0,
              134217729: 8421890,
              402653185: 8421376,
              671088641: 8388608,
              939524097: 512,
              1207959553: 32768,
              1476395009: 8388610,
              1744830465: 2,
              2013265921: 33282,
              2281701377: 32770,
              2550136833: 8389122,
              2818572289: 514,
              3087007745: 8421888,
              3355443201: 8389120,
              3623878657: 0,
              3892314113: 33280,
              4160749569: 8421378
            },
            {
              0: 1074282512,
              16777216: 16384,
              33554432: 524288,
              50331648: 1074266128,
              67108864: 1073741840,
              83886080: 1074282496,
              100663296: 1073758208,
              117440512: 16,
              134217728: 540672,
              150994944: 1073758224,
              167772160: 1073741824,
              184549376: 540688,
              201326592: 524304,
              218103808: 0,
              234881024: 16400,
              251658240: 1074266112,
              8388608: 1073758208,
              25165824: 540688,
              41943040: 16,
              58720256: 1073758224,
              75497472: 1074282512,
              92274688: 1073741824,
              109051904: 524288,
              125829120: 1074266128,
              142606336: 524304,
              159383552: 0,
              176160768: 16384,
              192937984: 1074266112,
              209715200: 1073741840,
              226492416: 540672,
              243269632: 1074282496,
              260046848: 16400,
              268435456: 0,
              285212672: 1074266128,
              301989888: 1073758224,
              318767104: 1074282496,
              335544320: 1074266112,
              352321536: 16,
              369098752: 540688,
              385875968: 16384,
              402653184: 16400,
              419430400: 524288,
              436207616: 524304,
              452984832: 1073741840,
              469762048: 540672,
              486539264: 1073758208,
              503316480: 1073741824,
              520093696: 1074282512,
              276824064: 540688,
              293601280: 524288,
              310378496: 1074266112,
              327155712: 16384,
              343932928: 1073758208,
              360710144: 1074282512,
              377487360: 16,
              394264576: 1073741824,
              411041792: 1074282496,
              427819008: 1073741840,
              444596224: 1073758224,
              461373440: 524304,
              478150656: 0,
              494927872: 16400,
              511705088: 1074266128,
              528482304: 540672
            },
            {
              0: 260,
              1048576: 0,
              2097152: 67109120,
              3145728: 65796,
              4194304: 65540,
              5242880: 67108868,
              6291456: 67174660,
              7340032: 67174400,
              8388608: 67108864,
              9437184: 67174656,
              10485760: 65792,
              11534336: 67174404,
              12582912: 67109124,
              13631488: 65536,
              14680064: 4,
              15728640: 256,
              524288: 67174656,
              1572864: 67174404,
              2621440: 0,
              3670016: 67109120,
              4718592: 67108868,
              5767168: 65536,
              6815744: 65540,
              7864320: 260,
              8912896: 4,
              9961472: 256,
              11010048: 67174400,
              12058624: 65796,
              13107200: 65792,
              14155776: 67109124,
              15204352: 67174660,
              16252928: 67108864,
              16777216: 67174656,
              17825792: 65540,
              18874368: 65536,
              19922944: 67109120,
              20971520: 256,
              22020096: 67174660,
              23068672: 67108868,
              24117248: 0,
              25165824: 67109124,
              26214400: 67108864,
              27262976: 4,
              28311552: 65792,
              29360128: 67174400,
              30408704: 260,
              31457280: 65796,
              32505856: 67174404,
              17301504: 67108864,
              18350080: 260,
              19398656: 67174656,
              20447232: 0,
              21495808: 65540,
              22544384: 67109120,
              23592960: 256,
              24641536: 67174404,
              25690112: 65536,
              26738688: 67174660,
              27787264: 65796,
              28835840: 67108868,
              29884416: 67109124,
              30932992: 67174400,
              31981568: 4,
              33030144: 65792
            },
            {
              0: 2151682048,
              65536: 2147487808,
              131072: 4198464,
              196608: 2151677952,
              262144: 0,
              327680: 4198400,
              393216: 2147483712,
              458752: 4194368,
              524288: 2147483648,
              589824: 4194304,
              655360: 64,
              720896: 2147487744,
              786432: 2151678016,
              851968: 4160,
              917504: 4096,
              983040: 2151682112,
              32768: 2147487808,
              98304: 64,
              163840: 2151678016,
              229376: 2147487744,
              294912: 4198400,
              360448: 2151682112,
              425984: 0,
              491520: 2151677952,
              557056: 4096,
              622592: 2151682048,
              688128: 4194304,
              753664: 4160,
              819200: 2147483648,
              884736: 4194368,
              950272: 4198464,
              1015808: 2147483712,
              1048576: 4194368,
              1114112: 4198400,
              1179648: 2147483712,
              1245184: 0,
              1310720: 4160,
              1376256: 2151678016,
              1441792: 2151682048,
              1507328: 2147487808,
              1572864: 2151682112,
              1638400: 2147483648,
              1703936: 2151677952,
              1769472: 4198464,
              1835008: 2147487744,
              1900544: 4194304,
              1966080: 64,
              2031616: 4096,
              1081344: 2151677952,
              1146880: 2151682112,
              1212416: 0,
              1277952: 4198400,
              1343488: 4194368,
              1409024: 2147483648,
              1474560: 2147487808,
              1540096: 64,
              1605632: 2147483712,
              1671168: 4096,
              1736704: 2147487744,
              1802240: 2151678016,
              1867776: 4160,
              1933312: 2151682048,
              1998848: 4194304,
              2064384: 4198464
            },
            {
              0: 128,
              4096: 17039360,
              8192: 262144,
              12288: 536870912,
              16384: 537133184,
              20480: 16777344,
              24576: 553648256,
              28672: 262272,
              32768: 16777216,
              36864: 537133056,
              40960: 536871040,
              45056: 553910400,
              49152: 553910272,
              53248: 0,
              57344: 17039488,
              61440: 553648128,
              2048: 17039488,
              6144: 553648256,
              10240: 128,
              14336: 17039360,
              18432: 262144,
              22528: 537133184,
              26624: 553910272,
              30720: 536870912,
              34816: 537133056,
              38912: 0,
              43008: 553910400,
              47104: 16777344,
              51200: 536871040,
              55296: 553648128,
              59392: 16777216,
              63488: 262272,
              65536: 262144,
              69632: 128,
              73728: 536870912,
              77824: 553648256,
              81920: 16777344,
              86016: 553910272,
              90112: 537133184,
              94208: 16777216,
              98304: 553910400,
              102400: 553648128,
              106496: 17039360,
              110592: 537133056,
              114688: 262272,
              118784: 536871040,
              122880: 0,
              126976: 17039488,
              67584: 553648256,
              71680: 16777216,
              75776: 17039360,
              79872: 537133184,
              83968: 536870912,
              88064: 17039488,
              92160: 128,
              96256: 553910272,
              100352: 262272,
              104448: 553910400,
              108544: 0,
              112640: 553648128,
              116736: 16777344,
              120832: 262144,
              124928: 537133056,
              129024: 536871040
            },
            {
              0: 268435464,
              256: 8192,
              512: 270532608,
              768: 270540808,
              1024: 268443648,
              1280: 2097152,
              1536: 2097160,
              1792: 268435456,
              2048: 0,
              2304: 268443656,
              2560: 2105344,
              2816: 8,
              3072: 270532616,
              3328: 2105352,
              3584: 8200,
              3840: 270540800,
              128: 270532608,
              384: 270540808,
              640: 8,
              896: 2097152,
              1152: 2105352,
              1408: 268435464,
              1664: 268443648,
              1920: 8200,
              2176: 2097160,
              2432: 8192,
              2688: 268443656,
              2944: 270532616,
              3200: 0,
              3456: 270540800,
              3712: 2105344,
              3968: 268435456,
              4096: 268443648,
              4352: 270532616,
              4608: 270540808,
              4864: 8200,
              5120: 2097152,
              5376: 268435456,
              5632: 268435464,
              5888: 2105344,
              6144: 2105352,
              6400: 0,
              6656: 8,
              6912: 270532608,
              7168: 8192,
              7424: 268443656,
              7680: 270540800,
              7936: 2097160,
              4224: 8,
              4480: 2105344,
              4736: 2097152,
              4992: 268435464,
              5248: 268443648,
              5504: 8200,
              5760: 270540808,
              6016: 270532608,
              6272: 270540800,
              6528: 270532616,
              6784: 8192,
              7040: 2105352,
              7296: 2097160,
              7552: 0,
              7808: 268435456,
              8064: 268443656
            },
            {
              0: 1048576,
              16: 33555457,
              32: 1024,
              48: 1049601,
              64: 34604033,
              80: 0,
              96: 1,
              112: 34603009,
              128: 33555456,
              144: 1048577,
              160: 33554433,
              176: 34604032,
              192: 34603008,
              208: 1025,
              224: 1049600,
              240: 33554432,
              8: 34603009,
              24: 0,
              40: 33555457,
              56: 34604032,
              72: 1048576,
              88: 33554433,
              104: 33554432,
              120: 1025,
              136: 1049601,
              152: 33555456,
              168: 34603008,
              184: 1048577,
              200: 1024,
              216: 34604033,
              232: 1,
              248: 1049600,
              256: 33554432,
              272: 1048576,
              288: 33555457,
              304: 34603009,
              320: 1048577,
              336: 33555456,
              352: 34604032,
              368: 1049601,
              384: 1025,
              400: 34604033,
              416: 1049600,
              432: 1,
              448: 0,
              464: 34603008,
              480: 33554433,
              496: 1024,
              264: 1049600,
              280: 33555457,
              296: 34603009,
              312: 1,
              328: 33554432,
              344: 1048576,
              360: 1025,
              376: 34604032,
              392: 33554433,
              408: 34603008,
              424: 0,
              440: 34604033,
              456: 1049601,
              472: 1024,
              488: 33555456,
              504: 1048577
            },
            {
              0: 134219808,
              1: 131072,
              2: 134217728,
              3: 32,
              4: 131104,
              5: 134350880,
              6: 134350848,
              7: 2048,
              8: 134348800,
              9: 134219776,
              10: 133120,
              11: 134348832,
              12: 2080,
              13: 0,
              14: 134217760,
              15: 133152,
              2147483648: 2048,
              2147483649: 134350880,
              2147483650: 134219808,
              2147483651: 134217728,
              2147483652: 134348800,
              2147483653: 133120,
              2147483654: 133152,
              2147483655: 32,
              2147483656: 134217760,
              2147483657: 2080,
              2147483658: 131104,
              2147483659: 134350848,
              2147483660: 0,
              2147483661: 134348832,
              2147483662: 134219776,
              2147483663: 131072,
              16: 133152,
              17: 134350848,
              18: 32,
              19: 2048,
              20: 134219776,
              21: 134217760,
              22: 134348832,
              23: 131072,
              24: 0,
              25: 131104,
              26: 134348800,
              27: 134219808,
              28: 134350880,
              29: 133120,
              30: 2080,
              31: 134217728,
              2147483664: 131072,
              2147483665: 2048,
              2147483666: 134348832,
              2147483667: 133152,
              2147483668: 32,
              2147483669: 134348800,
              2147483670: 134217728,
              2147483671: 134219808,
              2147483672: 134350880,
              2147483673: 134217760,
              2147483674: 134219776,
              2147483675: 0,
              2147483676: 133120,
              2147483677: 2080,
              2147483678: 131104,
              2147483679: 134350848
            }
          ],
          l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
          d = (r.DES = o.extend({
            _doReset: function () {
              for (var e = this._key.words, t = [], n = 0; n < 56; n++) {
                var o = i[n] - 1;
                t[n] = (e[o >>> 5] >>> (31 - (o % 32))) & 1;
              }
              for (var r = (this._subKeys = []), c = 0; c < 16; c++) {
                var l = (r[c] = []),
                  u = a[c];
                for (n = 0; n < 24; n++)
                  (l[(n / 6) | 0] |= t[(s[n] - 1 + u) % 28] << (31 - (n % 6))),
                    (l[4 + ((n / 6) | 0)] |= t[28 + ((s[n + 24] - 1 + u) % 28)] << (31 - (n % 6)));
                for (l[0] = (l[0] << 1) | (l[0] >>> 31), n = 1; n < 7; n++) l[n] = l[n] >>> (4 * (n - 1) + 3);
                l[7] = (l[7] << 5) | (l[7] >>> 27);
              }
              var d = (this._invSubKeys = []);
              for (n = 0; n < 16; n++) d[n] = r[15 - n];
            },
            encryptBlock: function (e, t) {
              this._doCryptBlock(e, t, this._subKeys);
            },
            decryptBlock: function (e, t) {
              this._doCryptBlock(e, t, this._invSubKeys);
            },
            _doCryptBlock: function (e, t, n) {
              (this._lBlock = e[t]),
                (this._rBlock = e[t + 1]),
                f.call(this, 4, 252645135),
                f.call(this, 16, 65535),
                h.call(this, 2, 858993459),
                h.call(this, 8, 16711935),
                f.call(this, 1, 1431655765);
              for (var o = 0; o < 16; o++) {
                for (var r = n[o], i = this._lBlock, s = this._rBlock, a = 0, u = 0; u < 8; u++) a |= c[u][((s ^ r[u]) & l[u]) >>> 0];
                (this._lBlock = s), (this._rBlock = i ^ a);
              }
              var d = this._lBlock;
              (this._lBlock = this._rBlock),
                (this._rBlock = d),
                f.call(this, 1, 1431655765),
                h.call(this, 8, 16711935),
                h.call(this, 2, 858993459),
                f.call(this, 16, 65535),
                f.call(this, 4, 252645135),
                (e[t] = this._lBlock),
                (e[t + 1] = this._rBlock);
            },
            keySize: 2,
            ivSize: 2,
            blockSize: 2
          }));
        function f(e, t) {
          var n = ((this._lBlock >>> e) ^ this._rBlock) & t;
          (this._rBlock ^= n), (this._lBlock ^= n << e);
        }
        function h(e, t) {
          var n = ((this._rBlock >>> e) ^ this._lBlock) & t;
          (this._lBlock ^= n), (this._rBlock ^= n << e);
        }
        e.DES = o._createHelper(d);
        var m = (r.TripleDES = o.extend({
          _doReset: function () {
            var e = this._key.words;
            if (2 !== e.length && 4 !== e.length && e.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var t = e.slice(0, 2),
              o = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4),
              r = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
            (this._des1 = d.createEncryptor(n.create(t))),
              (this._des2 = d.createEncryptor(n.create(o))),
              (this._des3 = d.createEncryptor(n.create(r)));
          },
          encryptBlock: function (e, t) {
            this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
          },
          decryptBlock: function (e, t) {
            this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        }));
        e.TripleDES = o._createHelper(m);
      })(),
      (function () {
        var e = u,
          t = e.lib.StreamCipher,
          n = e.algo,
          o = (n.RC4 = t.extend({
            _doReset: function () {
              for (var e = this._key, t = e.words, n = e.sigBytes, o = (this._S = []), r = 0; r < 256; r++) o[r] = r;
              r = 0;
              for (var i = 0; r < 256; r++) {
                var s = r % n,
                  a = (t[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
                i = (i + o[r] + a) % 256;
                var c = o[r];
                (o[r] = o[i]), (o[i] = c);
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function (e, t) {
              e[t] ^= r.call(this);
            },
            keySize: 8,
            ivSize: 0
          }));
        function r() {
          for (var e = this._S, t = this._i, n = this._j, o = 0, r = 0; r < 4; r++) {
            n = (n + e[(t = (t + 1) % 256)]) % 256;
            var i = e[t];
            (e[t] = e[n]), (e[n] = i), (o |= e[(e[t] + e[n]) % 256] << (24 - 8 * r));
          }
          return (this._i = t), (this._j = n), o;
        }
        e.RC4 = t._createHelper(o);
        var i = (n.RC4Drop = o.extend({
          cfg: o.cfg.extend({ drop: 192 }),
          _doReset: function () {
            o._doReset.call(this);
            for (var e = this.cfg.drop; e > 0; e--) r.call(this);
          }
        }));
        e.RC4Drop = t._createHelper(i);
      })(),
      (function () {
        var e = u,
          t = e.lib.StreamCipher,
          n = e.algo,
          o = [],
          r = [],
          i = [],
          s = (n.Rabbit = t.extend({
            _doReset: function () {
              for (var e = this._key.words, t = this.cfg.iv, n = 0; n < 4; n++)
                e[n] = (16711935 & ((e[n] << 8) | (e[n] >>> 24))) | (4278255360 & ((e[n] << 24) | (e[n] >>> 8)));
              var o = (this._X = [
                  e[0],
                  (e[3] << 16) | (e[2] >>> 16),
                  e[1],
                  (e[0] << 16) | (e[3] >>> 16),
                  e[2],
                  (e[1] << 16) | (e[0] >>> 16),
                  e[3],
                  (e[2] << 16) | (e[1] >>> 16)
                ]),
                r = (this._C = [
                  (e[2] << 16) | (e[2] >>> 16),
                  (4294901760 & e[0]) | (65535 & e[1]),
                  (e[3] << 16) | (e[3] >>> 16),
                  (4294901760 & e[1]) | (65535 & e[2]),
                  (e[0] << 16) | (e[0] >>> 16),
                  (4294901760 & e[2]) | (65535 & e[3]),
                  (e[1] << 16) | (e[1] >>> 16),
                  (4294901760 & e[3]) | (65535 & e[0])
                ]);
              for (this._b = 0, n = 0; n < 4; n++) a.call(this);
              for (n = 0; n < 8; n++) r[n] ^= o[(n + 4) & 7];
              if (t) {
                var i = t.words,
                  s = i[0],
                  c = i[1],
                  l = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8))),
                  u = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8))),
                  d = (l >>> 16) | (4294901760 & u),
                  f = (u << 16) | (65535 & l);
                for (r[0] ^= l, r[1] ^= d, r[2] ^= u, r[3] ^= f, r[4] ^= l, r[5] ^= d, r[6] ^= u, r[7] ^= f, n = 0; n < 4; n++)
                  a.call(this);
              }
            },
            _doProcessBlock: function (e, t) {
              var n = this._X;
              a.call(this),
                (o[0] = n[0] ^ (n[5] >>> 16) ^ (n[3] << 16)),
                (o[1] = n[2] ^ (n[7] >>> 16) ^ (n[5] << 16)),
                (o[2] = n[4] ^ (n[1] >>> 16) ^ (n[7] << 16)),
                (o[3] = n[6] ^ (n[3] >>> 16) ^ (n[1] << 16));
              for (var r = 0; r < 4; r++)
                (o[r] = (16711935 & ((o[r] << 8) | (o[r] >>> 24))) | (4278255360 & ((o[r] << 24) | (o[r] >>> 8)))), (e[t + r] ^= o[r]);
            },
            blockSize: 4,
            ivSize: 2
          }));
        function a() {
          for (var e = this._X, t = this._C, n = 0; n < 8; n++) r[n] = t[n];
          for (
            t[0] = (t[0] + 1295307597 + this._b) | 0,
              t[1] = (t[1] + 3545052371 + (t[0] >>> 0 < r[0] >>> 0 ? 1 : 0)) | 0,
              t[2] = (t[2] + 886263092 + (t[1] >>> 0 < r[1] >>> 0 ? 1 : 0)) | 0,
              t[3] = (t[3] + 1295307597 + (t[2] >>> 0 < r[2] >>> 0 ? 1 : 0)) | 0,
              t[4] = (t[4] + 3545052371 + (t[3] >>> 0 < r[3] >>> 0 ? 1 : 0)) | 0,
              t[5] = (t[5] + 886263092 + (t[4] >>> 0 < r[4] >>> 0 ? 1 : 0)) | 0,
              t[6] = (t[6] + 1295307597 + (t[5] >>> 0 < r[5] >>> 0 ? 1 : 0)) | 0,
              t[7] = (t[7] + 3545052371 + (t[6] >>> 0 < r[6] >>> 0 ? 1 : 0)) | 0,
              this._b = t[7] >>> 0 < r[7] >>> 0 ? 1 : 0,
              n = 0;
            n < 8;
            n++
          ) {
            var o = e[n] + t[n],
              s = 65535 & o,
              a = o >>> 16,
              c = ((((s * s) >>> 17) + s * a) >>> 15) + a * a,
              l = (((4294901760 & o) * o) | 0) + (((65535 & o) * o) | 0);
            i[n] = c ^ l;
          }
          (e[0] = (i[0] + ((i[7] << 16) | (i[7] >>> 16)) + ((i[6] << 16) | (i[6] >>> 16))) | 0),
            (e[1] = (i[1] + ((i[0] << 8) | (i[0] >>> 24)) + i[7]) | 0),
            (e[2] = (i[2] + ((i[1] << 16) | (i[1] >>> 16)) + ((i[0] << 16) | (i[0] >>> 16))) | 0),
            (e[3] = (i[3] + ((i[2] << 8) | (i[2] >>> 24)) + i[1]) | 0),
            (e[4] = (i[4] + ((i[3] << 16) | (i[3] >>> 16)) + ((i[2] << 16) | (i[2] >>> 16))) | 0),
            (e[5] = (i[5] + ((i[4] << 8) | (i[4] >>> 24)) + i[3]) | 0),
            (e[6] = (i[6] + ((i[5] << 16) | (i[5] >>> 16)) + ((i[4] << 16) | (i[4] >>> 16))) | 0),
            (e[7] = (i[7] + ((i[6] << 8) | (i[6] >>> 24)) + i[5]) | 0);
        }
        e.Rabbit = t._createHelper(s);
      })(),
      (function () {
        var e = u,
          t = e.lib.StreamCipher,
          n = e.algo,
          o = [],
          r = [],
          i = [],
          s = (n.RabbitLegacy = t.extend({
            _doReset: function () {
              var e = this._key.words,
                t = this.cfg.iv,
                n = (this._X = [
                  e[0],
                  (e[3] << 16) | (e[2] >>> 16),
                  e[1],
                  (e[0] << 16) | (e[3] >>> 16),
                  e[2],
                  (e[1] << 16) | (e[0] >>> 16),
                  e[3],
                  (e[2] << 16) | (e[1] >>> 16)
                ]),
                o = (this._C = [
                  (e[2] << 16) | (e[2] >>> 16),
                  (4294901760 & e[0]) | (65535 & e[1]),
                  (e[3] << 16) | (e[3] >>> 16),
                  (4294901760 & e[1]) | (65535 & e[2]),
                  (e[0] << 16) | (e[0] >>> 16),
                  (4294901760 & e[2]) | (65535 & e[3]),
                  (e[1] << 16) | (e[1] >>> 16),
                  (4294901760 & e[3]) | (65535 & e[0])
                ]);
              this._b = 0;
              for (var r = 0; r < 4; r++) a.call(this);
              for (r = 0; r < 8; r++) o[r] ^= n[(r + 4) & 7];
              if (t) {
                var i = t.words,
                  s = i[0],
                  c = i[1],
                  l = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8))),
                  u = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8))),
                  d = (l >>> 16) | (4294901760 & u),
                  f = (u << 16) | (65535 & l);
                for (o[0] ^= l, o[1] ^= d, o[2] ^= u, o[3] ^= f, o[4] ^= l, o[5] ^= d, o[6] ^= u, o[7] ^= f, r = 0; r < 4; r++)
                  a.call(this);
              }
            },
            _doProcessBlock: function (e, t) {
              var n = this._X;
              a.call(this),
                (o[0] = n[0] ^ (n[5] >>> 16) ^ (n[3] << 16)),
                (o[1] = n[2] ^ (n[7] >>> 16) ^ (n[5] << 16)),
                (o[2] = n[4] ^ (n[1] >>> 16) ^ (n[7] << 16)),
                (o[3] = n[6] ^ (n[3] >>> 16) ^ (n[1] << 16));
              for (var r = 0; r < 4; r++)
                (o[r] = (16711935 & ((o[r] << 8) | (o[r] >>> 24))) | (4278255360 & ((o[r] << 24) | (o[r] >>> 8)))), (e[t + r] ^= o[r]);
            },
            blockSize: 4,
            ivSize: 2
          }));
        function a() {
          for (var e = this._X, t = this._C, n = 0; n < 8; n++) r[n] = t[n];
          for (
            t[0] = (t[0] + 1295307597 + this._b) | 0,
              t[1] = (t[1] + 3545052371 + (t[0] >>> 0 < r[0] >>> 0 ? 1 : 0)) | 0,
              t[2] = (t[2] + 886263092 + (t[1] >>> 0 < r[1] >>> 0 ? 1 : 0)) | 0,
              t[3] = (t[3] + 1295307597 + (t[2] >>> 0 < r[2] >>> 0 ? 1 : 0)) | 0,
              t[4] = (t[4] + 3545052371 + (t[3] >>> 0 < r[3] >>> 0 ? 1 : 0)) | 0,
              t[5] = (t[5] + 886263092 + (t[4] >>> 0 < r[4] >>> 0 ? 1 : 0)) | 0,
              t[6] = (t[6] + 1295307597 + (t[5] >>> 0 < r[5] >>> 0 ? 1 : 0)) | 0,
              t[7] = (t[7] + 3545052371 + (t[6] >>> 0 < r[6] >>> 0 ? 1 : 0)) | 0,
              this._b = t[7] >>> 0 < r[7] >>> 0 ? 1 : 0,
              n = 0;
            n < 8;
            n++
          ) {
            var o = e[n] + t[n],
              s = 65535 & o,
              a = o >>> 16,
              c = ((((s * s) >>> 17) + s * a) >>> 15) + a * a,
              l = (((4294901760 & o) * o) | 0) + (((65535 & o) * o) | 0);
            i[n] = c ^ l;
          }
          (e[0] = (i[0] + ((i[7] << 16) | (i[7] >>> 16)) + ((i[6] << 16) | (i[6] >>> 16))) | 0),
            (e[1] = (i[1] + ((i[0] << 8) | (i[0] >>> 24)) + i[7]) | 0),
            (e[2] = (i[2] + ((i[1] << 16) | (i[1] >>> 16)) + ((i[0] << 16) | (i[0] >>> 16))) | 0),
            (e[3] = (i[3] + ((i[2] << 8) | (i[2] >>> 24)) + i[1]) | 0),
            (e[4] = (i[4] + ((i[3] << 16) | (i[3] >>> 16)) + ((i[2] << 16) | (i[2] >>> 16))) | 0),
            (e[5] = (i[5] + ((i[4] << 8) | (i[4] >>> 24)) + i[3]) | 0),
            (e[6] = (i[6] + ((i[5] << 16) | (i[5] >>> 16)) + ((i[4] << 16) | (i[4] >>> 16))) | 0),
            (e[7] = (i[7] + ((i[6] << 8) | (i[6] >>> 24)) + i[5]) | 0);
        }
        e.RabbitLegacy = t._createHelper(s);
      })(),
      u);
  })(F);
  class P {
    constructor(e, t) {
      (this.m_name = e || void 0),
        (this.m_uuid = `${1e17 * Math.random()}${1e17 * Math.random()}`),
        (this.m_service = t.service || void 0),
        (this.m_wnd = t.wnd || void 0),
        (this.m_port = t.port || void 0),
        (this.m_enableWindowMessages = Boolean(t.enableWindowMessages || !1)),
        (this.m_messageId = 0),
        (this.m_postMessages = {}),
        (this.m_messageDelegates = {}),
        (this.m_messageHandler = (e) => {
          this.onMessage(this, e);
        }),
        (this.m_unloadHandler = () => {
          this.notifyDisconnect();
        }),
        (this.m_defaultMessageDelegate = t.defaultMessageDelegate || void 0),
        window.addEventListener("unload", this.m_unloadHandler);
    }
    get service() {
      return this.m_service;
    }
    get window() {
      return this.m_wnd;
    }
    get windowIsClosed() {
      try {
        return this.m_wnd.closed;
      } catch (e) {}
      return !1;
    }
    get uuid() {
      return this.m_uuid;
    }
    enable(e) {
      e
        ? (this.m_enableWindowMessages && this.m_wnd && window.addEventListener("message", this.m_messageHandler, !0),
          this.m_port && (this.m_port.addEventListener("message", this.m_messageHandler, !0), this.m_port.start()))
        : (this.m_port && this.m_port.removeEventListener("message", this.m_messageHandler, !0),
          this.m_enableWindowMessages && this.m_wnd && window.removeEventListener("message", this.m_messageHandler, !0));
    }
    disconnect() {
      this.onDisconnect();
    }
    on(e, t) {
      if (!e || "function" != typeof t) return;
      let n = Object.prototype.hasOwnProperty.call(this.m_messageDelegates, e) ? this.m_messageDelegates[e] : void 0;
      n || ((n = []), (this.m_messageDelegates[e] = n)), n.push(t);
    }
    send(e, t, ...n) {
      if (this.windowIsClosed || (!this.m_port && !this.m_enableWindowMessages)) return void (t && t(new Error("503")));
      this.m_messageId += 1;
      const o = { message: e, messageId: `${this.m_uuid}/${this.m_messageId}`, timestamp: Date.now() };
      arguments.length > 2 && (o.arguments = [].slice.call(n)),
        t && "function" == typeof t && (this.m_postMessages[o.messageId] = { message: e, callback: t }),
        this.m_port ? this.m_port.postMessage(o) : this.m_enableWindowMessages && this.m_wnd.postMessage(o, "*");
    }
    async sendAsync(e, ...t) {
      return new Promise((n) => this.send(e, n, ...t));
    }
    respond(e, t, n) {
      if (this.windowIsClosed) return;
      if (!this.m_port && !this.m_enableWindowMessages) return;
      this.m_messageId += 1;
      const o = { message: e, messageId: `${this.m_uuid}/${this.m_messageId}`, timestamp: Date.now(), responseFor: t, result: n };
      this.m_port ? this.m_port.postMessage(o) : this.m_enableWindowMessages && this.m_wnd.postMessage(o, "*");
    }
    ping() {
      this.send(P.MSG_SRV_PING);
    }
    onMessage(e, t) {
      if ((!t.source && !t.currentTarget) || (t.source && t.source !== this.m_wnd) || (t.currentTarget && t.currentTarget !== this.m_port))
        return;
      if (!t.data || !Object.prototype.hasOwnProperty.call(t.data, "message") || !Object.prototype.hasOwnProperty.call(t.data, "messageId"))
        return;
      let o;
      if (
        (t.data.responseFor &&
          Object.prototype.hasOwnProperty.call(this.m_postMessages, t.data.responseFor) &&
          ((o = this.m_postMessages[t.data.responseFor]), delete this.m_postMessages[t.data.responseFor]),
        o)
      )
        Object.prototype.hasOwnProperty.call(t.data, "result") ? o.callback.apply(this, [t.data.result]) : o.callback.apply(this);
      else if (t.data.message !== P.MSG_SRV_PING) {
        if (t.data.message === P.MSG_SRV_DISCONNECT)
          try {
            this.onDisconnect();
          } catch (e) {
            n.error(e);
          }
        if (Object.prototype.hasOwnProperty.call(this.m_messageDelegates, t.data.message)) {
          const e = this.m_messageDelegates[t.data.message];
          for (let o = 0; o < e.length; o += 1)
            try {
              e[o].apply(this, [t.data.messageId].concat(t.data.arguments || []));
            } catch (e) {
              n.error(e);
            }
        } else this.m_defaultMessageDelegate && this.m_defaultMessageDelegate(t);
      } else this.onPing();
    }
    onPing() {
      this.send(P.MSG_SRV_PONG);
    }
    onDisconnect() {
      this.enable(!1), (this.m_wnd = void 0), (this.m_port = void 0);
    }
    notifyDisconnect() {
      window.removeEventListener("unload", this.m_unloadHandler),
        this.send(P.MSG_SRV_DISCONNECT),
        this.enable(!1),
        (this.m_wnd = void 0),
        (this.m_port = void 0);
    }
  }
  (P.MSG_SRV_AVAILABLE = "com.donjohnston.dji.service.available"),
    (P.MSG_SRV_AVAILABLE_ACK = "com.donjohnston.dji.service.available.ack"),
    (P.MSG_SRV_DISCONNECT = "com.donjohnston.dji.service.disconnect"),
    (P.MSG_SRV_PING = "com.donjohnston.dji.service.ping"),
    (P.MSG_SRV_PONG = "com.donjohnston.dji.service.pong");
  const H = {};
  let j = null,
    W = null;
  function G(e) {
    e.stopPropagation();
  }
  function z(e) {
    e.preventDefault(), e.stopPropagation();
  }
  (H.browser = function () {
    return (
      W ||
        (W = (function () {
          const e = {},
            t = window.navigator.userAgent;
          return (
            /edg/i.test(t)
              ? (e.edge = !0)
              : /trident/i.test(t) || /msie/i.test(t)
              ? (e.ie = !0)
              : /firefox/i.test(t)
              ? (e.firefox = !0)
              : /chrome/i.test(t)
              ? (e.chrome = !0)
              : /safari/i.test(t) && (e.safari = !0),
            e
          );
        })()),
      W
    );
  }),
    (H.os = function () {
      return (
        j ||
          ((j = {
            chrome: -1 !== window.navigator.userAgent.indexOf("CrOS"),
            mac: -1 !== window.navigator.userAgent.indexOf("Macintosh"),
            windows: -1 !== window.navigator.userAgent.indexOf("Windows"),
            name: ""
          }),
          j.chrome ? (j.name = "chrome") : j.mac ? (j.name = "mac") : j.windows && (j.name = "windows")),
        j
      );
    }),
    (H.sleep = async function (e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    }),
    (H.waitDOMContentLoaded = async function () {
      if ("loading" === document.readyState)
        return new Promise((e) => {
          document.addEventListener("DOMContentLoaded", e);
        });
    }),
    (H.loadFile = async function (e) {
      try {
        const t = chrome.extension.getURL(e),
          n = await fetch(t);
        return n.ok ? await n.text() : null;
      } catch (e) {
        return n.error(e), null;
      }
    }),
    (H.getMetadata = function () {
      try {
        const e = {},
          t = document.querySelector("meta[name='dji-document-title'"),
          n = document.querySelector("meta[name='dji-document-url'"),
          o = document.querySelector("meta[name='dji-document-author'"),
          r = t ? t.getAttribute("content") : null,
          i = n ? n.getAttribute("content") : null,
          s = r || document.querySelector("title"),
          a = document.querySelector("meta[name='DC.title'"),
          c = a ? a.getAttribute("content") : null;
        e.title = (s ? s.innerText : c) || "";
        const l = [],
          u = o || document.querySelector("meta[name='author'");
        let d = "";
        if (u && "" !== u.getAttribute("content")) d = u.getAttribute("content");
        else {
          const e = document.querySelector("meta[name='DC.contributor'");
          e && (d = e.getAttribute("content"));
        }
        if ("" !== d) {
          const e = d.split(" ");
          e.length > 1
            ? l.push({ given: e.slice(0, e.length - 1).join(" "), family: e[e.length - 1] })
            : u
            ? l.push({ given: "", family: d })
            : l.push({ given: d, family: "" });
        }
        e.author = l;
        const f = document.querySelector("meta[name='date'") || document.querySelector("meta[name='DC.created'"),
          h = f ? f.getAttribute("content") : new Date(Date.now()).getFullYear().toString(),
          m = /[0-9]{4,4}/.exec(h);
        m.length > 0 && ((e.issued = {}), (e.issued["date-parts"] = [[m]]));
        const p = new Date(Date.now()),
          g = p.getMonth() + 1,
          _ = p.getDate(),
          y = p.getFullYear();
        (e.accessed = {}), (e.accessed["date-parts"] = [[y, g, _]]);
        const E = document.querySelector("meta[name='medium'");
        if ((E && (e.medium = E.getAttribute("content")), (e.URL = i || window.location.href), H.isSruPwaApp())) {
          const t = document.querySelector("meta[name=dji-sr-pwa-doc-title]"),
            n = t ? t.getAttribute("content") : null;
          e.title = n || e.title;
          const o = document.querySelector("meta[name=dji-sr-pwa-doc-url]"),
            r = o ? o.getAttribute("content") : null;
          (e.URL = r), (r && 0 !== r.length) || delete e.URL;
        }
        if (e.URL) {
          const t = e.URL.split("://")[1];
          if (t) {
            const n = t.split("www.");
            e["container-title"] = 1 === n.length ? n[0].split("/")[0] : n[1].split("/")[0];
          }
        }
        return e;
      } catch (e) {
        n.error(e);
      }
      return null;
    }),
    (H.addEventListener = function (e, t, n) {
      e.hasOwnProperty(t) && "function" == typeof n && -1 === e[t].indexOf(n) && e[t].push(n);
    }),
    (H.removeEventListener = function (e, t, n) {
      if (e.hasOwnProperty(t) && "function" == typeof n) {
        const o = e[t].indexOf(n);
        -1 !== o && e[t].splice(o, 1);
      }
    }),
    (H.callListeners = function (e, t, ...o) {
      if (e && e.hasOwnProperty(t)) {
        const r = e[t];
        if (r && r.length > 0)
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            if (t)
              try {
                t.apply(this, o);
              } catch (e) {
                n.error(e);
              }
          }
      }
    }),
    (H.notifyListeners = function (e, ...t) {
      const o = e.length;
      for (let r = 0; r < o; r += 1)
        try {
          const n = e[r];
          n.apply(n, t);
        } catch (e) {
          n.error(e);
        }
    }),
    (H.callMethod = function (e, ...t) {
      if (e)
        try {
          e.apply(this, t);
        } catch (e) {
          n.error(e);
        }
    }),
    (H.checkInternetConnectionAvailable = function (e) {
      let t = null;
      const o = function (t) {
        try {
          e(t);
        } catch (e) {
          n.error(e);
        }
      };
      if (navigator.onLine)
        try {
          const e = new XMLHttpRequest(),
            n = `https://www.google.com/?random=${Math.random()}`;
          e.open("HEAD", n, !0),
            (e.onreadystatechange = function () {
              if (4 === e.readyState && e.status > 0) {
                const n = (e.status >= 200 && e.status < 300) || 304 === e.status;
                t && clearTimeout(t),
                  setTimeout(() => {
                    o(n);
                  }, 0);
              }
            }),
            e.send(),
            (t = setTimeout(() => {
              e.abort(),
                setTimeout(() => {
                  o(!1);
                }, 0);
            }, 2e3));
        } catch (e) {
          t && clearTimeout(t), o(!1);
        }
      else o(!1);
    }),
    (H.isChromeOS = function () {
      return -1 !== window.navigator.userAgent.indexOf("CrOS");
    }),
    (H.isMacOS = function () {
      return -1 !== window.navigator.userAgent.indexOf("Macintosh");
    }),
    (H.isWindowsOS = function () {
      return -1 !== window.navigator.userAgent.indexOf("Windows");
    }),
    (H.isLoginApp = function (e) {
      const t = [/.*login.*\.donjohnston\.net/, /.*login.*\.qadji\.com/, /.*login.*\.stagedji\.com/, /.*login.*\.codeiasi\.net/],
        n = (e || window.location).hostname;
      for (let e = 0; e < t.length; e += 1) if (t[e].test(n)) return !0;
      return !1;
    }),
    (H.isGoogleSearch = function (e) {
      const t = (e || window.location).hostname.split(".");
      return !((2 !== t.length && 3 !== t.length) || "google" !== t[t.length - 2] || (2 !== t.length && "www" !== t[0]));
    }),
    (H.isGoogleDrive = function (e = null) {
      return (e || window.location).hostname.startsWith("drive.google.com");
    }),
    (H.isGoogleClassroom = function (e = null) {
      return (e || window.location).hostname.startsWith("classroom.google.com");
    }),
    (H.isGoogleDocs = function (e = null) {
      const t = e || window.location;
      if ("docs.google.com" !== t.hostname) return !1;
      let n = t.pathname.match(/^(\/a\/[^/]+)?\/document\/d\//i);
      return n || (n = t.pathname.match(/^(\/a\/[^/]+)?\/document\/edit/i)), null != n && n.length > 0;
    }),
    (H.isGoogleDocsEditor = function (e, t = !1) {
      if (!e || e.shadowRoot || (!t && !H.isGoogleDocs())) return !1;
      if ("IFRAME" === e.tagName) return H.elementHasClass(e, "docs-texteventtarget-iframe");
      if (e.ownerDocument.body.classList.contains("docs-gm")) return null != document.querySelector(".kix-appview-editor");
      for (; e; ) {
        if (H.elementHasClass(e, "kix-appview-editor")) return !0;
        e = e.parentElement;
      }
      return !1;
    }),
    (H.isMSOfficeWordEditor = function (e, t = !1) {
      if (!e || e.shadowRoot || (!t && !H.isMsOfficeWord())) return !1;
      if ("IFRAME" === e.tagName) {
        const t = e.parentElement;
        return "DIV" === t.tagName && "WopiDocWACContainer" === t.id;
      }
      if ("DIV" === e.tagName) {
        const t = e.parentElement;
        return "WACViewPanel_EditingElement" === e.id && "WACViewPanel_EditingElement_WrappingDiv" === t.id;
      }
      return !1;
    }),
    (H.isMsOfficeWord = function () {
      H.isMsOfficeWord.__rules ||
        (H.isMsOfficeWord.__rules = [{ hostname: /^.*word-edit.officeapps.live.com$/, pathname: /^.*\/wordeditorframe.aspx$/ }]);
      for (let e = 0; e < H.isMsOfficeWord.__rules.length; e += 1)
        if (
          Boolean(
            H.isMsOfficeWord.__rules[e].hostname.test(window.location.hostname) &&
              H.isMsOfficeWord.__rules[e].pathname.test(window.location.pathname)
          )
        )
          return !0;
      return !1;
    }),
    (H.isGoogleSlidesEditor = function (e, t = !1) {
      return (
        !(!e || e.shadowRoot || (!t && !H.isGoogleSlides())) &&
        ("IFRAME" === e.tagName ? H.elementHasClass(e, "docs-texteventtarget-iframe") : !!e.ownerSVGElement)
      );
    }),
    (H.isGoogleSlides = function (e = null) {
      const t = e || window.location;
      return (
        "docs.google.com" === t.hostname &&
        (null !== t.pathname.match(/^(\/a\/[^/]+)?\/presentation\/d\//i) ||
          null !== t.pathname.match(/^(\/a\/[^/]+)?\/presentation\/edit/i))
      );
    }),
    (H.isGoogleHangouts = function (e = null) {
      return "hangouts.google.com" === (e || window.location).hostname;
    }),
    (H.isGoogleMail = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "mail.google.com");
    }),
    (H.isGoogleForms = function (e = null) {
      const t = e || window.location;
      return Boolean("docs.google.com" === t.hostname && t.pathname.match(/^\/forms\//i));
    }),
    (H.isYahooMail = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "mail.yahoo.com");
    }),
    (H.isYahooNews = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "news.yahoo.com");
    }),
    (H.isMicrosoftMail = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "mail.live.com");
    }),
    (H.isMicrosoftOffice = function (e = null) {
      const t = e || window.location;
      return (
        t.href.indexOf("sharepoint.com") >= 0 ||
        H.stringStartsWith(t.hostname, "outlook.office.com") ||
        H.stringStartsWith(t.hostname, "onedrive.live.com")
      );
    }),
    (H.isMicrosoftOutlook = function (e = null) {
      const t = e || window.location;
      return H.stringStartsWith(t.hostname, "outlook.office.com");
    }),
    (H.isEvernote = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "evernote.com");
    }),
    (H.isFacebook = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "facebook.com");
    }),
    (H.isTwitter = function (e = null) {
      const t = e || window.location;
      return H.stringEndsWith(t.hostname, "twitter.com");
    }),
    (H.isSru = function (e = null) {
      const t = e || window.location;
      return H.stringStartsWith(t.href, `chrome-extension://${chrome.runtime.id}`);
    }),
    (H.isSruPwaApp = function () {
      return !!document.querySelector("meta[name=dji-app][content=sr-pwa]");
    }),
    (H.isCambridgeLMS = function (e = null) {
      const t = e || window.location;
      return H.stringStartsWith(t.href, "https://www.cambridgelms.org");
    }),
    (H.isBookshareReader = function (e) {
      const t = e || window.location;
      return "bookshare-reader.s3.amazonaws.com" === t.hostname || "www.bookshare.org" === t.hostname;
    }),
    (H.isBookshareBook = function (e) {
      const t = e || window.location;
      if (!H.isBookshareReader(t)) return !1;
      const n = t.search.match(/[?&]book=/i);
      return null != n && n.length > 0;
    }),
    (H.isAmazonKindle = function (e = null) {
      const t = e || window.location;
      return /^.*read\.amazon\..*/i.test(t);
    }),
    (H.isYoutube = function (e) {
      const t = e || window.location;
      return H.stringStartsWith(t.hostname, "youtube.com");
    }),
    (H.isOverDriveReader = function (e = null) {
      const t = (e || window.location).hostname;
      return Boolean(
        /^.*.read.overdrive.com$/.test(t) ||
          /^soraapp.com$/.test(t) ||
          /^libbyapp.com$/.test(t) ||
          /^.*.read.libbyshelf.com$/.test(t) ||
          /^.*.read.libbyapp.com$/.test(t)
      );
    }),
    (H.isOverDriveReaderDocument = function (e, t, n) {
      let o;
      e = e || document;
      const r = Boolean(n && n.location);
      for (o = r ? (e = n.element ? n.element.ownerDocument : e).elementFromPoint(n.location.x, n.location.y) : e.activeElement; o; )
        if (o.shadowRoot) o = o.shadowRoot.activeElement;
        else {
          if ("IFRAME" !== o.tagName.toUpperCase()) break;
          if (t) return !1;
          if (!(e = o.contentDocument)) return !1;
          o = r ? e.elementFromPoint(n.location.x, n.location.y) : e.activeElement;
        }
      return H.isOverDriveReader(e.defaultView.location);
    }),
    (H.isIframeFree = function () {
      return H.isGoogleMail();
    }),
    (H.stringStartsWith = function (e, t) {
      return 0 === e.indexOf(t, 0);
    }),
    (H.stringEndsWith = function (e, t) {
      return -1 !== e.indexOf(t, e.length - t.length);
    }),
    (H.addLeadingZero = function (e, t) {
      t = t || 2;
      const n = `0000000000${e}`;
      return n.substr(n.length - Math.max(String(e).length, t));
    }),
    (H.hostnameFromURL = function (e) {
      return e.toString().replace(/^(.*\/\/[^/?#]*).*$/, "$1");
    }),
    (H.jsonFromUrlQueryAndHash = function (e) {
      if (!e) return null;
      try {
        let t = null,
          n = null;
        if (
          (1 === (e = e.split("#")).length ? ([e] = e) : 2 === e.length && (([, n] = e), ([e] = e)),
          2 === (e = e.split("?")).length && ([, t] = e),
          t)
        ) {
          (t = `{"${t.replace(/&/g, '", "').replace(/=/g, '": "')}"}`), (t = JSON.parse(t));
          for (const e in t) t.hasOwnProperty(e) && (t[e] = decodeURIComponent(t[e]));
        }
        if (n) {
          (n = `{"${n.replace(/&/g, '", "').replace(/=/g, '": "')}"}`), (n = JSON.parse(n));
          for (const e in n) n.hasOwnProperty(e) && (n[e] = decodeURIComponent(n[e]));
        }
        return { query: t, hash: n };
      } catch (e) {
        n.error(e);
      }
      return null;
    }),
    (H.htmlToUnicodeTextArray = function (e) {
      if (null == e) return null;
      if (0 === e.length) return [];
      const t = e.length,
        n = new Array(t);
      for (let o = 0; o < t; o += 1) {
        let t = e.charAt(o);
        const r = e.charCodeAt(o);
        switch (r) {
          case 160:
          case 8203:
          case 8204:
          case 8205:
            t = " ";
            break;
          case 216:
          case 248:
          case 510:
          case 511:
            t = "0";
            break;
          case 451:
            t = "!";
            break;
          case 8211:
            t = "-";
            break;
          case 8216:
          case 8217:
            t = "'";
            break;
          case 8220:
          case 8221:
            t = '"';
            break;
          case 8230:
            t = ".";
            break;
          default:
            ((10 !== r && 13 !== r && r >= 0 && r <= 31) || r > 32767) && (t = " ");
        }
        n[o] = t;
      }
      return n;
    }),
    (H.htmlToUnicode = function (e) {
      if (null == e || 0 === e.length) return e;
      let t = H.htmlToUnicodeTextArray(e);
      const n = t.join("");
      return (t = null), n;
    }),
    (H.htmlToAscii = function (e, t) {
      return null == e || 0 === e.length ? e : H.htmlToAsciiTextArray(e, t).join("");
    }),
    (H.escapeHtml = function (e) {
      return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }),
    (H.escapeFileName = function (e) {
      return e
        .replace(/:/g, "_")
        .replace(/\\/g, "_")
        .replace(/\//g, "_")
        .replace(/&/g, "_")
        .replace(/>/g, "_")
        .replace(/</g, "_")
        .replace(/"/g, "_")
        .replace(/\|/g, "_")
        .replace(/\*/g, "_")
        .replace(/\?/g, "_");
    }),
    (H.objectsAreEqual = function (e, t) {
      if (e === t) return !0;
      if (null == e || null == t || typeof e != typeof t) return !1;
      if ("string" == typeof e || "number" == typeof e) return !1;
      if (e instanceof Array || t instanceof Array) {
        if (!(e instanceof Array && t instanceof Array)) return !1;
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n += 1) if (!H.objectsAreEqual(e[n], t[n])) return !1;
        return !0;
      }
      let n, o;
      for (let r = 0; r < 2; r += 1) {
        for (n in e)
          if (e.hasOwnProperty(n)) {
            if (!t.hasOwnProperty(n)) return !1;
            if (!H.objectsAreEqual(e[n], t[n])) return !1;
          }
        (o = e), (e = t), (t = o);
      }
      return !0;
    }),
    (H.indexOfElementInArray = function (e, t) {
      if (e) for (let n = 0; n < e.length; n += 1) if (e[n] === t) return n;
      return -1;
    }),
    (H.findParagraph = function (e, n) {
      return !e || n > e.length ? null : H.findToken(e, n, t.paragraphSeparator);
    }),
    (H.findSentence = function (e, n) {
      return !e || n > e.length ? null : H.findToken(e, n, t.sentenceSeparator);
    }),
    (H.findSentenceFrom = function (e, n) {
      if (n > e.length) return null;
      const o = n;
      let r = n;
      for (r = n; r < e.length; r += 1)
        if (t.sentenceSeparator.characterIsMember(e.charAt(r))) {
          r += 1;
          break;
        }
      r > e.length - 1 && (r = e.length - 1);
      let i = null;
      return o <= r && (i = e.slice(o, r + 1)), i;
    }),
    (H.findWord = function (e, n) {
      return !e || n > e.length ? null : H.findToken(e, n, t.wordSeparator);
    }),
    (H.tokenStartsSentence = function (e, n) {
      if (!e || n > e.length) return !1;
      let o = n - 1;
      for (; o >= 0 && t.whiteSpace.characterIsMember(e.charAt(o)); o -= 1);
      return !!(o <= 0 || t.sentenceSeparator.characterIsMember(e.charAt(o)));
    }),
    (H.findToken = function (e, t, n) {
      if (t > e.length || null == n) return null;
      let o = t;
      const r = t;
      for (o = t; o >= 0; o -= 1)
        if (n.characterIsMember(e.charAt(o))) {
          o += 1;
          break;
        }
      o < 0 && (o = 0);
      let i = null;
      return o <= r && (i = e.slice(o, r + 1)), i;
    }),
    (H.startsWithUpperCase = function (e) {
      const t = e.charAt(0);
      return t === t.toUpperCase();
    }),
    (H.colorToRgb = function (e) {
      let t = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}),? ?(\d{1,3})?\)$/i.exec(e);
      return t
        ? { r: parseInt(t[1], 10), g: parseInt(t[2], 10), b: parseInt(t[3], 10) }
        : ((e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (e, t, n, o) => t + t + n + n + o + o)),
          (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)),
          t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null);
    }),
    (H.colorFromRgb = function ({ r: e, g: t, b: n }) {
      return `rgb(${e},${t},${n})`;
    }),
    (H.addOpacityToColor = function (e, t) {
      const n = H.colorToRgb(e);
      return `rgba(${n.r},${n.g},${n.b},${t})`;
    }),
    (H.colorToHex = function (e) {
      return e && (e = H.colorToRgb(e)), e ? H.rgbToHex(e.r, e.g, e.b) : null;
    }),
    (H.rgbToHex = function (e, t, n) {
      const o = [e.toString(16), t.toString(16), n.toString(16)];
      for (let e = 0; e < o.length; e += 1) 1 === o[e].length && (o[e] = `0${o[e]}`);
      return `#${o.join("")}`;
    }),
    (H.elementHasId = function (e, t) {
      if (!e || e.nodeType !== Node.ELEMENT_NODE || !t) return !1;
      try {
        const n = e.getAttribute("id");
        if (n && n.length > 0) {
          let e = !1;
          return (e = t instanceof Array ? -1 !== t.indexOf(n) : n === t), e;
        }
      } catch (e) {}
      return !1;
    }),
    (H.elementHasAttribute = function (e, t) {
      if (!e || e.nodeType !== Node.ELEMENT_NODE || !t) return !1;
      try {
        if (!(t instanceof Array)) return e.hasAttribute(t);
        for (let n = 0; n < t.length; n += 1) if (e.hasAttribute(t)) return !0;
      } catch (e) {}
      return !1;
    }),
    (H.addClassToElement = function (e, t) {
      e && t && e.classList.add(t);
    }),
    (H.removeClassFromElement = function (e, t) {
      e && t && e.classList.remove(t);
    }),
    (H.elementHasClass = function (e, t, n = !1) {
      if (!e || e.nodeType !== Node.ELEMENT_NODE || !t) return !1;
      try {
        let o = !1;
        const r = e.classList;
        if (!(t instanceof Array)) return (o = r.contains(t)), o;
        for (let e = 0; e < t.length; e += 1)
          if (((o = r.contains(t[e])), n)) {
            if (!o) return !0;
          } else if (o) return !0;
      } catch (e) {}
      return !1;
    }),
    (H.addClassToHtmlElements = function (e, t) {
      const n = H.findValidDocumentElements(t);
      for (let t = 0; t < n.length; t += 1) {
        const o = n[t];
        o.documentElement && (H.addClassToElement(o.documentElement, e), o.documentElement.setAttribute(e, "true"));
      }
    }),
    (H.removeClassFromHtmlElements = function (e, t) {
      const n = H.findValidDocumentElements(t);
      for (let t = 0; t < n.length; t += 1) {
        const o = n[t];
        o.documentElement && (H.removeClassFromElement(o.documentElement, e), o.documentElement.removeAttribute(e));
      }
    }),
    (H.elementHasSpecialAttribute = function (e, t) {
      return e.hasAttribute(t) && "true" === e.getAttribute(t);
    }),
    (H.elementIsVisible = function (e, t) {
      if (!e) return !1;
      if ((e.nodeType === Node.TEXT_NODE && (e = e.parentElement), e instanceof Window || e.nodeType === Node.DOCUMENT_NODE)) return !0;
      t = t || e.ownerDocument;
      const n = Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      let o = !1;
      if (n) {
        const n = t.defaultView.getComputedStyle(e).getPropertyValue("visibility");
        o = Boolean("visible" === n || "collapsed" === n);
      }
      return n && o;
    }),
    (H.elementHasParent = function (e, t) {
      for (; e && e !== t; ) e = e.parentElement;
      return Boolean(null !== t && e === t);
    }),
    (H.focusedElement = function (e) {
      const t = e ? e.ownerDocument : document,
        { activeElement: n } = t;
      return n && e ? (H.elementHasParent(n, e) ? n : null) : n;
    }),
    (H.closestParent = function (e, t) {
      for (; e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.parentElement;
      return e ? e.closest(t) : null;
    }),
    (H.elementIsInsideBody = function (e) {
      for (; e; ) {
        if (e.tagName && "BODY" === e.tagName.toUpperCase()) return !0;
        e = e.parentNode || e.host;
      }
      return !1;
    }),
    (H.lastElementChild = function (e, t) {
      if (e)
        try {
          if (t) {
            let t = null;
            const n = H.documentForElement(e);
            for (; e; ) {
              for (t = e.lastChild; t && !H.elementIsVisible(t, n); ) t = t.previousElementSibling;
              if (!t) break;
              e = t;
            }
          } else for (; e && e.lastChild && e.nodeType !== Node.TEXT_NODE; ) e = e.lastChild;
        } catch (e) {
          n.error(e);
        }
      return e;
    }),
    (H.isEditor = function (e, t) {
      if (t) {
        const t = H.elementContext(e);
        return !!t && t.isEditor;
      }
      if (void 0 !== e.selectionStart) return !0;
      for (; e; ) {
        if (e.getAttribute && "true" === e.getAttribute("contenteditable")) return !0;
        e = e.parentNode;
      }
      return !1;
    }),
    (H.editorContainer = function (e) {
      if (e)
        try {
          if (void 0 !== e.selectionStart) return e;
          if (e.isContentEditable) {
            for (; e.parentElement && e.parentElement.isContentEditable; ) e = e.parentElement;
            return e;
          }
        } catch (e) {
          n.error(e);
        }
      return null;
    }),
    (H.elementContext = function (e) {
      if (!e) return null;
      const t = {
        document: H.documentForElement(e),
        element: e,
        editor: null,
        isEditor: !1,
        isPlainEditor: !1,
        isContentEditable: !1,
        isGoogleDocs: H.isGoogleDocs(),
        isGoogleDocsEditor: !1,
        isGoogleSlides: H.isGoogleSlides(),
        isGoogleHangouts: H.isGoogleHangouts(),
        isYahooMail: H.isYahooMail(),
        isOverDriveReader: H.isOverDriveReader(),
        isBookshareReader: H.isBookshareReader(),
        isMsOfficeWord: H.isMsOfficeWord(),
        isMSOfficeWordEditor: !1,
        isAmazonKindle: !1,
        isMicrosoftOutlook: H.isMicrosoftOutlook()
      };
      try {
        void 0 !== e.selectionStart && (t.isPlainEditor = !0);
      } catch (e) {}
      try {
        e.isContentEditable && (t.isContentEditable = !0);
      } catch (e) {}
      return (
        t.isPlainEditor || t.isContentEditable
          ? (t.editor = e)
          : H.isGoogleDocsEditor(e)
          ? ((t.isGoogleDocsEditor = !0), (t.editor = document.querySelector(".kix-appview-editor")))
          : H.isAmazonKindle() && !H.elementHasClass(document.documentElement, "dji-sru-screen-selection") && (t.isAmazonKindle = !0),
        H.isMSOfficeWordEditor(e) && ((t.isMSOfficeWordEditor = !0), (t.isContentEditable = !1)),
        (t.isEditor = t.isPlainEditor || t.isContentEditable || t.isGoogleDocsEditor || t.isMSOfficeWordEditor),
        t
      );
    }),
    (H.activeElementInfo = function (e = !1, t = void 0) {
      const n = [];
      let o = document,
        r = o.activeElement,
        i = !1,
        s = !1,
        a = !1,
        c = !1,
        l = !1;
      if (H.isSruPwaApp() && t) (r = t.element || r), (o = r.ownerDocument);
      else if (H.isGoogleDocsEditor(r)) {
        if ("IFRAME" === r.tagName) {
          const e = document.getElementById("kix-appview"),
            t = e ? e.getElementsByClassName("kix-appview-editor") : null;
          t && t.length > 0 && ([r] = t);
        }
        i = !0;
      } else if (H.isGoogleSlidesEditor(r)) s = !0;
      else if (H.isMSOfficeWordEditor(r)) l = !0;
      else if (H.isAmazonKindle() && !H.elementHasClass(document.documentElement, "dji-sru-screen-selection")) {
        const e = document.getElementById("KindleReaderIFrame");
        if (e) {
          r = e.contentWindow.document;
          const t = r.getElementById("column_0_frame_0");
          if (t && "hidden" !== t.style.visibility) n.push(t);
          else {
            const e = r.getElementById("column_0_frame_1");
            e && n.push(e);
          }
          const o = r.getElementById("column_1_frame_0");
          if (o && "hidden" !== o.style.visibility) n.push(o);
          else {
            const e = r.getElementById("column_1_frame_1");
            e && n.push(e);
          }
        }
        (o = document), (a = !0);
      } else if (H.isYahooNews()) r.closest("#search-assist-input") && (r = o.body);
      else if (H.isCambridgeLMS() && "IFRAME" === r.tagName) {
        const e = r.contentDocument.activeElement;
        e && "FRAME" === e.tagName && ((o = e.contentDocument), (r = e.contentDocument.activeElement));
      } else {
        const i = H.findRangeSelection(r);
        if (i) r = H.extractActiveElementFromSelection(i);
        else {
          let e = !1;
          for (; !e && r && ("IFRAME" === r.tagName || r.shadowRoot); )
            try {
              if (((e = !0), r.shadowRoot)) {
                const { activeElement: n } = r.shadowRoot;
                if (("__dji_sru_main_container" === r.id && (c = !0), n)) (r = n), (e = !1);
                else if (t && t.location) {
                  const e = r.shadowRoot.elementsFromPoint(t.location.x, t.location.y);
                  r = e.length > 0 ? e[0] : null;
                }
              } else
                H.validateIframe(r, !0) &&
                  null !== r.contentDocument &&
                  (n.push(r), (o = r.contentDocument), (r = o.activeElement), (e = !1));
            } catch (e) {
              break;
            }
        }
        if (!r || (e && "IFRAME" === r.tagName)) return null;
      }
      return {
        iframes: n,
        document: o,
        element: r,
        isActive: !(!r || !r.ownerDocument || r.ownerDocument.activeElement !== r),
        isGoogleDocsEditor: i,
        isGoogleSlidesEditor: s,
        isAmazonKindle: a,
        isOverDriveReader: H.isOverDriveReaderDocument(o, !1, t),
        isSruOutlines: c,
        isMsOfficeWord: l,
        isBookshareReader: H.isBookshareReader()
      };
    }),
    (H.extractActiveElementFromSelection = function (e) {
      const { anchorNode: t } = e;
      return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
    }),
    (H.findRangeSelection = function (e) {
      let t = null;
      e
        ? "FRAME" === e.tagName && e.contentDocument
          ? (t = e.contentDocument)
          : e.ownerDocument && (t = e.ownerDocument)
        : (t = document);
      const n = t.getSelection();
      if ("Range" !== n.type) return null;
      const o = function (e) {
        return "Range" === e.type && !(e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset);
      };
      let r = null;
      return (
        o(n) || (r = H.getShadowRootSelection(n.anchorNode, o)),
        null != r &&
          r.anchorNode !== n.anchorNode &&
          r.focusNode !== n.focusNode &&
          n.setBaseAndExtent(r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset),
        n
      );
    }),
    (H.getShadowRootSelection = function (e, t) {
      let n = Array.from(e.children);
      if (e.shadowRoot) {
        const o = e.shadowRoot.getSelection();
        if (t(o)) return o;
        n = n.concat(Array.from(e.shadowRoot.children));
      }
      for (let e = 0; e < n.length; e += 1) {
        const o = H.getShadowRootSelection(n[e], t);
        if (o) return o;
      }
      return null;
    }),
    (H.extractVisibleTextFromElement = function (e) {
      if (!e) return "";
      if (3 === e.nodeType) return e.textContent;
      let t = "",
        n = null;
      const o = document.createTreeWalker(
        e,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        (e) => {
          if (3 === e.nodeType) return NodeFilter.FILTER_ACCEPT;
          const n = e;
          if ("SCRIPT" === n.tagName || "NOSCRIPT" === n.tagName || "IMG" === n.tagName || "SELECT" === n.tagName)
            return NodeFilter.FILTER_REJECT;
          if ("INPUT" === n.tagName && "text" !== e.type.toLowerCase()) return NodeFilter.FILTER_REJECT;
          const o = (n.getAttribute("id") || "").toLowerCase();
          return "dexcontrolscontainer" === o ||
            "dexcontrolscontainermeasurement" === o ||
            "__dji_cwe_body_overlay" === o ||
            "__dji_cwe_measurement_window_generic" === o ||
            "__dji_cwe_chrome_google_docs_proxy" === o ||
            "__dji_cwe_shortcuts" === o ||
            "__dji_cwe_measurement_window_generic" === o ||
            "none" === document.defaultView.getComputedStyle(n, null).getPropertyValue("display")
            ? NodeFilter.FILTER_REJECT
            : ("SPAN" !== n.tagName && (t += "\n"), NodeFilter.FILTER_ACCEPT);
        },
        !0
      );
      for (n = o.nextNode(); n; )
        3 === n.nodeType ? (t += ` ${n.textContent}`) : 1 === n.nodeType && "TEXTAREA" === n.tagName && (t += `\n${n.value}\n`),
          (n = o.nextNode());
      return t;
    }),
    (H.addEventListenerToBodyElements = function (e, t, n, o) {
      const r = H.findValidDocumentElements(null, o);
      for (let o = 0; o < r.length; o += 1) r[o].body && r[o].body.addEventListener(e, t, n);
    }),
    (H.addEventListenerToDocumentElements = function (e, t, n) {
      const o = H.findValidDocumentElements();
      for (let r = 0; r < o.length; r += 1) o[r].addEventListener(e, t, n);
    }),
    (H.removeEventListenerFromBodyElements = function (e, t, n, o) {
      const r = H.findValidDocumentElements(null, o);
      for (let o = 0; o < r.length; o += 1)
        try {
          r[o].body && r[o].body.removeEventListener(e, t, n);
        } catch (e) {}
    }),
    (H.removeEventListenerFromDocumentElements = function (e, t, n) {
      const o = H.findValidDocumentElements();
      for (let r = 0; r < o.length; r += 1) o[r].removeEventListener(e, t, n);
    }),
    (H.preventInputEventsOnBodyElements = function (e, t, n, o, r) {
      const i = H.isGoogleDocs(),
        s = H.findValidIframeAndDocumentElements(null, o);
      for (let o = 0; o < s.length; o += 1) {
        const a = s[o];
        a.doc.body &&
          (i
            ? H.isGoogleDocsEditor(a.iframe) || H.preventInputEventsOnTree(a.doc.body, e, t, n, r)
            : (a.iframe && "dji-sru-remove-distractions-iframe" === a.iframe.id) || H.preventInputEventsOnTree(a.doc.body, e, t, n, r));
      }
    }),
    (H.preventInputEventsOnTree = function (e, t, n, o, r) {
      if (!e || 3 === e.nodeType) return;
      const i = H.isGoogleDocs();
      let s = null;
      const a = document.createTreeWalker(
          e,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
          (e) => {
            if (3 === e.nodeType) return NodeFilter.FILTER_REJECT;
            const t = e;
            if ("SCRIPT" === t.tagName || "NOSCRIPT" === t.tagName) return NodeFilter.FILTER_REJECT;
            if (i && H.isGoogleDocsEditor(e, !0)) return NodeFilter.FILTER_REJECT;
            const o = t.id ? t.id.toLowerCase() : "";
            return "dexcontrolscontainer" === o ||
              "dexcontrolscontainermeasurement" === o ||
              0 === o.indexOf("__dji_cwe") ||
              (r && -1 !== r.indexOf(o)) ||
              (!n && 0 === o.indexOf("dji-sru-"))
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT;
          },
          !0
        ),
        c = o || G,
        l = o || z,
        u = !1;
      if (t)
        for (s = a.nextNode(); s; )
          s.addEventListener("click", l, u),
            s.addEventListener("mousedown", c, u),
            s.addEventListener("mouseup", l, u),
            s.addEventListener("mousemove", l, u),
            s.addEventListener("mouseout", l, u),
            s.addEventListener("mouseover", l, u),
            (s = a.nextNode());
      else
        for (s = a.nextNode(); s; )
          try {
            s.removeEventListener("click", l, u),
              s.removeEventListener("mousedown", c, u),
              s.removeEventListener("mouseup", l, u),
              s.removeEventListener("mousemove", l, u),
              s.removeEventListener("mouseout", l, u),
              s.removeEventListener("mouseover", l, u),
              (s = a.nextNode());
          } catch (e) {}
    }),
    (H.ignoreEvent = function (e) {
      e.preventDefault(), e.stopPropagation();
    }),
    (H.documentForElement = function (e) {
      for (; e && e.nodeType !== Node.DOCUMENT_NODE; ) e = e.parentNode;
      return e;
    }),
    (H.waitForDocumentToLoad = function (e, t) {
      if (((e = e || document), "complete" === document.readyState)) H.callMethod(t);
      else {
        const n = function () {
          "complete" === e.readyState && (e.removeEventListener("load", n, !0), H.callMethod(t));
        };
        e.addEventListener("load", n, !0);
      }
    }),
    (H.findValidDocumentElements = function (e, t) {
      1 === arguments.length && "boolean" == typeof e && ((t = e), (e = null));
      const n = [];
      return H.findValidDocumentElementsEx(e || document, n, t), n;
    }),
    (H.findValidDocumentElementsEx = function (e, t, n) {
      t.push(e);
      const o = H.findAllIframes(e);
      for (let e = 0; e < o.length; e += 1) {
        const r = o[e];
        H.validateIframe(r, n) && null !== r.contentDocument && H.findValidDocumentElementsEx(r.contentDocument, t, n);
      }
    }),
    (H.findValidIframeElements = function (e, t) {
      const n = [];
      return H.findValidIframeElementsEx(e || document, n, t), n;
    }),
    (H.findValidIframeElementsEx = function (e, t, n) {
      const o = H.findAllIframes(e);
      for (let e = 0; e < o.length; e += 1) {
        const r = o[e];
        H.validateIframe(r, n) && null !== r.contentDocument && (t.push(r), H.findValidIframeElementsEx(r.contentDocument, t, n));
      }
    }),
    (H.findValidIframeAndDocumentElements = function (e, t) {
      const n = [];
      return H.findValidIframeAndDocumentElementsEx(e || document, n, t), n;
    }),
    (H.findValidIframeAndDocumentElementsEx = function (e, t, n) {
      const o = H.findAllIframes(e);
      for (let e = 0; e < o.length; e += 1) {
        const r = o[e];
        H.validateIframe(r, n) &&
          null !== r.contentDocument &&
          (t.push({ iframe: r, doc: r.contentDocument }), H.findValidIframeAndDocumentElementsEx(r.contentDocument, t, n));
      }
    }),
    (H.findAllIframes = function (e) {
      const t = [...e.getElementsByTagName("iframe")].concat([...e.getElementsByTagName("frame")]);
      window.top === window &&
        e.querySelectorAll("dji-sru").forEach((e) => {
          e &&
            e.shadowRoot &&
            e.shadowRoot.querySelectorAll("iframe").forEach((e) => {
              e && t.push(e);
            });
        });
      const n = e.querySelector("dji-sru-distraction");
      if (n && n.shadowRoot) {
        const e = n.shadowRoot.querySelector("#dji-sru-remove-distractions-iframe");
        e && t.push(e);
      }
      return t;
    }),
    (H.validateIframe = function (e, t) {
      try {
        if (void 0 === e.src || null === e.src) return !1;
        const n = e.getAttribute("id");
        if ("__dji_sru_templates" === n) return !1;
        if (!t && n && n.indexOf("dji_sru") >= 0) return !1;
        let o = null;
        const r = e.src.split("/")[2];
        if (null == r);
        else if (-1 === r.indexOf(document.domain)) return !1;
        return (o = e.contentDocument), null != o;
      } catch (e) {}
      return !1;
    }),
    (H.addMultipleCssToDocument = function (e, t) {
      t.forEach((t) => {
        "string" == typeof t
          ? H.addLinkToDocument(e, null, "stylesheet", "text/css", t)
          : H.addLinkToDocument(e, t.id, "stylesheet", "text/css", t.href, Boolean(t.isExternal));
      });
    }),
    (H.addJavascriptToDocument = function (e, t, n, o) {
      const r = e.createElement("script");
      if (
        ((r.async = !1),
        o &&
          (r.onload = function () {
            o();
          }),
        !e.head)
      ) {
        const t = e.createElement("head");
        e.documentElement.appendChild(t);
      }
      return (r.src = n ? t : chrome.extension.getURL(t)), e.head.appendChild(r), r;
    }),
    (H.addLinkToDocument = async function (e, t, n, o, r, i) {
      t || (t = F.exports.MD5(r));
      let s = e.getElementById(t);
      if (s) return s;
      if (null == i) {
        let e = null;
        try {
          e = new URL(r);
        } catch (e) {}
        i = Boolean(e);
      }
      if (
        ((s = e.createElement("link")),
        (s.id = t),
        (s.href = i ? r : chrome.extension.getURL(r)),
        (s.async = !0),
        (s.rel = n),
        (s.type = o),
        !e.head)
      ) {
        const t = e.createElement("head");
        e.documentElement.appendChild(t);
      }
      return e.head.appendChild(s), s;
    }),
    (H.generateUUID = function () {
      let e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const n = (e + 16 * Math.random()) % 16 | 0;
        return (e = Math.floor(e / 16)), ("x" === t ? n : (7 & n) | 8).toString(16);
      });
    }),
    (H.blobToText = function (e, t) {
      if (e) {
        const n = new FileReader();
        (n.onloadend = function () {
          t(n.result);
        }),
          (n.onerror = function () {
            t(null);
          }),
          n.readAsText(e);
      } else t(null);
    }),
    (H.htmlToAsciiTextArray = function (e, t) {
      if (null == e) return null;
      if (0 === e.length) return [];
      const n = e.length,
        o = new Array(n);
      for (let r = 0; r < n; r += 1) {
        let n = e.charAt(r);
        const i = e.charCodeAt(r);
        switch (i) {
          case 9:
          case 160:
            n = " ";
            break;
          case 216:
          case 248:
          case 510:
          case 511:
            n = "0";
            break;
          case 451:
            n = "!";
            break;
          case 192:
          case 193:
          case 194:
          case 195:
          case 196:
          case 197:
          case 198:
          case 256:
          case 258:
          case 260:
          case 461:
          case 478:
          case 480:
          case 482:
          case 506:
          case 508:
          case 512:
          case 514:
          case 550:
            n = "A";
            break;
          case 224:
          case 225:
          case 226:
          case 227:
          case 228:
          case 229:
          case 230:
          case 257:
          case 259:
          case 261:
          case 462:
          case 479:
          case 481:
          case 483:
          case 507:
          case 509:
          case 513:
          case 515:
          case 551:
            n = "a";
            break;
          case 199:
          case 262:
          case 264:
          case 266:
          case 268:
            n = "C";
            break;
          case 231:
          case 263:
          case 265:
          case 267:
          case 269:
            n = "c";
            break;
          case 208:
          case 270:
          case 272:
            n = "D";
            break;
          case 271:
          case 273:
            n = "d";
            break;
          case 200:
          case 201:
          case 202:
          case 203:
          case 274:
          case 276:
          case 278:
          case 280:
          case 282:
          case 516:
          case 518:
          case 552:
            n = "E";
            break;
          case 232:
          case 233:
          case 234:
          case 235:
          case 275:
          case 277:
          case 279:
          case 281:
          case 283:
          case 517:
          case 519:
          case 553:
            n = "e";
            break;
          case 284:
          case 286:
          case 288:
          case 290:
          case 484:
          case 486:
          case 500:
            n = "G";
            break;
          case 285:
          case 287:
          case 289:
          case 291:
          case 485:
          case 487:
          case 501:
            n = "g";
            break;
          case 292:
          case 294:
          case 502:
            n = "H";
            break;
          case 293:
          case 295:
            n = "h";
            break;
          case 204:
          case 205:
          case 206:
          case 207:
          case 296:
          case 298:
          case 300:
          case 302:
          case 304:
          case 463:
          case 520:
          case 522:
            n = "I";
            break;
          case 236:
          case 237:
          case 238:
          case 239:
          case 297:
          case 299:
          case 301:
          case 303:
          case 305:
          case 464:
          case 521:
          case 523:
            n = "i";
            break;
          case 308:
            n = "J";
            break;
          case 309:
            n = "j";
            break;
          case 310:
          case 488:
            n = "K";
            break;
          case 311:
          case 312:
          case 489:
            n = "k";
            break;
          case 313:
          case 315:
          case 317:
          case 319:
          case 321:
            n = "L";
            break;
          case 314:
          case 316:
          case 318:
          case 320:
          case 322:
            n = "l";
            break;
          case 209:
          case 323:
          case 325:
          case 327:
          case 330:
          case 504:
            n = "N";
            break;
          case 240:
          case 241:
          case 324:
          case 326:
          case 328:
          case 329:
          case 331:
          case 505:
            n = "n";
            break;
          case 210:
          case 211:
          case 212:
          case 213:
          case 214:
          case 332:
          case 334:
          case 336:
          case 465:
          case 490:
          case 492:
          case 524:
          case 526:
          case 554:
          case 556:
          case 558:
          case 560:
            n = "O";
            break;
          case 242:
          case 243:
          case 244:
          case 245:
          case 246:
          case 333:
          case 335:
          case 337:
          case 466:
          case 491:
          case 493:
          case 525:
          case 527:
          case 555:
          case 557:
          case 559:
          case 561:
            n = "o";
            break;
          case 340:
          case 342:
          case 344:
          case 528:
          case 530:
            n = "R";
            break;
          case 341:
          case 343:
          case 345:
          case 529:
          case 531:
            n = "r";
            break;
          case 346:
          case 348:
          case 350:
          case 352:
          case 536:
            n = "S";
            break;
          case 347:
          case 349:
          case 351:
          case 353:
          case 537:
            n = "s";
            break;
          case 354:
          case 356:
          case 358:
          case 538:
            n = "T";
            break;
          case 355:
          case 357:
          case 359:
          case 539:
            n = "t";
            break;
          case 217:
          case 218:
          case 219:
          case 220:
          case 360:
          case 362:
          case 364:
          case 366:
          case 368:
          case 370:
          case 467:
          case 469:
          case 471:
          case 473:
          case 475:
          case 532:
          case 534:
            n = "U";
            break;
          case 249:
          case 250:
          case 251:
          case 252:
          case 361:
          case 363:
          case 365:
          case 367:
          case 369:
          case 371:
          case 468:
          case 470:
          case 472:
          case 474:
          case 476:
          case 533:
          case 535:
            n = "u";
            break;
          case 372:
            n = "W";
            break;
          case 373:
            n = "w";
            break;
          case 221:
          case 374:
          case 376:
          case 562:
            n = "Y";
            break;
          case 253:
          case 254:
          case 255:
          case 375:
          case 563:
            n = "y";
            break;
          case 377:
          case 379:
          case 381:
          case 548:
            n = "Z";
            break;
          case 378:
          case 380:
          case 382:
          case 549:
            n = "z";
            break;
          case 8211:
            n = "-";
            break;
          case 8216:
          case 8217:
            n = "'";
            break;
          case 8220:
          case 8221:
            n = '"';
            break;
          case 8203:
          case 8204:
            t || (n = "");
            break;
          default:
            ((10 !== i && 13 !== i && i >= 0 && i <= 31) || i >= 127) && (n = " ");
        }
        o[r] = n;
      }
      return o;
    }),
    (H.splitInWords = function (e, t) {
      const n = e.split(/\W/i);
      if (t) return n;
      const o = [];
      for (let e = 0; e < n.length; e += 1) {
        const t = n[e];
        t && t.length > 0 && o.push(t);
      }
      return o;
    });
  const U = function e(t) {
    if (!t) return 1;
    const n = document.defaultView.getComputedStyle(t).getPropertyValue("z-index");
    return Number.isNaN(Number(n)) ? e(t.parentElement) : n;
  };
  function V(e, t) {
    if (e === t) return 0;
    const n = e.compareDocumentPosition(t);
    return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY
      ? -1
      : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
  }
  function q(e) {
    const t = [];
    for (; e; e = e.parentNode) t.push(e);
    return t;
  }
  function X(e, t) {
    if (e === t) return e.parentNode;
    const n = q(e),
      o = q(t);
    let r = null;
    const i = n.length;
    for (let e = 0; e < i; e += 1) {
      const t = n[e],
        i = o.length;
      for (let e = 0; e < i; e += 1)
        if (t === o[e]) {
          r = t;
          break;
        }
      if (r) break;
    }
    return r;
  }
  (H.addMathOverlay = function () {
    const e = document.querySelectorAll('*[id^="MathJax-Element-"][id$="Frame"]');
    for (let t = 0; t < e.length; t += 1) {
      let n = e[t].querySelector('[id^="MathJax-Span"]');
      n || ((n = e[t].querySelector('[id^="MJXp-Span"]')), n || (n = e[t])),
        n.style.position || ((n.style.position = "relative"), (n.style.top = "0"), (n.style.left = "0"));
      const o = document.createElement("span");
      (o.style.position = "absolute"),
        (o.style.top = "0"),
        (o.style.left = "0"),
        (o.style.bottom = "0"),
        (o.style.right = "0"),
        (o.style.zIndex = U(n) + 1),
        o.setAttribute("class", "dji-sru-math-overlay"),
        o.setAttribute("data-parent-id", e[t].getAttribute("id")),
        n.appendChild(o);
    }
  }),
    (H.removeMathOverlay = function () {
      const e = document.querySelectorAll('*[id^="MathJax-Element-"][id$="Frame"]');
      for (let t = 0; t < e.length; t += 1) {
        const n = e[t].querySelector(".dji-sru-math-overlay");
        n && n.parentNode.removeChild(n);
      }
    }),
    (H.createLastErrorHandler = function () {
      return H.checkLastError;
    }),
    (H.checkLastError = function () {
      chrome.runtime.lastError && n.error(chrome.runtime.lastError.message);
    }),
    (H.ignoreLastError = function () {
      H.ignoreLastError.lastError = chrome.runtime.lastError;
    }),
    (H.isNullOrUndefined = function (e) {
      return null == e;
    }),
    (H.isForwardSelection = function (e) {
      if ("None" === e.type || "Caret" === e.type) return !0;
      const t = e.anchorNode.compareDocumentPosition(e.focusNode);
      return !((!t && e.anchorOffset > e.focusOffset) || t === Node.DOCUMENT_POSITION_PRECEDING);
    }),
    (H.getExtendedSelection = function (e, n) {
      const o = { anchorNode: e.anchorNode, anchorOffset: e.anchorOffset, focusNode: e.focusNode, focusOffset: e.focusOffset },
        r = H.isForwardSelection(e),
        i = e.toString();
      if (0 === i.length) return e;
      const s = "left" === n ? 0 : i.length - 1;
      let a, c;
      ("left" === n && r) || ("right" === n && !r) ? ((a = o.anchorNode), (c = o.anchorOffset)) : ((a = o.focusNode), (c = o.focusOffset));
      const l = {};
      if (
        ((l.anchorNode = r ? o.anchorNode : o.focusNode),
        (l.anchorOffset = r ? o.anchorOffset : o.focusOffset),
        (l.focusNode = r ? o.focusNode : o.anchorNode),
        (l.focusOffset = r ? o.focusOffset : o.anchorOffset),
        !t.wordSeparator.characterIsMemberNoHypen(i[s]))
      ) {
        e.setBaseAndExtent(a, c, a, c);
        const o = "left" === n ? "backward" : "forward",
          r = "backward" === o ? "forward" : "backward";
        let i = !0,
          s = e.focusNode;
        for (; i; ) {
          const a = e.toString();
          let c = !1;
          e.modify("extend", o, "character");
          const u = e.toString();
          s !== e.focusNode && ((s = e.focusNode), (c = !0));
          const d = u !== a,
            f = "right" === n ? u.length - 1 : 0;
          (0 !== u.length && !t.wordSeparator.characterIsMemberNoHypen(u[f]) && d) ||
            ((i = !1),
            (c || (d && u.length - a.length == 1)) && e.modify("extend", r, "character"),
            "left" === n
              ? ((l.anchorNode = e.focusNode), (l.anchorOffset = e.focusOffset))
              : ((l.focusNode = e.focusNode), (l.focusOffset = e.focusOffset)));
        }
      }
      return e.setBaseAndExtent(o.anchorNode, o.anchorOffset, o.focusNode, o.focusOffset), l;
    }),
    (H.extendSelection = function (e, t, o, r) {
      if (!e) return null;
      try {
        let n = "word" === o ? H.countWords : null;
        if (("character" === o && (n = H.countVisibleNonSpaceCharacters), !n)) return null;
        const i = n(r);
        let s = e.toString();
        const a = n(s);
        let c = i - a;
        for (; c > 0; ) {
          const { anchorNode: r } = e,
            { anchorOffset: l } = e,
            { focusNode: u } = e,
            { focusOffset: d } = e;
          for (let n = 0; n < c; n += 1) e.modify("extend", t, o);
          const f = e.toString();
          if (e.anchorNode === r && e.anchorOffset === l && e.focusNode === u && e.focusOffset === d && f === s) break;
          (s = f), (c = i - (n(s) - a));
        }
      } catch (e) {
        return n.error(e), null;
      }
      return e;
    }),
    (H.countWords = function (e) {
      let n = 0;
      return (
        e.split(/[\s\u200B\u200C]/).forEach((e) => {
          const o = e.length;
          for (let r = 0; r < o; r += 1)
            if (!t.wordSeparator.characterIsMember(e[r])) {
              n += 1;
              break;
            }
        }),
        n
      );
    }),
    (H.countVisibleCharacters = function (e, n = 0, o = e.length) {
      let r = 0;
      for (let i = n; i < o; i += 1) t.invisibleWhiteSpace.characterIsMember(e[i]) || (r += 1);
      return r;
    }),
    (H.countVisibleNonSpaceCharacters = function (e, t = 0, n = e.length) {
      let o = 0;
      for (let r = t; r < n; r += 1) H.isVisibleNonSpaceCharacter(e[r]) && (o += 1);
      return o;
    }),
    (H.isVisibleNonSpaceCharacter = function (e) {
      return !(t.invisibleWhiteSpace.characterIsMember(e) || t.wordSeparator.characterIsMemberNoHypen(e));
    }),
    (H.caretPositionFromPoint = function (e, t, n = document) {
      if (n.caretPositionFromPoint) return n.caretPositionFromPoint(e, t);
      if (n.caretRangeFromPoint) {
        const o = n.caretRangeFromPoint(e, t);
        return { offsetNode: o ? o.startContainer : null, offset: o ? o.startOffset : -1 };
      }
      return null;
    }),
    (H.normalizedText = function (e) {
      if (!e || e.length <= 0) return e;
      e = e.split("");
      for (let t = 0; t < e.length; t += 1) {
        const n = e[t],
          o = H.normalizedChar(e[t]);
        n !== o && (e[t] = o);
      }
      return e.join("");
    }),
    (H.normalizedChar = function (e) {
      switch (e.charCodeAt(0)) {
        case 8203:
        case 8204:
        case 8237:
        case 8236:
          return "";
        case 160:
          return " ";
        default:
          return e;
      }
    }),
    (H.getTextFromImage = function (e) {
      let t = $(e).attr("alt");
      if (!t || 0 === t.length) {
        const n = $(e).parent();
        if (1 === n.length && "FIGURE" === n[0].tagName) {
          const e = $("figcaption", n);
          e.length > 0 && (t = e[0].textContent);
        }
      }
      return t;
    }),
    (H.getImageSrc = function (e) {
      if (e.src && e.src.length > 0) return e.src;
      let t = e;
      if (!e.srcset || 0 === e.srcset.length) {
        const n = e.parentElement;
        if (!n || "PICTURE" !== n.tagName) return null;
        {
          const e = n.querySelectorAll("source");
          if (((t = e.length > 1 ? e[e.length - 1] : e[0]), !t)) return null;
        }
      }
      const { srcset: n } = t,
        o = n.split(",");
      return (o.length > 1 ? o[o.length - 1] : o[0]).trim().split(" ")[0];
    }),
    (H.copyDocumentProperties = function (e, t, n) {
      for (let o = 0; o < e.length; o += 1) {
        const r = t.documentElement.style.getPropertyValue(e[o]);
        n.documentElement.style.setProperty(e[o], r);
      }
    }),
    (H.visibleElementsInContainer = function (e, t, n, o, r) {
      const i = [],
        s = e.body.getBoundingClientRect();
      o = o || 0;
      const a = n.getBoundingClientRect().top + o;
      for (let e = 0; e < t.length; e += 1) {
        const n = t[e],
          o = n.getBoundingClientRect(),
          c = 3;
        (r ? o.top + c >= s.top + a && o.bottom - c <= s.bottom : o.top <= s.bottom && o.bottom >= a) && i.push(n);
      }
      return i;
    }),
    (H.registerService = async function (e, t, n, o) {
      const r = await H.sha256(`${e}:${t}`),
        i = Date.now();
      let s;
      const a = function (t) {
          t.data &&
            t.data.hasOwnProperty("message") &&
            t.data.message === P.MSG_SRV_AVAILABLE_ACK &&
            t.data.checksum === r &&
            (clearInterval(s),
            window.removeEventListener("message", a, !0),
            o({ success: !0, messageProxy: new P(`framePreloader::${e}`, { wnd: t.source, port: t.ports[0] }) }));
        },
        c = function () {
          const c = Date.now();
          3e4 < c - i && (clearInterval(s), window.removeEventListener("message", a, !0), o({ success: !1 })),
            (n ? window.top : window.parent).postMessage(
              { message: P.MSG_SRV_AVAILABLE, timestamp: c, service: e, checksum: r, key: t },
              "*"
            );
        };
      window.addEventListener("message", a, !0), (s = setInterval(c, 2e3)), c();
    }),
    (H.sha256 = async function (e) {
      const t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest("SHA-256", t);
      return Array.from(new Uint8Array(n))
        .map((e) => `00${e.toString(16)}`.slice(-2))
        .join("");
    }),
    (H.sortNodesByPosition = function (e) {
      return e.sort(V);
    }),
    (H.binaryStringToBlob = function (e) {
      if (e) {
        const { length: t } = e,
          n = new Uint8Array(t);
        for (let o = 0; o < t; o += 1) n[o] = e.charCodeAt(o);
        return new Blob([n], { type: "application/octet-stream" });
      }
      return null;
    }),
    (H.blobToBinaryString = function (e) {
      return new Promise((t, n) => {
        const o = new FileReader();
        o.readAsBinaryString(e),
          (o.onloadend = function () {
            t(o.result);
          }),
          (o.onerror = function () {
            n(null);
          });
      });
    }),
    (H.blobToBase64 = function (e) {
      const t = new FileReader();
      return (
        t.readAsDataURL(e),
        new Promise((e) => {
          t.onloadend = () => {
            e(t.result);
          };
        })
      );
    }),
    (H.arrayBufferToBase64 = function (e) {
      let t = "";
      const n = new Uint8Array(e),
        o = n.byteLength;
      for (let e = 0; e < o; e += 1) t += String.fromCharCode(n[e]);
      return window.btoa(t);
    }),
    (H.toUint8Array = function (e) {
      return "Buffer" === e.type && (e = e.data), (e = new Uint8Array(e)), [...e];
    }),
    (H.toArrayBuffer = function (e) {
      return e instanceof ArrayBuffer ? e : ("Buffer" === e.type && (e = e.data), new Uint8Array(e).buffer);
    }),
    (H.isOcrRewordifyPopupElement = function (e) {
      return Boolean(e && e.matches && (e.closest("div#dji-sru-ocr-content") || e.closest("div[dji-sru-rewordify-popup]")));
    }),
    (H.isSruMainContainerFrame = function (e) {
      return (
        "__dji_sru_main_container" === e.id ||
        !!(
          e.ownerDocument &&
          e.ownerDocument.defaultView &&
          e.ownerDocument.defaultView.frameElement &&
          "__dji_sru_main_container_iframe" === e.ownerDocument.defaultView.frameElement.id
        )
      );
    }),
    (H.computeCommonAncestor = function (e, t, ...n) {
      if (arguments.length < 1) return null;
      if (1 === arguments.length) return e;
      let o = X(e, t);
      if (!o || 2 === arguments.length) return o;
      let r = 0;
      for (; r < n.length; r += 1) if (((o = X(o, n[r])), !o)) return null;
      return 3 === o.nodeType && (o = o.parentNode), o;
    }),
    (H.isMathEquatioImage = function (e) {
      if (void 0 === e.nodeType) return !1;
      if (void 0 === e.tagName) return !1;
      if ("IMAGE" !== e.tagName.toUpperCase()) return !1;
      const t = e.querySelector("desc");
      return !!t && H.isMathMLEquatioDescription(t);
    }),
    (H.isMathMLEquatioDescription = function (e) {
      return (
        (e.nodeType !== Node.ELEMENT_NODE || "DESC" === e.tagName.toUpperCase()) &&
        !(!e.parentElement || "IMAGE" !== e.parentElement.tagName.toUpperCase()) &&
        H.isMathMLEquatioTextNode(e.firstChild)
      );
    }),
    (H.isMathMLEquatioTextNode = function (e) {
      return null != e && H.mightBeEquatioMathMLText(e.textContent);
    }),
    (H.mightBeEquatioMathMLText = function (e) {
      return e.startsWith("<math") && e.lastIndexOf('data-is-equatio="1"') > 0;
    }),
    (H.isMathMLElement = function (e) {
      return e && e.nodeType === Node.ELEMENT_NODE && "MATH" === e.tagName.toUpperCase();
    }),
    (H.hasMathMLData = function (e) {
      return e && e.nodeType === Node.ELEMENT_NODE && e.dataset && void 0 !== e.dataset.mathml;
    }),
    (H.isEquatioImg = function (e) {
      if (!e || e.nodeType !== Node.ELEMENT_NODE || "IMG" !== e.tagName.toUpperCase() || "string" != typeof e.src) return !1;
      try {
        return Boolean("equatio-api.texthelp.com" === new URL(e.src).hostname);
      } catch (e) {
        return !1;
      }
    }),
    (H.latexFromEquatioUri = function (e) {
      try {
        const t = new URL(e);
        if (0 === t.pathname.length) return "";
        return decodeURIComponent(t.pathname).substring(t.pathname.indexOf("/", 1) + 1);
      } catch (e) {
        return n.error(e), "";
      }
    }),
    (e.CharSet = t),
    (e.DOMRectExtensions = N),
    (e.Logger = n),
    (e.MessageProxy = P),
    (e.Messages = T),
    (e.PageObserver = b),
    (e.Proxy = k),
    (e.Utils = H),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
