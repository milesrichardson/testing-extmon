(function () {
  "use strict";
  google.elements.ime.loadConfig(
    "ti-t-i0-und",
    (function () {
      var c = { ".": "\u1362", ",": "\u1363" };
      return {
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
        16: null,
        19: function (b, a) {
          return (b = c[a]) ? ((a = { back: 0 }), (a.text = b), a) : null;
        },
        22: /[a-z`]/i,
        27: /[^a-z`\u1200-\u139F]/i
      };
    })()
  );
}).call(this);
