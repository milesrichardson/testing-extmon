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
      this.J = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.o = /[\u11a8-\u11c3]/g;
      this.T = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.P = /[\uac00-\ud7af]/g;
      this.R = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.A = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.u = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.v = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.C = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.T, function (c) {
        return a.J[c];
      });
    },
    l = this || self;
  n.prototype.I = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.H = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.O = function (a, b, c, d) {
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
      b = c.replace(a.P, k(a.I, a));
      c = k(a.O, a);
      b = q(a, p(a, b)).replace(a.A, c).replace(a.u, c).replace(a.v, c).replace(a.C, c).replace(a.R, k(a.H, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "sq",
    title: "Shqip",
    mappings: {
      "": { "": "\\1234567890-=qwertzuiop\u00e7@]asdfghjkl\u00eb[yxcvbnm,./" },
      s: { "": "|!\"#$%^&*()_+QWERTZUIOP\u00c7'}ASDFGHJKL\u00cb{YXCVBNM;:?" },
      l: { "": "\\1234567890-=QWERTZUIOP\u00c7@]ASDFGHJKL\u00cb[YXCVBNM,./" },
      sl: { "": "|!\"#$%^&*()_+qwertzuiop\u00e7'}asdfghjkl\u00eb{yxcvbnm;:?" },
      c: {
        1: "~",
        2: "\u02c7",
        3: "^",
        4: "\u02d8",
        5: "\u00b0",
        6: "\u02db",
        7: "`",
        8: "\u02d9",
        9: "\u00b4",
        0: "\u02dd",
        m: "\u00a8",
        "=": "\u00b8",
        Q: "\\",
        W: "|",
        "\u00db": "\u00f7",
        "\u00dd": "\u00d7",
        "\u00dc": "\u00a4",
        S: "\u0111",
        D: "\u0110",
        F: "[",
        G: "]",
        K: "\u0142",
        L: "\u0141",
        ";": "$",
        "\u00de": "\u00df",
        V: "@",
        B: "{",
        N: "}",
        M: "\u00a7",
        "\u00bc": "<",
        "\u00be": ">"
      }
    },
    transform: {
      "\u02c7A": "\u01cd",
      "\u00a8A": "\u00c4",
      "\u00b0A": "\u00c5",
      "\u00b4A": "\u00c1",
      "\u02d9A": "\u0226",
      "\u02d8A": "\u0102",
      "\u02dbA": "\u0104",
      "\\^A": "\u00c2",
      "\u02d9B": "\u1e02",
      "\u02c7C": "\u010c",
      "\u00b4C": "\u0106",
      "\u00b8C": "\u00c7",
      "\u02d9C": "\u010a",
      "\\^C": "\u0108",
      "\u02c7D": "\u010e",
      "\u00b8D": "\u1e10",
      "\u02d9D": "\u1e0a",
      "\u02c7E": "\u011a",
      "\u00a8E": "\u00cb",
      "\u00b4E": "\u00c9",
      "\u00b8E": "\u0228",
      "\u02d9E": "\u0116",
      "\u02d8E": "\u0114",
      "\u02dbE": "\u0118",
      "\\^E": "\u00ca",
      "\u02d9F": "\u1e1e",
      "\u02c7G": "\u01e6",
      "\u00b4G": "\u01f4",
      "\u00b8G": "\u0122",
      "\u02d9G": "\u0120",
      "\u02d8G": "\u011e",
      "\\^G": "\u011c",
      "\u02c7H": "\u021e",
      "\u00a8H": "\u1e26",
      "\u00b8H": "\u1e28",
      "\u02d9H": "\u1e22",
      "\\^H": "\u0124",
      "\u02c7I": "\u01cf",
      "\u00a8I": "\u00cf",
      "\u00b4I": "\u00cd",
      "\u02d9I": "\u0130",
      "\u02d8I": "\u012c",
      "\u02dbI": "\u012e",
      "\\^I": "\u00ce",
      "\\^J": "\u0134",
      "\u02c7K": "\u01e8",
      "\u00b4K": "\u1e30",
      "\u00b8K": "\u0136",
      "\u02c7L": "\u013d",
      "\u00b4L": "\u0139",
      "\u00b8L": "\u013b",
      "\u00b4M": "\u1e3e",
      "\u02d9M": "\u1e40",
      "\u02c7N": "\u0147",
      "\u00b4N": "\u0143",
      "\u00b8N": "\u0145",
      "\u02d9N": "\u1e44",
      "\u02c7O": "\u01d1",
      "\u00a8O": "\u00d6",
      "\u00b4O": "\u00d3",
      "\u02d9O": "\u022e",
      "\u02d8O": "\u014e",
      "\u02dbO": "\u01ea",
      "\u02ddO": "\u0150",
      "\\^O": "\u00d4",
      "\u00b4P": "\u1e54",
      "\u02d9P": "\u1e56",
      "\u02c7R": "\u0158",
      "\u00b4R": "\u0154",
      "\u00b8R": "\u0156",
      "\u02d9R": "\u1e58",
      "\u02c7S": "\u0160",
      "\u00b4S": "\u015a",
      "\u00b8S": "\u015e",
      "\u02d9S": "\u1e60",
      "\\^S": "\u015c",
      "\u02c7T": "\u0164",
      "\u00b8T": "\u0162",
      "\u02d9T": "\u1e6a",
      "\u02c7U": "\u01d3",
      "\u00a8U": "\u00dc",
      "\u00b0U": "\u016e",
      "\u00b4U": "\u00da",
      "\u02d8U": "\u016c",
      "\u02dbU": "\u0172",
      "\u02ddU": "\u0170",
      "\\^U": "\u00db",
      "\u00a8W": "\u1e84",
      "\u00b4W": "\u1e82",
      "\u02d9W": "\u1e86",
      "\\^W": "\u0174",
      "\u00a8X": "\u1e8c",
      "\u02d9X": "\u1e8a",
      "\u00a8Y": "\u0178",
      "\u00b4Y": "\u00dd",
      "\u02d9Y": "\u1e8e",
      "\\^Y": "\u0176",
      "\u02c7Z": "\u017d",
      "\u00b4Z": "\u0179",
      "\u02d9Z": "\u017b",
      "\\^Z": "\u1e90",
      "\u02c7a": "\u01ce",
      "\u00a8a": "\u00e4",
      "\u00b0a": "\u00e5",
      "\u00b4a": "\u00e1",
      "\u02d9a": "\u0227",
      "\u02d8a": "\u0103",
      "\u02dba": "\u0105",
      "\\^a": "\u00e2",
      "\u02d9b": "\u1e03",
      "\u02c7c": "\u010d",
      "\u00b4c": "\u0107",
      "\u00b8c": "\u00e7",
      "\u02d9c": "\u010b",
      "\\^c": "\u0109",
      "\u02c7d": "\u010f",
      "\u00b8d": "\u1e11",
      "\u02d9d": "\u1e0b",
      "\u02c7e": "\u011b",
      "\u00a8e": "\u00eb",
      "\u00b4e": "\u00e9",
      "\u00b8e": "\u0229",
      "\u02d9e": "\u0117",
      "\u02d8e": "\u0115",
      "\u02dbe": "\u0119",
      "\\^e": "\u00ea",
      "\u02d9f": "\u1e1f",
      "\u02c7g": "\u01e7",
      "\u00b4g": "\u01f5",
      "\u00b8g": "\u0123",
      "\u02d9g": "\u0121",
      "\u02d8g": "\u011f",
      "\\^g": "\u011d",
      "\u02c7h": "\u021f",
      "\u00a8h": "\u1e27",
      "\u00b8h": "\u1e29",
      "\u02d9h": "\u1e23",
      "\\^h": "\u0125",
      "\u02c7i": "\u01d0",
      "\u00a8i": "\u00ef",
      "\u00b4i": "\u00ed",
      "\u02d8i": "\u012d",
      "\u02dbi": "\u012f",
      "\\^i": "\u00ee",
      "\u02c7j": "\u01f0",
      "\\^j": "\u0135",
      "\u02c7k": "\u01e9",
      "\u00b4k": "\u1e31",
      "\u00b8k": "\u0137",
      "\u02c7l": "\u013e",
      "\u00b4l": "\u013a",
      "\u00b8l": "\u013c",
      "\u00b4m": "\u1e3f",
      "\u02d9m": "\u1e41",
      "\u02c7n": "\u0148",
      "\u00b4n": "\u0144",
      "\u00b8n": "\u0146",
      "\u02d9n": "\u1e45",
      "\u02c7o": "\u01d2",
      "\u00a8o": "\u00f6",
      "\u00b4o": "\u00f3",
      "\u02d9o": "\u022f",
      "\u02d8o": "\u014f",
      "\u02dbo": "\u01eb",
      "\u02ddo": "\u0151",
      "\\^o": "\u00f4",
      "\u00b4p": "\u1e55",
      "\u02d9p": "\u1e57",
      "\u02c7r": "\u0159",
      "\u00b4r": "\u0155",
      "\u00b8r": "\u0157",
      "\u02d9r": "\u1e59",
      "\u02c7s": "\u0161",
      "\u00b4s": "\u015b",
      "\u00b8s": "\u015f",
      "\u02d9s": "\u1e61",
      "\\^s": "\u015d",
      "\u02c7t": "\u0165",
      "\u00a8t": "\u1e97",
      "\u00b8t": "\u0163",
      "\u02d9t": "\u1e6b",
      "\u02c7u": "\u01d4",
      "\u00a8u": "\u00fc",
      "\u00b0u": "\u016f",
      "\u00b4u": "\u00fa",
      "\u02d8u": "\u016d",
      "\u02dbu": "\u0173",
      "\u02ddu": "\u0171",
      "\\^u": "\u00fb",
      "\u00a8w": "\u1e85",
      "\u00b0w": "\u1e98",
      "\u00b4w": "\u1e83",
      "\u02d9w": "\u1e87",
      "\\^w": "\u0175",
      "\u00a8x": "\u1e8d",
      "\u02d9x": "\u1e8b",
      "\u00a8y": "\u00ff",
      "\u00b0y": "\u1e99",
      "\u00b4y": "\u00fd",
      "\u02d9y": "\u1e8f",
      "\\^y": "\u0177",
      "\u02c7z": "\u017e",
      "\u00b4z": "\u017a",
      "\u02d9z": "\u017c",
      "\\^z": "\u1e91",
      "\u00b4\u00c7": "\u1e08",
      "\u00b4\u00e7": "\u1e09"
    }
  });
}).call(this);
