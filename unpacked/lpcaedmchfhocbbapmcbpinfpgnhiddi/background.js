var g;
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
function m(a, b) {
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
m("Symbol", function (a) {
  function b(f) {
    if (this instanceof b) throw new TypeError("Symbol is not a constructor");
    return new c(d + (f || "") + "_" + e++, f);
  }
  function c(f, h) {
    this.Vf = f;
    ba(this, "description", { configurable: !0, writable: !0, value: h });
  }
  if (a) return a;
  c.prototype.toString = function () {
    return this.Vf;
  };
  var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    e = 0;
  return b;
});
m("Symbol.iterator", function (a) {
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
function ha(a, b) {
  a.raw = b;
  return a;
}
function r(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  if (b) return b.call(a);
  if ("number" == typeof a.length) return { next: aa(a) };
  throw Error(String(a) + " is not an iterable or ArrayLike");
}
function ia(a) {
  for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
  return c;
}
function ja(a) {
  return a instanceof Array ? a : ia(r(a));
}
function ka(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var la =
  "function" == typeof Object.assign
    ? Object.assign
    : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (d) for (var e in d) ka(d, e) && (a[e] = d[e]);
        }
        return a;
      };
m("Object.assign", function (a) {
  return a || la;
});
var ma =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          function b() {}
          b.prototype = a;
          return new b();
        },
  na;
if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
else {
  var oa;
  a: {
    var pa = { a: !0 },
      ra = {};
    try {
      ra.__proto__ = pa;
      oa = ra.a;
      break a;
    } catch (a) {}
    oa = !1;
  }
  na = oa
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var sa = na;
function t(a, b) {
  a.prototype = ma(b.prototype);
  a.prototype.constructor = a;
  if (sa) sa(a, b);
  else
    for (var c in b)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else a[c] = b[c];
  a.na = b.prototype;
}
function ta() {
  for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
  return b;
}
m("Array.prototype.find", function (a) {
  return a
    ? a
    : function (b, c) {
        a: {
          var d = this;
          d instanceof String && (d = String(d));
          for (var e = d.length, f = 0; f < e; f++) {
            var h = d[f];
            if (b.call(c, h, f, d)) {
              b = h;
              break a;
            }
          }
          b = void 0;
        }
        return b;
      };
});
m("WeakMap", function (a) {
  function b(l) {
    this.K = (k += Math.random() + 1).toString();
    if (l) {
      l = r(l);
      for (var n; !(n = l.next()).done; ) (n = n.value), this.set(n[0], n[1]);
    }
  }
  function c() {}
  function d(l) {
    var n = typeof l;
    return ("object" === n && null !== l) || "function" === n;
  }
  function e(l) {
    if (!ka(l, h)) {
      var n = new c();
      ba(l, h, { value: n });
    }
  }
  function f(l) {
    var n = Object[l];
    n &&
      (Object[l] = function (u) {
        if (u instanceof c) return u;
        Object.isExtensible(u) && e(u);
        return n(u);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var l = Object.seal({}),
          n = Object.seal({}),
          u = new a([
            [l, 2],
            [n, 3]
          ]);
        if (2 != u.get(l) || 3 != u.get(n)) return !1;
        u.delete(l);
        u.set(n, 4);
        return !u.has(l) && 4 == u.get(n);
      } catch (q) {
        return !1;
      }
    })()
  )
    return a;
  var h = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var k = 0;
  b.prototype.set = function (l, n) {
    if (!d(l)) throw Error("Invalid WeakMap key");
    e(l);
    if (!ka(l, h)) throw Error("WeakMap key fail: " + l);
    l[h][this.K] = n;
    return this;
  };
  b.prototype.get = function (l) {
    return d(l) && ka(l, h) ? l[h][this.K] : void 0;
  };
  b.prototype.has = function (l) {
    return d(l) && ka(l, h) && ka(l[h], this.K);
  };
  b.prototype.delete = function (l) {
    return d(l) && ka(l, h) && ka(l[h], this.K) ? delete l[h][this.K] : !1;
  };
  return b;
});
m("Map", function (a) {
  function b() {
    var k = {};
    return (k.previous = k.next = k.head = k);
  }
  function c(k, l) {
    var n = k[1];
    return ea(function () {
      if (n) {
        for (; n.head != k[1]; ) n = n.previous;
        for (; n.next != n.head; ) return (n = n.next), { done: !1, value: l(n) };
        n = null;
      }
      return { done: !0, value: void 0 };
    });
  }
  function d(k, l) {
    var n = l && typeof l;
    "object" == n || "function" == n ? (f.has(l) ? (n = f.get(l)) : ((n = "" + ++h), f.set(l, n))) : (n = "p_" + l);
    var u = k[0][n];
    if (u && ka(k[0], n))
      for (k = 0; k < u.length; k++) {
        var q = u[k];
        if ((l !== l && q.key !== q.key) || l === q.key) return { id: n, list: u, index: k, entry: q };
      }
    return { id: n, list: u, index: -1, entry: void 0 };
  }
  function e(k) {
    this[0] = {};
    this[1] = b();
    this.size = 0;
    if (k) {
      k = r(k);
      for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
    }
  }
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var k = Object.seal({ x: 4 }),
          l = new a(r([[k, "s"]]));
        if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
        var n = l.entries(),
          u = n.next();
        if (u.done || u.value[0] != k || "s" != u.value[1]) return !1;
        u = n.next();
        return u.done || 4 != u.value[0].x || "t" != u.value[1] || !n.next().done ? !1 : !0;
      } catch (q) {
        return !1;
      }
    })()
  )
    return a;
  var f = new WeakMap();
  e.prototype.set = function (k, l) {
    k = 0 === k ? 0 : k;
    var n = d(this, k);
    n.list || (n.list = this[0][n.id] = []);
    n.entry
      ? (n.entry.value = l)
      : ((n.entry = { next: this[1], previous: this[1].previous, head: this[1], key: k, value: l }),
        n.list.push(n.entry),
        (this[1].previous.next = n.entry),
        (this[1].previous = n.entry),
        this.size++);
    return this;
  };
  e.prototype.delete = function (k) {
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
  e.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = b();
    this.size = 0;
  };
  e.prototype.has = function (k) {
    return !!d(this, k).entry;
  };
  e.prototype.get = function (k) {
    return (k = d(this, k).entry) && k.value;
  };
  e.prototype.entries = function () {
    return c(this, function (k) {
      return [k.key, k.value];
    });
  };
  e.prototype.keys = function () {
    return c(this, function (k) {
      return k.key;
    });
  };
  e.prototype.values = function () {
    return c(this, function (k) {
      return k.value;
    });
  };
  e.prototype.forEach = function (k, l) {
    for (var n = this.entries(), u; !(u = n.next()).done; ) (u = u.value), k.call(l, u[1], u[0], this);
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var h = 0;
  return e;
});
m("Math.trunc", function (a) {
  return a
    ? a
    : function (b) {
        b = Number(b);
        if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
        var c = Math.floor(Math.abs(b));
        return 0 > b ? -c : c;
      };
});
m("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
m("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) ka(b, d) && c.push(b[d]);
        return c;
      };
});
m("Object.is", function (a) {
  return a
    ? a
    : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
});
m("Array.prototype.includes", function (a) {
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
function ua(a, b, c) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  return a + "";
}
m("String.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        return -1 !== ua(this, b, "includes").indexOf(b, c || 0);
      };
});
m("Set", function (a) {
  function b(c) {
    this.C = new Map();
    if (c) {
      c = r(c);
      for (var d; !(d = c.next()).done; ) this.add(d.value);
    }
    this.size = this.C.size;
  }
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var c = Object.seal({ x: 4 }),
          d = new a(r([c]));
        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
        var e = d.entries(),
          f = e.next();
        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
        f = e.next();
        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
      } catch (h) {
        return !1;
      }
    })()
  )
    return a;
  b.prototype.add = function (c) {
    c = 0 === c ? 0 : c;
    this.C.set(c, c);
    this.size = this.C.size;
    return this;
  };
  b.prototype.delete = function (c) {
    c = this.C.delete(c);
    this.size = this.C.size;
    return c;
  };
  b.prototype.clear = function () {
    this.C.clear();
    this.size = 0;
  };
  b.prototype.has = function (c) {
    return this.C.has(c);
  };
  b.prototype.entries = function () {
    return this.C.entries();
  };
  b.prototype.values = function () {
    return this.C.values();
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function (c, d) {
    var e = this;
    this.C.forEach(function (f) {
      return c.call(d, f, f, e);
    });
  };
  return b;
});
m("Number.MAX_SAFE_INTEGER", function () {
  return 9007199254740991;
});
m("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
m("Number.isInteger", function (a) {
  return a
    ? a
    : function (b) {
        return Number.isFinite(b) ? b === Math.floor(b) : !1;
      };
});
m("Number.isSafeInteger", function (a) {
  return a
    ? a
    : function (b) {
        return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
      };
});
function va(a, b) {
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
m("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b, c) {
          return [b, c];
        });
      };
});
m("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b) {
          return b;
        });
      };
});
m("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return va(this, function (b, c) {
          return c;
        });
      };
});
m("Array.from", function (a) {
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
          for (var h = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, h++));
        } else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
        return e;
      };
});
m("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) ka(b, d) && c.push([d, b[d]]);
        return c;
      };
});
m("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = ua(this, b, "startsWith");
        b += "";
        var e = d.length,
          f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var h = 0; h < f && c < e; ) if (d[c++] != b[h++]) return !1;
        return h >= f;
      };
});
m("globalThis", function (a) {
  return a || da;
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var wa = wa || {},
  v = this || self;
function xa(a, b) {
  a: {
    var c = ["CLOSURE_FLAGS"];
    for (var d = v, e = 0; e < c.length; e++)
      if (((d = d[c[e]]), null == d)) {
        c = null;
        break a;
      }
    c = d;
  }
  a = c && c[a];
  return null != a ? a : b;
}
function w(a) {
  var b = typeof a;
  return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
}
function ya(a) {
  var b = w(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function za(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
function Ba(a) {
  return (Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca]) || (a[Ca] = ++Da);
}
var Ca = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Da = 0;
function Ea(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function Fa(a, b, c) {
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
function Ga(a, b, c) {
  Ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea : Fa;
  return Ga.apply(null, arguments);
}
function Ha(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function Ia(a) {
  var b = ["rocket_flushImpressions"],
    c = v;
  b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
  for (var d; b.length && (d = b.shift()); )
    b.length || void 0 === a ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = a);
}
function Ja(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.na = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.aj = function (d, e, f) {
    for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
    return b.prototype[e].apply(d, h);
  };
}
function Ka(a) {
  return a;
}
function La(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, La);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
Ja(La, Error);
La.prototype.name = "CustomError";
var Ma;
function Na(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  La.call(this, c + a[d]);
}
Ja(Na, La);
Na.prototype.name = "AssertionError";
function Oa(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Na("" + e, f || []);
}
function z(a, b, c) {
  a || Oa("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Pa(a, b, c) {
  null == a && Oa("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Qa(a, b) {
  throw new Na("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
function Ra(a, b, c) {
  "number" !== typeof a && Oa("Expected number but got %s: %s.", [w(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Sa(a, b, c) {
  "string" !== typeof a && Oa("Expected string but got %s: %s.", [w(a), a], b, Array.prototype.slice.call(arguments, 2));
}
function Ta(a, b, c) {
  "function" !== typeof a && Oa("Expected function but got %s: %s.", [w(a), a], b, Array.prototype.slice.call(arguments, 2));
}
function A(a, b, c) {
  Array.isArray(a) || Oa("Expected array but got %s: %s.", [w(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Ua(a, b, c, d) {
  a instanceof b || Oa("Expected instanceof %s but got %s.", [Va(b), Va(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
}
function Va(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
function Wa(a) {
  v.setTimeout(function () {
    throw a;
  }, 0);
}
var Xa = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var Za = xa(610401301, !1),
  $a = xa(572417392, xa(1, !0));
function ab() {
  var a = v.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var bb,
  cb = v.navigator;
bb = cb ? cb.userAgentData || null : null;
function db(a) {
  return Za
    ? bb
      ? bb.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function B(a) {
  return -1 != ab().indexOf(a);
}
function eb() {
  return Za ? !!bb && 0 < bb.brands.length : !1;
}
function fb() {
  return eb() ? !1 : B("Trident") || B("MSIE");
}
function gb() {
  return eb() ? db("Chromium") : ((B("Chrome") || B("CriOS")) && !(eb() ? 0 : B("Edge"))) || B("Silk");
}
var hb = Array.prototype.indexOf
    ? function (a, b) {
        z(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  ib = Array.prototype.forEach
    ? function (a, b) {
        z(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      },
  jb = Array.prototype.map
    ? function (a, b) {
        z(null != a.length);
        return Array.prototype.map.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
          f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d;
      },
  kb = Array.prototype.every
    ? function (a, b) {
        z(null != a.length);
        return Array.prototype.every.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0;
      };
function lb(a, b) {
  b = hb(a, b);
  var c;
  if ((c = 0 <= b)) z(null != a.length), Array.prototype.splice.call(a, b, 1);
  return c;
}
function mb(a) {
  return Array.prototype.concat.apply([], arguments);
}
function nb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function ob(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (ya(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var h = 0; h < f; h++) a[e + h] = d[h];
    } else a.push(d);
  }
}
function pb(a) {
  pb[" "](a);
  return a;
}
pb[" "] = function () {};
function qb(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
}
var rb = fb(),
  sb = B("Gecko") && !(-1 != ab().toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
  tb = -1 != ab().toLowerCase().indexOf("webkit") && !B("Edge");
!B("Android") || gb();
var ub = gb(),
  vb =
    B("Safari") &&
    !(
      gb() ||
      (eb() ? 0 : B("Coast")) ||
      (eb() ? 0 : B("Opera")) ||
      (eb() ? 0 : B("Edge")) ||
      (eb() ? db("Microsoft Edge") : B("Edg/")) ||
      (eb() ? db("Opera") : B("OPR")) ||
      B("Firefox") ||
      B("FxiOS") ||
      B("Silk") ||
      B("Android")
    ) &&
    !((B("iPhone") && !B("iPod") && !B("iPad")) || B("iPad") || B("iPod"));
var wb = {},
  xb = null,
  yb = sb || tb || (!vb && !rb && "function" == typeof v.atob);
function zb(a, b) {
  z(ya(a), "encodeByteArray takes an array as a parameter");
  void 0 === b && (b = 0);
  Ab();
  b = wb[b];
  for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
    var h = a[e],
      k = a[e + 1],
      l = a[e + 2],
      n = b[h >> 2];
    h = b[((h & 3) << 4) | (k >> 4)];
    k = b[((k & 15) << 2) | (l >> 6)];
    l = b[l & 63];
    c[f++] = "" + n + h + k + l;
  }
  n = 0;
  l = d;
  switch (a.length - e) {
    case 2:
      (n = a[e + 1]), (l = b[(n & 15) << 2] || d);
    case 1:
      (a = a[e]), (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (n >> 4)] + l + d);
  }
  return c.join("");
}
function Bb(a, b) {
  function c(l) {
    for (; d < a.length; ) {
      var n = a.charAt(d++),
        u = xb[n];
      if (null != u) return u;
      if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
    }
    return l;
  }
  Ab();
  for (var d = 0; ; ) {
    var e = c(-1),
      f = c(0),
      h = c(64),
      k = c(64);
    if (64 === k && -1 === e) break;
    b((e << 2) | (f >> 4));
    64 != h && (b(((f << 4) & 240) | (h >> 2)), 64 != k && b(((h << 6) & 192) | k));
  }
}
function Ab() {
  if (!xb) {
    xb = {};
    for (
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0;
      5 > c;
      c++
    ) {
      var d = a.concat(b[c].split(""));
      wb[c] = d;
      for (var e = 0; e < d.length; e++) {
        var f = d[e],
          h = xb[f];
        void 0 === h ? (xb[f] = e) : z(h === e);
      }
    }
  }
}
var Cb = "undefined" !== typeof Uint8Array,
  Db = !rb && "function" === typeof btoa;
function Eb(a) {
  if (!Db) return zb(a);
  for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
  return btoa(b);
}
var Fb = {};
var Gb;
function Hb(a, b) {
  if (b !== Fb) throw Error("illegal external caller");
  this.qe = a;
  if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
  this.dontPassByteStringToStructuredClone = Ib;
}
Hb.prototype.Ad = function () {
  return null == this.qe;
};
function Ib() {}
function Jb() {
  return "function" === typeof BigInt;
}
var C = 0,
  D = 0;
function Kb(a) {
  var b = 0 > a;
  a = Math.abs(a);
  var c = a >>> 0;
  a = Math.floor((a - c) / 4294967296);
  b && ((c = r(Lb(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
  C = c >>> 0;
  D = a >>> 0;
}
function Mb(a, b) {
  b >>>= 0;
  a >>>= 0;
  if (2097151 >= b) var c = "" + (4294967296 * b + a);
  else
    Jb()
      ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
      : ((c = ((a >>> 24) | (b << 8)) & 16777215),
        (b = (b >> 16) & 65535),
        (a = (a & 16777215) + 6777216 * c + 6710656 * b),
        (c += 8147497 * b),
        (b *= 2),
        1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
        1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
        z(b),
        (c = b + Nb(c) + Nb(a)));
  return c;
}
function Nb(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function Ob() {
  var a = C,
    b = D;
  b & 2147483648
    ? Jb()
      ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : ((b = r(Lb(a, b))), (a = b.next().value), (b = b.next().value), (a = "-" + Mb(a, b)))
    : (a = Mb(a, b));
  return a;
}
function Pb(a) {
  z(0 < a.length);
  if (16 > a.length) Kb(Number(a));
  else if (Jb()) (a = BigInt(a)), (C = Number(a & BigInt(4294967295)) >>> 0), (D = Number((a >> BigInt(32)) & BigInt(4294967295)));
  else {
    z(0 < a.length);
    var b = +("-" === a[0]);
    D = C = 0;
    for (var c = a.length, d = 0 + b, e = ((c - b) % 6) + b; e <= c; d = e, e += 6)
      (d = Number(a.slice(d, e))),
        (D *= 1e6),
        (C = 1e6 * C + d),
        4294967296 <= C && ((D += Math.trunc(C / 4294967296)), (D >>>= 0), (C >>>= 0));
    b && ((b = r(Lb(C, D))), (a = b.next().value), (b = b.next().value), (C = a), (D = b));
  }
}
function Lb(a, b) {
  b = ~b;
  a ? (a = ~a + 1) : (b += 1);
  return [a, b];
}
z(!0);
function Qb(a) {
  return Array.prototype.slice.call(a);
}
var Rb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
z(
  13 ===
    Math.round(
      Math.log2(
        Math.max.apply(
          Math,
          ja(
            Object.values({
              ai: 1,
              Yh: 2,
              Xh: 4,
              si: 8,
              ri: 16,
              ii: 32,
              jh: 64,
              Oi: 128,
              Qh: 256,
              Ph: 512,
              Zh: 1024,
              Lh: 2048,
              Ei: 4096,
              Mh: 8192
            })
          )
        )
      )
    )
);
function Sb(a) {
  z((a & 16777215) == a);
}
var Tb = Rb
  ? function (a, b) {
      Sb(b);
      A(a, "state is only maintained on arrays.");
      a[Rb] |= b;
    }
  : function (a, b) {
      Sb(b);
      A(a, "state is only maintained on arrays.");
      void 0 !== a.va ? (a.va |= b) : Object.defineProperties(a, { va: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
    };
function Ub(a) {
  var b = F(a);
  1 !== (b & 1) && (Object.isFrozen(a) && (a = Qb(a)), G(a, b | 1));
}
function I(a, b, c) {
  return c ? a | b : a & ~b;
}
var Vb = Object.getOwnPropertyDescriptor(Array.prototype, "ug");
Object.defineProperties(Array.prototype, {
  ug: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = F(this),
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
      var d = Wb(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return Vb ? Vb.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var F = Rb
  ? function (a) {
      A(a, "state is only maintained on arrays.");
      return a[Rb] | 0;
    }
  : function (a) {
      A(a, "state is only maintained on arrays.");
      return a.va | 0;
    };
function Xb(a, b) {
  z(b & 64, "state for messages must be constructed");
  z(0 === (b & 5), "state for messages should not contain repeated field state");
  var c = Wb(b),
    d = a.length;
  z(c + (+!!(b & 512) - 1) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
  b & 512 && z("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
  a = d ? a[d - 1] : void 0;
  z(
    (null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256),
    "arraystate and array disagree on sparseObject presence"
  );
}
var K = Rb
    ? function (a) {
        A(a, "state is only maintained on arrays.");
        var b = a[Rb];
        Xb(a, b);
        return b;
      }
    : function (a) {
        A(a, "state is only maintained on arrays.");
        var b = a.va;
        Xb(a, b);
        return b;
      },
  G = Rb
    ? function (a, b) {
        A(a, "state is only maintained on arrays.");
        Sb(b);
        a[Rb] = b;
      }
    : function (a, b) {
        A(a, "state is only maintained on arrays.");
        Sb(b);
        void 0 !== a.va ? (a.va = b) : Object.defineProperties(a, { va: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
      };
function Yb() {
  var a = [];
  Tb(a, 1);
  return a;
}
function Zb(a) {
  return !!(F(a) & 2);
}
function $b(a, b) {
  G(b, (a | 0) & -14591);
}
function ac(a, b) {
  G(b, (a | 34) & -14557);
}
function bc(a, b) {
  Ra(b);
  z((0 < b && 1023 >= b) || 536870912 === b);
  return (a & -16760833) | ((b & 1023) << 14);
}
function Wb(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var cc,
  dc = {};
function ec(a) {
  var b = a.yg === dc;
  z(!cc || b === a instanceof cc);
  return b;
}
var fc = {};
function gc(a) {
  var b = !(!a || "object" !== typeof a || a.fj !== fc);
  z(b === a instanceof Map);
  return b && 0 === Ua(a, Map).size;
}
function hc(a, b) {
  Ra(a);
  z(0 < a);
  z(0 === b || -1 === b);
  return a + b;
}
function ic(a, b) {
  Ra(a);
  z(0 <= a);
  z(0 === b || -1 === b);
  return a - b;
}
function jc(a) {
  return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
}
var kc,
  lc = !$a;
function mc(a) {
  throw Error("cannot coerce " + a + " to a ByteString, expected a uint8Array, a base64 encoded string or a ByteString");
}
function nc(a, b, c) {
  if (!Array.isArray(a) || a.length) return !1;
  var d = F(a);
  if (d & 1) return !0;
  if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
  G(a, d | 1);
  return !0;
}
var oc,
  pc = [];
G(pc, 55);
oc = Object.freeze(pc);
function qc(a) {
  if (a & 2) throw Error("Cannot mutate an immutable Message");
}
function rc() {}
function sc(a, b) {
  var c = F(A(a));
  b || z(!((c & 2 && c & 4) || c & 2048) || Object.isFrozen(a));
  b = !!(c & 8);
  c = !!(c & 16 && c & 32);
  if (b || c) {
    var d, e, f;
    a.forEach(function (h) {
      Array.isArray(h) ? (f = !0) : h && ec(h) && (Zb(h.u) ? (e = !0) : (d = !0));
    });
    f && z(!e && !d);
    c && z(!f && !d);
    b && z(!f && !e);
  }
  tc(a);
}
function tc(a) {
  var b = F(a),
    c = b & 4,
    d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
  z((c && 1 >= d) || (!c && 0 === d), "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
  if (4096 & F(a))
    for (b = 0; b < a.length; b++)
      "string" !== typeof a[b] && Qa("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field");
}
function uc(a) {
  a = Error(a);
  a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382.severity = "warning";
  return a;
}
function vc(a) {
  return a.displayName || a.name || "unknown type name";
}
function wc(a) {
  if (null == a) return a;
  if ("boolean" === typeof a || "number" === typeof a) return !!a;
}
var xc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function L(a) {
  var b = typeof a;
  return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : xc.test(a);
}
function yc(a) {
  return "Expected int32 as finite number but got " + w(a) + ": " + a;
}
function zc(a) {
  if ("number" !== typeof a) throw uc(yc(a));
  if (!Number.isFinite(a)) throw uc(yc(a));
  return a | 0;
}
function Ac(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
}
function Bc(a) {
  if (null != a) {
    var b = !!b;
    if (!L(a)) throw uc("Expected an int64 value encoded as a number or a string but got " + w(a) + ": " + a);
    a = "string" === typeof a ? Cc(a) : b ? Dc(a) : Ec(a);
  }
  return a;
}
function Ec(a) {
  z(L(a));
  a = Math.trunc(a);
  if (!Number.isSafeInteger(a)) {
    Kb(a);
    var b = C,
      c = D;
    if ((a = c & 2147483648)) (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
    b = 4294967296 * c + (b >>> 0);
    a = a ? -b : b;
  }
  return a;
}
function Fc(a) {
  z(L(a));
  a = Math.trunc(a);
  Kb(a);
  if (0 > a) {
    var b = Mb(C, D);
    a = Number(b);
    a = Number.isSafeInteger(a) ? a : b;
  } else a = 4294967296 * D + (C >>> 0);
  return a;
}
function Dc(a) {
  z(L(a));
  a = Math.trunc(a);
  Number.isSafeInteger(a) ? (a = String(a)) : (Kb(a), (a = Ob()));
  return a;
}
function Cc(a) {
  z(L(a));
  var b = Math.trunc(Number(a));
  if (Number.isSafeInteger(b)) return String(b);
  b = a.indexOf(".");
  -1 !== b && (a = a.substring(0, b));
  Pb(a);
  return Ob();
}
function Gc(a) {
  z(L(a));
  var b = Math.trunc(Number(a));
  if (Number.isSafeInteger(b) && 0 <= b) return String(b);
  b = a.indexOf(".");
  -1 !== b && (a = a.substring(0, b));
  Pb(a);
  return Mb(C, D);
}
function Hc(a) {
  var b = !!b;
  if (!L(a)) throw uc("Expected an uint64 value encoded as a number or a string but got " + w(a) + ": " + a);
  "string" === typeof a ? (a = Gc(a)) : b ? (z(L(a)), (a = Math.trunc(a)), Kb(a), (a = Mb(C, D))) : (a = Fc(a));
  return a;
}
function Ic(a, b) {
  if (!(a instanceof b)) throw Error("Expected instanceof " + vc(b) + " but got " + (a && vc(a.constructor)));
}
function Jc(a, b, c, d) {
  if (null != a && "object" === typeof a && ec(a)) return a;
  if (!Array.isArray(a))
    return c ? (d & 2 ? ((a = b[Kc]) ? (b = a) : ((a = new b()), Tb(a.u, 34), (b = b[Kc] = a))) : (b = new b())) : (b = void 0), b;
  var e = (c = F(a));
  0 === e && (e |= d & 32);
  e |= d & 2;
  e !== c && G(a, e);
  return new b(a);
}
var Kc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("defaultInstance") : "di";
var Lc;
function Mc(a, b) {
  z(!!(F(b) & 32));
  Lc = b;
  a = new a(b);
  Lc = void 0;
  return a;
}
function Nc() {
  throw Error("please construct maps as mutable then call toImmutable");
}
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var Oc = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    Pc = {};
  Object.defineProperties(Nc, ((Pc[Symbol.hasInstance] = { value: Oc, configurable: !1, writable: !1, enumerable: !1 }), Pc));
  z(Nc[Symbol.hasInstance] === Oc, "defineProperties did not work: was it monkey-patched?");
}
function Qc(a, b) {
  return Rc(b);
}
function Rc(a) {
  switch (typeof a) {
    case "number":
      return isFinite(a) ? a : String(a);
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (a) {
        if (Array.isArray(a)) return lc || !nc(a, void 0, 9999) ? a : void 0;
        if (Cb && null != a && a instanceof Uint8Array) return Eb(a);
        if (a instanceof Hb) {
          var b = a.qe;
          return null == b ? "" : "string" === typeof b ? b : (a.qe = Eb(b));
        }
      }
  }
  return a;
}
function Sc(a, b, c) {
  var d = Qb(a),
    e = d.length,
    f = b & 256 ? d[e - 1] : void 0;
  e += f ? -1 : 0;
  for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
  if (f) {
    b = d[b] = {};
    for (var h in f) z(!isNaN(h), "should not have non-numeric keys in sparse objects after a constructor is called."), (b[h] = c(f[h]));
  }
  A(d);
  A(a);
  return d;
}
function Tc(a, b, c, d, e, f) {
  if (null != a) {
    if (Array.isArray(a)) a = e && 0 == a.length && F(a) & 1 ? void 0 : f && F(a) & 2 ? a : Uc(a, b, c, void 0 !== d, e, f);
    else if (jc(a)) {
      var h = {},
        k;
      for (k in a) h[k] = Tc(a[k], b, c, d, e, f);
      a = h;
    } else a = b(a, d);
    return a;
  }
}
function Uc(a, b, c, d, e, f) {
  var h = d || c ? F(a) : 0;
  d = d ? !!(h & 32) : void 0;
  for (var k = Qb(a), l = 0; l < k.length; l++) k[l] = Tc(k[l], b, c, d, e, f);
  c && (A(k), A(a), c(h, k));
  return k;
}
function Vc(a) {
  return ec(a) ? a.toJSON() : Rc(a);
}
function Wc(a, b, c) {
  c = void 0 === c ? ac : c;
  if (null != a) {
    if (Cb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
    if (Array.isArray(a)) {
      var d = F(a);
      if (d & 2) return a;
      sc(a);
      b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
      return b ? (G(a, (d | 34) & -12293), a) : Uc(a, Wc, d & 4 ? ac : c, !0, !1, !0);
    }
    ec(a) && (z(ec(a)), (c = a.u), (d = K(c)), (a = d & 2 ? a : Mc(a.constructor, Xc(c, d, !0))));
    return a;
  }
}
function Xc(a, b, c) {
  var d = c || b & 2 ? ac : $b,
    e = !!(b & 32);
  a = Sc(a, b, function (f) {
    return Wc(f, e, d);
  });
  Tb(a, 32 | (c ? 2 : 0));
  return a;
}
function Yc(a) {
  var b = a.u,
    c = K(b);
  return c & 2 ? Mc(a.constructor, Xc(b, c, !1)) : a;
}
var Zc = Object.freeze({});
function M(a, b) {
  a = a.u;
  return $c(a, K(a), b);
}
function $c(a, b, c, d) {
  if (-1 === c) return null;
  if (c >= Wb(b)) {
    if (b & 256) return a[a.length - 1][c];
  } else {
    var e = a.length;
    if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
    b = hc(c, +!!(b & 512) - 1);
    if (b < e) return a[b];
  }
}
function ad(a, b, c) {
  var d = a.u,
    e = K(d);
  qc(e);
  bd(d, e, b, c);
  return a;
}
function bd(a, b, c, d) {
  z(!jc(d), "Invalid object passed to a setter");
  var e = Wb(b);
  if (c >= e) {
    z(536870912 !== e);
    var f = b;
    if (b & 256) e = a[a.length - 1];
    else {
      if (null == d) return f;
      e = hc(e, +!!(b & 512) - 1);
      z(
        e >= a.length && Number.isInteger(e) && 4294967295 > e,
        "Expected sparseObjectIndex (%s) to be >= %s and a valid array index",
        e,
        a.length
      );
      e = a[e] = {};
      f |= 256;
    }
    e[c] = d;
    f !== b && G(a, f);
    return f;
  }
  a[hc(c, +!!(b & 512) - 1)] = d;
  b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  return b;
}
function N(a, b, c, d) {
  return void 0 !== cd(a, b, c, void 0 === d ? !1 : d);
}
function dd(a, b) {
  if (!a) return a;
  z(Zb(b) ? Zb(a.u) : !0);
  return a;
}
function ed(a, b, c, d) {
  var e = a.u,
    f = K(e);
  qc(f);
  if (null == c) return bd(e, f, b), a;
  A(c);
  var h = F(c),
    k = h,
    l = !!(2 & h) || Object.isFrozen(c),
    n = !l && !1;
  if (!(4 & h)) {
    h = 21;
    l && ((c = Qb(c)), (k = 0), (h = fd(h, f, !0)));
    l = !!(4 & h) && !!(4096 & h);
    for (var u = 0; u < c.length; u++) c[u] = d(c[u], l);
  }
  n && (h = I(h, 2, !0));
  h !== k && G(c, h);
  n && Object.freeze(c);
  sc(c);
  bd(e, f, b, c);
  return a;
}
function gd(a, b, c) {
  a = a.u;
  var d = K(a);
  qc(d);
  var e = $c(a, d, c);
  b = Yc(Jc(e, b, !0, d));
  e !== b && bd(a, d, c, b);
  return b;
}
function cd(a, b, c, d) {
  a = a.u;
  var e = K(a);
  d = $c(a, e, c, d);
  b = Jc(d, b, !1, e);
  b !== d && null != b && bd(a, e, c, b);
  return dd(b, a);
}
function O(a, b, c, d) {
  b = cd(a, b, c, void 0 === d ? !1 : d);
  if (null == b) return b;
  a = a.u;
  d = K(a);
  if (!(d & 2)) {
    var e = Yc(b);
    e !== b && ((b = e), bd(a, d, c, b));
  }
  return dd(b, a);
}
function hd(a, b, c) {
  var d = void 0 === d ? 2 : d;
  a = a.u;
  var e = K(a),
    f = !!(2 & e),
    h = e;
  e = f ? 1 : d;
  f = !f;
  var k = !!(2 & h);
  d = 1 === e;
  e = 2 === e;
  var l = k && e;
  z(!l, "returnType must be FROZEN for immutable messages");
  z(!(k && f));
  var n = h;
  z(!0);
  k = n & 2;
  h = $c(a, n, c);
  Array.isArray(h) || (h = oc);
  var u = !!(n & 32);
  n = F(h);
  0 === n && u && !k ? ((n |= 33), G(h, n)) : n & 1 || ((n |= 1), G(h, n));
  k && ((k = !1), n & 2 || (Tb(h, 34), (k = !!(4 & n))), k && Object.freeze(h));
  k = h;
  h = K(a);
  var q = F(k),
    y = !!(2 & q);
  n = !!(4 & q);
  u = !!(32 & q);
  var p = (y && n) || !!(2048 & q);
  if (!n) {
    var x = k,
      E = h,
      H = !!(2 & q);
    H && (E = I(E, 2, !0));
    for (var J = !H, qa = !0, Aa = 0, qe = 0; Aa < x.length; Aa++) {
      var re = Jc(x[Aa], b, !1, E);
      if (re instanceof b) {
        if (!H) {
          var Gg = Zb(re.u);
          J && (J = !Gg);
          qa && (qa = Gg);
        }
        x[qe++] = re;
      }
    }
    qe < Aa && (x.length = qe);
    q = I(q, 4, !0);
    q = I(q, 16, qa);
    q = I(q, 8, J);
    G(x, q);
    y && !l && (Object.freeze(k), (p = !0));
  }
  b = q;
  l = !!(8 & q) || (d && !k.length);
  if (f && !l) {
    p && ((k = Qb(k)), (p = !1), (b = 0), (q = fd(q, h, !1)), (h = bd(a, h, c, k)));
    f = k;
    l = q;
    for (y = 0; y < f.length; y++) (x = f[y]), (q = Yc(x)), x !== q && (f[y] = q);
    l = I(l, 8, !0);
    q = l = I(l, 16, !f.length);
  }
  z(!p || q === b);
  p ||
    (d ? (q = I(q, !k.length || (16 & q && (!n || u)) ? 2 : 2048, !0)) : (q = I(q, 32, !1)),
    q !== b && G(k, q),
    d && (Object.freeze(k), (p = !0)));
  e && p && ((k = Qb(k)), (q = fd(q, h, !1)), G(k, q), bd(a, h, c, k));
  c = k;
  d = e;
  d = void 0 === d ? !1 : d;
  e = Zb(a);
  b = Zb(c);
  h = Object.isFrozen(c) && b;
  f = d;
  f = void 0 === f ? !1 : f;
  var Ya = void 0 === Ya ? !1 : Ya;
  sc(c, f);
  f || (Ya || z(Object.isFrozen(c) || !(F(c) & 32)), z(Zb(a) ? Object.isFrozen(c) : !0));
  if (e || b) d ? z(b) : z(h);
  z(!!(F(c) & 4));
  if (b && c.length) for (Ya = 0; 1 > Ya; Ya++) dd(c[Ya], a);
  return c;
}
function P(a, b, c, d) {
  null != d ? Ic(d, Pa(b)) : (d = void 0);
  return ad(a, c, d);
}
function id(a, b, c, d) {
  var e = a.u,
    f = K(e);
  qc(f);
  if (null == d) return bd(e, f, c), a;
  A(d);
  var h = F(d),
    k = h,
    l = !!(2 & h) || !!(2048 & h);
  z(!l || Object.isFrozen(d));
  for (var n = l || Object.isFrozen(d), u = !n && !1, q = !0, y = !0, p = 0; p < d.length; p++) {
    var x = d[p];
    Ic(x, Pa(b));
    l || ((x = Zb(x.u)), q && (q = !x), y && (y = x));
  }
  l ||
    ((h = I(h, 5, !0)),
    (h = I(h, 8, q)),
    (h = I(h, 16, y)),
    u && (h = I(h, y ? 2 : 2048, !0)),
    h !== k && (n && ((d = Qb(d)), (h = fd(h, f, !0))), G(d, h)),
    u && Object.freeze(d));
  sc(d);
  bd(e, f, c, d);
  return a;
}
function fd(a, b, c) {
  a = I(a, 2, !!(2 & b));
  a = I(a, 32, !!(32 & b) && c);
  return (a = I(a, 2048, !1));
}
function Q(a, b) {
  a = M(a, b);
  null != a &&
    (L(a)
      ? "number" === typeof a
        ? (a = Ec(a))
        : (Sa(a),
          z(L(a)),
          z(!0),
          (b = Math.trunc(Number(a))),
          Number.isSafeInteger(b) ? (a = b) : ((a = Cc(a)), (b = Number(a)), (a = Number.isSafeInteger(b) ? b : a)))
      : (a = void 0));
  return a;
}
function jd(a) {
  a = M(a, 1);
  null != a && (L(a) ? ("string" === typeof a ? (a = Cc(a)) : (Ra(a), (a = Dc(a)))) : (a = void 0));
  return a;
}
function kd(a, b) {
  a = M(a, b);
  return null == a || "string" === typeof a ? a : void 0;
}
function ld(a, b) {
  a = M(a, b);
  return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
}
function md(a, b) {
  return null != a ? a : b;
}
function nd(a) {
  null == a
    ? (a = mc(a))
    : "string" === typeof a
    ? (Sa(a), (a = a ? new Hb(a, Fb) : Gb || (Gb = new Hb(null, Fb))))
    : a.constructor !== Hb &&
      (Cb && null != a && a instanceof Uint8Array
        ? (z(a instanceof Uint8Array || Array.isArray(a)), (a = a.length ? new Hb(new Uint8Array(a), Fb) : Gb || (Gb = new Hb(null, Fb))))
        : (a = mc(a)));
  return a;
}
function od(a, b) {
  var c = void 0 === c ? 0 : c;
  return md(Q(a, b), c);
}
function pd(a, b) {
  a = Q(a, b);
  return null == a ? void 0 : a;
}
function qd(a, b, c) {
  if (null != c) {
    if ("boolean" !== typeof c) throw Error("Expected boolean but got " + w(c) + ": " + c);
    c = !!c;
  }
  ad(a, b, c);
}
function rd(a, b, c) {
  return ad(a, b, null == c ? c : zc(c));
}
function R(a, b, c) {
  return ad(a, b, Bc(c));
}
function sd(a, b, c) {
  if (null != c && "string" !== typeof c) throw Error("Expected a string or null or undefined but got " + c + " a " + w(c));
  return ad(a, b, c);
}
function S(a, b, c) {
  if (null != c) {
    if (!Number.isFinite(c)) throw uc("Expected enum as finite number but got " + w(c) + ": " + c);
    c |= 0;
  }
  return ad(a, b, c);
}
if ("undefined" !== typeof Proxy) {
  var ud = td;
  new Proxy(
    {},
    {
      getPrototypeOf: ud,
      setPrototypeOf: ud,
      isExtensible: ud,
      preventExtensions: ud,
      getOwnPropertyDescriptor: ud,
      defineProperty: ud,
      has: ud,
      get: ud,
      set: ud,
      deleteProperty: ud,
      apply: ud,
      construct: ud
    }
  );
}
function td() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function vd(a, b, c) {
  Ua(this, vd, "The message constructor should only be used by subclasses");
  z(this.constructor !== vd, "Message is an abstract class and cannot be directly constructed");
  a: {
    null == a && (a = Lc);
    Lc = void 0;
    if (null != a)
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        Array.isArray(e) && sc(e);
      }
    if (null == a) (d = 96), c ? ((a = [c]), (d |= 512)) : (a = []), b && (d = bc(d, b));
    else {
      if (!Array.isArray(a)) throw Error("data passed to JSPB constructors must be an Array, got '" + JSON.stringify(a) + "' a " + w(a));
      if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
        throw Error("data passed to JSPB constructors must be mutable");
      d = F(a);
      if (d & 64) {
        Xb(a, d);
        break a;
      }
      d |= 64;
      if (c && ((d |= 512), c !== a[0]))
        throw Error(
          'Expected message to have a message id: "' +
            c +
            '" in the array, got: ' +
            JSON.stringify(a[0]) +
            " a " +
            w(a[0]) +
            ", are you parsing with the wrong proto?"
        );
      b: {
        c = d;
        if ((d = a.length))
          if (((e = d - 1), jc(a[e]))) {
            c |= 256;
            b = ic(e, +!!(c & 512) - 1);
            if (1024 <= b) throw Error("Found a message with a sparse object at fieldNumber " + b + " is >= the limit 1024");
            d = bc(c, b);
            break b;
          }
        if (b) {
          b = Math.max(b, ic(d, +!!(c & 512) - 1));
          if (1024 < b)
            throw Error(
              "a message was constructed with an array of length " + d + " which is longer than 1024, are you using a supported serializer?"
            );
          d = bc(c, b);
        } else d = c;
      }
    }
    G(a, d);
    z(d & 64);
  }
  this.u = a;
  this.preventPassingToStructuredClone = rc;
}
g = vd.prototype;
g.toJSON = function () {
  if (kc) var a = wd(this, this.u, !1);
  else (a = this.u), A(a), (a = Uc(a, Vc, void 0, void 0, !1, !1)), (a = wd(this, a, !0));
  return a;
};
g.A = function () {
  kc = !0;
  try {
    return JSON.stringify(this.toJSON(), Qc);
  } finally {
    kc = !1;
  }
};
g.getExtension = function (a) {
  Ua(this, a.Me);
  var b = Ua(this, vd);
  b = a.Va
    ? a.Fb(b, a.Va, a.cb, !0, void 0 !== Zc ? 1 : 2)
    : a.Ac
    ? a.Fb(b, a.cb, !0, void 0 !== Zc ? 1 : 2)
    : a.Fb(b, a.cb, a.defaultValue, !0);
  return a.sg && null == b ? a.defaultValue : b;
};
function xd(a, b) {
  z(!b.Ac, "repeated extensions don't support getExtensionOrUndefined");
  Ua(a, b.Me);
  a = Ua(a, vd);
  b = b.Va ? b.Fb(a, b.Va, b.cb, !0) : b.Fb(a, b.cb, null, !0);
  return null === b ? void 0 : b;
}
g.hasExtension = function (a) {
  z(!a.Ac, "repeated extensions don't support hasExtension");
  return a.Va ? N(this, a.Va, a.cb, !0) : void 0 !== xd(this, a);
};
g.clone = function () {
  var a = Ua(this, vd);
  z(ec(a));
  var b = a.u,
    c = K(b);
  return Mc(a.constructor, Xc(b, c, !1));
};
cc = vd;
vd.prototype.yg = dc;
vd.prototype.toString = function () {
  return wd(this, this.u, !1).toString();
};
function wd(a, b, c) {
  var d = a.constructor.fa,
    e = K(c ? a.u : b),
    f = Wb(e),
    h = !1;
  if (d && lc) {
    if (!c) {
      b = Qb(b);
      var k;
      if (b.length && jc((k = b[b.length - 1])))
        for (h = 0; h < d.length; h++)
          if (d[h] >= f) {
            Object.assign((b[b.length - 1] = {}), k);
            break;
          }
      h = !0;
    }
    f = b;
    c = !c;
    k = K(a.u);
    a = Wb(k);
    k = +!!(k & 512) - 1;
    for (var l, n, u = 0; u < d.length; u++)
      if (((n = d[u]), n < a)) {
        n = hc(n, k);
        var q = f[n];
        null == q ? (f[n] = c ? oc : Yb()) : c && q !== oc && Ub(q);
      } else
        l || ((q = void 0), f.length && jc((q = f[f.length - 1])) ? (l = q) : f.push((l = {}))),
          (q = l[n]),
          null == l[n] ? (l[n] = c ? oc : Yb()) : c && q !== oc && Ub(q);
  }
  l = b.length;
  if (!l) return b;
  var y;
  if (jc((f = b[l - 1]))) {
    a: {
      var p = f;
      c = {};
      a = !1;
      for (var x in p) {
        k = p[x];
        if (Array.isArray(k)) {
          u = k;
          if (nc(k, d, +x) || gc(k)) k = null;
          k != u && (a = !0);
        }
        null != k ? (c[x] = k) : (a = !0);
      }
      if (a) {
        for (var E in c) {
          p = c;
          break a;
        }
        p = null;
      }
    }
    p != f && (y = !0);
    l--;
  }
  for (e = +!!(e & 512) - 1; 0 < l; l--) {
    x = l - 1;
    f = b[x];
    if (null != f && !nc(f, d, x - e) && !gc(f)) break;
    var H = !0;
  }
  if (!y && !H) return b;
  b = h ? b : Array.prototype.slice.call(b, 0, l);
  h && (b.length = l);
  p && b.push(p);
  return b;
}
function yd(a) {
  if (a instanceof vd) return a.constructor.i;
}
(function () {
  var a = v.jspbGetTypeName;
  v.jspbGetTypeName = a
    ? function (b) {
        return a(b) || yd(b);
      }
    : yd;
})();
var T = vd;
function zd(a) {
  T.call(this, a);
}
t(zd, T);
zd.i = "experiments.heterodyne.ExperimentIds";
zd.fa = [2];
function Ad(a) {
  if (!a) return "";
  if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
  a.startsWith("blob:") && (a = a.substring(5));
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf("://") + 3),
    c = b.indexOf("/");
  -1 != c && (b = b.substring(0, c));
  c = a.substring(0, a.indexOf("://"));
  if (!c) throw Error("URI is missing protocol: " + a);
  if (
    "http" !== c &&
    "https" !== c &&
    "chrome-extension" !== c &&
    "moz-extension" !== c &&
    "file" !== c &&
    "android-app" !== c &&
    "chrome-search" !== c &&
    "chrome-untrusted" !== c &&
    "chrome" !== c &&
    "app" !== c &&
    "devtools" !== c
  )
    throw Error("Invalid URI scheme in origin: " + c);
  a = "";
  var d = b.indexOf(":");
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if (("http" === c && "80" !== e) || ("https" === c && "443" !== e)) a = ":" + e;
  }
  return c + "://" + b + a;
}
globalThis.$J2CL_PRESERVE$ = function () {};
function Bd() {}
Bd.prototype.Fa = function (a) {
  return Object.is(this, a) || (null == this && null == a);
};
Bd.prototype.Ye = function () {
  return this.se || (Object.defineProperties(this, { se: { value: (Cd = (Cd + 1) | 0), enumerable: !1 } }), this.se);
};
Bd.prototype.toString = function () {
  var a = Dd(Ed(Fd(this.constructor))) + "@";
  var b = (this.Ye() >>> 0).toString(16);
  return a + Dd(b);
};
Bd.prototype.ra = ["java.lang.Object", 0];
function Gd(a, b) {
  this.o = a | 0;
  this.j = b | 0;
}
function Hd(a) {
  return 4294967296 * a.j + (a.o >>> 0);
}
g = Gd.prototype;
g.isSafeInteger = function () {
  var a = this.j >> 21;
  return 0 == a || (-1 == a && !(0 == this.o && -2097152 == this.j));
};
g.toString = function (a) {
  a = a || 10;
  if (2 > a || 36 < a) throw Error("radix out of range: " + a);
  if (this.isSafeInteger()) {
    var b = Hd(this);
    return 10 == a ? "" + b : b.toString(a);
  }
  b = 14 - (a >> 2);
  var c = Math.pow(a, b),
    d = U(c, c / 4294967296);
  c = Id(this, d);
  var e = Math,
    f = e.abs;
  d = c.multiply(d);
  d = this.add(Jd(d));
  e = f.call(e, Hd(d));
  f = 10 == a ? "" + e : e.toString(a);
  f.length < b && (f = "0000000000000".slice(f.length - b) + f);
  e = Hd(c);
  return (10 == a ? e : e.toString(a)) + f;
};
function Kd(a) {
  return 0 == a.o && 0 == a.j;
}
g.Ye = function () {
  return this.o ^ this.j;
};
g.Fa = function (a) {
  return this.o == a.o && this.j == a.j;
};
g.compare = function (a) {
  return this.j == a.j ? (this.o == a.o ? 0 : this.o >>> 0 > a.o >>> 0 ? 1 : -1) : this.j > a.j ? 1 : -1;
};
function Jd(a) {
  var b = (~a.o + 1) | 0;
  return U(b, (~a.j + !b) | 0);
}
g.add = function (a) {
  var b = this.j >>> 16,
    c = this.j & 65535,
    d = this.o >>> 16,
    e = a.j >>> 16,
    f = a.j & 65535,
    h = a.o >>> 16;
  a = (this.o & 65535) + (a.o & 65535);
  h = (a >>> 16) + (d + h);
  d = h >>> 16;
  d += c + f;
  return U(((h & 65535) << 16) | (a & 65535), ((((d >>> 16) + (b + e)) & 65535) << 16) | (d & 65535));
};
g.multiply = function (a) {
  if (Kd(this)) return this;
  if (Kd(a)) return a;
  var b = this.j >>> 16,
    c = this.j & 65535,
    d = this.o >>> 16,
    e = this.o & 65535,
    f = a.j >>> 16,
    h = a.j & 65535,
    k = a.o >>> 16;
  a = a.o & 65535;
  var l = e * a;
  var n = (l >>> 16) + d * a;
  var u = n >>> 16;
  n = (n & 65535) + e * k;
  u += n >>> 16;
  u += c * a;
  var q = u >>> 16;
  u = (u & 65535) + d * k;
  q += u >>> 16;
  u = (u & 65535) + e * h;
  q = (q + (u >>> 16) + (b * a + c * k + d * h + e * f)) & 65535;
  return U(((n & 65535) << 16) | (l & 65535), (q << 16) | (u & 65535));
};
function Id(a, b) {
  if (Kd(b)) throw Error("division by zero");
  if (0 > a.j) {
    if (a.Fa(Ld)) {
      if (b.Fa(Md) || b.Fa(Nd)) return Ld;
      if (b.Fa(Ld)) return Md;
      var c = a.j;
      c = U((a.o >>> 1) | (c << 31), c >> 1);
      c = Id(c, b).shiftLeft(1);
      if (c.Fa(Od)) return 0 > b.j ? Md : Nd;
      var d = b.multiply(c);
      a = a.add(Jd(d));
      return c.add(Id(a, b));
    }
    return 0 > b.j ? Id(Jd(a), Jd(b)) : Jd(Id(Jd(a), b));
  }
  if (Kd(a)) return Od;
  if (0 > b.j) return b.Fa(Ld) ? Od : Jd(Id(a, Jd(b)));
  for (d = Od; 0 <= a.compare(b); ) {
    c = Math.max(1, Math.floor(Hd(a) / Hd(b)));
    var e = Math.ceil(Math.log(c) / Math.LN2);
    e = 48 >= e ? 1 : Math.pow(2, e - 48);
    for (var f = Pd(c), h = f.multiply(b); 0 > h.j || 0 < h.compare(a); ) (c -= e), (f = Pd(c)), (h = f.multiply(b));
    Kd(f) && (f = Md);
    d = d.add(f);
    a = a.add(Jd(h));
  }
  return d;
}
g.and = function (a) {
  return U(this.o & a.o, this.j & a.j);
};
g.or = function (a) {
  return U(this.o | a.o, this.j | a.j);
};
g.xor = function (a) {
  return U(this.o ^ a.o, this.j ^ a.j);
};
g.shiftLeft = function (a) {
  a &= 63;
  if (0 == a) return this;
  var b = this.o;
  return 32 > a ? U(b << a, (this.j << a) | (b >>> (32 - a))) : U(0, b << (a - 32));
};
function Qd(a, b) {
  b &= 63;
  if (0 == b) return a;
  var c = a.j;
  return 32 > b ? U((a.o >>> b) | (c << (32 - b)), c >>> b) : 32 == b ? U(c, 0) : U(c >>> (b - 32), 0);
}
function V(a) {
  var b = a | 0;
  z(a === b, "value should be a 32-bit integer");
  return -128 <= b && 128 > b ? Rd(b) : new Gd(b, 0 > b ? -1 : 0);
}
function Pd(a) {
  return 0 < a
    ? 0x7fffffffffffffff <= a
      ? Sd
      : new Gd(a, a / 4294967296)
    : 0 > a
    ? -0x7fffffffffffffff >= a
      ? Ld
      : Jd(new Gd(-a, -a / 4294967296))
    : Od;
}
function U(a, b) {
  return new Gd(a, b);
}
function Td(a, b) {
  if ("-" == a.charAt(0)) return Jd(Td(a.substring(1), b));
  var c = parseInt(a, b || 10);
  if (9007199254740991 >= c) return new Gd(c % 4294967296 | 0, (c / 4294967296) | 0);
  if (0 == a.length) throw Error("number format error: empty string");
  if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character: ' + a);
  b = b || 10;
  if (2 > b || 36 < b) throw Error("radix out of range: " + b);
  c = Pd(Math.pow(b, 8));
  for (var d = Od, e = 0; e < a.length; e += 8) {
    var f = Math.min(8, a.length - e),
      h = parseInt(a.substring(e, e + f), b);
    8 > f ? (d = d.multiply(Pd(Math.pow(b, f))).add(Pd(h))) : ((d = d.multiply(c)), (d = d.add(Pd(h))));
  }
  return d;
}
var Ud = {};
function Rd(a) {
  return qb(Ud, a, function (b) {
    return new Gd(b, 0 > b ? -1 : 0);
  });
}
var Od = U(0, 0),
  Md = U(1, 0),
  Nd = U(-1, -1),
  Sd = U(4294967295, 2147483647),
  Ld = U(0, 2147483648);
V(0);
var Cd = 0;
function Dd(a) {
  return null == a ? "null" : a.toString();
}
function Vd(a, b) {
  this.bb = a;
  this.nc = b;
}
t(Vd, Bd);
function Ed(a) {
  if (0 != a.nc) {
    var b = 3 == a.bb.prototype.ra[1] ? a.bb.prototype.ra[2] : "L" + Dd(a.bb.prototype.ra[0]) + ";";
    a = a.nc;
    for (var c = "", d = 0; d < a; d = (d + 1) | 0) c = Dd(c) + "[";
    return Dd(c) + Dd(b);
  }
  return a.bb.prototype.ra[0];
}
Vd.prototype.toString = function () {
  return (
    String(0 == this.nc && 1 == this.bb.prototype.ra[1] ? "interface " : 0 == this.nc && 3 == this.bb.prototype.ra[1] ? "" : "class ") +
    Dd(Ed(this))
  );
};
Vd.prototype.ra = ["java.lang.Class", 0];
function Fd(a) {
  return qb(a.prototype, "$$class/0", function () {
    return new Vd(a, 0);
  });
}
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(1);
V(0);
V(1);
V(0);
V(0);
V(1);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(1);
V(0);
V(1);
V(0);
V(-889275714);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
V(0);
function Wd() {
  this.jg = new Xd();
}
t(Wd, Bd);
Wd.prototype.N = function () {
  return this.jg;
};
Wd.prototype.ra = ["com.google.apps.docs.xplat.diagnostics.impressions.DocsAppLoadInvariantsBuilder", 0];
function Yd(a) {
  T.call(this, a);
}
t(Yd, T);
Yd.i = "docs.diagnostics.impressions.impressiondetails.NetworkDetails";
function Xd(a) {
  T.call(this, a);
}
t(Xd, T);
Xd.prototype.getNetworkDetails = function () {
  return O(this, Yd, 72);
};
Xd.i = "docs.diagnostics.impressions.sessioninvariants.DocsAppLoadInvariants";
Xd.fa = [90, 91, 125, 93, 103, 155, 123, 139];
function Zd(a) {
  T.call(this, a);
}
t(Zd, T);
Zd.prototype.Of = function (a) {
  qd(this, 1, a);
};
Zd.prototype.Pf = function (a) {
  qd(this, 2, a);
};
Zd.i = "docs.diagnostics.impressions.impressiondetails.DocsCommonDetails.AccessState";
function $d(a) {
  T.call(this, a);
}
t($d, T);
$d.i = "docs.diagnostics.impressions.impressiondetails.PerformanceEntryTiming";
function ae(a) {
  T.call(this, a);
}
t(ae, T);
g = ae.prototype;
g.Te = function () {
  return wc(M(this, 12));
};
g.Nf = function (a) {
  qd(this, 12, a);
};
g.We = function () {
  return null != wc(M(this, 12));
};
g.Qe = function () {
  return O(this, Zd, 20);
};
g.Gf = function (a) {
  P(this, Zd, 20, a);
};
ae.i = "docs.diagnostics.impressions.impressiondetails.DocsCommonDetails";
ae.fa = [3, 42];
var be = {
  Og: "n_amt",
  Pg: "n_afoiu",
  Qg: "n_age",
  Rg: "n_k",
  Sg: "n_ars",
  Tg: "n_s",
  Ug: "n_ss",
  Vg: "n_ats",
  Wg: "n_atas",
  Yg: "n_bi",
  Zg: "n_bl",
  ah: "n_cajct",
  bh: "n_cajstm",
  eh: "n_ccd",
  fh: "n_cc",
  gh: "n_c",
  hh: "n_cp",
  ih: "n_csbs",
  kh: "n_dt",
  mh: "n_dlis",
  nh: "n_deau",
  oh: "n_detl",
  ph: "n_eau",
  qh: "n_ecs",
  rh: "n_ecmv3m",
  sh: "n_ecil",
  th: "n_ecpde",
  uh: "n_edmp",
  vh: "n_edtt",
  wh: "n_edlh",
  xh: "n_efab",
  yh: "n_eh",
  zh: "n_eil",
  Ah: "n_eliw",
  Bh: "n_eml",
  Ch: "n_emv2dm",
  Dh: "n_eod",
  Eh: "n_eoros",
  Fh: "n_ep",
  Gh: "n_eqwv",
  Ih: "n_ei",
  Jh: "n_fpae",
  Rh: "n_hak",
  Sh: "n_imb",
  Th: "n_imp",
  Wh: "n_iup",
  Vh: "n_iltrup",
  bi: "n_j",
  ci: "n_kud",
  di: "n_lcu",
  fi: "n_mpak",
  gi: "n_mpau",
  li: "n_nmri",
  ji: "n_nib",
  ki: "n_nmb",
  ni: "n_npd",
  oi: "n_npv",
  pi: "n_oe",
  ti: "n_pau",
  yi: "n_rs",
  Ai: "n_rau",
  Bi: "n_ses",
  Ci: "n_scp",
  Fi: "n_sit",
  Gi: "n_t",
  Ki: "n_ton",
  Hi: "n_tak",
  Ji: "n_tipe",
  Ii: "n_tbti",
  Li: "n_taau",
  Mi: "n_tcu",
  Ni: "n_tcur",
  Qi: "n_tms",
  Pi: "n_the",
  Si: "n_ur",
  Ti: "n_uptc",
  Uh: "n_ugat",
  Xi: "n_uo",
  Wi: "n_ui",
  Ui: "n_ue",
  Vi: "n_ugs",
  Yi: "n_wfp",
  Zi: "n_wcv"
};
function ce() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    u = n = 0;
  }
  function b(q) {
    for (var y = h, p = 0; 64 > p; p += 4) y[p / 4] = (q[p] << 24) | (q[p + 1] << 16) | (q[p + 2] << 8) | q[p + 3];
    for (p = 16; 80 > p; p++) (q = y[p - 3] ^ y[p - 8] ^ y[p - 14] ^ y[p - 16]), (y[p] = ((q << 1) | (q >>> 31)) & 4294967295);
    q = e[0];
    var x = e[1],
      E = e[2],
      H = e[3],
      J = e[4];
    for (p = 0; 80 > p; p++) {
      if (40 > p)
        if (20 > p) {
          var qa = H ^ (x & (E ^ H));
          var Aa = 1518500249;
        } else (qa = x ^ E ^ H), (Aa = 1859775393);
      else 60 > p ? ((qa = (x & E) | (H & (x | E))), (Aa = 2400959708)) : ((qa = x ^ E ^ H), (Aa = 3395469782));
      qa = ((((q << 5) | (q >>> 27)) & 4294967295) + qa + J + Aa + y[p]) & 4294967295;
      J = H;
      H = E;
      E = ((x << 30) | (x >>> 2)) & 4294967295;
      x = q;
      q = qa;
    }
    e[0] = (e[0] + q) & 4294967295;
    e[1] = (e[1] + x) & 4294967295;
    e[2] = (e[2] + E) & 4294967295;
    e[3] = (e[3] + H) & 4294967295;
    e[4] = (e[4] + J) & 4294967295;
  }
  function c(q, y) {
    if ("string" === typeof q) {
      q = unescape(encodeURIComponent(q));
      for (var p = [], x = 0, E = q.length; x < E; ++x) p.push(q.charCodeAt(x));
      q = p;
    }
    y || (y = q.length);
    p = 0;
    if (0 == n) for (; p + 64 < y; ) b(q.slice(p, p + 64)), (p += 64), (u += 64);
    for (; p < y; ) if (((f[n++] = q[p++]), u++, 64 == n)) for (n = 0, b(f); p + 64 < y; ) b(q.slice(p, p + 64)), (p += 64), (u += 64);
  }
  function d() {
    var q = [],
      y = 8 * u;
    56 > n ? c(k, 56 - n) : c(k, 64 - (n - 56));
    for (var p = 63; 56 <= p; p--) (f[p] = y & 255), (y >>>= 8);
    b(f);
    for (p = y = 0; 5 > p; p++) for (var x = 24; 0 <= x; x -= 8) q[y++] = (e[p] >> x) & 255;
    return q;
  }
  for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
  var n, u;
  a();
  return {
    reset: a,
    update: c,
    digest: d,
    digestString: function () {
      for (var q = d(), y = "", p = 0; p < q.length; p++)
        y += "0123456789ABCDEF".charAt(Math.floor(q[p] / 16)) + "0123456789ABCDEF".charAt(q[p] % 16);
      return y;
    }
  };
}
function de(a, b, c) {
  var d = String(v.location.href);
  return d && a && b ? [b, ee(Ad(d), a, c || null)].join(" ") : null;
}
function ee(a, b, c) {
  var d = [],
    e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return (
      (e = [b, a]),
      ib(d, function (k) {
        e.push(k);
      }),
      fe(e.join(" "))
    );
  var f = [],
    h = [];
  ib(c, function (k) {
    h.push(k.key);
    f.push(k.value);
  });
  c = Math.floor(new Date().getTime() / 1e3);
  e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
  ib(d, function (k) {
    e.push(k);
  });
  a = fe(e.join(" "));
  a = [c, a];
  0 == h.length || a.push(h.join(""));
  return a.join("_");
}
function fe(a) {
  var b = ce();
  b.update(a);
  return b.digestString().toLowerCase();
}
var ge = {};
function he() {}
function ie(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function je(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function ke(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
function le(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b;
}
var me = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ne(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < me.length; f++) (c = me[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
var oe;
function pe(a) {
  if (se !== se) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.zf = a;
}
pe.prototype.toString = function () {
  return this.zf + "";
};
pe.prototype.Kb = !0;
pe.prototype.Ib = function () {
  return this.zf.toString();
};
var se = {};
function te(a) {
  if (void 0 === oe) {
    var b = null;
    var c = v.trustedTypes;
    if (c && c.createPolicy)
      try {
        b = c.createPolicy("goog#html", { createHTML: Ka, createScript: Ka, createScriptURL: Ka });
      } catch (d) {
        v.console && v.console.error(d.message);
      }
    oe = b;
  }
  a = (b = oe) ? b.createScriptURL(a) : a;
  return new pe(a);
}
function ue(a, b) {
  if (b !== ve) throw Error("SafeUrl is not meant to be built directly");
  this.Ld = a;
}
ue.prototype.toString = function () {
  return this.Ld.toString();
};
ue.prototype.Kb = !0;
ue.prototype.Ib = function () {
  return this.Ld.toString();
};
var ve = {},
  we = new ue("about:invalid#zClosurez", ve);
new ue("about:blank", ve);
var xe = {};
function ye() {
  if (xe !== xe) throw Error("SafeStyle is not meant to be built directly");
  this.yf = "";
  this.Kb = !0;
}
ye.prototype.Ib = function () {
  return this.yf;
};
ye.prototype.toString = function () {
  return this.yf.toString();
};
new ye();
var ze = {};
function Ae() {
  if (ze !== ze) throw Error("SafeStyleSheet is not meant to be built directly");
  this.xf = "";
  this.Kb = !0;
}
Ae.prototype.toString = function () {
  return this.xf.toString();
};
Ae.prototype.Ib = function () {
  return this.xf;
};
new Ae();
var Be = {};
function Ce() {
  var a = (v.trustedTypes && v.trustedTypes.emptyHTML) || "";
  if (Be !== Be) throw Error("SafeHtml is not meant to be built directly");
  this.wf = a;
  this.Kb = !0;
}
Ce.prototype.Ib = function () {
  return this.wf.toString();
};
Ce.prototype.toString = function () {
  return this.wf.toString();
};
new Ce();
function De(a) {
  return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
    return c + d.toUpperCase();
  });
}
function Ee() {
  this.D = document || { cookie: "" };
}
g = Ee.prototype;
g.isEnabled = function () {
  if (!v.navigator.cookieEnabled) return !1;
  if (!this.Ad()) return !0;
  this.set("TESTCOOKIESENABLED", "1", { maxAge: 60 });
  if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
  this.remove("TESTCOOKIESENABLED");
  return !0;
};
g.set = function (a, b, c) {
  var d = !1;
  if ("object" === typeof c) {
    var e = c.sameSite;
    d = c.secure || !1;
    var f = c.domain || void 0;
    var h = c.path || void 0;
    var k = c.maxAge;
  }
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === k && (k = -1);
  this.D.cookie =
    a +
    "=" +
    b +
    (f ? ";domain=" + f : "") +
    (h ? ";path=" + h : "") +
    (0 > k ? "" : 0 == k ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1e3 * k).toUTCString()) +
    (d ? ";secure" : "") +
    (null != e ? ";samesite=" + e : "");
};
g.get = function (a, b) {
  for (var c = a + "=", d = (this.D.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
    f = Xa(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
    if (f == a) return "";
  }
  return b;
};
g.remove = function (a, b, c) {
  var d = this.jc(a);
  this.set(a, "", { maxAge: 0, path: b, domain: c });
  return d;
};
g.Gb = function () {
  return Fe(this).keys;
};
g.ua = function () {
  return Fe(this).values;
};
g.Ad = function () {
  return !this.D.cookie;
};
g.Eb = function () {
  return this.D.cookie ? (this.D.cookie || "").split(";").length : 0;
};
g.jc = function (a) {
  return void 0 !== this.get(a);
};
g.clear = function () {
  for (var a = Fe(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
};
function Fe(a) {
  a = (a.D.cookie || "").split(";");
  for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
    (e = Xa(a[f])), (d = e.indexOf("=")), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  return { keys: b, values: c };
}
function Ge(a) {
  return !!ge.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
}
function He(a, b, c, d) {
  (a = v[a]) || "undefined" === typeof document || (a = new Ee().get(b));
  return a ? de(a, c, d) : null;
}
function Ie(a, b) {
  b = void 0 === b ? !1 : b;
  var c = Ad(String(v.location.href)),
    d = [];
  var e = b;
  e = void 0 === e ? !1 : e;
  var f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__OVERRIDE_SID;
  Ge(e) && (f = f || v.__1PSAPISID);
  if (f) e = !0;
  else {
    if ("undefined" !== typeof document) {
      var h = new Ee();
      f = h.get("SAPISID") || h.get("APISID") || h.get("__Secure-3PAPISID") || h.get("SID") || h.get("OSID");
      Ge(e) && (f = f || h.get("__Secure-1PAPISID"));
    }
    e = !!f;
  }
  e &&
    ((e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"))
      ? v.__SAPISID
      : v.__APISID),
    e || "undefined" === typeof document || ((e = new Ee()), (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
    (e = e ? de(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e),
    c &&
      Ge(b) &&
      ((b = He("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
      (a = He("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
  return 0 == d.length ? null : d.join(" ");
}
function Je() {
  this.K = "keep_invariants";
}
Je.prototype.getId = function () {
  return this.K;
};
function Ke() {}
function Le(a, b) {
  this.eg = a;
  this.Uf = b;
}
Le.prototype.qb = function (a) {
  return this.eg.qb(a);
};
function Me() {
  var a = { DEFAULT: 0, DARK: 1 };
  this.C = {};
  this.yc = {};
  if (a) for (var b in a) this.put(b, a[b]);
}
Me.prototype.put = function (a, b) {
  z(void 0 === this.C[a]);
  z(void 0 === this.yc[b]);
  this.C[a] = b;
  this.yc[b] = a;
};
Me.prototype.get = function (a) {
  return this.C[a];
};
Me.prototype.Gb = function () {
  return le(this.C);
};
Me.prototype.remove = function (a) {
  if (void 0 !== this.C[a]) {
    var b = z(this.C[a]);
    z(void 0 !== this.yc[b]);
    delete this.C[a];
    delete this.yc[b];
  }
};
function Ne() {
  this.ue = "";
}
function Oe(a, b, c) {
  chrome.identity.getAuthToken({ interactive: !!b }, function (d) {
    var e = !!b;
    d ? ((a.ue = d), c && c()) : e || Oe(a, !0, c);
  });
}
var Pe =
  Object.freeze ||
  function (a) {
    return a;
  };
function Qe(a) {
  a && "function" == typeof a.ad && a.ad();
}
function W() {
  this.Xa = this.Xa;
  this.Ma = this.Ma;
}
W.prototype.Xa = !1;
W.prototype.isDisposed = function () {
  return this.Xa;
};
W.prototype.ad = function () {
  this.Xa || ((this.Xa = !0), this.v());
};
function X(a, b) {
  b = Ha(Qe, b);
  a.Xa ? b() : (a.Ma || (a.Ma = []), a.Ma.push(b));
}
W.prototype.v = function () {
  if (this.Ma) for (; this.Ma.length; ) this.Ma.shift()();
};
function Re(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Rb = !1;
}
Re.prototype.stopPropagation = function () {
  this.Rb = !0;
};
Re.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var Se = (function () {
  if (!v.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    b = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      }
    });
  try {
    var c = function () {};
    v.addEventListener("test", c, b);
    v.removeEventListener("test", c, b);
  } catch (d) {}
  return a;
})();
function Te(a, b) {
  Re.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.Db = null;
  a && this.init(a, b);
}
Ja(Te, Re);
var Ue = Pe({ 2: "touch", 3: "pen", 4: "mouse" });
Te.prototype.init = function (a, b) {
  var c = (this.type = a.type),
    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (sb) {
      a: {
        try {
          pb(b.nodeName);
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
    : ((this.offsetX = tb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = tb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ue[a.pointerType] || "";
  this.state = a.state;
  this.Db = a;
  a.defaultPrevented && Te.na.preventDefault.call(this);
};
Te.prototype.stopPropagation = function () {
  Te.na.stopPropagation.call(this);
  this.Db.stopPropagation ? this.Db.stopPropagation() : (this.Db.cancelBubble = !0);
};
Te.prototype.preventDefault = function () {
  Te.na.preventDefault.call(this);
  var a = this.Db;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var Ve = "closure_listenable_" + ((1e6 * Math.random()) | 0);
function We(a) {
  return !(!a || !a[Ve]);
}
var Xe = 0;
function Ye(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.uc = e;
  this.key = ++Xe;
  this.removed = this.dc = !1;
}
function Ze(a) {
  a.removed = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.uc = null;
}
function $e(a) {
  this.src = a;
  this.L = {};
  this.ac = 0;
}
g = $e.prototype;
g.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.L[f];
  a || ((a = this.L[f] = []), this.ac++);
  var h = af(a, b, d, e);
  -1 < h ? ((b = a[h]), c || (b.dc = !1)) : ((b = new Ye(b, this.src, f, !!d, e)), (b.dc = c), a.push(b));
  return b;
};
g.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.L)) return !1;
  var e = this.L[a];
  b = af(e, b, c, d);
  return -1 < b
    ? (Ze(e[b]), z(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.L[a], this.ac--), !0)
    : !1;
};
function bf(a, b) {
  var c = b.type;
  c in a.L && lb(a.L[c], b) && (Ze(b), 0 == a.L[c].length && (delete a.L[c], a.ac--));
}
g.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.L)
    if (!a || c == a) {
      for (var d = this.L[c], e = 0; e < d.length; e++) ++b, Ze(d[e]);
      delete this.L[c];
      this.ac--;
    }
  return b;
};
g.Hb = function (a, b, c, d) {
  a = this.L[a.toString()];
  var e = -1;
  a && (e = af(a, b, c, d));
  return -1 < e ? a[e] : null;
};
g.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return je(this.L, function (f) {
    for (var h = 0; h < f.length; ++h) if (!((c && f[h].type != d) || (e && f[h].capture != b))) return !0;
    return !1;
  });
};
function af(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.uc == d) return e;
  }
  return -1;
}
var cf = "closure_lm_" + ((1e6 * Math.random()) | 0),
  df = {},
  ef = 0;
function ff(a, b, c, d, e) {
  if (d && d.once) return gf(a, b, c, d, e);
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) ff(a, b[f], c, d, e);
    return null;
  }
  c = hf(c);
  return We(a) ? a.listen(b, c, za(d) ? !!d.capture : !!d, e) : jf(a, b, c, !1, d, e);
}
function jf(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var h = za(e) ? !!e.capture : !!e,
    k = kf(a);
  k || (a[cf] = k = new $e(a));
  c = k.add(b, c, d, h, f);
  if (c.proxy) return c;
  d = lf();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) Se || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent) a.attachEvent(mf(b.toString()), d);
  else if (a.addListener && a.removeListener) z("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
  else throw Error("addEventListener and attachEvent are unavailable.");
  ef++;
  return c;
}
function lf() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = nf;
  return a;
}
function gf(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) gf(a, b[f], c, d, e);
    return null;
  }
  c = hf(c);
  return We(a) ? a.Dd(b, c, za(d) ? !!d.capture : !!d, e) : jf(a, b, c, !0, d, e);
}
function of(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) of(a, b[f], c, d, e);
  else (d = za(d) ? !!d.capture : !!d), (c = hf(c)), We(a) ? a.me(b, c, d, e) : a && (a = kf(a)) && (b = a.Hb(b, c, d, e)) && pf(b);
}
function pf(a) {
  if ("number" !== typeof a && a && !a.removed) {
    var b = a.src;
    if (We(b)) bf(b.Z, a);
    else {
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(mf(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      ef--;
      (c = kf(b)) ? (bf(c, a), 0 == c.ac && ((c.src = null), (b[cf] = null))) : Ze(a);
    }
  }
}
function mf(a) {
  return a in df ? df[a] : (df[a] = "on" + a);
}
function nf(a, b) {
  if (a.removed) a = !0;
  else {
    b = new Te(b, this);
    var c = a.listener,
      d = a.uc || a.src;
    a.dc && pf(a);
    a = c.call(d, b);
  }
  return a;
}
function kf(a) {
  a = a[cf];
  return a instanceof $e ? a : null;
}
var qf = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function hf(a) {
  z(a, "Listener can not be null.");
  if ("function" === typeof a) return a;
  z(a.handleEvent, "An object listener must have handleEvent method.");
  a[qf] ||
    (a[qf] = function (b) {
      return a.handleEvent(b);
    });
  return a[qf];
}
function rf(a, b) {
  Re.call(this, "c");
  this.tab = a;
  this.Xf = b || void 0;
}
t(rf, Re);
function sf(a, b, c, d) {
  chrome.tabs.sendMessage(a, { type: b, value: c }, d);
}
var tf = [];
function uf(a) {
  z(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
  var b = "zd";
  if (a.zd && a.hasOwnProperty(b)) return a.zd;
  tf.push(a);
  var c = new a();
  a.zd = c;
  z(a.hasOwnProperty(b), "Could not instantiate singleton.");
  return c;
}
function vf() {
  W.call(this);
  this.cd = [];
  this.Yb = 0;
  this.df = !1;
}
t(vf, W);
vf.prototype.setEnabled = function (a) {
  this.df = a;
};
vf.prototype.get = function (a) {
  return jb(this.cd, function (b) {
    return a ? b.vf : b.Pe;
  }).join("\n\n\n\n");
};
vf.prototype.logMessage = function (a) {
  if (this.df) {
    a = new wf(a);
    for (var b = 1e7 - a.Wc; this.Yb > b; ) {
      var c = this.cd.pop();
      this.Yb -= c.Wc;
    }
    this.cd.unshift(a);
    this.Yb += a.Wc;
  }
};
function xf(a, b) {
  a += "";
  return a.length >= b ? a : Array(b - a.length + 1).join("0") + a;
}
vf.pd = function () {
  return uf(vf);
};
function wf(a) {
  var b = new Date();
  this.Pe = this.vf =
    a +
    " - " +
    (b.getMonth() +
      1 +
      "/" +
      b.getDate() +
      "/" +
      b.getFullYear() +
      " " +
      b.getHours() +
      ":" +
      xf(b.getMinutes(), 2) +
      ":" +
      xf(b.getSeconds(), 2) +
      ":" +
      xf(b.getMilliseconds(), 3));
  this.Wc = this.Pe.length;
}
function yf(a) {
  this.Bf = this.Md = this.He = this.ke = this.ne = null;
  a && this.update(a);
}
yf.prototype.update = function (a) {
  for (var b in a)
    switch (b) {
      case "url":
        var c = a[b];
        this.ne = c;
        try {
          new URL(c);
        } catch (d) {
          vf.pd().logMessage("Failed to get hostname for URL " + c + ".\nProvenance URL: " + this.Md + ".\nFull exception: " + d + ".");
        }
        break;
      case "title":
        this.ke = a[b];
        break;
      case "description":
        this.He = a[b];
        break;
      case "provenanceUrl":
        this.Md = a[b];
        break;
      case "representativeImageUrl":
        this.Bf = a[b];
    }
};
yf.prototype.A = function () {
  var a = {};
  a.url = this.ne;
  a.title = this.ke;
  a.description = this.He;
  a.provenanceUrl = this.Md;
  a.representativeImageUrl = this.Bf;
  return a;
};
yf.prototype.getUrl = function () {
  return this.ne || "";
};
yf.prototype.getTitle = function () {
  return this.ke || "";
};
function zf(a) {
  yf.call(this);
  this.Ne = "";
  a && this.update(a);
}
t(zf, yf);
zf.prototype.update = function (a) {
  yf.prototype.update.call(this, a);
  "faviconUrl" in a && (this.Ne = a.faviconUrl);
};
zf.prototype.A = function () {
  var a = yf.prototype.A.call(this);
  a.faviconUrl = this.Ne;
  return a;
};
function Af(a) {
  if (a.ua && "function" == typeof a.ua) return a.ua();
  if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
  if ("string" === typeof a) return a.split("");
  if (ya(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  return ke(a);
}
function Bf(a) {
  if (a.Gb && "function" == typeof a.Gb) return a.Gb();
  if (!a.ua || "function" != typeof a.ua) {
    if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (ya(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return le(a);
    }
  }
}
function Cf(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (ya(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
  else for (var d = Bf(a), e = Af(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a);
}
var Df = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Ef(a, b) {
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
function Ff(a, b) {
  if (!b) return a;
  var c = a.indexOf("#");
  0 > c && (c = a.length);
  var d = a.indexOf("?");
  if (0 > d || d > c) {
    d = c;
    var e = "";
  } else e = a.substring(d + 1, c);
  a = [a.slice(0, d), e, a.slice(c)];
  c = a[1];
  a[1] = b ? (c ? c + "&" + b : b) : c;
  return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
}
function Gf(a, b, c) {
  Sa(a);
  if (Array.isArray(b)) {
    A(b);
    for (var d = 0; d < b.length; d++) Gf(a, String(b[d]), c);
  } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
}
function Hf(a, b) {
  z(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  var c = [];
  for (b = b || 0; b < a.length; b += 2) Gf(a[b], a[b + 1], c);
  return c.join("&");
}
function If(a, b) {
  var c = 2 == arguments.length ? Hf(arguments[1], 0) : Hf(arguments, 1);
  return Ff(a, c);
}
function Jf(a, b, c) {
  c = null != c ? "=" + encodeURIComponent(String(c)) : "";
  return Ff(a, b + c);
}
function Kf(a, b, c) {
  for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
    var d = a.charCodeAt(b - 1);
    if (38 == d || 63 == d) if (((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)) return b;
    b += 7;
  }
  return -1;
}
var Lf = /#|$/,
  Mf = /[?&]($|#)/;
function Nf(a) {
  this.pa = this.Ra = this.ya = "";
  this.la = null;
  this.Ha = this.ka = "";
  this.W = this.tg = !1;
  if (a instanceof Nf) {
    this.W = a.W;
    Of(this, a.ya);
    var b = a.Ra;
    Y(this);
    this.Ra = b;
    b = a.pa;
    Y(this);
    this.pa = b;
    Pf(this, a.la);
    b = a.ka;
    Y(this);
    this.ka = b;
    Qf(this, a.T.clone());
    a = a.Ha;
    Y(this);
    this.Ha = a;
  } else
    a && (b = String(a).match(Df))
      ? ((this.W = !1),
        Of(this, b[1] || "", !0),
        (a = b[2] || ""),
        Y(this),
        (this.Ra = Rf(a)),
        (a = b[3] || ""),
        Y(this),
        (this.pa = Rf(a, !0)),
        Pf(this, b[4]),
        (a = b[5] || ""),
        Y(this),
        (this.ka = Rf(a, !0)),
        Qf(this, b[6] || "", !0),
        (a = b[7] || ""),
        Y(this),
        (this.Ha = Rf(a)))
      : ((this.W = !1), (this.T = new Sf(null, this.W)));
}
g = Nf.prototype;
g.toString = function () {
  var a = [],
    b = this.ya;
  b && a.push(Tf(b, Uf, !0), ":");
  var c = this.pa;
  if (c || "file" == b)
    a.push("//"),
      (b = this.Ra) && a.push(Tf(b, Uf, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.la),
      null != c && a.push(":", String(c));
  if ((c = this.ka)) this.pa && "/" != c.charAt(0) && a.push("/"), a.push(Tf(c, "/" == c.charAt(0) ? Vf : Wf, !0));
  (c = this.T.toString()) && a.push("?", c);
  (c = this.Ha) && a.push("#", Tf(c, Xf));
  return a.join("");
};
g.resolve = function (a) {
  var b = this.clone(),
    c = !!a.ya;
  c ? Of(b, a.ya) : (c = !!a.Ra);
  if (c) {
    var d = a.Ra;
    Y(b);
    b.Ra = d;
  } else c = !!a.pa;
  c ? ((d = a.pa), Y(b), (b.pa = d)) : (c = null != a.la);
  d = a.ka;
  if (c) Pf(b, a.la);
  else if ((c = !!a.ka)) {
    if ("/" != d.charAt(0))
      if (this.pa && !this.ka) d = "/" + d;
      else {
        var e = b.ka.lastIndexOf("/");
        -1 != e && (d = b.ka.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
      d = 0 == e.lastIndexOf("/", 0);
      e = e.split("/");
      for (var f = [], h = 0; h < e.length; ) {
        var k = e[h++];
        "." == k
          ? d && h == e.length && f.push("")
          : ".." == k
          ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && h == e.length && f.push(""))
          : (f.push(k), (d = !0));
      }
      d = f.join("/");
    } else d = e;
  }
  c ? (Y(b), (b.ka = d)) : (c = "" !== a.T.toString());
  c ? Qf(b, a.T.clone()) : (c = !!a.Ha);
  c && ((a = a.Ha), Y(b), (b.Ha = a));
  return b;
};
g.clone = function () {
  return new Nf(this);
};
function Of(a, b, c) {
  Y(a);
  a.ya = c ? Rf(b, !0) : b;
  a.ya && (a.ya = a.ya.replace(/:$/, ""));
}
function Pf(a, b) {
  Y(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.la = b;
  } else a.la = null;
}
function Qf(a, b, c) {
  Y(a);
  b instanceof Sf ? ((a.T = b), a.T.Xd(a.W)) : (c || (b = Tf(b, Yf)), (a.T = new Sf(b, a.W)));
}
g.getQuery = function () {
  return this.T.toString();
};
function Zf() {
  var a = $f;
  Y(a);
  var b = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
  Y(a);
  a.T.set("zx", b);
  return a;
}
g.removeParameter = function (a) {
  Y(this);
  this.T.remove(a);
  return this;
};
function Y(a) {
  if (a.tg) throw Error("Tried to modify a read-only Uri");
}
g.Xd = function (a) {
  this.W = a;
  this.T && this.T.Xd(a);
};
function Rf(a, b) {
  return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function Tf(a, b, c) {
  return "string" === typeof a ? ((a = encodeURI(a).replace(b, ag)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function ag(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var Uf = /[#\/\?@]/g,
  Wf = /[#\?:]/g,
  Vf = /[#\?]/g,
  Yf = /[#\?@]/g,
  Xf = /#/g;
function Sf(a, b) {
  this.G = this.s = null;
  this.P = a || null;
  this.W = !!b;
}
function bg(a) {
  a.s ||
    ((a.s = new Map()),
    (a.G = 0),
    a.P &&
      Ef(a.P, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
}
g = Sf.prototype;
g.Eb = function () {
  bg(this);
  return this.G;
};
g.add = function (a, b) {
  bg(this);
  this.P = null;
  a = cg(this, a);
  var c = this.s.get(a);
  c || this.s.set(a, (c = []));
  c.push(b);
  this.G = Ra(this.G) + 1;
  return this;
};
g.remove = function (a) {
  bg(this);
  a = cg(this, a);
  return this.s.has(a) ? ((this.P = null), (this.G = Ra(this.G) - this.s.get(a).length), this.s.delete(a)) : !1;
};
g.clear = function () {
  this.s = this.P = null;
  this.G = 0;
};
g.Ad = function () {
  bg(this);
  return 0 == this.G;
};
g.jc = function (a) {
  bg(this);
  a = cg(this, a);
  return this.s.has(a);
};
g.forEach = function (a, b) {
  bg(this);
  this.s.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
g.Gb = function () {
  bg(this);
  for (var a = Array.from(this.s.values()), b = Array.from(this.s.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
g.ua = function (a) {
  bg(this);
  var b = [];
  if ("string" === typeof a) this.jc(a) && (b = b.concat(this.s.get(cg(this, a))));
  else {
    a = Array.from(this.s.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
g.set = function (a, b) {
  bg(this);
  this.P = null;
  a = cg(this, a);
  this.jc(a) && (this.G = Ra(this.G) - this.s.get(a).length);
  this.s.set(a, [b]);
  this.G = Ra(this.G) + 1;
  return this;
};
g.get = function (a, b) {
  if (!a) return b;
  a = this.ua(a);
  return 0 < a.length ? String(a[0]) : b;
};
g.toString = function () {
  if (this.P) return this.P;
  if (!this.s) return "";
  for (var a = [], b = Array.from(this.s.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.ua(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return (this.P = a.join("&"));
};
g.clone = function () {
  var a = new Sf();
  a.P = this.P;
  this.s && ((a.s = new Map(this.s)), (a.G = this.G));
  return a;
};
function cg(a, b) {
  b = String(b);
  a.W && (b = b.toLowerCase());
  return b;
}
g.Xd = function (a) {
  a &&
    !this.W &&
    (bg(this),
    (this.P = null),
    this.s.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d &&
        (this.remove(c),
        this.remove(d),
        0 < b.length && ((this.P = null), this.s.set(cg(this, d), nb(b)), (this.G = Ra(this.G) + b.length)));
    }, this));
  this.W = a;
};
g.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Cf(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var dg = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random());
function eg() {
  this.oc = {};
  fg(this, v._notes_flag_initialData || {});
  gg(this);
}
function fg(a, b) {
  ie(be, function (c) {
    void 0 !== b[c] && (a.oc[c] = b[c]);
  });
}
function gg(a) {
  var b = {};
  new Nf(self.location.href).T.forEach(function (c, d) {
    b[d] = c;
  });
  fg(a, b);
}
function hg(a) {
  a = uf(eg).oc[a];
  return isNaN(a) ? 0 : Number(a);
}
function ig(a) {
  T.call(this, a);
}
t(ig, T);
ig.prototype.Zd = function (a) {
  qd(this, 22, a);
};
ig.i = "docs.diagnostics.impressions.impressiondetails.KeepDetails";
Object.values({
  UNKNOWN: "unknown",
  lh: "default",
  Nh: "groceries",
  Kh: "food",
  hi: "music",
  xi: "recipes",
  mi: "notes",
  ui: "places",
  Ri: "travel",
  VIDEO: "video",
  dh: "celebration"
}).filter(function (a) {
  return "unknown" !== a;
});
function jg() {}
jg.prototype.sc = function (a, b) {
  a.dj() && this.A(b);
};
function kg() {
  this.J = [];
  this.kc = new DataView(new ArrayBuffer(8));
}
t(kg, jg);
kg.prototype.A = function (a) {
  if (null == a) return [];
  this.J = [];
  for (var b = a.getDescriptor().cj(), c = 0; c < b.length; c++) {
    var d = b[c];
    if (a.has(d))
      if (d.Ac())
        if (d.ej()) {
          var e = a,
            f = d;
          d = this.J;
          lg(this, (kd(f, 2) << 3) | 2);
          for (var h = d.length, k = 0, l = e.cg(f); k < l; k++) {
            var n = e.get(f, k);
            this.sc(f, n, !0);
          }
          e = d.splice(h, d.length - h);
          lg(this, e.length);
          d.splice.apply(d, [d.length, 0].concat(e));
        } else for (e = 0, f = a.cg(d); e < f; e++) (h = a.get(d, e)), this.sc(d, h);
      else this.sc(d, a.get(d));
  }
  return this.J;
};
kg.prototype.sc = function (a, b, c) {
  if ((c = !c)) {
    a: {
      switch (a.Se()) {
        default:
          c = !1;
          break a;
        case 17:
        case 18:
        case 8:
        case 3:
        case 14:
        case 5:
        case 13:
        case 4:
          c = 0;
          break;
        case 6:
        case 16:
        case 1:
          c = 1;
          break;
        case 9:
        case 12:
        case 11:
          c = 2;
          break;
        case 10:
          c = 3;
          break;
        case 7:
        case 15:
        case 2:
          c = 5;
      }
      lg(this, (kd(a, 2) << 3) | c);
      c = !0;
    }
    c = !c;
  }
  if (!c)
    switch (a.Se()) {
      default:
        throw Error("Unknown field type " + a.Se());
      case 17:
        lg(this, (b << 1) ^ -(b >>> 31));
        break;
      case 18:
        a = Td(b);
        b = Qd(a, 63);
        a = a.shiftLeft(1).xor(Jd(b));
        mg(this, a);
        break;
      case 8:
        lg(this, b ? 1 : 0);
        break;
      case 5:
        0 < b ? lg(this, b) : mg(this, V(b));
        break;
      case 3:
      case 4:
        mg(this, Td(b));
        break;
      case 14:
      case 13:
        lg(this, b);
        break;
      case 6:
      case 16:
        ng(this, Td(b), 8);
        break;
      case 1:
        this.kc.setFloat64(0, b, !0);
        for (a = 0; 8 > a; a++) this.J.push(this.kc.getUint8(a));
        break;
      case 9:
        if (null != b) for (a = unescape(encodeURIComponent(b)), lg(this, a.length), b = 0; b < a.length; b++) this.J.push(a.charCodeAt(b));
        break;
      case 12:
        if (null != b) for (lg(this, b.length), a = 0; a < b.length; a++) this.J.push(b.charCodeAt(a));
        break;
      case 10:
        b = new kg().A(b);
        ob(this.J, b);
        lg(this, (kd(a, 2) << 3) | 4);
        break;
      case 11:
        b = new kg().A(b);
        lg(this, b.length);
        ob(this.J, b);
        break;
      case 7:
        ng(this, Pd(b), 4);
        break;
      case 15:
        ng(this, V(b), 4);
        break;
      case 2:
        for (this.kc.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.J.push(this.kc.getUint8(a));
    }
};
function lg(a, b) {
  do {
    var c = b & 127;
    b >>>= 7;
    0 < b && (c |= 128);
    a.J.push(c);
  } while (0 < b);
}
function mg(a, b) {
  var c = V(127);
  do {
    var d = b.and(c).o;
    b = Qd(b, 7);
    0 < b.compare(Od) && (d |= 128);
    a.J.push(d);
  } while (0 < b.compare(Od));
}
function ng(a, b, c) {
  for (var d = V(255), e = 0; e < c; e++) {
    var f = b.and(d).o;
    a.J.push(f);
    b = Qd(b, 8);
  }
}
new kg();
function Z() {
  W.call(this);
  this.Z = new $e(this);
  this.Wf = this;
  this.Gd = null;
}
Ja(Z, W);
Z.prototype[Ve] = !0;
g = Z.prototype;
g.addEventListener = function (a, b, c, d) {
  ff(this, a, b, c, d);
};
g.removeEventListener = function (a, b, c, d) {
  of(this, a, b, c, d);
};
g.dispatchEvent = function (a) {
  og(this);
  var b = this.Gd;
  if (b) {
    var c = [];
    for (var d = 1; b; b = b.Gd) c.push(b), z(1e3 > ++d, "infinite loop");
  }
  b = this.Wf;
  d = a.type || a;
  if ("string" === typeof a) a = new Re(a, b);
  else if (a instanceof Re) a.target = a.target || b;
  else {
    var e = a;
    a = new Re(d, b);
    ne(a, e);
  }
  e = !0;
  if (c)
    for (var f = c.length - 1; !a.Rb && 0 <= f; f--) {
      var h = (a.currentTarget = c[f]);
      e = pg(h, d, !0, a) && e;
    }
  a.Rb || ((h = a.currentTarget = b), (e = pg(h, d, !0, a) && e), a.Rb || (e = pg(h, d, !1, a) && e));
  if (c) for (f = 0; !a.Rb && f < c.length; f++) (h = a.currentTarget = c[f]), (e = pg(h, d, !1, a) && e);
  return e;
};
g.v = function () {
  Z.na.v.call(this);
  this.Z && this.Z.removeAll(void 0);
  this.Gd = null;
};
g.listen = function (a, b, c, d) {
  og(this);
  return this.Z.add(String(a), b, !1, c, d);
};
g.Dd = function (a, b, c, d) {
  return this.Z.add(String(a), b, !0, c, d);
};
g.me = function (a, b, c, d) {
  this.Z.remove(String(a), b, c, d);
};
function pg(a, b, c, d) {
  b = a.Z.L[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.removed && h.capture == c) {
      var k = h.listener,
        l = h.uc || h.src;
      h.dc && bf(a.Z, h);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
g.Hb = function (a, b, c, d) {
  return this.Z.Hb(String(a), b, c, d);
};
g.hasListener = function (a, b) {
  return this.Z.hasListener(void 0 !== a ? String(a) : void 0, b);
};
function og(a) {
  z(a.Z, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
}
function qg(a) {
  W.call(this);
  this.ib = a;
  this.kb = {};
}
Ja(qg, W);
var rg = [];
g = qg.prototype;
g.listen = function (a, b, c, d) {
  Array.isArray(b) || (b && (rg[0] = b.toString()), (b = rg));
  for (var e = 0; e < b.length; e++) {
    var f = ff(a, b[e], c || this.handleEvent, d || !1, this.ib || this);
    if (!f) break;
    this.kb[f.key] = f;
  }
  return this;
};
g.Dd = function (a, b, c, d) {
  return sg(this, a, b, c, d);
};
function sg(a, b, c, d, e, f) {
  if (Array.isArray(c)) for (var h = 0; h < c.length; h++) sg(a, b, c[h], d, e, f);
  else {
    b = gf(b, c, d || a.handleEvent, e, f || a.ib || a);
    if (!b) return a;
    a.kb[b.key] = b;
  }
  return a;
}
g.me = function (a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.me(a, b[f], c, d, e);
  else
    (c = c || this.handleEvent),
      (d = za(d) ? !!d.capture : !!d),
      (e = e || this.ib || this),
      (c = hf(c)),
      (d = !!d),
      (b = We(a) ? a.Hb(b, c, d, e) : a ? ((a = kf(a)) ? a.Hb(b, c, d, e) : null) : null),
      b && (pf(b), delete this.kb[b.key]);
};
g.removeAll = function () {
  ie(
    this.kb,
    function (a, b) {
      this.kb.hasOwnProperty(b) && pf(a);
    },
    this
  );
  this.kb = {};
};
g.v = function () {
  qg.na.v.call(this);
  this.removeAll();
};
g.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
new Me();
(function (a, b) {
  if (yb && !b) return v.atob(a);
  var c = "";
  Bb(a, function (d) {
    c += String.fromCharCode(d);
  });
  return c;
})("bGFiZWxz"); /*

 SPDX-License-Identifier: Apache-2.0
*/
var tg = fa([""]),
  ug = ha(["\x00"], ["\\0"]),
  vg = ha(["\n"], ["\\n"]),
  wg = ha(["\x00"], ["\\u0000"]),
  xg = fa([""]),
  yg = ha(["\x00"], ["\\0"]),
  zg = ha(["\n"], ["\\n"]),
  Ag = ha(["\x00"], ["\\u0000"]);
function Bg(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!Cg && a === a.raw) ||
    !((Cg && !Dg) || Eg(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function Eg(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function Fg(a) {
  return -1 === a.toString().indexOf("`");
}
var Cg =
    Fg(function (a) {
      return a(tg);
    }) ||
    Fg(function (a) {
      return a(ug);
    }) ||
    Fg(function (a) {
      return a(vg);
    }) ||
    Fg(function (a) {
      return a(wg);
    }),
  Dg = Eg(xg) && Eg(yg) && Eg(zg) && Eg(Ag);
function Hg(a, b) {
  this.name = a;
  this.value = b;
}
Hg.prototype.toString = function () {
  return this.name;
};
var Ig = new Hg("OFF", Infinity),
  Jg = new Hg("SEVERE", 1e3),
  Kg = new Hg("WARNING", 900),
  Lg = new Hg("INFO", 800),
  Mg = new Hg("CONFIG", 700),
  Ng = new Hg("FINE", 500);
function Og() {
  this.fc = 0;
  this.clear();
}
var Pg;
Og.prototype.clear = function () {
  this.J = Array(this.fc);
  this.Ge = -1;
  this.ef = !1;
};
function Qg(a, b, c) {
  this.reset(a || Ig, b, c, void 0, void 0);
}
Qg.prototype.reset = function (a, b) {
  this.zg = b;
};
Qg.prototype.getMessage = function () {
  return this.zg;
};
function Rg(a, b) {
  this.level = null;
  this.pg = [];
  this.parent = (void 0 === b ? null : b) || null;
  this.children = [];
  this.M = {
    getName: function () {
      return a;
    }
  };
}
function Sg(a) {
  if (a.level) return a.level;
  if (a.parent) return Sg(a.parent);
  Qa("Root logger has no level set.");
  return Ig;
}
Rg.prototype.publish = function (a) {
  for (var b = this; b; )
    b.pg.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
function Tg() {
  this.entries = {};
  var a = new Rg("");
  a.level = Mg;
  this.entries[""] = a;
}
var Ug;
function Vg(a, b) {
  var c = a.entries[b];
  if (c) return c;
  c = Vg(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
  var d = new Rg(b, c);
  a.entries[b] = d;
  c.children.push(d);
  return d;
}
function Wg() {
  Ug || (Ug = new Tg());
  return Ug;
}
function Xg(a, b, c) {
  var d;
  if ((d = a))
    if ((d = a && b)) {
      d = b.value;
      var e = a ? Sg(Vg(Wg(), a.getName())) : Ig;
      d = d >= e.value;
    }
  if (d) {
    b = b || Ig;
    d = Vg(Wg(), a.getName());
    "function" === typeof c && (c = c());
    Pg || (Pg = new Og());
    e = Pg;
    a = a.getName();
    if (0 < e.fc) {
      var f = (e.Ge + 1) % e.fc;
      e.Ge = f;
      e.ef ? ((e = e.J[f]), e.reset(b, c, a), (a = e)) : ((e.ef = f == e.fc - 1), (a = e.J[f] = new Qg(b, c, a)));
    } else a = new Qg(b, c, a);
    d.publish(a);
  }
}
function Yg(a, b) {
  a && Xg(a, Jg, b);
}
function Zg(a, b) {
  a && Xg(a, Lg, b);
}
function $g(a, b) {
  a && Xg(a, Ng, b);
}
function ah() {
  var a = bh;
  a instanceof ue && a.constructor === ue
    ? (a = a.Ld)
    : (Qa("expected object of type SafeUrl, got '" + a + "' of type " + w(a)), (a = "type_error:SafeUrl"));
  return a;
}
var ch = [];
function dh(a) {
  var b = Vg(Wg(), "safevalues").M;
  b && Xg(b, Kg, "A URL with content '" + a + "' was sanitized away.");
}
-1 === ch.indexOf(dh) && ch.push(dh);
function eh(a) {
  this.Bd = a;
}
function fh(a) {
  return new eh(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var gh = [
  fh("data"),
  fh("http"),
  fh("https"),
  fh("mailto"),
  fh("ftp"),
  new eh(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })
];
Object.freeze(
  "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
    " "
  )
);
var hh = fa(["http://goo.gl/forms/r40gTO4BTb"]),
  ih = fa(["https://keep.google.com"]);
(function (a) {
  var b = ta.apply(1, arguments);
  Bg(a, b.length);
  var c = a[0];
  var d = 0 === b.length;
  var e = c.search(/[:/?#]/);
  0 > e ||
    (":" !== c.charAt(e) ? (d = !0) : ((d = c.substring(0, e).toLowerCase()), (d = /^[a-z][a-z\d+.-]*$/.test(d) && "javascript" !== d)));
  if (!d) throw Error("Trying to interpolate with unsupported prefix: " + c);
  c = [c];
  for (d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
  return new ue(c.join(""), ve);
})(hh);
var jh = (function (a) {
    var b = ta.apply(1, arguments);
    Bg(a, b.length);
    if (0 === b.length) return te(a[0]);
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
    return te(c);
  })(ih).toString(),
  kh = void 0;
kh = void 0 === kh ? gh : kh;
var lh;
a: {
  var mh = kh;
  mh = void 0 === mh ? gh : mh;
  if (jh instanceof ue) lh = jh;
  else {
    for (var nh = 0; nh < mh.length; ++nh) {
      var oh = mh[nh];
      if (oh instanceof eh && oh.Bd(jh)) {
        lh = new ue(jh, ve);
        break a;
      }
    }
    lh = void 0;
  }
}
var bh = lh || we,
  ph = ["chrome://", "https://chrome.google.com/webstore", "edge://"];
function qh(a) {
  return kb(ph, function (b) {
    return 0 != a.lastIndexOf(b, 0);
  });
}
function rh(a) {
  chrome.tabs.query({}, function (b) {
    ib(b, a);
  });
}
function sh() {
  this.vg = new Map();
}
function th(a, b) {
  a.vg.forEach(function (c) {
    return c(b);
  });
}
function uh(a) {
  this.h = a;
}
function vh(a) {
  this.K = a;
}
vh.prototype.getId = function () {
  return this.K;
};
function wh(a) {
  T.call(this, a);
}
t(wh, T);
wh.prototype.md = function () {
  return od(this, 2);
};
wh.prototype.Tb = function (a) {
  R(this, 2, a);
};
wh.i = "docs.diagnostics.impressions.ClientTimingInfo.ElapsedTiming";
function xh(a) {
  T.call(this, a);
}
t(xh, T);
xh.prototype.Re = function () {
  return Q(this, 1);
};
xh.prototype.Vd = function (a) {
  return R(this, 1, a);
};
xh.i = "docs.diagnostics.impressions.ClientTimingInfo.InstantTiming";
function yh(a) {
  T.call(this, a);
}
t(yh, T);
yh.i = "docs.diagnostics.impressions.ClientTimingInfo";
function zh(a) {
  T.call(this, a);
}
t(zh, T);
g = zh.prototype;
g.rd = function () {
  return Q(this, 1);
};
g.Ue = function () {
  return Q(this, 1);
};
g.Kc = function (a) {
  return R(this, 1, a);
};
g.aa = function () {
  return Q(this, 2);
};
g.od = function () {
  return Q(this, 2);
};
g.sb = function (a) {
  return R(this, 2, a);
};
g.sd = function () {
  return null != Q(this, 2);
};
g.nd = function () {
  return pd(this, 2);
};
zh.i = "docs.diagnostics.impressions.impressiondetails.ImpressionSystemDetails.OngoingImpression";
function Ah(a) {
  T.call(this, a);
}
t(Ah, T);
Ah.i = "docs.diagnostics.impressions.impressiondetails.ImpressionSystemDetails";
Ah.fa = [2];
function Bh(a) {
  T.call(this, a);
}
t(Bh, T);
Bh.i = "docs.diagnostics.impressions.clientinfo.ExperimentInfo";
Bh.fa = [1];
function Ch(a) {
  T.call(this, a);
}
t(Ch, T);
Ch.prototype.Yd = function (a) {
  P(this, Ah, 3, a);
};
Ch.prototype.ae = function (a) {
  P(this, ig, 39, a);
};
Ch.prototype.Xe = function () {
  return N(this, ig, 39);
};
Ch.i = "docs.diagnostics.impressions.impressiondetails.ImpressionDetails";
function Dh() {
  this.yd = !1;
  this.Nd = this.h = null;
}
g = Dh.prototype;
g.initialize = function (a, b) {
  this.h = a;
  this.Nd = b;
  z(this.Bd(), "An impression of this type cannot be used with this ImpressionBuilder.");
  this.yd = !0;
  return this;
};
function Eh(a, b) {
  b = z(a.Nd.ud[b.getId()], 'Factory "' + b.getId() + '" not registered').jd();
  z(b instanceof Dh, "The ImpressionBuilder created by an ImpressionBuilderFactory should subclass rocket.impressions.ImpressionBuilder");
  z(!b.yd, "An ImpressionBuilder should only be initialized once.");
  b.initialize(z(a.h), z(a.Nd));
  return b;
}
g.aa = function () {
  z(null != this.h);
  return z(this.h.aa());
};
g.fb = function () {
  z(null != this.h);
  var a = this.h.fb();
  null == a && ((a = new Ch()), P(this.h, Ch, 5, a));
  return a;
};
g.N = function () {
  z(this.yd, "ImpressionBuilder must be initialized before it can be built");
  z(this.h.sd(), "Impressions without an event code cannot be built");
  z(null != Q(this.h, 6) || 716 == this.h.od(), "Impressions without a lastHeartbeatSequenceNumber cannot be built");
  if (2 == ld(Fh(this.h), 3)) {
    var a;
    if ((a = null != Q(this.h, 13))) (a = O(Fh(this.h), wh, 2)), (a = null != Q(a, 2));
    z(a, "Elapsed ImpressionBuilders must be ended before they can be built");
  }
  a = this.h.fb();
  null != a && ((a = a.clone()), P(this.h, Ch, 5, a));
  return z(this.h);
};
g.Bd = function () {
  return !0;
};
function Gh() {
  Dh.call(this);
  this.Bc = null;
}
t(Gh, Dh);
function Hh(a) {
  a.Bc || ((a.Bc = new ig()), a.fb().ae(a.Bc));
  return a.Bc;
}
Gh.prototype.Zd = function (a) {
  Hh(this).Zd(a);
};
var Ih = new vh("keep_builder");
function Jh() {}
Jh.prototype.jd = function () {
  return new Gh();
};
var Kh = { Oh: 0, ei: 1, Hh: 2 };
var Lh = { zi: 0, Xg: 1, Di: 2, vi: 3, wi: 4 };
function Mh(a) {
  T.call(this, a);
}
t(Mh, T);
Mh.prototype.he = function (a) {
  return S(this, 1, a);
};
Mh.prototype.ee = function (a) {
  return S(this, 2, a);
};
Mh.i = "docs.diagnostics.impressions.sessioninvariants.KeepInvariants";
function Nh() {
  this.Lb = new Mh();
}
Nh.prototype.te = function (a) {
  z(!a.Xe());
  a.ae(this.Lb);
};
Nh.prototype.he = function (a) {
  z(null == ld(this.Lb, 1));
  this.Lb.he(a);
  return this;
};
Nh.prototype.ee = function (a) {
  z(null == ld(this.Lb, 2));
  this.Lb.ee(a);
  return this;
};
var Oh = new Je();
function Ph() {
  var a = v.performance;
  if (!a || !a.getEntriesByType) return null;
  var b = a.getEntriesByType("navigation");
  if (!b || !b[0]) return null;
  b = b[0];
  a = a.timeOrigin || a.timing.navigationStart;
  var c = new $d();
  c = R(c, 1, 1e3 * Math.round(a));
  c = R(c, 2, Math.round(1e3 * (a + b.redirectStart)));
  c = R(c, 3, Math.round(1e3 * (a + b.redirectEnd)));
  c = R(c, 4, Math.round(1e3 * (a + b.fetchStart)));
  c = R(c, 5, Math.round(1e3 * (a + b.domainLookupStart)));
  c = R(c, 6, Math.round(1e3 * (a + b.domainLookupEnd)));
  c = R(c, 7, Math.round(1e3 * (a + b.connectStart)));
  c = R(c, 8, Math.round(1e3 * (a + b.connectEnd)));
  b.secureConnectionStart && R(c, 9, Math.round(1e3 * (a + b.secureConnectionStart)));
  R(c, 10, Math.round(1e3 * (a + b.requestStart)));
  R(c, 11, Math.round(1e3 * (a + b.responseStart)));
  R(c, 12, Math.round(1e3 * (a + b.responseEnd)));
  rd(c, 18, b.redirectCount);
  S(c, 19, Qh[b.type] || 1);
  return c;
}
var Qh = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
function Rh(a) {
  T.call(this, a);
}
t(Rh, T);
Rh.prototype.Of = function (a) {
  qd(this, 1, a);
};
Rh.prototype.Pf = function (a) {
  qd(this, 2, a);
};
Rh.i = "docs.diagnostics.impressions.clientinfo.ClientInfo.AccessState";
function Sh(a) {
  T.call(this, a);
}
t(Sh, T);
Sh.i = "docs_security.AccessLevelProto";
function Th(a) {
  T.call(this, a);
}
t(Th, T);
g = Th.prototype;
g.setAccessLevel = function (a) {
  return P(this, Sh, 12, a);
};
g.Qe = function () {
  return O(this, Rh, 13);
};
g.Gf = function (a) {
  P(this, Rh, 13, a);
};
g.Te = function () {
  var a = void 0 === a ? !1 : a;
  return md(wc(M(this, 6)), a);
};
g.Nf = function (a) {
  qd(this, 6, a);
};
g.We = function () {
  return null != wc(M(this, 6));
};
g.Kf = function (a) {
  P(this, Bh, 10, a);
};
g.Ve = function () {
  return N(this, Bh, 10);
};
Th.i = "docs.diagnostics.impressions.clientinfo.ClientInfo";
function Uh(a) {
  T.call(this, a);
}
t(Uh, T);
Uh.i = "docs.diagnostics.impressions.ImpressionSystemInfo";
function Vh(a) {
  T.call(this, a);
}
t(Vh, T);
Vh.prototype.Wb = function (a) {
  return sd(this, 1, a);
};
Vh.prototype.Ud = function (a) {
  R(this, 2, a);
};
Vh.prototype.Xb = function (a) {
  return S(this, 6, a);
};
Vh.i = "docs.diagnostics.impressions.SessionInfo";
function Wh(a) {
  T.call(this, a);
}
t(Wh, T);
Wh.prototype.ae = function (a) {
  P(this, Mh, 17, a);
};
Wh.prototype.Xe = function () {
  return N(this, Mh, 17);
};
Wh.i = "docs.diagnostics.impressions.sessioninvariants.AppInvariants";
function Xh(a) {
  T.call(this, a);
}
t(Xh, T);
Xh.i = "docs_browser.ChromeClientData";
Xh.fa = [2];
function Yh(a) {
  T.call(this, a);
}
t(Yh, T);
Yh.prototype.Td = function (a) {
  P(this, Xh, 9, a);
};
Yh.i = "docs.diagnostics.impressions.sessioninvariants.Browser";
function Zh(a) {
  T.call(this, a);
}
t(Zh, T);
Zh.i = "docs.diagnostics.impressions.sessioninvariants.DeviceInvariants";
function $h(a) {
  T.call(this, a);
}
t($h, T);
$h.i = "docs.diagnostics.impressions.sessioninvariants.ParentInvariants";
function ai(a) {
  T.call(this, a);
}
t(ai, T);
g = ai.prototype;
g.hd = function () {
  return O(this, Wh, 1);
};
g.Sd = function (a) {
  P(this, Wh, 1, a);
};
g.be = function (a) {
  P(this, $d, 6, a);
};
g.getDevice = function () {
  return O(this, Zh, 9);
};
g.getParent = function () {
  return O(this, $h, 11);
};
g.Kf = function (a) {
  P(this, Bh, 15, a);
};
g.Ve = function () {
  return N(this, Bh, 15);
};
ai.i = "docs.diagnostics.impressions.sessioninvariants.SessionInvariants";
function bi() {
  this.ma = new Vh();
  this.Sb = null;
  this.af = new Uh();
  S(this.af, 1, 6);
  this.F = this.Da = null;
}
g = bi.prototype;
g.Xb = function (a) {
  z(null == ld(this.ma, 6));
  this.ma.Xb(a);
  return this;
};
g.Wb = function (a) {
  z(null == kd(this.ma, 1));
  this.ma.Wb(a);
  return this;
};
g.Sd = function (a) {
  z(!N(ci(this), Wh, 1));
  ci(this).Sd(a);
};
g.hd = function () {
  N(ci(this), Wh, 1) || ci(this).Sd(new Wh());
  return z(ci(this).hd());
};
g.Vb = function (a) {
  z(!this.F);
  this.F = a;
};
g.Ud = function (a) {
  z(null == Q(this.ma, 2));
  this.ma.Ud(a);
};
g.be = function (a) {
  z(!N(ci(this), $d, 6));
  ci(this).be(a);
};
g.Td = function (a) {
  var b = ci(this);
  var c = O(b, Yh, 16);
  c || ((c = new Yh()), P(b, Yh, 16, c));
  b = c;
  z(!N(b, Xh, 9));
  b.Td(a);
};
g.Aa = function (a) {
  z(null == this.Da);
  this.Da = a;
};
function ci(a) {
  null == a.Sb && (a.Sb = new ai());
  return a.Sb;
}
g.pc = function () {
  null == this.Da && (this.Da = new Th());
  return this.Da;
};
function di(a) {
  return null != kd(a.ma, 1) && null != ld(a.ma, 6) && 0 != ld(a.ma, 6);
}
function ei(a) {
  a.Ud(1e3 * Date.now());
  var b = Ph();
  b && a.be(b);
  var c = uf(eg);
  ub && ((b = c.oc.n_ccd), a.Td(new Xh(Array.isArray(b) ? b : [])));
  b = new Bh();
  c = c.oc.n_ei;
  c = Array.isArray(c) ? c : "string" === typeof c ? c.split(",").map(Number) : [];
  b = ed(b, 1, c, zc);
  z(!a.pc().Ve());
  a.pc().Kf(b);
}
function fi(a, b) {
  this.wg = 100;
  this.dg = a;
  this.Cg = b;
  this.Ec = 0;
  this.vc = null;
}
fi.prototype.get = function () {
  if (0 < this.Ec) {
    this.Ec--;
    var a = this.vc;
    this.vc = a.next;
    a.next = null;
  } else a = this.dg();
  return a;
};
fi.prototype.put = function (a) {
  this.Cg(a);
  this.Ec < this.wg && (this.Ec++, (a.next = this.vc), (this.vc = a));
};
try {
  new self.OffscreenCanvas(0, 0).getContext("2d");
} catch (a) {}
function gi(a, b) {
  return a + Math.random() * (b - a);
}
var hi = {
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
function ii(a, b, c) {
  function d(k) {
    k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k);
  }
  for (var e = 1; e < c.length; e++) {
    var f = c[e];
    if (!ya(f) || (za(f) && 0 < f.nodeType)) d(f);
    else {
      a: {
        if (f && "number" == typeof f.length) {
          if (za(f)) {
            var h = "function" == typeof f.item || "string" == typeof f.item;
            break a;
          }
          if ("function" === typeof f) {
            h = "function" == typeof f.item;
            break a;
          }
        }
        h = !1;
      }
      ib(h ? nb(f) : f, d);
    }
  }
}
function ji(a, b) {
  b = String(b);
  "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
  return a.createElement(b);
}
function ki() {
  this.D = v.document || document;
}
g = ki.prototype;
g.getElementsByTagName = function (a, b) {
  return (b || this.D).getElementsByTagName(String(a));
};
g.setProperties = function (a, b) {
  ie(b, function (c, d) {
    c && "object" == typeof c && c.Kb && (c = c.Ib());
    "style" == d
      ? (a.style.cssText = c)
      : "class" == d
      ? (a.className = c)
      : "for" == d
      ? (a.htmlFor = c)
      : hi.hasOwnProperty(d)
      ? a.setAttribute(hi[d], c)
      : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
      ? a.setAttribute(d, c)
      : (a[d] = c);
  });
};
g.createElement = function (a) {
  return ji(this.D, a);
};
g.createTextNode = function (a) {
  return this.D.createTextNode(String(a));
};
g.getWindow = function () {
  var a = this.D;
  return a.parentWindow || a.defaultView;
};
g.appendChild = function (a, b) {
  z(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
  a.appendChild(b);
};
g.append = function (a, b) {
  var c = a;
  z(c, "Node cannot be null or undefined.");
  ii(9 == c.nodeType ? c : c.ownerDocument || c.document, a, arguments);
};
g.canHaveChildren = function (a) {
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
g.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.getChildren = function (a) {
  return void 0 != a.children
    ? a.children
    : Array.prototype.filter.call(a.childNodes, function (b) {
        return 1 == b.nodeType;
      });
};
g.contains = function (a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
};
var li;
function mi() {
  var a = v.MessageChannel;
  "undefined" === typeof a &&
    "undefined" !== typeof window &&
    window.postMessage &&
    window.addEventListener &&
    !B("Presto") &&
    (a = function () {
      var e = ji(document, "IFRAME");
      e.style.display = "none";
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.close();
      var h = "callImmediate" + Math.random(),
        k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = Ga(function (l) {
        if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          f.postMessage(h, k);
        }
      };
    });
  if ("undefined" !== typeof a && !fb()) {
    var b = new a(),
      c = {},
      d = c;
    b.port1.onmessage = function () {
      if (void 0 !== c.next) {
        c = c.next;
        var e = c.Ae;
        c.Ae = null;
        e();
      }
    };
    return function (e) {
      d.next = { Ae: e };
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return function (e) {
    v.setTimeout(e, 0);
  };
}
function ni() {
  this.Pc = this.Sa = null;
}
ni.prototype.add = function (a, b) {
  var c = oi.get();
  c.set(a, b);
  this.Pc ? (this.Pc.next = c) : (z(!this.Sa), (this.Sa = c));
  this.Pc = c;
};
ni.prototype.remove = function () {
  var a = null;
  this.Sa && ((a = this.Sa), (this.Sa = this.Sa.next), this.Sa || (this.Pc = null), (a.next = null));
  return a;
};
var oi = new fi(
  function () {
    return new pi();
  },
  function (a) {
    return a.reset();
  }
);
function pi() {
  this.next = this.scope = this.gd = null;
}
pi.prototype.set = function (a, b) {
  this.gd = a;
  this.scope = b;
  this.next = null;
};
pi.prototype.reset = function () {
  this.next = this.scope = this.gd = null;
};
var qi = v.console && v.console.createTask ? v.console.createTask.bind(v.console) : void 0,
  ri = qi ? Symbol("consoleTask") : void 0;
function si(a, b) {
  function c() {
    var e = ta.apply(0, arguments),
      f = this;
    return d.run(function () {
      return a.call.apply(a, [f].concat(ja(e)));
    });
  }
  b = void 0 === b ? "anonymous" : b;
  if (!qi || a[Pa(ri)]) return a;
  var d = qi(a.name || b);
  c[Pa(ri)] = d;
  return c;
}
var ti,
  ui = !1,
  vi = new ni();
function wi(a, b) {
  ti || xi();
  ui || (ti(), (ui = !0));
  a = si(a, "goog.async.run");
  vi.add(a, b);
}
function xi() {
  if (v.Promise && v.Promise.resolve) {
    var a = v.Promise.resolve(void 0);
    ti = function () {
      a.then(yi);
    };
  } else
    ti = function () {
      var b = yi;
      "function" !== typeof v.setImmediate ||
      (v.Window && v.Window.prototype && (eb() || !B("Edge")) && v.Window.prototype.setImmediate == v.setImmediate)
        ? (li || (li = mi()), li(b))
        : v.setImmediate(b);
    };
}
function yi() {
  for (var a; (a = vi.remove()); ) {
    try {
      a.gd.call(a.scope);
    } catch (b) {
      Wa(b);
    }
    oi.put(a);
  }
  ui = !1;
}
function zi(a) {
  this.U = 0;
  this.Df = void 0;
  this.Ua = this.oa = this.Oa = null;
  this.tc = this.ed = !1;
  if (a != he)
    try {
      var b = this;
      a.call(
        void 0,
        function (c) {
          Ai(b, 2, c);
        },
        function (c) {
          if (!(c instanceof Bi))
            try {
              if (c instanceof Error) throw c;
              throw Error("Promise rejected.");
            } catch (d) {}
          Ai(b, 3, c);
        }
      );
    } catch (c) {
      Ai(this, 3, c);
    }
}
function Ci() {
  this.next = this.context = this.nb = this.Na = this.Ca = null;
  this.yb = !1;
}
Ci.prototype.reset = function () {
  this.context = this.nb = this.Na = this.Ca = null;
  this.yb = !1;
};
var Di = new fi(
  function () {
    return new Ci();
  },
  function (a) {
    a.reset();
  }
);
function Ei(a, b, c) {
  var d = Di.get();
  d.Na = a;
  d.nb = b;
  d.context = c;
  return d;
}
function Fi(a, b, c) {
  Gi(a, b, c, null) || wi(Ha(b, a));
}
function Hi(a) {
  return new zi(function (b) {
    var c = a.length,
      d = [];
    if (c)
      for (
        var e = function (k, l, n) {
            c--;
            d[k] = l ? { kg: !0, value: n } : { kg: !1, reason: n };
            0 == c && b(d);
          },
          f = 0,
          h;
        f < a.length;
        f++
      )
        (h = a[f]), Fi(h, Ha(e, f, !0), Ha(e, f, !1));
    else b(d);
  });
}
zi.prototype.then = function (a, b, c) {
  null != a && Ta(a, "opt_onFulfilled should be a function.");
  null != b && Ta(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return Ii(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
};
zi.prototype.$goog_Thenable = !0;
function Ji(a, b) {
  b = Ei(b, b);
  b.yb = !0;
  Ki(a, b);
}
g = zi.prototype;
g.Fg = function (a, b) {
  return Ii(this, null, a, b);
};
g.catch = zi.prototype.Fg;
g.cancel = function (a) {
  if (0 == this.U) {
    var b = new Bi(a);
    wi(function () {
      Li(this, b);
    }, this);
  }
};
function Li(a, b) {
  if (0 == a.U)
    if (a.Oa) {
      var c = a.Oa;
      if (c.oa) {
        for (var d = 0, e = null, f = null, h = c.oa; h && (h.yb || (d++, h.Ca == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
        e &&
          (0 == c.U && 1 == d
            ? Li(c, b)
            : (f ? ((d = f), z(c.oa), z(null != d), d.next == c.Ua && (c.Ua = d), (d.next = d.next.next)) : Mi(c), Ni(c, e, 3, b)));
      }
      a.Oa = null;
    } else Ai(a, 3, b);
}
function Ki(a, b) {
  a.oa || (2 != a.U && 3 != a.U) || Oi(a);
  z(null != b.Na);
  a.Ua ? (a.Ua.next = b) : (a.oa = b);
  a.Ua = b;
}
function Ii(a, b, c, d) {
  b && (b = si(b, "goog.Promise.then"));
  c && (c = si(c, "goog.Promise.then"));
  var e = Ei(null, null, null);
  e.Ca = new zi(function (f, h) {
    e.Na = b
      ? function (k) {
          try {
            var l = b.call(d, k);
            f(l);
          } catch (n) {
            h(n);
          }
        }
      : f;
    e.nb = c
      ? function (k) {
          try {
            var l = c.call(d, k);
            void 0 === l && k instanceof Bi ? h(k) : f(l);
          } catch (n) {
            h(n);
          }
        }
      : h;
  });
  e.Ca.Oa = a;
  Ki(a, e);
  return e.Ca;
}
g.Hg = function (a) {
  z(1 == this.U);
  this.U = 0;
  Ai(this, 2, a);
};
g.Ig = function (a) {
  z(1 == this.U);
  this.U = 0;
  Ai(this, 3, a);
};
function Ai(a, b, c) {
  0 == a.U &&
    (a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself"))),
    (a.U = 1),
    Gi(c, a.Hg, a.Ig, a) || ((a.Df = c), (a.U = b), (a.Oa = null), Oi(a), 3 != b || c instanceof Bi || Pi(a, c)));
}
function Gi(a, b, c, d) {
  if (a instanceof zi)
    return (
      null != b && Ta(b, "opt_onFulfilled should be a function."),
      null != c && Ta(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
      Ki(a, Ei(b || he, c || null, d)),
      !0
    );
  if (a)
    try {
      var e = !!a.$goog_Thenable;
    } catch (h) {
      e = !1;
    }
  else e = !1;
  if (e) return a.then(b, c, d), !0;
  if (za(a))
    try {
      var f = a.then;
      if ("function" === typeof f) return Qi(a, f, b, c, d), !0;
    } catch (h) {
      return c.call(d, h), !0;
    }
  return !1;
}
function Qi(a, b, c, d, e) {
  function f(l) {
    k || ((k = !0), d.call(e, l));
  }
  function h(l) {
    k || ((k = !0), c.call(e, l));
  }
  var k = !1;
  try {
    b.call(a, h, f);
  } catch (l) {
    f(l);
  }
}
function Oi(a) {
  a.ed || ((a.ed = !0), wi(a.ig, a));
}
function Mi(a) {
  var b = null;
  a.oa && ((b = a.oa), (a.oa = b.next), (b.next = null));
  a.oa || (a.Ua = null);
  null != b && z(null != b.Na);
  return b;
}
g.ig = function () {
  for (var a; (a = Mi(this)); ) Ni(this, a, this.U, this.Df);
  this.ed = !1;
};
function Ni(a, b, c, d) {
  if (3 == c && b.nb && !b.yb) for (; a && a.tc; a = a.Oa) a.tc = !1;
  if (b.Ca) (b.Ca.Oa = null), Ri(b, c, d);
  else
    try {
      b.yb ? b.Na.call(b.context) : Ri(b, c, d);
    } catch (e) {
      Si.call(null, e);
    }
  Di.put(b);
}
function Ri(a, b, c) {
  2 == b ? a.Na.call(a.context, c) : a.nb && a.nb.call(a.context, c);
}
function Pi(a, b) {
  a.tc = !0;
  wi(function () {
    a.tc && Si.call(null, b);
  });
}
var Si = Wa;
function Bi(a) {
  La.call(this, a);
}
Ja(Bi, La);
Bi.prototype.name = "cancel";
function Ti(a, b) {
  Z.call(this);
  this.wa = a || 1;
  this.Zb = b || v;
  this.xe = Ga(this.Gg, this);
  this.nf = Date.now();
}
Ja(Ti, Z);
g = Ti.prototype;
g.enabled = !1;
g.B = null;
g.setInterval = function (a) {
  this.wa = a;
  this.B && this.enabled ? (this.stop(), this.start()) : this.B && this.stop();
};
g.Gg = function () {
  if (this.enabled) {
    var a = Date.now() - this.nf;
    0 < a && a < 0.8 * this.wa
      ? (this.B = this.Zb.setTimeout(this.xe, this.wa - a))
      : (this.B && (this.Zb.clearTimeout(this.B), (this.B = null)),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(), this.start()));
  }
};
g.start = function () {
  this.enabled = !0;
  this.B || ((this.B = this.Zb.setTimeout(this.xe, this.wa)), (this.nf = Date.now()));
};
g.stop = function () {
  this.enabled = !1;
  this.B && (this.Zb.clearTimeout(this.B), (this.B = null));
};
g.v = function () {
  Ti.na.v.call(this);
  this.stop();
  delete this.Zb;
};
function Ui(a, b, c) {
  if ("function" === typeof a) c && (a = Ga(a, c));
  else if (a && "function" == typeof a.handleEvent) a = Ga(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
}
function Vi(a, b, c) {
  W.call(this);
  this.Nb = a;
  this.wa = b || 0;
  this.ib = c;
  this.ec = Ga(this.Ya, this);
}
Ja(Vi, W);
g = Vi.prototype;
g.K = 0;
g.v = function () {
  Vi.na.v.call(this);
  this.stop();
  delete this.Nb;
  delete this.ib;
};
g.start = function (a) {
  this.stop();
  this.K = Ui(this.ec, void 0 !== a ? a : this.wa);
};
g.stop = function () {
  this.isActive() && v.clearTimeout(this.K);
  this.K = 0;
};
g.eb = function () {
  this.stop();
  this.Ya();
};
g.isActive = function () {
  return 0 != this.K;
};
g.Ya = function () {
  this.K = 0;
  this.Nb && this.Nb.call(this.ib);
};
function Wi() {}
Wi.prototype.ze = null;
Wi.prototype.getOptions = function () {
  var a;
  (a = this.ze) || ((a = {}), Xi(this) && ((a[0] = !0), (a[1] = !0)), (a = this.ze = a));
  return a;
};
var Yi;
function Zi() {}
Ja(Zi, Wi);
function $i(a) {
  return (a = Xi(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
}
function Xi(a) {
  if (!a.Ze && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), (a.Ze = d);
      } catch (e) {}
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Ze;
}
Yi = new Zi();
function aj(a) {
  Z.call(this);
  this.headers = new Map();
  this.Rc = a || null;
  this.sa = !1;
  this.Qc = this.g = null;
  this.Mb = this.lf = this.Cc = "";
  this.Ka = this.wd = this.wc = this.dd = !1;
  this.vb = 0;
  this.Lc = null;
  this.Cf = "";
  this.Nc = this.Bg = this.re = !1;
  this.Uc = this.le = null;
}
Ja(aj, Z);
aj.prototype.H = Vg(Wg(), "goog.net.XhrIo").M;
var bj = /^https?$/i,
  cj = ["POST", "PUT"],
  dj = [];
function ej(a, b, c, d, e, f, h) {
  var k = new aj();
  dj.push(k);
  b && k.listen("complete", b);
  k.Dd("ready", k.bg);
  f && (k.vb = Math.max(0, f));
  h && (k.re = h);
  k.send(a, c, d, e);
}
g = aj.prototype;
g.bg = function () {
  this.ad();
  lb(dj, this);
};
g.setTrustToken = function (a) {
  this.le = a;
};
g.setAttributionReporting = function (a) {
  this.Uc = a;
};
g.send = function (a, b, c, d) {
  if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Cc + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.Cc = a;
  this.Mb = "";
  this.lf = b;
  this.dd = !1;
  this.sa = !0;
  this.g = this.Rc ? $i(this.Rc) : $i(Yi);
  this.Qc = this.Rc ? this.Rc.getOptions() : Yi.getOptions();
  this.g.onreadystatechange = Ga(this.tf, this);
  this.Bg &&
    "onprogress" in this.g &&
    ((this.g.onprogress = Ga(function (h) {
      this.sf(h, !0);
    }, this)),
    this.g.upload && (this.g.upload.onprogress = Ga(this.sf, this)));
  try {
    $g(this.H, fj(this, "Opening Xhr")), (this.wd = !0), this.g.open(b, String(a), !0), (this.wd = !1);
  } catch (h) {
    $g(this.H, fj(this, "Error opening Xhr: " + h.message));
    gj(this, h);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (d)
    if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
    else if ("function" === typeof d.keys && "function" === typeof d.get) {
      e = r(d.keys());
      for (var f = e.next(); !f.done; f = e.next()) (f = f.value), c.set(f, d.get(f));
    } else throw Error("Unknown input type for opt_headers: " + String(d));
  d = Array.from(c.keys()).find(function (h) {
    return "content-type" == h.toLowerCase();
  });
  e = v.FormData && a instanceof v.FormData;
  !(0 <= hb(cj, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  b = r(c);
  for (d = b.next(); !d.done; d = b.next()) (c = r(d.value)), (d = c.next().value), (c = c.next().value), this.g.setRequestHeader(d, c);
  this.Cf && (this.g.responseType = this.Cf);
  "withCredentials" in this.g && this.g.withCredentials !== this.re && (this.g.withCredentials = this.re);
  if ("setTrustToken" in this.g && this.le)
    try {
      this.g.setTrustToken(this.le);
    } catch (h) {
      $g(this.H, fj(this, "Error SetTrustToken: " + h.message));
    }
  if ("setAttributionReporting" in this.g && this.Uc)
    try {
      this.g.setAttributionReporting(this.Uc);
    } catch (h) {
      $g(this.H, fj(this, "Error SetAttributionReporting: " + h.message));
    }
  try {
    hj(this),
      0 < this.vb &&
        ((this.Nc = ij(this.g)),
        $g(this.H, fj(this, "Will abort after " + this.vb + "ms if incomplete, xhr2 " + this.Nc)),
        this.Nc ? ((this.g.timeout = this.vb), (this.g.ontimeout = Ga(this.Tf, this))) : (this.Lc = Ui(this.Tf, this.vb, this))),
      $g(this.H, fj(this, "Sending request")),
      (this.wc = !0),
      this.g.send(a),
      (this.wc = !1);
  } catch (h) {
    $g(this.H, fj(this, "Send error: " + h.message)), gj(this, h);
  }
};
function ij(a) {
  return rb && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
g.Tf = function () {
  "undefined" != typeof wa &&
    this.g &&
    ((this.Mb = "Timed out after " + this.vb + "ms, aborting"),
    $g(this.H, fj(this, this.Mb)),
    this.dispatchEvent("timeout"),
    this.abort(8));
};
function gj(a, b) {
  a.sa = !1;
  a.g && ((a.Ka = !0), a.g.abort(), (a.Ka = !1));
  a.Mb = b;
  jj(a);
  kj(a);
}
function jj(a) {
  a.dd || ((a.dd = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.abort = function () {
  this.g &&
    this.sa &&
    ($g(this.H, fj(this, "Aborting")),
    (this.sa = !1),
    (this.Ka = !0),
    this.g.abort(),
    (this.Ka = !1),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    kj(this));
};
g.v = function () {
  this.g && (this.sa && ((this.sa = !1), (this.Ka = !0), this.g.abort(), (this.Ka = !1)), kj(this, !0));
  aj.na.v.call(this);
};
g.tf = function () {
  this.isDisposed() || (this.wd || this.wc || this.Ka ? lj(this) : this.Ag());
};
g.Ag = function () {
  lj(this);
};
function lj(a) {
  if (a.sa && "undefined" != typeof wa)
    if (a.Qc[1] && 4 == mj(a) && 2 == a.getStatus()) $g(a.H, fj(a, "Local request error detected and ignored"));
    else if (a.wc && 4 == mj(a)) Ui(a.tf, 0, a);
    else if ((a.dispatchEvent("readystatechange"), 4 == mj(a))) {
      $g(a.H, fj(a, "Request complete"));
      a.sa = !1;
      try {
        if (nj(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          try {
            var b = 2 < mj(a) ? a.g.statusText : "";
          } catch (c) {
            $g(a.H, "Can not get status: " + c.message), (b = "");
          }
          a.Mb = b + " [" + a.getStatus() + "]";
          jj(a);
        }
      } finally {
        kj(a);
      }
    }
}
g.sf = function (a, b) {
  z("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
  this.dispatchEvent(oj(a, "progress"));
  this.dispatchEvent(oj(a, b ? "downloadprogress" : "uploadprogress"));
};
function oj(a, b) {
  return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
}
function kj(a, b) {
  if (a.g) {
    hj(a);
    var c = a.g,
      d = a.Qc[0] ? function () {} : null;
    a.g = null;
    a.Qc = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      Yg(a.H, "Problem encountered resetting onreadystatechange: " + e.message);
    }
  }
}
function hj(a) {
  a.g && a.Nc && (a.g.ontimeout = null);
  a.Lc && (v.clearTimeout(a.Lc), (a.Lc = null));
}
g.isActive = function () {
  return !!this.g;
};
function nj(a) {
  var b = a.getStatus();
  a: switch (b) {
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
  if (!c) {
    if ((b = 0 === b))
      (a = String(a.Cc).match(Df)[1] || null),
        !a && v.self && v.self.location && (a = v.self.location.protocol.slice(0, -1)),
        (b = !bj.test(a ? a.toLowerCase() : ""));
    c = b;
  }
  return c;
}
function mj(a) {
  return a.g ? a.g.readyState : 0;
}
g.getStatus = function () {
  try {
    return 2 < mj(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
g.getResponseHeader = function (a) {
  if (this.g && 4 == mj(this)) return (a = this.g.getResponseHeader(a)), null === a ? void 0 : a;
};
g.getAllResponseHeaders = function () {
  return this.g && 2 <= mj(this) ? this.g.getAllResponseHeaders() || "" : "";
};
function fj(a, b) {
  return b + " [" + a.lf + " " + a.Cc + " " + a.getStatus() + "]";
}
function pj() {
  Z.call(this);
  var a = this;
  this.zc = navigator.onLine;
  this.Pb = new qj(function (c) {
    return rj(a, c);
  });
  X(this, this.Pb);
  var b = new qg(this);
  X(this, b);
  b.listen(window, ["online", "offline"], this.og);
  this.zc ||
    wi(function () {
      return a.Pb.start();
    });
}
t(pj, Z);
pj.prototype.ff = function () {
  return this.zc;
};
function rj(a, b) {
  a.zc != b && ((a.zc = b), a.dispatchEvent(new sj(b)), b ? a.Pb.stop() : a.Pb.start());
}
pj.prototype.og = function () {
  rj(this, navigator.onLine);
};
pj.prototype.v = function () {
  this.Pb.stop();
  Z.prototype.v.call(this);
};
pj.pd = function () {
  return uf(pj);
};
function sj(a) {
  Re.call(this, "change");
  this.ff = a;
}
t(sj, Re);
function qj(a) {
  W.call(this);
  var b = this;
  this.ec = a;
  this.Pd = !1;
  this.Tc = 0;
  this.je = new Vi(function () {
    return tj(b, !1);
  }, 1e4);
  X(this, this.je);
  this.Od = new Vi(function () {
    return uj(b);
  }, 5e3);
  X(this, this.Od);
  this.g = this.ja = null;
}
t(qj, W);
qj.prototype.start = function () {
  this.Pd || ((this.Pd = !0), (this.Tc = 0), uj(this));
};
qj.prototype.stop = function () {
  vj(this);
  this.Pd = !1;
};
function uj(a) {
  navigator.onLine || a.Tc++;
  var b = Zf().toString();
  a.g
    ? (a.g.open("GET", b, !0), a.g.send())
    : ((a.ja = new Image()),
      (a.ja.onload = function () {
        return tj(a, !0);
      }),
      (a.ja.onerror = function () {
        return tj(a, !1);
      }),
      (a.ja.onabort = function () {
        return tj(a, !1);
      }),
      (a.ja.src = b));
  a.je.start();
}
function tj(a, b) {
  vj(a);
  b ? (a.ec(!0), a.stop()) : !navigator.onLine && 2 <= a.Tc ? (a.ec(!1), a.stop()) : a.Od.start();
}
function vj(a) {
  a.ja && ((a.ja.onload = a.ja.onerror = a.ja.onabort = null), (a.ja = null));
  a.g && a.g.abort();
  a.je.stop();
  a.Od.stop();
}
var $f = new Nf("https://www.google.com/images/cleardot.gif");
function wj(a) {
  Z.call(this);
  this.xc = a;
  this.enabled = !1;
  this.Ed = function () {
    return Date.now();
  };
  this.mf = this.Ed();
}
t(wj, Z);
wj.prototype.setInterval = function (a) {
  this.xc = a;
  this.ga && this.enabled ? (this.stop(), this.start()) : this.ga && this.stop();
};
wj.prototype.start = function () {
  var a = this;
  this.enabled = !0;
  this.ga ||
    ((this.ga = setTimeout(function () {
      xj(a);
    }, this.xc)),
    (this.mf = this.Ed()));
};
wj.prototype.stop = function () {
  this.enabled = !1;
  this.ga && (clearTimeout(this.ga), (this.ga = void 0));
};
function xj(a) {
  if (a.enabled) {
    var b = Math.max(a.Ed() - a.mf, 0);
    b < 0.8 * a.xc
      ? (a.ga = setTimeout(function () {
          xj(a);
        }, a.xc - b))
      : (a.ga && (clearTimeout(a.ga), (a.ga = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
  } else a.ga = void 0;
}
function yj(a) {
  T.call(this, a);
}
t(yj, T);
yj.i = "privacy.context.external.ExternalPRequestContext";
function zj(a) {
  T.call(this, a);
}
t(zj, T);
zj.i = "privacy.context.external.ExternalPrivacyContext";
function Aj(a) {
  z(0 < a, "Initial value must be greater than zero.");
  z(3e5 >= a, "Max value should be at least as large as initial value.");
  z(!0, "Randomness factor should be between 0 and 1.");
  this.bf = a;
  this.qf = 3e5;
  this.Bb = this.Wa = a;
  this.Af = 0.1;
  this.Zf = 2;
}
Aj.prototype.reset = function () {
  this.Bb = this.Wa = this.bf;
};
function Bj(a) {
  T.call(this, a);
}
t(Bj, T);
Bj.prototype.tb = function (a) {
  S(this, 1, a);
};
Bj.prototype.fe = function (a) {
  rd(this, 3, a);
};
Bj.prototype.de = function (a) {
  rd(this, 4, a);
};
Bj.prototype.ce = function (a) {
  rd(this, 5, a);
};
Bj.i = "wireless_android_play_playlog.JsClientInfo.FlushInfo";
function Cj(a) {
  T.call(this, a);
}
t(Cj, T);
Cj.i = "wireless_android_play_playlog.JsClientInfo.UserAgentClientHints";
Cj.fa = [1];
function Dj(a) {
  T.call(this, a);
}
t(Dj, T);
Dj.prototype.rb = function (a) {
  sd(this, 7, a);
};
Dj.prototype.gb = function () {
  return gd(this, Bj, 10);
};
Dj.i = "wireless_android_play_playlog.JsClientInfo";
var Ej = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
new Cj();
function Fj(a) {
  T.call(this, a);
}
t(Fj, T);
Fj.prototype.hb = function () {
  return gd(this, Dj, 11);
};
Fj.i = "wireless_android_play_playlog.ClientInfo";
function Gj(a) {
  T.call(this, a);
}
t(Gj, T);
Gj.i = "wireless_android_play_playlog.ComplianceData";
function Hj(a) {
  T.call(this, a, 35);
}
t(Hj, T);
g = Hj.prototype;
g.aa = function () {
  return Ac(M(this, 11));
};
g.od = function () {
  return Ac(M(this, 11));
};
g.sb = function (a) {
  return rd(this, 11, a);
};
g.sd = function () {
  return null != Ac(M(this, 11));
};
g.nd = function () {
  var a = Ac(M(this, 11));
  return null == a ? void 0 : a;
};
g.Jc = function (a) {
  sd(this, 26, a);
};
function Ij(a, b) {
  return sd(a, 8, b);
}
g.Xc = function () {
  return ad(this, 16);
};
g.ld = function () {
  return O(this, Gj, 33);
};
g.Jf = function (a) {
  P(this, Gj, 33, a);
};
Hj.i = "wireless_android_play_playlog.LogEvent";
Hj.fa = [3, 20, 27];
function Jj(a) {
  T.call(this, a, 19);
}
t(Jj, T);
g = Jj.prototype;
g.kd = function () {
  return O(this, Fj, 1);
};
g.ta = function () {
  return gd(this, Fj, 1);
};
g.Aa = function (a) {
  P(this, Fj, 1, a);
};
g.Ub = function (a) {
  return S(this, 2, a);
};
g.ld = function () {
  return O(this, Gj, 18);
};
g.Jf = function (a) {
  P(this, Gj, 18, a);
};
Jj.i = "wireless_android_play_playlog.LogRequest";
Jj.fa = [3, 5];
function Kj(a) {
  T.call(this, a, 7);
}
t(Kj, T);
var Lj = (function (a) {
  return function (b) {
    Ta(a);
    if (null == b || "" == b) b = Ua(new a(), vd);
    else {
      Sa(b);
      b = JSON.parse(b);
      if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + w(b) + ": " + b);
      Tb(b, 32);
      b = Mc(a, b);
    }
    return b;
  };
})(Kj);
Kj.i = "wireless_android_play_playlog.LogResponse";
Kj.fa = [5, 6];
function Mj(a) {
  T.call(this, a);
}
t(Mj, T);
Mj.i = "wireless_android_play_playlog.JsLogResponseExtension";
var Nj = new (function (a, b, c) {
  var d = void 0 === d ? !1 : d;
  z(0 < a);
  this.cb = a;
  this.Me = b;
  this.Va = c;
  this.Ac = 0;
  this.Fb = O;
  this.defaultValue = void 0;
  this.sg = d;
})(175237375, Kj, Mj);
function Oj(a) {
  W.call(this);
  var b = this;
  this.Ea = "";
  this.S = [];
  this.jf = "";
  this.oe = this.pe = this.Zc = !1;
  this.rf = this.ie = -1;
  this.bc = this.Ce = !1;
  this.Ja = this.ia = null;
  this.Id = this.Jd = this.mb = this.xa = 0;
  this.Dg = 1;
  this.timeoutMillis = 0;
  this.pb = !1;
  this.lb = a.lb;
  this.Ia = a.Ia || function () {};
  this.Y = new Pj(a.lb, a.La);
  this.network = a.network;
  this.Pa = a.Pa || null;
  this.bufferSize = 1e3;
  this.Jg = Ha(gi, 0, 1);
  this.Yc = a.Kg || null;
  this.za = a.za || null;
  this.Cb = a.Cb || !1;
  this.ob = a.ob || null;
  this.M = Vg(Wg(), "playlog.clearcut.ClearcutBase").M;
  this.withCredentials = !a.Ie;
  this.La = a.La || !1;
  this.hf = !this.La && !!window && !!window.navigator && void 0 !== window.navigator.sendBeacon;
  var c = S(new Fj(), 1, 1);
  this.Y.Aa(c);
  this.Ga = new Aj(1e4);
  this.R = new wj(this.Ga.Wa);
  a = Qj(this, a.we);
  ff(this.R, "tick", a, !1, this);
  this.Vc = new wj(6e5);
  ff(this.Vc, "tick", a, !1, this);
  this.Cb || this.Vc.start();
  this.La ||
    (ff(document, "visibilitychange", function () {
      "hidden" === document.visibilityState && b.fd();
    }),
    ff(document, "pagehide", this.fd, !1, this));
}
t(Oj, W);
function Qj(a, b) {
  return b
    ? function () {
        b().then(function () {
          a.flush();
        });
      }
    : function () {
        a.flush();
      };
}
g = Oj.prototype;
g.v = function () {
  this.fd();
  this.R.stop();
  this.Vc.stop();
  W.prototype.v.call(this);
};
g.Sf = function (a) {
  this.bc = a;
};
function Rj(a) {
  a.Yc ||
    (a.Yc = 0.01 > a.Jg() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
  return a.Yc;
}
g.gg = function (a) {
  a instanceof Hj ? this.log(a) : ((a = Ij(new Hj(), a.A())), this.log(a));
};
g.If = function (a) {
  this.Y.Aa(a);
};
g.Jc = function (a) {
  this.Ea = a;
};
g.Rf = function (a) {
  this.Pa = a;
};
g.Qf = function (a) {
  this.ia || (this.ia = new zd());
  ed(this.ia, 2, a, nd);
};
g.Hf = function (a) {
  a ? (this.ia || (this.ia = new zd()), (a = a.A()), sd(this.ia, 4, a)) : this.ia && ad(this.ia, 4);
};
g.Mf = function (a) {
  this.Ja = a;
};
g.rb = function (a) {
  this.Y.rb(a);
};
g.Lf = function (a) {
  this.Ce = !0;
  Sj(this, a);
};
function Sj(a, b) {
  a.Ga = new Aj(1 > b ? 1 : b);
  a.R.setInterval(a.Ga.Wa);
}
g.log = function (a) {
  a = a.clone();
  var b = this.Dg++;
  a = R(a, 21, b);
  this.Ea && a.Jc(this.Ea);
  jd(a) || ((b = Date.now()), (b = Number.isFinite(b) ? b.toString() : "0"), ad(a, 1, Bc(b)));
  null != Q(a, 15) || R(a, 15, new Date().getTimezoneOffset() * (this.bc ? -60 : 60));
  this.ia && ((b = this.ia.clone()), P(a, zd, 16, b));
  b = this.S.length - this.bufferSize + 1;
  0 < b && (this.S.splice(0, b), (this.xa += b));
  this.S.push(a);
  this.Cb || this.R.enabled || this.R.start();
};
g.flush = function (a, b) {
  var c = this;
  if (0 === this.S.length) a && a();
  else if (this.pb) this.Y.tb(3), Tj(this);
  else {
    var d = Date.now();
    if (this.rf > d && this.ie < d) Zg(this.M, "Not flushing because server requested delay."), b && b("throttled");
    else {
      this.Y.tb(1);
      var e = this.Y.N(this.S, this.xa, this.mb, this.Pa, this.Jd, this.Id);
      d = {};
      var f = this.Ia();
      f && (d.Authorization = f);
      var h = Rj(this);
      this.za && ((d["X-Goog-AuthUser"] = this.za), (h = Jf(h, "authuser", this.za)));
      this.ob && ((d["X-Goog-PageId"] = this.ob), (h = Jf(h, "pageId", this.ob)));
      if (f && this.jf === f) Zg(this.M, "XHR with unauthorized request not retried"), b && b("stale-auth-token");
      else if ((Zg(this.M, "Flushing log to clearcut."), (this.S = []), this.R.enabled && this.R.stop(), (this.xa = 0), this.Zc))
        Zg(this.M, e.A()), d && Zg(this.M, JSON.stringify(d)), a && a();
      else {
        var k = e.A(),
          l;
        this.Ja && this.Ja.isSupported(k.length) && (l = this.Ja.bj(k));
        var n = {
            url: h,
            body: k,
            ag: 1,
            requestHeaders: d,
            requestType: "POST",
            withCredentials: this.withCredentials,
            timeoutMillis: this.timeoutMillis
          },
          u = function (p) {
            c.Ga.reset();
            c.R.setInterval(c.Ga.Wa);
            if (p) {
              var x = null;
              try {
                var E = JSON.stringify(JSON.parse(p.replace(")]}'\n", "")));
                x = Lj(E);
              } catch (H) {
                H instanceof Error && (p = c.M) && Xg(p, Kg, "Response parse failed: " + H.toString());
              }
              x &&
                ((p = Number),
                (E = "-1"),
                (E = void 0 === E ? "0" : E),
                (E = md(jd(x), E)),
                (p = p(E)),
                0 < p && ((c.ie = Date.now()), (c.rf = c.ie + p)),
                (x = xd(x, Nj))) &&
                ((p = -1), (p = void 0 === p ? 0 : p), (x = md(Ac(M(x, 1)), p)), -1 !== x && (c.Ce || Sj(c, x)));
            }
            a && a();
            c.mb = 0;
          },
          q = function (p, x) {
            var E = hd(e, Hj, 3),
              H = Q(e, 14),
              J = c.Ga;
            J.Bb = Math.min(J.qf, J.Bb * J.Zf);
            J.Wa = Math.min(J.qf, J.Bb + (J.Af ? Math.round(J.Af * (Math.random() - 0.5) * 2 * J.Bb) : 0));
            c.R.setInterval(c.Ga.Wa);
            401 === p && f && (c.jf = f);
            H && (c.xa += H);
            void 0 === x && (x = (500 <= p && 600 > p) || 401 === p || 0 === p);
            x && ((c.S = E.concat(c.S)), c.Cb || c.R.enabled || c.R.start());
            (E = c.M) && Xg(E, Kg, "Flush failed. Status code: " + p);
            b && b("net-send-failed", p);
            ++c.mb;
          },
          y = function () {
            if (c.network) c.network.send(n, u, q);
            else {
              var p = c.M;
              p && Xg(p, Kg, "Missing NetworkInterface, required for logs transmission.");
            }
          };
        l
          ? l.then(
              function (p) {
                n.requestHeaders["Content-Encoding"] = "gzip";
                n.requestHeaders["Content-Type"] = "application/binary";
                n.body = p;
                n.ag = 2;
                y();
              },
              function () {
                y();
              }
            )
          : y();
      }
    }
  }
};
g.fd = function () {
  this.Zc || (Uj(this.Y, !0), this.pe && (this.Y.tb(3), Tj(this)), this.oe && (this.Y.tb(2), Vj(this)), this.flush(), Uj(this.Y, !1));
};
function Tj(a) {
  Zg(a.M, "Flushing log using sendBeacon.");
  Wj(a, 32, 10, function (b, c) {
    b = Jf(b, "format", "json");
    var d = !1;
    try {
      d = window.navigator.sendBeacon(b, c.A());
    } catch (e) {}
    a.pb && !d && (a.pb = !1);
    return d;
  });
}
function Vj(a) {
  Zg(a.M, "Flushing log using Image GET.");
  Wj(a, 6, 5, function (b, c) {
    c = c.A();
    for (var d = [], e = 0, f = 0; f < c.length; f++) {
      var h = c.charCodeAt(f);
      if (255 < h) throw Error("go/unicode-to-byte-error");
      d[e++] = h;
    }
    c = zb(d, 3);
    b = If(b, "format", "base64json", "p", c);
    if (15360 < b.length) return !1;
    new Image().src = b;
    return !0;
  });
}
function Wj(a, b, c, d) {
  if (0 !== a.S.length) {
    var e = Rj(a);
    for (var f = e.search(Lf), h = 0, k, l = []; 0 <= (k = Kf(e, h, f)); )
      l.push(e.substring(h, k)), (h = Math.min(e.indexOf("&", k) + 1 || f, f));
    l.push(e.slice(h));
    e = l.join("").replace(Mf, "$1");
    e = If(e, "auth", a.Ia(), "authuser", a.za || "0");
    for (f = 0; f < c && a.S.length; ++f) {
      h = a.S.slice(0, b);
      k = a.Y.N(h, a.xa, a.mb, a.Pa, a.Jd, a.Id);
      if (!d(e, k)) {
        ++a.mb;
        break;
      }
      a.xa = 0;
      a.mb = 0;
      a.Jd = 0;
      a.Id = 0;
      a.S = a.S.slice(h.length);
    }
    a.R.enabled && a.R.stop();
  }
}
function Pj(a, b) {
  this.La = b = void 0 === b ? !1 : b;
  this.Mc = this.locale = null;
  this.Ob = new Jj();
  Number.isInteger(a) && this.Ob.Ub(a);
  b || (this.locale = document.documentElement.getAttribute("lang"));
  this.Aa(new Fj());
}
g = Pj.prototype;
g.Ub = function (a) {
  this.Ob.Ub(a);
  return this;
};
g.Aa = function (a) {
  this.Ob.Aa(a);
  ld(a, 1) || S(a, 1, 1);
  this.La || ((a = this.hb()), kd(a, 5) || sd(a, 5, this.locale));
  this.Mc && ((a = this.hb()), O(a, Cj, 9) || P(a, Cj, 9, this.Mc));
};
g.rb = function (a) {
  this.hb().rb(a);
};
g.tb = function (a) {
  N(this.ta(), Dj, 11) && this.gb().tb(a);
};
function Uj(a, b) {
  N(a.ta(), Dj, 11) && ((a = a.gb()), qd(a, 2, b));
}
g.fe = function (a) {
  N(this.ta(), Dj, 11) && this.gb().fe(a);
};
g.de = function (a) {
  N(this.ta(), Dj, 11) && this.gb().de(a);
};
g.ce = function (a) {
  N(this.ta(), Dj, 11) && this.gb().ce(a);
};
g.ta = function () {
  return this.Ob.kd();
};
function Xj(a, b) {
  var c = void 0 === c ? Ej : c;
  b(window, c)
    .then(function (d) {
      a.Mc = d;
      d = a.hb();
      P(d, Cj, 9, a.Mc);
      return !0;
    })
    .catch(function () {
      return !1;
    });
}
g.hb = function () {
  var a = this.ta(),
    b = O(a, Dj, 11);
  b || ((b = new Dj()), P(a, Dj, 11, b));
  return b;
};
g.gb = function () {
  var a = this.hb(),
    b = O(a, Bj, 10);
  b || ((b = new Bj()), qd(b, 2, !1), P(a, Bj, 10, b));
  return b;
};
g.ld = function (a) {
  var b = new yj();
  a = rd(b, 13, a);
  b = new zj();
  a = P(b, yj, 2, a);
  b = new Gj();
  a = P(b, zj, 1, a);
  return S(a, 2, 9);
};
g.N = function (a, b, c, d, e, f) {
  b = void 0 === b ? 0 : b;
  e = void 0 === e ? 0 : e;
  f = void 0 === f ? 0 : f;
  this.fe(void 0 === c ? 0 : c);
  this.de(e);
  this.ce(f);
  c = this.Ob.clone();
  c = ad(c, 4, Bc(Date.now().toString()));
  a = id(c, Hj, 3, a);
  d && a.Jf(this.ld(d));
  b && R(a, 14, b);
  return a;
};
function Yj(a) {
  var b;
  this.hc = (b = void 0 === b ? !1 : b) ? null : a;
  this.Ta = b ? a : null;
  this.H = Vg(Wg(), "rocket.impressions.ClearcutTransport").M;
}
Yj.prototype.qb = function (a) {
  var b = this.Ta ? this.Ta.gg.bind(this.Ta) : this.hc.log.bind(this.hc),
    c = this.Ta ? this.Ta.flush.bind(this.Ta) : this.hc.flush.bind(this.hc);
  a = Ij(new Hj(), a.A());
  b(a);
  return new zi(
    function (d) {
      var e = this;
      c(d, function (f, h) {
        var k = e.H;
        k && Xg(k, Kg, "Impressions Clearcut flush failed with " + f + " (error code: " + (h + ")"));
        d();
      });
    }.bind(this)
  );
};
function Zj() {}
Zj.prototype.qb = function () {};
function ak(a) {
  T.call(this, a);
}
t(ak, T);
ak.prototype.rc = function () {
  var a = void 0 === a ? 0 : a;
  var b = M(this, 1);
  if (null != b)
    if (L(b))
      if ("number" === typeof b) b = Fc(b);
      else {
        Sa(b);
        z(L(b));
        z(!0);
        var c = Math.trunc(Number(b));
        0 <= c && c <= Number.MAX_SAFE_INTEGER ? (b = c) : ((b = Gc(b)), (c = Number(b)), (b = Number.isSafeInteger(c) ? c : b));
      }
    else b = void 0;
  return md(b, a);
};
ak.prototype.Wd = function (a) {
  S(this, 2, a);
};
ak.i = "docs.diagnostics.impressions.HighFrequencyDetails";
function bk() {
  Dh.call(this);
}
t(bk, Dh);
bk.prototype.rc = function () {
  return Ra(O(this.h, ak, 7).rc());
};
bk.prototype.md = function () {
  return Ra(O(Fh(this.h), wh, 2).md());
};
bk.prototype.Tb = function (a) {
  O(Fh(this.h), wh, 2).Tb(a);
};
bk.prototype.Wd = function (a) {
  O(this.h, ak, 7).Wd(a);
};
var ck = new vh("high_frequency_builder");
function dk(a, b, c) {
  a = new Ti(a);
  X(c, a);
  var d = new qg(c);
  X(c, d);
  d.listen(a, "tick", b);
  a.start();
}
function ek() {
  Dh.call(this);
}
t(ek, Dh);
function fk(a, b, c) {
  var d = 1e3 * Date.now();
  if (0 == b) {
    b = new yh();
    var e = new xh().Vd(d);
    P(b, xh, 1, e);
    S(b, 3, 1);
    P(a.h, yh, 8, b);
    a.h.Kc(c);
    R(a.h, 13, c);
    a.h.Vd(d);
    R(a.h, 3, c);
  } else if (1 == b)
    (b = new yh()), (e = new wh()), (d = R(e, 1, d)), P(b, wh, 2, d), S(b, 3, 2), P(a.h, yh, 8, b), a.h.Kc(c), R(a.h, 3, c);
  else throw Error("Invalid TimingType was specified");
  return a;
}
ek.prototype.sb = function (a) {
  this.h.sb(a);
  return this;
};
var gk = new vh("system_builder");
function hk(a, b, c) {
  W.call(this);
  this.m = a;
  this.ea = b;
  this.ic = c;
  this.O = {};
  this.xd();
}
t(hk, W);
g = hk.prototype;
g.xd = function () {
  dk(6e4, this.Fe, this);
};
g.ba = function (a) {
  ik(this.m, "create new impression builder");
  return Eh(this.m.ba(a), ck);
};
g.ca = function () {
  return this.m.ca();
};
g.Qa = function (a) {
  ik(this.m, "record impressions");
  var b = a.aa();
  z(null != this.ic[b], "An impression that is not of the high-frequency kind cannot be recorded with the HighFrequencyRecorder");
  a = Eh(a, ck);
  if ((b = this.O[b])) {
    var c = a;
    var d = b.rc();
    jk(this, b) ? (c = 4) : 32768 <= d ? (c = 5) : ((d = b.aa()), (c = this.ic[d].hj(b, c) ? 7 : null));
    if (c) kk(this, b, c);
    else
      return (
        (c = O(b.h, ak, 7)),
        (d = b.rc() + 1),
        ad(c, 1, null == d ? d : Hc(d)),
        b.Tb(1e3 * Date.now()),
        (c = b.aa()),
        this.ic[c].ij(b, a),
        lk(b)
      );
  }
  b = a;
  fk(Eh(b, gk), 1, this.m.Dc++);
  z(!N(b.h, ak, 7));
  c = new ak();
  c = ad(c, 1, Hc(1));
  P(b.h, ak, 7, c);
  c = z(od(O(Fh(b.h), wh, 2), 1));
  b.Tb(c);
  mk(this.m, b);
  c = b.aa();
  this.O[c] = b;
  return lk(a);
};
g.ha = function () {
  throw Error("RecorderImpl should end the session, not HFRecorder.");
};
g.Ba = function () {
  throw Error("RecorderImpl should start the session, not HFRecorder.");
};
g.qa = function () {
  this.Fe();
  this.ea.Hc();
  return Hi(Array.from(this.ea.Gc)).then();
};
g.X = function () {
  return this.m.X();
};
function lk(a) {
  a = a.h;
  z(null !== a);
  return new uh(a);
}
function jk(a, b) {
  var c = b.aa(),
    d = 1e3 * Date.now();
  b = b.md();
  a = z(a.ic[c]).gj;
  return d - b >= a;
}
function kk(a, b, c) {
  b.Wd(c);
  c = a.m;
  z(2 == ld(Fh(b.h), 3), "Cannot end impressions that are not elapsed");
  var d = Eh(b, gk),
    e = c.Dc++;
  O(Fh(d.h), wh, 2).Tb(1e3 * Date.now());
  R(d.h, 13, e);
  c.Fd.remove(z(b.h.rd()));
  nk(a.m, b);
  c = a.ea;
  3 <= c.m.V.Eb() && c.wb.eb();
  b = b.aa();
  delete a.O[b];
}
g.Fe = function () {
  for (var a in this.O) {
    var b = this.O[Number(a)];
    jk(this, b) && kk(this, b, 4);
  }
};
function ok(a, b) {
  if (b && a in b) return a;
  var c = tb ? "Webkit" : sb ? "Moz" : rb ? "ms" : null;
  return c ? ((c = c.toLowerCase()), (a = c + De(a)), void 0 === b || a in b ? a : null) : null;
}
function pk(a, b) {
  Re.call(this, "visibilitychange");
  this.hidden = a;
  this.visibilityState = b;
}
t(pk, Re);
var qk = new WeakMap();
function rk(a) {
  function b(f) {
    var h = r(f);
    f = h.next().value;
    h = ia(h);
    return a.apply(f, h);
  }
  function c(f) {
    f = r(f);
    f.next();
    f = ia(f);
    return d(e, f);
  }
  var d = void 0 === d ? sk : d;
  var e = Ba(a);
  return function () {
    var f = ta.apply(0, arguments),
      h = this || v,
      k = qk.get(h);
    k || ((k = {}), qk.set(h, k));
    return qb(k, [this].concat(ja(f)), b, c);
  };
}
function sk(a, b) {
  a = [a];
  for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
  return a.join("\v");
}
function tk(a) {
  Z.call(this);
  a || (a = Ma || (Ma = new ki()));
  this.Za = a;
  if ((this.Le = this.lg())) this.hg = ff(this.Za.D, this.Le, Ga(this.ng, this));
}
Ja(tk, Z);
g = tk.prototype;
g.lg = rk(function () {
  var a = this.isSupported(),
    b = "hidden" != this.qc();
  return a ? (b ? (((tb ? "Webkit" : sb ? "Moz" : rb ? "ms" : null) || "") + "visibilitychange").toLowerCase() : "visibilitychange") : null;
});
g.qc = rk(function () {
  return ok("hidden", this.Za.D);
});
g.mg = rk(function () {
  return ok("visibilityState", this.Za.D);
});
g.isSupported = function () {
  return !!this.qc();
};
g.ng = function () {
  var a = this.isSupported() ? this.Za.D[this.mg()] : null;
  a = new pk(!!this.Za.D[this.qc()], a);
  this.dispatchEvent(a);
};
g.v = function () {
  pf(this.hg);
  tk.na.v.call(this);
};
function uk(a, b) {
  W.call(this);
  this.l = a;
  this.Oc = new tk(b);
  X(this, this.Oc);
  this.mc = new qg(this);
  X(this, this.mc);
  this.Oc.isSupported() && this.mc.listen(this.Oc, "visibilitychange", this.xg);
}
t(uk, W);
uk.prototype.xg = function () {
  if (this.l.X()) {
    var a = this.Oc;
    a = !!a.Za.D[a.qc()];
    a = this.l.ba(a ? 102001 : 102e3, 0);
    this.l.Qa(a);
  }
};
function vk(a, b, c) {
  c = void 0 === c ? !1 : c;
  W.call(this);
  this.m = a;
  this.ea = b;
  X(this, this.ea);
  this.bd = c;
  this.Fc = null;
}
t(vk, W);
g = vk.prototype;
g.Qa = function (a) {
  ik(this.m, "record impressions");
  a = nk(this.m, a);
  var b = this.ea;
  3 <= b.m.V.Eb() && b.wb.eb();
  return new uh(a);
};
g.ba = function (a, b) {
  ik(this.m, "create new impression builder");
  a = fk(this.m.ba(a), b, this.m.Dc++);
  1 == b && mk(this.m, a);
  return a;
};
g.ca = function () {
  return this.m.ca();
};
g.ha = function () {
  ik(this.m, "end the session");
  var a = this.ea;
  if (!a.lc || a.m.td) {
    var b = wk(a.m, 691).N();
    b = xk(a.m, [b]);
    a.ab.qb(b);
  }
  a.Hc();
  this.m.ha();
  this.Fc && (Qe(this.Fc), (this.Fc = null));
};
g.Ba = function () {
  this.m.Ba();
  this.ea.initialize();
  this.ea.wb.eb();
  this.bd && (this.Fc = new uk(this));
};
g.qa = function () {
  this.ea.Hc();
  return Hi(Array.from(this.ea.Gc)).then();
};
g.X = function () {
  return this.m.X();
};
function yk(a, b, c) {
  W.call(this);
  this.l = a;
  X(this, this.l);
  this.Jb = b;
  X(this, this.Jb);
  this.jb = c;
}
t(yk, W);
g = yk.prototype;
g.Qa = function (a) {
  var b = a.aa();
  return (this.jb[b] ? this.Jb : this.l).Qa(a);
};
g.ba = function (a, b) {
  return (this.jb[a] ? this.Jb : this.l).ba(a, b);
};
g.ca = function () {
  return this.l.ca();
};
g.ha = function () {
  var a = this.Jb,
    b;
  for (b in a.O) kk(a, a.O[Number(b)], 3);
  return this.l.ha();
};
g.Ba = function () {
  return this.l.Ba();
};
g.qa = function () {
  return this.Jb.qa();
};
g.X = function () {
  return this.l.X();
};
function zk(a, b, c) {
  W.call(this);
  this.Nb = null != c ? a.bind(c) : a;
  this.wa = b;
  this.cc = null;
  this.ub = !1;
  this.Qb = 0;
  this.B = null;
}
t(zk, W);
g = zk.prototype;
g.eb = function (a) {
  this.cc = arguments;
  this.B || this.Qb ? (this.ub = !0) : this.Ya();
};
g.stop = function () {
  this.B && (v.clearTimeout(this.B), (this.B = null), (this.ub = !1), (this.cc = null));
};
g.pause = function () {
  this.Qb++;
};
g.resume = function () {
  this.Qb--;
  this.Qb || !this.ub || this.B || ((this.ub = !1), this.Ya());
};
g.v = function () {
  W.prototype.v.call(this);
  this.stop();
};
g.Ya = function () {
  var a = this;
  this.B = Ui(function () {
    a.B = null;
    a.ub && !a.Qb && ((a.ub = !1), a.Ya());
  }, this.wa);
  var b = this.cc;
  this.cc = null;
  this.Nb.apply(null, b);
};
function Ak(a, b, c, d, e) {
  W.call(this);
  this.m = a;
  this.xb = b;
  this.ab = c;
  this.wb = new zk(this.Hc, 3e3, this);
  this.Gc = new Set();
  this.lc = d;
  this.vd = e || 6e4;
  Ia(function () {});
}
t(Ak, W);
Ak.prototype.initialize = function () {
  dk(this.vd, this.wb.eb, this.wb);
  dk(36e5, this.qg, this);
};
Ak.prototype.Hc = function () {
  var a = this;
  if (0 != this.m.V.Eb() && (!this.lc || this.m.td)) {
    var b = Bk(this.m),
      c = this.xb.qb(b);
    c &&
      (Ji(c, function () {
        return void a.Gc.delete(z(c));
      }),
      this.Gc.add(c));
  }
};
Ak.prototype.qg = function () {
  var a = this.m,
    b = wk(a, 1153).N();
  a.V.add(b);
  this.wb.eb();
};
function Ck(a) {
  W.call(this);
  this.l = a;
  X(this, this.l);
}
t(Ck, W);
g = Ck.prototype;
g.Qa = function (a) {
  a = this.l.Qa(a);
  this.qa();
  return a;
};
g.ba = function (a, b) {
  return this.l.ba(a, b);
};
g.ca = function () {
  return this.l.ca();
};
g.ha = function () {
  return this.l.ha();
};
g.Ba = function () {
  return this.l.Ba();
};
g.qa = function () {
  return this.l.qa();
};
g.X = function () {
  return this.l.X();
};
var Dk = v.window ? [v.window, v.window.opener, v.window.parent] : [];
function Ek() {
  z(!0, "RippleTransport can only be used in DEBUG mode");
  this.Kd = this.cf = !1;
  this.la = null;
  this.Ee = this.De = 0;
  this.gf = !0;
  for (var a = 0; a < Dk.length; a++) {
    var b = Dk[a];
    if (b && b.chrome && b.chrome.runtime && b.chrome.runtime.connect) {
      this.cf = !0;
      this.xd(b);
      break;
    }
  }
}
Ek.prototype.xd = function (a) {
  var b = this;
  this.la = a.chrome.runtime.connect("ciiamoeghmklpofjbocenebdfbgjapaa");
  this.Kd = !0;
  this.la.onDisconnect.addListener(function () {
    b.Kd = !1;
  });
  this.gf &&
    document.addEventListener("mousemove", function (c) {
      b.De = c.clientX;
      b.Ee = c.clientY;
    });
};
Ek.prototype.qb = function (a) {
  if (this.cf && this.Kd) {
    var b = O(a, Vh, 2) || new Vh(),
      c = a.ca() || new ai(),
      d = a.kd() || new Th();
    a = hd(a, Fk, 1);
    a = r(a);
    for (var e = a.next(); !e.done; e = a.next())
      this.la.postMessage({ detail: { impression: e.value.A(), session_info: b.A(), session_invariants: c.A(), client_info: d.A() } });
    this.gf && document.dispatchEvent(new CustomEvent("ripple", { detail: { clientX: this.De, clientY: this.Ee } }));
  }
};
function Gk() {}
Gk.prototype.jd = function () {
  return new bk();
};
function Hk() {
  this.ud = {};
  this.Sc = {};
  this.zb = null;
}
function Ik(a, b, c) {
  z(!a.ud[b.getId()], "Factory is already registered");
  a.ud[b.getId()] = c;
}
function Jk() {
  this.V = [];
}
Jk.prototype.add = function (a) {
  this.V.push(a);
};
Jk.prototype.Eb = function () {
  return this.V.length;
};
function Kk() {
  this.O = {};
}
Kk.prototype.add = function (a) {
  z(2 == ld(Fh(a.h), 3));
  var b = z(a.h.rd());
  z(null == this.O[b]);
  this.O[b] = a;
};
Kk.prototype.remove = function (a) {
  z(null != this.O[a]);
  delete this.O[a];
};
function Fk(a) {
  T.call(this, a);
}
t(Fk, T);
g = Fk.prototype;
g.aa = function () {
  return Q(this, 10);
};
g.od = function () {
  return Q(this, 10);
};
g.sb = function (a) {
  return R(this, 10, a);
};
g.sd = function () {
  return null != Q(this, 10);
};
g.nd = function () {
  return pd(this, 10);
};
g.rd = function () {
  return Q(this, 12);
};
g.Ue = function () {
  return Q(this, 12);
};
g.Kc = function (a) {
  return R(this, 12, a);
};
g.Re = function () {
  return Q(this, 4);
};
g.Vd = function (a) {
  return R(this, 4, a);
};
g.fb = function () {
  return O(this, Ch, 5);
};
function Fh(a) {
  return O(a, yh, 8);
}
Fk.i = "docs.diagnostics.impressions.Impression";
function Lk(a) {
  T.call(this, a, 500);
}
t(Lk, T);
g = Lk.prototype;
g.kd = function () {
  return O(this, Th, 3);
};
g.ta = function () {
  return gd(this, Th, 3);
};
g.Aa = function (a) {
  P(this, Th, 3, a);
};
g.Yd = function (a) {
  P(this, Uh, 4, a);
};
g.ca = function () {
  return O(this, ai, 5);
};
g.ge = function (a) {
  return P(this, ai, 5, a);
};
Lk.i = "docs.diagnostics.impressions.ImpressionBatch";
Lk.fa = [1];
function Mk(a, b) {
  this.I = a;
  this.F = b;
  this.Dc = 1;
  this.kf = this.Cd = null;
  this.Fd = new Kk();
  this.V = new Jk();
  this.Ff = this.Ic = this.Rd = this.td = !1;
}
g = Mk.prototype;
g.Ba = function () {
  var a = wk(this, 716);
  Nk(this, a);
  a = a.N();
  this.V.add(a);
  this.Ic = this.Rd = !0;
};
g.ha = function () {
  this.Ic = !1;
};
g.ba = function (a) {
  if (0 == a) throw Error("Event code missing");
  return Eh(new Dh().initialize(new Fk(), this.F), gk).sb(a);
};
g.ca = function () {
  return this.I;
};
function mk(a, b) {
  z(2 == ld(Fh(b.h), 3), "Cannot track impressions that are not elapsed");
  a.Fd.add(b);
}
function nk(a, b) {
  R(b.h, 6, a.Cd);
  b = b.N();
  a.V.add(b);
  a.td = !0;
  return b;
}
function Bk(a) {
  var b = a.V,
    c = b.V;
  b.V = [];
  return xk(a, c);
}
function xk(a, b) {
  var c = new Lk();
  var d = a.I.ma.clone();
  c = P(c, Vh, 2, d);
  d = a.I;
  z(di(d));
  (d = d.Sb ? d.Sb.clone() : null) && c.ge(d);
  (d = Mk.prototype.pc(a.I, b)) && c.Aa(d);
  a = a.I.af.clone();
  c.Yd(a);
  id(c, Fk, 1, b);
  return c;
}
g.pc = function (a, b) {
  for (var c, d, e = b.length - 1; 0 <= e; e--) {
    var f = b[e].fb();
    if (f && O(f, ae, 1)) {
      f = O(f, ae, 1);
      f.We() && void 0 === c && (c = f.Te());
      f = f.Qe();
      if (void 0 !== f && void 0 === d) {
        d = new Rh();
        var h = wc(M(f, 2));
        void 0 !== h && d.Pf(h);
        f = wc(M(f, 1));
        void 0 !== f && d.Of(f);
      }
      if (void 0 !== c && void 0 !== d) break;
    }
  }
  a = a.Da ? a.Da.clone() : null;
  if (void 0 !== c || void 0 !== d) a || (a = new Th()), void 0 !== c && a.Nf(c), void 0 !== d && a.Gf(d);
  return a;
};
function wk(a, b) {
  var c = fk(a.ba(b), 0, a.Dc++);
  var d = a.Fd;
  var e = Object.keys(d.O);
  if (0 == e.length) d = null;
  else {
    for (var f = [], h = 0; h < e.length; h++) {
      var k = Number(e[h]),
        l = d.O[k];
      k = new zh().Kc(k).sb(l.h.nd());
      f.push(k);
    }
    d = f;
  }
  716 != b && ((e = z(a.Cd)), (b = z(a.kf)), R(c.h, 6, e), (e = new Ah()), (b = R(e, 1, b)), d && id(b, zh, 2, d), c.fb().Yd(b));
  Nk(a, c);
  return c;
}
function Nk(a, b) {
  a.Cd = b.h.Ue();
  a.kf = O(Fh(b.h), xh, 1).Re();
}
function ik(a, b) {
  z(a.Rd, "Cannot %s because the session has not been started", b);
  z(a.Ic && !a.Ff, "Cannot %s because the session is not running", b);
}
g.X = function () {
  return this.Rd && this.Ic && !this.Ff;
};
function Ok() {}
Ok.prototype.jd = function () {
  return new ek();
};
function Pk() {
  this.F = this.I = null;
}
Pk.prototype.ge = function (a) {
  this.I = a;
  return this;
};
Pk.prototype.Vb = function (a) {
  this.F = a;
  return this;
};
Pk.prototype.N = function () {
  z(!!this.I, "Session cannot be built unless the %s is set on the builder", "SessionInvariants");
  null == this.F && (this.F = new Hk());
  Ik(this.F, gk, new Ok());
  Ik(this.F, ck, new Gk());
  this.I.Vb(this.F);
  var a = this.F,
    b = this.I.hd();
  z(!a.zb);
  a.zb = b;
  b = ke(a.Sc);
  for (var c = 0; c < b.length; c++) b[c].te(a.zb);
  return new Mk(this.I, this.F);
};
function Qk() {
  this.ab = this.xb = null;
  this.I = new bi();
  this.F = null;
  this.lc = !1;
  this.jb = null;
  this.Je = !1;
  this.vd = this.pf = null;
  this.bd = !1;
  this.Uf = new Ke();
}
Qk.prototype.Vb = function (a) {
  this.F = a;
  return this;
};
Qk.prototype.Wb = function (a) {
  this.I.Wb(a);
  return this;
};
Qk.prototype.Xb = function (a) {
  this.I.Xb(a);
  return this;
};
Qk.prototype.N = function () {
  z(di(this.I));
  var a = new Pk().ge(this.I);
  null != this.F && a.Vb(this.F);
  a = a.N();
  if (this.Je) {
    if (this.pf) var b = this.pf;
    else (b = this.Uf), (b = new Le(new Ek(), b));
    this.ab = this.xb = b;
  }
  z(!!this.xb, "Recorder cannot be built unless the %s is set on the builder", "Transport");
  z(!!this.ab, "Recorder cannot be built unless the %s is set on the builder", "EndOfSessionTransport");
  var c = new Ak(a, this.xb, this.ab, this.lc, this.vd);
  b = new vk(a, c, this.bd);
  this.jb && ((a = new hk(a, c, this.jb)), (b = new yk(b, a, this.jb)));
  this.Je && (b = new Ck(b));
  return b;
};
function Rk() {}
Rk.prototype.send = function (a, b, c) {
  b = void 0 === b ? function () {} : b;
  c = void 0 === c ? function () {} : c;
  ej(
    a.url,
    function (d) {
      d = d.target;
      if (nj(d)) {
        try {
          var e = d.g ? d.g.responseText : "";
        } catch (f) {
          $g(d.H, "Can not get responseText: " + f.message), (e = "");
        }
        b(e);
      } else c(d.getStatus());
    },
    a.requestType,
    a.body,
    a.requestHeaders,
    a.timeoutMillis,
    a.withCredentials
  );
};
function Sk(a, b) {
  W.call(this);
  this.lb = a;
  this.za = b;
  this.fg = "https://play.google.com/log?format=json&hasfast=true";
  this.Yf = !1;
  this.Ng = !0;
  this.Ef = !1;
  this.Ea = "";
  this.pb = this.qd = this.Qd = !1;
  this.bc = void 0;
  this.network = new Rk();
}
t(Sk, W);
g = Sk.prototype;
g.rb = function (a) {
  this.ye = a;
};
g.Mf = function (a) {
  this.Ja = a;
};
g.Jc = function (a) {
  this.Ea = a;
};
g.Rf = function (a) {
  this.Pa = a;
};
g.Hf = function (a) {
  this.Xc = a;
};
g.Qf = function (a) {
  this.uf = a;
};
function Tk(a, b) {
  a.Ia = b;
}
g.If = function (a) {
  this.Be = a;
};
g.pe = function () {
  this.Qd = !0;
  return this;
};
g.oe = function () {
  this.qd = !0;
  return this;
};
g.Lf = function (a) {
  this.Oe = Math.max(a, 1e3);
};
g.Ie = function () {
  this.Mg = !0;
  return this;
};
g.Sf = function (a) {
  this.bc = a;
};
g.N = function () {
  var a = new Oj({
    lb: this.lb,
    Ia: this.Ia ? this.Ia : Ie,
    za: this.za,
    Kg: this.fg,
    La: this.Ef,
    Cb: this.Yf,
    Ie: this.Mg,
    ob: this.ob,
    we: this.we,
    network: this.network ? this.network : void 0
  });
  X(this, a);
  this.Ng || (a.Zc = !0);
  this.Be && a.If(this.Be);
  this.ye && a.rb(this.ye);
  this.Ja && a.Mf(this.Ja);
  this.Ea && a.Jc(this.Ea);
  this.Pa && a.Rf(this.Pa);
  this.Xc && a.Hf(this.Xc);
  this.uf && a.Qf(this.uf);
  this.Qd && (a.pe = this.Qd && a.hf);
  this.qd && (a.oe = this.qd);
  this.Oe && a.Lf(this.Oe);
  this.pb && (a.pb = a.hf);
  this.Lg && Xj(a.Y, this.Lg);
  this.bc && a.Sf(!0);
  this.network.Ub && this.network.Ub(this.lb);
  this.network.Eg && this.network.Eg(a);
  return a;
};
function Uk(a, b, c) {
  fetch(a.url, { method: a.requestType, headers: a.requestHeaders, body: a.body, mode: "cors", credentials: "include" }).then(function (d) {
    d.ok
      ? d.text().then(function (e) {
          b(e);
        })
      : c(d.status);
  });
}
function Vk() {
  this.Ke = !0;
  this.l = null;
  this.rg = new sh();
  new Wd();
  this.Hd = [];
}
g = Vk.prototype;
g.init = function (a) {
  var b = this;
  this.l = a;
  ei(this.l.ca());
  this.l.Ba();
  this.Hd.forEach(function (c) {
    return c();
  });
  this.Hd.length = 0;
  "undefined" !== typeof window &&
    ff(window, "unload", function () {
      b.l.X() && b.ha();
    });
};
g.X = function () {};
g.qa = function () {
  this.l && this.l.qa();
};
g.ha = function () {
  this.l && this.l.ha();
};
g.log = function (a, b, c) {
  var d = this;
  if (this.l) {
    var e = this.l.ba(a, 0);
    e = Eh(e, Ih);
    th(this.rg, Hh(e));
    void 0 !== b && b(e);
    c || this.Ke || e.Zd(!pj.pd().ff());
    this.l.Qa(e);
    this.Ke && this.qa();
  } else
    this.Hd.push(function () {
      return d.log(a, b, c);
    });
};
function Wk(a) {
  a = Xk(a);
  var b = new Qk().Wb(dg).Xb(72),
    c = b.Vb,
    d = new Hk();
  Ik(d, Ih, new Jh());
  var e = hg("n_ugs");
  z(0 <= hb(ke(Kh), e));
  var f = hg("n_rs");
  z(0 <= hb(ke(Lh), f));
  e = new Nh().he(e).ee(f);
  z(!d.Sc[Oh.getId()], "Applier is already registered");
  d.Sc[Oh.getId()] = e;
  d.zb && e.te(d.zb);
  b = c.call(b, d);
  a = new Yj(a);
  b.xb = a;
  b.ab = new Zj();
  return b.N();
}
function Xk(a) {
  var b = !0;
  b = void 0 === b ? !1 : b;
  var c = new Sk(128, "0");
  a &&
    Tk(c, function () {
      return "Bearer " + a();
    });
  b && ((c.Ef = !0), (c.network = { send: Uk }));
  return c.N();
}
function Yk(a) {
  Z.call(this);
  this.da = a;
}
t(Yk, Z);
function Zk(a) {
  chrome.runtime.onInstalled.addListener(function () {
    $k({ contexts: ["page"], id: "defaultItem", title: "Save to Keep" });
    $k({ contexts: ["frame", "link", "video", "audio"], id: "catchAllItem", title: "Save current page to Keep" });
    $k({ contexts: ["selection"], id: "selectionItem", title: "Save selection to Keep" });
    $k({ contexts: ["image"], id: "imageItem", title: "Save image to Keep" });
    $k({ contexts: ["action"], id: "blankNoteItem", title: "New blank note" });
    $k({ contexts: ["action"], id: "openMainAppItem", title: "Go to Keep" });
  });
  chrome.contextMenus.onClicked.addListener(function (b) {
    return al(a, b);
  });
}
function bl(a, b, c) {
  qh(b.url) ? cl(a, b.id, c) : dl(mb(el, fl), !1);
}
function cl(a, b, c) {
  switch (c) {
    case 1:
    case 6:
      dl(el, !1);
      dl(fl, !0);
      break;
    case 2:
    case 4:
    case 3:
    case 5:
      dl(mb(el, fl), !1);
      break;
    case 0:
      sf(b, "getPopupState", void 0, function (d) {
        cl(a, b, d);
      });
      break;
    default:
      dl(mb(el, fl), !0);
  }
}
function dl(a, b) {
  ib(a, function (c) {
    chrome.contextMenus.update(c, { enabled: b });
  });
}
function $k(a) {
  chrome.contextMenus.create(a);
}
function al(a, b, c) {
  var d = b.menuItemId;
  if ("openMainAppItem" == d) chrome.tabs.create({ url: ah() }), a.da.log(9201);
  else if (c) {
    var e = {};
    switch (d) {
      case "blankNoteItem":
        e.blankNote = !0;
        a.da.log(9194);
        break;
      case "imageItem":
        e.imageUrl = b.srcUrl;
        a.da.log(9198);
        break;
      case "catchAllItem":
      case "defaultItem":
        a.da.log(9196);
        break;
      case "selectionItem":
        a.da.log(9199);
        break;
      default:
        return;
    }
    a.dispatchEvent(new rf(c, e));
  } else
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (f) {
      f[0] && al(a, b, f[0]);
    });
}
var el = ["blankNoteItem", "catchAllItem", "defaultItem"],
  fl = ["selectionItem", "imageItem"];
function gl() {
  this.ve = new Ne();
  this.da = new Vk();
  this.Ab = new Yk(this.da);
  this.mc = new qg(this);
}
function hl(a, b, c, d) {
  void 0 === d
    ? il(b.id, function (e) {
        hl(a, b, c, e);
      })
    : d
    ? sf(b.id, "getSelectedText", void 0, function (e) {
        c = void 0 === c ? {} : c;
        "string" === typeof e && (c.selectedText = e);
        sf(b.id, "updateModel", c);
      })
    : (void 0 === c ? (a.da.log(9205), (c = {})) : a.da.log(9574),
      chrome.scripting.executeScript({ target: { tabId: b.id }, files: ["flags.js", "injector.js"] }, function () {
        var e = c,
          f = new zf();
        f.update({ title: b.title, url: b.url, faviconUrl: b.favIconUrl });
        e.embedInfo = f.A();
        sf(b.id, "setInitInfo", c);
      }));
}
function il(a, b) {
  sf(a, "ping", void 0, function (c) {
    return void b("ping" == c);
  });
}
function jl(a, b) {
  "icon_disabled" == b ? chrome.action.disable(a) : chrome.action.enable(a);
  chrome.action.setIcon({ tabId: a, path: { 19: b + "_19.png", 38: b + "_38.png" } }, function () {});
}
function kl(a, b, c, d) {
  if (za(b) && c && c.tab) {
    var e = c.tab;
    switch (b.type) {
      case "appLoaded":
        if (!e.id) return;
        sf(e.id, "getInitInfo", void 0, function (f) {
          d(f);
        });
        return !0;
      case "authAvailability":
        b.value &&
          !a.da.X() &&
          Oe(a.ve, !1, function () {
            a.da.init(
              Wk(function () {
                return a.ve.ue;
              })
            );
          });
        return;
      case "configureContextMenu":
        bl(a.Ab, e, b.value);
        return;
    }
    sf(c.tab.id, b.type, b.value, d);
  }
}
function ll() {
  chrome.identity.getAuthToken({ interactive: !1 }, function (a) {
    a &&
      (chrome.identity.removeCachedAuthToken({ token: a }),
      rh(function (b) {
        sf(b.id, "updateAuthToken");
      }));
  });
}
(function () {
  var a = new gl();
  chrome.action.onClicked.addListener(function (b) {
    hl(a, b);
  });
  chrome.runtime.onMessage.addListener(function (b, c, d) {
    return kl(a, b, c, d);
  });
  Zk(a.Ab);
  chrome.tabs.onUpdated.addListener(function (b, c, d) {
    if (c.status || c.url) qh(d.url) ? jl(b, "icon") : jl(b, "icon_disabled"), d.active && bl(a.Ab, d);
  });
  chrome.tabs.onActivated.addListener(function (b) {
    chrome.tabs.get(b.tabId, function (c) {
      bl(a.Ab, c, 0);
    });
  });
  a.mc.listen(a.Ab, "c", function (b) {
    hl(a, b.tab, b.Xf);
  });
  chrome.identity.onSignInChanged.addListener(function () {
    ll();
  });
  rh(function (b) {
    var c = b.id;
    qh(b.url) ? jl(c, "icon") : jl(c, "icon_disabled");
  });
  chrome.identity.getProfileUserInfo({ accountStatus: chrome.identity.AccountStatus.ANY }, function (b) {
    b = b.email;
    var c = chrome.runtime.getManifest().short_name;
    chrome.action.setTitle({ title: b ? c + "\n" + b : c });
  });
})();
