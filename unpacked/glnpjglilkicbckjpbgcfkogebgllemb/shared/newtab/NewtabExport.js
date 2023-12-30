/*! For license information please see NewtabExport.js.LICENSE.txt */
!(function () {
  var e = {
      750: function (e, t, a) {
        var o;
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            n(e)
          );
        }
        (e = a.nmd(e)),
          (function (t, a) {
            "use strict";
            "object" === n(e) && "object" === n(e.exports)
              ? (e.exports = t.document
                  ? a(t, !0)
                  : function (e) {
                      if (!e.document) throw new Error("jQuery requires a window with a document");
                      return a(e);
                    })
              : a(t);
          })("undefined" != typeof window ? window : this, function (a, r) {
            "use strict";
            var s = [],
              i = Object.getPrototypeOf,
              p = s.slice,
              l = s.flat
                ? function (e) {
                    return s.flat.call(e);
                  }
                : function (e) {
                    return s.concat.apply([], e);
                  },
              d = s.push,
              u = s.indexOf,
              c = {},
              g = c.toString,
              v = c.hasOwnProperty,
              h = v.toString,
              k = h.call(Object),
              m = {},
              y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
              },
              b = function (e) {
                return null != e && e === e.window;
              },
              w = a.document,
              f = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function P(e, t, a) {
              var o,
                n,
                r = (a = a || w).createElement("script");
              if (((r.text = e), t)) for (o in f) (n = t[o] || (t.getAttribute && t.getAttribute(o))) && r.setAttribute(o, n);
              a.head.appendChild(r).parentNode.removeChild(r);
            }
            function S(e) {
              return null == e ? e + "" : "object" === n(e) || "function" == typeof e ? c[g.call(e)] || "object" : n(e);
            }
            var A = "3.5.1",
              O = function e(t, a) {
                return new e.fn.init(t, a);
              };
            function x(e) {
              var t = !!e && "length" in e && e.length,
                a = S(e);
              return !y(e) && !b(e) && ("array" === a || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            (O.fn = O.prototype =
              {
                jquery: A,
                constructor: O,
                length: 0,
                toArray: function () {
                  return p.call(this);
                },
                get: function (e) {
                  return null == e ? p.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                  var t = O.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
                },
                each: function (e) {
                  return O.each(this, e);
                },
                map: function (e) {
                  return this.pushStack(
                    O.map(this, function (t, a) {
                      return e.call(t, a, t);
                    })
                  );
                },
                slice: function () {
                  return this.pushStack(p.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                even: function () {
                  return this.pushStack(
                    O.grep(this, function (e, t) {
                      return (t + 1) % 2;
                    })
                  );
                },
                odd: function () {
                  return this.pushStack(
                    O.grep(this, function (e, t) {
                      return t % 2;
                    })
                  );
                },
                eq: function (e) {
                  var t = this.length,
                    a = +e + (e < 0 ? t : 0);
                  return this.pushStack(a >= 0 && a < t ? [this[a]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor();
                },
                push: d,
                sort: s.sort,
                splice: s.splice
              }),
              (O.extend = O.fn.extend =
                function () {
                  var e,
                    t,
                    a,
                    o,
                    r,
                    s,
                    i = arguments[0] || {},
                    p = 1,
                    l = arguments.length,
                    d = !1;
                  for (
                    "boolean" == typeof i && ((d = i), (i = arguments[p] || {}), p++),
                      "object" === n(i) || y(i) || (i = {}),
                      p === l && ((i = this), p--);
                    p < l;
                    p++
                  )
                    if (null != (e = arguments[p]))
                      for (t in e)
                        (o = e[t]),
                          "__proto__" !== t &&
                            i !== o &&
                            (d && o && (O.isPlainObject(o) || (r = Array.isArray(o)))
                              ? ((a = i[t]),
                                (s = r && !Array.isArray(a) ? [] : r || O.isPlainObject(a) ? a : {}),
                                (r = !1),
                                (i[t] = O.extend(d, s, o)))
                              : void 0 !== o && (i[t] = o));
                  return i;
                }),
              O.extend({
                expando: "jQuery" + (A + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                  var t, a;
                  return (
                    !(!e || "[object Object]" !== g.call(e)) &&
                    (!(t = i(e)) || ("function" == typeof (a = v.call(t, "constructor") && t.constructor) && h.call(a) === k))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                globalEval: function (e, t, a) {
                  P(e, { nonce: t && t.nonce }, a);
                },
                each: function (e, t) {
                  var a,
                    o = 0;
                  if (x(e)) for (a = e.length; o < a && !1 !== t.call(e[o], o, e[o]); o++);
                  else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                  return e;
                },
                makeArray: function (e, t) {
                  var a = t || [];
                  return null != e && (x(Object(e)) ? O.merge(a, "string" == typeof e ? [e] : e) : d.call(a, e)), a;
                },
                inArray: function (e, t, a) {
                  return null == t ? -1 : u.call(t, e, a);
                },
                merge: function (e, t) {
                  for (var a = +t.length, o = 0, n = e.length; o < a; o++) e[n++] = t[o];
                  return (e.length = n), e;
                },
                grep: function (e, t, a) {
                  for (var o = [], n = 0, r = e.length, s = !a; n < r; n++) !t(e[n], n) !== s && o.push(e[n]);
                  return o;
                },
                map: function (e, t, a) {
                  var o,
                    n,
                    r = 0,
                    s = [];
                  if (x(e)) for (o = e.length; r < o; r++) null != (n = t(e[r], r, a)) && s.push(n);
                  else for (r in e) null != (n = t(e[r], r, a)) && s.push(n);
                  return l(s);
                },
                guid: 1,
                support: m
              }),
              "function" == typeof Symbol && (O.fn[Symbol.iterator] = s[Symbol.iterator]),
              O.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase();
              });
            var T = (function (e) {
              var t,
                a,
                o,
                n,
                r,
                s,
                i,
                p,
                l,
                d,
                u,
                c,
                g,
                v,
                h,
                k,
                m,
                y,
                b,
                w = "sizzle" + 1 * new Date(),
                f = e.document,
                P = 0,
                S = 0,
                A = pe(),
                O = pe(),
                x = pe(),
                T = pe(),
                R = function (e, t) {
                  return e === t && (u = !0), 0;
                },
                N = {}.hasOwnProperty,
                C = [],
                I = C.pop,
                E = C.push,
                L = C.push,
                z = C.slice,
                _ = function (e, t) {
                  for (var a = 0, o = e.length; a < o; a++) if (e[a] === t) return a;
                  return -1;
                },
                D =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                U = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\[\\da-fA-F]{1,6}" + U + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                M =
                  "\\[" +
                  U +
                  "*(" +
                  j +
                  ")(?:" +
                  U +
                  "*([*^$|!~]?=)" +
                  U +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  j +
                  "))|)" +
                  U +
                  "*\\]",
                B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                V = new RegExp(U + "+", "g"),
                K = new RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$", "g"),
                W = new RegExp("^" + U + "*," + U + "*"),
                F = new RegExp("^" + U + "*([>+~]|" + U + ")" + U + "*"),
                q = new RegExp(U + "|>"),
                H = new RegExp(B),
                G = new RegExp("^" + j + "$"),
                Y = {
                  ID: new RegExp("^#(" + j + ")"),
                  CLASS: new RegExp("^\\.(" + j + ")"),
                  TAG: new RegExp("^(" + j + "|[*])"),
                  ATTR: new RegExp("^" + M),
                  PSEUDO: new RegExp("^" + B),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      U +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      U +
                      "*(?:([+-]|)" +
                      U +
                      "*(\\d+)|))" +
                      U +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + D + ")$", "i"),
                  needsContext: new RegExp(
                    "^" + U + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)",
                    "i"
                  )
                },
                $ = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + U + "?|\\\\([^\\r\\n\\f])", "g"),
                ae = function (e, t) {
                  var a = "0x" + e.slice(1) - 65536;
                  return t || (a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320));
                },
                oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function (e, t) {
                  return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                },
                re = function () {
                  c();
                },
                se = we(
                  function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                L.apply((C = z.call(f.childNodes)), f.childNodes), C[f.childNodes.length].nodeType;
              } catch (e) {
                L = {
                  apply: C.length
                    ? function (e, t) {
                        E.apply(e, z.call(t));
                      }
                    : function (e, t) {
                        for (var a = e.length, o = 0; (e[a++] = t[o++]); );
                        e.length = a - 1;
                      }
                };
              }
              function ie(e, t, o, n) {
                var r,
                  i,
                  l,
                  d,
                  u,
                  v,
                  m,
                  y = t && t.ownerDocument,
                  f = t ? t.nodeType : 9;
                if (((o = o || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return o;
                if (!n && (c(t), (t = t || g), h)) {
                  if (11 !== f && (u = X.exec(e)))
                    if ((r = u[1])) {
                      if (9 === f) {
                        if (!(l = t.getElementById(r))) return o;
                        if (l.id === r) return o.push(l), o;
                      } else if (y && (l = y.getElementById(r)) && b(t, l) && l.id === r) return o.push(l), o;
                    } else {
                      if (u[2]) return L.apply(o, t.getElementsByTagName(e)), o;
                      if ((r = u[3]) && a.getElementsByClassName && t.getElementsByClassName)
                        return L.apply(o, t.getElementsByClassName(r)), o;
                    }
                  if (a.qsa && !T[e + " "] && (!k || !k.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (((m = e), (y = t), 1 === f && (q.test(e) || F.test(e)))) {
                      for (
                        ((y = (ee.test(e) && me(t.parentNode)) || t) === t && a.scope) ||
                          ((d = t.getAttribute("id")) ? (d = d.replace(oe, ne)) : t.setAttribute("id", (d = w))),
                          i = (v = s(e)).length;
                        i--;

                      )
                        v[i] = (d ? "#" + d : ":scope") + " " + be(v[i]);
                      m = v.join(",");
                    }
                    try {
                      return L.apply(o, y.querySelectorAll(m)), o;
                    } catch (t) {
                      T(e, !0);
                    } finally {
                      d === w && t.removeAttribute("id");
                    }
                  }
                }
                return p(e.replace(K, "$1"), t, o, n);
              }
              function pe() {
                var e = [];
                return function t(a, n) {
                  return e.push(a + " ") > o.cacheLength && delete t[e.shift()], (t[a + " "] = n);
                };
              }
              function le(e) {
                return (e[w] = !0), e;
              }
              function de(e) {
                var t = g.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function ue(e, t) {
                for (var a = e.split("|"), n = a.length; n--; ) o.attrHandle[a[n]] = t;
              }
              function ce(e, t) {
                var a = t && e,
                  o = a && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (o) return o;
                if (a) for (; (a = a.nextSibling); ) if (a === t) return -1;
                return e ? 1 : -1;
              }
              function ge(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function ve(e) {
                return function (t) {
                  var a = t.nodeName.toLowerCase();
                  return ("input" === a || "button" === a) && t.type === e;
                };
              }
              function he(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function ke(e) {
                return le(function (t) {
                  return (
                    (t = +t),
                    le(function (a, o) {
                      for (var n, r = e([], a.length, t), s = r.length; s--; ) a[(n = r[s])] && (a[n] = !(o[n] = a[n]));
                    })
                  );
                });
              }
              function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((a = ie.support = {}),
              (r = ie.isXML =
                function (e) {
                  var t = e.namespaceURI,
                    a = (e.ownerDocument || e).documentElement;
                  return !$.test(t || (a && a.nodeName) || "HTML");
                }),
              (c = ie.setDocument =
                function (e) {
                  var t,
                    n,
                    s = e ? e.ownerDocument || e : f;
                  return s != g && 9 === s.nodeType && s.documentElement
                    ? ((v = (g = s).documentElement),
                      (h = !r(g)),
                      f != g &&
                        (n = g.defaultView) &&
                        n.top !== n &&
                        (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
                      (a.scope = de(function (e) {
                        return (
                          v.appendChild(e).appendChild(g.createElement("div")),
                          void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (a.attributes = de(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (a.getElementsByTagName = de(function (e) {
                        return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (a.getElementsByClassName = Q.test(g.getElementsByClassName)),
                      (a.getById = de(function (e) {
                        return (v.appendChild(e).id = w), !g.getElementsByName || !g.getElementsByName(w).length;
                      })),
                      a.getById
                        ? ((o.filter.ID = function (e) {
                            var t = e.replace(te, ae);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (o.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && h) {
                              var a = t.getElementById(e);
                              return a ? [a] : [];
                            }
                          }))
                        : ((o.filter.ID = function (e) {
                            var t = e.replace(te, ae);
                            return function (e) {
                              var a = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                              return a && a.value === t;
                            };
                          }),
                          (o.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && h) {
                              var a,
                                o,
                                n,
                                r = t.getElementById(e);
                              if (r) {
                                if ((a = r.getAttributeNode("id")) && a.value === e) return [r];
                                for (n = t.getElementsByName(e), o = 0; (r = n[o++]); )
                                  if ((a = r.getAttributeNode("id")) && a.value === e) return [r];
                              }
                              return [];
                            }
                          })),
                      (o.find.TAG = a.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : a.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                            var a,
                              o = [],
                              n = 0,
                              r = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (a = r[n++]); ) 1 === a.nodeType && o.push(a);
                              return o;
                            }
                            return r;
                          }),
                      (o.find.CLASS =
                        a.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e);
                        }),
                      (m = []),
                      (k = []),
                      (a.qsa = Q.test(g.querySelectorAll)) &&
                        (de(function (e) {
                          var t;
                          (v.appendChild(e).innerHTML =
                            "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length && k.push("[*^$]=" + U + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || k.push("\\[" + U + "*(?:value|" + D + ")"),
                            e.querySelectorAll("[id~=" + w + "-]").length || k.push("~="),
                            (t = g.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || k.push("\\[" + U + "*name" + U + "*=" + U + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || k.push(":checked"),
                            e.querySelectorAll("a#" + w + "+*").length || k.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            k.push("[\\r\\n\\f]");
                        }),
                        de(function (e) {
                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = g.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && k.push("name" + U + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && k.push(":enabled", ":disabled"),
                            (v.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && k.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            k.push(",.*:");
                        })),
                      (a.matchesSelector = Q.test(
                        (y = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)
                      )) &&
                        de(function (e) {
                          (a.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", B);
                        }),
                      (k = k.length && new RegExp(k.join("|"))),
                      (m = m.length && new RegExp(m.join("|"))),
                      (t = Q.test(v.compareDocumentPosition)),
                      (b =
                        t || Q.test(v.contains)
                          ? function (e, t) {
                              var a = 9 === e.nodeType ? e.documentElement : e,
                                o = t && t.parentNode;
                              return (
                                e === o ||
                                !(
                                  !o ||
                                  1 !== o.nodeType ||
                                  !(a.contains ? a.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                              return !1;
                            }),
                      (R = t
                        ? function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                              o ||
                              (1 & (o = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                              (!a.sortDetached && t.compareDocumentPosition(e) === o)
                                ? e == g || (e.ownerDocument == f && b(f, e))
                                  ? -1
                                  : t == g || (t.ownerDocument == f && b(f, t))
                                  ? 1
                                  : d
                                  ? _(d, e) - _(d, t)
                                  : 0
                                : 4 & o
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var a,
                              o = 0,
                              n = e.parentNode,
                              r = t.parentNode,
                              s = [e],
                              i = [t];
                            if (!n || !r) return e == g ? -1 : t == g ? 1 : n ? -1 : r ? 1 : d ? _(d, e) - _(d, t) : 0;
                            if (n === r) return ce(e, t);
                            for (a = e; (a = a.parentNode); ) s.unshift(a);
                            for (a = t; (a = a.parentNode); ) i.unshift(a);
                            for (; s[o] === i[o]; ) o++;
                            return o ? ce(s[o], i[o]) : s[o] == f ? -1 : i[o] == f ? 1 : 0;
                          }),
                      g)
                    : g;
                }),
              (ie.matches = function (e, t) {
                return ie(e, null, null, t);
              }),
              (ie.matchesSelector = function (e, t) {
                if ((c(e), a.matchesSelector && h && !T[t + " "] && (!m || !m.test(t)) && (!k || !k.test(t))))
                  try {
                    var o = y.call(e, t);
                    if (o || a.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return o;
                  } catch (e) {
                    T(t, !0);
                  }
                return ie(t, g, null, [e]).length > 0;
              }),
              (ie.contains = function (e, t) {
                return (e.ownerDocument || e) != g && c(e), b(e, t);
              }),
              (ie.attr = function (e, t) {
                (e.ownerDocument || e) != g && c(e);
                var n = o.attrHandle[t.toLowerCase()],
                  r = n && N.call(o.attrHandle, t.toLowerCase()) ? n(e, t, !h) : void 0;
                return void 0 !== r
                  ? r
                  : a.attributes || !h
                  ? e.getAttribute(t)
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
              }),
              (ie.escape = function (e) {
                return (e + "").replace(oe, ne);
              }),
              (ie.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ie.uniqueSort = function (e) {
                var t,
                  o = [],
                  n = 0,
                  r = 0;
                if (((u = !a.detectDuplicates), (d = !a.sortStable && e.slice(0)), e.sort(R), u)) {
                  for (; (t = e[r++]); ) t === e[r] && (n = o.push(r));
                  for (; n--; ) e.splice(o[n], 1);
                }
                return (d = null), e;
              }),
              (n = ie.getText =
                function (e) {
                  var t,
                    a = "",
                    o = 0,
                    r = e.nodeType;
                  if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) a += n(e);
                    } else if (3 === r || 4 === r) return e.nodeValue;
                  } else for (; (t = e[o++]); ) a += n(t);
                  return a;
                }),
              (o = ie.selectors =
                {
                  cacheLength: 50,
                  createPseudo: le,
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
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ae)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ae)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ie.error(e[0]),
                            (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ie.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        a = !e[6] && e[2];
                      return Y.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : a &&
                              H.test(a) &&
                              (t = s(a, !0)) &&
                              (t = a.indexOf(")", a.length - t) - a.length) &&
                              ((e[0] = e[0].slice(0, t)), (e[2] = a.slice(0, t))),
                          e.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ae).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = A[e + " "];
                      return (
                        t ||
                        ((t = new RegExp("(^|" + U + ")" + e + "(" + U + "|$)")) &&
                          A(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, a) {
                      return function (o) {
                        var n = ie.attr(o, e);
                        return null == n
                          ? "!=" === t
                          : !t ||
                              ((n += ""),
                              "=" === t
                                ? n === a
                                : "!=" === t
                                ? n !== a
                                : "^=" === t
                                ? a && 0 === n.indexOf(a)
                                : "*=" === t
                                ? a && n.indexOf(a) > -1
                                : "$=" === t
                                ? a && n.slice(-a.length) === a
                                : "~=" === t
                                ? (" " + n.replace(V, " ") + " ").indexOf(a) > -1
                                : "|=" === t && (n === a || n.slice(0, a.length + 1) === a + "-"));
                      };
                    },
                    CHILD: function (e, t, a, o, n) {
                      var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        i = "of-type" === t;
                      return 1 === o && 0 === n
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, a, p) {
                            var l,
                              d,
                              u,
                              c,
                              g,
                              v,
                              h = r !== s ? "nextSibling" : "previousSibling",
                              k = t.parentNode,
                              m = i && t.nodeName.toLowerCase(),
                              y = !p && !i,
                              b = !1;
                            if (k) {
                              if (r) {
                                for (; h; ) {
                                  for (c = t; (c = c[h]); ) if (i ? c.nodeName.toLowerCase() === m : 1 === c.nodeType) return !1;
                                  v = h = "only" === e && !v && "nextSibling";
                                }
                                return !0;
                              }
                              if (((v = [s ? k.firstChild : k.lastChild]), s && y)) {
                                for (
                                  b =
                                    (g =
                                      (l = (d = (u = (c = k)[w] || (c[w] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[e] || [])[0] === P &&
                                      l[1]) && l[2],
                                    c = g && k.childNodes[g];
                                  (c = (++g && c && c[h]) || (b = g = 0) || v.pop());

                                )
                                  if (1 === c.nodeType && ++b && c === t) {
                                    d[e] = [P, g, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = g =
                                    (l = (d = (u = (c = t)[w] || (c[w] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[e] || [])[0] === P &&
                                    l[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (c = (++g && c && c[h]) || (b = g = 0) || v.pop()) &&
                                  ((i ? c.nodeName.toLowerCase() !== m : 1 !== c.nodeType) ||
                                    !++b ||
                                    (y && ((d = (u = c[w] || (c[w] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[e] = [P, b]), c !== t));

                                );
                              return (b -= n) === o || (b % o == 0 && b / o >= 0);
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var a,
                        n = o.pseudos[e] || o.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                      return n[w]
                        ? n(t)
                        : n.length > 1
                        ? ((a = [e, e, "", t]),
                          o.setFilters.hasOwnProperty(e.toLowerCase())
                            ? le(function (e, a) {
                                for (var o, r = n(e, t), s = r.length; s--; ) e[(o = _(e, r[s]))] = !(a[o] = r[s]);
                              })
                            : function (e) {
                                return n(e, 0, a);
                              })
                        : n;
                    }
                  },
                  pseudos: {
                    not: le(function (e) {
                      var t = [],
                        a = [],
                        o = i(e.replace(K, "$1"));
                      return o[w]
                        ? le(function (e, t, a, n) {
                            for (var r, s = o(e, null, n, []), i = e.length; i--; ) (r = s[i]) && (e[i] = !(t[i] = r));
                          })
                        : function (e, n, r) {
                            return (t[0] = e), o(t, null, r, a), (t[0] = null), !a.pop();
                          };
                    }),
                    has: le(function (e) {
                      return function (t) {
                        return ie(e, t).length > 0;
                      };
                    }),
                    contains: le(function (e) {
                      return (
                        (e = e.replace(te, ae)),
                        function (t) {
                          return (t.textContent || n(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: le(function (e) {
                      return (
                        G.test(e || "") || ie.error("unsupported lang: " + e),
                        (e = e.replace(te, ae).toLowerCase()),
                        function (t) {
                          var a;
                          do {
                            if ((a = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                              return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-");
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var a = e.location && e.location.hash;
                      return a && a.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === v;
                    },
                    focus: function (e) {
                      return e === g.activeElement && (!g.hasFocus || g.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !o.pseudos.empty(e);
                    },
                    header: function (e) {
                      return Z.test(e.nodeName);
                    },
                    input: function (e) {
                      return J.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                      );
                    },
                    first: ke(function () {
                      return [0];
                    }),
                    last: ke(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ke(function (e, t, a) {
                      return [a < 0 ? a + t : a];
                    }),
                    even: ke(function (e, t) {
                      for (var a = 0; a < t; a += 2) e.push(a);
                      return e;
                    }),
                    odd: ke(function (e, t) {
                      for (var a = 1; a < t; a += 2) e.push(a);
                      return e;
                    }),
                    lt: ke(function (e, t, a) {
                      for (var o = a < 0 ? a + t : a > t ? t : a; --o >= 0; ) e.push(o);
                      return e;
                    }),
                    gt: ke(function (e, t, a) {
                      for (var o = a < 0 ? a + t : a; ++o < t; ) e.push(o);
                      return e;
                    })
                  }
                }),
              (o.pseudos.nth = o.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                o.pseudos[t] = ge(t);
              for (t in { submit: !0, reset: !0 }) o.pseudos[t] = ve(t);
              function ye() {}
              function be(e) {
                for (var t = 0, a = e.length, o = ""; t < a; t++) o += e[t].value;
                return o;
              }
              function we(e, t, a) {
                var o = t.dir,
                  n = t.next,
                  r = n || o,
                  s = a && "parentNode" === r,
                  i = S++;
                return t.first
                  ? function (t, a, n) {
                      for (; (t = t[o]); ) if (1 === t.nodeType || s) return e(t, a, n);
                      return !1;
                    }
                  : function (t, a, p) {
                      var l,
                        d,
                        u,
                        c = [P, i];
                      if (p) {
                        for (; (t = t[o]); ) if ((1 === t.nodeType || s) && e(t, a, p)) return !0;
                      } else
                        for (; (t = t[o]); )
                          if (1 === t.nodeType || s)
                            if (((d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), n && n === t.nodeName.toLowerCase()))
                              t = t[o] || t;
                            else {
                              if ((l = d[r]) && l[0] === P && l[1] === i) return (c[2] = l[2]);
                              if (((d[r] = c), (c[2] = e(t, a, p)))) return !0;
                            }
                      return !1;
                    };
              }
              function fe(e) {
                return e.length > 1
                  ? function (t, a, o) {
                      for (var n = e.length; n--; ) if (!e[n](t, a, o)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function Pe(e, t, a, o, n) {
                for (var r, s = [], i = 0, p = e.length, l = null != t; i < p; i++)
                  (r = e[i]) && ((a && !a(r, o, n)) || (s.push(r), l && t.push(i)));
                return s;
              }
              function Se(e, t, a, o, n, r) {
                return (
                  o && !o[w] && (o = Se(o)),
                  n && !n[w] && (n = Se(n, r)),
                  le(function (r, s, i, p) {
                    var l,
                      d,
                      u,
                      c = [],
                      g = [],
                      v = s.length,
                      h =
                        r ||
                        (function (e, t, a) {
                          for (var o = 0, n = t.length; o < n; o++) ie(e, t[o], a);
                          return a;
                        })(t || "*", i.nodeType ? [i] : i, []),
                      k = !e || (!r && t) ? h : Pe(h, c, e, i, p),
                      m = a ? (n || (r ? e : v || o) ? [] : s) : k;
                    if ((a && a(k, m, i, p), o))
                      for (l = Pe(m, g), o(l, [], i, p), d = l.length; d--; ) (u = l[d]) && (m[g[d]] = !(k[g[d]] = u));
                    if (r) {
                      if (n || e) {
                        if (n) {
                          for (l = [], d = m.length; d--; ) (u = m[d]) && l.push((k[d] = u));
                          n(null, (m = []), l, p);
                        }
                        for (d = m.length; d--; ) (u = m[d]) && (l = n ? _(r, u) : c[d]) > -1 && (r[l] = !(s[l] = u));
                      }
                    } else (m = Pe(m === s ? m.splice(v, m.length) : m)), n ? n(null, s, m, p) : L.apply(s, m);
                  })
                );
              }
              function Ae(e) {
                for (
                  var t,
                    a,
                    n,
                    r = e.length,
                    s = o.relative[e[0].type],
                    i = s || o.relative[" "],
                    p = s ? 1 : 0,
                    d = we(
                      function (e) {
                        return e === t;
                      },
                      i,
                      !0
                    ),
                    u = we(
                      function (e) {
                        return _(t, e) > -1;
                      },
                      i,
                      !0
                    ),
                    c = [
                      function (e, a, o) {
                        var n = (!s && (o || a !== l)) || ((t = a).nodeType ? d(e, a, o) : u(e, a, o));
                        return (t = null), n;
                      }
                    ];
                  p < r;
                  p++
                )
                  if ((a = o.relative[e[p].type])) c = [we(fe(c), a)];
                  else {
                    if ((a = o.filter[e[p].type].apply(null, e[p].matches))[w]) {
                      for (n = ++p; n < r && !o.relative[e[n].type]; n++);
                      return Se(
                        p > 1 && fe(c),
                        p > 1 && be(e.slice(0, p - 1).concat({ value: " " === e[p - 2].type ? "*" : "" })).replace(K, "$1"),
                        a,
                        p < n && Ae(e.slice(p, n)),
                        n < r && Ae((e = e.slice(n))),
                        n < r && be(e)
                      );
                    }
                    c.push(a);
                  }
                return fe(c);
              }
              return (
                (ye.prototype = o.filters = o.pseudos),
                (o.setFilters = new ye()),
                (s = ie.tokenize =
                  function (e, t) {
                    var a,
                      n,
                      r,
                      s,
                      i,
                      p,
                      l,
                      d = O[e + " "];
                    if (d) return t ? 0 : d.slice(0);
                    for (i = e, p = [], l = o.preFilter; i; ) {
                      for (s in ((a && !(n = W.exec(i))) || (n && (i = i.slice(n[0].length) || i), p.push((r = []))),
                      (a = !1),
                      (n = F.exec(i)) && ((a = n.shift()), r.push({ value: a, type: n[0].replace(K, " ") }), (i = i.slice(a.length))),
                      o.filter))
                        !(n = Y[s].exec(i)) ||
                          (l[s] && !(n = l[s](n))) ||
                          ((a = n.shift()), r.push({ value: a, type: s, matches: n }), (i = i.slice(a.length)));
                      if (!a) break;
                    }
                    return t ? i.length : i ? ie.error(e) : O(e, p).slice(0);
                  }),
                (i = ie.compile =
                  function (e, t) {
                    var a,
                      n = [],
                      r = [],
                      i = x[e + " "];
                    if (!i) {
                      for (t || (t = s(e)), a = t.length; a--; ) (i = Ae(t[a]))[w] ? n.push(i) : r.push(i);
                      (i = x(
                        e,
                        (function (e, t) {
                          var a = t.length > 0,
                            n = e.length > 0,
                            r = function (r, s, i, p, d) {
                              var u,
                                v,
                                k,
                                m = 0,
                                y = "0",
                                b = r && [],
                                w = [],
                                f = l,
                                S = r || (n && o.find.TAG("*", d)),
                                A = (P += null == f ? 1 : Math.random() || 0.1),
                                O = S.length;
                              for (d && (l = s == g || s || d); y !== O && null != (u = S[y]); y++) {
                                if (n && u) {
                                  for (v = 0, s || u.ownerDocument == g || (c(u), (i = !h)); (k = e[v++]); )
                                    if (k(u, s || g, i)) {
                                      p.push(u);
                                      break;
                                    }
                                  d && (P = A);
                                }
                                a && ((u = !k && u) && m--, r && b.push(u));
                              }
                              if (((m += y), a && y !== m)) {
                                for (v = 0; (k = t[v++]); ) k(b, w, s, i);
                                if (r) {
                                  if (m > 0) for (; y--; ) b[y] || w[y] || (w[y] = I.call(p));
                                  w = Pe(w);
                                }
                                L.apply(p, w), d && !r && w.length > 0 && m + t.length > 1 && ie.uniqueSort(p);
                              }
                              return d && ((P = A), (l = f)), b;
                            };
                          return a ? le(r) : r;
                        })(r, n)
                      )),
                        (i.selector = e);
                    }
                    return i;
                  }),
                (p = ie.select =
                  function (e, t, a, n) {
                    var r,
                      p,
                      l,
                      d,
                      u,
                      c = "function" == typeof e && e,
                      g = !n && s((e = c.selector || e));
                    if (((a = a || []), 1 === g.length)) {
                      if (
                        (p = g[0] = g[0].slice(0)).length > 2 &&
                        "ID" === (l = p[0]).type &&
                        9 === t.nodeType &&
                        h &&
                        o.relative[p[1].type]
                      ) {
                        if (!(t = (o.find.ID(l.matches[0].replace(te, ae), t) || [])[0])) return a;
                        c && (t = t.parentNode), (e = e.slice(p.shift().value.length));
                      }
                      for (r = Y.needsContext.test(e) ? 0 : p.length; r-- && ((l = p[r]), !o.relative[(d = l.type)]); )
                        if ((u = o.find[d]) && (n = u(l.matches[0].replace(te, ae), (ee.test(p[0].type) && me(t.parentNode)) || t))) {
                          if ((p.splice(r, 1), !(e = n.length && be(p)))) return L.apply(a, n), a;
                          break;
                        }
                    }
                    return (c || i(e, g))(n, t, !h, a, !t || (ee.test(e) && me(t.parentNode)) || t), a;
                  }),
                (a.sortStable = w.split("").sort(R).join("") === w),
                (a.detectDuplicates = !!u),
                c(),
                (a.sortDetached = de(function (e) {
                  return 1 & e.compareDocumentPosition(g.createElement("fieldset"));
                })),
                de(function (e) {
                  return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                  ue("type|href|height|width", function (e, t, a) {
                    if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
                (a.attributes &&
                  de(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                  })) ||
                  ue("value", function (e, t, a) {
                    if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                  }),
                de(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  ue(D, function (e, t, a) {
                    var o;
                    if (!a) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                  }),
                ie
              );
            })(a);
            (O.find = T),
              (O.expr = T.selectors),
              (O.expr[":"] = O.expr.pseudos),
              (O.uniqueSort = O.unique = T.uniqueSort),
              (O.text = T.getText),
              (O.isXMLDoc = T.isXML),
              (O.contains = T.contains),
              (O.escapeSelector = T.escape);
            var R = function (e, t, a) {
                for (var o = [], n = void 0 !== a; (e = e[t]) && 9 !== e.nodeType; )
                  if (1 === e.nodeType) {
                    if (n && O(e).is(a)) break;
                    o.push(e);
                  }
                return o;
              },
              N = function (e, t) {
                for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
                return a;
              },
              C = O.expr.match.needsContext;
            function I(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function L(e, t, a) {
              return y(t)
                ? O.grep(e, function (e, o) {
                    return !!t.call(e, o, e) !== a;
                  })
                : t.nodeType
                ? O.grep(e, function (e) {
                    return (e === t) !== a;
                  })
                : "string" != typeof t
                ? O.grep(e, function (e) {
                    return u.call(t, e) > -1 !== a;
                  })
                : O.filter(t, e, a);
            }
            (O.filter = function (e, t, a) {
              var o = t[0];
              return (
                a && (e = ":not(" + e + ")"),
                1 === t.length && 1 === o.nodeType
                  ? O.find.matchesSelector(o, e)
                    ? [o]
                    : []
                  : O.find.matches(
                      e,
                      O.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              O.fn.extend({
                find: function (e) {
                  var t,
                    a,
                    o = this.length,
                    n = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      O(e).filter(function () {
                        for (t = 0; t < o; t++) if (O.contains(n[t], this)) return !0;
                      })
                    );
                  for (a = this.pushStack([]), t = 0; t < o; t++) O.find(e, n[t], a);
                  return o > 1 ? O.uniqueSort(a) : a;
                },
                filter: function (e) {
                  return this.pushStack(L(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(L(this, e || [], !0));
                },
                is: function (e) {
                  return !!L(this, "string" == typeof e && C.test(e) ? O(e) : e || [], !1).length;
                }
              });
            var z,
              _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((O.fn.init = function (e, t, a) {
              var o, n;
              if (!e) return this;
              if (((a = a || z), "string" == typeof e)) {
                if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e)) || (!o[1] && t))
                  return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e);
                if (o[1]) {
                  if (
                    ((t = t instanceof O ? t[0] : t),
                    O.merge(this, O.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : w, !0)),
                    E.test(o[1]) && O.isPlainObject(t))
                  )
                    for (o in t) y(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                  return this;
                }
                return (n = w.getElementById(o[2])) && ((this[0] = n), (this.length = 1)), this;
              }
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : y(e)
                ? void 0 !== a.ready
                  ? a.ready(e)
                  : e(O)
                : O.makeArray(e, this);
            }).prototype = O.fn),
              (z = O(w));
            var D = /^(?:parents|prev(?:Until|All))/,
              U = { children: !0, contents: !0, next: !0, prev: !0 };
            function j(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            O.fn.extend({
              has: function (e) {
                var t = O(e, this),
                  a = t.length;
                return this.filter(function () {
                  for (var e = 0; e < a; e++) if (O.contains(this, t[e])) return !0;
                });
              },
              closest: function (e, t) {
                var a,
                  o = 0,
                  n = this.length,
                  r = [],
                  s = "string" != typeof e && O(e);
                if (!C.test(e))
                  for (; o < n; o++)
                    for (a = this[o]; a && a !== t; a = a.parentNode)
                      if (a.nodeType < 11 && (s ? s.index(a) > -1 : 1 === a.nodeType && O.find.matchesSelector(a, e))) {
                        r.push(a);
                        break;
                      }
                return this.pushStack(r.length > 1 ? O.uniqueSort(r) : r);
              },
              index: function (e) {
                return e
                  ? "string" == typeof e
                    ? u.call(O(e), this[0])
                    : u.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (e, t) {
                return this.pushStack(O.uniqueSort(O.merge(this.get(), O(e, t))));
              },
              addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
              }
            }),
              O.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return R(e, "parentNode");
                  },
                  parentsUntil: function (e, t, a) {
                    return R(e, "parentNode", a);
                  },
                  next: function (e) {
                    return j(e, "nextSibling");
                  },
                  prev: function (e) {
                    return j(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return R(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return R(e, "previousSibling");
                  },
                  nextUntil: function (e, t, a) {
                    return R(e, "nextSibling", a);
                  },
                  prevUntil: function (e, t, a) {
                    return R(e, "previousSibling", a);
                  },
                  siblings: function (e) {
                    return N((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return N(e.firstChild);
                  },
                  contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument)
                      ? e.contentDocument
                      : (I(e, "template") && (e = e.content || e), O.merge([], e.childNodes));
                  }
                },
                function (e, t) {
                  O.fn[e] = function (a, o) {
                    var n = O.map(this, t, a);
                    return (
                      "Until" !== e.slice(-5) && (o = a),
                      o && "string" == typeof o && (n = O.filter(o, n)),
                      this.length > 1 && (U[e] || O.uniqueSort(n), D.test(e) && n.reverse()),
                      this.pushStack(n)
                    );
                  };
                }
              );
            var M = /[^\x20\t\r\n\f]+/g;
            function B(e) {
              return e;
            }
            function V(e) {
              throw e;
            }
            function K(e, t, a, o) {
              var n;
              try {
                e && y((n = e.promise))
                  ? n.call(e).done(t).fail(a)
                  : e && y((n = e.then))
                  ? n.call(e, t, a)
                  : t.apply(void 0, [e].slice(o));
              } catch (e) {
                a.apply(void 0, [e]);
              }
            }
            (O.Callbacks = function (e) {
              e =
                "string" == typeof e
                  ? (function (e) {
                      var t = {};
                      return (
                        O.each(e.match(M) || [], function (e, a) {
                          t[a] = !0;
                        }),
                        t
                      );
                    })(e)
                  : O.extend({}, e);
              var t,
                a,
                o,
                n,
                r = [],
                s = [],
                i = -1,
                p = function () {
                  for (n = n || e.once, o = t = !0; s.length; i = -1)
                    for (a = s.shift(); ++i < r.length; ) !1 === r[i].apply(a[0], a[1]) && e.stopOnFalse && ((i = r.length), (a = !1));
                  e.memory || (a = !1), (t = !1), n && (r = a ? [] : "");
                },
                l = {
                  add: function () {
                    return (
                      r &&
                        (a && !t && ((i = r.length - 1), s.push(a)),
                        (function t(a) {
                          O.each(a, function (a, o) {
                            y(o) ? (e.unique && l.has(o)) || r.push(o) : o && o.length && "string" !== S(o) && t(o);
                          });
                        })(arguments),
                        a && !t && p()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      O.each(arguments, function (e, t) {
                        for (var a; (a = O.inArray(t, r, a)) > -1; ) r.splice(a, 1), a <= i && i--;
                      }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? O.inArray(e, r) > -1 : r.length > 0;
                  },
                  empty: function () {
                    return r && (r = []), this;
                  },
                  disable: function () {
                    return (n = s = []), (r = a = ""), this;
                  },
                  disabled: function () {
                    return !r;
                  },
                  lock: function () {
                    return (n = s = []), a || t || (r = a = ""), this;
                  },
                  locked: function () {
                    return !!n;
                  },
                  fireWith: function (e, a) {
                    return n || ((a = [e, (a = a || []).slice ? a.slice() : a]), s.push(a), t || p()), this;
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
              O.extend({
                Deferred: function (e) {
                  var t = [
                      ["notify", "progress", O.Callbacks("memory"), O.Callbacks("memory"), 2],
                      ["resolve", "done", O.Callbacks("once memory"), O.Callbacks("once memory"), 0, "resolved"],
                      ["reject", "fail", O.Callbacks("once memory"), O.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    r = {
                      state: function () {
                        return o;
                      },
                      always: function () {
                        return s.done(arguments).fail(arguments), this;
                      },
                      catch: function (e) {
                        return r.then(null, e);
                      },
                      pipe: function () {
                        var e = arguments;
                        return O.Deferred(function (a) {
                          O.each(t, function (t, o) {
                            var n = y(e[o[4]]) && e[o[4]];
                            s[o[1]](function () {
                              var e = n && n.apply(this, arguments);
                              e && y(e.promise)
                                ? e.promise().progress(a.notify).done(a.resolve).fail(a.reject)
                                : a[o[0] + "With"](this, n ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        }).promise();
                      },
                      then: function (e, o, r) {
                        var s = 0;
                        function i(e, t, o, r) {
                          return function () {
                            var p = this,
                              l = arguments,
                              d = function () {
                                var a, d;
                                if (!(e < s)) {
                                  if ((a = o.apply(p, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                  (d = a && ("object" === n(a) || "function" == typeof a) && a.then),
                                    y(d)
                                      ? r
                                        ? d.call(a, i(s, t, B, r), i(s, t, V, r))
                                        : (s++, d.call(a, i(s, t, B, r), i(s, t, V, r), i(s, t, B, t.notifyWith)))
                                      : (o !== B && ((p = void 0), (l = [a])), (r || t.resolveWith)(p, l));
                                }
                              },
                              u = r
                                ? d
                                : function () {
                                    try {
                                      d();
                                    } catch (a) {
                                      O.Deferred.exceptionHook && O.Deferred.exceptionHook(a, u.stackTrace),
                                        e + 1 >= s && (o !== V && ((p = void 0), (l = [a])), t.rejectWith(p, l));
                                    }
                                  };
                            e ? u() : (O.Deferred.getStackHook && (u.stackTrace = O.Deferred.getStackHook()), a.setTimeout(u));
                          };
                        }
                        return O.Deferred(function (a) {
                          t[0][3].add(i(0, a, y(r) ? r : B, a.notifyWith)),
                            t[1][3].add(i(0, a, y(e) ? e : B)),
                            t[2][3].add(i(0, a, y(o) ? o : V));
                        }).promise();
                      },
                      promise: function (e) {
                        return null != e ? O.extend(e, r) : r;
                      }
                    },
                    s = {};
                  return (
                    O.each(t, function (e, a) {
                      var n = a[2],
                        i = a[5];
                      (r[a[1]] = n.add),
                        i &&
                          n.add(
                            function () {
                              o = i;
                            },
                            t[3 - e][2].disable,
                            t[3 - e][3].disable,
                            t[0][2].lock,
                            t[0][3].lock
                          ),
                        n.add(a[3].fire),
                        (s[a[0]] = function () {
                          return s[a[0] + "With"](this === s ? void 0 : this, arguments), this;
                        }),
                        (s[a[0] + "With"] = n.fireWith);
                    }),
                    r.promise(s),
                    e && e.call(s, s),
                    s
                  );
                },
                when: function (e) {
                  var t = arguments.length,
                    a = t,
                    o = Array(a),
                    n = p.call(arguments),
                    r = O.Deferred(),
                    s = function (e) {
                      return function (a) {
                        (o[e] = this), (n[e] = arguments.length > 1 ? p.call(arguments) : a), --t || r.resolveWith(o, n);
                      };
                    };
                  if (t <= 1 && (K(e, r.done(s(a)).resolve, r.reject, !t), "pending" === r.state() || y(n[a] && n[a].then)))
                    return r.then();
                  for (; a--; ) K(n[a], s(a), r.reject);
                  return r.promise();
                }
              });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (O.Deferred.exceptionHook = function (e, t) {
              a.console && a.console.warn && e && W.test(e.name) && a.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
              (O.readyException = function (e) {
                a.setTimeout(function () {
                  throw e;
                });
              });
            var F = O.Deferred();
            function q() {
              w.removeEventListener("DOMContentLoaded", q), a.removeEventListener("load", q), O.ready();
            }
            (O.fn.ready = function (e) {
              return (
                F.then(e).catch(function (e) {
                  O.readyException(e);
                }),
                this
              );
            }),
              O.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                  (!0 === e ? --O.readyWait : O.isReady) || ((O.isReady = !0), (!0 !== e && --O.readyWait > 0) || F.resolveWith(w, [O]));
                }
              }),
              (O.ready.then = F.then),
              "complete" === w.readyState || ("loading" !== w.readyState && !w.documentElement.doScroll)
                ? a.setTimeout(O.ready)
                : (w.addEventListener("DOMContentLoaded", q), a.addEventListener("load", q));
            var H = function e(t, a, o, n, r, s, i) {
                var p = 0,
                  l = t.length,
                  d = null == o;
                if ("object" === S(o)) for (p in ((r = !0), o)) e(t, a, p, o[p], !0, s, i);
                else if (
                  void 0 !== n &&
                  ((r = !0),
                  y(n) || (i = !0),
                  d &&
                    (i
                      ? (a.call(t, n), (a = null))
                      : ((d = a),
                        (a = function (e, t, a) {
                          return d.call(O(e), a);
                        }))),
                  a)
                )
                  for (; p < l; p++) a(t[p], o, i ? n : n.call(t[p], p, a(t[p], o)));
                return r ? t : d ? a.call(t) : l ? a(t[0], o) : s;
              },
              G = /^-ms-/,
              Y = /-([a-z])/g;
            function $(e, t) {
              return t.toUpperCase();
            }
            function J(e) {
              return e.replace(G, "ms-").replace(Y, $);
            }
            var Z = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Q() {
              this.expando = O.expando + Q.uid++;
            }
            (Q.uid = 1),
              (Q.prototype = {
                cache: function (e) {
                  var t = e[this.expando];
                  return (
                    t ||
                      ((t = {}),
                      Z(e) &&
                        (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                    t
                  );
                },
                set: function (e, t, a) {
                  var o,
                    n = this.cache(e);
                  if ("string" == typeof t) n[J(t)] = a;
                  else for (o in t) n[J(o)] = t[o];
                  return n;
                },
                get: function (e, t) {
                  return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)];
                },
                access: function (e, t, a) {
                  return void 0 === t || (t && "string" == typeof t && void 0 === a)
                    ? this.get(e, t)
                    : (this.set(e, t, a), void 0 !== a ? a : t);
                },
                remove: function (e, t) {
                  var a,
                    o = e[this.expando];
                  if (void 0 !== o) {
                    if (void 0 !== t) {
                      a = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in o ? [t] : t.match(M) || []).length;
                      for (; a--; ) delete o[t[a]];
                    }
                    (void 0 === t || O.isEmptyObject(o)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                  }
                },
                hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !O.isEmptyObject(t);
                }
              });
            var X = new Q(),
              ee = new Q(),
              te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              ae = /[A-Z]/g;
            function oe(e, t, a) {
              var o;
              if (void 0 === a && 1 === e.nodeType)
                if (((o = "data-" + t.replace(ae, "-$&").toLowerCase()), "string" == typeof (a = e.getAttribute(o)))) {
                  try {
                    a = (function (e) {
                      return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : te.test(e) ? JSON.parse(e) : e));
                    })(a);
                  } catch (e) {}
                  ee.set(e, t, a);
                } else a = void 0;
              return a;
            }
            O.extend({
              hasData: function (e) {
                return ee.hasData(e) || X.hasData(e);
              },
              data: function (e, t, a) {
                return ee.access(e, t, a);
              },
              removeData: function (e, t) {
                ee.remove(e, t);
              },
              _data: function (e, t, a) {
                return X.access(e, t, a);
              },
              _removeData: function (e, t) {
                X.remove(e, t);
              }
            }),
              O.fn.extend({
                data: function (e, t) {
                  var a,
                    o,
                    r,
                    s = this[0],
                    i = s && s.attributes;
                  if (void 0 === e) {
                    if (this.length && ((r = ee.get(s)), 1 === s.nodeType && !X.get(s, "hasDataAttrs"))) {
                      for (a = i.length; a--; ) i[a] && 0 === (o = i[a].name).indexOf("data-") && ((o = J(o.slice(5))), oe(s, o, r[o]));
                      X.set(s, "hasDataAttrs", !0);
                    }
                    return r;
                  }
                  return "object" === n(e)
                    ? this.each(function () {
                        ee.set(this, e);
                      })
                    : H(
                        this,
                        function (t) {
                          var a;
                          if (s && void 0 === t) return void 0 !== (a = ee.get(s, e)) || void 0 !== (a = oe(s, e)) ? a : void 0;
                          this.each(function () {
                            ee.set(this, e, t);
                          });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    ee.remove(this, e);
                  });
                }
              }),
              O.extend({
                queue: function (e, t, a) {
                  var o;
                  if (e)
                    return (
                      (t = (t || "fx") + "queue"),
                      (o = X.get(e, t)),
                      a && (!o || Array.isArray(a) ? (o = X.access(e, t, O.makeArray(a))) : o.push(a)),
                      o || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || "fx";
                  var a = O.queue(e, t),
                    o = a.length,
                    n = a.shift(),
                    r = O._queueHooks(e, t);
                  "inprogress" === n && ((n = a.shift()), o--),
                    n &&
                      ("fx" === t && a.unshift("inprogress"),
                      delete r.stop,
                      n.call(
                        e,
                        function () {
                          O.dequeue(e, t);
                        },
                        r
                      )),
                    !o && r && r.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var a = t + "queueHooks";
                  return (
                    X.get(e, a) ||
                    X.access(e, a, {
                      empty: O.Callbacks("once memory").add(function () {
                        X.remove(e, [t + "queue", a]);
                      })
                    })
                  );
                }
              }),
              O.fn.extend({
                queue: function (e, t) {
                  var a = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), a--),
                    arguments.length < a
                      ? O.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var a = O.queue(this, e, t);
                          O._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && O.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    O.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var a,
                    o = 1,
                    n = O.Deferred(),
                    r = this,
                    s = this.length,
                    i = function () {
                      --o || n.resolveWith(r, [r]);
                    };
                  for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; )
                    (a = X.get(r[s], e + "queueHooks")) && a.empty && (o++, a.empty.add(i));
                  return i(), n.promise(t);
                }
              });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
              se = ["Top", "Right", "Bottom", "Left"],
              ie = w.documentElement,
              pe = function (e) {
                return O.contains(e.ownerDocument, e);
              },
              le = { composed: !0 };
            ie.getRootNode &&
              (pe = function (e) {
                return O.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
              });
            var de = function (e, t) {
              return "none" === (e = t || e).style.display || ("" === e.style.display && pe(e) && "none" === O.css(e, "display"));
            };
            function ue(e, t, a, o) {
              var n,
                r,
                s = 20,
                i = o
                  ? function () {
                      return o.cur();
                    }
                  : function () {
                      return O.css(e, t, "");
                    },
                p = i(),
                l = (a && a[3]) || (O.cssNumber[t] ? "" : "px"),
                d = e.nodeType && (O.cssNumber[t] || ("px" !== l && +p)) && re.exec(O.css(e, t));
              if (d && d[3] !== l) {
                for (p /= 2, l = l || d[3], d = +p || 1; s--; )
                  O.style(e, t, d + l), (1 - r) * (1 - (r = i() / p || 0.5)) <= 0 && (s = 0), (d /= r);
                (d *= 2), O.style(e, t, d + l), (a = a || []);
              }
              return (
                a && ((d = +d || +p || 0), (n = a[1] ? d + (a[1] + 1) * a[2] : +a[2]), o && ((o.unit = l), (o.start = d), (o.end = n))), n
              );
            }
            var ce = {};
            function ge(e) {
              var t,
                a = e.ownerDocument,
                o = e.nodeName,
                n = ce[o];
              return (
                n ||
                ((t = a.body.appendChild(a.createElement(o))),
                (n = O.css(t, "display")),
                t.parentNode.removeChild(t),
                "none" === n && (n = "block"),
                (ce[o] = n),
                n)
              );
            }
            function ve(e, t) {
              for (var a, o, n = [], r = 0, s = e.length; r < s; r++)
                (o = e[r]).style &&
                  ((a = o.style.display),
                  t
                    ? ("none" === a && ((n[r] = X.get(o, "display") || null), n[r] || (o.style.display = "")),
                      "" === o.style.display && de(o) && (n[r] = ge(o)))
                    : "none" !== a && ((n[r] = "none"), X.set(o, "display", a)));
              for (r = 0; r < s; r++) null != n[r] && (e[r].style.display = n[r]);
              return e;
            }
            O.fn.extend({
              show: function () {
                return ve(this, !0);
              },
              hide: function () {
                return ve(this);
              },
              toggle: function (e) {
                return "boolean" == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      de(this) ? O(this).show() : O(this).hide();
                    });
              }
            });
            var he,
              ke,
              me = /^(?:checkbox|radio)$/i,
              ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              be = /^$|^module$|\/(?:java|ecma)script/i;
            (he = w.createDocumentFragment().appendChild(w.createElement("div"))),
              (ke = w.createElement("input")).setAttribute("type", "radio"),
              ke.setAttribute("checked", "checked"),
              ke.setAttribute("name", "t"),
              he.appendChild(ke),
              (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (he.innerHTML = "<textarea>x</textarea>"),
              (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
              (he.innerHTML = "<option></option>"),
              (m.option = !!he.lastChild);
            var we = {
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""]
            };
            function fe(e, t) {
              var a;
              return (
                (a =
                  void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
                void 0 === t || (t && I(e, t)) ? O.merge([e], a) : a
              );
            }
            function Pe(e, t) {
              for (var a = 0, o = e.length; a < o; a++) X.set(e[a], "globalEval", !t || X.get(t[a], "globalEval"));
            }
            (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
              (we.th = we.td),
              m.option || (we.optgroup = we.option = [1, "<select multiple='multiple'>", "</select>"]);
            var Se = /<|&#?\w+;/;
            function Ae(e, t, a, o, n) {
              for (var r, s, i, p, l, d, u = t.createDocumentFragment(), c = [], g = 0, v = e.length; g < v; g++)
                if ((r = e[g]) || 0 === r)
                  if ("object" === S(r)) O.merge(c, r.nodeType ? [r] : r);
                  else if (Se.test(r)) {
                    for (
                      s = s || u.appendChild(t.createElement("div")),
                        i = (ye.exec(r) || ["", ""])[1].toLowerCase(),
                        p = we[i] || we._default,
                        s.innerHTML = p[1] + O.htmlPrefilter(r) + p[2],
                        d = p[0];
                      d--;

                    )
                      s = s.lastChild;
                    O.merge(c, s.childNodes), ((s = u.firstChild).textContent = "");
                  } else c.push(t.createTextNode(r));
              for (u.textContent = "", g = 0; (r = c[g++]); )
                if (o && O.inArray(r, o) > -1) n && n.push(r);
                else if (((l = pe(r)), (s = fe(u.appendChild(r), "script")), l && Pe(s), a))
                  for (d = 0; (r = s[d++]); ) be.test(r.type || "") && a.push(r);
              return u;
            }
            var Oe = /^key/,
              xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
              Te = /^([^.]*)(?:\.(.+)|)/;
            function Re() {
              return !0;
            }
            function Ne() {
              return !1;
            }
            function Ce(e, t) {
              return (
                (e ===
                  (function () {
                    try {
                      return w.activeElement;
                    } catch (e) {}
                  })()) ==
                ("focus" === t)
              );
            }
            function Ie(e, t, a, o, r, s) {
              var i, p;
              if ("object" === n(t)) {
                for (p in ("string" != typeof a && ((o = o || a), (a = void 0)), t)) Ie(e, p, a, o, t[p], s);
                return e;
              }
              if (
                (null == o && null == r
                  ? ((r = a), (o = a = void 0))
                  : null == r && ("string" == typeof a ? ((r = o), (o = void 0)) : ((r = o), (o = a), (a = void 0))),
                !1 === r)
              )
                r = Ne;
              else if (!r) return e;
              return (
                1 === s &&
                  ((i = r),
                  (r = function (e) {
                    return O().off(e), i.apply(this, arguments);
                  }),
                  (r.guid = i.guid || (i.guid = O.guid++))),
                e.each(function () {
                  O.event.add(this, t, r, o, a);
                })
              );
            }
            function Ee(e, t, a) {
              a
                ? (X.set(e, t, !1),
                  O.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                      var o,
                        n,
                        r = X.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                        if (r.length) (O.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (
                          ((r = p.call(arguments)),
                          X.set(this, t, r),
                          (o = a(this, t)),
                          this[t](),
                          r !== (n = X.get(this, t)) || o ? X.set(this, t, !1) : (n = {}),
                          r !== n)
                        )
                          return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else
                        r.length &&
                          (X.set(this, t, { value: O.event.trigger(O.extend(r[0], O.Event.prototype), r.slice(1), this) }),
                          e.stopImmediatePropagation());
                    }
                  }))
                : void 0 === X.get(e, t) && O.event.add(e, t, Re);
            }
            (O.event = {
              global: {},
              add: function (e, t, a, o, n) {
                var r,
                  s,
                  i,
                  p,
                  l,
                  d,
                  u,
                  c,
                  g,
                  v,
                  h,
                  k = X.get(e);
                if (Z(e))
                  for (
                    a.handler && ((a = (r = a).handler), (n = r.selector)),
                      n && O.find.matchesSelector(ie, n),
                      a.guid || (a.guid = O.guid++),
                      (p = k.events) || (p = k.events = Object.create(null)),
                      (s = k.handle) ||
                        (s = k.handle =
                          function (t) {
                            return void 0 !== O && O.event.triggered !== t.type ? O.event.dispatch.apply(e, arguments) : void 0;
                          }),
                      l = (t = (t || "").match(M) || [""]).length;
                    l--;

                  )
                    (g = h = (i = Te.exec(t[l]) || [])[1]),
                      (v = (i[2] || "").split(".").sort()),
                      g &&
                        ((u = O.event.special[g] || {}),
                        (g = (n ? u.delegateType : u.bindType) || g),
                        (u = O.event.special[g] || {}),
                        (d = O.extend(
                          {
                            type: g,
                            origType: h,
                            data: o,
                            handler: a,
                            guid: a.guid,
                            selector: n,
                            needsContext: n && O.expr.match.needsContext.test(n),
                            namespace: v.join(".")
                          },
                          r
                        )),
                        (c = p[g]) ||
                          (((c = p[g] = []).delegateCount = 0),
                          (u.setup && !1 !== u.setup.call(e, o, v, s)) || (e.addEventListener && e.addEventListener(g, s))),
                        u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = a.guid)),
                        n ? c.splice(c.delegateCount++, 0, d) : c.push(d),
                        (O.event.global[g] = !0));
              },
              remove: function (e, t, a, o, n) {
                var r,
                  s,
                  i,
                  p,
                  l,
                  d,
                  u,
                  c,
                  g,
                  v,
                  h,
                  k = X.hasData(e) && X.get(e);
                if (k && (p = k.events)) {
                  for (l = (t = (t || "").match(M) || [""]).length; l--; )
                    if (((g = h = (i = Te.exec(t[l]) || [])[1]), (v = (i[2] || "").split(".").sort()), g)) {
                      for (
                        u = O.event.special[g] || {},
                          c = p[(g = (o ? u.delegateType : u.bindType) || g)] || [],
                          i = i[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                          s = r = c.length;
                        r--;

                      )
                        (d = c[r]),
                          (!n && h !== d.origType) ||
                            (a && a.guid !== d.guid) ||
                            (i && !i.test(d.namespace)) ||
                            (o && o !== d.selector && ("**" !== o || !d.selector)) ||
                            (c.splice(r, 1), d.selector && c.delegateCount--, u.remove && u.remove.call(e, d));
                      s &&
                        !c.length &&
                        ((u.teardown && !1 !== u.teardown.call(e, v, k.handle)) || O.removeEvent(e, g, k.handle), delete p[g]);
                    } else for (g in p) O.event.remove(e, g + t[l], a, o, !0);
                  O.isEmptyObject(p) && X.remove(e, "handle events");
                }
              },
              dispatch: function (e) {
                var t,
                  a,
                  o,
                  n,
                  r,
                  s,
                  i = new Array(arguments.length),
                  p = O.event.fix(e),
                  l = (X.get(this, "events") || Object.create(null))[p.type] || [],
                  d = O.event.special[p.type] || {};
                for (i[0] = p, t = 1; t < arguments.length; t++) i[t] = arguments[t];
                if (((p.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, p))) {
                  for (s = O.event.handlers.call(this, p, l), t = 0; (n = s[t++]) && !p.isPropagationStopped(); )
                    for (p.currentTarget = n.elem, a = 0; (r = n.handlers[a++]) && !p.isImmediatePropagationStopped(); )
                      (p.rnamespace && !1 !== r.namespace && !p.rnamespace.test(r.namespace)) ||
                        ((p.handleObj = r),
                        (p.data = r.data),
                        void 0 !== (o = ((O.event.special[r.origType] || {}).handle || r.handler).apply(n.elem, i)) &&
                          !1 === (p.result = o) &&
                          (p.preventDefault(), p.stopPropagation()));
                  return d.postDispatch && d.postDispatch.call(this, p), p.result;
                }
              },
              handlers: function (e, t) {
                var a,
                  o,
                  n,
                  r,
                  s,
                  i = [],
                  p = t.delegateCount,
                  l = e.target;
                if (p && l.nodeType && !("click" === e.type && e.button >= 1))
                  for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (r = [], s = {}, a = 0; a < p; a++)
                        void 0 === s[(n = (o = t[a]).selector + " ")] &&
                          (s[n] = o.needsContext ? O(n, this).index(l) > -1 : O.find(n, this, null, [l]).length),
                          s[n] && r.push(o);
                      r.length && i.push({ elem: l, handlers: r });
                    }
                return (l = this), p < t.length && i.push({ elem: l, handlers: t.slice(p) }), i;
              },
              addProp: function (e, t) {
                Object.defineProperty(O.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: y(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                      },
                  set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                  }
                });
              },
              fix: function (e) {
                return e[O.expando] ? e : new O.Event(e);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (e) {
                    var t = this || e;
                    return me.test(t.type) && t.click && I(t, "input") && Ee(t, "click", Re), !1;
                  },
                  trigger: function (e) {
                    var t = this || e;
                    return me.test(t.type) && t.click && I(t, "input") && Ee(t, "click"), !0;
                  },
                  _default: function (e) {
                    var t = e.target;
                    return (me.test(t.type) && t.click && I(t, "input") && X.get(t, "click")) || I(t, "a");
                  }
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                  }
                }
              }
            }),
              (O.removeEvent = function (e, t, a) {
                e.removeEventListener && e.removeEventListener(t, a);
              }),
              (O.Event = function (e, t) {
                if (!(this instanceof O.Event)) return new O.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Re : Ne),
                    (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && O.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[O.expando] = !0);
              }),
              (O.Event.prototype = {
                constructor: O.Event,
                isDefaultPrevented: Ne,
                isPropagationStopped: Ne,
                isImmediatePropagationStopped: Ne,
                isSimulated: !1,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = Re), e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = Re), e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = Re), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                }
              }),
              O.each(
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
                  which: function (e) {
                    var t = e.button;
                    return null == e.which && Oe.test(e.type)
                      ? null != e.charCode
                        ? e.charCode
                        : e.keyCode
                      : !e.which && void 0 !== t && xe.test(e.type)
                      ? 1 & t
                        ? 1
                        : 2 & t
                        ? 3
                        : 4 & t
                        ? 2
                        : 0
                      : e.which;
                  }
                },
                O.event.addProp
              ),
              O.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                O.event.special[e] = {
                  setup: function () {
                    return Ee(this, e, Ce), !1;
                  },
                  trigger: function () {
                    return Ee(this, e), !0;
                  },
                  delegateType: t
                };
              }),
              O.each(
                { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
                function (e, t) {
                  O.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var a,
                        o = e.relatedTarget,
                        n = e.handleObj;
                      return (
                        (o && (o === this || O.contains(this, o))) ||
                          ((e.type = n.origType), (a = n.handler.apply(this, arguments)), (e.type = t)),
                        a
                      );
                    }
                  };
                }
              ),
              O.fn.extend({
                on: function (e, t, a, o) {
                  return Ie(this, e, t, a, o);
                },
                one: function (e, t, a, o) {
                  return Ie(this, e, t, a, o, 1);
                },
                off: function (e, t, a) {
                  var o, r;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (o = e.handleObj),
                      O(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                      this
                    );
                  if ("object" === n(e)) {
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                  }
                  return (
                    (!1 !== t && "function" != typeof t) || ((a = t), (t = void 0)),
                    !1 === a && (a = Ne),
                    this.each(function () {
                      O.event.remove(this, e, a, t);
                    })
                  );
                }
              });
            var Le = /<script|<style|<link/i,
              ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
              _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function De(e, t) {
              return (I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && O(e).children("tbody")[0]) || e;
            }
            function Ue(e) {
              return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function je(e) {
              return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function Me(e, t) {
              var a, o, n, r, s, i;
              if (1 === t.nodeType) {
                if (X.hasData(e) && (i = X.get(e).events))
                  for (n in (X.remove(t, "handle events"), i)) for (a = 0, o = i[n].length; a < o; a++) O.event.add(t, n, i[n][a]);
                ee.hasData(e) && ((r = ee.access(e)), (s = O.extend({}, r)), ee.set(t, s));
              }
            }
            function Be(e, t) {
              var a = t.nodeName.toLowerCase();
              "input" === a && me.test(e.type)
                ? (t.checked = e.checked)
                : ("input" !== a && "textarea" !== a) || (t.defaultValue = e.defaultValue);
            }
            function Ve(e, t, a, o) {
              t = l(t);
              var n,
                r,
                s,
                i,
                p,
                d,
                u = 0,
                c = e.length,
                g = c - 1,
                v = t[0],
                h = y(v);
              if (h || (c > 1 && "string" == typeof v && !m.checkClone && ze.test(v)))
                return e.each(function (n) {
                  var r = e.eq(n);
                  h && (t[0] = v.call(this, n, r.html())), Ve(r, t, a, o);
                });
              if (c && ((r = (n = Ae(t, e[0].ownerDocument, !1, e, o)).firstChild), 1 === n.childNodes.length && (n = r), r || o)) {
                for (i = (s = O.map(fe(n, "script"), Ue)).length; u < c; u++)
                  (p = n), u !== g && ((p = O.clone(p, !0, !0)), i && O.merge(s, fe(p, "script"))), a.call(e[u], p, u);
                if (i)
                  for (d = s[s.length - 1].ownerDocument, O.map(s, je), u = 0; u < i; u++)
                    (p = s[u]),
                      be.test(p.type || "") &&
                        !X.access(p, "globalEval") &&
                        O.contains(d, p) &&
                        (p.src && "module" !== (p.type || "").toLowerCase()
                          ? O._evalUrl && !p.noModule && O._evalUrl(p.src, { nonce: p.nonce || p.getAttribute("nonce") }, d)
                          : P(p.textContent.replace(_e, ""), p, d));
              }
              return e;
            }
            function Ke(e, t, a) {
              for (var o, n = t ? O.filter(t, e) : e, r = 0; null != (o = n[r]); r++)
                a || 1 !== o.nodeType || O.cleanData(fe(o)),
                  o.parentNode && (a && pe(o) && Pe(fe(o, "script")), o.parentNode.removeChild(o));
              return e;
            }
            O.extend({
              htmlPrefilter: function (e) {
                return e;
              },
              clone: function (e, t, a) {
                var o,
                  n,
                  r,
                  s,
                  i = e.cloneNode(!0),
                  p = pe(e);
                if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || O.isXMLDoc(e)))
                  for (s = fe(i), o = 0, n = (r = fe(e)).length; o < n; o++) Be(r[o], s[o]);
                if (t)
                  if (a) for (r = r || fe(e), s = s || fe(i), o = 0, n = r.length; o < n; o++) Me(r[o], s[o]);
                  else Me(e, i);
                return (s = fe(i, "script")).length > 0 && Pe(s, !p && fe(e, "script")), i;
              },
              cleanData: function (e) {
                for (var t, a, o, n = O.event.special, r = 0; void 0 !== (a = e[r]); r++)
                  if (Z(a)) {
                    if ((t = a[X.expando])) {
                      if (t.events) for (o in t.events) n[o] ? O.event.remove(a, o) : O.removeEvent(a, o, t.handle);
                      a[X.expando] = void 0;
                    }
                    a[ee.expando] && (a[ee.expando] = void 0);
                  }
              }
            }),
              O.fn.extend({
                detach: function (e) {
                  return Ke(this, e, !0);
                },
                remove: function (e) {
                  return Ke(this, e);
                },
                text: function (e) {
                  return H(
                    this,
                    function (e) {
                      return void 0 === e
                        ? O.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                append: function () {
                  return Ve(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return Ve(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var t = De(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return Ve(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return Ve(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (O.cleanData(fe(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return O.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return H(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        a = 0,
                        o = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if ("string" == typeof e && !Le.test(e) && !we[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = O.htmlPrefilter(e);
                        try {
                          for (; a < o; a++) 1 === (t = this[a] || {}).nodeType && (O.cleanData(fe(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                replaceWith: function () {
                  var e = [];
                  return Ve(
                    this,
                    arguments,
                    function (t) {
                      var a = this.parentNode;
                      O.inArray(this, e) < 0 && (O.cleanData(fe(this)), a && a.replaceChild(t, this));
                    },
                    e
                  );
                }
              }),
              O.each(
                { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
                function (e, t) {
                  O.fn[e] = function (e) {
                    for (var a, o = [], n = O(e), r = n.length - 1, s = 0; s <= r; s++)
                      (a = s === r ? this : this.clone(!0)), O(n[s])[t](a), d.apply(o, a.get());
                    return this.pushStack(o);
                  };
                }
              );
            var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
              Fe = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = a), t.getComputedStyle(e);
              },
              qe = function (e, t, a) {
                var o,
                  n,
                  r = {};
                for (n in t) (r[n] = e.style[n]), (e.style[n] = t[n]);
                for (n in ((o = a.call(e)), t)) e.style[n] = r[n];
                return o;
              },
              He = new RegExp(se.join("|"), "i");
            function Ge(e, t, a) {
              var o,
                n,
                r,
                s,
                i = e.style;
              return (
                (a = a || Fe(e)) &&
                  ("" !== (s = a.getPropertyValue(t) || a[t]) || pe(e) || (s = O.style(e, t)),
                  !m.pixelBoxStyles() &&
                    We.test(s) &&
                    He.test(t) &&
                    ((o = i.width),
                    (n = i.minWidth),
                    (r = i.maxWidth),
                    (i.minWidth = i.maxWidth = i.width = s),
                    (s = a.width),
                    (i.width = o),
                    (i.minWidth = n),
                    (i.maxWidth = r))),
                void 0 !== s ? s + "" : s
              );
            }
            function Ye(e, t) {
              return {
                get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
                }
              };
            }
            !(function () {
              function e() {
                if (d) {
                  (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (d.style.cssText =
                      "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ie.appendChild(l).appendChild(d);
                  var e = a.getComputedStyle(d);
                  (o = "1%" !== e.top),
                    (p = 12 === t(e.marginLeft)),
                    (d.style.right = "60%"),
                    (s = 36 === t(e.right)),
                    (n = 36 === t(e.width)),
                    (d.style.position = "absolute"),
                    (r = 12 === t(d.offsetWidth / 3)),
                    ie.removeChild(l),
                    (d = null);
                }
              }
              function t(e) {
                return Math.round(parseFloat(e));
              }
              var o,
                n,
                r,
                s,
                i,
                p,
                l = w.createElement("div"),
                d = w.createElement("div");
              d.style &&
                ((d.style.backgroundClip = "content-box"),
                (d.cloneNode(!0).style.backgroundClip = ""),
                (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
                O.extend(m, {
                  boxSizingReliable: function () {
                    return e(), n;
                  },
                  pixelBoxStyles: function () {
                    return e(), s;
                  },
                  pixelPosition: function () {
                    return e(), o;
                  },
                  reliableMarginLeft: function () {
                    return e(), p;
                  },
                  scrollboxSize: function () {
                    return e(), r;
                  },
                  reliableTrDimensions: function () {
                    var e, t, o, n;
                    return (
                      null == i &&
                        ((e = w.createElement("table")),
                        (t = w.createElement("tr")),
                        (o = w.createElement("div")),
                        (e.style.cssText = "position:absolute;left:-11111px"),
                        (t.style.height = "1px"),
                        (o.style.height = "9px"),
                        ie.appendChild(e).appendChild(t).appendChild(o),
                        (n = a.getComputedStyle(t)),
                        (i = parseInt(n.height) > 3),
                        ie.removeChild(e)),
                      i
                    );
                  }
                }));
            })();
            var $e = ["Webkit", "Moz", "ms"],
              Je = w.createElement("div").style,
              Ze = {};
            function Qe(e) {
              var t = O.cssProps[e] || Ze[e];
              return (
                t ||
                (e in Je
                  ? e
                  : (Ze[e] =
                      (function (e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), a = $e.length; a--; ) if ((e = $e[a] + t) in Je) return e;
                      })(e) || e))
              );
            }
            var Xe = /^(none|table(?!-c[ea]).+)/,
              et = /^--/,
              tt = { position: "absolute", visibility: "hidden", display: "block" },
              at = { letterSpacing: "0", fontWeight: "400" };
            function ot(e, t, a) {
              var o = re.exec(t);
              return o ? Math.max(0, o[2] - (a || 0)) + (o[3] || "px") : t;
            }
            function nt(e, t, a, o, n, r) {
              var s = "width" === t ? 1 : 0,
                i = 0,
                p = 0;
              if (a === (o ? "border" : "content")) return 0;
              for (; s < 4; s += 2)
                "margin" === a && (p += O.css(e, a + se[s], !0, n)),
                  o
                    ? ("content" === a && (p -= O.css(e, "padding" + se[s], !0, n)),
                      "margin" !== a && (p -= O.css(e, "border" + se[s] + "Width", !0, n)))
                    : ((p += O.css(e, "padding" + se[s], !0, n)),
                      "padding" !== a
                        ? (p += O.css(e, "border" + se[s] + "Width", !0, n))
                        : (i += O.css(e, "border" + se[s] + "Width", !0, n)));
              return !o && r >= 0 && (p += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - p - i - 0.5)) || 0), p;
            }
            function rt(e, t, a) {
              var o = Fe(e),
                n = (!m.boxSizingReliable() || a) && "border-box" === O.css(e, "boxSizing", !1, o),
                r = n,
                s = Ge(e, t, o),
                i = "offset" + t[0].toUpperCase() + t.slice(1);
              if (We.test(s)) {
                if (!a) return s;
                s = "auto";
              }
              return (
                ((!m.boxSizingReliable() && n) ||
                  (!m.reliableTrDimensions() && I(e, "tr")) ||
                  "auto" === s ||
                  (!parseFloat(s) && "inline" === O.css(e, "display", !1, o))) &&
                  e.getClientRects().length &&
                  ((n = "border-box" === O.css(e, "boxSizing", !1, o)), (r = i in e) && (s = e[i])),
                (s = parseFloat(s) || 0) + nt(e, t, a || (n ? "border" : "content"), r, o, s) + "px"
              );
            }
            function st(e, t, a, o, n) {
              return new st.prototype.init(e, t, a, o, n);
            }
            O.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var a = Ge(e, "opacity");
                      return "" === a ? "1" : a;
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
              style: function (e, t, a, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var r,
                    s,
                    i,
                    p = J(t),
                    l = et.test(t),
                    d = e.style;
                  if ((l || (t = Qe(p)), (i = O.cssHooks[t] || O.cssHooks[p]), void 0 === a))
                    return i && "get" in i && void 0 !== (r = i.get(e, !1, o)) ? r : d[t];
                  "string" === (s = n(a)) && (r = re.exec(a)) && r[1] && ((a = ue(e, t, r)), (s = "number")),
                    null != a &&
                      a == a &&
                      ("number" !== s || l || (a += (r && r[3]) || (O.cssNumber[p] ? "" : "px")),
                      m.clearCloneStyle || "" !== a || 0 !== t.indexOf("background") || (d[t] = "inherit"),
                      (i && "set" in i && void 0 === (a = i.set(e, a, o))) || (l ? d.setProperty(t, a) : (d[t] = a)));
                }
              },
              css: function (e, t, a, o) {
                var n,
                  r,
                  s,
                  i = J(t);
                return (
                  et.test(t) || (t = Qe(i)),
                  (s = O.cssHooks[t] || O.cssHooks[i]) && "get" in s && (n = s.get(e, !0, a)),
                  void 0 === n && (n = Ge(e, t, o)),
                  "normal" === n && t in at && (n = at[t]),
                  "" === a || a ? ((r = parseFloat(n)), !0 === a || isFinite(r) ? r || 0 : n) : n
                );
              }
            }),
              O.each(["height", "width"], function (e, t) {
                O.cssHooks[t] = {
                  get: function (e, a, o) {
                    if (a)
                      return !Xe.test(O.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                        ? rt(e, t, o)
                        : qe(e, tt, function () {
                            return rt(e, t, o);
                          });
                  },
                  set: function (e, a, o) {
                    var n,
                      r = Fe(e),
                      s = !m.scrollboxSize() && "absolute" === r.position,
                      i = (s || o) && "border-box" === O.css(e, "boxSizing", !1, r),
                      p = o ? nt(e, t, o, i, r) : 0;
                    return (
                      i &&
                        s &&
                        (p -= Math.ceil(
                          e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - 0.5
                        )),
                      p && (n = re.exec(a)) && "px" !== (n[3] || "px") && ((e.style[t] = a), (a = O.css(e, t))),
                      ot(0, a, p)
                    );
                  }
                };
              }),
              (O.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function (e, t) {
                if (t)
                  return (
                    (parseFloat(Ge(e, "marginLeft")) ||
                      e.getBoundingClientRect().left -
                        qe(e, { marginLeft: 0 }, function () {
                          return e.getBoundingClientRect().left;
                        })) + "px"
                  );
              })),
              O.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                (O.cssHooks[e + t] = {
                  expand: function (a) {
                    for (var o = 0, n = {}, r = "string" == typeof a ? a.split(" ") : [a]; o < 4; o++)
                      n[e + se[o] + t] = r[o] || r[o - 2] || r[0];
                    return n;
                  }
                }),
                  "margin" !== e && (O.cssHooks[e + t].set = ot);
              }),
              O.fn.extend({
                css: function (e, t) {
                  return H(
                    this,
                    function (e, t, a) {
                      var o,
                        n,
                        r = {},
                        s = 0;
                      if (Array.isArray(t)) {
                        for (o = Fe(e), n = t.length; s < n; s++) r[t[s]] = O.css(e, t[s], !1, o);
                        return r;
                      }
                      return void 0 !== a ? O.style(e, t, a) : O.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                  );
                }
              }),
              (O.Tween = st),
              (st.prototype = {
                constructor: st,
                init: function (e, t, a, o, n, r) {
                  (this.elem = e),
                    (this.prop = a),
                    (this.easing = n || O.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = o),
                    (this.unit = r || (O.cssNumber[a] ? "" : "px"));
                },
                cur: function () {
                  var e = st.propHooks[this.prop];
                  return e && e.get ? e.get(this) : st.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    a = st.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t = O.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                      : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    a && a.set ? a.set(this) : st.propHooks._default.set(this),
                    this
                  );
                }
              }),
              (st.prototype.init.prototype = st.prototype),
              (st.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                      ? e.elem[e.prop]
                      : (t = O.css(e.elem, e.prop, "")) && "auto" !== t
                      ? t
                      : 0;
                  },
                  set: function (e) {
                    O.fx.step[e.prop]
                      ? O.fx.step[e.prop](e)
                      : 1 !== e.elem.nodeType || (!O.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : O.style(e.elem, e.prop, e.now + e.unit);
                  }
                }
              }),
              (st.propHooks.scrollTop = st.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                  }
                }),
              (O.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
              }),
              (O.fx = st.prototype.init),
              (O.fx.step = {});
            var it,
              pt,
              lt = /^(?:toggle|show|hide)$/,
              dt = /queueHooks$/;
            function ut() {
              pt &&
                (!1 === w.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(ut) : a.setTimeout(ut, O.fx.interval), O.fx.tick());
            }
            function ct() {
              return (
                a.setTimeout(function () {
                  it = void 0;
                }),
                (it = Date.now())
              );
            }
            function gt(e, t) {
              var a,
                o = 0,
                n = { height: e };
              for (t = t ? 1 : 0; o < 4; o += 2 - t) n["margin" + (a = se[o])] = n["padding" + a] = e;
              return t && (n.opacity = n.width = e), n;
            }
            function vt(e, t, a) {
              for (var o, n = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = n.length; r < s; r++)
                if ((o = n[r].call(a, t, e))) return o;
            }
            function ht(e, t, a) {
              var o,
                n,
                r = 0,
                s = ht.prefilters.length,
                i = O.Deferred().always(function () {
                  delete p.elem;
                }),
                p = function () {
                  if (n) return !1;
                  for (
                    var t = it || ct(),
                      a = Math.max(0, l.startTime + l.duration - t),
                      o = 1 - (a / l.duration || 0),
                      r = 0,
                      s = l.tweens.length;
                    r < s;
                    r++
                  )
                    l.tweens[r].run(o);
                  return i.notifyWith(e, [l, o, a]), o < 1 && s ? a : (s || i.notifyWith(e, [l, 1, 0]), i.resolveWith(e, [l]), !1);
                },
                l = i.promise({
                  elem: e,
                  props: O.extend({}, t),
                  opts: O.extend(!0, { specialEasing: {}, easing: O.easing._default }, a),
                  originalProperties: t,
                  originalOptions: a,
                  startTime: it || ct(),
                  duration: a.duration,
                  tweens: [],
                  createTween: function (t, a) {
                    var o = O.Tween(e, l.opts, t, a, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(o), o;
                  },
                  stop: function (t) {
                    var a = 0,
                      o = t ? l.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; a < o; a++) l.tweens[a].run(1);
                    return t ? (i.notifyWith(e, [l, 1, 0]), i.resolveWith(e, [l, t])) : i.rejectWith(e, [l, t]), this;
                  }
                }),
                d = l.props;
              for (
                !(function (e, t) {
                  var a, o, n, r, s;
                  for (a in e)
                    if (
                      ((n = t[(o = J(a))]),
                      (r = e[a]),
                      Array.isArray(r) && ((n = r[1]), (r = e[a] = r[0])),
                      a !== o && ((e[o] = r), delete e[a]),
                      (s = O.cssHooks[o]) && ("expand" in s))
                    )
                      for (a in ((r = s.expand(r)), delete e[o], r)) (a in e) || ((e[a] = r[a]), (t[a] = n));
                    else t[o] = n;
                })(d, l.opts.specialEasing);
                r < s;
                r++
              )
                if ((o = ht.prefilters[r].call(l, e, d, l.opts)))
                  return y(o.stop) && (O._queueHooks(l.elem, l.opts.queue).stop = o.stop.bind(o)), o;
              return (
                O.map(d, vt, l),
                y(l.opts.start) && l.opts.start.call(e, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                O.fx.timer(O.extend(p, { elem: e, anim: l, queue: l.opts.queue })),
                l
              );
            }
            (O.Animation = O.extend(ht, {
              tweeners: {
                "*": [
                  function (e, t) {
                    var a = this.createTween(e, t);
                    return ue(a.elem, e, re.exec(t), a), a;
                  }
                ]
              },
              tweener: function (e, t) {
                y(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
                for (var a, o = 0, n = e.length; o < n; o++) (a = e[o]), (ht.tweeners[a] = ht.tweeners[a] || []), ht.tweeners[a].unshift(t);
              },
              prefilters: [
                function (e, t, a) {
                  var o,
                    n,
                    r,
                    s,
                    i,
                    p,
                    l,
                    d,
                    u = "width" in t || "height" in t,
                    c = this,
                    g = {},
                    v = e.style,
                    h = e.nodeType && de(e),
                    k = X.get(e, "fxshow");
                  for (o in (a.queue ||
                    (null == (s = O._queueHooks(e, "fx")).unqueued &&
                      ((s.unqueued = 0),
                      (i = s.empty.fire),
                      (s.empty.fire = function () {
                        s.unqueued || i();
                      })),
                    s.unqueued++,
                    c.always(function () {
                      c.always(function () {
                        s.unqueued--, O.queue(e, "fx").length || s.empty.fire();
                      });
                    })),
                  t))
                    if (((n = t[o]), lt.test(n))) {
                      if ((delete t[o], (r = r || "toggle" === n), n === (h ? "hide" : "show"))) {
                        if ("show" !== n || !k || void 0 === k[o]) continue;
                        h = !0;
                      }
                      g[o] = (k && k[o]) || O.style(e, o);
                    }
                  if ((p = !O.isEmptyObject(t)) || !O.isEmptyObject(g))
                    for (o in (u &&
                      1 === e.nodeType &&
                      ((a.overflow = [v.overflow, v.overflowX, v.overflowY]),
                      null == (l = k && k.display) && (l = X.get(e, "display")),
                      "none" === (d = O.css(e, "display")) &&
                        (l ? (d = l) : (ve([e], !0), (l = e.style.display || l), (d = O.css(e, "display")), ve([e]))),
                      ("inline" === d || ("inline-block" === d && null != l)) &&
                        "none" === O.css(e, "float") &&
                        (p ||
                          (c.done(function () {
                            v.display = l;
                          }),
                          null == l && ((d = v.display), (l = "none" === d ? "" : d))),
                        (v.display = "inline-block"))),
                    a.overflow &&
                      ((v.overflow = "hidden"),
                      c.always(function () {
                        (v.overflow = a.overflow[0]), (v.overflowX = a.overflow[1]), (v.overflowY = a.overflow[2]);
                      })),
                    (p = !1),
                    g))
                      p ||
                        (k ? "hidden" in k && (h = k.hidden) : (k = X.access(e, "fxshow", { display: l })),
                        r && (k.hidden = !h),
                        h && ve([e], !0),
                        c.done(function () {
                          for (o in (h || ve([e]), X.remove(e, "fxshow"), g)) O.style(e, o, g[o]);
                        })),
                        (p = vt(h ? k[o] : 0, o, c)),
                        o in k || ((k[o] = p.start), h && ((p.end = p.start), (p.start = 0)));
                }
              ],
              prefilter: function (e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
              }
            })),
              (O.speed = function (e, t, a) {
                var o =
                  e && "object" === n(e)
                    ? O.extend({}, e)
                    : { complete: a || (!a && t) || (y(e) && e), duration: e, easing: (a && t) || (t && !y(t) && t) };
                return (
                  O.fx.off
                    ? (o.duration = 0)
                    : "number" != typeof o.duration &&
                      (o.duration in O.fx.speeds ? (o.duration = O.fx.speeds[o.duration]) : (o.duration = O.fx.speeds._default)),
                  (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
                  (o.old = o.complete),
                  (o.complete = function () {
                    y(o.old) && o.old.call(this), o.queue && O.dequeue(this, o.queue);
                  }),
                  o
                );
              }),
              O.fn.extend({
                fadeTo: function (e, t, a, o) {
                  return this.filter(de).css("opacity", 0).show().end().animate({ opacity: t }, e, a, o);
                },
                animate: function (e, t, a, o) {
                  var n = O.isEmptyObject(e),
                    r = O.speed(t, a, o),
                    s = function () {
                      var t = ht(this, O.extend({}, e), r);
                      (n || X.get(this, "finish")) && t.stop(!0);
                    };
                  return (s.finish = s), n || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
                },
                stop: function (e, t, a) {
                  var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(a);
                  };
                  return (
                    "string" != typeof e && ((a = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                      var t = !0,
                        n = null != e && e + "queueHooks",
                        r = O.timers,
                        s = X.get(this);
                      if (n) s[n] && s[n].stop && o(s[n]);
                      else for (n in s) s[n] && s[n].stop && dt.test(n) && o(s[n]);
                      for (n = r.length; n--; )
                        r[n].elem !== this || (null != e && r[n].queue !== e) || (r[n].anim.stop(a), (t = !1), r.splice(n, 1));
                      (!t && a) || O.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        a = X.get(this),
                        o = a[e + "queue"],
                        n = a[e + "queueHooks"],
                        r = O.timers,
                        s = o ? o.length : 0;
                      for (a.finish = !0, O.queue(this, e, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--; )
                        r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                      for (t = 0; t < s; t++) o[t] && o[t].finish && o[t].finish.call(this);
                      delete a.finish;
                    })
                  );
                }
              }),
              O.each(["toggle", "show", "hide"], function (e, t) {
                var a = O.fn[t];
                O.fn[t] = function (e, o, n) {
                  return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(gt(t, !0), e, o, n);
                };
              }),
              O.each(
                {
                  slideDown: gt("show"),
                  slideUp: gt("hide"),
                  slideToggle: gt("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" }
                },
                function (e, t) {
                  O.fn[e] = function (e, a, o) {
                    return this.animate(t, e, a, o);
                  };
                }
              ),
              (O.timers = []),
              (O.fx.tick = function () {
                var e,
                  t = 0,
                  a = O.timers;
                for (it = Date.now(); t < a.length; t++) (e = a[t])() || a[t] !== e || a.splice(t--, 1);
                a.length || O.fx.stop(), (it = void 0);
              }),
              (O.fx.timer = function (e) {
                O.timers.push(e), O.fx.start();
              }),
              (O.fx.interval = 13),
              (O.fx.start = function () {
                pt || ((pt = !0), ut());
              }),
              (O.fx.stop = function () {
                pt = null;
              }),
              (O.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (O.fn.delay = function (e, t) {
                return (
                  (e = (O.fx && O.fx.speeds[e]) || e),
                  (t = t || "fx"),
                  this.queue(t, function (t, o) {
                    var n = a.setTimeout(t, e);
                    o.stop = function () {
                      a.clearTimeout(n);
                    };
                  })
                );
              }),
              (function () {
                var e = w.createElement("input"),
                  t = w.createElement("select").appendChild(w.createElement("option"));
                (e.type = "checkbox"),
                  (m.checkOn = "" !== e.value),
                  (m.optSelected = t.selected),
                  ((e = w.createElement("input")).value = "t"),
                  (e.type = "radio"),
                  (m.radioValue = "t" === e.value);
              })();
            var kt,
              mt = O.expr.attrHandle;
            O.fn.extend({
              attr: function (e, t) {
                return H(this, O.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  O.removeAttr(this, e);
                });
              }
            }),
              O.extend({
                attr: function (e, t, a) {
                  var o,
                    n,
                    r = e.nodeType;
                  if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute
                      ? O.prop(e, t, a)
                      : ((1 === r && O.isXMLDoc(e)) || (n = O.attrHooks[t.toLowerCase()] || (O.expr.match.bool.test(t) ? kt : void 0)),
                        void 0 !== a
                          ? null === a
                            ? void O.removeAttr(e, t)
                            : n && "set" in n && void 0 !== (o = n.set(e, a, t))
                            ? o
                            : (e.setAttribute(t, a + ""), a)
                          : n && "get" in n && null !== (o = n.get(e, t))
                          ? o
                          : null == (o = O.find.attr(e, t))
                          ? void 0
                          : o);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (!m.radioValue && "radio" === t && I(e, "input")) {
                        var a = e.value;
                        return e.setAttribute("type", t), a && (e.value = a), t;
                      }
                    }
                  }
                },
                removeAttr: function (e, t) {
                  var a,
                    o = 0,
                    n = t && t.match(M);
                  if (n && 1 === e.nodeType) for (; (a = n[o++]); ) e.removeAttribute(a);
                }
              }),
              (kt = {
                set: function (e, t, a) {
                  return !1 === t ? O.removeAttr(e, a) : e.setAttribute(a, a), a;
                }
              }),
              O.each(O.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = mt[t] || O.find.attr;
                mt[t] = function (e, t, o) {
                  var n,
                    r,
                    s = t.toLowerCase();
                  return o || ((r = mt[s]), (mt[s] = n), (n = null != a(e, t, o) ? s : null), (mt[s] = r)), n;
                };
              });
            var yt = /^(?:input|select|textarea|button)$/i,
              bt = /^(?:a|area)$/i;
            function wt(e) {
              return (e.match(M) || []).join(" ");
            }
            function ft(e) {
              return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function Pt(e) {
              return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
            }
            O.fn.extend({
              prop: function (e, t) {
                return H(this, O.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[O.propFix[e] || e];
                });
              }
            }),
              O.extend({
                prop: function (e, t, a) {
                  var o,
                    n,
                    r = e.nodeType;
                  if (3 !== r && 8 !== r && 2 !== r)
                    return (
                      (1 === r && O.isXMLDoc(e)) || ((t = O.propFix[t] || t), (n = O.propHooks[t])),
                      void 0 !== a
                        ? n && "set" in n && void 0 !== (o = n.set(e, a, t))
                          ? o
                          : (e[t] = a)
                        : n && "get" in n && null !== (o = n.get(e, t))
                        ? o
                        : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      var t = O.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ? 0 : -1;
                    }
                  }
                },
                propFix: { for: "htmlFor", class: "className" }
              }),
              m.optSelected ||
                (O.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                  },
                  set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                  }
                }),
              O.each(
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
                  O.propFix[this.toLowerCase()] = this;
                }
              ),
              O.fn.extend({
                addClass: function (e) {
                  var t,
                    a,
                    o,
                    n,
                    r,
                    s,
                    i,
                    p = 0;
                  if (y(e))
                    return this.each(function (t) {
                      O(this).addClass(e.call(this, t, ft(this)));
                    });
                  if ((t = Pt(e)).length)
                    for (; (a = this[p++]); )
                      if (((n = ft(a)), (o = 1 === a.nodeType && " " + wt(n) + " "))) {
                        for (s = 0; (r = t[s++]); ) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        n !== (i = wt(o)) && a.setAttribute("class", i);
                      }
                  return this;
                },
                removeClass: function (e) {
                  var t,
                    a,
                    o,
                    n,
                    r,
                    s,
                    i,
                    p = 0;
                  if (y(e))
                    return this.each(function (t) {
                      O(this).removeClass(e.call(this, t, ft(this)));
                    });
                  if (!arguments.length) return this.attr("class", "");
                  if ((t = Pt(e)).length)
                    for (; (a = this[p++]); )
                      if (((n = ft(a)), (o = 1 === a.nodeType && " " + wt(n) + " "))) {
                        for (s = 0; (r = t[s++]); ) for (; o.indexOf(" " + r + " ") > -1; ) o = o.replace(" " + r + " ", " ");
                        n !== (i = wt(o)) && a.setAttribute("class", i);
                      }
                  return this;
                },
                toggleClass: function (e, t) {
                  var a = n(e),
                    o = "string" === a || Array.isArray(e);
                  return "boolean" == typeof t && o
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : y(e)
                    ? this.each(function (a) {
                        O(this).toggleClass(e.call(this, a, ft(this), t), t);
                      })
                    : this.each(function () {
                        var t, n, r, s;
                        if (o) for (n = 0, r = O(this), s = Pt(e); (t = s[n++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                          (void 0 !== e && "boolean" !== a) ||
                            ((t = ft(this)) && X.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""));
                      });
                },
                hasClass: function (e) {
                  var t,
                    a,
                    o = 0;
                  for (t = " " + e + " "; (a = this[o++]); ) if (1 === a.nodeType && (" " + wt(ft(a)) + " ").indexOf(t) > -1) return !0;
                  return !1;
                }
              });
            var St = /\r/g;
            O.fn.extend({
              val: function (e) {
                var t,
                  a,
                  o,
                  n = this[0];
                return arguments.length
                  ? ((o = y(e)),
                    this.each(function (a) {
                      var n;
                      1 === this.nodeType &&
                        (null == (n = o ? e.call(this, a, O(this).val()) : e)
                          ? (n = "")
                          : "number" == typeof n
                          ? (n += "")
                          : Array.isArray(n) &&
                            (n = O.map(n, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t = O.valHooks[this.type] || O.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, n, "value")) ||
                          (this.value = n));
                    }))
                  : n
                  ? (t = O.valHooks[n.type] || O.valHooks[n.nodeName.toLowerCase()]) && "get" in t && void 0 !== (a = t.get(n, "value"))
                    ? a
                    : "string" == typeof (a = n.value)
                    ? a.replace(St, "")
                    : null == a
                    ? ""
                    : a
                  : void 0;
              }
            }),
              O.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = O.find.attr(e, "value");
                      return null != t ? t : wt(O.text(e));
                    }
                  },
                  select: {
                    get: function (e) {
                      var t,
                        a,
                        o,
                        n = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        i = s ? null : [],
                        p = s ? r + 1 : n.length;
                      for (o = r < 0 ? p : s ? r : 0; o < p; o++)
                        if (((a = n[o]).selected || o === r) && !a.disabled && (!a.parentNode.disabled || !I(a.parentNode, "optgroup"))) {
                          if (((t = O(a).val()), s)) return t;
                          i.push(t);
                        }
                      return i;
                    },
                    set: function (e, t) {
                      for (var a, o, n = e.options, r = O.makeArray(t), s = n.length; s--; )
                        ((o = n[s]).selected = O.inArray(O.valHooks.option.get(o), r) > -1) && (a = !0);
                      return a || (e.selectedIndex = -1), r;
                    }
                  }
                }
              }),
              O.each(["radio", "checkbox"], function () {
                (O.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = O.inArray(O(e).val(), t) > -1);
                  }
                }),
                  m.checkOn ||
                    (O.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              (m.focusin = "onfocusin" in a);
            var At = /^(?:focusinfocus|focusoutblur)$/,
              Ot = function (e) {
                e.stopPropagation();
              };
            O.extend(O.event, {
              trigger: function (e, t, o, r) {
                var s,
                  i,
                  p,
                  l,
                  d,
                  u,
                  c,
                  g,
                  h = [o || w],
                  k = v.call(e, "type") ? e.type : e,
                  m = v.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((i = g = p = o = o || w),
                  3 !== o.nodeType &&
                    8 !== o.nodeType &&
                    !At.test(k + O.event.triggered) &&
                    (k.indexOf(".") > -1 && ((m = k.split(".")), (k = m.shift()), m.sort()),
                    (d = k.indexOf(":") < 0 && "on" + k),
                    ((e = e[O.expando] ? e : new O.Event(k, "object" === n(e) && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = m.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = o),
                    (t = null == t ? [e] : O.makeArray(t, [e])),
                    (c = O.event.special[k] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(o, t)))
                ) {
                  if (!r && !c.noBubble && !b(o)) {
                    for (l = c.delegateType || k, At.test(l + k) || (i = i.parentNode); i; i = i.parentNode) h.push(i), (p = i);
                    p === (o.ownerDocument || w) && h.push(p.defaultView || p.parentWindow || a);
                  }
                  for (s = 0; (i = h[s++]) && !e.isPropagationStopped(); )
                    (g = i),
                      (e.type = s > 1 ? l : c.bindType || k),
                      (u = (X.get(i, "events") || Object.create(null))[e.type] && X.get(i, "handle")) && u.apply(i, t),
                      (u = d && i[d]) && u.apply && Z(i) && ((e.result = u.apply(i, t)), !1 === e.result && e.preventDefault());
                  return (
                    (e.type = k),
                    r ||
                      e.isDefaultPrevented() ||
                      (c._default && !1 !== c._default.apply(h.pop(), t)) ||
                      !Z(o) ||
                      (d &&
                        y(o[k]) &&
                        !b(o) &&
                        ((p = o[d]) && (o[d] = null),
                        (O.event.triggered = k),
                        e.isPropagationStopped() && g.addEventListener(k, Ot),
                        o[k](),
                        e.isPropagationStopped() && g.removeEventListener(k, Ot),
                        (O.event.triggered = void 0),
                        p && (o[d] = p))),
                    e.result
                  );
                }
              },
              simulate: function (e, t, a) {
                var o = O.extend(new O.Event(), a, { type: e, isSimulated: !0 });
                O.event.trigger(o, null, t);
              }
            }),
              O.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    O.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var a = this[0];
                  if (a) return O.event.trigger(e, t, a, !0);
                }
              }),
              m.focusin ||
                O.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var a = function (e) {
                    O.event.simulate(t, e.target, O.event.fix(e));
                  };
                  O.event.special[t] = {
                    setup: function () {
                      var o = this.ownerDocument || this.document || this,
                        n = X.access(o, t);
                      n || o.addEventListener(e, a, !0), X.access(o, t, (n || 0) + 1);
                    },
                    teardown: function () {
                      var o = this.ownerDocument || this.document || this,
                        n = X.access(o, t) - 1;
                      n ? X.access(o, t, n) : (o.removeEventListener(e, a, !0), X.remove(o, t));
                    }
                  };
                });
            var xt = a.location,
              Tt = { guid: Date.now() },
              Rt = /\?/;
            O.parseXML = function (e) {
              var t;
              if (!e || "string" != typeof e) return null;
              try {
                t = new a.DOMParser().parseFromString(e, "text/xml");
              } catch (e) {
                t = void 0;
              }
              return (t && !t.getElementsByTagName("parsererror").length) || O.error("Invalid XML: " + e), t;
            };
            var Nt = /\[\]$/,
              Ct = /\r?\n/g,
              It = /^(?:submit|button|image|reset|file)$/i,
              Et = /^(?:input|select|textarea|keygen)/i;
            function Lt(e, t, a, o) {
              var r;
              if (Array.isArray(t))
                O.each(t, function (t, r) {
                  a || Nt.test(e) ? o(e, r) : Lt(e + "[" + ("object" === n(r) && null != r ? t : "") + "]", r, a, o);
                });
              else if (a || "object" !== S(t)) o(e, t);
              else for (r in t) Lt(e + "[" + r + "]", t[r], a, o);
            }
            (O.param = function (e, t) {
              var a,
                o = [],
                n = function (e, t) {
                  var a = y(t) ? t() : t;
                  o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == a ? "" : a);
                };
              if (null == e) return "";
              if (Array.isArray(e) || (e.jquery && !O.isPlainObject(e)))
                O.each(e, function () {
                  n(this.name, this.value);
                });
              else for (a in e) Lt(a, e[a], t, n);
              return o.join("&");
            }),
              O.fn.extend({
                serialize: function () {
                  return O.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = O.prop(this, "elements");
                    return e ? O.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name && !O(this).is(":disabled") && Et.test(this.nodeName) && !It.test(e) && (this.checked || !me.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var a = O(this).val();
                      return null == a
                        ? null
                        : Array.isArray(a)
                        ? O.map(a, function (e) {
                            return { name: t.name, value: e.replace(Ct, "\r\n") };
                          })
                        : { name: t.name, value: a.replace(Ct, "\r\n") };
                    })
                    .get();
                }
              });
            var zt = /%20/g,
              _t = /#.*$/,
              Dt = /([?&])_=[^&]*/,
              Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              jt = /^(?:GET|HEAD)$/,
              Mt = /^\/\//,
              Bt = {},
              Vt = {},
              Kt = "*/".concat("*"),
              Wt = w.createElement("a");
            function Ft(e) {
              return function (t, a) {
                "string" != typeof t && ((a = t), (t = "*"));
                var o,
                  n = 0,
                  r = t.toLowerCase().match(M) || [];
                if (y(a))
                  for (; (o = r[n++]); )
                    "+" === o[0] ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(a)) : (e[o] = e[o] || []).push(a);
              };
            }
            function qt(e, t, a, o) {
              var n = {},
                r = e === Vt;
              function s(i) {
                var p;
                return (
                  (n[i] = !0),
                  O.each(e[i] || [], function (e, i) {
                    var l = i(t, a, o);
                    return "string" != typeof l || r || n[l] ? (r ? !(p = l) : void 0) : (t.dataTypes.unshift(l), s(l), !1);
                  }),
                  p
                );
              }
              return s(t.dataTypes[0]) || (!n["*"] && s("*"));
            }
            function Ht(e, t) {
              var a,
                o,
                n = O.ajaxSettings.flatOptions || {};
              for (a in t) void 0 !== t[a] && ((n[a] ? e : o || (o = {}))[a] = t[a]);
              return o && O.extend(!0, e, o), e;
            }
            (Wt.href = xt.href),
              O.extend({
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
                    "*": Kt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                  },
                  contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                  responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                  converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": O.parseXML },
                  flatOptions: { url: !0, context: !0 }
                },
                ajaxSetup: function (e, t) {
                  return t ? Ht(Ht(e, O.ajaxSettings), t) : Ht(O.ajaxSettings, e);
                },
                ajaxPrefilter: Ft(Bt),
                ajaxTransport: Ft(Vt),
                ajax: function (e, t) {
                  "object" === n(e) && ((t = e), (e = void 0)), (t = t || {});
                  var o,
                    r,
                    s,
                    i,
                    p,
                    l,
                    d,
                    u,
                    c,
                    g,
                    v = O.ajaxSetup({}, t),
                    h = v.context || v,
                    k = v.context && (h.nodeType || h.jquery) ? O(h) : O.event,
                    m = O.Deferred(),
                    y = O.Callbacks("once memory"),
                    b = v.statusCode || {},
                    f = {},
                    P = {},
                    S = "canceled",
                    A = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (d) {
                          if (!i)
                            for (i = {}; (t = Ut.exec(s)); ) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                          t = i[e.toLowerCase() + " "];
                        }
                        return null == t ? null : t.join(", ");
                      },
                      getAllResponseHeaders: function () {
                        return d ? s : null;
                      },
                      setRequestHeader: function (e, t) {
                        return null == d && ((e = P[e.toLowerCase()] = P[e.toLowerCase()] || e), (f[e] = t)), this;
                      },
                      overrideMimeType: function (e) {
                        return null == d && (v.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (d) A.always(e[A.status]);
                          else for (t in e) b[t] = [b[t], e[t]];
                        return this;
                      },
                      abort: function (e) {
                        var t = e || S;
                        return o && o.abort(t), x(0, t), this;
                      }
                    };
                  if (
                    (m.promise(A),
                    (v.url = ((e || v.url || xt.href) + "").replace(Mt, xt.protocol + "//")),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*").toLowerCase().match(M) || [""]),
                    null == v.crossDomain)
                  ) {
                    l = w.createElement("a");
                    try {
                      (l.href = v.url), (l.href = l.href), (v.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host);
                    } catch (e) {
                      v.crossDomain = !0;
                    }
                  }
                  if (
                    (v.data && v.processData && "string" != typeof v.data && (v.data = O.param(v.data, v.traditional)), qt(Bt, v, t, A), d)
                  )
                    return A;
                  for (c in ((u = O.event && v.global) && 0 == O.active++ && O.event.trigger("ajaxStart"),
                  (v.type = v.type.toUpperCase()),
                  (v.hasContent = !jt.test(v.type)),
                  (r = v.url.replace(_t, "")),
                  v.hasContent
                    ? v.data &&
                      v.processData &&
                      0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      (v.data = v.data.replace(zt, "+"))
                    : ((g = v.url.slice(r.length)),
                      v.data && (v.processData || "string" == typeof v.data) && ((r += (Rt.test(r) ? "&" : "?") + v.data), delete v.data),
                      !1 === v.cache && ((r = r.replace(Dt, "$1")), (g = (Rt.test(r) ? "&" : "?") + "_=" + Tt.guid++ + g)),
                      (v.url = r + g)),
                  v.ifModified &&
                    (O.lastModified[r] && A.setRequestHeader("If-Modified-Since", O.lastModified[r]),
                    O.etag[r] && A.setRequestHeader("If-None-Match", O.etag[r])),
                  ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && A.setRequestHeader("Content-Type", v.contentType),
                  A.setRequestHeader(
                    "Accept",
                    v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                      ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Kt + "; q=0.01" : "")
                      : v.accepts["*"]
                  ),
                  v.headers))
                    A.setRequestHeader(c, v.headers[c]);
                  if (v.beforeSend && (!1 === v.beforeSend.call(h, A, v) || d)) return A.abort();
                  if (((S = "abort"), y.add(v.complete), A.done(v.success), A.fail(v.error), (o = qt(Vt, v, t, A)))) {
                    if (((A.readyState = 1), u && k.trigger("ajaxSend", [A, v]), d)) return A;
                    v.async &&
                      v.timeout > 0 &&
                      (p = a.setTimeout(function () {
                        A.abort("timeout");
                      }, v.timeout));
                    try {
                      (d = !1), o.send(f, x);
                    } catch (e) {
                      if (d) throw e;
                      x(-1, e);
                    }
                  } else x(-1, "No Transport");
                  function x(e, t, n, i) {
                    var l,
                      c,
                      g,
                      w,
                      f,
                      P = t;
                    d ||
                      ((d = !0),
                      p && a.clearTimeout(p),
                      (o = void 0),
                      (s = i || ""),
                      (A.readyState = e > 0 ? 4 : 0),
                      (l = (e >= 200 && e < 300) || 304 === e),
                      n &&
                        (w = (function (e, t, a) {
                          for (var o, n, r, s, i = e.contents, p = e.dataTypes; "*" === p[0]; )
                            p.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                          if (o)
                            for (n in i)
                              if (i[n] && i[n].test(o)) {
                                p.unshift(n);
                                break;
                              }
                          if (p[0] in a) r = p[0];
                          else {
                            for (n in a) {
                              if (!p[0] || e.converters[n + " " + p[0]]) {
                                r = n;
                                break;
                              }
                              s || (s = n);
                            }
                            r = r || s;
                          }
                          if (r) return r !== p[0] && p.unshift(r), a[r];
                        })(v, A, n)),
                      !l && O.inArray("script", v.dataTypes) > -1 && (v.converters["text script"] = function () {}),
                      (w = (function (e, t, a, o) {
                        var n,
                          r,
                          s,
                          i,
                          p,
                          l = {},
                          d = e.dataTypes.slice();
                        if (d[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                        for (r = d.shift(); r; )
                          if (
                            (e.responseFields[r] && (a[e.responseFields[r]] = t),
                            !p && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            (p = r),
                            (r = d.shift()))
                          )
                            if ("*" === r) r = p;
                            else if ("*" !== p && p !== r) {
                              if (!(s = l[p + " " + r] || l["* " + r]))
                                for (n in l)
                                  if ((i = n.split(" "))[1] === r && (s = l[p + " " + i[0]] || l["* " + i[0]])) {
                                    !0 === s ? (s = l[n]) : !0 !== l[n] && ((r = i[0]), d.unshift(i[1]));
                                    break;
                                  }
                              if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else
                                  try {
                                    t = s(t);
                                  } catch (e) {
                                    return { state: "parsererror", error: s ? e : "No conversion from " + p + " to " + r };
                                  }
                            }
                        return { state: "success", data: t };
                      })(v, w, A, l)),
                      l
                        ? (v.ifModified &&
                            ((f = A.getResponseHeader("Last-Modified")) && (O.lastModified[r] = f),
                            (f = A.getResponseHeader("etag")) && (O.etag[r] = f)),
                          204 === e || "HEAD" === v.type
                            ? (P = "nocontent")
                            : 304 === e
                            ? (P = "notmodified")
                            : ((P = w.state), (c = w.data), (l = !(g = w.error))))
                        : ((g = P), (!e && P) || ((P = "error"), e < 0 && (e = 0))),
                      (A.status = e),
                      (A.statusText = (t || P) + ""),
                      l ? m.resolveWith(h, [c, P, A]) : m.rejectWith(h, [A, P, g]),
                      A.statusCode(b),
                      (b = void 0),
                      u && k.trigger(l ? "ajaxSuccess" : "ajaxError", [A, v, l ? c : g]),
                      y.fireWith(h, [A, P]),
                      u && (k.trigger("ajaxComplete", [A, v]), --O.active || O.event.trigger("ajaxStop")));
                  }
                  return A;
                },
                getJSON: function (e, t, a) {
                  return O.get(e, t, a, "json");
                },
                getScript: function (e, t) {
                  return O.get(e, void 0, t, "script");
                }
              }),
              O.each(["get", "post"], function (e, t) {
                O[t] = function (e, a, o, n) {
                  return (
                    y(a) && ((n = n || o), (o = a), (a = void 0)),
                    O.ajax(O.extend({ url: e, type: t, dataType: n, data: a, success: o }, O.isPlainObject(e) && e))
                  );
                };
              }),
              O.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
              }),
              (O._evalUrl = function (e, t, a) {
                return O.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { "text script": function () {} },
                  dataFilter: function (e) {
                    O.globalEval(e, t, a);
                  }
                });
              }),
              O.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return (
                    this[0] &&
                      (y(e) && (e = e.call(this[0])),
                      (t = O(e, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function () {
                          for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                          return e;
                        })
                        .append(this)),
                    this
                  );
                },
                wrapInner: function (e) {
                  return y(e)
                    ? this.each(function (t) {
                        O(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = O(this),
                          a = t.contents();
                        a.length ? a.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = y(e);
                  return this.each(function (a) {
                    O(this).wrapAll(t ? e.call(this, a) : e);
                  });
                },
                unwrap: function (e) {
                  return (
                    this.parent(e)
                      .not("body")
                      .each(function () {
                        O(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                }
              }),
              (O.expr.pseudos.hidden = function (e) {
                return !O.expr.pseudos.visible(e);
              }),
              (O.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
              }),
              (O.ajaxSettings.xhr = function () {
                try {
                  return new a.XMLHttpRequest();
                } catch (e) {}
              });
            var Gt = { 0: 200, 1223: 204 },
              Yt = O.ajaxSettings.xhr();
            (m.cors = !!Yt && "withCredentials" in Yt),
              (m.ajax = Yt = !!Yt),
              O.ajaxTransport(function (e) {
                var t, o;
                if (m.cors || (Yt && !e.crossDomain))
                  return {
                    send: function (n, r) {
                      var s,
                        i = e.xhr();
                      if ((i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                        for (s in e.xhrFields) i[s] = e.xhrFields[s];
                      for (s in (e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
                      e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                      n))
                        i.setRequestHeader(s, n[s]);
                      (t = function (e) {
                        return function () {
                          t &&
                            ((t = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                            "abort" === e
                              ? i.abort()
                              : "error" === e
                              ? "number" != typeof i.status
                                ? r(0, "error")
                                : r(i.status, i.statusText)
                              : r(
                                  Gt[i.status] || i.status,
                                  i.statusText,
                                  "text" !== (i.responseType || "text") || "string" != typeof i.responseText
                                    ? { binary: i.response }
                                    : { text: i.responseText },
                                  i.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (i.onload = t()),
                        (o = i.onerror = i.ontimeout = t("error")),
                        void 0 !== i.onabort
                          ? (i.onabort = o)
                          : (i.onreadystatechange = function () {
                              4 === i.readyState &&
                                a.setTimeout(function () {
                                  t && o();
                                });
                            }),
                        (t = t("abort"));
                      try {
                        i.send((e.hasContent && e.data) || null);
                      } catch (e) {
                        if (t) throw e;
                      }
                    },
                    abort: function () {
                      t && t();
                    }
                  };
              }),
              O.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              O.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  "text script": function (e) {
                    return O.globalEval(e), e;
                  }
                }
              }),
              O.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
              }),
              O.ajaxTransport("script", function (e) {
                var t, a;
                if (e.crossDomain || e.scriptAttrs)
                  return {
                    send: function (o, n) {
                      (t = O("<script>")
                        .attr(e.scriptAttrs || {})
                        .prop({ charset: e.scriptCharset, src: e.url })
                        .on(
                          "load error",
                          (a = function (e) {
                            t.remove(), (a = null), e && n("error" === e.type ? 404 : 200, e.type);
                          })
                        )),
                        w.head.appendChild(t[0]);
                    },
                    abort: function () {
                      a && a();
                    }
                  };
              });
            var $t,
              Jt = [],
              Zt = /(=)\?(?=&|$)|\?\?/;
            O.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = Jt.pop() || O.expando + "_" + Tt.guid++;
                return (this[e] = !0), e;
              }
            }),
              O.ajaxPrefilter("json jsonp", function (e, t, o) {
                var n,
                  r,
                  s,
                  i =
                    !1 !== e.jsonp &&
                    (Zt.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                        Zt.test(e.data) &&
                        "data");
                if (i || "jsonp" === e.dataTypes[0])
                  return (
                    (n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    i ? (e[i] = e[i].replace(Zt, "$1" + n)) : !1 !== e.jsonp && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
                    (e.converters["script json"] = function () {
                      return s || O.error(n + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = a[n]),
                    (a[n] = function () {
                      s = arguments;
                    }),
                    o.always(function () {
                      void 0 === r ? O(a).removeProp(n) : (a[n] = r),
                        e[n] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(n)),
                        s && y(r) && r(s[0]),
                        (s = r = void 0);
                    }),
                    "script"
                  );
              }),
              (m.createHTMLDocument =
                ((($t = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"),
                2 === $t.childNodes.length)),
              (O.parseHTML = function (e, t, a) {
                return "string" != typeof e
                  ? []
                  : ("boolean" == typeof t && ((a = t), (t = !1)),
                    t ||
                      (m.createHTMLDocument
                        ? (((o = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href),
                          t.head.appendChild(o))
                        : (t = w)),
                    (r = !a && []),
                    (n = E.exec(e))
                      ? [t.createElement(n[1])]
                      : ((n = Ae([e], t, r)), r && r.length && O(r).remove(), O.merge([], n.childNodes)));
                var o, n, r;
              }),
              (O.fn.load = function (e, t, a) {
                var o,
                  r,
                  s,
                  i = this,
                  p = e.indexOf(" ");
                return (
                  p > -1 && ((o = wt(e.slice(p))), (e = e.slice(0, p))),
                  y(t) ? ((a = t), (t = void 0)) : t && "object" === n(t) && (r = "POST"),
                  i.length > 0 &&
                    O.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                      .done(function (e) {
                        (s = arguments), i.html(o ? O("<div>").append(O.parseHTML(e)).find(o) : e);
                      })
                      .always(
                        a &&
                          function (e, t) {
                            i.each(function () {
                              a.apply(this, s || [e.responseText, t, e]);
                            });
                          }
                      ),
                  this
                );
              }),
              (O.expr.pseudos.animated = function (e) {
                return O.grep(O.timers, function (t) {
                  return e === t.elem;
                }).length;
              }),
              (O.offset = {
                setOffset: function (e, t, a) {
                  var o,
                    n,
                    r,
                    s,
                    i,
                    p,
                    l = O.css(e, "position"),
                    d = O(e),
                    u = {};
                  "static" === l && (e.style.position = "relative"),
                    (i = d.offset()),
                    (r = O.css(e, "top")),
                    (p = O.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && (r + p).indexOf("auto") > -1
                      ? ((s = (o = d.position()).top), (n = o.left))
                      : ((s = parseFloat(r) || 0), (n = parseFloat(p) || 0)),
                    y(t) && (t = t.call(e, a, O.extend({}, i))),
                    null != t.top && (u.top = t.top - i.top + s),
                    null != t.left && (u.left = t.left - i.left + n),
                    "using" in t
                      ? t.using.call(e, u)
                      : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u));
                }
              }),
              O.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          O.offset.setOffset(this, e, t);
                        });
                  var t,
                    a,
                    o = this[0];
                  return o
                    ? o.getClientRects().length
                      ? ((t = o.getBoundingClientRect()),
                        (a = o.ownerDocument.defaultView),
                        { top: t.top + a.pageYOffset, left: t.left + a.pageXOffset })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      a,
                      o = this[0],
                      n = { top: 0, left: 0 };
                    if ("fixed" === O.css(o, "position")) t = o.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(), a = o.ownerDocument, e = o.offsetParent || a.documentElement;
                        e && (e === a.body || e === a.documentElement) && "static" === O.css(e, "position");

                      )
                        e = e.parentNode;
                      e &&
                        e !== o &&
                        1 === e.nodeType &&
                        (((n = O(e).offset()).top += O.css(e, "borderTopWidth", !0)), (n.left += O.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - n.top - O.css(o, "marginTop", !0), left: t.left - n.left - O.css(o, "marginLeft", !0) };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === O.css(e, "position"); ) e = e.offsetParent;
                    return e || ie;
                  });
                }
              }),
              O.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                var a = "pageYOffset" === t;
                O.fn[e] = function (o) {
                  return H(
                    this,
                    function (e, o, n) {
                      var r;
                      if ((b(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[t] : e[o];
                      r ? r.scrollTo(a ? r.pageXOffset : n, a ? n : r.pageYOffset) : (e[o] = n);
                    },
                    e,
                    o,
                    arguments.length
                  );
                };
              }),
              O.each(["top", "left"], function (e, t) {
                O.cssHooks[t] = Ye(m.pixelPosition, function (e, a) {
                  if (a) return (a = Ge(e, t)), We.test(a) ? O(e).position()[t] + "px" : a;
                });
              }),
              O.each({ Height: "height", Width: "width" }, function (e, t) {
                O.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (a, o) {
                  O.fn[o] = function (n, r) {
                    var s = arguments.length && (a || "boolean" != typeof n),
                      i = a || (!0 === n || !0 === r ? "margin" : "border");
                    return H(
                      this,
                      function (t, a, n) {
                        var r;
                        return b(t)
                          ? 0 === o.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                          : void 0 === n
                          ? O.css(t, a, i)
                          : O.style(t, a, n, i);
                      },
                      t,
                      s ? n : void 0,
                      s
                    );
                  };
                });
              }),
              O.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                O.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }),
              O.fn.extend({
                bind: function (e, t, a) {
                  return this.on(e, null, t, a);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, a, o) {
                  return this.on(t, e, a, o);
                },
                undelegate: function (e, t, a) {
                  return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a);
                },
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                }
              }),
              O.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                  " "
                ),
                function (e, t) {
                  O.fn[t] = function (e, a) {
                    return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t);
                  };
                }
              );
            var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (O.proxy = function (e, t) {
              var a, o, n;
              if (("string" == typeof t && ((a = e[t]), (t = e), (e = a)), y(e)))
                return (
                  (o = p.call(arguments, 2)),
                  (n = function () {
                    return e.apply(t || this, o.concat(p.call(arguments)));
                  }),
                  (n.guid = e.guid = e.guid || O.guid++),
                  n
                );
            }),
              (O.holdReady = function (e) {
                e ? O.readyWait++ : O.ready(!0);
              }),
              (O.isArray = Array.isArray),
              (O.parseJSON = JSON.parse),
              (O.nodeName = I),
              (O.isFunction = y),
              (O.isWindow = b),
              (O.camelCase = J),
              (O.type = S),
              (O.now = Date.now),
              (O.isNumeric = function (e) {
                var t = O.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
              }),
              (O.trim = function (e) {
                return null == e ? "" : (e + "").replace(Qt, "");
              }),
              void 0 ===
                (o = function () {
                  return O;
                }.apply(t, [])) || (e.exports = o);
            var Xt = a.jQuery,
              ea = a.$;
            return (
              (O.noConflict = function (e) {
                return a.$ === O && (a.$ = ea), e && a.jQuery === O && (a.jQuery = Xt), O;
              }),
              void 0 === r && (a.jQuery = a.$ = O),
              O
            );
          });
      },
      868: function (e, t, a) {
        var o, n, r;
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            s(e)
          );
        }
        (r = function () {
          "use strict";
          function e(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }
          function t(e, t) {
            for (var a = 0; a < t.length; a++) {
              var o = t[a];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function a(e, a, o) {
            return a && t(e.prototype, a), o && t(e, o), e;
          }
          function o(e, t, a) {
            return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
          }
          function n(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                a.push.apply(a, o);
            }
            return a;
          }
          function r(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? n(Object(a), !0).forEach(function (t) {
                    o(e, t, a[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : n(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                  });
            }
            return e;
          }
          function s(e, t) {
            var a = t.errors,
              o = void 0 === a ? 0 : a,
              n = t.currentLocation,
              r = void 0 === n ? 0 : n,
              s = t.expectedLocation,
              i = void 0 === s ? 0 : s,
              p = t.distance,
              l = void 0 === p ? 100 : p,
              d = o / e.length,
              u = Math.abs(i - r);
            return l ? d + u / l : u ? 1 : d;
          }
          var i = (function () {
              function t(a, o) {
                var n = o.location,
                  r = void 0 === n ? 0 : n,
                  s = o.distance,
                  i = void 0 === s ? 100 : s,
                  p = o.threshold,
                  l = void 0 === p ? 0.6 : p,
                  d = o.isCaseSensitive,
                  u = void 0 !== d && d,
                  c = o.findAllMatches,
                  g = void 0 !== c && c,
                  v = o.minMatchCharLength,
                  h = void 0 === v ? 1 : v,
                  k = o.includeMatches,
                  m = void 0 !== k && k;
                if (
                  (e(this, t),
                  (this.options = {
                    location: r,
                    distance: i,
                    threshold: l,
                    isCaseSensitive: u,
                    findAllMatches: g,
                    includeMatches: m,
                    minMatchCharLength: h
                  }),
                  a.length > 32)
                )
                  throw new Error("Pattern length exceeds max of ".concat(32, "."));
                (this.pattern = u ? a : a.toLowerCase()),
                  (this.patternAlphabet = (function (e) {
                    for (var t = {}, a = e.length, o = 0; o < a; o += 1) t[e.charAt(o)] = 0;
                    for (var n = 0; n < a; n += 1) t[e.charAt(n)] |= 1 << (a - n - 1);
                    return t;
                  })(this.pattern));
              }
              return (
                a(t, [
                  {
                    key: "searchIn",
                    value: function (e) {
                      var t = e.$;
                      return this.searchInString(t);
                    }
                  },
                  {
                    key: "searchInString",
                    value: function (e) {
                      var t = this.options,
                        a = t.isCaseSensitive,
                        o = t.includeMatches;
                      if ((a || (e = e.toLowerCase()), this.pattern === e)) {
                        var n = { isMatch: !0, score: 0 };
                        return o && (n.matchedIndices = [[0, e.length - 1]]), n;
                      }
                      var r = this.options,
                        i = r.location,
                        p = r.distance,
                        l = r.threshold,
                        d = r.findAllMatches,
                        u = r.minMatchCharLength;
                      return (function (e, t, a, o) {
                        for (
                          var n = o.location,
                            r = void 0 === n ? 0 : n,
                            i = o.distance,
                            p = void 0 === i ? 100 : i,
                            l = o.threshold,
                            d = void 0 === l ? 0.6 : l,
                            u = o.findAllMatches,
                            c = void 0 !== u && u,
                            g = o.minMatchCharLength,
                            v = void 0 === g ? 1 : g,
                            h = o.includeMatches,
                            k = void 0 !== h && h,
                            m = t.length,
                            y = e.length,
                            b = Math.max(0, Math.min(r, y)),
                            w = d,
                            f = e.indexOf(t, b),
                            P = [],
                            S = 0;
                          S < y;
                          S += 1
                        )
                          P[S] = 0;
                        if (-1 !== f) {
                          var A = s(t, { errors: 0, currentLocation: f, expectedLocation: b, distance: p });
                          if (((w = Math.min(A, w)), -1 !== (f = e.lastIndexOf(t, b + m)))) {
                            var O = s(t, { errors: 0, currentLocation: f, expectedLocation: b, distance: p });
                            w = Math.min(O, w);
                          }
                        }
                        f = -1;
                        for (var x = [], T = 1, R = m + y, N = 1 << (m <= 31 ? m - 1 : 30), C = 0; C < m; C += 1) {
                          for (var I = 0, E = R; I < E; )
                            s(t, { errors: C, currentLocation: b + E, expectedLocation: b, distance: p }) <= w ? (I = E) : (R = E),
                              (E = Math.floor((R - I) / 2 + I));
                          R = E;
                          var L = Math.max(1, b - E + 1),
                            z = c ? y : Math.min(b + E, y) + m,
                            _ = Array(z + 2);
                          _[z + 1] = (1 << C) - 1;
                          for (var D = z; D >= L; D -= 1) {
                            var U = D - 1,
                              j = a[e.charAt(U)];
                            if (
                              (j && (P[U] = 1),
                              (_[D] = ((_[D + 1] << 1) | 1) & j),
                              0 !== C && (_[D] |= ((x[D + 1] | x[D]) << 1) | 1 | x[D + 1]),
                              _[D] & N && (T = s(t, { errors: C, currentLocation: U, expectedLocation: b, distance: p })) <= w)
                            ) {
                              if (((w = T), (f = U) <= b)) break;
                              L = Math.max(1, 2 * b - f);
                            }
                          }
                          if (s(t, { errors: C + 1, currentLocation: b, expectedLocation: b, distance: p }) > w) break;
                          x = _;
                        }
                        var M = { isMatch: f >= 0, score: T || 0.001 };
                        return (
                          k &&
                            (M.matchedIndices = (function () {
                              for (
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                  a = [],
                                  o = -1,
                                  n = -1,
                                  r = 0,
                                  s = e.length;
                                r < s;
                                r += 1
                              ) {
                                var i = e[r];
                                i && -1 === o ? (o = r) : i || -1 === o || ((n = r - 1) - o + 1 >= t && a.push([o, n]), (o = -1));
                              }
                              return e[r - 1] && r - o >= t && a.push([o, r - 1]), a;
                            })(P, v)),
                          M
                        );
                      })(e, this.pattern, this.patternAlphabet, {
                        location: i,
                        distance: p,
                        threshold: l,
                        findAllMatches: d,
                        minMatchCharLength: u,
                        includeMatches: o
                      });
                    }
                  }
                ]),
                t
              );
            })(),
            p = function (e) {
              return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
            },
            l = function (e) {
              return "string" == typeof e;
            },
            d = function (e) {
              return "number" == typeof e;
            },
            u = function (e) {
              return null != e;
            },
            c = (function () {
              function t(a, o) {
                e(this, t);
                var n = o.isCaseSensitive;
                (this.query = null),
                  (this.options = o),
                  (this._fuzzyCache = {}),
                  l(a) &&
                    a.trim().length > 0 &&
                    ((this.pattern = n ? a : a.toLowerCase()),
                    (this.query = (function (e) {
                      return e.split("|").map(function (e) {
                        return e.trim().split(/ +/g);
                      });
                    })(this.pattern)));
              }
              return (
                a(t, [
                  {
                    key: "searchIn",
                    value: function (e) {
                      var t = this.query;
                      if (!this.query) return { isMatch: !1, score: 1 };
                      var a = e.$;
                      a = this.options.isCaseSensitive ? a : a.toLowerCase();
                      for (var o = !1, n = 0, r = t.length; n < r; n += 1) {
                        var s = t[n],
                          i = null;
                        o = !0;
                        for (var p = 0, l = s.length; p < l; p += 1) {
                          var d = s[p];
                          if (!(i = this._search(d, a)).isMatch) {
                            o = !1;
                            break;
                          }
                        }
                        if (o) return i;
                      }
                      return { isMatch: !1, score: 1 };
                    }
                  },
                  {
                    key: "_search",
                    value: function (e, t) {
                      if (
                        (function (e) {
                          return "'" == e.charAt(0);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substr(1);
                          })(e);
                          return { isMatch: t.indexOf(a) > -1, score: 0 };
                        })(e, t);
                      if (
                        (function (e) {
                          return "^" == e.charAt(0);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substr(1);
                          })(e);
                          return { isMatch: t.startsWith(a), score: 0 };
                        })(e, t);
                      if (
                        (function (e) {
                          return "!" == e.charAt(0) && "^" == e.charAt(1);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substr(2);
                          })(e);
                          return { isMatch: !t.startsWith(a), score: 0 };
                        })(e, t);
                      if (
                        (function (e) {
                          return "!" == e.charAt(0) && "$" == e.charAt(e.length - 1);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substring(1, e.length - 1);
                          })(e);
                          return { isMatch: !t.endsWith(a), score: 0 };
                        })(e, t);
                      if (
                        (function (e) {
                          return "$" == e.charAt(e.length - 1);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substr(0, e.length - 1);
                          })(e);
                          return { isMatch: t.endsWith(a), score: 0 };
                        })(e, t);
                      if (
                        (function (e) {
                          return "!" == e.charAt(0);
                        })(e)
                      )
                        return (function (e, t) {
                          var a = (function (e) {
                            return e.substr(1);
                          })(e);
                          return { isMatch: -1 === t.indexOf(a), score: 0 };
                        })(e, t);
                      var a = this._fuzzyCache[e];
                      return a || ((a = new i(e, this.options)), (this._fuzzyCache[e] = a)), a.searchInString(t);
                    }
                  }
                ]),
                t
              );
            })();
          function g(e, t) {
            var a = t.n,
              o = void 0 === a ? 3 : a,
              n = t.pad,
              r = void 0 === n || n,
              s = t.sort,
              i = void 0 !== s && s,
              p = [];
            if (null == e) return p;
            (e = e.toLowerCase()), r && (e = " ".concat(e, " "));
            var l = e.length - o + 1;
            if (l < 1) return p;
            for (; l--; ) p[l] = e.substr(l, o);
            return (
              i &&
                p.sort(function (e, t) {
                  return e == t ? 0 : e < t ? -1 : 1;
                }),
              p
            );
          }
          var v = (function () {
            function t(a) {
              var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { threshold: 0.6 };
              e(this, t), (this.options = o), (this.patternNgram = g(a, { sort: !0 }));
            }
            return (
              a(t, [
                {
                  key: "searchIn",
                  value: function (e) {
                    var t = e.ng;
                    t || ((t = g(e.$, { sort: !0 })), (e.ng = t));
                    var a,
                      o,
                      n,
                      r =
                        ((n = (function (e, t) {
                          for (var a = [], o = 0, n = 0; o < e.length && n < t.length; ) {
                            var r = e[o],
                              s = t[n];
                            r < s ? (a.push(r), (o += 1)) : s < r ? (a.push(s), (n += 1)) : (a.push(s), (o += 1), (n += 1));
                          }
                          for (; o < e.length; ) a.push(e[o]), (o += 1);
                          for (; n < t.length; ) a.push(t[n]), (n += 1);
                          return a;
                        })((a = this.patternNgram), (o = t))),
                        1 -
                          (function (e, t) {
                            for (var a = [], o = 0, n = 0; o < e.length && n < t.length; ) {
                              var r = e[o],
                                s = t[n];
                              r == s ? (a.push(r), (o += 1), (n += 1)) : r < s ? (o += 1) : (r > s || (o += 1), (n += 1));
                            }
                            return a;
                          })(a, o).length /
                            n.length),
                      s = r < this.options.threshold;
                    return { score: s ? r : 1, isMatch: s };
                  }
                }
              ]),
              t
            );
          })();
          function h(e, t) {
            var a = [],
              o = !1;
            return (
              (function e(t, n) {
                if (n) {
                  var r = n.indexOf("."),
                    s = n,
                    i = null;
                  -1 !== r && ((s = n.slice(0, r)), (i = n.slice(r + 1)));
                  var c = t[s];
                  if (u(c))
                    if (i || (!l(c) && !d(c)))
                      if (p(c)) {
                        o = !0;
                        for (var g = 0, v = c.length; g < v; g += 1) e(c[g], i);
                      } else i && e(c, i);
                    else
                      a.push(
                        (function (e) {
                          return null == e
                            ? ""
                            : (function (e) {
                                if ("string" == typeof e) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                              })(e);
                        })(c)
                      );
                } else a.push(t);
              })(e, t),
              o ? a : a[0]
            );
          }
          function k(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              o = a.getFn,
              n = void 0 === o ? h : o,
              r = a.ngrams,
              s = void 0 !== r && r,
              i = [];
            if (l(t[0]))
              for (var d = 0, c = t.length; d < c; d += 1) {
                var v = t[d];
                if (u(v)) {
                  var k = { $: v, idx: d };
                  s && (k.ng = g(v, { sort: !0 })), i.push(k);
                }
              }
            else
              for (var m = e.length, y = 0, b = t.length; y < b; y += 1) {
                for (var w = t[y], f = { idx: y, $: {} }, P = 0; P < m; P += 1) {
                  var S = e[P],
                    A = n(w, S);
                  if (u(A))
                    if (p(A)) {
                      for (var O = [], x = [{ arrayIndex: -1, value: A }]; x.length; ) {
                        var T = x.pop(),
                          R = T.arrayIndex,
                          N = T.value;
                        if (u(N))
                          if (l(N)) {
                            var C = { $: N, idx: R };
                            s && (C.ng = g(N, { sort: !0 })), O.push(C);
                          } else if (p(N)) for (var I = 0, E = N.length; I < E; I += 1) x.push({ arrayIndex: I, value: N[I] });
                      }
                      f.$[S] = O;
                    } else {
                      var L = { $: A };
                      s && (L.ng = g(A, { sort: !0 })), (f.$[S] = L);
                    }
                }
                i.push(f);
              }
            return i;
          }
          var m = (function () {
            function t(a) {
              if ((e(this, t), (this._keys = {}), (this._keyNames = []), (this._length = a.length), a.length && l(a[0])))
                for (var o = 0; o < this._length; o += 1) {
                  var n = a[o];
                  (this._keys[n] = { weight: 1 }), this._keyNames.push(n);
                }
              else {
                for (var r = 0, s = 0; s < this._length; s += 1) {
                  var i = a[s];
                  if (!Object.prototype.hasOwnProperty.call(i, "name")) throw new Error('Missing "name" property in key object');
                  var p = i.name;
                  if ((this._keyNames.push(p), !Object.prototype.hasOwnProperty.call(i, "weight")))
                    throw new Error('Missing "weight" property in key object');
                  var d = i.weight;
                  if (d <= 0 || d >= 1) throw new Error('"weight" property in key must be in the range of (0, 1)');
                  (this._keys[p] = { weight: d }), (r += d);
                }
                for (var u = 0; u < this._length; u += 1) {
                  var c = this._keyNames[u],
                    g = this._keys[c].weight;
                  this._keys[c].weight = g / r;
                }
              }
            }
            return (
              a(t, [
                {
                  key: "get",
                  value: function (e, t) {
                    return this._keys[e] ? this._keys[e][t] : -1;
                  }
                },
                {
                  key: "keys",
                  value: function () {
                    return this._keyNames;
                  }
                },
                {
                  key: "count",
                  value: function () {
                    return this._length;
                  }
                },
                {
                  key: "toJSON",
                  value: function () {
                    return JSON.stringify(this._keys);
                  }
                }
              ]),
              t
            );
          })();
          function y(e, t) {
            var a = e.matches;
            if (((t.matches = []), u(a)))
              for (var o = 0, n = a.length; o < n; o += 1) {
                var r = a[o];
                if (u(r.indices) && 0 !== r.indices.length) {
                  var s = { indices: r.indices, value: r.value };
                  r.key && (s.key = r.key), r.idx > -1 && (s.refIndex = r.idx), t.matches.push(s);
                }
              }
          }
          function b(e, t) {
            t.score = e.score;
          }
          var w = r(
              {},
              {
                isCaseSensitive: !1,
                findAllMatches: !1,
                includeMatches: !1,
                includeScore: !1,
                keys: [],
                minMatchCharLength: 1,
                shouldSort: !0,
                sortFn: function (e, t) {
                  return e.score - t.score;
                }
              },
              {},
              { location: 0, threshold: 0.6, distance: 100 },
              {},
              { useExtendedSearch: !1, getFn: h }
            ),
            f = (function () {
              function t(a) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                e(this, t),
                  (this.options = r({}, w, {}, o)),
                  (this.options.isCaseSensitive = o.caseSensitive),
                  delete this.options.caseSensitive,
                  this._processKeys(this.options.keys),
                  this.setCollection(a, n);
              }
              return (
                a(t, [
                  {
                    key: "setCollection",
                    value: function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                      (this.list = e), (this.listIsStringArray = l(e[0])), t ? this.setIndex(t) : this.setIndex(this._createIndex());
                    }
                  },
                  {
                    key: "setIndex",
                    value: function (e) {
                      this._indexedList = e;
                    }
                  },
                  {
                    key: "_processKeys",
                    value: function (e) {
                      this._keyStore = new m(e);
                    }
                  },
                  {
                    key: "_createIndex",
                    value: function () {
                      return k(this._keyStore.keys(), this.list, { getFn: this.options.getFn });
                    }
                  },
                  {
                    key: "search",
                    value: function (e) {
                      var t,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 },
                        o = this.options,
                        n = o.useExtendedSearch,
                        r = o.shouldSort;
                      t = n ? new c(e, this.options) : e.length > 32 ? new v(e, this.options) : new i(e, this.options);
                      var s = this._searchUsing(t);
                      return this._computeScore(s), r && this._sort(s), a.limit && d(a.limit) && (s = s.slice(0, a.limit)), this._format(s);
                    }
                  },
                  {
                    key: "_searchUsing",
                    value: function (e) {
                      var t = this._indexedList,
                        a = [],
                        o = this.options.includeMatches;
                      if (this.listIsStringArray)
                        for (var n = 0, r = t.length; n < r; n += 1) {
                          var s = t[n],
                            i = s.$,
                            l = s.idx;
                          if (u(i)) {
                            var d = e.searchIn(s),
                              c = d.isMatch,
                              g = d.score;
                            if (c) {
                              var v = { score: g, value: i };
                              o && (v.indices = d.matchedIndices), a.push({ item: i, idx: l, matches: [v] });
                            }
                          }
                        }
                      else
                        for (var h = this._keyStore.keys(), k = this._keyStore.count(), m = 0, y = t.length; m < y; m += 1) {
                          var b = t[m],
                            w = b.$,
                            f = b.idx;
                          if (u(w)) {
                            for (var P = [], S = 0; S < k; S += 1) {
                              var A = h[S],
                                O = w[A];
                              if (u(O))
                                if (p(O))
                                  for (var x = 0, T = O.length; x < T; x += 1) {
                                    var R = O[x],
                                      N = R.$,
                                      C = R.idx;
                                    if (u(N)) {
                                      var I = e.searchIn(R),
                                        E = I.isMatch,
                                        L = I.score;
                                      if (E) {
                                        var z = { score: L, key: A, value: N, idx: C };
                                        o && (z.indices = I.matchedIndices), P.push(z);
                                      }
                                    }
                                  }
                                else {
                                  var _ = O.$,
                                    D = e.searchIn(O),
                                    U = D.isMatch,
                                    j = D.score;
                                  if (!U) continue;
                                  var M = { score: j, key: A, value: _ };
                                  o && (M.indices = D.matchedIndices), P.push(M);
                                }
                            }
                            P.length && a.push({ idx: f, item: w, matches: P });
                          }
                        }
                      return a;
                    }
                  },
                  {
                    key: "_computeScore",
                    value: function (e) {
                      for (var t = 0, a = e.length; t < a; t += 1) {
                        for (var o = e[t], n = o.matches, r = n.length, s = 1, i = 0; i < r; i += 1) {
                          var p = n[i],
                            l = p.key,
                            d = this._keyStore.get(l, "weight"),
                            u = d > -1 ? d : 1,
                            c = 0 === p.score && d > -1 ? Number.EPSILON : p.score;
                          s *= Math.pow(c, u);
                        }
                        o.score = s;
                      }
                    }
                  },
                  {
                    key: "_sort",
                    value: function (e) {
                      e.sort(this.options.sortFn);
                    }
                  },
                  {
                    key: "_format",
                    value: function (e) {
                      var t = [],
                        a = this.options,
                        o = a.includeMatches,
                        n = a.includeScore,
                        r = [];
                      o && r.push(y), n && r.push(b);
                      for (var s = 0, i = e.length; s < i; s += 1) {
                        var p = e[s],
                          l = p.idx,
                          d = { item: this.list[l], refIndex: l };
                        if (r.length) for (var u = 0, c = r.length; u < c; u += 1) r[u](p, d);
                        t.push(d);
                      }
                      return t;
                    }
                  }
                ]),
                t
              );
            })();
          return (f.version = "5.1.0"), (f.createIndex = k), (f.defaultOptions = w), f;
        }),
          "object" == s(t) ? (e.exports = r()) : void 0 === (n = "function" == typeof (o = r) ? o.call(t, a, t, e) : o) || (e.exports = n);
      },
      452: function (e, t, a) {
        var o = a(750);
        o.fn.extend({
          toggleForceBlock: function (e) {
            if (void 0 === e) {
              var t = this.css("display");
              "" === t || "none" === t ? this.css("display", "block") : this.css("display", "none");
            } else e ? this.css("display", "block") : this.css("display", "none");
          },
          inputFilter: function (e) {
            this.on("input keydown keyup drag", function () {
              e(this.value)
                ? ((this.oldValue = this.value), (this.oldSelectionStart = this.selectionStart), (this.oldSelectionEnd = this.selectionEnd))
                : this.hasOwnProperty("oldValue")
                ? ((this.value = this.oldValue), this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd))
                : (this.value = "");
            });
          }
        }),
          (e.exports = o);
      },
      465: function (e) {
        var t = {
          format: function (e, t) {
            return e.replace(/\{(\d+)\}/g, function (e, a) {
              return void 0 !== t[a] ? t[a] : e;
            });
          },
          hashCode: function (e) {
            if ("string" != typeof e) return "not string";
            var t = 0;
            if (0 === e.length) return t;
            for (var a = 0; a < e.length; a++) (t = (t << 5) - t + e.charCodeAt(a)), (t &= t);
            return t;
          }
        };
        e.exports = t;
      },
      490: function (e, t, a) {
        var o = a(710);
        (o.BrowserUtil = (function () {
          var e = {},
            t = /Edge\/\d+/i,
            a = /firefox\/\d+(?!.*seamonkey\/\d+)/i;
          function n(e) {
            return !!(o.window && o.window.navigator && o.window.navigator.userAgent && o.window.navigator.userAgent.match(e));
          }
          return (
            (e.isEdge = function () {
              return n(t);
            }),
            (e.isFirefox = function () {
              return n(a);
            }),
            (e.isSafariAppExtension = function () {
              var e = "undefined" != typeof safari ? safari : null;
              if (!e) return !1;
              var t = e.self && e.self.tab && e.self.tab.dispatchMessage,
                a = e.extension && e.extension.dispatchMessage;
              return !t && !!a;
            }),
            (e.getUserAgent = function () {
              return o.window && o.window.navigator && o.window.navigator.userAgent ? o.window.navigator.userAgent : "unknown userAgent";
            }),
            (e.isMac = function () {
              if (o.window && o.window.navigator && o.window.navigator.platform) return o.window.navigator.platform.indexOf("Mac") > -1;
            }),
            e
          );
        })()),
          (e.exports = o.BrowserUtil);
      },
      406: function (e, t, a) {
        var o = a(710);
        (o.Config = {
          enabledLogging: !1,
          allowOktaHttp: !1,
          buildType: "prodBuild",
          startrecordingLogs: !1,
          onboardingLaunchNewTab: !0,
          NTEFlag: !1,
          allowLocalHostOrServer: !1
        }),
          (e.exports = o.Config);
      },
      560: function (e, t, a) {
        var o = a(710);
        (o.Constants = (function () {
          function e(e, t, a, o) {
            ((o = o || {}).key = a), (o.type = t), (e.Storage[a] = o);
          }
          var t = o._okta.each,
            a = {
              QuickAccessTabIdPrefix: "tab_quick_access_apps_",
              ModalCloseAccessKey: "x",
              ModalAppNameMaxLen: 100,
              ModalUsernameMaxLen: 100,
              PendoEventTrackUrl: "https://app.pendo.io/data/track",
              PendoEventTrackUrlDebug: "https://rain.okta1.com:1802/data/track",
              StoreUrls: {
                chrome: "https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb",
                firefox: "https://addons.mozilla.org/firefox/addon/okta-browser-plugin/",
                safari: "https://apps.apple.com/app/okta-extension-app/id1439967473",
                "edge-chromium": "https://microsoftedge.microsoft.com/addons/detail/okta-browser-plugin/ncoafaeidnkeafiehpkfoeklhajkpgij"
              },
              PluginSurveyPath: "/plugin/okta-extension-feedback",
              BrowserType: {
                CHROME: "chrome",
                FIREFOX: "firefox",
                EDGE_CHROMIUM: "edge-chromium",
                SAFARI: "safari",
                SAFARI_WEBEXT: "safari-webext",
                OKTA_MOBILE: "OktaMobile"
              },
              Banners: { RATINGS: "ratings", NEWTAB: "newtab" },
              LogoOptions: { ICON_MIN_SIZE: 16, ICON_MAX_SIZE: 300, ICON_DATA_MAX_SIZE: 1048576, ICON_DEFAULT_SIZE: 74 },
              AuthOptions: {
                PLUGIN_CLIENT_ID: "okta.ee074f99-1b5b-513e-8ea6-f8beeab8dbb9",
                DASHBOARD_CLIENT_ID: "okta.2b1959c8-bcc0-56eb-a589-cfcfb7422f26",
                SCOPES: [
                  "openid",
                  "profile",
                  "email",
                  "okta.users.read.self",
                  "okta.internal.enduser.read",
                  "okta.internal.enduser.manage",
                  "okta.enduser.dashboard.read",
                  "okta.enduser.dashboard.manage"
                ],
                OKTA_PERSONAL_ADDITIONAL_SCOPES: [
                  "groups",
                  "okta.personal.manage",
                  "okta.personal.read",
                  "okta.personal.authenticator.manage",
                  "okta.personal.authenticator.read"
                ],
                DEFAULT_MAX_CLOCK_SKEW: 300,
                PKCE: { DEFAULT_CODE_CHALLENGE_METHOD: "S256", MIN_VERIFIER_LENGTH: 43, MAX_VERIFIER_LENGTH: 128 },
                TIMEOUT: 6e4
              },
              CookieOptions: { SID_COOKIE_NAME: "sid", DT_COOKIE_NAME: "DT", IDX_COOKIE_NAME: "idx" },
              Time: { OneDay: 864e5 },
              MinFirstPartyAppVersion: "5.43.0",
              Storage: {},
              StorageOktaAccountAllowListKey: String.fromCharCode.apply(
                null,
                [79, 75, 84, 65, 95, 65, 67, 67, 79, 85, 78, 84, 95, 87, 72, 73, 84, 69, 95, 76, 73, 83, 84]
              ),
              InlineEvents: {
                IFRAME_EVENT: "okta-iframe",
                CONTENT_EVENT: "okta-iframe-content",
                ACTIONS: {
                  SET_HEIGHT: "setHeight",
                  FILL_NEW_PWD: "fillNewPwd",
                  FILL_NEW_PWD_DONE: "fillNewPwdDone",
                  FILL_NEW_CREDS: "fillNewCreds",
                  SHOW_CONTENT: "showContent",
                  REFRESH: "refresh",
                  CLOSE_ALL_VIEWS: "closeAllViews"
                }
              },
              PopoverEvents: {
                GEN_PWD_MODULE: "popover-gen-pwd",
                ACTIONS: { PWD_EXIST_CHECK: "passwordExistCheck", FILL_NEW_PWD: "fillNewPwd" }
              },
              ModalEvents: { IFRAME_MODULE: "modal-iframe", ACTIONS: { PROMPT_AUTOFILL: "promptAutoFill", AUTOFILL: "autoFill" } },
              SamlTesterEvents: {
                SAML_TESTER_MODULE: "saml-tester",
                ACTIONS: {
                  GET_STATUS: "getStatus",
                  RUN_TEST_CASE: "runTestCase",
                  GET_TEST_RESULTS: "getTestResults",
                  CLEAR_TEST_RESULTS: "clearTestResults",
                  PROCESS_USER_INPUT: "processUserInput",
                  SIGN_IN_TO_OKTA: "signInToOkta",
                  SET_SECURITY_ANSWER: "setSecurityAnswer"
                }
              },
              SamlTester: { APP_EMBED_LINK_REGEX: "[^/]+/home/([^/]+)/([^/]+)/[^/]+" },
              OnTheFlyAppTemplateName: "template_onthefly",
              ScriptErrorType: { DoAutoLoginOnSignup: "doAutoLoginOnSignup", Unknown: "unknown" },
              OktaOfflineLoginPopupSavePassword: "oktaPopupLoginSavePassword",
              OktaOfflineAutofillFlow: "oktaPopupLogin",
              OktaPersonalOrgIds: ["00o13xfwhqWdGOe7i417", "00o3qqiw0vSCIwu8I0g7"],
              Auth0: {
                TopLevelDomain: "auth0.com",
                POktaIdPDomain: ["trexcloud-id-okta.eu.auth0.com"],
                SignInPathPrefix: "/u/login",
                SignUpPathPrefix: "/u/signup",
                POktaConnection: "okta-personal-social-connection"
              },
              PluginSocialAppID: "fc6496c3-f79b-5588-b02b-f4f7fae6dc08",
              API: { FormCredsPageSize: 30 },
              SignOnModeType: {
                SecurePasswordStore: "SECURE_PASSWORD_STORE",
                BrowserPlugin: "BROWSER_PLUGIN",
                BasicAuth: "BASIC_AUTH",
                AutoLogin: "AUTO_LOGIN"
              }
            };
          return (
            t(
              [
                ["POKTA_INDEX"],
                ["SESSION_COOKIE", { multiAccount: !0 }],
                ["SESSION_CUSTOM_CAN_POST", { def: !0, multiAccount: !0 }],
                ["AUTH_TOKEN", { def: {}, multiAccount: !0 }],
                ["SESSION_COOKIE_BEFORE_CONSENT"],
                ["SESSION_WAITING_FOR_TABS", { def: 0, name: "WaitingForTabs" }],
                ["SESSION_POPUP_VERIFIED", { name: "PopupVerified" }],
                ["POPOVER_OPENED_BY"],
                ["PERSONAL_PIN", { def: null, multiAccount: !0 }],
                ["IS_VAULT_ENROLLED", { def: null, multiAccount: !0 }],
                ["OIN_TEST_RESULTS_STORE", { def: null }],
                ["XSRF_TOKEN", { def: null }]
              ],
              function (t) {
                e(a, "Session", t[0], t[1]);
              }
            ),
            t(
              [
                ["FORM_SITES_NO_PW", { multiAccount: !0 }],
                ["AUTH_SITES", { multiAccount: !0 }],
                ["SOCIAL_SITES", { multiAccount: !0 }],
                ["OKTA_DOMAIN", { multiAccount: !0 }],
                ["TABS", { def: null, multiAccount: !0 }],
                ["MONITORED_SITES", { def: [], multiAccount: !0 }],
                ["ENDUSER_HOME", { def: {}, multiAccount: !0 }],
                ["WORKSPACES", { def: null, multiAccount: !0 }],
                ["NEW_TAB", { def: {}, multiAccount: !0 }],
                ["PLUGIN_SETTINGS", { def: { override: {}, orgSettings: {} }, multiAccount: !0 }],
                ["UI_VERSION", { def: null, name: "UIVersion", multiAccount: !0 }],
                ["SELF_SERVICE_SITES", { multiAccount: !0 }],
                ["LAST_SELF_SERVICE_SITES_CHECK", { multiAccount: !0 }],
                ["MY_PAGES_CACHE", { multiAccount: !0 }],
                ["DATA_VAULT_KEY_PAIR", { multiAccount: !0 }],
                ["VAULT_STATUS", { def: {} }],
                [
                  "DBG_PLUGIN_SETTINGS",
                  { def: { enableOnTheFlyAppAddition: !0, enableStrongPasswordSuggestion: !0 }, name: "DBGPluginSettings" }
                ],
                ["AUTH_STATUS", { def: {} }],
                ["TRACKED_FIRST_TIME_ACTIONS", { def: {} }],
                ["ACK_TIMES", { def: {} }],
                [a.StorageOktaAccountAllowListKey, { def: [], name: "AllowListedOktaAccounts" }],
                ["TRUSTED_OKTA_DOMAIN_LIST", { def: {} }],
                ["IGNORE_LIST", { def: {} }],
                ["SELF_SERVICE_SITES_IGNORE_LIST", { def: {} }],
                ["DOMAINS", { def: {} }],
                ["CONTENT_SCRIPT", { def: null }],
                ["CONTENT_STRINGS", { def: null }],
                ["INJECTION_COUNT", { def: 0 }],
                ["OKTA_EXTENSION_LOGS", { name: "ExtensionLogs", def: { log: [], stopRecording: {} } }],
                ["EXTENSION_LOG_TIMER", { name: "ExtensionLogStartTimer" }],
                ["OKTA_ACCOUNT_UPDATE_IN_PROGRESS", { name: "OktaAccountsUpdateInProgress" }],
                ["DISABLE_ON_THE_FLY_APP_ADDITION"],
                ["DISABLE_GENERATE_PASSWORD"],
                ["ENABLE_SUPPRESS_PASSWORD"],
                ["ENDUSER_HOME_PENDING_CONSENT", { def: {} }],
                ["VERSION"],
                ["LAST_HEALTH_CHECK"],
                ["LAST_PLUGIN_STATE_REFRESH"],
                ["LAST_ERROR"],
                ["LAST_APP_SEARCH_QUERY"],
                ["OKTA_DOMAIN_PENDING_CONSENT"],
                ["USE_DOMAIN_MAPPING"],
                ["ONBOARDING_FLOW"],
                ["PENDO_ONBOARDING_DATA", { def: null }],
                ["POKTA_EXPERIENCE_SHOWED"],
                ["RATINGS", { def: {} }],
                ["USER_PINNED_ON_TOOLBAR", { def: !1 }],
                ["SECRET_KEY", { def: null, multiAccount: !0 }],
                ["HAS_POKTA_MONOLITH_VAULT", { def: null, multiAccount: !0 }],
                ["POKTA_CORE_SERVICE_VAULT_INPUT_FORMAT", { def: null, multiAccount: !0 }]
              ],
              function (t) {
                e(a, "Persistent", t[0], t[1]);
              }
            ),
            t(
              [
                ["PROMPT_SAVE_PASSWORD", { def: null }],
                ["CURRENT_SELF_SERVICE_APP_CREDENTIALS", { def: null }],
                ["CURRENT_FAST_IDP_APP", { def: null }],
                ["CURRENT_FLOW", { def: null }],
                ["SAML_TESTER", { def: null }],
                ["CURRENT_FLOW_APP_INSTANCE_ID", { def: null }],
                ["API_TRACKER", { def: {}, name: "ApiCalled" }],
                ["MISMATCH_URLS_INFO", { def: null, name: "MismatchUrlInfo" }],
                ["PKCE_META", { def: {}, name: "PKCEMeta" }],
                ["CURRENT_SPS"],
                ["TASKS"]
              ],
              function (t) {
                e(a, "Tab", t[0], t[1]);
              }
            ),
            a
          );
        })()),
          (e.exports = o.Constants);
      },
      87: function (e, t, a) {
        var o = a(710);
        (o.LastError = function (e, t) {
          var a = {},
            n = o._okta,
            r = n.noop,
            s = n.partial,
            i = o.fn.settings.ifPluginVersionSupported(t, "5.48.0");
          return (
            (a.set = function (a, o) {
              return e
                .setLastError({ message: a, description: o })
                .then(i(s(t.updateBadge, { text: "!", color: "red" })))
                .fail(r);
            }),
            (a.reset = function () {
              return e.setLastError(null).then(t.resetBadge);
            }),
            a
          );
        }),
          (e.exports = o.LastError);
      },
      745: function (e, t, a) {
        var o = a(710);
        (o.Modal.Popup = function (e) {
          var t = o.fn.promises.pollP,
            a = o._okta.identity,
            n = {
              open: function (o, n, r) {
                var s = open("", r, ["toolbar=0", "width=500", "height=" + n, "location=1", "menubar=0", "scrollbars=yes"].join(","));
                return e
                  .setPopupVerified(!1)
                  .then(e.getOktaDomain)
                  .then(function (e) {
                    s.location = e + o;
                  })
                  .then(function () {
                    return t(e.getPopupVerified, a, 1e3);
                  });
              }
            };
          return n;
        }),
          (e.exports = o.Modal.Popup);
      },
      247: function (e, t, a) {
        var o = a(710);
        (o.OktaPersonalAPIAdapter = function (e, t) {
          var a = o.Q,
            n = {},
            r = o.fn.clientSideEncryption,
            s = o.Constants;
          function i(t, o, n) {
            for (var s = [], i = 0; i < t.tabItems.length; i++) {
              var l = t.tabItems[i];
              s.push(p(l, o, n));
            }
            return a.all(s).then(function (a) {
              return r.decryptTabBlobWithPrivateKey(t.metadata, e, o).then(function (e) {
                return {
                  created: "",
                  id: t.id,
                  label: e.label,
                  lastUpdated: "",
                  sortOrder: t.sortOrder,
                  _links: {},
                  _embedded: { items: a }
                };
              });
            });
          }
          function p(t, o, n) {
            try {
              return a
                .all([
                  r.decryptBlobWithPrivateKey(t.metadata, t.metadataKey, e, o),
                  r.decryptBlobWithPrivateKey(t.content, t.contentKey, e, o)
                ])
                .spread(function (e, a) {
                  return {
                    id: t.id,
                    resourceType: "urn:okta:resource:appLink",
                    sortOrder: t.order,
                    _embedded: {
                      resource: {
                        key: t.id,
                        adminSetsAppNotes: !1,
                        adminSetsCredentials: !1,
                        appAssignedDate: "",
                        appAssignmentId: t.artifactId,
                        appDisplayName: e.appName,
                        appInstanceId: t.artifactId,
                        appInstancePersonal: !0,
                        autoLaunch: !1,
                        credentialsSetup: !0,
                        hiddenInLegacyUI: !0,
                        label: e.appLabel,
                        linkUrl: n + "/okta-personal-app/" + t.artifactId + "/launch",
                        loginRedirectUrl: a.loginUrl,
                        appGlobalId: e.appGlobalId,
                        locked: !1,
                        logoUrl: e.logoUrl,
                        pluginRequired: !0,
                        resetPassword: !1,
                        sharingCredentials: !1,
                        unSupportedClients: [],
                        vpnRequired: !1,
                        metadata: t.metadata,
                        metadataKey: t.metadataKey,
                        content: t.content,
                        contentKey: t.contentKey,
                        ownerId: t.ownerId
                      }
                    }
                  };
                });
            } catch (e) {
              Log.warn("OktaPersonalAPIAdapter::decryptAppData: Error while decrypting app data: " + e);
            }
          }
          function l(e, t) {
            var a = "";
            try {
              var o = new URL(e);
              if (!o.host) throw new Error("Empty host in " + e);
              (a += "^"),
                (a += o.protocol),
                (a += "//"),
                (a += o.hostname.replace(/\./g, "\\.")),
                o.port && (("http:" === o.protocol && 80 !== o.port) || ("https:" === o.protocol && 443 !== o.port)) && (a += ":" + o.port),
                (a += "(?:$|/)");
            } catch (e) {
              console.log('Application or Sign Up URL "${url}" malformed for app id ' + t);
            }
            return a;
          }
          return (
            (n.decryptTabsData = function (o) {
              var n = r.getClientSideEncryptionOptions().asymmetricKeyOptions;
              return (
                (n.usage = ["decrypt"]),
                a.all([r.tryImportClientSideEncryptionKey("privateKey", n, e, t), t.getOktaDomain()]).spread(function (e, t) {
                  return (function (e, t, o) {
                    for (var n = [], r = 0; r < e.tabs.length; r++) {
                      var s = e.tabs[r];
                      n.push(i(s, t, o));
                    }
                    return a.all(n);
                  })(o, e, t).then(function (e) {
                    var t = o.recentlyUsedTabItems;
                    if (t && t.length > 0) {
                      var a = (function (e, t) {
                          if (e.length < 1) return [];
                          var a = t.flatMap(function (e) {
                            return e._embedded.items;
                          });
                          return e
                            .map(function (e) {
                              return a.find(function (t) {
                                return t.id === e;
                              });
                            })
                            .map(function (e) {
                              return JSON.parse(JSON.stringify(e));
                            });
                        })(t, e),
                        n = (function (e) {
                          return {
                            created: "",
                            id: s.QuickAccessTabIdPrefix + "recently",
                            label: "Recently Used",
                            lastUpdated: "",
                            sortOrder: -1,
                            _links: {},
                            _embedded: { items: e }
                          };
                        })(a);
                      e.push(n);
                    }
                    return e;
                  });
                })
              );
            }),
            (n.generateSitesData = function (e) {
              return t.getOktaDomain().then(function (o) {
                if (e && e.appLinks) {
                  var n = e.appLinks,
                    r = [],
                    s = [];
                  return (
                    n &&
                      n.length > 0 &&
                      n.forEach(function (e) {
                        r.push({
                          callbackURI: "/api/plugin/2/okta-personal-app/" + e.appInstanceId + "/script/flow/status",
                          progressMessage: "Signing in to " + e.appDisplayName,
                          scriptURI: "/api/plugin/2/globalAppId/" + e.appGlobalId + "/flow",
                          siteURL: o + "/okta-personal-app/" + e.appInstanceId + "/launch"
                        }),
                          s.push({
                            adminSetsCreds: !1,
                            appInstanceId: e.appInstanceId,
                            displayName: e.appDisplayName,
                            formDefs: [],
                            fullCred: !0,
                            id: e.appInstanceId,
                            isFullCred: !0,
                            logoUrl: e.logoUrl,
                            password: null,
                            pushEnabled: !1,
                            signUpUrl: null,
                            toolbarAutosubmit: !1,
                            urlRegex: l(e.loginRedirectUrl, e.appInstanceId),
                            username: null
                          });
                      }),
                    a.all([t.setMonitoredSites(r), t.setFormSitesNoPw(s)])
                  );
                }
              });
            }),
            n
          );
        }),
          (e.exports = o.OktaPersonalAPIAdapter);
      },
      598: function (e, t, a) {
        var o = a(710);
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            n(e)
          );
        }
        !(function (e) {
          "use strict";
          var t = !1;
          try {
            throw new Error();
          } catch (e) {
            t = !!e.stack;
          }
          var a = Object.prototype.toString,
            o = "Function",
            r = e.window[o].prototype.toString,
            s = /^\[object .+?Constructor\]$/,
            i = RegExp(
              "^" +
                String(a)
                  .replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&")
                  .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            );
          function p(e) {
            var t = n(e);
            return "function" == t ? i.test(r.call(e)) : (e && "object" == t && s.test(a.call(e))) || !1;
          }
          var l,
            d = C(),
            u = function () {},
            c = (function () {
              var t = { task: void 0, next: null },
                a = t,
                o = !1,
                n = void 0,
                r = !1;
              function s() {
                for (
                  var a = function () {
                    (t = t.next), (n = t.task), (t.task = void 0), (i = t.domain) && ((t.domain = void 0), i.enter());
                    try {
                      n();
                    } catch (t) {
                      if (r) throw (i && i.exit(), e.WindowUtil.setTimeout(s, 0), i && i.enter(), t);
                      setTimeout(function () {
                        throw t;
                      }, 0);
                    }
                    i && i.exit();
                  };
                  t.next;

                ) {
                  var n, i;
                  a();
                }
                o = !1;
              }
              if (
                ((c = function (e) {
                  (a = a.next = { task: e, domain: r && process.domain, next: null }), o || ((o = !0), n());
                }),
                "undefined" != typeof process && process.nextTick)
              )
                (r = !0),
                  (n = function () {
                    process.nextTick(s);
                  });
              else if ("function" == typeof setImmediate)
                n =
                  "undefined" != typeof window && p(setImmediate.bind)
                    ? setImmediate.bind(window, s)
                    : function () {
                        setImmediate(s);
                      };
              else if ("undefined" != typeof MessageChannel) {
                var i = new MessageChannel();
                i.port1.onmessage = function () {
                  (n = l), (i.port1.onmessage = s), s();
                };
                var l = function () {
                  i.port2.postMessage(0);
                };
                n = function () {
                  e.WindowUtil.setTimeout(s, 0), l();
                };
              } else
                n = function () {
                  e.WindowUtil.setTimeout(s, 0);
                };
              return c;
            })(),
            g = e.window[o].call;
          function v(e) {
            return function () {
              return g.apply(e, arguments);
            };
          }
          var h,
            k = v(Array.prototype.slice),
            m = v(function (e, t) {
              var a = 0,
                o = this.length;
              if (1 === arguments.length)
                for (;;) {
                  if (a in this) {
                    t = this[a++];
                    break;
                  }
                  if (++a >= o) throw new TypeError();
                }
              for (; a < o; a++) a in this && (t = e(t, this[a], a));
              return t;
            }),
            y = v(
              Array.prototype.indexOf ||
                function (e) {
                  for (var t = 0; t < this.length; t++) if (this[t] === e) return t;
                  return -1;
                }
            ),
            b = v(
              Array.prototype.map ||
                function (e, t) {
                  var a = this,
                    o = [];
                  return (
                    m(
                      a,
                      function (n, r, s) {
                        o.push(e.call(t, r, s, a));
                      },
                      void 0
                    ),
                    o
                  );
                }
            ),
            w = p(Object.create)
              ? Object.create
              : function (e) {
                  function t() {}
                  return (t.prototype = e), new t();
                },
            f = v(Object.prototype.hasOwnProperty),
            P =
              Object.keys ||
              function (e) {
                var t = [];
                for (var a in e) f(e, a) && t.push(a);
                return t;
              },
            S = v(Object.prototype.toString);
          function A(e) {
            return e === Object(e);
          }
          h =
            "undefined" != typeof ReturnValue
              ? ReturnValue
              : function (e) {
                  this.value = e;
                };
          var O = "From previous event:";
          function x(e, a) {
            if (t && a.stack && "object" === n(e) && null !== e && e.stack && -1 === e.stack.indexOf(O)) {
              for (var o = [], r = a; r; r = r.source) r.stack && o.unshift(r.stack);
              o.unshift(e.stack);
              var s = o.join("\n" + O + "\n");
              e.stack = (function (e) {
                for (var t = e.split("\n"), a = [], o = 0; o < t.length; ++o) {
                  var n = t[o];
                  N(n) || T(n) || !n || a.push(n);
                }
                return a.join("\n");
              })(s);
            }
          }
          function T(e) {
            return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:");
          }
          function R(e) {
            var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
            if (t) return [t[1], Number(t[2])];
            var a = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
            if (a) return [a[1], Number(a[2])];
            var o = /.*@(.+):(\d+)$/.exec(e);
            return o ? [o[1], Number(o[2])] : void 0;
          }
          function N(e) {
            var t = R(e);
            if (!t) return !1;
            var a = t[0],
              o = t[1];
            return a === l && o >= d && o <= X;
          }
          function C() {
            if (t)
              try {
                throw new Error();
              } catch (t) {
                var e = t.stack.split("\n"),
                  a = R(e[0].indexOf("@") > 0 ? e[1] : e[2]);
                if (!a) return;
                return (l = a[0]), a[1];
              }
          }
          function I(e, t, a) {
            return function () {
              return (
                "undefined" != typeof console &&
                  "function" == typeof console.warn &&
                  console.warn(t + " is deprecated, use " + a + " instead.", new Error("").stack),
                e.apply(e, arguments)
              );
            };
          }
          function E(e) {
            return j(e)
              ? e
              : M(e)
              ? (function (e) {
                  var t = L();
                  return (
                    c(function () {
                      try {
                        e.then(t.resolve, t.reject, t.notify);
                      } catch (e) {
                        t.reject(e);
                      }
                    }),
                    t.promise
                  );
                })(e)
              : Y(e);
          }
          function L() {
            var e,
              a = [],
              o = [],
              n = w(L.prototype),
              r = w(_.prototype);
            if (
              ((r.promiseDispatch = function (t, n, r) {
                var s = k(arguments);
                a
                  ? (a.push(s), "when" === n && r[1] && o.push(r[1]))
                  : c(function () {
                      e.promiseDispatch.apply(e, s);
                    });
              }),
              (r.valueOf = I(
                function () {
                  if (a) return r;
                  var t = U(e);
                  return j(t) && (e = t), t;
                },
                "valueOf",
                "inspect"
              )),
              (r.inspect = function () {
                return e ? e.inspect() : { state: "pending" };
              }),
              E.longStackSupport && t)
            )
              try {
                throw new Error();
              } catch (e) {
                r.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
              }
            function s(t) {
              (e = t),
                (r.source = t),
                m(
                  a,
                  function (e, a) {
                    c(function () {
                      t.promiseDispatch.apply(t, a);
                    });
                  },
                  void 0
                ),
                (a = void 0),
                (o = void 0);
            }
            return (
              (n.promise = r),
              (n.resolve = function (t) {
                e || s(E(t));
              }),
              (n.fulfill = function (t) {
                e || s(Y(t));
              }),
              (n.reject = function (t) {
                e || s(G(t));
              }),
              (n.notify = function (t) {
                e ||
                  m(
                    o,
                    function (e, a) {
                      c(function () {
                        a(t);
                      });
                    },
                    void 0
                  );
              }),
              n
            );
          }
          function z(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function.");
            var t = L();
            try {
              e(t.resolve, t.reject, t.notify);
            } catch (e) {
              t.reject(e);
            }
            return t.promise;
          }
          function _(e, t, a) {
            void 0 === t &&
              (t = function (e) {
                return G(new Error("Promise does not support operation: " + e));
              }),
              void 0 === a &&
                (a = function () {
                  return { state: "unknown" };
                });
            var o = w(_.prototype);
            if (
              ((o.promiseDispatch = function (a, n, r) {
                var s;
                try {
                  s = e[n] ? e[n].apply(o, r) : t.call(o, n, r);
                } catch (e) {
                  s = G(e);
                }
                a && a(s);
              }),
              (o.inspect = a),
              a)
            ) {
              var n = a();
              "rejected" === n.state && (o.exception = n.reason),
                (o.valueOf = I(function () {
                  var e = a();
                  return "pending" === e.state || "rejected" === e.state ? o : e.value;
                }));
            }
            return o;
          }
          function D(e, t, a, o) {
            return E(e).then(t, a, o);
          }
          function U(e) {
            if (j(e)) {
              var t = e.inspect();
              if ("fulfilled" === t.state) return t.value;
            }
            return e;
          }
          function j(e) {
            return A(e) && "function" == typeof e.promiseDispatch && "function" == typeof e.inspect;
          }
          function M(e) {
            return A(e) && "function" == typeof e.then;
          }
          (E.resolve = E),
            (E.nextTick = c),
            (E.longStackSupport = !1),
            (E.defer = L),
            (L.prototype.makeNodeResolver = function () {
              var e = this;
              return function (t, a) {
                t ? e.reject(t) : arguments.length > 2 ? e.resolve(k(arguments, 1)) : e.resolve(a);
              };
            }),
            (E.promise = z),
            (E.passByCopy = function (e) {
              return e;
            }),
            (_.prototype.passByCopy = function () {
              return this;
            }),
            (E.join = function (e, t) {
              return E(e).join(t);
            }),
            (_.prototype.join = function (e) {
              return E([this, e]).spread(function (e, t) {
                if (e === t) return e;
                throw new Error("Can't join: not the same: " + e + " " + t);
              });
            }),
            (E.race = function (e) {
              return z(function (t, a) {
                for (var o = 0, n = e.length; o < n; o++) E(e[o]).then(t, a);
              });
            }),
            (_.prototype.race = function () {
              return this.then(E.race);
            }),
            (E.makePromise = _),
            (_.prototype.toString = function () {
              return "[object Promise]";
            }),
            (_.prototype.then = function (e, t, a) {
              var o = this,
                n = L(),
                r = !1;
              return (
                c(function () {
                  o.promiseDispatch(
                    function (t) {
                      r ||
                        ((r = !0),
                        n.resolve(
                          (function (t) {
                            try {
                              return "function" == typeof e ? e(t) : t;
                            } catch (e) {
                              return G(e);
                            }
                          })(t)
                        ));
                    },
                    "when",
                    [
                      function (e) {
                        r ||
                          ((r = !0),
                          n.resolve(
                            (function (e) {
                              if ("function" == typeof t) {
                                x(e, o);
                                try {
                                  return t(e);
                                } catch (e) {
                                  return G(e);
                                }
                              }
                              return G(e);
                            })(e)
                          ));
                      }
                    ]
                  );
                }),
                o.promiseDispatch(void 0, "when", [
                  void 0,
                  function (e) {
                    var t,
                      o = !1;
                    try {
                      t = (function (e) {
                        return "function" == typeof a ? a(e) : e;
                      })(e);
                    } catch (e) {
                      if (((o = !0), !E.onerror)) throw e;
                      E.onerror(e);
                    }
                    o || n.notify(t);
                  }
                ]),
                n.promise
              );
            }),
            (E.when = D),
            (_.prototype.thenResolve = function (e) {
              return this.then(function () {
                return e;
              });
            }),
            (E.thenResolve = function (e, t) {
              return E(e).thenResolve(t);
            }),
            (_.prototype.thenReject = function (e) {
              return this.then(function () {
                throw e;
              });
            }),
            (E.thenReject = function (e, t) {
              return E(e).thenReject(t);
            }),
            (E.nearer = U),
            (E.isPromise = j),
            (E.isPromiseAlike = M),
            (E.isPending = function (e) {
              return j(e) && "pending" === e.inspect().state;
            }),
            (_.prototype.isPending = function () {
              return "pending" === this.inspect().state;
            }),
            (E.isFulfilled = function (e) {
              return !j(e) || "fulfilled" === e.inspect().state;
            }),
            (_.prototype.isFulfilled = function () {
              return "fulfilled" === this.inspect().state;
            }),
            (E.isRejected = function (e) {
              return j(e) && "rejected" === e.inspect().state;
            }),
            (_.prototype.isRejected = function () {
              return "rejected" === this.inspect().state;
            });
          var B = [],
            V = [],
            K = !1,
            W = !0;
          function F() {
            for (var e = 0; e < B.length; e++) {
              var t = B[e];
              console.warn("Unhandled rejection reason:", t);
            }
          }
          function q() {
            (B.length = 0), (V.length = 0), (K = !1), W || ((W = !0), "undefined" != typeof process && process.on && process.on("exit", F));
          }
          function H(e, t) {
            W &&
              (V.push(e),
              t && void 0 !== t.stack ? B.push(t.stack) : B.push("(no stack) " + t),
              K ||
                "undefined" == typeof window ||
                window.Touch ||
                !window.console ||
                console.warn("[Q] Unhandled rejection reasons (should be empty):", B),
              (K = !0));
          }
          function G(e) {
            var t = _(
              {
                when: function (t) {
                  return (
                    t &&
                      (function (e) {
                        if (W) {
                          var t = y(V, e);
                          -1 !== t && (V.splice(t, 1), B.splice(t, 1));
                        }
                      })(this),
                    t ? t(e) : this
                  );
                }
              },
              function () {
                return this;
              },
              function () {
                return { state: "rejected", reason: e };
              }
            );
            return H(t, e), t;
          }
          function Y(e) {
            return _(
              {
                when: function () {
                  return e;
                },
                get: function (t) {
                  return e[t];
                },
                set: function (t, a) {
                  e[t] = a;
                },
                delete: function (t) {
                  delete e[t];
                },
                post: function (t, a) {
                  return null == t ? e.apply(void 0, a) : e[t].apply(e, a);
                },
                apply: function (t, a) {
                  return e.apply(t, a);
                },
                keys: function () {
                  return P(e);
                }
              },
              void 0,
              function () {
                return { state: "fulfilled", value: e };
              }
            );
          }
          function $(e, t, a) {
            return E(e).spread(t, a);
          }
          function J(e, t, a) {
            return E(e).dispatch(t, a);
          }
          function Z(e) {
            return D(e, function (e) {
              var t = 0,
                a = L();
              return (
                m(
                  e,
                  function (o, n, r) {
                    var s;
                    j(n) && "fulfilled" === (s = n.inspect()).state
                      ? (e[r] = s.value)
                      : (++t,
                        D(
                          n,
                          function (o) {
                            (e[r] = o), 0 == --t && a.resolve(e);
                          },
                          a.reject,
                          function (e) {
                            a.notify({ index: r, value: e });
                          }
                        ));
                  },
                  void 0
                ),
                0 === t && a.resolve(e),
                a.promise
              );
            });
          }
          function Q(e) {
            return D(e, function (e) {
              return (
                (e = b(e, E)),
                D(
                  Z(
                    b(e, function (e) {
                      return D(e, u, u);
                    })
                  ),
                  function () {
                    return e;
                  }
                )
              );
            });
          }
          (E.resetUnhandledRejections = q),
            (E.getUnhandledReasons = function () {
              return B.slice();
            }),
            (E.stopUnhandledRejectionTracking = function () {
              q(), "undefined" != typeof process && process.on && process.removeListener("exit", F), (W = !1);
            }),
            q(),
            (E.reject = G),
            (E.fulfill = Y),
            (E.master = function (e) {
              return _(
                { isDef: function () {} },
                function (t, a) {
                  return J(e, t, a);
                },
                function () {
                  return E(e).inspect();
                }
              );
            }),
            (E.spread = $),
            (_.prototype.spread = function (e, t) {
              return this.all().then(function (t) {
                return e.apply(void 0, t);
              }, t);
            }),
            (E.async = function (e) {
              return function () {
                function t(e, t) {
                  var r;
                  try {
                    r = a[e](t);
                  } catch (e) {
                    return (function (e) {
                      return "[object StopIteration]" === S(e) || e instanceof h;
                    })(e)
                      ? e.value
                      : G(e);
                  }
                  return D(r, o, n);
                }
                var a = e.apply(this, arguments),
                  o = t.bind(t, "next"),
                  n = t.bind(t, "throw");
                return o();
              };
            }),
            (E.spawn = function (e) {
              E.done(E.async(e)());
            }),
            (E.return = function (e) {
              throw new h(e);
            }),
            (E.promised = function (e) {
              return function () {
                return $([this, Z(arguments)], function (t, a) {
                  return e.apply(t, a);
                });
              };
            }),
            (E.dispatch = J),
            (_.prototype.dispatch = function (e, t) {
              var a = this,
                o = L();
              return (
                c(function () {
                  a.promiseDispatch(o.resolve, e, t);
                }),
                o.promise
              );
            }),
            (E.get = function (e, t) {
              return E(e).dispatch("get", [t]);
            }),
            (_.prototype.get = function (e) {
              return this.dispatch("get", [e]);
            }),
            (E.set = function (e, t, a) {
              return E(e).dispatch("set", [t, a]);
            }),
            (_.prototype.set = function (e, t) {
              return this.dispatch("set", [e, t]);
            }),
            (E.del = E.delete =
              function (e, t) {
                return E(e).dispatch("delete", [t]);
              }),
            (_.prototype.del = _.prototype.delete =
              function (e) {
                return this.dispatch("delete", [e]);
              }),
            (E.mapply = E.post =
              function (e, t, a) {
                return E(e).dispatch("post", [t, a]);
              }),
            (_.prototype.mapply = _.prototype.post =
              function (e, t) {
                return this.dispatch("post", [e, t]);
              }),
            (E.send =
              E.mcall =
              E.invoke =
                function (e, t) {
                  return E(e).dispatch("post", [t, k(arguments, 2)]);
                }),
            (_.prototype.send =
              _.prototype.mcall =
              _.prototype.invoke =
                function (e) {
                  return this.dispatch("post", [e, k(arguments, 1)]);
                }),
            (E.fapply = function (e, t) {
              return E(e).dispatch("apply", [void 0, t]);
            }),
            (_.prototype.fapply = function (e) {
              return this.dispatch("apply", [void 0, e]);
            }),
            (E.try = E.fcall =
              function (e) {
                return E(e).dispatch("apply", [void 0, k(arguments, 1)]);
              }),
            (_.prototype.fcall = function () {
              return this.dispatch("apply", [void 0, k(arguments)]);
            }),
            (E.fbind = function (e) {
              var t = E(e),
                a = k(arguments, 1);
              return function () {
                return t.dispatch("apply", [this, a.concat(k(arguments))]);
              };
            }),
            (_.prototype.fbind = function () {
              var e = this,
                t = k(arguments);
              return function () {
                return e.dispatch("apply", [this, t.concat(k(arguments))]);
              };
            }),
            (E.keys = function (e) {
              return E(e).dispatch("keys", []);
            }),
            (_.prototype.keys = function () {
              return this.dispatch("keys", []);
            }),
            (E.all = Z),
            (_.prototype.all = function () {
              return Z(this);
            }),
            (E.allResolved = I(Q, "allResolved", "allSettled")),
            (_.prototype.allResolved = function () {
              return Q(this);
            }),
            (E.allSettled = function (e) {
              return E(e).allSettled();
            }),
            (_.prototype.allSettled = function () {
              return this.then(function (e) {
                return Z(
                  b(e, function (e) {
                    function t() {
                      return e.inspect();
                    }
                    return (e = E(e)).then(t, t);
                  })
                );
              });
            }),
            (E.fail = E.catch =
              function (e, t) {
                return E(e).then(void 0, t);
              }),
            (_.prototype.fail = _.prototype.catch =
              function (e) {
                return this.then(void 0, e);
              }),
            (E.progress = function (e, t) {
              return E(e).then(void 0, void 0, t);
            }),
            (_.prototype.progress = function (e) {
              return this.then(void 0, void 0, e);
            }),
            (E.fin = E.finally =
              function (e, t) {
                return E(e).finally(t);
              }),
            (_.prototype.fin = _.prototype.finally =
              function (e) {
                return (
                  (e = E(e)),
                  this.then(
                    function (t) {
                      return e.fcall().then(function () {
                        return t;
                      });
                    },
                    function (t) {
                      return e.fcall().then(function () {
                        throw t;
                      });
                    }
                  )
                );
              }),
            (E.done = function (e, t, a, o) {
              return E(e).done(t, a, o);
            }),
            (_.prototype.done = function (e, t, a) {
              var o = function (e) {
                  c(function () {
                    if ((x(e, r), !E.onerror)) throw e;
                    E.onerror(e);
                  });
                },
                r = e || t || a ? this.then(e, t, a) : this;
              "object" === ("undefined" == typeof process ? "undefined" : n(process)) &&
                process &&
                process.domain &&
                (o = process.domain.bind(o)),
                r.then(void 0, o);
            }),
            (E.timeout = function (e, t, a) {
              return E(e).timeout(t, a);
            }),
            (_.prototype.timeout = function (e, t) {
              var a = L(),
                o = setTimeout(function () {
                  a.reject(new Error(t || "Timed out after " + e + " ms"));
                }, e);
              return (
                this.then(
                  function (e) {
                    clearTimeout(o), a.resolve(e);
                  },
                  function (e) {
                    clearTimeout(o), a.reject(e);
                  },
                  a.notify
                ),
                a.promise
              );
            }),
            (E.delay = function (e, t) {
              return void 0 === t && ((t = e), (e = void 0)), E(e).delay(t);
            }),
            (_.prototype.delay = function (e) {
              return this.then(function (t) {
                var a = L();
                return (
                  setTimeout(function () {
                    a.resolve(t);
                  }, e),
                  a.promise
                );
              });
            }),
            (E.nfapply = function (e, t) {
              return E(e).nfapply(t);
            }),
            (_.prototype.nfapply = function (e) {
              var t = L(),
                a = k(e);
              return a.push(t.makeNodeResolver()), this.fapply(a).fail(t.reject), t.promise;
            }),
            (E.nfcall = function (e) {
              var t = k(arguments, 1);
              return E(e).nfapply(t);
            }),
            (_.prototype.nfcall = function () {
              var e = k(arguments),
                t = L();
              return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise;
            }),
            (E.nfbind = E.denodeify =
              function (e) {
                var t = k(arguments, 1);
                return function () {
                  var a = t.concat(k(arguments)),
                    o = L();
                  return a.push(o.makeNodeResolver()), E(e).fapply(a).fail(o.reject), o.promise;
                };
              }),
            (_.prototype.nfbind = _.prototype.denodeify =
              function () {
                var e = k(arguments);
                return e.unshift(this), E.denodeify.apply(void 0, e);
              }),
            (E.nbind = function (e, t) {
              var a = k(arguments, 2);
              return function () {
                var o = a.concat(k(arguments)),
                  n = L();
                return (
                  o.push(n.makeNodeResolver()),
                  E(function () {
                    return e.apply(t, arguments);
                  })
                    .fapply(o)
                    .fail(n.reject),
                  n.promise
                );
              };
            }),
            (_.prototype.nbind = function () {
              var e = k(arguments, 0);
              return e.unshift(this), E.nbind.apply(void 0, e);
            }),
            (E.nmapply = E.npost =
              function (e, t, a) {
                return E(e).npost(t, a);
              }),
            (_.prototype.nmapply = _.prototype.npost =
              function (e, t) {
                var a = k(t || []),
                  o = L();
                return a.push(o.makeNodeResolver()), this.dispatch("post", [e, a]).fail(o.reject), o.promise;
              }),
            (E.nsend =
              E.nmcall =
              E.ninvoke =
                function (e, t) {
                  var a = k(arguments, 2),
                    o = L();
                  return a.push(o.makeNodeResolver()), E(e).dispatch("post", [t, a]).fail(o.reject), o.promise;
                }),
            (_.prototype.nsend =
              _.prototype.nmcall =
              _.prototype.ninvoke =
                function (e) {
                  var t = k(arguments, 1),
                    a = L();
                  return t.push(a.makeNodeResolver()), this.dispatch("post", [e, t]).fail(a.reject), a.promise;
                }),
            (E.nodeify = function (e, t) {
              return E(e).nodeify(t);
            }),
            (_.prototype.nodeify = function (e) {
              if (!e) return this;
              this.then(
                function (t) {
                  c(function () {
                    e(null, t);
                  });
                },
                function (t) {
                  c(function () {
                    e(t);
                  });
                }
              );
            }),
            (e.Q = E),
            e.Q.stopUnhandledRejectionTracking();
          var X = C();
        })(o),
          (e.exports = o.Q);
      },
      562: function (e, t, a) {
        var o = a(710);
        (o.StorageBase = function (e, t) {
          var a = {},
            n = o.StorageMultiAccount(a),
            r = o._okta,
            s = r.partial,
            i = r.each,
            p = o.fn.base.keyToCamelCase,
            l = o.fn.base.orDefault,
            d = o.fn.promises.composeP,
            u = {
              Session: { get: e.getSessionState, set: e.setSessionState },
              Persistent: { get: e.getPersistentState, set: e.setPersistentState, remove: e.removePersistentState },
              Tab: { get: e.getTabState, set: e.setTabState, update: e.updateTabState }
            };
          i(t, function (e) {
            !(function (e) {
              var t = u[e.type];
              if (t) {
                var o = e.name || p(e.key),
                  r = t.set,
                  i = t.get,
                  c = t.update;
                r &&
                  i &&
                  (e.multiAccount &&
                    (n.addMultiAccountMethods(t, o, e), (r = n.makeMultiAccountKey(t.set)), (i = n.makeMultiAccountKey(t.get))),
                  (a["get" + o] = d(l(e.def), s(i, e.key, void 0))),
                  (a["set" + o] = s(r, e.key)),
                  (a["clear" + o] = s(r, e.key, e.def)),
                  c && (a["update" + o] = s(c, e.key)));
              } else Log.warn("StorageBase::not supported storage type: " + e.type);
            })(e);
          });
          var c = a.setAllowListedOktaAccounts;
          return (
            (a.setAllowListedOktaAccounts = function (e) {
              return n.setAllowListedOktaAccounts(e), c && c(e);
            }),
            (a.readMultiAccount = n.readMultiAccount),
            (a.getCurrentAccountIndex = n.getCurrentAccountIndex),
            (a.setCurrentAccountIndex = n.setCurrentAccountIndex),
            (a.clearAccountData = n.clearAccountData),
            (a.copyMultiAccountData = n.copyMultiAccountData),
            (a.migrateToMultiAccount = n.migrateToMultiAccount),
            (a.migrateToSingleAccount = n.migrateToSingleAccount),
            a
          );
        }),
          (e.exports = o.StorageBase);
      },
      399: function (e, t, a) {
        var o = a(710);
        (o.StorageMultiAccount = function (e) {
          var t = {},
            a = o.Q,
            n = o._okta,
            r = n.find,
            s = n.partial,
            i = n.map,
            p = o.fn.base.orDefault,
            l = o.fn.promises.composeP,
            d = !1,
            u = -1,
            c = [];
          function g(e) {
            return "setAcc" + e;
          }
          function v(e) {
            return "getAcc" + e;
          }
          function h(e) {
            return "removeAcc" + e;
          }
          function k(e, t) {
            return t >= 0 ? e + "_" + t : e;
          }
          function m(e, t, a, o) {
            return e(k(t, a), o);
          }
          function y(e) {
            if (!d) return -1;
            var t = r(e, function (e) {
              return e.isCurrentAccount;
            });
            return t ? t.index : -1;
          }
          function b(t, o) {
            return e.getAllowListedOktaAccounts().then(function (e) {
              var n = i(e, function (e) {
                return e.index < 0
                  ? a()
                  : t(k(o, e.index)).then(function (t) {
                      return { data: t, account: e };
                    });
              });
              return a.all(n);
            });
          }
          return (
            (t.makeMultiAccountKey = function (e) {
              return function (t, a) {
                return e(k(t, u), a);
              };
            }),
            (t.addMultiAccountMethods = function (t, a, o) {
              var r = t.set,
                i = t.get,
                d = t.remove;
              c.push(a),
                (e[v(a)] = l(p(o.def), s(m, i, o.key))),
                (e[g(a)] = s(m, r, o.key)),
                (e["getAll" + a] = s(b, i, o.key)),
                (e[h(a)] = d ? s(m, d, o.key) : s(m, r, o.key, n, void 0 === o.def ? null : o.def));
            }),
            (t.getCurrentAccountIndex = function () {
              return u;
            }),
            (t.setCurrentAccountIndex = function (e) {
              u = e;
            }),
            (t.setAllowListedOktaAccounts = function (e) {
              u = y(e);
            }),
            (t.readMultiAccount = function () {
              return a.all([e.getDBGPluginSettings(), e.getAllowListedOktaAccounts()]).spread(function (e, t) {
                (d = e && e.multiAccountAwarePlugin), (u = y(t));
              });
            }),
            (t.clearAccountData = function (t) {
              return a.all(
                i(c, function (a) {
                  return e[h(a)](t);
                })
              );
            }),
            (t.copyMultiAccountData = function (t, o) {
              return a.all(
                i(c, function (a) {
                  return (function (t, a, o) {
                    return e[v(t)](a).then(s(e[g(t)], o));
                  })(a, t, o);
                })
              );
            }),
            (t.migrateToMultiAccount = function () {
              return t.copyMultiAccountData(-1, t.getCurrentAccountIndex()).then(s(t.clearAccountData, -1));
            }),
            (t.migrateToSingleAccount = function () {
              return t.copyMultiAccountData(t.getCurrentAccountIndex(), -1).then(s(t.clearAccountData, t.getCurrentAccountIndex()));
            }),
            t
          );
        }),
          (e.exports = o.StorageMultiAccount);
      },
      369: function (e, t, a) {
        var o,
          n,
          r = a(710);
        (r.WindowUtil =
          ((o = r.window),
          (n = {}),
          o &&
            ((n.setTimeout = function (e, t) {
              return o.setTimeout(e, t);
            }),
            (n.setInterval = function (e, t) {
              return o.setInterval(e, t);
            })),
          n)),
          (e.exports = r.WindowUtil);
      },
      123: function (e, t, a) {
        var o = a(710);
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            n(e)
          );
        }
        (function () {
          var e = this,
            t = e._,
            a = Array.prototype,
            r = Object.prototype,
            s = "Function",
            i = o.window[s].prototype,
            p = a.push,
            l = a.slice,
            d = r.toString,
            u = r.hasOwnProperty,
            c = Array.isArray,
            g = Object.keys,
            v = i.bind,
            h = Object.create,
            k = function () {},
            m = function e(t) {
              return t instanceof e ? t : this instanceof e ? void (this._wrapped = t) : new e(t);
            };
          (o._okta = m), (m.VERSION = "1.8.3");
          var y = function (e, t, a) {
              if (void 0 === t) return e;
              switch (null == a ? 3 : a) {
                case 1:
                  return function (a) {
                    return e.call(t, a);
                  };
                case 2:
                  return function (a, o) {
                    return e.call(t, a, o);
                  };
                case 3:
                  return function (a, o, n) {
                    return e.call(t, a, o, n);
                  };
                case 4:
                  return function (a, o, n, r) {
                    return e.call(t, a, o, n, r);
                  };
              }
              return function () {
                return e.apply(t, arguments);
              };
            },
            b = function (e, t, a) {
              return null == e ? m.identity : m.isFunction(e) ? y(e, t, a) : m.isObject(e) ? m.matcher(e) : m.property(e);
            };
          m.iteratee = function (e, t) {
            return b(e, t, 1 / 0);
          };
          var w = function (e, t) {
              return function (a) {
                var o = arguments.length;
                if (o < 2 || null == a) return a;
                for (var n = 1; n < o; n++)
                  for (var r = arguments[n], s = e(r), i = s.length, p = 0; p < i; p++) {
                    var l = s[p];
                    (t && void 0 !== a[l]) || (a[l] = r[l]);
                  }
                return a;
              };
            },
            f = function (e) {
              if (!m.isObject(e)) return {};
              if (h) return h(e);
              k.prototype = e;
              var t = new k();
              return (k.prototype = null), t;
            },
            P = function (e) {
              return function (t) {
                return null == t ? void 0 : t[e];
              };
            },
            S = Math.pow(2, 53) - 1,
            A = P("length"),
            O = function (e) {
              var t = A(e);
              return "number" == typeof t && t >= 0 && t <= S;
            };
          function x(e) {
            return function (t, a, o, n) {
              a = y(a, n, 4);
              var r = !O(t) && m.keys(t),
                s = (r || t).length,
                i = e > 0 ? 0 : s - 1;
              return (
                arguments.length < 3 && ((o = t[r ? r[i] : i]), (i += e)),
                (function (t, a, o, n, r, s) {
                  for (; r >= 0 && r < s; r += e) {
                    var i = n ? n[r] : r;
                    o = a(o, t[i], i, t);
                  }
                  return o;
                })(t, a, o, r, i, s)
              );
            };
          }
          (m.each = m.forEach =
            function (e, t, a) {
              var o, n;
              if (((t = y(t, a)), O(e))) for (o = 0, n = e.length; o < n; o++) t(e[o], o, e);
              else {
                var r = m.keys(e);
                for (o = 0, n = r.length; o < n; o++) t(e[r[o]], r[o], e);
              }
              return e;
            }),
            (m.map = m.collect =
              function (e, t, a) {
                t = b(t, a);
                for (var o = !O(e) && m.keys(e), n = (o || e).length, r = Array(n), s = 0; s < n; s++) {
                  var i = o ? o[s] : s;
                  r[s] = t(e[i], i, e);
                }
                return r;
              }),
            (m.reduce = m.foldl = m.inject = x(1)),
            (m.reduceRight = m.foldr = x(-1)),
            (m.find = m.detect =
              function (e, t, a) {
                var o;
                if (void 0 !== (o = O(e) ? m.findIndex(e, t, a) : m.findKey(e, t, a)) && -1 !== o) return e[o];
              }),
            (m.filter = m.select =
              function (e, t, a) {
                var o = [];
                return (
                  (t = b(t, a)),
                  m.each(e, function (e, a, n) {
                    t(e, a, n) && o.push(e);
                  }),
                  o
                );
              }),
            (m.reject = function (e, t, a) {
              return m.filter(e, m.negate(b(t)), a);
            }),
            (m.every = m.all =
              function (e, t, a) {
                t = b(t, a);
                for (var o = !O(e) && m.keys(e), n = (o || e).length, r = 0; r < n; r++) {
                  var s = o ? o[r] : r;
                  if (!t(e[s], s, e)) return !1;
                }
                return !0;
              }),
            (m.some = m.any =
              function (e, t, a) {
                t = b(t, a);
                for (var o = !O(e) && m.keys(e), n = (o || e).length, r = 0; r < n; r++) {
                  var s = o ? o[r] : r;
                  if (t(e[s], s, e)) return !0;
                }
                return !1;
              }),
            (m.contains =
              m.includes =
              m.include =
                function (e, t, a, o) {
                  return O(e) || (e = m.values(e)), ("number" != typeof a || o) && (a = 0), m.indexOf(e, t, a) >= 0;
                }),
            (m.invoke = function (e, t) {
              var a = l.call(arguments, 2),
                o = m.isFunction(t);
              return m.map(e, function (e) {
                var n = o ? t : e[t];
                return null == n ? n : n.apply(e, a);
              });
            }),
            (m.pluck = function (e, t) {
              return m.map(e, m.property(t));
            }),
            (m.where = function (e, t) {
              return m.filter(e, m.matcher(t));
            }),
            (m.findWhere = function (e, t) {
              return m.find(e, m.matcher(t));
            }),
            (m.max = function (e, t, a) {
              var o,
                n,
                r = -1 / 0,
                s = -1 / 0;
              if (null == t && null != e) for (var i = 0, p = (e = O(e) ? e : m.values(e)).length; i < p; i++) (o = e[i]) > r && (r = o);
              else
                (t = b(t, a)),
                  m.each(e, function (e, a, o) {
                    ((n = t(e, a, o)) > s || (n === -1 / 0 && r === -1 / 0)) && ((r = e), (s = n));
                  });
              return r;
            }),
            (m.min = function (e, t, a) {
              var o,
                n,
                r = 1 / 0,
                s = 1 / 0;
              if (null == t && null != e) for (var i = 0, p = (e = O(e) ? e : m.values(e)).length; i < p; i++) (o = e[i]) < r && (r = o);
              else
                (t = b(t, a)),
                  m.each(e, function (e, a, o) {
                    ((n = t(e, a, o)) < s || (n === 1 / 0 && r === 1 / 0)) && ((r = e), (s = n));
                  });
              return r;
            }),
            (m.shuffle = function (e) {
              for (var t, a = O(e) ? e : m.values(e), o = a.length, n = Array(o), r = 0; r < o; r++)
                (t = m.random(0, r)) !== r && (n[r] = n[t]), (n[t] = a[r]);
              return n;
            }),
            (m.sample = function (e, t, a) {
              return null == t || a ? (O(e) || (e = m.values(e)), e[m.random(e.length - 1)]) : m.shuffle(e).slice(0, Math.max(0, t));
            }),
            (m.sortBy = function (e, t, a) {
              return (
                (t = b(t, a)),
                m.pluck(
                  m
                    .map(e, function (e, a, o) {
                      return { value: e, index: a, criteria: t(e, a, o) };
                    })
                    .sort(function (e, t) {
                      var a = e.criteria,
                        o = t.criteria;
                      if (a !== o) {
                        if (a > o || void 0 === a) return 1;
                        if (a < o || void 0 === o) return -1;
                      }
                      return e.index - t.index;
                    }),
                  "value"
                )
              );
            });
          var T = function (e) {
            return function (t, a, o) {
              var n = {};
              return (
                (a = b(a, o)),
                m.each(t, function (o, r) {
                  var s = a(o, r, t);
                  e(n, o, s);
                }),
                n
              );
            };
          };
          (m.groupBy = T(function (e, t, a) {
            m.has(e, a) ? e[a].push(t) : (e[a] = [t]);
          })),
            (m.indexBy = T(function (e, t, a) {
              e[a] = t;
            })),
            (m.countBy = T(function (e, t, a) {
              m.has(e, a) ? e[a]++ : (e[a] = 1);
            })),
            (m.toArray = function (e) {
              return e ? (m.isArray(e) ? l.call(e) : O(e) ? m.map(e, m.identity) : m.values(e)) : [];
            }),
            (m.size = function (e) {
              return null == e ? 0 : O(e) ? e.length : m.keys(e).length;
            }),
            (m.partition = function (e, t, a) {
              t = b(t, a);
              var o = [],
                n = [];
              return (
                m.each(e, function (e, a, r) {
                  (t(e, a, r) ? o : n).push(e);
                }),
                [o, n]
              );
            }),
            (m.first =
              m.head =
              m.take =
                function (e, t, a) {
                  if (null != e) return null == t || a ? e[0] : m.initial(e, e.length - t);
                }),
            (m.initial = function (e, t, a) {
              return l.call(e, 0, Math.max(0, e.length - (null == t || a ? 1 : t)));
            }),
            (m.last = function (e, t, a) {
              if (null != e) return null == t || a ? e[e.length - 1] : m.rest(e, Math.max(0, e.length - t));
            }),
            (m.rest =
              m.tail =
              m.drop =
                function (e, t, a) {
                  return l.call(e, null == t || a ? 1 : t);
                }),
            (m.compact = function (e) {
              return m.filter(e, m.identity);
            });
          var R = function e(t, a, o, n) {
            for (var r = [], s = 0, i = n || 0, p = A(t); i < p; i++) {
              var l = t[i];
              if (O(l) && (m.isArray(l) || m.isArguments(l))) {
                a || (l = e(l, a, o));
                var d = 0,
                  u = l.length;
                for (r.length += u; d < u; ) r[s++] = l[d++];
              } else o || (r[s++] = l);
            }
            return r;
          };
          function N(e) {
            return function (t, a, o) {
              a = b(a, o);
              for (var n = A(t), r = e > 0 ? 0 : n - 1; r >= 0 && r < n; r += e) if (a(t[r], r, t)) return r;
              return -1;
            };
          }
          function C(e, t, a) {
            return function (o, n, r) {
              var s = 0,
                i = A(o);
              if ("number" == typeof r) e > 0 ? (s = r >= 0 ? r : Math.max(r + i, s)) : (i = r >= 0 ? Math.min(r + 1, i) : r + i + 1);
              else if (a && r && i) return o[(r = a(o, n))] === n ? r : -1;
              if (n != n) return (r = t(l.call(o, s, i), m.isNaN)) >= 0 ? r + s : -1;
              for (r = e > 0 ? s : i - 1; r >= 0 && r < i; r += e) if (o[r] === n) return r;
              return -1;
            };
          }
          (m.flatten = function (e, t) {
            return R(e, t, !1);
          }),
            (m.without = function (e) {
              return m.difference(e, l.call(arguments, 1));
            }),
            (m.uniq = m.unique =
              function (e, t, a, o) {
                m.isBoolean(t) || ((o = a), (a = t), (t = !1)), null != a && (a = b(a, o));
                for (var n = [], r = [], s = 0, i = A(e); s < i; s++) {
                  var p = e[s],
                    l = a ? a(p, s, e) : p;
                  t
                    ? ((s && r === l) || n.push(p), (r = l))
                    : a
                    ? m.contains(r, l) || (r.push(l), n.push(p))
                    : m.contains(n, p) || n.push(p);
                }
                return n;
              }),
            (m.union = function () {
              return m.uniq(R(arguments, !0, !0));
            }),
            (m.intersection = function (e) {
              for (var t = [], a = arguments.length, o = 0, n = A(e); o < n; o++) {
                var r = e[o];
                if (!m.contains(t, r)) {
                  for (var s = 1; s < a && m.contains(arguments[s], r); s++);
                  s === a && t.push(r);
                }
              }
              return t;
            }),
            (m.difference = function (e) {
              var t = R(arguments, !0, !0, 1);
              return m.filter(e, function (e) {
                return !m.contains(t, e);
              });
            }),
            (m.zip = function () {
              return m.unzip(arguments);
            }),
            (m.unzip = function (e) {
              for (var t = (e && m.max(e, A).length) || 0, a = Array(t), o = 0; o < t; o++) a[o] = m.pluck(e, o);
              return a;
            }),
            (m.object = function (e, t) {
              for (var a = {}, o = 0, n = A(e); o < n; o++) t ? (a[e[o]] = t[o]) : (a[e[o][0]] = e[o][1]);
              return a;
            }),
            (m.findIndex = N(1)),
            (m.findLastIndex = N(-1)),
            (m.indexOf = C(
              1,
              m.findIndex,
              (m.sortedIndex = function (e, t, a, o) {
                for (var n = (a = b(a, o, 1))(t), r = 0, s = A(e); r < s; ) {
                  var i = Math.floor((r + s) / 2);
                  a(e[i]) < n ? (r = i + 1) : (s = i);
                }
                return r;
              })
            )),
            (m.lastIndexOf = C(-1, m.findLastIndex)),
            (m.range = function (e, t, a) {
              null == t && ((t = e || 0), (e = 0)), (a = a || 1);
              for (var o = Math.max(Math.ceil((t - e) / a), 0), n = Array(o), r = 0; r < o; r++, e += a) n[r] = e;
              return n;
            });
          var I = function (e, t, a, o, n) {
            if (!(o instanceof t)) return e.apply(a, n);
            var r = f(e.prototype),
              s = e.apply(r, n);
            return m.isObject(s) ? s : r;
          };
          (m.bind = function (e, t) {
            if (v && e.bind === v) return v.apply(e, l.call(arguments, 1));
            if (!m.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var a = l.call(arguments, 2);
            return function o() {
              return I(e, o, t, this, a.concat(l.call(arguments)));
            };
          }),
            (m.partial = function (e) {
              var t = l.call(arguments, 1);
              return function a() {
                for (var o = 0, n = t.length, r = Array(n), s = 0; s < n; s++) r[s] = t[s] === m ? arguments[o++] : t[s];
                for (; o < arguments.length; ) r.push(arguments[o++]);
                return I(e, a, this, this, r);
              };
            }),
            (m.bindAll = function (e) {
              var t,
                a,
                o = arguments.length;
              if (o <= 1) throw new Error("bindAll must be passed function names");
              for (t = 1; t < o; t++) e[(a = arguments[t])] = m.bind(e[a], e);
              return e;
            }),
            (m.memoize = function (e, t) {
              var a = function a(o) {
                var n = a.cache,
                  r = "" + (t ? t.apply(this, arguments) : o);
                return m.has(n, r) || (n[r] = e.apply(this, arguments)), n[r];
              };
              return (a.cache = {}), a;
            }),
            (m.delay = function (e, t) {
              var a = l.call(arguments, 2);
              return setTimeout(function () {
                return e.apply(null, a);
              }, t);
            }),
            (m.defer = m.partial(m.delay, m, 1)),
            (m.throttle = function (e, t, a) {
              var n,
                r,
                s,
                i = null,
                p = 0;
              a || (a = {});
              var l = function () {
                (p = !1 === a.leading ? 0 : m.now()), (i = null), (s = e.apply(n, r)), i || (n = r = null);
              };
              return function () {
                var d = m.now();
                p || !1 !== a.leading || (p = d);
                var u = t - (d - p);
                return (
                  (n = this),
                  (r = arguments),
                  u <= 0 || u > t
                    ? (i && (clearTimeout(i), (i = null)), (p = d), (s = e.apply(n, r)), i || (n = r = null))
                    : i || !1 === a.trailing || (i = o.WindowUtil.setTimeout(l, u)),
                  s
                );
              };
            }),
            (m.debounce = function (e, t, a) {
              var n,
                r,
                s,
                i,
                p,
                l = function l() {
                  var d = m.now() - i;
                  d < t && d >= 0 ? (n = o.WindowUtil.setTimeout(l, t - d)) : ((n = null), a || ((p = e.apply(s, r)), n || (s = r = null)));
                };
              return function () {
                (s = this), (r = arguments), (i = m.now());
                var d = a && !n;
                return n || (n = o.WindowUtil.setTimeout(l, t)), d && ((p = e.apply(s, r)), (s = r = null)), p;
              };
            }),
            (m.wrap = function (e, t) {
              return m.partial(t, e);
            }),
            (m.negate = function (e) {
              return function () {
                return !e.apply(this, arguments);
              };
            }),
            (m.compose = function () {
              var e = arguments,
                t = e.length - 1;
              return function () {
                for (var a = t, o = e[t].apply(this, arguments); a--; ) o = e[a].call(this, o);
                return o;
              };
            }),
            (m.after = function (e, t) {
              return function () {
                if (--e < 1) return t.apply(this, arguments);
              };
            }),
            (m.before = function (e, t) {
              var a;
              return function () {
                return --e > 0 && (a = t.apply(this, arguments)), e <= 1 && (t = null), a;
              };
            }),
            (m.once = m.partial(m.before, 2));
          var E = !{ toString: null }.propertyIsEnumerable("toString"),
            L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
          function z(e, t) {
            var a = L.length,
              o = e.constructor,
              n = (m.isFunction(o) && o.prototype) || r,
              s = "constructor";
            for (m.has(e, s) && !m.contains(t, s) && t.push(s); a--; ) (s = L[a]) in e && e[s] !== n[s] && !m.contains(t, s) && t.push(s);
          }
          (m.keys = function (e) {
            if (!m.isObject(e)) return [];
            if (g) return g(e);
            var t = [];
            for (var a in e) m.has(e, a) && t.push(a);
            return E && z(e, t), t;
          }),
            (m.allKeys = function (e) {
              if (!m.isObject(e)) return [];
              var t = [];
              for (var a in e) t.push(a);
              return E && z(e, t), t;
            }),
            (m.values = function (e) {
              for (var t = m.keys(e), a = t.length, o = Array(a), n = 0; n < a; n++) o[n] = e[t[n]];
              return o;
            }),
            (m.mapObject = function (e, t, a) {
              t = b(t, a);
              for (var o, n = m.keys(e), r = n.length, s = {}, i = 0; i < r; i++) s[(o = n[i])] = t(e[o], o, e);
              return s;
            }),
            (m.pairs = function (e) {
              for (var t = m.keys(e), a = t.length, o = Array(a), n = 0; n < a; n++) o[n] = [t[n], e[t[n]]];
              return o;
            }),
            (m.invert = function (e) {
              for (var t = {}, a = m.keys(e), o = 0, n = a.length; o < n; o++) t[e[a[o]]] = a[o];
              return t;
            }),
            (m.functions = m.methods =
              function (e) {
                var t = [];
                for (var a in e) m.isFunction(e[a]) && t.push(a);
                return t.sort();
              }),
            (m.extend = w(m.allKeys)),
            (m.extendOwn = m.assign = w(m.keys)),
            (m.findKey = function (e, t, a) {
              t = b(t, a);
              for (var o, n = m.keys(e), r = 0, s = n.length; r < s; r++) if (t(e[(o = n[r])], o, e)) return o;
            }),
            (m.pick = function (e, t, a) {
              var o,
                n,
                r = {},
                s = e;
              if (null == s) return r;
              m.isFunction(t)
                ? ((n = m.allKeys(s)), (o = y(t, a)))
                : ((n = R(arguments, !1, !1, 1)),
                  (o = function (e, t, a) {
                    return t in a;
                  }),
                  (s = Object(s)));
              for (var i = 0, p = n.length; i < p; i++) {
                var l = n[i],
                  d = s[l];
                o(d, l, s) && (r[l] = d);
              }
              return r;
            }),
            (m.omit = function (e, t, a) {
              if (m.isFunction(t)) t = m.negate(t);
              else {
                var o = m.map(R(arguments, !1, !1, 1), String);
                t = function (e, t) {
                  return !m.contains(o, t);
                };
              }
              return m.pick(e, t, a);
            }),
            (m.defaults = w(m.allKeys, !0)),
            (m.create = function (e, t) {
              var a = f(e);
              return t && m.extendOwn(a, t), a;
            }),
            (m.clone = function (e) {
              return m.isObject(e) ? (m.isArray(e) ? e.slice() : m.extend({}, e)) : e;
            }),
            (m.tap = function (e, t) {
              return t(e), e;
            }),
            (m.isMatch = function (e, t) {
              var a = m.keys(t),
                o = a.length;
              if (null == e) return !o;
              for (var n = Object(e), r = 0; r < o; r++) {
                var s = a[r];
                if (t[s] !== n[s] || !(s in n)) return !1;
              }
              return !0;
            });
          var _ = function e(t, a, o, r) {
            if (t === a) return 0 !== t || 1 / t == 1 / a;
            if (null == t || null == a) return t === a;
            t instanceof m && (t = t._wrapped), a instanceof m && (a = a._wrapped);
            var s = d.call(t);
            if (s !== d.call(a)) return !1;
            switch (s) {
              case "[object RegExp]":
              case "[object String]":
                return "" + t == "" + a;
              case "[object Number]":
                return +t != +t ? +a != +a : 0 == +t ? 1 / +t == 1 / a : +t == +a;
              case "[object Date]":
              case "[object Boolean]":
                return +t == +a;
            }
            var i = "[object Array]" === s;
            if (!i) {
              if ("object" != n(t) || "object" != n(a)) return !1;
              var p = t.constructor,
                l = a.constructor;
              if (
                p !== l &&
                !(m.isFunction(p) && p instanceof p && m.isFunction(l) && l instanceof l) &&
                "constructor" in t &&
                "constructor" in a
              )
                return !1;
            }
            r = r || [];
            for (var u = (o = o || []).length; u--; ) if (o[u] === t) return r[u] === a;
            if ((o.push(t), r.push(a), i)) {
              if ((u = t.length) !== a.length) return !1;
              for (; u--; ) if (!e(t[u], a[u], o, r)) return !1;
            } else {
              var c,
                g = m.keys(t);
              if (((u = g.length), m.keys(a).length !== u)) return !1;
              for (; u--; ) if (((c = g[u]), !m.has(a, c) || !e(t[c], a[c], o, r))) return !1;
            }
            return o.pop(), r.pop(), !0;
          };
          (m.isEqual = function (e, t) {
            return _(e, t);
          }),
            (m.isEmpty = function (e) {
              return null == e || (O(e) && (m.isArray(e) || m.isString(e) || m.isArguments(e)) ? 0 === e.length : 0 === m.keys(e).length);
            }),
            (m.isElement = function (e) {
              return !(!e || 1 !== e.nodeType);
            }),
            (m.isArray =
              c ||
              function (e) {
                return "[object Array]" === d.call(e);
              }),
            (m.isObject = function (e) {
              var t = n(e);
              return "function" === t || ("object" === t && !!e);
            }),
            m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
              m["is" + e] = function (t) {
                return d.call(t) === "[object " + e + "]";
              };
            }),
            m.isArguments(arguments) ||
              (m.isArguments = function (e) {
                return m.has(e, "callee");
              }),
            "object" != ("undefined" == typeof Int8Array ? "undefined" : n(Int8Array)) &&
              (m.isFunction = function (e) {
                return "function" == typeof e || !1;
              }),
            (m.isFinite = function (e) {
              return isFinite(e) && !isNaN(parseFloat(e));
            }),
            (m.isNaN = function (e) {
              return m.isNumber(e) && e !== +e;
            }),
            (m.isBoolean = function (e) {
              return !0 === e || !1 === e || "[object Boolean]" === d.call(e);
            }),
            (m.isNull = function (e) {
              return null === e;
            }),
            (m.isUndefined = function (e) {
              return void 0 === e;
            }),
            (m.has = function (e, t) {
              return null != e && u.call(e, t);
            }),
            (m.noConflict = function () {
              return (e._ = t), this;
            }),
            (m.identity = function (e) {
              return e;
            }),
            (m.constant = function (e) {
              return function () {
                return e;
              };
            }),
            (m.noop = function () {}),
            (m.property = P),
            (m.propertyOf = function (e) {
              return null == e
                ? function () {}
                : function (t) {
                    return e[t];
                  };
            }),
            (m.matcher = m.matches =
              function (e) {
                return (
                  (e = m.extendOwn({}, e)),
                  function (t) {
                    return m.isMatch(t, e);
                  }
                );
              }),
            (m.times = function (e, t, a) {
              var o = Array(Math.max(0, e));
              t = y(t, a, 1);
              for (var n = 0; n < e; n++) o[n] = t(n);
              return o;
            }),
            (m.random = function (e, t) {
              return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
            }),
            (m.now =
              Date.now ||
              function () {
                return new Date().getTime();
              });
          var D = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            U = m.invert(D),
            j = function (e) {
              var t = function (t) {
                  return e[t];
                },
                a = "(?:" + m.keys(e).join("|") + ")",
                o = RegExp(a),
                n = RegExp(a, "g");
              return function (e) {
                return (e = null == e ? "" : "" + e), o.test(e) ? e.replace(n, t) : e;
              };
            };
          (m.escape = j(D)),
            (m.unescape = j(U)),
            (m.result = function (e, t, a) {
              var o = null == e ? void 0 : e[t];
              return void 0 === o && (o = a), m.isFunction(o) ? o.call(e) : o;
            });
          var M = 0;
          (m.uniqueId = function (e) {
            var t = ++M + "";
            return e ? e + t : t;
          }),
            (m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
          var B = /(.)^/,
            V = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            K = /\\|'|\r|\n|\u2028|\u2029/g,
            W = function (e) {
              return "\\" + V[e];
            },
            F = /^\s*(\w|\$)+\s*$/;
          (m.template = function (e, t, a) {
            !t && a && (t = a), (t = m.defaults({}, t, m.templateSettings));
            var n = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
              r = 0,
              i = "__p+='";
            e.replace(n, function (t, a, o, n, s) {
              return (
                (i += e.slice(r, s).replace(K, W)),
                (r = s + t.length),
                a
                  ? (i += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                  : o
                  ? (i += "'+\n((__t=(" + o + "))==null?'':__t)+\n'")
                  : n && (i += "';\n" + n + "\n__p+='"),
                t
              );
            }),
              (i += "';\n");
            var p = t.variable;
            if (p) {
              if (!F.test(p)) throw new Error(p);
            } else (i = "with(obj||{}){\n" + i + "}\n"), (p = "obj");
            i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
              render = new o.window[s](p, "_", i);
            } catch (e) {
              throw ((e.source = i), e);
            }
            var l = function (e) {
              return render.call(this, e, m);
            };
            return (l.source = "function(" + p + "){\n" + i + "}"), l;
          }),
            (m.chain = function (e) {
              var t = m(e);
              return (t._chain = !0), t;
            });
          var q = function (e, t) {
            return e._chain ? m(t).chain() : t;
          };
          (m.mixin = function (e) {
            m.each(m.functions(e), function (t) {
              var a = (m[t] = e[t]);
              m.prototype[t] = function () {
                var e = [this._wrapped];
                return p.apply(e, arguments), q(this, a.apply(m, e));
              };
            });
          }),
            m.mixin(m),
            m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
              var t = a[e];
              m.prototype[e] = function () {
                var a = this._wrapped;
                return t.apply(a, arguments), ("shift" !== e && "splice" !== e) || 0 !== a.length || delete a[0], q(this, a);
              };
            }),
            m.each(["concat", "join", "slice"], function (e) {
              var t = a[e];
              m.prototype[e] = function () {
                return q(this, t.apply(this._wrapped, arguments));
              };
            }),
            (m.prototype.value = function () {
              return this._wrapped;
            }),
            (m.prototype.valueOf = m.prototype.toJSON = m.prototype.value),
            (m.prototype.toString = function () {
              return "" + this._wrapped;
            }),
            (e._okta = m.extend({}, e._okta, m));
        }).call(o.window),
          (e.exports = o._okta);
      },
      484: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p,
          l,
          d,
          u,
          c,
          g,
          v,
          h,
          k = a(710);
        (o = k.Q),
          (n = k.Constants),
          (r = k.BrowserUtil),
          (s = k._okta),
          (i = s.chain),
          (p = s.contains),
          (l = s.flatten),
          (d = s.omit),
          (u = s.reduce),
          (c = k.fn.base.timestamp),
          (g = k.fn.api = {}),
          (h = {
            ENDUSER_HOME: "/api/internal/enduser/home",
            ENDUSER_HOME_V1: (v = "/enduser/api/v1") + "/home",
            TABS: "/api/v1/users/me/home/tabs?expand=items%2Citems.resource",
            ENDUSER_SECTIONS_V1: v + "/sections?expand=items%2Citems.resource",
            ENDUSER_RECENTLY_USED_APPS: "/api/internal/enduser/recently-used-apps",
            ENDUSER_RECENTLY_USED_APPS_V1: v + "/recently-used-apps",
            ENDUSER: "/api/enduser/v1",
            ENDUSER_VAULT: "/api/internal/enduser/vault",
            PERSONAL_ENDUSER: "/okta-personal/api/v1",
            OKTA_PERSONAL_CORE_SERVICE_ROOT_URL: "/okta-personal/api/v2/core"
          }),
          (g.prependPath = function (e) {
            return "/api/plugin/2" + e;
          }),
          (g.prependEndUserPath = function (e) {
            return h.ENDUSER + e;
          }),
          (g.prependPersonalEndUserPath = function (e) {
            return h.PERSONAL_ENDUSER + e;
          }),
          (g.getEndUserHomeUri = function (e) {
            return e && e.orgSettings && e.orgSettings.pluginNewEndUserInternalAPIsEnabled ? h.ENDUSER_HOME_V1 : h.ENDUSER_HOME;
          }),
          (g.getEndUserHomeUriAppendPluginSettings = function (e) {
            return [g.getEndUserHomeUri(e), e];
          }),
          (g.getRecentlyUsedAppsUri = function (e) {
            return e && e.orgSettings && e.orgSettings.pluginNewEndUserInternalAPIsEnabled
              ? h.ENDUSER_RECENTLY_USED_APPS_V1
              : h.ENDUSER_RECENTLY_USED_APPS;
          }),
          (g.getRecentlyUsedAppsPersonalUri = function (e) {
            return function () {
              return h.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/recently_used_app/" + e;
            };
          }),
          (g.getEndUserVaultUri = function (e) {
            return e && e.orgSettings && e.orgSettings.pluginOktaPersonalCoreServiceEnabled
              ? h.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/me"
              : h.ENDUSER_VAULT;
          }),
          (g.getPOktaMonolithEndUserVaultUri = function () {
            return h.ENDUSER_VAULT;
          }),
          (g.getSelfServiceSiteInfo = function (e) {
            return e && e.orgSettings && e.orgSettings.pluginRunOnAppSignupEnabled
              ? "/self-service-site-maps"
              : "/hashed-self-service-sites";
          }),
          (g.getCheckPluginFirstPartyAppUri = function () {
            return g.prependPath("/check-plugin-session?check_fpa=true");
          }),
          (g.getToSettings = function (e, t) {
            var a = -1 == e.indexOf("?") ? "?" : "&";
            return {
              type: "get",
              url: e + a + "plugin_version=" + t.backgroundVersion + "-" + t.contentVersion,
              headers: { Accept: "application/json;charset=utf-8" }
            };
          }),
          (g.postToSettings = function (e, t) {
            return { type: "post", url: e, data: t, headers: { Accept: "application/json;charset=utf-8" } };
          }),
          (g.patchToSettings = function (e, t) {
            return { type: "PATCH", url: e, data: t, headers: { Accept: "application/json;charset=utf-8" } };
          }),
          (g.getTabsPathInfo = function (e) {
            if (e && e.orgSettings && e.orgSettings.pluginOktaPersonalCoreServiceEnabled)
              return h.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/me/tabs";
            var t = e.orgSettings && e.orgSettings.pluginNewEndUserSectionsAPIsEnabled ? h.ENDUSER_SECTIONS_V1 : h.TABS;
            return e.orgSettings && e.orgSettings.pluginPopoverQuickAccessAppsEnabled ? t + "&type=all" : t;
          }),
          (g.getOktaPersonalCoreServiceTabsUri = function () {
            return h.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/tabs";
          }),
          (g.isEnduserHomeValid = function (e) {
            return !!e && !!e.userId && !!e.orgId;
          }),
          (g.postToPendoTrackEventSettings = function (e, t, a, o) {
            var s = t.timestamp || c(),
              i = d(t, "timestamp"),
              l = {
                type: "track",
                event: e,
                visitorId: a.userId,
                accountId: a.orgId,
                timestamp: s,
                properties: i,
                context: { userAgent: r.getUserAgent(), title: "okta-plugin" }
              },
              u = p(n.OktaPersonalOrgIds, a.orgId) ? "d962b3a3-fb4e-4fe6-507a-39e016bb3fb4" : "cc0bda8c-c34a-4b91-5719-634058959cf0";
            return {
              type: "post",
              url: o ? n.PendoEventTrackUrlDebug : n.PendoEventTrackUrl,
              data: JSON.stringify(l),
              headers: { "content-type": "application/json", "x-pendo-integration-key": u }
            };
          }),
          (g.setSessionData = function (e, t) {
            return e ? (e.idx ? (t["X-Okta-Idx-Session-Jwe"] = e.idx) : ((t["X-Session-Id"] = e.sid), (t["X-Device-Token"] = e.DT)), t) : t;
          }),
          (g.setAuthData = function (e, t) {
            return e && e.access_token && (t.Authorization = "Bearer " + e.access_token.accessToken), t;
          }),
          (g.createApiForAccount = function (e, t) {
            var a = new k.Storage(e),
              o = new k.CryptoManager(window);
            return a.readMultiAccount().then(function () {
              return a.setCurrentAccountIndex(t), new k.Api(e, a, o);
            });
          }),
          (g.paginateRequest = function (e, t, a) {
            var n = i(t)
              .groupBy(function (e, t) {
                return Math.floor(t / a);
              })
              .toArray()
              .value();
            return u(
              n,
              function (t, a) {
                return t.then(function (t) {
                  return e(a).then(function (e) {
                    return t.push(e), o(t);
                  });
                });
              },
              o([])
            ).then(function (e) {
              return l(e, 1);
            });
          }),
          (e.exports = k.fn.api);
      },
      231: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p,
          l,
          d,
          u,
          c,
          g = a(710);
        (o = g._okta),
          (n = o.toArray),
          (r = o.delay),
          (s = o.isNull),
          (i = o.isUndefined),
          (p = o.tap),
          (l = o.map),
          (d = JSON.stringify),
          (u = g.guid),
          ((c = g.fn.base = {}).curry2 = function (e) {
            return function (t) {
              return function (a) {
                return e(t, a);
              };
            };
          }),
          (c.curry3 = function (e) {
            return function (t) {
              return function (a) {
                return function (o) {
                  return e(t, a, o);
                };
              };
            };
          }),
          (c.always = c.curry2(function (e) {
            return e;
          })),
          (c.dot = c.curry2(function (e, t) {
            return t[e];
          })),
          (c.dot2 = c.curry3(function (e, t, a) {
            return a[e][t];
          })),
          (c.splat = c.curry2(function (e, t) {
            return e.apply(this, t);
          })),
          (c.argsToTuple = function () {
            return n(arguments);
          }),
          (c.timestamp = function () {
            return new Date().getTime();
          }),
          (c.guid = u),
          (c.delay = c.curry2(function (e, t) {
            return r(t, e);
          })),
          (c.invoke = function (e) {
            return e.call();
          }),
          (c.equal = c.curry2(function (e, t) {
            return e === t;
          })),
          (c.not = function (e) {
            return !e;
          }),
          (c.emptyOrTimeout = function (e, t) {
            return !t || c.timestamp() - t > e;
          }),
          (c.orDefault = c.curry2(function (e, t) {
            return s(t) || i(t) ? e : t;
          })),
          (c.fmapObject = c.curry3(function (e, t, a) {
            return (a[e] = t(a[e])), a;
          })),
          (c.tap = c.curry2(function (e, t) {
            return p(t, e);
          })),
          (c.validator = function (e, t) {
            return function () {
              var a = n(arguments);
              if (!e.apply(this, a)) throw new Error(t + ": " + d(a));
              return a;
            };
          }),
          (c.keyToCamelCase = function (e) {
            return l(e.toLowerCase().split("_"), function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            }).join("");
          }),
          (e.exports = g.fn.base);
      },
      285: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p = a(710);
        (o = p.fn.loc = {}),
          (n = p._okta),
          (r = n.reduce),
          (s = n.keys),
          (i = n.escape),
          (o.localize = function (e, t, a) {
            var o = t.en,
              n = (t[a] || o)[e] || o[e];
            return n ? decodeURIComponent(n) : "L10N_ERROR[" + i(e) + "]";
          }),
          (o.localizeTemplate = function (e, t, a, n, i) {
            var p = t.en,
              l = s(p);
            return r(
              l,
              function (e, r) {
                var s = o.localize(r, t, a);
                return e.replace(new RegExp(n + r + i, "g"), s);
              },
              e
            );
          }),
          (e.exports = p.fn.loc);
      },
      961: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p,
          l,
          d = a(710);
        (o = d._okta),
          (n = o.compose),
          (r = d.fn.base.not),
          (s = o.isNull),
          (i = d.fn.base.curry2),
          (p = o.isString),
          ((l = d.fn.other = {}).string = {}),
          (l.string.append = i(function (e, t) {
            return t + e;
          })),
          (l.string.endsWith = function (e, t) {
            return e.substr(e.length - t.length) == t;
          }),
          (l.string.stripLeadingWhitespace = function (e) {
            return e.replace(/^\s+/g, "");
          }),
          (l.string.stripWhitespace = function (e) {
            return e.replace(/^\s+|\s+$/g, "");
          }),
          (l.string.toUint8Array = function (e) {
            if (!e) return new Uint8Array(0);
            for (var t = new Uint8Array(e.length), a = 0; a < e.length; ++a) t[a] = e.charCodeAt(a);
            return t;
          }),
          (l.string.genRandomString = function (e) {
            for (var t = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", a = "", o = 0; o < e; ++o)
              a += t[Math.floor(61 * Math.random())];
            return a;
          }),
          (l.string.base64UrlToBase64 = function (e) {
            return e.replace(/-/g, "+").replace(/_/g, "/");
          }),
          (l.string.base64UrlToString = function (e) {
            var t = l.string.base64UrlToBase64(e);
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw "Not a valid Base64Url";
            }
            var a = window.atob(t);
            try {
              return window.decodeURIComponent(window.escape(a));
            } catch (e) {
              return a;
            }
          }),
          (l.string.base64UrlDecode = function (e) {
            return window.atob(l.string.base64UrlToBase64(e));
          }),
          (l.string.base64ToBase64Url = function (e) {
            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          }),
          (l.string.stringToBase64Url = function (e) {
            var t = window.btoa(e);
            return l.string.base64ToBase64Url(t);
          }),
          (l.string.arrayBufferToBase64Url = function (e) {
            return l.string.base64ToBase64Url(l.string.arrayBufferToBase64(e));
          }),
          (l.string.arrayBufferToBase64 = function (e) {
            return window.btoa(String.fromCharCode.apply(null, e));
          }),
          (l.string.base64UrlToArrayBuffer = function (e) {
            return l.string.toUint8Array(l.string.base64UrlDecode(e));
          }),
          (l.string.isSubString = function (e, t) {
            if (!p(e) || !p(t)) return !1;
            if (0 === e.length || 0 === t.length) return !1;
            var a = e,
              o = t;
            return e.length > t.length && ((o = e), (a = t)), o.indexOf(a) >= 0;
          }),
          (l.string.hashCode = function (e) {
            if (!p(e)) return "";
            for (var t = 0, a = 0; a < e.length; a++) t = (Math.imul(31, t) + e.charCodeAt(a)) | 0;
            return t + "";
          }),
          (l.filters = {}),
          (l.filters.byKeyEqual = function (e, t) {
            return function (a) {
              return a[e] === t[e];
            };
          }),
          (l.predicates = {}),
          (l.predicates.notNull = n(r, s)),
          (l.versionAtLeast = function (e, t) {
            if (!e || !t) return !1;
            var a, o, n, r;
            for (n = e.split("."), r = t.split("."), a = 0; a < n.length; a++)
              if (0 != (o = parseInt(n[a], 10) - parseInt(r[a], 10))) return o > -1;
            return !0;
          }),
          (l.isSiteFlowProgressComplete = function (e) {
            return !!e && !!e.username && !!e.password;
          }),
          (l.addEventListenerToWindow = function (e, t) {
            if (window.spaState) {
              if (!window.spaState.eventListeners || window.spaState.eventListeners[e]) return;
              window.addEventListener(e, t), (window.spaState.eventListeners[e] = !0);
            }
            window.addEventListener(e, t);
          }),
          (e.exports = d.fn.other);
      },
      374: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p,
          l,
          d,
          u,
          c,
          g,
          v,
          h = a(710);
        (o = h.Q),
          (n = h._okta),
          (r = n.delay),
          (s = n.reduce),
          (i = n.rest),
          (p = h.Q.when),
          (l = h.fn.base.curry2),
          (d = h.fn.base.curry3),
          (u = h.fn.base.splat),
          (c = n.toArray),
          (g = h.Q.defer),
          ((v = h.fn.promises = {}).pipelineP = function (e) {
            return s(i(arguments), p, e);
          }),
          (v.composeP = function () {
            var e = c(arguments).reverse();
            return (
              (e[0] = u(e[0])),
              function () {
                var t = c(arguments);
                return e.unshift(t), v.pipelineP.apply(this, e);
              }
            );
          }),
          (v.tapP = l(function (e, t) {
            return p(e(t), function () {
              return t;
            });
          })),
          (v.fmapObjectP = d(function (e, t, a) {
            return p(t(a[e]), function (t) {
              return (a[e] = t), a;
            });
          })),
          (v.pollP = function (e, t, a, o) {
            var n = g();
            return (
              (function e(o, n) {
                p(
                  o(),
                  function (r) {
                    t(r)
                      ? n.resolve(r)
                      : setTimeout(function () {
                          e(o, n);
                        }, a);
                  },
                  function (e) {
                    n.reject(e);
                  }
                );
              })(e, n),
              o &&
                r(function () {
                  n.reject("pollP timeout");
                }, o),
              n.promise
            );
          }),
          (v.filterP = function (e, t) {
            return o.all(t.map(e)).then(function (e) {
              return t.filter(function (t, a) {
                return !!e[a];
              });
            });
          }),
          (v.rejectIfFalse = function (e) {
            return e || o.reject();
          }),
          (v.runIfTrue = l(function (e, t) {
            return t && e(t);
          })),
          (e.exports = h.fn.promises);
      },
      429: function (e, t, a) {
        var o = a(710);
        !(function () {
          var e = (o.fn.settings = {}),
            t = o.fn.promises.pipelineP,
            a = o.fn.base.curry3,
            n = o.fn.base.curry2,
            r = o._okta.partial,
            s = o.fn.other.versionAtLeast,
            i = o.fn.promises.runIfTrue;
          function p(e, t) {
            return t && t.orgSettings && t.orgSettings[e];
          }
          (e.ifEnabledCurried = a(function (e, a, o) {
            return t(e.getPluginSettings(), r(p, a), i(o));
          })),
            (e.ifEnabled = function (t, a, o) {
              return e.ifEnabledCurried(t)(a)(o);
            }),
            (e.ifPluginVersionSupported = function (e, a) {
              return n(function (o) {
                return t(
                  e.getBackgroundVersion(),
                  function (e) {
                    return s(e, a);
                  },
                  i(o)
                );
              });
            });
        })(),
          (e.exports = o.fn.settings);
      },
      933: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p,
          l,
          d,
          u,
          c,
          g = a(710);
        (o = g.fn.storage = {}),
          (n = JSON.stringify),
          (r = JSON.parse),
          (s = g.Q),
          (i = g._okta),
          (p = i.partial),
          (l = i.keys),
          (d = i.map),
          (u = i.each),
          (c = 90 * g.Constants.Time.OneDay),
          (o.wrapVal = function (e) {
            return n({ val: e });
          }),
          (o.unwrapVal = function (e) {
            return e ? r(e).val : null;
          }),
          (o.updateAcknowledgedActions = function (e, t) {
            return s.all([e.getAckTimes(), e.getTrackedFirstTimeActions()]).spread(function (a, o) {
              if (!o.suppressPasswordAck)
                return a.suppressPasswordAck
                  ? Date.now() - a.suppressPasswordAck > c
                    ? ((o.suppressPasswordAck = !0), e.setTrackedFirstTimeActions(o).then(p(t.updateBadge, { text: "", color: "" })))
                    : void 0
                  : ((a.suppressPasswordAck = Date.now()), e.setAckTimes(a));
            });
          }),
          (o.getUserPinnedOnToolbar = function (e) {
            return e.getUserPinned().fail(function (e) {
              return (
                Log.warn(
                  "fnStorage::getUserPinnedOnToolbar: failed to update user pinned on toolbar, returning false, error: " + e.errorCode
                ),
                !1
              );
            });
          }),
          (o.updateUserPinnedOnToolbar = function (e, t) {
            return o.getUserPinnedOnToolbar(t).then(e.setUserPinnedOnToolbar);
          }),
          (o.apiStorage = {
            get: function (e) {
              var t = g.Q.defer();
              return (
                chrome.storage.local.get(e, function (a) {
                  chrome.runtime.lastError && t.reject(chrome.runtime.lastError.message), t.resolve(a[e]);
                }),
                t.promise
              );
            },
            set: function (e, t) {
              var a = g.Q.defer(),
                o = {};
              return (
                (o[e] = t),
                chrome.storage.local.set(o, function () {
                  chrome.runtime.lastError && a.reject(chrome.runtime.lastError.message), a.resolve(t);
                }),
                a.promise
              );
            },
            remove: function (e) {
              var t = g.Q.defer();
              return chrome.storage.local.remove(e, t.resolve), t.promise;
            },
            clear: function () {
              var e = g.Q.defer();
              return (
                chrome.storage.local.clear(function () {
                  chrome.runtime.lastError && e.reject(chrome.runtime.lastError.message), e.resolve(!0);
                }),
                e.promise
              );
            },
            getAll: function () {
              var e = g.Q.defer();
              return (
                chrome.storage.local.get(null, function (t) {
                  chrome.runtime.lastError && e.reject(chrome.runtime.lastError.message), e.resolve(t);
                }),
                e.promise
              );
            }
          }),
          (o.syncStorageData = function (e, t) {
            var a = l(e),
              n = d(a, function (t) {
                return o.apiStorage.get(e[t].key).then(function (a) {
                  e[t].val = a;
                });
              });
            s.all(n).then(function () {
              chrome.storage.onChanged.addListener(function (o, n) {
                if ("local" === n) {
                  var r = !1;
                  u(a, function (t) {
                    var a = e[t].key;
                    void 0 !== o[a] && ((e[t].val = o[a].newValue), (r = !0));
                  }),
                    r && t && t();
                }
              }),
                t && t();
            });
          }),
          (o.siteFlowDataToFlow = function (e) {
            var t = { urls: {}, scripts: {}, message: e.message || "Signing in...", statusURI: e.statusURI || null, enteredFlow: !1 };
            return (
              e.flow &&
                ((t.urls = e.flow.urls.match),
                (t.annotated = e.flow.annotated),
                (t.appName = e.flow.appName),
                (t.signOnModeType = e.flow.signOnModeType),
                e.flow.scripts &&
                  u(e.flow.scripts.script, function (e) {
                    t.scripts[e.name] = e;
                  })),
              t
            );
          }),
          (e.exports = g.fn.storage);
      },
      91: function (e, t, a) {
        var o,
          n,
          r,
          s,
          i,
          p = a(710);
        (o = p.Constants),
          (n = p._okta),
          (r = n.each),
          (s = n.find),
          ((i = p.fn.tabs = {}).isQuickAccessTab = function (e) {
            return !!e && 0 === e.indexOf(o.QuickAccessTabIdPrefix);
          }),
          (i.getTabById = function (e, t, a) {
            return i.isQuickAccessTab(e) && a ? a.get(e) : t ? t.get(e) : null;
          }),
          (i.createEndUserTabs = function (e) {
            if (e) {
              var t = [],
                a = [],
                o = [];
              return (
                r(e, function (e) {
                  var n = { id: e.id, label: e.label, sortOrder: e.sortOrder };
                  r(e._embedded.items, function (e) {
                    var t = e._embedded.resource;
                    (t.tabId = n.id), (t.appLinkId = e.id), (t.sortOrder = e.sortOrder), o.push(t);
                  }),
                    i.isQuickAccessTab(n.id) ? a.push(n) : t.push(n);
                }),
                { tabs: t, quickAccessTabs: a, appLinks: o }
              );
            }
            return null;
          }),
          (i.getAppByAppInstanceId = function (e, t) {
            return e.getTabs().then(function (e) {
              if (e && e.appLinks)
                return s(e.appLinks, function (e) {
                  return e.appInstanceId === t;
                });
            });
          }),
          (e.exports = p.fn.tabs);
      },
      558: function (e, t, a) {
        var o = a(710);
        !(function () {
          var e = o.parseUri,
            t = o._okta,
            a = t.any,
            n = t.compose,
            r = t.contains,
            s = t.partial,
            i = t.each,
            p = t.find,
            l = t.flatten,
            d = t.last,
            u = t.min,
            c = t.reduce,
            g = t.isMatch,
            v = t.some,
            h = o.fn.other.string.endsWith,
            k = t.pick,
            m = (o.fn.url = {}),
            y = ["okta.mil", "okta-miltest.com", "okta-gov.com", "trex-gov.com"],
            b = l([
              "cloudareanet.com",
              "clouditude.com",
              "hioktane.com",
              "lowoktane.com",
              "openalloy.com",
              "okta.com",
              "okta1.com",
              "okta-emea.com",
              "oktapreview.com",
              "perfcloud.org",
              "primeapp.com",
              "trexcloud.com",
              "widerock.com",
              "okta.ninja",
              y
            ]),
            w = "-admin",
            f = ["/app/UserHome", "/app/Home", "/enduser"],
            P = ["/app/UserHome", "/plugin/bookmark", "/home/plugin", "/enduser/app-settings"],
            S = [
              { path: "/oauth2/v1/authorize", queryKey: { client_id: o.Constants.AuthOptions.PLUGIN_CLIENT_ID } },
              { path: "/discovery/iframe.html" },
              { path: "/login/token/redirect" }
            ],
            A = [
              "www.okta.com",
              "trust.okta.com",
              "system.okta.com",
              "static.okta.com",
              "support.okta.com",
              "developer.okta.com",
              "login.okta.com",
              "help.okta.com",
              "trustro.okta.com",
              "investor.okta.com",
              "oanmanager.okta.com",
              "oinmanager.okta.com",
              "devforum.okta.com",
              "store.okta.com",
              "status.okta.com",
              "survey.okta.com",
              "infra.okta.com",
              "workflow.okta.com",
              "productfeedback.okta.com",
              "productfeedbacksandbox.okta.com",
              "regionalevents.okta.com",
              "workflows.okta.com",
              "ideas.okta.com",
              "rewards.okta.com",
              "pages.okta.com",
              "sec.okta.com",
              "personal.okta.com",
              "profile.okta.com",
              "partner.okta.com",
              "id.okta.com"
            ],
            O = ["/app/*/*/sso/saml*", "/app/office365/*/*"],
            x = ["/sso/wsfed/signout"],
            T = [
              "www.amazon.com",
              "accounts.google.com",
              "www.paypal.com",
              "login.xfinity.com",
              "account.t-mobile.com",
              "twitter.com",
              "login.yahoo.com",
              "www.walmart.com",
              "www.cvs.com",
              "accounts.intuit.com"
            ],
            R = "/app/UserHome",
            N = "/enduser/addapp",
            C = "/enduser/personal/askpin";
          function I(e) {
            var t = [];
            return (
              i(b, function (a) {
                var n = a + e;
                t.push("https://*." + n), o.Config.allowOktaHttp && t.push("http://*." + n);
              }),
              t
            );
          }
          function E(e, t) {
            var o = t.split(".");
            if (o.length < 2) return !1;
            var n = o[o.length - 2] + "." + o[o.length - 1];
            return a(e, function (e) {
              return e === n;
            });
          }
          (m.isHomepageIframePath = function (e) {
            return !!p(S, function (t) {
              return m.isUrlPathStartsWith(e, t.path) && (!t.queryKey || g(e.queryKey, t.queryKey));
            });
          }),
            (m.isUrlPathStartsWith = function (e, t) {
              return e.path === t || 0 === e.path.indexOf(t + "/");
            }),
            (m.hrefToUrlParts = function (t) {
              var a = e(t);
              return (a.href = t), k(a, "anchor", "path", "port", "host", "protocol", "href", "queryKey");
            }),
            (m.locationToUrlParts = function (t) {
              return {
                anchor: t.hash.replace("#", ""),
                path: t.pathname,
                port: t.port,
                host: t.hostname,
                protocol: t.protocol.replace(":", ""),
                href: t.href,
                queryKey: e(t.search).queryKey
              };
            }),
            (m.urlPartsToHref = function (e) {
              return e.href;
            }),
            (m.urlPartsToDomain = function (e) {
              var t = e.protocol + "://" + e.host;
              return "" !== e.port && (t += ":" + e.port), t;
            }),
            (m.urlPartsToDomainWithoutPort = function (e) {
              return e.protocol + "://" + e.host;
            }),
            (m.urlPartsToDomainAndPath = function (e) {
              return m.urlPartsToDomain(e) + e.path;
            }),
            (m.replaceUrlPartsPath = function (e, t) {
              return m.hrefToUrlParts(m.urlPartsToDomain(e) + t);
            }),
            (m.removeTrailingSlash = function (e) {
              if (e) {
                var t = e.replace(/^\s+|\s+$/gm, "");
                return (t = t.replace(/\/+$/, ""));
              }
            }),
            (m.getOktaDomains = function () {
              return b;
            }),
            (m.isOktaPage = function (e, t) {
              return (
                !(!o.Config.allowOktaHttp && "https" !== e.protocol) &&
                !(t && !m.isUrlPathStartsWith(e, t)) &&
                (!(!o.Config.allowLocalHostOrServer || "localhost" !== e.host) || E(b, e.host))
              );
            }),
            (m.isOktaLoginAccounts = function (e) {
              return m.isOktaPage(e) && "login.okta.com" === e.host;
            }),
            (m.isOktaHref = n(m.isOktaPage, m.hrefToUrlParts)),
            (m.isOktaAdminPage = function (e) {
              var t = e.host.split(".");
              return m.isOktaPage(e) && h(t[0], w);
            }),
            (m.isOktaEndUserHomePage = function (e) {
              return m.isOktaHref(e.href) && !m.isOktaAdminPage(e) && m.isOktaEndUserHomePagePath(e);
            }),
            (m.isOktaEndUserHomePagePath = function (e) {
              return !!p(f, s(m.isUrlPathStartsWith, e));
            }),
            (m.isOktaPluginHomePagePath = function (e) {
              return !!p(P, s(m.isUrlPathStartsWith, e));
            }),
            (m.isOktaPluginHomePage = function (e) {
              return !!p(P, function (t) {
                return m.isOktaPage(e, t);
              });
            }),
            (m.isOktaPersonalOnboardingPage = function (e) {
              var t = m.urlPartsToDomain(e);
              return (
                m.isOktaPersonalAccount(t) &&
                (m.isOktaPage(e, "/enduser/personal/onboarding/welcome") || m.isOktaPage(e, "/enduser/personal/onboarding/pin"))
              );
            }),
            (m.isOktaPersonalLandingPage = function (e) {
              var t = m.urlPartsToDomain(e);
              return m.isOktaPersonalAccount(t) && m.isOktaPage(e, N);
            }),
            (m.isOktaPersonalAllowListedUrlChange = function (e, t) {
              return (
                (e.path.startsWith(N) && t.path.startsWith(R)) ||
                (e.path.startsWith("/enduser/importapps") && t.path.startsWith(R)) ||
                (e.path.startsWith("/enduser/app-settings") && t.path.startsWith(R)) ||
                (!e.path.startsWith(C) && t.path.startsWith(C))
              );
            }),
            (m.isAskPin = function (e) {
              var t = m.urlPartsToDomain(e);
              return m.isOktaPersonalAccount(t) && m.isOktaPage(e, C);
            }),
            (m.isOktaPersonalBootstrapPage = function (e) {
              var t = m.urlPartsToDomain(e);
              return m.isOktaPersonalAccount(t) && (m.isOktaPersonalLandingPage(e) || m.isAskPin(e));
            }),
            (m.isOktaPersonalPasswordlessOnboardingPage = function (e) {
              var t = m.urlPartsToDomain(e);
              return m.isOktaPersonalAccount(t) && m.isOktaPage(e, "/enduser/personal/onboarding/passwordless/plugin");
            }),
            (m.isOktaEndUserHomeHref = n(m.isOktaEndUserHomePage, m.hrefToUrlParts)),
            (m.isCustomEndUserHomeHref = function (e, t) {
              if (!e || !t) return !1;
              var a = m.hrefToUrlParts(e),
                o = m.hrefToUrlParts(t);
              return m.isOktaEndUserHomePagePath(a) && a.protocol === o.protocol && a.host === o.host && a.port === o.port;
            }),
            (m.isOktaAppSSOPath = function (e) {
              if (!m.isOktaPage(e)) return !1;
              var t = e.path.split("/");
              return 5 == t.length && "app" === t[1] && t[2].length > 0 && t[3].length > 0 && t[4].length > 0;
            }),
            (m.normalizeOktaSubdomain = function (e) {
              if (m.isOktaAdminPage(e)) {
                var t = e.host.split(".");
                (t[0] = t[0].substr(0, t[0].length - 6)), (e.host = t.join("."));
              }
              return e;
            }),
            (m.isOktaTrustedFQDN = function (e) {
              return r(A, e.host);
            }),
            (m.matchesHref = function (e) {
              var t = new o.Url(m.urlPartsToHref(e));
              return function (e) {
                return t.matches(e);
              };
            }),
            (m.matchesDomains = function (e, t) {
              return m.urlPartsToDomain(e) === m.urlPartsToDomain(t);
            }),
            (m.matchesSubDomains = function (e, t) {
              if (e.protocol != t.protocol || e.port != t.port) return !1;
              var a = e.host,
                o = t.host;
              if (!a || !o) return !1;
              var n = a.split("."),
                r = o.split("."),
                s = u([n.length, 2]);
              return d(n, s).join(".").toLowerCase() === d(r, s).join(".").toLowerCase();
            }),
            (m.getOktaFederatedRequestMatchPatterns = function () {
              return c(
                O,
                function (e, t) {
                  return e.concat(I(t));
                },
                []
              );
            }),
            (m.isAllowedOktaRequestForAuthMonitoring = function (e) {
              return (
                !!e &&
                !!m.isOktaPage(m.hrefToUrlParts(e)) &&
                !p(x, function (t) {
                  return e.indexOf(t) > -1;
                })
              );
            }),
            (m.getMonitoredSitesApiMatchPatterns = function () {
              return I("/api/plugin/2/sites*");
            }),
            (m.getAppInfoFromSiteUrl = function (e) {
              var t = m.hrefToUrlParts(e).path.split("/");
              return "app" === t[1] && t[2] && t[3] ? { appName: t[2], instanceId: t[3] } : null;
            }),
            (m.getOktaDomainsRegexp = function (e) {
              if (!e.length) return null;
              var t = "^";
              return (
                (t += o.Config.allowOktaHttp ? "http[s]?" : "https"),
                (t += "://[^/]+\\.("),
                i(e, function (e) {
                  t += e.replace(".", "\\.") + "|";
                }),
                (t = t.slice(0, -1)),
                (t += ")"),
                (t += o.Config.allowOktaHttp ? "(:[0-9]+)?" : ""),
                (t += "("),
                i(f, function (e) {
                  t += e + "|";
                }),
                (t = t.slice(0, -1)),
                (t += ")")
              );
            }),
            (m.getSubDomain = function (e) {
              var t = e.lastIndexOf(".");
              if (t <= 0) return null;
              --t;
              var a = e.lastIndexOf(".", t);
              return -1 == a || a == t ? null : e.substring(a + 1);
            }),
            (m.isOktaPersonalAccount = function (e) {
              var t = ["https://personal.okta.com", "https://personal.trexcloud.com", "https://personal.clouditude.com"];
              return (
                o.Config.allowLocalHostOrServer &&
                  (t.push("http://localhost"), t.push("https://rain.okta1.com"), t.push("https://personal.okta1.com")),
                r(t, e)
              );
            }),
            (m.isOktaFederalDomain = function (e) {
              var t = m.hrefToUrlParts(e);
              return "https" === t.protocol && E(y, t.host);
            }),
            (m.isMultiStepsAppLoginHost = function (e, t) {
              return (
                !(!t || !t.useNAPDomain || "nap-fake-swa.com" !== e.host) ||
                ("https" == e.protocol &&
                  v(T, function (t) {
                    return t === e.host;
                  }))
              );
            }),
            (m.hrefToDomain = function (e) {
              var t = m.hrefToUrlParts(e);
              return t.host && t.protocol ? m.urlPartsToDomain(t) : "";
            });
        })(),
          (e.exports = o.fn.url);
      },
      32: function (e, t, a) {
        var o,
          n = a(710);
        (o = function () {
          for (var e = [], t = 0; t < 256; t++) e[t] = (t + 256).toString(16).substr(1);
          return e;
        }),
          (n.guid = function () {
            var e,
              t,
              a,
              n = (function () {
                for (var e, t = new Array(16), a = 0; a < 16; a++)
                  0 == (3 & a) && (e = 4294967296 * Math.random()), (t[a] = (e >>> ((3 & a) << 3)) & 255);
                return t;
              })();
            return (
              (n[6] = (15 & n[6]) | 64),
              (n[8] = (63 & n[8]) | 128),
              (e = n),
              (t = 0),
              (a = o())[e[t++]] +
                a[e[t++]] +
                a[e[t++]] +
                a[e[t++]] +
                "-" +
                a[e[t++]] +
                a[e[t++]] +
                "-" +
                a[e[t++]] +
                a[e[t++]] +
                "-" +
                a[e[t++]] +
                a[e[t++]] +
                "-" +
                a[e[t++]] +
                a[e[t++]] +
                a[e[t++]] +
                a[e[t++]] +
                a[e[t++]] +
                a[e[t++]]
            );
          }),
          (e.exports = n.guid);
      },
      510: function (e, t, a) {
        var o = a(710);
        !(function () {
          function e(t) {
            for (var a = e.options, o = a.parser[a.strictMode ? "strict" : "loose"].exec(t), n = {}, r = 14; r--; )
              n[a.key[r]] = o[r] || "";
            return (
              (n[a.q.name] = {}),
              n[a.key[12]].replace(a.q.parser, function (e, t, o) {
                t && (n[a.q.name][t] = o);
              }),
              n
            );
          }
          (e.options = {
            strictMode: !1,
            key: [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor"
            ],
            q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
            parser: {
              strict:
                /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose:
                /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
          }),
            (o.parseUri = e);
        })(),
          (e.exports = o.parseUri);
      },
      287: function (e, t, a) {
        var o = a(710),
          n = a(377);
        (o.EventTracker = function (e, t, a) {
          var r = o._okta,
            s = o.Constants.OktaPersonalOrgIds,
            i = r.extend,
            p = r.contains,
            l = r.partial,
            d = r.filter,
            u = o.Q,
            c = u.all,
            g = {},
            v = "BTN",
            h = "LNK",
            k = "SRCH",
            m = "CHCKBX",
            y = "TOGGLE",
            b = "DIV",
            w = "Popover",
            f = "Plugin Modal",
            P = "Plugin Inline",
            S = "Plugin General",
            A = "Settings page",
            O = "Personal Okta Survey Modal",
            x = "Newtab",
            T = "SiteFlow",
            R = { EU: "EU", CLOSE: "Close", HIDE: "Hide", INSTALL: "Installation complete" },
            N = { SIGN_IN: "Sign in", NEVER_SIGNIN: "Never sign in" },
            C = { LOGIN_ON_SIGNUP: "Login on signup" },
            I = { SAVE_NEW_PW: "Save new PW" },
            E = {
              SAVE_PW: "Save PW",
              NEVER_THIS_APP: "Never for this app",
              DISABLE_ALL_APP: "Disable for all apps",
              ADD_APP_SUCCESS: "Add App"
            },
            L = { SHOWED: "Survey showed", NOT_INTERESTED: "Not interested", INTERESTED: "Interested" },
            z = {
              SIGN_UP: "Sign up with Okta Personal",
              SIGN_IN: "Sign in with Okta Personal",
              NOT_NOW: "Not now with Okta Personal",
              DONE: "Done sign up with Okta Personal",
              GOTO_DASHBOARD: "Go to Okta Personal dashboard"
            },
            _ = { SHOWED: "Enter PIN modal shown" },
            D = { SIGN_IN: "Sign in" },
            U = {
              FILL_FORM_NEW_PW: "Fill form with new password",
              FILL_FORM_CUR_PW: "Fill current password",
              GENERATE_PW: "Generate password",
              CONFIGURE_PW: "Settings"
            },
            j = {
              REFRESH_PW: "Refresh password",
              COPY_PW: "Copy password",
              AUTOFILL_PW: "Autofill password",
              SHOW_PW_GENERATOR: "Show password generator"
            },
            M = { VERIFY: "Verify yourself with Okta" },
            B = { REAUTH: "Reauth yourself with Okta" },
            V = { LEAVE: "Get me out of here", CONTINUE: "I understand, continue" },
            K = {
              CHICLET: "Chiclet",
              TAB: "Tab",
              SEARCH_APPS: "Search Apps",
              SETTINGS: "Settings",
              WEB_VER: "Web Version",
              ACCOUNT: "Account",
              ACCOUNT_SWITCH: "Account Switcher",
              DELETE_ACCOUNT: "Delete Account",
              TRUST: "Trust",
              REJECT: "Reject",
              PERMISSIONS_PAGE: "Permissions Page",
              RATINGS_CLOSE: "Closed Ratings Banner",
              RATINGS_THUMBS_UP: "Thumbs Up",
              RATINGS_THUMBS_DOWN: "Thumbs Down",
              RATINGS_OPEN_REVIEWS: "Opened Reviews Page",
              NEWTAB_CLOSE: "Closed Newtab Banner",
              NEWTAB_ENABLED: "Enabled Newtab",
              ADD_APP: "Add new app",
              COPY_USERNAME_FROM_DROPDOWN: "Copy username from dropdown",
              COPY_PASSWORD_FROM_DROPDOWN: "Copy password from dropdown",
              COPY_PASSWORD_SHORTCUT: "Copy password shortcut",
              VIEW_DETAILS_FROM_DROPDOWN: "View details from dropdown",
              EXPAND_ACCOUNT_PERSONAL: "Expand account switcher",
              COLLAPSE_ACCOUNT_SWITCHER_PERSONAL: "Collapse account switcher",
              ACCOUNT_MENU_PERSONAL: "Account menu",
              ADD_PERSONAL_ACCOUNT_PERSONAL: "Add personal account",
              ADD_ORG_ACCOUNT_PERSONAL: "Add org account",
              PLUGIN_SETTINGS_PERSONAL: "Plugin settings",
              OPEN_DASHBOARD_PERSONAL: "Open dashboard",
              ADMIN_PERSONAL: "Admin",
              ACCOUNT_SETTINGS_PERSONAL: "Account settings",
              REMOVE_ACCOUNT_PERSONAL: "Remove Account",
              LONG_LOADING: "Long load",
              ASK_FOR_PIN: "Ask for PIN",
              VAULT_LOCKOUT: "Vault Lockout",
              COPY_RECOVERY_KEY: "Copy Recovery Key",
              USE_RECOVERY_KEY: "Recovery Key Continue",
              WRONG_RECOVERY_KEY: "Wrong Recovery Key",
              ERROR_DISMISSING_RECOVERY_KEY_VIEW: "Error dismissing passwordless recovery key view",
              ERROR_UNLOCKING_PASSWORDLESS_VAULT: "Error unlocking passwordless vault",
              ERROR_CREATING_PASSWORDLESS_VAULT: "Error creating passwordless vault",
              PASSWORDLESS_UNLOCK_CHALLENGE: "Push to Unlock Challenge",
              CREATED_PASSWORDLESS_VAULT: "Passwordless create success",
              UPDATED_PASSWORDLESS_VAULT: "Passwordless upgrade success"
            },
            W = { SETTINGS: "Settings" },
            F = { CHICLET: "Chiclet", TAB: "Tab", SEARCH_APPS: "Search Apps", DASHBOARD: "Dashboard", THEME: "Theme" };
          function q(e, t, a) {
            return d([e, t, a], function (e) {
              return !!e;
            }).join(" | ");
          }
          g.trackEvent = function (o, r) {
            return (
              r || (r = {}),
              e
                .getPluginSettings()
                .then(function (e) {
                  return !(!e || !e.orgSettings || !e.orgSettings.pluginPendoTrackingEnabled);
                })
                .then(function (l) {
                  return l
                    ? c([
                        t.getBrowserType(),
                        e.getVersion(),
                        t.getBackgroundVersion(),
                        e.getEnduserHome(),
                        e.getDBGPluginSettings()
                      ]).spread(function (e, t, l, d, c) {
                        p(s, d.orgId) && (r.isPersonalOrg = !0);
                        var g = i({ browser: e, pluginVersion: l, thrushVersion: t ? t.contentVersion : "@@CONTENT_SCRIPT_VERSION" }, r),
                          v = !!c && !0 === c.useDebugPendoUrl;
                        return (function (e, t, o, r) {
                          try {
                            return (
                              a
                                .trackPendoEvent(e, t, o, r)
                                .fail(function (e) {
                                  return n.error("EventTracker:: api.trackPendoEvent: " + e), u();
                                })
                                .done(),
                              u()
                            );
                          } catch (e) {
                            return n.error("EventTracker:: trackPendoEvent: " + e), u();
                          }
                        })(o, g, d, v);
                      })
                    : u(!1);
                })
            );
          };
          var H = l(q, r, r, w),
            G = l(q, r, r, f),
            Y = l(q, r, r, P),
            $ = l(q, r, r, S),
            J = l(q, r, r, A),
            Z = l(q, r, r, x),
            Q = l(q, r, r, T);
          function X() {
            return u();
          }
          return (
            (g.installation = { trackInstallation: l(g.trackEvent, $(null, R.INSTALL)) }),
            (g.modalGeneral = { trackShowModal: l(g.trackEvent, G(null, R.EU)), trackCloseModal: l(g.trackEvent, G(v, R.CLOSE)) }),
            (g.inlineGeneral = { trackShowDropDown: l(g.trackEvent, Y(null, R.EU)), trackHideDropDown: l(g.trackEvent, Y(null, R.HIDE)) }),
            (g.onTheFlyAppAddition = {
              trackClickPrimaryButton: l(g.trackEvent, G(v, E.SAVE_PW)),
              trackClickNeverButton: l(g.trackEvent, G(v, E.NEVER_THIS_APP)),
              trackClickFooterLink: l(g.trackEvent, G(h, E.DISABLE_ALL_APP)),
              trackAddAppSuccess: l(g.trackEvent, $("Add App Success", E.ADD_APP_SUCCESS))
            }),
            (g.personalOktaExperience = {
              trackSurveyShowed: l(g.trackEvent, q("Page", L.SHOWED, O)),
              trackClickNotInterestedButton: l(g.trackEvent, q(v, L.NOT_INTERESTED, O)),
              trackClickInterestedButton: l(g.trackEvent, q(v, L.INTERESTED, O)),
              trackCloseModal: l(g.trackEvent, q(v, R.CLOSE, O))
            }),
            (g.personalOktaSocialLogin = {
              trackClickSignupButton: l(g.trackEvent, G(v, z.SIGN_UP)),
              trackClickSigninButton: l(g.trackEvent, G(v, z.SIGN_IN)),
              trackClickNotNowButton: l(g.trackEvent, G(v, z.NOT_NOW)),
              trackClickDoneButton: l(g.trackEvent, G(v, z.DONE)),
              trackClickDashboardLink: l(g.trackEvent, G(h, z.GOTO_DASHBOARD))
            }),
            (g.personalOktaPinMissing = { trackModalShown: l(g.trackEvent, G(null, _.SHOWED)) }),
            (g.savePassword = { trackClickPrimaryButton: l(g.trackEvent, G(v, I.SAVE_NEW_PW)) }),
            (g.offline = {
              trackClickPrimaryButton: l(g.trackEvent, G(v, D.SIGN_IN)),
              trackClickInlinePrimaryButton: l(g.trackEvent, Y(v, D.SIGN_IN))
            }),
            (g.popover = {
              trackPopoverOpened: function () {
                return e.getPopoverOpenedBy().then(function (e) {
                  return g.trackEvent(H(null, R.EU), { openedBy: e || "not supported" });
                });
              },
              trackPermissionsPageOpened: l(g.trackEvent, H(h, K.PERMISSIONS_PAGE)),
              trackAppLaunch: l(g.trackEvent, H(v, K.CHICLET)),
              trackSelectTab: l(g.trackEvent, H(h, K.TAB)),
              trackAppSearch: l(g.trackEvent, H(k, K.SEARCH_APPS)),
              trackSettingsClick: l(g.trackEvent, H(v, K.SETTINGS)),
              trackSettingsToggle: l(g.trackEvent, H(m, K.SETTINGS)),
              trackWebVersionClick: l(g.trackEvent, H(h, K.WEB_VER)),
              trackAccountSwitchClick: l(g.trackEvent, H(h, K.ACCOUNT_SWITCH)),
              trackLaunchDifferentAccount: l(g.trackEvent, H(h, K.ACCOUNT)),
              trackDeleteAccount: l(g.trackEvent, H(v, K.DELETE_ACCOUNT)),
              trackTrustAccount: l(g.trackEvent, H(v, K.TRUST)),
              trackRejectAccount: l(g.trackEvent, H(v, K.REJECT)),
              trackClosedRatingsBanner: l(g.trackEvent, H(v, K.RATINGS_CLOSE)),
              trackThumbsUp: l(g.trackEvent, H(v, K.RATINGS_THUMBS_UP)),
              trackThumbsDown: l(g.trackEvent, H(v, K.RATINGS_THUMBS_DOWN)),
              trackOpenedReviewsPage: l(g.trackEvent, H(v, K.RATINGS_OPEN_REVIEWS)),
              trackClosedTryNewtabBanner: l(g.trackEvent, H(v, K.NEWTAB_CLOSE)),
              trackEnabledNewtab: l(g.trackEvent, H(v, K.NEWTAB_ENABLED)),
              trackRefreshPasswordClick: l(g.trackEvent, H(v, j.REFRESH_PW)),
              trackCopyPasswordClick: l(g.trackEvent, H(v, j.COPY_PW)),
              trackAutofillPasswordClick: l(g.trackEvent, H(v, j.AUTOFILL_PW)),
              trackShowPasswordGeneratorClick: l(g.trackEvent, H(v, j.SHOW_PW_GENERATOR)),
              trackAddAppClick: l(g.trackEvent, H(v, K.ADD_APP)),
              trackCopyUsernameFromDropdown: l(g.trackEvent, H(v, K.COPY_USERNAME_FROM_DROPDOWN)),
              trackCopyPassowrdFromDropdown: l(g.trackEvent, H(v, K.COPY_PASSWORD_FROM_DROPDOWN)),
              trackCopyPasswordShortcutClick: l(g.trackEvent, H(v, K.COPY_PASSWORD_SHORTCUT)),
              trackViewDetailsFromDropdown: l(g.trackEvent, H(v, K.VIEW_DETAILS_FROM_DROPDOWN)),
              trackExpandAccountPersonal: l(g.trackEvent, H(v, K.EXPAND_ACCOUNT_PERSONAL)),
              trackCollapseAccountSwitcherPersonal: l(g.trackEvent, H(v, K.COLLAPSE_ACCOUNT_SWITCHER_PERSONAL)),
              trackAccountMenuPersonal: l(g.trackEvent, H(v, K.ACCOUNT_MENU_PERSONAL)),
              trackAddPersonalAccountPersonal: l(g.trackEvent, H(v, K.ADD_PERSONAL_ACCOUNT_PERSONAL)),
              trackAddOrgAccountPersonal: l(g.trackEvent, H(v, K.ADD_ORG_ACCOUNT_PERSONAL)),
              trackPluginSettingsPersonal: l(g.trackEvent, H(v, K.PLUGIN_SETTINGS_PERSONAL)),
              trackOpenDashboardPersonal: l(g.trackEvent, H(v, K.OPEN_DASHBOARD_PERSONAL)),
              trackAdminPersonal: l(g.trackEvent, H(v, K.ADMIN_PERSONAL)),
              trackAccountSettingsPersonal: l(g.trackEvent, H(v, K.ACCOUNT_SETTINGS_PERSONAL)),
              trackRemoveAccountPersonal: l(g.trackEvent, H(v, K.REMOVE_ACCOUNT_PERSONAL)),
              trackPopoverLongLoad: l(g.trackEvent, H(v, K.LONG_LOADING)),
              trackAskForPIN: l(g.trackEvent, H(v, K.ASK_FOR_PIN)),
              trackVaultLockout: l(g.trackEvent, H(v, K.VAULT_LOCKOUT)),
              trackCopyRecoveryKey: l(g.trackEvent, H(v, K.COPY_RECOVERY_KEY)),
              trackUseRecoveryKey: l(g.trackEvent, H(v, K.USE_RECOVERY_KEY)),
              trackWrongRecoveryKey: l(g.trackEvent, H(v, K.WRONG_RECOVERY_KEY)),
              trackErrorDismissingRecoveryKeyView: l(g.trackEvent, H(null, K.ERROR_DISMISSING_RECOVERY_KEY_VIEW)),
              trackErrorUnlockingPasswordlessVault: l(g.trackEvent, H(null, K.ERROR_UNLOCKING_PASSWORDLESS_VAULT)),
              trackErrorCreatingPasswordlessVault: l(g.trackEvent, H(null, K.ERROR_CREATING_PASSWORDLESS_VAULT)),
              trackPasswordlessUnlockChallenge: l(g.trackEvent, H(null, K.PASSWORDLESS_UNLOCK_CHALLENGE)),
              trackCreatedPasswordlessVault: l(g.trackEvent, H(null, K.CREATED_PASSWORDLESS_VAULT)),
              trackUpdatedPasswordlessVault: l(g.trackEvent, H(null, K.UPDATED_PASSWORDLESS_VAULT))
            }),
            (g.settingsPage = {
              trackSettingsToggle: l(g.trackEvent, J(y, W.SETTINGS)),
              trackSettingsClick: l(g.trackEvent, J(v, W.SETTINGS)),
              trackSettingsPageOpened: l(g.trackEvent, J(null, R.EU))
            }),
            (g.newtab = {
              trackAppLaunch: l(g.trackEvent, Z(v, F.CHICLET)),
              trackSelectTab: l(g.trackEvent, Z(h, F.TAB)),
              trackAppSearch: l(g.trackEvent, Z(k, F.SEARCH_APPS)),
              trackThemeSwitch: l(g.trackEvent, Z(v, F.THEME)),
              trackDashboardClick: l(g.trackEvent, Z(h, F.DASHBOARD))
            }),
            (g.singleSignOn = {
              trackClickPrimaryButton: l(g.trackEvent, G(v, N.SIGN_IN)),
              trackClickFooterLink: l(g.trackEvent, G(h, N.NEVER_SIGNIN)),
              trackAutoLoginOnSignUp: l(g.trackEvent, Q(null, C.LOGIN_ON_SIGNUP)),
              trackClickInlineApp: l(g.trackEvent, Y(b, N.SIGN_IN))
            }),
            (g.changePassword = {
              trackGenerateNewRandomPassword: X,
              trackGenerateNewRandomPasswordClick: l(g.trackEvent, G(v, U.GENERATE_PW)),
              trackConfigurePasswordClick: l(g.trackEvent, G(v, U.CONFIGURE_PW)),
              trackFillWithGeneratedRandomPassword: l(g.trackEvent, G(v, U.FILL_FORM_NEW_PW)),
              trackAutofillExistingPassword: l(g.trackEvent, G(h, U.FILL_FORM_CUR_PW)),
              trackCopyToClipboard: X
            }),
            (g.verify = {
              trackClickPrimaryButton: l(g.trackEvent, G(v, M.VERIFY)),
              trackClickInlinePrimaryButton: l(g.trackEvent, Y(v, M.VERIFY))
            }),
            (g.reauth = {
              trackClickPrimaryButton: l(g.trackEvent, G(v, B.REAUTH)),
              trackClickInlinePrimaryButton: l(g.trackEvent, Y(v, B.REAUTH))
            }),
            (g.antiPhishingWarning = {
              trackGetMeOutOfHere: l(g.trackEvent, G(v, V.LEAVE)),
              trackContinueAnyway: l(g.trackEvent, G(v, V.CONTINUE))
            }),
            (g.generatePasswordOnSignUp = {
              trackShowModal: X,
              trackGenerateNewRandomPassword: X,
              trackGenerateNewRandomPasswordClick: X,
              trackFillWithGeneratedRandomPassword: X,
              trackCopyToClipboard: X,
              trackDisableGeneratePassword: X,
              trackCloseModal: X,
              trackRefreshPasswordClick: l(g.trackEvent, G(v, j.REFRESH_PW)),
              trackAutofillPasswordClick: l(g.trackEvent, G(v, j.AUTOFILL_PW)),
              trackShowPasswordGeneratorClick: l(g.trackEvent, G(v, j.SHOW_PW_GENERATOR))
            }),
            g
          );
        }),
          (e.exports = o.EventTracker);
      },
      522: function (e, t, a) {
        var o = a(710),
          n = a(377);
        !(function () {
          var e = {};
          o.fn.clientSideEncryption = e;
          var t = o.Q,
            a = o._okta,
            r = a.constant,
            s = a.extend,
            i = a.map,
            p = a.mapObject,
            l = a.pick,
            d = a.values,
            u = o.fn.other.string.base64UrlToString,
            c = o.fn.other.string.base64UrlToArrayBuffer,
            g = o.fn.other.string.arrayBufferToBase64Url,
            v = o.fn.other.string.stringToBase64Url,
            h = o.fn.other.string.arrayBufferToBase64,
            k = 6e5,
            m = "dk",
            y = 1e5;
          function b(a, o, i, l) {
            var u = "FnClientSideEncryptionIIFE::processEncryptionDecryption: ";
            return e.isClientSideEncryptionEnabled(o).then(function (c) {
              if (!c) return n.info(u + "client-side encryption feature is off. Returning credentials."), t(i);
              var g = "",
                v = e.getClientSideEncryptionOptions().asymmetricKeyOptions;
              if (l === a.encrypt) (g = "publicKey"), (v.usage = ["encrypt"]);
              else {
                if (l !== a.decrypt) return t.reject(u + "invalid key type. Must be either privateKey or publicKey.");
                (g = "privateKey"), (v.usage = ["decrypt"]);
              }
              return e.tryImportClientSideEncryptionKey(g, v, a, o).then(function (e) {
                var o = l === a.encrypt ? "encrypting" : "decrypting";
                n.info(u + o + " credentials with " + g + ".");
                var c = p(i, function (a, o) {
                  return (
                    a || (l = r(t(a))),
                    l(e, a, v).then(function (e) {
                      var t = {};
                      return (t[o] = e), t;
                    })
                  );
                });
                return t.all(d(c)).then(function (e) {
                  return s.apply(null, e);
                });
              });
            });
          }
          (e.tryImportClientSideEncryptionKey = function (e, a, o, r) {
            var s = "Crypto::tryImportClientSideEncryptionKey: ";
            return r.getDataVaultKeyPair().then(function (r) {
              if (!r) {
                var i = s + "key not found in storage!";
                return n.warn(i), t.reject(i);
              }
              if (!r.privateKey) {
                i = s + "private key not found in storage!";
                return n.warn(i), t.reject(i);
              }
              if (!r.publicKey) {
                i = s + "public key not found in storage!";
                return n.warn(i), t.reject(i);
              }
              return n.info(s + "importing " + e), o.importKey(r[e], a);
            });
          }),
            (e.isClientSideEncryptionEnabled = function (e) {
              return e.getPluginSettings().then(function (e) {
                return !!(e && e.orgSettings && e.orgSettings.pluginClientSideEncryptionEnabled);
              });
            }),
            (e.getClientSideEncryptionOptions = function (e) {
              return {
                symmetricKeyImportOptions: { exportedFormat: "raw", algorithm: "PBKDF2", isExtractable: !1, usage: ["deriveKey"] },
                symmetricKeyDerivationOptions: {
                  algorithm: { name: "PBKDF2", iterations: e || y, hash: "SHA-256" },
                  derivedKeyAlgorithm: { name: "AES-GCM", length: 256, usage: ["encrypt", "decrypt"] }
                },
                symmetricKeyOptions: { exportedFormat: "raw", algorithm: { name: "AES-GCM", length: 256, usage: ["encrypt", "decrypt"] } },
                asymmetricKeyOptions: {
                  exportedFormat: "jwk",
                  algorithm: {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: { name: "SHA-256" }
                  },
                  isExtractable: !0,
                  usage: ["encrypt", "decrypt"]
                }
              };
            }),
            (e.encryptCredentials = function (e, t, a) {
              return b(e, t, a, e.encrypt);
            }),
            (e.decryptCredentials = function (e, t, a) {
              return b(e, t, a, e.decrypt);
            }),
            (e.decryptFormSitesApiResponse = function (a, o, r) {
              var p = "FnClientSideEncryptionIIFE::decryptFormSitesApiResponse: ";
              return r
                ? r.errorCode
                  ? (n.warn(p + "error in form sites response: " + JSON.stringify(r)), t(r))
                  : t
                      .all(
                        i(r, function (t) {
                          var n = l(t, "username", "password");
                          return e.decryptCredentials(a, o, n).then(function (e) {
                            return s(t, e);
                          });
                        })
                      )
                      .fail(function (e) {
                        var a = p + "could not decrypt response data: " + e;
                        return n.warn(a), t.reject(a);
                      })
                : (n.warn(p + "received no response"), t(r));
            }),
            (e.createSymKey = function (t, a, o, r) {
              var s = e.getClientSideEncryptionOptions(r);
              return t.importKey(new TextEncoder().encode(a), s.symmetricKeyImportOptions).then(function (e) {
                return (
                  n.info("FnClientSideEncryptionIIFE::createSymKey: Deriving symmetric key..."),
                  t.deriveKey(e, o, s.symmetricKeyDerivationOptions)
                );
              });
            }),
            (e.updateUserVaultWithSecretKey = function (a, o, r) {
              var s = "FnClientSideEncryptionIIFE::updateUserVaultWithSecretKey: ",
                i = o.createSecretKey(),
                p = o.createRandomSalt(),
                l = o.generateIV(),
                d = e.getClientSideEncryptionOptions().asymmetricKeyOptions;
              return (
                (d.usage = ["decrypt"]),
                t.all([e.getEndUserHomeFromStorage(r), r.getDataVaultKeyPair(), r.getPluginSettings()]).spread(function (r, u, c) {
                  var g = c && c.orgSettings && c.orgSettings.pluginOktaPersonalCoreServiceEnabled;
                  if (!r || !r.userId) throw new Error("Missing user id, cannot update vault");
                  if (!g) throw new Error("Updating a vault for passwordless is only supported in core service");
                  if (!u || !u.privateKey || !u.publicKey) throw new Error("Missing keypair, cannot update vault");
                  var v = r.userId + "-" + i,
                    h = u.publicKey;
                  return (
                    n.info(s + "Try to import private key from storage"),
                    o
                      .importKey(u.privateKey, d)
                      .then(function (a) {
                        if (!a) throw new Error("Missing private key, cannot update user vault");
                        return (
                          n.info(s + "Exporting existing private key and creating new sym key derived from secret key"),
                          t.all([o.exportKey(a, "pkcs8"), e.createSymKey(o, v, p, k)])
                        );
                      })
                      .spread(function (e, t) {
                        return (
                          n.info(s + "Encrypting existing keys with new secret"),
                          o.encryptArrayBuffer(t, e, { algorithm: { name: "AES-GCM", iv: l } }, g)
                        );
                      })
                      .then(function (t) {
                        n.info(s + "Updating keys with backend");
                        var o = { encryptedPrivateKey: t, publicKeyJwk: h, iv: l, salt: p, inputFormat: m, iterations: k },
                          r = e.buildCoreServiceUserVaultPostData(o);
                        return a.patchEndUserVault(r);
                      })
                      .then(function (e) {
                        if (!e) throw new Error("No response from vault update");
                        if (g && e.status >= 400) throw new Error("Vault update API responded with error status " + e.status);
                        return i;
                      })
                  );
                })
              );
            }),
            (e.createUserVaultWithSecretKey = function (a, o, r, s) {
              return e.getEndUserHomeFromStorage(r).then(function (i) {
                var p = o.createSecretKey(),
                  l = o.createRandomSalt(),
                  d = i.userId + "-" + p;
                return e
                  .createUserVault(a, o, r, d, l, m, s)
                  .then(function () {
                    return (
                      n.info("FnClientSideEncryptionIIFE::createUserVaultWithSecretKey: Created vault using secret key successfully"), p
                    );
                  })
                  .catch(function (e) {
                    throw (t.all([r.clearDataVaultKeyPair(), r.clearSecretKey()]).done(), e);
                  });
              });
            }),
            (e.createUserVaultWithRandomPIN = function (t, a, o, r) {
              return e.getEndUserHomeFromStorage(o).then(function (s) {
                var i = a.createRandomPIN(),
                  p = s.userId;
                return e.createUserVault(t, a, o, i, p, "pn", r).then(function () {
                  return n.info("FnClientSideEncryptionIIFE::createUserVaultWithRandomPIN: Created vault using random pin successfully"), i;
                });
              });
            }),
            (e.getEndUserHomeFromStorage = function (e) {
              return e.getEnduserHome().then(function (e) {
                if (!e)
                  throw (
                    (n.warn("FnClientSideEncryptionIIFE::getEndUserHomeFromStorage: EnduserHome is missing. Unable to create vault"),
                    new Error("EnduserHome is missing. Unable to create vault"))
                  );
                return e;
              });
            }),
            (e.createUserVault = function (a, o, r, s, i, p, l) {
              var d = "FnClientSideEncryptionIIFE::createUserVault: ",
                u = o.generateIV(),
                c = p === m ? k : y,
                g = e.getClientSideEncryptionOptions(c);
              return (
                n.info(d + "Creating KeyPair..."),
                o.generateKey(g.asymmetricKeyOptions).then(function (v) {
                  return (
                    n.info(d + "Creating SymKey..."),
                    t
                      .all([
                        o.exportKey(v.privateKey, "pkcs8"),
                        o.exportKey(v.publicKey, "jwk"),
                        e.createSymKey(o, s, i, c),
                        r.getPluginSettings()
                      ])
                      .spread(function (t, s, h, k) {
                        var m = k && k.orgSettings && k.orgSettings.pluginOktaPersonalCoreServiceEnabled;
                        if (m && !l) throw new Error("Missing localized tab name, cannot create vault for core service");
                        return (
                          n.info(d + "Encrypting keys..."),
                          o
                            .encryptArrayBuffer(h, t, { algorithm: { name: "AES-GCM", iv: u } }, m)
                            .then(function (t) {
                              var r;
                              n.info(d + "Sending keys to backend...");
                              var l = { encryptedPrivateKey: t, publicKeyJwk: s, iv: u, salt: i, inputFormat: p, iterations: c };
                              return (
                                (r = m ? e.buildCoreServiceUserVaultPostData(l) : e.buildUserVaultPostData(o, l)), a.postEndUserVault(r)
                              );
                            })
                            .then(function (t) {
                              if (!t) throw new Error("No response from vault creation");
                              if (m && t.status >= 400) throw new Error("Vault Creation API responded with error status " + t.status);
                              if (m)
                                return e.createDefaultTabForCoreService(o, v, g, l).then(function (e) {
                                  return a.postTabsOktaPersonalCoreService(e);
                                });
                            })
                            .then(function (e) {
                              if (m && !e) throw new Error("No response from core service tab creation");
                              if (m && e.status >= 400) throw new Error("Vault Tab creation API responded with error status " + e.status);
                              return n.info(d + "Exporting private key..."), o.exportKey(v.privateKey, "jwk");
                            })
                            .then(function (e) {
                              return n.info(d + "Storing KeyPair..."), r.setDataVaultKeyPair({ publicKey: s, privateKey: e });
                            })
                        );
                      })
                      .then(function () {
                        return n.info(d + "Created Vault successfully...");
                      })
                  );
                })
              );
            }),
            (e.buildCoreServiceUserVaultPostData = function (e) {
              var t = {
                rootKeyParams: { salt: e.salt, iv: h(e.iv) },
                keyPairParams: { privateKeyExportType: "pkcs8", publicKeyExportType: "jwk" }
              };
              return (
                e.inputFormat && (t.rootKeyParams.inputFormat = e.inputFormat),
                e.iterations && (t.rootKeyParams.iterations = e.iterations),
                {
                  publicKey: { data: window.btoa(JSON.stringify(e.publicKeyJwk)), algorithm: "NONE", params: JSON.stringify({}) },
                  encryptedPrivateKey: { data: e.encryptedPrivateKey, algorithm: "AES_GCM", params: JSON.stringify(t) }
                }
              );
            }),
            (e.buildUserVaultPostData = function (e, t) {
              var a = {
                id: e.generateVaultID(),
                version: 1,
                keysInfo: {
                  encryptedPrivateKey: t.encryptedPrivateKey,
                  publicKeyJwk: v(JSON.stringify(t.publicKeyJwk)),
                  iv: g(t.iv),
                  salt: t.salt
                }
              };
              return t.inputFormat && (a.keysInfo.inputFormat = t.inputFormat), t.iterations && (a.keysInfo.iterations = t.iterations), a;
            }),
            (e.createDefaultTabForCoreService = function (e, t, a, o) {
              var n = { label: o },
                r = a.asymmetricKeyOptions;
              return e.encrypt(t.publicKey, JSON.stringify(n), r, !0).then(function (e) {
                return { sortOrder: 0, metadata: { data: e, algorithm: "RSA_OEAP", params: JSON.stringify({}) } };
              });
            }),
            (e.formatSecretKey = function (e) {
              var t = e.length % 4 == 0,
                a = e.replace(/(.{4})/g, "$1-");
              return t ? a.substring(0, a.length - 1) : a;
            }),
            (e.importKeyPairFromVault = function (a, o, r) {
              var s = "FnClientSideEncryptionIIFE::importKeyPairFromVault: ";
              return t.all([o.getPluginSettings(), e.isClientSideEncryptionEnabled(o), o.getEnduserHome()]).spread(function (t, i, p) {
                var l = t && t.orgSettings && t.orgSettings.pluginOktaPersonalCoreServiceEnabled,
                  d = t && t.orgSettings && t.orgSettings.pluginOktaPersonalIsPasswordlessEnabled;
                if (i)
                  if (p) {
                    var g,
                      v,
                      h,
                      k = !1,
                      b = y,
                      w = p.userId;
                    if (l && r && r.encryptedPrivateKey && r.publicKey) {
                      g = r.encryptedPrivateKey.data;
                      var f = JSON.parse(r.encryptedPrivateKey.params);
                      (v = f.iv),
                        (h = r.publicKey.data),
                        f &&
                          f.rootKeyParams &&
                          ((v = f.rootKeyParams.iv),
                          (k = f.rootKeyParams.inputFormat === m),
                          (b = f.rootKeyParams.iterations),
                          (w = f.rootKeyParams.salt));
                    } else
                      r &&
                        r.keysInfo &&
                        ((g = r.keysInfo.encryptedPrivateKey),
                        (v = r.keysInfo.iv),
                        (h = r.keysInfo.publicKeyJwk),
                        (k = r.keysInfo.inputFormat === m) && ((b = r.keysInfo.iterations), (w = r.keysInfo.salt)));
                    if (!g || !v || !h) {
                      n.warn(s + "Did not receive expected vault response");
                      var P = new Error(
                        d ? "Please create a vault first." : "Please create a vault by entering a new PIN in the dashboard."
                      );
                      throw ((P.name = "NoVault"), P);
                    }
                    if (b) {
                      if (w) {
                        var S = k ? o.getSecretKey : o.getPersonalPin,
                          A = k ? "Secret key" : "PIN";
                        return S().then(function (t) {
                          if (t) {
                            var r = k ? p.userId + "-" + t : t,
                              i = e.getClientSideEncryptionOptions(b);
                            return (
                              n.info(s + "importing symmetric key from Knowledge Factor..."),
                              e
                                .createSymKey(a, r, w, b)
                                .then(function (e) {
                                  return (
                                    n.info(s + "Decrypting private key..."),
                                    a.decryptArrayBuffer(e, g, {
                                      algorithm: { name: i.symmetricKeyDerivationOptions.derivedKeyAlgorithm.name, iv: c(v) }
                                    })
                                  );
                                })
                                .then(function (e) {
                                  return (
                                    (i.asymmetricKeyOptions.exportedFormat = "pkcs8"),
                                    (i.asymmetricKeyOptions.usage = ["decrypt"]),
                                    a.importKey(e, i.asymmetricKeyOptions)
                                  );
                                })
                                .then(function (e) {
                                  return a.exportKey(e, "jwk");
                                })
                                .then(function (e) {
                                  return o.setDataVaultKeyPair({ privateKey: e, publicKey: JSON.parse(u(h)) });
                                })
                                .then(function () {
                                  o.clearVaultStatusForCurrentUser().done();
                                })
                                .fail(function (e) {
                                  throw (n.error(s + "Failed to import private/public key pair: " + e), e);
                                })
                                .fin(function () {
                                  n.info(s + "Clearing PIN from session storage"), o.clearPersonalPin().done();
                                })
                            );
                          }
                          n.warn(s + A + " required for key derivation is missing. Unable to decrypt private key.");
                        });
                      }
                      n.warn(s + "salt required for key derivation is missing. Unable to decrypt private key.");
                    } else n.warn(s + "iterations required for key derivation is missing. Unable to decrypt private key.");
                  } else n.warn(s + "EnduserHome missing. Unable to decrypt private key.");
                else n.info(s + "client-side encryption feature is off. Skipping keypair import");
              });
            }),
            (e.handleImportKeyPairEventFromDashboard = function (a, o, n, r) {
              if (!(r && r.encryptedSymKey && r.encryptedIV && r.encryptedPrivateKey && r.publicKeyJWK))
                return t.reject("eventDetail missing required attributes when trying to import key pair from dashboard event");
              var s,
                i = e.getClientSideEncryptionOptions(),
                p = r.encryptedSymKey,
                l = r.encryptedIV,
                d = r.encryptedPrivateKey,
                u = JSON.parse(r.publicKeyJWK);
              return t
                .all([a.decryptArrayBuffer(n, p, i.asymmetricKeyOptions), a.decryptArrayBuffer(n, l, i.asymmetricKeyOptions)])
                .spread(function (e, t) {
                  return (s = t), (i.symmetricKeyOptions.usage = ["decrypt"]), a.importKey(e, i.symmetricKeyOptions);
                })
                .then(function (e) {
                  return a.decrypt(e, d, { algorithm: { name: i.symmetricKeyOptions.algorithm.name, iv: s } });
                })
                .then(function (e) {
                  return o.setDataVaultKeyPair({ privateKey: JSON.parse(e), publicKey: u });
                });
            }),
            (e.decryptBlob = function (t, a, o, n) {
              var r = e.getClientSideEncryptionOptions().asymmetricKeyOptions;
              return (
                (r.usage = ["decrypt"]),
                e.tryImportClientSideEncryptionKey("privateKey", r, o, n).then(function (n) {
                  return e.decryptBlobWithPrivateKey(t, a, o, n);
                })
              );
            }),
            (e.decryptBlobWithPrivateKey = function (t, a, o, n) {
              var r = a.data,
                s = { algorithm: { name: e.getClientSideEncryptionOptions().asymmetricKeyOptions.algorithm.name } };
              return o
                .decryptArrayBuffer(n, r, s)
                .then(function (e) {
                  return o.importKey(e, { exportedFormat: "raw", algorithm: "AES-GCM", isExtractable: !0, usage: ["encrypt", "decrypt"] });
                })
                .then(function (e) {
                  var a = JSON.parse(t.params).iv,
                    n = c(a),
                    r = t.data,
                    s = { algorithm: { name: "AES-GCM", iv: n } };
                  return o.decrypt(e, r, s);
                })
                .then(function (e) {
                  return JSON.parse(e);
                });
            }),
            (e.decryptTabBlob = function (t, a, o) {
              var n = e.getClientSideEncryptionOptions().asymmetricKeyOptions;
              return (
                (n.usage = ["decrypt"]),
                e.tryImportClientSideEncryptionKey("privateKey", n, a, o).then(function (o) {
                  return e.decryptTabBlobWithPrivateKey(t, a, o);
                })
              );
            }),
            (e.decryptTabBlobWithPrivateKey = function (e, t, a) {
              var o = e.data;
              return t.decrypt(a, o, { algorithm: { name: "RSA-OAEP" } }).then(function (e) {
                return JSON.parse(e);
              });
            }),
            (e.getCredentialsFromStorage = function (a, o, n) {
              return o.getTabs().then(function (r) {
                var s = r.appLinks.find(function (e) {
                  return e.appInstanceId === n;
                });
                if (s) {
                  var i = s.content,
                    p = s.contentKey;
                  return e.decryptBlob(i, p, a, o).then(function (e) {
                    return { username: e.username, password: e.password };
                  });
                }
                return t();
              });
            }),
            (e.encryptBlob = function (a, o, n, r, s, i) {
              var p = e.getClientSideEncryptionOptions(),
                l = p.asymmetricKeyOptions;
              return (
                (l.keyType = "publicKey"),
                (l.usage = ["encrypt"]),
                t
                  .all([e.tryImportClientSideEncryptionKey("publicKey", l, r, s), r.exportKey(o, p.symmetricKeyOptions.exportedFormat)])
                  .spread(function (e, s) {
                    var l = { algorithm: { name: p.symmetricKeyOptions.algorithm.name, iv: n } },
                      d = { algorithm: { name: p.asymmetricKeyOptions.algorithm.name } };
                    return t.all([r.encrypt(o, JSON.stringify(a), l, i), r.encryptArrayBuffer(e, s, d, i)]).spread(function (e, t) {
                      return {
                        data: { data: e, algorithm: "AES_GCM", params: JSON.stringify({ iv: h(n) }) },
                        key: { data: t, algorithm: "RSA_OEAP", params: JSON.stringify({}) }
                      };
                    });
                  })
              );
            }),
            (e.getClientSideEncryptionPrivateKey = function (t, a) {
              var o = e.getClientSideEncryptionOptions().asymmetricKeyOptions;
              return (o.usage = ["decrypt"]), e.tryImportClientSideEncryptionKey("privateKey", o, t, a);
            });
        })(),
          (e.exports = o.fn.clientSideEncryption);
      },
      377: function (e, t, a) {
        var o = a(710),
          n = a(465);
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            r(e)
          );
        }
        var s = (function (e) {
          var t,
            a,
            s,
            i,
            p = new Date();
          if ("undefined" != typeof window) {
            var l = ["debug", "info", "warn", "error"],
              d = ["assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
            window.console || (window.console = {}), window.console.log || (window.console.log = function () {});
            for (var u = 0; u < d.length; ++u) window.console[d[u]] || (window.console[d[u]] = function () {});
            for (u = 0; u < l.length; ++u) window.console[l[u]] || (window.console[l[u]] = window.console.log);
          }
          (t = {
            DEBUG: function (e) {
              console.debug(e);
            },
            INFO: function (e) {
              console.info(e);
            },
            WARN: function (e) {
              console.warn(e);
            },
            ERROR: function (e) {
              console.error(e);
            }
          }),
            (a = { DEBUG: function () {}, INFO: function () {}, WARN: function () {}, ERROR: function () {} }),
            (s = e ? t : a);
          var c = [],
            g = [],
            v = p;
          function h(e) {
            var t = new Date(),
              a = t - v,
              o = a > 150 ? a + "(ms): " + e.msg : e.msg;
            try {
              s[e.type](o);
            } catch (e) {
              return;
            }
            v = t;
          }
          function k(e) {
            if ("[object Array]" === Object.prototype.toString.call(e)) {
              for (var t = "[", a = 0; a < e.length; a++) t = t + k(e[a]) + ",";
              return t + "]";
            }
            return n.hashCode(e);
          }
          function m(e) {
            if (0 == e.length) return null;
            var t = e[0];
            if ("string" != typeof t) throw "not a string: " + t;
            for (var a = [], o = 1; o < e.length; o++) {
              var s = e[o];
              a.push(
                "object" == r(s)
                  ? JSON.stringify(s, function (e, t) {
                      if ("string" == typeof e) {
                        var a = e.toLowerCase();
                        return -1 != a.indexOf("password") || ("value" == a && ("p" == this.key || "password" == this.type)) ? k(t) : t;
                      }
                      return t;
                    })
                  : s
              );
            }
            return n.format(t, a);
          }
          function y(t, a) {
            var n = { type: t, msg: m(a) };
            if ((h(n), o.Config.startrecordingLogs && g.push(n), e))
              if (null == i) c.push(n);
              else if (i && i.passwords) {
                c.push(n);
                for (var r = i.passwords, s = 0; s < r.length; s++) {
                  var p = r[s];
                  if (-1 == "password".indexOf(p) && -1 != n.msg.indexOf(p)) {
                    var l = "audit fail for: " + p;
                    throw (h({ type: "ERROR", msg: l }), l);
                  }
                }
              }
          }
          return {
            setLogging: function (e) {
              s = e ? t : a;
            },
            skipAudit: function () {
              h({ type: "DEBUG", msg: m(arguments) });
            },
            debug: function () {
              y("DEBUG", arguments);
            },
            info: function () {
              y("INFO", arguments);
            },
            warn: function () {
              y("WARN", arguments);
            },
            error: function () {
              y("ERROR", arguments);
            },
            getAuditString: function () {
              for (var e = [], t = 0; t < c.length; t++) {
                var a = c[t];
                e.push(a.type + ":" + a.msg);
              }
              return e.join("\n");
            },
            getRecordedLogs: function () {
              return g;
            },
            init: function (e) {
              !1 === (i = e) && (c = []);
            }
          };
        })(o.Config.enabledLogging);
        e.exports = s;
      },
      336: function (e, t, a) {
        function o(e) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            o(e)
          );
        }
        !(function (e) {
          var n,
            r =
              ("object" == ("undefined" == typeof self ? "undefined" : o(self)) && self.self == self && self) ||
              ("object" == (void 0 === a.g ? "undefined" : o(a.g)) && a.g.global == a.g && a.g),
            s = a(123);
          try {
            n = a(452);
          } catch (e) {}
          e(r, t, s, n);
        })(function (e, t, a, n) {
          var r = e.Backbone,
            s = [].slice;
          (t.VERSION = "1.2.1"),
            (t.$ = n),
            (t.noConflict = function () {
              return (e.Backbone = r), this;
            }),
            (t.emulateHTTP = !1),
            (t.emulateJSON = !1);
          var i = function (e, t, o) {
              a.each(t, function (t, n) {
                a[n] &&
                  (e.prototype[n] = (function (e, t, o) {
                    switch (e) {
                      case 1:
                        return function () {
                          return a[t](this[o]);
                        };
                      case 2:
                        return function (e) {
                          return a[t](this[o], e);
                        };
                      case 3:
                        return function (e, n) {
                          return a[t](this[o], e, n);
                        };
                      case 4:
                        return function (e, n, r) {
                          return a[t](this[o], e, n, r);
                        };
                      default:
                        return function () {
                          var e = s.call(arguments);
                          return e.unshift(this[o]), a[t].apply(a, e);
                        };
                    }
                  })(t, n, o));
              });
            },
            p = (t.Events = {}),
            l = /\s+/,
            d = function (e, t, n, r, s) {
              var i,
                p = 0;
              if (n && "object" === o(n)) {
                void 0 !== r && "context" in s && void 0 === s.context && (s.context = r);
                for (i = a.keys(n); p < i.length; p++) t = e(t, i[p], n[i[p]], s);
              } else if (n && l.test(n)) for (i = n.split(l); p < i.length; p++) t = e(t, i[p], r, s);
              else t = e(t, n, r, s);
              return t;
            };
          p.on = function (e, t, a) {
            return u(this, e, t, a);
          };
          var u = function (e, t, a, o, n) {
            ((e._events = d(c, e._events || {}, t, a, { context: o, ctx: e, listening: n })), n) &&
              ((e._listeners || (e._listeners = {}))[n.id] = n);
            return e;
          };
          p.listenTo = function (e, t, o) {
            if (!e) return this;
            var n = e._listenId || (e._listenId = a.uniqueId("l")),
              r = this._listeningTo || (this._listeningTo = {}),
              s = r[n];
            if (!s) {
              var i = this._listenId || (this._listenId = a.uniqueId("l"));
              s = r[n] = { obj: e, objId: n, id: i, listeningTo: r, count: 0 };
            }
            return u(e, t, o, this, s), this;
          };
          var c = function (e, t, a, o) {
            if (a) {
              var n = e[t] || (e[t] = []),
                r = o.context,
                s = o.ctx,
                i = o.listening;
              i && i.count++, n.push({ callback: a, context: r, ctx: r || s, listening: i });
            }
            return e;
          };
          (p.off = function (e, t, a) {
            return this._events ? ((this._events = d(g, this._events, e, t, { context: a, listeners: this._listeners })), this) : this;
          }),
            (p.stopListening = function (e, t, o) {
              var n = this._listeningTo;
              if (!n) return this;
              for (var r = e ? [e._listenId] : a.keys(n), s = 0; s < r.length; s++) {
                var i = n[r[s]];
                if (!i) break;
                i.obj.off(t, o, this);
              }
              return a.isEmpty(n) && (this._listeningTo = void 0), this;
            });
          var g = function (e, t, o, n) {
            if (e) {
              var r,
                s = 0,
                i = n.context,
                p = n.listeners;
              if (t || o || i) {
                for (var l = t ? [t] : a.keys(e); s < l.length; s++) {
                  var d = e[(t = l[s])];
                  if (!d) break;
                  for (var u = [], c = 0; c < d.length; c++) {
                    var g = d[c];
                    (o && o !== g.callback && o !== g.callback._callback) || (i && i !== g.context)
                      ? u.push(g)
                      : (r = g.listening) && 0 == --r.count && (delete p[r.id], delete r.listeningTo[r.objId]);
                  }
                  u.length ? (e[t] = u) : delete e[t];
                }
                return a.size(e) ? e : void 0;
              }
              for (var v = a.keys(p); s < v.length; s++) delete p[(r = p[v[s]]).id], delete r.listeningTo[r.objId];
            }
          };
          (p.once = function (e, t, o) {
            var n = d(v, {}, e, t, a.bind(this.off, this));
            return this.on(n, void 0, o);
          }),
            (p.listenToOnce = function (e, t, o) {
              var n = d(v, {}, t, o, a.bind(this.stopListening, this, e));
              return this.listenTo(e, n);
            });
          var v = function (e, t, o, n) {
            if (o) {
              var r = (e[t] = a.once(function () {
                n(t, r), o.apply(this, arguments);
              }));
              r._callback = o;
            }
            return e;
          };
          p.trigger = function (e) {
            if (!this._events) return this;
            for (var t = Math.max(0, arguments.length - 1), a = Array(t), o = 0; o < t; o++) a[o] = arguments[o + 1];
            return d(h, this._events, e, void 0, a), this;
          };
          var h = function (e, t, a, o) {
              if (e) {
                var n = e[t],
                  r = e.all;
                n && r && (r = r.slice()), n && k(n, o), r && k(r, [t].concat(o));
              }
              return e;
            },
            k = function (e, t) {
              var a,
                o = -1,
                n = e.length,
                r = t[0],
                s = t[1],
                i = t[2];
              switch (t.length) {
                case 0:
                  for (; ++o < n; ) (a = e[o]).callback.call(a.ctx);
                  return;
                case 1:
                  for (; ++o < n; ) (a = e[o]).callback.call(a.ctx, r);
                  return;
                case 2:
                  for (; ++o < n; ) (a = e[o]).callback.call(a.ctx, r, s);
                  return;
                case 3:
                  for (; ++o < n; ) (a = e[o]).callback.call(a.ctx, r, s, i);
                  return;
                default:
                  for (; ++o < n; ) (a = e[o]).callback.apply(a.ctx, t);
                  return;
              }
            };
          (p.bind = p.on), (p.unbind = p.off), a.extend(t, p);
          var m = (t.Model = function (e, t) {
            var o = e || {};
            t || (t = {}),
              (this.cid = a.uniqueId(this.cidPrefix)),
              (this.attributes = {}),
              t.collection && (this.collection = t.collection),
              t.parse && (o = this.parse(o, t) || {}),
              (o = a.defaults({}, o, a.result(this, "defaults"))),
              this.set(o, t),
              (this.changed = {}),
              this.initialize.apply(this, arguments);
          });
          a.extend(m.prototype, p, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function () {},
            toJSON: function (e) {
              return a.clone(this.attributes);
            },
            sync: function () {
              return t.sync.apply(this, arguments);
            },
            get: function (e) {
              return this.attributes[e];
            },
            escape: function (e) {
              return a.escape(this.get(e));
            },
            has: function (e) {
              return null != this.get(e);
            },
            matches: function (e) {
              return !!a.iteratee(e, this)(this.attributes);
            },
            set: function (e, t, n) {
              if (null == e) return this;
              var r;
              if (("object" === o(e) ? ((r = e), (n = t)) : ((r = {})[e] = t), n || (n = {}), !this._validate(r, n))) return !1;
              var s = n.unset,
                i = n.silent,
                p = [],
                l = this._changing;
              (this._changing = !0), l || ((this._previousAttributes = a.clone(this.attributes)), (this.changed = {}));
              var d = this.attributes,
                u = this.changed,
                c = this._previousAttributes;
              for (var g in (this.idAttribute in r && (this.id = r[this.idAttribute]), r))
                (t = r[g]), a.isEqual(d[g], t) || p.push(g), a.isEqual(c[g], t) ? delete u[g] : (u[g] = t), s ? delete d[g] : (d[g] = t);
              if (!i) {
                p.length && (this._pending = n);
                for (var v = 0; v < p.length; v++) this.trigger("change:" + p[v], this, d[p[v]], n);
              }
              if (l) return this;
              if (!i) for (; this._pending; ) (n = this._pending), (this._pending = !1), this.trigger("change", this, n);
              return (this._pending = !1), (this._changing = !1), this;
            },
            unset: function (e, t) {
              return this.set(e, void 0, a.extend({}, t, { unset: !0 }));
            },
            clear: function (e) {
              var t = {};
              for (var o in this.attributes) t[o] = void 0;
              return this.set(t, a.extend({}, e, { unset: !0 }));
            },
            hasChanged: function (e) {
              return null == e ? !a.isEmpty(this.changed) : a.has(this.changed, e);
            },
            changedAttributes: function (e) {
              if (!e) return !!this.hasChanged() && a.clone(this.changed);
              var t = this._changing ? this._previousAttributes : this.attributes,
                o = {};
              for (var n in e) {
                var r = e[n];
                a.isEqual(t[n], r) || (o[n] = r);
              }
              return !!a.size(o) && o;
            },
            previous: function (e) {
              return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
            },
            previousAttributes: function () {
              return a.clone(this._previousAttributes);
            },
            fetch: function (e) {
              e = a.extend({ parse: !0 }, e);
              var t = this,
                o = e.success;
              return (
                (e.success = function (a) {
                  var n = e.parse ? t.parse(a, e) : a;
                  if (!t.set(n, e)) return !1;
                  o && o.call(e.context, t, a, e), t.trigger("sync", t, a, e);
                }),
                _(this, e),
                this.sync("read", this, e)
              );
            },
            save: function (e, t, n) {
              var r;
              null == e || "object" === o(e) ? ((r = e), (n = t)) : ((r = {})[e] = t);
              var s = (n = a.extend({ validate: !0, parse: !0 }, n)).wait;
              if (r && !s) {
                if (!this.set(r, n)) return !1;
              } else if (!this._validate(r, n)) return !1;
              var i = this,
                p = n.success,
                l = this.attributes;
              (n.success = function (e) {
                i.attributes = l;
                var t = n.parse ? i.parse(e, n) : e;
                if ((s && (t = a.extend({}, r, t)), t && !i.set(t, n))) return !1;
                p && p.call(n.context, i, e, n), i.trigger("sync", i, e, n);
              }),
                _(this, n),
                r && s && (this.attributes = a.extend({}, l, r));
              var d = this.isNew() ? "create" : n.patch ? "patch" : "update";
              "patch" !== d || n.attrs || (n.attrs = r);
              var u = this.sync(d, this, n);
              return (this.attributes = l), u;
            },
            destroy: function (e) {
              e = e ? a.clone(e) : {};
              var t = this,
                o = e.success,
                n = e.wait,
                r = function () {
                  t.stopListening(), t.trigger("destroy", t, t.collection, e);
                };
              e.success = function (a) {
                n && r(), o && o.call(e.context, t, a, e), t.isNew() || t.trigger("sync", t, a, e);
              };
              var s = !1;
              return this.isNew() ? a.defer(e.success) : (_(this, e), (s = this.sync("delete", this, e))), n || r(), s;
            },
            url: function () {
              var e = a.result(this, "urlRoot") || a.result(this.collection, "url") || z();
              if (this.isNew()) return e;
              var t = this.get(this.idAttribute);
              return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
            },
            parse: function (e, t) {
              return e;
            },
            clone: function () {
              return new this.constructor(this.attributes);
            },
            isNew: function () {
              return !this.has(this.idAttribute);
            },
            isValid: function (e) {
              return this._validate({}, a.defaults({ validate: !0 }, e));
            },
            _validate: function (e, t) {
              if (!t.validate || !this.validate) return !0;
              e = a.extend({}, this.attributes, e);
              var o = (this.validationError = this.validate(e, t) || null);
              return !o || (this.trigger("invalid", this, o, a.extend(t, { validationError: o })), !1);
            }
          });
          i(m, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes");
          var y = (t.Collection = function (e, t) {
              t || (t = {}),
                t.model && (this.model = t.model),
                void 0 !== t.comparator && (this.comparator = t.comparator),
                this._reset(),
                this.initialize.apply(this, arguments),
                e && this.reset(e, a.extend({ silent: !0 }, t));
            }),
            b = { add: !0, remove: !0, merge: !0 },
            w = { add: !0, remove: !1 };
          a.extend(y.prototype, p, {
            model: m,
            initialize: function () {},
            toJSON: function (e) {
              return this.map(function (t) {
                return t.toJSON(e);
              });
            },
            sync: function () {
              return t.sync.apply(this, arguments);
            },
            add: function (e, t) {
              return this.set(e, a.extend({ merge: !1 }, t, w));
            },
            remove: function (e, t) {
              t = a.extend({}, t);
              var o = !a.isArray(e);
              e = o ? [e] : a.clone(e);
              var n = this._removeModels(e, t);
              return !t.silent && n && this.trigger("update", this, t), o ? n[0] : n;
            },
            set: function (e, t) {
              (t = a.defaults({}, t, b)).parse && !this._isModel(e) && (e = this.parse(e, t));
              var o,
                n,
                r,
                s,
                i,
                p = !a.isArray(e);
              e = p ? (e ? [e] : []) : e.slice();
              var l = t.at;
              null != l && (l = +l), l < 0 && (l += this.length + 1);
              for (
                var d = this.comparator && null == l && !1 !== t.sort,
                  u = a.isString(this.comparator) ? this.comparator : null,
                  c = [],
                  g = [],
                  v = {},
                  h = t.add,
                  k = t.merge,
                  m = t.remove,
                  y = !(d || !h || !m) && [],
                  w = !1,
                  f = 0;
                f < e.length;
                f++
              ) {
                if (((r = e[f]), (s = this.get(r))))
                  m && (v[s.cid] = !0),
                    k &&
                      r !== s &&
                      ((r = this._isModel(r) ? r.attributes : r),
                      t.parse && (r = s.parse(r, t)),
                      s.set(r, t),
                      d && !i && s.hasChanged(u) && (i = !0)),
                    (e[f] = s);
                else if (h) {
                  if (!(n = e[f] = this._prepareModel(r, t))) continue;
                  c.push(n), this._addReference(n, t);
                }
                (n = s || n) &&
                  ((o = this.modelId(n.attributes)),
                  !y || (!n.isNew() && v[o]) || (y.push(n), (w = w || !this.models[f] || n.cid !== this.models[f].cid)),
                  (v[o] = !0));
              }
              if (m) {
                for (f = 0; f < this.length; f++) v[(n = this.models[f]).cid] || g.push(n);
                g.length && this._removeModels(g, t);
              }
              if (c.length || w)
                if ((d && (i = !0), (this.length += c.length), null != l))
                  for (f = 0; f < c.length; f++) this.models.splice(l + f, 0, c[f]);
                else {
                  y && (this.models.length = 0);
                  var P = y || c;
                  for (f = 0; f < P.length; f++) this.models.push(P[f]);
                }
              if ((i && this.sort({ silent: !0 }), !t.silent)) {
                var S = null != l ? a.clone(t) : t;
                for (f = 0; f < c.length; f++) null != l && (S.index = l + f), (n = c[f]).trigger("add", n, this, S);
                (i || w) && this.trigger("sort", this, t), (c.length || g.length) && this.trigger("update", this, t);
              }
              return p ? e[0] : e;
            },
            reset: function (e, t) {
              t = t ? a.clone(t) : {};
              for (var o = 0; o < this.models.length; o++) this._removeReference(this.models[o], t);
              return (
                (t.previousModels = this.models),
                this._reset(),
                (e = this.add(e, a.extend({ silent: !0 }, t))),
                t.silent || this.trigger("reset", this, t),
                e
              );
            },
            push: function (e, t) {
              return this.add(e, a.extend({ at: this.length }, t));
            },
            pop: function (e) {
              var t = this.at(this.length - 1);
              return this.remove(t, e);
            },
            unshift: function (e, t) {
              return this.add(e, a.extend({ at: 0 }, t));
            },
            shift: function (e) {
              var t = this.at(0);
              return this.remove(t, e);
            },
            slice: function () {
              return s.apply(this.models, arguments);
            },
            get: function (e) {
              if (null != e) {
                var t = this.modelId(this._isModel(e) ? e.attributes : e);
                return this._byId[e] || this._byId[t] || this._byId[e.cid];
              }
            },
            at: function (e) {
              return e < 0 && (e += this.length), this.models[e];
            },
            where: function (e, t) {
              var o = a.matches(e);
              return this[t ? "find" : "filter"](function (e) {
                return o(e.attributes);
              });
            },
            findWhere: function (e) {
              return this.where(e, !0);
            },
            sort: function (e) {
              if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
              return (
                e || (e = {}),
                a.isString(this.comparator) || 1 === this.comparator.length
                  ? (this.models = this.sortBy(this.comparator, this))
                  : this.models.sort(a.bind(this.comparator, this)),
                e.silent || this.trigger("sort", this, e),
                this
              );
            },
            pluck: function (e) {
              return a.invoke(this.models, "get", e);
            },
            fetch: function (e) {
              var t = (e = a.extend({ parse: !0 }, e)).success,
                o = this;
              return (
                (e.success = function (a) {
                  var n = e.reset ? "reset" : "set";
                  o[n](a, e), t && t.call(e.context, o, a, e), o.trigger("sync", o, a, e);
                }),
                _(this, e),
                this.sync("read", this, e)
              );
            },
            create: function (e, t) {
              var o = (t = t ? a.clone(t) : {}).wait;
              if (!(e = this._prepareModel(e, t))) return !1;
              o || this.add(e, t);
              var n = this,
                r = t.success;
              return (
                (t.success = function (e, t, a) {
                  o && n.add(e, a), r && r.call(a.context, e, t, a);
                }),
                e.save(null, t),
                e
              );
            },
            parse: function (e, t) {
              return e;
            },
            clone: function () {
              return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
            },
            modelId: function (e) {
              return e[this.model.prototype.idAttribute || "id"];
            },
            _reset: function () {
              (this.length = 0), (this.models = []), (this._byId = {});
            },
            _prepareModel: function (e, t) {
              if (this._isModel(e)) return e.collection || (e.collection = this), e;
              (t = t ? a.clone(t) : {}).collection = this;
              var o = new this.model(e, t);
              return o.validationError ? (this.trigger("invalid", this, o.validationError, t), !1) : o;
            },
            _removeModels: function (e, t) {
              for (var a = [], o = 0; o < e.length; o++) {
                var n = this.get(e[o]);
                if (n) {
                  var r = this.indexOf(n);
                  this.models.splice(r, 1),
                    this.length--,
                    t.silent || ((t.index = r), n.trigger("remove", n, this, t)),
                    a.push(n),
                    this._removeReference(n, t);
                }
              }
              return !!a.length && a;
            },
            _isModel: function (e) {
              return e instanceof m;
            },
            _addReference: function (e, t) {
              this._byId[e.cid] = e;
              var a = this.modelId(e.attributes);
              null != a && (this._byId[a] = e), e.on("all", this._onModelEvent, this);
            },
            _removeReference: function (e, t) {
              delete this._byId[e.cid];
              var a = this.modelId(e.attributes);
              null != a && delete this._byId[a], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
            },
            _onModelEvent: function (e, t, a, o) {
              if (("add" !== e && "remove" !== e) || a === this) {
                if (("destroy" === e && this.remove(t, o), "change" === e)) {
                  var n = this.modelId(t.previousAttributes()),
                    r = this.modelId(t.attributes);
                  n !== r && (null != n && delete this._byId[n], null != r && (this._byId[r] = t));
                }
                this.trigger.apply(this, arguments);
              }
            }
          });
          i(
            y,
            {
              forEach: 3,
              each: 3,
              map: 3,
              collect: 3,
              reduce: 4,
              foldl: 4,
              inject: 4,
              reduceRight: 4,
              foldr: 4,
              find: 3,
              detect: 3,
              filter: 3,
              select: 3,
              reject: 3,
              every: 3,
              all: 3,
              some: 3,
              any: 3,
              include: 2,
              contains: 2,
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
              partition: 3
            },
            "models"
          );
          a.each(["groupBy", "countBy", "sortBy", "indexBy"], function (e) {
            a[e] &&
              (y.prototype[e] = function (t, o) {
                var n = a.isFunction(t)
                  ? t
                  : function (e) {
                      return e.get(t);
                    };
                return a[e](this.models, n, o);
              });
          });
          var f = (t.View = function (e) {
              (this.cid = a.uniqueId("view")), a.extend(this, a.pick(e, S)), this._ensureElement(), this.initialize.apply(this, arguments);
            }),
            P = /^(\S+)\s*(.*)$/,
            S = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
          a.extend(f.prototype, p, {
            tagName: "div",
            $: function (e) {
              return this.$el.find(e);
            },
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
            setElement: function (e) {
              return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
            },
            _setElement: function (e) {
              (this.$el = e instanceof t.$ ? e : t.$(e)), (this.el = this.$el[0]);
            },
            delegateEvents: function (e) {
              if ((e || (e = a.result(this, "events")), !e)) return this;
              for (var t in (this.undelegateEvents(), e)) {
                var o = e[t];
                if ((a.isFunction(o) || (o = this[o]), o)) {
                  var n = t.match(P);
                  this.delegate(n[1], n[2], a.bind(o, this));
                }
              }
              return this;
            },
            delegate: function (e, t, a) {
              return this.$el.on(e + ".delegateEvents" + this.cid, t, a), this;
            },
            undelegateEvents: function () {
              return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
            },
            undelegate: function (e, t, a) {
              return this.$el.off(e + ".delegateEvents" + this.cid, t, a), this;
            },
            _createElement: function (e) {
              return document.createElement(e);
            },
            _ensureElement: function () {
              if (this.el) this.setElement(a.result(this, "el"));
              else {
                var e = a.extend({}, a.result(this, "attributes"));
                this.id && (e.id = a.result(this, "id")),
                  this.className && (e.class = a.result(this, "className")),
                  this.setElement(this._createElement(a.result(this, "tagName"))),
                  this._setAttributes(e);
              }
            },
            _setAttributes: function (e) {
              this.$el.attr(e);
            }
          }),
            (t.sync = function (e, o, n) {
              var r = A[e];
              a.defaults(n || (n = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
              var s = { type: r, dataType: "json" };
              if (
                (n.url || (s.url = a.result(o, "url") || z()),
                null != n.data ||
                  !o ||
                  ("create" !== e && "update" !== e && "patch" !== e) ||
                  ((s.contentType = "application/json"), (s.data = JSON.stringify(n.attrs || o.toJSON(n)))),
                n.emulateJSON && ((s.contentType = "application/x-www-form-urlencoded"), (s.data = s.data ? { model: s.data } : {})),
                n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r))
              ) {
                (s.type = "POST"), n.emulateJSON && (s.data._method = r);
                var i = n.beforeSend;
                n.beforeSend = function (e) {
                  if ((e.setRequestHeader("X-HTTP-Method-Override", r), i)) return i.apply(this, arguments);
                };
              }
              "GET" === s.type || n.emulateJSON || (s.processData = !1);
              var p = n.error;
              n.error = function (e, t, a) {
                (n.textStatus = t), (n.errorThrown = a), p && p.call(n.context, e, t, a);
              };
              var l = (n.xhr = t.ajax(a.extend(s, n)));
              return o.trigger("request", o, l, n), l;
            });
          var A = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
          t.ajax = function () {
            return t.$.ajax.apply(t.$, arguments);
          };
          var O = (t.Router = function (e) {
              e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
            }),
            x = /\((.*?)\)/g,
            T = /(\(\?)?:\w+/g,
            R = /\*\w+/g,
            N = /[\-{}\[\]+?.,\\\^$|#\s]/g;
          a.extend(O.prototype, p, {
            initialize: function () {},
            route: function (e, o, n) {
              a.isRegExp(e) || (e = this._routeToRegExp(e)), a.isFunction(o) && ((n = o), (o = "")), n || (n = this[o]);
              var r = this;
              return (
                t.history.route(e, function (a) {
                  var s = r._extractParameters(e, a);
                  !1 !== r.execute(n, s, o) &&
                    (r.trigger.apply(r, ["route:" + o].concat(s)), r.trigger("route", o, s), t.history.trigger("route", r, o, s));
                }),
                this
              );
            },
            execute: function (e, t, a) {
              e && e.apply(this, t);
            },
            navigate: function (e, a) {
              return t.history.navigate(e, a), this;
            },
            _bindRoutes: function () {
              if (this.routes) {
                this.routes = a.result(this, "routes");
                for (var e, t = a.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
              }
            },
            _routeToRegExp: function (e) {
              return (
                (e = e
                  .replace(N, "\\$&")
                  .replace(x, "(?:$1)?")
                  .replace(T, function (e, t) {
                    return t ? e : "([^/?]+)";
                  })
                  .replace(R, "([^?]*?)")),
                new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
              );
            },
            _extractParameters: function (e, t) {
              var o = e.exec(t).slice(1);
              return a.map(o, function (e, t) {
                return t === o.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
              });
            }
          });
          var C = (t.History = function () {
              (this.handlers = []),
                a.bindAll(this, "checkUrl"),
                "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
            }),
            I = /^[#\/]|\s+$/g,
            E = /^\/+|\/+$/g,
            L = /#.*$/;
          (C.started = !1),
            a.extend(C.prototype, p, {
              interval: 50,
              atRoot: function () {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
              },
              matchRoot: function () {
                return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
              },
              decodeFragment: function (e) {
                return decodeURI(e.replace(/%25/g, "%2525"));
              },
              getSearch: function () {
                var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return e ? e[0] : "";
              },
              getHash: function (e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : "";
              },
              getPath: function () {
                var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === e.charAt(0) ? e.slice(1) : e;
              },
              getFragment: function (e) {
                return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(I, "");
              },
              start: function (e) {
                if (C.started) throw new Error("Backbone.history has already been started");
                if (
                  ((C.started = !0),
                  (this.options = a.extend({ root: "/" }, this.options, e)),
                  (this.root = this.options.root),
                  (this._wantsHashChange = !1 !== this.options.hashChange),
                  (this._hasHashChange = "onhashchange" in window),
                  (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                  (this._wantsPushState = !!this.options.pushState),
                  (this._hasPushState = !(!this.history || !this.history.pushState)),
                  (this._usePushState = this._wantsPushState && this._hasPushState),
                  (this.fragment = this.getFragment()),
                  (this.root = ("/" + this.root + "/").replace(E, "/")),
                  this._wantsHashChange && this._wantsPushState)
                ) {
                  if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()), !0;
                  }
                  this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                  (this.iframe = document.createElement("iframe")),
                    (this.iframe.src = "javascript:0"),
                    (this.iframe.style.display = "none"),
                    (this.iframe.tabIndex = -1);
                  var o = document.body,
                    n = o.insertBefore(this.iframe, o.firstChild).contentWindow;
                  n.document.open(), n.document.close(), (n.location.hash = "#" + this.fragment);
                }
                var r =
                  window.addEventListener ||
                  function (e, t) {
                    return attachEvent("on" + e, t);
                  };
                if (
                  (this._usePushState
                    ? r("popstate", this.checkUrl, !1)
                    : this._useHashChange && !this.iframe
                    ? r("hashchange", this.checkUrl, !1)
                    : this._wantsHashChange && (this._checkUrlInterval = Okta.WindowUtil.setInterval(this.checkUrl, this.interval)),
                  !this.options.silent)
                )
                  return this.loadUrl();
              },
              stop: function () {
                var e =
                  window.removeEventListener ||
                  function (e, t) {
                    return detachEvent("on" + e, t);
                  };
                this._usePushState
                  ? e("popstate", this.checkUrl, !1)
                  : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
                  this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                  this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                  (C.started = !1);
              },
              route: function (e, t) {
                this.handlers.unshift({ route: e, callback: t });
              },
              checkUrl: function (e) {
                var t = this.getFragment();
                if ((t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment)) return !1;
                this.iframe && this.navigate(t), this.loadUrl();
              },
              loadUrl: function (e) {
                return (
                  !!this.matchRoot() &&
                  ((e = this.fragment = this.getFragment(e)),
                  a.any(this.handlers, function (t) {
                    if (t.route.test(e)) return t.callback(e), !0;
                  }))
                );
              },
              navigate: function (e, t) {
                if (!C.started) return !1;
                (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                var a = this.root;
                ("" !== e && "?" !== e.charAt(0)) || (a = a.slice(0, -1) || "/");
                var o = a + e;
                if (((e = this.decodeFragment(e.replace(L, ""))), this.fragment !== e)) {
                  if (((this.fragment = e), this._usePushState))
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, o);
                  else {
                    if (!this._wantsHashChange) return this.location.assign(o);
                    if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                      var n = this.iframe.contentWindow;
                      t.replace || (n.document.open(), n.document.close()), this._updateHash(n.location, e, t.replace);
                    }
                  }
                  return t.trigger ? this.loadUrl(e) : void 0;
                }
              },
              _updateHash: function (e, t, a) {
                if (a) {
                  var o = e.href.replace(/(javascript:|#).*$/, "");
                  e.replace(o + "#" + t);
                } else e.hash = "#" + t;
              }
            }),
            (t.history = new C());
          m.extend =
            y.extend =
            O.extend =
            f.extend =
            C.extend =
              function (e, t) {
                var o,
                  n = this;
                (o =
                  e && a.has(e, "constructor")
                    ? e.constructor
                    : function () {
                        return n.apply(this, arguments);
                      }),
                  a.extend(o, n, t);
                var r = function () {
                  this.constructor = o;
                };
                return (r.prototype = n.prototype), (o.prototype = new r()), e && a.extend(o.prototype, e), (o.__super__ = n.prototype), o;
              };
          var z = function () {
              throw new Error('A "url" property or function must be specified');
            },
            _ = function (e, t) {
              var a = t.error;
              t.error = function (o) {
                a && a.call(t.context, e, o, t), e.trigger("error", e, o, t);
              };
            };
          return t;
        });
      },
      710: function (e) {
        (function () {
          var t = { fn: {}, Page: {}, Config: {}, Modal: { Mixins: {}, Views: {} }, loc: { strings: {} } };
          t.window = this;
          e.exports = t;
        }).call(window);
      }
    },
    t = {};
  function a(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var r = (t[o] = { id: o, loaded: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, a), (r.loaded = !0), r.exports;
  }
  (a.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return a.d(t, { a: t }), t;
  }),
    (a.d = function (e, t) {
      for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      "use strict";
      var e = a(710),
        t = a.n(e),
        o = a(123),
        n = a.n(o),
        r = a(560),
        s = a.n(r),
        i = (a(406), a(369), a(490), a(598)),
        p = a.n(i),
        l = (a(510), a(32), a(287), a(231)),
        d = a.n(l),
        u = (a(961), a(558)),
        c = a.n(u),
        g = a(374),
        v = a.n(g),
        h = (a(429), a(399), a(562)),
        k = a.n(h);
      a(745), a(87);
      var m = a(452),
        y = a.n(m),
        b = {
          currentLocale: "en",
          setCurrentLocale: function (e) {
            this.currentLocale = e;
          },
          getCurrentLocale: function () {
            return this.currentLocale || "en";
          }
        },
        w = a(285),
        f = a.n(w),
        P = function (e) {
          return function (t) {
            t = t || {};
            var a = n().keys(t),
              o = e.replace(new RegExp("{{#if(.*?){{/if}}"), ""),
              r = n().reduce(
                a,
                function (e, a) {
                  return e.replace(new RegExp("{{" + a + "}}", "g"), n().escape(t[a]));
                },
                o
              );
            return f().localizeTemplate(r, Okta.contentStrings, b.getCurrentLocale(), "{{i18n-", "}}");
          };
        };
      const S = n().noConflict();
      S.mixin({
        resultCtx: function (e, t, a, o) {
          let n = S.isObject(e) ? e[t] : void 0;
          return S.isFunction(n) && (n = n.call(a || e)), n || (S.isUndefined(o) ? n : o);
        },
        isInteger: function (e) {
          return S.isNumber(e) && e % 1 == 0;
        },
        template: function (e, t) {
          const a = P(e);
          return t
            ? a(t)
            : function (e) {
                return a(e);
              };
        }
      });
      var A = S;
      function O(e) {
        var t,
          a = A.partial,
          o =
            ((t = A.isNumber),
            {
              sendMsgToCurrentTab: function (e) {
                var a = p().defer();
                return (
                  chrome.tabs.query({ active: !0, windowId: chrome.windows.WINDOW_ID_CURRENT }, function (o) {
                    if (!o || o.length <= 0) a.reject("no tabs found");
                    else {
                      var n = o[0];
                      n && t(n.id)
                        ? chrome.tabs.sendMessage(n.id, e, function (e) {
                            chrome.runtime.lastError ? a.reject(chrome.runtime.lastError.message) : a.resolve(e);
                          })
                        : a.reject("no valid tab");
                    }
                  }),
                  a.promise
                );
              }
            });
        function n(t, a) {
          var o = { type: t };
          return a && (o.data = a), e(o);
        }
        var r = {
          getPluginType: a(n, "getBrowserType"),
          getBackgroundVersion: a(n, "getBackgroundVersion"),
          openPermissionsPage: a(n, "openPermissionsPage"),
          openOktaNewtab: a(n, "openOktaNewtab"),
          openSettingsPage: a(n, "openSettingsPage"),
          hasPrivacyPermissions: a(n, "hasPrivacyPermissions"),
          getPasswordSavingDetails: a(n, "getPasswordSavingDetails"),
          clearPersistentStorage: function (e) {
            return n("clearPersistentState", { url: e });
          },
          requestPrivacyPermissions: function (e) {
            return n("requestPrivacyPermissions", { url: e });
          },
          openUrl: function (e) {
            return n("openTab", { url: e });
          },
          openTab: function (e) {
            return e.indexOf("?") > -1 ? (e += "&") : (e += "?"), (e += "fromPlugin=true"), r.openUrl(e);
          },
          openTabForAccountChooser: function (e) {
            return n("openTabForAccountChooser", { url: e });
          },
          resetBadge: function () {
            return n("updateBadge", { key: { text: "", color: "" } });
          },
          sendMsgToCurrentTab: function (e) {
            return o.sendMsgToCurrentTab(e);
          }
        };
        return r;
      }
      var x,
        T,
        R = a(933),
        N = a.n(R);
      function C(e) {
        var t = {},
          a = A.uniqueId,
          o = N().unwrapVal,
          n = ["getPersistentState", "getSessionState", "hasPrivacyPermissions"];
        var r = {
          sendMessage: function (o) {
            var n = p().defer();
            return void 0 === o.id && (o.id = a()), (t[o.id] = n), e.post(o), n.promise;
          },
          processMessage: function (e, t) {
            if (e.data && e.data.errorCode) t.reject(e.data);
            else if (((a = e.type), -1 != n.indexOf(a))) {
              var a,
                r = null;
              try {
                r = o(e.data);
              } catch (a) {
                return void t.reject({ errorCode: "Exception", errorText: a.message, msg: e });
              }
              void 0 === r && console.error("Undefined result for {" + e.id + "}, data: " + e.data), t.resolve(r);
            } else t.resolve(e.data);
          },
          handleMessage: function (e) {
            if (e && t[e.id]) {
              var a = t[e.id];
              delete t[e.id], r.processMessage(e, a);
            } else console.warn("Unknown message");
          }
        };
        return r;
      }
      !(function (e) {
        (e.NOT_FOUND = "NOT_FOUND"), (e.pn = "pn"), (e.dk = "dk");
      })(x || (x = {})),
        (function (e) {
          (e.UNKNOWN = "UNKNOWN"),
            (e.IS_NEW_USER = "IS_NEW_USER"),
            (e.NEEDS_MIGRATION_TO_CORE_SERVICE = "NEEDS_MIGRATION_TO_CORE_SERVICE"),
            (e.NEEDS_MIGRATION_TO_PASSWORDLESS = "NEEDS_MIGRATION_TO_PASSWORDLESS"),
            (e.READY = "READY");
        })(T || (T = {}));
      var I = a(91),
        E = a.n(I),
        L = a(484),
        z = a.n(L),
        _ = a(522),
        D = a.n(_),
        U = 0;
      function j(e, t, a) {
        return {
          tabId: "" + e,
          label: t,
          logoUrl: "https://ok3static.oktacdn.com/assets/img/logos/bronto.cf4ac83464320e0a820049acfc3d1bb1.png",
          linkUrl: "https://www.google.com/",
          sortOrder: ++U,
          dateAdded: a
        };
      }
      function M(e, t) {
        return { id: "" + e, label: t, sortOrder: ++U };
      }
      var B = {
          tabs: [M(1, "group"), M(2, "Pages Home"), M(3, "Pages Work"), M(5, "Pages Other")],
          links: [
            j(1, "page 1", "Yesterday"),
            j(1, "page 2", "Yesterday"),
            j(2, "page 3", "Month ago"),
            j(2, "page 4", "Two days ago"),
            j(2, "page 5", "Two days ago"),
            j(5, "link 1", "Week ago"),
            j(5, "link 2", "Week ago"),
            j(5, "link 3", "Week ago"),
            j(5, "link 4", "Week ago")
          ]
        },
        V = a(247),
        K = a.n(V);
      function W(e, t, a) {
        var o = A.isEmpty,
          n = E().createEndUserTabs,
          r = A.pick,
          s = A.isNumber;
        function i(e, t, a) {
          return l(e, t, a, { type: "get" });
        }
        function l(a, n, r, i) {
          var l = i && "post" === i.type,
            d = i && "patch" === i.type;
          return p()
            .all([e.getOrgSettings(), e.getOktaDomainInternal(), e.getVersion(), e.getAuthToken(), e.getSessionCookie()])
            .spread(function (e, u, c, g, v) {
              if (!e) return p()(null);
              if (o(u) || o(c)) return p()(null);
              var h,
                k = a({ orgSettings: e });
              return (
                l
                  ? ((h = z().postToSettings(u + k, i.body)).contentType = "application/json")
                  : d
                  ? ((h = z().patchToSettings(u + k, i.body)).contentType = "application/json")
                  : (h = z().getToSettings(u + k, c)),
                r
                  ? g &&
                    (function (e) {
                      if (!e || !e.access_token) return !1;
                      var t = e.access_token;
                      return !!s(t.expiresAt) && t.expiresAt > Math.floor(Date.now() / 1e3);
                    })(g[u]) &&
                    z().setAuthData(g[u], h.headers)
                  : z().setSessionData(v, h.headers),
                t.sendMessage({ id: n, type: "request", data: h })
              );
            });
        }
        return {
          getTabs: function () {
            return i(z().getTabsPathInfo, "getTabsWebRequest", !0).then(n);
          },
          getTabsOktaPersonalCoreService: function () {
            return e.getPluginSettings().then(function (t) {
              return i(z().getTabsPathInfo, "getTabsWebRequest", !0)
                .then(function (o) {
                  return t && t.orgSettings && t.orgSettings.pluginOktaPersonalCoreServiceEnabled ? new (K())(a, e).decryptTabsData(o) : o;
                })
                .then(function (e) {
                  return n(e);
                });
            });
          },
          postTabsOktaPersonalCoreService: function (e) {
            return l(z().getOktaPersonalCoreServiceTabsUri, "postTabsOktaPersonalCoreService", !0, {
              type: "post",
              body: JSON.stringify(e)
            });
          },
          getEndUserHome: function () {
            return i(z().getEndUserHomeUri, "getEnduserHomeWebRequest", !0).then(function (e) {
              return r(
                e,
                "email",
                "login",
                "orgEmailOptOut",
                "orgId",
                "orgLogo",
                "personalAppsEnabled",
                "userId",
                "userHideRecentlyUsedApps"
              );
            });
          },
          checkPluginFirstPartyApp: function () {
            return i(z().getCheckPluginFirstPartyAppUri, "getCheckPluginFirstPartyAppRequest", !1);
          },
          getFormCreds: function (t, o) {
            return i(
              function () {
                return "/api/plugin/2/form-creds/" + t + "/" + o;
              },
              "getFormCredsRequest",
              !1
            ).then(function (t) {
              return D().decryptFormSitesApiResponse(a, e, t);
            });
          },
          trackPendoEvent: function (e, a, o, n) {
            if (z().isEnduserHomeValid(o)) {
              var r = z().postToPendoTrackEventSettings(e, a, o, n);
              return t.sendMessage({ id: "pendoTrackEventRequest", type: "request", data: r });
            }
            return p().reject("invalid enduser");
          },
          postRecentlyUsedApps: function (e, t) {
            return l(z().getRecentlyUsedAppsUri, "postRecentlyUsedAppsRequest", !0, {
              type: "post",
              body: JSON.stringify({ appInstanceId: e, appLinkId: t })
            });
          },
          postRecentlyUsedAppsPersonal: function (e) {
            return l(z().getRecentlyUsedAppsPersonalUri(e), "postRecentlyUsedAppsPersonal", !0, { type: "post" });
          },
          getEndUserVault: function () {
            return i(z().getEndUserVaultUri, "getEndUserVaultRequest", !0);
          },
          getPOktaMonolithEndUserVault: function () {
            return i(z().getPOktaMonolithEndUserVaultUri, "getPOktaMonolithEndUserVaultRequest", !0);
          },
          postEndUserVault: function (e) {
            return l(z().getEndUserVaultUri, "postEndUserVaultRequest", !0, { type: "post", body: JSON.stringify(e) });
          },
          patchEndUserVault: function (e) {
            return l(z().getEndUserVaultUri, "patchEndUserVaultRequest", !0, { type: "patch", body: JSON.stringify(e) });
          },
          getWorkspaces: function () {
            return p()(B);
          }
        };
      }
      var F = a(336),
        q = a.n(F);
      function H(e, t) {
        window.console && window.okta && window.okta.debug && window.console[e].apply(window.console, t);
      }
      var G,
        Y = function () {
          return H("warn", arguments);
        };
      function $(e, t, a, o) {
        var n = A.contains(t, a);
        return (
          o || (o = {}),
          n || !A.isObject(e) || A.isArray(e) || A.isFunction(e)
            ? void 0 !== a && (o[a] = e)
            : A.each(e, function (e, n) {
                $(e, t, a ? a + "." + n : n, o);
              }),
          o
        );
      }
      function J(e, t) {
        var a = {};
        return (a[e.name] = t), a;
      }
      function Z(e, t) {
        var a;
        return (
          (a = A.isString(e) ? { type: e } : A.isArray(e) ? { type: e[0], required: e[1], value: e[2] } : A.clone(e)),
          A.defaults(a, { required: !1, name: t }),
          a
        );
      }
      function Q(e, t, a) {
        if (!t.test(e)) return a;
      }
      var X = {
        email: function (e) {
          return Q(
            e,
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            G.ERROR_INVALID_FORMAT_EMAIL
          );
        },
        uri: function (e) {
          return Q(
            e,
            /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
            G.ERROR_INVALID_FORMAT_URI
          );
        },
        ipv4: function (e) {
          return Q(
            e,
            /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            G.ERROR_INVALID_FORMAT_IPV4
          );
        },
        hostname: function (e) {
          return Q(
            e,
            /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/,
            G.ERROR_INVALID_FORMAT_HOSTNAME
          );
        }
      };
      function ee(e, t) {
        var a = A.partial(J, e),
          o = (function (e, t) {
            var a = X[e.format];
            if (e.format && !a) throw new TypeError(e.format + " is not a supported string format");
            return a && a(t);
          })(e, t);
        return o
          ? a(o)
          : t && e.minLength && t.length < e.minLength
          ? a(G.ERROR_STRING_STRING_MIN_LENGTH, t.length)
          : t && e.maxLength && t.length > e.maxLength
          ? a(G.ERROR_STRING_STRING_MAX_LENGTH, t.length)
          : void 0;
      }
      function te(e, t) {
        var a,
          o,
          n,
          r = A.partial(J, e),
          s = !A.isUndefined(t) && !A.isNull(t);
        if (e.required && (!s || A.isNull(t) || "" === t)) return r(G.ERROR_BLANK);
        if (
          ((a =
            A[
              "is" +
                ((n = e.type),
                n.toLowerCase().replace(/\b[a-z]/g, function (e) {
                  return e.toUpperCase();
                }))
            ]),
          s && "any" != e.type && (!A.isFunction(a) || !a(t)))
        )
          return r(G.ERROR_WRONG_TYPE);
        if (t && "string" == e.type) {
          var i = ee(e, t);
          if (i) return i;
        }
        if (s && e.values && !A.contains(e.values, t)) return r(G.ERROR_NOT_ALLOWED);
        if (A.isFunction(e.validate)) {
          var p = e.validate(t);
          if (A.isString(p) && p) return r(p);
          if (!1 === p) return r(G.ERROR_INVALID);
        }
        return s &&
          "array" == e.type &&
          (o = (function (e, t) {
            if (e.minItems && t.length < e.minItems) return "model.validation.field.array.minItems";
            if (e.maxItems && t.length > e.maxItems) return "model.validation.field.array.maxItems";
            if (e.uniqueItems && t.length > A.uniq(t).length) return G.ERROR_IARRAY_UNIQUE;
            if (e.items)
              for (var a = Z(e.items, "placeholder"), o = 0; o < t.length; o++) {
                var n = te(a, t[o]);
                if (n) return n.placeholder;
              }
          })(e, t))
          ? r(o)
          : void 0;
      }
      G = q().Model.extend(
        {
          props: {},
          derived: {},
          local: {},
          flat: !0,
          defaults: {},
          constructor: function (e) {
            this.options = e || {};
            var t = (this.__schema__ = {}),
              a = [];
            (t.computedProperties = {}),
              (t.props = A.clone(A.result(this, "props") || {})),
              (t.derived = A.clone(A.result(this, "derived") || {})),
              (t.local = A.clone(A.result(this, "local") || {}));
            var o = {};
            if (
              (A.each(
                A.extend({}, t.props, t.local),
                function (e, t) {
                  var n = Z(e, t);
                  A.isUndefined(n.value) || (o[t] = n.value), "object" === n.type && a.push(t);
                },
                this
              ),
              A.size(o))
            ) {
              var n = A.result(this, "defaults");
              this.defaults = function () {
                return A.defaults({}, o, n);
              };
            }
            (this.validate = A.wrap(this.validate, function (e) {
              var t = A.rest(arguments),
                a = A.extend(this._validateSchema.apply(this, t), e.apply(this, t));
              return (A.size(a) && a) || void 0;
            })),
              (this.parse = A.wrap(this.parse, function (e) {
                var t = e.apply(this, A.rest(arguments));
                return this.flat && (t = $(t, a)), t;
              })),
              q().Model.apply(this, arguments),
              A.each(
                t.derived,
                function (e, a) {
                  t.computedProperties[a] = this.__getDerivedValue(a);
                  var o = e.deps || [];
                  o.length &&
                    this.on(
                      "cache:clear change:" + o.join(" change:"),
                      function () {
                        var e = this.__getDerivedValue(a);
                        e !== t.computedProperties[a] && ((t.computedProperties[a] = e), this.trigger("change:" + a, this, e));
                      },
                      this
                    );
                },
                this
              ),
              this.on(
                "sync",
                function () {
                  this.__syncedData = this.toJSON();
                },
                this
              );
          },
          validate: function () {},
          allows: function (e) {
            var t = this.__schema__,
              a = A.extend({}, t.props, t.local);
            return A.has(a, e) || Y("Field not defined in schema", e), !0;
          },
          getPropertySchema: function (e) {
            var t = this.__schema__;
            return A.reduce(
              [t.props, t.local],
              function (t, a) {
                return t || Z(a[e], e);
              },
              null
            );
          },
          set: function (e, t) {
            var a;
            "object" == typeof e ? (a = e) : ((a = {})[e] = t),
              A.each(
                a,
                function (e, t) {
                  if (A.has(this.__schema__.derived, t)) throw "overriding derived properties is not supported: " + t;
                },
                this
              );
            var o = [];
            if (
              (A.each(
                a,
                function (e, t) {
                  this.allows(t) || o.push(t);
                },
                this
              ),
              o.length)
            )
              throw "field not allowed: " + o.join(", ");
            return q().Model.prototype.set.apply(this, arguments);
          },
          get: function (e) {
            var t = this.__schema__;
            return A.has(t.derived, e)
              ? !1 !== t.derived[e].cache
                ? t.computedProperties[e]
                : this.__getDerivedValue(e)
              : q().Model.prototype.get.apply(this, arguments);
          },
          toJSON: function (e) {
            e || (e = {});
            var t,
              a = A.clone(q().Model.prototype.toJSON.apply(this, arguments)),
              o = this.__schema__;
            return (
              e.verbose
                ? A.each(
                    o.derived,
                    function (e, t) {
                      a[t] = this.get(t);
                    },
                    this
                  )
                : (a = A.omit(a, A.keys(o.local))),
              this.flat &&
                ((t = a),
                A.each(t, function (e, t, a) {
                  if (-1 != t.indexOf(".")) {
                    for (var o, n = a, r = t.split("."); void 0 !== (o = r.shift()); ) n[o] || (n[o] = r.length ? {} : e), (n = n[o]);
                    delete a[t];
                  }
                }),
                (a = t)),
              a
            );
          },
          reset: function (e) {
            this.clear(e), this.set(A.result(this, "defaults"), e);
          },
          isSynced: function () {
            return A.isEqual(this.__syncedData, this.toJSON());
          },
          validateField: function (e) {
            var t = e && this.getPropertySchema(e);
            return t && te(t, this.get(e));
          },
          _validateSchema: function () {
            var e = this.__schema__;
            return A.reduce(
              A.extend({}, e.props, e.local),
              function (e, t, a) {
                return A.extend(e, this.validateField(a) || {});
              },
              {},
              this
            );
          },
          __getDerivedValue: function (e) {
            var t = this.__schema__.derived[e];
            if (A.isString(t)) {
              var a = t;
              t = {
                deps: [a],
                fn: function () {
                  return this.get(a);
                }
              };
            }
            var o = t.deps || [];
            return t.fn.apply(this, A.map(o, this.get, this));
          }
        },
        {
          ERROR_BLANK: "model.validation.field.blank",
          ERROR_WRONG_TYPE: "model.validation.field.wrong.type",
          ERROR_NOT_ALLOWED: "model.validation.field.value.not.allowed",
          ERROR_INVALID: "model.validation.field.invalid",
          ERROR_IARRAY_UNIQUE: "model.validation.field.array.unique",
          ERROR_INVALID_FORMAT_EMAIL: "model.validation.field.invalid.format.email",
          ERROR_INVALID_FORMAT_URI: "model.validation.field.invalid.format.uri",
          ERROR_INVALID_FORMAT_IPV4: "model.validation.field.invalid.format.ipv4",
          ERROR_INVALID_FORMAT_HOSTNAME: "model.validation.field.invalid.format.hostname",
          ERROR_STRING_STRING_MIN_LENGTH: "model.validation.field.string.minLength",
          ERROR_STRING_STRING_MAX_LENGTH: "model.validation.field.string.maxLength"
        }
      );
      var ae = G,
        oe = ae.extend({
          secureJSON: !1,
          _builtInLocalProps: { __edit__: "boolean", __pending__: "boolean" },
          constructor: function () {
            (this.local = A.defaults({}, A.result(this, "local"), this._builtInLocalProps)),
              A.result(this, "secureJSON") &&
                (this.sync = A.wrap(this.sync, function (e, t, a, o) {
                  return e.call(this, t, a, A.extend({ dataType: "secureJSON" }, o));
                })),
              ae.apply(this, arguments);
          }
        }),
        ne = oe.extend({
          extraProperties: !0,
          invoke: function () {
            const e = A.toArray(arguments);
            e.unshift("__invoke__"), this.trigger.apply(this, e);
          }
        }),
        re = oe.extend({
          local: function () {
            const e = (window.okta && window.okta.settings) || {};
            return {
              orgId: ["string", !1, e.orgId],
              orgName: ["string", !1, e.orgName],
              serverStatus: ["string", !1, e.serverStatus],
              persona: ["string", !1, e.persona],
              isDeveloperConsole: ["boolean", !1, e.isDeveloperConsole],
              isPreview: ["boolean", !1, e.isPreview],
              permissions: ["array", !0, e.permissions || []]
            };
          },
          extraProperties: !0,
          constructor: function () {
            (this.features = window._features || []), oe.apply(this, arguments);
          },
          hasFeature: function (e) {
            return (
              window._possibleFeatures &&
                !A.contains(window._possibleFeatures, e) &&
                window.okta &&
                window.okta.logHasFeatureError &&
                window.okta.logHasFeatureError(e),
              A.contains(this.features, e)
            );
          },
          hasAnyFeature: function (e) {
            return A.some(e, this.hasFeature, this);
          },
          hasPermission: function (e) {
            return A.contains(this.get("permissions"), e);
          }
        }),
        se = "__children__",
        ie = "__rendered__",
        pe = "__parent__",
        le = "__children_definitions__",
        de = "__add_to_container__";
      function ue(e, t) {
        for (var a = 0; a < e[se].length; a++) if (t.cid === e[se][a].cid) return a;
      }
      function ce() {}
      var ge = q().View.extend({
        constructor: function (e) {
          (this.options = e || {}),
            A.extend(this, A.pick(this.options, "state", "settings")),
            (this[se] = []),
            (this[ie] = !1),
            (this[pe] = null),
            (this[le] = this.children);
          var t,
            a,
            o = this.initialize;
          if (
            ((this.initialize = ce),
            q().View.apply(this, arguments),
            A.each(
              A.result(this, le),
              function (e) {
                this.add.apply(this, A.isArray(e) ? e : [e]);
              },
              this
            ),
            delete this[le],
            this.autoRender && this.model)
          ) {
            var n = A.isArray(this.autoRender)
              ? A.map(this.autoRender, function (e) {
                  return "change:" + e;
                }).join(" ")
              : "change";
            this.listenTo(this.model, n, function () {
              this.render();
            });
          }
          (this.initialize = o),
            this.initialize.apply(this, arguments),
            (t = this),
            (a = /^(?!(?:delegate|undelegate|_))([a-zA-Z0-9]+)(?:Events)$/),
            A.each(A.allKeys(t), function (e) {
              var o = e.match(a);
              if (o) {
                var n = A.result(t, e),
                  r = t.options[o[1]] || t[o[1]];
                r &&
                  A.isObject(n) &&
                  A.isFunction(r.trigger) &&
                  A.each(n, function (e, a) {
                    var o = A.isFunction(e)
                      ? [e]
                      : A.reduce(
                          e.split(/\s+/),
                          function (e, a) {
                            return A.isFunction(t[a]) && e.push(t[a]), e;
                          },
                          []
                        );
                    A.each(o, function (e) {
                      t.listenTo(r, a, e);
                    });
                  });
              }
            });
        },
        unregister: function (e) {
          this.stopListening(e);
          var t = ue(this, e);
          A.isNumber(t) && this[se].splice(t, 1);
        },
        autoRender: !1,
        template: null,
        children: [],
        add: function (e, t, a, o, n) {
          var r = {},
            s = A.toArray(arguments);
          if (
            (A.isObject(t)
              ? ((t = (r = t).selector), (a = r.bubble), (o = r.prepend), (n = r.options))
              : A.isObject(a) && ((a = (r = a).bubble), (o = r.prepend), (n = r.options)),
            A.isString(e) &&
              (e = (function (e) {
                return ge.extend({
                  constructor: function () {
                    try {
                      var t = q().$(e);
                      if (1 != t.length) throw "invalid Element";
                      var a = /&(\w+|#x\d+);/g;
                      if (t.prop("outerHTML").replace(a, " ").length !== e.replace(a, " ").length) throw "invalid Element";
                      (this.template = t.html()), (this.el = t.empty()[0]);
                    } catch (t) {
                      this.template = e;
                    }
                    ge.apply(this, arguments);
                  }
                });
              })(e)),
            e.prototype && e.prototype instanceof ge)
          ) {
            var i = A.omit(A.extend({}, this.options, n), "el");
            return (s[0] = new e(i)), this.add.apply(this, s);
          }
          if (A.isNumber(ue(this, e))) throw new Error("Duplicate child");
          return (
            (e[pe] = this),
            (e[de] = function (t) {
              return function () {
                if (t && 1 != e[pe].$(t).length) throw new Error("Invalid selector: " + t);
                var a = t ? this[pe].$(t) : this[pe].$el;
                this.render(), this.delegateEvents(), o ? a.prepend(this.el) : a.append(this.el);
              };
            }.call(e, t)),
            a &&
              this.listenTo(e, "all", function () {
                this.trigger.apply(this, arguments);
              }),
            this.rendered() && e[de](),
            this[se].push(e),
            this
          );
        },
        removeChildren: function () {
          return (
            this.each(function (e) {
              e.remove();
            }),
            this
          );
        },
        remove: function () {
          return this.removeChildren(), this[pe] && this[pe].unregister(this), q().View.prototype.remove.apply(this, arguments);
        },
        compileTemplate: function (e) {
          return A.template(e);
        },
        renderTemplate: function (e) {
          if ((A.isString(e) && (e = this.compileTemplate(e)), A.isFunction(e))) return e(this.getTemplateData());
        },
        getTemplateData: function () {
          var e = (this.model && this.model.toJSON({ verbose: !0 })) || {},
            t = A.omit(this.options, ["state", "settings", "model", "collection"]);
          return A.defaults({}, e, t);
        },
        render: function () {
          return (
            this.preRender(),
            (function (e) {
              e[ie] = !0;
              var t = e.renderTemplate(e.template);
              t ? e.$el.html(t) : e.length && e.$el.empty(),
                e.each(function (e) {
                  e[de]();
                });
            })(this),
            this.postRender(),
            this
          );
        },
        preRender: ce,
        postRender: ce,
        rendered: function () {
          return this[ie];
        },
        getChildren: function () {
          return this.toArray();
        },
        at: function (e) {
          return this.getChildren()[e];
        },
        invoke: function (e) {
          var t = A.toArray(arguments);
          return (
            this.each(function (a) {
              a.size() && a.invoke.apply(a, t), A.isFunction(a[e]) && a[e].apply(a, t.slice(1));
            }),
            this
          );
        }
      });
      A.each(
        [
          "each",
          "map",
          "reduce",
          "reduceRight",
          "find",
          "filter",
          "reject",
          "every",
          "some",
          "contains",
          "toArray",
          "size",
          "first",
          "initial",
          "rest",
          "last",
          "without",
          "indexOf",
          "shuffle",
          "lastIndexOf",
          "isEmpty",
          "chain",
          "where",
          "findWhere"
        ],
        function (e) {
          ge.prototype[e] = function () {
            var t = A.toArray(arguments);
            return t.unshift(A.toArray(this[se])), A[e].apply(A, t);
          };
        },
        void 0
      );
      var ve = ge,
        he = {
          tpl: A.memoize(function (e) {
            return P(e);
          })
        };
      const ke = A.clone(q().Events),
        me = {
          constructor: function () {
            ve.apply(this, arguments), this.module && this.$el.attr("data-view", this.module.id);
          },
          empty: function () {
            return this.removeChildren();
          },
          compileTemplate: he.tpl,
          broadcast: function () {
            return ke.trigger.apply(ke, arguments), this;
          },
          listen: function (e, t) {
            return ke.off(e, t), this.listenTo(ke, e, t), this;
          },
          notify: function (e, t, a) {
            return this.broadcast("notification", A.defaults({ message: t, level: e }, a)), this;
          },
          confirm: function (e, t, a, o) {
            let n;
            return (
              (n =
                "object" == typeof e
                  ? e
                  : 2 === arguments.length && A.isFunction(t)
                  ? { title: "Okta", subtitle: e, ok: t }
                  : { title: e, subtitle: t, ok: a, cancelFn: o }),
              A.isFunction(n.ok) && (n.ok = A.bind(n.ok, this)),
              A.isFunction(n.cancelFn) && (n.cancelFn = A.bind(n.cancelFn, this)),
              this.broadcast("confirmation", n),
              this
            );
          },
          alert: function (e) {
            return A.isString(e) && (e = { subtitle: e }), this.confirm(A.extend({}, e, { noCancelButton: !0 })), this;
          }
        };
      var ye = ve.extend(me, {
        decorate: function (e) {
          const t = e.extend({});
          return A.defaults(t.prototype, me), t;
        }
      });
      const be = oe.extend(
        {
          flat: !1,
          constructor: function () {
            oe.apply(this, arguments), this.on("sync", this._setSynced);
          },
          allows: function () {
            return (
              !(function (e) {
                const t = A.omit(e.local, A.keys(e._builtInLocalProps));
                return A.size(e.props) + A.size(t) > 0;
              })(this) || oe.prototype.allows.apply(this, arguments)
            );
          },
          set: function (e, t) {
            let a;
            return (
              "object" == typeof e ? (a = e) : ((a = {})[e] = t),
              A(a).each(function (e, t) {
                e &&
                  A.isArray(e.__attributes) &&
                  this.on(
                    "change:" + e.__attributes.join(" change:"),
                    function () {
                      const e = this.get(t);
                      e !== this.__schema__.computedProperties[t] &&
                        ((this.__schema__.computedProperties[t] = e), this.trigger("change:" + t, e));
                    },
                    this
                  );
              }, this),
              oe.prototype.set.apply(this, arguments)
            );
          },
          get: function () {
            const e = oe.prototype.get.apply(this, arguments);
            return A.isFunction(e) ? e.apply(this, A.map(e.__attributes || [], this.get, this)) : e;
          },
          toJSON: function (e) {
            e || (e = {});
            const t = oe.prototype.toJSON.apply(this, arguments);
            return (
              A(t).each(function (a, o) {
                "function" == typeof a && (e.verbose ? (t[o] = this.get(o)) : delete t[o]);
              }, this),
              e.verbose ||
                A(t).each(function (e, a) {
                  /^__\w+__$/.test(a) && delete t[a];
                }),
              t
            );
          },
          sanitizeAttributes: function (e) {
            const t = {};
            return (
              A.each(e, function (e, a) {
                A.isFunction(e) || (t[a] = e);
              }),
              t
            );
          },
          reset: function (e) {
            this.clear(e), this.set(this.sanitizeAttributes(this.defaults), e);
          },
          clear: function (e) {
            const t = {};
            return (
              A.each(this.sanitizeAttributes(this.attributes), function (e, a) {
                t[a] = void 0;
              }),
              this.set(t, A.extend({}, e, { unset: !0 }))
            );
          },
          _setSynced: function (e) {
            this._syncedData = e && A.isFunction(e.toJSON) ? e.toJSON() : {};
          },
          _getSynced: function () {
            return this._syncedData;
          },
          isSynced: function () {
            return A.isEqual(this._getSynced(), this.toJSON());
          }
        },
        {
          ComputedProperty: function () {
            const e = A.toArray(arguments),
              t = e.pop();
            return (t.__attributes = e.pop()), t;
          }
        }
      );
      var we = be,
        fe = "__STATE__",
        Pe = "FETCH_DATA",
        Se = "PAGINATION_DATA",
        Ae = "DEFAULT_PARAMS",
        Oe = "LINK_BY_HEADER";
      function xe(e, t) {
        try {
          var a = (function (e) {
            for (
              var t = /<[^>]*>\s*(\s*;\s*[^()<>@,;:"/[\]?={} \t]+=(([^()<>@,;:"/[\]?={} \t]+)|("[^"]*")))*(,|$)/g,
                a = /[^()<>@,;:"/[\]?={} \t]+=(([^()<>@,;:"/[\]?={} \t]+)|("[^"]*"))/g,
                o = e.match(t),
                n = {},
                r = 0;
              r < o.length;
              r++
            ) {
              var s = o[r].split(">"),
                i = s[0].substring(1),
                p = {};
              p.href = i;
              for (var l = s[1].match(a), d = 0; d < l.length; d++) {
                var u = l[d].split("=");
                p[u[0]] = Te(u[1]);
              }
              void 0 !== p.rel && (n[p.rel] = p);
            }
            return n;
          })(t.getResponseHeader("link"));
          e[fe].set(Oe, !0), e.setPagination(a.next.href);
        } catch (t) {
          e[fe].get(Oe) && e.setPagination(null);
        }
      }
      function Te(e) {
        return '"' == e.charAt(0) && '"' == e.charAt(e.length - 1) ? e.substring(1, e.length - 1) : e;
      }
      var Re = q().Collection.extend({
          params: {},
          constructor: function (e, t) {
            (this[fe] = new (q().Model)()).set(Ae, A.defaults((t && t.params) || {}, this.params || {})),
              q().Collection.apply(this, arguments);
          },
          sync: function (e, t, a) {
            var o = this,
              n = a.success;
            return (
              (a.success = function (e, t, a) {
                xe(o, a), n.apply(null, arguments);
              }),
              q().Collection.prototype.sync.call(this, e, t, a)
            );
          },
          fetch: function (e) {
            e || (e = {});
            var t = this[fe],
              a = t.get("XHR");
            return (
              (e.data = A.extend({}, t.get(Ae), e.data || {})),
              (e.fromFetch = !0),
              t.set(Pe, e.data),
              a && a.abort && !1 !== e.abort && a.abort(),
              (a = q().Collection.prototype.fetch.call(this, e)),
              t.set("XHR", a),
              a
            );
          },
          setPagination: function (e, t) {
            A.isString(e) &&
              e &&
              (e = (function (e) {
                for (
                  var t = {},
                    a = e && e.split("?")[1],
                    o = a && decodeURIComponent(a.split("#")[0]).replace(/\+/g, " "),
                    n = o ? o.split("&") : [],
                    r = 0;
                  r < n.length;
                  r++
                ) {
                  var s = n[r].split("=");
                  t[s.shift()] = s.join("=");
                }
                return t;
              })(e)),
              A.isObject(e) && !A.isArray(e) && A.size(e) ? t && t.fromFetch && (e = A.extend({}, this.getFetchData(), e)) : (e = null),
              this[fe].set(Se, e);
          },
          getFetchData: function () {
            return this[fe].get(Pe) || {};
          },
          getPaginationData: function () {
            return this[fe].get(Se) || {};
          },
          hasMore: function () {
            return A.size(this.getPaginationData()) > 0;
          },
          fetchMore: function () {
            if (!this.hasMore()) throw new Error("Invalid Request");
            return this.fetch({ data: this.getPaginationData(), add: !0, remove: !1, update: !0 });
          },
          reset: function (e, t) {
            return t || (t = {}), t.fromFetch || this.setPagination(null), q().Collection.prototype.reset.apply(this, arguments);
          },
          where: function (e, t) {
            return A.isEmpty(e)
              ? t
                ? void 0
                : []
              : this[t ? "find" : "filter"](function (t) {
                  for (var a in e) if (e[a] !== t.get(a)) return !1;
                  return !0;
                });
          },
          create: function (e, t) {
            return (
              t || (t = {}), A.result(e, "urlRoot") || (t.url = A.result(this, "url")), q().Collection.prototype.create.call(this, e, t)
            );
          }
        }),
        Ne = Re.extend({
          secureJSON: !1,
          constructor: function () {
            A.result(this, "secureJSON") &&
              (this.sync = A.wrap(this.sync, function (e, t, a, o) {
                return e.call(this, t, a, A.extend({ dataType: "secureJSON" }, o));
              })),
              Re.apply(this, arguments);
          }
        }),
        Ce = we.extend({
          defaults: {
            appLinkId: void 0,
            label: void 0,
            logoUrl: void 0,
            linkUrl: void 0,
            credentialsSetup: void 0,
            autoLaunch: void 0,
            locked: void 0,
            pluginRequired: void 0,
            appDisplayName: void 0,
            unSupportedClients: void 0,
            appAssignmentId: void 0,
            hiddenInLegacyUI: void 0,
            sortOrder: void 0,
            tabId: void 0,
            appInstanceId: void 0
          },
          initialize: function () {
            var e = this.get("linkUrl");
            if (e) {
              var t = c().hrefToUrlParts(e);
              this.set("appSettingsUrl", c().urlPartsToDomain(t) + "/enduser/app-settings/" + this.get("appLinkId"));
            }
          }
        }),
        Ie = { Model: Ce, Collection: Ne.extend({ model: Ce }) },
        Ee = we.extend({ defaults: { id: void 0, label: void 0, sortOrder: void 0 } }),
        Le = { Model: Ee, Collection: Ne.extend({ model: Ee }) },
        ze =
          '<svg viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.67199 5.15698C3.42749 5.15698 0.781494 7.80298 0.781494 11.0475C0.781494 14.292 3.42749 16.938 6.67199 16.938C9.91649 16.938 12.5625 14.292 12.5625 11.0475C12.5625 7.80298 9.91649 5.15698 6.67199 5.15698ZM6.67199 13.977C5.03399 13.977 3.74249 12.654 3.74249 11.0475C3.74249 9.44098 5.06549 8.11798 6.67199 8.11798C8.27849 8.11798 9.60149 9.44098 9.60149 11.0475C9.60149 12.654 8.27849 13.977 6.67199 13.977Z" fill="#00297A"/>\n<path d="M17.004 13.032C17.004 12.5595 17.571 12.339 17.886 12.654C19.3665 14.166 21.792 16.7175 21.792 16.749C21.8235 16.7805 21.855 16.8435 22.0125 16.875C22.0755 16.9065 22.17 16.9065 22.2645 16.9065H24.9105C25.383 16.9065 25.5405 16.3395 25.32 16.0875L20.91 11.5515L20.6895 11.2995C20.1855 10.701 20.2485 10.4805 20.8155 9.85049L24.312 5.97599C24.5325 5.69249 24.4065 5.15699 23.9025 5.15699H21.5085C21.414 5.15699 21.351 5.15699 21.288 5.18849C21.1305 5.21999 21.099 5.28299 21.0675 5.31449C21.0675 5.31449 19.1145 7.39349 17.949 8.68499C17.634 9.03149 17.0355 8.81099 17.0355 8.33849V1.66049C17.0355 1.31399 16.752 1.18799 16.5315 1.18799H14.5785C14.232 1.18799 14.0745 1.40849 14.0745 1.62899V16.434C14.0745 16.7805 14.358 16.875 14.5785 16.875H16.5C16.815 16.875 17.004 16.6545 17.004 16.434V16.2765V13.032Z" fill="#00297A"/>\n<path d="M33.0375 16.371L32.817 14.3865C32.7855 14.103 32.5335 13.9455 32.2815 13.977C32.124 14.0085 31.9665 14.0085 31.8405 14.0085C30.2655 14.0085 29.0055 12.78 28.911 11.2365C28.911 11.1735 28.911 11.142 28.911 11.079V8.68498C28.911 8.36998 29.1315 8.11798 29.4465 8.11798H32.0925C32.2815 8.11798 32.565 7.96048 32.565 7.61398V5.75548C32.565 5.40898 32.3445 5.18848 32.124 5.18848H29.478C29.163 5.18848 28.911 4.96798 28.911 4.65298V1.69198C28.911 1.50298 28.785 1.21948 28.407 1.21948H26.454C26.202 1.21948 25.9815 1.37698 25.9815 1.66048C25.9815 1.66048 25.9815 11.1735 25.9815 11.2365C26.076 14.418 28.659 16.9695 31.872 16.9695C32.124 16.9695 32.4075 16.938 32.6595 16.9065C32.88 16.875 33.069 16.623 33.0375 16.371Z" fill="#00297A"/>\n<path d="M47.2125 13.914C45.543 13.914 45.291 13.3155 45.291 11.079C45.291 11.079 45.291 11.079 45.291 11.0475V5.69248C45.291 5.50348 45.165 5.18848 44.787 5.18848H42.834C42.582 5.18848 42.33 5.37748 42.33 5.69248V5.94448C41.4795 5.47198 40.4715 5.18848 39.432 5.18848C36.1875 5.18848 33.5415 7.83448 33.5415 11.079C33.5415 14.3235 36.1875 16.9695 39.432 16.9695C40.881 16.9695 42.2355 16.434 43.2435 15.552C43.8105 16.4025 44.6925 16.938 46.0785 16.9695C46.3305 16.9695 47.559 17.001 47.559 16.434V14.355C47.559 14.103 47.4015 13.914 47.2125 13.914ZM39.4005 13.977C37.7625 13.977 36.471 12.654 36.471 11.0475C36.471 9.40948 37.794 8.11798 39.4005 8.11798C41.0385 8.11798 42.33 9.44098 42.33 11.0475C42.3615 12.654 41.0385 13.977 39.4005 13.977Z" fill="#00297A"/>\n</g>\n</svg>\n',
        _e = 38,
        De = 40,
        Ue = 13,
        je = 27,
        Me = 200,
        Be = 400;
      const Ve = ye.extend({
        template:
          '    <span class="search-box input-fix">      <span class="icon-only icon-16 magnifying-glass-16"></span>      <input class="text-field-default" type="text" placeholder="{{placeholder}}">      <a href="#" class="link-button allow-in-read-only clear-search icon-16" style="display: none;">          <span class="icon clear-input-16"></span>      </a>    </span>  ',
        events: {
          "input .text-field-default": "update",
          "click .clear-search": "reset",
          "keyup .text-field-default": function (e) {
            e.preventDefault(), e.which === je ? this.reset() : this.update();
          }
        },
        constructor: function () {
          if ((ye.apply(this, arguments), !this.state)) throw new Error("No State Provided");
          this.options.minChars || (this.options.minChars = 2),
            this.options.placeholder || (this.options.placeholder = "Search..."),
            this.$el.addClass("search-box-wrap"),
            this.$el.addClass("right" === this.options.float ? "float-r" : "float-l"),
            (this.field = this.options.field || "search"),
            this.listenTo(this.state, "change:" + this.field, this._updateValue),
            (this._updateState = A.debounce(this._updateState, Me)),
            A.bindAll(this, "_updateState", "update");
        },
        render: function () {
          return ye.prototype.render.apply(this), this._updateValue(), this;
        },
        update: function () {
          this.$(".clear-search").toggle(!!this.val()), this._updateState();
        },
        remove: function () {
          this.$("input").off(), ye.prototype.remove.apply(this, arguments);
        },
        reset: function (e) {
          e && e.preventDefault(), this.val(""), this.update();
        },
        val: function () {
          const e = this.$("input");
          return e.val.apply(e, arguments);
        },
        _stateValue: function () {
          return this.state.get(this.field) || "";
        },
        _updateState: function () {
          this._changed() && this.state.set(this.field, this.val());
        },
        _updateValue: function () {
          this._changed() && this.val(this._stateValue()) && this.$(".clear-search").toggle(!!this.val());
        },
        _changed: function () {
          const e = this.val() || "",
            t = e.length;
          return (0 === t || t >= this.options.minChars) && this._stateValue() !== e;
        }
      });
      var Ke = Ve,
        We = A.template(
          '<span class="search-box input-fix">  <input tabindex=1 class="text-field-default ods-text-input" type="text"     placeholder="{{i18n-newtab.searchForApp}}"     title="{{i18n-newtab.searchForApp}}"    aria-label="{{i18n-newtab.searchForApp}}"     autocomplete="off" spellcheck="false">  <div class="mac-shortcut-icon">    <div class="keyboard-btn">      Ctrl    </div>    <div class="keyboard-btn">      S    </div>  </div>  <div class="def-shortcut-icon">    <div class="keyboard-btn">      Alt    </div>    <div class="keyboard-btn">      S    </div>  </div>  <a href="#" class="clear-search" style="display:none;">    <span class="clear-input-16"></span>  </a></span>'
        ),
        Fe = Ke.extend({
          className: "search-bar",
          template: We,
          constructor: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            Ke.apply(this, e);
          },
          initialize: function () {
            (this.isEmpty = !0),
              this.listenTo(this.state, "updatedData", function () {
                this.$("input").focus(),
                  this.$("input").attr("autocomplete", "off"),
                  this.$("input").attr("autocorrect", "off"),
                  this.$("input").attr("spellcheck", "false");
              });
          },
          update: function () {
            this.val() && this.isEmpty
              ? ((this.isEmpty = !1),
                this.$el.find(".mac-shortcut-icon").toggleForceBlock(!1),
                this.$el.find(".def-shortcut-icon").toggleForceBlock(!1),
                this.state.trigger("searchbar:change-view", this.isEmpty))
              : this.val() || ((this.isEmpty = !0), this.updateShortcutIcons(), this.state.trigger("searchbar:change-view", this.isEmpty)),
              this.$(".clear-search").toggleForceBlock(!!this.val()),
              this._updateState();
          },
          updateShortcutIcons: function () {
            var e = this.settings.get("isMac");
            null !== e &&
              (this.$el.find(".mac-shortcut-icon").toggleForceBlock(e), this.$el.find(".def-shortcut-icon").toggleForceBlock(!e));
          },
          postRender: function () {
            this.updateShortcutIcons();
          }
        });
      var qe = ye.extend({
          debounceTime: 100,
          constructor: function () {
            ye.apply(this, arguments), this.$el.addClass("data-list data-list-sidebar-left clearfix");
          },
          render: function () {
            return (
              ye.prototype.render.apply(this, arguments),
              A.defer(A.bind(this.balance, this)),
              this.findWhere({ type: "sidebar" }) || this.$el.removeClass("data-list-sidebar-left"),
              this
            );
          },
          balanced: function () {
            return (
              (this.sidebar = this.findWhere({ type: "sidebar" })),
              (this.content = this.findWhere({ type: "content" })),
              !this.sidebar || !this.content || this.sidebar.height() <= this.content.height()
            );
          },
          balance: A.debounce(function () {
            this.balanced() || this.content.height(this.sidebar.height() + 30);
          }, 100)
        }),
        He = a(868),
        Ge = a.n(He),
        Ye = E().isQuickAccessTab;
      y().ajaxSetup({
        beforeSend: function (e) {
          e.setRequestHeader("X-Okta-XsrfToken", y()("#_xsrfToken").text());
        },
        converters: {
          "text secureJSON": function (e) {
            return "while(1){};" === e.substring(0, 11) && (e = e.substring(11)), JSON.parse(e);
          }
        }
      }),
        (window.jQueryCourage = y());
      var $e = y(),
        Je = {};
      const Ze = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#039;": "'", "&#x2F;": "/" },
        Qe =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?!-)((\[?[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]?)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        Xe = {
          sprintf: function () {
            const e = Array.prototype.slice.apply(arguments);
            let t = e.shift(),
              a = t;
            function o() {
              throw new Error("Mismatch number of variables: " + arguments[0] + ", " + JSON.stringify(e));
            }
            for (var n = 0, r = e.length; n < r; n++) {
              const r = e[n];
              (t = t.replace("{" + n + "}", r)), (null != r && t !== a) || o(), (a = t);
            }
            return /\{[\d+]\}/.test(t) && o(), t;
          },
          parseQuery: function (e) {
            const t = {},
              a = decodeURIComponent(e.replace(/\+/g, " ")).split("&");
            for (var o = 0; o < a.length; o++) {
              const e = a[o].split("=");
              t[e.shift()] = e.join("=");
            }
            return t;
          },
          encodeJSObject: function (e) {
            return encodeURIComponent(JSON.stringify(e));
          },
          decodeJSObject: function (e) {
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (e) {
              return null;
            }
          },
          unescapeHtml: function (e) {
            return String(e).replace(/&[\w#\d]{2,};/g, function (e) {
              return Ze[e] || e;
            });
          },
          localize: function (e, t, a) {
            const o = t ? Je[t] : Je[A.keys(Je)[0]];
            if (!o) return "L10N_ERROR[" + t + "]";
            let n = o[e];
            try {
              (a = a && a.slice ? a.slice(0) : []).unshift(n), (n = Xe.sprintf.apply(null, a));
            } catch (e) {
              n = null;
            }
            return n || "L10N_ERROR[" + e + "]";
          },
          parseFloat: function (e) {
            const t = +e;
            return "string" == typeof e && t === parseFloat(e) ? t : e;
          },
          parseInt: function (e) {
            const t = +e;
            return A.isString(e) && t === parseInt(e, 10) ? t : e;
          },
          parseObject: function (e) {
            if (!A.isString(e)) return e;
            try {
              const t = JSON.parse(e);
              return $e.isPlainObject(t) ? t : e;
            } catch (t) {
              return e;
            }
          },
          randomString: function (e) {
            const t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            if (void 0 === e) e = A.random(61);
            else if (0 === e) return "";
            const a = [];
            for (; e--; ) a.push(t[A.random(60)]);
            return a.join("");
          },
          endsWith: function (e, t) {
            return (e += "").length >= (t += "").length && e.substring(e.length - t.length) === t;
          },
          isEmail: function (e) {
            const t = $e.trim(e);
            return !A.isEmpty(t) && Qe.test(t);
          }
        };
      var et = Xe;
      function tt(e, t) {
        return !1 === e.state.get("empty.escape") || !1 === A.result(e, "escape") ? t : A.escape(t);
      }
      var at = ye.extend({
        className: "data-list-empty-msg",
        type: "empty",
        escape: !0,
        title: void 0,
        subtitle: void 0,
        template:
          '      <p class="data-list-empty-binary">        01101110011011110111010001101000011010010110111001100111        <span class="data-list-empty-img"></span>      </p>      <h4 class="data-list-head data-list-empty-head">{{title}}</h4>      <h5 class="data-list-head data-list-empty-head data-list-empty-subhead">{{{subtitle}}}</h5>    ',
        constructor: function (e) {
          const t = (e && e.template) || this.template;
          (this.__template = A.isString(t) ? he.tpl(t) : t), ye.apply(this, arguments);
          const a = this.options.debounceTime || 200,
            o = a + 10;
          this.listenTo(this.collection, "sync add remove reset", A.debounce(this.toggle, a)),
            this.listenTo(this.collection, "error", A.debounce(this._showError, o)),
            this.listenTo(this.collection, "request", this.empty);
        },
        _showError: function (e, t, a) {
          if (e === this.collection) {
            if (!A.isString(a))
              try {
                a = (t.responseJSON || JSON.parse(t.responseText)).errorSummary;
              } catch (e) {}
            this.__doRender(
              et.localize("datalist.error_title", "courage"),
              A.isString(a) ? a : et.localize("datalist.error_subtitle", "courage")
            );
          }
        },
        render: function () {
          return this;
        },
        __doRender: function (e, t) {
          this.$el.html(this.__template({ title: e, subtitle: tt(this, t) })).show();
        },
        __getValue: function (e) {
          const t = A.result(this, e);
          return !1 === t ? "" : this.state.get("empty." + e) || t || et.localize("datalist.empty_" + e, "courage");
        },
        isEmptyState: function () {
          return 0 === this.collection.size();
        },
        toggle: function () {
          return this.isEmptyState() ? this.__doRender(this.__getValue("title"), this.__getValue("subtitle")) : this.empty(), this;
        },
        empty: function () {
          this.$el.empty().hide();
        }
      });
      const ot = {
        lines: 9,
        length: 0,
        width: 8,
        radius: 12,
        corners: 1,
        rotate: 23,
        direction: 1,
        color: "#666",
        speed: 0.8,
        trail: 50,
        shadow: !1,
        hwaccel: !1,
        className: "",
        zIndex: 2e9,
        top: "auto",
        left: "auto"
      };
      var nt = ye.extend({
          constructor: function () {
            this.spinOptions || (this.spinOptions = {}), A.defaults(this.spinOptions, ot), ye.apply(this, arguments);
          },
          render: function () {
            return this.spinAtRender || this.$el.hide(), ye.prototype.render.apply(this, arguments), this.spinAtRender && this.spin(), this;
          },
          spin: function () {
            return this.$el.spin(this.spinOptions).show(), this;
          },
          empty: function () {
            const e = this.$el;
            e.fadeOut(Be, function () {
              e.spin(!1);
            });
          }
        }),
        rt = nt.extend({
          className: "data-list-load-wrap",
          type: "loading",
          template: '      <div class="data-list-load-mask"></div>      <h4 class="data-list-head">Loading...</h4>    ',
          spinOptions: { className: "data-list-spinner" },
          initialize: function () {
            nt.prototype.initialize.apply(this, arguments),
              this.listenTo(this.collection, "request", this.spin),
              this.listenTo(this.collection, "sync error", this.empty);
          },
          spin: function (e) {
            e === this.collection && nt.prototype.spin.apply(this, arguments);
          }
        }),
        st = ye.extend({
          Empty: null,
          Loading: null,
          template: '<div class="data-list-content" data-se="data-list-content"></div>',
          constructor: function () {
            if ((ye.apply(this, arguments), !this.collection)) throw new Error("Missing Arguments: collection");
            this.Toolbar && this.add(this.Toolbar, { prepend: !0 }), this.Main && this.add(this.Main);
            const e = this.Empty || at,
              t = this.Loading || rt;
            this.add(e), this.add(t), this.$el.addClass("data-list-content-wrap"), this.$el.attr("data-se", "data-list-content-wrap");
          },
          add: function () {
            const e = A.toArray(arguments);
            return void 0 === e[1] && (e[1] = ".data-list-content"), ye.prototype.add.apply(this, e);
          },
          height: function (e) {
            if (!e) return this.$el.height();
            this.$(".data-list-content").css("min-height", e);
          },
          type: "content"
        }),
        it = ve.extend({
          constructor: function () {
            if ((ve.apply(this, arguments), !this.collection)) throw new Error("Missing collection");
            this.listenTo(this.collection, "reset sort", this.reset),
              this.listenTo(this.collection, "add", this.addItem),
              this.collection.each(this.addItem, this);
          },
          item: null,
          itemSelector: null,
          reset: function () {
            return this.removeChildren(), this.collection.each(this.addItem, this), this;
          },
          addItem: function (e) {
            var t = this.add(this.item, this.itemSelector, { options: { model: e } }).last();
            return t.listenTo(e, "destroy remove", t.remove), this;
          }
        });
      function pt(e) {
        return A.map(e, function (e) {
          return A.isString(e) && (e = { name: e }), !e.name && e.field && (e = A.extend({ name: e.field }, e)), e;
        });
      }
      function lt(e) {
        var t = {};
        return (
          A.each(
            e || {},
            function (e, a) {
              t[a] = function (t) {
                t.preventDefault(), t.stopPropagation(), A.isFunction(e) && e.apply(this, arguments);
              };
            },
            this
          ),
          t
        );
      }
      var dt = {
          createHeader: function (e) {
            return ve.extend({
              tagName: "thead",
              template: "<tr></tr>",
              initialize: function () {
                A.each(
                  pt(e),
                  function (e) {
                    this.add(
                      ve.extend({
                        tagName: "th",
                        children: e.headerView && [e.headerView],
                        template: e.headerView ? null : e.label || "&nbsp;",
                        attributes: function () {
                          return A.extend({ role: "columnheader" }, e.headAttributes || {});
                        }
                      }),
                      "tr"
                    );
                  },
                  this
                );
              }
            });
          },
          createRow: function (e) {
            var t = this;
            return ve.extend({
              tagName: "tbody",
              template: '<tr role="row"></tr>',
              children: A.map(pt(e), function (e) {
                return [t.createCell(e), "tr"];
              })
            });
          },
          createCell: function (e) {
            var t = A.extend(A.pick(e, "className", "attributes", "initialize"), {
              tagName: "td",
              events: lt(e.events),
              children: e.view && [e.view],
              template: e.view ? null : e.template || "{{" + e.name + "}}",
              postRender() {
                const t = A.result(e, "maxWidth"),
                  a = this.$("div").length ? this.$("div") : this.$el;
                A.isNumber(t) && (a.css("max-width", t + "px"), a.addClass("column-no-wrap"));
              }
            });
            return ve.extend(t);
          },
          __normalizeFields: pt,
          __cleanEvents: lt
        },
        ut = { header: "thead", footer: "tfoot", caption: "caption" },
        ct = {};
      function gt(e, t) {
        var a = e[t];
        if (a) {
          "header" == t && A.isArray(a)
            ? (a = dt.createHeader(
                A.map(a, function (e) {
                  return A.isString(e) ? { label: e } : A.isFunction(e) ? { headerView: e } : e;
                })
              ))
            : A.isString(a) && (a = ve.extend({ tagName: ut[t], template: a }));
          var o = e.add(a, { prepend: !0 }).last();
          ct[o.cid] = !0;
        }
      }
      var vt = it.extend({
          constructor: function () {
            this.tagName = "table";
            var e = A.result(this, "columns") || [];
            e.length &&
              (!this.header &&
                (function (e) {
                  var t = Array.prototype.splice.call(arguments, 1);
                  return (
                    A.reduce(
                      t,
                      function (t, a) {
                        return t + A.compact(A.pluck(e, a)).length;
                      },
                      0
                    ) > 0
                  );
                })(e, "label", "headerView") &&
                (this.header = dt.createHeader(e)),
              this.item || (this.item = dt.createRow(e))),
              it.apply(this, arguments),
              gt(this, "caption"),
              gt(this, "footer"),
              gt(this, "header");
          },
          columns: [],
          header: null,
          footer: null,
          caption: null,
          removeChildren: function () {
            return (
              this.each(function (e) {
                ct[e.cid] || e.remove();
              }),
              this
            );
          }
        }),
        ht = ye.decorate(vt);
      var kt = ye.extend({
        el: '<a href="#" class="data-list-pager-footer-link"></a>',
        template: '{{i18n code="datalist.show_more" bundle="courage"}}',
        events: {
          click: function (e) {
            if ((e.preventDefault(), this.collection.fetchMore)) {
              const e = $e("body").css("position");
              $e("body").css("position", "sticky"),
                this.collection.fetchMore(),
                this.listenToOnce(this.collection, "sync error", function () {
                  $e("body").css("position", e);
                });
            }
          }
        }
      });
      const mt = he.tpl('    <tr>      <td colspan="{{colspan}}"></td>    </tr>  '),
        yt = ye.extend({
          tagName: "tfoot",
          className: "data-list-pager-footer",
          LoadMoreView: void 0,
          constructor: function () {
            ye.apply(this, arguments),
              this.listenTo(this.collection, "request", this.empty),
              this.listenTo(this.collection, "sync reset", A.debounce(this.render, 50));
          },
          render: function () {
            if (this.collection.hasMore()) {
              const e = this.options.colspan || this.colspan || 100;
              this.$el.html(mt({ colspan: e }));
              const t = this.LoadMoreView ? this.LoadMoreView : kt;
              this.$("td").html(new t(this.options).render().el);
            } else this.empty();
            return this;
          },
          empty: function () {
            this.$el.empty();
          }
        });
      var bt = yt,
        wt = ht.extend({
          constructor: function () {
            this.footer || !1 === this.footer || (this.footer = bt), ht.apply(this, arguments), this.$el.addClass("data-list-table");
          }
        }),
        ft = E().isQuickAccessTab,
        Pt = A.template(
          '  <tr>    <td>      <a href="#" class="app-link clearfix">        <div class="app-logo">          <img src="{{logoUrl}}" alt=""/>        </div>        <div class="app-info">          <h4 class="app-title">{{label}}</h4>          <p class="app-description">{{appDisplayName}}</p>        </div>      </a>    </td>  </tr>'
        ),
        St = ye.extend({
          className: "appLink list-wrapper",
          tagName: "tbody",
          events: { click: "_launchApp" },
          initialize: function () {
            this.listenTo(this.state, "change:selectedIndex", this._changeSelected);
          },
          render: function () {
            return this.$el.html(Pt(this.model.toJSON())), this._changeSelected(this.state, this.state.get("selectedIndex")), this;
          },
          _changeSelected: function (e, t) {
            var a = t;
            if (a > -1 && this.model.collection.at(a) === this.model) {
              var o = this.$el.position().top;
              this.state.set("selectedBounds", { top: o, bottom: o + this.$el.height() }), this.$el.addClass("selected-row");
            } else this.$el.removeClass("selected-row");
          },
          _launchApp: function () {
            var e = this,
              t = this.model.get("linkUrl"),
              a = this.options.eventTracker && this.options.eventTracker.newtab;
            if (a) {
              var o = this.model.get("tabId");
              a.trackAppLaunch({
                appName: this.model.get("appDisplayName"),
                authType: this.model.get("pluginRequired") ? "SWA" : "Federated",
                tabType: ft(o) ? "Quick_Access" : "User_Defined"
              }).fin(function () {
                e.state.trigger("launchApp", t);
              });
            } else this.state.trigger("launchApp", t);
            return (
              this.settings &&
                this.settings.get("quickAccessAppsEnabled") &&
                this.settings.get("quickAccessAppsUpdateByPostEnabled") &&
                this.options.api.postRecentlyUsedApps(this.model.get("appInstanceId"), this.model.get("appLinkId")).done(),
              !1
            );
          },
          _launchAppSettings: function () {
            return this.state.trigger("launchApp", this.model.get("appSettingsUrl")), !1;
          }
        }),
        At =
          '<svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g class="shadow">\n<path d="M41.7886 44.4228C33.9399 44.4228 27.5772 38.0601 27.5772 30.2114C27.5772 22.3626 33.9399 16 41.7886 16C49.6373 16 56 22.3626 56 30.2114C56 38.0601 49.6373 44.4228 41.7886 44.4228Z" stroke="#E5EDFB" stroke-width="24"/>\n<path d="M24.1463 47.8536L6 66" stroke="#E5EDFB" stroke-width="3" stroke-linecap="round"/>\n</g>\n<path d="M37.7886 50.9228C24.1409 50.9228 13.0772 39.8591 13.0772 26.2114C13.0772 12.5637 24.1409 1.5 37.7886 1.5C51.4363 1.5 62.5 12.5637 62.5 26.2114C62.5 39.8591 51.4363 50.9228 37.7886 50.9228Z" fill="white" stroke="#00297A" stroke-width="3"/>\n<path d="M20.1463 43.8536L2 62" stroke="#00297A" stroke-width="3" stroke-linecap="round"/>\n<path class="question" d="M35.5631 31.521H38.684C38.684 29.8872 39.125 29.0181 40.7533 27.6276C43.3653 25.4028 44.7562 23.5951 44.7562 20.9184C44.7562 16.9207 41.6353 14.4525 37.6663 14.4525C33.2224 14.4525 30.4068 17.164 30.3729 21.996L33.6295 22.5175C33.6634 19.1455 35.1221 17.4421 37.6663 17.4421C39.8374 17.4421 41.33 18.7979 41.33 21.0227C41.33 23.0042 40.007 24.1861 38.5144 25.5071C36.7504 27.0366 35.5631 28.3576 35.5631 31.521ZM34.9864 39.2384H39.2946V34.7192H34.9864V39.2384Z" fill="#00297A"/>\n</svg>\n',
        Ot = A.template(
          '  <div class="info-message">    <span class="info-message-search-icon">' +
            At +
            '</span>    <h4 class="info-header error">{{i18n-newtab.dontHaveApp}}</h4>  </div>'
        ),
        xt = A.template(
          '  <div class="info-message">    <span class="info-message-search-icon">' +
            At +
            '</span>    <h4 class="info-header error">{{i18n-newtab.dontHaveApp}}</h4>    <button class="btn btn-primary redirect ods-button">      {{i18n-newtab.searchAppCatalog}}</button>  </div>'
        ),
        Tt = A.template(
          '  <div class="info-message">    <span class="info-message-search-icon">' +
            At +
            '</span>    <h4 class="info-header">{{i18n-newtab.tabEmpty}}</h4>    <p class="info-text">{{i18n-newtab.tabsGoToWeb}}    </p>  </div>'
        ),
        Rt = A.template(
          '  <div class="info-message">    <span class="info-message-search-icon">' +
            At +
            '</span>    <h4 class="info-header">{{i18n-newtab.dontHaveAnyApps}}</h4>  </div>'
        ),
        Nt = A.template(
          '  <div class="info-message">    <span class="info-message-search-icon">' +
            At +
            '</span>    <h4 class="info-header">{{i18n-newtab.dontHaveAnyApps}}</h4>    <button class="redirect ods-button">      {{i18n-newtab.addApps}}</button>  </div>'
        ),
        Ct = at.extend({
          events: { "click .redirect": "redirectOkta" },
          redirectOkta: function (e) {
            e.preventDefault();
            var t = this.settings.get("oktaHome"),
              a = "" !== this.state.get("filter"),
              o = "" !== this.state.get("search");
            if (t) {
              var n = t;
              (!o && a) || (n += "/enduser/catalog"), this.state.trigger("launchApp", n);
            }
          },
          selectTemplate: function (e) {
            var t = "" !== this.state.get("filter");
            return !!this.state.get("search") ? (e ? xt : Ot) : t ? Tt : e ? Nt : Rt;
          },
          toggle: function () {
            return (
              this.isEmptyState()
                ? ((this.__template = this.selectTemplate(this.settings.get("personalAppsEnabled"))),
                  this.__doRender(this.__getValue("title"), this.__getValue("subtitle")))
                : this.empty(),
              this
            );
          },
          render: function () {
            return this.toggle();
          }
        }),
        It = st.extend({
          Main: wt.extend({
            constructor: function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              (this.item = St), wt.apply(this, e);
            }
          }),
          Empty: Ct,
          initialize: function () {
            this.listenTo(this.state, "change:selectedIndex", this._changeSelectedIndex),
              this.listenTo(this.state, "change:selectedBounds", this._updateScroll);
          },
          _changeSelectedIndex: function (e, t) {
            -1 === t && this._updateScroll(e, { top: 0, bottom: 0 });
          },
          _updateScroll: function (e, t) {
            var a = this.$el.height(),
              o = this.$el.scrollTop(),
              n = o + a;
            t.top < o ? this.$el.scrollTop(t.top) : t.bottom > n && this.$el.scrollTop(t.bottom - a);
          }
        }),
        Et = qe.extend({
          initialize: function () {
            var e, t, a, o;
            (this.appsUtil =
              ((e = this.options.appLinks),
              (t = A.filter(e, function (e) {
                return !Ye(e.tabId);
              })),
              (a = Ge().createIndex(["label", "appDisplayName"], t)),
              {
                fuseSearch: (o = new (Ge())(
                  t,
                  {
                    isCaseSensitive: !1,
                    findAllMatches: !1,
                    includeMatches: !1,
                    includeScore: !1,
                    useExtendedSearch: !1,
                    minMatchCharLength: 1,
                    shouldSort: !0,
                    threshold: 0.45,
                    location: 0,
                    distance: 1e3,
                    keys: [
                      { name: "label", weight: 0.55 },
                      { name: "appDisplayName", weight: 0.45 }
                    ]
                  },
                  a
                )),
                searchApps: function (e) {
                  var t = o.search(e);
                  return A.map(t, function (e) {
                    return e.item;
                  });
                },
                filterApps: function (t) {
                  var a = A.chain(e).filter(function (e) {
                    return e.tabId === t;
                  });
                  return Ye(t)
                    ? a.value()
                    : a
                        .sortBy(function (e) {
                          return e.sortOrder;
                        })
                        .value();
                }
              })),
              "" !== this.state.get("filter") && this._resetCollection(),
              (this.appContent = new It(this.options)),
              this.add(this.appContent),
              this.listenTo(this.state, "change:filter change:search", this._resetCollection);
          },
          _resetCollection: function () {
            var e,
              t = this.state.get("search"),
              a = this.state.get("filter"),
              o = this.state.get("clickTab"),
              n = this.options.eventTracker && this.options.eventTracker.newtab;
            if (t) (e = this.appsUtil.searchApps(t)), this.state.set("selectedIndex", 0), n && n.trackAppSearch().done();
            else if (a) {
              if (((e = this.appsUtil.filterApps(a)), this.state.set("selectedIndex", -1), o)) {
                var r = E().getTabById(a, this.options.tabCollection, this.options.quickAccessTabCollection);
                n && n.trackSelectTab({ tabName: r ? r.escape("label") : "Unlabelled" }).done();
              }
            } else e = this.options.appLinks;
            this.options.collection.reset(e);
          }
        }),
        Lt = A.template("{{tabLabel}}"),
        zt = ye.extend({
          className: "tab-title",
          initialize: function () {
            this.listenTo(this.options.state, "change:filter", this.render);
          },
          render: function () {
            if (!1 === this.options.isEmpty) this.$el.html(Lt({ tabLabel: "{{i18n-newtab.submenu.myApps}}" }));
            else {
              var e = this.options.state.get("filter"),
                t = this.options.tabCollection.get(e) || this.options.quickAccessTabCollection.get(e);
              this.$el.html(Lt({ tabLabel: t && t.get("label") }));
            }
            return this;
          }
        }),
        _t = A.template('<div class="item">{{label}}</div>'),
        Dt = ye.extend({
          className: "tab-option",
          template: _t,
          events: { "click .item": "switchTabs" },
          initialize: function () {
            this.tab = this.options.tab;
          },
          render: function () {
            return this.$el.html(_t({ label: this.tab.get("label") })), this;
          },
          switchTabs: function () {
            var e = this.tab.get("id");
            this.state.set({ filter: e }),
              this.$el.parent().find(".tab-option-selected").removeClass("tab-option-selected"),
              this.$el.addClass("tab-option-selected");
          }
        }),
        Ut = ye.extend({
          className: "tab-dropdown-list",
          initialize: function () {
            var e = this,
              t = this.options.tabCollection,
              a = this.options.quickAccessTabCollection;
            this.state.get("hasQuickAccessApp") &&
              a.each(function (t) {
                e.addToState(t);
              }),
              t.each(function (t) {
                e.addToState(t);
              }),
              t.length + a.length > 0
                ? this.at(0).$el.addClass("tab-option-selected")
                : this.add('<div class="tab-option">        <div class="item">{{i18n-newtab.submenu.dropdown.noTabs}}</div>      </div>');
          },
          addToState: function (e) {
            this.add(new Dt({ tab: e, state: this.state }));
          }
        }),
        jt = A.template(
          '  <div class="ods-button is-ods-button-secondary dropdown-btn">    <span class="text">{{i18n-newtab.submenu.dropdown.view}}</span>    <span class="triangle-icon"><svg width="16" height="24" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.5908 9.91005L8.19206 13.9885C8.09211 14.1084 7.90789 14.1084 7.80794 13.9885L4.40922 9.91004C4.27353 9.74721 4.38932 9.5 4.60128 9.5L11.3987 9.5C11.6107 9.5 11.7265 9.74721 11.5908 9.91005Z" fill="#1662DD" stroke="#1662DD"/>\n</svg>\n</span>  </div>'
        ),
        Mt = ye.extend({
          className: "tab-dropdown",
          template: jt,
          events: { "click .dropdown-btn": "toggleDropdown" },
          initialize: function () {
            y()("body").on("click", this.hideDropdown), this.add(Ut);
          },
          toggleDropdown: function (e) {
            this.$el.find(".tab-dropdown-list").toggle(), e.stopPropagation();
          },
          hideDropdown: function () {
            y()(".tab-dropdown-list").hide();
          }
        }),
        Bt = A.template(
          '<div>    <span class="navigation-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 15.8333V4.16663" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.16663 9.99996L9.99996 4.16663L15.8333 9.99996" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</span>    <span class="navigation-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 4.16671L10 15.8334" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M15.8334 10L10 15.8334L4.16671 10" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</span>    <span>{{i18n-newtab.submenu.navigate}}</span>  </div>  <div class="right-btn-group">    <span class="navigation-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.50004 8.33337L3.33337 12.5L7.50004 16.6667" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M16.6667 3.33337V9.16671C16.6667 10.0508 16.3155 10.8986 15.6904 11.5237C15.0653 12.1489 14.2174 12.5 13.3334 12.5H3.33337" stroke="#1D1D21" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</span>    <span>{{i18n-newtab.submenu.launch}}</span>  </div>'
        ),
        Vt = ye.extend({ className: "navigation", template: Bt }),
        Kt = ye.extend({
          className: "submenu",
          initialize: function () {
            var e = {
              isEmpty: !0,
              state: this.options.state,
              tabCollection: this.options.tabCollection,
              quickAccessTabCollection: this.options.quickAccessTabCollection
            };
            (this.tabTitle = new zt(e)),
              this.add(this.tabTitle),
              (this.tabDropdown = new Mt(e)),
              this.add(this.tabDropdown),
              (this.navigationButtons = new Vt()),
              this.add(this.navigationButtons),
              this.listenTo(this.options.state, "searchbar:change-view", this.handleViewChange);
          },
          handleViewChange: function (e) {
            (this.tabTitle.options.isEmpty = e),
              this.tabTitle.render(),
              e
                ? (this.tabDropdown.$el.show(), this.navigationButtons.$el.hide())
                : (this.tabDropdown.$el.hide(), this.navigationButtons.$el.show());
          }
        }),
        Wt = ye.extend({
          className: "app-home",
          initialize: function () {
            this.add(Fe, { options: { minChars: 1 } }), this.add(Kt), this.add(Et);
            var e = A.bind(this._pressedKey, this);
            y()("body").on("keydown", A.throttle(e, 50));
          },
          _pressedKey: function (e) {
            var t = this.settings.get("isMac");
            switch (e.which) {
              case _e:
                this._updateSelected(-1);
                break;
              case De:
                this._updateSelected(1);
                break;
              case Ue:
                var a = this.state.get("selectedIndex"),
                  o = void 0;
                this.collection.length > 0 && a >= 0 && ((o = this.collection.at(a).get("linkUrl")), this.state.trigger("launchApp", o));
                break;
              case 83:
                ((t && e.ctrlKey) || (!t && e.altKey)) && this.$el.find(".ods-text-input").focus();
            }
          },
          _updateSelected: function (e) {
            var t = this.collection.length - 1,
              a = this.state.get("selectedIndex") + e;
            a > t ? (a = 0) : a < 0 && (a = t), this.state.set("selectedIndex", a);
          }
        });
      var Ft = ye.extend({
          className: "msg-container",
          render: function () {
            var e,
              t =
                ((e = this.options.icon),
                A.template(
                  '      <div class="icon-container">' + e + '</div>      <h2 class="title">{{title}}</h2>      <p>{{description}}</p>'
                ));
            return this.$el.html(t(this.options)), this;
          }
        }),
        qt =
          '<svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g class="shadow">\n<path d="M41.7886 44.4228C33.9399 44.4228 27.5772 38.0601 27.5772 30.2114C27.5772 22.3626 33.9399 16 41.7886 16C49.6373 16 56 22.3626 56 30.2114C56 38.0601 49.6373 44.4228 41.7886 44.4228Z" stroke="#E5EDFB" stroke-width="24"/>\n<path d="M24.1463 47.8536L6 66" stroke="#E5EDFB" stroke-width="3" stroke-linecap="round"/>\n</g>\n<path d="M37.7886 50.9228C24.1409 50.9228 13.0772 39.8591 13.0772 26.2114C13.0772 12.5637 24.1409 1.5 37.7886 1.5C51.4363 1.5 62.5 12.5637 62.5 26.2114C62.5 39.8591 51.4363 50.9228 37.7886 50.9228Z" fill="white" stroke="#00297A" stroke-width="3"/>\n<path d="M20.1463 43.8536L2 62" stroke="#00297A" stroke-width="3" stroke-linecap="round"/>\n<path class="warning" fill-rule="evenodd" clip-rule="evenodd" d="M37.1919 15.2138L27.8109 33.9778C27.5105 34.5787 27.9474 35.2857 28.6191 35.2857H47.381C48.0527 35.2857 48.4896 34.5787 48.1892 33.9778L38.8083 15.2138C38.4753 14.5477 37.5249 14.5477 37.1919 15.2138ZM39.7144 20.7142H36.2858V28.4285H39.7144V20.7142ZM38.0001 33.5714C38.9468 33.5714 39.7144 32.8039 39.7144 31.8571C39.7144 30.9103 38.9468 30.1428 38.0001 30.1428C37.0533 30.1428 36.2858 30.9103 36.2858 31.8571C36.2858 32.8039 37.0533 33.5714 38.0001 33.5714Z" fill="#00297A"/>\n</svg>\n',
        Ht = ye.extend({
          className: "app-home-pending-consent",
          initialize: function () {
            this.add(Ft, {
              options: { icon: qt, title: "{{i18n-newtab.errorPage.title}}", description: "{{i18n-newtab.errorPage.description}}" }
            });
          }
        }),
        Gt = A.template(
          '  <span class="has-ods-tooltip">    <aside class="ods-tooltip is-ods-tooltip-{{direction}}" role="tooltip">      {{label}}    </aside>  </span>'
        ),
        Yt = ye.extend({
          render: function () {
            return this.$el.html(Gt(this.options)), this.$(".has-ods-tooltip").prepend(this.options.component), this;
          },
          setComponent: function (e) {
            (this.options.component = y()("<div></div>").append(e.clone()).html()), e.replaceWith(this.render().$el);
          }
        }),
        $t = A.template('<a href="#"><img src="{{orgLogoLink}}" /></a>'),
        Jt = ye.extend({
          className: "logo",
          tagName: "span",
          events: { "click img": "redirectOkta" },
          initialize: function () {
            this.logoTooltip = new Yt({ label: "{{i18n-newtab.logo.goToOktaDashboard}}", direction: "bottom" });
          },
          render: function () {
            var e = this.settings.get("orgLogo");
            return this.$el.html($t({ orgLogoLink: e })), this.logoTooltip.setComponent(this.$("img")), this;
          },
          redirectOkta: function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = this.settings.get("oktaHome"),
              a = this.options.eventTracker && this.options.eventTracker.newtab;
            t && this.state.trigger("openUrl", t), a && a.trackDashboardClick().done();
          }
        }),
        Zt = { MAIN: "Main", SIGN_IN: "SignIn", ERROR: "Error", ACCESS_DENIED: "AccessDenied" },
        Qt = { LIGHT: "light", DARK: "dark" };
      var Xt = ye.extend({
          className: "theme-switch",
          events: { "click button": "_handleThemeChange" },
          render: function () {
            var e,
              t = this.settings.get("nte"),
              a = t && t.theme;
            return (
              this.$el.html(
                ((e = a),
                A.template(
                  '  <button class="ods-button is-ods-button-secondary theme-btn">' +
                    (e === Qt.DARK
                      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12 1V3" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12 21V23" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.21997 4.21997L5.63997 5.63997" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.36 18.36L19.78 19.78" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M1 12H3" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M21 12H23" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.21997 19.78L5.63997 18.36" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.36 5.63997L19.78 4.21997" stroke="#A7B5EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n'
                      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6518 13.7866 21 12.79Z" stroke="#1662DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n') +
                    "</button>"
                ))
              ),
              this
            );
          },
          _handleThemeChange: A.debounce(function () {
            var e = this.settings.get("nte"),
              t = e && e.theme,
              a = t === Qt.DARK ? Qt.LIGHT : Qt.DARK,
              o = this.options.eventTracker && this.options.eventTracker.newtab;
            this.state.trigger("theme:change", a),
              o && o.trackThemeSwitch({ oldTheme: t, newTheme: a }).done(),
              (e.theme = a),
              this.settings.set({ nte: e }),
              this.render();
          }, Me)
        }),
        ea = ye.extend({
          className: "newtab-main-content",
          initialize: function () {
            this.add(Jt), this.options.appLinks && this.options.quickAccessTabCollection ? this.add(Wt) : this.add(Ht), this.add(Xt);
          }
        }),
        ta = ye.extend({
          className: "error-page",
          initialize: function () {
            this.add(Ft, {
              options: { icon: qt, title: "{{i18n-newtab.errorPage.title}}", description: "{{i18n-newtab.errorPage.description}}" }
            });
          }
        }),
        aa = ye.extend({
          className: "access-denied-page",
          events: { "click .ods-button": "turnOffNTE" },
          initialize: function () {
            this.add(Ft, {
              options: {
                icon: ze,
                title: "{{i18n-newtab.accessDeniedPage.title}}",
                description: "{{i18n-newtab.accessDeniedPage.description}}"
              }
            }),
              this.add(
                '      <button class="ods-button adjust-spacing">        {{i18n-newtab.accessDeniedPage.switchToDefault}}      </button>    '
              );
          },
          turnOffNTE: function () {
            this.state.trigger("nte:off");
          }
        }),
        oa = ye.extend({
          className: "sign-in-page",
          initialize: function () {
            this.add(Ft, {
              options: { icon: ze, title: "{{i18n-newtab.signInPage.title}}", description: "{{i18n-newtab.signInPage.description}}" }
            });
          }
        }),
        na = ye.extend({
          showMain: function (e) {
            var t = A.extend(
              {},
              {
                state: this.state,
                settings: this.settings,
                appLinks: e.appLinks,
                collection: new Ie.Collection(e.appLinks),
                quickAccessTabCollection: new Le.Collection(e.quickAccessTabs),
                tabCollection: new Le.Collection(e.tabs),
                eventTracker: this.options.eventTracker,
                api: this.options.api,
                debounceTime: 1
              }
            );
            this.add(ea, { options: t }),
              this.add("powered by <span>" + ze + "</span>", { options: { className: "okta-logo" } }),
              this.render(),
              this.state.trigger("updatedData");
          },
          showError: function () {
            this.removeChildren(), this.add(ta), this.render();
          },
          showAccessDenied: function () {
            this.removeChildren(), this.add(aa), this.render();
          },
          showSignIn: function () {
            this.removeChildren(), this.add(oa), this.render();
          }
        }),
        ra = function (e) {
          return {
            getSetting: function (t, a, o) {
              return t.then(function (t) {
                e.set(a, o ? o(t) : t);
              });
            },
            getSettings: function (t, a) {
              return t.then(function (t) {
                e.set(a ? a(t) : t);
              });
            }
          };
        },
        sa = {
          pickNewTabSettings: function (e) {
            return e && e.enableNTE;
          },
          pickOrgSettings: function (e) {
            return {
              appOnTheFlyEnabled: !!e.pluginSelfServiceEnabled,
              runOnAppSignupEnabled: !!e.pluginRunOnAppSignupEnabled,
              pluginLocale: e.pluginLocale || "en",
              userIsAdmin: !!e.userIsAdmin,
              quickAccessAppsEnabled: !!e.pluginPopoverQuickAccessAppsEnabled,
              quickAccessAppsUpdateByPostEnabled: !!e.quickAccessAppsUpdateByPostEnabled,
              pluginPendoTrackingEnabled: !!e.pluginPendoTrackingEnabled,
              pluginWorkspacesEnabled: !!e.pluginWorkspacesEnabled,
              pluginEnduserV2AddAppEnhancementEnabled: !!e.pluginEnduserV2AddAppEnhancementEnabled,
              groups: e.groups,
              pluginOktaPersonalCoreServiceEnabled: !!e.pluginOktaPersonalCoreServiceEnabled,
              pluginOktaPersonalIsPasswordlessEnabled: !!e.pluginOktaPersonalIsPasswordlessEnabled
            };
          }
        };
      function ia(e, t) {
        var a = t.get("pluginType"),
          o = t.get("internalOktaDomain"),
          n = A.some,
          r = A.find,
          s = E().isQuickAccessTab,
          i = (function (e) {
            var t = e.get("authStatus"),
              a = e.get("oktaAccounts"),
              s = t && t[o] && t[o].accessDenied,
              i = n(a, function (e) {
                return !0 === e.consentRequired;
              }),
              p = r(a, function (e) {
                return !0 === e.isCurrentAccount;
              });
            return { domainDenied: s, isPendingConsent: i, currentUserId: p ? p.userId : void 0 };
          })(t),
          l = { tabApps: {}, activeTabId: "", hasQuickAccessApp: !1 };
        return i.domainDenied
          ? p().reject({ view: Zt.ACCESS_DENIED })
          : e.getTabs(a).then(function (e) {
              var a, o;
              return (
                (l.tabApps = e),
                (a = n(l.tabApps.appLinks, function (e) {
                  return s(e.tabId);
                })),
                (o = l.tabApps.quickAccessTabs),
                t && t.get("quickAccessAppsEnabled") && !t.get("userHideRecentlyUsedApps") && o.length && a
                  ? ((l.activeTabId = o[0].id), (l.hasQuickAccessApp = !0))
                  : (l.activeTabId = l.tabApps.tabs[0].id),
                l
              );
            });
      }
      var pa = {
          port: (0, A.extend)({}, q()),
          main: function (e) {
            var t,
              a,
              o,
              n,
              r,
              i = C(e),
              l = O(i.sendMessage),
              u =
                ((t = i.sendMessage),
                (a = N().apiStorage),
                (o = {
                  setPersistentState: a.set,
                  getPersistentState: a.get,
                  removePersistentState: a.remove,
                  setSessionState: function (e, a) {
                    return t({ type: "setSessionState", data: { key: e, val: r(a) } });
                  },
                  getSessionState: function (e) {
                    return t({ type: "getSessionState", data: { key: e } });
                  }
                }),
                (n = k()(o, s().Storage)),
                (r = N().wrapVal),
                (n.getOktaDomainInternal = n.getOktaDomain),
                (n.getOktaDomain = function () {
                  return p()
                    .all([n.getOktaDomainInternal(), n.getDomains(), n.getUseDomainMapping()])
                    .spread(function (e, t, a) {
                      return t && t.customDomain && t.oktaDomain === e && a ? t.customDomain : e;
                    });
                }),
                (n.resetPendingConsentStorageValsInLocalStorage = function () {
                  return p().all([n.setEnduserHomePendingConsent({}), n.setOktaDomainPendingConsent({})]);
                }),
                (n.resetLocalStorage = function () {
                  return p().all([
                    n.setOktaDomain({}),
                    n.setPluginSettings({}),
                    n.setTrackedFirstTimeActions({}),
                    n.setMonitoredSites({}),
                    n.setInjectionCount(0),
                    n.setLastSelfServiceSitesCheck(null),
                    n.setSelfServiceSites({}),
                    n.setSelfServiceSitesIgnoreList({}),
                    n.setDisableOnTheFlyAppAddition(!1),
                    n.setDisableGeneratePassword(!1),
                    n.setIgnoreList({}),
                    n.setLastHealthCheck(null),
                    n.setVersion(null),
                    n.setDomains({}),
                    n.setRatings({}),
                    n.setNewTab({ theme: "light" })
                  ]);
                }),
                (n.getOrgSettings = function () {
                  return n.getPluginSettings().then(function (e) {
                    return e && e.orgSettings ? e.orgSettings : {};
                  });
                }),
                (n.increaseAppClicks = function () {
                  return n.getRatings().then(function (e) {
                    return A.isEmpty(e)
                      ? n.setRatings({ seenBanner: !1, appClicks: 1 })
                      : e.seenBanner
                      ? e
                      : n.setRatings({ seenBanner: e.seenBanner, appClicks: e.appClicks + 1 });
                  });
                }),
                (n.setAuthStatusByDomain = function (e, t) {
                  return n.getAuthStatus().then(function (a) {
                    return (a[e] = t), n.setAuthStatus(a);
                  });
                }),
                (n.getVaultStatusForCurrentUser = function () {
                  return p()
                    .all([n.getEnduserHome(), n.getVaultStatus()])
                    .spread(function (e, t) {
                      return t["".concat(e.orgId, "-").concat(e.userId)] || {};
                    });
                }),
                (n.setVaultStatusForCurrentUser = function (e) {
                  return p()
                    .all([n.getEnduserHome(), n.getVaultStatus()])
                    .spread(function (t, a) {
                      return (a["".concat(t.orgId, "-").concat(t.userId)] = e), n.setVaultStatus(a);
                    });
                }),
                (n.clearVaultStatusForCurrentUser = function () {
                  return p()
                    .all([n.getEnduserHome(), n.getVaultStatus()])
                    .spread(function (e, t) {
                      return t && delete t["".concat(e.orgId, "-").concat(e.userId)], n.setVaultStatus(t);
                    });
                }),
                (n.getPasswordlessMigrationStatus = function () {
                  return p()
                    .all([n.getPoktaCoreServiceVaultInputFormat(), n.getHasPoktaMonolithVault()])
                    .spread(function (e, t) {
                      return e === x.dk
                        ? T.READY
                        : e === x.pn
                        ? T.NEEDS_MIGRATION_TO_PASSWORDLESS
                        : e === x.NOT_FOUND && !0 === t
                        ? T.NEEDS_MIGRATION_TO_CORE_SERVICE
                        : e === x.NOT_FOUND && !1 === t
                        ? T.IS_NEW_USER
                        : T.UNKNOWN;
                    });
                }),
                n),
              c = (function (e, t, a) {
                var o = W(
                  {
                    getOktaDomain: t.getOktaDomain,
                    getVersion: t.getVersion,
                    getOrgSettings: t.getOrgSettings,
                    getEnduserHome: t.getEnduserHome,
                    getAuthToken: t.getAuthToken,
                    getSessionCookie: t.getSessionCookie
                  },
                  { sendMessage: e.sendMessage }
                );
                return Okta.EventTracker(
                  {
                    getPluginSettings: t.getPluginSettings,
                    getEnduserHome: t.getEnduserHome,
                    getVersion: t.getVersion,
                    getPopoverOpenedBy: t.getPopoverOpenedBy,
                    getDBGPluginSettings: t.getDBGPluginSettings
                  },
                  { getBackgroundVersion: a.getBackgroundVersion, getBrowserType: a.getPluginType },
                  o
                );
              })(i, u, l),
              g = d().emptyOrTimeout,
              h = v().pollP,
              m = A.partial,
              w = W(
                {
                  getOktaDomainInternal: u.getOktaDomainInternal,
                  getVersion: u.getVersion,
                  getOrgSettings: u.getOrgSettings,
                  getEnduserHome: u.getEnduserHome,
                  getAuthToken: u.getAuthToken,
                  getSessionCookie: u.getSessionCookie
                },
                { sendMessage: i.sendMessage }
              ),
              f = new na({ el: y()("#content"), eventTracker: c, api: w, state: new ne(), settings: new re() }),
              P = Zt.MAIN;
            return (
              e.on("message", i.handleMessage),
              (function (e) {
                e.listenTo(e.state, "openUrl", function (e) {
                  window.open(e, "_self");
                }),
                  e.listenTo(e.state, "launchApp", function (e) {
                    e.indexOf("?") > -1 ? (e += "&") : (e += "?"), (e += "fromPlugin=true"), window.open(e, "_self");
                  }),
                  e.listenTo(e.state, "theme:change", function (t) {
                    var a = e.settings.get("nte").theme;
                    if (a !== t)
                      return u.setNewTab({ enableNTE: !0, seenBanner: !0, theme: t }).then(function () {
                        y()("#content").removeClass(a), y()("#content").addClass(t);
                      });
                  }),
                  e.listenTo(e.state, "nte:off", function () {
                    return u.getDBGPluginSettings().then(function (e) {
                      return (
                        ((e = e || {}).NTEFlag = !1),
                        u.setDBGPluginSettings(e).then(function () {
                          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
                            var t = e[0];
                            chrome.tabs.update(t.id, { url: "chrome://newtab" });
                          });
                        })
                      );
                    });
                  });
              })(f),
              u
                .getOktaDomain()
                .then(function (e) {
                  return e
                    ? (f.settings.set({ oktaHome: e }), h(u.getWaitingForTabs, m(g, 3e4), 500).then(u.clearWaitingForTabs))
                    : p().reject({ view: Zt.SIGN_IN });
                })
                .then(function () {
                  return (function (e, t, a) {
                    var o = A.isEmpty,
                      n = ra(a),
                      r = n.getSetting,
                      s = n.getSettings,
                      i = sa.pickOrgSettings;
                    return p()
                      .all([
                        r(e.getEnduserHomePendingConsent(), "endUserLoginPendingConsent"),
                        r(e.getAllowListedOktaAccounts(), "oktaAccounts", function (e) {
                          var t = a.get("endUserLoginPendingConsent");
                          return e && !o(t) && e.unshift(t), e;
                        }),
                        s(e.getOrgSettings(), i),
                        s(e.getEnduserHome(), function (e) {
                          return {
                            orgLogo: e && e.orgLogo,
                            personalAppsEnabled: e.personalAppsEnabled || !1,
                            userHideRecentlyUsedApps: e.userHideRecentlyUsedApps || !1
                          };
                        }),
                        r(e.getAuthStatus(), "authStatus"),
                        r(e.getOktaDomainInternal(), "internalOktaDomain"),
                        r(e.getVersion(), "version"),
                        r(e.getNewTab(), "nte"),
                        r(t.getPluginType(), "pluginType")
                      ])
                      .then(function () {
                        a.get("nte") ||
                          (e.setNewTab({ theme: Qt.LIGHT, enableNTE: !0, seenBanner: !0 }), a.set({ nte: { theme: Qt.LIGHT } }));
                        var t = window && window.navigator ? window.navigator.platform : null,
                          o = t && t.indexOf("Mac") > -1;
                        a.set({ isMac: o }), b.setCurrentLocale(a.get("pluginLocale"));
                      });
                  })(u, l, f.settings);
                })
                .then(function () {
                  return ia(u, f.settings);
                })
                .then(function (e) {
                  var t = e && e.tabApps,
                    a = e && e.hasQuickAccessApp,
                    o = e && e.activeTabId;
                  if (!t) return p().reject({ view: Zt.SIGN_IN });
                  var n = f.settings.get("nte") || { theme: "light" };
                  return (
                    f.$el.empty(),
                    f.$el.attr("class", n.theme),
                    f.state.set({ filter: o || "", search: "", selectedIndex: -1, hasQuickAccessApp: a, clickTab: !1 }),
                    f.showMain(t),
                    { api: w, main: f, mainView: P }
                  );
                })
                .catch(function (e) {
                  switch (((P = e && e.view), f.$el.empty(), f.$el.attr("class", f.settings.get("theme")), P)) {
                    case Zt.ACCESS_DENIED:
                      f.showAccessDenied();
                      break;
                    case Zt.SIGN_IN:
                      f.showSignIn();
                      break;
                    default:
                      f.showError();
                  }
                  return { api: w, main: f, mainView: P };
                })
            );
          }
        },
        la = JSON.parse(
        );
      window.Okta || (window.Okta = t()), (window.Okta.ModuleExport = pa), (window.Okta.contentStrings = la);
    })();
})();