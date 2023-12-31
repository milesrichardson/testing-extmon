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
      this.F = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.B = /[\uac00-\ud7af]/g;
      this.D = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.H = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.I = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
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
      return b.replace(a.F, function (c) {
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
      b = c.replace(a.B, k(a.s, a));
      c = k(a.v, a);
      b = q(a, p(a, b)).replace(a.l, c).replace(a.H, c).replace(a.I, c).replace(a.m, c).replace(a.D, k(a.o, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "si",
    title: "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134",
    mappings: {
      ",sl": {
        "": "{{\u0dca\u200d\u0dbb}}1234567890-=\u0dd4\u0d85\u0dd0\u0dbb\u0d91\u0dc4\u0db8\u0dc3\u0daf\u0da0\u0da4;{{\u200d\u0dca}}\u0dca\u0dd2\u0dcf\u0dd9\u0da7\u0dba\u0dc0\u0db1\u0d9a\u0dad.'\u0d82\u0da2\u0da9\u0d89\u0db6\u0db4\u0dbd\u0d9c?"
      },
      "s,l": {
        "": '{{\u0dbb\u0dca\u200d}}!@#$%^&*()_+\u0dd6\u0d8b\u0dd1\u0d8d\u0d94\u0dc1\u0db9\u0dc2\u0db0\u0da1\u0da5:{{\u0dca\u200d}}\u0ddf\u0dd3\u0dd8\u0dc6\u0da8{{\u0dca\u200d\u0dba}}{{}}\u0dab\u0d9b\u0dae,"\u0d9e\u0da3\u0daa\u0d8a\u0db7\u0db5\u0dc5\u0d9d/'
      },
      "c,sc,cl,scl": {
        O: "\u0db3",
        "\u00be": "\u0d9f",
        V: "\u0dac",
        C: "\u0da6",
        X: "\u0d83",
        "\u00bc": "\u0d8f",
        A: "\u0df3",
        "\u00de": "\u0df4",
        Z: "\u0d80"
      }
    },
    transform: {
      "\u0d85\u0dcf": "\u0d86",
      "\u0d85\u0dd0": "\u0d87",
      "\u0d85\u0dd1": "\u0d88",
      "\u0d8b\u0ddf": "\u0d8c",
      "\u0d8d\u0dd8": "\u0d8e",
      "\u0d91\u0dca": "\u0d92",
      "\u0dd9\u0d91": "\u0d93",
      "\u0d94\u0dca": "\u0d95",
      "\u0d94\u0ddf": "\u0d96",
      "([\u0d9a-\u0dc6])\u0dd8\u0dd8": "$1\u0df2",
      "\u0dd9([\u0d9a-\u0dc6])": "$1\u0dd9",
      "([\u0d9a-\u0dc6])\u0dd9\u001d\u0dca": "$1\u0dda",
      "\u0dd9\u0dd9([\u0d9a-\u0dc6])": "$1\u0ddb",
      "([\u0d9a-\u0dc6])\u0dd9\u001d\u0dcf": "$1\u0ddc",
      "([\u0d9a-\u0dc6])\u0ddc\u001d\u0dca": "$1\u0ddd",
      "([\u0d9a-\u0dc6])\u0dd9\u001d\u0ddf": "$1\u0dde",
      "([\u0d9a-\u0dc6])(\u0dd9)\u001d((\u0dca\u200d[\u0dba\u0dbb])|(\u0dbb\u0dca\u200d))": "$1$3$2",
      "([\u0d9a-\u0dc6](\u0dca\u200d[\u0dba\u0dbb])|(\u0dbb\u0dca\u200d))\u0dd9\u001d\u0dca": "$1\u0dda",
      "([\u0d9a-\u0dc6](\u0dca\u200d[\u0dba\u0dbb])|(\u0dbb\u0dca\u200d))\u0dd9\u001d\u0dcf": "$1\u0ddc",
      "([\u0d9a-\u0dc6](\u0dca\u200d[\u0dba\u0dbb])|(\u0dbb\u0dca\u200d))\u0ddc\u001d\u0dca": "$1\u0ddd"
    }
  });
}).call(this);
