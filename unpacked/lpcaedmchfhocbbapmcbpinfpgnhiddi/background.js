var d;
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
function f(a, b) {
  if (b)
    a: {
      var c = da;
      a = a.split(".");
      for (var e = 0; e < a.length - 1; e++) {
        var h = a[e];
        if (!(h in c)) break a;
        c = c[h];
      }
      a = a[a.length - 1];
      e = c[a];
      b = b(e);
      b != e && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
    }
}
f("Symbol", function (a) {
  function b(k) {
    if (this instanceof b) throw new TypeError("Symbol is not a constructor");
    return new c(e + (k || "") + "_" + h++, k);
  }
  function c(k, n) {
    this.mg = k;
    ba(this, "description", { configurable: !0, writable: !0, value: n });
  }
  if (a) return a;
  c.prototype.toString = function () {
    return this.mg;
  };
  var e = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    h = 0;
  return b;
});
f("Symbol.iterator", function (a) {
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
    var e = da[b[c]];
    "function" === typeof e &&
      "function" != typeof e.prototype[a] &&
      ba(e.prototype, a, {
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
function ha(a) {
  return (a.raw = a);
}
function ja(a, b) {
  a.raw = b;
  return a;
}
function ka(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  if (b) return b.call(a);
  if ("number" == typeof a.length) return { next: aa(a) };
  throw Error(String(a) + " is not an iterable or ArrayLike");
}
function la(a) {
  for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
  return c;
}
function ma(a) {
  return a instanceof Array ? a : la(ka(a));
}
function na(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var oa =
  "function" == typeof Object.assign
    ? Object.assign
    : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
          var e = arguments[c];
          if (e) for (var h in e) na(e, h) && (a[h] = e[h]);
        }
        return a;
      };
f("Object.assign", function (a) {
  return a || oa;
});
var pa =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          function b() {}
          b.prototype = a;
          return new b();
        },
  qa;
if ("function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
else {
  var ra;
  a: {
    var sa = { a: !0 },
      ta = {};
    try {
      ta.__proto__ = sa;
      ra = ta.a;
      break a;
    } catch (a) {}
    ra = !1;
  }
  qa = ra
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var ua = qa;
function g(a, b) {
  a.prototype = pa(b.prototype);
  a.prototype.constructor = a;
  if (ua) ua(a, b);
  else
    for (var c in b)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var e = Object.getOwnPropertyDescriptor(b, c);
          e && Object.defineProperty(a, c, e);
        } else a[c] = b[c];
  a.pa = b.prototype;
}
function va() {
  for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
  return b;
}
f("Array.prototype.find", function (a) {
  return a
    ? a
    : function (b, c) {
        a: {
          var e = this;
          e instanceof String && (e = String(e));
          for (var h = e.length, k = 0; k < h; k++) {
            var n = e[k];
            if (b.call(c, n, k, e)) {
              b = n;
              break a;
            }
          }
          b = void 0;
        }
        return b;
      };
});
f("WeakMap", function (a) {
  function b(r) {
    this.L = (q += Math.random() + 1).toString();
    if (r) {
      r = ka(r);
      for (var v; !(v = r.next()).done; ) (v = v.value), this.set(v[0], v[1]);
    }
  }
  function c() {}
  function e(r) {
    var v = typeof r;
    return ("object" === v && null !== r) || "function" === v;
  }
  function h(r) {
    if (!na(r, n)) {
      var v = new c();
      ba(r, n, { value: v });
    }
  }
  function k(r) {
    var v = Object[r];
    v &&
      (Object[r] = function (z) {
        if (z instanceof c) return z;
        Object.isExtensible(z) && h(z);
        return v(z);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var r = Object.seal({}),
          v = Object.seal({}),
          z = new a([
            [r, 2],
            [v, 3]
          ]);
        if (2 != z.get(r) || 3 != z.get(v)) return !1;
        z.delete(r);
        z.set(v, 4);
        return !z.has(r) && 4 == z.get(v);
      } catch (C) {
        return !1;
      }
    })()
  )
    return a;
  var n = "$jscomp_hidden_" + Math.random();
  k("freeze");
  k("preventExtensions");
  k("seal");
  var q = 0;
  b.prototype.set = function (r, v) {
    if (!e(r)) throw Error("Invalid WeakMap key");
    h(r);
    if (!na(r, n)) throw Error("WeakMap key fail: " + r);
    r[n][this.L] = v;
    return this;
  };
  b.prototype.get = function (r) {
    return e(r) && na(r, n) ? r[n][this.L] : void 0;
  };
  b.prototype.has = function (r) {
    return e(r) && na(r, n) && na(r[n], this.L);
  };
  b.prototype.delete = function (r) {
    return e(r) && na(r, n) && na(r[n], this.L) ? delete r[n][this.L] : !1;
  };
  return b;
});
f("Map", function (a) {
  function b() {
    var q = {};
    return (q.previous = q.next = q.head = q);
  }
  function c(q, r) {
    var v = q[1];
    return ea(function () {
      if (v) {
        for (; v.head != q[1]; ) v = v.previous;
        for (; v.next != v.head; ) return (v = v.next), { done: !1, value: r(v) };
        v = null;
      }
      return { done: !0, value: void 0 };
    });
  }
  function e(q, r) {
    var v = r && typeof r;
    "object" == v || "function" == v ? (k.has(r) ? (v = k.get(r)) : ((v = "" + ++n), k.set(r, v))) : (v = "p_" + r);
    var z = q[0][v];
    if (z && na(q[0], v))
      for (q = 0; q < z.length; q++) {
        var C = z[q];
        if ((r !== r && C.key !== C.key) || r === C.key) return { id: v, list: z, index: q, entry: C };
      }
    return { id: v, list: z, index: -1, entry: void 0 };
  }
  function h(q) {
    this[0] = {};
    this[1] = b();
    this.size = 0;
    if (q) {
      q = ka(q);
      for (var r; !(r = q.next()).done; ) (r = r.value), this.set(r[0], r[1]);
    }
  }
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var q = Object.seal({ x: 4 }),
          r = new a(ka([[q, "s"]]));
        if ("s" != r.get(q) || 1 != r.size || r.get({ x: 4 }) || r.set({ x: 4 }, "t") != r || 2 != r.size) return !1;
        var v = r.entries(),
          z = v.next();
        if (z.done || z.value[0] != q || "s" != z.value[1]) return !1;
        z = v.next();
        return z.done || 4 != z.value[0].x || "t" != z.value[1] || !v.next().done ? !1 : !0;
      } catch (C) {
        return !1;
      }
    })()
  )
    return a;
  var k = new WeakMap();
  h.prototype.set = function (q, r) {
    q = 0 === q ? 0 : q;
    var v = e(this, q);
    v.list || (v.list = this[0][v.id] = []);
    v.entry
      ? (v.entry.value = r)
      : ((v.entry = { next: this[1], previous: this[1].previous, head: this[1], key: q, value: r }),
        v.list.push(v.entry),
        (this[1].previous.next = v.entry),
        (this[1].previous = v.entry),
        this.size++);
    return this;
  };
  h.prototype.delete = function (q) {
    q = e(this, q);
    return q.entry && q.list
      ? (q.list.splice(q.index, 1),
        q.list.length || delete this[0][q.id],
        (q.entry.previous.next = q.entry.next),
        (q.entry.next.previous = q.entry.previous),
        (q.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  h.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = b();
    this.size = 0;
  };
  h.prototype.has = function (q) {
    return !!e(this, q).entry;
  };
  h.prototype.get = function (q) {
    return (q = e(this, q).entry) && q.value;
  };
  h.prototype.entries = function () {
    return c(this, function (q) {
      return [q.key, q.value];
    });
  };
  h.prototype.keys = function () {
    return c(this, function (q) {
      return q.key;
    });
  };
  h.prototype.values = function () {
    return c(this, function (q) {
      return q.value;
    });
  };
  h.prototype.forEach = function (q, r) {
    for (var v = this.entries(), z; !(z = v.next()).done; ) (z = z.value), q.call(r, z[1], z[0], this);
  };
  h.prototype[Symbol.iterator] = h.prototype.entries;
  var n = 0;
  return h;
});
f("Math.trunc", function (a) {
  return a
    ? a
    : function (b) {
        b = Number(b);
        if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
        var c = Math.floor(Math.abs(b));
        return 0 > b ? -c : c;
      };
});
f("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
f("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          e;
        for (e in b) na(b, e) && c.push(b[e]);
        return c;
      };
});
f("Object.is", function (a) {
  return a
    ? a
    : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
});
f("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        var e = this;
        e instanceof String && (e = String(e));
        var h = e.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + h, 0)); c < h; c++) {
          var k = e[c];
          if (k === b || Object.is(k, b)) return !0;
        }
        return !1;
      };
});
function wa(a, b, c) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  return a + "";
}
f("String.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        return -1 !== wa(this, b, "includes").indexOf(b, c || 0);
      };
});
f("Set", function (a) {
  function b(c) {
    this.D = new Map();
    if (c) {
      c = ka(c);
      for (var e; !(e = c.next()).done; ) this.add(e.value);
    }
    this.size = this.D.size;
  }
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var c = Object.seal({ x: 4 }),
          e = new a(ka([c]));
        if (!e.has(c) || 1 != e.size || e.add(c) != e || 1 != e.size || e.add({ x: 4 }) != e || 2 != e.size) return !1;
        var h = e.entries(),
          k = h.next();
        if (k.done || k.value[0] != c || k.value[1] != c) return !1;
        k = h.next();
        return k.done || k.value[0] == c || 4 != k.value[0].x || k.value[1] != k.value[0] ? !1 : h.next().done;
      } catch (n) {
        return !1;
      }
    })()
  )
    return a;
  b.prototype.add = function (c) {
    c = 0 === c ? 0 : c;
    this.D.set(c, c);
    this.size = this.D.size;
    return this;
  };
  b.prototype.delete = function (c) {
    c = this.D.delete(c);
    this.size = this.D.size;
    return c;
  };
  b.prototype.clear = function () {
    this.D.clear();
    this.size = 0;
  };
  b.prototype.has = function (c) {
    return this.D.has(c);
  };
  b.prototype.entries = function () {
    return this.D.entries();
  };
  b.prototype.values = function () {
    return this.D.values();
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function (c, e) {
    var h = this;
    this.D.forEach(function (k) {
      return c.call(e, k, k, h);
    });
  };
  return b;
});
f("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
f("Number.MAX_SAFE_INTEGER", function () {
  return 9007199254740991;
});
f("Number.isInteger", function (a) {
  return a
    ? a
    : function (b) {
        return Number.isFinite(b) ? b === Math.floor(b) : !1;
      };
});
f("Number.isSafeInteger", function (a) {
  return a
    ? a
    : function (b) {
        return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
      };
});
f("Number.isNaN", function (a) {
  return a
    ? a
    : function (b) {
        return "number" === typeof b && isNaN(b);
      };
});
function xa(a, b) {
  a instanceof String && (a += "");
  var c = 0,
    e = !1,
    h = {
      next: function () {
        if (!e && c < a.length) {
          var k = c++;
          return { value: b(k, a[k]), done: !1 };
        }
        e = !0;
        return { done: !0, value: void 0 };
      }
    };
  h[Symbol.iterator] = function () {
    return h;
  };
  return h;
}
f("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return xa(this, function (b, c) {
          return [b, c];
        });
      };
});
f("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return xa(this, function (b) {
          return b;
        });
      };
});
f("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return xa(this, function (b, c) {
          return c;
        });
      };
});
f("Array.from", function (a) {
  return a
    ? a
    : function (b, c, e) {
        c =
          null != c
            ? c
            : function (q) {
                return q;
              };
        var h = [],
          k = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof k) {
          b = k.call(b);
          for (var n = 0; !(k = b.next()).done; ) h.push(c.call(e, k.value, n++));
        } else for (k = b.length, n = 0; n < k; n++) h.push(c.call(e, b[n], n));
        return h;
      };
});
f("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          e;
        for (e in b) na(b, e) && c.push([e, b[e]]);
        return c;
      };
});
f("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (b, c) {
        var e = wa(this, b, "startsWith");
        b += "";
        var h = e.length,
          k = b.length;
        c = Math.max(0, Math.min(c | 0, e.length));
        for (var n = 0; n < k && c < h; ) if (e[c++] != b[n++]) return !1;
        return n >= k;
      };
});
f("globalThis", function (a) {
  return a || da;
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ya = ya || {},
  l = this || self;
function za(a, b) {
  a: {
    var c = ["CLOSURE_FLAGS"];
    for (var e = l, h = 0; h < c.length; h++)
      if (((e = e[c[h]]), null == e)) {
        c = null;
        break a;
      }
    c = e;
  }
  a = c && c[a];
  return null != a ? a : b;
}
function Aa(a) {
  var b = typeof a;
  return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
}
function Ba(a) {
  var b = Aa(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function Ca(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
function Da(a) {
  return (Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea]) || (a[Ea] = ++Fa);
}
var Ea = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Fa = 0;
function Ga(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function Ha(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function () {
      var h = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(h, e);
      return a.apply(b, h);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function Ia(a, b, c) {
  Ia = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga : Ha;
  return Ia.apply(null, arguments);
}
function Ja(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var e = c.slice();
    e.push.apply(e, arguments);
    return a.apply(this, e);
  };
}
function Ka(a) {
  var b = ["rocket_flushImpressions"],
    c = l;
  b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
  for (var e; b.length && (e = b.shift()); )
    b.length || void 0 === a ? (c = c[e] && c[e] !== Object.prototype[e] ? c[e] : (c[e] = {})) : (c[e] = a);
}
function La(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.pa = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.zj = function (e, h, k) {
    for (var n = Array(arguments.length - 2), q = 2; q < arguments.length; q++) n[q - 2] = arguments[q];
    return b.prototype[h].apply(e, n);
  };
}
function Ma(a) {
  return a;
}
function Na(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Na);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
La(Na, Error);
Na.prototype.name = "CustomError";
var Oa;
function Pa(a, b) {
  a = a.split("%s");
  for (var c = "", e = a.length - 1, h = 0; h < e; h++) c += a[h] + (h < b.length ? b[h] : "%s");
  Na.call(this, c + a[e]);
}
La(Pa, Na);
Pa.prototype.name = "AssertionError";
function Qa(a, b, c, e) {
  var h = "Assertion failed";
  if (c) {
    h += ": " + c;
    var k = e;
  } else a && ((h += ": " + a), (k = b));
  throw new Pa("" + h, k || []);
}
function m(a, b, c) {
  a || Qa("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Ra(a, b, c) {
  null == a && Qa("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Sa(a, b) {
  throw new Pa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
function Ta(a, b, c) {
  "number" !== typeof a && Qa("Expected number but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Ua(a, b, c) {
  "string" !== typeof a && Qa("Expected string but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2));
}
function Va(a, b, c) {
  "function" !== typeof a && Qa("Expected function but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function p(a, b, c) {
  Array.isArray(a) || Qa("Expected array but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}
function Wa(a, b, c, e) {
  a instanceof b || Qa("Expected instanceof %s but got %s.", [Xa(b), Xa(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
}
function Xa(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
function Ya(a) {
  l.setTimeout(function () {
    throw a;
  }, 0);
}
var Za = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var $a = za(610401301, !1),
  ab = za(572417392, !0);
function bb() {
  var a = l.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var cb,
  db = l.navigator;
cb = db ? db.userAgentData || null : null;
function eb(a) {
  return $a
    ? cb
      ? cb.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function t(a) {
  return -1 != bb().indexOf(a);
}
function fb() {
  return $a ? !!cb && 0 < cb.brands.length : !1;
}
function gb() {
  return fb() ? !1 : t("Trident") || t("MSIE");
}
function hb() {
  return fb() ? eb("Chromium") : ((t("Chrome") || t("CriOS")) && !(fb() ? 0 : t("Edge"))) || t("Silk");
}
var ib = Array.prototype.indexOf
    ? function (a, b) {
        m(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  kb = Array.prototype.forEach
    ? function (a, b) {
        m(null != a.length);
        Array.prototype.forEach.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, e = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++) h in e && b.call(void 0, e[h], h, a);
      },
  lb = Array.prototype.map
    ? function (a, b) {
        m(null != a.length);
        return Array.prototype.map.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, e = Array(c), h = "string" === typeof a ? a.split("") : a, k = 0; k < c; k++)
          k in h && (e[k] = b.call(void 0, h[k], k, a));
        return e;
      },
  mb = Array.prototype.every
    ? function (a, b) {
        m(null != a.length);
        return Array.prototype.every.call(a, b, void 0);
      }
    : function (a, b) {
        for (var c = a.length, e = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
          if (h in e && !b.call(void 0, e[h], h, a)) return !1;
        return !0;
      };
function nb(a, b) {
  b = ib(a, b);
  var c;
  if ((c = 0 <= b)) m(null != a.length), Array.prototype.splice.call(a, b, 1);
  return c;
}
function ob(a) {
  return Array.prototype.concat.apply([], arguments);
}
function pb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
    return c;
  }
  return [];
}
function qb(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var e = arguments[c];
    if (Ba(e)) {
      var h = a.length || 0,
        k = e.length || 0;
      a.length = h + k;
      for (var n = 0; n < k; n++) a[h + n] = e[n];
    } else a.push(e);
  }
}
function rb(a) {
  rb[" "](a);
  return a;
}
rb[" "] = function () {};
function sb(a, b, c, e) {
  e = e ? e(b) : b;
  return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : (a[e] = c(b));
}
var tb = gb(),
  ub = t("Gecko") && !(-1 != bb().toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
  vb = -1 != bb().toLowerCase().indexOf("webkit") && !t("Edge");
!t("Android") || hb();
var wb = hb(),
  xb =
    t("Safari") &&
    !(
      hb() ||
      (fb() ? 0 : t("Coast")) ||
      (fb() ? 0 : t("Opera")) ||
      (fb() ? 0 : t("Edge")) ||
      (fb() ? eb("Microsoft Edge") : t("Edg/")) ||
      (fb() ? eb("Opera") : t("OPR")) ||
      t("Firefox") ||
      t("FxiOS") ||
      t("Silk") ||
      t("Android")
    ) &&
    !((t("iPhone") && !t("iPod") && !t("iPad")) || t("iPad") || t("iPod"));
var yb = {},
  zb = null,
  Ab = ub || vb || (!xb && !tb && "function" == typeof l.atob);
function Bb(a, b) {
  m(Ba(a), "encodeByteArray takes an array as a parameter");
  void 0 === b && (b = 0);
  Cb();
  b = yb[b];
  for (var c = Array(Math.floor(a.length / 3)), e = b[64] || "", h = 0, k = 0; h < a.length - 2; h += 3) {
    var n = a[h],
      q = a[h + 1],
      r = a[h + 2],
      v = b[n >> 2];
    n = b[((n & 3) << 4) | (q >> 4)];
    q = b[((q & 15) << 2) | (r >> 6)];
    r = b[r & 63];
    c[k++] = "" + v + n + q + r;
  }
  v = 0;
  r = e;
  switch (a.length - h) {
    case 2:
      (v = a[h + 1]), (r = b[(v & 15) << 2] || e);
    case 1:
      (a = a[h]), (c[k] = "" + b[a >> 2] + b[((a & 3) << 4) | (v >> 4)] + r + e);
  }
  return c.join("");
}
function Db(a, b) {
  function c(r) {
    for (; e < a.length; ) {
      var v = a.charAt(e++),
        z = zb[v];
      if (null != z) return z;
      if (!/^[\s\xa0]*$/.test(v)) throw Error("Unknown base64 encoding at char: " + v);
    }
    return r;
  }
  Cb();
  for (var e = 0; ; ) {
    var h = c(-1),
      k = c(0),
      n = c(64),
      q = c(64);
    if (64 === q && -1 === h) break;
    b((h << 2) | (k >> 4));
    64 != n && (b(((k << 4) & 240) | (n >> 2)), 64 != q && b(((n << 6) & 192) | q));
  }
}
function Cb() {
  if (!zb) {
    zb = {};
    for (
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0;
      5 > c;
      c++
    ) {
      var e = a.concat(b[c].split(""));
      yb[c] = e;
      for (var h = 0; h < e.length; h++) {
        var k = e[h],
          n = zb[k];
        void 0 === n ? (zb[k] = h) : m(n === h);
      }
    }
  }
}
var Eb = "undefined" !== typeof Uint8Array,
  Fb = !tb && "function" === typeof btoa;
function Gb(a) {
  if (!Fb) return Bb(a);
  for (var b = "", c = 0, e = a.length - 10240; c < e; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
  return btoa(b);
}
function Hb(a) {
  return Eb && null != a && a instanceof Uint8Array;
}
var Ib = {};
var Jb;
function Kb(a, b) {
  if (b !== Ib) throw Error("illegal external caller");
  this.we = a;
  if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
  this.dontPassByteStringToStructuredClone = Lb;
}
function Mb() {
  return Jb || (Jb = new Kb(null, Ib));
}
Kb.prototype.Fd = function () {
  return null == this.we;
};
function Lb() {}
function Nb() {
  return "function" === typeof BigInt;
}
var Ob = 0,
  Pb = 0;
function Qb(a) {
  var b = 0 > a;
  a = Math.abs(a);
  var c = a >>> 0;
  a = Math.floor((a - c) / 4294967296);
  b && ((c = ka(Rb(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
  Ob = c >>> 0;
  Pb = a >>> 0;
}
function Sb(a, b) {
  b >>>= 0;
  a >>>= 0;
  if (2097151 >= b) var c = "" + (4294967296 * b + a);
  else
    Nb()
      ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
      : ((c = ((a >>> 24) | (b << 8)) & 16777215),
        (b = (b >> 16) & 65535),
        (a = (a & 16777215) + 6777216 * c + 6710656 * b),
        (c += 8147497 * b),
        (b *= 2),
        1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
        1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
        m(b),
        (c = b + Tb(c) + Tb(a)));
  return c;
}
function Tb(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function Ub() {
  var a = Ob,
    b = Pb;
  b & 2147483648
    ? Nb()
      ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : ((b = ka(Rb(a, b))), (a = b.next().value), (b = b.next().value), (a = "-" + Sb(a, b)))
    : (a = Sb(a, b));
  return a;
}
function Vb(a) {
  m(0 < a.length);
  if (16 > a.length) Qb(Number(a));
  else if (Nb()) (a = BigInt(a)), (Ob = Number(a & BigInt(4294967295)) >>> 0), (Pb = Number((a >> BigInt(32)) & BigInt(4294967295)));
  else {
    m(0 < a.length);
    var b = +("-" === a[0]);
    Pb = Ob = 0;
    for (var c = a.length, e = 0 + b, h = ((c - b) % 6) + b; h <= c; e = h, h += 6)
      (e = Number(a.slice(e, h))),
        (Pb *= 1e6),
        (Ob = 1e6 * Ob + e),
        4294967296 <= Ob && ((Pb += Math.trunc(Ob / 4294967296)), (Pb >>>= 0), (Ob >>>= 0));
    b && ((b = ka(Rb(Ob, Pb))), (a = b.next().value), (b = b.next().value), (Ob = a), (Pb = b));
  }
}
function Rb(a, b) {
  b = ~b;
  a ? (a = ~a + 1) : (b += 1);
  return [a, b];
}
m(!0);
function Wb(a, b, c, e) {
  this.Xc = a;
  this.lg = c;
  this.kg = e;
}
function Xb(a) {
  return Array.prototype.slice.call(a);
}
function Yb(a, b) {
  return "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(a) : b;
}
var Zb = Yb("INTERNAL_ARRAY_STATE"),
  $b = Yb("defaultInstance", "0di");
m(
  13 ===
    Math.round(
      Math.log2(
        Math.max.apply(
          Math,
          ma(
            Object.values({
              Ai: 1,
              yi: 2,
              xi: 4,
              Ri: 8,
              Qi: 16,
              Ii: 32,
              Ih: 64,
              nj: 128,
              pi: 256,
              oi: 512,
              zi: 1024,
              ki: 2048,
              dj: 4096,
              li: 8192
            })
          )
        )
      )
    )
);
function ac(a) {
  m((a & 16777215) == a);
}
var bc = Zb
  ? function (a, b) {
      ac(b);
      p(a, "state is only maintained on arrays.");
      a[Zb] |= b;
    }
  : function (a, b) {
      ac(b);
      p(a, "state is only maintained on arrays.");
      void 0 !== a.ea ? (a.ea |= b) : Object.defineProperties(a, { ea: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
    };
function cc(a) {
  var b = u(a);
  1 !== (b & 1) && (Object.isFrozen(a) && (a = Xb(a)), dc(a, b | 1));
}
var ec = Zb
  ? function (a, b) {
      ac(b);
      p(a, "state is only maintained on arrays.");
      a[Zb] &= ~b;
    }
  : function (a, b) {
      ac(b);
      p(a, "state is only maintained on arrays.");
      void 0 !== a.ea && (a.ea &= ~b);
    };
function fc(a, b, c) {
  return c ? a | b : a & ~b;
}
var gc = Object.getOwnPropertyDescriptor(Array.prototype, "Mg");
Object.defineProperties(Array.prototype, {
  Mg: {
    get: function () {
      function a(h, k) {
        h & b && c.push(k);
      }
      var b = u(this),
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
      var e = hc(b);
      536870912 !== e && c.push("pivot: " + e);
      e = c.join(",");
      return gc ? gc.get.call(this) + "|" + e : e;
    },
    configurable: !0,
    enumerable: !1
  }
});
var u = Zb
  ? function (a) {
      p(a, "state is only maintained on arrays.");
      return a[Zb] | 0;
    }
  : function (a) {
      p(a, "state is only maintained on arrays.");
      return a.ea | 0;
    };
function ic(a, b) {
  m(b & 64, "state for messages must be constructed");
  m(0 === (b & 5), "state for messages should not contain repeated field state");
  var c = hc(b),
    e = a.length;
  m(c + (+!!(b & 512) - 1) >= e - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, e);
  b & 512 && m("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
  a = e ? a[e - 1] : void 0;
  m(
    (null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256),
    "arraystate and array disagree on sparseObject presence"
  );
}
var w = Zb
    ? function (a) {
        p(a, "state is only maintained on arrays.");
        var b = a[Zb];
        ic(a, b);
        return b;
      }
    : function (a) {
        p(a, "state is only maintained on arrays.");
        var b = a.ea;
        ic(a, b);
        return b;
      },
  dc = Zb
    ? function (a, b) {
        p(a, "state is only maintained on arrays.");
        ac(b);
        a[Zb] = b;
      }
    : function (a, b) {
        p(a, "state is only maintained on arrays.");
        ac(b);
        void 0 !== a.ea ? (a.ea = b) : Object.defineProperties(a, { ea: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
      };
function jc() {
  var a = [];
  bc(a, 1);
  return a;
}
function kc(a) {
  return !!(u(a) & 2);
}
function lc(a) {
  bc(a, 34);
  return a;
}
function mc(a, b) {
  dc(b, (a | 0) & -14591);
}
function nc(a, b) {
  dc(b, (a | 34) & -14557);
}
function oc(a, b) {
  Ta(b);
  m((0 < b && 1023 >= b) || 536870912 === b);
  return (a & -16760833) | ((b & 1023) << 14);
}
function hc(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var pc,
  qc = {};
function rc(a) {
  var b = a.Rg === qc;
  m(!pc || b === a instanceof pc);
  return b;
}
var sc = {};
function tc(a) {
  var b = !(!a || "object" !== typeof a || a.Hj !== sc);
  m(b === a instanceof Map);
  return b && 0 === Wa(a, Map).size;
}
function uc(a, b) {
  Ta(a);
  m(0 < a);
  m(0 === b || -1 === b);
  return a + b;
}
function vc(a, b) {
  Ta(a);
  m(0 <= a);
  m(0 === b || -1 === b);
  return a - b;
}
function wc(a) {
  return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
}
var xc,
  yc = !ab;
function zc(a) {
  throw Error("cannot coerce " + a + " to a ByteString, expected a uint8Array, a base64 encoded string or a ByteString");
}
function Ac(a, b, c) {
  if (!Array.isArray(a) || a.length) return !1;
  var e = u(a);
  if (e & 1) return !0;
  if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
  dc(a, e | 1);
  return !0;
}
var Bc,
  Cc = [];
dc(Cc, 55);
Bc = Object.freeze(Cc);
function Dc(a) {
  if (a & 2) throw Error("Cannot mutate an immutable Message");
}
var Ec = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
function Fc() {}
var Gc;
function Hc(a, b) {
  p(a);
  if (b) {
    Gc || (Gc = Symbol("unknownBinaryFields"));
    var c = a[Gc];
    c ? c.push(b) : (a[Gc] = [b]);
  }
}
function Ic(a, b) {
  p(a);
  p(b);
  (b = Gc ? p(b)[Gc] : void 0) && (a[Gc] = Xb(b));
}
var Jc, Kc;
function Lc() {
  return Kc || (Kc = Symbol("JSPB_COMPARISON_TYPE_INFO"));
}
function Mc(a, b) {
  var c = u(p(a));
  b || m(!((c & 2 && c & 4) || c & 2048) || Object.isFrozen(a));
  b = !!(c & 8);
  c = !!(c & 16 && c & 32);
  if (b || c) {
    var e, h, k;
    a.forEach(function (n) {
      Array.isArray(n) ? (k = !0) : n && rc(n) && (kc(n.u) ? (h = !0) : (e = !0));
    });
    k && m(!h && !e);
    c && m(!k && !e);
    b && m(!k && !h);
  }
  Nc(a);
}
function Nc(a) {
  var b = u(a),
    c = b & 4,
    e = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
  m((c && 1 >= e) || (!c && 0 === e), "Expected at most 1 type-specific formatting bit, but got " + e + " with state: " + b);
  if (4096 & u(a))
    for (b = 0; b < a.length; b++)
      "string" !== typeof a[b] && Sa("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field");
}
var Oc = Object.freeze(new (function () {})());
Object.freeze(new (function () {})());
function Pc(a) {
  a = Error(a);
  a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382.severity = "warning";
  return a;
}
function Qc(a) {
  if (null == a || "number" === typeof a) return a;
  if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a);
}
function Rc(a) {
  return a.displayName || a.name || "unknown type name";
}
function Sc(a) {
  if (null == a || "boolean" === typeof a) return a;
  if ("number" === typeof a) return !!a;
}
var Tc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Uc(a) {
  var b = typeof a;
  return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Tc.test(a);
}
function Vc(a) {
  return "Expected int32 as finite number but got " + Aa(a) + ": " + a;
}
function Wc(a) {
  if ("number" !== typeof a) throw Pc(Vc(a));
  if (!Number.isFinite(a)) throw Pc(Vc(a));
  return a | 0;
}
function Xc(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
}
function Yc(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
}
function Zc(a) {
  if (null != a) {
    var b = !!b;
    if (!Uc(a)) throw Pc("Expected an int64 value encoded as a number or a string but got " + Aa(a) + ": " + a);
    a = "string" === typeof a ? $c(a, b) : b ? ad(a, b) : bd(a);
  }
  return a;
}
function cd(a) {
  return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6));
}
function dd(a) {
  return "-" === a[0]
    ? 20 > a.length
      ? !0
      : 20 === a.length && -922337 < Number(a.substring(0, 7))
    : 19 > a.length
    ? !0
    : 19 === a.length && 922337 > Number(a.substring(0, 6));
}
function ed(a) {
  m(0 > a || !(0 < a && a < Number.MAX_SAFE_INTEGER));
  m(Number.isInteger(a));
  if (0 > a) {
    Qb(a);
    var b = Sb(Ob, Pb);
    a = Number(b);
    return Number.isSafeInteger(a) ? a : b;
  }
  if (cd(String(a))) return a;
  Qb(a);
  return 4294967296 * Pb + (Ob >>> 0);
}
function bd(a) {
  m(Uc(a));
  m(!0);
  a = Math.trunc(a);
  if (!Number.isSafeInteger(a)) {
    m(!Number.isSafeInteger(a));
    m(Number.isInteger(a));
    Qb(a);
    var b = Ob,
      c = Pb;
    if ((a = c & 2147483648)) (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
    b = 4294967296 * c + (b >>> 0);
    a = a ? -b : b;
  }
  return a;
}
function fd(a) {
  m(Uc(a));
  m(!0);
  a = Math.trunc(a);
  return 0 <= a && Number.isSafeInteger(a) ? a : ed(a);
}
function ad(a, b) {
  m(Uc(a));
  m(b || !0);
  a = Math.trunc(a);
  Number.isSafeInteger(a)
    ? (a = String(a))
    : (m(!Number.isSafeInteger(a)), m(Number.isInteger(a)), (b = String(a)), dd(b) ? (a = b) : (Qb(a), (a = Ub())));
  return a;
}
function $c(a, b) {
  m(Uc(a));
  m(b || !0);
  b = Math.trunc(Number(a));
  if (Number.isSafeInteger(b)) return String(b);
  b = a.indexOf(".");
  -1 !== b && (a = a.substring(0, b));
  m(-1 === a.indexOf("."));
  dd(a) || (Vb(a), (a = Ub()));
  return a;
}
function gd(a, b) {
  m(Uc(a));
  m(b || !0);
  b = Math.trunc(Number(a));
  if (Number.isSafeInteger(b) && 0 <= b) return String(b);
  b = a.indexOf(".");
  -1 !== b && (a = a.substring(0, b));
  m(-1 === a.indexOf("."));
  cd(a) || (Vb(a), (a = Sb(Ob, Pb)));
  return a;
}
function hd(a) {
  var b = !!b;
  if (!Uc(a)) throw Pc("Expected an uint64 value encoded as a number or a string but got " + Aa(a) + ": " + a);
  "string" === typeof a
    ? (b = gd(a, b))
    : b
    ? (m(Uc(a)),
      m(b || !0),
      (a = Math.trunc(a)),
      0 <= a && Number.isSafeInteger(a)
        ? (b = String(a))
        : ((b = a),
          m(0 > b || !(0 < b && b < Number.MAX_SAFE_INTEGER)),
          m(Number.isInteger(b)),
          (a = String(b)),
          cd(a) ? (b = a) : (Qb(b), (b = Sb(Ob, Pb)))))
    : (b = fd(a));
  return b;
}
function id(a) {
  if (null == a) return a;
  if (Uc(a)) {
    if ("string" === typeof a) return $c(a, !1);
    if ("number" === typeof a) return bd(a);
  }
}
function jd(a) {
  if (null == a) return a;
  if (Uc(a)) {
    if ("string" === typeof a) return gd(a, !1);
    if ("number" === typeof a) return fd(a);
  }
}
function kd(a) {
  if (null == a || "string" == typeof a || Hb(a) || a instanceof Kb) return a;
}
function ld(a) {
  return null == a || "string" === typeof a ? a : void 0;
}
function md(a, b) {
  if (!(a instanceof b)) throw Error("Expected instanceof " + Rc(b) + " but got " + (a && Rc(a.constructor)));
}
function nd(a, b, c, e) {
  if (null != a && "object" === typeof a && rc(a)) return a;
  if (!Array.isArray(a))
    return c ? (e & 2 ? ((a = b[$b]) ? (b = a) : ((a = new b()), lc(a.u), (b = b[$b] = a))) : (b = new b())) : (b = void 0), b;
  var h = (c = u(a));
  0 === h && (h |= e & 32);
  h |= e & 2;
  h !== c && dc(a, h);
  return new b(a);
}
var od;
function pd(a, b) {
  m(!!(u(b) & 32));
  od = b;
  a = new a(b);
  od = void 0;
  return a;
}
var qd, rd;
function sd(a) {
  switch (typeof a) {
    case "boolean":
      return qd || (qd = [0, void 0, !0]);
    case "number":
      return 0 < a ? void 0 : 0 === a ? rd || (rd = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return (
        p(a),
        m(2 === a.length || (3 === a.length && !0 === a[2])),
        m(null == a[0] || ("number" === typeof a[0] && 0 <= a[0])),
        m(null == a[1] || "string" === typeof a[1]),
        a
      );
  }
}
function td(a, b) {
  p(b);
  return ud(a, b[0], b[1]);
}
function ud(a, b, c) {
  null == a && (a = od);
  od = void 0;
  if (null != a)
    for (var e = 0; e < a.length; e++) {
      var h = a[e];
      Array.isArray(h) && Mc(h);
    }
  if (null == a) (e = 96), c ? ((a = [c]), (e |= 512)) : (a = []), b && (e = oc(e, b));
  else {
    if (!Array.isArray(a)) throw Error("data passed to JSPB constructors must be an Array, got '" + JSON.stringify(a) + "' a " + Aa(a));
    if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
      throw Error("data passed to JSPB constructors must be mutable");
    e = u(a);
    if (e & 64) return ic(a, e), Kc && delete a[Kc], a;
    e |= 64;
    if (c && ((e |= 512), c !== a[0]))
      throw Error(
        'Expected message to have a message id: "' +
          c +
          '" in the array, got: ' +
          JSON.stringify(a[0]) +
          " a " +
          Aa(a[0]) +
          ", are you parsing with the wrong proto?"
      );
    a: {
      c = e;
      if ((e = a.length))
        if (((h = e - 1), wc(a[h]))) {
          c |= 256;
          b = vc(h, +!!(c & 512) - 1);
          if (1024 <= b) throw Error("Found a message with a sparse object at fieldNumber " + b + " is >= the limit 1024");
          e = oc(c, b);
          break a;
        }
      if (b) {
        b = Math.max(b, vc(e, +!!(c & 512) - 1));
        if (1024 < b)
          throw Error(
            "a message was constructed with an array of length " + e + " which is longer than 1024, are you using a supported serializer?"
          );
        e = oc(c, b);
      } else e = c;
    }
  }
  dc(a, e);
  m(e & 64);
  return a;
}
function vd() {
  throw Error("please construct maps as mutable then call toImmutable");
}
if (Ec) {
  var wd = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    xd = {};
  Object.defineProperties(vd, ((xd[Symbol.hasInstance] = { value: wd, configurable: !1, writable: !1, enumerable: !1 }), xd));
  m(vd[Symbol.hasInstance] === wd, "defineProperties did not work: was it monkey-patched?");
}
function yd(a, b) {
  return zd(b);
}
function zd(a) {
  switch (typeof a) {
    case "number":
      return isFinite(a) ? a : String(a);
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (a) {
        if (Array.isArray(a)) return yc || !Ac(a, void 0, 9999) ? a : void 0;
        if (Hb(a)) return Gb(a);
        if (a instanceof Kb) {
          var b = a.we;
          return null == b ? "" : "string" === typeof b ? b : (a.we = Gb(b));
        }
      }
  }
  return a;
}
function Ad(a, b, c) {
  var e = Xb(a),
    h = e.length,
    k = b & 256 ? e[h - 1] : void 0;
  h += k ? -1 : 0;
  for (b = b & 512 ? 1 : 0; b < h; b++) e[b] = c(e[b]);
  if (k) {
    b = e[b] = {};
    for (var n in k) m(!isNaN(n), "should not have non-numeric keys in sparse objects after a constructor is called."), (b[n] = c(k[n]));
  }
  Ic(e, a);
  return e;
}
function Bd(a, b, c, e, h, k) {
  if (null != a) {
    if (Array.isArray(a)) a = h && 0 == a.length && u(a) & 1 ? void 0 : k && u(a) & 2 ? a : Cd(a, b, c, void 0 !== e, h, k);
    else if (wc(a)) {
      var n = {},
        q;
      for (q in a) n[q] = Bd(a[q], b, c, e, h, k);
      a = n;
    } else a = b(a, e);
    return a;
  }
}
function Cd(a, b, c, e, h, k) {
  var n = e || c ? u(a) : 0;
  e = e ? !!(n & 32) : void 0;
  for (var q = Xb(a), r = 0; r < q.length; r++) q[r] = Bd(q[r], b, c, e, h, k);
  c && (Ic(q, a), c(n, q));
  return q;
}
function Dd(a) {
  return rc(a) ? a.toJSON() : zd(a);
}
function Ed(a, b, c) {
  c = void 0 === c ? nc : c;
  if (null != a) {
    if (Eb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
    if (Array.isArray(a)) {
      var e = u(a);
      if (e & 2) return a;
      Mc(a);
      b && (b = 0 === e || (!!(e & 32) && !(e & 64 || !(e & 16))));
      return b ? (dc(a, (e | 34) & -12293), a) : Cd(a, Ed, e & 4 ? nc : c, !0, !1, !0);
    }
    rc(a) && (m(rc(a)), (c = a.u), (e = w(c)), (a = e & 2 ? a : pd(a.constructor, Fd(c, e, !0))));
    return a;
  }
}
function Fd(a, b, c) {
  var e = c || b & 2 ? nc : mc,
    h = !!(b & 32);
  a = Ad(a, b, function (k) {
    return Ed(k, h, e);
  });
  bc(a, 32 | (c ? 2 : 0));
  return a;
}
function Gd(a) {
  var b = a.u,
    c = w(b);
  return c & 2 ? pd(a.constructor, Fd(b, c, !1)) : a;
}
function Hd(a, b) {
  a = a.u;
  return Id(a, w(a), b);
}
function Id(a, b, c, e) {
  if (-1 === c) return null;
  if (c >= hc(b)) {
    if (b & 256) return a[a.length - 1][c];
  } else {
    var h = a.length;
    if (e && b & 256 && ((e = a[h - 1][c]), null != e)) return e;
    b = uc(c, +!!(b & 512) - 1);
    if (b < h) return a[b];
  }
}
function Jd(a, b, c) {
  var e = a.u,
    h = w(e);
  Dc(h);
  Kd(e, h, b, c);
  return a;
}
function Kd(a, b, c, e) {
  m(!wc(e), "Invalid object passed to a setter");
  var h = hc(b);
  if (c >= h) {
    m(536870912 !== h);
    var k = b;
    if (b & 256) h = a[a.length - 1];
    else {
      if (null == e) return k;
      h = uc(h, +!!(b & 512) - 1);
      m(
        h >= a.length && Number.isInteger(h) && 4294967295 > h,
        "Expected sparseObjectIndex (%s) to be >= %s and a valid array index",
        h,
        a.length
      );
      h = a[h] = {};
      k |= 256;
    }
    h[c] = e;
    k !== b && dc(a, k);
    return k;
  }
  a[uc(c, +!!(b & 512) - 1)] = e;
  b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  return b;
}
function Ld(a, b, c, e) {
  return void 0 !== Md(a, b, c, void 0 === e ? !1 : e);
}
function Nd(a, b) {
  if (!a) return a;
  m(kc(b) ? kc(a.u) : !0);
  return a;
}
function Od(a, b, c, e) {
  c = void 0 === c ? !1 : c;
  e = void 0 === e ? !1 : e;
  Mc(a, c);
  m(!!(u(a) & 1));
  c || (e || m(Object.isFrozen(a) || !(u(a) & 32)), m(kc(b) ? Object.isFrozen(a) : !0));
  return a;
}
function Pd(a, b, c, e, h) {
  m((e & 3) === e);
  var k = b & 2;
  h = Id(a, b, c, h);
  Array.isArray(h) || (h = Bc);
  var n = !(e & 2);
  e = !(e & 1);
  var q = !!(b & 32),
    r = u(h);
  0 !== r || !q || k || n ? r & 1 || ((r |= 1), dc(h, r)) : ((r |= 33), dc(h, r));
  k
    ? ((a = !1), r & 2 || (lc(h), (a = !!(4 & r))), (e || a) && Object.freeze(h))
    : ((k = !!(2 & r) || !!(2048 & r)),
      e && k ? ((h = Xb(h)), (k = 1), q && !n && (k |= 32), dc(h, k), Kd(a, b, c, h)) : n && r & 32 && !k && ec(h, 32));
  return h;
}
function Qd(a, b) {
  var c = void 0 === c ? !1 : c;
  return Od(Pd(a, w(a), b, 2, c), a, !1, !0);
}
function Rd(a) {
  return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
}
function Sd(a, b, c, e) {
  var h = a.u,
    k = w(h);
  Dc(k);
  if (null == c) return Kd(h, k, b), a;
  p(c);
  var n = u(c),
    q = n,
    r = !!(2 & n) || Object.isFrozen(c),
    v = !r && !1;
  if (!(4 & n)) for (n = 21, r && ((c = Xb(c)), (q = 0), (n = Td(n, k, !0))), r = 0; r < c.length; r++) c[r] = e(c[r]);
  v && ((c = Xb(c)), (q = 0), (n = Td(n, k, !0)));
  n !== q && dc(c, n);
  Mc(c);
  Kd(h, k, b, c);
  return a;
}
function Ud(a, b, c) {
  var e = Vd,
    h = w(a);
  Dc(h);
  a = Pd(a, h, b, 2);
  b = u(a);
  c = e(c, !!(4 & b) && !!(4096 & b));
  a.push(c);
  Nc(a);
}
function Vd(a) {
  return a;
}
function Wd(a, b, c, e) {
  var h = w(a);
  Dc(h);
  Ra(e);
  (c = Xd(a, h, c)) && c !== b && (h = Kd(a, h, c));
  Kd(a, h, b, e);
}
function Xd(a, b, c) {
  for (var e = 0, h = 0; h < c.length; h++) {
    var k = c[h];
    null != Id(a, b, k) && (0 !== e && (b = Kd(a, b, e)), (e = k));
  }
  return e;
}
function Yd(a, b, c) {
  a = a.u;
  var e = w(a);
  Dc(e);
  var h = Id(a, e, c);
  b = Gd(nd(h, b, !0, e));
  h !== b && Kd(a, e, c, b);
  return b;
}
function Zd(a, b, c, e) {
  var h = w(a);
  Dc(h);
  e = Id(a, h, c, e);
  if (null != e && rc(e)) return (b = Gd(e)), b !== e && Kd(a, h, c, b), b.u;
  if (Array.isArray(e)) {
    var k = u(e);
    k = k & 2 ? Fd(e, k, !1) : e;
    k = td(k, b);
  } else k = td(void 0, b);
  k !== e && Kd(a, h, c, k);
  return k;
}
function Md(a, b, c, e) {
  a = a.u;
  var h = w(a);
  e = Id(a, h, c, e);
  b = nd(e, b, !1, h);
  b !== e && null != b && Kd(a, h, c, b);
  return Nd(b, a);
}
function y(a, b, c, e) {
  b = Md(a, b, c, void 0 === e ? !1 : e);
  if (null == b) return b;
  a = a.u;
  e = w(a);
  if (!(e & 2)) {
    var h = Gd(b);
    h !== b && ((b = h), Kd(a, e, c, b));
  }
  return Nd(b, a);
}
function $d(a, b, c) {
  a = a.u;
  var e = w(a),
    h = e,
    k = !(2 & e),
    n = !!(2 & h),
    q = n ? 1 : 2;
  e = 1 === q;
  q = 2 === q;
  k && (k = !n);
  n = Id(a, h, c);
  n = Array.isArray(n) ? n : Bc;
  var r = u(n),
    v = !!(4 & r);
  if (!v) {
    var z = r;
    0 === z && (z = Td(z, h, !1));
    z = fc(z, 1, !0);
    r = n;
    var C = h,
      K = !!(2 & z);
    K && (C = fc(C, 2, !0));
    for (var x = !K, G = !0, P = 0, fa = 0; P < r.length; P++) {
      var ia = nd(r[P], b, !1, C);
      if (ia instanceof b) {
        if (!K) {
          var jb = kc(ia.u);
          x && (x = !jb);
          G && (G = jb);
        }
        r[fa++] = ia;
      }
    }
    fa < P && (r.length = fa);
    z = fc(z, 4, !0);
    z = fc(z, 16, G);
    z = fc(z, 8, x);
    dc(r, z);
    K && Object.freeze(r);
    r = z;
  }
  b = !!(8 & r) || (e && !n.length);
  if (k && !b) {
    Rd(r) && ((n = Xb(n)), (r = Td(r, h, !1)), (h = Kd(a, h, c, n)));
    b = n;
    k = r;
    for (r = 0; r < b.length; r++) (z = b[r]), (C = Gd(z)), z !== C && (b[r] = C);
    k = fc(k, 8, !0);
    k = fc(k, 16, !b.length);
    dc(b, k);
    r = k;
  }
  Rd(r) ||
    ((b = r),
    e ? (r = fc(r, !n.length || (16 & r && (!v || 32 & r)) ? 2 : 2048, !0)) : (r = fc(r, 32, !1)),
    r !== b && dc(n, r),
    e && Object.freeze(n));
  q && Rd(r) && ((n = Xb(n)), (r = Td(r, h, !1)), dc(n, r), Kd(a, h, c, n));
  c = n;
  h = q;
  h = void 0 === h ? !1 : h;
  e = kc(a);
  q = kc(c);
  n = Object.isFrozen(c) && q;
  Od(c, a, h);
  if (e || q) h ? m(q) : m(n);
  m(!!(u(c) & 4));
  if (q && c.length) for (h = 0; 1 > h; h++) Nd(c[h], a);
  return c;
}
function A(a, b, c, e) {
  null != e ? md(e, Ra(b)) : (e = void 0);
  return Jd(a, c, e);
}
function ae(a, b, c, e) {
  var h = a.u,
    k = w(h);
  Dc(k);
  if (null == e) return Kd(h, k, c), a;
  p(e);
  var n = u(e),
    q = n,
    r = !!(2 & n) || !!(2048 & n);
  m(!r || Object.isFrozen(e));
  for (var v = r || Object.isFrozen(e), z = !v && !1, C = !0, K = !0, x = 0; x < e.length; x++) {
    var G = e[x];
    md(G, Ra(b));
    r || ((G = kc(G.u)), C && (C = !G), K && (K = G));
  }
  r || ((n = fc(n, 5, !0)), (n = fc(n, 8, C)), (n = fc(n, 16, K)));
  if (z || (v && n !== q)) (e = Xb(e)), (q = 0), (n = Td(n, k, !0));
  n !== q && dc(e, n);
  Mc(e);
  Kd(h, k, c, e);
  return a;
}
function Td(a, b, c) {
  a = fc(a, 2, !!(2 & b));
  a = fc(a, 32, !!(32 & b) && c);
  return (a = fc(a, 2048, !1));
}
function B(a, b) {
  a = Hd(a, b);
  null != a &&
    (Uc(a)
      ? "number" === typeof a
        ? (a = bd(a))
        : (Ua(a),
          m(Uc(a)),
          m(!0),
          m(!0),
          (b = Math.trunc(Number(a))),
          Number.isSafeInteger(b) ? (a = b) : ((a = $c(a, !1)), (b = Number(a)), (a = Number.isSafeInteger(b) ? b : a)))
      : (a = void 0));
  return a;
}
function be(a) {
  a = Hd(a, 1);
  var b = void 0 === b ? !1 : b;
  null != a ? (Uc(a) ? ("string" === typeof a ? (b = $c(a, b)) : (Ta(a), (b = ad(a, b)))) : (b = void 0)) : (b = a);
  return b;
}
function ce(a, b) {
  a = Hd(a, b);
  return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
}
function de(a, b) {
  return null != a ? a : b;
}
function ee(a) {
  null == a
    ? (a = zc(a))
    : "string" === typeof a
    ? (Ua(a), (a = a ? new Kb(a, Ib) : Mb()))
    : a.constructor !== Kb &&
      (Hb(a) ? (m(a instanceof Uint8Array || Array.isArray(a)), (a = a.length ? new Kb(new Uint8Array(a), Ib) : Mb())) : (a = zc(a)));
  return a;
}
function fe(a, b) {
  var c = void 0 === c ? 0 : c;
  return de(B(a, b), c);
}
function ge(a) {
  var b = void 0 === b ? 0 : b;
  a = Hd(a, 1);
  if (null != a)
    if (Uc(a))
      if ("number" === typeof a) a = fd(a);
      else {
        Ua(a);
        m(Uc(a));
        m(!0);
        m(!0);
        var c = Math.trunc(Number(a));
        0 <= c && c <= Number.MAX_SAFE_INTEGER ? (a = c) : ((a = gd(a, !1)), (c = Number(a)), (a = Number.isSafeInteger(c) ? c : a));
      }
    else a = void 0;
  return de(a, b);
}
function he(a, b) {
  a = B(a, b);
  return null == a ? void 0 : a;
}
function ie(a, b, c) {
  if (null != c && "boolean" !== typeof c) throw Error("Expected boolean but got " + Aa(c) + ": " + c);
  Jd(a, b, c);
}
function je(a, b, c) {
  return Jd(a, b, null == c ? c : Wc(c));
}
function D(a, b, c) {
  return Jd(a, b, Zc(c));
}
function ke(a, b, c) {
  if (null != c && "string" !== typeof c) throw Error("Expected a string or null or undefined but got " + c + " a " + Aa(c));
  return Jd(a, b, c);
}
function le(a, b, c) {
  if (null != c) {
    if (!Number.isFinite(c)) throw Pc("Expected enum as finite number but got " + Aa(c) + ": " + c);
    c |= 0;
  }
  return Jd(a, b, c);
}
if ("undefined" !== typeof Proxy) {
  var ne = me;
  new Proxy(
    {},
    {
      getPrototypeOf: ne,
      setPrototypeOf: ne,
      isExtensible: ne,
      preventExtensions: ne,
      getOwnPropertyDescriptor: ne,
      defineProperty: ne,
      has: ne,
      get: ne,
      set: ne,
      deleteProperty: ne,
      apply: ne,
      construct: ne
    }
  );
}
function me() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function oe(a, b, c) {
  Wa(this, oe, "The message constructor should only be used by subclasses");
  m(this.constructor !== oe, "Message is an abstract class and cannot be directly constructed");
  this.u = ud(a, b, c);
  this.preventPassingToStructuredClone = Fc;
}
d = oe.prototype;
d.toJSON = function () {
  if (xc) var a = pe(this, this.u, !1);
  else (a = this.u), p(a), (a = Cd(a, Dd, void 0, void 0, !1, !1)), (a = pe(this, a, !0));
  return a;
};
d.B = function () {
  xc = !0;
  try {
    return JSON.stringify(this.toJSON(), yd);
  } finally {
    xc = !1;
  }
};
d.getExtension = function (a) {
  Wa(this, a.md);
  var b = Wa(this, oe);
  b = a.Ha
    ? a.Ob
      ? a.hb(b, a.Ha, a.sa, void 0 !== Oc ? 1 : 2, !0)
      : a.hb(b, a.Ha, a.sa, !0)
    : a.Ob
    ? a.hb(b, a.sa, void 0 !== Oc ? 1 : 2, !0)
    : a.hb(b, a.sa, a.defaultValue, !0);
  return a.Jg && null == b ? a.defaultValue : b;
};
function qe(a, b) {
  m(!b.Ob, "repeated extensions don't support getExtensionOrUndefined");
  Wa(a, b.md);
  a = Wa(a, oe);
  b = b.Ha ? b.hb(a, b.Ha, b.sa, !0) : b.hb(a, b.sa, null, !0);
  return null === b ? void 0 : b;
}
d.hasExtension = function (a) {
  m(!a.Ob, "repeated extensions don't support hasExtension");
  return a.Ha ? Ld(this, a.Ha, a.sa, !0) : void 0 !== qe(this, a);
};
d.clone = function () {
  var a = Wa(this, oe);
  m(rc(a));
  var b = a.u,
    c = w(b);
  return pd(a.constructor, Fd(b, c, !1));
};
pc = oe;
oe.prototype.Rg = qc;
oe.prototype.toString = function () {
  return pe(this, this.u, !1).toString();
};
function pe(a, b, c) {
  var e = a.constructor.ga,
    h = w(c ? a.u : b),
    k = hc(h),
    n = !1;
  if (e && yc) {
    if (!c) {
      b = Xb(b);
      var q;
      if (b.length && wc((q = b[b.length - 1])))
        for (n = 0; n < e.length; n++)
          if (e[n] >= k) {
            Object.assign((b[b.length - 1] = {}), q);
            break;
          }
      n = !0;
    }
    k = b;
    c = !c;
    q = w(a.u);
    a = hc(q);
    q = +!!(q & 512) - 1;
    for (var r, v, z = 0; z < e.length; z++)
      if (((v = e[z]), v < a)) {
        v = uc(v, q);
        var C = k[v];
        null == C ? (k[v] = c ? Bc : jc()) : c && C !== Bc && cc(C);
      } else
        r || ((C = void 0), k.length && wc((C = k[k.length - 1])) ? (r = C) : k.push((r = {}))),
          (C = r[v]),
          null == r[v] ? (r[v] = c ? Bc : jc()) : c && C !== Bc && cc(C);
  }
  r = b.length;
  if (!r) return b;
  var K;
  if (wc((k = b[r - 1]))) {
    a: {
      var x = k;
      c = {};
      a = !1;
      for (var G in x) {
        q = x[G];
        if (Array.isArray(q)) {
          z = q;
          if (Ac(q, e, +G) || tc(q)) q = null;
          q != z && (a = !0);
        }
        null != q ? (c[G] = q) : (a = !0);
      }
      if (a) {
        for (var P in c) {
          x = c;
          break a;
        }
        x = null;
      }
    }
    x != k && (K = !0);
    r--;
  }
  for (h = +!!(h & 512) - 1; 0 < r; r--) {
    G = r - 1;
    k = b[G];
    if (null != k && !Ac(k, e, G - h) && !tc(k)) break;
    var fa = !0;
  }
  if (!K && !fa) return b;
  b = n ? b : Array.prototype.slice.call(b, 0, r);
  n && (b.length = r);
  x && b.push(x);
  return b;
}
function re(a) {
  return Array.isArray(a) ? (a[0] instanceof Wb ? (m(2 === a.length), se(a[1]), a) : [te, se(a)]) : [Wa(a, Wb), void 0];
}
function ue(a, b, c) {
  p(a);
  for (var e = c.extensions, h = {}; b.Tg() && !b.Kg(); )
    if (((h = { Rc: h.Rc }), b.Fj())) {
      var k = b.Bj();
      h.Rc = !1;
      b.Nj(
        (function (n) {
          return function (q, r) {
            var v = c[q];
            if (!v) {
              var z = e[q];
              if (z) {
                v = se(z);
                var C = we(v),
                  K = xe(v).ob;
                v = c[q] = function (x, G, P) {
                  return C(Zd(G, K, P, !0), x);
                };
              }
            }
            v ? v(r, a, q) : ((n.Rc = !0), r.dk());
          };
        })(h)
      );
      h.Rc && Hc(a, b.bk(k));
    } else Hc(a, b.Zg());
}
function ye(a, b) {
  return function (c, e, h) {
    return c.qk(h, ze(e, a), b);
  };
}
function Ae(a, b, c) {
  if (Array.isArray(b)) {
    var e = u(b);
    if (e & 4) return b;
    for (var h = 0, k = 0; h < b.length; h++) {
      var n = a(b[h]);
      null != n && (b[k++] = n);
    }
    k < h && (b.length = k);
    c && (dc(b, (e | 5) & -12289), e & 2 && Object.freeze(b));
    return b;
  }
}
function ze(a, b) {
  return a instanceof oe ? a.u : Array.isArray(a) ? td(a, b) : void 0;
}
var Be = Symbol("deserializeBinaryFromReaderCache");
function we(a) {
  var b = a[Be];
  if (!b) {
    var c = Ce(a),
      e = xe(a),
      h = e.Oe;
    b = h
      ? function (k, n) {
          return h(k, n, e);
        }
      : function (k, n) {
          for (; n.Tg() && !n.Kg(); ) {
            var q = n.Cj(),
              r = e[q];
            if (!r) {
              var v = e.extensions;
              v && (v = v[q]) && (r = e[q] = De(v));
            }
            (r && r(n, k, q)) || Hc(k, n.Zg());
          }
          c === Ee || c === Fe || c.Ef || (k[Lc()] = c);
        };
    a[Be] = b;
  }
  return b;
}
function De(a) {
  a = re(a);
  var b = Wa(a[0], Wb).Xc;
  if ((a = a[1])) {
    se(a);
    var c = we(a),
      e = xe(m(a)).ob;
    return function (h, k, n) {
      return b(h, k, n, e, c);
    };
  }
  return b;
}
var Ee,
  Fe,
  Ge = Symbol("comparisonTypeInfoCache");
function He(a, b, c) {
  var e = c[1];
  if (e) {
    var h = e[Ge];
    var k = h ? h.ob : m(sd(e[0]));
    a[b] = null != h ? h : e;
  }
  k && k === qd ? p(a.Ec || (a.Ec = [])).push(b) : c[0] && p(a.Kc || (a.Kc = [])).push(b);
}
function Ie(a, b) {
  return [a.lg, !b || 0 < b[0] ? void 0 : b];
}
function Ce(a) {
  var b = a[Ge];
  if (b) return b;
  b = Je(a, (a[Ge] = {}), Ie, Ie, He);
  if (!b.Kc && !b.Ec) {
    var c = !0,
      e;
    for (e in b) {
      isNaN(e) || (c = !1);
      break;
    }
    c ? ((b = m(sd(a[0])) === qd), (b = a[Ge] = b ? Fe || (Fe = { ob: m(sd(!0)) }) : Ee || (Ee = {}))) : (b.Ef = !0);
  }
  return b;
}
function Ke(a, b, c, e) {
  var h;
  (h = b[a]) ? Array.isArray(h) && (b[a] = h = Ce(h)) : (h = void 0);
  if (h) {
    var k = b.Kc;
    (k = (k ? (Array.isArray(k) ? (b.Kc = new Set(k)) : k) : Jc || (Jc = new Set())).has(a)) ||
      ((k = b.Ec), (k = (k ? (Array.isArray(k) ? (b.Ec = new Set(k)) : k) : Jc || (Jc = new Set())).has(a)));
    if (k) {
      if (Array.isArray(c))
        for (k = 0; k < c.length; k++) {
          var n = c[k];
          e = !1;
          if (n instanceof oe) (e = !0), (n = n.u);
          else if (!Array.isArray(n))
            throw Error(
              "found a bad value in place of a message: " + n + " with field number " + a + " and comparison info " + JSON.stringify(b)
            );
          Le(n, h, e);
        }
    } else {
      if (c instanceof oe) (e = !0), (c = c.u);
      else if (!Array.isArray(c)) throw Error("found a bad value in place of a message");
      Le(c, h, e);
    }
  }
}
function Le(a, b, c) {
  p(a);
  if (b !== Ee && b !== Fe) {
    b.Ef || (a[Lc()] = b);
    var e = a.length;
    var h = m(b.ob);
    p(h);
    h = h[1] ? 0 : -1;
    for (var k = 0; k < a.length; k++) {
      var n = a[k];
      if (n && "object" === typeof n)
        if (k === e - 1 && wc(n))
          for (var q in n) {
            var r = +q;
            if (Number.isNaN(r)) {
              var v = n[q];
              v && "object" === typeof v && Ke(r, b, v, c);
            }
          }
        else (r = vc(k, h)), Ke(r, b, n, c);
    }
  }
}
var Me = Symbol("makeCrossSerializerComparisonsCompatible");
function Ne(a) {
  var b = a[Me];
  if (!b) {
    var c = Ce(a);
    b = function (e) {
      return Le(e, c, !0);
    };
    a[Me] = b;
  }
  return b;
}
function se(a) {
  p(a);
  var b;
  if (!(b = Oe in a || Pe in a) && (b = 0 < a.length)) {
    b = a[0];
    var c = sd(b);
    null != c && c !== b && (a[0] = c);
    b = null != c;
  }
  m(b);
  return a;
}
function Qe(a, b, c) {
  a[b] = c;
}
function Je(a, b, c, e, h) {
  h = void 0 === h ? Qe : h;
  b.ob = m(sd(a[0]));
  var k = 0,
    n = a[++k];
  n &&
    n.constructor === Object &&
    ((b.extensions = n),
    (n = a[++k]),
    "function" === typeof n && ((b.Oe = n), (b.Qg = Va(a[++k])), m(b.Oe === ue), m(b.Qg === ye), (n = a[++k])));
  for (var q = {}; Array.isArray(n) && "number" === typeof n[0] && 0 < n[0]; ) {
    for (var r = 0; r < n.length; r++) q[n[r]] = n;
    n = a[++k];
  }
  for (r = 1; void 0 !== n; ) {
    "number" === typeof n && (m(0 < n), (r += n), (n = a[++k]));
    var v = void 0;
    if (n instanceof Wb) var z = n;
    else (z = Re), k--;
    if (z.kg) {
      n = a[++k];
      v = a;
      var C = k;
      "function" == typeof n && (m(0 === n.length), (n = n()), (v[C] = n));
      se(n);
      v = n;
    }
    n = a[++k];
    C = r + 1;
    "number" === typeof n && 0 > n && ((C -= n), (n = a[++k]));
    for (; r < C; r++) {
      var K = q[r];
      h(b, r, v ? e(z, v, K) : c(z, K));
    }
  }
  return b;
}
var Pe = Symbol("serializerFnCache"),
  Oe = Symbol("deserializerFnCache");
function Se(a, b) {
  var c = a.Xc;
  return b
    ? function (e, h, k) {
        return c(e, h, k, b);
      }
    : c;
}
function Te(a, b, c) {
  var e = a.Xc,
    h,
    k;
  return function (n, q, r) {
    return e(n, q, r, k || (k = xe(b).ob), h || (h = we(b)), c);
  };
}
function xe(a) {
  var b = a[Oe];
  if (b) return b;
  Ce(a);
  b = Je(a, (a[Oe] = {}), Se, Te);
  Oe in a && Pe in a && (a.length = 0);
  return b;
}
function E(a, b) {
  return new Wb(a, b, !1, !1);
}
function Ue(a, b) {
  return new Wb(a, b, !0, !1);
}
function Ve(a, b) {
  return new Wb(a, b, !1, !0);
}
function We(a, b, c) {
  Kd(a, w(a), b, c);
}
function Xe(a, b, c) {
  b = td(void 0, b);
  var e = w(a);
  Dc(e);
  var h = Pd(a, e, c, 3);
  e = w(a);
  if (u(h) & 4) {
    h = Xb(h);
    var k = u(h);
    dc(h, (k | 1) & -2079);
    Kd(a, e, c, h);
  }
  h.push(b);
  return b;
}
var Ye = Ve(
  function (a, b, c, e, h) {
    if (2 !== a.g()) return !1;
    a = a.Jc(td([void 0, void 0], e), h);
    e = w(b);
    Dc(e);
    h = Id(b, e, c);
    if (Array.isArray(h)) {
      if (kc(h)) {
        h = Xb(h);
        for (var k = 0; k < h.length; k++) {
          var n = (h[k] = Xb(h[k]));
          Array.isArray(n[1]) && (n[1] = lc(n[1]));
        }
        Kd(b, e, c, h);
      }
      h.push(a);
    } else Kd(b, e, c, [a]);
    return !0;
  },
  function (a, b, c, e, h) {
    if (Array.isArray(b))
      for (var k = 0; k < b.length; k++) {
        var n = b[k];
        Array.isArray(n) && a.mh(c, td(n, e), h);
      }
  }
);
function Ze(a, b, c) {
  a.lk(c, Qc(b));
}
function $e(a, b, c) {
  a.pk(c, id(b));
}
function af(a, b, c) {
  a.Ik(c, jd(b));
}
function bf(a, b, c) {
  a.nk(c, Xc(b));
}
function cf(a, b, c) {
  a.kk(c, jd(b));
}
function df(a, b, c) {
  a.fk(c, Sc(b));
}
function ef(a, b, c) {
  a.Gk(c, ld(b));
}
function ff(a, b, c, e, h) {
  a.mh(c, ze(b, e), h);
}
function gf(a, b, c) {
  a.gk(c, kd(b));
}
function hf(a, b, c) {
  a.ik(c, Xc(b));
}
function jf(a, b, c) {
  if (0 !== a.g() && 2 !== a.g()) return !1;
  a.Tj(Qd(b, c));
  return !0;
}
function kf(a, b, c) {
  if (0 !== a.g() && 2 !== a.g()) return !1;
  a.Sj(Qd(b, c));
  return !0;
}
function lf(a, b, c) {
  if (0 !== a.g() && 2 !== a.g()) return !1;
  a.Pj(Qd(b, c));
  return !0;
}
var F = E(
    function (a, b, c) {
      if (1 !== a.g()) return !1;
      We(b, c, a.Jj());
      return !0;
    },
    function (a, b, c) {
      a.hk(c, Qc(b));
    }
  ),
  mf = Ue(
    function (a, b, c) {
      if (1 !== a.g() && 2 !== a.g()) return !1;
      a.Oj(Qd(b, c));
      return !0;
    },
    function (a, b, c) {
      a.rk(c, Ae(Qc, b, !0));
    }
  ),
  H = E(function (a, b, c) {
    if (5 !== a.g()) return !1;
    We(b, c, a.Xg());
    return !0;
  }, Ze),
  nf = Ue(
    function (a, b, c) {
      if (5 !== a.g() && 2 !== a.g()) return !1;
      a.Rj(Qd(b, c));
      return !0;
    },
    function (a, b, c) {
      a.yk(c, Ae(Qc, b, !0));
    }
  ),
  of = E(function (a, b, c, e) {
    if (5 !== a.g()) return !1;
    Wd(b, c, e, a.Xg());
    return !0;
  }, Ze),
  pf = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Mj());
    return !0;
  }, $e),
  I = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Pf());
    return !0;
  }, $e),
  qf = Ue(jf, function (a, b, c) {
    a.Ak(c, Ae(id, b, !1));
  }),
  rf = Ue(jf, function (a, b, c) {
    a.vk(c, Ae(id, b, !1));
  }),
  sf = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    a = a.Pf();
    We(b, c, 0 === a ? void 0 : a);
    return !0;
  }, $e),
  tf = E(function (a, b, c, e) {
    if (0 !== a.g()) return !1;
    Wd(b, c, e, a.Pf());
    return !0;
  }, $e),
  uf = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.ak());
    return !0;
  }, af),
  J = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Zj());
    return !0;
  }, af),
  vf = Ue(
    function (a, b, c) {
      if (0 !== a.g() && 2 !== a.g()) return !1;
      a.Vj(Qd(b, c));
      return !0;
    },
    function (a, b, c) {
      a.Dk(c, Ae(jd, b, !1));
    }
  ),
  L = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Yg());
    return !0;
  }, bf),
  wf = Ue(kf, function (a, b, c) {
    a.zk(c, Ae(Xc, b, !0));
  }),
  xf = Ue(kf, function (a, b, c) {
    a.uk(c, Ae(Xc, b, !0));
  }),
  yf = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    a = a.Yg();
    We(b, c, 0 === a ? void 0 : a);
    return !0;
  }, bf),
  zf = E(function (a, b, c) {
    if (1 !== a.g()) return !1;
    We(b, c, a.Wg());
    return !0;
  }, cf),
  Af = Ue(
    function (a, b, c) {
      if (1 !== a.g() && 2 !== a.g()) return !1;
      a.Qj(Qd(b, c));
      return !0;
    },
    function (a, b, c) {
      a.tk(c, Ae(jd, b, !1));
    }
  ),
  Bf = E(function (a, b, c, e) {
    if (1 !== a.g()) return !1;
    Wd(b, c, e, a.Wg());
    return !0;
  }, cf),
  Cf = E(
    function (a, b, c) {
      if (5 !== a.g()) return !1;
      We(b, c, a.Kj());
      return !0;
    },
    function (a, b, c) {
      a.jk(c, Yc(b));
    }
  ),
  M = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Mf());
    return !0;
  }, df),
  Df = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    a = a.Mf();
    We(b, c, !1 === a ? void 0 : a);
    return !0;
  }, df),
  Ef = E(function (a, b, c, e) {
    if (0 !== a.g()) return !1;
    Wd(b, c, e, a.Mf());
    return !0;
  }, df),
  N = E(function (a, b, c) {
    if (2 !== a.g()) return !1;
    We(b, c, a.Sd());
    return !0;
  }, ef),
  Ff = E(function (a, b, c) {
    if (2 !== a.g()) return !1;
    a = a.Sd();
    We(b, c, "" === a ? void 0 : a);
    return !0;
  }, ef),
  O = Ue(
    function (a, b, c) {
      if (2 !== a.g()) return !1;
      a = a.Sd();
      Ud(b, c, a);
      return !0;
    },
    function (a, b, c) {
      a.Bk(c, Ae(ld, b, !0));
    }
  ),
  Gf = E(function (a, b, c, e) {
    if (2 !== a.g()) return !1;
    Wd(b, c, e, a.Sd());
    return !0;
  }, ef),
  Hf;
Hf = new Wb(
  function (a, b, c, e, h) {
    if (3 !== a.g()) return !1;
    a.Lj(c, Xe(b, e, c), h);
    return !0;
  },
  function (a, b, c, e, h) {
    if (Array.isArray(b))
      for (var k = 0; k < b.length; k++) {
        var n = h;
        a.mk(c, ze(b[k], e), n);
      }
  },
  !0,
  !0
);
var te = Ve(function (a, b, c, e, h) {
    if (2 !== a.g()) return !1;
    a.Jc(Zd(b, e, c, !0), h);
    return !0;
  }, ff),
  Re = Ve(function (a, b, c, e, h) {
    if (2 !== a.g()) return !1;
    a.Jc(Zd(b, e, c), h);
    return !0;
  }, ff),
  Q;
Q = new Wb(
  function (a, b, c, e, h) {
    if (2 !== a.g()) return !1;
    a.Jc(Xe(b, e, c), h);
    return !0;
  },
  function (a, b, c, e, h) {
    if (Array.isArray(b)) for (var k = 0; k < b.length; k++) ff(a, b[k], c, e, h);
  },
  !0,
  !0
);
var R = Ve(function (a, b, c, e, h, k) {
    if (2 !== a.g()) return !1;
    var n = a.Jc,
      q = w(b);
    Dc(q);
    (k = Xd(b, q, k)) && c !== k && Kd(b, q, k);
    b = Zd(b, e, c);
    n.call(a, b, h);
    return !0;
  }, ff),
  If = E(function (a, b, c) {
    if (2 !== a.g()) return !1;
    We(b, c, a.Nf());
    return !0;
  }, gf),
  Jf = Ue(
    function (a, b, c) {
      if (2 !== a.g()) return !1;
      a = a.Nf();
      Ud(b, c, a);
      return !0;
    },
    function (a, b, c) {
      a.wk(c, Ae(kd, b, !1));
    }
  ),
  Kf = E(function (a, b, c) {
    if (2 !== a.g()) return !1;
    a = a.Nf();
    We(b, c, a === Mb() ? void 0 : a);
    return !0;
  }, gf),
  S = E(
    function (a, b, c) {
      if (0 !== a.g()) return !1;
      We(b, c, a.Yj());
      return !0;
    },
    function (a, b, c) {
      a.Hk(c, Yc(b));
    }
  ),
  Lf = Ue(
    function (a, b, c) {
      if (0 !== a.g() && 2 !== a.g()) return !1;
      a.Uj(Qd(b, c));
      return !0;
    },
    function (a, b, c) {
      a.Ck(c, Ae(Yc, b, !0));
    }
  ),
  T = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    We(b, c, a.Of());
    return !0;
  }, hf),
  U = Ue(lf, function (a, b, c) {
    a.xk(c, Ae(Xc, b, !0));
  }),
  V = Ue(lf, function (a, b, c) {
    a.sk(c, Ae(Xc, b, !0));
  }),
  Mf = E(function (a, b, c) {
    if (0 !== a.g()) return !1;
    a = a.Of();
    We(b, c, 0 === a ? void 0 : a);
    return !0;
  }, hf),
  Nf = E(function (a, b, c, e) {
    if (0 !== a.g()) return !1;
    Wd(b, c, e, a.Of());
    return !0;
  }, hf),
  Of = E(
    function (a, b, c) {
      if (0 !== a.g()) return !1;
      We(b, c, a.Wj());
      return !0;
    },
    function (a, b, c) {
      a.Ek(c, Xc(b));
    }
  ),
  Pf = E(
    function (a, b, c) {
      if (0 !== a.g()) return !1;
      We(b, c, a.Xj());
      return !0;
    },
    function (a, b, c) {
      a.Fk(c, id(b));
    }
  ),
  Qf = [!0, L, I],
  Rf = [!0, L, L],
  Sf = [!0, N, I];
var Tf = new WeakMap();
function Uf(a) {
  if (a instanceof oe) return a.constructor.j;
}
(function () {
  var a = l.jspbGetTypeName;
  l.jspbGetTypeName = a
    ? function (b) {
        return a(b) || Uf(b);
      }
    : Uf;
})();
var W = oe;
function X(a, b) {
  return function (c) {
    c = Wa(Wa(c, a), oe);
    Ne(b)(Wa(c, oe).u);
  };
}
var Vf = [0, Df, -2];
var Wf = [0, T];
var Xf = [-5, {}, T, I, L, -1];
function Yf(a) {
  W.call(this, a);
}
g(Yf, W);
Yf.j = "experiments.heterodyne.ExperimentIds";
Yf.ga = [2];
var Zf = [0, If, Jf, M, N];
Yf.makeCrossSerializerComparisonsCompatible = X(Yf, Zf);
var $f = [0, sf, yf];
var ag = [0, Ff, [0, Mf, $f, Mf, -1, [0, T], Mf], Kf];
var bg = [0, sf, yf];
var cg = [0, yf, -2];
function dg(a) {
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
  var e = b.indexOf(":");
  if (-1 != e) {
    var h = b.substring(e + 1);
    b = b.substring(0, e);
    if (("http" === c && "80" !== h) || ("https" === c && "443" !== h)) a = ":" + h;
  }
  return c + "://" + b + a;
}
globalThis.$J2CL_PRESERVE$ = function () {};
function eg() {}
eg.prototype.Ia = function (a) {
  return Object.is(this, a) || (null == this && null == a);
};
eg.prototype.jf = function () {
  return this.ye || (Object.defineProperties(this, { ye: { value: (fg = (fg + 1) | 0), enumerable: !1 } }), this.ye);
};
eg.prototype.toString = function () {
  var a = gg(hg(ig(this.constructor))) + "@";
  var b = (this.jf() >>> 0).toString(16);
  return a + gg(b);
};
eg.prototype.ua = ["java.lang.Object", 0];
function jg(a, b) {
  this.s = a | 0;
  this.l = b | 0;
}
function kg(a) {
  return 4294967296 * a.l + (a.s >>> 0);
}
d = jg.prototype;
d.isSafeInteger = function () {
  var a = this.l >> 21;
  return 0 == a || (-1 == a && !(0 == this.s && -2097152 == this.l));
};
d.toString = function (a) {
  a = a || 10;
  if (2 > a || 36 < a) throw Error("radix out of range: " + a);
  if (this.isSafeInteger()) {
    var b = kg(this);
    return 10 == a ? "" + b : b.toString(a);
  }
  b = 14 - (a >> 2);
  var c = Math.pow(a, b),
    e = lg(c, c / 4294967296);
  c = mg(this, e);
  var h = Math,
    k = h.abs;
  e = c.multiply(e);
  e = this.add(ng(e));
  h = k.call(h, kg(e));
  k = 10 == a ? "" + h : h.toString(a);
  k.length < b && (k = "0000000000000".slice(k.length - b) + k);
  h = kg(c);
  return (10 == a ? h : h.toString(a)) + k;
};
function og(a) {
  return 0 == a.s && 0 == a.l;
}
d.jf = function () {
  return this.s ^ this.l;
};
d.Ia = function (a) {
  return this.s == a.s && this.l == a.l;
};
d.compare = function (a) {
  return this.l == a.l ? (this.s == a.s ? 0 : this.s >>> 0 > a.s >>> 0 ? 1 : -1) : this.l > a.l ? 1 : -1;
};
function ng(a) {
  var b = (~a.s + 1) | 0;
  return lg(b, (~a.l + !b) | 0);
}
d.add = function (a) {
  var b = this.l >>> 16,
    c = this.l & 65535,
    e = this.s >>> 16,
    h = a.l >>> 16,
    k = a.l & 65535,
    n = a.s >>> 16;
  a = (this.s & 65535) + (a.s & 65535);
  n = (a >>> 16) + (e + n);
  e = n >>> 16;
  e += c + k;
  return lg(((n & 65535) << 16) | (a & 65535), ((((e >>> 16) + (b + h)) & 65535) << 16) | (e & 65535));
};
d.multiply = function (a) {
  if (og(this)) return this;
  if (og(a)) return a;
  var b = this.l >>> 16,
    c = this.l & 65535,
    e = this.s >>> 16,
    h = this.s & 65535,
    k = a.l >>> 16,
    n = a.l & 65535,
    q = a.s >>> 16;
  a = a.s & 65535;
  var r = h * a;
  var v = (r >>> 16) + e * a;
  var z = v >>> 16;
  v = (v & 65535) + h * q;
  z += v >>> 16;
  z += c * a;
  var C = z >>> 16;
  z = (z & 65535) + e * q;
  C += z >>> 16;
  z = (z & 65535) + h * n;
  C = (C + (z >>> 16) + (b * a + c * q + e * n + h * k)) & 65535;
  return lg(((v & 65535) << 16) | (r & 65535), (C << 16) | (z & 65535));
};
function mg(a, b) {
  if (og(b)) throw Error("division by zero");
  if (0 > a.l) {
    if (a.Ia(pg)) {
      if (b.Ia(qg) || b.Ia(rg)) return pg;
      if (b.Ia(pg)) return qg;
      var c = a.l;
      c = lg((a.s >>> 1) | (c << 31), c >> 1);
      c = mg(c, b).shiftLeft(1);
      if (c.Ia(sg)) return 0 > b.l ? qg : rg;
      var e = b.multiply(c);
      a = a.add(ng(e));
      return c.add(mg(a, b));
    }
    return 0 > b.l ? mg(ng(a), ng(b)) : ng(mg(ng(a), b));
  }
  if (og(a)) return sg;
  if (0 > b.l) return b.Ia(pg) ? sg : ng(mg(a, ng(b)));
  for (e = sg; 0 <= a.compare(b); ) {
    c = Math.max(1, Math.floor(kg(a) / kg(b)));
    var h = Math.ceil(Math.log(c) / Math.LN2);
    h = 48 >= h ? 1 : Math.pow(2, h - 48);
    for (var k = tg(c), n = k.multiply(b); 0 > n.l || 0 < n.compare(a); ) (c -= h), (k = tg(c)), (n = k.multiply(b));
    og(k) && (k = qg);
    e = e.add(k);
    a = a.add(ng(n));
  }
  return e;
}
d.and = function (a) {
  return lg(this.s & a.s, this.l & a.l);
};
d.or = function (a) {
  return lg(this.s | a.s, this.l | a.l);
};
d.xor = function (a) {
  return lg(this.s ^ a.s, this.l ^ a.l);
};
d.shiftLeft = function (a) {
  a &= 63;
  if (0 == a) return this;
  var b = this.s;
  return 32 > a ? lg(b << a, (this.l << a) | (b >>> (32 - a))) : lg(0, b << (a - 32));
};
function ug(a, b) {
  b &= 63;
  if (0 == b) return a;
  var c = a.l;
  return 32 > b ? lg((a.s >>> b) | (c << (32 - b)), c >>> b) : 32 == b ? lg(c, 0) : lg(c >>> (b - 32), 0);
}
function Y(a) {
  var b = a | 0;
  m(a === b, "value should be a 32-bit integer");
  return -128 <= b && 128 > b ? vg(b) : new jg(b, 0 > b ? -1 : 0);
}
function tg(a) {
  return 0 < a
    ? 0x7fffffffffffffff <= a
      ? wg
      : new jg(a, a / 4294967296)
    : 0 > a
    ? -0x7fffffffffffffff >= a
      ? pg
      : ng(new jg(-a, -a / 4294967296))
    : sg;
}
function lg(a, b) {
  return new jg(a, b);
}
function xg(a, b) {
  if ("-" == a.charAt(0)) return ng(xg(a.substring(1), b));
  var c = parseInt(a, b || 10);
  if (9007199254740991 >= c) return new jg(c % 4294967296 | 0, (c / 4294967296) | 0);
  if (0 == a.length) throw Error("number format error: empty string");
  if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character: ' + a);
  b = b || 10;
  if (2 > b || 36 < b) throw Error("radix out of range: " + b);
  c = tg(Math.pow(b, 8));
  for (var e = sg, h = 0; h < a.length; h += 8) {
    var k = Math.min(8, a.length - h),
      n = parseInt(a.substring(h, h + k), b);
    8 > k ? (e = e.multiply(tg(Math.pow(b, k))).add(tg(n))) : ((e = e.multiply(c)), (e = e.add(tg(n))));
  }
  return e;
}
var yg = {};
function vg(a) {
  return sb(yg, a, function (b) {
    return new jg(b, 0 > b ? -1 : 0);
  });
}
var sg = lg(0, 0),
  qg = lg(1, 0),
  rg = lg(-1, -1),
  wg = lg(4294967295, 2147483647),
  pg = lg(0, 2147483648);
Y(0);
var fg = 0;
function gg(a) {
  return null == a ? "null" : a.toString();
}
function zg(a, b) {
  this.eb = a;
  this.qc = b;
}
g(zg, eg);
function hg(a) {
  if (0 != a.qc) {
    var b = 3 == a.eb.prototype.ua[1] ? a.eb.prototype.ua[2] : "L" + gg(a.eb.prototype.ua[0]) + ";";
    a = a.qc;
    for (var c = "", e = 0; e < a; e = (e + 1) | 0) c = gg(c) + "[";
    return gg(c) + gg(b);
  }
  return a.eb.prototype.ua[0];
}
zg.prototype.toString = function () {
  return (
    String(0 == this.qc && 1 == this.eb.prototype.ua[1] ? "interface " : 0 == this.qc && 3 == this.eb.prototype.ua[1] ? "" : "class ") +
    gg(hg(this))
  );
};
zg.prototype.ua = ["java.lang.Class", 0];
function ig(a) {
  return sb(a.prototype, "$$class/0", function () {
    return new zg(a, 0);
  });
}
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(1);
Y(0);
Y(1);
Y(0);
Y(0);
Y(1);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(1);
Y(0);
Y(1);
Y(0);
Y(-889275714);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
Y(0);
function Ag() {
  this.Ag = new Bg();
}
g(Ag, eg);
Ag.prototype.O = function () {
  return this.Ag;
};
Ag.prototype.ua = ["com.google.apps.docs.xplat.diagnostics.impressions.DocsAppLoadInvariantsBuilder", 0];
var Cg = [0, M, L, -1];
var Dg = [0, M, -2];
var Eg = [0, T, M];
var Fg = [0, L, -1];
var Gg = [0, M, L, M, -3, L, -1, M, -1];
var Hg = [0, L, -12, M, L, -4, M, L, M, L, N, -1];
var Ig = [0, T, M];
var Jg = [0, M, -1, T, M];
var Kg = [0, T, L];
var Lg = [0, T, -1];
var Mg = [0, T, M];
var Ng = [0, T, M];
var Og = [0, M, -2, L, -1];
var Pg = [0, T, M, -1];
var Qg = [0, T, L];
var Rg = [0, M, -5, Q, Qg, T, M, -1, I, M, -1];
var Sg = [0, L, -13, M, L, -1, S, -8, T, L, -4];
var Tg = [0, T, -1, M, T, M, T, M, T, M, -2];
function Ug(a) {
  W.call(this, a);
}
g(Ug, W);
Ug.j = "docs.diagnostics.impressions.impressiondetails.NetworkDetails";
var Vg = [0, T, -2, L, -2, T, M];
Ug.makeCrossSerializerComparisonsCompatible = X(Ug, Vg);
var Wg = [0, U, T, -1, U, -1, M, V, M, -1];
var Xg = [0, L, -3];
var Yg = [
  0,
  [0, L, -8, Q, [0, T, L], [0, M, -3, L, -3, I, -4, M, -2, L, N, -2, M, -2, [0, L, -4], M, -2], -4, Q, [0, L, -1, T]],
  [0, L, -8],
  [0, L, -3]
];
var Zg = [0, M];
var $g = [0, L, N];
var ah = [0, M, -3, T, -1, M, -1, T, Q, Qg, M, L, T, M, -1, N];
var bh = [0, M];
var ch = [0, L, -1, T, L];
var dh = [0, T, -1, M, N];
var eh = [0, M, -1, T, -1, M, N, L, N, -2, T, N, M, -1, dh, N, -1, dh];
function Bg(a) {
  W.call(this, a);
}
g(Bg, W);
Bg.prototype.getNetworkDetails = function () {
  return y(this, Ug, 72);
};
Bg.j = "docs.diagnostics.impressions.sessioninvariants.DocsAppLoadInvariants";
Bg.ga = [90, 91, 125, 93, 103, 155, 123, 139];
var fh = [
  0,
  T,
  -3,
  M,
  -7,
  T,
  -2,
  Sg,
  M,
  T,
  -1,
  M,
  -1,
  T,
  M,
  -1,
  T,
  -1,
  M,
  -1,
  Tg,
  M,
  Jg,
  M,
  T,
  M,
  -4,
  L,
  T,
  M,
  Pg,
  M,
  I,
  M,
  -1,
  Wg,
  L,
  M,
  -1,
  L,
  T,
  L,
  Cg,
  M,
  T,
  M,
  Xg,
  M,
  ch,
  T,
  -1,
  M,
  -1,
  ah,
  T,
  eh,
  M,
  -1,
  T,
  M,
  Vg,
  M,
  -1,
  L,
  T,
  M,
  -6,
  T,
  -1,
  M,
  L,
  M,
  -1,
  Q,
  Eg,
  Q,
  Ig,
  L,
  Q,
  Ng,
  N,
  L,
  -1,
  N,
  M,
  T,
  L,
  1,
  M,
  wf,
  T,
  M,
  Hg,
  T,
  M,
  -2,
  T,
  L,
  M,
  -2,
  Dg,
  Rg,
  Gg,
  T,
  M,
  Og,
  L,
  Q,
  Fg,
  T,
  Q,
  Mg,
  T,
  -2,
  1,
  Yg,
  T,
  M,
  L,
  M,
  T,
  L,
  M,
  -1,
  Q,
  Lg,
  T,
  -1,
  N,
  -1,
  T,
  -3,
  bh,
  M,
  Zg,
  M,
  Kg,
  L,
  T,
  xf,
  T,
  M,
  $g
];
Bg.makeCrossSerializerComparisonsCompatible = X(Bg, fh);
var gh = [0, Q, [0, T, L], T, U];
var hh = [0, [0, [0, N, -1, M, -4], [0, T], T, N, T], [0, [0, gh], M], xf];
var ih = [
  0,
  [0, N, I, M, -1, L, N, -1, M, T, [0, L, M], N, T, M, [0, M, -2, L, M, -2, L, -2, M, -1]],
  Vg,
  [0, M, T, I, -1, M, T, [0, I, -1, M, -2], -1, L, -1],
  N,
  [0, hh, T, -1, wf, Q, Qg, M],
  [0, T, M, -1, I, L, -7, M, -1, L, -2],
  [0, M, -2]
];
function jh(a) {
  W.call(this, a);
}
g(jh, W);
jh.prototype.dg = function (a) {
  ie(this, 1, a);
};
jh.prototype.eg = function (a) {
  ie(this, 2, a);
};
jh.j = "docs.diagnostics.impressions.impressiondetails.DocsCommonDetails.AccessState";
var kh = [0, M, -1];
jh.makeCrossSerializerComparisonsCompatible = X(jh, kh);
var lh = [0, M, -1, T, M, -4, T];
var mh = [0, L, -1];
var nh = [0, [5, 6], L, -3, R, [0, F, -2, L, -1], R, [0, F], T];
var oh = [0, M];
var ph = [0, M, -1];
var qh = [0, L, -1, F];
function rh(a) {
  W.call(this, a);
}
g(rh, W);
rh.j = "docs.diagnostics.impressions.impressiondetails.PerformanceEntryTiming";
var sh = [0, I, -12, M, I, -2, L, T];
rh.makeCrossSerializerComparisonsCompatible = X(rh, sh);
var th = [0, T, I, -1, sh];
var uh = [0, L, -1, F, T, M];
var vh = [0, L, -3];
var wh = [0, T];
var xh = [0, T, L, T];
var yh = [0, Q, xh, -1];
var zh = [
  0,
  [7, 8, 9, 10, 15, 16, 17, 18, 19],
  N,
  L,
  T,
  [0, T, -1, 1, T, 1, M, -1],
  L,
  T,
  R,
  wh,
  R,
  xh,
  R,
  yh,
  R,
  [0, I],
  T,
  -1,
  L,
  T,
  R,
  [0, T, [0, N]],
  R,
  [0, U],
  R,
  wh,
  R,
  xh,
  R,
  yh
];
var Ah = [0, N, F];
var Bh = [0, N, L, T, F, M, -1];
var Ch = [0, T, -1, Bh, T];
var Dh = [0, M, T, M, T, -1, M];
var Eh = [0, F, -3];
var Fh = [0, Q, [0, T, -1]];
var Gh = [0, T, -1, U, M];
var Hh = [0, L, -1];
var Ih = [0, N, -2];
var Jh = [0, pf, -1];
var Kh = [0, L, -2, [0, M, -17]];
var Lh = [0, T, L, -1, xf, -1, Kh, -2];
var Mh = [0, [0, M, L, M], [0, T, -1], [0, I], [0, T, -2], M, T, [0, L], [0, T]];
var Nh = [0, F, -2];
var Oh = [0, 1, Nh];
var Ph = [0, M, T];
var Qh = [0, T, [0, M, -11, [0, [0, M, -2], -6, [0, T, -1]]], M, I, L, -1, M];
var Rh = [0, T, -2, L, M];
var Sh = [0, T, L, -1, N, M, L];
var Th = [
  0,
  N,
  I,
  L,
  -2,
  M,
  -2,
  I,
  [0, T, -1],
  Q,
  [0, T, -2],
  Q,
  [0, I, -5, M, -1, T, -1, M, -1, I, -5, T, Q, [0, nf], nf, -2],
  -1,
  I,
  M,
  -2,
  I,
  -3,
  M,
  -1,
  I,
  -2,
  [0, L, N]
];
var Uh = [0, T, [0, M, -1], Q, [0, T, -2], M, L, M, -1, T, -1, H, U];
var Vh = [
  0,
  Eh,
  Ah,
  -2,
  F,
  -2,
  S,
  -1,
  F,
  N,
  -1,
  S,
  -3,
  N,
  [0, M, -2, T, -2, L, -1, M, -2, T, -1, 1, T, M, -1, T, N, T],
  F,
  T,
  [0, F, -1],
  [0, T],
  Eh,
  T,
  L,
  M,
  1,
  M,
  N,
  L,
  M,
  [0, [0, T, -2], [0, L, -1, T, -1, U], [0, T, -1], [0, M], [0, M]],
  M,
  -1,
  T,
  L,
  -2,
  [0, [0, T, U, M, -1, S, M, S, -2, M, T], [0, S, -1, H, M, T, U, M, -4, S, -1, M, T]],
  L,
  M,
  T,
  N,
  Qh,
  T,
  [
    0,
    L,
    F,
    [0, T, wf, L],
    [
      0,
      T,
      M,
      -1,
      [0, U],
      [0, T, -5, [0, U, -1], T, [0, U], [0, U, L, T], [0, U, L, T], T, N, M, Gh, T, Fh, T, -1, L, T],
      [0, T, -1],
      N,
      M,
      -1,
      [0, Gh, T],
      [0, T],
      Q,
      [0, L, -2, T, L, M, -1, T, [0, T], L, T],
      L,
      -1
    ],
    [0, T]
  ],
  [0, L, -2],
  N,
  1,
  [0, Q, [0, T, L], [0, T, L, M], M],
  L,
  [
    0,
    L,
    -1,
    wf,
    L,
    -1,
    M,
    L,
    -2,
    T,
    [0, Q, [0, [0, L, -2], [0, T, -1, L, -1, T, -1, N], [0, L, -1]], -5],
    M,
    L,
    T,
    M,
    -2,
    L,
    -1,
    U,
    nf,
    M,
    H,
    Q,
    [0, L, [0, N, H, M, -1], U],
    -2,
    I,
    N,
    -1,
    L,
    -2,
    M,
    L,
    -2,
    M,
    T,
    wf,
    M
  ],
  [0, L, M, -2, L, M],
  Uh,
  [0, O, M, -1],
  N,
  [0, O, -1, L, T, -1, L],
  [0, [17, 18], F, M, -1, T, N, T, [0, N, L, -3], I, M, I, U, M, T, I, N, M, R, [0, M, -1, L], R, [0, M, -5], M],
  [0, F, L, T, -1, L, S, T, M],
  N,
  M,
  [0, T, M, [0, M, -1], I, M],
  1,
  L,
  [0, T, M, L],
  [0, N, -1, L, -1, wf, L, T, -1, L, Q, [0, T, -1, L, -1], T, I, Jh, Q, Jh, -1, U, T, -2, L, -1],
  [0, Ah, T, F],
  [0, L, Q, [0, L, -1], M],
  [0, L, T, L, -1, T, L, H],
  1,
  [0, [4, 20], M, L, -1, Gf, M, [0, T], I, -1, M, L, N, M, T, -3, M, Dh, T, Gf, L, Q, Bh, L, M, L],
  [0, L, -2],
  [0, N, M, -1, T, I, M],
  [0, M],
  [0, I, -1, Q, [0, N, -1]],
  T,
  Ch,
  [0, [0, [0, I, -1, L, -2], Q, Bh, T], Ch],
  [0, T, L, T],
  [0, [0, T], [0, T, -1]],
  [0, T, M],
  Mh,
  [0, Q, [0, T]],
  [0, Q, Fh, L],
  [0, L, -1],
  [0, L, -1],
  [0, M, L, T, -1, Dh],
  [0, [0, [0, I, L, -1, T, -1], Q, [0, T, -1], T], [0, T, -2]],
  [0, [0, M, -1, U]],
  [0, M, -1],
  [0, T],
  [0, M],
  [0, T, -1],
  L,
  [0, T, L, [0, L, I, -1, L]],
  [0, M, -1],
  [0, M, -1],
  [0, M],
  U,
  [0, U, T, -1],
  [0, T],
  Wg,
  [0, T, Q, [0, 1, Q, [0, 1, Q, Oh, Nh, M], Nh, M], Q, Oh],
  Sh,
  N,
  [0, [0, M]],
  [0, F, -1, T, -2],
  1,
  [0, T, M, N],
  [0, [5, 6], T, M, L, -1, Nf, -1, L, H, -1, T, N, Ih, Hh],
  [0, [5, 6], M, L, -2, Nf, -1, I, H, -1, T, N, M, Ih, Hh],
  [0, M, T, [0, L, -1]],
  [0, T, -1, I, T, -1, N, -2, T],
  L,
  [0, M],
  [0, L, M, -1, T, M, -1],
  T,
  Ye,
  Rf,
  [0, O, Q, [0, N, -2, I, -1, M, L, -8, M, N], O, I, T],
  [0, M, I, T, L, T, L],
  [0, [0, L, -1, T, -1], [0, T, H, T, L, M], L, [0, T], T, H, [0, H, -3], T, M, -2, N, O],
  [0, S, -1, T, N, M],
  [0, L, T, [0, N, T, -1, [0, L, -12, [0, L, -2], -5], [0, M, -36]], T, -1],
  Th,
  Ye,
  Sf,
  1,
  M,
  [0, T],
  M,
  [0, T, M, L, M, -1, U, -1, M, L, M, [0, L, -2, M], [0, L, -1, M], M, [0, T, M], M, [0, M], M],
  Rh,
  [0, L, -4, T, -1, L, -1, S, T, L, -5, T, -1, L],
  [0, T],
  T,
  [0, [0, L], [0, L, -1, M], T, L, T, [0, H, -5, I, -2, H], [0, T, -1, M, I], M],
  M,
  -1,
  [0, L],
  S,
  -1,
  Ph,
  [0, T, 1, [0, L, -1]],
  F,
  [0, [0, L, M], [0, T, L, -1], [0, N, -1, L, T, M]],
  T,
  M,
  L,
  [0, [0, M, I, U], [0, T, -1], [0, U], [0, T], [0, I], [0, I, T, -1, I, -2], [0, T], [0, T]],
  T,
  [0, U],
  [0, M, -5, N, -2, T, -1, L, -1],
  1,
  L,
  [0, Lh, [0, L, -1, Q, Lh, L, -2, Kh, -1, L, -1], 1, [0, L, -1, M, L], T, -1, N],
  M,
  -1,
  [0, [0, T, -1], [0, L]],
  [0, T],
  zh,
  [0, L, -2],
  [0, N, T, N]
];
var Wh = [0, T, [0, L]];
var Xh = [0, O, rf, V, xf, L, -5];
var Yh = [0, T, H];
var Zh = [0, N, H, T];
var $h = [0, L, I, L, -1, O, L, -1, M, Q, Zh, V, O];
var ai = [0, N, Yh, Xh, $h, Zh];
var bi = [0, [0, L, -2], -3, [0, O, -3, M, L, -2], [0, N, -1, T, M], [0, O], [0, M]];
function ci(a) {
  W.call(this, a);
}
g(ci, W);
d = ci.prototype;
d.df = function () {
  return Sc(Hd(this, 12));
};
d.cg = function (a) {
  ie(this, 12, a);
};
d.gf = function () {
  return null != Sc(Hd(this, 12));
};
d.We = function () {
  return y(this, jh, 20);
};
d.Vf = function (a) {
  A(this, jh, 20, a);
};
ci.j = "docs.diagnostics.impressions.impressiondetails.DocsCommonDetails";
ci.ga = [3, 42];
var di = [
  0,
  vh,
  M,
  U,
  Vh,
  T,
  -1,
  L,
  -3,
  bi,
  M,
  1,
  M,
  Tg,
  T,
  -3,
  kh,
  qh,
  L,
  -3,
  M,
  N,
  uh,
  T,
  Sg,
  L,
  -1,
  oh,
  M,
  -1,
  lh,
  M,
  -1,
  Wh,
  th,
  mh,
  U,
  T,
  -2,
  ph,
  L,
  F,
  T,
  M,
  -1,
  Rg,
  M,
  L,
  M,
  -1,
  L,
  -2,
  M,
  -1,
  ai,
  M,
  nh
];
ci.makeCrossSerializerComparisonsCompatible = X(ci, di);
var ei = {
  oh: "n_amt",
  ph: "n_afoiu",
  qh: "n_age",
  rh: "n_k",
  sh: "n_ars",
  th: "n_s",
  uh: "n_ss",
  vh: "n_ats",
  wh: "n_atas",
  yh: "n_bi",
  zh: "n_bl",
  Ah: "n_cajct",
  Bh: "n_cajstm",
  Dh: "n_ccd",
  Eh: "n_cc",
  Fh: "n_c",
  Gh: "n_cp",
  Hh: "n_csbs",
  Jh: "n_dt",
  Lh: "n_dlis",
  Mh: "n_deau",
  Nh: "n_detl",
  Oh: "n_eau",
  Ph: "n_ecs",
  Qh: "n_ecmv3m",
  Rh: "n_ecil",
  Sh: "n_ecpde",
  Th: "n_edmp",
  Uh: "n_edtt",
  Vh: "n_edlh",
  Wh: "n_efab",
  Xh: "n_eh",
  Yh: "n_eil",
  Zh: "n_eliw",
  ai: "n_eml",
  bi: "n_emv2dm",
  ci: "n_eod",
  di: "n_eoros",
  ei: "n_ep",
  fi: "n_eqwv",
  hi: "n_ei",
  ii: "n_fpae",
  ri: "n_hak",
  si: "n_imb",
  ti: "n_imp",
  wi: "n_iup",
  vi: "n_iltrup",
  Bi: "n_j",
  Ci: "n_kud",
  Di: "n_lcu",
  Fi: "n_mpak",
  Gi: "n_mpau",
  Li: "n_nmri",
  Ji: "n_nib",
  Ki: "n_nmb",
  Ni: "n_npd",
  Oi: "n_npv",
  Pi: "n_oe",
  Si: "n_pau",
  Xi: "n_rs",
  Zi: "n_rau",
  aj: "n_ses",
  bj: "n_scp",
  ej: "n_sit",
  fj: "n_t",
  jj: "n_ton",
  gj: "n_tak",
  ij: "n_tipe",
  hj: "n_tbti",
  kj: "n_taau",
  lj: "n_tcu",
  mj: "n_tcur",
  pj: "n_tms",
  oj: "n_the",
  rj: "n_ur",
  sj: "n_uptc",
  ui: "n_ugat",
  wj: "n_uo",
  vj: "n_ui",
  tj: "n_ue",
  uj: "n_ugs",
  xj: "n_wfp",
  yj: "n_wcv"
};
var fi = [0, N, L, -1];
function gi() {
  function a() {
    h[0] = 1732584193;
    h[1] = 4023233417;
    h[2] = 2562383102;
    h[3] = 271733878;
    h[4] = 3285377520;
    z = v = 0;
  }
  function b(C) {
    for (var K = n, x = 0; 64 > x; x += 4) K[x / 4] = (C[x] << 24) | (C[x + 1] << 16) | (C[x + 2] << 8) | C[x + 3];
    for (x = 16; 80 > x; x++) (C = K[x - 3] ^ K[x - 8] ^ K[x - 14] ^ K[x - 16]), (K[x] = ((C << 1) | (C >>> 31)) & 4294967295);
    C = h[0];
    var G = h[1],
      P = h[2],
      fa = h[3],
      ia = h[4];
    for (x = 0; 80 > x; x++) {
      if (40 > x)
        if (20 > x) {
          var jb = fa ^ (G & (P ^ fa));
          var ve = 1518500249;
        } else (jb = G ^ P ^ fa), (ve = 1859775393);
      else 60 > x ? ((jb = (G & P) | (fa & (G | P))), (ve = 2400959708)) : ((jb = G ^ P ^ fa), (ve = 3395469782));
      jb = ((((C << 5) | (C >>> 27)) & 4294967295) + jb + ia + ve + K[x]) & 4294967295;
      ia = fa;
      fa = P;
      P = ((G << 30) | (G >>> 2)) & 4294967295;
      G = C;
      C = jb;
    }
    h[0] = (h[0] + C) & 4294967295;
    h[1] = (h[1] + G) & 4294967295;
    h[2] = (h[2] + P) & 4294967295;
    h[3] = (h[3] + fa) & 4294967295;
    h[4] = (h[4] + ia) & 4294967295;
  }
  function c(C, K) {
    if ("string" === typeof C) {
      C = unescape(encodeURIComponent(C));
      for (var x = [], G = 0, P = C.length; G < P; ++G) x.push(C.charCodeAt(G));
      C = x;
    }
    K || (K = C.length);
    x = 0;
    if (0 == v) for (; x + 64 < K; ) b(C.slice(x, x + 64)), (x += 64), (z += 64);
    for (; x < K; ) if (((k[v++] = C[x++]), z++, 64 == v)) for (v = 0, b(k); x + 64 < K; ) b(C.slice(x, x + 64)), (x += 64), (z += 64);
  }
  function e() {
    var C = [],
      K = 8 * z;
    56 > v ? c(q, 56 - v) : c(q, 64 - (v - 56));
    for (var x = 63; 56 <= x; x--) (k[x] = K & 255), (K >>>= 8);
    b(k);
    for (x = K = 0; 5 > x; x++) for (var G = 24; 0 <= G; G -= 8) C[K++] = (h[x] >> G) & 255;
    return C;
  }
  for (var h = [], k = [], n = [], q = [128], r = 1; 64 > r; ++r) q[r] = 0;
  var v, z;
  a();
  return {
    reset: a,
    update: c,
    digest: e,
    digestString: function () {
      for (var C = e(), K = "", x = 0; x < C.length; x++)
        K += "0123456789ABCDEF".charAt(Math.floor(C[x] / 16)) + "0123456789ABCDEF".charAt(C[x] % 16);
      return K;
    }
  };
}
function hi(a, b, c) {
  var e = String(l.location.href);
  return e && a && b ? [b, ii(dg(e), a, c || null)].join(" ") : null;
}
function ii(a, b, c) {
  var e = [],
    h = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return (
      (h = [b, a]),
      kb(e, function (q) {
        h.push(q);
      }),
      ji(h.join(" "))
    );
  var k = [],
    n = [];
  kb(c, function (q) {
    n.push(q.key);
    k.push(q.value);
  });
  c = Math.floor(new Date().getTime() / 1e3);
  h = 0 == k.length ? [c, b, a] : [k.join(":"), c, b, a];
  kb(e, function (q) {
    h.push(q);
  });
  a = ji(h.join(" "));
  a = [c, a];
  0 == n.length || a.push(n.join(""));
  return a.join("_");
}
function ji(a) {
  var b = gi();
  b.update(a);
  return b.digestString().toLowerCase();
}
var ki = {};
function li() {}
function mi(a, b, c) {
  for (var e in a) b.call(c, a[e], e, a);
}
function ni(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function oi(a) {
  var b = [],
    c = 0,
    e;
  for (e in a) b[c++] = a[e];
  return b;
}
function pi(a) {
  var b = [],
    c = 0,
    e;
  for (e in a) b[c++] = e;
  return b;
}
var qi = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ri(a, b) {
  for (var c, e, h = 1; h < arguments.length; h++) {
    e = arguments[h];
    for (c in e) a[c] = e[c];
    for (var k = 0; k < qi.length; k++) (c = qi[k]), Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
  }
}
var si;
function ti(a) {
  if (ui !== ui) throw Error("TrustedResourceUrl is not meant to be built directly");
  this.Kf = a;
}
ti.prototype.toString = function () {
  return this.Kf + "";
};
ti.prototype.Mb = !0;
ti.prototype.Kb = function () {
  return this.Kf.toString();
};
var ui = {};
function vi(a) {
  if (void 0 === si) {
    var b = null;
    var c = l.trustedTypes;
    if (c && c.createPolicy)
      try {
        b = c.createPolicy("goog#html", { createHTML: Ma, createScript: Ma, createScriptURL: Ma });
      } catch (e) {
        l.console && l.console.error(e.message);
      }
    si = b;
  }
  a = (b = si) ? b.createScriptURL(a) : a;
  return new ti(a);
}
function wi(a, b) {
  if (b !== xi) throw Error("SafeUrl is not meant to be built directly");
  this.Qd = a;
}
wi.prototype.toString = function () {
  return this.Qd.toString();
};
wi.prototype.Mb = !0;
wi.prototype.Kb = function () {
  return this.Qd.toString();
};
var xi = {},
  yi = new wi("about:invalid#zClosurez", xi);
new wi("about:blank", xi);
var zi = {};
function Ai() {
  if (zi !== zi) throw Error("SafeStyle is not meant to be built directly");
  this.Jf = "";
  this.Mb = !0;
}
Ai.prototype.Kb = function () {
  return this.Jf;
};
Ai.prototype.toString = function () {
  return this.Jf.toString();
};
new Ai();
var Bi = {};
function Ci() {
  if (Bi !== Bi) throw Error("SafeStyleSheet is not meant to be built directly");
  this.If = "";
  this.Mb = !0;
}
Ci.prototype.toString = function () {
  return this.If.toString();
};
Ci.prototype.Kb = function () {
  return this.If;
};
new Ci();
var Di = {};
function Ei() {
  var a = (l.trustedTypes && l.trustedTypes.emptyHTML) || "";
  if (Di !== Di) throw Error("SafeHtml is not meant to be built directly");
  this.Hf = a;
  this.Mb = !0;
}
Ei.prototype.Kb = function () {
  return this.Hf.toString();
};
Ei.prototype.toString = function () {
  return this.Hf.toString();
};
new Ei(); /*

 SPDX-License-Identifier: Apache-2.0
*/
function Fi() {
  var a = Gi;
  a instanceof wi && a.constructor === wi
    ? (a = a.Qd)
    : (Sa("expected object of type SafeUrl, got '" + a + "' of type " + Aa(a)), (a = "type_error:SafeUrl"));
  return a;
}
function Hi(a) {
  return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, e) {
    return c + e.toUpperCase();
  });
}
function Ii() {
  this.F = document || { cookie: "" };
}
d = Ii.prototype;
d.isEnabled = function () {
  if (!l.navigator.cookieEnabled) return !1;
  if (!this.Fd()) return !0;
  this.set("TESTCOOKIESENABLED", "1", { maxAge: 60 });
  if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
  this.remove("TESTCOOKIESENABLED");
  return !0;
};
d.set = function (a, b, c) {
  var e = !1;
  if ("object" === typeof c) {
    var h = c.sameSite;
    e = c.secure || !1;
    var k = c.domain || void 0;
    var n = c.path || void 0;
    var q = c.maxAge;
  }
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === q && (q = -1);
  this.F.cookie =
    a +
    "=" +
    b +
    (k ? ";domain=" + k : "") +
    (n ? ";path=" + n : "") +
    (0 > q ? "" : 0 == q ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1e3 * q).toUTCString()) +
    (e ? ";secure" : "") +
    (null != h ? ";samesite=" + h : "");
};
d.get = function (a, b) {
  for (var c = a + "=", e = (this.F.cookie || "").split(";"), h = 0, k; h < e.length; h++) {
    k = Za(e[h]);
    if (0 == k.lastIndexOf(c, 0)) return k.slice(c.length);
    if (k == a) return "";
  }
  return b;
};
d.remove = function (a, b, c) {
  var e = this.mc(a);
  this.set(a, "", { maxAge: 0, path: b, domain: c });
  return e;
};
d.Ib = function () {
  return Ji(this).keys;
};
d.xa = function () {
  return Ji(this).values;
};
d.Fd = function () {
  return !this.F.cookie;
};
d.Hb = function () {
  return this.F.cookie ? (this.F.cookie || "").split(";").length : 0;
};
d.mc = function (a) {
  return void 0 !== this.get(a);
};
d.clear = function () {
  for (var a = Ji(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
};
function Ji(a) {
  a = (a.F.cookie || "").split(";");
  for (var b = [], c = [], e, h, k = 0; k < a.length; k++)
    (h = Za(a[k])), (e = h.indexOf("=")), -1 == e ? (b.push(""), c.push(h)) : (b.push(h.substring(0, e)), c.push(h.substring(e + 1)));
  return { keys: b, values: c };
}
function Ki(a) {
  return !!ki.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
}
function Li(a, b, c, e) {
  (a = l[a]) || "undefined" === typeof document || (a = new Ii().get(b));
  return a ? hi(a, c, e) : null;
}
function Mi(a, b) {
  b = void 0 === b ? !1 : b;
  var c = dg(String(l.location.href)),
    e = [];
  var h = b;
  h = void 0 === h ? !1 : h;
  var k = l.__SAPISID || l.__APISID || l.__3PSAPISID || l.__OVERRIDE_SID;
  Ki(h) && (k = k || l.__1PSAPISID);
  if (k) h = !0;
  else {
    if ("undefined" !== typeof document) {
      var n = new Ii();
      k = n.get("SAPISID") || n.get("APISID") || n.get("__Secure-3PAPISID") || n.get("SID") || n.get("OSID");
      Ki(h) && (k = k || n.get("__Secure-1PAPISID"));
    }
    h = !!k;
  }
  h &&
    ((h = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"))
      ? l.__SAPISID
      : l.__APISID),
    h || "undefined" === typeof document || ((h = new Ii()), (h = h.get(c ? "SAPISID" : "APISID") || h.get("__Secure-3PAPISID"))),
    (h = h ? hi(h, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && e.push(h),
    c &&
      Ki(b) &&
      ((b = Li("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && e.push(b),
      (a = Li("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && e.push(a)));
  return 0 == e.length ? null : e.join(" ");
}
function Ni() {
  this.L = "keep_invariants";
}
Ni.prototype.getId = function () {
  return this.L;
};
function Oi() {}
function Pi(a, b) {
  this.vg = a;
  this.jg = b;
}
Pi.prototype.tb = function (a) {
  return this.vg.tb(a);
};
function Qi() {
  var a = { DEFAULT: 0, DARK: 1 };
  this.D = {};
  this.Ac = {};
  if (a) for (var b in a) this.put(b, a[b]);
}
Qi.prototype.put = function (a, b) {
  m(void 0 === this.D[a]);
  m(void 0 === this.Ac[b]);
  this.D[a] = b;
  this.Ac[b] = a;
};
Qi.prototype.get = function (a) {
  return this.D[a];
};
Qi.prototype.Ib = function () {
  return pi(this.D);
};
Qi.prototype.remove = function (a) {
  if (void 0 !== this.D[a]) {
    var b = m(this.D[a]);
    m(void 0 !== this.Ac[b]);
    delete this.D[a];
    delete this.Ac[b];
  }
};
var Ri = [0, [0, T, -1, Q, [0, I, N, -1, T], [0, T, -1], M, [0, M, -1]]];
function Si() {
  this.Ae = "";
}
function Ti(a, b, c) {
  chrome.identity.getAuthToken({ interactive: !!b }, function (e) {
    var h = !!b;
    e ? ((a.Ae = e), c && c()) : h || Ti(a, !0, c);
  });
}
var Ui =
  Object.freeze ||
  function (a) {
    return a;
  };
function Vi(a) {
  a && "function" == typeof a.gd && a.gd();
}
function Z() {
  this.Za = this.Za;
  this.Pa = this.Pa;
}
Z.prototype.Za = !1;
Z.prototype.isDisposed = function () {
  return this.Za;
};
Z.prototype.gd = function () {
  this.Za || ((this.Za = !0), this.A());
};
function Wi(a, b) {
  b = Ja(Vi, b);
  a.Za ? b() : (a.Pa || (a.Pa = []), a.Pa.push(b));
}
Z.prototype.A = function () {
  if (this.Pa) for (; this.Pa.length; ) this.Pa.shift()();
};
function Xi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Ub = !1;
}
Xi.prototype.stopPropagation = function () {
  this.Ub = !0;
};
Xi.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var Yi = (function () {
  if (!l.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    b = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      }
    });
  try {
    var c = function () {};
    l.addEventListener("test", c, b);
    l.removeEventListener("test", c, b);
  } catch (e) {}
  return a;
})();
function Zi(a, b) {
  Xi.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.Gb = null;
  a && this.init(a, b);
}
La(Zi, Xi);
var $i = Ui({ 2: "touch", 3: "pen", 4: "mouse" });
Zi.prototype.init = function (a, b) {
  var c = (this.type = a.type),
    e = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (ub) {
      a: {
        try {
          rb(b.nodeName);
          var h = !0;
          break a;
        } catch (k) {}
        h = !1;
      }
      h || (b = null);
    }
  } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
  this.relatedTarget = b;
  e
    ? ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
      (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
      (this.screenX = e.screenX || 0),
      (this.screenY = e.screenY || 0))
    : ((this.offsetX = vb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = vb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.pointerType = "string" === typeof a.pointerType ? a.pointerType : $i[a.pointerType] || "";
  this.state = a.state;
  this.timeStamp = a.timeStamp;
  this.Gb = a;
  a.defaultPrevented && Zi.pa.preventDefault.call(this);
};
Zi.prototype.stopPropagation = function () {
  Zi.pa.stopPropagation.call(this);
  this.Gb.stopPropagation ? this.Gb.stopPropagation() : (this.Gb.cancelBubble = !0);
};
Zi.prototype.preventDefault = function () {
  Zi.pa.preventDefault.call(this);
  var a = this.Gb;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var aj = "closure_listenable_" + ((1e6 * Math.random()) | 0);
function bj(a) {
  return !(!a || !a[aj]);
}
var cj = 0;
function dj(a, b, c, e, h) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!e;
  this.wc = h;
  this.key = ++cj;
  this.removed = this.hc = !1;
}
function ej(a) {
  a.removed = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.wc = null;
}
function fj(a) {
  this.src = a;
  this.M = {};
  this.dc = 0;
}
d = fj.prototype;
d.add = function (a, b, c, e, h) {
  var k = a.toString();
  a = this.M[k];
  a || ((a = this.M[k] = []), this.dc++);
  var n = gj(a, b, e, h);
  -1 < n ? ((b = a[n]), c || (b.hc = !1)) : ((b = new dj(b, this.src, k, !!e, h)), (b.hc = c), a.push(b));
  return b;
};
d.remove = function (a, b, c, e) {
  a = a.toString();
  if (!(a in this.M)) return !1;
  var h = this.M[a];
  b = gj(h, b, c, e);
  return -1 < b
    ? (ej(h[b]), m(null != h.length), Array.prototype.splice.call(h, b, 1), 0 == h.length && (delete this.M[a], this.dc--), !0)
    : !1;
};
function hj(a, b) {
  var c = b.type;
  c in a.M && nb(a.M[c], b) && (ej(b), 0 == a.M[c].length && (delete a.M[c], a.dc--));
}
d.removeAll = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.M)
    if (!a || c == a) {
      for (var e = this.M[c], h = 0; h < e.length; h++) ++b, ej(e[h]);
      delete this.M[c];
      this.dc--;
    }
  return b;
};
d.Jb = function (a, b, c, e) {
  a = this.M[a.toString()];
  var h = -1;
  a && (h = gj(a, b, c, e));
  return -1 < h ? a[h] : null;
};
d.hasListener = function (a, b) {
  var c = void 0 !== a,
    e = c ? a.toString() : "",
    h = void 0 !== b;
  return ni(this.M, function (k) {
    for (var n = 0; n < k.length; ++n) if (!((c && k[n].type != e) || (h && k[n].capture != b))) return !0;
    return !1;
  });
};
function gj(a, b, c, e) {
  for (var h = 0; h < a.length; ++h) {
    var k = a[h];
    if (!k.removed && k.listener == b && k.capture == !!c && k.wc == e) return h;
  }
  return -1;
}
var ij = "closure_lm_" + ((1e6 * Math.random()) | 0),
  jj = {},
  kj = 0;
function lj(a, b, c, e, h) {
  if (e && e.once) return mj(a, b, c, e, h);
  if (Array.isArray(b)) {
    for (var k = 0; k < b.length; k++) lj(a, b[k], c, e, h);
    return null;
  }
  c = nj(c);
  return bj(a) ? a.listen(b, c, Ca(e) ? !!e.capture : !!e, h) : oj(a, b, c, !1, e, h);
}
function oj(a, b, c, e, h, k) {
  if (!b) throw Error("Invalid event type");
  var n = Ca(h) ? !!h.capture : !!h,
    q = pj(a);
  q || (a[ij] = q = new fj(a));
  c = q.add(b, c, e, n, k);
  if (c.proxy) return c;
  e = qj();
  c.proxy = e;
  e.src = a;
  e.listener = c;
  if (a.addEventListener) Yi || (h = n), void 0 === h && (h = !1), a.addEventListener(b.toString(), e, h);
  else if (a.attachEvent) a.attachEvent(rj(b.toString()), e);
  else if (a.addListener && a.removeListener) m("change" === b, "MediaQueryList only has a change event"), a.addListener(e);
  else throw Error("addEventListener and attachEvent are unavailable.");
  kj++;
  return c;
}
function qj() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = sj;
  return a;
}
function mj(a, b, c, e, h) {
  if (Array.isArray(b)) {
    for (var k = 0; k < b.length; k++) mj(a, b[k], c, e, h);
    return null;
  }
  c = nj(c);
  return bj(a) ? a.Id(b, c, Ca(e) ? !!e.capture : !!e, h) : oj(a, b, c, !0, e, h);
}
function tj(a, b, c, e, h) {
  if (Array.isArray(b)) for (var k = 0; k < b.length; k++) tj(a, b[k], c, e, h);
  else (e = Ca(e) ? !!e.capture : !!e), (c = nj(c)), bj(a) ? a.se(b, c, e, h) : a && (a = pj(a)) && (b = a.Jb(b, c, e, h)) && uj(b);
}
function uj(a) {
  if ("number" !== typeof a && a && !a.removed) {
    var b = a.src;
    if (bj(b)) hj(b.aa, a);
    else {
      var c = a.type,
        e = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, e, a.capture)
        : b.detachEvent
        ? b.detachEvent(rj(c), e)
        : b.addListener && b.removeListener && b.removeListener(e);
      kj--;
      (c = pj(b)) ? (hj(c, a), 0 == c.dc && ((c.src = null), (b[ij] = null))) : ej(a);
    }
  }
}
function rj(a) {
  return a in jj ? jj[a] : (jj[a] = "on" + a);
}
function sj(a, b) {
  if (a.removed) a = !0;
  else {
    b = new Zi(b, this);
    var c = a.listener,
      e = a.wc || a.src;
    a.hc && uj(a);
    a = c.call(e, b);
  }
  return a;
}
function pj(a) {
  a = a[ij];
  return a instanceof fj ? a : null;
}
var vj = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function nj(a) {
  m(a, "Listener can not be null.");
  if ("function" === typeof a) return a;
  m(a.handleEvent, "An object listener must have handleEvent method.");
  a[vj] ||
    (a[vj] = function (b) {
      return a.handleEvent(b);
    });
  return a[vj];
}
function wj(a, b) {
  Xi.call(this, "c");
  this.tab = a;
  this.og = b || void 0;
}
g(wj, Xi);
function xj(a, b, c, e) {
  chrome.tabs.sendMessage(a, { type: b, value: c }, e);
}
var yj = [];
function zj(a) {
  m(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
  var b = "Ed";
  if (a.Ed && a.hasOwnProperty(b)) return a.Ed;
  yj.push(a);
  var c = new a();
  a.Ed = c;
  m(a.hasOwnProperty(b), "Could not instantiate singleton.");
  return c;
}
function Aj() {
  Z.call(this);
  this.jd = [];
  this.bc = 0;
  this.pf = !1;
}
g(Aj, Z);
Aj.prototype.setEnabled = function (a) {
  this.pf = a;
};
Aj.prototype.get = function (a) {
  return lb(this.jd, function (b) {
    return a ? b.Gf : b.Ve;
  }).join("\n\n\n\n");
};
Aj.prototype.logMessage = function (a) {
  if (this.pf) {
    a = new Bj(a);
    for (var b = 1e7 - a.cd; this.bc > b; ) {
      var c = this.jd.pop();
      this.bc -= c.cd;
    }
    this.jd.unshift(a);
    this.bc += a.cd;
  }
};
function Cj(a, b) {
  a += "";
  return a.length >= b ? a : Array(b - a.length + 1).join("0") + a;
}
Aj.td = function () {
  return zj(Aj);
};
function Bj(a) {
  var b = new Date();
  this.Ve = this.Gf =
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
      Cj(b.getMinutes(), 2) +
      ":" +
      Cj(b.getSeconds(), 2) +
      ":" +
      Cj(b.getMilliseconds(), 3));
  this.cd = this.Ve.length;
}
function Dj(a) {
  this.Qf = this.Rd = this.Ne = this.qe = this.te = null;
  a && this.update(a);
}
Dj.prototype.update = function (a) {
  for (var b in a)
    switch (b) {
      case "url":
        var c = a[b];
        this.te = c;
        try {
          new URL(c);
        } catch (e) {
          Aj.td().logMessage("Failed to get hostname for URL " + c + ".\nProvenance URL: " + this.Rd + ".\nFull exception: " + e + ".");
        }
        break;
      case "title":
        this.qe = a[b];
        break;
      case "description":
        this.Ne = a[b];
        break;
      case "provenanceUrl":
        this.Rd = a[b];
        break;
      case "representativeImageUrl":
        this.Qf = a[b];
    }
};
Dj.prototype.B = function () {
  var a = {};
  a.url = this.te;
  a.title = this.qe;
  a.description = this.Ne;
  a.provenanceUrl = this.Rd;
  a.representativeImageUrl = this.Qf;
  return a;
};
Dj.prototype.getUrl = function () {
  return this.te || "";
};
Dj.prototype.getTitle = function () {
  return this.qe || "";
};
function Ej(a) {
  Dj.call(this);
  this.Te = "";
  a && this.update(a);
}
g(Ej, Dj);
Ej.prototype.update = function (a) {
  Dj.prototype.update.call(this, a);
  "faviconUrl" in a && (this.Te = a.faviconUrl);
};
Ej.prototype.B = function () {
  var a = Dj.prototype.B.call(this);
  a.faviconUrl = this.Te;
  return a;
};
function Fj(a) {
  if (a.xa && "function" == typeof a.xa) return a.xa();
  if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
  if ("string" === typeof a) return a.split("");
  if (Ba(a)) {
    for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
    return b;
  }
  return oi(a);
}
function Gj(a) {
  if (a.Ib && "function" == typeof a.Ib) return a.Ib();
  if (!a.xa || "function" != typeof a.xa) {
    if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (Ba(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return pi(a);
    }
  }
}
function Hj(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (Ba(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
  else for (var e = Gj(a), h = Fj(a), k = h.length, n = 0; n < k; n++) b.call(c, h[n], e && e[n], a);
}
var Ij = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Jj(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var e = a[c].indexOf("="),
        h = null;
      if (0 <= e) {
        var k = a[c].substring(0, e);
        h = a[c].substring(e + 1);
      } else k = a[c];
      b(k, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
    }
  }
}
function Kj(a, b) {
  if (!b) return a;
  var c = a.indexOf("#");
  0 > c && (c = a.length);
  var e = a.indexOf("?");
  if (0 > e || e > c) {
    e = c;
    var h = "";
  } else h = a.substring(e + 1, c);
  a = [a.slice(0, e), h, a.slice(c)];
  c = a[1];
  a[1] = b ? (c ? c + "&" + b : b) : c;
  return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
}
function Lj(a, b, c) {
  Ua(a);
  if (Array.isArray(b)) {
    p(b);
    for (var e = 0; e < b.length; e++) Lj(a, String(b[e]), c);
  } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
}
function Mj(a, b) {
  m(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  var c = [];
  for (b = b || 0; b < a.length; b += 2) Lj(a[b], a[b + 1], c);
  return c.join("&");
}
function Nj(a, b) {
  var c = 2 == arguments.length ? Mj(arguments[1], 0) : Mj(arguments, 1);
  return Kj(a, c);
}
function Oj(a, b, c) {
  c = null != c ? "=" + encodeURIComponent(String(c)) : "";
  return Kj(a, b + c);
}
function Pj(a, b, c) {
  for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
    var e = a.charCodeAt(b - 1);
    if (38 == e || 63 == e) if (((e = a.charCodeAt(b + 6)), !e || 61 == e || 38 == e || 35 == e)) return b;
    b += 7;
  }
  return -1;
}
var Qj = /#|$/,
  Rj = /[?&]($|#)/;
function Sj(a) {
  this.ra = this.Ua = this.Aa = "";
  this.na = null;
  this.Ka = this.ma = "";
  this.X = this.Lg = !1;
  if (a instanceof Sj) {
    this.X = a.X;
    Tj(this, a.Aa);
    var b = a.Ua;
    Uj(this);
    this.Ua = b;
    b = a.ra;
    Uj(this);
    this.ra = b;
    Vj(this, a.na);
    b = a.ma;
    Uj(this);
    this.ma = b;
    Wj(this, a.U.clone());
    a = a.Ka;
    Uj(this);
    this.Ka = a;
  } else
    a && (b = String(a).match(Ij))
      ? ((this.X = !1),
        Tj(this, b[1] || "", !0),
        (a = b[2] || ""),
        Uj(this),
        (this.Ua = Xj(a)),
        (a = b[3] || ""),
        Uj(this),
        (this.ra = Xj(a, !0)),
        Vj(this, b[4]),
        (a = b[5] || ""),
        Uj(this),
        (this.ma = Xj(a, !0)),
        Wj(this, b[6] || "", !0),
        (a = b[7] || ""),
        Uj(this),
        (this.Ka = Xj(a)))
      : ((this.X = !1), (this.U = new Yj(null, this.X)));
}
d = Sj.prototype;
d.toString = function () {
  var a = [],
    b = this.Aa;
  b && a.push(Zj(b, ak, !0), ":");
  var c = this.ra;
  if (c || "file" == b)
    a.push("//"),
      (b = this.Ua) && a.push(Zj(b, ak, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.na),
      null != c && a.push(":", String(c));
  if ((c = this.ma)) this.ra && "/" != c.charAt(0) && a.push("/"), a.push(Zj(c, "/" == c.charAt(0) ? bk : ck, !0));
  (c = this.U.toString()) && a.push("?", c);
  (c = this.Ka) && a.push("#", Zj(c, dk));
  return a.join("");
};
d.resolve = function (a) {
  var b = this.clone(),
    c = !!a.Aa;
  c ? Tj(b, a.Aa) : (c = !!a.Ua);
  if (c) {
    var e = a.Ua;
    Uj(b);
    b.Ua = e;
  } else c = !!a.ra;
  c ? ((e = a.ra), Uj(b), (b.ra = e)) : (c = null != a.na);
  e = a.ma;
  if (c) Vj(b, a.na);
  else if ((c = !!a.ma)) {
    if ("/" != e.charAt(0))
      if (this.ra && !this.ma) e = "/" + e;
      else {
        var h = b.ma.lastIndexOf("/");
        -1 != h && (e = b.ma.slice(0, h + 1) + e);
      }
    h = e;
    if (".." == h || "." == h) e = "";
    else if (-1 != h.indexOf("./") || -1 != h.indexOf("/.")) {
      e = 0 == h.lastIndexOf("/", 0);
      h = h.split("/");
      for (var k = [], n = 0; n < h.length; ) {
        var q = h[n++];
        "." == q
          ? e && n == h.length && k.push("")
          : ".." == q
          ? ((1 < k.length || (1 == k.length && "" != k[0])) && k.pop(), e && n == h.length && k.push(""))
          : (k.push(q), (e = !0));
      }
      e = k.join("/");
    } else e = h;
  }
  c ? (Uj(b), (b.ma = e)) : (c = "" !== a.U.toString());
  c ? Wj(b, a.U.clone()) : (c = !!a.Ka);
  c && ((a = a.Ka), Uj(b), (b.Ka = a));
  return b;
};
d.clone = function () {
  return new Sj(this);
};
function Tj(a, b, c) {
  Uj(a);
  a.Aa = c ? Xj(b, !0) : b;
  a.Aa && (a.Aa = a.Aa.replace(/:$/, ""));
}
function Vj(a, b) {
  Uj(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.na = b;
  } else a.na = null;
}
function Wj(a, b, c) {
  Uj(a);
  b instanceof Yj ? ((a.U = b), a.U.de(a.X)) : (c || (b = Zj(b, ek)), (a.U = new Yj(b, a.X)));
}
d.getQuery = function () {
  return this.U.toString();
};
function fk() {
  var a = gk;
  Uj(a);
  var b = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
  Uj(a);
  a.U.set("zx", b);
  return a;
}
d.removeParameter = function (a) {
  Uj(this);
  this.U.remove(a);
  return this;
};
function Uj(a) {
  if (a.Lg) throw Error("Tried to modify a read-only Uri");
}
d.de = function (a) {
  this.X = a;
  this.U && this.U.de(a);
};
function Xj(a, b) {
  return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function Zj(a, b, c) {
  return "string" === typeof a ? ((a = encodeURI(a).replace(b, hk)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function hk(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var ak = /[#\/\?@]/g,
  ck = /[#\?:]/g,
  bk = /[#\?]/g,
  ek = /[#\?@]/g,
  dk = /#/g;
function Yj(a, b) {
  this.H = this.v = null;
  this.R = a || null;
  this.X = !!b;
}
function ik(a) {
  a.v ||
    ((a.v = new Map()),
    (a.H = 0),
    a.R &&
      Jj(a.R, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
}
d = Yj.prototype;
d.Hb = function () {
  ik(this);
  return this.H;
};
d.add = function (a, b) {
  ik(this);
  this.R = null;
  a = jk(this, a);
  var c = this.v.get(a);
  c || this.v.set(a, (c = []));
  c.push(b);
  this.H = Ta(this.H) + 1;
  return this;
};
d.remove = function (a) {
  ik(this);
  a = jk(this, a);
  return this.v.has(a) ? ((this.R = null), (this.H = Ta(this.H) - this.v.get(a).length), this.v.delete(a)) : !1;
};
d.clear = function () {
  this.v = this.R = null;
  this.H = 0;
};
d.Fd = function () {
  ik(this);
  return 0 == this.H;
};
d.mc = function (a) {
  ik(this);
  a = jk(this, a);
  return this.v.has(a);
};
d.forEach = function (a, b) {
  ik(this);
  this.v.forEach(function (c, e) {
    c.forEach(function (h) {
      a.call(b, h, e, this);
    }, this);
  }, this);
};
d.Ib = function () {
  ik(this);
  for (var a = Array.from(this.v.values()), b = Array.from(this.v.keys()), c = [], e = 0; e < b.length; e++)
    for (var h = a[e], k = 0; k < h.length; k++) c.push(b[e]);
  return c;
};
d.xa = function (a) {
  ik(this);
  var b = [];
  if ("string" === typeof a) this.mc(a) && (b = b.concat(this.v.get(jk(this, a))));
  else {
    a = Array.from(this.v.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
d.set = function (a, b) {
  ik(this);
  this.R = null;
  a = jk(this, a);
  this.mc(a) && (this.H = Ta(this.H) - this.v.get(a).length);
  this.v.set(a, [b]);
  this.H = Ta(this.H) + 1;
  return this;
};
d.get = function (a, b) {
  if (!a) return b;
  a = this.xa(a);
  return 0 < a.length ? String(a[0]) : b;
};
d.toString = function () {
  if (this.R) return this.R;
  if (!this.v) return "";
  for (var a = [], b = Array.from(this.v.keys()), c = 0; c < b.length; c++) {
    var e = b[c],
      h = encodeURIComponent(String(e));
    e = this.xa(e);
    for (var k = 0; k < e.length; k++) {
      var n = h;
      "" !== e[k] && (n += "=" + encodeURIComponent(String(e[k])));
      a.push(n);
    }
  }
  return (this.R = a.join("&"));
};
d.clone = function () {
  var a = new Yj();
  a.R = this.R;
  this.v && ((a.v = new Map(this.v)), (a.H = this.H));
  return a;
};
function jk(a, b) {
  b = String(b);
  a.X && (b = b.toLowerCase());
  return b;
}
d.de = function (a) {
  a &&
    !this.X &&
    (ik(this),
    (this.R = null),
    this.v.forEach(function (b, c) {
      var e = c.toLowerCase();
      c != e &&
        (this.remove(c),
        this.remove(e),
        0 < b.length && ((this.R = null), this.v.set(jk(this, e), pb(b)), (this.H = Ta(this.H) + b.length)));
    }, this));
  this.X = a;
};
d.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Hj(
      arguments[b],
      function (c, e) {
        this.add(e, c);
      },
      this
    );
};
var kk = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random());
function lk() {
  this.rc = {};
  mk(this, l._notes_flag_initialData || {});
  nk(this);
}
function mk(a, b) {
  mi(ei, function (c) {
    void 0 !== b[c] && (a.rc[c] = b[c]);
  });
}
function nk(a) {
  var b = {};
  new Sj(self.location.href).U.forEach(function (c, e) {
    b[e] = c;
  });
  mk(a, b);
}
function ok(a) {
  a = zj(lk).rc[a];
  return isNaN(a) ? 0 : Number(a);
}
var pk = [0, T];
var qk = [0, rf];
var rk = [0, M, T, M, [0, T]];
var sk = [0, T, -1];
var tk = [0, T, -1, L, M];
var uk = [0, M, -1, T];
var vk = [0, L, -2];
var wk = [0, T, V];
var xk = [0, L, -2, N, M];
var yk = [0, L, -1];
var zk = [0, N, T, N, M, L, -8];
var Ak = [0, L, -3];
var Bk = [0, T, N, T];
var Ck = [0, T, M];
var Dk = [0, N, -4, T];
var Ek = [0, T];
var Fk = [0, M, -6];
var Gk = [0, I, -1, M, T];
var Hk = [0, T];
var Ik = [0, M, T, M, T, M];
var Jk = [0, T];
var Kk = [0, T, -1];
var Lk = [0, N, L, -2];
var Mk = [0, M, -2];
var Nk = [0, Q, [0, [3, 4, 5, 6], T, bg, R, [0, N, -1], R, [0, M, -1], R, [0, M, -1], R, [0, M, -1]]];
var Ok = [0, L];
var Pk = [0, L, -3];
var Qk = [0, T, -1];
var Rk = [0, [0, L, -5], -5, [0, L, -4], [0, L, -4], [0, L, -3], [0, L, -3], [0, L, -1], [0, L, -1, O]];
var Sk = [0, T, L, M];
var Tk = [0, T, L, T];
var Uk = [0, T, L, T];
var Vk = [
  0,
  T,
  I,
  -1,
  [0, T],
  T,
  Q,
  [0, T, L, -2, M, -1, I, L, -2],
  Q,
  [0, T, L],
  Q,
  [0, T, L, T],
  Q,
  Tk,
  Q,
  Uk,
  Q,
  Sk,
  Rk,
  -1,
  [0, xf],
  T,
  M,
  I,
  Q,
  [0, T, L],
  Q,
  [0, T, L],
  Q,
  [0, T, L],
  L,
  -3,
  50,
  Q,
  [0, T, -1, Tk, Uk, Sk]
];
var Wk = [0, N, T, -1, L, -1];
var Xk = [0, L, -3];
function Yk(a) {
  W.call(this, a);
}
g(Yk, W);
Yk.prototype.fe = function (a) {
  ie(this, 22, a);
};
Yk.j = "docs.diagnostics.impressions.impressiondetails.KeepDetails";
var Zk = [
  0,
  Wk,
  L,
  M,
  T,
  I,
  Lk,
  I,
  T,
  -1,
  N,
  -1,
  T,
  -1,
  S,
  M,
  N,
  T,
  1,
  N,
  -1,
  L,
  M,
  xk,
  I,
  T,
  zk,
  Ak,
  Xk,
  yk,
  Dk,
  M,
  Vk,
  1,
  T,
  -1,
  Bk,
  T,
  M,
  Rk,
  M,
  Pk,
  Kk,
  pk,
  Gk,
  Hk,
  N,
  M,
  L,
  qk,
  Ik,
  sk,
  wk,
  rk,
  Jk,
  tk,
  M,
  vk,
  uk,
  M,
  Ck,
  M,
  -1,
  T,
  -1,
  Ok,
  Qk,
  -1,
  Nk,
  1,
  Mk,
  Ek,
  2,
  Fk,
  1,
  M
];
Yk.makeCrossSerializerComparisonsCompatible = X(Yk, Zk);
Object.values({
  UNKNOWN: "unknown",
  Kh: "default",
  mi: "groceries",
  ji: "food",
  Hi: "music",
  Wi: "recipes",
  Mi: "notes",
  Ti: "places",
  qj: "travel",
  VIDEO: "video",
  Ch: "celebration"
}).filter(function (a) {
  return "unknown" !== a;
});
function $k() {}
$k.prototype.uc = function (a, b) {
  a.Ej() && this.B(b);
};
function al() {
  this.K = [];
  this.nc = new DataView(new ArrayBuffer(8));
}
g(al, $k);
al.prototype.B = function (a) {
  if (null == a) return [];
  this.K = [];
  for (var b = a.getDescriptor().Dj(), c = 0; c < b.length; c++) {
    var e = b[c];
    if (a.has(e))
      if (e.Ob())
        if (e.Gj()) {
          var h = a,
            k = e;
          e = this.K;
          bl(this, (ld(Hd(k, 2)) << 3) | 2);
          for (var n = e.length, q = 0, r = h.tg(k); q < r; q++) {
            var v = h.get(k, q);
            this.uc(k, v, !0);
          }
          h = e.splice(n, e.length - n);
          bl(this, h.length);
          e.splice.apply(e, [e.length, 0].concat(h));
        } else for (h = 0, k = a.tg(e); h < k; h++) (n = a.get(e, h)), this.uc(e, n);
      else this.uc(e, a.get(e));
  }
  return this.K;
};
al.prototype.uc = function (a, b, c) {
  if ((c = !c)) {
    a: {
      switch (a.cf()) {
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
      bl(this, (ld(Hd(a, 2)) << 3) | c);
      c = !0;
    }
    c = !c;
  }
  if (!c)
    switch (a.cf()) {
      default:
        throw Error("Unknown field type " + a.cf());
      case 17:
        bl(this, (b << 1) ^ -(b >>> 31));
        break;
      case 18:
        a = xg(b);
        b = ug(a, 63);
        a = a.shiftLeft(1).xor(ng(b));
        cl(this, a);
        break;
      case 8:
        bl(this, b ? 1 : 0);
        break;
      case 5:
        0 < b ? bl(this, b) : cl(this, Y(b));
        break;
      case 3:
      case 4:
        cl(this, xg(b));
        break;
      case 14:
      case 13:
        bl(this, b);
        break;
      case 6:
      case 16:
        dl(this, xg(b), 8);
        break;
      case 1:
        this.nc.setFloat64(0, b, !0);
        for (a = 0; 8 > a; a++) this.K.push(this.nc.getUint8(a));
        break;
      case 9:
        if (null != b) for (a = unescape(encodeURIComponent(b)), bl(this, a.length), b = 0; b < a.length; b++) this.K.push(a.charCodeAt(b));
        break;
      case 12:
        if (null != b) for (bl(this, b.length), a = 0; a < b.length; a++) this.K.push(b.charCodeAt(a));
        break;
      case 10:
        b = new al().B(b);
        qb(this.K, b);
        bl(this, (ld(Hd(a, 2)) << 3) | 4);
        break;
      case 11:
        b = new al().B(b);
        bl(this, b.length);
        qb(this.K, b);
        break;
      case 7:
        dl(this, tg(b), 4);
        break;
      case 15:
        dl(this, Y(b), 4);
        break;
      case 2:
        for (this.nc.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.K.push(this.nc.getUint8(a));
    }
};
function bl(a, b) {
  do {
    var c = b & 127;
    b >>>= 7;
    0 < b && (c |= 128);
    a.K.push(c);
  } while (0 < b);
}
function cl(a, b) {
  var c = Y(127);
  do {
    var e = b.and(c).s;
    b = ug(b, 7);
    0 < b.compare(sg) && (e |= 128);
    a.K.push(e);
  } while (0 < b.compare(sg));
}
function dl(a, b, c) {
  for (var e = Y(255), h = 0; h < c; h++) {
    var k = b.and(e).s;
    a.K.push(k);
    b = ug(b, 8);
  }
}
new al();
function el() {
  Z.call(this);
  this.aa = new fj(this);
  this.ng = this;
  this.Ld = null;
}
La(el, Z);
el.prototype[aj] = !0;
d = el.prototype;
d.addEventListener = function (a, b, c, e) {
  lj(this, a, b, c, e);
};
d.removeEventListener = function (a, b, c, e) {
  tj(this, a, b, c, e);
};
d.dispatchEvent = function (a) {
  fl(this);
  var b = this.Ld;
  if (b) {
    var c = [];
    for (var e = 1; b; b = b.Ld) c.push(b), m(1e3 > ++e, "infinite loop");
  }
  b = this.ng;
  e = a.type || a;
  if ("string" === typeof a) a = new Xi(a, b);
  else if (a instanceof Xi) a.target = a.target || b;
  else {
    var h = a;
    a = new Xi(e, b);
    ri(a, h);
  }
  h = !0;
  if (c)
    for (var k = c.length - 1; !a.Ub && 0 <= k; k--) {
      var n = (a.currentTarget = c[k]);
      h = gl(n, e, !0, a) && h;
    }
  a.Ub || ((n = a.currentTarget = b), (h = gl(n, e, !0, a) && h), a.Ub || (h = gl(n, e, !1, a) && h));
  if (c) for (k = 0; !a.Ub && k < c.length; k++) (n = a.currentTarget = c[k]), (h = gl(n, e, !1, a) && h);
  return h;
};
d.A = function () {
  el.pa.A.call(this);
  this.aa && this.aa.removeAll(void 0);
  this.Ld = null;
};
d.listen = function (a, b, c, e) {
  fl(this);
  return this.aa.add(String(a), b, !1, c, e);
};
d.Id = function (a, b, c, e) {
  return this.aa.add(String(a), b, !0, c, e);
};
d.se = function (a, b, c, e) {
  this.aa.remove(String(a), b, c, e);
};
function gl(a, b, c, e) {
  b = a.aa.M[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var h = !0, k = 0; k < b.length; ++k) {
    var n = b[k];
    if (n && !n.removed && n.capture == c) {
      var q = n.listener,
        r = n.wc || n.src;
      n.hc && hj(a.aa, n);
      h = !1 !== q.call(r, e) && h;
    }
  }
  return h && !e.defaultPrevented;
}
d.Jb = function (a, b, c, e) {
  return this.aa.Jb(String(a), b, c, e);
};
d.hasListener = function (a, b) {
  return this.aa.hasListener(void 0 !== a ? String(a) : void 0, b);
};
function fl(a) {
  m(a.aa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
}
function hl(a) {
  Z.call(this);
  this.kb = a;
  this.mb = {};
}
La(hl, Z);
var il = [];
d = hl.prototype;
d.listen = function (a, b, c, e) {
  Array.isArray(b) || (b && (il[0] = b.toString()), (b = il));
  for (var h = 0; h < b.length; h++) {
    var k = lj(a, b[h], c || this.handleEvent, e || !1, this.kb || this);
    if (!k) break;
    this.mb[k.key] = k;
  }
  return this;
};
d.Id = function (a, b, c, e) {
  return jl(this, a, b, c, e);
};
function jl(a, b, c, e, h, k) {
  if (Array.isArray(c)) for (var n = 0; n < c.length; n++) jl(a, b, c[n], e, h, k);
  else {
    b = mj(b, c, e || a.handleEvent, h, k || a.kb || a);
    if (!b) return a;
    a.mb[b.key] = b;
  }
  return a;
}
d.se = function (a, b, c, e, h) {
  if (Array.isArray(b)) for (var k = 0; k < b.length; k++) this.se(a, b[k], c, e, h);
  else
    (c = c || this.handleEvent),
      (e = Ca(e) ? !!e.capture : !!e),
      (h = h || this.kb || this),
      (c = nj(c)),
      (e = !!e),
      (b = bj(a) ? a.Jb(b, c, e, h) : a ? ((a = pj(a)) ? a.Jb(b, c, e, h) : null) : null),
      b && (uj(b), delete this.mb[b.key]);
};
d.removeAll = function () {
  mi(
    this.mb,
    function (a, b) {
      this.mb.hasOwnProperty(b) && uj(a);
    },
    this
  );
  this.mb = {};
};
d.A = function () {
  hl.pa.A.call(this);
  this.removeAll();
};
d.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
new Qi();
(function (a, b) {
  if (Ab && !b) return l.atob(a);
  var c = "";
  Db(a, function (e) {
    c += String.fromCharCode(e);
  });
  return c;
})("bGFiZWxz");
var kl = ha([""]),
  ll = ja(["\x00"], ["\\0"]),
  ml = ja(["\n"], ["\\n"]),
  nl = ja(["\x00"], ["\\u0000"]),
  ol = ha([""]),
  pl = ja(["\x00"], ["\\0"]),
  ql = ja(["\n"], ["\\n"]),
  rl = ja(["\x00"], ["\\u0000"]);
function sl(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!tl && a === a.raw) ||
    !((tl && !ul) || vl(a)) ||
    b + 1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function vl(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function wl(a) {
  return -1 === a.toString().indexOf("`");
}
var tl =
    wl(function (a) {
      return a(kl);
    }) ||
    wl(function (a) {
      return a(ll);
    }) ||
    wl(function (a) {
      return a(ml);
    }) ||
    wl(function (a) {
      return a(nl);
    }),
  ul = vl(ol) && vl(pl) && vl(ql) && vl(rl);
function xl(a, b) {
  this.name = a;
  this.value = b;
}
xl.prototype.toString = function () {
  return this.name;
};
var yl = new xl("OFF", Infinity),
  zl = new xl("SEVERE", 1e3),
  Al = new xl("WARNING", 900),
  Bl = new xl("INFO", 800),
  Cl = new xl("CONFIG", 700),
  Dl = new xl("FINE", 500);
function El() {
  this.jc = 0;
  this.clear();
}
var Fl;
El.prototype.clear = function () {
  this.K = Array(this.jc);
  this.Me = -1;
  this.qf = !1;
};
function Gl(a, b, c) {
  this.reset(a || yl, b, c, void 0, void 0);
}
Gl.prototype.reset = function (a, b) {
  this.Sg = b;
};
Gl.prototype.getMessage = function () {
  return this.Sg;
};
function Hl(a, b) {
  this.level = null;
  this.Gg = [];
  this.parent = (void 0 === b ? null : b) || null;
  this.children = [];
  this.N = {
    getName: function () {
      return a;
    }
  };
}
function Il(a) {
  if (a.level) return a.level;
  if (a.parent) return Il(a.parent);
  Sa("Root logger has no level set.");
  return yl;
}
Hl.prototype.publish = function (a) {
  for (var b = this; b; )
    b.Gg.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
function Jl() {
  this.entries = {};
  var a = new Hl("");
  a.level = Cl;
  this.entries[""] = a;
}
var Kl;
function Ll(a, b) {
  var c = a.entries[b];
  if (c) return c;
  c = Ll(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
  var e = new Hl(b, c);
  a.entries[b] = e;
  c.children.push(e);
  return e;
}
function Ml() {
  Kl || (Kl = new Jl());
  return Kl;
}
function Nl(a, b, c) {
  var e;
  if ((e = a))
    if ((e = a && b)) {
      e = b.value;
      var h = a ? Il(Ll(Ml(), a.getName())) : yl;
      e = e >= h.value;
    }
  if (e) {
    b = b || yl;
    e = Ll(Ml(), a.getName());
    "function" === typeof c && (c = c());
    Fl || (Fl = new El());
    h = Fl;
    a = a.getName();
    if (0 < h.jc) {
      var k = (h.Me + 1) % h.jc;
      h.Me = k;
      h.qf ? ((h = h.K[k]), h.reset(b, c, a), (a = h)) : ((h.qf = k == h.jc - 1), (a = h.K[k] = new Gl(b, c, a)));
    } else a = new Gl(b, c, a);
    e.publish(a);
  }
}
function Ol(a, b) {
  a && Nl(a, zl, b);
}
function Pl(a, b) {
  a && Nl(a, Bl, b);
}
function Ql(a, b) {
  a && Nl(a, Dl, b);
}
function Rl(a) {
  this.Gd = a;
}
function Sl(a) {
  return new Rl(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var Tl = [
    Sl("data"),
    Sl("http"),
    Sl("https"),
    Sl("mailto"),
    Sl("ftp"),
    new Rl(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    })
  ],
  Ul = [];
function Vl() {}
Wl(function (a) {
  var b = Ll(Ml(), "safevalues").N;
  b && Nl(b, Al, "A URL with content '" + a + "' was sanitized away.");
});
function Wl(a) {
  -1 === Ul.indexOf(a) && Ul.push(a);
  Vl = function (b) {
    Ul.forEach(function (c) {
      c(b);
    });
  };
}
Object.freeze(
  "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
    " "
  )
);
var Xl = ha(["http://goo.gl/forms/r40gTO4BTb"]),
  Yl = ha(["https://keep.google.com"]);
(function (a) {
  var b = va.apply(1, arguments);
  sl(a, b.length);
  var c = a[0];
  var e = 0 === b.length;
  var h = c.search(/[:/?#]/);
  0 > h ||
    (":" !== c.charAt(h) ? (e = !0) : ((e = c.substring(0, h).toLowerCase()), (e = /^[a-z][a-z\d+.-]*$/.test(e) && "javascript" !== e)));
  if (!e) throw Error("Trying to interpolate with unsupported prefix: " + c);
  c = [c];
  for (e = 0; e < b.length; e++) c.push(String(b[e])), c.push(a[e + 1]);
  return new wi(c.join(""), xi);
})(Xl);
var Zl = (function (a) {
    var b = va.apply(1, arguments);
    sl(a, b.length);
    if (0 === b.length) return vi(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var e = c.indexOf("//") + 2;
      var h = c.indexOf("/", e);
      if (h <= e)
        throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
      e = c.substring(e, h);
      if (!/^[0-9a-z.:-]+$/i.test(e)) throw Error("The origin contains unsupported characters.");
      if (!/^[^:]*(:[0-9]+)?$/i.test(e)) throw Error("Invalid port number.");
      if (!/(^|\.)[a-z][^.]*$/i.test(e)) throw Error("The top-level domain must start with a letter.");
      e = !0;
    } else e = !1;
    if (!e)
      if (/^\//.test(c))
        if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1])) e = !0;
        else throw Error("The path start in the url is invalid.");
      else e = !1;
    if (!(e = e || RegExp("^[^:\\s\\\\/]+/").test(c)))
      if (/^about:blank/.test(c)) {
        if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
        e = !0;
      } else e = !1;
    if (!e) throw Error("Trying to interpolate expressions in an unsupported url format.");
    c = a[0];
    for (e = 0; e < b.length; e++) c += encodeURIComponent(b[e]) + a[e + 1];
    return vi(c);
  })(Yl).toString(),
  $l = void 0;
$l = void 0 === $l ? Tl : $l;
var am;
a: {
  var bm = $l;
  bm = void 0 === bm ? Tl : bm;
  if (Zl instanceof wi) am = Zl;
  else {
    for (var cm = 0; cm < bm.length; ++cm) {
      var dm = bm[cm];
      if (dm instanceof Rl && dm.Gd(Zl)) {
        am = new wi(Zl, xi);
        break a;
      }
    }
    am = void 0;
  }
}
var em = am;
void 0 === em && Vl(Zl.toString());
var Gi = em || yi,
  fm = ["chrome://", "https://chrome.google.com/webstore", "https://chromewebstore.google.com/", "edge://"];
function gm(a) {
  return mb(fm, function (b) {
    return 0 != a.lastIndexOf(b, 0);
  });
}
function hm(a) {
  chrome.tabs.query({}, function (b) {
    kb(b, a);
  });
}
function im() {
  this.Ng = new Map();
}
function jm(a, b) {
  a.Ng.forEach(function (c) {
    return c(b);
  });
}
function km(a) {
  this.i = a;
}
function lm(a) {
  this.L = a;
}
lm.prototype.getId = function () {
  return this.L;
};
function mm(a) {
  W.call(this, a);
}
g(mm, W);
mm.prototype.Ye = function () {
  return fe(this, 2);
};
mm.prototype.Wb = function (a) {
  D(this, 2, a);
};
mm.j = "docs.diagnostics.impressions.ClientTimingInfo.ElapsedTiming";
var nm = [0, I, -1];
mm.makeCrossSerializerComparisonsCompatible = X(mm, nm);
function om(a) {
  W.call(this, a);
}
g(om, W);
om.prototype.Xe = function () {
  return B(this, 1);
};
om.prototype.be = function (a) {
  return D(this, 1, a);
};
om.j = "docs.diagnostics.impressions.ClientTimingInfo.InstantTiming";
var pm = [0, I];
om.makeCrossSerializerComparisonsCompatible = X(om, pm);
function qm(a) {
  W.call(this, a);
}
g(qm, W);
qm.j = "docs.diagnostics.impressions.ClientTimingInfo";
var rm = [0, pm, nm, T];
qm.makeCrossSerializerComparisonsCompatible = X(qm, rm);
var sm = [0, I, Cf, -1];
var tm = [0, N, -1, I, Hf, [0, 4, N, -2, L, N, -2], 7, M];
var um = [0, [4], tm, Q, tm, T, R, [0, Q, [0, tm, L, xf]]];
var vm = [0, N];
var wm = [0, M];
var xm = [0, [0, I, -1, M, T, M]];
var ym = [0, Ri];
var zm = [
  0,
  [0, T, -1],
  I,
  L,
  [0, T, N, T],
  [0, N, -1, M, -1],
  [0, Q, [0, T, -2], [0, T, -2]],
  [0, T, -1],
  [0, Q, [0, L]],
  T,
  -2,
  [0, L, -1, M, -1, Q, [0, N, M, -1], L, M],
  [0, N],
  [0, I],
  L,
  -2,
  M,
  L,
  T,
  lh,
  L,
  [0, T],
  M,
  T,
  -1,
  M,
  [0, T, -1],
  T,
  -2,
  [0, M, -2, N, -1, T, M, T, -1],
  N
];
var Am = [0, M, L, -5];
var Bm = [0, [0, T], L, -4, T, M, L, -1];
var Cm = [
  0,
  [0, N],
  T,
  -1,
  Q,
  [0, N, -1, L, M, T, M, -1, I],
  [0, T, L],
  [0, T],
  [0, L],
  [0, T, L, -1],
  [0, L],
  [0, I, M, -1, L, M, T, M, -3, L, T, I, T, I, T, N, T, I],
  T,
  [0, T, N, -1, T, -1, Q, [0, N, T, -1, Q, [0, H, -1]], -1, [0, N]],
  [0, L],
  [0, L],
  S,
  [0, T, L],
  [0, M, -1, T, -1, L, -1],
  [0, M, -12, N, L, -2, M, -1, N, M, -1, N, M],
  T,
  [0, T, M, T, N],
  [0, L],
  [0, Q, [0, I, -1], T, M, T, M, [0, T, -1, M], T, [0, T], 1, [0, M]],
  [0, M, -2, T],
  2,
  [0, L, T, N],
  [0, I, L, T, -1],
  [0, M, [0, T, I, -6, L, Pf], T, -1, [0, I], [0, I, -5, L, -4], [0, T, M, -1, I, -2, M, -1], [0, M, -5]],
  [0, [0, L, M, L, I, -1]],
  [0, T, L, -1],
  T,
  [0, L],
  L,
  N,
  [0, T, M, -10, T, L, I, L, M, -9],
  T,
  [0, M, -8],
  M,
  L,
  T,
  U,
  [0, N],
  [0, T, U],
  [0, [1, 2, 3], R, [0, T, -1, L, -1], R, [0, T, I, L], R, [0, T]],
  [0, T, -3],
  [0, N, [0, T, L, N]],
  N,
  [0, T, -1, M, -10, L, I, M, -1],
  L,
  [0, T, -1],
  [0, T],
  [0, T],
  [0, T, I, -2, M, -1],
  [0, T, -1],
  N,
  [0, I, T],
  [0, M, -1, L, M, L],
  [0, T, -1, M],
  [0, T, L, T],
  [0, T, I, L],
  [0, L],
  [0, T, L, I, M, -1],
  [0, T, L, I, T],
  [0, T, -1, I, T, -1, M]
];
var Dm = [0, L, T];
var Em = [0, Q, [0, Dm], Q, [0, Dm, T], Q, [0, Dm, T], Q, [0, Dm, T]];
var Fm = [0, [0, T, L, -4, J, -1], [0, U, M], T];
var Gm = [0, L, -2];
var Hm = [0, T, I, -1, M];
var Im = [0, I, -2];
var Jm = [0, I, F, -1, Xf];
var Km = [0, Q, [0, N, L, -1], L, -1];
var Lm = [0, 3, Q, Im, 2, L, 3, $f, 1, Jm, I, 2, Km, T];
var Mm = [0, I];
var Nm = [0, T, M, -1, I, -1, T, M, T, -1, M, -1];
var Om = [0, N, S];
var Pm = [0, [0, [0, N, S]], [0, Om, M, Q, Om, [0, T]], [0, T], [0, T]];
var Qm = [0, I, -1];
var Rm = [0, S, -1, M, -1];
var Sm = [0, M];
var Tm = [0, [1, 2], Nf, -1];
var Um = [0, T, -1, [0, T, Tm, T, 1, T], [0, T], Tm, [0, 2, T], [0, 1, T], [0, T], [0, T], [0, T], [0, N]];
var Vm = [0, Q, [0, T, -1, N], M, -1];
var Wm = [0, M, [0, [0, I, 1, I, -20], Q, [0, T, -1], [0, L, -1], -1, L, -3, T], M];
var Xm = [0, T];
var Ym = [0, [0, L, -1, T, L], [0, T, -1], [0, T, -2, L, -1], 1, T, L, T, [0, L, -1, T, -1, [0, T, L, T], L, -2, Q, [0, M, T, -1], L]];
var Zm = [0, M];
var $m = [0, S, -1, M, J, S, J, [0, J, -1], M];
var an = [0, T];
var bn = [0, L, -5];
var cn = [
  0,
  M,
  [0, M, -2, T, M, [0, M, I], M, L, -1, M, -5, T, -2, I, M, T, M],
  L,
  gh,
  bn,
  [0, [0, L, Q, [0, T, L]]],
  M,
  T,
  [0, M],
  bn,
  -1,
  L,
  [0, T, -3],
  [0, L, -1],
  M
];
var dn = [0, L, -13];
var en = [0, L, H, T];
var fn = [
  0,
  T,
  M,
  -1,
  T,
  Uh,
  M,
  T,
  L,
  [0, M],
  dn,
  [0, M, T, -1, M, -1, [0, L, T, M, T, L, -1], [0, L, I, -8, T], [0, I, -1, T]],
  [0, T],
  M,
  -2,
  T,
  [
    0,
    [5, 6, 7, 8, 9, 10, 11],
    N,
    L,
    I,
    -1,
    R,
    [0, M, -2, V],
    R,
    [0, L, xf, T, V],
    R,
    [0, T, Q, en, H, [0, T, Q, en, H, L], [0, T, Q, en, L]],
    R,
    [0, Q, en, L, -1],
    R,
    [0, L, Q, en],
    R,
    [0, M, -2, T],
    R,
    [0, M],
    I
  ],
  M,
  N
];
var gn = [0, T, -1, N, T, L, M, T];
var hn = [0, T, M, L, N, T, -1, L, -1, N, T, M, -2, T];
var jn = [0, hn, [0, N], gn, [0, T], [0, T, N, -3, I, -4, T, -1, gn, hn, T, -1, I, T, I, xf]];
var kn = [0, T, Q, [0, N, -3], Q, [0, T, U], T, M];
var ln = [
  0,
  [0, T, -3, M, -4, L, -1, T, M],
  [0, L, -3, T, M, L],
  [0, U, M, U, L, U, L, T],
  [0, L, M, -3, L, -1],
  [0, L, -1, M, -2, L],
  [0, L, -1],
  [0, L, -1],
  [0, T, M, T, M, -1, L, -2],
  [0, M, L, -2],
  [0, M, T, 1, L, -2],
  [0, L, -1],
  [0, L, -1],
  [0, M, T, M, L],
  [0, M, T, M, L],
  [0, T, I],
  [0, M, T, -3, L, M],
  [0, T, M],
  [0, M, -1, L, T],
  [0, M, -1, L, -1, M],
  [0, N],
  [0, L, -1, M],
  [0, M, -1, T],
  [0, M, I, -1, L],
  [0, T, -1, M, L],
  [0, N, T],
  [0, T, N, -1, T],
  [0, M, -1],
  [0, T, -1, L, -1, T],
  [0, T, -2, wf, -2, L]
];
var mn = [0, L, -2];
var nn = [0, L];
var on = [0, T, -1, M, -1, U, S];
var pn = [0, T, S, -1, N, T];
var qn = [0, N, T, I, -1, N, [0, N, -3], I, -13, N, T, L, I];
var rn = [
  0,
  on,
  [0, S, -3, M, U],
  -1,
  U,
  -2,
  [0, on, M],
  [0, uf, M, -3],
  [0, S, -1, 3, M, S, J, I, S, -8, M],
  [0, S, -1, J, S, N, T, S, T, M, T, L, S, -1, N, M, -3],
  [0, [0, S, -1], -1, M, S],
  [0, S, -1, U, N, U, Q, [0, T, uf, I, T, -2, M, T, -2], N, -1],
  [0, S, -2],
  [0, T, -1],
  [0, T],
  [0, O, T],
  [0, L, -1, I],
  [0, S, -1],
  [0, N, T, I, S, -1, J, L, J, L, -2],
  [0, T],
  [0, M, -1],
  gh,
  [0, L, M, -1],
  [0, S, -7, M, S, -13, J, -3, S, -7, H, [0, S, -7], [0, L, -2]],
  [0, S, -12, M, T, -1, [0, S], Q, [0, T, -2], T, -1, S, Q, pn, S, -1, Q, qn, M, S, -4, M, -1],
  [0, L, -10],
  [0, L, -9, M, -1, L, -4, M, L, I, 1, J, -2, 1, J, L, -2, mn, I, nn, [0, L, -2], L, I, -3, S, Q, pn, S, -1],
  [0, T, N],
  [0, I, -1, T, -1],
  [0, L, -10, M],
  Q,
  qn,
  mn,
  [0, I],
  [0, N, I],
  nn,
  [0, O, -1],
  [0, T],
  [0, T],
  [0, M],
  [0, T, M],
  [0, S, -1, T, S],
  [0, T, I, -10],
  [0, 1, S, -4],
  [0, M, -1, L, -4, 1, L, -1, M, -1],
  [0, V, -2, M, -1],
  [0],
  [0, T, -2, M],
  [0, T, [0, V], [0, V], [0, V], [0, Q, [0, T, -1]], [0, T, M, -1], [0, 1, Q, [0, V]], [0, V], [0, V], T, [0, T], [0, Q, [0, T, -1]], T],
  [0, L, -6, M],
  [0, T],
  [0, N, T],
  [0, N],
  [0, T, -1, S, -2, Q, pn],
  [0, S],
  T,
  N,
  [0, I, -1, T, V, M, I, -2, T, I],
  [0, J, -4],
  zh,
  [0, L, N, M]
];
var sn = [
  0,
  N,
  I,
  Q,
  function () {
    return sn;
  },
  S
];
var tn = [
  0,
  M,
  L,
  Q,
  [0, T, Q, [0, T, I, -1], I],
  Q,
  Im,
  I,
  Q,
  [0, T, I],
  L,
  If,
  Q,
  [0, I, -1],
  [0, I, -4],
  $f,
  [0, [0, [0, J, -1, M, -1], -1, M], [0, S, M]],
  Jm,
  I,
  [
    0,
    [
      0,
      [
        0,
        M,
        -1,
        2,
        I,
        M,
        -1,
        1,
        M,
        -3,
        1,
        L,
        2,
        L,
        M,
        -3,
        I,
        M,
        -2,
        1,
        M,
        L,
        -1,
        M,
        -1,
        1,
        M,
        I,
        -1,
        M,
        N,
        L,
        N,
        L,
        M,
        -1,
        N,
        4,
        M,
        S,
        M,
        1,
        M,
        1,
        M,
        N,
        1,
        M,
        -1,
        1,
        N,
        -1,
        1,
        L,
        M,
        -2,
        1,
        M,
        7,
        I,
        4,
        M,
        1,
        M,
        -2,
        1,
        M,
        1,
        I,
        1,
        M,
        L,
        2,
        M,
        3,
        I,
        L,
        -1,
        S,
        N,
        M,
        3,
        M,
        1,
        L,
        2,
        M,
        -2,
        1,
        M,
        2,
        L,
        1,
        I,
        M,
        -2,
        L,
        1,
        M,
        -1,
        I,
        3,
        L,
        M,
        1,
        M,
        2,
        M,
        N,
        -1,
        1,
        M,
        2,
        M,
        2,
        M,
        -1,
        L,
        I,
        -1,
        M,
        I,
        J,
        2,
        M,
        1,
        M,
        -2,
        1,
        M,
        -3,
        L,
        M,
        -2,
        1,
        M,
        N,
        I,
        M,
        -5,
        1,
        M,
        -2,
        1,
        M,
        -1,
        I,
        M,
        2,
        M,
        -14
      ],
      [
        0,
        1,
        M,
        -3,
        N,
        L,
        -1,
        M,
        -1,
        L,
        I,
        L,
        M,
        1,
        I,
        M,
        L,
        -2,
        M,
        I,
        -3,
        M,
        I,
        1,
        I,
        -2,
        1,
        I,
        L,
        M,
        -3,
        I,
        M,
        I,
        M,
        1,
        L,
        M,
        I,
        -2,
        L,
        N,
        L,
        2,
        I,
        M,
        -1,
        L,
        M,
        L,
        -1,
        I,
        L,
        -1,
        M,
        L,
        1,
        N,
        3,
        M,
        -3,
        L,
        -1,
        M,
        -1,
        I,
        M,
        L,
        -2,
        1,
        N,
        M,
        -1,
        L,
        -1,
        2,
        M,
        1,
        M,
        -3,
        1,
        I,
        -10,
        M,
        L,
        I,
        -1,
        M,
        -1,
        1,
        M,
        L,
        -2,
        T,
        S,
        N,
        -2,
        J,
        -2,
        N,
        T,
        J,
        -1,
        L,
        1,
        M,
        1,
        L,
        I,
        1,
        L,
        I,
        M,
        L,
        I,
        1,
        N,
        1,
        N,
        -1,
        L,
        I,
        M,
        1,
        M,
        I,
        -1,
        1,
        M,
        -1,
        I,
        -2,
        L,
        -2,
        2,
        M,
        I,
        -5,
        1,
        I,
        N,
        2,
        I,
        -5,
        1,
        M,
        N,
        M,
        1,
        M,
        -1,
        2,
        N,
        I,
        M,
        L,
        M,
        N,
        1,
        L,
        I,
        -4,
        1,
        I,
        M,
        -1,
        3,
        M,
        1,
        L,
        -1,
        T,
        8,
        N,
        M,
        L,
        -1,
        I,
        -1,
        L,
        M,
        L,
        1,
        M,
        -2,
        L,
        -2,
        M,
        -4,
        L,
        -1,
        M,
        I,
        M,
        L,
        I,
        -1,
        M,
        I,
        F,
        N,
        T,
        M,
        I,
        N,
        -2,
        1,
        M,
        N,
        O,
        2,
        L,
        I,
        M,
        1,
        M,
        L,
        -1,
        M,
        -2,
        I,
        N,
        M,
        -2,
        L,
        M,
        -5,
        T
      ]
    ],
    -1,
    Q,
    [0, L, -1],
    I
  ],
  sn,
  Km,
  T,
  [0, I, T, -1, I, -6, Km, I]
];
var un = [
  0,
  [0, S, -3],
  Q,
  [0, T, -1, M, S, -3, L, J, T],
  [0, S, -1, H, -1, S, -1, M, S, -1],
  [0, H, -4, S, -2],
  Q,
  [0, T, 1, H, -1, S],
  [0, S, Q, [0, N, H, T, -1], S],
  [0, H, -1, S, -3],
  [0, H, -1, J, -2],
  [0, T, J, N, -1, T, M, -2, S, -2],
  [0, M, -3, T, -4, M, L, -1, S, M, Of, -1, M, -1, Of, -1, M, T, -5, M, -1, T, -1, M, -5, L, N, M],
  [0, H, L, -1, T, M, T],
  [0, L],
  [0, T],
  [0, L, T],
  [0, T],
  [0, N],
  [0, L, -1]
];
var vn = [
  0,
  T,
  [0, L, [0, T, N], N, -1, I, L, M, -3, [0, L, -1, 1, I], 1, [0, T, M, -1, T, [0, L, -4]], [0, T, L]],
  [0, 2, T, -2, 1, T, Pf, Of],
  [0, 2, I],
  L,
  3,
  M,
  [0, T, -1],
  [0, M, -1, J, -1],
  2,
  M,
  T,
  [0, T],
  [0, L, H, L, -2, M, -2],
  [0, T, L, H]
];
var wn = [0, L, -1, N, L];
var xn = [0, T, -1];
var yn = [
  0,
  [0, N, L, N, L, -2, M, L, -1, N, M, T, -2, wn, I, M, N],
  [0, T, -1, I, L, T],
  L,
  [0, wn, [0, N, -1, M, -2], N, M, L, xn, Q, xn, M, [0, T], T, [0, N, T], [0, T], N],
  I,
  T,
  -1,
  I
];
var zn = [0, M, T];
var An = [0, L, -3, M, T, L, -3];
var Bn = [0, T, -1, N, I, -2, M, I, -1, T, L, -1, T, I];
var Cn = [0, I, -5, M, I, -2, M, I, -2];
var Dn = [0, N, -1];
var En = [0, N, -1];
var Fn = [
  0,
  [1, 2, 3, 4, 5],
  R,
  [0, N],
  R,
  [0, N],
  R,
  [0, En, Dn, T],
  R,
  [0, En, Dn, T, -1, Q, [0, T, Dn], [0, [0, T], T, L]],
  R,
  [0, Dn, [0, L]]
];
var Gn = [0, T, [0, T, M], [0, [0, I, -1], -1], I];
var Hn = [0, M, L, -2, N, L, N, M, N, T];
var In = [0, M, -1, I, -1];
var Jn = [0, uf, T, N];
var Kn = [
  0,
  Jn,
  [0, T, S, U, T, S],
  [0, J, -1],
  T,
  [0, M, -1, T, M],
  T,
  -1,
  M,
  [0, M, -1, T, S],
  T,
  [0, T, -1, M],
  [0, N, -1, M],
  [0, T, J, S, -1, T, J, S, -4],
  T,
  [0, U, M, -1, S, M, T],
  [0, S, -1],
  T,
  M,
  [0, T, J],
  T,
  [0, S, J],
  [0, S, M],
  [0, S, M],
  [0, S, -2, J],
  [0, T, M, -2, U, S, -4],
  S,
  [0, T, -1],
  [0, T, S, -1, T, S, T, -1],
  [0, J, T, [0, J, M, T, S, -1], O],
  [0, T, M],
  [0, T, -1],
  [0, T, -1, J, T],
  [0, S, J],
  [0, S, M]
];
var Ln = [0, N, Q, [0, L, -1], T];
var Mn = [0, N, -2, M, -3];
var Nn = [0, T, I];
var On = [0, S, -1, M];
var Pn = [
  0,
  [0, T, pf, -1, T],
  -1,
  T,
  L,
  [
    0,
    T,
    -4,
    [0, U, M, -1],
    [0, T],
    T,
    -1,
    [0, T, -1],
    [0, pf],
    [0, pf, -3, M, -3],
    [0, M, -1],
    [0, T, -1],
    M,
    [0, T, -1],
    [0, pf, M, L, -1],
    pf
  ],
  L,
  T,
  -1,
  [0, T, L],
  I,
  L,
  [0, T, -2],
  T,
  -1,
  L,
  T,
  1,
  [0, T],
  T,
  -3,
  M,
  -1,
  T,
  -5,
  M,
  T,
  -3,
  [0, M],
  T,
  -1,
  I,
  T,
  N,
  T,
  -5,
  [0, T, N, M],
  T,
  I,
  T,
  -2,
  [0, T, N],
  T,
  [0, N, I, L],
  M,
  T,
  -1,
  [0, pf, -1, [0, 2, pf, -1], -1],
  [0, T, -1],
  T,
  [0, M, T, -1, M, I, -1],
  [0, T],
  [0, L, -1]
];
var Qn = [0, M, [0, L, -1], -1, M, -2];
var Rn = [0, L, -4, O, -1, Q, [0, N, -3], N, [0, N, L, N, L], T, L, T];
var Sn = [0, T, -2, M, I, T, -3];
var Tn = [0, T, J, S, -1, J, S, -1, T, -2, S, M, T];
function Un(a) {
  W.call(this, a);
}
g(Un, W);
d = Un.prototype;
d.wd = function () {
  return B(this, 1);
};
d.ef = function () {
  return B(this, 1);
};
d.Oc = function (a) {
  return D(this, 1, a);
};
d.ka = function () {
  return B(this, 2);
};
d.af = function () {
  return B(this, 2);
};
d.bf = function () {
  return B(this, 2);
};
d.vb = function (a) {
  return D(this, 2, a);
};
d.xd = function () {
  return null != B(this, 2);
};
d.Ze = function () {
  return he(this, 2);
};
Un.j = "docs.diagnostics.impressions.impressiondetails.ImpressionSystemDetails.OngoingImpression";
var Vn = [0, I, -1];
Un.makeCrossSerializerComparisonsCompatible = X(Un, Vn);
function Wn(a) {
  W.call(this, a);
}
g(Wn, W);
Wn.j = "docs.diagnostics.impressions.impressiondetails.ImpressionSystemDetails";
Wn.ga = [2];
var Xn = [0, I, Q, Vn];
Wn.makeCrossSerializerComparisonsCompatible = X(Wn, Xn);
var Yn = [
  0,
  M,
  L,
  -4,
  M,
  -2,
  L,
  -1,
  T,
  L,
  N,
  M,
  -1,
  L,
  M,
  -1,
  L,
  -1,
  T,
  2,
  V,
  T,
  L,
  T,
  V,
  N,
  T,
  -1,
  N,
  T,
  L,
  -4,
  M,
  Q,
  [0, L, -5, M],
  L,
  [0, [0, L, -1], -1],
  L,
  -3,
  T,
  -2,
  N,
  L
];
var Zn = [0, T, L, T, L];
var $n = [0, Q, Zn];
var ao = [0, T, S, -2, T, N, $n, M, Zn];
var bo = [0, S, N, T, -1, M];
var co = [
  0,
  [0, T, L, -1, T, L, T],
  [0, T, S],
  bo,
  [0, T, S],
  Q,
  [0, T, Lf],
  [0, Q, [0, T, L, O, T, Q, $n], M, F, H, [0, T, L, M, N, T], L, H],
  [0, T],
  [0, T],
  [0, Q, bo],
  L,
  -2,
  ao,
  [0, T, -1],
  [0, T, L],
  [0, T, S, M, N, M],
  [0, T, -1],
  U,
  L,
  [0, Q, ao, T],
  [0, L, T, L]
];
var eo = [0, T, rf, I, T];
var fo = [
  0,
  N,
  L,
  -1,
  T,
  Q,
  function () {
    return fo;
  },
  N
];
var go = [
  -500,
  [3, 4, 5, 6, 7],
  [1e3, 1001, 1002, 1003, 1004, 1005, 1006],
  T,
  N,
  R,
  [0, T],
  R,
  [0, T, -1],
  R,
  [0, T, M, T, M],
  R,
  fo,
  R,
  [0, Q, [0, L, -1, N, -1], T],
  992,
  R,
  [0],
  R,
  [0],
  R,
  [0, [0, Q, [0, L, Q, [0, L]]], [0, [3, 4, 5], L, -1, R, [0], R, [0, L, -1, M], R, [0, T]]],
  R,
  [0, [0, L], [0, N], [0, N]],
  R,
  [0, Q, [0, L, -1]],
  R,
  [0, [1, 2], R, [0, O], R, [0]],
  R,
  [0, [0, Q, [0, L, Q, [0, L]]], [0, [3, 4, 5], L, -1, R, [0], R, [0, L, -1, M], R, [0, T]]]
];
var ho = [0, M, T, -7, [0, T, -1, M, -5, N], M];
var io = [
  0,
  [0, T],
  T,
  -1,
  [0, T, -1, M],
  [0, T, L, M, -1],
  [0, L, -2],
  [0, M, -2, L],
  [0, M, -1],
  [0, M, -2],
  [0, M],
  [0, T, -1],
  [0, M, L, T]
];
var jo = [0, I, M, I, L];
var ko = [0, N, -1];
var lo = [0, L, -1];
var mo = [0, [0, lo, -1], 1, [0, T, -2], -1, [0, T, lo, -1, L]];
var no = [0, T, -1];
var oo = [0, L, -5, M];
var po = [0, M, -1, N];
var qo = [0, I, [0, I, -1]];
var ro = [0, Q, [0, M, L, I, N]];
var so = [0, T, M, Q, [0, T, -2]];
var to = [0, L, -4];
var uo = [
  0,
  L,
  -1,
  N,
  [
    0,
    N,
    U,
    -1,
    to,
    -6,
    V,
    L,
    -1,
    U,
    to,
    -9,
    U,
    2,
    xf,
    H,
    U,
    xf,
    -2,
    to,
    -2,
    xf,
    -1,
    to,
    xf,
    Ye,
    [!0, L, [0, L, -2]],
    V,
    to,
    L,
    -3,
    to,
    L,
    -1,
    1,
    L,
    Ye,
    [!0, L, [0, [0, L, -2], -1]]
  ]
];
var vo = [0, L, -6, I, -2, L, -3, Q, [0, T, M, L, -1], L, -1];
var wo = [
  0,
  vo,
  [0, L, vo, [0, 1, L, -3], -7],
  -2,
  T,
  [0, bn, L],
  M,
  [0, I, -5],
  [0, I, M, I, L, -1],
  M,
  [0, L, -4],
  [0, L],
  [0, bn, F, bn],
  [0, L, -8],
  M,
  [0, M, -1],
  M,
  bn,
  [0, Q, [0, T, L, -3]],
  L,
  Vm,
  L,
  vo,
  bn,
  [0, I, Q, [0, I, U, O]],
  M
];
var xo = [0, T, -1, M, 1, S, 1, S, M];
var yo = [0, 1, [0, T, -2, S, M], [0, Q, xo, S, -1], xo, Q, xo, T];
var zo = [0, M, -2, T, M, -1, [0, M, -2], M];
var Ao = [0, L, -2, I, T, -2, M, -3, T, -1, N, M, N];
var Bo = [
  0,
  [0, J, M, -2, I, -1, T, -5, M, -2],
  N,
  T,
  -1,
  [0, I, T],
  [0, T, -1],
  [0, L, -1, F],
  [0, J, -1],
  [0, N, -1, T],
  [0, T, -1, I, N, I],
  [0, T, I],
  [0, I],
  [0, T, I],
  T,
  -1,
  I,
  T,
  I,
  L,
  [0, T, -2],
  [0, [0, L, -1], [0, L], L, N, T, -1],
  T,
  -1,
  [0, I, -1, T, -1],
  [0, T, I, T, -3, N, -1, I, U, -1, I, T, -1, [0, T, L, M]],
  U,
  -1,
  [0, T, -1],
  T,
  [0, J, -2],
  [0, T, M],
  T,
  [0, T, M],
  [0, T, -4],
  T
];
var Co = [0, I, N, L, T, I, -2];
var Do = [
  0,
  T,
  Q,
  [0, T, I, L, T, M, L, I, L],
  M,
  L,
  M,
  -1,
  N,
  I,
  M,
  -2,
  I,
  [0, L, M],
  L,
  -3,
  I,
  M,
  [0, M, T, -1, M, I, -3, L],
  [0, I, L, M, L, I, M, L, -17, I, -3],
  L,
  [0, T, M, -2, N],
  [0, T, M],
  [0, L],
  M,
  Q,
  dh,
  M,
  [0, T, L],
  [0, I, -1],
  [0, N, M],
  I,
  L,
  [0, M, L, -3, F, T],
  L,
  Q,
  [0, T, L],
  F,
  L,
  -2,
  I,
  M,
  [0, L],
  [0, T, L]
];
var Eo = [0, Rn, bi];
var Fo = [0, T, N];
var Go = [0, [0, T, [0, N, -1]]];
var Ho = [0, N, L];
var Io = [
  0,
  T,
  [0, Ho, [0, N, -1, [0, T, -1, M], T, M, -1, T, I, M, -1], L, T],
  [0, Ho, [0, M, T, M, -1]],
  [0, Ho, [0, N, T, M]],
  [0, Ho, [0, T, -1, M]],
  [0, Ho, [0, V], T, -1]
];
var Jo = [
  0,
  Q,
  [0, N, -1, T, Io, T, N, S, -1],
  Io,
  -1,
  T,
  [0, T, -1],
  [0, T],
  [0, T],
  [0, T],
  [0, T],
  [0, T],
  [0, T],
  [0, T],
  [0, U, V],
  I,
  -1,
  [0, T],
  I,
  [0, T, M, -2],
  U,
  [0, T]
];
var Ko = [0, [2, 3, 4], N, R, [0, L, M], R, [0, T, M], R, [0, N, T, L, -2, O, N], N];
function Lo(a) {
  W.call(this, a);
}
g(Lo, W);
Lo.j = "docs.diagnostics.impressions.clientinfo.ExperimentInfo";
Lo.ga = [1];
var Mo = [0, wf];
Lo.makeCrossSerializerComparisonsCompatible = X(Lo, Mo);
var No = [0, N, H, T, -1, 5, U];
var Oo = [
  0,
  N,
  [0, L, T, S, H, Q, No, N, M, I, Q, No, L, I],
  [0, L, -2, Q, No, T, U, T],
  [0, T, L, -2, H, No, L],
  wf,
  T,
  Mo,
  [0, [2], T, Ef],
  [0, T, -1, M],
  1,
  N
];
var Po = [0, dn, [0, L, -3]];
var Qo = [0, [0, T, S], M];
var Ro = [0, T, L];
var So = [0, T, [0, J, M], -1];
var To = [0, T];
var Uo = [0, T, -1, L];
var Vo = [0, T, -1, N, T, M, L, M, T];
var Wo = [0, T, M, L, N, T, -1, L, -1, N, T, -1];
var Xo = [0, L, -1];
var Yo = [
  0,
  [0, T, [0, T, -1, M, L, -1, T], L, [0, T, -1, L]],
  [0, T],
  [0, M, -1],
  [0, N, [0, N, L, -1, M], [0, M, -1, N, -1]],
  [0, L, -6, M, L, -6, F],
  [0, L, -1, N, M, -1],
  Vo,
  T,
  M,
  [0, L, -2, M, -1],
  Xg,
  [0, L, -5],
  M,
  [0, Rn, T, Q, [0, T, bi, N, L, Rn], M, 1, T],
  [0, T, L, -1],
  Uo,
  [0, [0, N, -1, L], [0, L, -2], [0, T]],
  To,
  [0, T, Q, Uo, Q, To, M, -3],
  [0, T, -1, U, L, N],
  Wo,
  [0, N],
  [0, L, T, L],
  M,
  [0, M, -2, I, M, N],
  [0, N],
  [0, I, M, -1, I],
  [0, T, -1, L],
  [0, T, -2, M],
  M,
  [0, M, -1],
  [0, M, F],
  [0, T],
  [0, T, -1],
  [0, T],
  [0, T],
  M,
  Rh,
  [0, Xo, Q, Xo, N],
  T,
  [0, T],
  M,
  -1,
  [0, T, -1],
  L,
  -1,
  Yn,
  [0, I, T, I, -1],
  [0, T, L],
  [0, Q, [0, L, -1, M], [0, L, -1], [0, M, L], [0, M, -2], [0, M], [0, L, -1]],
  [0, I, -2],
  [0, T, M],
  [0, T, N, -3, I, -4, T, -1, Vo, Wo, T, -1, I, T, I, xf]
];
var Zo = [0, [8, 11], T, F, M, -1, L, -2, R, [0, T, -1], L, N, R, [0, V, -1]];
var $o = [0, L, -2];
var ap = [0, 5, F, -6];
var bp = [0, N, L, T];
var cp = [
  0,
  [0, T],
  [0, U],
  1,
  $o,
  T,
  M,
  [0, L, -1],
  [0, L, -1],
  Q,
  [0, L, -1, M, -4, L, M, L, Q, [0, L, -1]],
  Q,
  [0, L, -3, M],
  M,
  T,
  [
    0,
    Q,
    bp,
    -2,
    L,
    I,
    L,
    -3,
    Q,
    [0, T, L, -3, [0, L, -5, I, 2, L, -1, I, L, -10, Q, [0, L, -3], L, -2, Q, [0, T, L, -4], [0, L, -4], L], L, -3, Q, [0, L, fi], L, -1],
    L,
    -1,
    Q,
    bp,
    L,
    Q,
    bp,
    L,
    -1,
    M,
    2,
    L,
    -1,
    13,
    M,
    -1,
    L,
    2,
    ap,
    -1,
    F,
    -1,
    M,
    -2,
    T,
    -1
  ],
  [0, L],
  M,
  [0, T, -1, I, -1, L, T, -2, M, T, N, -1, I, -1, T, M, I, -1, T, M, H, -4, I, N, I, -2, L, F, -2, T],
  M,
  -1,
  [0, L, -1],
  L,
  T,
  N,
  L,
  -1,
  Q,
  [0, T, L, -1],
  [0, L, -1],
  [0, N],
  [0, M],
  L,
  1,
  [0, T, [0, I, -1], T, [0, I, -1, T, -2, L, -1, F, L], [0, L, -1], L, T],
  M,
  -1,
  [0, M, -3, L, -9],
  M,
  -2,
  [0, L, -1, T],
  [0, N],
  [0, T, M, -1, [0, T], M, L],
  [0, L],
  [0, N, L, -2],
  [0, L, M, L, -2, M, -2],
  [0, T, -1, I, M, -1, T, N, M, F, mf, xf],
  M,
  [0, [3, 4, 5], T, -1, R, [0, T, M], R, [0, T], R, [0, T, M]],
  [0, T, M],
  [0, T, L, -1, T],
  M,
  [0, L, -3, M, $o, T],
  [0, N, Yh, $h, T, Xh, T, M, Q, Zh],
  [0, T],
  T,
  [0, L, -2],
  Q,
  [0, T],
  Q,
  [0, T],
  [0, [0, S, -1, V], T, -1],
  [0, ap, -1, 2, F, -1],
  [0, ap, F],
  [0, T],
  1,
  [0, T, L, -2],
  [0, 2, F, Zo, Q, Zo, T, -2, L, [0, L, -2, M, -1]],
  [0, L, O],
  [0, L, O, T],
  [0, F, -1]
];
var dp = [0, [0, L, -2, I, -1], -3, I];
var ep = [0, I, -4, M];
var fp = [0, [0, L, -3], F, L];
var gp = [
  0,
  Of,
  M,
  T,
  -7,
  Of,
  -4,
  T,
  -2,
  Of,
  M,
  T,
  [0, T, -1],
  M,
  -1,
  2,
  T,
  -2,
  N,
  T,
  [0, T, -2],
  T,
  -2,
  I,
  -3,
  N,
  I,
  N,
  M,
  T,
  -3,
  [0, T, -1],
  M,
  -1,
  Q,
  [0, L, M, -1],
  [0, M, T, -1],
  M,
  2,
  L,
  T,
  -1,
  O,
  L,
  T,
  -4,
  Q,
  [0, N, M],
  L,
  Q,
  [0, T, -3],
  T,
  -4,
  V,
  M,
  Q,
  [0, N, T],
  T,
  M,
  T,
  -4,
  L,
  I,
  T,
  O,
  M,
  -1
];
var hp = [0, T, M];
var ip = [0, T];
var jp = [0, T, M, [0, L, T], T, 1, Ye, Rf, [0, T, -1], [0, L, T, Q, [0, T, F, T], L, -4, M], T, -3, Ye, Rf, L, M, [0, T], T];
var kp = [
  0,
  [2, 3, 4, 5, 6, 7, 8, 9, 10],
  [0, U, [0, pf, Cf, -1]],
  R,
  [0, T],
  R,
  [0, T, -1],
  R,
  [0, T, M],
  R,
  [0, L, -1, T, Q, [0, L, Q, [0, L]]],
  R,
  [0, [3, 4, 5], L, -1, R, [0], R, [0, L, -1, M], R, [0, T]],
  R,
  [0, T, L, -1],
  R,
  [0, [2], N, R, [0, N], L],
  R,
  [0, T, L],
  R,
  [0, [2], N, R, [0, N], L],
  N,
  T
];
var lp = [0, [2, 3, 4], N, R, [0, N, L, T], R, [0, N, L, T], R, [0, N, L, T]];
var mp = [-1, {}];
var np = [0, L];
var op = [0, I, -1, N, -4, I, M];
var pp = [0, T, L, xf];
var qp = [0, I, Q, [0, I, N, -1, L, N]];
var rp = [0, I, Q, [0, I]];
var sp = [
  0,
  N,
  -1,
  I,
  -2,
  Q,
  function () {
    return sp;
  },
  N,
  -1,
  L
];
var tp = [0, Q, [0, M, Q, sp], M];
var up = [0, N, -3];
var vp = [0, N, 5, up];
var wp = [0, Q, [0, F, -1, I]];
var xp = [0, F, I, F];
var yp = [0, N, J, vf, -1];
var zp = [
  0,
  zf,
  N,
  1,
  $f,
  L,
  [0, bg],
  Q,
  [0, [3, 4, 5], J, bg, R, [0, yp, J, bg, -1, N, -1, T, J], R, [0, 2, bg, -1], R, [0, yp]],
  Q,
  [0, [2, 3], T, Bf, R, [0, zf, -1], Q, [0, J, -1]],
  [0, bg, -1, I, bg, -1, I, bg, -5],
  [0, [1, 2], of, -1],
  bg
];
var Ap = [0, I, M, L, N, L, N];
var Bp = [0, Ap, [0]];
var Cp = [0, 1, Bp, N, -1, [0, sm, N, L, N, -2, O, um, I, O, Q, op, N, L, N, Q, [0, N, -1, I]], Q, [0, S, N], O, [0, xf, O]];
var Dp = [0, F, I, T];
var Ep = [0, zf, N];
var Fp = [0, L, I, Ep];
var Gp = [-1, {}];
var Hp = [-17, {}, N, zf, -1, I, -2, T, zf, N, L, Gp, M, zf, M, zf, M];
var Ip = [
  0,
  M,
  Bp,
  N,
  -1,
  T,
  zf,
  N,
  zf,
  um,
  [0, L, -1, J, T, Q, [0, J, N, L], Q, [0, N], J, N, Q, [0, N, -2, L]],
  [0, O, [0, L, -1, xf, -1]],
  [0, T, L],
  M
];
var Jp = [0, xf, -1];
var Kp = [
  0,
  [
    0,
    [-6, {}, [0, [0, L, -18, I, -4], [0, L, -2]], Bp, T, [0, M], N],
    zf,
    N,
    [0, I, T],
    [0, N, -1, T, I, N],
    [
      0,
      Q,
      [0, N, -1, L, -2, S, -1, T, Q, [0, N], Ap, [0, T], Gp, I, T, -1, L, N, T, L, N, Af, [0, L], 1, T, N, [0, L, -1], T, I],
      Ap,
      Q,
      [0, N, -1, Af, L, S, -2]
    ],
    Ip,
    [0, T, L, [0, Ip, [0, T, L, xf], [0, L, H]]],
    [0, I, -7, 1, Q, [0, N, I, Af, T], I],
    [
      0,
      [
        0,
        T,
        -1,
        I,
        Q,
        [0, Ep, L, I],
        Q,
        [0, Ep, L, I],
        [
          0,
          I,
          -3,
          Q,
          Fp,
          -5,
          Fp,
          Q,
          Fp,
          Q,
          [0],
          Q,
          [0, I, -5, Ep],
          Q,
          [0, Q, [0, L, -1, Ep], Q, [0, L, Ep], Ep],
          I,
          -13,
          Fp,
          I,
          Fp,
          -12,
          I,
          -14,
          1,
          Fp,
          I,
          -2
        ],
        I,
        zf,
        N,
        -1,
        Gp,
        I
      ]
    ],
    [0, H, L, -1],
    [0, L, -3, Q, [0, L, -2], L, -3, Jp, L, -1, Jp],
    [0, Q, [0, N, L, -1, N, L]],
    Gp,
    1,
    [0, zf, Q, Hp, T, H, [0, 4, L, I], [0, I, -4, 3, I, -1, M, [0, N, I, -2], -1, I, -1, Ye, Qf, I, -4, T, I, -1, M], zf, I, -1, M],
    N,
    1,
    [0, Q, Hp],
    1,
    [0, N],
    1,
    [0, I, -1],
    1,
    Q,
    [0, [0, N, T, N, -1, zf, N, zf], [0, L, I, -2]],
    1,
    [0, If, [0, [0, M, -3], -1, H], F, L, -3],
    [0, T],
    Cp,
    Dp,
    [0, rf, -1, xf, -2, O],
    [0, Q, [0, N, T, L, T, I, -2, M], [0, U], L],
    [0, [1, 2], tf, -1],
    Q,
    pp,
    zp,
    [0, Q, [0, J, Gp, M, -2, J]]
  ],
  [0, L, -5],
  I,
  [
    0,
    zf,
    N,
    [0, [0, L, -1], np, [0, M, L, -4]],
    [0, I, M],
    [0, H, -2, L, -4, H, L, Q, [0, H, -1, L]],
    [0, H, np],
    T,
    [0, N],
    N,
    [0, Q, [0, I, -1, N, L, N, L, mp, T, -1, L]],
    [0, I, -2, M],
    J,
    [0, H, I],
    M,
    -1,
    T,
    mp,
    [0, zf, Q, [0, N, zf, -1, I, -1, zf, M, zf, M], zf, M],
    [0, L, M, I, 1, I, M, 1, N, I],
    [0, zf, -1],
    [0, L, -1],
    [0, H, -2],
    Cp,
    [
      0,
      [0, xp],
      [0, xp, I],
      [0, F],
      [0, wp],
      [0, wp, -1],
      [0, I, -3],
      [0, I, -2],
      [0, I],
      [0, I],
      I,
      -1,
      M,
      N,
      [0, [0, I, -5], [0, I, -9]],
      [0, F],
      Q,
      [0, N, -1, [0, wp, I, xp, I], I],
      up
    ],
    [
      0,
      I,
      -1,
      Q,
      [0, vp, tp, I, -2, T, -3, [0, N, -3], N, T, N, bg, N],
      Q,
      [0, vp, tp, F, -1],
      Q,
      [0, vp, tp, I],
      Q,
      [0, vp, tp, I],
      1,
      Q,
      [0, vp, tp, bg]
    ],
    Dp,
    [0, L, -5, Q, [0, L, -2], L],
    [
      0,
      L,
      -1,
      I,
      -1,
      Q,
      rp,
      Q,
      op,
      mp,
      N,
      Q,
      qp,
      N,
      -2,
      Q,
      [0, N, -1],
      T,
      Q,
      pp,
      L,
      I,
      qf,
      Q,
      [0, L, N, -1, L, N, -1, I],
      I,
      -1,
      N,
      M,
      2,
      rp,
      -1,
      qp,
      -1
    ],
    M,
    zp,
    Q,
    [0, N, I, -1]
  ],
  [0, L, -1],
  I
];
var Lp = [0, [0, T, -3, N, T, -1, N, U, M, -1], U, [0, 2, T, M, -1, N, M], [0, 1, T, M], [0, 1, T], [0, T]];
var Mp = [0, T];
var Np = [0, T, N];
var Op = [0, N, -3, [0, T], [0, T]];
var Pp = [0, T, H];
var Qp = [0, T];
var Rp = [0, N, I, -2];
function Sp(a) {
  W.call(this, a);
}
g(Sp, W);
Sp.prototype.ee = function (a) {
  A(this, Wn, 3, a);
};
Sp.prototype.ge = function (a) {
  A(this, Yk, 39, a);
};
Sp.prototype.hf = function () {
  return Ld(this, Yk, 39);
};
Sp.j = "docs.diagnostics.impressions.impressiondetails.ImpressionDetails";
var Tp = [
  0,
  di,
  Pn,
  Xn,
  mo,
  Gn,
  rn,
  un,
  Qo,
  Np,
  Kn,
  Cm,
  Xm,
  Yo,
  Bo,
  co,
  io,
  cp,
  zm,
  Lp,
  gp,
  wo,
  Yg,
  jo,
  Qh,
  cn,
  Fn,
  Wg,
  fn,
  Oo,
  vn,
  Bm,
  Po,
  Pp,
  Do,
  Kp,
  hh,
  Jo,
  Fm,
  Zk,
  tn,
  Nn,
  Mh,
  Qp,
  An,
  Mp,
  Um,
  Em,
  Ko,
  kn,
  ih,
  kp,
  Ln,
  lp,
  Nm,
  Wm,
  ln,
  M,
  Vm,
  yn,
  Ao,
  ho,
  Am,
  Sh,
  ko,
  Hm,
  wm,
  go,
  Th,
  fp,
  jp,
  zo,
  On,
  Cn,
  So,
  Mm,
  $m,
  Pm,
  In,
  Sn,
  Mn,
  Eo,
  xm,
  Gm,
  Zm,
  Tn,
  Co,
  po,
  Ph,
  an,
  Rm,
  hp,
  ro,
  qo,
  zn,
  Ym,
  no,
  eo,
  Fo,
  Rn,
  jn,
  Qm,
  oo,
  Op,
  vm,
  yo,
  Go,
  Rp,
  Ro,
  Hn,
  uo,
  Lm,
  Bn,
  dp,
  ep,
  Yn,
  so,
  Qn,
  Sm,
  ip,
  ym
];
Sp.makeCrossSerializerComparisonsCompatible = X(Sp, Tp);
var Up = [0, T, I, T, I, -2];
function Vp() {
  this.Dd = !1;
  this.Td = this.i = null;
}
d = Vp.prototype;
d.initialize = function (a, b) {
  this.i = a;
  this.Td = b;
  m(this.Gd(), "An impression of this type cannot be used with this ImpressionBuilder.");
  this.Dd = !0;
  return this;
};
function Wp(a, b) {
  b = m(a.Td.zd[b.getId()], 'Factory "' + b.getId() + '" not registered').qd();
  m(b instanceof Vp, "The ImpressionBuilder created by an ImpressionBuilderFactory should subclass rocket.impressions.ImpressionBuilder");
  m(!b.Dd, "An ImpressionBuilder should only be initialized once.");
  b.initialize(m(a.i), m(a.Td));
  return b;
}
d.ka = function () {
  m(null != this.i);
  return m(this.i.af());
};
d.gb = function () {
  m(null != this.i);
  var a = this.i.gb();
  null == a && ((a = new Sp()), A(this.i, Sp, 5, a));
  return a;
};
d.O = function () {
  m(this.Dd, "ImpressionBuilder must be initialized before it can be built");
  m(this.i.xd(), "Impressions without an event code cannot be built");
  m(null != B(this.i, 6) || 716 == this.i.bf(), "Impressions without a lastHeartbeatSequenceNumber cannot be built");
  if (2 == ce(Xp(this.i), 3)) {
    var a;
    if ((a = null != B(this.i, 13))) (a = y(Xp(this.i), mm, 2)), (a = null != B(a, 2));
    m(a, "Elapsed ImpressionBuilders must be ended before they can be built");
  }
  a = this.i.gb();
  null != a && ((a = a.clone()), A(this.i, Sp, 5, a));
  return m(this.i);
};
d.Gd = function () {
  return !0;
};
function Yp() {
  Vp.call(this);
  this.Cc = null;
}
g(Yp, Vp);
function Zp(a) {
  a.Cc || ((a.Cc = new Yk()), a.gb().ge(a.Cc));
  return a.Cc;
}
Yp.prototype.fe = function (a) {
  Zp(this).fe(a);
};
var $p = new lm("keep_builder");
function aq() {}
aq.prototype.qd = function () {
  return new Yp();
};
var bq = { ni: 0, Ei: 1, gi: 2 };
var cq = { Yi: 0, xh: 1, cj: 2, Ui: 3, Vi: 4 };
function dq(a) {
  W.call(this, a);
}
g(dq, W);
dq.prototype.ne = function (a) {
  return le(this, 1, a);
};
dq.prototype.ke = function (a) {
  return le(this, 2, a);
};
dq.j = "docs.diagnostics.impressions.sessioninvariants.KeepInvariants";
var eq = [0, T, -1, M, T];
dq.makeCrossSerializerComparisonsCompatible = X(dq, eq);
function fq() {
  this.Nb = new dq();
}
fq.prototype.ze = function (a) {
  m(!a.hf());
  a.ge(this.Nb);
};
fq.prototype.ne = function (a) {
  m(null == ce(this.Nb, 1));
  this.Nb.ne(a);
  return this;
};
fq.prototype.ke = function (a) {
  m(null == ce(this.Nb, 2));
  this.Nb.ke(a);
  return this;
};
var gq = new Ni();
function hq() {
  var a = l.performance;
  if (!a || !a.getEntriesByType) return null;
  var b = a.getEntriesByType("navigation");
  if (!b || !b[0]) return null;
  b = b[0];
  a = a.timeOrigin || a.timing.navigationStart;
  var c = new rh();
  c = D(c, 1, 1e3 * Math.round(a));
  c = D(c, 2, Math.round(1e3 * (a + b.redirectStart)));
  c = D(c, 3, Math.round(1e3 * (a + b.redirectEnd)));
  c = D(c, 4, Math.round(1e3 * (a + b.fetchStart)));
  c = D(c, 5, Math.round(1e3 * (a + b.domainLookupStart)));
  c = D(c, 6, Math.round(1e3 * (a + b.domainLookupEnd)));
  c = D(c, 7, Math.round(1e3 * (a + b.connectStart)));
  c = D(c, 8, Math.round(1e3 * (a + b.connectEnd)));
  b.secureConnectionStart && D(c, 9, Math.round(1e3 * (a + b.secureConnectionStart)));
  D(c, 10, Math.round(1e3 * (a + b.requestStart)));
  D(c, 11, Math.round(1e3 * (a + b.responseStart)));
  D(c, 12, Math.round(1e3 * (a + b.responseEnd)));
  je(c, 18, b.redirectCount);
  le(c, 19, iq[b.type] || 1);
  return c;
}
var iq = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
function jq(a) {
  W.call(this, a);
}
g(jq, W);
jq.prototype.dg = function (a) {
  ie(this, 1, a);
};
jq.prototype.eg = function (a) {
  ie(this, 2, a);
};
jq.j = "docs.diagnostics.impressions.clientinfo.ClientInfo.AccessState";
var kq = [0, M, -1];
jq.makeCrossSerializerComparisonsCompatible = X(jq, kq);
var lq = [0, M, -1];
var mq = [0, M, -3, 1, T, -4, M, [0, S, M, S, -1, M, S, M, -2, N, S, -2], L, -1, M, S, Of, S, -2, Of, M];
var nq = [0, N, -2, O, -1, M, -1, L, -1];
function oq(a) {
  W.call(this, a);
}
g(oq, W);
oq.j = "docs_security.AccessLevelProto";
var pq = [0, M, -4];
oq.makeCrossSerializerComparisonsCompatible = X(oq, pq);
function qq(a) {
  W.call(this, a);
}
g(qq, W);
d = qq.prototype;
d.setAccessLevel = function (a) {
  return A(this, oq, 12, a);
};
d.We = function () {
  return y(this, jq, 13);
};
d.Vf = function (a) {
  A(this, jq, 13, a);
};
d.df = function () {
  var a = void 0 === a ? !1 : a;
  return de(Sc(Hd(this, 6)), a);
};
d.cg = function (a) {
  ie(this, 6, a);
};
d.gf = function () {
  return null != Sc(Hd(this, 6));
};
d.Zf = function (a) {
  A(this, Lo, 10, a);
};
d.ff = function () {
  return Ld(this, Lo, 10);
};
qq.j = "docs.diagnostics.impressions.clientinfo.ClientInfo";
var rq = [0, N, -2, 1, lq, M, N, nq, T, Mo, L, pq, kq, mq];
qq.makeCrossSerializerComparisonsCompatible = X(qq, rq);
function sq(a) {
  W.call(this, a);
}
g(sq, W);
sq.j = "docs.diagnostics.impressions.ImpressionSystemInfo";
var tq = [0, T];
sq.makeCrossSerializerComparisonsCompatible = X(sq, tq);
function uq(a) {
  W.call(this, a);
}
g(uq, W);
uq.prototype.Zb = function (a) {
  return ke(this, 1, a);
};
uq.prototype.ae = function (a) {
  D(this, 2, a);
};
uq.prototype.ac = function (a) {
  return le(this, 6, a);
};
uq.j = "docs.diagnostics.impressions.SessionInfo";
var vq = [0, N, I, -1, N, I, T, N, If, M, -1, N];
uq.makeCrossSerializerComparisonsCompatible = X(uq, vq);
var wq = [0, Mo, [0, L, -2], -1, T, M];
var xq = [0, I, -2];
var yq = [0, L, -1, T, -1];
var zq = [0, [2, 3], cg, R, [0, N, I, -1], R, [0, N, I]];
var Aq = [0, T, -9];
var Bq = [0, Aq, [0, Aq, N, 1, T, -1], [0, T, N, M, N]];
var Cq = [
  0,
  T,
  U,
  T,
  M,
  -1,
  L,
  T,
  L,
  U,
  N,
  [0, T, M],
  pq,
  L,
  T,
  N,
  T,
  1,
  M,
  -1,
  T,
  M,
  N,
  1,
  M,
  T,
  -3,
  M,
  -2,
  [0, T, M],
  I,
  T,
  M,
  T,
  [0, T, M],
  $g,
  [0, M, -5],
  M
];
var Dq = [0, T, -3, M, -2, N];
var Eq = [0, [2, 3], cg, R, [0, N, I, -1], R, [0, N, I], T, cg, I];
var Fq = [0, [0, S, M, S, -2, M, -1, N, S, -2, M], S, -2];
var Gq = [0, T, -1, M, L, M, -1];
var Hq = [0, T];
var Iq = [0, M, -5, L, -1, [0, M, -1], L, M, [0, M, -3], M, -1, T, M, T];
var Jq = [0, Jn, L, U];
var Kq = [0, T, [0, M, -5]];
var Lq = [0, [0, T, -1], [0, Wf, N, -1], [0, T, Vf, V]];
var Mq = [0, T, M, N, -1, M];
var Nq = [0, Mq, [0, T], 1, N, [0, M, -1], L, N];
var Oq = [0, [0, T, [0, N, -1, T, N, -1], [0, U, O, U, O], [0, T], [0, T, -2], 1, N], [0, T, -1]];
var Pq = [0, I, -1];
var Qq = [0, M];
var Rq = [0, O, Of, N, I, M, -1, T, Q, [0, 1, T, -1], I, -1, T];
function Sq(a) {
  W.call(this, a);
}
g(Sq, W);
Sq.prototype.ge = function (a) {
  A(this, dq, 17, a);
};
Sq.prototype.hf = function () {
  return Ld(this, dq, 17);
};
Sq.j = "docs.diagnostics.impressions.sessioninvariants.AppInvariants";
var Tq = [0, Jq, Fq, fh, Cq, xq, yq, Gq, Rq, Oq, wq, Bq, Iq, Dq, Kq, Nq, Pq, eq, Hq, Lq, Qq, 1, Eq, zq];
Sq.makeCrossSerializerComparisonsCompatible = X(Sq, Tq);
function Uq(a) {
  W.call(this, a);
}
g(Uq, W);
Uq.j = "docs_browser.ChromeClientData";
Uq.ga = [2];
var Vq = [0, T, wf];
Uq.makeCrossSerializerComparisonsCompatible = X(Uq, Vq);
function Wq(a) {
  W.call(this, a);
}
g(Wq, W);
Wq.prototype.Zd = function (a) {
  A(this, Uq, 9, a);
};
Wq.j = "docs.diagnostics.impressions.sessioninvariants.Browser";
var Xq = [0, N, -1, M, N, -1, M, -2, Vq, M, -1];
Wq.makeCrossSerializerComparisonsCompatible = X(Wq, Xq);
var Yq = [0, M];
function Zq(a) {
  W.call(this, a);
}
g(Zq, W);
Zq.j = "docs.diagnostics.impressions.sessioninvariants.DeviceInvariants";
var $q = [0, M, L, -2, T, I, L, N, L, -2, T, L, N, I, L];
Zq.makeCrossSerializerComparisonsCompatible = X(Zq, $q);
var ar = [0, T, -1, L];
var br = [0, T, -1, N, [0, T], [0, T, N, T, L, -1]];
var cr = [0, Yq];
var dr = [0, T, N, -3];
function er(a) {
  W.call(this, a);
}
g(er, W);
er.j = "docs.diagnostics.impressions.sessioninvariants.ParentInvariants";
var fr = [0, N];
er.makeCrossSerializerComparisonsCompatible = X(er, fr);
var gr = [0, N];
var hr = [0, T, L];
var ir = [0, N];
var jr = [0, N, T];
var kr = [0, N];
var lr = [0, N, T];
function mr(a) {
  W.call(this, a);
}
g(mr, W);
d = mr.prototype;
d.pd = function () {
  return y(this, Sq, 1);
};
d.Yd = function (a) {
  A(this, Sq, 1, a);
};
d.he = function (a) {
  A(this, rh, 6, a);
};
d.getDevice = function () {
  return y(this, Zq, 9);
};
d.getParent = function () {
  return y(this, er, 11);
};
d.Zf = function (a) {
  A(this, Lo, 15, a);
};
d.ff = function () {
  return Ld(this, Lo, 15);
};
mr.j = "docs.diagnostics.impressions.sessioninvariants.SessionInvariants";
var nr = [0, Tq, gr, dr, T, -1, sh, T, lr, $q, jr, fr, hr, hh, ir, Mo, Xq, kr, cr, Mq, br, ar];
mr.makeCrossSerializerComparisonsCompatible = X(mr, nr);
function or() {
  this.oa = new uq();
  this.Vb = null;
  this.lf = new sq();
  le(this.lf, 1, 6);
  this.G = this.Fa = null;
}
d = or.prototype;
d.ac = function (a) {
  m(null == ce(this.oa, 6));
  this.oa.ac(a);
  return this;
};
d.Zb = function (a) {
  m(null == ld(Hd(this.oa, 1)));
  this.oa.Zb(a);
  return this;
};
d.Yd = function (a) {
  m(!Ld(pr(this), Sq, 1));
  pr(this).Yd(a);
};
d.pd = function () {
  Ld(pr(this), Sq, 1) || pr(this).Yd(new Sq());
  return m(pr(this).pd());
};
d.Yb = function (a) {
  m(!this.G);
  this.G = a;
};
d.ae = function (a) {
  m(null == B(this.oa, 2));
  this.oa.ae(a);
};
d.he = function (a) {
  m(!Ld(pr(this), rh, 6));
  pr(this).he(a);
};
d.Zd = function (a) {
  var b = pr(this);
  var c = y(b, Wq, 16);
  c || ((c = new Wq()), A(b, Wq, 16, c));
  b = c;
  m(!Ld(b, Uq, 9));
  b.Zd(a);
};
d.Ca = function (a) {
  m(null == this.Fa);
  this.Fa = a;
};
function pr(a) {
  null == a.Vb && (a.Vb = new mr());
  return a.Vb;
}
d.sc = function () {
  null == this.Fa && (this.Fa = new qq());
  return this.Fa;
};
function qr(a) {
  return null != ld(Hd(a.oa, 1)) && null != ce(a.oa, 6) && 0 != ce(a.oa, 6);
}
function rr(a) {
  a.ae(1e3 * Date.now());
  var b = hq();
  b && a.he(b);
  var c = zj(lk);
  wb && ((b = c.rc.n_ccd), a.Zd(new Uq(Array.isArray(b) ? b : [])));
  b = new Lo();
  c = c.rc.n_ei;
  c = Array.isArray(c) ? c : "string" === typeof c ? c.split(",").map(Number) : [];
  b = Sd(b, 1, c, Wc);
  m(!a.sc().ff());
  a.sc().Zf(b);
}
function sr(a, b) {
  this.Og = 100;
  this.ug = a;
  this.ah = b;
  this.Gc = 0;
  this.xc = null;
}
sr.prototype.get = function () {
  if (0 < this.Gc) {
    this.Gc--;
    var a = this.xc;
    this.xc = a.next;
    a.next = null;
  } else a = this.ug();
  return a;
};
sr.prototype.put = function (a) {
  this.ah(a);
  this.Gc < this.Og && (this.Gc++, (a.next = this.xc), (this.xc = a));
};
try {
  new self.OffscreenCanvas(0, 0).getContext("2d");
} catch (a) {}
function tr(a, b) {
  return a + Math.random() * (b - a);
}
var ur = {
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
function vr(a, b, c) {
  function e(q) {
    q && b.appendChild("string" === typeof q ? a.createTextNode(q) : q);
  }
  for (var h = 1; h < c.length; h++) {
    var k = c[h];
    if (!Ba(k) || (Ca(k) && 0 < k.nodeType)) e(k);
    else {
      a: {
        if (k && "number" == typeof k.length) {
          if (Ca(k)) {
            var n = "function" == typeof k.item || "string" == typeof k.item;
            break a;
          }
          if ("function" === typeof k) {
            n = "function" == typeof k.item;
            break a;
          }
        }
        n = !1;
      }
      kb(n ? pb(k) : k, e);
    }
  }
}
function wr(a, b) {
  b = String(b);
  "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
  return a.createElement(b);
}
function xr() {
  this.F = l.document || document;
}
d = xr.prototype;
d.getElementsByTagName = function (a, b) {
  return (b || this.F).getElementsByTagName(String(a));
};
d.setProperties = function (a, b) {
  mi(b, function (c, e) {
    c && "object" == typeof c && c.Mb && (c = c.Kb());
    "style" == e
      ? (a.style.cssText = c)
      : "class" == e
      ? (a.className = c)
      : "for" == e
      ? (a.htmlFor = c)
      : ur.hasOwnProperty(e)
      ? a.setAttribute(ur[e], c)
      : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0)
      ? a.setAttribute(e, c)
      : (a[e] = c);
  });
};
d.createElement = function (a) {
  return wr(this.F, a);
};
d.createTextNode = function (a) {
  return this.F.createTextNode(String(a));
};
d.getWindow = function () {
  var a = this.F;
  return a.parentWindow || a.defaultView;
};
d.appendChild = function (a, b) {
  m(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
  a.appendChild(b);
};
d.append = function (a, b) {
  var c = a;
  m(c, "Node cannot be null or undefined.");
  vr(9 == c.nodeType ? c : c.ownerDocument || c.document, a, arguments);
};
d.canHaveChildren = function (a) {
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
d.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
d.getChildren = function (a) {
  return void 0 != a.children
    ? a.children
    : Array.prototype.filter.call(a.childNodes, function (b) {
        return 1 == b.nodeType;
      });
};
d.contains = function (a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
};
var yr;
function zr() {
  var a = l.MessageChannel;
  "undefined" === typeof a &&
    "undefined" !== typeof window &&
    window.postMessage &&
    window.addEventListener &&
    !t("Presto") &&
    (a = function () {
      var h = wr(document, "IFRAME");
      h.style.display = "none";
      document.documentElement.appendChild(h);
      var k = h.contentWindow;
      h = k.document;
      h.open();
      h.close();
      var n = "callImmediate" + Math.random(),
        q = "file:" == k.location.protocol ? "*" : k.location.protocol + "//" + k.location.host;
      h = Ia(function (r) {
        if (("*" == q || r.origin == q) && r.data == n) this.port1.onmessage();
      }, this);
      k.addEventListener("message", h, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          k.postMessage(n, q);
        }
      };
    });
  if ("undefined" !== typeof a && !gb()) {
    var b = new a(),
      c = {},
      e = c;
    b.port1.onmessage = function () {
      if (void 0 !== c.next) {
        c = c.next;
        var h = c.Ge;
        c.Ge = null;
        h();
      }
    };
    return function (h) {
      e.next = { Ge: h };
      e = e.next;
      b.port2.postMessage(0);
    };
  }
  return function (h) {
    l.setTimeout(h, 0);
  };
}
function Ar() {
  this.Uc = this.Va = null;
}
Ar.prototype.add = function (a, b) {
  var c = Br.get();
  c.set(a, b);
  this.Uc ? (this.Uc.next = c) : (m(!this.Va), (this.Va = c));
  this.Uc = c;
};
Ar.prototype.remove = function () {
  var a = null;
  this.Va && ((a = this.Va), (this.Va = this.Va.next), this.Va || (this.Uc = null), (a.next = null));
  return a;
};
var Br = new sr(
  function () {
    return new Cr();
  },
  function (a) {
    return a.reset();
  }
);
function Cr() {
  this.next = this.scope = this.od = null;
}
Cr.prototype.set = function (a, b) {
  this.od = a;
  this.scope = b;
  this.next = null;
};
Cr.prototype.reset = function () {
  this.next = this.scope = this.od = null;
};
var Dr = l.console && l.console.createTask ? l.console.createTask.bind(l.console) : void 0,
  Er = Dr ? Symbol("consoleTask") : void 0;
function Fr(a, b) {
  function c() {
    var h = va.apply(0, arguments),
      k = this;
    return e.run(function () {
      return a.call.apply(a, [k].concat(ma(h)));
    });
  }
  b = void 0 === b ? "anonymous" : b;
  if (!Dr || a[Ra(Er)]) return a;
  var e = Dr(a.name || b);
  c[Ra(Er)] = e;
  return c;
}
var Gr,
  Hr = !1,
  Ir = new Ar();
function Jr(a, b) {
  Gr || Kr();
  Hr || (Gr(), (Hr = !0));
  a = Fr(a, "goog.async.run");
  Ir.add(a, b);
}
function Kr() {
  if (l.Promise && l.Promise.resolve) {
    var a = l.Promise.resolve(void 0);
    Gr = function () {
      a.then(Lr);
    };
  } else
    Gr = function () {
      var b = Lr;
      "function" !== typeof l.setImmediate ||
      (l.Window && l.Window.prototype && (fb() || !t("Edge")) && l.Window.prototype.setImmediate == l.setImmediate)
        ? (yr || (yr = zr()), yr(b))
        : l.setImmediate(b);
    };
}
function Lr() {
  for (var a; (a = Ir.remove()); ) {
    try {
      a.od.call(a.scope);
    } catch (b) {
      Ya(b);
    }
    Br.put(a);
  }
  Hr = !1;
}
function Mr(a) {
  this.V = 0;
  this.Sf = void 0;
  this.Xa = this.qa = this.Ra = null;
  this.vc = this.ld = !1;
  if (a != li)
    try {
      var b = this;
      a.call(
        void 0,
        function (c) {
          Nr(b, 2, c);
        },
        function (c) {
          if (!(c instanceof Or))
            try {
              if (c instanceof Error) throw c;
              throw Error("Promise rejected.");
            } catch (e) {}
          Nr(b, 3, c);
        }
      );
    } catch (c) {
      Nr(this, 3, c);
    }
}
function Pr() {
  this.next = this.context = this.qb = this.Qa = this.Ea = null;
  this.Bb = !1;
}
Pr.prototype.reset = function () {
  this.context = this.qb = this.Qa = this.Ea = null;
  this.Bb = !1;
};
var Qr = new sr(
  function () {
    return new Pr();
  },
  function (a) {
    a.reset();
  }
);
function Rr(a, b, c) {
  var e = Qr.get();
  e.Qa = a;
  e.qb = b;
  e.context = c;
  return e;
}
function Sr(a, b, c) {
  Tr(a, b, c, null) || Jr(Ja(b, a));
}
function Ur(a) {
  return new Mr(function (b) {
    var c = a.length,
      e = [];
    if (c)
      for (
        var h = function (q, r, v) {
            c--;
            e[q] = r ? { Bg: !0, value: v } : { Bg: !1, reason: v };
            0 == c && b(e);
          },
          k = 0,
          n;
        k < a.length;
        k++
      )
        (n = a[k]), Sr(n, Ja(h, k, !0), Ja(h, k, !1));
    else b(e);
  });
}
Mr.prototype.then = function (a, b, c) {
  null != a && Va(a, "opt_onFulfilled should be a function.");
  null != b && Va(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return Vr(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
};
Mr.prototype.$goog_Thenable = !0;
function Wr(a, b) {
  b = Rr(b, b);
  b.Bb = !0;
  Xr(a, b);
}
d = Mr.prototype;
d.eh = function (a, b) {
  return Vr(this, null, a, b);
};
d.catch = Mr.prototype.eh;
d.cancel = function (a) {
  if (0 == this.V) {
    var b = new Or(a);
    Jr(function () {
      Yr(this, b);
    }, this);
  }
};
function Yr(a, b) {
  if (0 == a.V)
    if (a.Ra) {
      var c = a.Ra;
      if (c.qa) {
        for (var e = 0, h = null, k = null, n = c.qa; n && (n.Bb || (e++, n.Ea == a && (h = n), !(h && 1 < e))); n = n.next) h || (k = n);
        h &&
          (0 == c.V && 1 == e
            ? Yr(c, b)
            : (k ? ((e = k), m(c.qa), m(null != e), e.next == c.Xa && (c.Xa = e), (e.next = e.next.next)) : Zr(c), $r(c, h, 3, b)));
      }
      a.Ra = null;
    } else Nr(a, 3, b);
}
function Xr(a, b) {
  a.qa || (2 != a.V && 3 != a.V) || as(a);
  m(null != b.Qa);
  a.Xa ? (a.Xa.next = b) : (a.qa = b);
  a.Xa = b;
}
function Vr(a, b, c, e) {
  b && (b = Fr(b, "goog.Promise.then"));
  c && (c = Fr(c, "goog.Promise.then"));
  var h = Rr(null, null, null);
  h.Ea = new Mr(function (k, n) {
    h.Qa = b
      ? function (q) {
          try {
            var r = b.call(e, q);
            k(r);
          } catch (v) {
            n(v);
          }
        }
      : k;
    h.qb = c
      ? function (q) {
          try {
            var r = c.call(e, q);
            void 0 === r && q instanceof Or ? n(q) : k(r);
          } catch (v) {
            n(v);
          }
        }
      : n;
  });
  h.Ea.Ra = a;
  Xr(a, h);
  return h.Ea;
}
d.gh = function (a) {
  m(1 == this.V);
  this.V = 0;
  Nr(this, 2, a);
};
d.hh = function (a) {
  m(1 == this.V);
  this.V = 0;
  Nr(this, 3, a);
};
function Nr(a, b, c) {
  0 == a.V &&
    (a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself"))),
    (a.V = 1),
    Tr(c, a.gh, a.hh, a) || ((a.Sf = c), (a.V = b), (a.Ra = null), as(a), 3 != b || c instanceof Or || bs(a, c)));
}
function Tr(a, b, c, e) {
  if (a instanceof Mr)
    return (
      null != b && Va(b, "opt_onFulfilled should be a function."),
      null != c && Va(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
      Xr(a, Rr(b || li, c || null, e)),
      !0
    );
  if (a)
    try {
      var h = !!a.$goog_Thenable;
    } catch (n) {
      h = !1;
    }
  else h = !1;
  if (h) return a.then(b, c, e), !0;
  if (Ca(a))
    try {
      var k = a.then;
      if ("function" === typeof k) return cs(a, k, b, c, e), !0;
    } catch (n) {
      return c.call(e, n), !0;
    }
  return !1;
}
function cs(a, b, c, e, h) {
  function k(r) {
    q || ((q = !0), e.call(h, r));
  }
  function n(r) {
    q || ((q = !0), c.call(h, r));
  }
  var q = !1;
  try {
    b.call(a, n, k);
  } catch (r) {
    k(r);
  }
}
function as(a) {
  a.ld || ((a.ld = !0), Jr(a.zg, a));
}
function Zr(a) {
  var b = null;
  a.qa && ((b = a.qa), (a.qa = b.next), (b.next = null));
  a.qa || (a.Xa = null);
  null != b && m(null != b.Qa);
  return b;
}
d.zg = function () {
  for (var a; (a = Zr(this)); ) $r(this, a, this.V, this.Sf);
  this.ld = !1;
};
function $r(a, b, c, e) {
  if (3 == c && b.qb && !b.Bb) for (; a && a.vc; a = a.Ra) a.vc = !1;
  if (b.Ea) (b.Ea.Ra = null), ds(b, c, e);
  else
    try {
      b.Bb ? b.Qa.call(b.context) : ds(b, c, e);
    } catch (h) {
      es.call(null, h);
    }
  Qr.put(b);
}
function ds(a, b, c) {
  2 == b ? a.Qa.call(a.context, c) : a.qb && a.qb.call(a.context, c);
}
function bs(a, b) {
  a.vc = !0;
  Jr(function () {
    a.vc && es.call(null, b);
  });
}
var es = Ya;
function Or(a) {
  Na.call(this, a);
}
La(Or, Na);
Or.prototype.name = "cancel";
function fs(a, b) {
  el.call(this);
  this.ya = a || 1;
  this.cc = b || l;
  this.De = Ia(this.fh, this);
  this.yf = Date.now();
}
La(fs, el);
d = fs.prototype;
d.enabled = !1;
d.C = null;
d.setInterval = function (a) {
  this.ya = a;
  this.C && this.enabled ? (this.stop(), this.start()) : this.C && this.stop();
};
d.fh = function () {
  if (this.enabled) {
    var a = Date.now() - this.yf;
    0 < a && a < 0.8 * this.ya
      ? (this.C = this.cc.setTimeout(this.De, this.ya - a))
      : (this.C && (this.cc.clearTimeout(this.C), (this.C = null)),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(), this.start()));
  }
};
d.start = function () {
  this.enabled = !0;
  this.C || ((this.C = this.cc.setTimeout(this.De, this.ya)), (this.yf = Date.now()));
};
d.stop = function () {
  this.enabled = !1;
  this.C && (this.cc.clearTimeout(this.C), (this.C = null));
};
d.A = function () {
  fs.pa.A.call(this);
  this.stop();
  delete this.cc;
};
function gs(a, b, c) {
  if ("function" === typeof a) c && (a = Ia(a, c));
  else if (a && "function" == typeof a.handleEvent) a = Ia(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
function hs(a, b, c) {
  Z.call(this);
  this.Qb = a;
  this.ya = b || 0;
  this.kb = c;
  this.ic = Ia(this.ab, this);
}
La(hs, Z);
d = hs.prototype;
d.L = 0;
d.A = function () {
  hs.pa.A.call(this);
  this.stop();
  delete this.Qb;
  delete this.kb;
};
d.start = function (a) {
  this.stop();
  this.L = gs(this.ic, void 0 !== a ? a : this.ya);
};
d.stop = function () {
  this.isActive() && l.clearTimeout(this.L);
  this.L = 0;
};
d.fb = function () {
  this.stop();
  this.ab();
};
d.isActive = function () {
  return 0 != this.L;
};
d.ab = function () {
  this.L = 0;
  this.Qb && this.Qb.call(this.kb);
};
function is() {}
is.prototype.Fe = null;
is.prototype.getOptions = function () {
  var a;
  (a = this.Fe) || ((a = {}), js(this) && ((a[0] = !0), (a[1] = !0)), (a = this.Fe = a));
  return a;
};
var ks;
function ls() {}
La(ls, is);
function ms(a) {
  return (a = js(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
}
function js(a) {
  if (!a.kf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var e = b[c];
      try {
        return new ActiveXObject(e), (a.kf = e);
      } catch (h) {}
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.kf;
}
ks = new ls();
function ns(a) {
  el.call(this);
  this.headers = new Map();
  this.Wc = a || null;
  this.va = !1;
  this.Vc = this.h = null;
  this.Pb = this.wf = this.Dc = "";
  this.Na = this.Bd = this.yc = this.kd = !1;
  this.yb = 0;
  this.Pc = null;
  this.Rf = "";
  this.Sc = this.Vg = this.xe = !1;
  this.ad = this.re = null;
}
La(ns, el);
ns.prototype.I = Ll(Ml(), "goog.net.XhrIo").N;
var os = /^https?$/i,
  ps = ["POST", "PUT"],
  qs = [];
function rs(a, b, c, e, h, k, n) {
  var q = new ns();
  qs.push(q);
  b && q.listen("complete", b);
  q.Id("ready", q.sg);
  k && (q.yb = Math.max(0, k));
  n && (q.xe = n);
  q.send(a, c, e, h);
}
d = ns.prototype;
d.sg = function () {
  this.gd();
  nb(qs, this);
};
d.setTrustToken = function (a) {
  this.re = a;
};
d.setAttributionReporting = function (a) {
  this.ad = a;
};
d.send = function (a, b, c, e) {
  if (this.h) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Dc + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.Dc = a;
  this.Pb = "";
  this.wf = b;
  this.kd = !1;
  this.va = !0;
  this.h = this.Wc ? ms(this.Wc) : ms(ks);
  this.Vc = this.Wc ? this.Wc.getOptions() : ks.getOptions();
  this.h.onreadystatechange = Ia(this.Df, this);
  this.Vg &&
    "onprogress" in this.h &&
    ((this.h.onprogress = Ia(function (n) {
      this.Cf(n, !0);
    }, this)),
    this.h.upload && (this.h.upload.onprogress = Ia(this.Cf, this)));
  try {
    Ql(this.I, ss(this, "Opening Xhr")), (this.Bd = !0), this.h.open(b, String(a), !0), (this.Bd = !1);
  } catch (n) {
    Ql(this.I, ss(this, "Error opening Xhr: " + n.message));
    ts(this, n);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (e)
    if (Object.getPrototypeOf(e) === Object.prototype) for (var h in e) c.set(h, e[h]);
    else if ("function" === typeof e.keys && "function" === typeof e.get) {
      h = ka(e.keys());
      for (var k = h.next(); !k.done; k = h.next()) (k = k.value), c.set(k, e.get(k));
    } else throw Error("Unknown input type for opt_headers: " + String(e));
  e = Array.from(c.keys()).find(function (n) {
    return "content-type" == n.toLowerCase();
  });
  h = l.FormData && a instanceof l.FormData;
  !(0 <= ib(ps, b)) || e || h || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  b = ka(c);
  for (e = b.next(); !e.done; e = b.next()) (c = ka(e.value)), (e = c.next().value), (c = c.next().value), this.h.setRequestHeader(e, c);
  this.Rf && (this.h.responseType = this.Rf);
  "withCredentials" in this.h && this.h.withCredentials !== this.xe && (this.h.withCredentials = this.xe);
  if ("setTrustToken" in this.h && this.re)
    try {
      this.h.setTrustToken(this.re);
    } catch (n) {
      Ql(this.I, ss(this, "Error SetTrustToken: " + n.message));
    }
  if ("setAttributionReporting" in this.h && this.ad)
    try {
      this.h.setAttributionReporting(this.ad);
    } catch (n) {
      Ql(this.I, ss(this, "Error SetAttributionReporting: " + n.message));
    }
  try {
    us(this),
      0 < this.yb &&
        ((this.Sc = vs(this.h)),
        Ql(this.I, ss(this, "Will abort after " + this.yb + "ms if incomplete, xhr2 " + this.Sc)),
        this.Sc ? ((this.h.timeout = this.yb), (this.h.ontimeout = Ia(this.ig, this))) : (this.Pc = gs(this.ig, this.yb, this))),
      Ql(this.I, ss(this, "Sending request")),
      (this.yc = !0),
      this.h.send(a),
      (this.yc = !1);
  } catch (n) {
    Ql(this.I, ss(this, "Send error: " + n.message)), ts(this, n);
  }
};
function vs(a) {
  return tb && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
d.ig = function () {
  "undefined" != typeof ya &&
    this.h &&
    ((this.Pb = "Timed out after " + this.yb + "ms, aborting"),
    Ql(this.I, ss(this, this.Pb)),
    this.dispatchEvent("timeout"),
    this.abort(8));
};
function ts(a, b) {
  a.va = !1;
  a.h && ((a.Na = !0), a.h.abort(), (a.Na = !1));
  a.Pb = b;
  ws(a);
  xs(a);
}
function ws(a) {
  a.kd || ((a.kd = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
d.abort = function () {
  this.h &&
    this.va &&
    (Ql(this.I, ss(this, "Aborting")),
    (this.va = !1),
    (this.Na = !0),
    this.h.abort(),
    (this.Na = !1),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    xs(this));
};
d.A = function () {
  this.h && (this.va && ((this.va = !1), (this.Na = !0), this.h.abort(), (this.Na = !1)), xs(this, !0));
  ns.pa.A.call(this);
};
d.Df = function () {
  this.isDisposed() || (this.Bd || this.yc || this.Na ? ys(this) : this.Ug());
};
d.Ug = function () {
  ys(this);
};
function ys(a) {
  if (a.va && "undefined" != typeof ya)
    if (a.Vc[1] && 4 == zs(a) && 2 == a.getStatus()) Ql(a.I, ss(a, "Local request error detected and ignored"));
    else if (a.yc && 4 == zs(a)) gs(a.Df, 0, a);
    else if ((a.dispatchEvent("readystatechange"), 4 == zs(a))) {
      Ql(a.I, ss(a, "Request complete"));
      a.va = !1;
      try {
        if (As(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          try {
            var b = 2 < zs(a) ? a.h.statusText : "";
          } catch (c) {
            Ql(a.I, "Can not get status: " + c.message), (b = "");
          }
          a.Pb = b + " [" + a.getStatus() + "]";
          ws(a);
        }
      } finally {
        xs(a);
      }
    }
}
d.Cf = function (a, b) {
  m("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
  this.dispatchEvent(Bs(a, "progress"));
  this.dispatchEvent(Bs(a, b ? "downloadprogress" : "uploadprogress"));
};
function Bs(a, b) {
  return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
}
function xs(a, b) {
  if (a.h) {
    us(a);
    var c = a.h,
      e = a.Vc[0] ? function () {} : null;
    a.h = null;
    a.Vc = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = e;
    } catch (h) {
      Ol(a.I, "Problem encountered resetting onreadystatechange: " + h.message);
    }
  }
}
function us(a) {
  a.h && a.Sc && (a.h.ontimeout = null);
  a.Pc && (l.clearTimeout(a.Pc), (a.Pc = null));
}
d.isActive = function () {
  return !!this.h;
};
function As(a) {
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
      (a = String(a.Dc).match(Ij)[1] || null),
        !a && l.self && l.self.location && (a = l.self.location.protocol.slice(0, -1)),
        (b = !os.test(a ? a.toLowerCase() : ""));
    c = b;
  }
  return c;
}
function zs(a) {
  return a.h ? a.h.readyState : 0;
}
d.getStatus = function () {
  try {
    return 2 < zs(this) ? this.h.status : -1;
  } catch (a) {
    return -1;
  }
};
d.getResponseHeader = function (a) {
  if (this.h && 4 == zs(this)) return (a = this.h.getResponseHeader(a)), null === a ? void 0 : a;
};
d.getAllResponseHeaders = function () {
  return this.h && 2 <= zs(this) ? this.h.getAllResponseHeaders() || "" : "";
};
function ss(a, b) {
  return b + " [" + a.wf + " " + a.Dc + " " + a.getStatus() + "]";
}
function Cs() {
  el.call(this);
  var a = this;
  this.Bc = navigator.onLine;
  this.Sb = new Ds(function (c) {
    return Es(a, c);
  });
  Wi(this, this.Sb);
  var b = new hl(this);
  Wi(this, b);
  b.listen(window, ["online", "offline"], this.Fg);
  this.Bc ||
    Jr(function () {
      return a.Sb.start();
    });
}
g(Cs, el);
Cs.prototype.rf = function () {
  return this.Bc;
};
function Es(a, b) {
  a.Bc != b && ((a.Bc = b), a.dispatchEvent(new Fs(b)), b ? a.Sb.stop() : a.Sb.start());
}
Cs.prototype.Fg = function () {
  Es(this, navigator.onLine);
};
Cs.prototype.A = function () {
  this.Sb.stop();
  el.prototype.A.call(this);
};
Cs.td = function () {
  return zj(Cs);
};
function Fs(a) {
  Xi.call(this, "change");
  this.rf = a;
}
g(Fs, Xi);
function Ds(a) {
  Z.call(this);
  var b = this;
  this.ic = a;
  this.Vd = !1;
  this.Zc = 0;
  this.pe = new hs(function () {
    return Gs(b, !1);
  }, 1e4);
  Wi(this, this.pe);
  this.Ud = new hs(function () {
    return Hs(b);
  }, 5e3);
  Wi(this, this.Ud);
  this.h = this.la = null;
}
g(Ds, Z);
Ds.prototype.start = function () {
  this.Vd || ((this.Vd = !0), (this.Zc = 0), Hs(this));
};
Ds.prototype.stop = function () {
  Is(this);
  this.Vd = !1;
};
function Hs(a) {
  navigator.onLine || a.Zc++;
  var b = fk().toString();
  a.h
    ? (a.h.open("GET", b, !0), a.h.send())
    : ((a.la = new Image()),
      (a.la.onload = function () {
        return Gs(a, !0);
      }),
      (a.la.onerror = function () {
        return Gs(a, !1);
      }),
      (a.la.onabort = function () {
        return Gs(a, !1);
      }),
      (a.la.src = b));
  a.pe.start();
}
function Gs(a, b) {
  Is(a);
  b ? (a.ic(!0), a.stop()) : !navigator.onLine && 2 <= a.Zc ? (a.ic(!1), a.stop()) : a.Ud.start();
}
function Is(a) {
  a.la && ((a.la.onload = a.la.onerror = a.la.onabort = null), (a.la = null));
  a.h && a.h.abort();
  a.pe.stop();
  a.Ud.stop();
}
var gk = new Sj("https://www.google.com/images/cleardot.gif");
function Js(a) {
  el.call(this);
  this.zc = a;
  this.enabled = !1;
  this.Jd = function () {
    return Date.now();
  };
  this.xf = this.Jd();
}
g(Js, el);
Js.prototype.setInterval = function (a) {
  this.zc = a;
  this.ha && this.enabled ? (this.stop(), this.start()) : this.ha && this.stop();
};
Js.prototype.start = function () {
  var a = this;
  this.enabled = !0;
  this.ha ||
    ((this.ha = setTimeout(function () {
      Ks(a);
    }, this.zc)),
    (this.xf = this.Jd()));
};
Js.prototype.stop = function () {
  this.enabled = !1;
  this.ha && (clearTimeout(this.ha), (this.ha = void 0));
};
function Ks(a) {
  if (a.enabled) {
    var b = Math.max(a.Jd() - a.xf, 0);
    b < 0.8 * a.zc
      ? (a.ha = setTimeout(function () {
          Ks(a);
        }, a.zc - b))
      : (a.ha && (clearTimeout(a.ha), (a.ha = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
  } else a.ha = void 0;
}
function Ls(a) {
  W.call(this, a);
}
g(Ls, W);
Ls.j = "privacy.context.external.ExternalPRequestContext";
var Ms = [0, 12, L, 10, M];
Ls.makeCrossSerializerComparisonsCompatible = X(Ls, Ms);
function Ns(a) {
  W.call(this, a);
}
g(Ns, W);
Ns.j = "privacy.context.external.ExternalPrivacyContext";
var Os = [0, 1, Ms];
Ns.makeCrossSerializerComparisonsCompatible = X(Ns, Os);
function Ps(a) {
  m(0 < a, "Initial value must be greater than zero.");
  m(3e5 >= a, "Max value should be at least as large as initial value.");
  m(!0, "Randomness factor should be between 0 and 1.");
  this.mf = a;
  this.Af = 3e5;
  this.Eb = this.Ya = a;
  this.Lf = 0.1;
  this.qg = 2;
}
Ps.prototype.reset = function () {
  this.Eb = this.Ya = this.mf;
};
function Qs(a) {
  W.call(this, a);
}
g(Qs, W);
Qs.prototype.wb = function (a) {
  le(this, 1, a);
};
Qs.prototype.le = function (a) {
  je(this, 3, a);
};
Qs.prototype.je = function (a) {
  je(this, 4, a);
};
Qs.prototype.ie = function (a) {
  je(this, 5, a);
};
Qs.j = "wireless_android_play_playlog.JsClientInfo.FlushInfo";
var Rs = [0, T, M, L, -2];
Qs.makeCrossSerializerComparisonsCompatible = X(Qs, Rs);
var Ss = [0, N, -1];
function Ts(a) {
  W.call(this, a);
}
g(Ts, W);
Ts.j = "wireless_android_play_playlog.JsClientInfo.UserAgentClientHints";
Ts.ga = [1];
var Us = [0, Q, Ss, M, N, -5];
Ts.makeCrossSerializerComparisonsCompatible = X(Ts, Us);
function Vs(a) {
  W.call(this, a);
}
g(Vs, W);
Vs.prototype.ub = function (a) {
  ke(this, 7, a);
};
Vs.prototype.ib = function () {
  return Yd(this, Qs, 10);
};
Vs.j = "wireless_android_play_playlog.JsClientInfo";
var Ws = [0, N, -1, T, N, -1, T, N, -1, Us, Rs];
Vs.makeCrossSerializerComparisonsCompatible = X(Vs, Ws);
var Xs = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
new Ts();
var Ys = [0, N, T, [0, M], N, -1, T, -1];
var Zs = [0, T, N, -1];
var $s = [0, N, -3];
var at = [0, N, -6, I, L];
var bt = [0, N, T];
var ct = [0, N, T];
var dt = [0, N, -6, T, N, 1, N, M, T, -1, M, N, -2, T];
var et = [0, N, -4];
var ft = [0, N, -3, I, L, N];
var gt = [0, M, -3];
var ht = [0, [0, T, N, -1, I, L, -1, N, -4, Q, [0, N, -4], -1, 1, gt], [0, T, N, -1, I, L, -1, N, -4, gt]];
var it = [0, N, T, N];
var jt = [0, N, T, N, -2];
var kt = [0, N, 1, N, -5];
var lt = [0, T, N, -1, I, L, -1, N, -5, Q, [0, N, -4], -1, M, [0, M, -3], T];
var mt = [0, [1, 2, 3, 4, 5], R, Ys, R, bt, R, ct, R, [0, T], R, lt];
var nt = [0, T];
var ot = [0, T, N, -8];
var pt = [0, N, -9];
function qt(a) {
  W.call(this, a);
}
g(qt, W);
qt.prototype.jb = function () {
  return Yd(this, Vs, 11);
};
qt.j = "wireless_android_play_playlog.ClientInfo";
var rt = [0, T, 1, at, 1, kt, N, -1, ot, $s, jt, Ws, I, ft, Zs, pt, dt, 1, nt, 1, et, 1, Ys, mt, bt, ct, lt, ht, 6, it];
qt.makeCrossSerializerComparisonsCompatible = X(qt, rt);
var st = [0, O, -1, wf, qf, -1];
var tt = [0, L, N, -1];
var ut = [0, N, -1];
var vt = [0, T, -1];
function wt(a) {
  W.call(this, a);
}
g(wt, W);
wt.j = "wireless_android_play_playlog.ComplianceData";
var xt = [0, Os, T, ag];
wt.makeCrossSerializerComparisonsCompatible = X(wt, xt);
function yt(a) {
  W.call(this, a, 35);
}
g(yt, W);
d = yt.prototype;
d.ka = function () {
  return Xc(Hd(this, 11));
};
d.vb = function (a) {
  return je(this, 11, a);
};
d.xd = function () {
  return null != Xc(Hd(this, 11));
};
d.Nc = function (a) {
  ke(this, 26, a);
};
function zt(a, b) {
  return ke(a, 8, b);
}
d.dd = function () {
  return Jd(this, 16);
};
d.sd = function () {
  return y(this, wt, 33);
};
d.Yf = function (a) {
  A(this, wt, 33, a);
};
yt.j = "wireless_android_play_playlog.LogEvent";
yt.ga = [3, 20, 27];
var At = [
  -35,
  {},
  pf,
  N,
  Q,
  ut,
  If,
  1,
  If,
  st,
  N,
  tt,
  M,
  L,
  I,
  N,
  -1,
  Pf,
  Zf,
  pf,
  If,
  T,
  wf,
  I,
  -1,
  vt,
  N,
  M,
  N,
  xf,
  N,
  -1,
  F,
  1,
  F,
  xt,
  M
];
yt.makeCrossSerializerComparisonsCompatible = X(yt, At);
var Bt = [0, pf, M, I];
var Ct = [0, M, -1, T, M];
var Dt = [0, I, -1, N];
function Et(a) {
  W.call(this, a, 19);
}
g(Et, W);
d = Et.prototype;
d.rd = function () {
  return y(this, qt, 1);
};
d.wa = function () {
  return Yd(this, qt, 1);
};
d.Ca = function (a) {
  A(this, qt, 1, a);
};
d.Xb = function (a) {
  return le(this, 2, a);
};
d.sd = function () {
  return y(this, wt, 18);
};
d.Yf = function (a) {
  A(this, wt, 18, a);
};
Et.j = "wireless_android_play_playlog.LogRequest";
Et.ga = [3, 5];
Et.makeCrossSerializerComparisonsCompatible = X(Et, [-19, {}, rt, T, Q, At, pf, Jf, N, -1, pf, T, -1, Ct, Dt, Bt, I, 1, S, 1, xt]);
var Ft = [0, O];
var Gt = [0, L, T];
var Ht = [0, O];
var It = [0, L, N];
var Jt = [0, Q, [0, N, T, -1], I];
function Kt(a) {
  W.call(this, a, 7);
}
g(Kt, W);
var Lt = (function (a) {
  return function (b) {
    Va(a);
    if (null == b || "" == b) b = Wa(new a(), oe);
    else {
      Ua(b);
      b = JSON.parse(b);
      if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + Aa(b) + ": " + b);
      bc(b, 32);
      b = pd(a, b);
    }
    return b;
  };
})(Kt);
Kt.j = "wireless_android_play_playlog.LogResponse";
var Mt = {};
Kt.ga = [5, 6];
Kt.makeCrossSerializerComparisonsCompatible = X(Kt, [-7, Mt, pf, Ft, Jt, Ht, Q, Gt, Q, It]);
function Nt(a) {
  W.call(this, a);
}
g(Nt, W);
Nt.j = "wireless_android_play_playlog.JsLogResponseExtension";
var Ot = [0, L];
Nt.makeCrossSerializerComparisonsCompatible = X(Nt, Ot);
var Pt = new (function (a, b, c) {
    var e = void 0 === e ? !1 : e;
    m(0 < a);
    this.sa = a;
    this.md = b;
    this.Ha = c;
    this.Ob = 0;
    this.hb = y;
    this.defaultValue = void 0;
    this.Jg = e;
  })(175237375, Kt, Nt),
  Qt = Pt.md;
if ("function" === typeof Qt) {
  var Rt = Ra(Tf).get(Qt);
  Rt || Ra(Tf).set(Qt, (Rt = new Map()));
  Rt.has(Pt.sa) || Rt.set(Pt.sa, Pt);
}
Mt[175237375] = Ot;
function St(a) {
  Z.call(this);
  var b = this;
  this.Ga = "";
  this.T = [];
  this.uf = "";
  this.ue = this.ve = this.fd = !1;
  this.Bf = this.oe = -1;
  this.ec = this.Ie = !1;
  this.Ma = this.ja = null;
  this.Nd = this.Od = this.pb = this.za = 0;
  this.bh = 1;
  this.timeoutMillis = 0;
  this.sb = !1;
  this.nb = a.nb;
  this.La = a.La || function () {};
  this.Z = new Tt(a.nb, a.Oa);
  this.network = a.network;
  this.Sa = a.Sa || null;
  this.bufferSize = 1e3;
  this.ih = Ja(tr, 0, 1);
  this.ed = a.jh || null;
  this.Ba = a.Ba || null;
  this.Fb = a.Fb || !1;
  this.rb = a.rb || null;
  this.N = Ll(Ml(), "playlog.clearcut.ClearcutBase").N;
  this.withCredentials = !a.Pe;
  this.Oa = a.Oa || !1;
  this.tf = !this.Oa && !!window && !!window.navigator && void 0 !== window.navigator.sendBeacon;
  var c = le(new qt(), 1, 1);
  this.Z.Ca(c);
  this.Ja = new Ps(1e4);
  this.S = new Js(this.Ja.Ya);
  a = Ut(this, a.Ce);
  lj(this.S, "tick", a, !1, this);
  this.bd = new Js(6e5);
  lj(this.bd, "tick", a, !1, this);
  this.Fb || this.bd.start();
  this.Oa ||
    (lj(document, "visibilitychange", function () {
      "hidden" === document.visibilityState && b.nd();
    }),
    lj(document, "pagehide", this.nd, !1, this));
}
g(St, Z);
function Ut(a, b) {
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
d = St.prototype;
d.A = function () {
  this.nd();
  this.S.stop();
  this.bd.stop();
  Z.prototype.A.call(this);
};
d.hg = function (a) {
  this.ec = a;
};
function Vt(a) {
  a.ed ||
    (a.ed = 0.01 > a.ih() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
  return a.ed;
}
d.xg = function (a) {
  a instanceof yt ? this.log(a) : ((a = zt(new yt(), a.B())), this.log(a));
};
d.Xf = function (a) {
  this.Z.Ca(a);
};
d.Nc = function (a) {
  this.Ga = a;
};
d.gg = function (a) {
  this.Sa = a;
};
d.fg = function (a) {
  this.ja || (this.ja = new Yf());
  Sd(this.ja, 2, a, ee);
};
d.Wf = function (a) {
  a ? (this.ja || (this.ja = new Yf()), (a = a.B()), ke(this.ja, 4, a)) : this.ja && Jd(this.ja, 4);
};
d.bg = function (a) {
  this.Ma = a;
};
d.ub = function (a) {
  this.Z.ub(a);
};
d.ag = function (a) {
  this.Ie = !0;
  Wt(this, a);
};
function Wt(a, b) {
  a.Ja = new Ps(1 > b ? 1 : b);
  a.S.setInterval(a.Ja.Ya);
}
d.log = function (a) {
  a = a.clone();
  var b = this.bh++;
  a = D(a, 21, b);
  this.Ga && a.Nc(this.Ga);
  be(a) || ((b = Date.now()), (b = Number.isFinite(b) ? b.toString() : "0"), Jd(a, 1, Zc(b)));
  null != B(a, 15) || D(a, 15, new Date().getTimezoneOffset() * (this.ec ? -60 : 60));
  this.ja && ((b = this.ja.clone()), A(a, Yf, 16, b));
  b = this.T.length - this.bufferSize + 1;
  0 < b && (this.T.splice(0, b), (this.za += b));
  this.T.push(a);
  this.Fb || this.S.enabled || this.S.start();
};
d.flush = function (a, b) {
  var c = this;
  if (0 === this.T.length) a && a();
  else if (this.sb) this.Z.wb(3), Xt(this);
  else {
    var e = Date.now();
    if (this.Bf > e && this.oe < e) Pl(this.N, "Not flushing because server requested delay."), b && b("throttled");
    else {
      this.Z.wb(1);
      var h = this.Z.O(this.T, this.za, this.pb, this.Sa, this.Od, this.Nd);
      e = {};
      var k = this.La();
      k && (e.Authorization = k);
      var n = Vt(this);
      this.Ba && ((e["X-Goog-AuthUser"] = this.Ba), (n = Oj(n, "authuser", this.Ba)));
      this.rb && ((e["X-Goog-PageId"] = this.rb), (n = Oj(n, "pageId", this.rb)));
      if (k && this.uf === k) Pl(this.N, "XHR with unauthorized request not retried"), b && b("stale-auth-token");
      else if ((Pl(this.N, "Flushing log to clearcut."), (this.T = []), this.S.enabled && this.S.stop(), (this.za = 0), this.fd))
        Pl(this.N, h.B()), e && Pl(this.N, JSON.stringify(e)), a && a();
      else {
        var q = h.B(),
          r;
        this.Ma && this.Ma.isSupported(q.length) && (r = this.Ma.Aj(q));
        var v = {
            url: n,
            body: q,
            rg: 1,
            requestHeaders: e,
            requestType: "POST",
            withCredentials: this.withCredentials,
            timeoutMillis: this.timeoutMillis
          },
          z = function (x) {
            c.Ja.reset();
            c.S.setInterval(c.Ja.Ya);
            if (x) {
              var G = null;
              try {
                var P = JSON.stringify(JSON.parse(x.replace(")]}'\n", "")));
                G = Lt(P);
              } catch (fa) {
                fa instanceof Error && (x = c.N) && Nl(x, Al, "Response parse failed: " + fa.toString());
              }
              G &&
                ((x = Number),
                (P = "-1"),
                (P = void 0 === P ? "0" : P),
                (P = de(be(G), P)),
                (x = x(P)),
                0 < x && ((c.oe = Date.now()), (c.Bf = c.oe + x)),
                (G = qe(G, Pt))) &&
                ((x = -1), (x = void 0 === x ? 0 : x), (G = de(Xc(Hd(G, 1)), x)), -1 !== G && (c.Ie || Wt(c, G)));
            }
            a && a();
            c.pb = 0;
          },
          C = function (x, G) {
            var P = $d(h, yt, 3);
            var fa = B(h, 14),
              ia = c.Ja;
            ia.Eb = Math.min(ia.Af, ia.Eb * ia.qg);
            ia.Ya = Math.min(ia.Af, ia.Eb + (ia.Lf ? Math.round(ia.Lf * (Math.random() - 0.5) * 2 * ia.Eb) : 0));
            c.S.setInterval(c.Ja.Ya);
            401 === x && k && (c.uf = k);
            fa && (c.za += fa);
            void 0 === G && (G = (500 <= x && 600 > x) || 401 === x || 0 === x);
            G && ((c.T = P.concat(c.T)), c.Fb || c.S.enabled || c.S.start());
            (P = c.N) && Nl(P, Al, "Flush failed. Status code: " + x);
            b && b("net-send-failed", x);
            ++c.pb;
          },
          K = function () {
            if (c.network) c.network.send(v, z, C);
            else {
              var x = c.N;
              x && Nl(x, Al, "Missing NetworkInterface, required for logs transmission.");
            }
          };
        r
          ? r.then(
              function (x) {
                v.requestHeaders["Content-Encoding"] = "gzip";
                v.requestHeaders["Content-Type"] = "application/binary";
                v.body = x;
                v.rg = 2;
                K();
              },
              function () {
                K();
              }
            )
          : K();
      }
    }
  }
};
d.nd = function () {
  this.fd || (Yt(this.Z, !0), this.ve && (this.Z.wb(3), Xt(this)), this.ue && (this.Z.wb(2), Zt(this)), this.flush(), Yt(this.Z, !1));
};
function Xt(a) {
  Pl(a.N, "Flushing log using sendBeacon.");
  $t(a, 32, 10, function (b, c) {
    b = Oj(b, "format", "json");
    var e = !1;
    try {
      e = window.navigator.sendBeacon(b, c.B());
    } catch (h) {}
    a.sb && !e && (a.sb = !1);
    return e;
  });
}
function Zt(a) {
  Pl(a.N, "Flushing log using Image GET.");
  $t(a, 6, 5, function (b, c) {
    c = c.B();
    for (var e = [], h = 0, k = 0; k < c.length; k++) {
      var n = c.charCodeAt(k);
      if (255 < n) throw Error("go/unicode-to-byte-error");
      e[h++] = n;
    }
    c = Bb(e, 3);
    b = Nj(b, "format", "base64json", "p", c);
    if (15360 < b.length) return !1;
    new Image().src = b;
    return !0;
  });
}
function $t(a, b, c, e) {
  if (0 !== a.T.length) {
    var h = Vt(a);
    for (var k = h.search(Qj), n = 0, q, r = []; 0 <= (q = Pj(h, n, k)); )
      r.push(h.substring(n, q)), (n = Math.min(h.indexOf("&", q) + 1 || k, k));
    r.push(h.slice(n));
    h = r.join("").replace(Rj, "$1");
    h = Nj(h, "auth", a.La(), "authuser", a.Ba || "0");
    for (k = 0; k < c && a.T.length; ++k) {
      n = a.T.slice(0, b);
      q = a.Z.O(n, a.za, a.pb, a.Sa, a.Od, a.Nd);
      if (!e(h, q)) {
        ++a.pb;
        break;
      }
      a.za = 0;
      a.pb = 0;
      a.Od = 0;
      a.Nd = 0;
      a.T = a.T.slice(n.length);
    }
    a.S.enabled && a.S.stop();
  }
}
function Tt(a, b) {
  this.Oa = b = void 0 === b ? !1 : b;
  this.Qc = this.locale = null;
  this.Rb = new Et();
  Number.isInteger(a) && this.Rb.Xb(a);
  b || (this.locale = document.documentElement.getAttribute("lang"));
  this.Ca(new qt());
}
d = Tt.prototype;
d.Xb = function (a) {
  this.Rb.Xb(a);
  return this;
};
d.Ca = function (a) {
  this.Rb.Ca(a);
  ce(a, 1) || le(a, 1, 1);
  this.Oa || ((a = this.jb()), ld(Hd(a, 5)) || ke(a, 5, this.locale));
  this.Qc && ((a = this.jb()), y(a, Ts, 9) || A(a, Ts, 9, this.Qc));
};
d.ub = function (a) {
  this.jb().ub(a);
};
d.wb = function (a) {
  Ld(this.wa(), Vs, 11) && this.ib().wb(a);
};
function Yt(a, b) {
  Ld(a.wa(), Vs, 11) && ((a = a.ib()), ie(a, 2, b));
}
d.le = function (a) {
  Ld(this.wa(), Vs, 11) && this.ib().le(a);
};
d.je = function (a) {
  Ld(this.wa(), Vs, 11) && this.ib().je(a);
};
d.ie = function (a) {
  Ld(this.wa(), Vs, 11) && this.ib().ie(a);
};
d.wa = function () {
  return this.Rb.rd();
};
function au(a, b) {
  var c = void 0 === c ? Xs : c;
  b(window, c)
    .then(function (e) {
      a.Qc = e;
      e = a.jb();
      A(e, Ts, 9, a.Qc);
      return !0;
    })
    .catch(function () {
      return !1;
    });
}
d.jb = function () {
  var a = this.wa(),
    b = y(a, Vs, 11);
  b || ((b = new Vs()), A(a, Vs, 11, b));
  return b;
};
d.ib = function () {
  var a = this.jb(),
    b = y(a, Qs, 10);
  b || ((b = new Qs()), ie(b, 2, !1), A(a, Qs, 10, b));
  return b;
};
d.sd = function (a) {
  var b = new Ls();
  a = je(b, 13, a);
  b = new Ns();
  a = A(b, Ls, 2, a);
  b = new wt();
  a = A(b, Ns, 1, a);
  return le(a, 2, 9);
};
d.O = function (a, b, c, e, h, k) {
  b = void 0 === b ? 0 : b;
  h = void 0 === h ? 0 : h;
  k = void 0 === k ? 0 : k;
  this.le(void 0 === c ? 0 : c);
  this.je(h);
  this.ie(k);
  c = this.Rb.clone();
  c = Jd(c, 4, Zc(Date.now().toString()));
  a = ae(c, yt, 3, a);
  e && a.Yf(this.sd(e));
  b && D(a, 14, b);
  return a;
};
function bu(a) {
  var b;
  this.kc = (b = void 0 === b ? !1 : b) ? null : a;
  this.Wa = b ? a : null;
  this.I = Ll(Ml(), "rocket.impressions.ClearcutTransport").N;
}
bu.prototype.tb = function (a) {
  var b = this.Wa ? this.Wa.xg.bind(this.Wa) : this.kc.log.bind(this.kc),
    c = this.Wa ? this.Wa.flush.bind(this.Wa) : this.kc.flush.bind(this.kc);
  a = zt(new yt(), a.B());
  b(a);
  return new Mr(
    function (e) {
      var h = this;
      c(e, function (k, n) {
        var q = h.I;
        q && Nl(q, Al, "Impressions Clearcut flush failed with " + k + " (error code: " + (n + ")"));
        e();
      });
    }.bind(this)
  );
};
function cu() {}
cu.prototype.tb = function () {};
function du(a) {
  W.call(this, a);
}
g(du, W);
du.prototype.ud = function () {
  return ge(this);
};
du.prototype.ce = function (a) {
  le(this, 2, a);
};
du.j = "docs.diagnostics.impressions.HighFrequencyDetails";
var eu = [0, J, T];
du.makeCrossSerializerComparisonsCompatible = X(du, eu);
function fu() {
  Vp.call(this);
}
g(fu, Vp);
fu.prototype.ud = function () {
  return Ta(ge(y(this.i, du, 7)));
};
fu.prototype.Ye = function () {
  return Ta(fe(y(Xp(this.i), mm, 2), 2));
};
fu.prototype.Wb = function (a) {
  y(Xp(this.i), mm, 2).Wb(a);
};
fu.prototype.ce = function (a) {
  y(this.i, du, 7).ce(a);
};
var gu = new lm("high_frequency_builder");
function hu(a, b, c) {
  a = new fs(a);
  Wi(c, a);
  var e = new hl(c);
  Wi(c, e);
  e.listen(a, "tick", b);
  a.start();
}
function iu() {
  Vp.call(this);
}
g(iu, Vp);
function ju(a, b, c) {
  var e = 1e3 * Date.now();
  if (0 == b) {
    b = new qm();
    var h = new om().be(e);
    A(b, om, 1, h);
    le(b, 3, 1);
    A(a.i, qm, 8, b);
    a.i.Oc(c);
    D(a.i, 13, c);
    a.i.be(e);
    D(a.i, 3, c);
  } else if (1 == b)
    (b = new qm()), (h = new mm()), (e = D(h, 1, e)), A(b, mm, 2, e), le(b, 3, 2), A(a.i, qm, 8, b), a.i.Oc(c), D(a.i, 3, c);
  else throw Error("Invalid TimingType was specified");
  return a;
}
iu.prototype.vb = function (a) {
  this.i.vb(a);
  return this;
};
var ku = new lm("system_builder");
function lu(a, b, c) {
  Z.call(this);
  this.o = a;
  this.fa = b;
  this.lc = c;
  this.P = {};
  this.Cd();
}
g(lu, Z);
d = lu.prototype;
d.Cd = function () {
  hu(6e4, this.Le, this);
};
d.ba = function (a) {
  mu(this.o, "create new impression builder");
  return Wp(this.o.ba(a), gu);
};
d.ca = function () {
  return this.o.ca();
};
d.Ta = function (a) {
  mu(this.o, "record impressions");
  var b = a.ka();
  m(null != this.lc[b], "An impression that is not of the high-frequency kind cannot be recorded with the HighFrequencyRecorder");
  a = Wp(a, gu);
  if ((b = this.P[b])) {
    var c = a;
    var e = b.ud();
    nu(this, b) ? (c = 4) : 32768 <= e ? (c = 5) : ((e = b.ka()), (c = this.lc[e].ck(b, c) ? 7 : null));
    if (c) ou(this, b, c);
    else
      return (
        (c = y(b.i, du, 7)),
        (e = b.ud() + 1),
        Jd(c, 1, null == e ? e : hd(e)),
        b.Wb(1e3 * Date.now()),
        (c = b.ka()),
        this.lc[c].ek(b, a),
        pu(b)
      );
  }
  b = a;
  ju(Wp(b, ku), 1, this.o.Fc++);
  m(!Ld(b.i, du, 7));
  c = new du();
  c = Jd(c, 1, hd(1));
  A(b.i, du, 7, c);
  c = m(fe(y(Xp(b.i), mm, 2), 1));
  b.Wb(c);
  qu(this.o, b);
  c = b.ka();
  this.P[c] = b;
  return pu(a);
};
d.ia = function () {
  throw Error("RecorderImpl should end the session, not HFRecorder.");
};
d.Da = function () {
  throw Error("RecorderImpl should start the session, not HFRecorder.");
};
d.ta = function () {
  this.Le();
  this.fa.Lc();
  return Ur(Array.from(this.fa.Ic)).then();
};
d.Y = function () {
  return this.o.Y();
};
function pu(a) {
  a = a.i;
  m(null !== a);
  return new km(a);
}
function nu(a, b) {
  var c = b.ka(),
    e = 1e3 * Date.now();
  b = b.Ye();
  a = m(a.lc[c]).Ij;
  return e - b >= a;
}
function ou(a, b, c) {
  b.ce(c);
  c = a.o;
  m(2 == ce(Xp(b.i), 3), "Cannot end impressions that are not elapsed");
  var e = Wp(b, ku),
    h = c.Fc++;
  y(Xp(e.i), mm, 2).Wb(1e3 * Date.now());
  D(e.i, 13, h);
  c.Kd.remove(m(b.i.wd()));
  ru(a.o, b);
  c = a.fa;
  3 <= c.o.W.Hb() && c.zb.fb();
  b = b.ka();
  delete a.P[b];
}
d.Le = function () {
  for (var a in this.P) {
    var b = this.P[Number(a)];
    nu(this, b) && ou(this, b, 4);
  }
};
function su(a, b) {
  if (b && a in b) return a;
  var c = vb ? "Webkit" : ub ? "Moz" : tb ? "ms" : null;
  return c ? ((c = c.toLowerCase()), (a = c + Hi(a)), void 0 === b || a in b ? a : null) : null;
}
function tu(a, b) {
  Xi.call(this, "visibilitychange");
  this.hidden = a;
  this.visibilityState = b;
}
g(tu, Xi);
var uu = new WeakMap();
function vu(a) {
  function b(k) {
    var n = ka(k);
    k = n.next().value;
    n = la(n);
    return a.apply(k, n);
  }
  function c(k) {
    k = ka(k);
    k.next();
    k = la(k);
    return e(h, k);
  }
  var e = void 0 === e ? wu : e;
  var h = Da(a);
  return function () {
    var k = va.apply(0, arguments),
      n = this || l,
      q = uu.get(n);
    q || ((q = {}), uu.set(n, q));
    return sb(q, [this].concat(ma(k)), b, c);
  };
}
function wu(a, b) {
  a = [a];
  for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
  return a.join("\v");
}
function xu(a) {
  el.call(this);
  a || (a = Oa || (Oa = new xr()));
  this.bb = a;
  if ((this.Se = this.Cg())) this.yg = lj(this.bb.F, this.Se, Ia(this.Eg, this));
}
La(xu, el);
d = xu.prototype;
d.Cg = vu(function () {
  var a = this.isSupported(),
    b = "hidden" != this.tc();
  return a ? (b ? (((vb ? "Webkit" : ub ? "Moz" : tb ? "ms" : null) || "") + "visibilitychange").toLowerCase() : "visibilitychange") : null;
});
d.tc = vu(function () {
  return su("hidden", this.bb.F);
});
d.Dg = vu(function () {
  return su("visibilityState", this.bb.F);
});
d.isSupported = function () {
  return !!this.tc();
};
d.Eg = function () {
  var a = this.isSupported() ? this.bb.F[this.Dg()] : null;
  a = new tu(!!this.bb.F[this.tc()], a);
  this.dispatchEvent(a);
};
d.A = function () {
  uj(this.yg);
  xu.pa.A.call(this);
};
function yu(a, b) {
  Z.call(this);
  this.m = a;
  this.Tc = new xu(b);
  Wi(this, this.Tc);
  this.pc = new hl(this);
  Wi(this, this.pc);
  this.Tc.isSupported() && this.pc.listen(this.Tc, "visibilitychange", this.Pg);
}
g(yu, Z);
yu.prototype.Pg = function () {
  if (this.m.Y()) {
    var a = this.Tc;
    a = !!a.bb.F[a.tc()];
    a = this.m.ba(a ? 102001 : 102e3, 0);
    this.m.Ta(a);
  }
};
function zu(a, b, c) {
  c = void 0 === c ? !1 : c;
  Z.call(this);
  this.o = a;
  this.fa = b;
  Wi(this, this.fa);
  this.hd = c;
  this.Hc = null;
}
g(zu, Z);
d = zu.prototype;
d.Ta = function (a) {
  mu(this.o, "record impressions");
  a = ru(this.o, a);
  var b = this.fa;
  3 <= b.o.W.Hb() && b.zb.fb();
  return new km(a);
};
d.ba = function (a, b) {
  mu(this.o, "create new impression builder");
  a = ju(this.o.ba(a), b, this.o.Fc++);
  1 == b && qu(this.o, a);
  return a;
};
d.ca = function () {
  return this.o.ca();
};
d.ia = function () {
  mu(this.o, "end the session");
  var a = this.fa;
  if (!a.oc || a.o.yd) {
    var b = Au(a.o, 691).O();
    b = Bu(a.o, [b]);
    a.cb.tb(b);
  }
  a.Lc();
  this.o.ia();
  this.Hc && (Vi(this.Hc), (this.Hc = null));
};
d.Da = function () {
  this.o.Da();
  this.fa.initialize();
  this.fa.zb.fb();
  this.hd && (this.Hc = new yu(this));
};
d.ta = function () {
  this.fa.Lc();
  return Ur(Array.from(this.fa.Ic)).then();
};
d.Y = function () {
  return this.o.Y();
};
function Cu(a, b, c) {
  Z.call(this);
  this.m = a;
  Wi(this, this.m);
  this.Lb = b;
  Wi(this, this.Lb);
  this.lb = c;
}
g(Cu, Z);
d = Cu.prototype;
d.Ta = function (a) {
  var b = a.ka();
  return (this.lb[b] ? this.Lb : this.m).Ta(a);
};
d.ba = function (a, b) {
  return (this.lb[a] ? this.Lb : this.m).ba(a, b);
};
d.ca = function () {
  return this.m.ca();
};
d.ia = function () {
  var a = this.Lb,
    b;
  for (b in a.P) ou(a, a.P[Number(b)], 3);
  return this.m.ia();
};
d.Da = function () {
  return this.m.Da();
};
d.ta = function () {
  return this.Lb.ta();
};
d.Y = function () {
  return this.m.Y();
};
function Du(a, b, c) {
  Z.call(this);
  this.Qb = null != c ? a.bind(c) : a;
  this.ya = b;
  this.fc = null;
  this.xb = !1;
  this.Tb = 0;
  this.C = null;
}
g(Du, Z);
d = Du.prototype;
d.fb = function (a) {
  this.fc = arguments;
  this.C || this.Tb ? (this.xb = !0) : this.ab();
};
d.stop = function () {
  this.C && (l.clearTimeout(this.C), (this.C = null), (this.xb = !1), (this.fc = null));
};
d.pause = function () {
  this.Tb++;
};
d.resume = function () {
  this.Tb--;
  this.Tb || !this.xb || this.C || ((this.xb = !1), this.ab());
};
d.A = function () {
  Z.prototype.A.call(this);
  this.stop();
};
d.ab = function () {
  var a = this;
  this.C = gs(function () {
    a.C = null;
    a.xb && !a.Tb && ((a.xb = !1), a.ab());
  }, this.ya);
  var b = this.fc;
  this.fc = null;
  this.Qb.apply(null, b);
};
function Eu(a, b, c, e, h) {
  Z.call(this);
  this.o = a;
  this.Ab = b;
  this.cb = c;
  this.zb = new Du(this.Lc, 3e3, this);
  this.Ic = new Set();
  this.oc = e;
  this.Ad = h || 6e4;
  Ka(function () {});
}
g(Eu, Z);
Eu.prototype.initialize = function () {
  hu(this.Ad, this.zb.fb, this.zb);
  hu(36e5, this.Hg, this);
};
Eu.prototype.Lc = function () {
  var a = this;
  if (0 != this.o.W.Hb() && (!this.oc || this.o.yd)) {
    var b = Fu(this.o),
      c = this.Ab.tb(b);
    c &&
      (Wr(c, function () {
        return void a.Ic.delete(m(c));
      }),
      this.Ic.add(c));
  }
};
Eu.prototype.Hg = function () {
  var a = this.o,
    b = Au(a, 1153).O();
  a.W.add(b);
  this.zb.fb();
};
function Gu(a) {
  Z.call(this);
  this.m = a;
  Wi(this, this.m);
}
g(Gu, Z);
d = Gu.prototype;
d.Ta = function (a) {
  a = this.m.Ta(a);
  this.ta();
  return a;
};
d.ba = function (a, b) {
  return this.m.ba(a, b);
};
d.ca = function () {
  return this.m.ca();
};
d.ia = function () {
  return this.m.ia();
};
d.Da = function () {
  return this.m.Da();
};
d.ta = function () {
  return this.m.ta();
};
d.Y = function () {
  return this.m.Y();
};
var Hu = l.window ? [l.window, l.window.opener, l.window.parent] : [];
function Iu() {
  m(!0, "RippleTransport can only be used in DEBUG mode");
  this.Pd = this.nf = !1;
  this.na = null;
  this.Ke = this.Je = 0;
  this.sf = !0;
  for (var a = 0; a < Hu.length; a++) {
    var b = Hu[a];
    if (b && b.chrome && b.chrome.runtime && b.chrome.runtime.connect) {
      this.nf = !0;
      this.Cd(b);
      break;
    }
  }
}
Iu.prototype.Cd = function (a) {
  var b = this;
  this.na = a.chrome.runtime.connect("ciiamoeghmklpofjbocenebdfbgjapaa");
  this.Pd = !0;
  this.na.onDisconnect.addListener(function () {
    b.Pd = !1;
  });
  this.sf &&
    document.addEventListener("mousemove", function (c) {
      b.Je = c.clientX;
      b.Ke = c.clientY;
    });
};
Iu.prototype.tb = function (a) {
  if (this.nf && this.Pd) {
    var b = y(a, uq, 2) || new uq(),
      c = a.ca() || new mr(),
      e = a.rd() || new qq();
    a = $d(a, Ju, 1);
    a = ka(a);
    for (var h = a.next(); !h.done; h = a.next())
      this.na.postMessage({ detail: { impression: h.value.B(), session_info: b.B(), session_invariants: c.B(), client_info: e.B() } });
    this.sf && document.dispatchEvent(new CustomEvent("ripple", { detail: { clientX: this.Je, clientY: this.Ke } }));
  }
};
function Ku() {}
Ku.prototype.qd = function () {
  return new fu();
};
function Lu() {
  this.zd = {};
  this.Yc = {};
  this.Cb = null;
}
function Mu(a, b, c) {
  m(!a.zd[b.getId()], "Factory is already registered");
  a.zd[b.getId()] = c;
}
function Nu() {
  this.W = [];
}
Nu.prototype.add = function (a) {
  this.W.push(a);
};
Nu.prototype.Hb = function () {
  return this.W.length;
};
function Ou() {
  this.P = {};
}
Ou.prototype.add = function (a) {
  m(2 == ce(Xp(a.i), 3));
  var b = m(a.i.wd());
  m(null == this.P[b]);
  this.P[b] = a;
};
Ou.prototype.remove = function (a) {
  m(null != this.P[a]);
  delete this.P[a];
};
var Pu = [0, I, -1];
function Ju(a) {
  W.call(this, a);
}
g(Ju, W);
d = Ju.prototype;
d.ka = function () {
  return B(this, 10);
};
d.af = function () {
  return B(this, 10);
};
d.bf = function () {
  return B(this, 10);
};
d.vb = function (a) {
  return D(this, 10, a);
};
d.xd = function () {
  return null != B(this, 10);
};
d.Ze = function () {
  return he(this, 10);
};
d.wd = function () {
  return B(this, 12);
};
d.ef = function () {
  return B(this, 12);
};
d.Oc = function (a) {
  return D(this, 12, a);
};
d.Xe = function () {
  return B(this, 4);
};
d.be = function (a) {
  return D(this, 4, a);
};
d.gb = function () {
  return y(this, Sp, 5);
};
function Xp(a) {
  return y(a, qm, 8);
}
Ju.j = "docs.diagnostics.impressions.Impression";
var Qu = [0, T, -1, I, -1, Tp, I, eu, rm, Up, I, N, I, -1, Pu, I];
Ju.makeCrossSerializerComparisonsCompatible = X(Ju, Qu);
function Ru(a) {
  W.call(this, a, 500);
}
g(Ru, W);
d = Ru.prototype;
d.rd = function () {
  return y(this, qq, 3);
};
d.wa = function () {
  return Yd(this, qq, 3);
};
d.Ca = function (a) {
  A(this, qq, 3, a);
};
d.ee = function (a) {
  A(this, sq, 4, a);
};
d.ca = function () {
  return y(this, mr, 5);
};
d.me = function (a) {
  return A(this, mr, 5, a);
};
Ru.j = "docs.diagnostics.impressions.ImpressionBatch";
Ru.ga = [1];
Ru.makeCrossSerializerComparisonsCompatible = X(Ru, [-500, Q, Qu, vq, rq, tq, nr, N, I, 9091, [-1, {}]]);
function Su(a, b) {
  this.J = a;
  this.G = b;
  this.Fc = 1;
  this.vf = this.Hd = null;
  this.Kd = new Ou();
  this.W = new Nu();
  this.Uf = this.Mc = this.Xd = this.yd = !1;
}
d = Su.prototype;
d.Da = function () {
  var a = Au(this, 716);
  Tu(this, a);
  a = a.O();
  this.W.add(a);
  this.Mc = this.Xd = !0;
};
d.ia = function () {
  this.Mc = !1;
};
d.ba = function (a) {
  if (0 == a) throw Error("Event code missing");
  return Wp(new Vp().initialize(new Ju(), this.G), ku).vb(a);
};
d.ca = function () {
  return this.J;
};
function qu(a, b) {
  m(2 == ce(Xp(b.i), 3), "Cannot track impressions that are not elapsed");
  a.Kd.add(b);
}
function ru(a, b) {
  D(b.i, 6, a.Hd);
  b = b.O();
  a.W.add(b);
  a.yd = !0;
  return b;
}
function Fu(a) {
  var b = a.W,
    c = b.W;
  b.W = [];
  return Bu(a, c);
}
function Bu(a, b) {
  var c = new Ru();
  var e = a.J.oa.clone();
  c = A(c, uq, 2, e);
  e = a.J;
  m(qr(e));
  (e = e.Vb ? e.Vb.clone() : null) && c.me(e);
  (e = Su.prototype.sc(a.J, b)) && c.Ca(e);
  a = a.J.lf.clone();
  c.ee(a);
  ae(c, Ju, 1, b);
  return c;
}
d.sc = function (a, b) {
  for (var c, e, h = b.length - 1; 0 <= h; h--) {
    var k = b[h].gb();
    if (k && y(k, ci, 1)) {
      k = y(k, ci, 1);
      k.gf() && void 0 === c && (c = k.df());
      k = k.We();
      if (void 0 !== k && void 0 === e) {
        e = new jq();
        var n = Sc(Hd(k, 2));
        void 0 !== n && e.eg(n);
        k = Sc(Hd(k, 1));
        void 0 !== k && e.dg(k);
      }
      if (void 0 !== c && void 0 !== e) break;
    }
  }
  a = a.Fa ? a.Fa.clone() : null;
  if (void 0 !== c || void 0 !== e) a || (a = new qq()), void 0 !== c && a.cg(c), void 0 !== e && a.Vf(e);
  return a;
};
function Au(a, b) {
  var c = ju(a.ba(b), 0, a.Fc++);
  var e = a.Kd;
  var h = Object.keys(e.P);
  if (0 == h.length) e = null;
  else {
    for (var k = [], n = 0; n < h.length; n++) {
      var q = Number(h[n]),
        r = e.P[q];
      q = new Un().Oc(q).vb(r.i.Ze());
      k.push(q);
    }
    e = k;
  }
  716 != b && ((h = m(a.Hd)), (b = m(a.vf)), D(c.i, 6, h), (h = new Wn()), (b = D(h, 1, b)), e && ae(b, Un, 2, e), c.gb().ee(b));
  Tu(a, c);
  return c;
}
function Tu(a, b) {
  a.Hd = b.i.ef();
  a.vf = y(Xp(b.i), om, 1).Xe();
}
function mu(a, b) {
  m(a.Xd, "Cannot %s because the session has not been started", b);
  m(a.Mc && !a.Uf, "Cannot %s because the session is not running", b);
}
d.Y = function () {
  return this.Xd && this.Mc && !this.Uf;
};
function Uu() {}
Uu.prototype.qd = function () {
  return new iu();
};
function Vu() {
  this.G = this.J = null;
}
Vu.prototype.me = function (a) {
  this.J = a;
  return this;
};
Vu.prototype.Yb = function (a) {
  this.G = a;
  return this;
};
Vu.prototype.O = function () {
  m(!!this.J, "Session cannot be built unless the %s is set on the builder", "SessionInvariants");
  null == this.G && (this.G = new Lu());
  Mu(this.G, ku, new Uu());
  Mu(this.G, gu, new Ku());
  this.J.Yb(this.G);
  var a = this.G,
    b = this.J.pd();
  m(!a.Cb);
  a.Cb = b;
  b = oi(a.Yc);
  for (var c = 0; c < b.length; c++) b[c].ze(a.Cb);
  return new Su(this.J, this.G);
};
function Wu() {
  this.cb = this.Ab = null;
  this.J = new or();
  this.G = null;
  this.oc = !1;
  this.lb = null;
  this.Qe = !1;
  this.Ad = this.zf = null;
  this.hd = !1;
  this.jg = new Oi();
}
Wu.prototype.Yb = function (a) {
  this.G = a;
  return this;
};
Wu.prototype.Zb = function (a) {
  this.J.Zb(a);
  return this;
};
Wu.prototype.ac = function (a) {
  this.J.ac(a);
  return this;
};
Wu.prototype.O = function () {
  m(qr(this.J));
  var a = new Vu().me(this.J);
  null != this.G && a.Yb(this.G);
  a = a.O();
  if (this.Qe) {
    if (this.zf) var b = this.zf;
    else (b = this.jg), (b = new Pi(new Iu(), b));
    this.cb = this.Ab = b;
  }
  m(!!this.Ab, "Recorder cannot be built unless the %s is set on the builder", "Transport");
  m(!!this.cb, "Recorder cannot be built unless the %s is set on the builder", "EndOfSessionTransport");
  var c = new Eu(a, this.Ab, this.cb, this.oc, this.Ad);
  b = new zu(a, c, this.hd);
  this.lb && ((a = new lu(a, c, this.lb)), (b = new Cu(b, a, this.lb)));
  this.Qe && (b = new Gu(b));
  return b;
};
function Xu() {}
Xu.prototype.send = function (a, b, c) {
  b = void 0 === b ? function () {} : b;
  c = void 0 === c ? function () {} : c;
  rs(
    a.url,
    function (e) {
      e = e.target;
      if (As(e)) {
        try {
          var h = e.h ? e.h.responseText : "";
        } catch (k) {
          Ql(e.I, "Can not get responseText: " + k.message), (h = "");
        }
        b(h);
      } else c(e.getStatus());
    },
    a.requestType,
    a.body,
    a.requestHeaders,
    a.timeoutMillis,
    a.withCredentials
  );
};
function Yu(a, b) {
  Z.call(this);
  this.nb = a;
  this.Ba = b;
  this.wg = "https://play.google.com/log?format=json&hasfast=true";
  this.pg = !1;
  this.nh = !0;
  this.Tf = !1;
  this.Ga = "";
  this.sb = this.vd = this.Wd = !1;
  this.ec = void 0;
  this.network = new Xu();
}
g(Yu, Z);
d = Yu.prototype;
d.ub = function (a) {
  this.Ee = a;
};
d.bg = function (a) {
  this.Ma = a;
};
d.Nc = function (a) {
  this.Ga = a;
};
d.gg = function (a) {
  this.Sa = a;
};
d.Wf = function (a) {
  this.dd = a;
};
d.fg = function (a) {
  this.Ff = a;
};
function Zu(a, b) {
  a.La = b;
}
d.Xf = function (a) {
  this.He = a;
};
d.ve = function () {
  this.Wd = !0;
  return this;
};
d.ue = function () {
  this.vd = !0;
  return this;
};
d.ag = function (a) {
  this.Ue = Math.max(a, 1e3);
};
d.Pe = function () {
  this.lh = !0;
  return this;
};
d.hg = function (a) {
  this.ec = a;
};
d.O = function () {
  var a = new St({
    nb: this.nb,
    La: this.La ? this.La : Mi,
    Ba: this.Ba,
    jh: this.wg,
    Oa: this.Tf,
    Fb: this.pg,
    Pe: this.lh,
    rb: this.rb,
    Ce: this.Ce,
    network: this.network ? this.network : void 0
  });
  Wi(this, a);
  this.nh || (a.fd = !0);
  this.He && a.Xf(this.He);
  this.Ee && a.ub(this.Ee);
  this.Ma && a.bg(this.Ma);
  this.Ga && a.Nc(this.Ga);
  this.Sa && a.gg(this.Sa);
  this.dd && a.Wf(this.dd);
  this.Ff && a.fg(this.Ff);
  this.Wd && (a.ve = this.Wd && a.tf);
  this.vd && (a.ue = this.vd);
  this.Ue && a.ag(this.Ue);
  this.sb && (a.sb = a.tf);
  this.kh && au(a.Z, this.kh);
  this.ec && a.hg(!0);
  this.network.Xb && this.network.Xb(this.nb);
  this.network.dh && this.network.dh(a);
  return a;
};
function $u(a, b, c) {
  fetch(a.url, { method: a.requestType, headers: a.requestHeaders, body: a.body, mode: "cors", credentials: "include" }).then(function (e) {
    e.ok
      ? e.text().then(function (h) {
          b(h);
        })
      : c(e.status);
  });
}
function av() {
  this.Re = !0;
  this.m = null;
  this.Ig = new im();
  new Ag();
  this.Md = [];
}
d = av.prototype;
d.init = function (a) {
  var b = this;
  this.m = a;
  rr(this.m.ca());
  this.m.Da();
  this.Md.forEach(function (c) {
    return c();
  });
  this.Md.length = 0;
  "undefined" !== typeof window &&
    lj(window, "unload", function () {
      b.m.Y() && b.ia();
    });
};
d.Y = function () {};
d.ta = function () {
  this.m && this.m.ta();
};
d.ia = function () {
  this.m && this.m.ia();
};
d.log = function (a, b, c) {
  var e = this;
  if (this.m) {
    var h = this.m.ba(a, 0);
    h = Wp(h, $p);
    jm(this.Ig, Zp(h));
    void 0 !== b && b(h);
    c || this.Re || h.fe(!Cs.td().rf());
    this.m.Ta(h);
    this.Re && this.ta();
  } else
    this.Md.push(function () {
      return e.log(a, b, c);
    });
};
function bv(a) {
  a = cv(a);
  var b = new Wu().Zb(kk).ac(72),
    c = b.Yb,
    e = new Lu();
  Mu(e, $p, new aq());
  var h = ok("n_ugs");
  m(0 <= ib(oi(bq), h));
  var k = ok("n_rs");
  m(0 <= ib(oi(cq), k));
  h = new fq().ne(h).ke(k);
  m(!e.Yc[gq.getId()], "Applier is already registered");
  e.Yc[gq.getId()] = h;
  e.Cb && h.ze(e.Cb);
  b = c.call(b, e);
  a = new bu(a);
  b.Ab = a;
  b.cb = new cu();
  return b.O();
}
function cv(a) {
  var b = !0;
  b = void 0 === b ? !1 : b;
  var c = new Yu(128, "0");
  a &&
    Zu(c, function () {
      return "Bearer " + a();
    });
  b && ((c.Tf = !0), (c.network = { send: $u }));
  return c.O();
}
function dv(a) {
  el.call(this);
  this.da = a;
}
g(dv, el);
function ev(a) {
  chrome.runtime.onInstalled.addListener(function () {
    fv({ contexts: ["page"], id: "defaultItem", title: "Save to Keep" });
    fv({ contexts: ["frame", "link", "video", "audio"], id: "catchAllItem", title: "Save current page to Keep" });
    fv({ contexts: ["selection"], id: "selectionItem", title: "Save selection to Keep" });
    fv({ contexts: ["image"], id: "imageItem", title: "Save image to Keep" });
    fv({ contexts: ["action"], id: "blankNoteItem", title: "New blank note" });
    fv({ contexts: ["action"], id: "openMainAppItem", title: "Go to Keep" });
  });
  chrome.contextMenus.onClicked.addListener(function (b) {
    return gv(a, b);
  });
}
function hv(a, b, c) {
  gm(b.url) ? iv(a, b.id, c) : jv(ob(kv, lv), !1);
}
function iv(a, b, c) {
  switch (c) {
    case 1:
    case 6:
      jv(kv, !1);
      jv(lv, !0);
      break;
    case 2:
    case 4:
    case 3:
    case 5:
      jv(ob(kv, lv), !1);
      break;
    case 0:
      xj(b, "getPopupState", void 0, function (e) {
        iv(a, b, e);
      });
      break;
    default:
      jv(ob(kv, lv), !0);
  }
}
function jv(a, b) {
  kb(a, function (c) {
    chrome.contextMenus.update(c, { enabled: b });
  });
}
function fv(a) {
  chrome.contextMenus.create(a);
}
function gv(a, b, c) {
  var e = b.menuItemId;
  if ("openMainAppItem" == e) chrome.tabs.create({ url: Fi() }), a.da.log(9201);
  else if (c) {
    var h = {};
    switch (e) {
      case "blankNoteItem":
        h.blankNote = !0;
        a.da.log(9194);
        break;
      case "imageItem":
        h.imageUrl = b.srcUrl;
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
    a.dispatchEvent(new wj(c, h));
  } else
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (k) {
      k[0] && gv(a, b, k[0]);
    });
}
var kv = ["blankNoteItem", "catchAllItem", "defaultItem"],
  lv = ["selectionItem", "imageItem"];
function mv() {
  this.Be = new Si();
  this.da = new av();
  this.Db = new dv(this.da);
  this.pc = new hl(this);
}
function nv(a, b, c, e) {
  void 0 === e
    ? ov(b.id, function (h) {
        nv(a, b, c, h);
      })
    : e
    ? xj(b.id, "getSelectedText", void 0, function (h) {
        c = void 0 === c ? {} : c;
        "string" === typeof h && (c.selectedText = h);
        xj(b.id, "updateModel", c);
      })
    : (void 0 === c ? (a.da.log(9205), (c = {})) : a.da.log(9574),
      chrome.scripting.executeScript({ target: { tabId: b.id }, files: ["flags.js", "injector.js"] }, function () {
        var h = c,
          k = new Ej();
        k.update({ title: b.title, url: b.url, faviconUrl: b.favIconUrl });
        h.embedInfo = k.B();
        xj(b.id, "setInitInfo", c);
      }));
}
function ov(a, b) {
  xj(a, "ping", void 0, function (c) {
    return void b("ping" == c);
  });
}
function pv(a, b) {
  "icon_disabled" == b ? chrome.action.disable(a) : chrome.action.enable(a);
  chrome.action.setIcon({ tabId: a, path: { 19: b + "_19.png", 38: b + "_38.png" } }, function () {});
}
function qv(a, b, c, e) {
  if (Ca(b) && c && c.tab) {
    var h = c.tab;
    switch (b.type) {
      case "appLoaded":
        if (!h.id) return;
        xj(h.id, "getInitInfo", void 0, function (k) {
          e(k);
        });
        return !0;
      case "authAvailability":
        b.value &&
          !a.da.Y() &&
          Ti(a.Be, !1, function () {
            a.da.init(
              bv(function () {
                return a.Be.Ae;
              })
            );
          });
        return;
      case "configureContextMenu":
        hv(a.Db, h, b.value);
        return;
    }
    xj(c.tab.id, b.type, b.value, e);
  }
}
function rv() {
  chrome.identity.getAuthToken({ interactive: !1 }, function (a) {
    a &&
      (chrome.identity.removeCachedAuthToken({ token: a }),
      hm(function (b) {
        xj(b.id, "updateAuthToken");
      }));
  });
}
(function () {
  var a = new mv();
  chrome.action.onClicked.addListener(function (b) {
    nv(a, b);
  });
  chrome.runtime.onMessage.addListener(function (b, c, e) {
    return qv(a, b, c, e);
  });
  ev(a.Db);
  chrome.tabs.onUpdated.addListener(function (b, c, e) {
    if (c.status || c.url) gm(e.url) ? pv(b, "icon") : pv(b, "icon_disabled"), e.active && hv(a.Db, e);
  });
  chrome.tabs.onActivated.addListener(function (b) {
    chrome.tabs.get(b.tabId, function (c) {
      hv(a.Db, c, 0);
    });
  });
  a.pc.listen(a.Db, "c", function (b) {
    nv(a, b.tab, b.og);
  });
  chrome.identity.onSignInChanged.addListener(function () {
    rv();
  });
  hm(function (b) {
    var c = b.id;
    gm(b.url) ? pv(c, "icon") : pv(c, "icon_disabled");
  });
  chrome.identity.getProfileUserInfo({ accountStatus: chrome.identity.AccountStatus.ANY }, function (b) {
    b = b.email;
    var c = chrome.runtime.getManifest().short_name;
    chrome.action.setTitle({ title: b ? c + "\n" + b : c });
  });
})();
