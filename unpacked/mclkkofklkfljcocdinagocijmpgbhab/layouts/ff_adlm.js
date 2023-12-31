(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var b = "\ud83a$1\ud83a$2",
    g = function (a, c, d) {
      return a.call.apply(a.bind, arguments);
    },
    h = function (a, c, d) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
          var f = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(f, e);
          return a.apply(c, f);
        };
      }
      return function () {
        return a.apply(c, arguments);
      };
    },
    l = function (a, c, d) {
      l = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g : h;
      return l.apply(null, arguments);
    },
    n = function (a) {
      var c = ["google", "elements", "keyboard", "hangulTransform"],
        d = m;
      c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift()); )
        c.length || void 0 === a ? (d[e] && d[e] !== Object.prototype[e] ? (d = d[e]) : (d = d[e] = {})) : (d[e] = a);
    },
    p = function () {
      this.g =
        "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(
          " "
        );
      this.i = { "\u1104": "\u1104", "\u1108": "\u1108", "\u110d": "\u110d" };
      for (var a = 0; a < this.g.length; a++) this.i[this.g[a]] = String.fromCharCode(4520 + a);
      this.G = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
      };
      this.o = /[\u11a8-\u11c3]/g;
      this.L = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g");
      this.J = /[\uac00-\ud7af]/g;
      this.K = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
      this.A = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");
      this.u = RegExp(
        "([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"
      );
      this.v = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");
      this.C = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");
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
      for (var c in this.h) this.j[this.h[c]] = c;
    },
    q = function (a, c) {
      return c.replace(a.o, function (d) {
        return a.g[d.charCodeAt(0) - 4519 - 1];
      });
    },
    r = function (a, c) {
      return c.replace(a.L, function (d) {
        return a.G[d];
      });
    },
    m = this || self;
  p.prototype.F = function (a) {
    a = a.charCodeAt(0) - 44032;
    var c = 4519 + (a % 28);
    return String.fromCharCode(4352 + a / 588) + String.fromCharCode(4449 + (a % 588) / 28) + (4519 == c ? "" : String.fromCharCode(c));
  };
  p.prototype.D = function (a) {
    return String.fromCharCode(
      28 * (21 * (a.charCodeAt(0) - 4352) + (a.charCodeAt(1) - 4449)) + (3 <= a.length ? a.charCodeAt(2) - 4519 : 0) + 44032
    );
  };
  p.prototype.I = function (a, c, d, e) {
    return c + this.i[d] + e;
  };
  (function () {
    var a = new p();
    n(function (c) {
      c = c.replace("\u001d", "");
      for (var d = "", e = 0, f; (f = c.charAt(e)); ++e) {
        var k = a.j[f];
        d += k ? k : f;
      }
      c = d.replace(a.J, l(a.F, a));
      d = l(a.I, a);
      c = r(a, q(a, c)).replace(a.A, d).replace(a.u, d).replace(a.v, d).replace(a.C, d).replace(a.K, l(a.D, a));
      d = "";
      for (e = 0; (f = c.charAt(e)); ++e) (k = a.h[f]), (d += k ? k : f);
      return d;
    });
  })();
  new p();
  google.elements.keyboard.loadme({
    id: "ff_adlm",
    title:
      "\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b",
    direction: "rtl",
    mappings: {
      "": {
        "": "\u0640{{\ud83a\udd51}}{{\ud83a\udd52}}{{\ud83a\udd53}}{{\ud83a\udd54}}{{\ud83a\udd55}}{{\ud83a\udd56}}{{\ud83a\udd57}}{{\ud83a\udd58}}{{\ud83a\udd59}}{{\ud83a\udd50}}-={{\ud83a\udd3b}}{{\ud83a\udd31}}{{\ud83a\udd2b}}{{\ud83a\udd2a}}{{\ud83a\udd3c}}{{\ud83a\udd34}}{{\ud83a\udd35}}{{\ud83a\udd2d}}{{\ud83a\udd2e}}{{\ud83a\udd28}}{{\ud83a\udd3d}}{{\ud83a\udd39}}{{}}{{\ud83a\udd22}}{{\ud83a\udd27}}{{\ud83a\udd23}}{{\ud83a\udd2c}}{{\ud83a\udd3a}}{{\ud83a\udd38}}{{\ud83a\udd36}}{{\ud83a\udd33}}{{\ud83a\udd24}}\u204f'{{\ud83a\udd2f}}{{\ud83a\udd30}}{{\ud83a\udd37}}{{\ud83a\udd29}}{{\ud83a\udd26}}{{\ud83a\udd32}}{{\ud83a\udd25}}\u2e41./"
      },
      s: {
        "": '~!@#$%{{\ud83a\udd48}}&*()_+{{\ud83a\udd19}}{{\ud83a\udd0f}}{{\ud83a\udd09}}{{\ud83a\udd08}}{{\ud83a\udd1a}}{{\ud83a\udd12}}{{\ud83a\udd13}}{{\ud83a\udd0b}}{{\ud83a\udd0c}}{{\ud83a\udd06}}{{\ud83a\udd1b}}{{\ud83a\udd17}}|{{\ud83a\udd00}}{{\ud83a\udd05}}{{\ud83a\udd01}}{{\ud83a\udd0a}}{{\ud83a\udd18}}{{\ud83a\udd16}}{{\ud83a\udd14}}{{\ud83a\udd11}}{{\ud83a\udd02}}:"{{\ud83a\udd0d}}{{\ud83a\udd0e}}{{\ud83a\udd15}}{{\ud83a\udd07}}{{\ud83a\udd04}}{{\ud83a\udd10}}{{\ud83a\udd03}}<>\u061f'
      },
      c: {
        "": "{{\ud83a\udd5e}}1234567890^{{}}{{}}{{\ud83a\udd47}}{{\ud83a\udd45}}{{\ud83a\udd49}}{{\ud83a\udd4a}}{{\ud83a\udd49}}{{\ud83a\udd48}}{{}}{{}}{{\ud83a\udd42}}[]\\{{\ud83a\udd44}}{{\ud83a\udd43}}{{\ud83a\udd47}}{{}}{{\ud83a\udd45}}{{\ud83a\udd3f}}{{}}{{}}{{}}{{}}{{}}{{\ud83a\udd41}}{{}}{{\ud83a\udd46}}{{\ud83a\udd3e}}{{\ud83a\udd40}}{{}}{{}}{{}}{{}}{{\ud83a\udd5f}}"
      },
      sc: {
        "\u00c0": "`",
        1: "\ud83a\udd5e",
        2: "\u20ac",
        3: "\u00be",
        4: "\u00bc",
        5: "\u00bd",
        6: "\u2020",
        7: "\u2021",
        8: "\u00b7",
        9: "\u201e",
        0: "\u201a",
        m: "\u2014",
        "=": "\u00b1",
        P: "\ud83a\udd20",
        "\u00db": "[",
        "\u00dd": "]",
        "\u00dc": "\\",
        S: "\ud83a\udd21",
        H: "\ud83a\udd1d",
        Z: "\ud83a\udd1f",
        V: "\ud83a\udd1c",
        B: "\ud83a\udd1e",
        "\u00bf": "?"
      },
      l: { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" },
      sl: { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
    },
    transform: {
      "\ud83a\udd00\ud83a[\udd00|\udd22]": "\ud83a\udd00\ud83a\udd44",
      "\ud83a\udd22\ud83a[\udd00|\udd22]": "\ud83a\udd22\ud83a\udd44",
      "\ud83a\udd09\ud83a[\udd09|\udd2b]": "\ud83a\udd09\ud83a\udd45",
      "\ud83a\udd2b\ud83a[\udd09|\udd2b]": "\ud83a\udd2b\ud83a\udd45",
      "\ud83a\udd0b\ud83a[\udd0b|\udd2d]": "\ud83a\udd0b\ud83a\udd45",
      "\ud83a\udd2d\ud83a[\udd0b|\udd2d]": "\ud83a\udd2d\ud83a\udd45",
      "\ud83a\udd0c\ud83a[\udd0c|\udd2e]": "\ud83a\udd0c\ud83a\udd45",
      "\ud83a\udd2e\ud83a[\udd0c|\udd2e]": "\ud83a\udd2e\ud83a\udd45",
      "\ud83a\udd13\ud83a[\udd13|\udd35]": "\ud83a\udd13\ud83a\udd45",
      "\ud83a\udd35\ud83a[\udd13|\udd35]": "\ud83a\udd35\ud83a\udd45",
      "\ud83a\udd01\ud83a[\udd01|\udd23]": "\ud83a\udd01\ud83a\udd46",
      "\ud83a\udd02\ud83a[\udd02|\udd24]": "\ud83a\udd02\ud83a\udd46",
      "\ud83a\udd03\ud83a[\udd03|\udd25]": "\ud83a\udd03\ud83a\udd46",
      "\ud83a\udd04\ud83a[\udd04|\udd26]": "\ud83a\udd04\ud83a\udd46",
      "\ud83a\udd05\ud83a[\udd05|\udd27]": "\ud83a\udd05\ud83a\udd46",
      "\ud83a\udd06\ud83a[\udd06|\udd28]": "\ud83a\udd06\ud83a\udd46",
      "\ud83a\udd07\ud83a[\udd07|\udd29]": "\ud83a\udd07\ud83a\udd46",
      "\ud83a\udd08\ud83a[\udd08|\udd2a]": "\ud83a\udd08\ud83a\udd46",
      "\ud83a\udd0a\ud83a[\udd0a|\udd2c]": "\ud83a\udd0a\ud83a\udd46",
      "\ud83a\udd0d\ud83a[\udd0d|\udd2f]": "\ud83a\udd0d\ud83a\udd46",
      "\ud83a\udd0e\ud83a[\udd0e|\udd30]": "\ud83a\udd0e\ud83a\udd46",
      "\ud83a\udd0f\ud83a[\udd0f|\udd31]": "\ud83a\udd0f\ud83a\udd46",
      "\ud83a\udd10\ud83a[\udd10|\udd32]": "\ud83a\udd10\ud83a\udd46",
      "\ud83a\udd11\ud83a[\udd11|\udd33]": "\ud83a\udd11\ud83a\udd46",
      "\ud83a\udd12\ud83a[\udd12|\udd34]": "\ud83a\udd12\ud83a\udd46",
      "\ud83a\udd14\ud83a[\udd14|\udd36]": "\ud83a\udd14\ud83a\udd46",
      "\ud83a\udd15\ud83a[\udd15|\udd37]": "\ud83a\udd15\ud83a\udd46",
      "\ud83a\udd16\ud83a[\udd16|\udd38]": "\ud83a\udd16\ud83a\udd46",
      "\ud83a\udd17\ud83a[\udd17|\udd39]": "\ud83a\udd17\ud83a\udd46",
      "\ud83a\udd18\ud83a[\udd18|\udd3a]": "\ud83a\udd18\ud83a\udd46",
      "\ud83a\udd19\ud83a[\udd19|\udd3b]": "\ud83a\udd19\ud83a\udd46",
      "\ud83a\udd1a\ud83a[\udd1a|\udd3c]": "\ud83a\udd1a\ud83a\udd46",
      "\ud83a\udd1b\ud83a[\udd1b|\udd3d]": "\ud83a\udd1b\ud83a\udd46",
      "\ud83a\udd1c\ud83a[\udd1c|\udd3e]": "\ud83a\udd1c\ud83a\udd46",
      "\ud83a\udd1d\ud83a[\udd1d|\udd3f]": "\ud83a\udd1d\ud83a\udd46",
      "\ud83a\udd1e\ud83a[\udd1e|\udd40]": "\ud83a\udd1e\ud83a\udd46",
      "\ud83a\udd1f\ud83a[\udd1f|\udd41]": "\ud83a\udd1f\ud83a\udd46",
      "\ud83a\udd20\ud83a[\udd20|\udd42]": "\ud83a\udd20\ud83a\udd46",
      "\ud83a\udd21\ud83a[\udd21|\udd43]": "\ud83a\udd21\ud83a\udd46",
      "\ud83a\udd23\ud83a[\udd23|\udd01]": "\ud83a\udd23\ud83a\udd46",
      "\ud83a\udd24\ud83a[\udd24|\udd02]": "\ud83a\udd24\ud83a\udd46",
      "\ud83a\udd25\ud83a[\udd25|\udd03]": "\ud83a\udd25\ud83a\udd46",
      "\ud83a\udd26\ud83a[\udd26|\udd04]": "\ud83a\udd26\ud83a\udd46",
      "\ud83a\udd27\ud83a[\udd27|\udd05]": "\ud83a\udd27\ud83a\udd46",
      "\ud83a\udd28\ud83a[\udd28|\udd06]": "\ud83a\udd28\ud83a\udd46",
      "\ud83a\udd29\ud83a[\udd29|\udd07]": "\ud83a\udd29\ud83a\udd46",
      "\ud83a\udd2a\ud83a[\udd2a|\udd08]": "\ud83a\udd2a\ud83a\udd46",
      "\ud83a\udd2c\ud83a[\udd2c|\udd0a]": "\ud83a\udd2c\ud83a\udd46",
      "\ud83a\udd2f\ud83a[\udd2f|\uddad]": "\ud83a\udd2f\ud83a\udd46",
      "\ud83a\udd30\ud83a[\udd30|\udd0e]": "\ud83a\udd30\ud83a\udd46",
      "\ud83a\udd31\ud83a[\udd31|\udd0f]": "\ud83a\udd31\ud83a\udd46",
      "\ud83a\udd32\ud83a[\udd32|\udd10]": "\ud83a\udd32\ud83a\udd46",
      "\ud83a\udd33\ud83a[\udd33|\udd11]": "\ud83a\udd33\ud83a\udd46",
      "\ud83a\udd34\ud83a[\udd34|\udd12]": "\ud83a\udd34\ud83a\udd46",
      "\ud83a\udd36\ud83a[\udd36|\udd14]": "\ud83a\udd36\ud83a\udd46",
      "\ud83a\udd37\ud83a[\udd37|\udd15]": "\ud83a\udd37\ud83a\udd46",
      "\ud83a\udd38\ud83a[\udd38|\udd16]": "\ud83a\udd38\ud83a\udd46",
      "\ud83a\udd39\ud83a[\udd39|\udd17]": "\ud83a\udd39\ud83a\udd46",
      "\ud83a\udd3a\ud83a[\udd3a|\udd18]": "\ud83a\udd3a\ud83a\udd46",
      "\ud83a\udd3b\ud83a[\udd3b|\udd19]": "\ud83a\udd3b\ud83a\udd46",
      "\ud83a\udd3c\ud83a[\udd3c|\udd1a]": "\ud83a\udd3c\ud83a\udd46",
      "\ud83a\udd3d\ud83a[\udd3d|\udd1b]": "\ud83a\udd3d\ud83a\udd46",
      "\ud83a\udd3e\ud83a[\udd3e|\udd1c]": "\ud83a\udd3e\ud83a\udd46",
      "\ud83a\udd3f\ud83a[\udd3f|\udd1d]": "\ud83a\udd3f\ud83a\udd46",
      "\ud83a\udd40\ud83a[\udd40|\udd1e]": "\ud83a\udd40\ud83a\udd46",
      "\ud83a\udd41\ud83a[\udd41|\udd1f]": "\ud83a\udd41\ud83a\udd46",
      "\ud83a\udd42\ud83a[\udd42|\udd20]": "\ud83a\udd42\ud83a\udd46",
      "\ud83a\udd43\ud83a[\udd43|\udd21]": "\ud83a\udd43\ud83a\udd46",
      "\ud83a([\udd00\udd22])\ud83a\udd44\u001d?\ud83a([\udd00\udd22])": b,
      "\ud83a([\udd09\udd2b])\ud83a\udd45\u001d?\ud83a([\udd09\udd2b])": b,
      "\ud83a([\udd0b\udd2d])\ud83a\udd45\u001d?\ud83a([\udd0b\udd2d])": b,
      "\ud83a([\udd0c\udd2e])\ud83a\udd45\u001d?\ud83a([\udd0c\udd2e])": b,
      "\ud83a([\udd13\udd35])\ud83a\udd45\u001d?\ud83a([\udd13\udd35])": b,
      "\ud83a([\udd01\udd23])\ud83a\udd46\u001d?\ud83a([\udd01\udd23])": b,
      "\ud83a([\udd02\udd24])\ud83a\udd46\u001d?\ud83a([\udd02\udd24])": b,
      "\ud83a([\udd03\udd25])\ud83a\udd46\u001d?\ud83a([\udd03\udd25])": b,
      "\ud83a([\udd04\udd26])\ud83a\udd46\u001d?\ud83a([\udd04\udd26])": b,
      "\ud83a([\udd05\udd27])\ud83a\udd46\u001d?\ud83a([\udd05\udd27])": b,
      "\ud83a([\udd06\udd28])\ud83a\udd46\u001d?\ud83a([\udd06\udd28])": b,
      "\ud83a([\udd07\udd29])\ud83a\udd46\u001d?\ud83a([\udd07\udd29])": b,
      "\ud83a([\udd08\udd2a])\ud83a\udd46\u001d?\ud83a([\udd08\udd2a])": b,
      "\ud83a([\udd0a\udd2c])\ud83a\udd46\u001d?\ud83a([\udd0a\udd2c])": b,
      "\ud83a([\udd0d\udd2f])\ud83a\udd46\u001d?\ud83a([\udd0d\udd2f])": b,
      "\ud83a([\udd0e\udd30])\ud83a\udd46\u001d?\ud83a([\udd0e\udd30])": b,
      "\ud83a([\udd0f\udd31])\ud83a\udd46\u001d?\ud83a([\udd0f\udd31])": b,
      "\ud83a([\udd10\udd32])\ud83a\udd46\u001d?\ud83a([\udd10\udd32])": b,
      "\ud83a([\udd11\udd33])\ud83a\udd46\u001d?\ud83a([\udd11\udd33])": b,
      "\ud83a([\udd12\udd34])\ud83a\udd46\u001d?\ud83a([\udd12\udd34])": b,
      "\ud83a([\udd14\udd36])\ud83a\udd46\u001d?\ud83a([\udd14\udd36])": b,
      "\ud83a([\udd15\udd37])\ud83a\udd46\u001d?\ud83a([\udd15\udd37])": b,
      "\ud83a([\udd16\udd38])\ud83a\udd46\u001d?\ud83a([\udd16\udd38])": b,
      "\ud83a([\udd17\udd39])\ud83a\udd46\u001d?\ud83a([\udd17\udd39])": b,
      "\ud83a([\udd18\udd3a])\ud83a\udd46\u001d?\ud83a([\udd18\udd3a])": b,
      "\ud83a([\udd19\udd3b])\ud83a\udd46\u001d?\ud83a([\udd19\udd3b])": b,
      "\ud83a([\udd1a\udd3c])\ud83a\udd46\u001d?\ud83a([\udd1a\udd3c])": b,
      "\ud83a([\udd1b\udd3d])\ud83a\udd46\u001d?\ud83a([\udd1b\udd3d])": b,
      "\ud83a([\udd1c\udd3e])\ud83a\udd46\u001d?\ud83a([\udd1c\udd3e])": b,
      "\ud83a([\udd1d\udd3f])\ud83a\udd46\u001d?\ud83a([\udd1d\udd3f])": b,
      "\ud83a([\udd1e\udd40])\ud83a\udd46\u001d?\ud83a([\udd1e\udd40])": b,
      "\ud83a([\udd1f\udd41])\ud83a\udd46\u001d?\ud83a([\udd1f\udd41])": b,
      "\ud83a([\udd20\udd42])\ud83a\udd46\u001d?\ud83a([\udd20\udd42])": b,
      "\ud83a([\udd21\udd43])\ud83a\udd46\u001d?\ud83a([\udd21\udd43])": b
    }
  });
}).call(this);
