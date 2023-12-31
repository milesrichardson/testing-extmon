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
    id: "th",
    title: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    mappings: {
      "sl,": {
        "\u00c0": "_",
        1: "\u0e45",
        2: "/",
        3: "-",
        4: "\u0e20",
        5: "\u0e16",
        6: "\u0e38",
        7: "\u0e36",
        8: "\u0e04",
        9: "\u0e15",
        0: "\u0e08",
        m: "\u0e02",
        "=": "\u0e0a",
        Q: "\u0e46",
        W: "\u0e44",
        E: "\u0e33",
        R: "\u0e1e",
        T: "\u0e30",
        Y: "\u0e31",
        U: "\u0e35",
        I: "\u0e23",
        O: "\u0e19",
        P: "\u0e22",
        "\u00db": "\u0e1a",
        "\u00dd": "\u0e25",
        "\u00dc": "\u0e03",
        A: "\u0e1f",
        S: "\u0e2b",
        D: "\u0e01",
        F: "\u0e14",
        G: "\u0e40",
        H: "\u0e49",
        J: "\u0e48",
        K: "\u0e32",
        L: "\u0e2a",
        ";": "\u0e27",
        "\u00de": "\u0e07",
        Z: "\u0e1c",
        X: "\u0e1b",
        C: "\u0e41",
        V: "\u0e2d",
        B: "\u0e34",
        N: "\u0e37",
        M: "\u0e17",
        "\u00bc": "\u0e21",
        "\u00be": "\u0e43",
        "\u00bf": "\u0e1d"
      },
      "cl,c": { "\u00db": "%", "\u00dd": "\u0e51", "\u00dc": "+" },
      "l,s": {
        "\u00c0": "%",
        1: "+",
        2: "\u0e51",
        3: "\u0e52",
        4: "\u0e53",
        5: "\u0e54",
        6: "\u0e39",
        7: "\u0e3f",
        8: "\u0e55",
        9: "\u0e56",
        0: "\u0e57",
        m: "\u0e58",
        "=": "\u0e59",
        Q: "\u0e50",
        W: '"',
        E: "\u0e0e",
        R: "\u0e11",
        T: "\u0e18",
        Y: "\u0e4d",
        U: "\u0e4a",
        I: "\u0e13",
        O: "\u0e2f",
        P: "\u0e0d",
        "\u00db": "\u0e10",
        "\u00dd": ",",
        "\u00dc": "\u0e05",
        A: "\u0e24",
        S: "\u0e06",
        D: "\u0e0f",
        F: "\u0e42",
        G: "\u0e0c",
        H: "\u0e47",
        J: "\u0e4b",
        K: "\u0e29",
        L: "\u0e28",
        ";": "\u0e0b",
        "\u00de": ".",
        Z: "(",
        X: ")",
        C: "\u0e09",
        V: "\u0e2e",
        B: "\u0e3a",
        N: "\u0e4c",
        M: "?",
        "\u00bc": "\u0e12",
        "\u00be": "\u0e2c",
        "\u00bf": "\u0e26"
      }
    }
  });
}).call(this);
