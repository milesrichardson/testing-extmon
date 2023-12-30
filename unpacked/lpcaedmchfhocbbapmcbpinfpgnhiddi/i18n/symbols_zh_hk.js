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
  h: {
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
  oa: {
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
  h: {
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
  }
};
var d = {
  ka: "y",
  sa: "y G",
  la: "MMM y",
  ma: "MMMM y",
  ta: "MM/y",
  J: "MMM d",
  K: "MMMM dd",
  M: "M/d",
  L: "MMMM d",
  qa: "MMM d, y",
  ia: "EEE, MMM d",
  ra: "EEE, MMM d, y",
  m: "d",
  pa: "MMM d, h:mm\u202fa zzzz"
};
d = {
  ka: "y\u5e74",
  sa: "Gy\u5e74",
  la: "y\u5e74M\u6708",
  ma: "y\u5e74M\u6708",
  ta: "MM/y",
  J: "M\u6708d\u65e5",
  K: "M\u6708dd\u65e5",
  M: "d/M",
  L: "M\u6708d\u65e5",
  qa: "y\u5e74M\u6708d\u65e5",
  ia: "M\u6708d\u65e5EEE",
  ra: "y\u5e74M\u6708d\u65e5EEE",
  m: "d\u65e5",
  pa: "M\u6708d\u65e5 ah:mm [zzzz]"
};
var h = {
  A: ["BC", "AD"],
  v: ["Before Christ", "Anno Domini"],
  O: "JFMAMJJASOND".split(""),
  ba: "JFMAMJJASOND".split(""),
  I: "January February March April May June July August September October November December".split(" "),
  aa: "January February March April May June July August September October November December".split(" "),
  X: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  da: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ha: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  fa: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  Z: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  ea: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
  P: "SMTWTFS".split(""),
  ca: "SMTWTFS".split(""),
  Y: ["Q1", "Q2", "Q3", "Q4"],
  V: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  g: ["AM", "PM"],
  j: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
  ga: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
  l: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
  C: 6,
  ja: [5, 6],
  D: 5
};
h = {
  A: ["\u516c\u5143\u524d", "\u516c\u5143"],
  v: ["\u516c\u5143\u524d", "\u516c\u5143"],
  O: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
  ba: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
  I: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
  aa: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
  X: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
  da: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
  ha: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(
    " "
  ),
  fa: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(
    " "
  ),
  Z: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
  ea: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
  P: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
  ca: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
  Y: ["Q1", "Q2", "Q3", "Q4"],
  V: ["\u7b2c1\u5b63", "\u7b2c2\u5b63", "\u7b2c3\u5b63", "\u7b2c4\u5b63"],
  g: ["\u4e0a\u5348", "\u4e0b\u5348"],
  j: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y\u5e74M\u6708d\u65e5", "d/M/y"],
  ga: ["ah:mm:ss [zzzz]", "ah:mm:ss [z]", "ah:mm:ss", "ah:mm"],
  l: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
  C: 6,
  ja: [5, 6],
  D: 5
};
var l = {
  s: ".",
  F: ",",
  R: "%",
  na: "0",
  U: "+",
  H: "-",
  B: "E",
  T: "\u2030",
  G: "\u221e",
  N: "NaN",
  o: "#,##0.###",
  W: "#E0",
  S: "#,##0%",
  i: "\u00a4#,##0.00",
  u: "USD"
};
l = {
  s: ".",
  F: ",",
  R: "%",
  na: "0",
  U: "+",
  H: "-",
  B: "E",
  T: "\u2030",
  G: "\u221e",
  N: "\u975e\u6578\u503c",
  o: "#,##0.###",
  W: "#E0",
  S: "#,##0%",
  i: "\u00a4#,##0.00",
  u: "HKD"
};
b("I18N_DATETIMESYMBOLS_ERAS", h.A);
b("I18N_DATETIMESYMBOLS_ERANAMES", h.v);
b("I18N_DATETIMESYMBOLS_NARROWMONTHS", h.O);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS", h.ba);
b("I18N_DATETIMESYMBOLS_MONTHS", h.I);
b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS", h.aa);
b("I18N_DATETIMESYMBOLS_SHORTMONTHS", h.X);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS", h.da);
b("I18N_DATETIMESYMBOLS_WEEKDAYS", h.ha);
b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS", h.fa);
b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS", h.Z);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS", h.ea);
b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS", h.P);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS", h.ca);
b("I18N_DATETIMESYMBOLS_SHORTQUARTERS", h.Y);
b("I18N_DATETIMESYMBOLS_QUARTERS", h.V);
b("I18N_DATETIMESYMBOLS_AMPMS", h.g);
b("I18N_DATETIMESYMBOLS_DATEFORMATS", h.j);
b("I18N_DATETIMESYMBOLS_TIMEFORMATS", h.ga);
b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS", h.l);
b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK", h.C);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE", h.ja);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY", h.D);
b("I18N_DATETIMEPATTERNS_YEAR_FULL", d.ka);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR", d.la);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL", d.ma);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR", d.J);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL", d.K);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT", d.M);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM", d.L);
b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM", d.ia);
b("I18N_DATETIMEPATTERNS_DAY_ABBR", d.m);
void 0 !== h.ua && b("I18N_DATETIMESYMBOLS_ZERODIGIT", h.ua);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP", l.s);
b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP", l.F);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT", l.R);
b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT", l.na);
b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN", l.U);
b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN", l.H);
b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL", l.B);
b("I18N_NUMBERFORMATSYMBOLS_PERMILL", l.T);
b("I18N_NUMBERFORMATSYMBOLS_INFINITY", l.G);
b("I18N_NUMBERFORMATSYMBOLS_NAN", l.N);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN", l.o);
b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN", l.W);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN", l.S);
b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN", l.i);
b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE", l.u);
b("I18N_COMPACT_DECIMAL_SHORT_PATTERN", c.h);
b("I18N_COMPACT_DECIMAL_LONG_PATTERN", c.oa);
