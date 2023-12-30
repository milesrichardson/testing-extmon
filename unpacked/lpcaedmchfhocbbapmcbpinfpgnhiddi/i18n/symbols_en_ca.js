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
    oa: {
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
    na: {
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
  },
  d = c;
d = c;
var h = {
  ja: "y",
  sa: "y G",
  ka: "MMM y",
  la: "MMMM y",
  ta: "MM/y",
  I: "MMM d",
  J: "MMMM dd",
  L: "M/d",
  K: "MMMM d",
  qa: "MMM d, y",
  ha: "EEE, MMM d",
  ra: "EEE, MMM d, y",
  l: "d",
  pa: "MMM d, h:mm\u202fa zzzz"
};
h = {
  ja: "y",
  sa: "y G",
  ka: "MMM y",
  la: "MMMM y",
  ta: "y-MM",
  I: "MMM d",
  J: "MMMM dd",
  L: "MM-dd",
  K: "MMMM d",
  qa: "MMM d, y",
  ha: "EEE, MMM d",
  ra: "EEE, MMM d, y",
  l: "d",
  pa: "MMM d, h:mm\u202fa zzzz"
};
var l = {
  v: ["BC", "AD"],
  u: ["Before Christ", "Anno Domini"],
  N: "JFMAMJJASOND".split(""),
  aa: "JFMAMJJASOND".split(""),
  H: "January February March April May June July August September October November December".split(" "),
  Z: "January February March April May June July August September October November December".split(" "),
  W: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ca: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ga: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  ea: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  Y: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  da: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  O: "SMTWTFS".split(""),
  ba: "SMTWTFS".split(""),
  X: ["Q1", "Q2", "Q3", "Q4"],
  U: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  g: ["AM", "PM"],
  i: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
  fa: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
  j: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
  B: 6,
  ia: [5, 6],
  C: 5
};
l = {
  v: ["BC", "AD"],
  u: ["before Christ", "Anno Domini"],
  N: "JFMAMJJASOND".split(""),
  aa: "JFMAMJJASOND".split(""),
  H: "January February March April May June July August September October November December".split(" "),
  Z: "January February March April May June July August September October November December".split(" "),
  W: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ca: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ga: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  ea: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  Y: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  da: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  O: "SMTWTFS".split(""),
  ba: "SMTWTFS".split(""),
  X: ["Q1", "Q2", "Q3", "Q4"],
  U: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  g: ["a.m.", "p.m."],
  i: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "y-MM-dd"],
  fa: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
  j: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
  B: 6,
  ia: [5, 6],
  C: 5
};
var m = {
  o: ".",
  D: ",",
  P: "%",
  ma: "0",
  T: "+",
  G: "-",
  A: "E",
  S: "\u2030",
  F: "\u221e",
  M: "NaN",
  m: "#,##0.###",
  V: "#E0",
  R: "#,##0%",
  h: "\u00a4#,##0.00",
  s: "USD"
};
m = {
  o: ".",
  D: ",",
  P: "%",
  ma: "0",
  T: "+",
  G: "-",
  A: "E",
  S: "\u2030",
  F: "\u221e",
  M: "NaN",
  m: "#,##0.###",
  V: "#E0",
  R: "#,##0%",
  h: "\u00a4#,##0.00",
  s: "CAD"
};
b("I18N_DATETIMESYMBOLS_ERAS", l.v);
b("I18N_DATETIMESYMBOLS_ERANAMES", l.u);
b("I18N_DATETIMESYMBOLS_NARROWMONTHS", l.N);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS", l.aa);
b("I18N_DATETIMESYMBOLS_MONTHS", l.H);
b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS", l.Z);
b("I18N_DATETIMESYMBOLS_SHORTMONTHS", l.W);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS", l.ca);
b("I18N_DATETIMESYMBOLS_WEEKDAYS", l.ga);
b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS", l.ea);
b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS", l.Y);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS", l.da);
b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS", l.O);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS", l.ba);
b("I18N_DATETIMESYMBOLS_SHORTQUARTERS", l.X);
b("I18N_DATETIMESYMBOLS_QUARTERS", l.U);
b("I18N_DATETIMESYMBOLS_AMPMS", l.g);
b("I18N_DATETIMESYMBOLS_DATEFORMATS", l.i);
b("I18N_DATETIMESYMBOLS_TIMEFORMATS", l.fa);
b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS", l.j);
b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK", l.B);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE", l.ia);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY", l.C);
b("I18N_DATETIMEPATTERNS_YEAR_FULL", h.ja);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR", h.ka);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL", h.la);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR", h.I);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL", h.J);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT", h.L);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM", h.K);
b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM", h.ha);
b("I18N_DATETIMEPATTERNS_DAY_ABBR", h.l);
void 0 !== l.ua && b("I18N_DATETIMESYMBOLS_ZERODIGIT", l.ua);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP", m.o);
b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP", m.D);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT", m.P);
b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT", m.ma);
b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN", m.T);
b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN", m.G);
b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL", m.A);
b("I18N_NUMBERFORMATSYMBOLS_PERMILL", m.S);
b("I18N_NUMBERFORMATSYMBOLS_INFINITY", m.F);
b("I18N_NUMBERFORMATSYMBOLS_NAN", m.M);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN", m.m);
b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN", m.V);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN", m.R);
b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN", m.h);
b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE", m.s);
b("I18N_COMPACT_DECIMAL_SHORT_PATTERN", d.oa);
b("I18N_COMPACT_DECIMAL_LONG_PATTERN", d.na);
