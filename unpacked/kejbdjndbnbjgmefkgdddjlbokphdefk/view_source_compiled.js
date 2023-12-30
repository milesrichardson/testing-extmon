var n,
  aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  },
  q =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        },
  ba = function (a) {
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
  ca = ba(this),
  r = function (a, b) {
    if (b)
      a: {
        var c = ca;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && q(c, a, { configurable: !0, writable: !0, value: b });
      }
  };
r("Symbol", function (a) {
  if (a) return a;
  var b = function (f, l) {
    this.la = f;
    q(this, "description", { configurable: !0, writable: !0, value: l });
  };
  b.prototype.toString = function () {
    return this.la;
  };
  var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    d = 0,
    e = function (f) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new b(c + (f || "") + "_" + d++, f);
    };
  return e;
});
r("Symbol.iterator", function (a) {
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
    var d = ca[b[c]];
    "function" === typeof d &&
      "function" != typeof d.prototype[a] &&
      q(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return da(aa(this));
        }
      });
  }
  return a;
});
var da = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  ea = function (a) {
    return (a.raw = a);
  },
  t = function (a, b) {
    a.raw = b;
    return a;
  },
  u = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
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
  v = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
r("WeakMap", function (a) {
  function b() {}
  function c(h) {
    var k = typeof h;
    return ("object" === k && null !== h) || "function" === k;
  }
  function d(h) {
    if (!v(h, f)) {
      var k = new b();
      q(h, f, { value: k });
    }
  }
  function e(h) {
    var k = Object[h];
    k &&
      (Object[h] = function (m) {
        if (m instanceof b) return m;
        Object.isExtensible(m) && d(m);
        return k(m);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var h = Object.seal({}),
          k = Object.seal({}),
          m = new a([
            [h, 2],
            [k, 3]
          ]);
        if (2 != m.get(h) || 3 != m.get(k)) return !1;
        m.delete(h);
        m.set(k, 4);
        return !m.has(h) && 4 == m.get(k);
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
  var l = 0,
    g = function (h) {
      this.O = (l += Math.random() + 1).toString();
      if (h) {
        h = u(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    };
  g.prototype.set = function (h, k) {
    if (!c(h)) throw Error("Invalid WeakMap key");
    d(h);
    if (!v(h, f)) throw Error("WeakMap key fail: " + h);
    h[f][this.O] = k;
    return this;
  };
  g.prototype.get = function (h) {
    return c(h) && v(h, f) ? h[f][this.O] : void 0;
  };
  g.prototype.has = function (h) {
    return c(h) && v(h, f) && v(h[f], this.O);
  };
  g.prototype.delete = function (h) {
    return c(h) && v(h, f) && v(h[f], this.O) ? delete h[f][this.O] : !1;
  };
  return g;
});
r("Map", function (a) {
  if (
    (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var g = Object.seal({ x: 4 }),
          h = new a(u([[g, "s"]]));
        if ("s" != h.get(g) || 1 != h.size || h.get({ x: 4 }) || h.set({ x: 4 }, "t") != h || 2 != h.size) return !1;
        var k = h.entries(),
          m = k.next();
        if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
        m = k.next();
        return m.done || 4 != m.value[0].x || "t" != m.value[1] || !k.next().done ? !1 : !0;
      } catch (p) {
        return !1;
      }
    })()
  )
    return a;
  var b = new WeakMap(),
    c = function (g) {
      this[0] = {};
      this[1] = f();
      this.size = 0;
      if (g) {
        g = u(g);
        for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
      }
    };
  c.prototype.set = function (g, h) {
    g = 0 === g ? 0 : g;
    var k = d(this, g);
    k.list || (k.list = this[0][k.id] = []);
    k.entry
      ? (k.entry.value = h)
      : ((k.entry = { next: this[1], previous: this[1].previous, head: this[1], key: g, value: h }),
        k.list.push(k.entry),
        (this[1].previous.next = k.entry),
        (this[1].previous = k.entry),
        this.size++);
    return this;
  };
  c.prototype.delete = function (g) {
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
  c.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = f();
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
    for (var k = this.entries(), m; !(m = k.next()).done; ) (m = m.value), g.call(h, m[1], m[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (g, h) {
      var k = h && typeof h;
      "object" == k || "function" == k ? (b.has(h) ? (k = b.get(h)) : ((k = "" + ++l), b.set(h, k))) : (k = "p_" + h);
      var m = g[0][k];
      if (m && v(g[0], k))
        for (g = 0; g < m.length; g++) {
          var p = m[g];
          if ((h !== h && p.key !== p.key) || h === p.key) return { id: k, list: m, index: g, entry: p };
        }
      return { id: k, list: m, index: -1, entry: void 0 };
    },
    e = function (g, h) {
      var k = g[1];
      return da(function () {
        if (k) {
          for (; k.head != g[1]; ) k = k.previous;
          for (; k.next != k.head; ) return (k = k.next), { done: !1, value: h(k) };
          k = null;
        }
        return { done: !0, value: void 0 };
      });
    },
    f = function () {
      var g = {};
      return (g.previous = g.next = g.head = g);
    },
    l = 0;
  return c;
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
r("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b, c) {
          return c;
        });
      };
});
r("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b) {
          return b;
        });
      };
});
r("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b, c) {
          return [b, c];
        });
      };
});
r("Array.from", function (a) {
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
          for (var l = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, l++));
        } else for (f = b.length, l = 0; l < f; l++) e.push(c.call(d, b[l], l));
        return e;
      };
});
r("Math.log2", function (a) {
  return a
    ? a
    : function (b) {
        return Math.log(b) / Math.LN2;
      };
});
r("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) v(b, d) && c.push(b[d]);
        return c;
      };
});
r("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) v(b, d) && c.push([d, b[d]]);
        return c;
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var w = this || self,
  x = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  na = function (a) {
    var b = x(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  oa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ua = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Ga = function (d, e, f) {
      for (var l = Array(arguments.length - 2), g = 2; g < arguments.length; g++) l[g - 2] = arguments[g];
      return b.prototype[e].apply(d, l);
    };
  },
  pa = function (a) {
    return a;
  };
function y(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, y);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
oa(y, Error);
y.prototype.name = "CustomError";
function A(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  y.call(this, c + a[d]);
}
oa(A, y);
A.prototype.name = "AssertionError";
function C(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  throw new A("" + e, f || []);
}
var D = function (a, b, c) {
    a || C("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  qa = function (a, b) {
    throw new A("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
  E = function (a, b, c) {
    "number" !== typeof a && C("Expected number but got %s: %s.", [x(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  ra = function (a, b, c) {
    "string" !== typeof a && C("Expected string but got %s: %s.", [x(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
  sa = function (a, b, c) {
    Array.isArray(a) || C("Expected array but got %s: %s.", [x(a), a], b, Array.prototype.slice.call(arguments, 2));
  };
var ta, ua;
a: {
  for (var va = ["CLOSURE_FLAGS"], wa = w, xa = 0; xa < va.length; xa++)
    if (((wa = wa[va[xa]]), null == wa)) {
      ua = null;
      break a;
    }
  ua = wa;
}
var ya = ua && ua[610401301];
ta = null != ya ? ya : !1;
var za = /&/g,
  Aa = /</g,
  Ba = />/g,
  Ca = /"/g,
  Da = /'/g,
  Ea = /\x00/g,
  Fa = /[\x00&<>"']/;
var F,
  Ga = w.navigator;
F = Ga ? Ga.userAgentData || null : null;
function Ha(a) {
  return ta
    ? F
      ? F.brands.some(function (b) {
          return (b = b.brand) && -1 != b.indexOf(a);
        })
      : !1
    : !1;
}
function G(a) {
  var b;
  a: {
    if ((b = w.navigator)) if ((b = b.userAgent)) break a;
    b = "";
  }
  return -1 != b.indexOf(a);
}
function H() {
  return ta ? !!F && 0 < F.brands.length : !1;
}
function Ia() {
  return H() ? Ha("Chromium") : ((G("Chrome") || G("CriOS")) && !(H() ? 0 : G("Edge"))) || G("Silk");
}
var Ja;
var I = function (a, b) {
  this.Z = (a === Ka && b) || "";
  this.ma = La;
};
I.prototype.P = !0;
I.prototype.N = function () {
  return this.Z;
};
I.prototype.toString = function () {
  return "Const{" + this.Z + "}";
};
var Ma = function (a) {
    if (a instanceof I && a.constructor === I && a.ma === La) return a.Z;
    qa("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  La = {},
  Ka = {};
var J = function (a) {
  if (Na !== Na) throw Error("SafeUrl is not meant to be built directly");
  this.ja = a;
};
J.prototype.toString = function () {
  return this.ja.toString();
};
J.prototype.P = !0;
J.prototype.N = function () {
  return this.ja.toString();
};
var Na = {};
new J("about:invalid#zClosurez");
new J("about:blank");
var Oa = {},
  Pa = function () {
    if (Oa !== Oa) throw Error("SafeStyle is not meant to be built directly");
    this.ia = "";
    this.P = !0;
  };
Pa.prototype.N = function () {
  return this.ia;
};
Pa.prototype.toString = function () {
  return this.ia.toString();
};
new Pa();
var Qa = {},
  Ra = function () {
    if (Qa !== Qa) throw Error("SafeStyleSheet is not meant to be built directly");
    this.ha = "";
    this.P = !0;
  };
Ra.prototype.toString = function () {
  return this.ha.toString();
};
Ra.prototype.N = function () {
  return this.ha;
};
new Ra();
var Sa = {},
  K = function (a, b) {
    if (b !== Sa) throw Error("SafeHtml is not meant to be built directly");
    this.X = a;
    this.P = !0;
  };
K.prototype.N = function () {
  return this.X.toString();
};
K.prototype.toString = function () {
  return this.X.toString();
};
var Ta = function (a) {
    if (a instanceof K && a.constructor === K) return a.X;
    qa("expected object of type SafeHtml, got '" + a + "' of type " + x(a));
    return "type_error:SafeHtml";
  },
  Va = function (a) {
    a instanceof K ||
      ((a = "object" == typeof a && a.P ? a.N() : String(a)),
      Fa.test(a) &&
        (-1 != a.indexOf("&") && (a = a.replace(za, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"))),
      (a = Ua(a)));
    return a;
  },
  Ua = function (a) {
    if (void 0 === Ja) {
      var b = null;
      var c = w.trustedTypes;
      if (c && c.createPolicy)
        try {
          b = c.createPolicy("goog#html", { createHTML: pa, createScript: pa, createScriptURL: pa });
        } catch (d) {
          w.console && w.console.error(d.message);
        }
      Ja = b;
    }
    a = (b = Ja) ? b.createHTML(a) : a;
    return new K(a, Sa);
  },
  Wa = new K((w.trustedTypes && w.trustedTypes.emptyHTML) || "", Sa);
var Xa = function (a, b) {
  ra(Ma(a), "must provide justification");
  D(!/^[\s\xa0]*$/.test(Ma(a)), "must provide non-empty justification");
  return Ua(b);
};
var Ya = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
  Za = (function (a) {
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
    a.innerHTML = Ta(Wa);
    return !b.parentElement;
  }),
  $a = function (a, b) {
    if (Za()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Ta(b);
  };
var cb = function (a) {
    return -1 != a.indexOf("&") ? ("document" in w ? ab(a) : bb(a)) : a;
  },
  ab = function (a) {
    var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var c = w.document.createElement("div");
    return a.replace(db, function (d, e) {
      var f = b[d];
      if (f) return f;
      "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
      if (!f) {
        f = Xa(new I(Ka, "Single HTML entity."), d + " ");
        if (c.tagName && Ya[c.tagName.toUpperCase()])
          throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
        $a(c, f);
        f = c.firstChild.nodeValue.slice(0, -1);
      }
      return (b[d] = f);
    });
  },
  bb = function (a) {
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
  db = /&([^;\s<&]+);?/g;
var eb = function (a, b) {
  this.name = a;
  this.value = b;
};
eb.prototype.toString = function () {
  return this.name;
};
var fb = new eb("OFF", Infinity),
  gb = new eb("WARNING", 900),
  hb = new eb("CONFIG", 700),
  ib = function () {
    this.S = 0;
    this.clear();
  },
  jb;
ib.prototype.clear = function () {
  this.aa = Array(this.S);
  this.da = -1;
  this.ea = !1;
};
var kb = function (a, b, c) {
  this.reset(a || fb, b, c, void 0, void 0);
};
kb.prototype.reset = function (a, b) {
  this.ra = b;
};
kb.prototype.getMessage = function () {
  return this.ra;
};
var lb = function (a, b) {
    this.level = null;
    this.na = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.qa = {
      W: function () {
        return a;
      }
    };
  },
  mb = function (a) {
    if (a.level) return a.level;
    if (a.parent) return mb(a.parent);
    qa("Root logger has no level set.");
    return fb;
  };
lb.prototype.publish = function (a) {
  for (var b = this; b; )
    b.na.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
var nb = function () {
    this.entries = {};
    var a = new lb("");
    a.level = hb;
    this.entries[""] = a;
  },
  ob,
  L = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = L(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new lb(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  pb = function () {
    ob || (ob = new nb());
    return ob;
  };
var qb = function (a) {
    if (a.H && "function" == typeof a.H) return a.H();
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
  rb = function (a) {
    if (a.V && "function" == typeof a.V) return a.V();
    if (!a.H || "function" != typeof a.H) {
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
  sb = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (na(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
    else for (var d = rb(a), e = qb(a), f = e.length, l = 0; l < f; l++) b.call(c, e[l], d && d[l], a);
  };
var tb = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  ),
  ub = function (a, b) {
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
var M = function (a) {
  this.B = this.I = this.F = "";
  this.L = null;
  this.G = this.u = "";
  this.o = this.oa = !1;
  if (a instanceof M) {
    this.o = a.o;
    vb(this, a.F);
    var b = a.I;
    N(this);
    this.I = b;
    b = a.B;
    N(this);
    this.B = b;
    wb(this, a.L);
    b = a.u;
    N(this);
    this.u = b;
    xb(this, a.j.clone());
    a = a.G;
    N(this);
    this.G = a;
  } else
    a && (b = String(a).match(tb))
      ? ((this.o = !1),
        vb(this, b[1] || "", !0),
        (a = b[2] || ""),
        N(this),
        (this.I = O(a)),
        (a = b[3] || ""),
        N(this),
        (this.B = O(a, !0)),
        wb(this, b[4]),
        (a = b[5] || ""),
        N(this),
        (this.u = O(a, !0)),
        xb(this, b[6] || "", !0),
        (a = b[7] || ""),
        N(this),
        (this.G = O(a)))
      : ((this.o = !1), (this.j = new P(null, this.o)));
};
M.prototype.toString = function () {
  var a = [],
    b = this.F;
  b && a.push(Q(b, yb, !0), ":");
  var c = this.B;
  if (c || "file" == b)
    a.push("//"),
      (b = this.I) && a.push(Q(b, yb, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (c = this.L),
      null != c && a.push(":", String(c));
  if ((c = this.u)) this.B && "/" != c.charAt(0) && a.push("/"), a.push(Q(c, "/" == c.charAt(0) ? zb : Ab, !0));
  (c = this.j.toString()) && a.push("?", c);
  (c = this.G) && a.push("#", Q(c, Bb));
  return a.join("");
};
M.prototype.resolve = function (a) {
  var b = this.clone(),
    c = !!a.F;
  c ? vb(b, a.F) : (c = !!a.I);
  if (c) {
    var d = a.I;
    N(b);
    b.I = d;
  } else c = !!a.B;
  c ? ((d = a.B), N(b), (b.B = d)) : (c = null != a.L);
  d = a.u;
  if (c) wb(b, a.L);
  else if ((c = !!a.u)) {
    if ("/" != d.charAt(0))
      if (this.B && !this.u) d = "/" + d;
      else {
        var e = b.u.lastIndexOf("/");
        -1 != e && (d = b.u.slice(0, e + 1) + d);
      }
    e = d;
    if (".." == e || "." == e) d = "";
    else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
      d = 0 == e.lastIndexOf("/", 0);
      e = e.split("/");
      for (var f = [], l = 0; l < e.length; ) {
        var g = e[l++];
        "." == g
          ? d && l == e.length && f.push("")
          : ".." == g
          ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && l == e.length && f.push(""))
          : (f.push(g), (d = !0));
      }
      d = f.join("/");
    } else d = e;
  }
  c ? (N(b), (b.u = d)) : (c = "" !== a.j.toString());
  c ? xb(b, a.j.clone()) : (c = !!a.G);
  c && ((a = a.G), N(b), (b.G = a));
  return b;
};
M.prototype.clone = function () {
  return new M(this);
};
var vb = function (a, b, c) {
    N(a);
    a.F = c ? O(b, !0) : b;
    a.F && (a.F = a.F.replace(/:$/, ""));
  },
  wb = function (a, b) {
    N(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.L = b;
    } else a.L = null;
  },
  xb = function (a, b, c) {
    N(a);
    b instanceof P ? ((a.j = b), a.j.Y(a.o)) : (c || (b = Q(b, Cb)), (a.j = new P(b, a.o)));
  };
M.prototype.getQuery = function () {
  return this.j.toString();
};
M.prototype.removeParameter = function (a) {
  N(this);
  this.j.remove(a);
  return this;
};
var N = function (a) {
  if (a.oa) throw Error("Tried to modify a read-only Uri");
};
M.prototype.Y = function (a) {
  this.o = a;
  this.j && this.j.Y(a);
};
var O = function (a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  },
  Q = function (a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, Db)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
  Db = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  yb = /[#\/\?@]/g,
  Ab = /[#\?:]/g,
  zb = /[#\?]/g,
  Cb = /[#\?@]/g,
  Bb = /#/g,
  P = function (a, b) {
    this.i = this.g = null;
    this.l = a || null;
    this.o = !!b;
  },
  R = function (a) {
    a.g ||
      ((a.g = new Map()),
      (a.i = 0),
      a.l &&
        ub(a.l, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
P.prototype.add = function (a, b) {
  R(this);
  this.l = null;
  a = S(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, (c = []));
  c.push(b);
  this.i = E(this.i) + 1;
  return this;
};
P.prototype.remove = function (a) {
  R(this);
  a = S(this, a);
  return this.g.has(a) ? ((this.l = null), (this.i = E(this.i) - this.g.get(a).length), this.g.delete(a)) : !1;
};
P.prototype.clear = function () {
  this.g = this.l = null;
  this.i = 0;
};
var Eb = function (a, b) {
  R(a);
  b = S(a, b);
  return a.g.has(b);
};
n = P.prototype;
n.forEach = function (a, b) {
  R(this);
  this.g.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
n.V = function () {
  R(this);
  for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
n.H = function (a) {
  R(this);
  var b = [];
  if ("string" === typeof a) Eb(this, a) && (b = b.concat(this.g.get(S(this, a))));
  else {
    a = Array.from(this.g.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
n.set = function (a, b) {
  R(this);
  this.l = null;
  a = S(this, a);
  Eb(this, a) && (this.i = E(this.i) - this.g.get(a).length);
  this.g.set(a, [b]);
  this.i = E(this.i) + 1;
  return this;
};
n.get = function (a, b) {
  if (!a) return b;
  a = this.H(a);
  return 0 < a.length ? String(a[0]) : b;
};
n.toString = function () {
  if (this.l) return this.l;
  if (!this.g) return "";
  for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.H(d);
    for (var f = 0; f < d.length; f++) {
      var l = e;
      "" !== d[f] && (l += "=" + encodeURIComponent(String(d[f])));
      a.push(l);
    }
  }
  return (this.l = a.join("&"));
};
n.clone = function () {
  var a = new P();
  a.l = this.l;
  this.g && ((a.g = new Map(this.g)), (a.i = this.i));
  return a;
};
var S = function (a, b) {
  b = String(b);
  a.o && (b = b.toLowerCase());
  return b;
};
P.prototype.Y = function (a) {
  a &&
    !this.o &&
    (R(this),
    (this.l = null),
    this.g.forEach(function (b, c) {
      var d = c.toLowerCase();
      if (c != d && (this.remove(c), this.remove(d), 0 < b.length)) {
        this.l = null;
        c = this.g;
        var e = c.set;
        d = S(this, d);
        var f = b.length;
        if (0 < f) {
          for (var l = Array(f), g = 0; g < f; g++) l[g] = b[g];
          f = l;
        } else f = [];
        e.call(c, d, f);
        this.i = E(this.i) + b.length;
      }
    }, this));
  this.o = a;
};
P.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    sb(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
}; /*

 SPDX-License-Identifier: Apache-2.0
*/
var Fb = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var Gb = {};
var T = function (a, b) {
    if (b !== Gb) throw Error("Bad secret");
    this.sa = a;
  },
  U = function () {};
T.prototype = fa(U.prototype);
T.prototype.constructor = T;
if (la) la(T, U);
else
  for (var V in U)
    if ("prototype" != V)
      if (Object.defineProperties) {
        var Hb = Object.getOwnPropertyDescriptor(U, V);
        Hb && Object.defineProperty(T, V, Hb);
      } else T[V] = U[V];
T.ua = U.prototype;
T.prototype.toString = function () {
  return this.sa;
};
var Ib = ea([""]),
  Jb = t(["\x00"], ["\\0"]),
  Kb = t(["\n"], ["\\n"]),
  Mb = t(["\x00"], ["\\u0000"]),
  Nb = ea([""]),
  Ob = t(["\x00"], ["\\0"]),
  Pb = t(["\n"], ["\\n"]),
  Qb = t(["\x00"], ["\\u0000"]);
function Rb(a) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(a.raw) ||
    a.length !== a.raw.length ||
    (!Sb && a === a.raw) ||
    !((Sb && !Tb) || W(a)) ||
    1 !== a.length
  )
    throw new TypeError(
      "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
    );
}
function W(a) {
  return Object.isFrozen(a) && Object.isFrozen(a.raw);
}
function Ub(a) {
  return -1 === a.toString().indexOf("`");
}
var Sb =
    Ub(function (a) {
      return a(Ib);
    }) ||
    Ub(function (a) {
      return a(Jb);
    }) ||
    Ub(function (a) {
      return a(Kb);
    }) ||
    Ub(function (a) {
      return a(Mb);
    }),
  Tb = W(Nb) && W(Ob) && W(Pb) && W(Qb);
var Vb = [],
  Wb = function (a) {
    var b = L(pb(), "safevalues").qa;
    if (b) {
      var c = "A URL with content '" + a + "' was sanitized away.",
        d = gb;
      if ((a = b))
        if ((a = b && d)) {
          a = d.value;
          var e = b ? mb(L(pb(), b.W())) : fb;
          a = a >= e.value;
        }
      if (a) {
        d = d || fb;
        a = L(pb(), b.W());
        "function" === typeof c && (c = c());
        jb || (jb = new ib());
        e = jb;
        b = b.W();
        if (0 < e.S) {
          var f = (e.da + 1) % e.S;
          e.da = f;
          e.ea ? ((e = e.aa[f]), e.reset(d, c, b), (b = e)) : ((e.ea = f == e.S - 1), (b = e.aa[f] = new kb(d, c, b)));
        } else b = new kb(d, c, b);
        a.publish(b);
      }
    }
  };
-1 === Vb.indexOf(Wb) && Vb.push(Wb);
var Xb = { Ja: !0 },
  X = function () {
    throw Error("Do not instantiate directly");
  };
X.prototype.ba = null;
X.prototype.getContent = function () {
  return this.content;
};
X.prototype.toString = function () {
  return this.content;
};
X.prototype.ka = function () {
  if (this.ca !== Xb) throw Error("Sanitized content was not of kind HTML.");
  return Xa(new I(Ka, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), this.toString());
};
var Yb = function () {
  X.call(this);
};
oa(Yb, X);
Yb.prototype.ca = Xb;
!G("Android") || Ia();
Ia();
G("Safari") &&
  (Ia() ||
    (H() ? 0 : G("Coast")) ||
    (H() ? 0 : G("Opera")) ||
    (H() ? 0 : G("Edge")) ||
    (H() ? Ha("Microsoft Edge") : G("Edg/")) ||
    (H() && Ha("Opera")));
D(!0);
var Zb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
  $b = Math,
  ac = $b.log2,
  bc = Math.max,
  cc = bc.apply,
  dc = Object.values({ Ba: 1, za: 2, ya: 4, Ea: 8, Da: 16, Ca: 32, va: 64, Fa: 128, xa: 256, wa: 512, Aa: 1024 }),
  ec;
if (dc instanceof Array) ec = dc;
else {
  for (var fc = u(dc), gc, hc = []; !(gc = fc.next()).done; ) hc.push(gc.value);
  ec = hc;
}
D(10 === ac.call($b, cc.call(bc, Math, ec)));
var ic = Object.getOwnPropertyDescriptor(Array.prototype, "pa");
Object.defineProperties(Array.prototype, {
  pa: {
    get: function () {
      function a(e, f) {
        e & b && c.push(f);
      }
      var b = jc(this),
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
      var d = kc(b);
      536870912 !== d && c.push("pivot: " + d);
      d = c.join(",");
      return ic ? ic.get.call(this) + "|" + d : d;
    },
    configurable: !0,
    enumerable: !1
  }
});
var jc = Zb
  ? function (a) {
      sa(a, "state is only maintained on arrays.");
      return a[Zb] | 0;
    }
  : function (a) {
      sa(a, "state is only maintained on arrays.");
      return a.Ha | 0;
    };
function kc(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var lc = function () {
  throw Error("please construct maps as mutable then call toImmutable");
};
if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
  var mc = function () {
      throw Error(
        "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
      );
    },
    nc = {};
  Object.defineProperties(lc, ((nc[Symbol.hasInstance] = { value: mc, configurable: !1, writable: !1, enumerable: !1 }), nc));
  D(lc[Symbol.hasInstance] === mc, "defineProperties did not work: was it monkey-patched?");
}
Object.freeze({});
if ("undefined" !== typeof Proxy) {
  var Y = oc;
  new Proxy(
    {},
    {
      getPrototypeOf: Y,
      setPrototypeOf: Y,
      isExtensible: Y,
      preventExtensions: Y,
      getOwnPropertyDescriptor: Y,
      defineProperty: Y,
      has: Y,
      get: Y,
      set: Y,
      deleteProperty: Y,
      apply: Y,
      construct: Y
    }
  );
}
function oc() {
  throw Error(
    "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
  );
  throw Error();
}
function pc() {}
(function () {
  var a = w.jspbGetTypeName;
  w.jspbGetTypeName = a
    ? function (b) {
        return a(b) || void 0;
      }
    : pc;
})(); /*
 SPDX-License-Identifier: Apache-2.0 */
var qc = Object.prototype.hasOwnProperty;
function rc() {}
rc.prototype = Object.create(null);
function sc(a, b, c) {
  if (!("style" in a)) throw Error("Expected value to be defined");
  a = a.style;
  if ("string" === typeof c) a.cssText = c;
  else {
    a.cssText = "";
    for (var d in c)
      if (qc.call(c, d)) {
        b = d;
        var e = c[d];
        0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
      }
  }
}
function tc(a, b, c) {
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
function uc() {
  var a = new rc();
  a.__default = tc;
  a.style = sc;
  return a;
}
uc();
var vc = uc();
var wc = function (a) {
  var b = null != a && a.ca === Xb;
  b && D(a.constructor === Yb);
  return b;
};
var xc = function (a) {
    if (null != a)
      switch (a.ba) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  },
  Bc = function (a) {
    return wc(a)
      ? a
      : a instanceof K
      ? yc(Ta(a).toString())
      : a instanceof K
      ? yc(Ta(a).toString())
      : yc(String(String(a)).replace(zc, Ac), xc(a));
  },
  yc = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.ba = d);
      return c;
    };
  })(Yb),
  Cc = {},
  Gc = function (a) {
    if (wc(a)) {
      var b = String;
      a = a.getContent();
      a = String(a).replace(Dc, "").replace(Ec, "&lt;");
      b = b(a).replace(Fc, Ac);
    } else b = String(a).replace(zc, Ac);
    return b;
  },
  Hc = {},
  Ic = {
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
  Ac = function (a) {
    return Ic[a];
  },
  zc = /[\x00\x22\x26\x27\x3c\x3e]/g,
  Fc = /[\x00\x22\x27\x3c\x3e]/g,
  Dc = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
  Ec = /</g;
var Jc = ea(["data-soyloggingfunction-"]);
(function (a) {
  Rb(a);
  var b = a[0].toLowerCase();
  if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
    throw Error(
      "Prefix '" +
        a[0] +
        "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
    );
  Fb.forEach(function (c) {
    if (0 === c.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
          (c + "'. Please use native or safe DOM APIs to set the attribute.")
      );
  });
  return new T(b, Gb);
})(Jc);
L(pb(), "api_idom");
vc.checked = function (a, b, c) {
  null == c
    ? (a.removeAttribute("checked"), (a.checked = !1))
    : (a.setAttribute("checked", String(c)), (a.checked = !(!1 === c || "false" === c)));
};
vc.value = function (a, b, c) {
  null == c ? (a.removeAttribute("value"), (a.value = "")) : (a.setAttribute("value", String(c)), (a.value = String(c)));
};
vc.muted = function (a, b, c) {
  null == c ? (a.removeAttribute("muted"), (a.muted = !1)) : (a.setAttribute("muted", String(c)), (a.muted = !0));
};
var Kc = function (a, b) {
    this.text = a;
    this.type = b;
  },
  Lc = function (a, b) {
    this.spans = a;
    this.type = b;
  },
  Mc =
    "break case catch continue debugger default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with false null undefined true abstract boolean byte char const double final float goto int long native short synchronized throws transient volatile class enum export extends import super implements interface let package private protected public static yield".split(
      " "
    ),
  Nc = function (a, b) {
    try {
      var c = new XMLHttpRequest();
      c.open("GET", a, !0);
      var d = !1;
      c.onreadystatechange = function () {
        d || 4 != c.readyState || 200 != c.status || ((d = !0), b(c));
      };
      c.send();
    } catch (e) {}
  },
  Z = {
    type: "html-tag",
    open: /^<\/?([-_a-zA-Z0-9]+)/,
    close: /^(\/?)>/,
    fa: function (a, b) {
      a.U = b[1].toUpperCase();
      return !0;
    },
    T: function (a, b) {
      "" == b[1] &&
        ("SCRIPT" == a.U
          ? ((a.A = "js-code"), (a.K = null), (a.R = Oc))
          : "STYLE" == a.U && ((a.A = "css-code"), (a.K = null), (a.R = Pc)));
      return !0;
    }
  },
  Qc = [
    { type: "html-comment", open: "\x3c!--", close: "--\x3e" },
    { type: "html-cdata", open: "<![CDATA[", close: "]]\x3e" },
    { type: "html-doctype", open: "<!", close: ">" },
    Z,
    { type: "html-attribute-url", open: /^"(https?|\/\/)/, close: '"', escape: "\\", v: Z },
    { type: "html-attribute-url", open: /^'(https?|\/\/)/, close: "'", escape: "\\", v: Z },
    { type: "html-attribute-value", open: '"', close: '"', escape: "\\", v: Z },
    { type: "html-attribute-value", open: "'", close: "'", escape: "\\", v: Z },
    { type: "html-attribute-name", open: /(^[-_a-zA-Z0-9]+)/, close: "=", v: Z }
  ],
  Oc = [
    { type: "js-comment", open: "//", J: !0 },
    { type: "js-comment", open: "/*", close: "*/" },
    { type: "js-string", open: '"', close: '"', escape: "\\", J: !0 },
    { type: "js-regex", open: "/", close: "/", escape: "\\", J: !0 },
    { open: /^\.[a-zA-Z_][a-zA-Z_0-9]*/, C: !0 },
    {
      type: "js-keyword",
      open: /^[a-zA-Z_][a-zA-Z_0-9]*/,
      fa: function (a, b) {
        return 0 <= Mc.indexOf(b[0]);
      },
      C: !0
    },
    { open: /^[a-zA-Z_][a-zA-Z_0-9.]*/, C: !0 },
    { type: "js-number", open: /^[+-]?[0-9.]+/, C: !0 },
    { type: "js-string", open: "'", close: "'", escape: "\\", J: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/script/,
      close: />/,
      T: function (a) {
        a.A = null;
        a.K = null;
        a.R = Qc;
        return !0;
      }
    }
  ],
  Rc = { open: "{", close: "}" },
  Sc = { open: ":", close: ";", v: Rc },
  Pc = [
    { type: "css-comment", open: "\x3c!--", close: ">" },
    { type: "css-comment", open: "/*", close: "*/" },
    { type: "css-string", open: '"', close: '"', escape: "\\", J: !0 },
    { type: "css-number", open: /^[+-]?[0-9.]+[a-zA-Z]*/, C: !0, v: Sc },
    { type: "css-color", open: /^#[0-9a-zA-Z]{3}[0-9a-zA-Z]{0,3}/, C: !0, v: Sc },
    Rc,
    Sc,
    { type: "css-name", open: /^[-.#_a-zA-Z0-9]+/, C: !0, v: Rc },
    { type: "css-attribute-value", open: /^[-a-zA-Z_0-9]+/, C: !0, v: Sc },
    { type: "css-string", open: "'", close: "'", escape: "\\", J: !0 },
    {
      type: "html-tag",
      open: /^\s*<\/style/,
      close: />/,
      T: function (a) {
        a.R = Qc;
        a.A = null;
        a.K = null;
        return !0;
      }
    }
  ],
  Uc = function (a) {
    var b = { R: Qc, U: null, K: null, A: null },
      c = [],
      d = [null],
      e = [null],
      f = void 0;
    a = cb(a);
    a.split("\n").forEach(function (l) {
      var g = [],
        h = 0;
      b.K = b.A;
      for (var k = 0, m = l.length; k < m; k += p ? 0 : 1) {
        var p = !1;
        if (!f || f.escape != l.charAt(k)) {
          if (f) {
            var B = f.close ? Tc(b, f.close, l, k, f.T) : 0;
            B && ((k += B), g.push(new Kc(l.substring(h, k), f.type || b.A)), (h = k), d.pop(), e.pop(), (f = e[e.length - 1]), (p = !0));
          }
          for (var Lb = 0, z; !p && (z = b.R[Lb]); Lb++)
            z.v == f &&
              (B = Tc(b, z.open, l, k, z.fa)) &&
              (k > h && z.type != d[d.length - 1] && (g.push(new Kc(l.substring(h, k), d[d.length - 1] || b.A)), (h = k)),
              (k += B),
              z.C ? (g.push(new Kc(l.substring(h, k), z.type || b.A)), (h = k)) : (d.push(z.type), e.push(z), (f = z)),
              (p = !0));
        }
      }
      h < m && g.push(new Kc(l.substring(h, m), d[d.length - 1] || b.A));
      c.push(new Lc(g, b.K));
      f && f.J && (d.pop(), e.pop(), (f = e[e.length - 1]));
    });
    return c;
  },
  Tc = function (a, b, c, d, e) {
    var f;
    if (b instanceof RegExp) {
      if ((f = b.exec(c.substring(d))) && (!e || e(a, f))) return f[0].length;
    } else if (c.substring(d, d + b.length) == b) return b.length;
    return 0;
  }; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Vc,
  Wc = document.location.href;
Vc = Wc instanceof M ? Wc.clone() : new M(Wc);
(function (a, b, c) {
  Nc(a, function (d) {
    var e = d.response + "";
    d = document.getElementById("source");
    e = Uc(e);
    var f = c || 1;
    D(Hc === Hc, "found an incorrect call marker, was an internal function called from the top level?");
    if (Cc["tvt.viewsourcetemplates.showSource"])
      e = Cc["tvt.viewsourcetemplates.showSource"]({ code: e, Ka: b, Ia: f, title: a, url: a }, void 0);
    else {
      for (
        var l =
            '<div class="header"><h1 id="title">Source: ' +
            Bc(a) +
            "</h1>" +
            (a ? '<a id="view-source" href="view-source:' + Gc(a) + "\">View Source in Chrome's Source code viewer</a>" : "") +
            '</div><div class="line-gutter-backdrop"></div><table><tbody>',
          g = e.length,
          h = 0;
        h < g;
        h++
      ) {
        var k = e[h];
        l +=
          "<tr" +
          (k.type ? ' class="' + Gc(k.type) + '"' : "") +
          '><td class="line-number' +
          (h + 1 >= b && h + 1 <= b + f ? " highlight" : "") +
          '" data-value="' +
          Gc(h + 1) +
          '"></td><td class="line-content">';
        k = k.spans;
        for (var m = k.length, p = 0; p < m; p++) {
          var B = k[p];
          l += B.type ? '<span class="' + Gc(B.type) + '">' + Bc(B.text) + "</span>" : Bc(B.text);
        }
        l += "</td></tr>";
      }
      e = yc(l + "</tbody></table>");
    }
    if (e && e.ta && d) e.ta(d);
    else {
      a: if (((f = typeof e), ("object" == f && null != e) || "function" == f)) {
        if (e.ka && ((f = e.ka()), f instanceof K)) {
          e = f;
          break a;
        }
        qa("Soy template output is unsafe for use as HTML: " + e);
        e = Va("zSoyz");
      } else e = Va(String(e));
      $a(D(d), e);
    }
    d = b || 0;
    e = 0;
    f = document.querySelectorAll && document.querySelector ? document.querySelectorAll("TR") : document.getElementsByTagName("TR");
    0 <= d && d < f.length && (e = f[d].offsetTop);
    window.scrollTo(0, e);
  });
})(Vc.j.get("url") || "", parseInt(Vc.j.get("line") || -1, 10), parseInt(Vc.j.get("count") || 0, 10));
