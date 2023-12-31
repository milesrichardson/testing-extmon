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
      this.ea = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.W = /[\u11a8-\u11c3]/g;
      this.V = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.O = /[\uac00-\ud7af]/g;
      this.P = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.aa = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.X = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.Z = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.ba = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.W, function (c) {
        return a.B[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.V, function (c) {
        return a.ea[c];
      });
    },
    l = this || self;
  n.prototype.da = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.ca = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.fa = function (a, b, c, d) {
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
      b = c.replace(a.O, k(a.da, a));
      c = k(a.fa, a);
      b = q(a, p(a, b)).replace(a.aa, c).replace(a.X, c).replace(a.Z, c).replace(a.ba, c).replace(a.P, k(a.ca, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.C[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  var r = {
    id: "or_phone",
    title: "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      c: {
        "": "\u0b70\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f\u0b05\u0b06\u0b07\u0b08\u0b09\u0b0a\u0b0b\u0b60\u0b0c\u0b61\u0b0f\u0b10\u0b13\u0b14\u0b15\u0b16\u0b17\u0b18\u0b19\u0b1a\u0b1b\u0b1c\u0b1d\u0b1e\u0b1f\u0b20\u0b21\u0b22\u0b23\u0b24\u0b25\u0b26\u0b27\u0b28\u0b2a\u0b2b"
      },
      sc: {
        "": "\u0b2c\u0b2d\u0b2e\u0b2f\u0b30\u0b32\u0b33\u0b36\u0b37\u0b38\u0b39\u0b5c\u0b5d\u0b5f\u0b71\u0b35\u0b03\u0b01\u0b4d\u0b3c\u0b3d\u0b3c\u0b3f\u0b40\u0b41\u0b42\u0b43\u0b44\u0b43\u0b62\u0b63\u0b48\u0b4b\u0b4c\u0b56\u0b57"
      }
    },
    transform: {
      "\u0b4d\u001d?\\.c": "\u0b47",
      "\u0b06\u0b0a\u001d?M": "\u0b13\u0b01",
      "\u0b30\u0b3c\u001d?\\^i": "\u0b0b",
      "\u0b30\u0b3c\u001d?\\^I": "\u0b60",
      "\u0b33\u001d?\\^i": "\u0b0c",
      "\u0b33\u001d?\\^I": "\u0b61",
      "\u0b1a\u001d?h": "\u0b1b",
      "\u0b21\u0b3c\u001d?h": "\u0b22\u0b3c",
      "\u0b15\u0b4d\u0b37\u001d?h": "\u0b15\u0b4d\u0b37",
      "\\.n": "\u0b02",
      "\\.m": "\u0b02",
      "\\.N": "\u0b01",
      "\\.h": "\u0b4d\u200c",
      "\\.a": "\u0b3d",
      OM: "\u0b13\u0b01",
      "\u0b05\u001d?a": "\u0b06",
      "\u0b07\u001d?i": "\u0b08",
      "\u0b0f\u001d?e": "\u0b08",
      "\u0b09\u001d?u": "\u0b0a",
      "\u0b13\u001d?o": "\u0b0a",
      "\u0b05\u001d?i": "\u0b10",
      "\u0b05\u001d?u": "\u0b14",
      "\u0b15\u001d?h": "\u0b16",
      "\u0b17\u001d?h": "\u0b18",
      "~N": "\u0b19",
      ch: "\u0b1a",
      Ch: "\u0b1b",
      "\u0b1c\u001d?h": "\u0b1d",
      "~n": "\u0b1e",
      "\u0b1f\u001d?h": "\u0b20",
      "\u0b21\u001d?h": "\u0b22",
      "\u0b24\u001d?h": "\u0b25",
      "\u0b26\u001d?h": "\u0b27",
      "\u0b2a\u001d?h": "\u0b2b",
      "\u0b2c\u001d?h": "\u0b2d",
      "\u0b38\u001d?h": "\u0b36",
      "\u0b36\u001d?h": "\u0b37",
      "~h": "\u0b4d\u0b39",
      Kh: "\u0b16\u0b3c",
      "\\.D": "\u0b21\u0b3c",
      "\u0b30\u0b3c\u001d?h": "\u0b22\u0b3c",
      "\u0b15\u001d?S": "\u0b15\u0b4d\u0b37",
      "\u0b17\u0b3c\u001d?Y": "\u0b1c\u0b4d\u0b1e",
      M: "\u0b02",
      H: "\u0b03",
      a: "\u0b05",
      A: "\u0b06",
      i: "\u0b07",
      I: "\u0b08",
      u: "\u0b09",
      U: "\u0b0a",
      e: "\u0b0f",
      o: "\u0b13",
      k: "\u0b15",
      g: "\u0b17",
      j: "\u0b1c",
      T: "\u0b1f",
      D: "\u0b21",
      N: "\u0b23",
      t: "\u0b24",
      d: "\u0b26",
      n: "\u0b28",
      p: "\u0b2a",
      b: "\u0b2c",
      m: "\u0b2e",
      y: "\u0b2f",
      r: "\u0b30",
      l: "\u0b32",
      L: "\u0b33",
      v: "\u0b35",
      w: "\u0b35",
      S: "\u0b36",
      s: "\u0b38",
      h: "\u0b39",
      R: "\u0b30\u0b3c",
      q: "\u0b15\u0b3c",
      G: "\u0b17\u0b3c",
      z: "\u0b1c\u0b3c",
      J: "\u0b1c\u0b3c",
      f: "\u0b2b\u0b3c",
      Y: "\u0b2f\u0b3c",
      x: "\u0b15\u0b4d\u0b37",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001da": "$1",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daa": "$1\u0b3e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dai": "$1\u0b48",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dau": "$1\u0b4c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dA": "$1\u0b3e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001di": "$1\u0b3f",
      "\u0b3f\u001di": "\u0b40",
      "\u0b47\u001de": "\u0b40",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dI": "$1\u0b40",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001du": "$1\u0b41",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dU": "$1\u0b42",
      "\u0b41\u001du": "\u0b42",
      "\u0b4b\u001do": "\u0b42",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u0b4d\u0b30\u0b3c^i": "$1\u0b43",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u0b4d\u0b30\u0b3c^I": "$1\u0b43\u0b3c",
      "\u0b30\u0b3c\u0b4d\u0b30\u0b3c\u001di": "\u0b0b",
      "\u0b30\u0b3c\u0b4d\u0b30\u0b3c\u001dI": "\u0b60",
      "\u0b33\u0b4d\u0b33\u001di": "\u0b0c",
      "\u0b33\u0b4d\u0b33\u001dI": "\u0b61",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001de": "$1\u0b47",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001do": "$1\u0b4b",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dk": "$1\u0b4d\u0b15",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dg": "$1\u0b4d\u0b17",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001d~N": "$1\u0b4d\u0b19",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dch": "$1\u0b4d\u0b1a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dCh": "$1\u0b4d\u0b1b",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dj": "$1\u0b4d\u0b1c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001d~n": "$1\u0b4d\u0b1e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dT": "$1\u0b4d\u0b1f",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dD": "$1\u0b4d\u0b21",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dN": "$1\u0b4d\u0b23",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dt": "$1\u0b4d\u0b24",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dd": "$1\u0b4d\u0b26",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dn": "$1\u0b4d\u0b28",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dp": "$1\u0b4d\u0b2a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001db": "$1\u0b4d\u0b2c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dm": "$1\u0b4d\u0b2e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dr": "$1\u0b4d\u0b30",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dl": "$1\u0b4d\u0b32",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dL": "$1\u0b4d\u0b33",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dv": "$1\u0b4d\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dw": "$1\u0b4d\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dS": "$1\u0b4d\u0b36",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001ds": "$1\u0b4d\u0b38",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dh": "$1\u0b4d\u0b39",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dR": "$1\u0b4d\u0b30\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dq": "$1\u0b4d\u0b15\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dKh": "$1\u0b4d\u0b16\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dG": "$1\u0b4d\u0b17\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dz": "$1\u0b4d\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dJ": "$1\u0b4d\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001d.D": "$1\u0b4d\u0b21\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001df": "$1\u0b4d\u0b2b\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dy": "$1\u0b4d\u0b2f\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dx": "$1\u0b4d\u0b15\u0b4d\u0b37",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dak": "$1\u0b15",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dag": "$1\u0b17",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001da~N": "$1\u0b19",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dach": "$1\u0b1a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daCh": "$1\u0b1b",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daj": "$1\u0b1c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001da~n": "$1\u0b1e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daT": "$1\u0b1f",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daD": "$1\u0b21",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daN": "$1\u0b23",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dat": "$1\u0b24",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dad": "$1\u0b26",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dan": "$1\u0b28",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dap": "$1\u0b2a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dab": "$1\u0b2c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dam": "$1\u0b2e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dar": "$1\u0b30",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dal": "$1\u0b32",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daL": "$1\u0b33",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dav": "$1\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daw": "$1\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daS": "$1\u0b36",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001das": "$1\u0b38",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dah": "$1\u0b39",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daR": "$1\u0b30\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daq": "$1\u0b15\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daKh": "$1\u0b16\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daG": "$1\u0b17\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daz": "$1\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daJ": "$1\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001da.D": "$1\u0b21\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daf": "$1\u0b2b\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001day": "$1\u0b2f\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001dax": "$1\u0b15\u0b4d\u0b37",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daak": "$1\u0b3e\u0b15",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daag": "$1\u0b3e\u0b17",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daa~N": "$1\u0b3e\u0b19",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daach": "$1\u0b3e\u0b1a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaCh": "$1\u0b3e\u0b1b",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaj": "$1\u0b3e\u0b1c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daa~n": "$1\u0b3e\u0b1e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaT": "$1\u0b3e\u0b1f",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaD": "$1\u0b3e\u0b21",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaN": "$1\u0b3e\u0b23",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daat": "$1\u0b3e\u0b24",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daad": "$1\u0b3e\u0b26",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daan": "$1\u0b3e\u0b28",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daap": "$1\u0b3e\u0b2a",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daab": "$1\u0b3e\u0b2c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daam": "$1\u0b3e\u0b2e",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daar": "$1\u0b3e\u0b30",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daal": "$1\u0b3e\u0b32",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaL": "$1\u0b3e\u0b33",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daav": "$1\u0b3e\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaw": "$1\u0b3e\u0b35",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaS": "$1\u0b3e\u0b36",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daas": "$1\u0b3e\u0b38",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daah": "$1\u0b3e\u0b39",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaR": "$1\u0b3e\u0b30\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaq": "$1\u0b3e\u0b15\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaKh": "$1\u0b3e\u0b16\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaG": "$1\u0b3e\u0b17\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaz": "$1\u0b3e\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaJ": "$1\u0b3e\u0b1c\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daa.D": "$1\u0b3e\u0b21\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daaf": "$1\u0b3e\u0b2b\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daay": "$1\u0b3e\u0b2f\u0b3c",
      "([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u001daax": "$1\u0b3e\u0b15\u0b4d\u0b37"
    },
    historyPruneRegex: "a|aa|ac|aaC|aac|a\\.|aK|aC|aaK|aS|aaS|aa~|aa\\.|a~"
  };
  r.transform["([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u0b4d\u0b30\u0b3c\u0b4d\u0b30\u0b3c\u001di"] = "$1\u0b43";
  r.transform["([\u0b15-\u0b39\u0b5c\u0b5d\u0b5f\u0b71])\u0b4d\u0b30\u0b3c\u0b4d\u0b30\u0b3c\u001dI"] = "$1\u0b43\u0b3c";
  google.elements.keyboard.loadme(r);
}).call(this);
