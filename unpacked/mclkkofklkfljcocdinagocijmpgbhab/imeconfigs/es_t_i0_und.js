(function () {
  "use strict";
  var f = function () {
      if (d) return d;
      d = {};
      var a = {
          c: "\u00e7",
          C: "\u00c7",
          ae: "\u00e6",
          aE: "\u00e6",
          oe: "\u0153",
          oE: "\u0153",
          Ae: "\u00c6",
          AE: "\u00c6",
          Oe: "\u0152",
          OE: "\u0152",
          ss: "\u00df"
        },
        b;
      for (b in a) (d[b] = d[b] || [b]), d[b].push(a[b]);
      for (var c in e) (a = c.charAt(1)), (d[a] = d[a] || [a]), d[a].push(e[c]);
      return d;
    },
    h = function (a, b) {
      a += b;
      if (2 > a.length) return null;
      a = a.slice(-2);
      return e[a] ? ((b = { back: 1 }), (b.text = e[a]), b) : null;
    },
    k = function () {
      var a = {
        "\u00e1": "a",
        "\u00e9": "e",
        "\u00ed": "i",
        "\u00f1": "n",
        "\u00f3": "o",
        "\u00fa": "u",
        "\u00fc": "u",
        "\u00c1": "A",
        "\u00c9": "E",
        "\u00cd": "I",
        "\u00d1": "N",
        "\u00d3": "O",
        "\u00da": "U",
        "\u00dc": "U"
      };
      return function (b) {
        var c = [];
        c.back = b.length;
        c.text = b.replace(/./g, function (g) {
          return a[g] || g;
        });
        return c;
      };
    };
  var e = {
      "`A": "\u00c0",
      "`E": "\u00c8",
      "`I": "\u00cc",
      "`N": "\u01f8",
      "`O": "\u00d2",
      "`U": "\u00d9",
      "`W": "\u1e80",
      "`Y": "\u1ef2",
      "`a": "\u00e0",
      "`e": "\u00e8",
      "`i": "\u00ec",
      "`n": "\u01f9",
      "`o": "\u00f2",
      "`u": "\u00f9",
      "`w": "\u1e81",
      "`y": "\u1ef3",
      "^A": "\u00c2",
      "^C": "\u0108",
      "^E": "\u00ca",
      "^G": "\u011c",
      "^H": "\u0124",
      "^I": "\u00ce",
      "^J": "\u0134",
      "^O": "\u00d4",
      "^S": "\u015c",
      "^U": "\u00db",
      "^W": "\u0174",
      "^Y": "\u0176",
      "^Z": "\u1e90",
      "^a": "\u00e2",
      "^c": "\u0109",
      "^e": "\u00ea",
      "^g": "\u011d",
      "^h": "\u0125",
      "^i": "\u00ee",
      "^j": "\u0135",
      "^o": "\u00f4",
      "^s": "\u015d",
      "^u": "\u00fb",
      "^w": "\u0175",
      "^y": "\u0177",
      "^z": "\u1e91",
      "~A": "\u00c3",
      "~E": "\u1ebc",
      "~I": "\u0128",
      "~N": "\u00d1",
      "~O": "\u00d5",
      "~U": "\u0168",
      "~V": "\u1e7c",
      "~Y": "\u1ef8",
      "~a": "\u00e3",
      "~e": "\u1ebd",
      "~i": "\u0129",
      "~n": "\u00f1",
      "~o": "\u00f5",
      "~u": "\u0169",
      "~v": "\u1e7d",
      "~y": "\u1ef9",
      '"A': "\u00c4",
      '"E': "\u00cb",
      '"H': "\u1e26",
      '"I': "\u00cf",
      '"O': "\u00d6",
      '"U': "\u00dc",
      '"W': "\u1e84",
      '"X': "\u1e8c",
      '"Y': "\u0178",
      '"a': "\u00e4",
      '"e': "\u00eb",
      '"h': "\u1e27",
      '"i': "\u00ef",
      '"o': "\u00f6",
      '"t': "\u1e97",
      '"u': "\u00fc",
      '"w': "\u1e85",
      '"x': "\u1e8d",
      '"y': "\u00ff",
      ">A": "\u00c1",
      ">C": "\u0106",
      ">E": "\u00c9",
      ">G": "\u01f4",
      ">I": "\u00cd",
      ">K": "\u1e30",
      ">L": "\u0139",
      ">M": "\u1e3e",
      ">N": "\u0143",
      ">O": "\u00d3",
      ">P": "\u1e54",
      ">R": "\u0154",
      ">S": "\u015a",
      ">U": "\u00da",
      ">W": "\u1e82",
      ">Y": "\u00dd",
      ">Z": "\u0179",
      ">a": "\u00e1",
      ">c": "\u0107",
      ">e": "\u00e9",
      ">g": "\u01f5",
      ">i": "\u00ed",
      ">k": "\u1e31",
      ">l": "\u013a",
      ">m": "\u1e3f",
      ">n": "\u0144",
      ">o": "\u00f3",
      ">p": "\u1e55",
      ">r": "\u0155",
      ">s": "\u015b",
      ">u": "\u00fa",
      ">w": "\u1e83",
      ">y": "\u00fd",
      ">z": "\u017a"
    },
    d = null;
  google.elements.ime.loadConfig(
    "es-t-i0-und",
    (function () {
      var a = {
        0: 0,
        1: 2,
        2: !0,
        3: !0,
        4: !1,
        5: !0,
        6: !1,
        7: !1,
        8: !1,
        9: !0,
        10: !0,
        29: !0,
        28: !1,
        11: !0,
        12: !1,
        32: !0,
        13: 50,
        14: 6,
        15: 1
      };
      a[16] = f();
      a[19] = function (b, c) {
        return ("?" != c && "!" != c) || (!/[ \u00a0\t]$/.test(b) && b)
          ? h(b, c)
          : ((b = { back: 0 }), (b.text = "?" == c ? "\u00bf" : "\u00a1"), b);
      };
      a[21] = h;
      a[20] = k();
      a[22] = /[a-z`~"\^>]/i;
      a[27] = /[^a-z`~"\^>\u1e00-\u1ef9\u00c0-\u0233]/i;
      return a;
    })()
  );
}).call(this);
