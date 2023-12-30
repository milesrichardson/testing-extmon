/*! For license information please see bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunksource = self.webpackChunksource || []).push([
  [299],
  {
    74299: (e, n, t) => {
      t.d(n, { Z: () => Ht });
      var r = t(17692),
        o = t(89526),
        a = t(13721),
        i = t(40619);
      var u = "data-focus-lock",
        c = "data-focus-lock-disabled";
      function l(e, n) {
        return (
          (t = n || null),
          (r = function (n) {
            return e.forEach(function (e) {
              return (function (e, n) {
                return "function" == typeof e ? e(n) : e && (e.current = n), e;
              })(e, n);
            });
          }),
          ((a = (0, o.useState)(function () {
            return {
              value: t,
              callback: r,
              facade: {
                get current() {
                  return a.value;
                },
                set current(e) {
                  var n = a.value;
                  n !== e && ((a.value = e), a.callback(e, n));
                }
              }
            };
          })[0]).callback = r),
          a.facade
        );
        var t, r, a;
      }
      var s = { width: "1px", height: "0px", padding: 0, overflow: "hidden", position: "fixed", top: "1px", left: "1px" },
        d = function (e) {
          var n = e.children;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement("div", { key: "guard-first", "data-focus-guard": !0, "data-focus-auto-guard": !0, style: s }),
            n,
            n && o.createElement("div", { key: "guard-last", "data-focus-guard": !0, "data-focus-auto-guard": !0, style: s })
          );
        };
      (d.propTypes = {}), (d.defaultProps = { children: null });
      var f = t(97582);
      function v(e) {
        return e;
      }
      function m(e, n) {
        void 0 === n && (n = v);
        var t = [],
          r = !1;
        return {
          read: function () {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e;
          },
          useMedium: function (e) {
            var o = n(e, r);
            return (
              t.push(o),
              function () {
                t = t.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; t.length; ) {
              var n = t;
              (t = []), n.forEach(e);
            }
            t = {
              push: function (n) {
                return e(n);
              },
              filter: function () {
                return t;
              }
            };
          },
          assignMedium: function (e) {
            r = !0;
            var n = [];
            if (t.length) {
              var o = t;
              (t = []), o.forEach(e), (n = t);
            }
            var a = function () {
                var t = n;
                (n = []), t.forEach(e);
              },
              i = function () {
                return Promise.resolve().then(a);
              };
            i(),
              (t = {
                push: function (e) {
                  n.push(e), i();
                },
                filter: function (e) {
                  return (n = n.filter(e)), t;
                }
              });
          }
        };
      }
      function p(e, n) {
        return void 0 === n && (n = v), m(e, n);
      }
      function h(e) {
        void 0 === e && (e = {});
        var n = m(null);
        return (n.options = (0, f.pi)({ async: !0, ssr: !1 }, e)), n;
      }
      var y = p({}, function (e) {
          return { target: e.target, currentTarget: e.currentTarget };
        }),
        g = p(),
        E = p(),
        x = h({ async: !0 }),
        b = [],
        w = o.forwardRef(function (e, n) {
          var t,
            a = o.useState(),
            i = a[0],
            d = a[1],
            f = o.useRef(),
            v = o.useRef(!1),
            m = o.useRef(null),
            p = e.children,
            h = e.disabled,
            E = e.noFocusGuards,
            w = e.persistentFocus,
            k = e.crossFrame,
            N = e.autoFocus,
            C = (e.allowTextSelection, e.group),
            O = e.className,
            S = e.whiteList,
            F = e.shards,
            M = void 0 === F ? b : F,
            P = e.as,
            T = void 0 === P ? "div" : P,
            I = e.lockProps,
            R = void 0 === I ? {} : I,
            A = e.sideCar,
            _ = e.returnFocus,
            B = e.onActivation,
            D = e.onDeactivation,
            Z = o.useState({})[0],
            L = o.useCallback(
              function () {
                (m.current = m.current || (document && document.activeElement)), f.current && B && B(f.current), (v.current = !0);
              },
              [B]
            ),
            j = o.useCallback(
              function () {
                (v.current = !1), D && D(f.current);
              },
              [D]
            ),
            H = o.useCallback(
              function (e) {
                var n = m.current;
                if (Boolean(_) && n && n.focus) {
                  var t = "object" == typeof _ ? _ : void 0;
                  (m.current = null),
                    e
                      ? Promise.resolve().then(function () {
                          return n.focus(t);
                        })
                      : n.focus(t);
                }
              },
              [_]
            ),
            W = o.useCallback(function (e) {
              v.current && y.useMedium(e);
            }, []),
            G = g.useMedium,
            Y = o.useCallback(function (e) {
              f.current !== e && ((f.current = e), d(e));
            }, []);
          var X = (0, r.Z)((((t = {})[c] = h && "disabled"), (t[u] = C), t), R),
            z = !0 !== E,
            U = z && "tail" !== E,
            K = l([n, Y]);
          return o.createElement(
            o.Fragment,
            null,
            z && [
              o.createElement("div", { key: "guard-first", "data-focus-guard": !0, tabIndex: h ? -1 : 0, style: s }),
              o.createElement("div", { key: "guard-nearest", "data-focus-guard": !0, tabIndex: h ? -1 : 1, style: s })
            ],
            !h &&
              o.createElement(A, {
                id: Z,
                sideCar: x,
                observed: i,
                disabled: h,
                persistentFocus: w,
                crossFrame: k,
                autoFocus: N,
                whiteList: S,
                shards: M,
                onActivation: L,
                onDeactivation: j,
                returnFocus: H
              }),
            o.createElement(T, (0, r.Z)({ ref: K }, X, { className: O, onBlur: G, onFocus: W }), p),
            U && o.createElement("div", { "data-focus-guard": !0, tabIndex: h ? -1 : 0, style: s })
          );
        });
      (w.propTypes = {}),
        (w.defaultProps = {
          children: void 0,
          disabled: !1,
          returnFocus: !1,
          noFocusGuards: !1,
          autoFocus: !0,
          persistentFocus: !1,
          crossFrame: !0,
          allowTextSelection: void 0,
          group: void 0,
          className: void 0,
          whiteList: void 0,
          shards: void 0,
          as: "div",
          lockProps: {},
          onActivation: void 0,
          onDeactivation: void 0
        });
      const k = w;
      var N = t(51498);
      function C(e) {
        return (
          (C =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          C(e)
        );
      }
      function O(e) {
        var n = (function (e, n) {
          if ("object" !== C(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, n || "default");
            if ("object" !== C(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" === C(n) ? n : String(n);
      }
      const S = function (e, n) {
        return function (t) {
          var r,
            a = [];
          function i() {
            (r = e(
              a.map(function (e) {
                return e.props;
              })
            )),
              n(r);
          }
          var u,
            c,
            l,
            s = (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              (0, N.Z)(n, e),
                (n.peek = function () {
                  return r;
                });
              var u = n.prototype;
              return (
                (u.componentDidMount = function () {
                  a.push(this), i();
                }),
                (u.componentDidUpdate = function () {
                  i();
                }),
                (u.componentWillUnmount = function () {
                  var e = a.indexOf(this);
                  a.splice(e, 1), i();
                }),
                (u.render = function () {
                  return o.createElement(t, this.props);
                }),
                n
              );
            })(o.PureComponent);
          return (
            (u = s),
            (c = "displayName"),
            (l =
              "SideEffect(" +
              (function (e) {
                return e.displayName || e.name || "Component";
              })(t) +
              ")"),
            (c = O(c)) in u ? Object.defineProperty(u, c, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : (u[c] = l),
            s
          );
        };
      };
      var F = function (e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n;
        },
        M = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        P = function (e) {
          return e.parentNode ? P(e.parentNode) : e;
        },
        T = function (e) {
          return M(e)
            .filter(Boolean)
            .reduce(function (e, n) {
              var t = n.getAttribute(u);
              return (
                e.push.apply(
                  e,
                  t
                    ? (function (e) {
                        for (var n = new Set(), t = e.length, r = 0; r < t; r += 1)
                          for (var o = r + 1; o < t; o += 1) {
                            var a = e[r].compareDocumentPosition(e[o]);
                            (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o),
                              (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r);
                          }
                        return e.filter(function (e, t) {
                          return !n.has(t);
                        });
                      })(F(P(n).querySelectorAll("[" + u + '="' + t + '"]:not([' + c + '="disabled"])')))
                    : [n]
                ),
                e
              );
            }, []);
        },
        I = function (e) {
          return Boolean(
            F(e.querySelectorAll("iframe")).some(function (e) {
              return e === document.activeElement;
            })
          );
        },
        R = function (e) {
          var n = document && document.activeElement;
          return (
            !(!n || (n.dataset && n.dataset.focusGuard)) &&
            T(e).reduce(function (e, t) {
              return e || t.contains(n) || I(t);
            }, !1)
          );
        },
        A = function (e) {
          return "INPUT" === e.tagName && "radio" === e.type;
        },
        _ = function (e, n) {
          return A(e) && e.name
            ? (function (e, n) {
                return (
                  n
                    .filter(A)
                    .filter(function (n) {
                      return n.name === e.name;
                    })
                    .filter(function (e) {
                      return e.checked;
                    })[0] || e
                );
              })(e, n)
            : e;
        },
        B = function (e) {
          return e[0] && e.length > 1 ? _(e[0], e) : e[0];
        },
        D = function (e, n) {
          return e.length > 1 ? e.indexOf(_(e[n], e)) : n;
        },
        Z = function (e, n) {
          return (
            !e ||
            e === document ||
            (e && e.nodeType === Node.DOCUMENT_NODE) ||
            (!(function (e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(
                !n ||
                !n.getPropertyValue ||
                ("none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
              );
            })(e) &&
              n(e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode))
          );
        },
        L = function (e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = Z(n, L.bind(void 0, e));
          return e.set(n, r), r;
        },
        j = function (e) {
          return Boolean(e && e.dataset && e.dataset.focusGuard);
        },
        H = function (e) {
          return !j(e);
        },
        W = function (e) {
          return Boolean(e);
        },
        G = "NEW_FOCUS",
        Y = function (e, n, t, r) {
          var o = e.length,
            a = e[0],
            i = e[o - 1],
            u = j(t);
          if (!(e.indexOf(t) >= 0)) {
            var c,
              l,
              s = n.indexOf(t),
              d = r ? n.indexOf(r) : s,
              f = r ? e.indexOf(r) : -1,
              v = s - d,
              m = n.indexOf(a),
              p = n.indexOf(i),
              h =
                ((c = n),
                (l = new Set()),
                c.forEach(function (e) {
                  return l.add(_(e, c));
                }),
                c.filter(function (e) {
                  return l.has(e);
                })),
              y = h.indexOf(t) - (r ? h.indexOf(r) : s),
              g = D(e, 0),
              E = D(e, o - 1);
            return -1 === s || -1 === f
              ? G
              : !v && f >= 0
              ? f
              : s <= m && u && Math.abs(v) > 1
              ? E
              : s >= p && u && Math.abs(v) > 1
              ? g
              : v && Math.abs(y) > 1
              ? f
              : s <= m
              ? E
              : s > p
              ? g
              : v
              ? Math.abs(v) > 1
                ? f
                : (o + f + v) % o
              : void 0;
          }
        },
        X = function (e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1;
          }
          return t || r;
        },
        z = function (e, n, t) {
          return F(e)
            .map(function (e, n) {
              return { node: e, index: n, tabIndex: t && -1 === e.tabIndex ? ((e.dataset || {}).focusGuard ? 0 : -1) : e.tabIndex };
            })
            .filter(function (e) {
              return !n || e.tabIndex >= 0;
            })
            .sort(X);
        },
        U = [
          "button:enabled",
          "select:enabled",
          "textarea:enabled",
          "input:enabled",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[tabindex]",
          "[contenteditable]",
          "[autofocus]"
        ].join(","),
        K = U + ", [data-focus-guard]",
        q = function (e, n) {
          return e.reduce(function (e, t) {
            return e.concat(
              F(t.querySelectorAll(n ? K : U)),
              t.parentNode
                ? F(t.parentNode.querySelectorAll(U)).filter(function (e) {
                    return e === t;
                  })
                : []
            );
          }, []);
        },
        $ = function (e, n) {
          return F(e)
            .filter(function (e) {
              return L(n, e);
            })
            .filter(function (e) {
              return (function (e) {
                return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled));
              })(e);
            });
        },
        V = function (e, n, t) {
          return z($(q(e, t), n), !0, t);
        },
        J = function (e, n) {
          return z($(q(e), n), !1);
        },
        Q = function (e, n) {
          return $(
            ((t = e.querySelectorAll("[data-autofocus-inside]")),
            F(t)
              .map(function (e) {
                return q([e]);
              })
              .reduce(function (e, n) {
                return e.concat(n);
              }, [])),
            n
          );
          var t;
        },
        ee = function (e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ee(e.parentNode, n), n;
        },
        ne = function (e, n) {
          for (var t = ee(e), r = ee(n), o = 0; o < t.length; o += 1) {
            var a = t[o];
            if (r.indexOf(a) >= 0) return a;
          }
          return !1;
        },
        te = function (e, n, t) {
          var r = M(e),
            o = M(n),
            a = r[0],
            i = !1;
          return (
            o.filter(Boolean).forEach(function (e) {
              (i = ne(i || e, e) || i),
                t.filter(Boolean).forEach(function (e) {
                  var n = ne(a, e);
                  n && (i = !i || n.contains(i) ? n : ne(n, i));
                });
            }),
            i
          );
        },
        re = function (e, n) {
          var t = document && document.activeElement,
            r = T(e).filter(H),
            o = te(t || e, e, r),
            a = new Map(),
            i = J(r, a),
            u = V(r, a).filter(function (e) {
              var n = e.node;
              return H(n);
            });
          if (u[0] || (u = i)[0]) {
            var c,
              l,
              s,
              d,
              f = J([o], a).map(function (e) {
                return e.node;
              }),
              v =
                ((c = f),
                (l = u),
                (s = new Map()),
                l.forEach(function (e) {
                  return s.set(e.node, e);
                }),
                c
                  .map(function (e) {
                    return s.get(e);
                  })
                  .filter(W)),
              m = v.map(function (e) {
                return e.node;
              }),
              p = Y(m, f, t, n);
            if (p === G) {
              var h = i
                .map(function (e) {
                  return e.node;
                })
                .filter(
                  ((d = (function (e, n) {
                    return e.reduce(function (e, t) {
                      return e.concat(Q(t, n));
                    }, []);
                  })(r, a)),
                  function (e) {
                    return e.autofocus || (e.dataset && !!e.dataset.autofocus) || d.indexOf(e) >= 0;
                  })
                );
              return { node: h && h.length ? B(h) : B(m) };
            }
            return void 0 === p ? p : v[p];
          }
        },
        oe = 0,
        ae = !1;
      const ie = function (e, n) {
        var t,
          r = re(e, n);
        if (!ae && r) {
          if (oe > 2)
            return (
              (ae = !0),
              void setTimeout(function () {
                ae = !1;
              }, 1)
            );
          oe++, (t = r.node).focus(), "contentWindow" in t && t.contentWindow && t.contentWindow.focus(), oe--;
        }
      };
      function ue(e) {
        var n = window.setImmediate;
        void 0 !== n ? n(e) : setTimeout(e, 1);
      }
      var ce = function () {
          return (
            (document && document.activeElement === document.body) ||
            (document &&
              F(document.querySelectorAll("[data-no-focus-lock]")).some(function (e) {
                return e.contains(document.activeElement);
              }))
          );
        },
        le = null,
        se = null,
        de = null,
        fe = !1,
        ve = function () {
          return !0;
        };
      function me(e, n, t, r) {
        var o = null,
          a = e;
        do {
          var i = r[a];
          if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
          else {
            if (!i.lockItem) break;
            if (a !== e) return;
            o = null;
          }
        } while ((a += t) !== n);
        o && (o.node.tabIndex = 0);
      }
      var pe = function (e) {
          return e && "current" in e ? e.current : e;
        },
        he = function () {
          var e,
            n,
            t,
            r,
            o,
            a,
            i,
            u = !1;
          if (le) {
            var c = le,
              l = c.observed,
              s = c.persistentFocus,
              d = c.autoFocus,
              f = c.shards,
              v = c.crossFrame,
              m = l || (de && de.portaledElement),
              p = document && document.activeElement;
            if (m) {
              var h = [m].concat(f.map(pe).filter(Boolean));
              if (
                ((p &&
                  !(function (e) {
                    return (le.whiteList || ve)(e);
                  })(p)) ||
                  ((s || (v ? Boolean(fe) : "meanwhile" === fe) || !ce() || (!se && d)) &&
                    (!m ||
                      R(h) ||
                      ((i = p), de && de.portaledElement === i) ||
                      (document && !se && p && !d ? (p.blur && p.blur(), document.body.focus()) : ((u = ie(h, se)), (de = {}))),
                    (fe = !1),
                    (se = document && document.activeElement))),
                document)
              ) {
                var y = document && document.activeElement,
                  g =
                    ((n = T((e = h)).filter(H)),
                    (t = te(e, e, n)),
                    (r = new Map()),
                    (o = V([t], r, !0)),
                    (a = V(n, r)
                      .filter(function (e) {
                        var n = e.node;
                        return H(n);
                      })
                      .map(function (e) {
                        return e.node;
                      })),
                    o.map(function (e) {
                      var n = e.node;
                      return { node: n, index: e.index, lockItem: a.indexOf(n) >= 0, guard: j(n) };
                    })),
                  E = g
                    .map(function (e) {
                      return e.node;
                    })
                    .indexOf(y);
                E > -1 &&
                  (g
                    .filter(function (e) {
                      var n = e.guard,
                        t = e.node;
                      return n && t.dataset.focusAutoGuard;
                    })
                    .forEach(function (e) {
                      return e.node.removeAttribute("tabIndex");
                    }),
                  me(E, g.length, 1, g),
                  me(E, -1, -1, g));
              }
            }
          }
          return u;
        },
        ye = function (e) {
          he() && e && (e.stopPropagation(), e.preventDefault());
        },
        ge = function () {
          return ue(he);
        },
        Ee = function (e) {
          var n = e.target,
            t = e.currentTarget;
          t.contains(n) || (de = { observerNode: t, portaledElement: n });
        },
        xe = function () {
          (fe = "just"),
            setTimeout(function () {
              fe = "meanwhile";
            }, 0);
        };
      y.assignSyncMedium(Ee),
        g.assignMedium(ge),
        E.assignMedium(function (e) {
          return e({ moveFocusInside: ie, focusInside: R });
        });
      const be = S(
        function (e) {
          return e.filter(function (e) {
            return !e.disabled;
          });
        },
        function (e) {
          var n = e.slice(-1)[0];
          n &&
            !le &&
            (document.addEventListener("focusin", ye, !0), document.addEventListener("focusout", ge), window.addEventListener("blur", xe));
          var t = le,
            r = t && n && n.id === t.id;
          (le = n),
            t &&
              !r &&
              (t.onDeactivation(),
              e.filter(function (e) {
                return e.id === t.id;
              }).length || t.returnFocus(!n)),
            n
              ? ((se = null), (r && t.observed === n.observed) || n.onActivation(), he(), ue(he))
              : (document.removeEventListener("focusin", ye, !0),
                document.removeEventListener("focusout", ge),
                window.removeEventListener("blur", xe),
                (se = null));
        }
      )(function () {
        return null;
      });
      var we = o.forwardRef(function (e, n) {
          return o.createElement(k, (0, r.Z)({ sideCar: be, ref: n }, e));
        }),
        ke = k.propTypes || {};
      ke.sideCar,
        (function (e, n) {
          if (null == e) return {};
          var t,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
        })(ke, ["sideCar"]);
      we.propTypes = {};
      const Ne = we;
      var Ce = t(93630),
        Oe = function (e) {
          var n = e.initialFocusRef,
            t = e.finalFocusRef,
            r = e.contentRef,
            a = e.restoreFocus,
            i = e.children,
            u = e.isDisabled,
            c = e.autoFocus,
            l = e.persistentFocus,
            s = e.lockFocusAcrossFrames,
            d = o.useCallback(
              function () {
                if (null != n && n.current) n.current.focus();
                else if (null != r && r.current) {
                  0 === (0, Ce.t5)(r.current).length && (0, Ce.T_)(r.current, { nextTick: !0 });
                }
              },
              [n, r]
            ),
            f = o.useCallback(
              function () {
                var e;
                null == t || null == (e = t.current) || e.focus();
              },
              [t]
            ),
            v = a && !t;
          return o.createElement(
            Ne,
            { crossFrame: s, persistentFocus: l, autoFocus: c, disabled: u, onActivation: d, onDeactivation: f, returnFocus: v },
            i
          );
        };
      Ce.Ts && (Oe.displayName = "FocusLock");
      var Se = t(20058),
        Fe = t(93431),
        Me = t.n(Fe),
        Pe = t(15383),
        Te = t(80387);
      function Ie(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
      }
      function Re() {
        return (
          (Re =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          Re.apply(this, arguments)
        );
      }
      var Ae = { ease: [0.25, 0.1, 0.25, 1], easeIn: [0.4, 0, 1, 1], easeOut: [0, 0, 0.2, 1], easeInOut: [0.4, 0, 0.2, 1] },
        _e = { position: { left: 0, top: 0, bottom: 0, width: "100%" }, enter: { x: 0, y: 0 }, exit: { x: "-100%", y: 0 } },
        Be = { position: { right: 0, top: 0, bottom: 0, width: "100%" }, enter: { x: 0, y: 0 }, exit: { x: "100%", y: 0 } },
        De = { position: { top: 0, left: 0, right: 0, maxWidth: "100vw" }, enter: { x: 0, y: 0 }, exit: { x: 0, y: "-100%" } },
        Ze = { position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" }, enter: { x: 0, y: 0 }, exit: { x: 0, y: "100%" } };
      function Le(e) {
        var n;
        switch (null != (n = null == e ? void 0 : e.direction) ? n : "right") {
          case "right":
          default:
            return Be;
          case "left":
            return _e;
          case "bottom":
            return Ze;
          case "top":
            return De;
        }
      }
      var je = { enter: { duration: 0.2, ease: Ae.easeOut }, exit: { duration: 0.1, ease: Ae.easeIn } },
        He = function (e, n) {
          return Re({}, e, { delay: (0, Ce.hj)(n) ? n : null == n ? void 0 : n.enter });
        },
        We = function (e, n) {
          return Re({}, e, { delay: (0, Ce.hj)(n) ? n : null == n ? void 0 : n.exit });
        },
        Ge = [
          "in",
          "unmountOnExit",
          "animateOpacity",
          "startingHeight",
          "endingHeight",
          "style",
          "className",
          "transition",
          "transitionEnd"
        ],
        Ye = {
          exit: { height: { duration: 0.2, ease: Ae.ease }, opacity: { duration: 0.3, ease: Ae.ease } },
          enter: { height: { duration: 0.3, ease: Ae.ease }, opacity: { duration: 0.4, ease: Ae.ease } }
        },
        Xe = {
          exit: function (e) {
            var n,
              t,
              r = e.animateOpacity,
              o = e.startingHeight,
              a = e.transition,
              i = e.transitionEnd,
              u = e.delay;
            return Re({}, r && { opacity: ((t = o), null != t && parseInt(t.toString(), 10) > 0 ? 1 : 0) }, {
              height: o,
              transitionEnd: null == i ? void 0 : i.exit,
              transition: null != (n = null == a ? void 0 : a.exit) ? n : We(Ye.exit, u)
            });
          },
          enter: function (e) {
            var n,
              t = e.animateOpacity,
              r = e.endingHeight,
              o = e.transition,
              a = e.transitionEnd,
              i = e.delay;
            return Re({}, t && { opacity: 1 }, {
              height: r,
              transitionEnd: null == a ? void 0 : a.enter,
              transition: null != (n = null == o ? void 0 : o.enter) ? n : He(Ye.enter, i)
            });
          }
        },
        ze = o.forwardRef(function (e, n) {
          var t = e.in,
            r = e.unmountOnExit,
            a = e.animateOpacity,
            i = void 0 === a || a,
            u = e.startingHeight,
            c = void 0 === u ? 0 : u,
            l = e.endingHeight,
            s = void 0 === l ? "auto" : l,
            d = e.style,
            f = e.className,
            v = e.transition,
            m = e.transitionEnd,
            p = Ie(e, Ge),
            h = o.useState(!1),
            y = h[0],
            g = h[1];
          o.useEffect(function () {
            var e = setTimeout(function () {
              g(!0);
            });
            return function () {
              return clearTimeout(e);
            };
          }, []),
            (0, Ce.ZK)({
              condition: Boolean(c > 0 && r),
              message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
            });
          var E = parseFloat(c.toString()) > 0,
            x = {
              startingHeight: c,
              endingHeight: s,
              animateOpacity: i,
              transition: y ? v : { enter: { duration: 0 } },
              transitionEnd: Me()(m, { exit: r ? void 0 : { display: E ? "block" : "none" } })
            },
            b = !r || t,
            w = t || r ? "enter" : "exit";
          return o.createElement(
            Pe.M,
            { initial: !1, custom: x },
            b &&
              o.createElement(
                Te.E.div,
                Re({ ref: n }, p, {
                  className: (0, Ce.cx)("chakra-collapse", f),
                  style: Re({ overflow: "hidden", display: "block" }, d),
                  custom: x,
                  variants: Xe,
                  initial: !!r && "exit",
                  animate: w,
                  exit: "exit"
                })
              )
          );
        });
      Ce.Ts && (ze.displayName = "Collapse");
      var Ue = ["unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"],
        Ke = {
          enter: function (e) {
            var n,
              t = void 0 === e ? {} : e,
              r = t.transition,
              o = t.transitionEnd,
              a = t.delay;
            return {
              opacity: 1,
              transition: null != (n = null == r ? void 0 : r.enter) ? n : He(je.enter, a),
              transitionEnd: null == o ? void 0 : o.enter
            };
          },
          exit: function (e) {
            var n,
              t = void 0 === e ? {} : e,
              r = t.transition,
              o = t.transitionEnd,
              a = t.delay;
            return {
              opacity: 0,
              transition: null != (n = null == r ? void 0 : r.exit) ? n : We(je.exit, a),
              transitionEnd: null == o ? void 0 : o.exit
            };
          }
        },
        qe = { initial: "exit", animate: "enter", exit: "exit", variants: Ke },
        $e = o.forwardRef(function (e, n) {
          var t = e.unmountOnExit,
            r = e.in,
            a = e.className,
            i = e.transition,
            u = e.transitionEnd,
            c = e.delay,
            l = Ie(e, Ue),
            s = r || t ? "enter" : "exit",
            d = !t || (r && t),
            f = { transition: i, transitionEnd: u, delay: c };
          return o.createElement(
            Pe.M,
            { custom: f },
            d && o.createElement(Te.E.div, Re({ ref: n, className: (0, Ce.cx)("chakra-fade", a), custom: f }, qe, { animate: s }, l))
          );
        });
      Ce.Ts && ($e.displayName = "Fade");
      var Ve = ["unmountOnExit", "in", "reverse", "initialScale", "className", "transition", "transitionEnd", "delay"],
        Je = {
          exit: function (e) {
            var n,
              t = e.reverse,
              r = e.initialScale,
              o = e.transition,
              a = e.transitionEnd,
              i = e.delay;
            return Re(
              { opacity: 0 },
              t
                ? { scale: r, transitionEnd: null == a ? void 0 : a.exit }
                : { transitionEnd: Re({ scale: r }, null == a ? void 0 : a.exit) },
              { transition: null != (n = null == o ? void 0 : o.exit) ? n : We(je.exit, i) }
            );
          },
          enter: function (e) {
            var n,
              t = e.transitionEnd,
              r = e.transition,
              o = e.delay;
            return {
              opacity: 1,
              scale: 1,
              transition: null != (n = null == r ? void 0 : r.enter) ? n : He(je.enter, o),
              transitionEnd: null == t ? void 0 : t.enter
            };
          }
        },
        Qe = { initial: "exit", animate: "enter", exit: "exit", variants: Je },
        en = o.forwardRef(function (e, n) {
          var t = e.unmountOnExit,
            r = e.in,
            a = e.reverse,
            i = void 0 === a || a,
            u = e.initialScale,
            c = void 0 === u ? 0.95 : u,
            l = e.className,
            s = e.transition,
            d = e.transitionEnd,
            f = e.delay,
            v = Ie(e, Ve),
            m = !t || (r && t),
            p = r || t ? "enter" : "exit",
            h = { initialScale: c, reverse: i, transition: s, transitionEnd: d, delay: f };
          return o.createElement(
            Pe.M,
            { custom: h },
            m &&
              o.createElement(Te.E.div, Re({ ref: n, className: (0, Ce.cx)("chakra-offset-slide", l) }, Qe, { animate: p, custom: h }, v))
          );
        });
      Ce.Ts && (en.displayName = "ScaleFade");
      var nn = ["direction", "style", "unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"],
        tn = { exit: { duration: 0.15, ease: Ae.easeInOut }, enter: { type: "spring", damping: 25, stiffness: 180 } },
        rn = {
          exit: function (e) {
            var n,
              t = e.direction,
              r = e.transition,
              o = e.transitionEnd,
              a = e.delay;
            return Re({}, Le({ direction: t }).exit, {
              transition: null != (n = null == r ? void 0 : r.exit) ? n : We(tn.exit, a),
              transitionEnd: null == o ? void 0 : o.exit
            });
          },
          enter: function (e) {
            var n,
              t = e.direction,
              r = e.transitionEnd,
              o = e.transition,
              a = e.delay;
            return Re({}, Le({ direction: t }).enter, {
              transition: null != (n = null == o ? void 0 : o.enter) ? n : He(tn.enter, a),
              transitionEnd: null == r ? void 0 : r.enter
            });
          }
        },
        on = o.forwardRef(function (e, n) {
          var t = e.direction,
            r = void 0 === t ? "right" : t,
            a = e.style,
            i = e.unmountOnExit,
            u = e.in,
            c = e.className,
            l = e.transition,
            s = e.transitionEnd,
            d = e.delay,
            f = Ie(e, nn),
            v = Le({ direction: r }),
            m = Object.assign({ position: "fixed" }, v.position, a),
            p = !i || (u && i),
            h = u || i ? "enter" : "exit",
            y = { transitionEnd: s, transition: l, direction: r, delay: d };
          return o.createElement(
            Pe.M,
            { custom: y },
            p &&
              o.createElement(
                Te.E.div,
                Re({}, f, {
                  ref: n,
                  initial: "exit",
                  className: (0, Ce.cx)("chakra-slide", c),
                  animate: h,
                  exit: "exit",
                  custom: y,
                  variants: rn,
                  style: m
                })
              )
          );
        });
      Ce.Ts && (on.displayName = "Slide");
      var an = ["unmountOnExit", "in", "reverse", "className", "offsetX", "offsetY", "transition", "transitionEnd", "delay"],
        un = {
          initial: function (e) {
            var n,
              t = e.offsetX,
              r = e.offsetY,
              o = e.transition,
              a = e.transitionEnd,
              i = e.delay;
            return {
              opacity: 0,
              x: t,
              y: r,
              transition: null != (n = null == o ? void 0 : o.exit) ? n : We(je.exit, i),
              transitionEnd: null == a ? void 0 : a.exit
            };
          },
          enter: function (e) {
            var n,
              t = e.transition,
              r = e.transitionEnd,
              o = e.delay;
            return {
              opacity: 1,
              x: 0,
              y: 0,
              transition: null != (n = null == t ? void 0 : t.enter) ? n : He(je.enter, o),
              transitionEnd: null == r ? void 0 : r.enter
            };
          },
          exit: function (e) {
            var n,
              t = e.offsetY,
              r = e.offsetX,
              o = e.transition,
              a = e.transitionEnd,
              i = e.reverse,
              u = e.delay,
              c = { x: r, y: t };
            return Re(
              { opacity: 0, transition: null != (n = null == o ? void 0 : o.exit) ? n : We(je.exit, u) },
              i ? Re({}, c, { transitionEnd: null == a ? void 0 : a.exit }) : { transitionEnd: Re({}, c, null == a ? void 0 : a.exit) }
            );
          }
        },
        cn = { initial: "initial", animate: "enter", exit: "exit", variants: un },
        ln = o.forwardRef(function (e, n) {
          var t = e.unmountOnExit,
            r = e.in,
            a = e.reverse,
            i = void 0 === a || a,
            u = e.className,
            c = e.offsetX,
            l = void 0 === c ? 0 : c,
            s = e.offsetY,
            d = void 0 === s ? 8 : s,
            f = e.transition,
            v = e.transitionEnd,
            m = e.delay,
            p = Ie(e, an),
            h = !t || (r && t),
            y = r || t ? "enter" : "exit",
            g = { offsetX: l, offsetY: d, reverse: i, transition: f, transitionEnd: v, delay: m };
          return o.createElement(
            Pe.M,
            { custom: g },
            h &&
              o.createElement(Te.E.div, Re({ ref: n, className: (0, Ce.cx)("chakra-offset-slide", u), custom: g }, cn, { animate: y }, p))
          );
        });
      Ce.Ts && (ln.displayName = "SlideFade");
      var sn = t(54030),
        dn = t(32521);
      var fn = function () {
        return (
          (fn =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }),
          fn.apply(this, arguments)
        );
      };
      var vn = "right-scroll-bar-position",
        mn = "width-before-scroll-bar",
        pn = h(),
        hn = function () {},
        yn = o.forwardRef(function (e, n) {
          var t = o.useRef(null),
            r = o.useState({ onScrollCapture: hn, onWheelCapture: hn, onTouchMoveCapture: hn }),
            a = r[0],
            i = r[1],
            u = e.forwardProps,
            c = e.children,
            s = e.className,
            d = e.removeScrollBar,
            f = e.enabled,
            v = e.shards,
            m = e.sideCar,
            p = e.noIsolation,
            h = e.inert,
            y = e.allowPinchZoom,
            g = e.as,
            E = void 0 === g ? "div" : g,
            x = (function (e, n) {
              var t = {};
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
              }
              return t;
            })(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as"
            ]),
            b = m,
            w = l([t, n]),
            k = fn({}, x, a);
          return o.createElement(
            o.Fragment,
            null,
            f &&
              o.createElement(b, {
                sideCar: pn,
                removeScrollBar: d,
                shards: v,
                noIsolation: p,
                inert: h,
                setCallbacks: i,
                allowPinchZoom: !!y,
                lockRef: t
              }),
            u ? o.cloneElement(o.Children.only(c), fn({}, k, { ref: w })) : o.createElement(E, fn({}, k, { className: s, ref: w }), c)
          );
        });
      (yn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (yn.classNames = { fullWidth: mn, zeroRight: vn });
      var gn,
        En = function (e) {
          var n = e.sideCar,
            t = (0, f._T)(e, ["sideCar"]);
          if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var r = n.read();
          if (!r) throw new Error("Sidecar medium not found");
          return o.createElement(r, (0, f.pi)({}, t));
        };
      En.isSideCarExport = !0;
      function xn() {
        if (!document) return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var n = gn || t.nc;
        return n && e.setAttribute("nonce", n), e;
      }
      var bn = function () {
          var e = 0,
            n = null;
          return {
            add: function (t) {
              var r, o;
              0 == e &&
                (n = xn()) &&
                ((o = t),
                (r = n).styleSheet ? (r.styleSheet.cssText = o) : r.appendChild(document.createTextNode(o)),
                (function (e) {
                  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                })(n)),
                e++;
            },
            remove: function () {
              !--e && n && (n.parentNode && n.parentNode.removeChild(n), (n = null));
            }
          };
        },
        wn = function () {
          var e,
            n =
              ((e = bn()),
              function (n, t) {
                o.useEffect(
                  function () {
                    return (
                      e.add(n),
                      function () {
                        e.remove();
                      }
                    );
                  },
                  [n && t]
                );
              });
          return function (e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null;
          };
        },
        kn = { left: 0, top: 0, right: 0, gap: 0 },
        Nn = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        Cn = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return kn;
          var n = (function (e) {
              var n = window.getComputedStyle(document.body),
                t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                r = n["padding" === e ? "paddingTop" : "marginTop"],
                o = n["padding" === e ? "paddingRight" : "marginRight"];
              return [Nn(t), Nn(r), Nn(o)];
            })(e),
            t = document.documentElement.clientWidth,
            r = window.innerWidth;
          return { left: n[0], top: n[1], right: n[2], gap: Math.max(0, r - t + n[2] - n[0]) };
        },
        On = wn(),
        Sn = function (e, n, t, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === t && (t = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  n && "position: relative ".concat(r, ";"),
                  "margin" === t &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === t && "padding-right: ".concat(u, "px ").concat(r, ";")
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(vn, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(mn, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(vn, " .")
              .concat(vn, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(mn, " .")
              .concat(mn, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        Fn = function (e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r,
            i = o.useMemo(
              function () {
                return Cn(a);
              },
              [a]
            );
          return o.createElement(On, { styles: Sn(i, !n, a, t ? "" : "!important") });
        },
        Mn = function (e, n) {
          var t = n;
          do {
            if (Pn(e, t)) {
              var r = Tn(e, t);
              if (r[1] > r[2]) return !0;
            }
            t = t.parentNode;
          } while (t && t !== document.body);
          return !1;
        },
        Pn = function (e, n) {
          return "v" === e
            ? (function (e) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n.overflowY && !(n.overflowY === n.overflowX && "visible" === n.overflowY);
              })(n)
            : (function (e) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n.overflowX && !(n.overflowY === n.overflowX && "visible" === n.overflowX);
              })(n);
        },
        Tn = function (e, n) {
          return "v" === e
            ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight]
            : (function (e) {
                return [e.scrollLeft, e.scrollWidth, e.clientWidth];
              })(n);
          var t;
        },
        In = !1;
      if ("undefined" != typeof window)
        try {
          var Rn = Object.defineProperty({}, "passive", {
            get: function () {
              return (In = !0), !0;
            }
          });
          window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
        } catch (e) {
          In = !1;
        }
      var An = !!In && { passive: !1 },
        _n = function (e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
        },
        Bn = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Dn = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Zn = function (e) {
          return "\n  .block-interactivity-" + e + " {pointer-events: none;}\n  .allow-interactivity-" + e + " {pointer-events: all;}\n";
        },
        Ln = 0,
        jn = [];
      const Hn =
        ((Wn = function (e) {
          var n = o.useRef([]),
            t = o.useRef([0, 0]),
            r = o.useRef(),
            a = o.useState(Ln++)[0],
            i = o.useState(function () {
              return wn();
            })[0],
            u = o.useRef(e);
          o.useEffect(
            function () {
              u.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-" + a);
                  var n = [e.lockRef.current].concat((e.shards || []).map(Dn)).filter(Boolean);
                  return (
                    n.forEach(function (e) {
                      return e.classList.add("allow-interactivity-" + a);
                    }),
                    function () {
                      document.body.classList.remove("block-interactivity-" + a),
                        n.forEach(function (e) {
                          return e.classList.remove("allow-interactivity-" + a);
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = o.useCallback(function (e, n) {
              if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
              var o,
                a = _n(e),
                i = t.current,
                c = "deltaX" in e ? e.deltaX : i[0] - a[0],
                l = "deltaY" in e ? e.deltaY : i[1] - a[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(l) ? "h" : "v",
                f = Mn(d, s);
              if (!f) return !0;
              if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = Mn(d, s))), !f)) return !1;
              if ((!r.current && "changedTouches" in e && (c || l) && (r.current = o), !o)) return !0;
              var v = r.current || o;
              return (function (e, n, t, r, o) {
                var a = r,
                  i = t.target,
                  u = n.contains(i),
                  c = !1,
                  l = a > 0,
                  s = 0,
                  d = 0;
                do {
                  var f = Tn(e, i),
                    v = f[0],
                    m = f[1] - f[2] - v;
                  (v || m) && Pn(e, i) && ((s += m), (d += v)), (i = i.parentNode);
                } while ((!u && i !== document.body) || (u && (n.contains(i) || n === i)));
                return ((l && ((o && 0 === s) || (!o && a > s))) || (!l && ((o && 0 === d) || (!o && -a > d)))) && (c = !0), c;
              })(v, n, e, "h" === v ? c : l, !0);
            }, []),
            l = o.useCallback(function (e) {
              var t = e;
              if (jn.length && jn[jn.length - 1] === i) {
                var r = "deltaY" in t ? Bn(t) : _n(t),
                  o = n.current.filter(function (e) {
                    return e.name === t.type && e.target === t.target && ((n = e.delta), (o = r), n[0] === o[0] && n[1] === o[1]);
                    var n, o;
                  })[0];
                if (o && o.should) t.preventDefault();
                else if (!o) {
                  var a = (u.current.shards || [])
                    .map(Dn)
                    .filter(Boolean)
                    .filter(function (e) {
                      return e.contains(t.target);
                    });
                  (a.length > 0 ? c(t, a[0]) : !u.current.noIsolation) && t.preventDefault();
                }
              }
            }, []),
            s = o.useCallback(function (e, t, r, o) {
              var a = { name: e, delta: t, target: r, should: o };
              n.current.push(a),
                setTimeout(function () {
                  n.current = n.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (t.current = _n(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (n) {
              s(n.type, Bn(n), n.target, c(n, e.lockRef.current));
            }, []),
            v = o.useCallback(function (n) {
              s(n.type, _n(n), n.target, c(n, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              jn.push(i),
              e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: v }),
              document.addEventListener("wheel", l, An),
              document.addEventListener("touchmove", l, An),
              document.addEventListener("touchstart", d, An),
              function () {
                (jn = jn.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", l, An),
                  document.removeEventListener("touchmove", l, An),
                  document.removeEventListener("touchstart", d, An);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            p = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            p ? o.createElement(i, { styles: Zn(a) }) : null,
            m ? o.createElement(Fn, { gapMode: "margin" }) : null
          );
        }),
        pn.useMedium(Wn),
        En);
      var Wn,
        Gn = o.forwardRef(function (e, n) {
          return o.createElement(yn, fn({}, e, { ref: n, sideCar: Hn }));
        });
      Gn.classNames = yn.classNames;
      const Yn = Gn;
      var Xn = t(64678),
        zn = function (e) {
          return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        Un = new WeakMap(),
        Kn = new WeakMap(),
        qn = {},
        $n = 0,
        Vn = function (e) {
          return e && (e.host || Vn(e.parentNode));
        },
        Jn = function (e, n, t, r) {
          var o = (function (e, n) {
            return n
              .map(function (n) {
                if (e.contains(n)) return n;
                var t = Vn(n);
                return t && e.contains(t) ? t : null;
              })
              .filter(function (e) {
                return Boolean(e);
              });
          })(n, Array.isArray(e) ? e : [e]);
          qn[t] || (qn[t] = new WeakMap());
          var a = qn[t],
            i = [],
            u = new Set(),
            c = new Set(o),
            l = function (e) {
              e && !u.has(e) && (u.add(e), l(e.parentNode));
            };
          o.forEach(l);
          var s = function (e) {
            e &&
              !c.has(e) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (u.has(e)) s(e);
                else {
                  var n = e.getAttribute(r),
                    o = null !== n && "false" !== n,
                    c = (Un.get(e) || 0) + 1,
                    l = (a.get(e) || 0) + 1;
                  Un.set(e, c),
                    a.set(e, l),
                    i.push(e),
                    1 === c && o && Kn.set(e, !0),
                    1 === l && e.setAttribute(t, "true"),
                    o || e.setAttribute(r, "true");
                }
              });
          };
          return (
            s(n),
            u.clear(),
            $n++,
            function () {
              i.forEach(function (e) {
                var n = Un.get(e) - 1,
                  o = a.get(e) - 1;
                Un.set(e, n), a.set(e, o), n || (Kn.has(e) || e.removeAttribute(r), Kn.delete(e)), o || e.removeAttribute(t);
              }),
                --$n || ((Un = new WeakMap()), (Un = new WeakMap()), (Kn = new WeakMap()), (qn = {}));
            }
          );
        },
        Qn = function (e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = n || zn(e);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Jn(r, o, t, "aria-hidden"))
            : function () {
                return null;
              };
        };
      function et(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
      }
      function nt() {
        return (
          (nt =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          nt.apply(this, arguments)
        );
      }
      var tt = ["preset"],
        rt = {
          slideInBottom: nt({}, cn, { custom: { offsetY: 16, reverse: !0 } }),
          slideInRight: nt({}, cn, { custom: { offsetX: 16, reverse: !0 } }),
          scale: nt({}, Qe, { custom: { initialScale: 0.95, reverse: !0 } }),
          none: {}
        },
        ot = (0, a.m$)(Te.E.section),
        at = o.forwardRef(function (e, n) {
          var t = e.preset,
            r = et(e, tt),
            a = rt[t];
          return o.createElement(ot, nt({ ref: n }, a, r));
        }),
        it = new ((function () {
          function e() {
            (this.modals = void 0), (this.modals = []);
          }
          var n = e.prototype;
          return (
            (n.add = function (e) {
              this.modals.push(e);
            }),
            (n.remove = function (e) {
              this.modals = this.modals.filter(function (n) {
                return n !== e;
              });
            }),
            (n.isTopModal = function (e) {
              return this.modals[this.modals.length - 1] === e;
            }),
            e
          );
        })())();
      function ut(e) {
        var n,
          t,
          r,
          a = e.isOpen,
          i = e.onClose,
          u = e.id,
          c = e.closeOnOverlayClick,
          l = void 0 === c || c,
          s = e.closeOnEsc,
          d = void 0 === s || s,
          f = e.useInert,
          v = void 0 === f || f,
          m = e.onOverlayClick,
          p = e.onEsc,
          h = (0, o.useRef)(null),
          y = (0, o.useRef)(null),
          g = (0, Xn.ZS)(u, "chakra-modal", "chakra-modal--header", "chakra-modal--body"),
          E = g[0],
          x = g[1],
          b = g[2];
        (t = a && v),
          (r = (n = h).current),
          (0, o.useEffect)(
            function () {
              if (n.current && t) return Qn(n.current);
            },
            [t, n, r]
          ),
          (function (e, n) {
            (0, o.useEffect)(
              function () {
                return (
                  n && it.add(e),
                  function () {
                    it.remove(e);
                  }
                );
              },
              [n, e]
            );
          })(h, a);
        var w = (0, o.useRef)(null),
          k = (0, o.useCallback)(function (e) {
            w.current = e.target;
          }, []),
          N = (0, o.useCallback)(
            function (e) {
              "Escape" === e.key && (e.stopPropagation(), d && (null == i || i()), null == p || p());
            },
            [d, i, p]
          ),
          C = (0, o.useState)(!1),
          O = C[0],
          S = C[1],
          F = (0, o.useState)(!1),
          M = F[0],
          P = F[1],
          T = (0, o.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                nt({ role: "dialog" }, e, {
                  ref: (0, sn.lq)(n, h),
                  id: E,
                  tabIndex: -1,
                  "aria-modal": !0,
                  "aria-labelledby": O ? x : void 0,
                  "aria-describedby": M ? b : void 0,
                  onClick: (0, Ce.v0)(e.onClick, function (e) {
                    return e.stopPropagation();
                  })
                })
              );
            },
            [b, M, E, x, O]
          ),
          I = (0, o.useCallback)(
            function (e) {
              e.stopPropagation(), w.current === e.target && it.isTopModal(h) && (l && (null == i || i()), null == m || m());
            },
            [i, l, m]
          ),
          R = (0, o.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                nt({}, e, {
                  ref: (0, sn.lq)(n, y),
                  onClick: (0, Ce.v0)(e.onClick, I),
                  onKeyDown: (0, Ce.v0)(e.onKeyDown, N),
                  onMouseDown: (0, Ce.v0)(e.onMouseDown, k)
                })
              );
            },
            [N, k, I]
          );
        return {
          isOpen: a,
          onClose: i,
          headerId: x,
          bodyId: b,
          setBodyMounted: P,
          setHeaderMounted: S,
          dialogRef: h,
          overlayRef: y,
          getDialogProps: T,
          getDialogContainerProps: R
        };
      }
      var ct = ["className", "children", "containerProps"],
        lt = ["className", "transition"],
        st = ["className"],
        dt = ["className"],
        ft = ["className"],
        vt = ["onClick", "className"],
        mt = (0, sn.kr)({
          strict: !0,
          name: "ModalContext",
          errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
        }),
        pt = mt[0],
        ht = mt[1],
        yt = function (e) {
          var n = e.portalProps,
            t = e.children,
            r = e.autoFocus,
            i = e.trapFocus,
            u = e.initialFocusRef,
            c = e.finalFocusRef,
            l = e.returnFocusOnClose,
            s = e.blockScrollOnMount,
            d = e.allowPinchZoom,
            f = e.preserveScrollBarGap,
            v = e.motionPreset,
            m = e.lockFocusAcrossFrames,
            p = e.onCloseComplete,
            h = (0, a.jC)("Modal", e),
            y = nt({}, ut(e), {
              autoFocus: r,
              trapFocus: i,
              initialFocusRef: u,
              finalFocusRef: c,
              returnFocusOnClose: l,
              blockScrollOnMount: s,
              allowPinchZoom: d,
              preserveScrollBarGap: f,
              motionPreset: v,
              lockFocusAcrossFrames: m
            });
          return o.createElement(
            pt,
            { value: y },
            o.createElement(a.Fo, { value: h }, o.createElement(Pe.M, { onExitComplete: p }, y.isOpen && o.createElement(Se.h_, n, t)))
          );
        };
      (yt.defaultProps = {
        lockFocusAcrossFrames: !0,
        returnFocusOnClose: !0,
        scrollBehavior: "outside",
        trapFocus: !0,
        autoFocus: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale"
      }),
        Ce.Ts && (yt.displayName = "Modal");
      var gt = (0, a.m$)(Te.E.div),
        Et = (0, a.Gp)(function (e, n) {
          var t = e.className,
            r = e.children,
            i = e.containerProps,
            u = et(e, ct),
            c = ht(),
            l = c.getDialogProps,
            s = c.getDialogContainerProps,
            d = l(u, n),
            f = s(i),
            v = (0, Ce.cx)("chakra-modal__content", t),
            m = (0, a.yK)(),
            p = nt({ display: "flex", flexDirection: "column", position: "relative", width: "100%", outline: 0 }, m.dialog),
            h = nt(
              {
                display: "flex",
                width: "100vw",
                height: "100vh",
                "@supports(height: -webkit-fill-available)": { height: "-webkit-fill-available" },
                position: "fixed",
                left: 0,
                top: 0
              },
              m.dialogContainer
            ),
            y = ht().motionPreset;
          return o.createElement(
            xt,
            null,
            o.createElement(
              a.m$.div,
              nt({}, f, { className: "chakra-modal__content-container", tabIndex: -1, __css: h }),
              o.createElement(at, nt({ preset: y, className: v }, d, { __css: p }), r)
            )
          );
        });
      function xt(e) {
        var n = ht(),
          t = n.autoFocus,
          r = n.trapFocus,
          a = n.dialogRef,
          i = n.initialFocusRef,
          u = n.blockScrollOnMount,
          c = n.allowPinchZoom,
          l = n.finalFocusRef,
          s = n.returnFocusOnClose,
          d = n.preserveScrollBarGap,
          f = n.lockFocusAcrossFrames,
          v = (0, dn.oO)(),
          m = v[0],
          p = v[1];
        return (
          o.useEffect(
            function () {
              !m && p && setTimeout(p);
            },
            [m, p]
          ),
          o.createElement(
            Oe,
            {
              autoFocus: t,
              isDisabled: !r,
              initialFocusRef: i,
              finalFocusRef: l,
              restoreFocus: s,
              contentRef: a,
              lockFocusAcrossFrames: f
            },
            o.createElement(Yn, { removeScrollBar: !d, allowPinchZoom: c, enabled: u, forwardProps: !0 }, e.children)
          )
        );
      }
      Ce.Ts && (Et.displayName = "ModalContent");
      var bt = (0, a.Gp)(function (e, n) {
        var t = e.className;
        e.transition;
        var r = et(e, lt),
          i = (0, Ce.cx)("chakra-modal__overlay", t),
          u = nt({ pos: "fixed", left: "0", top: "0", w: "100vw", h: "100vh" }, (0, a.yK)().overlay),
          c = "none" === ht().motionPreset ? {} : qe;
        return o.createElement(gt, nt({}, c, { __css: u, ref: n, className: i }, r));
      });
      Ce.Ts && (bt.displayName = "ModalOverlay");
      var wt = (0, a.Gp)(function (e, n) {
        var t = e.className,
          r = et(e, st),
          i = ht(),
          u = i.headerId,
          c = i.setHeaderMounted;
        o.useEffect(
          function () {
            return (
              c(!0),
              function () {
                return c(!1);
              }
            );
          },
          [c]
        );
        var l = (0, Ce.cx)("chakra-modal__header", t),
          s = nt({ flex: 0 }, (0, a.yK)().header);
        return o.createElement(a.m$.header, nt({ ref: n, className: l, id: u }, r, { __css: s }));
      });
      Ce.Ts && (wt.displayName = "ModalHeader");
      var kt = (0, a.Gp)(function (e, n) {
        var t = e.className,
          r = et(e, dt),
          i = ht(),
          u = i.bodyId,
          c = i.setBodyMounted;
        o.useEffect(
          function () {
            return (
              c(!0),
              function () {
                return c(!1);
              }
            );
          },
          [c]
        );
        var l = (0, Ce.cx)("chakra-modal__body", t),
          s = (0, a.yK)();
        return o.createElement(a.m$.div, nt({ ref: n, className: l, id: u }, r, { __css: s.body }));
      });
      Ce.Ts && (kt.displayName = "ModalBody");
      var Nt = (0, a.Gp)(function (e, n) {
        var t = e.className,
          r = et(e, ft),
          i = (0, Ce.cx)("chakra-modal__footer", t),
          u = nt({ display: "flex", alignItems: "center", justifyContent: "flex-end" }, (0, a.yK)().footer);
        return o.createElement(a.m$.footer, nt({ ref: n }, r, { __css: u, className: i }));
      });
      Ce.Ts && (Nt.displayName = "ModalFooter");
      var Ct = (0, a.Gp)(function (e, n) {
        var t = e.onClick,
          r = e.className,
          u = et(e, vt),
          c = ht().onClose,
          l = (0, Ce.cx)("chakra-modal__close-btn", r),
          s = (0, a.yK)();
        return o.createElement(
          i.P,
          nt(
            {
              ref: n,
              __css: s.closeButton,
              className: l,
              onClick: (0, Ce.v0)(t, function (e) {
                e.stopPropagation(), c();
              })
            },
            u
          )
        );
      });
      Ce.Ts && (Ct.displayName = "ModalCloseButton");
      var Ot = ["className", "children"],
        St = (0, sn.kr)(),
        Ft = (St[0], St[1]);
      var Mt = (0, a.m$)(on),
        Pt = (0, a.Gp)(function (e, n) {
          var t = e.className,
            r = e.children,
            i = et(e, Ot),
            u = ht(),
            c = u.getDialogProps,
            l = u.getDialogContainerProps,
            s = u.isOpen,
            d = c(i, n),
            f = l(),
            v = (0, Ce.cx)("chakra-modal__content", t),
            m = (0, a.yK)(),
            p = nt({ display: "flex", flexDirection: "column", position: "relative", width: "100%", outline: 0 }, m.dialog),
            h = nt({ display: "flex", width: "100vw", height: "100vh", position: "fixed", left: 0, top: 0 }, m.dialogContainer),
            y = Ft().placement;
          return o.createElement(
            a.m$.div,
            nt({}, f, { className: "chakra-modal__content-container", __css: h }),
            o.createElement(xt, null, o.createElement(Mt, nt({ direction: y, in: s, className: v }, d, { __css: p }), r))
          );
        });
      Ce.Ts && (Pt.displayName = "DrawerContent");
      var Tt = t(24573),
        It = t(54680),
        Rt = t(91063),
        At = t(60242),
        _t = t(21127);
      const Bt = function (e) {
        let { children: n, showShadow: t, ...o } = e;
        const a = { base: "bannerLarge.base", medium: "bannerSmall.medium", large: "bannerSmall.large" };
        return (0, _t.tZ)(
          At.Z,
          (0, r.Z)(
            {
              color: "text.primary",
              fontFamily: a,
              fontSize: a,
              fontWeight: a,
              lineHeight: a,
              alignItems: "center",
              pt: "xlarge",
              pb: "medium",
              px: "large",
              textAlign: "center",
              boxShadow: t ? "default" : "none"
            },
            o
          ),
          n
        );
      };
      var Dt = t(74710);
      const Zt = function (e) {
        let { showShadow: n, children: t, ...o } = e;
        return (0, _t.tZ)(
          Dt.xu,
          (0, r.Z)(
            { pt: "grande", pb: "large", px: "large", width: "100%", textAlign: "center", boxShadow: n ? "navigationBottom" : "none" },
            o
          ),
          t
        );
      };
      var Lt = t(22907),
        jt = t(45647);
      const Ht = (e) => {
        let {
          modalContent: n,
          modalFooterStyle: t,
          modalBodyStyle: o,
          modalHeaderStyle: i,
          exitIconStyle: u,
          dialogStyle: c = {},
          size: l = "default",
          isOpen: s = !1,
          onClose: d,
          showCloseIcon: f = !0,
          scrollBehavior: v = "inside",
          children: m,
          viewEvent: p,
          payloads: h = [],
          additionalPayloadData: y = {},
          ...g
        } = e;
        const { space: E } = (0, a.Fg)(),
          [x, b, w, k, N] = (0, It.M)(s),
          { trackEvent: C } = (0, Rt.A4)(),
          [O, S] = h,
          F = (0, jt.hS)({ topicPayloadNodes: [O], tilePayloadNode: S });
        return (0, _t.tZ)(
          yt,
          (0, r.Z)(
            {
              isOpen: s,
              onClose: () => {
                k(!1), d && (C("Close Modal", { ...F, ...y }), d());
              },
              size: l,
              scrollBehavior: v,
              dialogStyle:
                "full" === l ? { maxHeight: "100vh", ...c } : { my: "auto", maxHeight: "80vh", mx: `min(${E.xlarge}, 100vw)`, ...c }
            },
            g
          ),
          (0, _t.tZ)(bt, null),
          (0, _t.tZ)(
            Lt.DI,
            { as: Et, viewEvent: p, payloads: h },
            n?.header ? (0, _t.tZ)(wt, { p: 0, zIndex: 1 }, (0, _t.tZ)(Bt, (0, r.Z)({ showShadow: x && b }, i), n.header)) : null,
            f ? (0, _t.tZ)(Ct, { zIndex: 1 }, (0, _t.tZ)(Tt.Z, (0, r.Z)({ fill: "text.secondary" }, u))) : null,
            m ? (0, _t.tZ)(kt, (0, r.Z)({ ref: N, px: "large", py: "medium", onScroll: w }, o), m) : null,
            n?.footer ? (0, _t.tZ)(Nt, { p: 0 }, (0, _t.tZ)(Zt, (0, r.Z)({ showShadow: x && b }, t), n.footer)) : null
          )
        );
      };
    },
    54680: (e, n, t) => {
      t.d(n, { M: () => o, m: () => a });
      var r = t(89526);
      const o = (e) => {
          const [n, t] = (0, r.useState)(!1),
            [o, a] = (0, r.useState)(!1),
            i = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              i.current && e && t(i.current.scrollHeight > i.current.clientHeight);
            }, [i, e, o]),
            [
              n,
              o,
              () => {
                o || a(!0);
              },
              a,
              i
            ]
          );
        },
        a = (e) => {
          const [n, t] = (0, r.useState)(!1),
            [o, a] = (0, r.useState)(!1),
            i = (0, r.useCallback)(
              (n) => {
                null != n && (t(n.scrollHeight > n.clientHeight), e || (a(!1), t(!1), n.scrollTo(0, 0)));
              },
              [e]
            );
          return [
            n,
            o,
            () => {
              !o && e && a(!0);
            },
            i
          ];
        };
    },
    15383: (e, n, t) => {
      t.d(n, { M: () => m });
      var r = t(97582),
        o = t(89526),
        a = t(2279);
      var i = t(2633),
        u = t(85901),
        c = 0;
      function l() {
        var e = c;
        return c++, e;
      }
      var s = function (e) {
        var n = e.children,
          t = e.initial,
          r = e.isPresent,
          a = e.onExitComplete,
          c = e.custom,
          s = e.presenceAffectsLayout,
          f = (0, u.h)(d),
          v = (0, u.h)(l),
          m = (0, o.useMemo)(
            function () {
              return {
                id: v,
                initial: t,
                isPresent: r,
                custom: c,
                onExitComplete: function (e) {
                  f.set(e, !0);
                  var n = !0;
                  f.forEach(function (e) {
                    e || (n = !1);
                  }),
                    n && (null == a || a());
                },
                register: function (e) {
                  return (
                    f.set(e, !1),
                    function () {
                      return f.delete(e);
                    }
                  );
                }
              };
            },
            s ? void 0 : [r]
          );
        return (
          (0, o.useMemo)(
            function () {
              f.forEach(function (e, n) {
                return f.set(n, !1);
              });
            },
            [r]
          ),
          o.useEffect(
            function () {
              !r && !f.size && (null == a || a());
            },
            [r]
          ),
          o.createElement(i.O.Provider, { value: m }, n)
        );
      };
      function d() {
        return new Map();
      }
      var f = t(62299);
      function v(e) {
        return e.key || "";
      }
      var m = function (e) {
        var n = e.children,
          t = e.custom,
          i = e.initial,
          u = void 0 === i || i,
          c = e.onExitComplete,
          l = e.exitBeforeEnter,
          d = e.presenceAffectsLayout,
          m = void 0 === d || d,
          p = (function () {
            var e = (0, o.useRef)(!1),
              n = (0, r.CR)((0, o.useState)(0), 2),
              t = n[0],
              i = n[1];
            return (
              (0, a.z)(function () {
                return (e.current = !0);
              }),
              (0, o.useCallback)(
                function () {
                  !e.current && i(t + 1);
                },
                [t]
              )
            );
          })(),
          h = (0, o.useContext)(f.WH);
        (0, f.Md)(h) && (p = h.forceUpdate);
        var y = (0, o.useRef)(!0),
          g = (function (e) {
            var n = [];
            return (
              o.Children.forEach(e, function (e) {
                (0, o.isValidElement)(e) && n.push(e);
              }),
              n
            );
          })(n),
          E = (0, o.useRef)(g),
          x = (0, o.useRef)(new Map()).current,
          b = (0, o.useRef)(new Set()).current;
        if (
          ((function (e, n) {
            e.forEach(function (e) {
              var t = v(e);
              n.set(t, e);
            });
          })(g, x),
          y.current)
        )
          return (
            (y.current = !1),
            o.createElement(
              o.Fragment,
              null,
              g.map(function (e) {
                return o.createElement(s, { key: v(e), isPresent: !0, initial: !!u && void 0, presenceAffectsLayout: m }, e);
              })
            )
          );
        for (var w = (0, r.ev)([], (0, r.CR)(g)), k = E.current.map(v), N = g.map(v), C = k.length, O = 0; O < C; O++) {
          var S = k[O];
          -1 === N.indexOf(S) ? b.add(S) : b.delete(S);
        }
        return (
          l && b.size && (w = []),
          b.forEach(function (e) {
            if (-1 === N.indexOf(e)) {
              var n = x.get(e);
              if (n) {
                var r = k.indexOf(e);
                w.splice(
                  r,
                  0,
                  o.createElement(
                    s,
                    {
                      key: v(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        x.delete(e), b.delete(e);
                        var n = E.current.findIndex(function (n) {
                          return n.key === e;
                        });
                        E.current.splice(n, 1), b.size || ((E.current = g), p(), c && c());
                      },
                      custom: t,
                      presenceAffectsLayout: m
                    },
                    n
                  )
                );
              }
            }
          }),
          (w = w.map(function (e) {
            var n = e.key;
            return b.has(n) ? e : o.createElement(s, { key: v(e), isPresent: !0, presenceAffectsLayout: m }, e);
          })),
          (E.current = w),
          o.createElement(
            o.Fragment,
            null,
            b.size
              ? w
              : w.map(function (e) {
                  return (0, o.cloneElement)(e);
                })
          )
        );
      };
    }
  }
]);
