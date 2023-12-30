/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function t(e, n, r) {
  function i(o, u) {
    if (!n[o]) {
      if (!e[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (s) return s(o, !0);
        var c = new Error("Cannot find module '" + o + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var l = (n[o] = { exports: {} });
      e[o][0].call(
        l.exports,
        function (t) {
          return i(e[o][1][t] || t);
        },
        l,
        l.exports,
        t,
        e,
        n,
        r
      );
    }
    return n[o].exports;
  }
  for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
  return i;
})(
  {
    1: [
      function (t, e, n) {
        (e.exports = function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      {}
    ],
    2: [
      function (t, e, n) {
        (e.exports = function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      {}
    ],
    3: [
      function (t, e, n) {
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        (e.exports = function (t, e, n) {
          return e && r(t.prototype, e), n && r(t, n), t;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      {}
    ],
    4: [
      function (t, e, n) {
        function r(t) {
          return (
            (e.exports = r =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            (e.exports.default = e.exports),
            (e.exports.__esModule = !0),
            r(t)
          );
        }
        (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (t, e, n) {
        var r = t("./setPrototypeOf.js");
        (e.exports = function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 8 }
    ],
    6: [
      function (t, e, n) {
        (e.exports = function (t) {
          return t && t.__esModule ? t : { default: t };
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (t, e, n) {
        var r = t("@babel/runtime/helpers/typeof").default,
          i = t("./assertThisInitialized.js");
        (e.exports = function (t, e) {
          return !e || ("object" !== r(e) && "function" != typeof e) ? i(t) : e;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 1, "@babel/runtime/helpers/typeof": 9 }
    ],
    8: [
      function (t, e, n) {
        function r(t, n) {
          return (
            (e.exports = r =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            (e.exports.default = e.exports),
            (e.exports.__esModule = !0),
            r(t, n)
          );
        }
        (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
      },
      {}
    ],
    9: [
      function (t, e, n) {
        function r(t) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((e.exports = r =
                  function (t) {
                    return typeof t;
                  }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0))
              : ((e.exports = r =
                  function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)),
            r(t)
          );
        }
        (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
      },
      {}
    ],
    10: [
      function (t, e, n) {
        (function (e) {
          (function () {
            !(function (r) {
              var i = ("object" == typeof self && self.self === self && self) || ("object" == typeof e && e.global === e && e);
              if ("function" == typeof define && define.amd)
                define(["underscore", "jquery", "exports"], function (t, e, n) {
                  i.Backbone = r(i, n, t, e);
                });
              else if (void 0 !== n) {
                var s,
                  o = t("underscore");
                try {
                  s = t("jquery");
                } catch (t) {}
                r(i, n, o, s);
              } else i.Backbone = r(i, {}, i._, i.jQuery || i.Zepto || i.ender || i.$);
            })(function (t, e, n, r) {
              var i = t.Backbone,
                s = Array.prototype.slice;
              (e.VERSION = "1.4.0"),
                (e.$ = r),
                (e.noConflict = function () {
                  return (t.Backbone = i), this;
                }),
                (e.emulateHTTP = !1),
                (e.emulateJSON = !1);
              var o,
                u = (e.Events = {}),
                a = /\s+/,
                c = function (t, e, r, i, s) {
                  var o,
                    u = 0;
                  if (r && "object" == typeof r) {
                    void 0 !== i && "context" in s && void 0 === s.context && (s.context = i);
                    for (o = n.keys(r); u < o.length; u++) e = c(t, e, o[u], r[o[u]], s);
                  } else if (r && a.test(r)) for (o = r.split(a); u < o.length; u++) e = t(e, o[u], i, s);
                  else e = t(e, r, i, s);
                  return e;
                };
              (u.on = function (t, e, n) {
                ((this._events = c(l, this._events || {}, t, e, { context: n, ctx: this, listening: o })), o) &&
                  (((this._listeners || (this._listeners = {}))[o.id] = o), (o.interop = !1));
                return this;
              }),
                (u.listenTo = function (t, e, r) {
                  if (!t) return this;
                  var i = t._listenId || (t._listenId = n.uniqueId("l")),
                    s = this._listeningTo || (this._listeningTo = {}),
                    u = (o = s[i]);
                  u || (this._listenId || (this._listenId = n.uniqueId("l")), (u = o = s[i] = new g(this, t)));
                  var a = h(t, e, r, this);
                  if (((o = void 0), a)) throw a;
                  return u.interop && u.on(e, r), this;
                });
              var l = function (t, e, n, r) {
                  if (n) {
                    var i = t[e] || (t[e] = []),
                      s = r.context,
                      o = r.ctx,
                      u = r.listening;
                    u && u.count++, i.push({ callback: n, context: s, ctx: s || o, listening: u });
                  }
                  return t;
                },
                h = function (t, e, n, r) {
                  try {
                    t.on(e, n, r);
                  } catch (t) {
                    return t;
                  }
                };
              (u.off = function (t, e, n) {
                return this._events ? ((this._events = c(f, this._events, t, e, { context: n, listeners: this._listeners })), this) : this;
              }),
                (u.stopListening = function (t, e, r) {
                  var i = this._listeningTo;
                  if (!i) return this;
                  for (var s = t ? [t._listenId] : n.keys(i), o = 0; o < s.length; o++) {
                    var u = i[s[o]];
                    if (!u) break;
                    u.obj.off(e, r, this), u.interop && u.off(e, r);
                  }
                  return n.isEmpty(i) && (this._listeningTo = void 0), this;
                });
              var f = function (t, e, r, i) {
                if (t) {
                  var s,
                    o = i.context,
                    u = i.listeners,
                    a = 0;
                  if (e || o || r) {
                    for (s = e ? [e] : n.keys(t); a < s.length; a++) {
                      var c = t[(e = s[a])];
                      if (!c) break;
                      for (var l = [], h = 0; h < c.length; h++) {
                        var f = c[h];
                        if ((r && r !== f.callback && r !== f.callback._callback) || (o && o !== f.context)) l.push(f);
                        else {
                          var p = f.listening;
                          p && p.off(e, r);
                        }
                      }
                      l.length ? (t[e] = l) : delete t[e];
                    }
                    return t;
                  }
                  for (s = n.keys(u); a < s.length; a++) u[s[a]].cleanup();
                }
              };
              (u.once = function (t, e, n) {
                var r = c(p, {}, t, e, this.off.bind(this));
                return "string" == typeof t && null == n && (e = void 0), this.on(r, e, n);
              }),
                (u.listenToOnce = function (t, e, n) {
                  var r = c(p, {}, e, n, this.stopListening.bind(this, t));
                  return this.listenTo(t, r);
                });
              var p = function (t, e, r, i) {
                if (r) {
                  var s = (t[e] = n.once(function () {
                    i(e, s), r.apply(this, arguments);
                  }));
                  s._callback = r;
                }
                return t;
              };
              u.trigger = function (t) {
                if (!this._events) return this;
                for (var e = Math.max(0, arguments.length - 1), n = Array(e), r = 0; r < e; r++) n[r] = arguments[r + 1];
                return c(d, this._events, t, void 0, n), this;
              };
              var d = function (t, e, n, r) {
                  if (t) {
                    var i = t[e],
                      s = t.all;
                    i && s && (s = s.slice()), i && v(i, r), s && v(s, [e].concat(r));
                  }
                  return t;
                },
                v = function (t, e) {
                  var n,
                    r = -1,
                    i = t.length,
                    s = e[0],
                    o = e[1],
                    u = e[2];
                  switch (e.length) {
                    case 0:
                      for (; ++r < i; ) (n = t[r]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, s);
                      return;
                    case 2:
                      for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, s, o);
                      return;
                    case 3:
                      for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, s, o, u);
                      return;
                    default:
                      for (; ++r < i; ) (n = t[r]).callback.apply(n.ctx, e);
                      return;
                  }
                },
                g = function (t, e) {
                  (this.id = t._listenId),
                    (this.listener = t),
                    (this.obj = e),
                    (this.interop = !0),
                    (this.count = 0),
                    (this._events = void 0);
                };
              (g.prototype.on = u.on),
                (g.prototype.off = function (t, e) {
                  var n;
                  this.interop
                    ? ((this._events = c(f, this._events, t, e, { context: void 0, listeners: void 0 })), (n = !this._events))
                    : (this.count--, (n = 0 === this.count)),
                    n && this.cleanup();
                }),
                (g.prototype.cleanup = function () {
                  delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                }),
                (u.bind = u.on),
                (u.unbind = u.off),
                n.extend(e, u);
              var m = (e.Model = function (t, e) {
                var r = t || {};
                e || (e = {}),
                  this.preinitialize.apply(this, arguments),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  e.collection && (this.collection = e.collection),
                  e.parse && (r = this.parse(r, e) || {});
                var i = n.result(this, "defaults");
                (r = n.defaults(n.extend({}, i, r), i)), this.set(r, e), (this.changed = {}), this.initialize.apply(this, arguments);
              });
              n.extend(m.prototype, u, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                cidPrefix: "c",
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (t) {
                  return n.clone(this.attributes);
                },
                sync: function () {
                  return e.sync.apply(this, arguments);
                },
                get: function (t) {
                  return this.attributes[t];
                },
                escape: function (t) {
                  return n.escape(this.get(t));
                },
                has: function (t) {
                  return null != this.get(t);
                },
                matches: function (t) {
                  return !!n.iteratee(t, this)(this.attributes);
                },
                set: function (t, e, r) {
                  if (null == t) return this;
                  var i;
                  if (("object" == typeof t ? ((i = t), (r = e)) : ((i = {})[t] = e), r || (r = {}), !this._validate(i, r))) return !1;
                  var s = r.unset,
                    o = r.silent,
                    u = [],
                    a = this._changing;
                  (this._changing = !0), a || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var c = this.attributes,
                    l = this.changed,
                    h = this._previousAttributes;
                  for (var f in i)
                    (e = i[f]),
                      n.isEqual(c[f], e) || u.push(f),
                      n.isEqual(h[f], e) ? delete l[f] : (l[f] = e),
                      s ? delete c[f] : (c[f] = e);
                  if ((this.idAttribute in i && (this.id = this.get(this.idAttribute)), !o)) {
                    u.length && (this._pending = r);
                    for (var p = 0; p < u.length; p++) this.trigger("change:" + u[p], this, c[u[p]], r);
                  }
                  if (a) return this;
                  if (!o) for (; this._pending; ) (r = this._pending), (this._pending = !1), this.trigger("change", this, r);
                  return (this._pending = !1), (this._changing = !1), this;
                },
                unset: function (t, e) {
                  return this.set(t, void 0, n.extend({}, e, { unset: !0 }));
                },
                clear: function (t) {
                  var e = {};
                  for (var r in this.attributes) e[r] = void 0;
                  return this.set(e, n.extend({}, t, { unset: !0 }));
                },
                hasChanged: function (t) {
                  return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
                },
                changedAttributes: function (t) {
                  if (!t) return !!this.hasChanged() && n.clone(this.changed);
                  var e,
                    r = this._changing ? this._previousAttributes : this.attributes,
                    i = {};
                  for (var s in t) {
                    var o = t[s];
                    n.isEqual(r[s], o) || ((i[s] = o), (e = !0));
                  }
                  return !!e && i;
                },
                previous: function (t) {
                  return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
                },
                previousAttributes: function () {
                  return n.clone(this._previousAttributes);
                },
                fetch: function (t) {
                  t = n.extend({ parse: !0 }, t);
                  var e = this,
                    r = t.success;
                  return (
                    (t.success = function (n) {
                      var i = t.parse ? e.parse(n, t) : n;
                      if (!e.set(i, t)) return !1;
                      r && r.call(t.context, e, n, t), e.trigger("sync", e, n, t);
                    }),
                    L(this, t),
                    this.sync("read", this, t)
                  );
                },
                save: function (t, e, r) {
                  var i;
                  null == t || "object" == typeof t ? ((i = t), (r = e)) : ((i = {})[t] = e);
                  var s = (r = n.extend({ validate: !0, parse: !0 }, r)).wait;
                  if (i && !s) {
                    if (!this.set(i, r)) return !1;
                  } else if (!this._validate(i, r)) return !1;
                  var o = this,
                    u = r.success,
                    a = this.attributes;
                  (r.success = function (t) {
                    o.attributes = a;
                    var e = r.parse ? o.parse(t, r) : t;
                    if ((s && (e = n.extend({}, i, e)), e && !o.set(e, r))) return !1;
                    u && u.call(r.context, o, t, r), o.trigger("sync", o, t, r);
                  }),
                    L(this, r),
                    i && s && (this.attributes = n.extend({}, a, i));
                  var c = this.isNew() ? "create" : r.patch ? "patch" : "update";
                  "patch" !== c || r.attrs || (r.attrs = i);
                  var l = this.sync(c, this, r);
                  return (this.attributes = a), l;
                },
                destroy: function (t) {
                  t = t ? n.clone(t) : {};
                  var e = this,
                    r = t.success,
                    i = t.wait,
                    s = function () {
                      e.stopListening(), e.trigger("destroy", e, e.collection, t);
                    };
                  t.success = function (n) {
                    i && s(), r && r.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t);
                  };
                  var o = !1;
                  return this.isNew() ? n.defer(t.success) : (L(this, t), (o = this.sync("delete", this, t))), i || s(), o;
                },
                url: function () {
                  var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                  if (this.isNew()) return t;
                  var e = this.get(this.idAttribute);
                  return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
                },
                parse: function (t, e) {
                  return t;
                },
                clone: function () {
                  return new this.constructor(this.attributes);
                },
                isNew: function () {
                  return !this.has(this.idAttribute);
                },
                isValid: function (t) {
                  return this._validate({}, n.extend({}, t, { validate: !0 }));
                },
                _validate: function (t, e) {
                  if (!e.validate || !this.validate) return !0;
                  t = n.extend({}, this.attributes, t);
                  var r = (this.validationError = this.validate(t, e) || null);
                  return !r || (this.trigger("invalid", this, r, n.extend(e, { validationError: r })), !1);
                }
              });
              var y = (e.Collection = function (t, e) {
                  e || (e = {}),
                    this.preinitialize.apply(this, arguments),
                    e.model && (this.model = e.model),
                    void 0 !== e.comparator && (this.comparator = e.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    t && this.reset(t, n.extend({ silent: !0 }, e));
                }),
                b = { add: !0, remove: !0, merge: !0 },
                _ = { add: !0, remove: !1 },
                x = function (t, e, n) {
                  n = Math.min(Math.max(n, 0), t.length);
                  var r,
                    i = Array(t.length - n),
                    s = e.length;
                  for (r = 0; r < i.length; r++) i[r] = t[r + n];
                  for (r = 0; r < s; r++) t[r + n] = e[r];
                  for (r = 0; r < i.length; r++) t[r + s + n] = i[r];
                };
              n.extend(y.prototype, u, {
                model: m,
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (t) {
                  return this.map(function (e) {
                    return e.toJSON(t);
                  });
                },
                sync: function () {
                  return e.sync.apply(this, arguments);
                },
                add: function (t, e) {
                  return this.set(t, n.extend({ merge: !1 }, e, _));
                },
                remove: function (t, e) {
                  e = n.extend({}, e);
                  var r = !n.isArray(t);
                  t = r ? [t] : t.slice();
                  var i = this._removeModels(t, e);
                  return (
                    !e.silent && i.length && ((e.changes = { added: [], merged: [], removed: i }), this.trigger("update", this, e)),
                    r ? i[0] : i
                  );
                },
                set: function (t, e) {
                  if (null != t) {
                    (e = n.extend({}, b, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                    var r = !n.isArray(t);
                    t = r ? [t] : t.slice();
                    var i = e.at;
                    null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
                    var s,
                      o,
                      u = [],
                      a = [],
                      c = [],
                      l = [],
                      h = {},
                      f = e.add,
                      p = e.merge,
                      d = e.remove,
                      v = !1,
                      g = this.comparator && null == i && !1 !== e.sort,
                      m = n.isString(this.comparator) ? this.comparator : null;
                    for (o = 0; o < t.length; o++) {
                      s = t[o];
                      var y = this.get(s);
                      if (y) {
                        if (p && s !== y) {
                          var _ = this._isModel(s) ? s.attributes : s;
                          e.parse && (_ = y.parse(_, e)), y.set(_, e), c.push(y), g && !v && (v = y.hasChanged(m));
                        }
                        h[y.cid] || ((h[y.cid] = !0), u.push(y)), (t[o] = y);
                      } else
                        f && (s = t[o] = this._prepareModel(s, e)) && (a.push(s), this._addReference(s, e), (h[s.cid] = !0), u.push(s));
                    }
                    if (d) {
                      for (o = 0; o < this.length; o++) h[(s = this.models[o]).cid] || l.push(s);
                      l.length && this._removeModels(l, e);
                    }
                    var w = !1,
                      k = !g && f && d;
                    if (
                      (u.length && k
                        ? ((w =
                            this.length !== u.length ||
                            n.some(this.models, function (t, e) {
                              return t !== u[e];
                            })),
                          (this.models.length = 0),
                          x(this.models, u, 0),
                          (this.length = this.models.length))
                        : a.length && (g && (v = !0), x(this.models, a, null == i ? this.length : i), (this.length = this.models.length)),
                      v && this.sort({ silent: !0 }),
                      !e.silent)
                    ) {
                      for (o = 0; o < a.length; o++) null != i && (e.index = i + o), (s = a[o]).trigger("add", s, this, e);
                      (v || w) && this.trigger("sort", this, e),
                        (a.length || l.length || c.length) &&
                          ((e.changes = { added: a, removed: l, merged: c }), this.trigger("update", this, e));
                    }
                    return r ? t[0] : t;
                  }
                },
                reset: function (t, e) {
                  e = e ? n.clone(e) : {};
                  for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], e);
                  return (
                    (e.previousModels = this.models),
                    this._reset(),
                    (t = this.add(t, n.extend({ silent: !0 }, e))),
                    e.silent || this.trigger("reset", this, e),
                    t
                  );
                },
                push: function (t, e) {
                  return this.add(t, n.extend({ at: this.length }, e));
                },
                pop: function (t) {
                  var e = this.at(this.length - 1);
                  return this.remove(e, t);
                },
                unshift: function (t, e) {
                  return this.add(t, n.extend({ at: 0 }, e));
                },
                shift: function (t) {
                  var e = this.at(0);
                  return this.remove(e, t);
                },
                slice: function () {
                  return s.apply(this.models, arguments);
                },
                get: function (t) {
                  if (null != t)
                    return this._byId[t] || this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] || (t.cid && this._byId[t.cid]);
                },
                has: function (t) {
                  return null != this.get(t);
                },
                at: function (t) {
                  return t < 0 && (t += this.length), this.models[t];
                },
                where: function (t, e) {
                  return this[e ? "find" : "filter"](t);
                },
                findWhere: function (t) {
                  return this.where(t, !0);
                },
                sort: function (t) {
                  var e = this.comparator;
                  if (!e) throw new Error("Cannot sort a set without a comparator");
                  t || (t = {});
                  var r = e.length;
                  return (
                    n.isFunction(e) && (e = e.bind(this)),
                    1 === r || n.isString(e) ? (this.models = this.sortBy(e)) : this.models.sort(e),
                    t.silent || this.trigger("sort", this, t),
                    this
                  );
                },
                pluck: function (t) {
                  return this.map(t + "");
                },
                fetch: function (t) {
                  var e = (t = n.extend({ parse: !0 }, t)).success,
                    r = this;
                  return (
                    (t.success = function (n) {
                      var i = t.reset ? "reset" : "set";
                      r[i](n, t), e && e.call(t.context, r, n, t), r.trigger("sync", r, n, t);
                    }),
                    L(this, t),
                    this.sync("read", this, t)
                  );
                },
                create: function (t, e) {
                  var r = (e = e ? n.clone(e) : {}).wait;
                  if (!(t = this._prepareModel(t, e))) return !1;
                  r || this.add(t, e);
                  var i = this,
                    s = e.success;
                  return (
                    (e.success = function (t, e, n) {
                      r && i.add(t, n), s && s.call(n.context, t, e, n);
                    }),
                    t.save(null, e),
                    t
                  );
                },
                parse: function (t, e) {
                  return t;
                },
                clone: function () {
                  return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
                },
                modelId: function (t) {
                  return t[this.model.prototype.idAttribute || "id"];
                },
                values: function () {
                  return new k(this, j);
                },
                keys: function () {
                  return new k(this, E);
                },
                entries: function () {
                  return new k(this, S);
                },
                _reset: function () {
                  (this.length = 0), (this.models = []), (this._byId = {});
                },
                _prepareModel: function (t, e) {
                  if (this._isModel(t)) return t.collection || (t.collection = this), t;
                  (e = e ? n.clone(e) : {}).collection = this;
                  var r = new this.model(t, e);
                  return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r;
                },
                _removeModels: function (t, e) {
                  for (var n = [], r = 0; r < t.length; r++) {
                    var i = this.get(t[r]);
                    if (i) {
                      var s = this.indexOf(i);
                      this.models.splice(s, 1), this.length--, delete this._byId[i.cid];
                      var o = this.modelId(i.attributes);
                      null != o && delete this._byId[o],
                        e.silent || ((e.index = s), i.trigger("remove", i, this, e)),
                        n.push(i),
                        this._removeReference(i, e);
                    }
                  }
                  return n;
                },
                _isModel: function (t) {
                  return t instanceof m;
                },
                _addReference: function (t, e) {
                  this._byId[t.cid] = t;
                  var n = this.modelId(t.attributes);
                  null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this);
                },
                _removeReference: function (t, e) {
                  delete this._byId[t.cid];
                  var n = this.modelId(t.attributes);
                  null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
                },
                _onModelEvent: function (t, e, n, r) {
                  if (e) {
                    if (("add" === t || "remove" === t) && n !== this) return;
                    if (("destroy" === t && this.remove(e, r), "change" === t)) {
                      var i = this.modelId(e.previousAttributes()),
                        s = this.modelId(e.attributes);
                      i !== s && (null != i && delete this._byId[i], null != s && (this._byId[s] = e));
                    }
                  }
                  this.trigger.apply(this, arguments);
                }
              });
              var w = "function" == typeof Symbol && Symbol.iterator;
              w && (y.prototype[w] = y.prototype.values);
              var k = function (t, e) {
                  (this._collection = t), (this._kind = e), (this._index = 0);
                },
                j = 1,
                E = 2,
                S = 3;
              w &&
                (k.prototype[w] = function () {
                  return this;
                }),
                (k.prototype.next = function () {
                  if (this._collection) {
                    if (this._index < this._collection.length) {
                      var t,
                        e = this._collection.at(this._index);
                      if ((this._index++, this._kind === j)) t = e;
                      else {
                        var n = this._collection.modelId(e.attributes);
                        t = this._kind === E ? n : [n, e];
                      }
                      return { value: t, done: !1 };
                    }
                    this._collection = void 0;
                  }
                  return { value: void 0, done: !0 };
                });
              var C = (e.View = function (t) {
                  (this.cid = n.uniqueId("view")),
                    this.preinitialize.apply(this, arguments),
                    n.extend(this, n.pick(t, O)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                M = /^(\S+)\s*(.*)$/,
                O = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
              n.extend(C.prototype, u, {
                tagName: "div",
                $: function (t) {
                  return this.$el.find(t);
                },
                preinitialize: function () {},
                initialize: function () {},
                render: function () {
                  return this;
                },
                remove: function () {
                  return this._removeElement(), this.stopListening(), this;
                },
                _removeElement: function () {
                  this.$el.remove();
                },
                setElement: function (t) {
                  return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
                },
                _setElement: function (t) {
                  (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
                },
                delegateEvents: function (t) {
                  if ((t || (t = n.result(this, "events")), !t)) return this;
                  for (var e in (this.undelegateEvents(), t)) {
                    var r = t[e];
                    if ((n.isFunction(r) || (r = this[r]), r)) {
                      var i = e.match(M);
                      this.delegate(i[1], i[2], r.bind(this));
                    }
                  }
                  return this;
                },
                delegate: function (t, e, n) {
                  return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this;
                },
                undelegateEvents: function () {
                  return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
                },
                undelegate: function (t, e, n) {
                  return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this;
                },
                _createElement: function (t) {
                  return document.createElement(t);
                },
                _ensureElement: function () {
                  if (this.el) this.setElement(n.result(this, "el"));
                  else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")),
                      this.className && (t.class = n.result(this, "className")),
                      this.setElement(this._createElement(n.result(this, "tagName"))),
                      this._setAttributes(t);
                  }
                },
                _setAttributes: function (t) {
                  this.$el.attr(t);
                }
              });
              var T = function (t, e, r, i) {
                  n.each(r, function (n, r) {
                    e[r] &&
                      (t.prototype[r] = (function (t, e, n, r) {
                        switch (e) {
                          case 1:
                            return function () {
                              return t[n](this[r]);
                            };
                          case 2:
                            return function (e) {
                              return t[n](this[r], e);
                            };
                          case 3:
                            return function (e, i) {
                              return t[n](this[r], A(e, this), i);
                            };
                          case 4:
                            return function (e, i, s) {
                              return t[n](this[r], A(e, this), i, s);
                            };
                          default:
                            return function () {
                              var e = s.call(arguments);
                              return e.unshift(this[r]), t[n].apply(t, e);
                            };
                        }
                      })(e, n, r, i));
                  });
                },
                A = function (t, e) {
                  return n.isFunction(t)
                    ? t
                    : n.isObject(t) && !e._isModel(t)
                    ? I(t)
                    : n.isString(t)
                    ? function (e) {
                        return e.get(t);
                      }
                    : t;
                },
                I = function (t) {
                  var e = n.matches(t);
                  return function (t) {
                    return e(t.attributes);
                  };
                };
              n.each(
                [
                  [
                    y,
                    {
                      forEach: 3,
                      each: 3,
                      map: 3,
                      collect: 3,
                      reduce: 0,
                      foldl: 0,
                      inject: 0,
                      reduceRight: 0,
                      foldr: 0,
                      find: 3,
                      detect: 3,
                      filter: 3,
                      select: 3,
                      reject: 3,
                      every: 3,
                      all: 3,
                      some: 3,
                      any: 3,
                      include: 3,
                      includes: 3,
                      contains: 3,
                      invoke: 0,
                      max: 3,
                      min: 3,
                      toArray: 1,
                      size: 1,
                      first: 3,
                      head: 3,
                      take: 3,
                      initial: 3,
                      rest: 3,
                      tail: 3,
                      drop: 3,
                      last: 3,
                      without: 0,
                      difference: 0,
                      indexOf: 3,
                      shuffle: 1,
                      lastIndexOf: 3,
                      isEmpty: 1,
                      chain: 1,
                      sample: 3,
                      partition: 3,
                      groupBy: 3,
                      countBy: 3,
                      sortBy: 3,
                      indexBy: 3,
                      findIndex: 3,
                      findLastIndex: 3
                    },
                    "models"
                  ],
                  [m, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"]
                ],
                function (t) {
                  var e = t[0],
                    r = t[1],
                    i = t[2];
                  (e.mixin = function (t) {
                    var r = n.reduce(
                      n.functions(t),
                      function (t, e) {
                        return (t[e] = 0), t;
                      },
                      {}
                    );
                    T(e, t, r, i);
                  }),
                    T(e, n, r, i);
                }
              ),
                (e.sync = function (t, r, i) {
                  var s = R[t];
                  n.defaults(i || (i = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });
                  var o = { type: s, dataType: "json" };
                  if (
                    (i.url || (o.url = n.result(r, "url") || F()),
                    null != i.data ||
                      !r ||
                      ("create" !== t && "update" !== t && "patch" !== t) ||
                      ((o.contentType = "application/json"), (o.data = JSON.stringify(i.attrs || r.toJSON(i)))),
                    i.emulateJSON && ((o.contentType = "application/x-www-form-urlencoded"), (o.data = o.data ? { model: o.data } : {})),
                    i.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s))
                  ) {
                    (o.type = "POST"), i.emulateJSON && (o.data._method = s);
                    var u = i.beforeSend;
                    i.beforeSend = function (t) {
                      if ((t.setRequestHeader("X-HTTP-Method-Override", s), u)) return u.apply(this, arguments);
                    };
                  }
                  "GET" === o.type || i.emulateJSON || (o.processData = !1);
                  var a = i.error;
                  i.error = function (t, e, n) {
                    (i.textStatus = e), (i.errorThrown = n), a && a.call(i.context, t, e, n);
                  };
                  var c = (i.xhr = e.ajax(n.extend(o, i)));
                  return r.trigger("request", r, c, i), c;
                });
              var R = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
              e.ajax = function () {
                return e.$.ajax.apply(e.$, arguments);
              };
              var P = (e.Router = function (t) {
                  t || (t = {}),
                    this.preinitialize.apply(this, arguments),
                    t.routes && (this.routes = t.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                N = /\((.*?)\)/g,
                B = /(\(\?)?:\w+/g,
                q = /\*\w+/g,
                $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(P.prototype, u, {
                preinitialize: function () {},
                initialize: function () {},
                route: function (t, r, i) {
                  n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(r) && ((i = r), (r = "")), i || (i = this[r]);
                  var s = this;
                  return (
                    e.history.route(t, function (n) {
                      var o = s._extractParameters(t, n);
                      !1 !== s.execute(i, o, r) &&
                        (s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), e.history.trigger("route", s, r, o));
                    }),
                    this
                  );
                },
                execute: function (t, e, n) {
                  t && t.apply(this, e);
                },
                navigate: function (t, n) {
                  return e.history.navigate(t, n), this;
                },
                _bindRoutes: function () {
                  if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
                  }
                },
                _routeToRegExp: function (t) {
                  return (
                    (t = t
                      .replace($, "\\$&")
                      .replace(N, "(?:$1)?")
                      .replace(B, function (t, e) {
                        return e ? t : "([^/?]+)";
                      })
                      .replace(q, "([^?]*?)")),
                    new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                  );
                },
                _extractParameters: function (t, e) {
                  var r = t.exec(e).slice(1);
                  return n.map(r, function (t, e) {
                    return e === r.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
                  });
                }
              });
              var H = (e.History = function () {
                  (this.handlers = []),
                    (this.checkUrl = this.checkUrl.bind(this)),
                    "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                }),
                D = /^[#\/]|\s+$/g,
                U = /^\/+|\/+$/g,
                z = /#.*$/;
              (H.started = !1),
                n.extend(H.prototype, u, {
                  interval: 50,
                  atRoot: function () {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
                  },
                  matchRoot: function () {
                    return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
                  },
                  decodeFragment: function (t) {
                    return decodeURI(t.replace(/%25/g, "%2525"));
                  },
                  getSearch: function () {
                    var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return t ? t[0] : "";
                  },
                  getHash: function (t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : "";
                  },
                  getPath: function () {
                    var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === t.charAt(0) ? t.slice(1) : t;
                  },
                  getFragment: function (t) {
                    return (
                      null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(D, "")
                    );
                  },
                  start: function (t) {
                    if (H.started) throw new Error("Backbone.history has already been started");
                    if (
                      ((H.started = !0),
                      (this.options = n.extend({ root: "/" }, this.options, t)),
                      (this.root = this.options.root),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ("/" + this.root + "/").replace(U, "/")),
                      this._wantsHashChange && this._wantsPushState)
                    ) {
                      if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()), !0;
                      }
                      this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                      (this.iframe = document.createElement("iframe")),
                        (this.iframe.src = "javascript:0"),
                        (this.iframe.style.display = "none"),
                        (this.iframe.tabIndex = -1);
                      var r = document.body,
                        i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                      i.document.open(), i.document.close(), (i.location.hash = "#" + this.fragment);
                    }
                    var s =
                      window.addEventListener ||
                      function (t, e) {
                        return attachEvent("on" + t, e);
                      };
                    if (
                      (this._usePushState
                        ? s("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? s("hashchange", this.checkUrl, !1)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                      !this.options.silent)
                    )
                      return this.loadUrl();
                  },
                  stop: function () {
                    var t =
                      window.removeEventListener ||
                      function (t, e) {
                        return detachEvent("on" + t, e);
                      };
                    this._usePushState
                      ? t("popstate", this.checkUrl, !1)
                      : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
                      this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                      this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                      (H.started = !1);
                  },
                  route: function (t, e) {
                    this.handlers.unshift({ route: t, callback: e });
                  },
                  checkUrl: function (t) {
                    var e = this.getFragment();
                    if ((e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment))
                      return !1;
                    this.iframe && this.navigate(e), this.loadUrl();
                  },
                  loadUrl: function (t) {
                    return (
                      !!this.matchRoot() &&
                      ((t = this.fragment = this.getFragment(t)),
                      n.some(this.handlers, function (e) {
                        if (e.route.test(t)) return e.callback(t), !0;
                      }))
                    );
                  },
                  navigate: function (t, e) {
                    if (!H.started) return !1;
                    (e && !0 !== e) || (e = { trigger: !!e }), (t = this.getFragment(t || ""));
                    var n = this.root;
                    ("" !== t && "?" !== t.charAt(0)) || (n = n.slice(0, -1) || "/");
                    var r = n + t;
                    t = t.replace(z, "");
                    var i = this.decodeFragment(t);
                    if (this.fragment !== i) {
                      if (((this.fragment = i), this._usePushState))
                        this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
                      else {
                        if (!this._wantsHashChange) return this.location.assign(r);
                        if ((this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow))) {
                          var s = this.iframe.contentWindow;
                          e.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, t, e.replace);
                        }
                      }
                      return e.trigger ? this.loadUrl(t) : void 0;
                    }
                  },
                  _updateHash: function (t, e, n) {
                    if (n) {
                      var r = t.href.replace(/(javascript:|#).*$/, "");
                      t.replace(r + "#" + e);
                    } else t.hash = "#" + e;
                  }
                }),
                (e.history = new H());
              m.extend =
                y.extend =
                P.extend =
                C.extend =
                H.extend =
                  function (t, e) {
                    var r,
                      i = this;
                    return (
                      (r =
                        t && n.has(t, "constructor")
                          ? t.constructor
                          : function () {
                              return i.apply(this, arguments);
                            }),
                      n.extend(r, i, e),
                      (r.prototype = n.create(i.prototype, t)),
                      (r.prototype.constructor = r),
                      (r.__super__ = i.prototype),
                      r
                    );
                  };
              var F = function () {
                  throw new Error('A "url" property or function must be specified');
                },
                L = function (t, e) {
                  var n = e.error;
                  e.error = function (r) {
                    n && n.call(e.context, t, r, e), t.trigger("error", t, r, e);
                  };
                };
              return e;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { jquery: "jquery", underscore: 17 }
    ],
    11: [
      function (t, e, n) {
        "use strict";
        e.exports = t("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 12 }
    ],
    12: [
      function (t, e, n) {
        "use strict";
        var r = t("@babel/runtime/helpers/interopRequireDefault"),
          i = r(t("@babel/runtime/helpers/classCallCheck")),
          s = r(t("@babel/runtime/helpers/createClass")),
          o = r(t("@babel/runtime/helpers/assertThisInitialized")),
          u = r(t("@babel/runtime/helpers/inherits")),
          a = r(t("@babel/runtime/helpers/possibleConstructorReturn")),
          c = r(t("@babel/runtime/helpers/getPrototypeOf"));
        function l(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, c.default)(t);
            if (e) {
              var i = (0, c.default)(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return (0, a.default)(this, n);
          };
        }
        var h = t("./Messenger"),
          f = t("./ContentTopic"),
          p = t("./chrome"),
          d = (function (t) {
            (0, u.default)(n, t);
            var e = l(n);
            function n() {
              var t;
              (0, i.default)(this, n);
              var r = (t = e.call(this, f))._onMessage.bind((0, o.default)(t));
              return (
                p.runtime.onMessage.addListener(r),
                window.addEventListener("unload", function () {
                  p.runtime.onMessage.removeListener(r);
                }),
                p.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(t._onDisconnect.bind((0, o.default)(t))),
                t
              );
            }
            return (
              (0, s.default)(n, [
                {
                  key: "_onMessage",
                  value: function (t, e, n) {
                    if (!e.tab && t.publish) {
                      var r = this._getTopic(t.publish);
                      r && r.publish(t.message, n);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onDisconnect",
                  value: function () {
                    var t = this._getTopic("Background:closed");
                    t && t.publish();
                  }
                },
                {
                  key: "publish",
                  value: function (t, e, n) {
                    var r = 10;
                    !(function i() {
                      p.runtime.sendMessage({ publish: t, message: e }, function (t) {
                        var e = p.runtime.lastError;
                        e && "Could not establish connection. Receiving end does not exist." === e.message
                          ? (r -= 1) && setTimeout(i, 50)
                          : "function" == typeof n && n(t);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(h);
        e.exports = d;
      },
      {
        "./ContentTopic": 13,
        "./Messenger": 14,
        "./chrome": 16,
        "@babel/runtime/helpers/assertThisInitialized": 1,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/getPrototypeOf": 4,
        "@babel/runtime/helpers/inherits": 5,
        "@babel/runtime/helpers/interopRequireDefault": 6,
        "@babel/runtime/helpers/possibleConstructorReturn": 7
      }
    ],
    13: [
      function (t, e, n) {
        "use strict";
        var r = t("@babel/runtime/helpers/interopRequireDefault"),
          i = r(t("@babel/runtime/helpers/classCallCheck")),
          s = r(t("@babel/runtime/helpers/inherits")),
          o = r(t("@babel/runtime/helpers/possibleConstructorReturn")),
          u = r(t("@babel/runtime/helpers/getPrototypeOf"));
        function a(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, u.default)(t);
            if (e) {
              var i = (0, u.default)(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return (0, o.default)(this, n);
          };
        }
        var c = t("./Topic"),
          l = t("./chrome"),
          h = (function (t) {
            (0, s.default)(n, t);
            var e = a(n);
            function n(t) {
              var r;
              return (0, i.default)(this, n), (r = e.call(this, t)), l.runtime.sendMessage({ subscribe: t }), r;
            }
            return n;
          })(c);
        e.exports = h;
      },
      {
        "./Topic": 15,
        "./chrome": 16,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/getPrototypeOf": 4,
        "@babel/runtime/helpers/inherits": 5,
        "@babel/runtime/helpers/interopRequireDefault": 6,
        "@babel/runtime/helpers/possibleConstructorReturn": 7
      }
    ],
    14: [
      function (t, e, n) {
        "use strict";
        var r = t("@babel/runtime/helpers/interopRequireDefault"),
          i = r(t("@babel/runtime/helpers/classCallCheck")),
          s = r(t("@babel/runtime/helpers/createClass")),
          o = (function () {
            function t(e) {
              (0, i.default)(this, t), (this._topicClass = e), (this._topics = {});
            }
            return (
              (0, s.default)(
                t,
                [
                  {
                    key: "_getTopic",
                    value: function (t, e) {
                      var n = this._topics[t];
                      return !n && e && (this._topics[t] = n = new this._topicClass(t)), n;
                    }
                  },
                  {
                    key: "subscribe",
                    value: function (t, e) {
                      this._getTopic(t, !0).subscribe(e);
                    }
                  },
                  {
                    key: "publish",
                    value: function (t, e, n, r) {
                      var i = this._getTopic(t);
                      i && i.publish(e, n, r);
                    }
                  }
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return this._instance || (this._instance = new this()), this._instance;
                    }
                  }
                ]
              ),
              t
            );
          })();
        e.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 6
      }
    ],
    15: [
      function (t, e, n) {
        "use strict";
        var r = t("@babel/runtime/helpers/interopRequireDefault"),
          i = r(t("@babel/runtime/helpers/classCallCheck")),
          s = r(t("@babel/runtime/helpers/createClass")),
          o = (function () {
            function t(e) {
              (0, i.default)(this, t), (this._name = e), (this._callbacks = []);
            }
            return (
              (0, s.default)(t, [
                {
                  key: "publish",
                  value: function (t, e) {
                    var n = this._wrapCallback(e);
                    this._callbacks.forEach(function (e) {
                      return e(t, n);
                    });
                  }
                },
                {
                  key: "_wrapCallback",
                  value: function (t) {
                    return null == t
                      ? t
                      : function () {
                          try {
                            t.apply(void 0, arguments);
                          } catch (t) {
                            if ("Attempting to use a disconnected port object" !== t.message) throw t;
                          }
                        };
                  }
                },
                {
                  key: "subscribe",
                  value: function (t) {
                    this._callbacks.push(t);
                  }
                }
              ]),
              t
            );
          })();
        e.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 6
      }
    ],
    16: [
      function (t, e, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (e.exports = browser) : (e.exports = chrome);
      },
      {}
    ],
    17: [
      function (t, e, n) {
        (function (t) {
          (function () {
            !(function (t, r) {
              "object" == typeof n && void 0 !== e
                ? (e.exports = r())
                : "function" == typeof define && define.amd
                ? define("underscore", r)
                : ((t = "undefined" != typeof globalThis ? globalThis : t || self),
                  (function () {
                    var e = t._,
                      n = (t._ = r());
                    n.noConflict = function () {
                      return (t._ = e), n;
                    };
                  })());
            })(this, function () {
              var e = "1.13.1",
                n =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof t && t.global === t && t) ||
                  Function("return this")() ||
                  {},
                r = Array.prototype,
                i = Object.prototype,
                s = "undefined" != typeof Symbol ? Symbol.prototype : null,
                o = r.push,
                u = r.slice,
                a = i.toString,
                c = i.hasOwnProperty,
                l = "undefined" != typeof ArrayBuffer,
                h = "undefined" != typeof DataView,
                f = Array.isArray,
                p = Object.keys,
                d = Object.create,
                v = l && ArrayBuffer.isView,
                g = isNaN,
                m = isFinite,
                y = !{ toString: null }.propertyIsEnumerable("toString"),
                b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                _ = Math.pow(2, 53) - 1;
              function x(t, e) {
                return (
                  (e = null == e ? t.length - 1 : +e),
                  function () {
                    for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];
                    switch (e) {
                      case 0:
                        return t.call(this, r);
                      case 1:
                        return t.call(this, arguments[0], r);
                      case 2:
                        return t.call(this, arguments[0], arguments[1], r);
                    }
                    var s = Array(e + 1);
                    for (i = 0; i < e; i++) s[i] = arguments[i];
                    return (s[e] = r), t.apply(this, s);
                  }
                );
              }
              function w(t) {
                var e = typeof t;
                return "function" === e || ("object" === e && !!t);
              }
              function k(t) {
                return void 0 === t;
              }
              function j(t) {
                return !0 === t || !1 === t || "[object Boolean]" === a.call(t);
              }
              function E(t) {
                var e = "[object " + t + "]";
                return function (t) {
                  return a.call(t) === e;
                };
              }
              var S = E("String"),
                C = E("Number"),
                M = E("Date"),
                O = E("RegExp"),
                T = E("Error"),
                A = E("Symbol"),
                I = E("ArrayBuffer"),
                R = E("Function"),
                P = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof P &&
                (R = function (t) {
                  return "function" == typeof t || !1;
                });
              var N = R,
                B = E("Object"),
                q = h && B(new DataView(new ArrayBuffer(8))),
                $ = "undefined" != typeof Map && B(new Map()),
                H = E("DataView");
              var D = q
                  ? function (t) {
                      return null != t && N(t.getInt8) && I(t.buffer);
                    }
                  : H,
                U = f || E("Array");
              function z(t, e) {
                return null != t && c.call(t, e);
              }
              var F = E("Arguments");
              !(function () {
                F(arguments) ||
                  (F = function (t) {
                    return z(t, "callee");
                  });
              })();
              var L = F;
              function J(t) {
                return C(t) && g(t);
              }
              function V(t) {
                return function () {
                  return t;
                };
              }
              function W(t) {
                return function (e) {
                  var n = t(e);
                  return "number" == typeof n && n >= 0 && n <= _;
                };
              }
              function G(t) {
                return function (e) {
                  return null == e ? void 0 : e[t];
                };
              }
              var K = G("byteLength"),
                Q = W(K),
                X = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var Z = l
                  ? function (t) {
                      return v ? v(t) && !D(t) : Q(t) && X.test(a.call(t));
                    }
                  : V(!1),
                Y = G("length");
              function tt(t, e) {
                e = (function (t) {
                  for (var e = {}, n = t.length, r = 0; r < n; ++r) e[t[r]] = !0;
                  return {
                    contains: function (t) {
                      return e[t];
                    },
                    push: function (n) {
                      return (e[n] = !0), t.push(n);
                    }
                  };
                })(e);
                var n = b.length,
                  r = t.constructor,
                  s = (N(r) && r.prototype) || i,
                  o = "constructor";
                for (z(t, o) && !e.contains(o) && e.push(o); n--; ) (o = b[n]) in t && t[o] !== s[o] && !e.contains(o) && e.push(o);
              }
              function et(t) {
                if (!w(t)) return [];
                if (p) return p(t);
                var e = [];
                for (var n in t) z(t, n) && e.push(n);
                return y && tt(t, e), e;
              }
              function nt(t, e) {
                var n = et(e),
                  r = n.length;
                if (null == t) return !r;
                for (var i = Object(t), s = 0; s < r; s++) {
                  var o = n[s];
                  if (e[o] !== i[o] || !(o in i)) return !1;
                }
                return !0;
              }
              function rt(t) {
                return t instanceof rt ? t : this instanceof rt ? void (this._wrapped = t) : new rt(t);
              }
              function it(t) {
                return new Uint8Array(t.buffer || t, t.byteOffset || 0, K(t));
              }
              (rt.VERSION = e),
                (rt.prototype.value = function () {
                  return this._wrapped;
                }),
                (rt.prototype.valueOf = rt.prototype.toJSON = rt.prototype.value),
                (rt.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var st = "[object DataView]";
              function ot(t, e, n, r) {
                if (t === e) return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e) return !1;
                if (t != t) return e != e;
                var i = typeof t;
                return ("function" === i || "object" === i || "object" == typeof e) && ut(t, e, n, r);
              }
              function ut(t, e, n, r) {
                t instanceof rt && (t = t._wrapped), e instanceof rt && (e = e._wrapped);
                var i = a.call(t);
                if (i !== a.call(e)) return !1;
                if (q && "[object Object]" == i && D(t)) {
                  if (!D(e)) return !1;
                  i = st;
                }
                switch (i) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + t == "" + e;
                  case "[object Number]":
                    return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +t == +e;
                  case "[object Symbol]":
                    return s.valueOf.call(t) === s.valueOf.call(e);
                  case "[object ArrayBuffer]":
                  case st:
                    return ut(it(t), it(e), n, r);
                }
                var o = "[object Array]" === i;
                if (!o && Z(t)) {
                  if (K(t) !== K(e)) return !1;
                  if (t.buffer === e.buffer && t.byteOffset === e.byteOffset) return !0;
                  o = !0;
                }
                if (!o) {
                  if ("object" != typeof t || "object" != typeof e) return !1;
                  var u = t.constructor,
                    c = e.constructor;
                  if (u !== c && !(N(u) && u instanceof u && N(c) && c instanceof c) && "constructor" in t && "constructor" in e) return !1;
                }
                r = r || [];
                for (var l = (n = n || []).length; l--; ) if (n[l] === t) return r[l] === e;
                if ((n.push(t), r.push(e), o)) {
                  if ((l = t.length) !== e.length) return !1;
                  for (; l--; ) if (!ot(t[l], e[l], n, r)) return !1;
                } else {
                  var h,
                    f = et(t);
                  if (((l = f.length), et(e).length !== l)) return !1;
                  for (; l--; ) if (!z(e, (h = f[l])) || !ot(t[h], e[h], n, r)) return !1;
                }
                return n.pop(), r.pop(), !0;
              }
              function at(t) {
                if (!w(t)) return [];
                var e = [];
                for (var n in t) e.push(n);
                return y && tt(t, e), e;
              }
              function ct(t) {
                var e = Y(t);
                return function (n) {
                  if (null == n) return !1;
                  var r = at(n);
                  if (Y(r)) return !1;
                  for (var i = 0; i < e; i++) if (!N(n[t[i]])) return !1;
                  return t !== dt || !N(n[lt]);
                };
              }
              var lt = "forEach",
                ht = ["clear", "delete"],
                ft = ["get", "has", "set"],
                pt = ht.concat(lt, ft),
                dt = ht.concat(ft),
                vt = ["add"].concat(ht, lt, "has"),
                gt = $ ? ct(pt) : E("Map"),
                mt = $ ? ct(dt) : E("WeakMap"),
                yt = $ ? ct(vt) : E("Set"),
                bt = E("WeakSet");
              function _t(t) {
                for (var e = et(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                return r;
              }
              function xt(t) {
                for (var e = {}, n = et(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                return e;
              }
              function wt(t) {
                var e = [];
                for (var n in t) N(t[n]) && e.push(n);
                return e.sort();
              }
              function kt(t, e) {
                return function (n) {
                  var r = arguments.length;
                  if ((e && (n = Object(n)), r < 2 || null == n)) return n;
                  for (var i = 1; i < r; i++)
                    for (var s = arguments[i], o = t(s), u = o.length, a = 0; a < u; a++) {
                      var c = o[a];
                      (e && void 0 !== n[c]) || (n[c] = s[c]);
                    }
                  return n;
                };
              }
              var jt = kt(at),
                Et = kt(et),
                St = kt(at, !0);
              function Ct(t) {
                if (!w(t)) return {};
                if (d) return d(t);
                var e = function () {};
                e.prototype = t;
                var n = new e();
                return (e.prototype = null), n;
              }
              function Mt(t) {
                return w(t) ? (U(t) ? t.slice() : jt({}, t)) : t;
              }
              function Ot(t) {
                return U(t) ? t : [t];
              }
              function Tt(t) {
                return rt.toPath(t);
              }
              function At(t, e) {
                for (var n = e.length, r = 0; r < n; r++) {
                  if (null == t) return;
                  t = t[e[r]];
                }
                return n ? t : void 0;
              }
              function It(t, e, n) {
                var r = At(t, Tt(e));
                return k(r) ? n : r;
              }
              function Rt(t) {
                return t;
              }
              function Pt(t) {
                return (
                  (t = Et({}, t)),
                  function (e) {
                    return nt(e, t);
                  }
                );
              }
              function Nt(t) {
                return (
                  (t = Tt(t)),
                  function (e) {
                    return At(e, t);
                  }
                );
              }
              function Bt(t, e, n) {
                if (void 0 === e) return t;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return t.call(e, n);
                    };
                  case 3:
                    return function (n, r, i) {
                      return t.call(e, n, r, i);
                    };
                  case 4:
                    return function (n, r, i, s) {
                      return t.call(e, n, r, i, s);
                    };
                }
                return function () {
                  return t.apply(e, arguments);
                };
              }
              function qt(t, e, n) {
                return null == t ? Rt : N(t) ? Bt(t, e, n) : w(t) && !U(t) ? Pt(t) : Nt(t);
              }
              function $t(t, e) {
                return qt(t, e, 1 / 0);
              }
              function Ht(t, e, n) {
                return rt.iteratee !== $t ? rt.iteratee(t, e) : qt(t, e, n);
              }
              function Dt() {}
              function Ut(t, e) {
                return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
              }
              (rt.toPath = Ot), (rt.iteratee = $t);
              var zt =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Ft(t) {
                var e = function (e) {
                    return t[e];
                  },
                  n = "(?:" + et(t).join("|") + ")",
                  r = RegExp(n),
                  i = RegExp(n, "g");
                return function (t) {
                  return (t = null == t ? "" : "" + t), r.test(t) ? t.replace(i, e) : t;
                };
              }
              var Lt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Jt = Ft(Lt),
                Vt = Ft(xt(Lt)),
                Wt = (rt.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Gt = /(.)^/,
                Kt = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Qt = /\\|'|\r|\n|\u2028|\u2029/g;
              function Xt(t) {
                return "\\" + Kt[t];
              }
              var Zt = /^\s*(\w|\$)+\s*$/;
              var Yt = 0;
              function te(t, e, n, r, i) {
                if (!(r instanceof e)) return t.apply(n, i);
                var s = Ct(t.prototype),
                  o = t.apply(s, i);
                return w(o) ? o : s;
              }
              var ee = x(function (t, e) {
                var n = ee.placeholder,
                  r = function () {
                    for (var i = 0, s = e.length, o = Array(s), u = 0; u < s; u++) o[u] = e[u] === n ? arguments[i++] : e[u];
                    for (; i < arguments.length; ) o.push(arguments[i++]);
                    return te(t, r, this, this, o);
                  };
                return r;
              });
              ee.placeholder = rt;
              var ne = x(function (t, e, n) {
                  if (!N(t)) throw new TypeError("Bind must be called on a function");
                  var r = x(function (i) {
                    return te(t, r, e, this, n.concat(i));
                  });
                  return r;
                }),
                re = W(Y);
              function ie(t, e, n, r) {
                if (((r = r || []), e || 0 === e)) {
                  if (e <= 0) return r.concat(t);
                } else e = 1 / 0;
                for (var i = r.length, s = 0, o = Y(t); s < o; s++) {
                  var u = t[s];
                  if (re(u) && (U(u) || L(u)))
                    if (e > 1) ie(u, e - 1, n, r), (i = r.length);
                    else for (var a = 0, c = u.length; a < c; ) r[i++] = u[a++];
                  else n || (r[i++] = u);
                }
                return r;
              }
              var se = x(function (t, e) {
                var n = (e = ie(e, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var r = e[n];
                  t[r] = ne(t[r], t);
                }
                return t;
              });
              var oe = x(function (t, e, n) {
                  return setTimeout(function () {
                    return t.apply(null, n);
                  }, e);
                }),
                ue = ee(oe, rt, 1);
              function ae(t) {
                return function () {
                  return !t.apply(this, arguments);
                };
              }
              function ce(t, e) {
                var n;
                return function () {
                  return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
                };
              }
              var le = ee(ce, 2);
              function he(t, e, n) {
                e = Ht(e, n);
                for (var r, i = et(t), s = 0, o = i.length; s < o; s++) if (e(t[(r = i[s])], r, t)) return r;
              }
              function fe(t) {
                return function (e, n, r) {
                  n = Ht(n, r);
                  for (var i = Y(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t) if (n(e[s], s, e)) return s;
                  return -1;
                };
              }
              var pe = fe(1),
                de = fe(-1);
              function ve(t, e, n, r) {
                for (var i = (n = Ht(n, r, 1))(e), s = 0, o = Y(t); s < o; ) {
                  var u = Math.floor((s + o) / 2);
                  n(t[u]) < i ? (s = u + 1) : (o = u);
                }
                return s;
              }
              function ge(t, e, n) {
                return function (r, i, s) {
                  var o = 0,
                    a = Y(r);
                  if ("number" == typeof s) t > 0 ? (o = s >= 0 ? s : Math.max(s + a, o)) : (a = s >= 0 ? Math.min(s + 1, a) : s + a + 1);
                  else if (n && s && a) return r[(s = n(r, i))] === i ? s : -1;
                  if (i != i) return (s = e(u.call(r, o, a), J)) >= 0 ? s + o : -1;
                  for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t) if (r[s] === i) return s;
                  return -1;
                };
              }
              var me = ge(1, pe, ve),
                ye = ge(-1, de);
              function be(t, e, n) {
                var r = (re(t) ? pe : he)(t, e, n);
                if (void 0 !== r && -1 !== r) return t[r];
              }
              function _e(t, e, n) {
                var r, i;
                if (((e = Bt(e, n)), re(t))) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
                else {
                  var s = et(t);
                  for (r = 0, i = s.length; r < i; r++) e(t[s[r]], s[r], t);
                }
                return t;
              }
              function xe(t, e, n) {
                e = Ht(e, n);
                for (var r = !re(t) && et(t), i = (r || t).length, s = Array(i), o = 0; o < i; o++) {
                  var u = r ? r[o] : o;
                  s[o] = e(t[u], u, t);
                }
                return s;
              }
              function we(t) {
                var e = function (e, n, r, i) {
                  var s = !re(e) && et(e),
                    o = (s || e).length,
                    u = t > 0 ? 0 : o - 1;
                  for (i || ((r = e[s ? s[u] : u]), (u += t)); u >= 0 && u < o; u += t) {
                    var a = s ? s[u] : u;
                    r = n(r, e[a], a, e);
                  }
                  return r;
                };
                return function (t, n, r, i) {
                  var s = arguments.length >= 3;
                  return e(t, Bt(n, i, 4), r, s);
                };
              }
              var ke = we(1),
                je = we(-1);
              function Ee(t, e, n) {
                var r = [];
                return (
                  (e = Ht(e, n)),
                  _e(t, function (t, n, i) {
                    e(t, n, i) && r.push(t);
                  }),
                  r
                );
              }
              function Se(t, e, n) {
                e = Ht(e, n);
                for (var r = !re(t) && et(t), i = (r || t).length, s = 0; s < i; s++) {
                  var o = r ? r[s] : s;
                  if (!e(t[o], o, t)) return !1;
                }
                return !0;
              }
              function Ce(t, e, n) {
                e = Ht(e, n);
                for (var r = !re(t) && et(t), i = (r || t).length, s = 0; s < i; s++) {
                  var o = r ? r[s] : s;
                  if (e(t[o], o, t)) return !0;
                }
                return !1;
              }
              function Me(t, e, n, r) {
                return re(t) || (t = _t(t)), ("number" != typeof n || r) && (n = 0), me(t, e, n) >= 0;
              }
              var Oe = x(function (t, e, n) {
                var r, i;
                return (
                  N(e) ? (i = e) : ((e = Tt(e)), (r = e.slice(0, -1)), (e = e[e.length - 1])),
                  xe(t, function (t) {
                    var s = i;
                    if (!s) {
                      if ((r && r.length && (t = At(t, r)), null == t)) return;
                      s = t[e];
                    }
                    return null == s ? s : s.apply(t, n);
                  })
                );
              });
              function Te(t, e) {
                return xe(t, Nt(e));
              }
              function Ae(t, e, n) {
                var r,
                  i,
                  s = -1 / 0,
                  o = -1 / 0;
                if (null == e || ("number" == typeof e && "object" != typeof t[0] && null != t))
                  for (var u = 0, a = (t = re(t) ? t : _t(t)).length; u < a; u++) null != (r = t[u]) && r > s && (s = r);
                else
                  (e = Ht(e, n)),
                    _e(t, function (t, n, r) {
                      ((i = e(t, n, r)) > o || (i === -1 / 0 && s === -1 / 0)) && ((s = t), (o = i));
                    });
                return s;
              }
              function Ie(t, e, n) {
                if (null == e || n) return re(t) || (t = _t(t)), t[Ut(t.length - 1)];
                var r = re(t) ? Mt(t) : _t(t),
                  i = Y(r);
                e = Math.max(Math.min(e, i), 0);
                for (var s = i - 1, o = 0; o < e; o++) {
                  var u = Ut(o, s),
                    a = r[o];
                  (r[o] = r[u]), (r[u] = a);
                }
                return r.slice(0, e);
              }
              function Re(t, e) {
                return function (n, r, i) {
                  var s = e ? [[], []] : {};
                  return (
                    (r = Ht(r, i)),
                    _e(n, function (e, i) {
                      var o = r(e, i, n);
                      t(s, e, o);
                    }),
                    s
                  );
                };
              }
              var Pe = Re(function (t, e, n) {
                  z(t, n) ? t[n].push(e) : (t[n] = [e]);
                }),
                Ne = Re(function (t, e, n) {
                  t[n] = e;
                }),
                Be = Re(function (t, e, n) {
                  z(t, n) ? t[n]++ : (t[n] = 1);
                }),
                qe = Re(function (t, e, n) {
                  t[n ? 0 : 1].push(e);
                }, !0),
                $e = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function He(t, e, n) {
                return e in n;
              }
              var De = x(function (t, e) {
                  var n = {},
                    r = e[0];
                  if (null == t) return n;
                  N(r) ? (e.length > 1 && (r = Bt(r, e[1])), (e = at(t))) : ((r = He), (e = ie(e, !1, !1)), (t = Object(t)));
                  for (var i = 0, s = e.length; i < s; i++) {
                    var o = e[i],
                      u = t[o];
                    r(u, o, t) && (n[o] = u);
                  }
                  return n;
                }),
                Ue = x(function (t, e) {
                  var n,
                    r = e[0];
                  return (
                    N(r)
                      ? ((r = ae(r)), e.length > 1 && (n = e[1]))
                      : ((e = xe(ie(e, !1, !1), String)),
                        (r = function (t, n) {
                          return !Me(e, n);
                        })),
                    De(t, r, n)
                  );
                });
              function ze(t, e, n) {
                return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
              }
              function Fe(t, e, n) {
                return null == t || t.length < 1 ? (null == e || n ? void 0 : []) : null == e || n ? t[0] : ze(t, t.length - e);
              }
              function Le(t, e, n) {
                return u.call(t, null == e || n ? 1 : e);
              }
              var Je = x(function (t, e) {
                  return (
                    (e = ie(e, !0, !0)),
                    Ee(t, function (t) {
                      return !Me(e, t);
                    })
                  );
                }),
                Ve = x(function (t, e) {
                  return Je(t, e);
                });
              function We(t, e, n, r) {
                j(e) || ((r = n), (n = e), (e = !1)), null != n && (n = Ht(n, r));
                for (var i = [], s = [], o = 0, u = Y(t); o < u; o++) {
                  var a = t[o],
                    c = n ? n(a, o, t) : a;
                  e && !n ? ((o && s === c) || i.push(a), (s = c)) : n ? Me(s, c) || (s.push(c), i.push(a)) : Me(i, a) || i.push(a);
                }
                return i;
              }
              var Ge = x(function (t) {
                return We(ie(t, !0, !0));
              });
              function Ke(t) {
                for (var e = (t && Ae(t, Y).length) || 0, n = Array(e), r = 0; r < e; r++) n[r] = Te(t, r);
                return n;
              }
              var Qe = x(Ke);
              function Xe(t, e) {
                return t._chain ? rt(e).chain() : e;
              }
              function Ze(t) {
                return (
                  _e(wt(t), function (e) {
                    var n = (rt[e] = t[e]);
                    rt.prototype[e] = function () {
                      var t = [this._wrapped];
                      return o.apply(t, arguments), Xe(this, n.apply(rt, t));
                    };
                  }),
                  rt
                );
              }
              _e(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                var e = r[t];
                rt.prototype[t] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (e.apply(n, arguments), ("shift" !== t && "splice" !== t) || 0 !== n.length || delete n[0]), Xe(this, n)
                  );
                };
              }),
                _e(["concat", "join", "slice"], function (t) {
                  var e = r[t];
                  rt.prototype[t] = function () {
                    var t = this._wrapped;
                    return null != t && (t = e.apply(t, arguments)), Xe(this, t);
                  };
                });
              var Ye = {
                  __proto__: null,
                  VERSION: e,
                  restArguments: x,
                  isObject: w,
                  isNull: function (t) {
                    return null === t;
                  },
                  isUndefined: k,
                  isBoolean: j,
                  isElement: function (t) {
                    return !(!t || 1 !== t.nodeType);
                  },
                  isString: S,
                  isNumber: C,
                  isDate: M,
                  isRegExp: O,
                  isError: T,
                  isSymbol: A,
                  isArrayBuffer: I,
                  isDataView: D,
                  isArray: U,
                  isFunction: N,
                  isArguments: L,
                  isFinite: function (t) {
                    return !A(t) && m(t) && !isNaN(parseFloat(t));
                  },
                  isNaN: J,
                  isTypedArray: Z,
                  isEmpty: function (t) {
                    if (null == t) return !0;
                    var e = Y(t);
                    return "number" == typeof e && (U(t) || S(t) || L(t)) ? 0 === e : 0 === Y(et(t));
                  },
                  isMatch: nt,
                  isEqual: function (t, e) {
                    return ot(t, e);
                  },
                  isMap: gt,
                  isWeakMap: mt,
                  isSet: yt,
                  isWeakSet: bt,
                  keys: et,
                  allKeys: at,
                  values: _t,
                  pairs: function (t) {
                    for (var e = et(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
                    return r;
                  },
                  invert: xt,
                  functions: wt,
                  methods: wt,
                  extend: jt,
                  extendOwn: Et,
                  assign: Et,
                  defaults: St,
                  create: function (t, e) {
                    var n = Ct(t);
                    return e && Et(n, e), n;
                  },
                  clone: Mt,
                  tap: function (t, e) {
                    return e(t), t;
                  },
                  get: It,
                  has: function (t, e) {
                    for (var n = (e = Tt(e)).length, r = 0; r < n; r++) {
                      var i = e[r];
                      if (!z(t, i)) return !1;
                      t = t[i];
                    }
                    return !!n;
                  },
                  mapObject: function (t, e, n) {
                    e = Ht(e, n);
                    for (var r = et(t), i = r.length, s = {}, o = 0; o < i; o++) {
                      var u = r[o];
                      s[u] = e(t[u], u, t);
                    }
                    return s;
                  },
                  identity: Rt,
                  constant: V,
                  noop: Dt,
                  toPath: Ot,
                  property: Nt,
                  propertyOf: function (t) {
                    return null == t
                      ? Dt
                      : function (e) {
                          return It(t, e);
                        };
                  },
                  matcher: Pt,
                  matches: Pt,
                  times: function (t, e, n) {
                    var r = Array(Math.max(0, t));
                    e = Bt(e, n, 1);
                    for (var i = 0; i < t; i++) r[i] = e(i);
                    return r;
                  },
                  random: Ut,
                  now: zt,
                  escape: Jt,
                  unescape: Vt,
                  templateSettings: Wt,
                  template: function (t, e, n) {
                    !e && n && (e = n), (e = St({}, e, rt.templateSettings));
                    var r = RegExp(
                        [(e.escape || Gt).source, (e.interpolate || Gt).source, (e.evaluate || Gt).source].join("|") + "|$",
                        "g"
                      ),
                      i = 0,
                      s = "__p+='";
                    t.replace(r, function (e, n, r, o, u) {
                      return (
                        (s += t.slice(i, u).replace(Qt, Xt)),
                        (i = u + e.length),
                        n
                          ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : r
                          ? (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                          : o && (s += "';\n" + o + "\n__p+='"),
                        e
                      );
                    }),
                      (s += "';\n");
                    var o,
                      u = e.variable;
                    if (u) {
                      if (!Zt.test(u)) throw new Error("variable is not a bare identifier: " + u);
                    } else (s = "with(obj||{}){\n" + s + "}\n"), (u = "obj");
                    s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                      o = new Function(u, "_", s);
                    } catch (t) {
                      throw ((t.source = s), t);
                    }
                    var a = function (t) {
                      return o.call(this, t, rt);
                    };
                    return (a.source = "function(" + u + "){\n" + s + "}"), a;
                  },
                  result: function (t, e, n) {
                    var r = (e = Tt(e)).length;
                    if (!r) return N(n) ? n.call(t) : n;
                    for (var i = 0; i < r; i++) {
                      var s = null == t ? void 0 : t[e[i]];
                      void 0 === s && ((s = n), (i = r)), (t = N(s) ? s.call(t) : s);
                    }
                    return t;
                  },
                  uniqueId: function (t) {
                    var e = ++Yt + "";
                    return t ? t + e : e;
                  },
                  chain: function (t) {
                    var e = rt(t);
                    return (e._chain = !0), e;
                  },
                  iteratee: $t,
                  partial: ee,
                  bind: ne,
                  bindAll: se,
                  memoize: function (t, e) {
                    var n = function (r) {
                      var i = n.cache,
                        s = "" + (e ? e.apply(this, arguments) : r);
                      return z(i, s) || (i[s] = t.apply(this, arguments)), i[s];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: oe,
                  defer: ue,
                  throttle: function (t, e, n) {
                    var r,
                      i,
                      s,
                      o,
                      u = 0;
                    n || (n = {});
                    var a = function () {
                        (u = !1 === n.leading ? 0 : zt()), (r = null), (o = t.apply(i, s)), r || (i = s = null);
                      },
                      c = function () {
                        var c = zt();
                        u || !1 !== n.leading || (u = c);
                        var l = e - (c - u);
                        return (
                          (i = this),
                          (s = arguments),
                          l <= 0 || l > e
                            ? (r && (clearTimeout(r), (r = null)), (u = c), (o = t.apply(i, s)), r || (i = s = null))
                            : r || !1 === n.trailing || (r = setTimeout(a, l)),
                          o
                        );
                      };
                    return (
                      (c.cancel = function () {
                        clearTimeout(r), (u = 0), (r = i = s = null);
                      }),
                      c
                    );
                  },
                  debounce: function (t, e, n) {
                    var r,
                      i,
                      s,
                      o,
                      u,
                      a = function () {
                        var c = zt() - i;
                        e > c ? (r = setTimeout(a, e - c)) : ((r = null), n || (o = t.apply(u, s)), r || (s = u = null));
                      },
                      c = x(function (c) {
                        return (u = this), (s = c), (i = zt()), r || ((r = setTimeout(a, e)), n && (o = t.apply(u, s))), o;
                      });
                    return (
                      (c.cancel = function () {
                        clearTimeout(r), (r = s = u = null);
                      }),
                      c
                    );
                  },
                  wrap: function (t, e) {
                    return ee(e, t);
                  },
                  negate: ae,
                  compose: function () {
                    var t = arguments,
                      e = t.length - 1;
                    return function () {
                      for (var n = e, r = t[e].apply(this, arguments); n--; ) r = t[n].call(this, r);
                      return r;
                    };
                  },
                  after: function (t, e) {
                    return function () {
                      if (--t < 1) return e.apply(this, arguments);
                    };
                  },
                  before: ce,
                  once: le,
                  findKey: he,
                  findIndex: pe,
                  findLastIndex: de,
                  sortedIndex: ve,
                  indexOf: me,
                  lastIndexOf: ye,
                  find: be,
                  detect: be,
                  findWhere: function (t, e) {
                    return be(t, Pt(e));
                  },
                  each: _e,
                  forEach: _e,
                  map: xe,
                  collect: xe,
                  reduce: ke,
                  foldl: ke,
                  inject: ke,
                  reduceRight: je,
                  foldr: je,
                  filter: Ee,
                  select: Ee,
                  reject: function (t, e, n) {
                    return Ee(t, ae(Ht(e)), n);
                  },
                  every: Se,
                  all: Se,
                  some: Ce,
                  any: Ce,
                  contains: Me,
                  includes: Me,
                  include: Me,
                  invoke: Oe,
                  pluck: Te,
                  where: function (t, e) {
                    return Ee(t, Pt(e));
                  },
                  max: Ae,
                  min: function (t, e, n) {
                    var r,
                      i,
                      s = 1 / 0,
                      o = 1 / 0;
                    if (null == e || ("number" == typeof e && "object" != typeof t[0] && null != t))
                      for (var u = 0, a = (t = re(t) ? t : _t(t)).length; u < a; u++) null != (r = t[u]) && r < s && (s = r);
                    else
                      (e = Ht(e, n)),
                        _e(t, function (t, n, r) {
                          ((i = e(t, n, r)) < o || (i === 1 / 0 && s === 1 / 0)) && ((s = t), (o = i));
                        });
                    return s;
                  },
                  shuffle: function (t) {
                    return Ie(t, 1 / 0);
                  },
                  sample: Ie,
                  sortBy: function (t, e, n) {
                    var r = 0;
                    return (
                      (e = Ht(e, n)),
                      Te(
                        xe(t, function (t, n, i) {
                          return { value: t, index: r++, criteria: e(t, n, i) };
                        }).sort(function (t, e) {
                          var n = t.criteria,
                            r = e.criteria;
                          if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1;
                          }
                          return t.index - e.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: Pe,
                  indexBy: Ne,
                  countBy: Be,
                  partition: qe,
                  toArray: function (t) {
                    return t ? (U(t) ? u.call(t) : S(t) ? t.match($e) : re(t) ? xe(t, Rt) : _t(t)) : [];
                  },
                  size: function (t) {
                    return null == t ? 0 : re(t) ? t.length : et(t).length;
                  },
                  pick: De,
                  omit: Ue,
                  first: Fe,
                  head: Fe,
                  take: Fe,
                  initial: ze,
                  last: function (t, e, n) {
                    return null == t || t.length < 1
                      ? null == e || n
                        ? void 0
                        : []
                      : null == e || n
                      ? t[t.length - 1]
                      : Le(t, Math.max(0, t.length - e));
                  },
                  rest: Le,
                  tail: Le,
                  drop: Le,
                  compact: function (t) {
                    return Ee(t, Boolean);
                  },
                  flatten: function (t, e) {
                    return ie(t, e, !1);
                  },
                  without: Ve,
                  uniq: We,
                  unique: We,
                  union: Ge,
                  intersection: function (t) {
                    for (var e = [], n = arguments.length, r = 0, i = Y(t); r < i; r++) {
                      var s = t[r];
                      if (!Me(e, s)) {
                        var o;
                        for (o = 1; o < n && Me(arguments[o], s); o++);
                        o === n && e.push(s);
                      }
                    }
                    return e;
                  },
                  difference: Je,
                  unzip: Ke,
                  transpose: Ke,
                  zip: Qe,
                  object: function (t, e) {
                    for (var n = {}, r = 0, i = Y(t); r < i; r++) e ? (n[t[r]] = e[r]) : (n[t[r][0]] = t[r][1]);
                    return n;
                  },
                  range: function (t, e, n) {
                    null == e && ((e = t || 0), (t = 0)), n || (n = e < t ? -1 : 1);
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++, t += n) i[s] = t;
                    return i;
                  },
                  chunk: function (t, e) {
                    if (null == e || e < 1) return [];
                    for (var n = [], r = 0, i = t.length; r < i; ) n.push(u.call(t, r, (r += e)));
                    return n;
                  },
                  mixin: Ze,
                  default: rt
                },
                tn = Ze(Ye);
              return (tn._ = tn), tn;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    18: [
      function (t, e, n) {
        "use strict";
        const r = t("content/Models/base/Settings");
        e.exports = r;
      },
      { "content/Models/base/Settings": 19 }
    ],
    19: [
      function (t, e, n) {
        "use strict";
        const r = t("jquery"),
          i = t("underscore"),
          s = t("backbone"),
          o = t("content/messagingInterface");
        class u extends s.Model {
          initialize() {
            this.changedByAction = {};
          }
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          set(...t) {
            const e = super.set(...t);
            return i.extend(this.changedByAction, this.changed), e;
          }
          sync(t) {
            let e = "get";
            return (
              ["create", "update", "patch"].indexOf(t) >= 0 && (e = "set"),
              this._listeningToBg ||
                (o.subscribe("Settings:change", (t) => {
                  super.set(t);
                }),
                (this._listeningToBg = !0)),
              new r.Deferred((t) => {
                o.publish(`Settings:${e}`, this.changedByAction, (e) => {
                  super.set(e), this.trigger("sync", this), t.resolve(e);
                }),
                  (this.changedByAction = {});
              })
            );
          }
        }
        e.exports = u;
      },
      { backbone: 10, "content/messagingInterface": 21, jquery: "jquery", underscore: 17 }
    ],
    20: [
      function (t, e, n) {
        "use strict";
        const r = t("jquery"),
          i = t("content/Models/Settings"),
          s = r("#enableDataCollection"),
          o = r("#cancelDataCollection"),
          u = r("#enablePriceComparison"),
          a = r("#cancelPriceComparison"),
          c = r("#data-collection-status"),
          l = r("#price-comparison-status"),
          h = i.getInstance(),
          f = (t, e) => {
            h.set(t, e), h.save();
          };
        s.on("click", () => {
          f("inAppTracking", !0), c.addClass("enabled");
        }),
          o.on("click", () => {
            f("inAppTracking", !1), c.addClass("canceled");
          }),
          u.on("click", () => {
            f("offers", !0), l.addClass("enabled");
          }),
          a.on("click", () => {
            f("offers", !1), l.addClass("canceled");
          });
      },
      { "content/Models/Settings": 18, jquery: "jquery" }
    ],
    21: [
      function (t, e, n) {
        "use strict";
        const r = t("messenger/Content").getInstance();
        e.exports = r;
      },
      { "messenger/Content": 11 }
    ]
  },
  {},
  [20]
);
