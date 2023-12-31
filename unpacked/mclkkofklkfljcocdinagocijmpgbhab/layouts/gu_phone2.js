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
    id: "gu_phone2",
    title: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (PHONETIC)",
    mappings: {
      "cl,c,l,": {
        "\u00c0": "\u200c",
        1: "\u0ae7",
        2: "\u0ae8",
        3: "\u0ae9",
        4: "\u0aea",
        5: "\u0aeb",
        6: "\u0aec",
        7: "\u0aed",
        8: "\u0aee",
        9: "\u0aef",
        0: "\u0ae6",
        m: "-",
        "=": "\u0ac3",
        Q: "\u0acc",
        W: "\u0ac8",
        E: "\u0abe",
        R: "\u0ac0",
        T: "\u0ac2",
        Y: "\u0aac",
        U: "\u0ab9",
        I: "\u0a97",
        O: "\u0aa6",
        P: "\u0a9c",
        "\u00db": "\u0aa1",
        "\u00dd": "\u0af0",
        "\u00dc": "\u0ae2",
        A: "\u0acb",
        S: "\u0ac7",
        D: "\u0acd",
        F: "\u0abf",
        G: "\u0ac1",
        H: "\u0aaa",
        J: "\u0ab0",
        K: "\u0a95",
        L: "\u0aa4",
        ";": "\u0a9a",
        "\u00de": "\u0a9f",
        Z: "\u201c",
        X: "\u0a82",
        C: "\u0aae",
        V: "\u0aa8",
        B: "\u0ab5",
        N: "\u0ab2",
        M: "\u0ab8",
        "\u00bc": ",",
        "\u00be": ".",
        "\u00bf": "\u0aaf"
      },
      "scl,sc,sl,s": {
        "\u00c0": "\u2018",
        1: "!",
        2: "\u2019",
        3: "\u0acd\u0ab0",
        4: "\u0ab0\u0acd",
        5: "\u0a9c\u0acd\u0a9e",
        6: "\u0aa4\u0acd\u0ab0",
        7: "\u0a95\u0acd\u0ab7",
        8: "\u0ab6\u0acd\u0ab0",
        9: "(",
        0: ")",
        m: ":",
        "=": "\u0a8b",
        Q: "\u0a94",
        W: "\u0a90",
        E: "\u0a86",
        R: "\u0a88",
        T: "\u0a8a",
        Y: "\u0aad",
        U: "\u0a99",
        I: "\u0a98",
        O: "\u0aa7",
        P: "\u0a9d",
        "\u00db": "\u0aa2",
        "\u00dd": "\u0a9e",
        "\u00dc": "\u0a91",
        A: "\u0a93",
        S: "\u0a8f",
        D: "\u0a85",
        F: "\u0a87",
        G: "\u0a89",
        H: "\u0aab",
        J: "\u0ac5",
        K: "\u0a96",
        L: "\u0aa5",
        ";": "\u0a9b",
        "\u00de": "\u0aa0",
        Z: "\u201d",
        X: "\u0a81",
        C: "\u0aa3",
        V: "\u0acd\u0aa8",
        B: "|",
        N: "\u0ab3",
        M: "\u0ab6",
        "\u00bc": "\u0ab7",
        "\u00be": "*",
        "\u00bf": "?"
      }
    }
  });
}).call(this);
