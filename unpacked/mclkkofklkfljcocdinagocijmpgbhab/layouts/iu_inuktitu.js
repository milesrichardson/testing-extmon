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
      this.i = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.i[this.g[a]] = String.fromCharCode(4520 + a);
      this.A = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.G = /[\u11a8-\u11c3]/g;
      this.F = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.C = /[\uac00-\ud7af]/g;
      this.D = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.m = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.H = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.o = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      this.j = {};
      for (var b in this.h) this.j[this.h[b]] = b;
    },
    p = function (a, b) {
      return b.replace(a.G, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.F, function (c) {
        return a.A[c];
      });
    },
    l = this || self;
  n.prototype.v = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.u = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.B = function (a, b, c, d) {
    return b + this.i[c] + d;
  };
  (function () {
    var a = new n();
    m(function (b) {
      b = b.replace("\u001d", "");
      for (var c = "", d = 0, e; (e = b.charAt(d)); ++d) {
        var h = a.j[e];
        c += h ? h : e;
      }
      b = c.replace(a.C, k(a.v, a));
      c = k(a.B, a);
      b = q(a, p(a, b)).replace(a.m, c).replace(a.H, c).replace(a.l, c).replace(a.o, c).replace(a.D, k(a.u, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "iu_inuktitu",
    title: "Inuktitut Unicode",
    mappings: {
      "": {
        "": "{{\u0307}}\u1595\u1449\u1550\u1483\u1466\u1585\u14bb\u14d0\u14ea\u153e-\u155d\u158f\u1403\u157f\u146d\u144e\u14ef\u14a5\u14c2\u14de\u1528\u14a1{{\u0307}}\\\u1591\u1405\u1581\u146f\u1450\u14f1\u14a7\u14c4\u14d7;'\u1593\u140a\u1583\u1472\u1455\u14f4\u14aa,./"
      },
      c: {
        "": "{{\u0307}}!@#$%^&*[]{{}}=\u1590\u1404\u1580\u146e\u144f\u14f0\u14a6\u14c3\u14d6\u1529{{}}{{\u0307}}/\u1592\u1406\u1582\u1470\u1451\u14f2\u14a8\u14c5\u14d8{{}}{{}}\u1594\u140b\u1584\u1473\u1456\u14f5\u14ab\u00d7\u0142\u152e"
      },
      s: {
        "": '{{\u0307}}1234567890_+\u148b\u1431\u1546\u1595\u1671\u1673\u1675\u15a4\u15a0\u15a6\u1505{{\u0307}}|\u148d\u1433\u1548\u1555()\u152a\u1557\u15a2:"\u1490\u1438\u154b?\u157c\u14c7\u14da<>\u1559'
      },
      sc: {
        "": "{{\u0307}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}\u148c\u1432\u1547{{}}\u1672\u1674\u1676\u15a5\u15a1{{}}{{}}{{\u0307}}{{}}\u148e\u1434\u1549\u1556{{}}{{}}\u152b\u1558\u15a3{{}}{{}}\u1491\u1439\u154c{{}}{{}}\u14c8\u14db{{}}{{}}\u155a"
      },
      "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' },
      "l,cl": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" }
    },
    transform: {
      "\u0307\u158f": "\u1590",
      "\u0307\u1403": "\u1404",
      "\u0307\u157f": "\u1580",
      "\u0307\u1591": "\u1592",
      "\u0307\u146d": "\u146e",
      "\u0307\u144e": "\u144f",
      "\u0307\u14ef": "\u14f0",
      "\u0307\u14a5": "\u14a6",
      "\u0307\u14c2": "\u14c3",
      "\u0307\u14de": "\u14d6",
      "\u0307\u1528": "\u1529",
      "\u0307\u14a1": "\u14a2",
      "\u0307\u1405": "\u1406",
      "\u0307\u1581": "\u1582",
      "\u0307\u146f": "\u1470",
      "\u0307\u1450": "\u1451",
      "\u0307\u14f1": "\u14f2",
      "\u0307\u14a7": "\u14a8",
      "\u0307\u14c4": "\u14c5",
      "\u0307\u14d7": "\u14d8",
      "\u0307\u1593": "\u1594",
      "\u0307\u140a": "\u140b",
      "\u0307\u1583": "\u1584",
      "\u0307\u1472": "\u1473",
      "\u0307\u1455": "\u1456",
      "\u0307\u14f4": "\u14f5",
      "\u0307\u14aa": "\u14ab",
      "\u0307\u148b": "\u148c",
      "\u0307\u1431": "\u1432",
      "\u0307\u1546": "\u1547",
      "\u0307\u1595": "\u1596",
      "\u0307\u1671": "\u1672",
      "\u0307\u1673": "\u1674",
      "\u0307\u1675": "\u1676",
      "\u0307\u15a4": "\u15a5",
      "\u0307\u15a0": "\u15a1",
      "\u0307\u15a6": "\u15a7",
      "\u0307\u1505": "\u1506",
      "\u0307\u148d": "\u148e",
      "\u0307\u1433": "\u1434",
      "\u0307\u1548": "\u1549",
      "\u0307\u1555": "\u1556",
      "\u0307\u152a": "\u152b",
      "\u0307\u1557": "\u1558",
      "\u0307\u15a2": "\u15a3",
      "\u0307\u1490": "\u1491",
      "\u0307\u1438": "\u1439",
      "\u0307\u154b": "\u154c",
      "\u0307\u14c7": "\u14c8",
      "\u0307\u14da": "\u14db",
      "\u0307\u1559": "\u155a"
    }
  });
}).call(this);
