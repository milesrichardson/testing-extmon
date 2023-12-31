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
      this.D = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.B.length; a++) this.D[this.B[a]] = String.fromCharCode(4520 + a);
      this.ca = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.S = /[\u11a8-\u11c3]/g;
      this.P = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.G = /[\uac00-\ud7af]/g;
      this.K = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.X = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.V = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.W = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.Y = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      this.F = {};
      for (var b in this.C) this.F[this.C[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.S, function (c) {
        return a.B[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.P, function (c) {
        return a.ca[c];
      });
    },
    l = this || self;
  n.prototype.ba = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.Z = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.da = function (a, b, c, d) {
    return b + this.D[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.F[e];
        c += h ? h : e;
      }
      b = c.replace(a.G, k(a.ba, a));
      c = k(a.da, a);
      b = q(a, p(a, b)).replace(a.X, c).replace(a.V, c).replace(a.W, c).replace(a.Y, c).replace(a.K, k(a.Z, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.C[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "ta_itrans",
    title: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)",
    mappings: {
      ",c": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "s,sc": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      "l,cl": { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      "sl,scl": { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      k: "\u0b95\u0bcd",
      g: "\u0b95\u0bcd",
      "~N": "\u0b99\u0bcd",
      "N\\^": "\u0b99\u0bcd",
      ch: "\u0b9a\u0bcd",
      j: "\u0b9c\u0bcd",
      "~n": "\u0b9e\u0bcd",
      JN: "\u0b9e\u0bcd",
      T: "\u0b9f\u0bcd",
      Th: "\u0b9f\u0bcd",
      N: "\u0ba3\u0bcd",
      t: "\u0ba4\u0bcd",
      th: "\u0ba4\u0bcd",
      n: "\u0ba8\u0bcd",
      "\\^n": "\u0ba9\u0bcd",
      nh: "\u0ba9",
      p: "\u0baa\u0bcd",
      b: "\u0baa\u0bcd",
      m: "\u0bae\u0bcd",
      y: "\u0baf\u0bcd",
      r: "\u0bb0\u0bcd",
      R: "\u0bb1\u0bcd",
      rh: "\u0bb1",
      l: "\u0bb2\u0bcd",
      L: "\u0bb3\u0bcd",
      ld: "\u0bb3\u0bcd",
      J: "\u0bb4\u0bcd",
      z: "\u0bb4\u0bcd",
      v: "\u0bb5\u0bcd",
      w: "\u0bb5\u0bcd",
      Sh: "\u0bb7\u0bcd",
      shh: "\u0bb7",
      s: "\u0bb8\u0bcd",
      h: "\u0bb9\u0bcd",
      GY: "\u0b9c\u0bcd\u0b9e",
      dny: "\u0b9c\u0bcd\u0b9e",
      x: "\u0b95\u0bcd\u0bb7\u0bcd",
      ksh: "\u0b95\u0bcd\u0bb7\u0bcd",
      a: "\u0b85",
      aa: "\u0b86",
      A: "\u0b86",
      i: "\u0b87",
      ii: "\u0b88",
      I: "\u0b88",
      u: "\u0b89",
      uu: "\u0b8a",
      U: "\u0b8a",
      e: "\u0b8e",
      E: "\u0b8f",
      ee: "\u0b8f",
      ai: "\u0b90",
      o: "\u0b92",
      O: "\u0b93",
      oo: "\u0b93",
      au: "\u0b94",
      "\\.n": "\u0b82",
      M: "\u0b82",
      q: "\u0b83",
      H: "\u0b83",
      "\\.h": "\u0bcd",
      0: "\u0be6",
      1: "\u0be7",
      2: "\u0be8",
      3: "\u0be9",
      4: "\u0bea",
      5: "\u0beb",
      6: "\u0bec",
      7: "\u0bed",
      8: "\u0bee",
      9: "\u0bef",
      "#": "\u0bcd",
      "\\$": "\u0bb0",
      "\\^": "\u0ba4\u0bcd"
    },
    historyPruneRegex: "[\\^lrshkdnJNtTaeiouAEIOU]|sh|ks|dn"
  });
}).call(this);
