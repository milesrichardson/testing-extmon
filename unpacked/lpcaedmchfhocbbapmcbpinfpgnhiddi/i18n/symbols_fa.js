/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self,
  b = function (f, k) {
    f = f.split(".");
    var e = a;
    f[0] in e || "undefined" == typeof e.execScript || e.execScript("var " + f[0]);
    for (var g; f.length && (g = f.shift()); )
      f.length || void 0 === k ? (e = e[g] && e[g] !== Object.prototype[g] ? e[g] : (e[g] = {})) : (e[g] = k);
  };
var c = {
  i: {
    1e3: { other: "0K" },
    1e4: { other: "00K" },
    1e5: { other: "000K" },
    1e6: { other: "0M" },
    1e7: { other: "00M" },
    1e8: { other: "000M" },
    1e9: { other: "0B" },
    1e10: { other: "00B" },
    1e11: { other: "000B" },
    1e12: { other: "0T" },
    1e13: { other: "00T" },
    1e14: { other: "000T" }
  },
  h: {
    1e3: { other: "0 thousand" },
    1e4: { other: "00 thousand" },
    1e5: { other: "000 thousand" },
    1e6: { other: "0 million" },
    1e7: { other: "00 million" },
    1e8: { other: "000 million" },
    1e9: { other: "0 billion" },
    1e10: { other: "00 billion" },
    1e11: { other: "000 billion" },
    1e12: { other: "0 trillion" },
    1e13: { other: "00 trillion" },
    1e14: { other: "000 trillion" }
  }
};
c = {
  i: {
    1e3: { other: "0\u00a0\u0647\u0632\u0627\u0631" },
    1e4: { other: "00\u00a0\u0647\u0632\u0627\u0631" },
    1e5: { other: "000\u00a0\u0647\u0632\u0627\u0631" },
    1e6: { other: "0\u00a0\u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e7: { other: "00\u00a0\u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e8: { other: "000\u00a0\u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e9: { other: "0\u00a0\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e10: { other: "00\u00a0\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e11: { other: "000\u00a0\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e12: { other: "0\u00a0\u062a\u0631\u06cc\u0644\u06cc\u0648\u0646" },
    1e13: { other: "00\u00a0\u062a\u0631\u06cc\u0644\u06cc\u0648\u0646" },
    1e14: { other: "000\u00a0\u062a\u0631\u06cc\u0644\u06cc\u0648\u0646" }
  },
  h: {
    1e3: { other: "0 \u0647\u0632\u0627\u0631" },
    1e4: { other: "00 \u0647\u0632\u0627\u0631" },
    1e5: { other: "000 \u0647\u0632\u0627\u0631" },
    1e6: { other: "0 \u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e7: { other: "00 \u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e8: { other: "000 \u0645\u06cc\u0644\u06cc\u0648\u0646" },
    1e9: { other: "0 \u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e10: { other: "00 \u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e11: { other: "000 \u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e12: { other: "0 \u0647\u0632\u0627\u0631\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e13: { other: "00 \u0647\u0632\u0627\u0631\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" },
    1e14: { other: "000 \u0647\u0632\u0627\u0631\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f" }
  }
};
var d = {
  la: "y",
  ta: "y G",
  ma: "MMM y",
  na: "MMMM y",
  ua: "MM/y",
  K: "MMM d",
  L: "MMMM dd",
  N: "M/d",
  M: "MMMM d",
  ra: "MMM d, y",
  ja: "EEE, MMM d",
  sa: "EEE, MMM d, y",
  o: "d",
  qa: "MMM d, h:mm\u202fa zzzz"
};
d = {
  la: "y",
  ta: "y G",
  ma: "MMM y",
  na: "MMMM y",
  ua: "y/MM",
  K: "d LLL",
  L: "dd LLLL",
  N: "M/d",
  M: "d LLLL",
  ra: "d MMM y",
  ja: "EEE d LLL",
  sa: "EEE d MMM y",
  o: "d",
  qa: "d LLL\u060c HH:mm (zzzz)"
};
var h = {
  B: ["BC", "AD"],
  A: ["Before Christ", "Anno Domini"],
  P: "JFMAMJJASOND".split(""),
  ca: "JFMAMJJASOND".split(""),
  J: "January February March April May June July August September October November December".split(" "),
  ba: "January February March April May June July August September October November December".split(" "),
  Y: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ea: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ia: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  ga: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  aa: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  fa: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  R: "SMTWTFS".split(""),
  da: "SMTWTFS".split(""),
  Z: ["Q1", "Q2", "Q3", "Q4"],
  W: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  g: ["AM", "PM"],
  l: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
  ha: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
  m: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
  D: 6,
  ka: [5, 6],
  F: 5
};
h = {
  oa: 1776,
  B: ["\u0642.\u0645.", "\u0645."],
  A: ["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f", "\u0645\u06cc\u0644\u0627\u062f\u06cc"],
  P: "\u0698\u0641\u0645\u0622\u0645\u0698\u0698\u0627\u0633\u0627\u0646\u062f".split(""),
  ca: "\u0698\u0641\u0645\u0622\u0645\u0698\u0698\u0627\u0633\u0627\u0646\u062f".split(""),
  J: "\u0698\u0627\u0646\u0648\u06cc\u0647\u0654 \u0641\u0648\u0631\u06cc\u0647\u0654 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647\u0654 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647\u0654 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(
    " "
  ),
  ba: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(
    " "
  ),
  Y: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(
    " "
  ),
  ea: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(
    " "
  ),
  ia: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(
    " "
  ),
  ga: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(
    " "
  ),
  aa: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(
    " "
  ),
  fa: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(
    " "
  ),
  R: "\u06cc\u062f\u0633\u0686\u067e\u062c\u0634".split(""),
  da: "\u06cc\u062f\u0633\u0686\u067e\u062c\u0634".split(""),
  Z: ["\u0633\u200c\u0645\u06f1", "\u0633\u200c\u0645\u06f2", "\u0633\u200c\u0645\u06f3", "\u0633\u200c\u0645\u06f4"],
  W: [
    "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0627\u0648\u0644",
    "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u062f\u0648\u0645",
    "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0633\u0648\u0645",
    "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0686\u0647\u0627\u0631\u0645"
  ],
  g: ["\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631", "\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631"],
  l: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "y/M/d"],
  ha: ["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"],
  m: ["{1} \u0633\u0627\u0639\u062a {0}", "{1} \u0633\u0627\u0639\u062a {0}", "{1}\u060c {0}", "{1}, {0}"],
  D: 5,
  ka: [4, 4],
  F: 4
};
var l = {
  u: ".",
  G: ",",
  S: "%",
  pa: "0",
  V: "+",
  I: "-",
  C: "E",
  U: "\u2030",
  H: "\u221e",
  O: "NaN",
  s: "#,##0.###",
  X: "#E0",
  T: "#,##0%",
  j: "\u00a4#,##0.00",
  v: "USD"
};
l = {
  u: "\u066b",
  G: "\u066c",
  S: "\u066a",
  pa: "\u06f0",
  V: "\u200e+",
  I: "\u200e\u2212",
  C: "\u00d7\u06f1\u06f0^",
  U: "\u0609",
  H: "\u221e",
  O: "\u0646\u0627\u0639\u062f\u062f",
  s: "#,##0.###",
  X: "#E0",
  T: "#,##0%",
  j: "\u200e\u00a4#,##0.00",
  v: "IRR"
};
b("I18N_DATETIMESYMBOLS_ERAS", h.B);
b("I18N_DATETIMESYMBOLS_ERANAMES", h.A);
b("I18N_DATETIMESYMBOLS_NARROWMONTHS", h.P);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS", h.ca);
b("I18N_DATETIMESYMBOLS_MONTHS", h.J);
b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS", h.ba);
b("I18N_DATETIMESYMBOLS_SHORTMONTHS", h.Y);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS", h.ea);
b("I18N_DATETIMESYMBOLS_WEEKDAYS", h.ia);
b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS", h.ga);
b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS", h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS", h.fa);
b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS", h.R);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS", h.da);
b("I18N_DATETIMESYMBOLS_SHORTQUARTERS", h.Z);
b("I18N_DATETIMESYMBOLS_QUARTERS", h.W);
b("I18N_DATETIMESYMBOLS_AMPMS", h.g);
b("I18N_DATETIMESYMBOLS_DATEFORMATS", h.l);
b("I18N_DATETIMESYMBOLS_TIMEFORMATS", h.ha);
b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS", h.m);
b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK", h.D);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE", h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY", h.F);
b("I18N_DATETIMEPATTERNS_YEAR_FULL", d.la);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR", d.ma);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL", d.na);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR", d.K);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL", d.L);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT", d.N);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM", d.M);
b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM", d.ja);
b("I18N_DATETIMEPATTERNS_DAY_ABBR", d.o);
void 0 !== h.oa && b("I18N_DATETIMESYMBOLS_ZERODIGIT", h.oa);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP", l.u);
b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP", l.G);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT", l.S);
b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT", l.pa);
b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN", l.V);
b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN", l.I);
b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL", l.C);
b("I18N_NUMBERFORMATSYMBOLS_PERMILL", l.U);
b("I18N_NUMBERFORMATSYMBOLS_INFINITY", l.H);
b("I18N_NUMBERFORMATSYMBOLS_NAN", l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN", l.s);
b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN", l.X);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN", l.T);
b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN", l.j);
b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE", l.v);
b("I18N_COMPACT_DECIMAL_SHORT_PATTERN", c.i);
b("I18N_COMPACT_DECIMAL_LONG_PATTERN", c.h);
