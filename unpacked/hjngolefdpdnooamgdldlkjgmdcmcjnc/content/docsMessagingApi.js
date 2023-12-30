!(function (t) {
  var c = {};
  function r(e) {
    var o;
    return (
      c[e] ||
      ((o = c[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      t[e].call(o.exports, o, o.exports, r),
      (o.l = !0),
      o)
    ).exports;
  }
  (r.m = t),
    (r.c = c),
    (r.d = function (e, o, t) {
      r.o(e, o) ||
        Object.defineProperty(e, o, {
          enumerable: !0,
          get: t
        });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (r.t = function (o, e) {
      if ((1 & e && (o = r(o)), 8 & e)) return o;
      if (4 & e && "object" == typeof o && o && o.__esModule) return o;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          value: o
        }),
        2 & e && "string" != typeof o)
      )
        for (var c in o)
          r.d(
            t,
            c,
            function (e) {
              return o[e];
            }.bind(null, c)
          );
      return t;
    }),
    (r.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(o, "a", o), o;
    }),
    (r.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (r.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    r((r.s = 410));
})({
  10: function (e, o, t) {
    "use strict";
    t.d(o, "a", function () {
      return c;
    }),
      t.d(o, "d", function () {
        return a;
      }),
      t.d(o, "c", function () {
        return n;
      });
    const c = {
        GoogleDocs: "Google Docs",
        GoogleForms: "Google Forms",
        GoogleSlides: "Google Slides",
        GoogleDrawings: "Google Drawings",
        GoogleSheets: "Google Sheets"
      },
      r = {
        document: c.GoogleDocs,
        forms: c.GoogleForms,
        presentation: c.GoogleSlides,
        drawings: c.GoogleDrawings,
        spreadsheets: c.GoogleSheets
      },
      a = (e = window.location) => {
        const o = e.hostname,
          t = e.pathname;
        if ("docs.google.com" === o)
          return (
            0 <= t.indexOf("/forms/") &&
            (t.endsWith("/viewform") ||
              t.endsWith("/formResponse") ||
              t.endsWith("/prefill") ||
              t.endsWith("/startquiz") ||
              t.endsWith("/viewscore"))
          );
      },
      n = (e = window.location) => {
        const o = e.hostname,
          t = e.pathname;
        if ("docs.google.com" === o) {
          let e;
          const c = t.split("/").filter((e) => !!e);
          return (e = t.startsWith("/a/") ? c[2] : c[0]), r[e];
        }
      };
    o.b = () => -1 === window.location.href.indexOf("/document/");
  },
  113: function (e, o, t) {
    "use strict";
    var a = t(167);
    function c(e) {
      for (
        var o,
          t = {
            keyCode: [],
            altKey: !1,
            ctrlKey: !1,
            shiftKey: !1
          },
          c = 0,
          r = e.length;
        c < r;
        c++
      )
        18 === (o = a(e[c])) && (t.altKey = !0),
          17 === o && (t.ctrlKey = !0),
          16 === o && (t.shiftKey = !0),
          (o < 16 || 18 < o) && t.keyCode.push(o);
      return t;
    }
    function r(e) {
      var o = e.keyCode.length ? e.keyCode : [e.keyCode],
        t = [];
      e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.shiftKey && t.push("shift");
      for (var c = 0, r = o.length; c < r; c++) t.push(a(o[c]));
      return t;
    }
    e.exports = function (e) {
      if ("object" == typeof (e = "string" == typeof e ? e.replace(/\s/g, "").split("+") : e)) return (e.length ? c : r)(e);
    };
  },
  114: function (e, o, t) {
    "use strict";
    for (
      var c = function (e) {
          return null !== e && !Array.isArray(e) && "object" == typeof e;
        },
        r = {
          3: "Cancel",
          6: "Help",
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          28: "Convert",
          29: "NonConvert",
          30: "Accept",
          31: "ModeChange",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          41: "Select",
          42: "Print",
          43: "Execute",
          44: "PrintScreen",
          45: "Insert",
          46: "Delete",
          48: ["0", ")"],
          49: ["1", "!"],
          50: ["2", "@"],
          51: ["3", "#"],
          52: ["4", "$"],
          53: ["5", "%"],
          54: ["6", "^"],
          55: ["7", "&"],
          56: ["8", "*"],
          57: ["9", "("],
          91: "OS",
          93: "ContextMenu",
          144: "NumLock",
          145: "ScrollLock",
          181: "VolumeMute",
          182: "VolumeDown",
          183: "VolumeUp",
          186: [";", ":"],
          187: ["=", "+"],
          188: [",", "<"],
          189: ["-", "_"],
          190: [".", ">"],
          191: ["/", "?"],
          192: ["`", "~"],
          219: ["[", "{"],
          220: ["\\", "|"],
          221: ["]", "}"],
          222: ["'", '"'],
          224: "Meta",
          225: "AltGraph",
          246: "Attn",
          247: "CrSel",
          248: "ExSel",
          249: "EraseEof",
          250: "Play",
          251: "ZoomOut"
        },
        a = 0;
      a < 24;
      a += 1
    )
      r[112 + a] = "F" + (a + 1);
    for (var n = 0; n < 26; n += 1) {
      var d = n + 65;
      r[d] = [String.fromCharCode(d + 32), String.fromCharCode(d)];
    }
    var i = {
      codes: r,
      getCode: function (e) {
        return c(e) ? e.keyCode || e.which || this[e.key] : this[e];
      },
      getKey: function (e) {
        var o,
          t = c(e);
        return t && e.key ? e.key : ((o = r[t ? e.keyCode || e.which : e]), Array.isArray(o) ? (t ? o[e.shiftKey ? 1 : 0] : o[0]) : o);
      },
      Cancel: 3,
      Help: 6,
      Backspace: 8,
      Tab: 9,
      Clear: 12,
      Enter: 13,
      Shift: 16,
      Control: 17,
      Alt: 18,
      Pause: 19,
      CapsLock: 20,
      Escape: 27,
      Convert: 28,
      NonConvert: 29,
      Accept: 30,
      ModeChange: 31,
      " ": 32,
      PageUp: 33,
      PageDown: 34,
      End: 35,
      Home: 36,
      ArrowLeft: 37,
      ArrowUp: 38,
      ArrowRight: 39,
      ArrowDown: 40,
      Select: 41,
      Print: 42,
      Execute: 43,
      PrintScreen: 44,
      Insert: 45,
      Delete: 46,
      0: 48,
      ")": 48,
      1: 49,
      "!": 49,
      2: 50,
      "@": 50,
      3: 51,
      "#": 51,
      4: 52,
      $: 52,
      5: 53,
      "%": 53,
      6: 54,
      "^": 54,
      7: 55,
      "&": 55,
      8: 56,
      "*": 56,
      9: 57,
      "(": 57,
      a: 65,
      A: 65,
      b: 66,
      B: 66,
      c: 67,
      C: 67,
      d: 68,
      D: 68,
      e: 69,
      E: 69,
      f: 70,
      F: 70,
      g: 71,
      G: 71,
      h: 72,
      H: 72,
      i: 73,
      I: 73,
      j: 74,
      J: 74,
      k: 75,
      K: 75,
      l: 76,
      L: 76,
      m: 77,
      M: 77,
      n: 78,
      N: 78,
      o: 79,
      O: 79,
      p: 80,
      P: 80,
      q: 81,
      Q: 81,
      r: 82,
      R: 82,
      s: 83,
      S: 83,
      t: 84,
      T: 84,
      u: 85,
      U: 85,
      v: 86,
      V: 86,
      w: 87,
      W: 87,
      x: 88,
      X: 88,
      y: 89,
      Y: 89,
      z: 90,
      Z: 90,
      OS: 91,
      ContextMenu: 93,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      F13: 124,
      F14: 125,
      F15: 126,
      F16: 127,
      F17: 128,
      F18: 129,
      F19: 130,
      F20: 131,
      F21: 132,
      F22: 133,
      F23: 134,
      F24: 135,
      NumLock: 144,
      ScrollLock: 145,
      VolumeMute: 181,
      VolumeDown: 182,
      VolumeUp: 183,
      ";": 186,
      ":": 186,
      "=": 187,
      "+": 187,
      ",": 188,
      "<": 188,
      "-": 189,
      _: 189,
      ".": 190,
      ">": 190,
      "/": 191,
      "?": 191,
      "`": 192,
      "~": 192,
      "[": 219,
      "{": 219,
      "\\": 220,
      "|": 220,
      "]": 221,
      "}": 221,
      "'": 222,
      '"': 222,
      Meta: 224,
      AltGraph: 225,
      Attn: 246,
      CrSel: 247,
      ExSel: 248,
      EraseEof: 249,
      Play: 250,
      ZoomOut: 251
    };
    (i.Spacebar = i[" "]),
      (i.Digit0 = i[0]),
      (i.Digit1 = i[1]),
      (i.Digit2 = i[2]),
      (i.Digit3 = i[3]),
      (i.Digit4 = i[4]),
      (i.Digit5 = i[5]),
      (i.Digit6 = i[6]),
      (i.Digit7 = i[7]),
      (i.Digit8 = i[8]),
      (i.Digit9 = i[9]),
      (i.Tilde = i["~"]),
      (i.GraveAccent = i["`"]),
      (i.ExclamationPoint = i["!"]),
      (i.AtSign = i["@"]),
      (i.PoundSign = i["#"]),
      (i.PercentSign = i["%"]),
      (i.Caret = i["^"]),
      (i.Ampersand = i["&"]),
      (i.PlusSign = i["+"]),
      (i.MinusSign = i["-"]),
      (i.EqualsSign = i["="]),
      (i.DivisionSign = i["/"]),
      (i.MultiplicationSign = i["*"]),
      (i.Comma = i[","]),
      (i.Decimal = i["."]),
      (i.Colon = i[":"]),
      (i.Semicolon = i[";"]),
      (i.Pipe = i["|"]),
      (i.BackSlash = i["\\"]),
      (i.QuestionMark = i["?"]),
      (i.SingleQuote = i["'"]),
      (i.DoubleQuote = i['"']),
      (i.LeftCurlyBrace = i["{"]),
      (i.RightCurlyBrace = i["}"]),
      (i.LeftParenthesis = i["("]),
      (i.RightParenthesis = i[")"]),
      (i.LeftAngleBracket = i["<"]),
      (i.RightAngleBracket = i[">"]),
      (i.LeftSquareBracket = i["["]),
      (i.RightSquareBracket = i["]"]),
      (e.exports = i);
  },
  115: function (e, o, t) {
    "use strict";
    o.a = {
      3: {
        code: "Cancel"
      },
      6: {
        code: "Help"
      },
      8: {
        code: "Backspace"
      },
      9: {
        code: "Tab"
      },
      12: {
        code: "Clear"
      },
      13: {
        code: "Enter"
      },
      16: {
        code: "Shift"
      },
      17: {
        code: "Control"
      },
      18: {
        code: "Alt"
      },
      19: {
        code: "Pause"
      },
      20: {
        code: "CapsLock"
      },
      21: {
        code: "KanaMode"
      },
      22: {
        code: "Lang1"
      },
      25: {
        code: "Lang2"
      },
      27: {
        code: "Escape"
      },
      28: {
        code: "Convert"
      },
      29: {
        code: "NonConvert"
      },
      30: {
        code: "Accept"
      },
      31: {
        code: "ModeChange"
      },
      32: {
        code: "Space"
      },
      33: {
        code: "PageUp"
      },
      34: {
        code: "PageDown"
      },
      35: {
        code: "End"
      },
      36: {
        code: "Home"
      },
      37: {
        code: "ArrowLeft"
      },
      38: {
        code: "ArrowUp"
      },
      39: {
        code: "ArrowRight"
      },
      40: {
        code: "ArrowDown"
      },
      41: {
        code: "Select"
      },
      42: {
        code: "Print"
      },
      43: {
        code: "Execute"
      },
      44: {
        code: "PrintScreen"
      },
      45: {
        code: "Insert"
      },
      46: {
        code: "Delete"
      },
      47: {
        code: "Help"
      },
      48: {
        code: "Digit0",
        keyCap: "0"
      },
      49: {
        code: "Digit1",
        keyCap: "1"
      },
      50: {
        code: "Digit2",
        keyCap: "2"
      },
      51: {
        code: "Digit3",
        keyCap: "3"
      },
      52: {
        code: "Digit4",
        keyCap: "4"
      },
      53: {
        code: "Digit5",
        keyCap: "5"
      },
      54: {
        code: "Digit6",
        keyCap: "6"
      },
      55: {
        code: "Digit7",
        keyCap: "7"
      },
      56: {
        code: "Digit8",
        keyCap: "8"
      },
      57: {
        code: "Digit9",
        keyCap: "9"
      },
      65: {
        code: "KeyA",
        keyCap: "a"
      },
      66: {
        code: "KeyB",
        keyCap: "b"
      },
      67: {
        code: "KeyC",
        keyCap: "c"
      },
      68: {
        code: "KeyD",
        keyCap: "d"
      },
      69: {
        code: "KeyE",
        keyCap: "e"
      },
      70: {
        code: "KeyF",
        keyCap: "f"
      },
      71: {
        code: "KeyG",
        keyCap: "g"
      },
      72: {
        code: "KeyH",
        keyCap: "h"
      },
      73: {
        code: "KeyI",
        keyCap: "i"
      },
      74: {
        code: "KeyJ",
        keyCap: "j"
      },
      75: {
        code: "KeyK",
        keyCap: "k"
      },
      76: {
        code: "KeyL",
        keyCap: "l"
      },
      77: {
        code: "KeyM",
        keyCap: "m"
      },
      78: {
        code: "KeyN",
        keyCap: "n"
      },
      79: {
        code: "KeyO",
        keyCap: "o"
      },
      80: {
        code: "KeyP",
        keyCap: "p"
      },
      81: {
        code: "KeyQ",
        keyCap: "q"
      },
      82: {
        code: "KeyR",
        keyCap: "r"
      },
      83: {
        code: "KeyS",
        keyCap: "s"
      },
      84: {
        code: "KeyT",
        keyCap: "t"
      },
      85: {
        code: "KeyU",
        keyCap: "u"
      },
      86: {
        code: "KeyV",
        keyCap: "v"
      },
      87: {
        code: "KeyW",
        keyCap: "w"
      },
      88: {
        code: "KeyX",
        keyCap: "x"
      },
      89: {
        code: "KeyY",
        keyCap: "y"
      },
      90: {
        code: "KeyZ",
        keyCap: "z"
      },
      91: {
        code: "MetaLeft"
      },
      92: {
        code: "MetaRight"
      },
      93: {
        code: "ContextMenu"
      },
      95: {
        code: "Standby"
      },
      96: {
        code: "Numpad0",
        keyCap: "0"
      },
      97: {
        code: "Numpad1",
        keyCap: "1"
      },
      98: {
        code: "Numpad2",
        keyCap: "2"
      },
      99: {
        code: "Numpad3",
        keyCap: "3"
      },
      100: {
        code: "Numpad4",
        keyCap: "4"
      },
      101: {
        code: "Numpad5",
        keyCap: "5"
      },
      102: {
        code: "Numpad6",
        keyCap: "6"
      },
      103: {
        code: "Numpad7",
        keyCap: "7"
      },
      104: {
        code: "Numpad8",
        keyCap: "8"
      },
      105: {
        code: "Numpad9",
        keyCap: "9"
      },
      106: {
        code: "NumpadMultiply",
        keyCap: "*"
      },
      107: {
        code: "NumpadAdd",
        keyCap: "+"
      },
      108: {
        code: "NumpadComma",
        keyCap: ","
      },
      109: {
        code: "NumpadSubtract",
        keyCap: "-"
      },
      110: {
        code: "NumpadDecimal",
        keyCap: "."
      },
      111: {
        code: "NumpadDivide",
        keyCap: "/"
      },
      112: {
        code: "F1"
      },
      113: {
        code: "F2"
      },
      114: {
        code: "F3"
      },
      115: {
        code: "F4"
      },
      116: {
        code: "F5"
      },
      117: {
        code: "F6"
      },
      118: {
        code: "F7"
      },
      119: {
        code: "F8"
      },
      120: {
        code: "F9"
      },
      121: {
        code: "F10"
      },
      122: {
        code: "F11"
      },
      123: {
        code: "F12"
      },
      124: {
        code: "F13"
      },
      125: {
        code: "F14"
      },
      126: {
        code: "F15"
      },
      127: {
        code: "F16"
      },
      128: {
        code: "F17"
      },
      129: {
        code: "F18"
      },
      130: {
        code: "F19"
      },
      131: {
        code: "F20"
      },
      132: {
        code: "F21"
      },
      133: {
        code: "F22"
      },
      134: {
        code: "F23"
      },
      135: {
        code: "F24"
      },
      144: {
        code: "NumLock"
      },
      145: {
        code: "ScrollLock"
      },
      160: {
        code: "ShiftLeft"
      },
      161: {
        code: "ShiftRight"
      },
      162: {
        code: "ControlLeft"
      },
      163: {
        code: "ControlRight"
      },
      164: {
        code: "AltLeft"
      },
      165: {
        code: "AltRight"
      },
      166: {
        code: "BrowserBack"
      },
      167: {
        code: "BrowserForward"
      },
      168: {
        code: "BrowserRefresh"
      },
      169: {
        code: "BrowserStop"
      },
      170: {
        code: "BrowserSearch"
      },
      171: {
        code: "BrowserFavorites"
      },
      172: {
        code: "BrowserHome"
      },
      173: {
        code: "AudioVolumeMute"
      },
      174: {
        code: "AudioVolumeDown"
      },
      175: {
        code: "AudioVolumeUp"
      },
      176: {
        code: "MediaTrackNext"
      },
      177: {
        code: "MediaTrackPrevious"
      },
      178: {
        code: "MediaStop"
      },
      179: {
        code: "MediaPlayPause"
      },
      180: {
        code: "LaunchMail"
      },
      181: {
        code: "MediaSelect"
      },
      182: {
        code: "LaunchApp1"
      },
      183: {
        code: "LaunchApp2"
      },
      186: {
        code: "Semicolon",
        keyCap: ";"
      },
      187: {
        code: "Equal",
        keyCap: "="
      },
      188: {
        code: "Comma",
        keyCap: ","
      },
      189: {
        code: "Minus",
        keyCap: "-"
      },
      190: {
        code: "Period",
        keyCap: "."
      },
      191: {
        code: "Slash",
        keyCap: "/"
      },
      192: {
        code: "Backquote",
        keyCap: "`"
      },
      219: {
        code: "BracketLeft",
        keyCap: "["
      },
      220: {
        code: "Backslash",
        keyCap: "\\"
      },
      221: {
        code: "BracketRight",
        keyCap: "]"
      },
      222: {
        code: "Quote",
        keyCap: "'"
      },
      226: {
        code: "IntlBackslash",
        keyCap: "\\"
      },
      229: {
        code: "Process"
      },
      246: {
        code: "Attn"
      },
      247: {
        code: "CrSel"
      },
      248: {
        code: "ExSel"
      },
      249: {
        code: "EraseEof"
      },
      250: {
        code: "Play"
      },
      251: {
        code: "ZoomToggle"
      },
      254: {
        code: "Clear"
      }
    };
  },
  167: function (e, o, t) {
    "use strict";
    for (
      var c = {
          ctrl: 17,
          control: 17,
          alt: 18,
          option: 18,
          shift: 16,
          windows: 91,
          command: 91,
          esc: 27,
          escape: 27,
          "`": 192,
          "-": 189,
          "=": 187,
          backspace: 8,
          tab: 9,
          "\\": 220,
          "[": 219,
          "]": 221,
          ";": 186,
          "'": 222,
          enter: 13,
          return: 13,
          ",": 188,
          ".": 190,
          "/": 191,
          space: 32,
          pause: 19,
          break: 19,
          insert: 45,
          delete: 46,
          home: 36,
          end: 35,
          pageup: 33,
          pagedown: 34,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          capslock: 20,
          numlock: 144,
          scrolllock: 145
        },
        r = 1;
      r < 20;
      r++
    )
      c["f" + r] = 111 + r;
    function a(e) {
      var o = c[e.toLowerCase()];
      return void 0 !== o ? o : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
    }
    function n(e) {
      for (var o in c) if (c.hasOwnProperty(o) && c[o] === e) return o;
      return String.fromCharCode(e).toLowerCase();
    }
    e.exports = function (e) {
      return "string" == typeof e ? a(e) : "number" == typeof e ? n(e) : void 0;
    };
  },
  410: function (e, o, t) {
    "use strict";
    t.r(o);
    var c = t(49),
      o = t(113),
      g = t.n(o),
      k = t(114),
      r = t(10),
      h = t(115);
    function n(e, o) {
      var t,
        c,
        r,
        a,
        n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (n)
        return (
          (c = !(t = !0)),
          {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (t = e.done), e;
            },
            e: function (e) {
              (c = !0), (r = e);
            },
            f: function () {
              try {
                t || null == n.return || n.return();
              } finally {
                if (c) throw r;
              }
            }
          }
        );
      if (Array.isArray(e) || (n = d(e)) || (o && e && "number" == typeof e.length))
        return (
          n && (e = n),
          (a = 0),
          {
            s: (o = function () {}),
            n: function () {
              return a >= e.length
                ? {
                    done: !0
                  }
                : {
                    done: !1,
                    value: e[a++]
                  };
            },
            e: function (e) {
              throw e;
            },
            f: o
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function d(e, o) {
      var t;
      if (e)
        return "string" == typeof e
          ? a(e, o)
          : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) ||
            "Set" === t
          ? Array.from(e)
          : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? a(e, o)
          : void 0;
    }
    function a(e, o) {
      (null == o || o > e.length) && (o = e.length);
      for (var t = 0, c = new Array(o); t < o; t++) c[t] = e[t];
      return c;
    }
    const i = (t, c = document.querySelector(".docs-texteventtarget-iframe").contentDocument) => {
        try {
          const f = [];
          let e = null,
            o = null;
          for (var r in c)
            if (r.match(/^closure/) && "number" != typeof c[r]) {
              var a = c[r];
              if (a) {
                if (!e)
                  for (var n in a) {
                    var d = a[n];
                    if (d && d != c)
                      for (var i in d) {
                        var l = d[i];
                        l && null != l.length && l[0].src == c && ((e = n), f.concat(l));
                      }
                  }
                for (var s in a[e])
                  if (s == t)
                    for (var u = a[e][s], y = 0; y < u.length; y++) {
                      if (!o && u[y].src == c)
                        for (var p in u[y])
                          if (u[y][p].src == c) {
                            o = p;
                            break;
                          }
                      f.push({
                        eventObject: u[y],
                        eventHandler: u[y][o]
                      });
                    }
              }
            }
          return f;
        } catch (e) {}
      },
      m = () => {
        const e = document.querySelector(".docs-texteventtarget-iframe"),
          o = e.contentWindow,
          t = e.contentDocument;
        return {
          win: o,
          doc: t
        };
      },
      C = (e, o) => {
        const t = m(),
          c = t.doc,
          r = t.win,
          a = g()(e),
          n = a.altKey,
          d = a.shiftKey,
          i = a.keyCode;
        let l = a.ctrlKey;
        const s = e.toLowerCase().startsWith("cmd+") || e.startsWith("\u2318+"),
          u = (!s || e.toLowerCase().includes("control") || e.toLowerCase().includes("ctrl") || (l = !1), Array.isArray(i) ? i[0] : i),
          y = Object(k.getKey)(u),
          p = h.a[u] || {
            code: String.fromCharCode(u)
          },
          f = p.code,
          C = {
            altGraphKey: !1,
            bubbles: !0,
            cancelBubble: !1,
            cancelable: !0,
            clipboardData: void 0,
            currentTarget: c,
            defaultPrevented: !1,
            detail: 0,
            eventPhase: 0,
            keyLocation: 0,
            layerX: 0,
            layerY: 0,
            pageX: void 0,
            pageY: void 0,
            returnValue: !0,
            srcElement: c.body,
            target: c.body,
            timeStamp: new Date().getTime(),
            type: o,
            view: r,
            charCode: 0,
            altKey: n,
            ctrlKey: l,
            shiftKey: d,
            metaKey: s,
            keyCode: u,
            key: y,
            code: f
          };
        return C;
      },
      l = (e, o = "keydown") => {
        const t = m(),
          c = t.doc,
          r = t.win,
          a = c.body.querySelector("div[tabindex]"),
          n = C(e, o),
          d = n.key,
          i = n.code,
          l = n.keyCode,
          s = n.altKey,
          u = n.ctrlKey,
          y = n.shiftKey,
          p = n.metaKey,
          f = new KeyboardEvent(o, {
            bubbles: !0,
            cancelable: !0,
            view: r,
            key: d,
            code: i,
            keyCode: l,
            altKey: s,
            ctrlKey: u,
            shiftKey: y,
            metaKey: p
          });
        a.dispatchEvent(f);
      },
      s = (e, o = "keydown") => {
        var t,
          c = n(i(o));
        try {
          for (c.s(); !(t = c.n()).done; ) {
            const r = t.value,
              a = C(e, o);
            try {
              r.eventHandler(a);
            } catch (e) {
              console.error("Couldn't execute event", e);
            }
          }
        } catch (e) {
          c.e(e);
        } finally {
          c.f();
        }
      };
    var u = (e, o = "keydown") => {
        (Object(r.c)() === r.a.GoogleDocs ? s : l)(e, o);
      },
      y = "\u200b\u180e\u200b";
    const p = (e) => {
        u(e, "keydown"), u(e, "keyup");
      },
      f = () => {
        p("ctrl+alt+y"), p("cmd+alt+y");
      },
      S = () => {
        p("Shift+Left");
      },
      w = () => {
        p("Right");
      },
      v = () => {
        p("Alt+Shift+Up");
      },
      b = () => {
        p("Ctrl+Shift+Up");
      },
      A = () => {
        p("Delete");
      },
      D = () => {
        y.split("").forEach((e) => u(e, "keypress"));
      };
    window.addEventListener("message", (e) => {
      if (e.source === window && "https://docs.google.com" === e.origin && e.data && "EQUATIO_DOCS_MESSAGING_API" === e.data.type) {
        switch (e.data.action) {
          case c.a.ShowAltTextDialog:
            f();
            break;

          case c.a.SelectLeft:
            S();
            break;

          case c.a.ArrowRight:
            w();
            break;

          case c.a.SelectDocsEquationMac:
            v();
            break;

          case c.a.SelectDocsEquationWin:
            b();
            break;

          case c.a.InsertPlaceholderCharacter:
            D();
            break;

          case c.a.Delete:
            A();
        }
        window.postMessage(
          {
            type: "EQUATIO_DOCS_MESSAGING_API_RESPONSE",
            action: e.data.action
          },
          "https://docs.google.com"
        );
      }
    });
  },
  49: function (e, o, t) {
    "use strict";
    o.a = Object.freeze({
      ShowAltTextDialog: 0,
      SelectLeft: 1,
      ArrowRight: 2,
      SelectDocsEquationMac: 3,
      SelectDocsEquationWin: 4,
      InsertPlaceholderCharacter: 5,
      Delete: 6
    });
  }
});
