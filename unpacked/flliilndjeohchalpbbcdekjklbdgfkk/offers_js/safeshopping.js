/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function t(e, r, n) {
  function i(o, s) {
    if (!r[o]) {
      if (!e[o]) {
        var c = "function" == typeof require && require;
        if (!s && c) return c(o, !0);
        if (a) return a(o, !0);
        var u = new Error("Cannot find module '" + o + "'");
        throw ((u.code = "MODULE_NOT_FOUND"), u);
      }
      var l = (r[o] = { exports: {} });
      e[o][0].call(
        l.exports,
        function (t) {
          return i(e[o][1][t] || t);
        },
        l,
        l.exports,
        t,
        e,
        r,
        n
      );
    }
    return r[o].exports;
  }
  for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
  return i;
})(
  {
    1: [
      function (t, e, r) {
        (function (e) {
          (function () {
            "use strict";
            t("core-js/modules/es6.array.iterator.js"),
              t("core-js/modules/web.dom.iterable.js"),
              t("core-js/modules/es6.array.sort.js"),
              t("core-js/modules/es7.string.trim-left.js"),
              (function () {
                function t(t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                      (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      r.push.apply(r, n);
                  }
                  return r;
                }
                function r(e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {};
                    r % 2
                      ? t(Object(n), !0).forEach(function (t) {
                          s(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : t(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                  }
                  return e;
                }
                function n(t) {
                  return (
                    (n =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t;
                          }
                        : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                          }),
                    n(t)
                  );
                }
                function i(t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                function o(t, e, r) {
                  return e && a(t.prototype, e), r && a(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                }
                function s(t, e, r) {
                  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
                }
                function c(t, e) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                      var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                      if (null == r) return;
                      var n,
                        i,
                        a = [],
                        o = !0,
                        s = !1;
                      try {
                        for (r = r.call(t); !(o = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); o = !0);
                      } catch (t) {
                        (s = !0), (i = t);
                      } finally {
                        try {
                          o || null == r.return || r.return();
                        } finally {
                          if (s) throw i;
                        }
                      }
                      return a;
                    })(t, e) ||
                    (function (t, e) {
                      if (!t) return;
                      if ("string" == typeof t) return u(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      "Object" === r && t.constructor && (r = t.constructor.name);
                      if ("Map" === r || "Set" === r) return Array.from(t);
                      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e);
                    })(t, e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                function u(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                  return n;
                }
                var l = function (t, e) {
                  for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n; ) {
                    var o = t[r];
                    e(o, r, t) && (a[i++] = o);
                  }
                  return a;
                };
                var d = (function (t) {
                  return function (e, r, n) {
                    for (var i = -1, a = Object(e), o = n(e), s = o.length; s--; ) {
                      var c = o[t ? s : ++i];
                      if (!1 === r(a[c], c, a)) break;
                    }
                    return e;
                  };
                })();
                var f = function (t, e) {
                    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                    return n;
                  },
                  h =
                    "undefined" != typeof globalThis
                      ? globalThis
                      : "undefined" != typeof window
                      ? window
                      : void 0 !== e
                      ? e
                      : "undefined" != typeof self
                      ? self
                      : {};
                function p(t, e) {
                  return t((e = { exports: {} }), e.exports), e.exports;
                }
                var v = "object" == n(h) && h && h.Object === Object && h,
                  m = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                  g = v || m || Function("return this")(),
                  b = g.Symbol,
                  _ = Object.prototype,
                  y = _.hasOwnProperty,
                  w = _.toString,
                  k = b ? b.toStringTag : void 0;
                var j = function (t) {
                    var e = y.call(t, k),
                      r = t[k];
                    try {
                      t[k] = void 0;
                      var n = !0;
                    } catch (t) {}
                    var i = w.call(t);
                    return n && (e ? (t[k] = r) : delete t[k]), i;
                  },
                  x = Object.prototype.toString;
                var O = function (t) {
                    return x.call(t);
                  },
                  S = b ? b.toStringTag : void 0;
                var M = function (t) {
                  return null == t ? (void 0 === t ? "[object Undefined]" : "[object Null]") : S && S in Object(t) ? j(t) : O(t);
                };
                var C = function (t) {
                  return null != t && "object" == n(t);
                };
                var F = function (t) {
                    return C(t) && "[object Arguments]" == M(t);
                  },
                  P = Object.prototype,
                  B = P.hasOwnProperty,
                  A = P.propertyIsEnumerable,
                  E = F(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? F
                    : function (t) {
                        return C(t) && B.call(t, "callee") && !A.call(t, "callee");
                      },
                  T = E,
                  N = Array.isArray;
                var D = function () {
                    return !1;
                  },
                  R = p(function (t, e) {
                    var r = e && !e.nodeType && e,
                      n = r && t && !t.nodeType && t,
                      i = n && n.exports === r ? g.Buffer : void 0,
                      a = (i ? i.isBuffer : void 0) || D;
                    t.exports = a;
                  }),
                  L = /^(?:0|[1-9]\d*)$/;
                var z = function (t, e) {
                  var r = n(t);
                  return (
                    !!(e = null == e ? 9007199254740991 : e) &&
                    ("number" == r || ("symbol" != r && L.test(t))) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t < e
                  );
                };
                var I = function (t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
                  },
                  W = {};
                (W["[object Float32Array]"] =
                  W["[object Float64Array]"] =
                  W["[object Int8Array]"] =
                  W["[object Int16Array]"] =
                  W["[object Int32Array]"] =
                  W["[object Uint8Array]"] =
                  W["[object Uint8ClampedArray]"] =
                  W["[object Uint16Array]"] =
                  W["[object Uint32Array]"] =
                    !0),
                  (W["[object Arguments]"] =
                    W["[object Array]"] =
                    W["[object ArrayBuffer]"] =
                    W["[object Boolean]"] =
                    W["[object DataView]"] =
                    W["[object Date]"] =
                    W["[object Error]"] =
                    W["[object Function]"] =
                    W["[object Map]"] =
                    W["[object Number]"] =
                    W["[object Object]"] =
                    W["[object RegExp]"] =
                    W["[object Set]"] =
                    W["[object String]"] =
                    W["[object WeakMap]"] =
                      !1);
                var H = function (t) {
                  return C(t) && I(t.length) && !!W[M(t)];
                };
                var V = function (t) {
                    return function (e) {
                      return t(e);
                    };
                  },
                  q = p(function (t, e) {
                    var r = e && !e.nodeType && e,
                      n = r && t && !t.nodeType && t,
                      i = n && n.exports === r && v.process,
                      a = (function () {
                        try {
                          var t = n && n.require && n.require("util").types;
                          return t || (i && i.binding && i.binding("util"));
                        } catch (t) {}
                      })();
                    t.exports = a;
                  }),
                  U = q && q.isTypedArray,
                  G = U ? V(U) : H,
                  Q = Object.prototype.hasOwnProperty;
                var K = function (t, e) {
                    var r = N(t),
                      n = !r && T(t),
                      i = !r && !n && R(t),
                      a = !r && !n && !i && G(t),
                      o = r || n || i || a,
                      s = o ? f(t.length, String) : [],
                      c = s.length;
                    for (var u in t)
                      (!e && !Q.call(t, u)) ||
                        (o &&
                          ("length" == u ||
                            (i && ("offset" == u || "parent" == u)) ||
                            (a && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                            z(u, c))) ||
                        s.push(u);
                    return s;
                  },
                  Z = Object.prototype;
                var J = function (t) {
                  var e = t && t.constructor;
                  return t === (("function" == typeof e && e.prototype) || Z);
                };
                var Y = (function (t, e) {
                    return function (r) {
                      return t(e(r));
                    };
                  })(Object.keys, Object),
                  X = Object.prototype.hasOwnProperty;
                var tt = function (t) {
                  if (!J(t)) return Y(t);
                  var e = [];
                  for (var r in Object(t)) X.call(t, r) && "constructor" != r && e.push(r);
                  return e;
                };
                var et = function (t) {
                  var e = n(t);
                  return null != t && ("object" == e || "function" == e);
                };
                var rt = function (t) {
                  if (!et(t)) return !1;
                  var e = M(t);
                  return (
                    "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                  );
                };
                var nt = function (t) {
                  return null != t && I(t.length) && !rt(t);
                };
                var it = function (t) {
                  return nt(t) ? K(t) : tt(t);
                };
                var at = (function (t, e) {
                  return function (r, n) {
                    if (null == r) return r;
                    if (!nt(r)) return t(r, n);
                    for (var i = r.length, a = e ? i : -1, o = Object(r); (e ? a-- : ++a < i) && !1 !== n(o[a], a, o); );
                    return r;
                  };
                })(function (t, e) {
                  return t && d(t, e, it);
                });
                var ot = function (t, e) {
                  var r = [];
                  return (
                    at(t, function (t, n, i) {
                      e(t, n, i) && r.push(t);
                    }),
                    r
                  );
                };
                var st = function () {
                  (this.__data__ = []), (this.size = 0);
                };
                var ct = function (t, e) {
                  return t === e || (t != t && e != e);
                };
                var ut = function (t, e) {
                    for (var r = t.length; r--; ) if (ct(t[r][0], e)) return r;
                    return -1;
                  },
                  lt = Array.prototype.splice;
                var dt = function (t) {
                  var e = this.__data__,
                    r = ut(e, t);
                  return !(r < 0) && (r == e.length - 1 ? e.pop() : lt.call(e, r, 1), --this.size, !0);
                };
                var ft = function (t) {
                  var e = this.__data__,
                    r = ut(e, t);
                  return r < 0 ? void 0 : e[r][1];
                };
                var ht = function (t) {
                  return ut(this.__data__, t) > -1;
                };
                var pt = function (t, e) {
                  var r = this.__data__,
                    n = ut(r, t);
                  return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
                };
                function vt(t) {
                  var e = -1,
                    r = null == t ? 0 : t.length;
                  for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                  }
                }
                (vt.prototype.clear = st),
                  (vt.prototype.delete = dt),
                  (vt.prototype.get = ft),
                  (vt.prototype.has = ht),
                  (vt.prototype.set = pt);
                var mt = vt;
                var gt = function () {
                  (this.__data__ = new mt()), (this.size = 0);
                };
                var bt = function (t) {
                  var e = this.__data__,
                    r = e.delete(t);
                  return (this.size = e.size), r;
                };
                var _t = function (t) {
                  return this.__data__.get(t);
                };
                var yt,
                  wt = function (t) {
                    return this.__data__.has(t);
                  },
                  kt = g["__core-js_shared__"],
                  jt = (yt = /[^.]+$/.exec((kt && kt.keys && kt.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + yt : "";
                var xt = function (t) {
                    return !!jt && jt in t;
                  },
                  Ot = Function.prototype.toString;
                var St = function (t) {
                    if (null != t) {
                      try {
                        return Ot.call(t);
                      } catch (t) {}
                      try {
                        return t + "";
                      } catch (t) {}
                    }
                    return "";
                  },
                  Mt = /^\[object .+?Constructor\]$/,
                  Ct = Function.prototype,
                  $t = Object.prototype,
                  Ft = Ct.toString,
                  Pt = $t.hasOwnProperty,
                  Bt = RegExp(
                    "^" +
                      Ft.call(Pt)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                      "$"
                  );
                var At = function (t) {
                  return !(!et(t) || xt(t)) && (rt(t) ? Bt : Mt).test(St(t));
                };
                var Et = function (t, e) {
                  return null == t ? void 0 : t[e];
                };
                var Tt = function (t, e) {
                    var r = Et(t, e);
                    return At(r) ? r : void 0;
                  },
                  Nt = Tt(g, "Map"),
                  Dt = Tt(Object, "create");
                var Rt = function () {
                  (this.__data__ = Dt ? Dt(null) : {}), (this.size = 0);
                };
                var Lt = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return (this.size -= e ? 1 : 0), e;
                  },
                  zt = Object.prototype.hasOwnProperty;
                var It = function (t) {
                    var e = this.__data__;
                    if (Dt) {
                      var r = e[t];
                      return "__lodash_hash_undefined__" === r ? void 0 : r;
                    }
                    return zt.call(e, t) ? e[t] : void 0;
                  },
                  Wt = Object.prototype.hasOwnProperty;
                var Ht = function (t) {
                  var e = this.__data__;
                  return Dt ? void 0 !== e[t] : Wt.call(e, t);
                };
                var Vt = function (t, e) {
                  var r = this.__data__;
                  return (this.size += this.has(t) ? 0 : 1), (r[t] = Dt && void 0 === e ? "__lodash_hash_undefined__" : e), this;
                };
                function qt(t) {
                  var e = -1,
                    r = null == t ? 0 : t.length;
                  for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                  }
                }
                (qt.prototype.clear = Rt),
                  (qt.prototype.delete = Lt),
                  (qt.prototype.get = It),
                  (qt.prototype.has = Ht),
                  (qt.prototype.set = Vt);
                var Ut = qt;
                var Gt = function () {
                  (this.size = 0), (this.__data__ = { hash: new Ut(), map: new (Nt || mt)(), string: new Ut() });
                };
                var Qt = function (t) {
                  var e = n(t);
                  return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
                };
                var Kt = function (t, e) {
                  var r = t.__data__;
                  return Qt(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
                };
                var Zt = function (t) {
                  var e = Kt(this, t).delete(t);
                  return (this.size -= e ? 1 : 0), e;
                };
                var Jt = function (t) {
                  return Kt(this, t).get(t);
                };
                var Yt = function (t) {
                  return Kt(this, t).has(t);
                };
                var Xt = function (t, e) {
                  var r = Kt(this, t),
                    n = r.size;
                  return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
                };
                function te(t) {
                  var e = -1,
                    r = null == t ? 0 : t.length;
                  for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                  }
                }
                (te.prototype.clear = Gt),
                  (te.prototype.delete = Zt),
                  (te.prototype.get = Jt),
                  (te.prototype.has = Yt),
                  (te.prototype.set = Xt);
                var ee = te;
                var re = function (t, e) {
                  var r = this.__data__;
                  if (r instanceof mt) {
                    var n = r.__data__;
                    if (!Nt || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this;
                    r = this.__data__ = new ee(n);
                  }
                  return r.set(t, e), (this.size = r.size), this;
                };
                function ne(t) {
                  var e = (this.__data__ = new mt(t));
                  this.size = e.size;
                }
                (ne.prototype.clear = gt),
                  (ne.prototype.delete = bt),
                  (ne.prototype.get = _t),
                  (ne.prototype.has = wt),
                  (ne.prototype.set = re);
                var ie = ne;
                var ae = function (t) {
                  return this.__data__.set(t, "__lodash_hash_undefined__"), this;
                };
                var oe = function (t) {
                  return this.__data__.has(t);
                };
                function se(t) {
                  var e = -1,
                    r = null == t ? 0 : t.length;
                  for (this.__data__ = new ee(); ++e < r; ) this.add(t[e]);
                }
                (se.prototype.add = se.prototype.push = ae), (se.prototype.has = oe);
                var ce = se;
                var ue = function (t, e) {
                  for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
                  return !1;
                };
                var le = function (t, e) {
                  return t.has(e);
                };
                var de = function (t, e, r, n, i, a) {
                    var o = 1 & r,
                      s = t.length,
                      c = e.length;
                    if (s != c && !(o && c > s)) return !1;
                    var u = a.get(t),
                      l = a.get(e);
                    if (u && l) return u == e && l == t;
                    var d = -1,
                      f = !0,
                      h = 2 & r ? new ce() : void 0;
                    for (a.set(t, e), a.set(e, t); ++d < s; ) {
                      var p = t[d],
                        v = e[d];
                      if (n) var m = o ? n(v, p, d, e, t, a) : n(p, v, d, t, e, a);
                      if (void 0 !== m) {
                        if (m) continue;
                        f = !1;
                        break;
                      }
                      if (h) {
                        if (
                          !ue(e, function (t, e) {
                            if (!le(h, e) && (p === t || i(p, t, r, n, a))) return h.push(e);
                          })
                        ) {
                          f = !1;
                          break;
                        }
                      } else if (p !== v && !i(p, v, r, n, a)) {
                        f = !1;
                        break;
                      }
                    }
                    return a.delete(t), a.delete(e), f;
                  },
                  fe = g.Uint8Array;
                var he = function (t) {
                  var e = -1,
                    r = Array(t.size);
                  return (
                    t.forEach(function (t, n) {
                      r[++e] = [n, t];
                    }),
                    r
                  );
                };
                var pe = function (t) {
                    var e = -1,
                      r = Array(t.size);
                    return (
                      t.forEach(function (t) {
                        r[++e] = t;
                      }),
                      r
                    );
                  },
                  ve = b ? b.prototype : void 0,
                  me = ve ? ve.valueOf : void 0;
                var ge = function (t, e, r, n, i, a, o) {
                  switch (r) {
                    case "[object DataView]":
                      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                      (t = t.buffer), (e = e.buffer);
                    case "[object ArrayBuffer]":
                      return !(t.byteLength != e.byteLength || !a(new fe(t), new fe(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                      return ct(+t, +e);
                    case "[object Error]":
                      return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                      return t == e + "";
                    case "[object Map]":
                      var s = he;
                    case "[object Set]":
                      var c = 1 & n;
                      if ((s || (s = pe), t.size != e.size && !c)) return !1;
                      var u = o.get(t);
                      if (u) return u == e;
                      (n |= 2), o.set(t, e);
                      var l = de(s(t), s(e), n, i, a, o);
                      return o.delete(t), l;
                    case "[object Symbol]":
                      if (me) return me.call(t) == me.call(e);
                  }
                  return !1;
                };
                var be = function (t, e) {
                  for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
                  return t;
                };
                var _e = function (t, e, r) {
                  var n = e(t);
                  return N(t) ? n : be(n, r(t));
                };
                var ye = function () {
                    return [];
                  },
                  we = Object.prototype.propertyIsEnumerable,
                  ke = Object.getOwnPropertySymbols,
                  je = ke
                    ? function (t) {
                        return null == t
                          ? []
                          : ((t = Object(t)),
                            l(ke(t), function (e) {
                              return we.call(t, e);
                            }));
                      }
                    : ye;
                var xe = function (t) {
                    return _e(t, it, je);
                  },
                  Oe = Object.prototype.hasOwnProperty;
                var Se = function (t, e, r, n, i, a) {
                    var o = 1 & r,
                      s = xe(t),
                      c = s.length;
                    if (c != xe(e).length && !o) return !1;
                    for (var u = c; u--; ) {
                      var l = s[u];
                      if (!(o ? l in e : Oe.call(e, l))) return !1;
                    }
                    var d = a.get(t),
                      f = a.get(e);
                    if (d && f) return d == e && f == t;
                    var h = !0;
                    a.set(t, e), a.set(e, t);
                    for (var p = o; ++u < c; ) {
                      var v = t[(l = s[u])],
                        m = e[l];
                      if (n) var g = o ? n(m, v, l, e, t, a) : n(v, m, l, t, e, a);
                      if (!(void 0 === g ? v === m || i(v, m, r, n, a) : g)) {
                        h = !1;
                        break;
                      }
                      p || (p = "constructor" == l);
                    }
                    if (h && !p) {
                      var b = t.constructor,
                        _ = e.constructor;
                      b == _ ||
                        !("constructor" in t) ||
                        !("constructor" in e) ||
                        ("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) ||
                        (h = !1);
                    }
                    return a.delete(t), a.delete(e), h;
                  },
                  Me = Tt(g, "DataView"),
                  Ce = Tt(g, "Promise"),
                  $e = Tt(g, "Set"),
                  Fe = Tt(g, "WeakMap"),
                  Pe = "[object Map]",
                  Be = "[object Promise]",
                  Ae = "[object Set]",
                  Ee = "[object WeakMap]",
                  Te = "[object DataView]",
                  Ne = St(Me),
                  De = St(Nt),
                  Re = St(Ce),
                  Le = St($e),
                  ze = St(Fe),
                  Ie = M;
                ((Me && Ie(new Me(new ArrayBuffer(1))) != Te) ||
                  (Nt && Ie(new Nt()) != Pe) ||
                  (Ce && Ie(Ce.resolve()) != Be) ||
                  ($e && Ie(new $e()) != Ae) ||
                  (Fe && Ie(new Fe()) != Ee)) &&
                  (Ie = function (t) {
                    var e = M(t),
                      r = "[object Object]" == e ? t.constructor : void 0,
                      n = r ? St(r) : "";
                    if (n)
                      switch (n) {
                        case Ne:
                          return Te;
                        case De:
                          return Pe;
                        case Re:
                          return Be;
                        case Le:
                          return Ae;
                        case ze:
                          return Ee;
                      }
                    return e;
                  });
                var We = Ie,
                  He = "[object Arguments]",
                  Ve = "[object Array]",
                  qe = "[object Object]",
                  Ue = Object.prototype.hasOwnProperty;
                var Ge = function (t, e, r, n, i, a) {
                  var o = N(t),
                    s = N(e),
                    c = o ? Ve : We(t),
                    u = s ? Ve : We(e),
                    l = (c = c == He ? qe : c) == qe,
                    d = (u = u == He ? qe : u) == qe,
                    f = c == u;
                  if (f && R(t)) {
                    if (!R(e)) return !1;
                    (o = !0), (l = !1);
                  }
                  if (f && !l) return a || (a = new ie()), o || G(t) ? de(t, e, r, n, i, a) : ge(t, e, c, r, n, i, a);
                  if (!(1 & r)) {
                    var h = l && Ue.call(t, "__wrapped__"),
                      p = d && Ue.call(e, "__wrapped__");
                    if (h || p) {
                      var v = h ? t.value() : t,
                        m = p ? e.value() : e;
                      return a || (a = new ie()), i(v, m, r, n, a);
                    }
                  }
                  return !!f && (a || (a = new ie()), Se(t, e, r, n, i, a));
                };
                var Qe = function t(e, r, n, i, a) {
                  return e === r || (null == e || null == r || (!C(e) && !C(r)) ? e != e && r != r : Ge(e, r, n, i, t, a));
                };
                var Ke = function (t, e, r, n) {
                  var i = r.length,
                    a = i,
                    o = !n;
                  if (null == t) return !a;
                  for (t = Object(t); i--; ) {
                    var s = r[i];
                    if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
                  }
                  for (; ++i < a; ) {
                    var c = (s = r[i])[0],
                      u = t[c],
                      l = s[1];
                    if (o && s[2]) {
                      if (void 0 === u && !(c in t)) return !1;
                    } else {
                      var d = new ie();
                      if (n) var f = n(u, l, c, t, e, d);
                      if (!(void 0 === f ? Qe(l, u, 3, n, d) : f)) return !1;
                    }
                  }
                  return !0;
                };
                var Ze = function (t) {
                  return t == t && !et(t);
                };
                var Je = function (t) {
                  for (var e = it(t), r = e.length; r--; ) {
                    var n = e[r],
                      i = t[n];
                    e[r] = [n, i, Ze(i)];
                  }
                  return e;
                };
                var Ye = function (t, e) {
                  return function (r) {
                    return null != r && r[t] === e && (void 0 !== e || t in Object(r));
                  };
                };
                var Xe = function (t) {
                  var e = Je(t);
                  return 1 == e.length && e[0][2]
                    ? Ye(e[0][0], e[0][1])
                    : function (r) {
                        return r === t || Ke(r, t, e);
                      };
                };
                var tr = function (t) {
                    return "symbol" == n(t) || (C(t) && "[object Symbol]" == M(t));
                  },
                  er = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                  rr = /^\w*$/;
                var nr = function (t, e) {
                  if (N(t)) return !1;
                  var r = n(t);
                  return (
                    !("number" != r && "symbol" != r && "boolean" != r && null != t && !tr(t)) ||
                    rr.test(t) ||
                    !er.test(t) ||
                    (null != e && t in Object(e))
                  );
                };
                function ir(t, e) {
                  if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError("Expected a function");
                  var r = function r() {
                    var n = arguments,
                      i = e ? e.apply(this, n) : n[0],
                      a = r.cache;
                    if (a.has(i)) return a.get(i);
                    var o = t.apply(this, n);
                    return (r.cache = a.set(i, o) || a), o;
                  };
                  return (r.cache = new (ir.Cache || ee)()), r;
                }
                ir.Cache = ee;
                var ar = ir;
                var or = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                  sr = /\\(\\)?/g,
                  cr = (function (t) {
                    var e = ar(t, function (t) {
                        return 500 === r.size && r.clear(), t;
                      }),
                      r = e.cache;
                    return e;
                  })(function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(or, function (t, r, n, i) {
                        e.push(n ? i.replace(sr, "$1") : r || t);
                      }),
                      e
                    );
                  });
                var ur = function (t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t);
                    return i;
                  },
                  lr = b ? b.prototype : void 0,
                  dr = lr ? lr.toString : void 0;
                var fr = function t(e) {
                  if ("string" == typeof e) return e;
                  if (N(e)) return ur(e, t) + "";
                  if (tr(e)) return dr ? dr.call(e) : "";
                  var r = e + "";
                  return "0" == r && 1 / e == -Infinity ? "-0" : r;
                };
                var hr = function (t) {
                  return null == t ? "" : fr(t);
                };
                var pr = function (t, e) {
                  return N(t) ? t : nr(t, e) ? [t] : cr(hr(t));
                };
                var vr = function (t) {
                  if ("string" == typeof t || tr(t)) return t;
                  var e = t + "";
                  return "0" == e && 1 / t == -Infinity ? "-0" : e;
                };
                var mr = function (t, e) {
                  for (var r = 0, n = (e = pr(e, t)).length; null != t && r < n; ) t = t[vr(e[r++])];
                  return r && r == n ? t : void 0;
                };
                var gr = function (t, e, r) {
                  var n = null == t ? void 0 : mr(t, e);
                  return void 0 === n ? r : n;
                };
                var br = function (t, e) {
                  return null != t && e in Object(t);
                };
                var _r = function (t, e, r) {
                  for (var n = -1, i = (e = pr(e, t)).length, a = !1; ++n < i; ) {
                    var o = vr(e[n]);
                    if (!(a = null != t && r(t, o))) break;
                    t = t[o];
                  }
                  return a || ++n != i ? a : !!(i = null == t ? 0 : t.length) && I(i) && z(o, i) && (N(t) || T(t));
                };
                var yr = function (t, e) {
                  return null != t && _r(t, e, br);
                };
                var wr = function (t, e) {
                  return nr(t) && Ze(e)
                    ? Ye(vr(t), e)
                    : function (r) {
                        var n = gr(r, t);
                        return void 0 === n && n === e ? yr(r, t) : Qe(e, n, 3);
                      };
                };
                var kr = function (t) {
                  return t;
                };
                var jr = function (t) {
                  return function (e) {
                    return null == e ? void 0 : e[t];
                  };
                };
                var xr = function (t) {
                  return function (e) {
                    return mr(e, t);
                  };
                };
                var Or = function (t) {
                  return nr(t) ? jr(vr(t)) : xr(t);
                };
                var Sr = function (t) {
                  return "function" == typeof t ? t : null == t ? kr : "object" == n(t) ? (N(t) ? wr(t[0], t[1]) : Xe(t)) : Or(t);
                };
                var Mr = function (t, e) {
                  return (N(t) ? l : ot)(t, Sr(e));
                };
                var Cr = function (t) {
                  return t && t.length ? t[0] : void 0;
                };
                var $r = function (t, e, r, n) {
                  for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (e(t[a], a, t)) return a;
                  return -1;
                };
                var Fr = function (t) {
                  return t != t;
                };
                var Pr = function (t, e, r) {
                  for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
                  return -1;
                };
                var Br = function (t, e, r) {
                  return e == e ? Pr(t, e, r) : $r(t, Fr, r);
                };
                var Ar = function (t) {
                    return "string" == typeof t || (!N(t) && C(t) && "[object String]" == M(t));
                  },
                  Er = /\s/;
                var Tr = function (t) {
                    for (var e = t.length; e-- && Er.test(t.charAt(e)); );
                    return e;
                  },
                  Nr = /^\s+/;
                var Dr = function (t) {
                    return t ? t.slice(0, Tr(t) + 1).replace(Nr, "") : t;
                  },
                  Rr = /^[-+]0x[0-9a-f]+$/i,
                  Lr = /^0b[01]+$/i,
                  zr = /^0o[0-7]+$/i,
                  Ir = parseInt;
                var Wr = function (t) {
                    if ("number" == typeof t) return t;
                    if (tr(t)) return NaN;
                    if (et(t)) {
                      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                      t = et(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = Dr(t);
                    var r = Lr.test(t);
                    return r || zr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : Rr.test(t) ? NaN : +t;
                  },
                  Hr = 1 / 0;
                var Vr = function (t) {
                  return t
                    ? (t = Wr(t)) === Hr || t === -1 / 0
                      ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                      : t == t
                      ? t
                      : 0
                    : 0 === t
                    ? t
                    : 0;
                };
                var qr = function (t) {
                  var e = Vr(t),
                    r = e % 1;
                  return e == e ? (r ? e - r : e) : 0;
                };
                var Ur = function (t, e) {
                  return ur(e, function (e) {
                    return t[e];
                  });
                };
                var Gr = function (t) {
                    return null == t ? [] : Ur(t, it(t));
                  },
                  Qr = Math.max;
                var Kr = function (t, e, r, n) {
                    (t = nt(t) ? t : Gr(t)), (r = r && !n ? qr(r) : 0);
                    var i = t.length;
                    return r < 0 && (r = Qr(i + r, 0)), Ar(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && Br(t, e, r) > -1;
                  },
                  Zr = b ? b.isConcatSpreadable : void 0;
                var Jr = function (t) {
                  return N(t) || T(t) || !!(Zr && t && t[Zr]);
                };
                var Yr = function t(e, r, n, i, a) {
                  var o = -1,
                    s = e.length;
                  for (n || (n = Jr), a || (a = []); ++o < s; ) {
                    var c = e[o];
                    r > 0 && n(c) ? (r > 1 ? t(c, r - 1, n, i, a) : be(a, c)) : i || (a[a.length] = c);
                  }
                  return a;
                };
                var Xr = function (t, e) {
                  var r = -1,
                    n = nt(t) ? Array(t.length) : [];
                  return (
                    at(t, function (t, i, a) {
                      n[++r] = e(t, i, a);
                    }),
                    n
                  );
                };
                var tn = function (t, e) {
                  var r = t.length;
                  for (t.sort(e); r--; ) t[r] = t[r].value;
                  return t;
                };
                var en = function (t, e) {
                  if (t !== e) {
                    var r = void 0 !== t,
                      n = null === t,
                      i = t == t,
                      a = tr(t),
                      o = void 0 !== e,
                      s = null === e,
                      c = e == e,
                      u = tr(e);
                    if ((!s && !u && !a && t > e) || (a && o && c && !s && !u) || (n && o && c) || (!r && c) || !i) return 1;
                    if ((!n && !a && !u && t < e) || (u && r && i && !n && !a) || (s && r && i) || (!o && i) || !c) return -1;
                  }
                  return 0;
                };
                var rn = function (t, e, r) {
                  for (var n = -1, i = t.criteria, a = e.criteria, o = i.length, s = r.length; ++n < o; ) {
                    var c = en(i[n], a[n]);
                    if (c) return n >= s ? c : c * ("desc" == r[n] ? -1 : 1);
                  }
                  return t.index - e.index;
                };
                var nn = function (t, e, r) {
                  e = e.length
                    ? ur(e, function (t) {
                        return N(t)
                          ? function (e) {
                              return mr(e, 1 === t.length ? t[0] : t);
                            }
                          : t;
                      })
                    : [kr];
                  var n = -1;
                  e = ur(e, V(Sr));
                  var i = Xr(t, function (t, r, i) {
                    return {
                      criteria: ur(e, function (e) {
                        return e(t);
                      }),
                      index: ++n,
                      value: t
                    };
                  });
                  return tn(i, function (t, e) {
                    return rn(t, e, r);
                  });
                };
                var an = function (t, e, r) {
                    switch (r.length) {
                      case 0:
                        return t.call(e);
                      case 1:
                        return t.call(e, r[0]);
                      case 2:
                        return t.call(e, r[0], r[1]);
                      case 3:
                        return t.call(e, r[0], r[1], r[2]);
                    }
                    return t.apply(e, r);
                  },
                  on = Math.max;
                var sn = function (t, e, r) {
                  return (
                    (e = on(void 0 === e ? t.length - 1 : e, 0)),
                    function () {
                      for (var n = arguments, i = -1, a = on(n.length - e, 0), o = Array(a); ++i < a; ) o[i] = n[e + i];
                      i = -1;
                      for (var s = Array(e + 1); ++i < e; ) s[i] = n[i];
                      return (s[e] = r(o)), an(t, this, s);
                    }
                  );
                };
                var cn = function (t) {
                    return function () {
                      return t;
                    };
                  },
                  un = (function () {
                    try {
                      var t = Tt(Object, "defineProperty");
                      return t({}, "", {}), t;
                    } catch (t) {}
                  })(),
                  ln = un
                    ? function (t, e) {
                        return un(t, "toString", { configurable: !0, enumerable: !1, value: cn(e), writable: !0 });
                      }
                    : kr,
                  dn = Date.now;
                var fn = function (t) {
                    var e = 0,
                      r = 0;
                    return function () {
                      var n = dn(),
                        i = 16 - (n - r);
                      if (((r = n), i > 0)) {
                        if (++e >= 800) return arguments[0];
                      } else e = 0;
                      return t.apply(void 0, arguments);
                    };
                  },
                  hn = fn(ln);
                var pn = function (t, e, r) {
                    if (!et(r)) return !1;
                    var i = n(e);
                    return !!("number" == i ? nt(r) && z(e, r.length) : "string" == i && e in r) && ct(r[e], t);
                  },
                  vn = (function (t, e) {
                    return hn(sn(t, e, kr), t + "");
                  })(function (t, e) {
                    if (null == t) return [];
                    var r = e.length;
                    return r > 1 && pn(t, e[0], e[1]) ? (e = []) : r > 2 && pn(e[0], e[1], e[2]) && (e = [e[0]]), nn(t, Yr(e, 1), []);
                  }),
                  mn = {
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    Bada: "bada",
                    BlackBerry: "blackberry",
                    Chrome: "chrome",
                    Chromium: "chromium",
                    Electron: "electron",
                    Epiphany: "epiphany",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    "Internet Explorer": "ie",
                    "K-Meleon": "k_meleon",
                    Maxthon: "maxthon",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    PhantomJS: "phantomjs",
                    Puffin: "puffin",
                    QupZilla: "qupzilla",
                    QQ: "qq",
                    QQLite: "qqlite",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    "Yandex Browser": "yandex",
                    Roku: "roku"
                  },
                  gn = {
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    bada: "Bada",
                    blackberry: "BlackBerry",
                    chrome: "Chrome",
                    chromium: "Chromium",
                    electron: "Electron",
                    epiphany: "Epiphany",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    googlebot: "Googlebot",
                    google_search: "Google Search",
                    ie: "Internet Explorer",
                    k_meleon: "K-Meleon",
                    maxthon: "Maxthon",
                    edge: "Microsoft Edge",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    phantomjs: "PhantomJS",
                    puffin: "Puffin",
                    qupzilla: "QupZilla",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    sleipnir: "Sleipnir",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yandex: "Yandex Browser"
                  },
                  bn = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
                  _n = {
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MacOS: "macOS",
                    iOS: "iOS",
                    Android: "Android",
                    WebOS: "WebOS",
                    BlackBerry: "BlackBerry",
                    Bada: "Bada",
                    Tizen: "Tizen",
                    Linux: "Linux",
                    ChromeOS: "Chrome OS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku"
                  },
                  yn = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" },
                  wn = (function () {
                    function t() {
                      i(this, t);
                    }
                    return (
                      o(t, null, [
                        {
                          key: "getFirstMatch",
                          value: function (t, e) {
                            var r = e.match(t);
                            return (r && r.length > 0 && r[1]) || "";
                          }
                        },
                        {
                          key: "getSecondMatch",
                          value: function (t, e) {
                            var r = e.match(t);
                            return (r && r.length > 1 && r[2]) || "";
                          }
                        },
                        {
                          key: "matchAndReturnConst",
                          value: function (t, e, r) {
                            if (t.test(e)) return r;
                          }
                        },
                        {
                          key: "getWindowsVersionName",
                          value: function (t) {
                            switch (t) {
                              case "NT":
                                return "NT";
                              case "XP":
                              case "NT 5.1":
                                return "XP";
                              case "NT 5.0":
                                return "2000";
                              case "NT 5.2":
                                return "2003";
                              case "NT 6.0":
                                return "Vista";
                              case "NT 6.1":
                                return "7";
                              case "NT 6.2":
                                return "8";
                              case "NT 6.3":
                                return "8.1";
                              case "NT 10.0":
                                return "10";
                              default:
                                return;
                            }
                          }
                        },
                        {
                          key: "getMacOSVersionName",
                          value: function (t) {
                            var e = t
                              .split(".")
                              .splice(0, 2)
                              .map(function (t) {
                                return parseInt(t, 10) || 0;
                              });
                            if ((e.push(0), 10 === e[0]))
                              switch (e[1]) {
                                case 5:
                                  return "Leopard";
                                case 6:
                                  return "Snow Leopard";
                                case 7:
                                  return "Lion";
                                case 8:
                                  return "Mountain Lion";
                                case 9:
                                  return "Mavericks";
                                case 10:
                                  return "Yosemite";
                                case 11:
                                  return "El Capitan";
                                case 12:
                                  return "Sierra";
                                case 13:
                                  return "High Sierra";
                                case 14:
                                  return "Mojave";
                                case 15:
                                  return "Catalina";
                                default:
                                  return;
                              }
                          }
                        },
                        {
                          key: "getAndroidVersionName",
                          value: function (t) {
                            var e = t
                              .split(".")
                              .splice(0, 2)
                              .map(function (t) {
                                return parseInt(t, 10) || 0;
                              });
                            if ((e.push(0), !(1 === e[0] && e[1] < 5)))
                              return 1 === e[0] && e[1] < 6
                                ? "Cupcake"
                                : 1 === e[0] && e[1] >= 6
                                ? "Donut"
                                : 2 === e[0] && e[1] < 2
                                ? "Eclair"
                                : 2 === e[0] && 2 === e[1]
                                ? "Froyo"
                                : 2 === e[0] && e[1] > 2
                                ? "Gingerbread"
                                : 3 === e[0]
                                ? "Honeycomb"
                                : 4 === e[0] && e[1] < 1
                                ? "Ice Cream Sandwich"
                                : 4 === e[0] && e[1] < 4
                                ? "Jelly Bean"
                                : 4 === e[0] && e[1] >= 4
                                ? "KitKat"
                                : 5 === e[0]
                                ? "Lollipop"
                                : 6 === e[0]
                                ? "Marshmallow"
                                : 7 === e[0]
                                ? "Nougat"
                                : 8 === e[0]
                                ? "Oreo"
                                : 9 === e[0]
                                ? "Pie"
                                : void 0;
                          }
                        },
                        {
                          key: "getVersionPrecision",
                          value: function (t) {
                            return t.split(".").length;
                          }
                        },
                        {
                          key: "compareVersions",
                          value: function (e, r) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                              i = t.getVersionPrecision(e),
                              a = t.getVersionPrecision(r),
                              o = Math.max(i, a),
                              s = 0,
                              c = t.map([e, r], function (e) {
                                var r = o - t.getVersionPrecision(e),
                                  n = e + new Array(r + 1).join(".0");
                                return t
                                  .map(n.split("."), function (t) {
                                    return new Array(20 - t.length).join("0") + t;
                                  })
                                  .reverse();
                              });
                            for (n && (s = o - Math.min(i, a)), o -= 1; o >= s; ) {
                              if (c[0][o] > c[1][o]) return 1;
                              if (c[0][o] === c[1][o]) {
                                if (o === s) return 0;
                                o -= 1;
                              } else if (c[0][o] < c[1][o]) return -1;
                            }
                          }
                        },
                        {
                          key: "map",
                          value: function (t, e) {
                            var r,
                              n = [];
                            if (Array.prototype.map) return Array.prototype.map.call(t, e);
                            for (r = 0; r < t.length; r += 1) n.push(e(t[r]));
                            return n;
                          }
                        },
                        {
                          key: "find",
                          value: function (t, e) {
                            var r, n;
                            if (Array.prototype.find) return Array.prototype.find.call(t, e);
                            for (r = 0, n = t.length; r < n; r += 1) {
                              var i = t[r];
                              if (e(i, r)) return i;
                            }
                          }
                        },
                        {
                          key: "assign",
                          value: function (t) {
                            for (var e, r, i = t, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                              o[s - 1] = arguments[s];
                            if (Object.assign) return Object.assign.apply(Object, [t].concat(o));
                            var c = function () {
                              var t = o[e];
                              "object" === n(t) &&
                                null !== t &&
                                Object.keys(t).forEach(function (e) {
                                  i[e] = t[e];
                                });
                            };
                            for (e = 0, r = o.length; e < r; e += 1) c();
                            return t;
                          }
                        },
                        {
                          key: "getBrowserAlias",
                          value: function (t) {
                            return mn[t];
                          }
                        },
                        {
                          key: "getBrowserTypeByAlias",
                          value: function (t) {
                            return gn[t] || "";
                          }
                        }
                      ]),
                      t
                    );
                  })(),
                  kn = /version\/(\d+(\.?_?\d+)+)/i,
                  jn = [
                    {
                      test: [/googlebot/i],
                      describe: function (t) {
                        var e = { name: "Googlebot" },
                          r = wn.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/opera/i],
                      describe: function (t) {
                        var e = { name: "Opera" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/opr\/|opios/i],
                      describe: function (t) {
                        var e = { name: "Opera" },
                          r = wn.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/SamsungBrowser/i],
                      describe: function (t) {
                        var e = { name: "Samsung Internet for Android" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/Whale/i],
                      describe: function (t) {
                        var e = { name: "NAVER Whale Browser" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/MZBrowser/i],
                      describe: function (t) {
                        var e = { name: "MZ Browser" },
                          r = wn.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/focus/i],
                      describe: function (t) {
                        var e = { name: "Focus" },
                          r = wn.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/swing/i],
                      describe: function (t) {
                        var e = { name: "Swing" },
                          r = wn.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/coast/i],
                      describe: function (t) {
                        var e = { name: "Opera Coast" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/opt\/\d+(?:.?_?\d+)+/i],
                      describe: function (t) {
                        var e = { name: "Opera Touch" },
                          r = wn.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/yabrowser/i],
                      describe: function (t) {
                        var e = { name: "Yandex Browser" },
                          r = wn.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/ucbrowser/i],
                      describe: function (t) {
                        var e = { name: "UC Browser" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/Maxthon|mxios/i],
                      describe: function (t) {
                        var e = { name: "Maxthon" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/epiphany/i],
                      describe: function (t) {
                        var e = { name: "Epiphany" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/puffin/i],
                      describe: function (t) {
                        var e = { name: "Puffin" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/sleipnir/i],
                      describe: function (t) {
                        var e = { name: "Sleipnir" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/k-meleon/i],
                      describe: function (t) {
                        var e = { name: "K-Meleon" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/micromessenger/i],
                      describe: function (t) {
                        var e = { name: "WeChat" },
                          r = wn.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/qqbrowser/i],
                      describe: function (t) {
                        var e = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" },
                          r = wn.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/msie|trident/i],
                      describe: function (t) {
                        var e = { name: "Internet Explorer" },
                          r = wn.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/\sedg\//i],
                      describe: function (t) {
                        var e = { name: "Microsoft Edge" },
                          r = wn.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/edg([ea]|ios)/i],
                      describe: function (t) {
                        var e = { name: "Microsoft Edge" },
                          r = wn.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/vivaldi/i],
                      describe: function (t) {
                        var e = { name: "Vivaldi" },
                          r = wn.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/seamonkey/i],
                      describe: function (t) {
                        var e = { name: "SeaMonkey" },
                          r = wn.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/sailfish/i],
                      describe: function (t) {
                        var e = { name: "Sailfish" },
                          r = wn.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/silk/i],
                      describe: function (t) {
                        var e = { name: "Amazon Silk" },
                          r = wn.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/phantom/i],
                      describe: function (t) {
                        var e = { name: "PhantomJS" },
                          r = wn.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/slimerjs/i],
                      describe: function (t) {
                        var e = { name: "SlimerJS" },
                          r = wn.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function (t) {
                        var e = { name: "BlackBerry" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function (t) {
                        var e = { name: "WebOS Browser" },
                          r = wn.getFirstMatch(kn, t) || wn.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/bada/i],
                      describe: function (t) {
                        var e = { name: "Bada" },
                          r = wn.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/tizen/i],
                      describe: function (t) {
                        var e = { name: "Tizen" },
                          r = wn.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/qupzilla/i],
                      describe: function (t) {
                        var e = { name: "QupZilla" },
                          r = wn.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/firefox|iceweasel|fxios/i],
                      describe: function (t) {
                        var e = { name: "Firefox" },
                          r = wn.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/electron/i],
                      describe: function (t) {
                        var e = { name: "Electron" },
                          r = wn.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/MiuiBrowser/i],
                      describe: function (t) {
                        var e = { name: "Miui" },
                          r = wn.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/chromium/i],
                      describe: function (t) {
                        var e = { name: "Chromium" },
                          r = wn.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/chrome|crios|crmo/i],
                      describe: function (t) {
                        var e = { name: "Chrome" },
                          r = wn.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/GSA/i],
                      describe: function (t) {
                        var e = { name: "Google Search" },
                          r = wn.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: function (t) {
                        var e = !t.test(/like android/i),
                          r = t.test(/android/i);
                        return e && r;
                      },
                      describe: function (t) {
                        var e = { name: "Android Browser" },
                          r = wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/playstation 4/i],
                      describe: function (t) {
                        var e = { name: "PlayStation 4" },
                          r = wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/safari|applewebkit/i],
                      describe: function (t) {
                        var e = { name: "Safari" },
                          r = wn.getFirstMatch(kn, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/.*/i],
                      describe: function (t) {
                        var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                        return { name: wn.getFirstMatch(e, t), version: wn.getSecondMatch(e, t) };
                      }
                    }
                  ],
                  xn = [
                    {
                      test: [/Roku\/DVP/],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                        return { name: _n.Roku, version: e };
                      }
                    },
                    {
                      test: [/windows phone/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                        return { name: _n.WindowsPhone, version: e };
                      }
                    },
                    {
                      test: [/windows /i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                          r = wn.getWindowsVersionName(e);
                        return { name: _n.Windows, version: e, versionName: r };
                      }
                    },
                    {
                      test: [/Macintosh(.*?) FxiOS(.*?)\//],
                      describe: function (t) {
                        var e = { name: _n.iOS },
                          r = wn.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/macintosh/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                          r = wn.getMacOSVersionName(e),
                          n = { name: _n.MacOS, version: e };
                        return r && (n.versionName = r), n;
                      }
                    },
                    {
                      test: [/(ipod|iphone|ipad)/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                        return { name: _n.iOS, version: e };
                      }
                    },
                    {
                      test: function (t) {
                        var e = !t.test(/like android/i),
                          r = t.test(/android/i);
                        return e && r;
                      },
                      describe: function (t) {
                        var e = wn.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                          r = wn.getAndroidVersionName(e),
                          n = { name: _n.Android, version: e };
                        return r && (n.versionName = r), n;
                      }
                    },
                    {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                          r = { name: _n.WebOS };
                        return e && e.length && (r.version = e), r;
                      }
                    },
                    {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function (t) {
                        var e =
                          wn.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) ||
                          wn.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) ||
                          wn.getFirstMatch(/\bbb(\d+)/i, t);
                        return { name: _n.BlackBerry, version: e };
                      }
                    },
                    {
                      test: [/bada/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                        return { name: _n.Bada, version: e };
                      }
                    },
                    {
                      test: [/tizen/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                        return { name: _n.Tizen, version: e };
                      }
                    },
                    {
                      test: [/linux/i],
                      describe: function () {
                        return { name: _n.Linux };
                      }
                    },
                    {
                      test: [/CrOS/],
                      describe: function () {
                        return { name: _n.ChromeOS };
                      }
                    },
                    {
                      test: [/PlayStation 4/],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                        return { name: _n.PlayStation4, version: e };
                      }
                    }
                  ],
                  On = [
                    {
                      test: [/googlebot/i],
                      describe: function () {
                        return { type: "bot", vendor: "Google" };
                      }
                    },
                    {
                      test: [/huawei/i],
                      describe: function (t) {
                        var e = wn.getFirstMatch(/(can-l01)/i, t) && "Nova",
                          r = { type: bn.mobile, vendor: "Huawei" };
                        return e && (r.model = e), r;
                      }
                    },
                    {
                      test: [/nexus\s*(?:7|8|9|10).*/i],
                      describe: function () {
                        return { type: bn.tablet, vendor: "Nexus" };
                      }
                    },
                    {
                      test: [/ipad/i],
                      describe: function () {
                        return { type: bn.tablet, vendor: "Apple", model: "iPad" };
                      }
                    },
                    {
                      test: [/Macintosh(.*?) FxiOS(.*?)\//],
                      describe: function () {
                        return { type: bn.tablet, vendor: "Apple", model: "iPad" };
                      }
                    },
                    {
                      test: [/kftt build/i],
                      describe: function () {
                        return { type: bn.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
                      }
                    },
                    {
                      test: [/silk/i],
                      describe: function () {
                        return { type: bn.tablet, vendor: "Amazon" };
                      }
                    },
                    {
                      test: [/tablet(?! pc)/i],
                      describe: function () {
                        return { type: bn.tablet };
                      }
                    },
                    {
                      test: function (t) {
                        var e = t.test(/ipod|iphone/i),
                          r = t.test(/like (ipod|iphone)/i);
                        return e && !r;
                      },
                      describe: function (t) {
                        var e = wn.getFirstMatch(/(ipod|iphone)/i, t);
                        return { type: bn.mobile, vendor: "Apple", model: e };
                      }
                    },
                    {
                      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                      describe: function () {
                        return { type: bn.mobile, vendor: "Nexus" };
                      }
                    },
                    {
                      test: [/[^-]mobi/i],
                      describe: function () {
                        return { type: bn.mobile };
                      }
                    },
                    {
                      test: function (t) {
                        return "blackberry" === t.getBrowserName(!0);
                      },
                      describe: function () {
                        return { type: bn.mobile, vendor: "BlackBerry" };
                      }
                    },
                    {
                      test: function (t) {
                        return "bada" === t.getBrowserName(!0);
                      },
                      describe: function () {
                        return { type: bn.mobile };
                      }
                    },
                    {
                      test: function (t) {
                        return "windows phone" === t.getBrowserName();
                      },
                      describe: function () {
                        return { type: bn.mobile, vendor: "Microsoft" };
                      }
                    },
                    {
                      test: function (t) {
                        var e = Number(String(t.getOSVersion()).split(".")[0]);
                        return "android" === t.getOSName(!0) && e >= 3;
                      },
                      describe: function () {
                        return { type: bn.tablet };
                      }
                    },
                    {
                      test: function (t) {
                        return "android" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.mobile };
                      }
                    },
                    {
                      test: function (t) {
                        return "macos" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.desktop, vendor: "Apple" };
                      }
                    },
                    {
                      test: function (t) {
                        return "windows" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.desktop };
                      }
                    },
                    {
                      test: function (t) {
                        return "linux" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.desktop };
                      }
                    },
                    {
                      test: function (t) {
                        return "playstation 4" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.tv };
                      }
                    },
                    {
                      test: function (t) {
                        return "roku" === t.getOSName(!0);
                      },
                      describe: function () {
                        return { type: bn.tv };
                      }
                    }
                  ],
                  Sn = [
                    {
                      test: function (t) {
                        return "microsoft edge" === t.getBrowserName(!0);
                      },
                      describe: function (t) {
                        if (/\sedg\//i.test(t)) return { name: yn.Blink };
                        var e = wn.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                        return { name: yn.EdgeHTML, version: e };
                      }
                    },
                    {
                      test: [/trident/i],
                      describe: function (t) {
                        var e = { name: yn.Trident },
                          r = wn.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: function (t) {
                        return t.test(/presto/i);
                      },
                      describe: function (t) {
                        var e = { name: yn.Presto },
                          r = wn.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: function (t) {
                        var e = t.test(/gecko/i),
                          r = t.test(/like gecko/i);
                        return e && !r;
                      },
                      describe: function (t) {
                        var e = { name: yn.Gecko },
                          r = wn.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    },
                    {
                      test: [/(apple)?webkit\/537\.36/i],
                      describe: function () {
                        return { name: yn.Blink };
                      }
                    },
                    {
                      test: [/(apple)?webkit/i],
                      describe: function (t) {
                        var e = { name: yn.WebKit },
                          r = wn.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e;
                      }
                    }
                  ],
                  Mn = (function () {
                    function t(e) {
                      var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                      if ((i(this, t), null == e || "" === e)) throw new Error("UserAgent parameter can't be empty");
                      (this._ua = e), (this.parsedResult = {}), !0 !== r && this.parse();
                    }
                    return (
                      o(t, [
                        {
                          key: "getUA",
                          value: function () {
                            return this._ua;
                          }
                        },
                        {
                          key: "test",
                          value: function (t) {
                            return t.test(this._ua);
                          }
                        },
                        {
                          key: "parseBrowser",
                          value: function () {
                            var t = this;
                            this.parsedResult.browser = {};
                            var e = wn.find(jn, function (e) {
                              if ("function" == typeof e.test) return e.test(t);
                              if (e.test instanceof Array)
                                return e.test.some(function (e) {
                                  return t.test(e);
                                });
                              throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
                          }
                        },
                        {
                          key: "getBrowser",
                          value: function () {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                          }
                        },
                        {
                          key: "getBrowserName",
                          value: function (t) {
                            return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
                          }
                        },
                        {
                          key: "getBrowserVersion",
                          value: function () {
                            return this.getBrowser().version;
                          }
                        },
                        {
                          key: "getOS",
                          value: function () {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                          }
                        },
                        {
                          key: "parseOS",
                          value: function () {
                            var t = this;
                            this.parsedResult.os = {};
                            var e = wn.find(xn, function (e) {
                              if ("function" == typeof e.test) return e.test(t);
                              if (e.test instanceof Array)
                                return e.test.some(function (e) {
                                  return t.test(e);
                                });
                              throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
                          }
                        },
                        {
                          key: "getOSName",
                          value: function (t) {
                            var e = this.getOS().name;
                            return t ? String(e).toLowerCase() || "" : e || "";
                          }
                        },
                        {
                          key: "getOSVersion",
                          value: function () {
                            return this.getOS().version;
                          }
                        },
                        {
                          key: "getPlatform",
                          value: function () {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                          }
                        },
                        {
                          key: "getPlatformType",
                          value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                              e = this.getPlatform(),
                              r = e.type;
                            return t ? String(r).toLowerCase() || "" : r || "";
                          }
                        },
                        {
                          key: "parsePlatform",
                          value: function () {
                            var t = this;
                            this.parsedResult.platform = {};
                            var e = wn.find(On, function (e) {
                              if ("function" == typeof e.test) return e.test(t);
                              if (e.test instanceof Array)
                                return e.test.some(function (e) {
                                  return t.test(e);
                                });
                              throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
                          }
                        },
                        {
                          key: "getEngine",
                          value: function () {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                          }
                        },
                        {
                          key: "getEngineName",
                          value: function (t) {
                            return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
                          }
                        },
                        {
                          key: "parseEngine",
                          value: function () {
                            var t = this;
                            this.parsedResult.engine = {};
                            var e = wn.find(Sn, function (e) {
                              if ("function" == typeof e.test) return e.test(t);
                              if (e.test instanceof Array)
                                return e.test.some(function (e) {
                                  return t.test(e);
                                });
                              throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
                          }
                        },
                        {
                          key: "parse",
                          value: function () {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
                          }
                        },
                        {
                          key: "getResult",
                          value: function () {
                            return wn.assign({}, this.parsedResult);
                          }
                        },
                        {
                          key: "satisfies",
                          value: function (t) {
                            var e = this,
                              r = {},
                              i = 0,
                              a = {},
                              o = 0;
                            if (
                              (Object.keys(t).forEach(function (e) {
                                var s = t[e];
                                "string" == typeof s ? ((a[e] = s), (o += 1)) : "object" === n(s) && ((r[e] = s), (i += 1));
                              }),
                              i > 0)
                            ) {
                              var s = Object.keys(r),
                                c = wn.find(s, function (t) {
                                  return e.isOS(t);
                                });
                              if (c) {
                                var u = this.satisfies(r[c]);
                                if (void 0 !== u) return u;
                              }
                              var l = wn.find(s, function (t) {
                                return e.isPlatform(t);
                              });
                              if (l) {
                                var d = this.satisfies(r[l]);
                                if (void 0 !== d) return d;
                              }
                            }
                            if (o > 0) {
                              var f = Object.keys(a),
                                h = wn.find(f, function (t) {
                                  return e.isBrowser(t, !0);
                                });
                              if (void 0 !== h) return this.compareVersion(a[h]);
                            }
                          }
                        },
                        {
                          key: "isBrowser",
                          value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              r = this.getBrowserName().toLowerCase(),
                              n = t.toLowerCase(),
                              i = wn.getBrowserTypeByAlias(n);
                            return e && i && (n = i.toLowerCase()), n === r;
                          }
                        },
                        {
                          key: "compareVersion",
                          value: function (t) {
                            var e = [0],
                              r = t,
                              n = !1,
                              i = this.getBrowserVersion();
                            if ("string" == typeof i)
                              return (
                                ">" === t[0] || "<" === t[0]
                                  ? ((r = t.substr(1)),
                                    "=" === t[1] ? ((n = !0), (r = t.substr(2))) : (e = []),
                                    ">" === t[0] ? e.push(1) : e.push(-1))
                                  : "=" === t[0]
                                  ? (r = t.substr(1))
                                  : "~" === t[0] && ((n = !0), (r = t.substr(1))),
                                e.indexOf(wn.compareVersions(i, r, n)) > -1
                              );
                          }
                        },
                        {
                          key: "isOS",
                          value: function (t) {
                            return this.getOSName(!0) === String(t).toLowerCase();
                          }
                        },
                        {
                          key: "isPlatform",
                          value: function (t) {
                            return this.getPlatformType(!0) === String(t).toLowerCase();
                          }
                        },
                        {
                          key: "isEngine",
                          value: function (t) {
                            return this.getEngineName(!0) === String(t).toLowerCase();
                          }
                        },
                        {
                          key: "is",
                          value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t);
                          }
                        },
                        {
                          key: "some",
                          value: function () {
                            var t = this,
                              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return e.some(function (e) {
                              return t.is(e);
                            });
                          }
                        }
                      ]),
                      t
                    );
                  })(),
                  Cn = (function () {
                    function t() {
                      i(this, t);
                    }
                    return (
                      o(t, null, [
                        {
                          key: "getParser",
                          value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if ("string" != typeof t) throw new Error("UserAgent should be a string");
                            return new Mn(t, e);
                          }
                        },
                        {
                          key: "parse",
                          value: function (t) {
                            return new Mn(t).getResult();
                          }
                        },
                        {
                          key: "BROWSER_MAP",
                          get: function () {
                            return gn;
                          }
                        },
                        {
                          key: "ENGINE_MAP",
                          get: function () {
                            return yn;
                          }
                        },
                        {
                          key: "OS_MAP",
                          get: function () {
                            return _n;
                          }
                        },
                        {
                          key: "PLATFORMS_MAP",
                          get: function () {
                            return bn;
                          }
                        }
                      ]),
                      t
                    );
                  })();
                var $n = function (t, e) {
                  var r;
                  return (
                    at(t, function (t, n, i) {
                      return !(r = e(t, n, i));
                    }),
                    !!r
                  );
                };
                var Fn = function (t, e, r) {
                  var n = N(t) ? ue : $n;
                  return r && pn(t, e, r) && (e = void 0), n(t, Sr(e));
                };
                var Pn = function (t, e, r) {
                  var n = -1,
                    i = t.length;
                  e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), (i = e > r ? 0 : (r - e) >>> 0), (e >>>= 0);
                  for (var a = Array(i); ++n < i; ) a[n] = t[n + e];
                  return a;
                };
                var Bn = function (t, e, r) {
                    var n = t.length;
                    return (r = void 0 === r ? n : r), !e && r >= n ? t : Pn(t, e, r);
                  },
                  An = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
                var En = function (t) {
                  return An.test(t);
                };
                var Tn = function (t) {
                    return C(t) && "[object RegExp]" == M(t);
                  },
                  Nn = q && q.isRegExp,
                  Dn = Nn ? V(Nn) : Tn,
                  Rn = jr("length"),
                  Ln = "[\\ud800-\\udfff]",
                  zn = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                  In = "\\ud83c[\\udffb-\\udfff]",
                  Wn = "[^\\ud800-\\udfff]",
                  Hn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                  Vn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                  qn = "(?:" + zn + "|" + In + ")" + "?",
                  Un = "[\\ufe0e\\ufe0f]?",
                  Gn = Un + qn + ("(?:\\u200d(?:" + [Wn, Hn, Vn].join("|") + ")" + Un + qn + ")*"),
                  Qn = "(?:" + [Wn + zn + "?", zn, Hn, Vn, Ln].join("|") + ")",
                  Kn = RegExp(In + "(?=" + In + ")|" + Qn + Gn, "g");
                var Zn = function (t) {
                  for (var e = (Kn.lastIndex = 0); Kn.test(t); ) ++e;
                  return e;
                };
                var Jn = function (t) {
                  return En(t) ? Zn(t) : Rn(t);
                };
                var Yn = function (t) {
                    return t.split("");
                  },
                  Xn = "[\\ud800-\\udfff]",
                  ti = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                  ei = "\\ud83c[\\udffb-\\udfff]",
                  ri = "[^\\ud800-\\udfff]",
                  ni = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                  ii = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                  ai = "(?:" + ti + "|" + ei + ")" + "?",
                  oi = "[\\ufe0e\\ufe0f]?",
                  si = oi + ai + ("(?:\\u200d(?:" + [ri, ni, ii].join("|") + ")" + oi + ai + ")*"),
                  ci = "(?:" + [ri + ti + "?", ti, ni, ii, Xn].join("|") + ")",
                  ui = RegExp(ei + "(?=" + ei + ")|" + ci + si, "g");
                var li = function (t) {
                  return t.match(ui) || [];
                };
                var di = function (t) {
                    return En(t) ? li(t) : Yn(t);
                  },
                  fi = /\w*$/;
                var hi = function (t, e) {
                    var r = 30,
                      n = "...";
                    if (et(e)) {
                      var i = "separator" in e ? e.separator : i;
                      (r = "length" in e ? qr(e.length) : r), (n = "omission" in e ? fr(e.omission) : n);
                    }
                    var a = (t = hr(t)).length;
                    if (En(t)) {
                      var o = di(t);
                      a = o.length;
                    }
                    if (r >= a) return t;
                    var s = r - Jn(n);
                    if (s < 1) return n;
                    var c = o ? Bn(o, 0, s).join("") : t.slice(0, s);
                    if (void 0 === i) return c + n;
                    if ((o && (s += c.length - s), Dn(i))) {
                      if (t.slice(s).search(i)) {
                        var u,
                          l = c;
                        for (i.global || (i = RegExp(i.source, hr(fi.exec(i)) + "g")), i.lastIndex = 0; (u = i.exec(l)); ) var d = u.index;
                        c = c.slice(0, void 0 === d ? s : d);
                      }
                    } else if (t.indexOf(fr(i), s) != s) {
                      var f = c.lastIndexOf(i);
                      f > -1 && (c = c.slice(0, f));
                    }
                    return c + n;
                  },
                  pi = "CityHotel",
                  vi = "Coupon",
                  mi = "Hotel",
                  gi = "Product",
                  bi = "Similarhotel",
                  _i = "Similar",
                  yi = "SpecialCoupon",
                  wi = ["imdb", "hcgame", "youtube", "wiki", "pinterest"];
                function ki(t) {
                  return Fn(t, function (t) {
                    return Kr(wi, t.catalog);
                  });
                }
                function ji(t) {
                  return Math.round((parseFloat(t) / 5) * 100);
                }
                function xi(t, e) {
                  return Mr(t, function (t) {
                    return t.category === e;
                  });
                }
                var Oi = [gi, _i, vi, yi, mi, bi, pi];
                function Si(t) {
                  return Oi.filter(function (e) {
                    return (function (t, e) {
                      return Fn(t, function (t) {
                        return t.category === e;
                      });
                    })(t, e);
                  });
                }
                function Mi(t, e, r, n, i) {
                  var a = Si(t),
                    o = ki(t);
                  if (Kr(a, vi)) {
                    if (e) return [vi];
                    if (Kr(a, gi)) return [gi];
                    if (Kr(a, _i)) return [_i];
                  }
                  if (a[0] === gi && a[1] === _i) a = r ? [_i] : [gi, _i];
                  else if (Kr(a, mi)) {
                    if (i) return [bi];
                    if (n) return [mi];
                  }
                  return o && !Kr(a, _i) && a.push(_i), a;
                }
                function Ci(t) {
                  var e = t.av_fav_shop;
                  return !!(void 0 === e ? null : e);
                }
                function $i(t) {
                  return !!t.searchTerm;
                }
                function Fi(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === bi;
                }
                function Pi(t) {
                  return t.some(Fi);
                }
                function Bi(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === mi;
                }
                function Ai(t) {
                  return t.some(Bi);
                }
                function Ei(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === pi;
                }
                function Ti(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === vi;
                }
                function Ni(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === gi;
                }
                function Di(t) {
                  return t.some(Ti);
                }
                function Ri(t) {
                  return t.some(Ni);
                }
                function Li(t) {
                  var e = t.code,
                    r = t.couponCode;
                  return !(!e || "" === e) || (r && "" !== r);
                }
                function zi(t, e) {
                  return t.length > e ? "".concat(t.substring(0, e), "...") : t;
                }
                function Ii(t) {
                  var e = t.category;
                  return (void 0 === e ? "" : e) === _i;
                }
                function Wi(t) {
                  return t.some(Ii);
                }
                function Hi(t) {
                  var e = t.meta;
                  return "theme_dark" === (void 0 === e ? {} : e).theme;
                }
                var Vi = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName();
                function qi() {
                  return Vi ? browser : chrome;
                }
                function Ui() {
                  return new Promise(function (t, e) {
                    try {
                      ((r = "wishlist"),
                      new Promise(function (t, e) {
                        try {
                          var n = qi();
                          n.storage.local.get(r, function (r) {
                            n.runtime.error ? e(n.runtime.error) : t(r);
                          });
                        } catch (t) {
                          e(t);
                        }
                      })).then(function (e) {
                        t(e.wishlist);
                      });
                    } catch (t) {
                      e(t);
                    }
                    var r;
                  });
                }
                function Gi(t) {
                  !(function (t) {
                    new Promise(function (e, r) {
                      try {
                        var n = qi();
                        n.storage.local.set(t, function () {
                          n.runtime.error ? r(n.runtime.error) : e("Data saved");
                        });
                      } catch (t) {
                        r(t);
                      }
                    });
                  })({ wishlist: t });
                }
                var Qi = [gi, mi, pi, "products"],
                  Ki = [_i, bi],
                  Zi = [vi, yi, "coupons"];
                function Ji(t) {
                  (Qi = Qi.map(function (t) {
                    return t.toLowerCase();
                  })),
                    (Ki = Ki.map(function (t) {
                      return t.toLowerCase();
                    })),
                    (Zi = Zi.map(function (t) {
                      return t.toLowerCase();
                    }));
                  var e = t.toLowerCase();
                  return Kr(Qi, e) ? "products" : Kr(Ki, e) ? "similar" : Kr(Zi, e) ? "coupons" : "wishlist" === e ? "wishlist" : "";
                }
                function Yi(t) {
                  return t.substring(t.indexOf("/") + 1);
                }
                function Xi() {
                  return "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName() ? browser : chrome;
                }
                function ta() {
                  return Xi().runtime.getManifest().name;
                }
                function ea(t) {
                  return t.availability_code;
                }
                var ra = {
                  notification: {},
                  listing: {},
                  ftu: {},
                  view: {},
                  wishlist: {},
                  wishlistmodal: {},
                  external: {},
                  product: {},
                  wishlistVertical: {}
                };
                var na = !1,
                  ia = 0;
                function aa(t) {
                  var e,
                    n,
                    i,
                    a = r(
                      r({}, t),
                      {},
                      {
                        stockCheck: ea(t),
                        hasCouponsCode: Li(t),
                        isCoupon: Ti(t),
                        isProduct: Ni(t),
                        isSpecialCoupon: ((n = t), (i = n.category), (void 0 === i ? "" : i) === yi),
                        isSimilar: Ii(t),
                        isHotelItem: ((e = t), Bi(e) || Fi(e) || Ei(e)),
                        isFavoriteShop: Ci(t)
                      }
                    );
                  if (a.shipping) {
                    var o = a.shipping.split(" ")[0];
                    (o = parseFloat(o.replace(",", "."))), (a.isFreeShipping = 0 === o);
                  }
                  var s = a.isHotelItem ? a.stars : a.rating;
                  if (
                    (s && (a.ratingPercent = ji(s)),
                    a.isCoupon &&
                      ((a.saving = a.value),
                      (a.couponSpecialValue = (function (t) {
                        return "special" === t.value.toLowerCase();
                      })(a))),
                    a.label)
                  ) {
                    var u = c(a.label.split(":"), 2),
                      l = u[0],
                      d = u[1];
                    (a.label_name = l || a.label), (a.room_type = d ? d.toLowerCase().trimStart() : "");
                  }
                  if (t.facilities)
                    if (void 0 !== t.free_cancellation && t.free_cancellation) a.otherFacilities = t.facilities;
                    else {
                      var f = c(t.facilities, 1);
                      (a.firstFacility = f[0]), (a.otherFacilities = t.facilities.slice(1));
                    }
                  return t.coupon_text && (a.shortContent = zi(t.coupon_text, 50)), a;
                }
                (ra.notification.afterRender = function () {
                  var t = this;
                  Xi().runtime.getManifest().version < "3.1.0"
                    ? $(".ftu-wishlist-trigger").addClass("hidden")
                    : $(".ftu-wishlist-trigger").removeClass("hidden"),
                    setTimeout(function () {
                      Ui()
                        .then(function (t) {
                          return void 0 === t ? [] : t;
                        })
                        .then(function (t) {
                          if (t.length > 0) {
                            ia = t.length;
                            var e = document.getElementById("wishlist-counter-p");
                            e && (e.innerHTML = ia), $(".wishlist-added-bubble").removeClass("hidden");
                          } else $(".wishlist-added-bubble").addClass("hidden");
                        });
                    }, 80),
                    na &&
                      ($(".wishlist-added-bubble").removeClass("hidden"),
                      $(".wishlist-added-tooltip").removeClass("hidden"),
                      setTimeout(function () {
                        (na = !1), $(".wishlist-added-tooltip").addClass("hidden");
                      }, 2e3));
                  var e = $(".ftu-video-trigger"),
                    r = $("#tourArea"),
                    n = $(".dash-background");
                  e.hover(function () {
                    $(t).toggleClass("active-tooltip"), r.addClass("no-activated"), n.addClass("not-active");
                  }),
                    e.click(function () {
                      r.removeClass("no-activated"), n.removeClass("not-active");
                    });
                  var i = $("#similar-nav"),
                    a = $("#products-nav"),
                    o = $("#coupons-nav"),
                    s = $("#wishlist-nav");
                  i.click(function () {
                    $(".nav-holder>div").removeClass(), $("#similar-nav>div").addClass("similar");
                  }),
                    a.click(function () {
                      $(".nav-holder>div").removeClass(), $("#products-nav>div").addClass("products");
                    }),
                    o.click(function () {
                      $(".nav-holder>div").removeClass(), $("#coupons-nav>div").addClass("coupons");
                    }),
                    s.click(function () {
                      $(".nav-holder>div").removeClass(), $("#wishlist-nav>div").addClass("wishlist");
                    });
                }),
                  (ra.notification.beforeRender = function (t) {
                    var e,
                      r,
                      n,
                      i = ta(),
                      a = t.products,
                      o = t.notification,
                      s = t.meta,
                      c = "#offers/minimized" === location.hash,
                      u = s.icon_animation,
                      l = Ai(a),
                      d = xi(a, mi).length,
                      f = Pi(a),
                      h = xi(a, bi).length,
                      p = a.some(Ei),
                      v = f && l,
                      m = Mi(a),
                      g = Cr(m),
                      b = Cr(
                        Mr(a, function (t) {
                          return t.category === g;
                        })
                      ),
                      _ = t.meta.ab_bucket && "absPromoTest" === t.meta.ab_bucket && "test" === t.meta.ab_group,
                      y = l && b.query_fprice > b.fprice,
                      w = l && b.query_price > b.price / 100,
                      k = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName();
                    c ? (e = Ji(g)) : (e = Ji(Yi(location.hash)));
                    return {
                      productName: i,
                      firstProduct: b,
                      hasCityHotel: p,
                      hasHotel: l,
                      hasSearchTerm: $i(t),
                      hasSimilarHotel: f,
                      hideElements: y,
                      logoAnimation: u,
                      hideElementsNumeric: w,
                      isCatalog: ki(a),
                      isCombinedHotels: v,
                      isDarkTheme: Hi(t),
                      meta: s,
                      notification: o,
                      offersNo: a.length,
                      offersNoHotels: d,
                      offersNoSimilarHotels: h,
                      product: a,
                      ratingPercent: b && b.stars ? ji(b.stars) : 0,
                      searchTerm: ((r = t), (n = r.searchTerm), Ar(n) ? hi(n, { length: 16, separator: " " }) : ""),
                      stockCheck: ea(a),
                      isFirefox: k,
                      showMinimizedView: c,
                      currentNavTab: e,
                      viewTypeClassName: c ? "minimized-view" : "full-view",
                      oneHotelOffer: 1 === d,
                      oneSimilarHotel: 1 === h,
                      oneOffer: 1 === a.length,
                      isPromoABTest: _
                    };
                  });
                var oa = !1;
                (ra.listing.beforeRender = function (t) {
                  t.scrapedData.data && "bulk" === t.scrapedData.data.search_type && (oa = !0);
                  var e,
                    n = "#offers/products" === location.hash,
                    i = "#offers/coupons" === location.hash,
                    a = "#offers/similar" === location.hash,
                    o = "#offers/hotel" === location.hash,
                    s = "#offers/similarhotel" === location.hash,
                    c = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName(),
                    u = t.products.map(aa),
                    l = Di(u),
                    d = Wi(u),
                    f = Pi(u),
                    h = Ai(u),
                    p = Ri(u),
                    v = Mi(u, i, a, o, s),
                    m = Cr(v),
                    g = Cr(
                      Mr(u, function (t) {
                        return t.category === m;
                      })
                    );
                  g && g.query_price && (e = h && g.query_price > g.price / 100);
                  var b,
                    _ = xi(u, _i).length,
                    y = xi(u, vi).length,
                    w = xi(u, gi).length,
                    k = xi(u, m).length,
                    j = xi(u, bi).length,
                    x = xi(u, mi).length;
                  (b =
                    3 === _ || 6 === _ || 5 === _ || 9 === _
                      ? "three-col"
                      : 4 === _ || 8 === _ || 7 === _ || 12 === _
                      ? "four-col"
                      : "normal-col"),
                    _ > 1 && (b += " onscroll");
                  var O = ki(u);
                  u = vn(u, "sortorder");
                  var S = "ciuvo_search_v4" === t.meta.renderer;
                  return r(
                    r({}, t),
                    {},
                    {
                      affiliateName: g && g.affiliate ? g.affiliate : t.meta.domain,
                      hasCoupons: l,
                      hasSimilar: d,
                      similarNo: _,
                      similarStyle: b,
                      initialCategory: Cr(v) + (O ? " isCatalog" : ""),
                      isCatalog: O,
                      hideElementsNumeric: e,
                      isCombinedHotels: h && f,
                      isDarkTheme: Hi(t),
                      onlySimilar: !a,
                      products: u,
                      showCityHotel: Kr(v, pi),
                      showCoupons: i,
                      showHotel: Kr(v, mi),
                      showSimilarHotel: Kr(v, bi),
                      searchTypeAmazon: oa,
                      couponsNo: y,
                      showProducts: n,
                      showSimilar: a,
                      offersNo: w,
                      initialCategoryNo: k,
                      similarHotelNo: j,
                      showHotelNav: o,
                      showSimilarHotelNav: s,
                      hasSimilarHotel: f,
                      hasProducts: p,
                      city: g && g.city,
                      isFirefox: c,
                      oneInitialCategoryOffer: 1 === k,
                      oneSimilarHotel: 1 === j,
                      oneSimilar: 1 === _,
                      oneOffer: 1 === w,
                      offersNoHotels: x,
                      offersNoProducts: u.length,
                      isSearch: S
                    }
                  );
                }),
                  (ra.listing.afterRender = function () {
                    var t = $("a.triggers.active");
                    if (t.length) {
                      var e = t.position().left + t.outerWidth();
                      $(".icon-info-icon").each(function () {
                        $(this).hover(function () {
                          var t = $(this).offset().top,
                            e = $(this).offset().left,
                            r = $(this).find("p"),
                            n = "top:calc(40px + ".concat(t.toFixed(0), "px)!important;") + "left: ".concat(e.toFixed(0), "px;");
                          r.attr("style", n);
                        });
                      });
                      var r =
                        "left:calc(0% + ".concat((e - 720).toFixed(0), "px)!important;") +
                        "right:calc(100% - ".concat((e + 20).toFixed(0), "px)!important;");
                      $("div.new-ui.dash-offers").attr("style", r);
                    }
                  }),
                  (ra.ftu.beforeRender = function (t) {
                    return r(r({}, t), {}, { isDarkTheme: Hi(t) });
                  }),
                  (ra.ftu.afterRender = function () {
                    var t = $(".dash-background"),
                      e = $(".ftu-video-close"),
                      r = $(".playpause"),
                      n = $(".ftu-video"),
                      i = $(".video-container"),
                      a = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName(),
                      o = $(".video-ftu-container");
                    t.addClass("active"),
                      a && t.addClass("activeff"),
                      e.click(function () {
                        t.removeClass("active"), a && t.removeClass("activeff"), i.hide(), n.get(0).pause(), (n.get(0).currentTime = 0);
                      }),
                      r.click(function () {
                        $(this).addClass("playing"),
                          $(this).parent().children("video").get(0).paused
                            ? $(this).parent().children("video").get(0).play()
                            : $(this).parent().children("video").get(0).pause();
                      }),
                      o.click(function (e) {
                        e.target === this &&
                          ((location.hash = "#offers/minimized"),
                          t.removeClass("active"),
                          a && t.removeClass("activeff"),
                          i.hide(),
                          n.get(0).pause(),
                          (n.get(0).currentTime = 0));
                      });
                  });
                var sa = !1,
                  ca = !1,
                  ua = !1;
                function la(t, e) {
                  t.parent()
                    .parent()
                    .find(".undo-label")
                    .click(function () {
                      clearInterval(e),
                        $(this).parent().parent().find(".count-undo").html("3"),
                        $(this).parent().parent().addClass("hidden"),
                        $(this).parent().parent().parent().find("a").removeClass("hidden"),
                        $(this).parent().parent().parent().find(".item-wishlist-header").removeClass("hidden");
                    });
                }
                function da() {
                  $(".item-wishlist--remove").each(function () {
                    $(this).click(function () {
                      var t, e, r, n, i;
                      $(this).parent().addClass("removing").find(".item-wishlist--remove-cover").removeClass("hidden"),
                        (t = $(this)),
                        (e = !1),
                        (r = 2),
                        (n = t.parent().find("a").attr("href")),
                        (i = setInterval(function () {
                          la(t, i),
                            !0 === e && clearInterval(i),
                            "" !== t &&
                              (t.parent().find(".count-undo").html(r),
                              0 === r &&
                                (clearInterval(i),
                                t.parent().remove(),
                                Ui()
                                  .then(function (t) {
                                    return void 0 === t ? [] : t;
                                  })
                                  .then(function (t) {
                                    var e = t.filter(function (t) {
                                      return t.scrapedData.data.canonical_url !== n;
                                    });
                                    return (
                                      0 === e.length &&
                                        ($(".wishlist-empty").removeClass("hidden"),
                                        $(".wishlist-not-empty").addClass("hidden"),
                                        $(".wishlist-modal--mainboard").addClass("no-products")),
                                      document.getElementById("total-wishlist--items") &&
                                        (document.getElementById("total-wishlist--items").innerHTML = e.length),
                                      e
                                    );
                                  })
                                  .then(function (t) {
                                    Gi(t);
                                  }))),
                            (r -= 1);
                        }, 1e3)),
                        !0 === e && clearInterval(i),
                        t.parent().find(".count-undo").html(3);
                    });
                  });
                }
                function fa() {
                  $(".item-wishlist-remove").each(function () {
                    var t = $(this),
                      e = sa.products.map(aa),
                      r = Ri(e),
                      n = Wi(e),
                      i = $(".goshop-string").text(),
                      a = $(".undo-string").text(),
                      o = $(".undo-count-string").html();
                    t.click(function () {
                      $(this).parent().addClass("hidden"),
                        $(this).parent().parent().find("a").addClass("hidden"),
                        $(this).parent().parent().find(".undo-remove-wishlist").removeClass("hidden");
                      var e = 2,
                        s = t.parent().parent().find("a").attr("href"),
                        c = setInterval(function () {
                          la(t, c),
                            "" !== t &&
                              (t.parent().parent().find(".count-undo").html(e),
                              0 === e &&
                                (clearInterval(c),
                                t.parent().parent().addClass("hidden"),
                                Ui()
                                  .then(function (t) {
                                    return t.filter(function (t) {
                                      return t.scrapedData.data.canonical_url !== s;
                                    });
                                  })
                                  .then(function (t) {
                                    if ((Gi(t), 0 !== Object.keys(t).length)) {
                                      s === sa.scrapedData.data.canonical_url && $(".add-wishlist-product").removeClass("hidden"),
                                        (document.getElementById("wishlist-counter-p").innerHTML = t.length),
                                        $(".wishlist-added-bubble").removeClass("hidden");
                                      var e = "";
                                      Object.keys(t).forEach(function (r) {
                                        (e += '<div class="item-wishlist">'),
                                          (e += '<div class="undo-remove-wishlist hidden">'),
                                          (e +=
                                            '<div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                              .concat(a, '</span></div><div class="undo-countdown">')
                                              .concat(o, "</div>")),
                                          (e += "</div>"),
                                          (e += '<div class="item-wishlist-header">'),
                                          (e +=
                                            '<div class="item-wishlist-affiliate-image"><img class="img-responsive item-wishlist-affiliate-image-vertical" alt="" src="'.concat(
                                              t[r].notification.affiliate_image,
                                              '"/></div>'
                                            )),
                                          (e += '<span class="item-wishlist-remove"><i class="icon-trash"></i></span>'),
                                          (e += "</div>"),
                                          (e += '<a href="'.concat(
                                            t[r].scrapedData.data.canonical_url,
                                            '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                                          )),
                                          (e += '<div class="item-wishlist--inner">'),
                                          (e +=
                                            '<div class="img-responsive-vertical"><img class="image-product-vertical" alt="" src="'.concat(
                                              t[r].scrapedData.data.image
                                                ? t[r].scrapedData.data.image.indexOf("https:") < 0
                                                  ? "https:" + t[r].scrapedData.data.image
                                                  : t[r].scrapedData.data.image
                                                : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                              '"></div>'
                                            )),
                                          (e += '<div class="item-wishlist-title-vertical text-l text-grey-3">'.concat(
                                            t[r].scrapedData.data.title,
                                            "</div>"
                                          )),
                                          (e += '<div class="item-wishlist--price"><span class="price text-m text-green font-bold">'.concat(
                                            t[r].notification.query_fprice,
                                            "</span></div>"
                                          )),
                                          (e += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(
                                            i,
                                            "</span></div>"
                                          )),
                                          (e += "</div>"),
                                          (e += "</a>"),
                                          (e += "</div>");
                                      }),
                                        (document.getElementById("productResult").innerHTML = e),
                                        fa(),
                                        Object.keys(t).forEach(function (e) {
                                          var r = t[e];
                                          s === r.scrapedData.data.canonical_url && $(".add-wishlist-product").addClass("hidden");
                                        });
                                    } else
                                      $(".wishlist-added-bubble").addClass("hidden"),
                                        (void 0 !== t && 0 !== t.length) || !ua
                                          ? (void 0 !== t && 0 !== t.length) ||
                                            ua ||
                                            ($(".wishlist-empty-no-button-vertical").addClass("hidden"),
                                            $(".wishlist-not-empty-vertical").addClass("hidden"),
                                            $(".wishlist-empty-vertical").removeClass("hidden"),
                                            r ||
                                              n ||
                                              ($("#addProductWishlist").hide(),
                                              $("#addProductWishlistEmpty").hide(),
                                              $(".wishlist-empty-no-button-vertical").removeClass("hidden"),
                                              $(".wishlist-empty-vertical").addClass("hidden")))
                                          : ($(".wishlist-empty-vertical").addClass("hidden"),
                                            $(".wishlist-not-empty-vertical").addClass("hidden"),
                                            $(".wishlist-empty-no-button-vertical").removeClass("hidden"));
                                  }))),
                            (e -= 1);
                        }, 1e3);
                    });
                  });
                }
                (ra.wishlist.beforeRender = function (t) {
                  var e = (sa = t).products.map(aa),
                    n = Ri(e),
                    i = Di(e),
                    a = Wi(e),
                    o = Pi(e),
                    s = Ai(e),
                    c = Mi(e),
                    u = Cr(c),
                    l = Cr(
                      Mr(e, function (t) {
                        return t.category === u;
                      })
                    );
                  (ca = "Product" !== sa.notification.category && "Similar" !== sa.notification.category),
                    n && ((void 0 !== sa.scrapedData.data.canonical_url && "" !== sa.scrapedData.data.canonical_url) || (ua = !0));
                  var d = { query_fprice: l.query_fprice };
                  return (
                    ca && Object.assign(sa.notification, d),
                    r(
                      r({}, t),
                      {},
                      {
                        firstProduct: l,
                        hasCoupons: i,
                        hasSimilar: a,
                        initialCategory: Cr(c),
                        isCombinedHotels: s && o,
                        isDarkTheme: Hi(t),
                        products: e
                      }
                    )
                  );
                }),
                  (ra.wishlist.afterRender = function () {
                    var t = sa,
                      e = $(".tourtip-container"),
                      r = sa.products.map(aa),
                      n = Ri(r),
                      i = Wi(r);
                    n || i || ($("#addProductWishlist").hide(), $("#removeProductWishlist").hide()),
                      e.click(function (t) {
                        t.target === this && (location.hash = "#offers/minimized");
                      }),
                      ua && ($("#addProductWishlist").hide(), $("#removeProductWishlist").hide()),
                      Ui()
                        .then(function (t) {
                          return void 0 === t ? [] : t;
                        })
                        .then(function (e) {
                          var r = e;
                          return (
                            0 === Object.keys(e).length
                              ? (r = [])
                              : Object.keys(e).forEach(function (r) {
                                  var n = e[r];
                                  t.scrapedData.data.canonical_url === n.scrapedData.data.canonical_url &&
                                    ($(".remove-wishlist-product").removeClass("hidden"), $(".add-wishlist-product").addClass("hidden"));
                                }),
                            r
                          );
                        })
                        .then(function (t) {
                          Gi(t);
                        }),
                      (document.getElementById("addProductWishlist").onclick = function () {
                        (na = !0),
                          Ui()
                            .then(function (t) {
                              return (
                                t.length > 0
                                  ? ((document.getElementById("wishlist-counter-p").innerHTML = t.length),
                                    $(".wishlist-added-bubble").removeClass("hidden"))
                                  : $(".wishlist-added-bubble").addClass("hidden"),
                                t || []
                              );
                            })
                            .then(function (e) {
                              var r = e;
                              if (0 === Object.keys(e).length) (r = []), !1 === ua && r.push(t);
                              else {
                                var n = !1;
                                Object.keys(e).forEach(function (i) {
                                  var a = e[i];
                                  t.scrapedData.data.canonical_url === a.scrapedData.data.canonical_url && ((r[i] = t), (n = !0));
                                }),
                                  n || r.push(t);
                              }
                              return (
                                r.length > 0
                                  ? ((ia = r.length),
                                    (document.getElementById("wishlist-counter-p").innerHTML = ia),
                                    $(".wishlist-added-bubble").removeClass("hidden"))
                                  : $(".wishlist-added-bubble").addClass("hidden"),
                                r
                              );
                            })
                            .then(function (t) {
                              Gi(t);
                            });
                      }),
                      (document.getElementById("removeProductWishlist").onclick = function () {
                        (na = !1),
                          Ui()
                            .then(function (t) {
                              return void 0 === t ? [] : t;
                            })
                            .then(function (e) {
                              var r = e.filter(function (e) {
                                return e.scrapedData.data.canonical_url !== t.scrapedData.data.canonical_url;
                              });
                              return (
                                r.length > 0
                                  ? ((ia = r.length),
                                    (document.getElementById("wishlist-counter-p").innerHTML = ia),
                                    $(".wishlist-added-bubble").removeClass("hidden"))
                                  : $(".wishlist-added-bubble").addClass("hidden"),
                                r
                              );
                            })
                            .then(function (t) {
                              Gi(t);
                            });
                      });
                  }),
                  (ra.wishlistmodal.beforeRender = function (t) {
                    return r(r({}, t), {}, { isDarkTheme: Hi(t) });
                  }),
                  (ra.wishlistmodal.afterRender = function () {
                    var t = $(".undo-string").text(),
                      e = $(".undo-count-string").html(),
                      r = $(".goshop-string").text(),
                      n = $(".wishlist-modal"),
                      i = $(".wishlist-video-close");
                    n.click(function (t) {
                      t.target === this && ((location.hash = "#offers/minimized"), n.hide());
                    }),
                      i.click(function (t) {
                        t.target === this && ((location.hash = "#offers/minimized"), n.hide());
                      }),
                      Ui().then(function (n) {
                        if ((n.reverse(), n.length > 0)) {
                          $(".wishlist-modal--mainboard").removeClass("no-products"),
                            (document.getElementById("total-wishlist--items").innerHTML = n.length);
                          var i = "";
                          Object.keys(n).forEach(function (a) {
                            (i += '<div class="item-wishlist">'),
                              (i +=
                                '<div class="item-wishlist--remove-cover hidden"><div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                  .concat(t, '</span></div><div class="undo-countdown">')
                                  .concat(e, "</div></div>")),
                              (i += '<span class="item-wishlist--remove"><i class="icon-trash"></i></span>'),
                              (i += '<a href="'.concat(
                                n[a].scrapedData.data.canonical_url,
                                '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                              )),
                              (i += '<div class="item-wishlist--inner">'),
                              (i += '<div class="item-wishlist--domain">'.concat(n[a].meta.domain, "</div>")),
                              (i += '<div class="item-wishlist--thumb"><img class="img-responsive" alt="" src="'.concat(
                                n[a].scrapedData.data.image
                                  ? n[a].scrapedData.data.image.indexOf("https:") < 0
                                    ? "https:" + n[a].scrapedData.data.image
                                    : n[a].scrapedData.data.image
                                  : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                '"></div>'
                              )),
                              (i += '<div class="item-wishlist--title">'.concat(n[a].scrapedData.data.title, "</div>")),
                              (i += '<div class="item-wishlist--price"><span class="price">'.concat(
                                n[a].notification.query_fprice,
                                "</span></div>"
                              )),
                              (i += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(r, "</span></div>")),
                              (i += "</div>"),
                              (i += "</a></div>");
                          }),
                            (document.getElementById("productResult").innerHTML = i),
                            $(".wishlist-empty").addClass("hidden"),
                            $(".wishlist-not-empty").removeClass("hidden"),
                            $(".item-wishlist--affiliate").hover(function () {
                              $(this).parent().find(".item-wishlist--affiliate-name").toggleClass("hidden");
                            });
                        } else $(".wishlist-empty").removeClass("hidden"), $(".wishlist-not-empty").addClass("hidden");
                        da();
                      });
                  }),
                  (ra.external.beforeRender = function (t) {
                    var e = ta(),
                      n = t.products,
                      i = Mi(n),
                      a = Cr(i),
                      o = Cr(
                        Mr(n, function (t) {
                          return t.category === a;
                        })
                      );
                    return r(r({}, t), {}, { productName: e, firstProduct: o, isDarkTheme: Hi(t) });
                  }),
                  (ra.wishlistVertical.beforeRender = ra.wishlist.beforeRender),
                  (ra.wishlistVertical.afterRender = function () {
                    var t = sa,
                      e = sa.products.map(aa),
                      r = Ri(e),
                      n = Wi(e),
                      i = $(".goshop-string").text(),
                      a = $(".undo-string").text(),
                      o = $(".undo-count-string").html();
                    r || n || ($("#addProductWishlist").hide(), $("#addProductWishlistEmpty").hide()),
                      Ui()
                        .then(function (t) {
                          return (
                            void 0 !== t &&
                              (t.length > 0
                                ? ((document.getElementById("wishlist-counter-p").innerHTML = t.length),
                                  $(".wishlist-added-bubble").removeClass("hidden"))
                                : $(".wishlist-added-bubble").addClass("hidden")),
                            (void 0 !== t && 0 !== t.length) || !ua
                              ? (void 0 !== t && 0 !== t.length) ||
                                ua ||
                                ($(".wishlist-empty-no-button-vertical").addClass("hidden"),
                                $(".wishlist-not-empty-vertical").addClass("hidden"),
                                r ||
                                  n ||
                                  ($("#addProductWishlist").hide(),
                                  $("#addProductWishlistEmpty").hide(),
                                  $(".wishlist-empty-no-button-vertical").removeClass("hidden"),
                                  $(".wishlist-empty-vertical").addClass("hidden")))
                              : ($(".wishlist-empty-vertical").addClass("hidden"), $(".wishlist-not-empty-vertical").addClass("hidden")),
                            void 0 !== t &&
                              0 !== t.length &&
                              ($(".wishlist-empty-vertical").addClass("hidden"),
                              $(".wishlist-empty-no-button-vertical").addClass("hidden"),
                              ua && $("#addProductWishlist").hide()),
                            void 0 === t ? [] : t
                          );
                        })
                        .then(function (e) {
                          var r = e;
                          if (0 !== Object.keys(e).length) {
                            var n = "";
                            Object.keys(e).forEach(function (r) {
                              e[r].scrapedData.data.canonical_url === t.scrapedData.data.canonical_url &&
                                ((n += '<div class="item-wishlist">'),
                                (n += '<div class="undo-remove-wishlist hidden">'),
                                (n +=
                                  '<div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                    .concat(a, '</span></div><div class="undo-countdown">')
                                    .concat(o, "</div>")),
                                (n += "</div>"),
                                (n += '<div class="item-wishlist-header">'),
                                (n +=
                                  '<div class="item-wishlist-affiliate-image"><img class="img-responsive item-wishlist-affiliate-image-vertical" alt="" src="'.concat(
                                    e[r].notification.affiliate_image,
                                    '"/></div>'
                                  )),
                                (n += '<span class="item-wishlist-remove"><i class="icon-trash"></i></span>'),
                                (n += "</div>"),
                                (n += '<a href="'.concat(
                                  e[r].scrapedData.data.canonical_url,
                                  '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                                )),
                                (n += '<div class="item-wishlist--inner">'),
                                (n += '<div class="img-responsive-vertical"><img class="image-product-vertical" alt="" src="'.concat(
                                  e[r].scrapedData.data.image
                                    ? e[r].scrapedData.data.image.indexOf("https:") < 0
                                      ? "https:" + e[r].scrapedData.data.image
                                      : e[r].scrapedData.data.image
                                    : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                  '"></div>'
                                )),
                                (n += '<div class="item-wishlist-title-vertical text-l text-grey-3">'.concat(
                                  e[r].scrapedData.data.title,
                                  "</div>"
                                )),
                                (n += '<div class="item-wishlist--price"><span class="price text-m text-green font-bold">'.concat(
                                  e[r].notification.query_fprice,
                                  "</span></div>"
                                )),
                                (n += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(i, "</span></div>")),
                                (n += "</div>"),
                                (n += "</a>"),
                                (n += "</div>"));
                            }),
                              Object.keys(e).forEach(function (r) {
                                e[r].scrapedData.data.canonical_url !== t.scrapedData.data.canonical_url &&
                                  ((n += '<div class="item-wishlist">'),
                                  (n += '<div class="undo-remove-wishlist hidden">'),
                                  (n +=
                                    '<div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                      .concat(a, '</span></div><div class="undo-countdown">')
                                      .concat(o, "</div>")),
                                  (n += "</div>"),
                                  (n += '<div class="item-wishlist-header">'),
                                  (n +=
                                    '<div class="item-wishlist-affiliate-image"><img class="img-responsive item-wishlist-affiliate-image-vertical" alt="" src="'.concat(
                                      e[r].notification.affiliate_image,
                                      '"/></div>'
                                    )),
                                  (n += '<span class="item-wishlist-remove"><i class="icon-trash"></i></span>'),
                                  (n += "</div>"),
                                  (n += '<a href="'.concat(
                                    e[r].scrapedData.data.canonical_url,
                                    '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                                  )),
                                  (n += '<div class="item-wishlist--inner">'),
                                  (n += '<div class="img-responsive-vertical"><img class="image-product-vertical" alt="" src="'.concat(
                                    e[r].scrapedData.data.image
                                      ? e[r].scrapedData.data.image.indexOf("https:") < 0
                                        ? "https:" + e[r].scrapedData.data.image
                                        : e[r].scrapedData.data.image
                                      : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                    '"></div>'
                                  )),
                                  (n += '<div class="item-wishlist-title-vertical text-l text-grey-3">'.concat(
                                    e[r].scrapedData.data.title,
                                    "</div>"
                                  )),
                                  (n += '<div class="item-wishlist--price"><span class="price text-m text-green font-bold">'.concat(
                                    e[r].notification.query_fprice,
                                    "</span></div>"
                                  )),
                                  (n += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(i, "</span></div>")),
                                  (n += "</div>"),
                                  (n += "</a>"),
                                  (n += "</div>"));
                              }),
                              (document.getElementById("productResult").innerHTML = n),
                              fa(),
                              Object.keys(e).forEach(function (r) {
                                var n = e[r];
                                t.scrapedData.data.canonical_url === n.scrapedData.data.canonical_url &&
                                  $(".add-wishlist-product").addClass("hidden");
                              });
                          }
                          return r;
                        })
                        .then(function (t) {
                          Gi(t);
                        }),
                      (document.getElementById("addProductWishlist").onclick = function () {
                        (na = !0),
                          Ui()
                            .then(function (t) {
                              return (
                                t.length > 0
                                  ? ((document.getElementById("wishlist-counter-p").innerHTML = t.length + 1),
                                    $(".wishlist-added-bubble").removeClass("hidden"))
                                  : $(".wishlist-added-bubble").addClass("hidden"),
                                t || []
                              );
                            })
                            .then(function (e) {
                              var r = e,
                                n = !1;
                              return (
                                Object.keys(e).forEach(function (i) {
                                  var a = e[i];
                                  t.scrapedData.data.canonical_url === a.scrapedData.data.canonical_url && ((r[i] = t), (n = !0));
                                }),
                                n || r.unshift(t),
                                r
                              );
                            })
                            .then(function (t) {
                              if ((Gi(t), $(".add-wishlist-product").addClass("hidden"), 0 !== Object.keys(t).length)) {
                                var e = "";
                                Object.keys(t).forEach(function (r) {
                                  (e += '<div class="item-wishlist">'),
                                    (e += '<div class="undo-remove-wishlist hidden">'),
                                    (e +=
                                      '<div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                        .concat(a, '</span></div><div class="undo-countdown">')
                                        .concat(o, "</div>")),
                                    (e += "</div>"),
                                    (e += '<div class="item-wishlist-header">'),
                                    (e +=
                                      '<div class="item-wishlist-affiliate-image"><img class="img-responsive item-wishlist-affiliate-image-vertical" alt="" src="'.concat(
                                        t[r].notification.affiliate_image,
                                        '"/></div>'
                                      )),
                                    (e += '<span class="item-wishlist-remove"><i class="icon-trash"></i></span>'),
                                    (e += "</div>"),
                                    (e += '<a href="'.concat(
                                      t[r].scrapedData.data.canonical_url,
                                      '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                                    )),
                                    (e += '<div class="item-wishlist--inner">'),
                                    (e += '<div class="img-responsive-vertical"><img class="image-product-vertical" alt="" src="'.concat(
                                      t[r].scrapedData.data.image
                                        ? t[r].scrapedData.data.image.indexOf("https:") < 0
                                          ? "https:" + t[r].scrapedData.data.image
                                          : t[r].scrapedData.data.image
                                        : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                      '"></div>'
                                    )),
                                    (e += '<div class="item-wishlist-title-vertical text-l text-grey-3">'.concat(
                                      t[r].scrapedData.data.title,
                                      "</div>"
                                    )),
                                    (e += '<div class="item-wishlist--price"><span class="price text-m text-green font-bold">'.concat(
                                      t[r].notification.query_fprice,
                                      "</span></div>"
                                    )),
                                    (e += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(
                                      i,
                                      "</span></div>"
                                    )),
                                    (e += "</div>"),
                                    (e += "</a>"),
                                    (e += "</div>");
                                }),
                                  (document.getElementById("productResult").innerHTML = e),
                                  fa();
                              }
                            });
                      }),
                      (document.getElementById("addProductWishlistEmpty").onclick = function () {
                        (na = !0),
                          Ui()
                            .then(function (t) {
                              return (
                                (document.getElementById("wishlist-counter-p").innerHTML = t.length + 1),
                                $(".wishlist-added-bubble").removeClass("hidden"),
                                t || []
                              );
                            })
                            .then(function (e) {
                              var r = e;
                              return r.unshift(t), Gi(r), r;
                            })
                            .then(function (t) {
                              if (
                                ($(".wishlist-empty-vertical").addClass("hidden"),
                                $(".wishlist-not-empty-vertical").removeClass("hidden"),
                                $(".add-wishlist-product").addClass("hidden"),
                                0 !== Object.keys(t).length)
                              ) {
                                var e = "";
                                Object.keys(t).forEach(function (r) {
                                  (e += '<div class="item-wishlist">'),
                                    (e += '<div class="undo-remove-wishlist hidden">'),
                                    (e +=
                                      '<div class="undo-action" data-event="Undo Delete Wishlist Product"><span class="undo-label"><span class="icon-undo"></span>'
                                        .concat(a, '</span></div><div class="undo-countdown">')
                                        .concat(o, "</div>")),
                                    (e += "</div>"),
                                    (e += '<div class="item-wishlist-header">'),
                                    (e +=
                                      '<div class="item-wishlist-affiliate-image"><img class="img-responsive item-wishlist-affiliate-image-vertical" alt="" src="'.concat(
                                        t[r].notification.affiliate_image,
                                        '"/></div>'
                                      )),
                                    (e += '<span class="item-wishlist-remove"><i class="icon-trash"></i></span>'),
                                    (e += "</div>"),
                                    (e += '<a href="'.concat(
                                      t[r].scrapedData.data.canonical_url,
                                      '" rel="noopener" target="_blank" data-event="Open Wishlist Product">'
                                    )),
                                    (e += '<div class="item-wishlist--inner">'),
                                    (e += '<div class="img-responsive-vertical"><img class="image-product-vertical" alt="" src="'.concat(
                                      t[r].scrapedData.data.image
                                        ? t[r].scrapedData.data.image.indexOf("https:") < 0
                                          ? "https:" + t[r].scrapedData.data.image
                                          : t[r].scrapedData.data.image
                                        : "https://assets.prod.cms.avira.com/cache-buster-1612950231/assets/www/_pim/safeshopping/abs-placeholder.png",
                                      '"></div>'
                                    )),
                                    (e += '<div class="item-wishlist-title-vertical text-l text-grey-3">'.concat(
                                      t[r].scrapedData.data.title,
                                      "</div>"
                                    )),
                                    (e += '<div class="item-wishlist--price"><span class="price text-m text-green font-bold">'.concat(
                                      t[r].notification.query_fprice,
                                      "</span></div>"
                                    )),
                                    (e += '<div class="item-wishlist--cta"><span class="go-to-shop cta-button">'.concat(
                                      i,
                                      "</span></div>"
                                    )),
                                    (e += "</div>"),
                                    (e += "</a>"),
                                    (e += "</div>");
                                }),
                                  (document.getElementById("productResult").innerHTML = e),
                                  fa();
                              }
                            });
                      });
                    var s = $(".wishlist-modal"),
                      c = $(".wishlist-video-close");
                    s.click(function (t) {
                      t.target === this && ((location.hash = "#offers/minimized"), s.hide());
                    }),
                      c.click(function (t) {
                        t.target === this && ((location.hash = "#offers/minimized"), s.hide());
                      });
                  });
                var ha = { notification: {}, listing: {}, coupon: {}, help: {}, ftu: {} };
                ha.notification.beforeRender = function (t) {
                  var e,
                    r = t.products,
                    n = t.meta,
                    i = ta(),
                    a = n.icon_animation,
                    o = xi(r, vi).length,
                    s = Cr(r),
                    c = Li(s),
                    u = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName(),
                    l = "#offers/minimized" === location.hash;
                  l ? (e = "coupons") : (e = Yi(location.hash));
                  return {
                    productName: i,
                    couponsNo: o,
                    firstProduct: s,
                    logoAnimation: a,
                    hasCouponsCode: c,
                    isDarkTheme: Hi({ meta: n }),
                    meta: n,
                    isFirefox: u,
                    showMinimizedView: l,
                    currentNavTab: e,
                    affiliateName: s.affiliate ? s.affiliate : n.domain,
                    viewTypeClassName: l ? "minimized-view" : "full-view",
                    shortContent: zi(s.content, 50)
                  };
                };
                var pa,
                  va = !1;
                ha.coupon.beforeRender = function (t) {
                  var e = ta();
                  return (va = !0), r(r({}, t), {}, { productName: e, isDarkTheme: Hi(t) });
                };
                var ma = 0;
                (ha.coupon.afterRender = function () {
                  ("Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName() ? browser : chrome).runtime.getManifest()
                    .version < "3.1.0"
                    ? $(".ftu-wishlist-trigger").addClass("hidden")
                    : $(".ftu-wishlist-trigger").removeClass("hidden"),
                    setTimeout(function () {
                      Ui()
                        .then(function (t) {
                          return void 0 === t ? [] : t;
                        })
                        .then(function (t) {
                          t.length > 0
                            ? ((ma = t.length),
                              $("#wishlist-counter-p").length > 0 && (document.getElementById("wishlist-counter-p").innerHTML = ma),
                              $(".wishlist-added-bubble").removeClass("hidden"))
                            : $(".wishlist-added-bubble").addClass("hidden");
                        });
                    }, 80),
                    $(".copy-callback").on("click", function () {
                      !(function (t) {
                        var e = document.createRange();
                        e.selectNodeContents(t);
                        var r = window.getSelection();
                        r.removeAllRanges(), r.addRange(e);
                      })(document.getElementById("code")),
                        (pa = (function () {
                          try {
                            pa = document.execCommand("copy");
                          } catch (t) {
                            pa = !1;
                          }
                          return pa;
                        })()),
                        $(".copy-callback span").fadeOut("slow", function () {
                          $(".copy-success").delay(900).fadeIn("fast");
                        });
                    }),
                    pa && ($(".copy-callback span").hide(), $(".copy-success").show()),
                    $("#feedback-yes, #feedback-no").on("click", function () {
                      var t = $(".feedback");
                      t.find(".feedback--step-1").addClass("hidden"), t.find(".feedback--step-2").removeClass("hidden");
                    });
                }),
                  (ha.help.afterRender = function () {
                    var t = $("a.toggle-button.help.active"),
                      e = t.position().left + t.outerWidth(),
                      r =
                        "left:calc(0% + ".concat((e - 223).toFixed(0), "px)!important;") +
                        "right:calc(100% - ".concat((e + 20).toFixed(0), "px)!important;");
                    $("div.new-ui.dropdown-content-wrapper.coupons").attr("style", r);
                  }),
                  (ha.ftu.beforeRender = function (t) {
                    return r(r({}, t), {}, { isDarkTheme: Hi(t), singleCoupon: va });
                  }),
                  (ha.notification.afterRender = ra.notification.afterRender),
                  (ha.listing.beforeRender = ra.listing.beforeRender),
                  (ha.listing.afterRender = ra.listing.afterRender);
                var ga = { notification: {}, listing: {}, coupon: {}, ftu: {} },
                  ba = !1;
                (ga.notification.beforeRender = function (t) {
                  var e,
                    r,
                    n = ta(),
                    i = t.meta,
                    a = t.products,
                    o = t.scrapedData,
                    s = "#offers/minimized" === location.hash,
                    c = i.icon_animation,
                    u = Mi(a),
                    l = Cr(u),
                    d =
                      ((e = u),
                      [gi, _i].every(function (t) {
                        return e.includes(t);
                      })),
                    f = Di(a),
                    h = Wi(a),
                    p = Li(Cr(a)),
                    v = Mr(a, function (t) {
                      return Kr(u, t.category);
                    }),
                    m = vn(v, "sortorder"),
                    g = xi(m, l),
                    b = f || d ? g.length : m.length,
                    _ = xi(a, vi).length,
                    y = xi(a, _i).length,
                    w = g.length > 1,
                    k = (function (t) {
                      var e = t.meta,
                        r = void 0 === e ? {} : e,
                        n = r.ab_bucket,
                        i = r.ab_group;
                      return "googleSearchTerm" === n && "test" === i;
                    })(t),
                    j = "Firefox" === Cn.getParser(window.navigator.userAgent).getBrowserName();
                  ("bulk" === o.data.search_type && (ba = !0), s) ? (r = Ji(l)) : (r = Yi(location.hash));
                  if (Cr(g) && Cr(g).shipping) {
                    var x = Cr(g).shipping.split(" ")[0];
                    (x = parseFloat(x.replace(",", "."))), (Cr(g).isFreeShipping = 0 === x);
                  }
                  return {
                    productName: n,
                    couponsNo: _,
                    firstProduct: Cr(g),
                    hasCoupons: f,
                    hasSearchTerm: k && $i(t),
                    isDarkTheme: Hi({ meta: i }),
                    logoAnimation: c,
                    meta: i,
                    similarNo: y,
                    offersNo: b,
                    offersNoMore: w,
                    onlySimilar: l === _i,
                    isProduct: l === gi,
                    searchTerm: t.searchTerm,
                    showSimilarBtn: d,
                    hasCouponsCode: p,
                    searchTypeAmazon: ba,
                    isFirefox: j,
                    products: a,
                    initialCategory: l,
                    currentNavTab: r,
                    showMinimizedView: s,
                    viewTypeClassName: s ? "minimized-view" : "full-view",
                    hasSimilar: h,
                    shortContent: Cr(g).coupon_text ? zi(Cr(g).coupon_text, 50) : "",
                    oneSimilar: 1 === y,
                    oneOffer: 1 === b
                  };
                }),
                  (ga.notification.afterRender = function () {
                    var t = this;
                    $(".triggers").on("hover", function () {
                      $(t).addClass("active");
                    });
                  }),
                  (ga.notification.beforeRender = ga.notification.beforeRender),
                  (ga.notification.afterRender = ra.notification.afterRender),
                  (ga.listing.beforeRender = ra.listing.beforeRender),
                  (ga.listing.afterRender = ra.listing.afterRender),
                  ABS.run(function (t) {
                    t.templates = {
                      tpl_coupon_single: ha.coupon,
                      tpl_coupon_single_vertical: ha.coupon,
                      tpl_help_coupons: ha.help,
                      tpl_help_coupons_vertical: ha.help,
                      tpl_ftu_coupons_and_offers: ga.ftu,
                      tpl_ftu_coupons: ha.ftu,
                      tpl_listing_coupons_and_offers: ra.listing,
                      tpl_listing_coupons: ra.listing,
                      tpl_listing_coupons_vertical: ra.listing,
                      tpl_listing_hotels: ra.listing,
                      tpl_listing_hotels_vertical: ra.listing,
                      tpl_listing: ra.listing,
                      tpl_listing_vertical: ra.listing,
                      tpl_ftu: ra.ftu,
                      tpl_ftu_vertical: ra.ftu,
                      tpl_wishlist: ra.wishlist,
                      tpl_wishlist_vertical: ra.wishlistVertical,
                      tpl_wishlistmodal: ra.wishlistmodal,
                      tpl_notification_billiger: ra.notification,
                      tpl_notification_coupons_and_offers: ga.notification,
                      tpl_notification_coupons_and_offers_vertical: ga.notification,
                      tpl_notification_google_offers: ga.notification,
                      tpl_notification_google_offers_vertical: ga.notification,
                      tpl_notification_coupons: ha.notification,
                      tpl_notification_coupons_vertical: ha.notification,
                      tpl_notification_hotels: ra.notification,
                      tpl_notification_hotels_vertical: ra.notification,
                      tpl_notification_splashoffer: ra.notification,
                      tpl_notification_abs_promo_vertical: ra.notification,
                      tpl_external_splashoffer: ra.external,
                      tpl_external_splashoffer_vertical: ra.external,
                      tpl_notification_utilities: ra.notification
                    };
                  }),
                  (function (t) {
                    if (!window._fixBrokenFirefoxLinksApplied) {
                      window._fixBrokenFirefoxLinksApplied = !0;
                      var e = navigator.userAgent.match(/Firefox\/(\d+)/);
                      !e ||
                        parseInt(e[1], 10) < 53 ||
                        (chrome &&
                          chrome.runtime &&
                          chrome.runtime.sendMessage &&
                          $(t).on("click", "a[target=_blank][href]", function (t) {
                            t.preventDefault(),
                              chrome.runtime.sendMessage({ publish: "navigate", message: { url: t.currentTarget.href, as_separate: !0 } });
                          }));
                    }
                  })(document.body);
              })();
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {
        "core-js/modules/es6.array.iterator.js": 50,
        "core-js/modules/es6.array.sort.js": 51,
        "core-js/modules/es7.string.trim-left.js": 52,
        "core-js/modules/web.dom.iterable.js": 53
      }
    ],
    2: [
      function (t, e, r) {
        e.exports = function (t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t;
        };
      },
      {}
    ],
    3: [
      function (t, e, r) {
        var n = t("./_wks")("unscopables"),
          i = Array.prototype;
        null == i[n] && t("./_hide")(i, n, {}),
          (e.exports = function (t) {
            i[n][t] = !0;
          });
      },
      { "./_hide": 18, "./_wks": 49 }
    ],
    4: [
      function (t, e, r) {
        var n = t("./_is-object");
        e.exports = function (t) {
          if (!n(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      { "./_is-object": 22 }
    ],
    5: [
      function (t, e, r) {
        var n = t("./_to-iobject"),
          i = t("./_to-length"),
          a = t("./_to-absolute-index");
        e.exports = function (t) {
          return function (e, r, o) {
            var s,
              c = n(e),
              u = i(c.length),
              l = a(o, u);
            if (t && r != r) {
              for (; u > l; ) if ((s = c[l++]) != s) return !0;
            } else for (; u > l; l++) if ((t || l in c) && c[l] === r) return t || l || 0;
            return !t && -1;
          };
        };
      },
      { "./_to-absolute-index": 42, "./_to-iobject": 44, "./_to-length": 45 }
    ],
    6: [
      function (t, e, r) {
        var n = {}.toString;
        e.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      },
      {}
    ],
    7: [
      function (t, e, r) {
        var n = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
      },
      {}
    ],
    8: [
      function (t, e, r) {
        var n = t("./_a-function");
        e.exports = function (t, e, r) {
          if ((n(t), void 0 === e)) return t;
          switch (r) {
            case 1:
              return function (r) {
                return t.call(e, r);
              };
            case 2:
              return function (r, n) {
                return t.call(e, r, n);
              };
            case 3:
              return function (r, n, i) {
                return t.call(e, r, n, i);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        };
      },
      { "./_a-function": 2 }
    ],
    9: [
      function (t, e, r) {
        e.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      {}
    ],
    10: [
      function (t, e, r) {
        e.exports = !t("./_fails")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
      },
      { "./_fails": 14 }
    ],
    11: [
      function (t, e, r) {
        var n = t("./_is-object"),
          i = t("./_global").document,
          a = n(i) && n(i.createElement);
        e.exports = function (t) {
          return a ? i.createElement(t) : {};
        };
      },
      { "./_global": 16, "./_is-object": 22 }
    ],
    12: [
      function (t, e, r) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    13: [
      function (t, e, r) {
        var n = t("./_global"),
          i = t("./_core"),
          a = t("./_hide"),
          o = t("./_redefine"),
          s = t("./_ctx"),
          c = function (t, e, r) {
            var u,
              l,
              d,
              f,
              h = t & c.F,
              p = t & c.G,
              v = t & c.S,
              m = t & c.P,
              g = t & c.B,
              b = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
              _ = p ? i : i[e] || (i[e] = {}),
              y = _.prototype || (_.prototype = {});
            for (u in (p && (r = e), r))
              (d = ((l = !h && b && void 0 !== b[u]) ? b : r)[u]),
                (f = g && l ? s(d, n) : m && "function" == typeof d ? s(Function.call, d) : d),
                b && o(b, u, d, t & c.U),
                _[u] != d && a(_, u, f),
                m && y[u] != d && (y[u] = d);
          };
        (n.core = i), (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
      },
      { "./_core": 7, "./_ctx": 8, "./_global": 16, "./_hide": 18, "./_redefine": 35 }
    ],
    14: [
      function (t, e, r) {
        e.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      {}
    ],
    15: [
      function (t, e, r) {
        e.exports = t("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 38 }
    ],
    16: [
      function (t, e, r) {
        var n = (e.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      {}
    ],
    17: [
      function (t, e, r) {
        var n = {}.hasOwnProperty;
        e.exports = function (t, e) {
          return n.call(t, e);
        };
      },
      {}
    ],
    18: [
      function (t, e, r) {
        var n = t("./_object-dp"),
          i = t("./_property-desc");
        e.exports = t("./_descriptors")
          ? function (t, e, r) {
              return n.f(t, e, i(1, r));
            }
          : function (t, e, r) {
              return (t[e] = r), t;
            };
      },
      { "./_descriptors": 10, "./_object-dp": 29, "./_property-desc": 34 }
    ],
    19: [
      function (t, e, r) {
        var n = t("./_global").document;
        e.exports = n && n.documentElement;
      },
      { "./_global": 16 }
    ],
    20: [
      function (t, e, r) {
        e.exports =
          !t("./_descriptors") &&
          !t("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty(t("./_dom-create")("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "./_descriptors": 10, "./_dom-create": 11, "./_fails": 14 }
    ],
    21: [
      function (t, e, r) {
        var n = t("./_cof");
        e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return "String" == n(t) ? t.split("") : Object(t);
            };
      },
      { "./_cof": 6 }
    ],
    22: [
      function (t, e, r) {
        e.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      {}
    ],
    23: [
      function (t, e, r) {
        "use strict";
        var n = t("./_object-create"),
          i = t("./_property-desc"),
          a = t("./_set-to-string-tag"),
          o = {};
        t("./_hide")(o, t("./_wks")("iterator"), function () {
          return this;
        }),
          (e.exports = function (t, e, r) {
            (t.prototype = n(o, { next: i(1, r) })), a(t, e + " Iterator");
          });
      },
      { "./_hide": 18, "./_object-create": 28, "./_property-desc": 34, "./_set-to-string-tag": 36, "./_wks": 49 }
    ],
    24: [
      function (t, e, r) {
        "use strict";
        var n = t("./_library"),
          i = t("./_export"),
          a = t("./_redefine"),
          o = t("./_hide"),
          s = t("./_iterators"),
          c = t("./_iter-create"),
          u = t("./_set-to-string-tag"),
          l = t("./_object-gpo"),
          d = t("./_wks")("iterator"),
          f = !([].keys && "next" in [].keys()),
          h = "keys",
          p = "values",
          v = function () {
            return this;
          };
        e.exports = function (t, e, r, m, g, b, _) {
          c(r, e, m);
          var y,
            w,
            k,
            j = function (t) {
              if (!f && t in M) return M[t];
              switch (t) {
                case h:
                case p:
                  return function () {
                    return new r(this, t);
                  };
              }
              return function () {
                return new r(this, t);
              };
            },
            x = e + " Iterator",
            O = g == p,
            S = !1,
            M = t.prototype,
            C = M[d] || M["@@iterator"] || (g && M[g]),
            $ = C || j(g),
            F = g ? (O ? j("entries") : $) : void 0,
            P = ("Array" == e && M.entries) || C;
          if (
            (P && (k = l(P.call(new t()))) !== Object.prototype && k.next && (u(k, x, !0), n || "function" == typeof k[d] || o(k, d, v)),
            O &&
              C &&
              C.name !== p &&
              ((S = !0),
              ($ = function () {
                return C.call(this);
              })),
            (n && !_) || (!f && !S && M[d]) || o(M, d, $),
            (s[e] = $),
            (s[x] = v),
            g)
          )
            if (((y = { values: O ? $ : j(p), keys: b ? $ : j(h), entries: F }), _)) for (w in y) w in M || a(M, w, y[w]);
            else i(i.P + i.F * (f || S), e, y);
          return y;
        };
      },
      {
        "./_export": 13,
        "./_hide": 18,
        "./_iter-create": 23,
        "./_iterators": 26,
        "./_library": 27,
        "./_object-gpo": 31,
        "./_redefine": 35,
        "./_set-to-string-tag": 36,
        "./_wks": 49
      }
    ],
    25: [
      function (t, e, r) {
        e.exports = function (t, e) {
          return { value: e, done: !!t };
        };
      },
      {}
    ],
    26: [
      function (t, e, r) {
        e.exports = {};
      },
      {}
    ],
    27: [
      function (t, e, r) {
        e.exports = !1;
      },
      {}
    ],
    28: [
      function (t, e, r) {
        var n = t("./_an-object"),
          i = t("./_object-dps"),
          a = t("./_enum-bug-keys"),
          o = t("./_shared-key")("IE_PROTO"),
          s = function () {},
          c = function () {
            var e,
              r = t("./_dom-create")("iframe"),
              n = a.length;
            for (
              r.style.display = "none",
                t("./_html").appendChild(r),
                r.src = "javascript:",
                (e = r.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                c = e.F;
              n--;

            )
              delete c.prototype[a[n]];
            return c();
          };
        e.exports =
          Object.create ||
          function (t, e) {
            var r;
            return (
              null !== t ? ((s.prototype = n(t)), (r = new s()), (s.prototype = null), (r[o] = t)) : (r = c()), void 0 === e ? r : i(r, e)
            );
          };
      },
      { "./_an-object": 4, "./_dom-create": 11, "./_enum-bug-keys": 12, "./_html": 19, "./_object-dps": 30, "./_shared-key": 37 }
    ],
    29: [
      function (t, e, r) {
        var n = t("./_an-object"),
          i = t("./_ie8-dom-define"),
          a = t("./_to-primitive"),
          o = Object.defineProperty;
        r.f = t("./_descriptors")
          ? Object.defineProperty
          : function (t, e, r) {
              if ((n(t), (e = a(e, !0)), n(r), i))
                try {
                  return o(t, e, r);
                } catch (t) {}
              if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
              return "value" in r && (t[e] = r.value), t;
            };
      },
      { "./_an-object": 4, "./_descriptors": 10, "./_ie8-dom-define": 20, "./_to-primitive": 47 }
    ],
    30: [
      function (t, e, r) {
        var n = t("./_object-dp"),
          i = t("./_an-object"),
          a = t("./_object-keys");
        e.exports = t("./_descriptors")
          ? Object.defineProperties
          : function (t, e) {
              i(t);
              for (var r, o = a(e), s = o.length, c = 0; s > c; ) n.f(t, (r = o[c++]), e[r]);
              return t;
            };
      },
      { "./_an-object": 4, "./_descriptors": 10, "./_object-dp": 29, "./_object-keys": 33 }
    ],
    31: [
      function (t, e, r) {
        var n = t("./_has"),
          i = t("./_to-object"),
          a = t("./_shared-key")("IE_PROTO"),
          o = Object.prototype;
        e.exports =
          Object.getPrototypeOf ||
          function (t) {
            return (
              (t = i(t)),
              n(t, a)
                ? t[a]
                : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? o
                : null
            );
          };
      },
      { "./_has": 17, "./_shared-key": 37, "./_to-object": 46 }
    ],
    32: [
      function (t, e, r) {
        var n = t("./_has"),
          i = t("./_to-iobject"),
          a = t("./_array-includes")(!1),
          o = t("./_shared-key")("IE_PROTO");
        e.exports = function (t, e) {
          var r,
            s = i(t),
            c = 0,
            u = [];
          for (r in s) r != o && n(s, r) && u.push(r);
          for (; e.length > c; ) n(s, (r = e[c++])) && (~a(u, r) || u.push(r));
          return u;
        };
      },
      { "./_array-includes": 5, "./_has": 17, "./_shared-key": 37, "./_to-iobject": 44 }
    ],
    33: [
      function (t, e, r) {
        var n = t("./_object-keys-internal"),
          i = t("./_enum-bug-keys");
        e.exports =
          Object.keys ||
          function (t) {
            return n(t, i);
          };
      },
      { "./_enum-bug-keys": 12, "./_object-keys-internal": 32 }
    ],
    34: [
      function (t, e, r) {
        e.exports = function (t, e) {
          return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
      },
      {}
    ],
    35: [
      function (t, e, r) {
        var n = t("./_global"),
          i = t("./_hide"),
          a = t("./_has"),
          o = t("./_uid")("src"),
          s = t("./_function-to-string"),
          c = "toString",
          u = ("" + s).split(c);
        (t("./_core").inspectSource = function (t) {
          return s.call(t);
        }),
          (e.exports = function (t, e, r, s) {
            var c = "function" == typeof r;
            c && (a(r, "name") || i(r, "name", e)),
              t[e] !== r &&
                (c && (a(r, o) || i(r, o, t[e] ? "" + t[e] : u.join(String(e)))),
                t === n ? (t[e] = r) : s ? (t[e] ? (t[e] = r) : i(t, e, r)) : (delete t[e], i(t, e, r)));
          })(Function.prototype, c, function () {
            return ("function" == typeof this && this[o]) || s.call(this);
          });
      },
      { "./_core": 7, "./_function-to-string": 15, "./_global": 16, "./_has": 17, "./_hide": 18, "./_uid": 48 }
    ],
    36: [
      function (t, e, r) {
        var n = t("./_object-dp").f,
          i = t("./_has"),
          a = t("./_wks")("toStringTag");
        e.exports = function (t, e, r) {
          t && !i((t = r ? t : t.prototype), a) && n(t, a, { configurable: !0, value: e });
        };
      },
      { "./_has": 17, "./_object-dp": 29, "./_wks": 49 }
    ],
    37: [
      function (t, e, r) {
        var n = t("./_shared")("keys"),
          i = t("./_uid");
        e.exports = function (t) {
          return n[t] || (n[t] = i(t));
        };
      },
      { "./_shared": 38, "./_uid": 48 }
    ],
    38: [
      function (t, e, r) {
        var n = t("./_core"),
          i = t("./_global"),
          a = "__core-js_shared__",
          o = i[a] || (i[a] = {});
        (e.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: n.version,
          mode: t("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 7, "./_global": 16, "./_library": 27 }
    ],
    39: [
      function (t, e, r) {
        "use strict";
        var n = t("./_fails");
        e.exports = function (t, e) {
          return (
            !!t &&
            n(function () {
              e ? t.call(null, function () {}, 1) : t.call(null);
            })
          );
        };
      },
      { "./_fails": 14 }
    ],
    40: [
      function (t, e, r) {
        var n = t("./_export"),
          i = t("./_defined"),
          a = t("./_fails"),
          o = t("./_string-ws"),
          s = "[" + o + "]",
          c = RegExp("^" + s + s + "*"),
          u = RegExp(s + s + "*$"),
          l = function (t, e, r) {
            var i = {},
              s = a(function () {
                return !!o[t]() || "​" != "​"[t]();
              }),
              c = (i[t] = s ? e(d) : o[t]);
            r && (i[r] = c), n(n.P + n.F * s, "String", i);
          },
          d = (l.trim = function (t, e) {
            return (t = String(i(t))), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t;
          });
        e.exports = l;
      },
      { "./_defined": 9, "./_export": 13, "./_fails": 14, "./_string-ws": 41 }
    ],
    41: [
      function (t, e, r) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
      },
      {}
    ],
    42: [
      function (t, e, r) {
        var n = t("./_to-integer"),
          i = Math.max,
          a = Math.min;
        e.exports = function (t, e) {
          return (t = n(t)) < 0 ? i(t + e, 0) : a(t, e);
        };
      },
      { "./_to-integer": 43 }
    ],
    43: [
      function (t, e, r) {
        var n = Math.ceil,
          i = Math.floor;
        e.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
        };
      },
      {}
    ],
    44: [
      function (t, e, r) {
        var n = t("./_iobject"),
          i = t("./_defined");
        e.exports = function (t) {
          return n(i(t));
        };
      },
      { "./_defined": 9, "./_iobject": 21 }
    ],
    45: [
      function (t, e, r) {
        var n = t("./_to-integer"),
          i = Math.min;
        e.exports = function (t) {
          return t > 0 ? i(n(t), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 43 }
    ],
    46: [
      function (t, e, r) {
        var n = t("./_defined");
        e.exports = function (t) {
          return Object(n(t));
        };
      },
      { "./_defined": 9 }
    ],
    47: [
      function (t, e, r) {
        var n = t("./_is-object");
        e.exports = function (t, e) {
          if (!n(t)) return t;
          var r, i;
          if (e && "function" == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
          if ("function" == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
          if (!e && "function" == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 22 }
    ],
    48: [
      function (t, e, r) {
        var n = 0,
          i = Math.random();
        e.exports = function (t) {
          return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
        };
      },
      {}
    ],
    49: [
      function (t, e, r) {
        var n = t("./_shared")("wks"),
          i = t("./_uid"),
          a = t("./_global").Symbol,
          o = "function" == typeof a;
        (e.exports = function (t) {
          return n[t] || (n[t] = (o && a[t]) || (o ? a : i)("Symbol." + t));
        }).store = n;
      },
      { "./_global": 16, "./_shared": 38, "./_uid": 48 }
    ],
    50: [
      function (t, e, r) {
        "use strict";
        var n = t("./_add-to-unscopables"),
          i = t("./_iter-step"),
          a = t("./_iterators"),
          o = t("./_to-iobject");
        (e.exports = t("./_iter-define")(
          Array,
          "Array",
          function (t, e) {
            (this._t = o(t)), (this._i = 0), (this._k = e);
          },
          function () {
            var t = this._t,
              e = this._k,
              r = this._i++;
            return !t || r >= t.length ? ((this._t = void 0), i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
          },
          "values"
        )),
          (a.Arguments = a.Array),
          n("keys"),
          n("values"),
          n("entries");
      },
      { "./_add-to-unscopables": 3, "./_iter-define": 24, "./_iter-step": 25, "./_iterators": 26, "./_to-iobject": 44 }
    ],
    51: [
      function (t, e, r) {
        "use strict";
        var n = t("./_export"),
          i = t("./_a-function"),
          a = t("./_to-object"),
          o = t("./_fails"),
          s = [].sort,
          c = [1, 2, 3];
        n(
          n.P +
            n.F *
              (o(function () {
                c.sort(void 0);
              }) ||
                !o(function () {
                  c.sort(null);
                }) ||
                !t("./_strict-method")(s)),
          "Array",
          {
            sort: function (t) {
              return void 0 === t ? s.call(a(this)) : s.call(a(this), i(t));
            }
          }
        );
      },
      { "./_a-function": 2, "./_export": 13, "./_fails": 14, "./_strict-method": 39, "./_to-object": 46 }
    ],
    52: [
      function (t, e, r) {
        "use strict";
        t("./_string-trim")(
          "trimLeft",
          function (t) {
            return function () {
              return t(this, 1);
            };
          },
          "trimStart"
        );
      },
      { "./_string-trim": 40 }
    ],
    53: [
      function (t, e, r) {
        for (
          var n = t("./es6.array.iterator"),
            i = t("./_object-keys"),
            a = t("./_redefine"),
            o = t("./_global"),
            s = t("./_hide"),
            c = t("./_iterators"),
            u = t("./_wks"),
            l = u("iterator"),
            d = u("toStringTag"),
            f = c.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1
            },
            p = i(h),
            v = 0;
          v < p.length;
          v++
        ) {
          var m,
            g = p[v],
            b = h[g],
            _ = o[g],
            y = _ && _.prototype;
          if (y && (y[l] || s(y, l, f), y[d] || s(y, d, g), (c[g] = f), b)) for (m in n) y[m] || a(y, m, n[m], !0);
        }
      },
      {
        "./_global": 16,
        "./_hide": 18,
        "./_iterators": 26,
        "./_object-keys": 33,
        "./_redefine": 35,
        "./_wks": 49,
        "./es6.array.iterator": 50
      }
    ]
  },
  {},
  [1]
);
