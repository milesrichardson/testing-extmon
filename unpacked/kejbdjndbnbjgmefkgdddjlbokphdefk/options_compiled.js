var l,
  aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  },
  ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        },
  ca = function (a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  },
  da = ca(this),
  ea = function (a, b) {
    if (b)
      a: {
        var c = da;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  };
ea("Symbol", function (a) {
  if (a) return a;
  var b = function (f, g) {
    this.nd = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.nd;
  };
  var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    d = 0,
    e = function (f) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new b(c + (f || "") + "_" + d++, f);
    };
  return e;
});
ea("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");
  for (
    var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
        " "
      ),
      c = 0;
    c < b.length;
    c++
  ) {
    var d = da[b[c]];
    "function" === typeof d &&
      "function" != typeof d.prototype[a] &&
      ba(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return fa(aa(this));
        }
      });
  }
  return a;
});
var fa = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  ha = function (a) {
    return (a.raw = a);
  },
  ia = function (a, b) {
    a.raw = b;
    return a;
  },
  ja = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  },
  la =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        },
  ma;
if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
else {
  var na;
  a: {
    var oa = { a: !0 },
      pa = {};
    try {
      pa.__proto__ = oa;
      na = pa.a;
      break a;
    } catch (a) {}
    na = !1;
  }
  ma = na
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var qa = ma,
  ra = function (a, b) {
    a.prototype = la(b.prototype);
    a.prototype.constructor = a;
    if (qa) qa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.G = b.prototype;
  },
  sa = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  },
  ta = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
ea("WeakMap", function (a) {
  function b() {}
  function c(k) {
    var m = typeof k;
    return ("object" === m && null !== k) || "function" === m;
  }
  function d(k) {
    if (!ta(k, f)) {
      var m = new b();
      ba(k, f, { value: m });
    }
  }
  function e(k) {
    var m = Object[k];
    m &&
      (Object[k] = function (u) {
        if (u instanceof b) return u;
        Object.isExtensible(u) && d(u);
        return m(u);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          m = Object.seal({}),
          u = new a([
            [k, 2],
            [m, 3]
          ]);
        if (2 != u.get(k) || 3 != u.get(m)) return !1;
        u.delete(k);
        u.set(m, 4);
        return !u.has(k) && 4 == u.get(m);
      } catch (E) {
        return !1;
      }
    })()
  )
    return a;
  var f = "$jscomp_hidden_" + Math.random();
  e("freeze");
  e("preventExtensions");
  e("seal");
  var g = 0,
    h = function (k) {
      this.ca = (g += Math.random() + 1).toString();
      if (k) {
        k = ja(k);
        for (var m; !(m = k.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    };
  h.prototype.set = function (k, m) {
    if (!c(k)) throw Error("Invalid WeakMap key");
    d(k);
    if (!ta(k, f)) throw Error("WeakMap key fail: " + k);
    k[f][this.ca] = m;
    return this;
  };
  h.prototype.get = function (k) {
    return c(k) && ta(k, f) ? k[f][this.ca] : void 0;
  };
  h.prototype.has = function (k) {
    return c(k) && ta(k, f) && ta(k[f], this.ca);
  };
  h.prototype.delete = function (k) {
    return c(k) && ta(k, f) && ta(k[f], this.ca) ? delete k[f][this.ca] : !1;
  };
  return h;
});
ea("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = Object.seal({ x: 4 }),
          k = new a(ja([[h, "s"]]));
        if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
        var m = k.entries(),
          u = m.next();
        if (u.done || u.value[0] != h || "s" != u.value[1]) return !1;
        u = m.next();
        return u.done || 4 != u.value[0].x || "t" != u.value[1] || !m.next().done ? !1 : !0;
      } catch (E) {
        return !1;
      }
    })()
  )
    return a;
  var b = new WeakMap(),
    c = function (h) {
      this[0] = {};
      this[1] = f();
      this.size = 0;
      if (h) {
        h = ja(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    };
  c.prototype.set = function (h, k) {
    h = 0 === h ? 0 : h;
    var m = d(this, h);
    m.list || (m.list = this[0][m.id] = []);
    m.entry
      ? (m.entry.value = k)
      : ((m.entry = { next: this[1], previous: this[1].previous, head: this[1], key: h, value: k }),
        m.list.push(m.entry),
        (this[1].previous.next = m.entry),
        (this[1].previous = m.entry),
        this.size++);
    return this;
  };
  c.prototype.delete = function (h) {
    h = d(this, h);
    return h.entry && h.list
      ? (h.list.splice(h.index, 1),
        h.list.length || delete this[0][h.id],
        (h.entry.previous.next = h.entry.next),
        (h.entry.next.previous = h.entry.previous),
        (h.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  c.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = f();
    this.size = 0;
  };
  c.prototype.has = function (h) {
    return !!d(this, h).entry;
  };
  c.prototype.get = function (h) {
    return (h = d(this, h).entry) && h.value;
  };
  c.prototype.entries = function () {
    return e(this, function (h) {
      return [h.key, h.value];
    });
  };
  c.prototype.keys = function () {
    return e(this, function (h) {
      return h.key;
    });
  };
  c.prototype.values = function () {
    return e(this, function (h) {
      return h.value;
    });
  };
  c.prototype.forEach = function (h, k) {
    for (var m = this.entries(), u; !(u = m.next()).done; ) (u = u.value), h.call(k, u[1], u[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, k) {
      var m = k && typeof k;
      "object" == m || "function" == m ? (b.has(k) ? (m = b.get(k)) : ((m = "" + ++g), b.set(k, m))) : (m = "p_" + k);
      var u = h[0][m];
      if (u && ta(h[0], m))
        for (h = 0; h < u.length; h++) {
          var E = u[h];
          if ((k !== k && E.key !== E.key) || k === E.key) return { id: m, list: u, index: h, entry: E };
        }
      return { id: m, list: u, index: -1, entry: void 0 };
    },
    e = function (h, k) {
      var m = h[1];
      return fa(function () {
        if (m) {
          for (; m.head != h[1]; ) m = m.previous;
          for (; m.next != m.head; ) return (m = m.next), { done: !1, value: k(m) };
          m = null;
        }
        return { done: !0, value: void 0 };
      });
    },
    f = function () {
      var h = {};
      return (h.previous = h.next = h.head = h);
    },
    g = 0;
  return c;
});
ea("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
var ua = function (a, b) {
  a instanceof String && (a += "");
  var c = 0,
    d = !1,
    e = {
      next: function () {
        if (!d && c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: !1 };
        }
        d = !0;
        return { done: !0, value: void 0 };
      }
    };
  e[Symbol.iterator] = function () {
    return e;
  };
  return e;
};
ea("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b, c) {
          return c;
        });
      };
});
ea("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b) {
          return b;
        });
      };
});
ea("Array.from", function (a) {
  return a
    ? a
    : function (b, c, d) {
        c =
          null != c
            ? c
            : function (h) {
                return h;
              };
        var e = [],
          f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
          b = f.call(b);
          for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
        } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e;
      };
});
ea("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b, c) {
          return [b, c];
        });
      };
});
ea("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
ea("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) ta(b, d) && c.push(b[d]);
        return c;
      };
});
ea("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) ta(b, d) && c.push([d, b[d]]);
        return c;
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n = this || self,
  va = function (a) {
    a.Ba = void 0;
    a.Ka = function () {
      return a.Ba ? a.Ba : (a.Ba = new a());
    };
  },
  wa = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  xa = function (a) {
    var b = wa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  ya = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  Ba = function (a) {
    return (Object.prototype.hasOwnProperty.call(a, za) && a[za]) || (a[za] = ++Aa);
  },
  za = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Aa = 0,
  Ca = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  Da = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  },
  Ea = function (a, b, c) {
    Ea = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ca : Da;
    return Ea.apply(null, arguments);
  },
  p = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  Fa = function (a, b) {
    a = a.split(".");
    var c = n;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  q = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.G = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.fh = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  },
  Ga = function (a) {
    return a;
  };
function Ha(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ha);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
q(Ha, Error);
Ha.prototype.name = "CustomError";
var Ia;
function Ja(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  Ha.call(this, c + a[d]);
}
q(Ja, Ha);
Ja.prototype.name = "AssertionError";
function Ka(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Ja("" + e, f || []);
}
var r = function (a, b, c) {
    a || Ka("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  La = function (a, b) {
    throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Ma = function (a, b, c) {
    "number" !== typeof a && Ka("Expected number but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Na = function (a, b, c) {
    "string" !== typeof a && Ka("Expected string but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Oa = function (a, b, c) {
    ya(a) || Ka("Expected object but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Pa = function (a, b, c) {
    Array.isArray(a) || Ka("Expected array but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Qa = function (a, b, c) {
    "boolean" !== typeof a && Ka("Expected boolean but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Sa = function (a, b, c) {
    (ya(a) && 1 == a.nodeType) || Ka("Expected Element but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Ua = function (a, b, c, d) {
    a instanceof b || Ka("Expected instanceof %s but got %s.", [Ta(b), Ta(a)], c, Array.prototype.slice.call(arguments, 3));
    return a;
  };
function Ta(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
var Va = Array.prototype.indexOf
    ? function (a, b) {
        r(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Wa = Array.prototype.forEach
    ? function (a, b, c) {
        r(null != a.length);
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
      };
function Xa(a, b) {
  for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
}
var Ya = Array.prototype.filter
    ? function (a, b) {
        r(null != a.length);
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
          if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h);
          }
        return d;
      },
  Za = Array.prototype.some
    ? function (a, b, c) {
        r(null != a.length);
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      };
function $a(a, b, c) {
  var d = 0;
  Wa(
    a,
    function (e, f, g) {
      b.call(c, e, f, g) && ++d;
    },
    c
  );
  return d;
}
function ab(a, b) {
  a: {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
function bb(a, b) {
  return 0 <= Va(a, b);
}
function cb(a, b) {
  b = Va(a, b);
  var c;
  if ((c = 0 <= b)) r(null != a.length), Array.prototype.splice.call(a, b, 1);
  return c;
}
function db(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function eb(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (xa(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function fb(a, b, c, d) {
  r(null != a.length);
  Array.prototype.splice.apply(a, gb(arguments, 1));
}
function gb(a, b, c) {
  r(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function ib(a, b, c) {
  c = c || hb;
  for (var d = 0, e = a.length; d < e; ) {
    var f = d + ((e - d) >>> 1);
    var g = c(b, a[f]);
    if (0 < g) d = f + 1;
    else {
      e = f;
      var h = !g;
    }
  }
  h = h ? d : -d - 1;
  0 > h && fb(a, -(h + 1), 0, b);
}
function jb(a, b) {
  for (var c = {}, d = 0; d < a.length; d++) {
    var e = a[d],
      f = b.call(void 0, e, d, a);
    void 0 !== f && (c[f] || (c[f] = [])).push(e);
  }
  return c;
}
var kb = function (a) {
    return function () {
      return a;
    };
  },
  lb = function () {
    return !1;
  },
  mb = function () {
    return !0;
  },
  nb = function () {};
var ob = !1,
  rb = function () {
    if (!ob) {
      for (var a in pb) qb[a] = pb[a];
      ob = !0;
    }
  },
  qb = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34, "Ft", "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd", "RUB"],
    SAR: [2, "SAR", "SAR"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
  },
  pb = {
    AFN: [48, "Af.", "AFN"],
    AMD: [32, "Dram", "dram"],
    ANG: [2, "NAf.", "ANG"],
    AOA: [2, "Kz", "Kz"],
    ARS: [34, "$", "AR$"],
    AWG: [2, "Afl.", "Afl."],
    AZN: [34, "\u20bc", "AZN"],
    BAM: [2, "KM", "KM"],
    BBD: [2, "$", "Bds$"],
    BHD: [3, "din", "din"],
    BIF: [0, "FBu", "FBu"],
    BMD: [2, "$", "BD$"],
    BND: [2, "$", "B$"],
    BOB: [2, "Bs", "Bs"],
    BSD: [2, "$", "BS$"],
    BTN: [2, "Nu.", "Nu."],
    BWP: [2, "P", "pula"],
    BYN: [50, "\u0440.", "BYN"],
    BYR: [48, "\u0440.", "BYR"],
    BZD: [2, "$", "BZ$"],
    CLF: [4, "UF", "CLF"],
    CNH: [2, "\u00a5", "RMB\u00a5"],
    CUC: [1, "$", "CUC$"],
    CUP: [2, "$", "CU$"],
    CVE: [2, "CVE", "Esc"],
    DJF: [0, "Fdj", "Fdj"],
    DZD: [2, "din", "din"],
    ERN: [2, "Nfk", "Nfk"],
    FJD: [2, "$", "FJ$"],
    FKP: [2, "\u00a3", "FK\u00a3"],
    GEL: [2, "GEL", "GEL"],
    GHS: [2, "GHS", "GHS"],
    GIP: [2, "\u00a3", "GI\u00a3"],
    GMD: [2, "GMD", "GMD"],
    GNF: [0, "FG", "FG"],
    GTQ: [2, "Q", "GTQ"],
    GYD: [0, "$", "GY$"],
    HNL: [2, "L", "HNL"],
    HTG: [2, "HTG", "HTG"],
    IQD: [0, "din", "IQD"],
    JOD: [3, "din", "JOD"],
    KES: [2, "Ksh", "Ksh"],
    KGS: [2, "KGS", "KGS"],
    KHR: [2, "Riel", "KHR"],
    KMF: [0, "CF", "KMF"],
    KPW: [0, "\u20a9KP", "KPW"],
    KWD: [3, "din", "KWD"],
    KYD: [2, "$", "KY$"],
    KZT: [2, "\u20b8", "KZT"],
    LAK: [0, "\u20ad", "\u20ad"],
    LBP: [0, "L\u00a3", "LBP"],
    LRD: [2, "$", "L$"],
    LSL: [2, "LSL", "LSL"],
    LYD: [3, "din", "LD"],
    MAD: [2, "dh", "MAD"],
    MDL: [2, "MDL", "MDL"],
    MGA: [0, "Ar", "MGA"],
    MKD: [2, "din", "MKD"],
    MMK: [0, "K", "MMK"],
    MOP: [2, "MOP", "MOP$"],
    MRO: [0, "MRO", "MRO"],
    MUR: [0, "MURs", "MURs"],
    MWK: [2, "MWK", "MWK"],
    MZN: [2, "MTn", "MTn"],
    NAD: [2, "$", "N$"],
    NGN: [2, "\u20a6", "NG\u20a6"],
    NIO: [2, "C$", "C$"],
    NPR: [2, "Rs", "NPRs"],
    NZD: [2, "$", "NZ$"],
    OMR: [3, "Rial", "OMR"],
    PGK: [2, "PGK", "PGK"],
    PYG: [16, "Gs.", "PYG"],
    QAR: [2, "Rial", "QR"],
    RWF: [0, "RF", "RF"],
    SBD: [2, "$", "SI$"],
    SCR: [2, "SCR", "SCR"],
    SDG: [2, "SDG", "SDG"],
    SHP: [2, "\u00a3", "SH\u00a3"],
    SLE: [0, "SLE", "SLE"],
    SLL: [0, "SLL", "SLL"],
    SOS: [0, "SOS", "SOS"],
    SRD: [2, "$", "SR$"],
    SSP: [2, "\u00a3", "SSP"],
    STD: [0, "Db", "Db"],
    SYP: [0, "\u00a3", "SY\u00a3"],
    SZL: [2, "SZL", "SZL"],
    TJS: [2, "Som", "TJS"],
    TMT: [50, "m", "TMT"],
    TND: [3, "din", "DT"],
    TOP: [2, "T$", "T$"],
    TTD: [2, "$", "TT$"],
    UGX: [0, "UGX", "UGX"],
    UZS: [0, "so\u02bcm", "UZS"],
    VEF: [2, "Bs", "Bs"],
    VES: [2, "Bs", "Bs"],
    VUV: [0, "VUV", "VUV"],
    WST: [2, "WST", "WST"],
    XAF: [0, "FCFA", "FCFA"],
    XCD: [2, "$", "EC$"],
    XOF: [0, "CFA", "CFA"],
    XPF: [48, "FCFP", "FCFP"],
    ZMW: [0, "ZMW", "ZMW"],
    ZWD: [0, "$", "Z$"]
  };
function sb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function tb(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return !0;
  return !1;
}
function ub(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
function vb(a, b) {
  for (var c in a) if (a[c] == b) return !0;
  return !1;
}
var wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function xb(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < wb.length; f++) (c = wb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function yb(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return yb.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
function zb(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return zb.apply(null, arguments[0]);
  for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
  return c;
}
var Ab,
  Bb = function () {
    if (void 0 === Ab) {
      var a = null,
        b = n.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", { createHTML: Ga, createScript: Ga, createScriptURL: Ga });
        } catch (c) {
          n.console && n.console.error(c.message);
        }
      Ab = a;
    }
    return Ab;
  };
var Eb = function (a, b) {
  this.kc = (a === Cb && b) || "";
  this.Kd = Db;
};
Eb.prototype.Aa = !0;
Eb.prototype.ya = function () {
  return this.kc;
};
Eb.prototype.toString = function () {
  return "Const{" + this.kc + "}";
};
var Fb = function (a) {
    if (a instanceof Eb && a.constructor === Eb && a.Kd === Db) return a.kc;
    La("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  Db = {},
  Cb = {};
var Hb = function (a, b) {
  if (b !== Gb) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.cc = a;
};
Hb.prototype.toString = function () {
  return this.cc + "";
};
Hb.prototype.Aa = !0;
Hb.prototype.ya = function () {
  return this.cc.toString();
};
var Ib = function (a) {
    if (a instanceof Hb && a.constructor === Hb) return a.cc;
    La("expected object of type TrustedResourceUrl, got '%s' of type %s", a, wa(a));
    return "type_error:TrustedResourceUrl";
  },
  Gb = {},
  Jb = function (a) {
    var b = Bb();
    a = b ? b.createScriptURL(a) : a;
    return new Hb(a, Gb);
  };
var Kb = function (a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  },
  Lb = function (a) {
    return /^[\s\xa0]*$/.test(a);
  },
  Mb = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  Nb = /&/g,
  Ob = /</g,
  Pb = />/g,
  Qb = /"/g,
  Rb = /'/g,
  Sb = /\x00/g,
  Tb = /[\x00&<>"']/,
  Ub = function (a, b) {
    return -1 != a.indexOf(b);
  };
var Wb = function (a, b) {
  if (b !== Vb) throw Error("SafeUrl is not meant to be built directly");
  this.bc = a;
};
Wb.prototype.toString = function () {
  return this.bc.toString();
};
Wb.prototype.Aa = !0;
Wb.prototype.ya = function () {
  return this.bc.toString();
};
var Xb = function (a) {
    if (a instanceof Wb && a.constructor === Wb) return a.bc;
    La("expected object of type SafeUrl, got '" + a + "' of type " + wa(a));
    return "type_error:SafeUrl";
  },
  Vb = {};
new Wb("about:invalid#zClosurez", Vb);
new Wb("about:blank", Vb);
var Yb = {},
  Zb = function () {
    if (Yb !== Yb) throw Error("SafeStyle is not meant to be built directly");
    this.Zc = "";
    this.Aa = !0;
  };
Zb.prototype.ya = function () {
  return this.Zc;
};
Zb.prototype.toString = function () {
  return this.Zc.toString();
};
new Zb();
var $b = {},
  ac = function () {
    if ($b !== $b) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Yc = "";
    this.Aa = !0;
  };
ac.prototype.toString = function () {
  return this.Yc.toString();
};
ac.prototype.ya = function () {
  return this.Yc;
};
new ac();
var bc, cc;
a: {
  for (var dc = ["CLOSURE_FLAGS"], ec = n, fc = 0; fc < dc.length; fc++)
    if (((ec = ec[dc[fc]]), null == ec)) {
      cc = null;
      break a;
    }
  cc = ec;
}
var gc = cc && cc[610401301];
bc = null != gc ? gc : !1;
function hc() {
  var a = n.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var ic,
  jc = n.navigator;
ic = jc ? jc.userAgentData || null : null;
function kc(a) {
  return bc
    ? ic
      ? ic.brands.some(function (b) {
          return (b = b.brand) && Ub(b, a);
        })
      : !1
    : !1;
}
function t(a) {
  return Ub(hc(), a);
}
function lc() {
  return bc ? !!ic && 0 < ic.brands.length : !1;
}
function mc() {
  return t("Firefox") || t("FxiOS");
}
function nc() {
  return lc() ? kc("Chromium") : ((t("Chrome") || t("CriOS")) && !(lc() ? 0 : t("Edge"))) || t("Silk");
}
var oc = {},
  pc = function (a, b) {
    if (b !== oc) throw Error("SafeHtml is not meant to be built directly");
    this.ac = a;
    this.Aa = !0;
  };
pc.prototype.ya = function () {
  return this.ac.toString();
};
pc.prototype.toString = function () {
  return this.ac.toString();
};
var qc = function (a) {
    if (a instanceof pc && a.constructor === pc) return a.ac;
    La("expected object of type SafeHtml, got '" + a + "' of type " + wa(a));
    return "type_error:SafeHtml";
  },
  sc = function (a) {
    a instanceof pc ||
      ((a = "object" == typeof a && a.Aa ? a.ya() : String(a)),
      Tb.test(a) &&
        (-1 != a.indexOf("&") && (a = a.replace(Nb, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Ob, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Pb, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Qb, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(Rb, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(Sb, "&#0;"))),
      (a = rc(a)));
    return a;
  },
  rc = function (a) {
    var b = Bb();
    a = b ? b.createHTML(a) : a;
    return new pc(a, oc);
  },
  tc = new pc((n.trustedTypes && n.trustedTypes.emptyHTML) || "", oc);
var uc = (function (a) {
  var b = !1,
    c;
  return function () {
    b || ((c = a()), (b = !0));
    return c;
  };
})(function () {
  if ("undefined" === typeof document) return !1;
  var a = document.createElement("div"),
    b = document.createElement("div");
  b.appendChild(document.createElement("div"));
  a.appendChild(b);
  if (!a.firstChild) return !1;
  b = a.firstChild.firstChild;
  a.innerHTML = qc(tc);
  return !b.parentElement;
});
var v = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  vc = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a;
  },
  wc = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  xc = function (a, b) {
    if (!Number.isFinite(a)) return String(a);
    a = String(a);
    var c = a.indexOf(".");
    -1 === c && (c = a.length);
    var d = "-" === a[0] ? "-" : "";
    d && (a = a.substring(1));
    return d + wc("0", Math.max(0, b - c)) + a;
  };
var yc = function (a) {
    if (a.za && "function" == typeof a.za) return a.za();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (xa(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return ub(a);
  },
  zc = function (a) {
    if (a.xa && "function" == typeof a.xa) return a.xa();
    if (!a.za || "function" != typeof a.za) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (xa(a) || "string" === typeof a) {
          var b = [];
          a = a.length;
          for (var c = 0; c < a; c++) b.push(c);
          return b;
        }
        b = [];
        c = 0;
        for (var d in a) b[c++] = d;
        return b;
      }
    }
  },
  Ac = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (xa(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = zc(a), e = yc(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  };
var Bc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  Cc = function (a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  },
  Dc = /#|$/,
  Ec = function (a, b) {
    var c = a.search(Dc);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f) if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)) break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  };
var Fc = function (a) {
  this.U = this.Ea = this.da = "";
  this.Ma = null;
  this.va = this.o = "";
  this.Z = this.Zd = !1;
  if (a instanceof Fc) {
    this.Z = a.Z;
    Gc(this, a.da);
    var b = a.Ea;
    Hc(this);
    this.Ea = b;
    b = a.U;
    Hc(this);
    this.U = b;
    Ic(this, a.Ma);
    b = a.o;
    Hc(this);
    this.o = b;
    Jc(this, a.j.clone());
    a = a.va;
    Hc(this);
    this.va = a;
  } else
    a && (b = String(a).match(Bc))
      ? ((this.Z = !1),
        Gc(this, b[1] || "", !0),
        (a = b[2] || ""),
        Hc(this),
        (this.Ea = Kc(a)),
        (a = b[3] || ""),
        Hc(this),
        (this.U = Kc(a, !0)),
        Ic(this, b[4]),
        (a = b[5] || ""),
        Hc(this),
        (this.o = Kc(a, !0)),
        Jc(this, b[6] || "", !0),
        (a = b[7] || ""),
        Hc(this),
        (this.va = Kc(a)))
      : ((this.Z = !1), (this.j = new Lc(null, this.Z)));
};
Fc.prototype.toString = function () {
  var a = [],
    b = this.da;
  b && a.push(Mc(b, Nc, !0), ":");
  var c = this.U;
  if (c || "file" == b)
    a.push("//"),
      (b = this.Ea) && a.push(Mc(b, Nc, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.Ma),
      null != c && a.push(":", String(c));
  if ((c = this.o)) this.U && "/" != c.charAt(0) && a.push("/"), a.push(Mc(c, "/" == c.charAt(0) ? Oc : Pc, !0));
  (c = this.j.toString()) && a.push("?", c);
  (c = this.va) && a.push("#", Mc(c, Qc));
  return a.join("");
};
Fc.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.da;
  c ? Gc(b, a.da) : (c = !!a.Ea);
  if (c) {
    var d = a.Ea;
    Hc(b);
    b.Ea = d;
  } else c = !!a.U;
  c ? ((d = a.U), Hc(b), (b.U = d)) : (c = null != a.Ma);
  d = a.o;
  if (c) Ic(b, a.Ma);
  else if ((c = !!a.o)) {
    if ("/" != d.charAt(0))
      if (this.U && !this.o) d = "/" + d;
      else {
        var e = b.o.lastIndexOf("/");
        -1 != e && (d = b.o.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (Ub(e, "./") || Ub(e, "/.")) {
      d = 0 == e.lastIndexOf("/", 0);
      e = e.split("/");
      for (var f = [], g = 0; g < e.length; ) {
        var h = e[g++];
        "." == h
          ? d && g == e.length && f.push("")
          : ".." == h
          ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && g == e.length && f.push(""))
          : (f.push(h), (d = !0));
      }
      d = f.join("/");
    } else d = e;
  }
  c ? (Hc(b), (b.o = d)) : (c = "" !== a.j.toString());
  c ? Jc(b, a.j.clone()) : (c = !!a.va);
  c && ((a = a.va), Hc(b), (b.va = a));
  return b;
};
Fc.prototype.clone = function () {
  return new Fc(this);
};
var Gc = function (a, b, c) {
    Hc(a);
    a.da = c ? Kc(b, !0) : b;
    a.da && (a.da = a.da.replace(/:$/, ""));
  },
  Ic = function (a, b) {
    Hc(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.Ma = b;
    } else a.Ma = null;
  },
  Jc = function (a, b, c) {
    Hc(a);
    b instanceof Lc ? ((a.j = b), a.j.ic(a.Z)) : (c || (b = Mc(b, Rc)), (a.j = new Lc(b, a.Z)));
  };
Fc.prototype.getQuery = function () {
  return this.j.toString();
};
var Sc = function (a, b) {
  return a.j.get(b);
};
Fc.prototype.removeParameter = function (a) {
  Hc(this);
  this.j.remove(a);
  return this;
};
var Hc = function (a) {
  if (a.Zd) throw Error("Tried to modify a read-only Uri");
};
Fc.prototype.ic = function (a) {
  this.Z = a;
  this.j && this.j.ic(a);
};
var w = function (a) {
    return a instanceof Fc ? a.clone() : new Fc(a);
  },
  Kc = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Mc = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, Tc)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  Tc = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  Nc = /[#\/\?@]/g,
  Pc = /[#\?:]/g,
  Oc = /[#\?]/g,
  Rc = /[#\?@]/g,
  Qc = /#/g,
  Lc = function (a, b) {
    this.O = this.v = null;
    this.X = a || null;
    this.Z = !!b;
  },
  Uc = function (a) {
    a.v ||
      ((a.v = new Map()),
      (a.O = 0),
      a.X &&
        Cc(a.X, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
Lc.prototype.add = function (a, b) {
  Uc(this);
  this.X = null;
  a = Vc(this, a);
  var c = this.v.get(a);
  c || this.v.set(a, (c = []));
  c.push(b);
  this.O = Ma(this.O) + 1;
  return this;
};
Lc.prototype.remove = function (a) {
  Uc(this);
  a = Vc(this, a);
  return this.v.has(a) ? ((this.X = null), (this.O = Ma(this.O) - this.v.get(a).length), this.v.delete(a)) : !1;
};
Lc.prototype.clear = function () {
  this.v = this.X = null;
  this.O = 0;
};
Lc.prototype.Nc = function () {
  Uc(this);
  return 0 == this.O;
};
var Wc = function (a, b) {
  Uc(a);
  b = Vc(a, b);
  return a.v.has(b);
};
l = Lc.prototype;
l.forEach = function (a, b) {
  Uc(this);
  this.v.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
l.xa = function () {
  Uc(this);
  for (var a = Array.from(this.v.values()), b = Array.from(this.v.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
l.za = function (a) {
  Uc(this);
  var b = [];
  if ("string" === typeof a) Wc(this, a) && (b = b.concat(this.v.get(Vc(this, a))));
  else {
    a = Array.from(this.v.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
l.set = function (a, b) {
  Uc(this);
  this.X = null;
  a = Vc(this, a);
  Wc(this, a) && (this.O = Ma(this.O) - this.v.get(a).length);
  this.v.set(a, [b]);
  this.O = Ma(this.O) + 1;
  return this;
};
l.get = function (a, b) {
  if (!a) return b;
  a = this.za(a);
  return 0 < a.length ? String(a[0]) : b;
};
l.toString = function () {
  if (this.X) return this.X;
  if (!this.v) return "";
  for (var a = [], b = Array.from(this.v.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.za(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.X = a.join("&"));
};
l.clone = function () {
  var a = new Lc();
  a.X = this.X;
  this.v && ((a.v = new Map(this.v)), (a.O = this.O));
  return a;
};
var Vc = function (a, b) {
  b = String(b);
  a.Z && (b = b.toLowerCase());
  return b;
};
Lc.prototype.ic = function (a) {
  a &&
    !this.Z &&
    (Uc(this),
    (this.X = null),
    this.v.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c),
        this.remove(d),
        0 < b.length && ((this.X = null), this.v.set(Vc(this, d), db(b)), (this.O = Ma(this.O) + b.length)));
    }, this));
  this.Z = a;
};
Lc.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Ac(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var Xc =
  Object.freeze ||
  function (a) {
    return a;
  };
var Yc = function (a, b) {
  this.name = a;
  this.value = b;
};
Yc.prototype.toString = function () {
  return this.name;
};
var Zc = new Yc("OFF", Infinity),
  $c = new Yc("WARNING", 900),
  ad = new Yc("CONFIG", 700),
  bd = function () {
    this.bb = 0;
    this.clear();
  },
  cd;
bd.prototype.clear = function () {
  this.zc = Array(this.bb);
  this.Dc = -1;
  this.Oc = !1;
};
var dd = function (a, b, c) {
  this.reset(a || Zc, b, c, void 0, void 0);
};
dd.prototype.reset = function (a, b) {
  this.de = b;
};
dd.prototype.getMessage = function () {
  return this.de;
};
var ed = function (a, b) {
    this.level = null;
    this.Vd = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.be = {
      Ob: function () {
        return a;
      }
    };
  },
  fd = function (a) {
    if (a.level) return a.level;
    if (a.parent) return fd(a.parent);
    La("Root logger has no level set.");
    return Zc;
  };
ed.prototype.publish = function (a) {
  for (var b = this; b; )
    b.Vd.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var gd = function () {
    this.entries = {};
    var a = new ed("");
    a.level = ad;
    this.entries[""] = a;
  },
  hd,
  id = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = id(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new ed(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  jd = function () {
    hd || (hd = new gd());
    return hd;
  };
var _gaq = _gaq || [];
var ld = function (a, b) {
    var c = [];
    do {
      var d = kd(a.exec, a, b);
      d && (d.shift(), eb(c, d));
    } while (0 < a.lastIndex);
    return c;
  },
  kd = function (a, b, c) {
    if (c) return a.call(b, c);
  },
  nd = function (a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
      return a;
    }
  },
  od = function (a) {
    return "true" == a || "1" == a || "!0" == a;
  },
  pd = function (a, b) {
    return kd(a.exec, a, b);
  },
  sd = function (a, b) {
    b = b.replace(/([=+-])\s*\n\s*/g, "$1 ");
    b = qd(b);
    b = rd(b, [";", ",", "\n"], !0);
    if (
      (b = ab(b, function (d) {
        return (c = x(new RegExp("^(?:var |(?:\\w*\\.)*)" + a + "\\s*="), d));
      }))
    ) {
      var c = y(/[^=]*(?:=\s*[a-zA-Z_$][a-zA-Z0-9_$]*)*\s*=\s*(.*)/, b.replace(/\s*\n\s*/g, " "));
      if ("string" === typeof c) return c;
    }
    return !1;
  },
  td = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = ld(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (b.some(td)) return !0;
    for (; x(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return a.split(/\s*,\s*/).some(p(x, /^\s*[_a-zA-Z][_a-zA-Z0-9]*\s*=.*/g));
  },
  vd = function (a) {
    return ud(a).some(function (b) {
      return x(/['"]\[.*\]['"]/, b.split(/\s*:\s*/)[1]);
    });
  },
  wd = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = ld(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if ((b = b.some(wd))) return !0;
    for (; x(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return b || (a.match(/:/g) || []).length - 1 > (a.match(/,/g) || []).length;
  },
  xd = function (a) {
    return !ud(a).every(function (b) {
      return Ub(b, ",")
        ? (b = (b = pd(/\[(.*)\]/, b)) && 1 < b.length ? b[1] : null)
          ? ud(b).every(function (c) {
              return !Ub(c, ",");
            })
          : !1
        : !0;
    });
  },
  y = function (a, b, c) {
    c = void 0 !== c ? c : 1;
    return (a = kd(a.exec, a, b)) ? (a.length > c ? a[c] : !0) : !1;
  },
  yd = function (a, b) {
    for (var c, d = a.length, e = 0; e < d; e++) {
      var f = y(a[e], b);
      if ("string" === typeof f) void 0 === c && (c = f);
      else if ("string" !== typeof f && !f) return !1;
    }
    return void 0 !== c ? c : !0;
  },
  zd = function (a, b) {
    for (var c = a.length, d = 0; d < c; d++) {
      var e = y(a[d], b);
      if ("string" === typeof e || e) return e;
    }
    return !1;
  },
  z = function (a, b) {
    return y(a, b.url);
  },
  Ad = function (a, b) {
    b || (b = { lastIndex: -1, fd: rd(a, [";", ",", "\n"], !0), text: "" });
    b.lastIndex++;
    return b.lastIndex < b.fd.length ? ((b.text = b.fd[b.lastIndex]), b) : null;
  },
  Bd = function (a, b) {
    return !a.every(function (c) {
      return x(c, b);
    });
  },
  rd = function (a, b, c) {
    var d = b || [";", ","];
    b = b ? 0 : 1;
    var e = { "(": ")", "{": "}", "[": "]" },
      f = void 0,
      g = !1,
      h = [],
      k = [],
      m = 0;
    a = Mb(Cd(a));
    var u = a.length,
      E;
    for (E = 0; E < u; E++) {
      var W = a.charAt(E);
      g
        ? (g = !1)
        : "\\" == W
        ? (g = !0)
        : f
        ? W == f && (f = void 0)
        : '"' == W || "'" == W
        ? (f = W)
        : "(" == W || "{" == W || "[" == W
        ? h.push(e[W])
        : h.length
        ? W == h[h.length - 1] && h.pop()
        : bb(d, W)
        ? ((m = Mb(a.substring(m, E + b))), (!m && c) || k.push(m.replace(" *\n *", "")), (m = E + 1))
        : E == m && A[a.charCodeAt(E)] && (m = E + 1);
    }
    m = Mb(a.substring(m, E));
    (!m && c) || k.push(m.replace(" *\n *", ""));
    return k;
  },
  Dd = function (a) {
    a = y(/\{(.*)\}/, a) || a;
    return ud(a).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = y(/"(.*)"/, c) || c;
      c = y(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
  },
  Cd = function (a, b) {
    var c = void 0,
      d = !1,
      e = -1;
    b = b || 0;
    for (var f = a.length, g = b; g < f; g++) {
      var h = a.charAt(g),
        k = g + 1 < f ? a.charAt(g + 1) : "";
      if (d) d = !1;
      else if (0 <= e) {
        if ("*" == h && "/" == k) return a.substring(b, e) + Cd(a, g + 2);
      } else if ("\\" == h) d = !0;
      else if (c) h == c && (c = void 0);
      else if ("/" == h) {
        if ("/" == k) return (c = a.indexOf("\n", g)), -1 == c ? a.substring(b, g) : a.substring(b, g) + Cd(a, c);
        "*" == k && (e = g++);
      } else if ('"' == h || "'" == h) c = h;
    }
    return a.substring(b);
  },
  qd = function (a) {
    a = a
      .replace(/\t/g, "    ")
      .replace(/^ *\n+/, "")
      .split("\n");
    var b = 20,
      c = a.length,
      d;
    for (d = 0; d < c && 0 < b; d++)
      if ((a[d].replace(/[ ]+(\n?)/, "$1"), a[d] && 0 != a[d].indexOf("..."))) {
        var e = /^([ ]*)/.exec(a[d]);
        e = e ? e[1].length : 0;
        b = b < e ? b : e;
      }
    if (0 < b) for (d = 0, c = a.length; d < c; d++) 0 != a[d].indexOf("...") && (a[d] = a[d].substring(b));
    return a.join("\n");
  },
  ud = function (a) {
    return rd(a, [","]);
  },
  Ed = function (a, b) {
    var c = a.split("%s");
    if (1 == c.length) return a;
    for (var d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; ) d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  x = function (a, b) {
    return kd(a.test, a, b);
  },
  Fd = p(x, /^[-+]?(?:\d*\.)?\d+$/),
  Gd = p(x, /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/),
  Hd = function (a, b) {
    return x(a, b.url);
  },
  A = [];
A[9] = !0;
A[10] = !0;
A[11] = !0;
A[12] = !0;
A[13] = !0;
A[32] = !0;
A[133] = !0;
A[160] = !0;
A[5760] = !0;
A[6158] = !0;
A[8192] = !0;
A[8193] = !0;
A[8194] = !0;
A[8195] = !0;
A[8196] = !0;
A[8197] = !0;
A[8198] = !0;
A[8199] = !0;
A[8200] = !0;
A[8201] = !0;
A[8202] = !0;
A[8203] = !0;
A[8232] = !0;
A[8233] = !0;
A[8239] = !0;
A[8287] = !0;
A[12288] = !0;
var Id = {},
  Jd = {},
  Kd = {},
  Ld = {
    se: "AutoOpenRecordings",
    xe: "categories",
    Ae: "CheckPermissionsLater",
    Ne: "DefaultLevelOfDetail",
    Me: "DebugIssues",
    Ue: "IgnoreExternalScripts",
    Xe: "FollowLinks",
    Ze: "gaDebug",
    af: "GtaPage",
    lf: "hideRecordingSuggestion",
    mf: "IgnoreExternalScripts",
    vf: "isInSupportTeam",
    yf: "last-checked-for-support-team",
    Gf: "LoggedIn",
    If: "LogInfoTemplate",
    Jf: "LogSources",
    Hf: "LoggingEnabled",
    Lf: "ManualChecks",
    Mf: "ManualScriptParsing",
    ag: "NgModeDisabled",
    lg: "PatternProfiling",
    rg: "RecordingTab",
    Dg: "GooglePublisherConsole",
    Eg: "ShowIgnoredIssues",
    Fg: "ShowWelcomeScreen",
    eh: "WhiteListedDomains",
    Xg: "ValidateAllPages"
  },
  Md = { DefaultLevelOfDetail: "DefaultLevel" },
  Nd = ["ValidateAllPages"],
  Od = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  Ud = function () {
    var a = Pd,
      b = Qd;
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (c) {
        Rd(c);
        c["Options initialized to default values."] || Sd();
        a();
      }),
      Td(b));
  },
  C = function (a) {
    var b = Id[a];
    if (!b && Md[a] && Id[Md[a]]) {
      var c = Md[a];
      b = void 0 !== Id[c] ? Id[c] : null;
      B(a, b);
      void 0 !== chrome && void 0 !== chrome.storage
        ? (delete Kd[c], chrome.storage.local.remove(c, void 0), chrome.storage.sync.remove(c, void 0))
        : (delete Kd[Id[c]], delete Id[c]);
    }
    return b;
  },
  Vd = function () {
    var a = C("LogSources");
    void 0 !== a && Pa(a);
    return a || [];
  },
  Wd = function (a) {
    a = C(a);
    void 0 !== a && Qa(a);
    return !!a;
  },
  Xd = function (a, b) {
    a = C(a);
    void 0 !== a && Qa("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  Td = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      for (var c in b) Id[c] = b[c].newValue;
      "function" === typeof a && a();
    });
  },
  Zd = function () {
    var a = {};
    sb(Ld, function (b) {
      void 0 !== C(b) && (a[b] = C(b));
    });
    Sd();
    Yd(a);
  },
  Sd = function () {
    var a = C("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    Id = {};
    a = {
      gaDebug: "off",
      categories: a,
      GtaPage: "PROD",
      ManualChecks: !0,
      ShowWelcomeScreen: !0,
      "Options initialized to default values.": !0,
      LogInfoTemplate: "%timestamp|[TabId: %tabid]|[%source]|[%url]"
    };
    void 0 !== chrome && void 0 !== chrome.storage && chrome.storage.local.set(a);
    Yd(a);
  },
  $d = function (a, b, c) {
    sb(b, function (d, e) {
      null != d && (Jd[e] ? r(typeof d == Jd[e], "Unexpected type " + typeof d + " expected " + Jd[e]) : (Jd[e] = typeof d));
    });
    Rd(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (Zd(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  Rd = function (a, b) {
    a && xb(Id, a);
    b && b();
  },
  ae = void 0 !== chrome && void 0 !== chrome.storage ? p($d, chrome.storage.local) : Rd,
  Yd = void 0 !== chrome && void 0 !== chrome.storage ? p($d, chrome.storage.sync) : Rd,
  B = function (a, b) {
    delete Kd[a];
    Yd(yb(a, b), void 0);
  },
  be = function () {
    return Xd("GtaPage", "PROD");
  };
Fa("tvt.Settings.getGataPageVersion", be);
Fa("tvt.Settings.setGataPageVersion", function (a) {
  B("GtaPage", a || "PROD");
});
var ce = function () {
  var a = be();
  return Od[a];
};
Fa("tvt.Settings.getGataRedirectUrl", ce);
var de = function () {
  return ce() + "internal/";
};
Fa("tvt.Settings.getGataInternalRedirectUrl", de);
Fa("tvt.Settings.getGataLoginCheckUrl", function () {
  return ce() + "logincheck";
});
Fa("tvt.Settings.getGataInternalLoginUrl", function () {
  return de() + "login";
});
Fa("tvt.Settings.getGataLoginUrl", function () {
  return ce() + "login";
});
Fa("tvt.Settings.toggleGaDebugSettings", function () {
  var a = {};
  switch (C("gaDebug")) {
    case "on":
      a.gaDebug = "auto";
      break;
    case "auto":
      a.gaDebug = "off";
      break;
    case "off":
      a.gaDebug = "on";
      break;
    default:
      a.gaDebug = "off";
  }
  ae(a);
});
var ee = function (a, b) {
  this.name = a;
  this.url = b;
};
sb(
  { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] },
  function (a) {
    for (var b = 0; a[b]; b++);
  }
);
var fe = function (a, b, c, d) {
    this.issueClass = b.issueClass;
    this.type = b.type;
    this.buckets = [];
    this.category = b.category;
    this.label = d || c || b.label || "";
    this.text = Ed(b.text || "", c || this.label);
    this.infoLink = "string" === typeof b.infoLink ? Ed(b.infoLink, this.label) : void 0;
    this.value = b.value || void 0;
    this.valueFormat = b.format || b.valueFormat || "";
    this.relatedIssues = [];
    c = b.relatedIssues || [];
    for (var e = 0; (d = c[e]); e++) new fe(this, d, void 0, void 0);
    this.view = b.view || a.view;
    this.hint = b.hint || null;
    this.otherRelatedIssues = [];
    this.template = b.template || b;
    this.templateMarker = b.templateMarker || b.text;
    this.parent = a;
    this.deduped = !!b.deduped;
    this.deleted = b.deleted || null;
    this.ignored = !!b.ignored;
    this.id = b.id;
    this.hasUrlParamLookupTable = this.hasPopout = !1;
    null != a.relatedIssues && (ge(this, a.relatedIssues.length), a.relatedIssues.push(this));
  },
  he = ["Error", "Warning", "Suggestion"],
  ie = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  ke = function (a, b) {
    b = new fe(ie, b, void 0, void 0);
    var c = {};
    je(c, a, !0);
    je(c, b, !0);
    new fe(a, b, void 0, void 0);
  },
  me = function (a, b) {
    for (var c, d = 0; (c = b[d]); d++) {
      var e = le(a, c.text, c.label);
      e ? me(e, c.relatedIssues) : ke(a, c);
    }
  },
  ne = function (a, b, c) {
    if ((b = D(b, a))) if ((a = D(c, a))) a.label = b.label;
  },
  je = function (a, b, c) {
    if (!b.deleted && !b.deduped && "Bucket" != b.type) {
      if ("Tag" != b.type) {
        var d = a[b.type];
        d || ((d = {}), (a[b.type] = d));
        var e = d[b.text];
        e || ((e = {}), (d[b.text] = e));
        (d = e[b.label]) ? c && ((b.deduped = !0), me(d, b.relatedIssues)) : (e[b.label] = b);
      }
      for (d = 0; (e = b.relatedIssues[d]); d++) je(a, e, c);
    }
  },
  pe = function (a, b, c) {
    var d = !1;
    Xa(a, function (e) {
      e.text == b ? ((d = !0), oe(a, e, "Deleted because of text match.")) : c || (d = pe(e.relatedIssues, b) || d);
    });
    return d;
  },
  qe = function (a, b) {
    var c = !1;
    Xa(a, function (d) {
      0 <= b.indexOf(d.text) ? ((c = !0), oe(a, d, "Deleted because of text match.")) : (c = qe(d.relatedIssues, b) || c);
    });
    return c;
  },
  re = function (a, b, c) {
    var d = !1;
    Xa(a.relatedIssues, function (e) {
      e.text == b && e.label == c ? ((d = !0), oe(a.relatedIssues, e, "Deleted because of text and label match.")) : (d = re(e, b, c) || d);
    });
    return d;
  },
  se = function (a, b) {
    var c = !1;
    Xa(a.relatedIssues, function (d) {
      0 <= d.text.indexOf(b) ? ((c = !0), oe(a.relatedIssues, d, "Deleted because of text prefix match" + b)) : (c = se(d, b) || c);
    });
    return c;
  },
  te = function (a, b, c) {
    if (Array.isArray(a))
      for (var d = 0, e, f = 0; (e = a[f]); f++) {
        var g = (c ? c + "." : "") + d++;
        console.log(
          g +
            " " +
            e.type +
            "[" +
            e.view +
            "]: " +
            e.issueClass +
            ": " +
            e.text +
            (e.label && " -- " + vc(e.label.replace("\n", ""), 25)) +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && te(e.relatedIssues, b, g);
      }
    else te(a.relatedIssues, b, c);
  };
Fa("module$contents$tvt$Issue_Issue.dump", te);
var ue = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && bb(b, c.category);
    });
  },
  ve = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.category;
    });
  },
  we = function (a, b, c) {
    return c && !Array.isArray(c)
      ? we(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          return d.deleted ? !1 : c ? xe(d.relatedIssues, b, c) : ye(d.relatedIssues, b);
        })
      : we(a.relatedIssues, b, c);
  },
  ze = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.issueClass;
    });
  },
  Ae = function (a, b, c) {
    return c && !Array.isArray(c)
      ? Ae(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          if (d.deleted) return !1;
          d = D(d.relatedIssues, b);
          return !!d && !d.deleted && !d.deduped && (void 0 === c || 0 <= c.indexOf(d.label));
        })
      : Ae(a.relatedIssues, b, c);
  },
  Be = function (a, b) {
    return "string" === typeof b
      ? Be(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.label);
        })
      : Be(a.relatedIssues, b);
  },
  Ce = function (a, b) {
    return "string" === typeof b
      ? Ce(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.text);
        })
      : Ce(a.relatedIssues, b);
  },
  Ee = function (a) {
    return a.filter(function (b) {
      return !b.deleted && !b.deduped && "Tag" == b.type && De(b.category);
    });
  },
  Fe = function (a, b) {
    "string" === typeof b && (b = [b]);
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && "Tag" == c.type && -1 != b.indexOf(c.category);
    });
  },
  Ge = function (a, b, c) {
    for (var d = [], e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (b(e) ? d.push(e) : e.type != c && ((e = Ge(e.relatedIssues, b, c)), 0 == d.length ? (d = e) : eb(d, e)));
    return d;
  },
  He = function (a, b) {
    return Ge(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  Ie = function (a) {
    return He(a, "HTTP response code indicates tag failed to fire: Status 404").filter(function (b) {
      return "404" == b.label;
    });
  },
  Je = function (a, b) {
    return Ge(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.type;
    });
  },
  Ke = function (a) {
    return Ge(
      Array.isArray(a) ? a : a.relatedIssues,
      function (b) {
        return bb(he, b.type);
      },
      "Bucket"
    );
  },
  Me = function (a) {
    return Le(Array.isArray(a) ? a : a.relatedIssues, function (b) {
      return "Google Ads Remarketing Tag" == b.category;
    });
  },
  Ne = function (a, b) {
    return Le(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.issueClass;
    });
  },
  Oe = function (a, b) {
    return Le(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  D = function (a, b) {
    return Le(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  le = function (a, b, c) {
    a = He(a, b);
    c = Be(a, c);
    return 0 < c.length ? c[0] : null;
  },
  Pe = function (a, b) {
    if (Array.isArray(a)) {
      var c = ab(a, function (d) {
        return !d.deleted && !d.deduped && 0 <= d.text.indexOf(b);
      });
      c ||
        a.some(function (d) {
          c = !d.deleted && !d.deduped && Pe(d.relatedIssues, b);
          return !!c;
        });
      return c;
    }
    return Pe(a.relatedIssues, b);
  },
  Le = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = Le(d.relatedIssues, b, c)))) return d;
    return null;
  },
  Qe = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) !d.deleted && !d.deduped && 0 <= b.indexOf(d.category || "") && c(d);
  },
  Re = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) d.deleted || d.deduped || b != d.category || c(d);
  },
  ge = function (a, b) {
    if (a && a && a.category != ie.category) {
      var c = "";
      switch (a.type) {
        case "Bucket":
          c = [a.parent.id, a.text].join("-");
          break;
        case "Tag":
          "Bucket" != a.parent.type && (c = [(a.category || "").substring(0, 10), (a.label || "").substring(0, 64)].join("-"));
        default:
          c = c || [a.parent.id, b + 1].join("-");
      }
      a.id = c.replace(/\s/g, "");
      a.relatedIssues.forEach(ge);
    }
  },
  xe = function (a, b, c) {
    return a.some(function (d) {
      return !d.deleted && !d.deduped && b == d.text && 0 <= c.indexOf(d.label);
    });
  },
  ye = function (a, b) {
    return a.some(function (c) {
      return !c.deleted && !c.deduped && b == c.text;
    });
  },
  Te = function (a) {
    return Se(a) ? a : Te(a.parent);
  },
  Ue = function (a) {
    return a.some(function (b) {
      return 1 < Be(a, b.label).length;
    });
  },
  Ve = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return Ve(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  De = function (a) {
    var b;
    (b = null == a) || (((a = Xd(a)) && "Default" != a) || (a = Xd("DefaultLevelOfDetail", "Default")), (b = !bb(["Hidden", "Off"], a)));
    return b;
  },
  Se = function (a) {
    a.parent ? ((a = a.parent), (a = !a || a.category == ie.category)) : (a = !0);
    return a;
  },
  oe = function (a, b, c) {
    cb(a, b);
    b.deleted || (b.deleted = c);
    b.relatedIssues = [];
  };
var We = [],
  Xe = function (a) {
    r(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "Ba";
    if (a.Ba && a.hasOwnProperty(b)) return a.Ba;
    We.push(a);
    var c = new a();
    a.Ba = c;
    r(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
var Ye = {
    sd: ["BC", "AD"],
    rd: ["Before Christ", "Anno Domini"],
    zd: "JFMAMJJASOND".split(""),
    Fd: "JFMAMJJASOND".split(""),
    td: "January February March April May June July August September October November December".split(" "),
    Ed: "January February March April May June July August September October November December".split(" "),
    Bd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Hd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Ld: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Jd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Dd: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Id: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Yf: "SMTWTFS".split(""),
    Gd: "SMTWTFS".split(""),
    Cd: ["Q1", "Q2", "Q3", "Q4"],
    Ad: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    od: ["AM", "PM"],
    Ke: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    Pg: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    Le: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    rc: 6,
    dh: [5, 6],
    sc: 5
  },
  Ze = Ye;
Ze = Ye;
var $e = function (a, b, c, d, e) {
  a = new Date(a, b, c);
  e = e || 0;
  return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
};
var af = function () {},
  cf = function (a) {
    if ("number" == typeof a) {
      var b = new af();
      b.cd = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", xc(c, 2));
        c = d.join("");
      }
      b.nc = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = bf(a);
      b.oc = [c, c];
      b.Da = { Kg: a, tc: a };
      b.wb = [];
      return b;
    }
    b = new af();
    b.nc = a.id;
    b.cd = -a.std_offset;
    b.oc = a.names;
    b.Da = a.names_ext;
    b.wb = a.transitions;
    return b;
  },
  bf = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(xc(Math.floor(a / 60) % 100, 2), ":", xc(a % 60, 2));
    return b.join("");
  },
  df = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.wb.length && b >= a.wb[c]; ) c += 2;
    return 0 == c ? 0 : a.wb[c - 1];
  },
  ef = function (a, b) {
    a = a.cd - df(a, b);
    return -1440 === a ? 0 : a;
  };
var hf = function () {
    r(!0, "Pattern must be defined");
    r(void 0 !== Ze, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.qb = [];
    this.B = Ze;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (ff && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < gf.length; ++c) {
        var d = a.match(gf[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.qb.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  gf = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  jf = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
hf.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - ef(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.qb.length; ++f) {
    var g = this.qb[f].text;
    1 == this.qb[f].type ? c.push(kf(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var lf = function (a, b) {
    b = String(b);
    a = a.B || Ze;
    if (void 0 !== a.Md) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.Md + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  ff = !1,
  mf = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  nf = function (a, b) {
    mf(b);
    b = jf(b);
    return a.B.od[12 <= b && 24 > b ? 1 : 0];
  },
  kf = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.B.rd[c] : a.B.sd[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), lf(a, xc(c, g));
      case "Y":
        return (
          (c = new Date($e(d.getFullYear(), d.getMonth(), d.getDate(), a.B.sc, a.B.rc)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          lf(a, xc(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.B.zd[c];
            break a;
          case 4:
            g = a.B.td[c];
            break a;
          case 3:
            g = a.B.Bd[c];
            break a;
          default:
            g = lf(a, xc(c + 1, g));
        }
        return g;
      case "k":
        return mf(e), lf(a, xc(jf(e) || 24, g));
      case "S":
        return lf(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? xc(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.B.Ld[c] : a.B.Dd[c];
      case "a":
        return nf(a, e);
      case "b":
        return nf(a, e);
      case "B":
        return nf(a, e);
      case "h":
        return mf(e), lf(a, xc(jf(e) % 12 || 12, g));
      case "K":
        return mf(e), lf(a, xc(jf(e) % 12, g));
      case "H":
        return mf(e), lf(a, xc(jf(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.B.Gd[c];
            break a;
          case 4:
            g = a.B.Jd[c];
            break a;
          case 3:
            g = a.B.Id[c];
            break a;
          default:
            g = lf(a, xc(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.B.Fd[c];
            break a;
          case 4:
            g = a.B.Ed[c];
            break a;
          case 3:
            g = a.B.Hd[c];
            break a;
          default:
            g = lf(a, xc(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.B.Cd[c] : a.B.Ad[c];
      case "d":
        return lf(a, xc(d.getDate(), g));
      case "m":
        return mf(e), lf(a, xc(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return mf(e), lf(a, xc(e.getSeconds(), g));
      case "v":
        return (f || cf(c.getTimezoneOffset())).nc;
      case "V":
        return (
          (a = f || cf(c.getTimezoneOffset())),
          2 >= g
            ? a.nc
            : 0 < df(a, c)
            ? void 0 !== a.Da.qd
              ? a.Da.qd
              : a.Da.DST_GENERIC_LOCATION
            : void 0 !== a.Da.tc
            ? a.Da.tc
            : a.Da.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = $e(e.getFullYear(), e.getMonth(), e.getDate(), a.B.sc, a.B.rc)),
          lf(a, xc(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || cf(c.getTimezoneOffset())), 4 > g ? a.oc[0 < df(a, c) ? 2 : 0] : a.oc[0 < df(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || cf(c.getTimezoneOffset())),
          4 > g
            ? ((g = -ef(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(xc(Math.floor(g / 60) % 100, 2), xc(g % 60, 2)),
              (g = a.join("")))
            : (g = lf(a, bf(ef(b, c)))),
          g
        );
      default:
        return "";
    }
  };
var of = function () {
    this.gd = "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    this.Qd = [];
    this.Yd = [];
  },
  pf = function () {
    var a = Xe(of);
    a.gd = Xd("LogInfoTemplate") || "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    a.Yd = a.gd.split("|");
    a.Qd = Vd();
    Wd("LoggingEnabled");
  };
new hf();
var qf = {
  te: { id: "background-page", name: "Background Page" },
  He: { id: "content-script", name: "Content Script" },
  qf: { id: "issues", name: "Issue processing" },
  Uf: { id: "monitor-status-info", name: "Monitor Status Info" },
  POPUP: { id: "popup", name: "Popup" },
  qg: { id: "recording-page", name: "Recording Page" }
};
Wd("LoggingEnabled");
var rf = function (a) {
  this.Eb = a;
  this.index = -1;
};
rf.prototype.current = function () {
  r(0 <= this.index);
  return this.index < this.Eb.length ? this.Eb[this.index] : null;
};
var sf = function (a) {
  rf.call(this, Object.keys(a));
  this.object = a;
};
ra(sf, rf);
sf.prototype.currentValue = function () {
  var a = this.current();
  return null == a ? null : this.object[a];
};
var uf = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.Ca = tf(e);
    this.issueClass = 0;
    this.la = g || [];
    this.l = !1;
    this.view = this.hint = this.Ia = null;
    this.context = {};
  },
  tf = function (a) {
    return a
      ? function (b, c) {
          return a.call(this, c);
        }
      : mb;
  },
  vf = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  wf = function (a, b, c, d, e, f) {
    return new uf(a, b, c, void 0, d, e, f);
  },
  xf = p(wf, "Debug", null),
  F = p(wf, "Error", null),
  yf = p(wf, "Fine", null),
  zf = p(wf, "Hidden", null),
  G = p(wf, "Info", null),
  Af = p(wf, "Suggestion", null),
  Bf = p(wf, "Warning", null),
  Cf = G("Implemented in %s");
G("Includes %s");
var Df = function (a) {
    return F(a, function (b) {
      return !Fd(b.label);
    });
  },
  Ef = function (a, b, c) {
    b = Ua(c || b, fe);
    return a == b.label;
  },
  Ff = function (a, b, c) {
    b = Ua(c || b, fe);
    return y(a, b.label);
  },
  Hf = function (a) {
    var b = "${" + a.text + "}",
      c = "not set" == a.label ? "" : a.label;
    Se(a) || Gf(Ua(a.parent, fe), b, c);
    a.relatedIssues &&
      a.relatedIssues.forEach(function (d) {
        Hf(d);
      });
  },
  Gf = function (a, b, c) {
    a.label = a.label.replace(b, c);
    a.text = a.text.replace(b, c);
    Se(a) || Gf(Ua(a.parent, fe), b, c);
  },
  If = function (a) {
    return p(function (b) {
      return a(b.label);
    });
  };
uf.prototype.Nc = function (a) {
  return 0 == a.label.length;
};
uf.prototype.i = function (a) {
  for (var b = 0; b < arguments.length; b++) eb(this.la, arguments[b]);
  return this;
};
var Kf = function (a, b, c) {
  b.category != a.category &&
    ((b.text = a.text),
    (b.category = a.category),
    (b.type = a.type),
    (b.infoLink = a.infoLink),
    b.relatedIssues && ((a = Ua(b, fe)), Hf(a), new fe(a, Jf, c, void 0)));
};
uf.prototype.xc = function (a) {
  a.category = this.category;
  a.infoLink = this.infoLink;
  return a;
};
uf.prototype.clear = function () {
  this.ua = null;
  this.context = {};
  this.l = !1;
};
uf.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.la.length && (a.la = vf(this.la));
  return a;
};
var Lf = function (a, b, c) {
  return new fe(b, a, c, void 0);
};
uf.prototype.otherwise = function (a) {
  this.Ia = a;
  return this;
};
uf.prototype.setClass = function (a) {
  this.issueClass = a;
  this.la.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var H = function (a, b) {
    a.format = b;
    return a;
  },
  Mf = function (a, b) {
    a.Ca = b;
    return a;
  },
  I = function (a, b) {
    a.hint = b;
    return a;
  },
  J = function (a, b) {
    a.infoLink = b;
    return a;
  },
  Nf = function (a, b) {
    a.infoLink = "#" + b;
    return a;
  },
  K = function (a, b) {
    a.la = b;
    return a;
  },
  Of = function (a, b) {
    a.type = b;
    return a;
  },
  L = function (a, b) {
    a.view = b;
    return a;
  },
  Jf = xf("__altered");
var Pf = function (a, b, c, d, e, f, g, h) {
  uf.call(this, a, b, d, e, void 0, g, h);
  this.issueClass = 2;
  this.kd = "string" === typeof c ? [c] : c;
  this.Ca = f || mb;
};
q(Pf, uf);
var Qf = function (a, b, c, d, e, f) {
    return new Pf(a, b, void 0, c, void 0, d, e, f);
  },
  Rf = p(Qf, "Tag", null),
  Sf = p(Qf, "Bucket", null),
  Tf = p(Qf, "Debug", null),
  Uf = p(Qf, "Error", null),
  Vf = p(Qf, "Fine", null),
  Wf = p(Qf, "Hidden", null),
  M = p(Qf, "Info", null),
  Xf = p(Qf, "Warning", null),
  Yf = p(Qf, "Suggestion", null),
  Zf = I(
    Uf("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  ),
  $f = L(
    I(
      Af("Non-standard implementation"),
      "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
    ),
    ""
  ),
  ag = I(
    Uf(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  cg = I(
    Yf("Using non-secure code on secure page", function (a) {
      var b = N(a),
        c = bg(a);
      return "http" == b.da && "https" == c.da ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  dg = function (a, b, c, d, e, f) {
    var g = c || mb;
    c = function (h, k) {
      return k.label;
    };
    try {
      "function" === typeof e && (c = e);
    } catch (h) {
      console.log("Error while creating buckets " + a);
    }
    return K(
      H(
        Mf(Sf(a), function (h, k) {
          return g.call(this, h, k) && "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [H(K(Mf(Rf(b), "boolean" === typeof e && e ? g : c), d || []), void 0 !== f ? f : "group_status")]
    );
  },
  O = function (a, b, c, d, e, f, g) {
    return new Pf("Tag", a, b, c, d, e, f, g);
  },
  eg = function (a, b) {
    return Vf(a, function (c) {
      return w(c.url).j.get(b);
    });
  },
  fg = function (a, b) {
    return M(a, function (c) {
      c = N(c).j.get(b);
      return "string" === typeof c ? c : !1;
    });
  },
  hg = function (a, b) {
    return L(
      M(
        "URL",
        function (c) {
          try {
            var d = N(c).j.xa();
            if ((a && !gg(d, a)) || (b && gg(d, b))) return !1;
          } catch (e) {}
          this.text = c.redirectedFrom ? "Redirected URL" : "URL";
          return c.url;
        },
        "link_expandable",
        [
          H(
            M("Post Data", function (c) {
              return c.postData;
            }),
            "value"
          ),
          cg,
          Nf(
            I(
              F("URL Encoding Error", function (c) {
                return Ub(c.label, "&amp;");
              }),
              'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
            ),
            "url_encoding"
          ),
          ag,
          Zf,
          Uf("Error while sending request: %s", function (c) {
            return void 0 !== c.error ? c.error : !1;
          }),
          Wf("Redirected to", function (c) {
            return c.redirectUrl;
          }),
          Wf("redirectedFrom", function (c) {
            return c.redirectedFrom;
          }),
          Tf("requestId", function (c) {
            return c.requestId;
          }),
          Uf("URL is not parsable.", function (c) {
            if (0 < c.url.indexOf("tiba=")) return !1;
            try {
              return !w(c.url).j.xa();
            } catch (d) {
              return !0;
            }
          })
        ]
      ),
      "URLs"
    );
  },
  gg = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !ab(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  },
  P = hg(),
  ig = function (a, b) {
    return Array.isArray(a.kd)
      ? a.kd.some(function (c) {
          return x(new RegExp(c), b);
        })
      : !0;
  },
  bg = function (a) {
    var b = a.documentUri;
    b || ((b = w(a.documentUrl)), (a.documentUri = b));
    return b;
  },
  N = function (a) {
    var b = a.uri;
    if (!b) {
      b = w(encodeURI(a.url));
      if (a.postData)
        try {
          Jc(b, a.postData, !0);
        } catch (c) {}
      a.uri = b;
    }
    return b;
  };
var jg,
  lg = function (a) {
    var b = kg;
    chrome.identity &&
      chrome.identity.getAuthToken(a, function (c) {
        chrome.runtime.lastError || !c ? b({ error: chrome.runtime.lastError }) : ((jg = c + ""), b({ error: 0, token: jg }));
      });
  };
var mg = function (a) {
  var b = a.j;
  if ((a = b.get("data")))
    try {
      a = decodeURIComponent(a);
    } catch (d) {}
  var c = (a ? a.toString().split(";") : []).filter(function (d) {
    return 0 < d.length;
  });
  b.xa().forEach(function (d) {
    0 == d.indexOf("data.") && c.push(d.substring(5) + "=" + escape(b.get(d) + ""));
  });
  return c.join(";");
};
var ng = function (a, b, c, d, e, f) {
  uf.call(this, a, b, c, d, void 0, f);
  this.Ca = e || mb;
  this.issueClass = 3;
};
q(ng, uf);
var og = function (a, b, c, d, e) {
    return new ng(a, b, c, d, e);
  },
  pg = function (a, b) {
    return new ng("Hidden", a, "Check only", void 0, b, void 0);
  },
  qg = function (a, b) {
    return pg(a, function (c, d) {
      b.call(this, c, d);
      return !1;
    });
  },
  rg = function (a, b) {
    for (var c = [], d = 1, e = arguments.length; d < e; d++) c.push(qg(a, arguments[d]));
    return c;
  },
  sg = p(og, "Warning", null);
var Q = document;
var tg = function (a, b, c, d, e, f, g, h) {
  uf.call(this, a, b, c, d, void 0, g, h);
  this.Ca = f || mb;
  this.issueClass = 1;
};
q(tg, uf);
var ug = function (a, b, c, d, e, f) {
    return new tg(a, b, c, void 0, void 0, d, e, f);
  },
  vg = p(ug, "Tag", null),
  wg = p(ug, "Bucket", null),
  R = p(ug, "Error", null),
  xg = p(ug, "Fine", null),
  yg = p(ug, "Group", null),
  zg = p(ug, "Hidden", null),
  Ag = p(ug, "Info", null),
  Bg = p(ug, "Warning", null),
  Cg = p(ug, "Suggestion", null),
  Dg = K(
    L(
      Cg("Tag is included in an iframe", function () {
        return self !== top;
      }),
      "Code Snippet"
    ),
    [
      L(
        Ag(
          "IFrame",
          function () {
            return self.location.href;
          },
          "linked"
        ),
        "IFrame"
      )
    ]
  ),
  Eg = Cg("Tag is included in an external script file", function (a) {
    return a.externalScript;
  }),
  Fg = L(
    xg(
      "Script source",
      function (a) {
        return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
      },
      "linked"
    ),
    "Code Snippet"
  ),
  Hg = function () {
    return L(
      xg(
        "HTML Snippet",
        function (a) {
          return Gg(this, a);
        },
        "snippet_html"
      ),
      "Code Snippet"
    ).i(
      xg("Included in an iframe", function () {
        try {
          return window.self != window.top;
        } catch (a) {
          return !0;
        }
      })
    );
  },
  Gg = function (a, b) {
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(Q.location.href);
    return b && b.outerHTML ? vc(b.outerHTML, 1e3) : "";
  },
  Ig = function (a, b, c) {
    var d = "",
      e = Q.location.href;
    c.externalScript &&
      ((d = "&line=" + c.textContent.substring(0, b).split("\n").length - 1), c.getAttribute && (e = c.getAttribute("src")));
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(e) + d;
    c = c.textContent;
    a = 500;
    d = b - 100;
    b = c;
    0 < d && ((b = c.substring(d)), (c = b.indexOf("\n")), 0 <= c && 100 > c && (b = b.substring(c)), (b = "..." + b), (a += 3));
    b.length > a && ((b = b.substring(0, a)), (c = b.lastIndexOf("\n")), 10 < c && (b = b.substring(0, c + 1)), (b += "..."));
    return qd(b);
  },
  Jg = J(
    L(
      I(
        F("No HTTP response detected"),
        "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
      ),
      ""
    ),
    "https://support.google.com/tagassistant/answer/3059154#http_response"
  ),
  Kg = function (a, b) {
    return b.label;
  },
  Lg = function (a, b, c, d) {
    return K(
      H(
        Mf(wg(a), function () {
          return !mb || "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [K(Mf(H(vg(b), "group_status"), d || Kg), c || [])]
    );
  },
  Mg = function (a, b, c, d, e) {
    return new tg("Tag", a, b, c, d, e, void 0, void 0);
  };
var Ng = function (a, b) {
  var c = ["No Google Analytics HTTP responses because opted out code detected."];
  D(b, "URL") &&
    b.forEach(function (d) {
      (4 == d.issueClass || (c && 0 <= c.indexOf(d.text))) && cb(a, d);
    });
};
var Og = function (a, b, c, d, e, f) {
  uf.call(this, a, b, c, d, void 0, f);
  this.Ca = e || this.Pd;
  this.issueClass = 8;
};
q(Og, uf);
Og.prototype.Pd = function (a) {
  if (a[this.text]) {
    try {
      this.context = JSON.parse(a[this.text]);
    } catch (b) {}
    return a[this.text];
  }
  this.context = null;
  return !1;
};
var Pg = function (a) {
  this.missingError = a;
};
var S = function (a, b) {
  this.priority = b;
  this.L = this.Sb = this.Kb = this.Ib = this.fa = null;
};
l = S.prototype;
l.Lb = function () {
  return [];
};
l.Nb = function () {
  if (null === this.fa) {
    var a = {};
    this.fa = this.H()
      .filter(function (b) {
        return a[b.category] ? !1 : (a[b.category] = !0);
      })
      .map(function (b) {
        var c = Na(b.category);
        b = Na(b.infoLink);
        return new ee(c, b);
      });
  }
  return this.fa;
};
l.qa = function () {
  return [];
};
l.isActive = function () {
  return this.Nb().some(function (a) {
    return De(a.name);
  });
};
l.list = function (a) {
  a = a || [];
  eb(a, this.H(), this.K(), this.qa(), this.Lb());
  return a;
};
l.Qc = function (a, b) {
  return a.text == b.text && a.label == b.label;
};
var Qg = function (a, b, c) {
  var d = Je(b, "Bucket");
  return 0 < d.length
    ? ((c = Je(c, "Bucket")),
      c.forEach(function (e) {
        var f = ab(d, function (g) {
          return e.text == g.text;
        });
        f
          ? e.relatedIssues.forEach(function (g) {
              var h = f.relatedIssues.filter(function (k) {
                return this.Qc(k, g);
              }, this);
              0 < h.length ? ke(h[0], g) : new fe(f, g, void 0, void 0);
            }, this)
          : new fe(b, e, void 0, void 0);
      }, a),
      0 < c.length)
    : !1;
};
S.prototype.Wb = function (a, b) {
  7 == b.issueClass
    ? b.relatedIssues.forEach(Ea(this.Wb, this, a))
    : (pe(b.relatedIssues, $f.text), pe(a.relatedIssues, Jg.text), Qg(this, a, b) || ke(a, b));
};
var Rg = function () {
    this.xb = [];
    this.fa = null;
  },
  Sg =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  Tg = {
    "ad.doubleclick.net": !0,
    "apis.google.com": !0,
    "csi.gstatic.com": !0,
    "pagead.googlesyndication.com": !0,
    "pagead2.googlesyndication.com": !0,
    "stats.g.doubleclick.net": !0,
    "survey.g.doubleclick.net": !0,
    "www.google-analytics.com": !0,
    "www.googleadservices.com": !0
  };
K(
  H(
    G("Script", function (a) {
      if (null == this.l) this.l = 0;
      else if ((this.l++, this.l == Q.scripts.length)) return (this.l = null), !1;
      var b = Q.scripts[this.l];
      this.infoLink = b.src;
      if ((a = void 0 !== b.src && "" != b.src && !Oe(a.relatedIssues, b.src))) {
        a = Xe(Rg);
        b = b.src;
        var c;
        (c = Ug(b)) || ((c = w(b)), (c = !!Tg[c.U]));
        a = !(c || Vg(b) || Wg(a, b));
      }
      return a;
    }),
    "link_expandable_with_path"
  ),
  [
    Af("Found <script> tag with empty src attribute.", function (a) {
      return a.label == Q.location.href;
    })
  ]
);
var Xg = function (a, b, c, d, e, f) {
    c.forEach(function (g) {
      var h = g.category || (f && f.category) || "",
        k = g.infoLink || (f && f.infoLink);
      k && 0 == k.indexOf("#") && f && (k = f.infoLink + g.infoLink + "");
      k = new uf(g.type, h, g.text, k);
      if (("" == b || h == b) && bb(a, g.type)) {
        var m = e[k.text];
        m
          ? ab(m, function (u) {
              return u.category == h;
            }) || m.push(k)
          : (ib(d, k.text), (e[k.text] = [k]));
      }
      Xg(a, b, g.la, d, e, k);
    });
  },
  Zg = function (a) {
    Yg(Xe(Rg), a);
  },
  Yg = function (a, b) {
    ib(a.xb, b, function (c, d) {
      return c.priority > d.priority ? 1 : -1;
    });
  },
  $g = function () {
    var a = Xe(Rg);
    if (!a.fa) {
      a.fa = [];
      for (var b, c = 0; (b = a.xb[c]); c++) eb(a.fa, b.Nb());
      a.fa.sort(function (d, e) {
        return d.name.localeCompare(e.name);
      });
    }
    return a.fa;
  },
  ah = function (a, b, c) {
    for (var d = [], e, f = 0; (e = a.xb[f]); f++) e.list(d);
    a = [];
    e = {};
    Xg(b, c, d, a, e);
    return { keys: a, map: e };
  },
  Ug = function (a) {
    return Sg.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  Vg = function (a) {
    return !(
      !C("ManualScriptParsing") ||
      !(C("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  Wg = function (a, b) {
    return a.xb.some(function (c) {
      return c.L && c.isActive()
        ? c.L.some(function (d) {
            return x(new RegExp(d), b);
          })
        : !1;
    });
  };
var bh = function () {
    S.call(this, "Google Ads Conversion Tracking", 1);
  },
  ch;
q(bh, S);
var dh = { pd: "Google Ads Conversion Tracking", ba: "Google Ads Remarketing Tag" },
  eh = v("%s ${%s}", "Google Ads Conversion Tracking", "Conversion ID"),
  fh = v("%s ${%s}", "Google Ads Remarketing Tag", "Conversion ID"),
  gh = new uf(
    "Tag",
    "Google Ads Conversion Tracking",
    eh,
    "https://support.google.com/tagassistant/answer/2947038",
    void 0,
    void 0,
    void 0
  ),
  hh = new uf("Tag", "Google Ads Remarketing Tag", fh, "https://support.google.com/tagassistant/answer/2978937", void 0, void 0, void 0),
  ih = { pd: gh, ba: hh },
  jh = {},
  kh = [];
sb(
  {
    edu_pid: { type: 3, required: !0 },
    edu_plocid: { type: 3 },
    edu_pagetype: { type: 12, values: "home searchresults program lead complete other".split(" "), F: !0 },
    edu_totalvalue: { type: 2, F: !0 },
    flight_destid: { type: 3, required: !0 },
    flight_originid: { type: 3 },
    flight_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), F: !0 },
    flight_startdate: { type: 11, F: !0 },
    flight_enddate: { type: 11 },
    flight_totalvalue: { type: 2, F: !0 },
    hotel_hotel_id: { type: 3, required: !0 },
    hotel_pagetype: { type: 12, values: "home searchresults property cart purchase cancel other".split(" "), F: !0 },
    hotel_checkindate: { type: 11 },
    hotel_checkoutdate: { type: 11 },
    hotel_totalvalue: { type: 2, F: !0 },
    hrental_id: { type: 3 },
    hrental_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), F: !0 },
    hrental_startdate: { type: 11 },
    hrental_enddate: { type: 11 },
    hrental_totalvalue: { type: 2, F: !0 },
    job_id: { type: 1, required: !0 },
    job_locid: { type: 3 },
    job_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), F: !0 },
    job_totalvalue: { type: 2, F: !0 },
    local_id: { type: 3, required: !0 },
    local_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), F: !0 },
    local_totalvalue: { type: 2, F: !0 },
    listing_id: { type: 3, required: !0 },
    listing_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), F: !0 },
    listing_totalvalue: { type: 2 },
    ecomm_prodid: { type: 19, required: !0 },
    ecomm_category: { type: 1 },
    ecomm_pagetype: { type: 12, values: "home searchresults category product cart puchase other".split(" "), F: !0 },
    ecomm_totalvalue: { type: 2, F: !0 },
    travel_destid: { type: 3, required: !0 },
    travel_originid: { type: 3 },
    travel_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), F: !0 },
    travel_startdate: { type: 11 },
    travel_enddate: { type: 11 },
    travel_totalvalue: { type: 2, F: !0 },
    dynx_itemid: { type: 3, required: !0 },
    dynx_itemid2: { type: 3 },
    dynx_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), F: !0 },
    dynx_totalvalue: { type: 2, F: !0 }
  },
  function (a, b) {
    kh.push(b.toLowerCase());
  }
);
bh.prototype.Nb = function () {
  ch ||
    ((ch = []),
    sb(ih, function (a) {
      ch.push(new ee(a.category, a.infoLink));
    }));
  return ch;
};
var lh = v("<%s> tag found.", "iframe"),
  mh = v("<%s> tag found.", "img"),
  nh = v("<%s> tag found.", "noscript"),
  oh = v("<%s> tag found.", "script"),
  ph = { iframe: lh, img: mh, noscript: nh, script: oh },
  qh = v(" in the <%s> tag", "iframe"),
  rh = v(" in the <%s> tag", "img"),
  sh = v(" in the <%s> tag", "noscript"),
  th = v(" in the <%s> tag", "script"),
  uh = { iframe: qh, img: rh, noscript: sh, script: th },
  vh = function (a) {
    var b = yd([/(?:viewthrough)?conversion\/([^/?]*)/, /^((?![?]ai=)(.|\n))*$/], a);
    return "string" === typeof b
      ? (0 == b.length && (b = "undefined"), (a = y(RegExp("[&?;#]label=([^&?#]*)"), a)), "string" === typeof a ? b + ";" + a : b)
      : b;
  },
  wh = function (a) {
    a = a.label.split(";")[0];
    this.format = "copyable";
    return "undefined" == a ? "not set" : a;
  },
  xh = function (a) {
    a = y(/[^;]*;(.*)/, a.label);
    return "boolean" === typeof a || "undefined" == a ? "not set" : a;
  },
  yh = sg("Conversion value missing in <noscript> tag."),
  zh = F("Mismatch of conversion ID in <script> tag and <%s> tag."),
  Ah = F("Mismatch of conversion label in <script> tag and <%s> tag."),
  Bh = L(sg("Missing <noscript> tag."), "Code Snippet");
bh.prototype.K = function () {
  return [
    O(
      "Google Ads Remarketing Tag",
      ["www.google.[a-z]*/ads/user-lists/"],
      fh,
      hh.infoLink || "",
      function (a) {
        var b = N(a);
        return (a = y(/\/ads\/user-lists\/(\d*)\//, b.o)) ? ((b = Sc(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [
        J(G("Conversion ID", wh)),
        H(G("Conversion Label", xh), "copyable"),
        Wf("Troubleshoot", function (a) {
          return (a = a.redirectedFrom) && 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/")
            ? ((a = a.concat("&deb=c2&srr=n")),
              a.hasOwnProperty("fmt") || (a = a.concat("&fmt=1")),
              (this.infoLink = a = a.replace("script=0", "script=1")),
              "redirect url")
            : !1;
        }),
        P
      ]
    ),
    O(
      "Google Ads Conversion Tracking",
      ["www.google.[a-z]*/ads/conversion/"],
      eh,
      gh.infoLink || "",
      function (a) {
        var b = N(a);
        return (a = y(/\/ads\/conversion\/(\d*)\//, b.o)) ? ((b = Sc(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [J(G("Conversion ID", wh)), H(G("Conversion Label", xh), "copyable"), P]
    ),
    O(
      "Google Ads Conversion Tracking",
      ["googleadservices.com/pagead/", "googleads.g.doubleclick.net/pagead/"],
      eh,
      gh.infoLink || "",
      function (a) {
        Kf(gh, this, "Reset.");
        try {
          var b = N(a),
            c = b.j.get("data") || "";
          var d = !(Wc(b.j, "label") || Wc(b.j, "amp;label")) || !!c.match(/aw_remarketing_only(%3D|=)true/g);
        } catch (e) {
          d = !1;
        }
        if (d) Kf(hh, this, "URL detected as smart pixel.");
        else if (((d = N(a)), Kb(d.o, "wcm"))) return !1;
        return vh(a.url);
      },
      "",
      [
        J(G("Conversion ID", wh)),
        H(G("Conversion Label", xh), "copyable"),
        Wf("validation anchor", function (a) {
          a = N(a);
          return !!mg(a);
        }).i(Ch()),
        fg("Conversion Value", "value"),
        K(fg("Conversion Currency", "currency_code"), [
          Nf(
            Af("Conversion Currency should be exactly 3 characters.", function (a) {
              return 3 !== a.label.length;
            }),
            "value_not_set"
          ),
          Nf(
            Af("Conversion Currency should consists of only letters.", function (a) {
              return !y(/\w{3}/, a.label);
            }),
            "value_not_set"
          ),
          Nf(
            Af("Conversion Currency is not a standard currency.", function (a) {
              rb();
              return !(a.label in qb);
            }),
            "value_not_set"
          )
        ]),
        L(
          Xf("Ref/URL GET param did not match with actual URL.", function (a) {
            var b = N(a);
            a = bg(a);
            if (void 0 === a) return !1;
            a = a.U;
            var c = Sc(b, "url");
            if (void 0 !== c && a == w(decodeURIComponent(c)).U) return !1;
            b = Sc(b, "ref");
            return void 0 !== b && a == w(decodeURIComponent(b)).U ? !1 : void 0 !== c || void 0 !== b;
          }),
          "URLs"
        ),
        hg(null, "data")
      ]
    ),
    K(
      O(
        "Website Call Metrics",
        ["www.gstatic.com/wcm/loader.js"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          return !!a.url;
        }
      ),
      [G("Script loaded."), F("Could not find _googWcmGet call.")]
    ),
    K(
      O(
        "Website Call Metrics",
        ["googleadservices.com/pagead/"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          a = N(a);
          return Kb(a.o, "wcm");
        }
      ),
      [
        dg("Requests", "Request", mb, [
          K(M("Conversion ID", p(z, /pagead\/conversion\/([^/]*)\/wcm/)), [
            F("Conversion ID malformed", function (a) {
              return !x(/^\d+$/, a.label);
            })
          ]),
          fg("Conversion Label", "cl").i(
            F("Conversion label not set", function (a) {
              return "100" == a.label;
            })
          ),
          fg("Conversion Value", "cv"),
          fg("Fallback", "fb"),
          P
        ])
      ]
    )
  ];
};
var Dh = function () {
    return [
      F(
        "Conversion tag parameters object not correctly formed.",
        If(function (a) {
          a = a.replace(/\s*\n\s*/g, "");
          return !(x(/\{.*\}$/, a) || x(/[a-zA-Z_$][a-zA-Z_$0-9.]+$/, a));
        })
      ),
      F("Keys and values must be separated using colons.", If(td)),
      F("Missing commas in between key-value element pairs.", If(wd)),
      K(
        H(
          G("Conversion tag parameters", function (a) {
            a = a.label.replace(/\s*\n\s*/g, "");
            return y(/^\s*\{?(.+?)\}?\s*$/m, a);
          }),
          "esc_json"
        ),
        [
          Af("Pass multiple values in an array.", If(xd)),
          F("Value passed as array has misplaced quotes.", If(vd)),
          Bf("Tag Paramater object could not be parsed."),
          F("Attribute key contains space or non-ASCII characters.", function (a) {
            return ud(a.label).some(function (b) {
              b = b.split(":");
              return 1 < b.length && !y(/^["|']?\s*[a-zA-Z0-9_]+\s*["|']?$/g, b[0]);
            });
          })
        ]
      )
    ];
  },
  Eh = function (a, b) {
    b = mg(b);
    if (!b) return !1;
    var c = b.indexOf("google_tag_params=");
    if (0 > c) return !1;
    b = sd("google_tag_params", "var " + b.substring(c).replace(/\\,/g, ","));
    if (!b) return !1;
    a.text = "google_tag_params";
    return b;
  },
  Fh = function (a) {
    a = a
      ? M(
          "Conversion tag parameters",
          function (b) {
            b = N(b);
            return Eh(this, b);
          },
          "esc_json"
        )
      : Ag(
          "Conversion tag parameters",
          function (b) {
            b = b.getAttribute("src") || b.textContent;
            return "string" === typeof b && Eh(this, w(b));
          },
          "esc_json"
        );
    K(J(a, "https://developers.google.com/adwords-remarketing-tag/parameters"), Dh()).i([zf("Custom parameter")]);
    return a;
  },
  Ch = function () {
    var a = K(
      M(
        "Data",
        function (b) {
          b = N(b);
          return mg(b);
        },
        "map"
      ),
      [
        F("Multiple product IDs need to be stored in an array.", function (b) {
          return x(/prodid=[^;]*\\,/, b.label);
        })
      ]
    );
    return dg(
      "Requests",
      "Request",
      function (b) {
        b = N(b);
        return !!mg(b);
      },
      [a, Fh(!0), hg("data").i(Wf("data anchor"))]
    );
  };
bh.prototype.Qc = function (a, b) {
  return a.label == b.label && (a.category == gh.category || a.category == hh.category || "Website Call Metrics" == a.category);
};
var Gh = function (a, b) {
    return [
      K(J(G("Conversion ID", wh)), [
        Nf(
          F("Conversion ID not set" + a + ".", function (c) {
            return c && "not set" == c.label ? "not set" : !c || ("1234567890" != c.label && 0 != c.label) ? !1 : "invalid";
          }),
          "id_not_set"
        ).otherwise(
          F("Conversion ID should not have quotations around it.", function (c) {
            var d = c.parent.label.split(";"),
              e = y(/['"](\d*)['"]/, d[0]);
            return "string" === typeof e ? ((d[0] = e), (c.label = e), (c.parent.label = d.join(";")), !0) : !1;
          }).otherwise(
            F("Conversion ID malformed" + a + ": %s.", function (c) {
              var d = c.parent.label.split(";"),
                e = y(/[^0-9]*([0-9]*)/, d[0]);
              if (d[0] != e) {
                var f = d[0];
                d[0] = "string" === typeof e && "" != e ? e : "undefined";
                c.parent.label = d.join(";");
                return f;
              }
              return !1;
            })
          )
        )
      ]),
      K(H(G("Conversion Label", xh), "copyable"), [
        Nf(
          F("Conversion label not set" + a + ".", function (c) {
            return !c || ("not set" != c.label && "null" != c.label) ? !1 : "not set";
          }),
          "label_not_set"
        )
      ]),
      K(
        Ag("Conversion Value" + a, function (c, d) {
          return b && "Google Ads Conversion Tracking" == d.category ? b.call(this, c, d) || "not set" : !1;
        }),
        [
          Nf(
            Af("Conversion value not set" + a + ".", function (c) {
              return "not set" == c.label;
            }),
            "value_not_set"
          ).otherwise(
            Nf(
              F("Conversion Value should not be prefixed with currency.", function (c) {
                rb();
                return c.label.substring(0, 3) in qb;
              }),
              "value_not_set"
            ).otherwise(
              Nf(
                F("Dynamic conversion value in wrong format" + a + ".", function (c) {
                  return !Fd(c.label);
                }),
                "dynamic_value"
              )
            )
          )
        ]
      ),
      Jg
    ];
  },
  Hh = function (a) {
    var b = "noscript" == a ? "text()" : "@src";
    return K(
      Mg(
        "Google Ads Conversion Tracking",
        eh,
        gh.infoLink || "",
        v('//%s[contains(%s, "%s") or contains(%s, "%s")]', a, b, "googleadservices.com/pagead/", b, "googleads.g.doubleclick.net/pagead/"),
        function (c) {
          Kf(gh, this, "Default");
          c = c.getAttribute("src") || c.textContent;
          x(/[?&]data(?:\.[a-zA-Z0-9_]+)?=/, c) && Kf(hh, this, "data param in DOM src");
          return vh(c);
        }
      ),
      Gh(uh[a], function (c) {
        c = c.getAttribute("src") || c.textContent;
        return y(RegExp("[&?;#]value=([^&?#]*)"), c);
      })
    ).i([
      L(
        Ag(
          ph[a],
          function (c) {
            return Gg(this, c);
          },
          "snippet_html"
        ),
        "Code Snippet"
      ),
      Fh(!1),
      L(
        Cg("Update to script based tracking.", function () {
          return "i" == a[0];
        }),
        "Code Snippet"
      )
    ]);
  },
  Ih = function () {
    var a = /google_conversion_id\s*=\s*(?:[a-zA-Z._]*\s*=\s*)?([^;,]*)/g,
      b = K(
        Mg("Google Ads Conversion Tracking", eh, gh.infoLink || "", "//script", function (c) {
          var d = x(/google_conversion/i, c.textContent) && pd(a, c.textContent);
          this.l = a.lastIndex;
          if (!d) return !1;
          var e = "" == d[1] ? "undefined" : d[1];
          var f = f || "";
          c = c.textContent
            .substring(d.index)
            .replace(/\\\\/g, "__TA_BACKSLASH__")
            .replace(/\\'/g, "__TA_SINGLE_QUOTE__")
            .replace(/\\"/g, "__TA_DOUBLE_QUOTE__");
          d = y(RegExp("(?:^|[; \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*\\'([^\\']*)\\'\\s*(?:[;,\n]|$)", f), c);
          "string" !== typeof d &&
            (d = y(RegExp('(?:^|[;, \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*"([^"]*)"\\s*(?:[;,\n]|$)', f), c));
          f = d =
            d &&
            d
              .replace(/__TA_BACKSLASH__/g, "\\\\")
              .replace(/__TA_SINGLE_QUOTE__/g, "\\'")
              .replace(/__TA_DOUBLE_QUOTE__/g, '\\"');
          "string" === typeof f && (e = e + ";" + f);
          return e;
        }),
        Gh("", function (c, d) {
          var e = d.label.split(";");
          e = 1 < e.length ? e[1] : "";
          "not set" == e && (e = "");
          return zd(
            [
              new RegExp(e + "(?:[^}])*google_conversion_value\\s*=\\s*([^;,}\\s]*)"),
              new RegExp("google_conversion_value\\s*=\\s*([^;,}\\s]*)(?:.|\\n)*?" + d.label.split(";")[1])
            ],
            c.textContent
          );
        })
      );
    b.i([
      L(
        zg("Remarketing Only Flag", function (c, d) {
          c = y(/google_remarketing_only\s*=\s*([a-z01!]+)/, c.textContent);
          "string" === typeof c && od(c) ? Kf(hh, d, "google_remarketing_only") : c && Kf(gh, d, "no remarketing marker in script");
          return c;
        }),
        "Code Snippet"
      ),
      L(
        xg("Code Template", function (c) {
          return 0 < c.textContent.indexOf("goog_report_conversion") ? "Call on-site" : !1;
        }),
        "Code Snippet"
      ),
      L(
        R("Missing conversion.js script.", function () {
          return !Za(Q.scripts, function (c) {
            return !!c.src && x(/[/]conversion(_async)?.js/, c.src);
          });
        }),
        "Code Snippet"
      ),
      L(
        Nf(
          R("Missing closing \x3c/script> tag.", function (c) {
            return !c.externalScript && yd([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//, /<script.*>/], c.textContent);
          }),
          "missing_closing"
        ),
        "Code Snippet"
      ),
      L(
        Nf(
          R("Incorrect script attribute.", function (c) {
            return !!c.getAttribute("language");
          }),
          "script_attribute"
        ),
        "Code Snippet"
      ),
      L(
        Nf(
          Bg("Missing CDATA comments.", function (c) {
            return (
              Bd([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//], c.textContent) &&
              Bd([/\/\/\s*<!\[CDATA\[/, /\/\/\s*]]\x3e/], c.textContent)
            );
          }),
          "cdata_comments"
        ),
        "Code Snippet"
      ),
      L(
        Nf(
          Cg("Missing line breaks may cause issues.", function (c) {
            c = c.textContent
              .replace(/[\t ]+/g, " ")
              .replace(/\s*\n\s*/g, "\n")
              .trim();
            return "string" === typeof c && 100 < c.length && c.split("\n").length < (Ub(c, "CDATA") ? 5 : 3);
          }),
          "line_break"
        ),
        "Code Snippet"
      ),
      L(
        Nf(
          R("Code found outside of <body> tag.", function (c) {
            if (!c.externalScript) {
              for (; (c = c.parentNode); ) if ("BODY" == c.tagName) return !1;
              return !0;
            }
            return !1;
          }),
          "body_tags"
        ),
        "Code Snippet"
      ).otherwise(
        L(
          Nf(
            Cg("Code should be placed directly above the closing <body> tag.", function (c) {
              return !c.externalScript && "BODY" != c.parentNode.tagName;
            }),
            "body_tags"
          ),
          "Code Snippet"
        )
      ),
      L(
        Ag(
          oh,
          function (c) {
            var d = pd(/google_conversion_id\s*=\s*([^;,]*)/im, c.textContent);
            return Ig(this, d.index, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      J(
        zg("Custom parameter name", function (c) {
          c = sd("google_custom_params", c.textContent);
          return "string" === typeof c && ((c = y(/(?:window\.)([a-zA-Z_$][a-zA-Z_$0-9]*)/, c)), "string" === typeof c)
            ? ((jh[c] =
                "google_tag_params" == c
                  ? new Pg()
                  : new Pg(
                      new Og(
                        "Error",
                        "Google Ads Remarketing Tag",
                        "Required variable %s not found. Please check the developer console for errors.",
                        this.infoLink
                      )
                    )),
              c)
            : !1;
        }),
        "https://developers.google.com/adwords-remarketing-tag/parameters"
      ).i(
        K(
          zg("Custom Parameters Snippet", function (c) {
            jh && !this.l && (this.l = new sf(jh));
            if (this.l) {
              var d = this.l;
              d.index++;
              this.l = d.index < d.Eb.length ? d : null;
            }
            return !!this.l && sd(this.l.current(), c.textContent);
          }),
          Dh()
        )
      ),
      zg("Report Conversion", function (c) {
        return y(/goog_report_conversion/, c.textContent);
      }),
      Dg,
      Eg,
      Fg
    ]);
    return b;
  };
bh.prototype.H = function () {
  return [
    Ih(),
    Hh("img"),
    Hh("iframe"),
    Hh("noscript"),
    Mg("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//body", function (a) {
      return x(/_googWcmGet/, a.getAttribute("onload"));
    }).i(
      Ag("Initialized onload."),
      L(
        xg(
          "Script",
          function (a) {
            return Gg(this, a.cloneNode(!1));
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      L(Bf("WCM loader script not detected."), "Code Snippet"),
      Jh,
      Kh
    ),
    Mg("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//script", function (a) {
      return "" != a.src ? x(/https?:\/\/www.gstatic.com\/wcm\/loader.js/, a.src) : x(/(_googWcmGet\s*\()/, a.textContent);
    }).i(
      xg("Script loaded.", function (a) {
        return "" != a.src;
      }).otherwise(Bf("WCM loader script not detected.")),
      L(
        xg(
          "Script",
          function (a) {
            var b = pd(/(_googWcmGet\s*\()/, a.textContent);
            return !!b && Ig(this, b.index, a);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      Jh,
      Kh
    )
  ];
};
var Kh = K(
    H(
      L(
        yf("gwcm", function () {
          for (var a = Q.cookie.split(/; */), b = a.length, c = 0; c < b; c++) {
            var d = a[c].split("=");
            if ("gwcm" == d[0]) return d[1];
          }
          return !1;
        }),
        "Cookies"
      ),
      "esc_json"
    ),
    [
      L(
        G("Conversion Number", function (a) {
          a = Dd(unescape(a.label));
          return (a = ab(a, function (b) {
            return "number" == b.key;
          }))
            ? ((this.text = "null" == a.value ? "Conversion number not set." : "Conversion Number"), "null" == a.value ? "" : a.value)
            : !1;
        }),
        "Metadata"
      ),
      L(
        G("Conversion Label", function (a) {
          a = Dd(unescape(a.label));
          a = ab(a, function (b) {
            return "clabel" == b.key;
          });
          return null != a ? y(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      ).i(
        F("Conversion label not set", function (a) {
          return "100" == a.label;
        })
      ),
      L(
        G("Conversion Value", function (a) {
          a = Dd(unescape(a.label));
          a = ab(a, function (b) {
            return "cvalue" == b.key;
          });
          return null != a ? y(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      )
    ]
  ).otherwise(yf("No Cookie information for Web Call Metrics.")),
  Jh = Ag("Element ID or class name", function (a) {
    a = a.getAttribute("onload") || a.textContent;
    return y(/_googWcmGet\s*\(\s*'([^']*)'/, a) || y(/_googWcmGet\s*\(\s*"([^"]*)"/, a);
  }).i(
    Bf("WCM Number element should not contain markup.", function (a) {
      if (Q.getElementById(a.label)) {
        a.text = "Element ID";
        a = Q.getElementById(a.label).children;
        for (var b, c = 0; (b = a[c]); c++) if (b.nodeType == Node.ELEMENT_NODE) return !0;
      } else if (Q.getElementsByClassName(a.label).length)
        for (a.text = "Class name", a = Q.getElementsByClassName(a.label), c = 0; (b = a[c]); c++)
          for (var d, e = 0; (d = b.children[e]); e++) {
            if (d.nodeType == Node.ELEMENT_NODE) return !0;
          }
      else a.text = "Element ID or class name";
      return !1;
    }),
    F("Element ID or class name contains illegal character.", function (a) {
      return y(/w/, a.label);
    }).otherwise(
      F("Element ID or class name not matched in the DOM.", function (a) {
        return Q.getElementById(a.label) || Q.getElementsByClassName(a.label).length ? !1 : !0;
      })
    ),
    F("Element ID used for multiple elements. Use the class name instead.", function (a) {
      return 1 < Q.querySelectorAll("#" + a.label).length;
    })
  ),
  Mh = function (a) {
    var b = ue(a, ["Website Call Metrics"]);
    if (1 < b.length) {
      var c = b.shift();
      b.forEach(function (f) {
        cb(a, f);
        me(c, f.relatedIssues);
      });
    }
    var d = ue(a, ub(dh)),
      e = d.filter(function (f) {
        return 0 == Ce(f, [mh, nh]);
      });
    ["iframe", "img", "noscript"].forEach(function (f) {
      var g = we(d, ph[f]);
      g.length &&
        e.forEach(function (h) {
          Be(g, [h.label]).forEach(function (k) {
            var m = Se(h);
            if ("Tag" == k.type && h != k && m) {
              m = D(k, "Conversion Value" + uh[f]);
              if (null != m) {
                var u = D(h, "Conversion Value");
                if (null != u && u.label != m.label) {
                  var E = parseFloat(u.label),
                    W = parseFloat(m.label);
                  "not set" == u.label || !isNaN(E) || isNaN(W) || x(/^\s*[$\u20ac\u00a2\u00a3]?\s*[0-9.]+/, u.label)
                    ? E == W ||
                      isNaN(E) ||
                      isNaN(W) ||
                      ((E = v("Conversion value mismatch between <script> and <%s> tag.", f)),
                      (Lf(F(E), m, m.label).otherRelatedIssues = [u.id]))
                    : ((u.label = m.label), se(u, "Dynamic conversion value in wrong format"));
                } else re(k, m.text, m.label);
              }
              qe(k.relatedIssues, [Jg.text, "Update to script based tracking.", "Requests"]);
              cb(a, k);
              Lh(h, k);
            }
          });
        });
    });
  },
  Lh = function (a, b) {
    [
      "Conversion ID malformed",
      "Conversion ID not set",
      "Conversion label not set",
      "Conversion value missing in <noscript> tag.",
      "Dynamic conversion value in wrong format"
    ].forEach(function (c) {
      Pe(a, c) && se(b, c);
    });
    ke(a, b);
  };
bh.prototype.Rc = function (a, b, c) {
  var d = ue(c, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]).filter(function (u) {
      return 1 == u.issueClass;
    }),
    e = d.filter(function (u) {
      return 0 == Ce(u, [mh, lh, nh]);
    });
  b = we(d, b);
  e = e.filter(function (u) {
    return 0 == Ae(u, nh).length;
  });
  for (var f = 0; (d = e[f]); f++) {
    var g = !1,
      h = void 0;
    if (0 < b.length) {
      var k = void 0;
      if ("undefined;undefined" == d.label) (h = b.slice(0, 1)[0]), (g = !0);
      else if (0 == d.label.indexOf("undefined;")) (k = Ae(b, "Conversion Label", d.label.split(";")[1])), (g = 0 != k.length);
      else if (0 < d.label.indexOf(";undefined") || 1 == d.label.split(";").length)
        (k = Ae(b, "Conversion ID", d.label.split(";")[0])), (g = 0 != k.length);
      k && 0 < k.length ? (h = k[0]) : h || f != e.length - b.length || (h = b[0]);
    }
    if (h) {
      if (g)
        (d.label = h.label),
          (g = D(d, "Conversion ID")),
          (g.label = d.label.split(";")[0]),
          se(g, "Conversion ID not set"),
          (D(d, "Conversion Label").label = xh(d));
      else {
        g = (k = h.label.split(";")[0] == d.label.split(";")[0]) ? "Conversion Label" : "Conversion ID";
        k = k ? Ah : zh;
        var m = D(d, g);
        k = new fe(m, k, a, "details");
        g = D(h.relatedIssues, g);
        k.otherRelatedIssues.push(g.id);
      }
      (g = Ne(h, 2)) ? (this.Wb(d, g), cb(h.relatedIssues, g)) : pe(h.relatedIssues, Jg.text);
      g = Lf(H(yg("<" + a + "> tag"), "group"), ie, "");
      Lh(g, h);
      Lh(d, g);
      cb(c, h);
    }
  }
};
var Nh = function (a) {
  Qe(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"], function (b) {
    1 != b.issueClass ||
      le(b, "Code Template", "Call on-site") ||
      D(b, nh) ||
      D(b, Eg.text) ||
      !D(b, oh) ||
      Pe(b, v(Cf.text, "")) ||
      new fe(b, Bh, void 0, void 0);
  });
};
bh.prototype.ce = function (a) {
  var b = ue(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]),
    c = Ae(b, $f.text);
  0 != c.length &&
    ((b = Ae(b, Jg.text)),
    0 != b.length &&
      (b
        .filter(function (d) {
          var e = y(/([0-9])+;[^ ]+/, d.label);
          return "string" === typeof e && ((e = Ae(c, "Conversion ID", e)), 0 < e.length)
            ? (cb(c, e[0]), cb(a, e[0]), Oh(this, d, e[0]), !0)
            : !1;
        }, this)
        .forEach(p(cb, b)),
      b.forEach(function (d) {
        if (!y(/([0-9])+;[^ ]+/, d.label) && 0 < c.length) {
          var e = c.pop();
          cb(a, e);
          Oh(this, d, e);
        }
      }, this)));
};
var Oh = function (a, b, c) {
    se(b, "Conversion ID malformed");
    se(b, "Conversion ID not set");
    se(b, "Conversion label not set");
    b.category = c.category;
    b.text = c.text;
    b.label = c.label;
    ne("Conversion ID", c, b);
    ne("Conversion Label", c, b);
    a.Wb(b, c);
  },
  Ph = function (a) {
    Re(a, "Google Ads Conversion Tracking", function (b) {
      if (!Pe(b, "Dynamic conversion value in wrong format")) {
        var c = D(b.relatedIssues, "Remarketing Only Flag");
        c && od(c.label)
          ? (Kf(hh, b, "Remarketing Only Flag true"), se(b, "Conversion Value"))
          : Me(b.relatedIssues) && (Kf(hh, b, "AWCT tag does have smart pixel child."), se(b, "Conversion Value"));
      }
    });
  },
  Qh = function (a) {
    Qe(a, ub(dh), function (b) {
      "Tag" == b.type && pe(b.relatedIssues, "Missing conversion.js script.");
    });
  },
  Rh = function (a) {
    Re(a, "Google Ads Remarketing Tag", function (b) {
      D(b, "Custom parameter") &&
        ((b = He(b, "Conversion tag parameters")),
        0 < b.length &&
          b.forEach(function (c) {
            pe(c.relatedIssues, "Tag Paramater object could not be parsed.");
            var d;
            if ((d = !Ve(c.relatedIssues, "Error", !0))) d = !Ve(c.relatedIssues, "Suggestion", !0);
            d && (c.deleted = "JS Variable found");
          }));
    });
  },
  Sh = function (a) {
    Re(a, "Google Ads Remarketing Tag", function (b) {
      re(b, "Conversion Label", "not set");
      se(b, "Conversion Value");
    });
  },
  Th = function (a) {
    Re(a, "Google Ads Conversion Tracking", function (b) {
      pe(b.relatedIssues, "Custom parameter name");
    });
  },
  Uh = function (a) {
    D(a, "Report Conversion") && (a = D(a, "No HTTP response detected")) && (a.type = "Info");
  };
bh.prototype.qa = function () {
  var a = [];
  eb(
    a,
    rg("Google Ads Conversion Tracking", Mh, Ea(this.Rc, this, "noscript", nh), Ea(this.Rc, this, "img", mh), Uh, Ea(this.ce, this), Ph),
    rg("Google Ads Remarketing Tag", Rh, Sh, Vh),
    rg("Google Ads Conversion Tracking", Qh, Nh, Th, Vh),
    qg("Website Call Metrics", function (b) {
      b = ve(b, "Website Call Metrics");
      b.length && D(b, "Script loaded.") && pe(b, "WCM loader script not detected.");
      b.length && Ne(b, 1) && pe(b, "Could not find _googWcmGet call.");
    })
  );
  return a;
};
var Vh = function (a) {
  a = ue(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]);
  if ((a = D(a, "No HTTP response detected")))
    a.infoLink =
      "Google Ads Remarketing Tag" == Te(a).category
        ? "https://support.google.com/tagassistant/answer/2978937#http_response"
        : "https://support.google.com/tagassistant/answer/2947038#http_response";
};
bh.prototype.Lb = function () {
  var a = vf([
      zh,
      Ah,
      Bh,
      F("Conversion value mismatch between <script> and <noscript> tag."),
      F("Conversion value mismatch between <script> and <img> tag.")
    ]),
    b = vf(a);
  a.forEach(gh.xc);
  b.forEach(hh.xc);
  var c = this.H();
  eb(c, this.K());
  var d = vf(c);
  d.forEach(function (e) {
    Kf(hh, e, "init");
  });
  eb(c, a, d, b, yh);
  return c;
};
Zg(new bh());
var Wh = function () {
  S.call(this, "Channel Intelligence", 99);
  this.W = "Channel Intelligence";
  this.L = ["channelintelligence.com/"];
  this.isActive = mb;
  this.H = kb([]);
};
ra(Wh, S);
Wh.prototype.K = function () {
  return [
    O(
      "Channel Intelligence",
      "channelintelligence.com/",
      "Channel Intelligence",
      "http://www.google.com/ads/channelintelligence/",
      p(z, /.channelintelligence\.com\/([^_]*)_landing.js/),
      "unchecked",
      [Xh, P]
    )
  ];
};
var Xh = H(
  G("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Zg(new Wh());
var Yh = function () {
  S.call(this, "Google Consumer Survey", 99);
};
ra(Yh, S);
Yh.prototype.qa = function () {
  return [];
};
Yh.prototype.K = function () {
  return [
    K(
      O(
        "Google Consumer Survey",
        "survey.g.doubleclick.net/survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        function (a) {
          return w(a.url).j.get("site");
        }
      ),
      [Zh, $f, P]
    ),
    K(
      O(
        "Website Satisfaction Survey",
        "survey.g.doubleclick.net/async_survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        function (a) {
          return w(a.url).j.get("site");
        }
      ),
      [Zh, $f, P]
    )
  ];
};
Yh.prototype.H = function () {
  return [
    K(
      Mg(
        "Google Consumer Survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        "//script",
        function (a) {
          var b = a.getAttribute("src");
          a = a.textContent;
          return !b && 510 > a.length && 0 < a.indexOf("//survey.g.doubleclick.net/survey?site=") && 0 < a.indexOf("document.write")
            ? y(/survey.g.doubleclick.net\/survey\?site=([^'">]*)/, a)
            : !1;
        }
      ),
      [
        Zh,
        Jg.clone(),
        L(
          xg(
            "HTML Snippet",
            function (a) {
              return Ig(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).i(
          R("Missing closing \x3c/script> tag.", function (a) {
            return y(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          Bg("Code should be added to <body> tag.", function (a) {
            return a.parentNode ? "BODY" != a.parentNode.nodeName : !1;
          })
        ),
        I(
          R("Premimum content section not found.", function () {
            return 0 == Q.getElementsByClassName("p402_premium").length;
          }),
          'Wrap your premium content. Use a div with a class named "p402_premium".'
        )
      ]
    ),
    K(
      Mg(
        "Website Satisfaction Survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        "//script",
        function (a) {
          return (a = a.getAttribute("src")) && 0 <= a.indexOf("survey.g.doubleclick.net/async_survey") ? w(a).j.get("site") : !1;
        }
      ),
      [
        Zh,
        Jg.clone(),
        L(
          xg(
            "HTML Snippet",
            function (a) {
              return Ig(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).i(
          R("Missing closing \x3c/script> tag.", function (a) {
            return y(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          I(
            Bg("Code should be loaded asynchronously.", function (a) {
              a = a.getAttribute("async");
              return null === a || "false" == a;
            }),
            "Add 'async=\"\"' to the <script> tag."
          ),
          Bg("Code found outside of <head> tag.", function (a) {
            return a.parentNode ? "HEAD" != a.parentNode.nodeName : !1;
          })
        )
      ]
    )
  ];
};
var Zh = K(
  H(
    G("Site ID", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  [
    F("Site ID should only contain alphanumeric characters.", function (a) {
      return !x(/^[_A-Za-z0-9]+$/, a.label);
    })
  ]
);
Zg(new Yh());
var $h = function () {
  S.call(this, "Ensighten", 99);
  this.W = "Ensighten";
  this.L = ["nexus.ensighten.com/"];
  this.isActive = mb;
  this.H = kb([]);
};
ra($h, S);
$h.prototype.K = function () {
  return [
    O(
      "Ensighten",
      "nexus.ensighten.com/",
      "Ensighten",
      "http://www.ensighten.com/",
      p(z, /nexus\.ensighten\.com\/([^\/]*)\//),
      "unchecked",
      [
        fg("Client ID", "ClientID"),
        fg("Page ID", "PageID"),
        dg(
          "Rules",
          "Rule %s",
          function (a) {
            a = Sc(N(a), "ruleId");
            return void 0 !== a ? a : !1;
          },
          [P],
          void 0,
          "unchecked"
        ),
        P
      ]
    )
  ];
};
Zg(new $h());
var ai, bi;
ai = /^(?:https?:)?\/\/(\d+)?\.?fls\.doubleclick\.net\/(activity[ij]?)[;&\/]/i;
bi = function (a) {
  return new RegExp("[?/&;]" + a + "=([^;&#?]*)");
};
var ci = function () {
  S.call(this, "Floodlight", 3);
};
q(ci, S);
var di = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(jump|ad[ijflx]?)\/.*N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  ei = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/clk[;&]([^;&]*)[;&]([^;&]*)[;&]/i,
  fi = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.mo\.doubleclick\.net\/dartproxy\/dfa\.(?:click|mobile)\.handler\?k=N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  gi = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/N?(\d+)?.*(ad[ijflx]?)\/([^;&]*)[;&].*[;&]tile=/i,
  hi = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net(?:\/ddm)?\/(activity[ij]?)[;&\/]/i,
  ii = function (a, b, c) {
    return y(a, c.url, b);
  },
  ji = function (a, b) {
    b = b.url;
    var c = b.split(";");
    1 == c.length && (c = b.split("&"));
    a = c.slice(1)[a];
    try {
      return decodeURIComponent(a);
    } catch (d) {
      return a;
    }
  },
  ki = function (a, b, c) {
    return M(a, p(ii, b, c));
  },
  mi = function (a, b) {
    return Wf("URL type", function (c) {
      c = ii(a, b, c);
      return "string" === typeof c ? li(c) : c;
    });
  },
  ni = p(ki, "Network"),
  oi = function (a, b) {
    return J(H(ki("Campaign", a, b), "linked"), "http://advertisers.doubleclick.net/app_pages/campaign/mediaplan.aspx?cid=%s");
  },
  pi = J(
    K(
      H(
        G("Advertiser ID", function (a) {
          return a.label || "not set";
        }),
        "copyable"
      ),
      [
        F("Invalid or missing advertiser ID.", function (a) {
          return !x(/^[0-9]+$/, a.label || "");
        })
      ]
    ),
    "http://advertisers.doubleclick.net/app_pages/advertisers/spotlightactivities/default.aspx?aid=%s"
  ),
  ri = function (a, b) {
    return K(M(a, p(z, bi(b))), [qi]);
  },
  si = function (a, b) {
    return K(
      Vf("Parameter name (changed from test function)", function (c) {
        this.Bb || (this.Bb = /[?/&;,]([^;&#,?/]+)=([^;&#?/]*)/g);
        c = N(c);
        var d = c.j.toString();
        d = d ? c : c.o;
        c = pd(this.Bb, d);
        this.l = this.Bb.lastIndex;
        return !c || -1 != a.indexOf(c[1]) || (b && zd(b, c[1])) ? !1 : ((this.text = c[1]), c[2]);
      }),
      [qi]
    );
  },
  ti = function (a, b) {
    return Bg("HTML tag type must match DoubleClick tag type.", function (c) {
      var d = c.src || c.href;
      d = d ? ii(a, b, { url: d }) : null;
      return "string" === typeof d && c.tagName != li(d).toUpperCase();
    });
  },
  vi = function (a, b) {
    return Ag("Script Type", function (c) {
      c = (c = c ? c.src || c.href : "") ? ii(a, b, { url: c }) : null;
      return "string" === typeof c && li(c);
    }).i(
      L(
        Ag("IFRAME content", function (c, d) {
          return Kb(d.label, "i") && c.contentDocument && c.contentDocument.body ? vc(c.contentDocument.body.innerHTML, 1e3) : !1;
        }),
        "IFrame"
      )
    );
  },
  wi = J(
    Xf('URLs should end with a "?".', function (a) {
      return !Hd(/.*[?]$/, a);
    })
  ),
  xi = Uf("Potential missing parameter(s), found '%s'.", p(z, /(;;|&&)/)),
  yi = Uf("Smart quotes not allowed in tag HREF/SRC.", p(Hd, /%E2%80%9[89]/i)),
  zi = J(
    F("Question marks must be encoded in site-supplied click strings.", function (a) {
      return x(/[?]+/, a.label);
    })
  ),
  qi = Bf('Found "[" or "]" in parameter %s; site may not be passing required information into key value.', function (a) {
    return "pc" != a.text && x(/(\[|\])/, a.label) ? a.text : !1;
  }),
  Bi = F("ord value contains unsupported symbols.", function (a) {
    return "string" === typeof a.label && !x(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
  }).otherwise(
    Xf("ord value not unique enough.", function (a, b) {
      return !Ai(a) && 10 > b.label.length && "1" != b.label && 0 < b.label.length;
    })
  ),
  Ci = p(Hd, /[?&;]ord=1[;&#?]/),
  Di = p(Hd, /[?&;]ord=[^;&#?]+/),
  Ei = M("ord value needs to be populated with a sales order ID.", function (a) {
    return Ai(a) && !Di(a);
  }).otherwise(
    J(
      Uf("ord value needs to be populated with a random value.", function (a) {
        return !Ai(a) && !Di(a);
      })
    )
  ),
  Fi = function (a) {
    var b = N(a);
    b.j.toString() ? (b = z(bi("ord"), a)) : ((b = b.o), (b = y(bi("ord"), b)));
    this.type = Ai(a) && "1" != b ? "Info" : "Fine";
    return b;
  },
  Gi = K(H(M("ord Parameter", Fi), "copyable"), [Bi, qi, Ei]).otherwise(Ei),
  Hi = K(
    M("Order ID", function (a) {
      this.type = Ai(a) ? "Info" : "Hidden";
      return !a.Adapted && Fi(a);
    }),
    [Bi, qi, Ei]
  ).otherwise(Ei),
  Ii = K(Of(ri("num parameter", "num"), "Fine"), [
    F("num value needs to be populated with a random value.", function (a) {
      return "" == a.label;
    }),
    Yf("num parameter only required if ord=1.", function (a) {
      return !Ci(a);
    }),
    F("num value contains unsupported symbols.", function (a) {
      return "string" === typeof a.label && !x(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
    }),
    qi,
    Bf("num value not unique enough (10 or more characters required).", function (a) {
      return 10 > a.label.length;
    })
  ]).otherwise(Yf("Missing num parameter.", Ci)),
  Ji = Uf("URL must be terminated by the ord= or num= parameter", function (a) {
    if (
      (a = ab(a.url.split("?"), function (c) {
        return 0 < c.indexOf("ord=") || 0 < c.indexOf("num=");
      }))
    ) {
      a = a.split(";");
      for (var b = null; void 0 !== b && Lb((b = a.pop())); );
      return void 0 === b;
    }
    return !0;
  }),
  Ai = function (a) {
    return !!zd([bi("qty"), bi("cost")], N(a).o);
  },
  Ki = M("Version", function (a) {
    return Ai(a) ? "Sales Activity Tag" : "Counter Activity Tag";
  }),
  li = function (a) {
    return (
      {
        activity: "img",
        activityi: "iframe",
        activityj: "script",
        ad: "img",
        adf: "flash frame",
        adi: "iframe",
        adj: "script",
        adl: "flash layer",
        adx: "flash streaming"
      }[a] || ("" == a ? !1 : a)
    );
  },
  Li =
    "1x1 88x31 120x60 120x90 120x240 120x600 125x125 160x600 180x150 234x60 240x400 250x250 300x100 300x250 300x600 336x280 468x60 720x300 728x90 970x250".split(
      " "
    ),
  Mi = K(ri("Size", "sz"), [
    Bf("sz= parameter value is not a recognized size.", function (a) {
      return !bb(Li, a.label);
    })
  ]),
  Ni = K(
    H(
      M("Click", function (a) {
        return y(RegExp("[?&;]click=([^?]?[^;&#]*)"), a.url.replace(/\?$/, ""));
      }),
      "link_expandable"
    ),
    [zi, qi]
  ),
  Oi = [
    Gi,
    Ii,
    Ni,
    K(ri("SP", "sp"), [
      F("sp= parameter incorrect.", function (a) {
        return !x(/\d+x\d+/, a.label);
      })
    ]),
    si(["click", "num", "ord", "sp"]),
    xi
  ],
  Pi = [
    ri("Type", "type"),
    ri("Category", "cat"),
    Hi,
    K(ri("Quantity", "qty"), [
      F("Quantity value contains unsupported symbols.", function (a) {
        return "string" === typeof a.label && !x(/^[0-9]+$/, a.label);
      })
    ]).otherwise(Uf("Sales activity tag must have quantity argument set.", Ai)),
    ri("Creative ID", "cid"),
    ri("Ad ID", "aid"),
    L(
      Wf("studioV2", function (a) {
        var b = z(bi("cid"), a);
        a = z(bi("aid"), a);
        return b && a ? b + "_" + a : !1;
      }),
      "studioV2"
    ),
    Ii,
    Ni,
    K(ri("Cost", "cost"), [
      F("Cost value contains unsupported symbols.", function (a) {
        return !Fd(a.label);
      })
    ]).otherwise(Uf("Sales activity tag must have cost argument set.", Ai)),
    K(
      J(
        L(
          M(
            "Custom Dimensions",
            function (a) {
              for (var b = /(?:[?&;])(u[0-9]+=[^;&#?]*)/g, c = [], d = N(a); (a = pd(b, d.o)); ) c.push(decodeURIComponent(a[1]));
              return 0 < c.length ? c.join(";") : !1;
            },
            "map"
          ),
          "Custom Dimensions"
        ),
        "https://support.google.com/ds/answer/6024747"
      ),
      [
        qi,
        J(
          Uf("Custom dimension %s value is empty.", function (a) {
            for (var b = /(?:[?&;])(u[0-9]+)=([^;&#?]*)/g, c = N(a); (a = pd(b, c.o)); ) if (0 == a[2].length) return a[1];
            return !1;
          }),
          "https://support.google.com/ds/answer/4397154"
        )
      ]
    ),
    xi,
    si("cat click cost num ord prd qty src type".split(" "), [/^u[0-9]+$/])
  ],
  Qi = function () {
    var a = dg("Sizes", v("DFA ${%s} ${%s}", "URL type", "Size"), mb, [
      mi(di, 1),
      Mi,
      Ii,
      Ni,
      si(["click", "ord", "num", "sz"]),
      xi,
      wi,
      yi,
      Ji
    ]);
    return O(
      "Campaign Manager",
      di.source,
      v("DFA ${%s} N${%s} B${%s}", "URL type", "Network", "Campaign"),
      "https://support.google.com/ds/answer/2828176",
      p(ii, di, 3)
    ).i(mi(di, 1), ni(di, 2), ki("Site String", di, 3), oi(di, 4), Gi, a);
  },
  Ri = function () {
    return O("Campaign Manager", ei.source, "Campaign Manager Click Tracker", "https://support.google.com/ds/answer/2828176", p(ji, 0)).i(
      K(
        J(
          H(
            M("Ad", function (a) {
              return ji(0, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/creatives/ad.aspx?id=%s"
        ),
        [
          F("Invalid or missing ad ID.", function (a) {
            return !x(/^\d+$/, a.label || "");
          })
        ]
      ),
      K(
        J(
          H(
            M("Placement ID", function (a) {
              return ji(1, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/siteplacements/properties.aspx?id=%s"
        ),
        [
          F("Invalid or missing Placement ID.", function (a) {
            return !x(/^\d+$/, a.label || "");
          })
        ]
      ),
      mi(ei, 1),
      K(
        M("Verifier", function (a) {
          return ((a = ji(2, a)) && a.split("?")[0]) || "";
        }),
        [
          F("Campaign Manager Click Tracker verifier not properly formatted.", function (a) {
            return !a.label;
          }),
          qi
        ]
      ),
      xi
    );
  },
  Si = function () {
    return O("Campaign Manager", fi.source, "Campaign Manager Mobile", "https://support.google.com/ds/answer/2828176", p(ii, fi, 2)).i(
      ni(fi, 1),
      ki("Site String", fi, 2),
      oi(fi, 3),
      Oi,
      Ji
    );
  },
  Ti = function (a) {
    var b = [
      ri("Tile", "tile").i(
        J(
          Bf("Tile number should be between 1 and 16", function (c) {
            try {
              var d = parseInt(c.label, 10);
              return 1 > d || 16 < d;
            } catch (e) {
              return !0;
            }
          }),
          "http://support.google.com/dfp_premium/bin/answer.py?answer=177207"
        )
      ),
      ri("Size", "sz"),
      ri("Tag ID", "tagid"),
      ri("oba", "oba"),
      ri("Keywords", "kw"),
      si("kw oba oe ord sz site tagid tile".split(" ")),
      Ji
    ];
    a && eb(b, a);
    return O("Google Ad Manager", gi.source, v("DFP ${%s}", "URL type"), "http://support.google.com/dfp/", p(z, gi)).i(
      ni(gi, 1),
      mi(gi, 2),
      ri("Site", "site"),
      ri("Encoding", "oe"),
      Gi,
      dg("Ad Slots", v("%s ${%s}", "Ad Slot", "Tile"), mb, b)
    );
  },
  Vi = function (a) {
    var b = O(
      "Floodlight",
      ai.source,
      v("%s Dynamic ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return z(ai, e) || y(bi("src"), N(e).o);
      }
    ).i(pi, Ki, mi(ai, 2), eg("Customer ID", "cid"), eg("Ad ID", "aid"), wi, yi, Ji, Wf("validation anchor"));
    if (0 < arguments.length) {
      for (var c = vf(Pi), d = 0; d < arguments.length; d++) eb(c, arguments[d]);
      b.i(dg("Requests", "Request %s", mb, c, Ui));
    }
    return b;
  },
  Wi = function (a) {
    var b = O(
      "Floodlight",
      hi.source,
      v("%s Static ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return y(bi("src"), N(e).o);
      }
    ).i(pi, Ki, mi(hi, 1), fg("Customer ID", "cid"), fg("Ad ID", "aid"), wi, yi, Ji);
    if (0 < arguments.length) {
      for (var c = vf(Pi), d = 0; d < arguments.length; d++) eb(c, arguments[d]);
      b.i(dg("Requests", "Request %s", mb, c, Ui));
    }
    return b;
  },
  Xi = function () {
    var a = RegExp("m[0-9]+:([^;|]*)");
    return K(G("Merchant Center ID", p(Ff, RegExp("m[0-9]*:([^;|]*)"))), [
      F("Merchant Center ID attribute must not contain an index.", function (b) {
        return y(a, b.parent.label);
      })
    ]);
  },
  Yi = function (a, b) {
    return G(a, function (c) {
      return y(new RegExp(b + c.label + ":([^;|]*)"), c.parent.parent.label);
    });
  },
  Zi = function () {
    return K(
      Wf("prd", function (a) {
        return (a = z(bi("prd"), a)) ? nd(a + "") : !1;
      }),
      [
        Xi(),
        G("Country", p(Ff, RegExp("c:([^;|]*)"))),
        G("Language", p(Ff, RegExp("l:([^;|]*)"))),
        F('Missing index for cart item "%s".', p(Ff, /(?:^|;)([ipq]):[^;|]*/)),
        dg(
          "Products",
          "Item %s",
          mb,
          [
            K(Yi("Item ID", "i"), [
              F("Product Item ID is missing.", function (a) {
                return "" == a.label;
              }).otherwise(F("Product Item ID contains illegal characters.", p(Ff, /[<:?]/)))
            ]).otherwise(F("Product Item ID is missing.")),
            K(Yi("Price per item", "p"), [
              F("Product Item price is missing.", function (a) {
                return "" == a.label;
              }).otherwise(F("Product Item price should be a number.", p(Ff, /[^-.0-9]+/)))
            ]).otherwise(F("Product Item price is missing.")),
            K(Yi("Quantity", "q"), [
              F("Product Item quantity is missing.", p(Ef, "")).otherwise(
                F("Product Item quantity should be an integer.", p(Ff, /[^0-9]+/))
              )
            ]).otherwise(F("Product Item quantity is missing.")),
            F("Item index should start at 1.", p(Ef, "0")),
            K(Yi("Account ID", "a"), [
              F("Account ID should be an integer.", function (a) {
                return !y(/^[0-9]*/, a.label);
              }),
              F("Account ID should not be empty.", function (a) {
                return "" == a.label.trim();
              })
            ]),
            Yi("Country", "c"),
            Yi("Language", "l")
          ],
          function (a, b) {
            this.Gb || (this.Gb = /[ipq]([0-9]+):([^;|]*)[;|]?/g);
            a = y(this.Gb, b.parent.label);
            this.l = this.Gb.lastIndex;
            return a && 0 == Be(b, [a + ""]).length ? a : !1;
          }
        ),
        F("Item indices should be subsequent order and no index must be skipped.", function (a) {
          if ((a = D(a, "Products"))) {
            if (0 < Be(a, ["", "0"]).length) return !1;
            for (var b = 1, c = a.relatedIssues.length + 1; b < c; b++) if (0 == Be(a, [b + ""]).length) return b + "";
          }
          return !1;
        }),
        F("prd attribute malformed.", function (a) {
          return !x(/^([maclipq]([0-9]*):([^;|]*)($|[;|]))+$/, a.label);
        }),
        F("Attribute %s occurs multiple times.", function (a) {
          a = ld(/([mclipq][0-9]*):(?:[^;|]*)(?:$|[;|])/g, a.label).sort();
          for (var b = 0, c = a.length - 1; b < c; b++) if (a[b + 1] == a[b]) return a[b];
          return !1;
        })
      ]
    );
  },
  Ui = function (a) {
    if (!Ai(a)) return "${bucketIndex}";
    a = N(a).o;
    var b = y(bi("ord"), a);
    return null == b || "1" == b ? "num=" + y(bi("num"), a) : "ord=" + b;
  },
  $i = function (a) {
    a = (a = ji(2, a)) ? a.split("?") : [];
    return 1 < a.length ? (a.shift(), a.join("?")) : "";
  };
ci.prototype.K = function () {
  return [
    Qi().i(P, $f),
    Ri().i(
      dg(
        "Tags",
        "Click Tracker",
        mb,
        [
          K(M("Click-through URL", $i), [
            Uf("Campaign Manager Click Tracker click-through URL must start with http://, https://, tel://, or mailto://", function (a, b) {
              return "ds" == N(a).j.get("u") ? !1 : !x(/^(http|https|mailto|tel):\/\//, b.label);
            })
          ]),
          qi,
          J(
            Xf("Replace semicolons in <meta> click-tracker tag with their ASCII equivalent (%3b)", function (a) {
              return 302 == a.statusCode && Ub(a.url, ";");
            })
          ),
          P,
          $f
        ],
        function (a) {
          return a.url;
        }
      )
    ),
    Si().i(P, $f),
    Ti(P),
    Vi(P, Zi(), $f),
    Wi(P, Zi(), $f)
  ];
};
var aj = function (a, b, c) {
  var d = new tg(
    b.type,
    b.category,
    b.text,
    b.infoLink,
    c,
    function (e, f) {
      this.ua = {};
      this.ua.Adapted = !0;
      this.ua.node = e;
      this.ua.url = e ? e.src || e.href : "";
      if ((e = ig(b, this.ua.url) && b.Ca(this.ua, f))) this.text = b.text;
      return e;
    },
    b.format
  );
  b.view && L(d, b.view);
  b.Ia && (d.Ia = 2 == b.Ia.issueClass ? aj(a, b.Ia) : b.Ia.clone());
  b.la.forEach(function (e) {
    d.la.push(2 == e.issueClass ? aj(this, e) : e.clone());
  }, a);
  return d;
};
ci.prototype.qa = function () {
  return [];
};
ci.prototype.H = function () {
  return [
    aj(
      this,
      Qi(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).i(
      Jg,
      Hg().i(
        Dg,
        R("Jump tag type found in non-anchor HTML tag.", function (a, b) {
          b = D(b.parent, "URL type");
          return !(!b || "jump" != b.label || "A" == a.tagName);
        }),
        vi(di, 1),
        ti(di, 1)
      )
    ),
    aj(
      this,
      Ri(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).i(
      Lg(
        "Tags",
        "Click Tracker",
        [
          Ag("Click-through URL", function (a, b) {
            return $i({ url: b.label });
          }),
          Hg().i(Dg)
        ],
        function (a, b) {
          return b.parent.template.ua.url;
        }
      )
    ),
    aj(
      this,
      Si(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).i(Jg, Hg().i(Dg)),
    aj(
      this,
      Ti(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).i(Jg, Hg().i(Dg, vi(gi, 2), ti(gi, 2))),
    aj(
      this,
      Vi(Jg, Hg().i(Dg, vi(ai, 2), ti(ai, 2))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ),
    aj(
      this,
      Wi(Jg, Hg().i(Dg, vi(hi, 1), ti(hi, 1))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    )
  ];
};
Zg(new ci());
var bj = function (a) {
    return J(
      F("Unknown method name: '%s'", function (b) {
        var c = b.text.toLowerCase();
        return !a(c) && !a("_" + c) && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#unknown_method"
    );
  },
  cj = function (a, b) {
    return F("Wrong case for method name: '%s'", function (c) {
      var d = a(c),
        e = c.text.toLowerCase();
      return !d && b(e) && c.text;
    });
  },
  dj = function (a) {
    return J(
      Af("Deprecated method used: '%s'", function (b) {
        var c = a(b);
        return !!c && !!c.oa && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#remove_method"
    );
  },
  ej = function (a) {
    return F("Retired method used: '%s'", function (b) {
      var c = a(b);
      return !!c && !!c.fc && b.text;
    });
  },
  fj = function (a, b, c, d) {
    var e = (c.g || []).length;
    c.A && (e -= c.A);
    var f = d.length;
    if (f < e)
      return (
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
        v("Missing %s required parameter(s) for method '%s'.", e - f, b)
      );
    if (f > (c.g || []).length)
      return (
        (c = f - (c.g || []).length),
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
        v("Method '%s' has %s additional parameter.", b, c)
      );
    for (e = 0; e < f; e++)
      if (c.types && c.types[e] && (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) && pd(/^["'].*["']$/, d[e]))
        return (
          (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes"),
          v("The value for parameter '%s' in method '%s' should not be quoted.", c.g[e], b)
        );
    return !1;
  };
var gj = /^ga[.(]/,
  hj = /\(([^;]+)\)/g,
  ij = /\(([^;]+)\)/g,
  jj = /(?:.|\n)*?(?:ga\.|tracker\.)([^;]*?);/g,
  kj = /['"]?(?:(.*\.)?)([a-zA-Z0-9_:]*)['"]?/,
  lj = { hitCallback: 7, sessionControl: 1 },
  mj = {
    create: {
      g: ["trackingId", "auto", "cookieDomain", "name", "opt_configObject"],
      types: [1, 11, 11, 11, 5],
      A: 4,
      R: {
        allowAnchor: 4,
        allowLinker: 4,
        alwaysSendReferrer: 4,
        clientId: 1,
        cookieDomain: 1,
        cookieExpires: 3,
        cookieName: 1,
        anonymizeIp: 4,
        name: 1,
        sampleRate: 3,
        siteSpeedSampleRate: 2,
        storage: 1
      },
      link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"
    },
    getByName: { g: ["name"], types: [1], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" },
    getAll: { g: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" },
    require: { g: ["module", "script"], A: 1 },
    send: {
      variations: {
        appview: { g: ["hitType", "appName", "appVersion"], A: 1, R: lj },
        event: {
          g: ["hitType", "eventCategory", "eventAction", "eventLabel", "eventValue"],
          types: [1, 1, 1, 1, 3],
          A: 2,
          R: lj,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/events"
        },
        exception: { g: ["hitType", "exDescription", "exFatal"], A: 1, R: lj, types: [1, 1, 2] },
        item: {},
        pageview: {
          g: ["hitType", "page", "title"],
          types: [1, 1, 1],
          A: 2,
          R: lj,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/pages"
        },
        social: {
          g: ["hitType", "socialNetwork", "socialAction", "socialTarget"],
          R: lj,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"
        },
        timing: {
          g: ["hitType", "timingCategory", "timingVar", "timingValue", "timingLabel"],
          types: [1, 1, 1, 3, 1],
          R: lj,
          A: 1,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"
        },
        transaction: {}
      }
    },
    set: {
      g: ["fieldName", "value"],
      types: [1, 12],
      R: {
        anonymizeIp: 4,
        campaignId: 1,
        campaignKeyword: 1,
        campaignMedium: 1,
        campaignName: 1,
        campaignSource: 1,
        "dimension[0-9]+": 1,
        encoding: 1,
        flashVersion: 1,
        hostname: 1,
        javaEnabled: 4,
        language: 1,
        "metric[0-9]+": 2,
        nonInteraction: 4,
        page: 1,
        referrer: 1,
        screenColors: 1,
        screenResolution: 1,
        title: 1,
        viewportSize: 1
      },
      pb: 1,
      link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"
    },
    get: { g: ["fieldName"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" }
  },
  nj = {
    displayfeatures: {},
    ecommerce: {
      addItem: {
        g: "id name sku category price quantity".split(" "),
        A: 4,
        R: {},
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      addTransaction: {
        g: ["id", "affiliation", "revenue", "shipping", "tax"],
        A: 4,
        R: {},
        N: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      clear: { g: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" },
      send: { g: [], R: lj, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" }
    },
    ec: {
      addProduct: {
        g: ["productObject"],
        types: [5],
        R: { id: 1, name: 1, brand: 1, category: 1, variant: 1, price: 1, quantity: 3, coupon: 1, position: 3 },
        pb: 0,
        dc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addPromo: {
        g: ["promoObject"],
        types: [5],
        R: { id: 1, name: 1, promo: 1, position: 1 },
        pb: 0,
        dc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addImpression: {
        g: ["impressionObject"],
        types: [5],
        R: { id: 1, name: 1, list: 1, brand: 1, category: 1, variant: 1, position: 3, price: 1 },
        pb: 0,
        dc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      setAction: {
        g: ["action", "actionObject"],
        A: 1,
        types: [1, 5],
        R: { id: 1, affiliation: 1, revenue: 1, tax: 1, shipping: 1, coupon: 1, list: 1, step: 3, option: 1 },
        pb: 1,
        dc: ["id"],
        N: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      }
    },
    inpage_linkid: {},
    linker: {
      decorate: { g: ["target"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain" },
      autoLink: {
        g: ["targets", "autolinkAnchor", "autolinkForm"],
        A: 2,
        types: [6, 4, 4],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"
      }
    }
  },
  oj = [];
sb(mj, function (a, b) {
  oj.push(b.toLowerCase());
});
sb(nj, function (a, b) {
  var c = b.toLowerCase();
  sb(a, function (d, e) {
    oj.push(c + ":" + e.toLowerCase());
  });
});
var pj = {},
  qj = function (a) {
    var b = a.text;
    if ("require" == b) (b = a.label.split(",")), 1 < b.length && ((b = y(/['"]([a-zA-Z0-9]*)['"]/, b[1])), (pj[b] = a.label));
    else if (0 < b.indexOf(":")) return (a = b.split(":")), (a = 2 == a.length && a.shift()), !pj[a] && a;
    return !1;
  },
  sj = function (a) {
    var b = mj,
      c = a.text,
      d = c.split(":"),
      e = 2 == d.length && d.shift();
    "string" === typeof e && ((b = nj[e]), (c = d.join(":")));
    return b ? (b[c] && b[c].ke ? ((a = rj(a)), a.shift(), (a = y(/['"]?([^'"]*)['"]?/, a[0])), b[c].ke[a] || b[c]) : b[c]) : null;
  },
  tj = function (a) {
    var b = a.split(":");
    b = 2 == b.length && b.shift();
    if ("string" === typeof b) {
      if ("_" == b.charAt(0)) return !1;
      if (!nj[b]) return !0;
    }
    return bb(oj, a.toLowerCase());
  },
  uj = function (a) {
    return bb(oj, a.toLowerCase());
  },
  rj = function (a) {
    if (x(/^[_:a-zA-Z]+\(/, a.label)) {
      var b = a.text;
      a = y(/\s*(?:[^\(]*)\(([^\)]*)\)/, a.label);
      a = "string" === typeof a ? (Lb(a) ? b : v("%s, %s", b, a)) : "";
      b = ud(a);
    } else b = ud(a.label);
    return b;
  },
  vj = function () {
    return K(
      zg("Method", function (a, b) {
        var c = b.label;
        var d = hj.lastIndex;
        if (0 != c.indexOf("ga(function")) {
          hj = ij;
          hj.lastIndex = d;
          var e = y(hj, c);
        }
        "string" !== typeof e && ((hj = jj), (hj.lastIndex = d), (e = y(hj, c)));
        c = e;
        this.l = hj.lastIndex;
        if ("string" === typeof c && (d = rd(c)))
          if ((d = pd(kj, d[0]))) {
            e = RegExp;
            var f = d[1] || "";
            b = Te(b).label;
            f && (f = f.replace(".", ""));
            b = v("['\"]create['\"]\\s*,\\s*[\"']%s[\"'](?:,\\s{\\s*name:\\s[\"']%s[\"'])?", b, f);
            if (!y(new e(b, "im"), a.textContent)) return !1;
            a = this.text = d[2];
            this.infoLink = (mj[a] && mj[a].link) || null;
          } else return !1;
        return c;
      }),
      [
        F('Missing require for plugin "%s".', qj),
        bj(tj),
        cj(sj, uj),
        dj(sj),
        ej(sj),
        K(
          J(
            F("%s", function (a) {
              var b = rj(a);
              b.shift();
              var c = sj(a),
                d;
              if ((d = !!c && !!c.g))
                a: {
                  a = a.text;
                  var e = c.g.length;
                  c.A && (e -= c.A);
                  d = b.length;
                  if (d < e && (0 == d || !c.R || pd(/^["'].*["']$/, b[d - 1])))
                    (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
                      (d = v("Missing %s required parameter(s) for method '%s'.", e - d, a));
                  else if (d > c.g.length)
                    (b = d - c.g.length),
                      (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
                      (d = v("Method '%s' has %s additional parameter.", a, b));
                  else {
                    for (e = 0; e < d; e++)
                      if (
                        c.types &&
                        c.types[e] &&
                        (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) &&
                        pd(/^["'].*["']$/, b[e])
                      ) {
                        this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes";
                        d = v("The value for parameter '%s' in method '%s' should not be quoted.", c.g[e], a);
                        break a;
                      }
                    d = !1;
                  }
                }
              return d;
            }),
            "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"
          ),
          [
            yf(
              "Method call",
              function (a) {
                this.text = "Method call: " + a.parent.text;
                return a.parent.label;
              },
              "snippet_js"
            )
          ]
        )
      ]
    );
  };
var wj = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gat/methods/gaJSApi_gat",
      methods: {
        _anonymizeIp: {},
        _createTracker: { g: ["opt_account", "opt_name"], A: 2, types: [1, 1], N: 5 },
        _forceSSL: { g: ["forceSSL"], A: 1, types: [4] },
        _getTracker: { g: ["account"], types: [1], oa: !0, N: 5 },
        _getTrackerByName: { g: ["opt_name"], A: 1, types: [1], N: 5 },
        _getTrackers: { N: 6 }
      }
    }
  ],
  xj = {};
wj.forEach(function (a) {
  xb(xj, a.methods);
});
var yj = [];
sb(xj, function (a, b) {
  yj.push(b.toLowerCase());
});
var zj = function (a) {
    return xj[a.text];
  },
  Aj = function (a) {
    return bb(yj, a.toLowerCase());
  },
  Bj = function () {
    return K(
      zf("Method", function (a) {
        return (a = pd(/([_.a-zA-Z]*)\((.*)\)/, a.label)) ? ((this.text = a[1]), a[2]) : !1;
      }),
      [
        F("Missing leading '_' in method name: '%s'", function (a) {
          return Aj("_" + a.text) && a.text;
        }),
        bj(Aj),
        cj(zj, Aj),
        dj(zj),
        ej(zj),
        F("%s", function (a) {
          var b = a.label.length ? a.label.split(",") : [],
            c = zj(a);
          return !!c && fj(this, a.text, c, b);
        })
      ]
    );
  },
  Cj = function () {
    return J(
      K(
        zg("_gat", function (a) {
          var b = /_gat\.([_a-zA-Z.]*\([^)]*\))/g;
          b.lastIndex = this.l;
          a = y(b, a.textContent);
          this.l = b.lastIndex;
          return a ? a : !1;
        }),
        [Bj()]
      ),
      "http://developers.google.com/analytics/devguides/collection/gat/methods/"
    );
  };
var Dj = function (a, b, c) {
    this.Ya = a;
    this.Wa = b;
    this.Vc = c;
  },
  Ej = {};
Ej.async = new Dj(
  p(v, "['\"]%s_setAccount['\"]\\s*,\\s*['\"]%s['\"]"),
  { ed: /^_gaq\.push/, method: /\s*(\[(?:(?!\]\s*,).|\n)*\])\s*(?:,|\))\s*/g, Ya: /['"](?:(.*\.)?)([a-zA-Z0-9_]*)['"]/ },
  function (a) {
    a = y(/^\s*\[\s*((.|\n)*?)\s*\]\s*$/, a);
    return ud("string" === typeof a ? a : "");
  }
);
Ej.sync = new Dj(
  p(v, "_gat.%s_getTracker\\(['\"]%s['\"]\\)"),
  { ed: /^pageTracker\./, method: /\s*([^\)]*\)\s*$)/g, Ya: /(?:(.*\.)?)\.([a-zA-Z0-9_]*)/ },
  function (a, b) {
    a = y(/\s*(?:[^\(]*)\(([^\)]*)\)/, a);
    a = "string" === typeof a ? (Lb(a) ? b : v("%s, %s", b, a)) : "";
    return ud(a);
  }
);
var Fj = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration",
      methods: {
        _deleteCustomVar: { g: ["index"], types: [2] },
        _getName: { g: [], N: 1 },
        _getAccount: { g: [], N: 1 },
        _getVersion: { g: [], N: 1 },
        _getVisitorCustomVar: { g: ["index"], types: [2], N: 1 },
        _initData: { g: [], types: [], oa: !0 },
        _setAccount: { g: ["accountID"] },
        _setCookiePersistence: { g: ["milliseconds"], types: [3], oa: !0 },
        _setCustomVar: { g: ["index", "name", "value", "opt_scope"], types: [2, 1, 1, 2], A: 1 },
        _setSampleRate: { g: ["newRate"], types: [10] },
        _setSessionTimeout: { g: ["newTimeout"], types: [10], oa: !0 },
        _setSessionCookieTimeout: { g: ["cookieTimeoutMillis"], types: [3] },
        _setSiteSpeedSampleRate: { g: ["sampleRate"], types: [3] },
        _setVar: { g: ["newVar"], oa: !0 },
        _setVisitorCookieTimeout: { g: ["cookieTimeoutMillis"], types: [3] },
        _trackPageLoadTime: { g: [], oa: !0, link: "http://support.google.com/analytics/bin/answer.py?answer=1205784" },
        _trackPageview: { g: ["opt_pageURL"], A: 1 }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiCampaignTracking",
      methods: {
        _setAllowAnchor: { g: ["bool"], types: [4] },
        _setCampContentKey: { g: ["newCampContentKey"] },
        _setCampMediumKey: { g: ["newCampMedKey"] },
        _setCampNameKey: { g: ["newCampNameKey"] },
        _setCampNOKey: { g: ["newCampNOKey"] },
        _setCampSourceKey: { g: ["newCampSrcKey"] },
        _setCampTermKey: { g: ["newCampTermKey"] },
        _setCampaignCookieTimeout: { g: ["cookieTimeoutMillis"], types: [3] },
        _setCampaignTrack: { g: ["bool"], types: [4] },
        _setCookieTimeout: { g: ["newDefaultTimeout"], types: [3], kh: [1], oa: !0 },
        _setReferrerOverride: { g: ["newReferrerUrl"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory",
      methods: {
        _cookiePathCopy: { g: ["newPath"] },
        _getLinkerUrl: { g: ["targetUrl", "useHash"], N: 1 },
        _link: { g: ["targetUrl", "useHash"] },
        _linkByPost: { g: ["formObject", "useHash"] },
        _setAllowHash: { g: ["bool"], types: [4], oa: !0 },
        _setAllowLinker: { g: ["bool"], types: [4] },
        _setCookiePath: { g: ["newCookiePath"] },
        _setDomainName: { g: ["newDomainName"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEcommerce",
      methods: {
        _addItem: { g: "orderId sku name category price quantity".split(" ") },
        _addTrans: { g: "orderId affiliation total tax shipping city state country".split(" "), N: "_gat.GA_EComm_.Transactions_" },
        _trackTrans: { g: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking?",
      methods: { _trackEvent: { g: ["category", "action", "opt_label", "opt_value", "opt_noninteraction"], types: [1, 1, 1, 2, 4], A: 3 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSearchEngines",
      methods: {
        _addIgnoredOrganic: { g: ["newIgnoredOrganicKeyword"] },
        _addIgnoredRef: { g: ["newIgnoredReferrer"] },
        _addOrganic: {
          g: ["newOrganicEngine", "newOrganicKeyword", "opt_prepend", "opt_displayName", "opt_urlPattern"],
          types: [1, 1, 4, 1, 1],
          A: 3
        },
        _clearIgnoredOrganic: { g: [] },
        _clearIgnoredRef: { g: [] },
        _clearOrganic: { g: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSocialTracking",
      methods: { _trackSocial: { g: ["network", "socialAction", "opt_target", "opt_pagePath"], A: 2 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiWebClient",
      methods: {
        _getClientInfo: { g: [], N: 4 },
        _getDetectFlash: { g: [], N: 4 },
        _getDetectTitle: { g: [], N: 4 },
        _setClientInfo: { g: ["bool"], types: [4] },
        _setDetectFlash: { g: ["bool"], types: [4] },
        _setDetectTitle: { g: ["bool"], types: [4] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUrchin",
      methods: {
        _getLocalGifPath: { g: [], N: 1 },
        _getServiceMode: { g: [], N: 3 },
        _setLocalGifPath: { g: ["newLocalGifPath"] },
        _setLocalRemoteServerMode: { g: [] },
        _setLocalServerMode: { g: [] },
        _setRemoteServerMode: { g: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUserTiming",
      methods: { _trackTiming: { g: ["category", "variable", "time", "opt_label", "opt_sampleRate"], types: [1, 1, 3, 1], A: 2 } }
    },
    {
      link: "http://support.google.com/analytics/bin/answer.py?answer=2558867",
      methods: { _require: { g: ["inpage_linkid", "pluginUrl"] } }
    },
    {
      link: null,
      methods: {
        _addDevId: { g: ["devId"], types: [1] },
        _anonymizeIp: { g: [] },
        _clearTrans: { g: [] },
        _clearXKey: { g: ["projectId"], types: [2] },
        _clearXValue: { g: ["projectId"], types: [2] },
        _createEventTracker: { g: ["name"], types: [1] },
        _get: { g: ["key"], types: [1] },
        _getPlugin: { g: ["name"], types: [1] },
        _getXKey: { g: ["projectId", "num"], types: [3, 3] },
        _getXValue: { g: ["projectId", "num"], types: [3, 3] },
        _sendXEvent: { g: [] },
        _set: { g: ["key", "value"], types: [1, 1] },
        _setAutoTrackOutbound: { g: [], types: [], fc: !0 },
        _setTrackOutboundSubdomains: { g: [], types: [], fc: !0 },
        _setHrefExamineLimit: { g: [], types: [], fc: !0 },
        _setMaxCustomVariables: { g: ["maxCustomVars"], types: [2] },
        _setPageGroup: { g: ["index", "value"], types: [3, 1] },
        _setTransactionDelim: { g: ["delim"], types: [1] },
        _setXKey: { g: ["key"], types: [1] },
        _setXValue: { g: ["value"], types: [1] },
        _visitCode: { g: [] }
      }
    }
  ],
  Gj = {};
Fj.forEach(function (a) {
  xb(Gj, a.methods);
  wj.forEach(function (b) {
    sb(b, function (c, d) {
      Gj["gat." + d] = c;
    });
  });
});
var Hj = [];
sb(Gj, function (a, b) {
  Hj.push(b.toLowerCase());
});
var Ij = function (a) {
    return Gj[a.text];
  },
  Jj = function (a) {
    return bb(Hj, a.toLowerCase());
  },
  Kj = function (a) {
    var b = ab(Fj, function (c) {
      return void 0 !== c.methods[a];
    });
    return b ? b.methods[a].link || b.link : null;
  },
  Mj = function (a) {
    var b = Ej[a];
    return J(
      K(
        zg("Statements", function (c) {
          return b.Wa && (this.l = c = Ad(c.textContent, this.l)) && y(b.Wa.ed, c.text) ? c.text : !1;
        }),
        [Lj(b)]
      ),
      "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
    );
  },
  Lj = function (a) {
    return K(
      zg("Method", function (b, c) {
        var d = y(a.Wa.method, c.label);
        this.l = a.Wa.method.lastIndex;
        if ("string" === typeof d) {
          var e = rd(d);
          if (0 < e.length)
            if ((e = pd(a.Wa.Ya, e[0]))) {
              if (!y(new RegExp(a.Ya(e[1] || "", Te(c).label), "im"), b.textContent)) return !1;
              this.text = e[2];
              this.infoLink = Kj(this.text);
            } else return !1;
        }
        return d;
      }),
      [
        J(
          F("Missing leading '_' in method name: '%s'", function (b) {
            return Jj("_" + b.text) && b.text;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_underscore"
        ),
        bj(Jj),
        cj(Ij, Jj),
        dj(Ij),
        ej(Ij),
        K(
          J(
            F("%s", function (b) {
              if (a.Ya && a.Vc) {
                var c = a.Vc(b.label, b.text);
                c.shift();
                var d = Ij(b);
                return !!d && fj(this, b.text, d, c);
              }
              return !1;
            }),
            "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"
          ),
          [
            yf(
              "Method call",
              function (b) {
                this.text = "Method call: " + b.parent.text;
                return b.parent.label;
              },
              "snippet_js"
            )
          ]
        )
      ]
    );
  };
var Nj = function () {
  S.call(this, "Google Tag Manager", 99);
  this.L = ["googletagmanager.com/gtm.js"];
};
q(Nj, S);
var Oj = [
    "Google Ads Conversion Tracking",
    "Google Ads Remarketing Tag (old)",
    "Google Ads Remarketing Tag (new)",
    "Google Analytics",
    "Floodlight"
  ],
  Pj = [];
sb(
  {
    pageTitle: { type: 1 },
    pageCategory: { type: 19 },
    pageSubCategory: { type: 19 },
    pageVersion: { type: 2 },
    pageTestVariation: { type: 19 },
    pageValue: { type: 2 },
    pageAttributes: { type: 20 },
    visitorId: { type: 1 },
    visitorLoginState: { type: 1 },
    visitorType: { type: 1 },
    visitorDemographicInfo: { type: 20 },
    visitorSocialConnections: { type: 20 },
    visitorLifetimeValue: { type: 2 },
    visitorExistingCustomer: { type: 1 },
    conversionDate: { type: Date },
    conversionValue: { type: 2 },
    conversionType: { type: 1 },
    conversionId: { type: 1 },
    conversionAttributes: { type: 20 },
    transactionId: { type: 1 },
    transactionDate: { type: Date },
    transactionType: { type: 1 },
    transactionAffiliation: { type: 1 },
    transactionTotal: { type: 2 },
    transactionShipping: { type: 2 },
    transactionTax: { type: 2 },
    transactionPaymentType: { type: 1 },
    transactionCurrency: { type: 1 },
    transactionShippingMethod: { type: 1 },
    transactionPromoCode: { type: 1 },
    transactionProducts: { type: 20 },
    siteSearchTerm: { type: 1 },
    siteSearchFrom: { type: 1 },
    siteSearchCategory: { type: 1 },
    siteSearchResults: { type: 2 }
  },
  function (a, b) {
    Pj.push(b.toLowerCase());
  }
);
var Qj = K(
  J(
    H(
      G("Account ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  [
    J(
      F("Invalid or missing account ID", function (a) {
        return !x(/^GTM-[0-9A-Z]{4,9}$/, a.label);
      }),
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags"
    )
  ]
);
Nj.prototype.K = function () {
  return [
    K(
      O(
        "Google Tag Manager",
        "googletagmanager.com/gtm.js",
        v("%s ${%s}", "Google Tag Manager", "Account ID"),
        "http://support.google.com/tagmanager/answer/2574370",
        function (a) {
          return w(a.url).j.get("id");
        }
      ),
      [Qj, J($f, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#nonstandard"), Of(hg(), "Fine")]
    )
  ];
};
Nj.prototype.H = function () {
  var a = Hg();
  a.i(
    R("Missing closing \x3c/script> tag.", function (b) {
      return !b.externalScript && y(/<\/html>\s*$/m, b.textContent);
    }),
    Rj(),
    zf("Script", function (b) {
      return "http://www.googletagmanager.com/gtm.js?id=" + b.label;
    }),
    J(Dg, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#iframe"),
    Eg,
    Fg
  );
  return [
    Mg(
      "Google Tag Manager",
      v("%s ${%s}", "Google Tag Manager", "Account ID"),
      "http://support.google.com/tagmanager/answer/2574370",
      '//script[contains(@src, "www.googletagmanager.com/gtm.js?id=")]',
      function (b) {
        return y(/gtm.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).i(Qj, a)
  ];
};
var Rj = function () {
    var a = Ag("Data Layer Variable", function (b, c) {
      b = y(
        new RegExp(
          "\\(window,\\s*document\\s*,\\s*['\"]script['\"]\\s*,\\s*['\"]([^'\"]*)['\"]\\s*,\\s*['\"]" + c.parent.label + "['\"]\\)",
          "m"
        ),
        b.textContent
      );
      "string" === typeof b && (this.type = "dataLayer" == b ? "Hidden" : "Info");
      return b;
    });
    a.i(
      J(
        R("Data layer needs to be above the container snippet", function (b, c) {
          return y(new RegExp(c.label + "\\s*=\\s*\\[\\s*[{]([^;]*)[}]\\s*\\]\\s*;", "im"), b.textContent);
        }),
        "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#dl_snippet"
      )
    );
    a.i(
      J(
        Cg("GTM JavaScript code not found as a direct child of the <head> tag", function (b) {
          return b.parentNode ? "HEAD" != b.parentNode.nodeName : !1;
        }),
        "http://support.google.com/tagmanager/answer/2574370"
      )
    );
    a.i(
      J(
        Cg("GTM no-script code not found: either missing or not in <body>", function (b) {
          for (var c = Q.evaluate("//noscript", Q, null, XPathResult.ANY_TYPE, null); (b = c.iterateNext()); )
            if (b.parentNode && "BODY" == b.parentNode.nodeName) {
              var d = b.innerText.indexOf("www.googletagmanager.com/ns.html?id=");
              if (!(0 > d || b.innerText.indexOf("iframe") > d)) return !1;
            }
          return !0;
        }),
        "http://support.google.com/tagmanager/answer/2574370"
      )
    );
    a.i(
      J(
        Cg("GTM no-script code found outside of <noscript> tag", function (b) {
          for (
            var c = Q.evaluate('//iframe[contains(@src, "www.googletagmanager.com/ns.html?id=")]', Q, null, XPathResult.ANY_TYPE, null);
            (b = c.iterateNext());

          )
            if (!b.parentNode || "NOSCRIPT" != b.parentNode.nodeName) return !0;
          return !1;
        }),
        "http://support.google.com/tagmanager/answer/2574370"
      )
    );
    a.i(
      J(
        R("<script> tag must not be included in a <%s>", function (b) {
          return b.parentNode
            ? "HEAD" != b.parentNode.nodeName && "BODY" != b.parentNode.nodeName && b.parentNode.nodeName.toLowerCase()
            : !1;
        }),
        "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#script_flow"
      )
    );
    return a;
  },
  Sj = function (a) {
    Ce(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
      b.infoLink = "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#http_response";
    });
  },
  Tj = function (a) {
    a = Ie(a);
    a.length &&
      a.forEach(function (b) {
        b.type = "Warning";
        b.text += ". This could be due to an empty or un-published container";
      });
  };
Nj.prototype.qa = function () {
  return [
    qg("Google Tag Manager", function (a) {
      a = Fe(a, ["Google Tag Manager"]);
      Sj(a);
      Tj(a);
    }),
    og(
      "Suggestion",
      "Google Tag Manager",
      "Multiple installations of Google Tag Manager detected",
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags",
      function (a) {
        return 1 < Fe(a, ["Google Tag Manager"]).length;
      }
    ),
    J(
      og(
        "Suggestion",
        "Google Tag Manager",
        "Consolidate your tags with Google Tag Manager.",
        "http://support.google.com/tagmanager/",
        function (a) {
          if (!ve(a, "Google Tag Manager").length) {
            var b = [];
            Qe(a, Oj, function (c) {
              "Tag" == c.type && -1 == b.indexOf(c.category) && b.push(c.category);
            });
            return 1 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#consolidate_gtm"
    )
  ];
};
Zg(new Nj());
var Uj = function () {
  S.call(this, "Google Analytics", 2);
};
q(Uj, S);
var Vj = /\/collect$/,
  Wj = /\/__utm.gif/,
  Xj = [];
Xj[5] = ["Category", "Action", "Label", "Value"];
Xj[14] = ["Category", "Variable", "Time", "Label", "Sample Rate"];
var Yj = [];
Yj[5] = /(?:\d*\([^)]*\))*5\(([^)]*)\)(?:\(([^)]*)\))*/;
Yj[14] = /(?:\d*\([^)]*\))*14\((?:[0-9]*!)?([^)]*)\)/;
var Zj = [];
Zj[5] = "Event";
Zj[14] = "Page Load";
var ak = { 1: " (visitor)", 2: " (session)", 3: " (page)" },
  bk = v("%s ${%s}", "Google Analytics", "Web Property ID"),
  ck = ["utmac", "tid"],
  dk = ["utme"],
  ek = [" N/A ", "an"],
  fk = [" N/A ", "aid"],
  gk = [" N/A ", "aiid"],
  hk = [" N/A ", "av"],
  ik = ["utmtci"],
  jk = ["utmtco"],
  kk = ["utmtrg"],
  lk = ["utmcct", "cc"],
  mk = [" N/A ", "ci"],
  nk = ["utmctr", "ck"],
  ok = ["utmcmd", "cm"],
  pk = ["utmccn", "cn"],
  qk = ["utmcsr", "cns"],
  rk = ["utmiva", "iv"],
  sk = [" N/A ", "cu"],
  tk = [" N/A ", "dl"],
  uk = [" N/A ", "ea"],
  vk = [" N/A ", "ec"],
  wk = [" N/A ", "el"],
  xk = ["utmni", "ni"],
  yk = [" N/A ", "ev"],
  zk = [" N/A ", "exd"],
  Ak = [" N/A ", "exf"],
  Bk = [" N/A ", "xid"],
  Ck = [" N/A ", "xvar"],
  Dk = ["utmt", "t"],
  Ek = ["utmip", "uip"],
  Fk = [" N/A ", "linkid"],
  Gk = ["utmipc", "ic"],
  Hk = ["utmipn", "in"],
  Ik = ["utmipr", "ip"],
  Jk = ["utmiqt", "iq"],
  Kk = ["utmn", "z"],
  Lk = ["utmr", "dr"],
  Mk = [" N/A ", "cd"],
  Nk = ["utmsa", "sa"],
  Ok = ["utmsn", "sn"],
  Pk = ["utmsid", "st"],
  Qk = ["utmtsp", "ts"],
  Rk = ["utmtst", "ta"],
  Sk = ["utmttx", "tt"],
  Tk = ["utmdt", "dt"],
  Uk = [" N/A ", "utc"],
  Vk = [" N/A ", "utl"],
  Wk = [" N/A ", "utt"],
  Xk = [" N/A ", "utv"],
  Yk = [" N/A ", "dns"],
  Zk = [" N/A ", "pdt"],
  $k = [" N/A ", "rrt"],
  al = [" N/A ", "tcp"],
  bl = [" N/A ", "srt"],
  cl = ["utmtto", "tr"],
  dl = ["utmp", "dp"],
  el = ["utmtid", "ti"],
  fl = [" N/A ", "tf"],
  gl = [" N/A ", "ua"],
  hl = ["utmvid", "uid"],
  il = ["utmwv", "v"],
  jl = function (a) {
    return (C("Google Analytics-" + a) || {}).level || "STANDARD";
  },
  nl = function (a, b) {
    b = T(dk, b);
    var c = pd(Yj[a], b);
    if (0 < c.length) {
      b = c[1].split("*");
      var d = Xj[a].slice(0, b.length);
      c = c[2];
      void 0 !== c && (b.push(c), (a = Xj[a]), d.push(a[a.length - 1]));
      a = this.l ? this.l : 0;
      if (a < b.length) return (this.l = a + 1), (this.text = nd(d[a])), nd(b[a]);
    }
    return (this.l = !1);
  },
  ol = function (a, b) {
    var c = a.l ? a.l : 0;
    b = N(b);
    var d = y(/utme=(?:\d*\([^)]*\))*11\(([^)]*)\)/, b.j.toString()),
      e = {};
    d &&
      Wa(d.split("*"), function (u) {
        u = u.split("!");
        2 == u.length && (e[u[0]] = u[1]);
      });
    if ((d = pd(/utme=(?:\d*\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, b.j.toString())) && 3 == d.length) {
      b = d[1].split("*");
      d = d[2].split("*");
      for (var f = [], g = 0, h = 0; h < b.length; h++) {
        g++;
        if (h < d.length) {
          var k = y(/([0-9]{1,2})!/, b[h]),
            m = y(/([0-9]{1,2})!/, d[h]);
          k && k == m && ((g = parseInt(k, 10)), (b[h] = b[h].substring(k.length + 1)), (d[h] = d[h].substring(m.length + 1)));
        }
        f.push(g);
      }
      if (c < b.length)
        return (a.l = c + 1), (a.text = "Custom Variable " + f[c]), nd(b[c]) + ": " + nd(d[c]) + (e[f[c]] ? ak[e[f[c]]] : "");
    }
    return (a.l = !1);
  },
  pl = function (a, b, c, d) {
    d = N(d);
    var e = pd(b, d.j.toString());
    c.l = b.lastIndex;
    return e ? ((c.text = a + " " + e[2]), (a = Sc(d, e[1])), void 0 !== a ? a : !1) : !1;
  },
  T = function (a, b) {
    var c = N(b);
    a = a[x(Wj, c.o) ? 0 : 1];
    b = Sc(N(b), a);
    b = void 0 !== b ? b : !1;
    try {
      if ("string" === typeof b) return decodeURIComponent(b);
    } catch (d) {}
    return b;
  },
  ql = J(
    K(
      L(
        Wf("Custom Variables", function (a) {
          a = T(dk, a);
          a = (a = pd(/(?:\d+\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a)) && 3 == a.length ? a[1].split("*").length : 0;
          return 0 < a ? "" + a : !1;
        }),
        "Custom Variables"
      ),
      [
        K(
          M("Custom Variable", function (a) {
            return ol(this, a);
          }),
          [
            Bf("The total combined length of any custom variable name and value may not exceed 128 characters.", function (a) {
              return 130 < a.label.length;
            })
          ]
        ),
        I(
          Bf("More than 5 custom variables are used.", function (a) {
            return "STANDARD" == jl(Te(a).label) && 5 < parseInt(a.label, 10);
          }),
          "Google Analytics Premium accounts have 50 custom variables available."
        )
      ]
    ),
    "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
  ),
  rl = {},
  U = function (a) {
    var b = rl[a];
    b ||
      ((b = J(
        Bf("Parameter for %s is too long (max %s).", function (c) {
          for (var d = c.label, e = [], f = 0; f < d.length; ++f) e.push(d.charCodeAt(f));
          return e.length > a ? ((this.text = v("Parameter for %s is too long (max %s).", c.text, a)), !0) : !1;
        }),
        "https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters"
      )),
      (rl[a] = b));
    return b;
  },
  sl = function () {
    var a = /(cd(\d+))=/g,
      b = /(cm(\d+))=/g;
    return J(
      K(
        L(
          Wf("Custom Metrics", function (c) {
            c = N(c).j.xa().filter(p(x, /cd\d+/)).length;
            return 0 < c ? "" + c : !1;
          }),
          "Custom Metrics"
        ),
        [
          K(
            M("Custom Dimension", function (c) {
              return pl("Custom Dimension", a, this, c);
            }),
            [U(150)]
          ),
          K(
            M("Custom Metric", function (c) {
              return pl("Custom Metric", b, this, c);
            }),
            [
              F("%s must be a number.", function (c) {
                return Fd(c.label) || Gd(c.label) ? !1 : c.text;
              })
            ]
          ),
          Bf("More than 20 custom variables are used.", function (c) {
            return "STANDARD" == jl(Te(c).label) && 20 < parseInt(c.label, 10);
          })
        ]
      ),
      "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
    );
  },
  tl = K(
    G("Web Property ID", function (a) {
      C("Google Analytics-" + a.label)
        ? ((this.infoLink = C("Google Analytics-" + a.label).url), (this.valueFormat = "linked"))
        : (this.valueFormat = "copyable");
      return a.label || "not set";
    }),
    [
      J(
        F("Leading or trailing whitespace in ID", function (a) {
          var b = void 0 !== a.label ? zd([/^\s+[^ ]/, /[^ ]\s+$/], a.label) : !0;
          b && (a.parent.label = Mb(a.label));
          return b;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#whitespace"
      ),
      J(
        F("Invalid or missing web property ID", function (a) {
          return void 0 !== a.label ? !x(/^\s*(?:UA|YT|MO)-\d{4,10}-\d+\s*$/, a.label) : !0;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_property"
      )
    ]
  ),
  ul = function (a, b) {
    return Of(V(a, b), "Fine");
  },
  V = function (a, b) {
    return M(a, p(T, b));
  },
  vl = function (a) {
    a = bg(a).j.get("gclid");
    return void 0 !== a ? a + "" : !1;
  },
  Il = function (a, b) {
    var c = [
      V("Element ID", Fk),
      ql,
      sl(),
      P,
      K(V("Title", Tk), [U(1500)]),
      K(Of(H(V("Document location URL", tk), "link_expandable"), "Hidden"), [U(2048)]),
      H(K(V("Tracked page", dl), [U(2048)]), "link_expandable")
    ];
    return K(
      O("Google Analytics", [b], bk, "https://support.google.com/analytics/answer/1008080", function (d) {
        var e = N(d);
        return (x(Vj, e.o) || x(Wj, e.o)) && (T(ck, d) || "");
      }),
      [
        tl,
        M("Pixel Version/Syntax", function () {
          return wl.ba.J == a && a;
        }),
        M("Code Version/Syntax", function (d, e) {
          return z(RegExp("google-analytics.com/(?:.*/)?collect"), d)
            ? wl.Fa.J
            : z(RegExp("stats.g.doubleclick.net/(?:.*/)?__utm.gif"), d)
            ? wl.ba.J
            : z(RegExp("google-analytics.com/(?:.*/)?__utm.gif"), d) &&
              D(e, "Protocol version number") &&
              y(/1\.*/, D(e, "Protocol version number").label)
            ? wl.uc.J
            : !1;
        }),
        Wf("Found GTM parameter in tracking url", function (d) {
          return d.uri.j.get("gtm") || !1;
        }),
        K(M("Adwords auto-tagging detected", vl), [
          J(
            Bf("Auto-tagging detected is not set up correctly", uf.prototype.Nc),
            "https://support.google.com/analytics/answer/2938246"
          ).otherwise(
            I(
              J(
                Uf("Adwords auto-tagging mismatch", function (d, e) {
                  if ((d = d.redirects)) {
                    e = e.label;
                    for (var f, g = 1; (f = d[g]); g++) if ((f = w(f).j.get("gclid")) && f != e) return !0;
                  }
                  return !1;
                }),
                "https://support.google.com/analytics/answer/2938246"
              ),
              "The gclid from initial request does not match the gclid in the final URL."
            )
          )
        ]).otherwise(
          I(
            J(
              Uf("Adwords auto-tagging missing", function (d) {
                if ((d = d.redirects)) for (; (d = d[1]); ) return (d = w(d).j.get("gclid")) ? d + "" : !1;
                return !1;
              }),
              "https://support.google.com/analytics/answer/2938246"
            ),
            "The initial request had a gclid parameter, but it is not detected in the final URL."
          )
        ),
        L(
          M(
            "Campaign Data",
            function (d) {
              d = T(dl, d);
              d = (!!d && d.match(/(utm_\w+=[\w|\d]*)/g)) || [];
              return 0 < d.length ? d.join(";") : !1;
            },
            "map"
          ),
          "Campaign Data"
        ),
        K(H(ul("Referral", Lk), "link_expandable"), [U(2048)]),
        K(ul("Protocol version number", il), [U(100)]),
        K(V("Screen name / content description", Mk), [U(2048)]),
        ul("User ID", hl),
        K(V("Experiment ID", Bk), [U(40)]),
        V("Experiment Variant", Ck),
        ul("User Agent override", gl),
        ul("IP Address override", Ek),
        L(K(V("Campaign Data", pk), [U(100)]), "Campaign Data"),
        L(K(V("Campaign Data", qk), [U(100)]), "Campaign Data"),
        L(K(V("Campaign Medium", ok), [U(50)]), "Campaign Data"),
        L(K(V("Campaign Keyword", nk), [U(500)]), "Campaign Data"),
        L(K(V("Campaign Content", lk), [U(500)]), "Campaign Data"),
        L(K(V("Campaign ID", mk), [U(100)]), "Campaign Data"),
        xl("Page Load", "Time ${bucketIndex}: ${Category} - ${Variable}", 14, c).otherwise(
          xl("Events", "Event ${bucketIndex}: ${Category} - ${Action}", 5, c).otherwise(
            yl(c).otherwise(
              zl(c).otherwise(
                Al(c).otherwise(Bl(c).otherwise(Cl(c).otherwise(Dl(c).otherwise(El(c).otherwise(Fl(c).otherwise(Gl(c).otherwise(Hl(c))))))))
              )
            )
          )
        ),
        J($f, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#non_standard")
      ]
    );
  },
  El = function (a) {
    return dg(
      "App / Screen Tracking",
      v("${%s}", "App name"),
      function (b) {
        return "screenview" == T(Dk, b) ? T(fk, b) || "" : !1;
      },
      [
        K(V("App name", ek), [U(100)]),
        K(V("App ID", fk), [U(150)]),
        K(V("App installer ID", gk), [U(150)]),
        K(V("App Version", hk), [U(100)])
      ].concat(a)
    );
  },
  yl = function (a) {
    return dg(
      "Events",
      v("Event ${bucketIndex} ${%s} - ${%s}", "Category", "Action"),
      function (b) {
        var c = N(b);
        L(this, "Event");
        return x(Vj, c.o) && "event" == T(Dk, b) ? "" + T(vk, b) + T(uk, b) + (T(wk, b) || "") : !1;
      },
      [
        K(V("Category", vk), [U(150)]),
        K(V("Action", uk), [U(500)]),
        K(V("Label", wk), [U(500)]),
        V("Value", yk),
        M("Non-Interaction", function (b) {
          return T(xk, b) ? "Yes" : "No";
        })
      ].concat(a)
    );
  },
  zl = function (a) {
    return dg(
      "Exceptions",
      "Exception ${bucketIndex}",
      function (b) {
        return "exception" == T(Dk, b);
      },
      [
        K(V("Description", zk), [
          U(150),
          Uf("Tracked a fatal exception", function (b) {
            return "1" == T(Ak, b);
          }).otherwise(Xf("Tracked a non-fatal exception"))
        ]),
        V("Is Fatal", Ak)
      ].concat(a)
    );
  },
  Bl = function (a) {
    return dg(
      "Pageview Requests",
      "Pageview ${bucketIndex}",
      function (b) {
        b = T(Dk, b);
        return "pageview" == b || !b;
      },
      a,
      function (b) {
        return T(Kk, b) || !0;
      }
    );
  },
  Hl = function (a) {
    return dg(
      "Other Requests",
      "Other Requests ${bucketIndex}",
      function (b) {
        return T(Dk, b);
      },
      [K(V("Hit Type", Dk), a)]
    );
  },
  Cl = function (a) {
    return dg(
      "Social",
      v("${%s}: ${%s}", "Action", "Network"),
      function (b) {
        return "social" == T(Dk, b) && T(Pk, b);
      },
      [K(V("Action", Nk), [U(50)]), K(V("Network", Ok), [U(50)]), K(V("Target", Pk), [U(2048)])].concat(a)
    );
  },
  Dl = function (a) {
    return dg(
      "Timings",
      v("${%s}: ${%s}", "Category", "Variable"),
      function (b) {
        return "timing" == T(Dk, b) ? T(Wk, b) : !1;
      },
      [
        K(V("Category", Uk), [U(150)]),
        K(V("Variable", Xk), [U(500)]),
        V("Time", Wk),
        K(V("Label", Vk), [U(500)]),
        V("DNS load time", Yk),
        V("Page download time", Zk),
        V("Redirect time", $k),
        V("TCP connect time", al),
        V("Server response time", bl)
      ].concat(a)
    );
  },
  Al = function (a) {
    return dg(
      "Keep Alive",
      "Keep Alive ${bucketIndex}",
      function (b) {
        return "dc" == T(Dk, b);
      },
      a
    );
  },
  Fl = function (a) {
    return K(
      H(
        Mf(Sf("Transaction %s"), function (b) {
          var c = w(b.url),
            d = T(Dk, b);
          return !x(Wj, c.o) || ("tran" != d && "transaction" != d) ? !1 : T(el, b);
        }),
        "group_status"
      ),
      [
        K(
          H(Mf(Rf("Total"), p(T, cl)), "value_status"),
          [
            K(V("Transaction ID", el), [U(500)]),
            K(V("Affiliation", fl), [U(500)]),
            V("Affiliation or Store name", Rk),
            V("Total", cl).otherwise(F("Missing total amount.")),
            V("Tax", Sk),
            V("Shipping cost", Qk),
            V("Billing City", ik),
            V("Billing region", kk),
            V("Billing Country", jk)
          ].concat(a)
        )
      ]
    );
  },
  Gl = function (a) {
    return K(
      H(
        Mf(Sf("Transaction %s"), function (b) {
          var c = w(b.url);
          return x(Wj, c.o) && "item" == T(Dk, b) ? T(el, b) : !1;
        }),
        "group_status"
      ),
      [
        K(
          H(
            Mf(Rf("Item %s"), function (b) {
              this.text = "Item " + T(Gk, b);
              return T(Ik, b);
            }),
            "value_status"
          ),
          [
            V("Affiliation or Store name", Rk),
            K(V("SKU / Code", Gk), [U(500)]).otherwise(F("Missing SKU/code.")),
            V("Product Name", Hk),
            K(V("Category or variation", rk), [U(500)]),
            V("Unit price", Ik).otherwise(F("Missing unit price.")),
            V("Quantity", Jk).otherwise(F("Missing quantity.")),
            K(V("Currency Code", sk), [U(10)])
          ].concat(a)
        )
      ]
    );
  },
  xl = function (a, b, c, d) {
    return dg(
      a,
      b,
      function (e) {
        L(this, Zj[c]);
        var f = N(e);
        return x(Wj, f.o) && "event" == T(Dk, e) && x(Yj[c], T(dk, e) || "");
      },
      [L(M("Parameter", p(nl, c)), Zj[c])].concat(d)
    );
  };
Uj.prototype.K = function () {
  return [
    Il("Any", "google-analytics.com/"),
    Il(wl.ba.J, "stats.g.doubleclick.net/"),
    O(
      "Google Analytics",
      "google-analytics.com/",
      "Google Analytics Script",
      "https://support.google.com/analytics/answer/1008080",
      function (a) {
        return !!z(/((?:ga|dc|analytics)(?:_debug)?.js)/, a);
      },
      "",
      [
        L(
          M("GA Detected", function (a) {
            return !!z(/((?:ga|dc|analytics).js)/, a);
          }),
          "URLs"
        ).i(P),
        L(
          M("GA Debug Detected", function (a) {
            return !!z(/((?:ga|dc|analytics)(?:_debug).js)/, a);
          }),
          "URLs"
        ).i(P)
      ]
    )
  ];
};
var Jl = J(
    wf("Suggestion", "Google Analytics", "Consider update to the async version"),
    "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#update_async"
  ),
  wl = {
    Fa: {
      J: "Universal",
      Ac: function (a) {
        return yd(
          [
            /create/i,
            /displayfeatures/i,
            new RegExp(
              wl.Fa.ka[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']displayfeatures["']/.source,
              "gi"
            )
          ],
          a.textContent
        )
          ? "Universal with Display Features"
          : yd(
              [
                /create/i,
                /adfeatures/i,
                new RegExp(
                  wl.Fa.ka[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']adfeatures["']/.source,
                  "gi"
                )
              ],
              a.textContent
            )
          ? "Universal with Ad Features"
          : wl.Fa.J;
      },
      link: "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
      ea: "google-analytics.com/analytics.js",
      Ra: [],
      ka: [/create/i, /["'](?:[a-zA-Z_0-9]*\.)*create["'],\s*["'](UA-[^"']*)["']/gi],
      Qa: function () {
        return J(
          K(
            zg("Universal analytics statements", function (a) {
              return (this.l = a = Ad(a.textContent, this.l)) && y(gj, a.text) ? a.text : !1;
            }),
            [vj()]
          ),
          "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
        );
      }
    },
    qc: {
      J: "Asynchronous",
      link: "https://support.google.com/analytics/answer/1008080",
      ea: "google-analytics.com/ga.js",
      Ra: [],
      ka: [/setAccount/i, /\[\s*["'](?:[a-zA-Z_0-9]*\.)?_?setAccount["']\s*,\s*["']([^"']*)["']/gi],
      Tc: ["stats.g.doubleclick.net/dc.js", ".wysistat.com", ".rejoiner.com"],
      Qa: p(Mj, "async")
    },
    cg: {
      J: "Synchronous",
      link: "https://support.google.com/analytics/answer/1012283",
      ea: "google-analytics.com/ga.js",
      ka: [/_getTracker/i, /_gat._getTracker\(["']([^"']*)["']\)/gi],
      Ra: [Jl],
      Qa: p(Mj, "sync")
    },
    uc: {
      J: "Urchin",
      link: "https://support.google.com/analytics/answer/1008080",
      ea: "google-analytics.com/urchin.js",
      ka: [/(?:^|window.| )_uacct/gim, /_uacct = ["']([^"']*)["'];/gim],
      Ra: [Jl],
      Qa: function () {
        return G("Statements", lb);
      }
    },
    ba: {
      J: "Remarketing",
      link: "https://support.google.com/analytics/answer/2444872",
      ea: "stats.g.doubleclick.net/dc.js",
      Ra: [],
      ka: [/_setAccount/i, /["'](?:[a-zA-Z_0-9]*\.)*_setAccount["'],\s*["']([^"']*)["']/gi, /stats\.g\.doubleclick\.net\/dc\.js/],
      Qa: p(Mj, "async")
    }
  },
  Kl = function (a) {
    var b = [
      tl,
      K(xg("Code Version/Syntax", "function" === typeof a.Ac ? a.Ac : kb(a.J)), a.Ra),
      G("Level", function (c) {
        return (C("Google Analytics-" + c.label) || {}).label || !1;
      }),
      Jg.clone(),
      L(
        xg(
          "Code Snippet",
          function (c) {
            return Ig(this, a.ka[1].lastIndex, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ).i(
        J(Dg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#iframe"),
        J(
          R("Missing closing \x3c/script> tag.", function (c) {
            return y(/<\/html>(.|\n)*$/m, c.textContent);
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_closing"
        ),
        J(
          J(
            R("Missing %s script", function (c) {
              return 0 === c ? a.ea.substring(a.ea.indexOf("/") + 1) : !1;
            }),
            "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_ga"
          ),
          "https://support.google.com/analytics/answer/1008083"
        ),
        J(
          Cg("Code found outside of <head> tag", function (c) {
            return !!c.parentNode && "HEAD" != c.parentNode.nodeName;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#move_head"
        ),
        a.Qa(),
        J(Eg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#external_file"),
        Fg
      ),
      L(
        yf("Cookies", function (c) {
          c = (c = D(c, "Code Version/Syntax")) && 0 == c.label.indexOf("Universal") ? "_ga" : "__utm";
          this.l || (this.l = Q.cookie.split(/; */));
          if (0 == this.l.length) return (this.l = null), !1;
          var d = this.l.pop().split("=");
          return 0 == d[0].indexOf(c) ? ((this.text = d[0]), d[1]) : !1;
        }),
        "Cookies"
      )
    ];
    return K(
      Mg("Google Analytics", bk, a.link, "//script", function (c) {
        var d = yd(a.ka, c.textContent);
        this.l = c.textContent.length && a.ka[1].lastIndex;
        return "_setCustomVar" == d ||
          (d &&
            a.Tc &&
            Za(a.Tc, function (e) {
              return 0 <= c.textContent.indexOf(e);
            }))
          ? !1
          : d;
      }),
      b
    );
  },
  Ll = function (a) {
    var b = Ce(a.relatedIssues, ["Code Version/Syntax"]);
    b.length &&
      Ee(a.relatedIssues).forEach(function (c) {
        re(c, "Code Version/Syntax", b[0].label);
      });
  },
  Ml = function (a) {
    Ae(a, "Pixel Version/Syntax").forEach(function (b) {
      var c = D(b, "Pixel Version/Syntax"),
        d = le(b, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]);
      if (c && c.label == wl.ba.J && !d && (c = Oe(a, b.label)) && "Google Analytics" == c.category) {
        if ((d = D(c, "Code Version/Syntax"))) (d.label = wl.ba.J), (c.infoLink = "https://support.google.com/analytics/answer/2444872");
        pe(b.relatedIssues, "Pixel Version/Syntax");
        pe(c.relatedIssues, "Missing ga.js script");
      }
    });
  },
  Nl = function (a) {
    Ce(a, ["_gat global object"]).forEach(function (b) {
      var c = D(b, "_getTracker") || D(b, "_createTracker");
      c &&
        ((c = y(/["']*([^"',]+)/, c.label)),
        "string" === typeof c && ((c = Be(a, c)), c.length && (cb(a, b), new fe(c[0], b, void 0, void 0))));
    });
  };
Uj.prototype.qa = function () {
  return [
    qg("Google Analytics", function (a) {
      var b = ve(a, "Google Analytics");
      b.forEach(function (d) {
        "Tag" == d.type &&
          (le(d, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]) &&
            (re(d, "Code Version/Syntax", wl.Fa.J), re(d, "Code Version/Syntax", wl.ba.J)),
          Ll(d),
          Ne(d, 2) && qe(d.relatedIssues, ["Missing ga.js script", "Missing dc.js script", "Missing urchin.js script"]));
      });
      var c = b.filter(function (d) {
        return "Google Analytics Script" != d.text;
      });
      Ng(a, c);
      ze(c, 4).length && pe(a, "No Google Analytics HTTP responses because opted out code detected.", !0);
      Ml(b);
      Nl(a);
      Ce(b, ["Google Analytics Script"]).forEach(function (d) {
        0 < Ke(d.relatedIssues).length || oe(a, d, "Nothing to report");
      });
    }),
    og(
      "Suggestion",
      "Google Analytics",
      "Multiple Google Analytics tags detected",
      "https://support.google.com/analytics/answer/1032400",
      function (a) {
        var b = Fe(a, ["Google Analytics"]),
          c = b.length,
          d = Ce(b, ["Google Analytics Script"]),
          e = Ae(b, "Code Version/Syntax", wl.ba.J),
          f = Ae(b, "Code Version/Syntax", wl.Fa.J),
          g = Ae(b, "Code Version/Syntax", "Universal with Display Features"),
          h = Ae(b, "Code Version/Syntax", "Universal with Ad Features");
        c -= d.length;
        c -= f.length;
        c -= h.length;
        c -= g.length;
        c -= e.length;
        (a = D(a, "Detected more than one script containing _gaq and _gat variables.")) && a.label == c && (a.deduped = !0);
        return Ue(b) ? !1 : 1 < f.length || 1 < h.length || 1 < g.length || 1 < e.length || 1 < c;
      }
    ),
    og(
      "Warning",
      "Google Analytics",
      "Same web property ID is tracked twice.",
      "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples",
      function (a) {
        a = Fe(a, ["Google Analytics"]);
        a = jb(a, function (b) {
          return b.label;
        });
        return tb(
          a,
          function (b) {
            return Za(
              b,
              function (c) {
                var d = {},
                  e = D(c, "Pageview Requests");
                if (e) {
                  e = Je([e], "Tag");
                  for (var f, g = 0; (f = e[g]); g++) {
                    var h = D(f, "requestId");
                    h && !d[h.label] && (d[h.label] = [c, f]);
                  }
                }
                e = Object.keys(d);
                if (1 < e.length) {
                  e.sort();
                  h = g = f = null;
                  for (var k = [], m, u = 0; (m = e[u]); u++) {
                    c = d[m][0];
                    var E = d[m][1],
                      W = D(E, "Document location URL");
                    m = W ? W.label : "";
                    E = (W = D(E, "Tracked page")) ? W.label : "";
                    if (m == g && E == h)
                      if (f == c) -1 == k.indexOf(c) && (k.push(c), new fe(c, this, void 0, void 0));
                      else return !0;
                    g = m;
                    h = E;
                    f = c;
                  }
                }
                return !1;
              },
              this
            );
          },
          this
        );
      }
    ),
    J(
      og("Suggestion", "Google Analytics", "Add Google Analytics", "https://support.google.com/analytics/answer/1008080", function (a) {
        return 0 == Fe(a, ["Google Analytics", "Google Tag Manager"]);
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#add_ga"
    ),
    I(
      og("Warning", "Google Analytics", "Tag not fired through GTM", "https://support.google.com/tagmanager/answer/6103683", function (a) {
        a = Fe(a, ["Google Analytics"]);
        Wa(
          a,
          function (b) {
            var c = !!D(b, "Implemented in Google Tag Manager"),
              d = !!D(b, "Found GTM parameter in tracking url");
            c && !d && new fe(b, this, void 0, void 0);
          },
          this
        );
        return !1;
      }),
      "Although it seems that the tag is included in GTM, this request was originated from a differnet snippet. Please check your code."
    )
  ];
};
Uj.prototype.H = function () {
  var a = [];
  sb(
    wl,
    function (b) {
      a.push(Kl(b));
    },
    this
  );
  eb(a, [
    J(
      new tg(
        "Warning",
        "Google Analytics",
        "No Google Analytics HTTP responses because opted out code detected.",
        "https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh",
        "//script",
        function (b) {
          return self === top && !b.externalScript && 'window["_gaUserPrefs"] = { ioo : function() { return true; } }' == b.textContent;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#opted_out"
    ),
    J(
      new tg(
        "Error",
        "Google Analytics",
        "Detected both ga.js and dc.js scripts which will make tracking ambiguous.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Ya(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(wl.qc.ea);
            });
            b = Ya(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(wl.ba.ea);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_dc"
    ),
    J(
      new tg(
        "Error",
        "Google Analytics",
        "Detected both ga.js and urchin.js scripts which can cause reporting errors.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Ya(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(wl.qc.ea);
            });
            b = Ya(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(wl.uc.ea);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_urchin"
    ),
    new tg(
      "Warning",
      "Google Analytics",
      "Detected more than one script containing _gaq and _gat variables.",
      "https://support.google.com/analytics/answer/1009683",
      void 0,
      function (b) {
        return b.scripts
          ? ((b = $a(
              b.scripts,
              function (c) {
                var d = c.textContent && c.textContent.match(/(?:$|[. \t])_ga[qt]\s*=/);
                this.infoLink = c.src;
                return d;
              },
              this
            )),
            1 < b ? b.toString() : !1)
          : !1;
      }
    ),
    K(
      L(
        new tg(
          "Hidden",
          "Google Analytics",
          "_gat global object",
          "https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat",
          "//script",
          function (b) {
            return y(/(?:^|[ ,;]|window\.)_gat\./g, b.textContent);
          }
        ),
        "_gat global object"
      ),
      [
        Fg,
        xg(
          "Code Snippet",
          function (b) {
            return Ig(this, b.textContent.indexOf("_gat"), b);
          },
          "snippet_js"
        ).i(Cj())
      ]
    )
  ]);
  return a;
};
Zg(new Uj());
function Ol() {
  return bc ? !!ic && !!ic.platform : !1;
}
function Pl() {
  return t("iPhone") && !t("iPod") && !t("iPad");
}
function Ql() {
  return Ol() ? "macOS" === ic.platform : t("Macintosh");
}
var Rl = Ql(),
  Sl = Ol() ? "Windows" === ic.platform : t("Windows"),
  Tl = Ol() ? "Android" === ic.platform : t("Android"),
  Ul = Pl(),
  Vl = t("iPad"),
  Wl = t("iPod");
var X = function (a) {
    return Xl(document, a);
  },
  Xl = function (a, b) {
    return "string" === typeof b ? a.getElementById(b) : b;
  },
  Zl = function () {
    var a = document;
    return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".log-source") : Yl("*", "log-source");
  },
  Yl = function (a, b) {
    var c = a && "*" != a ? String(a).toUpperCase() : "";
    if (document.querySelectorAll && document.querySelector && (c || b)) return document.querySelectorAll(c + (b ? "." + b : ""));
    if (b && document.getElementsByClassName) {
      a = document.getElementsByClassName(b);
      if (c) {
        for (var d = {}, e = 0, f = 0, g; (g = a[f]); f++) c == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    a = document.getElementsByTagName(c || "*");
    if (b) {
      d = {};
      for (f = e = 0; (g = a[f]); f++) (c = g.className), "function" == typeof c.split && bb(c.split(/\s+/), b) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return a;
  },
  $l = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  },
  am = function (a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!xa(f) || (ya(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ya(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Wa(g ? db(f) : f, d);
      }
    }
  },
  bm = function (a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  },
  cm = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  },
  dm = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  },
  em = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  },
  fm = function (a) {
    r(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  },
  gm = function (a, b) {
    r(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(r(a.lastChild));
      a.firstChild.data = String(b);
    } else {
      cm(a);
      var c = fm(a);
      a.appendChild(c.createTextNode(String(b)));
    }
  },
  hm = function (a, b) {
    b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
  },
  im = function (a) {
    return a.hasAttribute("tabindex");
  },
  jm = function (a) {
    a = a.tabIndex;
    return "number" === typeof a && 0 <= a && 32768 > a;
  },
  km = function (a, b) {
    a && (a = a.parentNode);
    for (var c = 0; a; ) {
      r("parentNode" != a.name);
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  },
  lm = function (a) {
    this.Ha = a || n.document || document;
  };
l = lm.prototype;
l.u = function (a) {
  return Xl(this.Ha, a);
};
l.$ = lm.prototype.u;
l.getElementsByTagName = function (a, b) {
  return (b || this.Ha).getElementsByTagName(String(a));
};
l.setProperties = function (a, b) {
  sb(b, function (c, d) {
    c && "object" == typeof c && c.Aa && (c = c.ya());
    "style" == d
      ? (a.style.cssText = c)
      : "class" == d
      ? (a.className = c)
      : "for" == d
      ? (a.htmlFor = c)
      : $l.hasOwnProperty(d)
      ? a.setAttribute($l[d], c)
      : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
      ? a.setAttribute(d, c)
      : (a[d] = c);
  });
};
l.createElement = function (a) {
  return bm(this.Ha, a);
};
l.createTextNode = function (a) {
  return this.Ha.createTextNode(String(a));
};
l.appendChild = function (a, b) {
  r(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
  a.appendChild(b);
};
l.append = function (a, b) {
  am(fm(a), a, arguments);
};
l.canHaveChildren = function (a) {
  if (1 != a.nodeType) return !1;
  switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1;
  }
  return !0;
};
l.removeNode = dm;
l.getChildren = function (a) {
  return void 0 != a.children
    ? a.children
    : Array.prototype.filter.call(a.childNodes, function (b) {
        return 1 == b.nodeType;
      });
};
l.isElement = function (a) {
  return ya(a) && 1 == a.nodeType;
};
l.isWindow = function (a) {
  return ya(a) && a.window == a;
};
l.contains = em;
l.Tb = function (a) {
  return ("A" == a.tagName && a.hasAttribute("href")) ||
    "INPUT" == a.tagName ||
    "TEXTAREA" == a.tagName ||
    "SELECT" == a.tagName ||
    "BUTTON" == a.tagName
    ? !a.disabled && (!im(a) || jm(a))
    : im(a) && jm(a);
};
var mm = function () {
  S.call(this, "Google Publisher Tag", 100);
  this.W = "Google Publisher Tag";
  this.L = ["pubads.g.doubleclick.net/"];
};
ra(mm, S);
var om = function () {
    var a = [
      G("Document ID", p(Ff, /(['"]div[^)]+['"]?)[)]/)),
      G("Accepted sizes", p(Ff, /,\s*(\[?(?:\[\s*\d+\s*,\s*\d+\s*\]\s*,?\s*)+\]?)\s*,/)),
      G("Out of page", p(Ff, /defineOutOfPageSlot/))
    ];
    return Lg("Ad Slots", v("AdSlot ${%s}", "Document ID"), a, nm);
  },
  nm = function (a) {
    var b = pm;
    a = y(b, a.textContent);
    this.l = b.lastIndex;
    return a;
  };
mm.prototype.H = function () {
  return [
    K(
      Mg(
        "Google Publisher Tag",
        v("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        '//script[contains(text(), "googletag")]',
        function (a) {
          return !!a.textContent && y(/googletag\s*.\s*define(?:OutOfPage)?Slot\(\s*["']\/(\d+)\//g, a.textContent);
        }
      ),
      [qm, Hg(), om()]
    )
  ];
};
mm.prototype.K = function () {
  return [
    H(
      O(
        "Google Publisher Tag",
        "pubads.g.doubleclick.net/",
        v("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        function (a) {
          var b = Sc(N(a), "iu_parts");
          return !!b && z(/pubads.g.doubleclick.net\/gampad\/ads/, a) && y(/(\d+)/, b);
        },
        "",
        [qm, P]
      ),
      "unchecked"
    )
  ];
};
var pm = /googletag.(define(?:OutOfPage)?Slot\(.*?\))/g,
  qm = H(
    G("Network ID", function (a) {
      for (var b = C("GooglePublisherConsole"), c = Yl("DIV"), d = 0, e; (e = c[d]); d++)
        y(/google_pubconsole/, e.id) && (e.style.display = b ? "block" : "none");
      return a.label || "not set";
    }),
    "copyable"
  );
Zg(new mm());
var rm = function () {
  S.call(this, "Krux SuperTag", 99);
  this.W = "Krux SuperTag";
  this.L = ["cdn.krxd.net/"];
  this.isActive = mb;
  this.H = kb([]);
};
q(rm, S);
var sm = H(
  G("Configuration ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
rm.prototype.K = function () {
  return [
    O(
      "Krux SuperTag",
      "cdn.krxd.net/",
      "Krux SuperTag",
      "http://www.krux.com/",
      function (a) {
        return (a = w(a.url).j.get("confid")) ? a + "" : !1;
      },
      "unchecked",
      [sm, P]
    )
  ];
};
Zg(new rm());
var tm = function () {
  S.call(this, "Opentag", 99);
  this.W = "Opentag";
  this.L = ["cloudfront.net/"];
  this.isActive = mb;
  this.H = kb([]);
};
ra(tm, S);
tm.prototype.K = function () {
  return [O("Opentag", "cloudfront.net/", "Opentag", "http://www.opentag.com/", p(z, /(opentag-[^.]*)\.js/i), "unchecked", [um, P])];
};
var um = H(
  G("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Zg(new tm());
var vm = function () {
  S.call(this, "Tagcommander", 99);
  this.W = "Tagcommander";
  this.L = ["cdn.tagcommander.com"];
  this.isActive = mb;
  this.H = kb([]);
};
ra(vm, S);
vm.prototype.K = function () {
  return [
    O(
      "Tagcommander",
      "cdn.tagcommander.com",
      "Tagcommander",
      "http://www.tagcommander.com/",
      function (a) {
        return w(a.url).o;
      },
      "unchecked",
      [wm, P]
    )
  ];
};
var wm = H(
  G("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Zg(new vm());
var xm = function () {
  S.call(this, "TagMan", 99);
  this.W = "TagMan";
  this.L = ["levexis.com/"];
  this.isActive = mb;
  this.H = kb([]);
};
ra(xm, S);
xm.prototype.K = function () {
  return [O("TagMan", "levexis.com/", "TagMan", "http://www.tagman.com/", p(z, /levexis\.com\/([^\/]*)\/tman.cgi/), "unchecked", [ym, P])];
};
var ym = G("Account", function (a) {
  return a.label || "not set";
});
Zg(new xm());
var zm = function () {
  S.call(this, "Tealium", 99);
  this.W = "Tealium";
  this.L = ["tiqcdn.com/"];
  this.isActive = mb;
  this.H = kb([]);
};
ra(zm, S);
zm.prototype.K = function () {
  return [O("Tealium", "tiqcdn.com/", "Tealium", "http://www.tealium.com/", p(z, /utag\/([^\/]+)\//i), "unchecked", [Am, P])];
};
var Am = H(
  G("Account", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Zg(new zm());
var Bm = function () {
  S.call(this, "Google Trusted Stores", 99);
};
ra(Bm, S);
var Cm = function (a, b, c) {
    return (c ? xg : Ag)(a, function (d) {
      return y(
        new RegExp("\\.push\\s*\\(\\s*(?:\\[[^\\]]*\\]\\s*,\\s*)*\\[\\s*[\"']?" + b + "[\"']?\\s*,\\s*[\"']?([^'\")]+)[\"']?\\s*\\]", "g"),
        d.textContent
      );
    });
  },
  Dm = function (a) {
    var b = "Remove the elements below:\n";
    a.forEach(function (c) {
      b = b + c + "\n";
    });
    return b;
  },
  Em = function (a, b, c) {
    c = c ? "class" : "id";
    a = (a || document).getElementsByTagName("SPAN");
    for (var d = 0; d < a.length; d++) {
      var e = a[d].getAttribute(c);
      if (e && e === b) return a[d];
    }
  },
  Fm = function (a, b, c, d, e, f, g, h) {
    f = void 0 !== f ? f : "is incorrect";
    g = void 0 !== g ? g : "";
    h = void 0 !== h ? h : "";
    return I(
      J(
        R(v('%s is missing in the order confirmation module: "%s"', a, b), function (k) {
          return void 0 === Em(k, b, e);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + g
      ),
      v('Provide the Merchant Order %s in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.', a, b)
    ).otherwise(
      J(
        I(
          R(v('"%s" %s', b, f), function (k) {
            k = Em(k, b, e);
            return !x(c, k.textContent);
          }),
          v(
            'Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s',
            a,
            b,
            d
          )
        ),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + h
      )
    );
  },
  Gm = function (a, b, c, d, e, f) {
    e = void 0 !== e ? e : "";
    f = void 0 !== f ? f : "";
    return I(
      J(
        Cg(v('%s is missing in the order confirmation module: "%s"', a, b), function (g) {
          return void 0 === Em(g, b, !0);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + e
      ),
      v(
        'Provide the language associated with the account used to submit product data feeds to Google Shopping, in the "%s" field.\nThis is a recommended but optional field. This field does not affect core functionality, and leaving this warning unresolved will not prevent you from entering the monitoring period. However, merchants using Google Shopping should correct these errors to ensure proper integration. This integration will allow Google to more easily correlate specific products to data that you have provided in connection with Google Trusted Stores. If you have chosen to leave out this field, you may disregard this warning.',
        b
      )
    ).otherwise(
      J(
        I(
          R(v('"%s" %s', b, "is incorrect"), function (g) {
            g = Em(g, b, !0);
            return !x(c, g.textContent);
          }),
          v(
            'Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s',
            a,
            b,
            d
          )
        ),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + f
      )
    );
  };
Bm.prototype.qa = function () {
  return [
    I(
      og(
        "Error",
        "Google Trusted Stores",
        "Order confirmation page is not in https",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (a) {
          var b = D(a, cg.text);
          a = D(a, "gts-order-id");
          return b && a ? ((b.type = "Hidden"), !0) : !1;
        }
      ),
      "Implement the order confirmation page in https.\nMerchants must provide a secure way for customers to purchase products online. Thus, merchants must use https when transmitting customer information or financial data, including on order confirmation, order history and order status pages."
    )
  ];
};
Bm.prototype.K = function () {
  return [
    K(
      O(
        "Google Trusted Stores",
        "googlecommerce.com/trustedstores/",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (a) {
          return w(a.url).j.get("id");
        }
      ),
      [
        Hm,
        fg("Google Shopping Account ID", "base_sid"),
        $f,
        P,
        Wf("file check response issue handle", function (a) {
          a = a.documentUrl;
          return void 0 !== a ? a : !1;
        })
      ]
    )
  ];
};
Bm.prototype.H = function () {
  return [
    K(
      Mg(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//script[contains(text(), "google_base")]',
        function (a) {
          return y(/gts\.push\s*\(\s*\[\s*['"]?id['"]?\s*,\s*['"]?([^'"\]]*)/g, a.textContent);
        }
      ),
      [
        Hm,
        I(
          J(
            R("Class name conflicts for class %s", function (a) {
              var b = a.getAttribute("class");
              return km(a, function (c) {
                var d = c.getAttribute ? c.getAttribute("class") : "";
                return (c.id && bb(["gtrust_badges", "gts-f-w", "gts-order"], c.id)) || Im(d);
              })
                ? !1
                : Im(b);
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#class_conflict"
          ),
          'Remove the "gts-" for any class names defined for CSS styles. The "gts-" prefix is used by Google Trusted Stores, and such class names in the page may cause conflicts with the Google Trusted Stores JavaScript code. Please update your CSS to use another name. You must avoid using "gts-" for any class names defined for CSS styles in the page.'
        ),
        K(H(Cm("Google Shopping Item ID", "google_base_offer_id"), "copyable"), [
          F("Google Shopping Item ID should be an alphanumeric.", function (a) {
            return !x(/^\w[\s\w]+$/, a.label);
          })
        ]).otherwise(
          I(
            Af("Google Shopping Item ID is missing."),
            'Provide the Google Shopping Item ID in the "google_base_offer_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        K(H(Cm("Google Shopping Account ID", "google_base_subaccount_id"), "copyable"), [
          I(
            Df('Incorrect format: "google_base_subaccount_id"'),
            'Update the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code. The Google Shopping Account ID typically follows this format: "[0-9]+".  The Google Shopping Account ID provided appears to not match this format.'
          )
        ]).otherwise(
          I(
            F("Google Shopping Account ID is missing.", function (a) {
              this.type = D(a, "Google Shopping Item ID") ? "Error" : "Suggestion";
              return !0;
            }),
            'Provide the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        Cm("Google Base Country", "google_base_country", !0),
        Cm("Google Base Language", "google_base_language", !0),
        Cm("Container", "gtsContainer", !0),
        L(
          R("Missing closing \x3c/script> tag.", function (a) {
            return y(/<\/html>\s*$/m, a.textContent);
          }),
          "Code Snippet"
        ),
        Ag("Old script found.", function () {
          return !!ab(Q.scripts, function (a) {
            return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js");
          });
        }),
        L(
          Ag("Script found.", function () {
            return !!ab(Q.scripts, function (a) {
              return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js");
            });
          }),
          "Code Snippet"
        ),
        L(
          R("Missing script", function () {
            return !ab(Q.scripts, function (a) {
              return (
                !!a.src &&
                (0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js") ||
                  0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js"))
              );
            });
          }),
          "Code Snippet"
        ),
        L(
          I(
            J(
              R("JavaScript is implemented more than once on the page.", function (a) {
                return 1 < a;
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#js_page"
            ),
            "The Trusted Stores JavaScript code must be implemented exactly once on each page. Remove all but one of the implementations of the Trusted Stores JavaScript code on this page."
          ),
          "Code Snippet"
        ),
        L(
          J(
            Cg("Code found outside of <body> tag", function (a) {
              return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#outside_body"
          ),
          "Code Snippet"
        ),
        L(
          J(
            R("<script> tag must not be included in a <%s>", function (a) {
              return a.parentNode
                ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase()
                : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#script_html"
          ),
          "Code Snippet"
        ),
        Dg,
        Eg,
        Fg,
        I(
          L(
            J(
              R("Missing DOCTYPE on the page.", function (a) {
                return self === top && !a.externalScript && "html" != Q.childNodes[0].name;
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#missing_doctype"
            ),
            "Code Snippet"
          ),
          'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
        ).otherwise(
          L(
            I(
              J(
                R("Incorrect DOCTYPE on the page.", function (a) {
                  return self === top && !a.externalScript && "" != Q.childNodes[0].publicId && "" == Q.childNodes[0].systemId;
                }),
                "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#incorrect_doctype"
              ),
              'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
            ),
            "Code Snippet"
          )
        ),
        zg("robots.txt file check dom issue handle"),
        Jg
      ]
    ),
    K(
      Mg(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//div[contains(@id, "gts-order")]'
      ),
      [
        Jm,
        J(
          I(
            R("Item level details of the order confirmation module are missing", function (a) {
              return void 0 === Em(a, "gts-item", !0);
            }),
            'Provide the item level details associated with the order in the "gts-item" fields of the Google Trusted Stores Order Confirmation JavaScript code.  The gts-item fields include:  gts-i-name; gts-i-price; gts-i-quantity; gts-i-prodsearch-id; gts-i-prodsearch-store-id; gts-i-prodsearch-country; gts-i-prodsearch-language; etc'
          ),
          "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#item_details"
        ),
        K(zg("Google Trusted Stores"), [
          Jm,
          J(
            R("Unknown fields specified in the item level details of the order confirmation module", function (a) {
              var b = [];
              a = a.getElementsByTagName("span");
              for (var c = 0, d; (d = a[c]); c++) (d = d.getAttribute("class")) && !bb(Km, d) && b.push(d);
              I(this, Dm(b));
              return 0 != b.length;
            }),
            "https://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894&topic=2609888&ctx=topic"
          ),
          Fm("Item name", "gts-i-name", /\w+.*/, "", !0),
          Fm("Item price", "gts-i-price", /^\d+(\.\d+)?$/, 'Required format: "123.45"', !0, void 0, "", "gts_price"),
          Fm("Item quantity", "gts-i-quantity", /^\d+$/, 'Required format: "123"', !0, void 0, "", "gts_quantity"),
          Gm("Google Shopping Item ID", "gts-i-prodsearch-id", /\w+.*/, "", "shopping_item", "gts_prodsearch_id"),
          Gm(
            "Google Shopping Account ID",
            "gts-i-prodsearch-store-id",
            /^\d+$/,
            'Required format: "123"',
            "shopping_account",
            "gts_prodsearch_store"
          ),
          Gm(
            "Google Shopping Country ID",
            "gts-i-prodsearch-country",
            /^[A-Z]{2}$/,
            'Required format: "US" (ISO3166',
            "shopping_country",
            "gts_prodsearch_country"
          ),
          Gm(
            "Google Shopping Language ID",
            "gts-i-prodsearch-language",
            /^[a-z]{2}$/,
            'Required format: "en" (ISO639-1)',
            "shopping_language",
            "gts_prodsearch_language"
          ),
          K(
            zg("Google Trusted Stores", function (a) {
              return void 0 !== Em(a, "gts-i-prodsearch-id", !0);
            }),
            [Fm("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', !0)]
          )
        ]),
        I(
          J(
            R("Order confirmation module is implemented more than once", function (a) {
              return 1 < a;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#order_more"
          ),
          "The Trusted Stores Order Confirmation Javascript code must be implemented exactly once on the order confirmation page.  Remove any duplicate implementations of the code."
        ),
        Fm("Domain", "gts-o-domain", /^([\w\d]+\.)+\w+$/, 'Required format: "www.mystore.com"', void 0, void 0, "", "gts_domain"),
        Fm("Customer email", "gts-o-email", /^([\w]+\.?)+@\w+\.\w+$/, 'Required format: "user@email.com"', void 0, void 0, "", "gts_email"),
        Fm(
          "Customer country",
          "gts-o-country",
          /^[A-Z]{2}$/,
          'Required format: ISO3166 (example: "US")',
          void 0,
          void 0,
          "",
          "gts_country"
        ),
        Fm("Currency", "gts-o-currency", /^[A-Z]{3}$/, 'Required format: ISO4217 (example: "USD")'),
        Fm("Total", "gts-o-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        Fm("Discounts", "gts-o-discounts", /^\-?\d+(\.\d+)?$/, 'Required format: "-123.45"'),
        Fm("Shipping total", "gts-o-shipping-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        Fm("Tax total", "gts-o-tax-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"', void 0, void 0, "", "gts_tax"),
        Fm("Estimated shipping date", "gts-o-est-ship-date", /^\d{4}-\d{2}-\d{2}$/, 'Required format: "YYYY-MM-DD"'),
        Fm("Preorder", "gts-o-has-preorder", /^[YN]$/, 'Required format: "Y" or "N"'),
        Fm("Digital", "gts-o-has-digital", /^[YN]$/, 'Required format: "Y" or "N"'),
        Fm("ID", "gts-o-id", /^[\w-]+$/, "", !1, "should be alphanumeric")
      ]
    )
  ];
};
var Km =
    "gts-i-name gts-i-price gts-i-quantity gts-i-prodsearch-id gts-i-prodsearch-store-id gts-i-prodsearch-country gts-i-prodsearch-language".split(
      " "
    ),
  Hm = K(
    H(
      G("Google Shopping ID", function (a) {
        return a.label || "not set";
      }),
      "copyable"
    ),
    [J(Df("Invalid or missing account ID"), "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#invalid_id")]
  ),
  Jm = H(
    G("gts-order-id", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  Im = p(y, /(?:^| )(gts\-[^ ]*)/);
Zg(new Bm());
var Lm = J(
    H(
      G("Container ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  Mm = J(
    Af("Anti-flicker snippet timed out too fast", function (a) {
      a = parseInt(a.label, 10);
      return !isNaN(a) && 1e3 >= a;
    }),
    "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-timeout"
  ),
  Nm = zf("Async Hide DataLayer Name", function (a) {
    return y(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*["']([^']+)["']\s*,\s*(\d+)\s*,\s*{\s*['"]([^"']+)['"]/m, a.label, 4);
  }).i([
    J(
      R("DataLayer variable name mismatch", function (a, b) {
        (a = w(a.getAttribute("src")).j.get("l")) || (a = "dataLayer");
        return a != b.label;
      }),
      "https://support.google.com/optimize/answer/7577190#datalayer-variable-name-mismatch"
    )
  ]),
  Om = H(
    L(
      G("Anti-flicker snippet timeout", function (a) {
        return y(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,\s*{'([^']+)'/, a.label, 5);
      }),
      "Metadata"
    ),
    "copyable"
  ).i([Mm]),
  Pm = Ag("Anti-flicker snippet", function (a) {
    this.format = "";
    return a.textContent;
  }).i([
    Nm,
    Om,
    J(
      Bg("Anti-flicker snippet not in HEAD", function (a) {
        return "HEAD" != a.parentNode.nodeName ? !0 : !1;
      }),
      "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-not-in-head"
    )
  ]),
  Qm = function () {
    S.call(this, "Google Optimize", 99);
    this.L = ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"];
  };
ra(Qm, S);
Qm.prototype.K = function () {
  var a = void 0 === a ? !1 : a;
  return ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"].map(function (b) {
    return K(
      O(
        "Google Optimize",
        b,
        v("%s ${%s}", "Google Optimize", "Container ID"),
        "https://support.google.com/360suite/optimize/answer/6211921",
        function (c) {
          return w(c.url).j.get("id");
        }
      ),
      a ? [] : [Lm, Of(hg(), "Fine")]
    );
  });
};
Qm.prototype.H = function () {
  var a = Hg();
  a.i(Pm);
  return [
    Mg(
      "Google Optimize",
      v("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.google-analytics.com/gtm/js?id=")]',
      function (b) {
        return y(/gtm\/js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).i([
      Lm,
      a,
      zg("GA Tracker Name", function (b) {
        b = w(b.getAttribute("src"));
        return b.j.get("cid") ? ((b = b.j.get("t")) ? b : "t0") : !1;
      }),
      J(
        R("Legacy Optimize snippet", function (b) {
          return "sync" == w(b.getAttribute("src")).j.get("m");
        }),
        "https://support.google.com/optimize/answer/7577190#legacy-optimize-snippet"
      )
    ]),
    Mg(
      "Google Optimize",
      v("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.googleoptimize.com/optimize.js?id=")]',
      function (b) {
        return y(/optimize.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).i([
      Lm,
      Ag("Synchronous", function (b) {
        return b.hasAttribute("async") ? "No" : "Yes";
      }),
      a
    ])
  ];
};
Zg(new Qm());
var Rm = function (a) {
  S.call(this, a.tagName, a.priority);
  this.definition = a;
  this.L = a.L;
};
ra(Rm, S);
Rm.prototype.K = function () {
  return this.definition.Sb.map(function (a) {
    return "function" == typeof a ? a(void 0) : a;
  });
};
Rm.prototype.H = function () {
  return this.definition.Kb;
};
Rm.prototype.qa = function () {
  return this.definition.Ib;
};
Rm.prototype.Lb = function () {
  return this.definition.Od;
};
var Sm = K(
    J(
      H(
        G("Account ID", function (a) {
          this.format = "";
          return a.label || "not set";
        }),
        "copyable"
      ),
      ""
    ),
    [
      J(
        Af("Invalid or missing account ID", function (a) {
          return !zd([/^GTM-[0-9A-Z]{4,7}$/, /^UA-[^"']*$/, /^AW-[^"']*$/, /^DC-[^"']*$/], a.label);
        }),
        "https://support.google.com/tagassistant/answer/7548655#account_id"
      )
    ]
  ),
  Tm = J($f, "https://support.google.com/tagassistant/answer/7548655#nonstandard"),
  Um = Of(hg(), "Fine"),
  Vm,
  Wm = {
    type: "Error",
    category: "Global site tag (gtag.js)",
    text: "Invalid call to gtag(), the Global site snippet is not installed",
    opt_infoLink: "https://support.google.com/tagassistant/answer/7548655#commands_without_snippet"
  };
Vm = new Og(Wm.type, Wm.category, Wm.text, Wm.opt_infoLink, Wm.opt_function, Wm.opt_format);
Vm.Ca = function (a) {
  if (a.nodeType != Node.DOCUMENT_NODE) return !1;
  a = a.documentElement.textContent;
  return y(/gtag\('/m, a) && !y(/function gtag\([^)]*\)/m, a) ? !0 : !1;
};
var Xm = Mg(
  "Global site tag (gtag.js)",
  v("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
  "https://support.google.com/tagassistant/answer/7548655",
  '//script[not(contains(@src,"&cx=")) and contains(@src, "www.googletagmanager.com/gtag/js?id=")]',
  function (a) {
    return y(/gtag\/js[?]id=([^=&]*)/, a.getAttribute("src"));
  }
).i(Sm);
function Ym(a) {
  Ce(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
    b.infoLink = "https://support.google.com/tagassistant/answer/7548655#http_response";
  });
}
function Zm(a) {
  a = Ie(a);
  a.length &&
    a.forEach(function (b) {
      b.type = "Warning";
      b.text += ". This could be due to an empty or un-published container";
    });
}
var $m = qg("Global site tag (gtag.js)", function (a) {
    a = Fe(a, ["Global site tag (gtag.js)"]);
    Ym(a);
    Zm(a);
  }),
  an = og(
    "Suggestion",
    "Global site tag (gtag.js)",
    "Multiple installations of Global site tag (gtag.js) detected",
    "https://support.google.com/tagassistant/answer/7548655#multiple_tags",
    function (a) {
      a = Fe(a, ["Global site tag (gtag.js)"]);
      return 1 < ze(a, 1).length;
    }
  ),
  bn = new (function () {
    this.tagName = "Default Tag Name";
    this.priority = 99;
    this.Sb = [];
    this.Kb = [];
    this.Ib = [];
    this.Od = [];
    this.L = null;
  })();
bn.tagName = "Global site tag (gtag.js)";
bn.priority = 30;
bn.L = ["www.googletagmanager.com/gtag/js"];
bn.Sb = [
  function (a) {
    return K(
      O(
        "Global site tag (gtag.js)",
        "www.googletagmanager.com/gtag/js",
        v("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
        "https://support.google.com/tagassistant/answer/7548655",
        function (b) {
          return w(b.url).j.get("id");
        }
      ),
      a ? [] : [Sm, Tm, Um]
    );
  }
];
bn.Kb = [Vm, Xm];
bn.Ib = [$m, an];
Zg(new Rm(bn));
var cn = function (a) {
    return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
  },
  dn = function (a) {
    return a.classList ? a.classList : cn(a).match(/\S+/g) || [];
  },
  en = function (a, b) {
    "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
  },
  fn = function (a, b) {
    return a.classList ? a.classList.contains(b) : bb(dn(a), b);
  },
  gn = function (a, b) {
    if (a.classList) a.classList.add(b);
    else if (!fn(a, b)) {
      var c = cn(a);
      en(a, c + (0 < c.length ? " " + b : b));
    }
  },
  hn = function (a, b) {
    if (a.classList)
      Array.prototype.forEach.call(b, function (e) {
        gn(a, e);
      });
    else {
      var c = {};
      Array.prototype.forEach.call(dn(a), function (e) {
        c[e] = !0;
      });
      Array.prototype.forEach.call(b, function (e) {
        c[e] = !0;
      });
      b = "";
      for (var d in c) b += 0 < b.length ? " " + d : d;
      en(a, b);
    }
  },
  jn = function (a, b) {
    a.classList
      ? a.classList.remove(b)
      : fn(a, b) &&
        en(
          a,
          Array.prototype.filter
            .call(dn(a), function (c) {
              return c != b;
            })
            .join(" ")
        );
  },
  kn = function (a, b) {
    a.classList
      ? Array.prototype.forEach.call(b, function (c) {
          jn(a, c);
        })
      : en(
          a,
          Array.prototype.filter
            .call(dn(a), function (c) {
              return !bb(b, c);
            })
            .join(" ")
        );
  },
  ln = function (a, b) {
    b ? gn(a, "jfk-button-clear-outline") : jn(a, "jfk-button-clear-outline");
  };
var mn = function () {
  this.Jb = this.Jb;
};
mn.prototype.Jb = !1;
var nn = function (a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Xa = !1;
};
nn.prototype.stopPropagation = function () {
  this.Xa = !0;
};
nn.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var on = "PointerEvent" in n,
  pn = (function () {
    if (!n.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      n.addEventListener("test", c, b);
      n.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
var rn = function (a, b) {
  nn.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Yb = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.pa = null;
  if (a) {
    var c = (this.type = a.type),
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    b = a.relatedTarget;
    b || ("mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement));
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = a.offsetX),
        (this.offsetY = a.offsetY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Yb = Rl ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : qn[a.pointerType] || "";
    this.state = a.state;
    this.pa = a;
    a.defaultPrevented && rn.G.preventDefault.call(this);
  }
};
q(rn, nn);
var qn = Xc({ 2: "touch", 3: "pen", 4: "mouse" });
rn.prototype.stopPropagation = function () {
  rn.G.stopPropagation.call(this);
  this.pa.stopPropagation ? this.pa.stopPropagation() : (this.pa.cancelBubble = !0);
};
rn.prototype.preventDefault = function () {
  rn.G.preventDefault.call(this);
  var a = this.pa;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var sn = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  tn = function (a) {
    return !(!a || !a[sn]);
  };
var un = 0;
var vn = function (a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.mb = e;
    this.key = ++un;
    this.removed = this.ab = !1;
  },
  wn = function (a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.mb = null;
  };
var xn = function (a) {
  this.src = a;
  this.T = {};
  this.Za = 0;
};
xn.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.T[f];
  a || ((a = this.T[f] = []), this.Za++);
  var g = yn(a, b, d, e);
  -1 < g ? ((b = a[g]), c || (b.ab = !1)) : ((b = new vn(b, this.src, f, !!d, e)), (b.ab = c), a.push(b));
  return b;
};
xn.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.T)) return !1;
  var e = this.T[a];
  b = yn(e, b, c, d);
  return -1 < b
    ? (wn(e[b]), r(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.T[a], this.Za--), !0)
    : !1;
};
var zn = function (a, b) {
  var c = b.type;
  c in a.T && cb(a.T[c], b) && (wn(b), 0 == a.T[c].length && (delete a.T[c], a.Za--));
};
xn.prototype.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.T)
    if (!a || c == a) {
      for (var d = this.T[c], e = 0; e < d.length; e++) ++b, wn(d[e]);
      delete this.T[c];
      this.Za--;
    }
  return b;
};
xn.prototype.Ua = function (a, b, c, d) {
  a = this.T[a.toString()];
  var e = -1;
  a && (e = yn(a, b, c, d));
  return -1 < e ? a[e] : null;
};
xn.prototype.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return tb(this.T, function (f) {
    for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
    return !1;
  });
};
var yn = function (a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.mb == d) return e;
  }
  return -1;
};
var An = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Bn = {},
  Cn = 0,
  Y = function (a, b, c, d, e) {
    if (d && d.once) return Dn(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) Y(a, b[f], c, d, e);
      return null;
    }
    c = En(c);
    return tn(a) ? a.listen(b, c, ya(d) ? !!d.capture : !!d, e) : Fn(a, b, c, !1, d, e);
  },
  Fn = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = ya(e) ? !!e.capture : !!e,
      h = Gn(a);
    h || (a[An] = h = new xn(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = Hn();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) pn || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(In(b.toString()), d);
    else if (a.addListener && a.removeListener) r("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Cn++;
    return c;
  },
  Hn = function () {
    var a = Jn,
      b = function (c) {
        return a.call(b.src, b.listener, c);
      };
    return b;
  },
  Dn = function (a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) Dn(a, b[f], c, d, e);
      return null;
    }
    c = En(c);
    return tn(a) ? a.Pc(b, c, ya(d) ? !!d.capture : !!d, e) : Fn(a, b, c, !0, d, e);
  },
  Kn = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Kn(a, b[f], c, d, e);
    else (d = ya(d) ? !!d.capture : !!d), (c = En(c)), tn(a) ? a.ma(b, c, d, e) : a && (a = Gn(a)) && (b = a.Ua(b, c, d, e)) && Ln(b);
  },
  Ln = function (a) {
    if ("number" !== typeof a && a && !a.removed) {
      var b = a.src;
      if (tn(b)) zn(b.ha, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(In(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        Cn--;
        (c = Gn(b)) ? (zn(c, a), 0 == c.Za && ((c.src = null), (b[An] = null))) : wn(a);
      }
    }
  },
  In = function (a) {
    return a in Bn ? Bn[a] : (Bn[a] = "on" + a);
  },
  Jn = function (a, b) {
    if (a.removed) a = !0;
    else {
      b = new rn(b, this);
      var c = a.listener,
        d = a.mb || a.src;
      a.ab && Ln(a);
      a = c.call(d, b);
    }
    return a;
  },
  Gn = function (a) {
    a = a[An];
    return a instanceof xn ? a : null;
  },
  Mn = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
  En = function (a) {
    r(a, "Listener can not be null.");
    if ("function" === typeof a) return a;
    r(a.handleEvent, "An object listener must have handleEvent method.");
    a[Mn] ||
      (a[Mn] = function (b) {
        return a.handleEvent(b);
      });
    return a[Mn];
  };
var Nn = function (a) {
  mn.call(this);
  this.Rb = a;
  this.La = {};
};
q(Nn, mn);
var On = [];
Nn.prototype.listen = function (a, b, c, d) {
  Array.isArray(b) || (b && (On[0] = b.toString()), (b = On));
  for (var e = 0; e < b.length; e++) {
    var f = Y(a, b[e], c || this.handleEvent, d || !1, this.Rb || this);
    if (!f) break;
    this.La[f.key] = f;
  }
  return this;
};
Nn.prototype.Pc = function (a, b, c, d) {
  return Pn(this, a, b, c, d);
};
var Pn = function (a, b, c, d, e, f) {
  if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Pn(a, b, c[g], d, e, f);
  else {
    b = Dn(b, c, d || a.handleEvent, e, f || a.Rb || a);
    if (!b) return a;
    a.La[b.key] = b;
  }
  return a;
};
Nn.prototype.ma = function (a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.ma(a, b[f], c, d, e);
  else
    (c = c || this.handleEvent),
      (d = ya(d) ? !!d.capture : !!d),
      (e = e || this.Rb || this),
      (c = En(c)),
      (d = !!d),
      (b = tn(a) ? a.Ua(b, c, d, e) : a ? ((a = Gn(a)) ? a.Ua(b, c, d, e) : null) : null),
      b && (Ln(b), delete this.La[b.key]);
  return this;
};
Nn.prototype.removeAll = function () {
  sb(
    this.La,
    function (a, b) {
      this.La.hasOwnProperty(b) && Ln(a);
    },
    this
  );
  this.La = {};
};
Nn.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
var Qn = function () {
  mn.call(this);
  this.ha = new xn(this);
  this.Nd = this;
  this.Xb = null;
};
q(Qn, mn);
Qn.prototype[sn] = !0;
l = Qn.prototype;
l.jc = function (a) {
  this.Xb = a;
};
l.addEventListener = function (a, b, c, d) {
  Y(this, a, b, c, d);
};
l.removeEventListener = function (a, b, c, d) {
  Kn(this, a, b, c, d);
};
l.dispatchEvent = function (a) {
  Rn(this);
  var b = this.Xb;
  if (b) {
    var c = [];
    for (var d = 1; b; b = b.Xb) c.push(b), r(1e3 > ++d, "infinite loop");
  }
  b = this.Nd;
  d = a.type || a;
  if ("string" === typeof a) a = new nn(a, b);
  else if (a instanceof nn) a.target = a.target || b;
  else {
    var e = a;
    a = new nn(d, b);
    xb(a, e);
  }
  e = !0;
  if (c)
    for (var f = c.length - 1; !a.Xa && 0 <= f; f--) {
      var g = (a.currentTarget = c[f]);
      e = Sn(g, d, !0, a) && e;
    }
  a.Xa || ((g = a.currentTarget = b), (e = Sn(g, d, !0, a) && e), a.Xa || (e = Sn(g, d, !1, a) && e));
  if (c) for (f = 0; !a.Xa && f < c.length; f++) (g = a.currentTarget = c[f]), (e = Sn(g, d, !1, a) && e);
  return e;
};
l.listen = function (a, b, c, d) {
  Rn(this);
  return this.ha.add(String(a), b, !1, c, d);
};
l.Pc = function (a, b, c, d) {
  return this.ha.add(String(a), b, !0, c, d);
};
l.ma = function (a, b, c, d) {
  return this.ha.remove(String(a), b, c, d);
};
var Sn = function (a, b, c, d) {
  b = a.ha.T[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.removed && g.capture == c) {
      var h = g.listener,
        k = g.mb || g.src;
      g.ab && zn(a.ha, g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && !d.defaultPrevented;
};
Qn.prototype.Ua = function (a, b, c, d) {
  return this.ha.Ua(String(a), b, c, d);
};
Qn.prototype.hasListener = function (a, b) {
  return this.ha.hasListener(void 0 !== a ? String(a) : void 0, b);
};
var Rn = function (a) {
  r(a.ha, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var Tn = {
  zb: "mousedown",
  Ab: "mouseup",
  yb: "mousecancel",
  wd: "mousemove",
  yd: "mouseover",
  xd: "mouseout",
  ud: "mouseenter",
  vd: "mouseleave"
};
var Un = {
  zb: on ? "pointerdown" : "mousedown",
  Ab: on ? "pointerup" : "mouseup",
  yb: on ? "pointercancel" : "mousecancel",
  wd: on ? "pointermove" : "mousemove",
  yd: on ? "pointerover" : "mouseover",
  xd: on ? "pointerout" : "mouseout",
  ud: on ? "pointerenter" : "mouseenter",
  vd: on ? "pointerleave" : "mouseleave"
}; /*

 SPDX-License-Identifier: Apache-2.0
*/
var Vn = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var Wn = {};
var Xn = function () {},
  Yn = function (a, b) {
    if (b !== Wn) throw Error("Bad secret");
    this.ge = a;
  };
ra(Yn, Xn);
Yn.prototype.toString = function () {
  return this.ge;
};
var Zn = ha([""]),
  $n = ia(["\x00"], ["\\0"]),
  ao = ia(["\n"], ["\\n"]),
  bo = ia(["\x00"], ["\\u0000"]),
  co = ha([""]),
  eo = ia(["\x00"], ["\\0"]),
  fo = ia(["\n"], ["\\n"]),
  go = ia(["\x00"], ["\\u0000"]);
function ho(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!io && a === a.raw) ||
    !((io && !jo) || ko(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function ko(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function lo(a) {
  return -1 === a.toString().indexOf("`");
}
var io =
    lo(function (a) {
      return a(Zn);
    }) ||
    lo(function (a) {
      return a($n);
    }) ||
    lo(function (a) {
      return a(ao);
    }) ||
    lo(function (a) {
      return a(bo);
    }),
  jo = ko(co) && ko(eo) && ko(fo) && ko(go);
function mo(a) {
  ho(a, 0);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  Vn.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  new Yn(b, Wn);
}
var no = [],
  oo = function (a) {
    var b = id(jd(), "safevalues").be;
    if (b) {
      var c = "A URL with content '" + a + "' was sanitized away.",
        d = $c;
      if ((a = b))
        if ((a = b && d)) {
          a = d.value;
          var e = b ? fd(id(jd(), b.Ob())) : Zc;
          a = a >= e.value;
        }
      if (a) {
        d = d || Zc;
        a = id(jd(), b.Ob());
        "function" === typeof c && (c = c());
        cd || (cd = new bd());
        e = cd;
        b = b.Ob();
        if (0 < e.bb) {
          var f = (e.Dc + 1) % e.bb;
          e.Dc = f;
          e.Oc ? ((e = e.zc[f]), e.reset(d, c, b), (b = e)) : ((e.Oc = f == e.bb - 1), (b = e.zc[f] = new dd(d, c, b)));
        } else b = new dd(d, c, b);
        a.publish(b);
      }
    }
  };
-1 === no.indexOf(oo) && no.push(oo);
function po(a) {
  var b = sa.apply(1, arguments);
  ho(a, b.length);
  if (0 === b.length) return Jb(a[0]);
  var c = a[0].toLowerCase();
  if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
  if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
    var d = c.indexOf("//") + 2;
    var e = c.indexOf("/", d);
    if (e <= d) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
    d = c.substring(d, e);
    if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
    if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
    if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
    d = !0;
  } else d = !1;
  if ((d = !d)) {
    if (/^\//.test(c))
      if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1])) d = !0;
      else throw Error("The path start in the url is invalid.");
    else d = !1;
    d = !d;
  }
  if (d) {
    if (/^about:blank/.test(c)) {
      if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
      c = !0;
    } else c = !1;
    d = !c;
  }
  if (d) throw Error("Trying to interpolate expressions in an unsupported url format.");
  c = a[0];
  for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
  return Jb(c);
}
var qo = { hh: !0 },
  ro = { jh: !0 },
  so = { ih: !0 },
  to = function () {
    throw Error("Do not instantiate directly");
  };
to.prototype.eb = null;
to.prototype.getContent = function () {
  return this.content;
};
to.prototype.toString = function () {
  return this.content;
};
to.prototype.hd = function () {
  if (this.fb !== qo) throw Error("Sanitized content was not of kind HTML.");
  var a = this.toString(),
    b = new Eb(Cb, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
  Na(Fb(b), "must provide justification");
  r(!Lb(Fb(b)), "must provide non-empty justification");
  return rc(a);
};
var uo = function () {
  to.call(this);
};
q(uo, to);
uo.prototype.fb = qo;
var vo = function () {
  to.call(this);
};
q(vo, to);
vo.prototype.fb = ro;
vo.prototype.eb = 1;
var wo = function () {
  to.call(this);
};
q(wo, to);
wo.prototype.fb = so;
wo.prototype.eb = 1; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function xo(a, b, c) {
  if ((b = b(c || yo, void 0)) && b.he && a) b.he(a);
  else {
    a: if (ya(b)) {
      if (b.hd && ((c = b.hd()), c instanceof pc)) {
        b = c;
        break a;
      }
      La("Soy template output is unsafe for use as HTML: " + b);
      b = sc("zSoyz");
    } else b = sc(String(b));
    a = r(a);
    if (uc()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = qc(b);
  }
}
var yo = {};
var zo = function (a, b) {
  a.style.display = b ? "" : "none";
};
var Ao = function () {};
va(Ao);
Ao.prototype.ee = 0;
Ao.prototype.Xd = "";
var Co = function (a) {
  Qn.call(this);
  this.gb = a || Ia || (Ia = new lm());
  this.sb = Bo;
  this.ca = null;
  this.ja = !1;
  this.P = null;
  this.Va = void 0;
  this.Ga = this.Hb = this.sa = null;
  this.Zb = !1;
};
q(Co, Qn);
Co.prototype.Wd = Ao.Ka();
var Bo = null,
  Do = function (a, b) {
    switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close";
    }
    throw Error("Invalid component state");
  },
  Eo = function (a, b) {
    if (a.sa && a.sa.Ga) {
      var c = a.sa.Ga,
        d = a.ca;
      d in c && delete c[d];
      c = a.sa.Ga;
      if (null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
      c[b] = a;
    }
    a.ca = b;
  };
Co.prototype.u = function () {
  return this.P;
};
var Fo = function (a) {
    a = a.P;
    r(a, "Can not call getElementStrict before rendering/decorating.");
    return a;
  },
  Go = function (a) {
    a.Va || (a.Va = new Nn(a));
    return r(a.Va);
  };
l = Co.prototype;
l.getParent = function () {
  return this.sa;
};
l.jc = function (a) {
  if (this.sa && this.sa != a) throw Error("Method not supported");
  Co.G.jc.call(this, a);
};
l.decorate = function (a) {
  if (this.ja) throw Error("Component already rendered");
  if (a && this.Oa(a)) {
    var b = fm(a);
    (this.gb && this.gb.Ha == b) || (this.gb = a ? new lm(fm(a)) : Ia || (Ia = new lm()));
    this.Ec(a);
    this.Ja();
  } else throw Error("Invalid element to decorate");
};
l.Oa = function () {
  return !0;
};
l.Ec = function (a) {
  this.P = a;
};
l.Ja = function () {
  this.ja = !0;
  Ho(this, function (a) {
    !a.ja && a.u() && a.Ja();
  });
};
l.hb = function () {
  Ho(this, function (a) {
    a.ja && a.hb();
  });
  this.Va && this.Va.removeAll();
  this.ja = !1;
};
l.Ta = function () {
  return this.P;
};
l.Na = function (a) {
  if (this.ja) throw Error("Component already rendered");
  this.sb = a;
};
var Ho = function (a, b) {
  a.Hb && a.Hb.forEach(b, void 0);
};
Co.prototype.removeChild = function (a, b) {
  if (a) {
    if ("string" !== typeof a) {
      var c;
      (c = a.ca) || ((c = a), (a = a.Wd), (a = a.Xd + ":" + (a.ee++).toString(36)), (c = c.ca = a));
      a = c;
    }
    c = a;
    this.Ga && c ? ((a = this.Ga), (a = (null !== a && c in a ? a[c] : void 0) || null)) : (a = null);
    if (c && a) {
      var d = this.Ga;
      c in d && delete d[c];
      cb(this.Hb, a);
      b && (a.hb(), a.P && dm(a.P));
      b = a;
      if (null == b) throw Error("Unable to set parent component");
      b.sa = null;
      Co.G.jc.call(b, null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
var Jo = function (a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if ("function" !== typeof b) throw Error("Invalid decorator function " + b);
    Io[a] = b;
  },
  Ko = {},
  Io = {};
var Lo = mc(),
  Mo = Pl() || t("iPod"),
  No = t("iPad"),
  Oo = t("Android") && !(nc() || mc() || (lc() ? 0 : t("Opera")) || t("Silk")),
  Po = nc(),
  Qo =
    t("Safari") &&
    !(
      nc() ||
      (lc() ? 0 : t("Coast")) ||
      (lc() ? 0 : t("Opera")) ||
      (lc() ? 0 : t("Edge")) ||
      (lc() ? kc("Microsoft Edge") : t("Edg/")) ||
      (lc() ? kc("Opera") : t("OPR")) ||
      mc() ||
      t("Silk") ||
      t("Android")
    ) &&
    !(Pl() || t("iPad") || t("iPod"));
r(!0);
var Ro = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
  So = Math,
  To = So.log2,
  Uo = Math.max,
  Vo = Uo.apply,
  Wo = Object.values({ uf: 1, sf: 2, rf: 4, eg: 8, dg: 16, Xf: 32, Fe: 64, Tg: 128, hf: 256, gf: 512, tf: 1024 }),
  Xo;
if (Wo instanceof Array) Xo = Wo;
else {
  for (var Yo = ja(Wo), Zo, $o = []; !(Zo = Yo.next()).done; ) $o.push(Zo.value);
  Xo = $o;
}
r(10 === To.call(So, Vo.call(Uo, Math, Xo)));
var ap = Object.getOwnPropertyDescriptor(Array.prototype, "ae");
Object.defineProperties(Array.prototype, {
  ae: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = bp(this),
        c = [];
      a(1, "IS_REPEATED_FIELD");
      a(2, "IS_IMMUTABLE_ARRAY");
      a(4, "IS_API_FORMATTED");
      a(8, "ONLY_MUTABLE_VALUES");
      a(32, "MUTABLE_REFERENCES_ARE_OWNED");
      a(64, "CONSTRUCTED");
      a(128, "TRANSFERRED");
      a(256, "HAS_SPARSE_OBJECT");
      a(512, "HAS_MESSAGE_ID");
      var d = cp(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return ap ? ap.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var bp = Ro
  ? function (a) {
      Pa(a, "state is only maintained on arrays.");
      return a[Ro] | 0;
    }
  : function (a) {
      Pa(a, "state is only maintained on arrays.");
      return a.gh | 0;
    };
function cp(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var dp = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var ep = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    fp = {};
  Object.defineProperties(dp, ((fp[Symbol.hasInstance] = { value: ep, configurable: !1, writable: !1, enumerable: !1 }), fp));
  r(dp[Symbol.hasInstance] === ep, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var hp = gp;
  new Proxy(
    {},
    {
      getPrototypeOf: hp,
      setPrototypeOf: hp,
      isExtensible: hp,
      preventExtensions: hp,
      getOwnPropertyDescriptor: hp,
      defineProperty: hp,
      has: hp,
      get: hp,
      set: hp,
      deleteProperty: hp,
      apply: hp,
      construct: hp
    }
  );
}
function gp() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function ip() {}
(function () {
  var a = n.jspbGetTypeName;
  n.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : ip;
})();
var jp = function (a, b, c) {
  (b = null != a && a.fb === b) && r(a.constructor === c);
  return b;
};
var kp = function (a) {
    if (null != a)
      switch (a.eb) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  },
  op = function (a) {
    return jp(a, qo, uo)
      ? a
      : a instanceof pc
      ? lp(qc(a).toString())
      : a instanceof pc
      ? lp(qc(a).toString())
      : lp(String(String(a)).replace(mp, np), kp(a));
  },
  lp = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.eb = d);
      return c;
    };
  })(uo),
  pp = {},
  qp = function (a) {
    return a instanceof to ? !!a.getContent() : !!a;
  },
  up = function (a) {
    if (jp(a, qo, uo)) {
      var b = String;
      a = a.getContent();
      a = String(a).replace(rp, "").replace(sp, "&lt;");
      b = b(a).replace(tp, np);
    } else b = String(a).replace(mp, np);
    return b;
  },
  zp = function (a) {
    jp(a, ro, vo) || jp(a, so, wo)
      ? (a = vp(a))
      : a instanceof Wb
      ? (a = vp(Xb(a)))
      : a instanceof Wb
      ? (a = vp(Xb(a)))
      : a instanceof Hb
      ? (a = vp(Ib(a).toString()))
      : a instanceof Hb
      ? (a = vp(Ib(a).toString()))
      : ((a = String(a)),
        wp.test(a) ? (a = a.replace(xp, yp)) : (La("Bad value `%s` for |filterNormalizeUri", [a]), (a = "about:invalid#zSoyz")));
    return a;
  },
  Ap = {},
  Bp = function () {
    r(Ap === Ap, "found an incorrect call marker, was an internal function called from the top level?");
  },
  Cp = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
  },
  np = function (a) {
    return Cp[a];
  },
  Dp = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\v": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
  },
  yp = function (a) {
    return Dp[a];
  },
  mp = /[\x00\x22\x26\x27\x3c\x3e]/g,
  tp = /[\x00\x22\x27\x3c\x3e]/g,
  xp =
    /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
  wp = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
  vp = function (a) {
    return String(a).replace(xp, yp);
  },
  rp = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
  sp = /</g;
(function () {
  if (Sl) {
    var a = /Windows NT ([0-9.]+)/;
    return (a = a.exec(hc())) ? a[1] : "0";
  }
  return Rl
    ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(hc())) ? a[0].replace(/_/g, ".") : "10")
    : Tl
    ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(hc())) ? a[1] : "")
    : Ul || Vl || Wl
    ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(hc())) ? a[1].replace(/_/g, ".") : "")
    : "";
})();
var Ep = function (a) {
  return (a = a.exec(hc())) ? a[1] : "";
};
(function () {
  if (Lo) return Ep(/Firefox\/([0-9.]+)/);
  if (Po) {
    if (Pl() || t("iPad") || t("iPod") || Ql()) {
      var a = Ep(/CriOS\/([0-9.]+)/);
      if (a) return a;
    }
    return Ep(/Chrome\/([0-9.]+)/);
  }
  if (Qo && !(Pl() || t("iPad") || t("iPod"))) return Ep(/Version\/([0-9.]+)/);
  if (Mo || No) {
    if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(hc()))) return a[1] + "." + a[2];
  } else if (Oo) return (a = Ep(/Android\s+([0-9.]+)/)) ? a : Ep(/Version\/([0-9.]+)/);
  return "";
})();
var Fp = {
  le: "activedescendant",
  qe: "atomic",
  re: "autocomplete",
  ve: "busy",
  ze: "checked",
  Be: "colindex",
  Ie: "controls",
  Je: "current",
  Pe: "describedby",
  DISABLED: "disabled",
  Te: "dropeffect",
  Ve: "expanded",
  We: "flowto",
  bf: "grabbed",
  ff: "haspopup",
  kf: "hidden",
  pf: "invalid",
  wf: "label",
  xf: "labelledby",
  zf: "level",
  Ef: "live",
  Vf: "multiline",
  Wf: "multiselectable",
  gg: "orientation",
  hg: "owns",
  ig: "posinset",
  kg: "pressed",
  pg: "readonly",
  tg: "relevant",
  ug: "required",
  yg: "rowindex",
  Ag: "selected",
  Cg: "setsize",
  Hg: "sort",
  Yg: "valuemax",
  Zg: "valuemin",
  ah: "valuenow",
  bh: "valuetext"
};
var Gp;
var Hp = {
  me: "alert",
  ne: "alertdialog",
  oe: "application",
  pe: "article",
  ue: "banner",
  we: "button",
  ye: "checkbox",
  Ce: "columnheader",
  De: "combobox",
  Ee: "complementary",
  Ge: "contentinfo",
  Oe: "definition",
  Qe: "dialog",
  Re: "directory",
  Se: "document",
  Ye: "form",
  cf: "grid",
  df: "gridcell",
  ef: "group",
  jf: "heading",
  nf: "img",
  Af: "link",
  Bf: "list",
  Cf: "listbox",
  Df: "listitem",
  Ff: "log",
  Kf: "main",
  Nf: "marquee",
  Of: "math",
  Pf: "menu",
  Qf: "menubar",
  Rf: "menuitem",
  Sf: "menuitemcheckbox",
  Tf: "menuitemradio",
  Zf: "navigation",
  bg: "note",
  fg: "option",
  jg: "presentation",
  mg: "progressbar",
  ng: "radio",
  og: "radiogroup",
  sg: "region",
  vg: "row",
  wg: "rowgroup",
  xg: "rowheader",
  zg: "scrollbar",
  SEARCH: "search",
  Bg: "separator",
  Gg: "slider",
  Ig: "spinbutton",
  Jg: "status",
  TAB: "tab",
  Lg: "tablist",
  Mg: "tabpanel",
  Ng: "textbox",
  Og: "textinfo",
  Qg: "timer",
  Rg: "toolbar",
  Sg: "tooltip",
  Ug: "tree",
  Vg: "treegrid",
  Wg: "treeitem"
};
zb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var Ip = function (a, b, c) {
  Array.isArray(c) && (c = c.join(" "));
  r(b, "ARIA attribute cannot be empty.");
  r(vb(Fp, b), "No such ARIA attribute " + b);
  var d = "aria-" + b;
  "" === c || void 0 == c
    ? (Gp ||
        ((c = {}),
        (Gp =
          ((c.atomic = !1),
          (c.autocomplete = "none"),
          (c.dropeffect = "none"),
          (c.haspopup = !1),
          (c.live = "off"),
          (c.multiline = !1),
          (c.multiselectable = !1),
          (c.orientation = "vertical"),
          (c.readonly = !1),
          (c.relevant = "additions text"),
          (c.required = !1),
          (c.sort = "none"),
          (c.busy = !1),
          (c.disabled = !1),
          (c.hidden = !1),
          (c.invalid = "false"),
          c))),
      (c = Gp),
      b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
    : a.setAttribute(d, c);
};
n.console && n.console.createTask && n.console.createTask.bind(n.console);
var Lp = function (a, b, c, d, e, f) {
    if (Rl && e) return Jp(a);
    if (e && !d) return !1;
    "number" === typeof b && (b = Rl ? Kp(b) : b);
    e = 17 == b || 18 == b || (Rl && 91 == b);
    if (((!c || Rl) && e) || (Rl && 16 == b && (d || f))) return !1;
    if (d && c)
      switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
    switch (a) {
      case 13:
        return !0;
      case 27:
        return !1;
    }
    return Jp(a);
  },
  Jp = function (a) {
    if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || 0 == a) return !0;
    switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
      case 58:
        return !0;
      case 173:
        return !1;
      default:
        return !1;
    }
  },
  Kp = function (a) {
    switch (a) {
      case 93:
        return 91;
      default:
        return a;
    }
  };
var Mp = function (a, b, c, d) {
  rn.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
};
q(Mp, rn);
var Np = function (a, b) {
  Qn.call(this);
  a && this.attach(a, b);
};
q(Np, Qn);
l = Np.prototype;
l.P = null;
l.nb = null;
l.Ub = null;
l.ob = null;
l.Y = -1;
l.ra = -1;
l.Db = !1;
var Op = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  },
  Pp = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  },
  Qp = Rl && !1;
l = Np.prototype;
l.Sd = function (a) {
  if ((17 == this.Y && !a.ctrlKey) || (18 == this.Y && !a.altKey) || (Rl && 91 == this.Y && !a.metaKey)) this.ra = this.Y = -1;
  -1 == this.Y &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.Y = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.Y = 18)
      : a.metaKey && 91 != a.keyCode && (this.Y = 91));
  if (Lp(a.keyCode, this.Y, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)) {
    var b = a.keyCode;
    this.ra = Rl ? Kp(b) : b;
    Qp && (this.Db = a.altKey);
  } else this.handleEvent(a);
};
l.Ud = function (a) {
  this.ra = this.Y = -1;
  this.Db = a.altKey;
};
l.handleEvent = function (a) {
  var b = a.pa,
    c = b.altKey;
  if ("keypress" == a.type) {
    var d = this.ra;
    var e = 0 <= b.charCode && 63232 > b.charCode && Jp(d) ? b.charCode : 0;
  } else
    "keypress" == a.type
      ? (Qp && (c = this.Db),
        b.keyCode == b.charCode
          ? 32 > b.keyCode
            ? ((d = b.keyCode), (e = 0))
            : ((d = this.ra), (e = b.charCode))
          : ((d = b.keyCode || this.ra), (e = b.charCode || 0)))
      : ((d = b.keyCode || this.ra), (e = b.charCode || 0)),
      Rl && 63 == e && 224 == d && (d = 191);
  var f = (d = Rl ? Kp(d) : d);
  d
    ? 63232 <= d && d in Op
      ? (f = Op[d])
      : 25 == d && a.shiftKey && (f = 9)
    : b.keyIdentifier && b.keyIdentifier in Pp && (f = Pp[b.keyIdentifier]);
  a = f == this.Y;
  this.Y = f;
  b = new Mp(f, e, a, b);
  b.altKey = c;
  this.dispatchEvent(b);
};
l.u = function () {
  return this.P;
};
l.attach = function (a, b) {
  this.ob && this.detach();
  this.P = a;
  this.nb = Y(this.P, "keypress", this, b);
  this.Ub = Y(this.P, "keydown", this.Sd, b, this);
  this.ob = Y(this.P, "keyup", this.Ud, b, this);
};
l.detach = function () {
  this.nb && (Ln(this.nb), Ln(this.Ub), Ln(this.ob), (this.ob = this.Ub = this.nb = null));
  this.P = null;
  this.ra = this.Y = -1;
};
var Rp = function () {},
  Sp;
va(Rp);
var Tp = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
l = Rp.prototype;
l.Mb = function () {};
l.Ta = function (a) {
  return a;
};
l.Sa = function (a, b, c) {
  (a = a.u ? a.u() : a) && (c ? hn : kn)(a, [b]);
};
l.Oa = function () {
  return !0;
};
l.decorate = function (a, b) {
  b.id && Eo(a, b.id);
  var c = this.Ta(b);
  c && c.firstChild ? Up(a, c.firstChild.nextSibling ? db(c.childNodes) : c.firstChild) : (a.Pa = null);
  var d = 0,
    e = this.S(),
    f = this.S(),
    g = !1,
    h = !1,
    k = db(dn(b));
  k.forEach(function (m) {
    g || m != e ? (h || m != f ? (d |= Vp(this, m)) : (h = !0)) : ((g = !0), f == e && (h = !0));
    1 == Vp(this, m) && (Sa(c), im(c) && jm(c) && hm(c, !1));
  }, this);
  a.I = d;
  g || (k.push(e), f == e && (h = !0));
  h || k.push(f);
  (a = a.ia) && k.push.apply(k, a);
  (g && h && !a) || en(b, k.join(" "));
  return b;
};
l.Lc = function (a) {
  if (null == a.sb) {
    var b = a.ja ? a.P : a.gb.Ha.body;
    a: {
      var c = fm(b);
      if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
        c = c.direction || c.getPropertyValue("direction") || "";
        break a;
      }
      c = "";
    }
    a.sb = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || (b.style && b.style.direction));
  }
  a.sb && this.Na(a.u(), !0);
  a.isEnabled() && this.ub(a, a.isVisible());
};
l.hc = function (a, b) {
  Ip(a, "label", b);
};
l.tb = function (a, b) {
  a.style && (a.style.WebkitUserSelect = b ? "" : "none");
};
l.Na = function (a, b) {
  this.Sa(a, this.S() + "-rtl", b);
};
l.Tb = function (a) {
  var b;
  return a.V & 32 && (b = a.wa()) ? im(b) && jm(b) : !1;
};
l.ub = function (a, b) {
  var c;
  if (a.V & 32 && (c = a.wa())) {
    if (!b && a.I & 32) {
      try {
        c.blur();
      } catch (d) {}
      a.I & 32 && a.Ic(null);
    }
    (im(c) && jm(c)) != b && hm(c, b);
  }
};
l.aa = function (a, b, c) {
  var d = a.u();
  if (d) {
    var e = Wp(this, b);
    e && this.Sa(a, e, c);
    this.na(d, b, c);
  }
};
l.na = function (a, b, c) {
  Sp || (Sp = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
  r(a, "The element passed as a first parameter cannot be null.");
  b = Sp[b];
  var d = a.getAttribute("role") || null;
  d && ((d = Tp[d] || b), (b = "checked" == b || "selected" == b ? d : b));
  b && Ip(a, b, c);
};
l.setContent = function (a, b) {
  var c = this.Ta(a);
  c &&
    (cm(c),
    b &&
      ("string" === typeof b
        ? gm(c, b)
        : ((a = function (d) {
            if (d) {
              var e = fm(c);
              c.appendChild("string" === typeof d ? e.createTextNode(d) : d);
            }
          }),
          Array.isArray(b) ? b.forEach(a) : !xa(b) || "nodeType" in b ? a(b) : db(b).forEach(a))));
};
l.wa = function (a) {
  return a.u();
};
l.S = function () {
  return "goog-control";
};
var Wp = function (a, b) {
    a.cb || Xp(a);
    return a.cb[b];
  },
  Vp = function (a, b) {
    if (!a.dd) {
      a.cb || Xp(a);
      var c = a.cb,
        d = {},
        e;
      for (e in c) d[c[e]] = e;
      a.dd = d;
    }
    a = parseInt(a.dd[b], 10);
    return isNaN(a) ? 0 : a;
  },
  Xp = function (a) {
    var b = a.S(),
      c = !Ub(b.replace(/\xa0|\s/g, " "), " ");
    r(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.cb = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    };
  };
var Yp = function () {};
q(Yp, Rp);
va(Yp);
l = Yp.prototype;
l.Mb = function () {
  return "button";
};
l.na = function (a, b, c) {
  switch (b) {
    case 8:
    case 16:
      r(a, "The button DOM element cannot be null.");
      Ip(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Yp.G.na.call(this, a, b, c);
  }
};
l.decorate = function (a, b) {
  b = Yp.G.decorate.call(this, a, b);
  var c = this.ib(b);
  a.je = c;
  a.jd = this.Hc(b);
  a.V & 16 && this.na(b, 16, !!(a.I & 16));
  return b;
};
l.ib = function () {};
l.Hc = function (a) {
  return a.title;
};
l.S = function () {
  return "goog-button";
};
var Z = function (a, b, c) {
  Co.call(this, c);
  if (!b) {
    for (b = this.constructor; b; ) {
      var d = Ba(b);
      if ((d = Ko[d])) break;
      b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
    }
    b = d ? ("function" === typeof d.Ka ? d.Ka() : new d()) : null;
  }
  this.C = b;
  this.Pa = void 0 !== a ? a : null;
  this.yc = null;
};
q(Z, Co);
l = Z.prototype;
l.Pa = null;
l.I = 0;
l.V = 39;
l.Fb = 255;
l.ie = 0;
l.ld = !0;
l.ia = null;
l.Qb = !0;
l.Cb = !1;
l.fe = null;
l.wa = function () {
  return this.C.wa(this);
};
l.Sa = function (a, b) {
  b
    ? a && (this.ia ? bb(this.ia, a) || this.ia.push(a) : (this.ia = [a]), this.C.Sa(this, a, !0))
    : a && this.ia && cb(this.ia, a) && (0 == this.ia.length && (this.ia = null), this.C.Sa(this, a, !1));
};
l.hc = function (a) {
  this.yc = a;
  var b = this.u();
  b && this.C.hc(b, a);
};
l.Ta = function () {
  return this.C.Ta(this.u());
};
l.Oa = function (a) {
  return this.C.Oa(a);
};
l.Ec = function (a) {
  var b = (this.P = a = this.C.decorate(this, a)),
    c = this.fe || this.C.Mb();
  if (c) {
    r(b, "The element passed as a first parameter cannot be null.");
    var d = b.getAttribute("role") || null;
    c != d && (c ? (r(vb(Hp, c), "No such ARIA role " + c), b.setAttribute("role", c)) : b.removeAttribute("role"));
  }
  this.Cb || this.C.tb(a, !1);
  this.ld = "none" != a.style.display;
};
l.Ja = function () {
  Z.G.Ja.call(this);
  var a = this.C,
    b = Fo(this);
  r(this);
  r(b);
  var c = this.yc;
  null != c && a.hc(b, c);
  this.isVisible() || Ip(b, "hidden", !this.isVisible());
  this.isEnabled() || a.na(b, 1, !this.isEnabled());
  this.V & 8 && a.na(b, 8, this.isSelected());
  this.V & 16 && a.na(b, 16, !!(this.I & 16));
  this.V & 64 && a.na(b, 64, this.isOpen());
  this.C.Lc(this);
  this.V & -2 &&
    (this.Qb && Zp(this, !0), this.V & 32 && (a = this.wa())) &&
    ((b = this.Vb || (this.Vb = new Np())),
    b.attach(a),
    Go(this).listen(b, "key", this.Td).listen(a, "focus", this.Rd).listen(a, "blur", this.Ic));
};
var Zp = function (a, b) {
  var c = a.Zb ? Un : Tn,
    d = Go(a),
    e = a.u();
  b
    ? (d.listen(e, c.zb, a.kb).listen(e, [c.Ab, c.yb], a.lb).listen(e, "mouseover", a.Kc).listen(e, "mouseout", a.Jc),
      a.Zb && d.listen(e, "gotpointercapture", a.Wc),
      a.jb != nb && d.listen(e, "contextmenu", a.jb))
    : (d.ma(e, c.zb, a.kb).ma(e, [c.Ab, c.yb], a.lb).ma(e, "mouseover", a.Kc).ma(e, "mouseout", a.Jc),
      a.Zb && d.ma(e, "gotpointercapture", a.Wc),
      a.jb != nb && d.ma(e, "contextmenu", a.jb));
};
Z.prototype.hb = function () {
  Z.G.hb.call(this);
  this.Vb && this.Vb.detach();
  this.isVisible() && this.isEnabled() && this.C.ub(this, !1);
};
Z.prototype.getContent = function () {
  return this.Pa;
};
Z.prototype.setContent = function (a) {
  this.C.setContent(this.u(), a);
  this.Pa = a;
};
var Up = function (a, b) {
  a.Pa = b;
};
l = Z.prototype;
l.Na = function (a) {
  Z.G.Na.call(this, a);
  var b = this.u();
  b && this.C.Na(b, a);
};
l.tb = function (a) {
  this.Cb = a;
  var b = this.u();
  b && this.C.tb(b, a);
};
l.isVisible = function () {
  return this.ld;
};
l.isEnabled = function () {
  return !(this.I & 1);
};
l.setEnabled = function (a) {
  var b = this.getParent();
  (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
    !$p(this, 1, !a) ||
    (a || (this.setActive(!1), aq(this, !1)), this.isVisible() && this.C.ub(this, a), this.aa(1, !a, !0));
};
var aq = function (a, b) {
  $p(a, 2, b) && a.aa(2, b);
};
l = Z.prototype;
l.isActive = function () {
  return !!(this.I & 4);
};
l.setActive = function (a) {
  $p(this, 4, a) && this.aa(4, a);
};
l.isSelected = function () {
  return !!(this.I & 8);
};
l.vb = function (a) {
  $p(this, 32, a) && this.aa(32, a);
};
l.isOpen = function () {
  return !!(this.I & 64);
};
l.getState = function () {
  return this.I;
};
l.aa = function (a, b, c) {
  c || 1 != a ? this.V & a && b != !!(this.I & a) && (this.C.aa(this, a, b), (this.I = b ? this.I | a : this.I & ~a)) : this.setEnabled(!b);
};
var bq = function (a, b) {
    return !!(a.Fb & b) && !!(a.V & b);
  },
  $p = function (a, b, c) {
    return !!(a.V & b) && !!(a.I & b) != c && (!(a.ie & b) || a.dispatchEvent(Do(b, c))) && !a.Jb;
  };
Z.prototype.Kc = function (a) {
  !cq(a, this.u()) && this.dispatchEvent("enter") && this.isEnabled() && bq(this, 2) && aq(this, !0);
};
Z.prototype.Jc = function (a) {
  !cq(a, this.u()) && this.dispatchEvent("leave") && (bq(this, 4) && this.setActive(!1), bq(this, 2) && aq(this, !1));
};
Z.prototype.Wc = function (a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
Z.prototype.jb = nb;
var cq = function (a, b) {
  return !!a.relatedTarget && em(b, a.relatedTarget);
};
l = Z.prototype;
l.kb = function (a) {
  this.isEnabled() &&
    (bq(this, 2) && aq(this, !0),
    0 != a.pa.button || (Rl && a.ctrlKey) || (bq(this, 4) && this.setActive(!0), this.C && this.C.Tb(this) && this.wa().focus()));
  this.Cb || 0 != a.pa.button || (Rl && a.ctrlKey) || a.preventDefault();
};
l.lb = function (a) {
  this.isEnabled() && (bq(this, 2) && aq(this, !0), this.isActive() && this.rb(a) && bq(this, 4) && this.setActive(!1));
};
l.rb = function (a) {
  if (bq(this, 16)) {
    var b = !(this.I & 16);
    $p(this, 16, b) && this.aa(16, b);
  }
  bq(this, 8) && $p(this, 8, !0) && this.aa(8, !0);
  bq(this, 64) && ((b = !this.isOpen()), $p(this, 64, b) && this.aa(64, b));
  b = new nn("action", this);
  a && ((b.altKey = a.altKey), (b.ctrlKey = a.ctrlKey), (b.metaKey = a.metaKey), (b.shiftKey = a.shiftKey), (b.Yb = a.Yb));
  return this.dispatchEvent(b);
};
l.Rd = function () {
  bq(this, 32) && this.vb(!0);
};
l.Ic = function () {
  bq(this, 4) && this.setActive(!1);
  bq(this, 32) && this.vb(!1);
};
l.Td = function (a) {
  return this.isVisible() && this.isEnabled() && this.Pb(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
l.Pb = function (a) {
  return 13 == a.keyCode && this.rb(a);
};
if ("function" !== typeof Z) throw Error("Invalid component class " + Z);
if ("function" !== typeof Rp) throw Error("Invalid renderer class " + Rp);
var dq = Ba(Z);
Ko[dq] = Rp;
Jo("goog-control", function () {
  return new Z(null);
});
var eq = function () {};
q(eq, Yp);
va(eq);
l = eq.prototype;
l.Mb = function () {};
l.Oa = function (a) {
  return "BUTTON" == a.tagName || ("INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type));
};
l.decorate = function (a, b) {
  a.ja && 0 != a.Qb && Zp(a, !1);
  a.Qb = !1;
  a.Fb &= -256;
  if (a.ja && a.I & 32) throw Error("Component already rendered");
  a.I & 32 && a.aa(32, !1);
  a.V &= -33;
  if (b.disabled) {
    var c = Na(Wp(this, 1));
    gn(b, c);
  }
  return eq.G.decorate.call(this, a, b);
};
l.Lc = function (a) {
  Go(a).listen(a.u(), "click", a.rb);
};
l.tb = function () {};
l.Na = function () {};
l.Tb = function (a) {
  return a.isEnabled();
};
l.ub = function () {};
l.aa = function (a, b, c) {
  eq.G.aa.call(this, a, b, c);
  (a = a.u()) && 1 == b && (a.disabled = c);
};
l.ib = function (a) {
  return a.value;
};
l.na = function () {};
var fq = function (a, b, c) {
  Z.call(this, a, b || eq.Ka(), c);
};
q(fq, Z);
fq.prototype.ib = function () {
  return this.je;
};
fq.prototype.Hc = function () {
  return this.jd;
};
fq.prototype.Ja = function () {
  fq.G.Ja.call(this);
  if (this.V & 32) {
    var a = this.wa();
    a && Go(this).listen(a, "keyup", this.Pb);
  }
};
fq.prototype.Pb = function (a) {
  return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.rb(a) : 32 == a.keyCode;
};
Jo("goog-button", function () {
  return new fq(null);
});
var gq = ha(["value"]),
  iq = function (a, b, c, d) {
    fq.call(this, a, hq.Ka(), b);
    this.lc = c || 0;
    this.pc = d || 0;
  };
q(iq, fq);
l = iq.prototype;
l.setEnabled = function (a) {
  this.isEnabled() != a && (iq.G.setEnabled.call(this, a), jq(this));
};
l.focus = function () {
  var a = Fo(this);
  try {
    a.focus();
  } catch (b) {}
};
l.vb = function (a) {
  iq.G.vb.call(this, a);
  this.u() && ln(this.u(), !1);
};
l.kb = function (a) {
  iq.G.kb.call(this, a);
  this.isEnabled() && this.u() && ln(this.u(), !0);
};
l.lb = function (a) {
  iq.G.lb.call(this, a);
  this.isEnabled() && this.u() && ln(this.u(), !0);
};
var jq = function (a) {
    a.u() && kq(a.C, a);
  },
  hq = function () {
    this.bd = this.S() + "-standard";
    this.wc = this.S() + "-action";
    this.Xc = this.S() + "-primary";
    this.Fc = this.S() + "-default";
    this.Gc = this.S() + "-flat";
    this.Uc = this.S() + "-narrow";
    this.Sc = this.S() + "-mini";
    this.Cc = this.S() + "-contrast";
  };
q(hq, Yp);
hq.Ka = function () {
  return Xe(hq);
};
hq.prototype.ta = function (a, b, c) {
  a && c.lc != a && ((c.lc = a), jq(c));
  b && c.pc != b && ((c.pc = b), jq(c));
};
hq.prototype.S = function () {
  return "jfk-button";
};
hq.prototype.decorate = function (a, b) {
  hq.G.decorate.call(this, a, b);
  this.Bc ||
    (this.Bc = yb(
      this.bd,
      p(this.ta, 0, null),
      this.wc,
      p(this.ta, 2, null),
      this.Xc,
      p(this.ta, 3, null),
      this.Fc,
      p(this.ta, 1, null),
      this.Gc,
      p(this.ta, 4, null),
      this.Sc,
      p(this.ta, 5, null),
      this.Cc,
      p(this.ta, 6, null),
      this.Uc,
      p(this.ta, null, 1)
    ));
  for (var c = dn(b), d = 0; d < c.length; ++d) {
    var e = this.Bc[c[d]];
    e && e(a);
  }
  if ((c = b.getAttribute("data-tooltip"))) a.jd = c;
  return b;
};
mo(gq);
hq.prototype.ib = function (a) {
  return a.getAttribute("value") || "";
};
var kq = function (a, b) {
  function c(g, h) {
    (g ? d : e).push(h);
  }
  r(b.u(), "Button element must already exist when updating style.");
  var d = [],
    e = [],
    f = b.lc;
  c(0 == f, a.bd);
  c(2 == f, a.wc);
  c(3 == f, a.Xc);
  c(4 == f, a.Gc);
  c(5 == f, a.Sc);
  c(1 == f, a.Fc);
  c(6 == f, a.Cc);
  c(1 == b.pc, a.Uc);
  c(!b.isEnabled(), a.S() + "-disabled");
  kn(b.u(), e);
  hn(b.u(), d);
};
Jo("jfk-button", function () {
  return new iq(null);
});
var lq = ha(["https://ssl.google-analytics.com/ga.js"]);
function mq() {
  _gaq.push(["_setAccount", "UA-33463431-1"]);
  _gaq.push(["_trackPageview"]);
  var a = bm(document, "SCRIPT");
  a.type = "text/javascript";
  a.async = !0;
  var b = po(lq);
  a.src = Ib(b);
  var c, d;
  (c = (b =
    null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
      ? void 0
      : d.call(c, "script[nonce]"))
    ? b.nonce || b.getAttribute("nonce") || ""
    : "") && a.setAttribute("nonce", c);
  c = document.getElementsByTagName("SCRIPT")[0];
  c.parentNode.insertBefore(a, c);
} /*
 SPDX-License-Identifier: Apache-2.0 */
var nq = Object.prototype.hasOwnProperty;
function oq() {}
oq.prototype = Object.create(null);
function pq(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (nq.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function qq(a, b, c) {
  var d = typeof c;
  "object" === d || "function" === d
    ? (a[b] = c)
    : null == c
    ? a.removeAttribute(b)
    : (d =
        0 === b.lastIndexOf("xml:", 0)
          ? "http://www.w3.org/XML/1998/namespace"
          : 0 === b.lastIndexOf("xlink:", 0)
          ? "http://www.w3.org/1999/xlink"
          : null)
    ? a.setAttributeNS(d, b, c)
    : a.setAttribute(b, c);
}
function rq() {
  var a = new oq();
  a.__default = qq;
  a.style = pq;
  return a;
}
rq();
var sq = rq();
var tq = ha(["data-soyloggingfunction-"]);
mo(tq);
id(jd(), "api_idom");
sq.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
sq.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
sq.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var uq = function (a, b) {
    var c = a.W;
    a = a.isInternal;
    Bp();
    if (pp["tvt.templates.options.categories"]) c = pp["tvt.templates.options.categories"]({ W: c, isInternal: a }, b);
    else {
      b =
        '<dl><dt class="options-description-title">Default level:</dt><dd><select id="DefaultLevelOfDetail"><option value="Info">Basic Information</option><option value="Fine">Detailed Information</option>' +
        (a ? '<option value="Debug">Debug Information</option>' : "") +
        '<option value="Off">Off</option></select></dd></dl><dl>';
      if (c) {
        a = c.length;
        for (var d = 0; d < a; d++) {
          var e = c[d];
          b +=
            '<dt class="options-description-title options-category"><a target="_blank" href="' +
            up(zp(e.url)) +
            '">' +
            op(e.name) +
            '</a>:</dt><dd><select id="' +
            up(e.name) +
            '"><option value="Default">Default</option><option value="Info">Basic Information</option><option value="Fine">Detailed Information</option><option value="Off">Off</option></select></dd>';
        }
      } else b += "No Categories";
      c = lp(b + "</dl>");
    }
    return c;
  },
  vq = function (a, b) {
    var c = a.vc;
    a = a.response;
    Bp();
    if (pp["tvt.templates.options.accounts"]) c = pp["tvt.templates.options.accounts"]({ vc: c, response: a }, b);
    else {
      b =
        '<div class="options-description-title">Google Analytics Accounts</div><div id="check-analytics-urls-button" class="goog-inline-block jfk-button jfk-button-standard">Add website URLs to the checked domains</div><div>User ' +
        op(a.username) +
        " with total results: " +
        op(a.totalResults) +
        "</div>";
      a = c.length;
      for (var d = 0; d < a; d++) {
        var e = c[d];
        b +=
          '<div><a class="options-account-id" href="' +
          up(zp(e.analyticsUrl)) +
          '">' +
          op(e.webPropertyId) +
          "</a><span>" +
          (e.websiteUrl ? ': <a href="' + up(zp(e.websiteUrl)) + '">' + op(e.websiteUrl) + "</a>" : "") +
          "</span></div>";
      }
      c = lp(b);
    }
    return c;
  },
  wq = function (a, b) {
    return pp["tvt.templates.options.validateAllPages"]
      ? pp["tvt.templates.options.validateAllPages"](a, b)
      : lp(
          '<div id="validate-all-checkbox-div"><input type="checkbox" name="validate-all-checkbox" id="validate-all-checkbox" checked><span class="options-category">Validate all pages</span></div><div id="validate-all-textarea-div"></div>'
        );
  },
  xq = function (a, b) {
    return pp["tvt.templates.options.autocheckAllPagesTextArea"]
      ? pp["tvt.templates.options.autocheckAllPagesTextArea"](a, b)
      : lp(
          '<br/><span class="options-category">My Favorites</span><br><textarea placeholder="Enter domains to check" rows="4" cols="50" id="validate-all-textarea"></textarea>'
        );
  },
  yq = function (a, b) {
    a = a.mc;
    Bp();
    if (pp["tvt.templates.options.checksTable"]) b = pp["tvt.templates.options.checksTable"]({ mc: a }, b);
    else {
      for (
        var c =
            "<table class='options-table'><tr class='options-table-header'><th>#</th><th class='options-table-text'>Text</th><th>Type</th><th style=\"min-width: 120px\">Category</th><th>Link</th></tr>",
          d = a.keys,
          e = d.length,
          f = 0;
        f < e;
        f++
      ) {
        var g = b,
          h = f;
        var k = a.map[d[f]];
        Bp();
        if (pp["tvt.templates.options.checkRow"]) k = pp["tvt.templates.options.checkRow"]({ index: h, mc: k }, g);
        else {
          g = "<tr><td>" + op(h) + "</td><td>" + op(k[0].text) + "</td><td>" + op(k[0].type) + "</td><td>";
          h = k.length;
          for (var m = 0; m < h; m++) g += (0 != m ? "<br/>" : "") + op(k[m].category);
          g += "</td><td>";
          h = k.length;
          for (m = 0; m < h; m++) {
            var u = k[m];
            g +=
              (0 != m && qp(u.infoLink) ? "<br/>" : "") + '<a target="_blank" href="' + up(zp(u.infoLink)) + '">' + op(u.infoLink) + "</a>";
          }
          k = lp(g + "</td></tr>");
        }
        c += k;
      }
      b = lp(c + "</table>");
    }
    return b;
  },
  zq = function (a, b) {
    a = a.W;
    Bp();
    if (pp["tvt.templates.options.checksControls"]) a = pp["tvt.templates.options.checksControls"]({ W: a }, b);
    else {
      b =
        '<div id="templateFilter" class="checks-control"><span class="checks-controls-label">Filter by Type: </span><input name=\'templateTypes\' type="checkbox" value="Error" checked>Error<input name=\'templateTypes\' type="checkbox" value="Warning" checked>Warning<input name=\'templateTypes\' type="checkbox" value="Suggestion" checked>Suggestion<input name=\'templateTypes\' type="checkbox" value="Info">Info<input name=\'templateTypes\' type="checkbox" value="Fine">Fine</div><div class="checks-control"><span class="checks-controls-label">Filter by Category </span><select id="categoryFilter"><option value=\'\'>All</option>';
      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        b += "<option value='" + up(e.name) + "'>" + op(e.name) + "</option>";
      }
      a = lp(b + "</select></div>");
    }
    return a;
  },
  Aq = function (a, b) {
    a = a.sources;
    Bp();
    if (pp["tvt.templates.options.logsources"]) a = pp["tvt.templates.options.logsources"]({ sources: a }, b);
    else {
      b = '<dl><dt class="options-description-title">Select sources:</dt>';
      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        b +=
          '<dd><input type="checkbox" class="log-source" id="' +
          up(e.id) +
          '" checked><label for="' +
          up(e.id) +
          '" class="options-category">' +
          op(e.name) +
          "</label></dd>";
      }
      a = lp(b + "</dl>");
    }
    return a;
  },
  Bq = function (a, b) {
    var c = a.isInternal;
    a = a.Mc;
    Bp();
    return pp["tvt.templates.options.gtaPages"]
      ? pp["tvt.templates.options.gtaPages"]({ isInternal: c, Mc: a }, b)
      : lp(
          qp(c) || qp(a)
            ? '<dl><dt class="options-description-title">Select Traffic Analysis Page</dt><dd><select id="GtaPage"><option value="PROD">Production</option><option value="PREPROD">Pre-Production</option><option value="INTEGRATION">Integration</option><option value="PROTOTYPE">Prototype</option></select></dd></dl>'
            : ""
        );
  };
function Cq(a, b) {
  if (C("CheckPermissionsLater") || a) {
    var c = X("permissions-check");
    c && zo(c, a);
    if (!a) return;
  }
  chrome.permissions &&
    chrome.permissions.contains({ permissions: ["management"] }, function (d) {
      var e = X("permissions-check");
      e &&
        (zo(e, !d),
        d ||
          ((d = X("permissions-check-button")),
          Y(d, "click", p(Dq, a, b)),
          (d = X("permissions-refuse-button")) &&
            Y(d, "click", function () {
              B("CheckPermissionsLater", !0);
              zo(e, !1);
            })));
    });
}
function Dq(a, b) {
  chrome.permissions.request({ permissions: ["management"] }, function (c) {
    c && (Cq(a, b), b());
    B("CheckPermissionsLater", c);
  });
}
var Eq = null,
  Fq = !1;
function Gq(a) {
  Hq("Authorizing ...");
  lg({ interactive: a });
}
function Iq(a) {
  var b = X("analytics-accounts"),
    c = window.JSON.parse(a),
    d = [],
    e = {};
  Oa(Eq);
  Eq.setContent("Logout user " + c.username);
  c.items.forEach(function (f) {
    var g =
      0 < c.username.indexOf("@google.com")
        ? "https://analytics.corp.google.com/analytics/web/#report/visitors-overview/a%sw%sp%s/"
        : "https://www.google.com/analytics/web/#report/visitors-overview/a%sw%sp%s/";
    f.webProperties.forEach(function (h) {
      h.profiles.forEach(function (k) {
        k = v(g, f.id, h.internalWebPropertyId, k.id);
        e["Google Analytics-" + h.id] = { url: k, level: h.level };
        d.push({ webPropertyId: h.id, analyticsUrl: k, websiteUrl: h.websiteUrl });
      });
    });
  });
  Hq("Received " + d.length + " profiles.");
  ae(e);
  xo(b, vq, { vc: d, response: c });
  zo(X("link-google-analytics"), 0 < d.length);
  Jq("check-analytics-urls-button", function () {
    var f = { ManualChecks: !0 },
      g = (C("WhiteListedDomains") || "").split("\n");
    c.items.forEach(function (h) {
      h.websiteUrl && ((h = new Fc(h.websiteUrl).U), 0 < h.length && !Ub(g, h) && g.push(h));
    });
    f.WhiteListedDomains = g.join("\n");
    Yd(f);
  });
  B("request_analytics_accounts", !1);
}
function kg(a) {
  if (a && !a.error) {
    zo(X("logout"), !0);
    Hq("Authorized");
    var b = new XMLHttpRequest();
    b.onreadystatechange = function () {
      if (4 == this.readyState) {
        a: switch (this.status) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = !0;
            break a;
          default:
            c = !1;
        }
        c ? Iq(this.responseText) : Hq("Error while retrieving accounts: " + this.status);
      }
    };
    b.open("GET", "https://www.googleapis.com/analytics/v3/management/accountSummaries?alt=json", !0);
    b.setRequestHeader("Authorization", "Bearer " + a.token);
    b.send();
    b = null;
  }
}
function Kq() {
  var a = X("IgnoreExternalScripts");
  a &&
    Y(a, "change", function () {
      B("IgnoreExternalScripts", a.checked);
    });
  var b = X("validate-all-checkbox");
  if (b) {
    Y(b, "change", function () {
      B("ManualChecks", !b.checked);
      var ka = X("validate-all-textarea-div");
      zo(ka, !b.checked);
      _gaq.push(["_trackEvent", "activation", b.checked ? "auto-validation-enabled" : "auto-validation-disabled", "ext"]);
    });
    var c = X("validate-all-textarea");
    Y(c, "change", function () {
      B("WhiteListedDomains", c.value);
    });
  }
  var d = X("FollowLinksAcrossTabs");
  d &&
    Y(d, "change", function () {
      B("FollowLinks", d.checked);
    });
  var e = X("AutoOpenRecordings");
  e &&
    Y(e, "change", function () {
      B("AutoOpenRecordings", e.checked);
    });
  var f = X("DisableNgMode");
  f &&
    Y(f, "change", function () {
      B("NgModeDisabled", f.checked);
    });
  var g = X("DebugIssues");
  g &&
    Y(g, "change", function () {
      B("DebugIssues", g.checked);
    });
  var h = X("PatternProfiling");
  h &&
    Y(h, "change", function () {
      B("PatternProfiling", h.checked);
    });
  var k = X("ManualScriptParsing");
  if (k) {
    Y(k, "change", function () {
      B("ManualScriptParsing", k.checked);
      var ka = X("excluded-scripts-textarea-div");
      ka && zo(ka, k.checked);
    });
    var m = X("excluded-scripts-textarea");
    m &&
      Y(m, "change", function () {
        B("IgnoreExternalScripts", m.value);
      });
  }
  var u = X("DefaultLevelOfDetail");
  Y(u, "change", function () {
    B("DefaultLevelOfDetail", u.value);
  });
  $g().forEach(function (ka) {
    var Ra = X(ka.name);
    Ra &&
      Y(Ra, "change", function () {
        B(ka.name, Ra.value);
      });
  });
  var E = X("LoggingEnabled");
  E &&
    Y(E, "change", function () {
      B("LoggingEnabled", E.checked);
      _gaq.push(["_trackEvent", "settings", E.checked ? "logging-enabled" : "logging-disabled", "ext"]);
    });
  for (var W = Zl(), kl = 0, ll; (ll = W[kl]); kl++)
    Y(ll, "change", function (ka) {
      var Ra = Vd();
      ka.target.checked ? ((ka = ka.target.id), bb(Ra, ka) || Ra.push(ka)) : cb(Ra, ka.target.id);
      B("LogSources", Ra);
    });
  var ml = X("log-info-template");
  Y(ml, "blur", function () {
    B("LogInfoTemplate", ml.value);
  });
  Jq("reset", Lq);
  Jq("link-google-analytics", function () {
    B("request_analytics_accounts", !0);
    Gq(!0);
  });
  Eq = Jq("logout", function () {
    var ka = jg;
    ka &&
      chrome.identity.removeCachedAuthToken({ token: ka }, function () {
        console.log("User logged out.");
        var Ra = X("logout");
        zo(Ra, !1);
        Ra = X("analytics-accounts");
        zo(Ra, !1);
      });
  });
}
function Qd() {
  var a = function (f) {
    return X(f) || {};
  };
  a("IgnoreExternalScripts").checked = Wd("IgnoreExternalScripts");
  var b = Wd("ManualChecks");
  a("validate-all-checkbox") &&
    ((a("validate-all-checkbox").checked = !b),
    (a("validate-all-textarea").value = C("WhiteListedDomains") || ""),
    Mq("validate-all-checkbox-div", !1),
    Mq("validate-all-textarea-div", !0));
  a("FollowLinksAcrossTabs").checked = C("FollowLinks");
  a("AutoOpenRecordings").checked = C("AutoOpenRecordings");
  a("DebugIssues").checked = Wd("DebugIssues");
  a("PatternProfiling").checked = Wd("PatternProfiling");
  b = Wd("ManualScriptParsing");
  a("ManualScriptParsing").checked = b;
  a("excluded-scripts-textarea").value = "string" === typeof C("IgnoreExternalScripts") ? C("IgnoreExternalScripts") : "";
  Mq("excluded-scripts-textarea-div", b);
  a("DefaultLevelOfDetail").value = C("DefaultLevelOfDetail") || "Fine";
  $g().forEach(function (f) {
    a(f.name).value = C(f.name) || "Default";
  });
  if ((b = a("GtaPage"))) b.value = be();
  a("log-info-template").value = Xd("LogInfoTemplate");
  b = Vd();
  for (var c = Zl(), d = 0, e; (e = c[d]); d++) bb(b, e.id) || (e.checked = !1);
  X("LoggingEnabled").checked = Wd("LoggingEnabled");
  pf();
}
function Lq() {
  Sd();
  $g().forEach(function (a) {
    if ((a = X(a.name))) a.value = "Default";
  });
  Hq("Options resetted.");
}
function Hq(a) {
  var b = X("status");
  b.innerText = a;
  jn(b, "status-hidden");
  gn(b, "status-shown");
  setTimeout(function () {
    jn(b, "status-shown");
    gn(b, "status-hidden");
  }, 2e3);
}
function Nq() {
  var a = [];
  Wa(document.getElementsByName("templateTypes"), function (d) {
    d.checked && a.push(d.value);
  });
  var b = X("categoryFilter").value,
    c = X("templates");
  xo(c, yq, { mc: ah(Xe(Rg), a, b) });
  Mq("checksTable", !0);
  Mq("options-list", !1);
  Mq("reset", !1);
  Mq("list-checks", !1);
  Mq("back", !0);
}
function Oq() {
  var a = window.location.href,
    b = Ec(a, "TA_ENABLE_OPTION");
  b && 0 <= Nd.indexOf(b) && B(b, !0);
  (a = Ec(a, "TA_DISABLE_OPTION")) && 0 <= Nd.indexOf(a) && B(a, !1);
}
function Pd() {
  Fq && (Mq("enable-logging", !0), Mq("logging-controls", !0));
  if (!C("ValidateAllPages")) {
    var a = X("validate-all-pages");
    xo(a, wq);
    a = X("validate-all-textarea-div");
    xo(a, xq);
  }
  a = X("categories");
  xo(a, uq, { W: $g(), isInternal: !1 });
  a = X("options-gta-pages");
  xo(a, Bq, { isInternal: !1, Mc: Fq });
  a = X("log-sources");
  xo(a, Aq, { sources: ub(qf) });
  Qd();
  Kq();
  a = X("checksControls");
  xo(a, zq, { W: $g() });
  Y(X("categoryFilter"), "change", Nq);
  Jq("list-checks", Nq);
  Wa(document.getElementsByName("templateTypes"), function (b) {
    Y(b, "change", Nq);
  });
  Pq();
}
function Mq(a, b) {
  (a = X(a)) && zo(a, b);
}
function Pq() {
  Jq("back", function () {
    Mq("checksTable", !1);
    Mq("options-list", !0);
    Mq("back", !1);
    Mq("reset", !0);
    Mq("list-checks", !0);
  });
}
function Jq(a, b) {
  if ((a = X(a)) && !fn(a, "decorated")) {
    gn(a, "decorated");
    a: {
      r(a);
      var c = dn(a);
      for (var d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if ((f = f in Io ? Io[f]() : null)) {
          c = f;
          break a;
        }
      }
      c = null;
    }
    c && c.decorate(a);
    c && c.listen && c.listen("action", b);
    return c;
  }
  return null;
}
(function () {
  mq();
  Fq = "true" == Sc(w(location.href), "debug");
  Oq();
  window.ChromeExOAuth && C("request_analytics_accounts") && Gq(!1);
  Ud();
  void 0 !== chrome &&
    void 0 !== chrome.storage &&
    (chrome.storage.local.getBytesInUse(null, function (b) {
      console.log("Percentage used in local: " + parseInt((100 * b) / chrome.storage.local.QUOTA_BYTES, 10) + "%");
    }),
    chrome.storage.sync.getBytesInUse(null, function (b) {
      console.log("Percentage used in sync: " + parseInt((100 * b) / chrome.storage.local.QUOTA_BYTES, 10) + "%");
    }));
  Cq(!0);
  var a = X("internal");
  a && gm(a, "");
  chrome.permissions &&
    chrome.permissions.contains({ permissions: ["management"] }, function (b) {
      b &&
        chrome.management.get &&
        chrome.management.get(chrome.i18n.getMessage("@@extension_id"), function (c) {
          var d = X("version");
          d && gm(d, c.version);
        });
    });
})();
