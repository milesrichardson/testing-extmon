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
    this.cd = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.cd;
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
  ka =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        },
  la;
if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
else {
  var ma;
  a: {
    var na = { a: !0 },
      pa = {};
    try {
      pa.__proto__ = na;
      ma = pa.a;
      break a;
    } catch (a) {}
    ma = !1;
  }
  la = ma
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var qa = la,
  ra = function (a, b) {
    a.prototype = ka(b.prototype);
    a.prototype.constructor = a;
    if (qa) qa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.oa = b.prototype;
  },
  sa = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
ea("WeakMap", function (a) {
  function b() {}
  function c(k) {
    var m = typeof k;
    return ("object" === m && null !== k) || "function" === m;
  }
  function d(k) {
    if (!sa(k, f)) {
      var m = new b();
      ba(k, f, { value: m });
    }
  }
  function e(k) {
    var m = Object[k];
    m &&
      (Object[k] = function (p) {
        if (p instanceof b) return p;
        Object.isExtensible(p) && d(p);
        return m(p);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          m = Object.seal({}),
          p = new a([
            [k, 2],
            [m, 3]
          ]);
        if (2 != p.get(k) || 3 != p.get(m)) return !1;
        p.delete(k);
        p.set(m, 4);
        return !p.has(k) && 4 == p.get(m);
      } catch (v) {
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
      this.Ta = (g += Math.random() + 1).toString();
      if (k) {
        k = ja(k);
        for (var m; !(m = k.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    };
  h.prototype.set = function (k, m) {
    if (!c(k)) throw Error("Invalid WeakMap key");
    d(k);
    if (!sa(k, f)) throw Error("WeakMap key fail: " + k);
    k[f][this.Ta] = m;
    return this;
  };
  h.prototype.get = function (k) {
    return c(k) && sa(k, f) ? k[f][this.Ta] : void 0;
  };
  h.prototype.has = function (k) {
    return c(k) && sa(k, f) && sa(k[f], this.Ta);
  };
  h.prototype.delete = function (k) {
    return c(k) && sa(k, f) && sa(k[f], this.Ta) ? delete k[f][this.Ta] : !1;
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
          p = m.next();
        if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
        p = m.next();
        return p.done || 4 != p.value[0].x || "t" != p.value[1] || !m.next().done ? !1 : !0;
      } catch (v) {
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
    for (var m = this.entries(), p; !(p = m.next()).done; ) (p = p.value), h.call(k, p[1], p[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, k) {
      var m = k && typeof k;
      "object" == m || "function" == m ? (b.has(k) ? (m = b.get(k)) : ((m = "" + ++g), b.set(k, m))) : (m = "p_" + k);
      var p = h[0][m];
      if (p && sa(h[0], m))
        for (h = 0; h < p.length; h++) {
          var v = p[h];
          if ((k !== k && v.key !== v.key) || k === v.key) return { id: m, list: p, index: h, entry: v };
        }
      return { id: m, list: p, index: -1, entry: void 0 };
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
ea("Array.prototype.find", function (a) {
  return a
    ? a
    : function (b, c) {
        a: {
          var d = this;
          d instanceof String && (d = String(d));
          for (var e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            if (b.call(c, g, f, d)) {
              b = g;
              break a;
            }
          }
          b = void 0;
        }
        return b;
      };
});
ea("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
var ta = function (a, b) {
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
        return ta(this, function (b, c) {
          return [b, c];
        });
      };
});
ea("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ta(this, function (b) {
          return b;
        });
      };
});
ea("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ta(this, function (b, c) {
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
        for (d in b) sa(b, d) && c.push(b[d]);
        return c;
      };
});
ea("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) sa(b, d) && c.push([d, b[d]]);
        return c;
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ua = this || self,
  va = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  wa = function (a) {
    var b = va(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  xa = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  ya = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  za = 0,
  Aa = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  Ba = function (a, b, c) {
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
  Ca = function (a, b, c) {
    Ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Aa : Ba;
    return Ca.apply(null, arguments);
  },
  n = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  Da = function (a, b) {
    a = a.split(".");
    var c = ua;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  Ea = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.oa = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.kf = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  };
function Fa(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Fa);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
Ea(Fa, Error);
Fa.prototype.name = "CustomError";
function Ha(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  Fa.call(this, c + a[d]);
}
Ea(Ha, Fa);
Ha.prototype.name = "AssertionError";
function Ia(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Ha("" + e, f || []);
}
var q = function (a, b, c) {
    a || Ia("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  Ja = function (a, b) {
    throw new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Ka = function (a, b, c) {
    "number" !== typeof a && Ia("Expected number but got %s: %s.", [va(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  La = function (a, b, c) {
    "string" !== typeof a && Ia("Expected string but got %s: %s.", [va(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ma = function (a, b, c) {
    Array.isArray(a) || Ia("Expected array but got %s: %s.", [va(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Na = function (a, b, c) {
    "boolean" !== typeof a && Ia("Expected boolean but got %s: %s.", [va(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Pa = function (a, b, c, d) {
    a instanceof b || Ia("Expected instanceof %s but got %s.", [Oa(b), Oa(a)], c, Array.prototype.slice.call(arguments, 3));
    return a;
  };
function Oa(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
var Qa = Array.prototype.indexOf
    ? function (a, b) {
        q(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Ra = Array.prototype.forEach
    ? function (a, b, c) {
        q(null != a.length);
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
      };
function Sa(a, b) {
  for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
}
var Ta = Array.prototype.filter
    ? function (a, b) {
        q(null != a.length);
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
  Ua = Array.prototype.map
    ? function (a, b) {
        q(null != a.length);
        return Array.prototype.map.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
          f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d;
      },
  Va = Array.prototype.some
    ? function (a, b, c) {
        q(null != a.length);
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      },
  Wa = Array.prototype.every
    ? function (a, b) {
        q(null != a.length);
        return Array.prototype.every.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0;
      };
function Xa(a, b, c) {
  var d = 0;
  Ra(
    a,
    function (e, f, g) {
      b.call(c, e, f, g) && ++d;
    },
    c
  );
  return d;
}
function Ya(a, b) {
  b = Za(a, b);
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
function Za(a, b) {
  for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
  return -1;
}
function r(a, b) {
  return 0 <= Qa(a, b);
}
function ab(a, b) {
  b = Qa(a, b);
  var c;
  (c = 0 <= b) && bb(a, b);
  return c;
}
function bb(a, b) {
  q(null != a.length);
  Array.prototype.splice.call(a, b, 1);
}
function cb(a, b) {
  b = Za(a, b);
  return 0 <= b ? (bb(a, b), !0) : !1;
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
    if (wa(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function fb(a, b, c, d) {
  q(null != a.length);
  Array.prototype.splice.apply(a, gb(arguments, 1));
}
function gb(a, b, c) {
  q(null != a.length);
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
var lb = function (a) {
    return function () {
      return a;
    };
  },
  mb = function () {
    return !1;
  },
  nb = function () {
    return !0;
  },
  ob = function () {
    return null;
  },
  pb = function (a) {
    var b = arguments,
      c = b.length;
    return function () {
      for (var d = 0; d < c; d++) if (b[d].apply(this, arguments)) return !0;
      return !1;
    };
  },
  sb = function () {
    var a = pb(qb, rb);
    return function () {
      return !a.apply(this, arguments);
    };
  };
function tb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function ub(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return !0;
  return !1;
}
function vb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
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
var zb = function (a, b) {
    return 0 == a.lastIndexOf(b, 0);
  },
  Ab = function (a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  },
  Bb = function (a) {
    return /^[\s\xa0]*$/.test(a);
  },
  Cb = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  Db = function (a, b) {
    return -1 != a.indexOf(b);
  };
var Fb = function (a) {
  if (Eb !== Eb) throw Error("SafeUrl is not meant to be built directly");
  this.Zd = a;
};
Fb.prototype.toString = function () {
  return this.Zd.toString();
};
var Eb = {};
new Fb("about:invalid#zClosurez");
new Fb("about:blank");
var Gb = {},
  Hb = function () {
    if (Gb !== Gb) throw Error("SafeStyle is not meant to be built directly");
    this.Yd = "";
  };
Hb.prototype.toString = function () {
  return this.Yd.toString();
};
new Hb();
var Ib = {},
  Jb = function () {
    if (Ib !== Ib) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Xd = "";
  };
Jb.prototype.toString = function () {
  return this.Xd.toString();
};
new Jb();
var Kb, Lb;
a: {
  for (var Mb = ["CLOSURE_FLAGS"], Nb = ua, Ob = 0; Ob < Mb.length; Ob++)
    if (((Nb = Nb[Mb[Ob]]), null == Nb)) {
      Lb = null;
      break a;
    }
  Lb = Nb;
}
var Pb = Lb && Lb[610401301];
Kb = null != Pb ? Pb : !1;
function Qb() {
  var a = ua.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var Rb,
  Sb = ua.navigator;
Rb = Sb ? Sb.userAgentData || null : null;
function Tb(a) {
  return Kb
    ? Rb
      ? Rb.brands.some(function (b) {
          return (b = b.brand) && Db(b, a);
        })
      : !1
    : !1;
}
function Ub(a) {
  return Db(Qb(), a);
}
function Vb() {
  return Kb ? !!Rb && 0 < Rb.brands.length : !1;
}
function Wb() {
  return Vb() ? !1 : Ub("Opera");
}
function Xb() {
  return Vb() ? !1 : Ub("Trident") || Ub("MSIE");
}
function Yb() {
  return Vb() ? Tb("Microsoft Edge") : Ub("Edg/");
}
function Zb() {
  return (
    Ub("Safari") &&
    !(
      $b() ||
      (Vb() ? 0 : Ub("Coast")) ||
      Wb() ||
      (Vb() ? 0 : Ub("Edge")) ||
      Yb() ||
      (Vb() ? Tb("Opera") : Ub("OPR")) ||
      Ub("Firefox") ||
      Ub("FxiOS") ||
      Ub("Silk") ||
      Ub("Android")
    )
  );
}
function $b() {
  return Vb() ? Tb("Chromium") : ((Ub("Chrome") || Ub("CriOS")) && !(Vb() ? 0 : Ub("Edge"))) || Ub("Silk");
}
function ac(a) {
  var b = {};
  a.forEach(function (c) {
    b[c[0]] = c[1];
  });
  return function (c) {
    return (
      b[
        c.find(function (d) {
          return d in b;
        })
      ] || ""
    );
  };
}
function bc() {
  var a = Qb();
  if (Xb()) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) a = b[1];
    else {
      b = "";
      var c = /MSIE +([\d\.]+)/.exec(a);
      if (c && c[1])
        if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
          if (a && a[1])
            switch (a[1]) {
              case "4.0":
                b = "8.0";
                break;
              case "5.0":
                b = "9.0";
                break;
              case "6.0":
                b = "10.0";
                break;
              case "7.0":
                b = "11.0";
            }
          else b = "7.0";
        else b = c[1];
      a = b;
    }
    return a;
  }
  c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
  b = [];
  for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
  a = ac(b);
  return Wb()
    ? a(["Version", "Opera"])
    : (Vb() ? 0 : Ub("Edge"))
    ? a(["Edge"])
    : Yb()
    ? a(["Edg"])
    : Ub("Silk")
    ? a(["Silk"])
    : $b()
    ? a(["Chrome", "CriOS", "HeadlessChrome"])
    : ((a = b[2]) && a[1]) || "";
}
var cc = {},
  dc = function (a, b) {
    if (b !== cc) throw Error("SafeHtml is not meant to be built directly");
    this.Oc = a;
  };
dc.prototype.toString = function () {
  return this.Oc.toString();
};
new dc((ua.trustedTypes && ua.trustedTypes.emptyHTML) || "", cc);
var t = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  ec = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a;
  },
  gc = function () {
    var a = fc();
    return String(a)
      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08");
  },
  hc = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  u = function (a, b) {
    if (!Number.isFinite(a)) return String(a);
    a = String(a);
    var c = a.indexOf(".");
    -1 === c && (c = a.length);
    var d = "-" === a[0] ? "-" : "";
    d && (a = a.substring(1));
    return d + hc("0", Math.max(0, b - c)) + a;
  };
var ic =
  Object.freeze ||
  function (a) {
    return a;
  };
var jc = function () {
    this.Sc = Date.now();
  },
  kc = null;
jc.prototype.set = function (a) {
  this.Sc = a;
};
jc.prototype.reset = function () {
  this.set(Date.now());
};
jc.prototype.get = function () {
  return this.Sc;
};
var lc = function (a, b) {
  this.name = a;
  this.value = b;
};
lc.prototype.toString = function () {
  return this.name;
};
var mc = new lc("OFF", Infinity),
  nc = new lc("SEVERE", 1e3),
  oc = new lc("WARNING", 900),
  pc = new lc("INFO", 800),
  qc = new lc("CONFIG", 700),
  rc = function () {
    this.hb = 0;
    this.clear();
  },
  sc;
rc.prototype.clear = function () {
  this.tc = Array(this.hb);
  this.xc = -1;
  this.Dc = !1;
};
var tc = function (a, b, c) {
  this.kb = void 0;
  this.reset(a || mc, b, c, void 0, void 0);
};
tc.prototype.reset = function (a, b, c, d) {
  this.bd = d || Date.now();
  this.Gc = a;
  this.Pd = b;
  this.Hc = c;
  this.kb = void 0;
};
tc.prototype.getMessage = function () {
  return this.Pd;
};
var uc = function (a, b) {
    this.level = null;
    this.zc = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.Xb = {
      qb: function () {
        return a;
      }
    };
  },
  vc = function (a) {
    if (a.level) return a.level;
    if (a.parent) return vc(a.parent);
    Ja("Root logger has no level set.");
    return mc;
  };
uc.prototype.publish = function (a) {
  for (var b = this; b; )
    b.zc.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var wc = function () {
    this.entries = {};
    var a = new uc("");
    a.level = qc;
    this.entries[""] = a;
  },
  xc,
  yc = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = yc(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new uc(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  zc = function () {
    xc || (xc = new wc());
    return xc;
  },
  Ac = function (a, b, c) {
    var d;
    if ((d = a))
      if ((d = a && b)) {
        d = b.value;
        var e = a ? vc(yc(zc(), a.qb())) : mc;
        d = d >= e.value;
      }
    if (d) {
      b = b || mc;
      d = yc(zc(), a.qb());
      "function" === typeof c && (c = c());
      sc || (sc = new rc());
      e = sc;
      a = a.qb();
      if (0 < e.hb) {
        var f = (e.xc + 1) % e.hb;
        e.xc = f;
        e.Dc ? ((e = e.tc[f]), e.reset(b, c, a), (a = e)) : ((e.Dc = f == e.hb - 1), (a = e.tc[f] = new tc(b, c, a)));
      } else a = new tc(b, c, a);
      a.kb = void 0;
      d.publish(a);
    }
  },
  Cc = function (a) {
    var b = Bc;
    b && Ac(b, pc, a);
  };
var Dc = function (a) {
  this.Wd = a || "";
  kc || (kc = new jc());
  this.je = kc;
};
l = Dc.prototype;
l.qc = !0;
l.Uc = !0;
l.ge = !0;
l.fe = !0;
l.Vc = !1;
l.he = !1;
var Ec = function (a) {
    return 10 > a ? "0" + a : String(a);
  },
  Fc = function (a) {
    Dc.call(this, a);
  };
Ea(Fc, Dc);
var Gc = function (a, b) {
  var c = [];
  c.push(a.Wd, " ");
  if (a.Uc) {
    var d = new Date(b.bd);
    c.push(
      "[",
      Ec(d.getFullYear() - 2e3) +
        Ec(d.getMonth() + 1) +
        Ec(d.getDate()) +
        " " +
        Ec(d.getHours()) +
        ":" +
        Ec(d.getMinutes()) +
        ":" +
        Ec(d.getSeconds()) +
        "." +
        Ec(Math.floor(d.getMilliseconds() / 10)),
      "] "
    );
  }
  if (a.ge) {
    d = c.push;
    var e = a.je.get();
    e = (b.bd - e) / 1e3;
    var f = e.toFixed(3),
      g = 0;
    if (1 > e) g = 2;
    else for (; 100 > e; ) g++, (e *= 10);
    for (; 0 < g--; ) f = " " + f;
    d.call(c, "[", f, "s] ");
  }
  a.fe && c.push("[", b.Hc, "] ");
  a.he && c.push("[", b.Gc.name, "] ");
  c.push(b.getMessage());
  a.Vc && ((b = b.kb), void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
  a.qc && c.push("\n");
  return c.join("");
};
var Hc = function () {
  this.be = Ca(this.zd, this);
  this.ob = new Fc();
  this.ob.Uc = !1;
  this.ob.Vc = !1;
  this.Cc = this.ob.qc = !1;
  this.Jd = {};
};
Hc.prototype.zd = function (a) {
  function b(f) {
    if (f) {
      if (f.value >= nc.value) return "error";
      if (f.value >= oc.value) return "warn";
      if (f.value >= qc.value) return "log";
    }
    return "debug";
  }
  if (!this.Jd[a.Hc]) {
    var c = Gc(this.ob, a),
      d = Ic;
    if (d) {
      var e = b(a.Gc);
      Jc(d, e, c, a.kb);
    }
  }
};
var Ic = ua.console,
  Jc = function (a, b, c, d) {
    if (a[b]) a[b](c, void 0 === d ? "" : d);
    else a.log(c, void 0 === d ? "" : d);
  };
var _gaq = _gaq || [];
var Bc = null,
  Lc = function (a, b) {
    var c = [];
    do {
      var d = Kc(a.exec, a, b);
      d && (d.shift(), eb(c, d));
    } while (0 < a.lastIndex);
    return c;
  },
  Kc = function (a, b, c) {
    if (c) {
      var d;
      Bc && (d = new Date().getTime());
      a = a.call(b, c);
      Bc && ((d = new Date().getTime() - d), 1 < d && Cc("Dur: " + d + " Text Length: " + c.length + " Matched: " + !!a + " Pattern:" + b));
      return a;
    }
  },
  Mc = function (a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
      return a;
    }
  },
  Nc = function (a) {
    return "true" == a || "1" == a || "!0" == a;
  },
  Oc = function (a, b) {
    return Kc(a.exec, a, b);
  },
  Rc = function (a, b) {
    var c;
    Bc && (c = new Date().getTime());
    try {
      var d = b.replace(/([=+-])\s*\n\s*/g, "$1 "),
        e = Pc(d),
        f = Qc(e, [";", ",", "\n"], !0),
        g = Ya(f, function (k) {
          return (h = w(new RegExp("^(?:var |(?:\\w*\\.)*)" + a + "\\s*="), k));
        });
      if (g) {
        var h = x(/[^=]*(?:=\s*[a-zA-Z_$][a-zA-Z0-9_$]*)*\s*=\s*(.*)/, g.replace(/\s*\n\s*/g, " "));
        if ("string" === typeof h) return h;
      }
      return !1;
    } finally {
      Bc && ((c = new Date().getTime() - c), 1 < c && Cc("Extract var " + a + "Dur: " + c + " Text Length: " + b.length + "result: " + h));
    }
  },
  Sc = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = Lc(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (b.some(Sc)) return !0;
    for (; w(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return a.split(/\s*,\s*/).some(n(w, /^\s*[_a-zA-Z][_a-zA-Z0-9]*\s*=.*/g));
  },
  Uc = function (a) {
    return Tc(a).some(function (b) {
      return w(/['"]\[.*\]['"]/, b.split(/\s*:\s*/)[1]);
    });
  },
  Vc = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = Lc(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if ((b = b.some(Vc))) return !0;
    for (; w(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return b || (a.match(/:/g) || []).length - 1 > (a.match(/,/g) || []).length;
  },
  Wc = function (a) {
    return !Tc(a).every(function (b) {
      return Db(b, ",")
        ? (b = (b = Oc(/\[(.*)\]/, b)) && 1 < b.length ? b[1] : null)
          ? Tc(b).every(function (c) {
              return !Db(c, ",");
            })
          : !1
        : !0;
    });
  },
  Xc = {},
  Yc = function (a, b) {
    return Ya(a, function (c) {
      var d = Xc[c];
      if (!d) {
        d = c.split("://");
        var e = d[1].indexOf("/"),
          f = d[1]
            .substring(0, e)
            .replace(/([.[\]{}?])/g, "$1")
            .replace(/\*/g, ".*");
        e = d[1]
          .substring(e)
          .replace(/([.[\]{}?])/g, "$1")
          .replace(/\*/g, ".*");
        d = { scheme: d[0], Gd: new RegExp("^" + f + "$"), Td: new RegExp("^" + e + "$") };
        Xc[c] = d;
      }
      return !(("*" != d.scheme && d.scheme != b.ba) || !w(d.Gd, b.J)) && w(d.Td, b.A);
    });
  },
  x = function (a, b, c) {
    c = void 0 !== c ? c : 1;
    return (a = Kc(a.exec, a, b)) ? (a.length > c ? a[c] : !0) : !1;
  },
  Zc = function (a, b) {
    for (var c, d = a.length, e = 0; e < d; e++) {
      var f = x(a[e], b);
      if ("string" === typeof f) void 0 === c && (c = f);
      else if ("string" !== typeof f && !f) return !1;
    }
    return void 0 !== c ? c : !0;
  },
  $c = function (a, b) {
    for (var c = a.length, d = 0; d < c; d++) {
      var e = x(a[d], b);
      if ("string" === typeof e || e) return e;
    }
    return !1;
  },
  ad = function (a, b) {
    return x(a, b.url);
  },
  bd = function (a, b) {
    b || (b = { lastIndex: -1, Yc: Qc(a, [";", ",", "\n"], !0), text: "" });
    b.lastIndex++;
    return b.lastIndex < b.Yc.length ? ((b.text = b.Yc[b.lastIndex]), b) : null;
  },
  cd = function (a, b) {
    return !a.every(function (c) {
      return w(c, b);
    });
  },
  Qc = function (a, b, c) {
    var d = b || [";", ","];
    b = b ? 0 : 1;
    var e = { "(": ")", "{": "}", "[": "]" },
      f = void 0,
      g = !1,
      h = [],
      k = [],
      m = 0;
    a = Cb(dd(a));
    var p = a.length,
      v;
    for (v = 0; v < p; v++) {
      var E = a.charAt(v);
      g
        ? (g = !1)
        : "\\" == E
        ? (g = !0)
        : f
        ? E == f && (f = void 0)
        : '"' == E || "'" == E
        ? (f = E)
        : "(" == E || "{" == E || "[" == E
        ? h.push(e[E])
        : h.length
        ? E == h[h.length - 1] && h.pop()
        : r(d, E)
        ? ((m = Cb(a.substring(m, v + b))), (!m && c) || k.push(m.replace(" *\n *", "")), (m = v + 1))
        : v == m && y[a.charCodeAt(v)] && (m = v + 1);
    }
    m = Cb(a.substring(m, v));
    (!m && c) || k.push(m.replace(" *\n *", ""));
    return k;
  },
  ed = function (a) {
    a = x(/\{(.*)\}/, a) || a;
    return Tc(a).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = x(/"(.*)"/, c) || c;
      c = x(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
  },
  dd = function (a, b) {
    var c = void 0,
      d = !1,
      e = -1;
    b = b || 0;
    for (var f = a.length, g = b; g < f; g++) {
      var h = a.charAt(g),
        k = g + 1 < f ? a.charAt(g + 1) : "";
      if (d) d = !1;
      else if (0 <= e) {
        if ("*" == h && "/" == k) return a.substring(b, e) + dd(a, g + 2);
      } else if ("\\" == h) d = !0;
      else if (c) h == c && (c = void 0);
      else if ("/" == h) {
        if ("/" == k) return (c = a.indexOf("\n", g)), -1 == c ? a.substring(b, g) : a.substring(b, g) + dd(a, c);
        "*" == k && (e = g++);
      } else if ('"' == h || "'" == h) c = h;
    }
    return a.substring(b);
  },
  Pc = function (a) {
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
  Tc = function (a) {
    return Qc(a, [","]);
  },
  fd = function (a, b) {
    var c = a.split("%s");
    if (1 == c.length) return a;
    for (var d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; ) d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  w = function (a, b) {
    return Kc(a.test, a, b);
  },
  gd = n(w, /^[-+]?(?:\d*\.)?\d+$/),
  hd = n(w, /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/),
  id = function (a, b) {
    return w(a, b.url);
  },
  y = [];
y[9] = !0;
y[10] = !0;
y[11] = !0;
y[12] = !0;
y[13] = !0;
y[32] = !0;
y[133] = !0;
y[160] = !0;
y[5760] = !0;
y[6158] = !0;
y[8192] = !0;
y[8193] = !0;
y[8194] = !0;
y[8195] = !0;
y[8196] = !0;
y[8197] = !0;
y[8198] = !0;
y[8199] = !0;
y[8200] = !0;
y[8201] = !0;
y[8202] = !0;
y[8203] = !0;
y[8232] = !0;
y[8233] = !0;
y[8239] = !0;
y[8287] = !0;
y[12288] = !0;
var qb = function (a) {
  switch (a) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      return !0;
    default:
      return !1;
  }
};
function jd(a, b, c, d, e) {
  var f = new XMLHttpRequest();
  f.onreadystatechange = function () {
    4 == this.readyState && d(this);
  };
  f.open(b, a, !0);
  c &&
    tb(c, function (g, h) {
      f.setRequestHeader(h, g);
    });
  f.send(JSON.stringify(e));
  f = null;
}
function rb(a) {
  return 0 == a;
}
function kd(a) {
  return 404 == a;
}
function ld(a) {
  return 300 < a && 310 > a && 304 != a;
}
var nd = {},
  od = {},
  pd = {},
  qd,
  rd = {
    me: "AutoOpenRecordings",
    ne: "categories",
    oe: "CheckPermissionsLater",
    te: "DefaultLevelOfDetail",
    se: "DebugIssues",
    ve: "IgnoreExternalScripts",
    we: "FollowLinks",
    xe: "gaDebug",
    ye: "GtaPage",
    Be: "hideRecordingSuggestion",
    Ce: "IgnoreExternalScripts",
    He: "isInSupportTeam",
    Ie: "last-checked-for-support-team",
    Je: "LoggedIn",
    Le: "LogInfoTemplate",
    Me: "LogSources",
    Ke: "LoggingEnabled",
    Ne: "ManualChecks",
    Oe: "ManualScriptParsing",
    Re: "NgModeDisabled",
    Ve: "PatternProfiling",
    We: "RecordingTab",
    Xe: "GooglePublisherConsole",
    Ye: "ShowIgnoredIssues",
    Ze: "ShowWelcomeScreen",
    hf: "WhiteListedDomains",
    ef: "ValidateAllPages"
  },
  sd = { DefaultLevelOfDetail: "DefaultLevel" },
  td = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  yd = function () {
    var a = ud,
      b = ud;
    qd = null;
    pd = {};
    void 0 !== chrome && void 0 !== chrome.storage
      ? chrome.storage.local.get(null, function (c) {
          vd(c);
          wd(a, b);
        })
      : nd["Options initialized to default values."] || (console.log("No chrome storage available."), xd(), a());
  },
  wd = function (a, b) {
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (c) {
        vd(c);
        c["Options initialized to default values."] || xd();
        a();
      }),
      zd(b));
  },
  z = function (a) {
    var b = nd[a];
    if (!b && sd[a] && nd[sd[a]]) {
      var c = sd[a];
      b = void 0 !== nd[c] ? nd[c] : null;
      Ad(a, b);
      void 0 !== chrome && void 0 !== chrome.storage
        ? (delete pd[c], chrome.storage.local.remove(c, void 0), chrome.storage.sync.remove(c, void 0))
        : (delete pd[nd[c]], delete nd[c]);
    }
    return b;
  },
  Bd = function (a) {
    a = z(a);
    void 0 !== a && Na(a);
    return !!a;
  },
  Dd = function () {
    var a = Cd("WhiteListedDomains");
    if (void 0 === a) return [];
    var b = pd[a];
    b || ((b = a.trim()), (b = 0 == b.length ? [] : b.split(/ *[,\n]+(?: |,|\n)*/)), (pd[a] = b));
    return b;
  },
  Cd = function (a, b) {
    a = z(a);
    void 0 !== a && Na("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  Ed = function (a) {
    qd ||
      ((qd = {}),
      Object.keys(nd).forEach(function (b) {
        0 < b.indexOf("|") && (qd[b.split("|")[0]] = !0);
      }));
    return !!qd[a];
  },
  zd = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      for (var c in b) nd[c] = b[c].newValue;
      "function" === typeof a && a();
    });
  },
  Gd = function () {
    var a = {};
    tb(rd, function (b) {
      void 0 !== z(b) && (a[b] = z(b));
    });
    xd();
    Fd(a);
  },
  xd = function () {
    var a = z("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    nd = {};
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
    Fd(a);
  },
  Hd = function (a, b, c) {
    tb(b, function (d, e) {
      null != d && (od[e] ? q(typeof d == od[e], "Unexpected type " + typeof d + " expected " + od[e]) : (od[e] = typeof d));
    });
    vd(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (Gd(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  vd = function (a, b) {
    a && xb(nd, a);
    b && b();
  },
  Id = void 0 !== chrome && void 0 !== chrome.storage ? n(Hd, chrome.storage.local) : vd,
  Fd = void 0 !== chrome && void 0 !== chrome.storage ? n(Hd, chrome.storage.sync) : vd,
  Ad = function (a, b) {
    delete pd[a];
    Fd(yb(a, b), void 0);
  },
  Jd = function () {
    return Cd("GtaPage", "PROD");
  };
Da("tvt.Settings.getGataPageVersion", Jd);
Da("tvt.Settings.setGataPageVersion", function (a) {
  Ad("GtaPage", a || "PROD");
});
var fc = function () {
  var a = Jd();
  return td[a];
};
Da("tvt.Settings.getGataRedirectUrl", fc);
var Kd = function () {
  return fc() + "internal/";
};
Da("tvt.Settings.getGataInternalRedirectUrl", Kd);
Da("tvt.Settings.getGataLoginCheckUrl", function () {
  return fc() + "logincheck";
});
var Ld = function () {
  return Kd() + "login";
};
Da("tvt.Settings.getGataInternalLoginUrl", Ld);
var Md = function () {
  return fc() + "login";
};
Da("tvt.Settings.getGataLoginUrl", Md);
Da("tvt.Settings.toggleGaDebugSettings", function () {
  var a = {};
  switch (z("gaDebug")) {
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
  Id(a);
});
var Nd = function (a) {
  var b = Dd();
  return (
    null != a &&
    b.some(function (c) {
      return 5 < c.length && Db(a, c);
    })
  );
};
var Od = function (a, b) {
    this.name = a;
    this.url = b;
  },
  Pd = ["Error", "Warning", "Suggestion"];
tb(
  { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] },
  function (a) {
    for (var b = 0; a[b]; b++);
  }
);
var Rd = function (a, b, c, d) {
    this.issueClass = b.issueClass;
    this.type = b.type;
    this.buckets = [];
    this.category = b.category;
    this.label = d || c || b.label || "";
    this.text = fd(b.text || "", c || this.label);
    this.infoLink = "string" === typeof b.infoLink ? fd(b.infoLink, this.label) : void 0;
    this.value = b.value || void 0;
    this.valueFormat = b.format || b.valueFormat || "";
    this.relatedIssues = [];
    c = b.relatedIssues || [];
    for (var e = 0; (d = c[e]); e++) A(this, d);
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
    null != a.relatedIssues && (Qd(this, a.relatedIssues.length), a.relatedIssues.push(this));
  },
  Sd = ["Error", "Warning", "Suggestion"],
  Td = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  Ud = function (a, b) {
    for (var c, d = 0; (c = b[d]); d++) A(a, c);
  },
  Wd = function (a, b) {
    b = A(Td, b);
    var c = {};
    Vd(c, a, !0);
    Vd(c, b, !0);
    A(a, b);
  },
  Yd = function (a, b) {
    for (var c, d = 0; (c = b[d]); d++) {
      var e = Xd(a, c.text, c.label);
      e ? Yd(e, c.relatedIssues) : Wd(a, c);
    }
  },
  Zd = function (a) {
    a.id = void 0;
    a.relatedIssues.forEach(Zd);
    return a;
  },
  A = function (a, b, c, d) {
    return new Rd(a, b, c, d);
  },
  $d = function (a) {
    return a.map(function (b) {
      return A(Td, b);
    });
  },
  ae = function (a, b, c) {
    if ((b = B(b, a))) if ((a = B(c, a))) a.label = b.label;
  },
  be = function (a) {
    var b = A(Td, Td);
    if (a) {
      b.relatedIssues = a;
      for (var c, d = 0; (c = a[d]); d++) c.parent = b;
    }
    return b;
  },
  Vd = function (a, b, c) {
    if (!b.deleted && !b.deduped && "Bucket" != b.type) {
      if ("Tag" != b.type) {
        var d = a[b.type];
        d || ((d = {}), (a[b.type] = d));
        var e = d[b.text];
        e || ((e = {}), (d[b.text] = e));
        (d = e[b.label]) ? c && ((b.deduped = !0), Yd(d, b.relatedIssues)) : (e[b.label] = b);
      }
      for (d = 0; (e = b.relatedIssues[d]); d++) Vd(a, e, c);
    }
  },
  de = function (a, b, c) {
    var d = !1;
    Sa(a, function (e) {
      b == e.issueClass ? ((d = !0), ce(a, e, "Deleted because of class match " + b)) : c || (d = de(e.relatedIssues, b) || d);
    });
    return d;
  },
  ee = function (a, b, c) {
    var d = !1;
    Sa(a, function (e) {
      e.text == b ? ((d = !0), ce(a, e, "Deleted because of text match.")) : c || (d = ee(e.relatedIssues, b) || d);
    });
    return d;
  },
  fe = function (a, b) {
    var c = !1;
    Sa(a, function (d) {
      0 <= b.indexOf(d.text) ? ((c = !0), ce(a, d, "Deleted because of text match.")) : (c = fe(d.relatedIssues, b) || c);
    });
    return c;
  },
  ge = function (a, b, c) {
    var d = !1;
    Sa(a.relatedIssues, function (e) {
      e.text == b && e.label == c ? ((d = !0), ce(a.relatedIssues, e, "Deleted because of text and label match.")) : (d = ge(e, b, c) || d);
    });
    return d;
  },
  he = function (a, b) {
    var c = !1;
    Sa(a.relatedIssues, function (d) {
      0 <= d.text.indexOf(b) ? ((c = !0), ce(a.relatedIssues, d, "Deleted because of text prefix match" + b)) : (c = he(d, b) || c);
    });
    return c;
  },
  ie = function (a, b, c) {
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
            (e.label && " -- " + ec(e.label.replace("\n", ""), 25)) +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && ie(e.relatedIssues, b, g);
      }
    else ie(a.relatedIssues, b, c);
  };
Da("module$contents$tvt$Issue_Issue.dump", ie);
var je = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && r(b, c.category);
    });
  },
  ke = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.category;
    });
  },
  le = function (a, b, c) {
    return c && !Array.isArray(c)
      ? le(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          return d.deleted ? !1 : c ? me(d.relatedIssues, b, c) : ne(d.relatedIssues, b);
        })
      : le(a.relatedIssues, b, c);
  },
  oe = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.issueClass;
    });
  },
  pe = function (a, b, c) {
    return c && !Array.isArray(c)
      ? pe(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          if (d.deleted) return !1;
          d = B(d.relatedIssues, b);
          return !!d && !d.deleted && !d.deduped && (void 0 === c || 0 <= c.indexOf(d.label));
        })
      : pe(a.relatedIssues, b, c);
  },
  qe = function (a, b) {
    return "string" === typeof b
      ? qe(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.label);
        })
      : qe(a.relatedIssues, b);
  },
  re = function (a, b) {
    return "string" === typeof b
      ? re(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.text);
        })
      : re(a.relatedIssues, b);
  },
  te = function (a, b, c) {
    return a.filter(function (d) {
      return !d.deleted && !d.deduped && b == d.type && (!c || !d.ignored) && se(d.category);
    });
  },
  ue = function (a, b) {
    "string" === typeof b && (b = [b]);
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && "Tag" == c.type && -1 != b.indexOf(c.category);
    });
  },
  ve = function (a, b, c) {
    for (var d = [], e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (b(e) ? d.push(e) : e.type != c && ((e = ve(e.relatedIssues, b, c)), 0 == d.length ? (d = e) : eb(d, e)));
    return d;
  },
  we = function (a, b) {
    return ve(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  xe = function (a, b, c) {
    return we(a, b).filter(function (d) {
      return c == d.label;
    });
  },
  ye = function (a, b, c) {
    return ve(
      Array.isArray(a) ? a : a.relatedIssues,
      function (d) {
        return b == d.type;
      },
      c
    );
  },
  ze = function (a) {
    return ve(
      Array.isArray(a) ? a : a.relatedIssues,
      function (b) {
        return r(Sd, b.type);
      },
      "Bucket"
    );
  },
  Be = function (a, b) {
    return Ae(a) ? null : a.parent.text == b ? a.parent : Be(a.parent, b);
  },
  De = function (a) {
    return Ce(Array.isArray(a) ? a : a.relatedIssues, function (b) {
      return "Google Ads Remarketing Tag" == b.category;
    });
  },
  Ee = function (a, b) {
    return Ce(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.issueClass;
    });
  },
  Fe = function (a, b) {
    return Ce(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  B = function (a, b) {
    return Ce(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  Xd = function (a, b, c) {
    a = we(a, b);
    c = qe(a, c);
    return 0 < c.length ? c[0] : null;
  },
  Ge = function (a, b) {
    if (Array.isArray(a)) {
      var c = Ya(a, function (d) {
        return !d.deleted && !d.deduped && 0 <= d.text.indexOf(b);
      });
      c ||
        a.some(function (d) {
          c = !d.deleted && !d.deduped && Ge(d.relatedIssues, b);
          return !!c;
        });
      return c;
    }
    return Ge(a.relatedIssues, b);
  },
  He = function (a) {
    return Ce(Array.isArray(a) ? a : a.relatedIssues, function (b) {
      return "Bucket" == b.type;
    });
  },
  Ce = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = Ce(d.relatedIssues, b, c)))) return d;
    return null;
  },
  Ie = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) !d.deleted && !d.deduped && 0 <= b.indexOf(d.category || "") && c(d);
  },
  Je = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) d.deleted || d.deduped || b != d.category || c(d);
  },
  Ke = function (a, b, c, d) {
    for (var e, f = 0; (e = a[f]); f++) !e.deleted && !e.deduped && b == e.text && 0 <= c.indexOf(e.label) && d(e);
  },
  Qd = function (a, b) {
    if (a && a && a.category != Td.category) {
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
      a.relatedIssues.forEach(Qd);
    }
  },
  Le = function (a) {
    return Ae(a) || "Bucket" == a.parent.type ? a : Le(a.parent);
  },
  me = function (a, b, c) {
    return a.some(function (d) {
      return !d.deleted && !d.deduped && b == d.text && 0 <= c.indexOf(d.label);
    });
  },
  ne = function (a, b) {
    return a.some(function (c) {
      return !c.deleted && !c.deduped && b == c.text;
    });
  },
  Ne = function (a, b, c) {
    for (var d, e = 0; (d = b[e]); e++) {
      var f = !c && "Tag" == d.type,
        g = !f && r(Pd, d.type),
        h = c || (f ? d.text : "Global");
      if (f || g) {
        f = d;
        var k = a;
        g = "Tag" != f.type && r(Pd, f.type);
        k = k + "|ignore:" + Me(f) + ":" + f.type;
        g && (k = k + ":" + (0 == f.text.length ? f.category : f.text));
        d.ignored = Bd(k);
      }
      Ne(a, d.relatedIssues, h);
    }
  },
  Oe = function (a) {
    for (var b, c = 0; (b = a[c]); c++)
      ("Fine" == b.type || "Debug" == b.type) && 0 < ze(b.relatedIssues).length && (b.type = "Info"), Oe(b.relatedIssues);
  },
  Pe = function (a) {
    return Ae(a) ? a : Pe(a.parent);
  },
  Me = function (a) {
    a = Pe(a);
    return "Tag" == a.type ? a.text : "Global";
  },
  Qe = function (a) {
    return a.some(function (b) {
      return 1 < qe(a, b.label).length;
    });
  },
  Re = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return Re(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  se = function (a) {
    var b;
    (b = null == a) || (((a = Cd(a)) && "Default" != a) || (a = Cd("DefaultLevelOfDetail", "Default")), (b = !r(["Hidden", "Off"], a)));
    return b;
  },
  Ae = function (a) {
    a.parent ? ((a = a.parent), (a = !a || a.category == Td.category)) : (a = !0);
    return a;
  },
  ce = function (a, b, c) {
    ab(a, b);
    b.deleted || (b.deleted = c);
    b.relatedIssues = [];
  },
  Se = function (a) {
    for (var b, c = 0; (b = a[c]); c++) (b.template = void 0), (b.parent = Td), Se(b.relatedIssues);
    return a;
  },
  Te = function (a) {
    for (var b, c = 0; (b = a[c]); c++)
      Te(b.relatedIssues),
        Sa(b.relatedIssues, function (d, e) {
          ((d.deduped && 0 == d.relatedIssues.length) || d.deleted) && bb(b.relatedIssues, e);
        });
  },
  Ue = function (a, b, c) {
    for (var d = 0, e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (c && e.ignored) || !se(e.category) || (e.type == b ? d++ : (d += Ue(e.relatedIssues, b, c)));
    return d;
  },
  Ve = function (a, b) {
    for (var c = b || Td, d = 0; (b = a[d]); d++) (b.parent = c), b.infoLink || (b.infoLink = c.infoLink);
    for (c = 0; (b = a[c]); c++) Ve(b.relatedIssues, b);
  },
  We = function (a) {
    for (var b, c = 0; (b = a[c]); c++)
      b.relatedIssues.length && (We(b.relatedIssues), (b.relatedIssues = [])),
        (b.parent = Td),
        (b.text = ""),
        (b.label = b.text),
        (b.infoLink = void 0),
        (b.value = {}),
        (b.template = void 0),
        (b.templateMarker = ""),
        (b.otherRelatedIssues = []);
  };
var Xe = function (a) {
    if (a.za && "function" == typeof a.za) a = a.za();
    else if (wa(a) || "string" === typeof a) a = a.length;
    else {
      var b = 0,
        c;
      for (c in a) b++;
      a = b;
    }
    return a;
  },
  Ye = function (a) {
    if (a.ca && "function" == typeof a.ca) return a.ca();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (wa(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return vb(a);
  },
  Ze = function (a) {
    if (a.ea && "function" == typeof a.ea) return a.ea();
    if (!a.ca || "function" != typeof a.ca) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (wa(a) || "string" === typeof a) {
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
  $e = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (wa(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = Ze(a), e = Ye(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  },
  af = function (a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (wa(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
    for (var c = Ze(a), d = Ye(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0;
  };
var bf = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  cf = function (a) {
    var b = a.indexOf("#");
    return 0 > b ? a : a.slice(0, b);
  },
  df = function (a, b) {
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
  ef = function (a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f) if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f)) return b;
      b += e + 1;
    }
    return -1;
  },
  ff = /#|$/,
  gf = function (a, b) {
    var c = a.search(ff),
      d = ef(a, 0, b, c);
    if (0 > d) return null;
    var e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  },
  hf = /[?&]($|#)/,
  jf = function (a, b) {
    for (var c = a.search(ff), d = 0, e, f = []; 0 <= (e = ef(a, d, "dl", c)); )
      f.push(a.substring(d, e)), (d = Math.min(a.indexOf("&", e) + 1 || c, c));
    f.push(a.slice(d));
    a = f.join("").replace(hf, "$1");
    "dl" + (null != b ? "=" + encodeURIComponent(String(b)) : "") && ((b = a.indexOf("#")), 0 > b && (b = a.length));
  };
var kf = function (a) {
  this.J = this.Da = this.ba = "";
  this.La = null;
  this.Ba = this.A = "";
  this.da = this.Kd = !1;
  if (a instanceof kf) {
    this.da = a.da;
    lf(this, a.ba);
    var b = a.Da;
    mf(this);
    this.Da = b;
    b = a.J;
    mf(this);
    this.J = b;
    nf(this, a.La);
    of(this, a.A);
    pf(this, a.v.clone());
    a = a.Ba;
    mf(this);
    this.Ba = a;
  } else
    a && (b = String(a).match(bf))
      ? ((this.da = !1),
        lf(this, b[1] || "", !0),
        (a = b[2] || ""),
        mf(this),
        (this.Da = qf(a)),
        (a = b[3] || ""),
        mf(this),
        (this.J = qf(a, !0)),
        nf(this, b[4]),
        of(this, b[5] || "", !0),
        pf(this, b[6] || "", !0),
        (a = b[7] || ""),
        mf(this),
        (this.Ba = qf(a)))
      : ((this.da = !1), (this.v = new rf(null, this.da)));
};
kf.prototype.toString = function () {
  var a = [],
    b = this.ba;
  b && a.push(sf(b, tf, !0), ":");
  var c = this.J;
  if (c || "file" == b)
    a.push("//"),
      (b = this.Da) && a.push(sf(b, tf, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.La),
      null != c && a.push(":", String(c));
  if ((c = this.A)) this.J && "/" != c.charAt(0) && a.push("/"), a.push(sf(c, "/" == c.charAt(0) ? uf : vf, !0));
  (c = this.v.toString()) && a.push("?", c);
  (c = this.Ba) && a.push("#", sf(c, wf));
  return a.join("");
};
kf.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.ba;
  c ? lf(b, a.ba) : (c = !!a.Da);
  if (c) {
    var d = a.Da;
    mf(b);
    b.Da = d;
  } else c = !!a.J;
  c ? ((d = a.J), mf(b), (b.J = d)) : (c = null != a.La);
  d = a.A;
  if (c) nf(b, a.La);
  else if ((c = !!a.A)) {
    if ("/" != d.charAt(0))
      if (this.J && !this.A) d = "/" + d;
      else {
        var e = b.A.lastIndexOf("/");
        -1 != e && (d = b.A.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (Db(e, "./") || Db(e, "/.")) {
      d = zb(e, "/");
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
  c ? of(b, d) : (c = "" !== a.v.toString());
  c ? pf(b, a.v.clone()) : (c = !!a.Ba);
  c && ((a = a.Ba), mf(b), (b.Ba = a));
  return b;
};
kf.prototype.clone = function () {
  return new kf(this);
};
var lf = function (a, b, c) {
    mf(a);
    a.ba = c ? qf(b, !0) : b;
    a.ba && (a.ba = a.ba.replace(/:$/, ""));
  },
  nf = function (a, b) {
    mf(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.La = b;
    } else a.La = null;
  },
  of = function (a, b, c) {
    mf(a);
    a.A = c ? qf(b, !0) : b;
  },
  pf = function (a, b, c) {
    mf(a);
    b instanceof rf ? ((a.v = b), a.v.dc(a.da)) : (c || (b = sf(b, xf)), (a.v = new rf(b, a.da)));
  };
kf.prototype.getQuery = function () {
  return this.v.toString();
};
var zf = function (a, b) {
  return a.v.get(b);
};
kf.prototype.removeParameter = function (a) {
  mf(this);
  this.v.remove(a);
  return this;
};
var mf = function (a) {
  if (a.Kd) throw Error("Tried to modify a read-only Uri");
};
kf.prototype.dc = function (a) {
  this.da = a;
  this.v && this.v.dc(a);
};
var C = function (a) {
    return a instanceof kf ? a.clone() : new kf(a);
  },
  qf = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  sf = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, Af)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  Af = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  tf = /[#\/\?@]/g,
  vf = /[#\?:]/g,
  uf = /[#\?]/g,
  xf = /[#\?@]/g,
  wf = /#/g,
  rf = function (a, b) {
    this.T = this.F = null;
    this.aa = a || null;
    this.da = !!b;
  },
  Bf = function (a) {
    a.F ||
      ((a.F = new Map()),
      (a.T = 0),
      a.aa &&
        df(a.aa, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
l = rf.prototype;
l.za = function () {
  Bf(this);
  return this.T;
};
l.add = function (a, b) {
  Bf(this);
  this.aa = null;
  a = Cf(this, a);
  var c = this.F.get(a);
  c || this.F.set(a, (c = []));
  c.push(b);
  this.T = Ka(this.T) + 1;
  return this;
};
l.remove = function (a) {
  Bf(this);
  a = Cf(this, a);
  return this.F.has(a) ? ((this.aa = null), (this.T = Ka(this.T) - this.F.get(a).length), this.F.delete(a)) : !1;
};
l.clear = function () {
  this.F = this.aa = null;
  this.T = 0;
};
l.Ka = function () {
  Bf(this);
  return 0 == this.T;
};
l.Aa = function (a) {
  Bf(this);
  a = Cf(this, a);
  return this.F.has(a);
};
l.jb = function (a) {
  var b = this.ca();
  return r(b, a);
};
l.forEach = function (a, b) {
  Bf(this);
  this.F.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
l.ea = function () {
  Bf(this);
  for (var a = Array.from(this.F.values()), b = Array.from(this.F.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
l.ca = function (a) {
  Bf(this);
  var b = [];
  if ("string" === typeof a) this.Aa(a) && (b = b.concat(this.F.get(Cf(this, a))));
  else {
    a = Array.from(this.F.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
l.set = function (a, b) {
  Bf(this);
  this.aa = null;
  a = Cf(this, a);
  this.Aa(a) && (this.T = Ka(this.T) - this.F.get(a).length);
  this.F.set(a, [b]);
  this.T = Ka(this.T) + 1;
  return this;
};
l.get = function (a, b) {
  if (!a) return b;
  a = this.ca(a);
  return 0 < a.length ? String(a[0]) : b;
};
l.toString = function () {
  if (this.aa) return this.aa;
  if (!this.F) return "";
  for (var a = [], b = Array.from(this.F.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.ca(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.aa = a.join("&"));
};
l.clone = function () {
  var a = new rf();
  a.aa = this.aa;
  this.F && ((a.F = new Map(this.F)), (a.T = this.T));
  return a;
};
var Cf = function (a, b) {
  b = String(b);
  a.da && (b = b.toLowerCase());
  return b;
};
rf.prototype.dc = function (a) {
  a &&
    !this.da &&
    (Bf(this),
    (this.aa = null),
    this.F.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c),
        this.remove(d),
        0 < b.length && ((this.aa = null), this.F.set(Cf(this, d), db(b)), (this.T = Ka(this.T) + b.length)));
    }, this));
  this.da = a;
};
rf.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    $e(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var Df = function () {
  this.zb = void 0;
};
Df.prototype.serialize = function (a) {
  var b = [];
  Ef(this, a, b);
  return b.join("");
};
var Ef = function (a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          a.serializeArray(b, c);
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push("{");
          var d = "",
            e;
          for (e in b)
            if (Object.prototype.hasOwnProperty.call(b, e)) {
              var f = b[e];
              "function" != typeof f && (c.push(d), Ff(e, c), c.push(":"), Ef(a, a.zb ? a.zb.call(b, e, f) : f, c), (d = ","));
            }
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          Ff(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  },
  Gf = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
  Hf = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
  Ff = function (a, b) {
    b.push(
      '"',
      a.replace(Hf, function (c) {
        var d = Gf[c];
        d || ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1)), (Gf[c] = d));
        return d;
      }),
      '"'
    );
  };
Df.prototype.serializeArray = function (a, b) {
  var c = a.length;
  b.push("[");
  for (var d = "", e = 0; e < c; e++) b.push(d), (d = a[e]), Ef(this, this.zb ? this.zb.call(a, String(e), d) : d, b), (d = ",");
  b.push("]");
};
var Jf = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, k, m, p, v) {
      if ("%" == m) return "%";
      var E = c.shift();
      if ("undefined" == typeof E) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = E;
      return If[m].apply(null, arguments);
    });
  },
  If = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a = -1 < b.indexOf("-", 0) ? a + hc(" ", Number(c) - a.length) : hc(" ", Number(c) - a.length) + a);
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      return (d = 0 <= b.indexOf("-", 0) ? f + d + hc(" ", a) : f + hc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
    },
    d: function (a, b, c, d, e, f, g, h) {
      return If.f(parseInt(a, 10), b, c, d, 0, f, g, h);
    }
  };
If.i = If.d;
If.u = If.d;
var Lf = function () {
  this.C = new Kf();
  this.Vb = new Df();
};
Lf.prototype.format = function (a) {
  a: if (null == a) a = [];
  else {
    if ("string" === typeof a) {
      if (Bb(a)) {
        a = [];
        break a;
      }
      a = JSON.parse(a);
    }
    var b = [];
    Mf(this, a, b, 0);
    a = b;
  }
  var c = "";
  for (b = 0; b < a.length; b++) {
    var d = a[b];
    d instanceof dc &&
      (d instanceof dc && d.constructor === dc
        ? (d = d.Oc)
        : (Ja("expected object of type SafeHtml, got '" + d + "' of type " + va(d)), (d = "type_error:SafeHtml")),
      (d = d.toString()));
    c += d;
  }
  return c;
};
var Mf = function (a, b, c, d) {
    var e = va(b);
    switch (e) {
      case "null":
      case "boolean":
      case "number":
      case "string":
        d = a.Vb.serialize(b);
        b = c.push;
        a = a.C;
        a = Jf(a.Nc, e) + d + a.Mc;
        b.call(c, a);
        break;
      case "array":
        c.push(a.C.Cd);
        var f;
        for (f = 0; f < b.length; f++) 0 < f && c.push(a.C.Pc), c.push(a.C.wb), c.push(hc(a.C.ab, d + a.C.tb)), Mf(a, b[f], c, d + a.C.tb);
        0 < f && (c.push(a.C.wb), c.push(hc(a.C.ab, d)));
        c.push(a.C.Bd);
        break;
      case "object":
        c.push(a.C.Sd);
        e = 0;
        for (f in b)
          if (b.hasOwnProperty(f)) {
            0 < e && c.push(a.C.Pc);
            c.push(a.C.wb);
            c.push(hc(a.C.ab, d + a.C.tb));
            var g = c,
              h = g.push,
              k = a.C,
              m = a.Vb.serialize(f);
            h.call(g, k.Vd + m + k.Ud);
            c.push(a.C.Qd, a.C.ab);
            Mf(a, b[f], c, d + a.C.tb);
            e++;
          }
        0 < e && (c.push(a.C.wb), c.push(hc(a.C.ab, d)));
        c.push(a.C.Rd);
        break;
      default:
        (d = a.Vb.serialize("")), (b = c.push), (a = a.C), (a = Jf(a.Nc, "unknown") + d + a.Mc), b.call(c, a);
    }
  },
  Kf = function () {};
l = Kf.prototype;
l.ab = " ";
l.wb = "\n";
l.Sd = "{";
l.Rd = "}";
l.Cd = "[";
l.Bd = "]";
l.Pc = ",";
l.Qd = ":";
l.Vd = "";
l.Ud = "";
l.Nc = "";
l.Mc = "";
l.tb = 2;
function Nf(a, b) {
  a = Math.round(a);
  return Jf("%d %s%s", a, b, 1 == a ? "" : "s");
}
function Of(a, b, c) {
  var d = 0;
  try {
    if (((c = c || []), "boolean" === typeof a)) d += 4;
    else if ("string" === typeof a) d += 2 * a.length;
    else if ("number" == typeof a) d += 8;
    else if ("object" == typeof a) {
      b = b || 0;
      if (10 < b) throw Error("[too many recursions, stopped with " + d + "B]");
      if (!a || 0 === a.length) return 0;
      if ("Array" == Object.prototype.toString.call(a).slice(8, -1))
        for (var e = 0, f = a.length; e < f; e++) (d += 8), (d += Of(a[e], 0, c));
      else if (-1 == c.indexOf(a)) for (e in (c.push(a), a)) a.hasOwnProperty(e) && ((d += 8), (d += Of(a[e], b + 1, c)));
    }
  } catch (g) {
    console.log("Error while traversing the object: stopped with " + d, g);
  }
  return d;
}
function Pf() {
  var a = "Other";
  $b()
    ? (a = "Chrome")
    : Wb()
    ? (a = "Opera")
    : Xb()
    ? (a = "Internet Explorer")
    : Ub("Firefox") || Ub("FxiOS")
    ? (a = "Firefox")
    : Zb() && (a = "Safari");
  return a;
}
var Qf = function () {
    this.buttonAction = this.action = void 0;
    this.ids = [];
    this.selectedView = "";
  },
  Rf = function (a) {
    this.id = "-1";
    this.title = a;
    this.timestamp = new Date().getTime() - 1;
    this.url = "";
    this.onContentLoad = this.onLoad = -1;
    this.redirects = [];
  },
  Tf = function (a, b, c, d) {
    this.tabId = a;
    this.isManualCheck = !1;
    this.urlToTrack = "";
    this.state = new Qf();
    this.issues = [];
    this.page = new Rf(c || "");
    Sf(this, b);
    this.requests = {};
    this.responses = {};
    this.redirects = {};
    this.domChecksReload = this.domChecksFinished = !1;
    this.tagsFiredInRecording = this.lastVisited = this.lastUpdated = 0;
    this.status = d;
    this.requiresReload = !1;
    this.failedScripts = [];
    this.frames = [];
    this.domIssues = {};
    this.updateTagsRequired = this.updateDomRequired = !0;
    this.variables = {};
    this.wasOpened = !1;
  },
  Sf = function (a, b) {
    if (b && a.page.url != b) {
      try {
        var c = new kf(b);
        a.page.domain = c.J;
        var d = c.ba ? c.ba : null;
        a.urlToTrack = (d ? d + "://" : "") + a.page.domain;
        if ("chrome-extension" == d && a.page.domain == chrome.i18n.getMessage("@@extension_id")) {
          var e = zf(c, "tabId");
          e && (a.referencedTabId = parseInt(e, 10));
        }
      } catch (g) {}
      a.page.url = b;
      for (var f in a.responses) (c = a.responses[f]), c.documentUrl && (c.documentUrl = b);
    }
  },
  Uf = function (a) {
    tb(a.requests, function (b) {
      b.uri && (b.uri = null);
      b.documentUri && (b.documentUri = null);
    });
    tb(a.responses, function (b) {
      b.uri && (b.uri = null);
      b.documentUri && (b.documentUri = null);
      b.redirects = null;
    });
    a.responses = {};
  },
  Vf = function (a) {
    a.issues.length && (We(a.issues), (a.issues = []));
    a.domIssues &&
      (tb(a.domIssues, function (b, c) {
        We(a.domIssues[c] || []);
      }),
      (a.domIssues = {}));
    Uf(a);
    a.redirects = {};
    a.frames = [];
    a.variables = {};
  },
  $f = function (a) {
    var b = { log: { version: "1.2", creator: Xf, browser: { name: Pf(), version: bc() }, pages: [], entries: [] } };
    a.forEach(function (c, d) {
      var e = Object.keys(c.requests).sort();
      if (0 == e.length) console.warn("Missing request for " + c.page.url + " . ignored!", c);
      else {
        var f = "page_" + (c.page.id || d);
        b.log.pages.push({
          startedDateTime: new Date(c.page.timestamp).toISOString(),
          id: f,
          title: c.page.title,
          pageTimings: { onContentLoad: c.page.onContentLoad, onLoad: c.page.onLoad }
        });
        e.forEach(function (g) {
          var h = c.requests[g],
            k = c.responses[g];
          k || (console.log("Missing responses for page" + g + " using request", h), (k = h));
          c.page.timestamp > h.timeStamp &&
            console.warn(
              "Request times and IDs should be in ascending order.failure for request " +
                g +
                ": expected to be after " +
                c.page.timestamp +
                " was " +
                h.timeStamp,
              { status: c, request: h }
            );
          g = {
            pageref: f,
            startedDateTime: new Date(h.timeStamp).toISOString(),
            time: k.timeStamp - h.timeStamp,
            connection: g,
            serverIPAddress: k.ip
          };
          var m = cf(h.url);
          if ("pageview" == gf(m, "t")) {
            var p = gf(m, "dl");
            p && p.match(/^chrome-extension/) && ((p = p.replace(/^chrome-extension/, "http")), jf(m, p));
          }
          g.request = {
            method: h.method,
            url: m,
            httpVersion: h.httpVersion,
            queryString: Yf(h.queryString),
            bodySize: void 0 !== h.bodySize ? h.bodySize : -1
          };
          h.postData && (g.request.postData = { text: h.postData });
          m = k.statusLine;
          (p = /.* [0-9]{3} (.*)/.exec(m)) && (m = p[1]);
          g.response = {
            status: k.statusCode,
            statusText: m || "",
            httpVersion: (m && m.split(" ")[0]) || "",
            bodySize: void 0 !== k.bodySize ? k.bodySize : -1,
            redirectURL: k.redirectUrl || ""
          };
          g.request.headers = Ta(h.requestHeaders || [], function (v) {
            return 0 <= Zf.indexOf(v.name);
          });
          b.log.entries.push(g);
        });
      }
    });
    return b;
  },
  Yf = function (a) {
    var b = C(a).v,
      c = [];
    b.ea().forEach(function (d) {
      b.ca(d).forEach(function (e) {
        c.push({ name: d, value: e });
      });
    });
    return c;
  },
  Zf = ["User-Agent"];
var ag = [],
  bg = function (a) {
    q(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "Ub";
    if (a.Ub && a.hasOwnProperty(b)) return a.Ub;
    ag.push(a);
    var c = new a();
    a.Ub = c;
    q(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
var cg = function (a, b) {
  this.Ed = a[ua.Symbol.iterator]();
  this.Nd = b;
};
cg.prototype[Symbol.iterator] = function () {
  return this;
};
cg.prototype.next = function () {
  var a = this.Ed.next();
  return { value: a.done ? void 0 : this.Nd.call(void 0, a.value), done: a.done };
};
var dg = function (a, b) {
  return new cg(a, b);
};
var eg = function () {};
eg.prototype.next = function () {
  return fg;
};
var fg = ic({ done: !0, value: void 0 });
eg.prototype.va = function () {
  return this;
};
var jg = function (a) {
    if (a instanceof gg || a instanceof hg || a instanceof ig) return a;
    if ("function" == typeof a.next)
      return new gg(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new gg(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.va)
      return new gg(function () {
        return a.va();
      });
    throw Error("Not an iterator or iterable.");
  },
  gg = function (a) {
    this.Qb = a;
  };
gg.prototype.va = function () {
  return new hg(this.Qb());
};
gg.prototype[Symbol.iterator] = function () {
  return new ig(this.Qb());
};
gg.prototype.jc = function () {
  return new ig(this.Qb());
};
var hg = function (a) {
  this.Ua = a;
};
ra(hg, eg);
hg.prototype.next = function () {
  return this.Ua.next();
};
hg.prototype[Symbol.iterator] = function () {
  return new ig(this.Ua);
};
hg.prototype.jc = function () {
  return new ig(this.Ua);
};
var ig = function (a) {
  gg.call(this, function () {
    return a;
  });
  this.Ua = a;
};
ra(ig, gg);
ig.prototype.next = function () {
  return this.Ua.next();
};
var kg = function (a, b) {
  this.B = {};
  this.G = [];
  this.fb = this.size = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
l = kg.prototype;
l.za = function () {
  return this.size;
};
l.ca = function () {
  lg(this);
  for (var a = [], b = 0; b < this.G.length; b++) a.push(this.B[this.G[b]]);
  return a;
};
l.ea = function () {
  lg(this);
  return this.G.concat();
};
l.Aa = function (a) {
  return this.has(a);
};
l.has = function (a) {
  return mg(this.B, a);
};
l.jb = function (a) {
  for (var b = 0; b < this.G.length; b++) {
    var c = this.G[b];
    if (mg(this.B, c) && this.B[c] == a) return !0;
  }
  return !1;
};
l.equals = function (a, b) {
  if (this === a) return !0;
  if (this.size != a.za()) return !1;
  b = b || ng;
  lg(this);
  for (var c, d = 0; (c = this.G[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
  return !0;
};
var ng = function (a, b) {
  return a === b;
};
kg.prototype.Ka = function () {
  return 0 == this.size;
};
kg.prototype.clear = function () {
  this.B = {};
  this.G.length = 0;
  this.ua(0);
  this.fb = 0;
};
kg.prototype.remove = function (a) {
  return this.delete(a);
};
kg.prototype.delete = function (a) {
  return mg(this.B, a) ? (delete this.B[a], this.ua(this.size - 1), this.fb++, this.G.length > 2 * this.size && lg(this), !0) : !1;
};
var lg = function (a) {
  if (a.size != a.G.length) {
    for (var b = 0, c = 0; b < a.G.length; ) {
      var d = a.G[b];
      mg(a.B, d) && (a.G[c++] = d);
      b++;
    }
    a.G.length = c;
  }
  if (a.size != a.G.length) {
    var e = {};
    for (c = b = 0; b < a.G.length; ) (d = a.G[b]), mg(e, d) || ((a.G[c++] = d), (e[d] = 1)), b++;
    a.G.length = c;
  }
};
l = kg.prototype;
l.get = function (a, b) {
  return mg(this.B, a) ? this.B[a] : b;
};
l.set = function (a, b) {
  mg(this.B, a) || (this.ua(this.size + 1), this.G.push(a), this.fb++);
  this.B[a] = b;
};
l.addAll = function (a) {
  if (a instanceof kg) for (var b = a.ea(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
  else for (b in a) this.set(b, a[b]);
};
l.forEach = function (a, b) {
  for (var c = this.ea(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
l.clone = function () {
  return new kg(this);
};
l.toObject = function () {
  lg(this);
  for (var a = {}, b = 0; b < this.G.length; b++) {
    var c = this.G[b];
    a[c] = this.B[c];
  }
  return a;
};
l.keys = function () {
  return jg(this.va(!0)).jc();
};
l.values = function () {
  return jg(this.va(!1)).jc();
};
l.entries = function () {
  var a = this;
  return dg(this.keys(), function (b) {
    return [b, a.get(b)];
  });
};
l.va = function (a) {
  lg(this);
  var b = 0,
    c = this.fb,
    d = this,
    e = new eg();
  e.next = function () {
    if (c != d.fb) throw Error("The map has changed since the iterator was created");
    if (b >= d.G.length) return fg;
    var f = d.G[b++];
    return { value: a ? f : d.B[f], done: !1 };
  };
  return e;
};
l.ua = function (a) {
  this.size = a;
};
var mg = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var og = function (a) {
    this.B = new kg();
    this.size = 0;
    a && this.addAll(a);
  },
  pg = function (a) {
    var b = typeof a;
    return ("object" == b && a) || "function" == b
      ? "o" + ((Object.prototype.hasOwnProperty.call(a, ya) && a[ya]) || (a[ya] = ++za))
      : b.slice(0, 1) + a;
  };
l = og.prototype;
l.za = function () {
  return this.B.size;
};
l.add = function (a) {
  this.B.set(pg(a), a);
  this.ua(this.B.size);
};
l.addAll = function (a) {
  a = Ye(a);
  for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
  this.ua(this.B.size);
};
l.removeAll = function (a) {
  a = Ye(a);
  for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
  this.ua(this.B.size);
};
l.delete = function (a) {
  a = this.B.remove(pg(a));
  this.ua(this.B.size);
  return a;
};
l.remove = function (a) {
  return this.delete(a);
};
l.clear = function () {
  this.B.clear();
  this.ua(0);
};
l.Ka = function () {
  return 0 === this.B.size;
};
l.has = function (a) {
  return this.B.Aa(pg(a));
};
l.contains = function (a) {
  return this.B.Aa(pg(a));
};
l.ca = function () {
  return this.B.ca();
};
l.values = function () {
  return this.B.values();
};
l.clone = function () {
  return new og(this);
};
l.equals = function (a) {
  return this.za() == Xe(a) && qg(this, a);
};
var qg = function (a, b) {
  var c = Xe(b);
  if (a.za() > c) return !1;
  !(b instanceof og) && 5 < c && (b = new og(b));
  return af(a, function (d) {
    var e = b;
    if (e.contains && "function" == typeof e.contains) d = e.contains(d);
    else if (e.jb && "function" == typeof e.jb) d = e.jb(d);
    else if (wa(e) || "string" === typeof e) d = r(e, d);
    else
      a: {
        for (var f in e)
          if (e[f] == d) {
            d = !0;
            break a;
          }
        d = !1;
      }
    return d;
  });
};
og.prototype.va = function () {
  return this.B.va(!1);
};
og.prototype[Symbol.iterator] = function () {
  return this.values();
};
og.prototype.ua = function (a) {
  this.size = a;
};
var rg = function () {
    this.recordedTags = this.recordedPages = 0;
    this.lastRecordedTabId = this.recordingEnabledTabId = -2;
  },
  sg = function () {
    this.state = "disabled";
    this.statusInfos = [];
    this.lastUpdated = 0;
  },
  tg = function () {
    this.na = "disabled";
    this.Qc = new og();
    this.Ac = new og();
    this.Bb = [];
    this.Ec = Date.now();
    this.Wb = this.X = -1;
  },
  vg = function (a) {
    var b = ug();
    return a && -1 != a ? (b.X == a ? b.na : "disabled") : b.na;
  },
  wg = function (a) {
    ug().Ac.addAll(a);
  },
  xg = function () {
    var a = ug();
    return a.Bb.filter(function (b) {
      return !a.Ac.has(b.page.id);
    });
  },
  yg = function () {
    var a = ug(),
      b = xg(),
      c = 0;
    b.forEach(function (e) {
      c += te(e.issues, "Tag", !0).length;
    });
    var d = new rg();
    d.recordedPages = b.length;
    d.recordedTags = c;
    d.recordingEnabledTabId = a.X;
    d.lastRecordedTabId = a.Wb;
    return d;
  },
  zg = function () {
    var a = ug();
    a.Wb = a.X;
    a.na = "disabled";
  },
  Ag = function () {
    var a = ug(),
      b = new sg();
    b.state = a.na;
    b.lastUpdated = a.Ec;
    b.statusInfos = a.Bb.map(function (c) {
      Se(c.issues);
      return c;
    });
    return b;
  },
  ug = function () {
    return bg(tg);
  };
var Bg = {
    hd: ["BC", "AD"],
    gd: ["Before Christ", "Anno Domini"],
    kd: "JFMAMJJASOND".split(""),
    rd: "JFMAMJJASOND".split(""),
    jd: "January February March April May June July August September October November December".split(" "),
    qd: "January February March April May June July August September October November December".split(" "),
    nd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    td: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    wd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    vd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    pd: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    ud: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Qe: "SMTWTFS".split(""),
    sd: "SMTWTFS".split(""),
    od: ["Q1", "Q2", "Q3", "Q4"],
    ld: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    dd: ["AM", "PM"],
    qe: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    cf: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    re: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    Fb: 6,
    gf: [5, 6],
    Gb: 5
  },
  Cg = Bg;
Cg = Bg;
var Dg = function (a, b, c, d, e) {
    a = new Date(a, b, c);
    e = e || 0;
    return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
  },
  Gg = function (a, b, c) {
    "number" === typeof a
      ? ((this.date = Eg(a, b || 0, c || 1)), Fg(this, c || 1))
      : xa(a)
      ? ((this.date = Eg(a.getFullYear(), a.getMonth(), a.getDate())), Fg(this, a.getDate()))
      : ((this.date = new Date(Date.now())),
        (a = this.date.getDate()),
        this.date.setHours(0),
        this.date.setMinutes(0),
        this.date.setSeconds(0),
        this.date.setMilliseconds(0),
        Fg(this, a));
  },
  Eg = function (a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b;
  };
l = Gg.prototype;
l.mb = Cg.Fb;
l.nb = Cg.Gb;
l.clone = function () {
  var a = new Gg(this.date);
  a.mb = this.mb;
  a.nb = this.nb;
  return a;
};
l.getFullYear = function () {
  return this.date.getFullYear();
};
l.getYear = function () {
  return this.getFullYear();
};
l.getMonth = function () {
  return this.date.getMonth();
};
l.getDate = function () {
  return this.date.getDate();
};
l.getTime = function () {
  return this.date.getTime();
};
l.getDay = function () {
  return this.date.getDay();
};
l.getUTCFullYear = function () {
  return this.date.getUTCFullYear();
};
l.getUTCMonth = function () {
  return this.date.getUTCMonth();
};
l.getUTCDate = function () {
  return this.date.getUTCDate();
};
l.getUTCDay = function () {
  return this.date.getDay();
};
l.getUTCHours = function () {
  return this.date.getUTCHours();
};
l.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
l.getTimezoneOffset = function () {
  return this.date.getTimezoneOffset();
};
l.set = function (a) {
  this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate());
};
l.setFullYear = function (a) {
  this.date.setFullYear(a);
};
l.setYear = function (a) {
  this.setFullYear(a);
};
l.setMonth = function (a) {
  this.date.setMonth(a);
};
l.setDate = function (a) {
  this.date.setDate(a);
};
l.setTime = function (a) {
  this.date.setTime(a);
};
l.setUTCFullYear = function (a) {
  this.date.setUTCFullYear(a);
};
l.setUTCMonth = function (a) {
  this.date.setUTCMonth(a);
};
l.setUTCDate = function (a) {
  this.date.setUTCDate(a);
};
l.add = function (a) {
  if (a.years || a.months) {
    var b = this.getMonth() + a.months + 12 * a.years,
      c = this.getYear() + Math.floor(b / 12);
    b %= 12;
    0 > b && (b += 12);
    a: {
      switch (b) {
        case 1:
          var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29;
          break a;
        case 5:
        case 8:
        case 10:
        case 3:
          d = 30;
          break a;
      }
      d = 31;
    }
    d = Math.min(d, this.getDate());
    this.setDate(1);
    this.setFullYear(c);
    this.setMonth(b);
    this.setDate(d);
  }
  a.days &&
    ((c = this.getYear()),
    (b = 0 <= c && 99 >= c ? -1900 : 0),
    (a = new Date(new Date(c, this.getMonth(), this.getDate(), 12).getTime() + 864e5 * a.days)),
    this.setDate(1),
    this.setFullYear(a.getFullYear() + b),
    this.setMonth(a.getMonth()),
    this.setDate(a.getDate()),
    Fg(this, a.getDate()));
};
l.Db = function (a) {
  var b = this.getFullYear(),
    c = 0 > b ? "-" : 1e4 <= b ? "+" : "";
  return [c + u(Math.abs(b), c ? 6 : 4), u(this.getMonth() + 1, 2), u(this.getDate(), 2)].join(a ? "-" : "") + "";
};
l.equals = function (a) {
  return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate());
};
l.toString = function () {
  return this.Db();
};
var Fg = function (a, b) {
  a.getDate() != b && a.date.setUTCHours(a.date.getUTCHours() + (a.getDate() < b ? 1 : -1));
};
Gg.prototype.valueOf = function () {
  return this.date.valueOf();
};
var Hg = function (a, b, c, d, e, f, g) {
  this.date =
    "number" === typeof a
      ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
      : new Date(a && a.getTime ? a.getTime() : Date.now());
};
Ea(Hg, Gg);
l = Hg.prototype;
l.getHours = function () {
  return this.date.getHours();
};
l.getMinutes = function () {
  return this.date.getMinutes();
};
l.getSeconds = function () {
  return this.date.getSeconds();
};
l.getMilliseconds = function () {
  return this.date.getMilliseconds();
};
l.getUTCDay = function () {
  return this.date.getUTCDay();
};
l.getUTCHours = function () {
  return this.date.getUTCHours();
};
l.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
l.getUTCSeconds = function () {
  return this.date.getUTCSeconds();
};
l.getUTCMilliseconds = function () {
  return this.date.getUTCMilliseconds();
};
l.setHours = function (a) {
  this.date.setHours(a);
};
l.setMinutes = function (a) {
  this.date.setMinutes(a);
};
l.setSeconds = function (a) {
  this.date.setSeconds(a);
};
l.setMilliseconds = function (a) {
  this.date.setMilliseconds(a);
};
l.setUTCHours = function (a) {
  this.date.setUTCHours(a);
};
l.setUTCMinutes = function (a) {
  this.date.setUTCMinutes(a);
};
l.setUTCSeconds = function (a) {
  this.date.setUTCSeconds(a);
};
l.setUTCMilliseconds = function (a) {
  this.date.setUTCMilliseconds(a);
};
l.add = function (a) {
  Gg.prototype.add.call(this, a);
  a.hours && this.setUTCHours(this.date.getUTCHours() + a.hours);
  a.minutes && this.setUTCMinutes(this.date.getUTCMinutes() + a.minutes);
  a.seconds && this.setUTCSeconds(this.date.getUTCSeconds() + a.seconds);
};
l.Db = function (a) {
  var b = Gg.prototype.Db.call(this, a);
  return a
    ? b + "T" + u(this.getHours(), 2) + ":" + u(this.getMinutes(), 2) + ":" + u(this.getSeconds(), 2)
    : b + "T" + u(this.getHours(), 2) + u(this.getMinutes(), 2) + u(this.getSeconds(), 2);
};
l.equals = function (a) {
  return this.getTime() == a.getTime();
};
l.toString = function () {
  return this.Db();
};
l.clone = function () {
  var a = new Hg(this.date);
  a.mb = this.mb;
  a.nb = this.nb;
  return a;
};
var Ig = function () {},
  Kg = function (a) {
    if ("number" == typeof a) {
      var b = new Ig();
      b.Wc = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", u(c, 2));
        c = d.join("");
      }
      b.ic = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = Jg(a);
      b.kc = [c, c];
      b.Ca = { af: a, nc: a };
      b.Eb = [];
      return b;
    }
    b = new Ig();
    b.ic = a.id;
    b.Wc = -a.std_offset;
    b.kc = a.names;
    b.Ca = a.names_ext;
    b.Eb = a.transitions;
    return b;
  },
  Jg = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(u(Math.floor(a / 60) % 100, 2), ":", u(a % 60, 2));
    return b.join("");
  },
  Lg = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.Eb.length && b >= a.Eb[c]; ) c += 2;
    return 0 == c ? 0 : a.Eb[c - 1];
  },
  Mg = function (a, b) {
    a = a.Wc - Lg(a, b);
    return -1440 === a ? 0 : a;
  };
var Pg = function () {
    q(!0, "Pattern must be defined");
    q(void 0 !== Cg, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.yb = [];
    this.I = Cg;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (Ng && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < Og.length; ++c) {
        var d = a.match(Og[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.yb.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  Og = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  Qg = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
Pg.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - Mg(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.yb.length; ++f) {
    var g = this.yb[f].text;
    1 == this.yb[f].type ? c.push(Rg(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var Sg = function (a, b) {
    b = String(b);
    a = a.I || Cg;
    if (void 0 !== a.xd) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.xd + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  Ng = !1,
  Tg = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  Ug = function (a, b) {
    Tg(b);
    b = Qg(b);
    return a.I.dd[12 <= b && 24 > b ? 1 : 0];
  },
  Rg = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.I.gd[c] : a.I.hd[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), Sg(a, u(c, g));
      case "Y":
        return (
          (c = new Date(Dg(d.getFullYear(), d.getMonth(), d.getDate(), a.I.Gb, a.I.Fb)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          Sg(a, u(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.I.kd[c];
            break a;
          case 4:
            g = a.I.jd[c];
            break a;
          case 3:
            g = a.I.nd[c];
            break a;
          default:
            g = Sg(a, u(c + 1, g));
        }
        return g;
      case "k":
        return Tg(e), Sg(a, u(Qg(e) || 24, g));
      case "S":
        return Sg(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? u(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.I.wd[c] : a.I.pd[c];
      case "a":
        return Ug(a, e);
      case "b":
        return Ug(a, e);
      case "B":
        return Ug(a, e);
      case "h":
        return Tg(e), Sg(a, u(Qg(e) % 12 || 12, g));
      case "K":
        return Tg(e), Sg(a, u(Qg(e) % 12, g));
      case "H":
        return Tg(e), Sg(a, u(Qg(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.I.sd[c];
            break a;
          case 4:
            g = a.I.vd[c];
            break a;
          case 3:
            g = a.I.ud[c];
            break a;
          default:
            g = Sg(a, u(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.I.rd[c];
            break a;
          case 4:
            g = a.I.qd[c];
            break a;
          case 3:
            g = a.I.td[c];
            break a;
          default:
            g = Sg(a, u(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.I.od[c] : a.I.ld[c];
      case "d":
        return Sg(a, u(d.getDate(), g));
      case "m":
        return Tg(e), Sg(a, u(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return Tg(e), Sg(a, u(e.getSeconds(), g));
      case "v":
        return (f || Kg(c.getTimezoneOffset())).ic;
      case "V":
        return (
          (a = f || Kg(c.getTimezoneOffset())),
          2 >= g
            ? a.ic
            : 0 < Lg(a, c)
            ? void 0 !== a.Ca.fd
              ? a.Ca.fd
              : a.Ca.DST_GENERIC_LOCATION
            : void 0 !== a.Ca.nc
            ? a.Ca.nc
            : a.Ca.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = Dg(e.getFullYear(), e.getMonth(), e.getDate(), a.I.Gb, a.I.Fb)),
          Sg(a, u(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || Kg(c.getTimezoneOffset())), 4 > g ? a.kc[0 < Lg(a, c) ? 2 : 0] : a.kc[0 < Lg(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || Kg(c.getTimezoneOffset())),
          4 > g
            ? ((g = -Mg(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(u(Math.floor(g / 60) % 100, 2), u(g % 60, 2)),
              (g = a.join("")))
            : (g = Sg(a, Jg(Mg(b, c)))),
          g
        );
      default:
        return "";
    }
  };
var Vg = function () {
    this.Zc = "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    this.yc = [];
    this.Bc = [];
  },
  Xg = function (a, b, c, d, e) {
    if (r(bg(Vg).yc, a.id)) {
      var f = { timestamp: Wg.format(new Hg()), source: a.name, nf: b };
      xb(f, c || {});
      var g = [],
        h = [];
      Ra(bg(Vg).Bc, function (m) {
        var p = m.match(/%(\w+)/i)[1];
        null !== f && p in f && (g.push(m.replace(p, "s")), h.push(f[p]));
      });
      g.push(d);
      var k = g.join(" ");
      eb(h, Array.prototype.slice.call(arguments).slice(4));
      h.unshift(k);
      console.log.apply(console, h);
    }
  },
  Wg = new Pg(),
  Yg = { id: "background-page", name: "Background Page" },
  Zg = { id: "content-script", name: "Content Script" },
  $g = { id: "issues", name: "Issue processing" },
  ah = { id: "popup", name: "Popup" },
  bh = { id: "recording-page", name: "Recording Page" },
  D = Bd("LoggingEnabled") ? Xg : ob;
var ch = function (a, b) {
  a && (a = a.parentNode);
  for (var c = 0; a; ) {
    q("parentNode" != a.name);
    if (b(a)) return a;
    a = a.parentNode;
    c++;
  }
  return null;
};
ua.console && ua.console.createTask && ua.console.createTask.bind(ua.console);
var dh = function () {};
var eh = function (a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Xa = !1;
};
eh.prototype.stopPropagation = function () {
  this.Xa = !0;
};
eh.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var fh = (function () {
  if (!ua.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    b = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      }
    });
  try {
    var c = function () {};
    ua.addEventListener("test", c, b);
    ua.removeEventListener("test", c, b);
  } catch (d) {}
  return a;
})();
var hh = function (a, b) {
  eh.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.Qa = null;
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
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : gh[a.pointerType] || "";
    this.state = a.state;
    this.Qa = a;
    a.defaultPrevented && hh.oa.preventDefault.call(this);
  }
};
Ea(hh, eh);
var gh = ic({ 2: "touch", 3: "pen", 4: "mouse" });
hh.prototype.stopPropagation = function () {
  hh.oa.stopPropagation.call(this);
  this.Qa.stopPropagation ? this.Qa.stopPropagation() : (this.Qa.cancelBubble = !0);
};
hh.prototype.preventDefault = function () {
  hh.oa.preventDefault.call(this);
  var a = this.Qa;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var ih = "closure_listenable_" + ((1e6 * Math.random()) | 0);
var jh = 0;
var kh = function (a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.sb = e;
    this.key = ++jh;
    this.removed = this.gb = !1;
  },
  lh = function (a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.sb = null;
  };
var mh = function (a) {
  this.src = a;
  this.W = {};
  this.cb = 0;
};
mh.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.W[f];
  a || ((a = this.W[f] = []), this.cb++);
  var g = nh(a, b, d, e);
  -1 < g ? ((b = a[g]), c || (b.gb = !1)) : ((b = new kh(b, this.src, f, !!d, e)), (b.gb = c), a.push(b));
  return b;
};
mh.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.W)) return !1;
  var e = this.W[a];
  b = nh(e, b, c, d);
  return -1 < b ? (lh(e[b]), bb(e, b), 0 == e.length && (delete this.W[a], this.cb--), !0) : !1;
};
var oh = function (a, b) {
  var c = b.type;
  c in a.W && ab(a.W[c], b) && (lh(b), 0 == a.W[c].length && (delete a.W[c], a.cb--));
};
mh.prototype.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.W)
    if (!a || c == a) {
      for (var d = this.W[c], e = 0; e < d.length; e++) ++b, lh(d[e]);
      delete this.W[c];
      this.cb--;
    }
  return b;
};
mh.prototype.Tb = function (a, b, c, d) {
  a = this.W[a.toString()];
  var e = -1;
  a && (e = nh(a, b, c, d));
  return -1 < e ? a[e] : null;
};
mh.prototype.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return ub(this.W, function (f) {
    for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
    return !1;
  });
};
var nh = function (a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.sb == d) return e;
  }
  return -1;
};
var ph = "closure_lm_" + ((1e6 * Math.random()) | 0),
  qh = {},
  rh = 0,
  th = function (a, b, c, d, e) {
    if (d && d.once) sh(a, b, c, d, e);
    else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) th(a, b[f], c, d, e);
    else (c = uh(c)), a && a[ih] ? a.listen(b, c, xa(d) ? !!d.capture : !!d, e) : vh(a, b, c, !1, d, e);
  },
  vh = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = xa(e) ? !!e.capture : !!e,
      h = wh(a);
    h || (a[ph] = h = new mh(a));
    c = h.add(b, c, d, g, f);
    if (!c.proxy) {
      d = xh();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) fh || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(yh(b.toString()), d);
      else if (a.addListener && a.removeListener) q("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      rh++;
    }
  },
  xh = function () {
    var a = zh,
      b = function (c) {
        return a.call(b.src, b.listener, c);
      };
    return b;
  },
  sh = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) sh(a, b[f], c, d, e);
    else (c = uh(c)), a && a[ih] ? a.ra.add(String(b), c, !0, xa(d) ? !!d.capture : !!d, e) : vh(a, b, c, !0, d, e);
  },
  Ah = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Ah(a, b[f], c, d, e);
    else
      (d = xa(d) ? !!d.capture : !!d),
        (c = uh(c)),
        a && a[ih] ? a.ra.remove(String(b), c, d, e) : a && (a = wh(a)) && (b = a.Tb(b, c, d, e)) && Bh(b);
  },
  Bh = function (a) {
    if ("number" !== typeof a && a && !a.removed) {
      var b = a.src;
      if (b && b[ih]) oh(b.ra, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(yh(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        rh--;
        (c = wh(b)) ? (oh(c, a), 0 == c.cb && ((c.src = null), (b[ph] = null))) : lh(a);
      }
    }
  },
  yh = function (a) {
    return a in qh ? qh[a] : (qh[a] = "on" + a);
  },
  zh = function (a, b) {
    if (a.removed) a = !0;
    else {
      b = new hh(b, this);
      var c = a.listener,
        d = a.sb || a.src;
      a.gb && Bh(a);
      a = c.call(d, b);
    }
    return a;
  },
  wh = function (a) {
    a = a[ph];
    return a instanceof mh ? a : null;
  },
  Ch = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
  uh = function (a) {
    q(a, "Listener can not be null.");
    if ("function" === typeof a) return a;
    q(a.handleEvent, "An object listener must have handleEvent method.");
    a[Ch] ||
      (a[Ch] = function (b) {
        return a.handleEvent(b);
      });
    return a[Ch];
  };
var Dh = function () {
  this.ra = new mh(this);
  this.yd = this;
  this.Lc = null;
};
Ea(Dh, dh);
Dh.prototype[ih] = !0;
Dh.prototype.addEventListener = function (a, b, c, d) {
  th(this, a, b, c, d);
};
Dh.prototype.removeEventListener = function (a, b, c, d) {
  Ah(this, a, b, c, d);
};
Dh.prototype.dispatchEvent = function (a) {
  Eh(this);
  var b = this.Lc;
  if (b) {
    var c = [];
    for (var d = 1; b; b = b.Lc) c.push(b), q(1e3 > ++d, "infinite loop");
  }
  b = this.yd;
  d = a.type || a;
  if ("string" === typeof a) a = new eh(a, b);
  else if (a instanceof eh) a.target = a.target || b;
  else {
    var e = a;
    a = new eh(d, b);
    xb(a, e);
  }
  e = !0;
  if (c)
    for (var f = c.length - 1; !a.Xa && 0 <= f; f--) {
      var g = (a.currentTarget = c[f]);
      e = Fh(g, d, !0, a) && e;
    }
  a.Xa || ((g = a.currentTarget = b), (e = Fh(g, d, !0, a) && e), a.Xa || (e = Fh(g, d, !1, a) && e));
  if (c) for (f = 0; !a.Xa && f < c.length; f++) (g = a.currentTarget = c[f]), (e = Fh(g, d, !1, a) && e);
  return e;
};
Dh.prototype.listen = function (a, b, c, d) {
  Eh(this);
  return this.ra.add(String(a), b, !1, c, d);
};
var Fh = function (a, b, c, d) {
  b = a.ra.W[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.removed && g.capture == c) {
      var h = g.listener,
        k = g.sb || g.src;
      g.gb && oh(a.ra, g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && !d.defaultPrevented;
};
Dh.prototype.Tb = function (a, b, c, d) {
  return this.ra.Tb(String(a), b, c, d);
};
Dh.prototype.hasListener = function (a, b) {
  return this.ra.hasListener(void 0 !== a ? String(a) : void 0, b);
};
var Eh = function (a) {
  q(a.ra, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var Gh = function (a, b) {
  Dh.call(this);
  this.ub = a || 1;
  this.Cb = b || ua;
  this.sc = Ca(this.ke, this);
  this.Fc = Date.now();
};
Ea(Gh, Dh);
l = Gh.prototype;
l.enabled = !1;
l.ia = null;
l.setInterval = function (a) {
  this.ub = a;
  this.ia && this.enabled ? (this.stop(), this.start()) : this.ia && this.stop();
};
l.ke = function () {
  if (this.enabled) {
    var a = Date.now() - this.Fc;
    0 < a && a < 0.8 * this.ub
      ? (this.ia = this.Cb.setTimeout(this.sc, this.ub - a))
      : (this.ia && (this.Cb.clearTimeout(this.ia), (this.ia = null)),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(), this.start()));
  }
};
l.start = function () {
  this.enabled = !0;
  this.ia || ((this.ia = this.Cb.setTimeout(this.sc, this.ub)), (this.Fc = Date.now()));
};
l.stop = function () {
  this.enabled = !1;
  this.ia && (this.Cb.clearTimeout(this.ia), (this.ia = null));
};
var Hh = function () {
    this.Ab = {};
  },
  Ih = function (a, b, c) {
    var d = bg(Hh),
      e = d.Ab[a];
    e || ((e = {}), (d.Ab[a] = e));
    e[b] = c;
  },
  Jh = function (a) {
    delete bg(Hh).Ab[a];
  };
var Kh = function (a, b, c, d) {
  this.message = a;
  this.tabId = b;
  this.url = c;
  this.source = d;
  this.timings = {};
};
var F = document;
var Lh = function (a) {
  this.Ib = a;
  this.index = -1;
};
Lh.prototype.current = function () {
  q(0 <= this.index);
  return this.index < this.Ib.length ? this.Ib[this.index] : null;
};
var Mh = function (a) {
  Lh.call(this, Object.keys(a));
  this.object = a;
};
ra(Mh, Lh);
Mh.prototype.currentValue = function () {
  var a = this.current();
  return null == a ? null : this.object[a];
};
var G = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.pa = Nh(e);
    this.issueClass = 0;
    this.ma = g || [];
    this.o = !1;
    this.view = this.hint = this.la = null;
    this.context = {};
  },
  Nh = function (a) {
    return a
      ? function (b, c) {
          return a.call(this, c);
        }
      : nb;
  },
  Oh = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  Ph = function (a, b, c, d, e, f) {
    return new G(a, b, c, void 0, d, e, f);
  },
  Qh = n(Ph, "Debug", null),
  H = n(Ph, "Error", null),
  Rh = n(Ph, "Fine", null),
  Sh = n(Ph, "Hidden", null),
  I = n(Ph, "Info", null),
  Th = n(Ph, "Suggestion", null),
  Uh = n(Ph, "Warning", null),
  Vh = I("Implemented in %s"),
  Wh = I("Includes %s"),
  Xh = function (a) {
    return H(a, function (b) {
      return !gd(b.label);
    });
  },
  Yh = function (a, b, c) {
    b = Pa(c || b, Rd);
    return a == b.label;
  },
  Zh = function (a, b, c) {
    b = Pa(c || b, Rd);
    return x(a, b.label);
  },
  ai = function (a) {
    var b = "${" + a.text + "}",
      c = "not set" == a.label ? "" : a.label;
    Ae(a) || $h(Pa(a.parent, Rd), b, c);
    a.relatedIssues &&
      a.relatedIssues.forEach(function (d) {
        ai(d);
      });
  },
  $h = function (a, b, c) {
    a.label = a.label.replace(b, c);
    a.text = a.text.replace(b, c);
    Ae(a) || $h(Pa(a.parent, Rd), b, c);
  },
  bi = function (a) {
    return n(function (b) {
      return a(b.label);
    });
  };
G.prototype.Ka = function (a) {
  return 0 == a.label.length;
};
G.prototype.l = function (a) {
  for (var b = 0; b < arguments.length; b++) eb(this.ma, arguments[b]);
  return this;
};
var di = function (a, b, c) {
  b.category != a.category &&
    ((b.text = a.text),
    (b.category = a.category),
    (b.type = a.type),
    (b.infoLink = a.infoLink),
    b.relatedIssues && ((a = Pa(b, Rd)), ai(a), A(a, ci, c)));
};
G.prototype.rc = function (a) {
  a.category = this.category;
  a.infoLink = this.infoLink;
  return a;
};
G.prototype.Jb = function () {
  return !0;
};
G.prototype.clear = function () {
  this.qa = null;
  this.context = {};
  this.o = !1;
};
G.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.ma.length && (a.ma = Oh(this.ma));
  return a;
};
var ei = function (a, b, c) {
  return A(b, a, c);
};
G.prototype.S = function (a, b) {
  var c = b.template ? ni(this, b.template, a) : a;
  q(this.Jb(c), "Parameter mismatch for " + this.text);
  try {
    do {
      var d = this.pa(c, b);
      var e = "string" === typeof d || d ? A(b, this, "string" === typeof d ? d : "") : void 0;
      e
        ? (this.ma.forEach(function (f) {
            f.S(c, e);
          }, this),
          ai(e))
        : this.la &&
          (Array.isArray(this.la)
            ? this.la.forEach(function (f) {
                f.S(a, b);
              })
            : this.la.S(a, b));
    } while (this.o);
  } catch (f) {
    D($g, null, this, "Failed finding isues for " + this.text + ": " + f + "\n" + f.stack), ua.fail && ua.fail(this.text + ": " + f);
  }
  this.clear();
};
var ni = function (a, b, c) {
  var d = c;
  b.issueClass != a.issueClass && (1 == a.issueClass ? (d = (c && c.node) || c) : 2 == a.issueClass && (d = b.qa ? b.qa : c));
  return d;
};
G.prototype.otherwise = function (a) {
  this.la = a;
  return this;
};
G.prototype.setClass = function (a) {
  this.issueClass = a;
  this.ma.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var J = function (a, b) {
    a.format = b;
    return a;
  },
  oi = function (a, b) {
    a.pa = b;
    return a;
  },
  K = function (a, b) {
    a.hint = b;
    return a;
  },
  L = function (a, b) {
    a.infoLink = b;
    return a;
  },
  pi = function (a, b) {
    a.infoLink = "#" + b;
    return a;
  },
  M = function (a, b) {
    a.ma = b;
    return a;
  },
  qi = function (a, b) {
    a.type = b;
    return a;
  },
  N = function (a, b) {
    a.view = b;
    return a;
  },
  ci = Qh("__altered");
var ri = function (a, b, c, d, e, f, g, h) {
  G.call(this, a, b, c, d, void 0, g, h);
  this.Ea = e || null;
  this.pa = f || nb;
  this.issueClass = 1;
};
Ea(ri, G);
var si = function (a, b, c, d, e, f) {
    return new ri(a, b, c, void 0, void 0, d, e, f);
  },
  ti = n(si, "Tag", null),
  vi = n(si, "Bucket", null),
  P = n(si, "Error", null),
  wi = n(si, "Fine", null),
  xi = n(si, "Group", null),
  yi = n(si, "Hidden", null),
  zi = n(si, "Info", null),
  Ai = n(si, "Warning", null),
  Bi = n(si, "Suggestion", null),
  Ci = M(
    N(
      Bi("Tag is included in an iframe", function () {
        return self !== top;
      }),
      "Code Snippet"
    ),
    [
      N(
        zi(
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
  Di = Bi("Tag is included in an external script file", function (a) {
    return a.externalScript;
  }),
  Ei = N(
    wi(
      "Script source",
      function (a) {
        return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
      },
      "linked"
    ),
    "Code Snippet"
  ),
  Gi = function () {
    return N(
      wi(
        "HTML Snippet",
        function (a) {
          return Fi(this, a);
        },
        "snippet_html"
      ),
      "Code Snippet"
    ).l(
      wi("Included in an iframe", function () {
        try {
          return window.self != window.top;
        } catch (a) {
          return !0;
        }
      })
    );
  },
  Fi = function (a, b) {
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(F.location.href);
    return b && b.outerHTML ? ec(b.outerHTML, 1e3) : "";
  },
  Hi = function (a, b, c) {
    var d = "",
      e = F.location.href;
    c.externalScript &&
      ((d = "&line=" + c.textContent.substring(0, b).split("\n").length - 1), c.getAttribute && (e = c.getAttribute("src")));
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(e) + d;
    c = c.textContent;
    a = 500;
    d = b - 100;
    b = c;
    0 < d && ((b = c.substring(d)), (c = b.indexOf("\n")), 0 <= c && 100 > c && (b = b.substring(c)), (b = "..." + b), (a += 3));
    b.length > a && ((b = b.substring(0, a)), (c = b.lastIndexOf("\n")), 10 < c && (b = b.substring(0, c + 1)), (b += "..."));
    return Pc(b);
  },
  Ii = L(
    N(
      K(
        H("No HTTP response detected"),
        "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
      ),
      ""
    ),
    "https://support.google.com/tagassistant/answer/3059154#http_response"
  ),
  Ji = function (a, b) {
    return b.label;
  },
  Ki = function (a, b, c, d) {
    return M(
      J(
        oi(vi(a), function () {
          return !nb || "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [M(oi(J(ti(b), "group_status"), d || Ji), c || [])]
    );
  },
  Li = function (a, b, c, d, e) {
    return new ri("Tag", a, b, c, d, e, void 0, void 0);
  };
ri.prototype.Jb = function (a) {
  return "number" === typeof a || (void 0 !== a && void 0 !== a.nodeName);
};
ri.prototype.S = function (a, b) {
  a = "number" === typeof a ? F : a;
  if (a.externalScript) {
    if (!this.Ea || 0 == this.Ea.indexOf("//script")) return ri.oa.S.call(this, a, b);
  } else if (this.Ea) {
    var c = "function" === typeof this.Ea ? this.Ea(a, b) : this.Ea;
    if ("//body" == c) ri.oa.S.call(this, F.body, b);
    else {
      c = F.evaluate(c, F, null, XPathResult.ANY_TYPE, null);
      if (c.resultType == XPathResult.NUMBER_TYPE) return ri.oa.S.call(this, c.numberValue, b);
      if (c.resultType == XPathResult.UNORDERED_NODE_ITERATOR_TYPE || c.resultType == XPathResult)
        try {
          for (; (a = c.iterateNext()); ) ri.oa.S.call(this, a, b);
        } catch (d) {}
    }
  } else ri.oa.S.call(this, a, b);
};
var Mi = function (a, b) {
  a.Ea = b;
  return a;
};
var Ni = function (a, b, c, d, e, f) {
  G.call(this, a, b, c, d, void 0, f);
  this.pa = e || nb;
  this.issueClass = 4;
};
Ea(Ni, G);
var Oi = function (a, b) {
  var c = ["No Google Analytics HTTP responses because opted out code detected."];
  B(b, "URL") &&
    b.forEach(function (d) {
      (4 == d.issueClass || (c && 0 <= c.indexOf(d.text))) && ab(a, d);
    });
};
var Pi = function (a, b, c, d, e, f) {
  G.call(this, a, b, c, d, void 0, f);
  this.pa = e || this.Fd;
  this.issueClass = 8;
};
Ea(Pi, G);
Pi.prototype.Fd = function (a) {
  if (a[this.text]) {
    try {
      this.context = JSON.parse(a[this.text]);
    } catch (b) {}
    return a[this.text];
  }
  this.context = null;
  return !1;
};
var Qi = function (a) {
  this.missingError = a;
};
var Q = function (a, b) {
  this.hc = a;
  this.priority = b;
  this.R = this.eb = this.Ja = this.Ra = this.Pa = this.Nb = this.Ga = this.Lb = this.ka = null;
  this.uc = !1;
};
l = Q.prototype;
l.Mb = function (a) {
  this.eb || (this.eb = this.Y());
  tb(this.eb, function (b, c) {
    b.forEach(function (d) {
      Je(a.issues, d.category || "ignore template", function (e) {
        (e = e.text == c ? e : B(e, c)) && d.S(a, e);
      });
    });
  });
};
l.lb = function (a) {
  this.Ga || (this.Ga = this.sa());
  var b = be(a);
  this.Ga.forEach(function (c) {
    c.S(a, b);
  });
};
l.ac = function (a, b) {
  this.Pa || (this.Pa = this.Sa());
  var c = be(a);
  this.Pa.forEach(function (d) {
    d.S(b, c);
  });
};
l.Ob = function (a) {
  this.Ra || (this.Ra = this.pb());
  var b = be();
  this.Ra.forEach(function (c) {
    a.forEach(function (d) {
      c.S(d, b);
    });
  });
  return b.relatedIssues;
};
l.Pb = function (a) {
  if (-1 == a.tabId && !this.uc) return 0;
  this.Ja || (this.Ja = this.K());
  var b = this.hc;
  a.root || (a.root = {});
  if (void 0 !== a.root[b]) return 2;
  var c = be();
  this.Ja.forEach(function (d) {
    d.S(a, c);
  }, this);
  a.root[b] = Se(c.relatedIssues);
  z("DebugIssues") || Te(a.root[b]);
  return a.root[b].length ? 3 : 0;
};
l.Zb = function (a, b) {
  var c = this.hc;
  b.root && b.root[c] && 0 < b.root[c].length && Ri(this, a, $d(b.root[c]));
};
l.fc = function (a) {
  var b = {},
    c = this.hc;
  a.root &&
    a.root[c] &&
    1 < a.root[c].length &&
    a.root[c].forEach(function (d) {
      Sa(d.relatedIssues, function (e, f) {
        "Info" == e.type &&
          (b[d.text]
            ? b[d.text][e.text]
              ? b[d.text][e.text] == e.label && bb(d.relatedIssues, f)
              : (b[d.text][e.text] = e.label)
            : (b[d.text] = {}));
      });
    });
};
l.Rb = function () {
  return [];
};
l.Sb = function () {
  if (null === this.ka) {
    var a = {};
    this.ka = this.O()
      .filter(function (b) {
        return a[b.category] ? !1 : (a[b.category] = !0);
      })
      .map(function (b) {
        var c = La(b.category);
        b = La(b.infoLink);
        return new Od(c, b);
      });
  }
  return this.ka;
};
l.sa = function () {
  return [];
};
l.Sa = function () {
  return [];
};
l.pb = function () {
  return [];
};
l.rb = lb([]);
l.Y = function () {
  return {};
};
l.ib = function () {
  return !1;
};
l.isActive = function () {
  return this.Sb().some(function (a) {
    return se(a.name);
  });
};
l.list = function (a) {
  a = a || [];
  eb(a, this.O(), this.K(), this.sa(), this.Rb());
  return a;
};
l.Yb = function (a, b) {
  return a.text == b.text && a.label == b.label;
};
var Si = function (a, b, c) {
  var d = ye(b, "Bucket");
  return 0 < d.length
    ? ((c = ye(c, "Bucket")),
      c.forEach(function (e) {
        var f = Ya(d, function (g) {
          return e.text == g.text;
        });
        f
          ? e.relatedIssues.forEach(function (g) {
              var h = f.relatedIssues.filter(function (k) {
                return this.Yb(k, g);
              }, this);
              0 < h.length ? Wd(h[0], g) : A(f, g);
            }, this)
          : A(b, e);
      }, a),
      0 < c.length)
    : !1;
};
Q.prototype.xb = function (a, b) {
  7 == b.issueClass
    ? b.relatedIssues.forEach(Ca(this.xb, this, a))
    : (ee(b.relatedIssues, Ti.text), ee(a.relatedIssues, Ii.text), Si(this, a, b) || Wd(a, b));
};
var Ri = function (a, b, c) {
    c.forEach(function (d) {
      var e = te(b, "Tag");
      if (!Ui(this, e, d))
        if (
          ((e = e.filter(function (g) {
            return this.Yb(g, d);
          }, this)),
          e.length)
        )
          e.forEach(function (g) {
            this.xb(g, d);
          }, this),
            Vi(e);
        else {
          e = A(be(), d);
          e.issueClass = 7;
          for (
            b.push(e);
            cb(e.relatedIssues, function (g) {
              return "Info" != g.type || 4 > g.label.length || !(zb(d.text, g.label) || zb(d.text, g.label));
            });

          );
          Zd(d);
          var f = A(e, d);
          ee(f.relatedIssues, Ti.text) && A(e, Ti);
          Vi([e]);
        }
    }, a);
  },
  Ui = function (a, b, c) {
    var d = !1;
    if (2 != c.issueClass) return d;
    var e = B(c, "Redirected URL");
    if (null !== e) {
      var f = e.label;
      return b.some(function (g) {
        var h = Xd(g, "Redirected to", f);
        if (h) {
          h.deleted = "Resolved redirected issue";
          h = Le(h);
          var k = Le(e);
          Ae(h) && !Ae(k) ? (k = e) : (d = !0);
          var m = k,
            p = {};
          Vd(p, g, !0);
          Vd(p, m, !0);
          Wd(h, k);
        }
        return d;
      }, a);
    }
    return d;
  },
  Vi = function (a) {
    te(a, "Bucket").forEach(function (b) {
      b.relatedIssues.forEach(function (c, d) {
        c.text = c.text.replace("${bucketIndex}", d + 1 + "").replace("${bucketIndex}", d + 1 + "");
      });
    });
  };
var Wi = function (a, b, c, d, e, f, g, h) {
  G.call(this, a, b, d, e, void 0, g, h);
  this.issueClass = 2;
  this.lc = "string" === typeof c ? [c] : c;
  this.pa = f || nb;
};
Ea(Wi, G);
var Xi = function (a, b, c, d, e, f) {
    return new Wi(a, b, void 0, c, void 0, d, e, f);
  },
  Yi = n(Xi, "Tag", null),
  Zi = n(Xi, "Bucket", null),
  $i = n(Xi, "Debug", null),
  aj = n(Xi, "Error", null),
  bj = n(Xi, "Fine", null),
  cj = n(Xi, "Hidden", null),
  R = n(Xi, "Info", null),
  dj = n(Xi, "Warning", null),
  ej = n(Xi, "Suggestion", null),
  fj = K(
    aj("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  ),
  Ti = N(
    K(
      Th("Non-standard implementation"),
      "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
    ),
    ""
  ),
  gj = K(
    aj(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  ij = K(
    ej("Using non-secure code on secure page", function (a) {
      var b = S(a),
        c = hj(a);
      return "http" == b.ba && "https" == c.ba ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  jj = function (a, b, c, d, e, f) {
    var g = c || nb;
    c = function (h, k) {
      return k.label;
    };
    try {
      "function" === typeof e && (c = e);
    } catch (h) {
      console.log("Error while creating buckets " + a);
    }
    return M(
      J(
        oi(Zi(a), function (h, k) {
          return g.call(this, h, k) && "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [J(M(oi(Yi(b), "boolean" === typeof e && e ? g : c), d || []), void 0 !== f ? f : "group_status")]
    );
  },
  T = function (a, b, c, d, e, f, g) {
    return new Wi("Tag", a, b, c, d, e, f, g);
  },
  kj = function (a, b) {
    return bj(a, function (c) {
      return C(c.url).v.get(b);
    });
  },
  lj = function (a, b) {
    return R(a, function (c) {
      c = S(c).v.get(b);
      return "string" === typeof c ? c : !1;
    });
  },
  nj = function (a, b) {
    return N(
      R(
        "URL",
        function (c) {
          try {
            var d = S(c).v.ea();
            if ((a && !mj(d, a)) || (b && mj(d, b))) return !1;
          } catch (e) {}
          this.text = c.redirectedFrom ? "Redirected URL" : "URL";
          return c.url;
        },
        "link_expandable",
        [
          J(
            R("Post Data", function (c) {
              return c.postData;
            }),
            "value"
          ),
          ij,
          pi(
            K(
              H("URL Encoding Error", function (c) {
                return Db(c.label, "&amp;");
              }),
              'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
            ),
            "url_encoding"
          ),
          gj,
          fj,
          aj("Error while sending request: %s", function (c) {
            return void 0 !== c.error ? c.error : !1;
          }),
          cj("Redirected to", function (c) {
            return c.redirectUrl;
          }),
          cj("redirectedFrom", function (c) {
            return c.redirectedFrom;
          }),
          $i("requestId", function (c) {
            return c.requestId;
          }),
          aj("URL is not parsable.", function (c) {
            if (0 < c.url.indexOf("tiba=")) return !1;
            try {
              return !C(c.url).v.ea();
            } catch (d) {
              return !0;
            }
          })
        ]
      ),
      "URLs"
    );
  },
  mj = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !Ya(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  },
  U = nj();
Wi.prototype.Jb = function (a) {
  return void 0 !== a && void 0 !== a.url;
};
Wi.prototype.S = function (a, b) {
  (!this.lc || (a && oj(this, a.url))) && Wi.oa.S.call(this, a, b);
};
var oj = function (a, b) {
    return Array.isArray(a.lc)
      ? a.lc.some(function (c) {
          return w(new RegExp(c), b);
        })
      : !0;
  },
  hj = function (a) {
    var b = a.documentUri;
    b || ((b = C(a.documentUrl)), (a.documentUri = b));
    return b;
  },
  S = function (a) {
    var b = a.uri;
    if (!b) {
      b = C(encodeURI(a.url));
      if (a.postData)
        try {
          pf(b, a.postData, !0);
        } catch (c) {}
      a.uri = b;
    }
    return b;
  };
var pj = function (a, b, c, d, e, f) {
  G.call(this, a, b, c, d, void 0, f);
  this.pa = e || this.Ia;
  this.issueClass = 6;
  this.scope = "Tag";
};
Ea(pj, G);
var qj = function (a, b, c) {
    return new pj("Info", null, a, void 0, b, c);
  },
  rj = function (a, b) {
    return new pj("Hidden", a, "Validate Products", void 0, lb(b || "Validate Products"), "value_status");
  },
  sj = n(Ph, "Info", null),
  uj = function () {
    var a = tj;
    return new pj("Info", null, "%s", void 0, a ? a : lb("%s"), "option");
  };
pj.prototype.Ia = function (a, b) {
  return "Tag" == this.scope
    ? Cd(Me(b) + ":" + this.text)
    : "Domain" == this.scope && a.url
    ? ((a = C(a.url).J), Cd(a + ":" + this.text))
    : "Global" == this.scope
    ? Cd(this.text)
    : !1;
};
var wj = function () {
    this.Z = [];
    this.wa = {};
    this.wc = {};
    vj = {};
    this.Ya = this.Za = this.ka = null;
  },
  vj,
  xj =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  yj = {
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
  zj = /<!DOCTYPE html>\s*<html>\s*<body>\s*<\/body><\/html>/i;
M(
  J(
    I("Script", function (a) {
      if (null == this.o) this.o = 0;
      else if ((this.o++, this.o == F.scripts.length)) return (this.o = null), !1;
      var b = F.scripts[this.o];
      this.infoLink = b.src;
      if ((a = void 0 !== b.src && "" != b.src && !Fe(a.relatedIssues, b.src))) {
        a = bg(wj);
        b = b.src;
        var c;
        (c = Aj(b)) || ((c = C(b)), (c = !!yj[c.J]));
        a = !(c || Bj(b) || Cj(a, b));
      }
      return a;
    }),
    "link_expandable_with_path"
  ),
  [
    Th("Found <script> tag with empty src attribute.", function (a) {
      return a.label == F.location.href;
    })
  ]
);
var Ej = function (a) {
    var b = qj("Check Contained Tags", Dj, "update_button");
    b.category = a;
    return b;
  },
  Fj = function (a, b, c) {
    var d = {};
    b.forEach(function (e) {
      if ("Tag" == e.type && e.label != a && 5 < e.label.length && 128 > e.label.length) {
        var f = Wa(e.label.split(";"), function (g) {
          var h = new RegExp("\\\\x22" + g + "\\\\x22");
          return new RegExp("['\"/=;&]" + g + "['\"/=;&]").test(c) || h.test(c);
        });
        d[e.label] = f;
      } else d[e.label] = !1;
    });
    return d;
  },
  Gj = function (a, b, c) {
    return (
      a &&
      b.every(function (d) {
        return "Tag" != d.type || 2 > d.label.length || d.label == c || void 0 !== a[d.label];
      })
    );
  },
  Dj = function (a, b) {
    var c = bg(wj),
      d = Me(b),
      e = c.wc[d];
    e &&
      void 0 !== b &&
      Ih(a.tabId, d + ":" + this.text, function (f, g) {
        f = f.issues;
        for (var h = we(Pe(b), "URL"), k, m = 0; (k = h[m]); m++) Hj(c, f, d, k.label, g);
      });
    return e || "";
  },
  Hj = function (a, b, c, d, e) {
    try {
      vj[d] ||
        ((vj[d] = !0),
        Ij(
          d,
          Ca(function (f) {
            vj[d] = void 0;
            zj.test(f.responseText) ||
              ((f = Fj(c, b, f.responseText)),
              (this.wa[c] = this.wa[c] || {}),
              (this.wa[c][d] = f),
              (this.wc[c] = new Date().getTime() + ""),
              Jj(b, c, yb(d, f)),
              e());
          }, a)
        ));
    } catch (f) {
      D(Yg, null, null, "Cannot validate tags in " + d);
    }
  },
  Ij = function (a, b) {
    try {
      var c = new XMLHttpRequest();
      c.open("GET", a, !0);
      var d = !1;
      c.onreadystatechange = function () {
        d ||
          4 != c.readyState ||
          (qb(c.status) ? ((d = !0), b(c)) : 4 == c.readyState && D(Zg, null, null, "Ignored failed script " + a + " Status: " + c.status));
      };
      c.send();
    } catch (e) {
      D(Zg, null, null, "Ignored unreadable script " + a + " Reason:" + e);
    }
  },
  Lj = function (a) {
    Kj(bg(wj), a);
  },
  Kj = function (a, b) {
    ib(a.Z, b, function (c, d) {
      return c.priority > d.priority ? 1 : -1;
    });
  },
  Nj = function (a) {
    a.forEach(function (b) {
      var c = ye(b, "Error", "Bucket");
      Mj(c);
      ye(b, "Bucket").forEach(function (d) {
        d = ye(d, "Error");
        Mj(d);
      });
    });
  };
l = wj.prototype;
l.Mb = function (a) {
  de(a.issues, 6);
  Ve(a.issues);
  for (var b, c = 0; (b = this.Z[c]); c++) b.isActive() && b.Mb(a);
};
l.lb = function (a) {
  de(a, 3);
  for (var b, c = 0; (b = this.Z[c]); c++) b.isActive() && b.lb(a);
  Oe(a);
  Nj(a);
};
l.Ob = function (a) {
  for (var b = [], c, d = 0; (c = this.Z[d]); d++) c.isActive() && eb(b, c.Ob(a));
  return b;
};
l.Pb = function (a) {
  var b = new Date().getTime(),
    c = 0;
  if (!a.statusCode && 1e3 > b - a.timeStamp) return 1;
  for (var d = 0; (b = this.Z[d]); d++) b.isActive() && (c = Math.max(b.Pb(a), c));
  return c;
};
l.Zb = function (a, b) {
  for (var c, d = 0; (c = this.Z[d]); d++) c.isActive() && c.Zb(a, b);
};
l.fc = function (a) {
  for (var b, c = 0; (b = this.Z[c]); c++) b.isActive() && b.fc(a);
};
l.ib = function (a, b) {
  return this.Z.some(function (c) {
    return c.isActive() ? c.ib(a, b) : !1;
  });
};
var Oj = function () {
  var a = bg(wj);
  if (!a.ka) {
    a.ka = [];
    for (var b, c = 0; (b = a.Z[c]); c++) eb(a.ka, b.Sb());
    a.ka.sort(function (d, e) {
      return d.name.localeCompare(e.name);
    });
  }
  return a.ka;
};
wj.prototype.L = function () {
  if (!this.Za) {
    this.Za = [];
    for (var a, b = 0; (a = this.Z[b]); b++) a.isActive() && eb(this.Za, a.L());
  }
  return this.Za;
};
wj.prototype.rb = function () {
  if (!this.Ya) {
    this.Ya = [];
    for (var a, b = 0; (a = this.Z[b]); b++) a.isActive() && eb(this.Ya, a.rb());
  }
  return this.Ya;
};
var Mj = function (a) {
    a.forEach(function (b) {
      var c = 0;
      Ke(a, b.text, b.label, function (d) {
        if (0 < c) {
          d.deduped = !0;
          var e = b.otherRelatedIssues;
          d = d.id;
          r(e, d) || e.push(d);
        }
        c++;
      });
    });
  },
  Aj = function (a) {
    return xj.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  Bj = function (a) {
    return !(
      !z("ManualScriptParsing") ||
      !(z("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  Cj = function (a, b) {
    return a.Z.some(function (c) {
      return c.R && c.isActive()
        ? c.R.some(function (d) {
            return w(new RegExp(d), b);
          })
        : !1;
    });
  };
wj.prototype.ac = function (a, b) {
  for (var c, d = 0; (c = this.Z[d]); d++) c.isActive() && c.ac(a, b);
  this.lb(a);
};
var Jj = function (a, b, c) {
  var d = Fe(a, b);
  if (null != d && d.category) {
    var e = d.category;
    tb(c, function (f, g) {
      f &&
        ((f = qe(a, g)),
        ee(f, Ti.text),
        f.forEach(function (h) {
          A(h, Vh, e, b);
          0 == qe(d, [g]).length && A(d, Wh, h.category || "", g);
        }));
    });
  }
}; /*

 SPDX-License-Identifier: Apache-2.0
*/
var Pj = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var Qj = {};
var Rj = function () {},
  Sj = function (a, b) {
    if (b !== Qj) throw Error("Bad secret");
    this.ae = a;
  };
ra(Sj, Rj);
Sj.prototype.toString = function () {
  return this.ae;
};
var Tj = ha([""]),
  Uj = ia(["\x00"], ["\\0"]),
  Vj = ia(["\n"], ["\\n"]),
  Wj = ia(["\x00"], ["\\u0000"]),
  Xj = ha([""]),
  Yj = ia(["\x00"], ["\\0"]),
  Zj = ia(["\n"], ["\\n"]),
  ak = ia(["\x00"], ["\\u0000"]);
function bk(a) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!ck && a === a.raw) ||
    !((ck && !dk) || ek(a)) ||
    1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function ek(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function fk(a) {
  return -1 === a.toString().indexOf("`");
}
var ck =
    fk(function (a) {
      return a(Tj);
    }) ||
    fk(function (a) {
      return a(Uj);
    }) ||
    fk(function (a) {
      return a(Vj);
    }) ||
    fk(function (a) {
      return a(Wj);
    }),
  dk = ek(Xj) && ek(Yj) && ek(Zj) && ek(ak);
var gk = [],
  hk = function (a) {
    var b = yc(zc(), "safevalues").Xb;
    b && Ac(b, oc, "A URL with content '" + a + "' was sanitized away.");
  };
-1 === gk.indexOf(hk) && gk.push(hk);
!Ub("Android") || $b();
$b();
Zb();
q(!0);
var ik = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
  jk = Math,
  kk = jk.log2,
  lk = Math.max,
  mk = lk.apply,
  nk = Object.values({ Ge: 1, Ee: 2, De: 4, Ue: 8, Te: 16, Pe: 32, pe: 64, df: 128, Ae: 256, ze: 512, Fe: 1024 }),
  ok;
if (nk instanceof Array) ok = nk;
else {
  for (var pk = ja(nk), qk, rk = []; !(qk = pk.next()).done; ) rk.push(qk.value);
  ok = rk;
}
q(10 === kk.call(jk, mk.call(lk, Math, ok)));
var sk = Object.getOwnPropertyDescriptor(Array.prototype, "Ld");
Object.defineProperties(Array.prototype, {
  Ld: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = tk(this),
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
      var d = uk(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return sk ? sk.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var tk = ik
  ? function (a) {
      Ma(a, "state is only maintained on arrays.");
      return a[ik] | 0;
    }
  : function (a) {
      Ma(a, "state is only maintained on arrays.");
      return a.lf | 0;
    };
function uk(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var vk = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var wk = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    xk = {};
  Object.defineProperties(vk, ((xk[Symbol.hasInstance] = { value: wk, configurable: !1, writable: !1, enumerable: !1 }), xk));
  q(vk[Symbol.hasInstance] === wk, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var zk = yk;
  new Proxy(
    {},
    {
      getPrototypeOf: zk,
      setPrototypeOf: zk,
      isExtensible: zk,
      preventExtensions: zk,
      getOwnPropertyDescriptor: zk,
      defineProperty: zk,
      has: zk,
      get: zk,
      set: zk,
      deleteProperty: zk,
      apply: zk,
      construct: zk
    }
  );
}
function yk() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function Ak() {}
(function () {
  var a = ua.jspbGetTypeName;
  ua.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : Ak;
})(); /*
 SPDX-License-Identifier: Apache-2.0 */
var Bk = Object.prototype.hasOwnProperty;
function Ck() {}
Ck.prototype = Object.create(null);
function Dk(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (Bk.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function Ek(a, b, c) {
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
function Fk() {
  var a = new Ck();
  a.__default = Ek;
  a.style = Dk;
  return a;
}
Fk();
var Gk = Fk();
var Hk = ha(["data-soyloggingfunction-"]);
(function (a) {
  bk(a);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  Pj.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  return new Sj(b, Qj);
})(Hk);
yc(zc(), "api_idom");
Gk.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
Gk.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
Gk.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var Ik = {
  "not-working": "Critical Issues",
  "working-with-warnings": "Minor Issues",
  "working-with-suggestions": "Suggestions",
  working: "Working"
};
vb({ ue: "not-working", bf: "working-with-suggestions", ff: "working-with-warnings", jf: "working" }).map(function (a) {
  return { label: a, value: Ik[a] || "Details" };
});
var Jk = function () {
  this.issues = [];
  this.lastUpdated = -1;
  this.recordings = new rg();
  this.requiresReload = !1;
  this.state = new Qf();
  this.tabId = -2;
  this.domain = this.url = this.title = "";
  this.popupState = "Stale";
  this.recording = "disabled";
  this.recordingEnabledTab = "";
};
var Kk,
  Lk = function (a) {
    a = C(a);
    return !!Yc(bg(wj).L(), a);
  },
  Mk = function (a) {
    var b = chrome.runtime.getURL("/").slice(0, -1);
    return a === b;
  },
  Nk = { urls: ["http://*/*", "https://*/*"], types: "main_frame sub_frame script image object xmlhttprequest other".split(" ") },
  Ok = [],
  Pk = {},
  V = {};
Da("tvt.statusInfos", V);
var Qk = new Tf(-1, "", "init", ""),
  Rk = new Tf(-1, ""),
  Sk = null,
  Tk = "b",
  Uk = "images/product-icon/tag_assistant-19.png",
  Xf = { name: "Tag Assistant Legacy (by Google)" },
  Vk = {},
  Wk = {
    "http://www.google-analytics.com/ga.js": "http://www.google-analytics.com/u/ga_debug.js",
    "https://www.google-analytics.com/ga.js": "https://www.google-analytics.com/u/ga_debug.js",
    "https://ssl.google-analytics.com/ga.js": "https://ssl.google-analytics.com/u/ga_debug.js",
    "http://stats.g.doubleclick.net/dc.js": "http://stats.g.doubleclick.net/dc_debug.js",
    "https://stats.g.doubleclick.net/dc.js": "https://stats.g.doubleclick.net/dc_debug.js",
    "http://www.google-analytics.com/analytics.js": "http://www.google-analytics.com/analytics_debug.js",
    "https://www.google-analytics.com/analytics.js": "https://www.google-analytics.com/analytics_debug.js"
  },
  Xk = new RegExp(gc() + "(internal/)?\\w*\\?gta=true.*"),
  Yk = n(t, "Found %s and %s.");
Da("tvt.dump", function () {
  ie(Zk().issues);
});
var $k = function (a) {
  return "recording" == vg(a) && 120 > xg().length;
};
Da("tvt.ls", function (a) {
  a = a || V;
  var b = [],
    c = 0;
  if ("object" == typeof a) {
    if ("Array" == Object.prototype.toString.call(a).slice(8, -1))
      for (var d = 0, e = a.length; d < e; d++) {
        c += 8;
        try {
          var f = Of(a[d], 0, b);
          c += f;
          console.log(d + ": " + f);
        } catch (g) {
          console.log(d + ": " + g);
        }
      }
    else
      for (d in a)
        if (a.hasOwnProperty(d)) {
          c += 8;
          try {
            (e = Of(a[d], 0, b)), (c += e), console.log(d + ": " + e);
          } catch (g) {
            console.log(d + ": " + g);
          }
        }
    console.log("Total: " + c);
  } else console.log(Of(a));
});
var bl = function (a, b, c, d) {
    var e = "images/extension-icon/tag_assistant_";
    e =
      ("number" === typeof c ? (9 < c ? e + "9" : 0 == c ? e + "static" : e + c) : e + c) +
      ("disabled" == vg(a) ? "_chrome_only-" : "_recording-");
    chrome.browserAction.setIcon({ tabId: a, path: e + (d + "19.png") }, function () {
      al(a) || chrome.browserAction.setTitle({ tabId: a, title: Xf.name + "\n" + b });
    });
  },
  cl = function (a) {
    chrome.browserAction.setIcon({ tabId: a, path: Uk }, function () {
      al(a) || chrome.browserAction.setTitle({ tabId: a, title: Xf.name });
    });
  },
  dl = function (a) {
    var b = V[a];
    if (z("ShowWelcomeScreen")) cl(a);
    else {
      var c;
      (c = !b) ||
        ((c = b.page.url),
        (c =
          (null != c && 0 <= c.indexOf("https://chrome.google.com")) ||
          /^chrome:\/\/.*?/.test(c) ||
          /_\/chrome\/newtab/.test(c) ||
          (0 == c.indexOf("chrome") && !/^chrome-extension:\/\/[^\/]+\/tour.html$/.test(c))));
      if (c || Aj(b.page.url)) bl(a, "v" + chrome.runtime.getManifest().version, "static", Tk);
      else if (b.requiresReload) cl(b.tabId);
      else {
        c = !Bd("ShowIgnoredIssues");
        for (var d = b.issues, e = [], f, g = 0; (f = d[g]); g++)
          (c && f.ignored) || f.deleted || f.deduped || "Hidden" == f.type || ((f = A(Td, f)), e.push(f));
        d = te(e, "Tag", c).length;
        g = Ue(e, "Error", c);
        f = 0 < g ? 0 : Ue(e, "Warning", c);
        var h = 0 < g + f ? 0 : Ue(e, "Suggestion", c);
        e = Nf(d, "tag");
        c = d;
        g
          ? ((b = Nf(g, "error")), (b = Yk(e, b)), (e = "r"))
          : f
          ? ((b = Nf(f, "warning")), (b = Yk(e, b)), (e = "y"))
          : h
          ? ((b = Nf(h, "suggestion")), (b = Yk(e, b)), (e = "b"))
          : d
          ? ((b = t("Found %s.", e)), (e = "g"))
          : ((b = t("Nothing found on %s.", b.page.title)), (c = "static"), (e = Tk));
        bl(a, b, c, e);
      }
    }
  },
  fl = function (a, b) {
    var c = b.requestId + b.url,
      d = {};
    try {
      var e = b.url;
      b.redirectUrl && (a.redirects[b.redirectUrl] = e);
      a.redirects[e] && (d.redirectedFrom = a.redirects[e]);
      d.tabId = b.tabId;
      d.documentUrl = a.page.url;
      d.frameId = b.frameId;
      d.parentFrameId = b.parentFrameId;
      d.error = b.error;
      d.method = b.method;
      d.redirectUrl = b.redirectUrl;
      d.requestId = b.requestId;
      d.timeStamp = b.timeStamp;
      d.url = e;
      d.requestHeaders = b.requestHeaders;
      if (b.requestBody && el(b)) {
        var f = b.requestBody,
          g = f && f.raw && f.raw[0] && f.raw[0].bytes,
          h;
        if ((h = g && 3e4 > g.byteLength)) {
          var k = new Uint8Array(g),
            m = db(k);
          e = [];
          for (g = f = 0; f < m.length; ) {
            var p = m[f++];
            if (128 > p) e[g++] = String.fromCharCode(p);
            else if (191 < p && 224 > p) {
              var v = m[f++];
              e[g++] = String.fromCharCode(((p & 31) << 6) | (v & 63));
            } else if (239 < p && 365 > p) {
              v = m[f++];
              var E = m[f++],
                O = m[f++];
              k = (((p & 7) << 18) | ((v & 63) << 12) | ((E & 63) << 6) | (O & 63)) - 65536;
              e[g++] = String.fromCharCode(55296 + (k >> 10));
              e[g++] = String.fromCharCode(56320 + (k & 1023));
            } else (v = m[f++]), (E = m[f++]), (e[g++] = String.fromCharCode(((p & 15) << 12) | ((v & 63) << 6) | (E & 63)));
          }
          h = e.join("");
        }
        d.postData = h || "";
        var oa = b.requestBody,
          Ga = oa && oa.raw && oa.raw[0] && oa.raw[0].bytes;
        d.bodySize = Ga && Ga.byteLength;
      }
      a.requests[c] = d;
    } catch ($a) {
      D(Yg, b.tabId, null, "Error while storing data for requestId: %s, Error: %O, Request %s", c, $a, b);
    }
  },
  gl = function (a, b) {
    var c = {};
    try {
      var d = b.url;
      if (b.redirectUrl) {
        var e = { redirectedFrom: d };
        e.timeStamp = b.timeStamp;
        a.redirects[b.redirectUrl] = e;
      }
      a.redirects[d] && (c.redirectedFrom = a.redirects[d].redirectedFrom);
      c.tabId = b.tabId;
      c.documentUrl = a.page.url;
      c.redirects = a.page.redirects;
      c.type = b.type;
      c.frameId = b.frameId;
      c.parentFrameId = b.parentFrameId;
      c.error = b.error;
      c.ip = b.ip;
      c.fromCache = b.fromCache;
      c.redirectUrl = b.redirectUrl;
      c.requestId = b.requestId;
      c.statusCode = b.statusCode;
      c.statusLine = b.statusLine;
      c.timeStamp = b.timeStamp;
      c.responseHeaders = b.responseHeaders;
      c.url = d;
      var f = b.requestId + d,
        g = a.requests[f];
      g && (c.postData = g.postData);
      a.responses[f] = c;
    } catch (h) {
      console.error("Error while storing data for " + b.url + ": " + h);
    }
    return c;
  },
  il = function (a) {
    if ("Capturing" == Pk[a] || -1 == a) return !0;
    var b = Bd("ManualChecks");
    a = hl(a);
    return !b || (Nd(a.page.domain) && !a.requiresReload);
  },
  ml = function (a, b) {
    var c = b.tabId;
    try {
      var d = b.url;
      if (il(c)) {
        var e = hl(c),
          f = b.type;
        if (("script" != f && "xmlhttprequest" != f) || !Aj(d))
          if (jl(b)) {
            var g = gl(e, b);
            g.lifecycle = a;
            kl(e, g, !1);
          } else ll(b) && $k(c) && gl(e, b);
      }
    } catch (h) {
      console.error(c + ": Error while handling " + a + " for " + b.url + ": " + h);
    }
  },
  nl = function (a) {
    var b = "";
    try {
      b = a.tabId;
      var c = z("gaDebug"),
        d = hl(b).page.url,
        e = a.url,
        f = Bd("ManualChecks"),
        g = "on" == c && "Capturing" == Pk[b],
        h = "auto" == c && (!f || (d && Nd(d)));
      if (Wk[e] && (g || h)) return { redirectUrl: Wk[e] };
    } catch (k) {
      console.log(b + ": GA Redirect Error", k);
    }
  },
  pl = function (a) {
    chrome.permissions.contains({ permissions: ["management"] }, function (b) {
      b &&
        chrome.management.getAll &&
        chrome.management.getAll(function (c) {
          null !== c && ((Ok = bg(wj).Ob(c)), ol(a));
        });
    });
  },
  kl = function (a, b, c) {
    var d = $k(a.tabId),
      e = bg(wj),
      f = e.Pb(b);
    0 == f
      ? (d && ll(b)) || ql(b, a)
      : (3 == f || (2 == f && c)) &&
        (a = rl(a, b)) &&
        -1 != a.tabId &&
        (e.Zb(a.issues, b),
        z("DebugIssues") || e.fc(b),
        3 == f && ((a.updateTagsRequired = !0), (a.updateDomRequired = !0), chrome.tabs.get(a.tabId, sl)));
  },
  ql = function (a, b) {
    a = a.requestId + a.url;
    delete b.requests[a];
    delete b.responses[a];
  },
  rl = function (a, b) {
    var c = a;
    if (-1 == a.tabId) {
      var d = b.url,
        e = null;
      try {
        e = C(d);
      } catch (k) {
        return console.log("Error while parsing URL for orphan request: %o %o", b, k), null;
      }
      var f = "www.google-analytics.com" == e.J;
      if (f) {
        var g = f && zf(e, "utmac");
        e = f && zf(e, "utmhn");
        if ("UA-33463431-1" == g) return ql(b, a), null;
        if (e && /[a-z]+/.test(e)) return ql(b, a), console.log("Some Extension " + e + " send tracking request ", d), null;
      }
      d = b.requestId + d;
      g = bg(wj);
      g = g.ib.bind(g, b);
      e = {};
      for (var h in V) g.call(void 0, V[h], h, V) && (e[h] = V[h]);
      1 == Object.keys(e).length
        ? ((h = vb(e)[0]),
          il(h.tabId) && ((c = h), (c.responses[d] = b), (b.behindTheScenes = !0)),
          a.requests[d] && (c.requests[d] = a.requests[d]))
        : console.error("Orphan request: %o could not be associated to any tab.", b);
      ql(b, a);
    }
    return c;
  },
  tl = function (a) {
    if ("recording" == vg(a)) {
      var b = xg().length;
      if (120 <= b) b = "RecordingMaxQuota";
      else if (0 == b % 40) b = "RecordingReachedThreshold";
      else return;
      chrome.tabs.sendMessage(a, { message: b, tabId: a });
    }
  },
  ol = function (a) {
    Jh(a);
    var b = Zk(a);
    if (b)
      if (il(b.tabId)) {
        We(b.issues);
        var c = be();
        b.issues = c.relatedIssues;
        b.lastUpdated = new Date().getTime();
        a = bg(wj);
        for (var d, e = 0; (d = b.frames[e]); e++) {
          var f = be($d(b.domIssues[d] || []));
          b.variables[d] && a.ac(f.relatedIssues, $d(b.variables[d]));
          Ud(c, f.relatedIssues);
        }
        de(c.relatedIssues, 4, !0);
        Ud(c, $d(Ok));
        for (var g in b.responses) kl(b, b.responses[g], !0);
        if (b.domChecksFinished) {
          g = b.issues;
          c = b.failedScripts;
          d = n(ul, b);
          e = [];
          var h;
          for (f = 0; (h = a.Z[f]); f++) h.R && h.isActive() && (h.Lb || (h.Lb = h.K(!1)), eb(e, h.Lb));
          for (f = 0; (h = e[f]); f++) {
            h = ke(g, h.category || "");
            for (var k, m = 0; (k = h[m]); m++) {
              var p = Me(k);
              a.wa[p] = a.wa[p] || {};
              k = we(k, "URL");
              for (var v, E = 0; (v = k[E]); E++) {
                var O = v.label;
                -1 == c.indexOf(O)
                  ? a.wa[p][O] && Gj(a.wa[p][O], g, p)
                    ? Jj(g, p, a.wa[p][O])
                    : Hj(a, g, p, v.label, d)
                  : console.log("Ignoring failed external script " + O);
              }
            }
          }
        }
        if ($k(b.tabId)) {
          a = {};
          g = b || Qk;
          for (var oa in g.responses) a[g.responses[oa].url] = {};
          chrome.tabs.sendMessage(g.tabId, { message: "Timings", tabId: g.tabId, url: g.page.url, timings: a });
        }
        ul(b);
      } else dl(a);
  },
  ul = function (a) {
    var b = bg(wj);
    b.lb(a.issues);
    b.Mb(a);
    if (a.page.domain) {
      b = a.page.domain;
      var c = a.issues;
      Ed(b) && Ne(b, c);
    }
    z("DebugIssues") || Te(a.issues);
    a.updateTagsRequired = !1;
    (b = Zk()) && a.tabId == b.tabId && dl(b.tabId);
  },
  sl = function (a) {
    if (!al(a) && a && a.active)
      if ((Qk = V[a.id])) {
        Qk.lastVisited = Date.now();
        var b = Zk(a.id);
        if (b.updateTagsRequired) ol(b.tabId);
        else {
          if (b.page.domain) {
            var c = b.page.domain,
              d = b.issues;
            Ed(c) && Ne(c, d);
          }
          dl(b.tabId);
        }
        b.updateDomRequired && vl(b.tabId, "HttpUpdate");
        wl(b.tabId, a.id, b.page.url);
      } else dl(a.id);
  },
  vl = function (a, b) {
    var c = V[a];
    c &&
      ((c.domChecksReload = !0),
      window.setTimeout(function () {
        var d = V[a];
        d && d.domChecksReload && (xl("DomTags", a, d.page.url, b), (c.domChecksReload = !1));
      }, 5123));
  },
  wl = function (a, b, c) {
    var d = {},
      e = "popup2.html?utm_source=ext";
    if ((a = b || a)) (e += "&tabId=" + a), (d.tabId = a);
    d.popup = c ? e + "&url=" + c : e;
    chrome.browserAction.setPopup(d);
  },
  hl = function (a, b, c, d) {
    if (-1 == a) return Rk;
    var e = V[a],
      f = c && "main_frame" == c.type,
      g = f && c.requestId,
      h = !e || (f && g != e.page.id),
      k = h || e.page.id == g;
    h && ((e = new Tf(a, b || "")), (V[a] = e), f && ((e.page.id = g), (e.page.timestamp = c.timeStamp)));
    (k || d) && chrome.tabs.get(a, yl);
    return e;
  },
  yl = function (a) {
    if ((a || !chrome.runtime.lastError || !chrome.runtime.lastError.message.match(/no tab with id/i)) && a && V[a.id]) {
      var b = V[a.id];
      b.status = a.status;
      b.page.title = a.title;
      Sf(b, a.url);
    }
  },
  zl = function (a) {
    a = hl(a, "", null, !0);
    var b = ug();
    "disabled" == b.na ||
      b.Qc.has(a.page.id) ||
      a.tabId != b.X ||
      ("enabled" == b.na && (b.na = "recording"), b.Qc.add(a.page.id), b.Bb.push(a), (b.Ec = Date.now()));
  },
  Al = function (a) {
    var b = vg(a),
      c = {};
    c["RecordingTab" + a] = b;
    xb(nd, c);
    dl(a);
    wl(a);
  },
  Bl = function () {
    chrome.permissions.contains({ permissions: ["management"] }, function (a) {
      if (a)
        try {
          var b = chrome.i18n.getMessage("@@extension_id");
          chrome.management.get(b, function (c) {
            Xf.name = c.name;
            Xf.version = c.version.match(/([0-9]+\.[0-9]+)/)[1];
            Xf.comment = c.description;
            0 < c.name.indexOf("Dev")
              ? ((Tk = "r"), (Uk = "images/product-icon/tag_assistant_dev-19.png"))
              : 0 < c.name.indexOf("Internal")
              ? ((Tk = "g"), (Uk = "images/product-icon/tag_assistant_internal-19.png"))
              : 0 < c.name.indexOf("Test") && ((Tk = "y"), (Uk = "images/product-icon/tag_assistant_test-19.png"));
          });
        } catch (c) {}
    });
  },
  Dl = function () {
    chrome.runtime.onConnect.addListener(function (a) {
      "popup" == a.name &&
        (Sk && (console.log("Background script already connected to another popup tab. Disconnecting..."), Sk.disconnect()),
        (Sk = a),
        D(ah, null, a, "Connected to popup"),
        a.onMessage.addListener(Cl),
        a.onDisconnect.addListener(function () {
          Sk = null;
        }));
    });
  },
  Fl = function (a, b, c) {
    if (b.tab) {
      var d = b.tab.id;
      D(Zg, d, a, "Received message for %s: %O", a.message, a);
      var e = hl(d, b.tab.url),
        f = e.frames,
        g = a.url;
      r(f, g) || f.push(g);
      switch (a.message) {
        case "DomTags":
          Sf(e, b.tab.url),
            (e.domChecksFinished && !e.isManualCheck) ||
              z("IgnoreExternalScripts") ||
              xl("ExternalScriptTags", d, b.tab.url, a.message + " finished"),
            (e.domChecksFinished = !0),
            (e.updateDomRequired = !1);
        case "ExternalScriptTags":
          (c = a.issues) && c.length && (e.domIssues[a.url] = c);
          break;
        case "GtaAnalyze":
          break;
        case "JsVariables":
          (c = a.issues) && c.length && (e.variables[a.url] = c);
          break;
        case "RecordingReachedThreshold":
        case "RecordingMaxQuota":
          c = 120;
          "RecordingReachedThreshold" == a.message && (c = 40);
          D(bh, d, null, "Recording reached a limit of %s pages. Still continued? %s", c, a["continue"] ? "Yes" : "No");
          a["continue"] || zg();
          return;
        case "Timings":
          for (var h in e.responses)
            (c = e.responses[h]), a.timings[c.url] && a.timings[c.url].length && (c.timings = a.timings[c.url].shift());
          return;
        case "GetRecordedIssues":
          if (!b || !Mk(b.origin)) return;
          e = Ag();
          a.tabId && ((a = hl(a.tabId)), Se(a.issues), (e.statusInfos = [a]));
          D(bh, ug().X, null, "Sending recorded status from background: %O", e);
          c(e);
          return;
        case "LoadScript":
          return El(a.url, c), !0;
        default:
          console.log(d + ": Message " + a.message + " not caught.");
      }
      ol(b.tab.id);
    } else console.log("Message from the extension sender " + b, a);
  },
  Hl = function () {
    chrome.tabs.onActivated.addListener(function (a) {
      chrome.tabs.get(a.tabId, Gl);
    });
  },
  Gl = function (a) {
    var b;
    if ((b = z("FollowLinks") && a.openerTabId)) (b = vg(a.openerTabId)), (b = ("recording" == b || "enabled" == b) && 120 > xg().length);
    b && a.url && !zb(a.url, "chrome-extension") && ((b = a.id), (ug().X = b), zl(b), (Pk[b] = "Enabled"), Al(b));
    sl(a);
  },
  Il = function () {
    chrome.tabs.onUpdated.addListener(function (a, b, c) {
      yl(c);
      sl(c, !0);
    });
  },
  Jl = function (a) {
    Jh(a);
    delete V[a];
    ug().X == a && zg();
    delete Pk[a];
  },
  ll = function (a) {
    return "main_frame" == a.type || "sub_frame" == a.type;
  },
  el = function (a) {
    return !!Yc(bg(wj).rb(), S(a));
  },
  jl = function (a) {
    return !!Yc(bg(wj).L(), S(a));
  },
  Ll = function (a) {
    try {
      var b = a.tabId,
        c = "main_frame" == a.type;
      c && "Enabled" == Pk[b] && ((Pk[b] = "Capturing"), Kl(b));
      var d = hl(b, a.url, a);
      il(b) &&
        (el(a)
          ? fl(d, a)
          : (c
              ? zl(b)
              : d.page.timestamp >= a.timeStamp &&
                D(Yg, b, null, "Request times and IDs should be in ascending order. Failure for request %s - %O", a.requestId, {
                  status: d,
                  request: a
                }),
            $k(b) && (jl(a) || ll(a)) && fl(d, a)));
    } catch (e) {
      console.error("onBeforeRequest_: " + e, a);
    }
  },
  Ml = function (a) {
    try {
      for (var b = a.responseHeaders, c = b.length - 1; 0 <= c; --c) {
        var d = b[c].name.toLowerCase();
        ("x-frame-options" == d || "frame-options" == d || 0 <= d.indexOf(" ")) && b.splice(c, 1);
      }
      return { responseHeaders: b };
    } catch (e) {
      console.error("onHeadersReceivedListener_: " + e, a);
    }
  },
  Nl = function () {
    Kk = function (a) {
      var b = a.tabId,
        c = a.url;
      if (il(b)) {
        var d = hl(b);
        d && $k(b) && (jl(a) || ll(a)) && (b = d.requests[a.requestId + c]) && (b.requestHeaders = a.requestHeaders);
      }
    };
    chrome.webRequest.onSendHeaders.addListener(Kk, Nk, ["requestHeaders"]);
  },
  Ol = function () {
    "on" == z("gaDebug")
      ? chrome.webRequest.onBeforeRequest.hasListener(nl) ||
        chrome.webRequest.onBeforeRequest.addListener(nl, { types: ["script", "xmlhttprequest"], urls: Object.keys(Wk) }, ["blocking"])
      : chrome.webRequest.onBeforeRequest.hasListener(nl) && chrome.webRequest.onBeforeRequest.removeListener(nl);
  },
  Pl = function () {
    chrome.webRequest.onCompleted.addListener(
      function (a) {
        var b = a.url;
        if (zb(b, fc())) {
          var c = C(b);
          if (Ab(c.A, "/analyze")) {
            c = a.tabId;
            var d = { message: "GtaAnalyze", tabId: c, statusCode: a.statusCode };
            D(bh, c, null, "HAR analysis [%s] is complete, status is %s", b, a.statusCode);
            chrome.tabs.sendMessage(c, d);
            return;
          }
        }
        ml("onCompleted", a);
      },
      Nk,
      ["responseHeaders"]
    );
  },
  Ql = function () {
    chrome.webRequest.onErrorOccurred.addListener(n(ml, "onErrorOccurred"), Nk);
    chrome.webRequest.onErrorOccurred.addListener(
      function (a) {
        try {
          var b = hl(a.tabId);
          if (b) {
            var c = b.failedScripts,
              d = a.url;
            r(c, d) || c.push(d);
          }
        } catch (e) {
          console.error("Error while storing failed scripts: " + e);
        }
      },
      { urls: ["http://*/*", "https://*/*"], types: ["script"] }
    );
  },
  Rl = function () {
    chrome.webNavigation.onBeforeNavigate.addListener(function (a) {
      var b = a.tabId;
      0 != a.frameId || al(b) || ((Qk = hl(b)), dl(b));
    });
  },
  Sl = function () {
    chrome.webNavigation.onCommitted.addListener(function (a) {
      var b = a.tabId,
        c = V[b],
        d = a.url;
      if (c && il(b))
        if (0 == a.frameId) {
          a = 0;
          for (c.page.redirects = []; 100 > a++ && c.redirects[d]; ) {
            b = c.redirects[d].redirectedFrom;
            if (b == d) break;
            c.page.redirects.push(b);
            d = b;
          }
          tb(c.responses, function (e) {
            e.redirects = c.page.redirects;
            e.root = null;
          });
        } else Xk.test(a.url) && (d = zf(C(a.url), "ignored")) && wg(d.split(","));
    });
  },
  Tl = function () {
    chrome.webNavigation.onDOMContentLoaded.addListener(function (a) {
      if (0 == a.frameId) {
        var b = hl(a.tabId, a.url);
        b.page.mf = a.timeStamp - b.page.timestamp;
      }
    });
  },
  Ul = function (a, b) {
    b = b ? [hl(parseInt(b, 10))] : xg();
    if (b.length) {
      b = $f(b);
      var c = new Lf().format(b);
      window.setTimeout(function () {
        D(bh, a, null, "Sending HAR from background to content script: %O", c);
        chrome.tabs.sendMessage(a, { message: "InjectHar", tabId: a, har: c });
      }, 1e3);
    }
  },
  Vl = function () {
    chrome.webNavigation.onCompleted.addListener(function (a) {
      var b = a.tabId;
      if (al(b) || Aj(a.url)) dl(b);
      else if (0 == a.frameId) {
        var c = a.url;
        if ((zb(c, Md()) || zb(c, Ld())) && "true" == zf(C(c), "gta"))
          chrome.tabs.update(b, { url: chrome.extension.getURL("templates/gtar.html") }, function () {
            D(Yg, ug().X, null, "Successfully switched back to recording page");
          });
        else if (il(b)) {
          var d = V[b];
          d &&
            ((d.page.onLoad = a.timeStamp - d.page.timestamp),
            Sf(d, c),
            window.setTimeout(function () {
              chrome.tabs.get(b, function (e) {
                !al(e.id) && V[e.id] && V[e.id].domChecksFinished && xl("DomTags", e.id, e.url, "onCompleted ");
              });
            }, 1e3),
            tl(b));
          dl(b);
        }
      } else
        a &&
          a.url &&
          0 < a.url.indexOf("gta=true") &&
          ((c = Xk.test(a.url)),
          D(bh, b, null, "Checking if HAR should be injected is %s for %s", c, a.url),
          c && ((a = C(a.url)), Ul(b, zf(a, "tabId"))));
    });
  },
  Wl = function () {
    chrome.webNavigation.onTabReplaced.addListener(function (a) {
      var b = a.replacedTabId;
      a = a.tabId;
      ug();
      ug().X == b && ((ug().X = a), zl(a));
      Pk[a] = Pk[b];
      delete Pk[b];
      Jl(b);
      wl(a);
    });
  },
  Zk = function (a) {
    return (a = a && 0 < a ? V[a] : Qk) && a.referencedTabId ? V[a.referencedTabId] : a;
  },
  ud = function () {
    var a = bg(wj);
    a.ka = null;
    a.Za = null;
    a.Ya = null;
    if (Bd("PatternProfiling") && !Bc) {
      if (((Bc = yc(zc(), "patterns").Xb), (a = new Hc()), 1 != a.Cc)) {
        var b = yc(zc(), "").Xb,
          c = a.be;
        b && yc(zc(), b.qb()).zc.push(c);
        a.Cc = !0;
      }
    } else Bc = null;
    Ol();
    Xk = new RegExp(gc() + "(internal/)?\\w*\\?gta=true.*");
    (a = Zk()) &&
      0 < a.tabId &&
      (z("ShowWelcomeScreen") || ol(a.tabId), a.page.domain && ((b = a.page.domain), (c = a.issues), Ed(b) && Ne(b, c)), dl(a.tabId));
    a = bg(Vg);
    a.Zc = Cd("LogInfoTemplate") || "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    a.Bc = a.Zc.split("|");
    b = z("LogSources");
    void 0 !== b && Ma(b);
    a.yc = b || [];
    D = Bd("LoggingEnabled") ? Xg : ob;
  },
  xl = function (a, b, c, d) {
    il(b) && (D(Zg, b, null, "Requesting for: %s", a), hl(b), chrome.tabs.sendMessage(b, new Kh(a, b, c, d), void 0));
  },
  Xl = function () {
    var a = new Gh(12e4);
    a.listen("tick", function () {
      tb(V, function (b) {
        var c = b.tabId;
        chrome.tabs.get(c, function (d) {
          if (!al(c)) {
            var e = V[c];
            e &&
              (e.wasOpened || d.active
                ? e.updateDomRequired &&
                  12e4 < new Hg().getTime() - e.page.timestamp &&
                  (D(Yg, c, null, "Triggered DOM reload for %s", e.page.url), vl(c, "scheduled reload"))
                : e.issues.length &&
                  12e4 < new Hg().getTime() - e.lastVisited &&
                  (D(Yg, c, null, "Triggered DOM reload for %s", e.page.url), We(e.issues), (e.issues = []), (e.updateTagsRequired = !0)));
          }
        });
      });
    });
    a.start();
  },
  Cl = function (a, b) {
    if ((b = b.sender && b.sender.origin) && Mk(b)) {
      b = a.message;
      var c = parseInt(a.tabId, 10);
      D(ah, c, a, "Received %s request: %O", b, a);
      var d = hl(c, a.url);
      d.wasOpened = !0;
      c in Vk && (d.state = Vk[c]);
      Ve(d.issues);
      try {
        switch (("Action" != b || ("StartRecordingIssues" != a.name && "StopRecordingIssues" != a.name) || (b = a.name), b)) {
          case "Action":
            var e = a.name,
              f = n(ol, c),
              g = bg(Hh).Ab[c];
            g && "function" === typeof g[e] && g[e](d, f);
            break;
          case "DomReload":
            d.isManualCheck = !0;
            xl("DomTags", c, d.page.url, b);
            break;
          case "Status":
            Se(d.issues);
            D(ah, c, null, "Sending %s response: %O", b, d);
            a = Sk;
            var h = a.postMessage,
              k = Pk[c] || "Disabled",
              m = new Jk();
            m.issues = d.issues;
            m.lastUpdated = d.lastUpdated;
            m.recordings = yg();
            m.requiresReload = d.requiresReload;
            m.state = d.state;
            m.tabId = d.tabId;
            m.title = d.page.title;
            m.url = d.page.url;
            m.domain = d.page.domain || "";
            m.popupState = d.page.domain ? k : "Stale";
            m.recording = vg();
            m.recordingEnabledTab = ug().X + "";
            h.call(a, m);
            break;
          case "Set":
            Ad(a.name, a.value);
            ol(c);
            break;
          case "CheckOtherExtensions":
            pl(c);
            break;
          case "WhiteListDomain":
            "Disabled" == (Pk[c] || "Disabled") && Bd("ManualChecks") && (d.requiresReload = !0);
            if (d.page.domain) {
              var p = d.page.domain;
              if (p) {
                var v = Cd("WhiteListedDomains");
                v = !v || Bb(null == v ? "" : String(v)) || Db(v, p) ? p : Cb(v) + "\n" + p;
                Ad("WhiteListedDomains", v);
              }
            }
            break;
          case "Save":
            Vk[c] = a.value;
            break;
          case "RemoveFromWhitelist":
            if (d.page.domain) {
              var E = d.page.domain,
                O = Cd("WhiteListedDomains");
              if (E && O && !Bb(null == O ? "" : String(O))) {
                var oa = O.split("\n");
                ab(oa, E);
                O = oa.join("\n");
                Ad("WhiteListedDomains", O);
              }
              Kl(c);
            }
            break;
          case "TurnOff":
            Pk[c] = "Disabled";
            Kl(c);
            break;
          case "TurnOn":
            Pk[c] = "Enabled";
            Kl(c);
            break;
          case "StartRecordingIssues":
            var Ga = ug();
            Ga.Bb.splice(0);
            Ga.X = c;
            Ga.na = "enabled";
            Al(c);
            break;
          case "ResumeRecordingIssues":
            var $a = ug();
            -1 != $a.Wb && "disabled" == $a.na && (($a.X = c), ($a.na = "enabled"));
            Al(c);
            break;
          case "DisableAutomaticValidation":
            Kl(c);
            break;
          case "StopRecordingIssues":
            zg(), Al(c);
        }
      } catch (yf) {
        D(Yg, c, null, "Error while receiving popup message: %s, Error: %O, Status: %O", b, yf, d);
      }
    }
  },
  Kl = function (a) {
    var b = Bd("ManualChecks"),
      c = hl(a);
    b && "Disabled" == (Pk[a] || "Disabled") && !Nd(c.page.domain) && (Jh(a), Vf(c), ug().X == a && zg());
    chrome.tabs.get(a, sl);
    dl(a);
  },
  al = function (a) {
    return chrome.runtime.lastError
      ? (chrome.runtime.lastError.message.match(/no tab with id/i) && null != a
          ? ((a = xa(a) ? a.id : a), V[a] && (Vf(V[a]), delete V[a]), Vk[a] && (Vk[a] = {}))
          : console.log("Error occurred for " + a, chrome.runtime.lastError),
        !0)
      : !1;
  },
  El = function (a, b) {
    try {
      if (!Lk(a)) throw Error("Unsupported URL.");
      var c = new XMLHttpRequest();
      c.open("GET", a, !0);
      var d = !1;
      c.onreadystatechange = function () {
        var e = "application/javascript" === (c.getResponseHeader("Content-Type") || "").split(";")[0];
        Lk(c.responseURL) &&
          e &&
          !d &&
          4 == c.readyState &&
          (qb(c.status) ? ((d = !0), b(c.responseText)) : D(Zg, null, null, "Ignored failed script " + a + " Status: " + c.status));
      };
      c.send();
    } catch (e) {
      D(Zg, null, null, "Ignored unreadable script " + a + " Reason:" + e);
    }
  };
window.addEventListener(
  "load",
  function () {
    wl();
    Bl();
    var a = Oj();
    Ad("categories", a);
    Dl();
    chrome.extension.onMessage.addListener(Fl);
    Hl();
    Il();
    chrome.tabs.onRemoved.addListener(Jl);
    chrome.webRequest.onBeforeRequest.addListener(Ll, Nk, ["requestBody"]);
    Nl();
    a = [];
    for (var b in td) a.push(td[b] + "*");
    a.push("https://gaiastaging.corp.google.com/*");
    chrome.webRequest.onHeadersReceived.addListener(Ml, { urls: a, types: ["sub_frame", "xmlhttprequest"] }, [
      "blocking",
      "responseHeaders"
    ]);
    Ol();
    chrome.webRequest.onBeforeRedirect.addListener(n(ml, "onBeforeRedirect"), Nk, ["responseHeaders"]);
    Pl();
    Ql();
    Rl();
    Sl();
    Tl();
    Vl();
    Wl();
    Xl();
    yd();
  },
  !1
);
Da("savePopupViewState", function () {});
var Yl = !1,
  am = function () {
    if (!Yl) {
      for (var a in Zl) $l[a] = Zl[a];
      Yl = !0;
    }
  },
  $l = {
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
  Zl = {
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
var bm,
  cm = function (a) {
    var b = { interactive: !0 };
    chrome.identity &&
      chrome.identity.getAuthToken(b, function (c) {
        chrome.runtime.lastError || !c ? a({ error: chrome.runtime.lastError }) : ((bm = c + ""), a({ error: 0, token: bm }));
      });
  };
var W = {},
  dm = {};
W.Empty = "No items in stock for some products";
W.IllegalResponse = "Illegal validation response";
W.NotFound = "Validation service not found";
W.NotIncluded = "Some URL are not included in the validation response";
W.NotStarted = "Products have not been validated yet";
W.NotValid = "Some products are not valid";
W.Requesting = "Requesting validation info";
W.ServerError = "Validation Service temporarily unavailable";
W.Validated = "Products successfully validated";
W.UnknownError = "Error during product validation";
for (
  var em = "ServerError UnknownError IllegalResponse NotValid NotIncluded NotFound Empty Requesting Validated NotStarted".split(" "),
    fm = em.length,
    gm = 0;
  gm < fm;
  gm++
)
  dm[em[gm]] = gm;
var hm = function (a) {
    switch (a) {
      case "NotFound":
      case "Empty":
      case "NotIncluded":
      case "NotValid":
        return "Error";
      case "Requesting":
      case "Validated":
        return "Info";
      case "IllegalResponse":
      case "ServerError":
      case "UnknownError":
        return "Warning";
      default:
        return "Suggestion";
    }
  },
  jm = function (a) {
    a = n(im, a);
    var b = bm;
    b ? a({ token: b }) : cm(a);
  },
  im = function (a, b) {
    var c = t("https://www.googleapis.com/content/v2/accounts/authinfo?key=%s", "AIzaSyAzrcZlyDA6YpakvsI4US26BngN2Hj9pFI");
    jd(c, "GET", { Authorization: "Bearer " + b.token }, function (d) {
      try {
        var e = window.JSON.parse(d.responseText);
        e && !e.error && (a.label = e.pc && e.pc[0] && e.pc[0].merchantId);
      } catch (f) {
        console.log("Error while retrieving the merchant center id ", f);
      }
    });
  };
var km = function (a) {
    if (a.template && a.template.context.urls) return a.template.context.urls;
    a = He(Pe(a));
    return (a ? we(a, "URL") : []).map(function (b) {
      return b.label;
    });
  },
  mm = function (a) {
    a = He(Pe(a));
    (a && "Requests" == a.text ? a.relatedIssues : []).forEach(function (b) {
      var c = "NotStarted";
      we(b, "URL").some(function (d) {
        d = lm(d.label);
        c = z(d + "s");
        return !!c;
      });
      if ((b = B(b, "Validation Status"))) b.label = W[c] || "Products have not been validated yet";
    });
  },
  nm = function (a) {
    var b = "NotStarted";
    a.forEach(function (c) {
      c = lm(c);
      (c = z(c + "s")) && dm[c] < dm[b] && (b = c);
    });
    return b;
  },
  om = function (a) {
    var b = null;
    a.forEach(function (c) {
      c = lm(c);
      c = Cd(c + "t");
      if (!c) b = "";
      else if (!b || (b.length && b < c)) b = c;
    });
    return b || !1;
  },
  qm = function (a, b) {
    var c = Be(b, "Validate Products"),
      d = km(b);
    if (c && 0 < d.length) {
      var e = c.relatedIssues[0].label;
      Ih(a.tabId, Me(c) + ":" + this.text, function (f, g) {
        pm(c, e, d);
        g();
      });
      a = nm(d);
      this.type = hm(a);
      c.label = W[a] || "Products have not been validated yet";
      return W[a] || "Products have not been validated yet";
    }
    return !1;
  },
  rm = function (a, b) {
    var c = b.label;
    if ("" == c) return !1;
    Pa(b, Rd);
    a = this.Ia(a, b);
    if ("" != a) {
      var d = b.template.context.urls,
        e = d.every(function (f) {
          f = lm(f);
          return !!Cd(f + "t");
        });
      d && !e && pm(b, c, d);
    }
    return a;
  },
  vm = function () {
    return [
      M(N(rj(sm.category), "Remarketing Validation"), [
        M(
          J(
            qj("Google Merchant Center ID", function (a, b) {
              this.context.urls = km(b);
              this.text = this.context.urls.some(function (c) {
                c = C(c);
                c = tm(c);
                return !!c && (0 <= c.indexOf("ecomm_") || w(/prod(?:oduct)?_?id/i, c));
              })
                ? "Google Merchant Center ID"
                : "Feed ID";
              a = this.Ia(a, b);
              b.label = a ? "Products have not been validated yet" : "To validate please enter the feed ID";
              return a;
            }),
            "textfield"
          ),
          [
            pi(
              Th("To validate please enter the feed ID", function (a) {
                return 0 == a.label.length;
              }),
              "validate_products"
            ).otherwise([
              J(
                qj("Last updated", function (a, b) {
                  return b.label && ((a = b.template.context.urls), 0 < a.length) ? om(a) : !1;
                }),
                "elapsed_time"
              ),
              qj("Validate", qm, "button_action"),
              qj("Auto validation", rm, "checkbox")
            ]),
            qj("Get Merchant ID", um, "button_action")
          ]
        )
      ])
    ];
  },
  um = function (a, b) {
    if ("Google Merchant Center ID" == this.text) {
      var c = Be(b, "Validate Products"),
        d = km(b);
      if (c && 0 < d.length)
        return (
          Ih(a.tabId, Me(c) + ":" + this.text, function (e, f) {
            jm(b);
            f();
          }),
          b.label
        );
    }
    return !1;
  },
  pm = function (a, b, c) {
    var d = this,
      e = new Date().getTime() + "",
      f = {};
    c.forEach(function (k) {
      k = lm(k);
      f[k + "s"] = "Requesting";
      f[k + "t"] = e;
    });
    Id(f);
    var g = c.map(function (k) {
        return { feedId: b, smartPixelUrl: k };
      }),
      h = t(
        "%s?key=%s",
        "https://www.googleapis.com/dynamiccreatives/v1/gpa_offers/getvalidatedoffers",
        "AIzaSyCrG7PQT-YTwJ4-mYB7IOOeaZu_CSawr7M"
      );
    jd(
      h,
      "POST",
      { "Content-Type": "application/json" },
      function (k) {
        wm(d, a, k.status, k.responseText, c, e);
      },
      { offers: g }
    );
  },
  wm = function (a, b, c, d, e, f) {
    if (qb(c))
      try {
        var g = JSON.parse(d);
        xm(e, g);
        mm(b);
        var h = nm(e);
        a.label = W[h];
        return;
      } catch (m) {
        (h = "IllegalResponse"), console.log(m);
      }
    else h = 404 == c ? "NotFound" : 503 == c ? "ServerError" : "UnknownError";
    var k = {};
    e.forEach(function (m) {
      m = lm(m);
      k[m + "s"] = h;
      k[m + "t"] = f;
    });
    Id(k);
    mm(b);
    a.label = W[h] || "Products have not been validated yet";
  },
  xm = function (a, b) {
    var c = {};
    b.kind
      ? b.offers
        ? a.forEach(function (d) {
            var e = lm(d),
              f = Ya(b.offers, function (g) {
                return g.smartPixelUrl == d;
              });
            c[e + "s"] = "Validated";
            f ? (0 == f.number && (c[e + "s"] = "Empty"), f.validated || (c[e + "s"] = "NotValid")) : (c[e + "s"] = "NotIncluded");
          })
        : a.forEach(function (d) {
            d = lm(d);
            c[d + "s"] = "IllegalResponse";
          })
      : a.forEach(function (d) {
          d = lm(d);
          c[d + "s"] = "IllegalResponse";
        });
    Id(c);
  },
  lm = function (a) {
    var b = C(a),
      c = zf(b, "url");
    c = void 0 !== c ? C(Mc(c)).J : "";
    b = tm(b);
    return "remarketing:" + c + "/-/" + (b || a) + ";";
  },
  tm = function (a) {
    var b = a.v;
    if ((a = b.get("data")))
      try {
        a = decodeURIComponent(a);
      } catch (d) {}
    var c = (a ? a.toString().split(";") : []).filter(function (d) {
      return 0 < d.length;
    });
    b.ea().forEach(function (d) {
      0 == d.indexOf("data.") && c.push(d.substring(5) + "=" + escape(b.get(d) + ""));
    });
    return c.join(";");
  };
var ym = function (a, b, c, d, e, f) {
  G.call(this, a, b, c, d, void 0, f);
  this.pa = e || nb;
  this.issueClass = 3;
};
Ea(ym, G);
var zm = function (a, b, c, d, e) {
    return new ym(a, b, c, d, e);
  },
  Am = function (a, b) {
    return new ym("Hidden", a, "Check only", void 0, b, void 0);
  },
  Bm = function (a, b) {
    return Am(a, function (c, d) {
      b.call(this, c, d);
      return !1;
    });
  },
  Cm = function (a, b) {
    for (var c = [], d = 1, e = arguments.length; d < e; d++) c.push(Bm(a, arguments[d]));
    return c;
  },
  Dm = n(zm, "Warning", null);
var Em = function () {
    Q.call(this, "Google Ads Conversion Tracking", 1);
  },
  Gm;
Ea(Em, Q);
var Hm = { ed: "Google Ads Conversion Tracking", ja: "Google Ads Remarketing Tag" },
  Im = t("%s ${%s}", "Google Ads Conversion Tracking", "Conversion ID"),
  Jm = t("%s ${%s}", "Google Ads Remarketing Tag", "Conversion ID"),
  Km = new G("Tag", "Google Ads Conversion Tracking", Im, "https://support.google.com/tagassistant/answer/2947038", void 0, void 0, void 0),
  sm = new G("Tag", "Google Ads Remarketing Tag", Jm, "https://support.google.com/tagassistant/answer/2978937", void 0, void 0, void 0),
  Lm = { ed: Km, ja: sm },
  Mm = {},
  Nm = [];
tb(
  {
    edu_pid: { type: 3, required: !0 },
    edu_plocid: { type: 3 },
    edu_pagetype: { type: 12, values: "home searchresults program lead complete other".split(" "), N: !0 },
    edu_totalvalue: { type: 2, N: !0 },
    flight_destid: { type: 3, required: !0 },
    flight_originid: { type: 3 },
    flight_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), N: !0 },
    flight_startdate: { type: 11, N: !0 },
    flight_enddate: { type: 11 },
    flight_totalvalue: { type: 2, N: !0 },
    hotel_hotel_id: { type: 3, required: !0 },
    hotel_pagetype: { type: 12, values: "home searchresults property cart purchase cancel other".split(" "), N: !0 },
    hotel_checkindate: { type: 11 },
    hotel_checkoutdate: { type: 11 },
    hotel_totalvalue: { type: 2, N: !0 },
    hrental_id: { type: 3 },
    hrental_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), N: !0 },
    hrental_startdate: { type: 11 },
    hrental_enddate: { type: 11 },
    hrental_totalvalue: { type: 2, N: !0 },
    job_id: { type: 1, required: !0 },
    job_locid: { type: 3 },
    job_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), N: !0 },
    job_totalvalue: { type: 2, N: !0 },
    local_id: { type: 3, required: !0 },
    local_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), N: !0 },
    local_totalvalue: { type: 2, N: !0 },
    listing_id: { type: 3, required: !0 },
    listing_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), N: !0 },
    listing_totalvalue: { type: 2 },
    ecomm_prodid: { type: 19, required: !0 },
    ecomm_category: { type: 1 },
    ecomm_pagetype: { type: 12, values: "home searchresults category product cart puchase other".split(" "), N: !0 },
    ecomm_totalvalue: { type: 2, N: !0 },
    travel_destid: { type: 3, required: !0 },
    travel_originid: { type: 3 },
    travel_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), N: !0 },
    travel_startdate: { type: 11 },
    travel_enddate: { type: 11 },
    travel_totalvalue: { type: 2, N: !0 },
    dynx_itemid: { type: 3, required: !0 },
    dynx_itemid2: { type: 3 },
    dynx_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), N: !0 },
    dynx_totalvalue: { type: 2, N: !0 }
  },
  function (a, b) {
    Nm.push(b.toLowerCase());
  }
);
Em.prototype.Sb = function () {
  Gm ||
    ((Gm = []),
    tb(Lm, function (a) {
      Gm.push(new Od(a.category, a.infoLink));
    }));
  return Gm;
};
var Om = t("<%s> tag found.", "iframe"),
  Pm = t("<%s> tag found.", "img"),
  Qm = t("<%s> tag found.", "noscript"),
  Rm = t("<%s> tag found.", "script"),
  Sm = { iframe: Om, img: Pm, noscript: Qm, script: Rm },
  Tm = t(" in the <%s> tag", "iframe"),
  Um = t(" in the <%s> tag", "img"),
  Vm = t(" in the <%s> tag", "noscript"),
  Wm = t(" in the <%s> tag", "script"),
  Xm = { iframe: Tm, img: Um, noscript: Vm, script: Wm },
  Ym = function (a) {
    var b = Zc([/(?:viewthrough)?conversion\/([^/?]*)/, /^((?![?]ai=)(.|\n))*$/], a);
    return "string" === typeof b
      ? (0 == b.length && (b = "undefined"), (a = x(RegExp("[&?;#]label=([^&?#]*)"), a)), "string" === typeof a ? b + ";" + a : b)
      : b;
  },
  Zm = function (a) {
    a = a.label.split(";")[0];
    this.format = "copyable";
    return "undefined" == a ? "not set" : a;
  },
  $m = function (a) {
    a = x(/[^;]*;(.*)/, a.label);
    return "boolean" === typeof a || "undefined" == a ? "not set" : a;
  },
  an = Dm("Conversion value missing in <noscript> tag."),
  bn = H("Mismatch of conversion ID in <script> tag and <%s> tag."),
  cn = H("Mismatch of conversion label in <script> tag and <%s> tag."),
  dn = N(Dm("Missing <noscript> tag."), "Code Snippet");
Em.prototype.L = function () {
  var a = ["*://*.googleadservices.com/pagead/*", "*://googleads.g.doubleclick.net/pagead/*", "*://www.gstatic.com/wcm/loader.js"];
  eb(
    a,
    Ua("au at be br ca ch cz com co.uk de es fr in it jp nl no po ru se tr".split(" "), function (b) {
      return "*://www.google." + b + "/ads/*";
    })
  );
  return a;
};
Em.prototype.K = function () {
  return [
    T(
      "Google Ads Remarketing Tag",
      ["www.google.[a-z]*/ads/user-lists/"],
      Jm,
      sm.infoLink || "",
      function (a) {
        var b = S(a);
        return (a = x(/\/ads\/user-lists\/(\d*)\//, b.A)) ? ((b = zf(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [
        L(I("Conversion ID", Zm)),
        J(I("Conversion Label", $m), "copyable"),
        cj("Troubleshoot", function (a) {
          return (a = a.redirectedFrom) && 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/")
            ? ((a = a.concat("&deb=c2&srr=n")),
              a.hasOwnProperty("fmt") || (a = a.concat("&fmt=1")),
              (this.infoLink = a = a.replace("script=0", "script=1")),
              "redirect url")
            : !1;
        }),
        U
      ]
    ),
    T(
      "Google Ads Conversion Tracking",
      ["www.google.[a-z]*/ads/conversion/"],
      Im,
      Km.infoLink || "",
      function (a) {
        var b = S(a);
        return (a = x(/\/ads\/conversion\/(\d*)\//, b.A)) ? ((b = zf(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [L(I("Conversion ID", Zm)), J(I("Conversion Label", $m), "copyable"), U]
    ),
    T(
      "Google Ads Conversion Tracking",
      ["googleadservices.com/pagead/", "googleads.g.doubleclick.net/pagead/"],
      Im,
      Km.infoLink || "",
      function (a) {
        di(Km, this, "Reset.");
        try {
          var b = S(a),
            c = b.v.get("data") || "";
          var d = !(b.v.Aa("label") || b.v.Aa("amp;label")) || !!c.match(/aw_remarketing_only(%3D|=)true/g);
        } catch (e) {
          d = !1;
        }
        if (d) di(sm, this, "URL detected as smart pixel.");
        else if (((d = S(a)), Ab(d.A, "wcm"))) return !1;
        return Ym(a.url);
      },
      "",
      [
        L(I("Conversion ID", Zm)),
        J(I("Conversion Label", $m), "copyable"),
        cj("validation anchor", function (a) {
          a = S(a);
          return !!tm(a);
        }).l(en()),
        lj("Conversion Value", "value"),
        M(lj("Conversion Currency", "currency_code"), [
          pi(
            Th("Conversion Currency should be exactly 3 characters.", function (a) {
              return 3 !== a.label.length;
            }),
            "value_not_set"
          ),
          pi(
            Th("Conversion Currency should consists of only letters.", function (a) {
              return !x(/\w{3}/, a.label);
            }),
            "value_not_set"
          ),
          pi(
            Th("Conversion Currency is not a standard currency.", function (a) {
              am();
              return !(a.label in $l);
            }),
            "value_not_set"
          )
        ]),
        N(
          dj("Ref/URL GET param did not match with actual URL.", function (a) {
            var b = S(a);
            a = hj(a);
            if (void 0 === a) return !1;
            a = a.J;
            var c = zf(b, "url");
            if (void 0 !== c && a == C(decodeURIComponent(c)).J) return !1;
            b = zf(b, "ref");
            return void 0 !== b && a == C(decodeURIComponent(b)).J ? !1 : void 0 !== c || void 0 !== b;
          }),
          "URLs"
        ),
        nj(null, "data")
      ]
    ),
    M(
      T(
        "Website Call Metrics",
        ["www.gstatic.com/wcm/loader.js"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          return !!a.url;
        }
      ),
      [I("Script loaded."), H("Could not find _googWcmGet call.")]
    ),
    M(
      T(
        "Website Call Metrics",
        ["googleadservices.com/pagead/"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          a = S(a);
          return Ab(a.A, "wcm");
        }
      ),
      [
        jj("Requests", "Request", nb, [
          M(R("Conversion ID", n(ad, /pagead\/conversion\/([^/]*)\/wcm/)), [
            H("Conversion ID malformed", function (a) {
              return !w(/^\d+$/, a.label);
            })
          ]),
          lj("Conversion Label", "cl").l(
            H("Conversion label not set", function (a) {
              return "100" == a.label;
            })
          ),
          lj("Conversion Value", "cv"),
          lj("Fallback", "fb"),
          U
        ])
      ]
    )
  ];
};
var fn = function () {
    return [
      H(
        "Conversion tag parameters object not correctly formed.",
        bi(function (a) {
          a = a.replace(/\s*\n\s*/g, "");
          return !(w(/\{.*\}$/, a) || w(/[a-zA-Z_$][a-zA-Z_$0-9.]+$/, a));
        })
      ),
      H("Keys and values must be separated using colons.", bi(Sc)),
      H("Missing commas in between key-value element pairs.", bi(Vc)),
      M(
        J(
          I("Conversion tag parameters", function (a) {
            a = a.label.replace(/\s*\n\s*/g, "");
            return x(/^\s*\{?(.+?)\}?\s*$/m, a);
          }),
          "esc_json"
        ),
        [
          Th("Pass multiple values in an array.", bi(Wc)),
          H("Value passed as array has misplaced quotes.", bi(Uc)),
          Uh("Tag Paramater object could not be parsed."),
          H("Attribute key contains space or non-ASCII characters.", function (a) {
            return Tc(a.label).some(function (b) {
              b = b.split(":");
              return 1 < b.length && !x(/^["|']?\s*[a-zA-Z0-9_]+\s*["|']?$/g, b[0]);
            });
          })
        ]
      )
    ];
  },
  gn = function (a, b) {
    b = tm(b);
    if (!b) return !1;
    var c = b.indexOf("google_tag_params=");
    if (0 > c) return !1;
    b = Rc("google_tag_params", "var " + b.substring(c).replace(/\\,/g, ","));
    if (!b) return !1;
    a.text = "google_tag_params";
    return b;
  },
  hn = function (a) {
    a = a
      ? R(
          "Conversion tag parameters",
          function (b) {
            b = S(b);
            return gn(this, b);
          },
          "esc_json"
        )
      : zi(
          "Conversion tag parameters",
          function (b) {
            b = b.getAttribute("src") || b.textContent;
            return "string" === typeof b && gn(this, C(b));
          },
          "esc_json"
        );
    M(L(a, "https://developers.google.com/adwords-remarketing-tag/parameters"), fn()).l([Sh("Custom parameter")]);
    return a;
  },
  en = function () {
    var a = M(
      R(
        "Data",
        function (b) {
          b = S(b);
          return tm(b);
        },
        "map"
      ),
      [
        H("Multiple product IDs need to be stored in an array.", function (b) {
          return w(/prodid=[^;]*\\,/, b.label);
        })
      ]
    );
    return jj(
      "Requests",
      "Request",
      function (b) {
        b = S(b);
        return !!tm(b);
      },
      [a, hn(!0), nj("data").l(cj("data anchor"))]
    );
  };
Em.prototype.Y = function () {
  var a = {};
  a["data anchor"] = [
    N(
      J(
        sj("Last checked", function (b) {
          b = lm(b.label);
          b = z(b + "t");
          return "string" === typeof b && b;
        }),
        "elapsed_time"
      ),
      "Remarketing Validation"
    ),
    N(
      J(
        sj("Validation Status", function (b) {
          b = lm(b.label);
          b = Cd(b + "s");
          this.type = hm(b);
          return W[b] || "Products have not been validated yet";
        }),
        "value"
      ),
      "Remarketing Validation"
    )
  ];
  a["validation anchor"] = vm();
  return a;
};
Em.prototype.Yb = function (a, b) {
  return a.label == b.label && (a.category == Km.category || a.category == sm.category || "Website Call Metrics" == a.category);
};
var jn = function (a, b) {
    return [
      M(L(I("Conversion ID", Zm)), [
        pi(
          H("Conversion ID not set" + a + ".", function (c) {
            return c && "not set" == c.label ? "not set" : !c || ("1234567890" != c.label && 0 != c.label) ? !1 : "invalid";
          }),
          "id_not_set"
        ).otherwise(
          H("Conversion ID should not have quotations around it.", function (c) {
            var d = c.parent.label.split(";"),
              e = x(/['"](\d*)['"]/, d[0]);
            return "string" === typeof e ? ((d[0] = e), (c.label = e), (c.parent.label = d.join(";")), !0) : !1;
          }).otherwise(
            H("Conversion ID malformed" + a + ": %s.", function (c) {
              var d = c.parent.label.split(";"),
                e = x(/[^0-9]*([0-9]*)/, d[0]);
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
      M(J(I("Conversion Label", $m), "copyable"), [
        pi(
          H("Conversion label not set" + a + ".", function (c) {
            return !c || ("not set" != c.label && "null" != c.label) ? !1 : "not set";
          }),
          "label_not_set"
        )
      ]),
      M(
        zi("Conversion Value" + a, function (c, d) {
          return b && "Google Ads Conversion Tracking" == d.category ? b.call(this, c, d) || "not set" : !1;
        }),
        [
          pi(
            Th("Conversion value not set" + a + ".", function (c) {
              return "not set" == c.label;
            }),
            "value_not_set"
          ).otherwise(
            pi(
              H("Conversion Value should not be prefixed with currency.", function (c) {
                am();
                return c.label.substring(0, 3) in $l;
              }),
              "value_not_set"
            ).otherwise(
              pi(
                H("Dynamic conversion value in wrong format" + a + ".", function (c) {
                  return !gd(c.label);
                }),
                "dynamic_value"
              )
            )
          )
        ]
      ),
      Ii
    ];
  },
  kn = function (a) {
    var b = "noscript" == a ? "text()" : "@src";
    return M(
      Li(
        "Google Ads Conversion Tracking",
        Im,
        Km.infoLink || "",
        t('//%s[contains(%s, "%s") or contains(%s, "%s")]', a, b, "googleadservices.com/pagead/", b, "googleads.g.doubleclick.net/pagead/"),
        function (c) {
          di(Km, this, "Default");
          c = c.getAttribute("src") || c.textContent;
          w(/[?&]data(?:\.[a-zA-Z0-9_]+)?=/, c) && di(sm, this, "data param in DOM src");
          return Ym(c);
        }
      ),
      jn(Xm[a], function (c) {
        c = c.getAttribute("src") || c.textContent;
        return x(RegExp("[&?;#]value=([^&?#]*)"), c);
      })
    ).l([
      N(
        zi(
          Sm[a],
          function (c) {
            return Fi(this, c);
          },
          "snippet_html"
        ),
        "Code Snippet"
      ),
      hn(!1),
      N(
        Bi("Update to script based tracking.", function () {
          return "i" == a[0];
        }),
        "Code Snippet"
      )
    ]);
  },
  ln = function () {
    var a = /google_conversion_id\s*=\s*(?:[a-zA-Z._]*\s*=\s*)?([^;,]*)/g,
      b = M(
        Li("Google Ads Conversion Tracking", Im, Km.infoLink || "", "//script", function (c) {
          var d = w(/google_conversion/i, c.textContent) && Oc(a, c.textContent);
          this.o = a.lastIndex;
          if (!d) return !1;
          var e = "" == d[1] ? "undefined" : d[1];
          c = c.textContent.substring(d.index);
          var f;
          Bc && (f = new Date().getTime());
          var g = g || "";
          var h = c.replace(/\\\\/g, "__TA_BACKSLASH__").replace(/\\'/g, "__TA_SINGLE_QUOTE__").replace(/\\"/g, "__TA_DOUBLE_QUOTE__");
          d = x(RegExp("(?:^|[; \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*\\'([^\\']*)\\'\\s*(?:[;,\n]|$)", g), h);
          "string" !== typeof d &&
            (d = x(RegExp('(?:^|[;, \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*"([^"]*)"\\s*(?:[;,\n]|$)', g), h));
          d =
            d &&
            d
              .replace(/__TA_BACKSLASH__/g, "\\\\")
              .replace(/__TA_SINGLE_QUOTE__/g, "\\'")
              .replace(/__TA_DOUBLE_QUOTE__/g, '\\"');
          Bc &&
            ((g = new Date().getTime() - f),
            1 < g && Cc("Extract string google_conversion_labelDur: " + g + " Text Length: " + c.length + "result: " + d));
          g = d;
          "string" === typeof g && (e = e + ";" + g);
          return e;
        }),
        jn("", function (c, d) {
          var e = d.label.split(";");
          e = 1 < e.length ? e[1] : "";
          "not set" == e && (e = "");
          return $c(
            [
              new RegExp(e + "(?:[^}])*google_conversion_value\\s*=\\s*([^;,}\\s]*)"),
              new RegExp("google_conversion_value\\s*=\\s*([^;,}\\s]*)(?:.|\\n)*?" + d.label.split(";")[1])
            ],
            c.textContent
          );
        })
      );
    b.l([
      N(
        yi("Remarketing Only Flag", function (c, d) {
          c = x(/google_remarketing_only\s*=\s*([a-z01!]+)/, c.textContent);
          "string" === typeof c && Nc(c) ? di(sm, d, "google_remarketing_only") : c && di(Km, d, "no remarketing marker in script");
          return c;
        }),
        "Code Snippet"
      ),
      N(
        wi("Code Template", function (c) {
          return 0 < c.textContent.indexOf("goog_report_conversion") ? "Call on-site" : !1;
        }),
        "Code Snippet"
      ),
      N(
        P("Missing conversion.js script.", function () {
          return !Va(F.scripts, function (c) {
            return !!c.src && w(/[/]conversion(_async)?.js/, c.src);
          });
        }),
        "Code Snippet"
      ),
      N(
        pi(
          P("Missing closing \x3c/script> tag.", function (c) {
            return !c.externalScript && Zc([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//, /<script.*>/], c.textContent);
          }),
          "missing_closing"
        ),
        "Code Snippet"
      ),
      N(
        pi(
          P("Incorrect script attribute.", function (c) {
            return !!c.getAttribute("language");
          }),
          "script_attribute"
        ),
        "Code Snippet"
      ),
      N(
        pi(
          Ai("Missing CDATA comments.", function (c) {
            return (
              cd([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//], c.textContent) &&
              cd([/\/\/\s*<!\[CDATA\[/, /\/\/\s*]]\x3e/], c.textContent)
            );
          }),
          "cdata_comments"
        ),
        "Code Snippet"
      ),
      N(
        pi(
          Bi("Missing line breaks may cause issues.", function (c) {
            c = c.textContent
              .replace(/[\t ]+/g, " ")
              .replace(/\s*\n\s*/g, "\n")
              .trim();
            return "string" === typeof c && 100 < c.length && c.split("\n").length < (Db(c, "CDATA") ? 5 : 3);
          }),
          "line_break"
        ),
        "Code Snippet"
      ),
      N(
        pi(
          P("Code found outside of <body> tag.", function (c) {
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
        N(
          pi(
            Bi("Code should be placed directly above the closing <body> tag.", function (c) {
              return !c.externalScript && "BODY" != c.parentNode.tagName;
            }),
            "body_tags"
          ),
          "Code Snippet"
        )
      ),
      N(
        zi(
          Rm,
          function (c) {
            var d = Oc(/google_conversion_id\s*=\s*([^;,]*)/im, c.textContent);
            return Hi(this, d.index, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      L(
        yi("Custom parameter name", function (c) {
          c = Rc("google_custom_params", c.textContent);
          return "string" === typeof c && ((c = x(/(?:window\.)([a-zA-Z_$][a-zA-Z_$0-9]*)/, c)), "string" === typeof c)
            ? ((Mm[c] =
                "google_tag_params" == c
                  ? new Qi()
                  : new Qi(
                      new Pi(
                        "Error",
                        "Google Ads Remarketing Tag",
                        "Required variable %s not found. Please check the developer console for errors.",
                        this.infoLink
                      )
                    )),
              Mi(this.ma[0], '//script[contains(text(), "var ' + c + '")]'),
              c)
            : !1;
        }),
        "https://developers.google.com/adwords-remarketing-tag/parameters"
      ).l(
        M(
          yi("Custom Parameters Snippet", function (c) {
            Mm && !this.o && (this.o = new Mh(Mm));
            if (this.o) {
              var d = this.o;
              d.index++;
              this.o = d.index < d.Ib.length ? d : null;
            }
            return !!this.o && Rc(this.o.current(), c.textContent);
          }),
          fn()
        )
      ),
      yi("Report Conversion", function (c) {
        return x(/goog_report_conversion/, c.textContent);
      }),
      Ci,
      Di,
      Ei
    ]);
    return b;
  };
Em.prototype.O = function () {
  return [
    ln(),
    kn("img"),
    kn("iframe"),
    kn("noscript"),
    Li("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//body", function (a) {
      return w(/_googWcmGet/, a.getAttribute("onload"));
    }).l(
      zi("Initialized onload."),
      N(
        wi(
          "Script",
          function (a) {
            return Fi(this, a.cloneNode(!1));
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      N(Uh("WCM loader script not detected."), "Code Snippet"),
      mn,
      nn
    ),
    Li("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//script", function (a) {
      return "" != a.src ? w(/https?:\/\/www.gstatic.com\/wcm\/loader.js/, a.src) : w(/(_googWcmGet\s*\()/, a.textContent);
    }).l(
      wi("Script loaded.", function (a) {
        return "" != a.src;
      }).otherwise(Uh("WCM loader script not detected.")),
      N(
        wi(
          "Script",
          function (a) {
            var b = Oc(/(_googWcmGet\s*\()/, a.textContent);
            return !!b && Hi(this, b.index, a);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      mn,
      nn
    )
  ];
};
var nn = M(
    J(
      N(
        Rh("gwcm", function () {
          for (var a = F.cookie.split(/; */), b = a.length, c = 0; c < b; c++) {
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
      N(
        I("Conversion Number", function (a) {
          a = ed(unescape(a.label));
          return (a = Ya(a, function (b) {
            return "number" == b.key;
          }))
            ? ((this.text = "null" == a.value ? "Conversion number not set." : "Conversion Number"), "null" == a.value ? "" : a.value)
            : !1;
        }),
        "Metadata"
      ),
      N(
        I("Conversion Label", function (a) {
          a = ed(unescape(a.label));
          a = Ya(a, function (b) {
            return "clabel" == b.key;
          });
          return null != a ? x(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      ).l(
        H("Conversion label not set", function (a) {
          return "100" == a.label;
        })
      ),
      N(
        I("Conversion Value", function (a) {
          a = ed(unescape(a.label));
          a = Ya(a, function (b) {
            return "cvalue" == b.key;
          });
          return null != a ? x(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      )
    ]
  ).otherwise(Rh("No Cookie information for Web Call Metrics.")),
  mn = zi("Element ID or class name", function (a) {
    a = a.getAttribute("onload") || a.textContent;
    return x(/_googWcmGet\s*\(\s*'([^']*)'/, a) || x(/_googWcmGet\s*\(\s*"([^"]*)"/, a);
  }).l(
    Uh("WCM Number element should not contain markup.", function (a) {
      if (F.getElementById(a.label)) {
        a.text = "Element ID";
        a = F.getElementById(a.label).children;
        for (var b, c = 0; (b = a[c]); c++) if (b.nodeType == Node.ELEMENT_NODE) return !0;
      } else if (F.getElementsByClassName(a.label).length)
        for (a.text = "Class name", a = F.getElementsByClassName(a.label), c = 0; (b = a[c]); c++)
          for (var d, e = 0; (d = b.children[e]); e++) {
            if (d.nodeType == Node.ELEMENT_NODE) return !0;
          }
      else a.text = "Element ID or class name";
      return !1;
    }),
    H("Element ID or class name contains illegal character.", function (a) {
      return x(/w/, a.label);
    }).otherwise(
      H("Element ID or class name not matched in the DOM.", function (a) {
        return F.getElementById(a.label) || F.getElementsByClassName(a.label).length ? !1 : !0;
      })
    ),
    H("Element ID used for multiple elements. Use the class name instead.", function (a) {
      return 1 < F.querySelectorAll("#" + a.label).length;
    })
  ),
  pn = function (a) {
    var b = je(a, ["Website Call Metrics"]);
    if (1 < b.length) {
      var c = b.shift();
      b.forEach(function (f) {
        ab(a, f);
        Yd(c, f.relatedIssues);
      });
    }
    var d = je(a, vb(Hm)),
      e = d.filter(function (f) {
        return 0 == re(f, [Pm, Qm]);
      });
    ["iframe", "img", "noscript"].forEach(function (f) {
      var g = le(d, Sm[f]);
      g.length &&
        e.forEach(function (h) {
          qe(g, [h.label]).forEach(function (k) {
            var m = Ae(h);
            if ("Tag" == k.type && h != k && m) {
              m = B(k, "Conversion Value" + Xm[f]);
              if (null != m) {
                var p = B(h, "Conversion Value");
                if (null != p && p.label != m.label) {
                  var v = parseFloat(p.label),
                    E = parseFloat(m.label);
                  "not set" == p.label || !isNaN(v) || isNaN(E) || w(/^\s*[$\u20ac\u00a2\u00a3]?\s*[0-9.]+/, p.label)
                    ? v == E ||
                      isNaN(v) ||
                      isNaN(E) ||
                      ((v = t("Conversion value mismatch between <script> and <%s> tag.", f)),
                      (ei(H(v), m, m.label).otherRelatedIssues = [p.id]))
                    : ((p.label = m.label), he(p, "Dynamic conversion value in wrong format"));
                } else ge(k, m.text, m.label);
              }
              fe(k.relatedIssues, [Ii.text, "Update to script based tracking.", "Requests"]);
              ab(a, k);
              on(h, k);
            }
          });
        });
    });
  },
  on = function (a, b) {
    [
      "Conversion ID malformed",
      "Conversion ID not set",
      "Conversion label not set",
      "Conversion value missing in <noscript> tag.",
      "Dynamic conversion value in wrong format"
    ].forEach(function (c) {
      Ge(a, c) && he(b, c);
    });
    Wd(a, b);
  };
Em.prototype.Ic = function (a, b, c) {
  var d = je(c, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]).filter(function (p) {
      return 1 == p.issueClass;
    }),
    e = d.filter(function (p) {
      return 0 == re(p, [Pm, Om, Qm]);
    });
  b = le(d, b);
  e = e.filter(function (p) {
    return 0 == pe(p, Qm).length;
  });
  for (var f = 0; (d = e[f]); f++) {
    var g = !1,
      h = void 0;
    if (0 < b.length) {
      var k = void 0;
      if ("undefined;undefined" == d.label) (h = b.slice(0, 1)[0]), (g = !0);
      else if (0 == d.label.indexOf("undefined;")) (k = pe(b, "Conversion Label", d.label.split(";")[1])), (g = 0 != k.length);
      else if (0 < d.label.indexOf(";undefined") || 1 == d.label.split(";").length)
        (k = pe(b, "Conversion ID", d.label.split(";")[0])), (g = 0 != k.length);
      k && 0 < k.length ? (h = k[0]) : h || f != e.length - b.length || (h = b[0]);
    }
    if (h) {
      if (g)
        (d.label = h.label),
          (g = B(d, "Conversion ID")),
          (g.label = d.label.split(";")[0]),
          he(g, "Conversion ID not set"),
          (B(d, "Conversion Label").label = $m(d));
      else {
        g = (k = h.label.split(";")[0] == d.label.split(";")[0]) ? "Conversion Label" : "Conversion ID";
        k = k ? cn : bn;
        var m = B(d, g);
        k = A(m, k, a, "details");
        g = B(h.relatedIssues, g);
        k.otherRelatedIssues.push(g.id);
      }
      (g = Ee(h, 2)) ? (this.xb(d, g), ab(h.relatedIssues, g)) : ee(h.relatedIssues, Ii.text);
      g = ei(J(xi("<" + a + "> tag"), "group"), Td, "");
      on(g, h);
      on(d, g);
      ab(c, h);
    }
  }
};
var qn = function (a) {
  Ie(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"], function (b) {
    1 != b.issueClass ||
      Xd(b, "Code Template", "Call on-site") ||
      B(b, Qm) ||
      B(b, Di.text) ||
      !B(b, Rm) ||
      Ge(b, t(Vh.text, "")) ||
      A(b, dn);
  });
};
Em.prototype.Od = function (a) {
  var b = je(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]),
    c = pe(b, Ti.text);
  0 != c.length &&
    ((b = pe(b, Ii.text)),
    0 != b.length &&
      (b
        .filter(function (d) {
          var e = x(/([0-9])+;[^ ]+/, d.label);
          return "string" === typeof e && ((e = pe(c, "Conversion ID", e)), 0 < e.length)
            ? (ab(c, e[0]), ab(a, e[0]), rn(this, d, e[0]), !0)
            : !1;
        }, this)
        .forEach(n(ab, b)),
      b.forEach(function (d) {
        if (!x(/([0-9])+;[^ ]+/, d.label) && 0 < c.length) {
          var e = c.pop();
          ab(a, e);
          rn(this, d, e);
        }
      }, this)));
};
var rn = function (a, b, c) {
    he(b, "Conversion ID malformed");
    he(b, "Conversion ID not set");
    he(b, "Conversion label not set");
    b.category = c.category;
    b.text = c.text;
    b.label = c.label;
    ae("Conversion ID", c, b);
    ae("Conversion Label", c, b);
    a.xb(b, c);
  },
  sn = function (a) {
    Je(a, "Google Ads Conversion Tracking", function (b) {
      if (!Ge(b, "Dynamic conversion value in wrong format")) {
        var c = B(b.relatedIssues, "Remarketing Only Flag");
        c && Nc(c.label)
          ? (di(sm, b, "Remarketing Only Flag true"), he(b, "Conversion Value"))
          : De(b.relatedIssues) && (di(sm, b, "AWCT tag does have smart pixel child."), he(b, "Conversion Value"));
      }
    });
  },
  tn = function (a) {
    Ie(a, vb(Hm), function (b) {
      "Tag" == b.type && ee(b.relatedIssues, "Missing conversion.js script.");
    });
  },
  un = function (a) {
    Je(a, "Google Ads Remarketing Tag", function (b) {
      B(b, "Custom parameter") &&
        ((b = we(b, "Conversion tag parameters")),
        0 < b.length &&
          b.forEach(function (c) {
            ee(c.relatedIssues, "Tag Paramater object could not be parsed.");
            var d;
            if ((d = !Re(c.relatedIssues, "Error", !0))) d = !Re(c.relatedIssues, "Suggestion", !0);
            d && (c.deleted = "JS Variable found");
          }));
    });
  },
  vn = function (a) {
    Je(a, "Google Ads Remarketing Tag", function (b) {
      ge(b, "Conversion Label", "not set");
      he(b, "Conversion Value");
    });
  },
  wn = function (a) {
    Je(a, "Google Ads Conversion Tracking", function (b) {
      ee(b.relatedIssues, "Custom parameter name");
    });
  },
  xn = function (a) {
    B(a, "Report Conversion") && (a = B(a, "No HTTP response detected")) && (a.type = "Info");
  };
Em.prototype.sa = function () {
  var a = [];
  eb(
    a,
    Cm("Google Ads Conversion Tracking", pn, Ca(this.Ic, this, "noscript", Qm), Ca(this.Ic, this, "img", Pm), xn, Ca(this.Od, this), sn),
    Cm("Google Ads Remarketing Tag", un, vn, yn),
    Cm("Google Ads Conversion Tracking", tn, qn, wn, yn),
    Bm("Website Call Metrics", function (b) {
      b = ke(b, "Website Call Metrics");
      b.length && B(b, "Script loaded.") && ee(b, "WCM loader script not detected.");
      b.length && Ee(b, 1) && ee(b, "Could not find _googWcmGet call.");
    })
  );
  return a;
};
var yn = function (a) {
  a = je(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]);
  if ((a = B(a, "No HTTP response detected")))
    a.infoLink =
      "Google Ads Remarketing Tag" == Pe(a).category
        ? "https://support.google.com/tagassistant/answer/2978937#http_response"
        : "https://support.google.com/tagassistant/answer/2947038#http_response";
};
Em.prototype.Rb = function () {
  var a = Oh([
      bn,
      cn,
      dn,
      H("Conversion value mismatch between <script> and <noscript> tag."),
      H("Conversion value mismatch between <script> and <img> tag.")
    ]),
    b = Oh(a);
  a.forEach(Km.rc);
  b.forEach(sm.rc);
  var c = this.O();
  eb(c, this.K());
  var d = Oh(c);
  d.forEach(function (e) {
    di(sm, e, "init");
  });
  eb(c, a, d, b, an);
  return c;
};
var zn = function (a, b) {
  a = ke(a, "Google Ads Remarketing Tag");
  var c = ke(b.relatedIssues, "Google Ads Remarketing Tag");
  a.forEach(function (d) {
    c.forEach(function (e) {
      we(e.relatedIssues, "Custom parameter name").forEach(function (f) {
        f.label == d.label && A(f, d);
      });
    });
  });
};
Em.prototype.Sa = function () {
  return [Bm("Google Ads Remarketing Tag", zn)];
};
Lj(new Em());
var An = function () {
  Q.call(this, "Channel Intelligence", 99);
  this.R = ["channelintelligence.com/"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(An, Q);
An.prototype.L = function () {
  return ["*://*.channelintelligence.com/*"];
};
An.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Channel Intelligence")];
  return a;
};
An.prototype.K = function (a) {
  return [
    T(
      "Channel Intelligence",
      "channelintelligence.com/",
      "Channel Intelligence",
      "http://www.google.com/ads/channelintelligence/",
      n(ad, /.channelintelligence\.com\/([^_]*)_landing.js/),
      "unchecked",
      a ? [] : [Bn, U]
    )
  ];
};
var Bn = J(
  I("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Lj(new An());
var Cn = function () {
  Q.call(this, "Google Consumer Survey", 99);
};
ra(Cn, Q);
Cn.prototype.sa = function () {
  return [];
};
Cn.prototype.K = function (a) {
  return [
    M(
      T(
        "Google Consumer Survey",
        "survey.g.doubleclick.net/survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        function (b) {
          return C(b.url).v.get("site");
        }
      ),
      a ? [] : [Dn, Ti, U]
    ),
    M(
      T(
        "Website Satisfaction Survey",
        "survey.g.doubleclick.net/async_survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        function (b) {
          return C(b.url).v.get("site");
        }
      ),
      a ? [] : [Dn, Ti, U]
    )
  ];
};
Cn.prototype.L = function () {
  return ["*://survey.g.doubleclick.net/survey*", "*://survey.g.doubleclick.net/async_survey*"];
};
Cn.prototype.O = function () {
  return [
    M(
      Li(
        "Google Consumer Survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        "//script",
        function (a) {
          var b = a.getAttribute("src");
          a = a.textContent;
          return !b && 510 > a.length && 0 < a.indexOf("//survey.g.doubleclick.net/survey?site=") && 0 < a.indexOf("document.write")
            ? x(/survey.g.doubleclick.net\/survey\?site=([^'">]*)/, a)
            : !1;
        }
      ),
      [
        Dn,
        Ii.clone(),
        N(
          wi(
            "HTML Snippet",
            function (a) {
              return Hi(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).l(
          P("Missing closing \x3c/script> tag.", function (a) {
            return x(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          Ai("Code should be added to <body> tag.", function (a) {
            return a.parentNode ? "BODY" != a.parentNode.nodeName : !1;
          })
        ),
        K(
          P("Premimum content section not found.", function () {
            return 0 == F.getElementsByClassName("p402_premium").length;
          }),
          'Wrap your premium content. Use a div with a class named "p402_premium".'
        )
      ]
    ),
    M(
      Li(
        "Website Satisfaction Survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        "//script",
        function (a) {
          return (a = a.getAttribute("src")) && 0 <= a.indexOf("survey.g.doubleclick.net/async_survey") ? C(a).v.get("site") : !1;
        }
      ),
      [
        Dn,
        Ii.clone(),
        N(
          wi(
            "HTML Snippet",
            function (a) {
              return Hi(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).l(
          P("Missing closing \x3c/script> tag.", function (a) {
            return x(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          K(
            Ai("Code should be loaded asynchronously.", function (a) {
              a = a.getAttribute("async");
              return null === a || "false" == a;
            }),
            "Add 'async=\"\"' to the <script> tag."
          ),
          Ai("Code found outside of <head> tag.", function (a) {
            return a.parentNode ? "HEAD" != a.parentNode.nodeName : !1;
          })
        )
      ]
    )
  ];
};
var Dn = M(
  J(
    I("Site ID", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  [
    H("Site ID should only contain alphanumeric characters.", function (a) {
      return !w(/^[_A-Za-z0-9]+$/, a.label);
    })
  ]
);
Lj(new Cn());
var En = function () {
  Q.call(this, "Ensighten", 99);
  this.R = ["nexus.ensighten.com/"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(En, Q);
En.prototype.L = function () {
  return ["*://*.nexus.ensighten.com/*"];
};
En.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Ensighten")];
  return a;
};
En.prototype.K = function (a) {
  return [
    T(
      "Ensighten",
      "nexus.ensighten.com/",
      "Ensighten",
      "http://www.ensighten.com/",
      n(ad, /nexus\.ensighten\.com\/([^\/]*)\//),
      "unchecked",
      [
        lj("Client ID", "ClientID"),
        lj("Page ID", "PageID"),
        jj(
          "Rules",
          "Rule %s",
          function (b) {
            b = zf(S(b), "ruleId");
            return void 0 !== b ? b : !1;
          },
          a ? [] : [U],
          void 0,
          "unchecked"
        ),
        U
      ]
    )
  ];
};
Lj(new En());
var Fn, Gn;
Fn = /^(?:https?:)?\/\/(\d+)?\.?fls\.doubleclick\.net\/(activity[ij]?)[;&\/]/i;
Gn = function (a) {
  return new RegExp("[?/&;]" + a + "=([^;&#?]*)");
};
var Hn = function (a) {
    q("Validate Products" == a.text);
    var b = He(Pe(a));
    b = (b ? we(b, "URL") : []).map(function (d) {
      return d.label;
    });
    var c = B(a.relatedIssues[0], "Product ID dimension").label + "=";
    return b.filter(function (d) {
      return 0 < d.indexOf(c);
    });
  },
  Jn = function (a) {
    a = He(Pe(a));
    (a && "Requests" == a.text ? a.relatedIssues : []).forEach(function (b) {
      var c = "NotStarted";
      we(b, "URL").some(function (d) {
        d = In(d.label);
        c = z(d + "s");
        return !!c;
      });
      if ((b = B(b, "Validation Status"))) b.label = W[c] || "Products have not been validated yet";
    });
  },
  Kn = function (a) {
    var b = "NotStarted";
    a.forEach(function (c) {
      c = In(c);
      (c = z(c + "s")) && dm[c] < dm[b] && (b = c);
    });
    return b;
  },
  Ln = function (a) {
    var b = null;
    a.forEach(function (c) {
      c = In(c);
      c = Cd(c + "t");
      if (!c) b = "";
      else if (!b || (b.length && b < c)) b = c;
    });
    return b || !1;
  },
  Mn = function (a, b) {
    a = (a = Be(b, "Validate Products")) ? Hn(a) : [];
    if (0 == a.length) return !1;
    a = Kn(a);
    this.type = hm(a);
    return "Info" == this.type && (W[a] || "Products have not been validated yet");
  },
  On = function (a, b) {
    var c = Be(b, "Validate Products");
    c.label = "Products have not been validated yet";
    b = c.relatedIssues[0];
    var d = b.label,
      e = B(b, "Product ID dimension");
    if (!e || 0 == e.label.length) return !1;
    var f = c ? Hn(c) : [];
    if (0 == f.length) return !1;
    Ih(a.tabId, Me(c) + ":" + this.text, function (g, h) {
      Nn(c, d, f, e.label);
      h();
    });
    a = Kn(f);
    this.type = hm(a);
    c.label = W[a] || "Products have not been validated yet";
    return "Info" == this.type ? "" : W[a] || "Products have not been validated yet";
  },
  Pn = function (a, b) {
    var c = Be(b, "Validate Products");
    c.label = "Products have not been validated yet";
    var d = c.relatedIssues[0],
      e = d.label;
    d = B(d, "Product ID dimension");
    if (!d || 0 == d.label.length) return !1;
    c = c ? Hn(c) : [];
    if (0 == c.length) return !1;
    a = this.Ia(a, b);
    "" != a &&
      (c.every(function (f) {
        f = In(f);
        return !!Cd(f + "t");
      }) ||
        Nn(b, e, c, (d && d.label) || ""));
    return a;
  },
  Qn = function (a, b) {
    a = this.Ia(a, b);
    b.label = a ? "Products have not been validated yet" : "To validate please enter the feed ID";
    return a;
  },
  Rn = function (a, b) {
    if (!this.context || !this.context.Ha) {
      var c = we(Pe(b), "Custom Dimensions");
      this.context = { Ha: [], values: {} };
      c.forEach(function (d) {
        d.label.split(";").forEach(function (e) {
          var f = e.split("=");
          2 == f.length &&
            ((e = f[0]),
            (f = f[1]),
            r(this.context.Ha, e) ? (this.context.values[e] += "," + f) : (ib(this.context.Ha, e), (this.context.values[e] = f)));
        }, this);
      }, this);
    }
    return this.Ia(a, b);
  },
  tj = function (a, b) {
    a = b.template.context;
    if (a.Ha.length) {
      this.o = this.o || 0;
      if ("number" === typeof this.o && this.o < a.Ha.length) return a.Ha[this.o++];
      this.o = !1;
    }
    return !1;
  },
  Sn = function (a, b) {
    return b.label && ((a = Be(b, "Validate Products")), (b = b.template.context.urls || Hn(a)), 0 < b.length) ? Ln(b) : !1;
  },
  Un = function () {
    return [
      N(rj("Floodlight", "Products have not been validated yet"), "Remarketing Validation").l(
        qj("Google Merchant Center ID", Qn, "textfield").l(
          pi(Th("To validate please enter the feed ID", G.prototype.Ka), "validate_products").otherwise(
            M(qj("Product ID dimension", Rn, "dropdown"), [
              uj(),
              pi(Th("Enter a product ID custom dimension field.", G.prototype.Ka), "validate_products").otherwise(
                M(
                  qj("Product IDs", function (a, b) {
                    return b.template.context.values[b.label];
                  }),
                  [
                    qj("Validate", On, "button_action"),
                    J(qj("Validation Status", Mn), "elapsed_time"),
                    J(qj("Last updated", Sn), "elapsed_time"),
                    qj("Auto validation", Pn, "checkbox")
                  ]
                )
              )
            ])
          ),
          qj("Get Merchant ID", Tn, "button_action")
        )
      )
    ];
  },
  Tn = function (a, b) {
    if ("Google Merchant Center ID" == this.text) {
      var c = Be(b, "Validate Products");
      if (c && 0 < Hn(c).length)
        return (
          Ih(a.tabId, Me(c) + ":" + this.text, function (d, e) {
            jm(b);
            e();
          }),
          b.label
        );
    }
    return !1;
  },
  Nn = function (a, b, c, d) {
    var e = this,
      f = new Date().getTime() + "";
    c.forEach(function (g) {
      var h = {},
        k = In(g);
      h[k + "s"] = "Requesting";
      h[k + "t"] = f;
      Id(h);
      h = {
        pixel: { type: "FLOODLIGHT_PIXEL", url: g },
        floodlightPixelInfo: { feedId: b, attributeMappings: [{ uvarName: d || "", pixelAttributeMapping: "prodid" }] }
      };
      k = t("%s?key=%s", "https://www.googleapis.com/dynamiccreatives/v1/pixels/validate", "AIzaSyCrG7PQT-YTwJ4-mYB7IOOeaZu_CSawr7M");
      jd(
        k,
        "POST",
        { "Content-Type": "application/json" },
        function (m) {
          a: {
            var p = m.status,
              v = Be(a, "Validate Products");
            if (qb(p))
              try {
                var E = JSON.parse(m.responseText);
                Vn(g, E);
                Jn(a);
                var O = v ? Hn(v) : [];
                var oa = Kn(O);
                e.label = W[oa];
                break a;
              } catch (Ga) {
                (oa = "IllegalResponse"), console.log(Ga);
              }
            else oa = 404 == p ? "NotFound" : 503 == p ? "ServerError" : "UnknownError";
            m = {};
            p = In(g);
            m[p + "s"] = oa;
            m[p + "t"] = f;
            Id(m);
            Jn(a);
            e.label = W[oa] || "Products have not been validated yet";
          }
        },
        h
      );
    });
  },
  Vn = function (a, b) {
    var c = {};
    a = In(a);
    if (b.kind)
      if (b.pixel) {
        var d = b.attributes;
        d
          ? 0 < d.length
            ? Ya(b.attributes, function (e) {
                return !e.valid;
              })
              ? (c[a + "s"] = "NotValid")
              : (c[a + "s"] = "Validated")
            : (c[a + "s"] = "Empty")
          : (c[a + "s"] = "NotIncluded");
      } else c[a + "s"] = "IllegalResponse";
    else c[a + "s"] = "IllegalResponse";
    Id(c);
  },
  In = function (a) {
    var b = x(Gn("~oref"), a);
    b = b ? C(Mc(b)).J : "";
    var c = x(Fn, a) || x(Gn("src"), a);
    return (a = (c = z(c + ":Product ID dimension")) ? x(Gn(c), a) : !1) ? "remarketing:" + b + "/-/" + a + ";" : null;
  };
var Wn = function () {
  Q.call(this, "Floodlight", 3);
};
Ea(Wn, Q);
var Xn = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(jump|ad[ijflx]?)\/.*N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  Yn = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/clk[;&]([^;&]*)[;&]([^;&]*)[;&]/i,
  Zn = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.mo\.doubleclick\.net\/dartproxy\/dfa\.(?:click|mobile)\.handler\?k=N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  $n = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/N?(\d+)?.*(ad[ijflx]?)\/([^;&]*)[;&].*[;&]tile=/i,
  ao = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net(?:\/ddm)?\/(activity[ij]?)[;&\/]/i;
Wn.prototype.L = function () {
  return ["*://*.doubleclick.net/*"];
};
var bo = function (a, b, c) {
    return x(a, c.url, b);
  },
  co = function (a, b) {
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
  eo = function (a, b, c) {
    return R(a, n(bo, b, c));
  },
  go = function (a, b) {
    return cj("URL type", function (c) {
      c = bo(a, b, c);
      return "string" === typeof c ? fo(c) : c;
    });
  },
  ho = n(eo, "Network"),
  io = function (a, b) {
    return L(J(eo("Campaign", a, b), "linked"), "http://advertisers.doubleclick.net/app_pages/campaign/mediaplan.aspx?cid=%s");
  },
  jo = L(
    M(
      J(
        I("Advertiser ID", function (a) {
          return a.label || "not set";
        }),
        "copyable"
      ),
      [
        H("Invalid or missing advertiser ID.", function (a) {
          return !w(/^[0-9]+$/, a.label || "");
        })
      ]
    ),
    "http://advertisers.doubleclick.net/app_pages/advertisers/spotlightactivities/default.aspx?aid=%s"
  ),
  lo = function (a, b) {
    return M(R(a, n(ad, Gn(b))), [ko]);
  },
  mo = function (a, b) {
    return M(
      bj("Parameter name (changed from test function)", function (c) {
        this.Hb || (this.Hb = /[?/&;,]([^;&#,?/]+)=([^;&#?/]*)/g);
        c = S(c);
        var d = c.v.toString();
        d = d ? c : c.A;
        c = Oc(this.Hb, d);
        this.o = this.Hb.lastIndex;
        return !c || -1 != a.indexOf(c[1]) || (b && $c(b, c[1])) ? !1 : ((this.text = c[1]), c[2]);
      }),
      [ko]
    );
  },
  no = function (a, b) {
    return Ai("HTML tag type must match DoubleClick tag type.", function (c) {
      var d = c.src || c.href;
      d = d ? bo(a, b, { url: d }) : null;
      return "string" === typeof d && c.tagName != fo(d).toUpperCase();
    });
  },
  oo = function (a, b) {
    return zi("Script Type", function (c) {
      c = (c = c ? c.src || c.href : "") ? bo(a, b, { url: c }) : null;
      return "string" === typeof c && fo(c);
    }).l(
      N(
        zi("IFRAME content", function (c, d) {
          return Ab(d.label, "i") && c.contentDocument && c.contentDocument.body ? ec(c.contentDocument.body.innerHTML, 1e3) : !1;
        }),
        "IFrame"
      )
    );
  },
  po = L(
    dj('URLs should end with a "?".', function (a) {
      return !id(/.*[?]$/, a);
    })
  ),
  qo = aj("Potential missing parameter(s), found '%s'.", n(ad, /(;;|&&)/)),
  ro = aj("Smart quotes not allowed in tag HREF/SRC.", n(id, /%E2%80%9[89]/i)),
  so = L(
    H("Question marks must be encoded in site-supplied click strings.", function (a) {
      return w(/[?]+/, a.label);
    })
  ),
  ko = Uh('Found "[" or "]" in parameter %s; site may not be passing required information into key value.', function (a) {
    return "pc" != a.text && w(/(\[|\])/, a.label) ? a.text : !1;
  }),
  uo = H("ord value contains unsupported symbols.", function (a) {
    return "string" === typeof a.label && !w(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
  }).otherwise(
    dj("ord value not unique enough.", function (a, b) {
      return !to(a) && 10 > b.label.length && "1" != b.label && 0 < b.label.length;
    })
  ),
  vo = n(id, /[?&;]ord=1[;&#?]/),
  wo = n(id, /[?&;]ord=[^;&#?]+/),
  xo = R("ord value needs to be populated with a sales order ID.", function (a) {
    return to(a) && !wo(a);
  }).otherwise(
    L(
      aj("ord value needs to be populated with a random value.", function (a) {
        return !to(a) && !wo(a);
      })
    )
  ),
  yo = function (a) {
    var b = S(a);
    b.v.toString() ? (b = ad(Gn("ord"), a)) : ((b = b.A), (b = x(Gn("ord"), b)));
    this.type = to(a) && "1" != b ? "Info" : "Fine";
    return b;
  },
  zo = M(J(R("ord Parameter", yo), "copyable"), [uo, ko, xo]).otherwise(xo),
  Ao = M(
    R("Order ID", function (a) {
      this.type = to(a) ? "Info" : "Hidden";
      return !a.Adapted && yo(a);
    }),
    [uo, ko, xo]
  ).otherwise(xo),
  Bo = M(qi(lo("num parameter", "num"), "Fine"), [
    H("num value needs to be populated with a random value.", function (a) {
      return "" == a.label;
    }),
    ej("num parameter only required if ord=1.", function (a) {
      return !vo(a);
    }),
    H("num value contains unsupported symbols.", function (a) {
      return "string" === typeof a.label && !w(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
    }),
    ko,
    Uh("num value not unique enough (10 or more characters required).", function (a) {
      return 10 > a.label.length;
    })
  ]).otherwise(ej("Missing num parameter.", vo)),
  Co = aj("URL must be terminated by the ord= or num= parameter", function (a) {
    if (
      (a = Ya(a.url.split("?"), function (c) {
        return 0 < c.indexOf("ord=") || 0 < c.indexOf("num=");
      }))
    ) {
      a = a.split(";");
      for (var b = null; void 0 !== b && Bb((b = a.pop())); );
      return void 0 === b;
    }
    return !0;
  }),
  to = function (a) {
    return !!$c([Gn("qty"), Gn("cost")], S(a).A);
  },
  Do = R("Version", function (a) {
    return to(a) ? "Sales Activity Tag" : "Counter Activity Tag";
  }),
  fo = function (a) {
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
  Eo =
    "1x1 88x31 120x60 120x90 120x240 120x600 125x125 160x600 180x150 234x60 240x400 250x250 300x100 300x250 300x600 336x280 468x60 720x300 728x90 970x250".split(
      " "
    ),
  Fo = M(lo("Size", "sz"), [
    Uh("sz= parameter value is not a recognized size.", function (a) {
      return !r(Eo, a.label);
    })
  ]),
  Go = M(
    J(
      R("Click", function (a) {
        return x(RegExp("[?&;]click=([^?]?[^;&#]*)"), a.url.replace(/\?$/, ""));
      }),
      "link_expandable"
    ),
    [so, ko]
  ),
  Ho = [
    zo,
    Bo,
    Go,
    M(lo("SP", "sp"), [
      H("sp= parameter incorrect.", function (a) {
        return !w(/\d+x\d+/, a.label);
      })
    ]),
    mo(["click", "num", "ord", "sp"]),
    qo
  ],
  Io = [
    lo("Type", "type"),
    lo("Category", "cat"),
    Ao,
    M(lo("Quantity", "qty"), [
      H("Quantity value contains unsupported symbols.", function (a) {
        return "string" === typeof a.label && !w(/^[0-9]+$/, a.label);
      })
    ]).otherwise(aj("Sales activity tag must have quantity argument set.", to)),
    lo("Creative ID", "cid"),
    lo("Ad ID", "aid"),
    N(
      cj("studioV2", function (a) {
        var b = ad(Gn("cid"), a);
        a = ad(Gn("aid"), a);
        return b && a ? b + "_" + a : !1;
      }),
      "studioV2"
    ),
    Bo,
    Go,
    M(lo("Cost", "cost"), [
      H("Cost value contains unsupported symbols.", function (a) {
        return !gd(a.label);
      })
    ]).otherwise(aj("Sales activity tag must have cost argument set.", to)),
    M(
      L(
        N(
          R(
            "Custom Dimensions",
            function (a) {
              for (var b = /(?:[?&;])(u[0-9]+=[^;&#?]*)/g, c = [], d = S(a); (a = Oc(b, d.A)); ) c.push(decodeURIComponent(a[1]));
              return 0 < c.length ? c.join(";") : !1;
            },
            "map"
          ),
          "Custom Dimensions"
        ),
        "https://support.google.com/ds/answer/6024747"
      ),
      [
        ko,
        L(
          aj("Custom dimension %s value is empty.", function (a) {
            for (var b = /(?:[?&;])(u[0-9]+)=([^;&#?]*)/g, c = S(a); (a = Oc(b, c.A)); ) if (0 == a[2].length) return a[1];
            return !1;
          }),
          "https://support.google.com/ds/answer/4397154"
        )
      ]
    ),
    qo,
    mo("cat click cost num ord prd qty src type".split(" "), [/^u[0-9]+$/])
  ],
  Jo = function () {
    var a = jj("Sizes", t("DFA ${%s} ${%s}", "URL type", "Size"), nb, [
      go(Xn, 1),
      Fo,
      Bo,
      Go,
      mo(["click", "ord", "num", "sz"]),
      qo,
      po,
      ro,
      Co
    ]);
    return T(
      "Campaign Manager",
      Xn.source,
      t("DFA ${%s} N${%s} B${%s}", "URL type", "Network", "Campaign"),
      "https://support.google.com/ds/answer/2828176",
      n(bo, Xn, 3)
    ).l(go(Xn, 1), ho(Xn, 2), eo("Site String", Xn, 3), io(Xn, 4), zo, a);
  },
  Ko = function () {
    return T("Campaign Manager", Yn.source, "Campaign Manager Click Tracker", "https://support.google.com/ds/answer/2828176", n(co, 0)).l(
      M(
        L(
          J(
            R("Ad", function (a) {
              return co(0, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/creatives/ad.aspx?id=%s"
        ),
        [
          H("Invalid or missing ad ID.", function (a) {
            return !w(/^\d+$/, a.label || "");
          })
        ]
      ),
      M(
        L(
          J(
            R("Placement ID", function (a) {
              return co(1, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/siteplacements/properties.aspx?id=%s"
        ),
        [
          H("Invalid or missing Placement ID.", function (a) {
            return !w(/^\d+$/, a.label || "");
          })
        ]
      ),
      go(Yn, 1),
      M(
        R("Verifier", function (a) {
          return ((a = co(2, a)) && a.split("?")[0]) || "";
        }),
        [
          H("Campaign Manager Click Tracker verifier not properly formatted.", function (a) {
            return !a.label;
          }),
          ko
        ]
      ),
      qo
    );
  },
  Lo = function () {
    return T("Campaign Manager", Zn.source, "Campaign Manager Mobile", "https://support.google.com/ds/answer/2828176", n(bo, Zn, 2)).l(
      ho(Zn, 1),
      eo("Site String", Zn, 2),
      io(Zn, 3),
      Ho,
      Co
    );
  },
  Mo = function (a) {
    var b = [
      lo("Tile", "tile").l(
        L(
          Uh("Tile number should be between 1 and 16", function (c) {
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
      lo("Size", "sz"),
      lo("Tag ID", "tagid"),
      lo("oba", "oba"),
      lo("Keywords", "kw"),
      mo("kw oba oe ord sz site tagid tile".split(" ")),
      Co
    ];
    a && eb(b, a);
    return T("Google Ad Manager", $n.source, t("DFP ${%s}", "URL type"), "http://support.google.com/dfp/", n(ad, $n)).l(
      ho($n, 1),
      go($n, 2),
      lo("Site", "site"),
      lo("Encoding", "oe"),
      zo,
      jj("Ad Slots", t("%s ${%s}", "Ad Slot", "Tile"), nb, b)
    );
  },
  Oo = function (a) {
    var b = T(
      "Floodlight",
      Fn.source,
      t("%s Dynamic ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return ad(Fn, e) || x(Gn("src"), S(e).A);
      }
    ).l(jo, Do, go(Fn, 2), kj("Customer ID", "cid"), kj("Ad ID", "aid"), po, ro, Co, cj("validation anchor"));
    if (0 < arguments.length) {
      for (var c = Oh(Io), d = 0; d < arguments.length; d++) eb(c, arguments[d]);
      b.l(jj("Requests", "Request %s", nb, c, No));
    }
    return b;
  },
  Po = function (a) {
    var b = T(
      "Floodlight",
      ao.source,
      t("%s Static ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return x(Gn("src"), S(e).A);
      }
    ).l(jo, Do, go(ao, 1), lj("Customer ID", "cid"), lj("Ad ID", "aid"), po, ro, Co);
    if (0 < arguments.length) {
      for (var c = Oh(Io), d = 0; d < arguments.length; d++) eb(c, arguments[d]);
      b.l(jj("Requests", "Request %s", nb, c, No));
    }
    return b;
  },
  Qo = function () {
    var a = RegExp("m[0-9]+:([^;|]*)");
    return M(I("Merchant Center ID", n(Zh, RegExp("m[0-9]*:([^;|]*)"))), [
      H("Merchant Center ID attribute must not contain an index.", function (b) {
        return x(a, b.parent.label);
      })
    ]);
  },
  Ro = function (a, b) {
    return I(a, function (c) {
      return x(new RegExp(b + c.label + ":([^;|]*)"), c.parent.parent.label);
    });
  },
  So = function () {
    return M(
      cj("prd", function (a) {
        return (a = ad(Gn("prd"), a)) ? Mc(a + "") : !1;
      }),
      [
        Qo(),
        I("Country", n(Zh, RegExp("c:([^;|]*)"))),
        I("Language", n(Zh, RegExp("l:([^;|]*)"))),
        H('Missing index for cart item "%s".', n(Zh, /(?:^|;)([ipq]):[^;|]*/)),
        jj(
          "Products",
          "Item %s",
          nb,
          [
            M(Ro("Item ID", "i"), [
              H("Product Item ID is missing.", function (a) {
                return "" == a.label;
              }).otherwise(H("Product Item ID contains illegal characters.", n(Zh, /[<:?]/)))
            ]).otherwise(H("Product Item ID is missing.")),
            M(Ro("Price per item", "p"), [
              H("Product Item price is missing.", function (a) {
                return "" == a.label;
              }).otherwise(H("Product Item price should be a number.", n(Zh, /[^-.0-9]+/)))
            ]).otherwise(H("Product Item price is missing.")),
            M(Ro("Quantity", "q"), [
              H("Product Item quantity is missing.", n(Yh, "")).otherwise(
                H("Product Item quantity should be an integer.", n(Zh, /[^0-9]+/))
              )
            ]).otherwise(H("Product Item quantity is missing.")),
            H("Item index should start at 1.", n(Yh, "0")),
            M(Ro("Account ID", "a"), [
              H("Account ID should be an integer.", function (a) {
                return !x(/^[0-9]*/, a.label);
              }),
              H("Account ID should not be empty.", function (a) {
                return "" == a.label.trim();
              })
            ]),
            Ro("Country", "c"),
            Ro("Language", "l")
          ],
          function (a, b) {
            this.Kb || (this.Kb = /[ipq]([0-9]+):([^;|]*)[;|]?/g);
            a = x(this.Kb, b.parent.label);
            this.o = this.Kb.lastIndex;
            return a && 0 == qe(b, [a + ""]).length ? a : !1;
          }
        ),
        H("Item indices should be subsequent order and no index must be skipped.", function (a) {
          if ((a = B(a, "Products"))) {
            if (0 < qe(a, ["", "0"]).length) return !1;
            for (var b = 1, c = a.relatedIssues.length + 1; b < c; b++) if (0 == qe(a, [b + ""]).length) return b + "";
          }
          return !1;
        }),
        H("prd attribute malformed.", function (a) {
          return !w(/^([maclipq]([0-9]*):([^;|]*)($|[;|]))+$/, a.label);
        }),
        H("Attribute %s occurs multiple times.", function (a) {
          a = Lc(/([mclipq][0-9]*):(?:[^;|]*)(?:$|[;|])/g, a.label).sort();
          for (var b = 0, c = a.length - 1; b < c; b++) if (a[b + 1] == a[b]) return a[b];
          return !1;
        })
      ]
    );
  },
  No = function (a) {
    if (!to(a)) return "${bucketIndex}";
    a = S(a).A;
    var b = x(Gn("ord"), a);
    return null == b || "1" == b ? "num=" + x(Gn("num"), a) : "ord=" + b;
  },
  To = function (a) {
    a = (a = co(2, a)) ? a.split("?") : [];
    return 1 < a.length ? (a.shift(), a.join("?")) : "";
  };
Wn.prototype.K = function () {
  return [
    Jo().l(U, Ti),
    Ko().l(
      jj(
        "Tags",
        "Click Tracker",
        nb,
        [
          M(R("Click-through URL", To), [
            aj("Campaign Manager Click Tracker click-through URL must start with http://, https://, tel://, or mailto://", function (a, b) {
              return "ds" == S(a).v.get("u") ? !1 : !w(/^(http|https|mailto|tel):\/\//, b.label);
            })
          ]),
          ko,
          L(
            dj("Replace semicolons in <meta> click-tracker tag with their ASCII equivalent (%3b)", function (a) {
              return 302 == a.statusCode && Db(a.url, ";");
            })
          ),
          U,
          Ti
        ],
        function (a) {
          return a.url;
        }
      )
    ),
    Lo().l(U, Ti),
    Mo(U),
    Oo(U, So(), Ti),
    Po(U, So(), Ti)
  ];
};
var Uo = function (a, b, c) {
  var d = new ri(
    b.type,
    b.category,
    b.text,
    b.infoLink,
    c,
    function (e, f) {
      this.qa = {};
      this.qa.Adapted = !0;
      this.qa.node = e;
      this.qa.url = e ? e.src || e.href : "";
      if ((e = oj(b, this.qa.url) && b.pa(this.qa, f))) this.text = b.text;
      return e;
    },
    b.format
  );
  b.view && N(d, b.view);
  b.la && (d.la = 2 == b.la.issueClass ? Uo(a, b.la) : b.la.clone());
  b.ma.forEach(function (e) {
    d.ma.push(2 == e.issueClass ? Uo(this, e) : e.clone());
  }, a);
  return d;
};
Wn.prototype.sa = function () {
  return [];
};
Wn.prototype.O = function () {
  return [
    Uo(
      this,
      Jo(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(
      Ii,
      Gi().l(
        Ci,
        P("Jump tag type found in non-anchor HTML tag.", function (a, b) {
          b = B(b.parent, "URL type");
          return !(!b || "jump" != b.label || "A" == a.tagName);
        }),
        oo(Xn, 1),
        no(Xn, 1)
      )
    ),
    Uo(
      this,
      Ko(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(
      Ki(
        "Tags",
        "Click Tracker",
        [
          zi("Click-through URL", function (a, b) {
            return To({ url: b.label });
          }),
          Gi().l(Ci)
        ],
        function (a, b) {
          return b.parent.template.qa.url;
        }
      )
    ),
    Uo(
      this,
      Lo(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(Ii, Gi().l(Ci)),
    Uo(
      this,
      Mo(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(Ii, Gi().l(Ci, oo($n, 2), no($n, 2))),
    Uo(
      this,
      Oo(Ii, Gi().l(Ci, oo(Fn, 2), no(Fn, 2))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ),
    Uo(
      this,
      Po(Ii, Gi().l(Ci, oo(ao, 1), no(ao, 1))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    )
  ];
};
Wn.prototype.pb = function () {
  return [
    J(
      new Ni(
        "Warning",
        "Floodlight",
        'The extension "%s" may prevent Floodlight tags from working correctly',
        "chrome://extensions/#",
        function (a) {
          this.infoLink = a.homepageUrl;
          return a.enabled && r(["gighmmpiobklfepjocnamgkkbiglidom"], a.id) && a.enabled && a.name;
        }
      ),
      "linked"
    )
  ];
};
Wn.prototype.Y = function () {
  var a = {};
  a["validation anchor"] = Un();
  return a;
};
Lj(new Wn());
var Vo = function (a) {
    return L(
      H("Unknown method name: '%s'", function (b) {
        var c = b.text.toLowerCase();
        return !a(c) && !a("_" + c) && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#unknown_method"
    );
  },
  Wo = function (a, b) {
    return H("Wrong case for method name: '%s'", function (c) {
      var d = a(c),
        e = c.text.toLowerCase();
      return !d && b(e) && c.text;
    });
  },
  Xo = function (a) {
    return L(
      Th("Deprecated method used: '%s'", function (b) {
        var c = a(b);
        return !!c && !!c.ya && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#remove_method"
    );
  },
  Yo = function (a) {
    return H("Retired method used: '%s'", function (b) {
      var c = a(b);
      return !!c && !!c.cc && b.text;
    });
  },
  Zo = function (a, b, c, d) {
    var e = (c.j || []).length;
    c.H && (e -= c.H);
    var f = d.length;
    if (f < e)
      return (
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
        t("Missing %s required parameter(s) for method '%s'.", e - f, b)
      );
    if (f > (c.j || []).length)
      return (
        (c = f - (c.j || []).length),
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
        t("Method '%s' has %s additional parameter.", b, c)
      );
    for (e = 0; e < f; e++)
      if (c.types && c.types[e] && (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) && Oc(/^["'].*["']$/, d[e]))
        return (
          (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes"),
          t("The value for parameter '%s' in method '%s' should not be quoted.", c.j[e], b)
        );
    return !1;
  };
var $o = /^ga[.(]/,
  ap = /\(([^;]+)\)/g,
  bp = /\(([^;]+)\)/g,
  cp = /(?:.|\n)*?(?:ga\.|tracker\.)([^;]*?);/g,
  dp = /['"]?(?:(.*\.)?)([a-zA-Z0-9_:]*)['"]?/,
  ep = { hitCallback: 7, sessionControl: 1 },
  fp = {
    create: {
      j: ["trackingId", "auto", "cookieDomain", "name", "opt_configObject"],
      types: [1, 11, 11, 11, 5],
      H: 4,
      V: {
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
    getByName: { j: ["name"], types: [1], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" },
    getAll: { j: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" },
    require: { j: ["module", "script"], H: 1 },
    send: {
      variations: {
        appview: { j: ["hitType", "appName", "appVersion"], H: 1, V: ep },
        event: {
          j: ["hitType", "eventCategory", "eventAction", "eventLabel", "eventValue"],
          types: [1, 1, 1, 1, 3],
          H: 2,
          V: ep,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/events"
        },
        exception: { j: ["hitType", "exDescription", "exFatal"], H: 1, V: ep, types: [1, 1, 2] },
        item: {},
        pageview: {
          j: ["hitType", "page", "title"],
          types: [1, 1, 1],
          H: 2,
          V: ep,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/pages"
        },
        social: {
          j: ["hitType", "socialNetwork", "socialAction", "socialTarget"],
          V: ep,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"
        },
        timing: {
          j: ["hitType", "timingCategory", "timingVar", "timingValue", "timingLabel"],
          types: [1, 1, 1, 3, 1],
          V: ep,
          H: 1,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"
        },
        transaction: {}
      }
    },
    set: {
      j: ["fieldName", "value"],
      types: [1, 12],
      V: {
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
      vb: 1,
      link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"
    },
    get: { j: ["fieldName"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" }
  },
  gp = {
    displayfeatures: {},
    ecommerce: {
      addItem: {
        j: "id name sku category price quantity".split(" "),
        H: 4,
        V: {},
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      addTransaction: {
        j: ["id", "affiliation", "revenue", "shipping", "tax"],
        H: 4,
        V: {},
        U: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      clear: { j: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" },
      send: { j: [], V: ep, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" }
    },
    ec: {
      addProduct: {
        j: ["productObject"],
        types: [5],
        V: { id: 1, name: 1, brand: 1, category: 1, variant: 1, price: 1, quantity: 3, coupon: 1, position: 3 },
        vb: 0,
        bc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addPromo: {
        j: ["promoObject"],
        types: [5],
        V: { id: 1, name: 1, promo: 1, position: 1 },
        vb: 0,
        bc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addImpression: {
        j: ["impressionObject"],
        types: [5],
        V: { id: 1, name: 1, list: 1, brand: 1, category: 1, variant: 1, position: 3, price: 1 },
        vb: 0,
        bc: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      setAction: {
        j: ["action", "actionObject"],
        H: 1,
        types: [1, 5],
        V: { id: 1, affiliation: 1, revenue: 1, tax: 1, shipping: 1, coupon: 1, list: 1, step: 3, option: 1 },
        vb: 1,
        bc: ["id"],
        U: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      }
    },
    inpage_linkid: {},
    linker: {
      decorate: { j: ["target"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain" },
      autoLink: {
        j: ["targets", "autolinkAnchor", "autolinkForm"],
        H: 2,
        types: [6, 4, 4],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"
      }
    }
  },
  hp = [];
tb(fp, function (a, b) {
  hp.push(b.toLowerCase());
});
tb(gp, function (a, b) {
  var c = b.toLowerCase();
  tb(a, function (d, e) {
    hp.push(c + ":" + e.toLowerCase());
  });
});
var ip = {},
  jp = function (a) {
    var b = a.text;
    if ("require" == b) (b = a.label.split(",")), 1 < b.length && ((b = x(/['"]([a-zA-Z0-9]*)['"]/, b[1])), (ip[b] = a.label));
    else if (0 < b.indexOf(":")) return (a = b.split(":")), (a = 2 == a.length && a.shift()), !ip[a] && a;
    return !1;
  },
  lp = function (a) {
    var b = fp,
      c = a.text,
      d = c.split(":"),
      e = 2 == d.length && d.shift();
    "string" === typeof e && ((b = gp[e]), (c = d.join(":")));
    return b ? (b[c] && b[c].le ? ((a = kp(a)), a.shift(), (a = x(/['"]?([^'"]*)['"]?/, a[0])), b[c].le[a] || b[c]) : b[c]) : null;
  },
  mp = function (a) {
    var b = a.split(":");
    b = 2 == b.length && b.shift();
    if ("string" === typeof b) {
      if ("_" == b.charAt(0)) return !1;
      if (!gp[b]) return !0;
    }
    return r(hp, a.toLowerCase());
  },
  np = function (a) {
    return r(hp, a.toLowerCase());
  },
  kp = function (a) {
    if (w(/^[_:a-zA-Z]+\(/, a.label)) {
      var b = a.text;
      a = x(/\s*(?:[^\(]*)\(([^\)]*)\)/, a.label);
      a = "string" === typeof a ? (Bb(a) ? b : t("%s, %s", b, a)) : "";
      b = Tc(a);
    } else b = Tc(a.label);
    return b;
  },
  op = function () {
    return M(
      yi("Method", function (a, b) {
        var c = b.label;
        var d = ap.lastIndex;
        if (0 != c.indexOf("ga(function")) {
          ap = bp;
          ap.lastIndex = d;
          var e = x(ap, c);
        }
        "string" !== typeof e && ((ap = cp), (ap.lastIndex = d), (e = x(ap, c)));
        c = e;
        this.o = ap.lastIndex;
        if ("string" === typeof c && (d = Qc(c)))
          if ((d = Oc(dp, d[0]))) {
            e = RegExp;
            var f = d[1] || "";
            b = Pe(b).label;
            f && (f = f.replace(".", ""));
            b = t("['\"]create['\"]\\s*,\\s*[\"']%s[\"'](?:,\\s{\\s*name:\\s[\"']%s[\"'])?", b, f);
            if (!x(new e(b, "im"), a.textContent)) return !1;
            a = this.text = d[2];
            this.infoLink = (fp[a] && fp[a].link) || null;
          } else return !1;
        return c;
      }),
      [
        H('Missing require for plugin "%s".', jp),
        Vo(mp),
        Wo(lp, np),
        Xo(lp),
        Yo(lp),
        M(
          L(
            H("%s", function (a) {
              var b = kp(a);
              b.shift();
              var c = lp(a),
                d;
              if ((d = !!c && !!c.j))
                a: {
                  a = a.text;
                  var e = c.j.length;
                  c.H && (e -= c.H);
                  d = b.length;
                  if (d < e && (0 == d || !c.V || Oc(/^["'].*["']$/, b[d - 1])))
                    (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
                      (d = t("Missing %s required parameter(s) for method '%s'.", e - d, a));
                  else if (d > c.j.length)
                    (b = d - c.j.length),
                      (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
                      (d = t("Method '%s' has %s additional parameter.", a, b));
                  else {
                    for (e = 0; e < d; e++)
                      if (
                        c.types &&
                        c.types[e] &&
                        (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) &&
                        Oc(/^["'].*["']$/, b[e])
                      ) {
                        this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes";
                        d = t("The value for parameter '%s' in method '%s' should not be quoted.", c.j[e], a);
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
            Rh(
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
var pp = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gat/methods/gaJSApi_gat",
      methods: {
        _anonymizeIp: {},
        _createTracker: { j: ["opt_account", "opt_name"], H: 2, types: [1, 1], U: 5 },
        _forceSSL: { j: ["forceSSL"], H: 1, types: [4] },
        _getTracker: { j: ["account"], types: [1], ya: !0, U: 5 },
        _getTrackerByName: { j: ["opt_name"], H: 1, types: [1], U: 5 },
        _getTrackers: { U: 6 }
      }
    }
  ],
  qp = {};
pp.forEach(function (a) {
  xb(qp, a.methods);
});
var rp = [];
tb(qp, function (a, b) {
  rp.push(b.toLowerCase());
});
var sp = function (a) {
    return qp[a.text];
  },
  tp = function (a) {
    return r(rp, a.toLowerCase());
  },
  up = function () {
    return M(
      Sh("Method", function (a) {
        return (a = Oc(/([_.a-zA-Z]*)\((.*)\)/, a.label)) ? ((this.text = a[1]), a[2]) : !1;
      }),
      [
        H("Missing leading '_' in method name: '%s'", function (a) {
          return tp("_" + a.text) && a.text;
        }),
        Vo(tp),
        Wo(sp, tp),
        Xo(sp),
        Yo(sp),
        H("%s", function (a) {
          var b = a.label.length ? a.label.split(",") : [],
            c = sp(a);
          return !!c && Zo(this, a.text, c, b);
        })
      ]
    );
  },
  vp = function () {
    return L(
      M(
        yi("_gat", function (a) {
          var b = /_gat\.([_a-zA-Z.]*\([^)]*\))/g;
          b.lastIndex = this.o;
          a = x(b, a.textContent);
          this.o = b.lastIndex;
          return a ? a : !1;
        }),
        [up()]
      ),
      "http://developers.google.com/analytics/devguides/collection/gat/methods/"
    );
  };
var wp = function (a, b, c) {
    this.bb = a;
    this.Wa = b;
    this.Kc = c;
  },
  xp = {};
xp.async = new wp(
  n(t, "['\"]%s_setAccount['\"]\\s*,\\s*['\"]%s['\"]"),
  { Xc: /^_gaq\.push/, method: /\s*(\[(?:(?!\]\s*,).|\n)*\])\s*(?:,|\))\s*/g, bb: /['"](?:(.*\.)?)([a-zA-Z0-9_]*)['"]/ },
  function (a) {
    a = x(/^\s*\[\s*((.|\n)*?)\s*\]\s*$/, a);
    return Tc("string" === typeof a ? a : "");
  }
);
xp.sync = new wp(
  n(t, "_gat.%s_getTracker\\(['\"]%s['\"]\\)"),
  { Xc: /^pageTracker\./, method: /\s*([^\)]*\)\s*$)/g, bb: /(?:(.*\.)?)\.([a-zA-Z0-9_]*)/ },
  function (a, b) {
    a = x(/\s*(?:[^\(]*)\(([^\)]*)\)/, a);
    a = "string" === typeof a ? (Bb(a) ? b : t("%s, %s", b, a)) : "";
    return Tc(a);
  }
);
var yp = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration",
      methods: {
        _deleteCustomVar: { j: ["index"], types: [2] },
        _getName: { j: [], U: 1 },
        _getAccount: { j: [], U: 1 },
        _getVersion: { j: [], U: 1 },
        _getVisitorCustomVar: { j: ["index"], types: [2], U: 1 },
        _initData: { j: [], types: [], ya: !0 },
        _setAccount: { j: ["accountID"] },
        _setCookiePersistence: { j: ["milliseconds"], types: [3], ya: !0 },
        _setCustomVar: { j: ["index", "name", "value", "opt_scope"], types: [2, 1, 1, 2], H: 1 },
        _setSampleRate: { j: ["newRate"], types: [10] },
        _setSessionTimeout: { j: ["newTimeout"], types: [10], ya: !0 },
        _setSessionCookieTimeout: { j: ["cookieTimeoutMillis"], types: [3] },
        _setSiteSpeedSampleRate: { j: ["sampleRate"], types: [3] },
        _setVar: { j: ["newVar"], ya: !0 },
        _setVisitorCookieTimeout: { j: ["cookieTimeoutMillis"], types: [3] },
        _trackPageLoadTime: { j: [], ya: !0, link: "http://support.google.com/analytics/bin/answer.py?answer=1205784" },
        _trackPageview: { j: ["opt_pageURL"], H: 1 }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiCampaignTracking",
      methods: {
        _setAllowAnchor: { j: ["bool"], types: [4] },
        _setCampContentKey: { j: ["newCampContentKey"] },
        _setCampMediumKey: { j: ["newCampMedKey"] },
        _setCampNameKey: { j: ["newCampNameKey"] },
        _setCampNOKey: { j: ["newCampNOKey"] },
        _setCampSourceKey: { j: ["newCampSrcKey"] },
        _setCampTermKey: { j: ["newCampTermKey"] },
        _setCampaignCookieTimeout: { j: ["cookieTimeoutMillis"], types: [3] },
        _setCampaignTrack: { j: ["bool"], types: [4] },
        _setCookieTimeout: { j: ["newDefaultTimeout"], types: [3], pf: [1], ya: !0 },
        _setReferrerOverride: { j: ["newReferrerUrl"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory",
      methods: {
        _cookiePathCopy: { j: ["newPath"] },
        _getLinkerUrl: { j: ["targetUrl", "useHash"], U: 1 },
        _link: { j: ["targetUrl", "useHash"] },
        _linkByPost: { j: ["formObject", "useHash"] },
        _setAllowHash: { j: ["bool"], types: [4], ya: !0 },
        _setAllowLinker: { j: ["bool"], types: [4] },
        _setCookiePath: { j: ["newCookiePath"] },
        _setDomainName: { j: ["newDomainName"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEcommerce",
      methods: {
        _addItem: { j: "orderId sku name category price quantity".split(" ") },
        _addTrans: { j: "orderId affiliation total tax shipping city state country".split(" "), U: "_gat.GA_EComm_.Transactions_" },
        _trackTrans: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking?",
      methods: { _trackEvent: { j: ["category", "action", "opt_label", "opt_value", "opt_noninteraction"], types: [1, 1, 1, 2, 4], H: 3 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSearchEngines",
      methods: {
        _addIgnoredOrganic: { j: ["newIgnoredOrganicKeyword"] },
        _addIgnoredRef: { j: ["newIgnoredReferrer"] },
        _addOrganic: {
          j: ["newOrganicEngine", "newOrganicKeyword", "opt_prepend", "opt_displayName", "opt_urlPattern"],
          types: [1, 1, 4, 1, 1],
          H: 3
        },
        _clearIgnoredOrganic: { j: [] },
        _clearIgnoredRef: { j: [] },
        _clearOrganic: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSocialTracking",
      methods: { _trackSocial: { j: ["network", "socialAction", "opt_target", "opt_pagePath"], H: 2 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiWebClient",
      methods: {
        _getClientInfo: { j: [], U: 4 },
        _getDetectFlash: { j: [], U: 4 },
        _getDetectTitle: { j: [], U: 4 },
        _setClientInfo: { j: ["bool"], types: [4] },
        _setDetectFlash: { j: ["bool"], types: [4] },
        _setDetectTitle: { j: ["bool"], types: [4] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUrchin",
      methods: {
        _getLocalGifPath: { j: [], U: 1 },
        _getServiceMode: { j: [], U: 3 },
        _setLocalGifPath: { j: ["newLocalGifPath"] },
        _setLocalRemoteServerMode: { j: [] },
        _setLocalServerMode: { j: [] },
        _setRemoteServerMode: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUserTiming",
      methods: { _trackTiming: { j: ["category", "variable", "time", "opt_label", "opt_sampleRate"], types: [1, 1, 3, 1], H: 2 } }
    },
    {
      link: "http://support.google.com/analytics/bin/answer.py?answer=2558867",
      methods: { _require: { j: ["inpage_linkid", "pluginUrl"] } }
    },
    {
      link: null,
      methods: {
        _addDevId: { j: ["devId"], types: [1] },
        _anonymizeIp: { j: [] },
        _clearTrans: { j: [] },
        _clearXKey: { j: ["projectId"], types: [2] },
        _clearXValue: { j: ["projectId"], types: [2] },
        _createEventTracker: { j: ["name"], types: [1] },
        _get: { j: ["key"], types: [1] },
        _getPlugin: { j: ["name"], types: [1] },
        _getXKey: { j: ["projectId", "num"], types: [3, 3] },
        _getXValue: { j: ["projectId", "num"], types: [3, 3] },
        _sendXEvent: { j: [] },
        _set: { j: ["key", "value"], types: [1, 1] },
        _setAutoTrackOutbound: { j: [], types: [], cc: !0 },
        _setTrackOutboundSubdomains: { j: [], types: [], cc: !0 },
        _setHrefExamineLimit: { j: [], types: [], cc: !0 },
        _setMaxCustomVariables: { j: ["maxCustomVars"], types: [2] },
        _setPageGroup: { j: ["index", "value"], types: [3, 1] },
        _setTransactionDelim: { j: ["delim"], types: [1] },
        _setXKey: { j: ["key"], types: [1] },
        _setXValue: { j: ["value"], types: [1] },
        _visitCode: { j: [] }
      }
    }
  ],
  zp = {};
yp.forEach(function (a) {
  xb(zp, a.methods);
  pp.forEach(function (b) {
    tb(b, function (c, d) {
      zp["gat." + d] = c;
    });
  });
});
var Ap = [];
tb(zp, function (a, b) {
  Ap.push(b.toLowerCase());
});
var Bp = function (a) {
    return zp[a.text];
  },
  Cp = function (a) {
    return r(Ap, a.toLowerCase());
  },
  Dp = function (a) {
    var b = Ya(yp, function (c) {
      return void 0 !== c.methods[a];
    });
    return b ? b.methods[a].link || b.link : null;
  },
  Fp = function (a) {
    var b = xp[a];
    return L(
      M(
        yi("Statements", function (c) {
          return b.Wa && (this.o = c = bd(c.textContent, this.o)) && x(b.Wa.Xc, c.text) ? c.text : !1;
        }),
        [Ep(b)]
      ),
      "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
    );
  },
  Ep = function (a) {
    return M(
      yi("Method", function (b, c) {
        var d = x(a.Wa.method, c.label);
        this.o = a.Wa.method.lastIndex;
        if ("string" === typeof d) {
          var e = Qc(d);
          if (0 < e.length)
            if ((e = Oc(a.Wa.bb, e[0]))) {
              if (!x(new RegExp(a.bb(e[1] || "", Pe(c).label), "im"), b.textContent)) return !1;
              this.text = e[2];
              this.infoLink = Dp(this.text);
            } else return !1;
        }
        return d;
      }),
      [
        L(
          H("Missing leading '_' in method name: '%s'", function (b) {
            return Cp("_" + b.text) && b.text;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_underscore"
        ),
        Vo(Cp),
        Wo(Bp, Cp),
        Xo(Bp),
        Yo(Bp),
        M(
          L(
            H("%s", function (b) {
              if (a.bb && a.Kc) {
                var c = a.Kc(b.label, b.text);
                c.shift();
                var d = Bp(b);
                return !!d && Zo(this, b.text, d, c);
              }
              return !1;
            }),
            "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"
          ),
          [
            Rh(
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
var Gp = function () {
  Q.call(this, "Google Tag Manager", 99);
  this.R = ["googletagmanager.com/gtm.js"];
};
Ea(Gp, Q);
var Hp = [
  "Google Ads Conversion Tracking",
  "Google Ads Remarketing Tag (old)",
  "Google Ads Remarketing Tag (new)",
  "Google Analytics",
  "Floodlight"
];
Gp.prototype.L = function () {
  return ["*://*.googletagmanager.com/gtm.js*"];
};
var Ip = [];
tb(
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
    Ip.push(b.toLowerCase());
  }
);
var Jp = M(
  L(
    J(
      I("Account ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  [
    L(
      H("Invalid or missing account ID", function (a) {
        return !w(/^GTM-[0-9A-Z]{4,9}$/, a.label);
      }),
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags"
    )
  ]
);
Gp.prototype.K = function (a) {
  return [
    M(
      T(
        "Google Tag Manager",
        "googletagmanager.com/gtm.js",
        t("%s ${%s}", "Google Tag Manager", "Account ID"),
        "http://support.google.com/tagmanager/answer/2574370",
        function (b) {
          return C(b.url).v.get("id");
        }
      ),
      a ? [] : [Jp, L(Ti, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#nonstandard"), qi(nj(), "Fine")]
    )
  ];
};
Gp.prototype.Y = function () {
  return { "Account ID": [Ej("Google Tag Manager")] };
};
Gp.prototype.O = function () {
  var a = Gi();
  a.l(
    P("Missing closing \x3c/script> tag.", function (b) {
      return !b.externalScript && x(/<\/html>\s*$/m, b.textContent);
    }),
    Kp(),
    Sh("Script", function (b) {
      return "http://www.googletagmanager.com/gtm.js?id=" + b.label;
    }),
    L(Ci, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#iframe"),
    Di,
    Ei
  );
  return [
    Li(
      "Google Tag Manager",
      t("%s ${%s}", "Google Tag Manager", "Account ID"),
      "http://support.google.com/tagmanager/answer/2574370",
      '//script[contains(@src, "www.googletagmanager.com/gtm.js?id=")]',
      function (b) {
        return x(/gtm.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l(Jp, a)
  ];
};
var Kp = function () {
  var a = Mi(
    zi("Data Layer Variable", function (b, c) {
      b = x(
        new RegExp(
          "\\(window,\\s*document\\s*,\\s*['\"]script['\"]\\s*,\\s*['\"]([^'\"]*)['\"]\\s*,\\s*['\"]" + c.parent.label + "['\"]\\)",
          "m"
        ),
        b.textContent
      );
      "string" === typeof b && (this.type = "dataLayer" == b ? "Hidden" : "Info");
      return b;
    }),
    '//script[contains(text(),"www.googletagmanager.com/gtm.js")]'
  );
  a.l(
    Mi(
      L(
        P("Data layer needs to be above the container snippet", function (b, c) {
          return x(new RegExp(c.label + "\\s*=\\s*\\[\\s*[{]([^;]*)[}]\\s*\\]\\s*;", "im"), b.textContent);
        }),
        "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#dl_snippet"
      ),
      function (b, c) {
        b = c.parent.parent.label;
        c = c.label;
        return (
          '//script[contains(translate(text(), " &#13;&#10;", ""), "\'' +
          c +
          "','" +
          b +
          '\'") or contains(translate(text(), " &#13;&#10;", ""), \'"' +
          c +
          '","' +
          b +
          '"\')]/following::script[contains(text(), "dataLayer")]'
        );
      }
    )
  );
  a.l(
    L(
      Bi("GTM JavaScript code not found as a direct child of the <head> tag", function (b) {
        return b.parentNode ? "HEAD" != b.parentNode.nodeName : !1;
      }),
      "http://support.google.com/tagmanager/answer/2574370"
    )
  );
  a.l(
    L(
      Bi("GTM no-script code not found: either missing or not in <body>", function (b) {
        for (var c = F.evaluate("//noscript", F, null, XPathResult.ANY_TYPE, null); (b = c.iterateNext()); )
          if (b.parentNode && "BODY" == b.parentNode.nodeName) {
            var d = b.innerText.indexOf("www.googletagmanager.com/ns.html?id=");
            if (!(0 > d || b.innerText.indexOf("iframe") > d)) return !1;
          }
        return !0;
      }),
      "http://support.google.com/tagmanager/answer/2574370"
    )
  );
  a.l(
    L(
      Bi("GTM no-script code found outside of <noscript> tag", function (b) {
        for (
          var c = F.evaluate('//iframe[contains(@src, "www.googletagmanager.com/ns.html?id=")]', F, null, XPathResult.ANY_TYPE, null);
          (b = c.iterateNext());

        )
          if (!b.parentNode || "NOSCRIPT" != b.parentNode.nodeName) return !0;
        return !1;
      }),
      "http://support.google.com/tagmanager/answer/2574370"
    )
  );
  a.l(
    L(
      P("<script> tag must not be included in a <%s>", function (b) {
        return b.parentNode
          ? "HEAD" != b.parentNode.nodeName && "BODY" != b.parentNode.nodeName && b.parentNode.nodeName.toLowerCase()
          : !1;
      }),
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#script_flow"
    )
  );
  return a;
};
Gp.prototype.Sa = function () {
  return [Bm("Google Tag Manager", Lp)];
};
var Mp = function (a) {
    re(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
      b.infoLink = "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#http_response";
    });
  },
  Np = function (a) {
    a = xe(a, "HTTP response code indicates tag failed to fire: Status 404", "404");
    a.length &&
      a.forEach(function (b) {
        b.type = "Warning";
        b.text += ". This could be due to an empty or un-published container";
      });
  };
Gp.prototype.sa = function () {
  return [
    Bm("Google Tag Manager", function (a) {
      a = ue(a, ["Google Tag Manager"]);
      Mp(a);
      Np(a);
    }),
    zm(
      "Suggestion",
      "Google Tag Manager",
      "Multiple installations of Google Tag Manager detected",
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags",
      function (a) {
        return 1 < ue(a, ["Google Tag Manager"]).length;
      }
    ),
    L(
      zm(
        "Suggestion",
        "Google Tag Manager",
        "Consolidate your tags with Google Tag Manager.",
        "http://support.google.com/tagmanager/",
        function (a) {
          if (!ke(a, "Google Tag Manager").length) {
            var b = [];
            Ie(a, Hp, function (c) {
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
var Lp = function (a, b) {
  a = ke(a, "Google Tag Manager");
  var c = ke(b.relatedIssues, "Google Tag Manager");
  a.forEach(function (d) {
    xe(c, "Data Layer Variable", d.label).forEach(function (e) {
      A(e, d);
    });
  });
};
Lj(new Gp());
var Op = function () {
  Q.call(this, "Google Analytics", 2);
  this.uc = !0;
};
Ea(Op, Q);
var Pp = /\/collect$/,
  Qp = /\/__utm.gif/,
  Rp = [];
Rp[5] = ["Category", "Action", "Label", "Value"];
Rp[14] = ["Category", "Variable", "Time", "Label", "Sample Rate"];
var Sp = [];
Sp[5] = /(?:\d*\([^)]*\))*5\(([^)]*)\)(?:\(([^)]*)\))*/;
Sp[14] = /(?:\d*\([^)]*\))*14\((?:[0-9]*!)?([^)]*)\)/;
var Tp = [];
Tp[5] = "Event";
Tp[14] = "Page Load";
var Up = { 1: " (visitor)", 2: " (session)", 3: " (page)" },
  Vp = t("%s ${%s}", "Google Analytics", "Web Property ID"),
  Wp = ["utmac", "tid"],
  Xp = ["utme"],
  Yp = [" N/A ", "an"],
  Zp = [" N/A ", "aid"],
  $p = [" N/A ", "aiid"],
  aq = [" N/A ", "av"],
  bq = ["utmtci"],
  cq = ["utmtco"],
  dq = ["utmtrg"],
  eq = ["utmcct", "cc"],
  fq = [" N/A ", "ci"],
  gq = ["utmctr", "ck"],
  hq = ["utmcmd", "cm"],
  iq = ["utmccn", "cn"],
  jq = ["utmcsr", "cns"],
  kq = ["utmiva", "iv"],
  lq = [" N/A ", "cu"],
  mq = [" N/A ", "dl"],
  nq = [" N/A ", "ea"],
  oq = [" N/A ", "ec"],
  pq = [" N/A ", "el"],
  qq = ["utmni", "ni"],
  rq = [" N/A ", "ev"],
  sq = [" N/A ", "exd"],
  tq = [" N/A ", "exf"],
  uq = [" N/A ", "xid"],
  vq = [" N/A ", "xvar"],
  wq = ["utmt", "t"],
  xq = ["utmip", "uip"],
  yq = [" N/A ", "linkid"],
  zq = ["utmipc", "ic"],
  Aq = ["utmipn", "in"],
  Bq = ["utmipr", "ip"],
  Cq = ["utmiqt", "iq"],
  Dq = ["utmn", "z"],
  Eq = ["utmr", "dr"],
  Fq = [" N/A ", "cd"],
  Gq = ["utmsa", "sa"],
  Hq = ["utmsn", "sn"],
  Iq = ["utmsid", "st"],
  Jq = ["utmtsp", "ts"],
  Kq = ["utmtst", "ta"],
  Lq = ["utmttx", "tt"],
  Mq = ["utmdt", "dt"],
  Nq = [" N/A ", "utc"],
  Oq = [" N/A ", "utl"],
  Pq = [" N/A ", "utt"],
  Qq = [" N/A ", "utv"],
  Rq = [" N/A ", "dns"],
  Sq = [" N/A ", "pdt"],
  Tq = [" N/A ", "rrt"],
  Uq = [" N/A ", "tcp"],
  Vq = [" N/A ", "srt"],
  Wq = ["utmtto", "tr"],
  Xq = ["utmp", "dp"],
  Yq = ["utmtid", "ti"],
  Zq = [" N/A ", "tf"],
  $q = [" N/A ", "ua"],
  ar = ["utmvid", "uid"],
  br = ["utmwv", "v"];
Op.prototype.L = function () {
  return ["*://*.google-analytics.com/*", "*://stats.g.doubleclick.net/*"];
};
Op.prototype.rb = function () {
  return ["*://*.google-analytics.com/*", "*://stats.g.doubleclick.net/*"];
};
var cr = function (a) {
    return (z("Google Analytics-" + a) || {}).level || "STANDARD";
  },
  dr = function (a, b) {
    b = X(Xp, b);
    var c = Oc(Sp[a], b);
    if (0 < c.length) {
      b = c[1].split("*");
      var d = Rp[a].slice(0, b.length);
      c = c[2];
      void 0 !== c && (b.push(c), (a = Rp[a]), d.push(a[a.length - 1]));
      a = this.o ? this.o : 0;
      if (a < b.length) return (this.o = a + 1), (this.text = Mc(d[a])), Mc(b[a]);
    }
    return (this.o = !1);
  },
  er = function (a, b) {
    var c = a.o ? a.o : 0;
    b = S(b);
    var d = x(/utme=(?:\d*\([^)]*\))*11\(([^)]*)\)/, b.v.toString()),
      e = {};
    d &&
      Ra(d.split("*"), function (p) {
        p = p.split("!");
        2 == p.length && (e[p[0]] = p[1]);
      });
    if ((d = Oc(/utme=(?:\d*\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, b.v.toString())) && 3 == d.length) {
      b = d[1].split("*");
      d = d[2].split("*");
      for (var f = [], g = 0, h = 0; h < b.length; h++) {
        g++;
        if (h < d.length) {
          var k = x(/([0-9]{1,2})!/, b[h]),
            m = x(/([0-9]{1,2})!/, d[h]);
          k && k == m && ((g = parseInt(k, 10)), (b[h] = b[h].substring(k.length + 1)), (d[h] = d[h].substring(m.length + 1)));
        }
        f.push(g);
      }
      if (c < b.length)
        return (a.o = c + 1), (a.text = "Custom Variable " + f[c]), Mc(b[c]) + ": " + Mc(d[c]) + (e[f[c]] ? Up[e[f[c]]] : "");
    }
    return (a.o = !1);
  },
  fr = function (a, b, c, d) {
    d = S(d);
    var e = Oc(b, d.v.toString());
    c.o = b.lastIndex;
    return e ? ((c.text = a + " " + e[2]), (a = zf(d, e[1])), void 0 !== a ? a : !1) : !1;
  },
  X = function (a, b) {
    var c = S(b);
    a = a[w(Qp, c.A) ? 0 : 1];
    b = zf(S(b), a);
    b = void 0 !== b ? b : !1;
    try {
      if ("string" === typeof b) return decodeURIComponent(b);
    } catch (d) {}
    return b;
  },
  gr = L(
    M(
      N(
        cj("Custom Variables", function (a) {
          a = X(Xp, a);
          a = (a = Oc(/(?:\d+\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a)) && 3 == a.length ? a[1].split("*").length : 0;
          return 0 < a ? "" + a : !1;
        }),
        "Custom Variables"
      ),
      [
        M(
          R("Custom Variable", function (a) {
            return er(this, a);
          }),
          [
            Uh("The total combined length of any custom variable name and value may not exceed 128 characters.", function (a) {
              return 130 < a.label.length;
            })
          ]
        ),
        K(
          Uh("More than 5 custom variables are used.", function (a) {
            return "STANDARD" == cr(Pe(a).label) && 5 < parseInt(a.label, 10);
          }),
          "Google Analytics Premium accounts have 50 custom variables available."
        )
      ]
    ),
    "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
  ),
  hr = {},
  Y = function (a) {
    var b = hr[a];
    b ||
      ((b = L(
        Uh("Parameter for %s is too long (max %s).", function (c) {
          for (var d = c.label, e = [], f = 0; f < d.length; ++f) e.push(d.charCodeAt(f));
          return e.length > a ? ((this.text = t("Parameter for %s is too long (max %s).", c.text, a)), !0) : !1;
        }),
        "https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters"
      )),
      (hr[a] = b));
    return b;
  },
  ir = function () {
    var a = /(cd(\d+))=/g,
      b = /(cm(\d+))=/g;
    return L(
      M(
        N(
          cj("Custom Metrics", function (c) {
            c = S(c).v.ea().filter(n(w, /cd\d+/)).length;
            return 0 < c ? "" + c : !1;
          }),
          "Custom Metrics"
        ),
        [
          M(
            R("Custom Dimension", function (c) {
              return fr("Custom Dimension", a, this, c);
            }),
            [Y(150)]
          ),
          M(
            R("Custom Metric", function (c) {
              return fr("Custom Metric", b, this, c);
            }),
            [
              H("%s must be a number.", function (c) {
                return gd(c.label) || hd(c.label) ? !1 : c.text;
              })
            ]
          ),
          Uh("More than 20 custom variables are used.", function (c) {
            return "STANDARD" == cr(Pe(c).label) && 20 < parseInt(c.label, 10);
          })
        ]
      ),
      "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
    );
  },
  jr = M(
    I("Web Property ID", function (a) {
      z("Google Analytics-" + a.label)
        ? ((this.infoLink = z("Google Analytics-" + a.label).url), (this.valueFormat = "linked"))
        : (this.valueFormat = "copyable");
      return a.label || "not set";
    }),
    [
      L(
        H("Leading or trailing whitespace in ID", function (a) {
          var b = void 0 !== a.label ? $c([/^\s+[^ ]/, /[^ ]\s+$/], a.label) : !0;
          b && (a.parent.label = Cb(a.label));
          return b;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#whitespace"
      ),
      L(
        H("Invalid or missing web property ID", function (a) {
          return void 0 !== a.label ? !w(/^\s*(?:UA|YT|MO)-\d{4,10}-\d+\s*$/, a.label) : !0;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_property"
      )
    ]
  ),
  kr = function (a, b) {
    return qi(Z(a, b), "Fine");
  },
  Z = function (a, b) {
    return R(a, n(X, b));
  },
  lr = function (a) {
    a = hj(a).v.get("gclid");
    return void 0 !== a ? a + "" : !1;
  },
  yr = function (a, b, c) {
    var d = c
      ? []
      : [
          Z("Element ID", yq),
          gr,
          ir(),
          U,
          M(Z("Title", Mq), [Y(1500)]),
          M(qi(J(Z("Document location URL", mq), "link_expandable"), "Hidden"), [Y(2048)]),
          J(M(Z("Tracked page", Xq), [Y(2048)]), "link_expandable")
        ];
    return M(
      T("Google Analytics", [b], Vp, "https://support.google.com/analytics/answer/1008080", function (e) {
        var f = S(e);
        return (w(Pp, f.A) || w(Qp, f.A)) && (X(Wp, e) || "");
      }),
      c
        ? []
        : [
            jr,
            R("Pixel Version/Syntax", function () {
              return mr.ja.P == a && a;
            }),
            R("Code Version/Syntax", function (e, f) {
              return ad(RegExp("google-analytics.com/(?:.*/)?collect"), e)
                ? mr.Fa.P
                : ad(RegExp("stats.g.doubleclick.net/(?:.*/)?__utm.gif"), e)
                ? mr.ja.P
                : ad(RegExp("google-analytics.com/(?:.*/)?__utm.gif"), e) &&
                  B(f, "Protocol version number") &&
                  x(/1\.*/, B(f, "Protocol version number").label)
                ? mr.oc.P
                : !1;
            }),
            cj("Found GTM parameter in tracking url", function (e) {
              return e.uri.v.get("gtm") || !1;
            }),
            M(R("Adwords auto-tagging detected", lr), [
              L(
                Uh("Auto-tagging detected is not set up correctly", G.prototype.Ka),
                "https://support.google.com/analytics/answer/2938246"
              ).otherwise(
                K(
                  L(
                    aj("Adwords auto-tagging mismatch", function (e, f) {
                      if ((e = e.redirects)) {
                        f = f.label;
                        for (var g, h = 1; (g = e[h]); h++) if ((g = C(g).v.get("gclid")) && g != f) return !0;
                      }
                      return !1;
                    }),
                    "https://support.google.com/analytics/answer/2938246"
                  ),
                  "The gclid from initial request does not match the gclid in the final URL."
                )
              )
            ]).otherwise(
              K(
                L(
                  aj("Adwords auto-tagging missing", function (e) {
                    if ((e = e.redirects)) for (; (e = e[1]); ) return (e = C(e).v.get("gclid")) ? e + "" : !1;
                    return !1;
                  }),
                  "https://support.google.com/analytics/answer/2938246"
                ),
                "The initial request had a gclid parameter, but it is not detected in the final URL."
              )
            ),
            N(
              R(
                "Campaign Data",
                function (e) {
                  e = X(Xq, e);
                  e = (!!e && e.match(/(utm_\w+=[\w|\d]*)/g)) || [];
                  return 0 < e.length ? e.join(";") : !1;
                },
                "map"
              ),
              "Campaign Data"
            ),
            M(J(kr("Referral", Eq), "link_expandable"), [Y(2048)]),
            M(kr("Protocol version number", br), [Y(100)]),
            M(Z("Screen name / content description", Fq), [Y(2048)]),
            kr("User ID", ar),
            M(Z("Experiment ID", uq), [Y(40)]),
            Z("Experiment Variant", vq),
            kr("User Agent override", $q),
            kr("IP Address override", xq),
            N(M(Z("Campaign Data", iq), [Y(100)]), "Campaign Data"),
            N(M(Z("Campaign Data", jq), [Y(100)]), "Campaign Data"),
            N(M(Z("Campaign Medium", hq), [Y(50)]), "Campaign Data"),
            N(M(Z("Campaign Keyword", gq), [Y(500)]), "Campaign Data"),
            N(M(Z("Campaign Content", eq), [Y(500)]), "Campaign Data"),
            N(M(Z("Campaign ID", fq), [Y(100)]), "Campaign Data"),
            nr("Page Load", "Time ${bucketIndex}: ${Category} - ${Variable}", 14, d).otherwise(
              nr("Events", "Event ${bucketIndex}: ${Category} - ${Action}", 5, d).otherwise(
                or(d).otherwise(
                  pr(d).otherwise(
                    qr(d).otherwise(
                      rr(d).otherwise(sr(d).otherwise(tr(d).otherwise(ur(d).otherwise(vr(d).otherwise(wr(d).otherwise(xr(d)))))))
                    )
                  )
                )
              )
            ),
            L(Ti, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#non_standard")
          ]
    );
  },
  ur = function (a) {
    return jj(
      "App / Screen Tracking",
      t("${%s}", "App name"),
      function (b) {
        return "screenview" == X(wq, b) ? X(Zp, b) || "" : !1;
      },
      [
        M(Z("App name", Yp), [Y(100)]),
        M(Z("App ID", Zp), [Y(150)]),
        M(Z("App installer ID", $p), [Y(150)]),
        M(Z("App Version", aq), [Y(100)])
      ].concat(a)
    );
  },
  or = function (a) {
    return jj(
      "Events",
      t("Event ${bucketIndex} ${%s} - ${%s}", "Category", "Action"),
      function (b) {
        var c = S(b);
        N(this, "Event");
        return w(Pp, c.A) && "event" == X(wq, b) ? "" + X(oq, b) + X(nq, b) + (X(pq, b) || "") : !1;
      },
      [
        M(Z("Category", oq), [Y(150)]),
        M(Z("Action", nq), [Y(500)]),
        M(Z("Label", pq), [Y(500)]),
        Z("Value", rq),
        R("Non-Interaction", function (b) {
          return X(qq, b) ? "Yes" : "No";
        })
      ].concat(a)
    );
  },
  pr = function (a) {
    return jj(
      "Exceptions",
      "Exception ${bucketIndex}",
      function (b) {
        return "exception" == X(wq, b);
      },
      [
        M(Z("Description", sq), [
          Y(150),
          aj("Tracked a fatal exception", function (b) {
            return "1" == X(tq, b);
          }).otherwise(dj("Tracked a non-fatal exception"))
        ]),
        Z("Is Fatal", tq)
      ].concat(a)
    );
  },
  rr = function (a) {
    return jj(
      "Pageview Requests",
      "Pageview ${bucketIndex}",
      function (b) {
        b = X(wq, b);
        return "pageview" == b || !b;
      },
      a,
      function (b) {
        return X(Dq, b) || !0;
      }
    );
  },
  xr = function (a) {
    return jj(
      "Other Requests",
      "Other Requests ${bucketIndex}",
      function (b) {
        return X(wq, b);
      },
      [M(Z("Hit Type", wq), a)]
    );
  },
  sr = function (a) {
    return jj(
      "Social",
      t("${%s}: ${%s}", "Action", "Network"),
      function (b) {
        return "social" == X(wq, b) && X(Iq, b);
      },
      [M(Z("Action", Gq), [Y(50)]), M(Z("Network", Hq), [Y(50)]), M(Z("Target", Iq), [Y(2048)])].concat(a)
    );
  },
  tr = function (a) {
    return jj(
      "Timings",
      t("${%s}: ${%s}", "Category", "Variable"),
      function (b) {
        return "timing" == X(wq, b) ? X(Pq, b) : !1;
      },
      [
        M(Z("Category", Nq), [Y(150)]),
        M(Z("Variable", Qq), [Y(500)]),
        Z("Time", Pq),
        M(Z("Label", Oq), [Y(500)]),
        Z("DNS load time", Rq),
        Z("Page download time", Sq),
        Z("Redirect time", Tq),
        Z("TCP connect time", Uq),
        Z("Server response time", Vq)
      ].concat(a)
    );
  },
  qr = function (a) {
    return jj(
      "Keep Alive",
      "Keep Alive ${bucketIndex}",
      function (b) {
        return "dc" == X(wq, b);
      },
      a
    );
  },
  vr = function (a) {
    return M(
      J(
        oi(Zi("Transaction %s"), function (b) {
          var c = C(b.url),
            d = X(wq, b);
          return !w(Qp, c.A) || ("tran" != d && "transaction" != d) ? !1 : X(Yq, b);
        }),
        "group_status"
      ),
      [
        M(
          J(oi(Yi("Total"), n(X, Wq)), "value_status"),
          [
            M(Z("Transaction ID", Yq), [Y(500)]),
            M(Z("Affiliation", Zq), [Y(500)]),
            Z("Affiliation or Store name", Kq),
            Z("Total", Wq).otherwise(H("Missing total amount.")),
            Z("Tax", Lq),
            Z("Shipping cost", Jq),
            Z("Billing City", bq),
            Z("Billing region", dq),
            Z("Billing Country", cq)
          ].concat(a)
        )
      ]
    );
  },
  wr = function (a) {
    return M(
      J(
        oi(Zi("Transaction %s"), function (b) {
          var c = C(b.url);
          return w(Qp, c.A) && "item" == X(wq, b) ? X(Yq, b) : !1;
        }),
        "group_status"
      ),
      [
        M(
          J(
            oi(Yi("Item %s"), function (b) {
              this.text = "Item " + X(zq, b);
              return X(Bq, b);
            }),
            "value_status"
          ),
          [
            Z("Affiliation or Store name", Kq),
            M(Z("SKU / Code", zq), [Y(500)]).otherwise(H("Missing SKU/code.")),
            Z("Product Name", Aq),
            M(Z("Category or variation", kq), [Y(500)]),
            Z("Unit price", Bq).otherwise(H("Missing unit price.")),
            Z("Quantity", Cq).otherwise(H("Missing quantity.")),
            M(Z("Currency Code", lq), [Y(10)])
          ].concat(a)
        )
      ]
    );
  },
  nr = function (a, b, c, d) {
    return jj(
      a,
      b,
      function (e) {
        N(this, Tp[c]);
        var f = S(e);
        return w(Qp, f.A) && "event" == X(wq, e) && w(Sp[c], X(Xp, e) || "");
      },
      [N(R("Parameter", n(dr, c)), Tp[c])].concat(d)
    );
  };
Op.prototype.ib = function (a, b) {
  b = b.page.url;
  var c = X(Xq, a);
  a = X(mq, a);
  return b == c || b == a;
};
Op.prototype.K = function (a) {
  return [
    yr("Any", "google-analytics.com/", !!a),
    yr(mr.ja.P, "stats.g.doubleclick.net/", !!a),
    T(
      "Google Analytics",
      "google-analytics.com/",
      "Google Analytics Script",
      "https://support.google.com/analytics/answer/1008080",
      function (b) {
        return !!ad(/((?:ga|dc|analytics)(?:_debug)?.js)/, b);
      },
      "",
      [
        N(
          R("GA Detected", function (b) {
            return !!ad(/((?:ga|dc|analytics).js)/, b);
          }),
          "URLs"
        ).l(U),
        N(
          R("GA Debug Detected", function (b) {
            return !!ad(/((?:ga|dc|analytics)(?:_debug).js)/, b);
          }),
          "URLs"
        ).l(U)
      ]
    )
  ];
};
var zr = L(
    Ph("Suggestion", "Google Analytics", "Consider update to the async version"),
    "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#update_async"
  ),
  mr = {
    Fa: {
      P: "Universal",
      vc: function (a) {
        return Zc(
          [
            /create/i,
            /displayfeatures/i,
            new RegExp(
              mr.Fa.ta[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']displayfeatures["']/.source,
              "gi"
            )
          ],
          a.textContent
        )
          ? "Universal with Display Features"
          : Zc(
              [
                /create/i,
                /adfeatures/i,
                new RegExp(
                  mr.Fa.ta[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']adfeatures["']/.source,
                  "gi"
                )
              ],
              a.textContent
            )
          ? "Universal with Ad Features"
          : mr.Fa.P;
      },
      link: "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
      ha: "google-analytics.com/analytics.js",
      Oa: [],
      ta: [/create/i, /["'](?:[a-zA-Z_0-9]*\.)*create["'],\s*["'](UA-[^"']*)["']/gi],
      Na: function () {
        return L(
          M(
            yi("Universal analytics statements", function (a) {
              return (this.o = a = bd(a.textContent, this.o)) && x($o, a.text) ? a.text : !1;
            }),
            [op()]
          ),
          "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
        );
      }
    },
    mc: {
      P: "Asynchronous",
      link: "https://support.google.com/analytics/answer/1008080",
      ha: "google-analytics.com/ga.js",
      Oa: [],
      ta: [/setAccount/i, /\[\s*["'](?:[a-zA-Z_0-9]*\.)?_?setAccount["']\s*,\s*["']([^"']*)["']/gi],
      Jc: ["stats.g.doubleclick.net/dc.js", ".wysistat.com", ".rejoiner.com"],
      Na: n(Fp, "async")
    },
    Se: {
      P: "Synchronous",
      link: "https://support.google.com/analytics/answer/1012283",
      ha: "google-analytics.com/ga.js",
      ta: [/_getTracker/i, /_gat._getTracker\(["']([^"']*)["']\)/gi],
      Oa: [zr],
      Na: n(Fp, "sync")
    },
    oc: {
      P: "Urchin",
      link: "https://support.google.com/analytics/answer/1008080",
      ha: "google-analytics.com/urchin.js",
      ta: [/(?:^|window.| )_uacct/gim, /_uacct = ["']([^"']*)["'];/gim],
      Oa: [zr],
      Na: function () {
        return I("Statements", mb);
      }
    },
    ja: {
      P: "Remarketing",
      link: "https://support.google.com/analytics/answer/2444872",
      ha: "stats.g.doubleclick.net/dc.js",
      Oa: [],
      ta: [/_setAccount/i, /["'](?:[a-zA-Z_0-9]*\.)*_setAccount["'],\s*["']([^"']*)["']/gi, /stats\.g\.doubleclick\.net\/dc\.js/],
      Na: n(Fp, "async")
    }
  },
  Ar = function (a) {
    var b = [
      jr,
      M(wi("Code Version/Syntax", "function" === typeof a.vc ? a.vc : lb(a.P)), a.Oa),
      I("Level", function (c) {
        return (z("Google Analytics-" + c.label) || {}).label || !1;
      }),
      Ii.clone(),
      N(
        wi(
          "Code Snippet",
          function (c) {
            return Hi(this, a.ta[1].lastIndex, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ).l(
        L(Ci, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#iframe"),
        L(
          P("Missing closing \x3c/script> tag.", function (c) {
            return x(/<\/html>(.|\n)*$/m, c.textContent);
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_closing"
        ),
        L(
          Mi(
            L(
              P("Missing %s script", function (c) {
                return 0 === c ? a.ha.substring(a.ha.indexOf("/") + 1) : !1;
              }),
              "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_ga"
            ),
            'count(//script[contains(@src, "' + a.ha + '")])'
          ),
          "https://support.google.com/analytics/answer/1008083"
        ),
        L(
          Bi("Code found outside of <head> tag", function (c) {
            return !!c.parentNode && "HEAD" != c.parentNode.nodeName;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#move_head"
        ),
        a.Na(),
        L(Di, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#external_file"),
        Ei
      ),
      N(
        Rh("Cookies", function (c) {
          c = (c = B(c, "Code Version/Syntax")) && 0 == c.label.indexOf("Universal") ? "_ga" : "__utm";
          this.o || (this.o = F.cookie.split(/; */));
          if (0 == this.o.length) return (this.o = null), !1;
          var d = this.o.pop().split("=");
          return 0 == d[0].indexOf(c) ? ((this.text = d[0]), d[1]) : !1;
        }),
        "Cookies"
      )
    ];
    return M(
      Li("Google Analytics", Vp, a.link, "//script", function (c) {
        var d = Zc(a.ta, c.textContent);
        this.o = c.textContent.length && a.ta[1].lastIndex;
        return "_setCustomVar" == d ||
          (d &&
            a.Jc &&
            Va(a.Jc, function (e) {
              return 0 <= c.textContent.indexOf(e);
            }))
          ? !1
          : d;
      }),
      b
    );
  },
  Br = function (a) {
    var b = re(a.relatedIssues, ["Code Version/Syntax"]);
    b.length &&
      te(a.relatedIssues, "Tag").forEach(function (c) {
        ge(c, "Code Version/Syntax", b[0].label);
      });
  },
  Cr = function (a) {
    pe(a, "Pixel Version/Syntax").forEach(function (b) {
      var c = B(b, "Pixel Version/Syntax"),
        d = Xd(b, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]);
      if (c && c.label == mr.ja.P && !d && (c = Fe(a, b.label)) && "Google Analytics" == c.category) {
        if ((d = B(c, "Code Version/Syntax"))) (d.label = mr.ja.P), (c.infoLink = "https://support.google.com/analytics/answer/2444872");
        ee(b.relatedIssues, "Pixel Version/Syntax");
        ee(c.relatedIssues, "Missing ga.js script");
      }
    });
  },
  Dr = function (a) {
    re(a, ["_gat global object"]).forEach(function (b) {
      var c = B(b, "_getTracker") || B(b, "_createTracker");
      c && ((c = x(/["']*([^"',]+)/, c.label)), "string" === typeof c && ((c = qe(a, c)), c.length && (ab(a, b), A(c[0], b))));
    });
  };
Op.prototype.sa = function () {
  return [
    Bm("Google Analytics", function (a) {
      var b = ke(a, "Google Analytics");
      b.forEach(function (d) {
        "Tag" == d.type &&
          (Xd(d, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]) &&
            (ge(d, "Code Version/Syntax", mr.Fa.P), ge(d, "Code Version/Syntax", mr.ja.P)),
          Br(d),
          Ee(d, 2) && fe(d.relatedIssues, ["Missing ga.js script", "Missing dc.js script", "Missing urchin.js script"]));
      });
      var c = b.filter(function (d) {
        return "Google Analytics Script" != d.text;
      });
      Oi(a, c);
      oe(c, 4).length && ee(a, "No Google Analytics HTTP responses because opted out code detected.", !0);
      Cr(b);
      Dr(a);
      re(b, ["Google Analytics Script"]).forEach(function (d) {
        0 < ze(d.relatedIssues).length || ce(a, d, "Nothing to report");
      });
    }),
    zm(
      "Suggestion",
      "Google Analytics",
      "Multiple Google Analytics tags detected",
      "https://support.google.com/analytics/answer/1032400",
      function (a) {
        var b = ue(a, ["Google Analytics"]),
          c = b.length,
          d = re(b, ["Google Analytics Script"]),
          e = pe(b, "Code Version/Syntax", mr.ja.P),
          f = pe(b, "Code Version/Syntax", mr.Fa.P),
          g = pe(b, "Code Version/Syntax", "Universal with Display Features"),
          h = pe(b, "Code Version/Syntax", "Universal with Ad Features");
        c -= d.length;
        c -= f.length;
        c -= h.length;
        c -= g.length;
        c -= e.length;
        (a = B(a, "Detected more than one script containing _gaq and _gat variables.")) && a.label == c && (a.deduped = !0);
        return Qe(b) ? !1 : 1 < f.length || 1 < h.length || 1 < g.length || 1 < e.length || 1 < c;
      }
    ),
    zm(
      "Warning",
      "Google Analytics",
      "Same web property ID is tracked twice.",
      "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples",
      function (a) {
        a = ue(a, ["Google Analytics"]);
        a = jb(a, function (b) {
          return b.label;
        });
        return ub(
          a,
          function (b) {
            return Va(
              b,
              function (c) {
                var d = {},
                  e = B(c, "Pageview Requests");
                if (e) {
                  e = ye([e], "Tag");
                  for (var f, g = 0; (f = e[g]); g++) {
                    var h = B(f, "requestId");
                    h && !d[h.label] && (d[h.label] = [c, f]);
                  }
                }
                e = Object.keys(d);
                if (1 < e.length) {
                  e.sort();
                  h = g = f = null;
                  for (var k = [], m, p = 0; (m = e[p]); p++) {
                    c = d[m][0];
                    var v = d[m][1],
                      E = B(v, "Document location URL");
                    m = E ? E.label : "";
                    v = (E = B(v, "Tracked page")) ? E.label : "";
                    if (m == g && v == h)
                      if (f == c) -1 == k.indexOf(c) && (k.push(c), A(c, this));
                      else return !0;
                    g = m;
                    h = v;
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
    L(
      zm("Suggestion", "Google Analytics", "Add Google Analytics", "https://support.google.com/analytics/answer/1008080", function (a) {
        return 0 == ue(a, ["Google Analytics", "Google Tag Manager"]);
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#add_ga"
    ),
    K(
      zm("Warning", "Google Analytics", "Tag not fired through GTM", "https://support.google.com/tagmanager/answer/6103683", function (a) {
        a = ue(a, ["Google Analytics"]);
        Ra(
          a,
          function (b) {
            var c = !!B(b, "Implemented in Google Tag Manager"),
              d = !!B(b, "Found GTM parameter in tracking url");
            c && !d && A(b, this);
          },
          this
        );
        return !1;
      }),
      "Although it seems that the tag is included in GTM, this request was originated from a differnet snippet. Please check your code."
    )
  ];
};
Op.prototype.O = function () {
  var a = [];
  tb(
    mr,
    function (b) {
      a.push(Ar(b));
    },
    this
  );
  eb(a, [
    L(
      new ri(
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
    L(
      new ri(
        "Error",
        "Google Analytics",
        "Detected both ga.js and dc.js scripts which will make tracking ambiguous.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Ta(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(mr.mc.ha);
            });
            b = Ta(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(mr.ja.ha);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_dc"
    ),
    L(
      new ri(
        "Error",
        "Google Analytics",
        "Detected both ga.js and urchin.js scripts which can cause reporting errors.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Ta(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(mr.mc.ha);
            });
            b = Ta(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(mr.oc.ha);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_urchin"
    ),
    new ri(
      "Warning",
      "Google Analytics",
      "Detected more than one script containing _gaq and _gat variables.",
      "https://support.google.com/analytics/answer/1009683",
      void 0,
      function (b) {
        return b.scripts
          ? ((b = Xa(
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
    M(
      N(
        new ri(
          "Hidden",
          "Google Analytics",
          "_gat global object",
          "https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat",
          "//script",
          function (b) {
            return x(/(?:^|[ ,;]|window\.)_gat\./g, b.textContent);
          }
        ),
        "_gat global object"
      ),
      [
        Ei,
        wi(
          "Code Snippet",
          function (b) {
            return Hi(this, b.textContent.indexOf("_gat"), b);
          },
          "snippet_js"
        ).l(vp())
      ]
    )
  ]);
  return a;
};
Op.prototype.pb = function () {
  return [
    L(
      new Ni(
        "Warning",
        "Google Analytics",
        "No Google Analytics HTTP responses because opted out with extension.",
        "https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh",
        function (a) {
          this.infoLink = a.homepageUrl;
          return a.enabled && "fllaojicojecljbmefodhfapmkghcbnh" == a.id;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#opted_out"
    ),
    J(
      new Ni(
        "Warning",
        "Google Analytics",
        "The %s extension may prevent Google Analytics from working correctly",
        "chrome://extensions/#",
        function (a) {
          this.infoLink = a.homepageUrl;
          return (
            a.enabled &&
            r(
              "cfhdojbkjhnklbpkdaibdccddilifddb epanfjkfahimkgomnigadpkobaefekcd epojjbofkhffmihobdncmbhdocjljhpi fadgflmigmogfionelcpalhohefbnehm jmcpbefnpobogldglnlikgojpaddibgb mlomiejdfkolichcflejclcbmpeaniij obfkigoejfpmepamlegoacdnpmeejeop".split(
                " "
              ),
              a.id
            ) &&
            a.enabled &&
            a.name
          );
        }
      ),
      "linked"
    )
  ];
};
Lj(new Op());
var Er = function () {
  Q.call(this, "Google Publisher Tag", 100);
  this.R = ["pubads.g.doubleclick.net/"];
};
ra(Er, Q);
var Gr = function () {
    var a = [
      I("Document ID", n(Zh, /(['"]div[^)]+['"]?)[)]/)),
      I("Accepted sizes", n(Zh, /,\s*(\[?(?:\[\s*\d+\s*,\s*\d+\s*\]\s*,?\s*)+\]?)\s*,/)),
      I("Out of page", n(Zh, /defineOutOfPageSlot/))
    ];
    return Ki("Ad Slots", t("AdSlot ${%s}", "Document ID"), a, Fr);
  },
  Ir = function (a, b) {
    this.format = "update_button";
    var c = C(a.page.url);
    this.text = Hr(c) ? "Turn off (requires reload)" : "Turn on (requires reload)";
    Ih(a.tabId, Me(b) + ":" + this.text, function (d, e) {
      d = C(a.page.url);
      var f = {};
      Hr(d)
        ? (d.removeParameter("google_force_console"), (f.GooglePublisherConsole = !1))
        : (mf(d), d.v.set("google_force_console", 1), (f.GooglePublisherConsole = !0));
      void 0 !== chrome && void 0 !== chrome.storage && Fd(f);
      chrome.tabs.update(a.tabId, { url: d.toString() });
      e();
    });
    return "Console";
  },
  Fr = function (a) {
    var b = Jr;
    a = x(b, a.textContent);
    this.o = b.lastIndex;
    return a;
  };
Er.prototype.L = function () {
  return ["*://*.pubads.g.doubleclick.net/*"];
};
Er.prototype.O = function () {
  return [
    M(
      Li(
        "Google Publisher Tag",
        t("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        '//script[contains(text(), "googletag")]',
        function (a) {
          return !!a.textContent && x(/googletag\s*.\s*define(?:OutOfPage)?Slot\(\s*["']\/(\d+)\//g, a.textContent);
        }
      ),
      [Kr, Gi(), Gr()]
    )
  ];
};
Er.prototype.Y = function () {
  var a = qj("Console", Ir);
  a.category = "Google Publisher Tag";
  var b = {};
  b["Network ID"] = [a];
  return b;
};
Er.prototype.K = function (a) {
  return [
    J(
      T(
        "Google Publisher Tag",
        "pubads.g.doubleclick.net/",
        t("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        function (b) {
          var c = zf(S(b), "iu_parts");
          return !!c && ad(/pubads.g.doubleclick.net\/gampad\/ads/, b) && x(/(\d+)/, c);
        },
        "",
        a ? [] : [Kr, U]
      ),
      "unchecked"
    )
  ];
};
var Hr = function (a) {
    return !!a && !!(zf(a, "google_force_console") || zf(a, "google_console") || zf(a, "google_debug") || zf(a, "googfc"));
  },
  Jr = /googletag.(define(?:OutOfPage)?Slot\(.*?\))/g,
  Kr = J(
    I("Network ID", function (a) {
      var b = z("GooglePublisherConsole");
      var c = document.querySelectorAll && document.querySelector ? document.querySelectorAll("DIV") : document.getElementsByTagName("DIV");
      for (var d = 0, e; (e = c[d]); d++) x(/google_pubconsole/, e.id) && (e.style.display = b ? "block" : "none");
      return a.label || "not set";
    }),
    "copyable"
  );
Lj(new Er());
var Lr = function () {
  Q.call(this, "Krux SuperTag", 99);
  this.R = ["cdn.krxd.net/"];
  this.isActive = nb;
  this.O = lb([]);
};
Ea(Lr, Q);
Lr.prototype.L = function () {
  return ["*://cdn.krxd.net/*"];
};
var Mr = J(
  I("Configuration ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Lr.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Krux SuperTag")];
  return a;
};
Lr.prototype.K = function (a) {
  return [
    T(
      "Krux SuperTag",
      "cdn.krxd.net/",
      "Krux SuperTag",
      "http://www.krux.com/",
      function (b) {
        return (b = C(b.url).v.get("confid")) ? b + "" : !1;
      },
      "unchecked",
      a ? [] : [Mr, U]
    )
  ];
};
Lj(new Lr());
var Nr = function () {
  Q.call(this, "Opentag", 99);
  this.R = ["cloudfront.net/"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(Nr, Q);
Nr.prototype.L = function () {
  return ["*://*.cloudfront.net/*"];
};
Nr.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Opentag")];
  return a;
};
Nr.prototype.K = function (a) {
  return [
    T("Opentag", "cloudfront.net/", "Opentag", "http://www.opentag.com/", n(ad, /(opentag-[^.]*)\.js/i), "unchecked", a ? [] : [Or, U])
  ];
};
var Or = J(
  I("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Lj(new Nr());
var Pr = function () {
  Q.call(this, "Tagcommander", 99);
  this.R = ["cdn.tagcommander.com"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(Pr, Q);
Pr.prototype.L = function () {
  return ["*://*.cdn.tagcommander.com/*"];
};
Pr.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Tagcommander")];
  return a;
};
Pr.prototype.K = function (a) {
  return [
    T(
      "Tagcommander",
      "cdn.tagcommander.com",
      "Tagcommander",
      "http://www.tagcommander.com/",
      function (b) {
        return C(b.url).A;
      },
      "unchecked",
      a ? [] : [Qr, U]
    )
  ];
};
var Qr = J(
  I("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Lj(new Pr());
var Rr = function () {
  Q.call(this, "TagMan", 99);
  this.R = ["levexis.com/"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(Rr, Q);
Rr.prototype.L = function () {
  return ["*://*.levexis.com/*"];
};
Rr.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("TagMan")];
  return a;
};
Rr.prototype.K = function (a) {
  return [
    T(
      "TagMan",
      "levexis.com/",
      "TagMan",
      "http://www.tagman.com/",
      n(ad, /levexis\.com\/([^\/]*)\/tman.cgi/),
      "unchecked",
      a ? [] : [Sr, U]
    )
  ];
};
var Sr = I("Account", function (a) {
  return a.label || "not set";
});
Lj(new Rr());
var Tr = function () {
  Q.call(this, "Tealium", 99);
  this.R = ["tiqcdn.com/"];
  this.isActive = nb;
  this.O = lb([]);
};
ra(Tr, Q);
Tr.prototype.L = function () {
  return ["*://*.tiqcdn.com/*"];
};
Tr.prototype.Y = function () {
  var a = {};
  a[U.text] = [Ej("Tealium")];
  return a;
};
Tr.prototype.K = function (a) {
  return [T("Tealium", "tiqcdn.com/", "Tealium", "http://www.tealium.com/", n(ad, /utag\/([^\/]+)\//i), "unchecked", a ? [] : [Ur, U])];
};
var Ur = J(
  I("Account", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Lj(new Tr());
var Vr = function () {
  Q.call(this, "Google Trusted Stores", 99);
};
ra(Vr, Q);
var Xr = function (a, b, c, d, e) {
    c.valueFormat = "button_inactive";
    b.label = "Checking ...";
    c.label = "Checking ...";
    jd(c.text, "HEAD", null, n(Wr, a, b, c, e || null));
  },
  Wr = function (a, b, c, d, e) {
    var f = {},
      g = new Date().getTime() + "";
    f[c.text + ";status"] = e.status + "";
    f[c.text + ";timestamp"] = g;
    Id(f);
    b.label = "Found";
    c.label = e.status + "";
    c.parent = b;
    a.S(c, c);
    d && d();
  },
  Yr = function (a, b, c) {
    var d = c.parent.label;
    return a(parseInt(d, 10)) ? ((c.parent.parent.label = b), d) : !1;
  },
  Zr = function (a, b, c) {
    return (c ? wi : zi)(a, function (d) {
      return x(
        new RegExp("\\.push\\s*\\(\\s*(?:\\[[^\\]]*\\]\\s*,\\s*)*\\[\\s*[\"']?" + b + "[\"']?\\s*,\\s*[\"']?([^'\")]+)[\"']?\\s*\\]", "g"),
        d.textContent
      );
    });
  },
  $r = function () {
    return M(new pj("Group", "Google Trusted Stores", "Check, if robots.txt is accessible", void 0, lb("Found"), "value_status"), [
      M(
        qi(
          qj("HTTP Status for file", function (a) {
            a = C(a.url);
            of(a, "robots.txt");
            pf(a, "");
            this.text = a + "";
            return Cd(this.text + ";status");
          }),
          "Hidden"
        ),
        [
          qj("Check robots.txt again", function (a, b) {
            if ("Tag" != Pe(b).type) return !1;
            var c = z(b.text + ";timestamp");
            Ih(a.tabId, Me(b) + ":" + this.text, n(Xr, this, b.parent, b));
            if (c) this.format = "update_button";
            else return Xr(this, b.parent, b), (this.format = "button_inactive"), c + "";
            return "";
          }).l(
            K(
              H(t("%s must not use redirects", "robots.txt"), n(Yr, ld, "Wrong redirect")),
              'Serve both an "http" and "https" version of the robots.txt file'
            ).otherwise(
              K(
                H(t("%s is required at /%s on both HTTP and HTTPS", "robots.txt", "robots.txt"), n(Yr, kd, "Not Found")),
                'Serve both an "http" and "https" version of the robots.txt file'
              ).otherwise(
                L(
                  K(
                    H(t("%s unexpected return code %s", "robots.txt"), n(Yr, sb(), "Error")),
                    'Serve both an "http" and "https" version of the robots.txt file'
                  ),
                  "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#robot_txt"
                )
              )
            )
          )
        ]
      )
    ]);
  },
  as = function (a) {
    var b = "Remove the elements below:\n";
    a.forEach(function (c) {
      b = b + c + "\n";
    });
    return b;
  },
  bs = function (a, b, c) {
    c = c ? "class" : "id";
    a = (a || document).getElementsByTagName("SPAN");
    for (var d = 0; d < a.length; d++) {
      var e = a[d].getAttribute(c);
      if (e && e === b) return a[d];
    }
  },
  cs = function (a, b, c, d, e, f, g, h) {
    f = void 0 !== f ? f : "is incorrect";
    g = void 0 !== g ? g : "";
    h = void 0 !== h ? h : "";
    return K(
      L(
        P(t('%s is missing in the order confirmation module: "%s"', a, b), function (k) {
          return void 0 === bs(k, b, e);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + g
      ),
      t('Provide the Merchant Order %s in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.', a, b)
    ).otherwise(
      L(
        K(
          P(t('"%s" %s', b, f), function (k) {
            k = bs(k, b, e);
            return !w(c, k.textContent);
          }),
          t(
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
  ds = function (a, b, c, d, e, f) {
    e = void 0 !== e ? e : "";
    f = void 0 !== f ? f : "";
    return K(
      L(
        Bi(t('%s is missing in the order confirmation module: "%s"', a, b), function (g) {
          return void 0 === bs(g, b, !0);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + e
      ),
      t(
        'Provide the language associated with the account used to submit product data feeds to Google Shopping, in the "%s" field.\nThis is a recommended but optional field. This field does not affect core functionality, and leaving this warning unresolved will not prevent you from entering the monitoring period. However, merchants using Google Shopping should correct these errors to ensure proper integration. This integration will allow Google to more easily correlate specific products to data that you have provided in connection with Google Trusted Stores. If you have chosen to leave out this field, you may disregard this warning.',
        b
      )
    ).otherwise(
      L(
        K(
          P(t('"%s" %s', b, "is incorrect"), function (g) {
            g = bs(g, b, !0);
            return !w(c, g.textContent);
          }),
          t(
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
l = Vr.prototype;
l.sa = function () {
  return [
    K(
      zm(
        "Error",
        "Google Trusted Stores",
        "Order confirmation page is not in https",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (a) {
          var b = B(a, ij.text);
          a = B(a, "gts-order-id");
          return b && a ? ((b.type = "Hidden"), !0) : !1;
        }
      ),
      "Implement the order confirmation page in https.\nMerchants must provide a secure way for customers to purchase products online. Thus, merchants must use https when transmitting customer information or financial data, including on order confirmation, order history and order status pages."
    )
  ];
};
l.K = function (a) {
  return [
    M(
      T(
        "Google Trusted Stores",
        "googlecommerce.com/trustedstores/",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (b) {
          return C(b.url).v.get("id");
        }
      ),
      a
        ? []
        : [
            es,
            lj("Google Shopping Account ID", "base_sid"),
            Ti,
            U,
            cj("file check response issue handle", function (b) {
              b = b.documentUrl;
              return void 0 !== b ? b : !1;
            })
          ]
    )
  ];
};
l.L = function () {
  return ["*://*.googlecommerce.com/trustedstores/*"];
};
l.Y = function () {
  var a = {};
  a["robots.txt file check dom issue handle"] = [$r()];
  return a;
};
l.O = function () {
  return [
    M(
      Li(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//script[contains(text(), "google_base")]',
        function (a) {
          return x(/gts\.push\s*\(\s*\[\s*['"]?id['"]?\s*,\s*['"]?([^'"\]]*)/g, a.textContent);
        }
      ),
      [
        es,
        K(
          Mi(
            L(
              P("Class name conflicts for class %s", function (a) {
                var b = a.getAttribute("class");
                return ch(a, function (c) {
                  var d = c.getAttribute ? c.getAttribute("class") : "";
                  return (c.id && r(["gtrust_badges", "gts-f-w", "gts-order"], c.id)) || fs(d);
                })
                  ? !1
                  : fs(b);
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#class_conflict"
            ),
            '//*[contains(@class, "gts-")]'
          ),
          'Remove the "gts-" for any class names defined for CSS styles. The "gts-" prefix is used by Google Trusted Stores, and such class names in the page may cause conflicts with the Google Trusted Stores JavaScript code. Please update your CSS to use another name. You must avoid using "gts-" for any class names defined for CSS styles in the page.'
        ),
        M(J(Zr("Google Shopping Item ID", "google_base_offer_id"), "copyable"), [
          H("Google Shopping Item ID should be an alphanumeric.", function (a) {
            return !w(/^\w[\s\w]+$/, a.label);
          })
        ]).otherwise(
          K(
            Th("Google Shopping Item ID is missing."),
            'Provide the Google Shopping Item ID in the "google_base_offer_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        M(J(Zr("Google Shopping Account ID", "google_base_subaccount_id"), "copyable"), [
          K(
            Xh('Incorrect format: "google_base_subaccount_id"'),
            'Update the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code. The Google Shopping Account ID typically follows this format: "[0-9]+".  The Google Shopping Account ID provided appears to not match this format.'
          )
        ]).otherwise(
          K(
            H("Google Shopping Account ID is missing.", function (a) {
              this.type = B(a, "Google Shopping Item ID") ? "Error" : "Suggestion";
              return !0;
            }),
            'Provide the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        Zr("Google Base Country", "google_base_country", !0),
        Zr("Google Base Language", "google_base_language", !0),
        Zr("Container", "gtsContainer", !0),
        N(
          P("Missing closing \x3c/script> tag.", function (a) {
            return x(/<\/html>\s*$/m, a.textContent);
          }),
          "Code Snippet"
        ),
        zi("Old script found.", function () {
          return !!Ya(F.scripts, function (a) {
            return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js");
          });
        }),
        N(
          zi("Script found.", function () {
            return !!Ya(F.scripts, function (a) {
              return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js");
            });
          }),
          "Code Snippet"
        ),
        N(
          P("Missing script", function () {
            return !Ya(F.scripts, function (a) {
              return (
                !!a.src &&
                (0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js") ||
                  0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js"))
              );
            });
          }),
          "Code Snippet"
        ),
        N(
          K(
            L(
              Mi(
                P("JavaScript is implemented more than once on the page.", function (a) {
                  return 1 < a;
                }),
                'count(//script[contains(@src, "googlecommerce.com/trustedstores/")])'
              ),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#js_page"
            ),
            "The Trusted Stores JavaScript code must be implemented exactly once on each page. Remove all but one of the implementations of the Trusted Stores JavaScript code on this page."
          ),
          "Code Snippet"
        ),
        N(
          L(
            Bi("Code found outside of <body> tag", function (a) {
              return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#outside_body"
          ),
          "Code Snippet"
        ),
        N(
          L(
            P("<script> tag must not be included in a <%s>", function (a) {
              return a.parentNode
                ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase()
                : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#script_html"
          ),
          "Code Snippet"
        ),
        Ci,
        Di,
        Ei,
        K(
          N(
            L(
              P("Missing DOCTYPE on the page.", function (a) {
                return self === top && !a.externalScript && "html" != F.childNodes[0].name;
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#missing_doctype"
            ),
            "Code Snippet"
          ),
          'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
        ).otherwise(
          N(
            K(
              L(
                P("Incorrect DOCTYPE on the page.", function (a) {
                  return self === top && !a.externalScript && "" != F.childNodes[0].publicId && "" == F.childNodes[0].systemId;
                }),
                "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#incorrect_doctype"
              ),
              'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
            ),
            "Code Snippet"
          )
        ),
        yi("robots.txt file check dom issue handle"),
        Ii
      ]
    ),
    M(
      Li(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//div[contains(@id, "gts-order")]'
      ),
      [
        gs,
        L(
          K(
            P("Item level details of the order confirmation module are missing", function (a) {
              return void 0 === bs(a, "gts-item", !0);
            }),
            'Provide the item level details associated with the order in the "gts-item" fields of the Google Trusted Stores Order Confirmation JavaScript code.  The gts-item fields include:  gts-i-name; gts-i-price; gts-i-quantity; gts-i-prodsearch-id; gts-i-prodsearch-store-id; gts-i-prodsearch-country; gts-i-prodsearch-language; etc'
          ),
          "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#item_details"
        ),
        M(Mi(yi("Google Trusted Stores"), '//span[contains(@class, "gts-item")]'), [
          gs,
          L(
            P("Unknown fields specified in the item level details of the order confirmation module", function (a) {
              var b = [];
              a = a.getElementsByTagName("span");
              for (var c = 0, d; (d = a[c]); c++) (d = d.getAttribute("class")) && !r(hs, d) && b.push(d);
              K(this, as(b));
              return 0 != b.length;
            }),
            "https://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894&topic=2609888&ctx=topic"
          ),
          cs("Item name", "gts-i-name", /\w+.*/, "", !0),
          cs("Item price", "gts-i-price", /^\d+(\.\d+)?$/, 'Required format: "123.45"', !0, void 0, "", "gts_price"),
          cs("Item quantity", "gts-i-quantity", /^\d+$/, 'Required format: "123"', !0, void 0, "", "gts_quantity"),
          ds("Google Shopping Item ID", "gts-i-prodsearch-id", /\w+.*/, "", "shopping_item", "gts_prodsearch_id"),
          ds(
            "Google Shopping Account ID",
            "gts-i-prodsearch-store-id",
            /^\d+$/,
            'Required format: "123"',
            "shopping_account",
            "gts_prodsearch_store"
          ),
          ds(
            "Google Shopping Country ID",
            "gts-i-prodsearch-country",
            /^[A-Z]{2}$/,
            'Required format: "US" (ISO3166',
            "shopping_country",
            "gts_prodsearch_country"
          ),
          ds(
            "Google Shopping Language ID",
            "gts-i-prodsearch-language",
            /^[a-z]{2}$/,
            'Required format: "en" (ISO639-1)',
            "shopping_language",
            "gts_prodsearch_language"
          ),
          M(
            Mi(
              yi("Google Trusted Stores", function (a) {
                return void 0 !== bs(a, "gts-i-prodsearch-id", !0);
              }),
              '//span[contains(@class, "gts-item")]'
            ),
            [cs("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', !0)]
          )
        ]),
        K(
          L(
            Mi(
              P("Order confirmation module is implemented more than once", function (a) {
                return 1 < a;
              }),
              'count(//div[contains(@id, "gts-order")])'
            ),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#order_more"
          ),
          "The Trusted Stores Order Confirmation Javascript code must be implemented exactly once on the order confirmation page.  Remove any duplicate implementations of the code."
        ),
        cs("Domain", "gts-o-domain", /^([\w\d]+\.)+\w+$/, 'Required format: "www.mystore.com"', void 0, void 0, "", "gts_domain"),
        cs("Customer email", "gts-o-email", /^([\w]+\.?)+@\w+\.\w+$/, 'Required format: "user@email.com"', void 0, void 0, "", "gts_email"),
        cs(
          "Customer country",
          "gts-o-country",
          /^[A-Z]{2}$/,
          'Required format: ISO3166 (example: "US")',
          void 0,
          void 0,
          "",
          "gts_country"
        ),
        cs("Currency", "gts-o-currency", /^[A-Z]{3}$/, 'Required format: ISO4217 (example: "USD")'),
        cs("Total", "gts-o-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        cs("Discounts", "gts-o-discounts", /^\-?\d+(\.\d+)?$/, 'Required format: "-123.45"'),
        cs("Shipping total", "gts-o-shipping-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        cs("Tax total", "gts-o-tax-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"', void 0, void 0, "", "gts_tax"),
        cs("Estimated shipping date", "gts-o-est-ship-date", /^\d{4}-\d{2}-\d{2}$/, 'Required format: "YYYY-MM-DD"'),
        cs("Preorder", "gts-o-has-preorder", /^[YN]$/, 'Required format: "Y" or "N"'),
        cs("Digital", "gts-o-has-digital", /^[YN]$/, 'Required format: "Y" or "N"'),
        cs("ID", "gts-o-id", /^[\w-]+$/, "", !1, "should be alphanumeric")
      ]
    )
  ];
};
var hs =
    "gts-i-name gts-i-price gts-i-quantity gts-i-prodsearch-id gts-i-prodsearch-store-id gts-i-prodsearch-country gts-i-prodsearch-language".split(
      " "
    ),
  es = M(
    J(
      I("Google Shopping ID", function (a) {
        return a.label || "not set";
      }),
      "copyable"
    ),
    [L(Xh("Invalid or missing account ID"), "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#invalid_id")]
  ),
  gs = J(
    I("gts-order-id", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  fs = n(x, /(?:^| )(gts\-[^ ]*)/);
Lj(new Vr());
var is = [2, 3, 4],
  js = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/,
  ks = {},
  ls =
    ((ks[1] = "UA"),
    (ks[2] = "AW"),
    (ks[3] = "DC"),
    (ks[4] = "G"),
    (ks[5] = "GF"),
    (ks[6] = "HA"),
    (ks[7] = "MC"),
    (ks[10] = "GTM"),
    (ks[11] = "GTM"),
    (ks[12] = "GT"),
    (ks[13] = "OPT"),
    (ks[14] = "GTM"),
    ks);
function ms(a) {
  a.xa && (a.fa ? (ls.hasOwnProperty(a.fa) ? (a.xa = ls[a.fa] + "-" + a.xa) : delete a.xa) : delete a.xa);
}
var ns = { a: 2, d: 3, e: 4, f: 5, g: 14, h: 6, i: 0, m: 7, n: 0, u: 1, t: 12 };
function os(a) {
  var b = {},
    c = a[1],
    d = a[2];
  if (-1 === "adefghimnoput".indexOf(d)) throw Error("Invalid product.");
  switch (c) {
    case "a":
      b.fa = 11;
      break;
    case "f":
      b.fa = 0;
      break;
    case "o":
    case "q":
    case "r":
    case "s":
      if (!ns.hasOwnProperty(d)) throw Error("Invalid product for runtime type.");
      b.fa = ns[d];
      break;
    case "p":
      switch (d) {
        case "a":
        case "u":
        case "d":
          b.fa = 9;
          break;
        default:
          b.fa = 8;
      }
      break;
    case "w":
    case "x":
    case "y":
      b.fa = 10;
      break;
    case "z":
      b.fa = 13;
      break;
    default:
      throw Error("Invalid runtime type.");
  }
  switch (c) {
    case "f":
      b.Va = 0;
      break;
    case "r":
    case "y":
      b.Va = 1;
      break;
    case "s":
      b.Va = 2;
      break;
    default:
      b.Va = 3;
  }
  switch (a[3]) {
    case "3":
      b.Ma = 0;
      break;
    case "f":
      b.Ma = 2;
      break;
    case "s":
      b.Ma = 1;
      break;
    default:
      throw Error("Invalid beacon transport.");
  }
  c = a.slice(4, 7);
  if (!/^[1-9a-c][1-9a-v]\d$/.test(c)) throw Error("Invalid runtime version.");
  b.Tc = "2" + c;
  if ((a = a.slice(7))) b.xa = a;
  ms(b);
  return b;
}
var ps = L(
    J(
      I("Container ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  qs = L(
    Th("Anti-flicker snippet timed out too fast", function (a) {
      a = parseInt(a.label, 10);
      return !isNaN(a) && 1e3 >= a;
    }),
    "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-timeout"
  ),
  rs = Sh("Async Hide DataLayer Name", function (a) {
    return x(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*["']([^']+)["']\s*,\s*(\d+)\s*,\s*{\s*['"]([^"']+)['"]/m, a.label, 4);
  }).l([
    Mi(
      L(
        P("DataLayer variable name mismatch", function (a, b) {
          (a = C(a.getAttribute("src")).v.get("l")) || (a = "dataLayer");
          return a != b.label;
        }),
        "https://support.google.com/optimize/answer/7577190#datalayer-variable-name-mismatch"
      ),
      '//script[contains(@src, "www.google-analytics.com/gtm/js?id=")]| //script[contains(@src, "www.googleoptimize.com/optimize.js?id=")]'
    )
  ]),
  ss = J(
    N(
      I("Anti-flicker snippet timeout", function (a) {
        return x(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,\s*{'([^']+)'/, a.label, 5);
      }),
      "Metadata"
    ),
    "copyable"
  ).l([qs]),
  ts = Mi(
    zi("Anti-flicker snippet", function (a) {
      this.format = "";
      return a.textContent;
    }),
    '//script[contains(text(), "(a,s,y,n,c,h,i,d,e)")]'
  ).l([
    rs,
    ss,
    L(
      Ai("Anti-flicker snippet not in HEAD", function (a) {
        return "HEAD" != a.parentNode.nodeName ? !0 : !1;
      }),
      "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-not-in-head"
    )
  ]);
function us(a, b) {
  var c = ke(a, "Google Optimize");
  a = ye(ke(b.relatedIssues, "Google Optimize"), "Tag");
  b = B(a, "Async Hide DataLayer Name");
  var d = B(c, b ? b.label + ".hide" : "dataLayer.hide");
  d &&
    a.forEach(function (e) {
      Wd(e, d);
      B(e, "Anti-flicker snippet") ||
        A(
          e,
          L(Uh("Non-standard anti-flicker snippet"), "https://support.google.com/optimize/answer/7577190#non-standard-page-hiding-snippet")
        );
    });
  a.forEach(function (e) {
    var f = B(e, "GA Tracker Name"),
      g = B(e, "Container ID").label;
    if (f) {
      var h = B(c, f.label);
      if (h && (A(f, h), d))
        try {
          var k = JSON.parse(h.label),
            m = JSON.parse(d.label);
          if (k.gtmContainerId) {
            a: {
              var p = k.gtmContainerId;
              if (p && "string" == typeof p)
                if (-1 !== is.indexOf(Number(p[0])))
                  try {
                    b: {
                      var v = Number(p[0]);
                      if (-1 === is.indexOf(v)) throw Error("Invalid parameter version " + v + " in parameter " + p);
                      switch (v) {
                        case 4:
                          h = 1;
                          var E = p.length;
                          k = {};
                          try {
                            for (; h < E; ) {
                              var O = void 0,
                                oa = p.substring(h);
                              v = 0;
                              for (var Ga = !1, $a = 0, yf = oa.length; v < yf && !Ga; ) {
                                var Wf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(oa[v]);
                                if (-1 === Wf) throw Error("Invalid descriptor");
                                Ga = !(Wf & 32);
                                $a <<= 5;
                                $a |= Wf & 31;
                                if (0 === v) {
                                  O = Wf & 3;
                                  switch (O) {
                                    case 0:
                                      throw Error("Encoding type unspecified");
                                    case 1:
                                    case 2:
                                    case 3:
                                      break;
                                    default:
                                      throw Error("Encoding type out of range");
                                  }
                                  $a >>= 2;
                                }
                                if (Ga)
                                  switch ($a) {
                                    case 0:
                                      throw Error("Field name unspecified");
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                    case 8:
                                    case 9:
                                      break;
                                    default:
                                      throw Error("Field name out of range");
                                  }
                                v++;
                              }
                              if (v >= yf) throw Error("Invalid descriptor length");
                              O = { Hd: O, Id: $a };
                              h += v - 1;
                              v = void 0;
                              switch (O.Hd) {
                                case 1:
                                  v = 1;
                                  break;
                                case 2:
                                  v = 4;
                                  break;
                                case 3:
                                  if (
                                    (h++, (v = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(p[h])), -1 === v)
                                  )
                                    throw Error("Invalid value length");
                              }
                              if (h + v >= E || 0 === v) throw Error("Invalid value length");
                              h++;
                              var kb = p.slice(h, h + v);
                              switch (O.Id) {
                                case 1:
                                  if (void 0 !== k.fa || void 0 !== k.Va) throw Error("Duplicate runtime value");
                                  var fi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(kb);
                                  if (-1 === fi) throw Error("Invalid runtime");
                                  O = fi & 3;
                                  switch (O) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                      break;
                                    default:
                                      throw Error("Load Source out of range");
                                  }
                                  Ga = fi >> 2;
                                  switch (Ga) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 11:
                                    case 12:
                                    case 13:
                                    case 14:
                                      break;
                                    default:
                                      throw Error("Runtime type out of range");
                                  }
                                  var Bs = O;
                                  var Cs = Ga;
                                  k.fa = Cs;
                                  k.Va = Bs;
                                  break;
                                case 2:
                                  if (void 0 !== k.Ma) throw Error("Duplicate beacon transport value");
                                  var gi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(kb);
                                  if (-1 === gi) throw Error("Invalid beacon transport");
                                  switch (gi) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Beacon transport out of range");
                                  }
                                  k.Ma = gi;
                                  break;
                                case 3:
                                  if (void 0 !== k.Tc) throw Error("Duplicate runtime version value");
                                  if (!js.test(kb)) throw Error("Invalid runtime version");
                                  k.Tc = kb;
                                  break;
                                case 4:
                                  if (void 0 !== k.ce) throw Error("Duplicate release experiment value");
                                  var hi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(kb);
                                  if (-1 === hi) throw Error("Invalid release experiment");
                                  switch (hi) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Release experiment out of range");
                                  }
                                  k.ce = hi;
                                  break;
                                case 5:
                                  if (void 0 !== k.Md || void 0 !== k.xa) throw Error("Duplicate target value");
                                  var ii = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(kb[0]);
                                  if (-1 === ii) throw Error("Invalid load type");
                                  var Fm = kb.slice(1);
                                  if (0 === Fm.length) throw Error("Invalid target id");
                                  switch (ii) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Load type out of range");
                                  }
                                  var Ds = ii;
                                  var Es = Fm;
                                  k.Md = Ds;
                                  k.xa = Es;
                                  break;
                                case 6:
                                  if (void 0 !== k.de) throw Error("Duplicate service worker experiment value");
                                  var ji = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(kb);
                                  if (-1 === ji) throw Error("Invalid service worker experiment");
                                  switch (ji) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Service worker experiment out of range");
                                  }
                                  k.de = ji;
                                  break;
                                case 7:
                                  if (void 0 !== k.Dd) throw Error("Duplicate canonical ID value");
                                  k.Dd = kb;
                                  break;
                                case 8:
                                  if (void 0 !== k.ie) throw Error("Duplicate source canonical ID value");
                                  k.ie = kb;
                                  break;
                                case 9:
                                  if (void 0 !== k.ee) throw Error("Duplicate SGTM canonical ID value");
                                  k.ee = kb;
                              }
                              h += v;
                            }
                          } catch (ki) {
                            throw Error("Parse Failure: " + ki + " at position " + h + ".");
                          }
                          ms(k);
                          var li = k;
                          break b;
                        case 3:
                          li = os(p);
                          break b;
                        case 2:
                          O = os(p.slice(0, 3) + "3" + p.slice(3));
                          delete O.Ma;
                          li = O;
                          break b;
                        default:
                          throw Error("Invalid parameter version " + v + " in parameter " + p);
                      }
                    }
                    var mi = li.xa;
                    break a;
                  } catch (ki) {}
                else if (3 < p.length) {
                  mi = "GTM-" + p.substr(3);
                  break a;
                }
              mi = void 0;
            }
            void 0 === m[mi] &&
              void 0 !== m[g] &&
              A(
                f,
                L(
                  Uh("Anti-flicker snippet configuration"),
                  "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-configuration"
                )
              );
          }
        } catch (ki) {}
    }
    (e = B(e, "Async Hide DataLayer Name")) &&
      !d &&
      A(
        e,
        L(
          Xh("DataLayer variable in anti-flicker snippet reassigned"),
          "https://support.google.com/optimize/answer/7577190#datalayer-variable-reassigned"
        )
      );
  });
}
var vs = function () {
  Q.call(this, "Google Optimize", 99);
  this.R = ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"];
};
ra(vs, Q);
vs.prototype.L = function () {
  return ["*://*.www.google-analytics.com/gtm/js*", "*://*.www.googleoptimize.com/optimize.js*"];
};
vs.prototype.K = function (a) {
  a = void 0 === a ? !1 : a;
  return ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"].map(function (b) {
    return M(
      T(
        "Google Optimize",
        b,
        t("%s ${%s}", "Google Optimize", "Container ID"),
        "https://support.google.com/360suite/optimize/answer/6211921",
        function (c) {
          return C(c.url).v.get("id");
        }
      ),
      a ? [] : [ps, qi(nj(), "Fine")]
    );
  });
};
vs.prototype.O = function () {
  var a = Gi();
  a.l(ts);
  return [
    Li(
      "Google Optimize",
      t("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.google-analytics.com/gtm/js?id=")]',
      function (b) {
        return x(/gtm\/js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l([
      ps,
      a,
      yi("GA Tracker Name", function (b) {
        b = C(b.getAttribute("src"));
        return b.v.get("cid") ? ((b = b.v.get("t")) ? b : "t0") : !1;
      }),
      L(
        P("Legacy Optimize snippet", function (b) {
          return "sync" == C(b.getAttribute("src")).v.get("m");
        }),
        "https://support.google.com/optimize/answer/7577190#legacy-optimize-snippet"
      )
    ]),
    Li(
      "Google Optimize",
      t("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.googleoptimize.com/optimize.js?id=")]',
      function (b) {
        return x(/optimize.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l([
      ps,
      zi("Synchronous", function (b) {
        return b.hasAttribute("async") ? "No" : "Yes";
      }),
      a
    ])
  ];
};
vs.prototype.Sa = function () {
  return [Bm("Google Optimize", us)];
};
Lj(new vs());
var ws = function (a) {
  Q.call(this, a.tagName, a.priority);
  this.definition = a;
  this.R = a.R;
};
ra(ws, Q);
l = ws.prototype;
l.L = function () {
  return this.definition.Rc;
};
l.K = function (a) {
  return this.definition.Ja.map(function (b) {
    return "function" == typeof b ? b(a) : b;
  });
};
l.O = function () {
  return this.definition.Nb;
};
l.Sa = function () {
  return this.definition.Pa;
};
l.sa = function () {
  return this.definition.Ga;
};
l.pb = function () {
  return this.definition.Ra;
};
l.Rb = function () {
  return this.definition.Ad;
};
l.Y = function () {
  return this.definition.eb;
};
var xs = M(
    L(
      J(
        I("Account ID", function (a) {
          this.format = "";
          return a.label || "not set";
        }),
        "copyable"
      ),
      ""
    ),
    [
      L(
        Th("Invalid or missing account ID", function (a) {
          return !$c([/^GTM-[0-9A-Z]{4,7}$/, /^UA-[^"']*$/, /^AW-[^"']*$/, /^DC-[^"']*$/], a.label);
        }),
        "https://support.google.com/tagassistant/answer/7548655#account_id"
      )
    ]
  ),
  ys = L(Ti, "https://support.google.com/tagassistant/answer/7548655#nonstandard"),
  zs = qi(nj(), "Fine"),
  As,
  Fs = {
    type: "Error",
    category: "Global site tag (gtag.js)",
    text: "Invalid call to gtag(), the Global site snippet is not installed",
    opt_infoLink: "https://support.google.com/tagassistant/answer/7548655#commands_without_snippet"
  };
As = new Pi(Fs.type, Fs.category, Fs.text, Fs.opt_infoLink, Fs.opt_function, Fs.opt_format);
As.pa = function (a) {
  if (a.nodeType != Node.DOCUMENT_NODE) return !1;
  a = a.documentElement.textContent;
  return x(/gtag\('/m, a) && !x(/function gtag\([^)]*\)/m, a) ? !0 : !1;
};
var Gs = Li(
  "Global site tag (gtag.js)",
  t("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
  "https://support.google.com/tagassistant/answer/7548655",
  '//script[not(contains(@src,"&cx=")) and contains(@src, "www.googletagmanager.com/gtag/js?id=")]',
  function (a) {
    return x(/gtag\/js[?]id=([^=&]*)/, a.getAttribute("src"));
  }
).l(xs);
function Hs(a) {
  re(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
    b.infoLink = "https://support.google.com/tagassistant/answer/7548655#http_response";
  });
}
function Is(a) {
  a = xe(a, "HTTP response code indicates tag failed to fire: Status 404", "404");
  a.length &&
    a.forEach(function (b) {
      b.type = "Warning";
      b.text += ". This could be due to an empty or un-published container";
    });
}
var Js = Bm("Global site tag (gtag.js)", function (a) {
    a = ue(a, ["Global site tag (gtag.js)"]);
    Hs(a);
    Is(a);
  }),
  Ks = zm(
    "Suggestion",
    "Global site tag (gtag.js)",
    "Multiple installations of Global site tag (gtag.js) detected",
    "https://support.google.com/tagassistant/answer/7548655#multiple_tags",
    function (a) {
      a = ue(a, ["Global site tag (gtag.js)"]);
      return 1 < oe(a, 1).length;
    }
  ),
  Ls = new (function () {
    this.tagName = "Default Tag Name";
    this.priority = 99;
    this.Rc = [];
    this.Ja = [];
    this.Nb = [];
    this.Pa = [];
    this.Ga = [];
    this.Ra = [];
    this.Ad = [];
    this.eb = {};
    this.R = null;
  })();
Ls.tagName = "Global site tag (gtag.js)";
Ls.priority = 30;
Ls.R = ["www.googletagmanager.com/gtag/js"];
Ls.Rc = ["*://*www.googletagmanager.com/gtag/js*"];
Ls.Ja = [
  function (a) {
    return M(
      T(
        "Global site tag (gtag.js)",
        "www.googletagmanager.com/gtag/js",
        t("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
        "https://support.google.com/tagassistant/answer/7548655",
        function (b) {
          return C(b.url).v.get("id");
        }
      ),
      a ? [] : [xs, ys, zs]
    );
  }
];
Ls.Nb = [As, Gs];
Ls.Ga = [Js, Ks];
Lj(new ws(Ls));
