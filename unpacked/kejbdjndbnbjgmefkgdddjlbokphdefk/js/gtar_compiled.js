var k,
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
  p = function (a, b) {
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
p("Symbol", function (a) {
  if (a) return a;
  var b = function (f, g) {
    this.Kb = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.Kb;
  };
  var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    d = 0,
    e = function (f) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new b(c + (f || "") + "_" + d++, f);
    };
  return e;
});
p("Symbol.iterator", function (a) {
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
    if (!(a instanceof Array)) {
      a = ia(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
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
    a.Kc = b.prototype;
  },
  sa = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  },
  r = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
p("WeakMap", function (a) {
  function b() {}
  function c(l) {
    var n = typeof l;
    return ("object" === n && null !== l) || "function" === n;
  }
  function d(l) {
    if (!r(l, f)) {
      var n = new b();
      ba(l, f, { value: n });
    }
  }
  function e(l) {
    var n = Object[l];
    n &&
      (Object[l] = function (m) {
        if (m instanceof b) return m;
        Object.isExtensible(m) && d(m);
        return n(m);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var l = Object.seal({}),
          n = Object.seal({}),
          m = new a([
            [l, 2],
            [n, 3]
          ]);
        if (2 != m.get(l) || 3 != m.get(n)) return !1;
        m.delete(l);
        m.set(n, 4);
        return !m.has(l) && 4 == m.get(n);
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
    h = function (l) {
      this.va = (g += Math.random() + 1).toString();
      if (l) {
        l = ia(l);
        for (var n; !(n = l.next()).done; ) (n = n.value), this.set(n[0], n[1]);
      }
    };
  h.prototype.set = function (l, n) {
    if (!c(l)) throw Error("Invalid WeakMap key");
    d(l);
    if (!r(l, f)) throw Error("WeakMap key fail: " + l);
    l[f][this.va] = n;
    return this;
  };
  h.prototype.get = function (l) {
    return c(l) && r(l, f) ? l[f][this.va] : void 0;
  };
  h.prototype.has = function (l) {
    return c(l) && r(l, f) && r(l[f], this.va);
  };
  h.prototype.delete = function (l) {
    return c(l) && r(l, f) && r(l[f], this.va) ? delete l[f][this.va] : !1;
  };
  return h;
});
p("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = Object.seal({ x: 4 }),
          l = new a(ia([[h, "s"]]));
        if ("s" != l.get(h) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
        var n = l.entries(),
          m = n.next();
        if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
        m = n.next();
        return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0;
      } catch (q) {
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
        for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    };
  c.prototype.set = function (h, l) {
    h = 0 === h ? 0 : h;
    var n = d(this, h);
    n.list || (n.list = this[0][n.id] = []);
    n.entry
      ? (n.entry.value = l)
      : ((n.entry = { next: this[1], previous: this[1].previous, head: this[1], key: h, value: l }),
        n.list.push(n.entry),
        (this[1].previous.next = n.entry),
        (this[1].previous = n.entry),
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
  c.prototype.forEach = function (h, l) {
    for (var n = this.entries(), m; !(m = n.next()).done; ) (m = m.value), h.call(l, m[1], m[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, l) {
      var n = l && typeof l;
      "object" == n || "function" == n ? (b.has(l) ? (n = b.get(l)) : ((n = "" + ++g), b.set(l, n))) : (n = "p_" + l);
      var m = h[0][n];
      if (m && r(h[0], n))
        for (h = 0; h < m.length; h++) {
          var q = m[h];
          if ((l !== l && q.key !== q.key) || l === q.key) return { id: n, list: m, index: h, entry: q };
        }
      return { id: n, list: m, index: -1, entry: void 0 };
    },
    e = function (h, l) {
      var n = h[1];
      return ea(function () {
        if (n) {
          for (; n.head != h[1]; ) n = n.previous;
          for (; n.next != n.head; ) return (n = n.next), { done: !1, value: l(n) };
          n = null;
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
p("Array.prototype.find", function (a) {
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
p("Number.isFinite", function (a) {
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
p("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return ta(this, function (b, c) {
          return [b, c];
        });
      };
});
p("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ta(this, function (b) {
          return b;
        });
      };
});
p("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ta(this, function (b, c) {
          return c;
        });
      };
});
p("Array.from", function (a) {
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
p("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
p("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) r(b, d) && c.push(b[d]);
        return c;
      };
});
p("Object.entries", function (a) {
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
  u = function (a, b) {
    a: {
      var c = ["CLOSURE_FLAGS"];
      for (var d = t, e = 0; e < c.length; e++)
        if (((d = d[c[e]]), null == d)) {
          c = null;
          break a;
        }
      c = d;
    }
    a = c && c[a];
    return null != a ? a : b;
  },
  v = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  ua = function (a) {
    var b = v(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  va = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  wa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  xa = 0,
  ya = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  za = function (a, b, c) {
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
  w = function (a, b, c) {
    w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya : za;
    return w.apply(null, arguments);
  },
  x = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  y = function (a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  Aa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Kc = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Od = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  },
  Ba = function (a) {
    return a;
  };
function Ca(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
Aa(Ca, Error);
Ca.prototype.name = "CustomError";
function Da(a, b) {
  var c = Ca.call;
  a = a.split("%s");
  for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
  c.call(Ca, this, d + a[e]);
}
Aa(Da, Ca);
Da.prototype.name = "AssertionError";
function Ea(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Da("" + e, f || []);
}
var z = function (a, b, c) {
    a || Ea("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  Fa = function (a, b) {
    throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Ga = function (a, b, c) {
    "number" !== typeof a && Ea("Expected number but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ha = function (a, b, c) {
    "string" !== typeof a && Ea("Expected string but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ia = function (a, b, c) {
    Array.isArray(a) || Ea("Expected array but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Ja = function (a, b, c) {
    "boolean" !== typeof a && Ea("Expected boolean but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
  };
var Ka = Array.prototype.indexOf
    ? function (a, b) {
        z(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  La = Array.prototype.forEach
    ? function (a, b) {
        z(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
function Ma(a, b) {
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
function A(a, b) {
  return 0 <= Ka(a, b);
}
function Na(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function Oa(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (ua(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function Pa(a, b) {
  a.sort(b || Qa);
}
function Qa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
var Ra = function () {
  return null;
};
function Sa(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a);
}
function Ta(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Va(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < Ua.length; f++) (c = Ua[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Wa(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return Wa.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
var Xa,
  Ya = function () {
    if (void 0 === Xa) {
      var a = null,
        b = t.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", { createHTML: Ba, createScript: Ba, createScriptURL: Ba });
        } catch (c) {
          t.console && t.console.error(c.message);
        }
      Xa = a;
    }
    return Xa;
  };
var ab = function (a, b) {
  this.kb = (a === Za && b) || "";
  this.dc = $a;
};
ab.prototype.aa = !0;
ab.prototype.ea = function () {
  return this.kb;
};
ab.prototype.toString = function () {
  return "Const{" + this.kb + "}";
};
var bb = function (a) {
    if (a instanceof ab && a.constructor === ab && a.dc === $a) return a.kb;
    Fa("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  $a = {},
  Za = {};
var cb = {},
  db = function (a, b) {
    if (b !== cb) throw Error("SafeScript is not meant to be built directly");
    this.ab = a;
    this.aa = !0;
  };
db.prototype.toString = function () {
  return this.ab.toString();
};
db.prototype.ea = function () {
  return this.ab.toString();
};
var eb = function (a) {
  if (a instanceof db && a.constructor === db) return a.ab;
  Fa("expected object of type SafeScript, got '" + a + "' of type " + v(a));
  return "type_error:SafeScript";
};
var gb = function (a, b) {
  if (b !== fb) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.eb = a;
};
gb.prototype.toString = function () {
  return this.eb + "";
};
gb.prototype.aa = !0;
gb.prototype.ea = function () {
  return this.eb.toString();
};
var hb = function (a) {
    if (a instanceof gb && a.constructor === gb) return a.eb;
    Fa("expected object of type TrustedResourceUrl, got '%s' of type %s", a, v(a));
    return "type_error:TrustedResourceUrl";
  },
  fb = {},
  ib = function (a) {
    var b = Ya();
    a = b ? b.createScriptURL(a) : a;
    return new gb(a, fb);
  };
var B = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var C = function (a, b) {
  if (b !== jb) throw Error("SafeUrl is not meant to be built directly");
  this.cb = a;
};
C.prototype.toString = function () {
  return this.cb.toString();
};
C.prototype.aa = !0;
C.prototype.ea = function () {
  return this.cb.toString();
};
var kb = function (a) {
    if (a instanceof C && a.constructor === C) return a.cb;
    Fa("expected object of type SafeUrl, got '" + a + "' of type " + v(a));
    return "type_error:SafeUrl";
  },
  jb = {},
  lb = new C("about:invalid#zClosurez", jb);
new C("about:blank", jb);
var mb = {},
  nb = function (a, b) {
    if (b !== mb) throw Error("SafeStyle is not meant to be built directly");
    this.bb = a;
    this.aa = !0;
  };
nb.prototype.ea = function () {
  return this.bb;
};
nb.prototype.toString = function () {
  return this.bb.toString();
};
var ob = function (a) {
  if (a instanceof nb && a.constructor === nb) return a.bb;
  Fa("expected object of type SafeStyle, got '" + a + "' of type " + v(a));
  return "type_error:SafeStyle";
};
new nb("", mb);
var pb = {},
  qb = function () {
    if (pb !== pb) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Eb = "";
    this.aa = !0;
  };
qb.prototype.toString = function () {
  return this.Eb.toString();
};
qb.prototype.ea = function () {
  return this.Eb;
};
new qb();
var rb = u(1, !0),
  sb = u(610401301, !1);
u(899588437, !1);
u(533565600, !0);
u(563486499, !1);
u(2147483644, !1);
u(2147483645, !0);
u(2147483646, rb);
u(2147483647, !0);
function tb() {
  var a = t.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var ub,
  vb = t.navigator;
ub = vb ? vb.userAgentData || null : null;
function wb(a) {
  return sb
    ? ub
      ? ub.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function D(a) {
  return -1 != tb().indexOf(a);
}
function xb() {
  return sb ? !!ub && 0 < ub.brands.length : !1;
}
function yb() {
  return xb() ? !1 : D("Opera");
}
function zb() {
  return D("Firefox") || D("FxiOS");
}
function Ab() {
  return xb() ? wb("Chromium") : ((D("Chrome") || D("CriOS")) && !(xb() ? 0 : D("Edge"))) || D("Silk");
}
var Bb = {},
  Cb = function (a, b) {
    if (b !== Bb) throw Error("SafeHtml is not meant to be built directly");
    this.Za = a;
    this.aa = !0;
  };
Cb.prototype.ea = function () {
  return this.Za.toString();
};
Cb.prototype.toString = function () {
  return this.Za.toString();
};
var Db = function (a) {
    if (a instanceof Cb && a.constructor === Cb) return a.Za;
    Fa("expected object of type SafeHtml, got '" + a + "' of type " + v(a));
    return "type_error:SafeHtml";
  },
  Eb = new Cb((t.trustedTypes && t.trustedTypes.emptyHTML) || "", Bb);
var Fb = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
  Gb = (function (a) {
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
    a.innerHTML = Db(Eb);
    return !b.parentElement;
  });
var Kb = function (a) {
    return -1 != a.indexOf("&") ? ("document" in t ? Hb(a) : Jb(a)) : a;
  },
  Hb = function (a) {
    var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var c = t.document.createElement("div");
    return a.replace(Lb, function (d, e) {
      var f = b[d];
      if (f) return f;
      "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
      if (!f) {
        f = d + " ";
        e = new ab(Za, "Single HTML entity.");
        Ha(bb(e), "must provide justification");
        z(!/^[\s\xa0]*$/.test(bb(e)), "must provide non-empty justification");
        f = (e = Ya()) ? e.createHTML(f) : f;
        f = new Cb(f, Bb);
        if (c.tagName && Fb[c.tagName.toUpperCase()])
          throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
        if (Gb()) for (; c.lastChild; ) c.removeChild(c.lastChild);
        c.innerHTML = Db(f);
        f = c.firstChild.nodeValue.slice(0, -1);
      }
      return (b[d] = f);
    });
  },
  Jb = function (a) {
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
  Lb = /&([^;\s<&]+);?/g,
  Mb = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  E = function (a, b) {
    if (!Number.isFinite(a)) return String(a);
    a = String(a);
    var c = a.indexOf(".");
    -1 === c && (c = a.length);
    var d = "-" === a[0] ? "-" : "";
    d && (a = a.substring(1));
    return d + Mb("0", Math.max(0, b - c)) + a;
  };
var Nb =
  Object.freeze ||
  function (a) {
    return a;
  };
var Ob = function (a, b) {
  this.name = a;
  this.value = b;
};
Ob.prototype.toString = function () {
  return this.name;
};
var Pb = new Ob("OFF", Infinity),
  Qb = new Ob("WARNING", 900),
  Rb = new Ob("CONFIG", 700),
  Sb = function () {
    this.Ca = 0;
    this.clear();
  },
  Tb;
Sb.prototype.clear = function () {
  this.L = Array(this.Ca);
  this.sb = -1;
  this.xb = !1;
};
var Ub = function (a, b, c) {
  this.reset(a || Pb, b, c, void 0, void 0);
};
Ub.prototype.reset = function (a, b) {
  this.zc = b;
};
Ub.prototype.getMessage = function () {
  return this.zc;
};
var Vb = function (a, b) {
    this.level = null;
    this.qc = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.wc = {
      Ta: function () {
        return a;
      }
    };
  },
  Wb = function (a) {
    if (a.level) return a.level;
    if (a.parent) return Wb(a.parent);
    Fa("Root logger has no level set.");
    return Pb;
  };
Vb.prototype.publish = function (a) {
  for (var b = this; b; )
    b.qc.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var Xb = function () {
    this.entries = {};
    var a = new Vb("");
    a.level = Rb;
    this.entries[""] = a;
  },
  Yb,
  Zb = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = Zb(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new Vb(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  $b = function () {
    Yb || (Yb = new Xb());
    return Yb;
  };
var ac = function (a, b) {
  null != a && this.append.apply(this, arguments);
};
k = ac.prototype;
k.L = "";
k.set = function (a) {
  this.L = "" + a;
};
k.append = function (a, b, c) {
  this.L += String(a);
  if (null != b) for (var d = 1; d < arguments.length; d++) this.L += arguments[d];
  return this;
};
k.clear = function () {
  this.L = "";
};
k.toString = function () {
  return this.L;
};
var _gaq = _gaq || [];
var bc = function (a, b) {
    a = b ? a.exec.call(a, b) : void 0;
    return a ? (1 < a.length ? a[1] : !0) : !1;
  },
  dc = function (a, b) {
    var c = b || [";", ","];
    b = b ? 0 : 1;
    var d = { "(": ")", "{": "}", "[": "]" },
      e = void 0,
      f = !1,
      g = [],
      h = [],
      l = 0;
    a = B(cc(a));
    var n = a.length,
      m;
    for (m = 0; m < n; m++) {
      var q = a.charAt(m);
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
        : A(c, q)
        ? ((l = B(a.substring(l, m + b))), h.push(l.replace(" *\n *", "")), (l = m + 1))
        : m == l && F[a.charCodeAt(m)] && (l = m + 1);
    }
    l = B(a.substring(l, m));
    h.push(l.replace(" *\n *", ""));
    return h;
  },
  ec = function (a) {
    a = bc(/\{(.*)\}/, a) || a;
    return dc(a, [","]).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = bc(/"(.*)"/, c) || c;
      c = bc(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
  },
  fc = function (a, b, c, d, e) {
    b && (c && a.append(Mb("  ", d.length)), a.append(b, e));
    return "\n" == e;
  },
  gc = function (a) {
    var b = [";", ","],
      c = { "{": "}", "[": "]" },
      d = void 0,
      e = !1,
      f = [],
      g = new ac(),
      h = 0,
      l = !1;
    a = B(cc(a));
    var n = a.length,
      m;
    for (m = 0; m < n; m++) {
      var q = a.charAt(m);
      e
        ? (e = !1)
        : "\\" == q
        ? (e = !0)
        : d
        ? q == d && (d = void 0)
        : '"' == q || "'" == q
        ? (d = q)
        : ":" == q
        ? ((h = B(a.substring(h, m))), (l = fc(g, h, l, f, "")), g.append(": "), (h = m + 1))
        : "{" == q || "[" == q
        ? ((h = B(a.substring(h, m))), (l = fc(g, h, l, f, "\n")), (l = fc(g, q, l, f, "\n")), (h = m + 1), f.push(c[q]))
        : f.length && q == f[f.length - 1]
        ? ((h = B(a.substring(h, m))), (l = fc(g, h, l, f, "\n")), (h = m), f.pop())
        : m == h && F[a.charCodeAt(m)] && (h = m + 1);
      A(b, q) && ((h = B(a.substring(h, m))), (l = fc(g, h, l, f, "")), (l = fc(g, q, l, f, "\n")), (h = m + 1));
    }
    h = B(a.substring(h, m));
    fc(g, h, l, f, "\n");
    return g.toString();
  },
  cc = function (a, b) {
    var c = void 0,
      d = !1,
      e = -1;
    b = b || 0;
    for (var f = a.length, g = b; g < f; g++) {
      var h = a.charAt(g),
        l = g + 1 < f ? a.charAt(g + 1) : "";
      if (d) d = !1;
      else if (0 <= e) {
        if ("*" == h && "/" == l) return a.substring(b, e) + cc(a, g + 2);
      } else if ("\\" == h) d = !0;
      else if (c) h == c && (c = void 0);
      else if ("/" == h) {
        if ("/" == l) return (c = a.indexOf("\n", g)), -1 == c ? a.substring(b, g) : a.substring(b, g) + cc(a, c);
        "*" == l && (e = g++);
      } else if ('"' == h || "'" == h) c = h;
    }
    return a.substring(b);
  },
  F = [];
F[9] = !0;
F[10] = !0;
F[11] = !0;
F[12] = !0;
F[13] = !0;
F[32] = !0;
F[133] = !0;
F[160] = !0;
F[5760] = !0;
F[6158] = !0;
F[8192] = !0;
F[8193] = !0;
F[8194] = !0;
F[8195] = !0;
F[8196] = !0;
F[8197] = !0;
F[8198] = !0;
F[8199] = !0;
F[8200] = !0;
F[8201] = !0;
F[8202] = !0;
F[8203] = !0;
F[8232] = !0;
F[8233] = !0;
F[8239] = !0;
F[8287] = !0;
F[12288] = !0;
function hc(a, b) {
  var c = new XMLHttpRequest();
  c.onreadystatechange = function () {
    4 == this.readyState && b(this);
  };
  c.open("GET", a, !0);
  c.send(JSON.stringify(void 0));
  c = null;
}
var G = {},
  ic = {},
  jc = {},
  kc,
  lc = {
    Pc: "AutoOpenRecordings",
    Qc: "categories",
    Rc: "CheckPermissionsLater",
    Wc: "DefaultLevelOfDetail",
    Vc: "DebugIssues",
    Yc: "IgnoreExternalScripts",
    Zc: "FollowLinks",
    ad: "gaDebug",
    bd: "GtaPage",
    ed: "hideRecordingSuggestion",
    fd: "IgnoreExternalScripts",
    ld: "isInSupportTeam",
    nd: "last-checked-for-support-team",
    od: "LoggedIn",
    qd: "LogInfoTemplate",
    rd: "LogSources",
    pd: "LoggingEnabled",
    sd: "ManualChecks",
    ud: "ManualScriptParsing",
    xd: "NgModeDisabled",
    Ad: "PatternProfiling",
    Bd: "RecordingTab",
    Cd: "GooglePublisherConsole",
    Dd: "ShowIgnoredIssues",
    Ed: "ShowWelcomeScreen",
    Md: "WhiteListedDomains",
    Jd: "ValidateAllPages"
  },
  mc = { DefaultLevelOfDetail: "DefaultLevel" },
  nc = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  rc = function (a) {
    kc = null;
    jc = {};
    void 0 !== chrome && void 0 !== chrome.storage
      ? chrome.storage.local.get(null, function (b) {
          oc(b);
          pc(a);
        })
      : G["Options initialized to default values."] || (console.log("No chrome storage available."), qc(), a());
  },
  pc = function (a) {
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (b) {
        oc(b);
        b["Options initialized to default values."] || qc();
        a();
      }),
      sc());
  },
  H = function (a) {
    var b = G[a];
    if (!b && mc[a] && G[mc[a]]) {
      var c = mc[a];
      b = void 0 !== G[c] ? G[c] : null;
      tc(a, b);
      void 0 !== chrome && void 0 !== chrome.storage
        ? (delete jc[c], chrome.storage.local.remove(c, void 0), chrome.storage.sync.remove(c, void 0))
        : (delete jc[G[c]], delete G[c]);
    }
    return b;
  },
  uc = function (a) {
    a = H(a);
    void 0 !== a && Ja(a);
    return !!a;
  },
  vc = function (a, b) {
    a = H(a);
    void 0 !== a && Ja("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  wc = function (a) {
    kc ||
      ((kc = {}),
      Object.keys(G).forEach(function (b) {
        0 < b.indexOf("|") && (kc[b.split("|")[0]] = !0);
      }));
    return !!kc[a];
  },
  sc = function () {
    chrome.storage.onChanged.addListener(function (a) {
      for (var b in a) G[b] = a[b].newValue;
    });
  },
  yc = function () {
    var a = {};
    Sa(lc, function (b) {
      void 0 !== H(b) && (a[b] = H(b));
    });
    qc();
    xc(a);
  },
  qc = function () {
    var a = H("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    G = {};
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
    xc(a);
  },
  zc = function (a, b, c) {
    Sa(b, function (d, e) {
      null != d && (ic[e] ? z(typeof d == ic[e], "Unexpected type " + typeof d + " expected " + ic[e]) : (ic[e] = typeof d));
    });
    oc(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (yc(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  oc = function (a, b) {
    a && Va(G, a);
    b && b();
  },
  Ac = void 0 !== chrome && void 0 !== chrome.storage ? x(zc, chrome.storage.local) : oc,
  xc = void 0 !== chrome && void 0 !== chrome.storage ? x(zc, chrome.storage.sync) : oc,
  tc = function (a, b) {
    delete jc[a];
    xc(Wa(a, b), void 0);
  },
  Bc = function () {
    return vc("GtaPage", "PROD");
  };
y("tvt.Settings.getGataPageVersion", Bc);
y("tvt.Settings.setGataPageVersion", function (a) {
  tc("GtaPage", a || "PROD");
});
var Cc = function () {
  var a = Bc();
  return nc[a];
};
y("tvt.Settings.getGataRedirectUrl", Cc);
var Dc = function () {
  return Cc() + "internal/";
};
y("tvt.Settings.getGataInternalRedirectUrl", Dc);
var Ec = function () {
  return Cc() + "logincheck";
};
y("tvt.Settings.getGataLoginCheckUrl", Ec);
var Fc = function () {
  return Dc() + "login";
};
y("tvt.Settings.getGataInternalLoginUrl", Fc);
var Gc = function () {
  return Cc() + "login";
};
y("tvt.Settings.getGataLoginUrl", Gc);
y("tvt.Settings.toggleGaDebugSettings", function () {
  var a = {};
  switch (H("gaDebug")) {
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
  Ac(a);
});
var Hc = function () {
  H("last-checked-for-support-team");
};
var Ic = "Error Warning Suggestion Hidden Info Fine Debug".split(" "),
  Jc = ["Error", "Warning", "Suggestion"];
Sa(
  { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] },
  function (a) {
    for (var b = 0; a[b]; b++);
  }
);
var Kc = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  Lc = { Metadata: 1 },
  Mc = function (a, b, c) {
    if (Array.isArray(a))
      for (var d = 0, e, f = 0; (e = a[f]); f++) {
        var g = (c ? c + "." : "") + d++,
          h = console,
          l = h.log,
          n = g + " " + e.type + "[" + e.view + "]: " + e.issueClass + ": " + e.text,
          m;
        if ((m = e.label)) (m = e.label.replace("\n", "")), 25 < m.length && (m = m.substring(0, 22) + "..."), (m = " -- " + m);
        l.call(
          h,
          n +
            m +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && Mc(e.relatedIssues, b, g);
      }
    else Mc(a.relatedIssues, b, c);
  };
y("module$contents$tvt$Issue_Issue.dump", Mc);
var Oc = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.type && Nc(c.category);
    });
  },
  Pc = function (a) {
    for (var b = [], c, d = 0; (c = a[d]); d++) c.deleted || c.deduped || ("Bucket" == c.type ? b.push(c) : Oa(b, Pc(c.relatedIssues)));
    return b;
  },
  Rc = function (a, b) {
    return Qc(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  Qc = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = Qc(d.relatedIssues, b, c)))) return d;
    return null;
  },
  Tc = function (a, b) {
    wc(a) && Sc(a, b);
  },
  Sc = function (a, b, c) {
    for (var d, e = 0; (d = b[e]); e++) {
      var f = !c && "Tag" == d.type,
        g = !f && A(Jc, d.type),
        h = c || (f ? d.text : "Global");
      if (f || g) (f = Uc(d, a)), (d.ignored = uc(f));
      Sc(a, d.relatedIssues, h);
    }
  },
  Wc = function (a) {
    return (a.parent ? Vc(a.parent) : 1) ? a : Wc(a.parent);
  },
  Uc = function (a, b) {
    var c = "Tag" != a.type && A(Jc, a.type),
      d = Wc(a);
    b = b + "|ignore:" + ("Tag" == d.type ? d.text : "Global") + ":" + a.type;
    c && (b = b + ":" + (0 == a.text.length ? a.category : a.text));
    return b;
  },
  Yc = function (a, b, c) {
    var d = b || [];
    if (!c)
      a: switch (Xc(a.category || "")) {
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
        (e.view || (e.view = "Metadata"), e.ignored || "" == e.view || A(d, e.view) || !A(c, e.type) || d.push(e.view), Yc(e, d, c));
    b ||
      d.sort(function (g, h) {
        return (Lc[g] || 99) - (Lc[h] || 99);
      });
    return d;
  },
  Zc = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return Zc(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  Nc = function (a) {
    return null == a || !A(["Hidden", "Off"], Xc(a));
  },
  Vc = function (a) {
    return !a || a.category == Kc.category;
  },
  Xc = function (a) {
    ((a = vc(a)) && "Default" != a) || (a = vc("DefaultLevelOfDetail", "Default"));
    return a;
  },
  $c = function (a, b, c) {
    for (var d = 0, e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (c && e.ignored) || !Nc(e.category) || (e.type == b ? d++ : (d += $c(e.relatedIssues, b, c)));
    return d;
  },
  ad = function (a, b) {
    b = b || "https://support.google.com/tagassistant/answer/2947093";
    for (var c, d = 0; (c = a[d]); d++)
      c.infoLink && c.infoLink.length ? ("#" == c.infoLink[0] ? (c.infoLink = b + c.infoLink) : (b = c.infoLink)) : (c.infoLink = b),
        c.relatedIssues.length && ad(c.relatedIssues, b);
  },
  bd = function (a, b) {
    for (var c = b || Kc, d = 0; (b = a[d]); d++) (b.parent = c), b.infoLink || (b.infoLink = c.infoLink);
    for (c = 0; (b = a[c]); c++) bd(b.relatedIssues, b);
  },
  cd = function (a, b, c) {
    a.view = b;
    if (c) {
      a = a.relatedIssues;
      for (var d = 0; (c = a[d]); d++) cd(c, b, !0);
    }
  };
var dd = function (a) {
    if (a.U && "function" == typeof a.U) a = a.U();
    else if (ua(a) || "string" === typeof a) a = a.length;
    else {
      var b = 0,
        c;
      for (c in a) b++;
      a = b;
    }
    return a;
  },
  ed = function (a) {
    if (a.J && "function" == typeof a.J) return a.J();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (ua(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return Ta(a);
  },
  fd = function (a) {
    if (a.O && "function" == typeof a.O) return a.O();
    if (!a.J || "function" != typeof a.J) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (ua(a) || "string" === typeof a) {
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
  gd = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (ua(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = fd(a), e = ed(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  },
  hd = function (a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (ua(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
    for (var c = fd(a), d = ed(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0;
  };
var id = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  jd = function (a, b) {
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
var I = function (a) {
  this.da = this.ka = this.ra = "";
  this.pa = null;
  this.N = this.C = "";
  this.K = this.uc = !1;
  if (a instanceof I) {
    this.K = a.K;
    kd(this, a.getScheme());
    var b = a.ka;
    J(this);
    this.ka = b;
    b = a.H();
    J(this);
    this.da = b;
    ld(this, a.pa);
    b = a.C;
    J(this);
    this.C = b;
    nd(this, a.A.clone());
    a = a.N;
    J(this);
    this.N = a;
  } else
    a && (b = String(a).match(id))
      ? ((this.K = !1),
        kd(this, b[1] || "", !0),
        (a = b[2] || ""),
        J(this),
        (this.ka = od(a)),
        (a = b[3] || ""),
        J(this),
        (this.da = od(a, !0)),
        ld(this, b[4]),
        (a = b[5] || ""),
        J(this),
        (this.C = od(a, !0)),
        nd(this, b[6] || "", !0),
        (a = b[7] || ""),
        J(this),
        (this.N = od(a)))
      : ((this.K = !1), (this.A = new pd(null, this.K)));
};
I.prototype.toString = function () {
  var a = [],
    b = this.getScheme();
  b && a.push(qd(b, rd, !0), ":");
  var c = this.H();
  if (c || "file" == b)
    a.push("//"),
      (b = this.ka) && a.push(qd(b, rd, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.pa),
      null != c && a.push(":", String(c));
  if ((c = this.C)) this.da && "/" != c.charAt(0) && a.push("/"), a.push(qd(c, "/" == c.charAt(0) ? sd : td, !0));
  (c = this.A.toString()) && a.push("?", c);
  (c = this.N) && a.push("#", qd(c, ud));
  return a.join("");
};
I.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.ra;
  c ? kd(b, a.getScheme()) : (c = !!a.ka);
  if (c) {
    var d = a.ka;
    J(b);
    b.ka = d;
  } else c = !!a.da;
  c ? ((d = a.H()), J(b), (b.da = d)) : (c = null != a.pa);
  d = a.C;
  if (c) ld(b, a.pa);
  else if ((c = !!a.C)) {
    if ("/" != d.charAt(0))
      if (this.da && !this.C) d = "/" + d;
      else {
        var e = b.C.lastIndexOf("/");
        -1 != e && (d = b.C.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
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
  c ? (J(b), (b.C = d)) : (c = "" !== a.A.toString());
  c ? nd(b, a.A.clone()) : (c = !!a.N);
  c && ((a = a.N), J(b), (b.N = a));
  return b;
};
I.prototype.clone = function () {
  return new I(this);
};
I.prototype.getScheme = function () {
  return this.ra;
};
var kd = function (a, b, c) {
  J(a);
  a.ra = c ? od(b, !0) : b;
  a.ra && (a.ra = a.ra.replace(/:$/, ""));
};
I.prototype.H = function () {
  return this.da;
};
var ld = function (a, b) {
    J(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.pa = b;
    } else a.pa = null;
  },
  nd = function (a, b, c) {
    J(a);
    b instanceof pd ? ((a.A = b), a.A.ib(a.K)) : (c || (b = qd(b, vd)), (a.A = new pd(b, a.K)));
  };
I.prototype.getQuery = function () {
  return this.A.toString();
};
var wd = function (a, b, c) {
  J(a);
  a.A.set(b, c);
};
I.prototype.removeParameter = function (a) {
  J(this);
  this.A.remove(a);
  return this;
};
var J = function (a) {
  if (a.uc) throw Error("Tried to modify a read-only Uri");
};
I.prototype.ib = function (a) {
  this.K = a;
  this.A && this.A.ib(a);
};
var K = function (a) {
    return a instanceof I ? a.clone() : new I(a);
  },
  od = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  qd = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, xd)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  xd = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  rd = /[#\/\?@]/g,
  td = /[#\?:]/g,
  sd = /[#\?]/g,
  vd = /[#\?@]/g,
  ud = /#/g,
  pd = function (a, b) {
    this.F = this.j = null;
    this.G = a || null;
    this.K = !!b;
  },
  L = function (a) {
    a.j ||
      ((a.j = new Map()),
      (a.F = 0),
      a.G &&
        jd(a.G, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
k = pd.prototype;
k.U = function () {
  L(this);
  return this.F;
};
k.add = function (a, b) {
  L(this);
  this.G = null;
  a = yd(this, a);
  var c = this.j.get(a);
  c || this.j.set(a, (c = []));
  c.push(b);
  this.F = Ga(this.F) + 1;
  return this;
};
k.remove = function (a) {
  L(this);
  a = yd(this, a);
  return this.j.has(a) ? ((this.G = null), (this.F = Ga(this.F) - this.j.get(a).length), this.j.delete(a)) : !1;
};
k.clear = function () {
  this.j = this.G = null;
  this.F = 0;
};
k.sa = function (a) {
  L(this);
  a = yd(this, a);
  return this.j.has(a);
};
k.Da = function (a) {
  var b = this.J();
  return A(b, a);
};
k.forEach = function (a, b) {
  L(this);
  this.j.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
k.O = function () {
  L(this);
  for (var a = Array.from(this.j.values()), b = Array.from(this.j.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
k.J = function (a) {
  L(this);
  var b = [];
  if ("string" === typeof a) this.sa(a) && (b = b.concat(this.j.get(yd(this, a))));
  else {
    a = Array.from(this.j.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
k.set = function (a, b) {
  L(this);
  this.G = null;
  a = yd(this, a);
  this.sa(a) && (this.F = Ga(this.F) - this.j.get(a).length);
  this.j.set(a, [b]);
  this.F = Ga(this.F) + 1;
  return this;
};
k.get = function (a, b) {
  if (!a) return b;
  a = this.J(a);
  return 0 < a.length ? String(a[0]) : b;
};
k.toString = function () {
  if (this.G) return this.G;
  if (!this.j) return "";
  for (var a = [], b = Array.from(this.j.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.J(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.G = a.join("&"));
};
k.clone = function () {
  var a = new pd();
  a.G = this.G;
  this.j && ((a.j = new Map(this.j)), (a.F = this.F));
  return a;
};
var yd = function (a, b) {
  b = String(b);
  a.K && (b = b.toLowerCase());
  return b;
};
pd.prototype.ib = function (a) {
  a &&
    !this.K &&
    (L(this),
    (this.G = null),
    this.j.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c),
        this.remove(d),
        0 < b.length && ((this.G = null), this.j.set(yd(this, d), Na(b)), (this.F = Ga(this.F) + b.length)));
    }, this));
  this.K = a;
};
pd.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    gd(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var zd = {
    Pb: ["BC", "AD"],
    Ob: ["Before Christ", "Anno Domini"],
    Sb: "JFMAMJJASOND".split(""),
    Yb: "JFMAMJJASOND".split(""),
    Qb: "January February March April May June July August September October November December".split(" "),
    Xb: "January February March April May June July August September October November December".split(" "),
    Ub: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    ac: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    ec: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    cc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Wb: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    bc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    wd: "SMTWTFS".split(""),
    Zb: "SMTWTFS".split(""),
    Vb: ["Q1", "Q2", "Q3", "Q4"],
    Tb: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Lb: ["AM", "PM"],
    Tc: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    Hd: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    Uc: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    Na: 6,
    Ld: [5, 6],
    Oa: 5
  },
  Ad = zd;
Ad = zd;
var Bd = function (a, b, c, d, e) {
    a = new Date(a, b, c);
    e = e || 0;
    return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
  },
  Ed = function (a, b, c) {
    "number" === typeof a
      ? ((this.date = Cd(a, b || 0, c || 1)), Dd(this, c || 1))
      : va(a)
      ? ((this.date = Cd(a.getFullYear(), a.getMonth(), a.getDate())), Dd(this, a.getDate()))
      : ((this.date = new Date(Date.now())),
        (a = this.date.getDate()),
        this.date.setHours(0),
        this.date.setMinutes(0),
        this.date.setSeconds(0),
        this.date.setMilliseconds(0),
        Dd(this, a));
  },
  Cd = function (a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b;
  };
k = Ed.prototype;
k.Ea = Ad.Na;
k.Fa = Ad.Oa;
k.clone = function () {
  var a = new Ed(this.date);
  a.Ea = this.Ea;
  a.Fa = this.Fa;
  return a;
};
k.getFullYear = function () {
  return this.date.getFullYear();
};
k.getYear = function () {
  return this.getFullYear();
};
k.getMonth = function () {
  return this.date.getMonth();
};
k.getDate = function () {
  return this.date.getDate();
};
k.getTime = function () {
  return this.date.getTime();
};
k.getDay = function () {
  return this.date.getDay();
};
k.getUTCFullYear = function () {
  return this.date.getUTCFullYear();
};
k.getUTCMonth = function () {
  return this.date.getUTCMonth();
};
k.getUTCDate = function () {
  return this.date.getUTCDate();
};
k.getUTCDay = function () {
  return this.date.getDay();
};
k.getUTCHours = function () {
  return this.date.getUTCHours();
};
k.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
k.getTimezoneOffset = function () {
  return this.date.getTimezoneOffset();
};
k.set = function (a) {
  this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate());
};
k.setFullYear = function (a) {
  this.date.setFullYear(a);
};
k.setYear = function (a) {
  this.setFullYear(a);
};
k.setMonth = function (a) {
  this.date.setMonth(a);
};
k.setDate = function (a) {
  this.date.setDate(a);
};
k.setTime = function (a) {
  this.date.setTime(a);
};
k.setUTCFullYear = function (a) {
  this.date.setUTCFullYear(a);
};
k.setUTCMonth = function (a) {
  this.date.setUTCMonth(a);
};
k.setUTCDate = function (a) {
  this.date.setUTCDate(a);
};
k.add = function (a) {
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
    Dd(this, a.getDate()));
};
k.Ka = function (a) {
  var b = this.getFullYear(),
    c = 0 > b ? "-" : 1e4 <= b ? "+" : "";
  return [c + E(Math.abs(b), c ? 6 : 4), E(this.getMonth() + 1, 2), E(this.getDate(), 2)].join(a ? "-" : "") + "";
};
k.equals = function (a) {
  return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate());
};
k.toString = function () {
  return this.Ka();
};
var Dd = function (a, b) {
  a.getDate() != b && a.date.setUTCHours(a.date.getUTCHours() + (a.getDate() < b ? 1 : -1));
};
Ed.prototype.valueOf = function () {
  return this.date.valueOf();
};
var Fd = function (a, b, c, d, e, f, g) {
  this.date =
    "number" === typeof a
      ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
      : new Date(a && a.getTime ? a.getTime() : Date.now());
};
Aa(Fd, Ed);
k = Fd.prototype;
k.getHours = function () {
  return this.date.getHours();
};
k.getMinutes = function () {
  return this.date.getMinutes();
};
k.getSeconds = function () {
  return this.date.getSeconds();
};
k.getMilliseconds = function () {
  return this.date.getMilliseconds();
};
k.getUTCDay = function () {
  return this.date.getUTCDay();
};
k.getUTCHours = function () {
  return this.date.getUTCHours();
};
k.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
k.getUTCSeconds = function () {
  return this.date.getUTCSeconds();
};
k.getUTCMilliseconds = function () {
  return this.date.getUTCMilliseconds();
};
k.setHours = function (a) {
  this.date.setHours(a);
};
k.setMinutes = function (a) {
  this.date.setMinutes(a);
};
k.setSeconds = function (a) {
  this.date.setSeconds(a);
};
k.setMilliseconds = function (a) {
  this.date.setMilliseconds(a);
};
k.setUTCHours = function (a) {
  this.date.setUTCHours(a);
};
k.setUTCMinutes = function (a) {
  this.date.setUTCMinutes(a);
};
k.setUTCSeconds = function (a) {
  this.date.setUTCSeconds(a);
};
k.setUTCMilliseconds = function (a) {
  this.date.setUTCMilliseconds(a);
};
k.add = function (a) {
  Ed.prototype.add.call(this, a);
  a.hours && this.setUTCHours(this.date.getUTCHours() + a.hours);
  a.minutes && this.setUTCMinutes(this.date.getUTCMinutes() + a.minutes);
  a.seconds && this.setUTCSeconds(this.date.getUTCSeconds() + a.seconds);
};
k.Ka = function (a) {
  var b = Ed.prototype.Ka.call(this, a);
  return a
    ? b + "T" + E(this.getHours(), 2) + ":" + E(this.getMinutes(), 2) + ":" + E(this.getSeconds(), 2)
    : b + "T" + E(this.getHours(), 2) + E(this.getMinutes(), 2) + E(this.getSeconds(), 2);
};
k.equals = function (a) {
  return this.getTime() == a.getTime();
};
k.toString = function () {
  return this.Ka();
};
k.clone = function () {
  var a = new Fd(this.date);
  a.Ea = this.Ea;
  a.Fa = this.Fa;
  return a;
};
var Gd = function () {},
  Id = function (a) {
    if ("number" == typeof a) {
      var b = new Gd();
      b.Hb = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", E(c, 2));
        c = d.join("");
      }
      b.lb = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = Hd(a);
      b.nb = [c, c];
      b.ia = { Fd: a, rb: a };
      b.La = [];
      return b;
    }
    b = new Gd();
    b.lb = a.id;
    b.Hb = -a.std_offset;
    b.nb = a.names;
    b.ia = a.names_ext;
    b.La = a.transitions;
    return b;
  },
  Hd = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(E(Math.floor(a / 60) % 100, 2), ":", E(a % 60, 2));
    return b.join("");
  },
  Jd = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.La.length && b >= a.La[c]; ) c += 2;
    return 0 == c ? 0 : a.La[c - 1];
  },
  Kd = function (a, b) {
    a = a.Hb - Jd(a, b);
    return -1440 === a ? 0 : a;
  };
var Nd = function () {
    z(!0, "Pattern must be defined");
    z(void 0 !== Ad, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.Ia = [];
    this.v = Ad;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (Ld && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < Md.length; ++c) {
        var d = a.match(Md[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.Ia.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  Md = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  Od = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
Nd.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - Kd(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.Ia.length; ++f) {
    var g = this.Ia[f].text;
    1 == this.Ia[f].type ? c.push(Pd(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var M = function (a, b) {
    b = String(b);
    a = a.v || Ad;
    if (void 0 !== a.fc) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.fc + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  Ld = !1,
  Qd = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  Rd = function (a, b) {
    Qd(b);
    b = Od(b);
    return a.v.Lb[12 <= b && 24 > b ? 1 : 0];
  },
  Pd = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.v.Ob[c] : a.v.Pb[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), M(a, E(c, g));
      case "Y":
        return (
          (c = new Date(Bd(d.getFullYear(), d.getMonth(), d.getDate(), a.v.Oa, a.v.Na)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          M(a, E(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.v.Sb[c];
            break a;
          case 4:
            g = a.v.Qb[c];
            break a;
          case 3:
            g = a.v.Ub[c];
            break a;
          default:
            g = M(a, E(c + 1, g));
        }
        return g;
      case "k":
        return Qd(e), M(a, E(Od(e) || 24, g));
      case "S":
        return M(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? E(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.v.ec[c] : a.v.Wb[c];
      case "a":
        return Rd(a, e);
      case "b":
        return Rd(a, e);
      case "B":
        return Rd(a, e);
      case "h":
        return Qd(e), M(a, E(Od(e) % 12 || 12, g));
      case "K":
        return Qd(e), M(a, E(Od(e) % 12, g));
      case "H":
        return Qd(e), M(a, E(Od(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.v.Zb[c];
            break a;
          case 4:
            g = a.v.cc[c];
            break a;
          case 3:
            g = a.v.bc[c];
            break a;
          default:
            g = M(a, E(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.v.Yb[c];
            break a;
          case 4:
            g = a.v.Xb[c];
            break a;
          case 3:
            g = a.v.ac[c];
            break a;
          default:
            g = M(a, E(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.v.Vb[c] : a.v.Tb[c];
      case "d":
        return M(a, E(d.getDate(), g));
      case "m":
        return Qd(e), M(a, E(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return Qd(e), M(a, E(e.getSeconds(), g));
      case "v":
        return (f || Id(c.getTimezoneOffset())).lb;
      case "V":
        return (
          (a = f || Id(c.getTimezoneOffset())),
          2 >= g
            ? a.lb
            : 0 < Jd(a, c)
            ? void 0 !== a.ia.Nb
              ? a.ia.Nb
              : a.ia.DST_GENERIC_LOCATION
            : void 0 !== a.ia.rb
            ? a.ia.rb
            : a.ia.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = Bd(e.getFullYear(), e.getMonth(), e.getDate(), a.v.Oa, a.v.Na)),
          M(a, E(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || Id(c.getTimezoneOffset())), 4 > g ? a.nb[0 < Jd(a, c) ? 2 : 0] : a.nb[0 < Jd(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || Id(c.getTimezoneOffset())),
          4 > g
            ? ((g = -Kd(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(E(Math.floor(g / 60) % 100, 2), E(g % 60, 2)),
              (g = a.join("")))
            : (g = M(a, Hd(Kd(b, c)))),
          g
        );
      default:
        return "";
    }
  };
var Sd = [],
  Td = function (a) {
    z(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "Ua";
    if (a.Ua && a.hasOwnProperty(b)) return a.Ua;
    Sd.push(a);
    var c = new a();
    a.Ua = c;
    z(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
var Ud = function () {
    this.mc = [];
    this.rc = [];
  },
  Wd = function (a, b, c, d, e) {
    if (A(Td(Ud).mc, a.id)) {
      var f = { timestamp: Vd.format(new Fd()), source: a.name, Td: b };
      Va(f, c || {});
      var g = [],
        h = [];
      La(Td(Ud).rc, function (n) {
        var m = n.match(/%(\w+)/i)[1];
        null !== f && m in f && (g.push(n.replace(m, "s")), h.push(f[m]));
      });
      g.push(d);
      var l = g.join(" ");
      Oa(h, Array.prototype.slice.call(arguments).slice(4));
      h.unshift(l);
      console.log.apply(console, h);
    }
  },
  Vd = new Nd(),
  N = { id: "recording-page", name: "Recording Page" },
  O = uc("LoggingEnabled") ? Wd : Ra;
var Yd = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, l, n, m, q) {
      if ("%" == n) return "%";
      var oa = c.shift();
      if ("undefined" == typeof oa) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = oa;
      return Xd[n].apply(null, arguments);
    });
  },
  Xd = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a = -1 < b.indexOf("-", 0) ? a + Mb(" ", Number(c) - a.length) : Mb(" ", Number(c) - a.length) + a);
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      0 <= b.indexOf("-", 0) ? (d = f + d + Mb(" ", a)) : ((b = 0 <= b.indexOf("0", 0) ? "0" : " "), (d = f + Mb(b, a) + d));
      return d;
    },
    d: function (a, b, c, d, e, f, g, h) {
      return Xd.f(parseInt(a, 10), b, c, d, 0, f, g, h);
    }
  };
Xd.i = Xd.d;
Xd.u = Xd.d;
function Zd(a) {
  var b = (new Date().getTime() - a) / 1e3;
  if (60 > b) return $d(b, "second") + " ago";
  b /= 60;
  if (60 > b) return $d(b, "minute") + " ago";
  b /= 60;
  if (24 > b) return $d(b, "hour") + " ago";
  b /= 24;
  return 365 > b ? $d(b, "day") + " ago" : new Date(a).toLocaleDateString();
}
function $d(a, b) {
  a = Math.round(a);
  return Yd("%d %s%s", a, b, 1 == a ? "" : "s");
}
function ae(a, b) {
  var c = K(b);
  a = K(a);
  if (a.H() == c.H()) {
    b = c.C.split("/");
    var d = a.C.split("/");
    a = b.pop();
    var e = b.join("/") + "/",
      f = "",
      g = 0;
    for (d.pop(); -1 == e.indexOf(d.join("/") + "/"); ) d.pop(), (f += "../"), g++;
    return g == d.length ? c.C : g < b.length - 1 ? ((c = b.slice(d.length)), c.length && (f += c.join("/") + "/"), f + a) : c.C;
  }
  return b;
}
var be = document;
var P = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.issueClass = 0;
    this.qa = g || [];
    this.fa = !1;
    this.view = this.hint = null;
    this.context = {};
  },
  ce = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  de = function (a, b, c, d, e, f) {
    return new P(a, b, c, void 0, d, e, f);
  },
  ee = x(de, "Debug", null),
  fe = x(de, "Error", null),
  ge = x(de, "Info", null),
  he = x(de, "Suggestion", null);
ge("Implemented in %s");
ge("Includes %s");
P.prototype.clear = function () {
  this.context = {};
  this.fa = !1;
};
P.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.qa.length && (a.qa = ce(this.qa));
  return a;
};
P.prototype.otherwise = function () {
  return this;
};
P.prototype.setClass = function (a) {
  this.issueClass = a;
  this.qa.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var ie = function (a, b) {
    a.format = b;
    return a;
  },
  je = function (a, b) {
    a.hint = b;
    return a;
  },
  ke = function (a) {
    a.infoLink = "#url_encoding";
    return a;
  },
  le = function (a, b) {
    a.view = b;
    return a;
  };
ee("__altered");
var me = function (a, b, c, d, e, f, g, h) {
  P.call(this, a, b, c, d, void 0, g, h);
  this.issueClass = 1;
};
Aa(me, P);
var ne = function (a, b, c, d, e, f) {
    return new me(a, b, c, void 0, void 0, d, e, f);
  },
  oe = x(ne, "Fine", null),
  pe = x(ne, "Info", null),
  qe = x(ne, "Suggestion", null),
  re = le(
    qe("Tag is included in an iframe", function () {
      return self !== top;
    }),
    "Code Snippet"
  ),
  se = [
    le(
      pe(
        "IFrame",
        function () {
          return self.location.href;
        },
        "linked"
      ),
      "IFrame"
    )
  ];
re.qa = se;
qe("Tag is included in an external script file", function (a) {
  return a.externalScript;
});
le(
  oe(
    "Script source",
    function (a) {
      return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
    },
    "linked"
  ),
  "Code Snippet"
);
le(
  je(
    fe("No HTTP response detected"),
    "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
  ),
  ""
).infoLink = "https://support.google.com/tagassistant/answer/3059154#http_response";
var te = function (a, b, c, d, e, f, g, h) {
  P.call(this, a, b, d, e, void 0, g, h);
  this.issueClass = 2;
};
Aa(te, P);
var ue = function (a, b, c, d, e, f) {
    return new te(a, b, void 0, c, void 0, d, e, f);
  },
  ve = x(ue, "Debug", null),
  we = x(ue, "Error", null),
  xe = x(ue, "Hidden", null),
  ye = x(ue, "Info", null),
  ze = x(ue, "Suggestion", null),
  Ae = je(
    we("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  );
le(
  je(
    he("Non-standard implementation"),
    "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
  ),
  ""
);
var Be = je(
    we(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  Ee = je(
    ze("Using non-secure code on secure page", function (a) {
      var b = De(a);
      var c = a.documentUri;
      c || ((c = K(a.documentUrl)), (a.documentUri = c));
      return "http" == b.getScheme() && "https" == c.getScheme() ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  Fe = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !Ma(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  };
(function (a, b) {
  return le(
    ye(
      "URL",
      function (c) {
        try {
          var d = De(c).A.O();
          if ((a && !Fe(d, a)) || (b && Fe(d, b))) return !1;
        } catch (e) {}
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url;
      },
      "link_expandable",
      [
        ie(
          ye("Post Data", function (c) {
            return c.postData;
          }),
          "value"
        ),
        Ee,
        ke(
          je(
            fe("URL Encoding Error", function (c) {
              return -1 != c.label.indexOf("&amp;");
            }),
            'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
          )
        ),
        Be,
        Ae,
        we("Error while sending request: %s", function (c) {
          return void 0 !== c.error ? c.error : !1;
        }),
        xe("Redirected to", function (c) {
          return c.redirectUrl;
        }),
        xe("redirectedFrom", function (c) {
          return c.redirectedFrom;
        }),
        ve("requestId", function (c) {
          return c.requestId;
        }),
        we("URL is not parsable.", function (c) {
          if (0 < c.url.indexOf("tiba=")) return !1;
          try {
            return !K(c.url).A.O();
          } catch (d) {
            return !0;
          }
        })
      ]
    ),
    "URLs"
  );
})();
var De = function (a) {
  var b = a.uri;
  if (!b) {
    b = K(encodeURI(a.url));
    if (a.postData)
      try {
        nd(b, a.postData, !0);
      } catch (c) {}
    a.uri = b;
  }
  return b;
};
var Ge = function () {
    this.Jb = [];
    this.qb = {};
  },
  He =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  Ie = {
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
  Me = ie(
    ge("Script", function (a) {
      if (null == this.fa) this.fa = 0;
      else if ((this.fa++, this.fa == be.scripts.length)) return (this.fa = null), !1;
      var b = be.scripts[this.fa];
      this.infoLink = b.src;
      if ((a = void 0 !== b.src && "" != b.src && !Rc(a.relatedIssues, b.src))) {
        a = Td(Ge);
        b = b.src;
        var c;
        (c = Je(b)) || ((c = K(b)), (c = !!Ie[c.H()]));
        a = !(c || Ke(b) || Le(a, b));
      }
      return a;
    }),
    "link_expandable_with_path"
  ),
  Ne = [
    he("Found <script> tag with empty src attribute.", function (a) {
      return a.label == be.location.href;
    })
  ];
Me.qa = Ne;
var Oe = function (a) {
    var b = Td(Ge);
    if (!(a in b.qb)) {
      var c = Ma(b.Jb, function (d) {
        return d.Ud() == a;
      });
      b.qb[a] = c ? c.Qd() : {};
    }
    return b.qb[a];
  },
  Je = function (a) {
    return He.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  Ke = function (a) {
    return !(
      !H("ManualScriptParsing") ||
      !(H("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  Le = function (a, b) {
    return a.Jb.some(function (c) {
      return c.kc && c.isActive()
        ? c.kc.some(function (d) {
            d = new RegExp(d);
            d = b ? d.test.call(d, b) : void 0;
            return d;
          })
        : !1;
    });
  };
function Pe() {
  return sb ? !!ub && !!ub.platform : !1;
}
function Qe() {
  return D("iPhone") && !D("iPod") && !D("iPad");
}
function Re() {
  Qe() || D("iPad") || D("iPod");
}
yb();
xb() || D("Trident") || D("MSIE");
D("Edge");
!D("Gecko") || (-1 != tb().toLowerCase().indexOf("webkit") && !D("Edge")) || D("Trident") || D("MSIE") || D("Edge");
-1 != tb().toLowerCase().indexOf("webkit") && !D("Edge") && D("Mobile");
Pe() || D("Macintosh");
Pe() || D("Windows");
(Pe() ? "Linux" === ub.platform : D("Linux")) || Pe() || D("CrOS");
var Se = t.navigator || null;
Se && (Se.appVersion || "").indexOf("X11");
Pe() || D("Android");
Qe();
D("iPad");
D("iPod");
Re();
tb().toLowerCase().indexOf("kaios");
var Te = function (a) {
    var b = document,
      c = a && "*" != a ? String(a).toUpperCase() : "";
    if (b.querySelectorAll && b.querySelector) a = b.querySelector(c + ".gta-recording-page");
    else {
      a = a && "*" != a ? String(a).toUpperCase() : "";
      if (b.querySelectorAll && b.querySelector) a = b.querySelectorAll(a + ".gta-recording-page");
      else if (b.getElementsByClassName)
        if (((b = b.getElementsByClassName("gta-recording-page")), a)) {
          c = {};
          for (var d = 0, e = 0, f; (f = b[e]); e++) a == f.nodeName && (c[d++] = f);
          c.length = d;
          a = c;
        } else a = b;
      else {
        b = b.getElementsByTagName(a || "*");
        c = {};
        for (e = d = 0; (f = b[e]); e++)
          (a = f.className), "function" == typeof a.split && A(a.split(/\s+/), "gta-recording-page") && (c[d++] = f);
        c.length = d;
        a = c;
      }
      a = a[0] || null;
    }
    return a;
  },
  Ve = function (a, b) {
    Sa(b, function (c, d) {
      c && "object" == typeof c && c.aa && (c = c.ea());
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : Ue.hasOwnProperty(d)
        ? a.setAttribute(Ue[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  },
  Ue = {
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
  Ye = function (a, b, c) {
    var d = arguments,
      e = document,
      f = d[1],
      g = We(e, String(d[0]));
    f && ("string" === typeof f ? (g.className = f) : Array.isArray(f) ? (g.className = f.join(" ")) : Ve(g, f));
    2 < d.length && Xe(e, g, d);
    return g;
  },
  Xe = function (a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      if (!ua(f) || (va(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (va(f)) {
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
        La(g ? Na(f) : f, d);
      }
    }
  },
  We = function (a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  },
  $e = function (a) {
    return Ze(a, function (b) {
      return "string" === typeof b.className && A(b.className.split(/\s+/), "ta-toggle-button");
    });
  },
  Ze = function (a, b) {
    for (var c = 0; a; ) {
      z("parentNode" != a.name);
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
var af = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var bf = {};
var cf = function () {},
  df = function (a, b) {
    if (b !== bf) throw Error("Bad secret");
    this.Dc = a;
  };
ra(df, cf);
df.prototype.toString = function () {
  return this.Dc;
};
var ef = fa([""]),
  ff = ha(["\x00"], ["\\0"]),
  gf = ha(["\n"], ["\\n"]),
  hf = ha(["\x00"], ["\\u0000"]),
  jf = fa([""]),
  kf = ha(["\x00"], ["\\0"]),
  lf = ha(["\n"], ["\\n"]),
  mf = ha(["\x00"], ["\\u0000"]);
function nf(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!of && a === a.raw) ||
    !((of && !pf) || qf(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function qf(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function rf(a) {
  return -1 === a.toString().indexOf("`");
}
var of =
    rf(function (a) {
      return a(ef);
    }) ||
    rf(function (a) {
      return a(ff);
    }) ||
    rf(function (a) {
      return a(gf);
    }) ||
    rf(function (a) {
      return a(hf);
    }),
  pf = qf(jf) && qf(kf) && qf(lf) && qf(mf);
var sf = "function" === typeof URL,
  tf = [],
  uf = function () {};
vf(function (a) {
  var b = Zb($b(), "safevalues").wc;
  if (b) {
    var c = "A URL with content '" + a + "' was sanitized away.",
      d = Qb;
    if ((a = b))
      if ((a = b && d)) {
        a = d.value;
        var e = b ? Wb(Zb($b(), b.Ta())) : Pb;
        a = a >= e.value;
      }
    if (a) {
      d = d || Pb;
      a = Zb($b(), b.Ta());
      "function" === typeof c && (c = c());
      Tb || (Tb = new Sb());
      e = Tb;
      b = b.Ta();
      if (0 < e.Ca) {
        var f = (e.sb + 1) % e.Ca;
        e.sb = f;
        e.xb ? ((e = e.L[f]), e.reset(d, c, b), (b = e)) : ((e.xb = f == e.Ca - 1), (b = e.L[f] = new Ub(d, c, b)));
      } else b = new Ub(d, c, b);
      a.publish(b);
    }
  }
});
function vf(a) {
  -1 === tf.indexOf(a) && tf.push(a);
  uf = function (b) {
    tf.forEach(function (c) {
      c(b);
    });
  };
}
function wf(a) {
  var b = sa.apply(1, arguments);
  nf(a, b.length);
  if (0 === b.length) return ib(a[0]);
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
  return ib(c);
}
var xf = function (a) {
  this.isValid = a;
};
function yf(a) {
  return new xf(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var zf = [
  yf("data"),
  yf("http"),
  yf("https"),
  yf("mailto"),
  yf("ftp"),
  new xf(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })
];
function Af(a) {
  var b = void 0 === b ? zf : b;
  a: if (((b = void 0 === b ? zf : b), !(a instanceof C))) {
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof xf && d.isValid(a)) {
        a = new C(a, jb);
        break a;
      }
    }
    a = void 0;
  }
  return a || lb;
}
zb();
Qe() || D("iPod");
D("iPad");
!D("Android") || Ab() || zb() || yb() || D("Silk");
Ab();
!D("Safari") ||
  Ab() ||
  (xb() ? 0 : D("Coast")) ||
  yb() ||
  (xb() ? 0 : D("Edge")) ||
  (xb() ? wb("Microsoft Edge") : D("Edg/")) ||
  (xb() ? wb("Opera") : D("OPR")) ||
  zb() ||
  D("Silk") ||
  D("Android") ||
  Re();
z(!0);
var Bf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
z(
  10 ===
    Math.log2(
      Math.max.apply(Math, ja(Object.values({ kd: 1, hd: 2, gd: 4, zd: 8, yd: 16, vd: 32, Sc: 64, Id: 128, dd: 256, cd: 512, jd: 1024 })))
    )
);
var Cf = Object.getOwnPropertyDescriptor(Array.prototype, "vc");
Object.defineProperties(Array.prototype, {
  vc: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = Df(this),
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
      var d = Ef(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return Cf ? Cf.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var Df = Bf
  ? function (a) {
      Ia(a, "state is only maintained on arrays.");
      return a[Bf] | 0;
    }
  : function (a) {
      Ia(a, "state is only maintained on arrays.");
      return a.Rd | 0;
    };
function Ef(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var Ff = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var Gf = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    Hf = {};
  Object.defineProperties(Ff, ((Hf[Symbol.hasInstance] = { value: Gf, configurable: !1, writable: !1, enumerable: !1 }), Hf));
  z(Ff[Symbol.hasInstance] === Gf, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var Q = If;
  new Proxy(
    {},
    {
      getPrototypeOf: Q,
      setPrototypeOf: Q,
      isExtensible: Q,
      preventExtensions: Q,
      getOwnPropertyDescriptor: Q,
      defineProperty: Q,
      has: Q,
      get: Q,
      set: Q,
      deleteProperty: Q,
      apply: Q,
      construct: Q
    }
  );
}
function If() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function Jf() {}
(function () {
  var a = t.jspbGetTypeName;
  t.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : Jf;
})(); /*
 SPDX-License-Identifier: Apache-2.0 */
var Kf = Object.prototype.hasOwnProperty;
function Lf() {}
Lf.prototype = Object.create(null);
function Mf(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (Kf.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function Nf(a, b, c) {
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
function Of() {
  var a = new Lf();
  a.__default = Nf;
  a.style = Mf;
  return a;
}
Of();
var Pf = Of();
function Qf(a, b) {
  a.src = hb(b);
  var c, d;
  (c = (b =
    null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
      ? void 0
      : d.call(c, "script[nonce]"))
    ? b.nonce || b.getAttribute("nonce") || ""
    : "") && a.setAttribute("nonce", c);
}
function Rf(a, b) {
  if (b instanceof C) b = kb(b);
  else {
    b: if (sf) {
      try {
        var c = new URL(b);
      } catch (d) {
        c = "https:";
        break b;
      }
      c = c.protocol;
    } else
      c: {
        c = document.createElement("a");
        try {
          c.href = b;
        } catch (d) {
          c = void 0;
          break c;
        }
        c = c.protocol;
        c = ":" === c || "" === c ? "https:" : c;
      }
    "javascript:" === c && (uf(b), (b = void 0));
  }
  void 0 !== b && (a.href = b);
}
var Sf = fa(["data-soyloggingfunction-"]);
(function (a) {
  nf(a, 0);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  af.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  return new df(b, bf);
})(Sf);
Zb($b(), "api_idom");
Pf.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
Pf.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
Pf.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var Tf = function (a, b) {
    this.text = a;
    this.type = b;
  },
  Uf = function (a, b) {
    this.spans = a;
    this.type = b;
  },
  Vf =
    "break case catch continue debugger default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with false null undefined true abstract boolean byte char const double final float goto int long native short synchronized throws transient volatile class enum export extends import super implements interface let package private protected public static yield".split(
      " "
    ),
  Yf = {
    type: "html-tag",
    open: /^<\/?([-_a-zA-Z0-9]+)/,
    close: /^(\/?)>/,
    zb: function (a, b) {
      a.Qa = b[1].toUpperCase();
      return !0;
    },
    Pa: function (a, b) {
      "" == b[1] &&
        ("SCRIPT" == a.Qa
          ? ((a.T = "js-code"), (a.na = null), (a.za = Wf))
          : "STYLE" == a.Qa && ((a.T = "css-code"), (a.na = null), (a.za = Xf)));
      return !0;
    }
  },
  Zf = [
    { type: "html-comment", open: "\x3c!--", close: "--\x3e" },
    { type: "html-cdata", open: "<![CDATA[", close: "]]\x3e" },
    { type: "html-doctype", open: "<!", close: ">" },
    Yf,
    { type: "html-attribute-url", open: /^"(https?|\/\/)/, close: '"', escape: "\\", P: Yf },
    { type: "html-attribute-url", open: /^'(https?|\/\/)/, close: "'", escape: "\\", P: Yf },
    { type: "html-attribute-value", open: '"', close: '"', escape: "\\", P: Yf },
    { type: "html-attribute-value", open: "'", close: "'", escape: "\\", P: Yf },
    { type: "html-attribute-name", open: /(^[-_a-zA-Z0-9]+)/, close: "=", P: Yf }
  ],
  Wf = [
    { type: "js-comment", open: "//", la: !0 },
    { type: "js-comment", open: "/*", close: "*/" },
    { type: "js-string", open: '"', close: '"', escape: "\\", la: !0 },
    { type: "js-regex", open: "/", close: "/", escape: "\\", la: !0 },
    { open: /^\.[a-zA-Z_][a-zA-Z_0-9]*/, Y: !0 },
    {
      type: "js-keyword",
      open: /^[a-zA-Z_][a-zA-Z_0-9]*/,
      zb: function (a, b) {
        return 0 <= Vf.indexOf(b[0]);
      },
      Y: !0
    },
    { open: /^[a-zA-Z_][a-zA-Z_0-9.]*/, Y: !0 },
    { type: "js-number", open: /^[+-]?[0-9.]+/, Y: !0 },
    { type: "js-string", open: "'", close: "'", escape: "\\", la: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/script/,
      close: />/,
      Pa: function (a) {
        a.T = null;
        a.na = null;
        a.za = Zf;
        return !0;
      }
    }
  ],
  $f = { open: "{", close: "}" },
  ag = { open: ":", close: ";", P: $f },
  Xf = [
    { type: "css-comment", open: "\x3c!--", close: ">" },
    { type: "css-comment", open: "/*", close: "*/" },
    { type: "css-string", open: '"', close: '"', escape: "\\", la: !0 },
    { type: "css-number", open: /^[+-]?[0-9.]+[a-zA-Z]*/, Y: !0, P: ag },
    { type: "css-color", open: /^#[0-9a-zA-Z]{3}[0-9a-zA-Z]{0,3}/, Y: !0, P: ag },
    $f,
    ag,
    { type: "css-name", open: /^[-.#_a-zA-Z0-9]+/, Y: !0, P: $f },
    { type: "css-attribute-value", open: /^[-a-zA-Z_0-9]+/, Y: !0, P: ag },
    { type: "css-string", open: "'", close: "'", escape: "\\", la: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/style/,
      close: />/,
      Pa: function (a) {
        a.za = Zf;
        a.T = null;
        a.na = null;
        return !0;
      }
    }
  ],
  cg = function (a, b) {
    var c = { za: b ? Wf : Zf, Qa: null, na: null, T: b ? "js-code" : null },
      d = [],
      e = [null],
      f = [null],
      g = void 0;
    b || (a = Kb(a));
    a.split("\n").forEach(function (h) {
      var l = [],
        n = 0;
      c.na = c.T;
      for (var m = 0, q = h.length; m < q; m += oa ? 0 : 1) {
        var oa = !1;
        if (!g || g.escape != h.charAt(m)) {
          if (g) {
            var Ib = g.close ? bg(c, g.close, h, m, g.Pa) : 0;
            Ib &&
              ((m += Ib),
              (n = h.substring(n, m)),
              l.push(new Tf(n, g.type || c.T)),
              (n = m),
              e.pop(),
              f.pop(),
              (g = f[f.length - 1]),
              (oa = !0));
          }
          for (var Ce = 0, R; !oa && (R = c.za[Ce]); Ce++)
            R.P == g &&
              (Ib = bg(c, R.open, h, m, R.zb)) &&
              (m > n && R.type != e[e.length - 1] && (l.push(new Tf(h.substring(n, m), e[e.length - 1] || c.T)), (n = m)),
              (m += Ib),
              R.Y ? (l.push(new Tf(h.substring(n, m), R.type || c.T)), (n = m)) : (e.push(R.type), f.push(R), (g = R)),
              (oa = !0));
        }
      }
      n < q && l.push(new Tf(h.substring(n, q), e[e.length - 1] || c.T));
      d.push(new Uf(l, c.na));
      g && g.la && (e.pop(), f.pop(), (g = f[f.length - 1]));
    });
    return d;
  },
  bg = function (a, b, c, d, e) {
    var f;
    if (b instanceof RegExp) {
      if ((f = b.exec(c.substring(d))) && (!e || e(a, f))) return f[0].length;
    } else if (c.substring(d, d + b.length) == b) return b.length;
    return 0;
  };
var dg = /\$\{[-_ a-zA-Z0-9]*\}/g,
  eg = {
    "not-working": "Critical Issues",
    "working-with-warnings": "Minor Issues",
    "working-with-suggestions": "Suggestions",
    working: "Working"
  },
  fg = function (a) {
    return { label: a, value: eg[a] || "Details" };
  };
Ta({ Xc: "not-working", Gd: "working-with-suggestions", Kd: "working-with-warnings", Nd: "working" }).map(fg);
var gg = function (a) {
    for (var b = 0, c; (c = a[b]); b++) {
      var d = c.relatedIssues.length + "";
      c.label = c.label.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace("{$GROUP_CHILD_COUNT}_", d);
      c.text = c.text.replace(dg, "");
      c.relatedIssues && gg(c.relatedIssues);
    }
  },
  hg = function (a) {
    for (var b = 0, c; (c = a[b]); b++) (c.buckets = Pc(c.relatedIssues)), hg(c.relatedIssues);
  },
  jg = function (a, b) {
    for (var c = 0, d; (d = b[c]); c++) (d.value = ig(a, d)), (d.status = fg(d.value + "")), d.relatedIssues && jg(a, d.relatedIssues);
  },
  ig = function (a, b) {
    "Tag" == b.type && 0 == b.text.indexOf(b.category) && (b.tagId = b.text.substring(b.category.length + 1));
    if ("Tag" == b.type || "group_status" == b.valueFormat || "value_status" == b.valueFormat) {
      var c = !uc("ShowIgnoredIssues");
      return "unchecked" == b.valueFormat ? "unchecked" : kg(b.relatedIssues, c);
    }
    if ("update_button" == b.valueFormat || "elapsed_time" == b.valueFormat) {
      if ("" != b.label && !/[^0-9]/.test(b.label))
        try {
          return "Last checked " + Zd(parseInt(b.label, 10));
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
          var e = K(b.label);
          a = [];
          var f = [];
          e.H() && a.push({ key: "Hostname", value: e.H() });
          e.getScheme() && a.push({ key: "Protocol", value: e.getScheme() });
          a.push({ key: "Path", value: e.C });
          e.N && a.push({ key: "Hash", value: e.N });
          var g = (c = Wc(b).category) ? Oe(c) : {};
          b.hasUrlParamLookupTable = !!Object.keys(g).length;
          e.A.O().forEach(function (h) {
            var l = "";
            try {
              l = g[h].description || "";
            } catch (n) {}
            f.push({ key: h, value: e.A.get(h), description: l });
          });
          return { Vd: a, Wd: f };
        } catch (h) {
          console.error("Cannot parse URL for issue: %o", b, h);
        }
      else {
        if ("snippet_html" == b.valueFormat) return cg(b.label, !1);
        if ("snippet_js" == b.valueFormat) return cg(b.label, !0);
        if ("map" == b.valueFormat)
          return (dc(b.label, [";"]) || []).map(function (h) {
            var l = h.split("=");
            h = l.shift();
            l = l.join("=");
            try {
              var n = decodeURIComponent(l);
            } catch (m) {
              n = l;
            }
            return { key: h, value: n };
          });
        if ("esc_json" == b.valueFormat) return ec(unescape(b.label));
        if ("json" == b.valueFormat) return cg(gc(b.label), !0);
        if ("link" == b.valueFormat) return ae(a, b.label);
      }
    }
    return b.label;
  },
  kg = function (a, b) {
    return Zc(a, "Error", !!b)
      ? "not-working"
      : Zc(a, "Warning", !!b)
      ? "working-with-warnings"
      : Zc(a, "Suggestion", !!b)
      ? "working-with-suggestions"
      : "working";
  },
  lg = function (a, b) {
    hg(b);
    gg(b);
    jg(a, b);
  };
var mg = function (a) {
  this.url = a.page.url;
  this.title = a.page.title;
  this.timings = a.page.onLoad;
  this.timestamp = a.page.timestamp;
  this.ca = a;
  this.Gc = angular.copy(a);
  this.ba = a.issues;
  this.Ha = this.Ya = null;
  this.ma = {};
  this.ignored = !1;
  this.redirects = [];
  this.lastUpdated = a.lastUpdated;
  var b = this.url;
  for (a = 0; this.ca.redirects[b]; ) {
    b = this.ca.redirects[b];
    var c = parseFloat(b.timeStamp);
    if (a && a < c) break;
    else this.redirects.push(b.redirectedFrom), (b = b.redirectedFrom), (a = c);
  }
};
mg.prototype.H = function () {
  var a = "";
  try {
    a = new I(this.ca.page.url).H();
  } catch (b) {
    console.log("Error while parsing URL: %s", this.ca.page.url);
  }
  return a;
};
mg.prototype.getScheme = function () {
  var a = "";
  try {
    a = new I(this.ca.page.url).getScheme();
  } catch (b) {
    console.log("Error while parsing URL: %s", this.ca.page.url);
  }
  return a;
};
var og = function (a) {
    bd(a.ba || []);
    a.ba.forEach(function (b) {
      cd(b, b.view || "Metadata");
    });
    Pa(a.ba, function (b, c) {
      return b.valueFormat.localeCompare(c.valueFormat) || b.category.localeCompare(c.category) || b.text.localeCompare(c.text);
    });
    Tc(a.H(), a.ba);
    lg(a.ca.page.url, a.ba);
    ad(a.ba);
  },
  pg = function (a) {
    a.Ya || (a.Ya = Oc(a.ba, "Tag"));
    return a.Ya;
  },
  qg = function (a) {
    a.Ha ||
      ((a.Ha = []),
      Ic.forEach(function (b) {
        Oa(this.Ha, Oc(this.ba, b) || []);
      }, a));
    return a.Ha;
  },
  sg = function (a, b, c, d) {
    var e = b.id || "";
    a.ma[e] || ((a.ma[e] = {}), rg(a, b, b.relatedIssues));
    var f = [];
    c.forEach(function (g) {
      Oa(f, this.ma[e][g] || []);
    }, a);
    d &&
      (f = f.filter(function (g) {
        return g.view == d;
      }));
    return f;
  },
  rg = function (a, b, c) {
    if (b.id && c.length) {
      var d = b.id;
      c.forEach(function (e) {
        "Bucket" != e.type &&
          "Group" != e.type &&
          (this.ma[d][e.type] || (this.ma[d][e.type] = []),
          e.deleted ||
            e.deduped ||
            "Hidden" == e.type ||
            "entry" == e.valueFormat ||
            "option" == e.valueFormat ||
            this.ma[d][e.type].push(e),
          rg(this, b, e.relatedIssues));
      }, a);
    }
  };
mg.prototype.tc = function (a) {
  return A((a.parent ? Vc(a.parent) : 1) ? Ic : Jc, a.type);
};
mg.prototype.isOptimizeMessage = mg.prototype.tc;
mg.prototype.getScheme = mg.prototype.getScheme;
var tg = function () {
  this.countErrors = x(this.Ga, "Error");
};
tg.prototype.getTags = function (a, b) {
  a = pg(a);
  b ||
    (a = a.filter(function (c) {
      return !c.ignored;
    }));
  return a;
};
tg.prototype.getOptimizationIssues = function (a, b) {
  a = qg(a);
  b ||
    (a = a.filter(function (c) {
      return !c.ignored;
    }));
  return a;
};
tg.prototype.Ga = function (a, b) {
  b = pg(b);
  return (b.length && $c(b, a, !0)) || 0;
};
var ug = [tg];
var vg = function (a, b) {
  this.Va = a;
  this.fb = b;
  this.oa = null;
  this.Db = 1e4;
  this.jb = this.Ab = this.Bb = null;
};
vg.prototype.setInterval = function (a) {
  this.Db = a;
  return this;
};
var wg = function (a) {
  a.oa && (a.Va.cancel(a.oa), (a.oa = null));
  a.oa = a.Va(a.Ec.bind(a), a.Db, 0, !1);
};
vg.prototype.Ec = function () {
  var a = this.Bb();
  this.fb.when(a).then(this.nc.bind(this));
};
vg.prototype.nc = function (a) {
  this.Ab(a);
  this.jb && this.jb(a) && (this.Va.cancel(this.oa), (this.oa = null));
};
var xg = ["$interval", "$q", vg];
var yg = ["Info", "Fine", "Debug"],
  zg = function (a) {
    a.getQueryInfoDetailMap = this.pc;
  };
zg.prototype.getViews = function (a) {
  return Yc(a);
};
zg.prototype.getViews = zg.prototype.getViews;
zg.prototype.getInfoIssuesForTag = function (a, b, c, d) {
  d = yg.indexOf(d);
  return sg(a, b, yg.slice(0, d + 1), c);
};
zg.prototype.getOptimizationIssuesForTag = function (a, b, c) {
  return sg(a, b, Jc).filter(function (d) {
    return c || !d.ignored;
  });
};
zg.prototype.pc = function (a) {
  return (a = Wc(a).category) ? Oe(a) : {};
};
var Ag = ["$scope", zg];
var Bg = function (a, b) {
  this.ic = a[t.Symbol.iterator]();
  this.xc = b;
};
Bg.prototype[Symbol.iterator] = function () {
  return this;
};
Bg.prototype.next = function () {
  var a = this.ic.next();
  return { value: a.done ? void 0 : this.xc.call(void 0, a.value), done: a.done };
};
var Cg = function (a, b) {
  return new Bg(a, b);
};
var Dg = function () {};
Dg.prototype.next = function () {
  return Eg;
};
var Eg = Nb({ done: !0, value: void 0 });
Dg.prototype.X = function () {
  return this;
};
var Hg = function (a) {
    if (a instanceof S || a instanceof Fg || a instanceof Gg) return a;
    if ("function" == typeof a.next)
      return new S(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new S(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.X)
      return new S(function () {
        return a.X();
      });
    throw Error("Not an iterator or iterable.");
  },
  S = function (a) {
    this.Sa = a;
  };
S.prototype.X = function () {
  return new Fg(this.Sa());
};
S.prototype[Symbol.iterator] = function () {
  return new Gg(this.Sa());
};
S.prototype.mb = function () {
  return new Gg(this.Sa());
};
var Fg = function (a) {
  this.wa = a;
};
ra(Fg, Dg);
Fg.prototype.next = function () {
  return this.wa.next();
};
Fg.prototype[Symbol.iterator] = function () {
  return new Gg(this.wa);
};
Fg.prototype.mb = function () {
  return new Gg(this.wa);
};
var Gg = function (a) {
  S.call(this, function () {
    return a;
  });
  this.wa = a;
};
ra(Gg, S);
Gg.prototype.next = function () {
  return this.wa.next();
};
var Ig = function (a, b) {
  this.g = {};
  this.l = [];
  this.Aa = this.size = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
k = Ig.prototype;
k.U = function () {
  return this.size;
};
k.J = function () {
  Jg(this);
  for (var a = [], b = 0; b < this.l.length; b++) a.push(this.g[this.l[b]]);
  return a;
};
k.O = function () {
  Jg(this);
  return this.l.concat();
};
k.sa = function (a) {
  return this.has(a);
};
k.has = function (a) {
  return Kg(this.g, a);
};
k.Da = function (a) {
  for (var b = 0; b < this.l.length; b++) {
    var c = this.l[b];
    if (Kg(this.g, c) && this.g[c] == a) return !0;
  }
  return !1;
};
k.equals = function (a, b) {
  if (this === a) return !0;
  if (this.size != a.U()) return !1;
  b = b || Lg;
  Jg(this);
  for (var c, d = 0; (c = this.l[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
  return !0;
};
var Lg = function (a, b) {
  return a === b;
};
Ig.prototype.clear = function () {
  this.g = {};
  this.l.length = 0;
  this.V(0);
  this.Aa = 0;
};
Ig.prototype.remove = function (a) {
  return this.delete(a);
};
Ig.prototype.delete = function (a) {
  return Kg(this.g, a) ? (delete this.g[a], this.V(this.size - 1), this.Aa++, this.l.length > 2 * this.size && Jg(this), !0) : !1;
};
var Jg = function (a) {
  if (a.size != a.l.length) {
    for (var b = 0, c = 0; b < a.l.length; ) {
      var d = a.l[b];
      Kg(a.g, d) && (a.l[c++] = d);
      b++;
    }
    a.l.length = c;
  }
  if (a.size != a.l.length) {
    var e = {};
    for (c = b = 0; b < a.l.length; ) (d = a.l[b]), Kg(e, d) || ((a.l[c++] = d), (e[d] = 1)), b++;
    a.l.length = c;
  }
};
k = Ig.prototype;
k.get = function (a, b) {
  return Kg(this.g, a) ? this.g[a] : b;
};
k.set = function (a, b) {
  Kg(this.g, a) || (this.V(this.size + 1), this.l.push(a), this.Aa++);
  this.g[a] = b;
};
k.addAll = function (a) {
  if (a instanceof Ig) for (var b = a.O(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
  else for (b in a) this.set(b, a[b]);
};
k.forEach = function (a, b) {
  for (var c = this.O(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
k.clone = function () {
  return new Ig(this);
};
k.toObject = function () {
  Jg(this);
  for (var a = {}, b = 0; b < this.l.length; b++) {
    var c = this.l[b];
    a[c] = this.g[c];
  }
  return a;
};
k.keys = function () {
  return Hg(this.X(!0)).mb();
};
k.values = function () {
  return Hg(this.X(!1)).mb();
};
k.entries = function () {
  var a = this;
  return Cg(this.keys(), function (b) {
    return [b, a.get(b)];
  });
};
k.X = function (a) {
  Jg(this);
  var b = 0,
    c = this.Aa,
    d = this,
    e = new Dg();
  e.next = function () {
    if (c != d.Aa) throw Error("The map has changed since the iterator was created");
    if (b >= d.l.length) return Eg;
    var f = d.l[b++];
    return { value: a ? f : d.g[f], done: !1 };
  };
  return e;
};
k.V = function (a) {
  this.size = a;
};
var Kg = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var T = function (a) {
    this.g = new Ig();
    this.size = 0;
    a && this.addAll(a);
  },
  Mg = function (a) {
    var b = typeof a;
    return ("object" == b && a) || "function" == b
      ? "o" + ((Object.prototype.hasOwnProperty.call(a, wa) && a[wa]) || (a[wa] = ++xa))
      : b.slice(0, 1) + a;
  };
k = T.prototype;
k.U = function () {
  return this.g.size;
};
k.add = function (a) {
  this.g.set(Mg(a), a);
  this.V(this.g.size);
};
k.addAll = function (a) {
  a = ed(a);
  for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
  this.V(this.g.size);
};
k.removeAll = function (a) {
  a = ed(a);
  for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
  this.V(this.g.size);
};
k.delete = function (a) {
  a = this.g.remove(Mg(a));
  this.V(this.g.size);
  return a;
};
k.remove = function (a) {
  return this.delete(a);
};
k.clear = function () {
  this.g.clear();
  this.V(0);
};
k.has = function (a) {
  return this.g.sa(Mg(a));
};
k.contains = function (a) {
  return this.g.sa(Mg(a));
};
k.J = function () {
  return this.g.J();
};
k.values = function () {
  return this.g.values();
};
k.clone = function () {
  return new T(this);
};
k.equals = function (a) {
  return this.U() == dd(a) && Ng(this, a);
};
var Ng = function (a, b) {
  var c = dd(b);
  if (a.U() > c) return !1;
  !(b instanceof T) && 5 < c && (b = new T(b));
  return hd(a, function (d) {
    var e = b;
    if (e.contains && "function" == typeof e.contains) d = e.contains(d);
    else if (e.Da && "function" == typeof e.Da) d = e.Da(d);
    else if (ua(e) || "string" === typeof e) d = A(e, d);
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
T.prototype.X = function () {
  return this.g.X(!1);
};
T.prototype[Symbol.iterator] = function () {
  return this.values();
};
T.prototype.V = function (a) {
  this.size = a;
};
var Og = function (a, b, c, d) {
  this.o = a;
  this.fb = c;
  this.Cb = d;
  this.gb = [];
  this.Xa = 0;
  this.Fb = new T();
  a = this.Cb.setInterval(1e4);
  b = this.ub.bind(this);
  a.Bb = b;
  b = this.hc.bind(this);
  a.Ab = b;
  b = this.lc.bind(this);
  a.jb = b;
};
k = Og.prototype;
k.getRecordedPages = function () {
  return this.gb;
};
k.tb = function () {
  return this.ub(this.Fc.bind(this));
};
k.ub = function (a) {
  var b = this.fb.defer(),
    c = { message: "GetRecordedIssues" };
  this.o.popoutMode && (c.tabId = this.o.tabId);
  O(N, null, null, "Getting recorded issues from background");
  var d = function (e, f) {
    e.resolve(f);
  };
  chrome.runtime.sendMessage(null, c, {}, x(a || d, b));
  return b.promise;
};
k.Fc = function (a, b) {
  b
    ? ((this.Xa = b.lastUpdated),
      b.statusInfos.forEach(function (c) {
        if (!this.Fb.has(c.page.id)) {
          var d = new mg(c);
          og(d);
          this.gb.push(d);
          this.Fb.add(c.page.id);
        }
      }, this),
      a.resolve(),
      this.o.$broadcast("DATA_LOADED"),
      this.o.popoutMode || wg(this.Cb))
    : a.reject(b);
};
k.hc = function (a) {
  this.Xa < a.lastUpdated && this.o.$broadcast("DATA_UPDATED_AT_BACKEND");
};
k.lc = function (a) {
  return "disabled" == a.state || this.Xa < a.lastUpdated;
};
var Pg = function (a) {
    var b = [];
    a.gb.forEach(function (c) {
      c.ignored || b.push(c.Gc);
    });
    return b;
  },
  Qg = ["$rootScope", "$location", "$q", "tvt.service.Poller", Og];
var Sg = function (a, b, c, d, e) {
  this.o = a;
  this.B = b;
  this.W = c;
  this.ha = d;
  this.S = e;
  this.gtaProcessingDone = this.Z = this.Ma = this.Ib = !1;
  this.B.$on("DATA_LOADED", w(this.hb, this));
  this.o.$on("SwitchToGA", w(this.Hc, this));
  this.o.$on(
    "GATabSelected",
    function () {
      this.gtaProcessingDone || Rg(this);
    }.bind(this)
  );
  chrome.runtime.onMessage.addListener(this.jc.bind(this));
  (!this.o.popoutMode && this.S.getRecordedPages().length) || this.o.$broadcast("SwitchToGA");
};
Sg.prototype.hb = function () {
  this.gtaProcessingDone = !1;
};
var Tg = function (a) {
  var b = a.ha
    .simple()
    .hideDelay(1e4)
    .position("top right")
    .content(a.o.popoutMode ? "Please wait while we analyse your tags..." : "Analyzing your recording. Please wait...");
  a.ha.show(b);
};
Sg.prototype.Cc = function (a, b) {
  O(N, null, null, "Result of /logincheck: %O", b);
  b &&
    (200 == b.status && "logged in" == b.responseText
      ? ((this.Ib = !0), void 0 === this.Ma ? ((a = Ug(Fc())), hc(a, w(this.Bc, this, a))) : Vg(this))
      : 403 == b.status
      ? (Wg(this, "User forbidden to login to GA"), (this.gtaProcessingDone = !0), Rf(this.W.location, Af(Ug(Gc()))))
      : b.responseURL && a != b.responseURL
      ? Rf(this.W.location, Af(Ug(b.responseURL)))
      : this.ya(b.responseText));
};
Sg.prototype.Bc = function (a, b) {
  O(N, null, null, "Result of internal/logincheck: %O", b);
  b &&
    (200 == b.status && "logged in" == b.responseText
      ? ((this.Ma = !0), Vg(this))
      : 403 == b.status
      ? (Wg(this, "User forbidden to login to internal GA ICS"), (this.Ma = !1), Vg(this))
      : b.responseURL && a != b.responseURL
      ? Rf(document.location, Af(Ug(b.responseURL)))
      : this.ya(b.responseText));
};
Sg.prototype.R = function (a) {
  _gaq.push(["_trackEvent", "recordings", a, "ext"]);
  this.Z && ga("send", "event", "recordings", a, "ext");
};
var Wg = function (a, b) {
    _gaq.push(["_trackEvent", "recordings", "ga-report-load-failed:" + b, "ext"]);
    a.Z && ga("send", "exception", { Pd: b });
  },
  Rg = function (a) {
    if (!a.gtaProcessingDone) {
      var b = Ug(Ec());
      O(N, null, null, "Trying to login using %s", b);
      hc(b, w(a.Cc, a, b));
    }
  },
  Xg = function (a, b) {
    a.R(b);
    b = document;
    if ((b = (b.getElementsByClassName ? b.getElementsByClassName("gta-recording-page")[0] : Te("*")) || null)) b.style.display = "";
    a.gtaProcessingDone || ((a.gtaProcessingDone = !0), a.B.$apply(), a.ha.hide());
  };
Sg.prototype.ya = function (a) {
  if (!this.gtaProcessingDone) {
    O(N, null, null, "Error while generating the report: %s", a);
    var b = Te("IFRAME");
    b &&
      (document.getElementById("gta-request-error") ||
        (b.parentNode &&
          b.parentNode.insertBefore(Ye("DIV", { id: "gta-request-error" }, a || "There is some problem while generating the report"), b)));
    this.gtaProcessingDone = !0;
    this.B.$apply();
    this.ha.hide();
  }
};
var Vg = function (a) {
    var b = Pg(a.S) || [];
    O(N, null, null, "Sending recordings to GA: %O", b);
    Yg(a, 0 < b.length);
  },
  Zg = function (a, b) {
    var c = [];
    a.S.getRecordedPages().forEach(function (d) {
      d.ignored && c.push(d.ca.page.id);
    });
    return b + "&ignored=" + c.join(",");
  },
  Yg = function (a, b) {
    var c = Te("IFRAME");
    if (c) {
      var d = function (g, h) {
          return function (l) {
            this.W.linker = this.W.linker || new this.W.gaplugins.Linker(l);
            l = this.W.linker.decorate(g, h);
            c.src = l;
          };
        },
        e = a.Ma ? Dc() : Cc(),
        f = "";
      b
        ? ((f = new I(Zg(a, Ug(e)))),
          a.o.propertyId && wd(f, "property", a.o.propertyId),
          a.o.popoutMode && wd(f, "tabId", a.o.tabId),
          O(N, null, null, "Loading GTA page - %s", f.toString()),
          Tg(a),
          setTimeout(w(a.ya, a, "Request timeout, No response from GA."), 6e4))
        : ((f = new I(Ug(e + "report"))),
          O(N, null, null, "No recordings, so showing Upload HAR page - %s", f.toString()),
          Xg(a, "ga-upload-har-page"));
      a.Z ? ga(d(f.toString())) : (c.src = f.toString());
    } else O(N, null, null, "GTA container doesn't exist");
  };
Sg.prototype.jc = function (a) {
  O(N, a.tabId, null, "Captured request: %O", a);
  if (a && "GtaAnalyze" == a.message) {
    var b = a.statusCode;
    O(N, a.tabId, a, "Status of GA report request: %s", b);
    switch (b) {
      case 200:
        Xg(this, "ga-report-loaded");
        break;
      case 400:
        this.ya(Yd("Bad HTTP request: %s", "/analyze"));
        break;
      default:
        this.ya();
    }
  }
};
var Ug = function (a) {
  return a + "?gta=true";
};
Sg.prototype.Hc = function () {
  this.gtaProcessingDone = !1;
  this.Ib ? Vg(this) : Rg(this);
};
var $g = ["$rootScope", "$scope", "$window", "$mdToast", "tvt.services.DataInterface", Sg];
var ah = function (a) {
  return a.infoLink && 0 != a.infoLink.lastIndexOf("#", 0) ? a.infoLink : Ha(Wc(a).infoLink + a.infoLink);
};
var U = function (a, b, c, d, e, f, g, h) {
  this.Wa = f("tvt.controller.IssueListBase", {});
  this.Ja = f("tvt.controller.TagDetailBase", { $scope: b });
  this.o = a;
  this.B = b;
  this.W = c;
  this.ha = g;
  this.S = h;
  this.categoryFilter = {};
  this.levelOfDetail = "Fine";
  this.I = {};
  this.tagFilter = {};
  this.arePagesExpanded = !0;
  this.areBucketsExpanded = this.areTagsExpanded = !1;
  this.filterByCategory = this.vb.bind(this);
  this.filterByCategoryAndTag = this.oc.bind(this);
  this.countWarnings = x(this.Ga, "Warning");
  this.countSuggestions = x(this.Ga, "Suggestion");
  this.Z = this.ignoreTriggered = this.showIgnoredModels = !1;
  this.getInfoLink = ah;
  this.pageToggle = [];
  this.B.$on("DATA_LOADED", w(this.hb, this));
  this.B.$on("DATA_UPDATED_AT_BACKEND", this.Ac.bind(this));
  this.B.$on("pageToggle", this.Oc.bind(this));
  Hc();
  d.on(
    "click",
    w(function (l) {
      l.source && "ta-ignore" == l.source && (this.R("ignored-" + l.modelType), (this.ignoreTriggered = !0));
    }, this)
  );
  this.B.getInfoIssuesForTag = this.wb.bind(this);
  this.getTags = this.Wa.getTags;
  this.countErrors = this.Wa.countErrors.bind(this);
  this.getViews = this.Ja.getViews;
};
k = U.prototype;
k.hb = function () {
  this.refreshFilterMaps();
};
k.Ac = function () {
  var a = this.ha.simple().content("Recording data updated. Click to refresh.").action("update").hideDelay(!1).position("top right");
  this.ha.show(a).then(this.S.tb.bind(this.S));
};
k.getRecordedPages = function () {
  return this.S.getRecordedPages();
};
k.getRecordedTagCount = function () {
  return Object.keys(this.tagFilter).length;
};
k.getGAProperties = function () {
  return "Google Analytics" in this.I ? Array.from(this.I["Google Analytics"].values()) : [];
};
k.getTagCategories = function () {
  Object.keys(this.I).length || this.refreshFilterMaps();
  return Object.keys(this.I);
};
k.getTagLabels = function (a) {
  Object.keys(this.I).length || this.refreshFilterMaps();
  return this.I[a].J();
};
k.refreshFilterMaps = function () {
  this.S.getRecordedPages().forEach(function (a) {
    pg(a).forEach(function (b) {
      b.category &&
        b.label &&
        (b.category in this.I || (this.I[b.category] = new T()),
        a.ignored && !this.showIgnoredModels
          ? (this.I[b.category].remove(b.label), this.I[b.category].U() || delete this.I[b.category])
          : this.I[b.category].contains(b.label) ||
            (this.I[b.category].add(b.label),
            (this.tagFilter[b.label] = b.label in this.tagFilter ? this.tagFilter[b.label] : "unchecked" != b.valueFormat && !b.ignored),
            (this.categoryFilter[b.category] = b.category in this.categoryFilter ? this.categoryFilter[b.category] : !0)));
    }, this);
  }, this);
};
k.vb = function (a) {
  return !!a.category && (!(a.category in this.categoryFilter) || this.categoryFilter[a.category]);
};
k.oc = function (a) {
  return this.vb(a) && (!(a.label in this.tagFilter) || this.tagFilter[a.label]);
};
k.getOptimizationIssues = function (a) {
  return this.Wa.getOptimizationIssues(a, this.showIgnoredModels);
};
k.showGAProperty = function (a) {
  this.o.propertyId = a;
  this.o.$broadcast("SwitchToGA");
};
k.Ga = function (a, b) {
  b = pg(b).filter(function (c) {
    return this.categoryFilter[c.category || ""];
  }, this);
  return (b.length && $c(b, a, !0)) || 0;
};
k.wb = function (a, b, c) {
  return this.Ja.getInfoIssuesForTag(a, b, c, this.levelOfDetail);
};
k.getViewLabel = function (a, b, c) {
  var d = this.wb.apply(this, arguments);
  if (
    1 == d.length &&
    ((d = d[0]), d.templateMarker == c || d.templateMarker + "s" == c || ("HTML Snippet" == d.templateMarker && "Code Snippet" == c))
  ) {
    var e = d.templateMarker;
    d.text = "";
    return e;
  }
  return c;
};
k.getOptimizationIssuesForTag = function (a, b) {
  return this.Ja.getOptimizationIssuesForTag.apply(this.Ja, [].concat(ja(arguments), [this.showIgnoredModels]));
};
k.updateIgnoreSettings = function (a, b, c) {
  if ("Tag" == b)
    a: for (var d = 0; (b = this.getRecordedPages()[d++]); )
      for (var e, f = 0; (e = pg(b)[f++]); )
        if (e.label == a) {
          a = e;
          c = b;
          a.ignored = !a.ignored;
          break a;
        }
  c = Uc(a, c.H());
  tc(c, a.ignored);
};
k.R = function (a) {
  _gaq.push(["_trackEvent", "recording-page-ext", a]);
  this.Z && ga("send", "event", "recording-page-ext", a);
};
k.printPage = function () {
  this.R("printed");
  window.print();
};
k.togglePages = function () {
  this.arePagesExpanded = !this.arePagesExpanded;
  this.R(this.arePagesExpanded ? "all-pages-expanded" : "all-pages-collapsed");
  this.B.$broadcast("pageToggle", this.arePagesExpanded);
};
k.Oc = function (a, b) {
  !angular.equals(a.targetScope, a.currentScope) &&
    this.pageToggle.length &&
    this.pageToggle.every(function (c) {
      return b == c.isExpanded();
    }) &&
    (this.arePagesExpanded = b);
};
k.toggleTags = function () {
  this.areTagsExpanded = !this.areTagsExpanded;
  this.R(this.areTagsExpanded ? "all-tags-expanded" : "all-tags-collapsed");
  this.B.$broadcast("tagToggle", this.areTagsExpanded);
};
k.toggleBuckets = function () {
  this.areBucketsExpanded = !this.areBucketsExpanded;
  this.R(this.areBucketsExpanded ? "all-buckets-expanded" : "all-buckets-collapsed");
  this.B.$broadcast("bucketToggle", this.areBucketsExpanded);
};
U.prototype.toggleBuckets = U.prototype.toggleBuckets;
U.prototype.toggleTags = U.prototype.toggleTags;
U.prototype.togglePages = U.prototype.togglePages;
U.prototype.printPage = U.prototype.printPage;
U.prototype.updateIgnoreSettings = U.prototype.updateIgnoreSettings;
U.prototype.getOptimizationIssuesForTag = U.prototype.getOptimizationIssuesForTag;
U.prototype.getViewLabel = U.prototype.getViewLabel;
U.prototype.showGAProperty = U.prototype.showGAProperty;
U.prototype.getOptimizationIssues = U.prototype.getOptimizationIssues;
U.prototype.refreshFilterMaps = U.prototype.refreshFilterMaps;
U.prototype.getTagLabels = U.prototype.getTagLabels;
U.prototype.getTagCategories = U.prototype.getTagCategories;
U.prototype.getGAProperties = U.prototype.getGAProperties;
U.prototype.getRecordedTagCount = U.prototype.getRecordedTagCount;
U.prototype.getRecordedPages = U.prototype.getRecordedPages;
var bh = ["$rootScope", "$scope", "$window", "$document", "$timeout", "$controller", "$mdToast", "tvt.services.DataInterface", U];
var ch = angular
  .module("tvt.templates.gtar", [])
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
          "/templates/analytics_report.html",
          '<md-card>\n  <md-card-content id="gta-content" class="gta-content" layout="column"\n                   layout-align="center center">\n    <md-progress-linear md-mode="indeterminate"\n                        ng-hide="analyticsCtrl.gtaProcessingDone">\n    </md-progress-linear>\n    <iframe id="gta-recording-page" class="gta-recording-page" frameborder="0"\n            style="display:none;"></iframe>\n  </md-card-content>\n</md-card>\n'
        ),
        a.put(
          "/templates/assistant_report.html",
          '<md-content layout="row">\n  <md-sidenav class="ta-rec-sidenav md-whiteframe-z2"\n              md-is-locked-open="true">\n    <div class="action-buttons" layout="column">\n      <md-button class="" ng-click="assistantCtrl.printPage()">\n        <md-icon md-svg-icon="print" aria-hidden="true" ></md-icon>\n        Print\n      </md-button>\n    </div>\n    <md-divider></md-divider>\n    <div class="nav-header">Filter Tags:</div>\n    <div class="recording-filters" ng-show="assistantCtrl.getTagCategories().length">\n      <div ng-repeat="category in assistantCtrl.getTagCategories()">\n        <md-checkbox class="category-filter"\n                     ng-model="assistantCtrl.categoryFilter[category]">\n          {{category}}\n        </md-checkbox>\n        <div class="recording-tag-filters"\n             ng-show="assistantCtrl.getTagLabels(category).length && assistantCtrl.categoryFilter[category]">\n          <div ng-repeat="tag in assistantCtrl.getTagLabels(category)">\n            <md-checkbox class="category-filter"\n                         ng-model="assistantCtrl.tagFilter[tag]"\n                         ng-change="assistantCtrl.updateIgnoreSettings(tag, \'Tag\')"\n                         aria-label="{{tag}}">\n              <div layout="column">\n                <span ng-repeat="valuePart in tag.split(\';\')">\n                  {{valuePart}}\n                </span>\n              </div>\n            </md-checkbox>\n          </div>\n        </div>\n      </div>\n    </div>\n    <md-divider></md-divider>\n    <div class="nav-header">Details:</div>\n    <div class="recording-filters" layout="column">\n      <md-radio-group ng-model="assistantCtrl.levelOfDetail">\n        <md-radio-button value="Info">\n          Basic View\n        </md-radio-button>\n        <md-radio-button value="Fine">\n          Detailed View\n        </md-radio-button>\n        <md-radio-button value="Debug" ng-if="assistantCtrl.isInternal">\n          Debug View\n        </md-radio-button>\n      </md-radio-group>\n    </div>\n    <div class="action-buttons" layout="column">\n      <md-button class="" ng-click="assistantCtrl.togglePages()">\n        <md-icon ng-hide="assistantCtrl.arePagesExpanded" aria-hidden="true"\n                 md-svg-icon="right"></md-icon>\n        <md-icon ng-show="assistantCtrl.arePagesExpanded" aria-hidden="true"\n                 md-svg-icon="down"></md-icon>\n        Pages\n      </md-button>\n      <md-button class="" ng-click="assistantCtrl.toggleTags()">\n        <md-icon ng-hide="assistantCtrl.areTagsExpanded" aria-hidden="true"\n                 md-svg-icon="right"></md-icon>\n        <md-icon ng-show="assistantCtrl.areTagsExpanded" aria-hidden="true"\n                 md-svg-icon="down"></md-icon>\n        Tags\n      </md-button>\n      <md-button class="" ng-click="assistantCtrl.toggleBuckets()">\n        <md-icon ng-hide="assistantCtrl.areBucketsExpanded" aria-hidden="true"\n                 md-svg-icon="right"></md-icon>\n        <md-icon ng-show="assistantCtrl.areBucketsExpanded" aria-hidden="true"\n                 md-svg-icon="down"></md-icon>\n        Buckets\n      </md-button>\n      <md-button class="" style="display: none"\n                 ng-click="assistantCtrl.areUrlsExpanded = !assistantCtrl.areUrlsExpanded">\n        <md-icon ng-hide="assistantCtrl.areUrlsExpanded" aria-hidden="true"\n                 md-svg-icon="right"></md-icon>\n        <md-icon ng-show="assistantCtrl.areUrlsExpanded" aria-hidden="true"\n                 md-svg-icon="down"></md-icon>\n        URL Parameter\n      </md-button>\n    </div>\n    <md-divider></md-divider>\n    <div class="nav-header">Show/Hide Ignored Models:</div>\n    <div class="recording-filters">\n      <md-switch ng-model="assistantCtrl.showIgnoredModels"\n                 ng-disabled="!assistantCtrl.ignoreTriggered"\n                 ng-change="assistantCtrl.refreshFilterMaps()">\n        {{assistantCtrl.showIgnoredModels ? \'Visible\' : \'Hidden\'}}\n      </md-switch>\n    </div>\n  </md-sidenav>\n  <md-content class="ta-rec-content" flex layout="column">\n    <header class="ta-section-header">Recording Summary</header>\n    <md-card class="page-card">\n      <md-card-content>\n        <p>\n          Google Tag Assistant Recording tracked\n          {{assistantCtrl.getRecordedPages().length}} pages and\n          {{assistantCtrl.getRecordedTagCount()}} hits.\n        </p>\n        <section ng-if="assistantCtrl.getGAProperties().length">\n          <p>\n            We noticed {{assistantCtrl.getGAProperties().length}} Google\n            Analytics Account. To view a more detailed report about your\n            Analytics account, click on the relevant account:\n          </p>\n          <ul>\n            <li ng-repeat="propertyId in\n                           assistantCtrl.getGAProperties()">\n              <md-button ng-click="assistantCtrl.showGAProperty(propertyId)">\n                {{propertyId}}\n              </md-button>\n            </li>\n          </ul>\n        </section>\n      </md-card-content>\n    </md-card>\n\n    <header class="ta-section-header">Recorded Pages</header>\n    <md-card class="page-card"\n             ng-repeat="tabStatus in assistantCtrl.getRecordedPages()\n                        as tabStatuses\n                        track by tabStatus.timestamp"\n             ng-show="!tabStatus.ignored || assistantCtrl.showIgnoredModels">\n      <md-card-content>\n        <ta-toggle-menu start-expanded monitor-event="pageToggle"\n                        register-to="::assistantCtrl"\n                        ng-disabled="tabStatus.ignored">\n          <ta-menu-label class="recorded-request">\n            <span layout="row">\n              <span layout="row" layout-align="start center" flex>\n                <span>\n                  <md-icon aria-hidden="true" md-svg-icon="pageload">\n                  </md-icon>\n                </span>\n                <span class="report-card-title">Pageload {{::$index + 1}}:</span>\n                <span title="{{::tabStatus.title}}" class="page-load-title">\n                  {{::tabStatus.title}}\n                </span>\n              </span>\n              <ta-ignore class="ignore-request" model="::tabStatus"\n                         on-click="assistantCtrl.refreshFilterMaps()"\n                         model-type="request" update-model-state></ta-ignore>\n            </span>\n          </ta-menu-label>\n          <ta-menu-content>\n            <section class="page-stats ta-indent-align">\n              <div layout="row">\n                <span class="stat-label">URL</span>\n                <span>:</span>\n                <span class="stat-value">{{::tabStatus.url | decodeValue}}</span>\n              </div>\n              <div layout="row" ng-repeat="redirectUrl in ::tabStatus.redirects">\n                <span class="stat-label">Redirect</span>\n                <span>:</span>\n                <span class="stat-value">{{::redirectUrl}}</span>\n              </div>\n              <div layout="row">\n                <span class="stat-label">Time</span>\n                <span>:</span>\n                <ta-date-time class="stat-value"\n                              timestamp="{{::tabStatus.timestamp}}"\n                              add-interval-from="{{::tabStatuses[$index - 1].timestamp}}"\n                              suffix="after Pageload {{::$index}}">\n                </ta-date-time>\n              </div>\n              <div layout="row">\n                <span class="stat-label">Page Load</span>\n                <span>:</span>\n                <span class="stat-value">{{::tabStatus.timings / 1000 | number: 2}} s</span>\n              </div>\n              <div layout="row">\n                <span class="stat-label">Tags</span>\n                <span>:</span>\n                <span class="stat-value">\n                  <ul>\n                    <li>\n                      <span>\n                        {{(assistantCtrl.getTags(tabStatus) |\n                        filter:assistantCtrl.filterByCategoryAndTag).length || 0}} in Total\n                      </span>\n                    </li>\n                    <li ng-if="assistantCtrl.countErrors(tabStatus)">\n                      <span class="error">\n                        {{assistantCtrl.countErrors(tabStatus)}} Errors\n                      </span>\n                    </li>\n                    <li ng-if="assistantCtrl.countWarnings(tabStatus)">\n                      <span class="warning">\n                        {{assistantCtrl.countWarnings(tabStatus)}} Warnings\n                      </span>\n                    </li>\n                    <li ng-if="assistantCtrl.countSuggestions(tabStatus)">\n                      <span class="suggestion">\n                        {{assistantCtrl.countSuggestions(tabStatus)}} Suggestions\n                      </span>\n                    </li>\n                  </ul>\n                </span>\n              </div>\n            </section>\n            <md-divider></md-divider>\n            <section ng-if="(assistantCtrl.getOptimizationIssues(tabStatus)\n                            | filter:assistantCtrl.filterByCategory).length">\n              <div class="ta-indent-align">\n                <div class="ta-subheader">Page Optimizations</div>\n                <ng-include src="\'/templates/optimization_issues_status.html\'"\n                            ng-repeat="optimizationIssue in\n                                       assistantCtrl.getOptimizationIssues(tabStatus)\n                                       | filter:assistantCtrl.filterByCategory">\n                </ng-include>\n              </div>\n              <md-divider></md-divider>\n            </section>\n            <section>\n              <ng-include src="\'/templates/tag_status.html\'"\n                          ng-repeat="tag in assistantCtrl.getTags(tabStatus)\n                                     | filter:assistantCtrl.filterByCategoryAndTag">\n              </ng-include>\n            </section>\n          </ta-menu-content>\n        </ta-toggle-menu>\n      </md-card-content>\n    </md-card>\n  </md-content>\n</md-content>\n'
        ),
        a.put(
          "/templates/bucket_view.html",
          '<md-divider></md-divider>\n<div class="ta-subheader ta-indent-align">\n  {{::bucket.text | limitTo : 30}}\n</div>\n<div>\n  <ta-toggle-menu monitor-event="bucketToggle"\n                  ng-repeat="entry in ::bucket.relatedIssues">\n    <ta-menu-label>\n      <div layout="row" layout-align="start center">\n        <div class="bg-{{::entry.value}} counter">\n          <span class="counter-inner">{{::$index + 1}}</span>\n        </div>\n        <span>{{::entry.text | limitTo : 30}}</span>\n      </div>\n    </ta-menu-label>\n    <ta-menu-content>\n      <ng-include src="\'/templates/detail_view.html\'"\n                  ng-init="tag = entry"></ng-include>\n    </ta-menu-content>\n  </ta-toggle-menu>\n</div>\n'
        ),
        a.put(
          "/templates/detail_view.html",
          '<div class="ta-indent-align">\n  <div ng-repeat="view in ::assistantCtrl.getViews(tag)"\n       class="view-section">\n    <div class="ta-rec-view-header"\n         ng-show="getInfoIssuesForTag(tabStatus, tag, view).length">\n           {{::assistantCtrl.getViewLabel(tabStatus, tag, view)}}\n    </div>\n    <ng-include src="\'/templates/tag_details.html\'"></ng-include>\n  </div>\n  <div class="tag-optimization-section"\n       ng-if="assistantCtrl.getOptimizationIssuesForTag(tabStatus, tag).length">\n    <div class="ta-rec-view-header">Optimizations</div>\n    <div class="view-content">\n      <ng-include src="\'/templates/optimization_issues_status.html\'"\n                  ng-repeat="optimizationIssue in\n                  assistantCtrl.getOptimizationIssuesForTag(tabStatus, tag)">\n      </ng-include>\n    </div>\n  </div>\n</div>\n'
        ),
        a.put(
          "/templates/optimization_issues_status.html",
          '\n\n<div id="{{::optimizationIssue.id}}" class="optimization-issue"\n     ng-class="{\'ignored\': optimizationIssue.ignored}"\n     layout="row" layout-align="space-between center"\n     ng-if="assistantCtrl.getTags(tabStatus).length">\n  <div layout="row" layout-align="start center">\n    <md-icon md-svg-src="optimization-{{::optimizationIssue.type | lowercase}}">\n    </md-icon>\n    <div class="ilo-text ilo-{{::optimizationIssue.type}}"\n         data-view="{{::optimizationIssue.view}}"\n         data-type="{{::optimizationIssue.type}}"\n         ng-switch="optimizationIssue.valueFormat">\n      <div ng-switch-when="button_action" layout-fill layout="row">\n        {{::optimizationIssue.label}}\n      </div>\n      <div ng-switch-default layout-fill layout="row">\n        {{::optimizationIssue.text}}\n      </div>\n    </div>\n    <md-tooltip ng-if="::optimizationIssue.hint">\n      {{::optimizationIssue.hint}}\n    </md-tooltip>\n  </div>\n  <div class="tag-options" layout="row" layout-align="start center">\n    <md-button ng-href="{{::assistantCtrl.getInfoLink(optimizationIssue)}}"\n               target="_blank" class="md-icon-button" aria-label="More Info">\n      <md-icon md-svg-icon="help">\n        <md-tooltip>More Info</md-tooltip>\n      </md-icon>\n    </md-button>\n    <div style="border:1px solid; height:26px;"></div>\n    <ta-ignore model="::optimizationIssue" model-type="issue"\n               broadcast-event="{{::optimizationIssue.templateMarker}}"\n               update-model-state\n               on-click="assistantCtrl.updateIgnoreSettings(\n                             optimizationIssue, \'Optimization\', tabStatus)">\n    </ta-ignore>\n  </div>\n</div>\n<div class="optimization-issue"\n     ng-if="!assistantCtrl.getTags(tabStatus).length">\n  <div class="ilo-status colorSuggestion"></div>\n  <div class="ilo-text ilo-Suggestion">\n    No tags found\n  </div>\n</div>\n'
        ),
        a.put(
          "/templates/tabs_container.html",
          '<div>\n  <div ng-init="gtarCtrl.init()">\n    <md-toolbar layout="row" layout-align="start center">\n      <span id="google-logo"></span>\n      <span id="ta-identification-text">\n        Tag Assistant Recordings\n      </span>\n    </md-toolbar>\n    <md-content layout-fill>\n      <md-tabs class="md-primary" md-no-ink\n               md-dynamic-height md-selected="gtarCtrl.selectedTabIndex">\n        <md-tab label="Tag Assistant Report"\n                md-on-select="gtarCtrl.onTaTabSelected()">\n        </md-tab>\n        <md-tab label="Google Analytics Report"\n                md-on-select="gtarCtrl.onGaTabSelected()">\n        </md-tab>\n      </md-tabs>\n    </md-content>\n  </div>\n  <div ui-view="assistant" ng-show="gtarCtrl.selectedTabIndex==0"></div>\n  <div ui-view="analytics" ng-show="gtarCtrl.selectedTabIndex==1"></div>\n</div>\n'
        ),
        a.put(
          "/templates/tag_details.html",
          '<div class="view-content">\n  <div ng-repeat="issue in getInfoIssuesForTag(tabStatus, tag, view)"\n       id="{{::issue.id}}" ng-switch="issue.valueFormat" layout-margin>\n\n    \n    <div ng-switch-when="button_action" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="button_primary" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised md-primary no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="button_inactive" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n    <div ng-switch-when="update_button" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.value.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.value}}\n      </ta-label>\n      <md-button ng-click="triggerAction(issue)"\n                 class="md-raised no-margin-button"\n                 ng-disabled="disableActions()">\n        {{::issue.text}}\n      </md-button>\n    </div>\n\n    <div ng-switch-when="textfield" ng-if="app==\'popup\'"\n         layout-fill layout="row" layout-align="start center">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-input-container>\n        <input type="text" ng-model="issue.value"\n               ng-blur="triggerUpdate(issue)" aria-label="{{::issue.text}}">\n      </md-input-container>\n    </div>\n\n    \n    <div ng-switch-when="dropdown" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-select ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                 aria-label="{{::issue.text}}">\n        <md-option ng-repeat="option in issue.relatedIssues"\n                   ng-value="option.text" ng-if="option.valueFormat==\'option\'">\n          {{option.label}}\n        </md-option>\n      </md-select>\n    </div>\n\n    <div ng-switch-when="dropdown_inactive" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-select ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                 ng-disabled="true" aria-label="{{::issue.text}}">\n        <md-option ng-repeat="option in issue.relatedIssues"\n                   ng-value="option.text" ng-if="option.valueFormat==\'option\'">\n          {{option.label}}\n        </md-option>\n      </md-select>\n    </div>\n\n    <div ng-switch-when="checkbox" ng-if="app==\'popup\'"\n         layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <md-checkbox ng-model="issue.value" ng-change="triggerUpdate(issue)"\n                   ng-true-value="\'true\'" ng-false-value="\'\'"\n                   aria-label="{{::issue.text}}"></md-checkbox>\n    </div>\n    \n\n    <div ng-switch-when="collection" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-html-table items="::issue.value"></ta-html-table>\n    </div>\n    <div ng-switch-when="copyable" layout-fill layout="row">\n      \n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-copyable-text>{{::issue.value}}</ta-copyable-text>\n    </div>\n    <div ng-switch-when="esc_json" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-escape-json items="::issue.value"></ta-escape-json>\n    </div>\n    <div ng-switch-when="json" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="{{::tabStatus.getScheme()}}">\n      </ta-code-snippet>\n    </div>\n    <div ng-switch-when="linked" layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-linked-text info-link="{{::getInfoLink(issue)}}">\n        {{::issue.value}}\n      </ta-linked-text>\n    </div>\n    <div ng-switch-when="link_expandable" layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      \n      <ta-expandable-link link-text="{{::issue.label | decodeValue | decodeValue}}"\n                          query-info-detail-map="::getQueryInfoDetailMap(issue)">\n      </ta-expandable-link>\n    </div>\n    <div ng-switch-when="map" layout-fill layout="row">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-escape-json items="::issue.value" flex></ta-escape-json>\n    </div>\n    <div ng-switch-when="snippet_html" layout-fill layout="column">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="{{::tabStatus.getScheme()}}"\n                       flex layout-margin></ta-code-snippet>\n    </div>\n    <div ng-switch-when="snippet_js" layout-fill layout="column">\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-code-snippet code-lines="::issue.value"\n                       scheme="::tabStatus.getScheme()" flex layout-margin>\n      </ta-code-snippet>\n    </div>\n    <div ng-switch-default layout-fill layout="row" layout-wrap>\n      <ta-label ng-if="::issue.text.length > 0" tooltip="{{::issue.hint}}"\n                data-value-format="{{::issue.valueFormat}}">\n        {{::issue.text}}\n      </ta-label>\n      <ta-value>{{::issue.value | decodeValue}}</ta-value>\n    </div>\n  </div>\n</div>\n'
        ),
        a.put(
          "/templates/tag_status.html",
          '<md-card class="tag-view">\n  <ta-toggle-menu monitor-event="tagToggle">\n    <ta-menu-label>\n      <md-icon md-svg-src="tag-{{::tag.status.label}}"></md-icon>\n      <span class="tag-sequence">{{$index + 1}}.</span>\n      <span>{{::tag.category}}</span>\n      <span>{{::tag.label}}</span>\n    </ta-menu-label>\n\n    <ta-menu-content>\n      <ng-include src="\'/templates/detail_view.html\'"></ng-include>\n      <ng-include src="\'/templates/bucket_view.html\'"\n                  ng-repeat="bucket in ::tag.buckets"></ng-include>\n      <md-divider></md-divider>\n    </ta-menu-content>\n  </ta-toggle-menu>\n</md-card>\n'
        ),
        a.put(
          "/templates/welcome_dialog.html",
          '<md-dialog class="recording-introduction" aria-label="Quick Introduction">\n  <md-dialog-content>\n    <div class="dialog-content">\n      <div class="dialog-title">A Quick Introduction</div>\n      <p id="tabs-screenshot">\n        <img src="/images/recording_tabs_screen.png" alt="Recording Tabs" width="400" />\n      </p>\n      <p>\n        <span class="dialog-body-text">\n          There are 2 reports you can see. Use the tabs above the page to switch between them.\n        </span>\n      </p>\n      <p>\n        <span class="dialog-subheading ta-secondary-white">Tag Assistant Legacy Report</span><br>\n        <span class="dialog-body-text">\n          The Tag Assistant Legacy Report shows all the tags, including Google tags as well as\n          third-party (non-Google) tags, that fired on all the pages you visited during the\n          recording session.\n        </span>\n      </p>\n      <p>\n        <span class="dialog-subheading ta-secondary-white">Google Analytics Report</span><br>\n        <span class="dialog-body-text">\n          The Google Analytics Report shows how your recorded data would look when processed by\n          your current Google Analytics configurations.\n        </span>\n      </p>\n    </div>\n  </md-dialog-content>\n  <div class="md-actions" layout="row">\n    <md-button ng-click="hide(\'not useful\')" class="md-secondary">Dismiss</md-button>\n  </div>\n</md-dialog>\n'
        ));
    }
  ]);
var dh = angular
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
function eh() {
  return {
    restrict: "EA",
    scope: { timestamp: "@", addIntervalFrom: "@", suffix: "@" },
    templateUrl: "/datetime/datetime.ng",
    controller: fh,
    controllerAs: "dateTimeController",
    bindToController: !0
  };
}
eh.Rb = "taDateTime";
eh.Mb = "MMM DD, YYYY hh:mm:ss A";
var fh = function () {};
fh.prototype.getDateTimeString = function () {
  return moment(this.timestamp, "x").format(eh.Mb);
};
fh.prototype.getIntervalDurationString = function () {
  var a = moment.duration(moment(this.timestamp, "x").diff(moment(this.addIntervalFrom, "x"))),
    b = [];
  ["hours", "minutes", "seconds"].forEach(function (c) {
    a.get(c) && (b.push(a.get(c)), b.push(c));
  });
  return b.join(" ");
};
fh.prototype.getIntervalDurationString = fh.prototype.getIntervalDurationString;
fh.prototype.getDateTimeString = fh.prototype.getDateTimeString;
var gh = function () {
  this.showRaw = !1;
  this.showFormatted = !0;
};
y("EscapeJsonController", gh);
gh.prototype.Jc = function () {
  this.showRaw = !0;
  this.showFormatted = !1;
};
gh.prototype.Ic = function () {
  this.showRaw = !1;
  this.showFormatted = !0;
};
function V() {
  this.showTables = !1;
  this.pb = this.ob = null;
}
V.prototype.getUriInfo = function () {
  if (!this.ob) {
    var a = K(this.linkText);
    this.ob = [
      { key: "Hostname", value: a.H() },
      { key: "Protocol", value: a.getScheme() },
      { key: "Path", value: a.C },
      { key: "Hash", value: a.N }
    ];
  }
  return this.ob;
};
V.prototype.getUriInfo = V.prototype.getUriInfo;
V.prototype.getUriQueryInfo = function () {
  if (!this.pb) {
    var a = K(encodeURI(this.linkText));
    this.pb = a.A.O().map(function (b) {
      var c = "";
      try {
        c = this.Gb[b].description || "";
      } catch (d) {}
      return { key: b, value: a.A.get(b), description: c };
    }, this);
  }
  return this.pb;
};
V.prototype.getUriQueryInfo = V.prototype.getUriQueryInfo;
V.prototype.hasQueryInfoDetail = function () {
  return !!Object.keys(this.Gb).length;
};
V.prototype.hasQueryInfoDetail = V.prototype.hasQueryInfoDetail;
var hh = function (a) {
  this.B = a;
};
y("FormatButtonsController", hh);
hh.prototype.showRawContent = function () {
  this.B.$emit("SHOW_RAW");
};
hh.prototype.showRawContent = hh.prototype.showRawContent;
hh.prototype.showFormattedContent = function () {
  this.B.$emit("SHOW_FORMATTED");
};
hh.prototype.showFormattedContent = hh.prototype.showFormattedContent;
var ih = function (a) {
  this.hideEmpty = angular.isDefined(a.hideEmpty);
  this.showDescription = this.showDescription || !1;
};
y("HtmlTableController", ih);
var jh = function (a, b, c) {
  this.B = a;
  this.o = b;
  this.Nc = angular.isDefined(c.updateModelState);
  this.ignored = !1;
  this.Ba = null;
};
y("IgnoreButtonController", jh);
jh.prototype.ja = function (a, b) {
  this.ignored = b;
  this.Nc && (this.model.ignored = b);
  if (this.onClick) this.onClick();
};
jh.prototype.Mc = function (a) {
  a.source = "ta-ignore";
  a.modelType = this.modelType;
  this.Ba ? this.o.$broadcast(this.Ba, !this.ignored) : this.ja(null, !this.ignored);
};
var W = function (a, b, c) {
  this.B = a;
  this.yb = b;
  this.ua = angular.isDefined(c.startExpanded);
  this.xa = null;
  this.Ra = !1;
};
y("ToggleMenuCtrl", W);
W.prototype.ja = function (a) {
  this.ua = a;
  this.yb.toggleClass("expanded", a);
};
W.prototype.toggle = function (a) {
  a.stopImmediatePropagation();
  (!$e(a.target) && "TA-MENU-LABEL" != a.target.tagName) || this.Ra || (this.xa ? this.B.$emit(this.xa, !this.ua) : this.ja(!this.ua));
};
W.prototype.toggle = W.prototype.toggle;
W.prototype.Lc = function (a) {
  this.Ra = a;
  this.yb.find("ta-menu-label").children().attr("disabled", a);
  a && this.ja(!1);
};
W.prototype.isExpanded = function () {
  return this.ua;
};
W.prototype.isExpanded = W.prototype.isExpanded;
W.prototype.sc = function () {
  return this.Ra;
};
W.prototype.isDisabled = W.prototype.sc;
var kh = function () {
  this.maxLength = this.maxLength || 100;
  this.tail = this.tail || "...";
  this.truncateEnabled = !0;
  this.wordwise = this.wordwise || !1;
  this.alwaysShowIcon = this.alwaysShowIcon || !1;
};
kh.prototype.shouldRenderButton = function () {
  return this.alwaysShowIcon || this.string.length > this.maxLength;
};
kh.prototype.shouldRenderButton = kh.prototype.shouldRenderButton;
kh.prototype.getTruncatedString = function () {
  if (!this.truncateEnabled || this.string.length <= this.maxLength) return this.string;
  var a = this.string.substr(0, this.maxLength);
  if (this.wordwise) {
    var b = a.lastIndexOf(" ");
    -1 != b && (a = a.substr(0, b));
  }
  return a + this.tail;
};
kh.prototype.getTruncatedString = kh.prototype.getTruncatedString;
var X = angular.module("tvt.components", []);
X.directive("taLabel", [
  function () {
    return { restrict: "EA", scope: { tooltip: "@" }, transclude: !0, templateUrl: "/label/label.ng" };
  }
]);
X.directive("taLinkedText", [
  function () {
    return { restrict: "EA", transclude: !0, scope: { infoLink: "@" }, templateUrl: "/linked_text/linked_text.ng" };
  }
]);
X.directive("taValue", [
  function () {
    return { restrict: "EA", transclude: !0, template: "<span ng-transclude></span>" };
  }
]);
X.directive("taCopyableText", [
  function () {
    return { restrict: "EA", transclude: !0, scope: {}, template: '<div class="text-ids" ng-transclude></div>' };
  }
]);
X.directive("taEscapeJson", [
  function () {
    return {
      restrict: "EA",
      scope: { items: "=" },
      templateUrl: "/escape_json/escape_json.ng",
      link: function (a, b, c, d) {
        a.$on("SHOW_RAW", w(d.Jc, d));
        a.$on("SHOW_FORMATTED", w(d.Ic, d));
      },
      controller: gh,
      controllerAs: "escJsonCtrl",
      bindToController: !0
    };
  }
]);
X.directive("taHtmlTable", [
  function () {
    return {
      restrict: "EA",
      scope: { items: "=", showDescription: "=?" },
      templateUrl: "/html_table/html_table.ng",
      controller: ["$attrs", ih],
      controllerAs: "tableCtrl",
      bindToController: !0
    };
  }
]);
X.directive("taExpandableLink", [
  function () {
    return {
      restrict: "EA",
      scope: { linkText: "@", Gb: "=queryInfoDetailMap" },
      templateUrl: "/expandable_link/expandable_link.ng",
      controller: V,
      controllerAs: "expLinkCtrl",
      bindToController: !0
    };
  }
]);
X.directive("taFormatButtons", [
  function () {
    return {
      restrict: "EA",
      templateUrl: "/format_buttons/format_buttons.ng",
      controller: ["$scope", hh],
      controllerAs: "formatButtonsCtrl"
    };
  }
]);
X.directive("taCodeSnippet", [
  function () {
    return { restrict: "EA", scope: { codeLines: "=", scheme: "@" }, templateUrl: "/code_snippet/code_snippet.ng" };
  }
]);
X.directive("taIgnore", [
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
        b.on("click", d.Mc.bind(d));
        d.ignored = d.model.ignored;
        angular.isDefined(c.broadcastEvent) && ((d.Ba = c.broadcastEvent), a.$on(d.Ba, d.ja.bind(d)));
      },
      controller: ["$scope", "$rootScope", "$attrs", jh],
      controllerAs: "ignoreCtrl",
      bindToController: !0
    };
  }
]);
X.directive("taToggleMenu", [
  function () {
    return {
      controller: ["$scope", "$element", "$attrs", W],
      controllerAs: "toggleMenuCtrl",
      bindToController: !0,
      restrict: "E",
      scope: { registerTo: "=?" },
      transclude: { label: "taMenuLabel", content: "taMenuContent" },
      templateUrl: "/toggle_menu/toggle_menu.ng",
      link: function (a, b, c, d) {
        angular.isDefined(c.monitorEvent) &&
          ((d.xa = c.monitorEvent),
          a.$on(d.xa, function (e, f) {
            d.ja(f);
          }),
          angular.isDefined(d.registerTo) && d.registerTo[d.xa].push({ isExpanded: d.isExpanded.bind(d) }));
        d.ja(d.ua);
        c.$observe("disabled", d.Lc.bind(d));
      }
    };
  }
]);
X.directive("taTruncatedText", [
  function () {
    return {
      restrict: "E",
      scope: { string: "@", maxLength: "=?", tail: "@?", wordwise: "=?", alwaysShowIcon: "=?" },
      templateUrl: "/truncated_text/truncated_text.ng",
      controller: ["$attrs", kh],
      controllerAs: "truncatedTextCtrl",
      bindToController: !0
    };
  }
]);
X.directive(eh.Rb, [eh]);
var lh = angular.module("tvt.module.theme", ["ngMaterial"]);
lh.config([
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
var mh = fa(["https://ssl.google-analytics.com/analytics.js"]),
  nh = fa(["https://ssl.google-analytics.com/ga.js"]);
function oh(a, b, c) {
  b
    ? ((function () {
        window.GoogleAnalyticsObject = "ga";
        window.ga =
          window.ga ||
          function () {
            window.ga.q = window.ga.q || [];
            window.ga.q.push(arguments);
          };
        window.ga.Sd = 1 * new Date();
        var d = We(document, "SCRIPT");
        d.async = !0;
        Qf(d, wf(mh));
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
        var d = We(document, "SCRIPT");
        d.type = "text/javascript";
        d.async = !0;
        Qf(d, wf(nh));
        var e = document.getElementsByTagName("SCRIPT")[0];
        e.parentNode.insertBefore(d, e);
      })());
}
var ph = function (a, b) {
  a.hide = function () {
    b.hide();
  };
  a.cancel = function () {
    b.cancel();
  };
};
ph.$inject = ["$scope", "$mdDialog"];
var Y = function (a, b, c, d, e, f, g) {
  this.o = a;
  this.B = b;
  this.W = d;
  this.yc = f;
  this.S = g;
  this.selectedTabIndex = 0;
  this.Z = !1;
  this.hideRecordingSuggestion = this.o.popoutMode || uc("hideRecordingSuggestion");
  this.W.onpopstate = function (h) {
    h.state && ((this.selectedTabIndex = h.state.selectedTabIndex), this.B.$digest());
  }.bind(this);
  Hc();
  a.$on(
    "SwitchToGA",
    function () {
      this.selectedTabIndex = 1;
    }.bind(this)
  );
};
Y.prototype.init = function () {
  oh("UA-33463431-1");
  oh("UA-63385424-3", !0, "ta-extension-report");
  this.Z = !0;
  this.hideRecordingSuggestion ||
    this.yc
      .show({
        controller: ph,
        templateUrl: "/templates/welcome_dialog.html",
        clickOutsideToClose: !1,
        escapeToClose: !1,
        focusOnOpen: !0,
        disableParentScroll: !0
      })
      .then(
        function () {
          this.hideRecordingSuggestion = !0;
          tc("hideRecordingSuggestion", !0);
        }.bind(this),
        function () {}
      );
};
Y.prototype.R = function (a) {
  _gaq.push(["_trackEvent", "recording-page-ext", a]);
  this.Z && ga("send", "event", "recording-page-ext", a);
};
Y.prototype.onTaTabSelected = function () {
  this.R("ta-tab-clicked");
  this.selectedTabIndex = 0;
};
Y.prototype.onGaTabSelected = function () {
  this.R("ga-tab-clicked");
  this.selectedTabIndex = 1;
  this.o.$broadcast("GATabSelected");
};
Y.prototype.onGaTabSelected = Y.prototype.onGaTabSelected;
Y.prototype.onTaTabSelected = Y.prototype.onTaTabSelected;
Y.prototype.init = Y.prototype.init;
var qh = ["$rootScope", "$scope", "$timeout", "$window", "$mdMedia", "$mdDialog", "tvt.services.DataInterface", Y];
var Z = angular.module("tvt.module.gtar", ["ngMaterial", "ui.router", X.name, dh.name, ch.name, lh.name]),
  rh = /^\s*(https?|chrome-extension):/;
Z.service("tvt.service.Poller", xg);
Z.service("tvt.services.DataInterface", Qg);
Z.controller("tvt.controller.Gtar", qh);
Z.controller("tvt.controller.TagDetailBase", Ag);
Z.controller("tvt.controller.Assistant", bh);
Z.controller("tvt.controller.Analytics", $g);
Z.controller("tvt.controller.IssueListBase", ug);
Z.filter("decodeValue", function () {
  return function (a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
      return a;
    }
  };
});
Z.config([
  "$compileProvider",
  function (a) {
    a.aHrefSanitizationWhitelist(rh).debugInfoEnabled(!1);
  }
]);
var sh = {
  add: "/images/add_circle_outline.svg",
  collapse: "/images/ic_unfold_less.svg",
  down: "/images/ic_chevron_down.svg",
  expand: "/images/ic_unfold_more.svg",
  help: "/images/help.svg",
  inline: "/images/ic_view_headline.svg",
  minus: "/images/minus.svg",
  "optimization-error": "/images/ic_suggestion_red.svg",
  "optimization-suggestion": "/images/ic_suggestion_blue.svg",
  "optimization-warning": "/images/ic_suggestion_yellow.svg",
  "optimization-working": "/images/ic_suggestion_green.svg",
  pageload: "/images/pageload.svg",
  plus: "/images/plus.svg",
  print: "/images/ic_print.svg",
  remove: "/images/remove_circle_outline.svg",
  right: "/images/ic_chevron_right.svg",
  table: "/images/ic_view_list.svg",
  "tag-not-working": "/images/ic_tag_assistant_red.svg",
  "tag-working": "/images/ic_tag_assistant_green.svg",
  "tag-working-with-suggestions": "/images/ic_tag_assistant_blue.svg",
  "tag-working-with-warnings": "/images/ic_tag_assistant_yellow.svg"
};
Z.config([
  "$mdIconProvider",
  function (a) {
    Sa(sh, function (b, c) {
      a.icon(c, b);
    });
  }
]);
Z.config([
  "$stateProvider",
  function (a) {
    a.state("gtar", {
      abstract: !0,
      controller: "tvt.controller.Gtar",
      controllerAs: "gtarCtrl",
      templateUrl: "/templates/tabs_container.html",
      resolve: {
        recordedPages: [
          "tvt.services.DataInterface",
          function (b) {
            return b.tb();
          }
        ]
      }
    }).state("gtar.report", {
      url: "/report",
      views: {
        assistant: {
          controller: "tvt.controller.Assistant",
          controllerAs: "assistantCtrl",
          templateUrl: "/templates/assistant_report.html"
        },
        analytics: {
          controller: "tvt.controller.Analytics",
          controllerAs: "analyticsCtrl",
          templateUrl: "/templates/analytics_report.html"
        }
      }
    });
  }
]);
Z.config([
  "$httpProvider",
  function (a) {
    a.useApplyAsync(!0);
  }
]);
Z.run([
  "$rootScope",
  "$http",
  "$templateCache",
  "$location",
  "$state",
  function (a, b, c, d, e) {
    a.app = "gtar";
    Sa(sh, function (f) {
      return b.get(f, { cache: c });
    });
    rc(function () {
      var f = K(d.absUrl()),
        g = f.A.get("tagId");
      (f = f.A.get("tabId")) && g && ((a.propertyId = g), (a.tabId = f), (a.popoutMode = !0));
      e.go("gtar.report");
    });
  }
]);
y("ng.safehtml.googSceHelper.isGoogHtmlType", function (a) {
  return a && a.aa ? !0 : !1;
});
y("ng.safehtml.googSceHelper.isCOMPILED", function () {
  return !0;
});
y("ng.safehtml.googSceHelper.unwrapAny", function (a) {
  if (a instanceof gb) return hb(a).toString();
  if (a instanceof Cb) return Db(a).toString();
  if (a instanceof C) return kb(a);
  if (a instanceof nb) return ob(a);
  if (a instanceof db) return eb(a).toString();
  throw Error();
});
y("ng.safehtml.googSceHelper.unwrapGivenContext", function (a, b) {
  if ("html" == a) return Db(b).toString();
  if ("resourceUrl" == a || "templateUrl" == a) return hb(b).toString();
  if ("url" == a) return b instanceof gb ? hb(b).toString() : kb(b);
  if ("css" == a) return ob(b);
  if ("js" == a) return eb(b).toString();
  throw Error();
});
