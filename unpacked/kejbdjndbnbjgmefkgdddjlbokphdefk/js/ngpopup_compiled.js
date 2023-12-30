var n,
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
  q = function (a, b) {
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
q("Symbol", function (a) {
  if (a) return a;
  var b = function (f, g) {
    this.Xb = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.Xb;
  };
  var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    d = 0,
    e = function (f) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new b(c + (f || "") + "_" + d++, f);
    };
  return e;
});
q("Symbol.iterator", function (a) {
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
          return ea(aa(this));
        }
      });
  }
  return a;
});
var ea = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  fa = function (a) {
    return (a.raw = a);
  },
  ha = function (a, b) {
    a.raw = b;
    return a;
  },
  ia = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  },
  ja = function (a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  },
  ka = function (a) {
    return a instanceof Array ? a : ja(ia(a));
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
    a.Ba = b.prototype;
  },
  sa = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  },
  r = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
q("WeakMap", function (a) {
  function b() {}
  function c(k) {
    var m = typeof k;
    return ("object" === m && null !== k) || "function" === m;
  }
  function d(k) {
    if (!r(k, f)) {
      var m = new b();
      ba(k, f, { value: m });
    }
  }
  function e(k) {
    var m = Object[k];
    m &&
      (Object[k] = function (l) {
        if (l instanceof b) return l;
        Object.isExtensible(l) && d(l);
        return m(l);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          m = Object.seal({}),
          l = new a([
            [k, 2],
            [m, 3]
          ]);
        if (2 != l.get(k) || 3 != l.get(m)) return !1;
        l.delete(k);
        l.set(m, 4);
        return !l.has(k) && 4 == l.get(m);
      } catch (p) {
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
      this.xa = (g += Math.random() + 1).toString();
      if (k) {
        k = ia(k);
        for (var m; !(m = k.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    };
  h.prototype.set = function (k, m) {
    if (!c(k)) throw Error("Invalid WeakMap key");
    d(k);
    if (!r(k, f)) throw Error("WeakMap key fail: " + k);
    k[f][this.xa] = m;
    return this;
  };
  h.prototype.get = function (k) {
    return c(k) && r(k, f) ? k[f][this.xa] : void 0;
  };
  h.prototype.has = function (k) {
    return c(k) && r(k, f) && r(k[f], this.xa);
  };
  h.prototype.delete = function (k) {
    return c(k) && r(k, f) && r(k[f], this.xa) ? delete k[f][this.xa] : !1;
  };
  return h;
});
q("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = Object.seal({ x: 4 }),
          k = new a(ia([[h, "s"]]));
        if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
        var m = k.entries(),
          l = m.next();
        if (l.done || l.value[0] != h || "s" != l.value[1]) return !1;
        l = m.next();
        return l.done || 4 != l.value[0].x || "t" != l.value[1] || !m.next().done ? !1 : !0;
      } catch (p) {
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
        h = ia(h);
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
    for (var m = this.entries(), l; !(l = m.next()).done; ) (l = l.value), h.call(k, l[1], l[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, k) {
      var m = k && typeof k;
      "object" == m || "function" == m ? (b.has(k) ? (m = b.get(k)) : ((m = "" + ++g), b.set(k, m))) : (m = "p_" + k);
      var l = h[0][m];
      if (l && r(h[0], m))
        for (h = 0; h < l.length; h++) {
          var p = l[h];
          if ((k !== k && p.key !== p.key) || k === p.key) return { id: m, list: l, index: h, entry: p };
        }
      return { id: m, list: l, index: -1, entry: void 0 };
    },
    e = function (h, k) {
      var m = h[1];
      return ea(function () {
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
var ta = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  },
  ua = function (a, b) {
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
q("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b) {
          return b;
        });
      };
});
q("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b, c) {
          return c;
        });
      };
});
q("Array.prototype.find", function (a) {
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
q("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = ta(this, b, "startsWith");
        b += "";
        var e = d.length,
          f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
        return g >= f;
      };
});
q("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
q("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return ua(this, function (b, c) {
          return [b, c];
        });
      };
});
q("Array.from", function (a) {
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
q("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
q("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) r(b, d) && c.push(b[d]);
        return c;
      };
});
q("Object.is", function (a) {
  return a
    ? a
    : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
});
q("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
});
q("String.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        return -1 !== ta(this, b, "includes").indexOf(b, c || 0);
      };
});
q("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) r(b, d) && c.push([d, b[d]]);
        return c;
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self,
  u = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  va = function (a) {
    var b = u(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  ya = function (a) {
    return (Object.prototype.hasOwnProperty.call(a, wa) && a[wa]) || (a[wa] = ++xa);
  },
  wa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  xa = 0,
  za = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  Aa = function (a, b, c) {
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
  Ba = function (a, b, c) {
    Ba = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? za : Aa;
    return Ba.apply(null, arguments);
  },
  v = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  w = function (a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  Ca = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ba = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Yd = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  },
  Da = function (a) {
    return a;
  };
var Ea = function (a, b) {
  this.eb = a;
  this.sa = b;
  this.ra = null;
  this.Ib = 1e4;
  this.jb = this.Fb = this.Gb = null;
};
Ea.prototype.setInterval = function (a) {
  this.Ib = a;
  return this;
};
var Fa = function (a, b) {
    a.Gb = b;
    return a;
  },
  Ga = function (a, b) {
    a.Fb = b;
    return a;
  },
  Ha = function (a, b) {
    a.jb = b;
  };
Ea.prototype.Nc = function () {
  var a = this.Gb();
  this.sa.when(a).then(this.xc.bind(this));
};
Ea.prototype.xc = function (a) {
  this.Fb(a);
  this.jb && this.jb(a) && (this.eb.cancel(this.ra), (this.ra = null));
};
var Ia = ["$interval", "$q", Ea];
var Ja = {},
  Ka = ((Ja.Capturing = "popup.issues"), (Ja.Enabled = "popup.enabled"), (Ja.Disabled = "popup.disabled"), Ja);
function La(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, La);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
Ca(La, Error);
La.prototype.name = "CustomError";
function Ma(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  La.call(this, c + a[d]);
}
Ca(Ma, La);
Ma.prototype.name = "AssertionError";
function Na(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Ma("" + e, f || []);
}
var x = function (a, b, c) {
    a || Na("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  Oa = function (a, b) {
    throw new Ma("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Pa = function (a, b, c) {
    "number" !== typeof a && Na("Expected number but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Qa = function (a, b, c) {
    "string" !== typeof a && Na("Expected string but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ra = function (a, b, c) {
    Array.isArray(a) || Na("Expected array but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Sa = function (a, b, c) {
    "boolean" !== typeof a && Na("Expected boolean but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
  };
var Ta = Array.prototype.indexOf
  ? function (a, b) {
      x(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0);
    }
  : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    };
function Ua(a, b) {
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
function y(a, b) {
  return 0 <= Ta(a, b);
}
function Va(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (va(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function Wa(a, b) {
  a.sort(b || Xa);
}
function Xa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
var Ya = function (a, b) {
  this.vc = a[t.Symbol.iterator]();
  this.Gc = b;
};
Ya.prototype[Symbol.iterator] = function () {
  return this;
};
Ya.prototype.next = function () {
  var a = this.vc.next();
  return { value: a.done ? void 0 : this.Gc.call(void 0, a.value), done: a.done };
};
var Za = function (a, b) {
  return new Ya(a, b);
};
var $a =
  Object.freeze ||
  function (a) {
    return a;
  };
var ab = function (a, b) {
  var c = arguments,
    d = c.length;
  return function () {
    var e;
    d && (e = c[d - 1].apply(this, arguments));
    for (var f = d - 2; 0 <= f; f--) e = c[f].call(this, e);
    return e;
  };
};
var bb = function () {};
bb.prototype.next = function () {
  return cb;
};
var cb = $a({ done: !0, value: void 0 });
bb.prototype.X = function () {
  return this;
};
var db = function (a) {
  if (a instanceof bb) return a;
  if ("function" == typeof a.X) return a.X(!1);
  if (va(a)) {
    var b = 0,
      c = new bb();
    c.next = function () {
      for (;;) {
        if (b >= a.length) return cb;
        if (b in a) return { value: a[b++], done: !1 };
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
};
var gb = function (a) {
    if (a instanceof z || a instanceof eb || a instanceof fb) return a;
    if ("function" == typeof a.next)
      return new z(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new z(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.X)
      return new z(function () {
        return a.X();
      });
    throw Error("Not an iterator or iterable.");
  },
  z = function (a) {
    this.Ya = a;
  };
z.prototype.X = function () {
  return new eb(this.Ya());
};
z.prototype[Symbol.iterator] = function () {
  return new fb(this.Ya());
};
z.prototype.lb = function () {
  return new fb(this.Ya());
};
var eb = function (a) {
  this.za = a;
};
ra(eb, bb);
eb.prototype.next = function () {
  return this.za.next();
};
eb.prototype[Symbol.iterator] = function () {
  return new fb(this.za);
};
eb.prototype.lb = function () {
  return new fb(this.za);
};
var fb = function (a) {
  z.call(this, function () {
    return a;
  });
  this.za = a;
};
ra(fb, z);
fb.prototype.next = function () {
  return this.za.next();
};
var hb = function (a, b) {
  this.P = {};
  this.B = [];
  this.Da = this.size = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
n = hb.prototype;
n.Za = function () {
  return this.size;
};
n.V = function () {
  ib(this);
  for (var a = [], b = 0; b < this.B.length; b++) a.push(this.P[this.B[b]]);
  return a;
};
n.U = function () {
  ib(this);
  return this.B.concat();
};
n.Va = function (a) {
  return this.has(a);
};
n.has = function (a) {
  return jb(this.P, a);
};
n.equals = function (a, b) {
  if (this === a) return !0;
  if (this.size != a.Za()) return !1;
  b = b || kb;
  ib(this);
  for (var c, d = 0; (c = this.B[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
  return !0;
};
var kb = function (a, b) {
  return a === b;
};
hb.prototype.clear = function () {
  this.P = {};
  this.Da = this.size = this.B.length = 0;
};
hb.prototype.remove = function (a) {
  return this.delete(a);
};
hb.prototype.delete = function (a) {
  return jb(this.P, a) ? (delete this.P[a], --this.size, this.Da++, this.B.length > 2 * this.size && ib(this), !0) : !1;
};
var ib = function (a) {
  if (a.size != a.B.length) {
    for (var b = 0, c = 0; b < a.B.length; ) {
      var d = a.B[b];
      jb(a.P, d) && (a.B[c++] = d);
      b++;
    }
    a.B.length = c;
  }
  if (a.size != a.B.length) {
    var e = {};
    for (c = b = 0; b < a.B.length; ) (d = a.B[b]), jb(e, d) || ((a.B[c++] = d), (e[d] = 1)), b++;
    a.B.length = c;
  }
};
n = hb.prototype;
n.get = function (a, b) {
  return jb(this.P, a) ? this.P[a] : b;
};
n.set = function (a, b) {
  jb(this.P, a) || ((this.size += 1), this.B.push(a), this.Da++);
  this.P[a] = b;
};
n.addAll = function (a) {
  if (a instanceof hb) for (var b = a.U(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
  else for (b in a) this.set(b, a[b]);
};
n.forEach = function (a, b) {
  for (var c = this.U(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
n.clone = function () {
  return new hb(this);
};
n.toObject = function () {
  ib(this);
  for (var a = {}, b = 0; b < this.B.length; b++) {
    var c = this.B[b];
    a[c] = this.P[c];
  }
  return a;
};
n.keys = function () {
  return gb(this.X(!0)).lb();
};
n.values = function () {
  return gb(this.X(!1)).lb();
};
n.entries = function () {
  var a = this;
  return Za(this.keys(), function (b) {
    return [b, a.get(b)];
  });
};
n.X = function (a) {
  ib(this);
  var b = 0,
    c = this.Da,
    d = this,
    e = new bb();
  e.next = function () {
    if (c != d.Da) throw Error("The map has changed since the iterator was created");
    if (b >= d.B.length) return cb;
    var f = d.B[b++];
    return { value: a ? f : d.P[f], done: !1 };
  };
  return e;
};
var jb = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var lb = function () {
    this.I = {};
    for (var a in Object.prototype) Oa(a + " should not be enumerable in Object.prototype.");
  },
  mb = {},
  nb = function (a) {
    return a in mb || 32 == String(a).charCodeAt(0) ? " " + a : a;
  },
  ob = function (a) {
    return 32 == a.charCodeAt(0) ? a.slice(1) : a;
  };
n = lb.prototype;
n.add = function (a) {
  this.I[nb(a)] = null;
};
n.clear = function () {
  this.I = {};
};
n.clone = function () {
  var a = new lb(),
    b;
  for (b in this.I) a.I[b] = null;
  return a;
};
n.contains = function (a) {
  return nb(a) in this.I;
};
n.has = function (a) {
  return this.contains(a);
};
n.equals = function (a) {
  return pb(this, a) && pb(a, this);
};
n.forEach = function (a, b) {
  for (var c in this.I) a.call(b, ob(c), void 0, this);
};
n.Za = Object.keys
  ? function () {
      return Object.keys(this.I).length;
    }
  : function () {
      var a = 0,
        b;
      for (b in this.I) a++;
      return a;
    };
n.values = Object.keys
  ? function () {
      return Object.keys(this.I).map(ob, this);
    }
  : function () {
      var a = [],
        b;
      for (b in this.I) a.push(ob(b));
      return a;
    };
n.V = function () {
  return this.values();
};
var pb = function (a, b) {
  for (var c in a.I) if (!(c in b.I)) return !1;
  return !0;
};
lb.prototype.delete = function (a) {
  a = nb(a);
  return a in this.I ? (delete this.I[a], !0) : !1;
};
lb.prototype.remove = function (a) {
  return this.delete(a);
};
lb.prototype.X = function () {
  return db(this.V());
};
var qb = function (a, b) {
    this.Fa = a;
    this.Yb = b;
    this.Qa = new hb();
    this.Na = new lb();
    this.J = null;
  },
  rb = function (a) {
    if (!a.J)
      try {
        (a.J = chrome.runtime.connect({ name: "popup" })),
          a.J.onMessage.addListener(Ba(a.Ic, a)),
          a.J.onDisconnect.addListener(function () {
            a.J = null;
          });
      } catch (b) {
        console.error("Error while connecting to background script: ", b);
      }
  };
qb.prototype.postMessage = function (a, b, c) {
  if ((c && this.Na.contains(a)) || (!c && this.Qa.has(a))) return this.Qa.get(a).promise;
  rb(this);
  c = this.Yb.defer();
  if (this.J) {
    var d = {};
    d = ((d.message = a), (d.tabId = this.Fa.tabId), d);
    angular.isObject(b) ? angular.extend(d, b) : (d.name = b || null);
    this.Qa.set(a, c);
    this.Na.add(a);
    this.J.postMessage(d);
  } else c.reject("Not connected to background script");
  return c.promise;
};
qb.prototype.Ic = function (a) {
  x(a.message, "Response should contain original request message type.");
  var b = a.message;
  x(this.Na.contains(b), "Invalid response: No pending request found for message: %s", b);
  this.Qa.get(b).resolve(a.data);
  this.Na.remove(b);
};
var sb = ["$rootScope", "$q", qb];
var tb = new WeakMap(),
  ub = function (a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\v");
  };
var vb = (function (a, b) {
  b = void 0 === b ? ub : b;
  var c = ya(a),
    d = function (e) {
      e = ia(e);
      e.next();
      e = ja(e);
      return b(c, e);
    };
  return function () {
    var e = sa.apply(0, arguments),
      f = this || t,
      g = tb.get(f);
    g || ((g = {}), tb.set(f, g));
    f = g;
    g = [this].concat(ka(e));
    e = d ? d(g) : g;
    if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
    else {
      var h = ia(g);
      g = h.next().value;
      h = ja(h);
      g = a.apply(g, h);
      f = f[e] = g;
    }
    return f;
  };
})(function (a, b) {
  for (var c = [], d = 0; d <= a.length; ) c.push(a.slice(d, d + b)), (d += b);
  return c;
});
vb.Ta = "chunk";
function wb(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a);
}
function xb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
var yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function zb(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < yb.length; f++) (c = yb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ab(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return Ab.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
var Bb,
  Cb = function () {
    if (void 0 === Bb) {
      var a = null,
        b = t.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", { createHTML: Da, createScript: Da, createScriptURL: Da });
        } catch (c) {
          t.console && t.console.error(c.message);
        }
      Bb = a;
    }
    return Bb;
  };
var Fb = function (a, b) {
  this.Rb = (a === Db && b) || "";
  this.sc = Eb;
};
Fb.prototype.ia = !0;
Fb.prototype.toString = function () {
  return "Const{" + this.Rb + "}";
};
var Gb = function (a) {
    if (a instanceof Fb && a.constructor === Fb && a.sc === Eb) return a.Rb;
    Oa("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  Eb = {},
  Db = {};
var Hb = {},
  Ib = function (a, b) {
    if (b !== Hb) throw Error("SafeScript is not meant to be built directly");
    this.Kb = a;
    this.ia = !0;
  };
Ib.prototype.toString = function () {
  return this.Kb.toString();
};
var Jb = function (a) {
  if (a instanceof Ib && a.constructor === Ib) return a.Kb;
  Oa("expected object of type SafeScript, got '" + a + "' of type " + u(a));
  return "type_error:SafeScript";
};
var Lb = function (a, b) {
  if (b !== Kb) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.Nb = a;
};
Lb.prototype.toString = function () {
  return this.Nb + "";
};
Lb.prototype.ia = !0;
var Mb = function (a) {
    if (a instanceof Lb && a.constructor === Lb) return a.Nb;
    Oa("expected object of type TrustedResourceUrl, got '%s' of type %s", a, u(a));
    return "type_error:TrustedResourceUrl";
  },
  Kb = {},
  Nb = function (a) {
    var b = Cb();
    a = b ? b.createScriptURL(a) : a;
    return new Lb(a, Kb);
  };
var A = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  B = function (a, b) {
    return -1 != a.indexOf(b);
  };
var Qb = function (a, b) {
  if (b !== Ob) throw Error("SafeUrl is not meant to be built directly");
  this.Mb = a;
};
Qb.prototype.toString = function () {
  return this.Mb.toString();
};
Qb.prototype.ia = !0;
var Rb = function (a) {
    if (a instanceof Qb && a.constructor === Qb) return a.Mb;
    Oa("expected object of type SafeUrl, got '" + a + "' of type " + u(a));
    return "type_error:SafeUrl";
  },
  Ob = {};
new Qb("about:invalid#zClosurez", Ob);
new Qb("about:blank", Ob);
var Sb = {},
  Tb = function (a, b) {
    if (b !== Sb) throw Error("SafeStyle is not meant to be built directly");
    this.Lb = a;
    this.ia = !0;
  };
Tb.prototype.toString = function () {
  return this.Lb.toString();
};
var Ub = function (a) {
  if (a instanceof Tb && a.constructor === Tb) return a.Lb;
  Oa("expected object of type SafeStyle, got '" + a + "' of type " + u(a));
  return "type_error:SafeStyle";
};
new Tb("", Sb);
var Vb = {},
  Wb = function () {
    if (Vb !== Vb) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Lc = "";
    this.ia = !0;
  };
Wb.prototype.toString = function () {
  return this.Lc.toString();
};
new Wb();
var Xb, Yb;
a: {
  for (var Zb = ["CLOSURE_FLAGS"], $b = t, ac = 0; ac < Zb.length; ac++)
    if ((($b = $b[Zb[ac]]), null == $b)) {
      Yb = null;
      break a;
    }
  Yb = $b;
}
var bc = Yb && Yb[610401301];
Xb = null != bc ? bc : !1;
function cc() {
  var a = t.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var dc,
  ec = t.navigator;
dc = ec ? ec.userAgentData || null : null;
function fc(a) {
  return Xb
    ? dc
      ? dc.brands.some(function (b) {
          return (b = b.brand) && B(b, a);
        })
      : !1
    : !1;
}
function C(a) {
  return B(cc(), a);
}
function gc() {
  return Xb ? !!dc && 0 < dc.brands.length : !1;
}
function hc() {
  return gc() ? !1 : C("Opera");
}
function ic() {
  return C("Firefox") || C("FxiOS");
}
function jc() {
  return gc() ? fc("Chromium") : ((C("Chrome") || C("CriOS")) && !(gc() ? 0 : C("Edge"))) || C("Silk");
}
var kc = {},
  lc = function (a, b) {
    if (b !== kc) throw Error("SafeHtml is not meant to be built directly");
    this.Jb = a;
    this.ia = !0;
  };
lc.prototype.toString = function () {
  return this.Jb.toString();
};
var mc = function (a) {
    if (a instanceof lc && a.constructor === lc) return a.Jb;
    Oa("expected object of type SafeHtml, got '" + a + "' of type " + u(a));
    return "type_error:SafeHtml";
  },
  nc = new lc((t.trustedTypes && t.trustedTypes.emptyHTML) || "", kc);
var oc = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
  pc = (function (a) {
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
    a.innerHTML = mc(nc);
    return !b.parentElement;
  });
var sc = function (a) {
    return B(a, "&") ? ("document" in t ? qc(a) : rc(a)) : a;
  },
  qc = function (a) {
    var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var c = t.document.createElement("div");
    return a.replace(tc, function (d, e) {
      var f = b[d];
      if (f) return f;
      "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
      if (!f) {
        f = d + " ";
        e = new Fb(Db, "Single HTML entity.");
        Qa(Gb(e), "must provide justification");
        x(!/^[\s\xa0]*$/.test(Gb(e)), "must provide non-empty justification");
        f = (e = Cb()) ? e.createHTML(f) : f;
        f = new lc(f, kc);
        if (c.tagName && oc[c.tagName.toUpperCase()])
          throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
        if (pc()) for (; c.lastChild; ) c.removeChild(c.lastChild);
        c.innerHTML = mc(f);
        f = c.firstChild.nodeValue.slice(0, -1);
      }
      return (b[d] = f);
    });
  },
  rc = function (a) {
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
  tc = /&([^;\s<&]+);?/g,
  uc = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  D = function (a, b) {
    if (!Number.isFinite(a)) return String(a);
    a = String(a);
    var c = a.indexOf(".");
    -1 === c && (c = a.length);
    var d = "-" === a[0] ? "-" : "";
    d && (a = a.substring(1));
    return d + uc("0", Math.max(0, b - c)) + a;
  };
var vc = function (a, b) {
  this.name = a;
  this.value = b;
};
vc.prototype.toString = function () {
  return this.name;
};
var wc = new vc("OFF", Infinity),
  xc = new vc("WARNING", 900),
  yc = new vc("CONFIG", 700),
  zc = function () {
    this.Ha = 0;
    this.clear();
  },
  Ac;
zc.prototype.clear = function () {
  this.S = Array(this.Ha);
  this.ub = -1;
  this.Ab = !1;
};
var Bc = function (a, b, c) {
  this.reset(a || wc, b, c, void 0, void 0);
};
Bc.prototype.reset = function (a, b) {
  this.Hc = b;
};
Bc.prototype.getMessage = function () {
  return this.Hc;
};
var Cc = function (a, b) {
    this.level = null;
    this.zc = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.Fc = {
      ab: function () {
        return a;
      }
    };
  },
  Dc = function (a) {
    if (a.level) return a.level;
    if (a.parent) return Dc(a.parent);
    Oa("Root logger has no level set.");
    return wc;
  };
Cc.prototype.publish = function (a) {
  for (var b = this; b; )
    b.zc.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var Ec = function () {
    this.entries = {};
    var a = new Cc("");
    a.level = yc;
    this.entries[""] = a;
  },
  Fc,
  Gc = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = Gc(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new Cc(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  Hc = function () {
    Fc || (Fc = new Ec());
    return Fc;
  };
var Ic = function (a, b) {
  null != a && this.append.apply(this, arguments);
};
n = Ic.prototype;
n.S = "";
n.set = function (a) {
  this.S = "" + a;
};
n.append = function (a, b, c) {
  this.S += String(a);
  if (null != b) for (var d = 1; d < arguments.length; d++) this.S += arguments[d];
  return this;
};
n.clear = function () {
  this.S = "";
};
n.toString = function () {
  return this.S;
};
var _gaq = _gaq || [];
var Jc = function (a, b) {
    a = b ? a.exec.call(a, b) : void 0;
    return a ? (1 < a.length ? a[1] : !0) : !1;
  },
  Lc = function (a, b) {
    var c = b || [";", ","];
    b = b ? 0 : 1;
    var d = { "(": ")", "{": "}", "[": "]" },
      e = void 0,
      f = !1,
      g = [],
      h = [],
      k = 0;
    a = A(Kc(a));
    var m = a.length,
      l;
    for (l = 0; l < m; l++) {
      var p = a.charAt(l);
      f
        ? (f = !1)
        : "\\" == p
        ? (f = !0)
        : e
        ? p == e && (e = void 0)
        : '"' == p || "'" == p
        ? (e = p)
        : "(" == p || "{" == p || "[" == p
        ? g.push(d[p])
        : g.length
        ? p == g[g.length - 1] && g.pop()
        : y(c, p)
        ? ((k = A(a.substring(k, l + b))), h.push(k.replace(" *\n *", "")), (k = l + 1))
        : l == k && E[a.charCodeAt(l)] && (k = l + 1);
    }
    k = A(a.substring(k, l));
    h.push(k.replace(" *\n *", ""));
    return h;
  },
  Mc = function (a) {
    a = Jc(/\{(.*)\}/, a) || a;
    return Lc(a, [","]).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = Jc(/"(.*)"/, c) || c;
      c = Jc(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
  },
  Nc = function (a, b, c, d, e) {
    b && (c && a.append(uc("  ", d.length)), a.append(b, e));
    return "\n" == e;
  },
  Oc = function (a) {
    var b = [";", ","],
      c = { "{": "}", "[": "]" },
      d = void 0,
      e = !1,
      f = [],
      g = new Ic(),
      h = 0,
      k = !1;
    a = A(Kc(a));
    var m = a.length,
      l;
    for (l = 0; l < m; l++) {
      var p = a.charAt(l);
      e
        ? (e = !1)
        : "\\" == p
        ? (e = !0)
        : d
        ? p == d && (d = void 0)
        : '"' == p || "'" == p
        ? (d = p)
        : ":" == p
        ? ((h = A(a.substring(h, l))), (k = Nc(g, h, k, f, "")), g.append(": "), (h = l + 1))
        : "{" == p || "[" == p
        ? ((h = A(a.substring(h, l))), (k = Nc(g, h, k, f, "\n")), (k = Nc(g, p, k, f, "\n")), (h = l + 1), f.push(c[p]))
        : f.length && p == f[f.length - 1]
        ? ((h = A(a.substring(h, l))), (k = Nc(g, h, k, f, "\n")), (h = l), f.pop())
        : l == h && E[a.charCodeAt(l)] && (h = l + 1);
      y(b, p) && ((h = A(a.substring(h, l))), (k = Nc(g, h, k, f, "")), (k = Nc(g, p, k, f, "\n")), (h = l + 1));
    }
    h = A(a.substring(h, l));
    Nc(g, h, k, f, "\n");
    return g.toString();
  },
  Kc = function (a, b) {
    var c = void 0,
      d = !1,
      e = -1;
    b = b || 0;
    for (var f = a.length, g = b; g < f; g++) {
      var h = a.charAt(g),
        k = g + 1 < f ? a.charAt(g + 1) : "";
      if (d) d = !1;
      else if (0 <= e) {
        if ("*" == h && "/" == k) return a.substring(b, e) + Kc(a, g + 2);
      } else if ("\\" == h) d = !0;
      else if (c) h == c && (c = void 0);
      else if ("/" == h) {
        if ("/" == k) return (c = a.indexOf("\n", g)), -1 == c ? a.substring(b, g) : a.substring(b, g) + Kc(a, c);
        "*" == k && (e = g++);
      } else if ('"' == h || "'" == h) c = h;
    }
    return a.substring(b);
  },
  E = [];
E[9] = !0;
E[10] = !0;
E[11] = !0;
E[12] = !0;
E[13] = !0;
E[32] = !0;
E[133] = !0;
E[160] = !0;
E[5760] = !0;
E[6158] = !0;
E[8192] = !0;
E[8193] = !0;
E[8194] = !0;
E[8195] = !0;
E[8196] = !0;
E[8197] = !0;
E[8198] = !0;
E[8199] = !0;
E[8200] = !0;
E[8201] = !0;
E[8202] = !0;
E[8203] = !0;
E[8232] = !0;
E[8233] = !0;
E[8239] = !0;
E[8287] = !0;
E[12288] = !0;
var F = {},
  Pc = {},
  Qc = {},
  Rc,
  Sc = {
    Zc: "AutoOpenRecordings",
    ad: "categories",
    bd: "CheckPermissionsLater",
    gd: "DefaultLevelOfDetail",
    fd: "DebugIssues",
    jd: "IgnoreExternalScripts",
    kd: "FollowLinks",
    ld: "gaDebug",
    nd: "GtaPage",
    qd: "hideRecordingSuggestion",
    rd: "IgnoreExternalScripts",
    xd: "isInSupportTeam",
    yd: "last-checked-for-support-team",
    zd: "LoggedIn",
    Bd: "LogInfoTemplate",
    Cd: "LogSources",
    Ad: "LoggingEnabled",
    Dd: "ManualChecks",
    Ed: "ManualScriptParsing",
    Hd: "NgModeDisabled",
    Kd: "PatternProfiling",
    Ld: "RecordingTab",
    Md: "GooglePublisherConsole",
    Nd: "ShowIgnoredIssues",
    Od: "ShowWelcomeScreen",
    Wd: "WhiteListedDomains",
    Td: "ValidateAllPages"
  },
  Tc = { DefaultLevelOfDetail: "DefaultLevel" },
  Uc = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  Yc = function (a, b) {
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (c) {
        Vc(c);
        c["Options initialized to default values."] || Wc();
        a();
      }),
      Xc(b));
  },
  G = function (a) {
    var b = F[a];
    if (!b && Tc[a] && F[Tc[a]]) {
      var c = Tc[a];
      b = void 0 !== F[c] ? F[c] : null;
      Zc(a, b);
      void 0 !== chrome && void 0 !== chrome.storage
        ? (delete Qc[c], chrome.storage.local.remove(c, void 0), chrome.storage.sync.remove(c, void 0))
        : (delete Qc[F[c]], delete F[c]);
    }
    return b;
  },
  $c = function () {
    var a = G("categories");
    void 0 !== a && Ra(a);
    return a || [];
  },
  ad = function (a) {
    a = G(a);
    void 0 !== a && Sa(a);
    return !!a;
  },
  cd = function () {
    var a = bd("WhiteListedDomains");
    if (void 0 === a) return [];
    var b = Qc[a];
    b || ((b = a.trim()), (b = 0 == b.length ? [] : b.split(/ *[,\n]+(?: |,|\n)*/)), (Qc[a] = b));
    return b;
  },
  bd = function (a, b) {
    a = G(a);
    void 0 !== a && Sa("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  dd = function (a) {
    Rc ||
      ((Rc = {}),
      Object.keys(F).forEach(function (b) {
        0 < b.indexOf("|") && (Rc[b.split("|")[0]] = !0);
      }));
    return !!Rc[a];
  },
  Xc = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      for (var c in b) F[c] = b[c].newValue;
      "function" === typeof a && a();
    });
  },
  fd = function () {
    var a = {};
    wb(Sc, function (b) {
      void 0 !== G(b) && (a[b] = G(b));
    });
    Wc();
    ed(a);
  },
  Wc = function () {
    var a = G("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    F = {};
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
    ed(a);
  },
  gd = function (a, b, c) {
    wb(b, function (d, e) {
      null != d && (Pc[e] ? x(typeof d == Pc[e], "Unexpected type " + typeof d + " expected " + Pc[e]) : (Pc[e] = typeof d));
    });
    Vc(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (fd(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  Vc = function (a, b) {
    a && zb(F, a);
    b && b();
  },
  hd = void 0 !== chrome && void 0 !== chrome.storage ? v(gd, chrome.storage.local) : Vc,
  ed = void 0 !== chrome && void 0 !== chrome.storage ? v(gd, chrome.storage.sync) : Vc,
  Zc = function (a, b) {
    delete Qc[a];
    ed(Ab(a, b), void 0);
  },
  id = function () {
    return bd("GtaPage", "PROD");
  };
w("tvt.Settings.getGataPageVersion", id);
w("tvt.Settings.setGataPageVersion", function (a) {
  Zc("GtaPage", a || "PROD");
});
var jd = function () {
  var a = id();
  return Uc[a];
};
w("tvt.Settings.getGataRedirectUrl", jd);
var kd = function () {
  return jd() + "internal/";
};
w("tvt.Settings.getGataInternalRedirectUrl", kd);
w("tvt.Settings.getGataLoginCheckUrl", function () {
  return jd() + "logincheck";
});
w("tvt.Settings.getGataInternalLoginUrl", function () {
  return kd() + "login";
});
w("tvt.Settings.getGataLoginUrl", function () {
  return jd() + "login";
});
w("tvt.Settings.toggleGaDebugSettings", function () {
  var a = {};
  switch (G("gaDebug")) {
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
  hd(a);
});
var ld = function (a) {
    return (
      (null != a && 0 <= a.indexOf("https://chrome.google.com")) ||
      /^chrome:\/\/.*?/.test(a) ||
      /_\/chrome\/newtab/.test(a) ||
      (0 == a.indexOf("chrome") && !/^chrome-extension:\/\/[^\/]+\/tour.html$/.test(a))
    );
  },
  nd = function (a) {
    var b = cd();
    return (
      null != a &&
      b.some(function (c) {
        return 5 < c.length && B(a, c);
      })
    );
  };
var od = "Error Warning Suggestion Hidden Info Fine Debug".split(" "),
  pd = ["Error", "Warning", "Suggestion"];
wb(
  { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] },
  function (a) {
    for (var b = 0; a[b]; b++);
  }
);
var qd = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  rd = { Metadata: 1 },
  sd = function (a, b, c) {
    if (Array.isArray(a))
      for (var d = 0, e, f = 0; (e = a[f]); f++) {
        var g = (c ? c + "." : "") + d++,
          h = console,
          k = h.log,
          m = g + " " + e.type + "[" + e.view + "]: " + e.issueClass + ": " + e.text,
          l;
        if ((l = e.label)) (l = e.label.replace("\n", "")), 25 < l.length && (l = l.substring(0, 22) + "..."), (l = " -- " + l);
        k.call(
          h,
          m +
            l +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && sd(e.relatedIssues, b, g);
      }
    else sd(a.relatedIssues, b, c);
  };
w("module$contents$tvt$Issue_Issue.dump", sd);
var ud = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.type && td(c.category);
    });
  },
  vd = function (a) {
    for (var b = [], c, d = 0; (c = a[d]); d++) c.deleted || c.deduped || ("Bucket" == c.type ? b.push(c) : Va(b, vd(c.relatedIssues)));
    return b;
  },
  xd = function (a, b) {
    return wd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  wd = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = wd(d.relatedIssues, b, c)))) return d;
    return null;
  },
  zd = function (a, b) {
    dd(a) && yd(a, b);
  },
  yd = function (a, b, c) {
    for (var d, e = 0; (d = b[e]); e++) {
      var f = !c && "Tag" == d.type,
        g = !f && y(pd, d.type),
        h = c || (f ? d.text : "Global");
      if (f || g) (f = Ad(d, a)), (d.ignored = ad(f));
      yd(a, d.relatedIssues, h);
    }
  },
  Cd = function (a) {
    return (a.parent ? Bd(a.parent) : 1) ? a : Cd(a.parent);
  },
  Dd = function (a) {
    a = Cd(a);
    return "Tag" == a.type ? a.text : "Global";
  },
  Ad = function (a, b) {
    var c = "Tag" != a.type && y(pd, a.type);
    b = b + "|ignore:" + Dd(a) + ":" + a.type;
    c && (b = b + ":" + (0 == a.text.length ? a.category : a.text));
    return b;
  },
  Fd = function (a, b, c) {
    var d = b || [];
    if (!c)
      a: switch (Ed(a.category || "")) {
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
        (e.view || (e.view = "Metadata"), e.ignored || "" == e.view || y(d, e.view) || !y(c, e.type) || d.push(e.view), Fd(e, d, c));
    b ||
      d.sort(function (g, h) {
        return (rd[g] || 99) - (rd[h] || 99);
      });
    return d;
  },
  Gd = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return Gd(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  td = function (a) {
    return null == a || !y(["Hidden", "Off"], Ed(a));
  },
  Bd = function (a) {
    return !a || a.category == qd.category;
  },
  Ed = function (a) {
    ((a = bd(a)) && "Default" != a) || (a = bd("DefaultLevelOfDetail", "Default"));
    return a;
  },
  Hd = function (a, b, c) {
    for (var d = 0, e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (c && e.ignored) || !td(e.category) || (e.type == b ? d++ : (d += Hd(e.relatedIssues, b, c)));
    return d;
  },
  Id = function (a, b) {
    b = b || "https://support.google.com/tagassistant/answer/2947093";
    for (var c, d = 0; (c = a[d]); d++)
      c.infoLink && c.infoLink.length ? ("#" == c.infoLink[0] ? (c.infoLink = b + c.infoLink) : (b = c.infoLink)) : (c.infoLink = b),
        c.relatedIssues.length && Id(c.relatedIssues, b);
  },
  Jd = function (a, b) {
    for (var c = b || qd, d = 0; (b = a[d]); d++) (b.parent = c), b.infoLink || (b.infoLink = c.infoLink);
    for (c = 0; (b = a[c]); c++) Jd(b.relatedIssues, b);
  },
  Kd = function (a, b, c) {
    a.view = b;
    if (c) {
      a = a.relatedIssues;
      for (var d = 0; (c = a[d]); d++) Kd(c, b, !0);
    }
  };
var Ld = function (a) {
    if (a.V && "function" == typeof a.V) return a.V();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (va(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return xb(a);
  },
  Md = function (a) {
    if (a.U && "function" == typeof a.U) return a.U();
    if (!a.V || "function" != typeof a.V) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (va(a) || "string" === typeof a) {
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
  Nd = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (va(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = Md(a), e = Ld(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  };
var Od = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  Pd = function (a, b) {
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
var H = function (a) {
  this.fa = this.na = this.va = "";
  this.J = null;
  this.T = this.G = "";
  this.O = this.Dc = !1;
  if (a instanceof H) {
    this.O = a.O;
    Qd(this, a.getScheme());
    var b = a.na;
    I(this);
    this.na = b;
    b = a.L();
    I(this);
    this.fa = b;
    Rd(this, a.J);
    b = a.G;
    I(this);
    this.G = b;
    Sd(this, a.C.clone());
    a = a.T;
    I(this);
    this.T = a;
  } else
    a && (b = String(a).match(Od))
      ? ((this.O = !1),
        Qd(this, b[1] || "", !0),
        (a = b[2] || ""),
        I(this),
        (this.na = Td(a)),
        (a = b[3] || ""),
        I(this),
        (this.fa = Td(a, !0)),
        Rd(this, b[4]),
        (a = b[5] || ""),
        I(this),
        (this.G = Td(a, !0)),
        Sd(this, b[6] || "", !0),
        (a = b[7] || ""),
        I(this),
        (this.T = Td(a)))
      : ((this.O = !1), (this.C = new Ud(null, this.O)));
};
H.prototype.toString = function () {
  var a = [],
    b = this.getScheme();
  b && a.push(Vd(b, Wd, !0), ":");
  var c = this.L();
  if (c || "file" == b)
    a.push("//"),
      (b = this.na) && a.push(Vd(b, Wd, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.J),
      null != c && a.push(":", String(c));
  if ((c = this.G)) this.fa && "/" != c.charAt(0) && a.push("/"), a.push(Vd(c, "/" == c.charAt(0) ? Xd : Yd, !0));
  (c = this.C.toString()) && a.push("?", c);
  (c = this.T) && a.push("#", Vd(c, Zd));
  return a.join("");
};
H.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.va;
  c ? Qd(b, a.getScheme()) : (c = !!a.na);
  if (c) {
    var d = a.na;
    I(b);
    b.na = d;
  } else c = !!a.fa;
  c ? ((d = a.L()), I(b), (b.fa = d)) : (c = null != a.J);
  d = a.G;
  if (c) Rd(b, a.J);
  else if ((c = !!a.G)) {
    if ("/" != d.charAt(0))
      if (this.fa && !this.G) d = "/" + d;
      else {
        var e = b.G.lastIndexOf("/");
        -1 != e && (d = b.G.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (B(e, "./") || B(e, "/.")) {
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
  c ? (I(b), (b.G = d)) : (c = "" !== a.C.toString());
  c ? Sd(b, a.C.clone()) : (c = !!a.T);
  c && ((a = a.T), I(b), (b.T = a));
  return b;
};
H.prototype.clone = function () {
  return new H(this);
};
H.prototype.getScheme = function () {
  return this.va;
};
var Qd = function (a, b, c) {
  I(a);
  a.va = c ? Td(b, !0) : b;
  a.va && (a.va = a.va.replace(/:$/, ""));
};
H.prototype.L = function () {
  return this.fa;
};
var Rd = function (a, b) {
    I(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.J = b;
    } else a.J = null;
  },
  Sd = function (a, b, c) {
    I(a);
    b instanceof Ud ? ((a.C = b), a.C.ib(a.O)) : (c || (b = Vd(b, $d)), (a.C = new Ud(b, a.O)));
  };
H.prototype.getQuery = function () {
  return this.C.toString();
};
H.prototype.removeParameter = function (a) {
  I(this);
  this.C.remove(a);
  return this;
};
var I = function (a) {
  if (a.Dc) throw Error("Tried to modify a read-only Uri");
};
H.prototype.ib = function (a) {
  this.O = a;
  this.C && this.C.ib(a);
};
var J = function (a) {
    return a instanceof H ? a.clone() : new H(a);
  },
  Td = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Vd = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, ae)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  ae = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  Wd = /[#\/\?@]/g,
  Yd = /[#\?:]/g,
  Xd = /[#\?]/g,
  $d = /[#\?@]/g,
  Zd = /#/g,
  Ud = function (a, b) {
    this.H = this.l = null;
    this.K = a || null;
    this.O = !!b;
  },
  K = function (a) {
    a.l ||
      ((a.l = new Map()),
      (a.H = 0),
      a.K &&
        Pd(a.K, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
n = Ud.prototype;
n.Za = function () {
  K(this);
  return this.H;
};
n.add = function (a, b) {
  K(this);
  this.K = null;
  a = be(this, a);
  var c = this.l.get(a);
  c || this.l.set(a, (c = []));
  c.push(b);
  this.H = Pa(this.H) + 1;
  return this;
};
n.remove = function (a) {
  K(this);
  a = be(this, a);
  return this.l.has(a) ? ((this.K = null), (this.H = Pa(this.H) - this.l.get(a).length), this.l.delete(a)) : !1;
};
n.clear = function () {
  this.l = this.K = null;
  this.H = 0;
};
n.Va = function (a) {
  K(this);
  a = be(this, a);
  return this.l.has(a);
};
n.forEach = function (a, b) {
  K(this);
  this.l.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
n.U = function () {
  K(this);
  for (var a = Array.from(this.l.values()), b = Array.from(this.l.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
n.V = function (a) {
  K(this);
  var b = [];
  if ("string" === typeof a) this.Va(a) && (b = b.concat(this.l.get(be(this, a))));
  else {
    a = Array.from(this.l.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
n.set = function (a, b) {
  K(this);
  this.K = null;
  a = be(this, a);
  this.Va(a) && (this.H = Pa(this.H) - this.l.get(a).length);
  this.l.set(a, [b]);
  this.H = Pa(this.H) + 1;
  return this;
};
n.get = function (a, b) {
  if (!a) return b;
  a = this.V(a);
  return 0 < a.length ? String(a[0]) : b;
};
n.toString = function () {
  if (this.K) return this.K;
  if (!this.l) return "";
  for (var a = [], b = Array.from(this.l.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.V(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.K = a.join("&"));
};
n.clone = function () {
  var a = new Ud();
  a.K = this.K;
  this.l && ((a.l = new Map(this.l)), (a.H = this.H));
  return a;
};
var be = function (a, b) {
  b = String(b);
  a.O && (b = b.toLowerCase());
  return b;
};
Ud.prototype.ib = function (a) {
  a &&
    !this.O &&
    (K(this),
    (this.K = null),
    this.l.forEach(function (b, c) {
      var d = c.toLowerCase();
      if (c != d && (this.remove(c), this.remove(d), 0 < b.length)) {
        this.K = null;
        c = this.l;
        var e = c.set;
        d = be(this, d);
        var f = b.length;
        if (0 < f) {
          for (var g = Array(f), h = 0; h < f; h++) g[h] = b[h];
          f = g;
        } else f = [];
        e.call(c, d, f);
        this.H = Pa(this.H) + b.length;
      }
    }, this));
  this.O = a;
};
Ud.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Nd(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var ce = {
    dc: ["BC", "AD"],
    cc: ["Before Christ", "Anno Domini"],
    hc: "JFMAMJJASOND".split(""),
    nc: "JFMAMJJASOND".split(""),
    ec: "January February March April May June July August September October November December".split(" "),
    mc: "January February March April May June July August September October November December".split(" "),
    jc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    pc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    tc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    rc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    lc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    qc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Gd: "SMTWTFS".split(""),
    oc: "SMTWTFS".split(""),
    kc: ["Q1", "Q2", "Q3", "Q4"],
    ic: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Zb: ["AM", "PM"],
    dd: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    Rd: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    ed: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    rb: 6,
    Vd: [5, 6],
    sb: 5
  },
  de = ce;
de = ce;
var ee = function (a, b, c, d, e) {
  a = new Date(a, b, c);
  e = e || 0;
  return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
};
var fe = function () {},
  he = function (a) {
    if ("number" == typeof a) {
      var b = new fe();
      b.Qb = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", D(c, 2));
        c = d.join("");
      }
      b.kb = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = ge(a);
      b.mb = [c, c];
      b.la = { Pd: a, tb: a };
      b.Ra = [];
      return b;
    }
    b = new fe();
    b.kb = a.id;
    b.Qb = -a.std_offset;
    b.mb = a.names;
    b.la = a.names_ext;
    b.Ra = a.transitions;
    return b;
  },
  ge = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(D(Math.floor(a / 60) % 100, 2), ":", D(a % 60, 2));
    return b.join("");
  },
  ie = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.Ra.length && b >= a.Ra[c]; ) c += 2;
    return 0 == c ? 0 : a.Ra[c - 1];
  },
  je = function (a, b) {
    a = a.Qb - ie(a, b);
    return -1440 === a ? 0 : a;
  };
var me = function () {
    x(!0, "Pattern must be defined");
    x(void 0 !== de, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.Ma = [];
    this.o = de;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (ke && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < le.length; ++c) {
        var d = a.match(le[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.Ma.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  le = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  ne = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
me.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - je(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.Ma.length; ++f) {
    var g = this.Ma[f].text;
    1 == this.Ma[f].type ? c.push(oe(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var L = function (a, b) {
    b = String(b);
    a = a.o || de;
    if (void 0 !== a.uc) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.uc + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  ke = !1,
  pe = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  qe = function (a, b) {
    pe(b);
    b = ne(b);
    return a.o.Zb[12 <= b && 24 > b ? 1 : 0];
  },
  oe = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.o.cc[c] : a.o.dc[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), L(a, D(c, g));
      case "Y":
        return (
          (c = new Date(ee(d.getFullYear(), d.getMonth(), d.getDate(), a.o.sb, a.o.rb)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          L(a, D(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.o.hc[c];
            break a;
          case 4:
            g = a.o.ec[c];
            break a;
          case 3:
            g = a.o.jc[c];
            break a;
          default:
            g = L(a, D(c + 1, g));
        }
        return g;
      case "k":
        return pe(e), L(a, D(ne(e) || 24, g));
      case "S":
        return L(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? D(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.o.tc[c] : a.o.lc[c];
      case "a":
        return qe(a, e);
      case "b":
        return qe(a, e);
      case "B":
        return qe(a, e);
      case "h":
        return pe(e), L(a, D(ne(e) % 12 || 12, g));
      case "K":
        return pe(e), L(a, D(ne(e) % 12, g));
      case "H":
        return pe(e), L(a, D(ne(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.o.oc[c];
            break a;
          case 4:
            g = a.o.rc[c];
            break a;
          case 3:
            g = a.o.qc[c];
            break a;
          default:
            g = L(a, D(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.o.nc[c];
            break a;
          case 4:
            g = a.o.mc[c];
            break a;
          case 3:
            g = a.o.pc[c];
            break a;
          default:
            g = L(a, D(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.o.kc[c] : a.o.ic[c];
      case "d":
        return L(a, D(d.getDate(), g));
      case "m":
        return pe(e), L(a, D(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return pe(e), L(a, D(e.getSeconds(), g));
      case "v":
        return (f || he(c.getTimezoneOffset())).kb;
      case "V":
        return (
          (a = f || he(c.getTimezoneOffset())),
          2 >= g
            ? a.kb
            : 0 < ie(a, c)
            ? void 0 !== a.la.bc
              ? a.la.bc
              : a.la.DST_GENERIC_LOCATION
            : void 0 !== a.la.tb
            ? a.la.tb
            : a.la.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = ee(e.getFullYear(), e.getMonth(), e.getDate(), a.o.sb, a.o.rb)),
          L(a, D(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || he(c.getTimezoneOffset())), 4 > g ? a.mb[0 < ie(a, c) ? 2 : 0] : a.mb[0 < ie(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || he(c.getTimezoneOffset())),
          4 > g
            ? ((g = -je(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(D(Math.floor(g / 60) % 100, 2), D(g % 60, 2)),
              (g = a.join("")))
            : (g = L(a, ge(je(b, c)))),
          g
        );
      default:
        return "";
    }
  };
var re = [],
  te = function () {
    var a = se;
    x(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "cb";
    if (a.cb && a.hasOwnProperty(b)) return a.cb;
    re.push(a);
    var c = new a();
    a.cb = c;
    x(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
new me();
ad("LoggingEnabled");
var ve = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, k, m, l, p) {
      if ("%" == m) return "%";
      var O = c.shift();
      if ("undefined" == typeof O) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = O;
      return ue[m].apply(null, arguments);
    });
  },
  ue = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a = -1 < b.indexOf("-", 0) ? a + uc(" ", Number(c) - a.length) : uc(" ", Number(c) - a.length) + a);
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      0 <= b.indexOf("-", 0) ? (d = f + d + uc(" ", a)) : ((b = 0 <= b.indexOf("0", 0) ? "0" : " "), (d = f + uc(b, a) + d));
      return d;
    },
    d: function (a, b, c, d, e, f, g, h) {
      return ue.f(parseInt(a, 10), b, c, d, 0, f, g, h);
    }
  };
ue.i = ue.d;
ue.u = ue.d;
function we(a) {
  var b = (new Date().getTime() - a) / 1e3;
  if (60 > b) return xe(b, "second") + " ago";
  b /= 60;
  if (60 > b) return xe(b, "minute") + " ago";
  b /= 60;
  if (24 > b) return xe(b, "hour") + " ago";
  b /= 24;
  return 365 > b ? xe(b, "day") + " ago" : new Date(a).toLocaleDateString();
}
function xe(a, b) {
  a = Math.round(a);
  return ve("%d %s%s", a, b, 1 == a ? "" : "s");
}
function ye(a, b) {
  var c = J(b);
  a = J(a);
  if (a.L() == c.L()) {
    b = c.G.split("/");
    var d = a.G.split("/");
    a = b.pop();
    var e = b.join("/") + "/",
      f = "",
      g = 0;
    for (d.pop(); -1 == e.indexOf(d.join("/") + "/"); ) d.pop(), (f += "../"), g++;
    return g == d.length ? c.G : g < b.length - 1 ? ((c = b.slice(d.length)), c.length && (f += c.join("/") + "/"), f + a) : c.G;
  }
  return b;
}
var ze = document;
var M = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.issueClass = 0;
    this.ua = g || [];
    this.ha = !1;
    this.view = this.hint = null;
    this.context = {};
  },
  Ae = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  Be = function (a, b, c, d, e, f) {
    return new M(a, b, c, void 0, d, e, f);
  },
  Ce = v(Be, "Debug", null),
  De = v(Be, "Error", null),
  Ee = v(Be, "Info", null),
  Fe = v(Be, "Suggestion", null);
Ee("Implemented in %s");
Ee("Includes %s");
M.prototype.clear = function () {
  this.context = {};
  this.ha = !1;
};
M.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.ua.length && (a.ua = Ae(this.ua));
  return a;
};
M.prototype.otherwise = function () {
  return this;
};
M.prototype.setClass = function (a) {
  this.issueClass = a;
  this.ua.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var He = function (a, b) {
    a.format = b;
    return a;
  },
  Ie = function (a, b) {
    a.hint = b;
    return a;
  },
  Je = function (a) {
    a.infoLink = "#url_encoding";
    return a;
  },
  Ke = function (a, b) {
    a.view = b;
    return a;
  };
Ce("__altered");
var Le = function (a, b, c, d, e, f, g, h) {
  M.call(this, a, b, c, d, void 0, g, h);
  this.issueClass = 1;
};
Ca(Le, M);
var Me = function (a, b, c, d, e, f) {
    return new Le(a, b, c, void 0, void 0, d, e, f);
  },
  Ne = v(Me, "Fine", null),
  Oe = v(Me, "Info", null),
  Pe = v(Me, "Suggestion", null),
  Qe = Ke(
    Pe("Tag is included in an iframe", function () {
      return self !== top;
    }),
    "Code Snippet"
  ),
  Re = [
    Ke(
      Oe(
        "IFrame",
        function () {
          return self.location.href;
        },
        "linked"
      ),
      "IFrame"
    )
  ];
Qe.ua = Re;
Pe("Tag is included in an external script file", function (a) {
  return a.externalScript;
});
Ke(
  Ne(
    "Script source",
    function (a) {
      return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
    },
    "linked"
  ),
  "Code Snippet"
);
Ke(
  Ie(
    De("No HTTP response detected"),
    "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
  ),
  ""
).infoLink = "https://support.google.com/tagassistant/answer/3059154#http_response";
var Se = function (a, b, c, d, e, f, g, h) {
  M.call(this, a, b, d, e, void 0, g, h);
  this.issueClass = 2;
};
Ca(Se, M);
var Te = function (a, b, c, d, e, f) {
    return new Se(a, b, void 0, c, void 0, d, e, f);
  },
  Ue = v(Te, "Debug", null),
  Ve = v(Te, "Error", null),
  We = v(Te, "Hidden", null),
  Xe = v(Te, "Info", null),
  Ye = v(Te, "Suggestion", null),
  Ze = Ie(
    Ve("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  );
Ke(
  Ie(
    Fe("Non-standard implementation"),
    "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
  ),
  ""
);
var $e = Ie(
    Ve(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  bf = Ie(
    Ye("Using non-secure code on secure page", function (a) {
      var b = af(a);
      var c = a.documentUri;
      c || ((c = J(a.documentUrl)), (a.documentUri = c));
      return "http" == b.getScheme() && "https" == c.getScheme() ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  cf = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !Ua(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  };
(function (a, b) {
  return Ke(
    Xe(
      "URL",
      function (c) {
        try {
          var d = af(c).C.U();
          if ((a && !cf(d, a)) || (b && cf(d, b))) return !1;
        } catch (e) {}
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url;
      },
      "link_expandable",
      [
        He(
          Xe("Post Data", function (c) {
            return c.postData;
          }),
          "value"
        ),
        bf,
        Je(
          Ie(
            De("URL Encoding Error", function (c) {
              return B(c.label, "&amp;");
            }),
            'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
          )
        ),
        $e,
        Ze,
        Ve("Error while sending request: %s", function (c) {
          return void 0 !== c.error ? c.error : !1;
        }),
        We("Redirected to", function (c) {
          return c.redirectUrl;
        }),
        We("redirectedFrom", function (c) {
          return c.redirectedFrom;
        }),
        Ue("requestId", function (c) {
          return c.requestId;
        }),
        Ve("URL is not parsable.", function (c) {
          if (0 < c.url.indexOf("tiba=")) return !1;
          try {
            return !J(c.url).C.U();
          } catch (d) {
            return !0;
          }
        })
      ]
    ),
    "URLs"
  );
})();
var af = function (a) {
  var b = a.uri;
  if (!b) {
    b = J(encodeURI(a.url));
    if (a.postData)
      try {
        Sd(b, a.postData, !0);
      } catch (c) {}
    a.uri = b;
  }
  return b;
};
var se = function () {
    this.Wb = [];
    this.qb = {};
  },
  df =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  ef = {
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
  jf = He(
    Ee("Script", function (a) {
      if (null == this.ha) this.ha = 0;
      else if ((this.ha++, this.ha == ze.scripts.length)) return (this.ha = null), !1;
      var b = ze.scripts[this.ha];
      this.infoLink = b.src;
      if ((a = void 0 !== b.src && "" != b.src && !xd(a.relatedIssues, b.src))) {
        a = te();
        b = b.src;
        var c;
        (c = ff(b)) || ((c = J(b)), (c = !!ef[c.L()]));
        a = !(c || gf(b) || hf(a, b));
      }
      return a;
    }),
    "link_expandable_with_path"
  ),
  kf = [
    Fe("Found <script> tag with empty src attribute.", function (a) {
      return a.label == ze.location.href;
    })
  ];
jf.ua = kf;
var lf = function (a) {
    var b = te();
    if (!(a in b.qb)) {
      var c = Ua(b.Wb, function (d) {
        return d.ce() == a;
      });
      b.qb[a] = c ? c.Zd() : {};
    }
    return b.qb[a];
  },
  ff = function (a) {
    return df.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  gf = function (a) {
    return !(
      !G("ManualScriptParsing") ||
      !(G("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  hf = function (a, b) {
    return a.Wb.some(function (c) {
      return c.wc && c.isActive()
        ? c.wc.some(function (d) {
            d = new RegExp(d);
            d = b ? d.test.call(d, b) : void 0;
            return d;
          })
        : !1;
    });
  };
function mf() {
  return Xb ? !!dc && !!dc.platform : !1;
}
function nf() {
  return C("iPhone") && !C("iPod") && !C("iPad");
}
function of() {
  nf() || C("iPad") || C("iPod");
}
hc();
gc() || C("Trident") || C("MSIE");
C("Edge");
!C("Gecko") || (B(cc().toLowerCase(), "webkit") && !C("Edge")) || C("Trident") || C("MSIE") || C("Edge");
B(cc().toLowerCase(), "webkit") && !C("Edge") && C("Mobile");
mf() || C("Macintosh");
mf() || C("Windows");
(mf() ? "Linux" === dc.platform : C("Linux")) || mf() || C("CrOS");
var pf = t.navigator || null;
pf && B(pf.appVersion || "", "X11");
mf() || C("Android");
nf();
C("iPad");
C("iPod");
of();
B(cc().toLowerCase(), "kaios");
var qf = function () {
    var a = document;
    var b = "SCRIPT";
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  },
  sf = function (a) {
    return rf(a, function (b) {
      return "string" === typeof b.className && y(b.className.split(/\s+/), "ta-toggle-button");
    });
  },
  rf = function (a, b) {
    for (var c = 0; a; ) {
      x("parentNode" != a.name);
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
var tf = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var uf = {};
var vf = function () {},
  wf = function (a, b) {
    if (b !== uf) throw Error("Bad secret");
    this.Mc = a;
  };
ra(wf, vf);
wf.prototype.toString = function () {
  return this.Mc;
};
var xf = fa([""]),
  yf = ha(["\x00"], ["\\0"]),
  zf = ha(["\n"], ["\\n"]),
  Af = ha(["\x00"], ["\\u0000"]),
  Bf = fa([""]),
  Cf = ha(["\x00"], ["\\0"]),
  Df = ha(["\n"], ["\\n"]),
  Ef = ha(["\x00"], ["\\u0000"]);
function Ff(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!Gf && a === a.raw) ||
    !((Gf && !Hf) || If(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function If(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function Jf(a) {
  return -1 === a.toString().indexOf("`");
}
var Gf =
    Jf(function (a) {
      return a(xf);
    }) ||
    Jf(function (a) {
      return a(yf);
    }) ||
    Jf(function (a) {
      return a(zf);
    }) ||
    Jf(function (a) {
      return a(Af);
    }),
  Hf = If(Bf) && If(Cf) && If(Df) && If(Ef);
var Kf = [],
  Lf = function (a) {
    var b = Gc(Hc(), "safevalues").Fc;
    if (b) {
      var c = "A URL with content '" + a + "' was sanitized away.",
        d = xc;
      if ((a = b))
        if ((a = b && d)) {
          a = d.value;
          var e = b ? Dc(Gc(Hc(), b.ab())) : wc;
          a = a >= e.value;
        }
      if (a) {
        d = d || wc;
        a = Gc(Hc(), b.ab());
        "function" === typeof c && (c = c());
        Ac || (Ac = new zc());
        e = Ac;
        b = b.ab();
        if (0 < e.Ha) {
          var f = (e.ub + 1) % e.Ha;
          e.ub = f;
          e.Ab ? ((e = e.S[f]), e.reset(d, c, b), (b = e)) : ((e.Ab = f == e.Ha - 1), (b = e.S[f] = new Bc(d, c, b)));
        } else b = new Bc(d, c, b);
        a.publish(b);
      }
    }
  };
-1 === Kf.indexOf(Lf) && Kf.push(Lf);
function Mf(a) {
  var b = sa.apply(1, arguments);
  Ff(a, b.length);
  if (0 === b.length) return Nb(a[0]);
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
  return Nb(c);
}
ic();
nf() || C("iPod");
C("iPad");
!C("Android") || jc() || ic() || hc() || C("Silk");
jc();
!C("Safari") ||
  jc() ||
  (gc() ? 0 : C("Coast")) ||
  hc() ||
  (gc() ? 0 : C("Edge")) ||
  (gc() ? fc("Microsoft Edge") : C("Edg/")) ||
  (gc() ? fc("Opera") : C("OPR")) ||
  ic() ||
  C("Silk") ||
  C("Android") ||
  of();
x(!0);
var Nf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
x(
  10 ===
    Math.log2(
      Math.max.apply(Math, ka(Object.values({ wd: 1, ud: 2, sd: 4, Jd: 8, Id: 16, Fd: 32, cd: 64, Sd: 128, pd: 256, od: 512, vd: 1024 })))
    )
);
var Of = Object.getOwnPropertyDescriptor(Array.prototype, "Ec");
Object.defineProperties(Array.prototype, {
  Ec: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = Pf(this),
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
      var d = Qf(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return Of ? Of.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var Pf = Nf
  ? function (a) {
      Ra(a, "state is only maintained on arrays.");
      return a[Nf] | 0;
    }
  : function (a) {
      Ra(a, "state is only maintained on arrays.");
      return a.ae | 0;
    };
function Qf(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var Rf = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var Sf = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    Tf = {};
  Object.defineProperties(Rf, ((Tf[Symbol.hasInstance] = { value: Sf, configurable: !1, writable: !1, enumerable: !1 }), Tf));
  x(Rf[Symbol.hasInstance] === Sf, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var N = Uf;
  new Proxy(
    {},
    {
      getPrototypeOf: N,
      setPrototypeOf: N,
      isExtensible: N,
      preventExtensions: N,
      getOwnPropertyDescriptor: N,
      defineProperty: N,
      has: N,
      get: N,
      set: N,
      deleteProperty: N,
      apply: N,
      construct: N
    }
  );
}
function Uf() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function Vf() {}
(function () {
  var a = t.jspbGetTypeName;
  t.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : Vf;
})(); /*
 SPDX-License-Identifier: Apache-2.0 */
var Wf = Object.prototype.hasOwnProperty;
function Xf() {}
Xf.prototype = Object.create(null);
function Yf(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (Wf.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function Zf(a, b, c) {
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
function $f() {
  var a = new Xf();
  a.__default = Zf;
  a.style = Yf;
  return a;
}
$f();
var ag = $f();
function bg(a, b) {
  a.src = Mb(b);
  var c, d;
  (c = (b =
    null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
      ? void 0
      : d.call(c, "script[nonce]"))
    ? b.nonce || b.getAttribute("nonce") || ""
    : "") && a.setAttribute("nonce", c);
}
var cg = fa(["data-soyloggingfunction-"]);
(function (a) {
  Ff(a, 0);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  tf.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  return new wf(b, uf);
})(cg);
Gc(Hc(), "api_idom");
ag.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
ag.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
ag.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var dg = function (a, b) {
    this.text = a;
    this.type = b;
  },
  eg = function (a, b) {
    this.spans = a;
    this.type = b;
  },
  fg =
    "break case catch continue debugger default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with false null undefined true abstract boolean byte char const double final float goto int long native short synchronized throws transient volatile class enum export extends import super implements interface let package private protected public static yield".split(
      " "
    ),
  ig = {
    type: "html-tag",
    open: /^<\/?([-_a-zA-Z0-9]+)/,
    close: /^(\/?)>/,
    Eb: function (a, b) {
      a.Wa = b[1].toUpperCase();
      return !0;
    },
    Ua: function (a, b) {
      "" == b[1] &&
        ("SCRIPT" == a.Wa
          ? ((a.Y = "js-code"), (a.qa = null), (a.Ca = gg))
          : "STYLE" == a.Wa && ((a.Y = "css-code"), (a.qa = null), (a.Ca = hg)));
      return !0;
    }
  },
  jg = [
    { type: "html-comment", open: "\x3c!--", close: "--\x3e" },
    { type: "html-cdata", open: "<![CDATA[", close: "]]\x3e" },
    { type: "html-doctype", open: "<!", close: ">" },
    ig,
    { type: "html-attribute-url", open: /^"(https?|\/\/)/, close: '"', escape: "\\", W: ig },
    { type: "html-attribute-url", open: /^'(https?|\/\/)/, close: "'", escape: "\\", W: ig },
    { type: "html-attribute-value", open: '"', close: '"', escape: "\\", W: ig },
    { type: "html-attribute-value", open: "'", close: "'", escape: "\\", W: ig },
    { type: "html-attribute-name", open: /(^[-_a-zA-Z0-9]+)/, close: "=", W: ig }
  ],
  gg = [
    { type: "js-comment", open: "//", oa: !0 },
    { type: "js-comment", open: "/*", close: "*/" },
    { type: "js-string", open: '"', close: '"', escape: "\\", oa: !0 },
    { type: "js-regex", open: "/", close: "/", escape: "\\", oa: !0 },
    { open: /^\.[a-zA-Z_][a-zA-Z_0-9]*/, ba: !0 },
    {
      type: "js-keyword",
      open: /^[a-zA-Z_][a-zA-Z_0-9]*/,
      Eb: function (a, b) {
        return 0 <= fg.indexOf(b[0]);
      },
      ba: !0
    },
    { open: /^[a-zA-Z_][a-zA-Z_0-9.]*/, ba: !0 },
    { type: "js-number", open: /^[+-]?[0-9.]+/, ba: !0 },
    { type: "js-string", open: "'", close: "'", escape: "\\", oa: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/script/,
      close: />/,
      Ua: function (a) {
        a.Y = null;
        a.qa = null;
        a.Ca = jg;
        return !0;
      }
    }
  ],
  kg = { open: "{", close: "}" },
  lg = { open: ":", close: ";", W: kg },
  hg = [
    { type: "css-comment", open: "\x3c!--", close: ">" },
    { type: "css-comment", open: "/*", close: "*/" },
    { type: "css-string", open: '"', close: '"', escape: "\\", oa: !0 },
    { type: "css-number", open: /^[+-]?[0-9.]+[a-zA-Z]*/, ba: !0, W: lg },
    { type: "css-color", open: /^#[0-9a-zA-Z]{3}[0-9a-zA-Z]{0,3}/, ba: !0, W: lg },
    kg,
    lg,
    { type: "css-name", open: /^[-.#_a-zA-Z0-9]+/, ba: !0, W: kg },
    { type: "css-attribute-value", open: /^[-a-zA-Z_0-9]+/, ba: !0, W: lg },
    { type: "css-string", open: "'", close: "'", escape: "\\", oa: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/style/,
      close: />/,
      Ua: function (a) {
        a.Ca = jg;
        a.Y = null;
        a.qa = null;
        return !0;
      }
    }
  ],
  og = function (a, b) {
    var c = { Ca: b ? gg : jg, Wa: null, qa: null, Y: b ? "js-code" : null },
      d = [],
      e = [null],
      f = [null],
      g = void 0;
    b || (a = sc(a));
    a.split("\n").forEach(function (h) {
      var k = [],
        m = 0;
      c.qa = c.Y;
      for (var l = 0, p = h.length; l < p; l += O ? 0 : 1) {
        var O = !1;
        if (!g || g.escape != h.charAt(l)) {
          if (g) {
            var Pb = g.close ? mg(c, g.close, h, l, g.Ua) : 0;
            Pb &&
              ((l += Pb),
              (m = h.substring(m, l)),
              k.push(new dg(m, g.type || c.Y)),
              (m = l),
              e.pop(),
              f.pop(),
              (g = f[f.length - 1]),
              (O = !0));
          }
          for (var Ge = 0, S; !O && (S = c.Ca[Ge]); Ge++)
            S.W == g &&
              (Pb = mg(c, S.open, h, l, S.Eb)) &&
              (l > m && S.type != e[e.length - 1] && (k.push(new dg(h.substring(m, l), e[e.length - 1] || c.Y)), (m = l)),
              (l += Pb),
              S.ba ? (k.push(new dg(h.substring(m, l), S.type || c.Y)), (m = l)) : (e.push(S.type), f.push(S), (g = S)),
              (O = !0));
        }
      }
      m < p && k.push(new dg(h.substring(m, p), e[e.length - 1] || c.Y));
      d.push(new eg(k, c.qa));
      g && g.oa && (e.pop(), f.pop(), (g = f[f.length - 1]));
    });
    return d;
  },
  mg = function (a, b, c, d, e) {
    var f;
    if (b instanceof RegExp) {
      if ((f = b.exec(c.substring(d))) && (!e || e(a, f))) return f[0].length;
    } else if (c.substring(d, d + b.length) == b) return b.length;
    return 0;
  };
var pg = /\$\{[-_ a-zA-Z0-9]*\}/g,
  qg = {
    "not-working": "Critical Issues",
    "working-with-warnings": "Minor Issues",
    "working-with-suggestions": "Suggestions",
    working: "Working"
  },
  rg = function (a) {
    return { label: a, value: qg[a] || "Details" };
  };
xb({ hd: "not-working", Qd: "working-with-suggestions", Ud: "working-with-warnings", Xd: "working" }).map(rg);
var sg = function (a) {
    for (var b = 0, c; (c = a[b]); b++) {
      var d = c.relatedIssues.length + "";
      c.label = c.label.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace(pg, "");
      c.relatedIssues && sg(c.relatedIssues);
    }
  },
  tg = function (a) {
    for (var b = 0, c; (c = a[b]); b++) (c.buckets = vd(c.relatedIssues)), tg(c.relatedIssues);
  },
  vg = function (a, b) {
    for (var c = 0, d; (d = b[c]); c++) (d.value = ug(a, d)), (d.status = rg(d.value + "")), d.relatedIssues && vg(a, d.relatedIssues);
  },
  ug = function (a, b) {
    "Tag" == b.type && 0 == b.text.indexOf(b.category) && (b.tagId = b.text.substring(b.category.length + 1));
    if ("Tag" == b.type || "group_status" == b.valueFormat || "value_status" == b.valueFormat) {
      var c = !ad("ShowIgnoredIssues");
      return "unchecked" == b.valueFormat ? "unchecked" : wg(b.relatedIssues, c);
    }
    if ("update_button" == b.valueFormat || "elapsed_time" == b.valueFormat) {
      if ("" != b.label && !/[^0-9]/.test(b.label))
        try {
          return "Last checked " + we(parseInt(b.label, 10));
        } catch (h) {}
    } else if ("string" === typeof b.label) {
      if ("collection" == b.valueFormat) {
        var d = [];
        b.relatedIssues.forEach(function (h) {
          "entry" == h.valueFormat && d.push({ key: h.text, value: h.label });
        });
        return d;
      }
      if ("link_expandable_with_path" == b.valueFormat) return b.label.split("/").pop();
      if ("link_expandable" == b.valueFormat)
        try {
          var e = J(b.label);
          a = [];
          var f = [];
          e.L() && a.push({ key: "Hostname", value: e.L() });
          e.getScheme() && a.push({ key: "Protocol", value: e.getScheme() });
          a.push({ key: "Path", value: e.G });
          e.T && a.push({ key: "Hash", value: e.T });
          var g = (c = Cd(b).category) ? lf(c) : {};
          b.hasUrlParamLookupTable = !!Object.keys(g).length;
          e.C.U().forEach(function (h) {
            var k = "";
            try {
              k = g[h].description || "";
            } catch (m) {}
            f.push({ key: h, value: e.C.get(h), description: k });
          });
          return { de: a, ee: f };
        } catch (h) {
          console.error("Cannot parse URL for issue: %o", b, h);
        }
      else {
        if ("snippet_html" == b.valueFormat) return og(b.label, !1);
        if ("snippet_js" == b.valueFormat) return og(b.label, !0);
        if ("map" == b.valueFormat)
          return (Lc(b.label, [";"]) || []).map(function (h) {
            var k = h.split("=");
            h = k.shift();
            k = k.join("=");
            try {
              var m = decodeURIComponent(k);
            } catch (l) {
              m = k;
            }
            return { key: h, value: m };
          });
        if ("esc_json" == b.valueFormat) return Mc(unescape(b.label));
        if ("json" == b.valueFormat) return og(Oc(b.label), !0);
        if ("link" == b.valueFormat) return ye(a, b.label);
      }
    }
    return b.label;
  },
  wg = function (a, b) {
    return Gd(a, "Error", !!b)
      ? "not-working"
      : Gd(a, "Warning", !!b)
      ? "working-with-warnings"
      : Gd(a, "Suggestion", !!b)
      ? "working-with-suggestions"
      : "working";
  },
  xg = function (a, b) {
    tg(b);
    sg(b);
    vg(a, b);
  };
var yg = function (a) {
  this.url = a.page.url;
  this.title = a.page.title;
  this.timings = a.page.onLoad;
  this.timestamp = a.page.timestamp;
  this.ka = a;
  angular.copy(a);
  this.ca = a.issues;
  this.La = this.fb = null;
  this.pa = {};
  this.ignored = !1;
  this.redirects = [];
  this.lastUpdated = a.lastUpdated;
  var b = this.url;
  for (a = 0; this.ka.redirects[b]; ) {
    b = this.ka.redirects[b];
    var c = parseFloat(b.timeStamp);
    if (a && a < c) break;
    else this.redirects.push(b.redirectedFrom), (b = b.redirectedFrom), (a = c);
  }
};
yg.prototype.L = function () {
  var a = "";
  try {
    a = new H(this.ka.page.url).L();
  } catch (b) {
    console.log("Error while parsing URL: %s", this.ka.page.url);
  }
  return a;
};
yg.prototype.getScheme = function () {
  var a = "";
  try {
    a = new H(this.ka.page.url).getScheme();
  } catch (b) {
    console.log("Error while parsing URL: %s", this.ka.page.url);
  }
  return a;
};
var zg = function (a) {
    Jd(a.ca || []);
    a.ca.forEach(function (b) {
      Kd(b, b.view || "Metadata");
    });
    Wa(a.ca, function (b, c) {
      return b.valueFormat.localeCompare(c.valueFormat) || b.category.localeCompare(c.category) || b.text.localeCompare(c.text);
    });
    zd(a.L(), a.ca);
    xg(a.ka.page.url, a.ca);
    Id(a.ca);
  },
  Ag = function (a) {
    a.fb || (a.fb = ud(a.ca, "Tag"));
    return a.fb;
  },
  Bg = function (a) {
    a.La ||
      ((a.La = []),
      od.forEach(function (b) {
        Va(this.La, ud(this.ca, b) || []);
      }, a));
    return a.La;
  },
  Dg = function (a, b, c, d) {
    var e = b.id || "";
    a.pa[e] || ((a.pa[e] = {}), Cg(a, b, b.relatedIssues));
    var f = [];
    c.forEach(function (g) {
      Va(f, this.pa[e][g] || []);
    }, a);
    d &&
      (f = f.filter(function (g) {
        return g.view == d;
      }));
    return f;
  },
  Cg = function (a, b, c) {
    if (b.id && c.length) {
      var d = b.id;
      c.forEach(function (e) {
        "Bucket" != e.type &&
          "Group" != e.type &&
          (this.pa[d][e.type] || (this.pa[d][e.type] = []),
          e.deleted ||
            e.deduped ||
            "Hidden" == e.type ||
            "entry" == e.valueFormat ||
            "option" == e.valueFormat ||
            this.pa[d][e.type].push(e),
          Cg(this, b, e.relatedIssues));
      }, a);
    }
  };
yg.prototype.Cc = function (a) {
  return y((a.parent ? Bd(a.parent) : 1) ? od : pd, a.type);
};
yg.prototype.isOptimizeMessage = yg.prototype.Cc;
yg.prototype.getScheme = yg.prototype.getScheme;
var Eg = {},
  Fg =
    ((Eg["popup.issues"] = {
      message: "PopupStatus",
      data: null,
      Ob: function (a, b, c) {
        if (!b || b.lastUpdated < a.lastUpdated) return (a = new yg(a)), zg(a), a;
        c && zg(b);
        return b;
      }
    }),
    (Eg["popup.show-stats"] = {
      message: "GetRecodingStats",
      data: null,
      Ob: function (a, b) {
        return b && angular.equals(a, b) ? b : a;
      }
    }),
    Eg),
  Hg = function (a, b, c, d) {
    var e = this;
    this.Fa = a;
    this.Sa = b;
    this.N = c;
    this.Hb = d;
    Gg(this);
    this.Fa.$on("refreshRequired", function () {
      e.bb(!1).then(function (f) {
        return e.hb(f, !0, !0);
      });
    });
  },
  Gg = function (a) {
    Ha(
      Ga(Fa(a.Hb.setInterval(2e3), a.bb.bind(a)), function (b) {
        a.hb(b, !0);
      }),
      function () {
        return !a.Sa.includes(a.Ea);
      }
    );
  };
Hg.prototype.bb = function (a) {
  return this.N.postMessage(Fg[this.Ea].message, null, void 0 !== a ? a : !0);
};
Hg.prototype.hb = function (a, b, c) {
  var d = Fg[this.Ea].Ob,
    e = Fg[this.Ea].data;
  a = d(a, e, c);
  if (a != e || c) this.Fa.$broadcast("dataRefreshed"), b && this.Sa.reload(this.Sa.current);
  return (Fg[this.Ea].data = a);
};
var Ig = function (a, b) {
  a.Ea = b;
  b = a.bb(!1).then(a.hb.bind(a));
  a = a.Hb;
  a.ra && (a.eb.cancel(a.ra), (a.ra = null));
  a.ra = a.eb(a.Nc.bind(a), a.Ib, 0, !1);
  return b;
};
Hg.prototype.Oc = function (a, b) {
  this.N.postMessage("Action", Dd(b) + ":" + b.text, !0);
};
Hg.prototype.Pc = function (a, b) {
  a = {};
  b = ((a.name = Dd(b) + ":" + b.text), (a.value = b.value), a);
  this.N.postMessage("Set", b, !0);
};
var Jg = ["$rootScope", "$state", "tvt.service.Background", "tvt.service.Poller", Hg];
var Kg = function (a, b, c, d) {
    this.F = a;
    this.sa = b;
    this.aa = c;
    this.N = d;
    this.Bb = this.ja = !1;
    this.da = ad("ShowIgnoredIssues");
    this.ea = !1;
    this.Pa = "disabled";
    this.Oa = -1;
    this.zb = 0;
    this.R = "Disabled";
    this.Ia = null;
    this.vb = !1;
    this.F.$on("$stateChangeSuccess", this.Jc.bind(this));
  },
  Lg = function (a, b) {
    var c = purl(b);
    a.ja = nd(c.attr("host"));
    a.Bb = ld(b);
    a.ea = !ad("ManualChecks");
    return a.N.postMessage("PopupConfig").then(function (d) {
      a.Pa = d.RecordingState;
      a.Oa = d.RecordingEnabledTab;
      a.zb = d.RecordedPageCount;
      a.R = d.State;
      a.Ia = d.LastViewState;
      a.vb = d.GADebugModeExternal;
    });
  };
Kg.prototype.Jc = function (a, b, c, d, e) {
  var f = this;
  this.Ia = { name: d.name, params: e };
  switch (b.name) {
    case "popup.enabled":
      this.N.postMessage("TurnOn", null, !0).then(function (g) {
        return (f.R = g);
      });
      break;
    case "popup.disabled":
      this.N.postMessage("TurnOff", null, !0).then(function (g) {
        return (f.R = g);
      });
      break;
    case "popup.begin-record":
      "disabled" == Mg(this) &&
        ((a = this.sa.when(this.R)),
        "Disabled" == this.R && (a = this.N.postMessage("TurnOn", null, !0)),
        a
          .then(function (g) {
            f.R = g;
            return f.N.postMessage(c.resume ? "ResumeRecordingIssues" : "StartRecordingIssues", null, !0);
          })
          .then(function (g) {
            f.Pa = g;
            f.Oa = f.F.tabId;
          }));
  }
};
Kg.prototype.goToLastPopupViewState = function () {
  var a = this,
    b = this.Ia || {},
    c = void 0 === b.name ? null : b.name;
  b = void 0 === b.params ? {} : b.params;
  var d = Ka[this.R];
  return c && c.startsWith("popup.issues")
    ? this.aa.go(c, b).catch(function () {
        return a.aa.go(d);
      })
    : this.aa.go(d);
};
var Mg = function (a, b) {
    return !b || Ng(a) ? a.Pa : "disabled";
  },
  Ng = function (a) {
    return a.F.tabId == a.Oa;
  };
n = Kg.prototype;
n.Sc = function () {
  chrome.tabs.update(this.Oa, { active: !0 });
};
n.yb = function () {
  return this.da;
};
n.Uc = function () {
  this.da = !this.da;
  Zc("ShowIgnoredIssues", this.da);
  this.F.$broadcast("refreshRequired");
};
n.stopRecording = function () {
  var a = this;
  this.N.postMessage("StopRecordingIssues", null, !0).then(function (b) {
    return (a.Pa = b);
  });
};
n.isFavoriteDomain = function () {
  return this.ja;
};
n.isUrlRestricted = function () {
  return this.Bb;
};
n.toggleFavoriteDomain = function () {
  var a = this;
  this.N.postMessage(this.ja ? "RemoveFromWhitelist" : "WhiteListDomain")
    .then(function () {
      Og(a, function () {
        return (a.ja = !a.ja);
      }) && a.aa.go(a.ja ? "popup.favorite" : "popup.remove-favorite");
    })
    .catch(function (b) {
      console.log("Error while updating favorite status: %o", b);
    });
};
var Pg = function (a) {
  return a.ja || "Capturing" == a.R || a.ea;
};
Kg.prototype.isAutoValidationOn = function () {
  return this.ea;
};
Kg.prototype.toggleAutoValidation = function () {
  var a = this;
  Og(this, function () {
    return (a.ea = !a.ea);
  }) && this.aa.go(this.ea ? "popup.autovalidate" : "popup.disabled");
  Zc("ManualChecks", !this.ea);
};
var Og = function (a, b) {
  var c = Pg(a);
  b();
  return c != Pg(a);
};
Kg.prototype.requestDomRecheck = function () {
  this.N.postMessage("DomReload", null, !0);
  this.F.$broadcast("resyncRequired");
};
var Qg = ["$rootScope", "$q", "$state", "tvt.service.Background", Kg];
var P = function (a, b, c) {
  this.Z = a;
  this.aa = b;
  this.j = c;
};
n = P.prototype;
n.stopRecording = function (a) {
  this.j.stopRecording();
  this.Z.trackEvent("activation", a);
};
n.showEnable = function () {
  return !this.j.isFavoriteDomain() && !this.j.isAutoValidationOn() && "Disabled" == this.j.R;
};
n.showDisable = function () {
  return !this.j.isFavoriteDomain() && !this.j.isAutoValidationOn() && "Disabled" != this.j.R;
};
n.showRecord = function () {
  return "disabled" == Mg(this.j, !0);
};
n.showCancelRecording = function () {
  return "enabled" == Mg(this.j, !0);
};
n.showStopRecording = function () {
  return "recording" == Mg(this.j, !0);
};
n.showViewRecording = function () {
  return this.aa.is("popup.show-stats") ? !1 : "disabled" != Mg(this.j, !0) || !!this.j.zb;
};
n.cancelRecording = function () {
  this.j.stopRecording();
  this.j.goToLastPopupViewState();
};
P.prototype.cancelRecording = P.prototype.cancelRecording;
P.prototype.showViewRecording = P.prototype.showViewRecording;
P.prototype.showStopRecording = P.prototype.showStopRecording;
P.prototype.showCancelRecording = P.prototype.showCancelRecording;
P.prototype.showRecord = P.prototype.showRecord;
P.prototype.showDisable = P.prototype.showDisable;
P.prototype.showEnable = P.prototype.showEnable;
P.prototype.stopRecording = P.prototype.stopRecording;
var Rg = ["$scope", "$state", "tvt.service.State", P];
var Q = function (a, b, c) {
  this.F = a;
  this.pb = b;
  this.j = c;
  this.wb = G("gaDebug") || "off";
  this.Ub = !1;
  this.isUrlRestricted = this.j.isUrlRestricted.bind(this.j);
  this.isFavoriteDomain = this.j.isFavoriteDomain.bind(this.j);
  this.isAutoValidationOn = this.j.isAutoValidationOn.bind(this.j);
  this.showIgnoredIssues = this.j.yb.bind(this.j);
  this.toggleShowIssueIgnored = this.j.Uc.bind(this.j);
  this.navigateToFullScreen = v(this.Ka, b.location.href + "?fullscreen=true");
  this.navigateToCommunityLink = v(this.Ka, "https://plus.google.com/u/1/communities/105448214237192581344");
  this.navigateToFileTicket = v(this.Ka, "");
  this.navigateToHelpUrl = v(this.Ka, "https://support.google.com/tagassistant");
};
n = Q.prototype;
n.getGaDebugState = function () {
  return this.j.vb ? "ext" : this.wb;
};
n.changeGaDebugState = function (a) {
  this.wb = a;
  Zc("gaDebug", a);
};
n.Ka = function (a) {
  var b = {};
  b =
    ((b["https://plus.google.com/u/1/communities/105448214237192581344"] = "community-link-clicked"),
    (b[""] = "ticket-link-clicked"),
    (b["https://support.google.com/tagassistant"] = "help-link-clicked"),
    b);
  this.F.trackEvent("options", b[a]);
  this.pb.open(a, "_blank");
};
n.toggleFavoriteDomain = function () {
  var a = this.j.isFavoriteDomain();
  this.F.trackEvent("activation", a ? "favorite-domain-removed" : "favorite-domain-added");
  this.j.toggleFavoriteDomain();
};
n.toggleAutoValidation = function () {
  var a = this.j.isAutoValidationOn();
  this.F.trackEvent("activation", a ? "auto-validation-disabled" : "auto-validation-enabled");
  this.j.toggleAutoValidation();
};
n.goToOptions = function () {
  var a = chrome.extension.getURL("options.html");
  chrome.tabs.query({ url: a }, function (b) {
    b.length ? chrome.tabs.update(b[0].id, { active: !0 }) : chrome.tabs.create({ url: a });
  });
};
n.disableRecheckDomButton = function () {
  return !Pg(this.j) || this.Ub;
};
n.requestDomRecheck = function () {
  this.j.requestDomRecheck();
  this.Ub = !0;
};
Q.prototype.requestDomRecheck = Q.prototype.requestDomRecheck;
Q.prototype.disableRecheckDomButton = Q.prototype.disableRecheckDomButton;
Q.prototype.goToOptions = Q.prototype.goToOptions;
Q.prototype.toggleAutoValidation = Q.prototype.toggleAutoValidation;
Q.prototype.toggleFavoriteDomain = Q.prototype.toggleFavoriteDomain;
Q.prototype.changeGaDebugState = Q.prototype.changeGaDebugState;
Q.prototype.getGaDebugState = Q.prototype.getGaDebugState;
var Sg = ["$rootScope", "$window", "tvt.service.State", Q],
  Tg = function () {
    return { controller: Sg, controllerAs: "headerCtrl", scope: !1, templateUrl: "/header/header.ng", bindToController: !0 };
  };
Tg.Ta = "taHeader";
var Ug = angular.module("tvt.module.header", ["ngMaterial"]);
Ug.directive(Tg.Ta, Tg);
Ug.service("tvt.service.Background", sb);
Ug.service("tvt.service.Data", Jg);
Ug.service("tvt.service.State", Qg);
var Vg = {
  communities: "/images/communities.svg",
  "debug-auto": "/images/ic_debug_auto.svg",
  "debug-ext": "/images/ic_debug_ext.svg",
  "debug-off": "/images/ic_debug_off.svg",
  "debug-on": "/images/ic_debug.svg",
  email: "/images/email.svg",
  fullscreen: "/images/ic_fullscreen.svg",
  filter: "/images/ic_filter.svg",
  google: "/images/google_icon_dark.svg",
  "more-options": "/images/icon_more_vert.svg",
  pause: "/images/ic_pause_circle_outline_black_24dp.svg",
  play: "/images/ic_play_circle_outline_black_24dp.svg",
  settings: "/images/settings.svg",
  star: "/images/ic_star.svg"
};
Ug.config([
  "$mdIconProvider",
  function (a) {
    wb(Vg, function (b, c) {
      a.icon(c, b);
    });
  }
]);
var Wg = ["management"],
  Xg = function (a) {
    this.sa = a;
  },
  Yg = function (a) {
    var b = a.sa.defer();
    chrome.permissions.contains({ permissions: Wg }, function (c) {
      return b.resolve(c);
    });
    return b.promise;
  };
Xg.prototype.requestAdditionalPermissions = function () {
  var a = this.sa.defer();
  chrome.permissions.request({ permissions: Wg }, function (b) {
    return a.resolve(b);
  });
  return a.promise;
};
var Zg = ["$q", Xg];
var $g = function (a, b) {
  this.Ja = a;
  this.Kc = b;
};
$g.prototype.requestAdditionalPermissions = function () {
  var a = this;
  this.Kc.requestAdditionalPermissions().then(function (b) {
    b || Zc("CheckPermissionsLater", !1);
    a.Ja.hide();
  });
};
$g.prototype.checkLater = function () {
  Zc("CheckPermissionsLater", !0);
  this.Ja.hide();
};
$g.prototype.checkLater = $g.prototype.checkLater;
$g.prototype.requestAdditionalPermissions = $g.prototype.requestAdditionalPermissions;
var ah = ["$mdToast", "tvt.service.Permissions", $g];
angular
  .module("tvt.images", [])
  .value("forceCachedTemplates", !1)
  .value("forceUncachedTemplates", !1)
  .factory("html2JsTemplatesCached", [
    "forceCachedTemplates",
    "forceUncachedTemplates",
    function (a, b) {
      return function () {
        return !b && !0;
      };
    }
  ])
  .run([
    "$templateCache",
    "html2JsTemplatesCached",
    function (a, b) {
      b() &&
        (a.put(
          "/images/add_circle_outline.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
        ),
        a.put(
          "/images/back.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [ ]>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" overflow="visible" enable-background="new 0 0 21 21" xml:space="preserve"><polygon points="8,9 8,5 3,10 8,15 8,11 15,11 15,14 17,14 17,9 "/><rect opacity="0" fill="#4387FD" width="21" height="21"/></svg>\n'
        ),
        a.put(
          "/images/communities.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"\n height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_searchinput_x5F_sm_x5F_flat" viewBox="0 -24 24 24">\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.827-16.184c1.053-1.301,2.587-2.192,4.332-2.413 c-0.039,1.347-1.136,2.43-2.493,2.43H7C6.94-16.167,6.884-16.18,6.827-16.184z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.173-16.184c-0.058,0.004-0.113,0.017-0.174,0.017h-1.667 c-1.356,0-2.453-1.083-2.492-2.43C14.585-18.377,16.118-17.485,17.173-16.184z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.001-5.333c1.38,0,2.499-1.12,2.499-2.5s-1.119-2.5-2.499-2.5 c-1.383,0-2.502,1.119-2.502,2.5S10.618-5.333,12.001-5.333z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.833-10.333c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5 c-1.382,0-2.501,1.119-2.501,2.5S6.451-10.333,7.833-10.333z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M16.166-10.333c1.38,0,2.499-1.119,2.499-2.5 s-1.119-2.5-2.499-2.5c-1.381,0-2.5,1.119-2.5,2.5S14.785-10.333,16.166-10.333z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.001-22C6.478-22,2-17.522,2-12C2-6.477,6.478-2,12.001-2 C17.522-2,22-6.477,22-12C22-17.522,17.522-22,12.001-22z M12.001-4.5C7.857-4.5,4.5-7.857,4.5-12c0-4.142,3.357-7.5,7.501-7.5 c4.141,0,7.498,3.358,7.498,7.5C19.499-7.857,16.142-4.5,12.001-4.5z"/>\n</symbol>\n<g opacity="0.5">\n<path fill="#00AFFF" d="M24,0v24H0V0H24 M24.5-0.5H24H0h-0.5V0v24v0.5H0h24h0.5V24V0V-0.5L24.5-0.5z"/>\n</g>\n<use xlink:href="#ic_x5F_searchinput_x5F_sm_x5F_flat"  width="24" height="24" id="XMLID_285_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/communities_green.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<g>\n<path fill="#53A93F" d="M12.001,22C6.478,22,2,17.522,2,12C2,6.477,6.478,2,12.001,2C17.521,2,22,6.477,22,12C22,17.522,17.521,22,12.001,22z"/>\n<path fill="#FFFFFF" d="M6.568,16.395c1.105,1.367,2.716,2.302,4.549,2.534c-0.041-1.414-1.193-2.552-2.618-2.552H6.75C6.687,16.377,6.628,16.391,6.568,16.395z"/>\n<path fill="#FFFFFF" d="M17.432,16.395c-0.061-0.004-0.118-0.018-0.183-0.018h-1.75c-1.424,0-2.576,1.138-2.617,2.552C14.714,18.697,16.324,17.762,17.432,16.395z"/>\n<path fill="#FFFFFF" d="M12.001,5.001c1.449,0,2.624,1.176,2.624,2.625c0,1.449-1.175,2.625-2.624,2.625c-1.452,0-2.627-1.175-2.627-2.625C9.374,6.176,10.549,5.001,12.001,5.001z"/>\n<path fill="#FFFFFF" d="M7.625,10.251c1.45,0,2.625,1.175,2.625,2.625c0,1.45-1.175,2.626-2.625,2.626c-1.451,0-2.626-1.176-2.626-2.626C4.999,11.426,6.174,10.251,7.625,10.251z"/>\n<path fill="#FFFFFF" d="M16.374,10.251c1.449,0,2.624,1.175,2.624,2.625c0,1.45-1.175,2.626-2.624,2.626s-2.625-1.176-2.625-2.626C13.749,11.426,14.925,10.251,16.374,10.251z"/>\n</g>\n<g opacity="0.5">\n<path fill="#00AFFF" d="M24,0v24H0V0H24 M24.5-0.5H24H0h-0.5V0v24v0.5H0h24h0.5V24V0V-0.5L24.5-0.5z"/>\n</g>\n</svg>\n'
        ),
        a.put(
          "/images/debug.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">\n<path d="M12.948,6C12.982,5.839,13,5.672,13,5.502C13,4.119,11.882,3,10.503,3C9.12,3,8.004,4.119,8.004,5.502\n  c0,0.17,0.018,0.337,0.05,0.498H12.948z" fill="white"/>\n<path d="M17,11h-3v-1l2-2V5h-1v2.586l-1,1V8l-1-1H8L7,8v0.586l-1-1V5H5v3l2,2v1H4c-0.553,0-1,0.447-1,1v1h1v-1h3v1l-2,2v3h1v-2.586\n  l1.464-1.464C8.349,15.126,9.33,16,10.502,16c1.171,0,2.152-0.873,3.034-2.049L15,15.414V18h1v-3l-2-2v-1h3v1h1v-1\n  C18,11.447,17.553,11,17,11z" fill="#231F20"/>\n</svg>'
        ),
        a.put(
          "/images/email.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" overflow="visible" enable-background="new 0 0 21 21" xml:space="preserve">\n<path d="M16.786,5H3.213C2.547,5,2.003,5.545,2,6.213v8.572C2,15.455,2.543,16,3.213,16h13.573C17.457,16,18,15.455,18,14.785V6.213C17.998,5.545,17.454,5,16.786,5z M16.607,7.773l0.009,0.012l-6.054,4.041l-0.011-0.016C10.392,11.92,10.208,12,9.999,12c-0.208,0-0.392-0.08-0.551-0.189l-0.011,0.016L3.384,7.785l0.009-0.012C3.159,7.59,3,7.318,3,7c0-0.551,0.447-1,0.999-1c0.24,0,0.452,0.096,0.624,0.236l0.006-0.008L10,9.809l5.371-3.58l0.007,0.008C15.549,6.096,15.761,6,16.001,6C16.553,6,17,6.449,17,7C17,7.318,16.841,7.59,16.607,7.773z"/>\n<rect opacity="0" fill="#4387FD" width="21" height="21"/>\n</svg>\n'
        ),
        a.put(
          "/images/google_icon_dark.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 24" width="62" height="24">\n    <path d="M7.5 16.29c-4.07 0-7.49-3.31-7.49-7.38S3.43 1.53 7.5 1.53c2.25 0 3.85.88 5.06 2.03l-1.42 1.42c-.87-.81-2.04-1.44-3.64-1.44-2.97 0-5.29 2.4-5.29 5.37s2.32 5.37 5.29 5.37c1.93 0 3.03-.77 3.73-1.48.58-.58.95-1.4 1.1-2.54H7.5V8.24h6.79c.07.36.11.79.11 1.26 0 1.51-.41 3.39-1.75 4.72-1.3 1.35-2.95 2.07-5.15 2.07zm17.75-4.76c0 2.74-2.13 4.75-4.75 4.75s-4.75-2.02-4.75-4.75c0-2.75 2.13-4.75 4.75-4.75s4.75 2 4.75 4.75zm-2.08 0c0-1.71-1.24-2.88-2.67-2.88s-2.67 1.17-2.67 2.88c0 1.69 1.24 2.88 2.67 2.88s2.67-1.18 2.67-2.88zm13.08 0c0 2.74-2.13 4.75-4.75 4.75s-4.75-2.02-4.75-4.75c0-2.75 2.13-4.75 4.75-4.75s4.75 2 4.75 4.75zm-2.08 0c0-1.71-1.24-2.88-2.67-2.88s-2.67 1.17-2.67 2.88c0 1.69 1.24 2.88 2.67 2.88s2.67-1.18 2.67-2.88zm12.58-4.46v8.53c0 3.51-2.07 4.95-4.52 4.95-2.3 0-3.69-1.55-4.21-2.81l1.82-.76c.32.77 1.12 1.69 2.39 1.69 1.57 0 2.54-.97 2.54-2.79v-.68h-.07c-.47.58-1.37 1.08-2.5 1.08-2.38 0-4.56-2.07-4.56-4.74 0-2.68 2.18-4.77 4.56-4.77 1.13 0 2.03.5 2.5 1.06h.07v-.76h1.98zm-1.84 4.48c0-1.67-1.12-2.9-2.54-2.9-1.44 0-2.65 1.22-2.65 2.9 0 1.66 1.21 2.86 2.65 2.86 1.43.01 2.54-1.2 2.54-2.86zm5.89-9.52V16h-2.09V2.03h2.09zm8.49 11.07l1.62 1.08c-.52.77-1.78 2.11-3.96 2.11-2.7 0-4.72-2.09-4.72-4.75 0-2.83 2.03-4.75 4.48-4.75 2.47 0 3.67 1.96 4.07 3.02l.22.54-6.36 2.63c.49.95 1.24 1.44 2.3 1.44 1.07 0 1.81-.53 2.35-1.32zm-4.99-1.71l4.25-1.76c-.23-.59-.94-1.01-1.76-1.01-1.06 0-2.54.93-2.49 2.77z"/>\n    <path fill="none" d="M0 0h62v24H0z"/>\n</svg>\n'
        ),
        a.put(
          "/images/google_icon_white.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 48" width="120" height="48">\n    <path fill="none" d="M0 0h120v48H0z"/>\n    <path d="M50.5 25.07c0 5.47-4.27 9.5-9.5 9.5s-9.5-4.03-9.5-9.5c0-5.51 4.27-9.5 9.5-9.5s9.5 4 9.5 9.5zm-4.16 0c0-3.42-2.47-5.76-5.34-5.76s-5.34 2.34-5.34 5.76c0 3.38 2.47 5.76 5.34 5.76s5.34-2.37 5.34-5.76zm25.16 0c0 5.47-4.27 9.5-9.5 9.5s-9.5-4.03-9.5-9.5c0-5.51 4.27-9.5 9.5-9.5s9.5 4 9.5 9.5zm-4.16 0c0-3.42-2.47-5.76-5.34-5.76-2.87 0-5.34 2.34-5.34 5.76 0 3.38 2.47 5.76 5.34 5.76 2.87 0 5.34-2.37 5.34-5.76zm24.29-8.92v17.06c0 7.02-4.14 9.9-9.04 9.9-4.61 0-7.38-3.1-8.42-5.62l3.64-1.51c.65 1.55 2.23 3.38 4.79 3.38 3.13 0 5.08-1.94 5.08-5.58v-1.37h-.14c-.94 1.15-2.74 2.16-5 2.16-4.75 0-9.03-4.14-9.03-9.47 0-5.36 4.27-9.54 9.03-9.54 2.27 0 4.07 1.01 5 2.12h.14v-1.55h3.95zm-3.67 8.96c0-3.35-2.23-5.79-5.08-5.79-2.88 0-5.21 2.45-5.21 5.79 0 3.31 2.33 5.72 5.21 5.72 2.85 0 5.08-2.41 5.08-5.72zM99 6.07V34h-4.18V6.07H99zm16.23 22.13l3.24 2.16c-1.04 1.55-3.56 4.21-7.92 4.21-5.4 0-9.43-4.18-9.43-9.5 0-5.65 4.07-9.5 8.96-9.5 4.93 0 7.34 3.92 8.13 6.05l.43 1.08-12.71 5.26c.97 1.91 2.48 2.88 4.61 2.88s3.61-1.05 4.69-2.64zm-9.97-3.41l8.49-3.53c-.47-1.19-1.87-2.02-3.53-2.02-2.12 0-5.07 1.87-4.96 5.55zM29.48 18.2c.16.97.23 1.92.23 2.81 0 3.02-.77 6.77-3.44 9.43-2.59 2.7-5.9 4.14-10.29 4.14C7.84 34.58 1 27.95 1 19.82 1 11.68 7.84 5.06 15.97 5.06c4.5 0 7.7 1.76 10.12 4.07l-2.84 2.84c-1.73-1.62-4.07-2.88-7.27-2.88-5.94 0-10.58 4.79-10.58 10.73s4.64 10.73 10.58 10.73c3.85 0 6.05-1.55 7.45-2.95 1.15-1.15 1.93-2.81 2.23-5.36H16V18.2h13.48z" fill="#FFF"/>\n</svg>\n'
        ),
        a.put(
          "/images/help.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_arrow_thindown.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_arrow_x5F_thindown_x5F_flat" viewBox="0 -24 24 24">\n<polygon fill="#231F20" points="13,-4 13,-15 18,-10 19.75,-11.75 11.5,-20 3.25,-11.75 5,-10 10,-15 10,-4"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0  "/>\n</symbol>\n<use xlink:href="#ic_x5F_arrow_x5F_thindown_x5F_flat"  width="24" height="24" id="XMLID_132_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_arrow_thinleft.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"\n     height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_arrow_x5F_thinleft_x5F_flat_1_" viewBox="0 -24 24 24">\n  <polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n  <polygon fill="#231F20" points="20,-10 9,-10 14,-5 12.25,-3.25 4,-11.5 12.25,-19.75 14,-18 9,-13 20,-13"/>\n</symbol>\n<use xlink:href="#ic_x5F_arrow_x5F_thinleft_x5F_flat_1_"  width="24" height="24" id="A" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_arrow_triangledown.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">\n<symbol  id="ic_x5F_arrow_x5F_dropdown_x5F_flat_1_" viewBox="0 -24 24 24">\n<polygon fill="#231F20" points="7,-10 12,-15 17,-10"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_arrow_x5F_dropdown_x5F_flat_1_"  width="24" height="24" id="XMLID_189_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_cancel.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"\n     height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_cancel_x5F_flat" viewBox="0 -24 24 24">\n  <polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n  <path fill="#231F20" d="M12-2C6.477-2,2-6.477,2-12s4.477-10,10-10s10,4.477,10,10S17.523-2,12-2z M18-16.586L16.586-18L12-13.414\n    L7.414-18L6-16.586L10.586-12L6-7.414L7.414-6L12-10.586L16.586-6L18-7.414L13.414-12L18-16.586z"/>\n</symbol>\n<use xlink:href="#ic_x5F_cancel_x5F_flat"  width="24" height="24" id="A" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_checkbox_blank.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"\n   height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_checkbox_x5F_blank_x5F_flat" viewBox="0 -24 24 24">\n  <path fill="#231F20" d="M19-3H5C3.896-3,3-3.896,3-5v-14c0-1.104,0.896-2,2-2h14c1.104,0,2,0.896,2,2v14C21-3.896,20.104-3,19-3z" />\n  <polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_checkbox_x5F_blank_x5F_flat"  width="24" height="24" id="A" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_chevron_down.svg",
          '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>\n    <path d="M0-.75h24v24H0z" fill="none"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_chevron_left.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_chevron_x5F_left_x5F_flat" viewBox="0 -24 24 24">\n<polygon fill="none" points="0,-24 24,-24 24,0 0,0"/>\n<polygon points="8,-12 14,-18 15.5,-16.5 11,-12 15.5,-7.5 14,-6"/>\n<polygon fill="none" points="0,-24 24,-24 24,0 0,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_chevron_x5F_left_x5F_flat" width="24" height="24" id="XMLID_83_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_chevron_right.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>\n'
        ),
        a.put(
          "/images/ic_chevron_up.svg",
          '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_close.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"\n  height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_close_x5F_flat" viewBox="0 -24 24 24">\n<polygon fill="#231F20" points="19,-6.414 17.586,-5 12,-10.586 6.414,-5 5,-6.414 10.586,-12 5,-17.586 6.414,-19 12,-13.414 17.586,-19 19,-17.586 13.414,-12   "/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_close_x5F_flat"  width="24" height="24" id="XMLID_131_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_debug.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n  <path d="M0 0h48v48H0z" fill="none"/>\n  <path d="M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_debug_auto.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n  <path d="M0 0h48v48H0z" fill="none"/>\n  <path d="M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4z"/>\n  <path stroke="white" d="M18 34l6 -16l6 16" stroke-width="3"/>\n  <path stroke="white" d="M20 30h8" stroke-width="3"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_debug_ext.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n    <path d="M0 0h48v48H0z" fill="none"/>\n    <path d="M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4z"/>\n    <path stroke="white" d="M30 18h-10v8h8h-8v8h10" stroke-width="3"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_debug_off.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n <path d="M0 0h48v48H0z" fill="none"/>\n <path d="M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4zM6 8h.73L14 15.27V16H6V8z"/>\n <line x1="2" x2="38" y1="6" y2="42" stroke="black" stroke-width="4" stroke-linecap="square"/>\n <line x1="8" x2="44" y1="6" y2="42" stroke="white" stroke-width="4" stroke-linecap="square"/>\n <line x1="38" x2="44" y1="32" y2="38" stroke="white" stroke-width="4" stroke-linecap="square"/>\n <line x1="2" x2="10" y1="12" y2="20" stroke="white" stroke-width="4" stroke-linecap="square"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_filter.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"\n   height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_filter_x5F_flat" viewBox="0 -24 24 24">\n  <path d="M13.5-15h-3c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5v2\n    C14-15.224,13.776-15,13.5-15z M17.5-10h-11C6.224-10,6-10.224,6-10.5v-2C6-12.776,6.224-13,6.5-13h11c0.276,0,0.5,0.224,0.5,0.5v2\n    C18-10.224,17.776-10,17.5-10z M20.5-5h-17C3.224-5,3-5.224,3-5.5v-2C3-7.776,3.224-8,3.5-8h17C20.776-8,21-7.776,21-7.5v2\n    C21-5.224,20.776-5,20.5-5z"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_filter_x5F_flat" width="24" height="24" id="A" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_filter_off.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="24" height="24" viewBox="0 0 24 24">\n<symbol  id="ic_x5F_filter_x5F_flat" viewBox="0 -24 24 24">\n  <path fill="#ffffff" d="M13.5-15h-3c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5v2\n    C14-15.224,13.776-15,13.5-15z M17.5-10h-11C6.224-10,6-10.224,6-10.5v-2C6-12.776,6.224-13,6.5-13h11c0.276,0,0.5,0.224,0.5,0.5v2\n    C18-10.224,17.776-10,17.5-10z M20.5-5h-17C3.224-5,3-5.224,3-5.5v-2C3-7.776,3.224-8,3.5-8h17C20.776-8,21-7.776,21-7.5v2\n    C21-5.224,20.776-5,20.5-5z"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n    <path d="M0 0h28v28H0z" fill="none"/>\n    <rect width="24" height="24" rx="4" ry="4" style="fill:#000000;stroke:#000000" />\n    <use xlink:href="#ic_x5F_filter_x5F_flat" width="24" height="24" id="A" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>'
        ),
        a.put(
          "/images/ic_fullscreen.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_fullscreen_x5F_flat" viewBox="0 -24 24 24">\n<path d="M5-11h2v4h4v2H5V-11z M7-13H5v-6h6v2H7V-13z M13-5v-2h4v-4h2v6H13z M17-17h-4v-2h6v6h-2V-17z"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0  "/>\n</symbol>\n<use xlink:href="#ic_x5F_fullscreen_x5F_flat"  width="24" height="24" id="XMLID_51_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_launch_24px.svg",
          '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_pause_circle_outline_black_24dp.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_play_circle_outline_black_24dp.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_print.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fit="" preserveAspectRatio="xMidYMid meet" style="pointer-events: none; display: block;">\n    <path d="M38 16H10c-3.31 0-6 2.69-6 6v12h8v8h24v-8h8V22c0-3.31-2.69-6-6-6zm-6 22H16V28h16v10zm6-14c-1.11 0-2-.89-2-2s.89-2 2-2c1.11 0 2 .89 2 2s-.89 2-2 2zM36 6H12v8h24V6z"></path>\n    <path d="M0 0h48v48H0z" fill="none"></path>\n</svg>'
        ),
        a.put(
          "/images/ic_refresh.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"\n   height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<symbol  id="ic_x5F_refresh_x5F_flat_1_" viewBox="0 -24 24 24">\n<path d="M17.649-6.351C16.203-4.901,14.21-4,12-4c-4.418,0-8-3.582-8-8s3.582-8,8-8c3.726,0,6.843,2.552,7.732,6h-2.084c-0.823-2.33-3.037-4-5.648-4c-3.314,0-6,2.686-6,6s2.686,6,6,6c1.657,0,3.141-0.688,4.225-1.775L13-11h7v7L17.649-6.351z"/>\n<polygon fill="none" points="24,-24 0,-24 0,0 24,0"/>\n</symbol>\n<use xlink:href="#ic_x5F_refresh_x5F_flat_1_"  width="24" height="24" id="XMLID_10_" y="-24" transform="matrix(1 0 0 -1 0 0)" overflow="visible"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_star.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_starred.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#e4b925" />\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_suggestion_blue.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">\n<path fill="#4285F4" d="M14,1C6.8,1,1,6.8,1,14c0,3.2,1.1,6.1,3,8.3l7.2-7.2L7,11h11v11l-4-4l-7,7c2,1.3,4.4,2,7,2c7.2,0,13-5.8,13-13S21.2,1,14,1z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_suggestion_gray.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1190.6 841.9" enable-background="new 0 0 1190.6 841.9" xml:space="preserve">\n<path fill="#231F20" d="M595.3,30.1c-216.5,0-390.9,174.4-390.9,390.9c0,96.2,33.1,183.4,90.2,249.6L511.1,454L384.8,330.7h330.7v330.7L595.3,541.2L384.8,751.7c60.1,39.1,132.3,60.1,210.5,60.1c216.5,0,390.9-174.4,390.9-390.9S811.8,30.1,595.3,30.1z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_suggestion_green.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">\n<path fill="#0F9D58" d="M14,1C6.8,1,1,6.8,1,14c0,3.2,1.1,6.1,3,8.3l7.2-7.2L7,11h11v11l-4-4l-7,7c2,1.3,4.4,2,7,2c7.2,0,13-5.8,13-13S21.2,1,14,1z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_suggestion_red.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">\n<path fill="#DB4437" d="M14,1C6.8,1,1,6.8,1,14c0,3.2,1.1,6.1,3,8.3l7.2-7.2L7,11h11v11l-4-4l-7,7c2,1.3,4.4,2,7,2c7.2,0,13-5.8,13-13S21.2,1,14,1z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_suggestion_yellow.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">\n<path fill="#F4B400" d="M14,1C6.8,1,1,6.8,1,14c0,3.2,1.1,6.1,3,8.3l7.2-7.2L7,11h11v11l-4-4l-7,7c2,1.3,4.4,2,7,2c7.2,0,13-5.8,13-13S21.2,1,14,1z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_tag_assistant_blue.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">\n<path fill="#4285F4" d="M6.594,2C6.044,2,5.312,2.352,4.97,2.781L0.624,8.219c-0.343,0.43-0.343,1.133,0,1.562l4.346,5.438 C5.312,15.648,6.044,16,6.594,16H18c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H6.594z"/>\n<circle fill="#FFFFFF" cx="10" cy="7" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="11" r="1"/>\n<circle fill="#FFFFFF" cx="3.7" cy="9" r="1"/>\n<path fill="#FFFFFF" d="M13,11c0,0.553,0.447,1,1,1h2c0.553,0,1-0.447,1-1V6c0-0.553-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1V11zM14,6h2v5h-2V6z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_tag_assistant_empty.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" enable-background="new 0 0 192 192" xml:space="preserve">\n<path fill="#C5C5C5" d="M173.7,36H63.4c-5.7,0-10.8,2.3-14.6,6.1l-36,35.1c-5.2,5-8.5,12.1-8.5,19.9c0,7.6,3.1,14.6,8.1,19.6l0,0l36.4,32.8c3.7,3.8,8.9,5.7,14.6,5.7h110.3c5.7,0,10.3-3,10.3-8.7V45.6C184,39.9,179.4,36,173.7,36z M37.7,111c-7.7,0-13.8-6.3-13.6-14c0.2-7.7,6.6-14,14.3-14c7.7,0,13.8,6.3,13.6,14C51.8,104.8,45.4,111,37.7,111z M172,135c0,3.3-2.7,6-6,6H86c-3.3,0-6-2.7-6-6V55c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6V135z"/>\n<path fill="#ADADAD" d="M172,56v79c0,3.3-2.7,6-6,6H86c-1.4,0-2.7-0.5-3.7-1.3L82,140l15,15h76.5c5.7,0,10.5-3,10.5-8.7V68L172,56z"/>\n<line stroke="#999999" stroke-width="5" x1="156" y1="65.5" x2="135" y2="125"/>\n<circle fill="#999999" cx="116.2" cy="76.1" r="5.2"/>\n<circle fill="#999999" cx="116.2" cy="110.6" r="5.2"/>\n</svg>'
        ),
        a.put(
          "/images/ic_tag_assistant_gray.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">\n<path fill="#C5C5C5" d="M6.594,2C6.044,2,5.312,2.352,4.97,2.781L0.624,8.218c-0.343,0.43-0.343,1.133,0,1.562l4.346,5.438\n  C5.312,15.648,6.044,16,6.594,16H18c0.55,0,1-0.449,1-1V3c0-0.55-0.45-1-1-1H6.594z"/>\n<circle fill="#FFFFFF" cx="3.7" cy="9" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="7" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="11" r="1"/>\n<path fill="#FFFFFF" d="M14.5,5H14v1h0.5C14.776,6,15,6.224,15,6.5v5c0,0.277-0.224,0.5-0.5,0.5H14v1h0.5c0.828,0,1.5-0.672,1.5-1.5\n  v-5C16,5.672,15.328,5,14.5,5z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_tag_assistant_green.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">\n<path fill="#0F9D58" d="M6.594,2C6.044,2,5.312,2.352,4.97,2.781L0.624,8.218c-0.343,0.43-0.343,1.133,0,1.562l4.346,5.438 C5.312,15.648,6.044,16,6.594,16H18c0.55,0,1-0.449,1-1V3c0-0.55-0.45-1-1-1H6.594z"/>\n<circle fill="#FFFFFF" cx="3.7" cy="9" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="7" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="11" r="1"/>\n<path fill="#FFFFFF" d="M14.5,5H14v1h0.5C14.776,6,15,6.224,15,6.5v5c0,0.277-0.224,0.5-0.5,0.5H14v1h0.5c0.828,0,1.5-0.672,1.5-1.5v-5C16,5.672,15.328,5,14.5,5z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_tag_assistant_happy.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" enable-background="new 0 0 192 192" xml:space="preserve">\n<path fill="#C5C5C5" d="M173.7,36H63.4c-5.7,0-10.8,2.3-14.6,6.1l-36,35.1c-5.2,5-8.5,12.1-8.5,19.9c0,7.6,3.1,14.6,8.1,19.6l0,0l36.4,32.8c3.7,3.8,8.9,5.7,14.6,5.7h110.3c5.7,0,10.3-3,10.3-8.7V45.6C184,39.9,179.4,36,173.7,36z M37.7,111c-7.7,0-13.8-6.3-13.6-14c0.2-7.7,6.6-14,14.3-14c7.7,0,13.8,6.3,13.6,14C51.8,104.8,45.4,111,37.7,111z M172,135c0,3.3-2.7,6-6,6H86c-3.3,0-6-2.7-6-6V55c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6V135z"/>\n<path fill="#ADADAD" d="M172,56v79c0,3.3-2.7,6-6,6H86c-1.4,0-2.7-0.5-3.7-1.3L82,140l15,15h76.5c5.7,0,10.5-3,10.5-8.7V68L172,56z"/>\n<circle fill="#999999" cx="116.2" cy="76.1" r="5.2"/>\n<circle fill="#999999" cx="116.2" cy="110.6" r="5.2"/>\n<path stroke="#999999" stroke-width="5" stroke-linecap="round" fill="none" d="m135 65.5Q156 95 135 125"/>\n</svg>'
        ),
        a.put(
          "/images/ic_tag_assistant_red.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">\n<path fill="#DB4437" d="M6.594,2C6.044,2,5.312,2.352,4.97,2.781L0.624,8.219c-0.343,0.43-0.343,1.133,0,1.562l4.346,5.438C5.312,15.648,6.044,16,6.594,16H18c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H6.594z"/>\n<circle fill="#FFFFFF" cx="3.7" cy="9" r="1"/>\n<polygon fill="#FFFFFF" points="17,5 16,5 13,12 14,12"/>\n<circle fill="#FFFFFF" cx="10" cy="7" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="11" r="1"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_tag_assistant_yellow.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">\n<path fill="#F4B400" d="M6.594,2C6.044,2,5.312,2.352,4.97,2.781L0.624,8.219c-0.343,0.43-0.343,1.133,0,1.562l4.346,5.438C5.312,15.648,6.044,16,6.594,16H18c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H6.594z"/>\n<circle fill="#FFFFFF" cx="10" cy="7" r="1"/>\n<circle fill="#FFFFFF" cx="10" cy="11" r="1"/>\n<circle fill="#FFFFFF" cx="3.7" cy="9" r="1"/>\n<path fill="#FFFFFF" d="M14,8V6h2v2H14z M14,9h2c0.553,0,1-0.447,1-1V6c0-0.553-0.447-1-1-1h-3v7h1V9z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_unfold_less.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n    <path d="M0 0h48v48H0z" fill="none"/>\n    <path d="M14.83 37.17L17.66 40 24 33.66 30.34 40l2.83-2.83L24 28l-9.17 9.17zm18.34-26.34L30.34 8 24 14.34 17.66 8l-2.83 2.83L24 20l9.17-9.17z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_unfold_more.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n    <path d="M0 0h48v48H0z" fill="none"/>\n    <path d="M24 11.66L30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z"/>\n</svg>'
        ),
        a.put(
          "/images/ic_view_headline.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>\n</svg>\n'
        ),
        a.put(
          "/images/ic_view_list.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>\n</svg>\n'
        ),
        a.put(
          "/images/icon_more_vert.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>\n</svg>\n'
        ),
        a.put(
          "/images/minus.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fit="" preserveAspectRatio="xMidYMid meet" style="pointer-events: none; display: block;">\n    <path d="M38 26H10v-4h28v4z"></path>\n    <path d="M0 0h48v48H0z" fill="none"></path>\n</svg>'
        ),
        a.put(
          "/images/pageload.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"\n     viewBox="2 2 48 48" fit="" preserveAspectRatio="xMidYMid meet"\n     style="pointer-events:none;display:block;">\n  <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0\n        4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 36H8v-8h22v8zm0-10H8v-8h22v8zm10\n        10h-8V18h8v18z"></path>\n  <path d="M0 0h48v48H0z" fill="none"></path>\n</svg>'
        ),
        a.put(
          "/images/plus.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fit="" preserveAspectRatio="xMidYMid meet" style="pointer-events: none; display: block;">\n    <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"></path>\n    <path d="M0 0h48v48H0z" fill="none"></path>\n</svg>'
        ),
        a.put(
          "/images/remove_circle_outline.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
        ),
        a.put(
          "/images/settings.svg",
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>\n</svg>\n'
        ),
        a.put(
          "/images/start_record.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 21 21" overflow="visible" enable-background="new 0 0 21 21" xml:space="preserve">\n<circle cx="11" cy="10.5" r="2.5"/>\n<path d="M11,16.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S14.309,16.5,11,16.5z M11,5.5c-2.757,0-5,2.243-5,5s2.243,5,5,5\n s5-2.243,5-5S13.757,5.5,11,5.5z"/>\n<rect opacity="0" fill="#4387FD" width="21" height="21"/>\n</svg>\n'
        ),
        a.put(
          "/images/stop_record.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 21 21" overflow="visible" enable-background="new 0 0 21 21" xml:space="preserve">\n<circle cx="11" cy="10.5" r="2.5" fill="#FF0000" />\n<path d="M11,16.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S14.309,16.5,11,16.5z M11,5.5c-2.757,0-5,2.243-5,5s2.243,5,5,5\n  s5-2.243,5-5S13.757,5.5,11,5.5z" stroke="red" />\n<rect opacity="0" fill="#4387FD" width="21" height="21"/>\n</svg>\n'
        ),
        a.put(
          "/images/tag_assistant.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">\n<radialGradient id="SVGID_1_" cx="643.4609" cy="667.5391" r="99.4799" gradientTransform="matrix(1 0 0 1 -518.4609 -542.5391)" gradientUnits="userSpaceOnUse">\n<stop  offset="0" style="stop-color:#4387FD"/>\n<stop  offset="1" style="stop-color:#4683EA"/>\n</radialGradient>\n<path fill="url(#SVGID_1_)" d="M228.539,46.875H84.957c-7.378-0.004-14.099,2.987-18.974,7.906l-46.876,46.637\nC12.332,107.942,7.993,117.18,8,127.369c-0.01,9.956,4.048,19.016,10.573,25.523l0.017,0.012l47.381,42.771\nc4.879,4.89,11.603,7.427,18.98,7.45h143.595c7.446-0.014,13.448-3.9,13.447-11.361L242,60.373\nC241.982,52.957,235.982,46.889,228.539,46.875z M51.536,145.527c-10,0-17.92-8.162-17.654-18.198\nc0.28-10.067,8.63-18.232,18.633-18.227c10.02,0.009,17.915,8.163,17.653,18.223C69.92,137.377,61.567,145.531,51.536,145.527z"/>\n<path fill="#4175BF" d="M222.656,70.312L109.375,183.594l19.531,19.531h99.617c7.437-0.014,13.666-3.895,13.664-11.348V89.844\nL222.656,70.312z"/>\n<path fill="#F2F2F2" d="M222.656,175.781c0,4.314-3.498,7.812-7.812,7.812H113.281c-4.314,0-7.812-3.498-7.812-7.812V74.219\nc0-4.314,3.498-7.812,7.812-7.812h101.562c4.313,0,7.812,3.498,7.812,7.812v101.562H222.656z"/>\n<path fill="#4285F4" d="M190.848,123.995c0,8.165-1.205,16.414-3.611,23.462s-5.875,13.043-10.408,19.043h-9.455\nc4.287-6,7.566-12.895,9.854-19.975c2.279-7.075,3.424-14.727,3.424-22.301c0-7.606-1.152-14.947-3.447-22.165\nc-2.299-7.222-5.604-13.56-9.922-19.56h9.549c4.566,5,8.041,11.511,10.434,18.7C189.648,108.387,190.848,115.829,190.848,123.995z"/>\n<circle fill="#4285F4" cx="151.367" cy="104.492" r="6.836"/>\n<circle fill="#4285F4" cx="151.367" cy="149.414" r="6.836"/>\n</svg>\n'
        ),
        a.put(
          "/images/tag_assistant_dev.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">\n<radialGradient id="SVGID_1_" cx="643.4609" cy="667.5391" r="99.4799" gradientTransform="matrix(1 0 0 1 -518.4609 -542.5391)" gradientUnits="userSpaceOnUse">\n<stop  offset="0" style="stop-color:#DE4644"/>\n<stop  offset="1" style="stop-color:#E2422F"/>\n</radialGradient>\n<path fill="url(#SVGID_1_)" d="M228.539,46.875H84.957c-7.378-0.004-14.099,2.987-18.974,7.906l-46.876,46.637\nC12.332,107.942,7.993,117.18,8,127.369c-0.01,9.956,4.048,19.016,10.573,25.523l0.017,0.012l47.381,42.771\nc4.879,4.89,11.603,7.427,18.98,7.45h143.595c7.446-0.014,13.448-3.9,13.447-11.361L242,60.373\nC241.982,52.957,235.982,46.889,228.539,46.875z M51.536,145.527c-10,0-17.92-8.162-17.654-18.198\nc0.28-10.067,8.63-18.232,18.633-18.227c10.02,0.009,17.915,8.163,17.653,18.223C69.92,137.377,61.567,145.531,51.536,145.527z"/>\n<path fill="#BF4C41" d="M222.656,70.312L109.375,183.594l19.531,19.531h99.617c7.437-0.014,13.666-3.895,13.664-11.348V89.844\nL222.656,70.312z"/>\n<path fill="#F2F2F2" d="M222.656,175.781c0,4.314-3.498,7.812-7.812,7.812H113.281c-4.314,0-7.812-3.498-7.812-7.812V74.219\nc0-4.314,3.498-7.812,7.812-7.812h101.562c4.313,0,7.812,3.498,7.812,7.812v101.562H222.656z"/>\n<path fill="#DD4437" d="M190.848,123.995c0,8.165-1.205,16.414-3.611,23.462s-5.875,13.043-10.408,19.043h-9.455\nc4.287-6,7.566-12.895,9.854-19.975c2.279-7.075,3.424-14.727,3.424-22.301c0-7.606-1.152-14.947-3.447-22.165\nc-2.299-7.222-5.604-13.56-9.922-19.56h9.549c4.566,5,8.041,11.511,10.434,18.7C189.648,108.387,190.848,115.829,190.848,123.995z"\n/>\n<circle fill="#DD4437" cx="151.367" cy="104.492" r="6.836"/>\n<circle fill="#DD4437" cx="151.367" cy="149.414" r="6.836"/>\n</svg>\n'
        ),
        a.put(
          "/images/tag_assistant_internal.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">\n<radialGradient id="SVGID_1_" cx="643.4609" cy="667.5391" r="99.4799" gradientTransform="matrix(1 0 0 1 -518.4609 -542.5391)" gradientUnits="userSpaceOnUse">\n<stop  offset="0" style="stop-color:#07AF5D"/>\n<stop  offset="1" style="stop-color:#158D53"/>\n</radialGradient>\n<path fill="url(#SVGID_1_)" d="M228.539,46.875H84.957c-7.378-0.004-14.099,2.987-18.974,7.906l-46.876,46.637\nC12.332,107.942,7.993,117.18,8,127.369c-0.01,9.956,4.048,19.016,10.573,25.523l0.017,0.012l47.381,42.771\nc4.879,4.89,11.603,7.427,18.98,7.45h143.595c7.446-0.014,13.448-3.9,13.447-11.361L242,60.373\nC241.982,52.957,235.982,46.889,228.539,46.875z M51.536,145.527c-10,0-17.92-8.162-17.654-18.198\nc0.28-10.067,8.63-18.232,18.633-18.227c10.02,0.009,17.915,8.163,17.653,18.223C69.92,137.377,61.567,145.531,51.536,145.527z"/>\n<path fill="#377F5B" d="M222.656,70.312L109.375,183.594l19.531,19.531h99.617c7.437-0.014,13.666-3.895,13.664-11.348V89.844\nL222.656,70.312z"/>\n<path fill="#F2F2F2" d="M222.656,175.781c0,4.314-3.498,7.812-7.812,7.812H113.281c-4.314,0-7.812-3.498-7.812-7.812V74.219\nc0-4.314,3.498-7.812,7.812-7.812h101.562c4.313,0,7.812,3.498,7.812,7.812v101.562H222.656z"/>\n<path fill="#0F9D58" d="M190.848,123.995c0,8.165-1.205,16.414-3.611,23.462s-5.875,13.043-10.408,19.043h-9.455\nc4.287-6,7.566-12.895,9.854-19.975c2.279-7.075,3.424-14.727,3.424-22.301c0-7.606-1.152-14.947-3.447-22.165\nc-2.299-7.222-5.604-13.56-9.922-19.56h9.549c4.566,5,8.041,11.511,10.434,18.7C189.648,108.387,190.848,115.829,190.848,123.995z"/>\n<circle fill="#0F9D58" cx="151.367" cy="104.492" r="6.836"/>\n<circle fill="#0F9D58" cx="151.367" cy="149.414" r="6.836"/>\n</svg>\n'
        ),
        a.put(
          "/images/tag_assistant_test.svg",
          '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">\n<radialGradient id="SVGID_1_" cx="643.4609" cy="667.5391" r="99.4799" gradientTransform="matrix(1 0 0 1 -518.4609 -542.5391)" gradientUnits="userSpaceOnUse">\n<stop offset="0" style="stop-color:#F5B600" />\n<stop offset="1" style="stop-color:#F8B200" />\n</radialGradient>\n<path fill="url(#SVGID_1_)" d="M228.539,46.875H84.957c-7.378-0.004-14.099,2.987-18.974,7.906l-46.876,46.637\nC12.332,107.942,7.993,117.18,8,127.369c-0.01,9.956,4.048,19.016,10.573,25.523l0.017,0.012l47.381,42.771\nc4.879,4.89,11.603,7.427,18.98,7.45h143.595c7.446-0.014,13.448-3.9,13.447-11.361L242,60.373\nC241.982,52.957,235.982,46.889,228.539,46.875z M51.536,145.527c-10,0-17.92-8.162-17.654-18.198\nc0.28-10.067,8.63-18.232,18.633-18.227c10.02,0.009,17.915,8.163,17.653,18.223C69.92,137.377,61.567,145.531,51.536,145.527z"/>\n<path fill="#CA9700" d="M222.656,70.312L109.375,183.594l19.531,19.531h99.617c7.437-0.014,13.666-3.895,13.664-11.348V89.844\nL222.656,70.312z"/>\n<path fill="#F2F2F2" d="M222.656,175.781c0,4.314-3.498,7.812-7.812,7.812H113.281c-4.314,0-7.812-3.498-7.812-7.812V74.219\nc0-4.314,3.498-7.812,7.812-7.812h101.562c4.313,0,7.812,3.498,7.812,7.812v101.562H222.656z"/>\n<path fill="#F4B400" d="M190.848,123.995c0,8.165-1.205,16.414-3.611,23.462s-5.875,13.043-10.408,19.043h-9.455\nc4.287-6,7.566-12.895,9.854-19.975c2.279-7.075,3.424-14.727,3.424-22.301c0-7.606-1.152-14.947-3.447-22.165\nc-2.299-7.222-5.604-13.56-9.922-19.56h9.549c4.566,5,8.041,11.511,10.434,18.7C189.648,108.387,190.848,115.829,190.848,123.995z"/>\n<circle fill="#F4B400" cx="151.367" cy="104.492" r="6.836"/>\n<circle fill="#F4B400" cx="151.367" cy="149.414" r="6.836"/>\n</svg>\n'
        ));
    }
  ]);
var bh = angular
  .module("tvt.templates.popupcomponents", [])
  .value("forceCachedTemplates", !1)
  .value("forceUncachedTemplates", !1)
  .factory("html2JsTemplatesCached", [
    "forceCachedTemplates",
    "forceUncachedTemplates",
    function (a, b) {
      return function () {
        return !b && !0;
      };
    }
  ])
  .run([
    "$templateCache",
    "html2JsTemplatesCached",
    function (a, b) {
      b() &&
        a.put(
          "/header/header.ng",
          '<div layout layout-align="space-between center">\n  <span layout="row" layout-align="start center">\n    <md-icon md-svg-icon="google"></md-icon>\n    <span class="header-text">Tag Assistant Legacy</span>\n  </span>\n  <span layout="row" layout-align="end center">\n    <md-button class="md-icon-button no-margin-button"\n               aria-label="Toggle show ignored issues"\n               ng-click="headerCtrl.toggleShowIssueIgnored()"\n               ng-if="!headerCtrl.isUrlRestricted()">\n      <md-tooltip>Show/Hide ignored issues</md-tooltip>\n      <md-icon md-svg-icon="filter"\n               id="hide-ignored-issues"\n               ng-class="{\'fill-orange\' : headerCtrl.showIgnoredIssues()}">\n      </md-icon>\n    </md-button>\n    <md-button class="md-icon-button no-margin-button"\n               aria-label="Toggle Favorite"\n               ng-click="headerCtrl.toggleFavoriteDomain()"\n               ng-if="!headerCtrl.isUrlRestricted()">\n      <md-tooltip>Toggle favorite</md-tooltip>\n      <md-icon md-svg-icon="star"\n               ng-class="{\'fill-orange\' : headerCtrl.isFavoriteDomain()}">\n      </md-icon>\n    </md-button>\n    <md-button class="md-icon-button no-margin-button"\n               ng-click="headerCtrl.goToOptions()"\n               aria-label="Settings">\n      <md-icon md-menu-origin md-svg-icon="settings"></md-icon>\n    </md-button>\n    <div>\n      <md-menu md-position-mode="target-right target" md-offset="0 -7">\n        <md-button class="md-icon-button no-margin-button"\n                   aria-label="More options"\n                   ng-click="$mdOpenMenu($event)">\n          <md-icon md-svg-icon="more-options" md-menu-origin></md-icon>\n        </md-button>\n        <md-menu-content class="header-menu-options" width="4">\n          <md-menu-item>\n            <md-button ng-click="headerCtrl.navigateToFullScreen()">\n              <md-icon md-menu-align-target md-svg-icon="fullscreen"></md-icon>\n              Show in a separate tab\n            </md-button>\n          </md-menu-item>\n          <md-menu-item>\n            <md-button ng-disabled="headerCtrl.disableRecheckDomButton()"\n                       ng-click="headerCtrl.requestDomRecheck()">\n              <md-icon md-menu-align-target md-svg-icon="refresh"></md-icon>\n              Recheck DOM\n            </md-button>\n          </md-menu-item>\n          <md-divider></md-divider>\n          <md-menu-item>\n            <md-button ng-if="!headerCtrl.isAutoValidationOn()"\n                       ng-click="headerCtrl.toggleAutoValidation()">\n              <md-icon md-menu-align-target md-svg-icon="pause"></md-icon>\n              Auto Validation OFF\n            </md-button>\n            <md-button ng-if="headerCtrl.isAutoValidationOn()"\n                       ng-click="headerCtrl.toggleAutoValidation()">\n              <md-icon md-menu-align-target md-svg-icon="play"></md-icon>\n              Auto Validation ON\n            </md-button>\n          </md-menu-item>\n          <md-menu-item>\n            <md-button ng-click="headerCtrl.changeGaDebugState(\'on\')"\n                       ng-if="headerCtrl.getGaDebugState() == \'off\'"\n                       md-prevent-menu-close>\n              <md-icon md-menu-align-target md-svg-icon="debug-off"></md-icon>\n              GA Debug OFF\n            </md-button>\n            <md-button ng-click="headerCtrl.changeGaDebugState(\'auto\')"\n                       ng-if="headerCtrl.getGaDebugState() == \'on\'"\n                       md-prevent-menu-close>\n              <md-icon md-menu-align-target md-svg-icon="debug-on"></md-icon>\n              GA Debug ON\n            </md-button>\n            <md-button ng-click="headerCtrl.changeGaDebugState(\'off\')"\n                       ng-if="headerCtrl.getGaDebugState() == \'auto\'"\n                       md-prevent-menu-close>\n              <md-icon md-menu-align-target md-svg-icon="debug-auto"></md-icon>\n              GA Debug AUTO\n            </md-button>\n            <md-button ng-if="headerCtrl.getGaDebugState() == \'ext\'"\n                       md-prevent-menu-close>\n              <md-icon md-menu-align-target md-svg-icon="debug-ext"></md-icon>\n              GA Debug EXTERNAL\n            </md-button>\n          </md-menu-item>\n          <md-divider></md-divider>\n          <md-menu-item>\n            <md-button ng-click="headerCtrl.navigateToHelpUrl()">\n              <md-icon md-menu-align-target md-svg-icon="help"></md-icon>\n              Need Help?\n            </md-button>\n          </md-menu-item>\n          <md-menu-item>\n            <md-button ng-click="headerCtrl.navigateToFileTicket()">\n              <md-icon md-menu-align-target md-svg-icon="email"></md-icon>\n              File a ticket\n            </md-button>\n          </md-menu-item>\n        </md-menu-content>\n      </md-menu>\n    </div>\n  </span>\n</div>\n'
        );
    }
  ]);
var ch = ["Info", "Fine", "Debug"],
  dh = function (a) {
    a.getQueryInfoDetailMap = this.xb;
  };
dh.prototype.getViews = function (a) {
  return Fd(a);
};
dh.prototype.getViews = dh.prototype.getViews;
dh.prototype.getInfoIssuesForTag = function (a, b, c, d) {
  d = ch.indexOf(d);
  return Dg(a, b, ch.slice(0, d + 1), c);
};
dh.prototype.getOptimizationIssuesForTag = function (a, b, c) {
  return Dg(a, b, pd).filter(function (d) {
    return c || !d.ignored;
  });
};
dh.prototype.xb = function (a) {
  return (a = Cd(a).category) ? lf(a) : {};
};
var R = function (a, b, c, d, e, f, g, h) {
  var k = this;
  b.getQueryInfoDetailMap = this.xb;
  this.F = a;
  this.Sb = c;
  this.j = e;
  this.isBucketView = !!h;
  this.Tb = !1;
  b.getInfoIssuesForTag = this.getInfoIssuesForTag.bind(this);
  b.triggerAction = ab(this.Db.bind(this), d.Oc.bind(d, f));
  b.triggerUpdate = ab(this.Db.bind(this), d.Pc.bind(d, f));
  b.disableActions = function () {
    return k.Tb;
  };
  b.tabStatus = f;
  b.tag = h || g;
  a = this.isBucketView ? b.tag.parent.relatedIssues : Ag(f);
  b.nextTag = a[a.indexOf(b.tag) + 1];
  b.previousTag = a[a.indexOf(b.tag) - 1];
  b.tagPosition = a.indexOf(b.tag) + 1;
  this.elementHoveredMap = {};
  this.Vb = this.ya = null;
};
Ca(R, dh);
R.prototype.getInfoIssuesForTag = function (a, b, c) {
  return R.Ba.getInfoIssuesForTag.call(this, a, b, c, Ed(b.category || Cd(b).category || ""));
};
R.prototype.getOptimizationIssuesForTag = function (a, b) {
  return R.Ba.getOptimizationIssuesForTag.call(this, a, b, this.j.da);
};
R.prototype.getOptimizationIssuesForTag = R.prototype.getOptimizationIssuesForTag;
R.prototype.highlightOptimization = function (a) {
  var b = this;
  this.elementHoveredMap[a.view] = "ilo-" + a.type;
  this.Vb = this.Sb(function () {
    b.ya = a.view || "";
  }, 500);
};
R.prototype.highlightOptimization = R.prototype.highlightOptimization;
R.prototype.resetView = function (a) {
  delete this.elementHoveredMap[a.view];
  this.ya = null;
  this.Sb.cancel(this.Vb);
};
R.prototype.resetView = R.prototype.resetView;
R.prototype.setActiveView = function (a) {
  a != this.ya && (this.F.lastActiveView = a);
};
R.prototype.setActiveView = R.prototype.setActiveView;
R.prototype.isActiveView = function (a) {
  return this.ya ? a == this.ya : a == this.F.lastActiveView;
};
R.prototype.isActiveView = R.prototype.isActiveView;
R.prototype.Db = function () {
  this.F.$broadcast("resyncRequired");
  this.Tb = !0;
};
var eh = ["$rootScope", "$scope", "$timeout", "tvt.service.Data", "tvt.service.State", "tabStatus", "selectedTag", "selectedBucket", R],
  fh = function (a, b, c) {
    c = c.defer();
    (a = Ag(a).find(function (d) {
      return d.id == b.issueId;
    }))
      ? c.resolve(a)
      : c.reject();
    return c.promise;
  },
  gh = function (a, b) {
    var c = null;
    a.buckets.forEach(function (d) {
      c ||
        (c =
          d.relatedIssues.find(function (e) {
            return e.id == b.bucketId;
          }) || null);
    });
    return c;
  };
var hh = function () {
  this.countErrors = v(this.yc, "Error");
};
hh.prototype.getTags = function (a, b) {
  a = Ag(a);
  b ||
    (a = a.filter(function (c) {
      return !c.ignored;
    }));
  return a;
};
hh.prototype.getOptimizationIssues = function (a, b) {
  a = Bg(a);
  b ||
    (a = a.filter(function (c) {
      return !c.ignored;
    }));
  return a;
};
hh.prototype.yc = function (a, b) {
  b = Ag(b);
  return (b.length && Hd(b, a, !0)) || 0;
};
var T = function (a, b, c, d) {
  hh.call(this);
  this.F = a;
  this.Z = b;
  this.j = d;
  b.tabStatus = c;
  this.showIgnored = this.j.yb.bind(this.j);
};
Ca(T, hh);
T.prototype.getTags = function (a) {
  return T.Ba.getTags.call(this, a, this.j.da);
};
T.prototype.getTags = T.prototype.getTags;
T.prototype.getOptimizationIssues = function (a) {
  return T.Ba.getOptimizationIssues.call(this, a, this.j.da);
};
T.prototype.getOptimizationIssues = T.prototype.getOptimizationIssues;
T.prototype.integratedWithGtar = function () {
  return !1;
};
T.prototype.integratedWithGtar = T.prototype.integratedWithGtar;
T.prototype.popoutDetails = function (a) {
  var b = new H(chrome.extension.getURL("templates/gtar.html"));
  I(b);
  b.C.set("tagId", a);
  a = this.F.tabId;
  I(b);
  b.C.set("tabId", a);
  window.open(b.toString());
};
T.prototype.popoutDetails = T.prototype.popoutDetails;
var ih = ["$rootScope", "$scope", "tabStatus", "tvt.service.State", T],
  jh = function (a) {
    return Ig(a, "popup.issues");
  };
var kh = function (a) {
  this.j = a;
  this.switchTabs = this.j.Sc.bind(this.j);
};
kh.prototype.recordingActiveOnCurrentTab = function () {
  return "disabled" != Mg(this.j, !0);
};
kh.prototype.recordingActiveOnOtherTab = function () {
  return !this.recordingActiveOnCurrentTab() && "disabled" != Mg(this.j);
};
kh.prototype.recordingActiveOnOtherTab = kh.prototype.recordingActiveOnOtherTab;
kh.prototype.recordingActiveOnCurrentTab = kh.prototype.recordingActiveOnCurrentTab;
var lh = ["tvt.service.State", kh];
var U = function (a, b, c) {
  this.pb = a;
  this.j = b;
  this.gb = c;
};
n = U.prototype;
n.hasRecordings = function () {
  return !!this.gb.recordedPages;
};
n.getNumRecordedPages = function () {
  return this.gb.recordedPages;
};
n.getNumRecordedTags = function () {
  return this.gb.recordedTags;
};
n.showFullReport = function () {
  var a = chrome.extension.getURL("templates/gtar.html");
  this.pb.open(a);
};
n.showResumeRecord = function () {
  return "disabled" == Mg(this.j) && Ng(this.j);
};
n.showResumeRecordFromHere = function () {
  return "disabled" == Mg(this.j) && !Ng(this.j);
};
U.prototype.showResumeRecordFromHere = U.prototype.showResumeRecordFromHere;
U.prototype.showResumeRecord = U.prototype.showResumeRecord;
U.prototype.showFullReport = U.prototype.showFullReport;
U.prototype.getNumRecordedTags = U.prototype.getNumRecordedTags;
U.prototype.getNumRecordedPages = U.prototype.getNumRecordedPages;
U.prototype.hasRecordings = U.prototype.hasRecordings;
var mh = ["$window", "tvt.service.State", "recordingStats", U],
  nh = function (a) {
    return Ig(a, "popup.show-stats");
  };
var V = function (a, b) {
  this.aa = a;
  this.j = b;
  this.availableTags = oh();
  this.visibleTagListIndex = 0;
  this.autoValidate = !1;
};
V.prototype.getHelpLink = function () {
  return "https://support.google.com/tagassistant";
};
V.prototype.getAvailableTagNames = function () {
  return Object.keys(this.availableTags);
};
var oh = function () {
  var a = {};
  $c().forEach(function (b) {
    a[b.name] = "Default";
  });
  return a;
};
V.prototype.saveUserPrefs = function () {
  var a = {};
  a = ((a.ManualChecks = !this.autoValidate), (a.ShowWelcomeScreen = !1), (a.DefaultLevelOfDetail = "Fine"), a);
  ed(a);
  ed(this.availableTags);
  this.aa.go(this.j.isUrlRestricted() ? "popup.restricted-domain" : "popup.disabled");
};
V.prototype.saveUserPrefs = V.prototype.saveUserPrefs;
V.prototype.getAvailableTagNames = V.prototype.getAvailableTagNames;
V.prototype.getHelpLink = V.prototype.getHelpLink;
var ph = ["$state", "tvt.service.State", V];
var qh = angular
  .module("tvt.templates.ngpopup", [])
  .value("forceCachedTemplates", !1)
  .value("forceUncachedTemplates", !1)
  .factory("html2JsTemplatesCached", [
    "forceCachedTemplates",
    "forceUncachedTemplates",
    function (a, b) {
      return function () {
        return !b && !0;
      };
    }
  ])
  .run([
    "$templateCache",
    "html2JsTemplatesCached",
    function (a, b) {
      b() &&
        (a.put(
          "/templates/auto_validate_enabled.html",
          "Auto Validation is now enabled. Tag Assistant Legacy will automatically analyze all the\npages. If you want to see issues for the current page, please hit reload.\n"
        ),
        a.put(
          "/templates/disable.html",
          '<span>Tag Assistant Legacy is currently inactive in this tab! Click "Enable" to\n  turn it on!</span>\n'
        ),
        a.put(
          "/templates/enable.html",
          "<span>Tag Assistant Legacy has been activated and will analyze all pages on the\n  current tab. If you want to see issues for the current page,\n  please hit reload.\n</span>\n"
        ),
        a.put(
          "/templates/favorite.html",
          "<span>\n  Domain added to favorites.\n  Pages from this domain will be automatically checked.\n  If you want to see issues for the current page, please hit reload.\n</span>\n"
        ),
        a.put(
          "/templates/footer.html",
          '<div layout="row" layout-align="start center">\n  <md-button class="md-raised md-primary" ui-sref="popup.enabled"\n             ng-click="trackEvent(\'activation\', \'popup-state-enabled\')"\n             ng-if="footerCtrl.showEnable()">\n    Enable\n  </md-button>\n  <md-button class="md-raised md-primary" ui-sref="popup.begin-record"\n             ng-if="footerCtrl.showRecord()"\n             ng-click="trackEvent(\'recordings\', \'start-recording\')">\n    Record\n  </md-button>\n  <md-button class="md-raised" ui-sref="popup.disabled"\n             ng-click="footerCtrl.stopRecording(\'popup-state-disabled\')"\n             ng-if="footerCtrl.showDisable()">\n    Disable\n  </md-button>\n  <md-button class="md-raised"\n             ng-click="footerCtrl.cancelRecording();trackEvent(\'recordings\', \'cancel-recording\')"\n             ng-if="footerCtrl.showCancelRecording()">\n    Cancel Recording\n  </md-button>\n  <md-button class="md-raised" ng-if="footerCtrl.showStopRecording()"\n             ui-sref="popup.show-stats"\n             ng-click="footerCtrl.stopRecording(\'stop-recording\')">\n    Stop Recording\n  </md-button>\n  <md-button class="md-raised md-primary md-hue-1" ui-sref="popup.show-stats"\n             ng-click="trackEvent(\'recordings\', \'view-recording\')"\n             ng-if="footerCtrl.showViewRecording()" flex="35">\n    View Recording\n  </md-button>\n</div>\n'
        ),
        a.put(
          "/templates/issue_detail.html",
          '<div layout="column" layout-fill>\n  <md-toolbar class="md-hue-1"\n              layout layout-align="space-between center">\n    <div flex layout="row">\n      <md-button class="md-icon-button" ui-sref="^" aria-label="Back"\n                 ng-click="popupCtrl.changeSlideDirection(\'right\')">\n        <md-icon md-svg-icon="back"></md-icon>\n      </md-button>\n      <div ng-if="::!issueDetailCtrl.isBucketView" flex\n           layout="row"  layout-align="start center">\n        <md-icon class="issue-detail-icon-type issue-level"\n                 md-svg-src="tag-{{::tag.value}}">\n        </md-icon>\n        <span layout="column" layout-align="center start">\n          <span class="issue-detail-category issue-category">\n            {{::tag.category}}\n          </span>\n          <span class="issue-detail-label">{{::tag.label}}</span>\n        </span>\n      </div>\n      <div ng-if="::issueDetailCtrl.isBucketView" flex\n           layout="row" layout-align="start center">\n        <div class="counter bg-{{::tag.value}} issue-level">\n          <div class="counter-inner">{{::tagPosition}}</div>\n        </div>\n        <span class="issue-detail-category issue-category">{{::tag.text}}</span>\n      </div>\n    </div>\n    <span ng-if="::issueDetailCtrl.isBucketView">\n      <md-button class="md-icon-button no-margin-button"\n                 ng-disabled="::!previousTag"\n                 ng-click="popupCtrl.changeSlideDirection(\'up\')"\n                 ui-sref=".({bucketId: previousTag.id})" aria-label="Previous">\n        <md-icon md-svg-icon="up"></md-icon>\n      </md-button>\n      <md-button class="md-icon-button no-margin-button"\n                 ng-disabled="::!nextTag"\n                 ng-click="popupCtrl.changeSlideDirection(\'down\')"\n                 ui-sref=".({bucketId: nextTag.id})" aria-label="Next">\n        <md-icon md-svg-icon="down"></md-icon>\n      </md-button>\n    </span>\n    <span ng-if="::!issueDetailCtrl.isBucketView">\n      <md-button class="md-icon-button no-margin-button"\n                 ng-disabled="::!previousTag"\n                 ng-click="popupCtrl.changeSlideDirection(\'up\')"\n                 ui-sref=".({issueId: previousTag.id})" aria-label="Previous">\n        <md-icon md-svg-icon="up"></md-icon>\n      </md-button>\n      <md-button class="md-icon-button no-margin-button"\n                 ng-disabled="::!nextTag"\n                 ng-click="popupCtrl.changeSlideDirection(\'down\')"\n                 ui-sref=".({issueId: nextTag.id})" aria-label="Next">\n        <md-icon md-svg-icon="down"></md-icon>\n      </md-button>\n    </span>\n  </md-toolbar>\n\n  <md-tabs flex>\n    <md-tab ng-repeat="view in ::issueDetailCtrl.getViews(tag)"\n            md-active="issueDetailCtrl.isActiveView(view)"\n            md-on-select="issueDetailCtrl.setActiveView(view)">\n      <md-tab-label>\n        <label ng-class="issueDetailCtrl.elementHoveredMap[view]">\n          {{::view}}\n        </label>\n      </md-tab-label>\n      <md-tab-body>\n        <ng-include src="\'/templates/tag_details.html\'"></ng-include>\n      </md-tab-body>\n    </md-tab>\n  </md-tabs>\n\n  <md-chips ng-model="tag.buckets" readonly="true">\n    <md-chip-template ui-sref=".bucket({bucketId: $chip.relatedIssues[0].id})"\n                      ng-click="popupCtrl.changeSlideDirection(\'left\')"\n                      class="iob-text {{$chip.value}}">\n      <span>{{::$chip.relatedIssues.length}}</span>\n      <span>{{::$chip.text}}</span>\n    </md-chip-template>\n  </md-chips>\n\n  <ta-toggle-menu start-expanded\n                  ng-if="::issueDetailCtrl.getOptimizationIssuesForTag(\n                         tabStatus, tag).length">\n    <ta-menu-label>\n      Where to optimize\n    </ta-menu-label>\n    <ta-menu-content>\n      <md-list class="optimization-list">\n        <md-list-item ng-class="{\'grayscale\': optimization.ignored}"\n                      ng-repeat="optimization in\n                                 ::issueDetailCtrl.getOptimizationIssuesForTag(\n                                     tabStatus, tag)">\n          <md-icon class="issue-level"\n                   md-svg-src="optimization-{{::optimization.type|lowercase}}">\n          </md-icon>\n          <div class="ilo-{{::optimization.type}}" flex="75"\n               ng-mouseenter="issueDetailCtrl.highlightOptimization(\n                                  optimization)"\n               ng-mouseleave="issueDetailCtrl.resetView(optimization)">\n            <div ng-if="::optimization.valueFormat.includes(\'button\')"\n                 layout="row" layout-align="space-between center">\n              <ta-label ng-if="::optimization.label.length"\n                        tooltip="{{::optimization.hint}}"\n                        data-value-format="{{::optimization.valueFormat}}">\n                {{::optimization.label}}\n              </ta-label>\n              <md-button ng-click="triggerAction(optimization)"\n                         class="md-raised"\n                         ng-disabled="disableActions()">\n                {{::optimization.text}}\n              </md-button>\n            </div>\n            <div ng-if="::!optimization.valueFormat.includes(\'button\')"\n                 data-value-format="::optimization.valueFormat">\n              {{::optimization.text}}\n            </div>\n          </div>\n          <div flex class="tag-options md-secondary" ng-click="angular.noop"\n               layout="row" layout-align="end center" aria-label="more options">\n            <ta-ignore model="::optimization" model-type="issue"\n                       update-model-state\n                       on-click="updateIgnoredState(optimization, tabStatus)"\n                       aria-label="Toggle ignored state">\n            </ta-ignore>\n            <md-button ng-href="{{::getInfoLink(optimization)}}"\n                       target="_blank" class="md-icon-button" aria-label="More Info">\n              <md-icon md-svg-icon="help">\n                <md-tooltip>More Info</md-tooltip>\n              </md-icon>\n            </md-button>\n          </div>\n          <md-tooltip ng-if="::optimization.hint">\n            {{::optimization.hint}}\n          </md-tooltip>\n        </md-list-item>\n      </md-list>\n    </ta-menu-content>\n  </ta-toggle-menu>\n</div>\n'
        ),
        a.put(
          "/templates/issues_summary.html",
          '<div layout="column" layout-fill>\n  <md-toolbar class="md-hue-1">\n    <div class="md-toolbar-tools">\n      <h2>\n        <span>Result of Tag Analysis</span>\n      </h2>\n      <span flex></span>\n      <span>\n        {{::issuesSummaryCtrl.getTags(tabStatus).length}}\n      </span>\n      <span class="count-info">in total &nbsp;&nbsp;</span>\n      <span>\n        {{::issuesSummaryCtrl.countErrors(tabStatus)}}\n      </span>\n      <span class="count-info">errors &nbsp;</span>\n    </div>\n  </md-toolbar>\n\n  <md-list flex class="issue-list">\n    <md-list-item class="md-2-line"\n                  ng-repeat="tag in ::issuesSummaryCtrl.getTags(tabStatus)"\n                  ng-class="{\'grayscale\': tag.ignored}"\n                  ng-click="popupCtrl.changeSlideDirection(\'left\')"\n                  ui-sref=".detail({issueId: tag.id})">\n      <md-icon class="issue-level" md-svg-src="tag-{{::tag.value}}"></md-icon>\n      <span class="issue-index">{{::$index + 1}}.</span>\n      <div class="md-list-item-text" layout="column">\n        <div class="issue-category">{{::tag.category}}</div>\n        <div class="issue-label">{{::tag.label}}</div>\n      </div>\n      <div class="md-secondary" ng-click="angular.noop" flex layout="row"\n           layout-align="end center" aria-label="Tag options">\n        <ta-ignore\n           ng-click="trackEvent(\'ignoreIssue\', tag.ignored ? \'enable\' : \'disable\')"\n           model="::tag" model-type="issue" update-model-state\n           on-click="updateIgnoredState(tag, tabStatus)" class="tag-options"\n           aria-label="Toggle ignored state">\n        </ta-ignore>\n        <md-button class="md-icon-button"\n                   ng-if="::issuesSummaryCtrl.integratedWithGtar(tag.category)"\n                   ng-click="issuesSummaryCtrl.popoutDetails(tag.label)">\n          <md-icon md-svg-src="popout"></md-icon>\n          <md-tooltip>Click for detailed report</md-tooltip>\n        </md-button>\n      </div>\n    </md-list-item>\n  </md-list>\n\n  <ta-toggle-menu start-expanded\n                  ng-if="::issuesSummaryCtrl.getOptimizationIssues(tabStatus).length">\n    <ta-menu-label>\n      Where to optimize\n    </ta-menu-label>\n    <ta-menu-content>\n      <md-list class="optimization-list">\n        <md-list-item ng-class="{\'grayscale\': optimization.ignored}"\n                      ng-repeat="optimization in\n                                 ::issuesSummaryCtrl.getOptimizationIssues(tabStatus)">\n        <md-icon class="issue-level"\n                 md-svg-src="optimization-{{::optimization.type | lowercase}}">\n        </md-icon>\n        <div class="ilo-{{::optimization.type}}">\n          {{::optimization.text}}\n        </div>\n        <span flex></span>\n        <div flex class="tag-options md-secondary" ng-click="angular.noop"\n             layout="row" layout-align="end center" aria-label="more options">\n          <ta-ignore model="::optimization" model-type="issue"\n                     ng-click="trackEvent(\'ignoreIssue\', tag.ignored ? \'enable\' : \'disable\')"\n                     update-model-state\n                     on-click="updateIgnoredState(optimization, tabStatus)"\n                     aria-label="Toggle ignored state">\n          </ta-ignore>\n          <md-button ng-href="{{::getInfoLink(optimization)}}"\n                     target="_blank" class="md-icon-button" aria-label="More Info">\n            <md-icon md-svg-icon="help">\n              <md-tooltip>More Info</md-tooltip>\n            </md-icon>\n          </md-button>\n        </div>\n        <md-tooltip ng-if="::optimization.hint">\n          {{::optimization.hint}}\n        </md-tooltip>\n        </md-list-item>\n      </md-list>\n    </ta-menu-content>\n  </ta-toggle-menu>\n</div>\n'
        ),
        a.put(
          "/templates/ngpopup_views.html",
          '<md-progress-linear ng-if="refreshingData" md-theme="taux-orange">\n</md-progress-linear>\n<div id="progressbar-filler" ng-if="!refreshingData"></div>\n<md-card ng-init="popupCtrl.checkAndNotifyAdditionalPermissionsRequired()">\n  <md-card-header>\n    <md-toolbar ui-view name="header" layout-fill></md-toolbar>\n  </md-card-header>\n\n  <md-card-content>\n    <ui-view name="content"\n             class="slide-{{slideDirection}}" layout-fill></ui-view>\n  </md-card-content>\n\n  <md-card-footer>\n    <ui-view name="footer" layout-fill></ui-view>\n  </md-card-footer>\n</md-card>\n'
        ),
        a.put(
          "/templates/permissions.html",
          '<md-toast ng-controller="tvt.controller.Permissions as permissionsCtrl">\n  <span flex>Check if other extensions are blocking tags</span>\n  <md-button ng-click="permissionsCtrl.requestAdditionalPermissions()">\n    Allow\n  </md-button>\n  <md-button ng-click="permissionsCtrl.checkLater()">Later</md-button>\n</md-toast>\n'
        ),
        a.put(
          "/templates/recording_stats.html",
          '<md-toolbar class="md-hue-1" layout="row" layout-align="start center">\n  <md-button class="md-icon-button" ng-click="goToLastPopupViewState()">\n    <md-icon md-svg-icon="back"></md-icon>\n  </md-button>\n  <span>Recording Stats</span>\n</md-toolbar>\n<div ng-if="recordingStatsCtrl.hasRecordings()">\n  <div layout-margin layout="column">\n    <span> Your latest recordings:</span>\n    <span>{{recordingStatsCtrl.getNumRecordedPages()}} Pages tracked</span>\n    <span>{{recordingStatsCtrl.getNumRecordedTags()}} Tags were fired</span>\n  </div>\n  <div layout layout-align="start">\n    <md-button class="md-raised md-primary"\n               ng-click="recordingStatsCtrl.showFullReport()">\n      Show Full report\n    </md-button>\n    <md-button class="md-raised md-primary md-hue-1"\n               ui-sref="popup.begin-record({resume: true})"\n               ng-if="recordingStatsCtrl.showResumeRecord()">\n      Resume recording\n    </md-button>\n    <md-button class="md-raised md-primary md-hue-1"\n               ui-sref="popup.begin-record({resume: true})"\n               ng-if="recordingStatsCtrl.showResumeRecordFromHere()">\n      Resume recording from here\n    </md-button>\n  </div>\n</div>\n<div ng-if="!recordingStatsCtrl.hasRecordings()">\n  <p layout-margin>\n    No pages were tracked during your latest recording session. If you would\n    like to upload your own recording (.har) click "Upload Report",\n    or create a new recording.\n  </p>\n  <md-button class="md-raised md-primary"\n             ng-click="recordingStatsCtrl.showFullReport()">\n    Upload Har\n  </md-button>\n</div>\n'
        ),
        a.put("/templates/remove_favorite.html", "<span>\n  Domain removed from favorites\n</span>\n"),
        a.put(
          "/templates/restricted_domain.html",
          "<h3>Welcome to Tag Assistant Legacy</h3>\n<p>\n  Tag Assistant Legacy helps to troubleshoot installation of various Google tags\n  including Google Analytics, Google Tag Manager and more.<br/><br/>\n  Just navigate to any page and Tag Assistant Legacy will tell you which tags are\n  present, report any errors we find and suggest improvements that can be made\n  to your implementation. Most Google tags are checked including Google\n  Analytics, Google Ads Conversion Tracking, Google Tag Manager and more.<br/></br>\n  Learn about the new features in this\n  <a href='https://www.youtube.com/watch?v=4AqanTBA9X4' target=\"_blank\">\n    Video.\n  </a>\n</p>\n"
        ),
        a.put(
          "/templates/start_recording.html",
          '<div ng-if="recordingEnabledCtrl.recordingActiveOnOtherTab()" layout="column">\n  <span layout-margin>\n    Recording is already active on a different tab. Please stop that recording\n    first.\n  </span>\n  <div layout="row" layout-align="start center">\n    <md-button class="md-raised" ng-click="recordingEnabledCtrl.switchTabs()">\n      Take me to that tab\n    </md-button>\n    <md-button class="md-raised" ng-click="goToLastPopupViewState()">\n      Cancel\n    </md-button>\n  </div>\n</div>\n\n<div ng-if="recordingEnabledCtrl.recordingActiveOnCurrentTab()">\n  Recording has been activated and will be available after refresh.\n</div>\n'
        ),
        a.put(
          "/templates/tag_details.html",
          '<div class="view-content">\n  <div ng-repeat="issue in getInfoIssuesForTag(tabStatus, tag, view)"\n       id="{{::issue.id}}" ng-switch="issue.valueFormat" layout-margin>\n\n    \n    <div ng-switch-when="button_action" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="button_primary" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised md-primary no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="button_inactive" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="update_button" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n\n    <div ng-switch-when="textfield" ng-if="app==\'popup\'"\n         layout-fill layout="row" layout-align="start center">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-input-container>\n        <input type="text" ng-model="issue.value"\n               ng-blur="triggerUpdate(issue)" aria-label="{{::issue.text}}">\n      </md-input-container>\n    </div>\n\n    \n    <div ng-switch-when="dropdown" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-select ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                 aria-label="{{::issue.text}}">\n        <md-option ng-repeat="option in issue.relatedIssues"\n                   ng-value="option.text" ng-if="option.valueFormat==\'option\'">\n          {{option.label}}\n        </md-option>\n      </md-select>\n    </div>\n\n    <div ng-switch-when="dropdown_inactive" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-select ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                 ng-disabled="true" aria-label="{{::issue.text}}">\n        <md-option ng-repeat="option in issue.relatedIssues"\n                   ng-value="option.text" ng-if="option.valueFormat==\'option\'">\n          {{option.label}}\n        </md-option>\n      </md-select>\n    </div>\n\n    <div ng-switch-when="checkbox" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-checkbox ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                   ng-true-value="\'true\'" ng-false-value="\'\'"\n                   aria-label="{{::issue.text}}"></md-checkbox>\n    </div>\n    \n\n    <div ng-switch-when="collection" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-html-table items="::issue.value"></ta-html-table>\n    </div>\n    <div ng-switch-when="copyable" layout-fill layout="row">\n      \n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-copyable-text>{{::issue.value}}</ta-copyable-text>\n    </div>\n    <div ng-switch-when="esc_json" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-escape-json items="::issue.value"></ta-escape-json>\n    </div>\n    <div ng-switch-when="json" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="{{::tabStatus.getScheme()}}">\n      </ta-code-snippet>\n    </div>\n    <div ng-switch-when="linked" layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-linked-text info-link="{{::getInfoLink(issue)}}">\n        {{::issue.value}}\n      </ta-linked-text>\n    </div>\n    <div ng-switch-when="link_expandable" layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      \n      <ta-expandable-link link-text="{{::issue.label | decodeValue | decodeValue}}"\n                          query-info-detail-map="::getQueryInfoDetailMap(issue)">\n      </ta-expandable-link>\n    </div>\n    <div ng-switch-when="map" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-escape-json items="::issue.value" flex></ta-escape-json>\n    </div>\n    <div ng-switch-when="snippet_html" layout-fill layout="column">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="{{::tabStatus.getScheme()}}"\n                       flex layout-margin></ta-code-snippet>\n    </div>\n    <div ng-switch-when="snippet_js" layout-fill layout="column">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="::tabStatus.getScheme()" flex layout-margin>\n      </ta-code-snippet>\n    </div>\n    <div ng-switch-default layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-value>{{::issue.value | decodeValue}}</ta-value>\n    </div>\n  </div>\n</div>\n'
        ),
        a.put(
          "/templates/welcome.html",
          '<md-card>\n  <md-card-header layout="column" layout-align="space-around center">\n    <md-icon md-svg-icon="gta" aria-label="Google Tag Assistant Legacy"></md-icon>\n    <md-card-header-text layout="column" layout-align="space-around center">\n      <div class="md-subhead" layout-margin>Welcome To</div>\n      <div class="md-headline" layout layout-align="space-around center">\n        <span>Tag Assistant Legacy by</span>\n        <md-icon md-svg-icon="google" aria-label="Google"></md-icon>\n      </div>\n      <div class="md-subhead">\n        <span>Tag Assistant is changing.&nbsp;</span>\n        <a href="https://support.google.com/tagassistant/answer/10042782" target="_blank">\n          Learn more\n        </a>\n      </div>\n    </md-card-header-text>\n  </md-card-header>\n\n  <md-card-content layout="column">\n    <p>\n      To get started tell us which of these tags you want Tag Assistant Legacy to\n      check for:\n    </p>\n    <div id="tagslist-container">\n      <div id="list-{{::$index}}" class="tag-list" layout="column"\n           layout-align="space-between" layout-fill\n           ng-repeat="tagsChunk in ::welcomeCtrl.getAvailableTagNames() |\n                      chunk:6"\n           ng-show="welcomeCtrl.visibleTagListIndex == $index">\n        <div layout="row" layout-wrap>\n          <md-checkbox flex="45" ng-model="welcomeCtrl.availableTags[tagName]"\n                       ng-true-value="\'Default\'" ng-false-value="\'Hidden\'"\n                       ng-repeat="tagName in ::tagsChunk"\n                       class="md-primary">\n            {{::tagName}}\n          </md-checkbox>\n        </div>\n\n        <div layout="row" layout-align="space-between center">\n          <md-button ng-disabled="$first" class="mini-button"\n                     ng-click="welcomeCtrl.visibleTagListIndex=$index - 1">\n            Previous\n          </md-button>\n          <md-button ng-disabled="$last" class="mini-button"\n                     ng-click="welcomeCtrl.visibleTagListIndex=$index + 1">\n            Next\n          </md-button>\n        </div>\n      </div>\n    </div>\n\n    <md-card-actions layout layout-align="space-between center">\n      <md-switch ng-model="welcomeCtrl.autoValidate"\n                 aria-label="Validate all pages"\n                 class="md-primary">\n        Validate all pages\n      </md-switch>\n      <md-button class="md-raised md-primary"\n                 ng-click="welcomeCtrl.saveUserPrefs()">\n        Done\n      </md-button>\n    </md-card-actions>\n  </md-card-content>\n\n  <md-card-footer layout layout-align="space-between center">\n    <md-button aria-label="Help"\n               ng-href="{{::welcomeCtrl.getHelpLink()}}" target="_blank">\n      <md-icon md-svg-icon="help"></md-icon>\n      <span>Need help ?</span>\n    </md-button>\n    <md-button aria-label="More Options"\n               ng-href="/options.html" target="_blank">\n      <md-icon md-svg-icon="options"></md-icon>\n      <span>More Options</span>\n    </md-button>\n  </md-card-footer>\n</md-card>\n'
        ));
    }
  ]);
var rh = angular
  .module("tvt.templates.components", [])
  .value("forceCachedTemplates", !1)
  .value("forceUncachedTemplates", !1)
  .factory("html2JsTemplatesCached", [
    "forceCachedTemplates",
    "forceUncachedTemplates",
    function (a, b) {
      return function () {
        return !b && !0;
      };
    }
  ])
  .run([
    "$templateCache",
    "html2JsTemplatesCached",
    function (a, b) {
      b() &&
        (a.put(
          "/code_snippet/code_snippet.ng",
          '<div class="snippet-container">\n  <div ng-repeat="line in ::codeLines">\n    <span ng-repeat="span in ::line.spans" class="{{::span.type}}">\n      <span ng-if="::span.type == \'html-attribute-url\'">\n        <a href="{{::scheme && span.text.indexOf(\'//\') == 1 ?\n                     scheme + \':\' + span.text.substring(1, span.text.length -1) :\n                     span.text.substring(1, span.text.length -1)}}">\n          {{::span.text}}\n        </a>\n      </span>\n      <span ng-if="::span.type != \'html-attribute-url\'">\n        {{::span.text}}\n      </span>\n    </span>\n  </div>\n</div>\n'
        ),
        a.put(
          "/datetime/datetime.ng",
          '<span>\n  <span>{{::dateTimeController.getDateTimeString()}}</span>\n  <span ng-if="dateTimeController.addIntervalFrom">\n    ({{::dateTimeController.getIntervalDurationString()}} {{::dateTimeController.suffix}})\n  </span>\n</span>\n'
        ),
        a.put(
          "/escape_json/escape_json.ng",
          '<div layout="row" layout-align="space-between start">\n  <div flex="80">\n    <ta-html-table ng-show="escJsonCtrl.showFormatted"\n                   items="::escJsonCtrl.items"></ta-html-table>\n    <span ng-show="escJsonCtrl.showRaw">\n      <span ng-repeat="item in ::escJsonCtrl.items">\n        <span>{{::item.key}}:{{::item.value}}</span>\n        <span ng-if="::!$last">,</span>\n      </span>\n    </span>\n  </div>\n  <ta-format-buttons></ta-format-buttons>\n</div>\n'
        ),
        a.put(
          "/expandable_link/expandable_link.ng",
          '<div layout="row" layout-align="space-between start">\n  <div class="expandable-text" layout-fill>\n    <div ng-click="expLinkCtrl.showTables = !expLinkCtrl.showTables">\n      <ta-truncated-text string="{{::expLinkCtrl.linkText}}"></ta-truncated-text>\n    </div>\n    <span ng-show="expLinkCtrl.showTables">\n      <ta-html-table items="::expLinkCtrl.getUriInfo()"></ta-html-table>\n      <ta-html-table items="::expLinkCtrl.getUriQueryInfo()"\n                     show-description="::expLinkCtrl.hasQueryInfoDetail()">\n      </ta-html-table>\n    </span>\n  </div>\n</div>\n'
        ),
        a.put(
          "/format_buttons/format_buttons.ng",
          '<div layout layout-align="center center">\n  <md-button class="md-icon-button md-raised" ng-click="formatButtonsCtrl.showRawContent()">\n    <md-icon md-svg-icon="inline" aria-label="Inline"></md-icon>\n  </md-button>\n  <md-button class="md-icon-button md-raised" ng-click="formatButtonsCtrl.showFormattedContent()">\n    <md-icon md-svg-icon="table" aria-label="Table"></md-icon>\n  </md-button>\n</div>\n'
        ),
        a.put(
          "/html_table/html_table.ng",
          '<table ng-if="::tableCtrl.items.length">\n  <tr ng-repeat="item in ::tableCtrl.items" ng-if="::item.value || !tableCtrl.hideEmpty">\n    <td>{{::item.key}}</td>\n    <td ng-if="::tableCtrl.showDescription">{{::item.description}}</td>\n    <td>{{::item.value}}</td>\n  </tr>\n</table>\n'
        ),
        a.put(
          "/ignore_button/ignore_button.ng",
          '<md-button class="md-icon-button" ng-show="ignoreCtrl.ignored"\n           aria-label="Remove from Ignore list">\n  <md-icon md-svg-icon="add"></md-icon>\n  <md-tooltip>Remove from Ignore list</md-tooltip>\n</md-button>\n<md-button class="md-icon-button" ng-hide="ignoreCtrl.ignored"\n           aria-label="Add to Ignore list">\n  <md-icon md-svg-icon="remove"></md-icon>\n  <md-tooltip>Add to Ignore list</md-tooltip>\n</md-button>\n'
        ),
        a.put(
          "/label/label.ng",
          '<div>\n  <span ng-transclude></span>\n  <md-tooltip ng-if="::tooltip">{{::tooltip}}</md-tooltip>\n</div>\n'
        ),
        a.put(
          "/linked_text/linked_text.ng",
          '<a class="md-button" ng-href="{{::infoLink}}" target="_blank"\n   md-no-ink ng-transclude></a>\n'
        ),
        a.put(
          "/toggle_menu/toggle_menu.ng",
          '<ta-menu-label>\n  <md-button class="md-no-style ta-toggle-button" layout-fill layout-padding\n      ng-click="toggleMenuCtrl.toggle($event)">\n    <div flex layout="row" layout-align="start center">\n      <span aria-hidden="true">\n        <md-icon md-svg-icon="right"></md-icon>\n      </span>\n      <div ng-transclude="label" class="ta-toggle-label" flex>\n      </div>\n    </div>\n  </md-button>\n</ta-menu-label>\n<ta-menu-content data-ng-show="toggleMenuCtrl.isExpanded()"\n    ng-transclude="content">\n</ta-menu-content>\n'
        ),
        a.put(
          "/truncated_text/truncated_text.ng",
          '<span ng-if="::!truncatedTextCtrl.shouldRenderButton()">\n  {{::truncatedTextCtrl.string}}\n</span>\n<span ng-if="::truncatedTextCtrl.shouldRenderButton()"\n      ng-click="truncatedTextCtrl.truncateEnabled = !truncatedTextCtrl.truncateEnabled"\n      class="truncated-content">\n  <span>{{truncatedTextCtrl.getTruncatedString()}}</span>\n  <md-icon md-svg-icon="right"\n           class="md-accent"\n           ng-show="truncatedTextCtrl.truncateEnabled" aria-hidden="true">\n  </md-icon>\n  <md-icon md-svg-icon="down"\n           class="md-accent"\n           ng-hide="truncatedTextCtrl.truncateEnabled" aria-hidden="true">\n  </md-icon>\n</span>\n'
        ));
    }
  ]);
function sh() {
  return {
    restrict: "EA",
    scope: { timestamp: "@", addIntervalFrom: "@", suffix: "@" },
    templateUrl: "/datetime/datetime.ng",
    controller: th,
    controllerAs: "dateTimeController",
    bindToController: !0
  };
}
sh.fc = "taDateTime";
sh.ac = "MMM DD, YYYY hh:mm:ss A";
var th = function () {};
th.prototype.getDateTimeString = function () {
  return moment(this.timestamp, "x").format(sh.ac);
};
th.prototype.getIntervalDurationString = function () {
  var a = moment.duration(moment(this.timestamp, "x").diff(moment(this.addIntervalFrom, "x"))),
    b = [];
  ["hours", "minutes", "seconds"].forEach(function (c) {
    a.get(c) && (b.push(a.get(c)), b.push(c));
  });
  return b.join(" ");
};
th.prototype.getIntervalDurationString = th.prototype.getIntervalDurationString;
th.prototype.getDateTimeString = th.prototype.getDateTimeString;
var uh = function () {
  this.showRaw = !1;
  this.showFormatted = !0;
};
w("EscapeJsonController", uh);
uh.prototype.Rc = function () {
  this.showRaw = !0;
  this.showFormatted = !1;
};
uh.prototype.Qc = function () {
  this.showRaw = !1;
  this.showFormatted = !0;
};
function W() {
  this.showTables = !1;
  this.ob = this.nb = null;
}
W.prototype.getUriInfo = function () {
  if (!this.nb) {
    var a = J(this.linkText);
    this.nb = [
      { key: "Hostname", value: a.L() },
      { key: "Protocol", value: a.getScheme() },
      { key: "Path", value: a.G },
      { key: "Hash", value: a.T }
    ];
  }
  return this.nb;
};
W.prototype.getUriInfo = W.prototype.getUriInfo;
W.prototype.getUriQueryInfo = function () {
  if (!this.ob) {
    var a = J(encodeURI(this.linkText));
    this.ob = a.C.U().map(function (b) {
      var c = "";
      try {
        c = this.Pb[b].description || "";
      } catch (d) {}
      return { key: b, value: a.C.get(b), description: c };
    }, this);
  }
  return this.ob;
};
W.prototype.getUriQueryInfo = W.prototype.getUriQueryInfo;
W.prototype.hasQueryInfoDetail = function () {
  return !!Object.keys(this.Pb).length;
};
W.prototype.hasQueryInfoDetail = W.prototype.hasQueryInfoDetail;
var vh = function (a) {
  this.Z = a;
};
w("FormatButtonsController", vh);
vh.prototype.showRawContent = function () {
  this.Z.$emit("SHOW_RAW");
};
vh.prototype.showRawContent = vh.prototype.showRawContent;
vh.prototype.showFormattedContent = function () {
  this.Z.$emit("SHOW_FORMATTED");
};
vh.prototype.showFormattedContent = vh.prototype.showFormattedContent;
var wh = function (a) {
  this.hideEmpty = angular.isDefined(a.hideEmpty);
  this.showDescription = this.showDescription || !1;
};
w("HtmlTableController", wh);
var xh = function (a, b, c) {
  this.Z = a;
  this.F = b;
  this.Yc = angular.isDefined(c.updateModelState);
  this.ignored = !1;
  this.Ga = null;
};
w("IgnoreButtonController", xh);
xh.prototype.ma = function (a, b) {
  this.ignored = b;
  this.Yc && (this.model.ignored = b);
  if (this.onClick) this.onClick();
};
xh.prototype.Vc = function (a) {
  a.source = "ta-ignore";
  a.modelType = this.modelType;
  this.Ga ? this.F.$broadcast(this.Ga, !this.ignored) : this.ma(null, !this.ignored);
};
var X = function (a, b, c) {
  this.Z = a;
  this.Cb = b;
  this.wa = angular.isDefined(c.startExpanded);
  this.Aa = null;
  this.Xa = !1;
};
w("ToggleMenuCtrl", X);
X.prototype.ma = function (a) {
  this.wa = a;
  this.Cb.toggleClass("expanded", a);
};
X.prototype.toggle = function (a) {
  a.stopImmediatePropagation();
  (!sf(a.target) && "TA-MENU-LABEL" != a.target.tagName) || this.Xa || (this.Aa ? this.Z.$emit(this.Aa, !this.wa) : this.ma(!this.wa));
};
X.prototype.toggle = X.prototype.toggle;
X.prototype.Tc = function (a) {
  this.Xa = a;
  this.Cb.find("ta-menu-label").children().attr("disabled", a);
  a && this.ma(!1);
};
X.prototype.isExpanded = function () {
  return this.wa;
};
X.prototype.isExpanded = X.prototype.isExpanded;
X.prototype.Bc = function () {
  return this.Xa;
};
X.prototype.isDisabled = X.prototype.Bc;
var yh = function () {
  this.maxLength = this.maxLength || 100;
  this.tail = this.tail || "...";
  this.truncateEnabled = !0;
  this.wordwise = this.wordwise || !1;
  this.alwaysShowIcon = this.alwaysShowIcon || !1;
};
yh.prototype.shouldRenderButton = function () {
  return this.alwaysShowIcon || this.string.length > this.maxLength;
};
yh.prototype.shouldRenderButton = yh.prototype.shouldRenderButton;
yh.prototype.getTruncatedString = function () {
  if (!this.truncateEnabled || this.string.length <= this.maxLength) return this.string;
  var a = this.string.substr(0, this.maxLength);
  if (this.wordwise) {
    var b = a.lastIndexOf(" ");
    -1 != b && (a = a.substr(0, b));
  }
  return a + this.tail;
};
yh.prototype.getTruncatedString = yh.prototype.getTruncatedString;
var Y = angular.module("tvt.components", []);
Y.directive("taLabel", [
  function () {
    return { restrict: "EA", scope: { tooltip: "@" }, transclude: !0, templateUrl: "/label/label.ng" };
  }
]);
Y.directive("taLinkedText", [
  function () {
    return { restrict: "EA", transclude: !0, scope: { infoLink: "@" }, templateUrl: "/linked_text/linked_text.ng" };
  }
]);
Y.directive("taValue", [
  function () {
    return { restrict: "EA", transclude: !0, template: "<span ng-transclude></span>" };
  }
]);
Y.directive("taCopyableText", [
  function () {
    return { restrict: "EA", transclude: !0, scope: {}, template: '<div class="text-ids" ng-transclude></div>' };
  }
]);
Y.directive("taEscapeJson", [
  function () {
    return {
      restrict: "EA",
      scope: { items: "=" },
      templateUrl: "/escape_json/escape_json.ng",
      link: function (a, b, c, d) {
        a.$on("SHOW_RAW", Ba(d.Rc, d));
        a.$on("SHOW_FORMATTED", Ba(d.Qc, d));
      },
      controller: uh,
      controllerAs: "escJsonCtrl",
      bindToController: !0
    };
  }
]);
Y.directive("taHtmlTable", [
  function () {
    return {
      restrict: "EA",
      scope: { items: "=", showDescription: "=?" },
      templateUrl: "/html_table/html_table.ng",
      controller: ["$attrs", wh],
      controllerAs: "tableCtrl",
      bindToController: !0
    };
  }
]);
Y.directive("taExpandableLink", [
  function () {
    return {
      restrict: "EA",
      scope: { linkText: "@", Pb: "=queryInfoDetailMap" },
      templateUrl: "/expandable_link/expandable_link.ng",
      controller: W,
      controllerAs: "expLinkCtrl",
      bindToController: !0
    };
  }
]);
Y.directive("taFormatButtons", [
  function () {
    return {
      restrict: "EA",
      templateUrl: "/format_buttons/format_buttons.ng",
      controller: ["$scope", vh],
      controllerAs: "formatButtonsCtrl"
    };
  }
]);
Y.directive("taCodeSnippet", [
  function () {
    return { restrict: "EA", scope: { codeLines: "=", scheme: "@" }, templateUrl: "/code_snippet/code_snippet.ng" };
  }
]);
Y.directive("taIgnore", [
  function () {
    return {
      restrict: "E",
      scope: { model: "=", modelType: "@", onClick: "&" },
      templateUrl: "/ignore_button/ignore_button.ng",
      link: function (a, b, c, d) {
        b.parent().hasClass("md-list-item-inner") &&
          ((b.hasClass("md-secondary") && b.attr("ng-click")) ||
            console.warn(
              'ta-ignore will not work properly inside md-list-item without "md-secondary" class and "ng-click" attribute defined on it.'
            ));
        b.on("click", d.Vc.bind(d));
        d.ignored = d.model.ignored;
        angular.isDefined(c.broadcastEvent) && ((d.Ga = c.broadcastEvent), a.$on(d.Ga, d.ma.bind(d)));
      },
      controller: ["$scope", "$rootScope", "$attrs", xh],
      controllerAs: "ignoreCtrl",
      bindToController: !0
    };
  }
]);
Y.directive("taToggleMenu", [
  function () {
    return {
      controller: ["$scope", "$element", "$attrs", X],
      controllerAs: "toggleMenuCtrl",
      bindToController: !0,
      restrict: "E",
      scope: { registerTo: "=?" },
      transclude: { label: "taMenuLabel", content: "taMenuContent" },
      templateUrl: "/toggle_menu/toggle_menu.ng",
      link: function (a, b, c, d) {
        angular.isDefined(c.monitorEvent) &&
          ((d.Aa = c.monitorEvent),
          a.$on(d.Aa, function (e, f) {
            d.ma(f);
          }),
          angular.isDefined(d.registerTo) && d.registerTo[d.Aa].push({ isExpanded: d.isExpanded.bind(d) }));
        d.ma(d.wa);
        c.$observe("disabled", d.Tc.bind(d));
      }
    };
  }
]);
Y.directive("taTruncatedText", [
  function () {
    return {
      restrict: "E",
      scope: { string: "@", maxLength: "=?", tail: "@?", wordwise: "=?", alwaysShowIcon: "=?" },
      templateUrl: "/truncated_text/truncated_text.ng",
      controller: ["$attrs", yh],
      controllerAs: "truncatedTextCtrl",
      bindToController: !0
    };
  }
]);
Y.directive(sh.fc, [sh]);
var zh = angular.module("tvt.module.theme", ["ngMaterial"]);
zh.config([
  "$mdThemingProvider",
  function (a) {
    a.definePalette("ta-background", a.extendPalette("grey", { 300: "E0E0E0", 200: "EEEEEE", 100: "F5F5F5", 50: "FAFAFA", 0: "FFFFFF" }));
    a.theme("taux")
      .primaryPalette("blue-grey", { default: "500", "hue-1": "50" })
      .accentPalette("blue", { default: "500" })
      .backgroundPalette("ta-background", { default: "100", "hue-3": "100" });
    a.setDefaultTheme("taux");
    a.theme("taux-orange").primaryPalette("orange");
  }
]);
var Ah = function (a) {
  return a.infoLink && 0 != a.infoLink.lastIndexOf("#", 0) ? a.infoLink : Qa(Cd(a).infoLink + a.infoLink);
};
var Bh = fa(["https://ssl.google-analytics.com/analytics.js"]),
  Ch = fa(["https://ssl.google-analytics.com/ga.js"]);
function Dh(a, b, c) {
  b
    ? ((function () {
        window.GoogleAnalyticsObject = "ga";
        window.ga =
          window.ga ||
          function () {
            window.ga.q = window.ga.q || [];
            window.ga.q.push(arguments);
          };
        window.ga.be = 1 * new Date();
        var d = qf();
        d.async = !0;
        bg(d, Mf(Bh));
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
        var d = qf();
        d.type = "text/javascript";
        d.async = !0;
        bg(d, Mf(Ch));
        var e = document.getElementsByTagName("SCRIPT")[0];
        e.parentNode.insertBefore(d, e);
      })());
}
var Eh = function (a, b, c, d, e) {
  a.trackEvent = this.Wc;
  this.F = a;
  this.Z = b;
  this.Ja = c;
  this.j = d;
  this.Ac = e;
  b.goToLastPopupViewState = d.goToLastPopupViewState.bind(d);
  b.updateIgnoredState = this.Xc.bind(this);
  b.getInfoLink = Ah;
  Dh("UA-33463431-1");
  Dh("UA-63385424-3", !0, "ta-extension-report");
};
Eh.prototype.Wc = function (a, b) {
  _gaq.push(["_trackEvent", a, b, "ext"]);
  ga("send", "event", a, b, "ext");
};
Eh.prototype.checkAndNotifyAdditionalPermissionsRequired = function () {
  if (!this.Ac) {
    var a = G("CheckPermissionsLater");
    (void 0 !== a && a) ||
      this.Ja.show({
        templateUrl: "/templates/permissions.html",
        hideDelay: 0,
        position: "top",
        parent: document.querySelector("#popup-wrapper")
      });
  }
};
Eh.prototype.changeSlideDirection = function (a) {
  this.F.slideDirection = a;
};
Eh.prototype.Xc = function (a, b) {
  Zc(Ad(a, b.L()), a.ignored);
  this.j.da || this.F.$broadcast("refreshRequired");
};
Eh.prototype.changeSlideDirection = Eh.prototype.changeSlideDirection;
Eh.prototype.checkAndNotifyAdditionalPermissionsRequired = Eh.prototype.checkAndNotifyAdditionalPermissionsRequired;
var Fh = ["$rootScope", "$scope", "$mdToast", "tvt.service.State", "hasRequiredPermissions", Eh],
  Gh = function (a) {
    return Yg(a);
  };
var Z = angular.module("tvt.module.ngpopup", ["ngMaterial", "ui.router", "ngAnimate", Y.name, rh.name, Ug.name, qh.name, bh.name, zh.name]),
  Hh = /^\s*(https?|chrome-extension):/;
Z.filter("decodeValue", function () {
  return function (a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
      return a;
    }
  };
});
Z.service("tvt.service.Background", sb);
Z.service("tvt.service.Data", Jg);
Z.service("tvt.service.Permissions", Zg);
Z.service("tvt.service.Poller", Ia);
Z.service("tvt.service.State", Qg);
Z.controller("tvt.controller.Footer", Rg);
Z.controller("tvt.controller.IssueDetail", eh);
Z.controller("tvt.controller.IssuesSummary", ih);
Z.controller("tvt.controller.Permissions", ah);
Z.controller("tvt.controller.Popup", Fh);
Z.controller("tvt.controller.RecordingEnabled", lh);
Z.controller("tvt.controller.RecordingStats", mh);
Z.controller("tvt.controller.Welcome", ph);
Z.filter(vb.Ta, function () {
  return vb;
});
var Ih = {
  add: "/images/add_circle_outline.svg",
  back: "/images/back.svg",
  collapse: "/images/ic_unfold_less.svg",
  community: "/images/communities_green.svg",
  down: "/images/ic_chevron_down.svg",
  expand: "/images/ic_unfold_more.svg",
  gta: "/images/tag_assistant.svg",
  help: "/images/help.svg",
  inline: "/images/ic_view_headline.svg",
  left: "/images/ic_chevron_left.svg",
  "optimization-error": "/images/ic_suggestion_red.svg",
  "optimization-suggestion": "/images/ic_suggestion_blue.svg",
  "optimization-warning": "/images/ic_suggestion_yellow.svg",
  "optimization-working": "/images/ic_suggestion_green.svg",
  options: "/images/settings.svg",
  popout: "/images/ic_launch_24px.svg",
  refresh: "/images/ic_refresh.svg",
  remove: "/images/remove_circle_outline.svg",
  right: "/images/ic_chevron_right.svg",
  table: "/images/ic_view_list.svg",
  "tag-not-working": "/images/ic_tag_assistant_red.svg",
  "tag-working": "/images/ic_tag_assistant_green.svg",
  "tag-working-with-suggestions": "/images/ic_tag_assistant_blue.svg",
  "tag-working-with-warnings": "/images/ic_tag_assistant_yellow.svg",
  up: "/images/ic_chevron_up.svg"
};
Z.config([
  "$mdIconProvider",
  function (a) {
    wb(Ih, function (b, c) {
      a.icon(c, b);
    });
  }
]);
Z.config([
  "$compileProvider",
  function (a) {
    a.aHrefSanitizationWhitelist(Hh).debugInfoEnabled(!1);
  }
]);
var Jh = {
  "content@popup": {
    controller: "tvt.controller.IssueDetail",
    controllerAs: "issueDetailCtrl",
    templateUrl: "/templates/issue_detail.html"
  }
};
Z.config([
  "$stateProvider",
  function (a) {
    a.state("welcome", {
      url: "/welcome",
      controller: "tvt.controller.Welcome",
      controllerAs: "welcomeCtrl",
      templateUrl: "/templates/welcome.html"
    })
      .state("popup", {
        url: "/popup",
        abstract: !0,
        views: {
          "": { templateUrl: "/templates/ngpopup_views.html", controller: "tvt.controller.Popup", controllerAs: "popupCtrl" },
          "header@popup": { template: "<ta-header></ta-header>" },
          "footer@popup": { templateUrl: "/templates/footer.html", controller: "tvt.controller.Footer", controllerAs: "footerCtrl" }
        },
        resolve: { hasRequiredPermissions: ["tvt.service.Permissions", Gh] }
      })
      .state("popup.disabled", { url: "/disabled", views: { "content@popup": { templateUrl: "/templates/disable.html" } } })
      .state("popup.enabled", { url: "/enabled", views: { "content@popup": { templateUrl: "/templates/enable.html" } } })
      .state("popup.favorite", { url: "/favorite", views: { "content@popup": { templateUrl: "/templates/favorite.html" } } })
      .state("popup.remove-favorite", {
        url: "/favoriteRemoved",
        views: { "content@popup": { templateUrl: "/templates/remove_favorite.html" } }
      })
      .state("popup.autovalidate", {
        url: "/autoValidate",
        views: { "content@popup": { templateUrl: "/templates/auto_validate_enabled.html" } }
      })
      .state("popup.restricted-domain", {
        url: "/restrictedDomain",
        views: { "content@popup": { templateUrl: "/templates/restricted_domain.html" } }
      })
      .state("popup.begin-record", {
        url: "/beginRecord?resume",
        views: {
          "content@popup": {
            templateUrl: "/templates/start_recording.html",
            controller: "tvt.controller.RecordingEnabled",
            controllerAs: "recordingEnabledCtrl"
          }
        }
      })
      .state("popup.show-stats", {
        url: "/recordingStats",
        views: {
          "content@popup": {
            controller: "tvt.controller.RecordingStats",
            controllerAs: "recordingStatsCtrl",
            templateUrl: "/templates/recording_stats.html"
          }
        },
        resolve: { recordingStats: ["tvt.service.Data", nh] }
      })
      .state("popup.issues", {
        url: "/issues",
        views: {
          "content@popup": {
            controller: "tvt.controller.IssuesSummary",
            controllerAs: "issuesSummaryCtrl",
            templateUrl: "/templates/issues_summary.html"
          }
        },
        resolve: { tabStatus: ["tvt.service.Data", jh] }
      })
      .state("popup.issues.detail", {
        url: "/:issueId",
        views: Jh,
        resolve: {
          selectedTag: ["tabStatus", "$stateParams", "$q", fh],
          selectedBucket: function () {
            return null;
          }
        }
      })
      .state("popup.issues.detail.bucket", {
        url: "/:bucketId",
        views: Jh,
        resolve: { selectedBucket: ["selectedTag", "$stateParams", gh] }
      });
  }
]);
Z.run([
  "$rootScope",
  "$window",
  "$q",
  "$state",
  "tvt.service.State",
  function (a, b, c, d, e) {
    a.app = "popup";
    a.refreshingData = !1;
    a.isInternal = !1;
    a.$on("refreshRequired", function () {
      return (a.refreshingData = !0);
    });
    a.$on("resyncRequired", function () {
      return (a.refreshingData = !0);
    });
    a.$on("dataRefreshed", function () {
      return (a.refreshingData = !1);
    });
    b.addEventListener("unload", function () {
      if (d.current.name) {
        var h = chrome.extension.getBackgroundPage();
        h && h.savePopupViewState(a.tabId, d.current.name, d.params, a.lastActiveView);
      }
    });
    var f = c.defer();
    f.promise.then(v(Kh, a, d, e));
    var g = a.$on("$locationChangeSuccess", function (h, k) {
      g();
      var m = null,
        l = null;
      try {
        var p = J(k);
        m = p.C.get("tabId");
        l = p.C.get("url");
      } catch (O) {
        console.log("Unable to parse popup uri.");
      }
      m && l
        ? f.resolve({ id: m, url: l })
        : (h.preventDefault(),
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (O) {
            f.resolve({ id: O[0].id, url: O[0].url });
          }));
    });
  }
]);
var Kh = function (a, b, c, d) {
  a.tabId = parseInt(d.id, 10);
  a.state = b;
  d = Lg(c, d.url);
  G("ShowWelcomeScreen")
    ? b.go("welcome")
    : d.then(function () {
        if (c.isUrlRestricted()) b.go("popup.restricted-domain");
        else {
          var e = c.Ia;
          a.lastActiveView = e && e.view;
          var f = c.R;
          e = e && -1 < e.name.indexOf("issues");
          Pg(c)
            ? (a.$broadcast("resyncRequired"),
              e
                ? c.goToLastPopupViewState().catch(function () {
                    return b.go(Ka[f]);
                  })
                : b.go("popup.issues"))
            : b.go(Ka[f]);
        }
      });
};
(function (a, b) {
  Rc = null;
  Qc = {};
  void 0 !== chrome && void 0 !== chrome.storage
    ? chrome.storage.local.get(null, function (c) {
        Vc(c);
        Yc(a, b);
      })
    : F["Options initialized to default values."] || (console.log("No chrome storage available."), Wc(), a());
})(function () {
  angular.bootstrap(document.body, [Z.name], { strictDi: !0 });
});
window.NG_BOOTSTRAP_IS_COMPILED = !1;
w("ng.safehtml.googSceHelper.isGoogHtmlType", function (a) {
  return a && a.ia ? !0 : !1;
});
w("ng.safehtml.googSceHelper.isCOMPILED", function () {
  return !0;
});
w("ng.safehtml.googSceHelper.unwrapAny", function (a) {
  if (a instanceof Lb) return Mb(a).toString();
  if (a instanceof lc) return mc(a).toString();
  if (a instanceof Qb) return Rb(a);
  if (a instanceof Tb) return Ub(a);
  if (a instanceof Ib) return Jb(a).toString();
  throw Error();
});
w("ng.safehtml.googSceHelper.unwrapGivenContext", function (a, b) {
  if ("html" == a) return mc(b).toString();
  if ("resourceUrl" == a || "templateUrl" == a) return Mb(b).toString();
  if ("url" == a) return b instanceof Lb ? Mb(b).toString() : Rb(b);
  if ("css" == a) return Ub(b);
  if ("js" == a) return Jb(b).toString();
  throw Error();
});
