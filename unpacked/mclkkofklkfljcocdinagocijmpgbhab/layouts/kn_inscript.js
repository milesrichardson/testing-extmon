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
      this.u = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.G = /[\u11a8-\u11c3]/g;
      this.D = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.A = /[\uac00-\ud7af]/g;
      this.B = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.J = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.L = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
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
    p = function (a, b) {
      return b.replace(a.G, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.D, function (c) {
        return a.u[c];
      });
    },
    l = this || self;
  n.prototype.s = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.o = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.v = function (a, b, c, d) {
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
      b = c.replace(a.A, k(a.s, a));
      c = k(a.v, a);
      b = q(a, p(a, b)).replace(a.l, c).replace(a.J, c).replace(a.L, c).replace(a.m, c).replace(a.B, k(a.o, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "kn_inscript",
    title: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)",
    mappings: {
      "sl,s": {
        "\u00c012": "\u0c92{{}}{{}}",
        3: "\u0ccd\u0cb0",
        4: "\u0cb0\u0ccd",
        5: "\u0c9c\u0ccd\u0c9e",
        6: "\u0ca4\u0ccd\u0cb0",
        7: "\u0c95\u0ccd\u0cb7",
        8: "\u0cb6\u0ccd\u0cb0",
        "90m=": "()\u0c83\u0c8b",
        "QWERTYUIOP\u00db\u00dd\u00dc": "\u0c94\u0c90\u0c86\u0c88\u0c8a\u0cad\u0c99\u0c98\u0ca7\u0c9d\u0ca2\u0c9e{{}}",
        "ASDFGHJKL;\u00de": "\u0c93\u0c8f\u0c85\u0c87\u0c89\u0cab\u0cb1\u0c96\u0ca5\u0c9b\u0ca0",
        "ZXCVBNM\u00bc\u00be\u00bf": "\u0c8e{{}}\u0ca3{{}}{{}}\u0cb3\u0cb6\u0cb7{{}}{{}}"
      },
      "scl,sc,cl,c": {
        "1234567890=": "\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6\u0cc4",
        R: "\u0ce3",
        I: "\u0cda",
        P: "\u0cdb",
        "\u00db": "\u0cdc",
        F: "\u0ce2",
        K: "\u0cd8",
        ";": "\u0cd2",
        Z: "\u0cd3",
        C: "\u0cd4",
        "\u00bc": "\u0cf0",
        "\u00be": "\u0ce5"
      },
      "scl,sc": {
        "=": "\u0ce0",
        R: "\u0ce1",
        "\u00db": "\u0cdd",
        F: "\u0c8c",
        H: "\u0cde",
        K: "\u0cd9",
        "\u00de": "\u0cd1",
        X: "\u0cd0",
        "\u00be": "\u0cbd"
      },
      "l,": {
        "": "\u0cca1234567890-\u0cc3\u0ccc\u0cc8\u0cbe\u0cc0\u0cc2\u0cac\u0cb9\u0c97\u0ca6\u0c9c\u0ca1{{}}{{}}\u0ccb\u0cc7\u0ccd\u0cbf\u0cc1\u0caa\u0cb0\u0c95\u0ca4\u0c9a\u0c9f\u0cc6\u0c82\u0cae\u0ca8\u0cb5\u0cb2\u0cb8,.\u0caf"
      }
    }
  });
}).call(this);
