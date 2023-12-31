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
    id: "gu_phone",
    title: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)",
    mappings: {
      "": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      s: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      l: { "": "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./" },
      sl: { "": '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?' },
      c: {
        "": "\u0af1\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ad0\u0a85{{\u0a85\u0a82}}{{\u0a85\u0a83}}\u0a86\u0a87\u0a88\u0a89\u0a8a\u0a8b\u0ae0\u0a8c\u0ae1\u0a8d\u0a8f\u0a90\u0a91\u0a93\u0a94\u0a95{{\u0a95\u0acd\u0ab7}}\u0a96\u0a97\u0a98\u0a99\u0a9a\u0a9b\u0a9c{{\u0a9c\u0acd\u0a9e}}\u0a9d\u0a9e\u0a9f\u0aa0\u0aa1\u0aa2\u0aa3"
      },
      sc: {
        "": "\u0aa4{{\u0aa4\u0acd\u0ab0}}\u0aa5\u0aa6\u0aa7\u0aa8\u0aaa\u0aab\u0aac\u0aad\u0aae\u0aaf\u0ab0\u0ab2\u0ab3\u0ab5\u0ab6{{\u0ab6\u0acd\u0ab0}}\u0ab7\u0ab8\u0ab9\u0abc\u0a81\u0a82\u0acd\u0abe\u0abf\u0ac0\u0ac1\u0ac2\u0ac3\u0ac4\u0ae2\u0ae3\u0ac5\u0ac7\u0ac8\u0ac9\u0acb\u0acc\u0abd"
      }
    },
    transform: {
      "\u0acd\u001d?\\.c": "\u0ac5",
      "\u0a86\u0a8a\u001d?M": "\u0ad0",
      "\u0ab0\u0abc\u001d?\\^i": "\u0a8b",
      "\u0ab0\u0abc\u001d?\\^I": "\u0ae0",
      "\u0ab3\u001d?\\^i": "\u0a8c",
      "\u0ab3\u001d?\\^I": "\u0ae1",
      "\u0a9a\u001d?h": "\u0a9b",
      "\u0aa1\u0abc\u001d?h": "\u0aa2\u0abc",
      "\u0a95\u0acd\u0ab7\u001d?h": "\u0a95\u0acd\u0ab7",
      "\\.n": "\u0a82",
      "\\.m": "\u0a82",
      "\\.N": "\u0a81",
      "\\.h": "\u0acd\u200c",
      "\\.a": "\u0abd",
      OM: "\u0ad0",
      "\u0a85\u001d?a": "\u0a86",
      "\u0a87\u001d?i": "\u0a88",
      "\u0a8f\u001d?e": "\u0a88",
      "\u0a89\u001d?u": "\u0a8a",
      "\u0a93\u001d?o": "\u0a8a",
      "\u0a85\u001d?i": "\u0a90",
      "\u0a85\u001d?u": "\u0a94",
      "\u0a95\u001d?h": "\u0a96",
      "\u0a97\u001d?h": "\u0a98",
      "~N": "\u0a99",
      ch: "\u0a9a",
      Ch: "\u0a9b",
      "\u0a9c\u001d?h": "\u0a9d",
      "~n": "\u0a9e",
      "\u0a9f\u001d?h": "\u0aa0",
      "\u0aa1\u001d?h": "\u0aa2",
      "\u0aa4\u001d?h": "\u0aa5",
      "\u0aa6\u001d?h": "\u0aa7",
      "\u0aaa\u001d?h": "\u0aab",
      "\u0aac\u001d?h": "\u0aad",
      "\u0ab8\u001d?h": "\u0ab6",
      "\u0ab6\u001d?h": "\u0ab7",
      "~h": "\u0acd\u0ab9",
      Kh: "\u0a96\u0abc",
      "\\.D": "\u0aa1\u0abc",
      "\u0ab0\u0abc\u001d?h": "\u0aa2\u0abc",
      "\u0a95\u001d?S": "\u0a95\u0acd\u0ab7",
      "\u0a97\u0abc\u001d?Y": "\u0a9c\u0acd\u0a9e",
      M: "\u0a82",
      H: "\u0a83",
      a: "\u0a85",
      A: "\u0a86",
      i: "\u0a87",
      I: "\u0a88",
      u: "\u0a89",
      U: "\u0a8a",
      e: "\u0a8f",
      o: "\u0a93",
      k: "\u0a95",
      g: "\u0a97",
      j: "\u0a9c",
      T: "\u0a9f",
      D: "\u0aa1",
      N: "\u0aa3",
      t: "\u0aa4",
      d: "\u0aa6",
      n: "\u0aa8",
      p: "\u0aaa",
      b: "\u0aac",
      m: "\u0aae",
      y: "\u0aaf",
      r: "\u0ab0",
      l: "\u0ab2",
      L: "\u0ab3",
      v: "\u0ab5",
      w: "\u0ab5",
      S: "\u0ab6",
      s: "\u0ab8",
      h: "\u0ab9",
      R: "\u0ab0\u0abc",
      q: "\u0a95\u0abc",
      G: "\u0a97\u0abc",
      z: "\u0a9c\u0abc",
      J: "\u0a9c\u0abc",
      f: "\u0aab\u0abc",
      Y: "\u0aaf\u0abc",
      x: "\u0a95\u0acd\u0ab7",
      "([\u0a95-\u0ab9])\u001da": "$1",
      "([\u0a95-\u0ab9])\u001daa": "$1\u0abe",
      "([\u0a95-\u0ab9])\u001dai": "$1\u0ac8",
      "([\u0a95-\u0ab9])\u001dau": "$1\u0acc",
      "([\u0a95-\u0ab9])\u001dA": "$1\u0abe",
      "([\u0a95-\u0ab9])\u001di": "$1\u0abf",
      "\u0abf\u001di": "\u0ac0",
      "\u0ac7\u001de": "\u0ac0",
      "([\u0a95-\u0ab9])\u001dI": "$1\u0ac0",
      "([\u0a95-\u0ab9])\u001du": "$1\u0ac1",
      "([\u0a95-\u0ab9])\u001dU": "$1\u0ac2",
      "\u0ac1\u001du": "\u0ac2",
      "\u0acb\u001do": "\u0ac2",
      "([\u0a95-\u0ab9])\u0acd\u0ab0\u0abc\u0acd\u0ab0\u0abc\u001di": "$1\u0ac3",
      "([\u0a95-\u0ab9])\u0acd\u0ab0\u0abc^i": "$1\u0ac3",
      "([\u0a95-\u0ab9])\u0acd\u0ab0\u0abc\u0acd\u0ab0\u0abc\u001dI": "$1\u0ac4",
      "([\u0a95-\u0ab9])\u0acd\u0ab0\u0abc^I": "$1\u0ac4",
      "\u0ab0\u0abc\u0acd\u0ab0\u0abc\u001di": "\u0a8b",
      "\u0ab0\u0abc\u0acd\u0ab0\u0abc\u001dI": "\u0ae0",
      "\u0ab3\u0acd\u0ab3\u001di": "\u0a8c",
      "\u0ab3\u0acd\u0ab3\u001dI": "\u0ae1",
      "([\u0a95-\u0ab9])\u001de": "$1\u0ac7",
      "([\u0a95-\u0ab9])\u001do": "$1\u0acb",
      "([\u0a95-\u0ab9])\u001dk": "$1\u0acd\u0a95",
      "([\u0a95-\u0ab9])\u001dg": "$1\u0acd\u0a97",
      "([\u0a95-\u0ab9])\u001d~N": "$1\u0acd\u0a99",
      "([\u0a95-\u0ab9])\u001dch": "$1\u0acd\u0a9a",
      "([\u0a95-\u0ab9])\u001dCh": "$1\u0acd\u0a9b",
      "([\u0a95-\u0ab9])\u001dj": "$1\u0acd\u0a9c",
      "([\u0a95-\u0ab9])\u001d~n": "$1\u0acd\u0a9e",
      "([\u0a95-\u0ab9])\u001dT": "$1\u0acd\u0a9f",
      "([\u0a95-\u0ab9])\u001dD": "$1\u0acd\u0aa1",
      "([\u0a95-\u0ab9])\u001dN": "$1\u0acd\u0aa3",
      "([\u0a95-\u0ab9])\u001dt": "$1\u0acd\u0aa4",
      "([\u0a95-\u0ab9])\u001dd": "$1\u0acd\u0aa6",
      "([\u0a95-\u0ab9])\u001dn": "$1\u0acd\u0aa8",
      "([\u0a95-\u0ab9])\u001dp": "$1\u0acd\u0aaa",
      "([\u0a95-\u0ab9])\u001db": "$1\u0acd\u0aac",
      "([\u0a95-\u0ab9])\u001dm": "$1\u0acd\u0aae",
      "([\u0a95-\u0ab9])\u001dr": "$1\u0acd\u0ab0",
      "([\u0a95-\u0ab9])\u001dl": "$1\u0acd\u0ab2",
      "([\u0a95-\u0ab9])\u001dL": "$1\u0acd\u0ab3",
      "([\u0a95-\u0ab9])\u001dv": "$1\u0acd\u0ab5",
      "([\u0a95-\u0ab9])\u001dw": "$1\u0acd\u0ab5",
      "([\u0a95-\u0ab9])\u001dS": "$1\u0acd\u0ab6",
      "([\u0a95-\u0ab9])\u001ds": "$1\u0acd\u0ab8",
      "([\u0a95-\u0ab9])\u001dh": "$1\u0acd\u0ab9",
      "([\u0a95-\u0ab9])\u001dR": "$1\u0acd\u0ab0\u0abc",
      "([\u0a95-\u0ab9])\u001dq": "$1\u0acd\u0a95\u0abc",
      "([\u0a95-\u0ab9])\u001dKh": "$1\u0acd\u0a96\u0abc",
      "([\u0a95-\u0ab9])\u001dG": "$1\u0acd\u0a97\u0abc",
      "([\u0a95-\u0ab9])\u001dz": "$1\u0acd\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001dJ": "$1\u0acd\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001d.D": "$1\u0acd\u0aa1\u0abc",
      "([\u0a95-\u0ab9])\u001df": "$1\u0acd\u0aab\u0abc",
      "([\u0a95-\u0ab9])\u001dy": "$1\u0acd\u0aaf\u0abc",
      "([\u0a95-\u0ab9])\u001dx": "$1\u0acd\u0a95\u0acd\u0ab7",
      "([\u0a95-\u0ab9])\u001dak": "$1\u0a95",
      "([\u0a95-\u0ab9])\u001dag": "$1\u0a97",
      "([\u0a95-\u0ab9])\u001da~N": "$1\u0a99",
      "([\u0a95-\u0ab9])\u001dach": "$1\u0a9a",
      "([\u0a95-\u0ab9])\u001daCh": "$1\u0a9b",
      "([\u0a95-\u0ab9])\u001daj": "$1\u0a9c",
      "([\u0a95-\u0ab9])\u001da~n": "$1\u0a9e",
      "([\u0a95-\u0ab9])\u001daT": "$1\u0a9f",
      "([\u0a95-\u0ab9])\u001daD": "$1\u0aa1",
      "([\u0a95-\u0ab9])\u001daN": "$1\u0aa3",
      "([\u0a95-\u0ab9])\u001dat": "$1\u0aa4",
      "([\u0a95-\u0ab9])\u001dad": "$1\u0aa6",
      "([\u0a95-\u0ab9])\u001dan": "$1\u0aa8",
      "([\u0a95-\u0ab9])\u001dap": "$1\u0aaa",
      "([\u0a95-\u0ab9])\u001dab": "$1\u0aac",
      "([\u0a95-\u0ab9])\u001dam": "$1\u0aae",
      "([\u0a95-\u0ab9])\u001dar": "$1\u0ab0",
      "([\u0a95-\u0ab9])\u001dal": "$1\u0ab2",
      "([\u0a95-\u0ab9])\u001daL": "$1\u0ab3",
      "([\u0a95-\u0ab9])\u001dav": "$1\u0ab5",
      "([\u0a95-\u0ab9])\u001daw": "$1\u0ab5",
      "([\u0a95-\u0ab9])\u001daS": "$1\u0ab6",
      "([\u0a95-\u0ab9])\u001das": "$1\u0ab8",
      "([\u0a95-\u0ab9])\u001dah": "$1\u0ab9",
      "([\u0a95-\u0ab9])\u001daR": "$1\u0ab0\u0abc",
      "([\u0a95-\u0ab9])\u001daq": "$1\u0a95\u0abc",
      "([\u0a95-\u0ab9])\u001daKh": "$1\u0a96\u0abc",
      "([\u0a95-\u0ab9])\u001daG": "$1\u0a97\u0abc",
      "([\u0a95-\u0ab9])\u001daz": "$1\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001daJ": "$1\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001da.D": "$1\u0aa1\u0abc",
      "([\u0a95-\u0ab9])\u001daf": "$1\u0aab\u0abc",
      "([\u0a95-\u0ab9])\u001day": "$1\u0aaf\u0abc",
      "([\u0a95-\u0ab9])\u001dax": "$1\u0a95\u0acd\u0ab7",
      "([\u0a95-\u0ab9])\u001daak": "$1\u0abe\u0a95",
      "([\u0a95-\u0ab9])\u001daag": "$1\u0abe\u0a97",
      "([\u0a95-\u0ab9])\u001daa~N": "$1\u0abe\u0a99",
      "([\u0a95-\u0ab9])\u001daach": "$1\u0abe\u0a9a",
      "([\u0a95-\u0ab9])\u001daaCh": "$1\u0abe\u0a9b",
      "([\u0a95-\u0ab9])\u001daaj": "$1\u0abe\u0a9c",
      "([\u0a95-\u0ab9])\u001daa~n": "$1\u0abe\u0a9e",
      "([\u0a95-\u0ab9])\u001daaT": "$1\u0abe\u0a9f",
      "([\u0a95-\u0ab9])\u001daaD": "$1\u0abe\u0aa1",
      "([\u0a95-\u0ab9])\u001daaN": "$1\u0abe\u0aa3",
      "([\u0a95-\u0ab9])\u001daat": "$1\u0abe\u0aa4",
      "([\u0a95-\u0ab9])\u001daad": "$1\u0abe\u0aa6",
      "([\u0a95-\u0ab9])\u001daan": "$1\u0abe\u0aa8",
      "([\u0a95-\u0ab9])\u001daap": "$1\u0abe\u0aaa",
      "([\u0a95-\u0ab9])\u001daab": "$1\u0abe\u0aac",
      "([\u0a95-\u0ab9])\u001daam": "$1\u0abe\u0aae",
      "([\u0a95-\u0ab9])\u001daar": "$1\u0abe\u0ab0",
      "([\u0a95-\u0ab9])\u001daal": "$1\u0abe\u0ab2",
      "([\u0a95-\u0ab9])\u001daaL": "$1\u0abe\u0ab3",
      "([\u0a95-\u0ab9])\u001daav": "$1\u0abe\u0ab5",
      "([\u0a95-\u0ab9])\u001daaw": "$1\u0abe\u0ab5",
      "([\u0a95-\u0ab9])\u001daaS": "$1\u0abe\u0ab6",
      "([\u0a95-\u0ab9])\u001daas": "$1\u0abe\u0ab8",
      "([\u0a95-\u0ab9])\u001daah": "$1\u0abe\u0ab9",
      "([\u0a95-\u0ab9])\u001daaR": "$1\u0abe\u0ab0\u0abc",
      "([\u0a95-\u0ab9])\u001daaq": "$1\u0abe\u0a95\u0abc",
      "([\u0a95-\u0ab9])\u001daaKh": "$1\u0abe\u0a96\u0abc",
      "([\u0a95-\u0ab9])\u001daaG": "$1\u0abe\u0a97\u0abc",
      "([\u0a95-\u0ab9])\u001daaz": "$1\u0abe\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001daaJ": "$1\u0abe\u0a9c\u0abc",
      "([\u0a95-\u0ab9])\u001daa.D": "$1\u0abe\u0aa1\u0abc",
      "([\u0a95-\u0ab9])\u001daaf": "$1\u0abe\u0aab\u0abc",
      "([\u0a95-\u0ab9])\u001daay": "$1\u0abe\u0aaf\u0abc",
      "([\u0a95-\u0ab9])\u001daax": "$1\u0abe\u0a95\u0acd\u0ab7"
    },
    historyPruneRegex: "a|aa|ac|aaC|aac|a\\.|aK|aC|aaK|aS|aaS|aa~|aa\\.|a~"
  });
}).call(this);
