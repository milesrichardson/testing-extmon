(function () {
  "use strict";
  var k = function (a, d, f) {
    if (0 == d) return null;
    var e = { back: 0 },
      g = !!(d & 1);
    if (d & 4 && g) {
      var b = c[a];
      f && void 0 != f[a] && (b = f[a]);
      if (b) return 1 < b.length && ((a = b[0].charAt(b[1])), (b[1] ^= 1), (b = a)), (e.text = b), e;
    }
    return d & 2 && (!g || !/[a-z]/i.test(a)) && (a = h[a]) ? ((e.text = a), e) : null;
  };
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
      h = {
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
      l = 0;
    62 > l;
    ++l
  ) {
    var m =
      "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[
        l
      ];
    10 > l ? (h[String(l)] = m) : 36 > l ? (h[String.fromCharCode(l + 87)] = m) : (h[String.fromCharCode(l + 29)] = m);
  }
  google.elements.ime.loadConfig(
    "zh-hant-t-i0-pinyin",
    (function () {
      var a = {
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
          16: null
        },
        d = { "'": ["\u300c\u300d", 0], '"': ["\u300e\u300f", 0] };
      a[19] = function (f, e, g) {
        return k(e, g, d);
      };
      a[22] = /[a-z']/i;
      a[24] = /[=.]/;
      a[25] = /[\-,]/;
      a[26] = /[^a-z \r]/i;
      return a;
    })()
  );
}).call(this);
