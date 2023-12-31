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
      this.D = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.J = /[\u11a8-\u11c3]/g;
      this.I = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.G = /[\uac00-\ud7af]/g;
      this.H = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
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
      return b.replace(a.J, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.I, function (c) {
        return a.D[c];
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
  n.prototype.F = function (a, b, c, d) {
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
      b = c.replace(a.G, k(a.B, a));
      c = k(a.F, a);
      b = q(a, p(a, b)).replace(a.u, c).replace(a.m, c).replace(a.o, c).replace(a.v, c).replace(a.H, k(a.A, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "el",
    title: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    mappings: {
      "": {
        "": "`1234567890-=;\u03c2\u03b5\u03c1\u03c4\u03c5\u03b8\u03b9\u03bf\u03c0[]\\\u03b1\u03c3\u03b4\u03c6\u03b3\u03b7\u03be\u03ba\u03bb\u0384'\u03b6\u03c7\u03c8\u03c9\u03b2\u03bd\u03bc,./"
      },
      s: {
        "": '~!@#$%^&*()_+:\u0385\u0395\u03a1\u03a4\u03a5\u0398\u0399\u039f\u03a0{}|\u0391\u03a3\u0394\u03a6\u0393\u0397\u039e\u039a\u039b\u00a8"\u0396\u03a7\u03a8\u03a9\u0392\u039d\u039c<>?'
      },
      l: {
        "": "`1234567890-=;\u03c2\u0395\u03a1\u03a4\u03a5\u0398\u0399\u039f\u03a0[]\\\u0391\u03a3\u0394\u03a6\u0393\u0397\u039e\u039a\u039b\u0384'\u0396\u03a7\u03a8\u03a9\u0392\u039d\u039c,./"
      },
      sl: {
        "": '~!@#$%^&*()_+:\u0385\u03b5\u03c1\u03c4\u03c5\u03b8\u03b9\u03bf\u03c0{}|\u03b1\u03c3\u03b4\u03c6\u03b3\u03b7\u03be\u03ba\u03bb\u00a8"\u03b6\u03c7\u03c8\u03c9\u03b2\u03bd\u03bc<>?'
      },
      "c,sc,cl,scl": {
        23456: "\u00b2\u00b3\u00a3\u00a7\u00b6",
        "890m=": "\u00a4\u00a6\u00b0\u00b1\u00bd",
        "ERY\u00db\u00dd\u00dc": "\u20ac\u00ae\u00a5\u00ab\u00bb\u00ac",
        C: "\u00a9",
        ";": "\u0385"
      }
    },
    transform: {
      "\u0384\u03b1": "\u03ac",
      "\u0384\u0391": "\u0386",
      "\u0384\u03b5": "\u03ad",
      "\u0384\u0395": "\u0388",
      "\u0384\u03b9": "\u03af",
      "\u00a8\u03b9": "\u03ca",
      "\u0385\u03b9": "\u0390",
      "\u0384\u0399": "\u038a",
      "\u00a8\u0399": "\u03aa",
      "\u0384\u03bf": "\u03cc",
      "\u0384\u039f": "\u038c",
      "\u0384\u03c5": "\u03cd",
      "\u00a8\u03c5": "\u03cb",
      "\u0385\u03c5": "\u03b0",
      "\u0384\u03a5": "\u038e",
      "\u00a8\u03a5": "\u03ab",
      "\u0384\u03c9": "\u03ce",
      "\u0384\u03a9": "\u038f",
      "\u0384\u03b7": "\u03ae",
      "\u0384\u0397": "\u0389"
    }
  });
}).call(this);
