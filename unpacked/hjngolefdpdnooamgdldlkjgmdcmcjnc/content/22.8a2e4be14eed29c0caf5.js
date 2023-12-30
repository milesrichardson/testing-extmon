(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [22, 25],
  {
    107: function (e, t) {},
    113: function (e, t, r) {
      "use strict";
      var a = r(167);
      function n(e) {
        for (
          var t,
            r = {
              keyCode: [],
              altKey: !1,
              ctrlKey: !1,
              shiftKey: !1
            },
            n = 0,
            o = e.length;
          n < o;
          n++
        )
          18 === (t = a(e[n])) && (r.altKey = !0),
            17 === t && (r.ctrlKey = !0),
            16 === t && (r.shiftKey = !0),
            (t < 16 || 18 < t) && r.keyCode.push(t);
        return r;
      }
      function o(e) {
        var t = e.keyCode.length ? e.keyCode : [e.keyCode],
          r = [];
        e.altKey && r.push("alt"), e.ctrlKey && r.push("ctrl"), e.shiftKey && r.push("shift");
        for (var n = 0, o = t.length; n < o; n++) r.push(a(t[n]));
        return r;
      }
      e.exports = function (e) {
        if ("object" == typeof (e = "string" == typeof e ? e.replace(/\s/g, "").split("+") : e)) return (e.length ? n : o)(e);
      };
    },
    114: function (e, t, r) {
      "use strict";
      for (
        var n = function (e) {
            return null !== e && !Array.isArray(e) && "object" == typeof e;
          },
          o = {
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
        o[112 + a] = "F" + (a + 1);
      for (var c = 0; c < 26; c += 1) {
        var i = c + 65;
        o[i] = [String.fromCharCode(i + 32), String.fromCharCode(i)];
      }
      var s = {
        codes: o,
        getCode: function (e) {
          return n(e) ? e.keyCode || e.which || this[e.key] : this[e];
        },
        getKey: function (e) {
          var t,
            r = n(e);
          return r && e.key ? e.key : ((t = o[r ? e.keyCode || e.which : e]), Array.isArray(t) ? (r ? t[e.shiftKey ? 1 : 0] : t[0]) : t);
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
      (s.Spacebar = s[" "]),
        (s.Digit0 = s[0]),
        (s.Digit1 = s[1]),
        (s.Digit2 = s[2]),
        (s.Digit3 = s[3]),
        (s.Digit4 = s[4]),
        (s.Digit5 = s[5]),
        (s.Digit6 = s[6]),
        (s.Digit7 = s[7]),
        (s.Digit8 = s[8]),
        (s.Digit9 = s[9]),
        (s.Tilde = s["~"]),
        (s.GraveAccent = s["`"]),
        (s.ExclamationPoint = s["!"]),
        (s.AtSign = s["@"]),
        (s.PoundSign = s["#"]),
        (s.PercentSign = s["%"]),
        (s.Caret = s["^"]),
        (s.Ampersand = s["&"]),
        (s.PlusSign = s["+"]),
        (s.MinusSign = s["-"]),
        (s.EqualsSign = s["="]),
        (s.DivisionSign = s["/"]),
        (s.MultiplicationSign = s["*"]),
        (s.Comma = s[","]),
        (s.Decimal = s["."]),
        (s.Colon = s[":"]),
        (s.Semicolon = s[";"]),
        (s.Pipe = s["|"]),
        (s.BackSlash = s["\\"]),
        (s.QuestionMark = s["?"]),
        (s.SingleQuote = s["'"]),
        (s.DoubleQuote = s['"']),
        (s.LeftCurlyBrace = s["{"]),
        (s.RightCurlyBrace = s["}"]),
        (s.LeftParenthesis = s["("]),
        (s.RightParenthesis = s[")"]),
        (s.LeftAngleBracket = s["<"]),
        (s.RightAngleBracket = s[">"]),
        (s.LeftSquareBracket = s["["]),
        (s.RightSquareBracket = s["]"]),
        (e.exports = s);
    },
    115: function (e, t, r) {
      "use strict";
      t.a = {
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
    116: function (e, ne, t) {
      "use strict";
      !function (e) {
        function r(e, t) {
          var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              o,
              a,
              c,
              i = [],
              s = !0,
              u = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                s = !1;
              } else for (; !(s = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); s = !0);
            } catch (e) {
              (u = !0), (o = e);
            } finally {
              try {
                if (!s && null != r.return && ((c = r.return()), Object(c) !== c)) return;
              } finally {
                if (u) throw o;
              }
            }
            return i;
          }
        }
        function n(e, t) {
          return o(e) || r(e, t) || a(e, t) || i();
        }
        function o(e) {
          if (Array.isArray(e)) return e;
        }
        function a(e, t) {
          var r;
          if (e)
            return "string" == typeof e
              ? c(e, t)
              : "Map" ===
                  (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
                "Set" === r
              ? Array.from(e)
              : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? c(e, t)
              : void 0;
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function i() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        Object.defineProperty(ne, "__esModule", {
          value: !0
        });
        var s =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : {};
        function t(e, t) {
          return (
            e(
              (t = {
                exports: {}
              }),
              t.exports
            ),
            t.exports
          );
        }
        var u,
          f = function (e, t) {
            if (((t = t.split(":")[0]), !(e = +e))) return !1;
            switch (t) {
              case "http":
              case "ws":
                return 80 !== e;

              case "https":
              case "wss":
                return 443 !== e;

              case "ftp":
                return 21 !== e;

              case "gopher":
                return 70 !== e;

              case "file":
                return !1;
            }
            return 0 !== e;
          },
          q = Object.prototype.hasOwnProperty;
        function l(e) {
          try {
            return decodeURIComponent(e.replace(/\+/g, " "));
          } catch (e) {
            return null;
          }
        }
        function p(e) {
          try {
            return encodeURIComponent(e);
          } catch (e) {
            return null;
          }
        }
        function U(e) {
          for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}; (o = t.exec(e)); ) {
            var n = l(o[1]),
              o = l(o[2]);
            null === n || null === o || n in r || (r[n] = o);
          }
          return r;
        }
        function D(e, t) {
          var r,
            n,
            o = [];
          for (n in ("string" != typeof (t = t || "") && (t = "?"), e))
            q.call(e, n) &&
              ((r = e[n]) || (null !== r && r !== u && !isNaN(r)) || (r = ""), (n = p(n)), (r = p(r)), null !== n) &&
              null !== r &&
              o.push(n + "=" + r);
          return o.length ? t + o.join("&") : "";
        }
        var d = {
            stringify: D,
            parse: U
          },
          B = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
          h = /[\n\r\t]/g,
          N = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          b = /:\d+$/,
          F = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
          G = /^[a-zA-Z]:/;
        function m(e) {
          return (e || "").toString().replace(B, "");
        }
        var g = [
            ["#", "hash"],
            ["?", "query"],
            function (e, t) {
              return w(t.protocol) ? e.replace(/\\/g, "/") : e;
            },
            ["/", "pathname"],
            ["@", "auth", 1],
            [NaN, "host", void 0, 1, 1],
            [/:(\d*)$/, "port", void 0, 1],
            [NaN, "hostname", void 0, 1, 1]
          ],
          y = {
            hash: 1,
            query: 1
          };
        function v(e) {
          var t,
            r = (r = "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : {}).location || {},
            n = {},
            r = typeof (e = e || r);
          if ("blob:" === e.protocol) n = new E(unescape(e.pathname), {});
          else if ("string" == r) for (t in ((n = new E(e, {})), y)) delete n[t];
          else if ("object" == r) {
            for (t in e) t in y || (n[t] = e[t]);
            void 0 === n.slashes && (n.slashes = N.test(e.href));
          }
          return n;
        }
        function w(e) {
          return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
        }
        function x(e, t) {
          (e = (e = m(e)).replace(h, "")), (t = t || {});
          var r,
            n = (e = F.exec(e))[1] ? e[1].toLowerCase() : "",
            o = !!e[2],
            a = !!e[3],
            c = 0;
          return (
            o
              ? (c = a ? ((r = e[2] + e[3] + e[4]), e[2].length + e[3].length) : ((r = e[2] + e[4]), e[2].length))
              : a
              ? ((r = e[3] + e[4]), (c = e[3].length))
              : (r = e[4]),
            "file:" === n
              ? 2 <= c && (r = r.slice(2))
              : w(n)
              ? (r = e[4])
              : n
              ? o && (r = r.slice(2))
              : 2 <= c && w(t.protocol) && (r = e[4]),
            {
              protocol: n,
              slashes: o || w(n),
              slashesCount: c,
              rest: r
            }
          );
        }
        function H(e, t) {
          if ("" === e) return t;
          for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, t = r[n - 1], o = !1, a = 0; n--; )
            "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), a++) : a && (0 === n && (o = !0), r.splice(n, 1), a--);
          return o && r.unshift(""), ("." !== t && ".." !== t) || r.push(""), r.join("/");
        }
        function E(e, t, r) {
          if (((e = (e = m(e)).replace(h, "")), !(this instanceof E))) return new E(e, t, r);
          var n,
            o,
            a,
            c,
            i,
            s = g.slice(),
            u = typeof t,
            l = this,
            p = 0;
          for (
            "object" != u && "string" != u && ((r = t), (t = null)),
              r && "function" != typeof r && (r = d.parse),
              n = !(u = x(e || "", (t = v(t)))).protocol && !u.slashes,
              l.slashes = u.slashes || (n && t.slashes),
              l.protocol = u.protocol || t.protocol || "",
              e = u.rest,
              (("file:" === u.protocol && (2 !== u.slashesCount || G.test(e))) ||
                (!u.slashes && (u.protocol || u.slashesCount < 2 || !w(l.protocol)))) &&
                (s[3] = [/(.*)/, "pathname"]);
            p < s.length;
            p++
          )
            "function" == typeof (a = s[p])
              ? (e = a(e, l))
              : ((o = a[0]),
                (i = a[1]),
                o != o
                  ? (l[i] = e)
                  : "string" == typeof o
                  ? ~(c = "@" === o ? e.lastIndexOf(o) : e.indexOf(o)) &&
                    (e = "number" == typeof a[2] ? ((l[i] = e.slice(0, c)), e.slice(c + a[2])) : ((l[i] = e.slice(c)), e.slice(0, c)))
                  : (c = o.exec(e)) && ((l[i] = c[1]), (e = e.slice(0, c.index))),
                (l[i] = l[i] || (n && a[3] && t[i]) || ""),
                a[4] && (l[i] = l[i].toLowerCase()));
          r && (l.query = r(l.query)),
            n &&
              t.slashes &&
              "/" !== l.pathname.charAt(0) &&
              ("" !== l.pathname || "" !== t.pathname) &&
              (l.pathname = H(l.pathname, t.pathname)),
            "/" !== l.pathname.charAt(0) && w(l.protocol) && (l.pathname = "/" + l.pathname),
            f(l.port, l.protocol) || ((l.host = l.hostname), (l.port = "")),
            (l.username = l.password = ""),
            l.auth &&
              (~(c = l.auth.indexOf(":"))
                ? ((l.username = l.auth.slice(0, c)),
                  (l.username = encodeURIComponent(decodeURIComponent(l.username))),
                  (l.password = l.auth.slice(c + 1)),
                  (l.password = encodeURIComponent(decodeURIComponent(l.password))))
                : (l.username = encodeURIComponent(decodeURIComponent(l.auth))),
              (l.auth = l.password ? l.username + ":" + l.password : l.username)),
            (l.origin = "file:" !== l.protocol && w(l.protocol) && l.host ? l.protocol + "//" + l.host : "null"),
            (l.href = l.toString());
        }
        function K(e, t, r) {
          var n = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (r || d.parse)(t)), (n[e] = t);
              break;

            case "port":
              (n[e] = t), f(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : ((n.host = n.hostname), (n[e] = ""));
              break;

            case "hostname":
              (n[e] = t), n.port && (t += ":" + n.port), (n.host = t);
              break;

            case "host":
              (n[e] = t),
                b.test(t) ? ((t = t.split(":")), (n.port = t.pop()), (n.hostname = t.join(":"))) : ((n.hostname = t), (n.port = ""));
              break;

            case "protocol":
              (n.protocol = t.toLowerCase()), (n.slashes = !r);
              break;

            case "pathname":
            case "hash":
              t ? ((o = "pathname" === e ? "/" : "#"), (n[e] = t.charAt(0) !== o ? o + t : t)) : (n[e] = t);
              break;

            case "username":
            case "password":
              n[e] = encodeURIComponent(t);
              break;

            case "auth":
              var o = t.indexOf(":");
              ~o
                ? ((n.username = t.slice(0, o)),
                  (n.username = encodeURIComponent(decodeURIComponent(n.username))),
                  (n.password = t.slice(o + 1)),
                  (n.password = encodeURIComponent(decodeURIComponent(n.password))))
                : (n.username = encodeURIComponent(decodeURIComponent(t)));
          }
          for (var a = 0; a < g.length; a++) {
            var c = g[a];
            c[4] && (n[c[1]] = n[c[1]].toLowerCase());
          }
          return (
            (n.auth = n.password ? n.username + ":" + n.password : n.username),
            (n.origin = "file:" !== n.protocol && w(n.protocol) && n.host ? n.protocol + "//" + n.host : "null"),
            (n.href = n.toString()),
            n
          );
        }
        function W(e) {
          (e && "function" == typeof e) || (e = d.stringify);
          var t = this,
            r = t.host,
            n =
              ((n = t.protocol) && ":" !== n.charAt(n.length - 1) && (n += ":"),
              n + ((t.protocol && t.slashes) || w(t.protocol) ? "//" : ""));
          return (
            t.username
              ? ((n += t.username), t.password && (n += ":" + t.password), (n += "@"))
              : t.password
              ? (n = n + (":" + t.password) + "@")
              : "file:" !== t.protocol && w(t.protocol) && !r && "/" !== t.pathname && (n += "@"),
            (":" === r[r.length - 1] || (b.test(t.hostname) && !t.port)) && (r += ":"),
            (n += r + t.pathname),
            (r = "object" == typeof t.query ? e(t.query) : t.query) && (n += "?" !== r.charAt(0) ? "?" + r : r),
            t.hash && (n += t.hash),
            n
          );
        }
        (E.prototype = {
          set: K,
          toString: W
        }),
          (E.extractProtocol = x),
          (E.location = v),
          (E.trimLeft = m),
          (E.qs = d);
        for (
          var Q = E,
            e = z,
            O = Y,
            V = te,
            S = [],
            k = [],
            J = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            A = 0,
            $ = C.length;
          A < $;
          ++A
        )
          (S[A] = C[A]), (k[C.charCodeAt(A)] = A);
        function T(e) {
          var t = e.length;
          if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
          return (t = (e = -1 === (e = e.indexOf("=")) ? t : e) === t ? 0 : 4 - (e % 4)), [e, t];
        }
        function z(e) {
          return (3 * ((e = T(e))[0] + (e = e[1]))) / 4 - e;
        }
        function X(e, t, r) {
          return (3 * (t + r)) / 4 - r;
        }
        function Y(e) {
          for (var t, r = (n = T(e))[0], n = n[1], o = new J(X(e, r, n)), a = 0, c = 0 < n ? r - 4 : r, i = 0; i < c; i += 4)
            (t = (k[e.charCodeAt(i)] << 18) | (k[e.charCodeAt(i + 1)] << 12) | (k[e.charCodeAt(i + 2)] << 6) | k[e.charCodeAt(i + 3)]),
              (o[a++] = (t >> 16) & 255),
              (o[a++] = (t >> 8) & 255),
              (o[a++] = 255 & t);
          return (
            2 === n && ((t = (k[e.charCodeAt(i)] << 2) | (k[e.charCodeAt(i + 1)] >> 4)), (o[a++] = 255 & t)),
            1 === n &&
              ((t = (k[e.charCodeAt(i)] << 10) | (k[e.charCodeAt(i + 1)] << 4) | (k[e.charCodeAt(i + 2)] >> 2)),
              (o[a++] = (t >> 8) & 255),
              (o[a++] = 255 & t)),
            o
          );
        }
        function Z(e) {
          return S[(e >> 18) & 63] + S[(e >> 12) & 63] + S[(e >> 6) & 63] + S[63 & e];
        }
        function ee(e, t, r) {
          for (var n, o = [], a = t; a < r; a += 3)
            (n = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])), o.push(Z(n));
          return o.join("");
        }
        function te(e) {
          for (var t, r = e.length, n = r % 3, o = [], a = 0, c = r - n; a < c; a += 16383) o.push(ee(e, a, c < a + 16383 ? c : a + 16383));
          return (
            1 == n
              ? ((t = e[r - 1]), o.push(S[t >> 2] + S[(t << 4) & 63] + "=="))
              : 2 == n && ((t = (e[r - 2] << 8) + e[r - 1]), o.push(S[t >> 10] + S[(t >> 4) & 63] + S[(t << 2) & 63] + "=")),
            o.join("")
          );
        }
        (k["-".charCodeAt(0)] = 62), (k["_".charCodeAt(0)] = 63);
        var L = {
            byteLength: e,
            toByteArray: O,
            fromByteArray: V
          },
          _ = {
            read: function (e, t, r, n, o) {
              var a,
                c,
                i = 8 * o - n - 1,
                s = (1 << i) - 1,
                u = s >> 1,
                l = -7,
                p = r ? o - 1 : 0,
                f = r ? -1 : 1,
                o = e[t + p];
              for (p += f, a = o & ((1 << -l) - 1), o >>= -l, l += i; 0 < l; a = 256 * a + e[t + p], p += f, l -= 8);
              for (c = a & ((1 << -l) - 1), a >>= -l, l += n; 0 < l; c = 256 * c + e[t + p], p += f, l -= 8);
              if (0 === a) a = 1 - u;
              else {
                if (a === s) return c ? NaN : (1 / 0) * (o ? -1 : 1);
                (c += Math.pow(2, n)), (a -= u);
              }
              return (o ? -1 : 1) * c * Math.pow(2, a - n);
            },
            write: function (e, t, r, n, o, a) {
              var c,
                i,
                s = 8 * a - o - 1,
                u = (1 << s) - 1,
                l = u >> 1,
                p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = n ? 0 : a - 1,
                d = n ? 1 : -1,
                a = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((i = isNaN(t) ? 1 : 0), (c = u))
                    : ((c = Math.floor(Math.log(t) / Math.LN2)),
                      t * (n = Math.pow(2, -c)) < 1 && (c--, (n *= 2)),
                      2 <= (t += 1 <= c + l ? p / n : p * Math.pow(2, 1 - l)) * n && (c++, (n /= 2)),
                      u <= c + l
                        ? ((i = 0), (c = u))
                        : 1 <= c + l
                        ? ((i = (t * n - 1) * Math.pow(2, o)), (c += l))
                        : ((i = t * Math.pow(2, l - 1) * Math.pow(2, o)), (c = 0)));
                8 <= o;
                e[r + f] = 255 & i, f += d, i /= 256, o -= 8
              );
              for (c = (c << o) | i, s += o; 0 < s; e[r + f] = 255 & c, f += d, c /= 256, s -= 8);
              e[r + f - d] |= 128 * a;
            }
          },
          e = t(function (e, r) {
            var t = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null,
              n =
                ((r.Buffer = p),
                (r.SlowBuffer = function (e) {
                  return p.alloc(+(e = +e != e ? 0 : e));
                }),
                (r.INSPECT_MAX_BYTES = 50),
                2147483647);
            function i(e) {
              if (n < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
              return (e = new Uint8Array(e)), Object.setPrototypeOf(e, p.prototype), e;
            }
            function p(e, t, r) {
              if ("number" != typeof e) return o(e, t, r);
              if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
              return c(e);
            }
            function o(e, t, r) {
              if ("string" == typeof e) {
                var n = e,
                  o = t;
                if (p.isEncoding((o = "string" == typeof o && "" !== o ? o : "utf8")))
                  return (n = (c = i((a = 0 | f(n, o)))).write(n, o)) !== a ? c.slice(0, n) : c;
                throw new TypeError("Unknown encoding: " + o);
              }
              var a;
              if (ArrayBuffer.isView(e))
                return j((a = e), Uint8Array) ? u((n = new Uint8Array(a)).buffer, n.byteOffset, n.byteLength) : s(a);
              if (null != e) {
                if (j(e, ArrayBuffer) || (e && j(e.buffer, ArrayBuffer))) return u(e, t, r);
                if ("undefined" != typeof SharedArrayBuffer && (j(e, SharedArrayBuffer) || (e && j(e.buffer, SharedArrayBuffer))))
                  return u(e, t, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var c = e.valueOf && e.valueOf();
                if (null != c && c !== e) return p.from(c, t, r);
                if (
                  ((n = e),
                  (o = p.isBuffer(n)
                    ? (0 !== (c = i((a = 0 | l(n.length)))).length && n.copy(c, 0, 0, a), c)
                    : void 0 !== n.length
                    ? "number" != typeof n.length || I(n.length)
                      ? i(0)
                      : s(n)
                    : "Buffer" === n.type && Array.isArray(n.data)
                    ? s(n.data)
                    : void 0))
                )
                  return o;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                  return p.from(e[Symbol.toPrimitive]("string"), t, r);
              }
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
              );
            }
            function a(e) {
              if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
              if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            }
            function c(e) {
              return a(e), i(e < 0 ? 0 : 0 | l(e));
            }
            function s(e) {
              for (var t = e.length < 0 ? 0 : 0 | l(e.length), r = i(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
              return r;
            }
            function u(e, t, r) {
              if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
              if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
              return (
                (e = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)),
                Object.setPrototypeOf(e, p.prototype),
                e
              );
            }
            function l(e) {
              if (n <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
              return 0 | e;
            }
            function f(e, t) {
              if (p.isBuffer(e)) return e.length;
              if (ArrayBuffer.isView(e) || j(e, ArrayBuffer)) return e.byteLength;
              if ("string" != typeof e)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
              var r = e.length,
                n = 2 < arguments.length && !0 === arguments[2];
              if (!n && 0 === r) return 0;
              for (var o = !1; ; )
                switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;

                  case "utf8":
                  case "utf-8":
                    return A(e).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r;

                  case "hex":
                    return r >>> 1;

                  case "base64":
                    return T(e).length;

                  default:
                    if (o) return n ? -1 : A(e).length;
                    (t = ("" + t).toLowerCase()), (o = !0);
                }
            }
            function d(e, t, r) {
              var n,
                o = !1;
              if ((t = void 0 === t || t < 0 ? 0 : t) > this.length) return "";
              if ((r = void 0 === r || r > this.length ? this.length : r) <= 0) return "";
              if ((r >>>= 0) <= (t >>>= 0)) return "";
              for (e = e || "utf8"; ; )
                switch (e) {
                  case "hex":
                    var a = this,
                      c = t,
                      i = r,
                      s = a.length;
                    (!i || i < 0 || s < i) && (i = s);
                    for (var u = "", l = (c = !c || c < 0 ? 0 : c); l < i; ++l) u += R[a[l]];
                    return u;

                  case "utf8":
                  case "utf-8":
                    return S(this, t, r);

                  case "ascii":
                    for (var p = this, s = t, f = r, d = "", f = Math.min(p.length, f), h = s; h < f; ++h)
                      d += String.fromCharCode(127 & p[h]);
                    return d;

                  case "latin1":
                  case "binary":
                    for (var b = this, c = t, m = r, g = "", m = Math.min(b.length, m), y = c; y < m; ++y) g += String.fromCharCode(b[y]);
                    return g;

                  case "base64":
                    return (v = this), (n = r), 0 === (w = t) && n === v.length ? L.fromByteArray(v) : L.fromByteArray(v.slice(w, n));

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    for (var v = t, w = r, x = this.slice(v, w), E = "", O = 0; O < x.length - 1; O += 2)
                      E += String.fromCharCode(x[O] + 256 * x[O + 1]);
                    return E;

                  default:
                    if (o) throw new TypeError("Unknown encoding: " + e);
                    (e = (e + "").toLowerCase()), (o = !0);
                }
            }
            function h(e, t, r) {
              var n = e[t];
              (e[t] = e[r]), (e[r] = n);
            }
            function b(e, t, r, n, o) {
              if (0 === e.length) return -1;
              if (
                ("string" == typeof r ? ((n = r), (r = 0)) : 2147483647 < r ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                (r = (r = I((r = +r)) ? (o ? 0 : e.length - 1) : r) < 0 ? e.length + r : r) >= e.length)
              ) {
                if (o) return -1;
                r = e.length - 1;
              } else if (r < 0) {
                if (!o) return -1;
                r = 0;
              }
              if (("string" == typeof t && (t = p.from(t, n)), p.isBuffer(t))) return 0 === t.length ? -1 : m(e, t, r, n, o);
              if ("number" == typeof t)
                return (
                  (t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(e, t, r)
                    : m(e, [t], r, n, o)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function m(e, t, r, n, o) {
              var a = 1,
                c = e.length,
                i = t.length;
              if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2) return -1;
                (c /= a = 2), (i /= 2), (r /= 2);
              }
              function s(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a);
              }
              if (o)
                for (var u = -1, l = r; l < c; l++)
                  if (s(e, l) === s(t, -1 === u ? 0 : l - u)) {
                    if (l - (u = -1 === u ? l : u) + 1 === i) return u * a;
                  } else -1 !== u && (l -= l - u), (u = -1);
              else
                for (l = r = c < r + i ? c - i : r; 0 <= l; l--) {
                  for (var p = !0, f = 0; f < i; f++)
                    if (s(e, l + f) !== s(t, f)) {
                      p = !1;
                      break;
                    }
                  if (p) return l;
                }
              return -1;
            }
            function g(e, t, r, n) {
              return M(
                (function (e) {
                  for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                  return t;
                })(t),
                e,
                r,
                n
              );
            }
            function y(e, t, r, n) {
              return M(
                (function (e, t) {
                  for (var r, n, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                    (n = (r = e.charCodeAt(a)) >> 8), o.push(r % 256), o.push(n);
                  return o;
                })(t, e.length - r),
                e,
                r,
                n
              );
            }
            function S(e, t, r) {
              r = Math.min(e.length, r);
              for (var n = [], o = t; o < r; ) {
                var a,
                  c,
                  i,
                  s,
                  u = e[o],
                  l = null,
                  p = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
                if (o + p <= r)
                  switch (p) {
                    case 1:
                      u < 128 && (l = u);
                      break;

                    case 2:
                      128 == (192 & (a = e[o + 1])) && 127 < (s = ((31 & u) << 6) | (63 & a)) && (l = s);
                      break;

                    case 3:
                      (a = e[o + 1]),
                        (c = e[o + 2]),
                        128 == (192 & a) &&
                          128 == (192 & c) &&
                          2047 < (s = ((15 & u) << 12) | ((63 & a) << 6) | (63 & c)) &&
                          (s < 55296 || 57343 < s) &&
                          (l = s);
                      break;

                    case 4:
                      (a = e[o + 1]),
                        (c = e[o + 2]),
                        (i = e[o + 3]),
                        128 == (192 & a) &&
                          128 == (192 & c) &&
                          128 == (192 & i) &&
                          65535 < (s = ((15 & u) << 18) | ((63 & a) << 12) | ((63 & c) << 6) | (63 & i)) &&
                          s < 1114112 &&
                          (l = s);
                  }
                null === l
                  ? ((l = 65533), (p = 1))
                  : 65535 < l && (n.push((((l -= 65536) >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
                  n.push(l),
                  (o += p);
              }
              var f = n,
                d = f.length;
              if (d <= v) return String.fromCharCode.apply(String, f);
              for (var h = "", b = 0; b < d; ) h += String.fromCharCode.apply(String, f.slice(b, (b += v)));
              return h;
            }
            (r.kMaxLength = n),
              (p.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var e = new Uint8Array(1),
                    t = {
                      foo: function () {
                        return 42;
                      }
                    };
                  return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
                } catch (e) {
                  return !1;
                }
              })()) ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error(
                  "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                ),
              Object.defineProperty(p.prototype, "parent", {
                enumerable: !0,
                get: function () {
                  if (p.isBuffer(this)) return this.buffer;
                }
              }),
              Object.defineProperty(p.prototype, "offset", {
                enumerable: !0,
                get: function () {
                  if (p.isBuffer(this)) return this.byteOffset;
                }
              }),
              (p.poolSize = 8192),
              (p.from = o),
              Object.setPrototypeOf(p.prototype, Uint8Array.prototype),
              Object.setPrototypeOf(p, Uint8Array),
              (p.alloc = function (e, t, r) {
                return a(e), e <= 0 || void 0 === t ? i(e) : "string" == typeof r ? i(e).fill(t, r) : i(e).fill(t);
              }),
              (p.allocUnsafe = c),
              (p.allocUnsafeSlow = c),
              (p.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== p.prototype;
              }),
              (p.compare = function (e, t) {
                if (
                  (j(e, Uint8Array) && (e = p.from(e, e.offset, e.byteLength)),
                  j(t, Uint8Array) && (t = p.from(t, t.offset, t.byteLength)),
                  !p.isBuffer(e) || !p.isBuffer(t))
                )
                  throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var r = e.length, n = t.length, o = 0, a = Math.min(r, n); o < a; ++o)
                  if (e[o] !== t[o]) {
                    (r = e[o]), (n = t[o]);
                    break;
                  }
                return r < n ? -1 : n < r ? 1 : 0;
              }),
              (p.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;

                  default:
                    return !1;
                }
              }),
              (p.concat = function (e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return p.alloc(0);
                if (void 0 === t) for (o = t = 0; o < e.length; ++o) t += e[o].length;
                for (var r = p.allocUnsafe(t), n = 0, o = 0; o < e.length; ++o) {
                  var a = e[o];
                  if (j(a, Uint8Array)) n + a.length > r.length ? p.from(a).copy(r, n) : Uint8Array.prototype.set.call(r, a, n);
                  else {
                    if (!p.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, n);
                  }
                  n += a.length;
                }
                return r;
              }),
              (p.byteLength = f),
              (p.prototype._isBuffer = !0),
              (p.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) h(this, t, t + 1);
                return this;
              }),
              (p.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2);
                return this;
              }),
              (p.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4);
                return this;
              }),
              (p.prototype.toLocaleString = p.prototype.toString =
                function () {
                  var e = this.length;
                  return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : d.apply(this, arguments);
                }),
              (p.prototype.equals = function (e) {
                if (p.isBuffer(e)) return this === e || 0 === p.compare(this, e);
                throw new TypeError("Argument must be a Buffer");
              }),
              (p.prototype.inspect = function () {
                var e = "",
                  t = r.INSPECT_MAX_BYTES,
                  e = this.toString("hex", 0, t)
                    .replace(/(.{2})/g, "$1 ")
                    .trim();
                return this.length > t && (e += " ... "), "<Buffer " + e + ">";
              }),
              t && (p.prototype[t] = p.prototype.inspect),
              (p.prototype.compare = function (e, t, r, n, o) {
                if ((j(e, Uint8Array) && (e = p.from(e, e.offset, e.byteLength)), !p.isBuffer(e)))
                  throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (
                  (void 0 === r && (r = e ? e.length : 0),
                  void 0 === n && (n = 0),
                  void 0 === o && (o = this.length),
                  (t = void 0 === t ? 0 : t) < 0 || r > e.length || n < 0 || o > this.length)
                )
                  throw new RangeError("out of range index");
                if (o <= n && r <= t) return 0;
                if (o <= n) return -1;
                if (r <= t) return 1;
                if (this === e) return 0;
                for (
                  var a = (o >>>= 0) - (n >>>= 0),
                    c = (r >>>= 0) - (t >>>= 0),
                    i = Math.min(a, c),
                    s = this.slice(n, o),
                    u = e.slice(t, r),
                    l = 0;
                  l < i;
                  ++l
                )
                  if (s[l] !== u[l]) {
                    (a = s[l]), (c = u[l]);
                    break;
                  }
                return a < c ? -1 : c < a ? 1 : 0;
              }),
              (p.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r);
              }),
              (p.prototype.indexOf = function (e, t, r) {
                return b(this, e, t, r, !0);
              }),
              (p.prototype.lastIndexOf = function (e, t, r) {
                return b(this, e, t, r, !1);
              }),
              (p.prototype.write = function (e, t, r, n) {
                if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
                else {
                  if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  (t >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                }
                var o = this.length - t;
                if (((void 0 === r || o < r) && (r = o), (0 < e.length && (r < 0 || t < 0)) || t > this.length))
                  throw new RangeError("Attempt to write outside buffer bounds");
                n = n || "utf8";
                for (var a, c, i, s = !1; ; )
                  switch (n) {
                    case "hex":
                      var u = this,
                        l = e,
                        p = t,
                        f = r,
                        d = ((p = Number(p) || 0), u.length - p);
                      (!f || d < (f = Number(f))) && (f = d), (d = l.length) / 2 < f && (f = d / 2);
                      for (var h = 0; h < f; ++h) {
                        var b = parseInt(l.substr(2 * h, 2), 16);
                        if (I(b)) return h;
                        u[p + h] = b;
                      }
                      return h;

                    case "utf8":
                    case "utf-8":
                      return (d = t), (i = r), M(A(e, (c = this).length - d), c, d, i);

                    case "ascii":
                    case "latin1":
                    case "binary":
                      return g(this, e, t, r);

                    case "base64":
                      return (c = this), (i = t), (a = r), M(T(e), c, i, a);

                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return y(this, e, t, r);

                    default:
                      if (s) throw new TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (s = !0);
                  }
              }),
              (p.prototype.toJSON = function () {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
                };
              });
            var v = 4096;
            function w(e, t, r) {
              if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
              if (r < e + t) throw new RangeError("Trying to access beyond buffer length");
            }
            function x(e, t, r, n, o, a) {
              if (!p.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (o < t || t < a) throw new RangeError('"value" argument is out of bounds');
              if (r + n > e.length) throw new RangeError("Index out of range");
            }
            function E(e, t, r, n) {
              if (r + n > e.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }
            function O(e, t, r, n, o) {
              return (t = +t), (r >>>= 0), o || E(e, 0, r, 4), _.write(e, t, r, n, 23, 4), r + 4;
            }
            function k(e, t, r, n, o) {
              return (t = +t), (r >>>= 0), o || E(e, 0, r, 8), _.write(e, t, r, n, 52, 8), r + 8;
            }
            (p.prototype.slice = function (e, t) {
              var r = this.length,
                r =
                  ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
                  (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r),
                  t < e && (t = e),
                  this.subarray(e, t));
              return Object.setPrototypeOf(r, p.prototype), r;
            }),
              (p.prototype.readUintLE = p.prototype.readUIntLE =
                function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
                  for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256); ) n += this[e + a] * o;
                  return n;
                }),
              (p.prototype.readUintBE = p.prototype.readUIntBE =
                function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
                  for (var n = this[e + --t], o = 1; 0 < t && (o *= 256); ) n += this[e + --t] * o;
                  return n;
                }),
              (p.prototype.readUint8 = p.prototype.readUInt8 =
                function (e, t) {
                  return (e >>>= 0), t || w(e, 1, this.length), this[e];
                }),
              (p.prototype.readUint16LE = p.prototype.readUInt16LE =
                function (e, t) {
                  return (e >>>= 0), t || w(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
              (p.prototype.readUint16BE = p.prototype.readUInt16BE =
                function (e, t) {
                  return (e >>>= 0), t || w(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
              (p.prototype.readUint32LE = p.prototype.readUInt32LE =
                function (e, t) {
                  return (
                    (e >>>= 0), t || w(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
                  );
                }),
              (p.prototype.readUint32BE = p.prototype.readUInt32BE =
                function (e, t) {
                  return (
                    (e >>>= 0), t || w(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
              (p.prototype.readIntLE = function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
                for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256); ) n += this[e + a] * o;
                return (o *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
              }),
              (p.prototype.readIntBE = function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
                for (var n = t, o = 1, a = this[e + --n]; 0 < n && (o *= 256); ) a += this[e + --n] * o;
                return (o *= 128) <= a && (a -= Math.pow(2, 8 * t)), a;
              }),
              (p.prototype.readInt8 = function (e, t) {
                return (e >>>= 0), t || w(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
              }),
              (p.prototype.readInt16LE = function (e, t) {
                return (e >>>= 0), t || w(e, 2, this.length), 32768 & (t = this[e] | (this[e + 1] << 8)) ? 4294901760 | t : t;
              }),
              (p.prototype.readInt16BE = function (e, t) {
                return (e >>>= 0), t || w(e, 2, this.length), 32768 & (t = this[e + 1] | (this[e] << 8)) ? 4294901760 | t : t;
              }),
              (p.prototype.readInt32LE = function (e, t) {
                return (e >>>= 0), t || w(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
              }),
              (p.prototype.readInt32BE = function (e, t) {
                return (e >>>= 0), t || w(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
              }),
              (p.prototype.readFloatLE = function (e, t) {
                return (e >>>= 0), t || w(e, 4, this.length), _.read(this, e, !0, 23, 4);
              }),
              (p.prototype.readFloatBE = function (e, t) {
                return (e >>>= 0), t || w(e, 4, this.length), _.read(this, e, !1, 23, 4);
              }),
              (p.prototype.readDoubleLE = function (e, t) {
                return (e >>>= 0), t || w(e, 8, this.length), _.read(this, e, !0, 52, 8);
              }),
              (p.prototype.readDoubleBE = function (e, t) {
                return (e >>>= 0), t || w(e, 8, this.length), _.read(this, e, !1, 52, 8);
              }),
              (p.prototype.writeUintLE = p.prototype.writeUIntLE =
                function (e, t, r, n) {
                  (e = +e), (t >>>= 0), (r >>>= 0), n || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < r && (o *= 256); ) this[t + a] = (e / o) & 255;
                  return t + r;
                }),
              (p.prototype.writeUintBE = p.prototype.writeUIntBE =
                function (e, t, r, n) {
                  (e = +e), (t >>>= 0), (r >>>= 0), n || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var o = r - 1,
                    a = 1;
                  for (this[t + o] = 255 & e; 0 <= --o && (a *= 256); ) this[t + o] = (e / a) & 255;
                  return t + r;
                }),
              (p.prototype.writeUint8 = p.prototype.writeUInt8 =
                function (e, t, r) {
                  return (e = +e), (t >>>= 0), r || x(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
                }),
              (p.prototype.writeUint16LE = p.prototype.writeUInt16LE =
                function (e, t, r) {
                  return (e = +e), (t >>>= 0), r || x(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
                }),
              (p.prototype.writeUint16BE = p.prototype.writeUInt16BE =
                function (e, t, r) {
                  return (e = +e), (t >>>= 0), r || x(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
                }),
              (p.prototype.writeUint32LE = p.prototype.writeUInt32LE =
                function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
              (p.prototype.writeUint32BE = p.prototype.writeUInt32BE =
                function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
              (p.prototype.writeIntLE = function (e, t, r, n) {
                (e = +e), (t >>>= 0), n || x(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                var o = 0,
                  a = 1,
                  c = 0;
                for (this[t] = 255 & e; ++o < r && (a *= 256); )
                  e < 0 && 0 === c && 0 !== this[t + o - 1] && (c = 1), (this[t + o] = (((e / a) >> 0) - c) & 255);
                return t + r;
              }),
              (p.prototype.writeIntBE = function (e, t, r, n) {
                (e = +e), (t >>>= 0), n || x(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                var o = r - 1,
                  a = 1,
                  c = 0;
                for (this[t + o] = 255 & e; 0 <= --o && (a *= 256); )
                  e < 0 && 0 === c && 0 !== this[t + o + 1] && (c = 1), (this[t + o] = (((e / a) >> 0) - c) & 255);
                return t + r;
              }),
              (p.prototype.writeInt8 = function (e, t, r) {
                return (e = +e), (t >>>= 0), r || x(this, e, t, 1, 127, -128), (this[t] = 255 & (e = e < 0 ? 255 + e + 1 : e)), t + 1;
              }),
              (p.prototype.writeInt16LE = function (e, t, r) {
                return (e = +e), (t >>>= 0), r || x(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
              }),
              (p.prototype.writeInt16BE = function (e, t, r) {
                return (e = +e), (t >>>= 0), r || x(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
              }),
              (p.prototype.writeInt32LE = function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || x(this, e, t, 4, 2147483647, -2147483648),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24),
                  t + 4
                );
              }),
              (p.prototype.writeInt32BE = function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || x(this, e, t, 4, 2147483647, -2147483648),
                  (this[t] = (e = e < 0 ? 4294967295 + e + 1 : e) >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
              (p.prototype.writeFloatLE = function (e, t, r) {
                return O(this, e, t, !0, r);
              }),
              (p.prototype.writeFloatBE = function (e, t, r) {
                return O(this, e, t, !1, r);
              }),
              (p.prototype.writeDoubleLE = function (e, t, r) {
                return k(this, e, t, !0, r);
              }),
              (p.prototype.writeDoubleBE = function (e, t, r) {
                return k(this, e, t, !1, r);
              }),
              (p.prototype.copy = function (e, t, r, n) {
                if (!p.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (((r = r || 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), (n = 0 < n && n < r ? r : n) === r))
                  return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if ((t = t || 0) < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length);
                var o = (n = e.length - t < n - r ? e.length - t + r : n) - r;
                return (
                  this === e && "function" == typeof Uint8Array.prototype.copyWithin
                    ? this.copyWithin(t, r, n)
                    : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                  o
                );
              }),
              (p.prototype.fill = function (e, t, r, n) {
                if ("string" == typeof e) {
                  if (
                    ("string" == typeof t ? ((n = t), (t = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
                    void 0 !== n && "string" != typeof n)
                  )
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof n && !p.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                  var o;
                  1 === e.length && ((o = e.charCodeAt(0)), ("utf8" === n && o < 128) || "latin1" === n) && (e = o);
                } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                var a;
                if (!(r <= t))
                  if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), "number" == typeof (e = e || 0)))
                    for (a = t; a < r; ++a) this[a] = e;
                  else {
                    var c = p.isBuffer(e) ? e : p.from(e, n),
                      i = c.length;
                    if (0 === i) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (a = 0; a < r - t; ++a) this[a + t] = c[a % i];
                  }
                return this;
              });
            var C = /[^+/0-9A-Za-z-_]/g;
            function A(e, t) {
              t = t || 1 / 0;
              for (var r, n = e.length, o = null, a = [], c = 0; c < n; ++c) {
                if (55295 < (r = e.charCodeAt(c)) && r < 57344) {
                  if (!o) {
                    if (56319 < r) {
                      -1 < (t -= 3) && a.push(239, 191, 189);
                      continue;
                    }
                    if (c + 1 === n) {
                      -1 < (t -= 3) && a.push(239, 191, 189);
                      continue;
                    }
                    o = r;
                    continue;
                  }
                  if (r < 56320) {
                    -1 < (t -= 3) && a.push(239, 191, 189), (o = r);
                    continue;
                  }
                  r = 65536 + (((o - 55296) << 10) | (r - 56320));
                } else o && -1 < (t -= 3) && a.push(239, 191, 189);
                if (((o = null), r < 128)) {
                  if (--t < 0) break;
                  a.push(r);
                } else if (r < 2048) {
                  if ((t -= 2) < 0) break;
                  a.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((t -= 3) < 0) break;
                  a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((t -= 4) < 0) break;
                  a.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                }
              }
              return a;
            }
            function T(e) {
              return L.toByteArray(
                (function (e) {
                  if ((e = (e = e.split("=")[0]).trim().replace(C, "")).length < 2) return "";
                  for (; e.length % 4 != 0; ) e += "=";
                  return e;
                })(e)
              );
            }
            function M(e, t, r, n) {
              for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
              return o;
            }
            function j(e, t) {
              return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
            }
            function I(e) {
              return e != e;
            }
            var R = (function () {
              for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r)
                for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
              return t;
            })();
          }),
          M = e.Buffer,
          j =
            (e.SlowBuffer,
            e.INSPECT_MAX_BYTES,
            e.kMaxLength,
            function (e, t) {
              for (var r = Math.min(1024, e.length), n = "".concat(t, "::"), o = "::".concat(t), a = 0; a > 0 - e.length; ) {
                var c,
                  i = e.slice(a || 0 - r, e.length).toString("utf8");
                if (i.includes(n)) return (c = i.indexOf(n)), i.substring(c + n.length, i.length - o.length);
                a -= r;
              }
              return null;
            }),
          I = function (e) {
            var t;
            if (e instanceof M)
              return e.length < 9
                ? null
                : "::equatio" === e.slice(e.length - 9, e.length).toString("utf8")
                ? j(e, "equatio")
                : "::desmos" === e.slice(e.length - 8, e.length).toString("utf8")
                ? null == (t = j(e, "desmos"))
                  ? null
                  : {
                      type: "desmos",
                      state: JSON.parse(t)
                    }
                : "::mathspace" !== e.slice(e.length - 11, e.length).toString("utf8") || null == (t = j(e, "mathspace"))
                ? null
                : {
                    type: "mathspace",
                    platformIntegrationId: t
                  };
            throw Error("Expected a Buffer, but received ".concat(typeof e));
          },
          R = function (e) {
            return new Promise(function (r, n) {
              window && window.webkitResolveLocalFileSystemURL && e
                ? window.webkitResolveLocalFileSystemURL(e, function (e) {
                    e.file(function (e) {
                      var t = new FileReader();
                      (t.onload = function () {
                        var e = t.result;
                        null === e
                          ? n(Error("Failed to read local file system URL"))
                          : ((e = M.from(e)), (e = I(e)), r(null === e ? null : e));
                      }),
                        (t.onerror = function (e) {
                          n(e);
                        }),
                        t.readAsArrayBuffer(e);
                    });
                  })
                : r(null);
            });
          },
          re = ["equatio-api.texthelp.com", "equatio-api.dev.texthelp.com"],
          P = function (e) {
            var e = e.toString(),
              t = new Q(e);
            return re.some(function (e) {
              return e === t.host;
            }) &&
              (t.pathname.startsWith("/png/") || t.pathname.startsWith("/svg/"))
              ? ((e = n(t.pathname.split("/").splice(2, 1), 1)[0]), decodeURIComponent(e))
              : null;
          },
          O = function (e) {
            var t = P(e);
            return null !== t
              ? Promise.resolve(t)
              : e && 0 <= e.indexOf("filesystem:")
              ? R(e)
              : fetch(e)
                  .then(function (e) {
                    return e.arrayBuffer();
                  })
                  .then(function (e) {
                    return (e = M.from(e)), I(e);
                  });
          };
        (ne.getLatexFromBuffer = I), (ne.getLatexFromPersistentUrl = R), (ne.getLatexFromKnownUrl = P), (ne.getLatexFromImageUrl = O);
      }.call(this, t(58));
    },
    117: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return p;
      });
      var n = r(3),
        o = r.n(n),
        n = r(1),
        a = r.n(n);
      const c = (t) =>
          ["https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/"].some((e) => t.includes && t.includes(e)),
        i = (e) => [].concat(...e.map((e) => (Array.isArray(e) ? i(e) : e))),
        s = (e, t) => e.filter(t).pop(),
        u = (e) => {
          const n = [],
            o = i(e),
            t = o.reduce((e, t, r) => ("string" == typeof t && (c(t) || t.endsWith("\u2063")) ? [...e, r] : e), []);
          return 0 === t.length
            ? null
            : (t.reverse().forEach((e) => {
                const t = o.slice(0, e),
                  r = s(t, (e) => "string" == typeof e && 0 < e.length);
                n.push(r);
              }),
              n);
        },
        l = (function () {
          var t = o()(
            a.a.mark(function e(o) {
              var t, r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch(window.location.href.toString(), {
                          method: "GET",
                          credentials: "same-origin"
                        })
                      );

                    case 2:
                      return (t = e.sent), (e.next = 5), t.text();

                    case 5:
                      (t = e.sent),
                        ((r = document.createElement("div")).id = "th-page-reloaded"),
                        (r.style.display = "none"),
                        (r.innerHTML = t),
                        (r = Array.prototype.slice.call(r.querySelectorAll("script"))),
                        r
                          .filter((e) => "DOCS_modelChunk = [" === e.innerHTML.substr(0, 19))
                          .forEach((e) => {
                            let t = e.innerHTML.replace("DOCS_modelChunk = ", "");
                            const r = t.lastIndexOf("]; "),
                              n = ((t = t.substr(0, r + 1)), JSON.parse(t));
                            o(n);
                          });

                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        p = (function () {
          var e = o()(
            a.a.mark(function e() {
              var o;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = {}),
                        (e.next = 3),
                        l((e) => {
                          const n = i(e),
                            t = n.reduce((e, t, r) => ("string" == typeof t && c(t) ? [...e, r] : e), []);
                          if (0 === t.length) return null;
                          t.reverse().forEach((e) => {
                            const t = n.slice(0, e),
                              r = s(t, (e) => "string" == typeof e && 0 < e.length);
                            o[r] = n[e];
                          });
                        })
                      );

                    case 3:
                      return e.abrupt("return", o);

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      t.a = o()(
        a.a.mark(function e() {
          var r;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = []),
                    (e.next = 3),
                    l((e) => {
                      const t = u(e);
                      t && r.push(t);
                    })
                  );

                case 3:
                  return e.abrupt("return", i(r));

                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
    12: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "e", function () {
          return l;
        });
      var t = r(7),
        n = r.n(t);
      function o(t, e) {
        var r,
          n = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(t)),
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                n()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      const a = {
          GraphLoad: "CORE_DESMOS_LOAD",
          GraphSetExpression: "CORE_DESMOS_SET_EXPRESSION",
          GraphDestroy: "CORE_DESMOS_DESTROY_CALCULATOR",
          GraphInitialise: "CORE_DESMOS_INITIALISE_CALCULATOR",
          GraphSetLocale: "CORE_DESMOS_SET_LOCALE",
          GraphSetLatex: "CORE_DESMOS_SET_CALCULATOR_LATEX",
          GraphSetState: "CORE_DESMOS_SET_CALCULATOR_STATE",
          GraphSetCalculator: "CORE_DESMOS_SET_CALCULATOR",
          GraphClear: "CORE_DESMOS_CLEAR_GRAPH",
          GraphGetScreenshot: "CORE_DESMOS_GET_CALCULATOR_SCREENSHOT",
          GraphGetState: "CORE_DESMOS_GET_CALCULATOR_STATE",
          GraphFocus: "CORE_DESMOS_FOCUS",
          GraphDispatchLatex: "CORE_DESMOS_DISPATCH_LATEX",
          GraphUpdateSettings: "CORE_DESMOS_LOAD_SETTINGS",
          GraphDisablePrediction: "CORE_DESMOS_DISABLE_PREDICTION",
          GraphGetPrediction: "CORE_DESMOS_GET_PREDICTION",
          GraphSetPrediction: "CORE_DESMOS_SET_PREDICTION",
          CalcLoad: "CORE_DESMOS_SCIENTIFIC_LOAD",
          CalcSetLocale: "CORE_DESMOS_SCIENTIFIC_UPDATE_LOCALE",
          CalcInitialise: "CORE_DESMOS_SCIENTIFIC_INITIALIZE",
          CalcDestroy: "CORE_DESMOS_SCIENTIFIC_DESTROY"
        },
        c = {
          Graph: "EquatioGraphContainer",
          Calc: "EquatioCalculatorContainer"
        },
        s = (e) => {
          const t = document.querySelector("#" + e);
          if (!t) return null;
          const r = t.contentWindow;
          return r;
        },
        u = (e, t, r = {}) => {
          const n = s(e);
          n &&
            n.postMessage(
              i(
                {
                  action: t
                },
                r
              ),
              "*"
            );
        },
        l = (e, o, a = {}, c = 1e3) =>
          new Promise((t) => {
            const r = s(e);
            if (r) {
              const n = (e) => {
                e.source === r && e.data.action === o && (t(e.data.result), window.removeEventListener("message", n));
              };
              window.addEventListener("message", n),
                r.postMessage(
                  i(
                    {
                      action: o
                    },
                    a
                  ),
                  "*"
                ),
                setTimeout(() => {
                  t(), window.removeEventListener("message", n);
                }, c);
            } else console.error("Equatio Desmos Frame Not Available"), t();
          });
    },
    120: function (e, t, r) {
      "use strict";
      var n = r(3),
        o = r.n(n),
        n = r(1),
        a = r.n(n),
        c = (e) => {
          return null == (e = e[0]) ? void 0 : e.s;
        },
        i = (e, r) =>
          e
            .filter((e) => {
              return "ae" === e.ty && !(null == (e = null == (e = e) ? void 0 : e.epm) || !e.ee_eo);
            })
            .map((e) => {
              const t = e;
              return {
                id: t.epm.ee_eo.i_cid,
                originalSrc: t.epm.ee_eo.i_src,
                proxySrc: r[t.epm.ee_eo.i_cid],
                width: t.epm.ee_eo.i_wth,
                height: t.epm.ee_eo.i_ht
              };
            });
      const s = (e) => {
          const [, t] = /DOCS_modelChunk = (.*?); DOCS_modelChunkLoadStart/.exec(e) || [];
          return JSON.parse(t);
        },
        u = (e) => {
          const [, t] = /_createKixApplication\(.*?, \{(.*?)\}/.exec(e) || [];
          return JSON.parse(`{${t}}`);
        },
        l = (e) => {
          let t;
          try {
            t = s(e);
          } catch (e) {
            throw Error("Failed to parse Docs Model");
          }
          let r;
          try {
            r = u(e);
          } catch (e) {}
          return {
            getText: () => c(t),
            getImages: () => {
              if (r) return i(t, r);
              throw Error("HTML did not contain any image data");
            }
          };
        },
        p = async (e) => {
          if ("string" != typeof e) throw Error("url must be a string");
          if (!e.startsWith("https://docs.google.com")) throw Error("invalid_google_url");
          const t = await fetch(e, {
              method: "GET",
              credentials: "same-origin"
            }),
            r = await t.text();
          return l(r);
        };
      var n = r(77),
        f = r.n(n),
        d = r(4);
      const h = (e, t) => {
        if (t.startsWith("filesystem:")) {
          const r = t.split("filesystem:")[1],
            n = f()(r);
          return "docs.google.com" !== n.hostname ? null : e.getImages().find((e) => e.id === n.pathname.split("/").pop());
        }
        return e.getImages().find((e) => e.proxySrc.toLowerCase() === t.toLowerCase());
      };
      t.a = (function () {
        var t = o()(
          a.a.mark(function e(t) {
            var r;
            return a.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((r = h(l(document.body.outerHTML), t))) {
                      e.next = 8;
                      break;
                    }
                    return (e.t0 = h), (e.next = 5), p(window.location.href);

                  case 5:
                    (e.t1 = e.sent), (e.t2 = t), (r = (0, e.t0)(e.t1, e.t2));

                  case 8:
                    if (r) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", null);

                  case 10:
                    return e.abrupt("return", Object(d.j)(r.originalSrc));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    },
    121: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r(3),
        n = r.n(n),
        o = r(1),
        a = r.n(o),
        c = r(4);
      t.b = n()(
        a.a.mark(function e() {
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", Object(c.b)());

                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      const i = (e, a, c, i, s) =>
        new Promise((t, r) => {
          const n = document.createElement("canvas"),
            o = ((n.width = i), (n.height = s), new Image());
          (o.onload = () => {
            const e = n.getContext("2d");
            e.drawImage(o, a, c, i, s, 0, 0, i, s), t(n.toDataURL());
          }),
            (o.onerror = (e) => {
              r(e);
            }),
            (o.src = e);
        });
    },
    143: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return f;
      });
      var n = r(3),
        o = r.n(n),
        n = r(1),
        c = r.n(n),
        i = r(5),
        s = r(4),
        u = r(72),
        l = r(78);
      const p = ["mathspace", "screenshot_reader", "companion"],
        a = (function () {
          var t = o()(
            c.a.mark(function e(t) {
              var r, n, o, a;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.origin === window.location.origin && t.data && t.data.action)
                        if ("EQUATIO_CHROME_SET_MODE" !== t.data.action) e.next = 17;
                        else {
                          if (((n = t.data), (r = n.mode), (n = n.keepDrawerOpen), "string" != typeof r && void 0 !== r))
                            return e.abrupt("return");
                          e.next = 5;
                        }
                      else e.next = 18;
                      break;

                    case 5:
                      if (p.includes(r)) return (e.next = 8), Object(s.q)();
                      e.next = 11;
                      break;

                    case 8:
                      if (!(o = e.sent) || o.daysleft < 1) return e.abrupt("return");
                      e.next = 11;
                      break;

                    case 11:
                      if ("mathspace" === r) return Object(u.a)(), e.abrupt("return");
                      e.next = 14;
                      break;

                    case 14:
                      i.Actions.Toolbar.setMode(r, n), (e.next = 18);
                      break;

                    case 17:
                      "EQUATIO_CHROME_API_SHOW_ACTION_BUTTONS" === t.data.action
                        ? i.Actions.Toolbar.hideActionButtons(!t.data.show)
                        : "EQUATIO_CHROME_API_DISABLE_EXTRACT_BUTTON" === t.data.action
                        ? i.Actions.Toolbar.setExtractedMathDisabled(!!t.data.disable)
                        : "EQUATIO_CHROME_API_SET_TOOLBAR_OFFSET" === t.data.action
                        ? ((o = t.data.offset), (a = "number" == typeof o && 0 < o ? o : 0), i.Actions.Toolbar.setToolbarBottomOffset(a))
                        : "EQUATIO_CHROME_API_HIDE_EXTRACT_BUTTON" === t.data.action
                        ? i.Actions.Toolbar.hideExtractButton(t.data.hide)
                        : "EQUATIO_CHROME_API_SET_DISABLED_FEATURES" === t.data.action && Object(l.a)(t.data.features, "equatioApi");

                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        f = (e) => {
          window.postMessage(
            {
              action: "EQUATIO_CHROME_API_LATEX_CHANGE",
              latex: e
            },
            window.location.origin
          );
        };
      t.a = () => {
        window.addEventListener("message", a);
      };
    },
    144: function (e, t) {
      /**
       * pretty-data - nodejs plugin to pretty-print or minify data in XML, JSON and CSS formats.
       *
       * Version - 0.40.0
       * Copyright (c) 2012 Vadim Kiryukhin
       * vkiryukhin @ gmail.com
       * http://www.eslinstructor.net/pretty-data/
       *
       * Dual licensed under the MIT and GPL licenses:
       *   http://www.opensource.org/licenses/mit-license.php
       *   http://www.gnu.org/licenses/gpl.html
       *
       *	pd.xml(data ) - pretty print XML;
       *	pd.json(data) - pretty print JSON;
       *	pd.css(data ) - pretty print CSS;
       *	pd.sql(data)  - pretty print SQL;
       *
       *	pd.xmlmin(data [, preserveComments] ) - minify XML;
       *	pd.jsonmin(data)                      - minify JSON;
       *	pd.cssmin(data [, preserveComments] ) - minify CSS;
       *	pd.sqlmin(data)                       - minify SQL;
       *
       * PARAMETERS:
       *
       *	@data  			- String; XML, JSON, CSS or SQL text to beautify;
       * 	@preserveComments	- Bool (optional, used in minxml and mincss only);
       *				  Set this flag to true to prevent removing comments from @text;
       *	@Return 		- String;
       *
       * USAGE:
       *
       *	var pd  = require('pretty-data').pd;
       *
       *	var xml_pp   = pd.xml(xml_text);
       *	var xml_min  = pd.xmlmin(xml_text [,true]);
       *	var json_pp  = pd.json(json_text);
       *	var json_min = pd.jsonmin(json_text);
       *	var css_pp   = pd.css(css_text);
       *	var css_min  = pd.cssmin(css_text [, true]);
       *	var sql_pp   = pd.sql(sql_text);
       *	var sql_min  = pd.sqlmin(sql_text);
       *
       * TEST:
       *	comp-name:pretty-data$ node ./test/test_xml
       *	comp-name:pretty-data$ node ./test/test_json
       *	comp-name:pretty-data$ node ./test/test_css
       *	comp-name:pretty-data$ node ./test/test_sql
       */
      function r() {
        for (this.shift = ["\n"], this.step = "  ", maxdeep = 100, ix = ix = 0; ix < maxdeep; ix++)
          this.shift.push(this.shift[ix] + this.step);
      }
      function u(e, t) {
        return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length);
      }
      function l(e, t) {
        return e
          .replace(/\s{1,}/g, " ")
          .replace(/ AND /gi, "~::~" + t + t + "AND ")
          .replace(/ BETWEEN /gi, "~::~" + t + "BETWEEN ")
          .replace(/ CASE /gi, "~::~" + t + "CASE ")
          .replace(/ ELSE /gi, "~::~" + t + "ELSE ")
          .replace(/ END /gi, "~::~" + t + "END ")
          .replace(/ FROM /gi, "~::~FROM ")
          .replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ")
          .replace(/ HAVING /gi, "~::~HAVING ")
          .replace(/ IN /gi, " IN ")
          .replace(/ JOIN /gi, "~::~JOIN ")
          .replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ")
          .replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ")
          .replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ")
          .replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ")
          .replace(/ ON /gi, "~::~" + t + "ON ")
          .replace(/ OR /gi, "~::~" + t + t + "OR ")
          .replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ")
          .replace(/ OVER /gi, "~::~" + t + "OVER ")
          .replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ")
          .replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ")
          .replace(/ THEN /gi, " THEN~::~" + t)
          .replace(/ UNION /gi, "~::~UNION~::~")
          .replace(/ USING /gi, "~::~USING ")
          .replace(/ WHEN /gi, "~::~" + t + "WHEN ")
          .replace(/ WHERE /gi, "~::~WHERE ")
          .replace(/ WITH /gi, "~::~WITH ")
          .replace(/ ALL /gi, " ALL ")
          .replace(/ AS /gi, " AS ")
          .replace(/ ASC /gi, " ASC ")
          .replace(/ DESC /gi, " DESC ")
          .replace(/ DISTINCT /gi, " DISTINCT ")
          .replace(/ EXISTS /gi, " EXISTS ")
          .replace(/ NOT /gi, " NOT ")
          .replace(/ NULL /gi, " NULL ")
          .replace(/ LIKE /gi, " LIKE ")
          .replace(/\s{0,}SELECT /gi, "SELECT ")
          .replace(/~::~{1,}/g, "~::~")
          .split("~::~");
      }
      (r.prototype.xml = function (e) {
        for (
          var t = e
              .replace(/>\s{0,}</g, "><")
              .replace(/</g, "~::~<")
              .replace(/xmlns\:/g, "~::~xmlns:")
              .replace(/xmlns\=/g, "~::~xmlns=")
              .split("~::~"),
            r = t.length,
            n = !1,
            o = 0,
            a = "",
            c = 0,
            c = 0;
          c < r;
          c++
        )
          -1 < t[c].search(/<!/)
            ? ((a += this.shift[o] + t[c]),
              (n = !0),
              (-1 < t[c].search(/-->/) || -1 < t[c].search(/\]>/) || -1 < t[c].search(/!DOCTYPE/)) && (n = !1))
            : -1 < t[c].search(/-->/) || -1 < t[c].search(/\]>/)
            ? ((a += t[c]), (n = !1))
            : /^<\w/.exec(t[c - 1]) &&
              /^<\/\w/.exec(t[c]) &&
              /^<[\w:\-\.\,]+/.exec(t[c - 1]) == /^<\/[\w:\-\.\,]+/.exec(t[c])[0].replace("/", "")
            ? ((a += t[c]), n || o--)
            : -1 < t[c].search(/<\w/) && -1 == t[c].search(/<\//) && -1 == t[c].search(/\/>/)
            ? (a = n ? a + t[c] : a + (this.shift[o++] + t[c]))
            : -1 < t[c].search(/<\w/) && -1 < t[c].search(/<\//)
            ? (a = n ? a + t[c] : a + (this.shift[o] + t[c]))
            : -1 < t[c].search(/<\//)
            ? (a = n ? a + t[c] : a + (this.shift[--o] + t[c]))
            : -1 < t[c].search(/\/>/)
            ? (a = n ? a + t[c] : a + (this.shift[o] + t[c]))
            : -1 < t[c].search(/<\?/) || -1 < t[c].search(/xmlns\:/) || -1 < t[c].search(/xmlns\=/)
            ? (a += this.shift[o] + t[c])
            : (a += t[c]);
        return "\n" == a[0] ? a.slice(1) : a;
      }),
        (r.prototype.json = function (e) {
          return "string" == typeof e
            ? JSON.stringify(JSON.parse(e), null, this.step)
            : "object" == typeof e
            ? JSON.stringify(e, null, this.step)
            : null;
        }),
        (r.prototype.css = function (e) {
          for (
            var t = e
                .replace(/\s{1,}/g, " ")
                .replace(/\{/g, "{~::~")
                .replace(/\}/g, "~::~}~::~")
                .replace(/\;/g, ";~::~")
                .replace(/\/\*/g, "~::~/*")
                .replace(/\*\//g, "*/~::~")
                .replace(/~::~\s{0,}~::~/g, "~::~")
                .split("~::~"),
              r = t.length,
              n = 0,
              o = "",
              a = 0,
              a = 0;
            a < r;
            a++
          )
            /\{/.exec(t[a])
              ? (o += this.shift[n++] + t[a])
              : /\}/.exec(t[a])
              ? (o += this.shift[--n] + t[a])
              : (/\*\\/.exec(t[a]), (o += this.shift[n] + t[a]));
          return o.replace(/^\n{1,}/, "");
        }),
        (r.prototype.sql = function (e) {
          for (
            var t = e
                .replace(/\s{1,}/g, " ")
                .replace(/\'/gi, "~::~'")
                .split("~::~"),
              r = t.length,
              n = [],
              o = 0,
              a = this.step,
              c = 0,
              i = "",
              s = 0,
              s = 0;
            s < r;
            s++
          )
            n = s % 2 ? n.concat(t[s]) : n.concat(l(t[s], a));
          for (r = n.length, s = 0; s < r; s++)
            (c = u(n[s], c)),
              /\s{0,}\s{0,}SELECT\s{0,}/.exec(n[s]) && (n[s] = n[s].replace(/\,/g, ",\n" + a + a)),
              /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(n[s])
                ? (i += this.shift[++o] + n[s])
                : /\'/.exec(n[s])
                ? (c < 1 && o && o--, (i += n[s]))
                : ((i += this.shift[o] + n[s]), c < 1 && o && o--);
          return (i = i.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n"));
        }),
        (r.prototype.xmlmin = function (e, t) {
          return (t ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "")).replace(/>\s{0,}</g, "><");
        }),
        (r.prototype.jsonmin = function (e) {
          return e
            .replace(/\s{0,}\{\s{0,}/g, "{")
            .replace(/\s{0,}\[$/g, "[")
            .replace(/\[\s{0,}/g, "[")
            .replace(/:\s{0,}\[/g, ":[")
            .replace(/\s{0,}\}\s{0,}/g, "}")
            .replace(/\s{0,}\]\s{0,}/g, "]")
            .replace(/\"\s{0,}\,/g, '",')
            .replace(/\,\s{0,}\"/g, ',"')
            .replace(/\"\s{0,}:/g, '":')
            .replace(/:\s{0,}\"/g, ':"')
            .replace(/:\s{0,}\[/g, ":[")
            .replace(/\,\s{0,}\[/g, ",[")
            .replace(/\,\s{2,}/g, ", ")
            .replace(/\]\s{0,},\s{0,}\[/g, "],[");
        }),
        (r.prototype.cssmin = function (e, t) {
          return (t ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, ""))
            .replace(/\s{1,}/g, " ")
            .replace(/\{\s{1,}/g, "{")
            .replace(/\}\s{1,}/g, "}")
            .replace(/\;\s{1,}/g, ";")
            .replace(/\/\*\s{1,}/g, "/*")
            .replace(/\*\/\s{1,}/g, "*/");
        }),
        (r.prototype.sqlmin = function (e) {
          return e
            .replace(/\s{1,}/g, " ")
            .replace(/\s{1,}\(/, "(")
            .replace(/\s{1,}\)/, ")");
        }),
        (t.pd = new r());
    },
    145: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      });
      var n = r(3),
        o = r.n(n),
        n = r(21),
        a = r.n(n),
        n = r(1),
        O = r.n(n),
        S = r(5),
        k = r(33),
        C = r(4),
        A = r(17),
        T = r(54),
        M = r(10);
      const c = () => {
        try {
          const e = /Chrome\/([0-9.]+)/.exec(navigator.userAgent),
            t = a()(e, 2),
            r = t[1];
          return 76 <= parseInt(r, 10);
        } catch (e) {
          return !0;
        }
      };
      t.a = (function () {
        var t = o()(
          O.a.mark(function e(t) {
            var r, n, o, a, c, i, s, u, l, p, f, d, h, b, m, g, y, v, w, x, E;
            return O.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = k.default.getState()),
                      (r = a.mathquill),
                      (o = a.mathOptions),
                      (a = a.drawer),
                      (r = r.latex),
                      (n = o.locale),
                      (o = o.speechEngine),
                      (a = a.mode),
                      (c = ""),
                      Object(C.Q)("Copy Math As - " + t),
                      (e.next = 8),
                      Object(C.m)(!0)
                    );

                  case 8:
                    (i = e.sent),
                      (e.t0 = t),
                      (e.next =
                        e.t0 === S.CopyMode.Html
                          ? 14
                          : e.t0 === S.CopyMode.MathML
                          ? 41
                          : e.t0 === S.CopyMode.Speech
                          ? 45
                          : e.t0 === S.CopyMode.SVG
                          ? 49
                          : e.t0 === S.CopyMode.PNG
                          ? 55
                          : e.t0 === S.CopyMode.Download
                          ? 85
                          : e.t0 === S.CopyMode.URL
                          ? 105
                          : 12);
                    break;

                  case 12:
                    return (c = r), e.abrupt("break", 132);

                  case 14:
                    if (a === S.ToolModes.GraphEditor)
                      return (u = Object(S.getGraphRendering)()), (s = u.getScreenshot), (u = u.getState), (e.next = 18), s();
                    e.next = 32;
                    break;

                  case 18:
                    return (l = e.sent), (e.next = 21), u();

                  case 21:
                    return (p = e.sent), (e.next = 24), Object(C.h)(!0);

                  case 24:
                    if (e.sent) {
                      e.next = 26;
                      break;
                    }
                    return e.abrupt("return");

                  case 26:
                    return (e.next = 28), Object(T.a)(l, p);

                  case 28:
                    (f = e.sent), (c = `<img src="${f}" alt="Equatio Graph" />`), (e.next = 40);
                    break;

                  case 32:
                    return (e.next = 34), S.MathRendering.getSpokenText(r, n, o);

                  case 34:
                    (m = e.sent),
                      ((d = document.createElement("img")).src = "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(r)),
                      (d.alt = m),
                      (m = d.outerHTML),
                      (c = m);

                  case 40:
                    return e.abrupt("break", 132);

                  case 41:
                    return (e.next = 43), S.MathRendering.getMathML(r);

                  case 43:
                    return (c = e.sent), e.abrupt("break", 132);

                  case 45:
                    return (e.next = 47), S.MathRendering.getSpokenText(r, n, o);

                  case 47:
                    return (c = e.sent), e.abrupt("break", 132);

                  case 49:
                    return (e.next = 51), S.MathRendering.getSvg(r);

                  case 51:
                    return (d = e.sent), (h = d.html), (c = h), e.abrupt("break", 132);

                  case 55:
                    if (a === S.ToolModes.GraphEditor) return (e.next = 58), Object(S.getGraphRendering)().getScreenshot();
                    e.next = 61;
                    break;

                  case 58:
                    (b = e.sent), (e.next = 68);
                    break;

                  case 61:
                    return (e.next = 63), S.MathRendering.getSvg(r);

                  case 63:
                    return (m = e.sent), (h = m.html), (e.next = 67), S.MathRendering.getPng(h);

                  case 67:
                    b = e.sent;

                  case 68:
                    if (Object(A.c)(window.location.hostname)) return (e.next = 71), Object(C.J)(b);
                    e.next = 73;
                    break;

                  case 71:
                    e.next = 81;
                    break;

                  case 73:
                    return (e.next = 75), fetch(b);

                  case 75:
                    return (g = e.sent), (e.next = 78), g.blob();

                  case 78:
                    return (
                      (g = e.sent),
                      (e.next = 81),
                      navigator.clipboard.write([
                        new ClipboardItem({
                          [g.type]: g
                        })
                      ])
                    );

                  case 81:
                    if (i)
                      return (
                        (e.next = 84),
                        Object(C.bb)("clipboard", {
                          copyBtn: !0,
                          url: b
                        })
                      );
                    e.next = 84;
                    break;

                  case 84:
                    return e.abrupt("return");

                  case 85:
                    if (a === S.ToolModes.GraphEditor) return (e.next = 88), Object(S.getGraphRendering)().getScreenshot();
                    e.next = 91;
                    break;

                  case 88:
                    (b = e.sent), (e.next = 98);
                    break;

                  case 91:
                    return (e.next = 93), S.MathRendering.getSvg(r);

                  case 93:
                    return (y = e.sent), (h = y.html), (e.next = 97), S.MathRendering.getPng(h);

                  case 97:
                    b = e.sent;

                  case 98:
                    return (
                      (y = document.createElement("a")),
                      Object.assign(y, {
                        download: "equatio.png",
                        href: b
                      }),
                      document.body.appendChild(y),
                      y.addEventListener("click", (e) => e.stopPropagation(), !1),
                      y.click(),
                      document.body.removeChild(y),
                      e.abrupt("break", 132)
                    );

                  case 105:
                    if (a === S.ToolModes.GraphEditor)
                      return (v = Object(S.getGraphRendering)()), (s = v.getScreenshot), (u = v.getState), (e.next = 109), s();
                    e.next = 123;
                    break;

                  case 109:
                    return (l = e.sent), (e.next = 112), u();

                  case 112:
                    return (p = e.sent), (e.next = 115), Object(C.h)(!0);

                  case 115:
                    if (e.sent) {
                      e.next = 117;
                      break;
                    }
                    return e.abrupt("return");

                  case 117:
                    return (e.next = 119), Object(T.a)(l, p);

                  case 119:
                    (f = e.sent), (c = f), (e.next = 131);
                    break;

                  case 123:
                    return (e.next = 125), S.MathRendering.getSvg(r);

                  case 125:
                    (v = e.sent),
                      (w = v.width),
                      (x = v.height),
                      (E = "height=" + Math.floor(x)),
                      w < 20 ? (E = "width=20") : x < 20 && (E = "height=20"),
                      (c =
                        Object(M.c)() === M.a.GoogleForms
                          ? "https://equatio-api.texthelp.com/png/" + encodeURIComponent(r)
                          : `https://equatio-api.texthelp.com/png/${encodeURIComponent(r)}?` + E);

                  case 131:
                    return e.abrupt("break", 132);

                  case 132:
                    if (c) {
                      e.next = 134;
                      break;
                    }
                    return e.abrupt("return");

                  case 134:
                    if (Object(A.c)(window.location.hostname)) return (e.next = 137), Object(C.J)(c, !0);
                    e.next = 139;
                    break;

                  case 137:
                    e.next = 141;
                    break;

                  case 139:
                    return (e.next = 141), navigator.clipboard.writeText(c);

                  case 141:
                    if (i)
                      return (
                        (e.next = 144),
                        Object(C.bb)("clipboard", {
                          copyBtn: !0
                        })
                      );
                    e.next = 144;
                    break;

                  case 144:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    },
    146: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var t = r(3),
        n = r.n(t),
        t = r(1),
        o = r.n(t),
        a = r(5),
        c = r(4);
      const i = (function () {
        var e = n()(
          o.a.mark(function e() {
            var t, r;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(c.v)();

                  case 2:
                    if ((t = e.sent)) {
                      e.next = 6;
                      break;
                    }
                    return a.Actions.Favourites.addFavourites([]), e.abrupt("return");

                  case 6:
                    (r = Object.values(t)), a.Actions.Favourites.addFavourites(r);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    },
    167: function (e, t, r) {
      "use strict";
      for (
        var n = {
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
          o = 1;
        o < 20;
        o++
      )
        n["f" + o] = 111 + o;
      function a(e) {
        var t = n[e.toLowerCase()];
        return void 0 !== t ? t : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
      }
      function c(e) {
        for (var t in n) if (n.hasOwnProperty(t) && n[t] === e) return t;
        return String.fromCharCode(e).toLowerCase();
      }
      e.exports = function (e) {
        return "string" == typeof e ? a(e) : "number" == typeof e ? c(e) : void 0;
      };
    },
    17: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return i;
        });
      const n = ["onedrive.live.com", ".sharepoint.com", ".officeapps.live.com"],
        o = {
          Word: "Word",
          PowerPoint: "PowerPoint",
          Excel: "Excel",
          Onenote: "Onenote"
        },
        a = [o.Word],
        c = (e) => a.includes(e),
        i =
          ((t.b = (e, r = !0) => {
            if (e) {
              let t = e;
              if (!r)
                try {
                  t = new URL(e).hostname;
                } catch (e) {
                  return !1;
                }
              for (let e = 0; e < n.length; e += 1) if (t.endsWith(n[e])) return !0;
            }
            return !1;
          }),
          (e) =>
            e.endsWith("word-edit.officeapps.live.com")
              ? o.Word
              : e.endsWith("powerpoint.officeapps.live.com")
              ? o.PowerPoint
              : e.endsWith("excel.officeapps.live.com")
              ? o.Excel
              : e.endsWith("onenote.officeapps.live.com")
              ? o.Onenote
              : null);
    },
    19: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return a;
        });
      const n = {
          Insert: "INSERT_HTML_EDITOR",
          Extract: "EXTRACT_SELECTION_HTML_EDITOR",
          SetEditor: "SET_HTML_EDITOR"
        },
        o = (e, t) => {
          window.postMessage({
            type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
            action: e,
            value: t
          });
        },
        a = (e, t, r) => {
          window.postMessage({
            type: "EQUATIO_HTML_EDITOR_API",
            action: e,
            value: t,
            targetEditor: r
          });
        };
    },
    210: function (e, t) {},
    211: function (e, t) {},
    212: function (e, t) {},
    213: function (e, t) {},
    214: function (e, t) {},
    30: function (e, t, r) {
      "use strict";
      var n = r(3),
        O = r.n(n),
        n = r(1),
        S = r.n(n),
        k = r(5),
        C = r(97),
        A = r(4),
        T = r(91),
        M = r(92),
        j = r(76),
        I = r(145);
      const o = (t, r = 0) => {
        let n;
        return function (...e) {
          clearTimeout(n), (n = window.setTimeout(() => t.apply(this, e), r));
        };
      };
      var R = r(72),
        L = r(143),
        _ = r(32);
      r.d(t, "a", function () {
        return c;
      }),
        r.d(t, "c", function () {
          return i;
        });
      const a = [],
        c = (e) => {
          a.push(e);
        },
        i = (t) => {
          const e = a.findIndex((e) => e === t);
          0 <= e && a.splice(e, 1);
        },
        P = (t) => {
          a.forEach((e) => {
            "function" == typeof e && e(t);
          });
        };
      let q = {},
        U = {};
      const D = o(
        (function () {
          var r = O()(
            S.a.mark(function e(t, r) {
              return S.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), Object(A.a)(t);

                      case 3:
                        e.next = 8;
                        break;

                      case 5:
                        (e.prev = 5), (e.t0 = e.catch(0)), console.error("THROTTLE_FAVOURITES_ADD", e.t0);

                      case 8:
                        return (e.prev = 8), (e.next = 11), Object(A.O)(r);

                      case 11:
                        e.next = 16;
                        break;

                      case 13:
                        (e.prev = 13), (e.t1 = e.catch(8)), console.error("THROTTLE_FAVOURITES_REMOVE", e.t1);

                      case 16:
                        (q = {}), (U = {});

                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 5],
                  [8, 13]
                ]
              );
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        1e3
      );
      let B;
      t.b = (E) => (x) => (t) => {
        switch (t.type) {
          case k.Events.Toolbar.OpenMathspace:
            Object(A.bb)(null), Object(R.a)();
            break;

          case k.Events.General.RequestLicense:
            O()(
              S.a.mark(function e() {
                var t;
                return S.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Object(C.b)();

                      case 2:
                        (t = e.sent), k.Actions.General.setLicense(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
            break;

          case k.Events.Toolbar.SetInsertsLeft: {
            const r = t.value;
            Object(A.W)(r);
            break;
          }

          case k.Events.Toolbar.RequestExtractedMath: {
            const o = Object(T.a)();
            O()(
              S.a.mark(function e() {
                var t, r, n;
                return S.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), o();

                      case 2:
                        if ((t = e.sent)) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");

                      case 5:
                        if (((r = E.getState()), (n = r.drawer.mode), "mathspace" !== t.type)) {
                          e.next = 14;
                          break;
                        }
                        if (Object(k.canUseFeature)(r, k.Features.Mathspace)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");

                      case 10:
                        Object(R.a)(t.platformIntegrationId), Object(j.d)(), (e.next = 26);
                        break;

                      case 14:
                        if ("desmos" !== t.type) {
                          e.next = 22;
                          break;
                        }
                        if (Object(k.canUseFeature)(r, k.Features.GraphEditor)) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt("return");

                      case 17:
                        Object(A.Q)(`Extract Graph - ${n} - ` + Object(M.a)()),
                          k.Actions.Toolbar.setExtractedGraph(t.state),
                          n !== k.ToolModes.GraphEditor && k.Actions.Toolbar.setMode(k.ToolModes.GraphEditor),
                          (e.next = 26);
                        break;

                      case 22:
                        if (Object(k.canUseFeature)(r, k.Features.EquationEditor)) {
                          e.next = 24;
                          break;
                        }
                        return e.abrupt("return");

                      case 24:
                        Object(A.Q)(`Extract Math - ${n} - ` + Object(M.a)()), k.Actions.Toolbar.setExtractedMath(t, !0);

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
            break;
          }

          case k.Events.Toolbar.InsertMath: {
            Object(A.bb)(null), k.Actions.Toolbar.setInsertMathLoading(!0);
            const n = E.getState().drawer.mode,
              a = t.width,
              c = t.height,
              i = t.latex,
              s = t.spokenText,
              u = t.mathML,
              l = Object(T.b)(),
              p = l.math;
            Object(A.Q)(`Insert Math - ${n} - ` + Object(M.a)()),
              O()(
                S.a.mark(function e() {
                  return S.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), p(i, a, c, s, u);

                          case 3:
                            e.next = 10;
                            break;

                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              k.Actions.Toolbar.setInsertMathLoading(!1),
                              console.error("Math insert failed", e.t0),
                              Object(A.bb)("insert_fail");

                          case 10:
                            k.Actions.Toolbar.setInsertMathLoading(!1), n === k.ToolModes.HandwritingRecognition && Object(A.db)();

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              )();
            break;
          }

          case k.Events.Toolbar.InsertGraph: {
            Object(A.bb)(null);
            const f = E.getState().drawer.mode,
              d = t.imageData,
              h = t.calculatorState;
            d &&
              h &&
              O()(
                S.a.mark(function e() {
                  var t, r;
                  return S.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((k.Actions.Toolbar.setInsertMathLoading(!0), (e.prev = 1), (t = Object(R.b)()), (e.t0 = t), e.t0))
                              return (e.next = 7), Object(A.h)(!0);
                            e.next = 8;
                            break;

                          case 7:
                            e.t0 = !e.sent;

                          case 8:
                            if (e.t0) return k.Actions.Toolbar.setInsertMathLoading(!1), e.abrupt("return");
                            e.next = 11;
                            break;

                          case 11:
                            return (
                              (t = Object(T.b)()),
                              (r = t.graph),
                              Object(A.Q)(`Insert Graph - ${f} - ` + Object(M.a)()),
                              (e.next = 15),
                              r(d, h)
                            );

                          case 15:
                            e.next = 22;
                            break;

                          case 17:
                            (e.prev = 17),
                              (e.t1 = e.catch(1)),
                              console.error("Insert Graph Failed", e.t1),
                              k.Actions.Toolbar.setInsertMathLoading(!1),
                              Object(A.bb)("insert_fail");

                          case 22:
                            k.Actions.Toolbar.setInsertMathLoading(!1), Object(A.db)();

                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 17]]
                  );
                })
              )();
            break;
          }

          case k.Events.Toolbar.SetMode: {
            const b = t.mode;
            if ("screenshot_reader" === b) {
              const m = E.getState().licensing.profile,
                g = m.daysleft,
                y = m.features;
              if (g < 0 && !y["Screenshot Reader"])
                return x({
                  type: "noop"
                });
            }
            b === k.ToolModes.HandwritingRecognition ? Object(A.ab)() : b === k.ToolModes.EquationEditor && Object(A.cb)(), Object(j.d)();
            break;
          }

          case k.Events.Favourites.Added: {
            const v = t.items;
            v && !v.length && ((q[v.name] = v), delete U[v.name], D(q, U));
            break;
          }

          case k.Events.Favourites.Removed: {
            const w = t.item;
            (U[w.name] = w), delete q[w.name], D(q, U);
            break;
          }

          case k.Events.Toolbar.MathCopied:
            Object(A.bb)(null),
              O()(
                S.a.mark(function e() {
                  return S.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), Object(I.a)(t.mode);

                          case 3:
                            if (t.mode === k.CopyMode.Download) return e.abrupt("return");
                            e.next = 5;
                            break;

                          case 5:
                            k.Actions.Toolbar.setCopyMathStatus(k.CopyMathStatus.Success), (e.next = 11);
                            break;

                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0)), k.Actions.Toolbar.setCopyMathStatus(k.CopyMathStatus.Failure);

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            break;

          case k.Events.Toolbar.LatexChanged:
            (B = void 0 === B ? Object(_.a)() : B) && Object(L.b)(t.latex);
        }
        const e = x(t);
        return P(t), e;
      };
    },
    32: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      const n = [],
        o = ["coursera.org", "dev-coursera.org", ...n],
        a = (t = window.location.hostname) => o.some((e) => e === t || t.endsWith("." + e));
    },
    33: function (e, t, r) {
      "use strict";
      r.r(t);
      var c = r(5),
        n = r(30),
        o = r(7),
        a = r.n(o),
        o = r(3),
        i = r.n(o),
        o = r(1),
        s = r.n(o),
        u = r(4),
        l = r(97),
        p = r(90),
        f = r(84),
        d = r(40);
      function h(t, e) {
        var r,
          n = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(t)),
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(function (e) {
                a()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      o = () => (a) => (e) => {
        switch (e.type) {
          case c.Events.Options.SaveSettings: {
            const t = e.profile,
              r = e.options,
              n = e.disabledFeatures;
            i()(
              s.a.mark(function e() {
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(u.gb)(
                            b(
                              b({}, r),
                              {},
                              {
                                disabledFeatures: n
                              }
                            ),
                            t,
                            Object(d.c)()
                          )
                        );

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )(),
              Object(f.b)(r.locale);
            break;
          }

          case c.Events.Options.CheckLicense: {
            const o = e.code;
            i()(
              s.a.mark(function e() {
                var t;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Object(l.a)(o);

                        case 3:
                          (t = e.sent), c.Actions.Options.setUserLicense(t), (e.next = 10);
                          break;

                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0)), c.Actions.Options.setUserLicenseError();

                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )();
            break;
          }

          case c.Events.Options.Closed:
            e.saved || Object(p.b)();
        }
        return a(e);
      };
      t.default = Object(c.createReduxStore)([n.b, o, p.a], "Equatio Chrome");
    },
    40: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return i;
        });
      const n = Object.freeze({
        Automatic: "automatic",
        Speed: "speed",
        Quality: "quality"
      });
      let o = n.Automatic;
      const a = () => o,
        c = (e) => (o = e),
        i = () => ({
          chromeOptions: {
            insertType: o
          }
        });
    },
    49: function (e, t, r) {
      "use strict";
      t.a = Object.freeze({
        ShowAltTextDialog: 0,
        SelectLeft: 1,
        ArrowRight: 2,
        SelectDocsEquationMac: 3,
        SelectDocsEquationWin: 4,
        InsertPlaceholderCharacter: 5,
        Delete: 6
      });
    },
    54: function (e, r, n) {
      "use strict";
      !function (a) {
        var e = n(3),
          t = n.n(e),
          e = n(1),
          c = n.n(e),
          o = n(4);
        const i = (function () {
          var r = t()(
            c.a.mark(function e(t, r) {
              var n, o;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = a.from(t.substr(22), "base64")),
                        (n = a.from(`desmos::${JSON.stringify(r)}::desmos`, "utf8")),
                        (o = a.concat([o, n])),
                        e.abrupt(
                          "return",
                          URL.createObjectURL(new Blob([o]), {
                            oneTimeOnly: !0
                          })
                        )
                      );

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
        r.a = (function () {
          var r = t()(
            c.a.mark(function e(t, r) {
              var n;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i(t, r);

                    case 2:
                      return (n = e.sent), e.abrupt("return", Object(o.hb)(n, null));

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      }.call(this, n(162).Buffer);
    },
    55: function (e, t, r) {
      "use strict";
      t.a = (e = window.location.href) =>
        e.includes("pdf.dev.texthelp.com") ||
        e.includes("orbit.texthelp.com") ||
        e.includes("orbitnote-us.staging.texthelp.com") ||
        e.includes("orbitnote.staging.texthelp.com");
    },
    72: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return s;
        });
      var n = r(74),
        o = r(82),
        a = r(17),
        c = r(4);
      const i = () => {
          const e = window.location.hostname;
          if (Object(n.a)() && null === Object(o.b)()) return !1;
          if (Object(a.b)(e)) {
            const t = Object(a.c)(e);
            return Object(a.d)(t) ? !0 : !1;
          }
          return !0;
        },
        s = (e) => Object(c.M)(e);
    },
    73: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var t = r(3),
        n = r.n(t),
        t = r(1),
        o = r.n(t),
        a = r(116),
        c = r(4);
      const i = (function () {
        var t = n()(
          o.a.mark(function e(t) {
            var r;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", null);

                  case 2:
                    if (t.includes("filesystem:")) return (e.next = 5), Object(a.getLatexFromPersistentUrl)(t);
                    e.next = 7;
                    break;

                  case 5:
                    return (r = e.sent), e.abrupt("return", r);

                  case 7:
                    return e.abrupt("return", Object(c.j)(t));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    },
    74: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r(55),
        o = r(10),
        a = r(17),
        c = r(32);
      const i = (e = window.location) => {
        const t = e.hostname,
          r = e.href;
        return !(Object(o.c)(e) || Object(n.a)(r) || Object(c.a)(t) || Object(a.b)(t));
      };
    },
    75: function (e, t, r) {
      "use strict";
      t.a = (e, t, r) => {
        let n;
        const o = [];
        let a, c;
        for (; (n = document.elementFromPoint(e, t)) && !o.includes(n) && n !== c; ) {
          if (n.matches("" + r)) {
            a = n;
            break;
          }
          o.push({
            element: n,
            value: n.style.getPropertyValue("pointer-events"),
            priority: n.style.getPropertyPriority("pointer-events")
          }),
            n.style.setProperty("pointer-events", "none", "important"),
            (c = n);
        }
        return (
          o.forEach((e) => {
            e.element.style.setProperty("pointer-events", e.value || "", e.priority);
          }),
          a
        );
      };
    },
    76: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "a", function () {
          return u;
        }),
        r.d(t, "d", function () {
          return l;
        });
      var c = r(75);
      const n = () => {
          const e = document.querySelector("#equatio-gsuite-discover-shadow-host");
          return e && e.shadowRoot ? e.shadowRoot : document;
        },
        i = () => n().querySelector(".equatio-gsuite-discover-overlay-center"),
        o = () => n().querySelector(".equatio-gsuite-discover-overlay"),
        a = () => {
          const e = o();
          return null !== e && "none" !== e.style.display;
        },
        s = () => {
          const e = i();
          if (e) {
            const t = e.getBoundingClientRect(),
              r = t.x,
              n = t.y,
              o = t.width,
              a = t.height;
            return Object(c.a)(r + o / 2, n + a / 2, "div.kix-embeddedobject-view, g>image");
          }
        },
        u = () => {
          const e = i();
          if (e) {
            const t = e.getBoundingClientRect(),
              r = t.x,
              n = t.y,
              o = t.width,
              a = t.height;
            return Object(c.a)(r + o / 2, n + a / 2, "span.typeset");
          }
        },
        l = () => {
          const e = o();
          e && (e.style.display = "none");
        };
    },
    78: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      });
      var i = r(5),
        s = r(33),
        u = r(12);
      const l = {};
      let p = [];
      const n = () => p;
      t.a = (e, t) => {
        if (e && Array.isArray(e)) {
          (l[t] = e),
            (p = []),
            Object.values(l).forEach((e) => {
              p = p.concat(e);
            });
          const r = s.default.getState(),
            n = r.drawer,
            o = r.academyFloatingWindow,
            a = r.interactiveWindow,
            c =
              (p.includes(n.mode) && i.Actions.Toolbar.setMode(void 0),
              o.shown && p.includes("equatio-academy") && i.Actions.Academy.setHidden(),
              p.includes("stem-tools") && a.activeWindows.length && i.Actions.InteractiveWindow.closeWindows(),
              i.Actions.Toolbar.setDisabledFeatures(p),
              p.includes("prediction"));
          Object(u.d)(u.b.Graph, u.a.GraphDisablePrediction, {
            disabled: c
          });
        }
      };
    },
    82: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return d;
      });
      var n = r(3),
        o = r.n(n),
        n = r(1),
        a = r.n(n),
        c = r(5),
        i = r(19),
        s = r(0),
        u = r(4),
        l = r(91);
      let p = !1,
        f = null;
      const d = () => f,
        h = (e, t) => {
          e && p
            ? ((f = t), Object(l.c)(!0), c.Actions.Toolbar.hideActionButtons(!1))
            : (p && t !== f && null !== t) || ((f = null), Object(l.c)(!1), c.Actions.Toolbar.hideActionButtons(!0));
        },
        b = ({ action: e, fromToolbar: t }) => {
          e !== s.a.InjectHtmlEditorApi || t || Object(u.A)(!0);
        },
        m = ({ action: e, command: t, value: r, fromEditor: n, frameId: o }) => {
          e === s.a.HtmlEditorApiAction && n && t === i.a.SetEditor && h(r, o);
        },
        g = (function () {
          var t = o()(
            a.a.mark(function e(t) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && "EQUATIO_CHANGE_USER" === t.action) return (e.next = 3), Object(u.q)();
                      e.next = 6;
                      break;

                    case 3:
                      (r = e.sent), (p = r && 0 < r.daysleft), h(!1, null);

                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      t.a = () => {
        Object(u.q)().then((e) => {
          p = e && 0 < e.daysleft;
        }),
          chrome.runtime.onMessage.addListener(b),
          chrome.runtime.onMessage.addListener(m),
          chrome.runtime.onMessage.addListener(g),
          Object(u.A)(!0);
      };
    },
    83: function (e, t, r) {
      "use strict";
      var n = r(10);
      t.a = (e) => [n.a.GoogleDocs, n.a.GoogleSlides, n.a.GoogleSheets].includes(e);
    },
    84: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return u;
        });
      var t = r(3),
        n = r.n(t),
        t = r(1),
        o = r.n(t),
        a = r(4);
      const c = (e = "enUS") => {
        switch (e) {
          case "en-GB":
            return "enGB";

          case "en-US":
            return "enUS";

          default:
            return e;
        }
      };
      let i;
      const s = (e) => {
          i && (i.locale = c(e));
        },
        u = (function () {
          var e = n()(
            o.a.mark(function e() {
              var t, r, n;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(a.w)();

                    case 2:
                      return (t = e.sent), (e.next = 5), Object(a.q)();

                    case 5:
                      return (
                        (r = e.sent),
                        (n = t.options),
                        (i = {
                          locale: c(n.locale || "enUS"),
                          speechEngine: n.speechEngine || "auto",
                          license: r,
                          autoplaySR: n.autoplaySR,
                          speechSpeed: n.speechSpeed,
                          voice: n.voice
                        }),
                        e.abrupt("return", i)
                      );

                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    90: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      });
      var n = r(21),
        y = r.n(n),
        n = r(3),
        a = r.n(n),
        n = r(1),
        v = r.n(n),
        w = r(5),
        x = r(4),
        E = r(97),
        O = r(40),
        S = r(146);
      const k = (e = "enUS") => {
          switch (e) {
            case "en-GB":
              return "enGB";

            case "en-US":
              return "enUS";

            default:
              return e;
          }
        },
        c = (function () {
          var e = a()(
            v.a.mark(function e() {
              var t, r, n, o, a, c, i, s, u, l, p, f, d, h, b, m, g;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Promise.all([Object(x.w)(), Object(E.b)(), Object(x.n)()]);

                    case 2:
                      (n = e.sent),
                        (n = y()(n, 3)),
                        (t = n[0]),
                        (r = n[1]),
                        (n = n[2]),
                        (d = t.options || {}),
                        (m = d.fontSize),
                        (m = void 0 === m ? "regular" : m),
                        (o = d.locale),
                        (o = void 0 === o ? "enUS" : o),
                        (g = d.showTips),
                        (g = void 0 === g || g),
                        (a = d.speechEngine),
                        (a = void 0 === a ? "auto" : a),
                        (c = d.speechSpeed),
                        (c = void 0 === c ? 50 : c),
                        (i = d.autoplaySR),
                        (i = void 0 === i || i),
                        (s = d.voice),
                        (s = void 0 === s ? null : s),
                        (u = d.math),
                        (u = void 0 === u || u),
                        (l = d.chemistry),
                        (l = void 0 === l || l),
                        (p = d.formulas),
                        (p = void 0 === p || p),
                        (b = d.disabledFeatures),
                        (f = void 0 === b ? {} : b),
                        (b = d.mathSolver),
                        (d = void 0 === b ? null : b),
                        (b = t.profile_info),
                        (h = b.type),
                        (h = void 0 === h ? "student" : h),
                        (b = b.provider),
                        (b = void 0 === b ? "google" : b),
                        w.Actions.Options.loadSettings(
                          {
                            fontSize: m,
                            showTips: g,
                            math: u,
                            chemistry: l,
                            formulas: p,
                            speechEngine: a,
                            locale: k(o),
                            speechSpeed: c,
                            autoplaySR: i,
                            voice: s,
                            disabledFeatures: Object.keys(f).filter((e) => !0 === f[e]),
                            mathSolver: d
                          },
                          {
                            type: h,
                            license: r,
                            displayName: n,
                            provider: b
                          }
                        ),
                        Object(S.a)(),
                        (m = t.chromeOptions || {}),
                        (g = m.insertType),
                        Object(O.d)(g);

                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      t.a = (o) => (n) => (e) => {
        const t = o.getState();
        switch (e.type) {
          case w.Events.PopupMenu.Shown: {
            const r = t.drawer.mode;
            r && w.Actions.Toolbar.setMode(r);
            break;
          }

          case w.Events.PopupMenu.ShowOptionsDialog:
            w.Actions.Academy.setHidden(),
              w.Actions.PopupMenu.show(!1),
              a()(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c();

                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
        }
        return n(e);
      };
    },
    91: function (q, e, t) {
      "use strict";
      var r = t(3),
        d = t.n(r),
        r = t(1),
        h = t.n(r),
        u = t(5),
        b = t(4),
        U = t(33),
        D = t(72);
      const B = {
          InsertImage: "EQUATIO_COMPANION_INSERT_IMAGE",
          InsertMath: "EQUATIO_COMPANION_INSERT_MATH"
        },
        N = (i) => {
          const e = kr(),
            s = e.math;
          d()(
            h.a.mark(function e() {
              var t, r, n, o, a, c;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = U.default.getState().mathOptions),
                        (t = r.locale),
                        (r = r.speechEngine),
                        (e.next = 3),
                        u.MathRendering.getSvg(i)
                      );

                    case 3:
                      return (o = e.sent), (n = o.width), (o = o.height), (e.next = 8), u.MathRendering.getSpokenText(i, t, r);

                    case 8:
                      return (a = e.sent), (e.next = 11), u.MathRendering.getMathML(i);

                    case 11:
                      (c = e.sent), s(i, n, o, a, c);

                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        F = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r, n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = kr()), (r = r.image), t.startsWith("http"))) return (e.next = 4), r(t);
                      e.next = 5;
                      break;

                    case 4:
                      return e.abrupt("return");

                    case 5:
                      if (Object(D.b)()) return (e.next = 8), Object(b.hb)(null, t);
                      e.next = 13;
                      break;

                    case 8:
                      return (n = e.sent), (e.next = 11), r(n);

                    case 11:
                      e.next = 15;
                      break;

                    case 13:
                      return (e.next = 15), r(t);

                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      var r = () => {
          const e = (e) => {
            if (e && e.action)
              switch (e.action) {
                case B.InsertMath:
                  N(e.latex);
                  break;

                case B.InsertImage:
                  F(e.image);
              }
          };
          chrome.runtime.onMessage.addListener(e);
        },
        l = t(10);
      const G = (e) => {
          if (e) {
            u.Actions.Toolbar.setExtractedGraph(e);
            const t = U.default.getState().drawer.mode;
            t !== u.ToolModes.GraphEditor && u.Actions.Toolbar.setMode(u.ToolModes.GraphEditor);
          }
        },
        H = (e) => {
          "string" == typeof e && u.Actions.Toolbar.setExtractedMath(e, !0);
        },
        K = (e) => {
          e && Object(D.a)(e);
        },
        W = (e) => {
          if (e.source === window && e.origin === window.location.origin && e.data && e.data.action) {
            if ("EQUATIO_CHROME_EXTRACT_MATH" === e.data.action) {
              const t = e.data.latex;
              H(t);
            }
            if ("EQUATIO_CHROME_EXTRACT_MATHSPACE" === e.data.action) {
              const r = e.data.platformIntegrationId;
              K(r);
            }
            if ("EQUATIO_PARTNER_EXTRACT_URL" === e.data.action) {
              const n = e.data.url;
              n &&
                Object(b.j)(n).then((e) => {
                  e &&
                    ("string" == typeof e && H(e), "desmos" === e.type && G(e.state), "mathspace" === e.type) &&
                    K(e.platformIntegrationId);
                });
            }
          }
        };
      var Q = () => (
        window.postMessage(
          {
            action: "EQUATIO_CHROME_REQUEST_EXTRACTED_MATH"
          },
          window.location.origin
        ),
        Promise.resolve()
      );
      const V = () => {
        window.removeEventListener("message", W), window.addEventListener("message", W);
      };
      var J = t(143),
        $ = (e, t) =>
          e || t
            ? [
                {
                  name: "width",
                  value: e
                },
                {
                  name: "height",
                  value: t
                }
              ]
                .map((e) => e.name + "=" + Math.ceil(e.value))
                .join("&")
            : "",
        o = t(54);
      const z = (function () {
          var o = d()(
            h.a.mark(function e(t, r, n, o) {
              var a, c;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      (a = $(r, n)),
                        (c = (e) => `https://equatio-api.texthelp.com/${e}/${encodeURIComponent(t)}?` + a),
                        window.postMessage(
                          {
                            action: "EQUATIO_CHROME_INSERT_MATH",
                            png: c("png"),
                            svg: c("svg"),
                            altText: o,
                            width: r,
                            height: n,
                            latex: t
                          },
                          window.location.origin
                        );

                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r, n) {
            return o.apply(this, arguments);
          };
        })(),
        X = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.postMessage(
                        {
                          action: "EQUATIO_CHROME_INSERT_IMAGE",
                          png: t
                        },
                        window.location.origin
                      );

                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        Y = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      (n = e.sent),
                        window.postMessage(
                          {
                            action: "EQUATIO_CHROME_INSERT_GRAPH",
                            url: n
                          },
                          window.location.origin
                        );

                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      var m = t(75),
        n = t(21),
        p = t.n(n),
        a = t(49);
      const c = (n) =>
          new Promise((t, e) => {
            const r = (e) => {
              e.source === window &&
                e.data &&
                e.data.action === n &&
                "EQUATIO_DOCS_MESSAGING_API_RESPONSE" === e.data.type &&
                (window.removeEventListener("message", r), t());
            };
            setTimeout(() => {
              window.removeEventListener("message", r), e(new Error("Keyboard shortcuts handler timed out"));
            }, 5e3),
              window.addEventListener("message", r),
              window.postMessage(
                {
                  type: "EQUATIO_DOCS_MESSAGING_API",
                  action: n
                },
                "https://docs.google.com"
              );
          }),
        Z = () => c(a.a.ShowAltTextDialog),
        ee = () => c(a.a.SelectLeft),
        te = () => c(a.a.ArrowRight),
        re = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      "mac" === t ? c(a.a.SelectDocsEquationMac) : c(a.a.SelectDocsEquationWin);

                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        ne = () => c(a.a.InsertPlaceholderCharacter),
        oe = (function () {
          var e = d()(
            h.a.mark(function e() {
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), c(a.a.Delete);

                      case 3:
                        e.next = 7;
                        break;

                      case 5:
                        (e.prev = 5), (e.t0 = e.catch(0));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      let i;
      var ae = () => {
          if (!i) {
            let e = Array.from(document.querySelectorAll(".goog-menuitem-label")).filter((e) => {
              const t = e.getAttribute("aria-label");
              return (
                !!t &&
                (t.endsWith("..., x;") || t.endsWith("... x")) &&
                e.nextElementSibling &&
                e.nextElementSibling.textContent.endsWith("+Y")
              );
            });
            e.length ||
              (e = Array.from(document.querySelectorAll(".goog-menuitem-accel")).filter((e) => {
                if (!e.textContent.startsWith("\u2318+") || !e.textContent.endsWith("+Y")) return !1;
                const t = e.previousElementSibling;
                if (!t) return !1;
                if (!t.matches(".goog-menuitem-label")) return !1;
                const r = e.previousElementSibling.getAttribute("aria-label");
                return r && (r.endsWith(" x") || r.endsWith(" x;"));
              })),
              (i = e && e.length && e[0].closest(".goog-menuitem"));
          }
          return i;
        },
        f = t(28);
      const g = (t) =>
          new Promise((e) => {
            setTimeout(() => e(), t);
          }),
        ce = (e, t) => {
          const r = new InputEvent("input", {
            bubbles: !0,
            cancelBubble: !1,
            cancelable: !1,
            composed: !0,
            currentTarget: e,
            data: t,
            dataTransfer: null,
            defaultPrevented: !1,
            detail: 0,
            eventPhase: 3,
            inputType: "insertText",
            isComposing: !1,
            isTrusted: !0
          });
          e.dispatchEvent(r);
        };
      var s = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n, o, a, c, i, s;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fe();

                    case 2:
                      return (
                        (o = e.sent),
                        (o = p()(o, 2)),
                        (n = o[0]),
                        (o = o[1]),
                        (a = n.maxLength || 5e3),
                        (c = o.maxLength || 5e3),
                        (e.next = 10),
                        g(50)
                      );

                    case 10:
                      return (
                        r && ((i = ("" + r).slice(0, c)), (o.value = i), ce(o, i)),
                        (i = ("" + t).slice(0, a)),
                        (null !== n.offsetParent && 0 !== n.offsetHeight) ||
                          ((s = document.querySelector(
                            "div.docs-alt-text-tile-advanced-options-title[role='tab'], div.docs-alt-text-tile-advanced-options-title"
                          )) &&
                            s.click &&
                            s.click()),
                        (e.next = 15),
                        g(50)
                      );

                    case 15:
                      return (n.value = i), ce(n, i), (e.next = 19), g(50);

                    case 19:
                      return (e.next = 21), de(o);

                    case 21:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        y = (a, c, i = !0) =>
          new Promise((t, r) => {
            let n = 0;
            const o = () => {
              n += 1;
              try {
                const e = a();
                if (e) return void t(e);
                if (n >= c) return i ? void r(new Error("element_wait_timeout")) : void t(null);
              } catch (e) {
                r(e);
              }
              setTimeout(o, 50);
            };
            o();
          });
      function ie(e, t) {
        var r,
          n,
          o,
          a,
          c = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (c)
          return (
            (n = !(r = !0)),
            {
              s: function () {
                c = c.call(e);
              },
              n: function () {
                var e = c.next();
                return (r = e.done), e;
              },
              e: function (e) {
                (n = !0), (o = e);
              },
              f: function () {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (n) throw o;
                }
              }
            }
          );
        if (Array.isArray(e) || (c = se(e)) || (t && e && "number" == typeof e.length))
          return (
            c && (e = c),
            (a = 0),
            {
              s: (t = function () {}),
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
              f: t
            }
          );
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function se(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? ue(e, t)
            : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
              "Set" === r
            ? Array.from(e)
            : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? ue(e, t)
            : void 0;
      }
      function ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      const le = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t = Array.from(
                          document.querySelectorAll(".waffle-borderless-embedded-object-overlay-focused .waffle-overflow-menu-material")
                        ).find((e) => e.offsetParent))
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");

                    case 3:
                      return (
                        Object(f.a)(t),
                        (e.next = 6),
                        y(
                          () =>
                            Array.from(document.querySelectorAll(".goog-menuitem[name=trix-object-alt-text]")).find((e) => e.offsetParent),
                          50
                        )
                      );

                    case 6:
                      (r = e.sent), Object(f.a)(r);

                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        pe = (function () {
          var r = d()(
            h.a.mark(function e(n, o) {
              var a, c, i;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (c = (function () {
                        var t = d()(
                          h.a.mark(function e(t) {
                            var r;
                            return h.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      y(() => Array.from(document.querySelectorAll(`img[src='${t.src}']`)).find((e) => e.offsetParent), 50)
                                    );

                                  case 2:
                                    return (r = e.sent), Object(f.a)(r), (e.next = 6), le();

                                  case 6:
                                    return (e.next = 8), s(n, o);

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                        (i = new MutationObserver((e) => {
                          let t;
                          var r,
                            n = ie(e);
                          try {
                            for (n.s(); !(r = n.n()).done; ) {
                              const o = r.value;
                              if ((t = Array.from(o.addedNodes).find((e) => "IMG" === e.nodeName))) break;
                            }
                          } catch (e) {
                            n.e(e);
                          } finally {
                            n.f();
                          }
                          t &&
                            (c(t).catch((e) => {
                              console.error("Setting alt text failed " + e);
                            }),
                            i.disconnect(),
                            clearTimeout(a));
                        })).observe(document.querySelector("#waffle-grid-container"), {
                          childList: !0,
                          subtree: !0
                        }),
                        (a = setTimeout(() => i.disconnect(), 15e3));

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      var v = d()(
        h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (Object(l.c)() === l.a.GoogleDocs) return (e.next = 3), Z();
                  e.next = 4;
                  break;

                case 3:
                  return e.abrupt("return");

                case 4:
                  if (Object(l.c)() === l.a.GoogleSheets) return (e.next = 7), le();
                  e.next = 8;
                  break;

                case 7:
                  return e.abrupt("return");

                case 8:
                  (t = ae()) ? Object(f.a)(t) : Z();

                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      const fe = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Promise.all([
                          y(() => document.querySelector("input.docs-alt-text-tile-title-input"), 20),
                          y(() => document.querySelector("#docs-alt-text-tile-description"), 20)
                        ])
                      );

                    case 2:
                      return (r = e.sent), (r = p()(r, 2)), (t = r[0]), (r = r[1]), e.abrupt("return", [t, r]);

                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        de = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n, o, a, c, i, s;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (n = document.querySelector(
                          ".docs-sidebar-gm-titlebar-icon-button.docs-material.docs-sidebar-gm-close-button.docs-tiled-sidebar-close, .docs-tiled-sidebar-close"
                        ))
                      )
                        return (e.next = 4), g(50);
                      e.next = 7;
                      break;

                    case 4:
                      if ((n.click(), "docs-alt-text-tile-description" === t.id)) return e.abrupt("return");
                      e.next = 7;
                      break;

                    case 7:
                      try {
                        (o = t.closest("div[role='dialog']")),
                          (a = o || document.body),
                          !(c =
                            a.querySelector(".docs-material-button-fill-primary") ||
                            a.querySelector(".goog-buttonset-default.goog-buttonset-action")) &&
                            r &&
                            o &&
                            ((i = o.querySelectorAll("div[role='button']")), (s = p()(i, 1)), (c = s[0])),
                          Object(f.a)(c);
                      } catch (e) {}

                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      var he = d()(
        h.a.mark(function e() {
          var t, r;
          return h.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), v();

                  case 2:
                    return (e.next = 4), fe();

                  case 4:
                    return (r = e.sent), (r = p()(r, 2)), (t = r[0]), (r = r[1]), (e.prev = 8), (e.next = 11), de(r, !0);

                  case 11:
                    e.next = 16;
                    break;

                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(8)), console.error("Failed to close alt text dialog", e.t0);

                  case 16:
                    return e.abrupt("return", {
                      title: t.value,
                      description: r.value
                    });

                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[8, 13]]
          );
        })
      );
      const w = (e) => "<math" === ("" + e).slice(0, 5).toLowerCase(),
        x = (e) => w(e) && (e.includes("data-is-equatio") || e.includes("data-latex"));
      var E = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r, n, o;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = new DOMParser()),
                        "math" !== (r = r.parseFromString(t, "application/xml")).documentElement.tagName.toLowerCase())
                      )
                        throw Error("Invalid MathML document");
                      e.next = 4;
                      break;

                    case 4:
                      if ("string" == typeof (n = r.documentElement.getAttribute("data-latex"))) return e.abrupt("return", n);
                      e.next = 7;
                      break;

                    case 7:
                      if ("string" != typeof (o = r.documentElement.getAttribute("data-equatio-url"))) return e.abrupt("return", null);
                      e.next = 10;
                      break;

                    case 10:
                      return e.abrupt("return", Object(b.j)(o));

                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        O = t(73);
      const be = () => {
          let e = null,
            t = "cell";
          const r = Array.from(document.querySelectorAll(".waffle-obj-menu-control-material")).filter((e) => e.offsetParent);
          if (r.length) {
            const n = r[0].getBoundingClientRect(),
              o = n.x,
              a = n.y,
              c = n.width,
              i = n.height,
              s = document.querySelector("div.focused-overlay-container").getBoundingClientRect(),
              u = a + i < s.top ? a - s.top : 0,
              l = o + c > s.width ? o - s.width : 0;
            (e = Object(m.a)(o - l, a - u, ".waffle-borderless-embedded-object-container img")), (t = "image");
          } else e = document.querySelector("#formula-bar .cell-input");
          return {
            element: e,
            type: t
          };
        },
        me = () => {
          const e = document.querySelector("#formula-bar .cell-input");
          if (!e) return "";
          const t = /equatio-api(?:.dev)?\.texthelp\.com\/(?:png|svg)\/(.*?)["?]/.exec(e.textContent);
          return t && 1 < t.length ? decodeURIComponent(t[1]) : "";
        },
        ge = (e) => (e && (e.includes("googleusercontent.com") || e.includes("filesystem:")) ? Object(O.a)(e) : null);
      var ye = d()(
          h.a.mark(function e() {
            var t, r, n;
            return h.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((t = be())) {
                        if ("cell" === t.type) return e.abrupt("return", me());
                        e.next = 4;
                      } else e.next = 26;
                      break;

                    case 4:
                      if (t.element) return (e.prev = 5), (e.next = 8), ge(t.element.src);
                      e.next = 26;
                      break;

                    case 8:
                      if ((r = e.sent)) return e.abrupt("return", r);
                      e.next = 11;
                      break;

                    case 11:
                      e.next = 15;
                      break;

                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(5));

                    case 15:
                      return (e.prev = 15), (e.next = 18), he();

                    case 18:
                      if (((r = e.sent), (n = r.description), x(n))) return e.abrupt("return", E(n));
                      e.next = 22;
                      break;

                    case 22:
                      e.next = 26;
                      break;

                    case 24:
                      (e.prev = 24), (e.t1 = e.catch(15));

                    case 26:
                      return e.abrupt("return", null);

                    case 27:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [5, 13],
                [15, 24]
              ]
            );
          })
        ),
        ve = t(144),
        we = (e, t, r) => {
          const n = new DOMParser(),
            o = n.parseFromString(
              `<math xmlns="http://www.w3.org/1998/Math/MathML">
    <mglyph src="" alt="Image"></mglyph>
</math>`,
              "application/xml"
            ),
            a =
              (o.documentElement.setAttribute("data-is-equatio", "1"),
              o.documentElement.setAttribute("data-equatio-url", e),
              o.documentElement.setAttribute("data-equatio-type", t),
              o.querySelector("mglyph")),
            c = (a.setAttribute("src", e), a.setAttribute("alt", r), new XMLSerializer()),
            i = c.serializeToString(o.documentElement);
          return ve.pd.xmlmin(i, !1).trim();
        },
        n = t(113),
        xe = t.n(n),
        Ee = t(114),
        Oe = t(115);
      const Se = (e, t) => {
          const r = new KeyboardEvent(t, {
            bubbles: !0,
            cancelable: !0,
            keyCode: 18,
            ctrlKey: !0,
            altKey: !0,
            shiftKey: !1,
            composed: !0,
            returnValue: !1,
            view: window,
            which: 18,
            key: "Alt",
            code: "AltLeft",
            target: document.querySelector(e),
            currentTarget: document,
            location: 1
          });
          document.querySelector(e).dispatchEvent(r);
        },
        S = (e, t, r) => {
          const n = xe()(e),
            o = n.altKey,
            a = n.shiftKey,
            c = n.ctrlKey,
            i = n.keyCode,
            s = Array.isArray(i) ? i[0] : i,
            u = Object(Ee.getKey)(s),
            l = Oe.a[s] || {
              code: String.fromCharCode(s)
            },
            p = l.code,
            f = new KeyboardEvent(r, {
              bubbles: !0,
              cancelable: !0,
              charCode: String.fromCharCode(s),
              keyCode: s,
              ctrlKey: c,
              altKey: o,
              shiftKey: a,
              composed: !0,
              returnValue: !1,
              view: window,
              which: s,
              key: u,
              code: p,
              target: document.querySelector(t),
              currentTarget: document,
              location: 0
            });
          document.querySelector(t).dispatchEvent(f);
        };
      var k = (t, r) =>
        new Promise((e) => {
          S(t, r, "keydown"), S(t, r, "keypress"), S(t, r, "keyup"), setTimeout(e, 100);
        });
      const ke = () =>
        new Promise((e) => {
          const t = document.getElementById("docs-save-indicator-badge");
          let r;
          const n = new MutationObserver(() => {
            t && "string" == typeof t.textContent && !t.textContent.includes("...") && (n.disconnect(), e(), clearTimeout(r));
          });
          t &&
            n.observe(t, {
              attributes: !0,
              childList: !0
            }),
            (r = setTimeout(() => {
              e(), n.disconnect();
            }, 5e3));
        });
      var Ce = (function () {
          var t = d()(
            h.a.mark(function e(t, { width: r, height: n } = {}, o) {
              var a, c;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t),
                        n && a.includes("/png/") && ((c = "height=" + 5 * Math.ceil(n)), (a = t.split("?")[0] + "?" + c)),
                        Object(l.c)() === l.a.GoogleDocs)
                      )
                        return (e.next = 5), ne();
                      e.next = 7;
                      break;

                    case 5:
                      return (e.next = 7), ke();

                    case 7:
                      return (e.next = 9), Object(b.C)(a, r, n, o);

                    case 9:
                      if (e.sent) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", !1);

                    case 11:
                      return e.abrupt("return", !0);

                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        C = t(40),
        Ae = t(44);
      let Te;
      const Me = () => {
        const e = Array.from(document.querySelectorAll(".goog-menuitem-label")).filter((e) => {
            const t = e.getAttribute("aria-label");
            return !!t;
          }),
          t = e.find((e) => "Image i" === e.getAttribute("aria-label"));
        return t
          ? [t]
          : e.filter((e) => {
              const t = e.getAttribute("aria-label");
              return (
                (t.endsWith("... i") || t.endsWith("\u2026 i") || t.endsWith(" i")) &&
                e.closest(".goog-menuitem-content") &&
                e.closest(".goog-menuitem-content").querySelector(".docs-icon-img")
              );
            });
      };
      var je = () =>
          (Te =
            Te ||
            new Promise((n, o) => {
              let a = 0;
              const c = (function () {
                var e = d()(
                  h.a.mark(function e() {
                    var t, r;
                    return h.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (((r = Me()) && r.length) ||
                                (Object(f.a)(document.getElementById("docs-insert-menu")),
                                (r = Me()),
                                Object(f.a)(document.getElementById("docs-insert-menu"))),
                              (t = Array.from(document.querySelectorAll(".goog-menuitem-mnemonic-hint"))
                                .filter((e) => e.closest(".goog-menuitem-label"))
                                .filter((t) => Ae.g.some((e) => t.closest(".goog-menuitem-label").textContent.startsWith(e)))),
                              (t =
                                "Google Sheets" === Object(l.c)()
                                  ? t && t.length && t[0].closest(".apps-menuitem")
                                  : r && r.length && r[0].closest(".apps-menuitem")) ||
                                (4 <=
                                  (r = Array.from(
                                    document.querySelectorAll(".goog-menu-vertical[class='goog-menu goog-menu-vertical docs-material']")
                                  )).length &&
                                  (t = r[3].querySelector(".goog-menuitem"))),
                              (r = t || document.querySelector("#imageButton")))
                            )
                              e.next = 11;
                            else {
                              if (20 < (a += 1)) return e.abrupt("return", o(Error("timed_out")));
                              e.next = 10;
                            }
                            break;

                          case 10:
                            return e.abrupt("return", setTimeout(c, 500));

                          case 11:
                            return e.abrupt("return", n(r));

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              c();
            })),
        Ie = d()(
          h.a.mark(function e() {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), k("Ctrl+Alt+I", "#docs-chrome");

                  case 2:
                    return (e.next = 4), k("Alt+I", "#docs-chrome");

                  case 4:
                    return (e.next = 6), k("g", "#docs-menubar");

                  case 6:
                    return (e.next = 8), k("a", "#docs-menubar");

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      let A, Re;
      const Le = (e, t) => {
        A = t;
      };
      var _e = (function () {
        var t = d()(
          h.a.mark(function e(t) {
            var r;
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    Object(l.c)() !== l.a.GoogleSheets ? (e.next = 4) : (Ie(), (e.next = 8));
                    break;

                  case 4:
                    return (e.next = 6), je();

                  case 6:
                    (r = e.sent), Object(f.a)(r);

                  case 8:
                    Le(window.location.href, () => {
                      Object(b.L)(t, Re);
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      chrome.runtime.onMessage.addListener((e) => {
        "image_dialog_loaded" === e.action && ((Re = e.pickerWindow), "function" == typeof A) && (A.call(void 0), (A = null));
      });
      const Pe = (function () {
          var t = d()(
            h.a.mark(function e(t, r = "image") {
              var n, o;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (o = we(t, r, (n = "desmos" === r ? "Equatio Desmos Graph" : "Equatio Image"))), pe(n, o), (e.next = 5), _e(t);

                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        qe = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      return (n = e.sent), (e.next = 7), Pe(n, "desmos");

                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        Ue = () => {
          const e = document.querySelector("#docs-screenreader-menu");
          if (e) return 0 < e.offsetHeight;
          throw Error("accessibility_menu_missing");
        },
        De = () => {
          const e = document.querySelector("#docs-aria-speakable");
          if (!e) throw Error("aria_speakable_missing");
          const t = e.textContent.match(/[A-Z]+[0-9]+/);
          if (t && t[0]) return t[0];
          throw Error("failed_to_find_range");
        },
        Be = (function () {
          var t = d()(
            h.a.mark(function e(r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = document.querySelector("#formula-bar .cell-input")).focus(),
                        (e.next = 4),
                        new Promise((t) => {
                          setTimeout(
                            d()(
                              h.a.mark(function e() {
                                return h.a.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (n.innerHTML = `=IMAGE("${r}")`),
                                            (e.next = 4),
                                            k("Enter", "#formula-bar .cell-input")
                                          );

                                        case 4:
                                          t(), (e.next = 10);
                                          break;

                                        case 7:
                                          (e.prev = 7), (e.t0 = e.catch(0)), t();

                                        case 10:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            )
                          );
                        })
                      );

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        Ne = (function () {
          var e = d()(
            h.a.mark(function e(t = !0) {
              var r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t === Ue()) return e.abrupt("return");
                      e.next = 2;
                      break;

                    case 2:
                      return (
                        (r = "body"),
                        Se(r, "keydown"),
                        S("Ctrl+Alt+Z", r, "keydown"),
                        S("Ctrl+Alt+Z", r, "keyup"),
                        Se(r, "keyup"),
                        (e.next = 9),
                        y(() => (t ? Ue() : !Ue()), 20)
                      );

                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Fe = (function () {
          var n = d()(
            h.a.mark(function e(t, r, n) {
              var o, a;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ne(!0);

                      case 2:
                        return (e.prev = 2), (e.next = 5), k("Right", ".cell-input");

                      case 5:
                        return (e.next = 7), k("Left", ".cell-input");

                      case 7:
                        return (
                          (o = De()),
                          (a = document.querySelector(".docs-sheet-active-tab .docs-sheet-tab-name")) && (o = a.textContent + "!" + o),
                          (e.next = 12),
                          Ce(
                            t,
                            {
                              width: r,
                              height: n
                            },
                            {
                              range: o
                            }
                          )
                        );

                      case 12:
                        e.next = 19;
                        break;

                      case 14:
                        return (e.prev = 14), (e.t0 = e.catch(2)), (e.next = 18), Ne(!1).catch(() => {});

                      case 18:
                        throw e.t0;

                      case 19:
                        return (e.next = 21), Ne(!1).catch(() => {});

                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 14]]
              );
            })
          );
          return function (e, t, r) {
            return n.apply(this, arguments);
          };
        })(),
        Ge = (function () {
          var n = d()(
            h.a.mark(function e(t, r, n) {
              var o, a;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (
                          ((o = "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(t)),
                          (a = Object(C.b)()) === C.a.Automatic || a === C.a.Speed)
                        )
                          return (e.prev = 5), (e.next = 8), Be(o);
                        e.next = 16;
                        break;

                      case 8:
                        e.next = 15;
                        break;

                      case 10:
                        return (
                          (e.prev = 10), (e.t0 = e.catch(5)), console.error("Sheets speed insert failed", e.t0), (e.next = 15), Fe(o, r, n)
                        );

                      case 15:
                        return e.abrupt("return");

                      case 16:
                        return (e.prev = 16), (e.next = 19), Fe(o, r, n);

                      case 19:
                        e.next = 26;
                        break;

                      case 21:
                        return (
                          (e.prev = 21), (e.t1 = e.catch(16)), console.error("Sheets quality insert failed", e.t1), (e.next = 26), Be(o)
                        );

                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [5, 10],
                  [16, 21]
                ]
              );
            })
          );
          return function (e, t, r) {
            return n.apply(this, arguments);
          };
        })(),
        He = (function () {
          var o = d()(
            h.a.mark(function e(t, r, n, o) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      window.postMessage(
                        {
                          action: "EQUATIO_INSERT_MATH_FORMS",
                          latex: t,
                          width: r,
                          height: n,
                          altText: o
                        },
                        window.location.origin
                      );

                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r, n) {
            return o.apply(this, arguments);
          };
        })(),
        Ke = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.postMessage(
                        {
                          action: "EQUATIO_INSERT_IMAGE_FORMS",
                          url: t
                        },
                        window.location.origin
                      );

                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        We = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      (n = e.sent),
                        window.postMessage(
                          {
                            action: "EQUATIO_INSERT_GRAPH_FORMS",
                            url: n
                          },
                          window.location.origin
                        );

                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        Qe = () => {
          const e = document.querySelector("path[stroke='#5da2ff'], path[stroke='#8ab4f8']");
          if (e) {
            if (Object(l.c)() === l.a.GoogleSlides) return e.closest("g[id^='editor-']").querySelector("image");
            const t = e.getAttribute("d"),
              r = document.querySelector(`clipPath path[d='${t}']`);
            if (
              r &&
              r.parentNode &&
              r.parentNode.nextSibling &&
              r.parentNode.nextSibling.children &&
              0 < r.parentNode.nextSibling.children.length &&
              "image" === r.parentNode.nextSibling.children[0].tagName.toLowerCase()
            )
              return r.parentNode.nextSibling.children[0];
          }
        },
        Ve = (r, n) => {
          const e = (function () {
            var t = d()(
              h.a.mark(function e(t) {
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return t && Object(f.a)(t), (e.next = 3), v();

                      case 3:
                        return (e.next = 5), s(r, n);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          let o;
          const a = new MutationObserver((t) => {
            let r;
            if (Object(l.c)() === l.a.GoogleSlides)
              for (let e = 0; e < t.length - 1; e += 1) {
                const n = t[e].target;
                if (n && n.id.includes("SLIDES_API") && 0 < t[e].addedNodes.length) {
                  r = n;
                  break;
                }
              }
            e(r).catch((e) => {
              console.error("Setting alt text for google app failed. " + e);
            }),
              a.disconnect(),
              clearTimeout(o);
          });
          a.observe(document.querySelector("#pages"), {
            childList: !0,
            subtree: !0
          }),
            (o = setTimeout(() => a && a.disconnect(), 2e4));
        };
      var T = t(76),
        Je = t(117),
        $e = t(30);
      const M = document.createElement("iframe");
      (M.style.display = "none"), (M.id = "my-frame"), document.body.appendChild(M);
      let j,
        ze = !1;
      const Xe = [
          [/\\uppi\b/g, "\\pi"],
          [/\\Updelta\b/g, "\\delta"],
          [/\\nequiv\b/g, "\\cancel{\\equiv}"],
          [/\\napprox\b/g, "\\cancel{\\approx}"]
        ],
        Ye = (e) => Xe.reduce((e, [t, r]) => e.replace(t, r), e);
      var Ze = (e) =>
          new Promise((o, a) => {
            ze ||
              ((ze = !0),
              Object($e.a)(({ type: e }) => {
                e === u.Events.Toolbar.ExtractMathCancelled &&
                  ((M.src = "about:blank"), window.removeEventListener("message", j), (j = null));
              })),
              u.Actions.Toolbar.setCanCancel(!0),
              j && window.removeEventListener("message", j),
              (j = (e) => {
                if ("null" === e.origin && e.data && "EQUATIO_MATHML_RESULT" === e.data.type) {
                  u.Actions.Toolbar.setCanCancel(!1);
                  const t = e.data,
                    r = t.latex,
                    n = t.error;
                  n ? a(n) : o(Ye(r));
                }
              }),
              (M.src = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/mmlWorker/index.html?mathml=" + encodeURIComponent(e)),
              window.addEventListener("message", j);
          }),
        et = d()(
          h.a.mark(function e() {
            var t, r, n, o, a, c;
            return h.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = Object(T.c)()), (t = (t ? Object(T.b) : Qe)()))) return Object(f.a)(t), (e.prev = 4), (e.next = 7), he();
                      e.next = 47;
                      break;

                    case 7:
                      if (((r = e.sent), (r = r.description), x(r))) return e.abrupt("return", E(r));
                      e.next = 11;
                      break;

                    case 11:
                      if (w(r)) return Object(b.Q)("Edit Math - MathML"), (e.prev = 13), (e.next = 16), Ze(r);
                      e.next = 22;
                      break;

                    case 16:
                      return (n = e.sent), e.abrupt("return", n);

                    case 20:
                      (e.prev = 20), (e.t0 = e.catch(13));

                    case 22:
                      e.next = 26;
                      break;

                    case 24:
                      (e.prev = 24), (e.t1 = e.catch(4));

                    case 26:
                      if ((n = t.getAttribute("href")) && (n.includes("googleusercontent.com") || n.includes("filesystem:")))
                        return (e.prev = 28), (e.next = 31), Object(O.a)(n);
                      e.next = 47;
                      break;

                    case 31:
                      (o = e.sent), (e.next = 36);
                      break;

                    case 34:
                      (e.prev = 34), (e.t2 = e.catch(28));

                    case 36:
                      if (o) return e.abrupt("return", o);
                      e.next = 38;
                      break;

                    case 38:
                      if ([l.a.GoogleSlides, l.a.GoogleDrawings].includes(Object(l.c)())) return (e.next = 41), Object(Je.b)();
                      e.next = 47;
                      break;

                    case 41:
                      if (((a = e.sent), (c = t.closest("g[id^='editor-']"))))
                        if (((c = c.getAttribute("id").replace(/^editor-/, "")), a[c])) return e.abrupt("return", Object(O.a)(a[c]));
                      e.next = 47;
                      break;

                    case 47:
                      return e.abrupt("return", Promise.reject(Error("no_text_found")));

                    case 48:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [4, 24],
                [13, 20],
                [28, 34]
              ]
            );
          })
        );
      function tt(e, t) {
        var r,
          n,
          o,
          a,
          c = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (c)
          return (
            (n = !(r = !0)),
            {
              s: function () {
                c = c.call(e);
              },
              n: function () {
                var e = c.next();
                return (r = e.done), e;
              },
              e: function (e) {
                (n = !0), (o = e);
              },
              f: function () {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (n) throw o;
                }
              }
            }
          );
        if (Array.isArray(e) || (c = rt(e)) || (t && e && "number" == typeof e.length))
          return (
            c && (e = c),
            (a = 0),
            {
              s: (t = function () {}),
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
              f: t
            }
          );
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function rt(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? nt(e, t)
            : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
              "Set" === r
            ? Array.from(e)
            : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? nt(e, t)
            : void 0;
      }
      function nt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      const ot = () => {
          const e = document.querySelector(".kix-cursor-caret");
          if (e) {
            const t = e.getBoundingClientRect(),
              r = t.x,
              n = t.y,
              o = t.width,
              a = t.height;
            return Object(m.a)(r + o, n + a / 2, "span.typeset");
          }
        },
        at = () => {
          const e = document.querySelector(".kix-cursor-caret"),
            t = e ? e.parentElement : null;
          return t && 0 < t.style.opacity ? e : null;
        },
        ct = () => {
          const e = at();
          if (e) {
            const r = e.getBoundingClientRect(),
              n = r.x,
              o = r.y,
              a = r.width,
              c = r.height,
              i = Object(m.a)(n + a, o + c / 2, ".kix-embeddedobject-image");
            if (i) return i;
            const s = Object(m.a)(n + a, o + c / 2, ".kix-embeddedobject-view");
            if (s) return s.querySelector(".kix-embeddedobject-image");
          }
          const t = document.querySelector(".docs-squarehandleselectionbox-border");
          if (t) {
            const u = t.getBoundingClientRect(),
              l = u.x,
              p = u.y,
              f = u.width,
              d = u.height;
            return Object(m.a)(l + f / 2, p + d / 2, ".kix-embeddedobject-view");
          }
        },
        it = () =>
          new Promise((s) => {
            const e = (e, t) => {
                var r,
                  n = tt(e);
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    const o = r.value,
                      a = o.target;
                    if ("attributes" === o.type && "style" === o.attributeName && a.className && a.className.includes("kix-cursor")) {
                      const c = o.oldValue,
                        i = o.target.getAttribute("style");
                      c !== i &&
                        setTimeout(() => {
                          s(), t.disconnect();
                        }, 1e3);
                    }
                    "docs-aria-speakable" === o.target.id &&
                      o.addedNodes.length &&
                      setTimeout(() => {
                        s(), t.disconnect();
                      }, 500);
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
              },
              t = new MutationObserver(e);
            t.observe(document.body, {
              childList: !0,
              attributes: !0,
              subtree: !0,
              attributeOldValue: !0
            }),
              setTimeout(() => {
                s(), t.disconnect();
              }, 5e3);
          }),
        st = (function () {
          var n = d()(
            h.a.mark(function e(t, r, n) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n) {
                        e.next = 3;
                        break;
                      }
                      return (e.next = 3), it();

                    case 3:
                      return (e.next = 5), ee();

                    case 5:
                      return (e.next = 7), v();

                    case 7:
                      return (e.next = 9), s(t, r);

                    case 9:
                      setTimeout(() => {
                        te().catch((e) => {});
                      }, 300);

                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r) {
            return n.apply(this, arguments);
          };
        })();
      var ut = t(121);
      let lt;
      var pt = (function () {
          var t = d()(
            h.a.mark(function e(l) {
              var p, t, r, f;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (p = !1),
                        (lt
                          ? Object($e.c)
                          : ((lt = ({ type: e }) => {
                              e === u.Events.Toolbar.ExtractMathCancelled && (p = !0);
                            }),
                            Object($e.a)))(lt),
                        u.Actions.Toolbar.setCanCancel(!0),
                        (t = document.querySelector(".kix-cursor")),
                        (r = t.style.display.display),
                        (t.style.display = "none"),
                        (f = () => {
                          u.Actions.Toolbar.setCanCancel(!1), r ? (t.style.display = r) : t.style.removeProperty("display");
                        }),
                        e.abrupt(
                          "return",
                          new Promise((s, u) => {
                            setTimeout(
                              d()(
                                h.a.mark(function e() {
                                  var t, r, n, o, a, c, i;
                                  return h.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              (a = l.getBoundingClientRect()),
                                              (r = a.x),
                                              (n = a.y),
                                              (o = a.width),
                                              (a = a.height),
                                              (e.next = 4),
                                              Object(b.b)()
                                            );

                                          case 4:
                                            if (((c = e.sent), p)) return f(), e.abrupt("return", u(Error("no_math_found")));
                                            e.next = 8;
                                            break;

                                          case 8:
                                            return (
                                              (e.next = 10),
                                              Object(ut.a)(
                                                c,
                                                r * window.devicePixelRatio,
                                                n * window.devicePixelRatio,
                                                o * window.devicePixelRatio,
                                                a * window.devicePixelRatio
                                              )
                                            );

                                          case 10:
                                            return (i = e.sent), (e.next = 13), Object(b.P)(i);

                                          case 13:
                                            if (((t = e.sent), p)) return f(), e.abrupt("return", u(Error("no_math_found")));
                                            e.next = 17;
                                            break;

                                          case 17:
                                            e.next = 23;
                                            break;

                                          case 19:
                                            return (e.prev = 19), (e.t0 = e.catch(0)), f(), e.abrupt("return", u(Error("no_math_found")));

                                          case 23:
                                            return f(), e.abrupt("return", s(t));

                                          case 25:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[0, 19]]
                                  );
                                })
                              )
                            );
                          })
                        )
                      );

                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        ft = t(120);
      const dt = () => {
          const e = document.querySelector(".docs-linkbubble-bubble a");
          return e && e.offsetParent && (0 <= e.href.indexOf("api.gmath.guru") || 0 <= e.href.indexOf("equatioapi.texthelp.com"));
        },
        ht = () => {
          const e = document
            .querySelector(".docs-linkbubble-bubble a")
            .href.replace("http://api.gmath.guru/cgi-bin/gmath?%5Cdpi%7B480%7D", "")
            .replace("http://api.gmath.guru/cgi-bin/gmath?", "")
            .replace("http://equatioapi.texthelp.com/cgi-bin/gmath?%5Cdpi%7B480%7D", "")
            .replace("http://equatioapi.texthelp.com/cgi-bin/gmath?", "");
          return decodeURIComponent(e);
        },
        bt = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (x(t)) return Object(b.Q)("Edit Math - EquatIO MathML"), (e.prev = 2), (e.next = 5), E(t);
                        e.next = 13;
                        break;

                      case 5:
                        return (r = e.sent), e.abrupt("return", r);

                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(2));

                      case 11:
                        e.next = 24;
                        break;

                      case 13:
                        if (w(t)) return Object(b.Q)("Edit Math - MathML"), (e.prev = 15), (e.next = 18), Ze(t);
                        e.next = 24;
                        break;

                      case 18:
                        return (r = e.sent), e.abrupt("return", r);

                      case 22:
                        (e.prev = 22), (e.t1 = e.catch(15));

                      case 24:
                        return e.abrupt("return", null);

                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [2, 9],
                  [15, 22]
                ]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        mt = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), Object(O.a)(t);

                      case 3:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 8;
                          break;
                        }
                        return (e.next = 7), Object(ft.a)(t);

                      case 7:
                        e.t0 = e.sent;

                      case 8:
                        if ((r = e.t0)) return Object(b.Q)("Edit Math - EquatIO LaTeX"), e.abrupt("return", r);
                        e.next = 12;
                        break;

                      case 12:
                        e.next = 16;
                        break;

                      case 14:
                        (e.prev = 14), (e.t1 = e.catch(0));

                      case 16:
                        return e.abrupt("return", null);

                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 14]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        gt = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r, n, o, a;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((t = Object(T.c)()), (n = (t ? Object(T.a) : ot)()))) return (e.prev = 3), (e.next = 6), pt(n);
                        e.next = 17;
                        break;

                      case 6:
                        return (r = e.sent), (e.next = 9), Object(b.t)();

                      case 9:
                        return (n = e.sent), re(n), e.abrupt("return", r);

                      case 14:
                        return (e.prev = 14), (e.t0 = e.catch(3)), e.abrupt("return", Promise.reject(Error("no_math_found")));

                      case 17:
                        if ((o = (t ? Object(T.b) : ct)())) {
                          e.next = 20;
                          break;
                        }
                        return e.abrupt("return", Promise.reject(Error("no_math_found")));

                      case 20:
                        if ((a = o.querySelector("desc"))) return (a = a.textContent), (e.next = 25), bt(a);
                        e.next = 28;
                        break;

                      case 25:
                        if ((r = e.sent)) return e.abrupt("return", r);
                        e.next = 28;
                        break;

                      case 28:
                        if (o) return (a = o.querySelector("image").getAttribute("xlink:href")), (e.next = 32), mt(a);
                        e.next = 35;
                        break;

                      case 32:
                        if ((r = e.sent)) return e.abrupt("return", r);
                        e.next = 35;
                        break;

                      case 35:
                        return Object(b.Q)("Edit Math - No Math Detected"), e.abrupt("return", Promise.reject(Error("no_math_found")));

                      case 37:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 14]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        yt = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          ((t = document.createElement("style")).id = "eqTempStyle"),
                          (t.type = "text/css"),
                          (t.textContent = ".docs-material-gm-dialog-bg, .docs-material-gm-dialog { display: none }"),
                          document.head.appendChild(t),
                          (e.prev = 5),
                          (e.next = 8),
                          he()
                        );

                      case 8:
                        return (
                          (t = e.sent),
                          (r = t.description),
                          setTimeout(() => document.querySelector("#eqTempStyle").remove(), 300),
                          e.abrupt("return", r)
                        );

                      case 14:
                        (e.prev = 14), (e.t0 = e.catch(5));

                      case 16:
                        return (r = document.querySelector("#eqTempStyle")) && r.remove(), e.abrupt("return", null);

                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 14]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        vt = (t, r, n) => {
          if (n)
            for (let e = 0; e < n.length; e++) {
              const o = n[e],
                a = o.getBoundingClientRect(),
                c = a.x,
                i = a.y,
                s = a.width,
                u = a.height;
              if (t > c && t < c + s && r > i && r < i + u) return o;
            }
          return null;
        },
        wt = () => {
          const e = document.querySelector(".docs-squarehandleselectionbox-border");
          if (!e || !e.getBoundingClientRect) return null;
          const t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
          return r <= 0 || n <= 0 ? null : e;
        },
        xt = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r, n, o, a, c;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = wt()),
                        (o = o.getBoundingClientRect()),
                        (t = o.x),
                        (r = o.y),
                        (n = o.width),
                        (o = o.height),
                        (a = document.querySelectorAll("svg > g > image")).length < 1)
                      )
                        return e.abrupt("return", null);
                      e.next = 5;
                      break;

                    case 5:
                      if ((c = vt(t + n / 2, r + o / 2, a))) return (e.next = 9), mt(c.href.baseVal);
                      e.next = 11;
                      break;

                    case 9:
                      return (c = e.sent), e.abrupt("return", c || null);

                    case 11:
                      return e.abrupt("return", null);

                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Et = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (wt()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", null);

                    case 2:
                      if ((t = document.querySelector(".kix-embeddedobject-image > image"))) return (e.next = 6), mt(t.href.baseVal);
                      e.next = 8;
                      break;

                    case 6:
                      return (t = e.sent), e.abrupt("return", t || null);

                    case 8:
                      return e.abrupt("return", null);

                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ot = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), yt();

                      case 3:
                        if ((t = e.sent)) if ((t = t.match(/<\s*math[\s\S]*<\/\s*math>/gi)) && 0 < t.length) return (e.next = 9), bt(t[0]);
                        e.next = 12;
                        break;

                      case 9:
                        if ((t = e.sent)) return e.abrupt("return", t);
                        e.next = 12;
                        break;

                      case 12:
                        return (e.next = 14), Et();

                      case 14:
                        if ((r = e.sent)) return e.abrupt("return", r);
                        e.next = 17;
                        break;

                      case 17:
                        return (e.next = 19), xt();

                      case 19:
                        if ((r = e.sent)) return e.abrupt("return", r);
                        e.next = 22;
                        break;

                      case 22:
                        e.next = 26;
                        break;

                      case 24:
                        (e.prev = 24), (e.t0 = e.catch(0));

                      case 26:
                        return Object(b.Q)("Edit Math - No Math Detected"), e.abrupt("return", Promise.reject(Error("no_math_found")));

                      case 28:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 24]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      var St = () => (document.querySelector(".kix-canvas-tile-content") ? Ot : dt() ? ht : gt)(),
        kt = () => (Object(l.b)() ? et : St)(),
        Ct = (e, t) => {
          const r = new DOMParser(),
            n = r.parseFromString(t, "application/xml");
          if ("math" !== n.documentElement.tagName.toLowerCase()) throw Error("Invalid MathML document");
          n.documentElement.setAttribute("data-is-equatio", "1"), n.documentElement.setAttribute("data-latex", e);
          const o = new XMLSerializer(),
            a = o.serializeToString(n.documentElement);
          return ve.pd.xmlmin(a, !1).trim();
        },
        At = t(83);
      const Tt = (function () {
          var e = d()(
            h.a.mark(function e() {
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), y(() => document.querySelector(".picker-urlview-inner-input"), 200);

                      case 3:
                        e.next = 8;
                        break;

                      case 5:
                        throw ((e.prev = 5), (e.t0 = e.catch(0)), new Error("Couldn't find image dialog"));

                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Mt = (e) => {
          const t = (e, t) => {
            const r = new MouseEvent(t, {
              bubbles: !0,
              cancelable: !0
            });
            e.dispatchEvent(r);
          };
          t(e, "mouseover"), t(e, "mouseenter");
        },
        jt = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = () => {
                            const e = Array.from(
                              document.querySelectorAll(".goog-menuitem.apps-menuitem:not([aria-disabled]) .goog-menuitem-label")
                            ).filter((t) => Ae.b.some((e) => t.textContent && t.textContent.includes(e)));
                            return e.length < 1 ? null : e[0] && e[0].closest(".goog-menuitem");
                          }),
                          (e.prev = 1),
                          Object(f.a)(document.getElementById("docs-insert-menu")),
                          (e.next = 5),
                          je()
                        );

                      case 5:
                        return (r = e.sent), Mt(r), (e.next = 9), y(t, 30);

                      case 9:
                        (r = e.sent), Object(f.a)(r), (e.next = 16);
                        break;

                      case 13:
                        throw ((e.prev = 13), (e.t0 = e.catch(1)), new Error("Insert Image by URL Failed: " + e.t0));

                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 13]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        It = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r, n, o, a, c;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = document.querySelector(".picker-urlview-inner-input")),
                          (r = document.querySelector(".picker-urlview-insertbutton")),
                          (n = document.querySelector(".picker-urlview-cancelbutton")),
                          (o = document.querySelector(".picker-urlview-error-container")),
                          (a.value = t),
                          (a = new Event("paste", {
                            bubbles: !0,
                            cancelable: !1,
                            shiftKey: !1
                          })),
                          (c = () => {
                            o && "none" !== o.style.display && o.textContent && (o.textContent = "");
                          }),
                          (e.prev = 7),
                          c(),
                          document.querySelector(".picker-urlview-inner-input").dispatchEvent(a),
                          (e.next = 12),
                          y(() => {
                            if (o && "none" !== o.style.display && o.textContent) throw new Error(`Invalid URL ${t}. ` + o.textContent);
                            return !r.disabled;
                          }, 300)
                        );

                      case 12:
                        Object(f.a)(r), (e.next = 19);
                        break;

                      case 15:
                        throw ((e.prev = 15), (e.t0 = e.catch(7)), n && n.click(), new Error("Insert button never enabled. " + e.t0));

                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 15]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      var Rt = (function () {
        var t = d()(
          h.a.mark(function e(t) {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (document.querySelector(".picker-urlview-inner-input")) {
                      e.next = 3;
                      break;
                    }
                    return (e.next = 3), jt();

                  case 3:
                    return (e.next = 5), Tt();

                  case 5:
                    return (e.next = 7), It(t);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      const Lt = (function () {
        var t = d()(
          h.a.mark(function e(t) {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Ce(...t);

                  case 2:
                    if (e.sent) {
                      e.next = 5;
                      break;
                    }
                    throw new Error("no_result");

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      var _t = d()(
        h.a.mark(function e(...t) {
          var r, n;
          return h.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = Object(l.c)()), (n = Object(C.b)()), r !== l.a.GoogleDocs || at())) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 5), oe();

                  case 5:
                    if (Object(At.a)(r)) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 8), Rt(...t);

                  case 8:
                    return e.abrupt("return", "automation");

                  case 9:
                    if (n === C.a.Automatic || n === C.a.Speed) return (e.prev = 10), (e.next = 13), Rt(...t);
                    e.next = 22;
                    break;

                  case 13:
                    return e.abrupt("return", "automation");

                  case 16:
                    return (e.prev = 16), (e.t0 = e.catch(10)), console.error("Speed insert failed", e.t0), (e.next = 21), Lt(t);

                  case 21:
                    return e.abrupt("return", "api");

                  case 22:
                    return (e.prev = 22), (e.next = 25), Lt(t);

                  case 25:
                    return e.abrupt("return", "api");

                  case 28:
                    return (e.prev = 28), (e.t1 = e.catch(22)), console.error("Quality insert failed", e.t1), (e.next = 33), Rt(...t);

                  case 33:
                    return e.abrupt("return", "automation");

                  case 34:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [10, 16],
              [22, 28]
            ]
          );
        })
      );
      const Pt = (function () {
          var o = d()(
            h.a.mark(function e(t, r, n, o) {
              var a, c;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((a = Object(l.b)()))
                          try {
                            Ve(t, r);
                          } catch (e) {
                            console.error("Error setting alt text", e);
                          }
                        return (e.next = 4), _t(n, o, t);

                      case 4:
                        if (((c = e.sent), a)) {
                          e.next = 14;
                          break;
                        }
                        return (e.prev = 6), (e.next = 9), st(t, r, "api" === c);

                      case 9:
                        e.next = 14;
                        break;

                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(6)), console.error("Error setting alt text - docs");

                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[6, 11]]
              );
            })
          );
          return function (e, t, r, n) {
            return o.apply(this, arguments);
          };
        })(),
        qt = (e, t, r, n) => {
          if (!r && !n)
            return {
              width: e,
              height: t
            };
          if (r && n)
            return {
              width: r,
              height: n
            };
          if (r) {
            const o = r / e;
            return {
              width: r,
              height: t * o
            };
          }
          const o = n / t;
          return {
            width: e * o,
            height: n
          };
        },
        Ut = (function () {
          var t = d()(
            h.a.mark(function e(t, r = "image") {
              var n, o;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (o = we(t, r, (n = "desmos" === r ? "Equatio Desmos Graph" : "Equatio Image"))), (e.next = 4), Pt(n, o, t);

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        Dt = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      return (n = e.sent), (e.next = 7), Ut(n, "desmos");

                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        Bt = (function () {
          var a = d()(
            h.a.mark(function e(t, r, n, o, a) {
              var c, i, s, u;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (
                        (c = {
                          width: r,
                          height: n
                        }),
                        (i = Object(At.a)(Object(l.c)())
                          ? ((i = n),
                            r < 20
                              ? ((c = qt(r, n, 20)), (i = Math.ceil(c.height)))
                              : n < 20 && ((c = qt(r, n, void 0, 20)), (i = Math.ceil(c.height))),
                            "height=" + i)
                          : $(r, n)),
                        (s = `https://equatio-api.texthelp.com/png/${encodeURIComponent(t)}?` + i),
                        (u = Ct(t, a)),
                        (e.next = 8),
                        Pt(o, u, s, c)
                      );

                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r, n, o) {
            return a.apply(this, arguments);
          };
        })();
      var n = t(7),
        Nt = t.n(n),
        Ft = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r, n;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        throw new Error("no_math_found");

                      case 2:
                        if (((r = t.match(/<\s*math[\s\S]*<\/\s*math>/gi)), (r = r && r.length ? r[0] : null))) {
                          e.next = 6;
                          break;
                        }
                        throw new Error("no_math_found");

                      case 6:
                        if (x(r)) return (e.prev = 7), (e.next = 10), E(r);
                        e.next = 18;
                        break;

                      case 10:
                        return (n = e.sent), e.abrupt("return", n);

                      case 14:
                        (e.prev = 14), (e.t0 = e.catch(7));

                      case 16:
                        e.next = 28;
                        break;

                      case 18:
                        if (w(r)) return (e.prev = 19), (e.next = 22), Ze(r);
                        e.next = 28;
                        break;

                      case 22:
                        return (n = e.sent), e.abrupt("return", n);

                      case 26:
                        (e.prev = 26), (e.t1 = e.catch(19));

                      case 28:
                        throw new Error("no_math_found");

                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [7, 14],
                  [19, 26]
                ]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      function Gt(t, e) {
        var r,
          n = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(t)),
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Gt(Object(r), !0).forEach(function (e) {
                Nt()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Gt(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      const Ht = (e) => {
          const t = {
            bubbles: !0,
            currentTarget: document,
            defaultPrevented: !1,
            srcElement: e,
            target: e,
            timeStamp: Date.now(),
            view: window,
            charCode: 0,
            keyCode: 27,
            key: "Escape",
            code: "Escape",
            which: 27
          };
          e.dispatchEvent(
            new KeyboardEvent(
              "keydown",
              I(
                I({}, t),
                {},
                {
                  type: "keydown"
                }
              )
            )
          ),
            e.dispatchEvent(
              new KeyboardEvent(
                "keyup",
                I(
                  I({}, t),
                  {},
                  {
                    type: "keyup"
                  }
                )
              )
            );
        },
        Kt = (e, t = !1) => {
          const r = {
            bubbles: !0,
            currentTarget: document,
            defaultPrevented: !1,
            srcElement: e,
            target: e,
            timeStamp: Date.now(),
            view: window,
            charCode: 0,
            keyCode: t ? 37 : 39,
            key: t ? "ArrowLeft" : "ArrowRight",
            code: t ? 37 : 39,
            which: t ? 37 : 39,
            shiftKey: t
          };
          e.dispatchEvent(
            new KeyboardEvent(
              "keydown",
              I(
                I({}, r),
                {},
                {
                  type: "keydown"
                }
              )
            )
          ),
            e.dispatchEvent(
              new KeyboardEvent(
                "keyup",
                I(
                  I({}, r),
                  {},
                  {
                    type: "keyup"
                  }
                )
              )
            );
        },
        Wt = (e) => {
          const t = e.getBoundingClientRect(),
            r = t.x,
            n = t.y,
            o = t.width,
            a = t.height,
            c = {
              altKey: !1,
              bubbles: !0,
              button: 0,
              buttons: 0,
              cancelBubble: !1,
              cancelable: !0,
              clientX: r + o / 2,
              clientY: n + a / 2,
              composed: !0,
              ctrlKey: !1,
              defaultPrevented: !1,
              detail: 1,
              eventPhase: 3,
              fromElement: null,
              isTrusted: !0,
              metaKey: !1,
              relatedTarget: null,
              returnValue: !0,
              shiftKey: !1,
              timeStamp: Date.now(),
              type: "click",
              view: window,
              which: 1
            };
          e.dispatchEvent(
            new MouseEvent(
              "mousedown",
              I(
                I({}, c),
                {},
                {
                  type: "mousedown"
                }
              )
            )
          ),
            e.dispatchEvent(
              new MouseEvent(
                "mouseup",
                I(
                  I({}, c),
                  {},
                  {
                    type: "mouseup"
                  }
                )
              )
            ),
            e.dispatchEvent(new MouseEvent("click", c));
        },
        Qt = (e, t) => {
          const r = new InputEvent("input", {
            bubbles: !0,
            cancelBubble: !1,
            cancelable: !1,
            composed: !0,
            currentTarget: e,
            data: t,
            dataTransfer: null,
            defaultPrevented: !1,
            detail: 0,
            eventPhase: 3,
            inputType: "insertText",
            isComposing: !1,
            isTrusted: !0
          });
          e.dispatchEvent(r);
        },
        Vt = () => {
          const e = document.querySelector("button[data-unique-id='SingleLineRibbon-HideRibbon']");
          return !!e && "true" === e.getAttribute("aria-checked");
        },
        Jt = (t) => {
          try {
            let e;
            const r = document.querySelector("#RibbonModeToggle");
            r && r.click(),
              (e = t
                ? document.querySelector("button[data-unique-id='SingleLineRibbon-AlwaysShowRibbon']")
                : document.querySelector("button[data-unique-id='SingleLineRibbon-HideRibbon']")).click();
          } catch (e) {}
        },
        $t = (function () {
          var n = d()(
            h.a.mark(function e(t, r, n) {
              var o, a, c, i, s, u;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((Wt(n), (o = !!document.querySelector("#Title")), (a = !1), o)) {
                        e.next = 23;
                        break;
                      }
                      return (e.next = 6), y(() => document.querySelector("#Picture"), 50);

                    case 6:
                      return e.sent.click(), (e.next = 10), y(() => document.querySelector("#EditPictureAltText"), 10, !1);

                    case 10:
                      if ((c = e.sent)) {
                        e.next = 21;
                        break;
                      }
                      return (a = Vt()) && Jt(!0), (e.next = 16), y(() => document.querySelector("#RibbonOverflowMenu-overflow"), 10, !1);

                    case 16:
                      return (
                        (s = e.sent) && s.click(),
                        (e.next = 20),
                        y(() => {
                          const e = document.querySelector("#EditPictureAltText");
                          return e || document.querySelector("button[data-unique-id=Overflow-EditPictureAltText]");
                        }, 100)
                      );

                    case 20:
                      c = e.sent;

                    case 21:
                      a && setTimeout(() => Jt(!1), 200), c.click();

                    case 23:
                      return (e.next = 25), y(() => document.querySelector("#Title"), 100);

                    case 25:
                      if (((i = e.sent), o)) {
                        e.next = 29;
                        break;
                      }
                      return (e.next = 29), new Promise((e) => setTimeout(() => e(), 200));

                    case 29:
                      (i.value = t),
                        Qt(i, t),
                        ((s = document.querySelector("#Description")).value = r),
                        Qt(s, r),
                        o || ((u = document.querySelector("#TaskPaneCloseBtnFormatPictureTaskPane")) ? u.click() : Ht(s || document.body)),
                        Kt(n);

                    case 36:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r) {
            return n.apply(this, arguments);
          };
        })(),
        zt = (function () {
          var e = d()(
            h.a.mark(function e() {
              var t, r, n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), y(() => document.querySelector("#Home"), 10, !1);

                    case 2:
                      return (
                        (t = e.sent) && t.click(),
                        (e.next = 6),
                        y(
                          () =>
                            document.querySelector(
                              "#PasteStandalone, #PasteSplitButton > button, button[data-unique-id='Ribbon-PasteSplitButton']"
                            ),
                          10,
                          !1
                        )
                      );

                    case 6:
                      if ((t = e.sent)) return t.click(), e.abrupt("return");
                      e.next = 10;
                      break;

                    case 10:
                      return (e.next = 12), y(() => document.querySelector("#Clipboard"), 10, !1);

                    case 12:
                      return (
                        (r = e.sent) && r.click(),
                        (e.next = 16),
                        y(() => document.querySelector("button[data-unique-id=Ribbon-Paste]"), 10, !1)
                      );

                    case 16:
                      (r = e.sent) ? (r.click(), (e.next = 27)) : (e.next = 21);
                      break;

                    case 21:
                      if ((n = document.querySelector("button[name=Paste]"))) return n.click(), e.abrupt("return");
                      e.next = 25;
                      break;

                    case 25:
                      (n = document.querySelectorAll("#Ribbon-ClipboardDropdown li > button"))[n.length - 1].click();

                    case 27:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Xt = () => {
          const e = document.querySelector("#DialogActionButton"),
            t = document,
            r = t.activeElement;
          if (e && r === e) return !0;
          if (e && r && r.contains(e)) return !0;
          const n = document.querySelector("#dialogHost");
          return !(!n || !n.contains(r));
        },
        Yt = ({ tts: i, mathML: s }) =>
          new Promise((o, a) => {
            const e = document.querySelector("#PageContentContainer");
            if (e) {
              const c = new MutationObserver((t) => {
                for (let e = 0; e < t.length; e += 1) {
                  const r = t[e].addedNodes[0];
                  if (r && r.parentElement && r.classList && r.classList.contains("WACImage")) {
                    const n = t[e].addedNodes[0].parentElement;
                    c.disconnect(),
                      $t(i, s, n)
                        .then(() => o())
                        .catch((e) => {
                          console.error("EquatIO Setting Alt Text Failed", e), a(e);
                        });
                    break;
                  }
                }
              });
              c.observe(e, {
                childList: !0,
                subtree: !0
              }),
                zt()
                  .then(() => {
                    setTimeout(() => {
                      Xt() && (c.disconnect(), o());
                    }, 1e3),
                      setTimeout(() => {
                        c.disconnect(), a(new Error("Observer timed out"));
                      }, 3e4);
                  })
                  .catch((e) => {
                    c.disconnect(), console.error("Error pasting into word!", e), a(e);
                  });
            } else a(new Error("PageContentContainer not found"));
          }),
        Zt = () => {
          const e = document.querySelector(".OnlyImageSelected > img");
          return e && e.alt ? e.alt : null;
        },
        er = (e) => Yt(e),
        tr = () => Ft(Zt());
      var rr = t(17);
      const nr = () => Object(rr.d)(Object(rr.c)(window.location.hostname)),
        or = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), Object(b.J)(t);

                      case 3:
                        return (e.next = 5), Object(b.m)(!1);

                      case 5:
                        if (e.sent)
                          return (
                            (e.next = 8),
                            Object(b.bb)("clipboard", {
                              url: t
                            })
                          );
                        e.next = 8;
                        break;

                      case 8:
                        u.Actions.Toolbar.setCopyMathStatus(u.CopyMathStatus.Success), (e.next = 15);
                        break;

                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to copy to clipboard", e.t0),
                          u.Actions.Toolbar.setCopyMathStatus(u.CopyMathStatus.Failure);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 11]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        ar = (function () {
          var t = d()(
            h.a.mark(function e(t, r = "image") {
              var n, o;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (nr()) {
                        e.next = 3;
                        break;
                      }
                      return or(t), e.abrupt("return");

                    case 3:
                      return (o = we(t, r, (n = "desmos" === r ? "Equatio Desmos Graph" : "Equatio Image"))), (e.next = 7), Object(b.J)(t);

                    case 7:
                      return (
                        (e.next = 9),
                        er({
                          tts: n,
                          mathML: o
                        })
                      );

                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        cr = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      return (n = e.sent), (e.next = 7), ar(n, "desmos");

                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        ir = (function () {
          var a = d()(
            h.a.mark(function e(t, r, n, o, a) {
              var c, i;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), u.MathRendering.getSvg(t);

                    case 4:
                      return (i = e.sent), (i = i.html), (e.next = 8), u.MathRendering.getPng(i);

                    case 8:
                      if (((c = e.sent), nr())) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 12), or(c);

                    case 12:
                      return e.abrupt("return");

                    case 13:
                      return (e.next = 15), Object(b.J)(c);

                    case 15:
                      return (
                        (i = Ct(t, a)),
                        (e.next = 18),
                        er({
                          tts: o,
                          mathML: i
                        })
                      );

                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r, n, o) {
            return a.apply(this, arguments);
          };
        })(),
        sr = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r;
              return h.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), fetch(t);

                      case 3:
                        return (r = e.sent), (e.next = 6), r.blob();

                      case 6:
                        return (
                          (r = e.sent),
                          (e.next = 9),
                          navigator.clipboard.write([
                            new ClipboardItem({
                              [r.type]: r
                            })
                          ])
                        );

                      case 9:
                        return (e.next = 11), Object(b.m)(!1);

                      case 11:
                        if (e.sent)
                          return (
                            (e.next = 14),
                            Object(b.bb)("clipboard", {
                              url: t
                            })
                          );
                        e.next = 14;
                        break;

                      case 14:
                        u.Actions.Toolbar.setCopyMathStatus(u.CopyMathStatus.Success), (e.next = 21);
                        break;

                      case 17:
                        (e.prev = 17),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to copy to clipboard", e.t0),
                          u.Actions.Toolbar.setCopyMathStatus(u.CopyMathStatus.Failure);

                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 17]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        ur = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              var r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), u.MathRendering.getSvg(t);

                    case 4:
                      return (r = e.sent), (r = r.html), (e.next = 8), u.MathRendering.getPng(r);

                    case 8:
                      return (r = e.sent), (e.next = 11), sr(r);

                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        lr = (function () {
          var t = d()(
            h.a.mark(function e(t) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), sr(t);

                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        pr = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      var R = t(19),
        fr = t(0),
        dr = t(82);
      const hr = (t) =>
          new Promise((o, a) => {
            const c = ({ action: e, command: t, value: r, fromEditor: n }) => {
                e === fr.a.HtmlEditorApiAction &&
                  n &&
                  t === R.a.Insert &&
                  (chrome.runtime.onMessage.removeListener(c), r ? o() : a(new Error("HTML_EDITOR_API_RESPONSE_FAILED")));
              },
              e =
                (setTimeout(() => {
                  chrome.runtime.onMessage.removeListener(c), a(new Error("HTML_EDITOR_API_NO_RESPONSE"));
                }, 5e3),
                chrome.runtime.onMessage.addListener(c),
                Object(dr.b)());
            Object(b.S)(R.a.Insert, t, !1, e);
          }),
        br = (function () {
          var o = d()(
            h.a.mark(function e(t, r, n, o) {
              var a;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (
                        ((a = document.createElement("img")).src = "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(t)),
                        (a.style.height = Math.round(n) + "px"),
                        (a.alt = o),
                        (a = a.outerHTML),
                        (e.next = 9),
                        hr(a)
                      );

                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, r, n) {
            return o.apply(this, arguments);
          };
        })(),
        mr = (function () {
          var t = d()(
            h.a.mark(function e(t, r = "image") {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = `<img src="${t}" alt="${"desmos" === r ? "Equatio Desmos Graph" : "Equatio Image"}" />`), (e.next = 4), hr(n)
                      );

                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        gr = (function () {
          var r = d()(
            h.a.mark(function e(t, r) {
              var n;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");

                    case 2:
                      return (e.next = 4), Object(o.a)(t, r);

                    case 4:
                      return (n = e.sent), (e.next = 7), mr(n, "desmos");

                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })();
      var yr = t(55);
      const vr = () =>
        new Promise((o, a) => {
          const c = ({ action: e, command: t, value: r, fromEditor: n }) => {
              e === fr.a.HtmlEditorApiAction &&
                n &&
                t === R.a.Extract &&
                (chrome.runtime.onMessage.removeListener(c), r ? o(r) : a(new Error("HTML_EDITOR_API_RESPONSE_FAILED")));
            },
            e =
              (setTimeout(() => {
                chrome.runtime.onMessage.removeListener(c), a(new Error("HTML_EDITOR_API_NO_RESPONSE"));
              }, 5e3),
              chrome.runtime.onMessage.addListener(c),
              Object(dr.b)());
          Object(b.S)(R.a.Extract, null, !1, e);
        });
      let wr;
      var xr = d()(
          h.a.mark(function e() {
            var t, r;
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), vr();

                  case 2:
                    if ((t = e.sent)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", null);

                  case 5:
                    if (((wr = wr || new DOMParser()), (r = wr.parseFromString(t, "text/html")), (r = r.querySelector("img")) && r.src))
                      return e.abrupt("return", Object(b.j)(r.src));
                    e.next = 10;
                    break;

                  case 10:
                    return e.abrupt("return", null);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ),
        Er = t(32);
      t.d(e, "a", function () {
        return Sr;
      }),
        t.d(e, "b", function () {
          return kr;
        }),
        t.d(e, "c", function () {
          return Cr;
        });
      let L, _, P;
      const Or = () => {
          const e = window.location,
            t = e.host,
            r = e.hostname;
          if ("docs.google.com" === t) {
            const n = Object(l.c)();
            switch (n) {
              case "Google Forms":
                (L = null),
                  V(),
                  (_ = {
                    graph: We,
                    math: He,
                    image: Ke
                  });
                break;

              case "Google Sheets":
                (L = ye),
                  (_ = {
                    graph: qe,
                    math: Ge,
                    image: Pe
                  });
                break;

              default:
                (L = kt),
                  (_ = {
                    graph: Dt,
                    math: Bt,
                    image: Ut
                  });
            }
          } else
            Object(rr.b)(r)
              ? ((L = tr),
                (_ = {
                  graph: cr,
                  math: ir,
                  image: ar
                }))
              : Object(yr.a)() || Object(Er.a)()
              ? ((L = Q),
                (_ = {
                  graph: Y,
                  math: z,
                  image: X
                }),
                V(),
                Object(J.a)())
              : (_ = P
                  ? ((L = xr),
                    {
                      graph: gr,
                      math: br,
                      image: mr,
                      isEditorApi: !0
                    })
                  : ((L = null),
                    {
                      graph: pr,
                      math: ur,
                      image: lr
                    }));
        },
        Sr = (Or(), r(), () => L),
        kr = () => _,
        Cr = (e) => {
          e !== P &&
            (e
              ? ((_ = {
                  graph: gr,
                  math: br,
                  image: mr,
                  isEditorApi: !0
                }),
                (L = xr),
                (P = !0))
              : ((P = !1), Or()));
        };
    },
    92: function (e, t, r) {
      "use strict";
      var n = r(55),
        o = r(10),
        a = r(17),
        c = r(32);
      const i = () => {
        const e = window.location.hostname;
        return Object(o.c)()
          ? "" + Object(o.c)() + (Object(o.d)() ? " - Response" : "")
          : Object(n.a)()
          ? "PDF Reader"
          : Object(c.a)()
          ? "Partner - " + e
          : Object(a.b)(e)
          ? "Office"
          : "Third Party Website";
      };
      t.a = i;
    },
    97: function (e, t, r) {
      "use strict";
      r(3), r(1);
      var n = r(4);
      r.d(t, "b", function () {
        return n.q;
      }),
        r.d(t, "a", function () {
          return n.i;
        });
    }
  }
]);
