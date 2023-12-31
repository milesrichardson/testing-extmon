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
      this.u = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.u[this.g[a]] = String.fromCharCode(4520 + a);
      this.L = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.D = /[\u11a8-\u11c3]/g;
      this.C = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.A = /[\uac00-\ud7af]/g;
      this.B = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.H = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.F = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.G = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.I = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
      this.j = {
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
      this.v = {};
      for (var b in this.j) this.v[this.j[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.D, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.C, function (c) {
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
    return b + this.u[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.v[e];
        c += h ? h : e;
      }
      b = c.replace(a.A, k(a.K, a));
      c = k(a.M, a);
      b = q(a, p(a, b)).replace(a.H, c).replace(a.F, c).replace(a.G, c).replace(a.I, c).replace(a.B, k(a.J, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.j[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "crk_phone",
    title: "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423",
    source: "https://www.altlab.dev/plains-cree-syllabics-key-sequences/",
    mappings: {
      ",c": { "": "`1234567890-={{}}werty{{}}iop[]\\as{{}}{{}}{{}}h{{}}kl{{\u00ab}}{{\u00bb}}{{}}xc{{}}{{}}nm,{{\u166e}}/" },
      "s,sc": {
        "": '~!@#$%^&*()_+{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{}|{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}:"{{}}{{}}{{}}{{}}{{}}{{}}{{}}<>?{{S||\u140a\u1431\u14ef||\u202f}}'
      },
      "l,cl": {
        "": "`1234567890-={{\u200cq}}{{\u200cw}}{{\u200ce}}{{\u200cr}}{{\u200ct}}{{\u200cy}}{{\u200cu}}{{\u200ci}}{{\u200co}}{{\u200cp}}[]\\{{\u200ca}}{{\u200cs}}{{\u200cd}}{{\u200cf}}{{\u200cg}}{{\u200ch}}{{\u200cj}}{{\u200ck}}{{\u200cl}};'{{\u200cz}}{{\u200cx}}{{\u200cc}}{{\u200cv}}{{\u200cb}}{{\u200cn}}{{\u200cm}},{{\u200c.}}/"
      },
      "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    },
    transform: {
      e: "\u1401",
      i: "\u1403",
      ii: "\u1404",
      o: "\u1405",
      oo: "\u1406",
      a: "\u140a",
      aa: "\u140b",
      we: "\u140d",
      wi: "\u140f",
      wii: "\u1411",
      wo: "\u1413",
      woo: "\u1415",
      wa: "\u1418",
      waa: "\u141a",
      t: "\u141f",
      k: "\u1420",
      s: "\u1422",
      n: "\u1423",
      w: "\u1424",
      h: "\u1426",
      x: "\u157d",
      c: "\u1428",
      y: "\u1429",
      pe: "\u142f",
      pi: "\u1431",
      pii: "\u1432",
      po: "\u1433",
      poo: "\u1434",
      pa: "\u1438",
      paa: "\u1439",
      pwe: "\u143b",
      pwi: "\u143d",
      pwii: "\u143f",
      pwo: "\u1441",
      pwoo: "\u1443",
      pwa: "\u1445",
      pwaa: "\u1447",
      p: "\u144a",
      te: "\u144c",
      ti: "\u144e",
      tii: "\u144f",
      to: "\u1450",
      too: "\u1451",
      ta: "\u1455",
      taa: "\u1456",
      twe: "\u1458",
      twi: "\u145a",
      twii: "\u145c",
      two: "\u145e",
      twoo: "\u1460",
      twa: "\u1462",
      twaa: "\u1464",
      ke: "\u146b",
      ki: "\u146d",
      kii: "\u146e",
      ko: "\u146f",
      koo: "\u1470",
      ka: "\u1472",
      kaa: "\u1473",
      kwe: "\u1475",
      kwi: "\u1477",
      kwii: "\u1479",
      kwo: "\u147b",
      kwoo: "\u147d",
      kwa: "\u147f",
      kwaa: "\u1481",
      ce: "\u1489",
      ci: "\u148b",
      cii: "\u148c",
      co: "\u148d",
      coo: "\u148e",
      ca: "\u1490",
      caa: "\u1491",
      cwe: "\u1493",
      cwi: "\u1495",
      cwii: "\u1497",
      cwo: "\u1499",
      cwoo: "\u149b",
      cwa: "\u149d",
      cwaa: "\u149f",
      me: "\u14a3",
      mi: "\u14a5",
      mii: "\u14a6",
      mo: "\u14a7",
      moo: "\u14a8",
      ma: "\u14aa",
      maa: "\u14ab",
      mwe: "\u14ad",
      mwi: "\u14af",
      mwii: "\u14b1",
      mwo: "\u14b3",
      mwoo: "\u14b5",
      mwa: "\u14b7",
      mwaa: "\u14b9",
      m: "\u14bc",
      ne: "\u14c0",
      ni: "\u14c2",
      nii: "\u14c3",
      no: "\u14c4",
      noo: "\u14c5",
      na: "\u14c7",
      naa: "\u14c8",
      nwe: "\u14ca",
      nwi: "\u18c7",
      nwii: "\u18c9",
      nwo: "\u18cb",
      nwoo: "\u18cd",
      nwa: "\u14cc",
      nwaa: "\u14ce",
      l: "\u14ec",
      se: "\u14ed",
      si: "\u14ef",
      sii: "\u14f0",
      so: "\u14f1",
      soo: "\u14f2",
      sa: "\u14f4",
      saa: "\u14f5",
      swe: "\u14f7",
      swi: "\u14f9",
      swii: "\u14fb",
      swo: "\u14fd",
      swoo: "\u14ff",
      swa: "\u1501",
      swaa: "\u1503",
      ye: "\u1526",
      yi: "\u1528",
      yii: "\u1529",
      yo: "\u152a",
      yoo: "\u152b",
      ya: "\u152d",
      yaa: "\u152e",
      ywe: "\u1530",
      ywi: "\u1532",
      ywii: "\u1534",
      ywo: "\u1536",
      ywoo: "\u1538",
      ywa: "\u153a",
      ywaa: "\u153c",
      r: "\u1552",
      "\u200c([a-zA-Z.])": "$1"
    },
    historyPruneRegex: "[ptkcmnsywlr]?w?[ioa]?"
  });
}).call(this);
