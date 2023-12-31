(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var f = "$1A$3",
    g = "$1A$3$4",
    h = "$1E$3",
    k = "$1E$3$4",
    l = "$1I$3",
    m = "$1I$3$4",
    n = "$1O$3",
    p = "$1O$3$4",
    q = "$1U$3",
    r = "$1U$3$4",
    t = "$1Y$3",
    u = "$1Y$3$4",
    v = "$1a$3",
    w = "$1a$3$4",
    x = "$1e$3",
    y = "$1e$3$4",
    z = "$1i$3",
    A = "$1i$3$4",
    B = "$1o$3",
    C = "$1o$3$4",
    D = "$1u$3",
    E = "$1u$3$4",
    F = "$1y$3",
    G = "$1y$3$4",
    H = "$1\u00c2$3",
    I = "$1\u00c2$3$4",
    J = "$1\u00ca$3",
    K = "$1\u00ca$3$4",
    L = "$1\u00d4$3",
    M = "$1\u00d4$3$4",
    N = "$1\u00e2$3",
    O = "$1\u00e2$3$4",
    P = "$1\u00ea$3",
    Q = "$1\u00ea$3$4",
    R = "$1\u00f4$3",
    S = "$1\u00f4$3$4",
    T = "$1\u0102$3",
    U = "$1\u0102$3$4",
    V = "$1\u0103$3",
    W = "$1\u0103$3$4",
    X = "$1\u01a0$3",
    Y = "$1\u01a0$3$4",
    Z = "$1\u01a1$3",
    aa = "$1\u01a1$3$4",
    ba = "$1\u01af$3",
    ca = "$1\u01af$3$4",
    da = "$1\u01b0$3",
    ea = "$1\u01b0$3$4",
    fa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ha = function (a, b, c) {
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
    ja = function (a, b, c) {
      ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ha;
      return ja.apply(null, arguments);
    },
    la = function (a) {
      var b = ["google", "elements", "keyboard", "hangulTransform"],
        c = ka;
      b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
      for (var d; b.length && (d = b.shift()); )
        b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
    },
    ma = function () {
      this.g =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.i = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.i[this.g[a]] = String.fromCharCode(4520 + a);
      this.u = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.D = /[\u11a8-\u11c3]/g;
      this.C = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.A = /[\uac00-\ud7af]/g;
      this.B = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.F = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.G = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.m = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
    na = function (a, b) {
      return b.replace(a.D, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    oa = function (a, b) {
      return b.replace(a.C, function (c) {
        return a.u[c];
      });
    },
    ka = this || self;
  ma.prototype.s = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  ma.prototype.o = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  ma.prototype.v = function (a, b, c, d) {
    return b + this.i[c] + d;
  };
  (function () {
    var a = new ma();
    la(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var ia = a.j[e];
        c += ia ? ia : e;
      }
      b = c.replace(a.A, ja(a.s, a));
      c = ja(a.v, a);
      b = oa(a, na(a, b)).replace(a.l, c).replace(a.F, c).replace(a.G, c).replace(a.m, c).replace(a.B, ja(a.o, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (ia = a.h[e]), (c += ia ? ia : e);
      return c;
    });
  })();
  new ma();
  google.elements.keyboard.loadme({
    id: "vi_telex",
    title: "Ti\u1ebfng Vi\u1ec7t Telex",
    mappings: {
      ",c": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "s,sc": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      "l,cl": { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      "sl,scl": { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      "\u00f9\u001d?o[oO]": "u\u1ed3",
      "\u00d9\u001d?O[oO]": "U\u1ed2",
      "\u1eeb\u001d?o[wW]": "\u01b0\u1edd",
      "\u1eea\u001d?O[wW]": "\u01af\u1edc",
      "\u00fa\u001d?o[oO]": "u\u1ed1",
      "\u00da\u001d?O[oO]": "U\u1ed0",
      "\u1ee9\u001d?o[wW]": "\u01b0\u1edb",
      "\u1ee8\u001d?O[wW]": "\u01af\u1eda",
      "\u1ee7\u001d?o[oO]": "u\u1ed5",
      "\u1ee6\u001d?O[oO]": "U\u1ed4",
      "\u1eed\u001d?o[wW]": "\u01b0\u1edf",
      "\u1eec\u001d?O[wW]": "\u01af\u1ede",
      "\u0169\u001d?o[oO]": "u\u1ed7",
      "\u0168\u001d?O[oO]": "U\u1ed6",
      "\u1eef\u001d?o[wW]": "\u01b0\u1ee1",
      "\u1eee\u001d?O[wW]": "\u01af\u1ee0",
      "\u1ee5\u001d?o[oO]": "u\u1ed9",
      "\u1ee4\u001d?O[oO]": "U\u1ed8",
      "\u1ef1\u001d?o[wW]": "\u01b0\u1ee3",
      "\u1ef0\u001d?O[wW]": "\u01af\u1ee2",
      "\u00f2\u001d?a": "o\u00e0",
      "\u00f3\u001d?a": "o\u00e1",
      "\u1ecf\u001d?a": "o\u1ea3",
      "\u00f5\u001d?a": "o\u00e3",
      "\u1ecd\u001d?a": "o\u1ea1",
      "\u00d2\u001d?a": "O\u00e0",
      "\u00d3\u001d?a": "O\u00e1",
      "\u1ece\u001d?a": "O\u1ea3",
      "\u00d5\u001d?a": "O\u00e3",
      "\u1ecc\u001d?a": "O\u1ea1",
      "\u00f2\u001d?e": "o\u00e8",
      "\u00f3\u001d?e": "o\u00e9",
      "\u1ecf\u001d?e": "o\u1ebb",
      "\u00f5\u001d?e": "o\u1ebd",
      "\u1ecd\u001d?e": "o\u1eb9",
      "\u00d2\u001d?e": "O\u00e8",
      "\u00d3\u001d?e": "O\u00e9",
      "\u1ece\u001d?e": "O\u1ebb",
      "\u00d5\u001d?e": "O\u1ebd",
      "\u1ecc\u001d?e": "O\u1eb9",
      "\u00f9\u001d?y": "u\u1ef3",
      "\u00fa\u001d?y": "u\u00fd",
      "\u1ee7\u001d?y": "u\u1ef7",
      "\u0169\u001d?y": "u\u1ef9",
      "\u1ee5\u001d?y": "u\u1ef5",
      "\u00d9\u001d?y": "U\u1ef3",
      "\u00da\u001d?y": "U\u00fd",
      "\u1ee6\u001d?y": "U\u1ef7",
      "\u0168\u001d?y": "U\u1ef9",
      "\u1ee4\u001d?y": "U\u1ef5",
      "\u00f2\u001d?A": "o\u00c0",
      "\u00f3\u001d?A": "o\u00c1",
      "\u1ecf\u001d?A": "o\u1ea2",
      "\u00f5\u001d?A": "o\u00c3",
      "\u1ecd\u001d?A": "o\u1ea0",
      "\u00d2\u001d?A": "O\u00c0",
      "\u00d3\u001d?A": "O\u00c1",
      "\u1ece\u001d?A": "O\u1ea2",
      "\u00d5\u001d?A": "O\u00c3",
      "\u1ecc\u001d?A": "O\u1ea0",
      "\u00f2\u001d?E": "o\u00c8",
      "\u00f3\u001d?E": "o\u00c9",
      "\u1ecf\u001d?E": "o\u1eba",
      "\u00f5\u001d?E": "o\u1ebc",
      "\u1ecd\u001d?E": "o\u1eb8",
      "\u00d2\u001d?E": "O\u00c8",
      "\u00d3\u001d?E": "O\u00c9",
      "\u1ece\u001d?E": "O\u1eba",
      "\u00d5\u001d?E": "O\u1ebc",
      "\u1ecc\u001d?E": "O\u1eb8",
      "\u00f9\u001d?Y": "u\u1ef2",
      "\u00fa\u001d?Y": "u\u00dd",
      "\u1ee7\u001d?Y": "u\u1ef6",
      "\u0169\u001d?Y": "u\u1ef8",
      "\u1ee5\u001d?Y": "u\u1ef4",
      "\u00d9\u001d?Y": "U\u1ef2",
      "\u00da\u001d?Y": "U\u00dd",
      "\u1ee6\u001d?Y": "U\u1ef6",
      "\u0168\u001d?Y": "U\u1ef8",
      "\u1ee4\u001d?Y": "U\u1ef4",
      "(\u0103\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u00e2$2",
      "(\u1eb1\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea7$2",
      "(\u1eaf\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea5$2",
      "(\u1eb3\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea9$2",
      "(\u1eb5\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1eab$2",
      "(\u1eb7\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ead$2",
      "(\u00e2\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u0103$2",
      "(\u1ea7\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb1$2",
      "(\u1ea5\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eaf$2",
      "(\u1ea9\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb3$2",
      "(\u1eab\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb5$2",
      "(\u1ead\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb7$2",
      "(\u01a1\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u00f4$2",
      "(\u1edd\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed3$2",
      "(\u1edb\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed1$2",
      "(\u1edf\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed5$2",
      "(\u1ee1\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed7$2",
      "(\u1ee3\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed9$2",
      "(\u00f4\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u01a1$2",
      "(\u1ed3\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1edd$2",
      "(\u1ed1\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1edb$2",
      "(\u1ed5\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1edf$2",
      "(\u1ed7\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1ee1$2",
      "(\u1ed9\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1ee3$2",
      "(\u0102\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u00c2$2",
      "(\u1eb0\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea6$2",
      "(\u1eae\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea4$2",
      "(\u1eb2\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1ea8$2",
      "(\u1eb4\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1eaa$2",
      "(\u1eb6\u001d?)(\\S{1,2})?(\u001d?[aA])": "\u1eac$2",
      "(\u00c2\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u0102$2",
      "(\u1ea6\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb0$2",
      "(\u1ea4\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eae$2",
      "(\u1ea8\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb2$2",
      "(\u1eaa\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb4$2",
      "(\u1eac\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eb6$2",
      "(\u01a0\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u00d4$2",
      "(\u1edc\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed2$2",
      "(\u1eda\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed0$2",
      "(\u1ede\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed4$2",
      "(\u1ee0\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed6$2",
      "(\u1ee2\u001d?)(\\S{1,2})?(\u001d?[oO])": "\u1ed8$2",
      "(\u00d4\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u01a0$2",
      "(\u1ed2\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1edc$2",
      "(\u1ed0\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1eda$2",
      "(\u1ed4\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1ede$2",
      "(\u1ed6\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1ee0$2",
      "(\u1ed8\u001d?)(\\S{1,2})?(\u001d?[wW])": "\u1ee2$2",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?a([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u00e2$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00e0([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea7$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00e1([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea5$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ea3([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea9$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00e3([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1eab$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ea1([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ead$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?e([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u00ea$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00e8([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec1$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00e9([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ebf$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ebb([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec3$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ebd([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec5$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1eb9([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec7$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?o([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u00f4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00f2([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed3$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00f3([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed1$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ecf([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed5$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00f5([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed7$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ecd([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed9$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?A([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u00c2$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00c0([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea6$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00c1([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ea2([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1ea8$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00c3([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1eaa$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ea0([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[aA]":
        "$1$2$3\u1eac$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?E([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u00ca$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00c8([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec0$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00c9([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ebe$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1eba([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec2$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ebc([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1eb8([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[eE]":
        "$1$2$3\u1ec6$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?O([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u00d4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00d2([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed2$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00d3([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed0$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ece([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u00d5([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed6$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?\u1ecc([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[oO]":
        "$1$2$3\u1ed8$4",
      "\u00e2([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "a$1$2",
      "\u1ea7([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00e0$1$2",
      "\u1ea5([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00e1$1$2",
      "\u1ea9([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u1ea3$1$2",
      "\u1eab([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00e3$1$2",
      "\u1ead([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u1ea1$1$2",
      "\u00ea([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "e$1$2",
      "\u1ec1([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u00e8$1$2",
      "\u1ebf([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u00e9$1$2",
      "\u1ec3([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1ebb$1$2",
      "\u1ec5([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1ebd$1$2",
      "\u1ec7([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1eb9$1$2",
      "\u00f4([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "o$1$2",
      "\u1ed3([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00f2$1$2",
      "\u1ed1([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00f3$1$2",
      "\u1ed5([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u1ecf$1$2",
      "\u1ed7([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00f5$1$2",
      "\u1ed9([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u1ecd$1$2",
      "\u00c2([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "A$1$2",
      "\u1ea6([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00c0$1$2",
      "\u1ea4([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00c1$1$2",
      "\u1ea8([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u1ea2$1$2",
      "\u1eaa([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u00c3$1$2",
      "\u1eac([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[aA])": "\u1ea0$1$2",
      "\u00ca([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "E$1$2",
      "\u1ec0([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u00c8$1$2",
      "\u1ebe([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u00c9$1$2",
      "\u1ec2([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1eba$1$2",
      "\u1ec4([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1ebc$1$2",
      "\u1ec6([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?(\u001d?[eE])": "\u1eb8$1$2",
      "\u00d4([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "O$1$2",
      "\u1ed2([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00d2$1$2",
      "\u1ed0([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00d3$1$2",
      "\u1ed4([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u1ece$1$2",
      "\u1ed6([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u00d5$1$2",
      "\u1ed8([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[oO])": "\u1ecc$1$2",
      "(^|\\s|-|_|\\/)(d)(\\S{0,4})\u001d?[dD]": "$1\u0111$3",
      "(^|\\s|-|_|\\/)(D)(\\S{0,4})\u001d?[dD]": "$1\u0110$3",
      "\u0111(\\S{0,4})(\u001d?[dD])": "d$1$2",
      "\u0110(\\S{0,4})(\u001d?[dD])": "D$1$2",
      "(u[oO])([a-zA-Z]{0,2})\u001d?[wW]": "\u01b0\u01a1$2",
      "(U[oO])([a-zA-Z]{0,2})\u001d?[wW]": "\u01af\u01a0$2",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?u([aA])\u001d?w":
        "$1$2$3\u01b0$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?U([aA])\u001d?W":
        "$1$2$3\u01af$4",
      "a([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u0103$1",
      "\u0103([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "a$1$2",
      "\u00e0([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb1$1",
      "\u00e1([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eaf$1",
      "\u1ea3([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb3$1",
      "\u00e3([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb5$1",
      "\u1ea1([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb7$1",
      "o([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u01a1$1",
      "\u01a1([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "o$1$2",
      "\u00f2([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1edd$1",
      "\u00f3([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1edb$1",
      "\u1ecf([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1edf$1",
      "\u00f5([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee1$1",
      "\u1ecd([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee3$1",
      "u([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u01b0$1",
      "\u01b0([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "u$1$2",
      "\u00f9([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eeb$1",
      "\u00fa([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee9$1",
      "\u1ee7([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eed$1",
      "\u0169([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eef$1",
      "\u1ee5([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ef1$1",
      "A([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u0102$1",
      "\u0102([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "A$1$2",
      "\u00c0([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb0$1",
      "\u00c1([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eae$1",
      "\u1ea2([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb2$1",
      "\u00c3([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb4$1",
      "\u1ea0([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eb6$1",
      "O([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u01a0$1",
      "\u01a0([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "O$1$2",
      "\u00d2([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1edc$1",
      "\u00d3([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eda$1",
      "\u1ece([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ede$1",
      "\u00d5([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee0$1",
      "\u1ecc([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee2$1",
      "U([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u01af$1",
      "\u01af([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?(\u001d?[wW])": "U$1$2",
      "\u00d9([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eea$1",
      "\u00da([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ee8$1",
      "\u1ee6([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eec$1",
      "\u0168([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1eee$1",
      "\u1ee4([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[wW]": "\u1ef0$1",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([a\u00e1\u1ea3\u00e3\u1ea1]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00e0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00e2\u1ea5\u1ea9\u1eab\u1ead]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ea7$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0103\u1eaf\u1eb3\u1eb5\u1eb7]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1eb1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([e\u00e9\u1ebb\u1ebd\u1eb9]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00e8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ea\u1ebf\u1ec3\u1ec5\u1ec7]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ec1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([i\u00ed\u1ec9\u0129\u1ecb]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2\u00ec$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([o\u00f3\u1ecf\u00f5\u1ecd]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00f2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00f4\u1ed1\u1ed5\u1ed7\u1ed9]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ed3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a1\u1edb\u1edf\u1ee1\u1ee3]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1edd$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([u\u00fa\u1ee7\u0169\u1ee5]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2\u00f9$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01b0\u1ee9\u1eed\u1eef\u1ef1]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1eeb$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([y\u00fd\u1ef7\u1ef9\u1ef5]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ef3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([A\u00c1\u1ea2\u00c3\u1ea0]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00c0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00c2\u1ea4\u1ea8\u1eaa\u1eac]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ea6$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0102\u1eae\u1eb2\u1eb4\u1eb6]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1eb0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([E\u00c9\u1eba\u1ebc\u1eb8]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00c8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ca\u1ebe\u1ec2\u1ec4\u1ec6]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ec0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([I\u00cd\u1ec8\u0128\u1eca]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2\u00cc$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([O\u00d3\u1ece\u00d5\u1ecc]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u00d2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00d4\u1ed0\u1ed4\u1ed6\u1ed8]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ed2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a0\u1eda\u1ede\u1ee0\u1ee2]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1edc$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([U\u00da\u1ee6\u0168\u1ee4]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2\u00d9$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01af\u1ee8\u1eec\u1eee\u1ef0]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1eea$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([Y\u00dd\u1ef6\u1ef8\u1ef4]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[fF]":
        "$1$2$3\u1ef2$5",
      "(\\S*)(\u00e0\u001d?)([a-zA-Z]*)(\u001d?[fF])": w,
      "(\\S*)(\u00e0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": v,
      "(\\S*)(\u1ea7\u001d?)([a-zA-Z]*)(\u001d?[fF])": O,
      "(\\S*)(\u1ea7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": N,
      "(\\S*)(\u1eb1\u001d?)([a-zA-Z]*)(\u001d?[fF])": W,
      "(\\S*)(\u1eb1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": V,
      "(\\S*)(\u00e8\u001d?)([a-zA-Z]*)(\u001d?[fF])": y,
      "(\\S*)(\u00e8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": x,
      "(\\S*)(\u1ec1\u001d?)([a-zA-Z]*)(\u001d?[fF])": Q,
      "(\\S*)(\u1ec1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": P,
      "(\\S*)(\u00ec\u001d?)([a-zA-Z]*)(\u001d?[fF])": A,
      "(\\S*)(\u00ec\u001d?)([a-zA-Z]*)(\u001d?[zZ])": z,
      "(\\S*)(\u00f2\u001d?)([a-zA-Z]*)(\u001d?[fF])": C,
      "(\\S*)(\u00f2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": B,
      "(\\S*)(\u1ed3\u001d?)([a-zA-Z]*)(\u001d?[fF])": S,
      "(\\S*)(\u1ed3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": R,
      "(\\S*)(\u1edd\u001d?)([a-zA-Z]*)(\u001d?[fF])": aa,
      "(\\S*)(\u1edd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": Z,
      "(\\S*)(\u00f9\u001d?)([a-zA-Z]*)(\u001d?[fF])": E,
      "(\\S*)(\u00f9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": D,
      "(\\S*)(\u1eeb\u001d?)([a-zA-Z]*)(\u001d?[fF])": ea,
      "(\\S*)(\u1eeb\u001d?)([a-zA-Z]*)(\u001d?[zZ])": da,
      "(\\S*)(\u1ef3\u001d?)([a-zA-Z]*)(\u001d?[fF])": G,
      "(\\S*)(\u1ef3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": F,
      "(\\S*)(\u00c0\u001d?)([a-zA-Z]*)(\u001d?[fF])": g,
      "(\\S*)(\u00c0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": f,
      "(\\S*)(\u1ea6\u001d?)([a-zA-Z]*)(\u001d?[fF])": I,
      "(\\S*)(\u1ea6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": H,
      "(\\S*)(\u1eb0\u001d?)([a-zA-Z]*)(\u001d?[fF])": U,
      "(\\S*)(\u1eb0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": T,
      "(\\S*)(\u00c8\u001d?)([a-zA-Z]*)(\u001d?[fF])": k,
      "(\\S*)(\u00c8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": h,
      "(\\S*)(\u1ec0\u001d?)([a-zA-Z]*)(\u001d?[fF])": K,
      "(\\S*)(\u1ec0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": J,
      "(\\S*)(\u00cc\u001d?)([a-zA-Z]*)(\u001d?[fF])": m,
      "(\\S*)(\u00cc\u001d?)([a-zA-Z]*)(\u001d?[zZ])": l,
      "(\\S*)(\u00d2\u001d?)([a-zA-Z]*)(\u001d?[fF])": p,
      "(\\S*)(\u00d2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": n,
      "(\\S*)(\u1ed2\u001d?)([a-zA-Z]*)(\u001d?[fF])": M,
      "(\\S*)(\u1ed2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": L,
      "(\\S*)(\u1edc\u001d?)([a-zA-Z]*)(\u001d?[fF])": Y,
      "(\\S*)(\u1edc\u001d?)([a-zA-Z]*)(\u001d?[zZ])": X,
      "(\\S*)(\u00d9\u001d?)([a-zA-Z]*)(\u001d?[fF])": r,
      "(\\S*)(\u00d9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": q,
      "(\\S*)(\u1eea\u001d?)([a-zA-Z]*)(\u001d?[fF])": ca,
      "(\\S*)(\u1eea\u001d?)([a-zA-Z]*)(\u001d?[zZ])": ba,
      "(\\S*)(\u1ef2\u001d?)([a-zA-Z]*)(\u001d?[fF])": u,
      "(\\S*)(\u1ef2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": t,
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([a\u00e0\u1ea3\u00e3\u1ea1]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00e1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00e2\u1ea7\u1ea9\u1eab\u1ead]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ea5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0103\u1eb1\u1eb3\u1eb5\u1eb7]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1eaf$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([e\u00e8\u1ebb\u1ebd\u1eb9]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00e9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ea\u1ec1\u1ec3\u1ec5\u1ec7]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ebf$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([i\u00ec\u1ec9\u0129\u1ecb]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2\u00ed$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([o\u00f2\u1ecf\u00f5\u1ecd]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00f3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00f4\u1ed3\u1ed5\u1ed7\u1ed9]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ed1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a1\u1edd\u1edf\u1ee1\u1ee3]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1edb$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([u\u00f9\u1ee7\u0169\u1ee5]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2\u00fa$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01b0\u1eeb\u1eed\u1eef\u1ef1]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ee9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([y\u1ef3\u1ef7\u1ef9\u1ef5]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00fd$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([A\u00c0\u1ea2\u00c3\u1ea0]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00c1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00c2\u1ea6\u1ea8\u1eaa\u1eac]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ea4$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0102\u1eb0\u1eb2\u1eb4\u1eb6]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1eae$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([E\u00c8\u1eba\u1ebc\u1eb8]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00c9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ca\u1ec0\u1ec2\u1ec4\u1ec6]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ebe$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([I\u00cc\u1ec8\u0128\u1eca]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2\u00cd$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([O\u00d2\u1ece\u00d5\u1ecc]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00d3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00d4\u1ed2\u1ed4\u1ed6\u1ed8]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ed0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a0\u1edc\u1ede\u1ee0\u1ee2]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1eda$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([U\u00d9\u1ee6\u0168\u1ee4]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2\u00da$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01af\u1eea\u1eec\u1eee\u1ef0]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u1ee8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([Y\u1ef2\u1ef6\u1ef8\u1ef4]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[sS]":
        "$1$2$3\u00dd$5",
      "(\\S*)(\u00e1\u001d?)([a-zA-Z]*)(\u001d?[sS])": w,
      "(\\S*)(\u00e1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": v,
      "(\\S*)(\u1ea5\u001d?)([a-zA-Z]*)(\u001d?[sS])": O,
      "(\\S*)(\u1ea5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": N,
      "(\\S*)(\u1eaf\u001d?)([a-zA-Z]*)(\u001d?[sS])": W,
      "(\\S*)(\u1eaf\u001d?)([a-zA-Z]*)(\u001d?[zZ])": V,
      "(\\S*)(\u00e9\u001d?)([a-zA-Z]*)(\u001d?[sS])": y,
      "(\\S*)(\u00e9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": x,
      "(\\S*)(\u1ebf\u001d?)([a-zA-Z]*)(\u001d?[sS])": Q,
      "(\\S*)(\u1ebf\u001d?)([a-zA-Z]*)(\u001d?[zZ])": P,
      "(\\S*)(\u00ed\u001d?)([a-zA-Z]*)(\u001d?[sS])": A,
      "(\\S*)(\u00ed\u001d?)([a-zA-Z]*)(\u001d?[zZ])": z,
      "(\\S*)(\u00f3\u001d?)([a-zA-Z]*)(\u001d?[sS])": C,
      "(\\S*)(\u00f3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": B,
      "(\\S*)(\u1ed1\u001d?)([a-zA-Z]*)(\u001d?[sS])": S,
      "(\\S*)(\u1ed1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": R,
      "(\\S*)(\u1edb\u001d?)([a-zA-Z]*)(\u001d?[sS])": aa,
      "(\\S*)(\u1edb\u001d?)([a-zA-Z]*)(\u001d?[zZ])": Z,
      "(\\S*)(\u00fa\u001d?)([a-zA-Z]*)(\u001d?[sS])": E,
      "(\\S*)(\u00fa\u001d?)([a-zA-Z]*)(\u001d?[zZ])": D,
      "(\\S*)(\u1ee9\u001d?)([a-zA-Z]*)(\u001d?[sS])": ea,
      "(\\S*)(\u1ee9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": da,
      "(\\S*)(\u00fd\u001d?)([a-zA-Z]*)(\u001d?[sS])": G,
      "(\\S*)(\u00fd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": F,
      "(\\S*)(\u00c1\u001d?)([a-zA-Z]*)(\u001d?[sS])": g,
      "(\\S*)(\u00c1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": f,
      "(\\S*)(\u1ea4\u001d?)([a-zA-Z]*)(\u001d?[sS])": I,
      "(\\S*)(\u1ea4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": H,
      "(\\S*)(\u1eae\u001d?)([a-zA-Z]*)(\u001d?[sS])": U,
      "(\\S*)(\u1eae\u001d?)([a-zA-Z]*)(\u001d?[zZ])": T,
      "(\\S*)(\u00c9\u001d?)([a-zA-Z]*)(\u001d?[sS])": k,
      "(\\S*)(\u00c9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": h,
      "(\\S*)(\u1ebe\u001d?)([a-zA-Z]*)(\u001d?[sS])": K,
      "(\\S*)(\u1ebe\u001d?)([a-zA-Z]*)(\u001d?[zZ])": J,
      "(\\S*)(\u00cd\u001d?)([a-zA-Z]*)(\u001d?[sS])": m,
      "(\\S*)(\u00cd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": l,
      "(\\S*)(\u00d3\u001d?)([a-zA-Z]*)(\u001d?[sS])": p,
      "(\\S*)(\u00d3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": n,
      "(\\S*)(\u1ed0\u001d?)([a-zA-Z]*)(\u001d?[sS])": M,
      "(\\S*)(\u1ed0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": L,
      "(\\S*)(\u1eda\u001d?)([a-zA-Z]*)(\u001d?[sS])": Y,
      "(\\S*)(\u1eda\u001d?)([a-zA-Z]*)(\u001d?[zZ])": X,
      "(\\S*)(\u00da\u001d?)([a-zA-Z]*)(\u001d?[sS])": r,
      "(\\S*)(\u00da\u001d?)([a-zA-Z]*)(\u001d?[zZ])": q,
      "(\\S*)(\u1ee8\u001d?)([a-zA-Z]*)(\u001d?[sS])": ca,
      "(\\S*)(\u1ee8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": ba,
      "(\\S*)(\u00dd\u001d?)([a-zA-Z]*)(\u001d?[sS])": u,
      "(\\S*)(\u00dd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": t,
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([a\u00e0\u00e1\u00e3\u1ea1]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ea3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00e2\u1ea7\u1ea5\u1eab\u1ead]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ea9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0103\u1eb1\u1eaf\u1eb5\u1eb7]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1eb3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([e\u00e8\u00e9\u1ebd\u1eb9]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ebb$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ea\u1ec1\u1ebf\u1ec5\u1ec7]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ec3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([i\u00ec\u00ed\u0129\u1ecb]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2\u1ec9$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([o\u00f2\u00f3\u00f5\u1ecd]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ecf$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00f4\u1ed3\u1ed1\u1ed7\u1ed9]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ed5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a1\u1edd\u1edb\u1ee1\u1ee3]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1edf$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([u\u00f9\u00fa\u0169\u1ee5]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2\u1ee7$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01b0\u1eeb\u1ee9\u1eef\u1ef1]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1eed$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([y\u1ef3\u00fd\u1ef9\u1ef5]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ef7$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([A\u00c0\u00c1\u00c3\u1ea0]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ea2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00c2\u1ea6\u1ea4\u1eaa\u1eac]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ea8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0102\u1eb0\u1eae\u1eb4\u1eb6]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1eb2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([E\u00c8\u00c9\u1ebc\u1eb8]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1eba$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ca\u1ec0\u1ebe\u1ec4\u1ec6]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ec2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([I\u00cc\u00cd\u0128\u1eca]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2\u1ec8$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([O\u00d2\u00d3\u00d5\u1ecc]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ece$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00d4\u1ed2\u1ed0\u1ed6\u1ed8]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ed4$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a0\u1edc\u1eda\u1ee0\u1ee2]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ede$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([U\u00d9\u00da\u0168\u1ee4]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2\u1ee6$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01af\u1eea\u1ee8\u1eee\u1ef0]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1eec$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([Y\u1ef2\u00dd\u1ef8\u1ef4]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[rR]":
        "$1$2$3\u1ef6$5",
      "(\\S*)(\u1ea3\u001d?)([a-zA-Z]*)(\u001d?[rR])": w,
      "(\\S*)(\u1ea3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": v,
      "(\\S*)(\u1ea9\u001d?)([a-zA-Z]*)(\u001d?[rR])": O,
      "(\\S*)(\u1ea9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": N,
      "(\\S*)(\u1eb3\u001d?)([a-zA-Z]*)(\u001d?[rR])": W,
      "(\\S*)(\u1eb3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": V,
      "(\\S*)(\u1ebb\u001d?)([a-zA-Z]*)(\u001d?[rR])": y,
      "(\\S*)(\u1ebb\u001d?)([a-zA-Z]*)(\u001d?[zZ])": x,
      "(\\S*)(\u1ec3\u001d?)([a-zA-Z]*)(\u001d?[rR])": Q,
      "(\\S*)(\u1ec3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": P,
      "(\\S*)(\u1ec9\u001d?)([a-zA-Z]*)(\u001d?[rR])": A,
      "(\\S*)(\u1ec9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": z,
      "(\\S*)(\u1ecf\u001d?)([a-zA-Z]*)(\u001d?[rR])": C,
      "(\\S*)(\u1ecf\u001d?)([a-zA-Z]*)(\u001d?[zZ])": B,
      "(\\S*)(\u1ed5\u001d?)([a-zA-Z]*)(\u001d?[rR])": S,
      "(\\S*)(\u1ed5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": R,
      "(\\S*)(\u1edf\u001d?)([a-zA-Z]*)(\u001d?[rR])": aa,
      "(\\S*)(\u1edf\u001d?)([a-zA-Z]*)(\u001d?[zZ])": Z,
      "(\\S*)(\u1ee7\u001d?)([a-zA-Z]*)(\u001d?[rR])": E,
      "(\\S*)(\u1ee7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": D,
      "(\\S*)(\u1eed\u001d?)([a-zA-Z]*)(\u001d?[rR])": ea,
      "(\\S*)(\u1eed\u001d?)([a-zA-Z]*)(\u001d?[zZ])": da,
      "(\\S*)(\u1ef7\u001d?)([a-zA-Z]*)(\u001d?[rR])": G,
      "(\\S*)(\u1ef7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": F,
      "(\\S*)(\u1ea2\u001d?)([a-zA-Z]*)(\u001d?[rR])": g,
      "(\\S*)(\u1ea2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": f,
      "(\\S*)(\u1ea8\u001d?)([a-zA-Z]*)(\u001d?[rR])": I,
      "(\\S*)(\u1ea8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": H,
      "(\\S*)(\u1eb2\u001d?)([a-zA-Z]*)(\u001d?[rR])": U,
      "(\\S*)(\u1eb2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": T,
      "(\\S*)(\u1eba\u001d?)([a-zA-Z]*)(\u001d?[rR])": k,
      "(\\S*)(\u1eba\u001d?)([a-zA-Z]*)(\u001d?[zZ])": h,
      "(\\S*)(\u1ec2\u001d?)([a-zA-Z]*)(\u001d?[rR])": K,
      "(\\S*)(\u1ec2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": J,
      "(\\S*)(\u1ec8\u001d?)([a-zA-Z]*)(\u001d?[rR])": m,
      "(\\S*)(\u1ec8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": l,
      "(\\S*)(\u1ece\u001d?)([a-zA-Z]*)(\u001d?[rR])": p,
      "(\\S*)(\u1ece\u001d?)([a-zA-Z]*)(\u001d?[zZ])": n,
      "(\\S*)(\u1ed4\u001d?)([a-zA-Z]*)(\u001d?[rR])": M,
      "(\\S*)(\u1ed4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": L,
      "(\\S*)(\u1ede\u001d?)([a-zA-Z]*)(\u001d?[rR])": Y,
      "(\\S*)(\u1ede\u001d?)([a-zA-Z]*)(\u001d?[zZ])": X,
      "(\\S*)(\u1ee6\u001d?)([a-zA-Z]*)(\u001d?[rR])": r,
      "(\\S*)(\u1ee6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": q,
      "(\\S*)(\u1eec\u001d?)([a-zA-Z]*)(\u001d?[rR])": ca,
      "(\\S*)(\u1eec\u001d?)([a-zA-Z]*)(\u001d?[zZ])": ba,
      "(\\S*)(\u1ef6\u001d?)([a-zA-Z]*)(\u001d?[rR])": u,
      "(\\S*)(\u1ef6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": t,
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([a\u00e0\u00e1\u1ea3\u1ea1]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u00e3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00e2\u1ea7\u1ea5\u1ea9\u1ead]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eab$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0103\u1eb1\u1eaf\u1eb3\u1eb7]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eb5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([e\u00e8\u00e9\u1ebb\u1eb9]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ebd$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ea\u1ec1\u1ebf\u1ec3\u1ec7]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ec5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([i\u00ec\u00ed\u1ec9\u1ecb]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2\u0129$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([o\u00f2\u00f3\u1ecf\u1ecd]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u00f5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00f4\u1ed3\u1ed1\u1ed5\u1ed9]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ed7$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a1\u1edd\u1edb\u1edf\u1ee3]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ee1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([u\u00f9\u00fa\u1ee7\u1ee5]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2\u0169$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01b0\u1eeb\u1ee9\u1eed\u1ef1]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eef$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([y\u1ef3\u00fd\u1ef7\u1ef5]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ef9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([A\u00c0\u00c1\u1ea2\u1ea0]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u00c3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00c2\u1ea6\u1ea4\u1ea8\u1eac]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eaa$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0102\u1eb0\u1eae\u1eb2\u1eb6]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eb4$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([E\u00c8\u00c9\u1eba\u1eb8]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ebc$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ca\u1ec0\u1ebe\u1ec2\u1ec6]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ec4$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([I\u00cc\u00cd\u1ec8\u1eca]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2\u0128$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([O\u00d2\u00d3\u1ece\u1ecc]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u00d5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00d4\u1ed2\u1ed0\u1ed4\u1ed8]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ed6$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a0\u1edc\u1eda\u1ede\u1ee2]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ee0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([U\u00d9\u00da\u1ee6\u1ee4]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2\u0168$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01af\u1eea\u1ee8\u1eec\u1ef0]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1eee$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([Y\u1ef2\u00dd\u1ef6\u1ef4]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[xX]":
        "$1$2$3\u1ef8$5",
      "(\\S*)(\u00e3\u001d?)([a-zA-Z]*)(\u001d?[xX])": w,
      "(\\S*)(\u00e3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": v,
      "(\\S*)(\u1eab\u001d?)([a-zA-Z]*)(\u001d?[xX])": O,
      "(\\S*)(\u1eab\u001d?)([a-zA-Z]*)(\u001d?[zZ])": N,
      "(\\S*)(\u1eb5\u001d?)([a-zA-Z]*)(\u001d?[xX])": W,
      "(\\S*)(\u1eb5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": V,
      "(\\S*)(\u1ebd\u001d?)([a-zA-Z]*)(\u001d?[xX])": y,
      "(\\S*)(\u1ebd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": x,
      "(\\S*)(\u1ec5\u001d?)([a-zA-Z]*)(\u001d?[xX])": Q,
      "(\\S*)(\u1ec5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": P,
      "(\\S*)(\u0129\u001d?)([a-zA-Z]*)(\u001d?[xX])": A,
      "(\\S*)(\u0129\u001d?)([a-zA-Z]*)(\u001d?[zZ])": z,
      "(\\S*)(\u00f5\u001d?)([a-zA-Z]*)(\u001d?[xX])": C,
      "(\\S*)(\u00f5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": B,
      "(\\S*)(\u1ed7\u001d?)([a-zA-Z]*)(\u001d?[xX])": S,
      "(\\S*)(\u1ed7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": R,
      "(\\S*)(\u1ee1\u001d?)([a-zA-Z]*)(\u001d?[xX])": aa,
      "(\\S*)(\u1ee1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": Z,
      "(\\S*)(\u0169\u001d?)([a-zA-Z]*)(\u001d?[xX])": E,
      "(\\S*)(\u0169\u001d?)([a-zA-Z]*)(\u001d?[zZ])": D,
      "(\\S*)(\u1eef\u001d?)([a-zA-Z]*)(\u001d?[xX])": ea,
      "(\\S*)(\u1eef\u001d?)([a-zA-Z]*)(\u001d?[zZ])": da,
      "(\\S*)(\u1ef9\u001d?)([a-zA-Z]*)(\u001d?[xX])": G,
      "(\\S*)(\u1ef9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": F,
      "(\\S*)(\u00c3\u001d?)([a-zA-Z]*)(\u001d?[xX])": g,
      "(\\S*)(\u00c3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": f,
      "(\\S*)(\u1eaa\u001d?)([a-zA-Z]*)(\u001d?[xX])": I,
      "(\\S*)(\u1eaa\u001d?)([a-zA-Z]*)(\u001d?[zZ])": H,
      "(\\S*)(\u1eb4\u001d?)([a-zA-Z]*)(\u001d?[xX])": U,
      "(\\S*)(\u1eb4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": T,
      "(\\S*)(\u1ebc\u001d?)([a-zA-Z]*)(\u001d?[xX])": k,
      "(\\S*)(\u1ebc\u001d?)([a-zA-Z]*)(\u001d?[zZ])": h,
      "(\\S*)(\u1ec4\u001d?)([a-zA-Z]*)(\u001d?[xX])": K,
      "(\\S*)(\u1ec4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": J,
      "(\\S*)(\u0128\u001d?)([a-zA-Z]*)(\u001d?[xX])": m,
      "(\\S*)(\u0128\u001d?)([a-zA-Z]*)(\u001d?[zZ])": l,
      "(\\S*)(\u00d5\u001d?)([a-zA-Z]*)(\u001d?[xX])": p,
      "(\\S*)(\u00d5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": n,
      "(\\S*)(\u1ed6\u001d?)([a-zA-Z]*)(\u001d?[xX])": M,
      "(\\S*)(\u1ed6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": L,
      "(\\S*)(\u1ee0\u001d?)([a-zA-Z]*)(\u001d?[xX])": Y,
      "(\\S*)(\u1ee0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": X,
      "(\\S*)(\u0168\u001d?)([a-zA-Z]*)(\u001d?[xX])": r,
      "(\\S*)(\u0168\u001d?)([a-zA-Z]*)(\u001d?[zZ])": q,
      "(\\S*)(\u1eee\u001d?)([a-zA-Z]*)(\u001d?[xX])": ca,
      "(\\S*)(\u1eee\u001d?)([a-zA-Z]*)(\u001d?[zZ])": ba,
      "(\\S*)(\u1ef8\u001d?)([a-zA-Z]*)(\u001d?[xX])": u,
      "(\\S*)(\u1ef8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": t,
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([a\u00e0\u00e1\u1ea3\u00e3]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ea1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00e2\u1ea7\u1ea5\u1ea9\u1eab]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ead$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0103\u1eb1\u1eaf\u1eb3\u1eb5]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1eb7$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([e\u00e8\u00e9\u1ebb\u1ebd]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1eb9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ea\u1ec1\u1ebf\u1ec3\u1ec5]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ec7$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([i\u00ec\u00ed\u1ec9\u0129]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2\u1ecb$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([o\u00f2\u00f3\u1ecf\u00f5]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ecd$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00f4\u1ed3\u1ed1\u1ed5\u1ed7]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ed9$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a1\u1edd\u1edb\u1edf\u1ee1]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ee3$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([u\u00f9\u00fa\u1ee7\u0169]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2\u1ee5$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01b0\u1eeb\u1ee9\u1eed\u1eef]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ef1$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([y\u1ef3\u00fd\u1ef7\u1ef9]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ef5$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([A\u00c0\u00c1\u1ea2\u00c3]\u001d?)([iouycgmnptIOUYCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ea0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00c2\u1ea6\u1ea4\u1ea8\u1eaa]\u001d?)([uycgmnptUYCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1eac$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([\u0102\u1eb0\u1eae\u1eb2\u1eb4]\u001d?)([uycgkmnptUYCGKMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1eb6$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([E\u00c8\u00c9\u1eba\u1ebc]\u001d?)([ocgmnptOCGMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1eb8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iuyIUY]|[uU][yY])?([\u00ca\u1ec0\u1ebe\u1ec2\u1ec4]\u001d?)([ucgkmnptUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ec6$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([I\u00cc\u00cd\u1ec8\u0128]\u001d?)([aucgkmnptAUCGKMNPT]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2\u1eca$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([oO])?([O\u00d2\u00d3\u1ece\u00d5]\u001d?)([aeicgmnptAEICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ecc$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([\u00d4\u1ed2\u1ed0\u1ed4\u1ed6]\u001d?)([icgmnptICGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ed8$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([\u01b0\u01af]\u001d?)?([\u01a0\u1edc\u1eda\u1ede\u1ee0]\u001d?)([icgmnptuICGMNPTU]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ee2$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([U\u00d9\u00da\u1ee6\u0168]\u001d?)([aicgkmnptyAICGKMNPTY]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2\u1ee4$4",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([iI])?([\u01af\u1eea\u1ee8\u1eec\u1eee]\u001d?)([aiucgmnptAIUCGMNPT]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ef0$5",
      "(^|\\s|-|_|\\/)([bcd\u0111ghklmnprstvxyzBCD\u0110GHKLMNPRSTVXYZ]|[cC][hH]|[gG][iI]|[nN][hH]|[kK][hH]|[tT][hH]|[qQ][uU]|[pP][hH]|[nN][gG]|[gG][hH]|[tT][rR]|[nN][gG][hH]|[\u0111\u0110])?\u001d?([uU])?([Y\u1ef2\u00dd\u1ef6\u1ef8]\u001d?)([acgmnptuACGMNPTU]|[nN][hH]|[nN][gG]|[cC][hH])?\u001d?[jJ]":
        "$1$2$3\u1ef4$5",
      "(\\S*)(\u1ea1\u001d?)([a-zA-Z]*)(\u001d?[jJ])": w,
      "(\\S*)(\u1ea1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": v,
      "(\\S*)(\u1ead\u001d?)([a-zA-Z]*)(\u001d?[jJ])": O,
      "(\\S*)(\u1ead\u001d?)([a-zA-Z]*)(\u001d?[zZ])": N,
      "(\\S*)(\u1eb7\u001d?)([a-zA-Z]*)(\u001d?[jJ])": W,
      "(\\S*)(\u1eb7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": V,
      "(\\S*)(\u1eb9\u001d?)([a-zA-Z]*)(\u001d?[jJ])": y,
      "(\\S*)(\u1eb9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": x,
      "(\\S*)(\u1ec7\u001d?)([a-zA-Z]*)(\u001d?[jJ])": Q,
      "(\\S*)(\u1ec7\u001d?)([a-zA-Z]*)(\u001d?[zZ])": P,
      "(\\S*)(\u1ecb\u001d?)([a-zA-Z]*)(\u001d?[jJ])": A,
      "(\\S*)(\u1ecb\u001d?)([a-zA-Z]*)(\u001d?[zZ])": z,
      "(\\S*)(\u1ecd\u001d?)([a-zA-Z]*)(\u001d?[jJ])": C,
      "(\\S*)(\u1ecd\u001d?)([a-zA-Z]*)(\u001d?[zZ])": B,
      "(\\S*)(\u1ed9\u001d?)([a-zA-Z]*)(\u001d?[jJ])": S,
      "(\\S*)(\u1ed9\u001d?)([a-zA-Z]*)(\u001d?[zZ])": R,
      "(\\S*)(\u1ee3\u001d?)([a-zA-Z]*)(\u001d?[jJ])": aa,
      "(\\S*)(\u1ee3\u001d?)([a-zA-Z]*)(\u001d?[zZ])": Z,
      "(\\S*)(\u1ee5\u001d?)([a-zA-Z]*)(\u001d?[jJ])": E,
      "(\\S*)(\u1ee5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": D,
      "(\\S*)(\u1ef1\u001d?)([a-zA-Z]*)(\u001d?[jJ])": ea,
      "(\\S*)(\u1ef1\u001d?)([a-zA-Z]*)(\u001d?[zZ])": da,
      "(\\S*)(\u1ef5\u001d?)([a-zA-Z]*)(\u001d?[jJ])": G,
      "(\\S*)(\u1ef5\u001d?)([a-zA-Z]*)(\u001d?[zZ])": F,
      "(\\S*)(\u1ea0\u001d?)([a-zA-Z]*)(\u001d?[jJ])": g,
      "(\\S*)(\u1ea0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": f,
      "(\\S*)(\u1eac\u001d?)([a-zA-Z]*)(\u001d?[jJ])": I,
      "(\\S*)(\u1eac\u001d?)([a-zA-Z]*)(\u001d?[zZ])": H,
      "(\\S*)(\u1eb6\u001d?)([a-zA-Z]*)(\u001d?[jJ])": U,
      "(\\S*)(\u1eb6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": T,
      "(\\S*)(\u1eb8\u001d?)([a-zA-Z]*)(\u001d?[jJ])": k,
      "(\\S*)(\u1eb8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": h,
      "(\\S*)(\u1ec6\u001d?)([a-zA-Z]*)(\u001d?[jJ])": K,
      "(\\S*)(\u1ec6\u001d?)([a-zA-Z]*)(\u001d?[zZ])": J,
      "(\\S*)(\u1eca\u001d?)([a-zA-Z]*)(\u001d?[jJ])": m,
      "(\\S*)(\u1eca\u001d?)([a-zA-Z]*)(\u001d?[zZ])": l,
      "(\\S*)(\u1ecc\u001d?)([a-zA-Z]*)(\u001d?[jJ])": p,
      "(\\S*)(\u1ecc\u001d?)([a-zA-Z]*)(\u001d?[zZ])": n,
      "(\\S*)(\u1ed8\u001d?)([a-zA-Z]*)(\u001d?[jJ])": M,
      "(\\S*)(\u1ed8\u001d?)([a-zA-Z]*)(\u001d?[zZ])": L,
      "(\\S*)(\u1ee2\u001d?)([a-zA-Z]*)(\u001d?[jJ])": Y,
      "(\\S*)(\u1ee2\u001d?)([a-zA-Z]*)(\u001d?[zZ])": X,
      "(\\S*)(\u1ee4\u001d?)([a-zA-Z]*)(\u001d?[jJ])": r,
      "(\\S*)(\u1ee4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": q,
      "(\\S*)(\u1ef0\u001d?)([a-zA-Z]*)(\u001d?[jJ])": ca,
      "(\\S*)(\u1ef0\u001d?)([a-zA-Z]*)(\u001d?[zZ])": ba,
      "(\\S*)(\u1ef4\u001d?)([a-zA-Z]*)(\u001d?[jJ])": u,
      "(\\S*)(\u1ef4\u001d?)([a-zA-Z]*)(\u001d?[zZ])": t
    }
  });
}).call(this);
