(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var f =
      '\u064b1234567890_+\u0652\u0651\u0670\u0691\u0679\u064e\u0626\u0650\u06c3\u064f}{|\u0622\u0635\u0688{{}}\u063a\u06be\u0636\u062e{{}}:"\u0630\u0698\u062b\u0638{{}}\u06ba\u0658{{}}\u066b\u061f',
    g = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    k = function (a, b, c) {
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
    l = function (a, b, c) {
      l = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g : k;
      return l.apply(null, arguments);
    },
    n = function (a) {
      var b = ["google", "elements", "keyboard", "hangulTransform"],
        c = m;
      b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
      for (var d; b.length && (d = b.shift()); )
        b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
    },
    p = function () {
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
    q = function (a, b) {
      return b.replace(a.I, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    r = function (a, b) {
      return b.replace(a.H, function (c) {
        return a.C[c];
      });
    },
    m = this || self;
  p.prototype.B = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  p.prototype.A = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  p.prototype.D = function (a, b, c, d) {
    return b + this.i[c] + d;
  };
  (function () {
    var a = new p();
    n(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.j[e];
        c += h ? h : e;
      }
      b = c.replace(a.F, l(a.B, a));
      c = l(a.D, a);
      b = r(a, q(a, b)).replace(a.u, c).replace(a.m, c).replace(a.o, c).replace(a.v, c).replace(a.G, l(a.A, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new p();
  google.elements.keyboard.loadme({
    id: "ur",
    direction: "rtl",
    title: "\u0627\u0631\u062f\u0648",
    mappings: {
      "": {
        "": "{{}}\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0-=\u0642\u0648\u0639\u0631\u062a\u06d2\u0621\u06cc\u06c1\u067e][\\\u0627\u0633\u062f\u0641\u06af\u062d\u062c\u06a9\u0644\u061b'\u0632\u0634\u0686\u0637\u0628\u0646\u0645\u060c\u06d4/"
      },
      s: { "": f },
      l: {
        "": "\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0-=\u0642\u0648\u0639\u0631\u062a\u06d2\u0621\u06cc\u06c1\u067e][\\\u0627\u0633\u062f\u0641\u06af\u062d\u062c\u06a9\u0644\u061b'\u0632\u0634\u0686\u0637\u0628\u0646\u0645\u060c\u06d4/"
      },
      sl: { "": f },
      c: {
        "": "{{}}!@#{{}}\u066a{{}}&*)({{}}{{}}{{}}\u0602\u0656\u0613\u0614\u0601\u0654\u0611{{}}\u0657{{}}{{}}{{}}\ufdf2\u0610\ufdfa{{}}{{}}\u0612\ufdfb{{}}{{}}{{}}{{}}\u060f\u060e\u0603{{}}\ufdfd\u0600{{}}<>"
      }
    }
  });
}).call(this);
