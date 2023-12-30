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
    1e3: { other: "0\u00a0\u0e9e\u0eb1\u0e99" },
    1e4: { other: "00\u00a0\u0e9e\u0eb1\u0e99" },
    1e5: { other: "000\u00a0\u0e81\u0eb5\u0e9a" },
    1e6: { other: "0\u00a0\u0ea5\u0ec9\u0eb2\u0e99" },
    1e7: { other: "00\u00a0\u0ea5\u0ec9\u0eb2\u0e99" },
    1e8: { other: "000\u00a0\u0ea5\u0ec9\u0eb2\u0e99" },
    1e9: { other: "0\u00a0\u0e95\u0eb7\u0ec9" },
    1e10: { other: "00\u00a0\u0e95\u0eb7\u0ec9" },
    1e11: { other: "000\u00a0\u0e95\u0eb7\u0ec9" },
    1e12: { other: "0\u00a0\u0ea5\u0ec9\u0eb2\u0e99\u0ea5\u0ec9\u0eb2\u0e99" },
    1e13: { other: "00\u0ea5\u0ea5" },
    1e14: { other: "000\u0ea5\u0ea5" }
  },
  h: {
    1e3: { other: "0 \u0e9e\u0eb1\u0e99" },
    1e4: { other: "00 \u0e9e\u0eb1\u0e99" },
    1e5: { other: "0 \u0ec1\u0eaa\u0e99" },
    1e6: { other: "0 \u0ea5\u0ec9\u0eb2\u0e99" },
    1e7: { other: "00 \u0ea5\u0ec9\u0eb2\u0e99" },
    1e8: { other: "000 \u0ea5\u0ec9\u0eb2\u0e99" },
    1e9: { other: "0 \u0e95\u0eb7\u0ec9" },
    1e10: { other: "00 \u0e95\u0eb7\u0ec9" },
    1e11: { other: "000 \u0e95\u0eb7\u0ec9" },
    1e12: { other: "0 \u0ea5\u0ec9\u0eb2\u0e99\u0ea5\u0ec9\u0eb2\u0e99" },
    1e13: { other: "00 \u0ea5\u0ec9\u0eb2\u0e99\u0ea5\u0ec9\u0eb2\u0e99" },
    1e14: { other: "000 \u0ea5\u0ec9\u0eb2\u0e99\u0ea5\u0ec9\u0eb2\u0e99" }
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
  sa: "G y",
  ma: "MMM y",
  na: "MMMM y",
  ta: "MM/y",
  K: "d MMM",
  L: "dd MMMM",
  N: "d/M",
  M: "d MMMM",
  qa: "d MMM y",
  ja: "EEE d MMM",
  ra: "EEE, d MMM y",
  o: "d",
  pa: "d MMM, HH:mm zzzz"
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
  B: ["\u0e81\u0ec8\u0ead\u0e99 \u0e84.\u0eaa.", "\u0e84.\u0eaa."],
  A: [
    "\u0e81\u0ec8\u0ead\u0e99\u0e84\u0ea3\u0eb4\u0e94\u0eaa\u0eb1\u0e81\u0e81\u0eb0\u0ea5\u0eb2\u0e94",
    "\u0e84\u0ea3\u0eb4\u0e94\u0eaa\u0eb1\u0e81\u0e81\u0eb0\u0ea5\u0eb2\u0e94"
  ],
  P: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
  ca: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
  J: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(
    " "
  ),
  ba: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(
    " "
  ),
  Y: "\u0ea1.\u0e81. \u0e81.\u0e9e. \u0ea1.\u0e99. \u0ea1.\u0eaa. \u0e9e.\u0e9e. \u0ea1\u0eb4.\u0e96. \u0e81.\u0ea5. \u0eaa.\u0eab. \u0e81.\u0e8d. \u0e95.\u0ea5. \u0e9e.\u0e88. \u0e97.\u0ea7.".split(
    " "
  ),
  ea: "\u0ea1.\u0e81. \u0e81.\u0e9e. \u0ea1.\u0e99. \u0ea1.\u0eaa. \u0e9e.\u0e9e. \u0ea1\u0eb4.\u0e96. \u0e81.\u0ea5. \u0eaa.\u0eab. \u0e81.\u0e8d. \u0e95.\u0ea5. \u0e9e.\u0e88. \u0e97.\u0ea7.".split(
    " "
  ),
  ia: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(
    " "
  ),
  ga: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(
    " "
  ),
  aa: "\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0e88\u0eb1\u0e99 \u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0e9e\u0eb8\u0e94 \u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0eaa\u0eb8\u0e81 \u0ec0\u0eaa\u0ebb\u0eb2".split(
    " "
  ),
  fa: "\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0e88\u0eb1\u0e99 \u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0e9e\u0eb8\u0e94 \u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0eaa\u0eb8\u0e81 \u0ec0\u0eaa\u0ebb\u0eb2".split(
    " "
  ),
  R: "\u0ead\u0eb2 \u0e88 \u0ead \u0e9e \u0e9e\u0eab \u0eaa\u0eb8 \u0eaa".split(" "),
  da: "\u0ead\u0eb2 \u0e88 \u0ead \u0e9e \u0e9e\u0eab \u0eaa\u0eb8 \u0eaa".split(" "),
  Z: ["\u0e95\u0ea11", "\u0e95\u0ea12", "\u0e95\u0ea13", "\u0e95\u0ea14"],
  W: [
    "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 1",
    "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 2",
    "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 3",
    "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 4"
  ],
  g: ["\u0e81\u0ec8\u0ead\u0e99\u0e97\u0ec8\u0ebd\u0e87", "\u0eab\u0ebc\u0eb1\u0e87\u0e97\u0ec8\u0ebd\u0e87"],
  l: ["EEEE \u0e97\u0eb5 d MMMM G y", "d MMMM y", "d MMM y", "d/M/y"],
  ha: [
    "H \u0ec2\u0ea1\u0e87 m \u0e99\u0eb2\u0e97\u0eb5 ss \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5 zzzz",
    "H \u0ec2\u0ea1\u0e87 m \u0e99\u0eb2\u0e97\u0eb5 ss \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5 z",
    "H:mm:ss",
    "H:mm"
  ],
  m: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
  D: 6,
  ka: [5, 6],
  F: 5
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
  G: ".",
  S: "%",
  oa: "0",
  V: "+",
  I: "-",
  C: "E",
  U: "\u2030",
  H: "\u221e",
  O: "\u0e9a\u0ecd\u0ec8\u200b\u0ec1\u0ea1\u0ec8\u0e99\u200b\u0ec2\u0e95\u200b\u0ec0\u0ea5\u0e81",
  s: "#,##0.###",
  X: "0",
  T: "#,##0%",
  j: "\u00a4#,##0.00;\u00a4-#,##0.00",
  v: "LAK"
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
