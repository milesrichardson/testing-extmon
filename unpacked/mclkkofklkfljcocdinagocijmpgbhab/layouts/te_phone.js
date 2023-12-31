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
    id: "te_phone",
    title: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      "([\u0c15-\u0c39])\u001d?u": "$1\u0c4c",
      "\u0c4a\u001d?o": "\u0c4b",
      "\u0c4d\u001d?O": "\u0c4b",
      "\u0c4d\u001d?o": "\u0c4a",
      "([\u0c15-\u0c39])\u001d?i": "$1\u0c48",
      "\u0c46\u001d?e": "\u0c40",
      "\u0c4d\u001d?E": "\u0c47",
      "\u0c4d\u001d?e": "\u0c46",
      "\u0c4d\u0c33\u0c4d\u0c33\u0c4d\u001d?I": "\u0c63",
      "\u0c4d\u0c33\u0c4d\u001d?\\^I": "\u0c63",
      "\u0c4d\u0c33\u0c4d\u0c33\u0c4d\u001d?i": "\u0c62",
      "\u0c4d\u0c33\u0c4d\u001d?\\^i": "\u0c62",
      "\u0c43\u001d?I": "\u0c44",
      "\u0c43\u001d?\\^I": "\u0c44",
      "\u0c43\u001d?R": "\u0c44",
      "\u0c43\u001d?\\^i": "\u0c43",
      "\u0c44\u001d?i": "\u0c43",
      "\u0c4d\u001d?R": "\u0c43",
      "\u0c41\u001d?u": "\u0c42",
      "\u0c4d\u001d?U": "\u0c42",
      "\u0c4d\u001d?u": "\u0c41",
      "\u0c3f\u001d?i": "\u0c40",
      "\u0c4d\u001d?I": "\u0c40",
      "\u0c4d\u001d?i": "\u0c3f",
      "([\u0c15-\u0c39])\u001d?a": "$1\u0c3e",
      "\u0c4d\u001d?A": "\u0c3e",
      "\u0c4d\u001d?a": "",
      "\\.a": "\u0c3d",
      "\\.m": "\u0c02",
      "\\.z": "",
      "\\.N": "\u0c01",
      "\u0c4d\u001d?\\.h": "\u0c4d\u200c",
      "\\.h": "\u0c4d\u200c",
      "@M": "\u0c02",
      "@h": "\u0c03",
      "@2": "\u0c3d",
      M: "\u0c02",
      H: "\u0c03",
      "\u0c15\u0c4d\u001d?H": "\u0cf1",
      "\u0c2a\u0c4d\u001d?H": "\u0cf2",
      "\u0c05\u001d?u": "\u0c14",
      "\u0c12\u001d?o": "\u0c13",
      O: "\u0c13",
      o: "\u0c12",
      "\u0c05\u001d?i": "\u0c10",
      "\u0c0e\u001d?e": "\u0c08",
      E: "\u0c0f",
      e: "\u0c0e",
      "\u0c33\u0c4d\u0c33\u0c4d\u001d?I": "\u0c61",
      "\u0c33\u0c4d\u001d?\\^I": "\u0c61",
      "\u0c33\u0c4d\u0c33\u0c4d\u001d?i": "\u0c0c",
      "\u0c33\u0c4d\u001d?i": "\u0c0c",
      "\u0c60\u001d?I": "\u0c60",
      "\u0c0b\u001d?R": "\u0c60",
      R: "\u0c0b",
      "\u0c09\u001d?u": "\u0c0a",
      U: "\u0c0a",
      u: "\u0c09",
      "\u0c07\u001d?i": "\u0c08",
      I: "\u0c08",
      i: "\u0c07",
      A: "\u0c06",
      "\u0c05\u001d?a": "\u0c06",
      a: "\u0c05",
      "\u0c15\u0c4d\u0c37\u0c4d\u001d?h": "\u0c15\u0c4d\u0c37\u0c4d",
      "\u0c17\u0c4d\u001d?Y": "\u0c1c\u0c4d\u0c1e\u0c4d",
      "\u0c1c\u0c4d\u001d?n": "\u0c1c\u0c4d\u0c1e\u0c4d",
      "\u0c15\u0c4d\u0c38\u0c4d\u001d?h": "\u0c15\u0c4d\u0c37\u0c4d",
      "\u0c15\u0c4d\u001d?S": "\u0c15\u0c4d\u0c37\u0c4d",
      x: "\u0c15\u0c4d\u0c37\u0c4d",
      h: "\u0c39\u0c4d",
      "\u0c36\u0c4d\u001d?h": "\u0c37\u0c4d",
      S: "\u0c36\u0c4d",
      z: "\u0c36\u0c4d",
      "\u0c38\u0c4d\u001d?h": "\u0c36\u0c4d",
      s: "\u0c38\u0c4d",
      v: "\u0c35\u0c4d",
      w: "\u0c35\u0c4d",
      L: "\u0c33\u0c4d",
      "\\.L": "\u0c33\u0c4d",
      l: "\u0c32\u0c4d",
      r: "\u0c30\u0c4d",
      "\\.r": "\u0c31\u0c4d",
      y: "\u0c2f\u0c4d",
      "~N": "\u0c19\u0c4d",
      "\u0c17\u0c4d\u001d?h": "\u0c18\u0c4d",
      G: "\u0c18\u0c4d",
      "\\.g": "\u0c17\u0c4d",
      g: "\u0c17\u0c4d",
      "\\.K": "\u0c16\u0c4d",
      K: "\u0c16\u0c4d",
      "\u0c15\u0c4d\u001d?h": "\u0c16\u0c4d",
      q: "\u0c15\u0c4d",
      k: "\u0c15\u0c4d",
      "~n": "\u0c1e\u0c4d",
      "\u0c1c\u0c4d\u001d?h": "\u0c1d\u0c4d",
      J: "\u0c1d\u0c4d",
      "\\.j": "\u0c1c\u0c4d",
      j: "\u0c1c\u0c4d",
      "\u0c1a\u0c4d\u001d?h": "\u0c1b\u0c4d",
      Ch: "\u0c1b\u0c4d",
      C: "\u0c1b\u0c4d",
      ch: "\u0c1a\u0c4d",
      c: "\u0c1a\u0c4d",
      N: "\u0c23\u0c4d",
      "\u0c21\u0c4d\u001d?h": "\u0c22\u0c4d",
      "\\.D": "\u0c21\u0c4d",
      D: "\u0c21\u0c4d",
      "\u0c1f\u0c4d\u001d?h": "\u0c20\u0c4d",
      T: "\u0c1f\u0c4d",
      n: "\u0c28\u0c4d",
      "\u0c26\u0c4d\u001d?h": "\u0c27\u0c4d",
      d: "\u0c26\u0c4d",
      "\u0c24\u0c4d\u001d?h": "\u0c25\u0c4d",
      t: "\u0c24\u0c4d",
      m: "\u0c2e\u0c4d",
      "\u0c2c\u0c4d\u001d?h": "\u0c2d\u0c4d",
      B: "\u0c2d\u0c4d",
      b: "\u0c2c\u0c4d",
      f: "\u0c2b\u0c4d",
      "\u0c2a\u0c4d\u001d?h": "\u0c2b\u0c4d",
      P: "\u0c2b\u0c4d",
      p: "\u0c2a\u0c4d",
      "\u0c28\u0c4d\u001d?G": "\u0c02\u0c18\u0c4d",
      "\u0c28\u0c4d\u001d?g": "\u0c02\u0c17\u0c4d",
      "\u0c28\u0c4d\u001d?K": "\u0c02\u0c16\u0c4d",
      "\u0c28\u0c4d\u001d?k": "\u0c02\u0c15\u0c4d",
      "\u0c28\u0c4d\u001d?J": "\u0c02\u0c1d\u0c4d",
      "\u0c28\u0c4d\u001d?j": "\u0c02\u0c1c\u0c4d",
      "\u0c28\u0c4d\u001d?Ch": "\u0c02\u0c1b\u0c4d",
      "\u0c28\u0c4d\u001d?ch": "\u0c02\u0c1a\u0c4d",
      "\u0c28\u0c4d\u001d?C": "\u0c02\u0c1b\u0c4d",
      "\u0c28\u0c4d\u001d?c": "\u0c02\u0c1a\u0c4d",
      "\u0c28\u0c4d\u001d?D": "\u0c02\u0c21\u0c4d",
      "\u0c28\u0c4d\u001d?T": "\u0c02\u0c1f\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?g": "\u0c19\u0c4d\u0c17\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?k": "\u0c19\u0c4d\u0c15\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?j": "\u0c1e\u0c4d\u0c1c\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?Ch": "\u0c1e\u0c4d\u0c1b\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?ch": "\u0c1e\u0c4d\u0c1a\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?C": "\u0c1e\u0c4d\u0c1b\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?c": "\u0c1e\u0c4d\u0c1a\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?D": "\u0c23\u0c4d\u0c21\u0c4d",
      "\u0c28\u0c4d\u0c28\u0c4d\u001d?T": "\u0c23\u0c4d\u0c1f\u0c4d",
      "\\|": "\u0964",
      "\u0964\u001d?\\|": "\u0965"
    },
    historyPruneRegex: "C|c"
  });
}).call(this);
