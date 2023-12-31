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
      this.C = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.I = /[\u11a8-\u11c3]/g;
      this.H = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.F = /[\uac00-\ud7af]/g;
      this.G = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
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
      return b.replace(a.I, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.H, function (c) {
        return a.C[c];
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
  n.prototype.D = function (a, b, c, d) {
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
      b = c.replace(a.F, k(a.B, a));
      c = k(a.D, a);
      b = q(a, p(a, b)).replace(a.u, c).replace(a.m, c).replace(a.o, c).replace(a.v, c).replace(a.G, k(a.A, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "chr",
    title: "\u13e3\u13b3\u13a9",
    mappings: {
      "": {
        "": "`12\u13fd\uaba9\uabb6\uabac\uab9b\uaba6\uaba2\uab94\uab8f\u13fb\uab7a\uab83\uab71\uabab\uaba4\uabbf\uab74\uab72\uab73\uab91\uaba5\uab86\uabb9\uab70\uab9d\uaba7\uab79\uab76\uab7f\uabaa\uab88\uab85\uabb8'\uab7c\u13fc\uaba3\uab75\uab88\uab8e\uab95,.\uab92"
      },
      s: {
        "": '\uab9a\uab81\uab97\uabb7\uab80\uab89\uabad\uabb1\uab8a()\uab8c\uab8d\uab96\uabbb\uabb3\uab9f\uaba8\u13fa\uab7d\u13f9\uabbc\uabba\uaba1\uabb4\uabbe\uab9c\uab9e\uaba0\uab98\uabb5\uab82\uab7b\uab77\uab7e\uabb0"\uab93\uabbd\uabaf\uabae\u13f8\uab8b\uab87\uabb2\uab84\uab99'
      },
      c: {
        "": "`12\u13f5\u13d9\u13e6\u13dc\u13cb\u13d6\u13d2\u13c4\u13bf\u13f3\u13aa\u13b3\u13a1\u13db\u13d4\u13ef\u13a4\u13a2\u13a3\u13c1\u13d5\u13b6\u13e9\u13a0\u13cd\u13d7\u13a9\u13a6\u13af\u13da\u13b8\u13b5\u13e8'\u13ac\u13f4\u13d3\u13a5\u13a8\u13be\u13c5,.\u13c2"
      },
      cl: {
        "": "{{\u0300}}1234567890-={{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{\u0294}}{}{{\u030b}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}:{{\u0301}}{{\u0323}}{{\u0304}}{{\u0302}}{{}}{{\u030c}}{{\u0330}}{{\u0324}}{{\u0331}}"
      },
      sc: {
        "": '\u13ca\u13b1\u13c7\u13e7\u13b0\u13b9\u13dd\u13e1\u13ba()\u13bc\u13bd\u13c6\u13eb\u13e3\u13cf\u13d8\u13f2\u13ad\u13f1\u13ec\u13ea\u13d1\u13e4\u13ee\u13cc\u13ce\u13d0\u13c8\u13e5\u13b2\u13ab\u13a7\u13ae\u13e0"\u13c3\u13ed\u13df\u13de\u13f0\u13bb\u13b7\u13e2\u13b4\u13c9'
      },
      l: { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    }
  });
}).call(this);
