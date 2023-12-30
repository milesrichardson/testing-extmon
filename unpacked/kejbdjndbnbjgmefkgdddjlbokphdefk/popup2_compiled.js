var h,
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
    this.gf = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.gf;
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
  ia = function (a) {
    return (a.raw = a);
  },
  ja = function (a, b) {
    a.raw = b;
    return a;
  },
  ka = function (a) {
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
    a.o = b.prototype;
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
  function c(l) {
    var m = typeof l;
    return ("object" === m && null !== l) || "function" === m;
  }
  function d(l) {
    if (!ta(l, f)) {
      var m = new b();
      ba(l, f, { value: m });
    }
  }
  function e(l) {
    var m = Object[l];
    m &&
      (Object[l] = function (n) {
        if (n instanceof b) return n;
        Object.isExtensible(n) && d(n);
        return m(n);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var l = Object.seal({}),
          m = Object.seal({}),
          n = new a([
            [l, 2],
            [m, 3]
          ]);
        if (2 != n.get(l) || 3 != n.get(m)) return !1;
        n.delete(l);
        n.set(m, 4);
        return !n.has(l) && 4 == n.get(m);
      } catch (q) {
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
    k = function (l) {
      this.R = (g += Math.random() + 1).toString();
      if (l) {
        l = ka(l);
        for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    };
  k.prototype.set = function (l, m) {
    if (!c(l)) throw Error("Invalid WeakMap key");
    d(l);
    if (!ta(l, f)) throw Error("WeakMap key fail: " + l);
    l[f][this.R] = m;
    return this;
  };
  k.prototype.get = function (l) {
    return c(l) && ta(l, f) ? l[f][this.R] : void 0;
  };
  k.prototype.has = function (l) {
    return c(l) && ta(l, f) && ta(l[f], this.R);
  };
  k.prototype.delete = function (l) {
    return c(l) && ta(l, f) && ta(l[f], this.R) ? delete l[f][this.R] : !1;
  };
  return k;
});
ea("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var k = Object.seal({ x: 4 }),
          l = new a(ka([[k, "s"]]));
        if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
        var m = l.entries(),
          n = m.next();
        if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
        n = m.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0;
      } catch (q) {
        return !1;
      }
    })()
  )
    return a;
  var b = new WeakMap(),
    c = function (k) {
      this[0] = {};
      this[1] = f();
      this.size = 0;
      if (k) {
        k = ka(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    };
  c.prototype.set = function (k, l) {
    k = 0 === k ? 0 : k;
    var m = d(this, k);
    m.list || (m.list = this[0][m.id] = []);
    m.entry
      ? (m.entry.value = l)
      : ((m.entry = { next: this[1], previous: this[1].previous, head: this[1], key: k, value: l }),
        m.list.push(m.entry),
        (this[1].previous.next = m.entry),
        (this[1].previous = m.entry),
        this.size++);
    return this;
  };
  c.prototype.delete = function (k) {
    k = d(this, k);
    return k.entry && k.list
      ? (k.list.splice(k.index, 1),
        k.list.length || delete this[0][k.id],
        (k.entry.previous.next = k.entry.next),
        (k.entry.next.previous = k.entry.previous),
        (k.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  c.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = f();
    this.size = 0;
  };
  c.prototype.has = function (k) {
    return !!d(this, k).entry;
  };
  c.prototype.get = function (k) {
    return (k = d(this, k).entry) && k.value;
  };
  c.prototype.entries = function () {
    return e(this, function (k) {
      return [k.key, k.value];
    });
  };
  c.prototype.keys = function () {
    return e(this, function (k) {
      return k.key;
    });
  };
  c.prototype.values = function () {
    return e(this, function (k) {
      return k.value;
    });
  };
  c.prototype.forEach = function (k, l) {
    for (var m = this.entries(), n; !(n = m.next()).done; ) (n = n.value), k.call(l, n[1], n[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (k, l) {
      var m = l && typeof l;
      "object" == m || "function" == m ? (b.has(l) ? (m = b.get(l)) : ((m = "" + ++g), b.set(l, m))) : (m = "p_" + l);
      var n = k[0][m];
      if (n && ta(k[0], m))
        for (k = 0; k < n.length; k++) {
          var q = n[k];
          if ((l !== l && q.key !== q.key) || l === q.key) return { id: m, list: n, index: k, entry: q };
        }
      return { id: m, list: n, index: -1, entry: void 0 };
    },
    e = function (k, l) {
      var m = k[1];
      return fa(function () {
        if (m) {
          for (; m.head != k[1]; ) m = m.previous;
          for (; m.next != m.head; ) return (m = m.next), { done: !1, value: l(m) };
          m = null;
        }
        return { done: !0, value: void 0 };
      });
    },
    f = function () {
      var k = {};
      return (k.previous = k.next = k.head = k);
    },
    g = 0;
  return c;
});
ea("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
        var d = this + "";
        b += "";
        var e = d.length,
          f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
        return g >= f;
      };
});
ea("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
var va = function (a, b) {
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
ea("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b, c) {
          return [b, c];
        });
      };
});
ea("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b) {
          return b;
        });
      };
});
ea("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b, c) {
          return c;
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
            : function (k) {
                return k;
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
var p = this || self,
  wa = function (a) {
    a.Za = void 0;
    a.ib = function () {
      return a.Za ? a.Za : (a.Za = new a());
    };
  },
  xa = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  ya = function (a) {
    var b = xa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  Aa = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  Da = function (a) {
    return (Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba]) || (a[Ba] = ++Ca);
  },
  Ba = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Ca = 0,
  Ea = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  Fa = function (a, b, c) {
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
  Ga = function (a, b, c) {
    Ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea : Fa;
    return Ga.apply(null, arguments);
  },
  r = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  Ha = function (a, b) {
    a = a.split(".");
    var c = p;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  t = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.o = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Jj = function (d, e, f) {
      for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
      return b.prototype[e].apply(d, g);
    };
  },
  Ia = function (a) {
    return a;
  };
function Ja(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ja);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
t(Ja, Error);
Ja.prototype.name = "CustomError";
var Ka;
function La(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  Ja.call(this, c + a[d]);
}
t(La, Ja);
La.prototype.name = "AssertionError";
function Ma(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new La("" + e, f || []);
}
var u = function (a, b, c) {
    a || Ma("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  v = function (a, b) {
    throw new La("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Na = function (a, b, c) {
    "number" !== typeof a && Ma("Expected number but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Oa = function (a, b, c) {
    "string" !== typeof a && Ma("Expected string but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Pa = function (a, b, c) {
    Aa(a) || Ma("Expected object but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Qa = function (a, b, c) {
    Array.isArray(a) || Ma("Expected array but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Ra = function (a, b, c) {
    "boolean" !== typeof a && Ma("Expected boolean but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Sa = function (a, b, c) {
    (Aa(a) && 1 == a.nodeType) || Ma("Expected Element but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Ua = function (a, b, c, d) {
    a instanceof b || Ma("Expected instanceof %s but got %s.", [Ta(b), Ta(a)], c, Array.prototype.slice.call(arguments, 3));
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
        u(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Wa = Array.prototype.forEach
    ? function (a, b) {
        u(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      },
  Xa = Array.prototype.filter
    ? function (a, b) {
        u(null != a.length);
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
          if (g in f) {
            var k = f[g];
            b.call(void 0, k, g, a) && (d[e++] = k);
          }
        return d;
      },
  Ya = Array.prototype.some
    ? function (a, b) {
        u(null != a.length);
        return Array.prototype.some.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1;
      };
function Za(a, b) {
  b = $a(a, b);
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
function $a(a, b) {
  for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
  return -1;
}
function w(a, b) {
  return 0 <= Va(a, b);
}
function ab(a, b) {
  b = Va(a, b);
  var c;
  if ((c = 0 <= b)) u(null != a.length), Array.prototype.splice.call(a, b, 1);
  return c;
}
function bb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function cb(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (ya(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function db(a, b, c, d) {
  u(null != a.length);
  Array.prototype.splice.apply(a, eb(arguments, 1));
}
function eb(a, b, c) {
  u(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
function fb(a, b) {
  a.sort(b || gb);
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
var hb = function () {},
  ib = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
function jb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function kb(a) {
  var b = lb,
    c = {},
    d;
  for (d in a) c[d] = b.call(void 0, a[d], d, a);
  return c;
}
function mb(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function nb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
function ob(a, b) {
  for (var c in a) if (a[c] == b) return !0;
  return !1;
}
function pb(a, b, c) {
  if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
  a[b] = c;
}
function qb(a, b) {
  return null !== a && b in a ? a[b] : void 0;
}
function rb(a) {
  var b = {},
    c;
  for (c in a) b[a[c]] = c;
  return b;
}
var sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function tb(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < sb.length; f++) (c = sb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function ub(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return ub.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
function vb(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return vb.apply(null, arguments[0]);
  for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
  return c;
}
var wb = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
var xb,
  yb = function () {
    if (void 0 === xb) {
      var a = null,
        b = p.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", { createHTML: Ia, createScript: Ia, createScriptURL: Ia });
        } catch (c) {
          p.console && p.console.error(c.message);
        }
      xb = a;
    }
    return xb;
  };
var Bb = function (a, b) {
  this.Md = (a === zb && b) || "";
  this.Ef = Ab;
};
Bb.prototype.Ha = !0;
Bb.prototype.ia = function () {
  return this.Md;
};
Bb.prototype.toString = function () {
  return "Const{" + this.Md + "}";
};
var Cb = function (a) {
    if (a instanceof Bb && a.constructor === Bb && a.Ef === Ab) return a.Md;
    v("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  Ab = {},
  zb = {};
var Eb = function (a, b) {
  if (b !== Db) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.Bd = a;
};
Eb.prototype.toString = function () {
  return this.Bd + "";
};
Eb.prototype.Ha = !0;
Eb.prototype.ia = function () {
  return this.Bd.toString();
};
var Fb = function (a) {
    if (a instanceof Eb && a.constructor === Eb) return a.Bd;
    v("expected object of type TrustedResourceUrl, got '%s' of type %s", a, xa(a));
    return "type_error:TrustedResourceUrl";
  },
  Db = {},
  Gb = function (a) {
    var b = yb();
    a = b ? b.createScriptURL(a) : a;
    return new Eb(a, Db);
  };
var Hb = function (a) {
    return /^[\s\xa0]*$/.test(a);
  },
  Ib = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  Qb = function (a) {
    if (!Jb.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(Kb, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Lb, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Mb, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Nb, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ob, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Pb, "&#0;"));
    return a;
  },
  Kb = /&/g,
  Lb = /</g,
  Mb = />/g,
  Nb = /"/g,
  Ob = /'/g,
  Pb = /\x00/g,
  Jb = /[\x00&<>"']/,
  Rb = function (a, b) {
    return -1 != a.indexOf(b);
  },
  Tb = function (a, b) {
    var c = 0;
    a = Ib(String(a)).split(".");
    b = Ib(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c =
          Sb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
          Sb(0 == f[2].length, 0 == g[2].length) ||
          Sb(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (0 == c);
    }
    return c;
  },
  Sb = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
var Vb = function (a, b) {
  if (b !== Ub) throw Error("SafeUrl is not meant to be built directly");
  this.Ad = a;
};
Vb.prototype.toString = function () {
  return this.Ad.toString();
};
Vb.prototype.Ha = !0;
Vb.prototype.ia = function () {
  return this.Ad.toString();
};
var Wb = function (a) {
    if (a instanceof Vb && a.constructor === Vb) return a.Ad;
    v("expected object of type SafeUrl, got '" + a + "' of type " + xa(a));
    return "type_error:SafeUrl";
  },
  Xb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
  Yb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
  Zb = function (a) {
    if (a instanceof Vb) return a;
    a = "object" == typeof a && a.Ha ? a.ia() : String(a);
    Yb.test(a) ? (a = new Vb(a, Ub)) : ((a = String(a).replace(/(%0A|%0D)/g, "")), (a = a.match(Xb) ? new Vb(a, Ub) : null));
    return a;
  },
  Ub = {},
  $b = new Vb("about:invalid#zClosurez", Ub);
new Vb("about:blank", Ub);
var ac = {},
  bc = function (a, b) {
    if (b !== ac) throw Error("SafeStyle is not meant to be built directly");
    this.zd = a;
    this.Ha = !0;
  };
bc.prototype.ia = function () {
  return this.zd;
};
bc.prototype.toString = function () {
  return this.zd.toString();
};
var cc = new bc("", ac);
function dc(a) {
  if (a instanceof Vb) return 'url("' + Wb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
  a = a instanceof Bb ? Cb(a) : ec(String(a));
  if (/[{;}]/.test(a)) throw new La("Value does not allow [{;}], got: %s.", [a]);
  return a;
}
function ec(a) {
  var b = a.replace(fc, "$1").replace(fc, "$1").replace(gc, "url");
  if (hc.test(b)) {
    if (ic.test(a)) return v("String value disallows comments, got: " + a), "zClosurez";
    for (var c = (b = !0), d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
    }
    if (!b || !c) return v("String value requires balanced quotes, got: " + a), "zClosurez";
    if (!jc(a)) return v("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez";
  } else return v("String value allows only [-+,.\"'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
  return kc(a);
}
function jc(a) {
  for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    if ("]" == e) {
      if (b) return !1;
      b = !0;
    } else if ("[" == e) {
      if (!b) return !1;
      b = !1;
    } else if (!b && !c.test(e)) return !1;
  }
  return b;
}
var hc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
  gc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
  fc = RegExp(
    "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
    "g"
  ),
  ic = /\/\*/;
function kc(a) {
  return a.replace(gc, function (b, c, d, e) {
    var f = "";
    d = d.replace(/^(['"])(.*)\1$/, function (g, k, l) {
      f = k;
      return l;
    });
    b = (Zb(d) || $b).ia();
    return c + f + b + f + e;
  });
}
var lc = {},
  mc = function () {
    if (lc !== lc) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Se = "";
    this.Ha = !0;
  };
mc.prototype.toString = function () {
  return this.Se.toString();
};
mc.prototype.ia = function () {
  return this.Se;
};
new mc();
var nc, oc;
a: {
  for (var pc = ["CLOSURE_FLAGS"], qc = p, rc = 0; rc < pc.length; rc++)
    if (((qc = qc[pc[rc]]), null == qc)) {
      oc = null;
      break a;
    }
  oc = qc;
}
var sc = oc && oc[610401301];
nc = null != sc ? sc : !1;
function tc() {
  var a = p.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var uc,
  vc = p.navigator;
uc = vc ? vc.userAgentData || null : null;
function wc(a) {
  return nc
    ? uc
      ? uc.brands.some(function (b) {
          return (b = b.brand) && Rb(b, a);
        })
      : !1
    : !1;
}
function y(a) {
  return Rb(tc(), a);
}
function xc() {
  return nc ? !!uc && 0 < uc.brands.length : !1;
}
function yc() {
  return y("Firefox") || y("FxiOS");
}
function zc() {
  return xc() ? wc("Chromium") : ((y("Chrome") || y("CriOS")) && !(xc() ? 0 : y("Edge"))) || y("Silk");
}
var Ac = {},
  Bc = function (a, b) {
    if (b !== Ac) throw Error("SafeHtml is not meant to be built directly");
    this.yd = a;
    this.Ha = !0;
  };
Bc.prototype.ia = function () {
  return this.yd.toString();
};
Bc.prototype.toString = function () {
  return this.yd.toString();
};
var Cc = function (a) {
    if (a instanceof Bc && a.constructor === Bc) return a.yd;
    v("expected object of type SafeHtml, got '" + a + "' of type " + xa(a));
    return "type_error:SafeHtml";
  },
  Ec = function (a) {
    return a instanceof Bc ? a : Dc(Qb("object" == typeof a && a.Ha ? a.ia() : String(a)));
  },
  Gc = function (a) {
    var b = Ec(Fc),
      c = [],
      d = function (e) {
        Array.isArray(e) ? e.forEach(d) : ((e = Ec(e)), c.push(Cc(e).toString()));
      };
    a.forEach(d);
    return Dc(c.join(Cc(b).toString()));
  },
  Hc = function (a) {
    return Gc(Array.prototype.slice.call(arguments));
  },
  Dc = function (a) {
    var b = yb();
    a = b ? b.createHTML(a) : a;
    return new Bc(a, Ac);
  },
  Ic = /^[a-zA-Z0-9-]+$/,
  Jc = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
  Kc = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  },
  Fc = new Bc((p.trustedTypes && p.trustedTypes.emptyHTML) || "", Ac);
var Lc = function (a, b) {
  Oa(Cb(a), "must provide justification");
  u(!Hb(Cb(a)), "must provide non-empty justification");
  return Dc(b);
};
var Mc = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
  Nc = ib(function () {
    if ("undefined" === typeof document) return !1;
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild) return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = Cc(Fc);
    return !b.parentElement;
  }),
  Oc = function (a, b) {
    if (Nc()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Cc(b);
  },
  Pc = function (a, b) {
    if (a.tagName && Mc[a.tagName.toUpperCase()])
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    Oc(a, b);
  };
var Qc = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  Tc = function (a) {
    return Rb(a, "&") ? ("document" in p ? Rc(a) : Sc(a)) : a;
  },
  Rc = function (a) {
    var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var c = p.document.createElement("div");
    return a.replace(Uc, function (d, e) {
      var f = b[d];
      if (f) return f;
      "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
      f || (Pc(c, Lc(new Bb(zb, "Single HTML entity."), d + " ")), (f = c.firstChild.nodeValue.slice(0, -1)));
      return (b[d] = f);
    });
  },
  Sc = function (a) {
    return a.replace(/&([^;]+);/g, function (b, c) {
      switch (c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != c.charAt(0) || ((c = Number("0" + c.slice(1))), isNaN(c)) ? b : String.fromCharCode(c);
      }
    });
  },
  Uc = /&([^;\s<&]+);?/g,
  Vc = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a;
  },
  Wc = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  B = function (a, b) {
    if (!Number.isFinite(a)) return String(a);
    a = String(a);
    var c = a.indexOf(".");
    -1 === c && (c = a.length);
    var d = "-" === a[0] ? "-" : "";
    d && (a = a.substring(1));
    return d + Wc("0", Math.max(0, b - c)) + a;
  },
  Xc = function (a) {
    return null == a ? "" : String(a);
  },
  Yc = function (a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  },
  Zc = function (a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  };
var $c =
  Object.freeze ||
  function (a) {
    return a;
  };
var ad = function (a, b) {
  this.name = a;
  this.value = b;
};
ad.prototype.toString = function () {
  return this.name;
};
var bd = new ad("OFF", Infinity),
  cd = new ad("WARNING", 900),
  dd = new ad("CONFIG", 700),
  ed = function () {
    this.Zb = 0;
    this.clear();
  },
  fd;
ed.prototype.clear = function () {
  this.ua = Array(this.Zb);
  this.ne = -1;
  this.Fe = !1;
};
var gd = function (a, b, c) {
  this.reset(a || bd, b, c, void 0, void 0);
};
gd.prototype.reset = function (a, b) {
  this.sg = b;
};
gd.prototype.getMessage = function () {
  return this.sg;
};
var hd = function (a, b) {
    this.level = null;
    this.ag = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.pg = {
      cd: function () {
        return a;
      }
    };
  },
  id = function (a) {
    if (a.level) return a.level;
    if (a.parent) return id(a.parent);
    v("Root logger has no level set.");
    return bd;
  };
hd.prototype.publish = function (a) {
  for (var b = this; b; )
    b.ag.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var jd = function () {
    this.entries = {};
    var a = new hd("");
    a.level = dd;
    this.entries[""] = a;
  },
  kd,
  ld = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = ld(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new hd(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  nd = function () {
    kd || (kd = new jd());
    return kd;
  };
var od = function (a, b) {
  null != a && this.append.apply(this, arguments);
};
h = od.prototype;
h.ua = "";
h.set = function (a) {
  this.ua = "" + a;
};
h.append = function (a, b, c) {
  this.ua += String(a);
  if (null != b) for (var d = 1; d < arguments.length; d++) this.ua += arguments[d];
  return this;
};
h.clear = function () {
  this.ua = "";
};
h.toString = function () {
  return this.ua;
};
var _gaq = _gaq || [];
var pd = function (a, b) {
    a = b ? a.exec.call(a, b) : void 0;
    return a ? (1 < a.length ? a[1] : !0) : !1;
  },
  rd = function (a, b) {
    var c = b || [";", ","];
    b = b ? 0 : 1;
    var d = { "(": ")", "{": "}", "[": "]" },
      e = void 0,
      f = !1,
      g = [],
      k = [],
      l = 0;
    a = Ib(qd(a));
    var m = a.length,
      n;
    for (n = 0; n < m; n++) {
      var q = a.charAt(n);
      f
        ? (f = !1)
        : "\\" == q
        ? (f = !0)
        : e
        ? q == e && (e = void 0)
        : '"' == q || "'" == q
        ? (e = q)
        : "(" == q || "{" == q || "[" == q
        ? g.push(d[q])
        : g.length
        ? q == g[g.length - 1] && g.pop()
        : w(c, q)
        ? ((l = Ib(a.substring(l, n + b))), k.push(l.replace(" *\n *", "")), (l = n + 1))
        : n == l && D[a.charCodeAt(n)] && (l = n + 1);
    }
    l = Ib(a.substring(l, n));
    k.push(l.replace(" *\n *", ""));
    return k;
  },
  sd = function (a) {
    a = pd(/\{(.*)\}/, a) || a;
    return rd(a, [","]).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = pd(/"(.*)"/, c) || c;
      c = pd(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
  },
  td = function (a, b, c, d, e) {
    b && (c && a.append(Wc("  ", d.length)), a.append(b, e));
    return "\n" == e;
  },
  ud = function (a) {
    var b = [";", ","],
      c = { "{": "}", "[": "]" },
      d = void 0,
      e = !1,
      f = [],
      g = new od(),
      k = 0,
      l = !1;
    a = Ib(qd(a));
    var m = a.length,
      n;
    for (n = 0; n < m; n++) {
      var q = a.charAt(n);
      e
        ? (e = !1)
        : "\\" == q
        ? (e = !0)
        : d
        ? q == d && (d = void 0)
        : '"' == q || "'" == q
        ? (d = q)
        : ":" == q
        ? ((k = Ib(a.substring(k, n))), (l = td(g, k, l, f, "")), g.append(": "), (k = n + 1))
        : "{" == q || "[" == q
        ? ((k = Ib(a.substring(k, n))), (l = td(g, k, l, f, "\n")), (l = td(g, q, l, f, "\n")), (k = n + 1), f.push(c[q]))
        : f.length && q == f[f.length - 1]
        ? ((k = Ib(a.substring(k, n))), (l = td(g, k, l, f, "\n")), (k = n), f.pop())
        : n == k && D[a.charCodeAt(n)] && (k = n + 1);
      w(b, q) && ((k = Ib(a.substring(k, n))), (l = td(g, k, l, f, "")), (l = td(g, q, l, f, "\n")), (k = n + 1));
    }
    k = Ib(a.substring(k, n));
    td(g, k, l, f, "\n");
    return g.toString();
  },
  qd = function (a, b) {
    var c = void 0,
      d = !1,
      e = -1;
    b = b || 0;
    for (var f = a.length, g = b; g < f; g++) {
      var k = a.charAt(g),
        l = g + 1 < f ? a.charAt(g + 1) : "";
      if (d) d = !1;
      else if (0 <= e) {
        if ("*" == k && "/" == l) return a.substring(b, e) + qd(a, g + 2);
      } else if ("\\" == k) d = !0;
      else if (c) k == c && (c = void 0);
      else if ("/" == k) {
        if ("/" == l) return (c = a.indexOf("\n", g)), -1 == c ? a.substring(b, g) : a.substring(b, g) + qd(a, c);
        "*" == l && (e = g++);
      } else if ('"' == k || "'" == k) c = k;
    }
    return a.substring(b);
  },
  vd = function (a, b) {
    var c = a.split("%s");
    if (1 == c.length) return a;
    for (var d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; ) d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  D = [];
D[9] = !0;
D[10] = !0;
D[11] = !0;
D[12] = !0;
D[13] = !0;
D[32] = !0;
D[133] = !0;
D[160] = !0;
D[5760] = !0;
D[6158] = !0;
D[8192] = !0;
D[8193] = !0;
D[8194] = !0;
D[8195] = !0;
D[8196] = !0;
D[8197] = !0;
D[8198] = !0;
D[8199] = !0;
D[8200] = !0;
D[8201] = !0;
D[8202] = !0;
D[8203] = !0;
D[8232] = !0;
D[8233] = !0;
D[8239] = !0;
D[8287] = !0;
D[12288] = !0;
var wd = {},
  xd = {},
  yd = {},
  zd,
  Ad = {
    Wg: "AutoOpenRecordings",
    ah: "categories",
    eh: "CheckPermissionsLater",
    qh: "DefaultLevelOfDetail",
    ph: "DebugIssues",
    zh: "IgnoreExternalScripts",
    Ch: "FollowLinks",
    Eh: "gaDebug",
    Fh: "GtaPage",
    Ph: "hideRecordingSuggestion",
    Qh: "IgnoreExternalScripts",
    Xh: "isInSupportTeam",
    ai: "last-checked-for-support-team",
    ii: "LoggedIn",
    ki: "LogInfoTemplate",
    li: "LogSources",
    ji: "LoggingEnabled",
    ni: "ManualChecks",
    oi: "ManualScriptParsing",
    Di: "NgModeDisabled",
    Ni: "PatternProfiling",
    Si: "RecordingTab",
    ej: "GooglePublisherConsole",
    fj: "ShowIgnoredIssues",
    gj: "ShowWelcomeScreen",
    Hj: "WhiteListedDomains",
    Aj: "ValidateAllPages"
  },
  Bd = { DefaultLevelOfDetail: "DefaultLevel" },
  Cd = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  Hd = function () {
    var a = Dd;
    zd = null;
    yd = {};
    void 0 !== chrome && void 0 !== chrome.storage
      ? chrome.storage.local.get(null, function (b) {
          Ed(b);
          Fd(a);
        })
      : wd["Options initialized to default values."] || (console.log("No chrome storage available."), Gd(), a());
  },
  Fd = function (a) {
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (b) {
        Ed(b);
        b["Options initialized to default values."] || Gd();
        a();
      }),
      Id());
  },
  Ld = function (a) {
    var b = wd[a];
    if (!b && Bd[a] && wd[Bd[a]]) {
      var c = Bd[a];
      b = void 0 !== wd[c] ? wd[c] : null;
      Jd(a, b);
      Kd(c);
    }
    return b;
  },
  Md = function () {
    var a = Ld("categories");
    void 0 !== a && Qa(a);
    return a || [];
  },
  Nd = function (a) {
    a = Ld(a);
    void 0 !== a && Ra(a);
    return !!a;
  },
  Pd = function () {
    var a = Od("WhiteListedDomains");
    if (void 0 === a) return [];
    var b = yd[a];
    b || ((b = a.trim()), (b = 0 == b.length ? [] : b.split(/ *[,\n]+(?: |,|\n)*/)), (yd[a] = b));
    return b;
  },
  Od = function (a, b) {
    a = Ld(a);
    void 0 !== a && Ra("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  Qd = function (a) {
    zd ||
      ((zd = {}),
      Object.keys(wd).forEach(function (b) {
        0 < b.indexOf("|") && (zd[b.split("|")[0]] = !0);
      }));
    return !!zd[a];
  },
  Id = function () {
    chrome.storage.onChanged.addListener(function (a) {
      for (var b in a) wd[b] = a[b].newValue;
    });
  },
  Sd = function () {
    var a = {};
    jb(Ad, function (b) {
      void 0 !== Ld(b) && (a[b] = Ld(b));
    });
    Gd();
    Rd(a);
  },
  Gd = function () {
    var a = Ld("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    wd = {};
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
    Rd(a);
  },
  Td = function (a, b, c) {
    jb(b, function (d, e) {
      null != d && (xd[e] ? u(typeof d == xd[e], "Unexpected type " + typeof d + " expected " + xd[e]) : (xd[e] = typeof d));
    });
    Ed(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (Sd(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  Ed = function (a, b) {
    a && tb(wd, a);
    b && b();
  },
  Ud = void 0 !== chrome && void 0 !== chrome.storage ? r(Td, chrome.storage.local) : Ed,
  Rd = void 0 !== chrome && void 0 !== chrome.storage ? r(Td, chrome.storage.sync) : Ed,
  Jd = function (a, b, c) {
    delete yd[a];
    Rd(ub(a, b), c);
  },
  Kd = function (a) {
    void 0 !== chrome && void 0 !== chrome.storage
      ? (delete yd[a], chrome.storage.local.remove(a, void 0), chrome.storage.sync.remove(a, void 0))
      : (delete yd[wd[a]], delete wd[a]);
  },
  Vd = function () {
    return Od("GtaPage", "PROD");
  };
Ha("tvt.Settings.getGataPageVersion", Vd);
Ha("tvt.Settings.setGataPageVersion", function (a) {
  Jd("GtaPage", a || "PROD");
});
var Wd = function () {
  var a = Vd();
  return Cd[a];
};
Ha("tvt.Settings.getGataRedirectUrl", Wd);
var Xd = function () {
  return Wd() + "internal/";
};
Ha("tvt.Settings.getGataInternalRedirectUrl", Xd);
Ha("tvt.Settings.getGataLoginCheckUrl", function () {
  return Wd() + "logincheck";
});
Ha("tvt.Settings.getGataInternalLoginUrl", function () {
  return Xd() + "login";
});
Ha("tvt.Settings.getGataLoginUrl", function () {
  return Wd() + "login";
});
var Yd = function () {
  var a = {};
  switch (Ld("gaDebug")) {
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
  Ud(a);
};
Ha("tvt.Settings.toggleGaDebugSettings", Yd);
var Zd = function (a) {
    return (
      (null != a && 0 <= a.indexOf("https://chrome.google.com")) ||
      /^chrome:\/\/.*?/.test(a) ||
      /_\/chrome\/newtab/.test(a) ||
      (0 == a.indexOf("chrome") && !/^chrome-extension:\/\/[^\/]+\/tour.html$/.test(a))
    );
  },
  $d = function (a) {
    var b = Pd();
    return (
      null != a &&
      b.some(function (c) {
        return 5 < c.length && Rb(a, c);
      })
    );
  };
var ae = "Error Warning Suggestion Hidden Info Fine Debug".split(" "),
  be = ["Error", "Warning", "Suggestion"],
  ce = "Error Warning Suggestion Hidden Info Fine Debug Tag".split(" "),
  de = { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] };
jb(de, function (a) {
  for (var b = 0; a[b]; b++);
});
var ee = function (a, b) {
    this.issueClass = b.issueClass;
    this.type = b.type;
    this.buckets = [];
    this.category = b.category;
    this.label = b.label || "";
    this.text = vd(b.text || "", this.label);
    this.infoLink = "string" === typeof b.infoLink ? vd(b.infoLink, this.label) : void 0;
    this.value = b.value || void 0;
    this.valueFormat = b.format || b.valueFormat || "";
    this.relatedIssues = [];
    for (var c = b.relatedIssues || [], d, e = 0; (d = c[e]); e++) new ee(this, d);
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
    null != a.relatedIssues && (fe(this, a.relatedIssues.length), a.relatedIssues.push(this));
  },
  ge = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  he = { Metadata: 1 },
  ie = function (a, b) {
    for (var c, d = 0; (c = b[d]); d++) new ee(a, c);
  },
  je = function () {
    return E.parent.issues.map(function (a) {
      return new ee(ge, a);
    });
  },
  ke = function (a, b, c) {
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
            (e.label && " -- " + Vc(e.label.replace("\n", ""), 25)) +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && ke(e.relatedIssues, b, g);
      }
    else ke(a.relatedIssues, b, c);
  };
Ha("module$contents$tvt$Issue_Issue.dump", ke);
var le = function () {
    return F.issues.filter(function (a) {
      return !a.deleted && !a.deduped && "Google Analytics" == a.category;
    });
  },
  me = function (a, b) {
    return "string" === typeof b
      ? me(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.label);
        })
      : me(a.relatedIssues, b);
  },
  ne = function (a, b) {
    return "string" === typeof b
      ? ne(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.text);
        })
      : ne(a.relatedIssues, b);
  },
  pe = function (a) {
    return a.filter(function (b) {
      return !b.deleted && !b.deduped && "Tag" == b.type && !b.ignored && oe(b.category);
    });
  },
  qe = function (a, b, c) {
    for (var d = [], e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (b(e) ? d.push(e) : e.type != c && ((e = qe(e.relatedIssues, b, c)), 0 == d.length ? (d = e) : cb(d, e)));
    return d;
  },
  re = function (a, b) {
    return qe(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.type;
    });
  },
  se = function (a) {
    for (var b = [], c, d = 0; (c = a[d]); d++) c.deleted || c.deduped || ("Bucket" == c.type ? b.push(c) : cb(b, se(c.relatedIssues)));
    return b;
  },
  ue = function (a, b) {
    return te(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  ve = function (a, b) {
    return te(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  te = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = te(d.relatedIssues, b, c)))) return d;
    return null;
  },
  fe = function (a, b) {
    if (a && a && a.category != ge.category) {
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
      a.relatedIssues.forEach(fe);
    }
  },
  xe = function (a) {
    var b = F ? F.domain || "" : "";
    Qd(b) && we(b, a);
  },
  we = function (a, b, c) {
    for (var d, e = 0; (d = b[e]); e++) {
      var f = !c && "Tag" == d.type,
        g = !f && w(be, d.type),
        k = c || (f ? d.text : "Global");
      if (f || g) {
        f = d;
        var l = a;
        g = "Tag" != f.type && w(be, f.type);
        var m = ye(f);
        l = l + "|ignore:" + ("Tag" == m.type ? m.text : "Global") + ":" + f.type;
        g && (l = l + ":" + (0 == f.text.length ? f.category : f.text));
        d.ignored = Nd(l);
      }
      we(a, d.relatedIssues, k);
    }
  },
  ye = function (a) {
    if (a.parent) {
      var b = a.parent;
      b = !b || b.category == ge.category;
    } else b = 1;
    return b ? a : ye(a.parent);
  },
  Ae = function (a, b, c) {
    var d = b || [];
    if (!c)
      a: switch (ze(a.category || "")) {
        case "Debug":
          c = ["Debug", "Fine", "Info"];
          break a;
        case "Fine":
          c = ["Fine", "Info"];
          break a;
        default:
          c = ["Info"];
      }
    a = a.relatedIssues;
    for (var e, f = 0; (e = a[f]); f++)
      e.deleted ||
        e.deduped ||
        "Bucket" == e.type ||
        (e.view || (e.view = "Metadata"), e.ignored || "" == e.view || w(d, e.view) || !w(c, e.type) || d.push(e.view), Ae(e, d, c));
    b ||
      d.sort(function (g, k) {
        return (he[g] || 99) - (he[k] || 99);
      });
    return d;
  },
  Be = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return Be(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  Ce = function (a) {
    for (var b = 0, c, d = 0; (c = a[d]); d++) c.ignored ? b++ : (b += Ce(c.relatedIssues));
    return b;
  },
  oe = function (a) {
    return null == a || !w(["Hidden", "Off"], ze(a));
  },
  ze = function (a) {
    ((a = Od(a)) && "Default" != a) || (a = Od("DefaultLevelOfDetail", "Default"));
    return a;
  },
  De = function (a) {
    for (var b, c = 0; (b = a[c]); c++) (b.template = void 0), (b.parent = ge), De(b.relatedIssues);
    return a;
  },
  Ee = function (a, b, c) {
    for (var d = 0, e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (c && e.ignored) || !oe(e.category) || (e.type == b ? d++ : (d += Ee(e.relatedIssues, b, c)));
    return d;
  },
  Fe = function (a, b) {
    for (var c = b || ge, d = 0; (b = a[d]); d++) (b.parent = c), b.infoLink || (b.infoLink = c.infoLink);
    for (c = 0; (b = a[c]); c++) Fe(b.relatedIssues, b);
  },
  Ge = function (a) {
    for (var b, c = 0; (b = a[c]); c++)
      b.relatedIssues.length && (Ge(b.relatedIssues), (b.relatedIssues = [])),
        (b.parent = ge),
        (b.text = ""),
        (b.label = b.text),
        (b.infoLink = void 0),
        (b.value = {}),
        (b.template = void 0),
        (b.templateMarker = ""),
        (b.otherRelatedIssues = []);
  };
var He = function (a) {
    if (a.Na && "function" == typeof a.Na) a = a.Na();
    else if (ya(a) || "string" === typeof a) a = a.length;
    else {
      var b = 0,
        c;
      for (c in a) b++;
      a = b;
    }
    return a;
  },
  Ie = function (a) {
    if (a.ja && "function" == typeof a.ja) return a.ja();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (ya(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return nb(a);
  },
  Je = function (a) {
    if (a.Ga && "function" == typeof a.Ga) return a.Ga();
    if (!a.ja || "function" != typeof a.ja) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (ya(a) || "string" === typeof a) {
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
  Ke = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (ya(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = Je(a), e = Ie(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  },
  Le = function (a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (ya(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
    for (var c = Je(a), d = Ie(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0;
  };
var Me = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  Ne = function (a, b) {
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
  };
var Oe = function (a) {
  this.aa = this.fb = this.ma = "";
  this.qb = null;
  this.Fa = this.X = "";
  this.la = this.jg = !1;
  if (a instanceof Oe) {
    this.la = a.la;
    Pe(this, a.ma);
    var b = a.fb;
    G(this);
    this.fb = b;
    b = a.aa;
    G(this);
    this.aa = b;
    Qe(this, a.qb);
    b = a.X;
    G(this);
    this.X = b;
    Re(this, a.L.clone());
    a = a.Fa;
    G(this);
    this.Fa = a;
  } else
    a && (b = String(a).match(Me))
      ? ((this.la = !1),
        Pe(this, b[1] || "", !0),
        (a = b[2] || ""),
        G(this),
        (this.fb = Se(a)),
        (a = b[3] || ""),
        G(this),
        (this.aa = Se(a, !0)),
        Qe(this, b[4]),
        (a = b[5] || ""),
        G(this),
        (this.X = Se(a, !0)),
        Re(this, b[6] || "", !0),
        (a = b[7] || ""),
        G(this),
        (this.Fa = Se(a)))
      : ((this.la = !1), (this.L = new Te(null, this.la)));
};
Oe.prototype.toString = function () {
  var a = [],
    b = this.ma;
  b && a.push(Ue(b, Ve, !0), ":");
  var c = this.aa;
  if (c || "file" == b)
    a.push("//"),
      (b = this.fb) && a.push(Ue(b, Ve, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.qb),
      null != c && a.push(":", String(c));
  if ((c = this.X)) this.aa && "/" != c.charAt(0) && a.push("/"), a.push(Ue(c, "/" == c.charAt(0) ? We : Xe, !0));
  (c = this.L.toString()) && a.push("?", c);
  (c = this.Fa) && a.push("#", Ue(c, Ye));
  return a.join("");
};
Oe.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.ma;
  c ? Pe(b, a.ma) : (c = !!a.fb);
  if (c) {
    var d = a.fb;
    G(b);
    b.fb = d;
  } else c = !!a.aa;
  c ? ((d = a.aa), G(b), (b.aa = d)) : (c = null != a.qb);
  d = a.X;
  if (c) Qe(b, a.qb);
  else if ((c = !!a.X)) {
    if ("/" != d.charAt(0))
      if (this.aa && !this.X) d = "/" + d;
      else {
        var e = b.X.lastIndexOf("/");
        -1 != e && (d = b.X.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (Rb(e, "./") || Rb(e, "/.")) {
      d = 0 == e.lastIndexOf("/", 0);
      e = e.split("/");
      for (var f = [], g = 0; g < e.length; ) {
        var k = e[g++];
        "." == k
          ? d && g == e.length && f.push("")
          : ".." == k
          ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && g == e.length && f.push(""))
          : (f.push(k), (d = !0));
      }
      d = f.join("/");
    } else d = e;
  }
  c ? (G(b), (b.X = d)) : (c = "" !== a.L.toString());
  c ? Re(b, a.L.clone()) : (c = !!a.Fa);
  c && ((a = a.Fa), G(b), (b.Fa = a));
  return b;
};
Oe.prototype.clone = function () {
  return new Oe(this);
};
var Pe = function (a, b, c) {
    G(a);
    a.ma = c ? Se(b, !0) : b;
    a.ma && (a.ma = a.ma.replace(/:$/, ""));
  },
  Qe = function (a, b) {
    G(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.qb = b;
    } else a.qb = null;
  },
  Re = function (a, b, c) {
    G(a);
    b instanceof Te ? ((a.L = b), a.L.Fd(a.la)) : (c || (b = Ue(b, Ze)), (a.L = new Te(b, a.la)));
  };
Oe.prototype.getQuery = function () {
  return this.L.toString();
};
Oe.prototype.removeParameter = function (a) {
  G(this);
  this.L.remove(a);
  return this;
};
var G = function (a) {
  if (a.jg) throw Error("Tried to modify a read-only Uri");
};
Oe.prototype.Fd = function (a) {
  this.la = a;
  this.L && this.L.Fd(a);
};
var $e = function (a) {
    return a instanceof Oe ? a.clone() : new Oe(a);
  },
  Se = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Ue = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, af)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  af = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  Ve = /[#\/\?@]/g,
  Xe = /[#\?:]/g,
  We = /[#\?]/g,
  Ze = /[#\?@]/g,
  Ye = /#/g,
  Te = function (a, b) {
    this.U = this.I = null;
    this.ea = a || null;
    this.la = !!b;
  },
  bf = function (a) {
    a.I ||
      ((a.I = new Map()),
      (a.U = 0),
      a.ea &&
        Ne(a.ea, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
h = Te.prototype;
h.Na = function () {
  bf(this);
  return this.U;
};
h.add = function (a, b) {
  bf(this);
  this.ea = null;
  a = cf(this, a);
  var c = this.I.get(a);
  c || this.I.set(a, (c = []));
  c.push(b);
  this.U = Na(this.U) + 1;
  return this;
};
h.remove = function (a) {
  bf(this);
  a = cf(this, a);
  return this.I.has(a) ? ((this.ea = null), (this.U = Na(this.U) - this.I.get(a).length), this.I.delete(a)) : !1;
};
h.clear = function () {
  this.I = this.ea = null;
  this.U = 0;
};
h.Bb = function (a) {
  bf(this);
  a = cf(this, a);
  return this.I.has(a);
};
h.dc = function (a) {
  var b = this.ja();
  return w(b, a);
};
h.forEach = function (a, b) {
  bf(this);
  this.I.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
h.Ga = function () {
  bf(this);
  for (var a = Array.from(this.I.values()), b = Array.from(this.I.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
h.ja = function (a) {
  bf(this);
  var b = [];
  if ("string" === typeof a) this.Bb(a) && (b = b.concat(this.I.get(cf(this, a))));
  else {
    a = Array.from(this.I.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
h.set = function (a, b) {
  bf(this);
  this.ea = null;
  a = cf(this, a);
  this.Bb(a) && (this.U = Na(this.U) - this.I.get(a).length);
  this.I.set(a, [b]);
  this.U = Na(this.U) + 1;
  return this;
};
h.get = function (a, b) {
  if (!a) return b;
  a = this.ja(a);
  return 0 < a.length ? String(a[0]) : b;
};
h.toString = function () {
  if (this.ea) return this.ea;
  if (!this.I) return "";
  for (var a = [], b = Array.from(this.I.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.ja(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.ea = a.join("&"));
};
h.clone = function () {
  var a = new Te();
  a.ea = this.ea;
  this.I && ((a.I = new Map(this.I)), (a.U = this.U));
  return a;
};
var cf = function (a, b) {
  b = String(b);
  a.la && (b = b.toLowerCase());
  return b;
};
Te.prototype.Fd = function (a) {
  a &&
    !this.la &&
    (bf(this),
    (this.ea = null),
    this.I.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c),
        this.remove(d),
        0 < b.length && ((this.ea = null), this.I.set(cf(this, d), bb(b)), (this.U = Na(this.U) + b.length)));
    }, this));
  this.la = a;
};
Te.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Ke(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var ef = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, k, l, m, n, q) {
      if ("%" == m) return "%";
      var x = c.shift();
      if ("undefined" == typeof x) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = x;
      return df[m].apply(null, arguments);
    });
  },
  df = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a = -1 < b.indexOf("-", 0) ? a + Wc(" ", Number(c) - a.length) : Wc(" ", Number(c) - a.length) + a);
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      return (d = 0 <= b.indexOf("-", 0) ? f + d + Wc(" ", a) : f + Wc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
    },
    d: function (a, b, c, d, e, f, g, k) {
      return df.f(parseInt(a, 10), b, c, d, 0, f, g, k);
    }
  };
df.i = df.d;
df.u = df.d;
function ff(a) {
  var b = (new Date().getTime() - a) / 1e3;
  if (60 > b) return gf(b, "second") + " ago";
  b /= 60;
  if (60 > b) return gf(b, "minute") + " ago";
  b /= 60;
  if (24 > b) return gf(b, "hour") + " ago";
  b /= 24;
  return 365 > b ? gf(b, "day") + " ago" : new Date(a).toLocaleDateString();
}
function gf(a, b) {
  a = Math.round(a);
  return ef("%d %s%s", a, b, 1 == a ? "" : "s");
}
function hf(a, b) {
  var c = $e(b);
  a = $e(a);
  if (a.aa == c.aa) {
    b = c.X.split("/");
    var d = a.X.split("/");
    a = b.pop();
    var e = b.join("/") + "/",
      f = "",
      g = 0;
    for (d.pop(); -1 == e.indexOf(d.join("/") + "/"); ) d.pop(), (f += "../"), g++;
    return g == d.length ? c.X : g < b.length - 1 ? ((c = b.slice(d.length)), c.length && (f += c.join("/") + "/"), f + a) : c.X;
  }
  return b;
}
var jf = function (a) {
  this.action = a ? a.action : void 0;
  this.buttonAction = a ? a.buttonAction : void 0;
  this.ids = a ? a.ids : [];
  this.selectedView = a ? a.selectedView : "";
};
var kf = function (a) {
  kf[" "](a);
  return a;
};
kf[" "] = function () {};
var lf = [],
  mf = function (a) {
    u(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "Za";
    if (a.Za && a.hasOwnProperty(b)) return a.Za;
    lf.push(a);
    var c = new a();
    a.Za = c;
    u(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
var nf = function (a, b) {
  this.Kf = a[p.Symbol.iterator]();
  this.qg = b;
};
nf.prototype[Symbol.iterator] = function () {
  return this;
};
nf.prototype.next = function () {
  var a = this.Kf.next();
  return { value: a.done ? void 0 : this.qg.call(void 0, a.value), done: a.done };
};
var of = function (a, b) {
  return new nf(a, b);
};
var pf = function () {};
pf.prototype.next = function () {
  return qf;
};
var qf = $c({ done: !0, value: void 0 });
pf.prototype.Ka = function () {
  return this;
};
var uf = function (a) {
    if (a instanceof rf || a instanceof sf || a instanceof tf) return a;
    if ("function" == typeof a.next)
      return new rf(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new rf(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.Ka)
      return new rf(function () {
        return a.Ka();
      });
    throw Error("Not an iterator or iterable.");
  },
  rf = function (a) {
    this.ad = a;
  };
rf.prototype.Ka = function () {
  return new sf(this.ad());
};
rf.prototype[Symbol.iterator] = function () {
  return new tf(this.ad());
};
rf.prototype.Pd = function () {
  return new tf(this.ad());
};
var sf = function (a) {
  this.Kb = a;
};
ra(sf, pf);
sf.prototype.next = function () {
  return this.Kb.next();
};
sf.prototype[Symbol.iterator] = function () {
  return new tf(this.Kb);
};
sf.prototype.Pd = function () {
  return new tf(this.Kb);
};
var tf = function (a) {
  rf.call(this, function () {
    return a;
  });
  this.Kb = a;
};
ra(tf, rf);
tf.prototype.next = function () {
  return this.Kb.next();
};
var vf = function (a, b) {
  this.F = {};
  this.A = [];
  this.Wb = this.size = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
h = vf.prototype;
h.Na = function () {
  return this.size;
};
h.ja = function () {
  wf(this);
  for (var a = [], b = 0; b < this.A.length; b++) a.push(this.F[this.A[b]]);
  return a;
};
h.Ga = function () {
  wf(this);
  return this.A.concat();
};
h.Bb = function (a) {
  return this.has(a);
};
h.has = function (a) {
  return xf(this.F, a);
};
h.dc = function (a) {
  for (var b = 0; b < this.A.length; b++) {
    var c = this.A[b];
    if (xf(this.F, c) && this.F[c] == a) return !0;
  }
  return !1;
};
h.equals = function (a, b) {
  if (this === a) return !0;
  if (this.size != a.Na()) return !1;
  b = b || yf;
  wf(this);
  for (var c, d = 0; (c = this.A[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
  return !0;
};
var yf = function (a, b) {
  return a === b;
};
vf.prototype.clear = function () {
  this.F = {};
  this.A.length = 0;
  this.Ia(0);
  this.Wb = 0;
};
vf.prototype.remove = function (a) {
  return this.delete(a);
};
vf.prototype.delete = function (a) {
  return xf(this.F, a) ? (delete this.F[a], this.Ia(this.size - 1), this.Wb++, this.A.length > 2 * this.size && wf(this), !0) : !1;
};
var wf = function (a) {
  if (a.size != a.A.length) {
    for (var b = 0, c = 0; b < a.A.length; ) {
      var d = a.A[b];
      xf(a.F, d) && (a.A[c++] = d);
      b++;
    }
    a.A.length = c;
  }
  if (a.size != a.A.length) {
    var e = {};
    for (c = b = 0; b < a.A.length; ) (d = a.A[b]), xf(e, d) || ((a.A[c++] = d), (e[d] = 1)), b++;
    a.A.length = c;
  }
};
h = vf.prototype;
h.get = function (a, b) {
  return xf(this.F, a) ? this.F[a] : b;
};
h.set = function (a, b) {
  xf(this.F, a) || (this.Ia(this.size + 1), this.A.push(a), this.Wb++);
  this.F[a] = b;
};
h.addAll = function (a) {
  if (a instanceof vf) for (var b = a.Ga(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
  else for (b in a) this.set(b, a[b]);
};
h.forEach = function (a, b) {
  for (var c = this.Ga(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
h.clone = function () {
  return new vf(this);
};
h.toObject = function () {
  wf(this);
  for (var a = {}, b = 0; b < this.A.length; b++) {
    var c = this.A[b];
    a[c] = this.F[c];
  }
  return a;
};
h.keys = function () {
  return uf(this.Ka(!0)).Pd();
};
h.values = function () {
  return uf(this.Ka(!1)).Pd();
};
h.entries = function () {
  var a = this;
  return of(this.keys(), function (b) {
    return [b, a.get(b)];
  });
};
h.Ka = function (a) {
  wf(this);
  var b = 0,
    c = this.Wb,
    d = this,
    e = new pf();
  e.next = function () {
    if (c != d.Wb) throw Error("The map has changed since the iterator was created");
    if (b >= d.A.length) return qf;
    var f = d.A[b++];
    return { value: a ? f : d.F[f], done: !1 };
  };
  return e;
};
h.Ia = function (a) {
  this.size = a;
};
var xf = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var zf = function (a) {
    this.F = new vf();
    this.size = 0;
    a && this.addAll(a);
  },
  Af = function (a) {
    var b = typeof a;
    return ("object" == b && a) || "function" == b ? "o" + Da(a) : b.slice(0, 1) + a;
  };
h = zf.prototype;
h.Na = function () {
  return this.F.size;
};
h.add = function (a) {
  this.F.set(Af(a), a);
  this.Ia(this.F.size);
};
h.addAll = function (a) {
  a = Ie(a);
  for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
  this.Ia(this.F.size);
};
h.removeAll = function (a) {
  a = Ie(a);
  for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
  this.Ia(this.F.size);
};
h.delete = function (a) {
  a = this.F.remove(Af(a));
  this.Ia(this.F.size);
  return a;
};
h.remove = function (a) {
  return this.delete(a);
};
h.clear = function () {
  this.F.clear();
  this.Ia(0);
};
h.has = function (a) {
  return this.F.Bb(Af(a));
};
h.contains = function (a) {
  return this.F.Bb(Af(a));
};
h.Ee = function (a) {
  var b = new zf();
  a = Ie(a);
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    this.contains(d) && b.add(d);
  }
};
h.ja = function () {
  return this.F.ja();
};
h.values = function () {
  return this.F.values();
};
h.clone = function () {
  return new zf(this);
};
h.equals = function (a) {
  return this.Na() == He(a) && Bf(this, a);
};
var Bf = function (a, b) {
  var c = He(b);
  if (a.Na() > c) return !1;
  !(b instanceof zf) && 5 < c && (b = new zf(b));
  return Le(a, function (d) {
    var e = b;
    return e.contains && "function" == typeof e.contains
      ? e.contains(d)
      : e.dc && "function" == typeof e.dc
      ? e.dc(d)
      : ya(e) || "string" === typeof e
      ? w(e, d)
      : ob(e, d);
  });
};
zf.prototype.Ka = function () {
  return this.F.Ka(!1);
};
zf.prototype[Symbol.iterator] = function () {
  return this.values();
};
zf.prototype.Ia = function (a) {
  this.size = a;
};
var Cf = function () {
  this.recordedTags = this.recordedPages = 0;
  this.lastRecordedTabId = this.recordingEnabledTabId = -2;
};
var Df = function (a) {
    return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
  },
  Ef = function (a) {
    return a.classList ? a.classList : Df(a).match(/\S+/g) || [];
  },
  Ff = function (a, b) {
    "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
  },
  Gf = function (a, b) {
    return a.classList ? a.classList.contains(b) : w(Ef(a), b);
  },
  H = function (a, b) {
    if (a.classList) a.classList.add(b);
    else if (!Gf(a, b)) {
      var c = Df(a);
      Ff(a, c + (0 < c.length ? " " + b : b));
    }
  },
  Hf = function (a, b) {
    if (a.classList)
      Array.prototype.forEach.call(b, function (e) {
        H(a, e);
      });
    else {
      var c = {};
      Array.prototype.forEach.call(Ef(a), function (e) {
        c[e] = !0;
      });
      Array.prototype.forEach.call(b, function (e) {
        c[e] = !0;
      });
      b = "";
      for (var d in c) b += 0 < b.length ? " " + d : d;
      Ff(a, b);
    }
  },
  If = function (a, b) {
    a.classList
      ? a.classList.remove(b)
      : Gf(a, b) &&
        Ff(
          a,
          Array.prototype.filter
            .call(Ef(a), function (c) {
              return c != b;
            })
            .join(" ")
        );
  },
  Jf = function (a, b) {
    a.classList
      ? Array.prototype.forEach.call(b, function (c) {
          If(a, c);
        })
      : Ff(
          a,
          Array.prototype.filter
            .call(Ef(a), function (c) {
              return !w(b, c);
            })
            .join(" ")
        );
  },
  Kf = function (a, b, c) {
    c ? H(a, b) : If(a, b);
  },
  Lf = function (a, b) {
    var c = !Gf(a, b);
    Kf(a, b, c);
  };
function Mf() {
  return nc ? !!uc && !!uc.platform : !1;
}
function Nf() {
  return y("iPhone") && !y("iPod") && !y("iPad");
}
function Of() {
  return Nf() || y("iPad") || y("iPod");
}
function Pf() {
  return Mf() ? "macOS" === uc.platform : y("Macintosh");
}
var Qf = Pf(),
  Rf = Mf() ? "Windows" === uc.platform : y("Windows"),
  Sf = Mf() ? "Android" === uc.platform : y("Android"),
  Tf = Nf(),
  Uf = y("iPad"),
  Vf = y("iPod"),
  Wf = Of();
var I = function (a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0;
};
I.prototype.clone = function () {
  return new I(this.x, this.y);
};
I.prototype.toString = function () {
  return "(" + this.x + ", " + this.y + ")";
};
I.prototype.equals = function (a) {
  return a instanceof I && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
};
var Xf = function (a, b) {
  return new I(a.x - b.x, a.y - b.y);
};
h = I.prototype;
h.ceil = function () {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
h.floor = function () {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
h.round = function () {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
h.translate = function (a, b) {
  a instanceof I ? ((this.x += a.x), (this.y += a.y)) : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
  return this;
};
h.scale = function (a, b) {
  this.x *= a;
  this.y *= "number" === typeof b ? b : a;
  return this;
};
var Yf = function (a, b) {
  this.width = a;
  this.height = b;
};
h = Yf.prototype;
h.clone = function () {
  return new Yf(this.width, this.height);
};
h.toString = function () {
  return "(" + this.width + " x " + this.height + ")";
};
h.aspectRatio = function () {
  return this.width / this.height;
};
h.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
h.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
h.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
h.scale = function (a, b) {
  this.width *= a;
  this.height *= "number" === typeof b ? b : a;
  return this;
};
var ag = function (a) {
    return a ? new Zf($f(a)) : Ka || (Ka = new Zf());
  },
  J = function (a) {
    return bg(document, a);
  },
  bg = function (a, b) {
    return "string" === typeof b ? a.getElementById(b) : b;
  },
  cg = function () {
    var a = document;
    Oa("footer");
    a = bg(a, "footer");
    return u(a, "No element found with id: footer");
  },
  eg = function (a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : dg(document, "*", a, b);
  },
  fg = function (a, b) {
    var c = b || document;
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
    else {
      c = document;
      var d = b || c;
      a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : dg(c, "*", a, b)[0] || null;
    }
    return a || null;
  },
  dg = function (a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, g; (g = a[f]); f++) b == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; (g = a[f]); f++) (b = g.className), "function" == typeof b.split && w(b.split(/\s+/), c) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return a;
  },
  hg = function (a, b) {
    jb(b, function (c, d) {
      c && "object" == typeof c && c.Ha && (c = c.ia());
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : gg.hasOwnProperty(d)
        ? a.setAttribute(gg[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  },
  gg = {
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
  kg = function (a) {
    var b = ig(a);
    a = jg(a);
    return new I(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  },
  ig = function (a) {
    return a.scrollingElement ? a.scrollingElement : a.body || a.documentElement;
  },
  jg = function (a) {
    return a.parentWindow || a.defaultView;
  },
  mg = function (a, b, c) {
    return lg(document, arguments);
  },
  lg = function (a, b) {
    var c = b[1],
      d = ng(a, String(b[0]));
    c && ("string" === typeof c ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : hg(d, c));
    2 < b.length && og(a, d, b, 2);
    return d;
  },
  og = function (a, b, c, d) {
    function e(k) {
      k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k);
    }
    for (; d < c.length; d++) {
      var f = c[d];
      if (!ya(f) || (Aa(f) && 0 < f.nodeType)) e(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (Aa(f)) {
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
        Wa(g ? bb(f) : f, e);
      }
    }
  },
  ng = function (a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  },
  pg = function (a, b) {
    u(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(b);
  },
  qg = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  },
  rg = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  },
  sg = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  },
  $f = function (a) {
    u(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  },
  tg = function (a, b) {
    u(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(u(a.lastChild));
      a.firstChild.data = String(b);
    } else {
      qg(a);
      var c = $f(a);
      a.appendChild(c.createTextNode(String(b)));
    }
  },
  ug = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
  vg = { IMG: " ", BR: "\n" },
  wg = function (a, b) {
    b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
  },
  xg = function (a) {
    return a.hasAttribute("tabindex");
  },
  yg = function (a) {
    a = a.tabIndex;
    return "number" === typeof a && 0 <= a && 32768 > a;
  },
  Ag = function (a) {
    var b = [];
    zg(a, b, !1);
    return b.join("");
  },
  zg = function (a, b, c) {
    if (!(a.nodeName in ug))
      if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
      else if (a.nodeName in vg) b.push(vg[a.nodeName]);
      else for (a = a.firstChild; a; ) zg(a, b, c), (a = a.nextSibling);
  },
  Bg = function (a, b) {
    for (var c = 0; a; ) {
      u("parentNode" != a.name);
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  },
  Zf = function (a) {
    this.H = a || p.document || document;
  };
h = Zf.prototype;
h.ra = ag;
h.g = function (a) {
  return bg(this.H, a);
};
h.$ = Zf.prototype.g;
h.getElementsByTagName = function (a, b) {
  return (b || this.H).getElementsByTagName(String(a));
};
h.setProperties = hg;
h.v = function (a, b, c) {
  return lg(this.H, arguments);
};
h.createElement = function (a) {
  return ng(this.H, a);
};
h.createTextNode = function (a) {
  return this.H.createTextNode(String(a));
};
h.bd = function () {
  var a = this.H;
  try {
    var b = a && a.activeElement;
    var c = b && b.nodeName ? b : null;
  } catch (d) {
    c = null;
  }
  return c;
};
h.appendChild = pg;
h.append = function (a, b) {
  og($f(a), a, arguments, 1);
};
h.canHaveChildren = function (a) {
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
h.Cd = qg;
h.removeNode = rg;
h.getChildren = function (a) {
  return void 0 != a.children
    ? a.children
    : Array.prototype.filter.call(a.childNodes, function (b) {
        return 1 == b.nodeType;
      });
};
h.isElement = function (a) {
  return Aa(a) && 1 == a.nodeType;
};
h.isWindow = function (a) {
  return Aa(a) && a.window == a;
};
h.contains = sg;
h.kd = function (a) {
  return ("A" == a.tagName && a.hasAttribute("href")) ||
    "INPUT" == a.tagName ||
    "TEXTAREA" == a.tagName ||
    "SELECT" == a.tagName ||
    "BUTTON" == a.tagName
    ? !a.disabled && (!xg(a) || yg(a))
    : xg(a) && yg(a);
};
function Cg(a) {
  a && "function" == typeof a.Ba && a.Ba();
}
var Dg = function () {
  this.Ua = this.Ua;
  this.ab = this.ab;
};
Dg.prototype.Ua = !1;
Dg.prototype.Ba = function () {
  this.Ua || ((this.Ua = !0), this.B());
};
var Eg = function (a, b) {
  a.Ua ? b() : (a.ab || (a.ab = []), a.ab.push(b));
};
Dg.prototype.B = function () {
  if (this.ab) for (; this.ab.length; ) this.ab.shift()();
};
var Fg = function (a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Nb = !1;
};
Fg.prototype.stopPropagation = function () {
  this.Nb = !0;
};
Fg.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var Gg = "PointerEvent" in p,
  Hg = (function () {
    if (!p.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      p.addEventListener("test", c, b);
      p.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
var Ig = function (a, b) {
  Fg.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.vd = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.Da = null;
  a && this.hd(a, b);
};
t(Ig, Fg);
var Jg = $c({ 2: "touch", 3: "pen", 4: "mouse" });
Ig.prototype.hd = function (a, b) {
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
  this.vd = Qf ? a.metaKey : a.ctrlKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Jg[a.pointerType] || "";
  this.state = a.state;
  this.Da = a;
  a.defaultPrevented && Ig.o.preventDefault.call(this);
};
Ig.prototype.stopPropagation = function () {
  Ig.o.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : (this.Da.cancelBubble = !0);
};
Ig.prototype.preventDefault = function () {
  Ig.o.preventDefault.call(this);
  var a = this.Da;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var Kg = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  Lg = function (a) {
    return !(!a || !a[Kg]);
  };
var Mg = 0;
var Ng = function (a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.pc = e;
    this.key = ++Mg;
    this.removed = this.Yb = !1;
  },
  Og = function (a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.pc = null;
  };
var Pg = function (a) {
  this.src = a;
  this.W = {};
  this.Vb = 0;
};
Pg.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.W[f];
  a || ((a = this.W[f] = []), this.Vb++);
  var g = Qg(a, b, d, e);
  -1 < g ? ((b = a[g]), c || (b.Yb = !1)) : ((b = new Ng(b, this.src, f, !!d, e)), (b.Yb = c), a.push(b));
  return b;
};
Pg.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.W)) return !1;
  var e = this.W[a];
  b = Qg(e, b, c, d);
  return -1 < b
    ? (Og(e[b]), u(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.W[a], this.Vb--), !0)
    : !1;
};
var Rg = function (a, b) {
  var c = b.type;
  c in a.W && ab(a.W[c], b) && (Og(b), 0 == a.W[c].length && (delete a.W[c], a.Vb--));
};
Pg.prototype.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.W)
    if (!a || c == a) {
      for (var d = this.W[c], e = 0; e < d.length; e++) ++b, Og(d[e]);
      delete this.W[c];
      this.Vb--;
    }
  return b;
};
Pg.prototype.Gb = function (a, b, c, d) {
  a = this.W[a.toString()];
  var e = -1;
  a && (e = Qg(a, b, c, d));
  return -1 < e ? a[e] : null;
};
Pg.prototype.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return mb(this.W, function (f) {
    for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
    return !1;
  });
};
var Qg = function (a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.pc == d) return e;
  }
  return -1;
};
var Sg = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Tg = {},
  Ug = 0,
  K = function (a, b, c, d, e) {
    if (d && d.once) return Vg(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e);
      return null;
    }
    c = Wg(c);
    return Lg(a) ? a.listen(b, c, Aa(d) ? !!d.capture : !!d, e) : Xg(a, b, c, !1, d, e);
  },
  Xg = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Aa(e) ? !!e.capture : !!e,
      k = Yg(a);
    k || (a[Sg] = k = new Pg(a));
    c = k.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = Zg();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Hg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent($g(b.toString()), d);
    else if (a.addListener && a.removeListener) u("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Ug++;
    return c;
  },
  Zg = function () {
    var a = ah,
      b = function (c) {
        return a.call(b.src, b.listener, c);
      };
    return b;
  },
  Vg = function (a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) Vg(a, b[f], c, d, e);
      return null;
    }
    c = Wg(c);
    return Lg(a) ? a.Mb(b, c, Aa(d) ? !!d.capture : !!d, e) : Xg(a, b, c, !0, d, e);
  },
  bh = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) bh(a, b[f], c, d, e);
    else (d = Aa(d) ? !!d.capture : !!d), (c = Wg(c)), Lg(a) ? a.Ja(b, c, d, e) : a && (a = Yg(a)) && (b = a.Gb(b, c, d, e)) && ch(b);
  },
  ch = function (a) {
    if ("number" !== typeof a && a && !a.removed) {
      var b = a.src;
      if (Lg(b)) Rg(b.pa, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent($g(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        Ug--;
        (c = Yg(b)) ? (Rg(c, a), 0 == c.Vb && ((c.src = null), (b[Sg] = null))) : Og(a);
      }
    }
  },
  dh = function (a) {
    if (Lg(a)) return a.hasListener(void 0, void 0);
    a = Yg(a);
    return !!a && a.hasListener(void 0, void 0);
  },
  $g = function (a) {
    return a in Tg ? Tg[a] : (Tg[a] = "on" + a);
  },
  ah = function (a, b) {
    if (a.removed) a = !0;
    else {
      b = new Ig(b, this);
      var c = a.listener,
        d = a.pc || a.src;
      a.Yb && ch(a);
      a = c.call(d, b);
    }
    return a;
  },
  Yg = function (a) {
    a = a[Sg];
    return a instanceof Pg ? a : null;
  },
  eh = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
  Wg = function (a) {
    u(a, "Listener can not be null.");
    if ("function" === typeof a) return a;
    u(a.handleEvent, "An object listener must have handleEvent method.");
    a[eh] ||
      (a[eh] = function (b) {
        return a.handleEvent(b);
      });
    return a[eh];
  };
var fh = function (a) {
  Dg.call(this);
  this.V = a;
  this.A = {};
};
t(fh, Dg);
var gh = [];
fh.prototype.listen = function (a, b, c, d) {
  Array.isArray(b) || (b && (gh[0] = b.toString()), (b = gh));
  for (var e = 0; e < b.length; e++) {
    var f = K(a, b[e], c || this.handleEvent, d || !1, this.V || this);
    if (!f) break;
    this.A[f.key] = f;
  }
  return this;
};
fh.prototype.Mb = function (a, b, c, d) {
  return hh(this, a, b, c, d);
};
var hh = function (a, b, c, d, e, f) {
  if (Array.isArray(c)) for (var g = 0; g < c.length; g++) hh(a, b, c[g], d, e, f);
  else {
    b = Vg(b, c, d || a.handleEvent, e, f || a.V || a);
    if (!b) return a;
    a.A[b.key] = b;
  }
  return a;
};
fh.prototype.Ja = function (a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.Ja(a, b[f], c, d, e);
  else
    (c = c || this.handleEvent),
      (d = Aa(d) ? !!d.capture : !!d),
      (e = e || this.V || this),
      (c = Wg(c)),
      (d = !!d),
      (b = Lg(a) ? a.Gb(b, c, d, e) : a ? ((a = Yg(a)) ? a.Gb(b, c, d, e) : null) : null),
      b && (ch(b), delete this.A[b.key]);
  return this;
};
fh.prototype.removeAll = function () {
  jb(
    this.A,
    function (a, b) {
      this.A.hasOwnProperty(b) && ch(a);
    },
    this
  );
  this.A = {};
};
fh.prototype.B = function () {
  fh.o.B.call(this);
  this.removeAll();
};
fh.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
var L = function () {
  Dg.call(this);
  this.pa = new Pg(this);
  this.Hf = this;
  this.uc = null;
};
t(L, Dg);
L.prototype[Kg] = !0;
h = L.prototype;
h.Gd = function (a) {
  this.uc = a;
};
h.addEventListener = function (a, b, c, d) {
  K(this, a, b, c, d);
};
h.removeEventListener = function (a, b, c, d) {
  bh(this, a, b, c, d);
};
h.dispatchEvent = function (a) {
  ih(this);
  var b = this.uc;
  if (b) {
    var c = [];
    for (var d = 1; b; b = b.uc) c.push(b), u(1e3 > ++d, "infinite loop");
  }
  b = this.Hf;
  d = a.type || a;
  if ("string" === typeof a) a = new Fg(a, b);
  else if (a instanceof Fg) a.target = a.target || b;
  else {
    var e = a;
    a = new Fg(d, b);
    tb(a, e);
  }
  e = !0;
  if (c)
    for (var f = c.length - 1; !a.Nb && 0 <= f; f--) {
      var g = (a.currentTarget = c[f]);
      e = jh(g, d, !0, a) && e;
    }
  a.Nb || ((g = a.currentTarget = b), (e = jh(g, d, !0, a) && e), a.Nb || (e = jh(g, d, !1, a) && e));
  if (c) for (f = 0; !a.Nb && f < c.length; f++) (g = a.currentTarget = c[f]), (e = jh(g, d, !1, a) && e);
  return e;
};
h.B = function () {
  L.o.B.call(this);
  this.pa && this.pa.removeAll(void 0);
  this.uc = null;
};
h.listen = function (a, b, c, d) {
  ih(this);
  return this.pa.add(String(a), b, !1, c, d);
};
h.Mb = function (a, b, c, d) {
  return this.pa.add(String(a), b, !0, c, d);
};
h.Ja = function (a, b, c, d) {
  return this.pa.remove(String(a), b, c, d);
};
var jh = function (a, b, c, d) {
  b = a.pa.W[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.removed && g.capture == c) {
      var k = g.listener,
        l = g.pc || g.src;
      g.Yb && Rg(a.pa, g);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !d.defaultPrevented;
};
L.prototype.Gb = function (a, b, c, d) {
  return this.pa.Gb(String(a), b, c, d);
};
L.prototype.hasListener = function (a, b) {
  return this.pa.hasListener(void 0 !== a ? String(a) : void 0, b);
};
var ih = function (a) {
  u(a.pa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var kh = {
  Mc: "mousedown",
  Nc: "mouseup",
  Lc: "mousecancel",
  qf: "mousemove",
  sf: "mouseover",
  rf: "mouseout",
  nf: "mouseenter",
  pf: "mouseleave"
};
var lh = {
  Mc: Gg ? "pointerdown" : "mousedown",
  Nc: Gg ? "pointerup" : "mouseup",
  Lc: Gg ? "pointercancel" : "mousecancel",
  qf: Gg ? "pointermove" : "mousemove",
  sf: Gg ? "pointerover" : "mouseover",
  rf: Gg ? "pointerout" : "mouseout",
  nf: Gg ? "pointerenter" : "mouseenter",
  pf: Gg ? "pointerleave" : "mouseleave"
};
var mh = function (a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
};
h = mh.prototype;
h.ed = function () {
  return this.right - this.left;
};
h.clone = function () {
  return new mh(this.top, this.right, this.bottom, this.left);
};
h.toString = function () {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
h.contains = function (a) {
  return this && a
    ? a instanceof mh
      ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
      : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
    : !1;
};
h.expand = function (a, b, c, d) {
  Aa(a)
    ? ((this.top -= a.top), (this.right += a.right), (this.bottom += a.bottom), (this.left -= a.left))
    : ((this.top -= a), (this.right += Number(b)), (this.bottom += Number(c)), (this.left -= Number(d)));
  return this;
};
h.ceil = function () {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
h.floor = function () {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
h.round = function () {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
h.translate = function (a, b) {
  a instanceof I
    ? ((this.left += a.x), (this.right += a.x), (this.top += a.y), (this.bottom += a.y))
    : (Na(a), (this.left += a), (this.right += a), "number" === typeof b && ((this.top += b), (this.bottom += b)));
  return this;
};
h.scale = function (a, b) {
  b = "number" === typeof b ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= b;
  this.bottom *= b;
  return this;
};
var nh = function (a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
};
h = nh.prototype;
h.clone = function () {
  return new nh(this.left, this.top, this.width, this.height);
};
h.toString = function () {
  return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
};
h.Ee = function (a) {
  var b = Math.max(this.left, a.left),
    c = Math.min(this.left + this.width, a.left + a.width);
  if (b <= c) {
    var d = Math.max(this.top, a.top);
    a = Math.min(this.top + this.height, a.top + a.height);
    d <= a && ((this.left = b), (this.top = d), (this.width = c - b), (this.height = a - d));
  }
};
h.contains = function (a) {
  return a instanceof I
    ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
};
h.getSize = function () {
  return new Yf(this.width, this.height);
};
h.ceil = function () {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
h.floor = function () {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
h.round = function () {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
h.translate = function (a, b) {
  a instanceof I ? ((this.left += a.x), (this.top += a.y)) : ((this.left += Na(a)), "number" === typeof b && (this.top += b));
  return this;
};
h.scale = function (a, b) {
  b = "number" === typeof b ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= b;
  this.height *= b;
  return this;
};
var oh = function () {};
oh.prototype.ha = function () {};
var M = function (a, b, c) {
    if ("string" === typeof b) (b = ph(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = ph(c, d);
        f && (c.style[f] = e);
      }
  },
  qh = {},
  ph = function (a, b) {
    var c = qh[b];
    if (!c) {
      var d = Yc(b);
      c = d;
      void 0 === a.style[d] && ((d = "Webkit" + Zc(d)), void 0 !== a.style[d] && (c = d));
      qh[b] = c;
    }
    return c;
  },
  rh = function (a, b) {
    var c = $f(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  },
  sh = function (a, b) {
    return rh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
  },
  uh = function (a, b, c) {
    if (b instanceof I) {
      var d = b.x;
      b = b.y;
    } else (d = b), (b = c);
    a.style.left = th(d);
    a.style.top = th(b);
  },
  vh = function (a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  },
  wh = function (a) {
    var b = $f(a),
      c = sh(a, "position"),
      d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (11 == a.nodeType && a.host && (a = a.host),
        (c = sh(a, "position")),
        (d = d && "static" == c && a != b.documentElement && a != b.body),
        !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
      )
        return a;
    return null;
  },
  yh = function (a) {
    for (var b = new mh(0, Infinity, Infinity, 0), c = ag(a), d = c.H.body, e = c.H.documentElement, f = ig(c.H); (a = wh(a)); )
      if ((0 != a.clientHeight || a != d) && a != d && a != e && "visible" != sh(a, "overflow")) {
        var g = xh(a),
          k = new I(a.clientLeft, a.clientTop);
        g.x += k.x;
        g.y += k.y;
        b.top = Math.max(b.top, g.y);
        b.right = Math.min(b.right, g.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
        b.left = Math.max(b.left, g.x);
      }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = (jg(c.H) || window).document;
    c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
    c = new Yf(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
  },
  xh = function (a) {
    var b = $f(a);
    Pa(a, "Parameter is required");
    var c = new I(0, 0),
      d = (b ? $f(b) : document).documentElement;
    if (a == d) return c;
    a = vh(a);
    b = kg(ag(b).H);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  },
  Ah = function (a, b) {
    a = zh(a);
    b = zh(b);
    return new I(a.x - b.x, a.y - b.y);
  },
  Bh = function (a) {
    a = vh(a);
    return new I(a.left, a.top);
  },
  zh = function (a) {
    u(a);
    if (1 == a.nodeType) return Bh(a);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new I(a.clientX, a.clientY);
  },
  th = function (a) {
    "number" == typeof a && (a += "px");
    return a;
  },
  Dh = function (a) {
    var b = Ch;
    if ("none" != sh(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  },
  Ch = function (a) {
    var b = a.offsetWidth,
      c = a.offsetHeight;
    return (void 0 !== b && (b || c)) || !a.getBoundingClientRect
      ? new Yf(b, c)
      : ((a = vh(a)), new Yf(a.right - a.left, a.bottom - a.top));
  },
  Eh = function (a) {
    var b = xh(a);
    a = Dh(a);
    return new nh(b.x, b.y, a.width, a.height);
  },
  Fh = function (a, b) {
    a.style.display = b ? "" : "none";
  },
  Gh = function (a) {
    return "rtl" == sh(a, "direction");
  };
var Hh = (function () {
  if (Rf) {
    var a = /Windows NT ([0-9.]+)/;
    return (a = a.exec(tc())) ? a[1] : "0";
  }
  return Qf
    ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(tc())) ? a[0].replace(/_/g, ".") : "10")
    : Sf
    ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(tc())) ? a[1] : "")
    : Tf || Uf || Vf
    ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(tc())) ? a[1].replace(/_/g, ".") : "")
    : "";
})();
var Ih = yc(),
  Jh = Nf() || y("iPod"),
  Kh = y("iPad"),
  Lh = y("Android") && !(zc() || yc() || (xc() ? 0 : y("Opera")) || y("Silk")),
  Mh = zc(),
  Nh =
    y("Safari") &&
    !(
      zc() ||
      (xc() ? 0 : y("Coast")) ||
      (xc() ? 0 : y("Opera")) ||
      (xc() ? 0 : y("Edge")) ||
      (xc() ? wc("Microsoft Edge") : y("Edg/")) ||
      (xc() ? wc("Opera") : y("OPR")) ||
      yc() ||
      y("Silk") ||
      y("Android")
    ) &&
    !Of();
var Oh = function (a) {
    return (a = a.exec(tc())) ? a[1] : "";
  },
  Ph = (function () {
    if (Ih) return Oh(/Firefox\/([0-9.]+)/);
    if (Mh) {
      if (Of() || Pf()) {
        var a = Oh(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return Oh(/Chrome\/([0-9.]+)/);
    }
    if (Nh && !Of()) return Oh(/Version\/([0-9.]+)/);
    if (Jh || Kh) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(tc()))) return a[1] + "." + a[2];
    } else if (Lh) return (a = Oh(/Android\s+([0-9.]+)/)) ? a : Oh(/Version\/([0-9.]+)/);
    return "";
  })();
var Th = function (a, b, c, d, e, f, g, k, l) {
    u(c);
    var m = Qh(c),
      n = Eh(a),
      q = yh(a);
    q && n.Ee(new nh(q.left, q.top, q.right - q.left, q.bottom - q.top));
    q = ag(a);
    var x = ag(c);
    if (q.H != x.H) {
      q = q.H.body;
      x = jg(x.H);
      var z = new I(0, 0);
      var A = (A = $f(q)) ? jg(A) : window;
      b: {
        try {
          kf(A.parent);
          var C = !0;
          break b;
        } catch (za) {}
        C = !1;
      }
      if (C) {
        C = q;
        do {
          var O = A == x ? xh(C) : Bh(u(C));
          z.x += O.x;
          z.y += O.y;
        } while (A && A != x && A != A.parent && (C = A.frameElement) && (A = A.parent));
      }
      q = Xf(z, xh(q));
      n.left += q.x;
      n.top += q.y;
    }
    a = Rh(a, b);
    b = n.left;
    a & 4 ? (b += n.width) : a & 2 && (b += n.width / 2);
    n = new I(b, n.top + (a & 1 ? n.height : 0));
    n = Xf(n, m);
    e && ((n.x += (a & 4 ? -1 : 1) * e.x), (n.y += (a & 1 ? -1 : 1) * e.y));
    if (g)
      if (l) var ha = l;
      else if ((ha = yh(c))) (ha.top -= m.y), (ha.right -= m.x), (ha.bottom -= m.y), (ha.left -= m.x);
    return Sh(n, c, d, f, ha, g, k);
  },
  Qh = function (a) {
    if ((a = a.offsetParent)) {
      var b = "HTML" == a.tagName || "BODY" == a.tagName;
      if (!b || "static" != sh(a, "position")) {
        var c = xh(a);
        if (!b) {
          b = Gh(a);
          var d;
          if ((d = b)) {
            if ((d = Wf)) d = 0 <= Tb(Hh, 10);
            var e = Mh && 0 <= Tb(Ph, 85);
            d = (Nh && 0 <= Tb(Ph, 10)) || d || e;
          }
          b = d ? -a.scrollLeft : b && "visible" != sh(a, "overflowX") ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
          c = Xf(c, new I(b, a.scrollTop));
        }
      }
    }
    return c || new I();
  },
  Sh = function (a, b, c, d, e, f, g) {
    a = a.clone();
    var k = Rh(b, c);
    c = Dh(b);
    g = g ? g.clone() : c.clone();
    a = a.clone();
    g = g.clone();
    var l = 0;
    if (d || 0 != k)
      k & 4 ? (a.x -= g.width + (d ? d.right : 0)) : k & 2 ? (a.x -= g.width / 2) : d && (a.x += d.left),
        k & 1 ? (a.y -= g.height + (d ? d.bottom : 0)) : d && (a.y += d.top);
    f &&
      (e
        ? ((d = g),
          (k = 0),
          65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2),
          132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5),
          a.x < e.left && f & 1 && ((a.x = e.left), (k |= 1)),
          f & 16 &&
            ((l = a.x),
            a.x < e.left && ((a.x = e.left), (k |= 4)),
            a.x + d.width > e.right &&
              ((d.width = Math.min(e.right - a.x, l + d.width - e.left)), (d.width = Math.max(d.width, 0)), (k |= 4))),
          a.x + d.width > e.right && f & 1 && ((a.x = Math.max(e.right - d.width, e.left)), (k |= 1)),
          f & 2 && (k |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)),
          a.y < e.top && f & 4 && ((a.y = e.top), (k |= 2)),
          f & 32 &&
            ((l = a.y),
            a.y < e.top && ((a.y = e.top), (k |= 8)),
            a.y + d.height > e.bottom &&
              ((d.height = Math.min(e.bottom - a.y, l + d.height - e.top)), (d.height = Math.max(d.height, 0)), (k |= 8))),
          a.y + d.height > e.bottom && f & 4 && ((a.y = Math.max(e.bottom - d.height, e.top)), (k |= 2)),
          f & 8 && (k |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ? 128 : 0)),
          (e = k))
        : (e = 256),
      (l = e));
    f = new nh(0, 0, 0, 0);
    f.left = a.x;
    f.top = a.y;
    f.width = g.width;
    f.height = g.height;
    e = l;
    if (e & 496) return e;
    uh(b, new I(f.left, f.top));
    g = f.getSize();
    c == g ||
      (c && g && c.width == g.width && c.height == g.height) ||
      ((c = g),
      (b = b.style),
      (b.WebkitBoxSizing = "border-box"),
      (b.width = Math.max(c.width, 0) + "px"),
      (b.height = Math.max(c.height, 0) + "px"));
    return e;
  },
  Rh = function (a, b) {
    return (b & 8 && Gh(a) ? b ^ 4 : b) & -9;
  };
var Uh = function (a, b, c) {
  this.element = a;
  this.ec = b;
  this.xg = c;
};
t(Uh, oh);
Uh.prototype.ha = function (a, b, c) {
  Th(this.element, this.ec, a, b, void 0, c, this.xg);
};
var Vh = function (a, b, c, d) {
  Uh.call(this, a, b);
  this.lg = c ? 5 : 0;
  this.ud = d || void 0;
};
t(Vh, Uh);
Vh.prototype.ha = function (a, b, c) {
  var d = Th(this.element, this.ec, a, b, null, c, 10, void 0, this.ud);
  if (d & 496) {
    var e = Wh(d, this.ec);
    b = Wh(d, b);
    d = Th(this.element, e, a, b, null, c, 10, void 0, this.ud);
    d & 496 && ((e = Wh(d, e)), (b = Wh(d, b)), Th(this.element, e, a, b, null, c, this.lg, void 0, this.ud));
  }
};
var Wh = function (a, b) {
  a & 48 && (b ^= 4);
  a & 192 && (b ^= 1);
  return b;
}; /*

 SPDX-License-Identifier: Apache-2.0
*/
var Xh = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var Yh = {};
var Zh = function () {},
  $h = function (a, b) {
    if (b !== Yh) throw Error("Bad secret");
    this.Te = a;
  };
ra($h, Zh);
$h.prototype.toString = function () {
  return this.Te;
};
var ai = ia([""]),
  bi = ja(["\x00"], ["\\0"]),
  ci = ja(["\n"], ["\\n"]),
  di = ja(["\x00"], ["\\u0000"]),
  ei = ia([""]),
  fi = ja(["\x00"], ["\\0"]),
  gi = ja(["\n"], ["\\n"]),
  hi = ja(["\x00"], ["\\u0000"]);
function ii(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!ji && a === a.raw) ||
    !((ji && !ki) || li(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function li(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function mi(a) {
  return -1 === a.toString().indexOf("`");
}
var ji =
    mi(function (a) {
      return a(ai);
    }) ||
    mi(function (a) {
      return a(bi);
    }) ||
    mi(function (a) {
      return a(ci);
    }) ||
    mi(function (a) {
      return a(di);
    }),
  ki = li(ei) && li(fi) && li(gi) && li(hi);
function ni(a) {
  ii(a, 0);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  Xh.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  return new $h(b, Yh);
}
var oi = "function" === typeof URL,
  pi = [],
  qi = function () {};
ri(function (a) {
  var b = ld(nd(), "safevalues").pg;
  if (b) {
    var c = "A URL with content '" + a + "' was sanitized away.",
      d = cd;
    if ((a = b))
      if ((a = b && d)) {
        a = d.value;
        var e = b ? id(ld(nd(), b.cd())) : bd;
        a = a >= e.value;
      }
    if (a) {
      d = d || bd;
      a = ld(nd(), b.cd());
      "function" === typeof c && (c = c());
      fd || (fd = new ed());
      e = fd;
      b = b.cd();
      if (0 < e.Zb) {
        var f = (e.ne + 1) % e.Zb;
        e.ne = f;
        e.Fe ? ((e = e.ua[f]), e.reset(d, c, b), (b = e)) : ((e.Fe = f == e.Zb - 1), (b = e.ua[f] = new gd(d, c, b)));
      } else b = new gd(d, c, b);
      a.publish(b);
    }
  }
});
function ri(a) {
  -1 === pi.indexOf(a) && pi.push(a);
  qi = function (b) {
    pi.forEach(function (c) {
      c(b);
    });
  };
}
function si(a) {
  var b = { Ag: !0 };
  b = void 0 === b ? {} : b;
  if (a instanceof Bc) return a;
  a = String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  b.Rj && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
  b.Ag && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
  b.Sj && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
  return Dc(a);
}
function ti(a) {
  var b = sa.apply(1, arguments);
  ii(a, b.length);
  if (0 === b.length) return Gb(a[0]);
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
  return Gb(c);
}
var vi = function (a) {
  this.isValid = a;
};
function wi(a) {
  return new vi(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var xi = [
  wi("data"),
  wi("http"),
  wi("https"),
  wi("mailto"),
  wi("ftp"),
  new vi(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })
];
var yi = { Vj: !0 },
  zi = { Xj: !0 },
  Ai = { Wj: !0 },
  Bi = { Uj: !0 },
  Ci = function () {
    throw Error("Do not instantiate directly");
  };
Ci.prototype.Cb = null;
Ci.prototype.getContent = function () {
  return this.content;
};
Ci.prototype.toString = function () {
  return this.content;
};
Ci.prototype.bf = function () {
  if (this.za !== yi) throw Error("Sanitized content was not of kind HTML.");
  return Lc(new Bb(zb, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), this.toString());
};
var Di = function () {
  Ci.call(this);
};
t(Di, Ci);
Di.prototype.za = yi;
var Ei = function () {
  Ci.call(this);
};
t(Ei, Ci);
Ei.prototype.za = zi;
Ei.prototype.Cb = 1;
var Fi = function () {
  Ci.call(this);
};
t(Fi, Ci);
Fi.prototype.za = Ai;
Fi.prototype.Cb = 1;
var Gi = function () {
  Ci.call(this);
};
t(Gi, Ci);
Gi.prototype.za = Bi;
Gi.prototype.Cb = 1; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function Hi(a, b, c) {
  (b = b(c || Ii, void 0)) && b.Cg && a ? b.Cg(a) : ((b = Ji(b)), Oc(u(a), b));
}
function Ji(a) {
  if (!Aa(a)) return Ec(String(a));
  if (a.bf) {
    var b = a.bf();
    if (b instanceof Bc) return b;
  }
  v("Soy template output is unsafe for use as HTML: " + a);
  return Ec("zSoyz");
}
var Ki = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
  Ii = {};
p.console && p.console.createTask && p.console.createTask.bind(p.console);
var Li = function (a, b) {
  L.call(this);
  this.lb = a || 1;
  this.Tb = b || p;
  this.ge = Ga(this.Mg, this);
  this.He = Date.now();
};
t(Li, L);
h = Li.prototype;
h.enabled = !1;
h.sa = null;
h.setInterval = function (a) {
  this.lb = a;
  this.sa && this.enabled ? (this.stop(), this.start()) : this.sa && this.stop();
};
h.Mg = function () {
  if (this.enabled) {
    var a = Date.now() - this.He;
    0 < a && a < 0.8 * this.lb
      ? (this.sa = this.Tb.setTimeout(this.ge, this.lb - a))
      : (this.sa && (this.Tb.clearTimeout(this.sa), (this.sa = null)),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(), this.start()));
  }
};
h.start = function () {
  this.enabled = !0;
  this.sa || ((this.sa = this.Tb.setTimeout(this.ge, this.lb)), (this.He = Date.now()));
};
h.stop = function () {
  this.enabled = !1;
  this.sa && (this.Tb.clearTimeout(this.sa), (this.sa = null));
};
h.B = function () {
  Li.o.B.call(this);
  this.stop();
  delete this.Tb;
};
var Mi = function (a, b, c) {
  if ("function" === typeof a) c && (a = Ga(a, c));
  else if (a && "function" == typeof a.handleEvent) a = Ga(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0);
};
var Ni = function () {};
wa(Ni);
Ni.prototype.tg = 0;
Ni.prototype.eg = "";
var N = function (a) {
  L.call(this);
  this.da = a || ag();
  this.xc = Oi;
  this.R = null;
  this.N = !1;
  this.j = null;
  this.Pa = void 0;
  this.ca = this.O = this.ba = null;
  this.wd = this.ef = !1;
};
t(N, L);
N.prototype.dg = Ni.ib();
var Oi = null,
  Pi = function (a, b) {
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
  Qi = function (a) {
    var b;
    (b = a.R) || ((b = a.dg), (b = b.eg + ":" + (b.tg++).toString(36)), (b = a.R = b));
    return b;
  },
  Ri = function (a, b) {
    if (a.ba && a.ba.ca) {
      var c = a.ba.ca,
        d = a.R;
      d in c && delete c[d];
      pb(a.ba.ca, b, a);
    }
    a.R = b;
  };
N.prototype.g = function () {
  return this.j;
};
var Si = function (a) {
  a = a.j;
  u(a, "Can not call getElementStrict before rendering/decorating.");
  return a;
};
N.prototype.Oa = function () {
  this.Pa || (this.Pa = new fh(this));
  return u(this.Pa);
};
var Ti = function (a, b) {
  if (a == b) throw Error("Unable to set parent component");
  var c;
  if ((c = b && a.ba && a.R)) {
    c = a.ba;
    var d = a.R;
    c = c.ca && d ? qb(c.ca, d) || null : null;
  }
  if (c && a.ba != b) throw Error("Unable to set parent component");
  a.ba = b;
  N.o.Gd.call(a, b);
};
N.prototype.getParent = function () {
  return this.ba;
};
N.prototype.Gd = function (a) {
  if (this.ba && this.ba != a) throw Error("Method not supported");
  N.o.Gd.call(this, a);
};
N.prototype.ra = function () {
  return this.da;
};
N.prototype.v = function () {
  this.j = this.da.createElement("DIV");
};
var Ui = function (a, b, c) {
  if (a.N) throw Error("Component already rendered");
  a.j || a.v();
  b ? b.insertBefore(a.j, c || null) : a.da.H.body.appendChild(a.j);
  (a.ba && !a.ba.N) || a.Ca();
};
h = N.prototype;
h.decorate = function (a) {
  if (this.N) throw Error("Component already rendered");
  if (a && this.zb(a)) {
    this.ef = !0;
    var b = $f(a);
    (this.da && this.da.H == b) || (this.da = ag(a));
    this.oe(a);
    this.Ca();
  } else throw Error("Invalid element to decorate");
};
h.zb = function () {
  return !0;
};
h.oe = function (a) {
  this.j = a;
};
h.Ca = function () {
  this.N = !0;
  Vi(this, function (a) {
    !a.N && a.g() && a.Ca();
  });
};
h.Eb = function () {
  Vi(this, function (a) {
    a.N && a.Eb();
  });
  this.Pa && this.Pa.removeAll();
  this.N = !1;
};
h.B = function () {
  this.N && this.Eb();
  this.Pa && (this.Pa.Ba(), delete this.Pa);
  Vi(this, function (a) {
    a.Ba();
  });
  !this.ef && this.j && rg(this.j);
  this.ba = this.j = this.ca = this.O = null;
  N.o.B.call(this);
};
h.P = function () {
  return this.j;
};
h.sb = function (a) {
  if (this.N) throw Error("Component already rendered");
  this.xc = a;
};
var Vi = function (a, b) {
  a.O && a.O.forEach(b, void 0);
};
N.prototype.removeChild = function (a, b) {
  if (a) {
    var c = "string" === typeof a ? a : Qi(a);
    a = this.ca && c ? qb(this.ca, c) || null : null;
    if (c && a) {
      var d = this.ca;
      c in d && delete d[c];
      ab(this.O, a);
      b && (a.Eb(), a.j && rg(a.j));
      Ti(a, null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
N.prototype.Cd = function (a) {
  for (var b = []; this.O && 0 != this.O.length; ) {
    var c = b,
      d = c.push;
    var e = this.removeChild(this.O ? this.O[0] || null : null, a);
    d.call(c, e);
  }
  return b;
};
var Xi = function (a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if ("function" !== typeof b) throw Error("Invalid decorator function " + b);
    Wi[a] = b;
  },
  Yi = {},
  Wi = {};
var aj = function (a, b, c, d, e, f) {
    if (Qf && e) return Zi(a);
    if (e && !d) return !1;
    "number" === typeof b && (b = Qf ? $i(b) : b);
    e = 17 == b || 18 == b || (Qf && 91 == b);
    if (((!c || Qf) && e) || (Qf && 16 == b && (d || f))) return !1;
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
    return Zi(a);
  },
  Zi = function (a) {
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
  $i = function (a) {
    switch (a) {
      case 93:
        return 91;
      default:
        return a;
    }
  };
var bj = function (a, b) {
  L.call(this);
  this.V = new fh(this);
  this.Ac(a || null);
  b && this.Dc(b);
};
t(bj, L);
h = bj.prototype;
h.j = null;
h.If = !0;
h.ee = null;
h.fe = null;
h.mb = !1;
h.Fg = !1;
h.nd = -1;
h.cg = !1;
h.Sf = !0;
h.ta = "toggle_display";
h.getType = function () {
  return this.ta;
};
h.Dc = function (a) {
  this.ta = a;
};
h.g = function () {
  return this.j;
};
h.Ac = function (a) {
  if (this.mb) throw Error("Can not change this state of the popup while showing.");
  this.j = a;
};
h.Oa = function () {
  return this.V;
};
h.isVisible = function () {
  return this.mb;
};
h.T = function (a) {
  this.tb && this.tb.stop();
  this.jb && this.jb.stop();
  if (a) {
    if (!this.mb && this.sd()) {
      if (!this.j) throw Error("Caller must call setElement before trying to show the popup");
      this.ha();
      a = $f(this.j);
      this.cg && this.V.listen(a, "keydown", this.vg, !0);
      this.If && (this.V.listen(a, "mousedown", this.wg, !0), this.V.listen(a, "blur", this.ug));
      "toggle_display" == this.ta ? ((this.j.style.visibility = "visible"), Fh(this.j, !0)) : "move_offscreen" == this.ta && this.ha();
      this.mb = !0;
      this.nd = Date.now();
      this.tb ? (Vg(this.tb, "end", this.Le, !1, this), this.tb.play()) : this.Le();
    }
  } else cj(this);
};
h.ha = function () {};
var cj = function (a, b) {
  if (!a.mb || !a.dispatchEvent({ type: "beforehide", target: b })) return !1;
  a.V && a.V.removeAll();
  a.mb = !1;
  a.jb ? (Vg(a.jb, "end", r(a.le, b), !1, a), a.jb.play()) : a.le(b);
  return !0;
};
h = bj.prototype;
h.le = function (a) {
  "toggle_display" == this.ta
    ? this.Fg
      ? Mi(this.Ae, 0, this)
      : this.Ae()
    : "move_offscreen" == this.ta && (this.j.style.top = "-10000px");
  this.td(a);
};
h.Ae = function () {
  this.j.style.visibility = "hidden";
  Fh(this.j, !1);
};
h.sd = function () {
  return this.dispatchEvent("beforeshow");
};
h.Le = function () {
  this.dispatchEvent("show");
};
h.td = function (a) {
  this.dispatchEvent({ type: "hide", target: a });
};
h.wg = function (a) {
  a = a.target;
  sg(this.j, a) || dj(this, a) || (this.fe && !sg(this.fe, a)) || 150 > Date.now() - this.nd || cj(this, a);
};
h.vg = function (a) {
  27 == a.keyCode && cj(this, a.target) && (a.preventDefault(), a.stopPropagation());
};
h.ug = function (a) {
  if (this.Sf) {
    var b = $f(this.j);
    if ("undefined" != typeof document.activeElement) {
      if (((a = b.activeElement), !a || sg(this.j, a) || "BODY" == a.tagName || dj(this, a))) return;
    } else if (a.target != b) return;
    150 > Date.now() - this.nd || cj(this);
  }
};
var dj = function (a, b) {
  return Ya(a.ee || [], function (c) {
    return b === c || sg(c, b);
  });
};
bj.prototype.B = function () {
  bj.o.B.call(this);
  this.V.Ba();
  Cg(this.tb);
  Cg(this.jb);
  delete this.j;
  delete this.V;
  delete this.ee;
};
var ej = function (a, b) {
  this.zg = 8;
  this.xd = b || void 0;
  bj.call(this, a);
};
t(ej, bj);
ej.prototype.setPosition = function (a) {
  this.xd = a || void 0;
  this.isVisible() && this.ha();
};
ej.prototype.ha = function () {
  if (this.xd) {
    var a = !this.isVisible() && "move_offscreen" != this.getType(),
      b = this.g();
    a && ((b.style.visibility = "hidden"), Fh(b, !0));
    this.xd.ha(b, this.zg, this.Pj);
    a && Fh(b, !1);
  }
};
var fj = function () {
  L.call(this);
  this.C = "none";
};
t(fj, L);
fj.prototype.Y = function (a) {
  this.C != a && ((this.C = a), this.dispatchEvent("change"));
};
fj.prototype.getState = function () {
  return this.C;
};
var gj = function (a, b, c) {
  c = void 0 === c ? !1 : c;
  N.call(this, b);
  this.Dg = c;
  this.yb = "#fff";
  this.Jd = 0;
  this.Fc = a;
};
t(gj, N);
var hj = { zj: 0, RIGHT: 1, wh: 2, LEFT: 3 };
h = gj.prototype;
h.setSize = function (a) {
  u(!this.g(), "Cannot setSize after activity indicator is rendered.");
  this.Jd = a;
};
h.v = function () {
  gj.o.v.call(this);
  var a = this.ra();
  this.ke = a.v("DIV");
  this.Be = a.v("DIV", "jfk-activityIndicator-icon");
  var b = ["jfk-activityIndicator"];
  1 == this.Jd && b.push("jfk-activityIndicator-small");
  this.j = a.v("DIV", b, this.ke, this.Be);
};
h.P = function () {
  return this.ke;
};
h.Ca = function () {
  gj.o.Ca.call(this);
  this.Oa().listen(this.Fc, "change", this.Ve);
};
h.Ve = function () {
  if (!this.sc || this.sc.complete) {
    this.Cd(!0);
    var a,
      b = (a = this.yb),
      c = 2,
      d = this.sc;
    d && ((a = d.fc), (b = d.hc), (c = d.direction), u(w(nb(hj), c)), (c = (c + 1) % 4), u(w(nb(hj), c)));
    d = this.Fc.getState();
    switch (d) {
      case "loading":
        var e = ij[c];
        var f = e[0];
        e = e[1];
        break;
      case "none":
        e = f = this.yb;
        break;
      case "offline":
        f = "#999";
        e = "#777";
        break;
      default:
        v("should not reach default case");
    }
    u(f);
    u(e);
    a = new jj(d, c, f, a, a, b, f, e, this.Jd, this.ra());
    this.sc = { complete: !1, fc: a.fc, hc: a.hc, direction: a.direction };
    b = this.O ? this.O.length : 0;
    u(!!a, "Provided element must not be null.");
    if (a.N) throw Error("Component already rendered");
    if (0 > b || b > (this.O ? this.O.length : 0)) throw Error("Child component index out of bounds");
    (this.ca && this.O) || ((this.ca = {}), (this.O = []));
    a.getParent() == this ? ((f = Qi(a)), (this.ca[f] = a), ab(this.O, a)) : pb(this.ca, Qi(a), a);
    Ti(a, this);
    db(this.O, b, 0, a);
    a.N && this.N && a.getParent() == this
      ? ((f = this.P()),
        (f.childNodes[b] || null) != a.g() &&
          (a.g().parentElement == f && f.removeChild(a.g()), (b = f.childNodes[b] || null), f.insertBefore(a.g(), b)))
      : (this.j || this.v(), (b = this.O ? this.O[b + 1] || null : null), Ui(a, this.P(), b ? b.j : null));
    this.Oa().Mb(a, "a", this.oc);
    Mi(r(this.Mf, a), 0, this);
    kj(this);
  }
};
h.Mf = function (a) {
  this.N &&
    (a.play(),
    Mi(
      function () {
        !this.Ua && this.N && this.Jg && !this.complete && this.oc();
      },
      500,
      a
    ));
};
h.oc = function (a) {
  this.sc.complete = !0;
  a = a.target;
  var b = this.Fc.getState();
  (b == a.state && "loading" != b) || this.Ve();
  kj(this);
  this.Dg || Cg(a);
};
var kj = function (a) {
    a.Be.style.opacity = "offline" == a.Fc.getState() ? 1 : 0;
  },
  ij = { 0: ["#00B15F", "#008948"], 1: ["#3C78F8", "#2159bd"], 2: ["#FA2424", "#9e1212"], 3: ["#FFD34B", "#dea11a"] },
  jj = function (a, b, c, d, e, f, g, k, l, m) {
    N.call(this, m);
    this.state = a;
    this.complete = !1;
    this.direction = b;
    this.Gg = c;
    this.Tf = d;
    this.Hg = e;
    this.Ig = f;
    this.fc = g;
    this.hc = k;
    this.ac = 1 == l ? 16 : 19;
  };
t(jj, N);
jj.prototype.v = function () {
  jj.o.v.call(this);
  var a = this.g(),
    b = this.ra();
  H(a, "jfk-activityIndicator-circle-transition");
  var c = b.v("DIV", "jfk-activityIndicator-mask"),
    d = b.v("DIV", "jfk-activityIndicator-mask");
  u(a);
  b.append(a, c, d);
  var e = b.v("DIV", "jfk-activityIndicator-circle");
  b.appendChild(c, e);
  M(e, "backgroundColor", this.Gg);
  var f = b.v("DIV", "jfk-activityIndicator-circle");
  b.appendChild(d, f);
  M(f, "backgroundColor", this.Tf);
  a = b.v("DIV", "jfk-activityIndicator-circle");
  var g = b.v("DIV", "jfk-activityIndicator-circle");
  b.appendChild(c, a);
  b.appendChild(d, g);
  M(a, "backgroundColor", this.Hg);
  M(g, "backgroundColor", this.hc);
  this.Ea = a;
  this.xa = g;
  this.ic = e;
  this.Dd = f;
  this.Fb = c;
  this.Ob = d;
  b = this.ac + "px";
  c = Math.ceil(this.ac / 2) + "px";
  d = "-" + c;
  switch (this.direction) {
    case 1:
      M(this.Fb, { left: 0, top: 0 });
      M(this.Ob, { left: c, top: 0 });
      M(this.Ea, { left: 0, top: 0 });
      M(this.xa, { width: 0, left: 0 });
      M(this.ic, { left: 0, top: 0 });
      M(this.Dd, { left: d });
      break;
    case 3:
      M(this.Fb, { left: c, top: 0 });
      M(this.Ob, { left: 0, top: 0 });
      M(this.Ea, { left: d, top: 0 });
      M(this.xa, { width: 0, left: c });
      M(this.ic, { left: d, top: 0 });
      break;
    case 0:
      M(this.Fb, { left: 0, top: c });
      M(this.Ob, { left: 0, top: 0 });
      M(this.Ea, { left: 0, top: d });
      M(this.xa, { top: c, height: 0 });
      M(this.ic, { left: 0, top: d });
      break;
    case 2:
      M(this.Fb, { left: 0, top: 0 });
      M(this.Ob, { left: 0, top: c });
      M(this.Ea, { left: 0, top: 0 });
      M(this.xa, { left: 0, height: 0 });
      M(this.ic, { left: 0, top: 0 });
      M(this.Dd, { top: d });
      break;
    default:
      v("should not reach default case");
  }
  d = this.direction;
  b = 0 == d || 2 == d ? { width: b, height: c } : { width: c, height: b };
  M(this.Fb, b);
  M(this.Ob, b);
  H(a, "jfk-activityIndicator-transition");
  H(g, "jfk-activityIndicator-transition-second");
};
jj.prototype.play = function () {
  u(this.N, "Must be in document at this point.");
  this.Jg = !0;
  lj(this, this.xa, this.oc);
  M(this.Ea, "backgroundColor", this.Ig);
  M(this.xa, "backgroundColor", this.fc);
  var a = this.ac + "px",
    b = Math.ceil(this.ac / 2) + "px",
    c = "-" + b;
  switch (this.direction) {
    case 1:
      M(this.Ea, { width: 0, left: b });
      M(this.xa, { left: c, width: a });
      break;
    case 3:
      M(this.Ea, { width: 0, left: 0 });
      M(this.xa, { width: a, left: 0 });
      break;
    case 0:
      M(this.Ea, { top: 0, height: 0 });
      M(this.xa, { top: 0, height: a });
      break;
    case 2:
      M(this.Ea, { top: b, height: 0 });
      M(this.xa, { top: c, height: a });
      break;
    default:
      v("should not reach default case");
  }
};
var lj = function (a, b, c) {
  var d = !1;
  a.Oa().Mb(b, ["webkitTransitionEnd", "transitionend"], function () {
    d || ((d = !0), c.call(a));
  });
};
jj.prototype.oc = function () {
  this.complete = !0;
  this.dispatchEvent("a");
  Fh(this.Dd, !1);
};
u(!0);
var mj = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
  nj = Math,
  oj = nj.log2,
  pj = Math.max,
  qj = pj.apply,
  rj = Object.values({ Wh: 1, Uh: 2, Th: 4, Gi: 8, Fi: 16, Ai: 32, jh: 64, vj: 128, Mh: 256, Lh: 512, Vh: 1024 }),
  sj;
if (rj instanceof Array) sj = rj;
else {
  for (var tj = ka(rj), uj, vj = []; !(uj = tj.next()).done; ) vj.push(uj.value);
  sj = vj;
}
u(10 === oj.call(nj, qj.call(pj, Math, sj)));
var wj = Object.getOwnPropertyDescriptor(Array.prototype, "kg");
Object.defineProperties(Array.prototype, {
  kg: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = xj(this),
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
      var d = yj(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return wj ? wj.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var xj = mj
  ? function (a) {
      Qa(a, "state is only maintained on arrays.");
      return a[mj] | 0;
    }
  : function (a) {
      Qa(a, "state is only maintained on arrays.");
      return a.Mj | 0;
    };
function yj(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var zj = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var Aj = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    Bj = {};
  Object.defineProperties(zj, ((Bj[Symbol.hasInstance] = { value: Aj, configurable: !1, writable: !1, enumerable: !1 }), Bj));
  u(zj[Symbol.hasInstance] === Aj, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var Dj = Cj;
  new Proxy(
    {},
    {
      getPrototypeOf: Dj,
      setPrototypeOf: Dj,
      isExtensible: Dj,
      preventExtensions: Dj,
      getOwnPropertyDescriptor: Dj,
      defineProperty: Dj,
      has: Dj,
      get: Dj,
      set: Dj,
      deleteProperty: Dj,
      apply: Dj,
      construct: Dj
    }
  );
}
function Cj() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function Ej() {}
(function () {
  var a = p.jspbGetTypeName;
  p.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : Ej;
})();
var Fj = function (a, b, c) {
  (b = null != a && a.za === b) && u(a.constructor === c);
  return b;
};
var Gj = function (a) {
    if (null != a)
      switch (a.Cb) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  },
  Q = function (a) {
    return Fj(a, yi, Di)
      ? a
      : a instanceof Bc
      ? P(Cc(a).toString())
      : a instanceof Bc
      ? P(Cc(a).toString())
      : P(String(String(a)).replace(Hj, Ij), Gj(a));
  },
  P = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.Cb = d);
      return c;
    };
  })(Di),
  R = {},
  Jj = function (a) {
    if (null == a) throw Error("unexpected null value");
    return a;
  },
  S = function (a, b) {
    return a && b && a.ig && b.ig
      ? a.za !== b.za
        ? !1
        : a.toString() === b.toString()
      : a instanceof Ci && b instanceof Ci
      ? a.za != b.za
        ? !1
        : a.toString() == b.toString()
      : a == b;
  },
  Kj = function (a) {
    return a instanceof Ci ? !!a.getContent() : !!a;
  },
  T = function (a) {
    if (Fj(a, yi, Di)) {
      var b = String;
      a = a.getContent();
      a = String(a).replace(Lj, "").replace(Mj, "&lt;");
      b = b(a).replace(Nj, Ij);
    } else b = String(a).replace(Hj, Ij);
    return b;
  },
  Sj = function (a) {
    Fj(a, zi, Ei) || Fj(a, Ai, Fi)
      ? (a = Oj(a))
      : a instanceof Vb
      ? (a = Oj(Wb(a)))
      : a instanceof Vb
      ? (a = Oj(Wb(a)))
      : a instanceof Eb
      ? (a = Oj(Fb(a).toString()))
      : a instanceof Eb
      ? (a = Oj(Fb(a).toString()))
      : ((a = String(a)),
        Pj.test(a) ? (a = a.replace(Qj, Rj)) : (v("Bad value `%s` for |filterNormalizeUri", [a]), (a = "about:invalid#zSoyz")));
    return a;
  },
  Tj = function () {
    return sa.apply(0, arguments);
  },
  Uj = {},
  Vj = function () {
    u(Uj === Uj, "found an incorrect call marker, was an internal function called from the top level?");
  },
  Wj = {
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
  Ij = function (a) {
    return Wj[a];
  },
  Xj = {
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
  Rj = function (a) {
    return Xj[a];
  },
  Hj = /[\x00\x22\x26\x27\x3c\x3e]/g,
  Nj = /[\x00\x22\x27\x3c\x3e]/g,
  Qj =
    /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
  Pj = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
  Yj =
    /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
  Zj = /^[a-zA-Z0-9+\/_-]+={0,2}$/,
  Oj = function (a) {
    return String(a).replace(Qj, Rj);
  },
  Lj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
  Mj = /</g;
var ak = function (a, b) {
  this.cc = a;
  this.Qf = !!b;
  this.ce = { 0: this.cc + "-arrowright", 1: this.cc + "-arrowup", 2: this.cc + "-arrowdown", 3: this.cc + "-arrowleft" };
};
ra(ak, oh);
ak.prototype.setPosition = function (a, b, c, d) {
  null != a && (this.Tc = a);
  null != b && (this.Qc = b);
  "number" === typeof c && (this.de = Math.max(c, 15));
  "number" === typeof d && (this.rd = d);
};
ak.prototype.ha = function (a, b, c) {
  u(this.Sc, "Must call setElements first.");
  a = this.Qc;
  2 == a && (a = 0);
  bk(this, this.Tc, a, 2 == this.Qc ? (ck(this.Tc) ? this.oa.offsetHeight / 2 : this.oa.offsetWidth / 2) : this.de, 0, c);
};
var bk = function (a, b, c, d, e, f) {
    if (a.La) {
      var g = dk(b, c),
        k = a.La,
        l = a.oa,
        m = a.df;
      var n = Dh(k);
      a: {
        n = (ck(b) ? n.height / 2 : n.width / 2) - d;
        var q = Rh(k, g);
        if (m) (m = m.clone()), l && ((l = Qh(l)), (m.left += l.x), (m.right += l.x), (m.top += l.y), (m.bottom += l.y));
        else if (((m = yh(k)), !m)) break a;
        k = Eh(k);
        k = new mh(k.top, k.left + k.width, k.top + k.height, k.left);
        ck(b)
          ? k.top < m.top && !(q & 1)
            ? (n -= m.top - k.top)
            : k.bottom > m.bottom && q & 1 && (n -= k.bottom - m.bottom)
          : k.left < m.left && !(q & 4)
          ? (n -= m.left - k.left)
          : k.right > m.right && q & 4 && (n -= k.right - m.right);
      }
      n = ck(b) ? new I(a.rd, n) : new I(n, a.rd);
      q = ck(b) ? 6 : 9;
      a.Oc && 2 == e && (q = ck(b) ? 4 : 1);
      k = b ^ 3;
      ck(b) && "rtl" == a.La.dir && (k = b);
      g = Th(a.La, dk(k, c), a.oa, g, n, f, a.jd ? q : 0, void 0, a.df);
      if (2 != e && g & 496) {
        bk(a, b ^ 3, c, d, a.Oc && 0 == e ? 1 : 2, f);
        return;
      }
      !a.Qf ||
        g & 496 ||
        ((e = parseFloat(a.oa.style.left)),
        (f = parseFloat(a.oa.style.top)),
        u(!isNaN(e) && !isNaN(f), "Could not parse position."),
        (isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1) || uh(a.oa, Math.round(e), Math.round(f)));
    }
    ek(a, b, c, d);
  },
  ek = function (a, b, c, d) {
    var e = a.Sc;
    jb(
      a.ce,
      function (f) {
        Kf(e, f, !1);
      },
      a
    );
    H(e, a.ce[b]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    a.La
      ? ((c = Ah(a.La, a.oa)),
        (d = fk(a.La, b)),
        ck(b) ? (e.style.top = gk(c.y + d.y, a.oa.offsetHeight - 15) + "px") : (e.style.left = gk(c.x + d.x, a.oa.offsetWidth - 15) + "px"))
      : (e.style[0 == c ? (ck(b) ? "top" : "left") : ck(b) ? "bottom" : "right"] = d + "px");
  },
  gk = function (a, b) {
    return 15 > b ? 15 : Math.min(Math.max(a, 15), b);
  },
  dk = function (a, b) {
    switch (a) {
      case 2:
        return 0 == b ? 1 : 5;
      case 1:
        return 0 == b ? 0 : 4;
      case 0:
        return 0 == b ? 12 : 13;
      default:
        return 0 == b ? 8 : 9;
    }
  },
  fk = function (a, b) {
    var c = 0,
      d = 0;
    a = Dh(a);
    switch (b) {
      case 2:
        c = a.width / 2;
        break;
      case 1:
        c = a.width / 2;
        d = a.height;
        break;
      case 0:
        d = a.height / 2;
        break;
      case 3:
        (c = a.width), (d = a.height / 2);
    }
    return new I(c, d);
  },
  ck = function (a) {
    return 0 == a || 3 == a;
  };
h = ak.prototype;
h.jd = !1;
h.Qc = 2;
h.de = 20;
h.Tc = 3;
h.df = null;
h.rd = -5;
h.Oc = !1;
var hk = {
  Pg: "activedescendant",
  Ug: "atomic",
  Vg: "autocomplete",
  Yg: "busy",
  dh: "checked",
  fh: "colindex",
  lh: "controls",
  mh: "current",
  sh: "describedby",
  DISABLED: "disabled",
  xh: "dropeffect",
  Ah: "expanded",
  Bh: "flowto",
  Gh: "grabbed",
  Kh: "haspopup",
  Oh: "hidden",
  Sh: "invalid",
  Yh: "label",
  Zh: "labelledby",
  bi: "level",
  gi: "live",
  yi: "multiline",
  zi: "multiselectable",
  Ii: "orientation",
  Ji: "owns",
  Ki: "posinset",
  Mi: "pressed",
  Ri: "readonly",
  Ui: "relevant",
  Vi: "required",
  Zi: "rowindex",
  bj: "selected",
  dj: "setsize",
  ij: "sort",
  Bj: "valuemax",
  Cj: "valuemin",
  Dj: "valuenow",
  Ej: "valuetext"
};
var ik;
var jk = {
  Qg: "alert",
  Rg: "alertdialog",
  Sg: "application",
  Tg: "article",
  Xg: "banner",
  Zg: "button",
  bh: "checkbox",
  gh: "columnheader",
  hh: "combobox",
  ih: "complementary",
  kh: "contentinfo",
  rh: "definition",
  th: "dialog",
  uh: "directory",
  vh: "document",
  Dh: "form",
  Hh: "grid",
  Ih: "gridcell",
  Jh: "group",
  Nh: "heading",
  Rh: "img",
  ci: "link",
  di: "list",
  ei: "listbox",
  fi: "listitem",
  hi: "log",
  mi: "main",
  pi: "marquee",
  ri: "math",
  si: "menu",
  ti: "menubar",
  vi: "menuitem",
  wi: "menuitemcheckbox",
  xi: "menuitemradio",
  Ci: "navigation",
  Ei: "note",
  Hi: "option",
  Li: "presentation",
  Oi: "progressbar",
  Pi: "radio",
  Qi: "radiogroup",
  Ti: "region",
  Wi: "row",
  Xi: "rowgroup",
  Yi: "rowheader",
  aj: "scrollbar",
  SEARCH: "search",
  cj: "separator",
  hj: "slider",
  jj: "spinbutton",
  kj: "status",
  TAB: "tab",
  nj: "tablist",
  oj: "tabpanel",
  pj: "textbox",
  qj: "textinfo",
  sj: "timer",
  tj: "toolbar",
  uj: "tooltip",
  wj: "tree",
  xj: "treegrid",
  yj: "treeitem"
};
vb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var kk = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" "),
  lk = function (a, b) {
    b ? (u(ob(jk, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role");
  },
  nk = function (a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    var d = mk(b);
    "" === c || void 0 == c
      ? (ik ||
          ((c = {}),
          (ik =
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
        (c = ik),
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
      : a.setAttribute(d, c);
  },
  ok = function (a) {
    var b = a.getAttribute(mk("activedescendant"));
    b = null == b || void 0 == b ? "" : String(b);
    return $f(a).getElementById(b);
  },
  mk = function (a) {
    u(a, "ARIA attribute cannot be empty.");
    u(ob(hk, a), "No such ARIA attribute " + a);
    return "aria-" + a;
  };
var pk = function (a) {
  Dg.call(this);
  this.dom = a || ag();
};
ra(pk, Dg);
pk.prototype.Ce = function () {
  lk(this.g(), this.hb());
  nk(this.g(), "live", "polite");
};
pk.prototype.hb = function () {
  return "tooltip";
};
var rk = function (a) {
  pk.call(this, a);
  this.je = this.dom.v("DIV", qk() + "-contentId");
  this.Rc = this.dom.v("DIV", qk() + "-arrow", this.dom.v("DIV", qk() + "-arrowimplbefore"), this.dom.v("DIV", qk() + "-arrowimplafter"));
  this.Qd = this.dom.v("DIV", { class: qk(), role: "tooltip" }, this.je, this.Rc);
  this.Ce();
};
ra(rk, pk);
var qk = function () {
  return "jfk-tooltip";
};
rk.prototype.g = function () {
  return this.Qd;
};
rk.prototype.P = function () {
  return this.je;
};
rk.prototype.B = function () {
  pk.prototype.B.call(this);
  this.Qd && rg(this.Qd);
};
var sk = function (a) {
  rk.call(this, a);
};
ra(sk, rk);
sk.prototype.Ce = function () {
  lk(this.g(), this.hb());
};
var tk = function (a, b, c) {
  Dg.call(this);
  this.pd = a;
  this.lb = b || 0;
  this.V = c;
  this.Jf = Ga(this.qe, this);
};
t(tk, Dg);
h = tk.prototype;
h.R = 0;
h.B = function () {
  tk.o.B.call(this);
  this.stop();
  delete this.pd;
  delete this.V;
};
h.start = function (a) {
  this.stop();
  this.R = Mi(this.Jf, void 0 !== a ? a : this.lb);
};
h.stop = function () {
  this.isActive() && p.clearTimeout(this.R);
  this.R = 0;
};
h.fire = function () {
  this.stop();
  this.qe();
};
h.isActive = function () {
  return 0 != this.R;
};
h.qe = function () {
  this.R = 0;
  this.pd && this.pd.call(this.V);
};
var wk = function (a) {
    return Tc(
      Ib(
        a
          .replace(uk, function (b, c) {
            return vk.test(c) ? "" : " ";
          })
          .replace(/[\t\n ]+/g, " ")
      )
    );
  },
  vk = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
  uk = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
function xk(a, b) {
  var c = yk;
  if (0 === c.length) throw Error("No prefixes are provided");
  if (
    c
      .map(function (d) {
        if (d instanceof $h) d = d.Te;
        else throw Error("Unexpected type when unwrapping SafeAttributePrefix");
        return d;
      })
      .every(function (d) {
        return 0 !== "value".indexOf(d);
      })
  )
    throw Error('Attribute "value" does not match any of the allowed prefixes.');
  a.setAttribute("value", b);
}
function zk(a, b) {
  a.src = Fb(b);
  var c, d;
  (c = (b =
    null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
      ? void 0
      : d.call(c, "script[nonce]"))
    ? b.nonce || b.getAttribute("nonce") || ""
    : "") && a.setAttribute("nonce", c);
}
var Ak = {},
  Bk = function (a) {
    fh.call(this);
    this.re = a;
    this.Zc = new tk(this.Lg, 0, this);
    Eg(this, r(Cg, this.Zc));
    var b = window;
    this.tc = "function" === typeof b.MutationObserver ? new b.MutationObserver(Ga(this.Wf, this)) : null;
    a = a.H;
    this.listen(a, "mouseout mousedown click blur focusout keydown".split(" "), this.Nf, !0);
    this.listen(a, ["mouseover", "focus", "focusin"], this.Eg, !0);
  };
ra(Bk, fh);
Bk.prototype.B = function () {
  Ck(this);
  fh.prototype.B.call(this);
};
var Dk = function (a, b) {
  switch (b.type) {
    case "mousedown":
    case "mouseover":
    case "mouseout":
    case "click":
      a.Ge = !1;
      break;
    case "keydown":
      a.Ge = !0;
  }
};
Bk.prototype.Eg = function (a) {
  this.tc && this.tc.disconnect();
  Dk(this, a);
  var b = a.target;
  a = "focus" == a.type || "focusin" == a.type;
  var c = this.G && sg(this.G.P(), b);
  if (this.Ge || !a || c) {
    this.hg = a;
    if ((a = b && b.getAttribute && this.tc)) (a = b.getAttribute("role") || null), (a = w(kk, a));
    a && (this.tc.observe(b, { attributes: !0 }), (a = ok(b)) && (b = a));
    this.J = b;
  } else this.J = null;
  Ek(this);
};
Bk.prototype.Nf = function (a) {
  Dk(this, a);
  var b = a.target;
  a = "mousedown" == a.type || "click" == a.type;
  b = this.G && sg(this.G.P(), b);
  (a && b) || ((this.J = null), Ek(this));
};
Bk.prototype.Wf = function (a) {
  Wa(
    a,
    Ga(function (b) {
      var c = ok(b.target);
      c && "aria-activedescendant" == b.attributeName && ((this.J = c), Ek(this));
    }, this)
  );
};
var Ek = function (a) {
    if (!(a.Zc.isActive() && a.ka && a.Ub)) {
      Ck(a);
      var b = null != a.Ub ? a.Ub : 50;
      a.Zc.start(a.ka ? b : 300);
    }
  },
  Ck = function (a) {
    a.yc && (p.clearTimeout(a.yc), (a.yc = 0), (a.ka = null));
  };
Bk.prototype.Lg = function () {
  if (!this.J) Fk(this), (this.Ub = this.ka = null);
  else if (!(this.ka && this.G && sg(this.G.g(), this.J)) || this.ka.getAttribute("data-tooltip-unhoverable")) {
    var a = Bg(this.J, function (k) {
        return (
          k.getAttribute &&
          (k.getAttribute("data-tooltip-contained") || k.getAttribute("data-tooltip") || k.Lb) &&
          !k.getAttribute("data-tooltip-suspended")
        );
      }),
      b = !1;
    this.ka && this.ka != a && (Fk(this), (this.Ub = this.ka = null), (b = !0));
    if (
      !this.ka &&
      a &&
      ((this.ka = a),
      !(
        (a.getAttribute("data-tooltip-only-on-overflow") && a.offsetWidth >= a.scrollWidth && a.offsetHeight >= a.scrollHeight) ||
        (this.hg && "mouse" == a.getAttribute("data-tooltip-trigger"))
      ))
    ) {
      var c = Fc;
      if (a.getAttribute("data-tooltip-contained"))
        for (var d = eg("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
          if (d[e].parentNode == a) {
            c = d[e].cloneNode(!0);
            break;
          }
        }
      else c = a.Lb ? a.Lb : si(a.getAttribute("data-tooltip"));
      d = a.getAttribute("data-tooltip-align");
      e = a.getAttribute("data-tooltip-class");
      var f = a.getAttribute("data-tooltip-offset");
      f = Hb(Xc(f)) ? -1 : Number(f);
      var g = a.getAttribute("data-tooltip-hide-delay");
      g = Hb(Xc(g)) ? null : Number(g);
      if (!b && ((a = a.getAttribute("data-tooltip-delay")), (a = Math.max(0, a - 300)))) {
        this.yc = Mi(r(this.We, this.ka, c, d, f, e, g), a, this);
        return;
      }
      this.We(this.ka, c, d, f, e, g);
    }
  }
};
var Gk = function (a) {
  if (a)
    switch (a.toLowerCase().split(",")[0]) {
      case "l":
        return 0;
      case "t":
        return 2;
      case "r":
        return 3;
    }
  return 1;
};
Bk.prototype.We = function (a, b, c, d, e, f) {
  this.yc = 0;
  this.Ub = f;
  if (!this.G) {
    this.G = new sk(this.re);
    Fk(this);
    pg(this.re.H.body, this.G.g());
    Eg(this, r(Cg, this.G));
    this.ub = new ak(qk(), !0);
    this.ub.jd = !0;
    this.ub.Oc = !0;
    f = this.ub;
    var g = this.G.g(),
      k = this.G.Rc;
    f.oa = g;
    f.Sc = k;
  }
  a: {
    if (c)
      switch (c.toLowerCase().split(",")[1]) {
        case "l":
          f = 0;
          break a;
        case "r":
          f = 1;
          break a;
      }
    f = 2;
  }
  this.ub.setPosition(Gk(c), f, void 0, d);
  If(this.G.g(), "jfk-tooltip-hide");
  this.Ic != e && (this.Ic && !Hb(Xc(this.Ic)) && If(this.G.g(), this.Ic), Hb(Xc(e)) || H(this.G.g(), e), (this.Ic = e));
  uh(this.G.g(), 0, 0);
  if (b instanceof Bc) {
    c = this.G.P();
    if (1 === c.nodeType && ((d = c.tagName), "SCRIPT" === d || "STYLE" === d))
      throw Error(
        "SCRIPT" === d ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet."
      );
    c.innerHTML = Cc(b);
  } else for (qg(this.G.P()); (c = b.firstChild); ) this.G.P().appendChild(c);
  this.ub.La = a;
  this.ub.ha(null, 0);
};
var Fk = function (a) {
  a.G && H(a.G.g(), "jfk-tooltip-hide");
};
var Hk = function (a, b, c, d) {
  Ig.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
};
t(Hk, Ig);
var Ik = function (a, b) {
  L.call(this);
  a && this.attach(a, b);
};
t(Ik, L);
h = Ik.prototype;
h.j = null;
h.qc = null;
h.ld = null;
h.rc = null;
h.fa = -1;
h.Ra = -1;
h.Pc = !1;
var Jk = {
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
  Kk = {
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
  Lk = Qf && !1;
h = Ik.prototype;
h.Xf = function (a) {
  if ((17 == this.fa && !a.ctrlKey) || (18 == this.fa && !a.altKey) || (Qf && 91 == this.fa && !a.metaKey)) this.Ra = this.fa = -1;
  -1 == this.fa &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.fa = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.fa = 18)
      : a.metaKey && 91 != a.keyCode && (this.fa = 91));
  if (aj(a.keyCode, this.fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)) {
    var b = a.keyCode;
    this.Ra = Qf ? $i(b) : b;
    Lk && (this.Pc = a.altKey);
  } else this.handleEvent(a);
};
h.Zf = function (a) {
  this.Ra = this.fa = -1;
  this.Pc = a.altKey;
};
h.handleEvent = function (a) {
  var b = a.Da,
    c = b.altKey;
  if ("keypress" == a.type) {
    var d = this.Ra;
    var e = 0 <= b.charCode && 63232 > b.charCode && Zi(d) ? b.charCode : 0;
  } else
    "keypress" == a.type
      ? (Lk && (c = this.Pc),
        b.keyCode == b.charCode
          ? 32 > b.keyCode
            ? ((d = b.keyCode), (e = 0))
            : ((d = this.Ra), (e = b.charCode))
          : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
      : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
      Qf && 63 == e && 224 == d && (d = 191);
  var f = (d = Qf ? $i(d) : d);
  d
    ? 63232 <= d && d in Jk
      ? (f = Jk[d])
      : 25 == d && a.shiftKey && (f = 9)
    : b.keyIdentifier && b.keyIdentifier in Kk && (f = Kk[b.keyIdentifier]);
  a = f == this.fa;
  this.fa = f;
  b = new Hk(f, e, a, b);
  b.altKey = c;
  this.dispatchEvent(b);
};
h.g = function () {
  return this.j;
};
h.attach = function (a, b) {
  this.rc && this.detach();
  this.j = a;
  this.qc = K(this.j, "keypress", this, b);
  this.ld = K(this.j, "keydown", this.Xf, b, this);
  this.rc = K(this.j, "keyup", this.Zf, b, this);
};
h.detach = function () {
  this.qc && (ch(this.qc), ch(this.ld), ch(this.rc), (this.rc = this.ld = this.qc = null));
  this.j = null;
  this.Ra = this.fa = -1;
};
h.B = function () {
  Ik.o.B.call(this);
  this.detach();
};
var Mk = function () {},
  Nk;
wa(Mk);
var Ok = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
h = Mk.prototype;
h.hb = function () {};
h.v = function (a) {
  return a.ra().v("DIV", Pk(this, a).join(" "), a.getContent());
};
h.P = function (a) {
  return a;
};
h.Db = function (a, b, c) {
  (a = a.g ? a.g() : a) && (c ? Hf : Jf)(a, [b]);
};
h.zb = function () {
  return !0;
};
h.decorate = function (a, b) {
  b.id && Ri(a, b.id);
  var c = this.P(b);
  c && c.firstChild ? Qk(a, c.firstChild.nextSibling ? bb(c.childNodes) : c.firstChild) : (a.va = null);
  var d = 0,
    e = this.S(),
    f = this.S(),
    g = !1,
    k = !1,
    l = bb(Ef(b));
  l.forEach(function (m) {
    g || m != e ? (k || m != f ? (d |= Rk(this, m)) : (k = !0)) : ((g = !0), f == e && (k = !0));
    1 == Rk(this, m) && (Sa(c), xg(c) && yg(c) && wg(c, !1));
  }, this);
  a.C = d;
  g || (l.push(e), f == e && (k = !0));
  k || l.push(f);
  (a = a.qa) && l.push.apply(l, a);
  (g && k && !a) || Ff(b, l.join(" "));
  return b;
};
h.De = function (a) {
  null == a.xc && (a.xc = Gh(a.N ? a.j : a.da.H.body));
  a.xc && this.sb(a.g(), !0);
  a.isEnabled() && this.Qb(a, a.isVisible());
};
var Sk = function (a, b, c) {
  if ((a = c || a.hb()))
    u(b, "The element passed as a first parameter cannot be null."), (c = b.getAttribute("role") || null), a != c && lk(b, a);
};
h = Mk.prototype;
h.Ed = function (a, b) {
  nk(a, "label", b);
};
h.Pb = function (a, b) {
  a.style && (a.style.WebkitUserSelect = b ? "" : "none");
};
h.sb = function (a, b) {
  this.Db(a, this.S() + "-rtl", b);
};
h.kd = function (a) {
  var b;
  return a.Z & 32 && (b = a.Wa()) ? xg(b) && yg(b) : !1;
};
h.Qb = function (a, b) {
  var c;
  if (a.Z & 32 && (c = a.Wa())) {
    if (!b && a.C & 32) {
      try {
        c.blur();
      } catch (d) {}
      a.C & 32 && a.ue(null);
    }
    (xg(c) && yg(c)) != b && wg(c, b);
  }
};
h.T = function (a, b) {
  Fh(a, b);
  a && nk(a, "hidden", !b);
};
h.Y = function (a, b, c) {
  var d = a.g();
  if (d) {
    var e = Tk(this, b);
    e && this.Db(a, e, c);
    this.ya(d, b, c);
  }
};
h.ya = function (a, b, c) {
  Nk || (Nk = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
  u(a, "The element passed as a first parameter cannot be null.");
  b = Nk[b];
  var d = a.getAttribute("role") || null;
  d && ((d = Ok[d] || b), (b = "checked" == b || "selected" == b ? d : b));
  b && nk(a, b, c);
};
h.setContent = function (a, b) {
  var c = this.P(a);
  c &&
    (qg(c),
    b &&
      ("string" === typeof b
        ? tg(c, b)
        : ((a = function (d) {
            if (d) {
              var e = $f(c);
              c.appendChild("string" === typeof d ? e.createTextNode(d) : d);
            }
          }),
          Array.isArray(b) ? b.forEach(a) : !ya(b) || "nodeType" in b ? a(b) : bb(b).forEach(a))));
};
h.Wa = function (a) {
  return a.g();
};
h.S = function () {
  return "goog-control";
};
var Pk = function (a, b) {
    var c = a.S(),
      d = [c],
      e = a.S();
    e != c && d.push(e);
    c = b.getState();
    for (e = []; c; ) {
      var f = c & -c;
      e.push(Tk(a, f));
      c &= ~f;
    }
    d.push.apply(d, e);
    (a = b.qa) && d.push.apply(d, a);
    return d;
  },
  Tk = function (a, b) {
    a.bc || Uk(a);
    return a.bc[b];
  },
  Rk = function (a, b) {
    a.Ze || (a.bc || Uk(a), (a.Ze = rb(a.bc)));
    a = parseInt(a.Ze[b], 10);
    return isNaN(a) ? 0 : a;
  },
  Uk = function (a) {
    var b = a.S(),
      c = !Rb(b.replace(/\xa0|\s/g, " "), " ");
    u(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.bc = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    };
  };
var Vk = function () {};
t(Vk, Mk);
wa(Vk);
h = Vk.prototype;
h.hb = function () {
  return "button";
};
h.ya = function (a, b, c) {
  switch (b) {
    case 8:
    case 16:
      u(a, "The button DOM element cannot be null.");
      nk(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Vk.o.ya.call(this, a, b, c);
  }
};
h.v = function (a) {
  var b = Vk.o.v.call(this, a);
  this.Cc(b, a.Hb());
  var c = a.Xa();
  c && this.Rb(b, c);
  a.Z & 16 && this.ya(b, 16, !!(a.C & 16));
  return b;
};
h.decorate = function (a, b) {
  b = Vk.o.decorate.call(this, a, b);
  var c = this.Xa(b);
  a.Ud = c;
  a.G = this.Hb(b);
  a.Z & 16 && this.ya(b, 16, !!(a.C & 16));
  return b;
};
h.Xa = function () {};
h.Rb = function () {};
h.Hb = function (a) {
  return a.title;
};
h.Cc = function (a, b) {
  a && (b ? (a.title = b) : a.removeAttribute("title"));
};
h.S = function () {
  return "goog-button";
};
var U = function (a, b, c) {
  N.call(this, c);
  if (!b) {
    for (b = this.constructor; b; ) {
      var d = Da(b);
      if ((d = Yi[d])) break;
      b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
    }
    b = d ? ("function" === typeof d.ib ? d.ib() : new d()) : null;
  }
  this.l = b;
  this.va = void 0 !== a ? a : null;
  this.be = null;
};
t(U, N);
h = U.prototype;
h.va = null;
h.C = 0;
h.Z = 39;
h.xb = 255;
h.Kg = 0;
h.Kc = !0;
h.qa = null;
h.gd = !0;
h.Xb = !1;
h.Pe = null;
var Xk = function (a) {
  a.N && 0 != a.gd && Wk(a, !1);
  a.gd = !1;
};
h = U.prototype;
h.Wa = function () {
  return this.l.Wa(this);
};
h.Db = function (a, b) {
  b
    ? a && (this.qa ? w(this.qa, a) || this.qa.push(a) : (this.qa = [a]), this.l.Db(this, a, !0))
    : a && this.qa && ab(this.qa, a) && (0 == this.qa.length && (this.qa = null), this.l.Db(this, a, !1));
};
h.v = function () {
  var a = this.l.v(this);
  this.j = a;
  Sk(this.l, a, this.Pe);
  this.Xb || this.l.Pb(a, !1);
  this.isVisible() || this.l.T(a, !1);
};
h.Ed = function (a) {
  this.be = a;
  var b = this.g();
  b && this.l.Ed(b, a);
};
h.P = function () {
  return this.l.P(this.g());
};
h.zb = function (a) {
  return this.l.zb(a);
};
h.oe = function (a) {
  this.j = a = this.l.decorate(this, a);
  Sk(this.l, a, this.Pe);
  this.Xb || this.l.Pb(a, !1);
  this.Kc = "none" != a.style.display;
};
h.Ca = function () {
  U.o.Ca.call(this);
  var a = this.l,
    b = Si(this);
  u(this);
  u(b);
  var c = this.be;
  null != c && a.Ed(b, c);
  this.isVisible() || nk(b, "hidden", !this.isVisible());
  this.isEnabled() || a.ya(b, 1, !this.isEnabled());
  this.Z & 8 && a.ya(b, 8, this.isSelected());
  this.Z & 16 && a.ya(b, 16, !!(this.C & 16));
  this.Z & 64 && a.ya(b, 64, this.isOpen());
  this.l.De(this);
  this.Z & -2 &&
    (this.gd && Wk(this, !0), this.Z & 32 && (a = this.Wa())) &&
    ((b = this.ob || (this.ob = new Ik())),
    b.attach(a),
    this.Oa().listen(b, "key", this.Yf).listen(a, "focus", this.kc).listen(a, "blur", this.ue));
};
var Wk = function (a, b) {
  var c = a.wd ? lh : kh,
    d = a.Oa(),
    e = a.g();
  b
    ? (d.listen(e, c.Mc, a.lc).listen(e, [c.Nc, c.Lc], a.nc).listen(e, "mouseover", a.Ib).listen(e, "mouseout", a.we),
      a.wd && d.listen(e, "gotpointercapture", a.Qe),
      a.jc != hb && d.listen(e, "contextmenu", a.jc))
    : (d.Ja(e, c.Mc, a.lc).Ja(e, [c.Nc, c.Lc], a.nc).Ja(e, "mouseover", a.Ib).Ja(e, "mouseout", a.we),
      a.wd && d.Ja(e, "gotpointercapture", a.Qe),
      a.jc != hb && d.Ja(e, "contextmenu", a.jc));
};
U.prototype.Eb = function () {
  U.o.Eb.call(this);
  this.ob && this.ob.detach();
  this.isVisible() && this.isEnabled() && this.l.Qb(this, !1);
};
U.prototype.B = function () {
  U.o.B.call(this);
  this.ob && (this.ob.Ba(), delete this.ob);
  delete this.l;
  this.qa = this.va = null;
};
U.prototype.getContent = function () {
  return this.va;
};
U.prototype.setContent = function (a) {
  this.l.setContent(this.g(), a);
  this.va = a;
};
var Qk = function (a, b) {
  a.va = b;
};
h = U.prototype;
h.sb = function (a) {
  U.o.sb.call(this, a);
  var b = this.g();
  b && this.l.sb(b, a);
};
h.Pb = function (a) {
  this.Xb = a;
  var b = this.g();
  b && this.l.Pb(b, a);
};
h.isVisible = function () {
  return this.Kc;
};
h.T = function (a, b) {
  if (b || (this.Kc != a && this.dispatchEvent(a ? "show" : "hide")))
    (b = this.g()) && this.l.T(b, a), this.isEnabled() && this.l.Qb(this, a), (this.Kc = a);
};
h.isEnabled = function () {
  return !(this.C & 1);
};
h.setEnabled = function (a) {
  var b = this.getParent();
  (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
    !Yk(this, 1, !a) ||
    (a || (this.setActive(!1), Zk(this, !1)), this.isVisible() && this.l.Qb(this, a), this.Y(1, !a, !0));
};
var Zk = function (a, b) {
  Yk(a, 2, b) && a.Y(2, b);
};
h = U.prototype;
h.isActive = function () {
  return !!(this.C & 4);
};
h.setActive = function (a) {
  Yk(this, 4, a) && this.Y(4, a);
};
h.isSelected = function () {
  return !!(this.C & 8);
};
h.Bc = function (a) {
  Yk(this, 32, a) && this.Y(32, a);
};
h.isOpen = function () {
  return !!(this.C & 64);
};
h.getState = function () {
  return this.C;
};
h.Y = function (a, b, c) {
  c || 1 != a ? this.Z & a && b != !!(this.C & a) && (this.l.Y(this, a, b), (this.C = b ? this.C | a : this.C & ~a)) : this.setEnabled(!b);
};
var $k = function (a) {
    if (a.N && a.C & 32) throw Error("Component already rendered");
    a.C & 32 && a.Y(32, !1);
    a.Z &= -33;
  },
  al = function (a, b) {
    return !!(a.xb & b) && !!(a.Z & b);
  },
  Yk = function (a, b, c) {
    return !!(a.Z & b) && !!(a.C & b) != c && (!(a.Kg & b) || a.dispatchEvent(Pi(b, c))) && !a.Ua;
  };
U.prototype.Ib = function (a) {
  !bl(a, this.g()) && this.dispatchEvent("enter") && this.isEnabled() && al(this, 2) && Zk(this, !0);
};
U.prototype.we = function (a) {
  !bl(a, this.g()) && this.dispatchEvent("leave") && (al(this, 4) && this.setActive(!1), al(this, 2) && Zk(this, !1));
};
U.prototype.Qe = function (a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
U.prototype.jc = hb;
var bl = function (a, b) {
  return !!a.relatedTarget && sg(b, a.relatedTarget);
};
h = U.prototype;
h.lc = function (a) {
  this.isEnabled() &&
    (al(this, 2) && Zk(this, !0),
    0 != a.Da.button || (Qf && a.ctrlKey) || (al(this, 4) && this.setActive(!0), this.l && this.l.kd(this) && this.Wa().focus()));
  this.Xb || 0 != a.Da.button || (Qf && a.ctrlKey) || a.preventDefault();
};
h.nc = function (a) {
  this.isEnabled() && (al(this, 2) && Zk(this, !0), this.isActive() && this.wc(a) && al(this, 4) && this.setActive(!1));
};
h.wc = function (a) {
  if (al(this, 16)) {
    var b = !(this.C & 16);
    Yk(this, 16, b) && this.Y(16, b);
  }
  al(this, 8) && Yk(this, 8, !0) && this.Y(8, !0);
  al(this, 64) && ((b = !this.isOpen()), Yk(this, 64, b) && this.Y(64, b));
  b = new Fg("action", this);
  a && ((b.altKey = a.altKey), (b.ctrlKey = a.ctrlKey), (b.metaKey = a.metaKey), (b.shiftKey = a.shiftKey), (b.vd = a.vd));
  return this.dispatchEvent(b);
};
h.kc = function () {
  al(this, 32) && this.Bc(!0);
};
h.ue = function () {
  al(this, 4) && this.setActive(!1);
  al(this, 32) && this.Bc(!1);
};
h.Yf = function (a) {
  return this.isVisible() && this.isEnabled() && this.fd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
h.fd = function (a) {
  return 13 == a.keyCode && this.wc(a);
};
if ("function" !== typeof U) throw Error("Invalid component class " + U);
if ("function" !== typeof Mk) throw Error("Invalid renderer class " + Mk);
var cl = Da(U);
Yi[cl] = Mk;
Xi("goog-control", function () {
  return new U(null);
});
var dl = function () {};
t(dl, Vk);
wa(dl);
h = dl.prototype;
h.hb = function () {};
h.v = function (a) {
  Xk(a);
  a.xb &= -256;
  $k(a);
  var b = a.ra(),
    c = b.v,
    d = { class: Pk(this, a).join(" "), disabled: !a.isEnabled(), title: a.Hb() || "", value: a.Xa() || "" };
  if ((a = a.getContent())) {
    if ("string" !== typeof a)
      if (Array.isArray(a)) a = a.map(Ag).join("");
      else {
        var e = [];
        zg(a, e, !0);
        a = e.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
      }
    a = a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  } else a = "";
  return c.call(b, "BUTTON", d, a || "");
};
h.zb = function (a) {
  return "BUTTON" == a.tagName || ("INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type));
};
h.decorate = function (a, b) {
  Xk(a);
  a.xb &= -256;
  $k(a);
  if (b.disabled) {
    var c = Oa(Tk(this, 1));
    H(b, c);
  }
  return dl.o.decorate.call(this, a, b);
};
h.De = function (a) {
  a.Oa().listen(a.g(), "click", a.wc);
};
h.Pb = function () {};
h.sb = function () {};
h.kd = function (a) {
  return a.isEnabled();
};
h.Qb = function () {};
h.Y = function (a, b, c) {
  dl.o.Y.call(this, a, b, c);
  (a = a.g()) && 1 == b && (a.disabled = c);
};
h.Xa = function (a) {
  return a.value;
};
h.Rb = function (a, b) {
  a && (a.value = b);
};
h.ya = function () {};
var el = function (a, b, c) {
  U.call(this, a, b || dl.ib(), c);
};
t(el, U);
h = el.prototype;
h.Xa = function () {
  return this.Ud;
};
h.Rb = function (a) {
  this.Ud = a;
  this.l.Rb(this.g(), a);
};
h.Hb = function () {
  return this.G;
};
h.Cc = function (a) {
  this.G = a;
  this.l.Cc(this.g(), a);
};
h.B = function () {
  el.o.B.call(this);
  delete this.Ud;
  delete this.G;
};
h.Ca = function () {
  el.o.Ca.call(this);
  if (this.Z & 32) {
    var a = this.Wa();
    a && this.Oa().listen(a, "keyup", this.fd);
  }
};
h.fd = function (a) {
  return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.wc(a) : 32 == a.keyCode;
};
Xi("goog-button", function () {
  return new el(null);
});
var fl = ia(["value"]),
  hl = function (a, b, c, d) {
    el.call(this, a, gl.ib(), b);
    this.Gc = c || 0;
    this.Vd = d || 0;
    this.Td = !1;
  };
t(hl, el);
h = hl.prototype;
h.ed = function () {
  return this.Vd;
};
h.Cc = function (a) {
  this.G = a;
  var b = this.g();
  if (b)
    if (this.Td) {
      var c = a instanceof Bc ? wk(Cc(a).toString()) : a;
      b.removeAttribute("title");
      b.removeAttribute("data-tooltip-contained");
      b.removeAttribute("data-tooltip");
      a
        ? (a instanceof Bc ? (b.Lb = a) : (b.setAttribute("data-tooltip", a), (b.Lb = null)), b.setAttribute("aria-label", c))
        : ((b.Lb = null), b.removeAttribute("aria-label"));
      a = ag(b) || ag();
      b = Da(a.H);
      Ak[b] || (Ak[b] = new Bk(a));
    } else a ? (b.title = a) : b.removeAttribute("title");
};
h.setEnabled = function (a) {
  this.isEnabled() != a && (hl.o.setEnabled.call(this, a), il(this));
};
h.focus = function () {
  var a = Si(this);
  try {
    a.focus();
  } catch (b) {}
};
h.Bc = function (a) {
  hl.o.Bc.call(this, a);
  jl(this, !1);
};
h.lc = function (a) {
  hl.o.lc.call(this, a);
  this.isEnabled() && jl(this, !0);
};
h.nc = function (a) {
  hl.o.nc.call(this, a);
  this.isEnabled() && jl(this, !0);
};
var jl = function (a, b) {
    a.g() && Kf(a.g(), "jfk-button-clear-outline", b);
  },
  il = function (a) {
    a.g() && kl(a.l, a);
  },
  gl = function () {
    this.Xe = this.S() + "-standard";
    this.ae = this.S() + "-action";
    this.Re = this.S() + "-primary";
    this.pe = this.S() + "-default";
    this.te = this.S() + "-flat";
    this.Ke = this.S() + "-narrow";
    this.Je = this.S() + "-mini";
    this.me = this.S() + "-contrast";
  };
t(gl, Vk);
gl.ib = function () {
  return mf(gl);
};
gl.prototype.Ta = function (a, b, c) {
  a && c.Gc != a && ((c.Gc = a), il(c));
  b && c.Vd != b && ((c.Vd = b), il(c));
};
gl.prototype.S = function () {
  return "jfk-button";
};
gl.prototype.v = function (a) {
  Ua(a, hl, "Button is expected to be instance of jfk.Button");
  var b = a.ra();
  var c = { disabled: !a.isEnabled(), checked: !!(a.C & 16), style: a.Gc, title: a.Hb(), Og: a.Td, value: a.Xa(), width: a.ed() };
  if (R["jfk.templates.button.strict"]) var d = R["jfk.templates.button.strict"](c, void 0);
  else {
    c = c || {};
    var e = c.attributes;
    d = c.content;
    var f = c.disabled,
      g = c.id,
      k = c.tabindex,
      l = c.title,
      m = c.Og,
      n = c.value,
      q = P;
    g = '<div role="button"' + (g ? ' id="' + T(g) + '"' : "") + ' class="';
    var x = c || {};
    c = x.Lf;
    var z = x.disabled,
      A = x.checked,
      C = x.style;
    x = x.width;
    Vj();
    if (R["jfk.templates.button.classes_"])
      c = R["jfk.templates.button.classes_"]({ Lf: c, disabled: z, checked: A, style: C, width: x }, void 0);
    else {
      var O = "goog-inline-block jfk-button ";
      switch (Aa(C) ? C.toString() : C) {
        case 0:
          O += "jfk-button-standard";
          break;
        case 2:
          O += "jfk-button-action";
          break;
        case 3:
          O += "jfk-button-primary";
          break;
        case 1:
          O += "jfk-button-default";
          break;
        case 4:
          O += "jfk-button-flat";
          break;
        case 5:
          O += "jfk-button-mini";
          break;
        case 6:
          O += "jfk-button-contrast";
          break;
        default:
          O += "jfk-button-standard";
      }
      c = O +=
        (S(x, 1) ? " jfk-button-narrow" : "") + (A ? " jfk-button-checked" : "") + (c ? " " + c : "") + (z ? " jfk-button-disabled" : "");
    }
    f =
      g +
      T(c) +
      '"' +
      (f ? ' aria-disabled="true"' : ' tabindex="' + (k ? T(k) : "0") + '"') +
      (l ? (m ? ' data-tooltip="' + T(l) + '"' : ' title="' + T(l) + '"') : "") +
      (n ? ' value="' + T(n) + '"' : "");
    e
      ? (Fj(e, Bi, Gi)
          ? (e = e.getContent())
          : ((e = String(e)), Yj.test(e) || (v("Bad value `%s` for |filterHtmlAttributes", [e]), (e = "zSoyz"))),
        Fj(e, Bi, Gi) && (e = e.getContent()),
        (e = (e && !e.startsWith(" ") ? " " : "") + e))
      : (e = "");
    d = q(f + e + ">" + Q(null != d ? d : "") + "</div>");
  }
  q = d;
  d = b || ag();
  q && q.Bg
    ? (d = q.Bg())
    : ((d = d.createElement("DIV")),
      (q = Ji(q)),
      (e = q.ia()),
      (f = e.match(Ki)),
      u(
        !f,
        "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",
        f && f[0],
        e
      ),
      Oc(d, q));
  1 == d.childNodes.length && ((q = d.firstChild), 1 == q.nodeType && (d = q));
  b.append(d, a.getContent());
  this.decorate(a, d);
  return d;
};
gl.prototype.decorate = function (a, b) {
  gl.o.decorate.call(this, a, b);
  this.ie ||
    (this.ie = ub(
      this.Xe,
      r(this.Ta, 0, null),
      this.ae,
      r(this.Ta, 2, null),
      this.Re,
      r(this.Ta, 3, null),
      this.pe,
      r(this.Ta, 1, null),
      this.te,
      r(this.Ta, 4, null),
      this.Je,
      r(this.Ta, 5, null),
      this.me,
      r(this.Ta, 6, null),
      this.Ke,
      r(this.Ta, null, 1)
    ));
  for (var c = Ef(b), d = 0; d < c.length; ++d) {
    var e = this.ie[c[d]];
    e && e(a);
  }
  if ((c = b.getAttribute("data-tooltip"))) (a.G = c), (a.Td = !0);
  return b;
};
var yk = [ni(fl)];
gl.prototype.Xa = function (a) {
  return a.getAttribute("value") || "";
};
gl.prototype.Rb = function (a, b) {
  a && xk(a, b);
};
var kl = function (a, b) {
  function c(g, k) {
    (g ? d : e).push(k);
  }
  u(b.g(), "Button element must already exist when updating style.");
  var d = [],
    e = [],
    f = b.Gc;
  c(0 == f, a.Xe);
  c(2 == f, a.ae);
  c(3 == f, a.Re);
  c(4 == f, a.te);
  c(5 == f, a.Je);
  c(1 == f, a.pe);
  c(6 == f, a.me);
  c(1 == b.ed(), a.Ke);
  c(!b.isEnabled(), a.S() + "-disabled");
  Jf(b.g(), e);
  Hf(b.g(), d);
};
Xi("jfk-button", function () {
  return new hl(null);
});
var ll = function () {
  L.call(this);
  this.C = 0;
  this.endTime = this.startTime = null;
};
t(ll, L);
ll.prototype.onStop = function () {
  this.dispatchEvent("stop");
};
var ml = function (a, b) {
    Array.isArray(b) || (b = [b]);
    u(0 < b.length, "At least one Css3Property should be specified.");
    b = b.map(function (c) {
      if ("string" === typeof c) return c;
      Pa(c, "Expected css3 property to be an object.");
      var d = c.Ue + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
      u(c.Ue && "number" === typeof c.duration && c.timing && "number" === typeof c.delay, "Unexpected css3 property value: %s", d);
      return d;
    });
    M(a, "transition", b.join(","));
  },
  nl = ib(function () {
    var a = ng(document, "DIV");
    if (!Ic.test("div")) throw Error("Invalid tag name <div>.");
    if ("DIV" in Kc) throw Error("Tag name <div> is not allowed for SafeHtml.");
    var b = { style: { transition: "opacity 1s linear", "-webkit-transition": "opacity 1s linear" } };
    var c = void 0;
    var d = "";
    if (b)
      for (var e in b)
        if (Object.prototype.hasOwnProperty.call(b, e)) {
          if (!Ic.test(e)) throw Error('Invalid attribute name "' + e + '".');
          var f = b[e];
          if (null != f) {
            var g = void 0;
            var k = e;
            if (f instanceof Bb) f = Cb(f);
            else if ("style" == k.toLowerCase()) {
              if (!Aa(f))
                throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
              if (!(f instanceof bc)) {
                var l = "";
                for (g in f)
                  if (Object.prototype.hasOwnProperty.call(f, g)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
                    var m = f[g];
                    null != m && ((m = Array.isArray(m) ? m.map(dc).join(" ") : dc(m)), (l += g + ":" + m + ";"));
                  }
                f = l ? new bc(l, ac) : cc;
              }
              f instanceof bc && f.constructor === bc
                ? (f = f.zd)
                : (v("expected object of type SafeStyle, got '" + f + "' of type " + xa(f)), (f = "type_error:SafeStyle"));
            } else {
              if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + f + '" given.');
              if (k.toLowerCase() in Jc)
                if (f instanceof Eb) f = Fb(f).toString();
                else if (f instanceof Vb) f = Wb(f);
                else if ("string" === typeof f) f = (Zb(f) || $b).ia();
                else
                  throw Error(
                    'Attribute "' + k + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.'
                  );
            }
            f.Ha && (f = f.ia());
            u("string" === typeof f || "number" === typeof f, "String or number value expected, got " + typeof f + " with value: " + f);
            g = k + '="' + Qb(String(f)) + '"';
            d += " " + g;
          }
        }
    b = "<div" + d;
    null == c ? (c = []) : Array.isArray(c) || (c = [c]);
    !0 === wb.div
      ? (u(!c.length, "Void tag <div> does not allow content."), (b += ">"))
      : ((c = Hc(c)), (b += ">" + Cc(c).toString() + "</div>"));
    c = Dc(b);
    Pc(a, c);
    a = a.firstChild;
    u(a.nodeType == Node.ELEMENT_NODE);
    c = a.style[Yc("transition")];
    return "" != ("undefined" !== typeof c ? c : a.style[ph(a, "transition")] || "");
  });
var ol = function (a, b, c, d, e) {
  ll.call(this);
  this.j = a;
  this.Rf = b;
  this.gg = c;
  this.se = d;
  this.vb = Array.isArray(e) ? e : [e];
};
t(ol, ll);
h = ol.prototype;
h.play = function () {
  if (1 == this.C) return !1;
  this.dispatchEvent("begin");
  this.dispatchEvent("play");
  this.startTime = Date.now();
  this.C = 1;
  if (nl()) return M(this.j, this.gg), (this.bb = Mi(this.yg, void 0, this)), !0;
  this.Ld(!1);
  return !1;
};
h.yg = function () {
  Dh(this.j);
  ml(this.j, this.vb);
  M(this.j, this.se);
  this.bb = Mi(Ga(this.Ld, this, !1), 1e3 * this.Rf);
};
h.stop = function () {
  1 == this.C && this.Ld(!0);
};
h.Ld = function (a) {
  M(this.j, "transition", "");
  p.clearTimeout(this.bb);
  M(this.j, this.se);
  this.endTime = Date.now();
  this.C = 0;
  if (a) this.onStop();
  else this.dispatchEvent("finish");
  this.dispatchEvent("end");
};
h.B = function () {
  this.stop();
  ol.o.B.call(this);
};
h.pause = function () {
  u(!1, "Css3 transitions does not support pause action.");
};
var pl = function (a, b, c, d) {
  return new ol(a, 0.13, { opacity: c }, { opacity: d }, { Ue: "opacity", duration: 0.13, timing: b, delay: 0 });
};
var ql = function (a) {
  L.call(this);
  this.j = a;
  this.ng = K(this.j, "focus", this, !0);
  this.og = K(this.j, "blur", this, !0);
};
t(ql, L);
ql.prototype.handleEvent = function (a) {
  var b = new Ig(a.Da);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
ql.prototype.B = function () {
  ql.o.B.call(this);
  ch(this.ng);
  ch(this.og);
  delete this.j;
};
var rl = function (a, b) {
  this.Vc = a instanceof I ? a : new I(a, b);
};
t(rl, oh);
rl.prototype.ha = function (a, b, c) {
  Th((a ? $f(a) : document).documentElement, 0, a, b, this.Vc, c, null);
};
var sl = function (a, b, c) {
  this.da = c || (a ? ag(J(a)) : ag());
  ej.call(this, this.da.v("DIV", { style: "position:absolute;display:none;" }));
  this.Yc = new I(1, 1);
  this.Va = new zf();
  this.cb = null;
  a && this.attach(a);
  null != b && this.Hd(b);
};
t(sl, ej);
var tl = [];
h = sl.prototype;
h.J = null;
h.className = "goog-tooltip";
h.Id = 500;
h.bg = 0;
h.ra = function () {
  return this.da;
};
h.attach = function (a) {
  a = J(a);
  this.Va.add(a);
  K(a, "mouseover", this.Ib, !1, this);
  K(a, "mouseout", this.mc, !1, this);
  K(a, "mousemove", this.ve, !1, this);
  K(a, "focus", this.kc, !1, this);
  K(a, "blur", this.mc, !1, this);
};
h.detach = function (a) {
  if (a) (a = J(a)), ul(this, a), this.Va.remove(a);
  else {
    for (var b = this.Va.ja(), c = 0; (a = b[c]); c++) ul(this, a);
    this.Va.clear();
  }
};
var ul = function (a, b) {
  bh(b, "mouseover", a.Ib, !1, a);
  bh(b, "mouseout", a.mc, !1, a);
  bh(b, "mousemove", a.ve, !1, a);
  bh(b, "focus", a.kc, !1, a);
  bh(b, "blur", a.mc, !1, a);
};
h = sl.prototype;
h.Hd = function (a) {
  tg(this.g(), a);
};
h.Ac = function (a) {
  var b = this.g();
  b && rg(b);
  sl.o.Ac.call(this, a);
  a
    ? ((b = this.da.H.body),
      b.insertBefore(a, b.lastChild),
      Cg(this.cb),
      (this.cb = new ql(u(this.g()))),
      Eg(this, r(Cg, this.cb)),
      K(this.cb, "focusin", this.Ab, void 0, this),
      K(this.cb, "focusout", this.Ec, void 0, this))
    : (Cg(this.cb), (this.cb = null));
};
h.getState = function () {
  return this.Sa ? (this.isVisible() ? 4 : 1) : this.Jb ? 3 : this.isVisible() ? 2 : 0;
};
h.sd = function () {
  if (!bj.prototype.sd.call(this)) return !1;
  if (this.anchor) for (var a, b = 0; (a = tl[b]); b++) sg(a.g(), this.anchor) || a.T(!1);
  w(tl, this) || tl.push(this);
  a = this.g();
  a.className = this.className;
  this.Ab();
  K(a, "mouseover", this.ye, !1, this);
  K(a, "mouseout", this.xe, !1, this);
  vl(this);
  return !0;
};
h.td = function () {
  ab(tl, this);
  for (var a = this.g(), b, c = 0; (b = tl[c]); c++) b.anchor && sg(a, b.anchor) && b.T(!1);
  this.Oe && this.Oe.Ec();
  bh(a, "mouseover", this.ye, !1, this);
  bh(a, "mouseout", this.xe, !1, this);
  this.anchor = void 0;
  0 == this.getState() && (this.zc = !1);
  bj.prototype.td.call(this);
};
h.Ie = function (a, b) {
  this.anchor == a &&
    this.Va.contains(this.anchor) &&
    (this.zc || !this.Tj
      ? (this.T(!1), this.isVisible() || ((this.anchor = a), this.setPosition(b || this.dd(0)), this.T(!0)))
      : (this.anchor = void 0));
  this.Sa = void 0;
};
h.bd = function () {
  return this.J;
};
h.rg = function (a) {
  this.Jb = void 0;
  if (a == this.anchor) {
    a = this.ra();
    var b = a.bd();
    a = b && this.g() && a.contains(this.g(), b);
    (null != this.J && (this.J == this.g() || this.Va.contains(this.J))) || a || (this.he && this.he.J) || this.T(!1);
  }
};
var wl = function (a, b) {
  var c = kg(a.da.H);
  a.Yc.x = b.clientX + c.x;
  a.Yc.y = b.clientY + c.y;
};
sl.prototype.Ib = function (a) {
  var b = xl(this, a.target);
  this.J = b;
  this.Ab();
  b != this.anchor && ((this.anchor = b), this.Sa || (this.Sa = Mi(Ga(this.Ie, this, b, void 0), this.Id)), yl(this), wl(this, a));
};
var xl = function (a, b) {
  try {
    for (; b && !a.Va.contains(b); ) b = b.parentNode;
    return b;
  } catch (c) {
    return null;
  }
};
sl.prototype.ve = function (a) {
  wl(this, a);
  this.zc = !0;
};
sl.prototype.kc = function (a) {
  this.J = a = xl(this, a.target);
  this.zc = !0;
  if (this.anchor != a) {
    this.anchor = a;
    var b = this.dd(1);
    this.Ab();
    this.Sa || (this.Sa = Mi(Ga(this.Ie, this, a, b), this.Id));
    yl(this);
  }
};
sl.prototype.dd = function (a) {
  return 0 == a ? ((a = this.Yc.clone()), new zl(a)) : new Al(this.J);
};
var yl = function (a) {
  if (a.anchor) for (var b, c = 0; (b = tl[c]); c++) sg(b.g(), a.anchor) && ((b.he = a), (a.Oe = b));
};
sl.prototype.mc = function (a) {
  var b = xl(this, a.target),
    c = xl(this, a.relatedTarget);
  b != c &&
    (b == this.J && (this.J = null),
    vl(this),
    (this.zc = !1),
    !this.isVisible() || (a.relatedTarget && sg(this.g(), a.relatedTarget)) ? (this.anchor = void 0) : this.Ec());
};
sl.prototype.ye = function () {
  var a = this.g();
  this.J != a && (this.Ab(), (this.J = a));
};
sl.prototype.xe = function (a) {
  var b = this.g();
  this.J != b || (a.relatedTarget && sg(b, a.relatedTarget)) || ((this.J = null), this.Ec());
};
var vl = function (a) {
  a.Sa && (p.clearTimeout(a.Sa), (a.Sa = void 0));
};
sl.prototype.Ec = function () {
  2 == this.getState() && (this.Jb = Mi(Ga(this.rg, this, this.anchor), this.bg));
};
sl.prototype.Ab = function () {
  this.Jb && (p.clearTimeout(this.Jb), (this.Jb = void 0));
};
sl.prototype.B = function () {
  this.T(!1);
  vl(this);
  this.detach();
  this.g() && rg(this.g());
  this.J = null;
  delete this.da;
  sl.o.B.call(this);
};
var zl = function (a, b) {
  rl.call(this, a, b);
};
t(zl, rl);
zl.prototype.ha = function (a, b, c) {
  b = (a ? $f(a) : document).documentElement;
  b = yh(b);
  c = c ? new mh(c.top + 10, c.right, c.bottom, c.left + 10) : new mh(10, 0, 0, 10);
  Sh(this.Vc, a, 8, c, b, 9) & 496 && Sh(this.Vc, a, 8, c, b, 5);
};
var Al = function (a) {
  Uh.call(this, a, 5);
};
t(Al, Uh);
Al.prototype.ha = function (a, b, c) {
  var d = new I(10, 0);
  Th(this.element, this.ec, a, b, d, c, 9) & 496 && Th(this.element, 4, a, 1, d, c, 5);
};
var Bl = function (a, b, c, d, e) {
  d = d || (b ? ag(J(b)) : ag());
  this.l = a;
  pg(d.H.body, this.l.g());
  Fh(this.l.g(), !1);
  this.className = qk();
  sl.call(this, b, c, d);
  Eg(this, r(Cg, this.l));
  this.Ac(this.l.g());
  a = this.l.g();
  a = pl(a, "ease-out", 0, 1);
  b = this.l.g();
  b = pl(b, "ease-in", 1, 0);
  this.tb = a;
  this.jb = b;
  this.wb = new ak(qk(), !0);
  this.wb.setPosition(null != e ? e : 1, void 0, void 0, -1);
  e = this.wb;
  a = this.l.g();
  b = this.l.Rc;
  e.oa = a;
  e.Sc = b;
  this.wb.jd = !0;
  this.Id = 300;
};
t(Bl, sl);
Bl.prototype.dd = function () {
  this.wb.La = this.bd();
  return this.wb;
};
Bl.prototype.P = function () {
  return this.l.P();
};
Bl.prototype.Hd = function (a) {
  tg(this.P(), a);
};
var Cl = function (a, b, c, d) {
  c = c || (a ? ag(J(a)) : ag());
  var e = new rk(c);
  Bl.call(this, e, a, b, c, d);
};
ra(Cl, Bl);
var Dl = ia(["https://ssl.google-analytics.com/analytics.js"]),
  El = ia(["https://ssl.google-analytics.com/ga.js"]),
  Fl = {};
function Gl(a, b) {
  a.forEach(function (c) {
    if ("Error" == c.type || "Warning" == c.type || "Suggestion" == c.type) {
      var d = c.category || (c.parent && c.parent.category) || b,
        e = d + c.type + ": " + c.text + c.label;
      Fl[e] || ((Fl[e] = !0), _gaq.push(["_trackEvent", d, c.type + ": " + c.text, c.label, 0, !0]));
    }
    c.relatedIssues && Gl(c.relatedIssues, c.category || b);
  });
}
function Hl(a, b, c) {
  b
    ? ((function () {
        window.GoogleAnalyticsObject = "ga";
        window.ga =
          window.ga ||
          function () {
            window.ga.q = window.ga.q || [];
            window.ga.q.push(arguments);
          };
        window.ga.Oj = 1 * new Date();
        var d = ng(document, "SCRIPT");
        d.async = !0;
        zk(d, ti(Dl));
        var e = document.getElementsByTagName("SCRIPT")[0];
        e.parentNode.insertBefore(d, e);
      })(),
      ga("create", a, "auto"),
      ga("set", "checkProtocolTask", function () {}),
      c && ga("set", "location", "https://analytics.google.com/" + c),
      ga("send", "pageview"))
    : (_gaq.push(["_setAccount", a]),
      _gaq.push(["_trackPageview"]),
      (function () {
        var d = ng(document, "SCRIPT");
        d.type = "text/javascript";
        d.async = !0;
        zk(d, ti(El));
        var e = document.getElementsByTagName("SCRIPT")[0];
        e.parentNode.insertBefore(d, e);
      })());
}
var Il = function (a, b) {
  N.call(this, b);
  this.va = a;
};
t(Il, N);
Il.prototype.ta = "info";
Il.prototype.qd = !1;
var Jl = { info: "jfk-butterBar-info", error: "jfk-butterBar-error", warning: "jfk-butterBar-warning", promo: "jfk-butterBar-promo" };
h = Il.prototype;
h.getType = function () {
  return this.ta;
};
h.Dc = function (a) {
  if (this.P()) {
    var b = this.g(),
      c = Jl[a];
    If(b, Jl[this.ta]);
    H(b, c);
  }
  this.ta = a;
};
h.setContent = function (a) {
  this.va = a;
  if ((a = this.g())) {
    var b = this.ra();
    b.Cd(a);
    b.append(a, this.va);
  }
};
h.isVisible = function () {
  var a = this.g();
  return null != a && Gf(a, "jfk-butterBar-shown");
};
h.T = function (a) {
  u(this.N, "setVisible must only be called after the butter bar is rendered.");
  Kf(this.g(), "jfk-butterBar-shown", a);
};
h.v = function () {
  this.j = this.ra().v("DIV", "jfk-butterBar");
  u(this.g(), "The DOM element for the butter bar cannot be null.");
  var a = this.g();
  a && (nk(a, "live", "assertive"), nk(a, "atomic", "true"));
  this.setContent(this.va);
  this.qd = this.qd;
  (a = this.g()) && Kf(a, "jfk-butterBar-mini", this.qd);
  this.Dc(this.ta);
};
var Kl = function (a) {
  Il.call(this, null, a);
  this.bb = null;
};
ra(Kl, Il);
Kl.prototype.hd = function () {
  var a = J("ta-butterbar");
  a && !this.N && Ui(this, a);
};
Kl.prototype.notify = function (a) {
  this.setContent(mg("SPAN", void 0, a + "\u00a0"));
  this.T(!0);
  null != this.bb && (p.clearTimeout(this.bb), (this.bb = null));
  this.bb = Mi(this.hide, 5e3, this);
};
Kl.prototype.hide = function () {
  this.T(!1);
};
var Ll = {
    lf: ["BC", "AD"],
    kf: ["Before Christ", "Anno Domini"],
    tf: "JFMAMJJASOND".split(""),
    zf: "JFMAMJJASOND".split(""),
    mf: "January February March April May June July August September October November December".split(" "),
    yf: "January February March April May June July August September October November December".split(" "),
    vf: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Bf: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Ff: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Df: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    xf: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Cf: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Bi: "SMTWTFS".split(""),
    Af: "SMTWTFS".split(""),
    wf: ["Q1", "Q2", "Q3", "Q4"],
    uf: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    hf: ["AM", "PM"],
    nh: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    rj: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    oh: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    Xd: 6,
    Gj: [5, 6],
    Yd: 5
  },
  Ml = Ll;
Ml = Ll;
var Nl = function (a, b, c, d, e) {
  a = new Date(a, b, c);
  e = e || 0;
  return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
};
var Ol = function () {},
  Ql = function (a) {
    if ("number" == typeof a) {
      var b = new Ol();
      b.Ye = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", B(c, 2));
        c = d.join("");
      }
      b.Od = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = Pl(a);
      b.Sd = [c, c];
      b.eb = { lj: a, Zd: a };
      b.vb = [];
      return b;
    }
    b = new Ol();
    b.Od = a.id;
    b.Ye = -a.std_offset;
    b.Sd = a.names;
    b.eb = a.names_ext;
    b.vb = a.transitions;
    return b;
  },
  Pl = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(B(Math.floor(a / 60) % 100, 2), ":", B(a % 60, 2));
    return b.join("");
  },
  Rl = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.vb.length && b >= a.vb[c]; ) c += 2;
    return 0 == c ? 0 : a.vb[c - 1];
  },
  Sl = function (a, b) {
    a = a.Ye - Rl(a, b);
    return -1440 === a ? 0 : a;
  };
var Vl = function () {
    u(!0, "Pattern must be defined");
    u(void 0 !== Ml, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.vc = [];
    this.K = Ml;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (Tl && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < Ul.length; ++c) {
        var d = a.match(Ul[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.vc.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  Ul = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  Wl = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
Vl.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - Sl(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.vc.length; ++f) {
    var g = this.vc[f].text;
    1 == this.vc[f].type ? c.push(Xl(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var Yl = function (a, b) {
    b = String(b);
    a = a.K || Ml;
    if (void 0 !== a.Gf) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.Gf + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  Tl = !1,
  Zl = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  $l = function (a, b) {
    Zl(b);
    b = Wl(b);
    return a.K.hf[12 <= b && 24 > b ? 1 : 0];
  },
  Xl = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.K.kf[c] : a.K.lf[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), Yl(a, B(c, g));
      case "Y":
        return (
          (c = new Date(Nl(d.getFullYear(), d.getMonth(), d.getDate(), a.K.Yd, a.K.Xd)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          Yl(a, B(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.K.tf[c];
            break a;
          case 4:
            g = a.K.mf[c];
            break a;
          case 3:
            g = a.K.vf[c];
            break a;
          default:
            g = Yl(a, B(c + 1, g));
        }
        return g;
      case "k":
        return Zl(e), Yl(a, B(Wl(e) || 24, g));
      case "S":
        return Yl(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? B(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.K.Ff[c] : a.K.xf[c];
      case "a":
        return $l(a, e);
      case "b":
        return $l(a, e);
      case "B":
        return $l(a, e);
      case "h":
        return Zl(e), Yl(a, B(Wl(e) % 12 || 12, g));
      case "K":
        return Zl(e), Yl(a, B(Wl(e) % 12, g));
      case "H":
        return Zl(e), Yl(a, B(Wl(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.K.Af[c];
            break a;
          case 4:
            g = a.K.Df[c];
            break a;
          case 3:
            g = a.K.Cf[c];
            break a;
          default:
            g = Yl(a, B(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.K.zf[c];
            break a;
          case 4:
            g = a.K.yf[c];
            break a;
          case 3:
            g = a.K.Bf[c];
            break a;
          default:
            g = Yl(a, B(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.K.wf[c] : a.K.uf[c];
      case "d":
        return Yl(a, B(d.getDate(), g));
      case "m":
        return Zl(e), Yl(a, B(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return Zl(e), Yl(a, B(e.getSeconds(), g));
      case "v":
        return (f || Ql(c.getTimezoneOffset())).Od;
      case "V":
        return (
          (a = f || Ql(c.getTimezoneOffset())),
          2 >= g
            ? a.Od
            : 0 < Rl(a, c)
            ? void 0 !== a.eb.jf
              ? a.eb.jf
              : a.eb.DST_GENERIC_LOCATION
            : void 0 !== a.eb.Zd
            ? a.eb.Zd
            : a.eb.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = Nl(e.getFullYear(), e.getMonth(), e.getDate(), a.K.Yd, a.K.Xd)),
          Yl(a, B(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || Ql(c.getTimezoneOffset())), 4 > g ? a.Sd[0 < Rl(a, c) ? 2 : 0] : a.Sd[0 < Rl(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || Ql(c.getTimezoneOffset())),
          4 > g
            ? ((g = -Sl(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(B(Math.floor(g / 60) % 100, 2), B(g % 60, 2)),
              (g = a.join("")))
            : (g = Yl(a, Pl(Sl(b, c)))),
          g
        );
      default:
        return "";
    }
  };
new Vl();
Nd("LoggingEnabled");
var am = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.issueClass = 0;
    this.rb = g || [];
    this.Ya = !1;
    this.view = this.hint = null;
    this.context = {};
  },
  bm = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  cm = function (a, b, c, d, e, f) {
    return new am(a, b, c, void 0, d, e, f);
  },
  dm = r(cm, "Debug", null),
  em = r(cm, "Error", null),
  fm = r(cm, "Info", null),
  gm = r(cm, "Suggestion", null);
fm("Implemented in %s");
fm("Includes %s");
am.prototype.clear = function () {
  this.context = {};
  this.Ya = !1;
};
am.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.rb.length && (a.rb = bm(this.rb));
  return a;
};
am.prototype.otherwise = function () {
  return this;
};
am.prototype.setClass = function (a) {
  this.issueClass = a;
  this.rb.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var hm = function (a, b) {
    a.format = b;
    return a;
  },
  im = function (a, b) {
    a.hint = b;
    return a;
  },
  jm = function (a) {
    a.infoLink = "#url_encoding";
    return a;
  };
am.prototype.Hd = function (a) {
  this.text = a;
};
am.prototype.Dc = function (a) {
  this.type = a;
};
var km = function (a, b) {
  a.view = b;
  return a;
};
dm("__altered");
function lm(a, b) {
  if (Ld("CheckPermissionsLater") || a) {
    var c = J("permissions-check");
    c && Fh(c, a);
    if (!a) return;
  }
  chrome.permissions &&
    chrome.permissions.contains({ permissions: ["management"] }, function (d) {
      var e = J("permissions-check");
      e &&
        (Fh(e, !d),
        d ||
          ((d = J("permissions-check-button")),
          K(d, "click", r(mm, a, b)),
          (d = J("permissions-refuse-button")) &&
            K(d, "click", function () {
              Jd("CheckPermissionsLater", !0);
              Fh(e, !1);
            })));
    });
}
function mm(a, b) {
  chrome.permissions.request({ permissions: ["management"] }, function (c) {
    c && (lm(a, b), b());
    Jd("CheckPermissionsLater", c);
  });
} /*
 SPDX-License-Identifier: Apache-2.0 */
var nm = Object.prototype.hasOwnProperty;
function om() {}
om.prototype = Object.create(null);
function pm(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (nm.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function qm(a, b, c) {
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
function rm() {
  var a = new om();
  a.__default = qm;
  a.style = pm;
  return a;
}
rm();
var sm = rm();
var tm = ia(["data-soyloggingfunction-"]);
ni(tm);
ld(nd(), "api_idom");
sm.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
sm.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
sm.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var wm = function (a, b) {
    var c = a.tags,
      d = a.Ne,
      e = a.na;
    a = a.kb;
    Vj();
    if (R["tvt.templates2.details"]) b = R["tvt.templates2.details"]({ tags: c, Ne: d, na: e, kb: a }, b);
    else {
      if (c.length)
        if ((Vj(), R["tvt.templates2.tags_"])) a = R["tvt.templates2.tags_"]({ tags: c, Qa: void 0 }, b);
        else {
          var f = "";
          if (c.length) {
            f += '<div id="tags" class="section-content">';
            a = c.length;
            for (var g = 0; g < a; g++) {
              var k = c[g];
              if (S(k.type, "Tag") && !S(k.valueFormat, "hidden")) {
                var l = b,
                  m = k.category,
                  n = k.tagId,
                  q = k.ignored,
                  x = k.text,
                  z = k.index,
                  A = k.hasPopout;
                k = k.status;
                Vj();
                k = R["tvt.templates2.category_"]
                  ? R["tvt.templates2.category_"]({ category: m, bk: n, Nj: q, Zj: x, index: z, status: k, hasPopout: A }, l)
                  : P(
                      '<div class="category" id="tag-' +
                        T(m) +
                        "-" +
                        T(n) +
                        '"' +
                        (q ? ' style="-webkit-filter: grayscale(100%);"' : "") +
                        '><div class=" tag-open goog-inline-block" id="tag-title-' +
                        T(z) +
                        '">' +
                        um(l, k, q ? "ignore" : "") +
                        '<div class="main-text"><div class="tag-sequence">' +
                        Q(z + 1) +
                        ".</div><div>" +
                        Q(m) +
                        (n ? '<br/><div class="tag-accountid">' + Q(n) + "</div>" : "") +
                        '</div></div></div><div class="tag-show-option"><div class="tag-show-details tag-open" id="tag-details-' +
                        T(z) +
                        '"></div>' +
                        (A ? '<div class="tag-popout" title="Open detailed report" data-tag-id="' + T(n) + '"></div>' : "") +
                        '<div class="tag-ignore goog-inline-block ' +
                        (q ? "issue-ignored" : "") +
                        '" id="ignore:' +
                        T(x) +
                        ':Tag" title="Add to ignore list"></div></div></div>'
                    );
              } else k = "";
              f += k;
            }
            f += "</div>";
          }
          a = P(f);
        }
      else
        a =
          '<div class="no-tag-found no-results img-empty"><div class="status-message"><div class="speech-bubble">' +
          (0 < a ? '<span class="show-ignored">Show Ignored Issues</span>' : "No tags found.") +
          "</div></div></div>";
      d = "" + a + vm(b, d, e);
      a = c.length;
      for (g = 0; g < a; g++) (f = c[g]), (d += S(f.type, "Group") ? "<h1>Group</h1>" + vm(b, f.relatedIssues, e) : "");
      b = P(d);
    }
    return b;
  },
  zm = function (a, b) {
    var c = a.nb,
      d = a.views,
      e = a.selectedView,
      f = a.Wc,
      g = a.Rd,
      k = a.settings,
      l = a.na,
      m = a.kb,
      n = a.Qa,
      q = a.ze,
      x = a.tabId,
      z = a.tagId;
    a = a.scheme;
    Vj();
    if (R["tvt.templates2.showIssue"])
      b = R["tvt.templates2.showIssue"](
        { nb: c, views: d, selectedView: e, Wc: f, Rd: g, settings: k, na: l, kb: m, Qa: n, ze: q, tabId: x, tagId: z, scheme: a },
        b
      );
    else {
      var A =
        '<div class="issue-header"><div id="nav-back' +
        (n ? " hide" : "") +
        '"></div>' +
        (n
          ? '<div class="iob-counter-' + T(c.value) + ' iob-counter"><div class="iob-counter-inner">' + Q(f + 1) + "</div></div>"
          : um(b, c.status)) +
        '<div class="main-text tag-header">';
      var C = c.text,
        O = 40,
        ha = !0;
      C = String(C);
      if (!(C.length <= O)) {
        ha && (3 < O ? (O -= 3) : (ha = !1));
        var za = C.charCodeAt(O - 1);
        if ((za = 55296 <= za && 56319 >= za)) (za = C.charCodeAt(O)), (za = 56320 <= za && 57343 >= za);
        za && --O;
        C = C.substring(0, O);
        ha && (C += "...");
      }
      d =
        A +
        Q(C) +
        '</div><div class="navigation-controls"><div class="nav-text' +
        (n ? " hide" : "") +
        '"><span id="current-issue-screen">' +
        Q(f + 1) +
        '</span>/<span id="total-issues">' +
        Q(g) +
        "</span></div>" +
        (n
          ? '<div id="nav-close"></div><div id="nav-left"' +
            (S(f, 0) ? ' class="disable"' : "") +
            '></div><div id="nav-right"' +
            (S(f, g - 1) ? ' class="disable"' : "") +
            "></div>"
          : '<div id="nav-up"' +
            (S(f, 0) ? ' class="disable"' : "") +
            '></div><div id="nav-down"' +
            (S(f, g - 1) ? ' class="disable"' : "") +
            "></div>") +
        '</div></div><div class="issue-info"><div class="issue-detail-box"><div class="idb-header">' +
        xm(b, d, e) +
        '</div><div class="idb-details">' +
        ym(b, c, k, Tj("Info", "Fine", "Debug", "Group", "Hidden"), e, l, x, z, a) +
        "</div></div>";
      if (0 < c.buckets.length) {
        d += '<div class="issue-bucket-box">';
        g = c.buckets;
        n = g.length;
        for (A = 0; A < n; A++)
          (C = g[A]),
            (d +=
              '<div id="bucket-' +
              T(f) +
              "-" +
              T(A) +
              '" class="iob-option iob-' +
              T(C.value) +
              " " +
              (A == c.buckets.length - 1 && 0 == A % 2 ? "last" : "") +
              '"><div class="iob-counter-' +
              T(C.value) +
              ' iob-counter"><div class="iob-counter-inner">' +
              Q(C.relatedIssues.length) +
              "</div></div>" +
              Q(C.text) +
              "</div>");
        d += "</div>";
      }
      d +=
        (Kj(q) || 0 < m
          ? '<div class="section"><div class="issue-optimize-label section-header"><div class="section-header-title">' +
            (0 < c.relatedIssues.length || (0 < m && Kj(l)) ? "Where to optimize" : Q(m) + " filtered items.") +
            "</div></div>" +
            (0 < c.relatedIssues.length || (0 < m && Kj(l))
              ? '<div class="issue-optimize section-content">' + ym(b, c, k, Tj("Error", "Warning", "Suggestion"), e, l, x, z, a) + "</div>"
              : "") +
            "</div>"
          : "") + "</div>";
      b = P(d);
    }
    return b;
  },
  Bm = function (a, b) {
    var c = a.af;
    a = a.isInternal;
    Vj();
    if (R["tvt.templates2.welcomeScreen"]) b = R["tvt.templates2.welcomeScreen"]({ af: c, isInternal: a }, b);
    else {
      for (
        var d =
            '<div id="welcome-screen-header"><div class="welcome-text"><div class="welcome-text1">Welcome to</div><div class="welcome-text2"><span>Tag Assistant Legacy by</span><img class="google-icon" src="images/google_icon_dark.svg" alt="Google_icon"></div><div class="welcome-call-to-action"><span>Tag Assistant is changing.&nbsp;</span><a href="https://support.google.com/tagassistant/answer/10042782" target="_blank">Learn more</a></div></div></div><div class="welcome-tags"><div class="start-title">To get started tell us which of these tags you want Tag Assistant Legacy to check for:</div><div class="check-mark"><div class="tags-left">',
          e = Math.max(0, Math.ceil(c.length / 2)),
          f = 0;
        f < e;
        f++
      )
        d +=
          '<div class="tag-image-text"><input type="checkbox" class="tag-checkbox-background" checked/><div class="tag-checkbox-img"><div class="tag-checkbox-tick"></div></div><div class="tag-text">' +
          Q(c[1 * f]) +
          "</div></div>";
      d += '</div><div class="tags-right">';
      e = Math.round(c.length / 2);
      f = Math.max(0, Math.ceil(c.length - e));
      for (var g = 0; g < f; g++)
        d +=
          '<div class="tag-image-text"><input type="checkbox" class="tag-checkbox-background" checked/><div class="tag-checkbox-img"><div class="tag-checkbox-tick"></div></div><div class="tag-text">' +
          Q(c[e + 1 * g]) +
          "</div></div>";
      d +=
        '</div></div><div class="validate-page-dd-container"><select id="validate-page"><option value="validate-selected-pages">Validate selected pages</option><option value="validate-all-pages">Validate all pages</option></select></div><div class="welcome-tags-options"><div role="button" id="welcome-screen-done-button" class="goog-inline-block jfk-button jfk-button-action">Done</div></div></div><div id="welcome-footer">' +
        Am(b, a) +
        '<div role="button" id="help-button" title="Help" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="button-left goog-inline-block img-button img-help"></div><div class="img-button-text button-right">Need help?</div></div><div role="button" id="settings" title="Options" style="-webkit-user-select: none;float: right;" class="more-options goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-settings"></div><div class="img-button-text button-right">More options</div></div></div>';
      b = P(d);
    }
    return b;
  },
  Cm = function (a, b) {
    return xm(b, a.views, a.selectedView);
  },
  xm = function (a, b, c) {
    Vj();
    if (R["tvt.templates2.showViews"]) return R["tvt.templates2.showViews"]({ views: b, selectedView: c }, a);
    a = '<div class="view-left jfk-button jfk-button-flat" style="display: none;"></div><div class="view-tabs">';
    for (var d = b.length, e = 0; e < d; e++) {
      var f = b[e];
      a +=
        '<div class="idb-view-text ' +
        (S(c, f) ? "idb-view-selected" : "") +
        (2 < e ? " hide-tab" : "") +
        '"><span class="view-header">' +
        Q(f) +
        "</span></div>";
    }
    a += '</div><div class="view-right jfk-button jfk-button-flat"' + (4 > b.length ? ' style="display: none;"' : "") + "></div>";
    return P(a);
  },
  Dm = function (a, b) {
    return ym(b, a.tag, a.settings, a.cf, a.selectedView, a.na, a.tabId, a.tagId, a.scheme, a.Qa);
  },
  ym = function (a, b, c, d, e, f, g, k, l, m) {
    Vj();
    if (R["tvt.templates2.issueBox"])
      return R["tvt.templates2.issueBox"]({ tag: b, settings: c, cf: d, selectedView: e, na: f, tabId: g, tagId: k, Qa: m, scheme: l }, a);
    for (var n = "", q = d.length, x = 0; x < q; x++)
      n += Em(
        a,
        k,
        b.relatedIssues,
        d[x],
        e,
        m
          ? "" + c
          : !c[b.category] || S(c[b.category], "Default")
          ? c.DefaultLevelOfDetail
            ? "" + c.DefaultLevelOfDetail
            : "Info"
          : "" + c[b.category],
        f,
        g,
        void 0,
        l
      );
    return P(n);
  },
  Em = function (a, b, c, d, e, f, g, k, l, m) {
    Vj();
    if (R["tvt.templates2.issues_"])
      return R["tvt.templates2.issues_"]({ tagId: b, issues: c, Uf: d, Vf: e, mg: f, na: g, tabId: k, fg: l, scheme: m }, a);
    var n = "";
    if (c) for (var q = c.length, x = 0; x < q; x++) n += Fm(a, b, c[x], d, f, g, e, l, k, m);
    return P(n);
  },
  vm = function (a, b, c) {
    Vj();
    if (R["tvt.templates2.optimizationIssues_"]) return R["tvt.templates2.optimizationIssues_"]({ issues: b, na: c, scheme: void 0 }, a);
    var d = "";
    if (b.length) {
      d +=
        '<div class="section"><div class="section-header"><div class="section-header-title">Where to optimize</div></div><div class="section-content">';
      for (var e = Tj("Error", "Warning", "Suggestion", "Info", "Fine", "Debug"), f = e.length, g = 0; g < f; g++)
        for (var k = e[g], l = b, m = l.length, n = 0; n < m; n++) d += Fm(a, "Global", l[n], k, "", c, "__optimization__");
      d += "</div></div>";
    }
    return P(d);
  },
  um = function (a, b, c) {
    Vj();
    return R["tvt.templates2.status_"]
      ? R["tvt.templates2.status_"]({ status: b, Qj: c }, a)
      : P(
          Kj(b) && Kj(b.label)
            ? '<div class="tag-status img-' + T(b.label) + " " + T(c) + '" alt="' + T(b.value) + '"></div>'
            : '<div class="info-text"></div>'
        );
  },
  Gm = function (a, b, c, d) {
    Vj();
    if (R["tvt.templates2.htmlTable_"]) return R["tvt.templates2.htmlTable_"]({ id: b, value: c, Yj: d }, a);
    a = "";
    if (c) {
      a += '<table id="value-' + T(b) + '-formatted" class="popup-value-map">';
      b = c.length;
      for (var e = 0; e < b; e++) {
        var f = c[e];
        a +=
          '<tr><td class="popup-value-map-key">' +
          Q(f.key) +
          "</td>" +
          (d ? '<td class="popup-value-map-description">' + Q(f.description) + "</td>" : "") +
          '<td class="popup-value-map-value">' +
          (f.value ? Q(f.value) : " ") +
          "</td></tr>";
      }
      a += "</table>";
    }
    return P(a);
  },
  Fm = function (a, b, c, d, e, f, g, k, l, m) {
    Vj();
    if (R["tvt.templates2.issue_"])
      return R["tvt.templates2.issue_"]({ tagId: b, nb: c, Uf: d, Vf: g, mg: e, na: f, fg: k, tabId: l, scheme: m }, a);
    var n = "",
      q = S(c.type, "Error") || S(c.type, "Warning") || S(c.type, "Suggestion");
    if (
      !(
        c.deleted ||
        c.deduped ||
        S(c.type, "Hidden") ||
        S(c.valueFormat, "hidden") ||
        S(c.valueFormat, "entry") ||
        S(c.valueFormat, "option")
      ) &&
      ((!S(c.type, "Debug") && !S(c.type, "Fine")) || S(c.type, e) || (S(c.type, "Fine") && S(e, "Debug"))) &&
      S(c.type, d) &&
      (S(c.view, g) || q) &&
      (!c.ignored || Kj(f))
    )
      if (q) {
        n +=
          '<div id="' +
          T(c.id) +
          '" class="issue-list-opt ' +
          (c.ignored ? "ignore" + T(c.type) : "") +
          '"' +
          (c.ignored ? ' style="-webkit-filter: grayscale(100%);"' : "") +
          '><div class="ilo-status color' +
          T(c.type) +
          '"></div><div class="ilo-text ilo-' +
          T(c.type) +
          " ilo-format" +
          T(c.valueFormat) +
          '"' +
          (c.hint ? " data-tooltip='" + T(c.hint) + "'" : "") +
          ' data-view="' +
          T(c.view) +
          '"';
        if (!S(c.view, "")) {
          n += ' data-issue="' + T(k);
          m = c.otherRelatedIssues;
          for (var x = m.length, z = 0; z < x; z++) n += "," + T(m[z]);
          n += '"';
        }
        m = S(c.valueFormat, "button")
          ? '<div class="ilo-label">' +
            Q(c.label) +
            '</div><input type="button" value="' +
            T(c.text) +
            '" class="jfk-button jfk-button-standard format-button" id="' +
            T(b) +
            ":" +
            T(c.text) +
            '">'
          : S(c.valueFormat, "button_action") || S(c.valueFormat, "update_button")
          ? '<div class="ilo-label">' +
            Q(c.label) +
            '</div><input type="button" value="' +
            T(c.text) +
            '" class="jfk-button jfk-button-action format-button" id="' +
            T(b) +
            ":" +
            T(c.text) +
            '">'
          : Q(c.text);
        n +=
          ' data-type="' +
          T(c.type) +
          '">' +
          m +
          "</div>" +
          (S(c.valueFormat, "")
            ? '<div class="tag-show-option"><a class="tag-question-mark" title="More info" href="' +
              T(Sj(c.infoLink)) +
              '"> ? </a><div class="tag-ignore ' +
              (c.ignored ? "issue-ignored" : "") +
              '" id="ignore:' +
              T(b) +
              ":" +
              T(c.type) +
              ":" +
              T(c.text) +
              '" title="' +
              (c.ignored ? "Remove from ignore list." : "Add to ignore list") +
              '"></div></div>'
            : "") +
          "</div>";
      } else {
        n += '<div id="' + T(c.id) + '" class="idb-detail">';
        x = S(c.valueFormat, "map") || S(c.valueFormat, "esc_json");
        z =
          S(c.valueFormat, "snippet_html") || S(c.valueFormat, "snippet_js")
            ? '<div class="view-source-link"><span class="view-source" data-link="' +
              T(c.infoLink) +
              (l ? "&tabId=" + T(l) : "") +
              '">View Source</span></div>'
            : S(c.valueFormat, "json")
            ? "<br/>"
            : "";
        n +=
          (x || S(c.valueFormat, "link_expandable")
            ? '<div class="format-button-group"><div id="unformat-' +
              T(c.id) +
              '" class="goog-inline-block jfk-button jfk-button-standard jfk-button-narrow jfk-button-collapse-right jfk-button-checked unformat-button"><span class="unformat-button-image">Unformatted</span></div><div id="format-' +
              T(c.id) +
              '" class="goog-inline-block jfk-button jfk-button-standard jfk-button-narrow jfk-button-collapse-left format-button"><span class="format-button-image">Formatted</span></div></div>'
            : "") +
          "<div" +
          (c.hint ? " data-tooltip='" + T(c.hint) + '\' class="idb-help-text"' : ' class="idb-help-text idb-label"') +
          ">" +
          (S(c.valueFormat, "button") ||
          S(c.valueFormat, "button_action") ||
          S(c.valueFormat, "button_primary") ||
          S(c.valueFormat, "button_inactive") ||
          S(c.valueFormat, "update_button")
            ? Q(c.value) + " "
            : Q(c.text) + " ") +
          "</div>" +
          (S(c.type, "Group") || S(c.valueFormat, "group_status") || S(c.valueFormat, "value_status")
            ? '<div class="info-text' +
              (S(c.valueFormat, "group_status") || S(c.valueFormat, "value_status") ? " " + T(c.value) : "") +
              '"> ' +
              (S(c.valueFormat, "value_status") ? Q(c.label) : "") +
              "</div>"
            : "") +
          z;
        if (S(c.type, "Group")) {
          x = Tj("Info", "Fine", "Debug", "Group", "Hidden");
          z = x.length;
          for (var A = 0; A < z; A++) n += Em(a, b, c.relatedIssues, x[A], g, e, f, l, void 0, m);
        } else if (S(c.type, "Info") || S(c.type, "Fine") || S(c.type, "Debug")) {
          n +=
            '<div class="info-text' +
            (S(c.valueFormat, "link_expandable") || S(c.valueFormat, "snippet_html") || S(c.valueFormat, "snippet_js")
              ? "-expandable"
              : "") +
            " " +
            (x || S(c.valueFormat, "collection") ? "value-map" : "") +
            '">';
          if (S(c.valueFormat, "link") || S(c.valueFormat, "link_expandable"))
            n +=
              '<a href="' +
              T(Sj(c.label)) +
              '" id="value-' +
              T(c.id) +
              '-formatted" class="popup-value-link">' +
              (S(c.valueFormat, "link") ? Q(c.value) : Q(c.label)) +
              '</a><span id="value-' +
              T(c.id) +
              '-raw" style="display:none">' +
              Gm(a, c.id, c.value.Ng) +
              (Kj(c.value) && Kj(c.value.Jc) && 0 < c.value.Jc.length && Kj(c.value.Jc[0].key)
                ? '<div class="label-query">Query Info:</div>' + Gm(a, c.id, c.value.Jc, c.hasUrlParamLookupTable)
                : "") +
              "</span>";
          else if (x || S(c.valueFormat, "collection")) {
            if (((n += Gm(a, c.id, c.value)), x)) {
              n += '<span id="value-' + T(c.id) + '-raw" style="display:none">';
              m = c.value;
              x = m.length;
              for (z = 0; z < x; z++) (A = m[z]), (n += Q(A.key) + ":" + Q(A.value) + (z != c.value.length - 1 ? ", " : ""));
              n += "</span>";
            }
          } else if (S(c.valueFormat, "snippet_html") || S(c.valueFormat, "snippet_js") || S(c.valueFormat, "json")) {
            x = c.value;
            Vj();
            if (R["tvt.templates2.viewsource"]) m = R["tvt.templates2.viewsource"]({ code: x, scheme: m }, a);
            else {
              z = "";
              A = x.length;
              for (var C = 0; C < A; C++) {
                var O = x[C];
                z += '<div class="view-source-line ' + (O.type ? " " + T(O.type) : "") + '">';
                O = O.spans;
                for (var ha = O.length, za = 0; za < ha; za++) {
                  var ua = O[za];
                  z += ua.type
                    ? '<span class="' +
                      T(ua.type) +
                      '">' +
                      (S(ua.type, "html-attribute-url")
                        ? Q(ua.text[0]) +
                          '<a href="' +
                          (Kj(m) && 1 == ("" + Jj(Oa(ua.text))).indexOf("//")
                            ? T(Sj(m + ":" + ("" + Jj(Oa(ua.text))).substring(1, ("" + Jj(Oa(ua.text))).length - 1)))
                            : T(Sj(("" + Jj(Oa(ua.text))).substring(1, ("" + Jj(Oa(ua.text))).length - 1)))) +
                          '">' +
                          Q(ua.text) +
                          "</a>" +
                          Q(ua.text[ua.text.length - 1])
                        : Q(ua.text)) +
                      "</span>"
                    : Q(ua.text);
                }
                z += "</div>";
              }
              m = P(z);
            }
            n += m;
          } else if (S(c.valueFormat, "button") || S(c.valueFormat, "update_button"))
            n +=
              '<input type="button" value="' +
              T(c.text) +
              '" class="jfk-button jfk-button-standard format-button" id="' +
              T(b) +
              ":" +
              T(c.text) +
              '">';
          else if (S(c.valueFormat, "button_action"))
            n +=
              '<input type="button" value="' +
              T(c.text) +
              '" class="jfk-button jfk-button-standard jfk-button-action format-button" id="' +
              T(b) +
              ":" +
              T(c.text) +
              '">';
          else if (S(c.valueFormat, "button_primary"))
            n +=
              '<input type="button" value="' +
              T(c.text) +
              '" class="jfk-button jfk-button-standard jfk-button-primary format-button" id="' +
              T(b) +
              ":" +
              T(c.text) +
              '">';
          else if (S(c.valueFormat, "button_inactive"))
            n +=
              '<input type="button" value="' +
              T(c.text) +
              '" class="jfk-button jfk-button-standard format-button" id="' +
              T(b) +
              ":" +
              T(c.text) +
              '" disabled>';
          else if (S(c.valueFormat, "textfield"))
            n += '<input type="text" value="' + T(c.value) + '" class="ui-value-template" name="' + T(b) + ":" + T(c.text) + '">';
          else if (S(c.valueFormat, "checkbox"))
            n +=
              '<input type="checkbox" value="true" class="ui-checkbox-template" name="' +
              T(b) +
              ":" +
              T(c.text) +
              '"' +
              (S(c.value, "") ? "" : " checked") +
              ">";
          else if (S(c.valueFormat, "dropdown") || S(c.valueFormat, "dropdown_inactive")) {
            n +=
              '<select class="ui-dropdown-template" name="' +
              T(b) +
              ":" +
              T(c.text) +
              '"' +
              (S(c.valueFormat, "dropdown_inactive") ? " disabled" : "") +
              '><option value="">Please Select</option>';
            m = c.relatedIssues;
            x = m.length;
            for (z = 0; z < x; z++)
              (A = m[z]),
                (n += S(A.valueFormat, "option")
                  ? '<option value="' + T(A.text) + '"' + (S(c.label, A.text) ? " selected" : "") + ">" + Q(A.label) + "</option>"
                  : "");
            n += "</select>";
          } else
            n = S(c.valueFormat, "linked")
              ? n +
                (S(c.text, "Script source") || S(c.view, "IFrame")
                  ? '<a href="view-source:' + T(c.label) + '">' + Q(c.value) + "</a>"
                  : '<a href="' + T(Sj(c.infoLink)) + '">' + Q(c.value) + "</a>")
              : S(c.valueFormat, "link_expandable_with_path")
              ? n + ('<a href="' + T(Sj(c.infoLink)) + '">' + Q(c.label) + "</a>")
              : S(c.valueFormat, "copyable")
              ? n + ('<div class="text-ids">' + Q(c.value) + "</div>")
              : n + Q(c.value);
          n += "</div>";
        }
        n += "</div>";
      }
    n +=
      (S(c.type, "Group") && !(S(d, "Error") || S(d, "Warning") || S(d, "Suggestion"))) || S(c.type, "Bucket")
        ? ""
        : Em(a, b, c.relatedIssues, d, g, e, f, l, (q && Kj(k)) || Kj(c.id));
    return P(n);
  },
  Hm = function (a, b) {
    var c = a.Nd,
      d = a.isInternal;
    Vj();
    R["tvt.templates2.popup"]
      ? (b = R["tvt.templates2.popup"]({ Nd: c, isInternal: d }, b))
      : ((a = P),
        Vj(),
        (c =
          (R["tvt.templates2.header_"]
            ? R["tvt.templates2.header_"]({ Nd: c }, b)
            : P(
                '<div class="ta-header"><div class="ta-identification" id="logo"><span>Tag Assistant Legacy</span></div><div class="menu"><div role="button" id="menu-button" title="Menu" style="-webkit-user-select: none;" class="button-right goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-menu"></div></div><div id="menu-options"><ul><li id="fullscreen" title="Open popup in a separate tab." style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-fullscreen"></div>Show in separate tab</li><li id="dom-reload" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-reload"></div>Recheck DOM</li><li class="ga-debug-separator"></li><li id="enable-gta" style="-webkit-user-select: none;display:none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-pause"></div>Auto Validation OFF</li><li id="disable-gta" style="-webkit-user-select: none;display:none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-play"></div>Auto Validation ON</li><li id="ga-debug-toggle" style="-webkit-user-select:none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button ga-debug-icon ga-debug-off"></div><span class="ga-debug-text"></span></li><li class="ga-debug-separator"></li><li id="help-button" title="Help" style="-webkit-user-select: none;" class="help-button goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-help"></div>Need Help?</li>' +
                  (c
                    ? '<li id="file-a-ticket" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-email"></div>File a ticket</li>'
                    : "") +
                  '</ul></div><div role="button" id="settings" title="Options" style="-webkit-user-select: none;" class="button-right goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-settings"></div></div><div role="button" id="whitelist-domain" style="-webkit-user-select: none;display:none" class="button-right goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-star"></div></div><div role="button" title="Show ignored tags" style="-webkit-user-select: none;" class="button-right goog-inline-block jfk-button jfk-button-flat"><div id="tag-filter" class="goog-inline-block img-button" style="display:none;"></div></div></div></div>'
              )) +
          '<div id="content-container" class="detail-container"><div class="callout"><div class="callout__label">This extension is no longer supported. Use the new <a href="https://tagassistant.google.com" target="_blank">Tag Assistant</a> and its companion extension for troubleshooting.</div><div class="callout__action"><a href="https://support.google.com/tagassistant/answer/10042782" target="_blank">Learn more</a></div></div>' +
          (R["tvt.templates2.introduction_"]
            ? R["tvt.templates2.introduction_"](null, b)
            : P(
                '<div id="ta-introduction" class="popup-content" style="display:none"><h1> Welcome to Tag Assistant Legacy</h1><p>Tag Assistant helps to troubleshoot installation of various Google tags including Google Analytics, Google Tag Manager and more.</p><p>Just navigate to any page and Tag Assistant Legacy will tell you which tags are present, report any errors we find and suggest improvements that can be made to your implementation. Most Google tags are checked including Google Analytics, Google Ads Conversion Tracking, Google Tag Manager and more.</p><p>Learn about the new features in this <a href=\'https://www.youtube.com/watch?v=4AqanTBA9X4\' target="_blank">Video</a>.</p></div>'
              )) +
          (R["tvt.templates2.enabledMessage_"]
            ? R["tvt.templates2.enabledMessage_"](null, b)
            : P(
                '<div id="enabled-text" class="no-tag-found popup-content img-happy" style="display:none;"><div class="status-message"><div class="speech-bubble">Tag Assistant Legacy has been activated<br/>and will analyze all pages on the current tab.<br/>If you want to see issues for the current page, please hit reload.</div></div></div>'
              )) +
          (R["tvt.templates2.disabledMessage_"]
            ? R["tvt.templates2.disabledMessage_"](null, b)
            : P(
                '<div id="disabled-text" class="no-tag-found popup-content img-empty" style="display:none;"><div class="status-message"><div class="speech-bubble">Tag Assistant Legacy is currently<br/>inactive in this tab! Click "Enable" to turn it on!</div></div></div>'
              )) +
          (R["tvt.templates2.whitelisted_"]
            ? R["tvt.templates2.whitelisted_"](null, b)
            : P(
                '<div id="whitelisted-message" class="no-tag-found popup-content img-happy" style="display:none;"><div class="status-message"><div class="speech-bubble">Domain added to favorites.<br/>Pages from this domain will be automatically checked.<br/>If you want to see issues for the current page, please hit reload.</div></div></div>'
              )) +
          (R["tvt.templates2.unwhitelisted_"]
            ? R["tvt.templates2.unwhitelisted_"](null, b)
            : P(
                '<div id="unwhitelisted-message" class="no-tag-found popup-content img-empty" style="display:none;"><div class="status-message"><div class="speech-bubble">Domain removed from favorites.</div></div></div>'
              )) +
          (R["tvt.templates2.initializingPopup_"]
            ? R["tvt.templates2.initializingPopup_"](null, b)
            : P(
                '<div id="initializing-popup" class="no-tag-found popup-content img-empty" style="display:none;"><div class="status-message"><div class="speech-bubble">Please wait while popup is initialized.</div></div></div>'
              )) +
          (R["tvt.templates2.autoValidationTurnedOn_"]
            ? R["tvt.templates2.autoValidationTurnedOn_"](null, b)
            : P(
                '<div id="auto-validation-turned-on" class="no-tag-found popup-content img-empty" style="display:none;"><div class="status-message"><div class="speech-bubble">Auto Validation is now enabled. Tag Assistant Legacy will automatically analyze all the pages. If you want to see issues for the current page, please hit reload.</div></div></div>'
              )) +
          '<div id="tags-container" class="popup-content" style="display: none">' +
          (R["tvt.templates2.pageinfo_"]
            ? R["tvt.templates2.pageinfo_"](null, b)
            : P(
                '<div id="page-info-wrapper" class="slide-animation"><div class="tag-result-info"><div><div class="tags-result-title">Result of Tag Analysis</div><div class="tags-stats"><span id="tags-total" class="total"></span> In total<span id="errors-summary"><span id="errors-total" class="total"></span> Errors</span></div></div><div class="header-page-info"><div id="page-title" style="display:none"></div><div id="page-url" style="display:none"></div></div></div><div id="details" class="detail-container"></div><div id="permissions-check" class="section"><div class="section-header"><div class="section-header-title">Additional permissions requested</div></div><div class="permissions-check-line section-content"><div class="permissions-check-buttons"><div role="button" id="permissions-check-button" class="goog-inline-block jfk-button jfk-button-action">Allow</div><div role="button" id="permissions-refuse-button" class="goog-inline-block jfk-button jfk-button-standard">Later</div></div><div class="permissions-check-message">Check if other extensions are blocking tags</div></div></div></div>'
              )) +
          '<div id="issue-details" class="slide-animation"></div><div id="bucket-details" class="slide-animation"></div></div>' +
          (R["tvt.templates2.recordingContainer_"]
            ? R["tvt.templates2.recordingContainer_"](null, b)
            : P(
                '<div id="recording-container" style="display:none"><div class="navigator"><div id="back-to-taglist"></div><div class="recording-summary-title">Analysis Report</div></div><div class="popup-content"><div id="recording-enabled" style="display:none;"><div class="recording-enabled-msg">Tag Assistant Recordings feature allows you to record all the tags that fire on the webpages you visit, and then view them in one report. You can also view an in-depth analysis of your Google Analytics tags.<br> <br>Tag Assistant Legacy is now recording all the tags in the current tab, on all the pages you will visit. Once you are done, click the Stop Recording button to view the full report.<br> <br>The page you\'re on now hasn\'t been recorded. If you\'d like to record it, refresh the page.</div></div><div id="recording-active" style="display:none;"><div id="recording-active-msg" class="recording-active-msg">A recording is already active in a different tab. Please stop that recording first.<span id="recording-switch-tab">Take me to the tab</span><span id="recording-active-msg-cancel">Cancel</span></div></div><div id="no-recordings"><div>No pages were tracked during your latest recording session. If you would like to upload your own recording (.har) click "Upload Report", or create a new recording</div><div role="button" id="upload-har-report" class="goog-inline-block jfk-button jfk-button-action">Upload Report</div></div><div id="recording-result-info" class="recording-result-info" style="display:none;"><div><div id="recording-result-heading">Your latest recordings:</div><br/><span id="recorded-pages-count"></span> Pages tracked<br/><span id="recorded-tags-count"></span> Tags were fired</div><div class="recording-summary-action"><div role="button" id="show-full-report" class="goog-inline-block jfk-button jfk-button-action">Show Full Report</div><div role="button" id="stop-recording-show-full-report" class="goog-inline-block jfk-button jfk-button-action">End Recording and Show Full Report</div><div role="button" id="resume-recording-issues" class="goog-inline-block jfk-button jfk-button-standard">Resume Recording</div><div role="button" id="resume-recording-issues-other-tab" class="goog-inline-block jfk-button jfk-button-action">Resume Recording from here</div></div></div><div id="recording-follow-link-option"><input type="checkbox" id="recording-follow-link"/><label for="recording-follow-link">Follow recording links across tabs</label></div></div></div>'
              )) +
          "</div>"),
        Vj(),
        (b = R["tvt.templates2.footer_"]
          ? R["tvt.templates2.footer_"]({ isInternal: d }, b)
          : P(
              '<div id="footer">' +
                Am(b, d) +
                '<div class="goog-inline-block"><div role="button" id="turn-on-ta" title="Enable TA for this tab" style="-webkit-user-select:none;" class="goog-inline-block jfk-button jfk-button-action">Enable</div><div role="button" id="turn-off-ta" title="Disable TA for this tab." style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-standard">Disable</div></div><div id="recording-controls" class="goog-inline-block"><div role="button" id="start-recording-issues" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-action">Record</div><div role="button" id="cancel-recording-issues" title="Cancel recording issues" style="-webkit-user-select: none; display: none;" class="goog-inline-block jfk-button jfk-button-primary">Cancel Recording</div><div role="button" id="stop-recording-issues" title="Stop recording issues" style="-webkit-user-select: none; display: none;" class="goog-inline-block jfk-button jfk-button-primary">Stop Recording</div></div><div id="view-recording-summary" role="button" style="-webkit-user-select: none; display: none;" class="goog-inline-block jfk-button">VIEW RECORDINGS</div><div id="loading" class="goog-inline-block"></div></div>'
            )),
        (b = a(c + b)));
    return b;
  },
  Am = function (a, b) {
    Vj();
    if (R["tvt.templates2.megadash_"]) return R["tvt.templates2.megadash_"]({ isInternal: b }, a);
    var c = a && a.Kj;
    a = P;
    b
      ? (c
          ? ((b = String(c)),
            Zj.test(b) || (v("Bad value `%s` for |filterCspNonceValue", [b]), (b = "zSoyz")),
            (b = ' nonce="' + T(b) + '"'))
          : (b = ""),
        (b =
          '<img src="https://megadash.googleplex.com/tracking/2796016" alt="Megadash Usage Tracking Pixel, see http://goto/megadash-tracking" height="1" width="1"/><script ng-if="isInternal" defer src="https://pulse-tracker.corp.google.com/tracking_script.js" data-tool-id="2796016"' +
          b +
          ">\x3c/script>"))
      : (b = "");
    return a(b);
  },
  Im = function (a, b) {
    return R["tvt.templates2.reload"] ? R["tvt.templates2.reload"](a, b) : P("Extension outdated, requires reload.");
  };
var Jm = document;
var Km = function (a, b, c, d, e, f, g, k) {
  am.call(this, a, b, c, d, void 0, g, k);
  this.issueClass = 1;
};
t(Km, am);
var Lm = function (a, b, c, d, e, f) {
    return new Km(a, b, c, void 0, void 0, d, e, f);
  },
  Mm = r(Lm, "Fine", null),
  Nm = r(Lm, "Info", null),
  Om = r(Lm, "Suggestion", null),
  Pm = km(
    Om("Tag is included in an iframe", function () {
      return self !== top;
    }),
    "Code Snippet"
  ),
  Qm = [
    km(
      Nm(
        "IFrame",
        function () {
          return self.location.href;
        },
        "linked"
      ),
      "IFrame"
    )
  ];
Pm.rb = Qm;
Om("Tag is included in an external script file", function (a) {
  return a.externalScript;
});
km(
  Mm(
    "Script source",
    function (a) {
      return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
    },
    "linked"
  ),
  "Code Snippet"
);
km(
  im(
    em("No HTTP response detected"),
    "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
  ),
  ""
).infoLink = "https://support.google.com/tagassistant/answer/3059154#http_response";
var Rm = function (a, b, c, d, e, f, g, k) {
  am.call(this, a, b, d, e, void 0, g, k);
  this.issueClass = 2;
};
t(Rm, am);
var Sm = function (a, b, c, d, e, f) {
    return new Rm(a, b, void 0, c, void 0, d, e, f);
  },
  Tm = r(Sm, "Debug", null),
  Um = r(Sm, "Error", null),
  Vm = r(Sm, "Hidden", null),
  Wm = r(Sm, "Info", null),
  Xm = r(Sm, "Suggestion", null),
  Ym = im(
    Um("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  );
km(
  im(
    gm("Non-standard implementation"),
    "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
  ),
  ""
);
var Zm = im(
    Um(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  an = im(
    Xm("Using non-secure code on secure page", function (a) {
      var b = $m(a),
        c = a.documentUri;
      c || ((c = $e(a.documentUrl)), (a.documentUri = c));
      return "http" == b.ma && "https" == c.ma ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  bn = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !Za(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  };
(function (a, b) {
  return km(
    Wm(
      "URL",
      function (c) {
        try {
          var d = $m(c).L.Ga();
          if ((a && !bn(d, a)) || (b && bn(d, b))) return !1;
        } catch (e) {}
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url;
      },
      "link_expandable",
      [
        hm(
          Wm("Post Data", function (c) {
            return c.postData;
          }),
          "value"
        ),
        an,
        jm(
          im(
            em("URL Encoding Error", function (c) {
              return Rb(c.label, "&amp;");
            }),
            'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
          )
        ),
        Zm,
        Ym,
        Um("Error while sending request: %s", function (c) {
          return void 0 !== c.error ? c.error : !1;
        }),
        Vm("Redirected to", function (c) {
          return c.redirectUrl;
        }),
        Vm("redirectedFrom", function (c) {
          return c.redirectedFrom;
        }),
        Tm("requestId", function (c) {
          return c.requestId;
        }),
        Um("URL is not parsable.", function (c) {
          if (0 < c.url.indexOf("tiba=")) return !1;
          try {
            return !$e(c.url).L.Ga();
          } catch (d) {
            return !0;
          }
        })
      ]
    ),
    "URLs"
  );
})();
var $m = function (a) {
  var b = a.uri;
  if (!b) {
    b = $e(encodeURI(a.url));
    if (a.postData)
      try {
        Re(b, a.postData, !0);
      } catch (c) {}
    a.uri = b;
  }
  return b;
};
var cn = function () {
    this.ff = [];
    this.Wd = {};
  },
  dn =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  en = {
    "ad.doubleclick.net": !0,
    "apis.google.com": !0,
    "csi.gstatic.com": !0,
    "pagead.googlesyndication.com": !0,
    "pagead2.googlesyndication.com": !0,
    "stats.g.doubleclick.net": !0,
    "survey.g.doubleclick.net": !0,
    "www.google-analytics.com": !0,
    "www.googleadservices.com": !0
  },
  jn = hm(
    fm("Script", function (a) {
      if (null == this.Ya) this.Ya = 0;
      else if ((this.Ya++, this.Ya == Jm.scripts.length)) return (this.Ya = null), !1;
      var b = Jm.scripts[this.Ya];
      this.infoLink = b.src;
      if ((a = void 0 !== b.src && "" != b.src && !ue(a.relatedIssues, b.src))) {
        a = mf(cn);
        b = b.src;
        var c;
        (c = fn(b)) || ((c = $e(b)), (c = !!en[c.aa]));
        a = !(c || gn(b) || hn(a, b));
      }
      return a;
    }),
    "link_expandable_with_path"
  ),
  kn = [
    gm("Found <script> tag with empty src attribute.", function (a) {
      return a.label == Jm.location.href;
    })
  ];
jn.rb = kn;
var ln = function (a) {
    var b = mf(cn);
    if (!(a in b.Wd)) {
      var c = Za(b.ff, function (d) {
        return d.ak() == a;
      });
      b.Wd[a] = c ? c.Lj() : {};
    }
    return b.Wd[a];
  },
  fn = function (a) {
    return dn.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  gn = function (a) {
    return !(
      !Ld("ManualScriptParsing") ||
      !(Ld("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  hn = function (a, b) {
    return a.ff.some(function (c) {
      return c.Of && c.isActive()
        ? c.Of.some(function (d) {
            d = new RegExp(d);
            d = b ? d.test.call(d, b) : void 0;
            return d;
          })
        : !1;
    });
  };
var mn = function (a, b) {
    this.text = a;
    this.type = b;
  },
  nn = function (a, b) {
    this.spans = a;
    this.type = b;
  },
  on =
    "break case catch continue debugger default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with false null undefined true abstract boolean byte char const double final float goto int long native short synchronized throws transient volatile class enum export extends import super implements interface let package private protected public static yield".split(
      " "
    ),
  rn = {
    type: "html-tag",
    open: /^<\/?([-_a-zA-Z0-9]+)/,
    close: /^(\/?)>/,
    Me: function (a, b) {
      a.Xc = b[1].toUpperCase();
      return !0;
    },
    Uc: function (a, b) {
      "" == b[1] &&
        ("SCRIPT" == a.Xc
          ? ((a.Aa = "js-code"), (a.pb = null), (a.Sb = pn))
          : "STYLE" == a.Xc && ((a.Aa = "css-code"), (a.pb = null), (a.Sb = qn)));
      return !0;
    }
  },
  sn = [
    { type: "html-comment", open: "\x3c!--", close: "--\x3e" },
    { type: "html-cdata", open: "<![CDATA[", close: "]]\x3e" },
    { type: "html-doctype", open: "<!", close: ">" },
    rn,
    { type: "html-attribute-url", open: /^"(https?|\/\/)/, close: '"', escape: "\\", wa: rn },
    { type: "html-attribute-url", open: /^'(https?|\/\/)/, close: "'", escape: "\\", wa: rn },
    { type: "html-attribute-value", open: '"', close: '"', escape: "\\", wa: rn },
    { type: "html-attribute-value", open: "'", close: "'", escape: "\\", wa: rn },
    { type: "html-attribute-name", open: /(^[-_a-zA-Z0-9]+)/, close: "=", wa: rn }
  ],
  pn = [
    { type: "js-comment", open: "//", gb: !0 },
    { type: "js-comment", open: "/*", close: "*/" },
    { type: "js-string", open: '"', close: '"', escape: "\\", gb: !0 },
    { type: "js-regex", open: "/", close: "/", escape: "\\", gb: !0 },
    { open: /^\.[a-zA-Z_][a-zA-Z_0-9]*/, Ma: !0 },
    {
      type: "js-keyword",
      open: /^[a-zA-Z_][a-zA-Z_0-9]*/,
      Me: function (a, b) {
        return 0 <= on.indexOf(b[0]);
      },
      Ma: !0
    },
    { open: /^[a-zA-Z_][a-zA-Z_0-9.]*/, Ma: !0 },
    { type: "js-number", open: /^[+-]?[0-9.]+/, Ma: !0 },
    { type: "js-string", open: "'", close: "'", escape: "\\", gb: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/script/,
      close: />/,
      Uc: function (a) {
        a.Aa = null;
        a.pb = null;
        a.Sb = sn;
        return !0;
      }
    }
  ],
  tn = { open: "{", close: "}" },
  un = { open: ":", close: ";", wa: tn },
  qn = [
    { type: "css-comment", open: "\x3c!--", close: ">" },
    { type: "css-comment", open: "/*", close: "*/" },
    { type: "css-string", open: '"', close: '"', escape: "\\", gb: !0 },
    { type: "css-number", open: /^[+-]?[0-9.]+[a-zA-Z]*/, Ma: !0, wa: un },
    { type: "css-color", open: /^#[0-9a-zA-Z]{3}[0-9a-zA-Z]{0,3}/, Ma: !0, wa: un },
    tn,
    un,
    { type: "css-name", open: /^[-.#_a-zA-Z0-9]+/, Ma: !0, wa: tn },
    { type: "css-attribute-value", open: /^[-a-zA-Z_0-9]+/, Ma: !0, wa: un },
    { type: "css-string", open: "'", close: "'", escape: "\\", gb: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/style/,
      close: />/,
      Uc: function (a) {
        a.Sb = sn;
        a.Aa = null;
        a.pb = null;
        return !0;
      }
    }
  ],
  wn = function (a, b) {
    var c = { Sb: b ? pn : sn, Xc: null, pb: null, Aa: b ? "js-code" : null },
      d = [],
      e = [null],
      f = [null],
      g = void 0;
    b || (a = Tc(a));
    a.split("\n").forEach(function (k) {
      var l = [],
        m = 0;
      c.pb = c.Aa;
      for (var n = 0, q = k.length; n < q; n += x ? 0 : 1) {
        var x = !1;
        if (!g || g.escape != k.charAt(n)) {
          if (g) {
            var z = g.close ? vn(c, g.close, k, n, g.Uc) : 0;
            z && ((n += z), l.push(new mn(k.substring(m, n), g.type || c.Aa)), (m = n), e.pop(), f.pop(), (g = f[f.length - 1]), (x = !0));
          }
          for (var A = 0, C; !x && (C = c.Sb[A]); A++)
            C.wa == g &&
              (z = vn(c, C.open, k, n, C.Me)) &&
              (n > m && C.type != e[e.length - 1] && (l.push(new mn(k.substring(m, n), e[e.length - 1] || c.Aa)), (m = n)),
              (n += z),
              C.Ma ? (l.push(new mn(k.substring(m, n), C.type || c.Aa)), (m = n)) : (e.push(C.type), f.push(C), (g = C)),
              (x = !0));
        }
      }
      m < q && l.push(new mn(k.substring(m, q), e[e.length - 1] || c.Aa));
      d.push(new nn(l, c.pb));
      g && g.gb && (e.pop(), f.pop(), (g = f[f.length - 1]));
    });
    return d;
  },
  vn = function (a, b, c, d, e) {
    var f;
    if (b instanceof RegExp) {
      if ((f = b.exec(c.substring(d))) && (!e || e(a, f))) return f[0].length;
    } else if (c.substring(d, d + b.length) == b) return b.length;
    return 0;
  };
var xn = /\$\{[-_ a-zA-Z0-9]*\}/g,
  yn = {
    "not-working": "Critical Issues",
    "working-with-warnings": "Minor Issues",
    "working-with-suggestions": "Suggestions",
    working: "Working"
  },
  zn = rb({ "Critical Issues": "Error", "Minor Issues": "Warning", Suggestions: "Suggestion", Working: "Tag" }),
  An = function (a) {
    return { label: a, value: yn[a] || "Details" };
  },
  Bn = nb({ yh: "not-working", mj: "working-with-suggestions", Fj: "working-with-warnings", Ij: "working" }).map(An),
  Cn = function (a, b) {
    for (var c = [], d = 0, e; (e = a[d]); d++) {
      var f = Nd("ShowIgnoredIssues");
      "Bucket" == e.type || e.deleted || (-1 < b.indexOf(e.type) && (!e.ignored || f) && c.push(e), (c = c.concat(Cn(e.relatedIssues, b))));
    }
    return c;
  },
  Dn = function (a) {
    for (var b = 0, c; (c = a[b]); b++) {
      var d = c.relatedIssues.length + "";
      c.label = c.label.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace(xn, "");
      c.relatedIssues && Dn(c.relatedIssues);
    }
  },
  En = function (a) {
    for (var b = 0, c; (c = a[b]); b++) (c.buckets = se(c.relatedIssues)), En(c.relatedIssues);
  },
  Fn = function (a) {
    for (var b = 0, c; (c = a[b]); b++) c.buckets && (Ge(c.buckets), (c.buckets = [])), (c.status = void 0);
    Ge(a);
  },
  Hn = function (a, b) {
    for (var c = 0, d; (d = b[c]); c++) (d.value = Gn(a, d)), (d.status = An(d.value + "")), d.relatedIssues && Hn(a, d.relatedIssues);
  },
  In = function (a, b) {
    var c = Cn(a, b).map(function (d) {
      return zn[d.type];
    });
    return Bn.filter(function (d) {
      return -1 < c.indexOf(d.value);
    });
  },
  lb = function (a) {
    var b = !Nd("ShowIgnoredIssues"),
      c = De;
    a = a.length ? a : [];
    for (var d = [], e, f = 0; (e = a[f]); f++)
      (b && e.ignored) || e.deleted || e.deduped || "Hidden" == e.type || ((e = new ee(ge, e)), d.push(e));
    return c(d);
  },
  Gn = function (a, b) {
    "Tag" == b.type && 0 == b.text.indexOf(b.category) && (b.tagId = b.text.substring(b.category.length + 1));
    if ("Tag" == b.type || "group_status" == b.valueFormat || "value_status" == b.valueFormat) {
      var c = !Nd("ShowIgnoredIssues");
      return "unchecked" == b.valueFormat ? "unchecked" : Jn(b.relatedIssues, c);
    }
    if ("update_button" == b.valueFormat || "elapsed_time" == b.valueFormat) {
      if ("" != b.label && !/[^0-9]/.test(b.label))
        try {
          return "Last checked " + ff(parseInt(b.label, 10));
        } catch (k) {}
    } else if ("string" === typeof b.label) {
      if ("collection" == b.valueFormat) {
        var d = [];
        b.relatedIssues.forEach(function (k) {
          "entry" == k.valueFormat && d.push({ key: k.text, value: k.label });
        });
        return d;
      }
      if ("link_expandable_with_path" == b.valueFormat) return b.label.split("/").pop();
      if ("link_expandable" == b.valueFormat)
        try {
          var e = $e(b.label);
          a = [];
          var f = [];
          e.aa && a.push({ key: "Hostname", value: e.aa });
          e.ma && a.push({ key: "Protocol", value: e.ma });
          a.push({ key: "Path", value: e.X });
          e.Fa && a.push({ key: "Hash", value: e.Fa });
          var g = (c = ye(b).category) ? ln(c) : {};
          b.hasUrlParamLookupTable = !!Object.keys(g).length;
          e.L.Ga().forEach(function (k) {
            var l = "";
            try {
              l = g[k].description || "";
            } catch (m) {}
            f.push({ key: k, value: e.L.get(k), description: l });
          });
          return { Ng: a, Jc: f };
        } catch (k) {
          console.error("Cannot parse URL for issue: %o", b, k);
        }
      else {
        if ("snippet_html" == b.valueFormat) return wn(b.label, !1);
        if ("snippet_js" == b.valueFormat) return wn(b.label, !0);
        if ("map" == b.valueFormat)
          return (rd(b.label, [";"]) || []).map(function (k) {
            var l = k.split("=");
            k = l.shift();
            l = l.join("=");
            try {
              var m = decodeURIComponent(l);
            } catch (n) {
              m = l;
            }
            return { key: k, value: m };
          });
        if ("esc_json" == b.valueFormat) return sd(unescape(b.label));
        if ("json" == b.valueFormat) return wn(ud(b.label), !0);
        if ("link" == b.valueFormat) return hf(a, b.label);
      }
    }
    return b.label;
  },
  Jn = function (a, b) {
    return Be(a, "Error", !!b)
      ? "not-working"
      : Be(a, "Warning", !!b)
      ? "working-with-warnings"
      : Be(a, "Suggestion", !!b)
      ? "working-with-suggestions"
      : "working";
  },
  Kn = function () {
    var a = Cn(E.parent.issues, ce).map(function (b) {
      return zn[b.type];
    });
    return Bn.filter(function (b) {
      return -1 < a.indexOf(b.value);
    });
  },
  Ln = function (a, b) {
    En(b);
    Dn(b);
    Hn(a, b);
  };
var Mn = function (a) {
  this.index = a ? a.index : -1;
  this.activeChildId = a ? a.activeChildId : void 0;
  this.parent = a ? a.parent : null;
  this.issues = a ? a.issues : [];
};
var Nn, On, Pn, Qn, Rn, Sn, Tn, Un, Vn;
he["Remarketing Validation"] = 2;
var Wn = [],
  V = null,
  Xn = {},
  Yn = null,
  Zn = null,
  $n = {},
  ao = null,
  bo = null,
  F = new (function () {
    this.issues = [];
    this.lastUpdated = -1;
    this.recordings = new Cf();
    this.requiresReload = !1;
    this.state = new jf();
    this.tabId = -2;
    this.domain = this.url = this.title = "";
    this.popupState = "Stale";
    this.recording = "disabled";
    this.recordingEnabledTab = "";
  })(),
  E = new Mn(),
  W = new jf(),
  co = new Kl(),
  eo =
    "Google Analytics;Google Trusted Stores;Google Ads Conversion Tracking/Remarketing;Floodlight;Campaign Manager/Google Ad Manager;Google Publisher Tag".split(
      ";"
    ),
  fo = /.*\|ignore:([^:]*):/,
  go = /tabId=([0-9]*)&/i,
  ho = function () {
    for (var a = eg("ilo-text"), b, c = 0; (b = a[c]); c++) 20 > b.clientHeight && H(b, "adjust-top");
  },
  io = function (a, b) {
    var c = J("page-info-wrapper");
    c && (a.length ? Jf(c, ["notag", "single-issue"]) : ((a = ["notag"]), 1 == b.length && a.push("single-issue"), Hf(c, a)));
  },
  ko = function (a) {
    a = dg(document, "A", null, a);
    for (var b, c = 0; (b = a[c]); c++)
      V.listen(
        b,
        "click",
        r(function (d, e) {
          e.preventDefault();
          jo("options", "help-link-clicked");
          chrome.tabs.create({ url: d });
        }, b.href)
      );
  },
  lo = function () {
    V && V.removeAll();
    Wn.forEach(function (a) {
      If(a.g(), "decorated");
      a.Ba();
    });
    Wn = [];
  },
  mo = function (a) {
    return $a(a, function (b) {
      return !Gf(b, "hide-tab");
    });
  },
  no = function (a, b, c) {
    var d = eg("idb-view-text", a),
      e = mo(d);
    b = (0 <= e ? e : 0) + b;
    e = !1;
    for (var f; b < d.length - 1 && !e; ) {
      e = !0;
      f = 0 < b ? 35 : 0;
      for (var g, k = 0; (g = d[k]); k++) {
        var l = Gf(g, "idb-view-selected");
        l = c && l;
        k < b && l && (b = k);
        if (k >= b && 430 > f) {
          If(d[k], "hide-tab");
          var m = g;
          var n = rh(m, "marginLeft");
          var q = rh(m, "marginRight");
          var x = rh(m, "marginTop");
          m = rh(m, "marginBottom");
          n = new mh(parseFloat(x), parseFloat(q), parseFloat(m), parseFloat(n));
          g = Dh(g);
          f += g.width + n.left + n.right;
        }
        if (k < b || 430 < f)
          if (l) {
            b++;
            e = !1;
            break;
          } else H(d[k], "hide-tab");
      }
    }
    c = fg("view-right", a);
    Fh(c, 430 < f);
    a = fg("view-left", a);
    Fh(a, 0 < b);
  },
  qo = function () {
    for (var a = eg("view-header"), b, c = 0; (b = a[c]); c++) {
      var d = b.innerText;
      V.listen(b, "click", r(oo, d));
      po(b, d);
    }
  },
  oo = function (a) {
    W.selectedView = a;
    ro(a);
  },
  po = function (a, b) {
    Wa(a.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('[data-view="' + b + '"]'), function (c) {
      var d = "view-header-" + c.getAttribute("data-type"),
        e = c.getAttribute("data-issue").split(",").map(J);
      V.listen(c.parentNode, "mouseover", function () {
        e.forEach(function (f) {
          f && H(f, d);
        });
        H(a, d);
      });
      V.listen(a, "mouseout", function () {
        e.forEach(function (f) {
          f && If(f, d);
        });
        If(a, d);
      });
    });
  },
  to = function () {
    var a = J("nav-back"),
      b = J("nav-close");
    [a, b].forEach(function (d) {
      d && V.listen(d, "click", so);
    });
    a = eg("iob-option");
    for (var c = 0; (b = a[c]); c++)
      V.listen(b, "click", function (d) {
        var e = d.currentTarget.id.split("-");
        2 < e.length &&
          ((d = e.pop()),
          (e = e.pop()),
          (d = E.issues[parseInt(e, 10)].buckets[d]),
          (E.parent = new Mn(E)),
          (E.parent.index = 0),
          (E.issues = d.relatedIssues),
          (e = E.issues[E.parent.index].id),
          (E.parent.activeChildId = e),
          W.ids.push(d.id),
          W.ids.push(e),
          ro());
      });
  },
  wo = function () {
    [J("nav-up"), J("nav-left")].forEach(function (a) {
      a &&
        uo(a, function () {
          vo(-1);
        });
    });
    [J("nav-down"), J("nav-right")].forEach(function (a) {
      a &&
        uo(a, function () {
          vo(1);
        });
    });
  },
  xo = function () {
    var a = fg("view-source");
    a &&
      V.listen(a, "click", function (b) {
        var c = b.target.dataset.link;
        chrome.tabs.query({ url: chrome.extension.getURL(c) }, function (d) {
          d.length ? (chrome.tabs.update(d[0].id, { active: !0 }), p.close()) : chrome.tabs.create({ url: c });
        });
      });
  },
  yo = function () {
    var a = fg("ga-debug-icon"),
      b = fg("ga-debug-text");
    Jf(a, ["ga-debug-auto", "ga-debug-ext", "ga-debug-off", "ga-debug-on"]);
    var c = Ld("gaDebug");
    switch (c) {
      case "auto":
        H(a, "ga-debug-auto");
        a.title = "GA Debug Mode is Enabled for whitelisted sites.";
        b.innerText = "GA Debug AUTO";
        break;
      case "on":
        H(a, "ga-debug-on");
        a.title = "GA Debug Mode is enabled.";
        b.innerText = "GA Debug ON";
        break;
      default:
        H(a, "ga-debug-off"), (a.title = "GA Debug Mode is disabled."), (b.innerText = "GA Debug OFF");
    }
    var d = le(),
      e;
    if ((e = d.length)) e = ne(d, ["GA Debug Detected"]).length;
    !e ||
      (c && "off" != c) ||
      (H(a, "ga-debug-ext"), (a.title = "GA Debug Mode is Enabled by an external plugin."), (b.innerText = "GA Debug EXTERNAL"));
  },
  zo = function (a) {
    var b = fg("view-left", a);
    X(
      b,
      function () {
        no(a, -1, !1);
      },
      !0
    );
    b = fg("view-right", a);
    X(
      b,
      function () {
        no(a, 1, !1);
      },
      !0
    );
  },
  Do = function (a) {
    for (var b = eg("text-ids"), c, d = 0; (c = b[d]); d++)
      V.listen(c, "click", function (f) {
        var g = mg("INPUT", {
          type: "text",
          value: f.target.textContent,
          readOnly: !0,
          style: Qc("width:%sem;", parseInt(0.8 * f.target.innerText.length, 10))
        });
        f.target.parentElement.appendChild(g);
        f.target.hidden = !0;
        g.onblur ||
          V.listen(
            g,
            "blur",
            function (k) {
              k.target.hidden = !0;
              k.target.previousSibling.hidden = !1;
            },
            !1
          );
      });
    b = dg(document, "INPUT", "ui-value-template", a);
    d = {};
    for (var e = 0; (c = b[e]); d = { Hc: d.Hc }, e++)
      (d.Hc = 0),
        V.listen(
          c,
          "input",
          (function (f) {
            return function (g) {
              clearTimeout(f.Hc);
              f.Hc = setTimeout(function () {
                Y("Set", g.target.name.substring(g.target.name.indexOf("-;-;") + 1), g.target.value);
              }, 1e3);
            };
          })(d)
        );
    ko(a);
    b = dg(document, "SELECT", "ui-dropdown-template", a);
    for (d = 0; (c = b[d]); d++)
      V.listen(c, "change", function (f) {
        f = f.target || f.srcElement;
        Y("Set", f.name.substring(f.name.indexOf("-;-;") + 1), f.value);
      });
    b = dg(document, "INPUT", "ui-checkbox-template", a);
    for (d = 0; (c = b[d]); d++)
      V.listen(c, "click", function (f) {
        Y("Set", f.target.name.substring(f.target.name.indexOf("-;-;") + 1), f.target.checked ? f.target.value : "");
      });
    a = dg(document, "INPUT", "format-button", a);
    for (b = 0; (c = a[b]); b++)
      V.listen(c, "click", function (f) {
        var g = f.target.id;
        Ao(g);
        W.buttonAction = f.target.value;
        Y("Action", g);
        f.target.disabled = "true";
        Bo("dom-reload", !0);
      });
    a = eg("format-button");
    for (b = 0; (c = a[b]); b++) X(c, Co, !0);
    a = eg("unformat-button");
    for (b = 0; (c = a[b]); b++) X(c, Co, !0);
  },
  Ao = function (a) {
    var b = a.split(":");
    2 == b.length
      ? ((a = me(F.issues, b[0])),
        Ya(a, function (c) {
          (c = ve(c, b[1])) && "string" === typeof c.view && c.view != Nn && ro(c.view);
          return !!c;
        }))
      : v("Unexpected action ID format.");
  },
  Co = function (a) {
    var b = a.target.g().id.split("-"),
      c = "unformat" == b.shift();
    b = b.join("-");
    var d = (c ? "" : "un") + "format-" + b;
    Z("value-" + b + "-formatted", c);
    Z("value-" + b + "-raw", !c);
    H(a.target.g(), "jfk-button-checked");
    (a = J(d)) && If(a, "jfk-button-checked");
  },
  Io = function (a) {
    ko(a);
    Eo();
    a = eg("tag-open");
    for (var b, c = 0; (b = a[c]); c++) V.listen(b, "click", r(Fo, b));
    Go();
    Ho();
  },
  Fo = function (a) {
    E.parent.index = parseInt(a.id.split("-").pop(), 10);
    a = E.issues[E.parent.index].id;
    E.parent.activeChildId = a;
    W.ids.push(a);
    ro();
  },
  Eo = function () {
    for (var a = document.getElementsByClassName("section-header"), b, c = 0; (b = a[c]); c++) {
      var d = b.getElementsByClassName("section-header-title");
      0 < d.length && V.listen(d[0], "click", r(Jo, d[0], b.nextSibling));
    }
  },
  Jo = function (a, b) {
    Lf(a, "section-content-hidden");
    b && Lf(b, "section-content-hidden");
  },
  Qo = function () {
    var a = J("menu-button"),
      b = null;
    if (a) {
      V.listen(a, "click", function (d) {
        if (!b) {
          var e = J("menu-options");
          b = new ej(e);
          b.T(!1);
          b.setPosition(new Vh(a, 1));
          V.listen(e, "click", function () {
            b.T(!1);
          });
        }
        b.T(!0);
        d.preventDefault();
      });
      X("community-link", function () {
        jo("options", "community-link-clicked");
        chrome.tabs.create({ url: "https://plus.google.com/u/1/communities/105448214237192581344" });
      });
      X("fullscreen", function () {
        var d = chrome.extension.getURL("popup2.html") + "?" + Vn.getQuery() + "&fullscreen=true";
        window.open(d, "TagAssistant_TAB_" + Tn);
      });
      X("dom-reload", function () {
        jo("options", "dom-reload-clicked");
        Ko();
        Y("DomReload");
      });
      var c = J("ga-debug-toggle");
      c &&
        uo(c, function (d) {
          d.stopPropagation();
          Yd();
          yo();
        });
      X("enable-gta", Lo);
      X("disable-gta", Mo);
      No();
    }
    J("whitelist-domain") &&
      X("whitelist-domain", function () {
        Pn
          ? (Y("RemoveFromWhitelist"), (Pn = !1), Oo("RemovedFromWhitelist"), jo("options", "dom-reload-clicked"))
          : (Y("WhiteListDomain"), (Pn = !0), Oo("AddedToWhitelist"), jo("activation", "favorite-domain-added"));
      });
    Po();
  },
  Xo = function () {
    var a = J("start-recording-issues");
    new Cl(
      a,
      "Record tags while browsing through your website to get an in-depth analysis of your tag implementation as well as validate your Google Analytics configuration",
      null,
      2
    );
    X("turn-on-ta", Ro);
    X("turn-off-ta", So);
    X("start-recording-issues", r(To, !1));
    X("stop-recording-issues", Uo);
    X("cancel-recording-issues", Vo);
    X("view-recording-summary", Wo);
  },
  Ro = function () {
    u("Disabled" == Qn || "Stale" == Qn);
    jo("activation", "popup-state-enabled");
    Qn = "Enabled";
    Y("TurnOn");
    Oo("Enabled");
  },
  So = function () {
    u("Disabled" != Qn);
    jo("activation", "popup-state-disabled");
    Qn = "Disabled";
    Y("TurnOff");
    Oo("Disabled");
  },
  Lo = function () {
    Jd("ManualChecks", !1);
    Oo("SwitchedToAutomaticValication");
    jo("activation", "auto-validation-enabled");
  },
  Mo = function () {
    Jd("ManualChecks", !0, function () {
      Y("DisableAutomaticValidation");
      Yo();
    });
    jo("activation", "auto-validation-disabled");
  },
  $o = function () {
    var a = Qn,
      b = Pn,
      c = Nd("ManualChecks"),
      d = Zo() && Tn == Sn,
      e = "Disabled" != a && "Stale" != a,
      f = !e;
    Z("enable-gta", c);
    Z("disable-gta", !c);
    Z("turn-on-ta", !b && f && c);
    Z("turn-off-ta", !d && e && c);
    Z("start-recording-issues", !d);
    Z("recording-follow-link-option", d);
    Z("stop-recording-issues", "recording" == Rn && d);
    Z("cancel-recording-issues", "enabled" == Rn && d);
    b = J("whitelist-domain");
    On || "Stale" == a
      ? Fh(b, !1)
      : (Fh(b, !0), (b.firstChild.title = Pn ? "Remove from favorites" : "Add to favorites"), Kf(b.firstElementChild, "img-starred", Pn));
    b = Pn;
    c = ["jfk-button-standard", "jfk-button-action"];
    d = J("turn-on-ta");
    e = J("resume-recording-issues-other-tab");
    Kf(d, c[0], b);
    Kf(d, c[1], !b);
    Kf(e, c[0], b);
    Kf(e, c[1], !b);
    Bo("dom-reload", "Capturing" != a);
  },
  Go = function () {
    for (var a = eg("tag-ignore"), b, c = 0; (b = a[c]); c++)
      V.listen(b, "click", function (d) {
        var e = F.domain;
        e && (zd[e] = !0);
        e = F.domain + "|" + d.target.id;
        W.action = d.target;
        E.parent && -1 < E.parent.index && Y("Save");
        ap(e, d.target);
        Ko();
      });
  },
  Ho = function () {
    for (var a = eg("tag-popout"), b, c = 0; (b = a[c]); c++)
      V.listen(b, "click", function () {
        var d = b.getAttribute("data-tag-id"),
          e = F.tabId,
          f = new Oe(chrome.extension.getURL("templates/gtar.html"));
        G(f);
        f.L.set("tagId", d);
        G(f);
        f.L.set("tabId", e);
        window.open(f.toString(), "TagAssistant_TAB_" + e);
      });
  },
  cp = function () {
    X("welcome-screen-done-button", function () {
      bp();
      Dd();
    });
  },
  fp = function () {
    X("resume-recording-issues", r(To, !0));
    X("show-full-report", function () {
      dp();
    });
    X("upload-har-report", function () {
      dp(!0);
    });
    X("stop-recording-show-full-report", function () {
      Uo();
      dp();
    });
    X("resume-recording-issues-other-tab", r(To, !0));
    var a = J("recording-follow-link");
    V.listen(a, "click", function () {
      Jd("FollowLinks", a.checked);
    });
    ep("back-to-taglist");
    ep("recording-active-msg-cancel");
    var b = J("recording-switch-tab");
    uo(b, function () {
      chrome.tabs.update(parseInt(Sn, 10), { active: !0 });
    });
  },
  Wo = function () {
    gp();
    jo("recordings", "view-recording");
  },
  gp = function () {
    var a = !!F.recordings.recordedPages,
      b = Zo(),
      c = Zo() && Tn == Sn;
    Z("recording-container", !0);
    Z("view-recording-summary", !1);
    Z("recording-enabled", !1);
    Z("recording-active", !1);
    Z("resume-recording-issues", !b && Sn == Tn);
    Z("resume-recording-issues-other-tab", !b && Sn != Tn);
    Z("no-recordings", !a);
    Z("recording-result-info", a);
    Z("show-full-report", a);
    Z("stop-recording-show-full-report", c);
    if ((a = J("recording-result-heading"))) a.innerText = b ? "Your current recordings:" : "Your latest recordings:";
  },
  ep = function (a) {
    uo(J(a), function () {
      Z("view-recording-summary", !0);
      Z("recording-container", !1);
    });
  },
  To = function (a) {
    var b = Zo() && Tn == Sn;
    Zo()
      ? b || (Z("recording-enabled", !1), Z("recording-active", !0))
      : (("Disabled" != Qn && "Stale" != Qn) || Ro(),
        (Rn = "enabled"),
        (Sn = Tn),
        Z("recording-enabled", !0),
        Z("recording-active", !1),
        $o(),
        Y(a ? "ResumeRecordingIssues" : "StartRecordingIssues"),
        jo("recordings", a ? "resume-recording" : "start-recording"));
    Z("recording-container", !0);
    Z("view-recording-summary", !0);
    Z("no-recordings", !1);
    Z("recording-result-info", !1);
  },
  Uo = function () {
    Rn = "disabled";
    Nd("AutoOpenRecordings") ? dp() : gp();
    $o();
    Y("StopRecordingIssues");
    jo("recordings", "stop-recording");
  },
  Vo = function () {
    Rn = "disabled";
    Y("StopRecordingIssues");
    Yo();
    jo("recordings", "cancel-recording");
  },
  dp = function (a) {
    jo("recordings", a ? "upload-har-data" : "show-full-report");
    a = F.tabId;
    var b = chrome.extension.getURL("templates/gtar.html");
    window.open(b, "TagAssistant_TAB_" + a);
  },
  jp = function () {
    for (var a = J("tag-filter"), b = [a, fg("show-ignored")], c, d = 0; (c = b[d]); d++)
      c &&
        !dh(c) &&
        V.Mb(c, "click", function (e) {
          var f = {},
            g = Nd("ShowIgnoredIssues");
          Lf(a, "tag-filter-off");
          e.currentTarget.title = g ? "Show ignored tags" : "Hide ignored tags";
          f.ShowIgnoredIssues = !g;
          W.action = e.target;
          Y("Save");
          Ud(f);
          E.parent.issues = lb(E.parent.parent.issues);
          hp(E.parent.issues);
          ip(g);
          e.preventDefault();
        });
  },
  kp = function () {
    for (var a = eg("tag-image-text"), b, c = 0; (b = a[c]); c++)
      V.listen(b, "click", function (d) {
        Lf(fg("tag-checkbox-tick", d.currentTarget), "tag-checkbox-untick");
        d = fg("tag-checkbox-background", d.currentTarget);
        d.checked = !d.checked;
        bp(!0);
      });
  },
  lp = function () {
    for (var a = new Mn(E), b = W.ids, c = !1, d = [], e = 0; e < b.length; e++) {
      var f = a.issues;
      b[e] && 0 != e % 2 && 0 < f.length && -1 < a.parent.index && ((f = f[a.parent.index].buckets), (c = !0));
      for (var g = 0; g < f.length; g++)
        if (f[g].id == b[e]) {
          c ? ((a.parent = new Mn(a)), (a.issues = f[g].relatedIssues), (c = !1)) : ((a.parent.index = g), (a.activeChildId = f[g].id));
          d.push(b[e]);
          break;
        }
    }
    W.ids = d;
    if (2 < d.length) {
      for (b = 0; b < a.issues.length; b++) a.issues[b].id == a.activeChildId && (a.parent.index = b);
      b = a.parent.issues[a.parent.index];
      a.parent.activeChildId = b.id;
      c = Ae(b);
      $n = {
        Wc: a.parent.index,
        kb: Ce([b]),
        Qa: 3 != d.length,
        nb: b,
        settings: wd,
        selectedView: W.selectedView,
        na: Nd("ShowIgnoredIssues"),
        Rd: a.parent.issues.length,
        Kd: In(b.relatedIssues, ae),
        views: c
      };
    }
    E = a;
  },
  X = function (a, b, c) {
    if ((a = "string" === typeof a ? J(a) : a) && !Gf(a, "decorated")) {
      H(a, "decorated");
      a: {
        u(a);
        var d = Ef(a);
        for (var e = 0, f = d.length; e < f; e++) {
          var g = d[e];
          if ((g = g in Wi ? Wi[g]() : null)) {
            d = g;
            break a;
          }
        }
        d = null;
      }
      d && d.decorate(a);
      d && d.listen && (Wn.push(d), c ? V.listen(d, "action", b) : d.listen("action", b));
    }
  },
  uo = function (a, b) {
    (a = "string" === typeof a ? J(a) : a) && !Gf(a, "decorated") && (H(a, "decorated"), V.listen(a, "click", b));
  },
  mp = function () {
    Z("ta-introduction", !1);
    Z("enabled-text", !1);
    Z("disabled-text", !0);
    Z("whitelisted-message", !1);
    Z("unwhitelisted-message", !1);
    Z("tags-container", !1);
    Z("recording-container", !1);
    Z("initializing-popup", !1);
    Z("auto-validation-turned-on", !1);
  },
  np = function () {
    Z("ta-introduction", !1);
    Z("enabled-text", !0);
    Z("disabled-text", !1);
    Z("whitelisted-message", !1);
    Z("unwhitelisted-message", !1);
    Z("tags-container", !1);
    Z("recording-container", !1);
    Z("view-recording-summary", !0);
    Z("initializing-popup", !1);
    Z("auto-validation-turned-on", !1);
  },
  op = function () {
    Z("ta-introduction", !1);
    Z("enabled-text", !1);
    Z("disabled-text", !1);
    Z("whitelisted-message", !1);
    Z("unwhitelisted-message", !1);
    Z("tags-container", !0);
    Z("recording-container", !1);
    Z("view-recording-summary", !0);
    Z("initializing-popup", !1);
    Z("auto-validation-turned-on", !1);
    lm(!0, function () {
      Y("CheckOtherExtensions");
    });
  },
  pp = function () {
    var a = J("issue-details"),
      b = J("page-info-wrapper");
    Z("tags-container", !0);
    If(a, "slide-in");
    If(b, "slide-out");
    H(b, "slide-in");
  },
  qp = function (a) {
    var b = J("issue-details"),
      c = J("bucket-details"),
      d = J("page-info-wrapper");
    Z("tags-container", !0);
    Gf(b, "slide-in") || H(b, "slide-in");
    If(d, "slide-in");
    H(d, "slide-out");
    Gf(c, "slide-down") ? If(c, "slide-down") : 1 < W.ids.length && !a && H(c, "slide-down");
  },
  Yo = function () {
    $o();
    yo();
    Bo("fullscreen", Un);
    var a = J("recording-follow-link");
    a && (a.checked = Ld("FollowLinks"));
    a = Nd("ManualChecks");
    if (On)
      Z("ta-introduction", !0),
        Z("enabled-text", !1),
        Z("disabled-text", !1),
        Z("whitelisted-message", !1),
        Z("unwhitelisted-message", !1),
        Z("tags-container", !1),
        Z("recording-container", !1),
        Z("initializing-popup", !1),
        Z("auto-validation-turned-on", !1);
    else if (!a || Pn) op();
    else {
      switch (Qn) {
        case "Enabled":
          np();
          break;
        case "Disabled":
          mp();
          break;
        case "Capturing":
          op();
          break;
        case "Stale":
          Ko(),
            Z("ta-introduction", !1),
            Z("enabled-text", !1),
            Z("disabled-text", !1),
            Z("whitelisted-message", !1),
            Z("unwhitelisted-message", !1),
            Z("tags-container", !1),
            Z("recording-container", !1),
            Z("view-recording-summary", !1),
            Z("auto-validation-turned-on", !1),
            Z("initializing-popup", !0);
      }
      $o();
    }
  },
  Oo = function (a) {
    var b = Zo() && Tn == Sn,
      c = Nd("ManualChecks");
    switch (a) {
      case "Enabled":
        Pn || b || np();
        break;
      case "Disabled":
        Pn || b || !c || mp();
        break;
      case "AddedToWhitelist":
        c &&
          "Capturing" != Qn &&
          (Z("ta-introduction", !1),
          Z("enabled-text", !1),
          Z("disabled-text", !1),
          Z("whitelisted-message", !0),
          Z("unwhitelisted-message", !1),
          Z("tags-container", !1),
          Z("recording-container", !1),
          Z("view-recording-summary", !0),
          Z("initializing-popup", !1),
          Z("auto-validation-turned-on", !1));
        break;
      case "RemovedFromWhitelist":
        c &&
          "Capturing" != Qn &&
          (Z("ta-introduction", !1),
          Z("enabled-text", !1),
          Z("disabled-text", !1),
          Z("whitelisted-message", !1),
          Z("unwhitelisted-message", !0),
          Z("tags-container", !1),
          Z("recording-container", !1),
          Z("view-recording-summary", !0),
          Z("initializing-popup", !1),
          Z("auto-validation-turned-on", !1));
        break;
      case "SwitchedToAutomaticValication":
        "Capturing" == Qn ||
          Pn ||
          (Z("ta-introduction", !1),
          Z("enabled-text", !1),
          Z("disabled-text", !1),
          Z("whitelisted-message", !1),
          Z("unwhitelisted-message", !1),
          Z("tags-container", !1),
          Z("recording-container", !1),
          Z("view-recording-summary", !1),
          Z("initializing-popup", !1),
          Z("auto-validation-turned-on", !0));
    }
    $o();
  },
  Zo = function () {
    return "disabled" != Rn;
  },
  sp = function () {
    var a = F,
      b = new ee(ge, ge);
    ie(b, a.issues || []);
    b = b.relatedIssues;
    a.issues = b;
    fb(b, function (c, d) {
      return c.valueFormat.localeCompare(d.valueFormat) || c.category.localeCompare(d.category) || c.text.localeCompare(d.text);
    });
    rp(b);
    a = pe(b);
    void 0 !== W.buttonAction && ve(a, W.buttonAction || "for the compiler") && (W.buttonAction = void 0);
    xe(a);
    E.parent = new Mn();
    E.parent.issues = lb(a);
    E.parent.parent = new Mn();
    E.parent.parent.issues = a;
    E.issues = je();
  },
  up = function () {
    sp();
    tp();
    hp(E.issues);
    lp();
    var a = W;
    a.ids.length &&
      (ro(a.selectedView),
      setTimeout(function () {
        tp(!0);
      }, 50));
  },
  rp = function (a) {
    var b = Xa(a, function (c) {
      return "Tag" != c.type;
    });
    Xn = {};
    jb(de, function (c, d) {
      for (var e, f = 0; (e = c[f]); f++)
        Xn[d] = re(b, e).filter(function (g) {
          return "Hidden" != g.type;
        });
    });
  },
  vp = function (a, b) {
    J("tags-total").innerText = "" + a;
    Z("errors-summary", !!b);
    J("errors-total").innerText = b + "";
  },
  wp = function (a) {
    var b = Zd(a.url),
      c = $d(a.domain);
    if (Qn != a.popupState || Rn != a.recording || Sn != a.recordingEnabledTab || On != b || Pn != c)
      (On = Zd(a.url)), (Pn = $d(a.domain)), (Qn = a.popupState), (Rn = a.recording), (Sn = a.recordingEnabledTab), Yo();
    if (a.tabId == Tn || -2 == a.tabId) {
      Yn && Yn.Y("none");
      if (F.lastUpdated != a.lastUpdated) {
        F.issues && (Fn(F.issues), (F.issues = []));
        for (b = E; b; ) b.issues && (Fn(b.issues), (b.issues = [])), (b = E.parent), (E.parent = null);
        b = F = a;
        if ((c = J("recorded-pages-count"))) c.innerText = "" + b.recordings.recordedPages;
        if ((c = J("recorded-tags-count"))) c.innerText = "" + b.recordings.recordedTags;
        $o();
        Fe(a.issues || []);
        !W.action && a.state && (W = a.state);
        W.ids && 0 < W.ids.length ? (W.action = void 0) : W.action ? (W.action = void 0) : Ud({ ShowIgnoredIssues: !1 });
        Gl(a.issues);
        up();
      }
      if (F) {
        b = J("page-title");
        if (Un) {
          if ((b && (tg(b, F.title || ""), Fh(b, !0)), (a = J("page-url")))) tg(a, F.url || ""), Fh(a, !0);
        } else (c = F.title || F.url), b && (tg(b, Vc(c, 80)), (b.title = a.url));
        le().length && yo();
      }
    }
  },
  Dd = function () {
    lo();
    co.hd();
    V = V || new fh();
    if (Ld("ShowWelcomeScreen")) {
      var a = J("popup-wrapper");
      J("welcome-screen-done-button") || (Hi(a, Bm, { af: eo, isInternal: !1 }), kp(), cp(), No(), Po());
    } else xp(), yp();
  },
  Ko = function () {
    Yn || (Yn = new fj());
    if (!Zn) {
      Zn = new gj(Yn);
      Zn.setSize(0);
      Zn.yb = "#ebebeb";
      var a = J("loading");
      Ui(Zn, a);
    }
    Yn.Y("loading");
  },
  xp = function () {
    Vn = $e(document.location.href);
    if (Vn.L.get("tabId")) {
      Tn = zp() || "";
      Un = "true" == Vn.L.get("fullscreen");
      var a = J("popup-wrapper");
      Hi(a, Hm, { Nd: "", isInternal: !1 });
      Hl("UA-33463431-1");
      Hl("UA-63385424-3", !0, "ta-extension-report");
      Qo();
      Xo();
      fp();
      bo = new Li(2e3);
      V.listen(bo, "tick", function () {
        Y("Status");
      });
      try {
        (ao = chrome.extension.connect({ name: "popup" })),
          ao.onMessage.addListener(wp),
          ao.onDisconnect.addListener(function () {
            console.log("Popup disconnected from background script.");
            bo.stop();
            ao = null;
            var b = cg();
            Hi(b, Im);
          });
      } catch (b) {
        console.error("Error while connecting to background script: %s", b.message);
      }
      bo.dispatchEvent("tick");
      bo.start();
    } else
      Pe(Vn, ""),
        chrome.tabs.query({ active: !0, currentWindow: !0 }, function (b) {
          var c = Vn;
          b = b[0].id;
          G(c);
          c.L.set("tabId", b);
          c = document.location;
          b = Vn.toString();
          var d = void 0 === d ? xi : d;
          a: if (((d = void 0 === d ? xi : d), !(b instanceof Vb))) {
            for (var e = 0; e < d.length; ++e) {
              var f = d[e];
              if (f instanceof vi && f.isValid(b)) {
                b = new Vb(b, Ub);
                break a;
              }
            }
            b = void 0;
          }
          b = b || $b;
          if (b instanceof Vb) var g = Wb(b);
          else {
            b: if (oi) {
              try {
                g = new URL(b);
              } catch (k) {
                g = "https:";
                break b;
              }
              g = g.protocol;
            } else
              c: {
                g = document.createElement("a");
                try {
                  g.href = b;
                } catch (k) {
                  g = void 0;
                  break c;
                }
                g = g.protocol;
                g = ":" === g || "" === g ? "https:" : g;
              }
            "javascript:" === g ? (qi(b), (g = void 0)) : (g = b);
          }
          void 0 !== g && (c.href = g);
        });
  },
  No = function () {
    J("help-button") &&
      X("help-button", function () {
        jo("options", "help-link-clicked");
        chrome.tabs.create({ url: "https://support.google.com/tagassistant" });
        p.close();
      });
  },
  Po = function () {
    J("settings") && X("settings", Ap);
  },
  Bp = function (a) {
    var b = E;
    -1 != b.parent.index && (b.parent = new Mn(E));
    b.issues = a.filter(function (c) {
      return !c.deleted;
    });
    a.forEach(function (c, d) {
      c.index = d;
    });
  },
  Ap = function () {
    var a = chrome.extension.getURL("options.html");
    Ld("ShowWelcomeScreen") && bp(!0);
    chrome.tabs.query({ url: a }, function (b) {
      b.length ? (chrome.tabs.update(b[0].id, { active: !0 }), p.close()) : chrome.tabs.create({ url: a });
    });
  },
  hp = function (a) {
    var b = Xn;
    Ln(F.url, a);
    Bp(a);
    a = Xa(a, function (l) {
      return "Hidden" != l.type;
    });
    jb(b, r(Ln, F.url));
    b = kb(b);
    var c = J("details");
    Sa(c);
    var d = Kn(),
      e = [];
    nb(b).forEach(function (l) {
      e.push.apply(e, l);
    });
    xe(e);
    var f = Ce(F.issues || []);
    Hi(c, wm, { settings: wd, tags: a, Ne: e, kb: f, Kd: d, na: Nd("ShowIgnoredIssues") });
    Z("tag-filter", !!f || 1 < d.length);
    ip(!0);
    Io(c);
    ho();
    jp();
    io(a, e);
    var g = Nd("ShowIgnoredIssues"),
      k = Ee(a, "Error", !g);
    jb(b, function (l) {
      k += Ee(l, "Error", !g);
    });
    a = lb(E.issues).length;
    vp(a, k);
  },
  Y = function (a, b, c) {
    if (ao) {
      var d = {};
      d.message = a;
      d.name = b;
      d.value = c;
      d.tabId = Tn;
      try {
        ao.postMessage(d);
      } catch (e) {
        console.error("Could not connect to background script: %s", e.message), (a = cg()), Hi(a, Im);
      }
    }
  },
  bp = function (a) {
    var b = {};
    b.ShowWelcomeScreen = !!a;
    a = eg("tag-checkbox-background");
    for (var c = [], d, e = {}, f = 0; (d = a[f]); e = { od: e.od }, f++)
      (e.od = d.checked ? "Default" : "Hidden"),
        d.parentElement.textContent.split("/").forEach(
          (function (k) {
            return function (l) {
              c.push(l);
              b[l] = k.od;
            };
          })(e)
        );
    b.DefaultLevelOfDetail = "Fine";
    a = Md();
    var g;
    for (d = 0; (g = a[d]); d++)
      (e = Za(c, function (k) {
        return 0 == g.name.indexOf(k);
      })),
        (b[g.name] = e ? b[e] : "Default");
    Rd(b);
    a = J("validate-page");
    Jd("ManualChecks", { "validate-all-pages": !1, "validate-selected-pages": !0 }[a.value]);
  },
  Z = function (a, b) {
    (a = J(a)) && Fh(a, b);
  },
  Bo = function (a, b) {
    (a = J(a)) && Kf(a, "disable", b);
  },
  vo = function (a) {
    var b = E,
      c = b.issues.length;
    a = b.parent.index + a;
    0 <= a &&
      a < c &&
      ((b.parent.index = a), (c = E.issues[a].id), (b.parent.activeChildId = c), (W.selectedView = ""), W.ids.pop(), W.ids.push(c), ro());
  },
  Cp = function (a) {
    ho();
    jp();
    to();
    wo();
    zo(a);
    Do(a);
    qo();
    Go();
    Ho();
    Eo();
    no(a, 0, !0);
  },
  ro = function (a) {
    qp(a);
    var b = new Mn(E),
      c = 0 < b.parent.index ? b.parent.index : 0;
    c = c < b.issues.length ? c : 0;
    var d = b.issues[c],
      e = ye(d);
    if (d) {
      var f = Ae(d);
      a && w(f, a) ? (Nn = a) : w(f, Nn) || (Nn = 0 < f.length ? f[0] : "");
      a = Nd("ShowIgnoredIssues");
      var g = In(d.relatedIssues, be),
        k = F.url ? F.url.split(":")[0] : "",
        l = {
          Wc: c,
          ze: 0 < g.length,
          Qa: 1 < W.ids.length,
          kb: Ce([d]),
          nb: d,
          selectedView: Nn,
          Pf: ye(d).infoLink,
          settings: wd,
          na: a,
          Kd: g,
          tabId: Tn,
          tagId: e.text ? e.text : e.category,
          Rd: b.issues.length,
          views: f,
          scheme: k
        };
      b = J(l.Qa ? "bucket-details" : "issue-details");
      Sa(b);
      (c = "Metadata" == Nn || "Remarketing Validation" == Nn || "" == b.innerText)
        ? Hi(b, zm, l)
        : (Hi(fg("idb-details", b), Dm, {
            settings: wd,
            tag: d,
            Pf: ye(d).infoLink,
            cf: ["Info", "Fine", "Debug", "Group", "Hidden"],
            selectedView: Nn,
            na: a,
            tabId: Tn,
            tagId: d.text ? d.text : d.category,
            scheme: k
          }),
          Hi(fg("idb-header", b), Cm, { views: f, selectedView: Nn }));
      l.Qa
        ? setTimeout(function () {
            Dp(l);
            $n = l;
            var m = J("bucket-details");
            If(m, "slide-animation");
            If(m, "slide-down");
          }, 250)
        : (($n = l), (W.selectedView = l.selectedView));
      c ? Cp(b) : (wo(), zo(b), Do(b), qo(), no(b, 0, !0));
      Ep();
      xo();
    } else console.log("Cannot find issue for index " + b.parent.index, b);
  },
  yp = function () {
    K(document, "keydown", function (a) {
      var b = 1 == W.ids.length,
        c = 1 < W.ids.length;
      switch (a.keyCode) {
        case 37:
          b ? so() : c && vo(-1);
          break;
        case 40:
          b ? vo(1) : c && so();
          break;
        case 38:
          vo(-1);
          break;
        case 39:
          vo(1);
      }
    });
  },
  so = function () {
    W.selectedView = "";
    if (E.parent.parent.parent) {
      if (((E = E.parent), 1 < W.ids.length)) {
        Dp();
        var a = J("bucket-details");
        H(a, "slide-down");
        setTimeout(function () {
          H(a, "slide-animation");
          W.ids.pop();
          W.ids.pop();
          ro();
        }, 1);
      }
    } else (E.parent.index = -1), (E.parent.activeChildId = void 0), pp(), (W.ids = []), Y("Save"), hp(E.parent.issues);
  },
  Ep = function () {
    var a = new jf(W);
    0 < a.ids.length && Y("Save", void 0, a);
  },
  Dp = function (a) {
    if (a && a.nb) {
      var b = J("issue-details");
      Hi(b, zm, a);
      Cp(b);
    }
    a = J("bucket-details");
    Hi(a, zm, $n);
  },
  tp = function (a) {
    [J("page-info-wrapper"), J("issue-details"), J("bucket-details")].forEach(function (b) {
      b && Kf(b, "slide-animation", !!a);
    });
  },
  ap = function (a, b) {
    var c = Nd(a);
    Lf(b, "issue-ignored");
    M(b.parentElement.parentElement, "-webkit-filter", c ? "" : "grayscale(100%)");
    setTimeout(function () {
      c ? Kd(a) : Jd(a, !0);
    }, 400);
    b = (c ? "disable:" : "enable:") + a.replace(fo, "");
    jo("ignoreIssue", b);
  },
  ip = function (a) {
    var b = J("");
    b && Kf(b, "selected", a);
  },
  zp = function () {
    try {
      var a = $e(document.location.href).L.get("tabId");
    } catch (c) {
      var b = go.exec(document.location.href);
      b && 2 <= b.length && (a = b[1]);
    }
    return a;
  },
  jo = function (a, b) {
    _gaq.push(["_trackEvent", a, b, "ext"]);
    ga("send", "event", a, b, "ext");
  };
chrome.extension &&
  (window.addEventListener(
    "load",
    function () {
      J("popup-wrapper") && Hd();
    },
    !1
  ),
  window.addEventListener(
    "unload",
    function () {
      Zn && (Zn.Ba(), (Zn = null));
      Yn && (Yn.Ba(), (Yn = null));
      lo();
      Xn = {};
      $n.nb = void 0;
      $n.Kd = void 0;
      ao = null;
      W.action = void 0;
      W.buttonAction = void 0;
    },
    !1
  ));
