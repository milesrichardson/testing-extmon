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
    1e3: { other: "0\u00a0tn" },
    1e4: { other: "00\u00a0tn" },
    1e5: { other: "000\u00a0tn" },
    1e6: { other: "0\u00a0mn" },
    1e7: { other: "00\u00a0mn" },
    1e8: { other: "000\u00a0mn" },
    1e9: { other: "0\u00a0md" },
    1e10: { other: "00\u00a0md" },
    1e11: { other: "000\u00a0md" },
    1e12: { other: "0\u00a0bn" },
    1e13: { other: "00\u00a0bn" },
    1e14: { other: "000\u00a0bn" }
  },
  h: {
    1e3: { other: "0 tusen" },
    1e4: { other: "00 tusen" },
    1e5: { other: "000 tusen" },
    1e6: { other: "0 miljoner" },
    1e7: { other: "00 miljoner" },
    1e8: { other: "000 miljoner" },
    1e9: { other: "0 miljarder" },
    1e10: { other: "00 miljarder" },
    1e11: { other: "000 miljarder" },
    1e12: { other: "0 biljoner" },
    1e13: { other: "00 biljoner" },
    1e14: { other: "000 biljoner" }
  }
};
var d = {
  la: "y",
  sa: "y G",
  ma: "MMM y",
  na: "MMMM y",
  ta: "MM/y",
  K: "MMM d",
  L: "MMMM dd",
  N: "M/d",
  M: "MMMM d",
  qa: "MMM d, y",
  ja: "EEE, MMM d",
  ra: "EEE, MMM d, y",
  o: "d",
  pa: "MMM d, h:mm\u202fa zzzz"
};
d = {
  la: "y",
  sa: "y G",
  ma: "MMM y",
  na: "MMMM y",
  ta: "y-MM",
  K: "d MMM",
  L: "dd MMMM",
  N: "d/M",
  M: "d MMMM",
  qa: "d MMM y",
  ja: "EEE d MMM",
  ra: "EEE d MMM y",
  o: "d",
  pa: "d MMM HH:mm zzzz"
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
  B: ["f.Kr.", "e.Kr."],
  A: ["f\u00f6re Kristus", "efter Kristus"],
  P: "JFMAMJJASOND".split(""),
  ca: "JFMAMJJASOND".split(""),
  J: "januari februari mars april maj juni juli augusti september oktober november december".split(" "),
  ba: "januari februari mars april maj juni juli augusti september oktober november december".split(" "),
  Y: "jan. feb. mars apr. maj juni juli aug. sep. okt. nov. dec.".split(" "),
  ea: "jan. feb. mars apr. maj juni juli aug. sep. okt. nov. dec.".split(" "),
  ia: "s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),
  ga: "s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),
  aa: "s\u00f6n m\u00e5n tis ons tors fre l\u00f6r".split(" "),
  fa: "s\u00f6n m\u00e5n tis ons tors fre l\u00f6r".split(" "),
  R: "SMTOTFL".split(""),
  da: "SMTOTFL".split(""),
  Z: ["K1", "K2", "K3", "K4"],
  W: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"],
  g: ["fm", "em"],
  l: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"],
  ha: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
  m: ["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1} {0}", "{1} {0}"],
  D: 0,
  ka: [5, 6],
  F: 3
};
var l = {
  u: ".",
  G: ",",
  S: "%",
  oa: "0",
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
  u: ",",
  G: "\u00a0",
  S: "%",
  oa: "0",
  V: "+",
  I: "\u2212",
  C: "\u00d710^",
  U: "\u2030",
  H: "\u221e",
  O: "NaN",
  s: "#,##0.###",
  X: "#E0",
  T: "#,##0\u00a0%",
  j: "#,##0.00\u00a0\u00a4",
  v: "SEK"
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
void 0 !== h.ua && b("I18N_DATETIMESYMBOLS_ZERODIGIT", h.ua);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP", l.u);
b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP", l.G);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT", l.S);
b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT", l.oa);
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
