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
    id: "sa_phone",
    title: "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
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
      "([\u0915-\u0939\u0958-\u095f])\u001d?u": "$1\u094c",
      "\u094b\u001d?a": "\u0949",
      "\u094b\u001d?\\.c": "\u0949",
      "\u094b\u001d?o": "\u094a",
      "\u094d\u001d?O": "\u094b",
      "\u094d\u001d?o": "\u094b",
      "([\u0915-\u0939\u0958-\u095f])\u001d?i": "$1\u0948",
      "\u0947\u001d?e": "\u0946",
      "\u094d\u001d?E": "\u0947",
      "\u0947\u001d?\\.c": "\u0945",
      "\u094d\u001d?e": "\u0947",
      "\u094d\u0933\u094d\u0933\u094d\u001d?I": "\u0963",
      "\u094d\u0933\u094d\u001d?\\^I": "\u0963",
      "\u094d\u0933\u094d\u0933\u094d\u001d?i": "\u0962",
      "\u094d\u0933\u094d\u001d?\\^i": "\u0962",
      "\u0944\u001d?I": "\u0944",
      "\u0943\u001d?\\^I": "\u0944",
      "\u0943\u001d?R": "\u0944",
      "\u0943\u001d?\\^i": "\u0943",
      "\u0944\u001d?i": "\u0943",
      "\u094d\u001d?R": "\u0943",
      "\u0941\u001d?u": "\u0942",
      "\u094d\u001d?U": "\u0942",
      "\u094d\u001d?u": "\u0941",
      "\u093f\u001d?i": "\u0940",
      "\u094d\u001d?I": "\u0940",
      "\u094d\u001d?i": "\u093f",
      "([\u0915-\u0939\u0958-\u095f])\u001d?a": "$1\u093e",
      "\u094d\u001d?A": "\u093e",
      "\u094d\u001d?a": "",
      "\\.a": "\u093d",
      "\\.n": "\u0902",
      "\\.m": "\u0902",
      "\\.N": "\u0901",
      "\\.h": "\u094d\u200c",
      M: "\u0902",
      H: "\u0903",
      "\u0915\u094d\u001d?H": "\u1cf5",
      "\u092a\u094d\u001d?H": "\u1cf6",
      "\u0906\u090a\u001d?M": "\u0950",
      "\u0913\u001d?M": "\u0950",
      "\u0905\u001d?u": "\u0914",
      "\u0913\u001d?\\.c": "\u0911",
      "\u0913\u001d?a": "\u0911",
      "\u0913\u001d?o": "\u0912",
      O: "\u0913",
      o: "\u0913",
      "\u0905\u001d?i": "\u0910",
      "\u090f\u001d?e": "\u090e",
      E: "\u090f",
      "\u090f\u001d?\\.c": "\u090d",
      "\u090f\u001d?a": "\u090d",
      e: "\u090f",
      "\u0933\u094d\u0933\u094d\u001d?I": "\u0961",
      "\u0933\u094d\u001d?\\^I": "\u0961",
      "\u0933\u094d\u0933\u094d\u001d?i": "\u090c",
      "\u0933\u094d\u001d?\\^i": "\u090c",
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
      "\u0915\u094d\u0937\u094d\u001d?h": "\u0915\u094d\u0937\u094d",
      "\u0915\u094d\u0938\u094d\u001d?h": "\u0915\u094d\u0937\u094d",
      "\u0917\u094d\u001d?Y": "\u091c\u094d\u091e\u094d",
      "\u091c\u094d\u001d?n": "\u091c\u094d\u091e\u094d",
      "\u0915\u094d\u001d?S": "\u0915\u094d\u0937\u094d",
      x: "\u0915\u094d\u0937\u094d",
      "\u0938\u094d\u001d?c": "\u0936\u094d\u091a\u094d",
      h: "\u0939\u094d",
      "\u0937\u094d\u001d?h": "\u0937\u094d",
      S: "\u0937\u094d",
      z: "\u0936\u094d",
      "\u0938\u094d\u001d?h": "\u0936\u094d",
      s: "\u0938\u094d",
      v: "\u0935\u094d",
      w: "\u0935\u094d",
      L: "\u0933\u094d",
      "\\.L": "\u0934\u094d",
      l: "\u0932\u094d",
      r: "\u0930\u094d",
      "\\.r": "\u0931\u094d",
      Y: "\u095f\u094d",
      "\\.y": "\u095f\u094d",
      y: "\u092f\u094d",
      "~N": "\u0919\u094d",
      "\u0917\u094d\u001d?h": "\u0918\u094d",
      G: "\u0918\u094d",
      "\\.g": "\u095a\u094d",
      g: "\u0917\u094d",
      K: "\u0916\u094d",
      "\\.K": "\u0959\u094d",
      "\u0958\u094d\u001d?h": "\u0959\u094d",
      "\u0915\u094d\u001d?h": "\u0916\u094d",
      q: "\u0958\u094d",
      "\\.k": "\u0958\u094d",
      k: "\u0915\u094d",
      "~n": "\u091e\u094d",
      "\u091c\u094d\u001d?h": "\u091d\u094d",
      J: "\u091d\u094d",
      "\\.j": "\u095b\u094d",
      j: "\u091c\u094d",
      chh: "\u091b\u094d",
      Ch: "\u091b\u094d",
      ch: "\u091a\u094d",
      C: "\u091b\u094d",
      c: "\u091a\u094d",
      N: "\u0923\u094d",
      "\u095c\u094d\u001d?h": "\u095d\u094d",
      "\\.D": "\u095c\u094d",
      "\u0921\u094d\u001d?h": "\u0922\u094d",
      D: "\u0921\u094d",
      "\u091f\u094d\u001d?h": "\u0920\u094d",
      T: "\u091f\u094d",
      n: "\u0928\u094d",
      "\u0926\u094d\u001d?h": "\u0927\u094d",
      d: "\u0926\u094d",
      "\u0924\u094d\u001d?h": "\u0925\u094d",
      t: "\u0924\u094d",
      m: "\u092e\u094d",
      "\u092c\u094d\u001d?h": "\u092d\u094d",
      B: "\u092d\u094d",
      b: "\u092c\u094d",
      f: "\u095e\u094d",
      "\\.P": "\u095e\u094d",
      "\\.\u092a\u094d\u001d?h": "\u095e\u094d",
      "\u092a\u094d\u001d?h": "\u092b\u094d",
      P: "\u092b\u094d",
      p: "\u092a\u094d",
      "\u0928\u094d\u001d?\\.g": "\u0919\u094d\u095a\u094d",
      "\u0928\u094d\u001d?g": "\u0919\u094d\u0917\u094d",
      "\u0928\u094d\u001d?G": "\u0919\u094d\u0918\u094d",
      "\u0928\u094d\u001d?\\.k": "\u0919\u094d\u0958\u094d",
      "\u0928\u094d\u001d?q": "\u0919\u094d\u0958\u094d",
      "\u0928\u094d\u001d?K": "\u0919\u094d\u0916\u094d",
      "\u0928\u094d\u001d?k": "\u0919\u094d\u0915\u094d",
      "\u0928\u094d\u001d?\\.j": "\u091e\u094d\u095b\u094d",
      "\u0928\u094d\u001d?J": "\u091e\u094d\u091d\u094d",
      "\u0928\u094d\u001d?j": "\u091e\u094d\u091c\u094d",
      nC: "\u091e\u094d\u091b\u094d",
      nCh: "\u091e\u094d\u091b\u094d",
      nchh: "\u091e\u094d\u091b\u094d",
      nch: "\u091e\u094d\u091a\u094d",
      nc: "\u091e\u094d\u091a\u094d",
      "n\\.D": "\u0923\u094d\u095c\u094d",
      nD: "\u0923\u094d\u0921\u094d",
      nT: "\u0923\u094d\u091f\u094d",
      "\\.(\\s)": "\u0964$1",
      "\\.\\.": "\u0964",
      "\\.,": "\u0965",
      "\\|": "\u0964",
      "\u0964\u001d?\\|": "\u0965",
      "\u0964\u001d?\\.": "\u2026",
      "''": "\u0951",
      _: "\u0952"
    },
    historyPruneRegex: "n|c|ch|C|nc|nC|nch"
  });
}).call(this);
