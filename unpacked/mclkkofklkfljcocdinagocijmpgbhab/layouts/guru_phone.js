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
  google.elements.keyboard.loadme({
    id: "guru_phone",
    title: "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      c: {
        "": "\u0a71\u0a01\u0a02\u0a3c\u0a03\u0a70\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a74\u0a73\u0a09\u0a0a\u0a13\u0a05\u0a06\u0a10\u0a14\u0a72\u0a07\u0a08\u0a0f\u0a38\u0a36\u0a39\u0a51\u0a15\u0a16\u0a59\u0a17\u0a5a\u0a18\u0a19\u0a1a\u0a1b\u0a1c\u0a5b\u0a1d\u0a1e\u0a1f"
      },
      sc: {
        "": "\u0a20\u0a21\u0a22\u0a23\u0a24\u0a25\u0a26\u0a27\u0a28\u0a2a\u0a5e\u0a2b\u0a2c\u0a2d\u0a2e\u0a2f\u0a75\u0a30\u0a32\u0a33\u0a35\u0a5c\u0a3e\u0a3f\u0a40\u0a41\u0a42\u0a47\u0a48\u0a4b\u0a4c\u0a4d"
      }
    },
    transform: {
      "\u0a4d\u001d?\\.c": "\u0a48",
      "\u0a06\u0a0a\u001d?M": "\u0a0f\u0a02",
      "\u0a30\u0a3c\u001d?\\^i": "\u0a30\u0a3f",
      "\u0a30\u0a3c\u001d?\\^I": "\u0a30\u0a3f",
      "\u0a32\u001d?\\^i": "\u0a32\u0a3c",
      "\u0a32\u001d?\\^I": "\u0a32\u0a3c",
      "\u0a1a\u001d?h": "\u0a1b",
      "\u0a21\u0a3c\u001d?h": "\u0a22\u0a3c",
      "\u0a15\u0a4d\u0a38\u0a3c\u001d?h": "\u0a15\u0a4d\u0a38\u0a3c",
      "\\.n": "\u0a02",
      "\\.m": "\u0a02",
      "\\.N": "\u0a01",
      "\\.h": "\u0a4d\u200c",
      "\\.a": "",
      OM: "\u0a0f\u0a02",
      "\u0a05\u001d?a": "\u0a06",
      "\u0a07\u001d?i": "\u0a08",
      "\u0a0f\u001d?e": "\u0a08",
      "\u0a09\u001d?u": "\u0a0a",
      "\u0a13\u001d?o": "\u0a0a",
      "\u0a05\u001d?i": "\u0a10",
      "\u0a05\u001d?u": "\u0a14",
      "\u0a15\u001d?h": "\u0a16",
      "\u0a17\u001d?h": "\u0a18",
      "~N": "\u0a19",
      ch: "\u0a1a",
      Ch: "\u0a1b",
      "\u0a1c\u001d?h": "\u0a1d",
      "~n": "\u0a1e",
      "\u0a1f\u001d?h": "\u0a20",
      "\u0a21\u001d?h": "\u0a22",
      "\u0a24\u001d?h": "\u0a25",
      "\u0a26\u001d?h": "\u0a27",
      "\u0a2a\u001d?h": "\u0a2b",
      "\u0a2c\u001d?h": "\u0a2d",
      "\u0a38\u001d?h": "\u0a38\u0a3c",
      "\u0a38\u0a3c\u001d?h": "\u0a38\u0a3c",
      "~h": "\u0a4d\u0a39",
      Kh: "\u0a16\u0a3c",
      "\\.D": "\u0a21\u0a3c",
      "\u0a30\u0a3c\u001d?h": "\u0a22\u0a3c",
      "\u0a15\u001d?S": "\u0a15\u0a4d\u0a38\u0a3c",
      "\u0a17\u0a3c\u001d?Y": "\u0a1c\u0a4d\u0a1e",
      M: "\u0a02",
      H: "",
      a: "\u0a05",
      A: "\u0a06",
      i: "\u0a07",
      I: "\u0a08",
      u: "\u0a09",
      U: "\u0a0a",
      e: "\u0a0f",
      o: "\u0a13",
      k: "\u0a15",
      g: "\u0a17",
      j: "\u0a1c",
      T: "\u0a1f",
      D: "\u0a21",
      N: "\u0a23",
      t: "\u0a24",
      d: "\u0a26",
      n: "\u0a28",
      p: "\u0a2a",
      b: "\u0a2c",
      m: "\u0a2e",
      y: "\u0a2f",
      r: "\u0a30",
      l: "\u0a32",
      L: "\u0a32",
      v: "\u0a35",
      w: "\u0a35",
      S: "\u0a38\u0a3c",
      s: "\u0a38",
      h: "\u0a39",
      R: "\u0a30\u0a3c",
      q: "\u0a15\u0a3c",
      G: "\u0a17\u0a3c",
      z: "\u0a1c\u0a3c",
      J: "\u0a1c\u0a3c",
      f: "\u0a2b\u0a3c",
      Y: "\u0a2f\u0a3c",
      x: "\u0a15\u0a4d\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001da": "$1",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daa": "$1\u0a3e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dai": "$1\u0a48",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dau": "$1\u0a4c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dA": "$1\u0a3e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001di": "$1\u0a3f",
      "\u0a3f\u001di": "\u0a40",
      "\u0a47\u001de": "\u0a40",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dI": "$1\u0a40",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001du": "$1\u0a41",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dU": "$1\u0a42",
      "\u0a41\u001du": "\u0a42",
      "\u0a4b\u001do": "\u0a42",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u0a4d\u0a30\u0a3c\u0a4d\u0a30\u0a3c\u001di": "$1",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u0a4d\u0a30\u0a3c^i": "$1",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u0a4d\u0a30\u0a3c\u0a4d\u0a30\u0a3c\u001dI": "$1",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u0a4d\u0a30\u0a3c^I": "$1",
      "\u0a30\u0a3c\u0a4d\u0a30\u0a3c\u001di": "\u0a30\u0a3f",
      "\u0a30\u0a3c\u0a4d\u0a30\u0a3c\u001dI": "\u0a30\u0a3f",
      "\u0a32\u0a4d\u0a32\u001di": "\u0a32\u0a3c",
      "\u0a32\u0a4d\u0a32\u001dI": "\u0a32\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001de": "$1\u0a47",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001do": "$1\u0a4b",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dk": "$1\u0a4d\u0a15",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dg": "$1\u0a4d\u0a17",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001d~N": "$1\u0a4d\u0a19",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dch": "$1\u0a4d\u0a1a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dCh": "$1\u0a4d\u0a1b",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dj": "$1\u0a4d\u0a1c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001d~n": "$1\u0a4d\u0a1e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dT": "$1\u0a4d\u0a1f",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dD": "$1\u0a4d\u0a21",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dN": "$1\u0a4d\u0a23",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dt": "$1\u0a4d\u0a24",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dd": "$1\u0a4d\u0a26",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dn": "$1\u0a4d\u0a28",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dp": "$1\u0a4d\u0a2a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001db": "$1\u0a4d\u0a2c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dm": "$1\u0a4d\u0a2e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dr": "$1\u0a4d\u0a30",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dl": "$1\u0a4d\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dL": "$1\u0a4d\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dv": "$1\u0a4d\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dw": "$1\u0a4d\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dS": "$1\u0a4d\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001ds": "$1\u0a4d\u0a38",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dh": "$1\u0a4d\u0a39",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dR": "$1\u0a4d\u0a30\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dq": "$1\u0a4d\u0a15\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dKh": "$1\u0a4d\u0a16\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dG": "$1\u0a4d\u0a17\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dz": "$1\u0a4d\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dJ": "$1\u0a4d\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001d.D": "$1\u0a4d\u0a21\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001df": "$1\u0a4d\u0a2b\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dy": "$1\u0a4d\u0a2f\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dx": "$1\u0a4d\u0a15\u0a4d\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dak": "$1\u0a15",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dag": "$1\u0a17",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001da~N": "$1\u0a19",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dach": "$1\u0a1a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daCh": "$1\u0a1b",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daj": "$1\u0a1c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001da~n": "$1\u0a1e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daT": "$1\u0a1f",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daD": "$1\u0a21",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daN": "$1\u0a23",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dat": "$1\u0a24",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dad": "$1\u0a26",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dan": "$1\u0a28",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dap": "$1\u0a2a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dab": "$1\u0a2c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dam": "$1\u0a2e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dar": "$1\u0a30",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dal": "$1\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daL": "$1\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dav": "$1\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daw": "$1\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daS": "$1\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001das": "$1\u0a38",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dah": "$1\u0a39",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daR": "$1\u0a30\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daq": "$1\u0a15\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daKh": "$1\u0a16\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daG": "$1\u0a17\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daz": "$1\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daJ": "$1\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001da.D": "$1\u0a21\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daf": "$1\u0a2b\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001day": "$1\u0a2f\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001dax": "$1\u0a15\u0a4d\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daak": "$1\u0a3e\u0a15",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daag": "$1\u0a3e\u0a17",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daa~N": "$1\u0a3e\u0a19",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daach": "$1\u0a3e\u0a1a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaCh": "$1\u0a3e\u0a1b",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaj": "$1\u0a3e\u0a1c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daa~n": "$1\u0a3e\u0a1e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaT": "$1\u0a3e\u0a1f",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaD": "$1\u0a3e\u0a21",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaN": "$1\u0a3e\u0a23",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daat": "$1\u0a3e\u0a24",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daad": "$1\u0a3e\u0a26",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daan": "$1\u0a3e\u0a28",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daap": "$1\u0a3e\u0a2a",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daab": "$1\u0a3e\u0a2c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daam": "$1\u0a3e\u0a2e",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daar": "$1\u0a3e\u0a30",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daal": "$1\u0a3e\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaL": "$1\u0a3e\u0a32",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daav": "$1\u0a3e\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaw": "$1\u0a3e\u0a35",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaS": "$1\u0a3e\u0a38\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daas": "$1\u0a3e\u0a38",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daah": "$1\u0a3e\u0a39",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaR": "$1\u0a3e\u0a30\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaq": "$1\u0a3e\u0a15\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaKh": "$1\u0a3e\u0a16\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaG": "$1\u0a3e\u0a17\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaz": "$1\u0a3e\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaJ": "$1\u0a3e\u0a1c\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daa.D": "$1\u0a3e\u0a21\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daaf": "$1\u0a3e\u0a2b\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daay": "$1\u0a3e\u0a2f\u0a3c",
      "([\u0a15-\u0a39\u0a59-\u0a5e])\u001daax": "$1\u0a3e\u0a15\u0a4d\u0a38\u0a3c"
    },
    historyPruneRegex: "a|aa|ac|aaC|aac|a\\.|aK|aC|aaK|aS|aaS|aa~|aa\\.|a~"
  });
}).call(this);
