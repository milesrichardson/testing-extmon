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
    id: "gu_inscript",
    title: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)",
    mappings: {
      "sl,s": {
        "\u00c012": "\u0a92\u0a8d\u0ac5",
        3: "\u0acd\u0ab0",
        4: "\u0ab0\u0acd",
        5: "\u0a9c\u0acd\u0a9e",
        6: "\u0aa4\u0acd\u0ab0",
        7: "\u0a95\u0acd\u0ab7",
        8: "\u0ab6\u0acd\u0ab0",
        "90m=": "()\u0a83\u0a8b",
        "QWERTYUIOP\u00db\u00dd\u00dc": "\u0a94\u0a90\u0a86\u0a88\u0a8a\u0aad\u0a99\u0a98\u0aa7\u0a9d\u0aa2\u0a9e\u0a91",
        "ASDFGHJKL;\u00de": "\u0a93\u0a8f\u0a85\u0a87\u0a89\u0aab\u0ab1\u0a96\u0aa5\u0a9b\u0aa0",
        "ZXCVBNM\u00bc\u00be\u00bf": "\u0a8e\u0a81\u0aa3\u0aa9\u0ab4\u0ab3\u0ab6\u0ab7\u0ae4\u0adf"
      },
      "scl,sc,cl,c": {
        "1234567890=": "\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6\u0ac4",
        R: "\u0ae3",
        I: "\u0ada",
        P: "\u0adb",
        "\u00db": "\u0adc",
        F: "\u0ae2",
        K: "\u0ad8",
        ";": "\u0ad2",
        Z: "\u0ad3",
        C: "\u0ad4",
        "\u00bc": "\u0af0",
        "\u00be": "\u0ae5"
      },
      "scl,sc": {
        "=": "\u0ae0",
        R: "\u0ae1",
        "\u00db": "\u0add",
        F: "\u0a8c",
        H: "\u0ade",
        K: "\u0ad9",
        "\u00de": "\u0ad1",
        X: "\u0ad0",
        "\u00be": "\u0abd"
      },
      "l,": {
        "": "\u0aca1234567890-\u0ac3\u0acc\u0ac8\u0abe\u0ac0\u0ac2\u0aac\u0ab9\u0a97\u0aa6\u0a9c\u0aa1\u0abc\u0ac9\u0acb\u0ac7\u0acd\u0abf\u0ac1\u0aaa\u0ab0\u0a95\u0aa4\u0a9a\u0a9f\u0ac6\u0a82\u0aae\u0aa8\u0ab5\u0ab2\u0ab8,.\u0aaf"
      }
    }
  });
}).call(this);
