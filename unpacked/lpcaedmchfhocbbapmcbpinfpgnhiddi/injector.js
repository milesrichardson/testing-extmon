var m;
function aa(a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
}
var ba =
  "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
      };
function ca(a) {
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
}
var da = ca(this);
function p(a, b) {
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
}
p("Symbol", function (a) {
  function b(f) {
    if (this instanceof b) throw new TypeError("Symbol is not a constructor");
    return new c(d + (f || "") + "_" + e++, f);
  }
  function c(f, k) {
    this.sa = f;
    ba(this, "description", { configurable: !0, writable: !0, value: k });
  }
  if (a) return a;
  c.prototype.toString = function () {
    return this.sa;
  };
  var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    e = 0;
  return b;
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
function ea(a) {
  a = { next: a };
  a[Symbol.iterator] = function () {
    return this;
  };
  return a;
}
function fa(a) {
  return (a.raw = a);
}
function q(a, b) {
  a.raw = b;
  return a;
}
function ha(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  if (b) return b.call(a);
  if ("number" == typeof a.length) return { next: aa(a) };
  throw Error(String(a) + " is not an iterable or ArrayLike");
}
function r(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var ia =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          function b() {}
          b.prototype = a;
          return new b();
        },
  ja;
if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
else {
  var ka;
  a: {
    var la = { a: !0 },
      ma = {};
    try {
      ma.__proto__ = la;
      ka = ma.a;
      break a;
    } catch (a) {}
    ka = !1;
  }
  ja = ka
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var na = ja;
function oa(a, b) {
  a.prototype = ia(b.prototype);
  a.prototype.constructor = a;
  if (na) na(a, b);
  else
    for (var c in b)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else a[c] = b[c];
  a.S = b.prototype;
}
function pa() {
  for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
  return b;
}
p("WeakMap", function (a) {
  function b(h) {
    this.K = (g += Math.random() + 1).toString();
    if (h) {
      h = ha(h);
      for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
    }
  }
  function c() {}
  function d(h) {
    var l = typeof h;
    return ("object" === l && null !== h) || "function" === l;
  }
  function e(h) {
    if (!r(h, k)) {
      var l = new c();
      ba(h, k, { value: l });
    }
  }
  function f(h) {
    var l = Object[h];
    l &&
      (Object[h] = function (n) {
        if (n instanceof c) return n;
        Object.isExtensible(n) && e(n);
        return l(n);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var h = Object.seal({}),
          l = Object.seal({}),
          n = new a([
            [h, 2],
            [l, 3]
          ]);
        if (2 != n.get(h) || 3 != n.get(l)) return !1;
        n.delete(h);
        n.set(l, 4);
        return !n.has(h) && 4 == n.get(l);
      } catch (E) {
        return !1;
      }
    })()
  )
    return a;
  var k = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var g = 0;
  b.prototype.set = function (h, l) {
    if (!d(h)) throw Error("Invalid WeakMap key");
    e(h);
    if (!r(h, k)) throw Error("WeakMap key fail: " + h);
    h[k][this.K] = l;
    return this;
  };
  b.prototype.get = function (h) {
    return d(h) && r(h, k) ? h[k][this.K] : void 0;
  };
  b.prototype.has = function (h) {
    return d(h) && r(h, k) && r(h[k], this.K);
  };
  b.prototype.delete = function (h) {
    return d(h) && r(h, k) && r(h[k], this.K) ? delete h[k][this.K] : !1;
  };
  return b;
});
p("Map", function (a) {
  function b() {
    var g = {};
    return (g.previous = g.next = g.head = g);
  }
  function c(g, h) {
    var l = g[1];
    return ea(function () {
      if (l) {
        for (; l.head != g[1]; ) l = l.previous;
        for (; l.next != l.head; ) return (l = l.next), { done: !1, value: h(l) };
        l = null;
      }
      return { done: !0, value: void 0 };
    });
  }
  function d(g, h) {
    var l = h && typeof h;
    "object" == l || "function" == l ? (f.has(h) ? (l = f.get(h)) : ((l = "" + ++k), f.set(h, l))) : (l = "p_" + h);
    var n = g[0][l];
    if (n && r(g[0], l))
      for (g = 0; g < n.length; g++) {
        var E = n[g];
        if ((h !== h && E.key !== E.key) || h === E.key) return { id: l, list: n, index: g, entry: E };
      }
    return { id: l, list: n, index: -1, entry: void 0 };
  }
  function e(g) {
    this[0] = {};
    this[1] = b();
    this.size = 0;
    if (g) {
      g = ha(g);
      for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
    }
  }
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var g = Object.seal({ x: 4 }),
          h = new a(ha([[g, "s"]]));
        if ("s" != h.get(g) || 1 != h.size || h.get({ x: 4 }) || h.set({ x: 4 }, "t") != h || 2 != h.size) return !1;
        var l = h.entries(),
          n = l.next();
        if (n.done || n.value[0] != g || "s" != n.value[1]) return !1;
        n = l.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0;
      } catch (E) {
        return !1;
      }
    })()
  )
    return a;
  var f = new WeakMap();
  e.prototype.set = function (g, h) {
    g = 0 === g ? 0 : g;
    var l = d(this, g);
    l.list || (l.list = this[0][l.id] = []);
    l.entry
      ? (l.entry.value = h)
      : ((l.entry = { next: this[1], previous: this[1].previous, head: this[1], key: g, value: h }),
        l.list.push(l.entry),
        (this[1].previous.next = l.entry),
        (this[1].previous = l.entry),
        this.size++);
    return this;
  };
  e.prototype.delete = function (g) {
    g = d(this, g);
    return g.entry && g.list
      ? (g.list.splice(g.index, 1),
        g.list.length || delete this[0][g.id],
        (g.entry.previous.next = g.entry.next),
        (g.entry.next.previous = g.entry.previous),
        (g.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  e.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = b();
    this.size = 0;
  };
  e.prototype.has = function (g) {
    return !!d(this, g).entry;
  };
  e.prototype.get = function (g) {
    return (g = d(this, g).entry) && g.value;
  };
  e.prototype.entries = function () {
    return c(this, function (g) {
      return [g.key, g.value];
    });
  };
  e.prototype.keys = function () {
    return c(this, function (g) {
      return g.key;
    });
  };
  e.prototype.values = function () {
    return c(this, function (g) {
      return g.value;
    });
  };
  e.prototype.forEach = function (g, h) {
    for (var l = this.entries(), n; !(n = l.next()).done; ) (n = n.value), g.call(h, n[1], n[0], this);
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var k = 0;
  return e;
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
function qa(a, b) {
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
}
p("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return qa(this, function (b, c) {
          return [b, c];
        });
      };
});
p("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return qa(this, function (b) {
          return b;
        });
      };
});
p("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return qa(this, function (b, c) {
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
var t = this || self;
function u(a) {
  var b = typeof a;
  return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
}
function ra(a) {
  var b = u(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function v(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
var sa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  ta = 0;
function ua(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function va(a, b, c) {
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
}
function wa(a, b, c) {
  wa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ua : va;
  return wa.apply(null, arguments);
}
function w(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.S = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Ad = function (d, e, f) {
    for (var k = Array(arguments.length - 2), g = 2; g < arguments.length; g++) k[g - 2] = arguments[g];
    return b.prototype[e].apply(d, k);
  };
}
function xa(a) {
  return a;
}
function x(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, x);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
w(x, Error);
x.prototype.name = "CustomError";
var ya;
function za(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  x.call(this, c + a[d]);
}
w(za, x);
za.prototype.name = "AssertionError";
function Aa(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new za("" + e, f || []);
}
function y(a, b, c) {
  a || Aa("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function z(a, b) {
  throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
function A(a, b, c) {
  "number" !== typeof a && Aa("Expected number but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Ba(a, b, c) {
  Array.isArray(a) || Aa("Expected array but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
}
var Ca = /&/g,
  Da = /</g,
  Ea = />/g,
  Fa = /"/g,
  Ga = /'/g,
  Ha = /\x00/g,
  Ia = /[\x00&<>"']/;
var Ja, Ka;
a: {
  for (var La = ["CLOSURE_FLAGS"], Ma = t, Na = 0; Na < La.length; Na++)
    if (((Ma = Ma[La[Na]]), null == Ma)) {
      Ka = null;
      break a;
    }
  Ka = Ma;
}
var Oa = Ka && Ka[610401301];
Ja = null != Oa ? Oa : !1;
function Pa() {
  var a = t.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var B,
  Qa = t.navigator;
B = Qa ? Qa.userAgentData || null : null;
function Ra(a) {
  return Ja
    ? B
      ? B.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function C(a) {
  return -1 != Pa().indexOf(a);
}
function D() {
  return Ja ? !!B && 0 < B.brands.length : !1;
}
function Sa() {
  return D() ? Ra("Chromium") : ((C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge"))) || C("Silk");
}
var Ta = Array.prototype.indexOf
    ? function (a, b) {
        y(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Ua = Array.prototype.forEach
    ? function (a, b) {
        y(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
function Va(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function Wa(a) {
  Wa[" "](a);
  return a;
}
Wa[" "] = function () {};
var Xa = D() ? !1 : C("Trident") || C("MSIE"),
  Ya = C("Gecko") && !(-1 != Pa().toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
  Za = -1 != Pa().toLowerCase().indexOf("webkit") && !C("Edge");
!C("Android") || Sa();
Sa();
var $a =
  C("Safari") &&
  !(
    Sa() ||
    (D() ? 0 : C("Coast")) ||
    (D() ? 0 : C("Opera")) ||
    (D() ? 0 : C("Edge")) ||
    (D() ? Ra("Microsoft Edge") : C("Edg/")) ||
    (D() ? Ra("Opera") : C("OPR")) ||
    C("Firefox") ||
    C("FxiOS") ||
    C("Silk") ||
    C("Android")
  ) &&
  !((C("iPhone") && !C("iPod") && !C("iPad")) || C("iPad") || C("iPod"));
var F = null,
  ab = Ya || Za || (!$a && !Xa && "function" == typeof t.atob);
function bb(a, b) {
  function c(h) {
    for (; d < a.length; ) {
      var l = a.charAt(d++),
        n = F[l];
      if (null != n) return n;
      if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
    }
    return h;
  }
  cb();
  for (var d = 0; ; ) {
    var e = c(-1),
      f = c(0),
      k = c(64),
      g = c(64);
    if (64 === g && -1 === e) break;
    b((e << 2) | (f >> 4));
    64 != k && (b(((f << 4) & 240) | (k >> 2)), 64 != g && b(((k << 6) & 192) | g));
  }
}
function cb() {
  if (!F) {
    F = {};
    for (
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0;
      5 > c;
      c++
    )
      for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
        var f = d[e],
          k = F[f];
        void 0 === k ? (F[f] = e) : y(k === e);
      }
  }
}
y(!0);
var G;
G = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
var db = Math,
  eb = db.round,
  fb = Math,
  gb = fb.log2,
  hb = Math.max,
  ib = hb.apply,
  jb = Object.values({
    jc: 1,
    hc: 2,
    fc: 4,
    Fc: 8,
    Ec: 16,
    wc: 32,
    fb: 64,
    jd: 128,
    Vb: 256,
    Ub: 512,
    ic: 1024,
    Pb: 2048,
    Yc: 4096,
    Qb: 8192
  }),
  kb;
if (jb instanceof Array) kb = jb;
else {
  for (var lb = ha(jb), mb, nb = []; !(mb = lb.next()).done; ) nb.push(mb.value);
  kb = nb;
}
y(13 === eb.call(db, gb.call(fb, ib.call(hb, Math, kb))));
var ob = Object.getOwnPropertyDescriptor(Array.prototype, "Ba");
Object.defineProperties(Array.prototype, {
  Ba: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = pb(this),
        c = [];
      a(1, "IS_REPEATED_FIELD");
      a(2, "IS_IMMUTABLE_ARRAY");
      a(4, "IS_API_FORMATTED");
      a(4096, "STRING_FORMATTED");
      a(8192, "GBIGINT_FORMATTED");
      a(8, "ONLY_MUTABLE_VALUES");
      a(32, "MUTABLE_REFERENCES_ARE_OWNED");
      a(64, "CONSTRUCTED");
      a(128, "TRANSFERRED");
      a(256, "HAS_SPARSE_OBJECT");
      a(512, "HAS_MESSAGE_ID");
      a(2048, "FROZEN_ARRAY");
      var d = qb(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return ob ? ob.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var pb = G
  ? function (a) {
      Ba(a, "state is only maintained on arrays.");
      return a[G] | 0;
    }
  : function (a) {
      Ba(a, "state is only maintained on arrays.");
      return a.Z | 0;
    };
function qb(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var rb = [];
(G
  ? function (a, b) {
      Ba(a, "state is only maintained on arrays.");
      y((b & 16777215) == b);
      a[G] = b;
    }
  : function (a, b) {
      Ba(a, "state is only maintained on arrays.");
      y((b & 16777215) == b);
      void 0 !== a.Z ? (a.Z = b) : Object.defineProperties(a, { Z: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
    })(rb, 55);
Object.freeze(rb);
var sb = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
Object.freeze(new (function () {})());
Object.freeze(new (function () {})());
function tb() {
  throw Error("please construct maps as mutable then call toImmutable");
}
if (sb) {
  var ub = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    vb = {};
  Object.defineProperties(tb, ((vb[Symbol.hasInstance] = { value: ub, configurable: !1, writable: !1, enumerable: !1 }), vb));
  y(tb[Symbol.hasInstance] === ub, "defineProperties did not work: was it monkey-patched?");
}
if ("undefined" !== typeof Proxy) {
  var H = wb;
  new Proxy(
    {},
    {
      getPrototypeOf: H,
      setPrototypeOf: H,
      isExtensible: H,
      preventExtensions: H,
      getOwnPropertyDescriptor: H,
      defineProperty: H,
      has: H,
      get: H,
      set: H,
      deleteProperty: H,
      apply: H,
      construct: H
    }
  );
}
function wb() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function xb() {}
(function () {
  var a = t.jspbGetTypeName;
  t.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : xb;
})();
var yb = {
  Fa: "n_amt",
  Ha: "n_afoiu",
  Ia: "n_age",
  Ja: "n_k",
  Ka: "n_ars",
  La: "n_s",
  Ma: "n_ss",
  Na: "n_ats",
  Oa: "n_atas",
  Ra: "n_bi",
  Sa: "n_bl",
  Ua: "n_cajct",
  Va: "n_cajstm",
  Ya: "n_ccd",
  Za: "n_cc",
  ab: "n_c",
  bb: "n_cp",
  cb: "n_csbs",
  ib: "n_dt",
  lb: "n_dlis",
  mb: "n_deau",
  nb: "n_detl",
  rb: "n_eau",
  sb: "n_ecs",
  tb: "n_ecmv3m",
  ub: "n_ecil",
  vb: "n_ecpde",
  wb: "n_edmp",
  xb: "n_edtt",
  yb: "n_edlh",
  zb: "n_efab",
  Ab: "n_eh",
  Bb: "n_eil",
  Cb: "n_eliw",
  Db: "n_eml",
  Eb: "n_emv2dm",
  Fb: "n_eod",
  Gb: "n_eoros",
  Hb: "n_ep",
  Ib: "n_eqwv",
  Kb: "n_ei",
  Lb: "n_fpae",
  Wb: "n_hak",
  Zb: "n_imb",
  ac: "n_imp",
  dc: "n_iup",
  cc: "n_iltrup",
  kc: "n_j",
  lc: "n_kud",
  pc: "n_lcu",
  rc: "n_mpak",
  sc: "n_mpau",
  zc: "n_nmri",
  xc: "n_nib",
  yc: "n_nmb",
  Bc: "n_npd",
  Cc: "n_npv",
  Dc: "n_oe",
  Ic: "n_pau",
  Oc: "n_rs",
  Qc: "n_rau",
  Uc: "n_ses",
  Wc: "n_scp",
  Zc: "n_sit",
  ad: "n_t",
  ed: "n_ton",
  bd: "n_tak",
  dd: "n_tipe",
  cd: "n_tbti",
  fd: "n_taau",
  gd: "n_tcu",
  hd: "n_tcur",
  ld: "n_tms",
  kd: "n_the",
  nd: "n_ur",
  od: "n_uptc",
  bc: "n_ugat",
  sd: "n_uo",
  rd: "n_ui",
  pd: "n_ue",
  qd: "n_ugs",
  yd: "n_wfp",
  zd: "n_wcv"
};
function zb(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a);
}
function Ab(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function Bb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b;
}
function I() {
  var a = { DEFAULT: 0, DARK: 1 };
  this.D = {};
  this.P = {};
  if (a) for (var b in a) this.put(b, a[b]);
}
I.prototype.put = function (a, b) {
  y(void 0 === this.D[a]);
  y(void 0 === this.P[b]);
  this.D[a] = b;
  this.P[b] = a;
};
I.prototype.get = function (a) {
  return this.D[a];
};
I.prototype.O = function () {
  return Bb(this.D);
};
I.prototype.remove = function (a) {
  if (void 0 !== this.D[a]) {
    var b = y(this.D[a]);
    y(void 0 !== this.P[b]);
    delete this.D[a];
    delete this.P[b];
  }
};
var Cb = {
  Ga: "activedescendant",
  Pa: "atomic",
  Qa: "autocomplete",
  Ta: "busy",
  Xa: "checked",
  eb: "colindex",
  gb: "controls",
  hb: "current",
  kb: "describedby",
  DISABLED: "disabled",
  ob: "dropeffect",
  Jb: "expanded",
  Mb: "flowto",
  Rb: "grabbed",
  Tb: "haspopup",
  Xb: "hidden",
  ec: "invalid",
  mc: "label",
  nc: "labelledby",
  oc: "level",
  qc: "live",
  tc: "multiline",
  uc: "multiselectable",
  Gc: "orientation",
  Hc: "owns",
  Kc: "posinset",
  Lc: "pressed",
  Mc: "readonly",
  Pc: "relevant",
  Rc: "required",
  Sc: "rowindex",
  Tc: "selected",
  Vc: "setsize",
  Xc: "sort",
  td: "valuemax",
  ud: "valuemin",
  vd: "valuenow",
  wd: "valuetext"
};
var Db;
try {
  new self.OffscreenCanvas(0, 0).getContext("2d");
} catch (a) {}
var Eb;
function Fb() {
  if (void 0 === Eb) {
    var a = null,
      b = t.trustedTypes;
    if (b && b.createPolicy)
      try {
        a = b.createPolicy("goog#html", { createHTML: xa, createScript: xa, createScriptURL: xa });
      } catch (c) {
        t.console && t.console.error(c.message);
      }
    Eb = a;
  }
  return Eb;
}
function J(a) {
  if (Gb !== Gb) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.qa = a;
}
J.prototype.toString = function () {
  return this.qa + "";
};
J.prototype.G = !0;
J.prototype.B = function () {
  return this.qa.toString();
};
var Gb = {};
function Hb(a) {
  var b = Fb();
  a = b ? b.createScriptURL(a) : a;
  return new J(a);
}
function K(a, b) {
  if (b !== L) throw Error("SafeUrl is not meant to be built directly");
  this.ca = a;
}
K.prototype.toString = function () {
  return this.ca.toString();
};
K.prototype.G = !0;
K.prototype.B = function () {
  return this.ca.toString();
};
var L = {};
new K("about:invalid#zClosurez", L);
new K("about:blank", L);
var Ib = {};
function Jb() {
  if (Ib !== Ib) throw Error("SafeStyle is not meant to be built directly");
  this.pa = "";
  this.G = !0;
}
Jb.prototype.B = function () {
  return this.pa;
};
Jb.prototype.toString = function () {
  return this.pa.toString();
};
new Jb();
var Kb = {};
function Lb() {
  if (Kb !== Kb) throw Error("SafeStyleSheet is not meant to be built directly");
  this.oa = "";
  this.G = !0;
}
Lb.prototype.toString = function () {
  return this.oa.toString();
};
Lb.prototype.B = function () {
  return this.oa;
};
new Lb();
var Mb = {};
function M(a, b) {
  if (b !== Mb) throw Error("SafeHtml is not meant to be built directly");
  this.ba = a;
  this.G = !0;
}
M.prototype.B = function () {
  return this.ba.toString();
};
M.prototype.toString = function () {
  return this.ba.toString();
};
function Nb(a) {
  if (a instanceof M && a.constructor === M) return a.ba;
  z("expected object of type SafeHtml, got '" + a + "' of type " + u(a));
  return "type_error:SafeHtml";
}
function Ob(a) {
  a instanceof M ||
    ((a = "object" == typeof a && a.G ? a.B() : String(a)),
    Ia.test(a) &&
      (-1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;")),
      -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;")),
      -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")),
      -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;")),
      -1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;")),
      -1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"))),
    (a = Pb(a)));
  return a;
}
function Pb(a) {
  var b = Fb();
  a = b ? b.createHTML(a) : a;
  return new M(a, Mb);
}
var Qb = new M((t.trustedTypes && t.trustedTypes.emptyHTML) || "", Mb);
var Rb = (function (a) {
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
  a.innerHTML = Nb(Qb);
  return !b.parentElement;
});
var Sb = {
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
};
function Tb(a, b, c) {
  function d(g) {
    g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g);
  }
  for (var e = 1; e < c.length; e++) {
    var f = c[e];
    if (!ra(f) || (v(f) && 0 < f.nodeType)) d(f);
    else {
      a: {
        if (f && "number" == typeof f.length) {
          if (v(f)) {
            var k = "function" == typeof f.item || "string" == typeof f.item;
            break a;
          }
          if ("function" === typeof f) {
            k = "function" == typeof f.item;
            break a;
          }
        }
        k = !1;
      }
      Ua(k ? Va(f) : f, d);
    }
  }
}
function Ub(a) {
  y(a, "Node cannot be null or undefined.");
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Vb() {
  this.I = t.document || document;
}
m = Vb.prototype;
m.getElementsByTagName = function (a, b) {
  return (b || this.I).getElementsByTagName(String(a));
};
m.setProperties = function (a, b) {
  zb(b, function (c, d) {
    c && "object" == typeof c && c.G && (c = c.B());
    "style" == d
      ? (a.style.cssText = c)
      : "class" == d
      ? (a.className = c)
      : "for" == d
      ? (a.htmlFor = c)
      : Sb.hasOwnProperty(d)
      ? a.setAttribute(Sb[d], c)
      : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
      ? a.setAttribute(d, c)
      : (a[d] = c);
  });
};
m.createElement = function (a) {
  var b = this.I;
  a = String(a);
  "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
  return b.createElement(a);
};
m.createTextNode = function (a) {
  return this.I.createTextNode(String(a));
};
m.getWindow = function () {
  var a = this.I;
  return a.parentWindow || a.defaultView;
};
m.appendChild = function (a, b) {
  y(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
  a.appendChild(b);
};
m.append = function (a, b) {
  Tb(Ub(a), a, arguments);
};
m.canHaveChildren = function (a) {
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
m.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
m.getChildren = function (a) {
  return void 0 != a.children
    ? a.children
    : Array.prototype.filter.call(a.childNodes, function (b) {
        return 1 == b.nodeType;
      });
};
m.contains = function (a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
};
function Wb(a, b, c) {
  Array.isArray(c) && (c = c.join(" "));
  var d = Xb(b);
  "" === c || void 0 == c
    ? (Db ||
        ((c = {}),
        (Db =
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
      (c = Db),
      b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
    : a.setAttribute(d, c);
}
function Xb(a) {
  y(a, "ARIA attribute cannot be empty.");
  a: {
    for (b in Cb)
      if (Cb[b] == a) {
        var b = !0;
        break a;
      }
    b = !1;
  }
  y(b, "No such ARIA attribute " + a);
  return "aria-" + a;
}
function Yb() {
  this.V = this.V;
}
Yb.prototype.V = !1;
Yb.prototype.isDisposed = function () {
  return this.V;
};
function Zb(a) {
  Yb.call(this);
  this.ga = a || ya || (ya = new Vb());
  this.ma = {};
  this.la = {};
}
w(Zb, Yb);
var $b = [];
function ac(a) {
  y(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
  var b = "Y";
  if (a.Y && a.hasOwnProperty(b)) return a.Y;
  $b.push(a);
  var c = new a();
  a.Y = c;
  y(a.hasOwnProperty(b), "Could not instantiate singleton.");
  return c;
}
function bc() {
  this.ta = new Zb();
}
bc.prototype.speak = function (a, b) {
  var c = this.ta;
  b = b || "polite";
  var d;
  if ((d = c.ma[b])) d.removeAttribute(Xb("hidden"));
  else {
    var e = (d = c.ga.createElement("DIV"));
    var f = d;
    f = (Object.prototype.hasOwnProperty.call(f, sa) && f[sa]) || (f[sa] = ++ta);
    e.id = "goog-lr-" + f;
    d.style.position = "absolute";
    d.style.top = "-1000px";
    d.style.height = "1px";
    d.style.overflow = "hidden";
    Wb(d, "live", b);
    Wb(d, "atomic", "true");
    c.ga.I.body.appendChild(d);
    c.ma[b] = d;
  }
  e = (e = c.la[b]) && e === a ? a + "\u00a0" : a;
  a && (c.la[b] = e);
  y(null != d, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in d) d.textContent = e;
  else if (3 == d.nodeType) d.data = String(e);
  else if (d.firstChild && 3 == d.firstChild.nodeType) {
    for (; d.lastChild != d.firstChild; ) d.removeChild(y(d.lastChild));
    d.firstChild.data = String(e);
  } else {
    for (; (a = d.firstChild); ) d.removeChild(a);
    a = Ub(d);
    d.appendChild(a.createTextNode(String(e)));
  }
};
function cc(a) {
  if (a.C && "function" == typeof a.C) return a.C();
  if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
  if ("string" === typeof a) return a.split("");
  if (ra(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  b = [];
  c = 0;
  for (d in a) b[c++] = a[d];
  return b;
}
function dc(a) {
  if (a.O && "function" == typeof a.O) return a.O();
  if (!a.C || "function" != typeof a.C) {
    if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (ra(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return Bb(a);
    }
  }
}
function ec(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (ra(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
  else for (var d = dc(a), e = cc(a), f = e.length, k = 0; k < f; k++) b.call(c, e[k], d && d[k], a);
}
var fc = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function gc(a, b) {
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
}
function N(a) {
  this.u = this.F = this.v = "";
  this.H = null;
  this.A = this.s = "";
  this.m = this.za = !1;
  if (a instanceof N) {
    this.m = a.m;
    hc(this, a.v);
    var b = a.F;
    O(this);
    this.F = b;
    b = a.u;
    O(this);
    this.u = b;
    ic(this, a.H);
    b = a.s;
    O(this);
    this.s = b;
    jc(this, a.o.clone());
    a = a.A;
    O(this);
    this.A = a;
  } else
    a && (b = String(a).match(fc))
      ? ((this.m = !1),
        hc(this, b[1] || "", !0),
        (a = b[2] || ""),
        O(this),
        (this.F = P(a)),
        (a = b[3] || ""),
        O(this),
        (this.u = P(a, !0)),
        ic(this, b[4]),
        (a = b[5] || ""),
        O(this),
        (this.s = P(a, !0)),
        jc(this, b[6] || "", !0),
        (a = b[7] || ""),
        O(this),
        (this.A = P(a)))
      : ((this.m = !1), (this.o = new Q(null, this.m)));
}
m = N.prototype;
m.toString = function () {
  var a = [],
    b = this.v;
  b && a.push(R(b, kc, !0), ":");
  var c = this.u;
  if (c || "file" == b)
    a.push("//"),
      (b = this.F) && a.push(R(b, kc, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.H),
      null != c && a.push(":", String(c));
  if ((c = this.s)) this.u && "/" != c.charAt(0) && a.push("/"), a.push(R(c, "/" == c.charAt(0) ? lc : mc, !0));
  (c = this.o.toString()) && a.push("?", c);
  (c = this.A) && a.push("#", R(c, nc));
  return a.join("");
};
m.resolve = function (a) {
  var b = this.clone(),
    c = !!a.v;
  c ? hc(b, a.v) : (c = !!a.F);
  if (c) {
    var d = a.F;
    O(b);
    b.F = d;
  } else c = !!a.u;
  c ? ((d = a.u), O(b), (b.u = d)) : (c = null != a.H);
  d = a.s;
  if (c) ic(b, a.H);
  else if ((c = !!a.s)) {
    if ("/" != d.charAt(0))
      if (this.u && !this.s) d = "/" + d;
      else {
        var e = b.s.lastIndexOf("/");
        -1 != e && (d = b.s.slice(0, e + 1) + d);
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
  c ? (O(b), (b.s = d)) : (c = "" !== a.o.toString());
  c ? jc(b, a.o.clone()) : (c = !!a.A);
  c && ((a = a.A), O(b), (b.A = a));
  return b;
};
m.clone = function () {
  return new N(this);
};
function hc(a, b, c) {
  O(a);
  a.v = c ? P(b, !0) : b;
  a.v && (a.v = a.v.replace(/:$/, ""));
}
function ic(a, b) {
  O(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.H = b;
  } else a.H = null;
}
function jc(a, b, c) {
  O(a);
  b instanceof Q ? ((a.o = b), a.o.da(a.m)) : (c || (b = R(b, oc)), (a.o = new Q(b, a.m)));
}
m.getQuery = function () {
  return this.o.toString();
};
m.removeParameter = function (a) {
  O(this);
  this.o.remove(a);
  return this;
};
function O(a) {
  if (a.za) throw Error("Tried to modify a read-only Uri");
}
m.da = function (a) {
  this.m = a;
  this.o && this.o.da(a);
};
function P(a, b) {
  return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function R(a, b, c) {
  return "string" === typeof a ? ((a = encodeURI(a).replace(b, pc)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function pc(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var kc = /[#\/\?@]/g,
  mc = /[#\?:]/g,
  lc = /[#\?]/g,
  oc = /[#\?@]/g,
  nc = /#/g;
function Q(a, b) {
  this.i = this.g = null;
  this.l = a || null;
  this.m = !!b;
}
function S(a) {
  a.g ||
    ((a.g = new Map()),
    (a.i = 0),
    a.l &&
      gc(a.l, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
}
m = Q.prototype;
m.add = function (a, b) {
  S(this);
  this.l = null;
  a = T(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, (c = []));
  c.push(b);
  this.i = A(this.i) + 1;
  return this;
};
m.remove = function (a) {
  S(this);
  a = T(this, a);
  return this.g.has(a) ? ((this.l = null), (this.i = A(this.i) - this.g.get(a).length), this.g.delete(a)) : !1;
};
m.clear = function () {
  this.g = this.l = null;
  this.i = 0;
};
function qc(a, b) {
  S(a);
  b = T(a, b);
  return a.g.has(b);
}
m.forEach = function (a, b) {
  S(this);
  this.g.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
m.O = function () {
  S(this);
  for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
m.C = function (a) {
  S(this);
  var b = [];
  if ("string" === typeof a) qc(this, a) && (b = b.concat(this.g.get(T(this, a))));
  else {
    a = Array.from(this.g.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
m.set = function (a, b) {
  S(this);
  this.l = null;
  a = T(this, a);
  qc(this, a) && (this.i = A(this.i) - this.g.get(a).length);
  this.g.set(a, [b]);
  this.i = A(this.i) + 1;
  return this;
};
m.get = function (a, b) {
  if (!a) return b;
  a = this.C(a);
  return 0 < a.length ? String(a[0]) : b;
};
m.toString = function () {
  if (this.l) return this.l;
  if (!this.g) return "";
  for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.C(d);
    for (var f = 0; f < d.length; f++) {
      var k = e;
      "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
      a.push(k);
    }
  }
  return (this.l = a.join("&"));
};
m.clone = function () {
  var a = new Q();
  a.l = this.l;
  this.g && ((a.g = new Map(this.g)), (a.i = this.i));
  return a;
};
function T(a, b) {
  b = String(b);
  a.m && (b = b.toLowerCase());
  return b;
}
m.da = function (a) {
  a &&
    !this.m &&
    (S(this),
    (this.l = null),
    this.g.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c), this.remove(d), 0 < b.length && ((this.l = null), this.g.set(T(this, d), Va(b)), (this.i = A(this.i) + b.length)));
    }, this));
  this.m = a;
};
m.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    ec(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
function rc() {
  this.ia = {};
  sc(this, t._notes_flag_initialData || {});
  tc(this);
}
function sc(a, b) {
  zb(yb, function (c) {
    void 0 !== b[c] && (a.ia[c] = b[c]);
  });
}
function tc(a) {
  var b = {};
  new N(self.location.href).o.forEach(function (c, d) {
    b[d] = c;
  });
  sc(a, b);
}
Object.values({
  UNKNOWN: "unknown",
  jb: "default",
  Sb: "groceries",
  Nb: "food",
  vc: "music",
  Nc: "recipes",
  Ac: "notes",
  Jc: "places",
  md: "travel",
  xd: "video",
  Wa: "celebration"
}).filter(function (a) {
  return "unknown" !== a;
});
var uc =
  Object.freeze ||
  function (a) {
    return a;
  };
function vc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = !1;
}
vc.prototype.stopPropagation = function () {};
vc.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var wc = (function () {
  if (!t.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    b = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      }
    });
  try {
    var c = function () {};
    t.addEventListener("test", c, b);
    t.removeEventListener("test", c, b);
  } catch (d) {}
  return a;
})();
function U(a, b) {
  vc.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.J = null;
  a && this.init(a, b);
}
w(U, vc);
var xc = uc({ 2: "touch", 3: "pen", 4: "mouse" });
U.prototype.init = function (a, b) {
  var c = (this.type = a.type),
    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (Ya) {
      a: {
        try {
          Wa(b.nodeName);
          var e = !0;
          break a;
        } catch (f) {}
        e = !1;
      }
      e || (b = null);
    }
  } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
  this.relatedTarget = b;
  d
    ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
      (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
      (this.screenX = d.screenX || 0),
      (this.screenY = d.screenY || 0))
    : ((this.offsetX = Za || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = Za || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.pointerType = "string" === typeof a.pointerType ? a.pointerType : xc[a.pointerType] || "";
  this.state = a.state;
  this.timeStamp = a.timeStamp;
  this.J = a;
  a.defaultPrevented && U.S.preventDefault.call(this);
};
U.prototype.stopPropagation = function () {
  U.S.stopPropagation.call(this);
  this.J.stopPropagation ? this.J.stopPropagation() : (this.J.cancelBubble = !0);
};
U.prototype.preventDefault = function () {
  U.S.preventDefault.call(this);
  var a = this.J;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var yc = "closure_listenable_" + ((1e6 * Math.random()) | 0);
var zc = 0;
function Ac(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.W = e;
  this.key = ++zc;
  this.removed = this.U = !1;
}
function Bc(a) {
  a.removed = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.W = null;
}
function Cc(a) {
  this.src = a;
  this.j = {};
  this.L = 0;
}
m = Cc.prototype;
m.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.j[f];
  a || ((a = this.j[f] = []), this.L++);
  var k = Dc(a, b, d, e);
  -1 < k ? ((b = a[k]), c || (b.U = !1)) : ((b = new Ac(b, this.src, f, !!d, e)), (b.U = c), a.push(b));
  return b;
};
m.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.j)) return !1;
  var e = this.j[a];
  b = Dc(e, b, c, d);
  return -1 < b
    ? (Bc(e[b]), y(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.L--), !0)
    : !1;
};
function Ec(a, b) {
  var c = b.type;
  if (c in a.j) {
    var d = a.j[c],
      e = Ta(d, b),
      f;
    if ((f = 0 <= e)) y(null != d.length), Array.prototype.splice.call(d, e, 1);
    f && (Bc(b), 0 == a.j[c].length && (delete a.j[c], a.L--));
  }
}
m.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.j)
    if (!a || c == a) {
      for (var d = this.j[c], e = 0; e < d.length; e++) ++b, Bc(d[e]);
      delete this.j[c];
      this.L--;
    }
  return b;
};
m.wa = function (a, b, c, d) {
  a = this.j[a.toString()];
  var e = -1;
  a && (e = Dc(a, b, c, d));
  return -1 < e ? a[e] : null;
};
m.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return Ab(this.j, function (f) {
    for (var k = 0; k < f.length; ++k) if (!((c && f[k].type != d) || (e && f[k].capture != b))) return !0;
    return !1;
  });
};
function Dc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.W == d) return e;
  }
  return -1;
}
var Fc = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Gc = {},
  Hc = 0;
function Ic(a, b, c, d, e) {
  if (d && d.once) Jc(a, b, c, d, e);
  else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Ic(a, b[f], c, d, e);
  else (c = Kc(c)), a && a[yc] ? a.listen(b, c, v(d) ? !!d.capture : !!d, e) : Lc(a, b, c, !1, d, e);
}
function Lc(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var k = v(e) ? !!e.capture : !!e,
    g = Mc(a);
  g || (a[Fc] = g = new Cc(a));
  c = g.add(b, c, d, k, f);
  if (!c.proxy) {
    d = Nc();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) wc || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Oc(b.toString()), d);
    else if (a.addListener && a.removeListener) y("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Hc++;
  }
}
function Nc() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = Pc;
  return a;
}
function Jc(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Jc(a, b[f], c, d, e);
  else (c = Kc(c)), a && a[yc] ? a.ha.add(String(b), c, !0, v(d) ? !!d.capture : !!d, e) : Lc(a, b, c, !0, d, e);
}
function Qc(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Qc(a, b[f], c, d, e);
  else
    (d = v(d) ? !!d.capture : !!d),
      (c = Kc(c)),
      a && a[yc] ? a.ha.remove(String(b), c, d, e) : a && (a = Mc(a)) && (b = a.wa(b, c, d, e)) && Rc(b);
}
function Rc(a) {
  if ("number" !== typeof a && a && !a.removed) {
    var b = a.src;
    if (b && b[yc]) Ec(b.ha, a);
    else {
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Oc(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      Hc--;
      (c = Mc(b)) ? (Ec(c, a), 0 == c.L && ((c.src = null), (b[Fc] = null))) : Bc(a);
    }
  }
}
function Oc(a) {
  return a in Gc ? Gc[a] : (Gc[a] = "on" + a);
}
function Pc(a, b) {
  if (a.removed) a = !0;
  else {
    b = new U(b, this);
    var c = a.listener,
      d = a.W || a.src;
    a.U && Rc(a);
    a = c.call(d, b);
  }
  return a;
}
function Mc(a) {
  a = a[Fc];
  return a instanceof Cc ? a : null;
}
var Sc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Kc(a) {
  y(a, "Listener can not be null.");
  if ("function" === typeof a) return a;
  y(a.handleEvent, "An object listener must have handleEvent method.");
  a[Sc] ||
    (a[Sc] = function (b) {
      return a.handleEvent(b);
    });
  return a[Sc];
}
function Tc() {}
function Uc() {
  this.T = [];
  new DataView(new ArrayBuffer(8));
}
oa(Uc, Tc);
new Uc();
new I();
(function (a, b) {
  if (ab && !b) return t.atob(a);
  var c = "";
  bb(a, function (d) {
    c += String.fromCharCode(d);
  });
  return c;
})("bGFiZWxz"); /*

 SPDX-License-Identifier: Apache-2.0
*/
var Vc = fa([""]),
  Wc = q(["\x00"], ["\\0"]),
  Xc = q(["\n"], ["\\n"]),
  Yc = q(["\x00"], ["\\u0000"]),
  Zc = fa([""]),
  $c = q(["\x00"], ["\\0"]),
  ad = q(["\n"], ["\\n"]),
  bd = q(["\x00"], ["\\u0000"]);
function cd(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!dd && a === a.raw) ||
    !((dd && !ed) || V(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function V(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function fd(a) {
  return -1 === a.toString().indexOf("`");
}
var dd =
    fd(function (a) {
      return a(Vc);
    }) ||
    fd(function (a) {
      return a(Wc);
    }) ||
    fd(function (a) {
      return a(Xc);
    }) ||
    fd(function (a) {
      return a(Yc);
    }),
  ed = V(Zc) && V($c) && V(ad) && V(bd);
function gd(a, b) {
  this.name = a;
  this.value = b;
}
gd.prototype.toString = function () {
  return this.name;
};
var hd = new gd("OFF", Infinity),
  id = new gd("WARNING", 900),
  jd = new gd("CONFIG", 700);
function kd() {
  this.N = 0;
  this.clear();
}
var ld;
kd.prototype.clear = function () {
  this.T = Array(this.N);
  this.fa = -1;
  this.ka = !1;
};
function md(a, b, c) {
  this.reset(a || hd, b, c, void 0, void 0);
}
md.prototype.reset = function (a, b) {
  this.Da = b;
};
md.prototype.getMessage = function () {
  return this.Da;
};
function nd(a, b) {
  this.level = null;
  this.ya = [];
  this.parent = (void 0 === b ? null : b) || null;
  this.children = [];
  this.Ca = {
    getName: function () {
      return a;
    }
  };
}
function od(a) {
  if (a.level) return a.level;
  if (a.parent) return od(a.parent);
  z("Root logger has no level set.");
  return hd;
}
nd.prototype.publish = function (a) {
  for (var b = this; b; )
    b.ya.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
function pd() {
  this.entries = {};
  var a = new nd("");
  a.level = jd;
  this.entries[""] = a;
}
var qd;
function rd(a, b) {
  var c = a.entries[b];
  if (c) return c;
  c = rd(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
  var d = new nd(b, c);
  a.entries[b] = d;
  c.children.push(d);
  return d;
}
function sd() {
  qd || (qd = new pd());
  return qd;
}
function td(a) {
  this.Aa = a;
}
function W(a) {
  return new td(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var ud = [
    W("data"),
    W("http"),
    W("https"),
    W("mailto"),
    W("ftp"),
    new td(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    })
  ],
  vd = "function" === typeof URL,
  wd = [];
function xd() {}
yd(function (a) {
  var b;
  if ((b = rd(sd(), "safevalues").Ca)) {
    var c = "A URL with content '" + a + "' was sanitized away.",
      d = id;
    if ((a = b))
      if ((a = b && d)) {
        a = d.value;
        var e = b ? od(rd(sd(), b.getName())) : hd;
        a = a >= e.value;
      }
    if (a) {
      d = d || hd;
      a = rd(sd(), b.getName());
      "function" === typeof c && (c = c());
      ld || (ld = new kd());
      e = ld;
      b = b.getName();
      if (0 < e.N) {
        var f = (e.fa + 1) % e.N;
        e.fa = f;
        e.ka ? ((e = e.T[f]), e.reset(d, c, b), (b = e)) : ((e.ka = f == e.N - 1), (b = e.T[f] = new md(d, c, b)));
      } else b = new md(d, c, b);
      a.publish(b);
    }
  }
});
function yd(a) {
  -1 === wd.indexOf(a) && wd.push(a);
  xd = function (b) {
    wd.forEach(function (c) {
      c(b);
    });
  };
}
Object.freeze(
  "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
    " "
  )
);
var zd = fa(["http://goo.gl/forms/r40gTO4BTb"]),
  Ad = fa(["https://keep.google.com"]);
(function (a) {
  var b = pa.apply(1, arguments);
  cd(a, b.length);
  var c = a[0];
  var d = 0 === b.length;
  var e = c.search(/[:/?#]/);
  0 > e ||
    (":" !== c.charAt(e) ? (d = !0) : ((d = c.substring(0, e).toLowerCase()), (d = /^[a-z][a-z\d+.-]*$/.test(d) && "javascript" !== d)));
  if (!d) throw Error("Trying to interpolate with unsupported prefix: " + c);
  c = [c];
  for (d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
  return new K(c.join(""), L);
})(zd);
var X = (function (a) {
    var b = pa.apply(1, arguments);
    cd(a, b.length);
    if (0 === b.length) return Hb(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf("//") + 2;
      var e = c.indexOf("/", d);
      if (e <= d)
        throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
      d = c.substring(d, e);
      if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
      if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
      d = !0;
    } else d = !1;
    if (!d)
      if (/^\//.test(c))
        if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1])) d = !0;
        else throw Error("The path start in the url is invalid.");
      else d = !1;
    if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
      if (/^about:blank/.test(c)) {
        if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
        d = !0;
      } else d = !1;
    if (!d) throw Error("Trying to interpolate expressions in an unsupported url format.");
    c = a[0];
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return Hb(c);
  })(Ad).toString(),
  Bd = void 0;
Bd = void 0 === Bd ? ud : Bd;
var Cd;
a: {
  var Dd = Bd;
  Dd = void 0 === Dd ? ud : Dd;
  if (X instanceof K) Cd = X;
  else {
    for (var Ed = 0; Ed < Dd.length; ++Ed) {
      var Fd = Dd[Ed];
      if (Fd instanceof td && Fd.Aa(X)) {
        Cd = new K(X, L);
        break a;
      }
    }
    Cd = void 0;
  }
}
void 0 === Cd && xd(X.toString());
var Gd = { Bd: !0 };
function Y() {
  throw Error("Do not instantiate directly");
}
Y.prototype.ua = null;
Y.prototype.getContent = function () {
  return this.content;
};
Y.prototype.toString = function () {
  return this.content;
};
Y.prototype.ra = function () {
  if (this.va !== Gd) throw Error("Sanitized content was not of kind HTML.");
  var a = this.toString();
  var b = { justification: "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value." };
  b = "string" === typeof b ? b : b.justification;
  if ("string" !== typeof b || "" === b.trim())
    throw Error(
      "Calls to uncheckedconversion functions must go through security review. A justification must be provided to capture what security assumptions are being made. See go/unchecked-conversions"
    );
  return Pb(a);
};
function Hd() {
  Y.call(this);
}
w(Hd, Y);
Hd.prototype.va = Gd;
var Id = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.ua = d);
      return c;
    };
  })(Hd),
  Jd = {}; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Kd = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
  Ld = {};
var Md = {
  Ob: 0,
  Yb: 1,
  pb: 2,
  qb: 3,
  0: "FORMATTED_HTML_CONTENT",
  1: "HTML_FORMATTED_CONTENT",
  2: "EMBEDDED_INTERNAL_CONTENT",
  3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
};
function Nd(a, b) {
  b = Error.call(this, a + " cannot be used with intent " + Md[b]);
  this.message = b.message;
  "stack" in b && (this.stack = b.stack);
  this.type = a;
  this.name = "TypeCannotBeUsedWithIntentError";
}
oa(Nd, Error);
function Od() {
  var a = ac(rc).ia.n_ecmv3m;
  this.R = !!a && "false" !== a;
  this.h = null;
  this.aa = !1;
  this.ea = "";
  this.R && (this.M = {});
  this.R || (this.X(), Ic(document, "mousedown", this.ja, void 0, this), (a = {}), (a.imageUrl = Pd()), Z(this, "pageScrape", a));
  this.na = wa(this.xa, this);
  chrome.runtime.onMessage.addListener(this.na);
}
function Qd(a) {
  a.h = null;
  a.R || Qc(document, "mousedown", a.ja, void 0, a);
  chrome.runtime.onMessage.removeListener(a.na);
  a.aa = !0;
}
function Z(a, b, c) {
  if (!a.aa)
    try {
      chrome.runtime.sendMessage(chrome.runtime.id, { type: b, value: c }, void 0);
    } catch (d) {
      Qd(a);
    }
}
function Pd() {
  for (var a = "", b = document.getElementsByTagName("META"), c = 0, d; (d = b[c]); c++)
    if ("og:image" == d.getAttribute("property")) {
      a = d.getAttribute("content");
      break;
    }
  if (!a) {
    b = 0;
    c = document.getElementsByTagName("IMG");
    d = 0;
    for (var e; (e = c[d]); d++) {
      var f = e.naturalWidth || e.width,
        k = e.naturalHeight || e.height;
      if (128 <= k && 128 <= f && k * f > b) {
        b = k * f;
        var g = e.src;
      }
    }
    g && (a = g);
  }
  a && ((a = a instanceof N ? a.clone() : new N(a)), a.v || hc(a, "http"), (a = a.toString()));
  return a;
}
Od.prototype.xa = function (a, b, c) {
  if (v(a) && !this.aa)
    switch (a.type) {
      case "appHeightChange":
        this.h && (this.h.style.height = a.value);
        break;
      case "dispose":
        Qd(this);
        break;
      case "finishHide":
        this.h && Rd(this, !1);
        break;
      case "getInitInfo":
        c(this.M);
        break;
      case "getSelectedText":
        c(window.getSelection().toString());
        break;
      case "removeIframe":
        this.h.parentNode.removeChild(this.h), Qd(this);
      case "selectedTextRequest":
        c(window.getSelection().toString());
        break;
      case "setInitInfo":
        this.M = a.value;
        this.M.selectedText = window.getSelection().toString();
        this.M.embedInfo.imageUrl = Pd();
        this.X();
        break;
      case "speakMessage":
        ac(bc).speak(a.value);
        break;
      case "show":
        this.h && Rd(this, !0);
        break;
      case "toggleVisibility":
        (a = "none" == this.h.style.display),
          this.h &&
            ("none" == this.h.style.display
              ? (Rd(this, !0), this.h.contentWindow.focus(), Z(this, "show"))
              : (Z(this, "startHide"), Z(this, "impression", 9204))),
          c(a);
    }
};
Od.prototype.X = function () {
  if ("interactive" != document.readyState && "complete" != document.readyState) Ic(document, "DOMContentLoaded", this.X, void 0, this);
  else {
    if (this.R) {
      var a = document.getElementById("keep-popup-frame");
      a && a.parentNode && a.parentNode.removeChild(a);
    }
    var b = Jd["notes.browseraction.soy.injects.injectedIframe"]
      ? Jd["notes.browseraction.soy.injects.injectedIframe"](Ld, void 0)
      : Id(
          '<iframe frameborder="0" style=" height: 438px; margin: 0px; padding: 0px; position: fixed; right: 5px; top: 5px; width: 370px; z-index: 2147483647;"></iframe>'
        );
    a = ya || (ya = new Vb());
    if (b && b.Ea) a = b.Ea();
    else {
      a = a.createElement("DIV");
      b: if (v(b)) {
        if (b.ra) {
          var c = b.ra();
          if (c instanceof M) {
            b = c;
            break b;
          }
        }
        z("Soy template output is unsafe for use as HTML: " + b);
        b = Ob("zSoyz");
      } else b = Ob(String(b));
      c = b.B();
      var d = c.match(Kd);
      y(
        !d,
        "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",
        d && d[0],
        c
      );
      c = a;
      if (Rb()) for (; c.lastChild; ) c.removeChild(c.lastChild);
      c.innerHTML = Nb(b);
    }
    1 == a.childNodes.length && ((b = a.firstChild), 1 == b.nodeType && (a = b));
    if (
      !v(a) ||
      !v(a) ||
      !v(a) ||
      1 !== a.nodeType ||
      (a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) ||
      a.tagName.toUpperCase() !== "IFRAME".toString()
    ) {
      b = "IFRAME".toString() + "; got: ";
      if (v(a))
        try {
          var e = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (k) {
          e = "<object could not be stringified>";
        }
      else e = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      z("Argument is not an HTML Element with tag name " + (b + e));
    }
    this.h = a;
    this.ea = this.h.style.cssText;
    this.h.id = "keep-popup-frame";
    e = this.h;
    a = chrome.runtime.getURL("index.html");
    e.removeAttribute("srcdoc");
    if (a instanceof J) throw new Nd("TrustedResourceUrl", 3);
    b =
      "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(
        " "
      );
    e.setAttribute("sandbox", "");
    for (c = 0; c < b.length; c++) (e.sandbox.supports && !e.sandbox.supports(b[c])) || e.sandbox.add(b[c]);
    if (a instanceof K)
      if (a instanceof K && a.constructor === K) var f = a.ca;
      else z("expected object of type SafeUrl, got '" + a + "' of type " + u(a)), (f = "type_error:SafeUrl");
    else {
      b: if (vd) {
        try {
          f = new URL(a);
        } catch (k) {
          f = "https:";
          break b;
        }
        f = f.protocol;
      } else
        c: {
          f = document.createElement("a");
          try {
            f.href = a;
          } catch (k) {
            f = void 0;
            break c;
          }
          f = f.protocol;
          f = ":" === f || "" === f ? "https:" : f;
        }
      "javascript:" === f ? (xd(a), (f = void 0)) : (f = a);
    }
    void 0 !== f && (e.src = f);
    this.h.allow = "clipboard-write";
    document.body.appendChild(this.h);
    Rd(this, !0);
    this.h.contentWindow.focus();
  }
};
function Rd(a, b) {
  a.h.style.cssText = a.ea + " display: " + (b ? "block !important;" : "none");
}
Od.prototype.ja = function (a) {
  0 == a.button && this.h && "none" != this.h.style.display && (Z(this, "startHide"), Z(this, "impression", 9203));
};
new Od();
