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
      this.F =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.W = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.F.length; a++) this.W[this.F[a]] = String.fromCharCode(4520 + a);
      this.ia = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.ba = /[\u11a8-\u11c3]/g;
      this.aa = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.Y = /[\uac00-\ud7af]/g;
      this.Z = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.ea = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.ca = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.da = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.fa = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.V = {
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
      this.X = {};
      for (var b in this.V) this.X[this.V[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.ba, function (c) {
        return a.F[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.aa, function (c) {
        return a.ia[c];
      });
    },
    l = this || self;
  n.prototype.ha = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.ga = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.ja = function (a, b, c, d) {
    return b + this.W[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.X[e];
        c += h ? h : e;
      }
      b = c.replace(a.Y, k(a.ha, a));
      c = k(a.ja, a);
      b = q(a, p(a, b)).replace(a.ea, c).replace(a.ca, c).replace(a.da, c).replace(a.fa, c).replace(a.Z, k(a.ga, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.V[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "kn_phone",
    title: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      0: "\u0ce6",
      1: "\u0ce7",
      2: "\u0ce8",
      3: "\u0ce9",
      4: "\u0cea",
      5: "\u0ceb",
      6: "\u0cec",
      7: "\u0ced",
      8: "\u0cee",
      9: "\u0cef",
      "([\u0c95-\u0cb9\u0cde])\u001d?u": "$1\u0ccc",
      "\u0cca\u001d?o": "\u0ccb",
      "\u0ccd\u001d?O": "\u0ccb",
      "\u0ccd\u001d?o": "\u0cca",
      "([\u0c95-\u0cb9\u0cde])\u001d?i": "$1\u0cc8",
      "\u0cc6\u001d?e": "\u0cc7",
      "\u0ccd\u001d?E": "\u0cc7",
      "\u0ccd\u001d?e": "\u0cc6",
      "\u0ccd\u0cb3\u0ccd\u0cb3\u0ccd\u001d?I": "\u0ce3",
      "\u0ccd\u0cb3\u0ccd\u001d?\\^I": "\u0ce3",
      "\u0ccd\u0cb3\u0ccd\u0cb3\u0ccd\u001d?i": "\u0ce2",
      "\u0ccd\u0cb3\u0ccd\u001d?\\^i": "\u0ce2",
      "\u0cc3\u001d?I": "\u0cc4",
      "\u0cc3\u001d?\\^I": "\u0cc4",
      "\u0cc3\u001d?R": "\u0cc4",
      "\u0cc3\u001d?\\^i": "\u0cc3",
      "\u0cc4\u001d?i": "\u0cc3",
      "\u0ccd\u001d?R": "\u0cc3",
      "\u0cc1\u001d?u": "\u0cc2",
      "\u0ccd\u001d?U": "\u0cc2",
      "\u0ccd\u001d?u": "\u0cc1",
      "\u0cbf\u001d?i": "\u0cc0",
      "\u0ccd\u001d?I": "\u0cc0",
      "\u0ccd\u001d?i": "\u0cbf",
      "([\u0c95-\u0cb9\u0cde])\u001d?a": "$1\u0cbe",
      "\u0ccd\u001d?A": "\u0cbe",
      "\u0ccd\u001d?a": "",
      "\\.a": "\u0cbd",
      "\\.m": "\u0c82",
      "\\.z": "\u0cbc",
      "\\.N": "\u0901",
      "\u0ccd\u001d?\\.h": "\u0ccd\u200c",
      "\\.h": "\u0ccd\u200c",
      M: "\u0c82",
      H: "\u0c83",
      "\u0c95\u0ccd\u001d?H": "\u0cf1",
      "\u0caa\u0ccd\u001d?H": "\u0cf2",
      "\u0c85\u001d?u": "\u0c94",
      "\u0c92\u001d?o": "\u0c93",
      O: "\u0c93",
      o: "\u0c92",
      "\u0c85\u001d?i": "\u0c90",
      "\u0c8e\u001d?e": "\u0c8f",
      E: "\u0c8f",
      e: "\u0c8e",
      "\u0cb3\u0ccd\u0cb3\u0ccd\u001d?I": "\u0ce1",
      "\u0cb3\u0ccd\u001d?\\^I": "\u0ce1",
      "\u0cb3\u0ccd\u0cb3\u0ccd\u001d?i": "\u0c8c",
      "\u0cb3\u0ccd\u001d?^i": "\u0c8c",
      "\u0ce0\u001d?I": "\u0ce0",
      "\u0ce0\u001d?^I": "\u0ce0",
      "\u0c8b\u001d?R": "\u0ce0",
      R: "\u0c8b",
      "\u0c89\u001d?u": "\u0c8a",
      U: "\u0c8a",
      u: "\u0c89",
      "\u0c87\u001d?i": "\u0c88",
      I: "\u0c88",
      i: "\u0c87",
      A: "\u0c86",
      "\u0c85\u001d?a": "\u0c86",
      a: "\u0c85",
      "\u0c95\u0ccd\u0cb7\u0ccd\u001d?h": "\u0c95\u0ccd\u0cb7\u0ccd",
      "\u0c97\u0ccd\u001d?Y": "\u0c9c\u0ccd\u0c9e\u0ccd",
      "\u0c9c\u0ccd\u001d?n": "\u0c9c\u0ccd\u0c9e\u0ccd",
      "\u0c95\u0ccd\u001d?S": "\u0c95\u0ccd\u0cb7\u0ccd",
      "\u0c95\u0ccd\u0cb8\u0ccd\u001d?h": "\u0c95\u0ccd\u0cb7\u0ccd",
      x: "\u0c95\u0ccd\u0cb7\u0ccd",
      h: "\u0cb9\u0ccd",
      "\u0cb7\u0ccd\u001d?h": "\u0cb7\u0ccd",
      S: "\u0cb7\u0ccd",
      z: "\u0cb6\u0ccd",
      "\u0cb8\u0ccd\u001d?h": "\u0cb6\u0ccd",
      s: "\u0cb8\u0ccd",
      v: "\u0cb5\u0ccd",
      w: "\u0cb5\u0ccd",
      L: "\u0cb3\u0ccd",
      "\\.L": "\u0cde\u0ccd",
      l: "\u0cb2\u0ccd",
      r: "\u0cb0\u0ccd",
      "\\.r": "\u0cb1\u0ccd",
      y: "\u0caf\u0ccd",
      "~N": "\u0c99\u0ccd",
      "\u0c97\u0ccd\u001d?h": "\u0c98\u0ccd",
      G: "\u0c98\u0ccd",
      "\\.g": "\u0c97\u0cbc\u0ccd",
      g: "\u0c97\u0ccd",
      "\\.K": "\u0c96\u0cbc\u0ccd",
      K: "\u0c96\u0ccd",
      "\u0c95\u0ccd\u001d?h": "\u0c96\u0ccd",
      q: "\u0c95\u0cbc\u0ccd",
      k: "\u0c95\u0ccd",
      "~n": "\u0c9e\u0ccd",
      "\u0c9c\u0ccd\u001d?h": "\u0c9d\u0ccd",
      J: "\u0c9d\u0ccd",
      "\\.j": "\u0c9c\u0cbc\u0ccd",
      j: "\u0c9c\u0ccd",
      "\u0c9a\u0ccd\u001d?h": "\u0c9b\u0ccd",
      Ch: "\u0c9b\u0ccd",
      ch: "\u0c9a\u0ccd",
      C: "\u0c9b\u0ccd",
      c: "\u0c9a\u0ccd",
      N: "\u0ca3\u0ccd",
      "\u0ca1\u0cbc\u0ccd\u001d?h": "\u0ca2\u0cbc\u0ccd",
      "\\.D": "\u0ca1\u0cbc\u0ccd",
      "\u0ca1\u0ccd\u001d?h": "\u0ca2\u0ccd",
      D: "\u0ca1\u0ccd",
      "\u0c9f\u0ccd\u001d?h": "\u0ca0\u0ccd",
      T: "\u0c9f\u0ccd",
      n: "\u0ca8\u0ccd",
      "\u0ca6\u0ccd\u001d?h": "\u0ca7\u0ccd",
      d: "\u0ca6\u0ccd",
      "\u0ca4\u0ccd\u001d?h": "\u0ca5\u0ccd",
      t: "\u0ca4\u0ccd",
      m: "\u0cae\u0ccd",
      "\u0cac\u0ccd\u001d?h": "\u0cad\u0ccd",
      B: "\u0cad\u0ccd",
      b: "\u0cac\u0ccd",
      f: "\u0cab\u0cbc\u0ccd",
      "\u0caa\u0ccd\u001d?h": "\u0cab\u0ccd",
      P: "\u0cab\u0ccd",
      p: "\u0caa\u0ccd",
      "\u0ca8\u0ccd\u001d?G": "\u0c82\u0c98\u0ccd",
      "\u0ca8\u0ccd\u001d?g": "\u0c82\u0c97\u0ccd",
      "\u0ca8\u0ccd\u001d?K": "\u0c82\u0c96\u0ccd",
      "\u0ca8\u0ccd\u001d?k": "\u0c82\u0c95\u0ccd",
      "\u0ca8\u0ccd\u001d?J": "\u0c82\u0c9d\u0ccd",
      "\u0ca8\u0ccd\u001d?j": "\u0c82\u0c9c\u0ccd",
      "\u0ca8\u0ccd\u001d?Ch": "\u0c82\u0c9b\u0ccd",
      "\u0ca8\u0ccd\u001d?ch": "\u0c82\u0c9a\u0ccd",
      "\u0ca8\u0ccd\u001d?C": "\u0c82\u0c9b\u0ccd",
      "\u0ca8\u0ccd\u001d?c": "\u0c82\u0c9a\u0ccd",
      "\u0ca8\u0ccd\u001d?D": "\u0c82\u0ca1\u0ccd",
      "\u0ca8\u0ccd\u001d?T": "\u0c82\u0c9f\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?g": "\u0c99\u0ccd\u0c97\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?k": "\u0c99\u0ccd\u0c95\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?j": "\u0c9e\u0ccd\u0c9c\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?Ch": "\u0c9e\u0ccd\u0c9b\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?ch": "\u0c9e\u0ccd\u0c9a\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?C": "\u0c9e\u0ccd\u0c9b\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?c": "\u0c9e\u0ccd\u0c9a\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?D": "\u0ca3\u0ccd\u0ca1\u0ccd",
      "\u0ca8\u0ccd\u0ca8\u0ccd\u001d?T": "\u0ca3\u0ccd\u0c9f\u0ccd",
      "\\|": "\u0964",
      "\u0964\u001d?\\|": "\u0965"
    },
    historyPruneRegex: "C|c"
  });
}).call(this);
