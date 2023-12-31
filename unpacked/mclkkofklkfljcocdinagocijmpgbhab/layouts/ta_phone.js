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
      this.fa = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.X = /[\u11a8-\u11c3]/g;
      this.W = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.P = /[\uac00-\ud7af]/g;
      this.V = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.ba = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.Z = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.aa = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.ca = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      this.K = {};
      for (var b in this.C) this.K[this.C[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.X, function (c) {
        return a.B[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.W, function (c) {
        return a.fa[c];
      });
    },
    l = this || self;
  n.prototype.ea = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.da = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.ga = function (a, b, c, d) {
    return b + this.F[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.K[e];
        c += h ? h : e;
      }
      b = c.replace(a.P, k(a.ea, a));
      c = k(a.ga, a);
      b = q(a, p(a, b)).replace(a.ba, c).replace(a.Z, c).replace(a.aa, c).replace(a.ca, c).replace(a.V, k(a.da, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.C[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "ta_phone",
    title: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      c: {
        "": "\u0b82\u0bf3\u0bf4\u0bf5\u0bf6\u0bf7\u0bf8\u0bfa\u0bf0\u0bf1\u0bf2\u0bf9\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0bd0\u0b83\u0b85\u0b86\u0b87\u0b88\u0b89\u0b8a\u0b8e\u0b8f\u0b90\u0b92\u0b93\u0b94\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8\u0ba9\u0baa"
      },
      sc: {
        "": "\u0bae\u0baf\u0bb0\u0bb1\u0bb2\u0bb3\u0bb4\u0bb5\u0bb6\u0bb7\u0bb8\u0bb9\u0bbe\u0bbf\u0bc0\u0bc1\u0bc2\u0bc6\u0bc7\u0bc8\u0bca\u0bcb\u0bcc\u0bcd\u0bd7"
      }
    },
    transform: {
      "\u0bcd\u0bb1\u0bcd\u0bb1\u0bcd\u001d?i": "\u0bcd\u0bb0\u0bbf",
      "\u0bcd\u0bb1\u0bcd\u001d?\\^i": "\u0bcd\u0bb0\u0bbf",
      "\u0bcd\u0bb1\u0bcd\u0bb1\u0bcd\u001d?I": "\u0bcd\u0bb0\u0bbf",
      "\u0bcd\u0bb1\u0bcd\u001d?\\^I": "\u0bcd\u0bb0\u0bbf",
      "\u0bcd\u0b85\u001d?a": "\u0bbe",
      "\u0bbf\u001d?i": "\u0bc0",
      "\u0bc6\u001d?e": "\u0bc0",
      "\u0bc1\u001d?u": "\u0bc2",
      "\u0bca\u001d?o": "\u0bc2",
      "\u0bcd\u0b85\u001d?i": "\u0bc8",
      "\u0bcd\u0b85\u001d?u": "\u0bcc",
      "\u0bca\u001d?u": "\u0bcc",
      "\u0bcd\u001d?a": "",
      "\u0bcd\u001d?A": "\u0bbe",
      "\u0bcd\u001d?i": "\u0bbf",
      "\u0bcd\u001d?I": "\u0bc0",
      "\u0bcd\u001d?u": "\u0bc1",
      "\u0bcd\u001d?U": "\u0bc2",
      "\u0bcd\u001d?e": "\u0bc6",
      "\u0bcd\u001d?E": "\u0bc7",
      "\u0bcd\u001d?o": "\u0bca",
      "\u0bcd\u001d?O": "\u0bcb",
      "\u0ba9\u0bcd\u001d?ch": "\u0b9e\u0bcd\u0b9a\u0bcd",
      "\u0b95\u0bcd\u0b9a\u0bcd\u001d?h": "\u0b95\u0bcd\u0bb7\u0bcd",
      "\u0b9a\u0bcd\u0bb0\u0bcd\u001d?i": "\u0bb8\u0bcd\u0bb0\u0bc0",
      "\u0b9f\u0bcd\u0b9f\u0bcd\u001d?r": "\u0bb1\u0bcd\u0bb1\u0bcd",
      "\u0b85\u001d?a": "\u0b86",
      "\u0b87\u001d?i": "\u0b88",
      "\u0b8e\u001d?e": "\u0b88",
      "\u0b89\u001d?u": "\u0b8a",
      "\u0b92\u001d?o": "\u0b8a",
      "\u0b85\u001d?i": "\u0b90",
      "\u0b85\u001d?u": "\u0b94",
      "\u0b92\u001d?u": "\u0b94",
      "\u0ba9\u0bcd\u001d?g": "\u0b99\u0bcd",
      ch: "\u0b9a\u0bcd",
      "\u0ba9\u0bcd\u001d?j": "\u0b9e\u0bcd",
      "\u0b9f\u0bcd\u001d?h": "\u0ba4\u0bcd",
      "\u0b9a\u0bcd\u001d?h": "\u0bb7\u0bcd",
      "\u0bb8\u0bcd\u001d?h": "\u0bb6\u0bcd",
      "\u0bb4\u0bcd\u001d?h": "\u0bb4\u0bcd",
      "\u0b95\u0bcd\u001d?S": "\u0b95\u0bcd\u0bb7\u0bcd",
      "\u0b9f\u0bcd\u001d?r": "\u0bb1\u0bcd\u0bb1\u0bcd",
      _: "\u200b",
      M: "\u0b82",
      H: "\u0b83",
      a: "\u0b85",
      A: "\u0b86",
      i: "\u0b87",
      I: "\u0b88",
      u: "\u0b89",
      U: "\u0b8a",
      e: "\u0b8e",
      E: "\u0b8f",
      o: "\u0b92",
      O: "\u0b93",
      k: "\u0b95\u0bcd",
      g: "\u0b95\u0bcd",
      q: "\u0b95\u0bcd",
      G: "\u0b95\u0bcd",
      s: "\u0b9a\u0bcd",
      j: "\u0b9c\u0bcd",
      J: "\u0b9c\u0bcd",
      t: "\u0b9f\u0bcd",
      T: "\u0b9f\u0bcd",
      d: "\u0b9f\u0bcd",
      D: "\u0b9f\u0bcd",
      N: "\u0ba3\u0bcd",
      n: "\u0ba9\u0bcd",
      p: "\u0baa\u0bcd",
      b: "\u0baa\u0bcd",
      f: "\u0baa\u0bcd",
      m: "\u0bae\u0bcd",
      y: "\u0baf\u0bcd",
      Y: "\u0baf\u0bcd",
      r: "\u0bb0\u0bcd",
      l: "\u0bb2\u0bcd",
      L: "\u0bb3\u0bcd",
      v: "\u0bb5\u0bcd",
      w: "\u0bb5\u0bcd",
      S: "\u0bb8\u0bcd",
      h: "\u0bb9\u0bcd",
      z: "\u0bb4\u0bcd",
      R: "\u0bb1\u0bcd",
      x: "\u0b95\u0bcd\u0bb7\u0bcd",
      "([\u0b95-\u0bb9])\u001d?a": "$1\u0bbe",
      "([\u0b95-\u0bb9])\u001d?i": "$1\u0bc8",
      "([\u0b95-\u0bb9])\u001d?u": "$1\u0bcc",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?a": "$1\u0ba8",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?A": "$1\u0ba8\u0bbe",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?i": "$1\u0ba8\u0bbf",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?I": "$1\u0ba8\u0bc0",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?u": "$1\u0ba8\u0bc1",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?U": "$1\u0ba8\u0bc2",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?e": "$1\u0ba8\u0bc6",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?E": "$1\u0ba8\u0bc7",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?o": "$1\u0ba8\u0bca",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?O": "$1\u0ba8\u0bcb",
      "\u0ba9\u0bcd\u001d?dha": "\u0ba8\u0bcd\u0ba4",
      "\u0ba9\u0bcd\u001d?dhA": "\u0ba8\u0bcd\u0ba4\u0bbe",
      "\u0ba9\u0bcd\u001d?dhi": "\u0ba8\u0bcd\u0ba4\u0bbf",
      "\u0ba9\u0bcd\u001d?dhI": "\u0ba8\u0bcd\u0ba4\u0bc0",
      "\u0ba9\u0bcd\u001d?dhu": "\u0ba8\u0bcd\u0ba4\u0bc1",
      "\u0ba9\u0bcd\u001d?dhU": "\u0ba8\u0bcd\u0ba4\u0bc2",
      "\u0ba9\u0bcd\u001d?dhe": "\u0ba8\u0bcd\u0ba4\u0bc6",
      "\u0ba9\u0bcd\u001d?dhE": "\u0ba8\u0bcd\u0ba4\u0bc7",
      "\u0ba9\u0bcd\u001d?dho": "\u0ba8\u0bcd\u0ba4\u0bca",
      "\u0ba9\u0bcd\u001d?dhO": "\u0ba8\u0bcd\u0ba4\u0bcb",
      "([\u0b80-\u0bff])\u0ba9\u0bcd\u001d?g": "$1\u0b99\u0bcd\u0b95\u0bcd",
      "([\u0b80-\u0bff])\u0ba9\u0bcd\u001d?j": "$1\u0b9e\u0bcd\u0b9a\u0bcd",
      "([^\u0b80-\u0bff]|^)\u0ba9\u0bcd\u001d?y": "$1\u0b9e\u0bcd",
      "\u0ba9\u0bcd\u001d?[dt]": "\u0ba3\u0bcd\u0b9f\u0bcd",
      "\u0ba3\u0bcd\u0b9f\u0bcd\u001d?h": "\u0ba8\u0bcd\u0ba4\u0bcd",
      "\u0ba9\u0bcd\u001d?dh": "\u0ba8\u0bcd",
      "\u0ba9\u0bcd\u001d?tr": "\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bcd",
      "\u0ba3\u0bcd\u0b9f\u0bcd\u001d?r": "\u0ba9\u0bcd\u0bb1\u0bcd"
    },
    historyPruneRegex: "t|dh|d"
  });
}).call(this);
