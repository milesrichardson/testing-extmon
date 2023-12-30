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
      this.F = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.o = /[\u11a8-\u11c3]/g;
      this.J = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.H = /[\uac00-\ud7af]/g;
      this.I = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.A = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.u = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.v = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.B = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.J, function (c) {
        return a.F[c];
      });
    },
    l = this || self;
  n.prototype.D = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.C = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.G = function (a, b, c, d) {
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
      b = c.replace(a.H, k(a.D, a));
      c = k(a.G, a);
      b = q(a, p(a, b)).replace(a.A, c).replace(a.u, c).replace(a.v, c).replace(a.B, c).replace(a.I, k(a.C, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "de",
    is102Keyboard: !0,
    title: "Deutsch",
    mappings: {
      "": { "": "^1234567890\u00df\u00b4qwertzuiop\u00fc+#asdfghjkl\u00f6\u00e4<yxcvbnm,.-" },
      s: { "": "\u00b0!\"\u00a7$%&/()=?`QWERTZUIOP\u00dc*'ASDFGHJKL\u00d6\u00c4>YXCVBNM;:_" },
      l: { "": "^!\"\u00a7$%&/()=?\u00b4QWERTZUIOP\u00dc*'ASDFGHJKL\u00d6\u00c4>YXCVBNM;:-" },
      sl: { "": "\u00b01234567890\u00df`qwertzuiop\u00fc+#asdfghjkl\u00f6\u00e4<yxcvbnm,._" },
      c: {
        "\u00e2": "|",
        2: "\u00b2",
        3: "\u00b3",
        7: "{",
        8: "[",
        9: "]",
        0: "}",
        m: "\\",
        Q: "@",
        E: "\u20ac",
        "\u00dd": "~",
        M: "\u00b5"
      }
    },
    transform: {
      "` ": "`",
      "`A": "\u00c0",
      "`E": "\u00c8",
      "`I": "\u00cc",
      "`N": "\u01f8",
      "`O": "\u00d2",
      "`U": "\u00d9",
      "`W": "\u1e80",
      "`Y": "\u1ef2",
      "`a": "\u00e0",
      "`e": "\u00e8",
      "`i": "\u00ec",
      "`n": "\u01f9",
      "`o": "\u00f2",
      "`u": "\u00f9",
      "`w": "\u1e81",
      "`y": "\u1ef3",
      "`\u00dc": "\u01db",
      "`\u00fc": "\u01dc",
      "\u00b4 ": "\u00b4",
      "\u00b4A": "\u00c1",
      "\u00b4C": "\u0106",
      "\u00b4E": "\u00c9",
      "\u00b4G": "\u01f4",
      "\u00b4I": "\u00cd",
      "\u00b4K": "\u1e30",
      "\u00b4L": "\u0139",
      "\u00b4M": "\u1e3e",
      "\u00b4N": "\u0143",
      "\u00b4O": "\u00d3",
      "\u00b4P": "\u1e54",
      "\u00b4R": "\u0154",
      "\u00b4S": "\u015a",
      "\u00b4U": "\u00da",
      "\u00b4W": "\u1e82",
      "\u00b4Y": "\u00dd",
      "\u00b4Z": "\u0179",
      "\u00b4a": "\u00e1",
      "\u00b4c": "\u0107",
      "\u00b4e": "\u00e9",
      "\u00b4g": "\u01f5",
      "\u00b4i": "\u00ed",
      "\u00b4k": "\u1e31",
      "\u00b4l": "\u013a",
      "\u00b4m": "\u1e3f",
      "\u00b4n": "\u0144",
      "\u00b4o": "\u00f3",
      "\u00b4p": "\u1e55",
      "\u00b4r": "\u0155",
      "\u00b4s": "\u015b",
      "\u00b4u": "\u00fa",
      "\u00b4w": "\u1e83",
      "\u00b4y": "\u00fd",
      "\u00b4z": "\u017a",
      "\u00b4\u00dc": "\u01d7",
      "\u00b4\u00fc": "\u01d8",
      "\\^ ": "^",
      "\\^A": "\u00c2",
      "\\^C": "\u0108",
      "\\^E": "\u00ca",
      "\\^G": "\u011c",
      "\\^H": "\u0124",
      "\\^I": "\u00ce",
      "\\^J": "\u0134",
      "\\^O": "\u00d4",
      "\\^S": "\u015c",
      "\\^U": "\u00db",
      "\\^W": "\u0174",
      "\\^Y": "\u0176",
      "\\^Z": "\u1e90",
      "\\^a": "\u00e2",
      "\\^c": "\u0109",
      "\\^e": "\u00ea",
      "\\^g": "\u011d",
      "\\^h": "\u0125",
      "\\^i": "\u00ee",
      "\\^j": "\u0135",
      "\\^o": "\u00f4",
      "\\^s": "\u015d",
      "\\^u": "\u00fb",
      "\\^w": "\u0175",
      "\\^y": "\u0177",
      "\\^z": "\u1e91"
    }
  });
}).call(this);
