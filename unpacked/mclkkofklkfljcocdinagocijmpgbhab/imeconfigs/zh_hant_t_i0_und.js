(function () {
  "use strict";
  var n = function (c, g, d) {
    if (0 == g) return null;
    var h = { back: 0 },
      b = !!(g & 1);
    if (g & 4 && b) {
      var a = e[c];
      d && void 0 != d[c] && (a = d[c]);
      if (a) return 1 < a.length && ((c = a[0].charAt(a[1])), (a[1] ^= 1), (a = c)), (h.text = a), h;
    }
    return g & 2 && (!b || !/[a-z]/i.test(c)) && (c = k[c]) ? ((h.text = c), h) : null;
  };
  for (
    var e = {
        "~": "\uff5e",
        "!": "\uff01",
        $: "\uffe5",
        "^": "\u2026\u2026",
        "*": "\u00d7",
        "(": "\uff08",
        ")": "\uff09",
        "-": "\uff0d",
        _: "\u2014\u2014",
        "[": "\u3010",
        "]": "\u3011",
        "{": "\uff5b",
        "}": "\uff5d",
        "\\": "\u3001",
        ";": "\uff1b",
        ":": "\uff1a",
        "'": ["\u2018\u2019", 0],
        '"': ["\u201c\u201d", 0],
        ",": "\uff0c",
        ".": "\u3002",
        "<": "\u300a",
        ">": "\u300b",
        "/": "\uff0f",
        "?": "\uff1f"
      },
      k = {
        "~": "\uff5e",
        "!": "\uff01",
        "@": "\uff20",
        "#": "\uff03",
        $: "\uff04",
        "^": "\uff3e",
        "&": "\uff06",
        "*": "\uff0a",
        "(": "\uff08",
        ")": "\uff09",
        "-": "\uff0d",
        _: "\uff3f",
        "[": "\uff3b",
        "]": "\uff3d",
        "{": "\uff5b",
        "}": "\uff5d",
        "\\": "\uff3c",
        "|": "\uff5c",
        ";": "\uff1b",
        ":": "\uff1a",
        "'": "\uff07",
        '"': "\uff02",
        ",": "\uff0c",
        ".": "\uff0e",
        "<": "\uff1c",
        ">": "\uff1e",
        "/": "\uff0f",
        "?": "\uff1f"
      },
      p = 0;
    62 > p;
    ++p
  ) {
    var q =
      "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[
        p
      ];
    10 > p ? (k[String(p)] = q) : 36 > p ? (k[String.fromCharCode(p + 87)] = q) : (k[String.fromCharCode(p + 29)] = q);
  }
  google.elements.ime.loadConfig(
    "zh-hant-t-i0-und",
    (function () {
      var c = {
          a: "\u3107",
          b: "\u3116",
          c: "\u310f",
          d: "\u310e",
          e: "\u310d",
          f: "\u3111",
          g: "\u3115",
          h: "\u3118",
          i: "\u311b",
          j: "\u3128",
          k: "\u311c",
          l: "\u3120",
          m: "\u3129",
          n: "\u3119",
          o: "\u311f",
          p: "\u3123",
          q: "\u3106",
          r: "\u3110",
          s: "\u310b",
          t: "\u3114",
          u: "\u3127",
          v: "\u3112",
          w: "\u310a",
          x: "\u310c",
          y: "\u3117",
          z: "\u3108",
          1: "\u3105",
          2: "\u3109",
          3: "\u02c7",
          4: "\u02cb",
          5: "\u3113",
          6: "\u02ca",
          7: "\u02d9",
          8: "\u311a",
          9: "\u311e",
          0: "\u3122",
          "-": "\u3126",
          ";": "\u3124",
          ",": "\u311d",
          ".": "\u3121",
          "/": "\u3125",
          " ": "\u02c9",
          "=": "="
        },
        g = ["1qaz2wsxedcrfv5tgbyhn", "ujm", "8ik,9ol.0p;\\/\\-", "7634 ="],
        d = {
          0: 2,
          1: 2,
          2: !0,
          3: !1,
          4: !0,
          5: !0,
          6: !0,
          7: !0,
          8: !1,
          9: !0,
          10: !1,
          28: !1,
          30: !1,
          11: !1,
          12: !0,
          13: 50,
          14: 6,
          15: 5,
          16: null
        },
        h = { "'": ["\u300c\u300d", 0], '"': ["\u300e\u300f", 0], "-": "", ";": "", ",": "", ".": "", "/": "" };
      d[19] = function (b, a, f) {
        return f & 1 && c[a] ? null : n(a, f, h);
      };
      d[21] = function (b, a) {
        var f = b.length,
          l = new RegExp(
            "^(([0][1]?[2][3])*)([0]?)([1]?)([2]?)([3]?)$".replace(/[0-3]/g, function (r) {
              return g[+r];
            })
          ),
          t = RegExp("[1qaz2wsxedcrfv5tgbyhn]"),
          u = RegExp("[ujm]"),
          v = RegExp("[8ik,9ol.0p;\\/\\-]"),
          w = RegExp("[7634 =]"),
          m = {};
        m.back = f;
        if (a)
          a.match(t)
            ? (b = b.replace(l, "$1" + a + "$4$5$6"))
            : a.match(u)
            ? (b = b.replace(l, "$1$3" + a + "$5$6"))
            : a.match(v)
            ? (b = b.replace(l, "$1$3$4" + a + "$6"))
            : a.match(w) && (b = b.replace(l, "$1$3$4$5" + a)),
            (m.text = b.replace(" ", "="));
        else {
          a = "";
          for (f = 0; f < b.length; ++f) a += c[b.charAt(f)];
          m.text = a;
        }
        return m;
      };
      d[22] = /[a-z0-9\-;,.\/ ]/i;
      d[23] = new RegExp(
        "[3]".replace(/[0-3]/g, function (b) {
          return g[+b];
        })
      );
      d[24] = /[ ]/;
      d[25] = /xyz/;
      d[26] = /xyz/;
      return d;
    })()
  );
}).call(this);
