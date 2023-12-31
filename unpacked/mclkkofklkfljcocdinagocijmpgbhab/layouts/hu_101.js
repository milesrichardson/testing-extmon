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
    id: "hu_101",
    title: "Magyar nyelv (101)",
    mappings: {
      "": { "": "\u00ed123456789\u00f6\u00fc\u00f3qwertyuiop\u0151\u00fa\u0171asdfghjkl\u00e9\u00e1zxcvbnm,.-" },
      s: { "": "\u00cd'\"+!%/=()\u00d6\u00dc\u00d3QWERTYUIOP\u0150\u00da\u0170ASDFGHJKL\u00c9\u00c1ZXCVBNM?:_" },
      l: { "": "\u00cd123456789\u00d6\u00dc\u00d3QWERTYUIOP\u0150\u00da\u0170ASDFGHJKL\u00c9\u00c1ZXCVBNM,.-" },
      sl: { "": "\u00ed'\"+!%/=()\u00f6\u00fc\u00f3qwertyuiop\u0151\u00fa\u0171asdfghjkl\u00e9\u00e1zxcvbnm?:_" },
      c: {
        "\u00c01234567890": "0~\u02c7^\u02d8\u00b0\u02db`\u02d9\u00b4\u02dd",
        "QWERTUI\u00db\u00dd\u00dc": "\\|\u00c4\u00a7\u00a4\u20ac\u00cd\u00f7\u00d7\\",
        "ASDFGJKL;\u00de": "\u00e4\u0111\u0110[]\u00ed\u0142\u0141$\u00df",
        "ZXCVBNM\u00bc\u00be\u00bf": ">#&@{}<;>*"
      }
    },
    transform: {
      "\u02c7c": "\u010d",
      "\u02c7d": "\u010f",
      "\u02c7e": "\u011b",
      "\u02c7n": "\u0148",
      "\u02c7r": "\u0159",
      "\u02c7s": "\u0161",
      "\u02c7t": "\u0165",
      "\u02c7z": "\u017e",
      "\u02c7C": "\u010c",
      "\u02c7D": "\u010e",
      "\u02c7E": "\u011a",
      "\u02c7N": "\u0147",
      "\u02c7R": "\u0158",
      "\u02c7S": "\u0160",
      "\u02c7T": "\u0164",
      "\u02c7Z": "\u017d",
      "\\^a": "\u00e2",
      "\\^i": "\u00ee",
      "\\^o": "\u00f4",
      "\\^A": "\u00c2",
      "\\^I": "\u00ce",
      "\\^O": "\u00d4",
      "\u02d8a": "\u0103",
      "\u02d8A": "\u0102",
      "\u00b0u": "\u016f",
      "\u00b0U": "\u016e",
      "\u02dba": "\u0105",
      "\u02dbe": "\u0119",
      "\u02dbA": "\u0104",
      "\u02dbE": "\u0118",
      "\u02d9z": "\u017c",
      "\u02d9Z": "\u017b",
      "\u00b4a": "\u00e1",
      "\u00b4c": "\u0107",
      "\u00b4e": "\u00e9",
      "\u00b4i": "\u00ed",
      "\u00b4l": "\u013a",
      "\u00b4n": "\u0144",
      "\u00b4o": "\u00f3",
      "\u00b4r": "\u0155",
      "\u00b4s": "\u015b",
      "\u00b4u": "\u00fa",
      "\u00b4y": "\u00fd",
      "\u00b4z": "\u017a",
      "\u00b4A": "\u00c1",
      "\u00b4C": "\u0106",
      "\u00b4E": "\u00c9",
      "\u00b4I": "\u00cd",
      "\u00b4L": "\u0139",
      "\u00b4N": "\u0143",
      "\u00b4O": "\u00d3",
      "\u00b4R": "\u0154",
      "\u00b4S": "\u015a",
      "\u00b4U": "\u00da",
      "\u00b4Y": "\u00dd",
      "\u00b4Z": "\u0179",
      "\u02ddo": "\u0151",
      "\u02ddu": "\u0171",
      "\u02ddO": "\u0150",
      "\u02ddU": "\u0170",
      "\u00a8a": "\u00e4",
      "\u00a8e": "\u00eb",
      "\u00a8o": "\u00f6",
      "\u00a8u": "\u00fc",
      "\u00a8A": "\u00c4",
      "\u00a8E": "\u00cb",
      "\u00a8O": "\u00d6",
      "\u00a8U": "\u00dc",
      "\u00b8c": "\u00e7",
      "\u00b8s": "\u015f",
      "\u00b8t": "\u0163",
      "\u00b8C": "\u00c7",
      "\u00b8S": "\u015e",
      "\u00b8T": "\u0162"
    }
  });
}).call(this);
