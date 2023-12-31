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
    id: "tr_f_accents",
    title: "T\u00fcrk\u00e7e - F",
    mappings: {
      "": { "": "+1234567890/-fg\u011f\u0131odrnhpqwxuiea\u00fctkmly\u015fj\u00f6vc\u00e7zsb.," },
      s: { "": "*!\"^$%&'()=?_FG\u011eIODRNHPQWXU\u0130EA\u00dcTKMLY\u015eJ\u00d6VC\u00c7ZSB:;" },
      l: { "": "+1234567890/-FG\u011eIODRNHPQWXU\u0130EA\u00dcTKMLY\u015eJ\u00d6VC\u00c7ZSB.," },
      sl: { "": "*!\"^$%&'()=?_fg\u011f\u0131odrnhpqwxuiea\u00fctkmly\u015fj\u00f6vc\u00e7zsb:;" },
      "c,sc,cl,scl": {
        "\u00c01234567890m=": "\u00ac\u00b9\u00b2#\u00bc\u00bd\u00be{[]}\\|",
        "QRYOP\u00db\u00dd\u00dc": "@\u00b6\u00a5\u00f8\u00a3\u00a8~`",
        "ASD;": "\u00e6\u00df\u20ac\u00b4",
        "ZXCVBM\u00bc\u00be\u00bf": "\u00ab\u00bb\u00a2<>\u00b5\u00d7\u00f7\u00ad"
      }
    },
    accents: { ",c,sl,scl,s,sc,l,cl": ["\u00c7,\u00e7,\u011e,\u011f,I,\u0131,\u0130,\u00d6,\u00f6,\u015e,\u015f,\u00dc,\u00fc"] },
    transform: {
      "\\|I": "I",
      "\\|i": "\u0131",
      ".I": "\u0130",
      '"O': "\u00d6",
      '"o': "\u00f6",
      '"U': "\u00dc",
      '"u': "\u00fc",
      ">C": "\u00c7",
      ">c": "\u00e7",
      "\\)G": "\u011e",
      "\\)g": "\u011f",
      ">S": "\u015e",
      ">s": "\u015f",
      "\\^a": "\u00e2",
      "\\^A": "\u00c2",
      "\\^e": "\u00ea",
      "\\^E": "\u00ca",
      "\\^i": "\u00ee",
      "\\^\u0130": "\u00ce",
      "\\^\u0131": "\u00ee",
      "\\^I": "\u00ce",
      "\\^o": "\u00f4",
      "\\^O": "\u00d4",
      "\\^u": "\u00fb",
      "\\^U": "\u00db",
      "\u00a8a": "\u00e4",
      "\u00a8A": "\u00c4",
      "\u00a8e": "\u00eb",
      "\u00a8E": "\u00cb",
      "\u00a8i": "\u00ef",
      "\u00a8\u0130": "\u00cf",
      "\u00a8\u0131": "\u00ef",
      "\u00a8I": "\u00cf",
      "\u00a8o": "\u00f6",
      "\u00a8O": "\u00d6",
      "\u00a8u": "\u00fc",
      "\u00a8U": "\u00dc",
      "\u00a8y": "\u00ff",
      "~a": "\u00e3",
      "~A": "\u00c3",
      "~n": "\u00f1",
      "~N": "\u00d1",
      "~o": "\u00f5",
      "~O": "\u00d5",
      "`a": "\u00e0",
      "`A": "\u00c0",
      "`e": "\u00e8",
      "`E": "\u00c8",
      "`i": "\u00ec",
      "`\u0130": "\u00cc",
      "`\u0131": "\u00ec",
      "`I": "\u00cc",
      "`o": "\u00f2",
      "`O": "\u00d2",
      "`u": "\u00f9",
      "`U": "\u00d9",
      "\u00b4a": "\u00e1",
      "\u00b4A": "\u00c1",
      "\u00b4e": "\u00e9",
      "\u00b4E": "\u00c9",
      "\u00b4i": "\u00ed",
      "\u00b4\u0130": "\u00cd",
      "\u00b4\u0131": "\u00ed",
      "\u00b4I": "\u00cd",
      "\u00b4o": "\u00f3",
      "\u00b4O": "\u00d3",
      "\u00b4u": "\u00fa",
      "\u00b4U": "\u00da"
    }
  });
}).call(this);
