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
    this.ta = f;
    ba(this, "description", { configurable: !0, writable: !0, value: k });
  }
  if (a) return a;
  c.prototype.toString = function () {
    return this.ta;
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
  a.Cd = function (d, e, f) {
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
  "string" !== typeof a && Aa("Expected string but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
}
function Ca(a, b, c) {
  Array.isArray(a) || Aa("Expected array but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
}
var Da = /&/g,
  Ea = /</g,
  Fa = />/g,
  Ga = /"/g,
  Ha = /'/g,
  Ia = /\x00/g,
  Ja = /[\x00&<>"']/;
var Ka, La;
a: {
  for (var Ma = ["CLOSURE_FLAGS"], Na = t, Oa = 0; Oa < Ma.length; Oa++)
    if (((Na = Na[Ma[Oa]]), null == Na)) {
      La = null;
      break a;
    }
  La = Na;
}
var Pa = La && La[610401301];
Ka = null != Pa ? Pa : !1;
function Qa() {
  var a = t.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var B,
  Ra = t.navigator;
B = Ra ? Ra.userAgentData || null : null;
function Sa(a) {
  return Ka
    ? B
      ? B.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function C(a) {
  return -1 != Qa().indexOf(a);
}
function D() {
  return Ka ? !!B && 0 < B.brands.length : !1;
}
function Ta() {
  return D() ? Sa("Chromium") : ((C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge"))) || C("Silk");
}
var Ua = Array.prototype.indexOf
    ? function (a, b) {
        y(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Va = Array.prototype.forEach
    ? function (a, b) {
        y(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
function Wa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function Xa(a) {
  Xa[" "](a);
  return a;
}
Xa[" "] = function () {};
var Ya = D() ? !1 : C("Trident") || C("MSIE"),
  Za = C("Gecko") && !(-1 != Qa().toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
  $a = -1 != Qa().toLowerCase().indexOf("webkit") && !C("Edge");
!C("Android") || Ta();
Ta();
var ab =
  C("Safari") &&
  !(
    Ta() ||
    (D() ? 0 : C("Coast")) ||
    (D() ? 0 : C("Opera")) ||
    (D() ? 0 : C("Edge")) ||
    (D() ? Sa("Microsoft Edge") : C("Edg/")) ||
    (D() ? Sa("Opera") : C("OPR")) ||
    C("Firefox") ||
    C("FxiOS") ||
    C("Silk") ||
    C("Android")
  ) &&
  !((C("iPhone") && !C("iPod") && !C("iPad")) || C("iPad") || C("iPod"));
var F = null,
  bb = Za || $a || (!ab && !Ya && "function" == typeof t.atob);
function cb(a, b) {
  function c(h) {
    for (; d < a.length; ) {
      var l = a.charAt(d++),
        n = F[l];
      if (null != n) return n;
      if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
    }
    return h;
  }
  db();
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
function db() {
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
var eb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
  fb = Math,
  gb = fb.round,
  hb = Math,
  ib = hb.log2,
  jb = Math.max,
  kb = jb.apply,
  lb = Object.values({
    lc: 1,
    jc: 2,
    ic: 4,
    Hc: 8,
    Gc: 16,
    yc: 32,
    hb: 64,
    ld: 128,
    Xb: 256,
    Wb: 512,
    kc: 1024,
    Rb: 2048,
    ad: 4096,
    Sb: 8192
  }),
  mb;
if (lb instanceof Array) mb = lb;
else {
  for (var nb = ha(lb), ob, pb = []; !(ob = nb.next()).done; ) pb.push(ob.value);
  mb = pb;
}
y(13 === gb.call(fb, ib.call(hb, kb.call(jb, Math, mb))));
var qb = Object.getOwnPropertyDescriptor(Array.prototype, "Da");
Object.defineProperties(Array.prototype, {
  Da: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = rb(this),
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
      var d = sb(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return qb ? qb.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var rb = eb
  ? function (a) {
      Ca(a, "state is only maintained on arrays.");
      return a[eb] | 0;
    }
  : function (a) {
      Ca(a, "state is only maintained on arrays.");
      return a.Z | 0;
    };
function sb(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var tb = [];
(eb
  ? function (a, b) {
      Ca(a, "state is only maintained on arrays.");
      y((b & 16777215) == b);
      a[eb] = b;
    }
  : function (a, b) {
      Ca(a, "state is only maintained on arrays.");
      y((b & 16777215) == b);
      void 0 !== a.Z ? (a.Z = b) : Object.defineProperties(a, { Z: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
    })(tb, 55);
Object.freeze(tb);
function ub() {
  throw Error("please construct maps as mutable then call toImmutable");
}
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var vb = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    wb = {};
  Object.defineProperties(ub, ((wb[Symbol.hasInstance] = { value: vb, configurable: !1, writable: !1, enumerable: !1 }), wb));
  y(ub[Symbol.hasInstance] === vb, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var G = xb;
  new Proxy(
    {},
    {
      getPrototypeOf: G,
      setPrototypeOf: G,
      isExtensible: G,
      preventExtensions: G,
      getOwnPropertyDescriptor: G,
      defineProperty: G,
      has: G,
      get: G,
      set: G,
      deleteProperty: G,
      apply: G,
      construct: G
    }
  );
}
function xb() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function yb() {}
(function () {
  var a = t.jspbGetTypeName;
  t.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : yb;
})();
var zb = {
  Ha: "n_amt",
  Ja: "n_afoiu",
  Ka: "n_age",
  La: "n_k",
  Ma: "n_ars",
  Na: "n_s",
  Oa: "n_ss",
  Pa: "n_ats",
  Qa: "n_atas",
  Ta: "n_bi",
  Ua: "n_bl",
  Wa: "n_cajct",
  Xa: "n_cajstm",
  ab: "n_ccd",
  bb: "n_cc",
  cb: "n_c",
  eb: "n_cp",
  fb: "n_csbs",
  kb: "n_dt",
  nb: "n_dlis",
  ob: "n_deau",
  pb: "n_detl",
  tb: "n_eau",
  ub: "n_ecs",
  vb: "n_ecmv3m",
  wb: "n_ecil",
  xb: "n_ecpde",
  yb: "n_edmp",
  zb: "n_edtt",
  Ab: "n_edlh",
  Bb: "n_efab",
  Cb: "n_eh",
  Db: "n_eil",
  Eb: "n_eliw",
  Fb: "n_eml",
  Gb: "n_emv2dm",
  Hb: "n_eod",
  Ib: "n_eoros",
  Jb: "n_ep",
  Kb: "n_eqwv",
  Mb: "n_ei",
  Nb: "n_fpae",
  Yb: "n_hak",
  bc: "n_imb",
  cc: "n_imp",
  fc: "n_iup",
  ec: "n_iltrup",
  mc: "n_j",
  nc: "n_kud",
  rc: "n_lcu",
  tc: "n_mpak",
  uc: "n_mpau",
  Bc: "n_nmri",
  zc: "n_nib",
  Ac: "n_nmb",
  Dc: "n_npd",
  Ec: "n_npv",
  Fc: "n_oe",
  Kc: "n_pau",
  Qc: "n_rs",
  Sc: "n_rau",
  Wc: "n_ses",
  Yc: "n_scp",
  bd: "n_sit",
  cd: "n_t",
  gd: "n_ton",
  dd: "n_tak",
  fd: "n_tipe",
  ed: "n_tbti",
  hd: "n_taau",
  jd: "n_tcu",
  kd: "n_tcur",
  nd: "n_tms",
  md: "n_the",
  pd: "n_ur",
  qd: "n_uptc",
  dc: "n_ugat",
  ud: "n_uo",
  td: "n_ui",
  rd: "n_ue",
  sd: "n_ugs",
  Ad: "n_wfp",
  Bd: "n_wcv"
};
function Ab(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a);
}
function Bb(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function Cb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b;
}
function H() {
  var a = { DEFAULT: 0, DARK: 1 };
  this.F = {};
  this.P = {};
  if (a) for (var b in a) this.put(b, a[b]);
}
H.prototype.put = function (a, b) {
  y(void 0 === this.F[a]);
  y(void 0 === this.P[b]);
  this.F[a] = b;
  this.P[b] = a;
};
H.prototype.get = function (a) {
  return this.F[a];
};
H.prototype.O = function () {
  return Cb(this.F);
};
H.prototype.remove = function (a) {
  if (void 0 !== this.F[a]) {
    var b = y(this.F[a]);
    y(void 0 !== this.P[b]);
    delete this.F[a];
    delete this.P[b];
  }
};
var Db = {
  Ia: "activedescendant",
  Ra: "atomic",
  Sa: "autocomplete",
  Va: "busy",
  Za: "checked",
  gb: "colindex",
  ib: "controls",
  jb: "current",
  mb: "describedby",
  DISABLED: "disabled",
  qb: "dropeffect",
  Lb: "expanded",
  Ob: "flowto",
  Tb: "grabbed",
  Vb: "haspopup",
  Zb: "hidden",
  hc: "invalid",
  oc: "label",
  pc: "labelledby",
  qc: "level",
  sc: "live",
  vc: "multiline",
  wc: "multiselectable",
  Ic: "orientation",
  Jc: "owns",
  Mc: "posinset",
  Nc: "pressed",
  Oc: "readonly",
  Rc: "relevant",
  Tc: "required",
  Uc: "rowindex",
  Vc: "selected",
  Xc: "setsize",
  Zc: "sort",
  vd: "valuemax",
  wd: "valuemin",
  xd: "valuenow",
  yd: "valuetext"
};
var Eb;
try {
  new self.OffscreenCanvas(0, 0).getContext("2d");
} catch (a) {}
var Fb;
function Gb() {
  if (void 0 === Fb) {
    var a = null,
      b = t.trustedTypes;
    if (b && b.createPolicy)
      try {
        a = b.createPolicy("goog#html", { createHTML: xa, createScript: xa, createScriptURL: xa });
      } catch (c) {
        t.console && t.console.error(c.message);
      }
    Fb = a;
  }
  return Fb;
}
function I(a, b) {
  this.ea = (a === Hb && b) || "";
  this.ua = Ib;
}
I.prototype.D = !0;
I.prototype.A = function () {
  return this.ea;
};
I.prototype.toString = function () {
  return this.ea;
};
function Jb(a) {
  if (a instanceof I && a.constructor === I && a.ua === Ib) return a.ea;
  z("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
}
var Ib = {},
  Hb = {};
function J(a) {
  if (Kb !== Kb) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.ra = a;
}
J.prototype.toString = function () {
  return this.ra + "";
};
J.prototype.D = !0;
J.prototype.A = function () {
  return this.ra.toString();
};
var Kb = {};
function Lb(a) {
  var b = Gb();
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
K.prototype.D = !0;
K.prototype.A = function () {
  return this.ca.toString();
};
var L = {};
new K("about:invalid#zClosurez", L);
new K("about:blank", L);
var Mb = {};
function Nb() {
  if (Mb !== Mb) throw Error("SafeStyle is not meant to be built directly");
  this.qa = "";
  this.D = !0;
}
Nb.prototype.A = function () {
  return this.qa;
};
Nb.prototype.toString = function () {
  return this.qa.toString();
};
new Nb();
var Ob = {};
function Pb() {
  if (Ob !== Ob) throw Error("SafeStyleSheet is not meant to be built directly");
  this.pa = "";
  this.D = !0;
}
Pb.prototype.toString = function () {
  return this.pa.toString();
};
Pb.prototype.A = function () {
  return this.pa;
};
new Pb();
var Qb = {};
function M(a, b) {
  if (b !== Qb) throw Error("SafeHtml is not meant to be built directly");
  this.ba = a;
  this.D = !0;
}
M.prototype.A = function () {
  return this.ba.toString();
};
M.prototype.toString = function () {
  return this.ba.toString();
};
function Rb(a) {
  if (a instanceof M && a.constructor === M) return a.ba;
  z("expected object of type SafeHtml, got '" + a + "' of type " + u(a));
  return "type_error:SafeHtml";
}
function Sb(a) {
  a instanceof M ||
    ((a = "object" == typeof a && a.D ? a.A() : String(a)),
    Ja.test(a) &&
      (-1 != a.indexOf("&") && (a = a.replace(Da, "&amp;")),
      -1 != a.indexOf("<") && (a = a.replace(Ea, "&lt;")),
      -1 != a.indexOf(">") && (a = a.replace(Fa, "&gt;")),
      -1 != a.indexOf('"') && (a = a.replace(Ga, "&quot;")),
      -1 != a.indexOf("'") && (a = a.replace(Ha, "&#39;")),
      -1 != a.indexOf("\x00") && (a = a.replace(Ia, "&#0;"))),
    (a = Tb(a)));
  return a;
}
function Tb(a) {
  var b = Gb();
  a = b ? b.createHTML(a) : a;
  return new M(a, Qb);
}
var Ub = new M((t.trustedTypes && t.trustedTypes.emptyHTML) || "", Qb);
var Vb = (function (a) {
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
  a.innerHTML = Rb(Ub);
  return !b.parentElement;
});
var Wb = {
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
function Xb(a, b, c) {
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
      Va(k ? Wa(f) : f, d);
    }
  }
}
function Yb(a) {
  y(a, "Node cannot be null or undefined.");
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Zb() {
  this.I = t.document || document;
}
m = Zb.prototype;
m.getElementsByTagName = function (a, b) {
  return (b || this.I).getElementsByTagName(String(a));
};
m.setProperties = function (a, b) {
  Ab(b, function (c, d) {
    c && "object" == typeof c && c.D && (c = c.A());
    "style" == d
      ? (a.style.cssText = c)
      : "class" == d
      ? (a.className = c)
      : "for" == d
      ? (a.htmlFor = c)
      : Wb.hasOwnProperty(d)
      ? a.setAttribute(Wb[d], c)
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
  Xb(Yb(a), a, arguments);
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
function $b(a, b, c) {
  Array.isArray(c) && (c = c.join(" "));
  var d = ac(b);
  "" === c || void 0 == c
    ? (Eb ||
        ((c = {}),
        (Eb =
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
      (c = Eb),
      b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
    : a.setAttribute(d, c);
}
function ac(a) {
  y(a, "ARIA attribute cannot be empty.");
  a: {
    for (b in Db)
      if (Db[b] == a) {
        var b = !0;
        break a;
      }
    b = !1;
  }
  y(b, "No such ARIA attribute " + a);
  return "aria-" + a;
}
function bc() {
  this.V = this.V;
}
bc.prototype.V = !1;
bc.prototype.isDisposed = function () {
  return this.V;
};
function cc(a) {
  bc.call(this);
  this.ha = a || ya || (ya = new Zb());
  this.na = {};
  this.ma = {};
}
w(cc, bc);
var dc = [];
function ec(a) {
  y(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
  var b = "Y";
  if (a.Y && a.hasOwnProperty(b)) return a.Y;
  dc.push(a);
  var c = new a();
  a.Y = c;
  y(a.hasOwnProperty(b), "Could not instantiate singleton.");
  return c;
}
function fc() {
  this.va = new cc();
}
fc.prototype.speak = function (a, b) {
  var c = this.va;
  b = b || "polite";
  var d;
  if ((d = c.na[b])) d.removeAttribute(ac("hidden"));
  else {
    var e = (d = c.ha.createElement("DIV"));
    var f = d;
    f = (Object.prototype.hasOwnProperty.call(f, sa) && f[sa]) || (f[sa] = ++ta);
    e.id = "goog-lr-" + f;
    d.style.position = "absolute";
    d.style.top = "-1000px";
    d.style.height = "1px";
    d.style.overflow = "hidden";
    $b(d, "live", b);
    $b(d, "atomic", "true");
    c.ha.I.body.appendChild(d);
    c.na[b] = d;
  }
  e = (e = c.ma[b]) && e === a ? a + "\u00a0" : a;
  a && (c.ma[b] = e);
  y(null != d, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in d) d.textContent = e;
  else if (3 == d.nodeType) d.data = String(e);
  else if (d.firstChild && 3 == d.firstChild.nodeType) {
    for (; d.lastChild != d.firstChild; ) d.removeChild(y(d.lastChild));
    d.firstChild.data = String(e);
  } else {
    for (; (a = d.firstChild); ) d.removeChild(a);
    a = Yb(d);
    d.appendChild(a.createTextNode(String(e)));
  }
};
function gc(a) {
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
function hc(a) {
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
      return Cb(a);
    }
  }
}
function ic(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (ra(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
  else for (var d = hc(a), e = gc(a), f = e.length, k = 0; k < f; k++) b.call(c, e[k], d && d[k], a);
}
var jc = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function kc(a, b) {
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
  this.u = this.G = this.v = "";
  this.H = null;
  this.B = this.s = "";
  this.m = this.Ba = !1;
  if (a instanceof N) {
    this.m = a.m;
    lc(this, a.v);
    var b = a.G;
    O(this);
    this.G = b;
    b = a.u;
    O(this);
    this.u = b;
    mc(this, a.H);
    b = a.s;
    O(this);
    this.s = b;
    nc(this, a.o.clone());
    a = a.B;
    O(this);
    this.B = a;
  } else
    a && (b = String(a).match(jc))
      ? ((this.m = !1),
        lc(this, b[1] || "", !0),
        (a = b[2] || ""),
        O(this),
        (this.G = P(a)),
        (a = b[3] || ""),
        O(this),
        (this.u = P(a, !0)),
        mc(this, b[4]),
        (a = b[5] || ""),
        O(this),
        (this.s = P(a, !0)),
        nc(this, b[6] || "", !0),
        (a = b[7] || ""),
        O(this),
        (this.B = P(a)))
      : ((this.m = !1), (this.o = new Q(null, this.m)));
}
m = N.prototype;
m.toString = function () {
  var a = [],
    b = this.v;
  b && a.push(R(b, oc, !0), ":");
  var c = this.u;
  if (c || "file" == b)
    a.push("//"),
      (b = this.G) && a.push(R(b, oc, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.H),
      null != c && a.push(":", String(c));
  if ((c = this.s)) this.u && "/" != c.charAt(0) && a.push("/"), a.push(R(c, "/" == c.charAt(0) ? pc : qc, !0));
  (c = this.o.toString()) && a.push("?", c);
  (c = this.B) && a.push("#", R(c, rc));
  return a.join("");
};
m.resolve = function (a) {
  var b = this.clone(),
    c = !!a.v;
  c ? lc(b, a.v) : (c = !!a.G);
  if (c) {
    var d = a.G;
    O(b);
    b.G = d;
  } else c = !!a.u;
  c ? ((d = a.u), O(b), (b.u = d)) : (c = null != a.H);
  d = a.s;
  if (c) mc(b, a.H);
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
  c ? nc(b, a.o.clone()) : (c = !!a.B);
  c && ((a = a.B), O(b), (b.B = a));
  return b;
};
m.clone = function () {
  return new N(this);
};
function lc(a, b, c) {
  O(a);
  a.v = c ? P(b, !0) : b;
  a.v && (a.v = a.v.replace(/:$/, ""));
}
function mc(a, b) {
  O(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.H = b;
  } else a.H = null;
}
function nc(a, b, c) {
  O(a);
  b instanceof Q ? ((a.o = b), a.o.da(a.m)) : (c || (b = R(b, sc)), (a.o = new Q(b, a.m)));
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
  if (a.Ba) throw Error("Tried to modify a read-only Uri");
}
m.da = function (a) {
  this.m = a;
  this.o && this.o.da(a);
};
function P(a, b) {
  return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function R(a, b, c) {
  return "string" === typeof a ? ((a = encodeURI(a).replace(b, tc)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function tc(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var oc = /[#\/\?@]/g,
  qc = /[#\?:]/g,
  pc = /[#\?]/g,
  sc = /[#\?@]/g,
  rc = /#/g;
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
      kc(a.l, function (b, c) {
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
function uc(a, b) {
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
  if ("string" === typeof a) uc(this, a) && (b = b.concat(this.g.get(T(this, a))));
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
  uc(this, a) && (this.i = A(this.i) - this.g.get(a).length);
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
        (this.remove(c), this.remove(d), 0 < b.length && ((this.l = null), this.g.set(T(this, d), Wa(b)), (this.i = A(this.i) + b.length)));
    }, this));
  this.m = a;
};
m.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    ic(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
function vc() {
  this.ja = {};
  wc(this, t._notes_flag_initialData || {});
  xc(this);
}
function wc(a, b) {
  Ab(zb, function (c) {
    void 0 !== b[c] && (a.ja[c] = b[c]);
  });
}
function xc(a) {
  var b = {};
  new N(self.location.href).o.forEach(function (c, d) {
    b[d] = c;
  });
  wc(a, b);
}
Object.values({
  UNKNOWN: "unknown",
  lb: "default",
  Ub: "groceries",
  Pb: "food",
  xc: "music",
  Pc: "recipes",
  Cc: "notes",
  Lc: "places",
  od: "travel",
  zd: "video",
  Ya: "celebration"
}).filter(function (a) {
  return "unknown" !== a;
});
var yc =
  Object.freeze ||
  function (a) {
    return a;
  };
function zc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = !1;
}
zc.prototype.stopPropagation = function () {};
zc.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var Ac = (function () {
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
  zc.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.J = null;
  a && this.init(a, b);
}
w(U, zc);
var Bc = yc({ 2: "touch", 3: "pen", 4: "mouse" });
U.prototype.init = function (a, b) {
  var c = (this.type = a.type),
    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (Za) {
      a: {
        try {
          Xa(b.nodeName);
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
    : ((this.offsetX = $a || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = $a || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Bc[a.pointerType] || "";
  this.state = a.state;
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
var Cc = "closure_listenable_" + ((1e6 * Math.random()) | 0);
var Dc = 0;
function Ec(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.W = e;
  this.key = ++Dc;
  this.removed = this.U = !1;
}
function Fc(a) {
  a.removed = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.W = null;
}
function Gc(a) {
  this.src = a;
  this.j = {};
  this.L = 0;
}
m = Gc.prototype;
m.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.j[f];
  a || ((a = this.j[f] = []), this.L++);
  var k = Hc(a, b, d, e);
  -1 < k ? ((b = a[k]), c || (b.U = !1)) : ((b = new Ec(b, this.src, f, !!d, e)), (b.U = c), a.push(b));
  return b;
};
m.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.j)) return !1;
  var e = this.j[a];
  b = Hc(e, b, c, d);
  return -1 < b
    ? (Fc(e[b]), y(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.L--), !0)
    : !1;
};
function Ic(a, b) {
  var c = b.type;
  if (c in a.j) {
    var d = a.j[c],
      e = Ua(d, b),
      f;
    if ((f = 0 <= e)) y(null != d.length), Array.prototype.splice.call(d, e, 1);
    f && (Fc(b), 0 == a.j[c].length && (delete a.j[c], a.L--));
  }
}
m.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.j)
    if (!a || c == a) {
      for (var d = this.j[c], e = 0; e < d.length; e++) ++b, Fc(d[e]);
      delete this.j[c];
      this.L--;
    }
  return b;
};
m.ya = function (a, b, c, d) {
  a = this.j[a.toString()];
  var e = -1;
  a && (e = Hc(a, b, c, d));
  return -1 < e ? a[e] : null;
};
m.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return Bb(this.j, function (f) {
    for (var k = 0; k < f.length; ++k) if (!((c && f[k].type != d) || (e && f[k].capture != b))) return !0;
    return !1;
  });
};
function Hc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.W == d) return e;
  }
  return -1;
}
var Jc = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Kc = {},
  Lc = 0;
function Mc(a, b, c, d, e) {
  if (d && d.once) Nc(a, b, c, d, e);
  else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Mc(a, b[f], c, d, e);
  else (c = Oc(c)), a && a[Cc] ? a.listen(b, c, v(d) ? !!d.capture : !!d, e) : Pc(a, b, c, !1, d, e);
}
function Pc(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var k = v(e) ? !!e.capture : !!e,
    g = Qc(a);
  g || (a[Jc] = g = new Gc(a));
  c = g.add(b, c, d, k, f);
  if (!c.proxy) {
    d = Rc();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Ac || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Sc(b.toString()), d);
    else if (a.addListener && a.removeListener) y("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Lc++;
  }
}
function Rc() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = Tc;
  return a;
}
function Nc(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Nc(a, b[f], c, d, e);
  else (c = Oc(c)), a && a[Cc] ? a.ia.add(String(b), c, !0, v(d) ? !!d.capture : !!d, e) : Pc(a, b, c, !0, d, e);
}
function Uc(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Uc(a, b[f], c, d, e);
  else
    (d = v(d) ? !!d.capture : !!d),
      (c = Oc(c)),
      a && a[Cc] ? a.ia.remove(String(b), c, d, e) : a && (a = Qc(a)) && (b = a.ya(b, c, d, e)) && Vc(b);
}
function Vc(a) {
  if ("number" !== typeof a && a && !a.removed) {
    var b = a.src;
    if (b && b[Cc]) Ic(b.ia, a);
    else {
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Sc(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      Lc--;
      (c = Qc(b)) ? (Ic(c, a), 0 == c.L && ((c.src = null), (b[Jc] = null))) : Fc(a);
    }
  }
}
function Sc(a) {
  return a in Kc ? Kc[a] : (Kc[a] = "on" + a);
}
function Tc(a, b) {
  if (a.removed) a = !0;
  else {
    b = new U(b, this);
    var c = a.listener,
      d = a.W || a.src;
    a.U && Vc(a);
    a = c.call(d, b);
  }
  return a;
}
function Qc(a) {
  a = a[Jc];
  return a instanceof Gc ? a : null;
}
var Wc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Oc(a) {
  y(a, "Listener can not be null.");
  if ("function" === typeof a) return a;
  y(a.handleEvent, "An object listener must have handleEvent method.");
  a[Wc] ||
    (a[Wc] = function (b) {
      return a.handleEvent(b);
    });
  return a[Wc];
}
function Xc() {}
function Yc() {
  this.T = [];
  new DataView(new ArrayBuffer(8));
}
oa(Yc, Xc);
new Yc();
new H();
(function (a, b) {
  if (bb && !b) return t.atob(a);
  var c = "";
  cb(a, function (d) {
    c += String.fromCharCode(d);
  });
  return c;
})("bGFiZWxz"); /*

 SPDX-License-Identifier: Apache-2.0
*/
var Zc = fa([""]),
  $c = q(["\x00"], ["\\0"]),
  ad = q(["\n"], ["\\n"]),
  bd = q(["\x00"], ["\\u0000"]),
  cd = fa([""]),
  dd = q(["\x00"], ["\\0"]),
  ed = q(["\n"], ["\\n"]),
  fd = q(["\x00"], ["\\u0000"]);
function gd(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!hd && a === a.raw) ||
    !((hd && !id) || V(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function V(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function jd(a) {
  return -1 === a.toString().indexOf("`");
}
var hd =
    jd(function (a) {
      return a(Zc);
    }) ||
    jd(function (a) {
      return a($c);
    }) ||
    jd(function (a) {
      return a(ad);
    }) ||
    jd(function (a) {
      return a(bd);
    }),
  id = V(cd) && V(dd) && V(ed) && V(fd);
function kd(a, b) {
  this.name = a;
  this.value = b;
}
kd.prototype.toString = function () {
  return this.name;
};
var ld = new kd("OFF", Infinity),
  md = new kd("WARNING", 900),
  nd = new kd("CONFIG", 700);
function od() {
  this.N = 0;
  this.clear();
}
var pd;
od.prototype.clear = function () {
  this.T = Array(this.N);
  this.ga = -1;
  this.la = !1;
};
function qd(a, b, c) {
  this.reset(a || ld, b, c, void 0, void 0);
}
qd.prototype.reset = function (a, b) {
  this.Fa = b;
};
qd.prototype.getMessage = function () {
  return this.Fa;
};
function rd(a, b) {
  this.level = null;
  this.Aa = [];
  this.parent = (void 0 === b ? null : b) || null;
  this.children = [];
  this.Ea = {
    getName: function () {
      return a;
    }
  };
}
function sd(a) {
  if (a.level) return a.level;
  if (a.parent) return sd(a.parent);
  z("Root logger has no level set.");
  return ld;
}
rd.prototype.publish = function (a) {
  for (var b = this; b; )
    b.Aa.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
function td() {
  this.entries = {};
  var a = new rd("");
  a.level = nd;
  this.entries[""] = a;
}
var ud;
function vd(a, b) {
  var c = a.entries[b];
  if (c) return c;
  c = vd(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
  var d = new rd(b, c);
  a.entries[b] = d;
  c.children.push(d);
  return d;
}
function wd() {
  ud || (ud = new td());
  return ud;
}
var xd = "function" === typeof URL,
  yd = [];
function zd() {}
Ad(function (a) {
  var b;
  if ((b = vd(wd(), "safevalues").Ea)) {
    var c = "A URL with content '" + a + "' was sanitized away.",
      d = md;
    if ((a = b))
      if ((a = b && d)) {
        a = d.value;
        var e = b ? sd(vd(wd(), b.getName())) : ld;
        a = a >= e.value;
      }
    if (a) {
      d = d || ld;
      a = vd(wd(), b.getName());
      "function" === typeof c && (c = c());
      pd || (pd = new od());
      e = pd;
      b = b.getName();
      if (0 < e.N) {
        var f = (e.ga + 1) % e.N;
        e.ga = f;
        e.la ? ((e = e.T[f]), e.reset(d, c, b), (b = e)) : ((e.la = f == e.N - 1), (b = e.T[f] = new qd(d, c, b)));
      } else b = new qd(d, c, b);
      a.publish(b);
    }
  }
});
function Ad(a) {
  -1 === yd.indexOf(a) && yd.push(a);
  zd = function (b) {
    yd.forEach(function (c) {
      c(b);
    });
  };
}
function Bd(a) {
  this.Ca = a;
}
function W(a) {
  return new Bd(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var Cd = [
  W("data"),
  W("http"),
  W("https"),
  W("mailto"),
  W("ftp"),
  new Bd(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })
];
Object.freeze(
  "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
    " "
  )
);
var Dd = fa(["http://goo.gl/forms/r40gTO4BTb"]),
  Ed = fa(["https://keep.google.com"]);
(function (a) {
  var b = pa.apply(1, arguments);
  gd(a, b.length);
  var c = a[0];
  var d = 0 === b.length;
  var e = c.search(/[:/?#]/);
  0 > e ||
    (":" !== c.charAt(e) ? (d = !0) : ((d = c.substring(0, e).toLowerCase()), (d = /^[a-z][a-z\d+.-]*$/.test(d) && "javascript" !== d)));
  if (!d) throw Error("Trying to interpolate with unsupported prefix: " + c);
  c = [c];
  for (d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
  return new K(c.join(""), L);
})(Dd);
var Fd = (function (a) {
    var b = pa.apply(1, arguments);
    gd(a, b.length);
    if (0 === b.length) return Lb(a[0]);
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
    return Lb(c);
  })(Ed).toString(),
  Gd = void 0;
Gd = void 0 === Gd ? Cd : Gd;
a: {
  var X = Gd;
  X = void 0 === X ? Cd : X;
  if (!(Fd instanceof K))
    for (var Hd = 0; Hd < X.length; ++Hd) {
      var Id = X[Hd];
      if (Id instanceof Bd && Id.Ca(Fd)) {
        new K(Fd, L);
        break a;
      }
    }
}
var Jd = { Dd: !0 };
function Y() {
  throw Error("Do not instantiate directly");
}
Y.prototype.wa = null;
Y.prototype.getContent = function () {
  return this.content;
};
Y.prototype.toString = function () {
  return this.content;
};
Y.prototype.sa = function () {
  if (this.xa !== Jd) throw Error("Sanitized content was not of kind HTML.");
  var a = this.toString(),
    b = new I(Hb, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
  Ba(Jb(b), "must provide justification");
  y(!/^[\s\xa0]*$/.test(Jb(b)), "must provide non-empty justification");
  return Tb(a);
};
function Kd() {
  Y.call(this);
}
w(Kd, Y);
Kd.prototype.xa = Jd;
var Ld = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.wa = d);
      return c;
    };
  })(Kd),
  Md = {}; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Nd = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
  Od = {};
var Pd = {
  Qb: 0,
  ac: 1,
  rb: 2,
  sb: 3,
  0: "FORMATTED_HTML_CONTENT",
  1: "HTML_FORMATTED_CONTENT",
  2: "EMBEDDED_INTERNAL_CONTENT",
  3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
};
function Qd(a, b) {
  b = Error.call(this, a + " cannot be used with intent " + Pd[b]);
  this.message = b.message;
  "stack" in b && (this.stack = b.stack);
  this.type = a;
  this.name = "TypeCannotBeUsedWithIntentError";
}
oa(Qd, Error);
function Rd() {
  var a = ec(vc).ja.n_ecmv3m;
  this.R = !!a && "false" !== a;
  this.h = null;
  this.aa = !1;
  this.fa = "";
  this.R && (this.M = {});
  this.R || (this.X(), Mc(document, "mousedown", this.ka, void 0, this), (a = {}), (a.imageUrl = Sd()), Z(this, "pageScrape", a));
  this.oa = wa(this.za, this);
  chrome.runtime.onMessage.addListener(this.oa);
}
function Td(a) {
  a.h = null;
  a.R || Uc(document, "mousedown", a.ka, void 0, a);
  chrome.runtime.onMessage.removeListener(a.oa);
  a.aa = !0;
}
function Z(a, b, c) {
  if (!a.aa)
    try {
      chrome.runtime.sendMessage(chrome.runtime.id, { type: b, value: c }, void 0);
    } catch (d) {
      Td(a);
    }
}
function Sd() {
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
  a && ((a = a instanceof N ? a.clone() : new N(a)), a.v || lc(a, "http"), (a = a.toString()));
  return a;
}
Rd.prototype.za = function (a, b, c) {
  if (v(a) && !this.aa)
    switch (a.type) {
      case "appHeightChange":
        this.h && (this.h.style.height = a.value);
        break;
      case "dispose":
        Td(this);
        break;
      case "finishHide":
        this.h && Ud(this, !1);
        break;
      case "getInitInfo":
        c(this.M);
        break;
      case "getSelectedText":
        c(window.getSelection().toString());
        break;
      case "removeIframe":
        this.h.parentNode.removeChild(this.h), Td(this);
      case "selectedTextRequest":
        c(window.getSelection().toString());
        break;
      case "setInitInfo":
        this.M = a.value;
        this.M.selectedText = window.getSelection().toString();
        this.M.embedInfo.imageUrl = Sd();
        this.X();
        break;
      case "speakMessage":
        ec(fc).speak(a.value);
        break;
      case "show":
        this.h && Ud(this, !0);
        break;
      case "toggleVisibility":
        (a = "none" == this.h.style.display),
          this.h &&
            ("none" == this.h.style.display
              ? (Ud(this, !0), this.h.contentWindow.focus(), Z(this, "show"))
              : (Z(this, "startHide"), Z(this, "impression", 9204))),
          c(a);
    }
};
Rd.prototype.X = function () {
  if ("interactive" != document.readyState && "complete" != document.readyState) Mc(document, "DOMContentLoaded", this.X, void 0, this);
  else {
    if (this.R) {
      var a = document.getElementById("keep-popup-frame");
      a && a.parentNode && a.parentNode.removeChild(a);
    }
    var b = Md["notes.browseraction.soy.injects.injectedIframe"]
      ? Md["notes.browseraction.soy.injects.injectedIframe"](Od, void 0)
      : Ld(
          '<iframe frameborder="0" style=" height: 438px; margin: 0px; padding: 0px; position: fixed; right: 5px; top: 5px; width: 370px; z-index: 2147483647;"></iframe>'
        );
    a = ya || (ya = new Zb());
    if (b && b.Ga) a = b.Ga();
    else {
      a = a.createElement("DIV");
      b: if (v(b)) {
        if (b.sa) {
          var c = b.sa();
          if (c instanceof M) {
            b = c;
            break b;
          }
        }
        z("Soy template output is unsafe for use as HTML: " + b);
        b = Sb("zSoyz");
      } else b = Sb(String(b));
      c = b.A();
      var d = c.match(Nd);
      y(
        !d,
        "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",
        d && d[0],
        c
      );
      c = a;
      if (Vb()) for (; c.lastChild; ) c.removeChild(c.lastChild);
      c.innerHTML = Rb(b);
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
    this.fa = this.h.style.cssText;
    this.h.id = "keep-popup-frame";
    e = this.h;
    a = chrome.runtime.getURL("index.html");
    e.removeAttribute("srcdoc");
    if (a instanceof J) throw new Qd("TrustedResourceUrl", 3);
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
      b: if (xd) {
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
      "javascript:" === f ? (zd(a), (f = void 0)) : (f = a);
    }
    void 0 !== f && (e.src = f);
    this.h.allow = "clipboard-write";
    document.body.appendChild(this.h);
    Ud(this, !0);
    this.h.contentWindow.focus();
  }
};
function Ud(a, b) {
  a.h.style.cssText = a.fa + " display: " + (b ? "block !important;" : "none");
}
Rd.prototype.ka = function (a) {
  0 == a.button && this.h && "none" != this.h.style.display && (Z(this, "startHide"), Z(this, "impression", 9203));
};
new Rd();
