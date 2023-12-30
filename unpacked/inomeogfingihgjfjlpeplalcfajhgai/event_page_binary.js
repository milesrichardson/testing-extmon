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
  var b = function (f, k) {
    this.jb = f;
    ba(this, "description", { configurable: !0, writable: !0, value: k });
  };
  b.prototype.toString = function () {
    return this.jb;
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
  q = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: aa(a) };
  },
  fa =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        },
  ha;
if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
else {
  var ia;
  a: {
    var ja = { a: !0 },
      ka = {};
    try {
      ka.__proto__ = ja;
      ia = ka.a;
      break a;
    } catch (a) {}
    ia = !1;
  }
  ha = ia
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var la = ha,
  r = function (a, b) {
    a.prototype = fa(b.prototype);
    a.prototype.constructor = a;
    if (la) la(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Ob = b.prototype;
  };
p("globalThis", function (a) {
  return a || da;
});
var t = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
p("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
p("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) t(b, d) && c.push(b[d]);
        return c;
      };
});
p("WeakMap", function (a) {
  function b() {}
  function c(h) {
    var l = typeof h;
    return ("object" === l && null !== h) || "function" === l;
  }
  function d(h) {
    if (!t(h, f)) {
      var l = new b();
      ba(h, f, { value: l });
    }
  }
  function e(h) {
    var l = Object[h];
    l &&
      (Object[h] = function (m) {
        if (m instanceof b) return m;
        Object.isExtensible(m) && d(m);
        return l(m);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var h = Object.seal({}),
          l = Object.seal({}),
          m = new a([
            [h, 2],
            [l, 3]
          ]);
        if (2 != m.get(h) || 3 != m.get(l)) return !1;
        m.delete(h);
        m.set(l, 4);
        return !m.has(h) && 4 == m.get(l);
      } catch (F) {
        return !1;
      }
    })()
  )
    return a;
  var f = "$jscomp_hidden_" + Math.random();
  e("freeze");
  e("preventExtensions");
  e("seal");
  var k = 0,
    g = function (h) {
      this.fa = (k += Math.random() + 1).toString();
      if (h) {
        h = q(h);
        for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    };
  g.prototype.set = function (h, l) {
    if (!c(h)) throw Error("Invalid WeakMap key");
    d(h);
    if (!t(h, f)) throw Error("WeakMap key fail: " + h);
    h[f][this.fa] = l;
    return this;
  };
  g.prototype.get = function (h) {
    return c(h) && t(h, f) ? h[f][this.fa] : void 0;
  };
  g.prototype.has = function (h) {
    return c(h) && t(h, f) && t(h[f], this.fa);
  };
  g.prototype.delete = function (h) {
    return c(h) && t(h, f) && t(h[f], this.fa) ? delete h[f][this.fa] : !1;
  };
  return g;
});
p("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var g = Object.seal({ x: 4 }),
          h = new a(q([[g, "s"]]));
        if ("s" != h.get(g) || 1 != h.size || h.get({ x: 4 }) || h.set({ x: 4 }, "t") != h || 2 != h.size) return !1;
        var l = h.entries(),
          m = l.next();
        if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
        m = l.next();
        return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0;
      } catch (F) {
        return !1;
      }
    })()
  )
    return a;
  var b = new WeakMap(),
    c = function (g) {
      this.da = {};
      this.m = f();
      this.size = 0;
      if (g) {
        g = q(g);
        for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
      }
    };
  c.prototype.set = function (g, h) {
    g = 0 === g ? 0 : g;
    var l = d(this, g);
    l.list || (l.list = this.da[l.id] = []);
    l.entry
      ? (l.entry.value = h)
      : ((l.entry = { next: this.m, previous: this.m.previous, head: this.m, key: g, value: h }),
        l.list.push(l.entry),
        (this.m.previous.next = l.entry),
        (this.m.previous = l.entry),
        this.size++);
    return this;
  };
  c.prototype.delete = function (g) {
    g = d(this, g);
    return g.entry && g.list
      ? (g.list.splice(g.index, 1),
        g.list.length || delete this.da[g.id],
        (g.entry.previous.next = g.entry.next),
        (g.entry.next.previous = g.entry.previous),
        (g.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  c.prototype.clear = function () {
    this.da = {};
    this.m = this.m.previous = f();
    this.size = 0;
  };
  c.prototype.has = function (g) {
    return !!d(this, g).entry;
  };
  c.prototype.get = function (g) {
    return (g = d(this, g).entry) && g.value;
  };
  c.prototype.entries = function () {
    return e(this, function (g) {
      return [g.key, g.value];
    });
  };
  c.prototype.keys = function () {
    return e(this, function (g) {
      return g.key;
    });
  };
  c.prototype.values = function () {
    return e(this, function (g) {
      return g.value;
    });
  };
  c.prototype.forEach = function (g, h) {
    for (var l = this.entries(), m; !(m = l.next()).done; ) (m = m.value), g.call(h, m[1], m[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (g, h) {
      var l = h && typeof h;
      "object" == l || "function" == l ? (b.has(h) ? (l = b.get(h)) : ((l = "" + ++k), b.set(h, l))) : (l = "p_" + h);
      var m = g.da[l];
      if (m && t(g.da, l))
        for (g = 0; g < m.length; g++) {
          var F = m[g];
          if ((h !== h && F.key !== F.key) || h === F.key) return { id: l, list: m, index: g, entry: F };
        }
      return { id: l, list: m, index: -1, entry: void 0 };
    },
    e = function (g, h) {
      var l = g.m;
      return ea(function () {
        if (l) {
          for (; l.head != g.m; ) l = l.previous;
          for (; l.next != l.head; ) return (l = l.next), { done: !1, value: h(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    },
    f = function () {
      var g = {};
      return (g.previous = g.next = g.head = g);
    },
    k = 0;
  return c;
});
p("Set", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var c = Object.seal({ x: 4 }),
          d = new a(q([c]));
        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
        var e = d.entries(),
          f = e.next();
        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
        f = e.next();
        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
      } catch (k) {
        return !1;
      }
    })()
  )
    return a;
  var b = function (c) {
    this.G = new Map();
    if (c) {
      c = q(c);
      for (var d; !(d = c.next()).done; ) this.add(d.value);
    }
    this.size = this.G.size;
  };
  b.prototype.add = function (c) {
    c = 0 === c ? 0 : c;
    this.G.set(c, c);
    this.size = this.G.size;
    return this;
  };
  b.prototype.delete = function (c) {
    c = this.G.delete(c);
    this.size = this.G.size;
    return c;
  };
  b.prototype.clear = function () {
    this.G.clear();
    this.size = 0;
  };
  b.prototype.has = function (c) {
    return this.G.has(c);
  };
  b.prototype.entries = function () {
    return this.G.entries();
  };
  b.prototype.values = function () {
    return this.G.values();
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function (c, d) {
    var e = this;
    this.G.forEach(function (f) {
      return c.call(d, f, f, e);
    });
  };
  return b;
});
var ma = function (a, b) {
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
        return ma(this, function (b, c) {
          return [b, c];
        });
      };
});
p("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b) {
          return b;
        });
      };
});
p("String.prototype.endsWith", function (a) {
  return a
    ? a
    : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
        var d = this + "";
        b += "";
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
        return 0 >= e;
      };
});
p("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b, c) {
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
            : function (g) {
                return g;
              };
        var e = [],
          f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
          b = f.call(b);
          for (var k = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, k++));
        } else for (f = b.length, k = 0; k < f; k++) e.push(c.call(d, b[k], k));
        return e;
      };
});
globalThis.Rb = !0; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var u = this || self,
  v = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  na = function (a) {
    var b = v(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  oa = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  pa = function (a, b, c) {
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
  qa = function (a, b, c) {
    qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
    return qa.apply(null, arguments);
  },
  ra = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  sa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ob = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Sb = function (d, e, f) {
      for (var k = Array(arguments.length - 2), g = 2; g < arguments.length; g++) k[g - 2] = arguments[g];
      return b.prototype[e].apply(d, k);
    };
  };
function ta(a, b) {
  if ("string" === typeof a) return a;
  throw Error("Expected string for |" + b + "| but got " + v(a) + (": " + a));
}
function w(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, w);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
sa(w, Error);
w.prototype.name = "CustomError";
function ua(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  w.call(this, c + a[d]);
}
sa(ua, w);
ua.prototype.name = "AssertionError";
function va(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new ua("" + e, f || []);
}
var x = function (a, b, c) {
    a || va("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  wa = function (a, b, c) {
    null == a && va("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  xa = function (a, b) {
    throw new ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  y = function (a, b, c) {
    "number" !== typeof a && va("Expected number but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  ya = function (a, b, c) {
    "function" !== typeof a && va("Expected function but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2));
  };
var za = function () {
  this.Ja = new Set();
  this.ta = new Map();
  this.ha = new Map();
};
za.prototype.add = function (a, b, c) {
  b = void 0 === b ? "" : b;
  c = void 0 === c ? null : c;
  x(null == c || "" != b);
  if ("" == b) this.Ja.add(a);
  else if (c) {
    var d = this.ha.get(b);
    d || ((d = new Map()), this.ha.set(b, d));
    d.set(a, c);
  } else (c = this.ta.get(b)), c || ((c = new Set()), this.ta.set(b, c)), c.add(a);
};
za.prototype.filter = function (a) {
  var b = {},
    c;
  for (c in a) b[c] = a[c];
  a = a.type;
  for (var d in b)
    this.Ja.has(d) ||
      (null != b[d] &&
        ((a && this.ta.has(a) && this.ta.get(a).has(d)) ||
          (a && this.ha.has(a) && this.ha.get(a).has(d) && "object" == typeof b[d]
            ? (b[d] = this.ha.get(a).get(d).filter(b[d]))
            : (b[d] = "<redacted>"))));
  return b;
};
var z = new za();
z.add("id");
z.add("type");
var Aa = function (a) {
  if (!a) throw Error("object == null");
  ta(a.type, "type");
  var b = { type: a.type };
  if (void 0 !== a.id) {
    a = a.id;
    if (!Number.isFinite(a)) throw Error("Expected number for |id| but got " + v(a) + (": " + a));
    b.id = a;
  }
  return b;
};
z.add("version", "hello");
var A = function (a, b, c) {
  var d = Error.call(this, a + " returns error code: " + b + " details: " + c);
  this.message = d.message;
  "stack" in d && (this.stack = d.stack);
  this.lb = a;
  this.errorCode = b;
  this.details = c;
};
r(A, Error);
A.prototype.j = function () {
  return { type: "error", api: this.lb, errorCode: this.errorCode, details: this.details, stack: this.stack };
};
var Ba = function (a) {
    var b = ta(chrome.runtime.lastError.message, "unknown");
    return new A(a, "CHROME_RUNTIME", b);
  },
  B = function (a, b) {
    return b instanceof A ? b : new A(a, "UNEXPECTED_ERROR", String(b));
  };
z.add("api", "error");
z.add("errorCode", "error");
z.add("details", "error");
z.add("stack", "error");
function Ca(a) {
  return {
    j: function () {
      return { type: a };
    }
  };
}
var Da = Ca("tabs.highlightResponse");
z.add("url", "downloads.init");
z.add("status", "downloads.getStatusResponse");
z.add("totalBytes", "downloads.getProgressResponse");
z.add("bytesReceived", "downloads.getProgressResponse");
z.add("estimatedEndTime", "downloads.getProgressResponse");
z.add("danger", "downloads.downloadResponse");
var Ea = Ca("downloads.initResponse"),
  Fa = Ca("downloads.showResponse");
function Ga(a) {
  a && "function" == typeof a.La && a.La();
}
var C = function () {
  this.ea = this.ea;
  this.T = this.T;
};
C.prototype.ea = !1;
C.prototype.La = function () {
  this.ea || ((this.ea = !0), this.J());
};
var Ha = function (a, b) {
  a.ea ? b() : (a.T || (a.T = []), a.T.push(b));
};
C.prototype.J = function () {
  if (this.T) for (; this.T.length; ) this.T.shift()();
};
var D = function (a, b) {
  this.name = a;
  this.value = b;
};
D.prototype.toString = function () {
  return this.name;
};
var Ia = new D("OFF", Infinity),
  E = new D("SEVERE", 1e3),
  Ja = new D("WARNING", 900),
  Ka = new D("INFO", 800),
  La = new D("CONFIG", 700),
  Ma = function () {
    this.ka = 0;
    this.clear();
  },
  Na;
Ma.prototype.clear = function () {
  this.Ha = Array(this.ka);
  this.Ka = -1;
  this.Oa = !1;
};
var Oa = function (a, b, c) {
  this.la = void 0;
  this.reset(a || Ia, b, c, void 0, void 0);
};
Oa.prototype.reset = function (a, b, c, d) {
  this.ib = d || Date.now();
  this.Pa = a;
  this.vb = b;
  this.Ra = c;
  this.la = void 0;
};
Oa.prototype.getMessage = function () {
  return this.vb;
};
var Pa = function (a, b) {
    this.level = null;
    this.Ma = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.Qa = {
      na: function () {
        return a;
      }
    };
  },
  Qa = function (a) {
    if (a.level) return a.level;
    if (a.parent) return Qa(a.parent);
    xa("Root logger has no level set.");
    return Ia;
  };
Pa.prototype.publish = function (a) {
  for (var b = this; b; )
    b.Ma.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var Ra = function () {
    this.entries = {};
    var a = new Pa("");
    a.level = La;
    this.entries[""] = a;
  },
  Sa,
  G = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = G(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new Pa(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  H = function () {
    Sa || (Sa = new Ra());
    return Sa;
  },
  I = function (a) {
    return G(H(), a).Qa;
  },
  J = function (a, b, c, d) {
    var e;
    if ((e = a))
      if ((e = a && b)) {
        e = b.value;
        var f = a ? Qa(G(H(), a.na())) : Ia;
        e = e >= f.value;
      }
    if (e) {
      b = b || Ia;
      e = G(H(), a.na());
      "function" === typeof c && (c = c());
      Na || (Na = new Ma());
      f = Na;
      a = a.na();
      if (0 < f.ka) {
        var k = (f.Ka + 1) % f.ka;
        f.Ka = k;
        f.Oa ? ((f = f.Ha[k]), f.reset(b, c, a), (a = f)) : ((f.Oa = k == f.ka - 1), (a = f.Ha[k] = new Oa(b, c, a)));
      } else a = new Oa(b, c, a);
      a.la = d;
      e.publish(a);
    }
  };
var Ta = function (a, b) {
  this.ub = 100;
  this.ob = a;
  this.Ib = b;
  this.ra = 0;
  this.m = null;
};
Ta.prototype.get = function () {
  if (0 < this.ra) {
    this.ra--;
    var a = this.m;
    this.m = a.next;
    a.next = null;
  } else a = this.ob();
  return a;
};
Ta.prototype.put = function (a) {
  this.Ib(a);
  this.ra < this.ub && (this.ra++, (a.next = this.m), (this.m = a));
};
function Ua() {
  var a = u.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var Va = function () {};
var Wa = {},
  Xa = function (a, b) {
    this.bb = b === Wa ? a : "";
  };
Xa.prototype.toString = function () {
  return this.bb.toString();
};
var K = String.prototype.repeat
  ? function (a, b) {
      return a.repeat(b);
    }
  : function (a, b) {
      return Array(b + 1).join(a);
    };
var Ya = function () {
  var a = document;
  var b = "IFRAME";
  "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
  return a.createElement(b);
};
var Za,
  $a = function () {
    var a = u.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      -1 == Ua().indexOf("Presto") &&
      (a = function () {
        var e = Ya();
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var k = "callImmediate" + Math.random(),
          g = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = qa(function (h) {
          if (("*" == g || h.origin == g) && h.data == k) this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(k, g);
          }
        };
      });
    if ("undefined" !== typeof a && -1 == Ua().indexOf("Trident") && -1 == Ua().indexOf("MSIE")) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Ia;
          c.Ia = null;
          e();
        }
      };
      return function (e) {
        d.next = { Ia: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      u.setTimeout(e, 0);
    };
  };
function ab(a) {
  u.setTimeout(function () {
    throw a;
  }, 0);
}
var bb = function () {
  this.va = this.X = null;
};
bb.prototype.add = function (a, b) {
  var c = cb.get();
  c.set(a, b);
  this.va ? (this.va.next = c) : (x(!this.X), (this.X = c));
  this.va = c;
};
bb.prototype.remove = function () {
  var a = null;
  this.X && ((a = this.X), (this.X = this.X.next), this.X || (this.va = null), (a.next = null));
  return a;
};
var cb = new Ta(
    function () {
      return new db();
    },
    function (a) {
      return a.reset();
    }
  ),
  db = function () {
    this.next = this.scope = this.Z = null;
  };
db.prototype.set = function (a, b) {
  this.Z = a;
  this.scope = b;
  this.next = null;
};
db.prototype.reset = function () {
  this.next = this.scope = this.Z = null;
};
var eb,
  fb = !1,
  gb = new bb(),
  ib = function (a, b) {
    eb || hb();
    fb || (eb(), (fb = !0));
    "createTask" in console && !a.consoleTask && (a.consoleTask = console.createTask(a.name || "anonymous"));
    gb.add(a, b);
  },
  hb = function () {
    if (u.Promise && u.Promise.resolve) {
      var a = u.Promise.resolve(void 0);
      eb = function () {
        a.then(jb);
      };
    } else
      eb = function () {
        var b = jb;
        "function" !== typeof u.setImmediate ||
        (u.Window && u.Window.prototype && -1 == Ua().indexOf("Edge") && u.Window.prototype.setImmediate == u.setImmediate)
          ? (Za || (Za = $a()), Za(b))
          : u.setImmediate(b);
      };
  },
  jb = function () {
    for (var a = null; (a = gb.remove()); ) {
      try {
        a.Z.consoleTask
          ? a.Z.consoleTask.run(function () {
              return wa(a).Z.call(a.scope);
            })
          : a.Z.call(a.scope);
      } catch (b) {
        ab(b);
      }
      cb.put(a);
    }
    fb = !1;
  };
var N = function (a) {
    this.A = 0;
    this.fb = void 0;
    this.Y = this.I = this.V = null;
    this.oa = this.xa = !1;
    if (a != Va)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            L(b, 2, c);
          },
          function (c) {
            if (!(c instanceof M))
              try {
                if (c instanceof Error) throw c;
                throw Error("Promise rejected.");
              } catch (d) {}
            L(b, 3, c);
          }
        );
      } catch (c) {
        L(this, 3, c);
      }
  },
  kb = function () {
    this.next = this.context = this.ba = this.U = this.O = null;
    this.ja = !1;
  };
kb.prototype.reset = function () {
  this.context = this.ba = this.U = this.O = null;
  this.ja = !1;
};
var lb = new Ta(
    function () {
      return new kb();
    },
    function (a) {
      a.reset();
    }
  ),
  mb = function (a, b, c) {
    var d = lb.get();
    d.U = a;
    d.ba = b;
    d.context = c;
    return d;
  },
  nb = function () {
    var a = new N(Va);
    L(a, 2, "not-started");
    return a;
  },
  ob = function (a) {
    return new N(function (b, c) {
      c(a);
    });
  },
  qb = function () {
    var a,
      b,
      c = new N(function (d, e) {
        a = d;
        b = e;
      });
    return new pb(c, a, b);
  };
N.prototype.then = function (a, b, c) {
  null != a && ya(a, "opt_onFulfilled should be a function.");
  null != b && ya(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return rb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
};
N.prototype.$goog_Thenable = !0;
N.prototype.N = function (a, b) {
  return rb(this, null, a, b);
};
N.prototype.catch = N.prototype.N;
N.prototype.cancel = function (a) {
  if (0 == this.A) {
    var b = new M(a);
    ib(function () {
      sb(this, b);
    }, this);
  }
};
var sb = function (a, b) {
    if (0 == a.A)
      if (a.V) {
        var c = a.V;
        if (c.I) {
          for (var d = 0, e = null, f = null, k = c.I; k && (k.ja || (d++, k.O == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
          e &&
            (0 == c.A && 1 == d
              ? sb(c, b)
              : (f ? ((d = f), x(c.I), x(null != d), d.next == c.Y && (c.Y = d), (d.next = d.next.next)) : tb(c), ub(c, e, 3, b)));
        }
        a.V = null;
      } else L(a, 3, b);
  },
  wb = function (a, b) {
    a.I || (2 != a.A && 3 != a.A) || vb(a);
    x(null != b.U);
    a.Y ? (a.Y.next = b) : (a.I = b);
    a.Y = b;
  },
  rb = function (a, b, c, d) {
    var e = mb(null, null, null);
    e.O = new N(function (f, k) {
      e.U = b
        ? function (g) {
            try {
              var h = b.call(d, g);
              f(h);
            } catch (l) {
              k(l);
            }
          }
        : f;
      e.ba = c
        ? function (g) {
            try {
              var h = c.call(d, g);
              void 0 === h && g instanceof M ? k(g) : f(h);
            } catch (l) {
              k(l);
            }
          }
        : k;
    });
    e.O.V = a;
    wb(a, e);
    return e.O;
  };
N.prototype.Pb = function (a) {
  x(1 == this.A);
  this.A = 0;
  L(this, 2, a);
};
N.prototype.Qb = function (a) {
  x(1 == this.A);
  this.A = 0;
  L(this, 3, a);
};
var L = function (a, b, c) {
    if (0 == a.A) {
      a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.A = 1;
      a: {
        var d = c,
          e = a.Pb,
          f = a.Qb;
        if (d instanceof N) {
          null != e && ya(e, "opt_onFulfilled should be a function.");
          null != f && ya(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
          wb(d, mb(e || Va, f || null, a));
          var k = !0;
        } else {
          if (d)
            try {
              var g = !!d.$goog_Thenable;
            } catch (l) {
              g = !1;
            }
          else g = !1;
          if (g) d.then(e, f, a), (k = !0);
          else {
            g = typeof d;
            if (("object" == g && null != d) || "function" == g)
              try {
                var h = d.then;
                if ("function" === typeof h) {
                  xb(d, h, e, f, a);
                  k = !0;
                  break a;
                }
              } catch (l) {
                f.call(a, l);
                k = !0;
                break a;
              }
            k = !1;
          }
        }
      }
      k || ((a.fb = c), (a.A = b), (a.V = null), vb(a), 3 != b || c instanceof M || yb(a, c));
    }
  },
  xb = function (a, b, c, d, e) {
    var f = !1,
      k = function (h) {
        f || ((f = !0), c.call(e, h));
      },
      g = function (h) {
        f || ((f = !0), d.call(e, h));
      };
    try {
      b.call(a, k, g);
    } catch (h) {
      g(h);
    }
  },
  vb = function (a) {
    a.xa || ((a.xa = !0), ib(a.pb, a));
  },
  tb = function (a) {
    var b = null;
    a.I && ((b = a.I), (a.I = b.next), (b.next = null));
    a.I || (a.Y = null);
    null != b && x(null != b.U);
    return b;
  };
N.prototype.pb = function () {
  for (var a; (a = tb(this)); ) ub(this, a, this.A, this.fb);
  this.xa = !1;
};
var ub = function (a, b, c, d) {
    if (3 == c && b.ba && !b.ja) for (; a && a.oa; a = a.V) a.oa = !1;
    if (b.O) (b.O.V = null), zb(b, c, d);
    else
      try {
        b.ja ? b.U.call(b.context) : zb(b, c, d);
      } catch (e) {
        Ab.call(null, e);
      }
    lb.put(b);
  },
  zb = function (a, b, c) {
    2 == b ? a.U.call(a.context, c) : a.ba && a.ba.call(a.context, c);
  },
  yb = function (a, b) {
    a.oa = !0;
    ib(function () {
      a.oa && Ab.call(null, b);
    });
  },
  Ab = ab,
  M = function (a) {
    w.call(this, a);
  };
sa(M, w);
M.prototype.name = "cancel";
var pb = function (a, b, c) {
  this.promise = a;
  this.resolve = b;
  this.reject = c;
};
var O = function (a) {
  C.call(this);
  this.Fa = a;
  this.K = qb();
  this.Ba = this.Bb.bind(this);
  this.B = null;
};
r(O, C);
var Db = function (a) {
  var b = new O(a);
  return Bb({ url: a, orderBy: ["-startTime"], limit: 1 })
    .then(function (c) {
      if (0 == c.length) return b;
      x(1 == c.length, "A search query with limit=1 returns multiple items.");
      c = c[0];
      if (36e5 > Date.now() - new Date(c.startTime))
        switch (Cb(c)) {
          case "downloaded":
            b.K.resolve();
            b.B = c.id;
            break;
          case "downloading":
            chrome.downloads.onChanged.addListener(b.Ba), (b.B = c.id);
        }
      return b;
    })
    .N(function () {
      return b;
    });
};
O.prototype.J = function () {
  chrome.downloads.onChanged.removeListener(this.Ba);
  C.prototype.J.call(this);
};
var Eb = function (a) {
    return a.B
      ? P(a.B).then(function (b) {
          return {
            type: "downloads.getProgressResponse",
            totalBytes: b.totalBytes,
            bytesReceived: b.bytesReceived,
            estimatedEndTime: b.estimatedEndTime ? new Date(b.estimatedEndTime).getTime() : void 0
          };
        })
      : ob(new A("DownloadItem.getProgress()", "UNEXPECTED_ERROR", "No pending download in progress"));
  },
  Fb = function (a) {
    return a.B
      ? P(a.B)
          .then(function (b) {
            return Cb(b);
          })
          .N(function () {
            return "interrupted";
          })
      : nb();
  },
  Cb = function (a) {
    switch (a.state) {
      case "complete":
        return a.exists ? "downloaded" : "not-started";
      case "interrupted":
        return "interrupted";
      case "in_progress":
        return "downloading";
      default:
        return "not-started";
    }
  },
  P = function (a) {
    return null == a
      ? ob(new A("DownloadItem.getItemById", "INVALID_ARGS", "Missing required paramemter id"))
      : Bb({ id: a }).then(function (b) {
          return 1 != b.length
            ? ob(new A("chrome.downloads.search", "UNEXPECTED_ERROR", "Multiple items returned for download id: " + a))
            : b[0];
        });
  },
  Bb = function (a) {
    var b = qb();
    chrome.downloads.search(a, function (c) {
      chrome.runtime.lastError ? b.reject(Ba("chrome.downloads.search")) : b.resolve(c);
    });
    return b.promise;
  };
O.prototype.show = function () {
  var a = this;
  return this.B
    ? P(this.B).then(function (b) {
        if ("complete" != b.state)
          throw new A("chrome.downloads.show", "UNEXPECTED_ERROR", "Cannot open " + b.filename + " before the download is completed.");
        if (!b.exists) throw new A("chrome.downloads.show", "DOWNLOAD_ITEM_DELETED", "filename: " + b.filename);
        chrome.downloads.show(a.B);
      })
    : ob(new A("chrome.downloads.show", "UNEXPECTED_ERROR", "Missing downloadId"));
};
O.prototype.download = function () {
  var a = this;
  return Fb(this).then(function (b) {
    if ("not-started" == b || "interrupted" == b)
      (a.K = qb()),
        chrome.downloads.onChanged.addListener(a.Ba),
        chrome.downloads.download({ url: a.Fa }, function (c) {
          chrome.runtime.lastError && a.K.reject(Ba("chrome.downloads.download"));
          a.B = c;
        });
    return a.K.promise;
  });
};
O.prototype.Bb = function (a) {
  var b = this;
  if (a.id == this.B)
    if (a.state)
      switch (a.state.current) {
        case "complete":
          this.K.resolve();
          break;
        case "interrupted":
          P(a.id).then(
            function (c) {
              var d = b.K,
                e = d.reject;
              c = c.error;
              var f = b.Fa;
              x(c, "Missing interrupt reason.");
              var k = "CHROME_RUNTIME";
              switch (c) {
                case "NETWORK_FAILED":
                  k = "NETWORK_FAILED";
                  break;
                case "NETWORK_TIMEOUT":
                  k = "NETWORK_TIMEOUT";
                  break;
                case "NETWORK_DISCONNECTED":
                  k = "NETWORK_DISCONNECTED";
                  break;
                case "FILE_NO_SPACE":
                  k = "FILE_NO_SPACE";
                  break;
                case "FILE_ACCESS_DENIED":
                  k = "FILE_ACCESS_DENIED";
                  break;
                case "SERVER_UNREACHABLE":
                case "SERVER_BAD_CONTENT":
                  k = "SERVER_UNREACHABLE";
              }
              e.call(d, new A("chrome.downloads.download", k, "url: " + f + " reason: " + c));
            },
            function (c) {
              c = B("DownloadItem.getItemById", c);
              Gb && J(Gb, E, "Unexpected error finding download: " + c.message);
              b.K.reject(c);
            }
          );
          break;
        case "in_progress":
          break;
        default:
          Gb && J(Gb, E, "Unexpected downloadItem state: " + a.state.current),
            this.K.reject(new A("chrome.downloads.download", "UNEXPECTED_ERROR", "state: " + a.state.current));
      }
    else a.paused && a.paused.current && this.K.reject(new A("chrome.downloads.download", "USER_CANCELED", this.Fa));
};
var Gb = I("extension.DownloadItem");
var Hb = function (a) {
    if (a.R && "function" == typeof a.R) return a.R();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (na(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b;
  },
  Ib = function (a) {
    if (a.ya && "function" == typeof a.ya) return a.ya();
    if (!a.R || "function" != typeof a.R) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (na(a) || "string" === typeof a) {
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
  Jb = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (na(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = Ib(a), e = Hb(a), f = e.length, k = 0; k < f; k++) b.call(c, e[k], d && d[k], a);
  };
var Kb = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  Lb = function (a, b) {
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
var Q = function (a) {
  this.D = this.W = this.M = "";
  this.v = null;
  this.P = this.H = "";
  this.C = this.tb = !1;
  if (a instanceof Q) {
    this.C = a.C;
    Nb(this, a.M);
    var b = a.W;
    R(this);
    this.W = b;
    b = a.D;
    R(this);
    this.D = b;
    Ob(this, a.v);
    b = a.H;
    R(this);
    this.H = b;
    Pb(this, a.F.clone());
    a = a.P;
    R(this);
    this.P = a;
  } else
    a && (b = String(a).match(Kb))
      ? ((this.C = !1),
        Nb(this, b[1] || "", !0),
        (a = b[2] || ""),
        R(this),
        (this.W = Qb(a)),
        (a = b[3] || ""),
        R(this),
        (this.D = Qb(a, !0)),
        Ob(this, b[4]),
        (a = b[5] || ""),
        R(this),
        (this.H = Qb(a, !0)),
        Pb(this, b[6] || "", !0),
        (a = b[7] || ""),
        R(this),
        (this.P = Qb(a)))
      : ((this.C = !1), (this.F = new S(null, this.C)));
};
Q.prototype.toString = function () {
  var a = [],
    b = this.M;
  b && a.push(Rb(b, Sb, !0), ":");
  var c = this.D;
  if (c || "file" == b)
    a.push("//"),
      (b = this.W) && a.push(Rb(b, Sb, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.v),
      null != c && a.push(":", String(c));
  if ((c = this.H)) this.D && "/" != c.charAt(0) && a.push("/"), a.push(Rb(c, "/" == c.charAt(0) ? Tb : Ub, !0));
  (c = this.F.toString()) && a.push("?", c);
  (c = this.P) && a.push("#", Rb(c, Vb));
  return a.join("");
};
Q.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.M;
  c ? Nb(b, a.M) : (c = !!a.W);
  if (c) {
    var d = a.W;
    R(b);
    b.W = d;
  } else c = !!a.D;
  c ? ((d = a.D), R(b), (b.D = d)) : (c = null != a.v);
  d = a.H;
  if (c) Ob(b, a.v);
  else if ((c = !!a.H)) {
    if ("/" != d.charAt(0))
      if (this.D && !this.H) d = "/" + d;
      else {
        var e = b.H.lastIndexOf("/");
        -1 != e && (d = b.H.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
      d = 0 == e.lastIndexOf("/", 0);
      e = e.split("/");
      for (var f = [], k = 0; k < e.length; ) {
        var g = e[k++];
        "." == g
          ? d && k == e.length && f.push("")
          : ".." == g
          ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && k == e.length && f.push(""))
          : (f.push(g), (d = !0));
      }
      d = f.join("/");
    } else d = e;
  }
  c ? (R(b), (b.H = d)) : (c = "" !== a.F.toString());
  c ? Pb(b, a.F.clone()) : (c = !!a.P);
  c && ((a = a.P), R(b), (b.P = a));
  return b;
};
Q.prototype.clone = function () {
  return new Q(this);
};
var Nb = function (a, b, c) {
    R(a);
    a.M = c ? Qb(b, !0) : b;
    a.M && (a.M = a.M.replace(/:$/, ""));
  },
  Ob = function (a, b) {
    R(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.v = b;
    } else a.v = null;
  },
  Pb = function (a, b, c) {
    R(a);
    b instanceof S ? ((a.F = b), a.F.Ea(a.C)) : (c || (b = Rb(b, Wb)), (a.F = new S(b, a.C)));
  };
Q.prototype.getQuery = function () {
  return this.F.toString();
};
Q.prototype.removeParameter = function (a) {
  R(this);
  this.F.remove(a);
  return this;
};
var R = function (a) {
  if (a.tb) throw Error("Tried to modify a read-only Uri");
};
Q.prototype.Ea = function (a) {
  this.C = a;
  this.F && this.F.Ea(a);
};
var Qb = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Rb = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, Xb)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  Xb = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  Sb = /[#\/\?@]/g,
  Ub = /[#\?:]/g,
  Tb = /[#\?]/g,
  Wb = /[#\?@]/g,
  Vb = /#/g,
  S = function (a, b) {
    this.l = this.h = null;
    this.o = a || null;
    this.C = !!b;
  },
  T = function (a) {
    a.h ||
      ((a.h = new Map()),
      (a.l = 0),
      a.o &&
        Lb(a.o, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
S.prototype.add = function (a, b) {
  T(this);
  this.o = null;
  a = U(this, a);
  var c = this.h.get(a);
  c || this.h.set(a, (c = []));
  c.push(b);
  this.l = y(this.l) + 1;
  return this;
};
S.prototype.remove = function (a) {
  T(this);
  a = U(this, a);
  return this.h.has(a) ? ((this.o = null), (this.l = y(this.l) - this.h.get(a).length), this.h.delete(a)) : !1;
};
S.prototype.clear = function () {
  this.h = this.o = null;
  this.l = 0;
};
var Yb = function (a, b) {
  T(a);
  b = U(a, b);
  return a.h.has(b);
};
n = S.prototype;
n.forEach = function (a, b) {
  T(this);
  this.h.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
n.ya = function () {
  T(this);
  for (var a = Array.from(this.h.values()), b = Array.from(this.h.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
n.R = function (a) {
  T(this);
  var b = [];
  if ("string" === typeof a) Yb(this, a) && (b = b.concat(this.h.get(U(this, a))));
  else {
    a = Array.from(this.h.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
n.set = function (a, b) {
  T(this);
  this.o = null;
  a = U(this, a);
  Yb(this, a) && (this.l = y(this.l) - this.h.get(a).length);
  this.h.set(a, [b]);
  this.l = y(this.l) + 1;
  return this;
};
n.get = function (a, b) {
  if (!a) return b;
  a = this.R(a);
  return 0 < a.length ? String(a[0]) : b;
};
n.toString = function () {
  if (this.o) return this.o;
  if (!this.h) return "";
  for (var a = [], b = Array.from(this.h.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.R(d);
    for (var f = 0; f < d.length; f++) {
      var k = e;
      "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
      a.push(k);
    }
  }
  return (this.o = a.join("&"));
};
n.clone = function () {
  var a = new S();
  a.o = this.o;
  this.h && ((a.h = new Map(this.h)), (a.l = this.l));
  return a;
};
var U = function (a, b) {
  b = String(b);
  a.C && (b = b.toLowerCase());
  return b;
};
S.prototype.Ea = function (a) {
  a &&
    !this.C &&
    (T(this),
    (this.o = null),
    this.h.forEach(function (b, c) {
      var d = c.toLowerCase();
      if (c != d && (this.remove(c), this.remove(d), 0 < b.length)) {
        this.o = null;
        c = this.h;
        var e = c.set;
        d = U(this, d);
        var f = b.length;
        if (0 < f) {
          for (var k = Array(f), g = 0; g < f; g++) k[g] = b[g];
          f = k;
        } else f = [];
        e.call(c, d, f);
        this.l = y(this.l) + b.length;
      }
    }, this));
  this.C = a;
};
S.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Jb(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var V = function (a, b) {
  C.call(this);
  this.sa = a;
  this.Ua = b;
  this.Ca = new Map();
  this.Aa = new Map();
  this.Ta = this.rb.bind(this);
  this.Wa = this.sb.bind(this);
};
r(V, C);
V.prototype.start = function () {
  this.sa.addListener(this.Wa);
  this.Ua.addListener(this.Ta);
};
V.prototype.J = function () {
  this.sa.removeListener(this.Wa);
  this.Ua.removeListener(this.Ta);
  C.prototype.J.call(this);
};
V.prototype.rb = function (a) {
  var b = new Q(a.sender.url);
  if (!b.D.endsWith("google.com")) {
    var c = W;
    c && J(c, Ja, "Rejecting incoming connection from domain: " + b.D);
    a.disconnect();
  }
  if ((b = this.Ca.get(a.name))) b.onConnect(a);
  else a.disconnect();
};
V.prototype.sb = function (a, b, c) {
  try {
    var d = Aa(a).type;
    if ("hello" == d) return c({ type: "hello", version: chrome.runtime.getManifest().version }), !1;
    var e = this.Aa.get(d);
    return e ? e.onMessage(a, b, c) : ((a = W) && J(a, Ja, "No handler is registered for type: " + d), !1);
  } catch (f) {
    return W && J(W, E, "Error handling message", f), !1;
  }
};
var Zb = function (a, b) {
    var c = b.Sa;
    a.Ca.has(c) ? W && J(W, E, "A service with name: " + c + " is already registered.") : (a.Ca.set(c, b), Ha(a, ra(Ga, b)));
  },
  ac = function (a) {
    for (var b = new $b(), c = ["tabs.highlight"], d = 0; d < c.length; d++) {
      var e = c[d];
      if (a.Aa.has(e)) {
        W && J(W, E, "A message handler with type: " + e + " is already registered.");
        return;
      }
    }
    for (d = 0; d < c.length; d++) a.Aa.set(c[d], b);
    Ha(a, ra(Ga, b));
  },
  W = I("extension.EventPage");
var bc = function () {
  this.ua = void 0;
};
bc.prototype.j = function (a) {
  var b = [];
  cc(this, a, b);
  return b.join("");
};
var cc = function (a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++) c.push(e), (e = d[f]), cc(a, a.ua ? a.ua.call(d, String(f), e) : e, c), (e = ",");
          c.push("]");
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push("{");
          f = "";
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((e = b[d]),
              "function" != typeof e && (c.push(f), dc(d, c), c.push(":"), cc(a, a.ua ? a.ua.call(b, d, e) : e, c), (f = ",")));
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          dc(b, c);
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
  ec = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
  fc = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
  dc = function (a, b) {
    b.push(
      '"',
      a.replace(fc, function (c) {
        var d = ec[c];
        d || ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1)), (ec[c] = d));
        return d;
      }),
      '"'
    );
  };
var gc = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, k, g, h, l, m, F) {
      if ("%" == l) return "%";
      var Mb = c.shift();
      if ("undefined" == typeof Mb) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = Mb;
      return X[l].apply(null, arguments);
    });
  },
  X = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a = -1 < b.indexOf("-", 0) ? a + K(" ", Number(c) - a.length) : K(" ", Number(c) - a.length) + a);
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      return (d = 0 <= b.indexOf("-", 0) ? f + d + K(" ", a) : f + K(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
    },
    d: function (a, b, c, d, e, f, k, g) {
      return X.f(parseInt(a, 10), b, c, d, 0, f, k, g);
    }
  };
X.i = X.d;
X.u = X.d;
var ic = function () {
  this.g = new hc();
  this.za = new bc();
};
ic.prototype.format = function (a) {
  a: if (null == a) a = [];
  else {
    if ("string" === typeof a) {
      if (/^[\s\xa0]*$/.test(a)) {
        a = [];
        break a;
      }
      a = JSON.parse(a);
    }
    var b = [];
    jc(this, a, b, 0);
    a = b;
  }
  var c = "";
  for (b = 0; b < a.length; b++) {
    var d = a[b];
    d instanceof Xa &&
      (d instanceof Xa && d.constructor === Xa
        ? (d = d.bb)
        : (xa("expected object of type SafeHtml, got '" + d + "' of type " + v(d)), (d = "type_error:SafeHtml")),
      (d = d.toString()));
    c += d;
  }
  return c;
};
var jc = function (a, b, c, d) {
    var e = v(b);
    switch (e) {
      case "null":
      case "boolean":
      case "number":
      case "string":
        d = a.za.j(b);
        b = c.push;
        a = a.g;
        a = gc(a.ab, e) + d + a.Za;
        b.call(c, a);
        break;
      case "array":
        c.push(a.g.nb);
        var f;
        for (f = 0; f < b.length; f++) 0 < f && c.push(a.g.cb), c.push(a.g.qa), c.push(K(a.g.ia, d + a.g.pa)), jc(a, b[f], c, d + a.g.pa);
        0 < f && (c.push(a.g.qa), c.push(K(a.g.ia, d)));
        c.push(a.g.mb);
        break;
      case "object":
        c.push(a.g.yb);
        e = 0;
        for (f in b)
          if (b.hasOwnProperty(f)) {
            0 < e && c.push(a.g.cb);
            c.push(a.g.qa);
            c.push(K(a.g.ia, d + a.g.pa));
            var k = c,
              g = k.push,
              h = a.g,
              l = a.za.j(f);
            g.call(k, h.Fb + l + h.Eb);
            c.push(a.g.wb, a.g.ia);
            jc(a, b[f], c, d + a.g.pa);
            e++;
          }
        0 < e && (c.push(a.g.qa), c.push(K(a.g.ia, d)));
        c.push(a.g.xb);
        break;
      default:
        (d = a.za.j("")), (b = c.push), (a = a.g), (a = gc(a.ab, "unknown") + d + a.Za), b.call(c, a);
    }
  },
  hc = function () {};
n = hc.prototype;
n.ia = " ";
n.qa = "\n";
n.yb = "{";
n.xb = "}";
n.nb = "[";
n.mb = "]";
n.cb = ",";
n.wb = ":";
n.Fb = "";
n.Eb = "";
n.ab = "";
n.Za = "";
n.pa = 2;
var kc = function () {
  C.call(this);
  this.Sa = "chrome.downloads";
  this.Da = new Set();
};
r(kc, C);
kc.prototype.Ab = function (a) {
  this.Da.delete(a);
};
kc.prototype.onConnect = function (a) {
  this.Da.add(new lc(a, this.Ab.bind(this)));
};
kc.prototype.J = function () {
  this.Da.forEach(function (a) {
    a.close();
  });
  C.prototype.J.call(this);
};
var lc = function (a, b) {
  var c = this;
  this.v = a;
  this.Va = this.sa.bind(this);
  this.S = function () {
    Ga(c.L);
    c.v.onMessage.removeListener(c.Va);
    c.v.onDisconnect.removeListener(c.S);
    b(c);
  };
  this.ga = new ic();
  this.L = null;
  this.v.onMessage.addListener(this.Va);
  this.v.onDisconnect.addListener(this.S);
};
lc.prototype.close = function () {
  this.v.disconnect();
};
lc.prototype.sa = function (a) {
  var b = "Incoming message: " + this.ga.format(a);
  mc && J(mc, Ka, b);
  b = Aa(a);
  var c = this.Jb.bind(this, a.id);
  try {
    switch (b.type) {
      case "hello":
        c({ type: "helloResponse", version: chrome.runtime.getManifest().version });
        break;
      case "downloads.init":
        var d = a.type;
        if ("downloads.init" !== d) throw Error("Expected |type| === downloads.init but got: " + d);
        var e = ta(a.url, "url");
        nc(this, e, c);
        break;
      case "downloads.getStatus":
        oc(this, c);
        break;
      case "downloads.getProgress":
        pc(this, c);
        break;
      case "downloads.download":
        qc(this, c);
        break;
      case "downloads.show":
        rc(this, c);
        break;
      default:
        c(new A("DownloadSession.onMessage", "INVALID_ARGS", "Unknown message type: " + b.type).j());
    }
  } catch (f) {
    c(new A("DownloadSession.onMessage", "UNEXPECTED_ERROR", f.message).j());
  }
};
var nc = function (a, b, c) {
    Db(b)
      .then(function (d) {
        a.L = d;
        c(Ea.j());
      })
      .N(function (d) {
        c(B("DownloadItem.create", d).j());
      });
  },
  oc = function (a, b) {
    sc(a, b) &&
      Fb(a.L)
        .then(function (c) {
          b({ type: "downloads.getStatusResponse", status: c });
        })
        .N(function (c) {
          b(B("DownloadItem.getStatus", c).j());
        });
  },
  pc = function (a, b) {
    sc(a, b) &&
      Eb(a.L)
        .then(function (c) {
          b(c);
        })
        .N(function (c) {
          b(B("DownloadItem.getProgress", c).j());
        });
  },
  qc = function (a, b) {
    a.L.download()
      .then(function () {
        P(a.L.B).then(function (c) {
          b({ type: "downloads.downloadResponse", danger: c.danger });
        });
      })
      .N(function (c) {
        b(B("DownloadItem.getDetails or DownloadItem.download", c).j());
      });
  },
  rc = function (a, b) {
    sc(a, b) &&
      a.L.show()
        .then(function () {
          b(Fa.j());
        })
        .N(function (c) {
          b(B("DownloadItem.show", c).j());
        });
  };
lc.prototype.Jb = function (a, b) {
  var c = "Outgoing message: " + this.ga.format(b);
  mc && J(mc, Ka, c);
  b.id = a;
  this.v.postMessage(b);
};
var sc = function (a, b) {
    return a.L ? !0 : (b(new A("checkInitialized", "INVALID_ARGS", "this.downloadItem_ == null").j()), !1);
  },
  mc = I("extension.NativeMessagingHandler");
var Y = function (a) {
  C.call(this);
  this.Sa = a;
  this.wa = new Set();
};
r(Y, C);
Y.prototype.zb = function (a) {
  this.wa.delete(a);
};
Y.prototype.onConnect = function (a) {
  this.wa.add(new tc(a, this.zb.bind(this)));
};
Y.prototype.J = function () {
  this.wa.forEach(function (a) {
    a.close();
  });
  C.prototype.J.call(this);
};
var tc = function (a, b) {
  var c = this;
  this.ca = a;
  this.aa = chrome.runtime.connectNative(a.name);
  this.Ya = this.Db.bind(this);
  this.Xa = this.Cb.bind(this);
  this.S = function () {
    c.close();
    b(c);
  };
  this.ga = new ic();
  this.ca.onMessage.addListener(this.Ya);
  this.ca.onDisconnect.addListener(this.S);
  this.aa.onMessage.addListener(this.Xa);
  this.aa.onDisconnect.addListener(this.S);
};
tc.prototype.close = function () {
  this.ca.onMessage.removeListener(this.Ya);
  this.ca.onDisconnect.removeListener(this.S);
  this.aa.onMessage.removeListener(this.Xa);
  this.aa.onDisconnect.removeListener(this.S);
  this.ca.disconnect();
  this.aa.disconnect();
};
tc.prototype.Cb = function (a) {
  var b = "Native => Webapp: " + this.ga.format(a);
  uc && J(uc, Ka, b);
  this.ca.postMessage(a);
};
tc.prototype.Db = function (a) {
  var b = "Webapp => Native: " + this.ga.format(a);
  uc && J(uc, Ka, b);
  this.aa.postMessage(a);
};
var uc = I("extension.NativeMessagingHandler");
var $b = function () {
  C.apply(this, arguments);
};
r($b, C);
$b.prototype.onMessage = function (a, b, c) {
  a = Aa(a);
  try {
    switch (a.type) {
      case "tabs.highlight":
        return vc(b, c);
      default:
        return wc(c, new A("TabsMessageHandler.onMessage", "INVALID_ARGS", "Unknown message type: " + a.type));
    }
  } catch (d) {
    return wc(c, new A("TabsMessageHandler.onMessage", "UNEXPECTED_ERROR", "Unexpected error: " + d.message));
  }
};
var vc = function (a, b) {
  if (a.tab) {
    var c = a.tab.windowId,
      d = a.tab.index;
    chrome.windows.update(c, { focused: !0 }, function () {
      chrome.tabs.highlight({ windowId: c, tabs: d }, function () {
        b(Da.j());
      });
    });
    return !0;
  }
  b(Da.j());
  return !1;
};
function wc(a, b) {
  xc && J(xc, E, "Sending error: " + b.message, b);
  a(b.j());
  return !1;
}
var xc = I("extension.TabsMessageHandler");
var yc = function () {
    this.eb = Date.now();
  },
  zc = null;
yc.prototype.set = function (a) {
  this.eb = a;
};
yc.prototype.reset = function () {
  this.set(Date.now());
};
yc.prototype.get = function () {
  return this.eb;
};
var Ac = function (a) {
  this.Gb = a || "";
  zc || (zc = new yc());
  this.Nb = zc;
};
n = Ac.prototype;
n.Ga = !0;
n.gb = !0;
n.Lb = !0;
n.Kb = !0;
n.hb = !1;
n.Mb = !1;
var Z = function (a) {
    return 10 > a ? "0" + a : String(a);
  },
  Bc = function (a) {
    Ac.call(this, a);
  };
sa(Bc, Ac);
var Cc = function (a, b) {
  var c = [];
  c.push(a.Gb, " ");
  if (a.gb) {
    var d = new Date(b.ib);
    c.push(
      "[",
      Z(d.getFullYear() - 2e3) +
        Z(d.getMonth() + 1) +
        Z(d.getDate()) +
        " " +
        Z(d.getHours()) +
        ":" +
        Z(d.getMinutes()) +
        ":" +
        Z(d.getSeconds()) +
        "." +
        Z(Math.floor(d.getMilliseconds() / 10)),
      "] "
    );
  }
  if (a.Lb) {
    d = c.push;
    var e = a.Nb.get();
    e = (b.ib - e) / 1e3;
    var f = e.toFixed(3),
      k = 0;
    if (1 > e) k = 2;
    else for (; 100 > e; ) k++, (e *= 10);
    for (; 0 < k--; ) f = " " + f;
    d.call(c, "[", f, "s] ");
  }
  a.Kb && c.push("[", b.Ra, "] ");
  a.Mb && c.push("[", b.Pa.name, "] ");
  c.push(b.getMessage());
  a.hb && ((b = b.la), void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
  a.Ga && c.push("\n");
  return c.join("");
};
var Dc = function () {
    this.Hb = qa(this.kb, this);
    this.ma = new Bc();
    this.ma.gb = !1;
    this.ma.hb = !1;
    this.Na = this.ma.Ga = !1;
    this.qb = {};
  },
  Ec = function () {
    var a = new Dc();
    if (1 != a.Na) {
      var b = G(H(), "").Qa,
        c = a.Hb;
      b && G(H(), b.na()).Ma.push(c);
      a.Na = !0;
    }
  };
Dc.prototype.kb = function (a) {
  function b(f) {
    if (f) {
      if (f.value >= E.value) return "error";
      if (f.value >= Ja.value) return "warn";
      if (f.value >= La.value) return "log";
    }
    return "debug";
  }
  if (!this.qb[a.Ra]) {
    var c = Cc(this.ma, a),
      d = Fc;
    if (d) {
      var e = b(a.Pa);
      Gc(d, e, c, a.la);
    }
  }
};
var Fc = u.console,
  Gc = function (a, b, c, d) {
    if (a[b]) a[b](c, void 0 === d ? "" : d);
    else a.log(c, void 0 === d ? "" : d);
  };
(function () {
  Ec();
  chrome.action.onClicked.addListener(function () {
    return chrome.tabs.create({ url: "https://remotedesktop.google.com/" });
  });
  var a = new V(chrome.runtime.onMessageExternal, chrome.runtime.onConnectExternal);
  ac(a);
  Zb(a, new Y("com.google.chrome.remote_assistance"));
  Zb(a, new Y("com.google.chrome.remote_desktop"));
  Zb(a, new kc());
  a.start();
})();
