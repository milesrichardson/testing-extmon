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
      this.A =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.C = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.A.length; a++) this.C[this.A[a]] = String.fromCharCode(4520 + a);
      this.P = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.I = /[\u11a8-\u11c3]/g;
      this.H = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.F = /[\uac00-\ud7af]/g;
      this.G = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.L = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.J = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.K = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.M = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.B = {
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
      this.D = {};
      for (var b in this.B) this.D[this.B[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.I, function (c) {
        return a.A[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.H, function (c) {
        return a.P[c];
      });
    },
    l = this || self;
  n.prototype.O = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.N = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.R = function (a, b, c, d) {
    return b + this.C[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.D[e];
        c += h ? h : e;
      }
      b = c.replace(a.F, k(a.O, a));
      c = k(a.R, a);
      b = q(a, p(a, b)).replace(a.L, c).replace(a.J, c).replace(a.K, c).replace(a.M, c).replace(a.G, k(a.N, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.B[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "iu_nunavut",
    title: "Nunavut Inuktitut",
    mappings: {
      ",c": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "s,sc": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      "l,cl": { "": "`1234567890-=QWERTYUIOP[]\\\u140aSDFGHJKL;'ZXCVBNM,./" },
      "sl,scl": { "": '~!@#$%^&*()_+qwertyuiop{}|\u140asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      i: "\u1403",
      ii: "\u1404",
      e: "\u1403",
      ee: "\u1404",
      u: "\u1405",
      uu: "\u1406",
      o: "\u1405",
      oo: "\u1406",
      a: "\u140a",
      aa: "\u140b",
      h: "\u157c",
      pi: "\u1431",
      pii: "\u1432",
      pe: "\u1431",
      pee: "\u1432",
      pu: "\u1433",
      puu: "\u1434",
      po: "\u1433",
      poo: "\u1434",
      pa: "\u1438",
      paa: "\u1439",
      p: "\u1449",
      t: "\u1466",
      d: "\u1466",
      ti: "\u144e",
      tii: "\u144f",
      te: "\u144e",
      tee: "\u144f",
      tu: "\u1450",
      tuu: "\u1451",
      to: "\u1450",
      too: "\u1451",
      ta: "\u1455",
      taa: "\u1456",
      di: "\u144e",
      dii: "\u144f",
      de: "\u144e",
      dee: "\u144f",
      du: "\u1450",
      duu: "\u1451",
      do: "\u1450",
      doo: "\u1451",
      da: "\u1455",
      daa: "\u1456",
      ki: "\u146d",
      kii: "\u146e",
      ke: "\u146d",
      kee: "\u146e",
      ku: "\u146f",
      kuu: "\u1470",
      ko: "\u146f",
      koo: "\u1470",
      ka: "\u1472",
      kaa: "\u1473",
      k: "\u1483",
      gi: "\u148b",
      ge: "\u148b",
      gii: "\u148c",
      gee: "\u148c",
      gu: "\u148d",
      go: "\u148d",
      guu: "\u148e",
      goo: "\u148e",
      ga: "\u1490",
      gaa: "\u1491",
      g: "\u14a1",
      mi: "\u14a5",
      me: "\u14a5",
      mii: "\u14a6",
      mee: "\u14a6",
      mu: "\u14a7",
      mo: "\u14a7",
      muu: "\u14a8",
      moo: "\u14a8",
      ma: "\u14aa",
      maa: "\u14ab",
      m: "\u14bb",
      ni: "\u14c2",
      ne: "\u14c2",
      nee: "\u14c3",
      nii: "\u14c3",
      nu: "\u14c4",
      no: "\u14c4",
      nuu: "\u14c5",
      noo: "\u14c5",
      na: "\u14c7",
      naa: "\u14c8",
      n: "\u14d0",
      nni: "\u14d0\u14c2",
      nne: "\u14d0\u14c2",
      nnee: "\u14d0\u14c3",
      nnii: "\u14d0\u14c3",
      nnu: "\u14d0\u14c4",
      nno: "\u14d0\u14c4",
      nnuu: "\u14d0\u14c5",
      nnoo: "\u14d0\u14c5",
      nna: "\u14d0\u14c7",
      nnaa: "\u14d0\u14c8",
      nn: "\u14d0\u14d0",
      si: "\u14ef",
      se: "\u14ef",
      sii: "\u14f0",
      see: "\u14f0",
      su: "\u14f1",
      so: "\u14f1",
      suu: "\u14f2",
      soo: "\u14f2",
      sa: "\u14f4",
      saa: "\u14f5",
      s: "\u1505",
      li: "\u14d5",
      le: "\u14d5",
      lii: "\u14d6",
      lee: "\u14d6",
      lu: "\u14d7",
      lo: "\u14d7",
      luu: "\u14d8",
      loo: "\u14d8",
      la: "\u14da",
      laa: "\u14db",
      l: "\u14ea",
      ji: "\u1528",
      je: "\u1528",
      jii: "\u1529",
      jee: "\u1529",
      jo: "\u152a",
      ju: "\u152a",
      joo: "\u152b",
      juu: "\u152b",
      ja: "\u152d",
      jaa: "\u152e",
      j: "\u153e",
      yi: "\u1528",
      ye: "\u1528",
      yii: "\u1529",
      yee: "\u1529",
      yo: "\u152a",
      yu: "\u152a",
      yoo: "\u152b",
      yuu: "\u152b",
      ya: "\u152d",
      yaa: "\u152e",
      y: "\u153e",
      ri: "\u1546",
      re: "\u1546",
      rii: "\u1547",
      ree: "\u1547",
      ru: "\u1548",
      ro: "\u1548",
      ruu: "\u1549",
      roo: "\u1549",
      ra: "\u154b",
      raa: "\u154c",
      r: "\u1550",
      vi: "\u1555",
      ve: "\u1555",
      vii: "\u1556",
      vee: "\u1556",
      vu: "\u1557",
      vo: "\u1557",
      vuu: "\u1558",
      voo: "\u1558",
      va: "\u1559",
      vaa: "\u155a",
      v: "\u155d",
      fi: "\u1555",
      fe: "\u1555",
      fii: "\u1556",
      fee: "\u1556",
      fu: "\u1557",
      fo: "\u1557",
      fuu: "\u1558",
      foo: "\u1558",
      fa: "\u1559",
      faa: "\u155a",
      f: "\u155d",
      ngi: "\u158f",
      nge: "\u158f",
      ngii: "\u1590",
      ngee: "\u1590",
      ngu: "\u1591",
      ngo: "\u1591",
      nguu: "\u1592",
      ngoo: "\u1592",
      nga: "\u1593",
      ngaa: "\u1594",
      ng: "\u1595",
      qi: "\u157f",
      qe: "\u157f",
      qii: "\u1580",
      qee: "\u1580",
      qu: "\u1581",
      qo: "\u1581",
      quu: "\u1582",
      qoo: "\u1582",
      qa: "\u1583",
      qaa: "\u1584",
      q: "\u1585",
      qqi: "\u1585\u146d",
      qqii: "\u1585\u146e",
      qqe: "\u1585\u146d",
      qqee: "\u1585\u146e",
      qqu: "\u1585\u146f",
      qquu: "\u1585\u1470",
      qqo: "\u1585\u146f",
      qqoo: "\u1585\u1470",
      qqa: "\u1585\u1472",
      qqaa: "\u1585\u1473",
      qq: "\u1585\u1483",
      nngi: "\u1671",
      nnge: "\u1671",
      nngii: "\u1672",
      nngee: "\u1672",
      nngu: "\u1673",
      nngo: "\u1673",
      nnguu: "\u1674",
      nngoo: "\u1674",
      nnga: "\u1675",
      nngaa: "\u1676",
      nng: "\u1596",
      qli: "\u15a0",
      qle: "\u15a0",
      qlii: "\u15a1",
      qlee: "\u15a1",
      qlu: "\u15a2",
      qlo: "\u15a2",
      qluu: "\u15a3",
      qloo: "\u15a3",
      qla: "\u15a4",
      qlaa: "\u15a5",
      ql: "\u15a6",
      " ": " "
    },
    historyPruneRegex:
      " | |a|b|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|y|pi|pe|ti|to|tu|ta|da|du|do|pu|po|pa|te|ki|ke|ku|ko|ka|gi|ge|gu|go|ga|ng|mi|me|mu|mo|ma|ni|ne|nu|no|na|si|se|su|so|sa|li|le|lu|lo|la|ji|je|ju|jo|ja|ye|yi|yu|yo|ya|ri|re|ru|ro|ra|va|ve|vi|vu|vo|fi|fe|fu|fo|fa|nn|ql|qi|qe|qu|qo|qa|qq|qli|qle|qlu|qlo|qla|ngi|nge|ngu|ngo|nga|nng|nni|nne|nnu|nno|nna|qqi|qqe|qqu|qqo|qqa|nngi|nnge|nngu|nngo|nnga"
  });
}).call(this);
