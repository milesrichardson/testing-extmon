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
      this.aa = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.fa = /[\u11a8-\u11c3]/g;
      this.ea = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.ca = /[\uac00-\ud7af]/g;
      this.da = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.o = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.ga = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.s = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.fa, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.ea, function (c) {
        return a.aa[c];
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
  n.prototype.ba = function (a, b, c, d) {
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
      b = c.replace(a.ca, k(a.v, a));
      c = k(a.ba, a);
      b = q(a, p(a, b)).replace(a.o, c).replace(a.ga, c).replace(a.l, c).replace(a.s, c).replace(a.da, k(a.u, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "sd",
    title: "Sindhi",
    mappings: {
      ",c": {
        "": "\u20191234567890\u068f\u068c\u0642\u0635\u064a\u0631\u062a\u067f\u0639\u06b3\u0648\u067e\u0687\u0686\u068d\u0627\u0633\u062f\u0641\u06af\u0647\u062c\u06aa\u0644\u06a9\u06b1\u0632\u062e\u0637\u0680\u0628\u0646\u0645\u060c.\u0626"
      },
      "s,sc": {
        "\u00c0": "\u2018",
        1: "!",
        2: "\u0670",
        3: "\u0621\u0650",
        4: "\u0621\u064e",
        5: "\u0621\u064f",
        6: "\u0621\u064c",
        7: "\u06fd",
        8: "*",
        9: ")",
        0: "(",
        m: "_",
        "=": "+",
        Q: "\u064e",
        W: "\u0636",
        E: "\u0650",
        R: "\u0699",
        T: "\u067d",
        Y: "\u062b",
        U: "\u063a",
        I: "\u06be",
        O: "\u064f",
        P: "\u06a6",
        "\u00db": "\u0683",
        "\u00dd": "\u0684",
        "\u00dc": "\u067a",
        A: "\u0622",
        S: "\u0634",
        D: "\u068a",
        F: "\u06a6",
        G: "\u06af\u06be",
        H: "\u062d",
        J: "\u062c\u06be",
        K: "\u06e1",
        L: ":",
        ";": "\u061b",
        "\u00de": "\u0640",
        Z: "\u0630",
        X: "\u0651",
        C: "\u0638",
        V: "\u0621",
        B: "\u067b",
        N: "\u06bb",
        M: "\u06fe",
        "\u00bc": "\u201c",
        "\u00be": "\u201d",
        "\u00bf": "\u061f"
      },
      "l,cl": {
        "\u00c01234567890m=": "\u20191234567890\u068f\u068c",
        Q: "\u064e",
        W: "\u0636",
        E: "\u0650",
        R: "\u0699",
        T: "\u067d",
        Y: "\u062b",
        U: "\u063a",
        I: "\u06be",
        O: "\u064f",
        P: "\u06a6",
        "\u00db\u00dd\u00dc": "\u0687\u0686\u068d",
        A: "\u0622",
        S: "\u0634",
        D: "\u068a",
        F: "\u06a6",
        G: "\u06af\u06be",
        H: "\u062d",
        J: "\u062c\u06be",
        K: "\u06e1",
        L: ":",
        ";\u00de": "\u06a9\u06b1",
        Z: "\u0630",
        X: "\u0651",
        C: "\u0638",
        V: "\u0621",
        B: "\u067b",
        N: "\u06bb",
        M: "\u06fe",
        "\u00bc\u00be\u00bf": "\u060c.\u0626"
      },
      "sl,scl": {
        "\u00c0": "\u2018",
        1: "!",
        2: "\u0670",
        3: "\u0621\u0650",
        4: "\u0621\u064e",
        5: "\u0621\u064f",
        6: "\u0621\u064c",
        7: "\u06fd",
        8: "*",
        9: ")",
        0: "(",
        m: "_",
        "=": "+",
        QWERTYUIOP: "\u0642\u0635\u064a\u0631\u062a\u067f\u0639\u06b3\u0648\u067e",
        "\u00db": "\u0683",
        "\u00dd": "\u0684",
        "\u00dc": "\u067a",
        ASDFGHJKL: "\u0627\u0633\u062f\u0641\u06af\u0647\u062c\u06aa\u0644\u061b\u0640",
        ";": "\u061b",
        "\u00de": "\u0640",
        ZXCVBNM: "\u0632\u062e\u0637\u0680\u0628\u0646\u0645",
        "\u00bc": "\u201c",
        "\u00be": "\u201d",
        "\u00bf": "\u061f"
      }
    }
  });
}).call(this);
