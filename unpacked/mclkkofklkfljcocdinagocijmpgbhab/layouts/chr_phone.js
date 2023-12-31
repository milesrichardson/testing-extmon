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
      this.g =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.j = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.j[this.g[a]] = String.fromCharCode(4520 + a);
      this.L = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.C = /[\u11a8-\u11c3]/g;
      this.B = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.N = /[\uac00-\ud7af]/g;
      this.m = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.G = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.D = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.F = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.H = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.h = {
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
      this.l = {};
      for (var b in this.h) this.l[this.h[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.C, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.B, function (c) {
        return a.L[c];
      });
    },
    l = this || self;
  n.prototype.K = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.J = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.M = function (a, b, c, d) {
    return b + this.j[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.l[e];
        c += h ? h : e;
      }
      b = c.replace(a.N, k(a.K, a));
      c = k(a.M, a);
      b = q(a, p(a, b)).replace(a.G, c).replace(a.D, c).replace(a.F, c).replace(a.H, c).replace(a.m, k(a.J, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "chr_phone",
    title: "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac",
    mappings: {
      "c,": {
        "": "{{\u0300}}1234567890-=qwe{{}}tyuio{{\u0294}}[]\\asd{{}}gh{{}}kl;{{\u0301}}{{\u0323}}{{\u0304}}{{\u0302}}v{{\u030c}}nm,./"
      },
      "s,sc": { "": '~!@#$%^&*()_+QWE{{}}TYUIO{{\u030b}}{}|ASD{{}}GH{{}}KL:"{{\u0330}}{{\u0324}}{{\u0331}}V{{}}NM<>?' },
      "l,cl": {
        "": "`1234567890-={{q\u200b}}{{w\u200b}}{{e\u200b}}{{r\u200b}}{{t\u200b}}{{y\u200b}}{{u\u200b}}{{i\u200b}}{{o\u200b}}{{p\u200b}}[]\\{{a\u200b}}{{s\u200b}}{{d\u200b}}{{f\u200b}}{{g\u200b}}{{h\u200b}}{{j\u200b}}{{k\u200b}}{{l\u200b}};'{{z\u200b}}{{x\u200b}}{{c\u200b}}{{v\u200b}}{{b\u200b}}{{n\u200b}}{{m\u200b}},./"
      },
      "sl,scl": {
        "": '~!@#$%^&*()_+{{Q\u200b}}{{W\u200b}}{{E\u200b}}{{R\u200b}}{{T\u200b}}{{Y\u200b}}{{U\u200b}}{{I\u200b}}{{O\u200b}}{{P\u200b}}{}|{{A\u200b}}{{S\u200b}}{{D\u200b}}{{F\u200b}}{{G\u200b}}{{H\u200b}}{{J\u200b}}{{K\u200b}}{{L\u200b}}:"{{Z\u200b}}{{X\u200b}}{{C\u200b}}{{V\u200b}}{{B\u200b}}{{N\u200b}}{{M\u200b}}<>?'
      }
    },
    transform: {
      a: "\uab70",
      A: "\u13a0",
      e: "\uab71",
      E: "\u13a1",
      i: "\uab72",
      I: "\u13a2",
      o: "\uab73",
      O: "\u13a3",
      u: "\uab74",
      U: "\u13a4",
      v: "\uab75",
      V: "\u13a5",
      ga: "\uab76",
      "G[aA]": "\u13a6",
      gwa: "\uab96",
      "G[wW][aA]": "\u13c6",
      gwe: "\uab97",
      "G[wW][eE]": "\u13c7",
      gwi: "\uab98",
      "G[wW][iI]": "\u13c8",
      gwo: "\uab99",
      "G[wW][oO]": "\u13c9",
      gwu: "\uab9a",
      "G[wW][uU]": "\u13ca",
      gwv: "\uab9b",
      "G[wW][vV]": "\u13cb",
      ka: "\uab77",
      "K[aA]": "\u13a7",
      ge: "\uab78",
      "G[eE]": "\u13a8",
      gi: "\uab79",
      "G[iI]": "\u13a9",
      go: "\uab7a",
      "G[oO]": "\u13aa",
      gu: "\uab7b",
      "G[uU]": "\u13ab",
      gv: "\uab7c",
      "G[vV]": "\u13ac",
      ha: "\uab7d",
      "H[aA]": "\u13ad",
      he: "\uab7e",
      "H[eE]": "\u13ae",
      hi: "\uab7f",
      "H[iI]": "\u13af",
      ho: "\uab80",
      "H[oO]": "\u13b0",
      hu: "\uab81",
      "H[uU]": "\u13b1",
      hv: "\uab82",
      "H[vV]": "\u13b2",
      kwa: "\uab96",
      "K[wW][aA]": "\u13c6",
      kwe: "\uab97",
      "K[wW][eE]": "\u13c7",
      kwi: "\uab98",
      "K[wW][iI]": "\u13c8",
      kwo: "\uab99",
      "K[wW][oO]": "\u13c9",
      kwu: "\uab9a",
      "K[wW][uU]": "\u13ca",
      kwv: "\uab9b",
      "K[wW][vV]": "\u13cb",
      la: "\uab83",
      "L[aA]": "\u13b3",
      le: "\uab84",
      "L[eE]": "\u13b4",
      li: "\uab85",
      "L[iI]": "\u13b5",
      lo: "\uab86",
      "L[oO]": "\u13b6",
      lu: "\uab87",
      "L[uU]": "\u13b7",
      lv: "\uab88",
      "L[vV]": "\u13b8",
      ma: "\uab89",
      "M[aA]": "\u13b9",
      me: "\uab8a",
      "M[eE]": "\u13ba",
      mi: "\uab8b",
      "M[iI]": "\u13bb",
      mo: "\uab8c",
      "M[oO]": "\u13bc",
      mu: "\uab8d",
      "M[uU]": "\u13bd",
      mv: "\u13fd",
      "M[vV]": "\u13f5",
      na: "\uab8e",
      "N[aA]": "\u13be",
      hna: "\uab8f",
      "H[nN][aA]": "\u13bf",
      nh: "\uab90",
      "N[hH]": "\u13c0",
      ne: "\uab91",
      "N[eE]": "\u13c1",
      ni: "\uab92",
      "N[iI]": "\u13c2",
      no: "\uab93",
      "N[oO]": "\u13c3",
      nu: "\uab94",
      "N[uU]": "\u13c4",
      nv: "\uab95",
      "N[vV]": "\u13c5",
      qua: "\uab96",
      "Q[uU][aA]": "\u13c6",
      que: "\uab97",
      "Q[uU][eE]": "\u13c7",
      qui: "\uab98",
      "Q[uU][iI]": "\u13c8",
      quo: "\uab99",
      "Q[uU][oO]": "\u13c9",
      quu: "\uab9a",
      "Q[uU][uU]": "\u13ca",
      quv: "\uab9b",
      "Q[uU][vV]": "\u13cb",
      sa: "\uab9c",
      "S[aA]": "\u13cc",
      s: "\uab9d",
      S: "\u13cd",
      se: "\uab9e",
      "S[eE]": "\u13ce",
      si: "\uab9f",
      "S[iI]": "\u13cf",
      so: "\uaba0",
      "S[oO]": "\u13d0",
      su: "\uaba1",
      "S[uU]": "\u13d1",
      sv: "\uaba2",
      "S[vV]": "\u13d2",
      da: "\uaba3",
      "D[aA]": "\u13d3",
      ta: "\uaba4",
      "T[aA]": "\u13d4",
      de: "\uaba5",
      "D[eE]": "\u13d5",
      te: "\uaba6",
      "T[eE]": "\u13d6",
      di: "\uaba7",
      "D[iI]": "\u13d7",
      ti: "\uaba8",
      "T[iI]": "\u13d8",
      do: "\uaba9",
      "D[oO]": "\u13d9",
      du: "\uabaa",
      "D[uU]": "\u13da",
      dv: "\uabab",
      "D[vV]": "\u13db",
      dla: "\uabac",
      "D[lL][aA]": "\u13dc",
      tla: "\uabad",
      "T[lL][aA]": "\u13dd",
      tle: "\uabae",
      "T[lL][eE]": "\u13de",
      tli: "\uabaf",
      "T[lL][iI]": "\u13df",
      tlo: "\uabb0",
      "T[lL][oO]": "\u13e0",
      tlu: "\uabb1",
      "T[lL][uU]": "\u13e1",
      tlv: "\uabb2",
      "T[lL][vV]": "\u13e2",
      tsa: "\uabb3",
      "T[sS][aA]": "\u13e3",
      tse: "\uabb4",
      "T[sS][eE]": "\u13e4",
      tsi: "\uabb5",
      "T[sS][iI]": "\u13e5",
      tso: "\uabb6",
      "T[sS][oO]": "\u13e6",
      tsu: "\uabb7",
      "T[sS][uU]": "\u13e7",
      tsv: "\uabb8",
      "T[sS][vV]": "\u13e8",
      wa: "\uabb9",
      "W[aA]": "\u13e9",
      we: "\uabba",
      "W[eE]": "\u13ea",
      wi: "\uabbb",
      "W[iI]": "\u13eb",
      wo: "\uabbc",
      "W[oO]": "\u13ec",
      wu: "\uabbd",
      "W[uU]": "\u13ed",
      wv: "\uabbe",
      "W[vV]": "\u13ee",
      ya: "\uabbf",
      "Y[aA]": "\u13ef",
      ye: "\u13f8",
      "Y[eE]": "\u13f0",
      yi: "\u13f9",
      "Y[iI]": "\u13f1",
      yo: "\u13fa",
      "Y[oO]": "\u13f2",
      yu: "\u13fb",
      "Y[uU]": "\u13f3",
      yv: "\u13fc",
      "Y[vV]": "\u13f4",
      "([A-Za-z])\u200b": "$1"
    },
    historyPruneRegex: "s|n|u|a|S|N|U|A"
  });
}).call(this);
