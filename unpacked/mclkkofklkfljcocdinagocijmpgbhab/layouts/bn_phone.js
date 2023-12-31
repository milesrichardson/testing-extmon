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
      this.B =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.F = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.B.length; a++) this.F[this.B[a]] = String.fromCharCode(4520 + a);
      this.ca = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.P = /[\u11a8-\u11c3]/g;
      this.O = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.J = /[\uac00-\ud7af]/g;
      this.K = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.X = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.V = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.W = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.Z = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.C = {
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
      this.G = {};
      for (var b in this.C) this.G[this.C[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.P, function (c) {
        return a.B[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.O, function (c) {
        return a.ca[c];
      });
    },
    l = this || self;
  n.prototype.ba = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.aa = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.da = function (a, b, c, d) {
    return b + this.F[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.G[e];
        c += h ? h : e;
      }
      b = c.replace(a.J, k(a.ba, a));
      c = k(a.da, a);
      b = q(a, p(a, b)).replace(a.X, c).replace(a.V, c).replace(a.W, c).replace(a.Z, c).replace(a.K, k(a.aa, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.C[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "bn_phone",
    title: "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      c: {
        "": "\u0982\u0981\u09bc\u0983\u09fa\u09f8\u09f9\u09f2\u09f3\u09e6\u09f4\u09e7\u09f5\u09e8\u09f6\u09e9\u09f7\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u0985\u0986\u0987\u0988\u0989\u098a\u098b\u09e0\u098c\u09e1\u098f\u0990\u0993\u0994\u0995\u0996\u0997\u0998\u0999\u099a\u099b\u099c\u099d\u099e"
      },
      sc: {
        "": "\u099f\u09a0\u09a1\u09dc\u09a2\u09dd\u09a3\u09a4\u09ce\u09a5\u09a6\u09a7\u09a8\u09aa\u09ab\u09ac\u09ad\u09ae\u09af\u09df\u09b0\u09f0\u09b2\u09f1\u09b6\u09b7\u09b8\u09b9\u09bd\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c4\u09e2\u09e3\u09c7\u09c8\u09cb\u09cc\u09cd\u09d7"
      }
    },
    transform: {
      "\u09cd\u001d?\\.c": "\u09c7",
      "\u0986\u098a\u001d?M": "\u0993\u0982",
      "\u09dc\u001d?\\^i": "\u098b",
      "\u09dc\u001d?\\^I": "\u09e0",
      "\u09b2\u001d?\\^i": "\u098c",
      "\u09b2\u001d?\\^I": "\u09e1",
      "\u099a\u001d?h": "\u099b",
      "\u0995\u09cd\u09b7\u001d?h": "\u0995\u09cd\u09b7",
      "\\.n": "\u0982",
      "\\.m": "\u0982",
      "\\.N": "\u0981",
      "\\.h": "\u09cd\u200c",
      "\\.a": "\u09bd",
      OM: "\u0993\u0982",
      "\u0985\u001d?a": "\u0986",
      "\u0987\u001d?i": "\u0988",
      "\u098f\u001d?e": "\u0988",
      "\u0989\u001d?u": "\u098a",
      "\u0993\u001d?o": "\u098a",
      "\u0985\u001d?i": "\u0990",
      "\u0985\u001d?u": "\u0994",
      "\u0995\u001d?h": "\u0996",
      "\u0997\u001d?h": "\u0998",
      "~N": "\u0999",
      ch: "\u099a",
      Ch: "\u099b",
      "\u099c\u001d?h": "\u099d",
      "~n": "\u099e",
      "\u099f\u001d?h": "\u09a0",
      "\u09a1\u001d?h": "\u09a2",
      "\u09a4\u001d?h": "\u09a5",
      "\u09a6\u001d?h": "\u09a7",
      "\u09aa\u001d?h": "\u09ab",
      "\u09ac\u001d?h": "\u09ad",
      "\u09b8\u001d?h": "\u09b6",
      "\u09b6\u001d?h": "\u09b7",
      "~h": "\u09cd\u09b9",
      "\u09dc\u001d?h": "\u09dd",
      "\u0995\u001d?S": "\u0995\u09cd\u09b7",
      GY: "\u099c\u09cd\u099e",
      M: "\u0982",
      H: "\u0983",
      a: "\u0985",
      A: "\u0986",
      i: "\u0987",
      I: "\u0988",
      u: "\u0989",
      U: "\u098a",
      e: "\u098f",
      o: "\u0993",
      k: "\u0995",
      g: "\u0997",
      j: "\u099c",
      T: "\u099f",
      D: "\u09a1",
      N: "\u09a3",
      t: "\u09a4",
      d: "\u09a6",
      n: "\u09a8",
      p: "\u09aa",
      b: "\u09ac",
      m: "\u09ae",
      y: "\u09af",
      r: "\u09b0",
      l: "\u09b2",
      L: "\u09b2",
      v: "\u09ac",
      w: "\u09ac",
      S: "\u09b6",
      s: "\u09b8",
      h: "\u09b9",
      R: "\u09dc",
      Y: "\u09df",
      x: "\u0995\u09cd\u09b7",
      "([\u0995-\u09b9\u09dc-\u09df])\u001da": "$1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daa": "$1\u09be",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dai": "$1\u09c8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dau": "$1\u09cc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dA": "$1\u09be",
      "([\u0995-\u09b9\u09dc-\u09df])\u001di": "$1\u09bf",
      "\u09bf\u001di": "\u09c0",
      "\u09c7\u001de": "\u09c0",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dI": "$1\u09c0",
      "([\u0995-\u09b9\u09dc-\u09df])\u001du": "$1\u09c1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dU": "$1\u09c2",
      "\u09c1\u001du": "\u09c2",
      "\u09cb\u001do": "\u09c2",
      "([\u0995-\u09b9\u09dc-\u09df])\u09cd\u09b0\u09bc\u09cd\u09b0\u09bc\u001di": "$1\u09c3",
      "([\u0995-\u09b9\u09dc-\u09df])\u09cd\u09b0\u09bc^i": "$1\u09c3",
      "([\u0995-\u09b9\u09dc-\u09df])\u09cd\u09b0\u09bc\u09cd\u09b0\u09bc\u001dI": "$1\u09c4",
      "([\u0995-\u09b9\u09dc-\u09df])\u09cd\u09b0\u09bc^I": "$1\u09c4",
      "\u09b0\u09bc\u09cd\u09b0\u09bc\u001di": "\u098b",
      "\u09b0\u09bc\u09cd\u09b0\u09bc\u001dI": "\u09e0",
      "\u09b2\u09cd\u09b2\u001di": "\u098c",
      "\u09b2\u09cd\u09b2\u001dI": "\u09e1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001de": "$1\u09c7",
      "([\u0995-\u09b9\u09dc-\u09df])\u001do": "$1\u09cb",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dk": "$1\u09cd\u0995",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dg": "$1\u09cd\u0997",
      "([\u0995-\u09b9\u09dc-\u09df])\u001d~N": "$1\u09cd\u0999",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dch": "$1\u09cd\u099a",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dCh": "$1\u09cd\u099b",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dj": "$1\u09cd\u099c",
      "([\u0995-\u09b9\u09dc-\u09df])\u001d~n": "$1\u09cd\u099e",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dT": "$1\u09cd\u099f",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dD": "$1\u09cd\u09a1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dN": "$1\u09cd\u09a3",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dt": "$1\u09cd\u09a4",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dd": "$1\u09cd\u09a6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dn": "$1\u09cd\u09a8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dp": "$1\u09cd\u09aa",
      "([\u0995-\u09b9\u09dc-\u09df])\u001db": "$1\u09cd\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dm": "$1\u09cd\u09ae",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dr": "$1\u09cd\u09b0",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dl": "$1\u09cd\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dL": "$1\u09cd\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dv": "$1\u09cd\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dw": "$1\u09cd\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dS": "$1\u09cd\u09b6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001ds": "$1\u09cd\u09b8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dh": "$1\u09cd\u09b9",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dR": "$1\u09cd\u09b0\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dq": "$1\u09cd\u0995\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dKh": "$1\u09cd\u0996\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dG": "$1\u09cd\u0997\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dz": "$1\u09cd\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dJ": "$1\u09cd\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001d.D": "$1\u09cd\u09a1\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001df": "$1\u09cd\u09ab\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dy": "$1\u09cd\u09af\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dx": "$1\u09cd\u0995\u09cd\u09b7",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dak": "$1\u0995",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dag": "$1\u0997",
      "([\u0995-\u09b9\u09dc-\u09df])\u001da~N": "$1\u0999",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dach": "$1\u099a",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daCh": "$1\u099b",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daj": "$1\u099c",
      "([\u0995-\u09b9\u09dc-\u09df])\u001da~n": "$1\u099e",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daT": "$1\u099f",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daD": "$1\u09a1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daN": "$1\u09a3",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dat": "$1\u09a4",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dad": "$1\u09a6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dan": "$1\u09a8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dap": "$1\u09aa",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dab": "$1\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dam": "$1\u09ae",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dar": "$1\u09b0",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dal": "$1\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daL": "$1\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dav": "$1\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daw": "$1\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daS": "$1\u09b6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001das": "$1\u09b8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dah": "$1\u09b9",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daR": "$1\u09b0\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daq": "$1\u0995\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daKh": "$1\u0996\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daG": "$1\u0997\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daz": "$1\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daJ": "$1\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001da.D": "$1\u09a1\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daf": "$1\u09ab\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001day": "$1\u09af\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001dax": "$1\u0995\u09cd\u09b7",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daak": "$1\u09be\u0995",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daag": "$1\u09be\u0997",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daa~N": "$1\u09be\u0999",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daach": "$1\u09be\u099a",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaCh": "$1\u09be\u099b",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaj": "$1\u09be\u099c",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daa~n": "$1\u09be\u099e",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaT": "$1\u09be\u099f",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaD": "$1\u09be\u09a1",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaN": "$1\u09be\u09a3",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daat": "$1\u09be\u09a4",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daad": "$1\u09be\u09a6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daan": "$1\u09be\u09a8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daap": "$1\u09be\u09aa",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daab": "$1\u09be\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daam": "$1\u09be\u09ae",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daar": "$1\u09be\u09b0",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daal": "$1\u09be\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaL": "$1\u09be\u09b2",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daav": "$1\u09be\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaw": "$1\u09be\u09ac",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaS": "$1\u09be\u09b6",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daas": "$1\u09be\u09b8",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daah": "$1\u09be\u09b9",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaR": "$1\u09be\u09b0\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaq": "$1\u09be\u0995\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaKh": "$1\u09be\u0996\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaG": "$1\u09be\u0997\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaz": "$1\u09be\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaJ": "$1\u09be\u099c\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daa.D": "$1\u09be\u09a1\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daaf": "$1\u09be\u09ab\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daay": "$1\u09be\u09af\u09bc",
      "([\u0995-\u09b9\u09dc-\u09df])\u001daax": "$1\u09be\u0995\u09cd\u09b7"
    },
    historyPruneRegex: "a|aa|ac|aaC|aac|a\\.|aK|aC|aaK|aS|aaS|aa~|aa\\.|a~"
  });
}).call(this);
