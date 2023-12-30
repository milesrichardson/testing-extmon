!(function (f, t) {
  var s = [].slice,
    e = (t.Events = {
      on: function (t, e, n) {
        return (
          u(this, "on", t, [e, n]) &&
            e &&
            (this._events || (this._events = {}),
            (this._events[t] || (this._events[t] = [])).push({ callback: e, context: n, ctx: n || this })),
          this
        );
      },
      once: function (t, e, n) {
        if (!u(this, "once", t, [e, n]) || !e) return this;
        var i = this,
          s = f.once(function () {
            i.off(t, s), e.apply(this, arguments);
          });
        return (s._callback = e), this.on(t, s, n);
      },
      off: function (t, e, n) {
        var i, s, r, c, l, a, h, o;
        if (!this._events || !u(this, "off", t, [e, n])) return this;
        if (!t && !e && !n) return (this._events = {}), this;
        for (l = 0, a = (c = t ? [t] : f.keys(this._events)).length; l < a; l++)
          if (((t = c[l]), (r = this._events[t]))) {
            if (((this._events[t] = i = []), e || n))
              for (h = 0, o = r.length; h < o; h++)
                (s = r[h]), ((e && e !== s.callback && e !== s.callback._callback) || (n && n !== s.context)) && i.push(s);
            i.length || delete this._events[t];
          }
        return this;
      },
      trigger: function (t) {
        if (!this._events) return this;
        var e = s.call(arguments, 1);
        if (!u(this, "trigger", t, e)) return this;
        var n = this._events[t],
          i = this._events.all;
        return n && r(n, e), i && r(i, arguments), this;
      },
      stopListening: function (t, e, n) {
        var i = this._listeners;
        if (!i) return this;
        var s,
          r = !e && !n;
        for (s in ("object" == typeof e && (n = this), t && ((i = {})[t._listenerId] = t), i))
          i[s].off(e, n, this), r && delete this._listeners[s];
        return this;
      }
    }),
    a = /\s+/,
    u = function (t, e, n, i) {
      if (!n) return !0;
      if ("object" == typeof n) {
        for (var s in n) t[e].apply(t, [s, n[s]].concat(i));
        return !1;
      }
      if (a.test(n)) {
        for (var r = n.split(a), c = 0, l = r.length; c < l; c++) t[e].apply(t, [r[c]].concat(i));
        return !1;
      }
      return !0;
    },
    r = function (t, e) {
      var n,
        i = -1,
        s = t.length,
        r = e[0],
        c = e[1],
        l = e[2];
      switch (e.length) {
        case 0:
          for (; ++i < s; ) (n = t[i]).callback.call(n.ctx);
          return;
        case 1:
          for (; ++i < s; ) (n = t[i]).callback.call(n.ctx, r);
          return;
        case 2:
          for (; ++i < s; ) (n = t[i]).callback.call(n.ctx, r, c);
          return;
        case 3:
          for (; ++i < s; ) (n = t[i]).callback.call(n.ctx, r, c, l);
          return;
        default:
          for (; ++i < s; ) (n = t[i]).callback.apply(n.ctx, e);
      }
    };
  f.each({ listenTo: "on", listenToOnce: "once" }, function (i, t) {
    e[t] = function (t, e, n) {
      return (
        ((this._listeners || (this._listeners = {}))[t._listenerId || (t._listenerId = f.uniqueId("l"))] = t)[i](
          e,
          (n = "object" == typeof e ? this : n),
          this
        ),
        this
      );
    };
  });
})(Okta._okta, Okta);
