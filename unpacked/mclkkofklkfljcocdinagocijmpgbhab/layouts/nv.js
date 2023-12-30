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
      this.A = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.G = /[\u11a8-\u11c3]/g;
      this.F = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.C = /[\uac00-\ud7af]/g;
      this.D = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.m = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.H = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.o = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.G, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.F, function (c) {
        return a.A[c];
      });
    },
    l = this || self;
  n.prototype.v = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.u = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.B = function (a, b, c, d) {
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
      b = c.replace(a.C, k(a.v, a));
      c = k(a.B, a);
      b = q(a, p(a, b)).replace(a.m, c).replace(a.H, c).replace(a.l, c).replace(a.o, c).replace(a.D, k(a.u, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "nv",
    title: "Din\u00e9 bizaad - Modern",
    mappings: {
      "": { "": "{{\u0301}}1234567890-=qwertyuiop{{\u0328}}{{\u0328\u0301}}\\asdfghjkl{{\u0142}}\u02bczxcvbnm,.{{\u0301}}" },
      s: { "": "{{\u0300}}!@#$%^&*()_+QWERTYUIOP{{\u201c}}{{\u201d}}|ASDFGHJKL{{\u0141}}/ZXCVBNM;:?" },
      "c,l,cl": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "sc,sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    },
    transform: {
      "a\u0301": "\u00e1",
      "a\u0328": "\u0105",
      "a\u0328\u0301": "\u0105\u0301",
      "e\u0301": "\u00e9",
      "e\u0328": "\u0119",
      "e\u0328\u0301": "\u0119\u0301",
      "i\u0301": "\u00ed",
      "i\u0328": "\u012f",
      "i\u0328\u0301": "\u012f\u0301",
      "o\u0301": "\u00f3",
      "o\u0328": "\u01eb",
      "o\u0328\u0301": "\u01eb\u0301",
      "n\u0301": "\u0144",
      "n\u0328\u0301": "\u0144\u0328",
      "n~": "\u00f1",
      "A\u0301": "\u00c1",
      "A\u0328": "\u0104",
      "A\u0328\u0301": "\u0104\u0301",
      "E\u0301": "\u00c9",
      "E\u0328": "\u0118",
      "E\u0328\u0301": "\u0118\u0301",
      "I\u0301": "\u00cd",
      "I\u0328": "\u012e",
      "I\u0328\u0301": "\u012e\u0301",
      "O\u0301": "\u00d3",
      "O\u0328": "\u01ea",
      "O\u0328\u0301": "\u01ea\u0301",
      "N\u0301": "\u0143",
      "N\u0328\u0301": "\u0143\u0328",
      "N~": "\u00d1"
    }
  });
}).call(this);
