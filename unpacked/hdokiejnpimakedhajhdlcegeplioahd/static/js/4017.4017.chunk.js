"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [4017],
  {
    74017: function (e, t, n) {
      n.d(t, {
        tu: function () {
          return fe;
        },
        Mu: function () {
          return E;
        }
      });
      var r = n(37755),
        a = n(21930),
        s = n(8821),
        i = n(85169),
        o = function (e, t) {
          return e.push.apply(e, t);
        },
        u = function (e) {
          return e.sort(function (e, t) {
            return e.i - t.i || e.j - t.j;
          });
        },
        c = function (e) {
          var t = {},
            n = 1;
          return (
            e.forEach(function (e) {
              (t[e] = n), (n += 1);
            }),
            t
          );
        },
        h = n(92577),
        l = {
          4: [
            [1, 2],
            [2, 3]
          ],
          5: [
            [1, 3],
            [2, 3],
            [2, 4]
          ],
          6: [
            [1, 2],
            [2, 4],
            [4, 5]
          ],
          7: [
            [1, 3],
            [2, 3],
            [4, 5],
            [4, 6]
          ],
          8: [
            [2, 4],
            [4, 6]
          ]
        },
        f = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
        d = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
        g = /^[A-Z\xbf-\xdf]+$/,
        v = /^[^a-z\xdf-\xff]+$/,
        p = /^[a-z\xdf-\xff]+$/,
        m = /^[^A-Z\xbf-\xdf]+$/,
        k = /[a-z\xdf-\xff]/,
        y = /[A-Z\xbf-\xdf]/,
        b = /[^A-Za-z\xbf-\xdf]/gi,
        w = /^\d+$/,
        M = new Date().getFullYear(),
        x = { recentYear: /19\d\d|200\d|201\d|202\d/g },
        Z = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = e.password,
                    n = [].concat((0, a.Z)(this.getMatchesWithoutSeparator(t)), (0, a.Z)(this.getMatchesWithSeparator(t))),
                    r = this.filterNoise(n);
                  return u(r);
                }
              },
              {
                key: "getMatchesWithSeparator",
                value: function (e) {
                  for (var t = [], n = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/, r = 0; r <= Math.abs(e.length - 6); r += 1)
                    for (var a = r + 5; a <= r + 9 && !(a >= e.length); a += 1) {
                      var s = e.slice(r, +a + 1 || 9e9),
                        i = n.exec(s);
                      if (null != i) {
                        var o = this.mapIntegersToDayMonthYear([parseInt(i[1], 10), parseInt(i[3], 10), parseInt(i[4], 10)]);
                        null != o &&
                          t.push({ pattern: "date", token: s, i: r, j: a, separator: i[2], year: o.year, month: o.month, day: o.day });
                      }
                    }
                  return t;
                }
              },
              {
                key: "getMatchesWithoutSeparator",
                value: function (e) {
                  for (
                    var t = this,
                      n = [],
                      r = /^\d{4,8}$/,
                      a = function (e) {
                        return Math.abs(e.year - M);
                      },
                      s = 0;
                    s <= Math.abs(e.length - 4);
                    s += 1
                  )
                    for (
                      var i = function () {
                          if (o >= e.length) return "break";
                          var i = e.slice(s, +o + 1 || 9e9);
                          if (r.exec(i)) {
                            var u = [],
                              c = i.length;
                            if (
                              (l[c].forEach(function (e) {
                                var n = (0, h.Z)(e, 2),
                                  r = n[0],
                                  a = n[1],
                                  s = t.mapIntegersToDayMonthYear([
                                    parseInt(i.slice(0, r), 10),
                                    parseInt(i.slice(r, a), 10),
                                    parseInt(i.slice(a), 10)
                                  ]);
                                null != s && u.push(s);
                              }),
                              u.length > 0)
                            ) {
                              var f = u[0],
                                d = a(u[0]);
                              u.slice(1).forEach(function (e) {
                                var t = a(e);
                                t < d && ((f = e), (d = t));
                              }),
                                n.push({ pattern: "date", token: i, i: s, j: o, separator: "", year: f.year, month: f.month, day: f.day });
                            }
                          }
                        },
                        o = s + 3;
                      o <= s + 7;
                      o += 1
                    ) {
                      if ("break" === i()) break;
                    }
                  return n;
                }
              },
              {
                key: "filterNoise",
                value: function (e) {
                  return e.filter(function (t) {
                    for (var n = !1, r = e.length, a = 0; a < r; a += 1) {
                      var s = e[a];
                      if (t !== s && s.i <= t.i && s.j >= t.j) {
                        n = !0;
                        break;
                      }
                    }
                    return !n;
                  });
                }
              },
              {
                key: "mapIntegersToDayMonthYear",
                value: function (e) {
                  if (e[1] > 31 || e[1] <= 0) return null;
                  for (var t = 0, n = 0, r = 0, a = 0, s = e.length; a < s; a += 1) {
                    var i = e[a];
                    if ((i > 99 && i < 1e3) || i > 2050) return null;
                    i > 31 && (n += 1), i > 12 && (t += 1), i <= 0 && (r += 1);
                  }
                  return n >= 2 || 3 === t || r >= 2 ? null : this.getDayMonth(e);
                }
              },
              {
                key: "getDayMonth",
                value: function (e) {
                  for (
                    var t = [
                        [e[2], e.slice(0, 2)],
                        [e[0], e.slice(1, 3)]
                      ],
                      n = t.length,
                      r = 0;
                    r < n;
                    r += 1
                  ) {
                    var a = (0, h.Z)(t[r], 2),
                      s = a[0],
                      i = a[1];
                    if (1e3 <= s && s <= 2050) {
                      var o = this.mapIntegersToDayMonth(i);
                      return null != o ? { year: s, month: o.month, day: o.day } : null;
                    }
                  }
                  for (var u = 0; u < n; u += 1) {
                    var c = (0, h.Z)(t[u], 2),
                      l = c[0],
                      f = c[1],
                      d = this.mapIntegersToDayMonth(f);
                    if (null != d) return { year: this.twoToFourDigitYear(l), month: d.month, day: d.day };
                  }
                  return null;
                }
              },
              {
                key: "mapIntegersToDayMonth",
                value: function (e) {
                  for (var t = [e, e.slice().reverse()], n = 0; n < t.length; n += 1) {
                    var r = t[n],
                      a = r[0],
                      s = r[1];
                    if (a >= 1 && a <= 31 && s >= 1 && s <= 12) return { day: a, month: s };
                  }
                  return null;
                }
              },
              {
                key: "twoToFourDigitYear",
                value: function (e) {
                  return e > 99 ? e : e > 50 ? e + 1900 : e + 2e3;
                }
              }
            ]),
            e
          );
        })(),
        T = new Uint32Array(65536),
        S = function (e, t) {
          if (e.length < t.length) {
            var n = t;
            (t = e), (e = n);
          }
          return 0 === t.length
            ? e.length
            : e.length <= 32
            ? (function (e, t) {
                for (var n = e.length, r = t.length, a = 1 << (n - 1), s = -1, i = 0, o = n, u = n; u--; ) T[e.charCodeAt(u)] |= 1 << u;
                for (u = 0; u < r; u++) {
                  var c = T[t.charCodeAt(u)],
                    h = c | i;
                  (i |= ~((c |= ((c & s) + s) ^ s) | s)) & a && o++,
                    (s &= c) & a && o--,
                    (s = (s << 1) | ~(h | (i = (i << 1) | 1))),
                    (i &= h);
                }
                for (u = n; u--; ) T[e.charCodeAt(u)] = 0;
                return o;
              })(e, t)
            : (function (e, t) {
                for (var n = t.length, r = e.length, a = [], s = [], i = Math.ceil(n / 32), o = Math.ceil(r / 32), u = 0; u < i; u++)
                  (s[u] = -1), (a[u] = 0);
                for (var c = 0; c < o - 1; c++) {
                  for (var h = 0, l = -1, f = 32 * c, d = Math.min(32, r) + f, g = f; g < d; g++) T[e.charCodeAt(g)] |= 1 << g;
                  for (var v = 0; v < n; v++) {
                    var p = T[t.charCodeAt(v)],
                      m = (s[(v / 32) | 0] >>> v) & 1,
                      k = (a[(v / 32) | 0] >>> v) & 1,
                      y = p | h,
                      b = ((((p | k) & l) + l) ^ l) | p | k,
                      w = h | ~(b | l),
                      M = l & b;
                    (w >>> 31) ^ m && (s[(v / 32) | 0] ^= 1 << v),
                      (M >>> 31) ^ k && (a[(v / 32) | 0] ^= 1 << v),
                      (l = (M = (M << 1) | k) | ~(y | (w = (w << 1) | m))),
                      (h = w & y);
                  }
                  for (var x = f; x < d; x++) T[e.charCodeAt(x)] = 0;
                }
                for (var Z = 0, S = -1, j = 32 * c, I = Math.min(32, r - j) + j, D = j; D < I; D++) T[e.charCodeAt(D)] |= 1 << D;
                for (var A = r, E = 0; E < n; E++) {
                  var C = T[t.charCodeAt(E)],
                    L = (s[(E / 32) | 0] >>> E) & 1,
                    O = (a[(E / 32) | 0] >>> E) & 1,
                    P = C | Z,
                    q = ((((C | O) & S) + S) ^ S) | C | O,
                    N = Z | ~(q | S),
                    W = S & q;
                  (A += (N >>> (r - 1)) & 1),
                    (A -= (W >>> (r - 1)) & 1),
                    (N >>> 31) ^ L && (s[(E / 32) | 0] ^= 1 << E),
                    (W >>> 31) ^ O && (a[(E / 32) | 0] ^= 1 << E),
                    (S = (W = (W << 1) | O) | ~(P | (N = (N << 1) | L))),
                    (Z = N & P);
                }
                for (var z = j; z < I; z++) T[e.charCodeAt(z)] = 0;
                return A;
              })(e, t);
        },
        j = function (e, t, n) {
          var r = 0,
            a = Object.keys(t).find(function (t) {
              var a = (function (e, t, n) {
                  var r = e.length <= t.length,
                    a = e.length <= n;
                  return r || a ? Math.ceil(e.length / 4) : n;
                })(e, t, n),
                s = S(e, t),
                i = s <= a;
              return i && (r = s), i;
            });
          return a ? { levenshteinDistance: r, levenshteinDistanceEntry: a } : {};
        },
        I = {
          a: ["4", "@"],
          b: ["8"],
          c: ["(", "{", "[", "<"],
          e: ["3"],
          g: ["6", "9"],
          i: ["1", "!", "|"],
          l: ["1", "|", "7"],
          o: ["0"],
          s: ["$", "5"],
          t: ["+", "7"],
          x: ["%"],
          z: ["2"]
        },
        D = {
          warnings: {
            straightRow: "straightRow",
            keyPattern: "keyPattern",
            simpleRepeat: "simpleRepeat",
            extendedRepeat: "extendedRepeat",
            sequences: "sequences",
            recentYears: "recentYears",
            dates: "dates",
            topTen: "topTen",
            topHundred: "topHundred",
            common: "common",
            similarToCommon: "similarToCommon",
            wordByItself: "wordByItself",
            namesByThemselves: "namesByThemselves",
            commonNames: "commonNames",
            userInputs: "userInputs",
            pwned: "pwned"
          },
          suggestions: {
            l33t: "l33t",
            reverseWords: "reverseWords",
            allUppercase: "allUppercase",
            capitalization: "capitalization",
            dates: "dates",
            recentYears: "recentYears",
            associatedYears: "associatedYears",
            sequences: "sequences",
            repeated: "repeated",
            longerKeyboardPattern: "longerKeyboardPattern",
            anotherWord: "anotherWord",
            useWords: "useWords",
            noNeed: "noNeed",
            pwned: "pwned"
          },
          timeEstimation: {
            ltSecond: "ltSecond",
            second: "second",
            seconds: "seconds",
            minute: "minute",
            minutes: "minutes",
            hour: "hour",
            hours: "hours",
            day: "day",
            days: "days",
            month: "month",
            months: "months",
            year: "year",
            years: "years",
            centuries: "centuries"
          }
        },
        A = (function () {
          function e() {
            (0, s.Z)(this, e),
              (this.matchers = {}),
              (this.l33tTable = I),
              (this.dictionary = { userInputs: [] }),
              (this.rankedDictionaries = {}),
              (this.rankedDictionariesMaxWordSize = {}),
              (this.translations = D),
              (this.graphs = {}),
              (this.useLevenshteinDistance = !1),
              (this.levenshteinThreshold = 2),
              (this.l33tMaxSubstitutions = 100),
              (this.maxLength = 256),
              this.setRankedDictionaries();
          }
          return (
            (0, i.Z)(e, [
              {
                key: "setOptions",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  e.l33tTable && (this.l33tTable = e.l33tTable),
                    e.dictionary && ((this.dictionary = e.dictionary), this.setRankedDictionaries()),
                    e.translations && this.setTranslations(e.translations),
                    e.graphs && (this.graphs = e.graphs),
                    void 0 !== e.useLevenshteinDistance && (this.useLevenshteinDistance = e.useLevenshteinDistance),
                    void 0 !== e.levenshteinThreshold && (this.levenshteinThreshold = e.levenshteinThreshold),
                    void 0 !== e.l33tMaxSubstitutions && (this.l33tMaxSubstitutions = e.l33tMaxSubstitutions),
                    void 0 !== e.maxLength && (this.maxLength = e.maxLength);
                }
              },
              {
                key: "setTranslations",
                value: function (e) {
                  if (!this.checkCustomTranslations(e)) throw new Error("Invalid translations object fallback to keys");
                  this.translations = e;
                }
              },
              {
                key: "checkCustomTranslations",
                value: function (e) {
                  var t = !0;
                  return (
                    Object.keys(D).forEach(function (n) {
                      if (n in e) {
                        var r = n;
                        Object.keys(D[r]).forEach(function (n) {
                          n in e[r] || (t = !1);
                        });
                      } else t = !1;
                    }),
                    t
                  );
                }
              },
              {
                key: "setRankedDictionaries",
                value: function () {
                  var e = this,
                    t = {},
                    n = {};
                  Object.keys(this.dictionary).forEach(function (r) {
                    (t[r] = e.getRankedDictionary(r)), (n[r] = e.getRankedDictionariesMaxWordSize(r));
                  }),
                    (this.rankedDictionaries = t),
                    (this.rankedDictionariesMaxWordSize = n);
                }
              },
              {
                key: "getRankedDictionariesMaxWordSize",
                value: function (e) {
                  var t = this.dictionary[e].map(function (e) {
                    return "string" !== typeof e ? e.toString().length : e.length;
                  });
                  return 0 === t.length
                    ? 0
                    : t.reduce(function (e, t) {
                        return Math.max(e, t);
                      }, -1 / 0);
                }
              },
              {
                key: "getRankedDictionary",
                value: function (e) {
                  var t = this.dictionary[e];
                  if ("userInputs" === e) {
                    var n = [];
                    return (
                      t.forEach(function (e) {
                        var t = typeof e;
                        ("string" !== t && "number" !== t && "boolean" !== t) || n.push(e.toString().toLowerCase());
                      }),
                      c(n)
                    );
                  }
                  return c(t);
                }
              },
              {
                key: "extendUserInputsDictionary",
                value: function (e) {
                  this.dictionary.userInputs
                    ? (this.dictionary.userInputs = [].concat((0, a.Z)(this.dictionary.userInputs), (0, a.Z)(e)))
                    : (this.dictionary.userInputs = e),
                    (this.rankedDictionaries.userInputs = this.getRankedDictionary("userInputs")),
                    (this.rankedDictionariesMaxWordSize.userInputs = this.getRankedDictionariesMaxWordSize("userInputs"));
                }
              },
              {
                key: "addMatcher",
                value: function (e, t) {
                  this.matchers[e] ? console.info("Matcher ".concat(e, " already exists")) : (this.matchers[e] = t);
                }
              }
            ]),
            e
          );
        })(),
        E = new A(),
        C = (function () {
          function e(t) {
            (0, s.Z)(this, e), (this.defaultMatch = t);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = e.password,
                    n = t.split("").reverse().join("");
                  return this.defaultMatch({ password: n }).map(function (e) {
                    return (0, r.Z)(
                      (0, r.Z)({}, e),
                      {},
                      { token: e.token.split("").reverse().join(""), reversed: !0, i: t.length - 1 - e.j, j: t.length - 1 - e.i }
                    );
                  });
                }
              }
            ]),
            e
          );
        })(),
        L = (function () {
          function e(t) {
            (0, s.Z)(this, e), (this.defaultMatch = t);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  for (
                    var t = this,
                      n = e.password,
                      a = [],
                      s = this.enumerateL33tSubs(this.relevantL33tSubtable(n, E.l33tTable)),
                      i = Math.min(s.length, E.l33tMaxSubstitutions),
                      o = function () {
                        var e,
                          i = s[u];
                        if (((e = i), 0 === Object.keys(e).length)) return "break";
                        var o,
                          c =
                            ((o = i),
                            n
                              .split("")
                              .map(function (e) {
                                return o[e] || e;
                              })
                              .join(""));
                        t.defaultMatch({ password: c }).forEach(function (e) {
                          var t = n.slice(e.i, +e.j + 1 || 9e9);
                          if (t.toLowerCase() !== e.matchedWord) {
                            var s = {};
                            Object.keys(i).forEach(function (e) {
                              var n = i[e];
                              -1 !== t.indexOf(e) && (s[e] = n);
                            });
                            var o = Object.keys(s)
                              .map(function (e) {
                                return "".concat(e, " -> ").concat(s[e]);
                              })
                              .join(", ");
                            a.push((0, r.Z)((0, r.Z)({}, e), {}, { l33t: !0, token: t, sub: s, subDisplay: o }));
                          }
                        });
                      },
                      u = 0;
                    u < i;
                    u += 1
                  ) {
                    if ("break" === o()) break;
                  }
                  return a.filter(function (e) {
                    return e.token.length > 1;
                  });
                }
              },
              {
                key: "relevantL33tSubtable",
                value: function (e, t) {
                  var n = {},
                    r = {};
                  return (
                    e.split("").forEach(function (e) {
                      n[e] = !0;
                    }),
                    Object.keys(t).forEach(function (e) {
                      var a = t[e].filter(function (e) {
                        return e in n;
                      });
                      a.length > 0 && (r[e] = a);
                    }),
                    r
                  );
                }
              },
              {
                key: "enumerateL33tSubs",
                value: function (e) {
                  var t = Object.keys(e);
                  return this.getSubs(t, [[]], e).map(function (e) {
                    var t = {};
                    return (
                      e.forEach(function (e) {
                        var n = (0, h.Z)(e, 2),
                          r = n[0],
                          a = n[1];
                        t[r] = a;
                      }),
                      t
                    );
                  });
                }
              },
              {
                key: "getSubs",
                value: function (e, t, n) {
                  if (!e.length) return t;
                  var r = e[0],
                    a = e.slice(1),
                    s = [];
                  n[r].forEach(function (e) {
                    t.forEach(function (t) {
                      for (var n = -1, a = 0; a < t.length; a += 1)
                        if (t[a][0] === e) {
                          n = a;
                          break;
                        }
                      if (-1 === n) {
                        var i = t.concat([[e, r]]);
                        s.push(i);
                      } else {
                        var o = t.slice(0);
                        o.splice(n, 1), o.push([e, r]), s.push(t), s.push(o);
                      }
                    });
                  });
                  var i = this.dedup(s);
                  return a.length ? this.getSubs(a, i, n) : i;
                }
              },
              {
                key: "dedup",
                value: function (e) {
                  var t = [],
                    n = {};
                  return (
                    e.forEach(function (e) {
                      var r = e.map(function (e, t) {
                        return [e, t];
                      });
                      r.sort();
                      var a = r
                        .map(function (e) {
                          var t = (0, h.Z)(e, 2),
                            n = t[0],
                            r = t[1];
                          return "".concat(n, ",").concat(r);
                        })
                        .join("-");
                      a in n || ((n[a] = !0), t.push(e));
                    }),
                    t
                  );
                }
              }
            ]),
            e
          );
        })(),
        O = (function () {
          function e() {
            (0, s.Z)(this, e), (this.l33t = new L(this.defaultMatch)), (this.reverse = new C(this.defaultMatch));
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = e.password,
                    n = [].concat(
                      (0, a.Z)(this.defaultMatch({ password: t })),
                      (0, a.Z)(this.reverse.match({ password: t })),
                      (0, a.Z)(this.l33t.match({ password: t }))
                    );
                  return u(n);
                }
              },
              {
                key: "defaultMatch",
                value: function (e) {
                  var t = e.password,
                    n = [],
                    a = t.length,
                    s = t.toLowerCase();
                  return (
                    Object.keys(E.rankedDictionaries).forEach(function (e) {
                      for (
                        var i = E.rankedDictionaries[e], o = E.rankedDictionariesMaxWordSize[e], u = Math.min(o, a), c = 0;
                        c < a;
                        c += 1
                      )
                        for (var h = Math.min(c + u, a), l = c; l < h; l += 1) {
                          var f = s.slice(c, +l + 1 || 9e9),
                            d = f in i,
                            g = {},
                            v = 0 === c && l === a - 1;
                          E.useLevenshteinDistance && v && !d && (g = j(f, i, E.levenshteinThreshold));
                          var p = 0 !== Object.keys(g).length;
                          if (d || p) {
                            var m = i[p ? g.levenshteinDistanceEntry : f];
                            n.push(
                              (0, r.Z)(
                                {
                                  pattern: "dictionary",
                                  i: c,
                                  j: l,
                                  token: t.slice(c, +l + 1 || 9e9),
                                  matchedWord: f,
                                  rank: m,
                                  dictionaryName: e,
                                  reversed: !1,
                                  l33t: !1
                                },
                                g
                              )
                            );
                          }
                        }
                    }),
                    n
                  );
                }
              }
            ]),
            e
          );
        })(),
        P = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = e.password,
                    n = e.regexes,
                    r = void 0 === n ? x : n,
                    a = [];
                  return (
                    Object.keys(r).forEach(function (e) {
                      var n = r[e];
                      n.lastIndex = 0;
                      var s = n.exec(t);
                      if (s) {
                        var i = s[0];
                        a.push({ pattern: "regex", token: i, i: s.index, j: s.index + s[0].length - 1, regexName: e, regexMatch: s });
                      }
                    }),
                    u(a)
                  );
                }
              }
            ]),
            e
          );
        })(),
        q = function (e, t) {
          var n = e;
          if (t > n) return 0;
          if (0 === t) return 1;
          for (var r = 1, a = 1; a <= t; a += 1) (r *= n), (r /= a), (n -= 1);
          return r;
        },
        N = function (e) {
          return Math.log(e) / Math.log(10);
        },
        W = function (e) {
          for (var t = 1, n = 2; n <= e; n += 1) t *= n;
          return t;
        },
        z = function (e) {
          var t = e.replace(b, "");
          if (t.match(m) || t.toLowerCase() === t) return 1;
          for (var n = [f, d, v], r = n.length, a = 0; a < r; a += 1) {
            var s = n[a];
            if (t.match(s)) return 2;
          }
          return (function (e) {
            for (
              var t = e.split(""),
                n = t.filter(function (e) {
                  return e.match(y);
                }).length,
                r = t.filter(function (e) {
                  return e.match(k);
                }).length,
                a = 0,
                s = Math.min(n, r),
                i = 1;
              i <= s;
              i += 1
            )
              a += q(n + r, i);
            return a;
          })(t);
        },
        R = function (e) {
          for (
            var t = e.token,
              n = e.graph,
              r = e.turns,
              a = Object.keys(E.graphs[n]).length,
              s = (function (e) {
                var t = 0;
                return (
                  Object.keys(e).forEach(function (n) {
                    var r = e[n];
                    t += r.filter(function (e) {
                      return !!e;
                    }).length;
                  }),
                  (t /= Object.entries(e).length)
                );
              })(E.graphs[n]),
              i = 0,
              o = t.length,
              u = 2;
            u <= o;
            u += 1
          )
            for (var c = Math.min(r, u - 1), h = 1; h <= c; h += 1) i += q(u - 1, h - 1) * a * Math.pow(s, h);
          return i;
        },
        Y = {
          bruteforce: function (e) {
            var t,
              n = e.token,
              r = Math.pow(10, n.length);
            return r === Number.POSITIVE_INFINITY && (r = Number.MAX_VALUE), (t = 1 === n.length ? 11 : 51), Math.max(r, t);
          },
          date: function (e) {
            var t = e.year,
              n = e.separator,
              r = 365 * Math.max(Math.abs(t - M), 20);
            return n && (r *= 4), r;
          },
          dictionary: function (e) {
            var t = e.rank,
              n = e.reversed,
              r = e.l33t,
              a = e.sub,
              s = e.token,
              i = t,
              o = z(s),
              u = (function (e) {
                var t = e.l33t,
                  n = e.sub,
                  r = e.token;
                if (!t) return 1;
                var a = 1,
                  s = n;
                return (
                  Object.keys(s).forEach(function (e) {
                    var t = (function (e) {
                        var t = e.subs,
                          n = e.subbed,
                          r = e.token,
                          a = t[n],
                          s = r.toLowerCase().split("");
                        return {
                          subbedCount: s.filter(function (e) {
                            return e === n;
                          }).length,
                          unsubbedCount: s.filter(function (e) {
                            return e === a;
                          }).length
                        };
                      })({ subs: s, subbed: e, token: r }),
                      n = t.subbedCount,
                      i = t.unsubbedCount;
                    if (0 === n || 0 === i) a *= 2;
                    else {
                      for (var o = Math.min(i, n), u = 0, c = 1; c <= o; c += 1) u += q(i + n, c);
                      a *= u;
                    }
                  }),
                  a
                );
              })({ l33t: r, sub: a, token: s });
            return { baseGuesses: i, uppercaseVariations: o, l33tVariations: u, calculation: i * o * u * (n ? 2 : 1) };
          },
          regex: function (e) {
            var t = e.regexName,
              n = e.regexMatch,
              r = e.token,
              a = { alphaLower: 26, alphaUpper: 26, alpha: 52, alphanumeric: 62, digits: 10, symbols: 33 };
            return t in a ? Math.pow(a[t], r.length) : "recentYear" === t ? Math.max(Math.abs(parseInt(n[0], 10) - M), 20) : 0;
          },
          repeat: function (e) {
            return e.baseGuesses * e.repeatCount;
          },
          sequence: function (e) {
            var t = e.token,
              n = e.ascending,
              r = t.charAt(0),
              a = 0;
            return (a = ["a", "A", "z", "Z", "0", "1", "9"].includes(r) ? 4 : r.match(/\d/) ? 10 : 26), n || (a *= 2), a * t.length;
          },
          spatial: function (e) {
            var t = e.graph,
              n = e.token,
              r = e.shiftedCount,
              a = e.turns,
              s = R({ token: n, graph: t, turns: a });
            if (r) {
              var i = n.length - r;
              if (0 === r || 0 === i) s *= 2;
              else {
                for (var o = 0, u = 1; u <= Math.min(r, i); u += 1) o += q(r + i, u);
                s *= o;
              }
            }
            return Math.round(s);
          }
        },
        G = function (e, t) {
          var n = {};
          if ("guesses" in e && null != e.guesses) return e;
          var a = (function (e, t) {
              var n = 1;
              return e.token.length < t.length && (n = 1 === e.token.length ? 10 : 50), n;
            })(e, t),
            s = (function (e, t) {
              return Y[e] ? Y[e](t) : E.matchers[e] && "scoring" in E.matchers[e] ? E.matchers[e].scoring(t) : 0;
            })(e.pattern, e),
            i = 0;
          "number" === typeof s
            ? (i = s)
            : "dictionary" === e.pattern &&
              ((i = s.calculation),
              (n.baseGuesses = s.baseGuesses),
              (n.uppercaseVariations = s.uppercaseVariations),
              (n.l33tVariations = s.l33tVariations));
          var o = Math.max(i, a);
          return (0, r.Z)((0, r.Z)((0, r.Z)({}, e), n), {}, { guesses: o, guessesLog10: N(o) });
        },
        F = {
          password: "",
          optimal: {},
          excludeAdditive: !1,
          fillArray: function (e, t) {
            for (var n = [], r = 0; r < e; r += 1) {
              var a = [];
              "object" === t && (a = {}), n.push(a);
            }
            return n;
          },
          makeBruteforceMatch: function (e, t) {
            return { pattern: "bruteforce", token: this.password.slice(e, +t + 1 || 9e9), i: e, j: t };
          },
          update: function (e, t) {
            var n = this,
              r = e.j,
              a = G(e, this.password),
              s = a.guesses;
            t > 1 && (s *= this.optimal.pi[a.i - 1][t - 1]);
            var i = W(t) * s;
            this.excludeAdditive || (i += Math.pow(1e4, t - 1));
            var o = !1;
            Object.keys(this.optimal.g[r]).forEach(function (e) {
              var a = n.optimal.g[r][e];
              parseInt(e, 10) <= t && a <= i && (o = !0);
            }),
              o || ((this.optimal.g[r][t] = i), (this.optimal.m[r][t] = a), (this.optimal.pi[r][t] = s));
          },
          bruteforceUpdate: function (e) {
            var t = this,
              n = this.makeBruteforceMatch(0, e);
            this.update(n, 1);
            for (
              var r = function () {
                  n = t.makeBruteforceMatch(a, e);
                  var r = t.optimal.m[a - 1];
                  Object.keys(r).forEach(function (e) {
                    "bruteforce" !== r[e].pattern && t.update(n, parseInt(e, 10) + 1);
                  });
                },
                a = 1;
              a <= e;
              a += 1
            )
              r();
          },
          unwind: function (e) {
            var t = [],
              n = e - 1,
              r = 0,
              a = Infinity,
              s = this.optimal.g[n];
            for (
              s &&
              Object.keys(s).forEach(function (e) {
                var t = s[e];
                t < a && ((r = parseInt(e, 10)), (a = t));
              });
              n >= 0;

            ) {
              var i = this.optimal.m[n][r];
              t.unshift(i), (n = i.i - 1), (r -= 1);
            }
            return t;
          }
        },
        B = {
          mostGuessableMatchSequence: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (F.password = e), (F.excludeAdditive = n);
            var r = e.length,
              a = F.fillArray(r, "array");
            t.forEach(function (e) {
              a[e.j].push(e);
            }),
              (a = a.map(function (e) {
                return e.sort(function (e, t) {
                  return e.i - t.i;
                });
              })),
              (F.optimal = { m: F.fillArray(r, "object"), pi: F.fillArray(r, "object"), g: F.fillArray(r, "object") });
            for (var s = 0; s < r; s += 1)
              a[s].forEach(function (e) {
                e.i > 0
                  ? Object.keys(F.optimal.m[e.i - 1]).forEach(function (t) {
                      F.update(e, parseInt(t, 10) + 1);
                    })
                  : F.update(e, 1);
              }),
                F.bruteforceUpdate(s);
            var i = F.unwind(r),
              o = i.length,
              u = this.getGuesses(e, o);
            return { password: e, guesses: u, guessesLog10: N(u), sequence: i };
          },
          getGuesses: function (e, t) {
            var n = e.length;
            return 0 === e.length ? 1 : F.optimal.g[n - 1][t];
          }
        },
        H = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  for (var t = e.password, n = e.omniMatch, r = [], a = 0; a < t.length; ) {
                    var s = this.getGreedyMatch(t, a),
                      i = this.getLazyMatch(t, a);
                    if (null == s) break;
                    var o = this.setMatchToken(s, i),
                      u = o.match,
                      c = o.baseToken;
                    if (u) {
                      var h = u.index + u[0].length - 1,
                        l = this.getBaseGuesses(c, n);
                      r.push(this.normalizeMatch(c, h, u, l)), (a = h + 1);
                    }
                  }
                  var f = r.some(function (e) {
                    return e instanceof Promise;
                  });
                  return f ? Promise.all(r) : r;
                }
              },
              {
                key: "normalizeMatch",
                value: function (e, t, n, a) {
                  var s = {
                    pattern: "repeat",
                    i: n.index,
                    j: t,
                    token: n[0],
                    baseToken: e,
                    baseGuesses: 0,
                    repeatCount: n[0].length / e.length
                  };
                  return a instanceof Promise
                    ? a.then(function (e) {
                        return (0, r.Z)((0, r.Z)({}, s), {}, { baseGuesses: e });
                      })
                    : (0, r.Z)((0, r.Z)({}, s), {}, { baseGuesses: a });
                }
              },
              {
                key: "getGreedyMatch",
                value: function (e, t) {
                  var n = /(.+)\1+/g;
                  return (n.lastIndex = t), n.exec(e);
                }
              },
              {
                key: "getLazyMatch",
                value: function (e, t) {
                  var n = /(.+?)\1+/g;
                  return (n.lastIndex = t), n.exec(e);
                }
              },
              {
                key: "setMatchToken",
                value: function (e, t) {
                  var n,
                    r = "";
                  if (t && e[0].length > t[0].length) {
                    var a = /^(.+?)\1+$/.exec((n = e)[0]);
                    a && (r = a[1]);
                  } else (n = t) && (r = n[1]);
                  return { match: n, baseToken: r };
                }
              },
              {
                key: "getBaseGuesses",
                value: function (e, t) {
                  var n = t.match(e);
                  return n instanceof Promise
                    ? n.then(function (t) {
                        return B.mostGuessableMatchSequence(e, t).guesses;
                      })
                    : B.mostGuessableMatchSequence(e, n).guesses;
                }
              }
            ]),
            e
          );
        })(),
        $ = (function () {
          function e() {
            (0, s.Z)(this, e), (this.MAX_DELTA = 5);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = e.password,
                    n = [];
                  if (1 === t.length) return [];
                  for (var r = 0, a = null, s = t.length, i = 1; i < s; i += 1) {
                    var o = t.charCodeAt(i) - t.charCodeAt(i - 1);
                    if ((null == a && (a = o), o !== a)) {
                      var u = i - 1;
                      this.update({ i: r, j: u, delta: a, password: t, result: n }), (r = u), (a = o);
                    }
                  }
                  return this.update({ i: r, j: s - 1, delta: a, password: t, result: n }), n;
                }
              },
              {
                key: "update",
                value: function (e) {
                  var t = e.i,
                    n = e.j,
                    r = e.delta,
                    a = e.password,
                    s = e.result;
                  if (n - t > 1 || 1 === Math.abs(r)) {
                    var i = Math.abs(r);
                    if (i > 0 && i <= this.MAX_DELTA) {
                      var o = a.slice(t, +n + 1 || 9e9),
                        u = this.getSequence(o),
                        c = u.sequenceName,
                        h = u.sequenceSpace;
                      return s.push({
                        pattern: "sequence",
                        i: t,
                        j: n,
                        token: a.slice(t, +n + 1 || 9e9),
                        sequenceName: c,
                        sequenceSpace: h,
                        ascending: r > 0
                      });
                    }
                  }
                  return null;
                }
              },
              {
                key: "getSequence",
                value: function (e) {
                  var t = "unicode",
                    n = 26;
                  return (
                    p.test(e) ? ((t = "lower"), (n = 26)) : g.test(e) ? ((t = "upper"), (n = 26)) : w.test(e) && ((t = "digits"), (n = 10)),
                    { sequenceName: t, sequenceSpace: n }
                  );
                }
              }
            ]),
            e
          );
        })(),
        U = (function () {
          function e() {
            (0, s.Z)(this, e), (this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = this,
                    n = e.password,
                    r = [];
                  return (
                    Object.keys(E.graphs).forEach(function (e) {
                      var a = E.graphs[e];
                      o(r, t.helper(n, a, e));
                    }),
                    u(r)
                  );
                }
              },
              {
                key: "checkIfShifted",
                value: function (e, t, n) {
                  return !e.includes("keypad") && this.SHIFTED_RX.test(t.charAt(n)) ? 1 : 0;
                }
              },
              {
                key: "helper",
                value: function (e, t, n) {
                  for (var r, a = [], s = 0, i = e.length; s < i - 1; ) {
                    var o = s + 1,
                      u = 0,
                      c = 0;
                    for (r = this.checkIfShifted(n, e, s); ; ) {
                      var h = t[e.charAt(o - 1)] || [],
                        l = !1,
                        f = -1,
                        d = -1;
                      if (o < i)
                        for (var g = e.charAt(o), v = h.length, p = 0; p < v; p += 1) {
                          var m = h[p];
                          if (((d += 1), m)) {
                            var k = m.indexOf(g);
                            if (-1 !== k) {
                              (l = !0), 1 === k && (r += 1), u !== (f = d) && ((c += 1), (u = f));
                              break;
                            }
                          }
                        }
                      if (!l) {
                        o - s > 2 &&
                          a.push({ pattern: "spatial", i: s, j: o - 1, token: e.slice(s, o), graph: n, turns: c, shiftedCount: r }),
                          (s = o);
                        break;
                      }
                      o += 1;
                    }
                  }
                  return a;
                }
              }
            ]),
            e
          );
        })(),
        V = (function () {
          function e() {
            (0, s.Z)(this, e), (this.matchers = { date: Z, dictionary: O, regex: P, repeat: H, sequence: $, spatial: U });
          }
          return (
            (0, i.Z)(e, [
              {
                key: "match",
                value: function (e) {
                  var t = this,
                    n = [],
                    r = [];
                  return (
                    [].concat((0, a.Z)(Object.keys(this.matchers)), (0, a.Z)(Object.keys(E.matchers))).forEach(function (a) {
                      if (t.matchers[a] || E.matchers[a]) {
                        var s = new (t.matchers[a] ? t.matchers[a] : E.matchers[a].Matching)().match({ password: e, omniMatch: t });
                        s instanceof Promise
                          ? (s.then(function (e) {
                              o(n, e);
                            }),
                            r.push(s))
                          : o(n, s);
                      }
                    }),
                    r.length > 0
                      ? new Promise(function (e) {
                          Promise.all(r).then(function () {
                            e(u(n));
                          });
                        })
                      : u(n)
                  );
                }
              }
            ]),
            e
          );
        })(),
        _ = 2678400,
        X = 32140800,
        K = { second: 1, minute: 60, hour: 3600, day: 86400, month: _, year: X, century: 321408e4 },
        J = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "translate",
                value: function (e, t) {
                  var n = e;
                  return void 0 !== t && 1 !== t && (n += "s"), E.translations.timeEstimation[n].replace("{base}", "".concat(t));
                }
              },
              {
                key: "estimateAttackTimes",
                value: function (e) {
                  var t = this,
                    n = {
                      onlineThrottling100PerHour: e / (100 / 3600),
                      onlineNoThrottling10PerSecond: e / 10,
                      offlineSlowHashing1e4PerSecond: e / 1e4,
                      offlineFastHashing1e10PerSecond: e / 1e10
                    },
                    r = {
                      onlineThrottling100PerHour: "",
                      onlineNoThrottling10PerSecond: "",
                      offlineSlowHashing1e4PerSecond: "",
                      offlineFastHashing1e10PerSecond: ""
                    };
                  return (
                    Object.keys(n).forEach(function (e) {
                      var a = n[e];
                      r[e] = t.displayTime(a);
                    }),
                    { crackTimesSeconds: n, crackTimesDisplay: r, score: this.guessesToScore(e) }
                  );
                }
              },
              {
                key: "guessesToScore",
                value: function (e) {
                  return e < 1005 ? 0 : e < 1000005 ? 1 : e < 100000005 ? 2 : e < 10000000005 ? 3 : 4;
                }
              },
              {
                key: "displayTime",
                value: function (e) {
                  var t,
                    n = "centuries",
                    r = Object.keys(K),
                    a = r.findIndex(function (t) {
                      return e < K[t];
                    });
                  return a > -1 && ((n = r[a - 1]), 0 !== a ? (t = Math.round(e / K[n])) : (n = "ltSecond")), this.translate(n, t);
                }
              }
            ]),
            e
          );
        })(),
        Q = function () {
          return null;
        },
        ee = function () {
          return { warning: E.translations.warnings.dates, suggestions: [E.translations.suggestions.dates] };
        },
        te = function (e, t) {
          var n = "",
            r = e.dictionaryName,
            a = "lastnames" === r || r.toLowerCase().includes("firstnames");
          return (
            "passwords" === r
              ? (n = (function (e, t) {
                  var n = "";
                  return (
                    !t || e.l33t || e.reversed
                      ? e.guessesLog10 <= 4 && (n = E.translations.warnings.similarToCommon)
                      : (n =
                          e.rank <= 10
                            ? E.translations.warnings.topTen
                            : e.rank <= 100
                            ? E.translations.warnings.topHundred
                            : E.translations.warnings.common),
                    n
                  );
                })(e, t))
              : r.includes("wikipedia")
              ? (n = (function (e, t) {
                  var n = "";
                  return t && (n = E.translations.warnings.wordByItself), n;
                })(0, t))
              : a
              ? (n = (function (e, t) {
                  return t ? E.translations.warnings.namesByThemselves : E.translations.warnings.commonNames;
                })(0, t))
              : "userInputs" === r && (n = E.translations.warnings.userInputs),
            n
          );
        },
        ne = function (e, t) {
          var n = te(e, t),
            r = [],
            a = e.token;
          return (
            a.match(f)
              ? r.push(E.translations.suggestions.capitalization)
              : a.match(v) && a.toLowerCase() !== a && r.push(E.translations.suggestions.allUppercase),
            e.reversed && e.token.length >= 4 && r.push(E.translations.suggestions.reverseWords),
            e.l33t && r.push(E.translations.suggestions.l33t),
            { warning: n, suggestions: r }
          );
        },
        re = function (e) {
          return "recentYear" === e.regexName
            ? {
                warning: E.translations.warnings.recentYears,
                suggestions: [E.translations.suggestions.recentYears, E.translations.suggestions.associatedYears]
              }
            : { warning: "", suggestions: [] };
        },
        ae = function (e) {
          var t = E.translations.warnings.extendedRepeat;
          return (
            1 === e.baseToken.length && (t = E.translations.warnings.simpleRepeat),
            { warning: t, suggestions: [E.translations.suggestions.repeated] }
          );
        },
        se = function () {
          return { warning: E.translations.warnings.sequences, suggestions: [E.translations.suggestions.sequences] };
        },
        ie = function (e) {
          var t = E.translations.warnings.keyPattern;
          return (
            1 === e.turns && (t = E.translations.warnings.straightRow),
            { warning: t, suggestions: [E.translations.suggestions.longerKeyboardPattern] }
          );
        },
        oe = { warning: "", suggestions: [] },
        ue = (function () {
          function e() {
            (0, s.Z)(this, e),
              (this.matchers = { bruteforce: Q, date: ee, dictionary: ne, regex: re, repeat: ae, sequence: se, spatial: ie }),
              (this.defaultFeedback = { warning: "", suggestions: [] }),
              this.setDefaultSuggestions();
          }
          return (
            (0, i.Z)(e, [
              {
                key: "setDefaultSuggestions",
                value: function () {
                  this.defaultFeedback.suggestions.push(E.translations.suggestions.useWords, E.translations.suggestions.noNeed);
                }
              },
              {
                key: "getFeedback",
                value: function (e, t) {
                  if (0 === t.length) return this.defaultFeedback;
                  if (e > 2) return oe;
                  var n = E.translations.suggestions.anotherWord,
                    r = this.getLongestMatch(t),
                    a = this.getMatchFeedback(r, 1 === t.length);
                  return (
                    null !== a && void 0 !== a
                      ? (a.suggestions.unshift(n), null == a.warning && (a.warning = ""))
                      : (a = { warning: "", suggestions: [n] }),
                    a
                  );
                }
              },
              {
                key: "getLongestMatch",
                value: function (e) {
                  var t = e[0];
                  return (
                    e.slice(1).forEach(function (e) {
                      e.token.length > t.token.length && (t = e);
                    }),
                    t
                  );
                }
              },
              {
                key: "getMatchFeedback",
                value: function (e, t) {
                  return this.matchers[e.pattern]
                    ? this.matchers[e.pattern](e, t)
                    : E.matchers[e.pattern] && "feedback" in E.matchers[e.pattern]
                    ? E.matchers[e.pattern].feedback(e, t)
                    : oe;
                }
              }
            ]),
            e
          );
        })(),
        ce = function () {
          return new Date().getTime();
        },
        he = function (e, t, n) {
          var a = new ue(),
            s = new J(),
            i = B.mostGuessableMatchSequence(t, e),
            o = ce() - n,
            u = s.estimateAttackTimes(i.guesses);
          return (0, r.Z)((0, r.Z)((0, r.Z)({ calcTime: o }, i), u), {}, { feedback: a.getFeedback(u.score, i.sequence) });
        },
        le = function (e, t) {
          return t && E.extendUserInputsDictionary(t), new V().match(e);
        },
        fe = function (e, t) {
          var n = ce(),
            r = le(e, t);
          if (r instanceof Promise) throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");
          return he(r, e, n);
        };
    }
  }
]);
