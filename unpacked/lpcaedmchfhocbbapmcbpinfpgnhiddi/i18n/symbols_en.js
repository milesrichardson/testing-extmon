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
  },
  d = c;
d = c;
var h = {
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
  },
  l = h;
l = h;
var m = {
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
  },
  n = m;
n = m;
var p = {
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
  },
  q = p;
q = p;
b("I18N_DATETIMESYMBOLS_ERAS", n.B);
b("I18N_DATETIMESYMBOLS_ERANAMES", n.A);
b("I18N_DATETIMESYMBOLS_NARROWMONTHS", n.P);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS", n.ca);
b("I18N_DATETIMESYMBOLS_MONTHS", n.J);
b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS", n.ba);
b("I18N_DATETIMESYMBOLS_SHORTMONTHS", n.Y);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS", n.ea);
b("I18N_DATETIMESYMBOLS_WEEKDAYS", n.ia);
b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS", n.ga);
b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS", n.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS", n.fa);
b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS", n.R);
b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS", n.da);
b("I18N_DATETIMESYMBOLS_SHORTQUARTERS", n.Z);
b("I18N_DATETIMESYMBOLS_QUARTERS", n.W);
b("I18N_DATETIMESYMBOLS_AMPMS", n.g);
b("I18N_DATETIMESYMBOLS_DATEFORMATS", n.l);
b("I18N_DATETIMESYMBOLS_TIMEFORMATS", n.ha);
b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS", n.m);
b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK", n.D);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE", n.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY", n.F);
b("I18N_DATETIMEPATTERNS_YEAR_FULL", l.la);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR", l.ma);
b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL", l.na);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR", l.K);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL", l.L);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT", l.N);
b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM", l.M);
b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM", l.ja);
b("I18N_DATETIMEPATTERNS_DAY_ABBR", l.o);
void 0 !== n.oa && b("I18N_DATETIMESYMBOLS_ZERODIGIT", n.oa);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP", q.u);
b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP", q.G);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT", q.S);
b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT", q.pa);
b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN", q.V);
b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN", q.I);
b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL", q.C);
b("I18N_NUMBERFORMATSYMBOLS_PERMILL", q.U);
b("I18N_NUMBERFORMATSYMBOLS_INFINITY", q.H);
b("I18N_NUMBERFORMATSYMBOLS_NAN", q.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN", q.s);
b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN", q.X);
b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN", q.T);
b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN", q.j);
b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE", q.v);
b("I18N_COMPACT_DECIMAL_SHORT_PATTERN", d.i);
b("I18N_COMPACT_DECIMAL_LONG_PATTERN", d.h);
