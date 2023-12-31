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
      this.h =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.s = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.h.length; a++) this.s[this.h[a]] = String.fromCharCode(4520 + a);
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
      this.m = {
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
      this.u = {};
      for (var b in this.m) this.u[this.m[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.D, function (c) {
        return a.h[c.charCodeAt(0) - 4519 - 1];
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
    return b + this.s[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.u[e];
        c += h ? h : e;
      }
      b = c.replace(a.A, k(a.K, a));
      c = k(a.M, a);
      b = q(a, p(a, b)).replace(a.H, c).replace(a.F, c).replace(a.G, c).replace(a.I, c).replace(a.B, k(a.J, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.m[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "oj",
    title: "Ojibwe Left Dot - E Finals",
    mappings: {
      ",c": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "s,sc": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      "l,cl": { "": "`1234567890-=QWERTYUIOP[]\\\u140aSDFGHJKL;'ZXCVBNM,./" },
      "sl,scl": { "": '~!@#$%^&*()_+qwertyuiop{}|\u140asdfghjkl:"zxcvbnm<>?' }
    },
    transform: {
      e: "\u1401",
      i: "\u1403",
      o: "\u1405",
      a: "\u140a",
      ii: "\u140e",
      oo: "\u1412",
      aa: "\u1417",
      be: "\u142f",
      bi: "\u1431",
      bo: "\u1433",
      ba: "\u1438",
      bii: "\u143c",
      boo: "\u1440",
      baa: "\u1444",
      b: "\u1449",
      pe: "\u142f",
      pi: "\u1431",
      po: "\u1433",
      pa: "\u1438",
      pii: "\u143c",
      poo: "\u1440",
      paa: "\u1444",
      p: "\u1449",
      de: "\u144c",
      di: "\u144e",
      do: "\u1450",
      da: "\u1455",
      dii: "\u1459",
      doo: "\u145d",
      daa: "\u1461",
      d: "\u14bc",
      te: "\u144c",
      ti: "\u144e",
      to: "\u1450",
      ta: "\u1455",
      tii: "\u1459",
      too: "\u145d",
      taa: "\u1461",
      t: "\u14bc",
      ge: "\u146b",
      gi: "\u146d",
      go: "\u1484",
      ga: "\u1483",
      gii: "\u1476",
      goo: "\u147a",
      gaa: "\u147e",
      g: "\u1483",
      k: "\u1483",
      ke: "\u146b",
      ki: "\u146d",
      ko: "\u1484",
      ka: "\u1483",
      kii: "\u1476",
      koo: "\u147a",
      kaa: "\u147e",
      j: "\u14a1",
      je: "\u1489",
      ji: "\u148b",
      jo: "\u148d",
      ja: "\u1490",
      jii: "\u1494",
      joo: "\u1498",
      jaa: "\u149c",
      ch: "\u14a1",
      che: "\u146b",
      chi: "\u146d",
      cho: "\u1484",
      cha: "\u1483",
      chii: "\u1476",
      choo: "\u147a",
      chaa: "\u147e",
      ne: "\u14c0",
      ni: "\u14c2",
      no: "\u14c4",
      na: "\u14c7",
      nii: "\u1427\u14c2",
      noo: "\u1427\u14c4",
      naa: "\u14cb",
      me: "\u14a3",
      mi: "\u14a5",
      mo: "\u14a7",
      ma: "\u14aa",
      mii: "\u14ae",
      moo: "\u14b2",
      maa: "\u14b6",
      se: "\u14ed",
      si: "\u14ef",
      so: "\u14f1",
      sa: "\u14f4",
      sii: "\u14f8",
      soo: "\u14fc",
      saa: "\u1500",
      ze: "\u14ed",
      zi: "\u14ef",
      zo: "\u14f1",
      za: "\u14f4",
      zii: "\u14f8",
      zoo: "\u14fc",
      zaa: "\u1500",
      she: "\u1510",
      shi: "\u1511",
      sho: "\u1513",
      sha: "\u1515",
      shii: "\u1519",
      shoo: "\u151d",
      shaa: "\u1521",
      sh: "\u1525",
      ye: "\u1526",
      yi: "\u1528",
      yo: "\u152a",
      ya: "\u152d",
      yii: "\u1531",
      yoo: "\u1535",
      yaa: "\u1539",
      y: "\u153e",
      le: "\u14d3",
      li: "\u14d5",
      lo: "\u14d7",
      la: "\u14da",
      lii: "\u14de",
      loo: "\u14e2",
      laa: "\u14e6",
      l: "\u14ea",
      we: "\u140c",
      wi: "\u140e",
      wo: "\u1412",
      wa: "\u1417",
      wii: "\u1410",
      woo: "\u1414",
      waa: "\u1419",
      w: "\u1424",
      ve: "\u1555",
      vi: "\u1553",
      vo: "\u1557",
      va: "\u155a",
      v: "\u155d",
      vii: "\u1427\u1553",
      voo: "\u1427\u1557",
      vaa: "\u1427\u155a"
    },
    historyPruneRegex:
      "a|b|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|y|ii|oo|aa|be|bi|bo|ba|bii|boo|baa|pe|pi|po|pa|pii|poo|paa|de|di|do\u201dda|dii|doo|daa|te|ti|to|ta|tii|too|taa|ge|gi|go|ga|gii|goo|gaa|ke|ki|ko|ka|kii|koo|kaa|je|ji|jo|ja|jii|joo|jaa|ch|che|chi|cho|cha|chii|choo|chaa|ne|ni|no|na|nii|noo|naa|me|mi|mo|ma|mii|moo|maa|se|si|so|sa|sii|soo|saa|ze|zi|zo|za|zii|zoo|zaa|she|shi|sho|sha|shii|shoo|shaa|sh|ye|yi|yo|ya|yii|yoo|yaa|le|li|lo|la|lii|loo|laa|we|wi|wo|wa|wii|woo|wa|wii|woo|waa|ve|vi|vo|va|vii|voo|vaa|"
  });
}).call(this);
