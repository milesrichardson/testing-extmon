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
    id: "us_intl",
    title: "US International",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      "c,cl": {
        "1234567890m=": "\u00a1\u00b2\u00b3\u00a4\u20ac\u00bc\u00bd\u00be\u2018\u2019\u00a5\u00d7",
        QWERTYUIOP: "\u00e4\u00e5\u00e9\u00ae\u00fe\u00fc\u00fa\u00ed\u00f3\u00f6",
        "\u00db\u00dd\u00dc": "\u00ab\u00bb\u00ac",
        ASD: "\u00e1\u00df\u0111",
        ";\u00de": "\u00b6\u00b4",
        ZXC: "\u00e6\u0153\u00a9",
        NM: "\u00f1\u00b5",
        "\u00bc": "\u00e7",
        "\u00bf": "\u00bf"
      },
      "sc,scl": {
        1: "\u00b9",
        4: "\u00a3",
        "=": "\u00f7",
        QWERTYUIOP: "\u00c4\u00c5\u00c9{{}}\u00de\u00dc\u00da\u00cd\u00d3\u00d6",
        "\u00dc": "\u00a6",
        ASD: "\u00c1\u00a7\u0110",
        "L;\u00de": "\u00d8\u00b0\u00a8",
        ZXC: "\u00c6\u0152\u00a2",
        N: "\u00d1",
        "\u00bc": "\u00c7"
      }
    },
    transform: {
      "'a": "\u00e1",
      "'e": "\u00e9",
      "'i": "\u00ed",
      "'o": "\u00f3",
      "'u": "\u00fa",
      "'c": "\u00e7",
      "'A": "\u00c1",
      "'E": "\u00c9",
      "'I": "\u00cd",
      "'O": "\u00d3",
      "'U": "\u00da",
      "'C": "\u00c7",
      "`a": "\u00e0",
      "`e": "\u00e8",
      "`i": "\u00ec",
      "`o": "\u00f2",
      "`u": "\u00f9",
      "`A": "\u00c0",
      "`E": "\u00c8",
      "`I": "\u00cc",
      "`O": "\u00d2",
      "`U": "\u00d9",
      '"a': "\u00e4",
      '"e': "\u00eb",
      '"i': "\u00ef",
      '"o': "\u00f6",
      '"u': "\u00fc",
      '"A': "\u00c4",
      '"E': "\u00cb",
      '"I': "\u00cf",
      '"O': "\u00d6",
      '"U': "\u00dc",
      "\\^a": "\u00e2",
      "\\^e": "\u00ea",
      "\\^i": "\u00ee",
      "\\^o": "\u00f4",
      "\\^u": "\u00fb",
      "\\^A": "\u00c2",
      "\\^E": "\u00ca",
      "\\^I": "\u00ce",
      "\\^O": "\u00d4",
      "\\^U": "\u00db",
      "~a": "\u00e3",
      "~o": "\u00f5",
      "~n": "\u00f1",
      "~A": "\u00c3",
      "~O": "\u00d5",
      "~N": "\u00d1"
    }
  });
}).call(this);
