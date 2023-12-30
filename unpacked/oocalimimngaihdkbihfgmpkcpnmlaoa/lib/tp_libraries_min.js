window.telepartyLibLoaded ||
  (console.log("Teleparty: Injecting Libraries"),
  (window.telepartyLibLoaded = !0),
  (function (n, t) {
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
    var e = [],
      r = Object.getPrototypeOf,
      i = e.slice,
      o = e.flat
        ? function (n) {
            return e.flat.call(n);
          }
        : function (n) {
            return e.concat.apply([], n);
          },
      u = e.push,
      c = e.indexOf,
      s = {},
      f = s.toString,
      a = s.hasOwnProperty,
      d = a.toString,
      l = d.call(Object),
      h = {},
      v = function (n) {
        return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item;
      },
      p = function (n) {
        return null != n && n === n.window;
      },
      m = n.document,
      w = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function g(n, t, e) {
      var r,
        i,
        o = (e = e || m).createElement("script");
      if (((o.text = n), t)) for (r in w) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
      e.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(n) {
      return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? s[f.call(n)] || "object" : typeof n;
    }
    var y = "3.6.0",
      x = function (n, t) {
        return new x.fn.init(n, t);
      };
    function C(n) {
      var t = !!n && "length" in n && n.length,
        e = b(n);
      return !v(n) && !p(n) && ("array" === e || 0 === t || ("number" == typeof t && 0 < t && t - 1 in n));
    }
    (x.fn = x.prototype =
      {
        jquery: y,
        constructor: x,
        length: 0,
        toArray: function () {
          return i.call(this);
        },
        get: function (n) {
          return null == n ? i.call(this) : n < 0 ? this[n + this.length] : this[n];
        },
        pushStack: function (n) {
          var t = x.merge(this.constructor(), n);
          return (t.prevObject = this), t;
        },
        each: function (n) {
          return x.each(this, n);
        },
        map: function (n) {
          return this.pushStack(
            x.map(this, function (t, e) {
              return n.call(t, e, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            x.grep(this, function (n, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            x.grep(this, function (n, t) {
              return t % 2;
            })
          );
        },
        eq: function (n) {
          var t = this.length,
            e = +n + (n < 0 ? t : 0);
          return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: e.sort,
        splice: e.splice
      }),
      (x.extend = x.fn.extend =
        function () {
          var n,
            t,
            e,
            r,
            i,
            o,
            u = arguments[0] || {},
            c = 1,
            s = arguments.length,
            f = !1;
          for (
            "boolean" == typeof u && ((f = u), (u = arguments[c] || {}), c++),
              "object" == typeof u || v(u) || (u = {}),
              c === s && ((u = this), c--);
            c < s;
            c++
          )
            if (null != (n = arguments[c]))
              for (t in n)
                (r = n[t]),
                  "__proto__" !== t &&
                    u !== r &&
                    (f && r && (x.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((e = u[t]),
                        (o = i && !Array.isArray(e) ? [] : i || x.isPlainObject(e) ? e : {}),
                        (i = !1),
                        (u[t] = x.extend(f, o, r)))
                      : void 0 !== r && (u[t] = r));
          return u;
        }),
      x.extend({
        expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (n) {
          throw new Error(n);
        },
        noop: function () {},
        isPlainObject: function (n) {
          var t, e;
          return !(
            !n ||
            "[object Object]" !== f.call(n) ||
            ((t = r(n)) && ("function" != typeof (e = a.call(t, "constructor") && t.constructor) || d.call(e) !== l))
          );
        },
        isEmptyObject: function (n) {
          var t;
          for (t in n) return !1;
          return !0;
        },
        globalEval: function (n, t, e) {
          g(n, { nonce: t && t.nonce }, e);
        },
        each: function (n, t) {
          var e,
            r = 0;
          if (C(n)) for (e = n.length; r < e && !1 !== t.call(n[r], r, n[r]); r++);
          else for (r in n) if (!1 === t.call(n[r], r, n[r])) break;
          return n;
        },
        makeArray: function (n, t) {
          var e = t || [];
          return null != n && (C(Object(n)) ? x.merge(e, "string" == typeof n ? [n] : n) : u.call(e, n)), e;
        },
        inArray: function (n, t, e) {
          return null == t ? -1 : c.call(t, n, e);
        },
        merge: function (n, t) {
          for (var e = +t.length, r = 0, i = n.length; r < e; r++) n[i++] = t[r];
          return (n.length = i), n;
        },
        grep: function (n, t, e) {
          for (var r = [], i = 0, o = n.length, u = !e; i < o; i++) !t(n[i], i) !== u && r.push(n[i]);
          return r;
        },
        map: function (n, t, e) {
          var r,
            i,
            u = 0,
            c = [];
          if (C(n)) for (r = n.length; u < r; u++) null != (i = t(n[u], u, e)) && c.push(i);
          else for (u in n) null != (i = t(n[u], u, e)) && c.push(i);
          return o(c);
        },
        guid: 1,
        support: h
      }),
      "function" == typeof Symbol && (x.fn[Symbol.iterator] = e[Symbol.iterator]),
      x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
        s["[object " + t + "]"] = t.toLowerCase();
      });
    var k = (function (n) {
      var t,
        e,
        r,
        i,
        o,
        u,
        c,
        s,
        f,
        a,
        d,
        l,
        h,
        v,
        p,
        m,
        w,
        g,
        b,
        y = "sizzle" + 1 * new Date(),
        x = n.document,
        C = 0,
        k = 0,
        I = fn(),
        j = fn(),
        S = fn(),
        O = fn(),
        R = function (n, t) {
          return n === t && (d = !0), 0;
        },
        F = {}.hasOwnProperty,
        T = [],
        P = T.pop,
        q = T.push,
        E = T.push,
        A = T.slice,
        M = function (n, t) {
          for (var e = 0, r = n.length; e < r; e++) if (n[e] === t) return e;
          return -1;
        },
        _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        D = "[\\x20\\t\\r\\n\\f]",
        U = "(?:\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        V =
          "\\[" +
          D +
          "*(" +
          U +
          ")(?:" +
          D +
          "*([*^$|!~]?=)" +
          D +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          U +
          "))|)" +
          D +
          "*\\]",
        $ = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)",
        K = new RegExp(D + "+", "g"),
        N = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
        L = new RegExp("^" + D + "*," + D + "*"),
        z = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
        B = new RegExp(D + "|>"),
        G = new RegExp($),
        H = new RegExp("^" + U + "$"),
        W = {
          ID: new RegExp("^#(" + U + ")"),
          CLASS: new RegExp("^\\.(" + U + ")"),
          TAG: new RegExp("^(" + U + "|[*])"),
          ATTR: new RegExp("^" + V),
          PSEUDO: new RegExp("^" + $),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              D +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              D +
              "*(?:([+-]|)" +
              D +
              "*(\\d+)|))" +
              D +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + _ + ")$", "i"),
          needsContext: new RegExp(
            "^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)",
            "i"
          )
        },
        J = /HTML$/i,
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        nn = /[+~]/,
        tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])", "g"),
        en = function (n, t) {
          var e = "0x" + n.slice(1) - 65536;
          return t || (e < 0 ? String.fromCharCode(e + 65536) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
        },
        rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        on = function (n, t) {
          return t ? ("\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " ") : "\\" + n;
        },
        un = function () {
          l();
        },
        cn = xn(
          function (n) {
            return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        E.apply((T = A.call(x.childNodes)), x.childNodes), T[x.childNodes.length].nodeType;
      } catch (t) {
        E = {
          apply: T.length
            ? function (n, t) {
                q.apply(n, A.call(t));
              }
            : function (n, t) {
                for (var e = n.length, r = 0; (n[e++] = t[r++]); );
                n.length = e - 1;
              }
        };
      }
      function sn(n, t, r, i) {
        var o,
          c,
          f,
          a,
          d,
          v,
          w,
          g = t && t.ownerDocument,
          x = t ? t.nodeType : 9;
        if (((r = r || []), "string" != typeof n || !n || (1 !== x && 9 !== x && 11 !== x))) return r;
        if (!i && (l(t), (t = t || h), p)) {
          if (11 !== x && (d = Z.exec(n)))
            if ((o = d[1])) {
              if (9 === x) {
                if (!(f = t.getElementById(o))) return r;
                if (f.id === o) return r.push(f), r;
              } else if (g && (f = g.getElementById(o)) && b(t, f) && f.id === o) return r.push(f), r;
            } else {
              if (d[2]) return E.apply(r, t.getElementsByTagName(n)), r;
              if ((o = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return E.apply(r, t.getElementsByClassName(o)), r;
            }
          if (e.qsa && !O[n + " "] && (!m || !m.test(n)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
            if (((w = n), (g = t), 1 === x && (B.test(n) || z.test(n)))) {
              for (
                ((g = (nn.test(n) && gn(t.parentNode)) || t) === t && e.scope) ||
                  ((a = t.getAttribute("id")) ? (a = a.replace(rn, on)) : t.setAttribute("id", (a = y))),
                  c = (v = u(n)).length;
                c--;

              )
                v[c] = (a ? "#" + a : ":scope") + " " + yn(v[c]);
              w = v.join(",");
            }
            try {
              return E.apply(r, g.querySelectorAll(w)), r;
            } catch (t) {
              O(n, !0);
            } finally {
              a === y && t.removeAttribute("id");
            }
          }
        }
        return s(n.replace(N, "$1"), t, r, i);
      }
      function fn() {
        var n = [];
        return function t(e, i) {
          return n.push(e + " ") > r.cacheLength && delete t[n.shift()], (t[e + " "] = i);
        };
      }
      function an(n) {
        return (n[y] = !0), n;
      }
      function dn(n) {
        var t = h.createElement("fieldset");
        try {
          return !!n(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function ln(n, t) {
        for (var e = n.split("|"), i = e.length; i--; ) r.attrHandle[e[i]] = t;
      }
      function hn(n, t) {
        var e = t && n,
          r = e && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (e) for (; (e = e.nextSibling); ) if (e === t) return -1;
        return n ? 1 : -1;
      }
      function vn(n) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === n;
        };
      }
      function pn(n) {
        return function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e || "button" === e) && t.type === n;
        };
      }
      function mn(n) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === n
                  : t.disabled === n
                : t.isDisabled === n || (t.isDisabled !== !n && cn(t) === n)
              : t.disabled === n
            : "label" in t && t.disabled === n;
        };
      }
      function wn(n) {
        return an(function (t) {
          return (
            (t = +t),
            an(function (e, r) {
              for (var i, o = n([], e.length, t), u = o.length; u--; ) e[(i = o[u])] && (e[i] = !(r[i] = e[i]));
            })
          );
        });
      }
      function gn(n) {
        return n && void 0 !== n.getElementsByTagName && n;
      }
      for (t in ((e = sn.support = {}),
      (o = sn.isXML =
        function (n) {
          var t = n && n.namespaceURI,
            e = n && (n.ownerDocument || n).documentElement;
          return !J.test(t || (e && e.nodeName) || "HTML");
        }),
      (l = sn.setDocument =
        function (n) {
          var t,
            i,
            u = n ? n.ownerDocument || n : x;
          return (
            u != h &&
              9 === u.nodeType &&
              u.documentElement &&
              ((v = (h = u).documentElement),
              (p = !o(h)),
              x != h &&
                (i = h.defaultView) &&
                i.top !== i &&
                (i.addEventListener ? i.addEventListener("unload", un, !1) : i.attachEvent && i.attachEvent("onunload", un)),
              (e.scope = dn(function (n) {
                return (
                  v.appendChild(n).appendChild(h.createElement("div")),
                  void 0 !== n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length
                );
              })),
              (e.attributes = dn(function (n) {
                return (n.className = "i"), !n.getAttribute("className");
              })),
              (e.getElementsByTagName = dn(function (n) {
                return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length;
              })),
              (e.getElementsByClassName = Q.test(h.getElementsByClassName)),
              (e.getById = dn(function (n) {
                return (v.appendChild(n).id = y), !h.getElementsByName || !h.getElementsByName(y).length;
              })),
              e.getById
                ? ((r.filter.ID = function (n) {
                    var t = n.replace(tn, en);
                    return function (n) {
                      return n.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (n, t) {
                    if (void 0 !== t.getElementById && p) {
                      var e = t.getElementById(n);
                      return e ? [e] : [];
                    }
                  }))
                : ((r.filter.ID = function (n) {
                    var t = n.replace(tn, en);
                    return function (n) {
                      var e = void 0 !== n.getAttributeNode && n.getAttributeNode("id");
                      return e && e.value === t;
                    };
                  }),
                  (r.find.ID = function (n, t) {
                    if (void 0 !== t.getElementById && p) {
                      var e,
                        r,
                        i,
                        o = t.getElementById(n);
                      if (o) {
                        if ((e = o.getAttributeNode("id")) && e.value === n) return [o];
                        for (i = t.getElementsByName(n), r = 0; (o = i[r++]); )
                          if ((e = o.getAttributeNode("id")) && e.value === n) return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = e.getElementsByTagName
                ? function (n, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0;
                  }
                : function (n, t) {
                    var e,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(n);
                    if ("*" === n) {
                      for (; (e = o[i++]); ) 1 === e.nodeType && r.push(e);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                e.getElementsByClassName &&
                function (n, t) {
                  if (void 0 !== t.getElementsByClassName && p) return t.getElementsByClassName(n);
                }),
              (w = []),
              (m = []),
              (e.qsa = Q.test(h.querySelectorAll)) &&
                (dn(function (n) {
                  var t;
                  (v.appendChild(n).innerHTML =
                    "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    n.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + D + "*(?:''|\"\")"),
                    n.querySelectorAll("[selected]").length || m.push("\\[" + D + "*(?:value|" + _ + ")"),
                    n.querySelectorAll("[id~=" + y + "-]").length || m.push("~="),
                    (t = h.createElement("input")).setAttribute("name", ""),
                    n.appendChild(t),
                    n.querySelectorAll("[name='']").length || m.push("\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")"),
                    n.querySelectorAll(":checked").length || m.push(":checked"),
                    n.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]"),
                    n.querySelectorAll("\\\f"),
                    m.push("[\\r\\n\\f]");
                }),
                dn(function (n) {
                  n.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = h.createElement("input");
                  t.setAttribute("type", "hidden"),
                    n.appendChild(t).setAttribute("name", "D"),
                    n.querySelectorAll("[name=d]").length && m.push("name" + D + "*[*^$|!~]?="),
                    2 !== n.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    (v.appendChild(n).disabled = !0),
                    2 !== n.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    n.querySelectorAll("*,:x"),
                    m.push(",.*:");
                })),
              (e.matchesSelector = Q.test(
                (g = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)
              )) &&
                dn(function (n) {
                  (e.disconnectedMatch = g.call(n, "*")), g.call(n, "[s!='']:x"), w.push("!=", $);
                }),
              (m = m.length && new RegExp(m.join("|"))),
              (w = w.length && new RegExp(w.join("|"))),
              (t = Q.test(v.compareDocumentPosition)),
              (b =
                t || Q.test(v.contains)
                  ? function (n, t) {
                      var e = 9 === n.nodeType ? n.documentElement : n,
                        r = t && t.parentNode;
                      return (
                        n === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(e.contains ? e.contains(r) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (n, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === n) return !0;
                      return !1;
                    }),
              (R = t
                ? function (n, t) {
                    if (n === t) return (d = !0), 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) ||
                      (!e.sortDetached && t.compareDocumentPosition(n) === r)
                        ? n == h || (n.ownerDocument == x && b(x, n))
                          ? -1
                          : t == h || (t.ownerDocument == x && b(x, t))
                          ? 1
                          : a
                          ? M(a, n) - M(a, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (n, t) {
                    if (n === t) return (d = !0), 0;
                    var e,
                      r = 0,
                      i = n.parentNode,
                      o = t.parentNode,
                      u = [n],
                      c = [t];
                    if (!i || !o) return n == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : a ? M(a, n) - M(a, t) : 0;
                    if (i === o) return hn(n, t);
                    for (e = n; (e = e.parentNode); ) u.unshift(e);
                    for (e = t; (e = e.parentNode); ) c.unshift(e);
                    for (; u[r] === c[r]; ) r++;
                    return r ? hn(u[r], c[r]) : u[r] == x ? -1 : c[r] == x ? 1 : 0;
                  })),
            h
          );
        }),
      (sn.matches = function (n, t) {
        return sn(n, null, null, t);
      }),
      (sn.matchesSelector = function (n, t) {
        if ((l(n), e.matchesSelector && p && !O[t + " "] && (!w || !w.test(t)) && (!m || !m.test(t))))
          try {
            var r = g.call(n, t);
            if (r || e.disconnectedMatch || (n.document && 11 !== n.document.nodeType)) return r;
          } catch (n) {
            O(t, !0);
          }
        return 0 < sn(t, h, null, [n]).length;
      }),
      (sn.contains = function (n, t) {
        return (n.ownerDocument || n) != h && l(n), b(n, t);
      }),
      (sn.attr = function (n, t) {
        (n.ownerDocument || n) != h && l(n);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && F.call(r.attrHandle, t.toLowerCase()) ? i(n, t, !p) : void 0;
        return void 0 !== o ? o : e.attributes || !p ? n.getAttribute(t) : (o = n.getAttributeNode(t)) && o.specified ? o.value : null;
      }),
      (sn.escape = function (n) {
        return (n + "").replace(rn, on);
      }),
      (sn.error = function (n) {
        throw new Error("Syntax error, unrecognized expression: " + n);
      }),
      (sn.uniqueSort = function (n) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (((d = !e.detectDuplicates), (a = !e.sortStable && n.slice(0)), n.sort(R), d)) {
          for (; (t = n[o++]); ) t === n[o] && (i = r.push(o));
          for (; i--; ) n.splice(r[i], 1);
        }
        return (a = null), n;
      }),
      (i = sn.getText =
        function (n) {
          var t,
            e = "",
            r = 0,
            o = n.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof n.textContent) return n.textContent;
              for (n = n.firstChild; n; n = n.nextSibling) e += i(n);
            } else if (3 === o || 4 === o) return n.nodeValue;
          } else for (; (t = n[r++]); ) e += i(t);
          return e;
        }),
      ((r = sn.selectors =
        {
          cacheLength: 50,
          createPseudo: an,
          match: W,
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
                (n[1] = n[1].replace(tn, en)),
                (n[3] = (n[3] || n[4] || n[5] || "").replace(tn, en)),
                "~=" === n[2] && (n[3] = " " + n[3] + " "),
                n.slice(0, 4)
              );
            },
            CHILD: function (n) {
              return (
                (n[1] = n[1].toLowerCase()),
                "nth" === n[1].slice(0, 3)
                  ? (n[3] || sn.error(n[0]),
                    (n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3]))),
                    (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                  : n[3] && sn.error(n[0]),
                n
              );
            },
            PSEUDO: function (n) {
              var t,
                e = !n[6] && n[2];
              return W.CHILD.test(n[0])
                ? null
                : (n[3]
                    ? (n[2] = n[4] || n[5] || "")
                    : e &&
                      G.test(e) &&
                      (t = u(e, !0)) &&
                      (t = e.indexOf(")", e.length - t) - e.length) &&
                      ((n[0] = n[0].slice(0, t)), (n[2] = e.slice(0, t))),
                  n.slice(0, 3));
            }
          },
          filter: {
            TAG: function (n) {
              var t = n.replace(tn, en).toLowerCase();
              return "*" === n
                ? function () {
                    return !0;
                  }
                : function (n) {
                    return n.nodeName && n.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (n) {
              var t = I[n + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + D + ")" + n + "(" + D + "|$)")) &&
                  I(n, function (n) {
                    return t.test(
                      ("string" == typeof n.className && n.className) || (void 0 !== n.getAttribute && n.getAttribute("class")) || ""
                    );
                  }))
              );
            },
            ATTR: function (n, t, e) {
              return function (r) {
                var i = sn.attr(r, n);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === e
                        : "!=" === t
                        ? i !== e
                        : "^=" === t
                        ? e && 0 === i.indexOf(e)
                        : "*=" === t
                        ? e && -1 < i.indexOf(e)
                        : "$=" === t
                        ? e && i.slice(-e.length) === e
                        : "~=" === t
                        ? -1 < (" " + i.replace(K, " ") + " ").indexOf(e)
                        : "|=" === t && (i === e || i.slice(0, e.length + 1) === e + "-"));
              };
            },
            CHILD: function (n, t, e, r, i) {
              var o = "nth" !== n.slice(0, 3),
                u = "last" !== n.slice(-4),
                c = "of-type" === t;
              return 1 === r && 0 === i
                ? function (n) {
                    return !!n.parentNode;
                  }
                : function (t, e, s) {
                    var f,
                      a,
                      d,
                      l,
                      h,
                      v,
                      p = o !== u ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      w = c && t.nodeName.toLowerCase(),
                      g = !s && !c,
                      b = !1;
                    if (m) {
                      if (o) {
                        for (; p; ) {
                          for (l = t; (l = l[p]); ) if (c ? l.nodeName.toLowerCase() === w : 1 === l.nodeType) return !1;
                          v = p = "only" === n && !v && "nextSibling";
                        }
                        return !0;
                      }
                      if (((v = [u ? m.firstChild : m.lastChild]), u && g)) {
                        for (
                          b =
                            (h =
                              (f = (a = (d = (l = m)[y] || (l[y] = {}))[l.uniqueID] || (d[l.uniqueID] = {}))[n] || [])[0] === C && f[1]) &&
                            f[2],
                            l = h && m.childNodes[h];
                          (l = (++h && l && l[p]) || (b = h = 0) || v.pop());

                        )
                          if (1 === l.nodeType && ++b && l === t) {
                            a[n] = [C, h, b];
                            break;
                          }
                      } else if (
                        (g &&
                          (b = h =
                            (f = (a = (d = (l = t)[y] || (l[y] = {}))[l.uniqueID] || (d[l.uniqueID] = {}))[n] || [])[0] === C && f[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (l = (++h && l && l[p]) || (b = h = 0) || v.pop()) &&
                          ((c ? l.nodeName.toLowerCase() !== w : 1 !== l.nodeType) ||
                            !++b ||
                            (g && ((a = (d = l[y] || (l[y] = {}))[l.uniqueID] || (d[l.uniqueID] = {}))[n] = [C, b]), l !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                    }
                  };
            },
            PSEUDO: function (n, t) {
              var e,
                i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || sn.error("unsupported pseudo: " + n);
              return i[y]
                ? i(t)
                : 1 < i.length
                ? ((e = [n, n, "", t]),
                  r.setFilters.hasOwnProperty(n.toLowerCase())
                    ? an(function (n, e) {
                        for (var r, o = i(n, t), u = o.length; u--; ) n[(r = M(n, o[u]))] = !(e[r] = o[u]);
                      })
                    : function (n) {
                        return i(n, 0, e);
                      })
                : i;
            }
          },
          pseudos: {
            not: an(function (n) {
              var t = [],
                e = [],
                r = c(n.replace(N, "$1"));
              return r[y]
                ? an(function (n, t, e, i) {
                    for (var o, u = r(n, null, i, []), c = n.length; c--; ) (o = u[c]) && (n[c] = !(t[c] = o));
                  })
                : function (n, i, o) {
                    return (t[0] = n), r(t, null, o, e), (t[0] = null), !e.pop();
                  };
            }),
            has: an(function (n) {
              return function (t) {
                return 0 < sn(n, t).length;
              };
            }),
            contains: an(function (n) {
              return (
                (n = n.replace(tn, en)),
                function (t) {
                  return -1 < (t.textContent || i(t)).indexOf(n);
                }
              );
            }),
            lang: an(function (n) {
              return (
                H.test(n || "") || sn.error("unsupported lang: " + n),
                (n = n.replace(tn, en).toLowerCase()),
                function (t) {
                  var e;
                  do {
                    if ((e = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                      return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-");
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var e = n.location && n.location.hash;
              return e && e.slice(1) === t.id;
            },
            root: function (n) {
              return n === v;
            },
            focus: function (n) {
              return n === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
            },
            enabled: mn(!1),
            disabled: mn(!0),
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
              return !r.pseudos.empty(n);
            },
            header: function (n) {
              return Y.test(n.nodeName);
            },
            input: function (n) {
              return X.test(n.nodeName);
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
            first: wn(function () {
              return [0];
            }),
            last: wn(function (n, t) {
              return [t - 1];
            }),
            eq: wn(function (n, t, e) {
              return [e < 0 ? e + t : e];
            }),
            even: wn(function (n, t) {
              for (var e = 0; e < t; e += 2) n.push(e);
              return n;
            }),
            odd: wn(function (n, t) {
              for (var e = 1; e < t; e += 2) n.push(e);
              return n;
            }),
            lt: wn(function (n, t, e) {
              for (var r = e < 0 ? e + t : t < e ? t : e; 0 <= --r; ) n.push(r);
              return n;
            }),
            gt: wn(function (n, t, e) {
              for (var r = e < 0 ? e + t : e; ++r < t; ) n.push(r);
              return n;
            })
          }
        }).pseudos.nth = r.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        r.pseudos[t] = vn(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pn(t);
      function bn() {}
      function yn(n) {
        for (var t = 0, e = n.length, r = ""; t < e; t++) r += n[t].value;
        return r;
      }
      function xn(n, t, e) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          u = e && "parentNode" === o,
          c = k++;
        return t.first
          ? function (t, e, i) {
              for (; (t = t[r]); ) if (1 === t.nodeType || u) return n(t, e, i);
              return !1;
            }
          : function (t, e, s) {
              var f,
                a,
                d,
                l = [C, c];
              if (s) {
                for (; (t = t[r]); ) if ((1 === t.nodeType || u) && n(t, e, s)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || u)
                    if (((a = (d = t[y] || (t[y] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase()))
                      t = t[r] || t;
                    else {
                      if ((f = a[o]) && f[0] === C && f[1] === c) return (l[2] = f[2]);
                      if (((a[o] = l)[2] = n(t, e, s))) return !0;
                    }
              return !1;
            };
      }
      function Cn(n) {
        return 1 < n.length
          ? function (t, e, r) {
              for (var i = n.length; i--; ) if (!n[i](t, e, r)) return !1;
              return !0;
            }
          : n[0];
      }
      function kn(n, t, e, r, i) {
        for (var o, u = [], c = 0, s = n.length, f = null != t; c < s; c++)
          (o = n[c]) && ((e && !e(o, r, i)) || (u.push(o), f && t.push(c)));
        return u;
      }
      function In(n, t, e, r, i, o) {
        return (
          r && !r[y] && (r = In(r)),
          i && !i[y] && (i = In(i, o)),
          an(function (o, u, c, s) {
            var f,
              a,
              d,
              l = [],
              h = [],
              v = u.length,
              p =
                o ||
                (function (n, t, e) {
                  for (var r = 0, i = t.length; r < i; r++) sn(n, t[r], e);
                  return e;
                })(t || "*", c.nodeType ? [c] : c, []),
              m = !n || (!o && t) ? p : kn(p, l, n, c, s),
              w = e ? (i || (o ? n : v || r) ? [] : u) : m;
            if ((e && e(m, w, c, s), r)) for (f = kn(w, h), r(f, [], c, s), a = f.length; a--; ) (d = f[a]) && (w[h[a]] = !(m[h[a]] = d));
            if (o) {
              if (i || n) {
                if (i) {
                  for (f = [], a = w.length; a--; ) (d = w[a]) && f.push((m[a] = d));
                  i(null, (w = []), f, s);
                }
                for (a = w.length; a--; ) (d = w[a]) && -1 < (f = i ? M(o, d) : l[a]) && (o[f] = !(u[f] = d));
              }
            } else (w = kn(w === u ? w.splice(v, w.length) : w)), i ? i(null, u, w, s) : E.apply(u, w);
          })
        );
      }
      function jn(n) {
        for (
          var t,
            e,
            i,
            o = n.length,
            u = r.relative[n[0].type],
            c = u || r.relative[" "],
            s = u ? 1 : 0,
            a = xn(
              function (n) {
                return n === t;
              },
              c,
              !0
            ),
            d = xn(
              function (n) {
                return -1 < M(t, n);
              },
              c,
              !0
            ),
            l = [
              function (n, e, r) {
                var i = (!u && (r || e !== f)) || ((t = e).nodeType ? a(n, e, r) : d(n, e, r));
                return (t = null), i;
              }
            ];
          s < o;
          s++
        )
          if ((e = r.relative[n[s].type])) l = [xn(Cn(l), e)];
          else {
            if ((e = r.filter[n[s].type].apply(null, n[s].matches))[y]) {
              for (i = ++s; i < o && !r.relative[n[i].type]; i++);
              return In(
                1 < s && Cn(l),
                1 < s && yn(n.slice(0, s - 1).concat({ value: " " === n[s - 2].type ? "*" : "" })).replace(N, "$1"),
                e,
                s < i && jn(n.slice(s, i)),
                i < o && jn((n = n.slice(i))),
                i < o && yn(n)
              );
            }
            l.push(e);
          }
        return Cn(l);
      }
      return (
        (bn.prototype = r.filters = r.pseudos),
        (r.setFilters = new bn()),
        (u = sn.tokenize =
          function (n, t) {
            var e,
              i,
              o,
              u,
              c,
              s,
              f,
              a = j[n + " "];
            if (a) return t ? 0 : a.slice(0);
            for (c = n, s = [], f = r.preFilter; c; ) {
              for (u in ((e && !(i = L.exec(c))) || (i && (c = c.slice(i[0].length) || c), s.push((o = []))),
              (e = !1),
              (i = z.exec(c)) && ((e = i.shift()), o.push({ value: e, type: i[0].replace(N, " ") }), (c = c.slice(e.length))),
              r.filter))
                !(i = W[u].exec(c)) ||
                  (f[u] && !(i = f[u](i))) ||
                  ((e = i.shift()), o.push({ value: e, type: u, matches: i }), (c = c.slice(e.length)));
              if (!e) break;
            }
            return t ? c.length : c ? sn.error(n) : j(n, s).slice(0);
          }),
        (c = sn.compile =
          function (n, t) {
            var e,
              i,
              o,
              c,
              s,
              a,
              d = [],
              v = [],
              m = S[n + " "];
            if (!m) {
              for (t || (t = u(n)), e = t.length; e--; ) (m = jn(t[e]))[y] ? d.push(m) : v.push(m);
              (m = S(
                n,
                ((i = v),
                (c = 0 < (o = d).length),
                (s = 0 < i.length),
                (a = function (n, t, e, u, a) {
                  var d,
                    v,
                    m,
                    w = 0,
                    g = "0",
                    b = n && [],
                    y = [],
                    x = f,
                    k = n || (s && r.find.TAG("*", a)),
                    I = (C += null == x ? 1 : Math.random() || 0.1),
                    j = k.length;
                  for (a && (f = t == h || t || a); g !== j && null != (d = k[g]); g++) {
                    if (s && d) {
                      for (v = 0, t || d.ownerDocument == h || (l(d), (e = !p)); (m = i[v++]); )
                        if (m(d, t || h, e)) {
                          u.push(d);
                          break;
                        }
                      a && (C = I);
                    }
                    c && ((d = !m && d) && w--, n && b.push(d));
                  }
                  if (((w += g), c && g !== w)) {
                    for (v = 0; (m = o[v++]); ) m(b, y, t, e);
                    if (n) {
                      if (0 < w) for (; g--; ) b[g] || y[g] || (y[g] = P.call(u));
                      y = kn(y);
                    }
                    E.apply(u, y), a && !n && 0 < y.length && 1 < w + o.length && sn.uniqueSort(u);
                  }
                  return a && ((C = I), (f = x)), b;
                }),
                c ? an(a) : a)
              )).selector = n;
            }
            return m;
          }),
        (s = sn.select =
          function (n, t, e, i) {
            var o,
              s,
              f,
              a,
              d,
              l = "function" == typeof n && n,
              h = !i && u((n = l.selector || n));
            if (((e = e || []), 1 === h.length)) {
              if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (f = s[0]).type && 9 === t.nodeType && p && r.relative[s[1].type]) {
                if (!(t = (r.find.ID(f.matches[0].replace(tn, en), t) || [])[0])) return e;
                l && (t = t.parentNode), (n = n.slice(s.shift().value.length));
              }
              for (o = W.needsContext.test(n) ? 0 : s.length; o-- && ((f = s[o]), !r.relative[(a = f.type)]); )
                if ((d = r.find[a]) && (i = d(f.matches[0].replace(tn, en), (nn.test(s[0].type) && gn(t.parentNode)) || t))) {
                  if ((s.splice(o, 1), !(n = i.length && yn(s)))) return E.apply(e, i), e;
                  break;
                }
            }
            return (l || c(n, h))(i, t, !p, e, !t || (nn.test(n) && gn(t.parentNode)) || t), e;
          }),
        (e.sortStable = y.split("").sort(R).join("") === y),
        (e.detectDuplicates = !!d),
        l(),
        (e.sortDetached = dn(function (n) {
          return 1 & n.compareDocumentPosition(h.createElement("fieldset"));
        })),
        dn(function (n) {
          return (n.innerHTML = "<a href='#'></a>"), "#" === n.firstChild.getAttribute("href");
        }) ||
          ln("type|href|height|width", function (n, t, e) {
            if (!e) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (e.attributes &&
          dn(function (n) {
            return (n.innerHTML = "<input/>"), n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value");
          })) ||
          ln("value", function (n, t, e) {
            if (!e && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
          }),
        dn(function (n) {
          return null == n.getAttribute("disabled");
        }) ||
          ln(_, function (n, t, e) {
            var r;
            if (!e) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null;
          }),
        sn
      );
    })(n);
    (x.find = k),
      (x.expr = k.selectors),
      (x.expr[":"] = x.expr.pseudos),
      (x.uniqueSort = x.unique = k.uniqueSort),
      (x.text = k.getText),
      (x.isXMLDoc = k.isXML),
      (x.contains = k.contains),
      (x.escapeSelector = k.escape);
    var I = function (n, t, e) {
        for (var r = [], i = void 0 !== e; (n = n[t]) && 9 !== n.nodeType; )
          if (1 === n.nodeType) {
            if (i && x(n).is(e)) break;
            r.push(n);
          }
        return r;
      },
      j = function (n, t) {
        for (var e = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && e.push(n);
        return e;
      },
      S = x.expr.match.needsContext;
    function O(n, t) {
      return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
    }
    var R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function F(n, t, e) {
      return v(t)
        ? x.grep(n, function (n, r) {
            return !!t.call(n, r, n) !== e;
          })
        : t.nodeType
        ? x.grep(n, function (n) {
            return (n === t) !== e;
          })
        : "string" != typeof t
        ? x.grep(n, function (n) {
            return -1 < c.call(t, n) !== e;
          })
        : x.filter(t, n, e);
    }
    (x.filter = function (n, t, e) {
      var r = t[0];
      return (
        e && (n = ":not(" + n + ")"),
        1 === t.length && 1 === r.nodeType
          ? x.find.matchesSelector(r, n)
            ? [r]
            : []
          : x.find.matches(
              n,
              x.grep(t, function (n) {
                return 1 === n.nodeType;
              })
            )
      );
    }),
      x.fn.extend({
        find: function (n) {
          var t,
            e,
            r = this.length,
            i = this;
          if ("string" != typeof n)
            return this.pushStack(
              x(n).filter(function () {
                for (t = 0; t < r; t++) if (x.contains(i[t], this)) return !0;
              })
            );
          for (e = this.pushStack([]), t = 0; t < r; t++) x.find(n, i[t], e);
          return 1 < r ? x.uniqueSort(e) : e;
        },
        filter: function (n) {
          return this.pushStack(F(this, n || [], !1));
        },
        not: function (n) {
          return this.pushStack(F(this, n || [], !0));
        },
        is: function (n) {
          return !!F(this, "string" == typeof n && S.test(n) ? x(n) : n || [], !1).length;
        }
      });
    var T,
      P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((x.fn.init = function (n, t, e) {
      var r, i;
      if (!n) return this;
      if (((e = e || T), "string" == typeof n)) {
        if (!(r = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : P.exec(n)) || (!r[1] && t))
          return !t || t.jquery ? (t || e).find(n) : this.constructor(t).find(n);
        if (r[1]) {
          if (
            ((t = t instanceof x ? t[0] : t),
            x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
            R.test(r[1]) && x.isPlainObject(t))
          )
            for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (i = m.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
      }
      return n.nodeType ? ((this[0] = n), (this.length = 1), this) : v(n) ? (void 0 !== e.ready ? e.ready(n) : n(x)) : x.makeArray(n, this);
    }).prototype = x.fn),
      (T = x(m));
    var q = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };
    function A(n, t) {
      for (; (n = n[t]) && 1 !== n.nodeType; );
      return n;
    }
    x.fn.extend({
      has: function (n) {
        var t = x(n, this),
          e = t.length;
        return this.filter(function () {
          for (var n = 0; n < e; n++) if (x.contains(this, t[n])) return !0;
        });
      },
      closest: function (n, t) {
        var e,
          r = 0,
          i = this.length,
          o = [],
          u = "string" != typeof n && x(n);
        if (!S.test(n))
          for (; r < i; r++)
            for (e = this[r]; e && e !== t; e = e.parentNode)
              if (e.nodeType < 11 && (u ? -1 < u.index(e) : 1 === e.nodeType && x.find.matchesSelector(e, n))) {
                o.push(e);
                break;
              }
        return this.pushStack(1 < o.length ? x.uniqueSort(o) : o);
      },
      index: function (n) {
        return n
          ? "string" == typeof n
            ? c.call(x(n), this[0])
            : c.call(this, n.jquery ? n[0] : n)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (n, t) {
        return this.pushStack(x.uniqueSort(x.merge(this.get(), x(n, t))));
      },
      addBack: function (n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
      }
    }),
      x.each(
        {
          parent: function (n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (n) {
            return I(n, "parentNode");
          },
          parentsUntil: function (n, t, e) {
            return I(n, "parentNode", e);
          },
          next: function (n) {
            return A(n, "nextSibling");
          },
          prev: function (n) {
            return A(n, "previousSibling");
          },
          nextAll: function (n) {
            return I(n, "nextSibling");
          },
          prevAll: function (n) {
            return I(n, "previousSibling");
          },
          nextUntil: function (n, t, e) {
            return I(n, "nextSibling", e);
          },
          prevUntil: function (n, t, e) {
            return I(n, "previousSibling", e);
          },
          siblings: function (n) {
            return j((n.parentNode || {}).firstChild, n);
          },
          children: function (n) {
            return j(n.firstChild);
          },
          contents: function (n) {
            return null != n.contentDocument && r(n.contentDocument)
              ? n.contentDocument
              : (O(n, "template") && (n = n.content || n), x.merge([], n.childNodes));
          }
        },
        function (n, t) {
          x.fn[n] = function (e, r) {
            var i = x.map(this, t, e);
            return (
              "Until" !== n.slice(-5) && (r = e),
              r && "string" == typeof r && (i = x.filter(r, i)),
              1 < this.length && (E[n] || x.uniqueSort(i), q.test(n) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var M = /[^\x20\t\r\n\f]+/g;
    function _(n) {
      return n;
    }
    function D(n) {
      throw n;
    }
    function U(n, t, e, r) {
      var i;
      try {
        n && v((i = n.promise)) ? i.call(n).done(t).fail(e) : n && v((i = n.then)) ? i.call(n, t, e) : t.apply(void 0, [n].slice(r));
      } catch (n) {
        e.apply(void 0, [n]);
      }
    }
    (x.Callbacks = function (n) {
      var t, e;
      n =
        "string" == typeof n
          ? ((t = n),
            (e = {}),
            x.each(t.match(M) || [], function (n, t) {
              e[t] = !0;
            }),
            e)
          : x.extend({}, n);
      var r,
        i,
        o,
        u,
        c = [],
        s = [],
        f = -1,
        a = function () {
          for (u = u || n.once, o = r = !0; s.length; f = -1)
            for (i = s.shift(); ++f < c.length; ) !1 === c[f].apply(i[0], i[1]) && n.stopOnFalse && ((f = c.length), (i = !1));
          n.memory || (i = !1), (r = !1), u && (c = i ? [] : "");
        },
        d = {
          add: function () {
            return (
              c &&
                (i && !r && ((f = c.length - 1), s.push(i)),
                (function t(e) {
                  x.each(e, function (e, r) {
                    v(r) ? (n.unique && d.has(r)) || c.push(r) : r && r.length && "string" !== b(r) && t(r);
                  });
                })(arguments),
                i && !r && a()),
              this
            );
          },
          remove: function () {
            return (
              x.each(arguments, function (n, t) {
                for (var e; -1 < (e = x.inArray(t, c, e)); ) c.splice(e, 1), e <= f && f--;
              }),
              this
            );
          },
          has: function (n) {
            return n ? -1 < x.inArray(n, c) : 0 < c.length;
          },
          empty: function () {
            return c && (c = []), this;
          },
          disable: function () {
            return (u = s = []), (c = i = ""), this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return (u = s = []), i || r || (c = i = ""), this;
          },
          locked: function () {
            return !!u;
          },
          fireWith: function (n, t) {
            return u || ((t = [n, (t = t || []).slice ? t.slice() : t]), s.push(t), r || a()), this;
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          }
        };
      return d;
    }),
      x.extend({
        Deferred: function (t) {
          var e = [
              ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
              ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
            ],
            r = "pending",
            i = {
              state: function () {
                return r;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (n) {
                return i.then(null, n);
              },
              pipe: function () {
                var n = arguments;
                return x
                  .Deferred(function (t) {
                    x.each(e, function (e, r) {
                      var i = v(n[r[4]]) && n[r[4]];
                      o[r[1]](function () {
                        var n = i && i.apply(this, arguments);
                        n && v(n.promise)
                          ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                          : t[r[0] + "With"](this, i ? [n] : arguments);
                      });
                    }),
                      (n = null);
                  })
                  .promise();
              },
              then: function (t, r, i) {
                var o = 0;
                function u(t, e, r, i) {
                  return function () {
                    var c = this,
                      s = arguments,
                      f = function () {
                        var n, f;
                        if (!(t < o)) {
                          if ((n = r.apply(c, s)) === e.promise()) throw new TypeError("Thenable self-resolution");
                          (f = n && ("object" == typeof n || "function" == typeof n) && n.then),
                            v(f)
                              ? i
                                ? f.call(n, u(o, e, _, i), u(o, e, D, i))
                                : (o++, f.call(n, u(o, e, _, i), u(o, e, D, i), u(o, e, _, e.notifyWith)))
                              : (r !== _ && ((c = void 0), (s = [n])), (i || e.resolveWith)(c, s));
                        }
                      },
                      a = i
                        ? f
                        : function () {
                            try {
                              f();
                            } catch (n) {
                              x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, a.stackTrace),
                                o <= t + 1 && (r !== D && ((c = void 0), (s = [n])), e.rejectWith(c, s));
                            }
                          };
                    t ? a() : (x.Deferred.getStackHook && (a.stackTrace = x.Deferred.getStackHook()), n.setTimeout(a));
                  };
                }
                return x
                  .Deferred(function (n) {
                    e[0][3].add(u(0, n, v(i) ? i : _, n.notifyWith)),
                      e[1][3].add(u(0, n, v(t) ? t : _)),
                      e[2][3].add(u(0, n, v(r) ? r : D));
                  })
                  .promise();
              },
              promise: function (n) {
                return null != n ? x.extend(n, i) : i;
              }
            },
            o = {};
          return (
            x.each(e, function (n, t) {
              var u = t[2],
                c = t[5];
              (i[t[1]] = u.add),
                c &&
                  u.add(
                    function () {
                      r = c;
                    },
                    e[3 - n][2].disable,
                    e[3 - n][3].disable,
                    e[0][2].lock,
                    e[0][3].lock
                  ),
                u.add(t[3].fire),
                (o[t[0]] = function () {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }),
                (o[t[0] + "With"] = u.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (n) {
          var t = arguments.length,
            e = t,
            r = Array(e),
            o = i.call(arguments),
            u = x.Deferred(),
            c = function (n) {
              return function (e) {
                (r[n] = this), (o[n] = 1 < arguments.length ? i.call(arguments) : e), --t || u.resolveWith(r, o);
              };
            };
          if (t <= 1 && (U(n, u.done(c(e)).resolve, u.reject, !t), "pending" === u.state() || v(o[e] && o[e].then))) return u.then();
          for (; e--; ) U(o[e], c(e), u.reject);
          return u.promise();
        }
      });
    var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (x.Deferred.exceptionHook = function (t, e) {
      n.console && n.console.warn && t && V.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
    }),
      (x.readyException = function (t) {
        n.setTimeout(function () {
          throw t;
        });
      });
    var $ = x.Deferred();
    function K() {
      m.removeEventListener("DOMContentLoaded", K), n.removeEventListener("load", K), x.ready();
    }
    (x.fn.ready = function (n) {
      return (
        $.then(n).catch(function (n) {
          x.readyException(n);
        }),
        this
      );
    }),
      x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (n) {
          (!0 === n ? --x.readyWait : x.isReady) || ((x.isReady = !0) !== n && 0 < --x.readyWait) || $.resolveWith(m, [x]);
        }
      }),
      (x.ready.then = $.then),
      "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll)
        ? n.setTimeout(x.ready)
        : (m.addEventListener("DOMContentLoaded", K), n.addEventListener("load", K));
    var N = function (n, t, e, r, i, o, u) {
        var c = 0,
          s = n.length,
          f = null == e;
        if ("object" === b(e)) for (c in ((i = !0), e)) N(n, t, c, e[c], !0, o, u);
        else if (
          void 0 !== r &&
          ((i = !0),
          v(r) || (u = !0),
          f &&
            (u
              ? (t.call(n, r), (t = null))
              : ((f = t),
                (t = function (n, t, e) {
                  return f.call(x(n), e);
                }))),
          t)
        )
          for (; c < s; c++) t(n[c], e, u ? r : r.call(n[c], c, t(n[c], e)));
        return i ? n : f ? t.call(n) : s ? t(n[0], e) : o;
      },
      L = /^-ms-/,
      z = /-([a-z])/g;
    function B(n, t) {
      return t.toUpperCase();
    }
    function G(n) {
      return n.replace(L, "ms-").replace(z, B);
    }
    var H = function (n) {
      return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
    };
    function W() {
      this.expando = x.expando + W.uid++;
    }
    (W.uid = 1),
      (W.prototype = {
        cache: function (n) {
          var t = n[this.expando];
          return (
            t ||
              ((t = {}),
              H(n) && (n.nodeType ? (n[this.expando] = t) : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))),
            t
          );
        },
        set: function (n, t, e) {
          var r,
            i = this.cache(n);
          if ("string" == typeof t) i[G(t)] = e;
          else for (r in t) i[G(r)] = t[r];
          return i;
        },
        get: function (n, t) {
          return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][G(t)];
        },
        access: function (n, t, e) {
          return void 0 === t || (t && "string" == typeof t && void 0 === e) ? this.get(n, t) : (this.set(n, t, e), void 0 !== e ? e : t);
        },
        remove: function (n, t) {
          var e,
            r = n[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              e = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
              for (; e--; ) delete r[t[e]];
            }
            (void 0 === t || x.isEmptyObject(r)) && (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
          }
        },
        hasData: function (n) {
          var t = n[this.expando];
          return void 0 !== t && !x.isEmptyObject(t);
        }
      });
    var J = new W(),
      X = new W(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;
    function Z(n, t, e) {
      var r, i;
      if (void 0 === e && 1 === n.nodeType)
        if (((r = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (e = n.getAttribute(r)))) {
          try {
            e = "true" === (i = e) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : Y.test(i) ? JSON.parse(i) : i));
          } catch (n) {}
          X.set(n, t, e);
        } else e = void 0;
      return e;
    }
    x.extend({
      hasData: function (n) {
        return X.hasData(n) || J.hasData(n);
      },
      data: function (n, t, e) {
        return X.access(n, t, e);
      },
      removeData: function (n, t) {
        X.remove(n, t);
      },
      t: function (n, t, e) {
        return J.access(n, t, e);
      },
      i: function (n, t) {
        J.remove(n, t);
      }
    }),
      x.fn.extend({
        data: function (n, t) {
          var e,
            r,
            i,
            o = this[0],
            u = o && o.attributes;
          if (void 0 === n) {
            if (this.length && ((i = X.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
              for (e = u.length; e--; ) u[e] && 0 === (r = u[e].name).indexOf("data-") && ((r = G(r.slice(5))), Z(o, r, i[r]));
              J.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                X.set(this, n);
              })
            : N(
                this,
                function (t) {
                  var e;
                  if (o && void 0 === t) return void 0 !== (e = X.get(o, n)) || void 0 !== (e = Z(o, n)) ? e : void 0;
                  this.each(function () {
                    X.set(this, n, t);
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
            X.remove(this, n);
          });
        }
      }),
      x.extend({
        queue: function (n, t, e) {
          var r;
          if (n)
            return (
              (t = (t || "fx") + "queue"),
              (r = J.get(n, t)),
              e && (!r || Array.isArray(e) ? (r = J.access(n, t, x.makeArray(e))) : r.push(e)),
              r || []
            );
        },
        dequeue: function (n, t) {
          t = t || "fx";
          var e = x.queue(n, t),
            r = e.length,
            i = e.shift(),
            o = x.o(n, t);
          "inprogress" === i && ((i = e.shift()), r--),
            i &&
              ("fx" === t && e.unshift("inprogress"),
              delete o.stop,
              i.call(
                n,
                function () {
                  x.dequeue(n, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        o: function (n, t) {
          var e = t + "queueHooks";
          return (
            J.get(n, e) ||
            J.access(n, e, {
              empty: x.Callbacks("once memory").add(function () {
                J.remove(n, [t + "queue", e]);
              })
            })
          );
        }
      }),
      x.fn.extend({
        queue: function (n, t) {
          var e = 2;
          return (
            "string" != typeof n && ((t = n), (n = "fx"), e--),
            arguments.length < e
              ? x.queue(this[0], n)
              : void 0 === t
              ? this
              : this.each(function () {
                  var e = x.queue(this, n, t);
                  x.o(this, n), "fx" === n && "inprogress" !== e[0] && x.dequeue(this, n);
                })
          );
        },
        dequeue: function (n) {
          return this.each(function () {
            x.dequeue(this, n);
          });
        },
        clearQueue: function (n) {
          return this.queue(n || "fx", []);
        },
        promise: function (n, t) {
          var e,
            r = 1,
            i = x.Deferred(),
            o = this,
            u = this.length,
            c = function () {
              --r || i.resolveWith(o, [o]);
            };
          for ("string" != typeof n && ((t = n), (n = void 0)), n = n || "fx"; u--; )
            (e = J.get(o[u], n + "queueHooks")) && e.empty && (r++, e.empty.add(c));
          return c(), i.promise(t);
        }
      });
    var nn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      tn = new RegExp("^(?:([+-])=|)(" + nn + ")([a-z%]*)$", "i"),
      en = ["Top", "Right", "Bottom", "Left"],
      rn = m.documentElement,
      on = function (n) {
        return x.contains(n.ownerDocument, n);
      },
      un = { composed: !0 };
    rn.getRootNode &&
      (on = function (n) {
        return x.contains(n.ownerDocument, n) || n.getRootNode(un) === n.ownerDocument;
      });
    var cn = function (n, t) {
      return "none" === (n = t || n).style.display || ("" === n.style.display && on(n) && "none" === x.css(n, "display"));
    };
    function sn(n, t, e, r) {
      var i,
        o,
        u = 20,
        c = r
          ? function () {
              return r.cur();
            }
          : function () {
              return x.css(n, t, "");
            },
        s = c(),
        f = (e && e[3]) || (x.cssNumber[t] ? "" : "px"),
        a = n.nodeType && (x.cssNumber[t] || ("px" !== f && +s)) && tn.exec(x.css(n, t));
      if (a && a[3] !== f) {
        for (s /= 2, f = f || a[3], a = +s || 1; u--; )
          x.style(n, t, a + f), (1 - o) * (1 - (o = c() / s || 0.5)) <= 0 && (u = 0), (a /= o);
        (a *= 2), x.style(n, t, a + f), (e = e || []);
      }
      return e && ((a = +a || +s || 0), (i = e[1] ? a + (e[1] + 1) * e[2] : +e[2]), r && ((r.unit = f), (r.start = a), (r.end = i))), i;
    }
    var fn = {};
    function an(n, t) {
      for (var e, r, i, o, u, c, s, f = [], a = 0, d = n.length; a < d; a++)
        (r = n[a]).style &&
          ((e = r.style.display),
          t
            ? ("none" === e && ((f[a] = J.get(r, "display") || null), f[a] || (r.style.display = "")),
              "" === r.style.display &&
                cn(r) &&
                (f[a] =
                  ((s = u = o = void 0),
                  (u = (i = r).ownerDocument),
                  (c = i.nodeName),
                  (s = fn[c]) ||
                    ((o = u.body.appendChild(u.createElement(c))),
                    (s = x.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === s && (s = "block"),
                    (fn[c] = s)))))
            : "none" !== e && ((f[a] = "none"), J.set(r, "display", e)));
      for (a = 0; a < d; a++) null != f[a] && (n[a].style.display = f[a]);
      return n;
    }
    x.fn.extend({
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
              cn(this) ? x(this).show() : x(this).hide();
            });
      }
    });
    var dn,
      ln,
      hn = /^(?:checkbox|radio)$/i,
      vn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      pn = /^$|^module$|\/(?:java|ecma)script/i;
    (dn = m.createDocumentFragment().appendChild(m.createElement("div"))),
      (ln = m.createElement("input")).setAttribute("type", "radio"),
      ln.setAttribute("checked", "checked"),
      ln.setAttribute("name", "t"),
      dn.appendChild(ln),
      (h.checkClone = dn.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (dn.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!dn.cloneNode(!0).lastChild.defaultValue),
      (dn.innerHTML = "<option></option>"),
      (h.option = !!dn.lastChild);
    var mn = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      u: [0, "", ""]
    };
    function wn(n, t) {
      var e;
      return (
        (e =
          void 0 !== n.getElementsByTagName
            ? n.getElementsByTagName(t || "*")
            : void 0 !== n.querySelectorAll
            ? n.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && O(n, t)) ? x.merge([n], e) : e
      );
    }
    function gn(n, t) {
      for (var e = 0, r = n.length; e < r; e++) J.set(n[e], "globalEval", !t || J.get(t[e], "globalEval"));
    }
    (mn.tbody = mn.tfoot = mn.colgroup = mn.caption = mn.thead),
      (mn.th = mn.td),
      h.option || (mn.optgroup = mn.option = [1, "<select multiple='multiple'>", "</select>"]);
    var bn = /<|&#?\w+;/;
    function yn(n, t, e, r, i) {
      for (var o, u, c, s, f, a, d = t.createDocumentFragment(), l = [], h = 0, v = n.length; h < v; h++)
        if ((o = n[h]) || 0 === o)
          if ("object" === b(o)) x.merge(l, o.nodeType ? [o] : o);
          else if (bn.test(o)) {
            for (
              u = u || d.appendChild(t.createElement("div")),
                c = (vn.exec(o) || ["", ""])[1].toLowerCase(),
                s = mn[c] || mn.u,
                u.innerHTML = s[1] + x.htmlPrefilter(o) + s[2],
                a = s[0];
              a--;

            )
              u = u.lastChild;
            x.merge(l, u.childNodes), ((u = d.firstChild).textContent = "");
          } else l.push(t.createTextNode(o));
      for (d.textContent = "", h = 0; (o = l[h++]); )
        if (r && -1 < x.inArray(o, r)) i && i.push(o);
        else if (((f = on(o)), (u = wn(d.appendChild(o), "script")), f && gn(u), e))
          for (a = 0; (o = u[a++]); ) pn.test(o.type || "") && e.push(o);
      return d;
    }
    var xn = /^([^.]*)(?:\.(.+)|)/;
    function Cn() {
      return !0;
    }
    function kn() {
      return !1;
    }
    function In(n, t) {
      return (
        (n ===
          (function () {
            try {
              return m.activeElement;
            } catch (n) {}
          })()) ==
        ("focus" === t)
      );
    }
    function jn(n, t, e, r, i, o) {
      var u, c;
      if ("object" == typeof t) {
        for (c in ("string" != typeof e && ((r = r || e), (e = void 0)), t)) jn(n, c, e, r, t[c], o);
        return n;
      }
      if (
        (null == r && null == i
          ? ((i = e), (r = e = void 0))
          : null == i && ("string" == typeof e ? ((i = r), (r = void 0)) : ((i = r), (r = e), (e = void 0))),
        !1 === i)
      )
        i = kn;
      else if (!i) return n;
      return (
        1 === o &&
          ((u = i),
          ((i = function (n) {
            return x().off(n), u.apply(this, arguments);
          }).guid = u.guid || (u.guid = x.guid++))),
        n.each(function () {
          x.event.add(this, t, i, r, e);
        })
      );
    }
    function Sn(n, t, e) {
      e
        ? (J.set(n, t, !1),
          x.event.add(n, t, {
            namespace: !1,
            handler: function (n) {
              var r,
                o,
                u = J.get(this, t);
              if (1 & n.isTrigger && this[t]) {
                if (u.length) (x.event.special[t] || {}).delegateType && n.stopPropagation();
                else if (
                  ((u = i.call(arguments)),
                  J.set(this, t, u),
                  (r = e(this, t)),
                  this[t](),
                  u !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : (o = {}),
                  u !== o)
                )
                  return n.stopImmediatePropagation(), n.preventDefault(), o && o.value;
              } else
                u.length &&
                  (J.set(this, t, { value: x.event.trigger(x.extend(u[0], x.Event.prototype), u.slice(1), this) }),
                  n.stopImmediatePropagation());
            }
          }))
        : void 0 === J.get(n, t) && x.event.add(n, t, Cn);
    }
    (x.event = {
      global: {},
      add: function (n, t, e, r, i) {
        var o,
          u,
          c,
          s,
          f,
          a,
          d,
          l,
          h,
          v,
          p,
          m = J.get(n);
        if (H(n))
          for (
            e.handler && ((e = (o = e).handler), (i = o.selector)),
              i && x.find.matchesSelector(rn, i),
              e.guid || (e.guid = x.guid++),
              (s = m.events) || (s = m.events = Object.create(null)),
              (u = m.handle) ||
                (u = m.handle =
                  function (t) {
                    return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(n, arguments) : void 0;
                  }),
              f = (t = (t || "").match(M) || [""]).length;
            f--;

          )
            (h = p = (c = xn.exec(t[f]) || [])[1]),
              (v = (c[2] || "").split(".").sort()),
              h &&
                ((d = x.event.special[h] || {}),
                (h = (i ? d.delegateType : d.bindType) || h),
                (d = x.event.special[h] || {}),
                (a = x.extend(
                  {
                    type: h,
                    origType: p,
                    data: r,
                    handler: e,
                    guid: e.guid,
                    selector: i,
                    needsContext: i && x.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                  },
                  o
                )),
                (l = s[h]) ||
                  (((l = s[h] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(n, r, v, u)) || (n.addEventListener && n.addEventListener(h, u))),
                d.add && (d.add.call(n, a), a.handler.guid || (a.handler.guid = e.guid)),
                i ? l.splice(l.delegateCount++, 0, a) : l.push(a),
                (x.event.global[h] = !0));
      },
      remove: function (n, t, e, r, i) {
        var o,
          u,
          c,
          s,
          f,
          a,
          d,
          l,
          h,
          v,
          p,
          m = J.hasData(n) && J.get(n);
        if (m && (s = m.events)) {
          for (f = (t = (t || "").match(M) || [""]).length; f--; )
            if (((h = p = (c = xn.exec(t[f]) || [])[1]), (v = (c[2] || "").split(".").sort()), h)) {
              for (
                d = x.event.special[h] || {},
                  l = s[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                  c = c[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  u = o = l.length;
                o--;

              )
                (a = l[o]),
                  (!i && p !== a.origType) ||
                    (e && e.guid !== a.guid) ||
                    (c && !c.test(a.namespace)) ||
                    (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                    (l.splice(o, 1), a.selector && l.delegateCount--, d.remove && d.remove.call(n, a));
              u && !l.length && ((d.teardown && !1 !== d.teardown.call(n, v, m.handle)) || x.removeEvent(n, h, m.handle), delete s[h]);
            } else for (h in s) x.event.remove(n, h + t[f], e, r, !0);
          x.isEmptyObject(s) && J.remove(n, "handle events");
        }
      },
      dispatch: function (n) {
        var t,
          e,
          r,
          i,
          o,
          u,
          c = new Array(arguments.length),
          s = x.event.fix(n),
          f = (J.get(this, "events") || Object.create(null))[s.type] || [],
          a = x.event.special[s.type] || {};
        for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
        if (((s.delegateTarget = this), !a.preDispatch || !1 !== a.preDispatch.call(this, s))) {
          for (u = x.event.handlers.call(this, s, f), t = 0; (i = u[t++]) && !s.isPropagationStopped(); )
            for (s.currentTarget = i.elem, e = 0; (o = i.handlers[e++]) && !s.isImmediatePropagationStopped(); )
              (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                ((s.handleObj = o),
                (s.data = o.data),
                void 0 !== (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) &&
                  !1 === (s.result = r) &&
                  (s.preventDefault(), s.stopPropagation()));
          return a.postDispatch && a.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function (n, t) {
        var e,
          r,
          i,
          o,
          u,
          c = [],
          s = t.delegateCount,
          f = n.target;
        if (s && f.nodeType && !("click" === n.type && 1 <= n.button))
          for (; f !== this; f = f.parentNode || this)
            if (1 === f.nodeType && ("click" !== n.type || !0 !== f.disabled)) {
              for (o = [], u = {}, e = 0; e < s; e++)
                void 0 === u[(i = (r = t[e]).selector + " ")] &&
                  (u[i] = r.needsContext ? -1 < x(i, this).index(f) : x.find(i, this, null, [f]).length),
                  u[i] && o.push(r);
              o.length && c.push({ elem: f, handlers: o });
            }
        return (f = this), s < t.length && c.push({ elem: f, handlers: t.slice(s) }), c;
      },
      addProp: function (n, t) {
        Object.defineProperty(x.Event.prototype, n, {
          enumerable: !0,
          configurable: !0,
          get: v(t)
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
        return n[x.expando] ? n : new x.Event(n);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (n) {
            var t = this || n;
            return hn.test(t.type) && t.click && O(t, "input") && Sn(t, "click", Cn), !1;
          },
          trigger: function (n) {
            var t = this || n;
            return hn.test(t.type) && t.click && O(t, "input") && Sn(t, "click"), !0;
          },
          u: function (n) {
            var t = n.target;
            return (hn.test(t.type) && t.click && O(t, "input") && J.get(t, "click")) || O(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function (n) {
            void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
          }
        }
      }
    }),
      (x.removeEvent = function (n, t, e) {
        n.removeEventListener && n.removeEventListener(t, e);
      }),
      (x.Event = function (n, t) {
        if (!(this instanceof x.Event)) return new x.Event(n, t);
        n && n.type
          ? ((this.originalEvent = n),
            (this.type = n.type),
            (this.isDefaultPrevented = n.defaultPrevented || (void 0 === n.defaultPrevented && !1 === n.returnValue) ? Cn : kn),
            (this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
            (this.currentTarget = n.currentTarget),
            (this.relatedTarget = n.relatedTarget))
          : (this.type = n),
          t && x.extend(this, t),
          (this.timeStamp = (n && n.timeStamp) || Date.now()),
          (this[x.expando] = !0);
      }),
      (x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: kn,
        isPropagationStopped: kn,
        isImmediatePropagationStopped: kn,
        isSimulated: !1,
        preventDefault: function () {
          var n = this.originalEvent;
          (this.isDefaultPrevented = Cn), n && !this.isSimulated && n.preventDefault();
        },
        stopPropagation: function () {
          var n = this.originalEvent;
          (this.isPropagationStopped = Cn), n && !this.isSimulated && n.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var n = this.originalEvent;
          (this.isImmediatePropagationStopped = Cn), n && !this.isSimulated && n.stopImmediatePropagation(), this.stopPropagation();
        }
      }),
      x.each(
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
        x.event.addProp
      ),
      x.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
        x.event.special[n] = {
          setup: function () {
            return Sn(this, n, In), !1;
          },
          trigger: function () {
            return Sn(this, n), !0;
          },
          u: function () {
            return !0;
          },
          delegateType: t
        };
      }),
      x.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (n, t) {
        x.event.special[n] = {
          delegateType: t,
          bindType: t,
          handle: function (n) {
            var e,
              r = n.relatedTarget,
              i = n.handleObj;
            return (
              (r && (r === this || x.contains(this, r))) || ((n.type = i.origType), (e = i.handler.apply(this, arguments)), (n.type = t)), e
            );
          }
        };
      }),
      x.fn.extend({
        on: function (n, t, e, r) {
          return jn(this, n, t, e, r);
        },
        one: function (n, t, e, r) {
          return jn(this, n, t, e, r, 1);
        },
        off: function (n, t, e) {
          var r, i;
          if (n && n.preventDefault && n.handleObj)
            return (
              (r = n.handleObj),
              x(n.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
              this
            );
          if ("object" == typeof n) {
            for (i in n) this.off(i, t, n[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((e = t), (t = void 0)),
            !1 === e && (e = kn),
            this.each(function () {
              x.event.remove(this, n, e, t);
            })
          );
        }
      });
    var On = /<script|<style|<link/i,
      Rn = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Fn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Tn(n, t) {
      return (O(n, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && x(n).children("tbody")[0]) || n;
    }
    function Pn(n) {
      return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
    }
    function qn(n) {
      return "true/" === (n.type || "").slice(0, 5) ? (n.type = n.type.slice(5)) : n.removeAttribute("type"), n;
    }
    function En(n, t) {
      var e, r, i, o, u, c;
      if (1 === t.nodeType) {
        if (J.hasData(n) && (c = J.get(n).events))
          for (i in (J.remove(t, "handle events"), c)) for (e = 0, r = c[i].length; e < r; e++) x.event.add(t, i, c[i][e]);
        X.hasData(n) && ((o = X.access(n)), (u = x.extend({}, o)), X.set(t, u));
      }
    }
    function An(n, t, e, r) {
      t = o(t);
      var i,
        u,
        c,
        s,
        f,
        a,
        d = 0,
        l = n.length,
        p = l - 1,
        m = t[0],
        w = v(m);
      if (w || (1 < l && "string" == typeof m && !h.checkClone && Rn.test(m)))
        return n.each(function (i) {
          var o = n.eq(i);
          w && (t[0] = m.call(this, i, o.html())), An(o, t, e, r);
        });
      if (l && ((u = (i = yn(t, n[0].ownerDocument, !1, n, r)).firstChild), 1 === i.childNodes.length && (i = u), u || r)) {
        for (s = (c = x.map(wn(i, "script"), Pn)).length; d < l; d++)
          (f = i), d !== p && ((f = x.clone(f, !0, !0)), s && x.merge(c, wn(f, "script"))), e.call(n[d], f, d);
        if (s)
          for (a = c[c.length - 1].ownerDocument, x.map(c, qn), d = 0; d < s; d++)
            (f = c[d]),
              pn.test(f.type || "") &&
                !J.access(f, "globalEval") &&
                x.contains(a, f) &&
                (f.src && "module" !== (f.type || "").toLowerCase()
                  ? x.l && !f.noModule && x.l(f.src, { nonce: f.nonce || f.getAttribute("nonce") }, a)
                  : g(f.textContent.replace(Fn, ""), f, a));
      }
      return n;
    }
    function Mn(n, t, e) {
      for (var r, i = t ? x.filter(t, n) : n, o = 0; null != (r = i[o]); o++)
        e || 1 !== r.nodeType || x.cleanData(wn(r)), r.parentNode && (e && on(r) && gn(wn(r, "script")), r.parentNode.removeChild(r));
      return n;
    }
    x.extend({
      htmlPrefilter: function (n) {
        return n;
      },
      clone: function (n, t, e) {
        var r,
          i,
          o,
          u,
          c,
          s,
          f,
          a = n.cloneNode(!0),
          d = on(n);
        if (!(h.noCloneChecked || (1 !== n.nodeType && 11 !== n.nodeType) || x.isXMLDoc(n)))
          for (u = wn(a), r = 0, i = (o = wn(n)).length; r < i; r++)
            (c = o[r]),
              "input" === (f = (s = u[r]).nodeName.toLowerCase()) && hn.test(c.type)
                ? (s.checked = c.checked)
                : ("input" !== f && "textarea" !== f) || (s.defaultValue = c.defaultValue);
        if (t)
          if (e) for (o = o || wn(n), u = u || wn(a), r = 0, i = o.length; r < i; r++) En(o[r], u[r]);
          else En(n, a);
        return 0 < (u = wn(a, "script")).length && gn(u, !d && wn(n, "script")), a;
      },
      cleanData: function (n) {
        for (var t, e, r, i = x.event.special, o = 0; void 0 !== (e = n[o]); o++)
          if (H(e)) {
            if ((t = e[J.expando])) {
              if (t.events) for (r in t.events) i[r] ? x.event.remove(e, r) : x.removeEvent(e, r, t.handle);
              e[J.expando] = void 0;
            }
            e[X.expando] && (e[X.expando] = void 0);
          }
      }
    }),
      x.fn.extend({
        detach: function (n) {
          return Mn(this, n, !0);
        },
        remove: function (n) {
          return Mn(this, n);
        },
        text: function (n) {
          return N(
            this,
            function (n) {
              return void 0 === n
                ? x.text(this)
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
          return An(this, arguments, function (n) {
            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Tn(this, n).appendChild(n);
          });
        },
        prepend: function () {
          return An(this, arguments, function (n) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Tn(this, n);
              t.insertBefore(n, t.firstChild);
            }
          });
        },
        before: function () {
          return An(this, arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this);
          });
        },
        after: function () {
          return An(this, arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
          });
        },
        empty: function () {
          for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (x.cleanData(wn(n, !1)), (n.textContent = ""));
          return this;
        },
        clone: function (n, t) {
          return (
            (n = null != n && n),
            (t = null == t ? n : t),
            this.map(function () {
              return x.clone(this, n, t);
            })
          );
        },
        html: function (n) {
          return N(
            this,
            function (n) {
              var t = this[0] || {},
                e = 0,
                r = this.length;
              if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof n && !On.test(n) && !mn[(vn.exec(n) || ["", ""])[1].toLowerCase()]) {
                n = x.htmlPrefilter(n);
                try {
                  for (; e < r; e++) 1 === (t = this[e] || {}).nodeType && (x.cleanData(wn(t, !1)), (t.innerHTML = n));
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
          return An(
            this,
            arguments,
            function (t) {
              var e = this.parentNode;
              x.inArray(this, n) < 0 && (x.cleanData(wn(this)), e && e.replaceChild(t, this));
            },
            n
          );
        }
      }),
      x.each(
        { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
        function (n, t) {
          x.fn[n] = function (n) {
            for (var e, r = [], i = x(n), o = i.length - 1, c = 0; c <= o; c++)
              (e = c === o ? this : this.clone(!0)), x(i[c])[t](e), u.apply(r, e.get());
            return this.pushStack(r);
          };
        }
      );
    var _n = new RegExp("^(" + nn + ")(?!px)[a-z%]+$", "i"),
      Dn = function (t) {
        var e = t.ownerDocument.defaultView;
        return (e && e.opener) || (e = n), e.getComputedStyle(t);
      },
      Un = function (n, t, e) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = n.style[i]), (n.style[i] = t[i]);
        for (i in ((r = e.call(n)), t)) n.style[i] = o[i];
        return r;
      },
      Vn = new RegExp(en.join("|"), "i");
    function $n(n, t, e) {
      var r,
        i,
        o,
        u,
        c = n.style;
      return (
        (e = e || Dn(n)) &&
          ("" !== (u = e.getPropertyValue(t) || e[t]) || on(n) || (u = x.style(n, t)),
          !h.pixelBoxStyles() &&
            _n.test(u) &&
            Vn.test(t) &&
            ((r = c.width),
            (i = c.minWidth),
            (o = c.maxWidth),
            (c.minWidth = c.maxWidth = c.width = u),
            (u = e.width),
            (c.width = r),
            (c.minWidth = i),
            (c.maxWidth = o))),
        void 0 !== u ? u + "" : u
      );
    }
    function Kn(n, t) {
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
          (f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (a.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            rn.appendChild(f).appendChild(a);
          var t = n.getComputedStyle(a);
          (r = "1%" !== t.top),
            (s = 12 === e(t.marginLeft)),
            (a.style.right = "60%"),
            (u = 36 === e(t.right)),
            (i = 36 === e(t.width)),
            (a.style.position = "absolute"),
            (o = 12 === e(a.offsetWidth / 3)),
            rn.removeChild(f),
            (a = null);
        }
      }
      function e(n) {
        return Math.round(parseFloat(n));
      }
      var r,
        i,
        o,
        u,
        c,
        s,
        f = m.createElement("div"),
        a = m.createElement("div");
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (h.clearCloneStyle = "content-box" === a.style.backgroundClip),
        x.extend(h, {
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelBoxStyles: function () {
            return t(), u;
          },
          pixelPosition: function () {
            return t(), r;
          },
          reliableMarginLeft: function () {
            return t(), s;
          },
          scrollboxSize: function () {
            return t(), o;
          },
          reliableTrDimensions: function () {
            var t, e, r, i;
            return (
              null == c &&
                ((t = m.createElement("table")),
                (e = m.createElement("tr")),
                (r = m.createElement("div")),
                (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                (e.style.cssText = "border:1px solid"),
                (e.style.height = "1px"),
                (r.style.height = "9px"),
                (r.style.display = "block"),
                rn.appendChild(t).appendChild(e).appendChild(r),
                (i = n.getComputedStyle(e)),
                (c = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight),
                rn.removeChild(t)),
              c
            );
          }
        }));
    })();
    var Nn = ["Webkit", "Moz", "ms"],
      Ln = m.createElement("div").style,
      zn = {};
    function Bn(n) {
      return (
        x.cssProps[n] ||
        zn[n] ||
        (n in Ln
          ? n
          : (zn[n] =
              (function (n) {
                for (var t = n[0].toUpperCase() + n.slice(1), e = Nn.length; e--; ) if ((n = Nn[e] + t) in Ln) return n;
              })(n) || n))
      );
    }
    var Gn = /^(none|table(?!-c[ea]).+)/,
      Hn = /^--/,
      Wn = { position: "absolute", visibility: "hidden", display: "block" },
      Jn = { letterSpacing: "0", fontWeight: "400" };
    function Xn(n, t, e) {
      var r = tn.exec(t);
      return r ? Math.max(0, r[2] - (e || 0)) + (r[3] || "px") : t;
    }
    function Yn(n, t, e, r, i, o) {
      var u = "width" === t ? 1 : 0,
        c = 0,
        s = 0;
      if (e === (r ? "border" : "content")) return 0;
      for (; u < 4; u += 2)
        "margin" === e && (s += x.css(n, e + en[u], !0, i)),
          r
            ? ("content" === e && (s -= x.css(n, "padding" + en[u], !0, i)),
              "margin" !== e && (s -= x.css(n, "border" + en[u] + "Width", !0, i)))
            : ((s += x.css(n, "padding" + en[u], !0, i)),
              "padding" !== e ? (s += x.css(n, "border" + en[u] + "Width", !0, i)) : (c += x.css(n, "border" + en[u] + "Width", !0, i)));
      return !r && 0 <= o && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - c - 0.5)) || 0), s;
    }
    function Qn(n, t, e) {
      var r = Dn(n),
        i = (!h.boxSizingReliable() || e) && "border-box" === x.css(n, "boxSizing", !1, r),
        o = i,
        u = $n(n, t, r),
        c = "offset" + t[0].toUpperCase() + t.slice(1);
      if (_n.test(u)) {
        if (!e) return u;
        u = "auto";
      }
      return (
        ((!h.boxSizingReliable() && i) ||
          (!h.reliableTrDimensions() && O(n, "tr")) ||
          "auto" === u ||
          (!parseFloat(u) && "inline" === x.css(n, "display", !1, r))) &&
          n.getClientRects().length &&
          ((i = "border-box" === x.css(n, "boxSizing", !1, r)), (o = c in n) && (u = n[c])),
        (u = parseFloat(u) || 0) + Yn(n, t, e || (i ? "border" : "content"), o, r, u) + "px"
      );
    }
    function Zn(n, t, e, r, i) {
      return new Zn.prototype.init(n, t, e, r, i);
    }
    x.extend({
      cssHooks: {
        opacity: {
          get: function (n, t) {
            if (t) {
              var e = $n(n, "opacity");
              return "" === e ? "1" : e;
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
      style: function (n, t, e, r) {
        if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
          var i,
            o,
            u,
            c = G(t),
            s = Hn.test(t),
            f = n.style;
          if ((s || (t = Bn(c)), (u = x.cssHooks[t] || x.cssHooks[c]), void 0 === e))
            return u && "get" in u && void 0 !== (i = u.get(n, !1, r)) ? i : f[t];
          "string" == (o = typeof e) && (i = tn.exec(e)) && i[1] && ((e = sn(n, t, i)), (o = "number")),
            null != e &&
              e == e &&
              ("number" !== o || s || (e += (i && i[3]) || (x.cssNumber[c] ? "" : "px")),
              h.clearCloneStyle || "" !== e || 0 !== t.indexOf("background") || (f[t] = "inherit"),
              (u && "set" in u && void 0 === (e = u.set(n, e, r))) || (s ? f.setProperty(t, e) : (f[t] = e)));
        }
      },
      css: function (n, t, e, r) {
        var i,
          o,
          u,
          c = G(t);
        return (
          Hn.test(t) || (t = Bn(c)),
          (u = x.cssHooks[t] || x.cssHooks[c]) && "get" in u && (i = u.get(n, !0, e)),
          void 0 === i && (i = $n(n, t, r)),
          "normal" === i && t in Jn && (i = Jn[t]),
          "" === e || e ? ((o = parseFloat(i)), !0 === e || isFinite(o) ? o || 0 : i) : i
        );
      }
    }),
      x.each(["height", "width"], function (n, t) {
        x.cssHooks[t] = {
          get: function (n, e, r) {
            if (e)
              return !Gn.test(x.css(n, "display")) || (n.getClientRects().length && n.getBoundingClientRect().width)
                ? Qn(n, t, r)
                : Un(n, Wn, function () {
                    return Qn(n, t, r);
                  });
          },
          set: function (n, e, r) {
            var i,
              o = Dn(n),
              u = !h.scrollboxSize() && "absolute" === o.position,
              c = (u || r) && "border-box" === x.css(n, "boxSizing", !1, o),
              s = r ? Yn(n, t, r, c, o) : 0;
            return (
              c &&
                u &&
                (s -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Yn(n, t, "border", !1, o) - 0.5)),
              s && (i = tn.exec(e)) && "px" !== (i[3] || "px") && ((n.style[t] = e), (e = x.css(n, t))),
              Xn(0, e, s)
            );
          }
        };
      }),
      (x.cssHooks.marginLeft = Kn(h.reliableMarginLeft, function (n, t) {
        if (t)
          return (
            (parseFloat($n(n, "marginLeft")) ||
              n.getBoundingClientRect().left -
                Un(n, { marginLeft: 0 }, function () {
                  return n.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      x.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
        (x.cssHooks[n + t] = {
          expand: function (e) {
            for (var r = 0, i = {}, o = "string" == typeof e ? e.split(" ") : [e]; r < 4; r++) i[n + en[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          }
        }),
          "margin" !== n && (x.cssHooks[n + t].set = Xn);
      }),
      x.fn.extend({
        css: function (n, t) {
          return N(
            this,
            function (n, t, e) {
              var r,
                i,
                o = {},
                u = 0;
              if (Array.isArray(t)) {
                for (r = Dn(n), i = t.length; u < i; u++) o[t[u]] = x.css(n, t[u], !1, r);
                return o;
              }
              return void 0 !== e ? x.style(n, t, e) : x.css(n, t);
            },
            n,
            t,
            1 < arguments.length
          );
        }
      }),
      (((x.Tween = Zn).prototype = {
        constructor: Zn,
        init: function (n, t, e, r, i, o) {
          (this.elem = n),
            (this.prop = e),
            (this.easing = i || x.easing.u),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (x.cssNumber[e] ? "" : "px"));
        },
        cur: function () {
          var n = Zn.propHooks[this.prop];
          return n && n.get ? n.get(this) : Zn.propHooks.u.get(this);
        },
        run: function (n) {
          var t,
            e = Zn.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t = x.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration))
              : (this.pos = t = n),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            e && e.set ? e.set(this) : Zn.propHooks.u.set(this),
            this
          );
        }
      }).init.prototype = Zn.prototype),
      ((Zn.propHooks = {
        u: {
          get: function (n) {
            var t;
            return 1 !== n.elem.nodeType || (null != n.elem[n.prop] && null == n.elem.style[n.prop])
              ? n.elem[n.prop]
              : (t = x.css(n.elem, n.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (n) {
            x.fx.step[n.prop]
              ? x.fx.step[n.prop](n)
              : 1 !== n.elem.nodeType || (!x.cssHooks[n.prop] && null == n.elem.style[Bn(n.prop)])
              ? (n.elem[n.prop] = n.now)
              : x.style(n.elem, n.prop, n.now + n.unit);
          }
        }
      }).scrollTop = Zn.propHooks.scrollLeft =
        {
          set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
          }
        }),
      (x.easing = {
        linear: function (n) {
          return n;
        },
        swing: function (n) {
          return 0.5 - Math.cos(n * Math.PI) / 2;
        },
        u: "swing"
      }),
      (x.fx = Zn.prototype.init),
      (x.fx.step = {});
    var nt,
      tt,
      et,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;
    function ut() {
      tt && (!1 === m.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, x.fx.interval), x.fx.tick());
    }
    function ct() {
      return (
        n.setTimeout(function () {
          nt = void 0;
        }),
        (nt = Date.now())
      );
    }
    function st(n, t) {
      var e,
        r = 0,
        i = { height: n };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (e = en[r])] = i["padding" + e] = n;
      return t && (i.opacity = i.width = n), i;
    }
    function ft(n, t, e) {
      for (var r, i = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, u = i.length; o < u; o++)
        if ((r = i[o].call(e, t, n))) return r;
    }
    function at(n, t, e) {
      var r,
        i,
        o = 0,
        u = at.prefilters.length,
        c = x.Deferred().always(function () {
          delete s.elem;
        }),
        s = function () {
          if (i) return !1;
          for (
            var t = nt || ct(), e = Math.max(0, f.startTime + f.duration - t), r = 1 - (e / f.duration || 0), o = 0, u = f.tweens.length;
            o < u;
            o++
          )
            f.tweens[o].run(r);
          return c.notifyWith(n, [f, r, e]), r < 1 && u ? e : (u || c.notifyWith(n, [f, 1, 0]), c.resolveWith(n, [f]), !1);
        },
        f = c.promise({
          elem: n,
          props: x.extend({}, t),
          opts: x.extend(!0, { specialEasing: {}, easing: x.easing.u }, e),
          originalProperties: t,
          originalOptions: e,
          startTime: nt || ct(),
          duration: e.duration,
          tweens: [],
          createTween: function (t, e) {
            var r = x.Tween(n, f.opts, t, e, f.opts.specialEasing[t] || f.opts.easing);
            return f.tweens.push(r), r;
          },
          stop: function (t) {
            var e = 0,
              r = t ? f.tweens.length : 0;
            if (i) return this;
            for (i = !0; e < r; e++) f.tweens[e].run(1);
            return t ? (c.notifyWith(n, [f, 1, 0]), c.resolveWith(n, [f, t])) : c.rejectWith(n, [f, t]), this;
          }
        }),
        a = f.props;
      for (
        (function (n, t) {
          var e, r, i, o, u;
          for (e in n)
            if (
              ((i = t[(r = G(e))]),
              (o = n[e]),
              Array.isArray(o) && ((i = o[1]), (o = n[e] = o[0])),
              e !== r && ((n[r] = o), delete n[e]),
              (u = x.cssHooks[r]) && ("expand" in u))
            )
              for (e in ((o = u.expand(o)), delete n[r], o)) (e in n) || ((n[e] = o[e]), (t[e] = i));
            else t[r] = i;
        })(a, f.opts.specialEasing);
        o < u;
        o++
      )
        if ((r = at.prefilters[o].call(f, n, a, f.opts))) return v(r.stop) && (x.o(f.elem, f.opts.queue).stop = r.stop.bind(r)), r;
      return (
        x.map(a, ft, f),
        v(f.opts.start) && f.opts.start.call(n, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        x.fx.timer(x.extend(s, { elem: n, anim: f, queue: f.opts.queue })),
        f
      );
    }
    (x.Animation = x.extend(at, {
      tweeners: {
        "*": [
          function (n, t) {
            var e = this.createTween(n, t);
            return sn(e.elem, n, tn.exec(t), e), e;
          }
        ]
      },
      tweener: function (n, t) {
        v(n) ? ((t = n), (n = ["*"])) : (n = n.match(M));
        for (var e, r = 0, i = n.length; r < i; r++) (e = n[r]), (at.tweeners[e] = at.tweeners[e] || []), at.tweeners[e].unshift(t);
      },
      prefilters: [
        function (n, t, e) {
          var r,
            i,
            o,
            u,
            c,
            s,
            f,
            a,
            d = "width" in t || "height" in t,
            l = this,
            h = {},
            v = n.style,
            p = n.nodeType && cn(n),
            m = J.get(n, "fxshow");
          for (r in (e.queue ||
            (null == (u = x.o(n, "fx")).unqueued &&
              ((u.unqueued = 0),
              (c = u.empty.fire),
              (u.empty.fire = function () {
                u.unqueued || c();
              })),
            u.unqueued++,
            l.always(function () {
              l.always(function () {
                u.unqueued--, x.queue(n, "fx").length || u.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), it.test(i))) {
              if ((delete t[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                p = !0;
              }
              h[r] = (m && m[r]) || x.style(n, r);
            }
          if ((s = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
            for (r in (d &&
              1 === n.nodeType &&
              ((e.overflow = [v.overflow, v.overflowX, v.overflowY]),
              null == (f = m && m.display) && (f = J.get(n, "display")),
              "none" === (a = x.css(n, "display")) &&
                (f ? (a = f) : (an([n], !0), (f = n.style.display || f), (a = x.css(n, "display")), an([n]))),
              ("inline" === a || ("inline-block" === a && null != f)) &&
                "none" === x.css(n, "float") &&
                (s ||
                  (l.done(function () {
                    v.display = f;
                  }),
                  null == f && ((a = v.display), (f = "none" === a ? "" : a))),
                (v.display = "inline-block"))),
            e.overflow &&
              ((v.overflow = "hidden"),
              l.always(function () {
                (v.overflow = e.overflow[0]), (v.overflowX = e.overflow[1]), (v.overflowY = e.overflow[2]);
              })),
            (s = !1),
            h))
              s ||
                (m ? "hidden" in m && (p = m.hidden) : (m = J.access(n, "fxshow", { display: f })),
                o && (m.hidden = !p),
                p && an([n], !0),
                l.done(function () {
                  for (r in (p || an([n]), J.remove(n, "fxshow"), h)) x.style(n, r, h[r]);
                })),
                (s = ft(p ? m[r] : 0, r, l)),
                r in m || ((m[r] = s.start), p && ((s.end = s.start), (s.start = 0)));
        }
      ],
      prefilter: function (n, t) {
        t ? at.prefilters.unshift(n) : at.prefilters.push(n);
      }
    })),
      (x.speed = function (n, t, e) {
        var r =
          n && "object" == typeof n
            ? x.extend({}, n)
            : { complete: e || (!e && t) || (v(n) && n), duration: n, easing: (e && t) || (t && !v(t) && t) };
        return (
          x.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in x.fx.speeds ? (r.duration = x.fx.speeds[r.duration]) : (r.duration = x.fx.speeds.u)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
          }),
          r
        );
      }),
      x.fn.extend({
        fadeTo: function (n, t, e, r) {
          return this.filter(cn).css("opacity", 0).show().end().animate({ opacity: t }, n, e, r);
        },
        animate: function (n, t, e, r) {
          var i = x.isEmptyObject(n),
            o = x.speed(t, e, r),
            u = function () {
              var t = at(this, x.extend({}, n), o);
              (i || J.get(this, "finish")) && t.stop(!0);
            };
          return (u.finish = u), i || !1 === o.queue ? this.each(u) : this.queue(o.queue, u);
        },
        stop: function (n, t, e) {
          var r = function (n) {
            var t = n.stop;
            delete n.stop, t(e);
          };
          return (
            "string" != typeof n && ((e = t), (t = n), (n = void 0)),
            t && this.queue(n || "fx", []),
            this.each(function () {
              var t = !0,
                i = null != n && n + "queueHooks",
                o = x.timers,
                u = J.get(this);
              if (i) u[i] && u[i].stop && r(u[i]);
              else for (i in u) u[i] && u[i].stop && ot.test(i) && r(u[i]);
              for (i = o.length; i--; )
                o[i].elem !== this || (null != n && o[i].queue !== n) || (o[i].anim.stop(e), (t = !1), o.splice(i, 1));
              (!t && e) || x.dequeue(this, n);
            })
          );
        },
        finish: function (n) {
          return (
            !1 !== n && (n = n || "fx"),
            this.each(function () {
              var t,
                e = J.get(this),
                r = e[n + "queue"],
                i = e[n + "queueHooks"],
                o = x.timers,
                u = r ? r.length : 0;
              for (e.finish = !0, x.queue(this, n, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                o[t].elem === this && o[t].queue === n && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < u; t++) r[t] && r[t].finish && r[t].finish.call(this);
              delete e.finish;
            })
          );
        }
      }),
      x.each(["toggle", "show", "hide"], function (n, t) {
        var e = x.fn[t];
        x.fn[t] = function (n, r, i) {
          return null == n || "boolean" == typeof n ? e.apply(this, arguments) : this.animate(st(t, !0), n, r, i);
        };
      }),
      x.each(
        {
          slideDown: st("show"),
          slideUp: st("hide"),
          slideToggle: st("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        },
        function (n, t) {
          x.fn[n] = function (n, e, r) {
            return this.animate(t, n, e, r);
          };
        }
      ),
      (x.timers = []),
      (x.fx.tick = function () {
        var n,
          t = 0,
          e = x.timers;
        for (nt = Date.now(); t < e.length; t++) (n = e[t])() || e[t] !== n || e.splice(t--, 1);
        e.length || x.fx.stop(), (nt = void 0);
      }),
      (x.fx.timer = function (n) {
        x.timers.push(n), x.fx.start();
      }),
      (x.fx.interval = 13),
      (x.fx.start = function () {
        tt || ((tt = !0), ut());
      }),
      (x.fx.stop = function () {
        tt = null;
      }),
      (x.fx.speeds = { slow: 600, fast: 200, u: 400 }),
      (x.fn.delay = function (t, e) {
        return (
          (t = (x.fx && x.fx.speeds[t]) || t),
          (e = e || "fx"),
          this.queue(e, function (e, r) {
            var i = n.setTimeout(e, t);
            r.stop = function () {
              n.clearTimeout(i);
            };
          })
        );
      }),
      (et = m.createElement("input")),
      (rt = m.createElement("select").appendChild(m.createElement("option"))),
      (et.type = "checkbox"),
      (h.checkOn = "" !== et.value),
      (h.optSelected = rt.selected),
      ((et = m.createElement("input")).value = "t"),
      (et.type = "radio"),
      (h.radioValue = "t" === et.value);
    var dt,
      lt = x.expr.attrHandle;
    x.fn.extend({
      attr: function (n, t) {
        return N(this, x.attr, n, t, 1 < arguments.length);
      },
      removeAttr: function (n) {
        return this.each(function () {
          x.removeAttr(this, n);
        });
      }
    }),
      x.extend({
        attr: function (n, t, e) {
          var r,
            i,
            o = n.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === n.getAttribute
              ? x.prop(n, t, e)
              : ((1 === o && x.isXMLDoc(n)) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== e
                  ? null === e
                    ? void x.removeAttr(n, t)
                    : i && "set" in i && void 0 !== (r = i.set(n, e, t))
                    ? r
                    : (n.setAttribute(t, e + ""), e)
                  : i && "get" in i && null !== (r = i.get(n, t))
                  ? r
                  : null == (r = x.find.attr(n, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (n, t) {
              if (!h.radioValue && "radio" === t && O(n, "input")) {
                var e = n.value;
                return n.setAttribute("type", t), e && (n.value = e), t;
              }
            }
          }
        },
        removeAttr: function (n, t) {
          var e,
            r = 0,
            i = t && t.match(M);
          if (i && 1 === n.nodeType) for (; (e = i[r++]); ) n.removeAttribute(e);
        }
      }),
      (dt = {
        set: function (n, t, e) {
          return !1 === t ? x.removeAttr(n, e) : n.setAttribute(e, e), e;
        }
      }),
      x.each(x.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var e = lt[t] || x.find.attr;
        lt[t] = function (n, t, r) {
          var i,
            o,
            u = t.toLowerCase();
          return r || ((o = lt[u]), (lt[u] = i), (i = null != e(n, t, r) ? u : null), (lt[u] = o)), i;
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      vt = /^(?:a|area)$/i;
    function pt(n) {
      return (n.match(M) || []).join(" ");
    }
    function mt(n) {
      return (n.getAttribute && n.getAttribute("class")) || "";
    }
    function wt(n) {
      return Array.isArray(n) ? n : ("string" == typeof n && n.match(M)) || [];
    }
    x.fn.extend({
      prop: function (n, t) {
        return N(this, x.prop, n, t, 1 < arguments.length);
      },
      removeProp: function (n) {
        return this.each(function () {
          delete this[x.propFix[n] || n];
        });
      }
    }),
      x.extend({
        prop: function (n, t, e) {
          var r,
            i,
            o = n.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && x.isXMLDoc(n)) || ((t = x.propFix[t] || t), (i = x.propHooks[t])),
              void 0 !== e
                ? i && "set" in i && void 0 !== (r = i.set(n, e, t))
                  ? r
                  : (n[t] = e)
                : i && "get" in i && null !== (r = i.get(n, t))
                ? r
                : n[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (n) {
              var t = x.find.attr(n, "tabindex");
              return t ? parseInt(t, 10) : ht.test(n.nodeName) || (vt.test(n.nodeName) && n.href) ? 0 : -1;
            }
          }
        },
        propFix: { for: "htmlFor", class: "className" }
      }),
      h.optSelected ||
        (x.propHooks.selected = {
          get: function (n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          }
        }),
      x.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ],
        function () {
          x.propFix[this.toLowerCase()] = this;
        }
      ),
      x.fn.extend({
        addClass: function (n) {
          var t,
            e,
            r,
            i,
            o,
            u,
            c,
            s = 0;
          if (v(n))
            return this.each(function (t) {
              x(this).addClass(n.call(this, t, mt(this)));
            });
          if ((t = wt(n)).length)
            for (; (e = this[s++]); )
              if (((i = mt(e)), (r = 1 === e.nodeType && " " + pt(i) + " "))) {
                for (u = 0; (o = t[u++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (c = pt(r)) && e.setAttribute("class", c);
              }
          return this;
        },
        removeClass: function (n) {
          var t,
            e,
            r,
            i,
            o,
            u,
            c,
            s = 0;
          if (v(n))
            return this.each(function (t) {
              x(this).removeClass(n.call(this, t, mt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((t = wt(n)).length)
            for (; (e = this[s++]); )
              if (((i = mt(e)), (r = 1 === e.nodeType && " " + pt(i) + " "))) {
                for (u = 0; (o = t[u++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                i !== (c = pt(r)) && e.setAttribute("class", c);
              }
          return this;
        },
        toggleClass: function (n, t) {
          var e = typeof n,
            r = "string" === e || Array.isArray(n);
          return "boolean" == typeof t && r
            ? t
              ? this.addClass(n)
              : this.removeClass(n)
            : v(n)
            ? this.each(function (e) {
                x(this).toggleClass(n.call(this, e, mt(this), t), t);
              })
            : this.each(function () {
                var t, i, o, u;
                if (r) for (i = 0, o = x(this), u = wt(n); (t = u[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (void 0 !== n && "boolean" !== e) ||
                    ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : J.get(this, "__className__") || ""));
              });
        },
        hasClass: function (n) {
          var t,
            e,
            r = 0;
          for (t = " " + n + " "; (e = this[r++]); ) if (1 === e.nodeType && -1 < (" " + pt(mt(e)) + " ").indexOf(t)) return !0;
          return !1;
        }
      });
    var gt = /\r/g;
    x.fn.extend({
      val: function (n) {
        var t,
          e,
          r,
          i = this[0];
        return arguments.length
          ? ((r = v(n)),
            this.each(function (e) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? n.call(this, e, x(this).val()) : n)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = x.map(i, function (n) {
                      return null == n ? "" : n + "";
                    })),
                ((t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            }))
          : i
          ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (e = t.get(i, "value"))
            ? e
            : "string" == typeof (e = i.value)
            ? e.replace(gt, "")
            : null == e
            ? ""
            : e
          : void 0;
      }
    }),
      x.extend({
        valHooks: {
          option: {
            get: function (n) {
              var t = x.find.attr(n, "value");
              return null != t ? t : pt(x.text(n));
            }
          },
          select: {
            get: function (n) {
              var t,
                e,
                r,
                i = n.options,
                o = n.selectedIndex,
                u = "select-one" === n.type,
                c = u ? null : [],
                s = u ? o + 1 : i.length;
              for (r = o < 0 ? s : u ? o : 0; r < s; r++)
                if (((e = i[r]).selected || r === o) && !e.disabled && (!e.parentNode.disabled || !O(e.parentNode, "optgroup"))) {
                  if (((t = x(e).val()), u)) return t;
                  c.push(t);
                }
              return c;
            },
            set: function (n, t) {
              for (var e, r, i = n.options, o = x.makeArray(t), u = i.length; u--; )
                ((r = i[u]).selected = -1 < x.inArray(x.valHooks.option.get(r), o)) && (e = !0);
              return e || (n.selectedIndex = -1), o;
            }
          }
        }
      }),
      x.each(["radio", "checkbox"], function () {
        (x.valHooks[this] = {
          set: function (n, t) {
            if (Array.isArray(t)) return (n.checked = -1 < x.inArray(x(n).val(), t));
          }
        }),
          h.checkOn ||
            (x.valHooks[this].get = function (n) {
              return null === n.getAttribute("value") ? "on" : n.value;
            });
      }),
      (h.focusin = "onfocusin" in n);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
      yt = function (n) {
        n.stopPropagation();
      };
    x.extend(x.event, {
      trigger: function (t, e, r, i) {
        var o,
          u,
          c,
          s,
          f,
          d,
          l,
          h,
          w = [r || m],
          g = a.call(t, "type") ? t.type : t,
          b = a.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((u = h = c = r = r || m),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !bt.test(g + x.event.triggered) &&
            (-1 < g.indexOf(".") && ((g = (b = g.split(".")).shift()), b.sort()),
            (f = g.indexOf(":") < 0 && "on" + g),
            ((t = t[x.expando] ? t : new x.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
            (t.namespace = b.join(".")),
            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (e = null == e ? [t] : x.makeArray(e, [t])),
            (l = x.event.special[g] || {}),
            i || !l.trigger || !1 !== l.trigger.apply(r, e)))
        ) {
          if (!i && !l.noBubble && !p(r)) {
            for (s = l.delegateType || g, bt.test(s + g) || (u = u.parentNode); u; u = u.parentNode) w.push(u), (c = u);
            c === (r.ownerDocument || m) && w.push(c.defaultView || c.parentWindow || n);
          }
          for (o = 0; (u = w[o++]) && !t.isPropagationStopped(); )
            (h = u),
              (t.type = 1 < o ? s : l.bindType || g),
              (d = (J.get(u, "events") || Object.create(null))[t.type] && J.get(u, "handle")) && d.apply(u, e),
              (d = f && u[f]) && d.apply && H(u) && ((t.result = d.apply(u, e)), !1 === t.result && t.preventDefault());
          return (
            (t.type = g),
            i ||
              t.isDefaultPrevented() ||
              (l.u && !1 !== l.u.apply(w.pop(), e)) ||
              !H(r) ||
              (f &&
                v(r[g]) &&
                !p(r) &&
                ((c = r[f]) && (r[f] = null),
                (x.event.triggered = g),
                t.isPropagationStopped() && h.addEventListener(g, yt),
                r[g](),
                t.isPropagationStopped() && h.removeEventListener(g, yt),
                (x.event.triggered = void 0),
                c && (r[f] = c))),
            t.result
          );
        }
      },
      simulate: function (n, t, e) {
        var r = x.extend(new x.Event(), e, { type: n, isSimulated: !0 });
        x.event.trigger(r, null, t);
      }
    }),
      x.fn.extend({
        trigger: function (n, t) {
          return this.each(function () {
            x.event.trigger(n, t, this);
          });
        },
        triggerHandler: function (n, t) {
          var e = this[0];
          if (e) return x.event.trigger(n, t, e, !0);
        }
      }),
      h.focusin ||
        x.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
          var e = function (n) {
            x.event.simulate(t, n.target, x.event.fix(n));
          };
          x.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                i = J.access(r, t);
              i || r.addEventListener(n, e, !0), J.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                i = J.access(r, t) - 1;
              i ? J.access(r, t, i) : (r.removeEventListener(n, e, !0), J.remove(r, t));
            }
          };
        });
    var xt = n.location,
      Ct = { guid: Date.now() },
      kt = /\?/;
    x.parseXML = function (t) {
      var e, r;
      if (!t || "string" != typeof t) return null;
      try {
        e = new n.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {}
      return (
        (r = e && e.getElementsByTagName("parsererror")[0]),
        (e && !r) ||
          x.error(
            "Invalid XML: " +
              (r
                ? x
                    .map(r.childNodes, function (n) {
                      return n.textContent;
                    })
                    .join("\n")
                : t)
          ),
        e
      );
    };
    var It = /\[\]$/,
      jt = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      Ot = /^(?:input|select|textarea|keygen)/i;
    function Rt(n, t, e, r) {
      var i;
      if (Array.isArray(t))
        x.each(t, function (t, i) {
          e || It.test(n) ? r(n, i) : Rt(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, e, r);
        });
      else if (e || "object" !== b(t)) r(n, t);
      else for (i in t) Rt(n + "[" + i + "]", t[i], e, r);
    }
    (x.param = function (n, t) {
      var e,
        r = [],
        i = function (n, t) {
          var e = v(t) ? t() : t;
          r[r.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == e ? "" : e);
        };
      if (null == n) return "";
      if (Array.isArray(n) || (n.jquery && !x.isPlainObject(n)))
        x.each(n, function () {
          i(this.name, this.value);
        });
      else for (e in n) Rt(e, n[e], t, i);
      return r.join("&");
    }),
      x.fn.extend({
        serialize: function () {
          return x.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var n = x.prop(this, "elements");
            return n ? x.makeArray(n) : this;
          })
            .filter(function () {
              var n = this.type;
              return this.name && !x(this).is(":disabled") && Ot.test(this.nodeName) && !St.test(n) && (this.checked || !hn.test(n));
            })
            .map(function (n, t) {
              var e = x(this).val();
              return null == e
                ? null
                : Array.isArray(e)
                ? x.map(e, function (n) {
                    return { name: t.name, value: n.replace(jt, "\r\n") };
                  })
                : { name: t.name, value: e.replace(jt, "\r\n") };
            })
            .get();
        }
      });
    var Ft = /%20/g,
      Tt = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Et = /^(?:GET|HEAD)$/,
      At = /^\/\//,
      Mt = {},
      _t = {},
      Dt = "*/".concat("*"),
      Ut = m.createElement("a");
    function Vt(n) {
      return function (t, e) {
        "string" != typeof t && ((e = t), (t = "*"));
        var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
        if (v(e))
          for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(e)) : (n[r] = n[r] || []).push(e);
      };
    }
    function $t(n, t, e, r) {
      var i = {},
        o = n === _t;
      function u(c) {
        var s;
        return (
          (i[c] = !0),
          x.each(n[c] || [], function (n, c) {
            var f = c(t, e, r);
            return "string" != typeof f || o || i[f] ? (o ? !(s = f) : void 0) : (t.dataTypes.unshift(f), u(f), !1);
          }),
          s
        );
      }
      return u(t.dataTypes[0]) || (!i["*"] && u("*"));
    }
    function Kt(n, t) {
      var e,
        r,
        i = x.ajaxSettings.flatOptions || {};
      for (e in t) void 0 !== t[e] && ((i[e] ? n : r || (r = {}))[e] = t[e]);
      return r && x.extend(!0, n, r), n;
    }
    (Ut.href = xt.href),
      x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: xt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Dt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
          converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML },
          flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function (n, t) {
          return t ? Kt(Kt(n, x.ajaxSettings), t) : Kt(x.ajaxSettings, n);
        },
        ajaxPrefilter: Vt(Mt),
        ajaxTransport: Vt(_t),
        ajax: function (t, e) {
          "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
          var r,
            i,
            o,
            u,
            c,
            s,
            f,
            a,
            d,
            l,
            h = x.ajaxSetup({}, e),
            v = h.context || h,
            p = h.context && (v.nodeType || v.jquery) ? x(v) : x.event,
            w = x.Deferred(),
            g = x.Callbacks("once memory"),
            b = h.statusCode || {},
            y = {},
            C = {},
            k = "canceled",
            I = {
              readyState: 0,
              getResponseHeader: function (n) {
                var t;
                if (f) {
                  if (!u) for (u = {}; (t = qt.exec(o)); ) u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = u[n.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return f ? o : null;
              },
              setRequestHeader: function (n, t) {
                return null == f && ((n = C[n.toLowerCase()] = C[n.toLowerCase()] || n), (y[n] = t)), this;
              },
              overrideMimeType: function (n) {
                return null == f && (h.mimeType = n), this;
              },
              statusCode: function (n) {
                var t;
                if (n)
                  if (f) I.always(n[I.status]);
                  else for (t in n) b[t] = [b[t], n[t]];
                return this;
              },
              abort: function (n) {
                var t = n || k;
                return r && r.abort(t), j(0, t), this;
              }
            };
          if (
            (w.promise(I),
            (h.url = ((t || h.url || xt.href) + "").replace(At, xt.protocol + "//")),
            (h.type = e.method || e.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
            null == h.crossDomain)
          ) {
            s = m.createElement("a");
            try {
              (s.href = h.url), (s.href = s.href), (h.crossDomain = Ut.protocol + "//" + Ut.host != s.protocol + "//" + s.host);
            } catch (t) {
              h.crossDomain = !0;
            }
          }
          if ((h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), $t(Mt, h, e, I), f))
            return I;
          for (d in ((a = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Et.test(h.type)),
          (i = h.url.replace(Tt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") &&
              (h.data = h.data.replace(Ft, "+"))
            : ((l = h.url.slice(i.length)),
              h.data && (h.processData || "string" == typeof h.data) && ((i += (kt.test(i) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache && ((i = i.replace(Pt, "$1")), (l = (kt.test(i) ? "&" : "?") + "_=" + Ct.guid++ + l)),
              (h.url = i + l)),
          h.ifModified &&
            (x.lastModified[i] && I.setRequestHeader("If-Modified-Since", x.lastModified[i]),
            x.etag[i] && I.setRequestHeader("If-None-Match", x.etag[i])),
          ((h.data && h.hasContent && !1 !== h.contentType) || e.contentType) && I.setRequestHeader("Content-Type", h.contentType),
          I.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Dt + "; q=0.01" : "")
              : h.accepts["*"]
          ),
          h.headers))
            I.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(v, I, h) || f)) return I.abort();
          if (((k = "abort"), g.add(h.complete), I.done(h.success), I.fail(h.error), (r = $t(_t, h, e, I)))) {
            if (((I.readyState = 1), a && p.trigger("ajaxSend", [I, h]), f)) return I;
            h.async &&
              0 < h.timeout &&
              (c = n.setTimeout(function () {
                I.abort("timeout");
              }, h.timeout));
            try {
              (f = !1), r.send(y, j);
            } catch (t) {
              if (f) throw t;
              j(-1, t);
            }
          } else j(-1, "No Transport");
          function j(t, e, u, s) {
            var d,
              l,
              m,
              y,
              C,
              k = e;
            f ||
              ((f = !0),
              c && n.clearTimeout(c),
              (r = void 0),
              (o = s || ""),
              (I.readyState = 0 < t ? 4 : 0),
              (d = (200 <= t && t < 300) || 304 === t),
              u &&
                (y = (function (n, t, e) {
                  for (var r, i, o, u, c = n.contents, s = n.dataTypes; "*" === s[0]; )
                    s.shift(), void 0 === r && (r = n.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in c)
                      if (c[i] && c[i].test(r)) {
                        s.unshift(i);
                        break;
                      }
                  if (s[0] in e) o = s[0];
                  else {
                    for (i in e) {
                      if (!s[0] || n.converters[i + " " + s[0]]) {
                        o = i;
                        break;
                      }
                      u || (u = i);
                    }
                    o = o || u;
                  }
                  if (o) return o !== s[0] && s.unshift(o), e[o];
                })(h, I, u)),
              !d &&
                -1 < x.inArray("script", h.dataTypes) &&
                x.inArray("json", h.dataTypes) < 0 &&
                (h.converters["text script"] = function () {}),
              (y = (function (n, t, e, r) {
                var i,
                  o,
                  u,
                  c,
                  s,
                  f = {},
                  a = n.dataTypes.slice();
                if (a[1]) for (u in n.converters) f[u.toLowerCase()] = n.converters[u];
                for (o = a.shift(); o; )
                  if (
                    (n.responseFields[o] && (e[n.responseFields[o]] = t),
                    !s && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                    (s = o),
                    (o = a.shift()))
                  )
                    if ("*" === o) o = s;
                    else if ("*" !== s && s !== o) {
                      if (!(u = f[s + " " + o] || f["* " + o]))
                        for (i in f)
                          if ((c = i.split(" "))[1] === o && (u = f[s + " " + c[0]] || f["* " + c[0]])) {
                            !0 === u ? (u = f[i]) : !0 !== f[i] && ((o = c[0]), a.unshift(c[1]));
                            break;
                          }
                      if (!0 !== u)
                        if (u && n.throws) t = u(t);
                        else
                          try {
                            t = u(t);
                          } catch (n) {
                            return { state: "parsererror", error: u ? n : "No conversion from " + s + " to " + o };
                          }
                    }
                return { state: "success", data: t };
              })(h, y, I, d)),
              d
                ? (h.ifModified &&
                    ((C = I.getResponseHeader("Last-Modified")) && (x.lastModified[i] = C),
                    (C = I.getResponseHeader("etag")) && (x.etag[i] = C)),
                  204 === t || "HEAD" === h.type
                    ? (k = "nocontent")
                    : 304 === t
                    ? (k = "notmodified")
                    : ((k = y.state), (l = y.data), (d = !(m = y.error))))
                : ((m = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
              (I.status = t),
              (I.statusText = (e || k) + ""),
              d ? w.resolveWith(v, [l, k, I]) : w.rejectWith(v, [I, k, m]),
              I.statusCode(b),
              (b = void 0),
              a && p.trigger(d ? "ajaxSuccess" : "ajaxError", [I, h, d ? l : m]),
              g.fireWith(v, [I, k]),
              a && (p.trigger("ajaxComplete", [I, h]), --x.active || x.event.trigger("ajaxStop")));
          }
          return I;
        },
        getJSON: function (n, t, e) {
          return x.get(n, t, e, "json");
        },
        getScript: function (n, t) {
          return x.get(n, void 0, t, "script");
        }
      }),
      x.each(["get", "post"], function (n, t) {
        x[t] = function (n, e, r, i) {
          return (
            v(e) && ((i = i || r), (r = e), (e = void 0)),
            x.ajax(x.extend({ url: n, type: t, dataType: i, data: e, success: r }, x.isPlainObject(n) && n))
          );
        };
      }),
      x.ajaxPrefilter(function (n) {
        var t;
        for (t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "");
      }),
      (x.l = function (n, t, e) {
        return x.ajax({
          url: n,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (n) {
            x.globalEval(n, t, e);
          }
        });
      }),
      x.fn.extend({
        wrapAll: function (n) {
          var t;
          return (
            this[0] &&
              (v(n) && (n = n.call(this[0])),
              (t = x(n, this[0].ownerDocument).eq(0).clone(!0)),
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
          return v(n)
            ? this.each(function (t) {
                x(this).wrapInner(n.call(this, t));
              })
            : this.each(function () {
                var t = x(this),
                  e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n);
              });
        },
        wrap: function (n) {
          var t = v(n);
          return this.each(function (e) {
            x(this).wrapAll(t ? n.call(this, e) : n);
          });
        },
        unwrap: function (n) {
          return (
            this.parent(n)
              .not("body")
              .each(function () {
                x(this).replaceWith(this.childNodes);
              }),
            this
          );
        }
      }),
      (x.expr.pseudos.hidden = function (n) {
        return !x.expr.pseudos.visible(n);
      }),
      (x.expr.pseudos.visible = function (n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
      }),
      (x.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest();
        } catch (n) {}
      });
    var Nt = { 0: 200, 1223: 204 },
      Lt = x.ajaxSettings.xhr();
    (h.cors = !!Lt && "withCredentials" in Lt),
      (h.ajax = Lt = !!Lt),
      x.ajaxTransport(function (t) {
        var e, r;
        if (h.cors || (Lt && !t.crossDomain))
          return {
            send: function (i, o) {
              var u,
                c = t.xhr();
              if ((c.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (u in t.xhrFields) c[u] = t.xhrFields[u];
              for (u in (t.mimeType && c.overrideMimeType && c.overrideMimeType(t.mimeType),
              t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
              i))
                c.setRequestHeader(u, i[u]);
              (e = function (n) {
                return function () {
                  e &&
                    ((e = r = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null),
                    "abort" === n
                      ? c.abort()
                      : "error" === n
                      ? "number" != typeof c.status
                        ? o(0, "error")
                        : o(c.status, c.statusText)
                      : o(
                          Nt[c.status] || c.status,
                          c.statusText,
                          "text" !== (c.responseType || "text") || "string" != typeof c.responseText
                            ? { binary: c.response }
                            : { text: c.responseText },
                          c.getAllResponseHeaders()
                        ));
                };
              }),
                (c.onload = e()),
                (r = c.onerror = c.ontimeout = e("error")),
                void 0 !== c.onabort
                  ? (c.onabort = r)
                  : (c.onreadystatechange = function () {
                      4 === c.readyState &&
                        n.setTimeout(function () {
                          e && r();
                        });
                    }),
                (e = e("abort"));
              try {
                c.send((t.hasContent && t.data) || null);
              } catch (i) {
                if (e) throw i;
              }
            },
            abort: function () {
              e && e();
            }
          };
      }),
      x.ajaxPrefilter(function (n) {
        n.crossDomain && (n.contents.script = !1);
      }),
      x.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (n) {
            return x.globalEval(n), n;
          }
        }
      }),
      x.ajaxPrefilter("script", function (n) {
        void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET");
      }),
      x.ajaxTransport("script", function (n) {
        var t, e;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (r, i) {
              (t = x("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (e = function (n) {
                    t.remove(), (e = null), n && i("error" === n.type ? 404 : 200, n.type);
                  })
                )),
                m.head.appendChild(t[0]);
            },
            abort: function () {
              e && e();
            }
          };
      });
    var zt,
      Bt = [],
      Gt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var n = Bt.pop() || x.expando + "_" + Ct.guid++;
        return (this[n] = !0), n;
      }
    }),
      x.ajaxPrefilter("json jsonp", function (t, e, r) {
        var i,
          o,
          u,
          c =
            !1 !== t.jsonp &&
            (Gt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                Gt.test(t.data) &&
                "data");
        if (c || "jsonp" === t.dataTypes[0])
          return (
            (i = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            c ? (t[c] = t[c].replace(Gt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return u || x.error(i + " was not called"), u[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = n[i]),
            (n[i] = function () {
              u = arguments;
            }),
            r.always(function () {
              void 0 === o ? x(n).removeProp(i) : (n[i] = o),
                t[i] && ((t.jsonpCallback = e.jsonpCallback), Bt.push(i)),
                u && v(o) && o(u[0]),
                (u = o = void 0);
            }),
            "script"
          );
      }),
      (h.createHTMLDocument =
        (((zt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === zt.childNodes.length)),
      (x.parseHTML = function (n, t, e) {
        return "string" != typeof n
          ? []
          : ("boolean" == typeof t && ((e = t), (t = !1)),
            t ||
              (h.createHTMLDocument
                ? (((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href),
                  t.head.appendChild(r))
                : (t = m)),
            (o = !e && []),
            (i = R.exec(n)) ? [t.createElement(i[1])] : ((i = yn([n], t, o)), o && o.length && x(o).remove(), x.merge([], i.childNodes)));
        var r, i, o;
      }),
      (x.fn.load = function (n, t, e) {
        var r,
          i,
          o,
          u = this,
          c = n.indexOf(" ");
        return (
          -1 < c && ((r = pt(n.slice(c))), (n = n.slice(0, c))),
          v(t) ? ((e = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
          0 < u.length &&
            x
              .ajax({ url: n, type: i || "GET", dataType: "html", data: t })
              .done(function (n) {
                (o = arguments), u.html(r ? x("<div>").append(x.parseHTML(n)).find(r) : n);
              })
              .always(
                e &&
                  function (n, t) {
                    u.each(function () {
                      e.apply(this, o || [n.responseText, t, n]);
                    });
                  }
              ),
          this
        );
      }),
      (x.expr.pseudos.animated = function (n) {
        return x.grep(x.timers, function (t) {
          return n === t.elem;
        }).length;
      }),
      (x.offset = {
        setOffset: function (n, t, e) {
          var r,
            i,
            o,
            u,
            c,
            s,
            f = x.css(n, "position"),
            a = x(n),
            d = {};
          "static" === f && (n.style.position = "relative"),
            (c = a.offset()),
            (o = x.css(n, "top")),
            (s = x.css(n, "left")),
            ("absolute" === f || "fixed" === f) && -1 < (o + s).indexOf("auto")
              ? ((u = (r = a.position()).top), (i = r.left))
              : ((u = parseFloat(o) || 0), (i = parseFloat(s) || 0)),
            v(t) && (t = t.call(n, e, x.extend({}, c))),
            null != t.top && (d.top = t.top - c.top + u),
            null != t.left && (d.left = t.left - c.left + i),
            "using" in t ? t.using.call(n, d) : a.css(d);
        }
      }),
      x.fn.extend({
        offset: function (n) {
          if (arguments.length)
            return void 0 === n
              ? this
              : this.each(function (t) {
                  x.offset.setOffset(this, n, t);
                });
          var t,
            e,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (e = r.ownerDocument.defaultView),
                { top: t.top + e.pageYOffset, left: t.left + e.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var n,
              t,
              e,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(), e = r.ownerDocument, n = r.offsetParent || e.documentElement;
                n && (n === e.body || n === e.documentElement) && "static" === x.css(n, "position");

              )
                n = n.parentNode;
              n &&
                n !== r &&
                1 === n.nodeType &&
                (((i = x(n).offset()).top += x.css(n, "borderTopWidth", !0)), (i.left += x.css(n, "borderLeftWidth", !0)));
            }
            return { top: t.top - i.top - x.css(r, "marginTop", !0), left: t.left - i.left - x.css(r, "marginLeft", !0) };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var n = this.offsetParent; n && "static" === x.css(n, "position"); ) n = n.offsetParent;
            return n || rn;
          });
        }
      }),
      x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (n, t) {
        var e = "pageYOffset" === t;
        x.fn[n] = function (r) {
          return N(
            this,
            function (n, r, i) {
              var o;
              if ((p(n) ? (o = n) : 9 === n.nodeType && (o = n.defaultView), void 0 === i)) return o ? o[t] : n[r];
              o ? o.scrollTo(e ? o.pageXOffset : i, e ? i : o.pageYOffset) : (n[r] = i);
            },
            n,
            r,
            arguments.length
          );
        };
      }),
      x.each(["top", "left"], function (n, t) {
        x.cssHooks[t] = Kn(h.pixelPosition, function (n, e) {
          if (e) return (e = $n(n, t)), _n.test(e) ? x(n).position()[t] + "px" : e;
        });
      }),
      x.each({ Height: "height", Width: "width" }, function (n, t) {
        x.each({ padding: "inner" + n, content: t, "": "outer" + n }, function (e, r) {
          x.fn[r] = function (i, o) {
            var u = arguments.length && (e || "boolean" != typeof i),
              c = e || (!0 === i || !0 === o ? "margin" : "border");
            return N(
              this,
              function (t, e, i) {
                var o;
                return p(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + n]
                    : t.document.documentElement["client" + n]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(t.body["scroll" + n], o["scroll" + n], t.body["offset" + n], o["offset" + n], o["client" + n]))
                  : void 0 === i
                  ? x.css(t, e, c)
                  : x.style(t, e, i, c);
              },
              t,
              u ? i : void 0,
              u
            );
          };
        });
      }),
      x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
        x.fn[t] = function (n) {
          return this.on(t, n);
        };
      }),
      x.fn.extend({
        bind: function (n, t, e) {
          return this.on(n, null, t, e);
        },
        unbind: function (n, t) {
          return this.off(n, null, t);
        },
        delegate: function (n, t, e, r) {
          return this.on(t, n, e, r);
        },
        undelegate: function (n, t, e) {
          return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", e);
        },
        hover: function (n, t) {
          return this.mouseenter(n).mouseleave(t || n);
        }
      }),
      x.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (n, t) {
          x.fn[t] = function (n, e) {
            return 0 < arguments.length ? this.on(t, null, n, e) : this.trigger(t);
          };
        }
      );
    var Ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (x.proxy = function (n, t) {
      var e, r, o;
      if (("string" == typeof t && ((e = n[t]), (t = n), (n = e)), v(n)))
        return (
          (r = i.call(arguments, 2)),
          ((o = function () {
            return n.apply(t || this, r.concat(i.call(arguments)));
          }).guid = n.guid =
            n.guid || x.guid++),
          o
        );
    }),
      (x.holdReady = function (n) {
        n ? x.readyWait++ : x.ready(!0);
      }),
      (x.isArray = Array.isArray),
      (x.parseJSON = JSON.parse),
      (x.nodeName = O),
      (x.isFunction = v),
      (x.isWindow = p),
      (x.camelCase = G),
      (x.type = b),
      (x.now = Date.now),
      (x.isNumeric = function (n) {
        var t = x.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
      }),
      (x.trim = function (n) {
        return null == n ? "" : (n + "").replace(Ht, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return x;
        });
    var Wt = n.jQuery,
      Jt = n.$;
    return (
      (x.noConflict = function (t) {
        return n.$ === x && (n.$ = Jt), t && n.jQuery === x && (n.jQuery = Wt), x;
      }),
      void 0 === t && (n.jQuery = n.$ = x),
      x
    );
  }),
  (parcelRequire = (function (n, t, e, r) {
    var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;
    function c(e, r) {
      if (!t[e]) {
        if (!n[e]) {
          var i = "function" == typeof parcelRequire && parcelRequire;
          if (!r && i) return i(e, !0);
          if (o) return o(e, !0);
          if (u && "string" == typeof e) return u(e);
          var s = new Error("Cannot find module '" + e + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        (a.resolve = function (t) {
          return n[e][1][t] || t;
        }),
          (a.cache = {});
        var f = (t[e] = new c.Module(e));
        n[e][0].call(f.exports, a, f, f.exports, this);
      }
      return t[e].exports;
      function a(n) {
        return c(a.resolve(n));
      }
    }
    (c.isParcelRequire = !0),
      (c.Module = function (n) {
        (this.id = n), (this.bundle = c), (this.exports = {});
      }),
      (c.modules = n),
      (c.cache = t),
      (c.parent = o),
      (c.register = function (t, e) {
        n[t] = [
          function (n, t) {
            t.exports = e;
          },
          {}
        ];
      });
    for (var s = 0; s < e.length; s++)
      try {
        c(e[s]);
      } catch (n) {
        i || (i = n);
      }
    if (e.length) {
      var f = c(e[e.length - 1]);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof define && define.amd
        ? define(function () {
            return f;
          })
        : (this[r] = f);
    }
    if (((parcelRequire = c), i)) throw i;
    return c;
  })(
    {
      kn0U: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.default = function (n, t) {
              return (
                (t = t || {}),
                new Promise(function (e, r) {
                  var i = new XMLHttpRequest(),
                    o = [],
                    u = [],
                    c = {},
                    s = function () {
                      return {
                        ok: 2 == ((i.status / 100) | 0),
                        statusText: i.statusText,
                        status: i.status,
                        url: i.responseURL,
                        text: function () {
                          return Promise.resolve(i.responseText);
                        },
                        json: function () {
                          return Promise.resolve(i.responseText).then(JSON.parse);
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([i.response]));
                        },
                        clone: s,
                        headers: {
                          keys: function () {
                            return o;
                          },
                          entries: function () {
                            return u;
                          },
                          get: function (n) {
                            return c[n.toLowerCase()];
                          },
                          has: function (n) {
                            return n.toLowerCase() in c;
                          }
                        }
                      };
                    };
                  for (var f in (i.open(t.method || "get", n, !0),
                  (i.onload = function () {
                    i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (n, t, e) {
                      o.push((t = t.toLowerCase())), u.push([t, e]), (c[t] = c[t] ? c[t] + "," + e : e);
                    }),
                      e(s());
                  }),
                  (i.onerror = r),
                  (i.withCredentials = "include" == t.credentials),
                  t.headers))
                    i.setRequestHeader(f, t.headers[f]);
                  i.send(t.body || null);
                })
              );
            });
        },
        {}
      ],
      VS7n: [
        function (n, t, e) {
          t.exports = self.fetch || (self.fetch = n("unfetch").default || n("unfetch"));
        },
        { unfetch: "kn0U" }
      ],
      iC5B: [
        function (n, t, e) {
          function r(n) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                  })(n);
          }
          t.exports = "object" == ("undefined" == typeof self ? "undefined" : r(self)) ? self.FormData : window.FormData;
        },
        {}
      ],
      IAgR: [
        function (n, t, e) {
          var r = 1e3,
            i = 60 * r,
            o = 60 * i,
            u = 24 * o;
          function c(n) {
            if (!((n = String(n)).length > 100)) {
              var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  n
                );
              if (t) {
                var e = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * e;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * e;
                  case "days":
                  case "day":
                  case "d":
                    return e * u;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return e * o;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return e * i;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return e * r;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return e;
                  default:
                    return;
                }
              }
            }
          }
          function s(n) {
            var t = Math.abs(n);
            return t >= u
              ? Math.round(n / u) + "d"
              : t >= o
              ? Math.round(n / o) + "h"
              : t >= i
              ? Math.round(n / i) + "m"
              : t >= r
              ? Math.round(n / r) + "s"
              : n + "ms";
          }
          function f(n) {
            var t = Math.abs(n);
            return t >= u
              ? a(n, t, u, "day")
              : t >= o
              ? a(n, t, o, "hour")
              : t >= i
              ? a(n, t, i, "minute")
              : t >= r
              ? a(n, t, r, "second")
              : n + " ms";
          }
          function a(n, t, e, r) {
            var i = t >= 1.5 * e;
            return Math.round(n / e) + " " + r + (i ? "s" : "");
          }
          t.exports = function (n, t) {
            t = t || {};
            var e = typeof n;
            if ("string" === e && n.length > 0) return c(n);
            if ("number" === e && isFinite(n)) return t.long ? f(n) : s(n);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(n));
          };
        },
        {}
      ],
      Kest: [
        function (n, t, e) {
          t.exports = function (t) {
            function e(n) {
              let t = 0;
              for (let e = 0; e < n.length; e++) (t = (t << 5) - t + n.charCodeAt(e)), (t |= 0);
              return r.colors[Math.abs(t) % r.colors.length];
            }
            function r(n) {
              let t;
              function u(...n) {
                if (!u.enabled) return;
                const e = u,
                  i = Number(new Date()),
                  o = i - (t || i);
                (e.diff = o), (e.prev = t), (e.curr = i), (t = i), (n[0] = r.coerce(n[0])), "string" != typeof n[0] && n.unshift("%O");
                let c = 0;
                (n[0] = n[0].replace(/%([a-zA-Z%])/g, (t, i) => {
                  if ("%%" === t) return t;
                  c++;
                  const o = r.formatters[i];
                  if ("function" == typeof o) {
                    const r = n[c];
                    (t = o.call(e, r)), n.splice(c, 1), c--;
                  }
                  return t;
                })),
                  r.formatArgs.call(e, n),
                  (e.log || r.log).apply(e, n);
              }
              return (
                (u.namespace = n),
                (u.enabled = r.enabled(n)),
                (u.useColors = r.useColors()),
                (u.color = e(n)),
                (u.destroy = i),
                (u.extend = o),
                "function" == typeof r.init && r.init(u),
                r.instances.push(u),
                u
              );
            }
            function i() {
              const n = r.instances.indexOf(this);
              return -1 !== n && (r.instances.splice(n, 1), !0);
            }
            function o(n, t) {
              const e = r(this.namespace + (void 0 === t ? ":" : t) + n);
              return (e.log = this.log), e;
            }
            function u(n) {
              return n
                .toString()
                .substring(2, n.toString().length - 2)
                .replace(/\.\*\?$/, "*");
            }
            return (
              (r.debug = r),
              (r.default = r),
              (r.coerce = function (n) {
                return n instanceof Error ? n.stack || n.message : n;
              }),
              (r.disable = function () {
                const n = [...r.names.map(u), ...r.skips.map(u).map((n) => "-" + n)].join(",");
                return r.enable(""), n;
              }),
              (r.enable = function (n) {
                let t;
                r.save(n), (r.names = []), (r.skips = []);
                const e = ("string" == typeof n ? n : "").split(/[\s,]+/),
                  i = e.length;
                for (t = 0; t < i; t++)
                  e[t] &&
                    ("-" === (n = e[t].replace(/\*/g, ".*?"))[0]
                      ? r.skips.push(new RegExp("^" + n.substr(1) + "$"))
                      : r.names.push(new RegExp("^" + n + "$")));
                for (t = 0; t < r.instances.length; t++) {
                  const n = r.instances[t];
                  n.enabled = r.enabled(n.namespace);
                }
              }),
              (r.enabled = function (n) {
                if ("*" === n[n.length - 1]) return !0;
                let t, e;
                for (t = 0, e = r.skips.length; t < e; t++) if (r.skips[t].test(n)) return !1;
                for (t = 0, e = r.names.length; t < e; t++) if (r.names[t].test(n)) return !0;
                return !1;
              }),
              (r.humanize = n("ms")),
              Object.keys(t).forEach((n) => {
                r[n] = t[n];
              }),
              (r.instances = []),
              (r.names = []),
              (r.skips = []),
              (r.formatters = {}),
              (r.selectColor = e),
              r.enable(r.load()),
              r
            );
          };
        },
        { ms: "IAgR" }
      ],
      pBGv: [
        function (n, t, e) {
          var r,
            i,
            o = (t.exports = {});
          function u() {
            throw new Error("setTimeout has not been defined");
          }
          function c() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(n) {
            if (r === setTimeout) return setTimeout(n, 0);
            if ((r === u || !r) && setTimeout) return (r = setTimeout), setTimeout(n, 0);
            try {
              return r(n, 0);
            } catch (t) {
              try {
                return r.call(null, n, 0);
              } catch (t) {
                return r.call(this, n, 0);
              }
            }
          }
          function f(n) {
            if (i === clearTimeout) return clearTimeout(n);
            if ((i === c || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(n);
            try {
              return i(n);
            } catch (t) {
              try {
                return i.call(null, n);
              } catch (t) {
                return i.call(this, n);
              }
            }
          }
          !(function () {
            try {
              r = "function" == typeof setTimeout ? setTimeout : u;
            } catch (n) {
              r = u;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : c;
            } catch (n) {
              i = c;
            }
          })();
          var a,
            d = [],
            l = !1,
            h = -1;
          function v() {
            l && a && ((l = !1), a.length ? (d = a.concat(d)) : (h = -1), d.length && p());
          }
          function p() {
            if (!l) {
              var n = s(v);
              l = !0;
              for (var t = d.length; t; ) {
                for (a = d, d = []; ++h < t; ) a && a[h].run();
                (h = -1), (t = d.length);
              }
              (a = null), (l = !1), f(n);
            }
          }
          function m(n, t) {
            (this.fun = n), (this.array = t);
          }
          function w() {}
          (o.nextTick = function (n) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
            d.push(new m(n, t)), 1 !== d.length || l || s(p);
          }),
            (m.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = w),
            (o.addListener = w),
            (o.once = w),
            (o.off = w),
            (o.removeListener = w),
            (o.removeAllListeners = w),
            (o.emit = w),
            (o.prependListener = w),
            (o.prependOnceListener = w),
            (o.listeners = function (n) {
              return [];
            }),
            (o.binding = function (n) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (n) {
              throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
              return 0;
            });
        },
        {}
      ],
      jcLW: [
        function (n, t, e) {
          n("process");
          var r = n("process");
          (e.log = function (...n) {
            return "object" == typeof console && console.log && console.log(...n);
          }),
            (e.formatArgs = function (n) {
              if (
                ((n[0] =
                  (this.useColors ? "%c" : "") +
                  this.namespace +
                  (this.useColors ? " %c" : " ") +
                  n[0] +
                  (this.useColors ? "%c " : " ") +
                  "+" +
                  t.exports.humanize(this.diff)),
                !this.useColors)
              )
                return;
              const e = "color: " + this.color;
              n.splice(1, 0, e, "color: inherit");
              let r = 0,
                i = 0;
              n[0].replace(/%[a-zA-Z%]/g, (n) => {
                "%%" !== n && (r++, "%c" === n && (i = r));
              }),
                n.splice(i, 0, e);
            }),
            (e.save = function (n) {
              try {
                n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
              } catch (n) {}
            }),
            (e.load = function () {
              let n;
              try {
                n = e.storage.getItem("debug");
              } catch (n) {}
              return !n && void 0 !== r && "env" in r && (n = void 0), n;
            }),
            (e.useColors = function () {
              return (
                !("undefined" == typeof window || !window.process || ("renderer" !== window.process.type && !window.process.__nwjs)) ||
                (("undefined" == typeof navigator ||
                  !navigator.userAgent ||
                  !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                  (("undefined" != typeof document &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) ||
                    ("undefined" != typeof window &&
                      window.console &&
                      (window.console.firebug || (window.console.exception && window.console.table))) ||
                    ("undefined" != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                      parseInt(RegExp.$1, 10) >= 31) ||
                    ("undefined" != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
              );
            }),
            (e.storage = (function () {
              try {
                return localStorage;
              } catch (n) {}
            })()),
            (e.colors = [
              "#0000CC",
              "#0000FF",
              "#0033CC",
              "#0033FF",
              "#0066CC",
              "#0066FF",
              "#0099CC",
              "#0099FF",
              "#00CC00",
              "#00CC33",
              "#00CC66",
              "#00CC99",
              "#00CCCC",
              "#00CCFF",
              "#3300CC",
              "#3300FF",
              "#3333CC",
              "#3333FF",
              "#3366CC",
              "#3366FF",
              "#3399CC",
              "#3399FF",
              "#33CC00",
              "#33CC33",
              "#33CC66",
              "#33CC99",
              "#33CCCC",
              "#33CCFF",
              "#6600CC",
              "#6600FF",
              "#6633CC",
              "#6633FF",
              "#66CC00",
              "#66CC33",
              "#9900CC",
              "#9900FF",
              "#9933CC",
              "#9933FF",
              "#99CC00",
              "#99CC33",
              "#CC0000",
              "#CC0033",
              "#CC0066",
              "#CC0099",
              "#CC00CC",
              "#CC00FF",
              "#CC3300",
              "#CC3333",
              "#CC3366",
              "#CC3399",
              "#CC33CC",
              "#CC33FF",
              "#CC6600",
              "#CC6633",
              "#CC9900",
              "#CC9933",
              "#CCCC00",
              "#CCCC33",
              "#FF0000",
              "#FF0033",
              "#FF0066",
              "#FF0099",
              "#FF00CC",
              "#FF00FF",
              "#FF3300",
              "#FF3333",
              "#FF3366",
              "#FF3399",
              "#FF33CC",
              "#FF33FF",
              "#FF6600",
              "#FF6633",
              "#FF9900",
              "#FF9933",
              "#FFCC00",
              "#FFCC33"
            ]),
            (t.exports = n("./common")(e));
          const { formatters: i } = t.exports;
          i.j = function (n) {
            try {
              return JSON.stringify(n);
            } catch (n) {
              return "[UnexpectedJSONParseError]: " + n.message;
            }
          };
        },
        { "./common": "Kest", process: "pBGv" }
      ],
      th5e: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.v) ||
              (function () {
                var n = function (t, e) {
                  return (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (n, t) {
                        n.__proto__ = t;
                      }) ||
                    function (n, t) {
                      for (var e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    })(t, e);
                };
                return function (t, e) {
                  function r() {
                    this.constructor = t;
                  }
                  n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                };
              })(),
            i =
              (this && this.p) ||
              function () {
                return (i =
                  Object.assign ||
                  function (n) {
                    for (var t, e = 1, r = arguments.length; e < r; e++)
                      for (var i in (t = arguments[e])) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                    return n;
                  }).apply(this, arguments);
              },
            o =
              (this && this.m) ||
              function (n, t, e, r) {
                return new (e || (e = Promise))(function (i, o) {
                  function u(n) {
                    try {
                      s(r.next(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function c(n) {
                    try {
                      s(r.throw(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function s(n) {
                    var t;
                    n.done
                      ? i(n.value)
                      : ((t = n.value),
                        t instanceof e
                          ? t
                          : new e(function (n) {
                              n(t);
                            })).then(u, c);
                  }
                  s((r = r.apply(n, t || [])).next());
                });
              },
            u =
              (this && this.g) ||
              function (n, t) {
                var e,
                  r,
                  i,
                  o,
                  u = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: []
                  };
                return (
                  (o = { next: c(0), throw: c(1), return: c(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function c(o) {
                  return function (c) {
                    return (function (o) {
                      if (e) throw new TypeError("Generator is already executing.");
                      for (; u; )
                        try {
                          if (
                            ((e = 1),
                            r &&
                              (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return u.label++, { value: o[1], done: !1 };
                            case 5:
                              u.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = u.ops.pop()), u.trys.pop();
                              continue;
                            default:
                              if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                u = 0;
                                continue;
                              }
                              if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                u.label = o[1];
                                break;
                              }
                              if (6 === o[0] && u.label < i[1]) {
                                (u.label = i[1]), (i = o);
                                break;
                              }
                              if (i && u.label < i[2]) {
                                (u.label = i[2]), u.ops.push(o);
                                break;
                              }
                              i[2] && u.ops.pop(), u.trys.pop();
                              continue;
                          }
                          o = t.call(n, u);
                        } catch (n) {
                          (o = [6, n]), (r = 0);
                        } finally {
                          e = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              };
          Object.defineProperty(e, "h", { value: !0 }),
            (e.TextApiResponse =
              e.BlobApiResponse =
              e.VoidApiResponse =
              e.JSONApiResponse =
              e.canConsumeForm =
              e.mapValues =
              e.querystring =
              e.exists =
              e.Configuration =
              e.COLLECTION_FORMATS =
              e.RequiredError =
              e.BaseAPI =
              e.BASE_PATH =
                void 0),
            (e.BASE_PATH = "https://e-23.adzerk.net".replace(/\/+$/, ""));
          var c = (function () {
            function n(n) {
              var t = this;
              void 0 === n && (n = new f()),
                (this.configuration = n),
                (this.fetchApi = function (n, e) {
                  return o(t, void 0, void 0, function () {
                    var t, r, o, c, s, f, a;
                    return u(this, function (u) {
                      switch (u.label) {
                        case 0:
                          (t = { url: n, init: e }), (r = 0), (o = this.middleware), (u.label = 1);
                        case 1:
                          return r < o.length ? ((a = o[r]).pre ? [4, a.pre(i({ fetch: this.fetchApi }, t))] : [3, 3]) : [3, 4];
                        case 2:
                          (t = u.sent() || t), (u.label = 3);
                        case 3:
                          return r++, [3, 1];
                        case 4:
                          return [4, this.configuration.fetchApi(t.url, t.init)];
                        case 5:
                          (c = u.sent()), (s = 0), (f = this.middleware), (u.label = 6);
                        case 6:
                          return s < f.length
                            ? (a = f[s]).post
                              ? [4, a.post({ fetch: this.fetchApi, url: n, init: e, response: c.clone() })]
                              : [3, 8]
                            : [3, 9];
                        case 7:
                          (c = u.sent() || c), (u.label = 8);
                        case 8:
                          return s++, [3, 6];
                        case 9:
                          return [2, c];
                      }
                    });
                  });
                }),
                (this.middleware = n.middleware);
            }
            return (
              (n.prototype.withMiddleware = function () {
                for (var n, t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = this.clone();
                return (r.middleware = (n = r.middleware).concat.apply(n, t)), r;
              }),
              (n.prototype.withPreMiddleware = function () {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var e = n.map(function (n) {
                  return { pre: n };
                });
                return this.withMiddleware.apply(this, e);
              }),
              (n.prototype.withPostMiddleware = function () {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var e = n.map(function (n) {
                  return { post: n };
                });
                return this.withMiddleware.apply(this, e);
              }),
              (n.prototype.request = function (n) {
                return o(this, void 0, void 0, function () {
                  var t, e, r, i;
                  return u(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (t = this.createFetchParams(n)), (e = t.url), (r = t.init), [4, this.fetchApi(e, r)];
                      case 1:
                        if ((i = o.sent()).status >= 200 && i.status < 300) return [2, i];
                        throw i;
                    }
                  });
                });
              }),
              (n.prototype.createFetchParams = function (n) {
                var t = this.configuration.basePath + n.path;
                void 0 !== n.query && 0 !== Object.keys(n.query).length && (t += "?" + this.configuration.queryParamsStringify(n.query));
                var e =
                    ("undefined" != typeof FormData && n.body instanceof FormData) ||
                    n.body instanceof URLSearchParams ||
                    (function (n) {
                      return "undefined" != typeof Blob && n instanceof Blob;
                    })(n.body)
                      ? n.body
                      : JSON.stringify(n.body),
                  r = Object.assign({}, this.configuration.headers, n.headers);
                return { url: t, init: { method: n.method, headers: r, body: e, credentials: this.configuration.credentials } };
              }),
              (n.prototype.clone = function () {
                var n = new (0, this.constructor)(this.configuration);
                return (n.middleware = this.middleware.slice()), n;
              }),
              n
            );
          })();
          e.BaseAPI = c;
          var s = (function (n) {
            function t(t, e) {
              var r = n.call(this, e) || this;
              return (r.field = t), (r.name = "RequiredError"), r;
            }
            return r(t, n), t;
          })(Error);
          (e.RequiredError = s), (e.COLLECTION_FORMATS = { csv: ",", ssv: " ", tsv: "\t", pipes: "|" });
          var f = (function () {
            function n(n) {
              void 0 === n && (n = {}), (this.configuration = n);
            }
            return (
              Object.defineProperty(n.prototype, "basePath", {
                get: function () {
                  return null != this.configuration.basePath ? this.configuration.basePath : e.BASE_PATH;
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "fetchApi", {
                get: function () {
                  return this.configuration.fetchApi || window.fetch.bind(window);
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "middleware", {
                get: function () {
                  return this.configuration.middleware || [];
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "queryParamsStringify", {
                get: function () {
                  return this.configuration.queryParamsStringify || a;
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "username", {
                get: function () {
                  return this.configuration.username;
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "password", {
                get: function () {
                  return this.configuration.password;
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "apiKey", {
                get: function () {
                  var n = this.configuration.apiKey;
                  if (n)
                    return "function" == typeof n
                      ? n
                      : function () {
                          return n;
                        };
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "accessToken", {
                get: function () {
                  var n = this.configuration.accessToken;
                  if (n)
                    return "function" == typeof n
                      ? n
                      : function () {
                          return n;
                        };
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "headers", {
                get: function () {
                  return this.configuration.headers;
                },
                enumerable: !1,
                configurable: !0
              }),
              Object.defineProperty(n.prototype, "credentials", {
                get: function () {
                  return this.configuration.credentials;
                },
                enumerable: !1,
                configurable: !0
              }),
              n
            );
          })();
          function a(n, t) {
            return (
              void 0 === t && (t = ""),
              Object.keys(n)
                .map(function (e) {
                  var r = t + (t.length ? "[" + e + "]" : e),
                    i = n[e];
                  if (i instanceof Array) {
                    var o = i
                      .map(function (n) {
                        return encodeURIComponent(String(n));
                      })
                      .join("&" + encodeURIComponent(r) + "=");
                    return encodeURIComponent(r) + "=" + o;
                  }
                  return i instanceof Date
                    ? encodeURIComponent(r) + "=" + encodeURIComponent(i.toISOString())
                    : i instanceof Object
                    ? a(i, r)
                    : encodeURIComponent(r) + "=" + encodeURIComponent(String(i));
                })
                .filter(function (n) {
                  return n.length > 0;
                })
                .join("&")
            );
          }
          (e.Configuration = f),
            (e.exists = function (n, t) {
              return null != n[t];
            }),
            (e.querystring = a),
            (e.mapValues = function (n, t) {
              return Object.keys(n).reduce(function (e, r) {
                var o;
                return i(i({}, e), (((o = {})[r] = t(n[r])), o));
              }, {});
            }),
            (e.canConsumeForm = function (n) {
              for (var t = 0, e = n; t < e.length; t++) if ("multipart/form-data" === e[t].contentType) return !0;
              return !1;
            });
          var d = (function () {
            function n(n, t) {
              void 0 === t &&
                (t = function (n) {
                  return n;
                }),
                (this.raw = n),
                (this.transformer = t);
            }
            return (
              (n.prototype.value = function () {
                return o(this, void 0, void 0, function () {
                  var n;
                  return u(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (n = this.transformer), [4, this.raw.json()];
                      case 1:
                        return [2, n.apply(this, [t.sent()])];
                    }
                  });
                });
              }),
              n
            );
          })();
          e.JSONApiResponse = d;
          var l = (function () {
            function n(n) {
              this.raw = n;
            }
            return (
              (n.prototype.value = function () {
                return o(this, void 0, void 0, function () {
                  return u(this, function (n) {
                    return [2, void 0];
                  });
                });
              }),
              n
            );
          })();
          e.VoidApiResponse = l;
          var h = (function () {
            function n(n) {
              this.raw = n;
            }
            return (
              (n.prototype.value = function () {
                return o(this, void 0, void 0, function () {
                  return u(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.raw.blob()];
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              n
            );
          })();
          e.BlobApiResponse = h;
          var v = (function () {
            function n(n) {
              this.raw = n;
            }
            return (
              (n.prototype.value = function () {
                return o(this, void 0, void 0, function () {
                  return u(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.raw.text()];
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              n
            );
          })();
          e.TextApiResponse = v;
        },
        {}
      ],
      JznA: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.ConsentRequestToJSON = e.ConsentRequestFromJSONTyped = e.ConsentRequestFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n
              ? n
              : { userKey: r.exists(n, "userKey") ? n.userKey : void 0, consent: r.exists(n, "consent") ? n.consent : void 0 };
          }
          (e.ConsentRequestFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.ConsentRequestFromJSONTyped = i),
            (e.ConsentRequestToJSON = function (n) {
              if (void 0 !== n) return null === n ? null : { userKey: n.userKey, consent: n.consent };
            });
        },
        { "../runtime": "th5e" }
      ],
      YSfm: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.ContentToJSON = e.ContentFromJSONTyped = e.ContentFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n
              ? n
              : {
                  type: r.exists(n, "type") ? n.type : void 0,
                  template: r.exists(n, "template") ? n.template : void 0,
                  customTemplate: r.exists(n, "customTemplate") ? n.customTemplate : void 0,
                  data: r.exists(n, "data") ? n.data : void 0,
                  body: r.exists(n, "body") ? n.body : void 0
                };
          }
          (e.ContentFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.ContentFromJSONTyped = i),
            (e.ContentToJSON = function (n) {
              if (void 0 !== n)
                return null === n
                  ? null
                  : { type: n.type, template: n.template, customTemplate: n.customTemplate, data: n.data, body: n.body };
            });
        },
        { "../runtime": "th5e" }
      ],
      UHmy: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.DecisionToJSON = e.DecisionFromJSONTyped = e.DecisionFromJSON = void 0);
          var r = n("../runtime"),
            i = n("./");
          function o(n, t) {
            return null == n
              ? n
              : {
                  adId: r.exists(n, "adId") ? n.adId : void 0,
                  creativeId: r.exists(n, "creativeId") ? n.creativeId : void 0,
                  flightId: r.exists(n, "flightId") ? n.flightId : void 0,
                  campaignId: r.exists(n, "campaignId") ? n.campaignId : void 0,
                  priorityId: r.exists(n, "priorityId") ? n.priorityId : void 0,
                  clickUrl: r.exists(n, "clickUrl") ? n.clickUrl : void 0,
                  contents: r.exists(n, "contents") ? n.contents.map(i.ContentFromJSON) : void 0,
                  impressionUrl: r.exists(n, "impressionUrl") ? n.impressionUrl : void 0,
                  events: r.exists(n, "events") ? n.events.map(i.EventFromJSON) : void 0,
                  matchedPoints: r.exists(n, "matchedPoints") ? n.matchedPoints.map(i.MatchedPointFromJSON) : void 0,
                  pricing: r.exists(n, "pricing") ? i.PricingDataFromJSON(n.pricing) : void 0
                };
          }
          (e.DecisionFromJSON = function (n) {
            return o(n, !1);
          }),
            (e.DecisionFromJSONTyped = o),
            (e.DecisionToJSON = function (n) {
              if (void 0 !== n)
                return null === n
                  ? null
                  : {
                      adId: n.adId,
                      creativeId: n.creativeId,
                      flightId: n.flightId,
                      campaignId: n.campaignId,
                      priorityId: n.priorityId,
                      clickUrl: n.clickUrl,
                      contents: void 0 === n.contents ? void 0 : n.contents.map(i.ContentToJSON),
                      impressionUrl: n.impressionUrl,
                      events: void 0 === n.events ? void 0 : n.events.map(i.EventToJSON),
                      matchedPoints: void 0 === n.matchedPoints ? void 0 : n.matchedPoints.map(i.MatchedPointToJSON),
                      pricing: i.PricingDataToJSON(n.pricing)
                    };
            });
        },
        { "../runtime": "th5e", "./": "hBKs" }
      ],
      VFaM: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.DecisionRequestToJSON = e.DecisionRequestFromJSONTyped = e.DecisionRequestFromJSON = void 0);
          var r = n("../runtime"),
            i = n("./");
          function o(n, t) {
            return null == n
              ? n
              : {
                  placements: n.placements.map(i.PlacementFromJSON),
                  user: r.exists(n, "user") ? i.UserFromJSON(n.user) : void 0,
                  keywords: r.exists(n, "keywords") ? n.keywords : void 0,
                  url: r.exists(n, "url") ? n.url : void 0,
                  referrer: r.exists(n, "referrer") ? n.referrer : void 0,
                  ip: r.exists(n, "ip") ? n.ip : void 0,
                  blockedCreatives: r.exists(n, "blockedCreatives") ? n.blockedCreatives : void 0,
                  isMobile: r.exists(n, "isMobile") ? n.isMobile : void 0,
                  includePricingData: r.exists(n, "includePricingData") ? n.includePricingData : void 0,
                  notrack: r.exists(n, "notrack") ? n.notrack : void 0,
                  enableBotFiltering: r.exists(n, "enableBotFiltering") ? n.enableBotFiltering : void 0,
                  enableUserDBIP: r.exists(n, "enableUserDBIP") ? n.enableUserDBIP : void 0,
                  consent: r.exists(n, "consent") ? n.consent : void 0,
                  deviceID: r.exists(n, "deviceID") ? n.deviceID : void 0,
                  parallel: r.exists(n, "parallel") ? n.parallel : void 0,
                  intendedLatitude: r.exists(n, "intendedLatitude") ? n.intendedLatitude : void 0,
                  intendedLongitude: r.exists(n, "intendedLongitude") ? n.intendedLongitude : void 0,
                  radius: r.exists(n, "radius") ? n.radius : void 0,
                  includeMatchedPoints: r.exists(n, "includeMatchedPoints") ? n.includeMatchedPoints : void 0
                };
          }
          (e.DecisionRequestFromJSON = function (n) {
            return o(n, !1);
          }),
            (e.DecisionRequestFromJSONTyped = o),
            (e.DecisionRequestToJSON = function (n) {
              if (void 0 !== n)
                return null === n
                  ? null
                  : {
                      placements: n.placements.map(i.PlacementToJSON),
                      user: i.UserToJSON(n.user),
                      keywords: n.keywords,
                      url: n.url,
                      referrer: n.referrer,
                      ip: n.ip,
                      blockedCreatives: n.blockedCreatives,
                      isMobile: n.isMobile,
                      includePricingData: n.includePricingData,
                      notrack: n.notrack,
                      enableBotFiltering: n.enableBotFiltering,
                      enableUserDBIP: n.enableUserDBIP,
                      consent: n.consent,
                      deviceID: n.deviceID,
                      parallel: n.parallel,
                      intendedLatitude: n.intendedLatitude,
                      intendedLongitude: n.intendedLongitude,
                      radius: n.radius,
                      includeMatchedPoints: n.includeMatchedPoints
                    };
            });
        },
        { "../runtime": "th5e", "./": "hBKs" }
      ],
      pw3k: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.DecisionResponseToJSON = e.DecisionResponseFromJSONTyped = e.DecisionResponseFromJSON = void 0);
          var r = n("../runtime"),
            i = n("./");
          function o(n, t) {
            return null == n
              ? n
              : {
                  user: r.exists(n, "user") ? i.UserFromJSON(n.user) : void 0,
                  decisions: r.exists(n, "decisions") ? n.decisions : void 0,
                  explain: r.exists(n, "explain") ? n.explain : void 0
                };
          }
          (e.DecisionResponseFromJSON = function (n) {
            return o(n, !1);
          }),
            (e.DecisionResponseFromJSONTyped = o),
            (e.DecisionResponseToJSON = function (n) {
              if (void 0 !== n) return null === n ? null : { user: i.UserToJSON(n.user), decisions: n.decisions, explain: n.explain };
            });
        },
        { "../runtime": "th5e", "./": "hBKs" }
      ],
      TYWc: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.EventToJSON = e.EventFromJSONTyped = e.EventFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n ? n : { id: r.exists(n, "id") ? n.id : void 0, url: r.exists(n, "url") ? n.url : void 0 };
          }
          (e.EventFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.EventFromJSONTyped = i),
            (e.EventToJSON = function (n) {
              if (void 0 !== n) return null === n ? null : { id: n.id, url: n.url };
            });
        },
        { "../runtime": "th5e" }
      ],
      TIDo: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.MatchedPointToJSON = e.MatchedPointFromJSONTyped = e.MatchedPointFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n ? n : { lat: r.exists(n, "lat") ? n.lat : void 0, lon: r.exists(n, "lon") ? n.lon : void 0 };
          }
          (e.MatchedPointFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.MatchedPointFromJSONTyped = i),
            (e.MatchedPointToJSON = function (n) {
              if (void 0 !== n) return null === n ? null : { lat: n.lat, lon: n.lon };
            });
        },
        { "../runtime": "th5e" }
      ],
      m7GT: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.PlacementToJSON = e.PlacementFromJSONTyped = e.PlacementFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n
              ? n
              : {
                  divName: r.exists(n, "divName") ? n.divName : void 0,
                  networkId: r.exists(n, "networkId") ? n.networkId : void 0,
                  siteId: r.exists(n, "siteId") ? n.siteId : void 0,
                  adTypes: r.exists(n, "adTypes") ? n.adTypes : void 0,
                  zoneIds: r.exists(n, "zoneIds") ? n.zoneIds : void 0,
                  campaignId: r.exists(n, "campaignId") ? n.campaignId : void 0,
                  flightId: r.exists(n, "flightId") ? n.flightId : void 0,
                  adId: r.exists(n, "adId") ? n.adId : void 0,
                  clickUrl: r.exists(n, "clickUrl") ? n.clickUrl : void 0,
                  properties: r.exists(n, "properties") ? n.properties : void 0,
                  eventIds: r.exists(n, "eventIds") ? n.eventIds : void 0,
                  overrides: r.exists(n, "overrides") ? n.overrides : void 0,
                  contentKeys: r.exists(n, "contentKeys") ? n.contentKeys : void 0,
                  count: r.exists(n, "count") ? n.count : void 0,
                  proportionality: r.exists(n, "proportionality") ? n.proportionality : void 0,
                  ecpmPartition: r.exists(n, "ecpmPartition") ? n.ecpmPartition : void 0,
                  ecpmPartitions: r.exists(n, "ecpmPartitions") ? n.ecpmPartitions : void 0,
                  eventMultiplier: r.exists(n, "eventMultiplier") ? n.eventMultiplier : void 0,
                  skipSelection: r.exists(n, "skipSelection") ? n.skipSelection : void 0,
                  adQuery: r.exists(n, "adQuery") ? n.adQuery : void 0,
                  floorPrice: r.exists(n, "floorPrice") ? n.floorPrice : void 0,
                  floorCpc: r.exists(n, "floorCpc") ? n.floorCpc : void 0
                };
          }
          (e.PlacementFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.PlacementFromJSONTyped = i),
            (e.PlacementToJSON = function (n) {
              if (void 0 !== n)
                return null === n
                  ? null
                  : {
                      divName: n.divName,
                      networkId: n.networkId,
                      siteId: n.siteId,
                      adTypes: n.adTypes,
                      zoneIds: n.zoneIds,
                      campaignId: n.campaignId,
                      flightId: n.flightId,
                      adId: n.adId,
                      clickUrl: n.clickUrl,
                      properties: n.properties,
                      eventIds: n.eventIds,
                      overrides: n.overrides,
                      contentKeys: n.contentKeys,
                      count: n.count,
                      proportionality: n.proportionality,
                      ecpmPartition: n.ecpmPartition,
                      ecpmPartitions: n.ecpmPartitions,
                      eventMultiplier: n.eventMultiplier,
                      skipSelection: n.skipSelection,
                      adQuery: n.adQuery,
                      floorPrice: n.floorPrice,
                      floorCpc: n.floorCpc
                    };
            });
        },
        { "../runtime": "th5e" }
      ],
      oveB: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.PricingDataToJSON = e.PricingDataFromJSONTyped = e.PricingDataFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n
              ? n
              : {
                  price: r.exists(n, "price") ? n.price : void 0,
                  clearPrice: r.exists(n, "clearPrice") ? n.clearPrice : void 0,
                  revenue: r.exists(n, "revenue") ? n.revenue : void 0,
                  rateType: r.exists(n, "rateType") ? n.rateType : void 0,
                  eCPM: r.exists(n, "eCPM") ? n.eCPM : void 0
                };
          }
          (e.PricingDataFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.PricingDataFromJSONTyped = i),
            (e.PricingDataToJSON = function (n) {
              if (void 0 !== n)
                return null === n
                  ? null
                  : { price: n.price, clearPrice: n.clearPrice, revenue: n.revenue, rateType: n.rateType, eCPM: n.eCPM };
            });
        },
        { "../runtime": "th5e" }
      ],
      gYwF: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }), (e.UserToJSON = e.UserFromJSONTyped = e.UserFromJSON = void 0);
          var r = n("../runtime");
          function i(n, t) {
            return null == n ? n : { key: r.exists(n, "key") ? n.key : void 0 };
          }
          (e.UserFromJSON = function (n) {
            return i(n, !1);
          }),
            (e.UserFromJSONTyped = i),
            (e.UserToJSON = function (n) {
              if (void 0 !== n) return null === n ? null : { key: n.key };
            });
        },
        { "../runtime": "th5e" }
      ],
      hBKs: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            i =
              (this && this.k) ||
              function (n, t) {
                for (var e in n) "default" === e || t.hasOwnProperty(e) || r(t, n, e);
              };
          Object.defineProperty(e, "h", { value: !0 }),
            i(n("./ConsentRequest"), e),
            i(n("./Content"), e),
            i(n("./Decision"), e),
            i(n("./DecisionRequest"), e),
            i(n("./DecisionResponse"), e),
            i(n("./Event"), e),
            i(n("./MatchedPoint"), e),
            i(n("./Placement"), e),
            i(n("./PricingData"), e),
            i(n("./User"), e);
        },
        {
          "./ConsentRequest": "JznA",
          "./Content": "YSfm",
          "./Decision": "UHmy",
          "./DecisionRequest": "VFaM",
          "./DecisionResponse": "pw3k",
          "./Event": "TYWc",
          "./MatchedPoint": "TIDo",
          "./Placement": "m7GT",
          "./PricingData": "oveB",
          "./User": "gYwF"
        }
      ],
      IvAz: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.v) ||
              (function () {
                var n = function (t, e) {
                  return (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (n, t) {
                        n.__proto__ = t;
                      }) ||
                    function (n, t) {
                      for (var e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    })(t, e);
                };
                return function (t, e) {
                  function r() {
                    this.constructor = t;
                  }
                  n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                };
              })(),
            i =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            o =
              (this && this.I) ||
              (Object.create
                ? function (n, t) {
                    Object.defineProperty(n, "default", { enumerable: !0, value: t });
                  }
                : function (n, t) {
                    n.default = t;
                  }),
            u =
              (this && this.S) ||
              function (n) {
                if (n && n.h) return n;
                var t = {};
                if (null != n) for (var e in n) Object.hasOwnProperty.call(n, e) && i(t, n, e);
                return o(t, n), t;
              },
            c =
              (this && this.m) ||
              function (n, t, e, r) {
                return new (e || (e = Promise))(function (i, o) {
                  function u(n) {
                    try {
                      s(r.next(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function c(n) {
                    try {
                      s(r.throw(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function s(n) {
                    var t;
                    n.done
                      ? i(n.value)
                      : ((t = n.value),
                        t instanceof e
                          ? t
                          : new e(function (n) {
                              n(t);
                            })).then(u, c);
                  }
                  s((r = r.apply(n, t || [])).next());
                });
              },
            s =
              (this && this.g) ||
              function (n, t) {
                var e,
                  r,
                  i,
                  o,
                  u = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: []
                  };
                return (
                  (o = { next: c(0), throw: c(1), return: c(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function c(o) {
                  return function (c) {
                    return (function (o) {
                      if (e) throw new TypeError("Generator is already executing.");
                      for (; u; )
                        try {
                          if (
                            ((e = 1),
                            r &&
                              (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return u.label++, { value: o[1], done: !1 };
                            case 5:
                              u.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = u.ops.pop()), u.trys.pop();
                              continue;
                            default:
                              if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                u = 0;
                                continue;
                              }
                              if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                u.label = o[1];
                                break;
                              }
                              if (6 === o[0] && u.label < i[1]) {
                                (u.label = i[1]), (i = o);
                                break;
                              }
                              if (i && u.label < i[2]) {
                                (u.label = i[2]), u.ops.push(o);
                                break;
                              }
                              i[2] && u.ops.pop(), u.trys.pop();
                              continue;
                          }
                          o = t.call(n, u);
                        } catch (n) {
                          (o = [6, n]), (r = 0);
                        } finally {
                          e = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              };
          Object.defineProperty(e, "h", { value: !0 }), (e.DecisionApi = void 0);
          var f = u(n("../runtime")),
            a = n("../models"),
            d = (function (n) {
              function t() {
                return (null !== n && n.apply(this, arguments)) || this;
              }
              return (
                r(t, n),
                (t.prototype.getDecisionsRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (t = {}),
                            ((e = {})["Content-Type"] = "application/json"),
                            [
                              4,
                              this.request({
                                path: "/api/v2",
                                method: "POST",
                                headers: e,
                                query: t,
                                body: a.DecisionRequestToJSON(n.decisionRequest)
                              })
                            ]
                          );
                        case 1:
                          return (
                            (r = i.sent()),
                            [
                              2,
                              new f.JSONApiResponse(r, function (n) {
                                return a.DecisionResponseFromJSON(n);
                              })
                            ]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.getDecisions = function (n) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.getDecisionsRaw({ decisionRequest: n })];
                        case 1:
                          return [4, t.sent().value()];
                        case 2:
                          return [2, t.sent()];
                      }
                    });
                  });
                }),
                t
              );
            })(f.BaseAPI);
          e.DecisionApi = d;
        },
        { "../runtime": "th5e", "../models": "hBKs" }
      ],
      EJ86: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.v) ||
              (function () {
                var n = function (t, e) {
                  return (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (n, t) {
                        n.__proto__ = t;
                      }) ||
                    function (n, t) {
                      for (var e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    })(t, e);
                };
                return function (t, e) {
                  function r() {
                    this.constructor = t;
                  }
                  n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                };
              })(),
            i =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            o =
              (this && this.I) ||
              (Object.create
                ? function (n, t) {
                    Object.defineProperty(n, "default", { enumerable: !0, value: t });
                  }
                : function (n, t) {
                    n.default = t;
                  }),
            u =
              (this && this.S) ||
              function (n) {
                if (n && n.h) return n;
                var t = {};
                if (null != n) for (var e in n) Object.hasOwnProperty.call(n, e) && i(t, n, e);
                return o(t, n), t;
              },
            c =
              (this && this.m) ||
              function (n, t, e, r) {
                return new (e || (e = Promise))(function (i, o) {
                  function u(n) {
                    try {
                      s(r.next(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function c(n) {
                    try {
                      s(r.throw(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function s(n) {
                    var t;
                    n.done
                      ? i(n.value)
                      : ((t = n.value),
                        t instanceof e
                          ? t
                          : new e(function (n) {
                              n(t);
                            })).then(u, c);
                  }
                  s((r = r.apply(n, t || [])).next());
                });
              },
            s =
              (this && this.g) ||
              function (n, t) {
                var e,
                  r,
                  i,
                  o,
                  u = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: []
                  };
                return (
                  (o = { next: c(0), throw: c(1), return: c(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function c(o) {
                  return function (c) {
                    return (function (o) {
                      if (e) throw new TypeError("Generator is already executing.");
                      for (; u; )
                        try {
                          if (
                            ((e = 1),
                            r &&
                              (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return u.label++, { value: o[1], done: !1 };
                            case 5:
                              u.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = u.ops.pop()), u.trys.pop();
                              continue;
                            default:
                              if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                u = 0;
                                continue;
                              }
                              if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                u.label = o[1];
                                break;
                              }
                              if (6 === o[0] && u.label < i[1]) {
                                (u.label = i[1]), (i = o);
                                break;
                              }
                              if (i && u.label < i[2]) {
                                (u.label = i[2]), u.ops.push(o);
                                break;
                              }
                              i[2] && u.ops.pop(), u.trys.pop();
                              continue;
                          }
                          o = t.call(n, u);
                        } catch (n) {
                          (o = [6, n]), (r = 0);
                        } finally {
                          e = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              };
          Object.defineProperty(e, "h", { value: !0 }), (e.UserdbApi = void 0);
          var f = u(n("../runtime")),
            a = n("../models"),
            d = (function (n) {
              function t() {
                return (null !== n && n.apply(this, arguments)) || this;
              }
              return (
                r(t, n),
                (t.prototype.addCustomPropertiesRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling addCustomProperties."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling addCustomProperties."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            ((e = {})["Content-Type"] = "application/json"),
                            this.configuration &&
                              this.configuration.apiKey &&
                              (e["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/custom".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "POST",
                                headers: e,
                                query: t,
                                body: n.body
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.addCustomProperties = function (n, t, e) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.addCustomPropertiesRaw({ networkId: n, userKey: t, body: e })];
                        case 1:
                          return [4, r.sent().value()];
                        case 2:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.addInterestsRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling addInterests."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling addInterests."
                            );
                          if (null === n.interest || void 0 === n.interest)
                            throw new f.RequiredError(
                              "interest",
                              "Required parameter requestParameters.interest was null or undefined when calling addInterests."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            void 0 !== n.interest && (t.interest = n.interest),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/interest/i.gif".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.addInterests = function (n, t, e) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.addInterestsRaw({ networkId: n, userKey: t, interest: e })];
                        case 1:
                          return [4, r.sent().value()];
                        case 2:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.addRetargetingSegmentRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling addRetargetingSegment."
                            );
                          if (null === n.advertiserId || void 0 === n.advertiserId)
                            throw new f.RequiredError(
                              "advertiserId",
                              "Required parameter requestParameters.advertiserId was null or undefined when calling addRetargetingSegment."
                            );
                          if (null === n.retargetingSegmentId || void 0 === n.retargetingSegmentId)
                            throw new f.RequiredError(
                              "retargetingSegmentId",
                              "Required parameter requestParameters.retargetingSegmentId was null or undefined when calling addRetargetingSegment."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling addRetargetingSegment."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/rt/{advertiserId}/{retargetingSegmentId}/i.gif"
                                  .replace("{networkId}", encodeURIComponent(String(n.networkId)))
                                  .replace("{advertiserId}", encodeURIComponent(String(n.advertiserId)))
                                  .replace("{retargetingSegmentId}", encodeURIComponent(String(n.retargetingSegmentId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.addRetargetingSegment = function (n, t, e, r) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.addRetargetingSegmentRaw({ networkId: n, advertiserId: t, retargetingSegmentId: e, userKey: r })];
                        case 1:
                          return [4, i.sent().value()];
                        case 2:
                          return [2, i.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.forgetRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling forget."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling forget."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            (e = {}),
                            this.configuration &&
                              this.configuration.apiKey &&
                              (e["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "DELETE",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.VoidApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.forget = function (n, t) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.forgetRaw({ networkId: n, userKey: t })];
                        case 1:
                          return e.sent(), [2];
                      }
                    });
                  });
                }),
                (t.prototype.gdprConsentRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling gdprConsent."
                            );
                          return (
                            (t = {}),
                            ((e = {})["Content-Type"] = "application/json"),
                            this.configuration &&
                              this.configuration.apiKey &&
                              (e["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/consent".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "POST",
                                headers: e,
                                query: t,
                                body: a.ConsentRequestToJSON(n.consentRequest)
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.gdprConsent = function (n, t) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.gdprConsentRaw({ networkId: n, consentRequest: t })];
                        case 1:
                          return [4, e.sent().value()];
                        case 2:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.ipOverrideRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling ipOverride."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling ipOverride."
                            );
                          if (null === n.ip || void 0 === n.ip)
                            throw new f.RequiredError(
                              "ip",
                              "Required parameter requestParameters.ip was null or undefined when calling ipOverride."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            void 0 !== n.ip && (t.ip = n.ip),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/ip/i.gif".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.ipOverride = function (n, t, e) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.ipOverrideRaw({ networkId: n, userKey: t, ip: e })];
                        case 1:
                          return [4, r.sent().value()];
                        case 2:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.matchUserRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling matchUser."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling matchUser."
                            );
                          if (null === n.partnerId || void 0 === n.partnerId)
                            throw new f.RequiredError(
                              "partnerId",
                              "Required parameter requestParameters.partnerId was null or undefined when calling matchUser."
                            );
                          if (null === n.userId || void 0 === n.userId)
                            throw new f.RequiredError(
                              "userId",
                              "Required parameter requestParameters.userId was null or undefined when calling matchUser."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            void 0 !== n.partnerId && (t.partnerId = n.partnerId),
                            void 0 !== n.userId && (t.userId = n.userId),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/sync/i.gif".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.matchUser = function (n, t, e, r) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.matchUserRaw({ networkId: n, userKey: t, partnerId: e, userId: r })];
                        case 1:
                          return [4, i.sent().value()];
                        case 2:
                          return [2, i.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.optOutRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling optOut."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling optOut."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/optout/i.gif".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.BlobApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.optOut = function (n, t) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.optOutRaw({ networkId: n, userKey: t })];
                        case 1:
                          return [4, e.sent().value()];
                        case 2:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                (t.prototype.readRaw = function (n) {
                  return c(this, void 0, void 0, function () {
                    var t, e, r;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (null === n.networkId || void 0 === n.networkId)
                            throw new f.RequiredError(
                              "networkId",
                              "Required parameter requestParameters.networkId was null or undefined when calling read."
                            );
                          if (null === n.userKey || void 0 === n.userKey)
                            throw new f.RequiredError(
                              "userKey",
                              "Required parameter requestParameters.userKey was null or undefined when calling read."
                            );
                          return (
                            (t = {}),
                            void 0 !== n.userKey && (t.userKey = n.userKey),
                            (e = {}),
                            [
                              4,
                              this.request({
                                path: "/udb/{networkId}/read".replace("{networkId}", encodeURIComponent(String(n.networkId))),
                                method: "GET",
                                headers: e,
                                query: t
                              })
                            ]
                          );
                        case 1:
                          return (r = i.sent()), [2, new f.JSONApiResponse(r)];
                      }
                    });
                  });
                }),
                (t.prototype.read = function (n, t) {
                  return c(this, void 0, void 0, function () {
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.readRaw({ networkId: n, userKey: t })];
                        case 1:
                          return [4, e.sent().value()];
                        case 2:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                t
              );
            })(f.BaseAPI);
          e.UserdbApi = d;
        },
        { "../runtime": "th5e", "../models": "hBKs" }
      ],
      LtEL: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            i =
              (this && this.k) ||
              function (n, t) {
                for (var e in n) "default" === e || t.hasOwnProperty(e) || r(t, n, e);
              };
          Object.defineProperty(e, "h", { value: !0 }), i(n("./DecisionApi"), e), i(n("./UserdbApi"), e);
        },
        { "./DecisionApi": "IvAz", "./UserdbApi": "EJ86" }
      ],
      G33X: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            i =
              (this && this.k) ||
              function (n, t) {
                for (var e in n) "default" === e || t.hasOwnProperty(e) || r(t, n, e);
              };
          Object.defineProperty(e, "h", { value: !0 }), i(n("./runtime"), e), i(n("./apis"), e), i(n("./models"), e);
        },
        { "./runtime": "th5e", "./apis": "LtEL", "./models": "hBKs" }
      ],
      FOZT: [
        function (n, t, e) {
          "use strict";
          function r(n) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                  })(n);
          }
          Object.defineProperty(e, "h", { value: !0 }),
            (e.removeUndefinedAndBlocklisted = void 0),
            (e.removeUndefinedAndBlocklisted = function (n, t) {
              return (
                void 0 === t && (t = []),
                Array.isArray(n)
                  ? n.map(function (n) {
                      return e.removeUndefinedAndBlocklisted(n);
                    })
                  : "object" !== r(n)
                  ? n
                  : Object.keys(n).reduce(function (i, o) {
                      return t.includes(o) || null == n[o]
                        ? i
                        : "object" === r(n[o])
                        ? ((i[o] = e.removeUndefinedAndBlocklisted(n[o], t)), i)
                        : ((i[o] = n[o]), i);
                    }, {})
              );
            });
        },
        {}
      ],
      IVsl: [
        function (n, t, e) {
          n("process");
          var r = arguments[3],
            i = n("process"),
            o =
              (this && this.m) ||
              function (n, t, e, r) {
                return new (e || (e = Promise))(function (i, o) {
                  function u(n) {
                    try {
                      s(r.next(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function c(n) {
                    try {
                      s(r.throw(n));
                    } catch (n) {
                      o(n);
                    }
                  }
                  function s(n) {
                    var t;
                    n.done
                      ? i(n.value)
                      : ((t = n.value),
                        t instanceof e
                          ? t
                          : new e(function (n) {
                              n(t);
                            })).then(u, c);
                  }
                  s((r = r.apply(n, t || [])).next());
                });
              },
            u =
              (this && this.g) ||
              function (n, t) {
                var e,
                  r,
                  i,
                  o,
                  u = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: []
                  };
                return (
                  (o = { next: c(0), throw: c(1), return: c(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function c(o) {
                  return function (c) {
                    return (function (o) {
                      if (e) throw new TypeError("Generator is already executing.");
                      for (; u; )
                        try {
                          if (
                            ((e = 1),
                            r &&
                              (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return u.label++, { value: o[1], done: !1 };
                            case 5:
                              u.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = u.ops.pop()), u.trys.pop();
                              continue;
                            default:
                              if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                u = 0;
                                continue;
                              }
                              if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                u.label = o[1];
                                break;
                              }
                              if (6 === o[0] && u.label < i[1]) {
                                (u.label = i[1]), (i = o);
                                break;
                              }
                              if (i && u.label < i[2]) {
                                (u.label = i[2]), u.ops.push(o);
                                break;
                              }
                              i[2] && u.ops.pop(), u.trys.pop();
                              continue;
                          }
                          o = t.call(n, u);
                        } catch (n) {
                          (o = [6, n]), (r = 0);
                        } finally {
                          e = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              },
            c =
              (this && this.O) ||
              function (n, t) {
                var e = {};
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
                if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = 0;
                  for (r = Object.getOwnPropertySymbols(n); i < r.length; i++)
                    t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (e[r[i]] = n[r[i]]);
                }
                return e;
              },
            s =
              (this && this.R) ||
              function () {
                for (var n = 0, t = 0, e = arguments.length; t < e; t++) n += arguments[t].length;
                var r = Array(n),
                  i = 0;
                for (t = 0; t < e; t++) for (var o = arguments[t], u = 0, c = o.length; u < c; u++, i++) r[i] = o[u];
                return r;
              },
            f =
              (this && this.F) ||
              function (n) {
                return n && n.h ? n : { default: n };
              };
          Object.defineProperty(e, "h", { value: !0 }), (e.Client = void 0);
          var a = f(n("isomorphic-unfetch")),
            d = f(n("form-data")),
            l = f(n("debug")),
            h = n("./generated"),
            v = n("./utils"),
            p = n("./generated/apis/UserdbApi"),
            m = n("./generated/runtime");
          r.FormData = r.FormData || d.default;
          var w = l.default("adzerk-decision-sdk:client"),
            g = void 0 !== i && "browser" !== i.title,
            b = "undefined" != typeof navigator && "ReactNative" === navigator.product,
            y = [["ecpmPartition", "ecpmPartitions"]];
          function x(n) {
            return n instanceof Array;
          }
          var C = function (n, t, e) {
              null != e ? w("[" + n + "] " + t + " [%o]", e) : w("[" + n + "] " + t);
            },
            k = (function () {
              function n(n, t, e, r) {
                (this.T = new h.DecisionApi(n)), (this.P = t), (this.q = r), (this.A = e);
              }
              return (
                (n.prototype.get = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    var e,
                      r,
                      i,
                      c,
                      s,
                      f = this;
                    return u(this, function (a) {
                      switch (a.label) {
                        case 0:
                          if (
                            ((e = this.A || C)("info", "Fetching decisions from Adzerk API"),
                            e("info", "Processing request: ", n),
                            void 0 === (r = v.removeUndefinedAndBlocklisted(n, ["isMobile"])).enableBotFiltering &&
                              (r.enableBotFiltering = !g),
                            void 0 === r.placements || !r.placements.length)
                          )
                            throw new m.RequiredError("decisionRequest", "Each request requires at least one placement");
                          return (
                            r.placements.forEach(function (n, t) {
                              if (void 0 === n.adTypes || !n.adTypes.length)
                                throw new m.RequiredError("placements", "Each placement requires at least one ad type");
                              for (var r = 0, i = y; r < i.length; r++) {
                                var o = i[r],
                                  u = o[0],
                                  c = o[1];
                                null != (n[u] || void 0) &&
                                  e("warn", "DEPRECATION WARNING: " + u + " has been deprecated. Please use " + c + " instead.");
                              }
                              (n.networkId = n.networkId || f.P), (n.siteId = n.siteId || f.q), (n.divName = n.divName || "div" + t);
                            }),
                            (i = this.T),
                            ((null == t ? void 0 : t.includeExplanation) || (null == t ? void 0 : t.userAgent)) &&
                              (i = i.withPreMiddleware(function (n) {
                                return o(f, void 0, void 0, function () {
                                  var r;
                                  return u(this, function (i) {
                                    return (
                                      n.init.headers || (n.init.headers = {}),
                                      (r = n.init.headers),
                                      t.includeExplanation &&
                                        (e(
                                          "warn",
                                          "--------------------------------------------------------------\n--------------!!! WARNING - WARNING - WARNING !!!-------------\nYou have opted to include explainer details with this request!\nThis will cause performance degradation and should not be done\nin production environments.\n--------------------------------------------------------------"
                                        ),
                                        (r["x-adzerk-explain"] = t.apiKey || "")),
                                      t.userAgent && (r["User-Agent"] = t.userAgent || ""),
                                      [2]
                                    );
                                  });
                                });
                              })),
                            e("info", "Using the processed request: ", r),
                            [4, i.getDecisions(r)]
                          );
                        case 1:
                          return (
                            (c = a.sent()),
                            e("info", "Received response: ", c),
                            (s = c.decisions || {}),
                            Object.keys(s).forEach(function (n) {
                              x(s[n]) || (s[n] = [s[n]]);
                            }),
                            [2, c]
                          );
                      }
                    });
                  });
                }),
                n
              );
            })(),
            I = (function () {
              function n(n, t) {
                (this.T = new p.UserdbApi(n)), (this.P = t);
              }
              return (
                (n.prototype.setCustomProperties = function (n, t, e) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.T.addCustomProperties(e || this.P, n, t)];
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.addInterest = function (n, t, e) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.T.addInterests(e || this.P, n, t)];
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.addRetargetingSegment = function (n, t, e, r) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.T.addRetargetingSegment(r || this.P, t, e, n)];
                        case 1:
                          return [2, i.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.forget = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.T.forget(t || this.P, n)];
                        case 1:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.gdprConsent = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.T.gdprConsent(t || this.P, n)];
                        case 1:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.ipOverride = function (n, t, e) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.T.ipOverride(e || this.P, n, t)];
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.matchUser = function (n, t, e, r) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.T.matchUser(r || this.P, n, t, e)];
                        case 1:
                          return [2, i.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.optOut = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    return u(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.T.optOut(t || this.P, n)];
                        case 1:
                          return [2, e.sent()];
                      }
                    });
                  });
                }),
                (n.prototype.read = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    var e;
                    return u(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.T.read(t || this.P, n)];
                        case 1:
                          return (
                            (e = r.sent()),
                            e.cookieMonster,
                            e.dirtyCookies,
                            e.isNew,
                            e.adViewTimes,
                            e.advertiserViewTimes,
                            e.flightViewTimes,
                            e.siteViewTimes,
                            e.campaignViewTimes,
                            e.pendingConversions,
                            e.campaignConversions,
                            [
                              2,
                              c(e, [
                                "cookieMonster",
                                "dirtyCookies",
                                "isNew",
                                "adViewTimes",
                                "advertiserViewTimes",
                                "flightViewTimes",
                                "siteViewTimes",
                                "campaignViewTimes",
                                "pendingConversions",
                                "campaignConversions"
                              ])
                            ]
                          );
                      }
                    });
                  });
                }),
                n
              );
            })(),
            j = (function () {
              function n(n, t, e, r) {
                (this.M = n), (this._ = t), (this.A = e), (this.D = r);
              }
              return (
                (n.prototype.buildFireUrl = function (n) {
                  var t = new URL(n.url);
                  return (
                    n.revenueOverride && t.searchParams.append("override", n.revenueOverride.toString()),
                    n.additionalRevenue && t.searchParams.append("additional", n.additionalRevenue.toString()),
                    n.eventMultiplier && t.searchParams.append("eventMultiplier", n.eventMultiplier.toString()),
                    t.href
                  );
                }),
                (n.prototype.fire = function (n, t) {
                  return o(this, void 0, void 0, function () {
                    var e, r, i, o, c;
                    return u(this, function (u) {
                      switch (u.label) {
                        case 0:
                          return (
                            (e = this.A || C),
                            (r = {
                              method: "GET",
                              headers: {
                                "X-Adzerk-Sdk-Version": this.D,
                                "User-Agent": (null == t ? void 0 : t.userAgent) || "OpenAPI-Generator/1.0/js"
                              },
                              redirect: "manual"
                            }),
                            (i = this.buildFireUrl(n)),
                            e("info", "Firing Pixel at base url of: " + i),
                            this._ && (r.agent = this._),
                            [4, this.M(i, r)]
                          );
                        case 1:
                          return (
                            (o = u.sent()).headers.has("location") && (c = o.headers.get("location")),
                            e("info", "Received response from pixel url: " + o.status + " with location: " + c),
                            [2, { status: o.status, location: o.headers.has("location") ? o.headers.get("location") : void 0 }]
                          );
                      }
                    });
                  });
                }),
                n
              );
            })(),
            S = (function () {
              function t(t) {
                var e = this,
                  i = (t.fetch || a.default).bind(r),
                  c = t.logger || C,
                  f = t.protocol || "https",
                  d = f + "://" + (t.host || "e-" + t.networkId + ".adzerk.net"),
                  l = "adzerk-decision-sdk-js:1.0.0-beta.12";
                if ((t.additionalVersionInfo && (l = t.additionalVersionInfo + ";" + l), (this.U = t.path), g && !b)) {
                  var v = n(f).Agent;
                  this._ = t.agent || new v({ keepAlive: !0, timeout: 1e4 });
                }
                var p = {
                    pre: function (n) {
                      return o(e, void 0, void 0, function () {
                        return u(this, function (t) {
                          return (
                            c("info", "Request Url: " + n.url),
                            c("info", "Request Headers: " + n.init.headers),
                            c("info", "Request Body: " + n.init.body),
                            null != this._ && (n.init.agent = this._),
                            null != this.U && (n.url = "" + d + this.U),
                            n.init.headers || (n.init.headers = {}),
                            (n.init.headers["X-Adzerk-Sdk-Version"] = l),
                            [2, n]
                          );
                        });
                      });
                    },
                    post: function (n) {
                      return o(e, void 0, void 0, function () {
                        return u(this, function (t) {
                          return (
                            c("info", "Response Code: " + n.response.status),
                            c("info", "Response Status Text: " + n.response.statusText),
                            [2, n.response]
                          );
                        });
                      });
                    }
                  },
                  m = new h.Configuration({ basePath: d, fetchApi: i, apiKey: t.apiKey, middleware: s(t.middlewares || [], [p]) });
                (this.V = new k(m, t.networkId, c, t.siteId)), (this.K = new I(m, t.networkId)), (this.N = new j(i, this._, c, l));
              }
              return (
                Object.defineProperty(t.prototype, "decisions", {
                  get: function () {
                    return this.V;
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "userDb", {
                  get: function () {
                    return this.K;
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "pixels", {
                  get: function () {
                    return this.N;
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                t
              );
            })();
          e.Client = S;
        },
        {
          "isomorphic-unfetch": "VS7n",
          "form-data": "iC5B",
          debug: "jcLW",
          "./generated": "G33X",
          "./utils": "FOZT",
          "./generated/apis/UserdbApi": "EJ86",
          "./generated/runtime": "th5e",
          process: "pBGv"
        }
      ],
      Ze5K: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 }),
            (e.RateType = e.EventType = void 0),
            (function (n) {
              (n[(n.ViewConversion = 1)] = "ViewConversion"),
                (n[(n.ClickConversion = 2)] = "ClickConversion"),
                (n[(n.ServerToServerConversion = 3)] = "ServerToServerConversion"),
                (n[(n.Upvote = 10)] = "Upvote"),
                (n[(n.Downvote = 11)] = "Downvote"),
                (n[(n.DownvoteUninteresting = 12)] = "DownvoteUninteresting"),
                (n[(n.DownvoteMisleading = 13)] = "DownvoteMisleading"),
                (n[(n.DownvoteOffensive = 14)] = "DownvoteOffensive"),
                (n[(n.DownvoteRepetitive = 15)] = "DownvoteRepetitive"),
                (n[(n.DownvoteOther = 16)] = "DownvoteOther"),
                (n[(n.CloseAd = 17)] = "CloseAd"),
                (n[(n.Like = 20)] = "Like"),
                (n[(n.Share = 21)] = "Share"),
                (n[(n.Comment = 22)] = "Comment"),
                (n[(n.CommentReply = 101)] = "CommentReply"),
                (n[(n.CommentUpvote = 102)] = "CommentUpvote"),
                (n[(n.CommentDownvote = 103)] = "CommentDownvote"),
                (n[(n.Visible = 30)] = "Visible"),
                (n[(n.Hover = 31)] = "Hover"),
                (n[(n.ExpandDiv = 32)] = "ExpandDiv"),
                (n[(n.ViewableImpression = 40)] = "ViewableImpression"),
                (n[(n.ShareOnFacebook = 50)] = "ShareOnFacebook"),
                (n[(n.ShareOnTwitter = 51)] = "ShareOnTwitter"),
                (n[(n.ShareOnPinterest = 52)] = "ShareOnPinterest"),
                (n[(n.ShareOnReddit = 53)] = "ShareOnReddit"),
                (n[(n.ShareOnEmail = 54)] = "ShareOnEmail"),
                (n[(n.VideoStart = 70)] = "VideoStart"),
                (n[(n.VideoFirstQuartile = 71)] = "VideoFirstQuartile"),
                (n[(n.VideoMidPoint = 72)] = "VideoMidPoint"),
                (n[(n.VideoThirdQuartile = 73)] = "VideoThirdQuartile"),
                (n[(n.VideoComplete = 74)] = "VideoComplete"),
                (n[(n.VideoMute = 75)] = "VideoMute"),
                (n[(n.VideoUnmute = 76)] = "VideoUnmute"),
                (n[(n.VideoPause = 77)] = "VideoPause"),
                (n[(n.VideoRewind = 78)] = "VideoRewind"),
                (n[(n.VideoResume = 79)] = "VideoResume"),
                (n[(n.VideoFullScreen = 80)] = "VideoFullScreen"),
                (n[(n.VideoExitFullScreen = 81)] = "VideoExitFullScreen"),
                (n[(n.VideoExpand = 82)] = "VideoExpand"),
                (n[(n.VideoCollapse = 83)] = "VideoCollapse"),
                (n[(n.VideoAcceptInvitationLinear = 84)] = "VideoAcceptInvitationLinear"),
                (n[(n.VideoCloseLinear = 85)] = "VideoCloseLinear"),
                (n[(n.VideoSkip = 86)] = "VideoSkip"),
                (n[(n.VideoProgress = 87)] = "VideoProgress"),
                (n[(n.VideoZeroSecondsViewed = 400)] = "VideoZeroSecondsViewed"),
                (n[(n.VideoOneSecondsViewed = 401)] = "VideoOneSecondsViewed"),
                (n[(n.VideoTwoSecondsViewed = 402)] = "VideoTwoSecondsViewed"),
                (n[(n.VideoThreeSecondsViewed = 403)] = "VideoThreeSecondsViewed"),
                (n[(n.VideoFourSecondsViewed = 404)] = "VideoFourSecondsViewed"),
                (n[(n.VideoFiveSecondsViewed = 405)] = "VideoFiveSecondsViewed"),
                (n[(n.VideoSixSecondsViewed = 406)] = "VideoSixSecondsViewed"),
                (n[(n.VideoSevenSecondsViewed = 407)] = "VideoSevenSecondsViewed"),
                (n[(n.VideoEightSecondsViewed = 408)] = "VideoEightSecondsViewed"),
                (n[(n.VideoNineSecondsViewed = 409)] = "VideoNineSecondsViewed"),
                (n[(n.VideoTenSecondsViewed = 410)] = "VideoTenSecondsViewed"),
                (n[(n.VideoFifteenSecondsViewed = 415)] = "VideoFifteenSecondsViewed"),
                (n[(n.VideoTwentySecondsViewed = 420)] = "VideoTwentySecondsViewed"),
                (n[(n.VideoTwentyFiveSecondsViewed = 425)] = "VideoTwentyFiveSecondsViewed"),
                (n[(n.VideoThirtySecondsViewed = 430)] = "VideoThirtySecondsViewed");
            })(e.EventType || (e.EventType = {})),
            (function (n) {
              (n[(n.Flat = 1)] = "Flat"),
                (n[(n.CPM = 2)] = "CPM"),
                (n[(n.CPC = 3)] = "CPC"),
                (n[(n.CPAView = 4)] = "CPAView"),
                (n[(n.CPAClick = 5)] = "CPAClick"),
                (n[(n.CPAViewAndClick = 6)] = "CPAViewAndClick");
            })(e.RateType || (e.RateType = {}));
        },
        {}
      ],
      k61z: [
        function (n, t, e) {
          "use strict";
          Object.defineProperty(e, "h", { value: !0 });
        },
        {}
      ],
      Focm: [
        function (n, t, e) {
          "use strict";
          var r =
              (this && this.C) ||
              (Object.create
                ? function (n, t, e, r) {
                    void 0 === r && (r = e),
                      Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        }
                      });
                  }
                : function (n, t, e, r) {
                    void 0 === r && (r = e), (n[r] = t[e]);
                  }),
            i =
              (this && this.k) ||
              function (n, t) {
                for (var e in n) "default" === e || t.hasOwnProperty(e) || r(t, n, e);
              };
          Object.defineProperty(e, "h", { value: !0 }), (e.Client = void 0);
          var o = n("./client");
          Object.defineProperty(e, "Client", {
            enumerable: !0,
            get: function () {
              return o.Client;
            }
          }),
            i(n("./enums"), e),
            i(n("./models"), e);
        },
        { "./client": "IVsl", "./enums": "Ze5K", "./models": "k61z" }
      ]
    },
    {},
    ["Focm"],
    "AdzerkDecisionSdk"
  ))),
  (function (n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = n(require("jquery")))
      : jQuery && !jQuery.fn.hoverIntent && n(jQuery);
  })(function (n) {
    "use strict";
    function t(n) {
      (r = n.pageX), (i = n.pageY);
    }
    function e(n) {
      return "function" == typeof n;
    }
    var r,
      i,
      o = { interval: 100, sensitivity: 6, timeout: 450 },
      u = 0,
      c = function (n, e, o, u) {
        if (Math.sqrt((o.pX - r) * (o.pX - r) + (o.pY - i) * (o.pY - i)) < u.sensitivity)
          return (
            e.off(o.event, t),
            delete o.timeoutId,
            (o.isActive = !0),
            (n.pageX = r),
            (n.pageY = i),
            delete o.pX,
            delete o.pY,
            u.over.apply(e[0], [n])
          );
        (o.pX = r),
          (o.pY = i),
          (o.timeoutId = setTimeout(function () {
            c(n, e, o, u);
          }, u.interval));
      };
    n.fn.hoverIntent = function (r, i, s) {
      var f = u++,
        a = n.extend({}, o);
      function d(e) {
        var r = n.extend({}, e),
          i = n(this),
          o = i.data("hoverIntent");
        o || i.data("hoverIntent", (o = {}));
        var u = o[f];
        u || (o[f] = u = { id: f }), u.timeoutId && (u.timeoutId = clearTimeout(u.timeoutId));
        var s = (u.event = "mousemove.hoverIntent.hoverIntent" + f);
        if ("mouseenter" === e.type) {
          if (u.isActive) return;
          (u.pX = r.pageX),
            (u.pY = r.pageY),
            i.off(s, t).on(s, t),
            (u.timeoutId = setTimeout(function () {
              c(r, i, u, a);
            }, a.interval));
        } else {
          if (!u.isActive) return;
          i.off(s, t),
            (u.timeoutId = setTimeout(function () {
              !(function (n, t, e, r) {
                var i = t.data("hoverIntent");
                i && delete i[e.id], r.apply(t[0], [n]);
              })(r, i, u, a.out);
            }, a.timeout));
        }
      }
      return (
        n.isPlainObject(r)
          ? e((a = n.extend(a, r)).out) || (a.out = a.over)
          : (a = e(i) ? n.extend(a, { over: r, out: i, selector: s }) : n.extend(a, { over: r, out: r, selector: i })),
        this.on({ "mouseenter.hoverIntent": d, "mouseleave.hoverIntent": d }, a.selector)
      );
    };
  });
