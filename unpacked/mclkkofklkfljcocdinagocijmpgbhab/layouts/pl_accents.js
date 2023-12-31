(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var f = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    g = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    k = function (a, b, c) {
      k = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? f : g;
      return k.apply(null, arguments);
    },
    m = function (a) {
      var b = ["google", "elements", "keyboard", "hangulTransform"],
        c = l;
      b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
      for (var d; b.length && (d = b.shift()); )
        b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
    },
    n = function () {
      this.g =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.i = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.i[this.g[a]] = String.fromCharCode(4520 + a);
      this.ea = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.o = /[\u11a8-\u11c3]/g;
      this.ia = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.ga = /[\uac00-\ud7af]/g;
      this.ha = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.aa = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.u = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.v = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.ba = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.h = {
        "\u1107": "\u3142",
        "\u110c": "\u3148",
        "\u1103": "\u3137",
        "\u1100": "\u3131",
        "\u1109": "\u3145",
        "\u116d": "\u315b",
        "\u1167": "\u3155",
        "\u1163": "\u3151",
        "\u1162": "\u3150",
        "\u1166": "\u3154",
        "\u1106": "\u3141",
        "\u1102": "\u3134",
        "\u110b": "\u3147",
        "\u1105": "\u3139",
        "\u1112": "\u314e",
        "\u1169": "\u3157",
        "\u1165": "\u3153",
        "\u1161": "\u314f",
        "\u1175": "\u3163",
        "\u110f": "\u314b",
        "\u1110": "\u314c",
        "\u110e": "\u314a",
        "\u1111": "\u314d",
        "\u1172": "\u3160",
        "\u116e": "\u315c",
        "\u1173": "\u3161",
        "\u1108": "\u3143",
        "\u110d": "\u3149",
        "\u1104": "\u3138",
        "\u1101": "\u3132",
        "\u110a": "\u3146",
        "\u1164": "\u3152",
        "\u1168": "\u3156"
      };
      this.j = {};
      for (var b in this.h) this.j[this.h[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.o, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.ia, function (c) {
        return a.ea[c];
      });
    },
    l = this || self;
  n.prototype.da = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.ca = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.fa = function (a, b, c, d) {
    return b + this.i[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.j[e];
        c += h ? h : e;
      }
      b = c.replace(a.ga, k(a.da, a));
      c = k(a.fa, a);
      b = q(a, p(a, b)).replace(a.aa, c).replace(a.u, c).replace(a.v, c).replace(a.ba, c).replace(a.ha, k(a.ca, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "pl_accents",
    title: "Polski",
    mappings: {
      sl: {
        "\u00c0": "~",
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "(",
        0: ")",
        m: "_",
        "=": "+",
        Q: "q",
        W: "w",
        E: "e",
        R: "r",
        T: "t",
        Y: "y",
        U: "u",
        I: "i",
        O: "o",
        P: "p",
        "\u00db": "{",
        "\u00dd": "}",
        "\u00dc": "|",
        A: "a",
        S: "s",
        D: "d",
        F: "f",
        G: "g",
        H: "h",
        J: "j",
        K: "k",
        L: "l",
        ";": ": ",
        "\u00de": '"',
        Z: "z",
        X: "x",
        C: "c",
        V: "v",
        B: "b",
        N: "n",
        M: "m",
        "\u00bc": "<",
        "\u00be": ">",
        "\u00bf": "?"
      },
      cl: {
        E: "\u0118",
        U: "\u20ac",
        O: "\u00d3",
        A: "\u0104",
        S: "\u015a",
        L: "\u0141",
        Z: "\u017b",
        X: "\u0179",
        C: "\u0106",
        N: "\u0143"
      },
      scl: { E: "\u0119", O: "\u00f3", A: "\u0105", S: "\u015b", L: "\u0142", Z: "\u017c", X: "\u017a", C: "\u0107", N: "\u0144" },
      c: {
        E: "\u0119",
        U: "\u20ac",
        O: "\u00f3",
        A: "\u0105",
        S: "\u015b",
        L: "\u0142",
        Z: "\u017c",
        X: "\u017a",
        C: "\u0107",
        N: "\u0144"
      },
      sc: { E: "\u0118", O: "\u00d3", A: "\u0104", S: "\u015a", L: "\u0141", Z: "\u017b", X: "\u0179", C: "\u0106", N: "\u0143" },
      l: {
        "\u00c0": "`",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0",
        m: "-",
        "=": "=",
        Q: "Q",
        W: "W",
        E: "E",
        R: "R",
        T: "T",
        Y: "Y",
        U: "U",
        I: "I",
        O: "O",
        P: "P",
        "\u00db": "[",
        "\u00dd": "]",
        "\u00dc": "\\",
        A: "A",
        S: "S",
        D: "D",
        F: "F",
        G: "G",
        H: "H",
        J: "J",
        K: "K",
        L: "L",
        ";": ";",
        "\u00de": "'",
        Z: "Z",
        X: "X",
        C: "C",
        V: "V",
        B: "B",
        N: "N",
        M: "M",
        "\u00bc": ",",
        "\u00be": ".",
        "\u00bf": "/"
      },
      s: {
        "\u00c0": "~",
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "(",
        0: ")",
        m: "_",
        "=": "+",
        Q: "Q",
        W: "W",
        E: "E",
        R: "R",
        T: "T",
        Y: "Y",
        U: "U",
        I: "I",
        O: "O",
        P: "P",
        "\u00db": "{",
        "\u00dd": "}",
        "\u00dc": "|",
        A: "A",
        S: "S",
        D: "D",
        F: "F",
        G: "G",
        H: "H",
        J: "J",
        K: "K",
        L: "L",
        ";": ":",
        "\u00de": '"',
        Z: "Z",
        X: "X",
        C: "C",
        V: "V",
        B: "B",
        N: "N",
        M: "M",
        "\u00bc": "<",
        "\u00be": ">",
        "\u00bf": "?"
      },
      "": {
        "\u00c0": "`",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0",
        m: "-",
        "=": "=",
        Q: "q",
        W: "w",
        E: "e",
        R: "r",
        T: "t",
        Y: "y",
        U: "u",
        I: "i",
        O: "o",
        P: "p",
        "\u00db": "[",
        "\u00dd": "]",
        "\u00dc": "\\",
        A: "a",
        S: "s",
        D: "d",
        F: "f",
        G: "g",
        H: "h",
        J: "j",
        K: "k",
        L: "l",
        ";": ";",
        "\u00de": "'",
        Z: "z",
        X: "x",
        C: "c",
        V: "v",
        B: "b",
        N: "n",
        M: "m",
        "\u00bc": ",",
        "\u00be": ".",
        "\u00bf": "/"
      }
    },
    accents: {
      ",c,sl,scl,s,sc,l,cl": [
        "\u0105,\u0107,\u0119,\u0142,\u0144,\u00f3,\u015b,\u017a,\u017c",
        "\u0104,\u0106,\u0118,\u0141,\u0143,\u00d3,\u015a,\u0179,\u017b"
      ]
    },
    transform: {
      "~e": "\u0119",
      "~L": "\u0141",
      "~l": "\u0142",
      "~a": "\u0105",
      "~E": "\u0118",
      "~z": "\u017c",
      "~A": "\u0104",
      "~Z": "\u017b",
      "~o": "\u00f3",
      "~O": "\u00d3",
      "~S": "\u015a",
      "~s": "\u015b",
      "~n": "\u0144",
      "~N": "\u0143",
      "~C": "\u0106",
      "~ ": "~",
      "~X": "\u0179",
      "~x": "\u017a",
      "~c": "\u0107"
    }
  });
}).call(this);
