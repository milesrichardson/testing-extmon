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
      this.J = /[\u11a8-\u11c3]/g;
      this.I = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.F = /[\uac00-\ud7af]/g;
      this.H = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.u = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.l = RegExp(
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
      return b.replace(a.J, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.I, function (c) {
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
      b = q(a, p(a, b)).replace(a.u, c).replace(a.l, c).replace(a.o, c).replace(a.v, c).replace(a.H, k(a.A, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "osa",
    title: "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf",
    mappings: {
      "": {
        "": "\u03011234567890-={{\ud801\udce6}}{{\ud801\udcf7}}{{\ud801\udcdf}}{{\ud801\udcf2}}{{\ud801\udcf5}}{{\ud801\udcfb}}{{\ud801\udcf6}}{{\ud801\udce3}}{{\ud801\udcea}}{{\ud801\udcec}}[]\\{{\ud801\udcd8}}{{\ud801\udcee}}{{\ud801\udcf0}}{{\u0358}}{{\ud801\udce2}}{{\ud801\udce1}}{{\ud801\udcdb}}{{\ud801\udce4}}{{\ud801\udce7}};'{{\ud801\udcfa}}{{\ud801\udcf8}}{{\ud801\udcdd}}{{\ud801\udcef}}{{\ud801\udcdc}}{{\ud801\udce9}}{{\ud801\udce8}},./"
      },
      s: {
        "": '\u030b!@#$%^&*()_+{{\ud801\udcbe}}{{\ud801\udccf}}{{\ud801\udcb7}}{{\ud801\udcca}}{{\ud801\udccd}}{{\ud801\udcd3}}{{\ud801\udcce}}{{\ud801\udcbb}}{{\ud801\udcc2}}{{\ud801\udcc4}}{}|{{\ud801\udcb0}}{{\ud801\udcc6}}{{\ud801\udcc8}}\u0304{{\ud801\udcba}}{{\ud801\udcb9}}{{\ud801\udcb3}}{{\ud801\udcbc}}{{\ud801\udcbf}}:"{{\ud801\udcd2}}{{\ud801\udcd0}}{{\ud801\udcb5}}{{\ud801\udcc7}}{{\ud801\udcb4}}{{\ud801\udcc1}}{{\ud801\udcc0}}<>?'
      },
      c: {
        "\u00c0": "`",
        1234567890: "\u00a1\u2122\u00a3\u00a2\u221e\u00a7\u00b6\u2022\u25b8\u00b0",
        m: "\u2013",
        "=": "\u2260",
        ERTY: "{{\ud801\udce0}}{{\ud801\udcf3}}{{\ud801\udcf4}}\u00a5",
        "IOP\u00db\u00dd\u00dc": "{{\ud801\udcd9}}{{\ud801\udceb}}{{\ud801\udced}}\u201c\u2018\u00ab",
        ASD: "{{\ud801\udcda}}{{\ud801\udcef}}{{\ud801\udcf1}}",
        G: "\u00a9",
        JK: "{{\ud801\udcdb\u0358}}{{\ud801\udce5}}",
        ";\u00de": "\u2026\u2039",
        XCV: "{{\ud801\udcf9}}{{\ud801\udcde}}\u2713",
        "\u00bc\u00be\u00bf": "\u2264\u2265\u00f7"
      },
      sc: {
        "": "~/\u20ac{{\u00be}}\u00bc\u00bd\u2020\u2021\u00b7\u201e\u201a",
        m: "\u2014",
        "=": "\u00b1",
        ERT: "{{\ud801\udcb8}}{{\ud801\udccb}}{{\ud801\udccc}}",
        "IOP\u00db\u00dd\u00dc": "{{\ud801\udcb1}}{{\ud801\udcc3}}{{\ud801\udcc5}}\u201d\u2019\u00bb",
        ASD: "{{\ud801\udcb2}}{{}}{{\ud801\udcc9}}",
        G: "\u00ae",
        JK: "{{}}{{\ud801\udcbd}}",
        ";\u00de": ":\u203a",
        XCV: "{{\ud801\udcd1}}{{\ud801\udcb6}}\u25c7",
        NM: "\u03c0\u03bc",
        "\u00bf": "\u00bf"
      },
      "l,sl": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    },
    transform: {
      "\ud801\udce1\ud801\udcec": "\ud801\udced",
      "\ud801\udce1\ud801\udcc4": "\ud801\udcc5",
      "\ud801\udcb9\ud801\udcec": "\ud801\udced",
      "\ud801\udcb9\ud801\udcc4": "\ud801\udcc5",
      "\ud801\udce1\ud801\udce4": "\ud801\udce5",
      "\ud801\udce1\ud801\udcbc": "\ud801\udcbd",
      "\ud801\udcb9\ud801\udce4": "\ud801\udce5",
      "\ud801\udcb9\ud801\udcbc": "\ud801\udcbd",
      "\ud801\udce1\ud801\udcf0": "\ud801\udcf1",
      "\ud801\udce1\ud801\udccd": "\ud801\udccc",
      "\ud801\udcb9\ud801\udcf0": "\ud801\udcf1",
      "\ud801\udcb9\ud801\udccd": "\ud801\udccc",
      "\ud801\udce1\ud801\udcf5": "\ud801\udcf4",
      "\ud801\udce1\ud801\udcc8": "\ud801\udcc9",
      "\ud801\udcb9\ud801\udcf5": "\ud801\udcf4",
      "\ud801\udcb9\ud801\udcc8": "\ud801\udcc9",
      "\ud801\udce1\ud801\udcdd": "\ud801\udcde",
      "\ud801\udce1\ud801\udcb5": "\ud801\udcb6",
      "\ud801\udcb9\ud801\udcdd": "\ud801\udcde",
      "\ud801\udcb9\ud801\udcb5": "\ud801\udcb6",
      "\ud801\udce1\ud801\udcf2": "\ud801\udcf3",
      "\ud801\udce1\ud801\udcca": "\ud801\udccb",
      "\ud801\udcb9\ud801\udcf2": "\ud801\udcf3",
      "\ud801\udcb9\ud801\udcca": "\ud801\udccb",
      "\ud801\udcb0\ud801\udcb0": "\ud801\udcb0\u0304",
      "\ud801\udcd8\ud801\udcd8": "\ud801\udcd8\u0304",
      "\ud801\udcb7\ud801\udcb7": "\ud801\udcb7\u0304",
      "\ud801\udcdf\ud801\udcdf": "\ud801\udcdf\u0304",
      "\ud801\udcc2\ud801\udcc2": "\ud801\udcc2\u0304",
      "\ud801\udcea\ud801\udcea": "\ud801\udcea\u0304",
      "\ud801\udcbb\ud801\udcbb": "\ud801\udcbb\u0304",
      "\ud801\udce3\ud801\udce3": "\ud801\udce3\u0304",
      "\ud801\udcce\ud801\udcce": "\ud801\udcce\u0304",
      "\ud801\udcf6\ud801\udcf6": "\ud801\udcf6\u0304",
      "\ud801\udcb0\ud801\udcbb": "\ud801\udcb1",
      "\ud801\udcb0\ud801\udce3": "\ud801\udcb1",
      "\ud801\udcd8\ud801\udce3": "\ud801\udcd9",
      "\ud801\udcd8\ud801\udcbb": "\ud801\udcd9",
      "\ud801\udcb0\ud801\udcbb\u0358": "\ud801\udcb2",
      "\ud801\udcb7\ud801\udcbb\u0358": "\ud801\udcb8",
      "\ud801\udcc2\ud801\udcbb\u0358": "\ud801\udcc3",
      "\ud801\udcb0\ud801\udce3\u0358": "\ud801\udcb2",
      "\ud801\udcb7\ud801\udce3\u0358": "\ud801\udcb8",
      "\ud801\udcc2\ud801\udce3\u0358": "\ud801\udcc3",
      "\ud801\udcd8\ud801\udce3\u0358": "\ud801\udcda",
      "\ud801\udcdf\ud801\udce3\u0358": "\ud801\udce0",
      "\ud801\udcea\ud801\udce3\u0358": "\ud801\udceb",
      "\ud801\udcd8\ud801\udcbb\u0358": "\ud801\udcda",
      "\ud801\udcdf\ud801\udcbb\u0358": "\ud801\udce0",
      "\ud801\udcea\ud801\udcbb\u0358": "\ud801\udceb",
      "\ud801\udcb1(\u001d)?\u0358": "\ud801\udcb2",
      "\ud801\udcd9(\u001d)?\u0358": "\ud801\udcda"
    }
  });
}).call(this);
