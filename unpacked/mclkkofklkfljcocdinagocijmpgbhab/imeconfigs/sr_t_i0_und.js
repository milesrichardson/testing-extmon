(function () {
  "use strict";
  var a = {
    0: 0,
    1: 2,
    2: !0,
    3: !0,
    4: !1,
    5: !1,
    6: !1,
    7: !1,
    8: !1,
    9: !0,
    10: !1,
    28: !1,
    11: !0,
    12: !0,
    13: 50,
    14: 6,
    15: 1,
    16: {
      a: ["\u0430"],
      b: ["\u0431"],
      c: ["\u0446", "\u0447", "\u045b"],
      ch: ["\u0447", "\u045b"],
      cj: ["\u045b"],
      cy: ["\u045b"],
      d: ["\u0434"],
      dj: ["\u0452"],
      dz: ["\u045f"],
      dzh: ["\u045f"],
      "d\u017e": ["\u045f"],
      e: ["\u0435"],
      f: ["\u0444"],
      g: ["\u0433"],
      h: ["\u0445"],
      i: ["\u0438"],
      j: ["\u0452", "\u0458"],
      k: ["\u043a"],
      kh: ["\u0445"],
      l: ["\u043b", "\u0459"],
      lj: ["\u0459"],
      m: ["\u043c"],
      n: ["\u043d"],
      ng: ["\u045a"],
      nj: ["\u045a"],
      o: ["\u043e"],
      oo: ["\u0443"],
      p: ["\u043f"],
      ph: ["\u0444"],
      r: ["\u0440"],
      s: ["\u0441", "\u0448"],
      sh: ["\u0448"],
      t: ["\u0442"],
      tch: ["\u0447", "\u045b"],
      tj: ["\u045b"],
      ts: ["\u0446"],
      tsh: ["\u045b"],
      ty: ["\u045b"],
      u: ["\u0443"],
      v: ["\u0432"],
      y: ["\u0458"],
      ye: ["\u0435"],
      z: ["\u0436", "\u0437"],
      zh: ["\u0436"],
      "\u0107": ["\u045b"],
      "\u010d": ["\u0447"],
      "\u0111": ["\u0452"],
      "\u0161": ["\u0448"],
      "\u017e": ["\u0436"]
    }
  };
  a[22] = RegExp("[a-z\u0106\u0107\u010c\u010d\u0110\u0111\u0160\u0161\u017d\u017e]", "i");
  a[27] = RegExp("[^a-z\u0106\u0107\u010c\u010d\u0110\u0111\u0160\u0161\u017d\u017e\u0400-\u04ff]", "i");
  google.elements.ime.loadConfig("sr-t-i0-und", a);
}).call(this);
