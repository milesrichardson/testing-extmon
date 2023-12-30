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
      this.ja = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.ca = /[\u11a8-\u11c3]/g;
      this.ba = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.Z = /[\uac00-\ud7af]/g;
      this.aa = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.fa = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.da = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.ea = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.ga = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.ca, function (c) {
        return a.F[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.ba, function (c) {
        return a.ja[c];
      });
    },
    l = this || self;
  n.prototype.ia = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.ha = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.ka = function (a, b, c, d) {
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
      b = c.replace(a.Z, k(a.ia, a));
      c = k(a.ka, a);
      b = q(a, p(a, b)).replace(a.fa, c).replace(a.da, c).replace(a.ea, c).replace(a.ga, c).replace(a.aa, k(a.ha, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.V[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "deva_phone",
    title: "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      0: "\u0966",
      1: "\u0967",
      2: "\u0968",
      3: "\u0969",
      4: "\u096a",
      5: "\u096b",
      6: "\u096c",
      7: "\u096d",
      8: "\u096e",
      9: "\u096f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?au": "$1\u094c",
      "\u094b\u001d?a": "\u0949",
      "\u094b\u001d?\\.c": "\u0949",
      "\u094b\u001d?o": "\u094a",
      "([\u0915-\u0939\u0958-\u095f])\u001d?O": "$1\u094b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?o": "$1\u094b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ai": "$1\u0948",
      "\u0947\u001d?e": "\u0946",
      "([\u0915-\u0939\u0958-\u095f])\u001d?E": "$1\u0947",
      "\u0947\u001d?\\.c": "\u0945",
      "([\u0915-\u0939\u0958-\u095f])\u001d?e": "$1\u0947",
      "([\u0915-\u0939\u0958-\u095f])\u094d\u0933\u094d\u0933\u001d?I": "$1\u0963",
      "([\u0915-\u0939\u0958-\u095f])\u094d\u0933\u001d?\\^I": "$1\u0963",
      "([\u0915-\u0939\u0958-\u095f])\u094d\u0933\u094d\u0933\u001d?i": "$1\u0962",
      "([\u0915-\u0939\u0958-\u095f])\u094d\u0933\u001d?\\^i": "$1\u0962",
      "\u0944\u001d?I": "\u0944",
      "\u0943\u001d?\\^I": "\u0944",
      "\u0943\u001d?R": "\u0944",
      "\u0943\u001d?\\^i": "\u0943",
      "\u0944\u001d?i": "\u0943",
      "([\u0915-\u0939\u0958-\u095f])\u001d?R": "$1\u0943",
      "\u0941\u001d?u": "\u0942",
      "([\u0915-\u0939\u0958-\u095f])\u001d?U": "$1\u0942",
      "([\u0915-\u0939\u0958-\u095f])\u001d?u": "$1\u0941",
      "\u093f\u001d?i": "\u0940",
      "([\u0915-\u0939\u0958-\u095f])\u001d?I": "$1\u0940",
      "([\u0915-\u0939\u0958-\u095f])\u001d?i": "$1\u093f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?A": "$1\u093e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aa": "$1\u093e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a": "$1",
      "\\.a": "\u093d",
      "\\.n": "\u0902",
      "\\.m": "\u0902",
      "\\.N": "\u0901",
      "\\.h": "\u094d\u200c",
      M: "\u0902",
      H: "\u0903",
      "\u0906\u090a\u001d?M": "\u0950",
      "\u0913\u001d?M": "\u0950",
      "\u0905\u001d?u": "\u0914",
      "\u0913\u001d?\\.c": "\u0911",
      "\u0913\u001d?o": "\u0912",
      O: "\u0913",
      o: "\u0913",
      "\u0905\u001d?i": "\u0910",
      "\u090f\u001d?e": "\u090e",
      E: "\u090f",
      "\u090f\u001d?\\.c": "\u090d",
      e: "\u090f",
      "\u0933\u094d\u0933\u001d?I": "\u0961",
      "\u0933\u001d?\\^I": "\u0961",
      "\u0933\u094d\u0933\u001d?i": "\u090c",
      "\u0933\u001d?\\^i": "\u090c",
      "\u0960\u001d?I": "\u0960",
      "\u090b\u001d?\\^I": "\u0960",
      "\u090b\u001d?R": "\u0960",
      "\u0960\u001d?i": "\u090b",
      "\u090b\u001d?\\^i": "\u090b",
      R: "\u090b",
      "\u0909\u001d?u": "\u090a",
      U: "\u090a",
      u: "\u0909",
      "\u0907\u001d?i": "\u0908",
      I: "\u0908",
      i: "\u0907",
      A: "\u0906",
      "\u0905\u001d?a": "\u0906",
      a: "\u0905",
      "\u0917\u001d?Y": "\u091c\u094d\u091e",
      "\u091c\u001d?n": "\u091c\u094d\u091e",
      "\u0915\u001d?S": "\u0915\u094d\u0937",
      "\u0915\u094d\u0938\u094d\u001d?h": "\u0915\u094d\u0937",
      x: "\u0915\u094d\u0937",
      h: "\u0939",
      "\u0937\u001d?h": "\u0937",
      S: "\u0937",
      z: "\u0936",
      "\u0938\u001d?h": "\u0936",
      s: "\u0938",
      v: "\u0935",
      w: "\u0935",
      L: "\u0933",
      "\\.L": "\u0934",
      l: "\u0932",
      r: "\u0930",
      "\\.r": "\u0931",
      Y: "\u095f",
      "\\.y": "\u095f",
      y: "\u092f",
      "~N": "\u0919",
      "\u0917\u001d?h": "\u0918",
      G: "\u0918",
      "\\.g": "\u095a",
      g: "\u0917",
      K: "\u0916",
      "\\.K": "\u0959",
      "\u0958\u001d?h": "\u0959",
      "\u0915\u001d?h": "\u0916",
      q: "\u0958",
      "\\.k": "\u0958",
      k: "\u0915",
      "~n": "\u091e",
      "\u091c\u001d?h": "\u091d",
      J: "\u091d",
      "\\.j": "\u095b",
      j: "\u091c",
      chh: "\u091b",
      Ch: "\u091b",
      ch: "\u091a",
      C: "\u091b",
      c: "\u091a",
      N: "\u0923",
      "\u095c\u001d?h": "\u095d",
      "\\.D": "\u095c",
      "\u0921\u001d?h": "\u0922",
      D: "\u0921",
      "\u091f\u001d?h": "\u0920",
      T: "\u091f",
      n: "\u0928",
      "\u0926\u001d?h": "\u0927",
      d: "\u0926",
      "\u0924\u001d?h": "\u0925",
      t: "\u0924",
      m: "\u092e",
      "\u092c\u001d?h": "\u092d",
      B: "\u092d",
      b: "\u092c",
      f: "\u095e",
      "\\.P": "\u095e",
      "\\.\u092a\u001d?h": "\u095e",
      "\u092a\u001d?h": "\u092b",
      P: "\u092b",
      p: "\u092a",
      "([\u0915-\u0939\u0958-\u095f])\u001d?x": "$1\u094d\u0915\u094d\u0937",
      "([\u0915-\u0939\u0958-\u095f])\u001d?h": "$1\u094d\u0939",
      "([\u0915-\u0939\u0958-\u095f])\u001d?S": "$1\u094d\u0937",
      "([\u0915-\u0939\u0958-\u095f])\u001d?z": "$1\u094d\u0936",
      "([\u0915-\u0939\u0958-\u095f])\u001d?s": "$1\u094d\u0938",
      "([\u0915-\u0939\u0958-\u095f])\u001d?v": "$1\u094d\u0935",
      "([\u0915-\u0939\u0958-\u095f])\u001d?w": "$1\u094d\u0935",
      "([\u0915-\u0939\u0958-\u095f])\u001d?L": "$1\u094d\u0933",
      "([\u0915-\u0939\u0958-\u095f])\u001d?\\.L": "$1\u094d\u0934",
      "([\u0915-\u0939\u0958-\u095f])\u001d?l": "$1\u094d\u0932",
      "([\u0915-\u0939\u0958-\u095f])\u001d?r": "$1\u094d\u0930",
      "([\u0915-\u0939\u0958-\u095f])\u001d?\\.r": "$1\u094d\u0931",
      "([\u0915-\u0939\u0958-\u095f])\u001d?Y": "$1\u094d\u095f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?\\.y": "$1\u094d\u095f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?y": "$1\u094d\u092f",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?~N": "$1\u094d\u0919",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?G": "$1\u094d\u0918",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?\\.g": "$1\u094d\u095a",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?g": "$1\u094d\u0917",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?K": "$1\u094d\u0916",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?\\.K": "$1\u094d\u0959",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?q": "$1\u094d\u0958",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?\\.k": "$1\u094d\u0958",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?k": "$1\u094d\u0915",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?~n": "$1\u094d\u091e",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?J": "$1\u094d\u091d",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?\\.j": "$1\u094d\u095b",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?j": "$1\u094d\u091c",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?chh": "$1\u094d\u091b",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?Ch": "$1\u094d\u091b",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?ch": "$1\u094d\u091a",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?C": "$1\u094d\u091b",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?c": "$1\u094d\u091a",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?N": "$1\u094d\u0923",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?\\.D": "$1\u094d\u095c",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?D": "$1\u094d\u0921",
      "([\u0915-\u0927\u0929-\u0939\u0958-\u095f])\u001d?T": "$1\u094d\u091f",
      "([\u0915-\u091b\u091d-\u0939\u0958-\u095f])\u001d?n": "$1\u094d\u0928",
      "([\u0915-\u0939\u0958-\u095f])\u001d?d": "$1\u094d\u0926",
      "([\u0915-\u0939\u0958-\u095f])\u001d?t": "$1\u094d\u0924",
      "([\u0915-\u0939\u0958-\u095f])\u001d?m": "$1\u094d\u092e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?B": "$1\u094d\u092d",
      "([\u0915-\u0939\u0958-\u095f])\u001d?b": "$1\u094d\u092c",
      "([\u0915-\u0939\u0958-\u095f])\u001d?f": "$1\u094d\u095e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?\\.P": "$1\u094d\u095e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?P": "$1\u094d\u092b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?p": "$1\u094d\u092a",
      "n\\.g": "\u0919\u094d\u095a",
      ng: "\u0919\u094d\u0917",
      nG: "\u0919\u094d\u0918",
      "n\\.k": "\u0919\u094d\u0958",
      nq: "\u0919\u094d\u0958",
      nK: "\u0919\u094d\u0916",
      nk: "\u0919\u094d\u0915",
      "n\\.j": "\u091e\u094d\u095b",
      nJ: "\u091e\u094d\u091d",
      nj: "\u091e\u094d\u091c",
      nC: "\u091e\u094d\u091b",
      nCh: "\u091e\u094d\u091b",
      nchh: "\u091e\u094d\u091b",
      nch: "\u091e\u094d\u091a",
      nc: "\u091e\u094d\u091a",
      "n\\.D": "\u0923\u094d\u095c",
      nD: "\u0923\u094d\u0921",
      nT: "\u0923\u094d\u091f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ax": "$1\u0915\u094d\u0937",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ah": "$1\u0939",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aS": "$1\u0937",
      "([\u0915-\u0939\u0958-\u095f])\u001d?az": "$1\u0936",
      "([\u0915-\u0939\u0958-\u095f])\u001d?as": "$1\u0938",
      "([\u0915-\u0939\u0958-\u095f])\u001d?av": "$1\u0935",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aw": "$1\u0935",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aL": "$1\u0933",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.L": "$1\u0934",
      "([\u0915-\u0939\u0958-\u095f])\u001d?al": "$1\u0932",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ar": "$1\u0930",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.r": "$1\u0931",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aY": "$1\u095f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.y": "$1\u095f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ay": "$1\u092f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a~N": "$1\u0919",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aG": "$1\u0918",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.g": "$1\u095a",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ag": "$1\u0917",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aK": "$1\u0916",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.K": "$1\u0959",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aq": "$1\u0958",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.k": "$1\u0958",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ak": "$1\u0915",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a~n": "$1\u091e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aJ": "$1\u091d",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.j": "$1\u095b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aj": "$1\u091c",
      "([\u0915-\u0939\u0958-\u095f])\u001d?achh": "$1\u091b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aCh": "$1\u091b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ach": "$1\u091a",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aC": "$1\u091b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ac": "$1\u091a",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aN": "$1\u0923",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.D": "$1\u095c",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aD": "$1\u0921",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aT": "$1\u091f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?an": "$1\u0928",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ad": "$1\u0926",
      "([\u0915-\u0939\u0958-\u095f])\u001d?at": "$1\u0924",
      "([\u0915-\u0939\u0958-\u095f])\u001d?am": "$1\u092e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aB": "$1\u092d",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ab": "$1\u092c",
      "([\u0915-\u0939\u0958-\u095f])\u001d?af": "$1\u095e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a\\.P": "$1\u095e",
      "([\u0915-\u0939\u0958-\u095f])\u001d?aP": "$1\u092b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?ap": "$1\u092a",
      "\\.(\\s)": "\u0964$1",
      "\\.\\.": "\u0964",
      "\\.,": "\u0965",
      "\\|": "\u0964",
      "\u0964\u001d?\\|": "\u0965",
      "\u0964\u001d?\\.": "\u2026"
    },
    historyPruneRegex: "n(\\.)?|c|ch|C|nc|nC|nch|\\.|a"
  });
}).call(this);
