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
      this.u = {
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
      this.l = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.F = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.G = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.m = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      return b.replace(a.D, function (c) {
        return a.g[c.charCodeAt(0) - 4519 - 1];
      });
    },
    q = function (a, b) {
      return b.replace(a.C, function (c) {
        return a.u[c];
      });
    },
    l = this || self;
  n.prototype.s = function (a) {
    a = a.charCodeAt(0) - 44032;
    var b = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == b ? "" : String.fromCharCode(b));
  };
  n.prototype.o = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  n.prototype.v = function (a, b, c, d) {
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
      b = c.replace(a.A, k(a.s, a));
      c = k(a.v, a);
      b = q(a, p(a, b)).replace(a.l, c).replace(a.F, c).replace(a.G, c).replace(a.m, c).replace(a.B, k(a.o, a));
      c = "";
      for (d = 0; (e = b.charAt(d)); ++d) (h = a.h[e]), (c += h ? h : e);
      return c;
    });
  })();
  new n();
  google.elements.keyboard.loadme({
    id: "my_myansan",
    title: "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)",
    mappings: {
      "": {
        "": "`\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040-=\u1006\u1010\u1014\u1019\u1021\u1015\u1000\u1004\u101e\u1005\u101f\u1029\u104f{{\u200c\u1031}}\u103b\u102d\u103a\u102b\u1037\u103c\u102f\u1030\u1038'\u1016\u1011\u1001\u101c\u1018\u100a\u102c\u101a.\u104b"
      },
      "c ": { "": "{{\u1004\u103a\u1039}}" },
      "s,sc": {
        "": '\u100e\u100d{{\u100f\u1039\u100d}}\u100b{{\u1000\u103b\u1015\u103a}}%/\u101b\u1002()x+\u1008\u101d\u1023\u104e\u1024\u104c\u1025\u104d\u103f\u100f\u1027\u102a{{\u100b\u1039\u100c}}\u1017\u103e\u102e\u1039\u103d\u1036\u1032\u1012\u1013\u1038"\u1007\u100c\u1003\u1020\u101a\u1009\u1026\u101a.\u104a'
      },
      "l,cl": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    },
    transform: {
      "\u200c\u1031([\u1000-\u102a\u103f\u104e])": "$1\u1031",
      "([\u103c-\u103e]*\u1031)\u001d\u103b": "\u103b$1",
      "([\u103b]*)([\u103d-\u103e]*)\u1031\u001d\u103c": "$1\u103c$2\u1031",
      "([\u103b\u103c]*)([\u103e]*)\u1031\u001d\u103d": "$1\u103d$2\u1031",
      "([\u103b-\u103d]*)\u1031\u001d\u103e": "$1\u103e\u1031",
      "([\u103c-\u103e]+)\u001d?\u103b": "\u103b$1",
      "([\u103b]*)([\u103d-\u103e]+)\u001d?\u103c": "$1\u103c$2",
      "([\u103b\u103c]*)([\u103e]+)\u001d?\u103d": "$1\u103d$2",
      "\u1004\u1031\u001d\u103a": "\u1004\u103a\u1031",
      "\u1004\u103a\u1031\u001d\u1039": "\u1004\u103a\u1039\u1031",
      "\u1004\u103a\u1039\u1031\u001d([\u1000-\u102a\u103f\u104e])": "\u1004\u103a\u1039$1\u1031",
      "([\u1000-\u102a\u103f\u104e])\u1031\u001d\u1039": "$1\u1039\u1031",
      "\u1039\u1031\u001d([\u1000-\u1019\u101c\u101e\u1020\u1021])": "\u1039$1\u1031",
      "\u1036([\u102d|\u102d\u1030|\u102f|\u1030])": "$1\u1036",
      "\u1036([\u103b|\u103c\u103d|\u103e])": "$1\u1036"
    }
  });
}).call(this);
