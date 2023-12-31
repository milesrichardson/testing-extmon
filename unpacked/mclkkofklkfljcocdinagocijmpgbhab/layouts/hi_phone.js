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
    id: "hi_phone",
    title: "\u0939\u093f\u0902\u0926\u0940 (PHONETIC)",
    mappings: {
      "cl,c,l,": {
        "\u00c0": "\u0945",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0",
        m: "-",
        "=": "\u0943",
        Q: "\u094c",
        W: "\u0948",
        E: "\u093e",
        R: "\u0940",
        T: "\u0942",
        Y: "\u092c",
        U: "\u0939",
        I: "\u0917",
        O: "\u0926",
        P: "\u091c",
        "\u00db": "\u0921",
        "\u00dd": "\u093c",
        "\u00dc": "\u0949",
        A: "\u094b",
        S: "\u0947",
        D: "\u094d",
        F: "\u093f",
        G: "\u0941",
        H: "\u092a",
        J: "\u0930",
        K: "\u0915",
        L: "\u0924",
        ";": "\u091a",
        "\u00de": "\u091f",
        Z: "\u200c",
        X: "\u0902",
        C: "\u092e",
        V: "\u0928",
        B: "\u0935",
        N: "\u0932",
        M: "\u0938",
        "\u00bc": ",",
        "\u00be": ".",
        "\u00bf": "\u092f"
      },
      "scl,sc,sl,s": {
        "\u00c0": "\u090d",
        1: "\u2018",
        2: "\u2019",
        3: "\u094d\u0930",
        4: "\u0930\u094d",
        5: "\u091c\u094d\u091e",
        6: "\u0924\u094d\u0930",
        7: "\u0915\u094d\u0937",
        8: "\u0936\u094d\u0930",
        9: "(",
        0: ")",
        m: ":",
        "=": "\u090b",
        Q: "\u0914",
        W: "\u0910",
        E: "\u0906",
        R: "\u0908",
        T: "\u090a",
        Y: "\u092d",
        U: "\u0919",
        I: "\u0918",
        O: "\u0927",
        P: "\u091d",
        "\u00db": "\u0922",
        "\u00dd": "\u091e",
        "\u00dc": "|",
        A: "\u0913",
        S: "\u090f",
        D: "\u0905",
        F: "\u0907",
        G: "\u0909",
        H: "\u092b",
        J: "\u094d\u0930",
        K: "\u0916",
        L: "\u0925",
        ";": "\u091b",
        "\u00de": "\u0920",
        Z: "\u0970",
        X: "\u0901",
        C: "\u0923",
        V: "\u0929",
        B: "\u0934",
        N: "\u0933",
        M: "\u0936",
        "\u00bc": "\u0937",
        "\u00be": "\u0964",
        "\u00bf": "?"
      }
    }
  });
}).call(this);
