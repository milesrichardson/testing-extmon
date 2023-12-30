(self.webpackChunk = self.webpackChunk || []).push([
  [2043],
  {
    74813: (t, e, n) => {
      n.d(e, { p: () => ct });
      var r = n(27378),
        i = n(64015),
        o = n(57050),
        a = n(8543),
        u = n(28043),
        c = n(77176),
        s = n(32952),
        l = n(2834),
        d = n(34217),
        f = n(66268),
        m = n(89572),
        p = n(18702),
        v = n(98403),
        y = n(13578),
        h = n(88392),
        S = n(33053),
        g = n(90845),
        I = n(89894),
        b = n(5114),
        k = n(99094),
        O = n(85287);
      const A = d.UI.Grid.make(({ slots: t }) =>
        r.createElement(
          k.f.Context.Provider,
          { value: k.f.emptyWithName("card") },
          r.createElement(a.F.div, { "data-role": "animation-wrapper", className: O.$4.animationWrapper }, t.animatedItemBaseChild)
        )
      );
      var U,
        w,
        P,
        C,
        D = n(22800);
      !(function (t) {
        t.make = function (t) {
          return d.UI.Union.asOption(d.UI.Knot.make(e, { shadeItem: t }));
        };
        const e = d.UI.Grid.make(({ slots: t, state: e, notify: n }) =>
          r.createElement(
            a.F.Fragment,
            null,
            e.pipe(
              c.U(({ item: i, key: o, className: u }) =>
                r.createElement(
                  a.F.div,
                  {
                    className: u,
                    key: "shade" + e + o,
                    onAnimationEnd: (t) => {
                      (D.c.get(t.animationName) !== u && O.bb.get(t.animationName) !== u) ||
                        n({ type: f.eI.Kind.completeTransitionTo, id: i.id, transitionId: i.visualState.transitionId })();
                    }
                  },
                  t.shadeItem
                )
              )
            )
          )
        );
      })(U || (U = {})),
        (function (t) {
          t.make = function (t) {
            return d.UI.Composite.make(A, d.UI.Knot.make(e, { shade: U.make(t), item: t }));
          };
          const e = d.UI.Grid.make(({ state: t, slots: e, notify: n }) =>
            r.createElement(
              a.F.Fragment,
              null,
              t.pipe(
                c.U(
                  ({ item: t, className: i, hasAnimation: o }) => (
                    o ||
                      requestAnimationFrame(
                        n({ type: f.eI.Kind.completeTransitionTo, id: t.id, transitionId: t.visualState.transitionId })
                      ),
                    r.createElement(
                      a.F.Fragment,
                      null,
                      e.shade,
                      r.createElement(
                        a.F.div,
                        {
                          className: b.toUndefined(i),
                          key: "expanded" === t.visualState.transition.type ? "focused" : t.visualState.transition.type,
                          onAnimationEnd: n({ type: f.eI.Kind.completeTransitionTo, id: t.id, transitionId: t.visualState.transitionId }),
                          onTransitionEnd: () => {
                            "presuccess" === t.visualState.transition.type &&
                              n({
                                type: f.eI.Kind.startTransitionTo,
                                id: t.id,
                                transition: { type: "success", clockwise: t.visualState.transition.clockwise }
                              })();
                          }
                        },
                        e.item
                      )
                    )
                  )
                )
              )
            )
          );
        })(w || (w = {})),
        (function (t) {
          t.make = function (t) {
            return d.UI.Composite.make(A, d.UI.Knot.make(e, { staticItemChild: t }));
          };
          const e = d.UI.Grid.make(({ state: t, slots: e }) =>
            r.createElement(a.F.Fragment, null, t.pipe(c.U((t) => r.createElement(a.F.div, { key: t }, e.staticItemChild))))
          );
        })(P || (P = {})),
        (function (t) {
          t.make = function (t) {
            return d.UI.Knot.make(e, { animatedItem: d.UI.Union.make("animatedItemKind", { static: P.make(t), animating: w.make(t) }) });
          };
          const e = d.UI.Grid.make(({ state: t, slots: e }) =>
            r.createElement(
              a.F.Fragment,
              null,
              t.pipe(
                u.x(
                  (t, e) =>
                    t.id === e.id &&
                    t.visualState.transitionId === e.visualState.transitionId &&
                    t.visualState.transition.type === e.visualState.transition.type
                ),
                c.U(() => r.createElement(a.F.Fragment, null, e.animatedItem))
              )
            )
          );
        })(C || (C = {}));
      var E = n(22232);
      function j(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]));
        }
        return i;
      }
      function T(t, e, n, r) {
        if (
          n.some(function (t) {
            return "positionedClick" === t.type;
          })
        ) {
          var i = n[0];
          switch (i.source) {
            case "collapsedCard":
              return 1 === e.alerts.length
                ? {
                    type: f.lY.Type.alertMinicardButtonClick,
                    alertHighlight: { highlightIndex: 0, alert: e.alerts[0] },
                    clickPoint: i.sourcePosition
                  }
                : { type: f.lY.Type.miniItemClick, id: e.id };
            case "list":
              return { type: f.lY.Type.listItemClick, clickPoint: i.sourcePosition };
            default:
              return { type: f.lY.Type.miniItemClick, id: e.id };
          }
        } else if (
          n.some(function (t) {
            return "hoverStateChanged" === t.type;
          })
        ) {
          var o = n[0];
          return { type: f.lY.Type.hover, id: e.id, kind: o.hovered ? "hover" : "unhover" };
        }
        return { type: f.lY.Type.sduiCardAction, sourceId: t, cardId: e.id, actions: n, scope: r };
      }
      var L = function (t) {
          var e = t.inert,
            n = x(t, ["inert"]),
            i = r.useRef(null);
          return (
            g.P.useSubscriptionTo(
              e.pipe(
                l.b(function (t) {
                  var e, n;
                  return t
                    ? null === (e = i.current) || void 0 === e
                      ? void 0
                      : e.setAttribute("inert", "true")
                    : null === (n = i.current) || void 0 === n
                    ? void 0
                    : n.removeAttribute("inert");
                })
              )
            ),
            r.createElement(
              a.F.div,
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(n).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                      })
                    )),
                    r.forEach(function (e) {
                      j(t, e, n[e]);
                    });
                }
                return t;
              })({ mount: i }, n)
            )
          );
        },
        F = d.UI.Grid.make(function (t) {
          var e = t.view,
            n = t.slots;
          return r.createElement(L, { className: v.mk(e("hovered"))(B.listWrapperFocused, B.listWrapper), inert: e("inert") }, n.card);
        }),
        G = d.UI.Grid.make(function (t) {
          var e = t.view,
            n = t.slots;
          return r.createElement(L, { className: B.listWrapperFocused, inert: e("inert") }, n.card);
        }),
        N = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.k,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.P;
          return d.UI.Node.make(function (i) {
            var s = i.view,
              l = i.notify,
              d = s("view").pipe(
                u.x(function (t, e) {
                  return t.equals(e);
                })
              ),
              f = [];
            return r.createElement(
              a.F.Fragment,
              null,
              d.pipe(
                c.U(function (i) {
                  return r.createElement(n, {
                    key: i.id,
                    sduiRootId: i.id,
                    content: i.cardDSL.value,
                    designSystem: e,
                    notify: function (t, e, n) {
                      return l(T(t, i, e, n))();
                    },
                    transitions: f,
                    prevContent: i.prevCardDSL,
                    onAnimationEnd: o.Q1,
                    onMount: o.Q1,
                    longFormCardState: { viewKind: t }
                  });
                })
              )
            );
          });
        },
        q = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
          return d.UI.Knot.make(F, { card: N("collapsed", t, e) });
        },
        z = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
          return d.UI.Knot.make(G, { card: N("focused", t, e) });
        },
        W = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
          return d.UI.Union.make("kind", { collapsed: q(t, e), focused: z(t, e), hidden: d.UI.Node.empty });
        },
        K = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
          return C.make(W(t, e));
        },
        R = { background: y.XY.Surface.Primary.Default, borderRadius: I.ux.rem(h.xB) },
        B = I.ux.stylesheet({
          listWrapper: [R, { border: "0.5px solid ".concat(y.XY.Boundaries.Primary.Default) }],
          listWrapperFocused: [R, S.q_]
        });
      function Z(t) {
        switch (t) {
          case "focused":
          case "expanded":
          case "success":
          case "presuccess":
          case "feedback_form":
            return "focused";
          case "added":
          case "rendered":
            return "collapsed";
          case "hidden":
          case "removed":
          case "muted":
            return "hidden";
          default:
            return (0, E.vE)(t);
        }
      }
      var Y,
        M = n(2844),
        V = n(24713),
        H = n(85985),
        Q = n(93508),
        $ = n(76974),
        _ = n(35108),
        X = n(60797),
        J = n(24209),
        tt = n(66310),
        et = n(17343);
      function nt(t, e, n, r) {
        return d.Z.composeUnion(
          {
            Some: d.Z.composeKnot({
              value: d.Z.composeKnot({
                root: () =>
                  t.pipe(
                    c.U((t) =>
                      (0, o.zG)(
                        rt(r)(t),
                        b.map((e) => ({ item: t, key: n(t), className: e }))
                      )
                    ),
                    X.oA
                  ),
                shadeItem: e
              })
            }),
            None: () => $.of(b.none)
          },
          (e) =>
            J.T(
              t.pipe(c.U(rt(r))),
              e.pipe(
                H.h((t) => "root" === t.action.action.key && t.action.action.action.type === f.eI.Kind.completeTransitionTo),
                tt.w(v.b2.rafScheduler),
                et.h(b.none)
              )
            )
        );
      }
      function rt(t) {
        return (e) =>
          (0, o.zG)(
            e.visualState.from,
            b.chain(() => t(e.visualState).shade)
          );
      }
      function it(t, e, n, r, i) {
        return d.Z.composeKnot({
          root: () =>
            t.pipe(
              c.U((t) => {
                const { main: e, shade: n } = i(t.visualState);
                return { item: t, className: e, hasAnimation: b.isSome(e) || b.isSome(n) };
              })
            ),
          shade: nt(t, n, r, i),
          item: e
        });
      }
      function ot(t, e) {
        return d.Z.composeKnot({ root: () => t.pipe(c.U((t) => t.visualState.transition.type)), staticItemChild: e });
      }
      function at(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ut(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                u = !1;
              try {
                for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (u) throw i;
                }
              }
              return o;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return at(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return at(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (t) {
        (t.flow = function (t, e, n, r = (t) => t.id, i = _.CE.toOption(_.SA)) {
          return d.Z.composeKnot({
            root: () => t,
            animatedItem: d.Z.composeUnion({ static: ot(t, e), animating: it(t, e, n, r, i) }, () =>
              t.pipe(c.U((t) => ({ animatedItemKind: t.visualState.incomplete ? "animating" : "static" })))
            )
          });
        }),
          (t.extend = function (t) {
            return d.Z.extendActions(
              l.b((e) => {
                const n = e.action;
                if ("animating" === n.key)
                  if ("root" === n.action.key) t(n.action.action);
                  else if ("shade" === n.action.key) {
                    const e = n.action.action.action.action;
                    "root" === e.key && t(e.action);
                  }
              })
            );
          });
      })(Y || (Y = {}));
      var ct,
        st = function (t) {
          return function (e) {
            var n = function (n) {
                return M.aj([
                  n.pipe(
                    V.j("action"),
                    l.b(function (e) {
                      return t.next(e);
                    }),
                    H.h(function (t) {
                      return "hover" === t.type;
                    }),
                    c.U(function (t) {
                      return "hover" === t.kind;
                    }),
                    Q.O(!1)
                  ),
                  e
                ]).pipe(
                  c.U(function (t) {
                    var e = ut(t, 2),
                      n = e[0],
                      r = e[1];
                    return { root: { inert: r.positionState.inert, hovered: n }, card: { kind: "alertRefSDUI", view: r } };
                  })
                );
              },
              r = { collapsed: n, focused: n, hidden: (0, o.a9)($.of(void 0)) },
              i = d.Z.composeUnion(r, function () {
                return e.pipe(
                  c.U(function (t) {
                    return { kind: Z(t.visualState.transition.type) };
                  })
                );
              }),
              a = d.Z.composeUnion(r, function () {
                return e.pipe(
                  c.U(function (t) {
                    return {
                      kind: (0, o.zG)(
                        t.visualState.from,
                        b.fold(function () {
                          return "collapsed";
                        }, Z)
                      )
                    };
                  })
                );
              });
            return Y.flow(e, i, a);
          };
        };
      !(function (t) {
        (t.ListCard = N),
          (t.AnimatedListCard = K),
          (t.animatedListCardFlowFactory = st),
          (t.CollapsedCardWrapper = F),
          (t.FocusedCardWrapper = G),
          (t.SingleCard = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
            return d.UI.Node.make(function (n) {
              var s = n.view,
                l = n.notify,
                d = s("view");
              return r.createElement(
                a.F.Fragment,
                null,
                d.pipe(
                  u.x(function (t, e) {
                    return t.equals(e);
                  }),
                  c.U(function (n) {
                    return r.createElement(e, {
                      key: n.id,
                      sduiRootId: n.id,
                      content: n.cardDSL.value,
                      designSystem: t,
                      notify: function (t, e, r) {
                        return l({ type: f.lY.Type.sduiCardAction, sourceId: t, cardId: n.id, actions: e, scope: r })();
                      },
                      transitions: i.qo(n.transitions),
                      prevContent: n.prevCardDSL,
                      onAnimationEnd: l({ type: f.eI.Kind.completeTransitionTo, id: n.id, transitionId: n.visualState.transitionId }),
                      onMount: o.Q1
                    });
                  })
                )
              );
            });
          }),
          (t.SquashedListCard = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.k,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.P;
            return d.UI.Node.make(function (n) {
              var r = n.view,
                i = n.notify,
                a = r("view").pipe(
                  u.x(function (t, e) {
                    return t.equals(e);
                  })
                ),
                c = new s.xQ();
              return (
                g.P.useSubscriptionTo(
                  c.pipe(
                    l.b(function (t) {
                      return i(t)();
                    })
                  )
                ),
                d.UI.mount(
                  K(t, e),
                  (0, o.zG)(
                    st(c)(a),
                    Y.extend(function (t) {
                      return c.next(t);
                    })
                  )
                )
              );
            });
          });
      })(ct || (ct = {}));
    },
    60984: (t, e, n) => {
      n.d(e, { Q: () => r });
      var r,
        i = n(27378),
        o = n(34217);
      !(function (t) {
        t.Empty = o.UI.Node.make(function () {
          return i.createElement("div", null);
        });
      })(r || (r = {}));
    },
    52976: (t, e, n) => {
      n.d(e, { P: () => r });
      var r,
        i = n(64015),
        o = n(57050),
        a = n(77176),
        u = n(16892),
        c = n(48521),
        s = n(5114),
        l = n(8125),
        d = n(73975),
        f = n(71249),
        m = n(22232),
        p = n(95195),
        v = n(92843),
        y = n(79880),
        h = n(17594),
        S = n(74660),
        g = n(66896),
        I = n(4890),
        b = n(36156),
        k = n(69345),
        O = n(98182),
        A = n(55567),
        U = n(35416),
        w = n(95983),
        P = n(40966);
      function C(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              C(t, e, n[e]);
            });
        }
        return t;
      }
      function E(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e &&
                    (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(e)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
          t
        );
      }
      !(function (t) {
        var e,
          n = function (t) {
            return "".concat(t.id);
          };
        (t.isAlertRefSDUIItem = function (t) {
          return t.kind === C;
        }),
          (function (t) {
            var e = function (t) {
              return "strongAlertRef" === t.type;
            };
            (t.isBulkAcceptSDUI = function (t) {
              return (0, o.zG)(
                t.cardDSL,
                s.exists(
                  (0, l.W9)(e, function (t) {
                    var e;
                    return (null === (e = t.name) || void 0 === e ? void 0 : e.value) === y.MU.StrongAlertRefBulkAccept;
                  })
                )
              );
            }),
              (t.isBulkDismissSDUI = function (t) {
                return (0, o.zG)(
                  t.cardDSL,
                  s.exists(
                    (0, l.W9)(e, function (t) {
                      var e;
                      return (null === (e = t.name) || void 0 === e ? void 0 : e.value) === y.MU.StrongAlertRefBulkDismiss;
                    })
                  )
                );
              }),
              (t.isLongFormCardSDUI = (0, o.ls)(
                function (t) {
                  return t.cardDSL;
                },
                s.exists(function (t) {
                  return "longFormCard" === t.type;
                })
              ));
          })((e = t.Item || (t.Item = {}))),
          (function (t) {
            (t.BulkDismiss = "bulk_dismiss"), (t.BulkAccept = "bulk_accept");
          })(t.Features || (t.Features = {}));
        var r,
          C = (t.Kind = "AlertRefSDUIItem"),
          j = d.f7(function (t, e) {
            return (
              t.hashCode() === e.hashCode() &&
              k.Z.eq.equals(t.positionState, e.positionState) &&
              P.t.eq.equals(t.visualState, e.visualState) &&
              i.Eh(h.$.eq).equals(t.alerts, e.alerts) &&
              t.activeAlertIndex === e.activeAlertIndex
            );
          }),
          x = (t.idEq = {
            equals: function (t, e) {
              return d.yv.equals(t, e);
            }
          }),
          T = (t.eq = {
            equals: function (t, e) {
              return x.equals(t.id, e.id) && j.equals(t, e) && O.e.eq.equals(t, e);
            }
          });
        (t.getId = n),
          (function (t) {
            (t.createItem = function (t, e, n) {
              return {
                id: t,
                kind: C,
                alerts: n,
                activeAlertIndex: 0,
                cardDSL: s.some(e),
                prevCardDSL: s.none,
                transitions: [],
                positionState: u.s.PositionState.empty,
                visualState: c.o.VisualState.initial({ type: "added", clockwise: !0 }, !0),
                renderOptions: I.j.defaultOptions,
                equals: function (t) {
                  return T.equals(this, t);
                },
                hashCode: function () {
                  var t = this;
                  return (0, b.NO)({
                    id: t.id,
                    alertsCount: t.alerts.length,
                    transitions: (0, b.AC)(
                      t.transitions
                        .map(function (t) {
                          return t.toName;
                        })
                        .join("")
                    ),
                    activeAlertIndex: t.activeAlertIndex
                  });
                }
              };
            }),
              (t.setActiveAlertId = function (t) {
                return function (e) {
                  return (0, o.zG)(
                    e.alerts,
                    i.cx(function (e) {
                      return e.id === t;
                    }),
                    s.map(function (t) {
                      return E(D({}, e), { activeAlertIndex: t });
                    })
                  );
                };
              }),
              (t.setActiveHighlightIndex = function (t) {
                return function (e) {
                  return (0, o.zG)(
                    e,
                    s.fromPredicate(j),
                    s.alt(function () {
                      return x(e);
                    }),
                    s.map(function (e) {
                      return E(D({}, e), { activeHighlightIndex: t });
                    })
                  );
                };
              });
            var n = c.o.Capabilities.getPojoUpdates(),
              a = (t.pojoSDUI = O.e.Capabilities.getPojoUpdates()),
              d = u.s.Capabilities.getPojoUpdates(),
              p = (t.changePosition = d.setPosition),
              v = (t.updateSDUIState = a.setSDUIState),
              y = (t.sduiSelect = O.e.Capabilities.getSelect(v)),
              g = function (t) {
                return function (e) {
                  return (0, o.zG)(
                    t,
                    s.exists(function (t) {
                      return e.id === t.id;
                    })
                  )
                    ? e
                    : p(u.s.PositionState.invalidateHeight(e.positionState))(e);
                };
              },
              k = function (t, e) {
                return (0, o.ls)(y(t, e), w.transitionTo({ type: "focused", clockwise: !1 }), g(t));
              },
              U =
                ((t.select = {
                  selectByAlert: function (t, e, n) {
                    return k(t, n);
                  },
                  select: k,
                  unselect: function (t) {
                    return (0, o.ls)(w.transitionTo({ type: "rendered", clockwise: !1 }), g(t));
                  }
                }),
                (t.hasAlerts = {
                  hasActiveAlert: function (t) {
                    return (0, o.zG)(
                      t,
                      s.fromPredicate((0, l.ff)(e.isBulkDismissSDUI)),
                      s.chain(function (t) {
                        return s.fromNullable(t.alerts[t.activeAlertIndex]);
                      }),
                      s.map(function (e) {
                        return { alert: e, highlightIndex: j(t) ? t.activeHighlightIndex : 0 };
                      })
                    );
                  },
                  hasAlert: function (t) {
                    return function (e) {
                      return (
                        void 0 !==
                        e.alerts.find(function (e) {
                          return e.id === t;
                        })
                      );
                    };
                  },
                  isSelectableByAlert: function (t) {
                    return function (e) {
                      return 1 === e.alerts.length && e.alerts[0].id === t.alert.id;
                    };
                  }
                }),
                O.e.Capabilities.getCompleteTransition(v)),
              w = (t.animatable = {
                completeTransition: function (t) {
                  return function (e) {
                    return (0, o.zG)(e, n.setVisualState(c.o.VisualState.complete(e.visualState, t)), U);
                  };
                },
                transitionTo: function (t) {
                  return function (e) {
                    var r = c.o.VisualState.to(e.visualState, t);
                    return n.setVisualState(r)(e);
                  };
                },
                changeVisualState: n.setVisualState
              }),
              P = (t.remove = {
                remove: function (t, e) {
                  return function (n) {
                    return t(n) ? w.transitionTo({ type: "removed", clockwise: e(n) })(n) : n;
                  };
                }
              });
            (t.removeAlert = {
              removeAlertFromItem: function (t) {
                return function (e) {
                  var n = new Set(
                      t.map(function (t) {
                        return t.id;
                      })
                    ),
                    r = e.alerts.filter(function (t) {
                      return !n.has(t.id);
                    });
                  return (0, o.zG)(E(D({}, e), { alerts: r }), function (t) {
                    return 0 === t.alerts.length ? w.transitionTo({ type: "removed", clockwise: !1 })(t) : t;
                  });
                };
              }
            }),
              (t.updateWithAlert = {
                updateWithAlerts: function (t) {
                  return function (e) {
                    var n = new Set(
                        e.alerts.map(function (t) {
                          return t.id;
                        })
                      ),
                      r = new Set(
                        t.map(function (t) {
                          return t.id;
                        })
                      ),
                      i = (0, o.zG)(
                        t,
                        f.uK(function (t) {
                          return n.has(t.id);
                        })
                      ),
                      a = i.left,
                      u = i.right,
                      c = function (t, e) {
                        switch (t.state.type) {
                          case S.bZ.State.Type.REGISTERED:
                            return e;
                          case S.bZ.State.Type.REMOVED:
                            return "focused" === e.visualState.transition.type && 0 === e.alerts.length ? P.remove(o.W8, o.W8)(e) : e;
                          case S.bZ.State.Type.APPLIED:
                          case S.bZ.State.Type.BEING_APPLIED:
                            return P.remove(o.W8, o.W8)(e);
                          default:
                            return (0, m.vE)(t.state);
                        }
                      },
                      s = e,
                      l = !0,
                      d = !1,
                      p = void 0;
                    try {
                      for (var v, y = u[Symbol.iterator](); !(l = (v = y.next()).done); l = !0) {
                        s = c(v.value, s);
                      }
                    } catch (t) {
                      (d = !0), (p = t);
                    } finally {
                      try {
                        l || null == y.return || y.return();
                      } finally {
                        if (d) throw p;
                      }
                    }
                    return E(D({}, s), {
                      alerts: s.alerts
                        .filter(function (t) {
                          return r.has(t.id);
                        })
                        .concat(a.map(h.$.fromModel))
                    });
                  };
                }
              }),
              (t.disposable = {
                isScheduledToDispose: function (t) {
                  return "removed" === t.visualState.transition.type;
                }
              });
            function j(t) {
              return "activeAlert" in t && "activeHighlightIndex" in t;
            }
            function x(t) {
              return (0, o.zG)(
                r.hasAlerts.hasActiveAlert(t),
                s.map(function (e) {
                  return E(D({}, t), { activeAlert: e.alert, activeHighlightIndex: e.highlightIndex, meta: A.n.empty(void 0) });
                })
              );
            }
            (t.isAlertItem = j), (t.toAlertItem = x);
          })((r = t.Capabilities || (t.Capabilities = {}))),
          (function (t) {
            var e = function (t, e, n) {
              return function (i) {
                var o = r.createItem(t, e, n.map(h.$.fromModel)),
                  a = i.items.add(o),
                  u = U.In.getActiveItemIndex(a)(i);
                return E(D({}, i), { items: a, cardIndex: u });
              };
            };
            t.createSDUIFeedSideEffect = function (t, u, c, l) {
              return {
                id: "sduiFeedEffect",
                when: g.R.isWithAlertsId,
                what: U.nL.Effect.ItemsApplicator.create(
                  u.pipe(
                    a.U(function (a) {
                      var u = a.cards,
                        d = a.feedOrd,
                        f = a.itemIdToSelect;
                      return function (a) {
                        var m = (0, o.zG)(
                            u,
                            v.v.filter(
                              function (t) {
                                return a.currentLens.items.has(n(t));
                              },
                              o.W8,
                              o.W8
                            ),
                            v.v.reduce(
                              a.currentLens,
                              function (e, r) {
                                return (function (t, e) {
                                  return function (n) {
                                    var r = n.items.keys().indexOf(t),
                                      i = n.items.remove(t),
                                      a = (0, o.zG)(
                                        n.cardIndex,
                                        s.map(function (t) {
                                          return t > r ? t - 1 : t;
                                        }),
                                        s.chain(
                                          s.fromPredicate(function (t) {
                                            return s.isSome(i.getAt(t));
                                          })
                                        ),
                                        s.fold(
                                          function () {
                                            return (0, o.zG)(
                                              e.findNextAlert(n),
                                              s.map(function (t) {
                                                return e.selectItemByAlert(t)(n);
                                              }),
                                              s.chain(
                                                s.fromPredicate(function (t) {
                                                  return (0, o.zG)(
                                                    t.cardIndex,
                                                    s.fold(
                                                      function () {
                                                        return !0;
                                                      },
                                                      function (t) {
                                                        return s.isSome(i.getAt(t));
                                                      }
                                                    )
                                                  );
                                                })
                                              ),
                                              s.getOrElse(function () {
                                                return E(D({}, n), { cardIndex: s.none });
                                              })
                                            );
                                          },
                                          function (t) {
                                            return E(D({}, n), { cardIndex: s.some(t) });
                                          }
                                        )
                                      );
                                    return E(D({}, a), { items: i });
                                  };
                                })(
                                  n(r),
                                  t
                                )(e);
                              },
                              function (t, a, u) {
                                return (0, o.zG)(
                                  u.alertIds,
                                  i.fw(s.option)(function (t) {
                                    return (0, o.zG)(l.getById("".concat(t)));
                                  }),
                                  s.fold(
                                    function () {
                                      return t;
                                    },
                                    function (i) {
                                      return (function (t, n, i) {
                                        return function (a) {
                                          var u = (0, o.zG)(
                                            a.items.update(
                                              t,
                                              (0, o.ls)(r.updateWithAlert.updateWithAlerts(i), r.pojoSDUI.setDSL(s.some(n)))
                                            ),
                                            p.getOrElse(function () {
                                              return e(t, n, i)(a).items;
                                            })
                                          );
                                          return E(D({}, a), { items: u });
                                        };
                                      })(
                                        n(u),
                                        u.content,
                                        i
                                      )(t);
                                    }
                                  )
                                );
                              },
                              function (t, r) {
                                return (0, o.zG)(
                                  r.alertIds,
                                  i.fw(s.option)(function (t) {
                                    return (0, o.zG)(l.getById("".concat(t)));
                                  }),
                                  s.fold(
                                    function () {
                                      return t;
                                    },
                                    function (i) {
                                      return e(n(r), r.content, i)(t);
                                    }
                                  )
                                );
                              }
                            )
                          ),
                          y = c(d),
                          h = m.items.reduce(
                            function (t, e) {
                              return t.add(e);
                            },
                            w.aW.empty(function (t) {
                              return t.id;
                            }, y.compare)
                          ),
                          S = E(D({}, m), { items: h, itemsOrd: y }),
                          g = (0, o.zG)(
                            f,
                            s.chain(function (t) {
                              var e = h.find(function (e) {
                                return e.id === t;
                              });
                              return s.isSome(e)
                                ? s.some(t)
                                : (0, o.zG)(
                                    h.getAt(0),
                                    s.map(function (t) {
                                      return t.id;
                                    })
                                  );
                            }),
                            s.fold(
                              function () {
                                return S;
                              },
                              function (e) {
                                return t.selectItemById(e)(S);
                              }
                            )
                          );
                        return a.patch({ currentLens: g, switchOrder: "lensOrder" });
                      };
                    })
                  )
                )
              };
            };
          })(t.SideEffects || (t.SideEffects = {}));
      })(r || (r = {}));
    },
    98182: (t, e, n) => {
      n.d(e, { e: () => o });
      var r,
        i,
        o,
        a = n(64015),
        u = n(57050),
        c = n(85384),
        s = n(73915),
        l = n(73975),
        d = n(5114),
        f = n(45701),
        m = n(98992),
        p = n(79880),
        v = n(22232);
      function y(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              y(t, e, n[e]);
            });
        }
        return t;
      }
      function S(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e &&
                    (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(e)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
          t
        );
      }
      !(function (t) {
        t.getSduiSingleCardTransitions = function (t, e, n) {
          var r = (0, u.zG)(
            t,
            d.fold(
              function () {
                return -1;
              },
              function (t) {
                return n.compare(t, e);
              }
            )
          );
          switch (r) {
            case -1:
              return [i.Actions.slideContentLeft, i.Actions.slideTitleLeft];
            case 1:
            case 0:
              return [i.Actions.slideContentRight, i.Actions.slideTitleRight];
            default:
              (0, v.vE)(r);
          }
        };
      })(r || (r = {})),
        (function (t) {
          !(function (t) {
            (t.slideContentLeft = {
              type: "transition",
              fromName: "content",
              toName: "content",
              animateFrom: p.c1.SlideLeft,
              animateTo: p.c1.SlideLeft
            }),
              (t.slideTitleLeft = {
                type: "transition",
                fromName: "title",
                toName: "title",
                animateFrom: p.c1.SlideLeft,
                animateTo: p.c1.SlideLeft
              }),
              (t.slideContentRight = {
                type: "transition",
                fromName: "content",
                toName: "content",
                animateFrom: p.c1.SlideRight,
                animateTo: p.c1.SlideRight
              }),
              (t.slideTitleRight = {
                type: "transition",
                fromName: "title",
                toName: "title",
                animateFrom: p.c1.SlideRight,
                animateTo: p.c1.SlideRight
              });
          })(t.Actions || (t.Actions = {}));
        })(i || (i = {})),
        (function (t) {
          var e = function (t) {
            return "cardDSL" in t && "prevCardDSL" in t && "transitions" in t;
          };
          t.isSDUIItem = e;
          var n = s.n(c.z2)(m.VY),
            i = s.n(c.z2)(m.aU);
          (t.eq = l.f7(function (t, r) {
            return (
              e(t) &&
              e(r) &&
              d.getEq(n).equals(t.cardDSL, r.cardDSL) &&
              d.getEq(n).equals(t.prevCardDSL, r.prevCardDSL) &&
              a.Eh(i).equals(t.transitions, r.transitions)
            );
          })),
            (t.getOrd = (0, u.ls)(
              d.getOrd,
              f.contramap(function (t) {
                return t.cardDSL;
              })
            ));
          !(function (t) {
            (t.getPojoUpdates = function () {
              return {
                setSDUIState: function (t, e, n) {
                  return function (r) {
                    return S(h({}, r), { cardDSL: t, prevCardDSL: e, transitions: n });
                  };
                },
                setDSL: function (t) {
                  return function (e) {
                    return S(h({}, e), { cardDSL: t, transitions: [] });
                  };
                }
              };
            }),
              (t.getSelect = function (t) {
                return function (n, i) {
                  return function (o) {
                    return (0, u.zG)(
                      n,
                      d.filter(e),
                      d.filter(function (t) {
                        return d.isSome(o.cardDSL) || d.isSome(t.cardDSL);
                      }),
                      d.map(function (e) {
                        return t(o.cardDSL, e.cardDSL, r.getSduiSingleCardTransitions(d.some(e), o, i))(o);
                      }),
                      d.getOrElse(function () {
                        return o;
                      })
                    );
                  };
                };
              }),
              (t.getCompleteTransition = function (t) {
                return function (n) {
                  return e(n) ? t(n.cardDSL, d.none, [])(n) : n;
                };
              });
          })(t.Capabilities || (t.Capabilities = {}));
        })(o || (o = {}));
    }
  }
]);
