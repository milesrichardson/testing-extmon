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
      this.F = /[\u11a8-\u11c3]/g;
      this.D = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.A = /[\uac00-\ud7af]/g;
      this.C = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.G = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.H = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
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
      return b.replace(a.F, function (c) {
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
      b = q(a, p(a, b)).replace(a.l, c).replace(a.G, c).replace(a.H, c).replace(a.m, c).replace(a.C, k(a.o, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "km",
    title: "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA",
    mappings: {
      ",sl": {
        "": "\u00ab\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0\u17a5\u17b2\u1786\u17b9\u17c1\u179a\u178f\u1799\u17bb\u17b7\u17c4\u1795\u17c0\u17aa\u17ae\u17b6\u179f\u178a\u1790\u1784\u17a0\u17d2\u1780\u179b\u17be\u17cb\u178b\u1781\u1785\u179c\u1794\u1793\u1798{{\u17bb\u17c6}}\u17d4\u17ca{{S||\u1785\u1793\u17d2\u179b\u17c4\u17c7\u1798\u17be\u179b\u1798\u17b7\u1793\u1783\u17be\u1789 ||\u200b}}"
      },
      "s,l": {
        "": '\u00bb!\u17d7"\u17db%\u17cd\u17d0\u17cf()\u17cc=\u1788\u17ba\u17c2\u17ac\u1791\u17bd\u17bc\u17b8\u17c5\u1797\u17bf\u17a7\u17ad{{\u17b6\u17c6}}\u17c3\u178c\u1792\u17a2\u17c7\u1789\u1782\u17a1{{\u17c4\u17c7}}\u17c9\u178d\u1783\u1787{{\u17c1\u17c7}}\u1796\u178e\u17c6{{\u17bb\u17c7}}\u17d5?'
      },
      "sc,cl": {
        "": "{{}}\u17f1\u17f2\u17f3\u17f4\u17f5\u17f6\u17f7\u17f8\u17f9\u17f0{{}}{{}}\u19e0\u19e1\u19e2\u19e3\u19e4\u19e5\u19e6\u19e7\u19e8\u19e9\u19ea\u19eb{{}}\u19ec\u19ed\u19ee\u19ef\u19f0\u19f1\u19f2\u19f3\u19f4\u19f5\u19f6\u19f7\u19f8\u19f9\u19fa\u19fb\u19fc\u19fd\u19fe\u19ff"
      },
      "c,scl": {
        "": "{{S||\u21d4||\u200d}}{{S||\u2904||\u200c}}@\u17d1$\u20ac\u17d9\u17da*{}\u00d7\u17ce\u17dc\u17dd\u17af\u17ab\u17a8{{}}{{}}\u17a6\u17b1\u17b0\u17a9\u17b3\\",
        ";\u00de": "\u17d6\u17c8",
        "\u00bc\u00be\u00bf": ",./",
        AS: "+-",
        B: "\u179e",
        K: "\u179d"
      }
    }
  });
}).call(this);
