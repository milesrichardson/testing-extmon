var m,
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
    this.Qb = f;
    ba(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.Qb;
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
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  },
  ia = function (a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  },
  ja =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        },
  ka;
if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
else {
  var la;
  a: {
    var ma = { a: !0 },
      na = {};
    try {
      na.__proto__ = ma;
      la = na.a;
      break a;
    } catch (a) {}
    la = !1;
  }
  ka = la
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var oa = ka,
  pa = function (a, b) {
    a.prototype = ja(b.prototype);
    a.prototype.constructor = a;
    if (oa) oa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.ma = b.prototype;
  },
  qa = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
ea("WeakMap", function (a) {
  function b() {}
  function c(k) {
    var l = typeof k;
    return ("object" === l && null !== k) || "function" === l;
  }
  function d(k) {
    if (!qa(k, f)) {
      var l = new b();
      ba(k, f, { value: l });
    }
  }
  function e(k) {
    var l = Object[k];
    l &&
      (Object[k] = function (t) {
        if (t instanceof b) return t;
        Object.isExtensible(t) && d(t);
        return l(t);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          l = Object.seal({}),
          t = new a([
            [k, 2],
            [l, 3]
          ]);
        if (2 != t.get(k) || 3 != t.get(l)) return !1;
        t.delete(k);
        t.set(l, 4);
        return !t.has(k) && 4 == t.get(l);
      } catch (C) {
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
        k = ha(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    };
  h.prototype.set = function (k, l) {
    if (!c(k)) throw Error("Invalid WeakMap key");
    d(k);
    if (!qa(k, f)) throw Error("WeakMap key fail: " + k);
    k[f][this.xa] = l;
    return this;
  };
  h.prototype.get = function (k) {
    return c(k) && qa(k, f) ? k[f][this.xa] : void 0;
  };
  h.prototype.has = function (k) {
    return c(k) && qa(k, f) && qa(k[f], this.xa);
  };
  h.prototype.delete = function (k) {
    return c(k) && qa(k, f) && qa(k[f], this.xa) ? delete k[f][this.xa] : !1;
  };
  return h;
});
ea("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = Object.seal({ x: 4 }),
          k = new a(ha([[h, "s"]]));
        if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
        var l = k.entries(),
          t = l.next();
        if (t.done || t.value[0] != h || "s" != t.value[1]) return !1;
        t = l.next();
        return t.done || 4 != t.value[0].x || "t" != t.value[1] || !l.next().done ? !1 : !0;
      } catch (C) {
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
        h = ha(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    };
  c.prototype.set = function (h, k) {
    h = 0 === h ? 0 : h;
    var l = d(this, h);
    l.list || (l.list = this[0][l.id] = []);
    l.entry
      ? (l.entry.value = k)
      : ((l.entry = { next: this[1], previous: this[1].previous, head: this[1], key: h, value: k }),
        l.list.push(l.entry),
        (this[1].previous.next = l.entry),
        (this[1].previous = l.entry),
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
    for (var l = this.entries(), t; !(t = l.next()).done; ) (t = t.value), h.call(k, t[1], t[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, k) {
      var l = k && typeof k;
      "object" == l || "function" == l ? (b.has(k) ? (l = b.get(k)) : ((l = "" + ++g), b.set(k, l))) : (l = "p_" + k);
      var t = h[0][l];
      if (t && qa(h[0], l))
        for (h = 0; h < t.length; h++) {
          var C = t[h];
          if ((k !== k && C.key !== C.key) || k === C.key) return { id: l, list: t, index: h, entry: C };
        }
      return { id: l, list: t, index: -1, entry: void 0 };
    },
    e = function (h, k) {
      var l = h[1];
      return fa(function () {
        if (l) {
          for (; l.head != h[1]; ) l = l.previous;
          for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
          l = null;
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
var ra =
  "function" == typeof Object.assign
    ? Object.assign
    : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (d) for (var e in d) qa(d, e) && (a[e] = d[e]);
        }
        return a;
      };
ea("Object.assign", function (a) {
  return a || ra;
});
ea("Number.isFinite", function (a) {
  return a
    ? a
    : function (b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
      };
});
var sa = function (a, b) {
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
        return sa(this, function (b, c) {
          return c;
        });
      };
});
ea("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return sa(this, function (b) {
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
        return sa(this, function (b, c) {
          return [b, c];
        });
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ta = this || self,
  ua = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  va = function (a) {
    var b = ua(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  wa = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  xa = function (a, b, c) {
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
  ya = function (a, b, c) {
    ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
    return ya.apply(null, arguments);
  },
  n = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  },
  za = function (a, b) {
    a = a.split(".");
    var c = ta;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  },
  Aa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ma = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.zd = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  };
function Ba(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ba);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
Aa(Ba, Error);
Ba.prototype.name = "CustomError";
function Ca(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  Ba.call(this, c + a[d]);
}
Aa(Ca, Ba);
Ca.prototype.name = "AssertionError";
function Da(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new Ca("" + e, f || []);
}
var p = function (a, b, c) {
    a || Da("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  Ea = function (a, b) {
    throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  Fa = function (a, b, c) {
    "number" !== typeof a && Da("Expected number but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ga = function (a, b, c) {
    "string" !== typeof a && Da("Expected string but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  Ha = function (a, b, c) {
    Array.isArray(a) || Da("Expected array but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  Ia = function (a, b, c) {
    "boolean" !== typeof a && Da("Expected boolean but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  La = function (a, b, c, d) {
    a instanceof b || Da("Expected instanceof %s but got %s.", [Ja(b), Ja(a)], c, Array.prototype.slice.call(arguments, 3));
    return a;
  };
function Ja(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
var Ma = Array.prototype.indexOf
    ? function (a, b) {
        p(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  Na = Array.prototype.forEach
    ? function (a, b, c) {
        p(null != a.length);
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
      };
function Oa(a, b) {
  for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
}
var Pa = Array.prototype.filter
    ? function (a, b) {
        p(null != a.length);
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
  Qa = Array.prototype.some
    ? function (a, b, c) {
        p(null != a.length);
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      };
function Ra(a, b, c) {
  var d = 0;
  Na(
    a,
    function (e, f, g) {
      b.call(c, e, f, g) && ++d;
    },
    c
  );
  return d;
}
function Sa(a, b) {
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
function Ta(a, b) {
  return 0 <= Ma(a, b);
}
function Ua(a, b) {
  b = Ma(a, b);
  var c;
  if ((c = 0 <= b)) p(null != a.length), Array.prototype.splice.call(a, b, 1);
  return c;
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
function Wa(a, b, c, d) {
  p(null != a.length);
  Array.prototype.splice.apply(a, Xa(arguments, 1));
}
function Xa(a, b, c) {
  p(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
function Ya(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function Za(a, b, c) {
  c = c || Ya;
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
  0 > h && Wa(a, -(h + 1), 0, b);
}
function $a(a, b) {
  for (var c = {}, d = 0; d < a.length; d++) {
    var e = a[d],
      f = b.call(void 0, e, d, a);
    void 0 !== f && (c[f] || (c[f] = [])).push(e);
  }
  return c;
}
var ab = function (a) {
    return function () {
      return a;
    };
  },
  bb = function () {
    return !1;
  },
  q = function () {
    return !0;
  },
  cb = function () {
    return null;
  };
var db = !1,
  gb = function () {
    if (!db) {
      for (var a in eb) fb[a] = eb[a];
      db = !0;
    }
  },
  fb = {
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
  eb = {
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
function hb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function ib(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return !0;
  return !1;
}
function jb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function lb(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < kb.length; f++) (c = kb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function mb(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return mb.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
var nb = function (a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  },
  ob = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
var qb = function (a) {
  if (pb !== pb) throw Error("SafeUrl is not meant to be built directly");
  this.Dc = a;
};
qb.prototype.toString = function () {
  return this.Dc.toString();
};
var pb = {};
new qb("about:invalid#zClosurez");
new qb("about:blank");
var rb = {},
  sb = function () {
    if (rb !== rb) throw Error("SafeStyle is not meant to be built directly");
    this.Cc = "";
  };
sb.prototype.toString = function () {
  return this.Cc.toString();
};
new sb();
var tb = {},
  ub = function () {
    if (tb !== tb) throw Error("SafeStyleSheet is not meant to be built directly");
    this.Bc = "";
  };
ub.prototype.toString = function () {
  return this.Bc.toString();
};
new ub();
var vb = {},
  wb = function () {
    var a = (ta.trustedTypes && ta.trustedTypes.emptyHTML) || "";
    if (vb !== vb) throw Error("SafeHtml is not meant to be built directly");
    this.Ac = a;
  };
wb.prototype.toString = function () {
  return this.Ac.toString();
};
new wb();
var r = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  xb = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a;
  },
  yb = String.prototype.repeat
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
    return d + yb("0", Math.max(0, b - c)) + a;
  };
var zb = function (a) {
    if (a.la && "function" == typeof a.la) return a.la();
    if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (va(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return jb(a);
  },
  Ab = function (a) {
    if (a.ka && "function" == typeof a.ka) return a.ka();
    if (!a.la || "function" != typeof a.la) {
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
  Bb = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (va(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = Ab(a), e = zb(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  };
var Cb = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  Db = function (a, b) {
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
var Eb = function (a) {
  this.R = this.oa = this.Z = "";
  this.sa = null;
  this.ia = this.A = "";
  this.T = this.uc = !1;
  if (a instanceof Eb) {
    this.T = a.T;
    Fb(this, a.Z);
    var b = a.oa;
    v(this);
    this.oa = b;
    b = a.R;
    v(this);
    this.R = b;
    Gb(this, a.sa);
    b = a.A;
    v(this);
    this.A = b;
    Hb(this, a.v.clone());
    a = a.ia;
    v(this);
    this.ia = a;
  } else
    a && (b = String(a).match(Cb))
      ? ((this.T = !1),
        Fb(this, b[1] || "", !0),
        (a = b[2] || ""),
        v(this),
        (this.oa = Ib(a)),
        (a = b[3] || ""),
        v(this),
        (this.R = Ib(a, !0)),
        Gb(this, b[4]),
        (a = b[5] || ""),
        v(this),
        (this.A = Ib(a, !0)),
        Hb(this, b[6] || "", !0),
        (a = b[7] || ""),
        v(this),
        (this.ia = Ib(a)))
      : ((this.T = !1), (this.v = new Jb(null, this.T)));
};
Eb.prototype.toString = function () {
  var a = [],
    b = this.Z;
  b && a.push(Kb(b, Lb, !0), ":");
  var c = this.R;
  if (c || "file" == b)
    a.push("//"),
      (b = this.oa) && a.push(Kb(b, Lb, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.sa),
      null != c && a.push(":", String(c));
  if ((c = this.A)) this.R && "/" != c.charAt(0) && a.push("/"), a.push(Kb(c, "/" == c.charAt(0) ? Mb : Nb, !0));
  (c = this.v.toString()) && a.push("?", c);
  (c = this.ia) && a.push("#", Kb(c, Ob));
  return a.join("");
};
Eb.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.Z;
  c ? Fb(b, a.Z) : (c = !!a.oa);
  if (c) {
    var d = a.oa;
    v(b);
    b.oa = d;
  } else c = !!a.R;
  c ? ((d = a.R), v(b), (b.R = d)) : (c = null != a.sa);
  d = a.A;
  if (c) Gb(b, a.sa);
  else if ((c = !!a.A)) {
    if ("/" != d.charAt(0))
      if (this.R && !this.A) d = "/" + d;
      else {
        var e = b.A.lastIndexOf("/");
        -1 != e && (d = b.A.slice(0, e + 1) + d);
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
  c ? (v(b), (b.A = d)) : (c = "" !== a.v.toString());
  c ? Hb(b, a.v.clone()) : (c = !!a.ia);
  c && ((a = a.ia), v(b), (b.ia = a));
  return b;
};
Eb.prototype.clone = function () {
  return new Eb(this);
};
var Fb = function (a, b, c) {
    v(a);
    a.Z = c ? Ib(b, !0) : b;
    a.Z && (a.Z = a.Z.replace(/:$/, ""));
  },
  Gb = function (a, b) {
    v(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.sa = b;
    } else a.sa = null;
  },
  Hb = function (a, b, c) {
    v(a);
    b instanceof Jb ? ((a.v = b), a.v.gb(a.T)) : (c || (b = Kb(b, Pb)), (a.v = new Jb(b, a.T)));
  };
Eb.prototype.getQuery = function () {
  return this.v.toString();
};
var Qb = function (a, b) {
  return a.v.get(b);
};
Eb.prototype.removeParameter = function (a) {
  v(this);
  this.v.remove(a);
  return this;
};
var v = function (a) {
  if (a.uc) throw Error("Tried to modify a read-only Uri");
};
Eb.prototype.gb = function (a) {
  this.T = a;
  this.v && this.v.gb(a);
};
var w = function (a) {
    return a instanceof Eb ? a.clone() : new Eb(a);
  },
  Ib = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Kb = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, Rb)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  Rb = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  Lb = /[#\/\?@]/g,
  Nb = /[#\?:]/g,
  Mb = /[#\?]/g,
  Pb = /[#\?@]/g,
  Ob = /#/g,
  Jb = function (a, b) {
    this.N = this.B = null;
    this.S = a || null;
    this.T = !!b;
  },
  Sb = function (a) {
    a.B ||
      ((a.B = new Map()),
      (a.N = 0),
      a.S &&
        Db(a.S, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
Jb.prototype.add = function (a, b) {
  Sb(this);
  this.S = null;
  a = Tb(this, a);
  var c = this.B.get(a);
  c || this.B.set(a, (c = []));
  c.push(b);
  this.N = Fa(this.N) + 1;
  return this;
};
Jb.prototype.remove = function (a) {
  Sb(this);
  a = Tb(this, a);
  return this.B.has(a) ? ((this.S = null), (this.N = Fa(this.N) - this.B.get(a).length), this.B.delete(a)) : !1;
};
Jb.prototype.clear = function () {
  this.B = this.S = null;
  this.N = 0;
};
Jb.prototype.yb = function () {
  Sb(this);
  return 0 == this.N;
};
var Ub = function (a, b) {
  Sb(a);
  b = Tb(a, b);
  return a.B.has(b);
};
m = Jb.prototype;
m.forEach = function (a, b) {
  Sb(this);
  this.B.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
m.ka = function () {
  Sb(this);
  for (var a = Array.from(this.B.values()), b = Array.from(this.B.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
m.la = function (a) {
  Sb(this);
  var b = [];
  if ("string" === typeof a) Ub(this, a) && (b = b.concat(this.B.get(Tb(this, a))));
  else {
    a = Array.from(this.B.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
m.set = function (a, b) {
  Sb(this);
  this.S = null;
  a = Tb(this, a);
  Ub(this, a) && (this.N = Fa(this.N) - this.B.get(a).length);
  this.B.set(a, [b]);
  this.N = Fa(this.N) + 1;
  return this;
};
m.get = function (a, b) {
  if (!a) return b;
  a = this.la(a);
  return 0 < a.length ? String(a[0]) : b;
};
m.toString = function () {
  if (this.S) return this.S;
  if (!this.B) return "";
  for (var a = [], b = Array.from(this.B.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.la(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return (this.S = a.join("&"));
};
m.clone = function () {
  var a = new Jb();
  a.S = this.S;
  this.B && ((a.B = new Map(this.B)), (a.N = this.N));
  return a;
};
var Tb = function (a, b) {
  b = String(b);
  a.T && (b = b.toLowerCase());
  return b;
};
Jb.prototype.gb = function (a) {
  a &&
    !this.T &&
    (Sb(this),
    (this.S = null),
    this.B.forEach(function (b, c) {
      var d = c.toLowerCase();
      if (c != d && (this.remove(c), this.remove(d), 0 < b.length)) {
        this.S = null;
        c = this.B;
        var e = c.set;
        d = Tb(this, d);
        var f = b.length;
        if (0 < f) {
          for (var g = Array(f), h = 0; h < f; h++) g[h] = b[h];
          f = g;
        } else f = [];
        e.call(c, d, f);
        this.N = Fa(this.N) + b.length;
      }
    }, this));
  this.T = a;
};
Jb.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Bb(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var Vb = function () {
    this.Gb = Date.now();
  },
  Wb = null;
Vb.prototype.set = function (a) {
  this.Gb = a;
};
Vb.prototype.reset = function () {
  this.set(Date.now());
};
Vb.prototype.get = function () {
  return this.Gb;
};
var Xb = function (a, b) {
  this.name = a;
  this.value = b;
};
Xb.prototype.toString = function () {
  return this.name;
};
var Yb = new Xb("OFF", Infinity),
  Zb = new Xb("SEVERE", 1e3),
  $b = new Xb("WARNING", 900),
  ac = new Xb("INFO", 800),
  bc = new Xb("CONFIG", 700),
  cc = function () {
    this.Ba = 0;
    this.clear();
  },
  dc;
cc.prototype.clear = function () {
  this.pb = Array(this.Ba);
  this.rb = -1;
  this.zb = !1;
};
var ec = function (a, b, c) {
  this.Da = void 0;
  this.reset(a || Yb, b, c, void 0, void 0);
};
ec.prototype.reset = function (a, b, c, d) {
  this.Ob = d || Date.now();
  this.Ab = a;
  this.yc = b;
  this.Cb = c;
  this.Da = void 0;
};
ec.prototype.getMessage = function () {
  return this.yc;
};
var fc = function (a, b) {
    this.level = null;
    this.vb = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.Bb = {
      Ha: function () {
        return a;
      }
    };
  },
  gc = function (a) {
    if (a.level) return a.level;
    if (a.parent) return gc(a.parent);
    Ea("Root logger has no level set.");
    return Yb;
  };
fc.prototype.publish = function (a) {
  for (var b = this; b; )
    b.vb.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var hc = function () {
    this.entries = {};
    var a = new fc("");
    a.level = bc;
    this.entries[""] = a;
  },
  ic,
  jc = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = jc(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new fc(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  kc = function () {
    ic || (ic = new hc());
    return ic;
  },
  mc = function (a) {
    var b = lc;
    if (b) {
      var c = a,
        d = ac;
      if ((a = b))
        if ((a = b && d)) {
          a = d.value;
          var e = b ? gc(jc(kc(), b.Ha())) : Yb;
          a = a >= e.value;
        }
      if (a) {
        d = d || Yb;
        a = jc(kc(), b.Ha());
        "function" === typeof c && (c = c());
        dc || (dc = new cc());
        e = dc;
        b = b.Ha();
        if (0 < e.Ba) {
          var f = (e.rb + 1) % e.Ba;
          e.rb = f;
          e.zb ? ((e = e.pb[f]), e.reset(d, c, b), (b = e)) : ((e.zb = f == e.Ba - 1), (b = e.pb[f] = new ec(d, c, b)));
        } else b = new ec(d, c, b);
        b.Da = void 0;
        a.publish(b);
      }
    }
  };
var nc = function (a) {
  this.zc = a || "";
  Wb || (Wb = new Vb());
  this.Mc = Wb;
};
m = nc.prototype;
m.nb = !0;
m.Ib = !0;
m.Jc = !0;
m.Ic = !0;
m.Jb = !1;
m.Kc = !1;
var oc = function (a) {
    return 10 > a ? "0" + a : String(a);
  },
  pc = function (a) {
    nc.call(this, a);
  };
Aa(pc, nc);
var qc = function (a, b) {
  var c = [];
  c.push(a.zc, " ");
  if (a.Ib) {
    var d = new Date(b.Ob);
    c.push(
      "[",
      oc(d.getFullYear() - 2e3) +
        oc(d.getMonth() + 1) +
        oc(d.getDate()) +
        " " +
        oc(d.getHours()) +
        ":" +
        oc(d.getMinutes()) +
        ":" +
        oc(d.getSeconds()) +
        "." +
        oc(Math.floor(d.getMilliseconds() / 10)),
      "] "
    );
  }
  if (a.Jc) {
    d = c.push;
    var e = a.Mc.get();
    e = (b.Ob - e) / 1e3;
    var f = e.toFixed(3),
      g = 0;
    if (1 > e) g = 2;
    else for (; 100 > e; ) g++, (e *= 10);
    for (; 0 < g--; ) f = " " + f;
    d.call(c, "[", f, "s] ");
  }
  a.Ic && c.push("[", b.Cb, "] ");
  a.Kc && c.push("[", b.Ab.name, "] ");
  c.push(b.getMessage());
  a.Jb && ((b = b.Da), void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
  a.nb && c.push("\n");
  return c.join("");
};
var rc = function () {
  this.Ec = ya(this.mc, this);
  this.Ga = new pc();
  this.Ga.Ib = !1;
  this.Ga.Jb = !1;
  this.xb = this.Ga.nb = !1;
  this.tc = {};
};
rc.prototype.mc = function (a) {
  function b(f) {
    if (f) {
      if (f.value >= Zb.value) return "error";
      if (f.value >= $b.value) return "warn";
      if (f.value >= bc.value) return "log";
    }
    return "debug";
  }
  if (!this.tc[a.Cb]) {
    var c = qc(this.Ga, a),
      d = sc;
    if (d) {
      var e = b(a.Ab);
      tc(d, e, c, a.Da);
    }
  }
};
var sc = ta.console,
  tc = function (a, b, c, d) {
    if (a[b]) a[b](c, void 0 === d ? "" : d);
    else a.log(c, void 0 === d ? "" : d);
  };
var _gaq = _gaq || [];
var lc = null,
  vc = function (a, b) {
    var c = [];
    do {
      var d = uc(a.exec, a, b);
      d && (d.shift(), Va(c, d));
    } while (0 < a.lastIndex);
    return c;
  },
  uc = function (a, b, c) {
    if (c) {
      var d;
      lc && (d = new Date().getTime());
      a = a.call(b, c);
      lc && ((d = new Date().getTime() - d), 1 < d && mc("Dur: " + d + " Text Length: " + c.length + " Matched: " + !!a + " Pattern:" + b));
      return a;
    }
  },
  wc = function (a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
      return a;
    }
  },
  xc = function (a) {
    return "true" == a || "1" == a || "!0" == a;
  },
  x = function (a, b) {
    return uc(a.exec, a, b);
  },
  Ac = function (a, b) {
    var c;
    lc && (c = new Date().getTime());
    try {
      var d = b.replace(/([=+-])\s*\n\s*/g, "$1 "),
        e = yc(d),
        f = zc(e, [";", ",", "\n"], !0),
        g = Sa(f, function (k) {
          return (h = y(new RegExp("^(?:var |(?:\\w*\\.)*)" + a + "\\s*="), k));
        });
      if (g) {
        var h = z(/[^=]*(?:=\s*[a-zA-Z_$][a-zA-Z0-9_$]*)*\s*=\s*(.*)/, g.replace(/\s*\n\s*/g, " "));
        if ("string" === typeof h) return h;
      }
      return !1;
    } finally {
      lc && ((c = new Date().getTime() - c), 1 < c && mc("Extract var " + a + "Dur: " + c + " Text Length: " + b.length + "result: " + h));
    }
  },
  Bc = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = vc(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (b.some(Bc)) return !0;
    for (; y(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return a.split(/\s*,\s*/).some(n(y, /^\s*[_a-zA-Z][_a-zA-Z0-9]*\s*=.*/g));
  },
  Dc = function (a) {
    return Cc(a).some(function (b) {
      return y(/['"]\[.*\]['"]/, b.split(/\s*:\s*/)[1]);
    });
  },
  Ec = function (a) {
    a = a
      .replace(/\\\\/g, "")
      .replace(/\\'/g, "")
      .replace(/\\"/g, "")
      .replace(/"[^"]*"/g, "_")
      .replace(/'[^'']*'/g, "_")
      .replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = vc(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if ((b = b.some(Ec))) return !0;
    for (; y(/[{].*[}]/, a); ) a = a.replace(/[{][^}]*[}]/g, "__");
    return b || (a.match(/:/g) || []).length - 1 > (a.match(/,/g) || []).length;
  },
  Fc = function (a) {
    return !Cc(a).every(function (b) {
      return -1 != b.indexOf(",")
        ? (b = (b = x(/\[(.*)\]/, b)) && 1 < b.length ? b[1] : null)
          ? Cc(b).every(function (c) {
              return -1 == c.indexOf(",");
            })
          : !1
        : !0;
    });
  },
  z = function (a, b, c) {
    c = void 0 !== c ? c : 1;
    return (a = uc(a.exec, a, b)) ? (a.length > c ? a[c] : !0) : !1;
  },
  Gc = function (a, b) {
    for (var c, d = a.length, e = 0; e < d; e++) {
      var f = z(a[e], b);
      if ("string" === typeof f) void 0 === c && (c = f);
      else if ("string" !== typeof f && !f) return !1;
    }
    return void 0 !== c ? c : !0;
  },
  Hc = function (a, b) {
    for (var c = a.length, d = 0; d < c; d++) {
      var e = z(a[d], b);
      if ("string" === typeof e || e) return e;
    }
    return !1;
  },
  A = function (a, b) {
    return z(a, b.url);
  },
  Ic = function (a, b) {
    b || (b = { lastIndex: -1, Mb: zc(a, [";", ",", "\n"], !0), text: "" });
    b.lastIndex++;
    return b.lastIndex < b.Mb.length ? ((b.text = b.Mb[b.lastIndex]), b) : null;
  },
  Jc = function (a, b) {
    return !a.every(function (c) {
      return y(c, b);
    });
  },
  zc = function (a, b, c) {
    var d = b || [";", ","];
    b = b ? 0 : 1;
    var e = { "(": ")", "{": "}", "[": "]" },
      f = void 0,
      g = !1,
      h = [],
      k = [],
      l = 0;
    a = ob(Kc(a));
    var t = a.length,
      C;
    for (C = 0; C < t; C++) {
      var Q = a.charAt(C);
      g
        ? (g = !1)
        : "\\" == Q
        ? (g = !0)
        : f
        ? Q == f && (f = void 0)
        : '"' == Q || "'" == Q
        ? (f = Q)
        : "(" == Q || "{" == Q || "[" == Q
        ? h.push(e[Q])
        : h.length
        ? Q == h[h.length - 1] && h.pop()
        : Ta(d, Q)
        ? ((l = ob(a.substring(l, C + b))), (!l && c) || k.push(l.replace(" *\n *", "")), (l = C + 1))
        : C == l && B[a.charCodeAt(C)] && (l = C + 1);
    }
    l = ob(a.substring(l, C));
    (!l && c) || k.push(l.replace(" *\n *", ""));
    return k;
  },
  Lc = function (a) {
    a = z(/\{(.*)\}/, a) || a;
    return Cc(a).map(function (b) {
      b = b.split(":");
      var c = b.shift();
      c = z(/"(.*)"/, c) || c;
      c = z(/'(.*)'/, c) || c;
      return { key: c, value: b.join(":") };
    });
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
  yc = function (a) {
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
  Cc = function (a) {
    return zc(a, [","]);
  },
  Nc = function () {
    if (Mc("PatternProfiling") && !lc) {
      lc = jc(kc(), "patterns").Bb;
      var a = new rc();
      if (1 != a.xb) {
        var b = jc(kc(), "").Bb,
          c = a.Ec;
        b && jc(kc(), b.Ha()).vb.push(c);
        a.xb = !0;
      }
    } else lc = null;
  },
  Oc = function (a, b) {
    var c = a.split("%s");
    if (1 == c.length) return a;
    for (var d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; ) d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  y = function (a, b) {
    return uc(a.test, a, b);
  },
  Pc = n(y, /^[-+]?(?:\d*\.)?\d+$/),
  Qc = n(y, /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/),
  Rc = function (a, b) {
    return y(a, b.url);
  },
  B = [];
B[9] = !0;
B[10] = !0;
B[11] = !0;
B[12] = !0;
B[13] = !0;
B[32] = !0;
B[133] = !0;
B[160] = !0;
B[5760] = !0;
B[6158] = !0;
B[8192] = !0;
B[8193] = !0;
B[8194] = !0;
B[8195] = !0;
B[8196] = !0;
B[8197] = !0;
B[8198] = !0;
B[8199] = !0;
B[8200] = !0;
B[8201] = !0;
B[8202] = !0;
B[8203] = !0;
B[8232] = !0;
B[8233] = !0;
B[8239] = !0;
B[8287] = !0;
B[12288] = !0;
var Sc = {},
  Tc = {},
  Uc = {},
  Vc = {
    Oc: "AutoOpenRecordings",
    Pc: "categories",
    Qc: "CheckPermissionsLater",
    Uc: "DefaultLevelOfDetail",
    Tc: "DebugIssues",
    Vc: "IgnoreExternalScripts",
    Wc: "FollowLinks",
    Xc: "gaDebug",
    Yc: "GtaPage",
    Zc: "hideRecordingSuggestion",
    bd: "IgnoreExternalScripts",
    cd: "isInSupportTeam",
    dd: "last-checked-for-support-team",
    ed: "LoggedIn",
    gd: "LogInfoTemplate",
    hd: "LogSources",
    fd: "LoggingEnabled",
    jd: "ManualChecks",
    kd: "ManualScriptParsing",
    nd: "NgModeDisabled",
    pd: "PatternProfiling",
    qd: "RecordingTab",
    rd: "GooglePublisherConsole",
    sd: "ShowIgnoredIssues",
    td: "ShowWelcomeScreen",
    yd: "WhiteListedDomains",
    wd: "ValidateAllPages"
  },
  Wc = { DefaultLevelOfDetail: "DefaultLevel" },
  Xc = {
    PROD: "https://analytics.google.com/tagrecordings/",
    PREPROD: "https://analytics-traffic-analysis-preprod.corp.google.com/tagrecordings/",
    INTEGRATION: "https://analytics-traffic-analysis-integration.corp.google.com/tagrecordings/",
    PROTOTYPE: "http://fk3.irv.corp.google.com:10010/"
  },
  cd = function () {
    var a = Yc,
      b = Zc;
    Uc = {};
    void 0 !== chrome && void 0 !== chrome.storage
      ? chrome.storage.local.get(null, function (c) {
          $c(c);
          ad(a, b);
        })
      : Sc["Options initialized to default values."] || (console.log("No chrome storage available."), bd(), a());
  },
  ad = function (a, b) {
    void 0 !== chrome &&
      void 0 !== chrome.storage &&
      (chrome.storage.sync.get(null, function (c) {
        $c(c);
        c["Options initialized to default values."] || bd();
        a();
      }),
      dd(b));
  },
  fd = function (a) {
    var b = Sc[a];
    if (!b && Wc[a] && Sc[Wc[a]]) {
      var c = Wc[a],
        d = (b = void 0 !== Sc[c] ? Sc[c] : null);
      delete Uc[a];
      ed(mb(a, d), void 0);
      void 0 !== chrome && void 0 !== chrome.storage
        ? (delete Uc[c], chrome.storage.local.remove(c, void 0), chrome.storage.sync.remove(c, void 0))
        : (delete Uc[Sc[c]], delete Sc[c]);
    }
    return b;
  },
  Mc = function (a) {
    a = fd(a);
    void 0 !== a && Ia(a);
    return !!a;
  },
  gd = function (a, b) {
    a = fd(a);
    void 0 !== a && Ia("string" === typeof a);
    a = null == a ? "" : a + "";
    return "" != a ? a : b || "";
  },
  dd = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      for (var c in b) Sc[c] = b[c].newValue;
      "function" === typeof a && a();
    });
  },
  hd = function () {
    var a = {};
    hb(Vc, function (b) {
      void 0 !== fd(b) && (a[b] = fd(b));
    });
    bd();
    ed(a);
  },
  bd = function () {
    var a = fd("categories");
    void 0 !== chrome && void 0 !== chrome.storage && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    Sc = {};
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
  id = function (a, b, c) {
    hb(b, function (d, e) {
      null != d && (Tc[e] ? p(typeof d == Tc[e], "Unexpected type " + typeof d + " expected " + Tc[e]) : (Tc[e] = typeof d));
    });
    $c(b);
    a.set(b, function () {
      chrome.runtime && chrome.runtime.lastError
        ? (hd(),
          a.set(b, function () {
            console.log("Failed to store values");
          }))
        : c && c();
    });
  },
  $c = function (a, b) {
    a && lb(Sc, a);
    b && b();
  },
  jd = void 0 !== chrome && void 0 !== chrome.storage ? n(id, chrome.storage.local) : $c,
  ed = void 0 !== chrome && void 0 !== chrome.storage ? n(id, chrome.storage.sync) : $c,
  kd = function () {
    return gd("GtaPage", "PROD");
  };
za("tvt.Settings.getGataPageVersion", kd);
za("tvt.Settings.setGataPageVersion", function (a) {
  a = a || "PROD";
  delete Uc.GtaPage;
  ed(mb("GtaPage", a), void 0);
});
var ld = function () {
  var a = kd();
  return Xc[a];
};
za("tvt.Settings.getGataRedirectUrl", ld);
var nd = function () {
  return ld() + "internal/";
};
za("tvt.Settings.getGataInternalRedirectUrl", nd);
za("tvt.Settings.getGataLoginCheckUrl", function () {
  return ld() + "logincheck";
});
za("tvt.Settings.getGataInternalLoginUrl", function () {
  return nd() + "login";
});
za("tvt.Settings.getGataLoginUrl", function () {
  return ld() + "login";
});
za("tvt.Settings.toggleGaDebugSettings", function () {
  var a = {};
  switch (fd("gaDebug")) {
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
  jd(a);
});
var od = function (a, b) {
  this.name = a;
  this.url = b;
};
hb(
  { "Critical Issues": ["Error"], "Minor Issues": ["Warning"], Suggestions: ["Suggestion"], Working: ["Info", "Fine", "Debug"] },
  function (a) {
    for (var b = 0; a[b]; b++);
  }
);
var qd = function (a, b, c, d) {
    this.issueClass = b.issueClass;
    this.type = b.type;
    this.buckets = [];
    this.category = b.category;
    this.label = d || c || b.label || "";
    this.text = Oc(b.text || "", c || this.label);
    this.infoLink = "string" === typeof b.infoLink ? Oc(b.infoLink, this.label) : void 0;
    this.value = b.value || void 0;
    this.valueFormat = b.format || b.valueFormat || "";
    this.relatedIssues = [];
    c = b.relatedIssues || [];
    for (var e = 0; (d = c[e]); e++) D(this, d);
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
    null != a.relatedIssues && (pd(this, a.relatedIssues.length), a.relatedIssues.push(this));
  },
  rd = ["Error", "Warning", "Suggestion"],
  sd = { type: "Hidden", category: "NULL", text: "NULL", view: "Metadata" },
  ud = function (a, b) {
    b = D(sd, b);
    var c = {};
    td(c, a, !0);
    td(c, b, !0);
    D(a, b);
  },
  wd = function (a, b) {
    for (var c, d = 0; (c = b[d]); d++) {
      var e = vd(a, c.text, c.label);
      e ? wd(e, c.relatedIssues) : ud(a, c);
    }
  },
  D = function (a, b, c, d) {
    return new qd(a, b, c, d);
  },
  xd = function (a, b, c) {
    if ((b = E(b, a))) if ((a = E(c, a))) a.label = b.label;
  },
  td = function (a, b, c) {
    if (!b.deleted && !b.deduped && "Bucket" != b.type) {
      if ("Tag" != b.type) {
        var d = a[b.type];
        d || ((d = {}), (a[b.type] = d));
        var e = d[b.text];
        e || ((e = {}), (d[b.text] = e));
        (d = e[b.label]) ? c && ((b.deduped = !0), wd(d, b.relatedIssues)) : (e[b.label] = b);
      }
      for (d = 0; (e = b.relatedIssues[d]); d++) td(a, e, c);
    }
  },
  zd = function (a, b, c) {
    var d = !1;
    Oa(a, function (e) {
      e.text == b ? ((d = !0), yd(a, e, "Deleted because of text match.")) : c || (d = zd(e.relatedIssues, b) || d);
    });
    return d;
  },
  Ad = function (a, b) {
    var c = !1;
    Oa(a, function (d) {
      0 <= b.indexOf(d.text) ? ((c = !0), yd(a, d, "Deleted because of text match.")) : (c = Ad(d.relatedIssues, b) || c);
    });
    return c;
  },
  Bd = function (a, b, c) {
    var d = !1;
    Oa(a.relatedIssues, function (e) {
      e.text == b && e.label == c ? ((d = !0), yd(a.relatedIssues, e, "Deleted because of text and label match.")) : (d = Bd(e, b, c) || d);
    });
    return d;
  },
  Cd = function (a, b) {
    var c = !1;
    Oa(a.relatedIssues, function (d) {
      0 <= d.text.indexOf(b) ? ((c = !0), yd(a.relatedIssues, d, "Deleted because of text prefix match" + b)) : (c = Cd(d, b) || c);
    });
    return c;
  },
  Dd = function (a, b, c) {
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
            (e.label && " -- " + xb(e.label.replace("\n", ""), 25)) +
            (e.deleted ? " deleted:" + e.deleted : "") +
            (e.deduped ? " deduped" : "") +
            (e.ignored ? " ignored:" : "") +
            (e.parent ? "" : " noparent")
        );
        e.relatedIssues.length && Dd(e.relatedIssues, b, g);
      }
    else Dd(a.relatedIssues, b, c);
  };
za("module$contents$tvt$Issue_Issue.dump", Dd);
var Ed = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && Ta(b, c.category);
    });
  },
  Fd = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.category;
    });
  },
  Gd = function (a, b, c) {
    return c && !Array.isArray(c)
      ? Gd(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          return d.deleted ? !1 : c ? Hd(d.relatedIssues, b, c) : Id(d.relatedIssues, b);
        })
      : Gd(a.relatedIssues, b, c);
  },
  Jd = function (a, b) {
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && b == c.issueClass;
    });
  },
  Kd = function (a, b, c) {
    return c && !Array.isArray(c)
      ? Kd(a, b, [c])
      : Array.isArray(a)
      ? a.filter(function (d) {
          if (d.deleted) return !1;
          d = E(d.relatedIssues, b);
          return !!d && !d.deleted && !d.deduped && (void 0 === c || 0 <= c.indexOf(d.label));
        })
      : Kd(a.relatedIssues, b, c);
  },
  Ld = function (a, b) {
    return "string" === typeof b
      ? Ld(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.label);
        })
      : Ld(a.relatedIssues, b);
  },
  Md = function (a, b) {
    return "string" === typeof b
      ? Md(a, [b])
      : Array.isArray(a)
      ? a.filter(function (c) {
          return !c.deleted && !c.deduped && 0 <= b.indexOf(c.text);
        })
      : Md(a.relatedIssues, b);
  },
  Od = function (a) {
    return a.filter(function (b) {
      return !b.deleted && !b.deduped && "Tag" == b.type && Nd(b.category);
    });
  },
  Pd = function (a, b) {
    "string" === typeof b && (b = [b]);
    return a.filter(function (c) {
      return !c.deleted && !c.deduped && "Tag" == c.type && -1 != b.indexOf(c.category);
    });
  },
  Rd = function (a, b, c) {
    for (var d = [], e, f = 0; (e = a[f]); f++)
      e.deleted || e.deduped || (b(e) ? d.push(e) : e.type != c && ((e = Rd(e.relatedIssues, b, c)), 0 == d.length ? (d = e) : Va(d, e)));
    return d;
  },
  Sd = function (a, b) {
    return Rd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  Td = function (a) {
    return Sd(a, "HTTP response code indicates tag failed to fire: Status 404").filter(function (b) {
      return "404" == b.label;
    });
  },
  Ud = function (a, b) {
    return Rd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.type;
    });
  },
  Vd = function (a) {
    return Rd(
      Array.isArray(a) ? a : a.relatedIssues,
      function (b) {
        return Ta(rd, b.type);
      },
      "Bucket"
    );
  },
  Xd = function (a) {
    return Wd(Array.isArray(a) ? a : a.relatedIssues, function (b) {
      return "Google Ads Remarketing Tag" == b.category;
    });
  },
  Yd = function (a, b) {
    return Wd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.issueClass;
    });
  },
  Zd = function (a, b) {
    return Wd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.label;
    });
  },
  E = function (a, b) {
    return Wd(Array.isArray(a) ? a : a.relatedIssues, function (c) {
      return b == c.text;
    });
  },
  vd = function (a, b, c) {
    a = Sd(a, b);
    c = Ld(a, c);
    return 0 < c.length ? c[0] : null;
  },
  $d = function (a, b) {
    if (Array.isArray(a)) {
      var c = Sa(a, function (d) {
        return !d.deleted && !d.deduped && 0 <= d.text.indexOf(b);
      });
      c ||
        a.some(function (d) {
          c = !d.deleted && !d.deduped && $d(d.relatedIssues, b);
          return !!c;
        });
      return c;
    }
    return $d(a.relatedIssues, b);
  },
  ae = function (a) {
    return Wd(Array.isArray(a) ? a : a.relatedIssues, function (b) {
      return "Bucket" == b.type;
    });
  },
  Wd = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) if (!d.deleted && (!d.deduped || c) && (b(d) || (d = Wd(d.relatedIssues, b, c)))) return d;
    return null;
  },
  be = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) !d.deleted && !d.deduped && 0 <= b.indexOf(d.category || "") && c(d);
  },
  ce = function (a, b, c) {
    for (var d, e = 0; (d = a[e]); e++) d.deleted || d.deduped || b != d.category || c(d);
  },
  pd = function (a, b) {
    if (a && a && a.category != sd.category) {
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
      a.relatedIssues.forEach(pd);
    }
  },
  Hd = function (a, b, c) {
    return a.some(function (d) {
      return !d.deleted && !d.deduped && b == d.text && 0 <= c.indexOf(d.label);
    });
  },
  Id = function (a, b) {
    return a.some(function (c) {
      return !c.deleted && !c.deduped && b == c.text;
    });
  },
  ee = function (a) {
    return de(a) ? a : ee(a.parent);
  },
  fe = function (a) {
    return a.some(function (b) {
      return 1 < Ld(a, b.label).length;
    });
  },
  ge = function (a, b, c) {
    return a.some(function (d) {
      if (!d.deleted && !d.deduped) {
        if (!(d.type != b || (c && d.ignored))) return !0;
        if (d.relatedIssues.length) return ge(d.relatedIssues, b, c);
      }
      return !1;
    });
  },
  Nd = function (a) {
    var b;
    (b = null == a) || (((a = gd(a)) && "Default" != a) || (a = gd("DefaultLevelOfDetail", "Default")), (b = !Ta(["Hidden", "Off"], a)));
    return b;
  },
  de = function (a) {
    a.parent ? ((a = a.parent), (a = !a || a.category == sd.category)) : (a = !0);
    return a;
  },
  yd = function (a, b, c) {
    Ua(a, b);
    b.deleted || (b.deleted = c);
    b.relatedIssues = [];
  },
  he = function (a) {
    for (var b, c = 0; (b = a[c]); c++) (b.template = void 0), (b.parent = sd), he(b.relatedIssues);
    return a;
  },
  ie = function (a) {
    for (var b, c = 0; (b = a[c]); c++)
      ie(b.relatedIssues),
        Oa(b.relatedIssues, function (d, e) {
          if ((d.deduped && 0 == d.relatedIssues.length) || d.deleted)
            (d = b.relatedIssues), p(null != d.length), Array.prototype.splice.call(d, e, 1);
        });
    return a;
  };
var je = [],
  ke = function (a) {
    p(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
    var b = "ab";
    if (a.ab && a.hasOwnProperty(b)) return a.ab;
    je.push(a);
    var c = new a();
    a.ab = c;
    p(a.hasOwnProperty(b), "Could not instantiate singleton.");
    return c;
  };
var le = {
    Vb: ["BC", "AD"],
    Ub: ["Before Christ", "Anno Domini"],
    Xb: "JFMAMJJASOND".split(""),
    dc: "JFMAMJJASOND".split(""),
    Wb: "January February March April May June July August September October November December".split(" "),
    cc: "January February March April May June July August September October November December".split(" "),
    Zb: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    hc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    kc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    jc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    bc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    ic: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    ld: "SMTWTFS".split(""),
    fc: "SMTWTFS".split(""),
    ac: ["Q1", "Q2", "Q3", "Q4"],
    Yb: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Rb: ["AM", "PM"],
    Rc: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    vd: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    Sc: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    Na: 6,
    xd: [5, 6],
    Oa: 5
  },
  me = le;
me = le;
var ne = function (a, b, c, d, e) {
    a = new Date(a, b, c);
    e = e || 0;
    return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
  },
  qe = function (a, b, c) {
    "number" === typeof a
      ? ((this.date = oe(a, b || 0, c || 1)), pe(this, c || 1))
      : ((b = typeof a),
        ("object" == b && null != a) || "function" == b
          ? ((this.date = oe(a.getFullYear(), a.getMonth(), a.getDate())), pe(this, a.getDate()))
          : ((this.date = new Date(Date.now())),
            (a = this.date.getDate()),
            this.date.setHours(0),
            this.date.setMinutes(0),
            this.date.setSeconds(0),
            this.date.setMilliseconds(0),
            pe(this, a)));
  },
  oe = function (a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b;
  };
m = qe.prototype;
m.Ea = me.Na;
m.Fa = me.Oa;
m.clone = function () {
  var a = new qe(this.date);
  a.Ea = this.Ea;
  a.Fa = this.Fa;
  return a;
};
m.getFullYear = function () {
  return this.date.getFullYear();
};
m.getYear = function () {
  return this.getFullYear();
};
m.getMonth = function () {
  return this.date.getMonth();
};
m.getDate = function () {
  return this.date.getDate();
};
m.getTime = function () {
  return this.date.getTime();
};
m.getDay = function () {
  return this.date.getDay();
};
m.getUTCFullYear = function () {
  return this.date.getUTCFullYear();
};
m.getUTCMonth = function () {
  return this.date.getUTCMonth();
};
m.getUTCDate = function () {
  return this.date.getUTCDate();
};
m.getUTCDay = function () {
  return this.date.getDay();
};
m.getUTCHours = function () {
  return this.date.getUTCHours();
};
m.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
m.getTimezoneOffset = function () {
  return this.date.getTimezoneOffset();
};
m.set = function (a) {
  this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate());
};
m.setFullYear = function (a) {
  this.date.setFullYear(a);
};
m.setYear = function (a) {
  this.setFullYear(a);
};
m.setMonth = function (a) {
  this.date.setMonth(a);
};
m.setDate = function (a) {
  this.date.setDate(a);
};
m.setTime = function (a) {
  this.date.setTime(a);
};
m.setUTCFullYear = function (a) {
  this.date.setUTCFullYear(a);
};
m.setUTCMonth = function (a) {
  this.date.setUTCMonth(a);
};
m.setUTCDate = function (a) {
  this.date.setUTCDate(a);
};
m.add = function (a) {
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
    pe(this, a.getDate()));
};
m.La = function (a) {
  var b = this.getFullYear(),
    c = 0 > b ? "-" : 1e4 <= b ? "+" : "";
  return [c + u(Math.abs(b), c ? 6 : 4), u(this.getMonth() + 1, 2), u(this.getDate(), 2)].join(a ? "-" : "") + "";
};
m.equals = function (a) {
  return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate());
};
m.toString = function () {
  return this.La();
};
var pe = function (a, b) {
  a.getDate() != b && a.date.setUTCHours(a.date.getUTCHours() + (a.getDate() < b ? 1 : -1));
};
qe.prototype.valueOf = function () {
  return this.date.valueOf();
};
var re = function (a, b, c, d, e, f, g) {
  this.date =
    "number" === typeof a
      ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
      : new Date(a && a.getTime ? a.getTime() : Date.now());
};
Aa(re, qe);
m = re.prototype;
m.getHours = function () {
  return this.date.getHours();
};
m.getMinutes = function () {
  return this.date.getMinutes();
};
m.getSeconds = function () {
  return this.date.getSeconds();
};
m.getMilliseconds = function () {
  return this.date.getMilliseconds();
};
m.getUTCDay = function () {
  return this.date.getUTCDay();
};
m.getUTCHours = function () {
  return this.date.getUTCHours();
};
m.getUTCMinutes = function () {
  return this.date.getUTCMinutes();
};
m.getUTCSeconds = function () {
  return this.date.getUTCSeconds();
};
m.getUTCMilliseconds = function () {
  return this.date.getUTCMilliseconds();
};
m.setHours = function (a) {
  this.date.setHours(a);
};
m.setMinutes = function (a) {
  this.date.setMinutes(a);
};
m.setSeconds = function (a) {
  this.date.setSeconds(a);
};
m.setMilliseconds = function (a) {
  this.date.setMilliseconds(a);
};
m.setUTCHours = function (a) {
  this.date.setUTCHours(a);
};
m.setUTCMinutes = function (a) {
  this.date.setUTCMinutes(a);
};
m.setUTCSeconds = function (a) {
  this.date.setUTCSeconds(a);
};
m.setUTCMilliseconds = function (a) {
  this.date.setUTCMilliseconds(a);
};
m.add = function (a) {
  qe.prototype.add.call(this, a);
  a.hours && this.setUTCHours(this.date.getUTCHours() + a.hours);
  a.minutes && this.setUTCMinutes(this.date.getUTCMinutes() + a.minutes);
  a.seconds && this.setUTCSeconds(this.date.getUTCSeconds() + a.seconds);
};
m.La = function (a) {
  var b = qe.prototype.La.call(this, a);
  return a
    ? b + "T" + u(this.getHours(), 2) + ":" + u(this.getMinutes(), 2) + ":" + u(this.getSeconds(), 2)
    : b + "T" + u(this.getHours(), 2) + u(this.getMinutes(), 2) + u(this.getSeconds(), 2);
};
m.equals = function (a) {
  return this.getTime() == a.getTime();
};
m.toString = function () {
  return this.La();
};
m.clone = function () {
  var a = new re(this.date);
  a.Ea = this.Ea;
  a.Fa = this.Fa;
  return a;
};
var se = function () {},
  ue = function (a) {
    if ("number" == typeof a) {
      var b = new se();
      b.Kb = a;
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
      b.hb = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = te(a);
      b.ib = [c, c];
      b.na = { ud: a, lb: a };
      b.Ma = [];
      return b;
    }
    b = new se();
    b.hb = a.id;
    b.Kb = -a.std_offset;
    b.ib = a.names;
    b.na = a.names_ext;
    b.Ma = a.transitions;
    return b;
  },
  te = function (a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(u(Math.floor(a / 60) % 100, 2), ":", u(a % 60, 2));
    return b.join("");
  },
  ve = function (a, b) {
    b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
    for (var c = 0; c < a.Ma.length && b >= a.Ma[c]; ) c += 2;
    return 0 == c ? 0 : a.Ma[c - 1];
  },
  we = function (a, b) {
    a = a.Kb - ve(a, b);
    return -1440 === a ? 0 : a;
  };
var ze = function () {
    p(!0, "Pattern must be defined");
    p(void 0 !== me, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.Ja = [];
    this.F = me;
    var a = "dd-MM-yyyy HH:mm:ss.SSS";
    for (xe && (a = a.replace(/\u200f/g, "")); a; ) {
      for (var b = a, c = 0; c < ye.length; ++c) {
        var d = a.match(ye[c]);
        if (d) {
          var e = d[0];
          a = a.substring(e.length);
          0 == c && ("''" == e ? (e = "'") : ((e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length)), (e = e.replace(/''/g, "'"))));
          this.Ja.push({ text: e, type: c });
          break;
        }
      }
      if (b === a) throw Error("Malformed pattern part: " + a);
    }
  },
  ye = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
  ],
  Ae = function (a) {
    return a.getHours ? a.getHours() : 0;
  };
ze.prototype.format = function (a, b) {
  if (!a) throw Error("The date to format must be non-null.");
  var c = b ? 6e4 * (a.getTimezoneOffset() - we(b, a)) : 0,
    d = c ? new Date(a.getTime() + c) : a,
    e = d;
  b &&
    d.getTimezoneOffset() != a.getTimezoneOffset() &&
    ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
    (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
  c = [];
  for (var f = 0; f < this.Ja.length; ++f) {
    var g = this.Ja[f].text;
    1 == this.Ja[f].type ? c.push(Be(this, g, a, d, e, b)) : c.push(g);
  }
  return c.join("");
};
var Ce = function (a, b) {
    b = String(b);
    a = a.F || me;
    if (void 0 !== a.lc) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(48 <= e && 57 >= e ? String.fromCharCode(a.lc + e - 48) : b.charAt(d));
      }
      b = c.join("");
    }
    return b;
  },
  xe = !1,
  De = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  },
  Ee = function (a, b) {
    De(b);
    b = Ae(b);
    return a.F.Rb[12 <= b && 24 > b ? 1 : 0];
  },
  Be = function (a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.F.Ub[c] : a.F.Vb[c];
      case "y":
        return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), Ce(a, u(c, g));
      case "Y":
        return (
          (c = new Date(ne(d.getFullYear(), d.getMonth(), d.getDate(), a.F.Oa, a.F.Na)).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          Ce(a, u(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.F.Xb[c];
            break a;
          case 4:
            g = a.F.Wb[c];
            break a;
          case 3:
            g = a.F.Zb[c];
            break a;
          default:
            g = Ce(a, u(c + 1, g));
        }
        return g;
      case "k":
        return De(e), Ce(a, u(Ae(e) || 24, g));
      case "S":
        return Ce(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? u(0, g - 3) : ""));
      case "E":
        return (c = d.getDay()), 4 <= g ? a.F.kc[c] : a.F.bc[c];
      case "a":
        return Ee(a, e);
      case "b":
        return Ee(a, e);
      case "B":
        return Ee(a, e);
      case "h":
        return De(e), Ce(a, u(Ae(e) % 12 || 12, g));
      case "K":
        return De(e), Ce(a, u(Ae(e) % 12, g));
      case "H":
        return De(e), Ce(a, u(Ae(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.F.fc[c];
            break a;
          case 4:
            g = a.F.jc[c];
            break a;
          case 3:
            g = a.F.ic[c];
            break a;
          default:
            g = Ce(a, u(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.F.dc[c];
            break a;
          case 4:
            g = a.F.cc[c];
            break a;
          case 3:
            g = a.F.hc[c];
            break a;
          default:
            g = Ce(a, u(c + 1, g));
        }
        return g;
      case "Q":
        return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.F.ac[c] : a.F.Yb[c];
      case "d":
        return Ce(a, u(d.getDate(), g));
      case "m":
        return De(e), Ce(a, u(e.getMinutes ? e.getMinutes() : 0, g));
      case "s":
        return De(e), Ce(a, u(e.getSeconds(), g));
      case "v":
        return (f || ue(c.getTimezoneOffset())).hb;
      case "V":
        return (
          (a = f || ue(c.getTimezoneOffset())),
          2 >= g
            ? a.hb
            : 0 < ve(a, c)
            ? void 0 !== a.na.Tb
              ? a.na.Tb
              : a.na.DST_GENERIC_LOCATION
            : void 0 !== a.na.lb
            ? a.na.lb
            : a.na.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = ne(e.getFullYear(), e.getMonth(), e.getDate(), a.F.Oa, a.F.Na)),
          Ce(a, u(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
        );
      case "z":
        return (a = f || ue(c.getTimezoneOffset())), 4 > g ? a.ib[0 < ve(a, c) ? 2 : 0] : a.ib[0 < ve(a, c) ? 3 : 1];
      case "Z":
        return (
          (b = f || ue(c.getTimezoneOffset())),
          4 > g
            ? ((g = -we(b, c)),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(u(Math.floor(g / 60) % 100, 2), u(g % 60, 2)),
              (g = a.join("")))
            : (g = Ce(a, te(we(b, c)))),
          g
        );
      default:
        return "";
    }
  };
var Fe = function () {
    this.Nb = "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    this.sb = [];
    this.wb = [];
  },
  He = function (a, b, c, d, e) {
    if (Ta(ke(Fe).sb, a.id)) {
      var f = { timestamp: Ge.format(new re()), source: a.name, Ad: b };
      lb(f, c || {});
      var g = [],
        h = [];
      Na(ke(Fe).wb, function (l) {
        var t = l.match(/%(\w+)/i)[1];
        null !== f && t in f && (g.push(l.replace(t, "s")), h.push(f[t]));
      });
      g.push(d);
      var k = g.join(" ");
      Va(h, Array.prototype.slice.call(arguments).slice(4));
      h.unshift(k);
      console.log.apply(console, h);
    }
  },
  Zc = function () {
    var a = ke(Fe);
    a.Nb = gd("LogInfoTemplate") || "%timestamp|[TabId: %tabid]|[%source]|[%url]";
    a.wb = a.Nb.split("|");
    var b = fd("LogSources");
    void 0 !== b && Ha(b);
    a.sb = b || [];
    Ie = Mc("LoggingEnabled") ? He : cb;
  },
  Ge = new ze(),
  Je = { id: "content-script", name: "Content Script" },
  Ke = { id: "issues", name: "Issue processing" },
  Le = { id: "recording-page", name: "Recording Page" },
  Ie = Mc("LoggingEnabled") ? He : cb;
var Me = function (a) {
    this.Qa = a;
    this.index = -1;
  },
  Ne = function (a) {
    a.index++;
    return a.index < a.Qa.length ? a : null;
  };
Me.prototype.current = function () {
  p(0 <= this.index);
  return this.index < this.Qa.length ? this.Qa[this.index] : null;
};
var Oe = function (a) {
  Me.call(this, Object.keys(a));
  this.object = a;
};
pa(Oe, Me);
Oe.prototype.currentValue = function () {
  var a = this.current();
  return null == a ? null : this.object[a];
};
var F = function (a, b, c, d, e, f, g) {
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.ha = Pe(e);
    this.issueClass = 0;
    this.Y = g || [];
    this.o = !1;
    this.view = this.hint = this.X = null;
    this.context = {};
  },
  Pe = function (a) {
    return a
      ? function (b, c) {
          return a.call(this, c);
        }
      : q;
  },
  Qe = function (a) {
    return a.map(function (b) {
      return b.clone();
    });
  },
  Re = function (a, b, c, d, e, f) {
    return new F(a, b, c, void 0, d, e, f);
  },
  Se = n(Re, "Debug", null),
  G = n(Re, "Error", null),
  Te = n(Re, "Fine", null),
  Ue = n(Re, "Hidden", null),
  H = n(Re, "Info", null),
  Ve = n(Re, "Suggestion", null),
  We = n(Re, "Warning", null),
  Xe = H("Implemented in %s");
H("Includes %s");
var Ye = function (a) {
    return G(a, function (b) {
      return !Pc(b.label);
    });
  },
  Ze = function (a, b, c) {
    b = La(c || b, qd);
    return a == b.label;
  },
  $e = function (a, b, c) {
    b = La(c || b, qd);
    return z(a, b.label);
  },
  bf = function (a) {
    var b = "${" + a.text + "}",
      c = "not set" == a.label ? "" : a.label;
    de(a) || af(La(a.parent, qd), b, c);
    a.relatedIssues &&
      a.relatedIssues.forEach(function (d) {
        bf(d);
      });
  },
  af = function (a, b, c) {
    a.label = a.label.replace(b, c);
    a.text = a.text.replace(b, c);
    de(a) || af(La(a.parent, qd), b, c);
  },
  cf = function (a) {
    return n(function (b) {
      return a(b.label);
    });
  };
F.prototype.yb = function (a) {
  return 0 == a.label.length;
};
F.prototype.l = function (a) {
  for (var b = 0; b < arguments.length; b++) Va(this.Y, arguments[b]);
  return this;
};
var ef = function (a, b, c) {
  b.category != a.category &&
    ((b.text = a.text),
    (b.category = a.category),
    (b.type = a.type),
    (b.infoLink = a.infoLink),
    b.relatedIssues && ((a = La(b, qd)), bf(a), D(a, df, c)));
};
F.prototype.ob = function (a) {
  a.category = this.category;
  a.infoLink = this.infoLink;
  return a;
};
F.prototype.Ra = function () {
  return !0;
};
F.prototype.clear = function () {
  this.aa = null;
  this.context = {};
  this.o = !1;
};
F.prototype.clone = function () {
  var a = {},
    b;
  for (b in this) a[b] = this[b];
  a.Y.length && (a.Y = Qe(this.Y));
  return a;
};
var ff = function (a, b, c) {
  return D(b, a, c);
};
F.prototype.P = function (a, b) {
  var c = b.template ? gf(this, b.template, a) : a;
  p(this.Ra(c), "Parameter mismatch for " + this.text);
  try {
    do {
      var d = this.ha(c, b);
      var e = "string" === typeof d || d ? D(b, this, "string" === typeof d ? d : "") : void 0;
      e
        ? (this.Y.forEach(function (f) {
            f.P(c, e);
          }, this),
          bf(e))
        : this.X &&
          (Array.isArray(this.X)
            ? this.X.forEach(function (f) {
                f.P(a, b);
              })
            : this.X.P(a, b));
    } while (this.o);
  } catch (f) {
    Ie(Ke, null, this, "Failed finding isues for " + this.text + ": " + f + "\n" + f.stack), ta.fail && ta.fail(this.text + ": " + f);
  }
  this.clear();
};
var gf = function (a, b, c) {
  var d = c;
  b.issueClass != a.issueClass && (1 == a.issueClass ? (d = (c && c.node) || c) : 2 == a.issueClass && (d = b.aa ? b.aa : c));
  return d;
};
F.prototype.otherwise = function (a) {
  this.X = a;
  return this;
};
F.prototype.setClass = function (a) {
  this.issueClass = a;
  this.Y.forEach(function (b) {
    b.setClass(a);
  });
  return this;
};
var I = function (a, b) {
    a.format = b;
    return a;
  },
  hf = function (a, b) {
    a.ha = b;
    return a;
  },
  J = function (a, b) {
    a.hint = b;
    return a;
  },
  K = function (a, b) {
    a.infoLink = b;
    return a;
  },
  jf = function (a, b) {
    a.infoLink = "#" + b;
    return a;
  },
  L = function (a, b) {
    a.Y = b;
    return a;
  },
  kf = function (a, b) {
    a.type = b;
    return a;
  },
  M = function (a, b) {
    a.view = b;
    return a;
  },
  lf = function (a, b) {
    b && !a.o && (a.o = new Oe(b));
    a.o && (a.o = Ne(a.o));
    return a.o;
  },
  df = Se("__altered");
var mf = function (a, b, c, d, e, f, g, h) {
  F.call(this, a, b, d, e, void 0, g, h);
  this.issueClass = 2;
  this.jb = "string" === typeof c ? [c] : c;
  this.ha = f || q;
};
Aa(mf, F);
var nf = function (a, b, c, d, e, f) {
    return new mf(a, b, void 0, c, void 0, d, e, f);
  },
  of = n(nf, "Tag", null),
  pf = n(nf, "Bucket", null),
  qf = n(nf, "Debug", null),
  rf = n(nf, "Error", null),
  sf = n(nf, "Fine", null),
  tf = n(nf, "Hidden", null),
  N = n(nf, "Info", null),
  uf = n(nf, "Warning", null),
  Cf = n(nf, "Suggestion", null),
  Df = J(
    rf("An error occured while the tag was fired: %s", function (a) {
      return a.error;
    }),
    "The response from the server contained an error message."
  ),
  Ef = M(
    J(
      Ve("Non-standard implementation"),
      "This suggestion is raised if Tag Assistant Legacy cannot find the Google Analytics Snippet on the page. This may happen if you have altered the script or are using a tag manager library."
    ),
    ""
  ),
  Ff = J(
    rf(
      "HTTP response code indicates tag failed to fire: Status %s",
      function (a) {
        a = a.statusCode;
        return void 0 !== a && 400 <= a ? a + "" : !1;
      },
      "value"
    ),
    "The HTTP response status code indicates tag failed to fire"
  ),
  Hf = J(
    Cf("Using non-secure code on secure page", function (a) {
      var b = O(a),
        c = Gf(a);
      return "http" == b.Z && "https" == c.Z ? a.documentUrl : !1;
    }),
    "The page is using the secure HTTPS protocol, but the request is using the not secured HTTP protocol."
  ),
  P = function (a, b, c, d, e, f) {
    var g = c || q;
    c = function (h, k) {
      return k.label;
    };
    try {
      "function" === typeof e && (c = e);
    } catch (h) {
      console.log("Error while creating buckets " + a);
    }
    return L(
      I(
        hf(pf(a), function (h, k) {
          return g.call(this, h, k) && "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [I(L(hf(of(b), "boolean" === typeof e && e ? g : c), d || []), void 0 !== f ? f : "group_status")]
    );
  },
  R = function (a, b, c, d, e, f, g) {
    return new mf("Tag", a, b, c, d, e, f, g);
  },
  If = function (a, b) {
    return sf(a, function (c) {
      return w(c.url).v.get(b);
    });
  },
  Jf = function (a, b) {
    return N(a, function (c) {
      c = O(c).v.get(b);
      return "string" === typeof c ? c : !1;
    });
  },
  Lf = function (a, b) {
    return M(
      N(
        "URL",
        function (c) {
          try {
            var d = O(c).v.ka();
            if ((a && !Kf(d, a)) || (b && Kf(d, b))) return !1;
          } catch (e) {}
          this.text = c.redirectedFrom ? "Redirected URL" : "URL";
          return c.url;
        },
        "link_expandable",
        [
          I(
            N("Post Data", function (c) {
              return c.postData;
            }),
            "value"
          ),
          Hf,
          jf(
            J(
              G("URL Encoding Error", function (c) {
                return -1 != c.label.indexOf("&amp;");
              }),
              'The URL contains the sequence "&amp;", which probably doesn\'t do what you intended to do.'
            ),
            "url_encoding"
          ),
          Ff,
          Df,
          rf("Error while sending request: %s", function (c) {
            return void 0 !== c.error ? c.error : !1;
          }),
          tf("Redirected to", function (c) {
            return c.redirectUrl;
          }),
          tf("redirectedFrom", function (c) {
            return c.redirectedFrom;
          }),
          qf("requestId", function (c) {
            return c.requestId;
          }),
          rf("URL is not parsable.", function (c) {
            if (0 < c.url.indexOf("tiba=")) return !1;
            try {
              return !w(c.url).v.ka();
            } catch (d) {
              return !0;
            }
          })
        ]
      ),
      "URLs"
    );
  },
  Kf = function (a, b) {
    var c = b + ".";
    return !(
      !b ||
      !Sa(a, function (d) {
        return b == d || 0 == d.indexOf(c);
      })
    );
  },
  S = Lf();
mf.prototype.Ra = function (a) {
  return void 0 !== a && void 0 !== a.url;
};
mf.prototype.P = function (a, b) {
  (!this.jb || (a && Mf(this, a.url))) && mf.ma.P.call(this, a, b);
};
var Mf = function (a, b) {
    return Array.isArray(a.jb)
      ? a.jb.some(function (c) {
          return y(new RegExp(c), b);
        })
      : !0;
  },
  Gf = function (a) {
    var b = a.documentUri;
    b || ((b = w(a.documentUrl)), (a.documentUri = b));
    return b;
  },
  O = function (a) {
    var b = a.uri;
    if (!b) {
      b = w(encodeURI(a.url));
      if (a.postData)
        try {
          Hb(b, a.postData, !0);
        } catch (c) {}
      a.uri = b;
    }
    return b;
  };
var Nf = function (a) {
  var b = a.v;
  if ((a = b.get("data")))
    try {
      a = decodeURIComponent(a);
    } catch (d) {}
  var c = (a ? a.toString().split(";") : []).filter(function (d) {
    return 0 < d.length;
  });
  b.ka().forEach(function (d) {
    0 == d.indexOf("data.") && c.push(d.substring(5) + "=" + escape(b.get(d) + ""));
  });
  return c.join(";");
};
var Of = function (a, b, c, d, e, f) {
  F.call(this, a, b, c, d, void 0, f);
  this.ha = e || q;
  this.issueClass = 3;
};
Aa(Of, F);
var Pf = function (a, b, c, d, e) {
    return new Of(a, b, c, d, e);
  },
  Qf = function (a, b) {
    return new Of("Hidden", a, "Check only", void 0, b, void 0);
  },
  Rf = function (a, b) {
    return Qf(a, function (c, d) {
      b.call(this, c, d);
      return !1;
    });
  },
  Sf = function (a, b) {
    for (var c = [], d = 1, e = arguments.length; d < e; d++) c.push(Rf(a, arguments[d]));
    return c;
  },
  Tf = n(Pf, "Warning", null);
var T = document;
var Uf = function (a, b, c, d, e, f, g, h) {
  F.call(this, a, b, c, d, void 0, g, h);
  this.pa = e || null;
  this.ha = f || q;
  this.issueClass = 1;
};
Aa(Uf, F);
var Vf = function (a, b, c, d, e, f) {
    return new Uf(a, b, c, void 0, void 0, d, e, f);
  },
  Wf = n(Vf, "Tag", null),
  Xf = n(Vf, "Bucket", null),
  U = n(Vf, "Error", null),
  Yf = n(Vf, "Fine", null),
  Zf = n(Vf, "Group", null),
  $f = n(Vf, "Hidden", null),
  ag = n(Vf, "Info", null),
  bg = n(Vf, "Warning", null),
  cg = n(Vf, "Suggestion", null),
  dg = L(
    M(
      cg("Tag is included in an iframe", function () {
        return self !== top;
      }),
      "Code Snippet"
    ),
    [
      M(
        ag(
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
  eg = cg("Tag is included in an external script file", function (a) {
    return a.externalScript;
  }),
  fg = M(
    Yf(
      "Script source",
      function (a) {
        return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1;
      },
      "linked"
    ),
    "Code Snippet"
  ),
  hg = function () {
    return M(
      Yf(
        "HTML Snippet",
        function (a) {
          return gg(this, a);
        },
        "snippet_html"
      ),
      "Code Snippet"
    ).l(
      Yf("Included in an iframe", function () {
        try {
          return window.self != window.top;
        } catch (a) {
          return !0;
        }
      })
    );
  },
  gg = function (a, b) {
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(T.location.href);
    return b && b.outerHTML ? xb(b.outerHTML, 1e3) : "";
  },
  ig = function (a, b, c) {
    var d = "",
      e = T.location.href;
    c.externalScript &&
      ((d = "&line=" + c.textContent.substring(0, b).split("\n").length - 1), c.getAttribute && (e = c.getAttribute("src")));
    a.infoLink = "/view_source.html?url=" + encodeURIComponent(e) + d;
    c = c.textContent;
    a = 500;
    d = b - 100;
    b = c;
    0 < d && ((b = c.substring(d)), (c = b.indexOf("\n")), 0 <= c && 100 > c && (b = b.substring(c)), (b = "..." + b), (a += 3));
    b.length > a && ((b = b.substring(0, a)), (c = b.lastIndexOf("\n")), 10 < c && (b = b.substring(0, c + 1)), (b += "..."));
    return yc(b);
  },
  jg = K(
    M(
      J(
        G("No HTTP response detected"),
        "This may be raised when your implementation has errors, but also if you are offline or if an extension is blocking traffic to the server."
      ),
      ""
    ),
    "https://support.google.com/tagassistant/answer/3059154#http_response"
  ),
  kg = function (a, b) {
    return b.label;
  },
  lg = function (a, b, c, d) {
    return L(
      I(
        hf(Xf(a), function () {
          return !q || "{$GROUP_CHILD_COUNT}_";
        }),
        "value_status"
      ),
      [L(hf(I(Wf(b), "group_status"), d || kg), c || [])]
    );
  },
  mg = function (a, b, c, d, e) {
    return new Uf("Tag", a, b, c, d, e, void 0, void 0);
  };
Uf.prototype.Ra = function (a) {
  return "number" === typeof a || (void 0 !== a && void 0 !== a.nodeName);
};
Uf.prototype.P = function (a, b) {
  a = "number" === typeof a ? T : a;
  if (a.externalScript) {
    if (!this.pa || 0 == this.pa.indexOf("//script")) return Uf.ma.P.call(this, a, b);
  } else if (this.pa) {
    var c = "function" === typeof this.pa ? this.pa(a, b) : this.pa;
    if ("//body" == c) Uf.ma.P.call(this, T.body, b);
    else {
      c = T.evaluate(c, T, null, XPathResult.ANY_TYPE, null);
      if (c.resultType == XPathResult.NUMBER_TYPE) return Uf.ma.P.call(this, c.numberValue, b);
      if (c.resultType == XPathResult.UNORDERED_NODE_ITERATOR_TYPE || c.resultType == XPathResult)
        try {
          for (; (a = c.iterateNext()); ) Uf.ma.P.call(this, a, b);
        } catch (d) {}
    }
  } else Uf.ma.P.call(this, a, b);
};
var ng = function (a, b) {
  a.pa = b;
  return a;
};
var og = function (a, b) {
  var c = ["No Google Analytics HTTP responses because opted out code detected."];
  E(b, "URL") &&
    b.forEach(function (d) {
      (4 == d.issueClass || (c && 0 <= c.indexOf(d.text))) && Ua(a, d);
    });
};
var pg = function (a, b, c, d, e, f) {
  F.call(this, a, b, c, d, void 0, f);
  this.ha = e || this.pc;
  this.issueClass = 8;
};
Aa(pg, F);
pg.prototype.pc = function (a) {
  if (a[this.text]) {
    try {
      this.context = JSON.parse(a[this.text]);
    } catch (b) {}
    return a[this.text];
  }
  this.context = null;
  return !1;
};
var qg = function (a, b) {
  this.missingError = a;
  this.tb = b;
};
var V = function (a, b) {
  this.priority = b;
  this.K = this.Za = this.Ua = this.ra = this.Ta = this.Ca = null;
};
m = V.prototype;
m.Va = function (a) {
  this.ra || (this.ra = this.G());
  this.ra.forEach(function (b) {
    var c = D(sd, sd);
    b.P(T, c);
    c.relatedIssues.length &&
      c.relatedIssues.forEach(function (d) {
        var e;
        ae(d) &&
          (e = Od(a).filter(function (f) {
            return this.bb(f, d);
          }, this));
        e && e.length
          ? e.forEach(function (f) {
              rg(this, f, d);
            }, this)
          : a.push(d);
      }, this);
  }, this);
};
m.Wa = function (a, b) {
  this.Ua || (this.Ua = this.Ya());
  var c = D(sd, sd),
    d = {
      nodeName: "SCRIPT",
      textContent: a,
      externalScript: !0,
      getAttribute: function (e) {
        return "src" == e ? b : void 0;
      }
    };
  this.Ua.forEach(function (e) {
    e.P(d, c);
  }, this);
  return c.relatedIssues;
};
m.Xa = function () {
  return [];
};
m.ub = function () {
  if (null === this.Ca) {
    var a = {};
    this.Ca = this.G()
      .filter(function (b) {
        return a[b.category] ? !1 : (a[b.category] = !0);
      })
      .map(function (b) {
        var c = Ga(b.category);
        b = Ga(b.infoLink);
        return new od(c, b);
      });
  }
  return this.Ca;
};
m.ea = function () {
  return [];
};
m.ja = function () {
  return [];
};
m.Ya = function () {
  return this.G();
};
m.isActive = function () {
  return this.ub().some(function (a) {
    return Nd(a.name);
  });
};
m.list = function (a) {
  a = a || [];
  Va(a, this.G(), this.J(), this.ea(), this.Xa());
  return a;
};
m.bb = function (a, b) {
  return a.text == b.text && a.label == b.label;
};
var rg = function (a, b, c) {
  var d = Ud(b, "Bucket");
  return 0 < d.length
    ? ((c = Ud(c, "Bucket")),
      c.forEach(function (e) {
        var f = Sa(d, function (g) {
          return e.text == g.text;
        });
        f
          ? e.relatedIssues.forEach(function (g) {
              var h = f.relatedIssues.filter(function (k) {
                return this.bb(k, g);
              }, this);
              0 < h.length ? ud(h[0], g) : D(f, g);
            }, this)
          : D(b, e);
      }, a),
      0 < c.length)
    : !1;
};
V.prototype.cb = function (a, b) {
  7 == b.issueClass
    ? b.relatedIssues.forEach(ya(this.cb, this, a))
    : (zd(b.relatedIssues, Ef.text), zd(a.relatedIssues, jg.text), rg(this, a, b) || ud(a, b));
};
V.prototype.fa = function () {
  var a = [];
  this.ja().forEach(function (b) {
    Va(a, b.text);
  });
  return a;
};
var sg = function (a, b, c) {
    hb(a.fa(), function (d, e) {
      null == c[e] && null != d.missingError && D(b, d.missingError, e);
    });
  },
  tg = function (a, b, c) {
    a.ja().forEach(function (d) {
      d.P(c, b);
    });
    sg(a, b, c);
  };
var ug = function (a, b) {
    this.message = a;
    this.url = b;
    this.timings = {};
  },
  vg = function (a, b, c) {
    ug.call(this, a, b);
    this.issues = he(c);
  };
pa(vg, ug);
var wg = function () {
    this.ta = [];
    this.Ca = null;
    this.Pb = !1;
  },
  xg =
    "chrome-extension: .cloudfront.net .facebook.com .facebook.net .googleapis.com .twitter.com com.atlassian. mail.google.com docs.google.com img-cdn.mediaplex.com jquery sitecatalyst.js ssl.gstatic.com/ui/ //talkgadget.google.com //www.google.com/tagmanager/web/s/ .yahoo.co.jp/pagead/conversion.js .yimg.jp/images/listing/tool/cv/conversion.js".split(
      " "
    ),
  yg = {
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
L(
  I(
    H("Script", function (a) {
      if (null == this.o) this.o = 0;
      else if ((this.o++, this.o == T.scripts.length)) return (this.o = null), !1;
      var b = T.scripts[this.o];
      this.infoLink = b.src;
      return void 0 !== b.src && "" != b.src && !Zd(a.relatedIssues, b.src) && !zg(ke(wg), b.src);
    }),
    "link_expandable_with_path"
  ),
  [
    Ve("Found <script> tag with empty src attribute.", function (a) {
      return a.label == T.location.href;
    })
  ]
);
var Ag = function (a, b) {
    var c = {};
    a = ((c.message = "LoadScript"), (c.url = a), c);
    chrome.runtime.sendMessage(a, b);
  },
  Cg = function (a) {
    Bg(ke(wg), a);
  },
  Bg = function (a, b) {
    Za(a.ta, b, function (c, d) {
      return c.priority > d.priority ? 1 : -1;
    });
  };
wg.prototype.fa = function () {
  for (var a = {}, b, c = 0; (b = this.ta[c]); c++) b.isActive() && lb(a, b.fa());
  return a;
};
wg.prototype.Va = function () {
  var a = [];
  if (!zg(this, T.URL)) for (var b, c = 0; (b = this.ta[c]); c++) b.isActive() && b.Va(a);
  return fd("DebugIssues") ? a : ie(a);
};
wg.prototype.Wa = function (a, b) {
  var c = {};
  Na(
    T.scripts,
    function (d) {
      !d.src ||
        "" == d.src ||
        c[d.src] ||
        zg(this, d.src) ||
        d.src == a ||
        ((c[d.src] = !0),
        Ag(d.src, function (e) {
          ke(wg).ta.forEach(function (f) {
            f.isActive() && ((f = f.Wa(e, d.src)), f.length && b(f, d.src));
          });
        }));
    },
    this
  );
};
var Dg = function (a) {
    for (var b = ke(wg), c = D(sd, sd), d, e = 0; (d = b.ta[e]); e++) d.isActive() && tg(d, c, a);
    return c.relatedIssues;
  },
  Eg = function (a) {
    return xg.some(function (b) {
      return 0 <= a.indexOf(b);
    });
  },
  Fg = function (a) {
    return !(
      !fd("ManualScriptParsing") ||
      !(fd("IgnoreExternalScripts") || "").split("\n").some(function (b) {
        return 0 < b.length && 0 <= a.indexOf(b);
      })
    );
  },
  zg = function (a, b) {
    var c;
    (c = Eg(b)) || ((c = w(b)), (c = !!yg[c.R]));
    return c || Fg(b) || Gg(a, b);
  },
  Gg = function (a, b) {
    return a.ta.some(function (c) {
      return c.K && c.isActive()
        ? c.K.some(function (d) {
            return y(new RegExp(d), b);
          })
        : !1;
    });
  },
  Ig = function (a) {
    if (!a.Pb) {
      a.Pb = !0;
      var b = a.fa();
      a = Object.keys(b).map(function (d) {
        var e = b[d];
        return "'" + d + "': " + (e.tb ? "(" + e.tb.toString() + ")('" + d + "')" : "window['" + d + "']");
      });
      if (0 < a.length && (!ta.tvt || !ta.tvt.captureVariables)) {
        var c = T.createElement("script");
        c.style.display = "none";
        c.textContent =
          "var tvt = tvt || {}; tvt.captureVariables = " +
          Hg +
          ";window.setTimeout(function() {tvt.captureVariables({" +
          a.join(",") +
          "})}, 2000);";
        (T.head || T.documentElement).appendChild(c);
      }
    }
  },
  Hg = function (a) {
    for (var b = new Date(), c = {}, d = Object.keys(a || {}), e, f = {}, g = 0; (e = d[g]); f = { Ka: f.Ka }, g++)
      if (a.hasOwnProperty(e) && "undefined" != typeof a[e])
        try {
          (f.Ka = []),
            (c[e] = JSON.stringify(
              a[e],
              (function (h) {
                return function (k, l) {
                  try {
                    if ("function" !== typeof l) {
                      if ("object" === typeof l && null !== l) {
                        if (l instanceof HTMLElement || l instanceof Node || -1 != h.Ka.indexOf(l)) return;
                        h.Ka.push(l);
                      }
                      return l;
                    }
                  } catch (t) {}
                };
              })(f)
            ));
        } catch (h) {}
    a = document.createEvent("CustomEvent");
    a.initCustomEvent("TvtRetrievedVariablesEvent", !0, !0, { variables: c, date: b });
    window.dispatchEvent(a);
  };
var Jg = function () {
    V.call(this, "Google Ads Conversion Tracking", 1);
  },
  Kg;
Aa(Jg, V);
var Lg = { Sb: "Google Ads Conversion Tracking", W: "Google Ads Remarketing Tag" },
  Mg = r("%s ${%s}", "Google Ads Conversion Tracking", "Conversion ID"),
  Ng = r("%s ${%s}", "Google Ads Remarketing Tag", "Conversion ID"),
  Og = new F("Tag", "Google Ads Conversion Tracking", Mg, "https://support.google.com/tagassistant/answer/2947038", void 0, void 0, void 0),
  Pg = new F("Tag", "Google Ads Remarketing Tag", Ng, "https://support.google.com/tagassistant/answer/2978937", void 0, void 0, void 0),
  Qg = { Sb: Og, W: Pg },
  Rg = {},
  Sg = {
    edu_pid: { type: 3, required: !0 },
    edu_plocid: { type: 3 },
    edu_pagetype: { type: 12, values: "home searchresults program lead complete other".split(" "), H: !0 },
    edu_totalvalue: { type: 2, H: !0 },
    flight_destid: { type: 3, required: !0 },
    flight_originid: { type: 3 },
    flight_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), H: !0 },
    flight_startdate: { type: 11, H: !0 },
    flight_enddate: { type: 11 },
    flight_totalvalue: { type: 2, H: !0 },
    hotel_hotel_id: { type: 3, required: !0 },
    hotel_pagetype: { type: 12, values: "home searchresults property cart purchase cancel other".split(" "), H: !0 },
    hotel_checkindate: { type: 11 },
    hotel_checkoutdate: { type: 11 },
    hotel_totalvalue: { type: 2, H: !0 },
    hrental_id: { type: 3 },
    hrental_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), H: !0 },
    hrental_startdate: { type: 11 },
    hrental_enddate: { type: 11 },
    hrental_totalvalue: { type: 2, H: !0 },
    job_id: { type: 1, required: !0 },
    job_locid: { type: 3 },
    job_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), H: !0 },
    job_totalvalue: { type: 2, H: !0 },
    local_id: { type: 3, required: !0 },
    local_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), H: !0 },
    local_totalvalue: { type: 2, H: !0 },
    listing_id: { type: 3, required: !0 },
    listing_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), H: !0 },
    listing_totalvalue: { type: 2 },
    ecomm_prodid: { type: 19, required: !0 },
    ecomm_category: { type: 1 },
    ecomm_pagetype: { type: 12, values: "home searchresults category product cart puchase other".split(" "), H: !0 },
    ecomm_totalvalue: { type: 2, H: !0 },
    travel_destid: { type: 3, required: !0 },
    travel_originid: { type: 3 },
    travel_pagetype: { type: 12, values: "home searchresults offerdetail cart purchase cancel other".split(" "), H: !0 },
    travel_startdate: { type: 11 },
    travel_enddate: { type: 11 },
    travel_totalvalue: { type: 2, H: !0 },
    dynx_itemid: { type: 3, required: !0 },
    dynx_itemid2: { type: 3 },
    dynx_pagetype: { type: 12, values: "home searchresults offerdetail conversionintent conversion other".split(" "), H: !0 },
    dynx_totalvalue: { type: 2, H: !0 }
  },
  Tg = [];
hb(Sg, function (a, b) {
  Tg.push(b.toLowerCase());
});
Jg.prototype.ub = function () {
  Kg ||
    ((Kg = []),
    hb(Qg, function (a) {
      Kg.push(new od(a.category, a.infoLink));
    }));
  return Kg;
};
var Ug = r("<%s> tag found.", "iframe"),
  Vg = r("<%s> tag found.", "img"),
  Wg = r("<%s> tag found.", "noscript"),
  Xg = r("<%s> tag found.", "script"),
  Yg = { iframe: Ug, img: Vg, noscript: Wg, script: Xg },
  Zg = r(" in the <%s> tag", "iframe"),
  $g = r(" in the <%s> tag", "img"),
  ah = r(" in the <%s> tag", "noscript"),
  bh = r(" in the <%s> tag", "script"),
  ch = { iframe: Zg, img: $g, noscript: ah, script: bh },
  dh = function (a) {
    var b = Gc([/(?:viewthrough)?conversion\/([^/?]*)/, /^((?![?]ai=)(.|\n))*$/], a);
    return "string" === typeof b
      ? (0 == b.length && (b = "undefined"), (a = z(RegExp("[&?;#]label=([^&?#]*)"), a)), "string" === typeof a ? b + ";" + a : b)
      : b;
  },
  eh = function (a) {
    a = a.label.split(";")[0];
    this.format = "copyable";
    return "undefined" == a ? "not set" : a;
  },
  fh = function (a) {
    a = z(/[^;]*;(.*)/, a.label);
    return "boolean" === typeof a || "undefined" == a ? "not set" : a;
  },
  gh = Tf("Conversion value missing in <noscript> tag."),
  hh = G("Mismatch of conversion ID in <script> tag and <%s> tag."),
  ih = G("Mismatch of conversion label in <script> tag and <%s> tag."),
  jh = M(Tf("Missing <noscript> tag."), "Code Snippet");
Jg.prototype.J = function () {
  return [
    R(
      "Google Ads Remarketing Tag",
      ["www.google.[a-z]*/ads/user-lists/"],
      Ng,
      Pg.infoLink || "",
      function (a) {
        var b = O(a);
        return (a = z(/\/ads\/user-lists\/(\d*)\//, b.A)) ? ((b = Qb(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [
        K(H("Conversion ID", eh)),
        I(H("Conversion Label", fh), "copyable"),
        tf("Troubleshoot", function (a) {
          return (a = a.redirectedFrom) && 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/")
            ? ((a = a.concat("&deb=c2&srr=n")),
              a.hasOwnProperty("fmt") || (a = a.concat("&fmt=1")),
              (this.infoLink = a = a.replace("script=0", "script=1")),
              "redirect url")
            : !1;
        }),
        S
      ]
    ),
    R(
      "Google Ads Conversion Tracking",
      ["www.google.[a-z]*/ads/conversion/"],
      Mg,
      Og.infoLink || "",
      function (a) {
        var b = O(a);
        return (a = z(/\/ads\/conversion\/(\d*)\//, b.A)) ? ((b = Qb(b, "label")), void 0 !== b ? a + ";" + b : a) : !1;
      },
      "",
      [K(H("Conversion ID", eh)), I(H("Conversion Label", fh), "copyable"), S]
    ),
    R(
      "Google Ads Conversion Tracking",
      ["googleadservices.com/pagead/", "googleads.g.doubleclick.net/pagead/"],
      Mg,
      Og.infoLink || "",
      function (a) {
        ef(Og, this, "Reset.");
        try {
          var b = O(a),
            c = b.v.get("data") || "";
          var d = !(Ub(b.v, "label") || Ub(b.v, "amp;label")) || !!c.match(/aw_remarketing_only(%3D|=)true/g);
        } catch (e) {
          d = !1;
        }
        if (d) ef(Pg, this, "URL detected as smart pixel.");
        else if (((d = O(a)), nb(d.A, "wcm"))) return !1;
        return dh(a.url);
      },
      "",
      [
        K(H("Conversion ID", eh)),
        I(H("Conversion Label", fh), "copyable"),
        tf("validation anchor", function (a) {
          a = O(a);
          return !!Nf(a);
        }).l(kh()),
        Jf("Conversion Value", "value"),
        L(Jf("Conversion Currency", "currency_code"), [
          jf(
            Ve("Conversion Currency should be exactly 3 characters.", function (a) {
              return 3 !== a.label.length;
            }),
            "value_not_set"
          ),
          jf(
            Ve("Conversion Currency should consists of only letters.", function (a) {
              return !z(/\w{3}/, a.label);
            }),
            "value_not_set"
          ),
          jf(
            Ve("Conversion Currency is not a standard currency.", function (a) {
              gb();
              return !(a.label in fb);
            }),
            "value_not_set"
          )
        ]),
        M(
          uf("Ref/URL GET param did not match with actual URL.", function (a) {
            var b = O(a);
            a = Gf(a);
            if (void 0 === a) return !1;
            a = a.R;
            var c = Qb(b, "url");
            if (void 0 !== c && a == w(decodeURIComponent(c)).R) return !1;
            b = Qb(b, "ref");
            return void 0 !== b && a == w(decodeURIComponent(b)).R ? !1 : void 0 !== c || void 0 !== b;
          }),
          "URLs"
        ),
        Lf(null, "data")
      ]
    ),
    L(
      R(
        "Website Call Metrics",
        ["www.gstatic.com/wcm/loader.js"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          return !!a.url;
        }
      ),
      [H("Script loaded."), G("Could not find _googWcmGet call.")]
    ),
    L(
      R(
        "Website Call Metrics",
        ["googleadservices.com/pagead/"],
        "Website Call Metrics",
        "http://www.google.com/ads/innovations/callmetrics.html",
        function (a) {
          a = O(a);
          return nb(a.A, "wcm");
        }
      ),
      [
        P("Requests", "Request", q, [
          L(N("Conversion ID", n(A, /pagead\/conversion\/([^/]*)\/wcm/)), [
            G("Conversion ID malformed", function (a) {
              return !y(/^\d+$/, a.label);
            })
          ]),
          Jf("Conversion Label", "cl").l(
            G("Conversion label not set", function (a) {
              return "100" == a.label;
            })
          ),
          Jf("Conversion Value", "cv"),
          Jf("Fallback", "fb"),
          S
        ])
      ]
    )
  ];
};
var lh = function () {
    return [
      G(
        "Conversion tag parameters object not correctly formed.",
        cf(function (a) {
          a = a.replace(/\s*\n\s*/g, "");
          return !(y(/\{.*\}$/, a) || y(/[a-zA-Z_$][a-zA-Z_$0-9.]+$/, a));
        })
      ),
      G("Keys and values must be separated using colons.", cf(Bc)),
      G("Missing commas in between key-value element pairs.", cf(Ec)),
      L(
        I(
          H("Conversion tag parameters", function (a) {
            a = a.label.replace(/\s*\n\s*/g, "");
            return z(/^\s*\{?(.+?)\}?\s*$/m, a);
          }),
          "esc_json"
        ),
        [
          Ve("Pass multiple values in an array.", cf(Fc)),
          G("Value passed as array has misplaced quotes.", cf(Dc)),
          We("Tag Paramater object could not be parsed."),
          G("Attribute key contains space or non-ASCII characters.", function (a) {
            return Cc(a.label).some(function (b) {
              b = b.split(":");
              return 1 < b.length && !z(/^["|']?\s*[a-zA-Z0-9_]+\s*["|']?$/g, b[0]);
            });
          })
        ]
      )
    ];
  },
  mh = function (a, b) {
    b = Nf(b);
    if (!b) return !1;
    var c = b.indexOf("google_tag_params=");
    if (0 > c) return !1;
    b = Ac("google_tag_params", "var " + b.substring(c).replace(/\\,/g, ","));
    if (!b) return !1;
    a.text = "google_tag_params";
    return b;
  },
  nh = function (a) {
    a = a
      ? N(
          "Conversion tag parameters",
          function (b) {
            b = O(b);
            return mh(this, b);
          },
          "esc_json"
        )
      : ag(
          "Conversion tag parameters",
          function (b) {
            b = b.getAttribute("src") || b.textContent;
            return "string" === typeof b && mh(this, w(b));
          },
          "esc_json"
        );
    L(K(a, "https://developers.google.com/adwords-remarketing-tag/parameters"), lh()).l([Ue("Custom parameter")]);
    return a;
  },
  kh = function () {
    var a = L(
      N(
        "Data",
        function (b) {
          b = O(b);
          return Nf(b);
        },
        "map"
      ),
      [
        G("Multiple product IDs need to be stored in an array.", function (b) {
          return y(/prodid=[^;]*\\,/, b.label);
        })
      ]
    );
    return P(
      "Requests",
      "Request",
      function (b) {
        b = O(b);
        return !!Nf(b);
      },
      [a, nh(!0), Lf("data").l(tf("data anchor"))]
    );
  };
Jg.prototype.bb = function (a, b) {
  return a.label == b.label && (a.category == Og.category || a.category == Pg.category || "Website Call Metrics" == a.category);
};
var oh = function (a, b) {
    return [
      L(K(H("Conversion ID", eh)), [
        jf(
          G("Conversion ID not set" + a + ".", function (c) {
            return c && "not set" == c.label ? "not set" : !c || ("1234567890" != c.label && 0 != c.label) ? !1 : "invalid";
          }),
          "id_not_set"
        ).otherwise(
          G("Conversion ID should not have quotations around it.", function (c) {
            var d = c.parent.label.split(";"),
              e = z(/['"](\d*)['"]/, d[0]);
            return "string" === typeof e ? ((d[0] = e), (c.label = e), (c.parent.label = d.join(";")), !0) : !1;
          }).otherwise(
            G("Conversion ID malformed" + a + ": %s.", function (c) {
              var d = c.parent.label.split(";"),
                e = z(/[^0-9]*([0-9]*)/, d[0]);
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
      L(I(H("Conversion Label", fh), "copyable"), [
        jf(
          G("Conversion label not set" + a + ".", function (c) {
            return !c || ("not set" != c.label && "null" != c.label) ? !1 : "not set";
          }),
          "label_not_set"
        )
      ]),
      L(
        ag("Conversion Value" + a, function (c, d) {
          return b && "Google Ads Conversion Tracking" == d.category ? b.call(this, c, d) || "not set" : !1;
        }),
        [
          jf(
            Ve("Conversion value not set" + a + ".", function (c) {
              return "not set" == c.label;
            }),
            "value_not_set"
          ).otherwise(
            jf(
              G("Conversion Value should not be prefixed with currency.", function (c) {
                gb();
                return c.label.substring(0, 3) in fb;
              }),
              "value_not_set"
            ).otherwise(
              jf(
                G("Dynamic conversion value in wrong format" + a + ".", function (c) {
                  return !Pc(c.label);
                }),
                "dynamic_value"
              )
            )
          )
        ]
      ),
      jg
    ];
  },
  ph = function (a) {
    var b = "noscript" == a ? "text()" : "@src";
    return L(
      mg(
        "Google Ads Conversion Tracking",
        Mg,
        Og.infoLink || "",
        r('//%s[contains(%s, "%s") or contains(%s, "%s")]', a, b, "googleadservices.com/pagead/", b, "googleads.g.doubleclick.net/pagead/"),
        function (c) {
          ef(Og, this, "Default");
          c = c.getAttribute("src") || c.textContent;
          y(/[?&]data(?:\.[a-zA-Z0-9_]+)?=/, c) && ef(Pg, this, "data param in DOM src");
          return dh(c);
        }
      ),
      oh(ch[a], function (c) {
        c = c.getAttribute("src") || c.textContent;
        return z(RegExp("[&?;#]value=([^&?#]*)"), c);
      })
    ).l([
      M(
        ag(
          Yg[a],
          function (c) {
            return gg(this, c);
          },
          "snippet_html"
        ),
        "Code Snippet"
      ),
      nh(!1),
      M(
        cg("Update to script based tracking.", function () {
          return "i" == a[0];
        }),
        "Code Snippet"
      )
    ]);
  },
  qh = function () {
    var a = /google_conversion_id\s*=\s*(?:[a-zA-Z._]*\s*=\s*)?([^;,]*)/g,
      b = L(
        mg("Google Ads Conversion Tracking", Mg, Og.infoLink || "", "//script", function (c) {
          var d = y(/google_conversion/i, c.textContent) && x(a, c.textContent);
          this.o = a.lastIndex;
          if (!d) return !1;
          var e = "" == d[1] ? "undefined" : d[1];
          c = c.textContent.substring(d.index);
          var f;
          lc && (f = new Date().getTime());
          var g = g || "";
          var h = c.replace(/\\\\/g, "__TA_BACKSLASH__").replace(/\\'/g, "__TA_SINGLE_QUOTE__").replace(/\\"/g, "__TA_DOUBLE_QUOTE__");
          d = z(RegExp("(?:^|[; \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*\\'([^\\']*)\\'\\s*(?:[;,\n]|$)", g), h);
          "string" !== typeof d &&
            (d = z(RegExp('(?:^|[;, \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*"([^"]*)"\\s*(?:[;,\n]|$)', g), h));
          d =
            d &&
            d
              .replace(/__TA_BACKSLASH__/g, "\\\\")
              .replace(/__TA_SINGLE_QUOTE__/g, "\\'")
              .replace(/__TA_DOUBLE_QUOTE__/g, '\\"');
          lc &&
            ((g = new Date().getTime() - f),
            1 < g && mc("Extract string google_conversion_labelDur: " + g + " Text Length: " + c.length + "result: " + d));
          g = d;
          "string" === typeof g && (e = e + ";" + g);
          return e;
        }),
        oh("", function (c, d) {
          var e = d.label.split(";");
          e = 1 < e.length ? e[1] : "";
          "not set" == e && (e = "");
          return Hc(
            [
              new RegExp(e + "(?:[^}])*google_conversion_value\\s*=\\s*([^;,}\\s]*)"),
              new RegExp("google_conversion_value\\s*=\\s*([^;,}\\s]*)(?:.|\\n)*?" + d.label.split(";")[1])
            ],
            c.textContent
          );
        })
      );
    b.l([
      M(
        $f("Remarketing Only Flag", function (c, d) {
          c = z(/google_remarketing_only\s*=\s*([a-z01!]+)/, c.textContent);
          "string" === typeof c && xc(c) ? ef(Pg, d, "google_remarketing_only") : c && ef(Og, d, "no remarketing marker in script");
          return c;
        }),
        "Code Snippet"
      ),
      M(
        Yf("Code Template", function (c) {
          return 0 < c.textContent.indexOf("goog_report_conversion") ? "Call on-site" : !1;
        }),
        "Code Snippet"
      ),
      M(
        U("Missing conversion.js script.", function () {
          return !Qa(T.scripts, function (c) {
            return !!c.src && y(/[/]conversion(_async)?.js/, c.src);
          });
        }),
        "Code Snippet"
      ),
      M(
        jf(
          U("Missing closing \x3c/script> tag.", function (c) {
            return !c.externalScript && Gc([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//, /<script.*>/], c.textContent);
          }),
          "missing_closing"
        ),
        "Code Snippet"
      ),
      M(
        jf(
          U("Incorrect script attribute.", function (c) {
            return !!c.getAttribute("language");
          }),
          "script_attribute"
        ),
        "Code Snippet"
      ),
      M(
        jf(
          bg("Missing CDATA comments.", function (c) {
            return (
              Jc([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//], c.textContent) &&
              Jc([/\/\/\s*<!\[CDATA\[/, /\/\/\s*]]\x3e/], c.textContent)
            );
          }),
          "cdata_comments"
        ),
        "Code Snippet"
      ),
      M(
        jf(
          cg("Missing line breaks may cause issues.", function (c) {
            c = c.textContent
              .replace(/[\t ]+/g, " ")
              .replace(/\s*\n\s*/g, "\n")
              .trim();
            return "string" === typeof c && 100 < c.length && c.split("\n").length < (-1 != c.indexOf("CDATA") ? 5 : 3);
          }),
          "line_break"
        ),
        "Code Snippet"
      ),
      M(
        jf(
          U("Code found outside of <body> tag.", function (c) {
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
        M(
          jf(
            cg("Code should be placed directly above the closing <body> tag.", function (c) {
              return !c.externalScript && "BODY" != c.parentNode.tagName;
            }),
            "body_tags"
          ),
          "Code Snippet"
        )
      ),
      M(
        ag(
          Xg,
          function (c) {
            var d = x(/google_conversion_id\s*=\s*([^;,]*)/im, c.textContent);
            return ig(this, d.index, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      K(
        $f("Custom parameter name", function (c) {
          c = Ac("google_custom_params", c.textContent);
          return "string" === typeof c && ((c = z(/(?:window\.)([a-zA-Z_$][a-zA-Z_$0-9]*)/, c)), "string" === typeof c)
            ? ((Rg[c] =
                "google_tag_params" == c
                  ? new qg()
                  : new qg(
                      new pg(
                        "Error",
                        "Google Ads Remarketing Tag",
                        "Required variable %s not found. Please check the developer console for errors.",
                        this.infoLink
                      )
                    )),
              ng(this.Y[0], '//script[contains(text(), "var ' + c + '")]'),
              c)
            : !1;
        }),
        "https://developers.google.com/adwords-remarketing-tag/parameters"
      ).l(
        L(
          $f("Custom Parameters Snippet", function (c) {
            return !!lf(this, Rg) && Ac(this.o.current(), c.textContent);
          }),
          lh()
        )
      ),
      $f("Report Conversion", function (c) {
        return z(/goog_report_conversion/, c.textContent);
      }),
      dg,
      eg,
      fg
    ]);
    return b;
  };
Jg.prototype.G = function () {
  return [
    qh(),
    ph("img"),
    ph("iframe"),
    ph("noscript"),
    mg("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//body", function (a) {
      return y(/_googWcmGet/, a.getAttribute("onload"));
    }).l(
      ag("Initialized onload."),
      M(
        Yf(
          "Script",
          function (a) {
            return gg(this, a.cloneNode(!1));
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      M(We("WCM loader script not detected."), "Code Snippet"),
      rh,
      sh
    ),
    mg("Website Call Metrics", "Website Call Metrics", "http://www.google.com/ads/innovations/callmetrics.html", "//script", function (a) {
      return "" != a.src ? y(/https?:\/\/www.gstatic.com\/wcm\/loader.js/, a.src) : y(/(_googWcmGet\s*\()/, a.textContent);
    }).l(
      Yf("Script loaded.", function (a) {
        return "" != a.src;
      }).otherwise(We("WCM loader script not detected.")),
      M(
        Yf(
          "Script",
          function (a) {
            var b = x(/(_googWcmGet\s*\()/, a.textContent);
            return !!b && ig(this, b.index, a);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ),
      rh,
      sh
    )
  ];
};
var sh = L(
    I(
      M(
        Te("gwcm", function () {
          for (var a = T.cookie.split(/; */), b = a.length, c = 0; c < b; c++) {
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
      M(
        H("Conversion Number", function (a) {
          a = Lc(unescape(a.label));
          return (a = Sa(a, function (b) {
            return "number" == b.key;
          }))
            ? ((this.text = "null" == a.value ? "Conversion number not set." : "Conversion Number"), "null" == a.value ? "" : a.value)
            : !1;
        }),
        "Metadata"
      ),
      M(
        H("Conversion Label", function (a) {
          a = Lc(unescape(a.label));
          a = Sa(a, function (b) {
            return "clabel" == b.key;
          });
          return null != a ? z(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      ).l(
        G("Conversion label not set", function (a) {
          return "100" == a.label;
        })
      ),
      M(
        H("Conversion Value", function (a) {
          a = Lc(unescape(a.label));
          a = Sa(a, function (b) {
            return "cvalue" == b.key;
          });
          return null != a ? z(/"(.*)"/, a.value) || a.value : !1;
        }),
        "Metadata"
      )
    ]
  ).otherwise(Te("No Cookie information for Web Call Metrics.")),
  rh = ag("Element ID or class name", function (a) {
    a = a.getAttribute("onload") || a.textContent;
    return z(/_googWcmGet\s*\(\s*'([^']*)'/, a) || z(/_googWcmGet\s*\(\s*"([^"]*)"/, a);
  }).l(
    We("WCM Number element should not contain markup.", function (a) {
      if (T.getElementById(a.label)) {
        a.text = "Element ID";
        a = T.getElementById(a.label).children;
        for (var b, c = 0; (b = a[c]); c++) if (b.nodeType == Node.ELEMENT_NODE) return !0;
      } else if (T.getElementsByClassName(a.label).length)
        for (a.text = "Class name", a = T.getElementsByClassName(a.label), c = 0; (b = a[c]); c++)
          for (var d, e = 0; (d = b.children[e]); e++) {
            if (d.nodeType == Node.ELEMENT_NODE) return !0;
          }
      else a.text = "Element ID or class name";
      return !1;
    }),
    G("Element ID or class name contains illegal character.", function (a) {
      return z(/w/, a.label);
    }).otherwise(
      G("Element ID or class name not matched in the DOM.", function (a) {
        return T.getElementById(a.label) || T.getElementsByClassName(a.label).length ? !1 : !0;
      })
    ),
    G("Element ID used for multiple elements. Use the class name instead.", function (a) {
      return 1 < T.querySelectorAll("#" + a.label).length;
    })
  ),
  uh = function (a) {
    var b = Ed(a, ["Website Call Metrics"]);
    if (1 < b.length) {
      var c = b.shift();
      b.forEach(function (f) {
        Ua(a, f);
        wd(c, f.relatedIssues);
      });
    }
    var d = Ed(a, jb(Lg)),
      e = d.filter(function (f) {
        return 0 == Md(f, [Vg, Wg]);
      });
    ["iframe", "img", "noscript"].forEach(function (f) {
      var g = Gd(d, Yg[f]);
      g.length &&
        e.forEach(function (h) {
          Ld(g, [h.label]).forEach(function (k) {
            var l = de(h);
            if ("Tag" == k.type && h != k && l) {
              l = E(k, "Conversion Value" + ch[f]);
              if (null != l) {
                var t = E(h, "Conversion Value");
                if (null != t && t.label != l.label) {
                  var C = parseFloat(t.label),
                    Q = parseFloat(l.label);
                  "not set" == t.label || !isNaN(C) || isNaN(Q) || y(/^\s*[$\u20ac\u00a2\u00a3]?\s*[0-9.]+/, t.label)
                    ? C == Q ||
                      isNaN(C) ||
                      isNaN(Q) ||
                      ((C = r("Conversion value mismatch between <script> and <%s> tag.", f)),
                      (ff(G(C), l, l.label).otherRelatedIssues = [t.id]))
                    : ((t.label = l.label), Cd(t, "Dynamic conversion value in wrong format"));
                } else Bd(k, l.text, l.label);
              }
              Ad(k.relatedIssues, [jg.text, "Update to script based tracking.", "Requests"]);
              Ua(a, k);
              th(h, k);
            }
          });
        });
    });
  },
  th = function (a, b) {
    [
      "Conversion ID malformed",
      "Conversion ID not set",
      "Conversion label not set",
      "Conversion value missing in <noscript> tag.",
      "Dynamic conversion value in wrong format"
    ].forEach(function (c) {
      $d(a, c) && Cd(b, c);
    });
    ud(a, b);
  };
Jg.prototype.Db = function (a, b, c) {
  var d = Ed(c, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]).filter(function (t) {
      return 1 == t.issueClass;
    }),
    e = d.filter(function (t) {
      return 0 == Md(t, [Vg, Ug, Wg]);
    });
  b = Gd(d, b);
  e = e.filter(function (t) {
    return 0 == Kd(t, Wg).length;
  });
  for (var f = 0; (d = e[f]); f++) {
    var g = !1,
      h = void 0;
    if (0 < b.length) {
      var k = void 0;
      if ("undefined;undefined" == d.label) (h = b.slice(0, 1)[0]), (g = !0);
      else if (0 == d.label.indexOf("undefined;")) (k = Kd(b, "Conversion Label", d.label.split(";")[1])), (g = 0 != k.length);
      else if (0 < d.label.indexOf(";undefined") || 1 == d.label.split(";").length)
        (k = Kd(b, "Conversion ID", d.label.split(";")[0])), (g = 0 != k.length);
      k && 0 < k.length ? (h = k[0]) : h || f != e.length - b.length || (h = b[0]);
    }
    if (h) {
      if (g)
        (d.label = h.label),
          (g = E(d, "Conversion ID")),
          (g.label = d.label.split(";")[0]),
          Cd(g, "Conversion ID not set"),
          (E(d, "Conversion Label").label = fh(d));
      else {
        g = (k = h.label.split(";")[0] == d.label.split(";")[0]) ? "Conversion Label" : "Conversion ID";
        k = k ? ih : hh;
        var l = E(d, g);
        k = D(l, k, a, "details");
        g = E(h.relatedIssues, g);
        k.otherRelatedIssues.push(g.id);
      }
      (g = Yd(h, 2)) ? (this.cb(d, g), Ua(h.relatedIssues, g)) : zd(h.relatedIssues, jg.text);
      g = ff(I(Zf("<" + a + "> tag"), "group"), sd, "");
      th(g, h);
      th(d, g);
      Ua(c, h);
    }
  }
};
var vh = function (a) {
  be(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"], function (b) {
    1 != b.issueClass ||
      vd(b, "Code Template", "Call on-site") ||
      E(b, Wg) ||
      E(b, eg.text) ||
      !E(b, Xg) ||
      $d(b, r(Xe.text, "")) ||
      D(b, jh);
  });
};
Jg.prototype.xc = function (a) {
  var b = Ed(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]),
    c = Kd(b, Ef.text);
  0 != c.length &&
    ((b = Kd(b, jg.text)),
    0 != b.length &&
      (b
        .filter(function (d) {
          var e = z(/([0-9])+;[^ ]+/, d.label);
          return "string" === typeof e && ((e = Kd(c, "Conversion ID", e)), 0 < e.length)
            ? (Ua(c, e[0]), Ua(a, e[0]), wh(this, d, e[0]), !0)
            : !1;
        }, this)
        .forEach(n(Ua, b)),
      b.forEach(function (d) {
        if (!z(/([0-9])+;[^ ]+/, d.label) && 0 < c.length) {
          var e = c.pop();
          Ua(a, e);
          wh(this, d, e);
        }
      }, this)));
};
var wh = function (a, b, c) {
    Cd(b, "Conversion ID malformed");
    Cd(b, "Conversion ID not set");
    Cd(b, "Conversion label not set");
    b.category = c.category;
    b.text = c.text;
    b.label = c.label;
    xd("Conversion ID", c, b);
    xd("Conversion Label", c, b);
    a.cb(b, c);
  },
  xh = function (a) {
    ce(a, "Google Ads Conversion Tracking", function (b) {
      if (!$d(b, "Dynamic conversion value in wrong format")) {
        var c = E(b.relatedIssues, "Remarketing Only Flag");
        c && xc(c.label)
          ? (ef(Pg, b, "Remarketing Only Flag true"), Cd(b, "Conversion Value"))
          : Xd(b.relatedIssues) && (ef(Pg, b, "AWCT tag does have smart pixel child."), Cd(b, "Conversion Value"));
      }
    });
  },
  yh = function (a) {
    be(a, jb(Lg), function (b) {
      "Tag" == b.type && zd(b.relatedIssues, "Missing conversion.js script.");
    });
  },
  zh = function (a) {
    ce(a, "Google Ads Remarketing Tag", function (b) {
      E(b, "Custom parameter") &&
        ((b = Sd(b, "Conversion tag parameters")),
        0 < b.length &&
          b.forEach(function (c) {
            zd(c.relatedIssues, "Tag Paramater object could not be parsed.");
            var d;
            if ((d = !ge(c.relatedIssues, "Error", !0))) d = !ge(c.relatedIssues, "Suggestion", !0);
            d && (c.deleted = "JS Variable found");
          }));
    });
  },
  Ah = function (a) {
    ce(a, "Google Ads Remarketing Tag", function (b) {
      Bd(b, "Conversion Label", "not set");
      Cd(b, "Conversion Value");
    });
  },
  Bh = function (a) {
    ce(a, "Google Ads Conversion Tracking", function (b) {
      zd(b.relatedIssues, "Custom parameter name");
    });
  },
  Ch = function (a) {
    E(a, "Report Conversion") && (a = E(a, "No HTTP response detected")) && (a.type = "Info");
  };
Jg.prototype.ea = function () {
  var a = [];
  Va(
    a,
    Sf("Google Ads Conversion Tracking", uh, ya(this.Db, this, "noscript", Wg), ya(this.Db, this, "img", Vg), Ch, ya(this.xc, this), xh),
    Sf("Google Ads Remarketing Tag", zh, Ah, Dh),
    Sf("Google Ads Conversion Tracking", yh, vh, Bh, Dh),
    Rf("Website Call Metrics", function (b) {
      b = Fd(b, "Website Call Metrics");
      b.length && E(b, "Script loaded.") && zd(b, "WCM loader script not detected.");
      b.length && Yd(b, 1) && zd(b, "Could not find _googWcmGet call.");
    })
  );
  return a;
};
var Dh = function (a) {
  a = Ed(a, ["Google Ads Conversion Tracking", "Google Ads Remarketing Tag"]);
  if ((a = E(a, "No HTTP response detected")))
    a.infoLink =
      "Google Ads Remarketing Tag" == ee(a).category
        ? "https://support.google.com/tagassistant/answer/2978937#http_response"
        : "https://support.google.com/tagassistant/answer/2947038#http_response";
};
Jg.prototype.Xa = function () {
  var a = Qe([
      hh,
      ih,
      jh,
      G("Conversion value mismatch between <script> and <noscript> tag."),
      G("Conversion value mismatch between <script> and <img> tag.")
    ]),
    b = Qe(a);
  a.forEach(Og.ob);
  b.forEach(Pg.ob);
  var c = this.G();
  Va(c, this.J());
  var d = Qe(c);
  d.forEach(function (e) {
    ef(Pg, e, "init");
  });
  Va(c, a, d, b, gh);
  return c;
};
Jg.prototype.fa = function () {
  return Rg;
};
Jg.prototype.ja = function () {
  return Object.keys(Rg).map(function (a) {
    return kf(
      new pg("Hidden", "Google Ads Remarketing Tag", "Custom parameter", "https://support.google.com/adwords/answer/3103357", function (b) {
        return null == b[a] ? !1 : a;
      }),
      "Hidden"
    ).l(
      M(I(new pg("Info", "Google Ads Remarketing Tag", a), "json"), "Custom Parameters").l(
        Ue("Custom Parameters Value", function (b) {
          return lf(this, b.template.context)
            ? ((this.text = this.o.current()), (this.context = this.o.currentValue()), JSON.stringify(this.context))
            : !1;
        }).l(
          G("Custom parameter field name in wrong case: '%s'", function (b) {
            b = b.text;
            return void 0 === Sg[b] && -1 < Tg.indexOf(b.toLowerCase()) ? b : !1;
          }),
          G("Number field should not be quoted: '%s'", function (b) {
            var c = b.text;
            return void 0 !== Sg[c] && 2 == Sg[c].type && "string" === typeof b.template.context ? c : !1;
          }),
          Ve("Unexpected value for enum: '%s'", function (b) {
            var c = b.text;
            return void 0 !== Sg[c] && 12 == Sg[c].type && -1 == Sg[c].values.indexOf(b.template.context) ? c : !1;
          }),
          G("Date should be formatted like this yyyy-mm-dd: '%s'", function (b) {
            var c = b.text;
            return void 0 === Sg[c] || 11 != Sg[c].type || /2\d{3}-\d{2}-\d{2}/.test(b.template.context) ? !1 : c;
          })
        )
      )
    );
  });
};
Cg(new Jg());
var Eh = function () {
  V.call(this, "Channel Intelligence", 99);
  this.K = ["channelintelligence.com/"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Eh, V);
Eh.prototype.J = function () {
  return [
    R(
      "Channel Intelligence",
      "channelintelligence.com/",
      "Channel Intelligence",
      "http://www.google.com/ads/channelintelligence/",
      n(A, /.channelintelligence\.com\/([^_]*)_landing.js/),
      "unchecked",
      [Fh, S]
    )
  ];
};
var Fh = I(
  H("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Cg(new Eh());
var Gh = function () {
  V.call(this, "Google Consumer Survey", 99);
};
pa(Gh, V);
Gh.prototype.ea = function () {
  return [];
};
Gh.prototype.J = function () {
  return [
    L(
      R(
        "Google Consumer Survey",
        "survey.g.doubleclick.net/survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        function (a) {
          return w(a.url).v.get("site");
        }
      ),
      [Hh, Ef, S]
    ),
    L(
      R(
        "Website Satisfaction Survey",
        "survey.g.doubleclick.net/async_survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        function (a) {
          return w(a.url).v.get("site");
        }
      ),
      [Hh, Ef, S]
    )
  ];
};
Gh.prototype.G = function () {
  return [
    L(
      mg(
        "Google Consumer Survey",
        "Google Consumer Survey ${Site ID}",
        "http://www.google.com/insights/consumersurveys/publishers",
        "//script",
        function (a) {
          var b = a.getAttribute("src");
          a = a.textContent;
          return !b && 510 > a.length && 0 < a.indexOf("//survey.g.doubleclick.net/survey?site=") && 0 < a.indexOf("document.write")
            ? z(/survey.g.doubleclick.net\/survey\?site=([^'">]*)/, a)
            : !1;
        }
      ),
      [
        Hh,
        jg.clone(),
        M(
          Yf(
            "HTML Snippet",
            function (a) {
              return ig(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).l(
          U("Missing closing \x3c/script> tag.", function (a) {
            return z(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          bg("Code should be added to <body> tag.", function (a) {
            return a.parentNode ? "BODY" != a.parentNode.nodeName : !1;
          })
        ),
        J(
          U("Premimum content section not found.", function () {
            return 0 == T.getElementsByClassName("p402_premium").length;
          }),
          'Wrap your premium content. Use a div with a class named "p402_premium".'
        )
      ]
    ),
    L(
      mg(
        "Website Satisfaction Survey",
        "Website Satisfaction Survey ${Site ID}",
        "https://support.google.com/consumersurveys/answer/6220389",
        "//script",
        function (a) {
          return (a = a.getAttribute("src")) && 0 <= a.indexOf("survey.g.doubleclick.net/async_survey") ? w(a).v.get("site") : !1;
        }
      ),
      [
        Hh,
        jg.clone(),
        M(
          Yf(
            "HTML Snippet",
            function (a) {
              return ig(this, 0, a);
            },
            "snippet_js"
          ),
          "Code Snippet"
        ).l(
          U("Missing closing \x3c/script> tag.", function (a) {
            return z(/<\/html>(.|\n)*$/m, a.textContent);
          }),
          J(
            bg("Code should be loaded asynchronously.", function (a) {
              a = a.getAttribute("async");
              return null === a || "false" == a;
            }),
            "Add 'async=\"\"' to the <script> tag."
          ),
          bg("Code found outside of <head> tag.", function (a) {
            return a.parentNode ? "HEAD" != a.parentNode.nodeName : !1;
          })
        )
      ]
    )
  ];
};
var Hh = L(
  I(
    H("Site ID", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  [
    G("Site ID should only contain alphanumeric characters.", function (a) {
      return !y(/^[_A-Za-z0-9]+$/, a.label);
    })
  ]
);
Cg(new Gh());
var Ih = function () {
  V.call(this, "Ensighten", 99);
  this.K = ["nexus.ensighten.com/"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Ih, V);
Ih.prototype.J = function () {
  return [
    R(
      "Ensighten",
      "nexus.ensighten.com/",
      "Ensighten",
      "http://www.ensighten.com/",
      n(A, /nexus\.ensighten\.com\/([^\/]*)\//),
      "unchecked",
      [
        Jf("Client ID", "ClientID"),
        Jf("Page ID", "PageID"),
        P(
          "Rules",
          "Rule %s",
          function (a) {
            a = Qb(O(a), "ruleId");
            return void 0 !== a ? a : !1;
          },
          [S],
          void 0,
          "unchecked"
        ),
        S
      ]
    )
  ];
};
Cg(new Ih());
var Jh, Kh;
Jh = /^(?:https?:)?\/\/(\d+)?\.?fls\.doubleclick\.net\/(activity[ij]?)[;&\/]/i;
Kh = function (a) {
  return new RegExp("[?/&;]" + a + "=([^;&#?]*)");
};
var Lh = function () {
  V.call(this, "Floodlight", 3);
};
Aa(Lh, V);
var Mh = {},
  Nh = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(jump|ad[ijflx]?)\/.*N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  Oh = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/clk[;&]([^;&]*)[;&]([^;&]*)[;&]/i,
  Ph = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.mo\.doubleclick\.net\/dartproxy\/dfa\.(?:click|mobile)\.handler\?k=N(\d+)\.([\d\w\.]+)\/B(\d+)/i,
  Qh = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/N?(\d+)?.*(ad[ijflx]?)\/([^;&]*)[;&].*[;&]tile=/i,
  Rh = /^(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net(?:\/ddm)?\/(activity[ij]?)[;&\/]/i,
  Sh = function (a, b, c) {
    return z(a, c.url, b);
  },
  Th = function (a, b) {
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
  Uh = function (a, b, c) {
    return N(a, n(Sh, b, c));
  },
  Wh = function (a, b) {
    return tf("URL type", function (c) {
      c = Sh(a, b, c);
      return "string" === typeof c ? Vh(c) : c;
    });
  },
  Xh = n(Uh, "Network"),
  Yh = function (a, b) {
    return K(I(Uh("Campaign", a, b), "linked"), "http://advertisers.doubleclick.net/app_pages/campaign/mediaplan.aspx?cid=%s");
  },
  Zh = K(
    L(
      I(
        H("Advertiser ID", function (a) {
          return a.label || "not set";
        }),
        "copyable"
      ),
      [
        G("Invalid or missing advertiser ID.", function (a) {
          return !y(/^[0-9]+$/, a.label || "");
        })
      ]
    ),
    "http://advertisers.doubleclick.net/app_pages/advertisers/spotlightactivities/default.aspx?aid=%s"
  ),
  ai = function (a, b) {
    return L(N(a, n(A, Kh(b))), [$h]);
  },
  bi = function (a, b) {
    return L(
      sf("Parameter name (changed from test function)", function (c) {
        this.Pa || (this.Pa = /[?/&;,]([^;&#,?/]+)=([^;&#?/]*)/g);
        c = O(c);
        var d = c.v.toString();
        d = d ? c : c.A;
        c = x(this.Pa, d);
        this.o = this.Pa.lastIndex;
        return !c || -1 != a.indexOf(c[1]) || (b && Hc(b, c[1])) ? !1 : ((this.text = c[1]), c[2]);
      }),
      [$h]
    );
  },
  ci = function (a, b) {
    return bg("HTML tag type must match DoubleClick tag type.", function (c) {
      var d = c.src || c.href;
      d = d ? Sh(a, b, { url: d }) : null;
      return "string" === typeof d && c.tagName != Vh(d).toUpperCase();
    });
  },
  di = function (a, b) {
    return ag("Script Type", function (c) {
      c = (c = c ? c.src || c.href : "") ? Sh(a, b, { url: c }) : null;
      return "string" === typeof c && Vh(c);
    }).l(
      M(
        ag("IFRAME content", function (c, d) {
          return nb(d.label, "i") && c.contentDocument && c.contentDocument.body ? xb(c.contentDocument.body.innerHTML, 1e3) : !1;
        }),
        "IFrame"
      )
    );
  },
  ei = K(
    uf('URLs should end with a "?".', function (a) {
      return !Rc(/.*[?]$/, a);
    })
  ),
  fi = rf("Potential missing parameter(s), found '%s'.", n(A, /(;;|&&)/)),
  gi = rf("Smart quotes not allowed in tag HREF/SRC.", n(Rc, /%E2%80%9[89]/i)),
  hi = K(
    G("Question marks must be encoded in site-supplied click strings.", function (a) {
      return y(/[?]+/, a.label);
    })
  ),
  $h = We('Found "[" or "]" in parameter %s; site may not be passing required information into key value.', function (a) {
    return "pc" != a.text && y(/(\[|\])/, a.label) ? a.text : !1;
  }),
  ji = G("ord value contains unsupported symbols.", function (a) {
    return "string" === typeof a.label && !y(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
  }).otherwise(
    uf("ord value not unique enough.", function (a, b) {
      return !ii(a) && 10 > b.label.length && "1" != b.label && 0 < b.label.length;
    })
  ),
  ki = n(Rc, /[?&;]ord=1[;&#?]/),
  li = n(Rc, /[?&;]ord=[^;&#?]+/),
  mi = N("ord value needs to be populated with a sales order ID.", function (a) {
    return ii(a) && !li(a);
  }).otherwise(
    K(
      rf("ord value needs to be populated with a random value.", function (a) {
        return !ii(a) && !li(a);
      })
    )
  ),
  ni = function (a) {
    var b = O(a);
    b.v.toString() ? (b = A(Kh("ord"), a)) : ((b = b.A), (b = z(Kh("ord"), b)));
    this.type = ii(a) && "1" != b ? "Info" : "Fine";
    return b;
  },
  oi = L(I(N("ord Parameter", ni), "copyable"), [ji, $h, mi]).otherwise(mi),
  pi = L(
    N("Order ID", function (a) {
      this.type = ii(a) ? "Info" : "Hidden";
      return !a.Adapted && ni(a);
    }),
    [ji, $h, mi]
  ).otherwise(mi),
  qi = L(kf(ai("num parameter", "num"), "Fine"), [
    G("num value needs to be populated with a random value.", function (a) {
      return "" == a.label;
    }),
    Cf("num parameter only required if ord=1.", function (a) {
      return !ki(a);
    }),
    G("num value contains unsupported symbols.", function (a) {
      return "string" === typeof a.label && !y(/^[-0-9.a-zA-Z\[\]]*$/, a.label);
    }),
    $h,
    We("num value not unique enough (10 or more characters required).", function (a) {
      return 10 > a.label.length;
    })
  ]).otherwise(Cf("Missing num parameter.", ki)),
  ri = rf("URL must be terminated by the ord= or num= parameter", function (a) {
    if (
      (a = Sa(a.url.split("?"), function (c) {
        return 0 < c.indexOf("ord=") || 0 < c.indexOf("num=");
      }))
    ) {
      a = a.split(";");
      for (var b = null; void 0 !== b && /^[\s\xa0]*$/.test((b = a.pop())); );
      return void 0 === b;
    }
    return !0;
  }),
  ii = function (a) {
    return !!Hc([Kh("qty"), Kh("cost")], O(a).A);
  },
  si = N("Version", function (a) {
    return ii(a) ? "Sales Activity Tag" : "Counter Activity Tag";
  }),
  Vh = function (a) {
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
  ti =
    "1x1 88x31 120x60 120x90 120x240 120x600 125x125 160x600 180x150 234x60 240x400 250x250 300x100 300x250 300x600 336x280 468x60 720x300 728x90 970x250".split(
      " "
    ),
  vi = L(ai("Size", "sz"), [
    We("sz= parameter value is not a recognized size.", function (a) {
      return !Ta(ti, a.label);
    })
  ]),
  wi = L(
    I(
      N("Click", function (a) {
        return z(RegExp("[?&;]click=([^?]?[^;&#]*)"), a.url.replace(/\?$/, ""));
      }),
      "link_expandable"
    ),
    [hi, $h]
  ),
  xi = [
    oi,
    qi,
    wi,
    L(ai("SP", "sp"), [
      G("sp= parameter incorrect.", function (a) {
        return !y(/\d+x\d+/, a.label);
      })
    ]),
    bi(["click", "num", "ord", "sp"]),
    fi
  ],
  Ai = [
    ai("Type", "type"),
    ai("Category", "cat"),
    pi,
    L(ai("Quantity", "qty"), [
      G("Quantity value contains unsupported symbols.", function (a) {
        return "string" === typeof a.label && !y(/^[0-9]+$/, a.label);
      })
    ]).otherwise(rf("Sales activity tag must have quantity argument set.", ii)),
    ai("Creative ID", "cid"),
    ai("Ad ID", "aid"),
    M(
      tf("studioV2", function (a) {
        var b = A(Kh("cid"), a);
        a = A(Kh("aid"), a);
        return b && a ? b + "_" + a : !1;
      }),
      "studioV2"
    ),
    qi,
    wi,
    L(ai("Cost", "cost"), [
      G("Cost value contains unsupported symbols.", function (a) {
        return !Pc(a.label);
      })
    ]).otherwise(rf("Sales activity tag must have cost argument set.", ii)),
    L(
      K(
        M(
          N(
            "Custom Dimensions",
            function (a) {
              for (var b = /(?:[?&;])(u[0-9]+=[^;&#?]*)/g, c = [], d = O(a); (a = x(b, d.A)); ) c.push(decodeURIComponent(a[1]));
              return 0 < c.length ? c.join(";") : !1;
            },
            "map"
          ),
          "Custom Dimensions"
        ),
        "https://support.google.com/ds/answer/6024747"
      ),
      [
        $h,
        K(
          rf("Custom dimension %s value is empty.", function (a) {
            for (var b = /(?:[?&;])(u[0-9]+)=([^;&#?]*)/g, c = O(a); (a = x(b, c.A)); ) if (0 == a[2].length) return a[1];
            return !1;
          }),
          "https://support.google.com/ds/answer/4397154"
        )
      ]
    ),
    fi,
    bi("cat click cost num ord prd qty src type".split(" "), [/^u[0-9]+$/])
  ],
  Bi = function () {
    var a = P("Sizes", r("DFA ${%s} ${%s}", "URL type", "Size"), q, [
      Wh(Nh, 1),
      vi,
      qi,
      wi,
      bi(["click", "ord", "num", "sz"]),
      fi,
      ei,
      gi,
      ri
    ]);
    return R(
      "Campaign Manager",
      Nh.source,
      r("DFA ${%s} N${%s} B${%s}", "URL type", "Network", "Campaign"),
      "https://support.google.com/ds/answer/2828176",
      n(Sh, Nh, 3)
    ).l(Wh(Nh, 1), Xh(Nh, 2), Uh("Site String", Nh, 3), Yh(Nh, 4), oi, a);
  },
  Ci = function () {
    return R("Campaign Manager", Oh.source, "Campaign Manager Click Tracker", "https://support.google.com/ds/answer/2828176", n(Th, 0)).l(
      L(
        K(
          I(
            N("Ad", function (a) {
              return Th(0, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/creatives/ad.aspx?id=%s"
        ),
        [
          G("Invalid or missing ad ID.", function (a) {
            return !y(/^\d+$/, a.label || "");
          })
        ]
      ),
      L(
        K(
          I(
            N("Placement ID", function (a) {
              return Th(1, a) || "not set";
            }),
            "linked"
          ),
          "http://advertisers.doubleclick.net/app_pages/siteplacements/properties.aspx?id=%s"
        ),
        [
          G("Invalid or missing Placement ID.", function (a) {
            return !y(/^\d+$/, a.label || "");
          })
        ]
      ),
      Wh(Oh, 1),
      L(
        N("Verifier", function (a) {
          return ((a = Th(2, a)) && a.split("?")[0]) || "";
        }),
        [
          G("Campaign Manager Click Tracker verifier not properly formatted.", function (a) {
            return !a.label;
          }),
          $h
        ]
      ),
      fi
    );
  },
  Di = function () {
    return R("Campaign Manager", Ph.source, "Campaign Manager Mobile", "https://support.google.com/ds/answer/2828176", n(Sh, Ph, 2)).l(
      Xh(Ph, 1),
      Uh("Site String", Ph, 2),
      Yh(Ph, 3),
      xi,
      ri
    );
  },
  Ei = function (a) {
    var b = [
      ai("Tile", "tile").l(
        K(
          We("Tile number should be between 1 and 16", function (c) {
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
      ai("Size", "sz"),
      ai("Tag ID", "tagid"),
      ai("oba", "oba"),
      ai("Keywords", "kw"),
      bi("kw oba oe ord sz site tagid tile".split(" ")),
      ri
    ];
    a && Va(b, a);
    return R("Google Ad Manager", Qh.source, r("DFP ${%s}", "URL type"), "http://support.google.com/dfp/", n(A, Qh)).l(
      Xh(Qh, 1),
      Wh(Qh, 2),
      ai("Site", "site"),
      ai("Encoding", "oe"),
      oi,
      P("Ad Slots", r("%s ${%s}", "Ad Slot", "Tile"), q, b)
    );
  },
  Gi = function (a) {
    var b = R(
      "Floodlight",
      Jh.source,
      r("%s Dynamic ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return A(Jh, e) || z(Kh("src"), O(e).A);
      }
    ).l(Zh, si, Wh(Jh, 2), If("Customer ID", "cid"), If("Ad ID", "aid"), ei, gi, ri, tf("validation anchor"));
    if (0 < arguments.length) {
      for (var c = Qe(Ai), d = 0; d < arguments.length; d++) Va(c, arguments[d]);
      b.l(P("Requests", "Request %s", q, c, Fi));
    }
    return b;
  },
  Hi = function (a) {
    var b = R(
      "Floodlight",
      Rh.source,
      r("%s Static ${%s}", "Floodlight", "Advertiser ID"),
      "https://support.google.com/ds/answer/2828176",
      function (e) {
        return z(Kh("src"), O(e).A);
      }
    ).l(Zh, si, Wh(Rh, 1), Jf("Customer ID", "cid"), Jf("Ad ID", "aid"), ei, gi, ri);
    if (0 < arguments.length) {
      for (var c = Qe(Ai), d = 0; d < arguments.length; d++) Va(c, arguments[d]);
      b.l(P("Requests", "Request %s", q, c, Fi));
    }
    return b;
  },
  Ii = function () {
    var a = RegExp("m[0-9]+:([^;|]*)");
    return L(H("Merchant Center ID", n($e, RegExp("m[0-9]*:([^;|]*)"))), [
      G("Merchant Center ID attribute must not contain an index.", function (b) {
        return z(a, b.parent.label);
      })
    ]);
  },
  Ji = function (a, b) {
    return H(a, function (c) {
      return z(new RegExp(b + c.label + ":([^;|]*)"), c.parent.parent.label);
    });
  },
  Ki = function () {
    return L(
      tf("prd", function (a) {
        return (a = A(Kh("prd"), a)) ? wc(a + "") : !1;
      }),
      [
        Ii(),
        H("Country", n($e, RegExp("c:([^;|]*)"))),
        H("Language", n($e, RegExp("l:([^;|]*)"))),
        G('Missing index for cart item "%s".', n($e, /(?:^|;)([ipq]):[^;|]*/)),
        P(
          "Products",
          "Item %s",
          q,
          [
            L(Ji("Item ID", "i"), [
              G("Product Item ID is missing.", function (a) {
                return "" == a.label;
              }).otherwise(G("Product Item ID contains illegal characters.", n($e, /[<:?]/)))
            ]).otherwise(G("Product Item ID is missing.")),
            L(Ji("Price per item", "p"), [
              G("Product Item price is missing.", function (a) {
                return "" == a.label;
              }).otherwise(G("Product Item price should be a number.", n($e, /[^-.0-9]+/)))
            ]).otherwise(G("Product Item price is missing.")),
            L(Ji("Quantity", "q"), [
              G("Product Item quantity is missing.", n(Ze, "")).otherwise(
                G("Product Item quantity should be an integer.", n($e, /[^0-9]+/))
              )
            ]).otherwise(G("Product Item quantity is missing.")),
            G("Item index should start at 1.", n(Ze, "0")),
            L(Ji("Account ID", "a"), [
              G("Account ID should be an integer.", function (a) {
                return !z(/^[0-9]*/, a.label);
              }),
              G("Account ID should not be empty.", function (a) {
                return "" == a.label.trim();
              })
            ]),
            Ji("Country", "c"),
            Ji("Language", "l")
          ],
          function (a, b) {
            this.Sa || (this.Sa = /[ipq]([0-9]+):([^;|]*)[;|]?/g);
            a = z(this.Sa, b.parent.label);
            this.o = this.Sa.lastIndex;
            return a && 0 == Ld(b, [a + ""]).length ? a : !1;
          }
        ),
        G("Item indices should be subsequent order and no index must be skipped.", function (a) {
          if ((a = E(a, "Products"))) {
            if (0 < Ld(a, ["", "0"]).length) return !1;
            for (var b = 1, c = a.relatedIssues.length + 1; b < c; b++) if (0 == Ld(a, [b + ""]).length) return b + "";
          }
          return !1;
        }),
        G("prd attribute malformed.", function (a) {
          return !y(/^([maclipq]([0-9]*):([^;|]*)($|[;|]))+$/, a.label);
        }),
        G("Attribute %s occurs multiple times.", function (a) {
          a = vc(/([mclipq][0-9]*):(?:[^;|]*)(?:$|[;|])/g, a.label).sort();
          for (var b = 0, c = a.length - 1; b < c; b++) if (a[b + 1] == a[b]) return a[b];
          return !1;
        })
      ]
    );
  },
  Fi = function (a) {
    if (!ii(a)) return "${bucketIndex}";
    a = O(a).A;
    var b = z(Kh("ord"), a);
    return null == b || "1" == b ? "num=" + z(Kh("num"), a) : "ord=" + b;
  },
  Li = function (a) {
    a = (a = Th(2, a)) ? a.split("?") : [];
    return 1 < a.length ? (a.shift(), a.join("?")) : "";
  };
Lh.prototype.J = function () {
  return [
    Bi().l(S, Ef),
    Ci().l(
      P(
        "Tags",
        "Click Tracker",
        q,
        [
          L(N("Click-through URL", Li), [
            rf("Campaign Manager Click Tracker click-through URL must start with http://, https://, tel://, or mailto://", function (a, b) {
              return "ds" == O(a).v.get("u") ? !1 : !y(/^(http|https|mailto|tel):\/\//, b.label);
            })
          ]),
          $h,
          K(
            uf("Replace semicolons in <meta> click-tracker tag with their ASCII equivalent (%3b)", function (a) {
              return 302 == a.statusCode && -1 != a.url.indexOf(";");
            })
          ),
          S,
          Ef
        ],
        function (a) {
          return a.url;
        }
      )
    ),
    Di().l(S, Ef),
    Ei(S),
    Gi(S, Ki(), Ef),
    Hi(S, Ki(), Ef)
  ];
};
var Mi = function (a, b, c) {
  var d = new Uf(
    b.type,
    b.category,
    b.text,
    b.infoLink,
    c,
    function (e, f) {
      this.aa = {};
      this.aa.Adapted = !0;
      this.aa.node = e;
      this.aa.url = e ? e.src || e.href : "";
      if ((e = Mf(b, this.aa.url) && b.ha(this.aa, f))) this.text = b.text;
      return e;
    },
    b.format
  );
  b.view && M(d, b.view);
  b.X && (d.X = 2 == b.X.issueClass ? Mi(a, b.X) : b.X.clone());
  b.Y.forEach(function (e) {
    d.Y.push(2 == e.issueClass ? Mi(this, e) : e.clone());
  }, a);
  return d;
};
m = Lh.prototype;
m.ja = function () {
  return [];
};
m.fa = function () {
  return Mh;
};
m.ea = function () {
  return [];
};
m.G = function () {
  return [
    Mi(
      this,
      Bi(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(
      jg,
      hg().l(
        dg,
        U("Jump tag type found in non-anchor HTML tag.", function (a, b) {
          b = E(b.parent, "URL type");
          return !(!b || "jump" != b.label || "A" == a.tagName);
        }),
        di(Nh, 1),
        ci(Nh, 1)
      )
    ),
    Mi(
      this,
      Ci(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(
      lg(
        "Tags",
        "Click Tracker",
        [
          ag("Click-through URL", function (a, b) {
            return Li({ url: b.label });
          }),
          hg().l(dg)
        ],
        function (a, b) {
          return b.parent.template.aa.url;
        }
      )
    ),
    Mi(
      this,
      Di(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(jg, hg().l(dg)),
    Mi(
      this,
      Ei(),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ).l(jg, hg().l(dg, di(Qh, 2), ci(Qh, 2))),
    Mi(
      this,
      Gi(jg, hg().l(dg, di(Jh, 2), ci(Jh, 2))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    ),
    Mi(
      this,
      Hi(jg, hg().l(dg, di(Rh, 1), ci(Rh, 1))),
      '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'
    )
  ];
};
m.Ya = ab([]);
Cg(new Lh());
var Ni = function (a) {
    return K(
      G("Unknown method name: '%s'", function (b) {
        var c = b.text.toLowerCase();
        return !a(c) && !a("_" + c) && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#unknown_method"
    );
  },
  Oi = function (a, b) {
    return G("Wrong case for method name: '%s'", function (c) {
      var d = a(c),
        e = c.text.toLowerCase();
      return !d && b(e) && c.text;
    });
  },
  Pi = function (a) {
    return K(
      Ve("Deprecated method used: '%s'", function (b) {
        var c = a(b);
        return !!c && !!c.da && b.text;
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#remove_method"
    );
  },
  Qi = function (a) {
    return G("Retired method used: '%s'", function (b) {
      var c = a(b);
      return !!c && !!c.fb && b.text;
    });
  },
  Ri = function (a, b, c, d) {
    var e = (c.j || []).length;
    c.C && (e -= c.C);
    var f = d.length;
    if (f < e)
      return (
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
        r("Missing %s required parameter(s) for method '%s'.", e - f, b)
      );
    if (f > (c.j || []).length)
      return (
        (c = f - (c.j || []).length),
        (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
        r("Method '%s' has %s additional parameter.", b, c)
      );
    for (e = 0; e < f; e++)
      if (c.types && c.types[e] && (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) && x(/^["'].*["']$/, d[e]))
        return (
          (a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes"),
          r("The value for parameter '%s' in method '%s' should not be quoted.", c.j[e], b)
        );
    return !1;
  };
var Si = /^ga[.(]/,
  Ti = /\(([^;]+)\)/g,
  Ui = /\(([^;]+)\)/g,
  Vi = /(?:.|\n)*?(?:ga\.|tracker\.)([^;]*?);/g,
  Wi = /['"]?(?:(.*\.)?)([a-zA-Z0-9_:]*)['"]?/,
  Xi = { hitCallback: 7, sessionControl: 1 },
  Yi = {
    create: {
      j: ["trackingId", "auto", "cookieDomain", "name", "opt_configObject"],
      types: [1, 11, 11, 11, 5],
      C: 4,
      O: {
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
    require: { j: ["module", "script"], C: 1 },
    send: {
      variations: {
        appview: { j: ["hitType", "appName", "appVersion"], C: 1, O: Xi },
        event: {
          j: ["hitType", "eventCategory", "eventAction", "eventLabel", "eventValue"],
          types: [1, 1, 1, 1, 3],
          C: 2,
          O: Xi,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/events"
        },
        exception: { j: ["hitType", "exDescription", "exFatal"], C: 1, O: Xi, types: [1, 1, 2] },
        item: {},
        pageview: {
          j: ["hitType", "page", "title"],
          types: [1, 1, 1],
          C: 2,
          O: Xi,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/pages"
        },
        social: {
          j: ["hitType", "socialNetwork", "socialAction", "socialTarget"],
          O: Xi,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"
        },
        timing: {
          j: ["hitType", "timingCategory", "timingVar", "timingValue", "timingLabel"],
          types: [1, 1, 1, 3, 1],
          O: Xi,
          C: 1,
          link: "//developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"
        },
        transaction: {}
      }
    },
    set: {
      j: ["fieldName", "value"],
      types: [1, 12],
      O: {
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
      Ia: 1,
      link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"
    },
    get: { j: ["fieldName"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced" }
  },
  Zi = {
    displayfeatures: {},
    ecommerce: {
      addItem: {
        j: "id name sku category price quantity".split(" "),
        C: 4,
        O: {},
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      addTransaction: {
        j: ["id", "affiliation", "revenue", "shipping", "tax"],
        C: 4,
        O: {},
        L: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"
      },
      clear: { j: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" },
      send: { j: [], O: Xi, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" }
    },
    ec: {
      addProduct: {
        j: ["productObject"],
        types: [5],
        O: { id: 1, name: 1, brand: 1, category: 1, variant: 1, price: 1, quantity: 3, coupon: 1, position: 3 },
        Ia: 0,
        eb: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addPromo: {
        j: ["promoObject"],
        types: [5],
        O: { id: 1, name: 1, promo: 1, position: 1 },
        Ia: 0,
        eb: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      addImpression: {
        j: ["impressionObject"],
        types: [5],
        O: { id: 1, name: 1, list: 1, brand: 1, category: 1, variant: 1, position: 3, price: 1 },
        Ia: 0,
        eb: ["id", "name"],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      },
      setAction: {
        j: ["action", "actionObject"],
        C: 1,
        types: [1, 5],
        O: { id: 1, affiliation: 1, revenue: 1, tax: 1, shipping: 1, coupon: 1, list: 1, step: 3, option: 1 },
        Ia: 1,
        eb: ["id"],
        L: "_gat.GA_EComm_.Transactions_",
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce"
      }
    },
    inpage_linkid: {},
    linker: {
      decorate: { j: ["target"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain" },
      autoLink: {
        j: ["targets", "autolinkAnchor", "autolinkForm"],
        C: 2,
        types: [6, 4, 4],
        link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"
      }
    }
  },
  $i = [];
hb(Yi, function (a, b) {
  $i.push(b.toLowerCase());
});
hb(Zi, function (a, b) {
  var c = b.toLowerCase();
  hb(a, function (d, e) {
    $i.push(c + ":" + e.toLowerCase());
  });
});
var aj = {},
  bj = function (a) {
    var b = a.text;
    if ("require" == b) (b = a.label.split(",")), 1 < b.length && ((b = z(/['"]([a-zA-Z0-9]*)['"]/, b[1])), (aj[b] = a.label));
    else if (0 < b.indexOf(":")) return (a = b.split(":")), (a = 2 == a.length && a.shift()), !aj[a] && a;
    return !1;
  },
  dj = function (a) {
    var b = Yi,
      c = a.text,
      d = c.split(":"),
      e = 2 == d.length && d.shift();
    "string" === typeof e && ((b = Zi[e]), (c = d.join(":")));
    return b ? (b[c] && b[c].Nc ? ((a = cj(a)), a.shift(), (a = z(/['"]?([^'"]*)['"]?/, a[0])), b[c].Nc[a] || b[c]) : b[c]) : null;
  },
  ej = function (a) {
    var b = a.split(":");
    b = 2 == b.length && b.shift();
    if ("string" === typeof b) {
      if ("_" == b.charAt(0)) return !1;
      if (!Zi[b]) return !0;
    }
    return Ta($i, a.toLowerCase());
  },
  fj = function (a) {
    return Ta($i, a.toLowerCase());
  },
  cj = function (a) {
    if (y(/^[_:a-zA-Z]+\(/, a.label)) {
      var b = a.text;
      a = z(/\s*(?:[^\(]*)\(([^\)]*)\)/, a.label);
      a = "string" === typeof a ? (/^[\s\xa0]*$/.test(a) ? b : r("%s, %s", b, a)) : "";
      b = Cc(a);
    } else b = Cc(a.label);
    return b;
  },
  gj = function () {
    return L(
      $f("Method", function (a, b) {
        var c = b.label;
        var d = Ti.lastIndex;
        if (0 != c.indexOf("ga(function")) {
          Ti = Ui;
          Ti.lastIndex = d;
          var e = z(Ti, c);
        }
        "string" !== typeof e && ((Ti = Vi), (Ti.lastIndex = d), (e = z(Ti, c)));
        c = e;
        this.o = Ti.lastIndex;
        if ("string" === typeof c && (d = zc(c)))
          if ((d = x(Wi, d[0]))) {
            e = RegExp;
            var f = d[1] || "";
            b = ee(b).label;
            f && (f = f.replace(".", ""));
            b = r("['\"]create['\"]\\s*,\\s*[\"']%s[\"'](?:,\\s{\\s*name:\\s[\"']%s[\"'])?", b, f);
            if (!z(new e(b, "im"), a.textContent)) return !1;
            a = this.text = d[2];
            this.infoLink = (Yi[a] && Yi[a].link) || null;
          } else return !1;
        return c;
      }),
      [
        G('Missing require for plugin "%s".', bj),
        Ni(ej),
        Oi(dj, fj),
        Pi(dj),
        Qi(dj),
        L(
          K(
            G("%s", function (a) {
              var b = cj(a);
              b.shift();
              var c = dj(a),
                d;
              if ((d = !!c && !!c.j))
                a: {
                  a = a.text;
                  var e = c.j.length;
                  c.C && (e -= c.C);
                  d = b.length;
                  if (d < e && (0 == d || !c.O || x(/^["'].*["']$/, b[d - 1])))
                    (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter"),
                      (d = r("Missing %s required parameter(s) for method '%s'.", e - d, a));
                  else if (d > c.j.length)
                    (b = d - c.j.length),
                      (this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter"),
                      (d = r("Method '%s' has %s additional parameter.", a, b));
                  else {
                    for (e = 0; e < d; e++)
                      if (
                        c.types &&
                        c.types[e] &&
                        (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) &&
                        x(/^["'].*["']$/, b[e])
                      ) {
                        this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes";
                        d = r("The value for parameter '%s' in method '%s' should not be quoted.", c.j[e], a);
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
            Te(
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
var hj = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gat/methods/gaJSApi_gat",
      methods: {
        _anonymizeIp: {},
        _createTracker: { j: ["opt_account", "opt_name"], C: 2, types: [1, 1], L: 5 },
        _forceSSL: { j: ["forceSSL"], C: 1, types: [4] },
        _getTracker: { j: ["account"], types: [1], da: !0, L: 5 },
        _getTrackerByName: { j: ["opt_name"], C: 1, types: [1], L: 5 },
        _getTrackers: { L: 6 }
      }
    }
  ],
  ij = {};
hj.forEach(function (a) {
  lb(ij, a.methods);
});
var jj = [];
hb(ij, function (a, b) {
  jj.push(b.toLowerCase());
});
var kj = function (a) {
    return ij[a.text];
  },
  lj = function (a) {
    return Ta(jj, a.toLowerCase());
  },
  mj = function () {
    return L(
      Ue("Method", function (a) {
        return (a = x(/([_.a-zA-Z]*)\((.*)\)/, a.label)) ? ((this.text = a[1]), a[2]) : !1;
      }),
      [
        G("Missing leading '_' in method name: '%s'", function (a) {
          return lj("_" + a.text) && a.text;
        }),
        Ni(lj),
        Oi(kj, lj),
        Pi(kj),
        Qi(kj),
        G("%s", function (a) {
          var b = a.label.length ? a.label.split(",") : [],
            c = kj(a);
          return !!c && Ri(this, a.text, c, b);
        })
      ]
    );
  },
  nj = function () {
    return K(
      L(
        $f("_gat", function (a) {
          var b = /_gat\.([_a-zA-Z.]*\([^)]*\))/g;
          b.lastIndex = this.o;
          a = z(b, a.textContent);
          this.o = b.lastIndex;
          return a ? a : !1;
        }),
        [mj()]
      ),
      "http://developers.google.com/analytics/devguides/collection/gat/methods/"
    );
  };
var oj = function (a, b, c) {
    this.Aa = a;
    this.za = b;
    this.Fb = c;
  },
  pj = {};
pj.async = new oj(
  n(r, "['\"]%s_setAccount['\"]\\s*,\\s*['\"]%s['\"]"),
  { Lb: /^_gaq\.push/, method: /\s*(\[(?:(?!\]\s*,).|\n)*\])\s*(?:,|\))\s*/g, Aa: /['"](?:(.*\.)?)([a-zA-Z0-9_]*)['"]/ },
  function (a) {
    a = z(/^\s*\[\s*((.|\n)*?)\s*\]\s*$/, a);
    return Cc("string" === typeof a ? a : "");
  }
);
pj.sync = new oj(
  n(r, "_gat.%s_getTracker\\(['\"]%s['\"]\\)"),
  { Lb: /^pageTracker\./, method: /\s*([^\)]*\)\s*$)/g, Aa: /(?:(.*\.)?)\.([a-zA-Z0-9_]*)/ },
  function (a, b) {
    a = z(/\s*(?:[^\(]*)\(([^\)]*)\)/, a);
    a = "string" === typeof a ? (/^[\s\xa0]*$/.test(a) ? b : r("%s, %s", b, a)) : "";
    return Cc(a);
  }
);
var qj = [
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration",
      methods: {
        _deleteCustomVar: { j: ["index"], types: [2] },
        _getName: { j: [], L: 1 },
        _getAccount: { j: [], L: 1 },
        _getVersion: { j: [], L: 1 },
        _getVisitorCustomVar: { j: ["index"], types: [2], L: 1 },
        _initData: { j: [], types: [], da: !0 },
        _setAccount: { j: ["accountID"] },
        _setCookiePersistence: { j: ["milliseconds"], types: [3], da: !0 },
        _setCustomVar: { j: ["index", "name", "value", "opt_scope"], types: [2, 1, 1, 2], C: 1 },
        _setSampleRate: { j: ["newRate"], types: [10] },
        _setSessionTimeout: { j: ["newTimeout"], types: [10], da: !0 },
        _setSessionCookieTimeout: { j: ["cookieTimeoutMillis"], types: [3] },
        _setSiteSpeedSampleRate: { j: ["sampleRate"], types: [3] },
        _setVar: { j: ["newVar"], da: !0 },
        _setVisitorCookieTimeout: { j: ["cookieTimeoutMillis"], types: [3] },
        _trackPageLoadTime: { j: [], da: !0, link: "http://support.google.com/analytics/bin/answer.py?answer=1205784" },
        _trackPageview: { j: ["opt_pageURL"], C: 1 }
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
        _setCookieTimeout: { j: ["newDefaultTimeout"], types: [3], Bd: [1], da: !0 },
        _setReferrerOverride: { j: ["newReferrerUrl"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory",
      methods: {
        _cookiePathCopy: { j: ["newPath"] },
        _getLinkerUrl: { j: ["targetUrl", "useHash"], L: 1 },
        _link: { j: ["targetUrl", "useHash"] },
        _linkByPost: { j: ["formObject", "useHash"] },
        _setAllowHash: { j: ["bool"], types: [4], da: !0 },
        _setAllowLinker: { j: ["bool"], types: [4] },
        _setCookiePath: { j: ["newCookiePath"] },
        _setDomainName: { j: ["newDomainName"] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEcommerce",
      methods: {
        _addItem: { j: "orderId sku name category price quantity".split(" ") },
        _addTrans: { j: "orderId affiliation total tax shipping city state country".split(" "), L: "_gat.GA_EComm_.Transactions_" },
        _trackTrans: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking?",
      methods: { _trackEvent: { j: ["category", "action", "opt_label", "opt_value", "opt_noninteraction"], types: [1, 1, 1, 2, 4], C: 3 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSearchEngines",
      methods: {
        _addIgnoredOrganic: { j: ["newIgnoredOrganicKeyword"] },
        _addIgnoredRef: { j: ["newIgnoredReferrer"] },
        _addOrganic: {
          j: ["newOrganicEngine", "newOrganicKeyword", "opt_prepend", "opt_displayName", "opt_urlPattern"],
          types: [1, 1, 4, 1, 1],
          C: 3
        },
        _clearIgnoredOrganic: { j: [] },
        _clearIgnoredRef: { j: [] },
        _clearOrganic: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSocialTracking",
      methods: { _trackSocial: { j: ["network", "socialAction", "opt_target", "opt_pagePath"], C: 2 } }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiWebClient",
      methods: {
        _getClientInfo: { j: [], L: 4 },
        _getDetectFlash: { j: [], L: 4 },
        _getDetectTitle: { j: [], L: 4 },
        _setClientInfo: { j: ["bool"], types: [4] },
        _setDetectFlash: { j: ["bool"], types: [4] },
        _setDetectTitle: { j: ["bool"], types: [4] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUrchin",
      methods: {
        _getLocalGifPath: { j: [], L: 1 },
        _getServiceMode: { j: [], L: 3 },
        _setLocalGifPath: { j: ["newLocalGifPath"] },
        _setLocalRemoteServerMode: { j: [] },
        _setLocalServerMode: { j: [] },
        _setRemoteServerMode: { j: [] }
      }
    },
    {
      link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUserTiming",
      methods: { _trackTiming: { j: ["category", "variable", "time", "opt_label", "opt_sampleRate"], types: [1, 1, 3, 1], C: 2 } }
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
        _setAutoTrackOutbound: { j: [], types: [], fb: !0 },
        _setTrackOutboundSubdomains: { j: [], types: [], fb: !0 },
        _setHrefExamineLimit: { j: [], types: [], fb: !0 },
        _setMaxCustomVariables: { j: ["maxCustomVars"], types: [2] },
        _setPageGroup: { j: ["index", "value"], types: [3, 1] },
        _setTransactionDelim: { j: ["delim"], types: [1] },
        _setXKey: { j: ["key"], types: [1] },
        _setXValue: { j: ["value"], types: [1] },
        _visitCode: { j: [] }
      }
    }
  ],
  rj = {};
qj.forEach(function (a) {
  lb(rj, a.methods);
  hj.forEach(function (b) {
    hb(b, function (c, d) {
      rj["gat." + d] = c;
    });
  });
});
var sj = [];
hb(rj, function (a, b) {
  sj.push(b.toLowerCase());
});
var tj = function (a) {
    return rj[a.text];
  },
  uj = function (a) {
    return Ta(sj, a.toLowerCase());
  },
  vj = function (a) {
    var b = Sa(qj, function (c) {
      return void 0 !== c.methods[a];
    });
    return b ? b.methods[a].link || b.link : null;
  },
  xj = function (a) {
    var b = pj[a];
    return K(
      L(
        $f("Statements", function (c) {
          return b.za && (this.o = c = Ic(c.textContent, this.o)) && z(b.za.Lb, c.text) ? c.text : !1;
        }),
        [wj(b)]
      ),
      "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
    );
  },
  wj = function (a) {
    return L(
      $f("Method", function (b, c) {
        var d = z(a.za.method, c.label);
        this.o = a.za.method.lastIndex;
        if ("string" === typeof d) {
          var e = zc(d);
          if (0 < e.length)
            if ((e = x(a.za.Aa, e[0]))) {
              if (!z(new RegExp(a.Aa(e[1] || "", ee(c).label), "im"), b.textContent)) return !1;
              this.text = e[2];
              this.infoLink = vj(this.text);
            } else return !1;
        }
        return d;
      }),
      [
        K(
          G("Missing leading '_' in method name: '%s'", function (b) {
            return uj("_" + b.text) && b.text;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_underscore"
        ),
        Ni(uj),
        Oi(tj, uj),
        Pi(tj),
        Qi(tj),
        L(
          K(
            G("%s", function (b) {
              if (a.Aa && a.Fb) {
                var c = a.Fb(b.label, b.text);
                c.shift();
                var d = tj(b);
                return !!d && Ri(this, b.text, d, c);
              }
              return !1;
            }),
            "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"
          ),
          [
            Te(
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
var yj = function () {
  V.call(this, "Google Tag Manager", 99);
  this.K = ["googletagmanager.com/gtm.js"];
};
Aa(yj, V);
var zj = [
    "Google Ads Conversion Tracking",
    "Google Ads Remarketing Tag (old)",
    "Google Ads Remarketing Tag (new)",
    "Google Analytics",
    "Floodlight"
  ],
  Aj = { dataLayer: new qg() },
  Bj = {
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
  Cj = [];
hb(Bj, function (a, b) {
  Cj.push(b.toLowerCase());
});
yj.prototype.fa = function () {
  return Aj;
};
yj.prototype.ja = function () {
  return Object.keys(Aj).map(function (a) {
    return kf(
      new pg(
        "Hidden",
        "Google Tag Manager",
        "Data Layer",
        "https://developers.google.com/tag-manager/android/v3/reference/com/google/tagmanager/DataLayer",
        function (b) {
          return null == b[a] ? !1 : a;
        }
      ),
      "Hidden"
    ).l(
      M(I(new pg("Info", "Google Tag Manager", a), "json"), "Data Layer").l(
        Ue("datalayer parameters", function (b) {
          return Array.isArray(b.template.context) &&
            ((b = b.template.context) && !this.o && (this.o = new Me(b)), this.o && (this.o = Ne(this.o)), (b = this.o))
            ? ((this.context = b.current()), JSON.stringify(this.context))
            : !1;
        }).l(
          Ue("datalayer parameter", function (b) {
            var c = lf(this, b.template.context);
            return c ? ((this.text = c.current()), (this.context = b.template.context[this.text]), JSON.stringify(this.context)) : !1;
          }).l(
            K(
              G("Data layer variable name in wrong case: '%s'", function (b) {
                b = b.text;
                return void 0 === Bj[b] && -1 < Cj.indexOf(b.toLowerCase()) ? b : !1;
              }),
              "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#dl_conversion"
            ),
            G("Number field should not be quoted: '%s'", function (b) {
              var c = b.text;
              return void 0 !== Bj[c] && 2 == Bj[c].type && "string" === typeof b.template.context ? c : !1;
            })
          )
        )
      )
    );
  });
};
var Dj = L(
  K(
    I(
      H("Account ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  [
    K(
      G("Invalid or missing account ID", function (a) {
        return !y(/^GTM-[0-9A-Z]{4,9}$/, a.label);
      }),
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags"
    )
  ]
);
yj.prototype.J = function () {
  return [
    L(
      R(
        "Google Tag Manager",
        "googletagmanager.com/gtm.js",
        r("%s ${%s}", "Google Tag Manager", "Account ID"),
        "http://support.google.com/tagmanager/answer/2574370",
        function (a) {
          return w(a.url).v.get("id");
        }
      ),
      [Dj, K(Ef, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#nonstandard"), kf(Lf(), "Fine")]
    )
  ];
};
yj.prototype.G = function () {
  var a = hg();
  a.l(
    U("Missing closing \x3c/script> tag.", function (b) {
      return !b.externalScript && z(/<\/html>\s*$/m, b.textContent);
    }),
    Ej(),
    Ue("Script", function (b) {
      return "http://www.googletagmanager.com/gtm.js?id=" + b.label;
    }),
    K(dg, "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#iframe"),
    eg,
    fg
  );
  return [
    mg(
      "Google Tag Manager",
      r("%s ${%s}", "Google Tag Manager", "Account ID"),
      "http://support.google.com/tagmanager/answer/2574370",
      '//script[contains(@src, "www.googletagmanager.com/gtm.js?id=")]',
      function (b) {
        return z(/gtm.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l(Dj, a)
  ];
};
var Ej = function () {
    var a = ng(
      ag("Data Layer Variable", function (b, c) {
        b = z(
          new RegExp(
            "\\(window,\\s*document\\s*,\\s*['\"]script['\"]\\s*,\\s*['\"]([^'\"]*)['\"]\\s*,\\s*['\"]" + c.parent.label + "['\"]\\)",
            "m"
          ),
          b.textContent
        );
        "string" === typeof b &&
          ((Aj[b] = new qg(
            new pg(
              "Error",
              "Google Tag Manager",
              "Required variable %s not found. Please check the developer console for errors.",
              this.infoLink
            )
          )),
          (this.type = "dataLayer" == b ? "Hidden" : "Info"));
        return b;
      }),
      '//script[contains(text(),"www.googletagmanager.com/gtm.js")]'
    );
    a.l(
      ng(
        K(
          U("Data layer needs to be above the container snippet", function (b, c) {
            return z(new RegExp(c.label + "\\s*=\\s*\\[\\s*[{]([^;]*)[}]\\s*\\]\\s*;", "im"), b.textContent);
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
      K(
        cg("GTM JavaScript code not found as a direct child of the <head> tag", function (b) {
          return b.parentNode ? "HEAD" != b.parentNode.nodeName : !1;
        }),
        "http://support.google.com/tagmanager/answer/2574370"
      )
    );
    a.l(
      K(
        cg("GTM no-script code not found: either missing or not in <body>", function (b) {
          for (var c = T.evaluate("//noscript", T, null, XPathResult.ANY_TYPE, null); (b = c.iterateNext()); )
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
      K(
        cg("GTM no-script code found outside of <noscript> tag", function (b) {
          for (
            var c = T.evaluate('//iframe[contains(@src, "www.googletagmanager.com/ns.html?id=")]', T, null, XPathResult.ANY_TYPE, null);
            (b = c.iterateNext());

          )
            if (!b.parentNode || "NOSCRIPT" != b.parentNode.nodeName) return !0;
          return !1;
        }),
        "http://support.google.com/tagmanager/answer/2574370"
      )
    );
    a.l(
      K(
        U("<script> tag must not be included in a <%s>", function (b) {
          return b.parentNode
            ? "HEAD" != b.parentNode.nodeName && "BODY" != b.parentNode.nodeName && b.parentNode.nodeName.toLowerCase()
            : !1;
        }),
        "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#script_flow"
      )
    );
    return a;
  },
  Fj = function (a) {
    Md(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
      b.infoLink = "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#http_response";
    });
  },
  Gj = function (a) {
    a = Td(a);
    a.length &&
      a.forEach(function (b) {
        b.type = "Warning";
        b.text += ". This could be due to an empty or un-published container";
      });
  };
yj.prototype.ea = function () {
  return [
    Rf("Google Tag Manager", function (a) {
      a = Pd(a, ["Google Tag Manager"]);
      Fj(a);
      Gj(a);
    }),
    Pf(
      "Suggestion",
      "Google Tag Manager",
      "Multiple installations of Google Tag Manager detected",
      "https://support.google.com/tagassistant/answer/3207128?ref_topic=2947092#multiple_tags",
      function (a) {
        return 1 < Pd(a, ["Google Tag Manager"]).length;
      }
    ),
    K(
      Pf(
        "Suggestion",
        "Google Tag Manager",
        "Consolidate your tags with Google Tag Manager.",
        "http://support.google.com/tagmanager/",
        function (a) {
          if (!Fd(a, "Google Tag Manager").length) {
            var b = [];
            be(a, zj, function (c) {
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
Cg(new yj());
var Hj = function () {
  V.call(this, "Google Analytics", 2);
};
Aa(Hj, V);
var Ij = /\/collect$/,
  Jj = /\/__utm.gif/,
  Kj = [];
Kj[5] = ["Category", "Action", "Label", "Value"];
Kj[14] = ["Category", "Variable", "Time", "Label", "Sample Rate"];
var Lj = [];
Lj[5] = /(?:\d*\([^)]*\))*5\(([^)]*)\)(?:\(([^)]*)\))*/;
Lj[14] = /(?:\d*\([^)]*\))*14\((?:[0-9]*!)?([^)]*)\)/;
var Mj = [];
Mj[5] = "Event";
Mj[14] = "Page Load";
var Nj = { 1: " (visitor)", 2: " (session)", 3: " (page)" },
  Oj = r("%s ${%s}", "Google Analytics", "Web Property ID"),
  Pj = ["utmac", "tid"],
  Qj = ["utme"],
  Rj = [" N/A ", "an"],
  Sj = [" N/A ", "aid"],
  Tj = [" N/A ", "aiid"],
  Uj = [" N/A ", "av"],
  Vj = ["utmtci"],
  Wj = ["utmtco"],
  Xj = ["utmtrg"],
  Yj = ["utmcct", "cc"],
  Zj = [" N/A ", "ci"],
  ak = ["utmctr", "ck"],
  bk = ["utmcmd", "cm"],
  ck = ["utmccn", "cn"],
  dk = ["utmcsr", "cns"],
  ek = ["utmiva", "iv"],
  fk = [" N/A ", "cu"],
  gk = [" N/A ", "dl"],
  hk = [" N/A ", "ea"],
  ik = [" N/A ", "ec"],
  jk = [" N/A ", "el"],
  kk = ["utmni", "ni"],
  lk = [" N/A ", "ev"],
  mk = [" N/A ", "exd"],
  nk = [" N/A ", "exf"],
  ok = [" N/A ", "xid"],
  pk = [" N/A ", "xvar"],
  qk = ["utmt", "t"],
  rk = ["utmip", "uip"],
  sk = [" N/A ", "linkid"],
  tk = ["utmipc", "ic"],
  uk = ["utmipn", "in"],
  vk = ["utmipr", "ip"],
  wk = ["utmiqt", "iq"],
  xk = ["utmn", "z"],
  yk = ["utmr", "dr"],
  zk = [" N/A ", "cd"],
  Ak = ["utmsa", "sa"],
  Bk = ["utmsn", "sn"],
  Ck = ["utmsid", "st"],
  Dk = ["utmtsp", "ts"],
  Ek = ["utmtst", "ta"],
  Fk = ["utmttx", "tt"],
  Gk = ["utmdt", "dt"],
  Hk = [" N/A ", "utc"],
  Ik = [" N/A ", "utl"],
  Jk = [" N/A ", "utt"],
  Kk = [" N/A ", "utv"],
  Lk = [" N/A ", "dns"],
  Mk = [" N/A ", "pdt"],
  Nk = [" N/A ", "rrt"],
  Ok = [" N/A ", "tcp"],
  Pk = [" N/A ", "srt"],
  Qk = ["utmtto", "tr"],
  Rk = ["utmp", "dp"],
  Sk = ["utmtid", "ti"],
  Tk = [" N/A ", "tf"],
  Uk = [" N/A ", "ua"],
  Vk = ["utmvid", "uid"],
  Wk = ["utmwv", "v"],
  Xk = function (a) {
    return (fd("Google Analytics-" + a) || {}).level || "STANDARD";
  },
  Yk = function (a, b) {
    b = W(Qj, b);
    var c = x(Lj[a], b);
    if (0 < c.length) {
      b = c[1].split("*");
      var d = Kj[a].slice(0, b.length);
      c = c[2];
      void 0 !== c && (b.push(c), (a = Kj[a]), d.push(a[a.length - 1]));
      a = this.o ? this.o : 0;
      if (a < b.length) return (this.o = a + 1), (this.text = wc(d[a])), wc(b[a]);
    }
    return (this.o = !1);
  },
  Zk = function (a, b) {
    var c = a.o ? a.o : 0;
    b = O(b);
    var d = z(/utme=(?:\d*\([^)]*\))*11\(([^)]*)\)/, b.v.toString()),
      e = {};
    d &&
      Na(d.split("*"), function (t) {
        t = t.split("!");
        2 == t.length && (e[t[0]] = t[1]);
      });
    if ((d = x(/utme=(?:\d*\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, b.v.toString())) && 3 == d.length) {
      b = d[1].split("*");
      d = d[2].split("*");
      for (var f = [], g = 0, h = 0; h < b.length; h++) {
        g++;
        if (h < d.length) {
          var k = z(/([0-9]{1,2})!/, b[h]),
            l = z(/([0-9]{1,2})!/, d[h]);
          k && k == l && ((g = parseInt(k, 10)), (b[h] = b[h].substring(k.length + 1)), (d[h] = d[h].substring(l.length + 1)));
        }
        f.push(g);
      }
      if (c < b.length)
        return (a.o = c + 1), (a.text = "Custom Variable " + f[c]), wc(b[c]) + ": " + wc(d[c]) + (e[f[c]] ? Nj[e[f[c]]] : "");
    }
    return (a.o = !1);
  },
  $k = function (a, b, c, d) {
    d = O(d);
    var e = x(b, d.v.toString());
    c.o = b.lastIndex;
    return e ? ((c.text = a + " " + e[2]), (a = Qb(d, e[1])), void 0 !== a ? a : !1) : !1;
  },
  W = function (a, b) {
    var c = O(b);
    a = a[y(Jj, c.A) ? 0 : 1];
    b = Qb(O(b), a);
    b = void 0 !== b ? b : !1;
    try {
      if ("string" === typeof b) return decodeURIComponent(b);
    } catch (d) {}
    return b;
  },
  al = K(
    L(
      M(
        tf("Custom Variables", function (a) {
          a = W(Qj, a);
          a = (a = x(/(?:\d+\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a)) && 3 == a.length ? a[1].split("*").length : 0;
          return 0 < a ? "" + a : !1;
        }),
        "Custom Variables"
      ),
      [
        L(
          N("Custom Variable", function (a) {
            return Zk(this, a);
          }),
          [
            We("The total combined length of any custom variable name and value may not exceed 128 characters.", function (a) {
              return 130 < a.label.length;
            })
          ]
        ),
        J(
          We("More than 5 custom variables are used.", function (a) {
            return "STANDARD" == Xk(ee(a).label) && 5 < parseInt(a.label, 10);
          }),
          "Google Analytics Premium accounts have 50 custom variables available."
        )
      ]
    ),
    "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
  ),
  bl = {},
  X = function (a) {
    var b = bl[a];
    b ||
      ((b = K(
        We("Parameter for %s is too long (max %s).", function (c) {
          for (var d = c.label, e = [], f = 0; f < d.length; ++f) e.push(d.charCodeAt(f));
          return e.length > a ? ((this.text = r("Parameter for %s is too long (max %s).", c.text, a)), !0) : !1;
        }),
        "https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters"
      )),
      (bl[a] = b));
    return b;
  },
  cl = function () {
    var a = /(cd(\d+))=/g,
      b = /(cm(\d+))=/g;
    return K(
      L(
        M(
          tf("Custom Metrics", function (c) {
            c = O(c).v.ka().filter(n(y, /cd\d+/)).length;
            return 0 < c ? "" + c : !1;
          }),
          "Custom Metrics"
        ),
        [
          L(
            N("Custom Dimension", function (c) {
              return $k("Custom Dimension", a, this, c);
            }),
            [X(150)]
          ),
          L(
            N("Custom Metric", function (c) {
              return $k("Custom Metric", b, this, c);
            }),
            [
              G("%s must be a number.", function (c) {
                return Pc(c.label) || Qc(c.label) ? !1 : c.text;
              })
            ]
          ),
          We("More than 20 custom variables are used.", function (c) {
            return "STANDARD" == Xk(ee(c).label) && 20 < parseInt(c.label, 10);
          })
        ]
      ),
      "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"
    );
  },
  dl = L(
    H("Web Property ID", function (a) {
      fd("Google Analytics-" + a.label)
        ? ((this.infoLink = fd("Google Analytics-" + a.label).url), (this.valueFormat = "linked"))
        : (this.valueFormat = "copyable");
      return a.label || "not set";
    }),
    [
      K(
        G("Leading or trailing whitespace in ID", function (a) {
          var b = void 0 !== a.label ? Hc([/^\s+[^ ]/, /[^ ]\s+$/], a.label) : !0;
          b && (a.parent.label = ob(a.label));
          return b;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#whitespace"
      ),
      K(
        G("Invalid or missing web property ID", function (a) {
          return void 0 !== a.label ? !y(/^\s*(?:UA|YT|MO)-\d{4,10}-\d+\s*$/, a.label) : !0;
        }),
        "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_property"
      )
    ]
  ),
  el = function (a, b) {
    return kf(Y(a, b), "Fine");
  },
  Y = function (a, b) {
    return N(a, n(W, b));
  },
  fl = function (a) {
    a = Gf(a).v.get("gclid");
    return void 0 !== a ? a + "" : !1;
  },
  rl = function (a, b) {
    var c = [
      Y("Element ID", sk),
      al,
      cl(),
      S,
      L(Y("Title", Gk), [X(1500)]),
      L(kf(I(Y("Document location URL", gk), "link_expandable"), "Hidden"), [X(2048)]),
      I(L(Y("Tracked page", Rk), [X(2048)]), "link_expandable")
    ];
    return L(
      R("Google Analytics", [b], Oj, "https://support.google.com/analytics/answer/1008080", function (d) {
        var e = O(d);
        return (y(Ij, e.A) || y(Jj, e.A)) && (W(Pj, d) || "");
      }),
      [
        dl,
        N("Pixel Version/Syntax", function () {
          return Z.W.I == a && a;
        }),
        N("Code Version/Syntax", function (d, e) {
          return A(RegExp("google-analytics.com/(?:.*/)?collect"), d)
            ? Z.qa.I
            : A(RegExp("stats.g.doubleclick.net/(?:.*/)?__utm.gif"), d)
            ? Z.W.I
            : A(RegExp("google-analytics.com/(?:.*/)?__utm.gif"), d) &&
              E(e, "Protocol version number") &&
              z(/1\.*/, E(e, "Protocol version number").label)
            ? Z.mb.I
            : !1;
        }),
        tf("Found GTM parameter in tracking url", function (d) {
          return d.uri.v.get("gtm") || !1;
        }),
        L(N("Adwords auto-tagging detected", fl), [
          K(
            We("Auto-tagging detected is not set up correctly", F.prototype.yb),
            "https://support.google.com/analytics/answer/2938246"
          ).otherwise(
            J(
              K(
                rf("Adwords auto-tagging mismatch", function (d, e) {
                  if ((d = d.redirects)) {
                    e = e.label;
                    for (var f, g = 1; (f = d[g]); g++) if ((f = w(f).v.get("gclid")) && f != e) return !0;
                  }
                  return !1;
                }),
                "https://support.google.com/analytics/answer/2938246"
              ),
              "The gclid from initial request does not match the gclid in the final URL."
            )
          )
        ]).otherwise(
          J(
            K(
              rf("Adwords auto-tagging missing", function (d) {
                if ((d = d.redirects)) for (; (d = d[1]); ) return (d = w(d).v.get("gclid")) ? d + "" : !1;
                return !1;
              }),
              "https://support.google.com/analytics/answer/2938246"
            ),
            "The initial request had a gclid parameter, but it is not detected in the final URL."
          )
        ),
        M(
          N(
            "Campaign Data",
            function (d) {
              d = W(Rk, d);
              d = (!!d && d.match(/(utm_\w+=[\w|\d]*)/g)) || [];
              return 0 < d.length ? d.join(";") : !1;
            },
            "map"
          ),
          "Campaign Data"
        ),
        L(I(el("Referral", yk), "link_expandable"), [X(2048)]),
        L(el("Protocol version number", Wk), [X(100)]),
        L(Y("Screen name / content description", zk), [X(2048)]),
        el("User ID", Vk),
        L(Y("Experiment ID", ok), [X(40)]),
        Y("Experiment Variant", pk),
        el("User Agent override", Uk),
        el("IP Address override", rk),
        M(L(Y("Campaign Data", ck), [X(100)]), "Campaign Data"),
        M(L(Y("Campaign Data", dk), [X(100)]), "Campaign Data"),
        M(L(Y("Campaign Medium", bk), [X(50)]), "Campaign Data"),
        M(L(Y("Campaign Keyword", ak), [X(500)]), "Campaign Data"),
        M(L(Y("Campaign Content", Yj), [X(500)]), "Campaign Data"),
        M(L(Y("Campaign ID", Zj), [X(100)]), "Campaign Data"),
        gl("Page Load", "Time ${bucketIndex}: ${Category} - ${Variable}", 14, c).otherwise(
          gl("Events", "Event ${bucketIndex}: ${Category} - ${Action}", 5, c).otherwise(
            hl(c).otherwise(
              il(c).otherwise(
                jl(c).otherwise(kl(c).otherwise(ll(c).otherwise(ml(c).otherwise(nl(c).otherwise(ol(c).otherwise(pl(c).otherwise(ql(c))))))))
              )
            )
          )
        ),
        K(Ef, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#non_standard")
      ]
    );
  },
  nl = function (a) {
    return P(
      "App / Screen Tracking",
      r("${%s}", "App name"),
      function (b) {
        return "screenview" == W(qk, b) ? W(Sj, b) || "" : !1;
      },
      [
        L(Y("App name", Rj), [X(100)]),
        L(Y("App ID", Sj), [X(150)]),
        L(Y("App installer ID", Tj), [X(150)]),
        L(Y("App Version", Uj), [X(100)])
      ].concat(a)
    );
  },
  hl = function (a) {
    return P(
      "Events",
      r("Event ${bucketIndex} ${%s} - ${%s}", "Category", "Action"),
      function (b) {
        var c = O(b);
        M(this, "Event");
        return y(Ij, c.A) && "event" == W(qk, b) ? "" + W(ik, b) + W(hk, b) + (W(jk, b) || "") : !1;
      },
      [
        L(Y("Category", ik), [X(150)]),
        L(Y("Action", hk), [X(500)]),
        L(Y("Label", jk), [X(500)]),
        Y("Value", lk),
        N("Non-Interaction", function (b) {
          return W(kk, b) ? "Yes" : "No";
        })
      ].concat(a)
    );
  },
  il = function (a) {
    return P(
      "Exceptions",
      "Exception ${bucketIndex}",
      function (b) {
        return "exception" == W(qk, b);
      },
      [
        L(Y("Description", mk), [
          X(150),
          rf("Tracked a fatal exception", function (b) {
            return "1" == W(nk, b);
          }).otherwise(uf("Tracked a non-fatal exception"))
        ]),
        Y("Is Fatal", nk)
      ].concat(a)
    );
  },
  kl = function (a) {
    return P(
      "Pageview Requests",
      "Pageview ${bucketIndex}",
      function (b) {
        b = W(qk, b);
        return "pageview" == b || !b;
      },
      a,
      function (b) {
        return W(xk, b) || !0;
      }
    );
  },
  ql = function (a) {
    return P(
      "Other Requests",
      "Other Requests ${bucketIndex}",
      function (b) {
        return W(qk, b);
      },
      [L(Y("Hit Type", qk), a)]
    );
  },
  ll = function (a) {
    return P(
      "Social",
      r("${%s}: ${%s}", "Action", "Network"),
      function (b) {
        return "social" == W(qk, b) && W(Ck, b);
      },
      [L(Y("Action", Ak), [X(50)]), L(Y("Network", Bk), [X(50)]), L(Y("Target", Ck), [X(2048)])].concat(a)
    );
  },
  ml = function (a) {
    return P(
      "Timings",
      r("${%s}: ${%s}", "Category", "Variable"),
      function (b) {
        return "timing" == W(qk, b) ? W(Jk, b) : !1;
      },
      [
        L(Y("Category", Hk), [X(150)]),
        L(Y("Variable", Kk), [X(500)]),
        Y("Time", Jk),
        L(Y("Label", Ik), [X(500)]),
        Y("DNS load time", Lk),
        Y("Page download time", Mk),
        Y("Redirect time", Nk),
        Y("TCP connect time", Ok),
        Y("Server response time", Pk)
      ].concat(a)
    );
  },
  jl = function (a) {
    return P(
      "Keep Alive",
      "Keep Alive ${bucketIndex}",
      function (b) {
        return "dc" == W(qk, b);
      },
      a
    );
  },
  ol = function (a) {
    return L(
      I(
        hf(pf("Transaction %s"), function (b) {
          var c = w(b.url),
            d = W(qk, b);
          return !y(Jj, c.A) || ("tran" != d && "transaction" != d) ? !1 : W(Sk, b);
        }),
        "group_status"
      ),
      [
        L(
          I(hf(of("Total"), n(W, Qk)), "value_status"),
          [
            L(Y("Transaction ID", Sk), [X(500)]),
            L(Y("Affiliation", Tk), [X(500)]),
            Y("Affiliation or Store name", Ek),
            Y("Total", Qk).otherwise(G("Missing total amount.")),
            Y("Tax", Fk),
            Y("Shipping cost", Dk),
            Y("Billing City", Vj),
            Y("Billing region", Xj),
            Y("Billing Country", Wj)
          ].concat(a)
        )
      ]
    );
  },
  pl = function (a) {
    return L(
      I(
        hf(pf("Transaction %s"), function (b) {
          var c = w(b.url);
          return y(Jj, c.A) && "item" == W(qk, b) ? W(Sk, b) : !1;
        }),
        "group_status"
      ),
      [
        L(
          I(
            hf(of("Item %s"), function (b) {
              this.text = "Item " + W(tk, b);
              return W(vk, b);
            }),
            "value_status"
          ),
          [
            Y("Affiliation or Store name", Ek),
            L(Y("SKU / Code", tk), [X(500)]).otherwise(G("Missing SKU/code.")),
            Y("Product Name", uk),
            L(Y("Category or variation", ek), [X(500)]),
            Y("Unit price", vk).otherwise(G("Missing unit price.")),
            Y("Quantity", wk).otherwise(G("Missing quantity.")),
            L(Y("Currency Code", fk), [X(10)])
          ].concat(a)
        )
      ]
    );
  },
  gl = function (a, b, c, d) {
    return P(
      a,
      b,
      function (e) {
        M(this, Mj[c]);
        var f = O(e);
        return y(Jj, f.A) && "event" == W(qk, e) && y(Lj[c], W(Qj, e) || "");
      },
      [M(N("Parameter", n(Yk, c)), Mj[c])].concat(d)
    );
  };
Hj.prototype.J = function () {
  return [
    rl("Any", "google-analytics.com/"),
    rl(Z.W.I, "stats.g.doubleclick.net/"),
    R(
      "Google Analytics",
      "google-analytics.com/",
      "Google Analytics Script",
      "https://support.google.com/analytics/answer/1008080",
      function (a) {
        return !!A(/((?:ga|dc|analytics)(?:_debug)?.js)/, a);
      },
      "",
      [
        M(
          N("GA Detected", function (a) {
            return !!A(/((?:ga|dc|analytics).js)/, a);
          }),
          "URLs"
        ).l(S),
        M(
          N("GA Debug Detected", function (a) {
            return !!A(/((?:ga|dc|analytics)(?:_debug).js)/, a);
          }),
          "URLs"
        ).l(S)
      ]
    )
  ];
};
var sl = K(
    Re("Suggestion", "Google Analytics", "Consider update to the async version"),
    "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#update_async"
  ),
  Z = {
    qa: {
      I: "Universal",
      qb: function (a) {
        return Gc(
          [
            /create/i,
            /displayfeatures/i,
            new RegExp(
              Z.qa.ba[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']displayfeatures["']/.source,
              "gi"
            )
          ],
          a.textContent
        )
          ? "Universal with Display Features"
          : Gc(
              [
                /create/i,
                /adfeatures/i,
                new RegExp(
                  Z.qa.ba[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']adfeatures["']/.source,
                  "gi"
                )
              ],
              a.textContent
            )
          ? "Universal with Ad Features"
          : Z.qa.I;
      },
      link: "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
      V: "google-analytics.com/analytics.js",
      wa: [],
      ba: [/create/i, /["'](?:[a-zA-Z_0-9]*\.)*create["'],\s*["'](UA-[^"']*)["']/gi],
      va: function () {
        return K(
          L(
            $f("Universal analytics statements", function (a) {
              return (this.o = a = Ic(a.textContent, this.o)) && z(Si, a.text) ? a.text : !1;
            }),
            [gj()]
          ),
          "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors"
        );
      }
    },
    kb: {
      I: "Asynchronous",
      link: "https://support.google.com/analytics/answer/1008080",
      V: "google-analytics.com/ga.js",
      wa: [],
      ba: [/setAccount/i, /\[\s*["'](?:[a-zA-Z_0-9]*\.)?_?setAccount["']\s*,\s*["']([^"']*)["']/gi],
      Eb: ["stats.g.doubleclick.net/dc.js", ".wysistat.com", ".rejoiner.com"],
      va: n(xj, "async")
    },
    od: {
      I: "Synchronous",
      link: "https://support.google.com/analytics/answer/1012283",
      V: "google-analytics.com/ga.js",
      ba: [/_getTracker/i, /_gat._getTracker\(["']([^"']*)["']\)/gi],
      wa: [sl],
      va: n(xj, "sync")
    },
    mb: {
      I: "Urchin",
      link: "https://support.google.com/analytics/answer/1008080",
      V: "google-analytics.com/urchin.js",
      ba: [/(?:^|window.| )_uacct/gim, /_uacct = ["']([^"']*)["'];/gim],
      wa: [sl],
      va: function () {
        return H("Statements", bb);
      }
    },
    W: {
      I: "Remarketing",
      link: "https://support.google.com/analytics/answer/2444872",
      V: "stats.g.doubleclick.net/dc.js",
      wa: [],
      ba: [/_setAccount/i, /["'](?:[a-zA-Z_0-9]*\.)*_setAccount["'],\s*["']([^"']*)["']/gi, /stats\.g\.doubleclick\.net\/dc\.js/],
      va: n(xj, "async")
    }
  },
  tl = function (a) {
    var b = [
      dl,
      L(Yf("Code Version/Syntax", "function" === typeof a.qb ? a.qb : ab(a.I)), a.wa),
      H("Level", function (c) {
        return (fd("Google Analytics-" + c.label) || {}).label || !1;
      }),
      jg.clone(),
      M(
        Yf(
          "Code Snippet",
          function (c) {
            return ig(this, a.ba[1].lastIndex, c);
          },
          "snippet_js"
        ),
        "Code Snippet"
      ).l(
        K(dg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#iframe"),
        K(
          U("Missing closing \x3c/script> tag.", function (c) {
            return z(/<\/html>(.|\n)*$/m, c.textContent);
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_closing"
        ),
        K(
          ng(
            K(
              U("Missing %s script", function (c) {
                return 0 === c ? a.V.substring(a.V.indexOf("/") + 1) : !1;
              }),
              "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_ga"
            ),
            'count(//script[contains(@src, "' + a.V + '")])'
          ),
          "https://support.google.com/analytics/answer/1008083"
        ),
        K(
          cg("Code found outside of <head> tag", function (c) {
            return !!c.parentNode && "HEAD" != c.parentNode.nodeName;
          }),
          "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#move_head"
        ),
        a.va(),
        K(eg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#external_file"),
        fg
      ),
      M(
        Te("Cookies", function (c) {
          c = (c = E(c, "Code Version/Syntax")) && 0 == c.label.indexOf("Universal") ? "_ga" : "__utm";
          this.o || (this.o = T.cookie.split(/; */));
          if (0 == this.o.length) return (this.o = null), !1;
          var d = this.o.pop().split("=");
          return 0 == d[0].indexOf(c) ? ((this.text = d[0]), d[1]) : !1;
        }),
        "Cookies"
      )
    ];
    return L(
      mg("Google Analytics", Oj, a.link, "//script", function (c) {
        var d = Gc(a.ba, c.textContent);
        this.o = c.textContent.length && a.ba[1].lastIndex;
        return "_setCustomVar" == d ||
          (d &&
            a.Eb &&
            Qa(a.Eb, function (e) {
              return 0 <= c.textContent.indexOf(e);
            }))
          ? !1
          : d;
      }),
      b
    );
  },
  ul = function (a) {
    var b = Md(a.relatedIssues, ["Code Version/Syntax"]);
    b.length &&
      Od(a.relatedIssues).forEach(function (c) {
        Bd(c, "Code Version/Syntax", b[0].label);
      });
  },
  vl = function (a) {
    Kd(a, "Pixel Version/Syntax").forEach(function (b) {
      var c = E(b, "Pixel Version/Syntax"),
        d = vd(b, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]);
      if (c && c.label == Z.W.I && !d && (c = Zd(a, b.label)) && "Google Analytics" == c.category) {
        if ((d = E(c, "Code Version/Syntax"))) (d.label = Z.W.I), (c.infoLink = "https://support.google.com/analytics/answer/2444872");
        zd(b.relatedIssues, "Pixel Version/Syntax");
        zd(c.relatedIssues, "Missing ga.js script");
      }
    });
  },
  wl = function (a) {
    Md(a, ["_gat global object"]).forEach(function (b) {
      var c = E(b, "_getTracker") || E(b, "_createTracker");
      c && ((c = z(/["']*([^"',]+)/, c.label)), "string" === typeof c && ((c = Ld(a, c)), c.length && (Ua(a, b), D(c[0], b))));
    });
  };
Hj.prototype.ea = function () {
  return [
    Rf("Google Analytics", function (a) {
      var b = Fd(a, "Google Analytics");
      b.forEach(function (d) {
        "Tag" == d.type &&
          (vd(d, "Code Version/Syntax", ["Universal with Ad Features", "Universal with Display Features"]) &&
            (Bd(d, "Code Version/Syntax", Z.qa.I), Bd(d, "Code Version/Syntax", Z.W.I)),
          ul(d),
          Yd(d, 2) && Ad(d.relatedIssues, ["Missing ga.js script", "Missing dc.js script", "Missing urchin.js script"]));
      });
      var c = b.filter(function (d) {
        return "Google Analytics Script" != d.text;
      });
      og(a, c);
      Jd(c, 4).length && zd(a, "No Google Analytics HTTP responses because opted out code detected.", !0);
      vl(b);
      wl(a);
      Md(b, ["Google Analytics Script"]).forEach(function (d) {
        0 < Vd(d.relatedIssues).length || yd(a, d, "Nothing to report");
      });
    }),
    Pf(
      "Suggestion",
      "Google Analytics",
      "Multiple Google Analytics tags detected",
      "https://support.google.com/analytics/answer/1032400",
      function (a) {
        var b = Pd(a, ["Google Analytics"]),
          c = b.length,
          d = Md(b, ["Google Analytics Script"]),
          e = Kd(b, "Code Version/Syntax", Z.W.I),
          f = Kd(b, "Code Version/Syntax", Z.qa.I),
          g = Kd(b, "Code Version/Syntax", "Universal with Display Features"),
          h = Kd(b, "Code Version/Syntax", "Universal with Ad Features");
        c -= d.length;
        c -= f.length;
        c -= h.length;
        c -= g.length;
        c -= e.length;
        (a = E(a, "Detected more than one script containing _gaq and _gat variables.")) && a.label == c && (a.deduped = !0);
        return fe(b) ? !1 : 1 < f.length || 1 < h.length || 1 < g.length || 1 < e.length || 1 < c;
      }
    ),
    Pf(
      "Warning",
      "Google Analytics",
      "Same web property ID is tracked twice.",
      "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples",
      function (a) {
        a = Pd(a, ["Google Analytics"]);
        a = $a(a, function (b) {
          return b.label;
        });
        return ib(
          a,
          function (b) {
            return Qa(
              b,
              function (c) {
                var d = {},
                  e = E(c, "Pageview Requests");
                if (e) {
                  e = Ud([e], "Tag");
                  for (var f, g = 0; (f = e[g]); g++) {
                    var h = E(f, "requestId");
                    h && !d[h.label] && (d[h.label] = [c, f]);
                  }
                }
                e = Object.keys(d);
                if (1 < e.length) {
                  e.sort();
                  h = g = f = null;
                  for (var k = [], l, t = 0; (l = e[t]); t++) {
                    c = d[l][0];
                    var C = d[l][1],
                      Q = E(C, "Document location URL");
                    l = Q ? Q.label : "";
                    C = (Q = E(C, "Tracked page")) ? Q.label : "";
                    if (l == g && C == h)
                      if (f == c) -1 == k.indexOf(c) && (k.push(c), D(c, this));
                      else return !0;
                    g = l;
                    h = C;
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
    K(
      Pf("Suggestion", "Google Analytics", "Add Google Analytics", "https://support.google.com/analytics/answer/1008080", function (a) {
        return 0 == Pd(a, ["Google Analytics", "Google Tag Manager"]);
      }),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#add_ga"
    ),
    J(
      Pf("Warning", "Google Analytics", "Tag not fired through GTM", "https://support.google.com/tagmanager/answer/6103683", function (a) {
        a = Pd(a, ["Google Analytics"]);
        Na(
          a,
          function (b) {
            var c = !!E(b, "Implemented in Google Tag Manager"),
              d = !!E(b, "Found GTM parameter in tracking url");
            c && !d && D(b, this);
          },
          this
        );
        return !1;
      }),
      "Although it seems that the tag is included in GTM, this request was originated from a differnet snippet. Please check your code."
    )
  ];
};
Hj.prototype.G = function () {
  var a = [];
  hb(
    Z,
    function (b) {
      a.push(tl(b));
    },
    this
  );
  Va(a, [
    K(
      new Uf(
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
    K(
      new Uf(
        "Error",
        "Google Analytics",
        "Detected both ga.js and dc.js scripts which will make tracking ambiguous.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Pa(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(Z.kb.V);
            });
            b = Pa(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(Z.W.V);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_dc"
    ),
    K(
      new Uf(
        "Error",
        "Google Analytics",
        "Detected both ga.js and urchin.js scripts which can cause reporting errors.",
        "https://support.google.com/analytics/answer/1008080",
        void 0,
        function (b) {
          if (b.scripts) {
            var c = Pa(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(Z.kb.V);
            });
            b = Pa(b.scripts, function (d) {
              return d.src && 0 < d.src.indexOf(Z.mb.V);
            });
            return 0 < c.length && 0 < b.length;
          }
          return !1;
        }
      ),
      "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_urchin"
    ),
    new Uf(
      "Warning",
      "Google Analytics",
      "Detected more than one script containing _gaq and _gat variables.",
      "https://support.google.com/analytics/answer/1009683",
      void 0,
      function (b) {
        return b.scripts
          ? ((b = Ra(
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
    L(
      M(
        new Uf(
          "Hidden",
          "Google Analytics",
          "_gat global object",
          "https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat",
          "//script",
          function (b) {
            return z(/(?:^|[ ,;]|window\.)_gat\./g, b.textContent);
          }
        ),
        "_gat global object"
      ),
      [
        fg,
        Yf(
          "Code Snippet",
          function (b) {
            return ig(this, b.textContent.indexOf("_gat"), b);
          },
          "snippet_js"
        ).l(nj())
      ]
    )
  ]);
  return a;
};
Cg(new Hj());
var yl = function (a) {
    var b = document;
    b.getElementsByClassName
      ? (a = b.getElementsByClassName(a)[0])
      : ((b = document), (a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : xl(b, "*", a)[0] || null));
    return a || null;
  },
  xl = function (a, b, c) {
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        for (var d = {}, e = 0, f = 0, g; (g = a[f]); f++) b == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; (g = a[f]); f++) (b = g.className), "function" == typeof b.split && Ta(b.split(/\s+/), c) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return a;
  },
  zl = function (a, b) {
    a && (a = a.parentNode);
    for (var c = 0; a; ) {
      p("parentNode" != a.name);
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  };
var Al = function () {
  V.call(this, "Google Publisher Tag", 100);
  this.K = ["pubads.g.doubleclick.net/"];
};
pa(Al, V);
var Cl = function () {
    var a = [
      H("Document ID", n($e, /(['"]div[^)]+['"]?)[)]/)),
      H("Accepted sizes", n($e, /,\s*(\[?(?:\[\s*\d+\s*,\s*\d+\s*\]\s*,?\s*)+\]?)\s*,/)),
      H("Out of page", n($e, /defineOutOfPageSlot/))
    ];
    return lg("Ad Slots", r("AdSlot ${%s}", "Document ID"), a, Bl);
  },
  Bl = function (a) {
    var b = Dl;
    a = z(b, a.textContent);
    this.o = b.lastIndex;
    return a;
  };
Al.prototype.G = function () {
  return [
    L(
      mg(
        "Google Publisher Tag",
        r("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        '//script[contains(text(), "googletag")]',
        function (a) {
          return !!a.textContent && z(/googletag\s*.\s*define(?:OutOfPage)?Slot\(\s*["']\/(\d+)\//g, a.textContent);
        }
      ),
      [El, hg(), Cl()]
    )
  ];
};
Al.prototype.J = function () {
  return [
    I(
      R(
        "Google Publisher Tag",
        "pubads.g.doubleclick.net/",
        r("%s ${%s}", "Google Publisher Tag", "Network ID"),
        "https://support.google.com/dfp_premium/topic/28788?ref_topic=28149",
        function (a) {
          var b = Qb(O(a), "iu_parts");
          return !!b && A(/pubads.g.doubleclick.net\/gampad\/ads/, a) && z(/(\d+)/, b);
        },
        "",
        [El, S]
      ),
      "unchecked"
    )
  ];
};
var Dl = /googletag.(define(?:OutOfPage)?Slot\(.*?\))/g,
  El = I(
    H("Network ID", function (a) {
      for (var b = fd("GooglePublisherConsole"), c = xl(document, "DIV"), d = 0, e; (e = c[d]); d++)
        z(/google_pubconsole/, e.id) && (e.style.display = b ? "block" : "none");
      return a.label || "not set";
    }),
    "copyable"
  );
Cg(new Al());
var Fl = function () {
  V.call(this, "Krux SuperTag", 99);
  this.K = ["cdn.krxd.net/"];
  this.isActive = q;
  this.G = ab([]);
};
Aa(Fl, V);
var Gl = I(
  H("Configuration ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Fl.prototype.J = function () {
  return [
    R(
      "Krux SuperTag",
      "cdn.krxd.net/",
      "Krux SuperTag",
      "http://www.krux.com/",
      function (a) {
        return (a = w(a.url).v.get("confid")) ? a + "" : !1;
      },
      "unchecked",
      [Gl, S]
    )
  ];
};
Cg(new Fl());
var Hl = function () {
  V.call(this, "Opentag", 99);
  this.K = ["cloudfront.net/"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Hl, V);
Hl.prototype.J = function () {
  return [R("Opentag", "cloudfront.net/", "Opentag", "http://www.opentag.com/", n(A, /(opentag-[^.]*)\.js/i), "unchecked", [Il, S])];
};
var Il = I(
  H("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Cg(new Hl());
var Jl = function () {
  V.call(this, "Tagcommander", 99);
  this.K = ["cdn.tagcommander.com"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Jl, V);
Jl.prototype.J = function () {
  return [
    R(
      "Tagcommander",
      "cdn.tagcommander.com",
      "Tagcommander",
      "http://www.tagcommander.com/",
      function (a) {
        return w(a.url).A;
      },
      "unchecked",
      [Kl, S]
    )
  ];
};
var Kl = I(
  H("Account ID", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Cg(new Jl());
var Ll = function () {
  V.call(this, "TagMan", 99);
  this.K = ["levexis.com/"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Ll, V);
Ll.prototype.J = function () {
  return [R("TagMan", "levexis.com/", "TagMan", "http://www.tagman.com/", n(A, /levexis\.com\/([^\/]*)\/tman.cgi/), "unchecked", [Ml, S])];
};
var Ml = H("Account", function (a) {
  return a.label || "not set";
});
Cg(new Ll());
var Nl = function () {
  V.call(this, "Tealium", 99);
  this.K = ["tiqcdn.com/"];
  this.isActive = q;
  this.G = ab([]);
};
pa(Nl, V);
Nl.prototype.J = function () {
  return [R("Tealium", "tiqcdn.com/", "Tealium", "http://www.tealium.com/", n(A, /utag\/([^\/]+)\//i), "unchecked", [Ol, S])];
};
var Ol = I(
  H("Account", function (a) {
    return a.label || "not set";
  }),
  "copyable"
);
Cg(new Nl());
var Pl = function () {
  V.call(this, "Google Trusted Stores", 99);
};
pa(Pl, V);
var Ql = function (a, b, c) {
    return (c ? Yf : ag)(a, function (d) {
      return z(
        new RegExp("\\.push\\s*\\(\\s*(?:\\[[^\\]]*\\]\\s*,\\s*)*\\[\\s*[\"']?" + b + "[\"']?\\s*,\\s*[\"']?([^'\")]+)[\"']?\\s*\\]", "g"),
        d.textContent
      );
    });
  },
  Rl = function (a) {
    var b = "Remove the elements below:\n";
    a.forEach(function (c) {
      b = b + c + "\n";
    });
    return b;
  },
  Sl = function (a, b, c) {
    c = c ? "class" : "id";
    a = (a || document).getElementsByTagName("SPAN");
    for (var d = 0; d < a.length; d++) {
      var e = a[d].getAttribute(c);
      if (e && e === b) return a[d];
    }
  },
  Tl = function (a, b, c, d, e, f, g, h) {
    f = void 0 !== f ? f : "is incorrect";
    g = void 0 !== g ? g : "";
    h = void 0 !== h ? h : "";
    return J(
      K(
        U(r('%s is missing in the order confirmation module: "%s"', a, b), function (k) {
          return void 0 === Sl(k, b, e);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + g
      ),
      r('Provide the Merchant Order %s in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.', a, b)
    ).otherwise(
      K(
        J(
          U(r('"%s" %s', b, f), function (k) {
            k = Sl(k, b, e);
            return !y(c, k.textContent);
          }),
          r(
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
  Ul = function (a, b, c, d, e, f) {
    e = void 0 !== e ? e : "";
    f = void 0 !== f ? f : "";
    return J(
      K(
        cg(r('%s is missing in the order confirmation module: "%s"', a, b), function (g) {
          return void 0 === Sl(g, b, !0);
        }),
        "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#" + e
      ),
      r(
        'Provide the language associated with the account used to submit product data feeds to Google Shopping, in the "%s" field.\nThis is a recommended but optional field. This field does not affect core functionality, and leaving this warning unresolved will not prevent you from entering the monitoring period. However, merchants using Google Shopping should correct these errors to ensure proper integration. This integration will allow Google to more easily correlate specific products to data that you have provided in connection with Google Trusted Stores. If you have chosen to leave out this field, you may disregard this warning.',
        b
      )
    ).otherwise(
      K(
        J(
          U(r('"%s" %s', b, "is incorrect"), function (g) {
            g = Sl(g, b, !0);
            return !y(c, g.textContent);
          }),
          r(
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
Pl.prototype.ea = function () {
  return [
    J(
      Pf(
        "Error",
        "Google Trusted Stores",
        "Order confirmation page is not in https",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (a) {
          var b = E(a, Hf.text);
          a = E(a, "gts-order-id");
          return b && a ? ((b.type = "Hidden"), !0) : !1;
        }
      ),
      "Implement the order confirmation page in https.\nMerchants must provide a secure way for customers to purchase products online. Thus, merchants must use https when transmitting customer information or financial data, including on order confirmation, order history and order status pages."
    )
  ];
};
Pl.prototype.J = function () {
  return [
    L(
      R(
        "Google Trusted Stores",
        "googlecommerce.com/trustedstores/",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        function (a) {
          return w(a.url).v.get("id");
        }
      ),
      [
        Vl,
        Jf("Google Shopping Account ID", "base_sid"),
        Ef,
        S,
        tf("file check response issue handle", function (a) {
          a = a.documentUrl;
          return void 0 !== a ? a : !1;
        })
      ]
    )
  ];
};
Pl.prototype.G = function () {
  return [
    L(
      mg(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//script[contains(text(), "google_base")]',
        function (a) {
          return z(/gts\.push\s*\(\s*\[\s*['"]?id['"]?\s*,\s*['"]?([^'"\]]*)/g, a.textContent);
        }
      ),
      [
        Vl,
        J(
          ng(
            K(
              U("Class name conflicts for class %s", function (a) {
                var b = a.getAttribute("class");
                return zl(a, function (c) {
                  var d = c.getAttribute ? c.getAttribute("class") : "";
                  return (c.id && Ta(["gtrust_badges", "gts-f-w", "gts-order"], c.id)) || Wl(d);
                })
                  ? !1
                  : Wl(b);
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#class_conflict"
            ),
            '//*[contains(@class, "gts-")]'
          ),
          'Remove the "gts-" for any class names defined for CSS styles. The "gts-" prefix is used by Google Trusted Stores, and such class names in the page may cause conflicts with the Google Trusted Stores JavaScript code. Please update your CSS to use another name. You must avoid using "gts-" for any class names defined for CSS styles in the page.'
        ),
        L(I(Ql("Google Shopping Item ID", "google_base_offer_id"), "copyable"), [
          G("Google Shopping Item ID should be an alphanumeric.", function (a) {
            return !y(/^\w[\s\w]+$/, a.label);
          })
        ]).otherwise(
          J(
            Ve("Google Shopping Item ID is missing."),
            'Provide the Google Shopping Item ID in the "google_base_offer_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        L(I(Ql("Google Shopping Account ID", "google_base_subaccount_id"), "copyable"), [
          J(
            Ye('Incorrect format: "google_base_subaccount_id"'),
            'Update the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code. The Google Shopping Account ID typically follows this format: "[0-9]+".  The Google Shopping Account ID provided appears to not match this format.'
          )
        ]).otherwise(
          J(
            G("Google Shopping Account ID is missing.", function (a) {
              this.type = E(a, "Google Shopping Item ID") ? "Error" : "Suggestion";
              return !0;
            }),
            'Provide the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code.'
          )
        ),
        Ql("Google Base Country", "google_base_country", !0),
        Ql("Google Base Language", "google_base_language", !0),
        Ql("Container", "gtsContainer", !0),
        M(
          U("Missing closing \x3c/script> tag.", function (a) {
            return z(/<\/html>\s*$/m, a.textContent);
          }),
          "Code Snippet"
        ),
        ag("Old script found.", function () {
          return !!Sa(T.scripts, function (a) {
            return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js");
          });
        }),
        M(
          ag("Script found.", function () {
            return !!Sa(T.scripts, function (a) {
              return !!a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js");
            });
          }),
          "Code Snippet"
        ),
        M(
          U("Missing script", function () {
            return !Sa(T.scripts, function (a) {
              return (
                !!a.src &&
                (0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js") ||
                  0 < a.src.indexOf("googlecommerce.com/trustedstores/api/js"))
              );
            });
          }),
          "Code Snippet"
        ),
        M(
          J(
            K(
              ng(
                U("JavaScript is implemented more than once on the page.", function (a) {
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
        M(
          K(
            cg("Code found outside of <body> tag", function (a) {
              return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#outside_body"
          ),
          "Code Snippet"
        ),
        M(
          K(
            U("<script> tag must not be included in a <%s>", function (a) {
              return a.parentNode
                ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase()
                : !1;
            }),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#script_html"
          ),
          "Code Snippet"
        ),
        dg,
        eg,
        fg,
        J(
          M(
            K(
              U("Missing DOCTYPE on the page.", function (a) {
                return self === top && !a.externalScript && "html" != T.childNodes[0].name;
              }),
              "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#missing_doctype"
            ),
            "Code Snippet"
          ),
          'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
        ).otherwise(
          M(
            J(
              K(
                U("Incorrect DOCTYPE on the page.", function (a) {
                  return self === top && !a.externalScript && "" != T.childNodes[0].publicId && "" == T.childNodes[0].systemId;
                }),
                "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#incorrect_doctype"
              ),
              'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'
            ),
            "Code Snippet"
          )
        ),
        $f("robots.txt file check dom issue handle"),
        jg
      ]
    ),
    L(
      mg(
        "Google Trusted Stores",
        "Google Trusted Stores ${Google Shopping ID}",
        "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//div[contains(@id, "gts-order")]'
      ),
      [
        Xl,
        K(
          J(
            U("Item level details of the order confirmation module are missing", function (a) {
              return void 0 === Sl(a, "gts-item", !0);
            }),
            'Provide the item level details associated with the order in the "gts-item" fields of the Google Trusted Stores Order Confirmation JavaScript code.  The gts-item fields include:  gts-i-name; gts-i-price; gts-i-quantity; gts-i-prodsearch-id; gts-i-prodsearch-store-id; gts-i-prodsearch-country; gts-i-prodsearch-language; etc'
          ),
          "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#item_details"
        ),
        L(ng($f("Google Trusted Stores"), '//span[contains(@class, "gts-item")]'), [
          Xl,
          K(
            U("Unknown fields specified in the item level details of the order confirmation module", function (a) {
              var b = [];
              a = a.getElementsByTagName("span");
              for (var c = 0, d; (d = a[c]); c++) (d = d.getAttribute("class")) && !Ta(Yl, d) && b.push(d);
              J(this, Rl(b));
              return 0 != b.length;
            }),
            "https://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894&topic=2609888&ctx=topic"
          ),
          Tl("Item name", "gts-i-name", /\w+.*/, "", !0),
          Tl("Item price", "gts-i-price", /^\d+(\.\d+)?$/, 'Required format: "123.45"', !0, void 0, "", "gts_price"),
          Tl("Item quantity", "gts-i-quantity", /^\d+$/, 'Required format: "123"', !0, void 0, "", "gts_quantity"),
          Ul("Google Shopping Item ID", "gts-i-prodsearch-id", /\w+.*/, "", "shopping_item", "gts_prodsearch_id"),
          Ul(
            "Google Shopping Account ID",
            "gts-i-prodsearch-store-id",
            /^\d+$/,
            'Required format: "123"',
            "shopping_account",
            "gts_prodsearch_store"
          ),
          Ul(
            "Google Shopping Country ID",
            "gts-i-prodsearch-country",
            /^[A-Z]{2}$/,
            'Required format: "US" (ISO3166',
            "shopping_country",
            "gts_prodsearch_country"
          ),
          Ul(
            "Google Shopping Language ID",
            "gts-i-prodsearch-language",
            /^[a-z]{2}$/,
            'Required format: "en" (ISO639-1)',
            "shopping_language",
            "gts_prodsearch_language"
          ),
          L(
            ng(
              $f("Google Trusted Stores", function (a) {
                return void 0 !== Sl(a, "gts-i-prodsearch-id", !0);
              }),
              '//span[contains(@class, "gts-item")]'
            ),
            [Tl("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', !0)]
          )
        ]),
        J(
          K(
            ng(
              U("Order confirmation module is implemented more than once", function (a) {
                return 1 < a;
              }),
              'count(//div[contains(@id, "gts-order")])'
            ),
            "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#order_more"
          ),
          "The Trusted Stores Order Confirmation Javascript code must be implemented exactly once on the order confirmation page.  Remove any duplicate implementations of the code."
        ),
        Tl("Domain", "gts-o-domain", /^([\w\d]+\.)+\w+$/, 'Required format: "www.mystore.com"', void 0, void 0, "", "gts_domain"),
        Tl("Customer email", "gts-o-email", /^([\w]+\.?)+@\w+\.\w+$/, 'Required format: "user@email.com"', void 0, void 0, "", "gts_email"),
        Tl(
          "Customer country",
          "gts-o-country",
          /^[A-Z]{2}$/,
          'Required format: ISO3166 (example: "US")',
          void 0,
          void 0,
          "",
          "gts_country"
        ),
        Tl("Currency", "gts-o-currency", /^[A-Z]{3}$/, 'Required format: ISO4217 (example: "USD")'),
        Tl("Total", "gts-o-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        Tl("Discounts", "gts-o-discounts", /^\-?\d+(\.\d+)?$/, 'Required format: "-123.45"'),
        Tl("Shipping total", "gts-o-shipping-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        Tl("Tax total", "gts-o-tax-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"', void 0, void 0, "", "gts_tax"),
        Tl("Estimated shipping date", "gts-o-est-ship-date", /^\d{4}-\d{2}-\d{2}$/, 'Required format: "YYYY-MM-DD"'),
        Tl("Preorder", "gts-o-has-preorder", /^[YN]$/, 'Required format: "Y" or "N"'),
        Tl("Digital", "gts-o-has-digital", /^[YN]$/, 'Required format: "Y" or "N"'),
        Tl("ID", "gts-o-id", /^[\w-]+$/, "", !1, "should be alphanumeric")
      ]
    )
  ];
};
var Yl =
    "gts-i-name gts-i-price gts-i-quantity gts-i-prodsearch-id gts-i-prodsearch-store-id gts-i-prodsearch-country gts-i-prodsearch-language".split(
      " "
    ),
  Vl = L(
    I(
      H("Google Shopping ID", function (a) {
        return a.label || "not set";
      }),
      "copyable"
    ),
    [K(Ye("Invalid or missing account ID"), "https://support.google.com/tagassistant/answer/3203009?ref_topic=2947092#invalid_id")]
  ),
  Xl = I(
    H("gts-order-id", function (a) {
      return a.label || "not set";
    }),
    "copyable"
  ),
  Wl = n(z, /(?:^| )(gts\-[^ ]*)/);
Cg(new Pl());
var Zl = [2, 3, 4],
  $l = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/,
  am = {},
  bm =
    ((am[1] = "UA"),
    (am[2] = "AW"),
    (am[3] = "DC"),
    (am[4] = "G"),
    (am[5] = "GF"),
    (am[6] = "HA"),
    (am[7] = "MC"),
    (am[10] = "GTM"),
    (am[11] = "GTM"),
    (am[12] = "GT"),
    (am[13] = "OPT"),
    (am[14] = "GTM"),
    am);
function cm(a) {
  a.ca && (a.U ? (bm.hasOwnProperty(a.U) ? (a.ca = bm[a.U] + "-" + a.ca) : delete a.ca) : delete a.ca);
}
var dm = { a: 2, d: 3, e: 4, f: 5, g: 14, h: 6, i: 0, m: 7, n: 0, u: 1, t: 12 };
function em(a) {
  var b = {},
    c = a[1],
    d = a[2];
  if (-1 === "adefghimnoput".indexOf(d)) throw Error("Invalid product.");
  switch (c) {
    case "a":
      b.U = 11;
      break;
    case "f":
      b.U = 0;
      break;
    case "o":
    case "q":
    case "r":
    case "s":
      if (!dm.hasOwnProperty(d)) throw Error("Invalid product for runtime type.");
      b.U = dm[d];
      break;
    case "p":
      switch (d) {
        case "a":
        case "u":
        case "d":
          b.U = 9;
          break;
        default:
          b.U = 8;
      }
      break;
    case "w":
    case "x":
    case "y":
      b.U = 10;
      break;
    case "z":
      b.U = 13;
      break;
    default:
      throw Error("Invalid runtime type.");
  }
  switch (c) {
    case "f":
      b.ya = 0;
      break;
    case "r":
    case "y":
      b.ya = 1;
      break;
    case "s":
      b.ya = 2;
      break;
    default:
      b.ya = 3;
  }
  switch (a[3]) {
    case "3":
      b.ua = 0;
      break;
    case "f":
      b.ua = 2;
      break;
    case "s":
      b.ua = 1;
      break;
    default:
      throw Error("Invalid beacon transport.");
  }
  c = a.slice(4, 7);
  if (!/^[1-9a-c][1-9a-v]\d$/.test(c)) throw Error("Invalid runtime version.");
  b.Hb = "2" + c;
  if ((a = a.slice(7))) b.ca = a;
  cm(b);
  return b;
}
var fm = K(
    I(
      H("Container ID", function (a) {
        this.format = "";
        return a.label || "not set";
      }),
      "copyable"
    ),
    ""
  ),
  gm = K(
    Ve("Anti-flicker snippet timed out too fast", function (a) {
      a = parseInt(a.label, 10);
      return !isNaN(a) && 1e3 >= a;
    }),
    "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-timeout"
  ),
  hm = "dataLayer.hide",
  im = !1,
  jm = new qg(void 0, function (a) {
    a = a.split(".");
    for (var b = window, c = 0; c < a.length && ((b = b[a[c]]), b); c++);
    return b;
  });
function km(a) {
  try {
    var b = window[window.GoogleAnalyticsObject || "ga"];
    if (b && b.getByName) {
      var c = b.getByName(a);
      if (c) {
        var d = {},
          e = c.get("&gtm");
        e && (d.gtmContainerId = e);
        var f = c.get("trackingId");
        d.trackingId = f;
        var g =
            "clientId alwaysSendReferrer allowAnchor allowLinker cookieName cookieDomain cookieExpires cookiePath cookieUpdate storage useAmpClientId storeGac legacyCookieDomain legacyHistoryImport".split(
              " "
            ),
          h = {},
          k = {};
        g.forEach(function (t) {
          return (h[t] = c.get(t));
        });
        var l = !1;
        b.getAll().forEach(function (t) {
          t.get("trackingId") == f &&
            t != c &&
            g.forEach(function (C) {
              t.get(C) != h[C] && ((l = !0), (k[C] = !0));
            });
        });
        l && console.log("Google Optimize installation issue: GA configure properties mismatch: " + Object.keys(k).join(","));
        d.configMismatch = l;
        return d;
      }
    }
  } catch (t) {
    console.log("Exception access tracker: " + a + " -> " + t);
  }
}
var lm = {},
  mm = Ue("Async Hide DataLayer Name", function (a) {
    (a = z(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*["']([^']+)["']\s*,\s*(\d+)\s*,\s*{\s*['"]([^"']+)['"]/m, a.label, 4)) &&
      (hm = a + ".hide");
    return a;
  }).l([
    ng(
      K(
        U("DataLayer variable name mismatch", function (a, b) {
          (a = w(a.getAttribute("src")).v.get("l")) || (a = "dataLayer");
          return a != b.label;
        }),
        "https://support.google.com/optimize/answer/7577190#datalayer-variable-name-mismatch"
      ),
      '//script[contains(@src, "www.google-analytics.com/gtm/js?id=")]| //script[contains(@src, "www.googleoptimize.com/optimize.js?id=")]'
    )
  ]),
  nm = I(
    M(
      H("Anti-flicker snippet timeout", function (a) {
        return z(/\(([^,]+)\s*,\s*([^,]+)\s*,\s*'([^,]+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,\s*{'([^']+)'/, a.label, 5);
      }),
      "Metadata"
    ),
    "copyable"
  ).l([gm]),
  om = ng(
    ag("Anti-flicker snippet", function (a) {
      this.format = "";
      return a.textContent;
    }),
    '//script[contains(text(), "(a,s,y,n,c,h,i,d,e)")]'
  ).l([
    mm,
    nm,
    K(
      bg("Anti-flicker snippet not in HEAD", function (a) {
        return "HEAD" != a.parentNode.nodeName ? !0 : !1;
      }),
      "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-not-in-head"
    )
  ]),
  pm = function () {
    V.call(this, "Google Optimize", 99);
    this.K = ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"];
  };
pa(pm, V);
pm.prototype.J = function () {
  var a = void 0 === a ? !1 : a;
  return ["www.google-analytics.com/gtm/js", "www.googleoptimize.com/optimize.js"].map(function (b) {
    return L(
      R(
        "Google Optimize",
        b,
        r("%s ${%s}", "Google Optimize", "Container ID"),
        "https://support.google.com/360suite/optimize/answer/6211921",
        function (c) {
          return w(c.url).v.get("id");
        }
      ),
      a ? [] : [fm, kf(Lf(), "Fine")]
    );
  });
};
pm.prototype.G = function () {
  var a = hg();
  a.l(om);
  return [
    mg(
      "Google Optimize",
      r("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.google-analytics.com/gtm/js?id=")]',
      function (b) {
        return z(/gtm\/js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l([
      fm,
      a,
      $f("GA Tracker Name", function (b) {
        b = w(b.getAttribute("src"));
        if (!b.v.get("cid")) return !1;
        b = (b = b.v.get("t")) ? b : "t0";
        lm[b] = new qg(void 0, km);
        return b;
      }),
      K(
        U("Legacy Optimize snippet", function (b) {
          return "sync" == w(b.getAttribute("src")).v.get("m");
        }),
        "https://support.google.com/optimize/answer/7577190#legacy-optimize-snippet"
      )
    ]),
    mg(
      "Google Optimize",
      r("%s ${%s}", "Google Optimize", "Container ID"),
      "https://support.google.com/360suite/optimize/answer/6211921",
      '//script[contains(@src, "www.googleoptimize.com/optimize.js?id=")]',
      function (b) {
        im = !0;
        return z(/optimize.js[?]id=([^=&]*)/, b.getAttribute("src"));
      }
    ).l([
      fm,
      ag("Synchronous", function (b) {
        return b.hasAttribute("async") ? "No" : "Yes";
      }),
      a
    ])
  ];
};
pm.prototype.fa = function () {
  if (im) {
    var a = {};
    return (a[hm] = jm), a;
  }
  a = {};
  return Object.assign({}, lm, ((a[hm] = jm), (a.gaData = new qg()), a));
};
pm.prototype.ja = function () {
  var a = new pg("Hidden", "Google Optimize", hm).l([
    K(
      We("Anti-flicker snippet timed out", function (c) {
        var d = !1;
        Object.keys(c.template.context).forEach(function (e) {
          !0 === c.template.context[e] && (d = !0);
        });
        return d;
      }),
      "https://support.google.com/optimize/answer/7577190#page-hiding-snippet-timeout"
    ),
    I(
      M(
        H("Anti-flicker snippet timeout", function (c) {
          return (c = c.template.context.timeout) ? String(c) : !1;
        }),
        "Metadata"
      ),
      "copyable"
    ).l(gm)
  ]);
  if (im) return [a];
  var b = Object.keys(lm).map(function (c) {
    return new pg("Hidden", "Google Optimize", c).l([
      H("Google Analytics Property", function (d) {
        return d.template.context.trackingId;
      }).l(
        new pg(
          "Error",
          "Google Optimize",
          "Analytics pageview not detected",
          "https://support.google.com/optimize/answer/7577190#analytics-pageview-not-detected",
          function (d, e) {
            if (!d.gaData) return !0;
            try {
              var f = JSON.parse(d.gaData);
              return !(f[e.label] && f[e.label].hitcount);
            } catch (g) {
              console.log("Ignoring gaData parsing error: " + g);
            }
            return !1;
          }
        )
      ),
      K(
        I(
          H("GTM Container ID", function (d) {
            this.format = "";
            a: {
              if ((d = d.template.context.gtmContainerId) && "string" == typeof d)
                if (-1 !== Zl.indexOf(Number(d[0])))
                  try {
                    b: {
                      var e = Number(d[0]);
                      if (-1 === Zl.indexOf(e)) throw Error("Invalid parameter version " + e + " in parameter " + d);
                      switch (e) {
                        case 4:
                          e = 1;
                          var f = d.length,
                            g = {};
                          try {
                            for (; e < f; ) {
                              for (var h = void 0, k = d.substring(e), l = 0, t = !1, C = 0, Q = k.length; l < Q && !t; ) {
                                var Qd = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(k[l]);
                                if (-1 === Qd) throw Error("Invalid descriptor");
                                t = !(Qd & 32);
                                C <<= 5;
                                C |= Qd & 31;
                                if (0 === l) {
                                  h = Qd & 3;
                                  switch (h) {
                                    case 0:
                                      throw Error("Encoding type unspecified");
                                    case 1:
                                    case 2:
                                    case 3:
                                      break;
                                    default:
                                      throw Error("Encoding type out of range");
                                  }
                                  C >>= 2;
                                }
                                if (t)
                                  switch (C) {
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
                                l++;
                              }
                              if (l >= Q) throw Error("Invalid descriptor length");
                              h = { qc: h, sc: C };
                              e += l - 1;
                              l = void 0;
                              switch (h.qc) {
                                case 1:
                                  l = 1;
                                  break;
                                case 2:
                                  l = 4;
                                  break;
                                case 3:
                                  if (
                                    (e++, (l = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(d[e])), -1 === l)
                                  )
                                    throw Error("Invalid value length");
                              }
                              if (e + l >= f || 0 === l) throw Error("Invalid value length");
                              e++;
                              var Ka = d.slice(e, e + l);
                              switch (h.sc) {
                                case 1:
                                  if (void 0 !== g.U || void 0 !== g.ya) throw Error("Duplicate runtime value");
                                  var vf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(Ka);
                                  if (-1 === vf) throw Error("Invalid runtime");
                                  h = vf & 3;
                                  switch (h) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                      break;
                                    default:
                                      throw Error("Load Source out of range");
                                  }
                                  t = vf >> 2;
                                  switch (t) {
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
                                  var ym = h;
                                  var zm = t;
                                  g.U = zm;
                                  g.ya = ym;
                                  break;
                                case 2:
                                  if (void 0 !== g.ua) throw Error("Duplicate beacon transport value");
                                  var wf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(Ka);
                                  if (-1 === wf) throw Error("Invalid beacon transport");
                                  switch (wf) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Beacon transport out of range");
                                  }
                                  g.ua = wf;
                                  break;
                                case 3:
                                  if (void 0 !== g.Hb) throw Error("Duplicate runtime version value");
                                  if (!$l.test(Ka)) throw Error("Invalid runtime version");
                                  g.Hb = Ka;
                                  break;
                                case 4:
                                  if (void 0 !== g.Fc) throw Error("Duplicate release experiment value");
                                  var xf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(Ka);
                                  if (-1 === xf) throw Error("Invalid release experiment");
                                  switch (xf) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Release experiment out of range");
                                  }
                                  g.Fc = xf;
                                  break;
                                case 5:
                                  if (void 0 !== g.wc || void 0 !== g.ca) throw Error("Duplicate target value");
                                  var yf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(Ka[0]);
                                  if (-1 === yf) throw Error("Invalid load type");
                                  var yi = Ka.slice(1);
                                  if (0 === yi.length) throw Error("Invalid target id");
                                  switch (yf) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Load type out of range");
                                  }
                                  var Am = yf;
                                  var Bm = yi;
                                  g.wc = Am;
                                  g.ca = Bm;
                                  break;
                                case 6:
                                  if (void 0 !== g.Gc) throw Error("Duplicate service worker experiment value");
                                  var zf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".indexOf(Ka);
                                  if (-1 === zf) throw Error("Invalid service worker experiment");
                                  switch (zf) {
                                    case 0:
                                    case 1:
                                    case 2:
                                      break;
                                    default:
                                      throw Error("Service worker experiment out of range");
                                  }
                                  g.Gc = zf;
                                  break;
                                case 7:
                                  if (void 0 !== g.oc) throw Error("Duplicate canonical ID value");
                                  g.oc = Ka;
                                  break;
                                case 8:
                                  if (void 0 !== g.Lc) throw Error("Duplicate source canonical ID value");
                                  g.Lc = Ka;
                                  break;
                                case 9:
                                  if (void 0 !== g.Hc) throw Error("Duplicate SGTM canonical ID value");
                                  g.Hc = Ka;
                              }
                              e += l;
                            }
                          } catch (zi) {
                            throw Error("Parse Failure: " + zi + " at position " + e + ".");
                          }
                          cm(g);
                          var Af = g;
                          break b;
                        case 3:
                          Af = em(d);
                          break b;
                        case 2:
                          g = em(d.slice(0, 3) + "3" + d.slice(3));
                          delete g.ua;
                          Af = g;
                          break b;
                        default:
                          throw Error("Invalid parameter version " + e + " in parameter " + d);
                      }
                    }
                    var Bf = Af.ca;
                    break a;
                  } catch (zi) {}
                else if (3 < d.length) {
                  Bf = "GTM-" + d.substr(3);
                  break a;
                }
              Bf = void 0;
            }
            return Bf || !1;
          }),
          "copyable"
        ),
        ""
      ),
      K(
        G("Analytics configuration mismatch", function (d) {
          return d.template.context.configMismatch;
        }),
        "https://support.google.com/optimize/answer/7577190#analytics-configuration-mismatch"
      )
    ]);
  });
  return [].concat(b instanceof Array ? b : ia(ha(b)), [a]);
};
Cg(new pm());
var qm = function (a) {
  V.call(this, a.tagName, a.priority);
  this.definition = a;
  this.K = a.K;
};
pa(qm, V);
m = qm.prototype;
m.J = function () {
  return this.definition.Za.map(function (a) {
    return "function" == typeof a ? a(void 0) : a;
  });
};
m.ja = function () {
  return this.definition.vc;
};
m.G = function () {
  return this.definition.ra;
};
m.ea = function () {
  return this.definition.Ta;
};
m.Ya = function () {
  return this.definition.rc;
};
m.Xa = function () {
  return this.definition.nc;
};
var rm = L(
    K(
      I(
        H("Account ID", function (a) {
          this.format = "";
          return a.label || "not set";
        }),
        "copyable"
      ),
      ""
    ),
    [
      K(
        Ve("Invalid or missing account ID", function (a) {
          return !Hc([/^GTM-[0-9A-Z]{4,7}$/, /^UA-[^"']*$/, /^AW-[^"']*$/, /^DC-[^"']*$/], a.label);
        }),
        "https://support.google.com/tagassistant/answer/7548655#account_id"
      )
    ]
  ),
  sm = K(Ef, "https://support.google.com/tagassistant/answer/7548655#nonstandard"),
  tm = kf(Lf(), "Fine"),
  um,
  vm = {
    type: "Error",
    category: "Global site tag (gtag.js)",
    text: "Invalid call to gtag(), the Global site snippet is not installed",
    opt_infoLink: "https://support.google.com/tagassistant/answer/7548655#commands_without_snippet"
  };
um = new pg(vm.type, vm.category, vm.text, vm.opt_infoLink, vm.opt_function, vm.opt_format);
um.ha = function (a) {
  if (a.nodeType != Node.DOCUMENT_NODE) return !1;
  a = a.documentElement.textContent;
  return z(/gtag\('/m, a) && !z(/function gtag\([^)]*\)/m, a) ? !0 : !1;
};
var wm = mg(
  "Global site tag (gtag.js)",
  r("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
  "https://support.google.com/tagassistant/answer/7548655",
  '//script[not(contains(@src,"&cx=")) and contains(@src, "www.googletagmanager.com/gtag/js?id=")]',
  function (a) {
    return z(/gtag\/js[?]id=([^=&]*)/, a.getAttribute("src"));
  }
).l(rm);
function xm(a) {
  Md(a, ["HTTP response code indicates tag failed to fire"]).forEach(function (b) {
    b.infoLink = "https://support.google.com/tagassistant/answer/7548655#http_response";
  });
}
function Cm(a) {
  a = Td(a);
  a.length &&
    a.forEach(function (b) {
      b.type = "Warning";
      b.text += ". This could be due to an empty or un-published container";
    });
}
var Dm = Rf("Global site tag (gtag.js)", function (a) {
    a = Pd(a, ["Global site tag (gtag.js)"]);
    xm(a);
    Cm(a);
  }),
  Em = Pf(
    "Suggestion",
    "Global site tag (gtag.js)",
    "Multiple installations of Global site tag (gtag.js) detected",
    "https://support.google.com/tagassistant/answer/7548655#multiple_tags",
    function (a) {
      a = Pd(a, ["Global site tag (gtag.js)"]);
      return 1 < Jd(a, 1).length;
    }
  ),
  Fm = new (function () {
    this.tagName = "Default Tag Name";
    this.priority = 99;
    this.Za = [];
    this.vc = [];
    this.ra = [];
    this.Ta = [];
    this.rc = [];
    this.nc = [];
    this.K = null;
  })();
Fm.tagName = "Global site tag (gtag.js)";
Fm.priority = 30;
Fm.K = ["www.googletagmanager.com/gtag/js"];
Fm.Za = [
  function (a) {
    return L(
      R(
        "Global site tag (gtag.js)",
        "www.googletagmanager.com/gtag/js",
        r("%s ${%s}", "Global site tag (gtag.js)", "Account ID"),
        "https://support.google.com/tagassistant/answer/7548655",
        function (b) {
          return w(b.url).v.get("id");
        }
      ),
      a ? [] : [rm, sm, tm]
    );
  }
];
Fm.ra = [um, wm];
Fm.Ta = [Dm, Em];
Cg(new qm(Fm));
var Gm = {},
  Hm = {};
function Im(a, b, c) {
  if (0 < c.length || b == T.URL) (a = new vg(a, b, c)), chrome.extension.sendMessage(a);
}
function Yc() {
  chrome.extension.onMessage.addListener(Jm);
}
function Km() {
  var a = ke(wg).Va();
  Im("DomTags", T.URL, a);
}
function Jm(a) {
  var b = ke(wg);
  Nc();
  var c = a.message,
    d = a.tabId,
    e = a.url;
  switch (c) {
    case "DomTags":
      if (Eg(e) || T.location.href.match(ld()) || Gg(b, e)) break;
      Km();
    case "JsVariables":
      Ig(b);
      break;
    case "ExternalScriptTags":
      e != T.location.href ||
        Gm[a.url] ||
        ((Gm[a.url] = !0),
        b.Wa(a.url, function (g, h) {
          Im(c, h, g);
        }));
      break;
    case "InjectHar":
      var f = yl("gta-target-textarea");
      f && a.har
        ? (Ie(Le, d, null, "HAR injected"),
          (f.value = a.har),
          f.dispatchEvent(new Event("change")),
          (a = yl("gta-target-submit"))
            ? (Ie(Le, d, null, "Submitting Har to GA"), a.dispatchEvent(new Event("click")))
            : Ie(Le, d, null, "Could not find an option to Submit the HAR"))
        : Ie(Le, d, null, "Found textarea %s to inject the HAR: %s", !!f, a.har);
      break;
    case "RecordingReachedThreshold":
      a["continue"] = window.confirm(
        'Tag Assistant: Your recording has been reached its threshold. Click "OK" to continue and "Cancel" to disable the further recording.'
      );
      Ie(Le, d, null, "ContentScript: Recording reached it threshold. Continue? %s", a["continue"] ? "Yes" : "No");
      chrome.extension.sendMessage(a);
      break;
    case "RecordingMaxQuota":
      window.alert("Tag Assistant: Recording quota has reached its max limit and no further visits will be recorded.");
      a["continue"] = !1;
      Ie(Le, d, null, "ContentScript: Recording reached its max limit. Stop further recording");
      chrome.extension.sendMessage(a);
      break;
    case "Timings":
      if (!T.location.href.match(ld())) {
        for (f in a.timings) (d = window.performance.getEntriesByName(f)) && (a.timings[f] = d);
        chrome.extension.sendMessage(a);
      }
      break;
    case "GetRecordedIssues":
    case "GtaAnalyze":
    case "LoadScript":
      break;
    default:
      Ie(Je, d, null, "Unknown method received on content script: %s", c);
  }
}
function Lm(a) {
  a = a.detail.variables || {};
  var b = !1;
  hb(a, function (c, d) {
    for (var e = 0, f = 0; f < c.length; ++f) e = (31 * e + c.charCodeAt(f)) >>> 0;
    c = e;
    c != Hm[d] && ((Hm[d] = c), (b = !0));
  });
  b && ((a = Dg(a)), Im("JsVariables", T.URL, a));
}
Eg(T.URL) || (cd(), window.addEventListener("TvtRetrievedVariablesEvent", Lm));
