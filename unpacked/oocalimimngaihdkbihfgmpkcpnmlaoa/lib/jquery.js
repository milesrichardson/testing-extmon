!(function (n, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n.document
        ? t(n, !0)
        : function (n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n);
          })
    : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
  "use strict";
  var r = [],
    i = Object.getPrototypeOf,
    e = r.slice,
    o = r.flat
      ? function (n) {
          return r.flat.call(n);
        }
      : function (n) {
          return r.concat.apply([], n);
        },
    u = r.push,
    f = r.indexOf,
    c = {},
    s = c.toString,
    a = c.hasOwnProperty,
    l = a.toString,
    h = l.call(Object),
    d = {},
    p = function (n) {
      return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item;
    },
    v = function (n) {
      return null != n && n === n.window;
    },
    g = n.document,
    b = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(n, t, r) {
    var i,
      e,
      o = (r = r || g).createElement("script");
    if (((o.text = n), t)) for (i in b) (e = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, e);
    r.head.appendChild(o).parentNode.removeChild(o);
  }
  function m(n) {
    return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? c[s.call(n)] || "object" : typeof n;
  }
  var x = "3.6.0",
    w = function (n, t) {
      return new w.fn.init(n, t);
    };
  function j(n) {
    var t = !!n && "length" in n && n.length,
      r = m(n);
    return !p(n) && !v(n) && ("array" === r || 0 === t || ("number" == typeof t && 0 < t && t - 1 in n));
  }
  (w.fn = w.prototype =
    {
      jquery: x,
      constructor: w,
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (n) {
        return null == n ? e.call(this) : n < 0 ? this[n + this.length] : this[n];
      },
      pushStack: function (n) {
        var t = w.merge(this.constructor(), n);
        return (t.prevObject = this), t;
      },
      each: function (n) {
        return w.each(this, n);
      },
      map: function (n) {
        return this.pushStack(
          w.map(this, function (t, r) {
            return n.call(t, r, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (n, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (n, t) {
            return t % 2;
          })
        );
      },
      eq: function (n) {
        var t = this.length,
          r = +n + (n < 0 ? t : 0);
        return this.pushStack(0 <= r && r < t ? [this[r]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: r.sort,
      splice: r.splice
    }),
    (w.extend = w.fn.extend =
      function () {
        var n,
          t,
          r,
          i,
          e,
          o,
          u = arguments[0] || {},
          f = 1,
          c = arguments.length,
          s = !1;
        for (
          "boolean" == typeof u && ((s = u), (u = arguments[f] || {}), f++),
            "object" == typeof u || p(u) || (u = {}),
            f === c && ((u = this), f--);
          f < c;
          f++
        )
          if (null != (n = arguments[f]))
            for (t in n)
              (i = n[t]),
                "__proto__" !== t &&
                  u !== i &&
                  (s && i && (w.isPlainObject(i) || (e = Array.isArray(i)))
                    ? ((r = u[t]),
                      (o = e && !Array.isArray(r) ? [] : e || w.isPlainObject(r) ? r : {}),
                      (e = !1),
                      (u[t] = w.extend(s, o, i)))
                    : void 0 !== i && (u[t] = i));
        return u;
      }),
    w.extend({
      expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (n) {
        throw new Error(n);
      },
      noop: function () {},
      isPlainObject: function (n) {
        var t, r;
        return !(
          !n ||
          "[object Object]" !== s.call(n) ||
          ((t = i(n)) && ("function" != typeof (r = a.call(t, "constructor") && t.constructor) || l.call(r) !== h))
        );
      },
      isEmptyObject: function (n) {
        var t;
        for (t in n) return !1;
        return !0;
      },
      globalEval: function (n, t, r) {
        y(n, { nonce: t && t.nonce }, r);
      },
      each: function (n, t) {
        var r,
          i = 0;
        if (j(n)) for (r = n.length; i < r && !1 !== t.call(n[i], i, n[i]); i++);
        else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
        return n;
      },
      makeArray: function (n, t) {
        var r = t || [];
        return null != n && (j(Object(n)) ? w.merge(r, "string" == typeof n ? [n] : n) : u.call(r, n)), r;
      },
      inArray: function (n, t, r) {
        return null == t ? -1 : f.call(t, n, r);
      },
      merge: function (n, t) {
        for (var r = +t.length, i = 0, e = n.length; i < r; i++) n[e++] = t[i];
        return (n.length = e), n;
      },
      grep: function (n, t, r) {
        for (var i = [], e = 0, o = n.length, u = !r; e < o; e++) !t(n[e], e) !== u && i.push(n[e]);
        return i;
      },
      map: function (n, t, r) {
        var i,
          e,
          u = 0,
          f = [];
        if (j(n)) for (i = n.length; u < i; u++) null != (e = t(n[u], u, r)) && f.push(e);
        else for (u in n) null != (e = t(n[u], u, r)) && f.push(e);
        return o(f);
      },
      guid: 1,
      support: d
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
      c["[object " + t + "]"] = t.toLowerCase();
    });
  var S = (function (n) {
    var t,
      r,
      i,
      e,
      o,
      u,
      f,
      c,
      s,
      a,
      l,
      h,
      d,
      p,
      v,
      g,
      b,
      y,
      m,
      x = "sizzle" + 1 * new Date(),
      w = n.document,
      j = 0,
      S = 0,
      k = sn(),
      E = sn(),
      A = sn(),
      T = sn(),
      $ = function (n, t) {
        return n === t && (l = !0), 0;
      },
      R = {}.hasOwnProperty,
      D = [],
      O = D.pop,
      C = D.push,
      F = D.push,
      M = D.slice,
      H = function (n, t) {
        for (var r = 0, i = n.length; r < i; r++) if (n[r] === t) return r;
        return -1;
      },
      I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      q = "[\\x20\\t\\r\\n\\f]",
      _ = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      L =
        "\\[" +
        q +
        "*(" +
        _ +
        ")(?:" +
        q +
        "*([*^$|!~]?=)" +
        q +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        _ +
        "))|)" +
        q +
        "*\\]",
      N = ":(" + _ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
      P = new RegExp(q + "+", "g"),
      z = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
      W = new RegExp("^" + q + "*," + q + "*"),
      U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
      G = new RegExp(q + "|>"),
      X = new RegExp(N),
      B = new RegExp("^" + _ + "$"),
      Y = {
        ID: new RegExp("^#(" + _ + ")"),
        CLASS: new RegExp("^\\.(" + _ + ")"),
        TAG: new RegExp("^(" + _ + "|[*])"),
        ATTR: new RegExp("^" + L),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            q +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            q +
            "*(?:([+-]|)" +
            q +
            "*(\\d+)|))" +
            q +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      J = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      nn = /[+~]/,
      tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
      rn = function (n, t) {
        var r = "0x" + n.slice(1) - 65536;
        return t || (r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320));
      },
      en = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      on = function (n, t) {
        return t ? ("\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " ") : "\\" + n;
      },
      un = function () {
        h();
      },
      fn = wn(
        function (n) {
          return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      F.apply((D = M.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
    } catch (t) {
      F = {
        apply: D.length
          ? function (n, t) {
              C.apply(n, M.call(t));
            }
          : function (n, t) {
              for (var r = n.length, i = 0; (n[r++] = t[i++]); );
              n.length = r - 1;
            }
      };
    }
    function cn(n, t, i, e) {
      var o,
        f,
        s,
        a,
        l,
        p,
        b,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (((i = i || []), "string" != typeof n || !n || (1 !== w && 9 !== w && 11 !== w))) return i;
      if (!e && (h(t), (t = t || d), v)) {
        if (11 !== w && (l = V.exec(n)))
          if ((o = l[1])) {
            if (9 === w) {
              if (!(s = t.getElementById(o))) return i;
              if (s.id === o) return i.push(s), i;
            } else if (y && (s = y.getElementById(o)) && m(t, s) && s.id === o) return i.push(s), i;
          } else {
            if (l[2]) return F.apply(i, t.getElementsByTagName(n)), i;
            if ((o = l[3]) && r.getElementsByClassName && t.getElementsByClassName) return F.apply(i, t.getElementsByClassName(o)), i;
          }
        if (r.qsa && !T[n + " "] && (!g || !g.test(n)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
          if (((b = n), (y = t), 1 === w && (G.test(n) || U.test(n)))) {
            for (
              ((y = (nn.test(n) && yn(t.parentNode)) || t) === t && r.scope) ||
                ((a = t.getAttribute("id")) ? (a = a.replace(en, on)) : t.setAttribute("id", (a = x))),
                f = (p = u(n)).length;
              f--;

            )
              p[f] = (a ? "#" + a : ":scope") + " " + xn(p[f]);
            b = p.join(",");
          }
          try {
            return F.apply(i, y.querySelectorAll(b)), i;
          } catch (t) {
            T(n, !0);
          } finally {
            a === x && t.removeAttribute("id");
          }
        }
      }
      return c(n.replace(z, "$1"), t, i, e);
    }
    function sn() {
      var n = [];
      return function t(r, e) {
        return n.push(r + " ") > i.cacheLength && delete t[n.shift()], (t[r + " "] = e);
      };
    }
    function an(n) {
      return (n[x] = !0), n;
    }
    function ln(n) {
      var t = d.createElement("fieldset");
      try {
        return !!n(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function hn(n, t) {
      for (var r = n.split("|"), e = r.length; e--; ) i.attrHandle[r[e]] = t;
    }
    function dn(n, t) {
      var r = t && n,
        i = r && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (r) for (; (r = r.nextSibling); ) if (r === t) return -1;
      return n ? 1 : -1;
    }
    function pn(n) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n;
      };
    }
    function vn(n) {
      return function (t) {
        var r = t.nodeName.toLowerCase();
        return ("input" === r || "button" === r) && t.type === n;
      };
    }
    function gn(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && fn(t) === n)
            : t.disabled === n
          : "label" in t && t.disabled === n;
      };
    }
    function bn(n) {
      return an(function (t) {
        return (
          (t = +t),
          an(function (r, i) {
            for (var e, o = n([], r.length, t), u = o.length; u--; ) r[(e = o[u])] && (r[e] = !(i[e] = r[e]));
          })
        );
      });
    }
    function yn(n) {
      return n && void 0 !== n.getElementsByTagName && n;
    }
    for (t in ((r = cn.support = {}),
    (o = cn.isXML =
      function (n) {
        var t = n && n.namespaceURI,
          r = n && (n.ownerDocument || n).documentElement;
        return !J.test(t || (r && r.nodeName) || "HTML");
      }),
    (h = cn.setDocument =
      function (n) {
        var t,
          e,
          u = n ? n.ownerDocument || n : w;
        return (
          u != d &&
            9 === u.nodeType &&
            u.documentElement &&
            ((p = (d = u).documentElement),
            (v = !o(d)),
            w != d &&
              (e = d.defaultView) &&
              e.top !== e &&
              (e.addEventListener ? e.addEventListener("unload", un, !1) : e.attachEvent && e.attachEvent("onunload", un)),
            (r.scope = ln(function (n) {
              return (
                p.appendChild(n).appendChild(d.createElement("div")),
                void 0 !== n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length
              );
            })),
            (r.attributes = ln(function (n) {
              return (n.className = "i"), !n.getAttribute("className");
            })),
            (r.getElementsByTagName = ln(function (n) {
              return n.appendChild(d.createComment("")), !n.getElementsByTagName("*").length;
            })),
            (r.getElementsByClassName = Z.test(d.getElementsByClassName)),
            (r.getById = ln(function (n) {
              return (p.appendChild(n).id = x), !d.getElementsByName || !d.getElementsByName(x).length;
            })),
            r.getById
              ? ((i.filter.ID = function (n) {
                  var t = n.replace(tn, rn);
                  return function (n) {
                    return n.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (n, t) {
                  if (void 0 !== t.getElementById && v) {
                    var r = t.getElementById(n);
                    return r ? [r] : [];
                  }
                }))
              : ((i.filter.ID = function (n) {
                  var t = n.replace(tn, rn);
                  return function (n) {
                    var r = void 0 !== n.getAttributeNode && n.getAttributeNode("id");
                    return r && r.value === t;
                  };
                }),
                (i.find.ID = function (n, t) {
                  if (void 0 !== t.getElementById && v) {
                    var r,
                      i,
                      e,
                      o = t.getElementById(n);
                    if (o) {
                      if ((r = o.getAttributeNode("id")) && r.value === n) return [o];
                      for (e = t.getElementsByName(n), i = 0; (o = e[i++]); )
                        if ((r = o.getAttributeNode("id")) && r.value === n) return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = r.getElementsByTagName
              ? function (n, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(n) : r.qsa ? t.querySelectorAll(n) : void 0;
                }
              : function (n, t) {
                  var r,
                    i = [],
                    e = 0,
                    o = t.getElementsByTagName(n);
                  if ("*" === n) {
                    for (; (r = o[e++]); ) 1 === r.nodeType && i.push(r);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              r.getElementsByClassName &&
              function (n, t) {
                if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(n);
              }),
            (b = []),
            (g = []),
            (r.qsa = Z.test(d.querySelectorAll)) &&
              (ln(function (n) {
                var t;
                (p.appendChild(n).innerHTML =
                  "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  n.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"),
                  n.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + I + ")"),
                  n.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
                  (t = d.createElement("input")).setAttribute("name", ""),
                  n.appendChild(t),
                  n.querySelectorAll("[name='']").length || g.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                  n.querySelectorAll(":checked").length || g.push(":checked"),
                  n.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"),
                  n.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ln(function (n) {
                n.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                  n.appendChild(t).setAttribute("name", "D"),
                  n.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="),
                  2 !== n.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                  (p.appendChild(n).disabled = !0),
                  2 !== n.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                  n.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (r.matchesSelector = Z.test(
              (y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)
            )) &&
              ln(function (n) {
                (r.disconnectedMatch = y.call(n, "*")), y.call(n, "[s!='']:x"), b.push("!=", N);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (b = b.length && new RegExp(b.join("|"))),
            (t = Z.test(p.compareDocumentPosition)),
            (m =
              t || Z.test(p.contains)
                ? function (n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                      i = t && t.parentNode;
                    return (
                      n === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (n, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === n) return !0;
                    return !1;
                  }),
            ($ = t
              ? function (n, t) {
                  if (n === t) return (l = !0), 0;
                  var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 & (i = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) ||
                    (!r.sortDetached && t.compareDocumentPosition(n) === i)
                      ? n == d || (n.ownerDocument == w && m(w, n))
                        ? -1
                        : t == d || (t.ownerDocument == w && m(w, t))
                        ? 1
                        : a
                        ? H(a, n) - H(a, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (n, t) {
                  if (n === t) return (l = !0), 0;
                  var r,
                    i = 0,
                    e = n.parentNode,
                    o = t.parentNode,
                    u = [n],
                    f = [t];
                  if (!e || !o) return n == d ? -1 : t == d ? 1 : e ? -1 : o ? 1 : a ? H(a, n) - H(a, t) : 0;
                  if (e === o) return dn(n, t);
                  for (r = n; (r = r.parentNode); ) u.unshift(r);
                  for (r = t; (r = r.parentNode); ) f.unshift(r);
                  for (; u[i] === f[i]; ) i++;
                  return i ? dn(u[i], f[i]) : u[i] == w ? -1 : f[i] == w ? 1 : 0;
                })),
          d
        );
      }),
    (cn.matches = function (n, t) {
      return cn(n, null, null, t);
    }),
    (cn.matchesSelector = function (n, t) {
      if ((h(n), r.matchesSelector && v && !T[t + " "] && (!b || !b.test(t)) && (!g || !g.test(t))))
        try {
          var i = y.call(n, t);
          if (i || r.disconnectedMatch || (n.document && 11 !== n.document.nodeType)) return i;
        } catch (n) {
          T(t, !0);
        }
      return 0 < cn(t, d, null, [n]).length;
    }),
    (cn.contains = function (n, t) {
      return (n.ownerDocument || n) != d && h(n), m(n, t);
    }),
    (cn.attr = function (n, t) {
      (n.ownerDocument || n) != d && h(n);
      var e = i.attrHandle[t.toLowerCase()],
        o = e && R.call(i.attrHandle, t.toLowerCase()) ? e(n, t, !v) : void 0;
      return void 0 !== o ? o : r.attributes || !v ? n.getAttribute(t) : (o = n.getAttributeNode(t)) && o.specified ? o.value : null;
    }),
    (cn.escape = function (n) {
      return (n + "").replace(en, on);
    }),
    (cn.error = function (n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    }),
    (cn.uniqueSort = function (n) {
      var t,
        i = [],
        e = 0,
        o = 0;
      if (((l = !r.detectDuplicates), (a = !r.sortStable && n.slice(0)), n.sort($), l)) {
        for (; (t = n[o++]); ) t === n[o] && (e = i.push(o));
        for (; e--; ) n.splice(i[e], 1);
      }
      return (a = null), n;
    }),
    (e = cn.getText =
      function (n) {
        var t,
          r = "",
          i = 0,
          o = n.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof n.textContent) return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) r += e(n);
          } else if (3 === o || 4 === o) return n.nodeValue;
        } else for (; (t = n[i++]); ) r += e(t);
        return r;
      }),
    ((i = cn.selectors =
      {
        cacheLength: 50,
        createPseudo: an,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function (n) {
            return (
              (n[1] = n[1].replace(tn, rn)),
              (n[3] = (n[3] || n[4] || n[5] || "").replace(tn, rn)),
              "~=" === n[2] && (n[3] = " " + n[3] + " "),
              n.slice(0, 4)
            );
          },
          CHILD: function (n) {
            return (
              (n[1] = n[1].toLowerCase()),
              "nth" === n[1].slice(0, 3)
                ? (n[3] || cn.error(n[0]),
                  (n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3]))),
                  (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                : n[3] && cn.error(n[0]),
              n
            );
          },
          PSEUDO: function (n) {
            var t,
              r = !n[6] && n[2];
            return Y.CHILD.test(n[0])
              ? null
              : (n[3]
                  ? (n[2] = n[4] || n[5] || "")
                  : r &&
                    X.test(r) &&
                    (t = u(r, !0)) &&
                    (t = r.indexOf(")", r.length - t) - r.length) &&
                    ((n[0] = n[0].slice(0, t)), (n[2] = r.slice(0, t))),
                n.slice(0, 3));
          }
        },
        filter: {
          TAG: function (n) {
            var t = n.replace(tn, rn).toLowerCase();
            return "*" === n
              ? function () {
                  return !0;
                }
              : function (n) {
                  return n.nodeName && n.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (n) {
            var t = k[n + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + q + ")" + n + "(" + q + "|$)")) &&
                k(n, function (n) {
                  return t.test(
                    ("string" == typeof n.className && n.className) || (void 0 !== n.getAttribute && n.getAttribute("class")) || ""
                  );
                }))
            );
          },
          ATTR: function (n, t, r) {
            return function (i) {
              var e = cn.attr(i, n);
              return null == e
                ? "!=" === t
                : !t ||
                    ((e += ""),
                    "=" === t
                      ? e === r
                      : "!=" === t
                      ? e !== r
                      : "^=" === t
                      ? r && 0 === e.indexOf(r)
                      : "*=" === t
                      ? r && -1 < e.indexOf(r)
                      : "$=" === t
                      ? r && e.slice(-r.length) === r
                      : "~=" === t
                      ? -1 < (" " + e.replace(P, " ") + " ").indexOf(r)
                      : "|=" === t && (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (n, t, r, i, e) {
            var o = "nth" !== n.slice(0, 3),
              u = "last" !== n.slice(-4),
              f = "of-type" === t;
            return 1 === i && 0 === e
              ? function (n) {
                  return !!n.parentNode;
                }
              : function (t, r, c) {
                  var s,
                    a,
                    l,
                    h,
                    d,
                    p,
                    v = o !== u ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    b = f && t.nodeName.toLowerCase(),
                    y = !c && !f,
                    m = !1;
                  if (g) {
                    if (o) {
                      for (; v; ) {
                        for (h = t; (h = h[v]); ) if (f ? h.nodeName.toLowerCase() === b : 1 === h.nodeType) return !1;
                        p = v = "only" === n && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [u ? g.firstChild : g.lastChild]), u && y)) {
                      for (
                        m =
                          (d = (s = (a = (l = (h = g)[x] || (h[x] = {}))[h.uniqueID] || (l[h.uniqueID] = {}))[n] || [])[0] === j && s[1]) &&
                          s[2],
                          h = d && g.childNodes[d];
                        (h = (++d && h && h[v]) || (m = d = 0) || p.pop());

                      )
                        if (1 === h.nodeType && ++m && h === t) {
                          a[n] = [j, d, m];
                          break;
                        }
                    } else if (
                      (y &&
                        (m = d = (s = (a = (l = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (l[h.uniqueID] = {}))[n] || [])[0] === j && s[1]),
                      !1 === m)
                    )
                      for (
                        ;
                        (h = (++d && h && h[v]) || (m = d = 0) || p.pop()) &&
                        ((f ? h.nodeName.toLowerCase() !== b : 1 !== h.nodeType) ||
                          !++m ||
                          (y && ((a = (l = h[x] || (h[x] = {}))[h.uniqueID] || (l[h.uniqueID] = {}))[n] = [j, m]), h !== t));

                      );
                    return (m -= e) === i || (m % i == 0 && 0 <= m / i);
                  }
                };
          },
          PSEUDO: function (n, t) {
            var r,
              e = i.pseudos[n] || i.setFilters[n.toLowerCase()] || cn.error("unsupported pseudo: " + n);
            return e[x]
              ? e(t)
              : 1 < e.length
              ? ((r = [n, n, "", t]),
                i.setFilters.hasOwnProperty(n.toLowerCase())
                  ? an(function (n, r) {
                      for (var i, o = e(n, t), u = o.length; u--; ) n[(i = H(n, o[u]))] = !(r[i] = o[u]);
                    })
                  : function (n) {
                      return e(n, 0, r);
                    })
              : e;
          }
        },
        pseudos: {
          not: an(function (n) {
            var t = [],
              r = [],
              i = f(n.replace(z, "$1"));
            return i[x]
              ? an(function (n, t, r, e) {
                  for (var o, u = i(n, null, e, []), f = n.length; f--; ) (o = u[f]) && (n[f] = !(t[f] = o));
                })
              : function (n, e, o) {
                  return (t[0] = n), i(t, null, o, r), (t[0] = null), !r.pop();
                };
          }),
          has: an(function (n) {
            return function (t) {
              return 0 < cn(n, t).length;
            };
          }),
          contains: an(function (n) {
            return (
              (n = n.replace(tn, rn)),
              function (t) {
                return -1 < (t.textContent || e(t)).indexOf(n);
              }
            );
          }),
          lang: an(function (n) {
            return (
              B.test(n || "") || cn.error("unsupported lang: " + n),
              (n = n.replace(tn, rn).toLowerCase()),
              function (t) {
                var r;
                do {
                  if ((r = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                    return (r = r.toLowerCase()) === n || 0 === r.indexOf(n + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var r = n.location && n.location.hash;
            return r && r.slice(1) === t.id;
          },
          root: function (n) {
            return n === p;
          },
          focus: function (n) {
            return n === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
          },
          enabled: gn(!1),
          disabled: gn(!0),
          checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return ("input" === t && !!n.checked) || ("option" === t && !!n.selected);
          },
          selected: function (n) {
            return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected;
          },
          empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
            return !0;
          },
          parent: function (n) {
            return !i.pseudos.empty(n);
          },
          header: function (n) {
            return Q.test(n.nodeName);
          },
          input: function (n) {
            return K.test(n.nodeName);
          },
          button: function (n) {
            var t = n.nodeName.toLowerCase();
            return ("input" === t && "button" === n.type) || "button" === t;
          },
          text: function (n) {
            var t;
            return (
              "input" === n.nodeName.toLowerCase() &&
              "text" === n.type &&
              (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
            );
          },
          first: bn(function () {
            return [0];
          }),
          last: bn(function (n, t) {
            return [t - 1];
          }),
          eq: bn(function (n, t, r) {
            return [r < 0 ? r + t : r];
          }),
          even: bn(function (n, t) {
            for (var r = 0; r < t; r += 2) n.push(r);
            return n;
          }),
          odd: bn(function (n, t) {
            for (var r = 1; r < t; r += 2) n.push(r);
            return n;
          }),
          lt: bn(function (n, t, r) {
            for (var i = r < 0 ? r + t : t < r ? t : r; 0 <= --i; ) n.push(i);
            return n;
          }),
          gt: bn(function (n, t, r) {
            for (var i = r < 0 ? r + t : r; ++i < t; ) n.push(i);
            return n;
          })
        }
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = pn(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = vn(t);
    function mn() {}
    function xn(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
      return i;
    }
    function wn(n, t, r) {
      var i = t.dir,
        e = t.next,
        o = e || i,
        u = r && "parentNode" === o,
        f = S++;
      return t.first
        ? function (t, r, e) {
            for (; (t = t[i]); ) if (1 === t.nodeType || u) return n(t, r, e);
            return !1;
          }
        : function (t, r, c) {
            var s,
              a,
              l,
              h = [j, f];
            if (c) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || u) && n(t, r, c)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || u)
                  if (((a = (l = t[x] || (t[x] = {}))[t.uniqueID] || (l[t.uniqueID] = {})), e && e === t.nodeName.toLowerCase()))
                    t = t[i] || t;
                  else {
                    if ((s = a[o]) && s[0] === j && s[1] === f) return (h[2] = s[2]);
                    if (((a[o] = h)[2] = n(t, r, c))) return !0;
                  }
            return !1;
          };
    }
    function jn(n) {
      return 1 < n.length
        ? function (t, r, i) {
            for (var e = n.length; e--; ) if (!n[e](t, r, i)) return !1;
            return !0;
          }
        : n[0];
    }
    function Sn(n, t, r, i, e) {
      for (var o, u = [], f = 0, c = n.length, s = null != t; f < c; f++) (o = n[f]) && ((r && !r(o, i, e)) || (u.push(o), s && t.push(f)));
      return u;
    }
    function kn(n, t, r, i, e, o) {
      return (
        i && !i[x] && (i = kn(i)),
        e && !e[x] && (e = kn(e, o)),
        an(function (o, u, f, c) {
          var s,
            a,
            l,
            h = [],
            d = [],
            p = u.length,
            v =
              o ||
              (function (n, t, r) {
                for (var i = 0, e = t.length; i < e; i++) cn(n, t[i], r);
                return r;
              })(t || "*", f.nodeType ? [f] : f, []),
            g = !n || (!o && t) ? v : Sn(v, h, n, f, c),
            b = r ? (e || (o ? n : p || i) ? [] : u) : g;
          if ((r && r(g, b, f, c), i)) for (s = Sn(b, d), i(s, [], f, c), a = s.length; a--; ) (l = s[a]) && (b[d[a]] = !(g[d[a]] = l));
          if (o) {
            if (e || n) {
              if (e) {
                for (s = [], a = b.length; a--; ) (l = b[a]) && s.push((g[a] = l));
                e(null, (b = []), s, c);
              }
              for (a = b.length; a--; ) (l = b[a]) && -1 < (s = e ? H(o, l) : h[a]) && (o[s] = !(u[s] = l));
            }
          } else (b = Sn(b === u ? b.splice(p, b.length) : b)), e ? e(null, u, b, c) : F.apply(u, b);
        })
      );
    }
    function En(n) {
      for (
        var t,
          r,
          e,
          o = n.length,
          u = i.relative[n[0].type],
          f = u || i.relative[" "],
          c = u ? 1 : 0,
          a = wn(
            function (n) {
              return n === t;
            },
            f,
            !0
          ),
          l = wn(
            function (n) {
              return -1 < H(t, n);
            },
            f,
            !0
          ),
          h = [
            function (n, r, i) {
              var e = (!u && (i || r !== s)) || ((t = r).nodeType ? a(n, r, i) : l(n, r, i));
              return (t = null), e;
            }
          ];
        c < o;
        c++
      )
        if ((r = i.relative[n[c].type])) h = [wn(jn(h), r)];
        else {
          if ((r = i.filter[n[c].type].apply(null, n[c].matches))[x]) {
            for (e = ++c; e < o && !i.relative[n[e].type]; e++);
            return kn(
              1 < c && jn(h),
              1 < c && xn(n.slice(0, c - 1).concat({ value: " " === n[c - 2].type ? "*" : "" })).replace(z, "$1"),
              r,
              c < e && En(n.slice(c, e)),
              e < o && En((n = n.slice(e))),
              e < o && xn(n)
            );
          }
          h.push(r);
        }
      return jn(h);
    }
    return (
      (mn.prototype = i.filters = i.pseudos),
      (i.setFilters = new mn()),
      (u = cn.tokenize =
        function (n, t) {
          var r,
            e,
            o,
            u,
            f,
            c,
            s,
            a = E[n + " "];
          if (a) return t ? 0 : a.slice(0);
          for (f = n, c = [], s = i.preFilter; f; ) {
            for (u in ((r && !(e = W.exec(f))) || (e && (f = f.slice(e[0].length) || f), c.push((o = []))),
            (r = !1),
            (e = U.exec(f)) && ((r = e.shift()), o.push({ value: r, type: e[0].replace(z, " ") }), (f = f.slice(r.length))),
            i.filter))
              !(e = Y[u].exec(f)) ||
                (s[u] && !(e = s[u](e))) ||
                ((r = e.shift()), o.push({ value: r, type: u, matches: e }), (f = f.slice(r.length)));
            if (!r) break;
          }
          return t ? f.length : f ? cn.error(n) : E(n, c).slice(0);
        }),
      (f = cn.compile =
        function (n, t) {
          var r,
            e,
            o,
            f,
            c,
            a,
            l = [],
            p = [],
            g = A[n + " "];
          if (!g) {
            for (t || (t = u(n)), r = t.length; r--; ) (g = En(t[r]))[x] ? l.push(g) : p.push(g);
            (g = A(
              n,
              ((e = p),
              (f = 0 < (o = l).length),
              (c = 0 < e.length),
              (a = function (n, t, r, u, a) {
                var l,
                  p,
                  g,
                  b = 0,
                  y = "0",
                  m = n && [],
                  x = [],
                  w = s,
                  S = n || (c && i.find.TAG("*", a)),
                  k = (j += null == w ? 1 : Math.random() || 0.1),
                  E = S.length;
                for (a && (s = t == d || t || a); y !== E && null != (l = S[y]); y++) {
                  if (c && l) {
                    for (p = 0, t || l.ownerDocument == d || (h(l), (r = !v)); (g = e[p++]); )
                      if (g(l, t || d, r)) {
                        u.push(l);
                        break;
                      }
                    a && (j = k);
                  }
                  f && ((l = !g && l) && b--, n && m.push(l));
                }
                if (((b += y), f && y !== b)) {
                  for (p = 0; (g = o[p++]); ) g(m, x, t, r);
                  if (n) {
                    if (0 < b) for (; y--; ) m[y] || x[y] || (x[y] = O.call(u));
                    x = Sn(x);
                  }
                  F.apply(u, x), a && !n && 0 < x.length && 1 < b + o.length && cn.uniqueSort(u);
                }
                return a && ((j = k), (s = w)), m;
              }),
              f ? an(a) : a)
            )).selector = n;
          }
          return g;
        }),
      (c = cn.select =
        function (n, t, r, e) {
          var o,
            c,
            s,
            a,
            l,
            h = "function" == typeof n && n,
            d = !e && u((n = h.selector || n));
          if (((r = r || []), 1 === d.length)) {
            if (2 < (c = d[0] = d[0].slice(0)).length && "ID" === (s = c[0]).type && 9 === t.nodeType && v && i.relative[c[1].type]) {
              if (!(t = (i.find.ID(s.matches[0].replace(tn, rn), t) || [])[0])) return r;
              h && (t = t.parentNode), (n = n.slice(c.shift().value.length));
            }
            for (o = Y.needsContext.test(n) ? 0 : c.length; o-- && ((s = c[o]), !i.relative[(a = s.type)]); )
              if ((l = i.find[a]) && (e = l(s.matches[0].replace(tn, rn), (nn.test(c[0].type) && yn(t.parentNode)) || t))) {
                if ((c.splice(o, 1), !(n = e.length && xn(c)))) return F.apply(r, e), r;
                break;
              }
          }
          return (h || f(n, d))(e, t, !v, r, !t || (nn.test(n) && yn(t.parentNode)) || t), r;
        }),
      (r.sortStable = x.split("").sort($).join("") === x),
      (r.detectDuplicates = !!l),
      h(),
      (r.sortDetached = ln(function (n) {
        return 1 & n.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ln(function (n) {
        return (n.innerHTML = "<a href='#'></a>"), "#" === n.firstChild.getAttribute("href");
      }) ||
        hn("type|href|height|width", function (n, t, r) {
          if (!r) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (r.attributes &&
        ln(function (n) {
          return (n.innerHTML = "<input/>"), n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value");
        })) ||
        hn("value", function (n, t, r) {
          if (!r && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
        }),
      ln(function (n) {
        return null == n.getAttribute("disabled");
      }) ||
        hn(I, function (n, t, r) {
          var i;
          if (!r) return !0 === n[t] ? t.toLowerCase() : (i = n.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      cn
    );
  })(n);
  (w.find = S),
    (w.expr = S.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = S.uniqueSort),
    (w.text = S.getText),
    (w.isXMLDoc = S.isXML),
    (w.contains = S.contains),
    (w.escapeSelector = S.escape);
  var k = function (n, t, r) {
      for (var i = [], e = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
        if (1 === n.nodeType) {
          if (e && w(n).is(r)) break;
          i.push(n);
        }
      return i;
    },
    E = function (n, t) {
      for (var r = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && r.push(n);
      return r;
    },
    A = w.expr.match.needsContext;
  function T(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
  }
  var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function R(n, t, r) {
    return p(t)
      ? w.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        })
      : t.nodeType
      ? w.grep(n, function (n) {
          return (n === t) !== r;
        })
      : "string" != typeof t
      ? w.grep(n, function (n) {
          return -1 < f.call(t, n) !== r;
        })
      : w.filter(t, n, r);
  }
  (w.filter = function (n, t, r) {
    var i = t[0];
    return (
      r && (n = ":not(" + n + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, n)
          ? [i]
          : []
        : w.find.matches(
            n,
            w.grep(t, function (n) {
              return 1 === n.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (n) {
        var t,
          r,
          i = this.length,
          e = this;
        if ("string" != typeof n)
          return this.pushStack(
            w(n).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(e[t], this)) return !0;
            })
          );
        for (r = this.pushStack([]), t = 0; t < i; t++) w.find(n, e[t], r);
        return 1 < i ? w.uniqueSort(r) : r;
      },
      filter: function (n) {
        return this.pushStack(R(this, n || [], !1));
      },
      not: function (n) {
        return this.pushStack(R(this, n || [], !0));
      },
      is: function (n) {
        return !!R(this, "string" == typeof n && A.test(n) ? w(n) : n || [], !1).length;
      }
    });
  var D,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (n, t, r) {
    var i, e;
    if (!n) return this;
    if (((r = r || D), "string" == typeof n)) {
      if (!(i = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : O.exec(n)) || (!i[1] && t))
        return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)),
          $.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (e = g.getElementById(i[2])) && ((this[0] = e), (this.length = 1)), this;
    }
    return n.nodeType ? ((this[0] = n), (this.length = 1), this) : p(n) ? (void 0 !== r.ready ? r.ready(n) : n(w)) : w.makeArray(n, this);
  }).prototype = w.fn),
    (D = w(g));
  var C = /^(?:parents|prev(?:Until|All))/,
    F = { children: !0, contents: !0, next: !0, prev: !0 };
  function M(n, t) {
    for (; (n = n[t]) && 1 !== n.nodeType; );
    return n;
  }
  w.fn.extend({
    has: function (n) {
      var t = w(n, this),
        r = t.length;
      return this.filter(function () {
        for (var n = 0; n < r; n++) if (w.contains(this, t[n])) return !0;
      });
    },
    closest: function (n, t) {
      var r,
        i = 0,
        e = this.length,
        o = [],
        u = "string" != typeof n && w(n);
      if (!A.test(n))
        for (; i < e; i++)
          for (r = this[i]; r && r !== t; r = r.parentNode)
            if (r.nodeType < 11 && (u ? -1 < u.index(r) : 1 === r.nodeType && w.find.matchesSelector(r, n))) {
              o.push(r);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (n) {
      return n
        ? "string" == typeof n
          ? f.call(w(n), this[0])
          : f.call(this, n.jquery ? n[0] : n)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(n, t))));
    },
    addBack: function (n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    }
  }),
    w.each(
      {
        parent: function (n) {
          var t = n.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (n) {
          return k(n, "parentNode");
        },
        parentsUntil: function (n, t, r) {
          return k(n, "parentNode", r);
        },
        next: function (n) {
          return M(n, "nextSibling");
        },
        prev: function (n) {
          return M(n, "previousSibling");
        },
        nextAll: function (n) {
          return k(n, "nextSibling");
        },
        prevAll: function (n) {
          return k(n, "previousSibling");
        },
        nextUntil: function (n, t, r) {
          return k(n, "nextSibling", r);
        },
        prevUntil: function (n, t, r) {
          return k(n, "previousSibling", r);
        },
        siblings: function (n) {
          return E((n.parentNode || {}).firstChild, n);
        },
        children: function (n) {
          return E(n.firstChild);
        },
        contents: function (n) {
          return null != n.contentDocument && i(n.contentDocument)
            ? n.contentDocument
            : (T(n, "template") && (n = n.content || n), w.merge([], n.childNodes));
        }
      },
      function (n, t) {
        w.fn[n] = function (r, i) {
          var e = w.map(this, t, r);
          return (
            "Until" !== n.slice(-5) && (i = r),
            i && "string" == typeof i && (e = w.filter(i, e)),
            1 < this.length && (F[n] || w.uniqueSort(e), C.test(n) && e.reverse()),
            this.pushStack(e)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function I(n) {
    return n;
  }
  function q(n) {
    throw n;
  }
  function _(n, t, r, i) {
    var e;
    try {
      n && p((e = n.promise)) ? e.call(n).done(t).fail(r) : n && p((e = n.then)) ? e.call(n, t, r) : t.apply(void 0, [n].slice(i));
    } catch (n) {
      r.apply(void 0, [n]);
    }
  }
  (w.Callbacks = function (n) {
    var t, r;
    n =
      "string" == typeof n
        ? ((t = n),
          (r = {}),
          w.each(t.match(H) || [], function (n, t) {
            r[t] = !0;
          }),
          r)
        : w.extend({}, n);
    var i,
      e,
      o,
      u,
      f = [],
      c = [],
      s = -1,
      a = function () {
        for (u = u || n.once, o = i = !0; c.length; s = -1)
          for (e = c.shift(); ++s < f.length; ) !1 === f[s].apply(e[0], e[1]) && n.stopOnFalse && ((s = f.length), (e = !1));
        n.memory || (e = !1), (i = !1), u && (f = e ? [] : "");
      },
      l = {
        add: function () {
          return (
            f &&
              (e && !i && ((s = f.length - 1), c.push(e)),
              (function t(r) {
                w.each(r, function (r, i) {
                  p(i) ? (n.unique && l.has(i)) || f.push(i) : i && i.length && "string" !== m(i) && t(i);
                });
              })(arguments),
              e && !i && a()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (n, t) {
              for (var r; -1 < (r = w.inArray(t, f, r)); ) f.splice(r, 1), r <= s && s--;
            }),
            this
          );
        },
        has: function (n) {
          return n ? -1 < w.inArray(n, f) : 0 < f.length;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (u = c = []), (f = e = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (u = c = []), e || i || (f = e = ""), this;
        },
        locked: function () {
          return !!u;
        },
        fireWith: function (n, t) {
          return u || ((t = [n, (t = t || []).slice ? t.slice() : t]), c.push(t), i || a()), this;
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      };
    return l;
  }),
    w.extend({
      Deferred: function (t) {
        var r = [
            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          e = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (n) {
              return e.then(null, n);
            },
            pipe: function () {
              var n = arguments;
              return w
                .Deferred(function (t) {
                  w.each(r, function (r, i) {
                    var e = p(n[i[4]]) && n[i[4]];
                    o[i[1]](function () {
                      var n = e && e.apply(this, arguments);
                      n && p(n.promise)
                        ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                        : t[i[0] + "With"](this, e ? [n] : arguments);
                    });
                  }),
                    (n = null);
                })
                .promise();
            },
            then: function (t, i, e) {
              var o = 0;
              function u(t, r, i, e) {
                return function () {
                  var f = this,
                    c = arguments,
                    s = function () {
                      var n, s;
                      if (!(t < o)) {
                        if ((n = i.apply(f, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                        (s = n && ("object" == typeof n || "function" == typeof n) && n.then),
                          p(s)
                            ? e
                              ? s.call(n, u(o, r, I, e), u(o, r, q, e))
                              : (o++, s.call(n, u(o, r, I, e), u(o, r, q, e), u(o, r, I, r.notifyWith)))
                            : (i !== I && ((f = void 0), (c = [n])), (e || r.resolveWith)(f, c));
                      }
                    },
                    a = e
                      ? s
                      : function () {
                          try {
                            s();
                          } catch (n) {
                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(n, a.stackTrace),
                              o <= t + 1 && (i !== q && ((f = void 0), (c = [n])), r.rejectWith(f, c));
                          }
                        };
                  t ? a() : (w.Deferred.getStackHook && (a.stackTrace = w.Deferred.getStackHook()), n.setTimeout(a));
                };
              }
              return w
                .Deferred(function (n) {
                  r[0][3].add(u(0, n, p(e) ? e : I, n.notifyWith)), r[1][3].add(u(0, n, p(t) ? t : I)), r[2][3].add(u(0, n, p(i) ? i : q));
                })
                .promise();
            },
            promise: function (n) {
              return null != n ? w.extend(n, e) : e;
            }
          },
          o = {};
        return (
          w.each(r, function (n, t) {
            var u = t[2],
              f = t[5];
            (e[t[1]] = u.add),
              f &&
                u.add(
                  function () {
                    i = f;
                  },
                  r[3 - n][2].disable,
                  r[3 - n][3].disable,
                  r[0][2].lock,
                  r[0][3].lock
                ),
              u.add(t[3].fire),
              (o[t[0]] = function () {
                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
              }),
              (o[t[0] + "With"] = u.fireWith);
          }),
          e.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (n) {
        var t = arguments.length,
          r = t,
          i = Array(r),
          o = e.call(arguments),
          u = w.Deferred(),
          f = function (n) {
            return function (r) {
              (i[n] = this), (o[n] = 1 < arguments.length ? e.call(arguments) : r), --t || u.resolveWith(i, o);
            };
          };
        if (t <= 1 && (_(n, u.done(f(r)).resolve, u.reject, !t), "pending" === u.state() || p(o[r] && o[r].then))) return u.then();
        for (; r--; ) _(o[r], f(r), u.reject);
        return u.promise();
      }
    });
  var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, r) {
    n.console && n.console.warn && t && L.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, r);
  }),
    (w.readyException = function (t) {
      n.setTimeout(function () {
        throw t;
      });
    });
  var N = w.Deferred();
  function P() {
    g.removeEventListener("DOMContentLoaded", P), n.removeEventListener("load", P), w.ready();
  }
  (w.fn.ready = function (n) {
    return (
      N.then(n).catch(function (n) {
        w.readyException(n);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (n) {
        (!0 === n ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== n && 0 < --w.readyWait) || N.resolveWith(g, [w]);
      }
    }),
    (w.ready.then = N.then),
    "complete" === g.readyState || ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? n.setTimeout(w.ready)
      : (g.addEventListener("DOMContentLoaded", P), n.addEventListener("load", P));
  var z = function (n, t, r, i, e, o, u) {
      var f = 0,
        c = n.length,
        s = null == r;
      if ("object" === m(r)) for (f in ((e = !0), r)) z(n, t, f, r[f], !0, o, u);
      else if (
        void 0 !== i &&
        ((e = !0),
        p(i) || (u = !0),
        s &&
          (u
            ? (t.call(n, i), (t = null))
            : ((s = t),
              (t = function (n, t, r) {
                return s.call(w(n), r);
              }))),
        t)
      )
        for (; f < c; f++) t(n[f], r, u ? i : i.call(n[f], f, t(n[f], r)));
      return e ? n : s ? t.call(n) : c ? t(n[0], r) : o;
    },
    W = /^-ms-/,
    U = /-([a-z])/g;
  function G(n, t) {
    return t.toUpperCase();
  }
  function X(n) {
    return n.replace(W, "ms-").replace(U, G);
  }
  var B = function (n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (n) {
        var t = n[this.expando];
        return (
          t ||
            ((t = {}),
            B(n) && (n.nodeType ? (n[this.expando] = t) : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function (n, t, r) {
        var i,
          e = this.cache(n);
        if ("string" == typeof t) e[X(t)] = r;
        else for (i in t) e[X(i)] = t[i];
        return e;
      },
      get: function (n, t) {
        return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][X(t)];
      },
      access: function (n, t, r) {
        return void 0 === t || (t && "string" == typeof t && void 0 === r) ? this.get(n, t) : (this.set(n, t, r), void 0 !== r ? r : t);
      },
      remove: function (n, t) {
        var r,
          i = n[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            r = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(H) || []).length;
            for (; r--; ) delete i[t[r]];
          }
          (void 0 === t || w.isEmptyObject(i)) && (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
        }
      },
      hasData: function (n) {
        var t = n[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      }
    });
  var J = new Y(),
    K = new Y(),
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function V(n, t, r) {
    var i, e;
    if (void 0 === r && 1 === n.nodeType)
      if (((i = "data-" + t.replace(Z, "-$&").toLowerCase()), "string" == typeof (r = n.getAttribute(i)))) {
        try {
          r = "true" === (e = r) || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e));
        } catch (n) {}
        K.set(n, t, r);
      } else r = void 0;
    return r;
  }
  w.extend({
    hasData: function (n) {
      return K.hasData(n) || J.hasData(n);
    },
    data: function (n, t, r) {
      return K.access(n, t, r);
    },
    removeData: function (n, t) {
      K.remove(n, t);
    },
    t: function (n, t, r) {
      return J.access(n, t, r);
    },
    i: function (n, t) {
      J.remove(n, t);
    }
  }),
    w.fn.extend({
      data: function (n, t) {
        var r,
          i,
          e,
          o = this[0],
          u = o && o.attributes;
        if (void 0 === n) {
          if (this.length && ((e = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
            for (r = u.length; r--; ) u[r] && 0 === (i = u[r].name).indexOf("data-") && ((i = X(i.slice(5))), V(o, i, e[i]));
            J.set(o, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof n
          ? this.each(function () {
              K.set(this, n);
            })
          : z(
              this,
              function (t) {
                var r;
                if (o && void 0 === t) return void 0 !== (r = K.get(o, n)) || void 0 !== (r = V(o, n)) ? r : void 0;
                this.each(function () {
                  K.set(this, n, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (n) {
        return this.each(function () {
          K.remove(this, n);
        });
      }
    }),
    w.extend({
      queue: function (n, t, r) {
        var i;
        if (n)
          return (
            (t = (t || "fx") + "queue"),
            (i = J.get(n, t)),
            r && (!i || Array.isArray(r) ? (i = J.access(n, t, w.makeArray(r))) : i.push(r)),
            i || []
          );
      },
      dequeue: function (n, t) {
        t = t || "fx";
        var r = w.queue(n, t),
          i = r.length,
          e = r.shift(),
          o = w.o(n, t);
        "inprogress" === e && ((e = r.shift()), i--),
          e &&
            ("fx" === t && r.unshift("inprogress"),
            delete o.stop,
            e.call(
              n,
              function () {
                w.dequeue(n, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      o: function (n, t) {
        var r = t + "queueHooks";
        return (
          J.get(n, r) ||
          J.access(n, r, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(n, [t + "queue", r]);
            })
          })
        );
      }
    }),
    w.fn.extend({
      queue: function (n, t) {
        var r = 2;
        return (
          "string" != typeof n && ((t = n), (n = "fx"), r--),
          arguments.length < r
            ? w.queue(this[0], n)
            : void 0 === t
            ? this
            : this.each(function () {
                var r = w.queue(this, n, t);
                w.o(this, n), "fx" === n && "inprogress" !== r[0] && w.dequeue(this, n);
              })
        );
      },
      dequeue: function (n) {
        return this.each(function () {
          w.dequeue(this, n);
        });
      },
      clearQueue: function (n) {
        return this.queue(n || "fx", []);
      },
      promise: function (n, t) {
        var r,
          i = 1,
          e = w.Deferred(),
          o = this,
          u = this.length,
          f = function () {
            --i || e.resolveWith(o, [o]);
          };
        for ("string" != typeof n && ((t = n), (n = void 0)), n = n || "fx"; u--; )
          (r = J.get(o[u], n + "queueHooks")) && r.empty && (i++, r.empty.add(f));
        return f(), e.promise(t);
      }
    });
  var nn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    tn = new RegExp("^(?:([+-])=|)(" + nn + ")([a-z%]*)$", "i"),
    rn = ["Top", "Right", "Bottom", "Left"],
    en = g.documentElement,
    on = function (n) {
      return w.contains(n.ownerDocument, n);
    },
    un = { composed: !0 };
  en.getRootNode &&
    (on = function (n) {
      return w.contains(n.ownerDocument, n) || n.getRootNode(un) === n.ownerDocument;
    });
  var fn = function (n, t) {
    return "none" === (n = t || n).style.display || ("" === n.style.display && on(n) && "none" === w.css(n, "display"));
  };
  function cn(n, t, r, i) {
    var e,
      o,
      u = 20,
      f = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(n, t, "");
          },
      c = f(),
      s = (r && r[3]) || (w.cssNumber[t] ? "" : "px"),
      a = n.nodeType && (w.cssNumber[t] || ("px" !== s && +c)) && tn.exec(w.css(n, t));
    if (a && a[3] !== s) {
      for (c /= 2, s = s || a[3], a = +c || 1; u--; ) w.style(n, t, a + s), (1 - o) * (1 - (o = f() / c || 0.5)) <= 0 && (u = 0), (a /= o);
      (a *= 2), w.style(n, t, a + s), (r = r || []);
    }
    return r && ((a = +a || +c || 0), (e = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i && ((i.unit = s), (i.start = a), (i.end = e))), e;
  }
  var sn = {};
  function an(n, t) {
    for (var r, i, e, o, u, f, c, s = [], a = 0, l = n.length; a < l; a++)
      (i = n[a]).style &&
        ((r = i.style.display),
        t
          ? ("none" === r && ((s[a] = J.get(i, "display") || null), s[a] || (i.style.display = "")),
            "" === i.style.display &&
              fn(i) &&
              (s[a] =
                ((c = u = o = void 0),
                (u = (e = i).ownerDocument),
                (f = e.nodeName),
                (c = sn[f]) ||
                  ((o = u.body.appendChild(u.createElement(f))),
                  (c = w.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === c && (c = "block"),
                  (sn[f] = c)))))
          : "none" !== r && ((s[a] = "none"), J.set(i, "display", r)));
    for (a = 0; a < l; a++) null != s[a] && (n[a].style.display = s[a]);
    return n;
  }
  w.fn.extend({
    show: function () {
      return an(this, !0);
    },
    hide: function () {
      return an(this);
    },
    toggle: function (n) {
      return "boolean" == typeof n
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            fn(this) ? w(this).show() : w(this).hide();
          });
    }
  });
  var ln,
    hn,
    dn = /^(?:checkbox|radio)$/i,
    pn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    vn = /^$|^module$|\/(?:java|ecma)script/i;
  (ln = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (hn = g.createElement("input")).setAttribute("type", "radio"),
    hn.setAttribute("checked", "checked"),
    hn.setAttribute("name", "t"),
    ln.appendChild(hn),
    (d.checkClone = ln.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ln.innerHTML = "<textarea>x</textarea>"),
    (d.noCloneChecked = !!ln.cloneNode(!0).lastChild.defaultValue),
    (ln.innerHTML = "<option></option>"),
    (d.option = !!ln.lastChild);
  var gn = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    u: [0, "", ""]
  };
  function bn(n, t) {
    var r;
    return (
      (r =
        void 0 !== n.getElementsByTagName
          ? n.getElementsByTagName(t || "*")
          : void 0 !== n.querySelectorAll
          ? n.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && T(n, t)) ? w.merge([n], r) : r
    );
  }
  function yn(n, t) {
    for (var r = 0, i = n.length; r < i; r++) J.set(n[r], "globalEval", !t || J.get(t[r], "globalEval"));
  }
  (gn.tbody = gn.tfoot = gn.colgroup = gn.caption = gn.thead),
    (gn.th = gn.td),
    d.option || (gn.optgroup = gn.option = [1, "<select multiple='multiple'>", "</select>"]);
  var mn = /<|&#?\w+;/;
  function xn(n, t, r, i, e) {
    for (var o, u, f, c, s, a, l = t.createDocumentFragment(), h = [], d = 0, p = n.length; d < p; d++)
      if ((o = n[d]) || 0 === o)
        if ("object" === m(o)) w.merge(h, o.nodeType ? [o] : o);
        else if (mn.test(o)) {
          for (
            u = u || l.appendChild(t.createElement("div")),
              f = (pn.exec(o) || ["", ""])[1].toLowerCase(),
              c = gn[f] || gn.u,
              u.innerHTML = c[1] + w.htmlPrefilter(o) + c[2],
              a = c[0];
            a--;

          )
            u = u.lastChild;
          w.merge(h, u.childNodes), ((u = l.firstChild).textContent = "");
        } else h.push(t.createTextNode(o));
    for (l.textContent = "", d = 0; (o = h[d++]); )
      if (i && -1 < w.inArray(o, i)) e && e.push(o);
      else if (((s = on(o)), (u = bn(l.appendChild(o), "script")), s && yn(u), r))
        for (a = 0; (o = u[a++]); ) vn.test(o.type || "") && r.push(o);
    return l;
  }
  var wn = /^([^.]*)(?:\.(.+)|)/;
  function jn() {
    return !0;
  }
  function Sn() {
    return !1;
  }
  function kn(n, t) {
    return (
      (n ===
        (function () {
          try {
            return g.activeElement;
          } catch (n) {}
        })()) ==
      ("focus" === t)
    );
  }
  function En(n, t, r, i, e, o) {
    var u, f;
    if ("object" == typeof t) {
      for (f in ("string" != typeof r && ((i = i || r), (r = void 0)), t)) En(n, f, r, i, t[f], o);
      return n;
    }
    if (
      (null == i && null == e
        ? ((e = r), (i = r = void 0))
        : null == e && ("string" == typeof r ? ((e = i), (i = void 0)) : ((e = i), (i = r), (r = void 0))),
      !1 === e)
    )
      e = Sn;
    else if (!e) return n;
    return (
      1 === o &&
        ((u = e),
        ((e = function (n) {
          return w().off(n), u.apply(this, arguments);
        }).guid = u.guid || (u.guid = w.guid++))),
      n.each(function () {
        w.event.add(this, t, e, i, r);
      })
    );
  }
  function An(n, t, r) {
    r
      ? (J.set(n, t, !1),
        w.event.add(n, t, {
          namespace: !1,
          handler: function (n) {
            var i,
              o,
              u = J.get(this, t);
            if (1 & n.isTrigger && this[t]) {
              if (u.length) (w.event.special[t] || {}).delegateType && n.stopPropagation();
              else if (
                ((u = e.call(arguments)),
                J.set(this, t, u),
                (i = r(this, t)),
                this[t](),
                u !== (o = J.get(this, t)) || i ? J.set(this, t, !1) : (o = {}),
                u !== o)
              )
                return n.stopImmediatePropagation(), n.preventDefault(), o && o.value;
            } else
              u.length &&
                (J.set(this, t, { value: w.event.trigger(w.extend(u[0], w.Event.prototype), u.slice(1), this) }),
                n.stopImmediatePropagation());
          }
        }))
      : void 0 === J.get(n, t) && w.event.add(n, t, jn);
  }
  (w.event = {
    global: {},
    add: function (n, t, r, i, e) {
      var o,
        u,
        f,
        c,
        s,
        a,
        l,
        h,
        d,
        p,
        v,
        g = J.get(n);
      if (B(n))
        for (
          r.handler && ((r = (o = r).handler), (e = o.selector)),
            e && w.find.matchesSelector(en, e),
            r.guid || (r.guid = w.guid++),
            (c = g.events) || (c = g.events = Object.create(null)),
            (u = g.handle) ||
              (u = g.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(n, arguments) : void 0;
                }),
            s = (t = (t || "").match(H) || [""]).length;
          s--;

        )
          (d = v = (f = wn.exec(t[s]) || [])[1]),
            (p = (f[2] || "").split(".").sort()),
            d &&
              ((l = w.event.special[d] || {}),
              (d = (e ? l.delegateType : l.bindType) || d),
              (l = w.event.special[d] || {}),
              (a = w.extend(
                {
                  type: d,
                  origType: v,
                  data: i,
                  handler: r,
                  guid: r.guid,
                  selector: e,
                  needsContext: e && w.expr.match.needsContext.test(e),
                  namespace: p.join(".")
                },
                o
              )),
              (h = c[d]) ||
                (((h = c[d] = []).delegateCount = 0),
                (l.setup && !1 !== l.setup.call(n, i, p, u)) || (n.addEventListener && n.addEventListener(d, u))),
              l.add && (l.add.call(n, a), a.handler.guid || (a.handler.guid = r.guid)),
              e ? h.splice(h.delegateCount++, 0, a) : h.push(a),
              (w.event.global[d] = !0));
    },
    remove: function (n, t, r, i, e) {
      var o,
        u,
        f,
        c,
        s,
        a,
        l,
        h,
        d,
        p,
        v,
        g = J.hasData(n) && J.get(n);
      if (g && (c = g.events)) {
        for (s = (t = (t || "").match(H) || [""]).length; s--; )
          if (((d = v = (f = wn.exec(t[s]) || [])[1]), (p = (f[2] || "").split(".").sort()), d)) {
            for (
              l = w.event.special[d] || {},
                h = c[(d = (i ? l.delegateType : l.bindType) || d)] || [],
                f = f[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                u = o = h.length;
              o--;

            )
              (a = h[o]),
                (!e && v !== a.origType) ||
                  (r && r.guid !== a.guid) ||
                  (f && !f.test(a.namespace)) ||
                  (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                  (h.splice(o, 1), a.selector && h.delegateCount--, l.remove && l.remove.call(n, a));
            u && !h.length && ((l.teardown && !1 !== l.teardown.call(n, p, g.handle)) || w.removeEvent(n, d, g.handle), delete c[d]);
          } else for (d in c) w.event.remove(n, d + t[s], r, i, !0);
        w.isEmptyObject(c) && J.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var t,
        r,
        i,
        e,
        o,
        u,
        f = new Array(arguments.length),
        c = w.event.fix(n),
        s = (J.get(this, "events") || Object.create(null))[c.type] || [],
        a = w.event.special[c.type] || {};
      for (f[0] = c, t = 1; t < arguments.length; t++) f[t] = arguments[t];
      if (((c.delegateTarget = this), !a.preDispatch || !1 !== a.preDispatch.call(this, c))) {
        for (u = w.event.handlers.call(this, c, s), t = 0; (e = u[t++]) && !c.isPropagationStopped(); )
          for (c.currentTarget = e.elem, r = 0; (o = e.handlers[r++]) && !c.isImmediatePropagationStopped(); )
            (c.rnamespace && !1 !== o.namespace && !c.rnamespace.test(o.namespace)) ||
              ((c.handleObj = o),
              (c.data = o.data),
              void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(e.elem, f)) &&
                !1 === (c.result = i) &&
                (c.preventDefault(), c.stopPropagation()));
        return a.postDispatch && a.postDispatch.call(this, c), c.result;
      }
    },
    handlers: function (n, t) {
      var r,
        i,
        e,
        o,
        u,
        f = [],
        c = t.delegateCount,
        s = n.target;
      if (c && s.nodeType && !("click" === n.type && 1 <= n.button))
        for (; s !== this; s = s.parentNode || this)
          if (1 === s.nodeType && ("click" !== n.type || !0 !== s.disabled)) {
            for (o = [], u = {}, r = 0; r < c; r++)
              void 0 === u[(e = (i = t[r]).selector + " ")] &&
                (u[e] = i.needsContext ? -1 < w(e, this).index(s) : w.find(e, this, null, [s]).length),
                u[e] && o.push(i);
            o.length && f.push({ elem: s, handlers: o });
          }
      return (s = this), c < t.length && f.push({ elem: s, handlers: t.slice(c) }), f;
    },
    addProp: function (n, t) {
      Object.defineProperty(w.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t });
        }
      });
    },
    fix: function (n) {
      return n[w.expando] ? n : new w.Event(n);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (n) {
          var t = this || n;
          return dn.test(t.type) && t.click && T(t, "input") && An(t, "click", jn), !1;
        },
        trigger: function (n) {
          var t = this || n;
          return dn.test(t.type) && t.click && T(t, "input") && An(t, "click"), !0;
        },
        u: function (n) {
          var t = n.target;
          return (dn.test(t.type) && t.click && T(t, "input") && J.get(t, "click")) || T(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (n) {
          void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
        }
      }
    }
  }),
    (w.removeEvent = function (n, t, r) {
      n.removeEventListener && n.removeEventListener(t, r);
    }),
    (w.Event = function (n, t) {
      if (!(this instanceof w.Event)) return new w.Event(n, t);
      n && n.type
        ? ((this.originalEvent = n),
          (this.type = n.type),
          (this.isDefaultPrevented = n.defaultPrevented || (void 0 === n.defaultPrevented && !1 === n.returnValue) ? jn : Sn),
          (this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
          (this.currentTarget = n.currentTarget),
          (this.relatedTarget = n.relatedTarget))
        : (this.type = n),
        t && w.extend(this, t),
        (this.timeStamp = (n && n.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Sn,
      isPropagationStopped: Sn,
      isImmediatePropagationStopped: Sn,
      isSimulated: !1,
      preventDefault: function () {
        var n = this.originalEvent;
        (this.isDefaultPrevented = jn), n && !this.isSimulated && n.preventDefault();
      },
      stopPropagation: function () {
        var n = this.originalEvent;
        (this.isPropagationStopped = jn), n && !this.isSimulated && n.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var n = this.originalEvent;
        (this.isImmediatePropagationStopped = jn), n && !this.isSimulated && n.stopImmediatePropagation(), this.stopPropagation();
      }
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
      w.event.special[n] = {
        setup: function () {
          return An(this, n, kn), !1;
        },
        trigger: function () {
          return An(this, n), !0;
        },
        u: function () {
          return !0;
        },
        delegateType: t
      };
    }),
    w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (n, t) {
      w.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function (n) {
          var r,
            i = n.relatedTarget,
            e = n.handleObj;
          return (
            (i && (i === this || w.contains(this, i))) || ((n.type = e.origType), (r = e.handler.apply(this, arguments)), (n.type = t)), r
          );
        }
      };
    }),
    w.fn.extend({
      on: function (n, t, r, i) {
        return En(this, n, t, r, i);
      },
      one: function (n, t, r, i) {
        return En(this, n, t, r, i, 1);
      },
      off: function (n, t, r) {
        var i, e;
        if (n && n.preventDefault && n.handleObj)
          return (
            (i = n.handleObj),
            w(n.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
            this
          );
        if ("object" == typeof n) {
          for (e in n) this.off(e, t, n[e]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
          !1 === r && (r = Sn),
          this.each(function () {
            w.event.remove(this, n, r, t);
          })
        );
      }
    });
  var Tn = /<script|<style|<link/i,
    $n = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Dn(n, t) {
    return (T(n, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && w(n).children("tbody")[0]) || n;
  }
  function On(n) {
    return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
  }
  function Cn(n) {
    return "true/" === (n.type || "").slice(0, 5) ? (n.type = n.type.slice(5)) : n.removeAttribute("type"), n;
  }
  function Fn(n, t) {
    var r, i, e, o, u, f;
    if (1 === t.nodeType) {
      if (J.hasData(n) && (f = J.get(n).events))
        for (e in (J.remove(t, "handle events"), f)) for (r = 0, i = f[e].length; r < i; r++) w.event.add(t, e, f[e][r]);
      K.hasData(n) && ((o = K.access(n)), (u = w.extend({}, o)), K.set(t, u));
    }
  }
  function Mn(n, t, r, i) {
    t = o(t);
    var e,
      u,
      f,
      c,
      s,
      a,
      l = 0,
      h = n.length,
      v = h - 1,
      g = t[0],
      b = p(g);
    if (b || (1 < h && "string" == typeof g && !d.checkClone && $n.test(g)))
      return n.each(function (e) {
        var o = n.eq(e);
        b && (t[0] = g.call(this, e, o.html())), Mn(o, t, r, i);
      });
    if (h && ((u = (e = xn(t, n[0].ownerDocument, !1, n, i)).firstChild), 1 === e.childNodes.length && (e = u), u || i)) {
      for (c = (f = w.map(bn(e, "script"), On)).length; l < h; l++)
        (s = e), l !== v && ((s = w.clone(s, !0, !0)), c && w.merge(f, bn(s, "script"))), r.call(n[l], s, l);
      if (c)
        for (a = f[f.length - 1].ownerDocument, w.map(f, Cn), l = 0; l < c; l++)
          (s = f[l]),
            vn.test(s.type || "") &&
              !J.access(s, "globalEval") &&
              w.contains(a, s) &&
              (s.src && "module" !== (s.type || "").toLowerCase()
                ? w.l && !s.noModule && w.l(s.src, { nonce: s.nonce || s.getAttribute("nonce") }, a)
                : y(s.textContent.replace(Rn, ""), s, a));
    }
    return n;
  }
  function Hn(n, t, r) {
    for (var i, e = t ? w.filter(t, n) : n, o = 0; null != (i = e[o]); o++)
      r || 1 !== i.nodeType || w.cleanData(bn(i)), i.parentNode && (r && on(i) && yn(bn(i, "script")), i.parentNode.removeChild(i));
    return n;
  }
  w.extend({
    htmlPrefilter: function (n) {
      return n;
    },
    clone: function (n, t, r) {
      var i,
        e,
        o,
        u,
        f,
        c,
        s,
        a = n.cloneNode(!0),
        l = on(n);
      if (!(d.noCloneChecked || (1 !== n.nodeType && 11 !== n.nodeType) || w.isXMLDoc(n)))
        for (u = bn(a), i = 0, e = (o = bn(n)).length; i < e; i++)
          (f = o[i]),
            "input" === (s = (c = u[i]).nodeName.toLowerCase()) && dn.test(f.type)
              ? (c.checked = f.checked)
              : ("input" !== s && "textarea" !== s) || (c.defaultValue = f.defaultValue);
      if (t)
        if (r) for (o = o || bn(n), u = u || bn(a), i = 0, e = o.length; i < e; i++) Fn(o[i], u[i]);
        else Fn(n, a);
      return 0 < (u = bn(a, "script")).length && yn(u, !l && bn(n, "script")), a;
    },
    cleanData: function (n) {
      for (var t, r, i, e = w.event.special, o = 0; void 0 !== (r = n[o]); o++)
        if (B(r)) {
          if ((t = r[J.expando])) {
            if (t.events) for (i in t.events) e[i] ? w.event.remove(r, i) : w.removeEvent(r, i, t.handle);
            r[J.expando] = void 0;
          }
          r[K.expando] && (r[K.expando] = void 0);
        }
    }
  }),
    w.fn.extend({
      detach: function (n) {
        return Hn(this, n, !0);
      },
      remove: function (n) {
        return Hn(this, n);
      },
      text: function (n) {
        return z(
          this,
          function (n) {
            return void 0 === n
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = n);
                });
          },
          null,
          n,
          arguments.length
        );
      },
      append: function () {
        return Mn(this, arguments, function (n) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Dn(this, n).appendChild(n);
        });
      },
      prepend: function () {
        return Mn(this, arguments, function (n) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Dn(this, n);
            t.insertBefore(n, t.firstChild);
          }
        });
      },
      before: function () {
        return Mn(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this);
        });
      },
      after: function () {
        return Mn(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
        });
      },
      empty: function () {
        for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (w.cleanData(bn(n, !1)), (n.textContent = ""));
        return this;
      },
      clone: function (n, t) {
        return (
          (n = null != n && n),
          (t = null == t ? n : t),
          this.map(function () {
            return w.clone(this, n, t);
          })
        );
      },
      html: function (n) {
        return z(
          this,
          function (n) {
            var t = this[0] || {},
              r = 0,
              i = this.length;
            if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof n && !Tn.test(n) && !gn[(pn.exec(n) || ["", ""])[1].toLowerCase()]) {
              n = w.htmlPrefilter(n);
              try {
                for (; r < i; r++) 1 === (t = this[r] || {}).nodeType && (w.cleanData(bn(t, !1)), (t.innerHTML = n));
                t = 0;
              } catch (n) {}
            }
            t && this.empty().append(n);
          },
          null,
          n,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Mn(
          this,
          arguments,
          function (t) {
            var r = this.parentNode;
            w.inArray(this, n) < 0 && (w.cleanData(bn(this)), r && r.replaceChild(t, this));
          },
          n
        );
      }
    }),
    w.each(
      { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
      function (n, t) {
        w.fn[n] = function (n) {
          for (var r, i = [], e = w(n), o = e.length - 1, f = 0; f <= o; f++)
            (r = f === o ? this : this.clone(!0)), w(e[f])[t](r), u.apply(i, r.get());
          return this.pushStack(i);
        };
      }
    );
  var In = new RegExp("^(" + nn + ")(?!px)[a-z%]+$", "i"),
    qn = function (t) {
      var r = t.ownerDocument.defaultView;
      return (r && r.opener) || (r = n), r.getComputedStyle(t);
    },
    _n = function (n, t, r) {
      var i,
        e,
        o = {};
      for (e in t) (o[e] = n.style[e]), (n.style[e] = t[e]);
      for (e in ((i = r.call(n)), t)) n.style[e] = o[e];
      return i;
    },
    Ln = new RegExp(rn.join("|"), "i");
  function Nn(n, t, r) {
    var i,
      e,
      o,
      u,
      f = n.style;
    return (
      (r = r || qn(n)) &&
        ("" !== (u = r.getPropertyValue(t) || r[t]) || on(n) || (u = w.style(n, t)),
        !d.pixelBoxStyles() &&
          In.test(u) &&
          Ln.test(t) &&
          ((i = f.width),
          (e = f.minWidth),
          (o = f.maxWidth),
          (f.minWidth = f.maxWidth = f.width = u),
          (u = r.width),
          (f.width = i),
          (f.minWidth = e),
          (f.maxWidth = o))),
      void 0 !== u ? u + "" : u
    );
  }
  function Pn(n, t) {
    return {
      get: function () {
        if (!n()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function () {
    function t() {
      if (a) {
        (s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (a.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          en.appendChild(s).appendChild(a);
        var t = n.getComputedStyle(a);
        (i = "1%" !== t.top),
          (c = 12 === r(t.marginLeft)),
          (a.style.right = "60%"),
          (u = 36 === r(t.right)),
          (e = 36 === r(t.width)),
          (a.style.position = "absolute"),
          (o = 12 === r(a.offsetWidth / 3)),
          en.removeChild(s),
          (a = null);
      }
    }
    function r(n) {
      return Math.round(parseFloat(n));
    }
    var i,
      e,
      o,
      u,
      f,
      c,
      s = g.createElement("div"),
      a = g.createElement("div");
    a.style &&
      ((a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (d.clearCloneStyle = "content-box" === a.style.backgroundClip),
      w.extend(d, {
        boxSizingReliable: function () {
          return t(), e;
        },
        pixelBoxStyles: function () {
          return t(), u;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), c;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, r, i, e;
          return (
            null == f &&
              ((t = g.createElement("table")),
              (r = g.createElement("tr")),
              (i = g.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
              (r.style.cssText = "border:1px solid"),
              (r.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              en.appendChild(t).appendChild(r).appendChild(i),
              (e = n.getComputedStyle(r)),
              (f = parseInt(e.height, 10) + parseInt(e.borderTopWidth, 10) + parseInt(e.borderBottomWidth, 10) === r.offsetHeight),
              en.removeChild(t)),
            f
          );
        }
      }));
  })();
  var zn = ["Webkit", "Moz", "ms"],
    Wn = g.createElement("div").style,
    Un = {};
  function Gn(n) {
    return (
      w.cssProps[n] ||
      Un[n] ||
      (n in Wn
        ? n
        : (Un[n] =
            (function (n) {
              for (var t = n[0].toUpperCase() + n.slice(1), r = zn.length; r--; ) if ((n = zn[r] + t) in Wn) return n;
            })(n) || n))
    );
  }
  var Xn = /^(none|table(?!-c[ea]).+)/,
    Bn = /^--/,
    Yn = { position: "absolute", visibility: "hidden", display: "block" },
    Jn = { letterSpacing: "0", fontWeight: "400" };
  function Kn(n, t, r) {
    var i = tn.exec(t);
    return i ? Math.max(0, i[2] - (r || 0)) + (i[3] || "px") : t;
  }
  function Qn(n, t, r, i, e, o) {
    var u = "width" === t ? 1 : 0,
      f = 0,
      c = 0;
    if (r === (i ? "border" : "content")) return 0;
    for (; u < 4; u += 2)
      "margin" === r && (c += w.css(n, r + rn[u], !0, e)),
        i
          ? ("content" === r && (c -= w.css(n, "padding" + rn[u], !0, e)),
            "margin" !== r && (c -= w.css(n, "border" + rn[u] + "Width", !0, e)))
          : ((c += w.css(n, "padding" + rn[u], !0, e)),
            "padding" !== r ? (c += w.css(n, "border" + rn[u] + "Width", !0, e)) : (f += w.css(n, "border" + rn[u] + "Width", !0, e)));
    return !i && 0 <= o && (c += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - f - 0.5)) || 0), c;
  }
  function Zn(n, t, r) {
    var i = qn(n),
      e = (!d.boxSizingReliable() || r) && "border-box" === w.css(n, "boxSizing", !1, i),
      o = e,
      u = Nn(n, t, i),
      f = "offset" + t[0].toUpperCase() + t.slice(1);
    if (In.test(u)) {
      if (!r) return u;
      u = "auto";
    }
    return (
      ((!d.boxSizingReliable() && e) ||
        (!d.reliableTrDimensions() && T(n, "tr")) ||
        "auto" === u ||
        (!parseFloat(u) && "inline" === w.css(n, "display", !1, i))) &&
        n.getClientRects().length &&
        ((e = "border-box" === w.css(n, "boxSizing", !1, i)), (o = f in n) && (u = n[f])),
      (u = parseFloat(u) || 0) + Qn(n, t, r || (e ? "border" : "content"), o, i, u) + "px"
    );
  }
  function Vn(n, t, r, i, e) {
    return new Vn.prototype.init(n, t, r, i, e);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (n, t) {
          if (t) {
            var r = Nn(n, "opacity");
            return "" === r ? "1" : r;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (n, t, r, i) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var e,
          o,
          u,
          f = X(t),
          c = Bn.test(t),
          s = n.style;
        if ((c || (t = Gn(f)), (u = w.cssHooks[t] || w.cssHooks[f]), void 0 === r))
          return u && "get" in u && void 0 !== (e = u.get(n, !1, i)) ? e : s[t];
        "string" == (o = typeof r) && (e = tn.exec(r)) && e[1] && ((r = cn(n, t, e)), (o = "number")),
          null != r &&
            r == r &&
            ("number" !== o || c || (r += (e && e[3]) || (w.cssNumber[f] ? "" : "px")),
            d.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
            (u && "set" in u && void 0 === (r = u.set(n, r, i))) || (c ? s.setProperty(t, r) : (s[t] = r)));
      }
    },
    css: function (n, t, r, i) {
      var e,
        o,
        u,
        f = X(t);
      return (
        Bn.test(t) || (t = Gn(f)),
        (u = w.cssHooks[t] || w.cssHooks[f]) && "get" in u && (e = u.get(n, !0, r)),
        void 0 === e && (e = Nn(n, t, i)),
        "normal" === e && t in Jn && (e = Jn[t]),
        "" === r || r ? ((o = parseFloat(e)), !0 === r || isFinite(o) ? o || 0 : e) : e
      );
    }
  }),
    w.each(["height", "width"], function (n, t) {
      w.cssHooks[t] = {
        get: function (n, r, i) {
          if (r)
            return !Xn.test(w.css(n, "display")) || (n.getClientRects().length && n.getBoundingClientRect().width)
              ? Zn(n, t, i)
              : _n(n, Yn, function () {
                  return Zn(n, t, i);
                });
        },
        set: function (n, r, i) {
          var e,
            o = qn(n),
            u = !d.scrollboxSize() && "absolute" === o.position,
            f = (u || i) && "border-box" === w.css(n, "boxSizing", !1, o),
            c = i ? Qn(n, t, i, f, o) : 0;
          return (
            f && u && (c -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qn(n, t, "border", !1, o) - 0.5)),
            c && (e = tn.exec(r)) && "px" !== (e[3] || "px") && ((n.style[t] = r), (r = w.css(n, t))),
            Kn(0, r, c)
          );
        }
      };
    }),
    (w.cssHooks.marginLeft = Pn(d.reliableMarginLeft, function (n, t) {
      if (t)
        return (
          (parseFloat(Nn(n, "marginLeft")) ||
            n.getBoundingClientRect().left -
              _n(n, { marginLeft: 0 }, function () {
                return n.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
      (w.cssHooks[n + t] = {
        expand: function (r) {
          for (var i = 0, e = {}, o = "string" == typeof r ? r.split(" ") : [r]; i < 4; i++) e[n + rn[i] + t] = o[i] || o[i - 2] || o[0];
          return e;
        }
      }),
        "margin" !== n && (w.cssHooks[n + t].set = Kn);
    }),
    w.fn.extend({
      css: function (n, t) {
        return z(
          this,
          function (n, t, r) {
            var i,
              e,
              o = {},
              u = 0;
            if (Array.isArray(t)) {
              for (i = qn(n), e = t.length; u < e; u++) o[t[u]] = w.css(n, t[u], !1, i);
              return o;
            }
            return void 0 !== r ? w.style(n, t, r) : w.css(n, t);
          },
          n,
          t,
          1 < arguments.length
        );
      }
    }),
    (((w.Tween = Vn).prototype = {
      constructor: Vn,
      init: function (n, t, r, i, e, o) {
        (this.elem = n),
          (this.prop = r),
          (this.easing = e || w.easing.u),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (w.cssNumber[r] ? "" : "px"));
      },
      cur: function () {
        var n = Vn.propHooks[this.prop];
        return n && n.get ? n.get(this) : Vn.propHooks.u.get(this);
      },
      run: function (n) {
        var t,
          r = Vn.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = w.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration))
            : (this.pos = t = n),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          r && r.set ? r.set(this) : Vn.propHooks.u.set(this),
          this
        );
      }
    }).init.prototype = Vn.prototype),
    ((Vn.propHooks = {
      u: {
        get: function (n) {
          var t;
          return 1 !== n.elem.nodeType || (null != n.elem[n.prop] && null == n.elem.style[n.prop])
            ? n.elem[n.prop]
            : (t = w.css(n.elem, n.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (n) {
          w.fx.step[n.prop]
            ? w.fx.step[n.prop](n)
            : 1 !== n.elem.nodeType || (!w.cssHooks[n.prop] && null == n.elem.style[Gn(n.prop)])
            ? (n.elem[n.prop] = n.now)
            : w.style(n.elem, n.prop, n.now + n.unit);
        }
      }
    }).scrollTop = Vn.propHooks.scrollLeft =
      {
        set: function (n) {
          n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
        }
      }),
    (w.easing = {
      linear: function (n) {
        return n;
      },
      swing: function (n) {
        return 0.5 - Math.cos(n * Math.PI) / 2;
      },
      u: "swing"
    }),
    (w.fx = Vn.prototype.init),
    (w.fx.step = {});
  var nt,
    tt,
    rt,
    it,
    et = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function ut() {
    tt && (!1 === g.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, w.fx.interval), w.fx.tick());
  }
  function ft() {
    return (
      n.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ct(n, t) {
    var r,
      i = 0,
      e = { height: n };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) e["margin" + (r = rn[i])] = e["padding" + r] = n;
    return t && (e.opacity = e.width = n), e;
  }
  function st(n, t, r) {
    for (var i, e = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, u = e.length; o < u; o++)
      if ((i = e[o].call(r, t, n))) return i;
  }
  function at(n, t, r) {
    var i,
      e,
      o = 0,
      u = at.prefilters.length,
      f = w.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (e) return !1;
        for (
          var t = nt || ft(), r = Math.max(0, s.startTime + s.duration - t), i = 1 - (r / s.duration || 0), o = 0, u = s.tweens.length;
          o < u;
          o++
        )
          s.tweens[o].run(i);
        return f.notifyWith(n, [s, i, r]), i < 1 && u ? r : (u || f.notifyWith(n, [s, 1, 0]), f.resolveWith(n, [s]), !1);
      },
      s = f.promise({
        elem: n,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing.u }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: nt || ft(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var i = w.Tween(n, s.opts, t, r, s.opts.specialEasing[t] || s.opts.easing);
          return s.tweens.push(i), i;
        },
        stop: function (t) {
          var r = 0,
            i = t ? s.tweens.length : 0;
          if (e) return this;
          for (e = !0; r < i; r++) s.tweens[r].run(1);
          return t ? (f.notifyWith(n, [s, 1, 0]), f.resolveWith(n, [s, t])) : f.rejectWith(n, [s, t]), this;
        }
      }),
      a = s.props;
    for (
      (function (n, t) {
        var r, i, e, o, u;
        for (r in n)
          if (
            ((e = t[(i = X(r))]),
            (o = n[r]),
            Array.isArray(o) && ((e = o[1]), (o = n[r] = o[0])),
            r !== i && ((n[i] = o), delete n[r]),
            (u = w.cssHooks[i]) && ("expand" in u))
          )
            for (r in ((o = u.expand(o)), delete n[i], o)) (r in n) || ((n[r] = o[r]), (t[r] = e));
          else t[i] = e;
      })(a, s.opts.specialEasing);
      o < u;
      o++
    )
      if ((i = at.prefilters[o].call(s, n, a, s.opts))) return p(i.stop) && (w.o(s.elem, s.opts.queue).stop = i.stop.bind(i)), i;
    return (
      w.map(a, st, s),
      p(s.opts.start) && s.opts.start.call(n, s),
      s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always),
      w.fx.timer(w.extend(c, { elem: n, anim: s, queue: s.opts.queue })),
      s
    );
  }
  (w.Animation = w.extend(at, {
    tweeners: {
      "*": [
        function (n, t) {
          var r = this.createTween(n, t);
          return cn(r.elem, n, tn.exec(t), r), r;
        }
      ]
    },
    tweener: function (n, t) {
      p(n) ? ((t = n), (n = ["*"])) : (n = n.match(H));
      for (var r, i = 0, e = n.length; i < e; i++) (r = n[i]), (at.tweeners[r] = at.tweeners[r] || []), at.tweeners[r].unshift(t);
    },
    prefilters: [
      function (n, t, r) {
        var i,
          e,
          o,
          u,
          f,
          c,
          s,
          a,
          l = "width" in t || "height" in t,
          h = this,
          d = {},
          p = n.style,
          v = n.nodeType && fn(n),
          g = J.get(n, "fxshow");
        for (i in (r.queue ||
          (null == (u = w.o(n, "fx")).unqueued &&
            ((u.unqueued = 0),
            (f = u.empty.fire),
            (u.empty.fire = function () {
              u.unqueued || f();
            })),
          u.unqueued++,
          h.always(function () {
            h.always(function () {
              u.unqueued--, w.queue(n, "fx").length || u.empty.fire();
            });
          })),
        t))
          if (((e = t[i]), et.test(e))) {
            if ((delete t[i], (o = o || "toggle" === e), e === (v ? "hide" : "show"))) {
              if ("show" !== e || !g || void 0 === g[i]) continue;
              v = !0;
            }
            d[i] = (g && g[i]) || w.style(n, i);
          }
        if ((c = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (i in (l &&
            1 === n.nodeType &&
            ((r.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (s = g && g.display) && (s = J.get(n, "display")),
            "none" === (a = w.css(n, "display")) &&
              (s ? (a = s) : (an([n], !0), (s = n.style.display || s), (a = w.css(n, "display")), an([n]))),
            ("inline" === a || ("inline-block" === a && null != s)) &&
              "none" === w.css(n, "float") &&
              (c ||
                (h.done(function () {
                  p.display = s;
                }),
                null == s && ((a = p.display), (s = "none" === a ? "" : a))),
              (p.display = "inline-block"))),
          r.overflow &&
            ((p.overflow = "hidden"),
            h.always(function () {
              (p.overflow = r.overflow[0]), (p.overflowX = r.overflow[1]), (p.overflowY = r.overflow[2]);
            })),
          (c = !1),
          d))
            c ||
              (g ? "hidden" in g && (v = g.hidden) : (g = J.access(n, "fxshow", { display: s })),
              o && (g.hidden = !v),
              v && an([n], !0),
              h.done(function () {
                for (i in (v || an([n]), J.remove(n, "fxshow"), d)) w.style(n, i, d[i]);
              })),
              (c = st(v ? g[i] : 0, i, h)),
              i in g || ((g[i] = c.start), v && ((c.end = c.start), (c.start = 0)));
      }
    ],
    prefilter: function (n, t) {
      t ? at.prefilters.unshift(n) : at.prefilters.push(n);
    }
  })),
    (w.speed = function (n, t, r) {
      var i =
        n && "object" == typeof n
          ? w.extend({}, n)
          : { complete: r || (!r && t) || (p(n) && n), duration: n, easing: (r && t) || (t && !p(t) && t) };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds.u)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (n, t, r, i) {
        return this.filter(fn).css("opacity", 0).show().end().animate({ opacity: t }, n, r, i);
      },
      animate: function (n, t, r, i) {
        var e = w.isEmptyObject(n),
          o = w.speed(t, r, i),
          u = function () {
            var t = at(this, w.extend({}, n), o);
            (e || J.get(this, "finish")) && t.stop(!0);
          };
        return (u.finish = u), e || !1 === o.queue ? this.each(u) : this.queue(o.queue, u);
      },
      stop: function (n, t, r) {
        var i = function (n) {
          var t = n.stop;
          delete n.stop, t(r);
        };
        return (
          "string" != typeof n && ((r = t), (t = n), (n = void 0)),
          t && this.queue(n || "fx", []),
          this.each(function () {
            var t = !0,
              e = null != n && n + "queueHooks",
              o = w.timers,
              u = J.get(this);
            if (e) u[e] && u[e].stop && i(u[e]);
            else for (e in u) u[e] && u[e].stop && ot.test(e) && i(u[e]);
            for (e = o.length; e--; )
              o[e].elem !== this || (null != n && o[e].queue !== n) || (o[e].anim.stop(r), (t = !1), o.splice(e, 1));
            (!t && r) || w.dequeue(this, n);
          })
        );
      },
      finish: function (n) {
        return (
          !1 !== n && (n = n || "fx"),
          this.each(function () {
            var t,
              r = J.get(this),
              i = r[n + "queue"],
              e = r[n + "queueHooks"],
              o = w.timers,
              u = i ? i.length : 0;
            for (r.finish = !0, w.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = o.length; t--; )
              o[t].elem === this && o[t].queue === n && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < u; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete r.finish;
          })
        );
      }
    }),
    w.each(["toggle", "show", "hide"], function (n, t) {
      var r = w.fn[t];
      w.fn[t] = function (n, i, e) {
        return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ct(t, !0), n, i, e);
      };
    }),
    w.each(
      {
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function (n, t) {
        w.fn[n] = function (n, r, i) {
          return this.animate(t, n, r, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var n,
        t = 0,
        r = w.timers;
      for (nt = Date.now(); t < r.length; t++) (n = r[t])() || r[t] !== n || r.splice(t--, 1);
      r.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (n) {
      w.timers.push(n), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      tt || ((tt = !0), ut());
    }),
    (w.fx.stop = function () {
      tt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, u: 400 }),
    (w.fn.delay = function (t, r) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (r = r || "fx"),
        this.queue(r, function (r, i) {
          var e = n.setTimeout(r, t);
          i.stop = function () {
            n.clearTimeout(e);
          };
        })
      );
    }),
    (rt = g.createElement("input")),
    (it = g.createElement("select").appendChild(g.createElement("option"))),
    (rt.type = "checkbox"),
    (d.checkOn = "" !== rt.value),
    (d.optSelected = it.selected),
    ((rt = g.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (d.radioValue = "t" === rt.value);
  var lt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (n, t) {
      return z(this, w.attr, n, t, 1 < arguments.length);
    },
    removeAttr: function (n) {
      return this.each(function () {
        w.removeAttr(this, n);
      });
    }
  }),
    w.extend({
      attr: function (n, t, r) {
        var i,
          e,
          o = n.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === n.getAttribute
            ? w.prop(n, t, r)
            : ((1 === o && w.isXMLDoc(n)) || (e = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)),
              void 0 !== r
                ? null === r
                  ? void w.removeAttr(n, t)
                  : e && "set" in e && void 0 !== (i = e.set(n, r, t))
                  ? i
                  : (n.setAttribute(t, r + ""), r)
                : e && "get" in e && null !== (i = e.get(n, t))
                ? i
                : null == (i = w.find.attr(n, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (n, t) {
            if (!d.radioValue && "radio" === t && T(n, "input")) {
              var r = n.value;
              return n.setAttribute("type", t), r && (n.value = r), t;
            }
          }
        }
      },
      removeAttr: function (n, t) {
        var r,
          i = 0,
          e = t && t.match(H);
        if (e && 1 === n.nodeType) for (; (r = e[i++]); ) n.removeAttribute(r);
      }
    }),
    (lt = {
      set: function (n, t, r) {
        return !1 === t ? w.removeAttr(n, r) : n.setAttribute(r, r), r;
      }
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (n, t) {
      var r = ht[t] || w.find.attr;
      ht[t] = function (n, t, i) {
        var e,
          o,
          u = t.toLowerCase();
        return i || ((o = ht[u]), (ht[u] = e), (e = null != r(n, t, i) ? u : null), (ht[u] = o)), e;
      };
    });
  var dt = /^(?:input|select|textarea|button)$/i,
    pt = /^(?:a|area)$/i;
  function vt(n) {
    return (n.match(H) || []).join(" ");
  }
  function gt(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }
  function bt(n) {
    return Array.isArray(n) ? n : ("string" == typeof n && n.match(H)) || [];
  }
  w.fn.extend({
    prop: function (n, t) {
      return z(this, w.prop, n, t, 1 < arguments.length);
    },
    removeProp: function (n) {
      return this.each(function () {
        delete this[w.propFix[n] || n];
      });
    }
  }),
    w.extend({
      prop: function (n, t, r) {
        var i,
          e,
          o = n.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(n)) || ((t = w.propFix[t] || t), (e = w.propHooks[t])),
            void 0 !== r
              ? e && "set" in e && void 0 !== (i = e.set(n, r, t))
                ? i
                : (n[t] = r)
              : e && "get" in e && null !== (i = e.get(n, t))
              ? i
              : n[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (n) {
            var t = w.find.attr(n, "tabindex");
            return t ? parseInt(t, 10) : dt.test(n.nodeName) || (pt.test(n.nodeName) && n.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    d.optSelected ||
      (w.propHooks.selected = {
        get: function (n) {
          var t = n.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (n) {
          var t = n.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    w.each(
      ["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (n) {
        var t,
          r,
          i,
          e,
          o,
          u,
          f,
          c = 0;
        if (p(n))
          return this.each(function (t) {
            w(this).addClass(n.call(this, t, gt(this)));
          });
        if ((t = bt(n)).length)
          for (; (r = this[c++]); )
            if (((e = gt(r)), (i = 1 === r.nodeType && " " + vt(e) + " "))) {
              for (u = 0; (o = t[u++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              e !== (f = vt(i)) && r.setAttribute("class", f);
            }
        return this;
      },
      removeClass: function (n) {
        var t,
          r,
          i,
          e,
          o,
          u,
          f,
          c = 0;
        if (p(n))
          return this.each(function (t) {
            w(this).removeClass(n.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = bt(n)).length)
          for (; (r = this[c++]); )
            if (((e = gt(r)), (i = 1 === r.nodeType && " " + vt(e) + " "))) {
              for (u = 0; (o = t[u++]); ) for (; -1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
              e !== (f = vt(i)) && r.setAttribute("class", f);
            }
        return this;
      },
      toggleClass: function (n, t) {
        var r = typeof n,
          i = "string" === r || Array.isArray(n);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(n)
            : this.removeClass(n)
          : p(n)
          ? this.each(function (r) {
              w(this).toggleClass(n.call(this, r, gt(this), t), t);
            })
          : this.each(function () {
              var t, e, o, u;
              if (i) for (e = 0, o = w(this), u = bt(n); (t = u[e++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== n && "boolean" !== r) ||
                  ((t = gt(this)) && J.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : J.get(this, "__className__") || ""));
            });
      },
      hasClass: function (n) {
        var t,
          r,
          i = 0;
        for (t = " " + n + " "; (r = this[i++]); ) if (1 === r.nodeType && -1 < (" " + vt(gt(r)) + " ").indexOf(t)) return !0;
        return !1;
      }
    });
  var yt = /\r/g;
  w.fn.extend({
    val: function (n) {
      var t,
        r,
        i,
        e = this[0];
      return arguments.length
        ? ((i = p(n)),
          this.each(function (r) {
            var e;
            1 === this.nodeType &&
              (null == (e = i ? n.call(this, r, w(this).val()) : n)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : Array.isArray(e) &&
                  (e = w.map(e, function (n) {
                    return null == n ? "" : n + "";
                  })),
              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
        ? (t = w.valHooks[e.type] || w.valHooks[e.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(e, "value"))
          ? r
          : "string" == typeof (r = e.value)
          ? r.replace(yt, "")
          : null == r
          ? ""
          : r
        : void 0;
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (n) {
            var t = w.find.attr(n, "value");
            return null != t ? t : vt(w.text(n));
          }
        },
        select: {
          get: function (n) {
            var t,
              r,
              i,
              e = n.options,
              o = n.selectedIndex,
              u = "select-one" === n.type,
              f = u ? null : [],
              c = u ? o + 1 : e.length;
            for (i = o < 0 ? c : u ? o : 0; i < c; i++)
              if (((r = e[i]).selected || i === o) && !r.disabled && (!r.parentNode.disabled || !T(r.parentNode, "optgroup"))) {
                if (((t = w(r).val()), u)) return t;
                f.push(t);
              }
            return f;
          },
          set: function (n, t) {
            for (var r, i, e = n.options, o = w.makeArray(t), u = e.length; u--; )
              ((i = e[u]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (r = !0);
            return r || (n.selectedIndex = -1), o;
          }
        }
      }
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (n, t) {
          if (Array.isArray(t)) return (n.checked = -1 < w.inArray(w(n).val(), t));
        }
      }),
        d.checkOn ||
          (w.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value;
          });
    }),
    (d.focusin = "onfocusin" in n);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (n) {
      n.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, r, i, e) {
      var o,
        u,
        f,
        c,
        s,
        l,
        h,
        d,
        b = [i || g],
        y = a.call(t, "type") ? t.type : t,
        m = a.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((u = d = f = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !mt.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (m = y.split(".")).shift()), m.sort()),
          (s = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = e ? 2 : 3),
          (t.namespace = m.join(".")),
          (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (r = null == r ? [t] : w.makeArray(r, [t])),
          (h = w.event.special[y] || {}),
          e || !h.trigger || !1 !== h.trigger.apply(i, r)))
      ) {
        if (!e && !h.noBubble && !v(i)) {
          for (c = h.delegateType || y, mt.test(c + y) || (u = u.parentNode); u; u = u.parentNode) b.push(u), (f = u);
          f === (i.ownerDocument || g) && b.push(f.defaultView || f.parentWindow || n);
        }
        for (o = 0; (u = b[o++]) && !t.isPropagationStopped(); )
          (d = u),
            (t.type = 1 < o ? c : h.bindType || y),
            (l = (J.get(u, "events") || Object.create(null))[t.type] && J.get(u, "handle")) && l.apply(u, r),
            (l = s && u[s]) && l.apply && B(u) && ((t.result = l.apply(u, r)), !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          e ||
            t.isDefaultPrevented() ||
            (h.u && !1 !== h.u.apply(b.pop(), r)) ||
            !B(i) ||
            (s &&
              p(i[y]) &&
              !v(i) &&
              ((f = i[s]) && (i[s] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && d.addEventListener(y, xt),
              i[y](),
              t.isPropagationStopped() && d.removeEventListener(y, xt),
              (w.event.triggered = void 0),
              f && (i[s] = f))),
          t.result
        );
      }
    },
    simulate: function (n, t, r) {
      var i = w.extend(new w.Event(), r, { type: n, isSimulated: !0 });
      w.event.trigger(i, null, t);
    }
  }),
    w.fn.extend({
      trigger: function (n, t) {
        return this.each(function () {
          w.event.trigger(n, t, this);
        });
      },
      triggerHandler: function (n, t) {
        var r = this[0];
        if (r) return w.event.trigger(n, t, r, !0);
      }
    }),
    d.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
        var r = function (n) {
          w.event.simulate(t, n.target, w.event.fix(n));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              e = J.access(i, t);
            e || i.addEventListener(n, r, !0), J.access(i, t, (e || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              e = J.access(i, t) - 1;
            e ? J.access(i, t, e) : (i.removeEventListener(n, r, !0), J.remove(i, t));
          }
        };
      });
  var wt = n.location,
    jt = { guid: Date.now() },
    St = /\?/;
  w.parseXML = function (t) {
    var r, i;
    if (!t || "string" != typeof t) return null;
    try {
      r = new n.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (i = r && r.getElementsByTagName("parsererror")[0]),
      (r && !i) ||
        w.error(
          "Invalid XML: " +
            (i
              ? w
                  .map(i.childNodes, function (n) {
                    return n.textContent;
                  })
                  .join("\n")
              : t)
        ),
      r
    );
  };
  var kt = /\[\]$/,
    Et = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Tt = /^(?:input|select|textarea|keygen)/i;
  function $t(n, t, r, i) {
    var e;
    if (Array.isArray(t))
      w.each(t, function (t, e) {
        r || kt.test(n) ? i(n, e) : $t(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, r, i);
      });
    else if (r || "object" !== m(t)) i(n, t);
    else for (e in t) $t(n + "[" + e + "]", t[e], r, i);
  }
  (w.param = function (n, t) {
    var r,
      i = [],
      e = function (n, t) {
        var r = p(t) ? t() : t;
        i[i.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r);
      };
    if (null == n) return "";
    if (Array.isArray(n) || (n.jquery && !w.isPlainObject(n)))
      w.each(n, function () {
        e(this.name, this.value);
      });
    else for (r in n) $t(r, n[r], t, e);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var n = w.prop(this, "elements");
          return n ? w.makeArray(n) : this;
        })
          .filter(function () {
            var n = this.type;
            return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !At.test(n) && (this.checked || !dn.test(n));
          })
          .map(function (n, t) {
            var r = w(this).val();
            return null == r
              ? null
              : Array.isArray(r)
              ? w.map(r, function (n) {
                  return { name: t.name, value: n.replace(Et, "\r\n") };
                })
              : { name: t.name, value: r.replace(Et, "\r\n") };
          })
          .get();
      }
    });
  var Rt = /%20/g,
    Dt = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    Ht = {},
    It = {},
    qt = "*/".concat("*"),
    _t = g.createElement("a");
  function Lt(n) {
    return function (t, r) {
      "string" != typeof t && ((r = t), (t = "*"));
      var i,
        e = 0,
        o = t.toLowerCase().match(H) || [];
      if (p(r))
        for (; (i = o[e++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (n[i] = n[i] || []).unshift(r)) : (n[i] = n[i] || []).push(r);
    };
  }
  function Nt(n, t, r, i) {
    var e = {},
      o = n === It;
    function u(f) {
      var c;
      return (
        (e[f] = !0),
        w.each(n[f] || [], function (n, f) {
          var s = f(t, r, i);
          return "string" != typeof s || o || e[s] ? (o ? !(c = s) : void 0) : (t.dataTypes.unshift(s), u(s), !1);
        }),
        c
      );
    }
    return u(t.dataTypes[0]) || (!e["*"] && u("*"));
  }
  function Pt(n, t) {
    var r,
      i,
      e = w.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((e[r] ? n : i || (i = {}))[r] = t[r]);
    return i && w.extend(!0, n, i), n;
  }
  (_t.href = wt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": qt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (n, t) {
        return t ? Pt(Pt(n, w.ajaxSettings), t) : Pt(w.ajaxSettings, n);
      },
      ajaxPrefilter: Lt(Ht),
      ajaxTransport: Lt(It),
      ajax: function (t, r) {
        "object" == typeof t && ((r = t), (t = void 0)), (r = r || {});
        var i,
          e,
          o,
          u,
          f,
          c,
          s,
          a,
          l,
          h,
          d = w.ajaxSetup({}, r),
          p = d.context || d,
          v = d.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          b = w.Deferred(),
          y = w.Callbacks("once memory"),
          m = d.statusCode || {},
          x = {},
          j = {},
          S = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (s) {
                if (!u) for (u = {}; (t = Ct.exec(o)); ) u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = u[n.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return s ? o : null;
            },
            setRequestHeader: function (n, t) {
              return null == s && ((n = j[n.toLowerCase()] = j[n.toLowerCase()] || n), (x[n] = t)), this;
            },
            overrideMimeType: function (n) {
              return null == s && (d.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (s) k.always(n[k.status]);
                else for (t in n) m[t] = [m[t], n[t]];
              return this;
            },
            abort: function (n) {
              var t = n || S;
              return i && i.abort(t), E(0, t), this;
            }
          };
        if (
          (b.promise(k),
          (d.url = ((t || d.url || wt.href) + "").replace(Mt, wt.protocol + "//")),
          (d.type = r.method || r.type || d.method || d.type),
          (d.dataTypes = (d.dataType || "*").toLowerCase().match(H) || [""]),
          null == d.crossDomain)
        ) {
          c = g.createElement("a");
          try {
            (c.href = d.url), (c.href = c.href), (d.crossDomain = _t.protocol + "//" + _t.host != c.protocol + "//" + c.host);
          } catch (t) {
            d.crossDomain = !0;
          }
        }
        if ((d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), Nt(Ht, d, r, k), s))
          return k;
        for (l in ((a = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !Ft.test(d.type)),
        (e = d.url.replace(Dt, "")),
        d.hasContent
          ? d.data &&
            d.processData &&
            0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            (d.data = d.data.replace(Rt, "+"))
          : ((h = d.url.slice(e.length)),
            d.data && (d.processData || "string" == typeof d.data) && ((e += (St.test(e) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache && ((e = e.replace(Ot, "$1")), (h = (St.test(e) ? "&" : "?") + "_=" + jt.guid++ + h)),
            (d.url = e + h)),
        d.ifModified &&
          (w.lastModified[e] && k.setRequestHeader("If-Modified-Since", w.lastModified[e]),
          w.etag[e] && k.setRequestHeader("If-None-Match", w.etag[e])),
        ((d.data && d.hasContent && !1 !== d.contentType) || r.contentType) && k.setRequestHeader("Content-Type", d.contentType),
        k.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          k.setRequestHeader(l, d.headers[l]);
        if (d.beforeSend && (!1 === d.beforeSend.call(p, k, d) || s)) return k.abort();
        if (((S = "abort"), y.add(d.complete), k.done(d.success), k.fail(d.error), (i = Nt(It, d, r, k)))) {
          if (((k.readyState = 1), a && v.trigger("ajaxSend", [k, d]), s)) return k;
          d.async &&
            0 < d.timeout &&
            (f = n.setTimeout(function () {
              k.abort("timeout");
            }, d.timeout));
          try {
            (s = !1), i.send(x, E);
          } catch (t) {
            if (s) throw t;
            E(-1, t);
          }
        } else E(-1, "No Transport");
        function E(t, r, u, c) {
          var l,
            h,
            g,
            x,
            j,
            S = r;
          s ||
            ((s = !0),
            f && n.clearTimeout(f),
            (i = void 0),
            (o = c || ""),
            (k.readyState = 0 < t ? 4 : 0),
            (l = (200 <= t && t < 300) || 304 === t),
            u &&
              (x = (function (n, t, r) {
                for (var i, e, o, u, f = n.contents, c = n.dataTypes; "*" === c[0]; )
                  c.shift(), void 0 === i && (i = n.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (e in f)
                    if (f[e] && f[e].test(i)) {
                      c.unshift(e);
                      break;
                    }
                if (c[0] in r) o = c[0];
                else {
                  for (e in r) {
                    if (!c[0] || n.converters[e + " " + c[0]]) {
                      o = e;
                      break;
                    }
                    u || (u = e);
                  }
                  o = o || u;
                }
                if (o) return o !== c[0] && c.unshift(o), r[o];
              })(d, k, u)),
            !l &&
              -1 < w.inArray("script", d.dataTypes) &&
              w.inArray("json", d.dataTypes) < 0 &&
              (d.converters["text script"] = function () {}),
            (x = (function (n, t, r, i) {
              var e,
                o,
                u,
                f,
                c,
                s = {},
                a = n.dataTypes.slice();
              if (a[1]) for (u in n.converters) s[u.toLowerCase()] = n.converters[u];
              for (o = a.shift(); o; )
                if (
                  (n.responseFields[o] && (r[n.responseFields[o]] = t),
                  !c && i && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                  (c = o),
                  (o = a.shift()))
                )
                  if ("*" === o) o = c;
                  else if ("*" !== c && c !== o) {
                    if (!(u = s[c + " " + o] || s["* " + o]))
                      for (e in s)
                        if ((f = e.split(" "))[1] === o && (u = s[c + " " + f[0]] || s["* " + f[0]])) {
                          !0 === u ? (u = s[e]) : !0 !== s[e] && ((o = f[0]), a.unshift(f[1]));
                          break;
                        }
                    if (!0 !== u)
                      if (u && n.throws) t = u(t);
                      else
                        try {
                          t = u(t);
                        } catch (n) {
                          return { state: "parsererror", error: u ? n : "No conversion from " + c + " to " + o };
                        }
                  }
              return { state: "success", data: t };
            })(d, x, k, l)),
            l
              ? (d.ifModified &&
                  ((j = k.getResponseHeader("Last-Modified")) && (w.lastModified[e] = j),
                  (j = k.getResponseHeader("etag")) && (w.etag[e] = j)),
                204 === t || "HEAD" === d.type
                  ? (S = "nocontent")
                  : 304 === t
                  ? (S = "notmodified")
                  : ((S = x.state), (h = x.data), (l = !(g = x.error))))
              : ((g = S), (!t && S) || ((S = "error"), t < 0 && (t = 0))),
            (k.status = t),
            (k.statusText = (r || S) + ""),
            l ? b.resolveWith(p, [h, S, k]) : b.rejectWith(p, [k, S, g]),
            k.statusCode(m),
            (m = void 0),
            a && v.trigger(l ? "ajaxSuccess" : "ajaxError", [k, d, l ? h : g]),
            y.fireWith(p, [k, S]),
            a && (v.trigger("ajaxComplete", [k, d]), --w.active || w.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (n, t, r) {
        return w.get(n, t, r, "json");
      },
      getScript: function (n, t) {
        return w.get(n, void 0, t, "script");
      }
    }),
    w.each(["get", "post"], function (n, t) {
      w[t] = function (n, r, i, e) {
        return (
          p(r) && ((e = e || i), (i = r), (r = void 0)),
          w.ajax(w.extend({ url: n, type: t, dataType: e, data: r, success: i }, w.isPlainObject(n) && n))
        );
      };
    }),
    w.ajaxPrefilter(function (n) {
      var t;
      for (t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "");
    }),
    (w.l = function (n, t, r) {
      return w.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (n) {
          w.globalEval(n, t, r);
        }
      });
    }),
    w.fn.extend({
      wrapAll: function (n) {
        var t;
        return (
          this[0] &&
            (p(n) && (n = n.call(this[0])),
            (t = w(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var n = this; n.firstElementChild; ) n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return p(n)
          ? this.each(function (t) {
              w(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                r = t.contents();
              r.length ? r.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (n) {
        var t = p(n);
        return this.each(function (r) {
          w(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (w.expr.pseudos.hidden = function (n) {
      return !w.expr.pseudos.visible(n);
    }),
    (w.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (n) {}
    });
  var zt = { 0: 200, 1223: 204 },
    Wt = w.ajaxSettings.xhr();
  (d.cors = !!Wt && "withCredentials" in Wt),
    (d.ajax = Wt = !!Wt),
    w.ajaxTransport(function (t) {
      var r, i;
      if (d.cors || (Wt && !t.crossDomain))
        return {
          send: function (e, o) {
            var u,
              f = t.xhr();
            if ((f.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (u in t.xhrFields) f[u] = t.xhrFields[u];
            for (u in (t.mimeType && f.overrideMimeType && f.overrideMimeType(t.mimeType),
            t.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              f.setRequestHeader(u, e[u]);
            (r = function (n) {
              return function () {
                r &&
                  ((r = i = f.onload = f.onerror = f.onabort = f.ontimeout = f.onreadystatechange = null),
                  "abort" === n
                    ? f.abort()
                    : "error" === n
                    ? "number" != typeof f.status
                      ? o(0, "error")
                      : o(f.status, f.statusText)
                    : o(
                        zt[f.status] || f.status,
                        f.statusText,
                        "text" !== (f.responseType || "text") || "string" != typeof f.responseText
                          ? { binary: f.response }
                          : { text: f.responseText },
                        f.getAllResponseHeaders()
                      ));
              };
            }),
              (f.onload = r()),
              (i = f.onerror = f.ontimeout = r("error")),
              void 0 !== f.onabort
                ? (f.onabort = i)
                : (f.onreadystatechange = function () {
                    4 === f.readyState &&
                      n.setTimeout(function () {
                        r && i();
                      });
                  }),
              (r = r("abort"));
            try {
              f.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (r) throw e;
            }
          },
          abort: function () {
            r && r();
          }
        };
    }),
    w.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (n) {
          return w.globalEval(n), n;
        }
      }
    }),
    w.ajaxPrefilter("script", function (n) {
      void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET");
    }),
    w.ajaxTransport("script", function (n) {
      var t, r;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (i, e) {
            (t = w("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (r = function (n) {
                  t.remove(), (r = null), n && e("error" === n.type ? 404 : 200, n.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            r && r();
          }
        };
    });
  var Ut,
    Gt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var n = Gt.pop() || w.expando + "_" + jt.guid++;
      return (this[n] = !0), n;
    }
  }),
    w.ajaxPrefilter("json jsonp", function (t, r, i) {
      var e,
        o,
        u,
        f =
          !1 !== t.jsonp &&
          (Xt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
              Xt.test(t.data) &&
              "data");
      if (f || "jsonp" === t.dataTypes[0])
        return (
          (e = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          f ? (t[f] = t[f].replace(Xt, "$1" + e)) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
          (t.converters["script json"] = function () {
            return u || w.error(e + " was not called"), u[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = n[e]),
          (n[e] = function () {
            u = arguments;
          }),
          i.always(function () {
            void 0 === o ? w(n).removeProp(e) : (n[e] = o),
              t[e] && ((t.jsonpCallback = r.jsonpCallback), Gt.push(e)),
              u && p(o) && o(u[0]),
              (u = o = void 0);
          }),
          "script"
        );
    }),
    (d.createHTMLDocument =
      (((Ut = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
    (w.parseHTML = function (n, t, r) {
      return "string" != typeof n
        ? []
        : ("boolean" == typeof t && ((r = t), (t = !1)),
          t ||
            (d.createHTMLDocument
              ? (((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href), t.head.appendChild(i))
              : (t = g)),
          (o = !r && []),
          (e = $.exec(n)) ? [t.createElement(e[1])] : ((e = xn([n], t, o)), o && o.length && w(o).remove(), w.merge([], e.childNodes)));
      var i, e, o;
    }),
    (w.fn.load = function (n, t, r) {
      var i,
        e,
        o,
        u = this,
        f = n.indexOf(" ");
      return (
        -1 < f && ((i = vt(n.slice(f))), (n = n.slice(0, f))),
        p(t) ? ((r = t), (t = void 0)) : t && "object" == typeof t && (e = "POST"),
        0 < u.length &&
          w
            .ajax({ url: n, type: e || "GET", dataType: "html", data: t })
            .done(function (n) {
              (o = arguments), u.html(i ? w("<div>").append(w.parseHTML(n)).find(i) : n);
            })
            .always(
              r &&
                function (n, t) {
                  u.each(function () {
                    r.apply(this, o || [n.responseText, t, n]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (n) {
      return w.grep(w.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (n, t, r) {
        var i,
          e,
          o,
          u,
          f,
          c,
          s = w.css(n, "position"),
          a = w(n),
          l = {};
        "static" === s && (n.style.position = "relative"),
          (f = a.offset()),
          (o = w.css(n, "top")),
          (c = w.css(n, "left")),
          ("absolute" === s || "fixed" === s) && -1 < (o + c).indexOf("auto")
            ? ((u = (i = a.position()).top), (e = i.left))
            : ((u = parseFloat(o) || 0), (e = parseFloat(c) || 0)),
          p(t) && (t = t.call(n, r, w.extend({}, f))),
          null != t.top && (l.top = t.top - f.top + u),
          null != t.left && (l.left = t.left - f.left + e),
          "using" in t ? t.using.call(n, l) : a.css(l);
      }
    }),
    w.fn.extend({
      offset: function (n) {
        if (arguments.length)
          return void 0 === n
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, n, t);
              });
        var t,
          r,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (r = i.ownerDocument.defaultView),
              { top: t.top + r.pageYOffset, left: t.left + r.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var n,
            t,
            r,
            i = this[0],
            e = { top: 0, left: 0 };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(), r = i.ownerDocument, n = i.offsetParent || r.documentElement;
              n && (n === r.body || n === r.documentElement) && "static" === w.css(n, "position");

            )
              n = n.parentNode;
            n &&
              n !== i &&
              1 === n.nodeType &&
              (((e = w(n).offset()).top += w.css(n, "borderTopWidth", !0)), (e.left += w.css(n, "borderLeftWidth", !0)));
          }
          return { top: t.top - e.top - w.css(i, "marginTop", !0), left: t.left - e.left - w.css(i, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var n = this.offsetParent; n && "static" === w.css(n, "position"); ) n = n.offsetParent;
          return n || en;
        });
      }
    }),
    w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (n, t) {
      var r = "pageYOffset" === t;
      w.fn[n] = function (i) {
        return z(
          this,
          function (n, i, e) {
            var o;
            if ((v(n) ? (o = n) : 9 === n.nodeType && (o = n.defaultView), void 0 === e)) return o ? o[t] : n[i];
            o ? o.scrollTo(r ? o.pageXOffset : e, r ? e : o.pageYOffset) : (n[i] = e);
          },
          n,
          i,
          arguments.length
        );
      };
    }),
    w.each(["top", "left"], function (n, t) {
      w.cssHooks[t] = Pn(d.pixelPosition, function (n, r) {
        if (r) return (r = Nn(n, t)), In.test(r) ? w(n).position()[t] + "px" : r;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (n, t) {
      w.each({ padding: "inner" + n, content: t, "": "outer" + n }, function (r, i) {
        w.fn[i] = function (e, o) {
          var u = arguments.length && (r || "boolean" != typeof e),
            f = r || (!0 === e || !0 === o ? "margin" : "border");
          return z(
            this,
            function (t, r, e) {
              var o;
              return v(t)
                ? 0 === i.indexOf("outer")
                  ? t["inner" + n]
                  : t.document.documentElement["client" + n]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(t.body["scroll" + n], o["scroll" + n], t.body["offset" + n], o["offset" + n], o["client" + n]))
                : void 0 === e
                ? w.css(t, r, f)
                : w.style(t, r, e, f);
            },
            t,
            u ? e : void 0,
            u
          );
        };
      });
    }),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
      w.fn[t] = function (n) {
        return this.on(t, n);
      };
    }),
    w.fn.extend({
      bind: function (n, t, r) {
        return this.on(n, null, t, r);
      },
      unbind: function (n, t) {
        return this.off(n, null, t);
      },
      delegate: function (n, t, r, i) {
        return this.on(t, n, r, i);
      },
      undelegate: function (n, t, r) {
        return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", r);
      },
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      }
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (n, t) {
        w.fn[t] = function (n, r) {
          return 0 < arguments.length ? this.on(t, null, n, r) : this.trigger(t);
        };
      }
    );
  var Bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (n, t) {
    var r, i, o;
    if (("string" == typeof t && ((r = n[t]), (t = n), (n = r)), p(n)))
      return (
        (i = e.call(arguments, 2)),
        ((o = function () {
          return n.apply(t || this, i.concat(e.call(arguments)));
        }).guid = n.guid =
          n.guid || w.guid++),
        o
      );
  }),
    (w.holdReady = function (n) {
      n ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = T),
    (w.isFunction = p),
    (w.isWindow = v),
    (w.camelCase = X),
    (w.type = m),
    (w.now = Date.now),
    (w.isNumeric = function (n) {
      var t = w.type(n);
      return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
    }),
    (w.trim = function (n) {
      return null == n ? "" : (n + "").replace(Bt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Yt = n.jQuery,
    Jt = n.$;
  return (
    (w.noConflict = function (t) {
      return n.$ === w && (n.$ = Jt), t && n.jQuery === w && (n.jQuery = Yt), w;
    }),
    void 0 === t && (n.jQuery = n.$ = w),
    w
  );
});
