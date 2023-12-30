!function () {
  var n = this,
    t = n._,
    e = Array.prototype,
    o = Object.prototype,
    u = "Function",
    r = Okta.window[u].prototype,
    i = e.push,
    c = e.slice,
    l = o.toString,
    a = o.hasOwnProperty,
    f = Array.isArray,
    s = Object.keys,
    p = r.bind,
    h = Object.create,
    v = function () {},
    y = function (n) {
      return n instanceof y ? n : this instanceof y ? void (this._wrapped = n) : new y(n);
    };
  (Okta._okta = y).VERSION = "1.8.3";
  var d = function (u, i, n) {
      if (void 0 === i) return u;
      switch (null == n ? 3 : n) {
        case 1:
          return function (n) {
            return u.call(i, n);
          };
        case 2:
          return function (n, t) {
            return u.call(i, n, t);
          };
        case 3:
          return function (n, t, r) {
            return u.call(i, n, t, r);
          };
        case 4:
          return function (n, t, r, e) {
            return u.call(i, n, t, r, e);
          };
      }
      return function () {
        return u.apply(i, arguments);
      };
    },
    g = function (n, t, r) {
      return null == n ? y.identity : y.isFunction(n) ? d(n, t, r) : y.isObject(n) ? y.matcher(n) : y.property(n);
    };
  y.iteratee = function (n, t) {
    return g(n, t, Infinity);
  };
  var m = function (c, f) {
      return function (n) {
        var t = arguments.length;
        if (t < 2 || null == n) return n;
        for (var r = 1; r < t; r++)
          for (var e = arguments[r], u = c(e), i = u.length, o = 0; o < i; o++) {
            var a = u[o];
            (f && void 0 !== n[a]) || (n[a] = e[a]);
          }
        return n;
      };
    },
    b = function (n) {
      if (!y.isObject(n)) return {};
      if (h) return h(n);
      v.prototype = n;
      n = new v();
      return (v.prototype = null), n;
    },
    w = function (t) {
      return function (n) {
        return null == n ? void 0 : n[t];
      };
    },
    _ = Math.pow(2, 53) - 1,
    j = w("length"),
    x = function (n) {
      n = j(n);
      return "number" == typeof n && 0 <= n && n <= _;
    };
  function k(a) {
    return function (n, t, r, e) {
      t = d(t, e, 4);
      var u = !x(n) && y.keys(n),
        i = (u || n).length,
        o = 0 < a ? 0 : i - 1;
      return (
        arguments.length < 3 && ((r = n[u ? u[o] : o]), (o += a)),
        (function (n, t, r, e, u, i) {
          for (; 0 <= u && u < i; u += a) {
            var o = e ? e[u] : u;
            r = t(r, n[o], o, n);
          }
          return r;
        })(n, t, r, u, o, i)
      );
    };
  }
  (y.each = y.forEach =
    function (n, t, r) {
      if (((t = d(t, r)), x(n))) for (u = 0, i = n.length; u < i; u++) t(n[u], u, n);
      else for (var e = y.keys(n), u = 0, i = e.length; u < i; u++) t(n[e[u]], e[u], n);
      return n;
    }),
    (y.map = y.collect =
      function (n, t, r) {
        t = g(t, r);
        for (var e = !x(n) && y.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
          var a = e ? e[o] : o;
          i[o] = t(n[a], a, n);
        }
        return i;
      }),
    (y.reduce = y.foldl = y.inject = k(1)),
    (y.reduceRight = y.foldr = k(-1)),
    (y.find = y.detect =
      function (n, t, r) {
        r = x(n) ? y.findIndex(n, t, r) : y.findKey(n, t, r);
        if (void 0 !== r && -1 !== r) return n[r];
      }),
    (y.filter = y.select =
      function (n, e, t) {
        var u = [];
        return (
          (e = g(e, t)),
          y.each(n, function (n, t, r) {
            e(n, t, r) && u.push(n);
          }),
          u
        );
      }),
    (y.reject = function (n, t, r) {
      return y.filter(n, y.negate(g(t)), r);
    }),
    (y.every = y.all =
      function (n, t, r) {
        t = g(t, r);
        for (var e = !x(n) && y.keys(n), u = (e || n).length, i = 0; i < u; i++) {
          var o = e ? e[i] : i;
          if (!t(n[o], o, n)) return !1;
        }
        return !0;
      }),
    (y.some = y.any =
      function (n, t, r) {
        t = g(t, r);
        for (var e = !x(n) && y.keys(n), u = (e || n).length, i = 0; i < u; i++) {
          var o = e ? e[i] : i;
          if (t(n[o], o, n)) return !0;
        }
        return !1;
      }),
    (y.contains =
      y.includes =
      y.include =
        function (n, t, r, e) {
          return x(n) || (n = y.values(n)), 0 <= y.indexOf(n, t, (r = "number" != typeof r || e ? 0 : r));
        }),
    (y.invoke = function (n, r) {
      var e = c.call(arguments, 2),
        u = y.isFunction(r);
      return y.map(n, function (n) {
        var t = u ? r : n[r];
        return null == t ? t : t.apply(n, e);
      });
    }),
    (y.pluck = function (n, t) {
      return y.map(n, y.property(t));
    }),
    (y.where = function (n, t) {
      return y.filter(n, y.matcher(t));
    }),
    (y.findWhere = function (n, t) {
      return y.find(n, y.matcher(t));
    }),
    (y.max = function (n, e, t) {
      var r,
        u,
        i = -Infinity,
        o = -Infinity;
      if (null == e && null != n) for (var a = 0, c = (n = x(n) ? n : y.values(n)).length; a < c; a++) (r = n[a]), i < r && (i = r);
      else
        (e = g(e, t)),
          y.each(n, function (n, t, r) {
            (u = e(n, t, r)), (o < u || (u === -Infinity && i === -Infinity)) && ((i = n), (o = u));
          });
      return i;
    }),
    (y.min = function (n, e, t) {
      var r,
        u,
        i = Infinity,
        o = Infinity;
      if (null == e && null != n) for (var a = 0, c = (n = x(n) ? n : y.values(n)).length; a < c; a++) (r = n[a]) < i && (i = r);
      else
        (e = g(e, t)),
          y.each(n, function (n, t, r) {
            ((u = e(n, t, r)) < o || (u === Infinity && i === Infinity)) && ((i = n), (o = u));
          });
      return i;
    }),
    (y.shuffle = function (n) {
      for (var t, r = x(n) ? n : y.values(n), e = r.length, u = Array(e), i = 0; i < e; i++)
        (t = y.random(0, i)) !== i && (u[i] = u[t]), (u[t] = r[i]);
      return u;
    }),
    (y.sample = function (n, t, r) {
      return null == t || r ? (n = !x(n) ? y.values(n) : n)[y.random(n.length - 1)] : y.shuffle(n).slice(0, Math.max(0, t));
    }),
    (y.sortBy = function (n, e, t) {
      return (
        (e = g(e, t)),
        y.pluck(
          y
            .map(n, function (n, t, r) {
              return { value: n, index: t, criteria: e(n, t, r) };
            })
            .sort(function (n, t) {
              var r = n.criteria,
                e = t.criteria;
              if (r !== e) {
                if (e < r || void 0 === r) return 1;
                if (r < e || void 0 === e) return -1;
              }
              return n.index - t.index;
            }),
          "value"
        )
      );
    });
  r = function (i) {
    return function (r, e, n) {
      var u = {};
      return (
        (e = g(e, n)),
        y.each(r, function (n, t) {
          t = e(n, t, r);
          i(u, n, t);
        }),
        u
      );
    };
  };
  (y.groupBy = r(function (n, t, r) {
    y.has(n, r) ? n[r].push(t) : (n[r] = [t]);
  })),
    (y.indexBy = r(function (n, t, r) {
      n[r] = t;
    })),
    (y.countBy = r(function (n, t, r) {
      y.has(n, r) ? n[r]++ : (n[r] = 1);
    })),
    (y.toArray = function (n) {
      return n ? (y.isArray(n) ? c.call(n) : x(n) ? y.map(n, y.identity) : y.values(n)) : [];
    }),
    (y.size = function (n) {
      return null == n ? 0 : (x(n) ? n : y.keys(n)).length;
    }),
    (y.partition = function (n, e, t) {
      e = g(e, t);
      var u = [],
        i = [];
      return (
        y.each(n, function (n, t, r) {
          (e(n, t, r) ? u : i).push(n);
        }),
        [u, i]
      );
    }),
    (y.first =
      y.head =
      y.take =
        function (n, t, r) {
          if (null != n) return null == t || r ? n[0] : y.initial(n, n.length - t);
        }),
    (y.initial = function (n, t, r) {
      return c.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }),
    (y.last = function (n, t, r) {
      if (null != n) return null == t || r ? n[n.length - 1] : y.rest(n, Math.max(0, n.length - t));
    }),
    (y.rest =
      y.tail =
      y.drop =
        function (n, t, r) {
          return c.call(n, null == t || r ? 1 : t);
        }),
    (y.compact = function (n) {
      return y.filter(n, y.identity);
    });
  var O = function (n, t, r, e) {
    for (var u = [], i = 0, o = e || 0, a = j(n); o < a; o++) {
      var c = n[o];
      if (x(c) && (y.isArray(c) || y.isArguments(c))) {
        var f = 0,
          l = (c = !t ? O(c, t, r) : c).length;
        for (u.length += l; f < l; ) u[i++] = c[f++];
      } else r || (u[i++] = c);
    }
    return u;
  };
  function A(i) {
    return function (n, t, r) {
      t = g(t, r);
      for (var e = j(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) if (t(n[u], u, n)) return u;
      return -1;
    };
  }
  function I(i, o, a) {
    return function (n, t, r) {
      var e = 0,
        u = j(n);
      if ("number" == typeof r) 0 < i ? (e = 0 <= r ? r : Math.max(r + u, e)) : (u = 0 <= r ? Math.min(r + 1, u) : r + u + 1);
      else if (a && r && u) return n[(r = a(n, t))] === t ? r : -1;
      if (t != t) return 0 <= (r = o(c.call(n, e, u), y.isNaN)) ? r + e : -1;
      for (r = 0 < i ? e : u - 1; 0 <= r && r < u; r += i) if (n[r] === t) return r;
      return -1;
    };
  }
  (y.flatten = function (n, t) {
    return O(n, t, !1);
  }),
    (y.without = function (n) {
      return y.difference(n, c.call(arguments, 1));
    }),
    (y.uniq = y.unique =
      function (n, t, r, e) {
        y.isBoolean(t) || ((e = r), (r = t), (t = !1)), null != r && (r = g(r, e));
        for (var u = [], i = [], o = 0, a = j(n); o < a; o++) {
          var c = n[o],
            f = r ? r(c, o, n) : c;
          t ? ((o && i === f) || u.push(c), (i = f)) : r ? y.contains(i, f) || (i.push(f), u.push(c)) : y.contains(u, c) || u.push(c);
        }
        return u;
      }),
    (y.union = function () {
      return y.uniq(O(arguments, !0, !0));
    }),
    (y.intersection = function (n) {
      for (var t = [], r = arguments.length, e = 0, u = j(n); e < u; e++) {
        var i = n[e];
        if (!y.contains(t, i)) {
          for (var o = 1; o < r && y.contains(arguments[o], i); o++);
          o === r && t.push(i);
        }
      }
      return t;
    }),
    (y.difference = function (n) {
      var t = O(arguments, !0, !0, 1);
      return y.filter(n, function (n) {
        return !y.contains(t, n);
      });
    }),
    (y.zip = function () {
      return y.unzip(arguments);
    }),
    (y.unzip = function (n) {
      for (var t = (n && y.max(n, j).length) || 0, r = Array(t), e = 0; e < t; e++) r[e] = y.pluck(n, e);
      return r;
    }),
    (y.object = function (n, t) {
      for (var r = {}, e = 0, u = j(n); e < u; e++) t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
      return r;
    }),
    (y.findIndex = A(1)),
    (y.findLastIndex = A(-1)),
    (y.sortedIndex = function (n, t, r, e) {
      for (var u = (r = g(r, e, 1))(t), i = 0, o = j(n); i < o; ) {
        var a = Math.floor((i + o) / 2);
        r(n[a]) < u ? (i = a + 1) : (o = a);
      }
      return i;
    }),
    (y.indexOf = I(1, y.findIndex, y.sortedIndex)),
    (y.lastIndexOf = I(-1, y.findLastIndex)),
    (y.range = function (n, t, r) {
      null == t && ((t = n || 0), (n = 0)), (r = r || 1);
      for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) u[i] = n;
      return u;
    });
  var S = function (n, t, r, e, u) {
    if (!(e instanceof t)) return n.apply(r, u);
    (r = b(n.prototype)), (n = n.apply(r, u));
    return y.isObject(n) ? n : r;
  };
  (y.bind = function (n, t) {
    if (p && n.bind === p) return p.apply(n, c.call(arguments, 1));
    if (!y.isFunction(n)) throw new TypeError("Bind must be called on a function");
    var r = c.call(arguments, 2),
      e = function () {
        return S(n, e, t, this, r.concat(c.call(arguments)));
      };
    return e;
  }),
    (y.partial = function (u) {
      var i = c.call(arguments, 1),
        o = function () {
          for (var n = 0, t = i.length, r = Array(t), e = 0; e < t; e++) r[e] = i[e] === y ? arguments[n++] : i[e];
          for (; n < arguments.length; ) r.push(arguments[n++]);
          return S(u, o, this, this, r);
        };
      return o;
    }),
    (y.bindAll = function (n) {
      var t,
        r,
        e = arguments.length;
      if (e <= 1) throw new Error("bindAll must be passed function names");
      for (t = 1; t < e; t++) n[(r = arguments[t])] = y.bind(n[r], n);
      return n;
    }),
    (y.memoize = function (e, u) {
      var i = function (n) {
        var t = i.cache,
          r = "" + (u ? u.apply(this, arguments) : n);
        return y.has(t, r) || (t[r] = e.apply(this, arguments)), t[r];
      };
      return (i.cache = {}), i;
    }),
    (y.delay = function (n, t) {
      var r = c.call(arguments, 2);
      return setTimeout(function () {
        return n.apply(null, r);
      }, t);
    }),
    (y.defer = y.partial(y.delay, y, 1)),
    (y.throttle = function (r, e, u) {
      var i,
        o,
        a,
        c = null,
        f = 0;
      u = u || {};
      var l = function () {
        (f = !1 === u.leading ? 0 : y.now()), (c = null), (a = r.apply(i, o)), c || (i = o = null);
      };
      return function () {
        var n = y.now();
        f || !1 !== u.leading || (f = n);
        var t = e - (n - f);
        return (
          (i = this),
          (o = arguments),
          t <= 0 || e < t
            ? (c && (clearTimeout(c), (c = null)), (f = n), (a = r.apply(i, o)), c || (i = o = null))
            : c || !1 === u.trailing || (c = Okta.WindowUtil.setTimeout(l, t)),
          a
        );
      };
    }),
    (y.debounce = function (t, r, e) {
      var u,
        i,
        o,
        a,
        c,
        f = function () {
          var n = y.now() - a;
          n < r && 0 <= n ? (u = Okta.WindowUtil.setTimeout(f, r - n)) : ((u = null), e || ((c = t.apply(o, i)), u || (o = i = null)));
        };
      return function () {
        (o = this), (i = arguments), (a = y.now());
        var n = e && !u;
        return (u = u || Okta.WindowUtil.setTimeout(f, r)), n && ((c = t.apply(o, i)), (o = i = null)), c;
      };
    }),
    (y.wrap = function (n, t) {
      return y.partial(t, n);
    }),
    (y.negate = function (n) {
      return function () {
        return !n.apply(this, arguments);
      };
    }),
    (y.compose = function () {
      var r = arguments,
        e = r.length - 1;
      return function () {
        for (var n = e, t = r[e].apply(this, arguments); n--; ) t = r[n].call(this, t);
        return t;
      };
    }),
    (y.after = function (n, t) {
      return function () {
        if (--n < 1) return t.apply(this, arguments);
      };
    }),
    (y.before = function (n, t) {
      var r;
      return function () {
        return 0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = null), r;
      };
    }),
    (y.once = y.partial(y.before, 2));
  var E = !{ toString: null }.propertyIsEnumerable("toString"),
    F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  function M(n, t) {
    var r = F.length,
      e = n.constructor,
      u = (y.isFunction(e) && e.prototype) || o,
      i = "constructor";
    for (y.has(n, i) && !y.contains(t, i) && t.push(i); r--; ) (i = F[r]) in n && n[i] !== u[i] && !y.contains(t, i) && t.push(i);
  }
  (y.keys = function (n) {
    if (!y.isObject(n)) return [];
    if (s) return s(n);
    var t,
      r = [];
    for (t in n) y.has(n, t) && r.push(t);
    return E && M(n, r), r;
  }),
    (y.allKeys = function (n) {
      if (!y.isObject(n)) return [];
      var t,
        r = [];
      for (t in n) r.push(t);
      return E && M(n, r), r;
    }),
    (y.values = function (n) {
      for (var t = y.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = n[t[u]];
      return e;
    }),
    (y.mapObject = function (n, t, r) {
      t = g(t, r);
      for (var e, u = y.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[(e = u[a])] = t(n[e], e, n);
      return o;
    }),
    (y.pairs = function (n) {
      for (var t = y.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = [t[u], n[t[u]]];
      return e;
    }),
    (y.invert = function (n) {
      for (var t = {}, r = y.keys(n), e = 0, u = r.length; e < u; e++) t[n[r[e]]] = r[e];
      return t;
    }),
    (y.functions = y.methods =
      function (n) {
        var t,
          r = [];
        for (t in n) y.isFunction(n[t]) && r.push(t);
        return r.sort();
      }),
    (y.extend = m(y.allKeys)),
    (y.extendOwn = y.assign = m(y.keys)),
    (y.findKey = function (n, t, r) {
      t = g(t, r);
      for (var e, u = y.keys(n), i = 0, o = u.length; i < o; i++) if (t(n[(e = u[i])], e, n)) return e;
    }),
    (y.pick = function (n, t, r) {
      var e,
        u,
        i = {},
        o = n;
      if (null == o) return i;
      y.isFunction(t)
        ? ((u = y.allKeys(o)), (e = d(t, r)))
        : ((u = O(arguments, !1, !1, 1)),
          (e = function (n, t, r) {
            return t in r;
          }),
          (o = Object(o)));
      for (var a = 0, c = u.length; a < c; a++) {
        var f = u[a],
          l = o[f];
        e(l, f, o) && (i[f] = l);
      }
      return i;
    }),
    (y.omit = function (n, t, r) {
      var e;
      return (
        (t = y.isFunction(t)
          ? y.negate(t)
          : ((e = y.map(O(arguments, !1, !1, 1), String)),
            function (n, t) {
              return !y.contains(e, t);
            })),
        y.pick(n, t, r)
      );
    }),
    (y.defaults = m(y.allKeys, !0)),
    (y.create = function (n, t) {
      n = b(n);
      return t && y.extendOwn(n, t), n;
    }),
    (y.clone = function (n) {
      return y.isObject(n) ? (y.isArray(n) ? n.slice() : y.extend({}, n)) : n;
    }),
    (y.tap = function (n, t) {
      return t(n), n;
    }),
    (y.isMatch = function (n, t) {
      var r = y.keys(t),
        e = r.length;
      if (null == n) return !e;
      for (var u = Object(n), i = 0; i < e; i++) {
        var o = r[i];
        if (t[o] !== u[o] || !(o in u)) return !1;
      }
      return !0;
    });
  var N = function (n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof y && (n = n._wrapped), t instanceof y && (t = t._wrapped);
    var u = l.call(n);
    if (u !== l.call(t)) return !1;
    switch (u) {
      case "[object RegExp]":
      case "[object String]":
        return "" + n == "" + t;
      case "[object Number]":
        return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +n == +t;
    }
    var i = "[object Array]" === u;
    if (!i) {
      if ("object" != typeof n || "object" != typeof t) return !1;
      var o = n.constructor,
        u = t.constructor;
      if (o !== u && !(y.isFunction(o) && o instanceof o && y.isFunction(u) && u instanceof u) && "constructor" in n && "constructor" in t)
        return !1;
    }
    e = e || [];
    for (var a = (r = r || []).length; a--; ) if (r[a] === n) return e[a] === t;
    if ((r.push(n), e.push(t), i)) {
      if ((a = n.length) !== t.length) return !1;
      for (; a--; ) if (!N(n[a], t[a], r, e)) return !1;
    } else {
      var c,
        f = y.keys(n),
        a = f.length;
      if (y.keys(t).length !== a) return !1;
      for (; a--; ) if (((c = f[a]), !y.has(t, c) || !N(n[c], t[c], r, e))) return !1;
    }
    return r.pop(), e.pop(), !0;
  };
  (y.isEqual = function (n, t) {
    return N(n, t);
  }),
    (y.isEmpty = function (n) {
      return null == n || (x(n) && (y.isArray(n) || y.isString(n) || y.isArguments(n)) ? 0 === n.length : 0 === y.keys(n).length);
    }),
    (y.isElement = function (n) {
      return !(!n || 1 !== n.nodeType);
    }),
    (y.isArray =
      f ||
      function (n) {
        return "[object Array]" === l.call(n);
      }),
    (y.isObject = function (n) {
      var t = typeof n;
      return "function" == t || ("object" == t && !!n);
    }),
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
      y["is" + t] = function (n) {
        return l.call(n) === "[object " + t + "]";
      };
    }),
    y.isArguments(arguments) ||
      (y.isArguments = function (n) {
        return y.has(n, "callee");
      }),
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      (y.isFunction = function (n) {
        return "function" == typeof n || !1;
      }),
    (y.isFinite = function (n) {
      return isFinite(n) && !isNaN(parseFloat(n));
    }),
    (y.isNaN = function (n) {
      return y.isNumber(n) && n !== +n;
    }),
    (y.isBoolean = function (n) {
      return !0 === n || !1 === n || "[object Boolean]" === l.call(n);
    }),
    (y.isNull = function (n) {
      return null === n;
    }),
    (y.isUndefined = function (n) {
      return void 0 === n;
    }),
    (y.has = function (n, t) {
      return null != n && a.call(n, t);
    }),
    (y.noConflict = function () {
      return (n._ = t), this;
    }),
    (y.identity = function (n) {
      return n;
    }),
    (y.constant = function (n) {
      return function () {
        return n;
      };
    }),
    (y.noop = function () {}),
    (y.property = w),
    (y.propertyOf = function (t) {
      return null == t
        ? function () {}
        : function (n) {
            return t[n];
          };
    }),
    (y.matcher = y.matches =
      function (t) {
        return (
          (t = y.extendOwn({}, t)),
          function (n) {
            return y.isMatch(n, t);
          }
        );
      }),
    (y.times = function (n, t, r) {
      var e = Array(Math.max(0, n));
      t = d(t, r, 1);
      for (var u = 0; u < n; u++) e[u] = t(u);
      return e;
    }),
    (y.random = function (n, t) {
      return null == t && ((t = n), (n = 0)), n + Math.floor(Math.random() * (t - n + 1));
    }),
    (y.now =
      Date.now ||
      function () {
        return new Date().getTime();
      });
  (m = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }),
    (f = y.invert(m)),
    (w = function (t) {
      var r = function (n) {
          return t[n];
        },
        n = "(?:" + y.keys(t).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");
      return function (n) {
        return e.test((n = null == n ? "" : "" + n)) ? n.replace(u, r) : n;
      };
    });
  (y.escape = w(m)),
    (y.unescape = w(f)),
    (y.result = function (n, t, r) {
      t = null == n ? void 0 : n[t];
      return y.isFunction((t = void 0 === t ? r : t)) ? t.call(n) : t;
    });
  var B = 0;
  (y.uniqueId = function (n) {
    var t = ++B + "";
    return n ? n + t : t;
  }),
    (y.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
  var T = /(.)^/,
    R = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
    q = /\\|'|\r|\n|\u2028|\u2029/g,
    K = function (n) {
      return "\\" + R[n];
    },
    z = /^\s*(\w|\$)+\s*$/;
  (y.template = function (i, n, t) {
    n = y.defaults({}, (n = !n && t ? t : n), y.templateSettings);
    var t = RegExp([(n.escape || T).source, (n.interpolate || T).source, (n.evaluate || T).source].join("|") + "|$", "g"),
      o = 0,
      a = "__p+='";
    i.replace(t, function (n, t, r, e, u) {
      return (
        (a += i.slice(o, u).replace(q, K)),
        (o = u + n.length),
        t
          ? (a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'")
          : r
          ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
          : e && (a += "';\n" + e + "\n__p+='"),
        n
      );
    }),
      (a += "';\n");
    t = n.variable;
    if (t) {
      if (!z.test(t)) throw new Error(t);
    } else (a = "with(obj||{}){\n" + a + "}\n"), (t = "obj");
    a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
    try {
      render = new Okta.window[u](t, "_", a);
    } catch (r) {
      throw ((r.source = a), r);
    }
    n = function (n) {
      return render.call(this, n, y);
    };
    return (n.source = "function(" + t + "){\n" + a + "}"), n;
  }),
    (y.chain = function (n) {
      n = y(n);
      return (n._chain = !0), n;
    });
  var D = function (n, t) {
    return n._chain ? y(t).chain() : t;
  };
  (y.mixin = function (r) {
    y.each(y.functions(r), function (n) {
      var t = (y[n] = r[n]);
      y.prototype[n] = function () {
        var n = [this._wrapped];
        return i.apply(n, arguments), D(this, t.apply(y, n));
      };
    });
  }),
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
      var r = e[t];
      y.prototype[t] = function () {
        var n = this._wrapped;
        return r.apply(n, arguments), ("shift" !== t && "splice" !== t) || 0 !== n.length || delete n[0], D(this, n);
      };
    }),
    y.each(["concat", "join", "slice"], function (n) {
      var t = e[n];
      y.prototype[n] = function () {
        return D(this, t.apply(this._wrapped, arguments));
      };
    }),
    (y.prototype.value = function () {
      return this._wrapped;
    }),
    (y.prototype.valueOf = y.prototype.toJSON = y.prototype.value),
    (y.prototype.toString = function () {
      return "" + this._wrapped;
    }),
    (n._okta = y.extend({}, n._okta, y));
}.call(Okta.window);
