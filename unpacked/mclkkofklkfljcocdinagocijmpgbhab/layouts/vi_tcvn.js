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
      this.C = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.I = /[\u11a8-\u11c3]/g;
      this.H = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.F = /[\uac00-\ud7af]/g;
      this.G = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.u = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.m = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.o = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.v = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.I, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.H, function (c) {
        return a.C[c];
      });
    },
    l = this || self;
  n.prototype.B = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.A = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.D = function (a, b, c, d) {
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
      b = c.replace(a.F, k(a.B, a));
      c = k(a.D, a);
      b = q(a, p(a, b)).replace(a.u, c).replace(a.m, c).replace(a.o, c).replace(a.v, c).replace(a.G, k(a.A, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "vi_tcvn",
    title: "Ti\u1ebfng Vi\u1ec7t TCVN 6064",
    mappings: {
      "": { "": "`\u0103\u00e2\u00ea\u00f4\u0300\u0309\u0303\u0301\u0323\u0111-\u20abqwertyuiop\u01b0\u01a1\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~\u0102\u00c2\u00ca\u00d4\u0300\u0309\u0303\u0301\u0323\u0110_+QWERTYUIOP\u01af\u01a0|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`\u0102\u00c2\u00ca\u00d4\u0300\u0309\u0303\u0301\u0323\u0110-\u20abQWERTYUIOP\u01af\u01a0\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~\u0103\u00e2\u00ea\u00f4\u0300\u0309\u0303\u0301\u0323\u0111_+qwertyuiop\u01b0\u01a1|asdfghjkl:"zxcvbnm<>?' },
      c: { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "sc,cl,scl": { "": "~!@#$%^&*()_+QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" }
    },
    transform: {
      "A\u0300": "\u00c0",
      "A\u0301": "\u00c1",
      "A\u0303": "\u00c3",
      "E\u0300": "\u00c8",
      "E\u0301": "\u00c9",
      "I\u0300": "\u00cc",
      "I\u0301": "\u00cd",
      "N\u0303": "\u00d1",
      "O\u0300": "\u00d2",
      "O\u0301": "\u00d3",
      "O\u0303": "\u00d5",
      "U\u0300": "\u00d9",
      "U\u0301": "\u00da",
      "Y\u0301": "\u00dd",
      "a\u0300": "\u00e0",
      "a\u0301": "\u00e1",
      "a\u0303": "\u00e3",
      "e\u0300": "\u00e8",
      "e\u0301": "\u00e9",
      "i\u0300": "\u00ec",
      "i\u0301": "\u00ed",
      "n\u0303": "\u00f1",
      "o\u0300": "\u00f2",
      "o\u0301": "\u00f3",
      "o\u0303": "\u00f5",
      "u\u0300": "\u00f9",
      "u\u0301": "\u00fa",
      "y\u0301": "\u00fd",
      "C\u0301": "\u0106",
      "c\u0301": "\u0107",
      "I\u0303": "\u0128",
      "i\u0303": "\u0129",
      "L\u0301": "\u0139",
      "l\u0301": "\u013a",
      "N\u0301": "\u0143",
      "n\u0301": "\u0144",
      "R\u0301": "\u0154",
      "r\u0301": "\u0155",
      "S\u0301": "\u015a",
      "s\u0301": "\u015b",
      "U\u0303": "\u0168",
      "u\u0303": "\u0169",
      "Z\u0301": "\u0179",
      "z\u0301": "\u017a",
      "\u00dc\u001d\u0301": "\u01d7",
      "\u00fc\u001d\u0301": "\u01d8",
      "\u00dc\u001d\u0300": "\u01db",
      "\u00fc\u001d\u0300": "\u01dc",
      "G\u0301": "\u01f4",
      "g\u0301": "\u01f5",
      "N\u0300": "\u01f8",
      "n\u0300": "\u01f9",
      "\u00c5\u001d\u0301": "\u01fa",
      "\u00e5\u001d\u0301": "\u01fb",
      "\u00c6\u001d\u0301": "\u01fc",
      "\u00e6\u001d\u0301": "\u01fd",
      "\u00d8\u001d\u0301": "\u01fe",
      "\u00f8\u001d\u0301": "\u01ff",
      "B\u0323": "\u1e04",
      "b\u0323": "\u1e05",
      "\u00c7\u001d\u0301": "\u1e08",
      "\u00e7\u001d\u0301": "\u1e09",
      "D\u0323": "\u1e0c",
      "d\u0323": "\u1e0d",
      "\u0112\u001d\u0300": "\u1e14",
      "\u0113\u001d\u0300": "\u1e15",
      "\u0112\u001d\u0301": "\u1e16",
      "\u0113\u001d\u0301": "\u1e17",
      "H\u0323": "\u1e24",
      "h\u0323": "\u1e25",
      "\u00cf\u001d\u0301": "\u1e2e",
      "\u00ef\u001d\u0301": "\u1e2f",
      "K\u0301": "\u1e30",
      "k\u0301": "\u1e31",
      "K\u0323": "\u1e32",
      "k\u0323": "\u1e33",
      "L\u0323": "\u1e36",
      "l\u0323": "\u1e37",
      "M\u0301": "\u1e3e",
      "m\u0301": "\u1e3f",
      "M\u0323": "\u1e42",
      "m\u0323": "\u1e43",
      "N\u0323": "\u1e46",
      "n\u0323": "\u1e47",
      "\u00d5\u001d\u0301": "\u1e4c",
      "\u00f5\u001d\u0301": "\u1e4d",
      "\u014c\u001d\u0300": "\u1e50",
      "\u014d\u001d\u0300": "\u1e51",
      "\u014c\u001d\u0301": "\u1e52",
      "\u014d\u001d\u0301": "\u1e53",
      "P\u0301": "\u1e54",
      "p\u0301": "\u1e55",
      "R\u0323": "\u1e5a",
      "r\u0323": "\u1e5b",
      "S\u0323": "\u1e62",
      "s\u0323": "\u1e63",
      "T\u0323": "\u1e6c",
      "t\u0323": "\u1e6d",
      "\u0168\u001d\u0301": "\u1e78",
      "\u0169\u001d\u0301": "\u1e79",
      "V\u0303": "\u1e7c",
      "v\u0303": "\u1e7d",
      "V\u0323": "\u1e7e",
      "v\u0323": "\u1e7f",
      "W\u0300": "\u1e80",
      "w\u0300": "\u1e81",
      "W\u0301": "\u1e82",
      "w\u0301": "\u1e83",
      "W\u0323": "\u1e88",
      "w\u0323": "\u1e89",
      "Z\u0323": "\u1e92",
      "z\u0323": "\u1e93",
      "A\u0323": "\u1ea0",
      "a\u0323": "\u1ea1",
      "A\u0309": "\u1ea2",
      "a\u0309": "\u1ea3",
      "\u00c2\u0301": "\u1ea4",
      "\u00e2\u0301": "\u1ea5",
      "\u00c2\u0300": "\u1ea6",
      "\u00e2\u0300": "\u1ea7",
      "\u00c2\u0309": "\u1ea8",
      "\u00e2\u0309": "\u1ea9",
      "\u00c2\u0303": "\u1eaa",
      "\u00e2\u0303": "\u1eab",
      "\u0102\u0301": "\u1eae",
      "\u0103\u0301": "\u1eaf",
      "\u0102\u0300": "\u1eb0",
      "\u0103\u0300": "\u1eb1",
      "\u0102\u0309": "\u1eb2",
      "\u0103\u0309": "\u1eb3",
      "\u0102\u0303": "\u1eb4",
      "\u0103\u0303": "\u1eb5",
      "E\u0323": "\u1eb8",
      "e\u0323": "\u1eb9",
      "E\u0309": "\u1eba",
      "e\u0309": "\u1ebb",
      "E\u0303": "\u1ebc",
      "e\u0303": "\u1ebd",
      "\u00ca\u0301": "\u1ebe",
      "\u00ea\u0301": "\u1ebf",
      "\u00ca\u0300": "\u1ec0",
      "\u00ea\u0300": "\u1ec1",
      "\u00ca\u0309": "\u1ec2",
      "\u00ea\u0309": "\u1ec3",
      "\u00ca\u0303": "\u1ec4",
      "\u00ea\u0303": "\u1ec5",
      "I\u0309": "\u1ec8",
      "i\u0309": "\u1ec9",
      "I\u0323": "\u1eca",
      "i\u0323": "\u1ecb",
      "O\u0323": "\u1ecc",
      "o\u0323": "\u1ecd",
      "O\u0309": "\u1ece",
      "o\u0309": "\u1ecf",
      "\u00d4\u0301": "\u1ed0",
      "\u00f4\u0301": "\u1ed1",
      "\u00d4\u0300": "\u1ed2",
      "\u00f4\u0300": "\u1ed3",
      "\u00d4\u0309": "\u1ed4",
      "\u00f4\u0309": "\u1ed5",
      "\u00d4\u0303": "\u1ed6",
      "\u00f4\u0303": "\u1ed7",
      "\u01a0\u0301": "\u1eda",
      "\u01a1\u0301": "\u1edb",
      "\u01a0\u0300": "\u1edc",
      "\u01a1\u0300": "\u1edd",
      "\u01a0\u0309": "\u1ede",
      "\u01a1\u0309": "\u1edf",
      "\u01a0\u0303": "\u1ee0",
      "\u01a1\u0303": "\u1ee1",
      "\u01a0\u0323": "\u1ee2",
      "\u01a1\u0323": "\u1ee3",
      "U\u0323": "\u1ee4",
      "u\u0323": "\u1ee5",
      "U\u0309": "\u1ee6",
      "u\u0309": "\u1ee7",
      "\u01af\u0301": "\u1ee8",
      "\u01b0\u0301": "\u1ee9",
      "\u01af\u0300": "\u1eea",
      "\u01b0\u0300": "\u1eeb",
      "\u01af\u0309": "\u1eec",
      "\u01b0\u0309": "\u1eed",
      "\u01af\u0303": "\u1eee",
      "\u01b0\u0303": "\u1eef",
      "\u01af\u0323": "\u1ef0",
      "\u01b0\u0323": "\u1ef1",
      "Y\u0300": "\u1ef2",
      "y\u0300": "\u1ef3",
      "Y\u0323": "\u1ef4",
      "y\u0323": "\u1ef5",
      "Y\u0309": "\u1ef6",
      "y\u0309": "\u1ef7",
      "Y\u0303": "\u1ef8",
      "y\u0303": "\u1ef9"
    }
  });
}).call(this);
