(function () {
  "use strict";
  for (
    var c = {
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
      e = {
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
      g = 0;
    62 > g;
    ++g
  ) {
    var l =
      "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[
        g
      ];
    10 > g ? (e[String(g)] = l) : 36 > g ? (e[String.fromCharCode(g + 87)] = l) : (e[String.fromCharCode(g + 29)] = l);
  }
  google.elements.ime.loadConfig("zh-t-i0-pinyin-x0-shuangpin-ms", {
    0: 0,
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
    14: 5,
    15: 5,
    16: null,
    19: function (d, a, f, h) {
      if (0 == f) return null;
      d = { back: 0 };
      var k = !!(f & 1);
      if (f & 4 && k) {
        var b = c[a];
        h && void 0 != h[a] && (b = h[a]);
        if (b) return 1 < b.length && ((a = b[0].charAt(b[1])), (b[1] ^= 1), (b = a)), (d.text = b), d;
      }
      return f & 2 && (!k || !/[a-z]/i.test(a)) && (a = e[a]) ? ((d.text = a), d) : null;
    },
    22: /[a-z';]/i,
    24: /[=.]/,
    25: /[\-,]/,
    26: /[^a-z \r]/i
  });
}).call(this);
