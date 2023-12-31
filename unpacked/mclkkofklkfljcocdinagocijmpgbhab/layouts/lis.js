(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var f = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./",
    g = '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?',
    k = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    l = function (a, b, c) {
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
    m = function (a, b, c) {
      m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? k : l;
      return m.apply(null, arguments);
    },
    p = function (a) {
      var b = ["google", "elements", "keyboard", "hangulTransform"],
        c = n;
      b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
      for (var d; b.length && (d = b.shift()); )
        b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
    },
    q = function () {
      this.g =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.i = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.i[this.g[a]] = String.fromCharCode(4520 + a);
      this.A = {
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
      this.C = /[\uac00-\ud7af]/g;
      this.D = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.m = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.H = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.o = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
    r = function (a, b) {
      return b.replace(a.G, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    t = function (a, b) {
      return b.replace(a.F, function (c) {
        return a.A[c];
      });
    },
    n = this || self;
  q.prototype.v = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  q.prototype.u = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  q.prototype.B = function (a, b, c, d) {
    return b + this.i[c] + d;
  };
  (function () {
    var a = new q();
    p(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.j[e];
        c += h ? h : e;
      }
      b = c.replace(a.C, m(a.v, a));
      c = m(a.B, a);
      b = t(a, r(a, b)).replace(a.m, c).replace(a.H, c).replace(a.l, c).replace(a.o, c).replace(a.D, m(a.u, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new q();
  google.elements.keyboard.loadme({
    id: "lis",
    title: "\ua4e1\ua4f2\ua4e2\ua4f4",
    mappings: {
      "": {
        "": "`1234567890-=\ua4ff\ua4ea\ua4f0\ua4e3\ua4d4\ua4ec\ua4f4\ua4f2\ua4f3\ua4d1[]\\\ua4ee\ua4e2\ua4d3\ua4dd\ua4d6\ua4e7\ua4d9\ua4d7\ua4e1\ua4fc\u02bc\ua4dc\ua4eb\ua4da\ua4e6\ua4d0\ua4e0\ua4df\ua4f9\ua4f8/"
      },
      s: {
        "": '~!@#$%^&*()_+\ua4ff{{\ua4f9\ua4fc}}\ua4f1\ua4e4\ua4d5\ua4fb\ua4f5\ua4fe\u02cd\ua4d2{}|\ua4ef{{\ua4f8\ua4fc}}\ua4f7\ua4de\ua4e8\ua4fa\ua4e9\ua4d8\ua4f6\ua4fd"\ua4dc\ua4eb\ua4db\ua4e5\ua4ed\ua4e0-<>?'
      },
      c: { "": f },
      sc: { "": g },
      "l,cl": { "": f },
      "sl,scl": { "": g }
    }
  });
}).call(this);
