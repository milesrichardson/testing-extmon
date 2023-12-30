/*! For license information please see GmailInjectedScript.js.LICENSE.txt */
!(function () {
  var e = {
      93289: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            l = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            c = i.push,
            u = i.indexOf,
            d = {},
            f = d.toString,
            p = d.hasOwnProperty,
            h = p.toString,
            m = h.call(Object),
            g = {},
            v = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            },
            _ = function (e) {
              return null != e && e === e.window;
            },
            y = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              o,
              i = (n = n || y).createElement("script");
            if (((i.text = e), t)) for (r in b) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e;
          }
          var k = "3.7.0",
            T = /HTML$/i,
            j = function (e, t) {
              return new j.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = w(e);
            return !v(e) && !_(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (j.fn = j.prototype =
            {
              jquery: k,
              constructor: j,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                var t = j.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return j.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  j.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  j.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  j.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: i.sort,
              splice: i.splice
            }),
            (j.extend = j.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || v(a) || (a = {}),
                    s === l && ((a = this), s--);
                  s < l;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (c && r && (j.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i = o && !Array.isArray(n) ? [] : o || j.isPlainObject(n) ? n : {}),
                              (o = !1),
                              (a[t] = j.extend(c, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            j.extend({
              expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== f.call(e) ||
                  ((t = a(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || h.call(n) !== m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) return e.textContent;
                  if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += j.text(t);
                return n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? j.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !T.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (C(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return l(a);
              },
              guid: 1,
              support: g
            }),
            "function" == typeof Symbol && (j.fn[Symbol.iterator] = i[Symbol.iterator]),
            j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            });
          var E = i.pop,
            S = i.sort,
            D = i.splice,
            N = "[\\x20\\t\\r\\n\\f]",
            q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g");
          j.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            );
          };
          var I = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function O(e, t) {
            return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
          }
          j.escapeSelector = function (e) {
            return (e + "").replace(I, O);
          };
          var L = y,
            M = c;
          !(function () {
            var e,
              t,
              n,
              o,
              a,
              l,
              c,
              d,
              f,
              h,
              m = M,
              v = j.expando,
              _ = 0,
              y = 0,
              b = ee(),
              x = ee(),
              w = ee(),
              k = ee(),
              T = function (e, t) {
                return e === t && (a = !0), 0;
              },
              C =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              O =
                "\\[" +
                N +
                "*(" +
                I +
                ")(?:" +
                N +
                "*([*^$|!~]?=)" +
                N +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                N +
                "*\\]",
              P = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
              H = new RegExp(N + "+", "g"),
              R = new RegExp("^" + N + "*," + N + "*"),
              $ = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
              W = new RegExp(N + "|>"),
              F = new RegExp(P),
              B = new RegExp("^" + I + "$"),
              J = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    N +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    N +
                    "*(?:([+-]|)" +
                    N +
                    "*(\\d+)|))" +
                    N +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + C + ")$", "i"),
                needsContext: new RegExp(
                  "^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)",
                  "i"
                )
              },
              z = /^(?:input|select|textarea|button)$/i,
              U = /^h\d$/i,
              G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              X = /[+~]/,
              V = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
              K = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
              },
              Y = function () {
                le();
              },
              Q = fe(
                function (e) {
                  return !0 === e.disabled && A(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              m.apply((i = s.call(L.childNodes)), L.childNodes), i[L.childNodes.length].nodeType;
            } catch (e) {
              m = {
                apply: function (e, t) {
                  M.apply(e, s.call(t));
                },
                call: function (e) {
                  M.apply(e, s.call(arguments, 1));
                }
              };
            }
            function Z(e, t, n, r) {
              var o,
                i,
                a,
                s,
                c,
                u,
                p,
                h = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
              if (((n = n || []), "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))) return n;
              if (!r && (le(t), (t = t || l), d)) {
                if (11 !== _ && (c = G.exec(e)))
                  if ((o = c[1])) {
                    if (9 === _) {
                      if (!(a = t.getElementById(o))) return n;
                      if (a.id === o) return m.call(n, a), n;
                    } else if (h && (a = h.getElementById(o)) && Z.contains(t, a) && a.id === o) return m.call(n, a), n;
                  } else {
                    if (c[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = c[3]) && t.getElementsByClassName) return m.apply(n, t.getElementsByClassName(o)), n;
                  }
                if (!(k[e + " "] || (f && f.test(e)))) {
                  if (((p = e), (h = t), 1 === _ && (W.test(e) || $.test(e)))) {
                    for (
                      ((h = (X.test(e) && se(t.parentNode)) || t) == t && g.scope) ||
                        ((s = t.getAttribute("id")) ? (s = j.escapeSelector(s)) : t.setAttribute("id", (s = v))),
                        i = (u = ue(e)).length;
                      i--;

                    )
                      u[i] = (s ? "#" + s : ":scope") + " " + de(u[i]);
                    p = u.join(",");
                  }
                  try {
                    return m.apply(n, h.querySelectorAll(p)), n;
                  } catch (t) {
                    k(e, !0);
                  } finally {
                    s === v && t.removeAttribute("id");
                  }
                }
              }
              return _e(e.replace(q, "$1"), t, n, r);
            }
            function ee() {
              var e = [];
              return function n(r, o) {
                return e.push(r + " ") > t.cacheLength && delete n[e.shift()], (n[r + " "] = o);
              };
            }
            function te(e) {
              return (e[v] = !0), e;
            }
            function ne(e) {
              var t = l.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function re(e) {
              return function (t) {
                return A(t, "input") && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return (A(t, "input") || A(t, "button")) && t.type === e;
              };
            }
            function ie(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e || (t.isDisabled !== !e && Q(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ae(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function se(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function le(e) {
              var n,
                r = e ? e.ownerDocument || e : L;
              return r != l && 9 === r.nodeType && r.documentElement
                ? ((c = (l = r).documentElement),
                  (d = !j.isXMLDoc(l)),
                  (h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
                  L != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", Y),
                  (g.getById = ne(function (e) {
                    return (c.appendChild(e).id = j.expando), !l.getElementsByName || !l.getElementsByName(j.expando).length;
                  })),
                  (g.disconnectedMatch = ne(function (e) {
                    return h.call(e, "*");
                  })),
                  (g.scope = ne(function () {
                    return l.querySelectorAll(":scope");
                  })),
                  (g.cssHas = ne(function () {
                    try {
                      return l.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  g.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(V, K);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(V, K);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; (i = o[r++]); )
                              if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && d) return t.getElementsByClassName(e);
                  }),
                  (f = []),
                  ne(function (e) {
                    var t;
                    (c.appendChild(e).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length || f.push("\\[" + N + "*(?:value|" + C + ")"),
                      e.querySelectorAll("[id~=" + v + "-]").length || f.push("~="),
                      e.querySelectorAll("a#" + v + "+*").length || f.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length || f.push(":checked"),
                      (t = l.createElement("input")).setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      (c.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
                      (t = l.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length || f.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")");
                  }),
                  g.cssHas || f.push(":has"),
                  (f = f.length && new RegExp(f.join("|"))),
                  (T = function (e, t) {
                    if (e === t) return (a = !0), 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                      (!g.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === l || (e.ownerDocument == L && Z.contains(L, e))
                          ? -1
                          : t === l || (t.ownerDocument == L && Z.contains(L, t))
                          ? 1
                          : o
                          ? u.call(o, e) - u.call(o, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  l)
                : l;
            }
            for (e in ((Z.matches = function (e, t) {
              return Z(e, null, null, t);
            }),
            (Z.matchesSelector = function (e, t) {
              if ((le(e), d && !k[t + " "] && (!f || !f.test(t))))
                try {
                  var n = h.call(e, t);
                  if (n || g.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                  k(t, !0);
                }
              return Z(t, l, null, [e]).length > 0;
            }),
            (Z.contains = function (e, t) {
              return (e.ownerDocument || e) != l && le(e), j.contains(e, t);
            }),
            (Z.attr = function (e, n) {
              (e.ownerDocument || e) != l && le(e);
              var r = t.attrHandle[n.toLowerCase()],
                o = r && p.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !d) : void 0;
              return void 0 !== o ? o : e.getAttribute(n);
            }),
            (Z.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (j.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                i = 0;
              if (((a = !g.sortStable), (o = !g.sortStable && s.call(e, 0)), S.call(e, T), a)) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) D.call(e, n[r], 1);
              }
              return (o = null), e;
            }),
            (j.fn.uniqueSort = function () {
              return this.pushStack(j.uniqueSort(s.apply(this)));
            }),
            (t = j.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: J,
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
                      (e[1] = e[1].replace(V, K)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(V, K)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Z.error(e[0]),
                          (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Z.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return J.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            F.test(n) &&
                            (t = ue(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  }
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(V, K).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return A(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = b[e + " "];
                    return (
                      t ||
                      ((t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) &&
                        b(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = Z.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1
                              : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            f,
                            p,
                            h = i !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                          if (m) {
                            if (i) {
                              for (; h; ) {
                                for (d = t; (d = d[h]); ) if (s ? A(d, g) : 1 === d.nodeType) return !1;
                                p = h = "only" === e && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                              for (
                                b = (f = (c = (u = m[v] || (m[v] = {}))[e] || [])[0] === _ && c[1]) && c[2], d = f && m.childNodes[f];
                                (d = (++f && d && d[h]) || (b = f = 0) || p.pop());

                              )
                                if (1 === d.nodeType && ++b && d === t) {
                                  u[e] = [_, f, b];
                                  break;
                                }
                            } else if ((y && (b = f = (c = (u = t[v] || (t[v] = {}))[e] || [])[0] === _ && c[1]), !1 === b))
                              for (
                                ;
                                (d = (++f && d && d[h]) || (b = f = 0) || p.pop()) &&
                                (!(s ? A(d, g) : 1 === d.nodeType) || !++b || (y && ((u = d[v] || (d[v] = {}))[e] = [_, b]), d !== t));

                              );
                            return (b -= o) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var r,
                      o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                    return o[v]
                      ? o(n)
                      : o.length > 1
                      ? ((r = [e, e, "", n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var r, i = o(e, n), a = i.length; a--; ) e[(r = u.call(e, i[a]))] = !(t[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, r);
                            })
                      : o;
                  }
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      r = ve(e.replace(q, "$1"));
                    return r[v]
                      ? te(function (e, t, n, o) {
                          for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop();
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Z(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(V, K)),
                      function (t) {
                        return (t.textContent || j.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      B.test(e || "") || Z.error("unsupported lang: " + e),
                      (e = e.replace(V, K).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if ((n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = r.location && r.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === c;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return l.activeElement;
                          } catch (e) {}
                        })() &&
                      l.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ie(!1),
                  disabled: ie(!0),
                  checked: function (e) {
                    return (A(e, "input") && !!e.checked) || (A(e, "option") && !!e.selected);
                  },
                  selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return U.test(e.nodeName);
                  },
                  input: function (e) {
                    return z.test(e.nodeName);
                  },
                  button: function (e) {
                    return (A(e, "input") && "button" === e.type) || A(e, "button");
                  },
                  text: function (e) {
                    var t;
                    return A(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                  },
                  first: ae(function () {
                    return [0];
                  }),
                  last: ae(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ae(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ae(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ae(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ae(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: ae(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  })
                }
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = re(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
            function ce() {}
            function ue(e, n) {
              var r,
                o,
                i,
                a,
                s,
                l,
                c,
                u = x[e + " "];
              if (u) return n ? 0 : u.slice(0);
              for (s = e, l = [], c = t.preFilter; s; ) {
                for (a in ((r && !(o = R.exec(s))) || (o && (s = s.slice(o[0].length) || s), l.push((i = []))),
                (r = !1),
                (o = $.exec(s)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(q, " ") }), (s = s.slice(r.length))),
                t.filter))
                  !(o = J[a].exec(s)) ||
                    (c[a] && !(o = c[a](o))) ||
                    ((r = o.shift()), i.push({ value: r, type: a, matches: o }), (s = s.slice(r.length)));
                if (!r) break;
              }
              return n ? s.length : s ? Z.error(e) : x(e, l).slice(0);
            }
            function de(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function fe(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = y++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d = [_, s];
                    if (l) {
                      for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (((u = t[v] || (t[v] = {})), o && A(t, o))) t = t[r] || t;
                          else {
                            if ((c = u[i]) && c[0] === _ && c[1] === s) return (d[2] = c[2]);
                            if (((u[i] = d), (d[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function pe(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function he(e, t, n, r, o) {
              for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
              return a;
            }
            function me(e, t, n, r, o, i) {
              return (
                r && !r[v] && (r = me(r)),
                o && !o[v] && (o = me(o, i)),
                te(function (i, a, s, l) {
                  var c,
                    d,
                    f,
                    p,
                    h = [],
                    g = [],
                    v = a.length,
                    _ =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || (!i && t) ? _ : he(_, h, e, s, l);
                  if ((n ? n(y, (p = o || (i ? e : v || r) ? [] : a), s, l) : (p = y), r))
                    for (c = he(p, g), r(c, [], s, l), d = c.length; d--; ) (f = c[d]) && (p[g[d]] = !(y[g[d]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (c = [], d = p.length; d--; ) (f = p[d]) && c.push((y[d] = f));
                        o(null, (p = []), c, l);
                      }
                      for (d = p.length; d--; ) (f = p[d]) && (c = o ? u.call(i, f) : h[d]) > -1 && (i[c] = !(a[c] = f));
                    }
                  } else (p = he(p === a ? p.splice(v, p.length) : p)), o ? o(null, a, p, l) : m.apply(a, p);
                })
              );
            }
            function ge(e) {
              for (
                var r,
                  o,
                  i,
                  a = e.length,
                  s = t.relative[e[0].type],
                  l = s || t.relative[" "],
                  c = s ? 1 : 0,
                  d = fe(
                    function (e) {
                      return e === r;
                    },
                    l,
                    !0
                  ),
                  f = fe(
                    function (e) {
                      return u.call(r, e) > -1;
                    },
                    l,
                    !0
                  ),
                  p = [
                    function (e, t, o) {
                      var i = (!s && (o || t != n)) || ((r = t).nodeType ? d(e, t, o) : f(e, t, o));
                      return (r = null), i;
                    }
                  ];
                c < a;
                c++
              )
                if ((o = t.relative[e[c].type])) p = [fe(pe(p), o)];
                else {
                  if ((o = t.filter[e[c].type].apply(null, e[c].matches))[v]) {
                    for (i = ++c; i < a && !t.relative[e[i].type]; i++);
                    return me(
                      c > 1 && pe(p),
                      c > 1 && de(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace(q, "$1"),
                      o,
                      c < i && ge(e.slice(c, i)),
                      i < a && ge((e = e.slice(i))),
                      i < a && de(e)
                    );
                  }
                  p.push(o);
                }
              return pe(p);
            }
            function ve(e, r) {
              var o,
                i = [],
                a = [],
                s = w[e + " "];
              if (!s) {
                for (r || (r = ue(e)), o = r.length; o--; ) (s = ge(r[o]))[v] ? i.push(s) : a.push(s);
                (s = w(
                  e,
                  (function (e, r) {
                    var o = r.length > 0,
                      i = e.length > 0,
                      a = function (a, s, c, u, f) {
                        var p,
                          h,
                          g,
                          v = 0,
                          y = "0",
                          b = a && [],
                          x = [],
                          w = n,
                          k = a || (i && t.find.TAG("*", f)),
                          T = (_ += null == w ? 1 : Math.random() || 0.1),
                          C = k.length;
                        for (f && (n = s == l || s || f); y !== C && null != (p = k[y]); y++) {
                          if (i && p) {
                            for (h = 0, s || p.ownerDocument == l || (le(p), (c = !d)); (g = e[h++]); )
                              if (g(p, s || l, c)) {
                                m.call(u, p);
                                break;
                              }
                            f && (_ = T);
                          }
                          o && ((p = !g && p) && v--, a && b.push(p));
                        }
                        if (((v += y), o && y !== v)) {
                          for (h = 0; (g = r[h++]); ) g(b, x, s, c);
                          if (a) {
                            if (v > 0) for (; y--; ) b[y] || x[y] || (x[y] = E.call(u));
                            x = he(x);
                          }
                          m.apply(u, x), f && !a && x.length > 0 && v + r.length > 1 && j.uniqueSort(u);
                        }
                        return f && ((_ = T), (n = w)), b;
                      };
                    return o ? te(a) : a;
                  })(a, i)
                )),
                  (s.selector = e);
              }
              return s;
            }
            function _e(e, n, r, o) {
              var i,
                a,
                s,
                l,
                c,
                u = "function" == typeof e && e,
                f = !o && ue((e = u.selector || e));
              if (((r = r || []), 1 === f.length)) {
                if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && d && t.relative[a[1].type]) {
                  if (!(n = (t.find.ID(s.matches[0].replace(V, K), n) || [])[0])) return r;
                  u && (n = n.parentNode), (e = e.slice(a.shift().value.length));
                }
                for (i = J.needsContext.test(e) ? 0 : a.length; i-- && ((s = a[i]), !t.relative[(l = s.type)]); )
                  if ((c = t.find[l]) && (o = c(s.matches[0].replace(V, K), (X.test(a[0].type) && se(n.parentNode)) || n))) {
                    if ((a.splice(i, 1), !(e = o.length && de(a)))) return m.apply(r, o), r;
                    break;
                  }
              }
              return (u || ve(e, f))(o, n, !d, r, !n || (X.test(e) && se(n.parentNode)) || n), r;
            }
            (ce.prototype = t.filters = t.pseudos),
              (t.setFilters = new ce()),
              (g.sortStable = v.split("").sort(T).join("") === v),
              le(),
              (g.sortDetached = ne(function (e) {
                return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
              })),
              (j.find = Z),
              (j.expr[":"] = j.expr.pseudos),
              (j.unique = j.uniqueSort),
              (Z.compile = ve),
              (Z.select = _e),
              (Z.setDocument = le),
              (Z.escape = j.escapeSelector),
              (Z.getText = j.text),
              (Z.isXML = j.isXMLDoc),
              (Z.selectors = j.expr),
              (Z.support = j.support),
              (Z.uniqueSort = j.uniqueSort);
          })();
          var P = function (e, t, n) {
              for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (o && j(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            H = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            R = j.expr.match.needsContext,
            $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function W(e, t, n) {
            return v(t)
              ? j.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? j.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? j.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : j.filter(t, e, n);
          }
          (j.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? j.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : j.find.matches(
                    e,
                    j.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            j.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    j(e).filter(function () {
                      for (t = 0; t < r; t++) if (j.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++) j.find(e, o[t], n);
                return r > 1 ? j.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(W(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(W(this, e || [], !0));
              },
              is: function (e) {
                return !!W(this, "string" == typeof e && R.test(e) ? j(e) : e || [], !1).length;
              }
            });
          var F,
            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((j.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || F), "string" == typeof e)) {
              if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || (!r[1] && t))
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof j ? t[0] : t),
                  j.merge(this, j.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)),
                  $.test(r[1]) && j.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (o = y.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(j)
              : j.makeArray(e, this);
          }).prototype = j.fn),
            (F = j(y));
          var J = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function U(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          j.fn.extend({
            has: function (e) {
              var t = j(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (j.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && j(e);
              if (!R.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && j.find.matchesSelector(n, e))) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? j.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(j(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(j.uniqueSort(j.merge(this.get(), j(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
          }),
            j.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return P(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return P(e, "parentNode", n);
                },
                next: function (e) {
                  return U(e, "nextSibling");
                },
                prev: function (e) {
                  return U(e, "previousSibling");
                },
                nextAll: function (e) {
                  return P(e, "nextSibling");
                },
                prevAll: function (e) {
                  return P(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return P(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return P(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return H((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return H(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (A(e, "template") && (e = e.content || e), j.merge([], e.childNodes));
                }
              },
              function (e, t) {
                j.fn[e] = function (n, r) {
                  var o = j.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = j.filter(r, o)),
                    this.length > 1 && (z[e] || j.uniqueSort(o), J.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var G = /[^\x20\t\r\n\f]+/g;
          function X(e) {
            return e;
          }
          function V(e) {
            throw e;
          }
          function K(e, t, n, r) {
            var o;
            try {
              e && v((o = e.promise)) ? o.call(e).done(t).fail(n) : e && v((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (j.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      j.each(e.match(G) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : j.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              l = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        j.each(n, function (n, r) {
                          v(r) ? (e.unique && c.has(r)) || i.push(r) : r && r.length && "string" !== w(r) && t(r);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    j.each(arguments, function (e, t) {
                      for (var n; (n = j.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? j.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this;
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                }
              };
            return c;
          }),
            j.extend({
              Deferred: function (e) {
                var t = [
                    ["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2],
                    ["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected"]
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return j
                        .Deferred(function (n) {
                          j.each(t, function (t, r) {
                            var o = v(e[r[4]]) && e[r[4]];
                            i[r[1]](function () {
                              var e = o && o.apply(this, arguments);
                              e && v(e.promise)
                                ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                                : n[r[0] + "With"](this, o ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            l = arguments,
                            c = function () {
                              var r, c;
                              if (!(e < i)) {
                                if ((r = n.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                (c = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                  v(c)
                                    ? o
                                      ? c.call(r, a(i, t, X, o), a(i, t, V, o))
                                      : (i++, c.call(r, a(i, t, X, o), a(i, t, V, o), a(i, t, X, t.notifyWith)))
                                    : (n !== X && ((s = void 0), (l = [r])), (o || t.resolveWith)(s, l));
                              }
                            },
                            u = o
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    j.Deferred.exceptionHook && j.Deferred.exceptionHook(r, u.error),
                                      e + 1 >= i && (n !== V && ((s = void 0), (l = [r])), t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? u()
                            : (j.Deferred.getErrorHook
                                ? (u.error = j.Deferred.getErrorHook())
                                : j.Deferred.getStackHook && (u.error = j.Deferred.getStackHook()),
                              r.setTimeout(u));
                        };
                      }
                      return j
                        .Deferred(function (r) {
                          t[0][3].add(a(0, r, v(o) ? o : X, r.notifyWith)),
                            t[1][3].add(a(0, r, v(e) ? e : X)),
                            t[2][3].add(a(0, r, v(n) ? n : V));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? j.extend(e, o) : o;
                    }
                  },
                  i = {};
                return (
                  j.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return i[r[0] + "With"](this === i ? void 0 : this, arguments), this;
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = j.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this), (o[e] = arguments.length > 1 ? s.call(arguments) : n), --t || i.resolveWith(r, o);
                    };
                  };
                if (t <= 1 && (K(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || v(o[n] && o[n].then))) return i.then();
                for (; n--; ) K(o[n], a(n), i.reject);
                return i.promise();
              }
            });
          var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (j.Deferred.exceptionHook = function (e, t) {
            r.console && r.console.warn && e && Y.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }),
            (j.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var Q = j.Deferred();
          function Z() {
            y.removeEventListener("DOMContentLoaded", Z), r.removeEventListener("load", Z), j.ready();
          }
          (j.fn.ready = function (e) {
            return (
              Q.then(e).catch(function (e) {
                j.readyException(e);
              }),
              this
            );
          }),
            j.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --j.readyWait : j.isReady) || ((j.isReady = !0), (!0 !== e && --j.readyWait > 0) || Q.resolveWith(y, [j]));
              }
            }),
            (j.ready.then = Q.then),
            "complete" === y.readyState || ("loading" !== y.readyState && !y.documentElement.doScroll)
              ? r.setTimeout(j.ready)
              : (y.addEventListener("DOMContentLoaded", Z), r.addEventListener("load", Z));
          var ee = function (e, t, n, r, o, i, a) {
              var s = 0,
                l = e.length,
                c = null == n;
              if ("object" === w(n)) for (s in ((o = !0), n)) ee(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                v(r) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(j(e), n);
                      }))),
                t)
              )
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function re(e, t) {
            return t.toUpperCase();
          }
          function oe(e) {
            return e.replace(te, "ms-").replace(ne, re);
          }
          var ie = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ae() {
            this.expando = j.expando + ae.uid++;
          }
          (ae.uid = 1),
            (ae.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    ie(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[oe(t)] = n;
                else for (r in t) o[oe(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [t] : t.match(G) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || j.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !j.isEmptyObject(t);
              }
            });
          var se = new ae(),
            le = new ae(),
            ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ue = /[A-Z]/g;
          function de(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (((r = "data-" + t.replace(ue, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                  n = (function (e) {
                    return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e));
                  })(n);
                } catch (e) {}
                le.set(e, t, n);
              } else n = void 0;
            return n;
          }
          j.extend({
            hasData: function (e) {
              return le.hasData(e) || se.hasData(e);
            },
            data: function (e, t, n) {
              return le.access(e, t, n);
            },
            removeData: function (e, t) {
              le.remove(e, t);
            },
            _data: function (e, t, n) {
              return se.access(e, t, n);
            },
            _removeData: function (e, t) {
              se.remove(e, t);
            }
          }),
            j.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (this.length && ((o = le.get(i)), 1 === i.nodeType && !se.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = oe(r.slice(5))), de(i, r, o[r]));
                    se.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      le.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = le.get(i, e)) || void 0 !== (n = de(i, e)) ? n : void 0;
                        this.each(function () {
                          le.set(this, e, t);
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
                  le.remove(this, e);
                });
              }
            }),
            j.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = se.get(e, t)),
                    n && (!r || Array.isArray(n) ? (r = se.access(e, t, j.makeArray(n))) : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = j.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = j._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        j.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  se.get(e, n) ||
                  se.access(e, n, {
                    empty: j.Callbacks("once memory").add(function () {
                      se.remove(e, [t + "queue", n]);
                    })
                  })
                );
              }
            }),
            j.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? j.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = j.queue(this, e, t);
                        j._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && j.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  j.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = j.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
                  (n = se.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t);
              }
            });
          var fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            me = y.documentElement,
            ge = function (e) {
              return j.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          me.getRootNode &&
            (ge = function (e) {
              return j.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument;
            });
          var _e = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && ge(e) && "none" === j.css(e, "display"));
          };
          function ye(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return j.css(e, t, "");
                  },
              l = s(),
              c = (n && n[3]) || (j.cssNumber[t] ? "" : "px"),
              u = e.nodeType && (j.cssNumber[t] || ("px" !== c && +l)) && pe.exec(j.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; a--; )
                j.style(e, t, u + c), (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0), (u /= i);
              (u *= 2), j.style(e, t, u + c), (n = n || []);
            }
            return (
              n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = u), (r.end = o))), o
            );
          }
          var be = {};
          function xe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = be[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = j.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (be[r] = o),
              o)
            );
          }
          function we(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n && ((o[i] = se.get(r, "display") || null), o[i] || (r.style.display = "")),
                    "" === r.style.display && _e(r) && (o[i] = xe(r)))
                  : "none" !== n && ((o[i] = "none"), se.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          j.fn.extend({
            show: function () {
              return we(this, !0);
            },
            hide: function () {
              return we(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    _e(this) ? j(this).show() : j(this).hide();
                  });
            }
          });
          var ke,
            Te,
            je = /^(?:checkbox|radio)$/i,
            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ae = /^$|^module$|\/(?:java|ecma)script/i;
          (ke = y.createDocumentFragment().appendChild(y.createElement("div"))),
            (Te = y.createElement("input")).setAttribute("type", "radio"),
            Te.setAttribute("checked", "checked"),
            Te.setAttribute("name", "t"),
            ke.appendChild(Te),
            (g.checkClone = ke.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ke.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!ke.cloneNode(!0).lastChild.defaultValue),
            (ke.innerHTML = "<option></option>"),
            (g.option = !!ke.lastChild);
          var Ee = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          function Se(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && A(e, t)) ? j.merge([e], n) : n
            );
          }
          function De(e, t) {
            for (var n = 0, r = e.length; n < r; n++) se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
          }
          (Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead),
            (Ee.th = Ee.td),
            g.option || (Ee.optgroup = Ee.option = [1, "<select multiple='multiple'>", "</select>"]);
          var Ne = /<|&#?\w+;/;
          function qe(e, t, n, r, o) {
            for (var i, a, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
              if ((i = e[p]) || 0 === i)
                if ("object" === w(i)) j.merge(f, i.nodeType ? [i] : i);
                else if (Ne.test(i)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (Ce.exec(i) || ["", ""])[1].toLowerCase(),
                      l = Ee[s] || Ee._default,
                      a.innerHTML = l[1] + j.htmlPrefilter(i) + l[2],
                      u = l[0];
                    u--;

                  )
                    a = a.lastChild;
                  j.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(i));
            for (d.textContent = "", p = 0; (i = f[p++]); )
              if (r && j.inArray(i, r) > -1) o && o.push(i);
              else if (((c = ge(i)), (a = Se(d.appendChild(i), "script")), c && De(a), n))
                for (u = 0; (i = a[u++]); ) Ae.test(i.type || "") && n.push(i);
            return d;
          }
          var Ie = /^([^.]*)(?:\.(.+)|)/;
          function Oe() {
            return !0;
          }
          function Le() {
            return !1;
          }
          function Me(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Me(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Le;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return j().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = j.guid++))),
              e.each(function () {
                j.event.add(this, t, o, r, n);
              })
            );
          }
          function Pe(e, t, n) {
            n
              ? (se.set(e, t, !1),
                j.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      r = se.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r) (j.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (
                        ((r = s.call(arguments)), se.set(this, t, r), this[t](), (n = se.get(this, t)), se.set(this, t, !1), r !== n)
                      )
                        return e.stopImmediatePropagation(), e.preventDefault(), n;
                    } else
                      r &&
                        (se.set(this, t, j.event.trigger(r[0], r.slice(1), this)),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = Oe));
                  }
                }))
              : void 0 === se.get(e, t) && j.event.add(e, t, Oe);
          }
          (j.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                p,
                h,
                m,
                g = se.get(e);
              if (ie(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && j.find.matchesSelector(me, o),
                    n.guid || (n.guid = j.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== j && j.event.triggered !== t.type ? j.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    c = (t = (t || "").match(G) || [""]).length;
                  c--;

                )
                  (p = m = (s = Ie.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((d = j.event.special[p] || {}),
                      (p = (o ? d.delegateType : d.bindType) || p),
                      (d = j.event.special[p] || {}),
                      (u = j.extend(
                        {
                          type: p,
                          origType: m,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && j.expr.match.needsContext.test(o),
                          namespace: h.join(".")
                        },
                        i
                      )),
                      (f = l[p]) ||
                        (((f = l[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
                      d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                      o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                      (j.event.global[p] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                p,
                h,
                m,
                g = se.hasData(e) && se.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(G) || [""]).length; c--; )
                  if (((p = m = (s = Ie.exec(t[c]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                    for (
                      d = j.event.special[p] || {},
                        f = l[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = f.length;
                      i--;

                    )
                      (u = f[i]),
                        (!o && m !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (s && !s.test(u.namespace)) ||
                          (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                          (f.splice(i, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) || j.removeEvent(e, p, g.handle), delete l[p]);
                  } else for (p in l) j.event.remove(e, p + t[c], n, r, !0);
                j.isEmptyObject(l) && se.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                l = j.event.fix(e),
                c = (se.get(this, "events") || Object.create(null))[l.type] || [],
                u = j.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
              if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                for (a = j.event.handlers.call(this, l, c), t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                  for (l.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                    (l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace)) ||
                      ((l.handleObj = i),
                      (l.data = i.data),
                      void 0 !== (r = ((j.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) &&
                        !1 === (l.result = r) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (i = [], a = {}, n = 0; n < l; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext ? j(o, this).index(c) > -1 : j.find(o, this, null, [c]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: c, handlers: i });
                  }
              return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
            },
            addProp: function (e, t) {
              Object.defineProperty(j.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
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
              return e[j.expando] ? e : new j.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return je.test(t.type) && t.click && A(t, "input") && Pe(t, "click", !0), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return je.test(t.type) && t.click && A(t, "input") && Pe(t, "click"), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return (je.test(t.type) && t.click && A(t, "input") && se.get(t, "click")) || A(t, "a");
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }),
            (j.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (j.Event = function (e, t) {
              if (!(this instanceof j.Event)) return new j.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Oe : Le),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && j.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[j.expando] = !0);
            }),
            (j.Event.prototype = {
              constructor: j.Event,
              isDefaultPrevented: Le,
              isPropagationStopped: Le,
              isImmediatePropagationStopped: Le,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Oe), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Oe), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Oe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
              }
            }),
            j.each(
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
              j.event.addProp
            ),
            j.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (y.documentMode) {
                  var n = se.get(this, "handle"),
                    r = j.event.fix(e);
                  (r.type = "focusin" === e.type ? "focus" : "blur"), (r.isSimulated = !0), n(e), r.target === r.currentTarget && n(r);
                } else j.event.simulate(t, e.target, j.event.fix(e));
              }
              (j.event.special[e] = {
                setup: function () {
                  var r;
                  if ((Pe(this, e, !0), !y.documentMode)) return !1;
                  (r = se.get(this, t)) || this.addEventListener(t, n), se.set(this, t, (r || 0) + 1);
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!y.documentMode) return !1;
                  (e = se.get(this, t) - 1) ? se.set(this, t, e) : (this.removeEventListener(t, n), se.remove(this, t));
                },
                _default: function (t) {
                  return se.get(t.target, e);
                },
                delegateType: t
              }),
                (j.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = y.documentMode ? this : r,
                      i = se.get(o, t);
                    i || (y.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), se.set(o, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = y.documentMode ? this : r,
                      i = se.get(o, t) - 1;
                    i
                      ? se.set(o, t, i)
                      : (y.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), se.remove(o, t));
                  }
                });
            }),
            j.each(
              { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
              function (e, t) {
                j.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === this || j.contains(this, r))) ||
                        ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
                      n
                    );
                  }
                };
              }
            ),
            j.fn.extend({
              on: function (e, t, n, r) {
                return Me(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Me(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    j(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = Le),
                  this.each(function () {
                    j.event.remove(this, e, n, t);
                  })
                );
              }
            });
          var He = /<script|<style|<link/i,
            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $e = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function We(e, t) {
            return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && j(e).children("tbody")[0]) || e;
          }
          function Fe(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function Be(e) {
            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
          }
          function Je(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (se.hasData(e) && (s = se.get(e).events))
                for (o in (se.remove(t, "handle events"), s)) for (n = 0, r = s[o].length; n < r; n++) j.event.add(t, o, s[o][n]);
              le.hasData(e) && ((i = le.access(e)), (a = j.extend({}, i)), le.set(t, a));
            }
          }
          function ze(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && je.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
          }
          function Ue(e, t, n, r) {
            t = l(t);
            var o,
              i,
              a,
              s,
              c,
              u,
              d = 0,
              f = e.length,
              p = f - 1,
              h = t[0],
              m = v(h);
            if (m || (f > 1 && "string" == typeof h && !g.checkClone && Re.test(h)))
              return e.each(function (o) {
                var i = e.eq(o);
                m && (t[0] = h.call(this, o, i.html())), Ue(i, t, n, r);
              });
            if (f && ((i = (o = qe(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === o.childNodes.length && (o = i), i || r)) {
              for (s = (a = j.map(Se(o, "script"), Fe)).length; d < f; d++)
                (c = o), d !== p && ((c = j.clone(c, !0, !0)), s && j.merge(a, Se(c, "script"))), n.call(e[d], c, d);
              if (s)
                for (u = a[a.length - 1].ownerDocument, j.map(a, Be), d = 0; d < s; d++)
                  (c = a[d]),
                    Ae.test(c.type || "") &&
                      !se.access(c, "globalEval") &&
                      j.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? j._evalUrl && !c.noModule && j._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u)
                        : x(c.textContent.replace($e, ""), c, u));
            }
            return e;
          }
          function Ge(e, t, n) {
            for (var r, o = t ? j.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
              n || 1 !== r.nodeType || j.cleanData(Se(r)), r.parentNode && (n && ge(r) && De(Se(r, "script")), r.parentNode.removeChild(r));
            return e;
          }
          j.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                l = ge(e);
              if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || j.isXMLDoc(e)))
                for (a = Se(s), r = 0, o = (i = Se(e)).length; r < o; r++) ze(i[r], a[r]);
              if (t)
                if (n) for (i = i || Se(e), a = a || Se(s), r = 0, o = i.length; r < o; r++) Je(i[r], a[r]);
                else Je(e, s);
              return (a = Se(s, "script")).length > 0 && De(a, !l && Se(e, "script")), s;
            },
            cleanData: function (e) {
              for (var t, n, r, o = j.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (ie(n)) {
                  if ((t = n[se.expando])) {
                    if (t.events) for (r in t.events) o[r] ? j.event.remove(n, r) : j.removeEvent(n, r, t.handle);
                    n[se.expando] = void 0;
                  }
                  n[le.expando] && (n[le.expando] = void 0);
                }
            }
          }),
            j.fn.extend({
              detach: function (e) {
                return Ge(this, e, !0);
              },
              remove: function (e) {
                return Ge(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? j.text(this)
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
                return Ue(this, arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || We(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ue(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = We(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ue(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ue(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (j.cleanData(Se(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return j.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !He.test(e) && !Ee[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                      e = j.htmlPrefilter(e);
                      try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (j.cleanData(Se(t, !1)), (t.innerHTML = e));
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
                return Ue(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    j.inArray(this, e) < 0 && (j.cleanData(Se(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              }
            }),
            j.each(
              { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
              function (e, t) {
                j.fn[e] = function (e) {
                  for (var n, r = [], o = j(e), i = o.length - 1, a = 0; a <= i; a++)
                    (n = a === i ? this : this.clone(!0)), j(o[a])[t](n), c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Xe = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
            Ve = /^--/,
            Ke = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Ye = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Qe = new RegExp(he.join("|"), "i");
          function Ze(e, t, n) {
            var r,
              o,
              i,
              a,
              s = Ve.test(t),
              l = e.style;
            return (
              (n = n || Ke(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(q, "$1") || void 0),
                "" !== a || ge(e) || (a = j.style(e, t)),
                !g.pixelBoxStyles() &&
                  Xe.test(a) &&
                  Qe.test(t) &&
                  ((r = l.width),
                  (o = l.minWidth),
                  (i = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = a),
                  (a = n.width),
                  (l.width = r),
                  (l.minWidth = o),
                  (l.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  me.appendChild(c).appendChild(u);
                var e = r.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (i = 12 === t(u.offsetWidth / 3)),
                  me.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              l,
              c = y.createElement("div"),
              u = y.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
              j.extend(g, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = y.createElement("table")),
                      (t = y.createElement("tr")),
                      (n = y.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      me.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight),
                      me.removeChild(e)),
                    s
                  );
                }
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = y.createElement("div").style,
            rt = {};
          function ot(e) {
            return (
              j.cssProps[e] ||
              rt[e] ||
              (e in nt
                ? e
                : (rt[e] =
                    (function (e) {
                      for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var it = /^(none|table(?!-c[ea]).+)/,
            at = { position: "absolute", visibility: "hidden", display: "block" },
            st = { letterSpacing: "0", fontWeight: "400" };
          function lt(e, t, n) {
            var r = pe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function ct(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0,
              c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (c += j.css(e, n + he[a], !0, o)),
                r
                  ? ("content" === n && (l -= j.css(e, "padding" + he[a], !0, o)),
                    "margin" !== n && (l -= j.css(e, "border" + he[a] + "Width", !0, o)))
                  : ((l += j.css(e, "padding" + he[a], !0, o)),
                    "padding" !== n
                      ? (l += j.css(e, "border" + he[a] + "Width", !0, o))
                      : (s += j.css(e, "border" + he[a] + "Width", !0, o)));
            return (
              !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5)) || 0), l + c
            );
          }
          function ut(e, t, n) {
            var r = Ke(e),
              o = (!g.boxSizingReliable() || n) && "border-box" === j.css(e, "boxSizing", !1, r),
              i = o,
              a = Ze(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Xe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && o) ||
                (!g.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === j.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === j.css(e, "boxSizing", !1, r)), (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) + ct(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
            );
          }
          function dt(e, t, n, r, o) {
            return new dt.prototype.init(e, t, n, r, o);
          }
          j.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
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
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = oe(t),
                  l = Ve.test(t),
                  c = e.style;
                if ((l || (t = ot(s)), (a = j.cssHooks[t] || j.cssHooks[s]), void 0 === n))
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                "string" == (i = typeof n) && (o = pe.exec(n)) && o[1] && ((n = ye(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i || l || (n += (o && o[3]) || (j.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = oe(t);
              return (
                Ve.test(t) || (t = ot(s)),
                (a = j.cssHooks[t] || j.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = Ze(e, t, r)),
                "normal" === o && t in st && (o = st[t]),
                "" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
              );
            }
          }),
            j.each(["height", "width"], function (e, t) {
              j.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !it.test(j.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? ut(e, t, r)
                      : Ye(e, at, function () {
                          return ut(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Ke(e),
                    a = !g.scrollboxSize() && "absolute" === i.position,
                    s = (a || r) && "border-box" === j.css(e, "boxSizing", !1, i),
                    l = r ? ct(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ct(e, t, "border", !1, i) - 0.5)),
                    l && (o = pe.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = j.css(e, t))),
                    lt(0, n, l)
                  );
                }
              };
            }),
            (j.cssHooks.marginLeft = et(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ye(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            j.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (j.cssHooks[e + t] = {
                expand: function (n) {
                  for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                  return o;
                }
              }),
                "margin" !== e && (j.cssHooks[e + t].set = lt);
            }),
            j.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Ke(e), o = t.length; a < o; a++) i[t[a]] = j.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? j.style(e, t, n) : j.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              }
            }),
            (j.Tween = dt),
            (dt.prototype = {
              constructor: dt,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || j.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (j.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = dt.propHooks[this.prop];
                return e && e.get ? e.get(this) : dt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = dt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = j.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : dt.propHooks._default.set(this),
                  this
                );
              }
            }),
            (dt.prototype.init.prototype = dt.prototype),
            (dt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = j.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  j.fx.step[e.prop]
                    ? j.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType || (!j.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : j.style(e.elem, e.prop, e.now + e.unit);
                }
              }
            }),
            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
              }),
            (j.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing"
            }),
            (j.fx = dt.prototype.init),
            (j.fx.step = {});
          var ft,
            pt,
            ht = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
          function gt() {
            pt && (!1 === y.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(gt) : r.setTimeout(gt, j.fx.interval), j.fx.tick());
          }
          function vt() {
            return (
              r.setTimeout(function () {
                ft = void 0;
              }),
              (ft = Date.now())
            );
          }
          function _t(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = he[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function yt(e, t, n) {
            for (var r, o = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
              if ((r = o[i].call(n, t, e))) return r;
          }
          function bt(e, t, n) {
            var r,
              o,
              i = 0,
              a = bt.prefilters.length,
              s = j.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (o) return !1;
                for (
                  var t = ft || vt(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    r = 1 - (n / c.duration || 0),
                    i = 0,
                    a = c.tweens.length;
                  i < a;
                  i++
                )
                  c.tweens[i].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
              },
              c = s.promise({
                elem: e,
                props: j.extend({}, t),
                opts: j.extend(!0, { specialEasing: {}, easing: j.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || vt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = j.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                  return c.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? c.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) c.tweens[n].run(1);
                  return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                }
              }),
              u = c.props;
            for (
              (function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = oe(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = j.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i)) (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(u, c.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = bt.prefilters[i].call(c, e, u, c.opts)))
                return v(r.stop) && (j._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
            return (
              j.map(u, yt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
              j.fx.timer(j.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
              c
            );
          }
          (j.Animation = j.extend(bt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ye(n.elem, e, pe.exec(t), n), n;
                }
              ]
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(G));
              for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (bt.tweeners[n] = bt.tweeners[n] || []), bt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  f = this,
                  p = {},
                  h = e.style,
                  m = e.nodeType && _e(e),
                  g = se.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = j._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, j.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), ht.test(o))) {
                    if ((delete t[r], (i = i || "toggle" === o), o === (m ? "hide" : "show"))) {
                      if ("show" !== o || !g || void 0 === g[r]) continue;
                      m = !0;
                    }
                    p[r] = (g && g[r]) || j.style(e, r);
                  }
                if ((l = !j.isEmptyObject(t)) || !j.isEmptyObject(p))
                  for (r in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = se.get(e, "display")),
                    "none" === (u = j.css(e, "display")) &&
                      (c ? (u = c) : (we([e], !0), (c = e.style.display || c), (u = j.css(e, "display")), we([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === j.css(e, "float") &&
                      (l ||
                        (f.done(function () {
                          h.display = c;
                        }),
                        null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    f.always(function () {
                      (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                    l ||
                      (g ? "hidden" in g && (m = g.hidden) : (g = se.access(e, "fxshow", { display: c })),
                      i && (g.hidden = !m),
                      m && we([e], !0),
                      f.done(function () {
                        for (r in (m || we([e]), se.remove(e, "fxshow"), p)) j.style(e, r, p[r]);
                      })),
                      (l = yt(m ? g[r] : 0, r, f)),
                      r in g || ((g[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
              }
            ],
            prefilter: function (e, t) {
              t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
            }
          })),
            (j.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? j.extend({}, e)
                  : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
              return (
                j.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in j.fx.speeds ? (r.duration = j.fx.speeds[r.duration]) : (r.duration = j.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this), r.queue && j.dequeue(this, r.queue);
                }),
                r
              );
            }),
            j.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(_e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = j.isEmptyObject(e),
                  i = j.speed(t, n, r),
                  a = function () {
                    var t = bt(this, j.extend({}, e), i);
                    (o || se.get(this, "finish")) && t.stop(!0);
                  };
                return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = j.timers,
                      a = se.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else for (o in a) a[o] && a[o].stop && mt.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || j.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = se.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = j.timers,
                      a = r ? r.length : 0;
                    for (n.finish = !0, j.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; )
                      i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              }
            }),
            j.each(["toggle", "show", "hide"], function (e, t) {
              var n = j.fn[t];
              j.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_t(t, !0), e, r, o);
              };
            }),
            j.each(
              {
                slideDown: _t("show"),
                slideUp: _t("hide"),
                slideToggle: _t("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
              },
              function (e, t) {
                j.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (j.timers = []),
            (j.fx.tick = function () {
              var e,
                t = 0,
                n = j.timers;
              for (ft = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || j.fx.stop(), (ft = void 0);
            }),
            (j.fx.timer = function (e) {
              j.timers.push(e), j.fx.start();
            }),
            (j.fx.interval = 13),
            (j.fx.start = function () {
              pt || ((pt = !0), gt());
            }),
            (j.fx.stop = function () {
              pt = null;
            }),
            (j.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (j.fn.delay = function (e, t) {
              return (
                (e = (j.fx && j.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = y.createElement("input"),
                t = y.createElement("select").appendChild(y.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = y.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var xt,
            wt = j.expr.attrHandle;
          j.fn.extend({
            attr: function (e, t) {
              return ee(this, j.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                j.removeAttr(this, e);
              });
            }
          }),
            j.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? j.prop(e, t, n)
                    : ((1 === i && j.isXMLDoc(e)) || (o = j.attrHooks[t.toLowerCase()] || (j.expr.match.bool.test(t) ? xt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void j.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = j.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && A(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  }
                }
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(G);
                if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
              }
            }),
            (xt = {
              set: function (e, t, n) {
                return !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n), n;
              }
            }),
            j.each(j.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = wt[t] || j.find.attr;
              wt[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return r || ((i = wt[a]), (wt[a] = o), (o = null != n(e, t, r) ? a : null), (wt[a] = i)), o;
              };
            });
          var kt = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
          function jt(e) {
            return (e.match(G) || []).join(" ");
          }
          function Ct(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function At(e) {
            return Array.isArray(e) ? e : ("string" == typeof e && e.match(G)) || [];
          }
          j.fn.extend({
            prop: function (e, t) {
              return ee(this, j.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[j.propFix[e] || e];
              });
            }
          }),
            j.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && j.isXMLDoc(e)) || ((t = j.propFix[t] || t), (o = j.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = j.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || (Tt.test(e.nodeName) && e.href) ? 0 : -1;
                  }
                }
              },
              propFix: { for: "htmlFor", class: "className" }
            }),
            g.optSelected ||
              (j.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
              }),
            j.each(
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
                j.propFix[this.toLowerCase()] = this;
              }
            ),
            j.fn.extend({
              addClass: function (e) {
                var t, n, r, o, i, a;
                return v(e)
                  ? this.each(function (t) {
                      j(this).addClass(e.call(this, t, Ct(this)));
                    })
                  : (t = At(e)).length
                  ? this.each(function () {
                      if (((r = Ct(this)), (n = 1 === this.nodeType && " " + jt(r) + " "))) {
                        for (i = 0; i < t.length; i++) (o = t[i]), n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        (a = jt(n)), r !== a && this.setAttribute("class", a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, o, i, a;
                return v(e)
                  ? this.each(function (t) {
                      j(this).removeClass(e.call(this, t, Ct(this)));
                    })
                  : arguments.length
                  ? (t = At(e)).length
                    ? this.each(function () {
                        if (((r = Ct(this)), (n = 1 === this.nodeType && " " + jt(r) + " "))) {
                          for (i = 0; i < t.length; i++) for (o = t[i]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                          (a = jt(n)), r !== a && this.setAttribute("class", a);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = typeof e,
                  s = "string" === a || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      j(this).toggleClass(e.call(this, n, Ct(this), t), t);
                    })
                  : "boolean" == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = At(e)),
                    this.each(function () {
                      if (s) for (i = j(this), o = 0; o < n.length; o++) (r = n[o]), i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                      else
                        (void 0 !== e && "boolean" !== a) ||
                          ((r = Ct(this)) && se.set(this, "__className__", r),
                          this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : se.get(this, "__className__") || ""));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + jt(Ct(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
              }
            });
          var Et = /\r/g;
          j.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, j(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = j.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t = j.valHooks[o.type] || j.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(Et, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            }
          }),
            j.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = j.find.attr(e, "value");
                    return null != t ? t : jt(j.text(e));
                  }
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      l = a ? i + 1 : o.length;
                    for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                      if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (((t = j(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (var n, r, o = e.options, i = j.makeArray(t), a = o.length; a--; )
                      ((r = o[a]).selected = j.inArray(j.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  }
                }
              }
            }),
            j.each(["radio", "checkbox"], function () {
              (j.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t)) return (e.checked = j.inArray(j(e).val(), t) > -1);
                }
              }),
                g.checkOn ||
                  (j.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var St = r.location,
            Dt = { guid: Date.now() },
            Nt = /\?/;
          j.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                j.error(
                  "Invalid XML: " +
                    (n
                      ? j
                          .map(n.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              t
            );
          };
          var qt = /^(?:focusinfocus|focusoutblur)$/,
            It = function (e) {
              e.stopPropagation();
            };
          j.extend(j.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h = [n || y],
                m = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = s = n = n || y),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !qt.test(m + j.event.triggered) &&
                  (m.indexOf(".") > -1 && ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[j.expando] ? e : new j.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : j.makeArray(t, [e])),
                  (d = j.event.special[m] || {}),
                  o || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!o && !d.noBubble && !_(n)) {
                  for (l = d.delegateType || m, qt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (s = a);
                  s === (n.ownerDocument || y) && h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = i > 1 ? l : d.bindType || m),
                    (u = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && u.apply(a, t),
                    (u = c && a[c]) && u.apply && ie(a) && ((e.result = u.apply(a, t)), !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  o ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !ie(n) ||
                    (c &&
                      v(n[m]) &&
                      !_(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (j.event.triggered = m),
                      e.isPropagationStopped() && f.addEventListener(m, It),
                      n[m](),
                      e.isPropagationStopped() && f.removeEventListener(m, It),
                      (j.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = j.extend(new j.Event(), n, { type: e, isSimulated: !0 });
              j.event.trigger(r, null, t);
            }
          }),
            j.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  j.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return j.event.trigger(e, t, n, !0);
              }
            });
          var Ot = /\[\]$/,
            Lt = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Ht(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              j.each(t, function (t, o) {
                n || Ot.test(e) ? r(e, o) : Ht(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
              });
            else if (n || "object" !== w(t)) r(e, t);
            else for (o in t) Ht(e + "[" + o + "]", t[o], n, r);
          }
          (j.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !j.isPlainObject(e)))
              j.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Ht(n, e[n], t, o);
            return r.join("&");
          }),
            j.fn.extend({
              serialize: function () {
                return j.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = j.prop(this, "elements");
                  return e ? j.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return this.name && !j(this).is(":disabled") && Pt.test(this.nodeName) && !Mt.test(e) && (this.checked || !je.test(e));
                  })
                  .map(function (e, t) {
                    var n = j(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? j.map(n, function (e) {
                          return { name: t.name, value: e.replace(Lt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Lt, "\r\n") };
                  })
                  .get();
              }
            });
          var Rt = /%20/g,
            $t = /#.*$/,
            Wt = /([?&])_=[^&]*/,
            Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:GET|HEAD)$/,
            Jt = /^\/\//,
            zt = {},
            Ut = {},
            Gt = "*/".concat("*"),
            Xt = y.createElement("a");
          function Vt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(G) || [];
              if (v(n))
                for (; (r = i[o++]); )
                  "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
          }
          function Kt(e, t, n, r) {
            var o = {},
              i = e === Ut;
            function a(s) {
              var l;
              return (
                (o[s] = !0),
                j.each(e[s] || [], function (e, s) {
                  var c = s(t, n, r);
                  return "string" != typeof c || i || o[c] ? (i ? !(l = c) : void 0) : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function Yt(e, t) {
            var n,
              r,
              o = j.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && j.extend(!0, e, r), e;
          }
          (Xt.href = St.href),
            j.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Gt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": j.parseXML },
                flatOptions: { url: !0, context: !0 }
              },
              ajaxSetup: function (e, t) {
                return t ? Yt(Yt(e, j.ajaxSettings), t) : Yt(j.ajaxSettings, e);
              },
              ajaxPrefilter: Vt(zt),
              ajaxTransport: Vt(Ut),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u,
                  d,
                  f,
                  p = j.ajaxSetup({}, t),
                  h = p.context || p,
                  m = p.context && (h.nodeType || h.jquery) ? j(h) : j.event,
                  g = j.Deferred(),
                  v = j.Callbacks("once memory"),
                  _ = p.statusCode || {},
                  b = {},
                  x = {},
                  w = "canceled",
                  k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = Ft.exec(i)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return null == c && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) k.always(e[k.status]);
                        else for (t in e) _[t] = [_[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || w;
                      return n && n.abort(t), T(0, t), this;
                    }
                  };
                if (
                  (g.promise(k),
                  (p.url = ((e || p.url || St.href) + "").replace(Jt, St.protocol + "//")),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(G) || [""]),
                  null == p.crossDomain)
                ) {
                  l = y.createElement("a");
                  try {
                    (l.href = p.url), (l.href = l.href), (p.crossDomain = Xt.protocol + "//" + Xt.host != l.protocol + "//" + l.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = j.param(p.data, p.traditional)), Kt(zt, p, t, k), c))
                  return k;
                for (d in ((u = j.event && p.global) && 0 == j.active++ && j.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Bt.test(p.type)),
                (o = p.url.replace($t, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    (p.data = p.data.replace(Rt, "+"))
                  : ((f = p.url.slice(o.length)),
                    p.data && (p.processData || "string" == typeof p.data) && ((o += (Nt.test(o) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache && ((o = o.replace(Wt, "$1")), (f = (Nt.test(o) ? "&" : "?") + "_=" + Dt.guid++ + f)),
                    (p.url = o + f)),
                p.ifModified &&
                  (j.lastModified[o] && k.setRequestHeader("If-Modified-Since", j.lastModified[o]),
                  j.etag[o] && k.setRequestHeader("If-None-Match", j.etag[o])),
                ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                k.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gt + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  k.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || c)) return k.abort();
                if (((w = "abort"), v.add(p.complete), k.done(p.success), k.fail(p.error), (n = Kt(Ut, p, t, k)))) {
                  if (((k.readyState = 1), u && m.trigger("ajaxSend", [k, p]), c)) return k;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      k.abort("timeout");
                    }, p.timeout));
                  try {
                    (c = !1), n.send(b, T);
                  } catch (e) {
                    if (c) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, a, l) {
                  var d,
                    f,
                    y,
                    b,
                    x,
                    w = t;
                  c ||
                    ((c = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = l || ""),
                    (k.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                          l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              l.unshift(o);
                              break;
                            }
                        if (l[0] in n) i = l[0];
                        else {
                          for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== l[0] && l.unshift(i), n[i];
                      })(p, k, a)),
                    !d &&
                      j.inArray("script", p.dataTypes) > -1 &&
                      j.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                      for (i = u.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          (l = i),
                          (i = u.shift()))
                        )
                          if ("*" === i) i = l;
                          else if ("*" !== l && l !== i) {
                            if (!(a = c[l + " " + i] || c["* " + i]))
                              for (o in c)
                                if ((s = o.split(" "))[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                  !0 === a ? (a = c[o]) : !0 !== c[o] && ((i = s[0]), u.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, b, k, d)),
                    d
                      ? (p.ifModified &&
                          ((x = k.getResponseHeader("Last-Modified")) && (j.lastModified[o] = x),
                          (x = k.getResponseHeader("etag")) && (j.etag[o] = x)),
                        204 === e || "HEAD" === p.type
                          ? (w = "nocontent")
                          : 304 === e
                          ? (w = "notmodified")
                          : ((w = b.state), (f = b.data), (d = !(y = b.error))))
                      : ((y = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                    (k.status = e),
                    (k.statusText = (t || w) + ""),
                    d ? g.resolveWith(h, [f, w, k]) : g.rejectWith(h, [k, w, y]),
                    k.statusCode(_),
                    (_ = void 0),
                    u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [k, p, d ? f : y]),
                    v.fireWith(h, [k, w]),
                    u && (m.trigger("ajaxComplete", [k, p]), --j.active || j.event.trigger("ajaxStop")));
                }
                return k;
              },
              getJSON: function (e, t, n) {
                return j.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return j.get(e, void 0, t, "script");
              }
            }),
            j.each(["get", "post"], function (e, t) {
              j[t] = function (e, n, r, o) {
                return (
                  v(n) && ((o = o || r), (r = n), (n = void 0)),
                  j.ajax(j.extend({ url: e, type: t, dataType: o, data: n, success: r }, j.isPlainObject(e) && e))
                );
              };
            }),
            j.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            }),
            (j._evalUrl = function (e, t, n) {
              return j.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  j.globalEval(e, t, n);
                }
              });
            }),
            j.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = j(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                return v(e)
                  ? this.each(function (t) {
                      j(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = j(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  j(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      j(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              }
            }),
            (j.expr.pseudos.hidden = function (e) {
              return !j.expr.pseudos.visible(e);
            }),
            (j.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (j.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Qt = { 0: 200, 1223: 204 },
            Zt = j.ajaxSettings.xhr();
          (g.cors = !!Zt && "withCredentials" in Zt),
            (g.ajax = Zt = !!Zt),
            j.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Zt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                Qt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") || "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  }
                };
            }),
            j.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            j.ajaxSetup({
              accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return j.globalEval(e), e;
                }
              }
            }),
            j.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            j.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = j("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      y.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  }
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          j.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || j.expando + "_" + Dt.guid++;
              return (this[e] = !0), e;
            }
          }),
            j.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      nn.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s ? (e[s] = e[s].replace(nn, "$1" + o)) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || j.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? j(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), tn.push(o)),
                      a && v(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((en = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === en.childNodes.length)),
            (j.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href),
                        t.head.appendChild(r))
                      : (t = y)),
                  (i = !n && []),
                  (o = $.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = qe([e], t, i)), i && i.length && j(i).remove(), j.merge([], o.childNodes)));
              var r, o, i;
            }),
            (j.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = jt(e.slice(s))), (e = e.slice(0, s))),
                v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  j
                    .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                    .done(function (e) {
                      (i = arguments), a.html(r ? j("<div>").append(j.parseHTML(e)).find(r) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (j.expr.pseudos.animated = function (e) {
              return j.grep(j.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (j.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c = j.css(e, "position"),
                  u = j(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (s = u.offset()),
                  (i = j.css(e, "top")),
                  (l = j.css(e, "left")),
                  ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1
                    ? ((a = (r = u.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, j.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              }
            }),
            j.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        j.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === j.css(r, "position")) t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                      e && (e === n.body || e === n.documentElement) && "static" === j.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = j(e).offset()).top += j.css(e, "borderTopWidth", !0)), (o.left += j.css(e, "borderLeftWidth", !0)));
                  }
                  return { top: t.top - o.top - j.css(r, "marginTop", !0), left: t.left - o.left - j.css(r, "marginLeft", !0) };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var e = this.offsetParent; e && "static" === j.css(e, "position"); ) e = e.offsetParent;
                  return e || me;
                });
              }
            }),
            j.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
              var n = "pageYOffset" === t;
              j.fn[e] = function (r) {
                return ee(
                  this,
                  function (e, r, o) {
                    var i;
                    if ((_(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o)) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }),
            j.each(["top", "left"], function (e, t) {
              j.cssHooks[t] = et(g.pixelPosition, function (e, n) {
                if (n) return (n = Ze(e, t)), Xe.test(n) ? j(e).position()[t] + "px" : n;
              });
            }),
            j.each({ Height: "height", Width: "width" }, function (e, t) {
              j.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                j.fn[r] = function (o, i) {
                  var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === i ? "margin" : "border");
                  return ee(
                    this,
                    function (t, n, o) {
                      var i;
                      return _(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                        : void 0 === o
                        ? j.css(t, n, s)
                        : j.style(t, n, o, s);
                    },
                    t,
                    a ? o : void 0,
                    a
                  );
                };
              });
            }),
            j.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
              j.fn[t] = function (e) {
                return this.on(t, e);
              };
            }),
            j.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              }
            }),
            j.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                j.fn[t] = function (e, n) {
                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
              }
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (j.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || j.guid++),
                o
              );
          }),
            (j.holdReady = function (e) {
              e ? j.readyWait++ : j.ready(!0);
            }),
            (j.isArray = Array.isArray),
            (j.parseJSON = JSON.parse),
            (j.nodeName = A),
            (j.isFunction = v),
            (j.isWindow = _),
            (j.camelCase = oe),
            (j.type = w),
            (j.now = Date.now),
            (j.isNumeric = function (e) {
              var t = j.type(e);
              return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (j.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return j;
              }.apply(t, [])) || (e.exports = n);
          var on = r.jQuery,
            an = r.$;
          return (
            (j.noConflict = function (e) {
              return r.$ === j && (r.$ = an), e && r.jQuery === j && (r.jQuery = on), j;
            }),
            void 0 === o && (r.jQuery = r.$ = j),
            j
          );
        });
      },
      63783: function (e, t, n) {
        t.Gmail = function (e) {
          var t;
          if (void 0 !== e) t = e;
          else if ("undefined" != typeof jQuery) t = jQuery;
          else
            try {
              t = n(93289);
            } catch (e) {}
          var r = "undefined" != typeof window ? window.opener : null;
          if (r)
            try {
              r.document.domain !== window.document.domain &&
                (console.warn("GmailJS: window.opener domain differs from window domain."), (r = null));
            } catch (e) {
              console.warn("GmailJS: Unable to access window.opener!", e), (r = null);
            }
          var o = {
            get: {},
            observe: {},
            check: { data: {} },
            tools: {},
            tracker: {},
            dom: {},
            chat: {},
            compose: {},
            helper: { get: {} }
          };
          function i(e = "Migrate to new API compatible with new Gmail to silence this warning!") {
            o.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS || console.warn("GmailJS: using deprecated API for old Gmail.", e);
          }
          (o.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS = !1),
            (o.version = "0.8.0"),
            (o.tracker.globals = "undefined" != typeof GLOBALS ? GLOBALS : (r && r.GLOBALS) || []),
            (o.tracker.view_data = "undefined" != typeof VIEW_DATA ? VIEW_DATA : (r && r.VIEW_DATA) || []),
            (o.tracker.ik = o.tracker.globals[9] || ""),
            (o.tracker.mla = void 0),
            (o.tracker.hangouts = void 0),
            (o.cache = {}),
            (o.cache.debug_xhr_fetch = !1),
            (o.cache.emailIdCache = {}),
            (o.cache.emailLegacyIdCache = {}),
            (o.cache.threadCache = {}),
            (o.get.last_active = function () {
              var e = o.tracker.globals[17][15];
              return { time: e[1], ip: e[3], mac_address: e[9], time_relative: e[10] };
            }),
            (o.get.loggedin_accounts = function () {
              const e = o.tracker.mla;
              return Array.isArray(e) ? e[1].map((e) => ({ name: e[4], email: e[0], index: e[3] })) : [];
            }),
            (o.get.user_email = function () {
              return o.tracker.globals[10];
            }),
            (o.get.manager_email = function () {
              return o.helper.get.is_delegated_inbox() ? o.get.delegated_to_email() : o.get.user_email();
            }),
            (o.get.delegated_to_email = function () {
              if (!o.helper.get.is_delegated_inbox()) return null;
              const e = window.location.pathname,
                t = parseInt(e.substring(e.indexOf("/u/") + 3), 10),
                n = o.get.loggedin_accounts().find((e) => e.index === t);
              return n ? n.email : null;
            }),
            (o.helper.get.is_locale = function (e) {
              if (!e || "string" != typeof e || e.length < 2) return !1;
              if (e.match(/[0-9]/)) return !1;
              var t = e.slice(0, 2);
              return t.toLowerCase() === t || t.toUpperCase() === t;
            }),
            (o.helper.filter_locale = function (e) {
              return o.helper.get.is_locale(e) ? e.substring(0, 2).toLowerCase() : null;
            }),
            (o.helper.array_starts_with = function (e, t) {
              return !!(e && e.length > 0 && e[0] === t);
            }),
            (o.helper.get.array_sublist = function (e, t) {
              if (e)
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (o.helper.array_starts_with(r, t)) return r;
                }
              return null;
            }),
            (o.helper.get.locale_from_url_params = function (e) {
              if (e && e.indexOf && (0 === e.indexOf("https://") || 0 === e.indexOf("http://"))) {
                var t = e.split("?");
                if (t.length > 1)
                  for (var n = t[1].split("&"), r = 0; r < n.length; r++) {
                    var o = n[r].split("=");
                    if (2 === o.length && "hl" === o[0]) return o[1];
                  }
              }
              return null;
            }),
            (o.helper.get.locale_from_globals_item = function (e) {
              if (!e) return null;
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  r = o.helper.get.locale_from_url_params(n);
                if (r) return r;
              }
              return e[8];
            }),
            (o.get.localization = function () {
              var e = o.tracker.globals,
                t = o.helper.get.array_sublist(e[17], "ui");
              if (null !== t && t.length > 8) {
                let e = o.helper.get.locale_from_globals_item(t);
                if (((e = o.helper.filter_locale(e)), e)) return e;
              }
              if (null !== e[12]) {
                let t = o.helper.get.locale_from_url_params(e[12]);
                if (((t = o.helper.filter_locale(t)), t)) return t;
              }
              if (e[4]) {
                let t = e[4].split(".")[1];
                if (((t = o.helper.filter_locale(t)), t)) return t;
              }
              return null;
            }),
            (o.check.is_new_data_layer = function () {
              return "true" === window.GM_SPT_ENABLED;
            }),
            (o.check.is_new_gui = function () {
              return "true" === window.GM_RFT_ENABLED;
            }),
            (o.check.is_thread = function () {
              var e = t(".nH .if,.iY").children(":eq(1)").children().children(":eq(1)").children(),
                n = o.get.email_ids();
              return e.length > 1 || n.length > 1;
            }),
            (o.check.is_peoplekit_compose = function (e) {
              return 0 !== t(e).find("div[name=to] input[peoplekit-id]").length;
            }),
            (o.dom.inbox_content = function () {
              return t("div[role=main]:first");
            }),
            (o.check.is_preview_pane = function () {
              var e = o.dom.inbox_content().find("[gh=tl]"),
                n = !1;
              return (
                e.each(function () {
                  t(this).hasClass("aia") && (n = !0);
                }),
                n
              );
            }),
            (o.check.is_multiple_inbox = function () {
              return o.dom.inboxes().length > 1;
            }),
            (o.check.is_horizontal_split = function () {
              return 0 === o.dom.inbox_content().find("[gh=tl]").find(".nn").length;
            }),
            (o.check.is_vertical_split = function () {
              return !1 === o.check.is_horizontal_split();
            }),
            (o.check.is_tabbed_inbox = function () {
              return 1 === t(".aKh").length;
            }),
            (o.check.is_right_side_chat = function () {
              var e = t(".ApVoH");
              return 0 !== e.length && ":wf" === e[0].getAttribute("aria-labelledby");
            }),
            (o.check.should_compose_fullscreen = function () {
              console.warn("gmail.js: This function is known to be unreliable, and may be deprecated in a future release.");
              var e = [];
              try {
                e = o.tracker.globals[17][4][1][32];
              } catch (t) {
                e = ["bx_scfs", "false"];
              }
              return "true" === e[1];
            }),
            (o.check.is_google_apps_user = function () {
              var e = o.get.user_email();
              return -1 === e.indexOf("gmail.com", e.length - 9);
            }),
            (o.get.storage_info = function () {
              var e = document.querySelector(".md.mj div"),
                t = e.querySelectorAll("span")[0].textContent.replace(/,/g, "."),
                n = e.querySelectorAll("span")[1].textContent.replace(/,/g, "."),
                r = (100 * parseFloat(t.replace(/[^0-9\.]/g, ""))) / parseFloat(n.replace(/[^0-9\.]/g, ""));
              return { used: t, total: n, percent: Math.floor(r) };
            }),
            (o.dom.inboxes = function () {
              return o.dom.inbox_content().find("[gh=tl]");
            }),
            (o.dom.email_subject = function () {
              for (var e = t(".hP"), n = 0; n < e.length; n++) if (t(e[n]).is(":visible")) return t(e[n]);
              return t();
            }),
            (o.get.email_subject = function () {
              return o.dom.email_subject().text();
            }),
            (o.dom.email_body = function () {
              return t(".nH.hx");
            }),
            (o.dom.toolbar = function () {
              for (var e = t("[gh='mtb']"); 1 === t(e).children().length; ) e = t(e).children().first();
              return e;
            }),
            (o.dom.right_toolbar = function () {
              return t("[gh='tm'] .Cr.aqJ");
            }),
            (o.check.is_inside_email = function () {
              if ("email" !== o.get.current_page() && !o.check.is_preview_pane()) return !1;
              for (var e = t(".ii.gt .a3s"), n = [], r = 0; r < e.length; r++) {
                var i = e[r].getAttribute("class").split(" ")[2];
                "undefined" !== i && void 0 !== i && n.push(e[r]);
              }
              return n.length > 0;
            }),
            (o.check.is_plain_text = function () {
              for (var e = o.tracker.globals[17][4][1], t = 0; t < e.length; t++) {
                var n = e[t];
                if ("bx_cm" === n[0]) return "0" === n[1];
              }
              return !1;
            }),
            (o.dom.email_contents = function () {
              for (var e = t(".ii.gt div.a3s.aXjCH"), n = [], r = 0; r < e.length; r++) {
                var o = e[r].getAttribute("class").split(" ")[2],
                  i = e[r].getAttribute("contenteditable");
                "undefined" !== o && void 0 !== o && "true" !== i && n.push(e[r]);
              }
              return n;
            }),
            (o.get.email_ids = function () {
              if ((i(), o.check.is_inside_email())) {
                var e = o.get.email_data();
                return Object.keys(e.threads);
              }
              return [];
            }),
            (o.get.compose_ids = function () {
              for (var e = [], n = t(".M9 [name=draft]"), r = 0; r < n.length; r++) "undefined" !== n[r].value && e.push(n[r].value);
              return e;
            }),
            (o.get.thread_id = function () {
              i();
              const e = document.querySelector("h2[data-legacy-thread-id]");
              return null !== e ? e.dataset.legacyThreadId : void 0;
            }),
            (o.get.email_id = function () {
              return i(), o.get.thread_id();
            }),
            (o.check.is_priority_inbox = function () {
              return t(".qh").length > 0;
            }),
            (o.check.is_rapportive_installed = function () {
              return 1 === t("#rapportive-sidebar").length;
            }),
            (o.check.is_streak_installed = function () {
              return t("[id^='bentoBox'],[id*=' bentoBox'],[class*=' bentoBox'],[class*='bentoBox']").length > 0;
            }),
            (o.check.is_anydo_installed = function () {
              return t("[id^='anydo'],[id*=' anydo'],[class*=' anydo'],[class*='anydo']").length > 0;
            }),
            (o.check.is_boomerang_installed = function () {
              return t("[id^='b4g_'],[id*=' b4g_'],[class*=' b4g_'],[class*='b4g_']").length > 0;
            }),
            (o.check.is_xobni_installed = function () {
              return t("#xobni_frame").length > 0;
            }),
            (o.check.is_signal_installed = function () {
              return t("[id^='Signal'],[id*=' Signal'],[class*=' signal'],[class*='signal']").length > 0;
            }),
            (o.check.are_shortcuts_enabled = function () {
              for (var e = void 0, t = !0, n = o.tracker.globals[17][4][1], r = 0; r < n.length; r++) {
                var i = n[r];
                if ("bx_hs" === i[0]) {
                  e = i[1];
                  break;
                }
              }
              return void 0 !== e && (t = { 0: !0, 1: !1 }[e]), t;
            }),
            (o.dom.get_left_sidebar_links = function () {
              return t("div[role=navigation] [title]");
            }),
            (o.dom.header = function () {
              return t("#gb");
            }),
            (o.dom.search_bar = function () {
              return t("[gh=sb]");
            }),
            (o.get.search_query = function () {
              return o.dom.search_bar().find("input")[0].value;
            }),
            (o.get.unread_inbox_emails = function () {
              return o.helper.get.navigation_count("inbox");
            }),
            (o.get.unread_draft_emails = function () {
              return o.helper.get.navigation_count("drafts");
            }),
            (o.get.unread_spam_emails = function () {
              return o.helper.get.navigation_count("spam");
            }),
            (o.get.unread_forum_emails = function () {
              return o.helper.get.navigation_count("forums");
            }),
            (o.get.unread_update_emails = function () {
              return o.helper.get.navigation_count("updates");
            }),
            (o.get.unread_promotion_emails = function () {
              return o.helper.get.navigation_count("promotions");
            }),
            (o.get.unread_social_emails = function () {
              return o.helper.get.navigation_count("social_updates");
            }),
            (o.helper.get.navigation_count = function (e) {
              const n = o.tools.i18n(e),
                r = t("div[role=navigation]").find("[title*='" + n + "']");
              if ((r || r.length > 0) && -1 !== r[0].title.indexOf(n)) {
                const e = parseInt(r[0].attributes["aria-label"].value.replace(/[^0-9]/g, ""));
                if (!isNaN(e)) return e;
              }
              return 0;
            }),
            (o.get.beta = function () {
              return { new_nav_bar: 0 === t("#gbz").length };
            }),
            (o.get.unread_emails = function () {
              return {
                inbox: o.get.unread_inbox_emails(),
                drafts: o.get.unread_draft_emails(),
                spam: o.get.unread_spam_emails(),
                forum: o.get.unread_forum_emails(),
                update: o.get.unread_update_emails(),
                promotions: o.get.unread_promotion_emails(),
                social: o.get.unread_social_emails()
              };
            }),
            (o.tools.error = function (e, ...t) {
              console.error(e, ...t);
            }),
            (o.tools.parse_url = function (e) {
              for (var t = /[?&]([^=#]+)=([^&#]*)/g, n = {}, r = t.exec(e); r; ) (n[r[1]] = r[2]), (r = t.exec(e));
              return n;
            }),
            (o.tools.sleep = function (e) {
              for (var t = new Date().getTime(); !(new Date().getTime() - t > e); );
            }),
            (o.tools.multitry = function (e, t, n, r, i, a) {
              if (void 0 !== i && i >= t) return a;
              i = void 0 === i ? 0 : i;
              var s = n();
              if (r(s)) return s;
              o.tools.sleep(e), o.tools.multitry(e, t, n, r, i + 1, s);
            }),
            (o.tools.deparam = function (e, t) {
              var n =
                  Array.isArray ||
                  function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                  },
                r = {},
                o = { true: !0, false: !1, null: null };
              return (
                (function (e, t) {
                  for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r]));
                })(e.replace(/\+/g, " ").split("&"), function (e, i) {
                  var a,
                    s = e.split("="),
                    l = decodeURIComponent(s[0]),
                    c = r,
                    u = 0,
                    d = l.split("]["),
                    f = d.length - 1;
                  if (
                    (/\[/.test(d[0]) && /\]$/.test(d[f])
                      ? ((d[f] = d[f].replace(/\]$/, "")), (f = (d = d.shift().split("[").concat(d)).length - 1))
                      : (f = 0),
                    2 === s.length)
                  )
                    if (
                      ((a = decodeURIComponent(s[1])),
                      t && (a = a && !isNaN(a) ? +a : "undefined" === a ? void 0 : void 0 !== o[a] ? o[a] : a),
                      f)
                    )
                      for (; u <= f; u++)
                        c = c[(l = "" === d[u] ? c.length : d[u])] = u < f ? c[l] || (d[u + 1] && isNaN(d[u + 1]) ? {} : []) : a;
                    else n(r[l]) ? r[l].push(a) : void 0 !== r[l] ? (r[l] = [r[l], a]) : (r[l] = a);
                  else l && (r[l] = t ? void 0 : "");
                }),
                r
              );
            }),
            (o.tools.get_pathname_from_url = function (e) {
              if ("undefined" != typeof document) {
                const t = document.createElement("a");
                return (t.href = e), t.pathname;
              }
              return e;
            }),
            (o.tools.parse_actions = function (e, t) {
              if ("fup" === e.url.act || "fuv" === e.url.act || e.body_is_object)
                return !(!e.body_is_object || !o.observe.bound("upload_attachment")) && { upload_attachment: [e.body_params] };
              e.url.search;
              var n = {},
                r = {
                  tae: "add_to_tasks",
                  "rc_^i": "archive",
                  tr: "delete",
                  dm: "delete_message_in_thread",
                  dl: "delete_forever",
                  dc_: "delete_label",
                  dr: "discard_draft",
                  el: "expand_categories",
                  cffm: "filter_messages_like_these",
                  arl: "label",
                  mai: "mark_as_important",
                  mani: "mark_as_not_important",
                  us: "mark_as_not_spam",
                  sp: "mark_as_spam",
                  mt: "move_label",
                  ib: "move_to_inbox",
                  ig: "mute",
                  rd: "read",
                  sd: "save_draft",
                  sm: "send_message",
                  mo: "show_newly_arrived_message",
                  st: "star",
                  cs: "undo_send",
                  ug: "unmute",
                  ur: "unread",
                  xst: "unstar",
                  new_mail: "new_email",
                  poll: "poll",
                  refresh: "refresh",
                  rtr: "restore_message_in_thread",
                  open_email: "open_email",
                  toggle_threads: "toggle_threads"
                };
              "string" == typeof e.url.ik && (o.tracker.ik = e.url.ik),
                "string" == typeof e.url.at && (o.tracker.at = e.url.at),
                "string" == typeof e.url.rid && -1 !== e.url.rid.indexOf("mail") && (o.tracker.rid = e.url.rid);
              var i = decodeURIComponent(e.url.act),
                a = e.body_params,
                s = "string" == typeof a.t ? [a.t] : a.t,
                l = null;
              switch (i) {
                case "cs":
                case "ur":
                case "rd":
                case "tr":
                case "sp":
                case "us":
                case "ib":
                case "dl":
                case "st":
                case "xst":
                case "mai":
                case "mani":
                case "ig":
                case "ug":
                case "dr":
                case "mt":
                case "cffm":
                case "rc_^i":
                  l = [s, e.url, e.body];
                  break;
                case "arl":
                case "dc_":
                  l = [s, e.url, e.body, e.url.acn];
                  break;
                case "sd":
                  l = [s, e.url, a];
                  break;
                case "tae":
                case "sm":
                  l = [e.url, e.body, a];
                  break;
                case "el":
                  l = [e.url, e.body, "1" === a.ex];
                  break;
                case "dm":
                case "rtr":
                case "mo":
                  l = [a.m, e.url, e.body];
              }
              return (
                "string" == typeof e.url._reqid &&
                  "tl" === e.url.view &&
                  void 0 !== e.url.auto &&
                  ((l = [e.url.th, e.url, e.body]), o.observe.bound("new_email") && (n.new_email = l)),
                ("cv" !== e.url.view && "ad" !== e.url.view) ||
                  "string" != typeof e.url.th ||
                  "string" != typeof e.url.search ||
                  void 0 !== e.url.rid ||
                  ((l = [e.url.th, e.url, e.body]), o.observe.bound("open_email") && (n.open_email = l)),
                ("cv" !== e.url.view && "ad" !== e.url.view) ||
                  "object" != typeof e.url.th ||
                  "string" != typeof e.url.search ||
                  void 0 === e.url.rid ||
                  ((l = [e.url.th, e.url, e.body]), o.observe.bound("toggle_threads") && (n.toggle_threads = l)),
                ("cv" !== e.url.view && "ad" !== e.url.view) ||
                  "string" != typeof e.url.th ||
                  "string" != typeof e.url.search ||
                  void 0 === e.url.rid ||
                  (void 0 !== e.url.msgs && ((l = [e.url.th, e.url, e.body]), o.observe.bound("toggle_threads") && (n.toggle_threads = l))),
                "string" == typeof e.url.SID &&
                  "string" == typeof e.url.zx &&
                  -1 !== e.body.indexOf("req0_") &&
                  ((o.tracker.SID = e.url.SID), (l = [e.url, e.body, a]), o.observe.bound("poll") && (n.poll = l)),
                "string" == typeof e.url.ik &&
                  "string" == typeof e.url.search &&
                  0 === e.body.length &&
                  "string" == typeof e.url._reqid &&
                  ((l = [e.url, e.body, a]), o.observe.bound("refresh") && (n.refresh = l)),
                l && r[i] && o.observe.bound(r[i]) && (n[r[i]] = l),
                "POST" === e.method && (n.http_event = [e]),
                o.check.is_new_data_layer() && o.tools.parse_request_payload(e, n),
                n
              );
            }),
            (o.check.data.is_thread_id = function (e) {
              return e && "string" == typeof e && /^thread-[a|f]:/.test(e);
            }),
            (o.check.data.is_thread = function (e) {
              return e && "object" == typeof e && e[0] && o.check.data.is_thread_id(e[0]);
            }),
            (o.check.data.is_email_id = function (e) {
              return e && "string" == typeof e && -1 === e.indexOf("bump-") && /^msg-[a|f]:/.test(e);
            }),
            (o.check.data.is_email = function (e) {
              return e && "object" == typeof e && e[0] && o.check.data.is_email_id(e[0]);
            }),
            (o.check.data.is_email_new = function (e) {
              return e && e[0] && o.check.data.is_email_id(e[0]);
            }),
            (o.check.data.is_legacy_email_id = function (e) {
              return e && "string" == typeof e && /^[0-9a-f]{16,}$/.test(e);
            }),
            (o.check.data.is_action = function (e) {
              return o.check.data.is_first_type_action(e) || o.check.data.is_second_type_action(e);
            }),
            (o.check.data.is_first_type_action = function (e) {
              return e && e[1] && Array.isArray(e[1]) && 1 === e[1].length && "string" == typeof e[1][0];
            }),
            (o.check.data.is_second_type_action = function (e) {
              return e && e[2] && Array.isArray(e[2]) && e[2].length && "string" == typeof e[2][0];
            }),
            (o.check.data.is_smartlabels_array = function (e) {
              if (!e || !Array.isArray(e) || 0 === e.length) return !1;
              for (let t of e) {
                if ("string" != typeof t) return !1;
                if (!/^\^[a-z]+/.test(t)) return !1;
              }
              return !0;
            }),
            (o.check.data.is_json_string = function (e) {
              if (!e || "string" != typeof e) return !1;
              let t = e.trim();
              return (t.startsWith("{") && t.endsWith("}")) || (t.startsWith("[") && t.endsWith("]"));
            }),
            (o.tools.get_thread_id = function (e) {
              return o.check.data.is_thread(e) && e[1];
            }),
            (o.tools.get_thread_data = function (e) {
              return e && e[2] && "object" == typeof e[2] && e[2][7] && "object" == typeof e[2][7] && e[2][7];
            }),
            (o.tools.get_action = function (e) {
              return o.tools.get_first_type_action(e) || o.tools.get_second_type_action(e);
            }),
            (o.tools.get_first_type_action = function (e) {
              return e && e[1] && e[1].join("");
            }),
            (o.tools.get_second_type_action = function (e) {
              return e && e[2] && e[2].join("");
            }),
            (o.tools.get_message_ids = function (e) {
              return e && e[3] && Array.isArray(e[3]) && e[3];
            }),
            (o.tools.extract_from_graph = function (e, t) {
              const n = [],
                r = function (e) {
                  try {
                    return t(e);
                  } catch (e) {
                    return !1;
                  }
                },
                o = function (e) {
                  if (r(e)) n.push(e);
                  else
                    for (let t in e) {
                      let i = e[t];
                      if (r(i)) n.push(i);
                      else if (Array.isArray(i)) for (let t of i) o(t, e);
                      else "object" == typeof i && o(i);
                    }
                };
              return o(e), n;
            }),
            (o.tools.check_event_type = function (e) {
              const t = {
                  "^a": "archive",
                  "^k": "delete",
                  "^x_": "label",
                  "^u^us": "read",
                  "^u": "unread",
                  "^us": "new_email",
                  "^o": "open_email"
                },
                n = o.tools.get_thread_data(e);
              if (n && o.check.data.is_action(n)) {
                const e = o.tools.get_action(n);
                return e.startsWith("^x_") && o.check.data.is_first_type_action(n) ? t["^x_"] : t[e];
              }
              return null;
            }),
            (o.tools.parse_fd_bv_contacts = function (e) {
              if (!e || !Array.isArray(e)) return [];
              const t = [];
              for (let n of e) t.push(o.tools.parse_fd_bv_contact(n));
              return t;
            }),
            (o.tools.parse_fd_bv_is_draft = function (e) {
              try {
                return !!Array.isArray(e) && e.includes("^r") && e.includes("^r_bt");
              } catch (e) {
                return !1;
              }
            }),
            (o.tools.parse_fd_bv_contact = function (e) {
              try {
                return { name: e[2], address: e[1] };
              } catch (e) {
                return null;
              }
            }),
            (o.tools.parse_fd_attachments = function (e) {
              let t = [];
              if (Array.isArray(e))
                for (let n of e) {
                  let e = n[0][3] || "";
                  t.push({
                    attachment_id: n[0][1],
                    name: e[2],
                    type: e[3],
                    url: o.tools.check_fd_attachment_url(e[1]),
                    size: Number.parseInt(e[4])
                  });
                }
              return t;
            }),
            (o.tools.parse_fd_embedded_json_attachments = function (e) {
              let t = [];
              if (Array.isArray(e))
                for (let n of e)
                  t.push({ attachment_id: n[3], name: n[1], type: n[0], url: o.tools.check_fd_attachment_url(n[5]), size: n[2] });
              return t;
            }),
            (o.tools.check_fd_attachment_url = function (e) {
              var t = o.tracker.globals[7];
              return e && t && e.indexOf(t) < 0 && (e = e.replace("/mail/?", t + "?")), e;
            }),
            (o.tools.parse_fd_request_html_payload = function (e) {
              let t = null;
              try {
                const n = e[1][5][1];
                for (let e of n) t = (t || "") + e[2][1];
              } catch (e) {}
              return t;
            }),
            (o.tools.parse_fd_embedded_json_content_html = function (e) {
              let t = null;
              try {
                const n = e[8][1];
                for (let e of n) t = (t || "") + e[2][1];
              } catch (e) {}
              return t;
            }),
            (o.tools.parse_fd_request_payload_get_email2 = function (e, t) {
              try {
                return e[1][1].filter((e) => e[0] === t)[0];
              } catch (e) {
                return {};
              }
            }),
            (o.tools.parse_fd_embedded_json_get_email = function (e, t) {
              try {
                return e[1][4].filter((e) => e[0] === t)[0];
              } catch (e) {
                return {};
              }
            }),
            (o.tools.parse_fd_request_payload = function (e) {
              let t = e[1];
              if (!t || !Array.isArray(t)) return null;
              try {
                const e = [],
                  n = t;
                for (let t of n) {
                  const n = t[0];
                  let r = t[2];
                  for (let i of r) {
                    const r = i[0],
                      a = o.tools.parse_fd_request_payload_get_email2(t, r),
                      s = i[1][34],
                      l = i[1][7],
                      c = i[1][4],
                      u = Number.parseInt(i[1][16]),
                      d = new Date(u),
                      f = o.tools.parse_fd_bv_is_draft(a[3]),
                      p = o.tools.parse_fd_request_html_payload(i),
                      h = o.tools.parse_fd_attachments(i[1][13]),
                      m = i[1][10][16];
                    let g = o.tools.parse_fd_bv_contact(a[1]);
                    g || (g = { address: m, name: "" });
                    const v = {
                      id: r,
                      is_draft: f,
                      legacy_email_id: s,
                      thread_id: n,
                      smtp_id: l,
                      subject: c,
                      timestamp: u,
                      content_html: p,
                      date: d,
                      from: g,
                      to: o.tools.parse_fd_bv_contacts(i[1][0]),
                      cc: o.tools.parse_fd_bv_contacts(i[1][1]),
                      bcc: o.tools.parse_fd_bv_contacts(i[1][2]),
                      attachments: h
                    };
                    o.cache.debug_xhr_fetch && ((v.$email_node = i), (v.$thread_node = t)), e.push(v);
                  }
                }
                return e;
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse email-data on fd request!", e), null;
              }
            }),
            (o.tools.parse_fd_embedded_json = function (e) {
              let t = e[1];
              if (!t || !Array.isArray(t)) return null;
              try {
                const e = [],
                  n = t;
                for (let t of n) {
                  const n = t[1][3];
                  let r = t[1][4];
                  for (let i of r) {
                    const r = i[0],
                      a = o.tools.parse_fd_embedded_json_get_email(t, r),
                      s = i[55],
                      l = i[13],
                      c = i[7],
                      u = o.tools.parse_fd_bv_is_draft(i[10]),
                      d = Number.parseInt(i[17]),
                      f = new Date(d),
                      p = o.tools.parse_fd_embedded_json_content_html(i),
                      h = o.tools.parse_fd_embedded_json_attachments(i[11]),
                      m = i[18][16];
                    let g = o.tools.parse_fd_bv_contact(a[1]);
                    g || (g = { address: m, name: "" });
                    const v = {
                      id: r,
                      is_draft: u,
                      legacy_email_id: s,
                      thread_id: n,
                      smtp_id: l,
                      subject: c,
                      timestamp: d,
                      content_html: p,
                      date: f,
                      from: g,
                      to: o.tools.parse_fd_bv_contacts(i[2]),
                      cc: o.tools.parse_fd_bv_contacts(i[3]),
                      bcc: o.tools.parse_fd_bv_contacts(i[4]),
                      attachments: h
                    };
                    o.cache.debug_xhr_fetch && ((v.$email_node = i), (v.$thread_node = t)), e.push(v);
                  }
                }
                return e;
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse email-data on embedded json!", e), null;
              }
            }),
            (o.tools.parse_bv_request_payload = function (e) {
              let t = e[2];
              if (!t || !Array.isArray(t)) return null;
              try {
                const e = [],
                  n = t;
                for (let t of n) {
                  const n = t[0][0],
                    r = t[0][3];
                  let i = t[0][4];
                  for (let a of i) {
                    const i = a[0],
                      s = a[55],
                      l = "",
                      c = n,
                      u = Number.parseInt(a[17]),
                      d = new Date(u),
                      f = "",
                      p = o.tools.parse_fd_bv_is_draft(a[10]),
                      h = [],
                      m = {
                        id: i,
                        is_draft: p,
                        legacy_email_id: s,
                        thread_id: r,
                        smtp_id: l,
                        subject: c,
                        timestamp: u,
                        content_html: f,
                        date: d,
                        from: { address: void 0 !== a[1][1] ? a[1][1] : "", name: void 0 !== a[1][2] ? a[1][2] : "" },
                        to: [],
                        cc: [],
                        bcc: [],
                        attachments: h
                      };
                    o.cache.debug_xhr_fetch && ((m.$email_node = a), (m.$thread_node = t)), e.push(m);
                  }
                }
                return e;
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse email-data on bv request!", e), null;
              }
            }),
            (o.tools.parse_bv_embedded_json = function (e) {
              let t = e[0][0];
              if (!t || !Array.isArray(t)) return null;
              try {
                const e = [],
                  n = t;
                for (let t of n) {
                  const n = t[4][0],
                    r = t[4][3];
                  let i = t[4][4];
                  for (let a of i) {
                    const i = a[0],
                      s = a[55],
                      l = "",
                      c = n,
                      u = Number.parseInt(a[17]),
                      d = new Date(u),
                      f = "",
                      p = o.tools.parse_fd_bv_is_draft(a[10]),
                      h = [],
                      m = {
                        id: i,
                        is_draft: p,
                        legacy_email_id: s,
                        thread_id: r,
                        smtp_id: l,
                        subject: c,
                        timestamp: u,
                        content_html: f,
                        date: d,
                        from: { address: void 0 !== a[1][1] ? a[1][1] : "", name: void 0 !== a[1][2] ? a[1][2] : "" },
                        to: [],
                        cc: [],
                        bcc: [],
                        attachments: h
                      };
                    o.cache.debug_xhr_fetch && ((m.$email_node = a), (m.$thread_node = t)), e.push(m);
                  }
                }
                return e;
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse email-data on bv request!", e), null;
              }
            }),
            (o.tools.parse_sent_message_html_payload = function (e) {
              let t = null;
              try {
                const n = e[9][2];
                for (let e of n) t = (t || "") + e[2];
              } catch (e) {}
              return t;
            }),
            (o.tools.parse_sent_message_attachments = function (e) {
              let t = [];
              if (Array.isArray(e)) for (let n of e) t.push({ id: n[5], name: n[2], type: n[1], url: n[6], size: Number.parseInt(n[3]) });
              return t;
            }),
            (o.tools.parse_sent_message_payload = function (e) {
              try {
                let t = e;
                const n = t[0],
                  r = t[7],
                  i = Number.parseInt(t[6]),
                  a = new Date(i),
                  s = o.tools.parse_sent_message_html_payload(t),
                  l = t[8][6],
                  c = o.tools.parse_sent_message_attachments(t[11]),
                  u = o.tools.parse_fd_bv_contact(t[1]),
                  d = o.tools.parse_fd_bv_contacts(t[2]);
                return {
                  1: n,
                  id: n,
                  subject: r,
                  timestamp: i,
                  content_html: s,
                  ishtml: l,
                  date: a,
                  from: u,
                  to: d,
                  cc: o.tools.parse_fd_bv_contacts(t[3]),
                  bcc: o.tools.parse_fd_bv_contacts(t[4]),
                  attachments: c,
                  email_node: e
                };
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse sent message!", e), null;
              }
            }),
            (o.tools.parse_sent_message_payload_new = function (e) {
              try {
                const t = (e) => (e && e[1] ? { name: e[2] || "", address: e[1] } : void 0),
                  n = (e) => (Array.isArray(e) ? e.map(t).filter((e) => e) : []),
                  r = (e) =>
                    Array.isArray(e) ? e.map((e) => ({ id: e[4], name: e[1], type: e[0], url: e[5], size: Number.parseInt(e[2]) })) : [],
                  i = (e) => {
                    let t = null;
                    try {
                      const n = e[8][1];
                      for (let e of n) t = (t || "") + e[1];
                    } catch (e) {
                      o.tools.error("Failed to parse html", e);
                    }
                    return t;
                  };
                let a = e;
                const s = a[0],
                  l = a[7],
                  c = a[6],
                  u = new Date(c),
                  d = i(a),
                  f = a[8][6],
                  p = r(a[11]),
                  h = t(a[1]),
                  m = n(a[2]);
                return {
                  1: s,
                  id: s,
                  subject: l,
                  timestamp: c,
                  content_html: d,
                  ishtml: f,
                  date: u,
                  from: h,
                  to: m,
                  cc: n(a[3]),
                  bcc: n(a[4]),
                  attachments: p,
                  email_node: e
                };
              } catch (e) {
                return console.warn("Gmail.js encountered an error trying to parse sent message!", e), null;
              }
            }),
            (o.tools.parse_request_payload = function (e, t, n) {
              const r = o.tools.get_pathname_from_url(e.url_raw);
              if (!n && !r) return;
              const i = (r || "").endsWith("/i/s"),
                a = (r || "").endsWith("/i/fd");
              if (!n && !a && !i) return;
              a && (t.load_email_data = [null]);
              const s = o.tools.extract_from_graph(e, o.check.data.is_thread),
                l = [
                  ...o.tools.extract_from_graph(e.body_params, o.check.data.is_email),
                  ...o.tools.extract_from_graph(e.body_params, o.check.data.is_email_new)
                ];
              for (let n of l)
                for (let r in n) {
                  let i = n[r];
                  if (o.check.data.is_smartlabels_array(i)) {
                    let r = o.check.data.is_email_new(n)
                      ? o.tools.parse_sent_message_payload_new(n)
                      : o.tools.parse_sent_message_payload(n);
                    -1 !== i.indexOf("^pfg")
                      ? (t.send_message = [e.url, e.body, r])
                      : i.indexOf("^scheduled") > -1 && (t.send_scheduled_message = [e.url, e.body, r]);
                  }
                }
              try {
                if (Array.isArray(s) && o.check.data.is_thread(s[0])) {
                  const n = o.tools.check_event_type(s[0]);
                  if (n) {
                    const r = s.map((e) => o.tools.get_thread_data(e)),
                      i = s.map((e) => o.tools.get_thread_id(e)),
                      a = r.map((e) => o.tools.get_message_ids(e)).reduce((e, t) => e.concat(t), []);
                    t[n] = [null, e.url, e.body, a, i];
                  }
                }
              } catch (e) {
                console.error("Error: ", e);
              }
            }),
            (o.tools.parse_response = function (e) {
              if (o.check.data.is_json_string(e))
                try {
                  return JSON.parse(e);
                } catch (e) {}
              if (e.startsWith("<!DOCTYPE html") || -1 !== e.indexOf("display:inline-block")) return [];
              let t = [];
              try {
                for (e = (e = e.replace(/\n/g, " ")).substring(e.indexOf("'") + 1, e.length); e.replace(/\s/g, "").length > 1; ) {
                  let n = e.substring(0, e.indexOf("[")).replace(/\s/g, "");
                  n || (n = e.length);
                  let r = parseInt(n, 10) - 2 + e.indexOf("["),
                    o = e.substring(e.indexOf("["), r),
                    i = JSON.parse(o);
                  t.push(i), (e = (e = e.substring(e.indexOf("["), e.length)).substring(o.length, e.length));
                }
              } catch (e) {}
              return t;
            }),
            (o.tools.parse_attachment_url = function (e) {
              var t = e.split(":");
              return { type: t[0], url: t[2] + ":" + t[4] + ":" + t[5] };
            });
          var a = function (e, t) {
              for (var n in t) e[n] = t[n];
            },
            s = function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                e.push(r);
              }
              return e;
            };
          (o.tools.parse_requests = function (e, t) {
            (e.url_raw = e.url),
              (e.url = o.tools.parse_url(e.url)),
              "object" == typeof e.body
                ? ((e.body_params = e.body), (e.body_is_object = !0))
                : o.check.data.is_json_string(e.body)
                ? (e.body_params = JSON.parse(e.body))
                : void 0 !== e.body
                ? (e.body_params = o.tools.deparam(e.body))
                : (e.body_params = {}),
              "object" != typeof o.tracker.events &&
                "object" != typeof o.tracker.actions &&
                ((o.tracker.events = []), (o.tracker.actions = [])),
              o.tracker.events.unshift(e);
            var n = o.tools.parse_actions(e, t);
            return (
              "POST" === e.method && "string" == typeof e.url.act && o.tracker.actions.unshift(e),
              o.tracker.events.length > 50 && o.tracker.events.pop(),
              o.tracker.actions.length > 10 && o.tracker.actions.pop(),
              n
            );
          }),
            (o.tools.patch = function (e, t) {
              t(e);
            }),
            (o.tools.cache_email_data = function (e, t) {
              if (null === e) return;
              const n = o.cache;
              let r = !1;
              ("fd_request_payload" !== t && "fd_embedded_json" !== t) || (r = !0);
              for (let t of e) {
                (void 0 === n.emailIdCache[t.id] || r) && ((n.emailIdCache[t.id] = t), (n.emailLegacyIdCache[t.legacy_email_id] = t));
                let e = n.threadCache[t.thread_id];
                if (
                  (e || ((e = { thread_id: t.thread_id, emails: [] }), (n.threadCache[t.thread_id] = e)),
                  0 === e.emails.filter((e) => e.id === t.id).length)
                )
                  e.emails.push(t);
                else if (r) {
                  let n = e.emails.findIndex((e) => e.id === t.id);
                  e.emails[n] = t;
                }
              }
            }),
            (o.tools.xhr_watcher = function () {
              if (o.tracker.xhr_init) return;
              (o.instanceId = Symbol("gmail-js-" + (performance ? performance.now() : Date.now()))), (o.tracker.xhr_init = !0);
              const e = o.helper.get_xhr_window();
              o.tools.patch(e.XMLHttpRequest.prototype.open, (t) => {
                e.XMLHttpRequest.prototype.open = function (e, n, r, i, a) {
                  var s = t.apply(this, arguments);
                  return (
                    (this.xhrParams = { method: e.toString(), url: n.toString() }),
                    Object.defineProperty(this, o.instanceId, { value: Object.freeze({ method: e.toString(), url: n.toString() }) }),
                    s
                  );
                };
              }),
                o.tools.patch(e.XMLHttpRequest.prototype.send, (n) => {
                  e.XMLHttpRequest.prototype.send = function (e) {
                    var r = !1;
                    if (
                      (this.xhrParams &&
                        ((this.xhrParams.body = e),
                        "string" != typeof this.xhrParams.url &&
                          this[o.instanceId] &&
                          this[o.instanceId].url &&
                          ((this.xhrParams.url = this[o.instanceId].url), delete this.xhrParams.url_raw, delete this.xhrParams.body_params),
                        (r = o.tools.parse_requests(this.xhrParams, this))),
                      o.observe.trigger("before", r, this) &&
                        (e = arguments[0] =
                          o.check.is_new_data_layer()
                            ? this.xhrParams.body_is_object
                              ? this.xhrParams.body_params
                              : JSON.stringify(this.xhrParams.body_params)
                            : this.xhrParams.body_is_object
                            ? this.xhrParams.body_params
                            : t.param(this.xhrParams.body_params, !0).replace(/\+/g, "%20")),
                      o.observe.bound(r, "after") || o.check.is_new_data_layer())
                    ) {
                      var i = this.onreadystatechange,
                        a = this;
                      this.onreadystatechange = function (e) {
                        if (this.readyState === this.DONE) {
                          if (
                            ("" === e.target.responseType || "text" === e.target.responseType
                              ? (a.xhrResponse = o.tools.parse_response(e.target.responseText))
                              : (a.xhrResponse = e.target.response),
                            o.check.is_new_data_layer())
                          ) {
                            const e = o.tools.get_pathname_from_url(a.xhrParams.url_raw);
                            if (e.endsWith("/i/fd")) {
                              let e = o.tools.parse_fd_request_payload(a.xhrResponse);
                              null != e && (o.tools.cache_email_data(e, "fd_request_payload"), (r.load_email_data = [e]));
                            }
                            if (e.endsWith("/i/bv")) {
                              let e = o.tools.parse_bv_request_payload(a.xhrResponse);
                              null != e && (o.tools.cache_email_data(e, "bv_request_payload"), (r.load_email_data = [e]));
                            }
                          }
                          o.observe.trigger("after", r, a);
                        }
                        i && i.apply(this, arguments);
                      };
                    }
                    var s = n.apply(this, arguments);
                    return o.observe.trigger("on", r, this), s;
                  };
                });
            }),
            (o.tools.embedded_data_watcher = function () {
              if (!o.tracker.embedded_data_init) {
                o.tracker.embedded_data_init = !0;
                var e = window._GM_setData;
                window._GM_setData = function (t) {
                  if (void 0 !== t && void 0 !== t.Cl6csf && void 0 !== t.Cl6csf[0] && void 0 !== t.Cl6csf[0][2]) {
                    let e = o.tools.parse_fd_embedded_json(JSON.parse(t.Cl6csf[0][2]));
                    o.tools.cache_email_data(e, "fd_embedded_json");
                  }
                  if (void 0 !== t && void 0 !== t.a6jdv && void 0 !== t.a6jdv[0] && void 0 !== t.a6jdv[0][2]) {
                    let e = o.tools.parse_bv_embedded_json(JSON.parse(t.a6jdv[0][2]));
                    o.tools.cache_email_data(e, "bv_embedded_json");
                  }
                  if (void 0 !== t && void 0 !== t.sBEv4c) for (let e of t.sBEv4c) "mla" === e[0] && (o.tracker.mla = e);
                  e(t);
                };
              }
            }),
            (o.helper.get_xhr_window = function () {
              if (o.check.is_new_gui()) return top;
              var e = null;
              return (
                top.document.getElementById("js_frame")
                  ? (e = top.document.getElementById("js_frame"))
                  : r && (e = r.top.document.getElementById("js_frame")),
                e || (e = r ? r.top : top),
                e.contentDocument ? e.contentDocument.defaultView : e
              );
            }),
            (o.observe.http_requests = function () {
              return o.tracker.events;
            }),
            (o.observe.actions = function () {
              return o.tracker.actions;
            }),
            (o.observe.bind = function (e, t, n) {
              "object" != typeof o.tracker.watchdog &&
                ((o.tracker.watchdog = { before: {}, on: {}, after: {}, dom: {} }), (o.tracker.bound = {})),
                "object" != typeof o.tracker.watchdog[e] && o.tools.error("api.observe.bind called with invalid type: " + e),
                "dom" !== e && o.tools.xhr_watcher(),
                "object" != typeof o.tracker.watchdog[e][t] && (o.tracker.watchdog[e][t] = []),
                o.tracker.watchdog[e][t].push(n),
                (o.tracker.bound[t] = void 0 === o.tracker.bound[t] ? 1 : o.tracker.bound[t] + 1),
                (o.tracker.bound[e] = void 0 === o.tracker.bound[e] ? 1 : o.tracker.bound[e] + 1);
            }),
            (o.observe.on = function (e, t, n) {
              if (o.observe.on_dom(e, t)) return !0;
              o.observe.bind("on", e, t), n && o.observe.after(e, t);
            }),
            (o.observe.before = function (e, t) {
              o.observe.bind("before", e, t);
            }),
            (o.observe.after = function (e, t) {
              o.observe.bind("after", e, t);
            }),
            (o.observe.bound = function (e, n) {
              if ("object" != typeof o.tracker.watchdog) return !1;
              if (e) {
                if ("object" == typeof e) {
                  var r = !1;
                  return (
                    t.each(e, function (e, t) {
                      "object" == typeof o.tracker.watchdog[n][e] && (r = !0);
                    }),
                    r
                  );
                }
                return n ? "object" == typeof o.tracker.watchdog[n][e] : o.tracker.bound[e] > 0;
              }
              if (n) return o.tracker.bound[n] > 0;
              o.tools.error("api.observe.bound called with invalid args");
            }),
            (o.observe.off = function (e, n) {
              if ("object" != typeof o.tracker.watchdog) return !0;
              var r = n ? [n] : ["before", "on", "after", "dom"];
              t.each(r, function (n, r) {
                if ("object" != typeof o.tracker.watchdog[r]) return !0;
                e
                  ? "object" == typeof o.tracker.watchdog[r][e] &&
                    ((o.tracker.bound[e] -= o.tracker.watchdog[r][e].length),
                    (o.tracker.bound[r] -= o.tracker.watchdog[r][e].length),
                    delete o.tracker.watchdog[r][e])
                  : t.each(o.tracker.watchdog[r], function (e, t) {
                      "object" == typeof o.tracker.watchdog[r][e] &&
                        ((o.tracker.bound[e] -= o.tracker.watchdog[r][e].length),
                        (o.tracker.bound[r] -= o.tracker.watchdog[r][e].length),
                        delete o.tracker.watchdog[r][e]);
                    });
              });
            }),
            (o.observe.trigger = function (e, n, r) {
              if (!n) return !1;
              var i = !1;
              return (
                t.each(n, function (n, a) {
                  (a = t.extend([], a)),
                    "after" === e && a.push(r.xhrResponse),
                    a.push(r),
                    o.observe.bound(n, e) &&
                      ((i = !0),
                      t.each(o.tracker.watchdog[e][n], function (e, t) {
                        t.apply(void 0, a);
                      }));
                }),
                i
              );
            }),
            (o.observe.trigger_dom = function (e, n, r) {
              r ||
                (r = function (e, t) {
                  t(e);
                }),
                o.tracker.watchdog.dom[e] &&
                  t.each(o.tracker.watchdog.dom[e], function (e, t) {
                    r(n, t);
                  });
            }),
            (o.observe.initialize_dom_observers = function () {
              (o.tracker.dom_observer_init = !0),
                (o.tracker.supported_observers = ["view_thread", "view_email", "load_email_menu", "recipient_change", "compose"]),
                (o.tracker.dom_observers = {
                  view_thread: {
                    class: ["Bu", "nH"],
                    sub_selector: "div.if,div.iY",
                    handler: function (e, t) {
                      t((e = new o.dom.thread(e)));
                    }
                  },
                  view_email: {
                    class: ["Bu", "nH", ""],
                    sub_selector: "div.adn",
                    handler: function (e, t) {
                      t((e = new o.dom.email(e)));
                    }
                  },
                  load_email_menu: {
                    class: "J-N",
                    selector: "div[role=menu] div[role=menuitem]:first-child",
                    handler: function (e, t) {
                      t((e = e.closest("div[role=menu]")));
                    }
                  },
                  recipient_change: {
                    class: ["vR", "afV"],
                    handler: function (e, t) {
                      "object" != typeof o.tracker.recipient_matches && (o.tracker.recipient_matches = []),
                        o.tracker.recipient_matches.push(e),
                        setTimeout(function () {
                          if (!o.tracker.recipient_matches.length) return;
                          let n = [];
                          o.tracker.recipient_matches.forEach((e) => {
                            0 === n.length && (n = e.closest("div.M9"));
                          }),
                            0 === n.length && o.tools.error("Can't find composeRoot for " + e);
                          var r = new o.dom.compose(n),
                            i = r.recipients();
                          t(r, i, o.tracker.recipient_matches), (o.tracker.recipient_matches = []);
                        }, 100);
                    }
                  },
                  compose: {
                    class: "An",
                    handler: function (e, t) {
                      var n = e;
                      (e = e.closest("div.M9")).length &&
                        ((e = new o.dom.compose(e)).is_inline() ||
                          n
                            .closest("div.AD")
                            .find(".Ha")
                            .mouseup(function () {
                              return o.tracker.composeCancelledCallback && o.tracker.composeCancelledCallback(e), !0;
                            }),
                        t(e, e.type()));
                    }
                  }
                }),
                o.tracker.custom_supported_observers &&
                  (t.merge(o.tracker.supported_observers, o.tracker.custom_supported_observers),
                  t.extend(!0, o.tracker.dom_observers, o.tracker.custom_dom_observers)),
                (o.tracker.dom_observer_map = {}),
                t.each(o.tracker.dom_observers, function (e, n) {
                  t.isArray(n.class) || (n.class = [n.class]),
                    t.each(n.class, function (t, n) {
                      o.tracker.dom_observer_map[n] || (o.tracker.dom_observer_map[n] = []), o.tracker.dom_observer_map[n].push(e);
                    });
                });
            }),
            (o.observe.register = function (e, n) {
              o.tracker.dom_observer_init &&
                o.tools.error("Error: Please register all custom DOM observers before binding handlers using gmail.observe.on etc"),
                o.tracker.custom_supported_observers ||
                  ((o.tracker.custom_supported_observers = []), (o.tracker.custom_dom_observers = {}));
              var r = {};
              "object" != typeof n || t.isArray(n)
                ? (r.class = n)
                : t.each(["class", "selector", "sub_selector", "handler"], function (e, t) {
                    n[t] && (r[t] = n[t]);
                  }),
                o.tracker.custom_supported_observers.push(e),
                (o.tracker.custom_dom_observers[e] = r);
            });
          var l = function () {
            o.tracker.jackPreventionInstalled ||
              (window.addEventListener("click", (e) => {
                const t = (function (e) {
                  return e.path ? e.path[0] : e.target;
                })(e);
                if (t && t !== document.body) {
                  const n = t.querySelector(":scope > .gmailjs");
                  n && (n.click(), e.preventDefault());
                }
              }),
              (o.tracker.jackPreventionInstalled = !0));
          };
          (o.observe.on_dom = function (e, n) {
            if ((o.tracker.dom_observer_init || o.observe.initialize_dom_observers(), t.inArray(e, o.tracker.supported_observers) > -1))
              return (
                o.tracker.observing_dom ||
                  ((o.tracker.observing_dom = !0),
                  t(window.document).on("DOMNodeInserted", function (e) {
                    o.tools.insertion_observer(e.target, o.tracker.dom_observers, o.tracker.dom_observer_map);
                  }),
                  new MutationObserver(function (e) {
                    for (var n = 0; n < e.length; n++)
                      for (var r = e[n], i = r.removedNodes, a = 0; a < i.length; a++) {
                        var s = i[a];
                        if ("agh" === s.className && s.querySelector("div[data-hovercard-id]")) {
                          let e = o.tracker.dom_observer_map.afV,
                            n = o.tracker.dom_observers.recipient_change.handler;
                          o.observe.trigger_dom(e, t(r.target), n);
                        } else if ("vR" === s.className) {
                          let e = o.tracker.dom_observer_map.vR,
                            n = o.tracker.dom_observers.recipient_change.handler;
                          o.observe.trigger_dom(e, t(r.target), n);
                        }
                      }
                  }).observe(document.body, { subtree: !0, childList: !0 })),
                o.observe.bind("dom", e, n),
                !0
              );
            if ("compose_cancelled" === e) return (o.tracker.composeCancelledCallback = n), !0;
            if ("load" === e) {
              if (o.dom.inbox_content().length) return l(), n();
              var r = 0,
                i = setInterval(function () {
                  if (o.dom.inbox_content().length > 0) return clearInterval(i), l(), n();
                  ++r > 50 && (clearInterval(i), setTimeout(n, 5e3));
                }, 200);
              return !0;
            }
            return !1;
          }),
            (o.tools.insertion_observer = function (e, n, r, i) {
              if (r) {
                var a = e.className || "",
                  s = a.trim ? a.trim().split(/\s+/) : [];
                s.length || s.push(""),
                  t.each(s, function (i, a) {
                    var s = r[a];
                    if (s)
                      for (var l of s)
                        if (l && o.tracker.watchdog && o.tracker.watchdog.dom[l]) {
                          var c = t(e),
                            u = n[l];
                          if (u.selector && !c.is(u.selector)) return;
                          if ((u.sub_selector && (c = c.find(u.sub_selector)), c.length)) {
                            var d = u.handler
                              ? u.handler
                              : function (e, t) {
                                  t(e);
                                };
                            o.observe.trigger_dom(l, c, d);
                          }
                        }
                  });
              }
            }),
            (o.tools.make_request = function (e, n, r) {
              var o = decodeURIComponent(e.replace(/%23/g, "#-#-#")),
                i = { type: (n = n || "GET"), url: (o = encodeURI(o).replace(/#-#-#/gi, "%23")), async: !1, dataType: "text" };
              return r && (i.cache = !1), t.ajax(i).responseText;
            }),
            (o.tools.make_request_async = function (e, n, r, o, i) {
              var a = decodeURIComponent(e.replace(/%23/g, "#-#-#")),
                s = { type: (n = n || "GET"), url: (a = encodeURI(a).replace(/#-#-#/gi, "%23")), async: !0, dataType: "text" };
              i && (s.cache = !1),
                t
                  .ajax(s)
                  .done(function (e, t, n) {
                    r(n.responseText);
                  })
                  .fail(function (e, t, n) {
                    console.error("Request Failed", n), "function" == typeof o && o(e, t, n);
                  });
            }),
            (o.tools.make_request_download_promise = function (e, t) {
              const n = Date.now();
              e += "&cacheCounter=" + n;
              let r = "text";
              return (
                t && (r = "arraybuffer"),
                new Promise((n, o) => {
                  const i = new XMLHttpRequest();
                  i.open("GET", e, !0),
                    (i.responseType = r),
                    (i.onreadystatechange = () => {
                      if (i.readyState === XMLHttpRequest.DONE && i.status >= 200 && i.status <= 302) {
                        const e = i.response;
                        if (e)
                          if (t) {
                            const t = new Uint8Array(e);
                            n(t);
                          } else n(e);
                      }
                    }),
                    (i.onerror = (e) => {
                      o(e);
                    }),
                    i.send();
                })
              );
            }),
            (o.tools.parse_view_data = function (e) {
              for (var t = [], n = [], r = 0; r < e.length; r++)
                if ("tb" === e[r][0]) for (var o = 0; o < e[r][2].length; o++) n.push(e[r][2][o]);
              for (var i = 0; i < n.length; i++) {
                var a = n[i];
                t.push({ id: a[0], title: a[9], excerpt: a[10], time: a[15], sender: a[28], attachment: a[13], labels: a[5] });
              }
              return t;
            }),
            (o.helper.get.is_delegated_inbox = function () {
              return 1 === t(".gb_Ba a.gb_f svg").length;
            }),
            (o.helper.get.visible_emails_pre = function (e) {
              var n = o.get.current_page(),
                r =
                  window.location.origin +
                  window.location.pathname +
                  "?ui=2&ik=" +
                  o.tracker.ik +
                  "&rid=" +
                  o.tracker.rid +
                  "&view=tl&num=120&rt=1",
                i = t(".aqK:visible .Dj").find("span:first").text().replace(",", "").replace(".", "").split("–")[0];
              r += i ? "&start=" + (i = parseInt(i - 1)) + "&sstart=" + i : "&start=0";
              var a = "";
              if (0 === n.indexOf("label/")) r += "&cat=" + n.split("/")[1] + "&search=cat";
              else if (0 === n.indexOf("category/"))
                -1 !== n.indexOf("forums")
                  ? (a = "group")
                  : -1 !== n.indexOf("updates")
                  ? (a = "notification")
                  : -1 !== n.indexOf("promotion")
                  ? (a = "promo")
                  : -1 !== n.indexOf("social") && (a = "social"),
                  (r += "&cat=^smartlabel_" + a + "&search=category");
              else if (0 === n.indexOf("search/")) {
                var s = t("input[name=at]").val();
                r += "&qs=true&q=" + n.split("/")[1] + "&at=" + s + "&search=query";
              } else
                "inbox" === n
                  ? "true" === t("div[aria-label='Social']").attr("aria-selected")
                    ? (r += "&cat=^smartlabel_" + (a = "social") + "&search=category")
                    : "true" === t("div[aria-label='Promotions']").attr("aria-selected")
                    ? (r += "&cat=^smartlabel_" + (a = "promo") + "&search=category")
                    : "true" === t("div[aria-label='Updates']").attr("aria-selected")
                    ? (r += "&cat=^smartlabel_" + (a = "notification") + "&search=category")
                    : "true" === t("div[aria-label='Forums']").attr("aria-selected")
                    ? (r += "&cat=^smartlabel_" + (a = "group") + "&search=category")
                    : e
                    ? (r += "&search=" + e)
                    : o.check.is_google_apps_user()
                    ? (r += "&search=inbox")
                    : (r += "&search=mbox")
                  : (r += "&search=" + n);
              return r;
            }),
            (o.helper.get.visible_emails_post = function (e) {
              var t = [];
              if (!e) return t;
              var n = e.substring(e.indexOf("["), e.length),
                r = JSON.parse(n);
              for (var i in ((o.tracker.view_data = r), o.tracker.view_data))
                if ("function" != typeof o.tracker.view_data[i]) {
                  var a = o.tools.parse_view_data(o.tracker.view_data[i]);
                  a.length > 0 && s(t, a);
                }
              return t;
            }),
            (o.get.visible_emails = function (e) {
              var t = o.helper.get.visible_emails_pre(e),
                n = o.tools.make_request(t);
              return o.helper.get.visible_emails_post(n);
            }),
            (o.get.visible_emails_async = function (e, t) {
              var n = o.helper.get.visible_emails_pre(t);
              o.tools.make_request_async(n, "GET", function (t) {
                var n = o.helper.get.visible_emails_post(t);
                e(n);
              });
            }),
            (o.get.selected_emails_data = function (e) {
              var n = [];
              if (o.check.is_inside_email()) n.push(o.get.email_data());
              else if (t("[gh='tl'] div[role='checkbox'][aria-checked='true']").length) {
                var r = null,
                  i = o.get.visible_emails(e);
                t("[gh='tl'] div[role='checkbox']").each(function (e) {
                  "true" === t(this).attr("aria-checked") && ((r = o.get.email_data(i[e].id)), n.push(r));
                });
              }
              return n;
            }),
            (o.get.current_page = function (e) {
              var t = (e = e || window.location.hash).split("#").pop().split("?").shift() || "inbox";
              if (t.match(/\/[0-9a-zA-Z]{16,}$/gi)) return "email";
              if (0 === t.indexOf("search/") || 0 === t.indexOf("category/") || 0 === t.indexOf("label/")) {
                var n = t.split("/");
                return n[0] + "/" + n[1];
              }
              return t.split("/").shift();
            }),
            (o.tools.infobox = function (e, n, r) {
              var o = t(".b8.UC");
              if (o.length > 0) {
                o.stop(!1, !0);
                var i = o.find(".vh");
                if ((r ? i.html(e) : i.text(e), void 0 !== n)) {
                  var a = o.attr("style");
                  o.removeAttr("style").fadeTo(n, 0, function () {
                    t(this).attr("style", a);
                  });
                } else o.removeAttr("style");
              }
            }),
            (o.tools.rerender = function (e) {
              var t,
                n = window.location.href;
              (t = -1 !== window.location.hash.indexOf("/") ? n.replace(/#.*?\//, "#/") : n.replace(/#.*/, "#")),
                window.location.replace(t),
                setTimeout(function () {
                  window.location.replace(n), window.history.back(), e && e();
                }, 0);
            }),
            (o.tools.get_reply_to = function (e) {
              var t = e ? e[4] : [];
              return 0 !== t.length ? o.tools.extract_email_address(t[0]) : null;
            }),
            (o.tools.parse_attachment_data = function (e) {
              if (!e[7] || !e[7][0]) return null;
              var t = "";
              "undefined" != typeof window && (t = window.location.origin + window.location.pathname);
              var n = e[7][0];
              o.tracker.attachment_data = n;
              for (var r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                r.push({ attachment_id: a[0], name: a[1], type: a[2], size: a[3], url: t + a[9] });
              }
              return r;
            }),
            (o.tools.parse_email_data = function (e) {
              var n = {};
              for (var r in e) {
                var i = e[r];
                if (
                  ("cs" === i[0] &&
                    ((n.thread_id = i[1]),
                    (n.first_email = i[8][0]),
                    (n.last_email = i[2]),
                    (n.total_emails = i[3]),
                    (n.total_threads = i[8]),
                    (n.people_involved = i[15]),
                    (n.subject = i[23])),
                  "ms" === i[0])
                ) {
                  void 0 === n.threads && (n.threads = {}),
                    (n.threads[i[1]] = {}),
                    (n.threads[i[1]].is_deleted = i[9] && i[9].indexOf("^k") > -1),
                    (n.threads[i[1]].reply_to_id = i[2]),
                    (n.threads[i[1]].from = i[5]),
                    (n.threads[i[1]].from_email = i[6]),
                    (n.threads[i[1]].timestamp = i[7]),
                    (n.threads[i[1]].datetime = i[24]),
                    (n.threads[i[1]].attachments = i[21].split(",")),
                    (n.threads[i[1]].attachments_details = i[13] ? o.tools.parse_attachment_data(i[13]) : null),
                    (n.threads[i[1]].subject = i[12]),
                    (n.threads[i[1]].content_html = i[13] ? i[13][6] : i[8]),
                    (n.threads[i[1]].to = i[13] ? i[13][1] : void 0 !== i[37] ? i[37][1] : []),
                    (n.threads[i[1]].cc = i[13] ? i[13][2] : []),
                    (n.threads[i[1]].bcc = i[13] ? i[13][3] : []),
                    (n.threads[i[1]].reply_to = o.tools.get_reply_to(i[13])),
                    (n.threads[i[1]].labels = i[9]);
                  try {
                    n.threads[i[1]].content_plain = i[13] ? t(i[13][6]).text() : i[8];
                  } catch (e) {
                    n.threads[i[1]].content_plain = i[13] ? i[13][6] : i[8];
                  }
                }
              }
              return n;
            }),
            (o.helper.get.email_data_pre = function (e) {
              i("Migrate code to use gmail.new.get.email_data() to fix this problem."),
                o.check.is_inside_email() && void 0 === e && (e = o.get.thread_id());
              var t = null;
              return (
                void 0 !== e &&
                  (t =
                    window.location.origin +
                    window.location.pathname +
                    "?ui=2&ik=" +
                    o.tracker.ik +
                    "&rid=" +
                    o.tracker.rid +
                    "&view=cv&th=" +
                    e +
                    "&msgs=&mb=0&rt=1&search=inbox"),
                t
              );
            }),
            (o.helper.get.email_data_post = function (e) {
              if (!e) return {};
              var t = e.substring(e.indexOf("["), e.length),
                n = JSON.parse(t);
              return (o.tracker.email_data = n[0]), o.tools.parse_email_data(o.tracker.email_data);
            }),
            (o.get.email_data = function (e) {
              var t = o.helper.get.email_data_pre(e);
              if (null !== t) {
                var n = o.tools.make_request(t);
                return o.helper.get.email_data_post(n);
              }
              return {};
            }),
            (o.get.email_data_async = function (e, t) {
              var n = o.helper.get.email_data_pre(e);
              null !== n
                ? o.tools.make_request_async(n, "GET", function (e) {
                    var n = o.helper.get.email_data_post(e);
                    t(n);
                  })
                : t({});
            }),
            (o.helper.get.legacy_email_id = function (e) {
              if (!e) return null;
              if (o.check.data.is_legacy_email_id(e)) return e;
              if (e.legacy_email_id) return e.legacy_email_id;
              if (o.check.data.is_email_id(e)) {
                console.warn(
                  "GmailJS: Warning! Using new-style ID in method expecting legacy-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!"
                );
                const t = o.cache.emailIdCache[e];
                return t && t.legacy_email_id;
              }
              return e.$el && e.$el[0] && (e = e.$el[0]), e.dataset && e.dataset.legacyMessageId ? e.dataset.legacyMessageId : null;
            }),
            (o.helper.get.new_email_id = function (e) {
              if (!e) return null;
              if (o.check.data.is_email_id(e)) return e;
              if (e.id && !e.$el) return e.id;
              if (o.check.data.is_legacy_email_id(e)) {
                console.warn(
                  "GmailJS: Warning! Using legacy-style ID in method expecting new-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!"
                );
                const t = o.cache.emailLegacyIdCache[e];
                return t && t.id;
              }
              if ((e.$el && e.$el[0] && (e = e.$el[0]), e.dataset && e.dataset.messageId)) {
                let t = e.dataset.messageId;
                return 0 === t.indexOf("#") && (t = t.substring(1)), t;
              }
              return null;
            }),
            (o.helper.get.thread_id = function (e) {
              if (!e) return null;
              if (o.check.data.is_thread_id(e)) return e;
              if (e.thread_id) return e.thread_id;
              if (o.check.data.is_email_id(e)) {
                console.warn(
                  "GmailJS: Warning! Using email-ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!"
                );
                const t = o.cache.emailIdCache[e];
                return t && t.thread_id;
              }
              if (o.check.data.is_legacy_email_id(e)) {
                console.warn(
                  "GmailJS: Warning! Using legacy-style ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!"
                );
                const t = o.cache.emailLegacyIdCache[e];
                return t && t.thread_id;
              }
              if ((e.$el && e.$el[0] && (e = e.$el[0]), e.dataset && e.dataset.threadPermId)) {
                let t = e.dataset.threadPermId;
                return 0 === t.indexOf("#") && (t = t.substring(1)), t;
              }
              if (e.dataset && e.dataset.messageId) {
                let t = e.dataset.messageId;
                0 === t.indexOf("#") && (t = t.substring(1)),
                  console.warn(
                    "GmailJS: Warning! Using DomEmail instance to lookup thread-ID. Attempting to resolve via cache, but there's no guarantee this will work!"
                  );
                const n = o.cache.emailIdCache[t];
                return n && n.thread_id;
              }
              return null;
            }),
            (o.helper.clean_thread_id = function (e) {
              return e.startsWith("#") && (e = e.substring(1)), e;
            }),
            (o.helper.get.email_source_pre = function (e) {
              if ((!e && o.check.is_inside_email() && (e = o.get.email_id()), o.check.data.is_legacy_email_id(e)))
                return window.location.origin + window.location.pathname + "?view=att&th=" + e + "&attid=0&disp=comp&safe=1&zw";
              const t = o.helper.get.new_email_id(e);
              return t
                ? window.location.origin + window.location.pathname + "?view=att&permmsgid=" + t + "&attid=0&disp=comp&safe=1&zw"
                : null;
            }),
            (o.get.email_source = function (e) {
              console.warn(
                "Gmail.js: This function has been deprecated and will be removed in an upcoming release! Please migrate to email_source_async or email_source_promise!"
              );
              var t = o.helper.get.email_source_pre(e);
              return null !== t ? o.tools.make_request(t, "GET", !0) : "";
            }),
            (o.get.email_source_async = function (e, t, n, r) {
              o.get.email_source_promise(e, r).then(t).catch(n);
            }),
            (o.get.email_source_promise = function (e, t) {
              const n = o.helper.get.email_source_pre(e);
              return null !== n
                ? o.tools.make_request_download_promise(n, t)
                : new Promise((e, t) => {
                    t("Unable to resolve URL for email source!");
                  });
            }),
            (o.get.displayed_email_data = function () {
              var e = o.get.email_data();
              return o.check.is_conversation_view() ? c(e) : u(e);
            }),
            (o.get.displayed_email_data_async = function (e) {
              o.get.email_data_async(void 0, function (t) {
                o.check.is_conversation_view() ? e(c(t)) : e(u(t));
              });
            });
          var c = function (e) {
              var t = e,
                n = t.threads,
                r = t.total_threads,
                o = 0 === (window.location.hash.split("#")[1] || "").indexOf("trash");
              for (var i in n) {
                var a = n[i];
                (o ? a.is_deleted : !a.is_deleted) || (delete n[i], r.splice(r.indexOf(i), 1), t.total_emails--);
              }
              return t;
            },
            u = function (e) {
              var t = {};
              for (var n in e.threads)
                if (document.querySelector("div[data-legacy-message-id='" + n + "']")) {
                  var r = e.threads[n];
                  (t.first_email = n),
                    (t.last_email = n),
                    (t.subject = e.subject),
                    (t.threads = {}),
                    (t.threads[n] = r),
                    (t.total_emails = 1),
                    (t.total_threads = [n]),
                    (t.people_involved = []),
                    t.people_involved.push([r.from, r.from_email]),
                    r.to.forEach(function (e) {
                      var n = o.tools.extract_email_address(e),
                        r = o.tools.extract_name(e.replace(n, "")) || "";
                      t.people_involved.push([r, n]);
                    });
                  break;
                }
              return t;
            };
          (o.check.is_conversation_view = function () {
            if (o.check.is_new_data_layer()) return -1 !== o.tracker.globals[24].indexOf(7164);
            for (var e = void 0, t = o.tracker.globals[17][4][1], n = 0; n < t.length; n++) {
              var r = t[n];
              if ("bx_vmb" === r[0]) {
                e = r[1];
                break;
              }
            }
            return "0" === e || void 0 === e;
          }),
            (o.tools.extract_email_address = function (e) {
              var t = e ? e.match(/[\+a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+/gi) : void 0;
              return t ? t[0] : void 0;
            }),
            (o.tools.extract_name = function (e) {
              var t = e ? e.match(/[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF"._\s-]+/gi) : void 0;
              return t && t[0] ? t[0].trim() : void 0;
            }),
            (o.tools.i18n = function (e) {
              var t;
              switch (o.get.localization()) {
                case "fr":
                  t = {
                    inbox: "Boîte de réception",
                    drafts: "Brouillons",
                    spam: "Spam",
                    forums: "Forums",
                    updates: "Mises à jour",
                    promotions: "Promotions",
                    social_updates: "Réseaux sociaux"
                  };
                  break;
                case "no":
                  t = {
                    inbox: "Innboks",
                    drafts: "Utkast",
                    spam: "Søppelpost",
                    forums: "Forumer",
                    updates: "Oppdateringer",
                    promotions: "Reklame",
                    social_updates: "Sosialt"
                  };
                  break;
                case "nl":
                  t = {
                    inbox: "Postvak IN",
                    drafts: "Concepten",
                    spam: "Spam",
                    forums: "Forums",
                    updates: "Updates",
                    promotions: "Reclame",
                    social_updates: "Sociaal"
                  };
                  break;
                case "it":
                  t = {
                    inbox: "Posta in arrivo",
                    drafts: "Bozza",
                    spam: "Spam",
                    forums: "Forum",
                    updates: "Aggiornamenti",
                    promotions: "Promozioni",
                    social_updates: "Social"
                  };
                  break;
                default:
                  t = {
                    inbox: "Inbox",
                    drafts: "Drafts",
                    spam: "Spam",
                    forums: "Forums",
                    updates: "Updates",
                    promotions: "Promotions",
                    social_updates: "Social Updates"
                  };
              }
              return t[e];
            });
          var d = function (e, n, r, o, i, a) {
            var s = t(document.createElement("div"));
            s.attr("class", "G-Ni J-J5-Ji");
            var l = t(document.createElement("div")),
              c = "T-I J-J5-Ji gmailjs ";
            return (
              (c += null != i && "" !== i ? r + i : r + o),
              l.attr("class", c),
              l.html(e),
              l.click(n),
              t(document.createElement("div")).attr("class", "asa"),
              s.html(l),
              a.append(s),
              s
            );
          };
          return (
            (o.tools.add_toolbar_button = function (e, t, n) {
              return d(e, t, "lS ", "T-I-ax7 ar7", n, o.dom.toolbar());
            }),
            (o.tools.add_right_toolbar_button = function (e, t, n) {
              return d(e, t, "ash ", "T-I-ax7 L3", n, o.dom.right_toolbar());
            }),
            (o.tools.add_compose_button = function (e, n, r, o) {
              var i = t(document.createElement("div"));
              i.attr("class", "gU Up"), i.attr("style", "cursor: pointer !important; transform: translateY(1px);");
              var a = t(document.createElement("div")),
                s = "T-I J-J5-Ji aoO T-I-atl L3 gmailjs gmailjscomposebutton ";
              void 0 !== o && (s += o),
                a.attr("class", s),
                a.attr("style", "margin-left: 8px; max-width: 500px;"),
                a.html(n),
                a.click(r),
                i.append(a);
              var l = e.find(".gU.Up").last();
              return i.insertAfter(l), a;
            }),
            (o.tools.add_more_send_option = function (e, n, r, o, i) {
              var a = t(document.createElement("div"));
              a.attr("class", "J-N yr"), a.attr("style", "user-select: none;"), a.attr("role", "menuitem");
              var s = t(document.createElement("div")),
                l = "J-N-Jz ";
              void 0 !== o && (l += o), s.attr("class", l), s.attr("style", "user-select: none;");
              var c = t(document.createElement("img")),
                u = "J-N-JX";
              void 0 !== i && (u = i + " " + u),
                c.attr("class", u),
                c.attr("style", "user-select: none;"),
                c.attr("role", "menuitem"),
                c.attr("src", "images/cleardot.gif"),
                s.append(c),
                s.append(n),
                s.click(r),
                a.append(s);
              var d = e.find(".J-N.yr").last();
              return a.insertAfter(d), s;
            }),
            (o.tools.add_attachment_button = function (e, n, r, o, i) {
              var a = t(document.createElement("div"));
              a.attr("class", "T-I J-J5-Ji aQv T-I-ax7 L3"),
                a.attr("style", "user-select: none;"),
                a.attr("aria-label", o),
                a.attr("data-tooltip", o);
              var s = "T-I-JW";
              a.mouseover(function () {
                this.classList.add(s);
              }),
                a.mouseout(function () {
                  this.classList.remove(s);
                });
              var l = t(document.createElement("div")),
                c = "wtScjd J-J5-Ji aYr";
              return r && (c += " " + r), l.attr("class", c), n && l.html(n), a.append(l), a.click(i), e.$el.find("div.aQw").append(a), a;
            }),
            (o.tools.remove_modal_window = function () {
              t("#gmailJsModalBackground").remove(), t("#gmailJsModalWindow").remove();
            }),
            (o.tools.add_modal_window = function (e, n, r, i, a, s, l) {
              (a = a || o.tools.remove_modal_window), (i = i || o.tools.remove_modal_window), (s = s || "OK"), (l = l || "Cancel");
              var c = t(document.createElement("div"));
              c.attr("id", "gmailJsModalBackground"),
                c.attr("class", "Kj-JD-Jh"),
                c.attr("aria-hidden", "true"),
                c.attr("style", "opacity:0.75;width:100%;height:100%;");
              var u = t(document.createElement("div"));
              u.attr("id", "gmailJsModalWindow"),
                u.attr("class", "Kj-JD"),
                u.attr("tabindex", "0"),
                u.attr("role", "alertdialog"),
                u.attr("aria-labelledby", "gmailJsModalWindowTitle"),
                u.attr("style", "left:50%;top:50%;opacity:1;");
              var d = t(document.createElement("div"));
              d.attr("class", "Kj-JD-K7 Kj-JD-K7-GIHV4");
              var f = t(document.createElement("span"));
              f.attr("id", "gmailJsModalWindowTitle"), f.attr("class", "Kj-JD-K7-K0"), f.attr("role", "heading"), f.html(e);
              var p = t(document.createElement("span"));
              p.attr("id", "gmailJsModalWindowClose"),
                p.attr("class", "Kj-JD-K7-Jq"),
                p.attr("role", "button"),
                p.attr("tabindex", "0"),
                p.attr("aria-label", "Close"),
                p.click(a),
                d.append(f),
                d.append(p);
              var h = t(document.createElement("div"));
              h.attr("id", "gmailJsModalWindowContent"), h.attr("class", "Kj-JD-Jz"), h.html(n);
              var m = t(document.createElement("div"));
              m.attr("class", "Kj-JD-Jl");
              var g = t(document.createElement("button"));
              g.attr("id", "gmailJsModalWindowOk"), g.attr("class", "J-at1-auR J-at1-atl"), g.attr("name", "ok"), g.text(s), g.click(r);
              var v = t(document.createElement("button"));
              v.attr("id", "gmailJsModalWindowCancel"),
                v.attr("name", "cancel"),
                v.text(l),
                v.click(i),
                m.append(g),
                m.append(v),
                u.append(d),
                u.append(h),
                u.append(m),
                t(document.body).append(c),
                t(document.body).append(u);
              var _ = function () {
                u.css({ top: (t(window).height() - u.outerHeight()) / 2, left: (t(window).width() - u.outerWidth()) / 2 });
              };
              _(), u.on("DOMSubtreeModified", _), t(window).resize(_);
            }),
            (o.tools.toggle_minimize = function () {
              var e = t("[alt='Minimize']")[0];
              return !!e && (e.click(), !0);
            }),
            (o.chat.is_hangouts = function () {
              if (void 0 !== o.tracker.hangouts) return o.tracker.hangouts;
              var e = t(".dw");
              if (e.length > 1) throw "Figuring out is hangouts - more than one dw classes found";
              if (0 === e.length) throw "Figuring out is hangouts - no dw classes found";
              var n = e[0],
                r = t(".nH.aJl.nn", n);
              return r.length > 0
                ? ((o.tracker.hangouts = !0), !0)
                : (r = t(".nH.nn", n)).length > 2
                ? ((o.tracker.hangouts = !1), !1)
                : void 0;
            }),
            (o.dom.visible_messages = function () {
              const e = [];
              return (
                t('tbody>tr.zA[role="row"]:visible', o.dom.inbox_content()).each((n, r) => {
                  const i = t("*[email][name]", r),
                    a = t("*[role=link]", r),
                    s = r.querySelector("span[data-thread-id]");
                  e.push({
                    from: { name: i.attr("name"), email: i.attr("email") },
                    summary: a[0].innerText,
                    thread_id: o.helper.clean_thread_id((s && s.dataset && s.dataset.threadId) || ""),
                    legacy_email_id: (s && s.dataset && s.dataset.legacyMessageId) || "",
                    $el: t(r)
                  });
                }),
                e
              );
            }),
            (o.dom.composes = function () {
              var e = [];
              return (
                t("div.M9").each(function (t, n) {
                  e.push(new o.dom.compose(n));
                }),
                e
              );
            }),
            (o.dom.helper = {}),
            (o.dom.helper.trigger_address = function (e) {
              let t = e[0],
                n = new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, key: "Tab", shiftKey: !0, keyCode: 9 });
              t.focus(), t.dispatchEvent(n);
            }),
            (o.dom.compose = function (e) {
              return this.constructor !== o.dom.compose
                ? new o.dom.compose(e)
                : (((e = t(e)) && (e.hasClass("M9") || e.hasClass("AD"))) || o.tools.error("api.dom.compose called with invalid element"),
                  (this.$el = e),
                  this);
            }),
            a(o.dom.compose.prototype, {
              id: function () {
                return this.dom("id").val();
              },
              email_id: function () {
                let e = this.dom("draft").val();
                return e && e.startsWith("#") ? e.substring(1) : e;
              },
              thread_id: function () {
                let e = this.dom("thread").val() || "";
                return o.helper.clean_thread_id(e);
              },
              is_inline: function () {
                return this.$el.closest("td.Bu").length > 0;
              },
              type: function () {
                return this.is_inline() ? (0 === this.find("input[name=subject]").val().indexOf("Fw") ? "forward" : "reply") : "compose";
              },
              recipients: function (e) {
                "object" != typeof e && (e = {});
                const t = o.check.is_peoplekit_compose(this.$el),
                  n = e.type ? "[name=" + e.type + "]" : "",
                  r = t
                    ? this.$el
                        .find("tr.bzf " + (n || "div[name]") + " div[data-hovercard-id]")
                        .map((t, n) => ({
                          type: e.type || n.closest("div[name]").getAttribute("name"),
                          email: n.getAttribute("data-hovercard-id")
                        }))
                    : this.$el.find(".GS input[type=hidden]" + n).map((e, t) => ({ type: t.name, email: t.value }));
                if (e.flat) return r.toArray().map((e) => e.email);
                {
                  let t = { to: [], cc: [], bcc: [] };
                  return (
                    e.type
                      ? (t[e.type] = r
                          .toArray()
                          .filter((t) => t.type === e.type)
                          .map((e) => e.email))
                      : ["to", "cc", "bcc"].forEach((e) => {
                          t[e] = r
                            .toArray()
                            .filter((t) => t.type === e)
                            .map((e) => e.email);
                        }),
                    t
                  );
                }
              },
              to: function (e) {
                const t = this.dom("to").val(e);
                return o.dom.helper.trigger_address(t), t;
              },
              cc: function (e) {
                e && this.dom("show_cc").click();
                const t = this.dom("cc").val(e);
                return o.dom.helper.trigger_address(t), t;
              },
              bcc: function (e) {
                e && this.dom("show_bcc").click();
                const t = this.dom("bcc").val(e);
                return o.dom.helper.trigger_address(t), t;
              },
              subject: function (e) {
                return e && this.dom("all_subjects").val(e), (e = this.dom("subjectbox").val()) || this.dom("subject").val();
              },
              from: function () {
                var e = this.dom("from");
                if (e.length) {
                  var t = e.val();
                  if (t) return o.tools.extract_email_address(t);
                }
                return o.get.user_email();
              },
              body: function (e) {
                var t = this.dom("body");
                return e && t.html(e), t.html();
              },
              attachments: function () {
                var e = [];
                return (
                  this.dom("attachments").each(function () {
                    var n = t(this),
                      r = {};
                    (r.$el = n),
                      (r.name = n.find("div.vI").html()),
                      (r.size = n.find("div.vJ").html()),
                      (r.url = n.find("a.dO").attr("href")),
                      (r.type = "https"),
                      e.push(r);
                  }),
                  e
                );
              },
              send: function () {
                return this.dom("send_button").click();
              },
              find: function (e) {
                return this.$el.find(e);
              },
              close: function () {
                const e = document.createEvent("Events");
                e.initEvent("keydown", !0, !0), (e.which = 27), (e.keyCode = 27);
                var t = this.dom("body");
                t.focus(), t[0].dispatchEvent(e);
              },
              dom: function (e) {
                if (!e) return this.$el;
                var t = {
                  to: "textarea[name=to]",
                  cc: "textarea[name=cc]",
                  bcc: "textarea[name=bcc]",
                  id: "input[name=composeid]",
                  draft: "input[name=draft]",
                  thread: "input[name=rt]",
                  subject: "input[name=subject]",
                  subjectbox: "input[name=subjectbox]",
                  all_subjects: "input[name=subjectbox], input[name=subject]",
                  body: "div[contenteditable=true]:not([id=subject])",
                  quoted_reply: "input[name=uet]",
                  reply: "M9",
                  forward: "M9",
                  from: "input[name=from]",
                  attachments: "div.dL",
                  send_button: "div.T-I.T-I-atl:not(.gmailjscomposebutton)",
                  show_cc: "span.aB.gQ.pE",
                  show_bcc: "span.aB.gQ.pB"
                };
                return (
                  o.check.is_peoplekit_compose(this.$el) &&
                    (t = Object.assign(t, { to: "div[name=to] input", cc: "div[name=cc] input", bcc: "div[name=bcc] input" })),
                  t[e] || o.tools.error('Dom lookup failed. Unable to find config for "' + e + '"', t, e, t[e]),
                  this.$el.find(t[e])
                );
              }
            }),
            (o.dom.email = function (e) {
              if (this.constructor !== o.dom.email) return new o.dom.email(e);
              if ("string" == typeof e && o.check.data.is_legacy_email_id(e))
                (this.id = e), (this.$el = t("div.adn[data-legacy-message-id='" + this.id + "']"));
              else if ("string" == typeof e && o.check.data.is_email_id(e)) {
                const n = document.querySelector("div.adn[data-message-id='" + e.replace("msg-f:", "\\#msg-f\\:") + "']");
                (this.id = n.dataset.legacyMessageId), (this.$el = t(n));
              } else
                e && ((e.classList && e.classList.contains("adn")) || (e.hasClass && e.hasClass("adn")))
                  ? ((this.$el = t(e)), (this.id = this.$el.data("legacyMessageId")))
                  : o.tools.error("api.dom.email called with invalid element/id");
              return this;
            }),
            a(o.dom.email.prototype, {
              body: function (e) {
                var t = this.dom("body");
                return e && t.html(e), t.html();
              },
              from: function (e, t) {
                var n = this.dom("from");
                return (
                  e && n.attr("email", e), t && (n.attr("name", t), n.html(t)), { email: n.attr("email"), name: n.attr("name"), el: n }
                );
              },
              to: function (e) {
                if (e) {
                  t.isArray(e) || (e = [e]);
                  var n = [];
                  t.each(e, function (e, r) {
                    n.push(
                      t("<span />")
                        .attr({ dir: "ltr", email: r.email, name: r.name })
                        .addClass("g2")
                        .html(r.name)
                        .wrap("<p/>")
                        .parent()
                        .html()
                    );
                  }),
                    this.dom("to_wrapper").html("to " + n.join(", "));
                }
                var r = [];
                return (
                  this.dom("to").each(function () {
                    var e = t(this);
                    r.push({ email: e.attr("email"), name: e.attr("name"), el: e });
                  }),
                  r
                );
              },
              attachments: function () {
                var e = [];
                return (
                  this.dom("attachments").each(function () {
                    var n = t(this),
                      r = {};
                    (r.$el = n), (r.name = n.find(".aV3").html()), (r.size = n.find(".SaH2Ve").html());
                    var i = n.attr("download_url");
                    if (i) {
                      var a = o.tools.parse_attachment_url(i);
                      (r.url = a.url), (r.type = a.type);
                    }
                    e.push(r);
                  }),
                  e
                );
              },
              data: function () {
                if (("object" != typeof o.dom.email_cache && (o.dom.email_cache = {}), !o.dom.email_cache[this.id])) {
                  var e = o.get.email_data(this.id);
                  t.each(e.threads, function (e, t) {
                    o.dom.email_cache[e] = t;
                  });
                }
                return o.dom.email_cache[this.id];
              },
              source: function () {
                return o.get.email_source(this.id);
              },
              dom: function (e) {
                if (!e) return this.$el;
                var t = {
                  body: "div.a3s",
                  from: "span[email].gD",
                  to: "span[email].g2",
                  to_wrapper: "span.hb",
                  timestamp: "span.g3",
                  star: "div.zd",
                  attachments: "div.hq.gt div.aQH span.aZo",
                  reply_button: "div[role=button].aaq",
                  menu_button: "div[role=button].aap",
                  details_button: "div[role=button].ajz"
                };
                return t[e] || o.tools.error('Dom lookup failed. Unable to find config for "' + e + '"'), this.$el.find(t[e]);
              }
            }),
            (o.dom.thread = function (e) {
              return this.constructor !== o.dom.thread
                ? new o.dom.thread(e)
                : ((e && (e.hasClass("if") || e.hasClass("iY"))) || o.tools.error("api.dom.thread called with invalid element/id"),
                  (this.$el = e),
                  this);
            }),
            a(o.dom.thread.prototype, {
              dom: function (e) {
                if (!e) return this.$el;
                var t = { opened_email: "div.adn", subject: "h2.hP", labels: "div.hN" };
                return t[e] || o.tools.error('Dom lookup failed. Unable to find config for "' + e + '"'), this.$el.find(t[e]);
              }
            }),
            (o.compose.start_compose = function () {
              var e = document.getElementsByClassName("T-I T-I-KE L3")[0];
              return !!e && (e.click(), !0);
            }),
            (o.old = {}),
            (o.old.get = o.get),
            (o.new = {}),
            (o.new.get = {}),
            (o.new.get.email_id = function (e) {
              if (!e) {
                const t = document.querySelectorAll(".adn[data-message-id]");
                if (!t || 0 === t.length) return null;
                e = t[t.length - 1];
              }
              return o.helper.get.new_email_id(e);
            }),
            (o.new.get.thread_id = function () {
              const e = document.querySelector("[data-thread-perm-id]");
              return e ? e.dataset.threadPermId : null;
            }),
            (o.new.get.email_data = function (e) {
              e = e || o.new.get.email_id();
              const t = o.helper.get.new_email_id(e);
              return t ? o.cache.emailIdCache[t] : null;
            }),
            (o.new.get.thread_data = function (e) {
              e = e || o.new.get.thread_id();
              const t = o.helper.get.thread_id(e);
              return t ? o.cache.threadCache[t] : null;
            }),
            "undefined" != typeof document && o.tools.xhr_watcher(),
            "undefined" != typeof document && o.tools.embedded_data_watcher(),
            o
          );
        };
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  !(function () {
    "use strict";
    var e = n(63783);
    window.addEventListener("message", function t(n) {
      if (n && n.data && "gmail_try_clipping_thread" === n.data.type) {
        const { payload: r } = n.data;
        r &&
          r.messageId &&
          ((n) => {
            let r = "";
            const o = e.Gmail();
            let i = r;
            if (o.tracker.globals.length > 0) {
              try {
                (r = o.get.user_email()), (i = r);
                const e = o.get.loggedin_accounts();
                e.length > 0 && (i = e.find((e) => e.email.toLowerCase() === r.toLowerCase()).name);
              } catch (e) {
                console.error(e);
              }
              window.postMessage(
                { name: `receiveGmailIk_${n}`, baseUrl: o.tracker.globals[31], ik: o.tracker.ik, user: { email: r, name: i } },
                "*"
              );
            } else {
              let e;
              try {
                const t = document.querySelectorAll("div.maincontent  table");
                if (t.length > 0) {
                  const n = t[1].querySelector("tr > td > font");
                  n &&
                    2 === n.childNodes.length &&
                    ((i = n.childNodes[0].innerHTML), (r = n.childNodes[1].textContent), (r = r.substring(1, r.length - 1))),
                    (e = t[1].querySelector("div [dir]").innerHTML);
                }
              } catch (e) {
                console.error(e);
              }
              window.postMessage(
                {
                  name: `receiveGmailIk_${n}`,
                  baseUrl: window.location.origin + window.location.pathname,
                  preview: !0,
                  content: e,
                  user: { email: r, name: i }
                },
                "*"
              );
            }
            const a = document.getElementById("evernoteGmailScript");
            a && a.nodeType === Node.ELEMENT_NODE && (document.body.removeChild(a), window.removeEventListener("message", t));
          })(r.messageId);
      }
    });
  })();
})();
