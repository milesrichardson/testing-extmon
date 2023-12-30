var uritemplate = (function () {
  function n(n) {
    (this.raw = n), (this.cache = {});
  }
  function e(n) {
    this.set = n;
  }
  function r(n) {
    this.txt = n;
  }
  (n.prototype.get = function (n) {
    var e = this.lookupRaw(n),
      r = e;
    if ("function" == typeof e) {
      var t = this.cache[n];
      null != t ? (r = t.val) : ((r = e(this.raw)), (this.cache[n] = { key: n, val: r }));
    }
    return r;
  }),
    (n.prototype.lookupRaw = function (e) {
      return n.lookup(this, this.raw, e);
    }),
    (n.lookup = function (e, r, t) {
      var i = r[t];
      if (void 0 !== i) return i;
      var o = t.split("."),
        u = 0,
        a = o.length - 1;
      for (u = 0; u < a; u++) {
        var s = o.slice(0, a - u).join("."),
          c = o.slice(-u - 1).join("."),
          p = r[s];
        if (void 0 !== p) return n.lookup(e, p, c);
      }
    }),
    (e.prototype.expand = function (e) {
      var r = new n(e),
        t = "",
        i = 0,
        o = this.set.length;
      for (i = 0; i < o; i++) t += this.set[i].expand(r);
      return t;
    }),
    (r.prototype.expand = function () {
      return this.txt;
    });
  var t = new RegExp("[:/?#\\[\\]@!$&()*+,;=']", "g");
  function i(n) {
    return encodeURIComponent(n).replace(t, function (n) {
      return escape(n);
    });
  }
  function o(n) {
    return encodeURI(n);
  }
  function u(n, e, r) {
    return e + (e.length > 0 ? "=" : "") + r;
  }
  function a(n, e, r, t) {
    return (t = t || !1) && (n = ""), (e && 0 !== e.length) || (e = n), e + (e.length > 0 ? "=" : "") + r;
  }
  var s = { prefix: "", joiner: ",", encode: i, builder: u },
    c = { prefix: "", joiner: ",", encode: o, builder: u },
    p = { prefix: "#", joiner: ",", encode: o, builder: u },
    l = {
      prefix: ";",
      joiner: ";",
      encode: i,
      builder: function (n, e, r, t) {
        return (t = t || !1) && (n = ""), (e && 0 !== e.length) || (e = n), e + (e.length > 0 && r ? "=" : "") + r;
      }
    },
    f = { prefix: "?", joiner: "&", encode: i, builder: a },
    d = { prefix: "&", joiner: "&", encode: i, builder: a },
    h = { prefix: "/", joiner: "/", encode: i, builder: u },
    v = { prefix: ".", joiner: ".", encode: i, builder: u };
  function b(n, e) {
    !(function (n, e) {
      for (var r in e) n[r] = e[r];
    })(this, n),
      (this.vars = e);
  }
  (b.build = function (n, e) {
    var r;
    switch (n) {
      case "":
        r = s;
        break;
      case "+":
        r = c;
        break;
      case "#":
        r = p;
        break;
      case ";":
        r = l;
        break;
      case "?":
        r = f;
        break;
      case "&":
        r = d;
        break;
      case "/":
        r = h;
        break;
      case ".":
        r = v;
        break;
      default:
        throw "Unexpected operator: '" + n + "'";
    }
    return new b(r, e);
  }),
    (b.prototype.expand = function (n) {
      var e = this.prefix,
        r = this.joiner,
        t = this.builder,
        i = "",
        o = 0,
        u = this.vars.length;
      for (o = 0; o < u; o++) {
        var a = this.vars[o];
        a.addValues(n, this.encode, function (n, o, u) {
          var s = t(a.name, n, o, u);
          null != s && ((i += e + s), (e = r));
        });
      }
      return i;
    });
  var x = {};
  function g(n) {
    (this.str = ""), n === x ? (this.appender = g.UnboundAppend) : ((this.len = 0), (this.limit = n), (this.appender = g.BoundAppend));
  }
  function w(n, e, r, t, i) {
    var o;
    if (r.isArr)
      o = (function (n, e, r) {
        var t = new g(r),
          i = "",
          o = 0,
          u = n.length;
        for (o = 0; o < u; o++) null !== n[o] && void 0 !== n[o] && (t.append(i).append(n[o], e), (i = ","));
        return t.str;
      })(e, t, n.maxLength);
    else if (r.isObj)
      o = (function (n, e, r) {
        var t,
          i = new g(r),
          o = "";
        for (t in n) n.hasOwnProperty(t) && null !== n[t] && void 0 !== n[t] && (i.append(o + t + ",").append(n[t], e), (o = ","));
        return i.str;
      })(e, t, n.maxLength);
    else {
      o = new g(n.maxLength).append(e, t).str;
    }
    i("", o);
  }
  function j(n, e, r, t, i) {
    if (r.isArr) {
      var o = 0,
        u = e.length;
      for (o = 0; o < u; o++) i("", t(e[o]));
    } else if (r.isObj) {
      var a;
      for (a in e) e.hasOwnProperty(a) && i(a, t(e[a]));
    } else i("", t(e));
  }
  function k(n, e, r) {
    (this.name = unescape(n)), (this.valueHandler = e), (this.maxLength = r);
  }
  (g.prototype.append = function (n, e) {
    return this.appender(this, n, e);
  }),
    (g.UnboundAppend = function (n, e, r) {
      return (e = r ? r(e) : e), (n.str += e), n;
    }),
    (g.BoundAppend = function (n, e, r) {
      return (e = e.substring(0, n.limit - n.len)), (n.len += e.length), (e = r ? r(e) : e), (n.str += e), n;
    }),
    (k.build = function (n, e, r, t) {
      return r || (t = x), new k(n, e ? j : w, t);
    }),
    (k.prototype.addValues = function (n, e, r) {
      var t = n.get(this.name),
        i = (function (n) {
          var e = !1,
            r = !1,
            t = !0;
          return (
            null != n &&
              ((e = n.constructor === Array),
              (r = n.constructor === Object),
              (t =
                (e && 0 === n.length) ||
                (r &&
                  (function (n) {
                    for (var e in n) return !1;
                    return !0;
                  })(n)))),
            { isArr: e, isObj: r, isUndef: t }
          );
        })(t);
      i.isUndef || this.valueHandler(this, t, i, e, r);
    });
  var m = /([^*:]*)((\*)|(:)([0-9]+))?/,
    y = function (n) {
      var e = n[1],
        r = n[3],
        t = n[4],
        i = parseInt(n[5], 10);
      return k.build(e, r, t, i);
    },
    A = /(\{([+#.;?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g,
    U = function (n) {
      n[0];
      var e = n[2] || "",
        r = n[3].split(","),
        t = 0,
        i = r.length;
      for (t = 0; t < i; t++) {
        var o;
        if (null === (o = r[t].match(m))) throw "unexpected parse error in varspec: " + r[t];
        r[t] = y(o);
      }
      return b.build(e, r);
    },
    O = function (n, e, t, i) {
      if (t < i) {
        var o = e.substr(t, i - t);
        n.push(new r(o));
      }
    };
  return function (n) {
    var r,
      t = 0,
      i = [],
      o = A;
    for (o.lastIndex = 0; null !== (r = o.exec(n)); ) {
      var u = r.index;
      O(i, n, t, u), i.push(U(r)), (t = o.lastIndex);
    }
    return O(i, n, t, n.length), new e(i);
  };
})();
