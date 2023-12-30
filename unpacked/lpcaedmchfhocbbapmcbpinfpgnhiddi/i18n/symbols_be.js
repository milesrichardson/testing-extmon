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
    1e3: { other: "0\u00a0\u0442\u044b\u0441." },
    1e4: { other: "00\u00a0\u0442\u044b\u0441." },
    1e5: { other: "000\u00a0\u0442\u044b\u0441." },
    1e6: { other: "0\u00a0\u043c\u043b\u043d" },
    1e7: { other: "00\u00a0\u043c\u043b\u043d" },
    1e8: { other: "000\u00a0\u043c\u043b\u043d" },
    1e9: { other: "0\u00a0\u043c\u043b\u0440\u0434" },
    1e10: { other: "00\u00a0\u043c\u043b\u0440\u0434" },
    1e11: { other: "000\u00a0\u043c\u043b\u0440\u0434" },
    1e12: { other: "0\u00a0\u0442\u0440\u043b\u043d" },
    1e13: { other: "00\u00a0\u0442\u0440\u043b\u043d" },
    1e14: { other: "000\u00a0\u0442\u0440\u043b\u043d" }
  },
  h: {
    1e3: { other: "0 \u0442\u044b\u0441\u044f\u0447\u044b" },
    1e4: { other: "00 \u0442\u044b\u0441\u044f\u0447\u044b" },
    1e5: { other: "000 \u0442\u044b\u0441\u044f\u0447\u044b" },
    1e6: { other: "0 \u043c\u0456\u043b\u044c\u0451\u043d\u0430" },
    1e7: { other: "00 \u043c\u0456\u043b\u044c\u0451\u043d\u0430" },
    1e8: { other: "000 \u043c\u0456\u043b\u044c\u0451\u043d\u0430" },
    1e9: { other: "0 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430" },
    1e10: { other: "00 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430" },
    1e11: { other: "000 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430" },
    1e12: { other: "0 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430" },
    1e13: { other: "00 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430" },
    1e14: { other: "000 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430" }
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
  sa: "y\u202f'\u0433'. G",
  ma: "LLL y",
  na: "LLLL y",
  ta: "MM.y",
  K: "d MMM",
  L: "dd MMMM",
  N: "d.M",
  M: "d MMMM",
  qa: "d MMM y",
  ja: "EEE, d MMM",
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
  B: ["\u0434\u0430 \u043d.\u044d.", "\u043d.\u044d."],
  A: [
    "\u0434\u0430 \u043d\u0430\u0440\u0430\u0434\u0436\u044d\u043d\u043d\u044f \u0425\u0440\u044b\u0441\u0442\u043e\u0432\u0430",
    "\u0430\u0434 \u043d\u0430\u0440\u0430\u0434\u0436\u044d\u043d\u043d\u044f \u0425\u0440\u044b\u0441\u0442\u043e\u0432\u0430"
  ],
  P: "\u0441\u043b\u0441\u043a\u043c\u0447\u043b\u0436\u0432\u043a\u043b\u0441".split(""),
  ca: "\u0441\u043b\u0441\u043a\u043c\u0447\u043b\u0436\u0432\u043a\u043b\u0441".split(""),
  J: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f \u043b\u044e\u0442\u0430\u0433\u0430 \u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430 \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430 \u043c\u0430\u044f \u0447\u044d\u0440\u0432\u0435\u043d\u044f \u043b\u0456\u043f\u0435\u043d\u044f \u0436\u043d\u0456\u045e\u043d\u044f \u0432\u0435\u0440\u0430\u0441\u043d\u044f \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430 \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430 \u0441\u043d\u0435\u0436\u043d\u044f".split(
    " "
  ),
  ba: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c \u043b\u044e\u0442\u044b \u0441\u0430\u043a\u0430\u0432\u0456\u043a \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a \u043c\u0430\u0439 \u0447\u044d\u0440\u0432\u0435\u043d\u044c \u043b\u0456\u043f\u0435\u043d\u044c \u0436\u043d\u0456\u0432\u0435\u043d\u044c \u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434 \u0441\u043d\u0435\u0436\u0430\u043d\u044c".split(
    " "
  ),
  Y: "\u0441\u0442\u0443 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430 \u043c\u0430\u044f \u0447\u044d\u0440 \u043b\u0456\u043f \u0436\u043d\u0456 \u0432\u0435\u0440 \u043a\u0430\u0441 \u043b\u0456\u0441 \u0441\u043d\u0435".split(
    " "
  ),
  ea: "\u0441\u0442\u0443 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430 \u043c\u0430\u0439 \u0447\u044d\u0440 \u043b\u0456\u043f \u0436\u043d\u0456 \u0432\u0435\u0440 \u043a\u0430\u0441 \u043b\u0456\u0441 \u0441\u043d\u0435".split(
    " "
  ),
  ia: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(
    " "
  ),
  ga: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(
    " "
  ),
  aa: "\u043d\u0434 \u043f\u043d \u0430\u045e \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
  fa: "\u043d\u0434 \u043f\u043d \u0430\u045e \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
  R: "\u043d\u043f\u0430\u0441\u0447\u043f\u0441".split(""),
  da: "\u043d\u043f\u0430\u0441\u0447\u043f\u0441".split(""),
  Z: ["1-\u0448\u044b \u043a\u0432.", "2-\u0433\u0456 \u043a\u0432.", "3-\u0446\u0456 \u043a\u0432.", "4-\u0442\u044b \u043a\u0432."],
  W: [
    "1-\u0448\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b",
    "2-\u0433\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b",
    "3-\u0446\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b",
    "4-\u0442\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b"
  ],
  g: ["AM", "PM"],
  l: ["EEEE, d MMMM y\u202f'\u0433'.", "d MMMM y\u202f'\u0433'.", "d MMM y\u202f'\u0433'.", "d.MM.yy"],
  ha: ["HH:mm:ss, zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
  m: ["{1} '\u0443' {0}", "{1} '\u0443' {0}", "{1}, {0}", "{1}, {0}"],
  D: 0,
  ka: [5, 6],
  F: 6
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
  I: "-",
  C: "E",
  U: "\u2030",
  H: "\u221e",
  O: "NaN",
  s: "#,##0.###",
  X: "#E0",
  T: "#,##0\u00a0%",
  j: "#,##0.00\u00a0\u00a4",
  v: "BYN"
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
