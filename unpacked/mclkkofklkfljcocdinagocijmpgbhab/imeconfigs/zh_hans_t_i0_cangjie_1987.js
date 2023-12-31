(function () {
  "use strict";
  var h = function (c, b) {
    if (0 == b) return null;
    var a = { back: 0 },
      f = !!(b & 1);
    if (b & 4 && f) {
      var d = e[c];
      if (d) return 1 < d.length && ((c = d[0].charAt(d[1])), (d[1] ^= 1), (d = c)), (a.text = d), a;
    }
    return b & 2 && (!f || !/[a-z]/i.test(c)) && (c = g[c]) ? ((a.text = c), a) : null;
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
      g = {
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
      k = 0;
    62 > k;
    ++k
  ) {
    var l =
      "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a"[
        k
      ];
    10 > k ? (g[String(k)] = l) : 36 > k ? (g[String.fromCharCode(k + 87)] = l) : (g[String.fromCharCode(k + 29)] = l);
  }
  google.elements.ime.loadConfig(
    "zh-hans-t-i0-cangjie-1987",
    (function () {
      var c = {
        a: "\u65e5",
        b: "\u6708",
        c: "\u91d1",
        d: "\u6728",
        e: "\u6c34",
        f: "\u706b",
        g: "\u571f",
        h: "\u7af9",
        i: "\u6208",
        j: "\u5341",
        k: "\u5927",
        l: "\u4e2d",
        m: "\u4e00",
        n: "\u5f13",
        o: "\u4eba",
        p: "\u5fc3",
        q: "\u624b",
        r: "\u53e3",
        s: "\u5c38",
        t: "\u5eff",
        u: "\u5c71",
        v: "\u5973",
        w: "\u7530",
        x: "\u96e3",
        y: "\u535c",
        z: "\u91cd"
      };
      return {
        0: 0,
        1: 2,
        2: !0,
        3: !1,
        4: !0,
        5: !1,
        6: !0,
        7: !0,
        8: !1,
        9: !0,
        10: !1,
        28: !1,
        30: !1,
        11: !1,
        12: !0,
        31: !0,
        13: 5,
        14: 5,
        15: 5,
        16: null,
        19: function (b, a, f) {
          return f & 1 && "*" == a ? null : h(a, f);
        },
        21: function (b, a) {
          return b && !a
            ? ((b = b.replace(/[a-z]/g, function (f) {
                return c[f];
              })),
              (a = {}),
              (a.text = b),
              (a.back = 0),
              a)
            : null;
        },
        22: /[a-z'.*]/i,
        24: /[=.]/,
        25: /[\-,]/,
        26: /[^a-z'.* \r]/i
      };
    })()
  );
}).call(this);
