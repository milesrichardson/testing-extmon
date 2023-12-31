/*! For license information please see 4815.vendors.chunk.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [4815],
  {
    15073: (t, n, e) => {
      e.d(n, { u: () => r });
      var r,
        i,
        o,
        u,
        c,
        a,
        f,
        p = e(27378),
        l = e(40327),
        s = e(98403),
        d = e(19751),
        m = e(2844),
        h = e(85089),
        y = e(2834),
        g = e(9223),
        b = e(5114),
        v = e(83078),
        x = e(90845);
      (i = r || (r = {})),
        (o = i.Manager =
          function (t) {
            var n = t.children,
              e = t.remSize,
              r = s.Dx(e).pipe(d.shareReplay({ refCount: !0, bufferSize: 1 }));
            return x.P.useSingleton("RemSize.Manager"), x.P.useSubscriptionTo(r), p.createElement(f.Provider, { value: r }, n);
          }),
        (i.DefaultManager = function (t) {
          var n = t.children;
          return x.P.useSingleton("RemSize.DefaultManager"), p.createElement(o, { remSize: c(u) }, n);
        }),
        (u = i.defaultSizeObserver =
          m.aj(h.Lw("(max-width: 1359px)"), h.Lw("(min-width: 1600px)"), function (t, n) {
            return t ? 14 : n ? 18 : 16;
          })),
        (c = i.withRemSizeEffect =
          function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            return t.pipe(
              y.b(function (t) {
                return n(b.some(t));
              }),
              g.x(n.bind(null, b.none)),
              d.shareReplay({ refCount: !0, bufferSize: 1 })
            );
          }),
        (a = i.defaultFontSizeSetter =
          function (t) {
            r.setRootCssVar(document.documentElement, t), r.setRootFontSize(t);
          }),
        (f = i.Context = p.createContext(u)),
        (i.setRootCssVar = function (t, n) {
          t.style.setProperty("--rem", (0, l.pipe)(n, b.map(String), v.QP));
        }),
        (i.setRootFontSize = function (t) {
          document.documentElement.style.fontSize = (0, l.pipe)(
            t,
            b.map(function (t) {
              return t + "px";
            }),
            v.QP
          );
        });
    },
    11413: (t, n, e) => {
      e.d(n, { t: () => R });
      var r,
        i = e(18775),
        o = e(50858),
        u = e(55818),
        c = e(98410),
        a = e(98314),
        f = e(27378),
        p = e(57050),
        l = e(40327),
        s = e(8543),
        d = e(54001),
        m = e(77176),
        h = e(98403),
        y = e(2844),
        g = e(28043),
        b = e(71249),
        v = e(45614),
        x = e(32426),
        S = e(19962),
        w = e(22232),
        U = e(5114),
        k = e(95195),
        _ = e(95574);
      !(function (t) {
        var n,
          e = function (t, e) {
            var r = e.position,
              i = e.point,
              u = { width: Math.trunc(t.width), height: Math.trunc(t.height) };
            return S.UL.validate(
              n.match(
                function () {
                  return (0, o._)({ top: i.y, right: i.x, bottom: i.y + u.height, left: i.x - u.width }, u);
                },
                function () {
                  return (0, o._)({ top: i.y - u.height, right: i.x, bottom: i.y, left: i.x - u.width }, u);
                },
                function () {
                  return (0, o._)({ top: i.y - u.height, right: i.x + u.width, bottom: i.y, left: i.x }, u);
                },
                function () {
                  return (0, o._)({ top: i.y, right: i.x + u.width, bottom: i.y + u.height, left: i.x }, u);
                }
              )(r)
            );
          },
          i = function (t) {
            return f(S.UL.Point.normalize({ x: t.left, y: t.top }));
          };
        !(function (t) {
          (t.topLeft = "topLeft"), (t.topRight = "topRight"), (t.bottomRight = "bottomRight"), (t.bottomLeft = "bottomLeft");
        })((n = t.Position || (t.Position = {}))),
          ((n = t.Position || (t.Position = {})).match = function (t, e, r, i) {
            return function (o) {
              switch (o) {
                case n.topRight:
                  return t();
                case n.bottomRight:
                  return e();
                case n.bottomLeft:
                  return r();
                case n.topLeft:
                  return i();
                default:
                  return (0, w.vE)(o);
              }
            };
          });
        var u,
          c,
          f = (t.topLeft = function (t) {
            return { position: n.topLeft, point: S.UL.Point.normalize(t) };
          }),
          p = (t.topRight = function (t) {
            return { position: n.topRight, point: S.UL.Point.normalize(t) };
          }),
          s = (t.bottomRight = function (t) {
            return { position: n.bottomRight, point: S.UL.Point.normalize(t) };
          }),
          d = (t.bottomLeft = function (t) {
            return { position: n.bottomLeft, point: S.UL.Point.normalize(t) };
          });
        (t.relativeTo = function (t, n) {
          return { position: t.position, point: S.UL.Point.relativeTo(t.point, n) };
        }),
          (t.empty = f(S.UL.Point.empty));
        (t.toRect = e),
          (t.fromRect = i),
          (t.inRect = function (t, n) {
            var e = n.point;
            return S.UL.hasPoint(t, e);
          }),
          (t.toCss = function (t) {
            var e = t.position,
              r = t.point;
            return n.match(
              function () {
                return { top: r.y, right: r.x };
              },
              function () {
                return { right: r.x, bottom: r.y };
              },
              function () {
                return { bottom: r.y, left: r.x };
              },
              function () {
                return { top: r.y, left: r.x };
              }
            )(e);
          }),
          (function (t) {
            t.create = function (t, n) {
              return (
                (0, w.kG)(t.point.x === n.point.x || t.point.y === n.point.y, "can not form Zone without a common dimension", function () {
                  return JSON.stringify({ a: t, b: n });
                }),
                [t, n]
              );
            };
            t.bySide = function (t, n) {
              return S.UL.Side.match(
                function () {
                  return u.create(d({ x: Math.ceil(n.left), y: Math.ceil(n.top) }), s({ x: Math.floor(n.right), y: Math.ceil(n.top) }));
                },
                function () {
                  return u.create(
                    f({ x: Math.floor(n.right), y: Math.ceil(n.top) }),
                    d({ x: Math.floor(n.right), y: Math.floor(n.bottom) })
                  );
                },
                function () {
                  return u.create(
                    f({ x: Math.ceil(n.left), y: Math.floor(n.bottom) }),
                    p({ x: Math.floor(n.right), y: Math.floor(n.bottom) })
                  );
                },
                function () {
                  return u.create(p({ x: Math.ceil(n.left), y: Math.ceil(n.top) }), s({ x: Math.ceil(n.left), y: Math.floor(n.bottom) }));
                }
              )(t);
            };
          })((u = t.Zone || (t.Zone = {}))),
          (function (t) {
            t.byAxis = function (t, n) {
              return v.sQ(
                (0, x.getFirstSemigroup)(),
                b.IX
              )(
                S.UL.Axis.toSides(t).map(function (t) {
                  return [t, u.bySide(t, n)];
                })
              );
            };
          })(t.Variants || (t.Variants = {})),
          (function (t) {
            t.empty = { quality: 0, point: r.empty };
            function n(t, n) {
              return (0, l.pipe)(
                S.UL.intersection(t, n),
                U.map(function (t) {
                  var e = t.width / n.width,
                    r = t.height / n.height,
                    i = (Number.isNaN(e) ? 0 : e / 2) + (Number.isNaN(r) ? 0 : r / 2);
                  return (
                    (0, w.kG)(i >= 0, "quality can not be negavite: ".concat(i)),
                    (0, w.kG)(i <= 1, "quality can be higher than 1: ".concat(i)),
                    i
                  );
                })
              );
            }
            (t.qualityOfIntersection = n),
              (t.byViewport = function (t, e) {
                return {
                  quality:
                    (0, l.pipe)(
                      n(t, e),
                      U.getOrElse(function () {
                        return 0;
                      })
                    ) +
                    (0, l.pipe)(
                      S.UL.scale(2, e),
                      k.chain(S.UL.normalize),
                      U.fromEither,
                      U.chain(function (e) {
                        return n(t, e);
                      }),
                      U.getOrElse(function () {
                        return 0;
                      })
                    ),
                  point: i(e)
                };
              }),
              (t.fromZone = function (t, n, r) {
                return (0, l.pipe)(
                  b.IX.traverse(k.either)(r, function (t) {
                    return e(n, t);
                  }),
                  k.chain(function (t) {
                    var n = (0, a._)(t, 2),
                      e = n[0],
                      r = n[1];
                    return S.UL.join(e, r);
                  }),
                  k.chain(function (t) {
                    return S.xu.placeIntoRect(n, t);
                  }),
                  k.map(function (n) {
                    return n.map(function (n) {
                      return c.byViewport(t, n);
                    });
                  })
                );
              });
          })((c = t.Qualified || (t.Qualified = {}))),
          (function (t) {
            t.build = function (t, n, e) {
              return (0, l.pipe)(
                e,
                v.UI(function (e) {
                  return c.fromZone(t, n, e);
                })
              );
            };
          })(t.QualifiedVariants || (t.QualifiedVariants = {})),
          (function (t) {
            var n;
            !(function (t) {
              (t[(t.left = 0)] = "left"),
                (t[(t.middle = 1)] = "middle"),
                (t[(t.right = 2)] = "right"),
                (t[(t.edges = 20)] = "edges"),
                (t[(t.any = 210)] = "any");
            })((n = t.Placement || (t.Placement = {})));
            t.takeBy = function (t, n) {
              return function (e) {
                return (0, l.pipe)(
                  e,
                  v.To({ point: c.empty, side: t }, function (e, r, i) {
                    return (0, l.pipe)(
                      i,
                      k.map(function (i) {
                        return i
                          .filter(function (r, i) {
                            return n.toString().includes(i.toString()) && t === e;
                          })
                          .reduce(function (t, n) {
                            return n.quality > t.point.quality ? { point: n, side: e } : t;
                          }, r);
                      }),
                      _.MH
                    );
                  })
                ).point;
              };
            };
            var e = (t.preferBy = function (t, n) {
              return function (e) {
                return (0, l.pipe)(
                  e,
                  v.To({ point: c.empty, side: t }, function (e, r, i) {
                    return (0, l.pipe)(
                      i,
                      k.map(function (i) {
                        return i.reduce(function (r, i, o) {
                          return i.quality > r.point.quality ||
                            (i.quality === r.point.quality && n.toString().includes(o.toString()) && t === e)
                            ? { point: i, side: e }
                            : r;
                        }, r);
                      }),
                      _.MH
                    );
                  })
                ).point;
              };
            });
            (t.preferTopMiddle = e("top", n.middle)), (t.preferTopEdges = e("top", n.edges));
          })(t.Selector || (t.Selector = {}));
      })(r || (r = {}));
      var R,
        E = e(83078),
        L = e(8125),
        T = e(44060),
        M = e(101),
        P = e(89894),
        C = e(90845);
      !(function (t) {
        !(function (t) {
          t.toSelector = function (t) {
            switch (t) {
              case "top":
              case "topCenter":
                return { align: "top", selector: r.Selector.preferBy("top", r.Selector.Placement.middle) };
              case "topRight":
                return { align: "top", selector: r.Selector.preferBy("top", r.Selector.Placement.right) };
              case "topLeft":
                return { align: "top", selector: r.Selector.preferBy("top", r.Selector.Placement.left) };
              case "bottom":
              case "bottomCenter":
                return { align: "bottom", selector: r.Selector.preferBy("bottom", r.Selector.Placement.middle) };
              case "bottomRight":
                return { align: "bottom", selector: r.Selector.preferBy("bottom", r.Selector.Placement.right) };
              case "bottomLeft":
                return { align: "bottom", selector: r.Selector.preferBy("bottom", r.Selector.Placement.left) };
              case "left":
                return { align: "left", selector: r.Selector.preferBy("left", r.Selector.Placement.middle) };
              case "right":
                return { align: "right", selector: r.Selector.preferBy("right", r.Selector.Placement.middle) };
              case "auto":
              case "center":
                return { align: S.UL.Axis.vertical, selector: r.Selector.preferBy("top", r.Selector.Placement.middle) };
              default:
                return (0, w.vE)(t);
            }
          };
        })(t.Alignment || (t.Alignment = {}));
        var n = (t.ByPoint = function (t) {
            var n = t.point,
              e = t.className,
              i = (0, c._)(t, ["point", "className"]);
            return f.createElement(
              s.F.div,
              (0, o._)(
                { "data-role": "positioned-container", style: n.pipe(m.U(E.dH(r.toCss, {}))) },
                (0, d.Sh)(
                  q.wrapper,
                  e,
                  n.pipe(
                    m.U(function (t) {
                      return U.isNone(t) ? q.hidden : "";
                    })
                  )
                ),
                i
              )
            );
          }),
          e = function (t) {
            var e,
              i = C.P.useRectWatcher(),
              o = i.rect,
              u = i.onMount,
              c = h.Dx(t.rect),
              a = h.Dx(t.pinTargetRect),
              l = x(t.align),
              s = v(c, o, l, null !== (e = t.selector) && void 0 !== e ? e : r.Selector.preferTopMiddle, a, "relative" === t.position);
            return f.createElement(
              n,
              {
                mount: u,
                className: t.className,
                point: s.pipe(
                  m.U(
                    U.map(function (t) {
                      return t.tangentialPoint;
                    })
                  )
                )
              },
              !0 === t.withPin &&
                s.pipe(
                  m.U(
                    (0, p.ls)(
                      U.chain(function (t) {
                        return t.median;
                      }),
                      U.map(function (t) {
                        return f.createElement(b, { point: t, key: "pin" });
                      }),
                      U.toNullable
                    )
                  )
                ),
              t.children
            );
          },
          b =
            ((t.ByAbsoluteRect = function (t) {
              return f.createElement(e, (0, u._)((0, o._)({}, t), { position: "absolute" }));
            }),
            (t.ByRelativeRect = function (t) {
              return f.createElement(e, (0, u._)((0, o._)({}, t), { position: "relative" }));
            }),
            (t.Pin = function (t) {
              var n = h.Dx(t.point).pipe(
                  m.U(function (t) {
                    return t.side;
                  }),
                  m.U(function (t) {
                    return I[t];
                  })
                ),
                e = h.Dx(t.point).pipe(
                  m.U(function (t) {
                    return t.point;
                  }),
                  m.U(function (t) {
                    var n = t.x;
                    return { top: t.y, left: n };
                  })
                );
              return f.createElement(s.F.i, (0, o._)({ "data-role": "pin", style: e }, (0, d.Sh)(n, I.wrapper)));
            })),
          v = function (t, n, e, i, o, u) {
            return y
              .aj(
                t,
                f.useContext(M.l.Context).pipe(
                  m.U(function (t) {
                    return t.rect;
                  })
                ),
                n.pipe(g.x(U.getEq(S.xu.eq).equals)),
                o
              )
              .pipe(
                m.U(function (t) {
                  var n = (0, a._)(t, 4),
                    o = n[0],
                    c = n[1],
                    f = n[2],
                    p = n[3];
                  return (0, l.pipe)(
                    f,
                    U.map(function (t) {
                      var n = r.QualifiedVariants.build(c, t, e(o)),
                        a = i(n).point,
                        f = (0, l.pipe)(
                          r.toRect(t, a),
                          U.fromEither,
                          U.chain(function (t) {
                            return (0, l.pipe)(
                              S.UL.getMedian(o, t),
                              U.map(function (n) {
                                return { anchorMedian: n, bodyRect: t };
                              })
                            );
                          }),
                          U.chain(function (t) {
                            var n = t.anchorMedian,
                              e = t.bodyRect;
                            if (void 0 !== p) {
                              var i = S.UL.stickToSide(S.UL.Side.invert(n.side), p)(e);
                              return (
                                (a = r.fromRect(i)),
                                (0, l.pipe)(
                                  S.UL.getMedian(p, i),
                                  U.map(function (t) {
                                    var n = t.side,
                                      e = t.point;
                                    return { side: n, point: S.UL.Point.relativeTo(e, i) };
                                  })
                                )
                              );
                            }
                            return (0, l.pipe)(
                              U.some(n),
                              U.map(function (t) {
                                var n = t.side,
                                  r = t.point;
                                return { side: n, point: S.UL.Point.relativeTo(r, e) };
                              })
                            );
                          })
                        );
                      return { tangentialPoint: r.relativeTo(a, u ? o : c), median: f };
                    })
                  );
                })
              );
          },
          x = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.UL.Axis.both;
            return (0, L.CI)(S.UL.Axis, t)
              ? function (n) {
                  return r.Variants.byAxis(t, n);
                }
              : function (n) {
                  return (0, i._)({}, t, r.Zone.bySide(t, n));
                };
          };
      })(R || (R = {}));
      var z = {
          position: "absolute",
          border: "".concat(P.ux.px(7), " solid ").concat(T.Il.BackgroundTooltip),
          transform: "translate(".concat(P.ux.px(-7), ", ").concat(P.ux.px(-7), ")")
        },
        G = {
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          $nest: { "& + *": { transform: "translateY(".concat(P.ux.px(7), ")") } }
        },
        A = {
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          $nest: { "& + *": { transform: "translateX(".concat(P.ux.px(-7), ")") } }
        },
        B = {
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          $nest: { "& + *": { transform: "translateY(".concat(P.ux.px(-7), ")") } }
        },
        N = {
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          $nest: { "& + *": { transform: "translateX(".concat(P.ux.px(7), ")") } }
        },
        I = P.ux.stylesheet({ wrapper: [z], top: [G], right: [A], bottom: [B], left: [N] }),
        q = P.ux.stylesheet({
          hidden: [{ visibility: "hidden", opacity: 0 }],
          wrapper: [{ position: "absolute", transition: "opacity .2s" }]
        });
    },
    51369: (t, n, e) => {
      e.d(n, { X: () => N });
      var r,
        i = e(50858),
        o = e(55818),
        u = e(27378),
        c = e(57050),
        a = e(5114),
        f = e(19962),
        p = e(44060),
        l = e(11413),
        s = e(89894),
        d = e(32096),
        m = e(50693),
        h = e(82900),
        y = e(74923),
        g = e(18775),
        b = e(31099),
        v = e(98314),
        x = e(71346),
        S = e(40327),
        w = e(8543),
        U = e(49708),
        k = e(85985),
        _ = e(41398),
        R = e(24209),
        E = e(17343),
        L = e(98403),
        T = e(38194),
        M = e(598),
        P = e(50628),
        C = e(25781),
        z = e(83078),
        G = e(18625);
      !(function (t) {
        var n = "scrollaction";
        (t.emit = function (t) {
          return self.dispatchEvent(new CustomEvent(n, { detail: t }));
        }),
          (t.observe = G.P(function () {
            return U.R(self, n);
          }));
      })(r || (r = {}));
      var A = e(42103),
        B = (function (t) {
          (0, b._)(e, t);
          var n = (0, x._)(e);
          function e() {
            var t;
            return (
              (0, h._)(this, e),
              (t = n.apply(this, arguments)),
              (0, g._)((0, m._)(t), "context", void 0),
              (0, g._)((0, m._)(t), "_subs", []),
              (0, g._)((0, m._)(t), "_outOfTarget", function (t) {
                return function (n) {
                  return !f.UL.hasPoint(n.getBoundingClientRect(), t);
                };
              }),
              t
            );
          }
          return (
            (0, y._)(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this._listenTooltipAppearance();
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._subs.forEach(function (t) {
                    return t.unsubscribe();
                  }),
                    (this._subs = []),
                    this.context.hide();
                }
              },
              {
                key: "render",
                value: function () {
                  return u.createElement(w.F.div, { "data-role": "tooltip" }, this.context.state.view(this.props.children));
                }
              },
              {
                key: "_listenTooltipAppearance",
                value: function () {
                  var t = this,
                    n = U.R(document, "keydown").pipe(
                      k.h(function (t) {
                        return t.keyCode === C.R.ESC_CODE;
                      })
                    ),
                    e = U.R(document, "mousedown").pipe(
                      _.M(this.context.state),
                      k.h(function (n) {
                        var e = (0, v._)(n, 2),
                          r = e[0],
                          i = e[1];
                        return (0, S.pipe)(
                          i,
                          a.map(function (t) {
                            return t.target;
                          }),
                          a.filter(function () {
                            return f.pK(r.target);
                          }),
                          z.wo(t._outOfTarget({ x: r.clientX, y: r.clientY }))
                        );
                      })
                    ),
                    i = R.T(
                      n,
                      e,
                      U.R(document, "scroll"),
                      r.observe.pipe(
                        k.h(function (t) {
                          return "show" === t.detail;
                        })
                      )
                    ).pipe(E.h(L.PU), T.B());
                  this._subs = [
                    this.context.hasContent.pipe(k.h(Boolean), M.c(i.pipe(P.P()))).subscribe(this.context.hide),
                    this.context.hasContent
                      .pipe(k.h(Boolean), M.c(R.T(L.gw(!0, 500), i.pipe(E.h(!1))).pipe(P.P())), k.h(Boolean))
                      .subscribe(this.context.show)
                  ];
                }
              }
            ]),
            e
          );
        })(u.Component);
      (0, g._)(B, "contextType", A.G.Context);
      var N = function () {
          return u.createElement(
            B,
            null,
            (0, c.ls)(
              a.map(function (t) {
                return u.createElement(
                  l.t.ByAbsoluteRect,
                  (0, o._)((0, i._)({ rect: f.UL.fromEl(t.target), className: O.container }, l.t.Alignment.toSelector(t.alignment)), {
                    withPin: !0
                  }),
                  u.createElement("div", { className: O.content }, t.content)
                );
              }),
              a.toNullable
            )
          );
        },
        I = { position: "fixed", zIndex: d.DY, pointerEvents: "none", $nest: { "@media print": { visibility: "hidden" } } },
        q = {
          padding: "".concat(s.ux.rem(0.25), " ").concat(s.ux.rem(1)),
          borderRadius: s.ux.rem(d.fx),
          background: p.Il.BackgroundTooltip,
          color: p.Il.CoreNeutral1,
          textAlign: "center",
          whiteSpace: "nowrap",
          letterSpacing: s.ux.px(0.25),
          fontSize: s.ux.rem(0.75),
          lineHeight: s.ux.rem(1)
        },
        O = s.ux.stylesheet({ container: [I], content: [q] });
    },
    34217: (t, n, e) => {
      e.d(n, { Z: () => P, UI: () => Rn });
      var r = {};
      e.r(r),
        e.d(r, {
          audit: () => I.U,
          auditTime: () => q.e,
          buffer: () => O.f,
          bufferCount: () => F.j,
          bufferTime: () => V.e,
          bufferToggle: () => j.P,
          bufferWhen: () => Q.R,
          catchError: () => W.K,
          combineAll: () => D.c,
          combineLatest: () => K.a,
          concat: () => Z.z,
          concatAll: () => X.u,
          concatMap: () => $.b,
          concatMapTo: () => H.w,
          count: () => Y.Q,
          debounce: () => J.D,
          debounceTime: () => k.b,
          defaultIfEmpty: () => tt.d,
          delay: () => R.g,
          delayWhen: () => nt.j,
          dematerialize: () => et.D,
          distinct: () => rt.E,
          distinctUntilChanged: () => it.x,
          distinctUntilKeyChanged: () => ot.g,
          elementAt: () => ut.T,
          endWith: () => ct.l,
          every: () => at.y,
          exhaust: () => ft.b,
          exhaustMap: () => pt.z,
          expand: () => lt.jn,
          filter: () => v.h,
          finalize: () => st.x,
          find: () => dt.sE,
          findIndex: () => mt.c,
          first: () => E.P,
          flatMap: () => Ut.VS,
          groupBy: () => ht.v,
          ignoreElements: () => yt.l,
          isEmpty: () => gt.x,
          last: () => bt.Z,
          map: () => x.U,
          mapTo: () => U.h,
          materialize: () => vt.i,
          max: () => xt.F,
          merge: () => St.T,
          mergeAll: () => wt.J,
          mergeMap: () => Ut.zg,
          mergeMapTo: () => kt.j,
          mergeScan: () => _t.fU,
          min: () => Rt.V,
          multicast: () => Et.O,
          observeOn: () => Lt.QV,
          onErrorResumeNext: () => Tt.h,
          pairwise: () => Mt.G,
          partition: () => Pt.u,
          pluck: () => S.j,
          publish: () => A.n,
          publishBehavior: () => Ct.n,
          publishLast: () => zt.C,
          publishReplay: () => T._,
          race: () => Gt.S,
          reduce: () => At.u,
          refCount: () => M.x,
          repeat: () => Bt.r,
          repeatWhen: () => Nt.a,
          retry: () => It.X,
          retryWhen: () => qt.a,
          sample: () => Ot.U,
          sampleTime: () => Ft.b,
          scan: () => w.R,
          sequenceEqual: () => Vt.NF,
          share: () => jt.B,
          shareReplay: () => Qt.d,
          single: () => Wt.Z,
          skip: () => Dt.T,
          skipLast: () => Kt.W,
          skipUntil: () => Zt.u,
          skipWhile: () => Xt.n,
          startWith: () => _.O,
          subscribeOn: () => $t.R,
          switchAll: () => Ht.B,
          switchMap: () => b.w,
          switchMapTo: () => Yt.c,
          take: () => Jt.q,
          takeLast: () => tn.h,
          takeUntil: () => nn.R,
          takeWhile: () => en.o,
          tap: () => g.b,
          throttle: () => rn.P,
          throttleTime: () => on.p,
          throwIfEmpty: () => un.T,
          timeInterval: () => cn.J,
          timeout: () => an.V,
          timeoutWith: () => fn.L,
          timestamp: () => pn.A,
          toArray: () => ln.q,
          window: () => sn.u,
          windowCount: () => dn.r,
          windowTime: () => mn.I,
          windowToggle: () => hn.j,
          windowWhen: () => yn.Q,
          withLatestFrom: () => gn.M,
          zip: () => bn.$,
          zipAll: () => vn.h
        });
      var i,
        o = e(59312),
        u = e(5114),
        c = e(19429),
        a = e(45614),
        f = e(93756),
        p = e(57050),
        l = e(24209),
        s = e(83401),
        d = e(2844),
        m = e(76974),
        h = e(40151),
        y = e(44586),
        g = e(2834),
        b = e(66310),
        v = e(85985),
        x = e(77176),
        S = e(24713),
        w = e(67434),
        U = e(17343),
        k = e(78674),
        _ = e(93508),
        R = e(13444),
        E = e(50628),
        L = e(40327),
        T = e(48403),
        M = e(95343);
      !(function (t) {
        t.split = function (t) {
          var n = (0, L.pipe)(t, T._(1), M.x());
          return {
            animation: (0, L.pipe)(
              n,
              v.h(function (t) {
                return "root" === t.action.key;
              }),
              x.U(function (t) {
                return { key: t.key, action: t.action.action };
              })
            ),
            action: (0, L.pipe)(
              n,
              v.h(function (t) {
                return "children" === t.action.key;
              }),
              x.U(function (t) {
                return { key: t.key, action: t.action.action };
              })
            )
          };
        };
      })(i || (i = {}));
      var P,
        C = {
          URI: "Observable",
          map: function (t, n) {
            return t.pipe((0, x.U)(n));
          },
          ap: function (t, n) {
            return (0, d.aj)([t, n]).pipe(
              (0, x.U)(function (t) {
                return (0, t[0])(t[1]);
              })
            );
          },
          of: function (t) {
            return (0, m.of)(t);
          }
        },
        z = e(14601),
        G = e(32952),
        A = e(62962);
      function B(t) {
        return function (n) {
          return new y.y(function (e) {
            for (var r = (0, A.n)()(n), i = [], o = new z.w(), u = 0; u < t.length; ++u) {
              var c = new G.xQ();
              i.push(c), o.add(r.subscribe(c));
            }
            return o.add(t.apply(void 0, i).subscribe(e)), o.add(r.connect()), o;
          });
        };
      }
      !(function (t) {
        function n(t) {
          return c.UI(t);
        }
        function e(t) {
          return c.I_(t);
        }
        function r(t, n) {
          return c.VF(function (e) {
            return (0, p.zG)(
              e,
              B(function (e, r) {
                return (0, p.zG)(
                  n(r),
                  b.w(function (n) {
                    var r = Object.entries(n)[0],
                      i = r[0],
                      u = r[1];
                    return (0, p.zG)(
                      e,
                      v.h(function (t) {
                        return t.key === u;
                      }),
                      x.U(function (t) {
                        return t.action;
                      }),
                      t[u],
                      x.U(function (t) {
                        var n;
                        return (0, o.pi)((0, o.pi)({}, t), (((n = {})[i] = u), n));
                      })
                    );
                  })
                );
              })
            );
          });
        }
        function L(t, n) {
          return function (e) {
            return (0, p.zG)(
              t,
              v.h(function (t) {
                return t.key === n && t.action.animationType === e;
              }),
              x.U(function (t) {
                return t.action;
              }),
              _.O({ kind: "init" }),
              b.w(function (t) {
                return "end" === t.kind
                  ? (0, m.of)(t)
                  : (0, p.zG)((0, m.of)({ kind: "end", animationType: e }), R.g("start" === t.kind ? P : M));
              }),
              E.P()
            );
          };
        }
        (t.fromSideEffect = function (t, n) {
          return function (e) {
            return (0, l.T)(
              e.pipe(
                g.b(t),
                b.w(function () {
                  return s.C;
                })
              ),
              (r = n) instanceof y.y ? r : (0, m.of)(r)
            );
            var r;
          };
        }),
          (t.patchState = n),
          (t.extendActions = e),
          (t.patch = function (t, r) {
            return (0, p.ls)(e(t), n(r));
          }),
          (t.replaceActions = function (t) {
            return c.I_(
              (0, p.ls)(
                t,
                b.w(function () {
                  return s.C;
                })
              )
            );
          }),
          (t.composeKnot = function (t) {
            return c.VF(function (n) {
              return (0, d.aj)(
                Object.keys(t).map(function (e) {
                  return t[e](
                    n.pipe(
                      v.h(function (t) {
                        return t.key === e;
                      }),
                      x.U(function (t) {
                        return t.action;
                      })
                    )
                  ).pipe(
                    x.U(function (t) {
                      var n;
                      return ((n = {})[e] = t), n;
                    })
                  );
                })
              ).pipe(
                x.U(function (t) {
                  return t.reduce(function (t, n) {
                    return (0, o.pi)((0, o.pi)({}, t), n);
                  });
                })
              );
            });
          }),
          (t.composeUnion = r),
          (t.composeOption = function (n, e) {
            return r(
              {
                None: function () {
                  return (0, m.of)(null);
                },
                Some: t.composeKnot({ value: n })
              },
              c.VF(function (t) {
                return (0, p.zG)(
                  t,
                  v.h(function (t) {
                    return "Some" === t.key;
                  }),
                  x.U(function (t) {
                    return t.action.action;
                  }),
                  e
                );
              })
            );
          }),
          (t.composeList = function (t, n, e) {
            return c.VF(function (r) {
              return (0, p.zG)(
                r,
                B(function (r, i) {
                  return (0, p.zG)(
                    n(i),
                    b.w(function (n) {
                      return t.traverseWithIndex(C)(n, function (t, n) {
                        return e(n)(
                          (0, p.zG)(
                            r,
                            v.h(function (n) {
                              return n.key === t;
                            }),
                            x.U(function (t) {
                              return t.action;
                            })
                          )
                        );
                      });
                    })
                  );
                })
              );
            });
          }),
          (t.animatingFlow = function (t, n) {
            return function (e) {
              var r = i.split(e),
                c = r.action,
                s = r.animation,
                d = 0;
              return (0, p.zG)(
                c,
                v.h(function (t) {
                  return t.key === String(d);
                }),
                S.j("action"),
                t,
                w.R(
                  (function (t, n) {
                    return function (e, r) {
                      var i,
                        o,
                        c = n(),
                        a = u.fromNullable(e[c]),
                        l = (0, p.zG)(
                          a,
                          u.map(function (t) {
                            return t.children;
                          })
                        ),
                        s = t(l, r);
                      if (u.isNone(s)) return ((i = {})[c] = { root: u.none, children: r }), i;
                      var d = (((o = {})[c + 1] = { root: f.EK(s.value), children: r }), o),
                        m = f.IS(s.value);
                      return u.isSome(m) && u.isSome(l) && (d[c] = { root: m, children: l.value }), d;
                    };
                  })(n, function () {
                    return d;
                  }),
                  {}
                ),
                g.b(function (t) {
                  return (d = Number(Object.keys(t).pop()));
                }),
                b.w(
                  (function (t, n) {
                    return function (e) {
                      var r = String(n() - 1),
                        i = String(n()),
                        c = (0, p.zG)(
                          u.fromNullable(e[r]),
                          u.chain(function (t) {
                            return t.root;
                          }),
                          u.map(L(t, r)),
                          u.fold(function () {
                            return h.E;
                          }, p.yR),
                          U.h(a.EG(r))
                        ),
                        f = (0, p.zG)(
                          e[i].root,
                          u.map(L(t, i)),
                          u.fold(function () {
                            return h.E;
                          }, p.yR),
                          U.h(function (t) {
                            var n = (0, o.pi)({}, t);
                            return (n[i] = (0, o.pi)((0, o.pi)({}, n[i]), { root: u.none })), n;
                          })
                        );
                      return (0, p.zG)(
                        (0, l.T)(c, f),
                        w.R(function (t, n) {
                          return n(t);
                        }, e),
                        k.b(T),
                        _.O(e)
                      );
                    };
                  })(s, function () {
                    return d;
                  })
                )
              );
            };
          });
        var T = 100,
          M = 500,
          P = 10 * M;
      })(P || (P = {}));
      var N = e(27378),
        I = e(50133),
        q = e(66081),
        O = e(36919),
        F = e(76257),
        V = e(17160),
        j = e(41608),
        Q = e(77150),
        W = e(91224),
        D = e(91023),
        K = e(57091),
        Z = e(94123),
        X = e(44212),
        $ = e(71032),
        H = e(58),
        Y = e(22815),
        J = e(87847),
        tt = e(31524),
        nt = e(87938),
        et = e(15789),
        rt = e(94607),
        it = e(28043),
        ot = e(40649),
        ut = e(87830),
        ct = e(39719),
        at = e(50481),
        ft = e(87451),
        pt = e(97884),
        lt = e(58524),
        st = e(9223),
        dt = e(22447),
        mt = e(43918),
        ht = e(78146),
        yt = e(49143),
        gt = e(98606),
        bt = e(68706),
        vt = e(83840),
        xt = e(80018),
        St = e(95093),
        wt = e(68425),
        Ut = e(85321),
        kt = e(93781),
        _t = e(40184),
        Rt = e(24371),
        Et = e(24755),
        Lt = e(80544),
        Tt = e(80334),
        Mt = e(16118),
        Pt = e(53804),
        Ct = e(71193),
        zt = e(92449),
        Gt = e(55875),
        At = e(38934),
        Bt = e(36303),
        Nt = e(11838),
        It = e(75458),
        qt = e(62365),
        Ot = e(13718),
        Ft = e(13685),
        Vt = e(33241),
        jt = e(38194),
        Qt = e(34891),
        Wt = e(17174),
        Dt = e(55935),
        Kt = e(65943),
        Zt = e(42833),
        Xt = e(93497),
        $t = e(65304),
        Ht = e(69935),
        Yt = e(598),
        Jt = e(23063),
        tn = e(51639),
        nn = e(2768),
        en = e(8473),
        rn = e(25031),
        on = e(55721),
        un = e(4750),
        cn = e(23095),
        an = e(89068),
        fn = e(97425),
        pn = e(91969),
        ln = e(35052),
        sn = e(50337),
        dn = e(6643),
        mn = e(83782),
        hn = e(99597),
        yn = e(45586),
        gn = e(41398),
        bn = e(53441),
        vn = e(9229),
        xn = e(8543),
        Sn = "root",
        wn = e(73975),
        Un = e(95300);
      function kn(t) {
        return (0, p.ls)(
          it.x(),
          w.R(function (n, e) {
            return t.reduceWithIndex(e, new Map(), function (t, e, r) {
              var i = n.get(t);
              return void 0 !== i ? (e.set(t, i), i.next(r)) : e.set(t, new Un.X(r)), e;
            });
          }, new Map()),
          it.x(
            ((n = wn.f7(function () {
              return !0;
            })),
            {
              equals: function (t, e) {
                var r;
                if (t === e) return !0;
                if (t.size === e.size) {
                  for (var i = t.keys(), o = void 0; null === (r = (o = i.next()).done) || void 0 === r || !r; )
                    if (!e.has(o.value) || !n.equals(t.get(o.value), e.get(o.value))) return !1;
                  return !0;
                }
                return !1;
              }
            }).equals
          )
        );
        var n;
      }
      var _n = e(98036);
      var Rn,
        En = (function () {
          function t(t) {
            this._keySelector = t;
          }
          return (
            (t.prototype.call = function (t, n) {
              return n.subscribe(new Ln(t, this._keySelector));
            }),
            t
          );
        })(),
        Ln = (function (t) {
          function n(n, e) {
            var r = t.call(this, n) || this;
            return (r.destination = n), (r._keySelector = e), (r.attemptedToUnsubscribe = !1), (r.count = 0), (r._currentGroup = u.none), r;
          }
          return (
            (0, o.ZT)(n, t),
            (n.prototype._next = function (t) {
              var n = this,
                e = this._keySelector(t);
              (0, L.pipe)(
                this._currentGroup,
                u.fold(
                  function () {
                    return n._createGroup(e, t);
                  },
                  function (r) {
                    var i = r.key,
                      o = r.group;
                    i !== e ? (o.complete(), (n._currentGroup = u.none), n._createGroup(e, t)) : o.closed || o.next(t);
                  }
                )
              );
            }),
            (n.prototype._createGroup = function (t, n) {
              var e = new Un.X(n);
              (this._currentGroup = u.some({ key: t, group: e })), this.destination.next(new ht.T(t, e, this));
            }),
            (n.prototype._error = function (t) {
              (0, L.pipe)(
                this._currentGroup,
                u.map(function (n) {
                  return n.group.error(t);
                })
              ),
                (this._currentGroup = u.none),
                this.destination.error(t);
            }),
            (n.prototype._complete = function () {
              (0, L.pipe)(
                this._currentGroup,
                u.map(function (t) {
                  return t.group.complete();
                })
              ),
                (this._currentGroup = u.none),
                this.destination.complete();
            }),
            (n.prototype.unsubscribe = function () {
              this.closed || ((this.attemptedToUnsubscribe = !0), 0 === this.count && t.prototype.unsubscribe.call(this));
            }),
            n
          );
        })(_n.L);
      function Tn(t, n) {
        return (0, L.pipe)(
          n,
          Rn.mapAction(function (n) {
            return { key: t, action: n };
          }),
          c.UI(function (n) {
            return null === n ? n : N.cloneElement(n, { key: t });
          })
        );
      }
      function Mn(t, n, e) {
        var r, i;
        if (Cn(t) && n.length > 0) return { grid: t.grid, child: Mn(t.child, n, e) };
        if (Pn(t) && n.length > 0) {
          var u = n[0],
            c = n.slice(1);
          return { grid: t.grid, children: (0, o.pi)((0, o.pi)({}, t.children), ((r = {}), (r[u] = Mn(t.children[u], c, e)), r)) };
        }
        if (zn(t) && n.length > 0) return { foldable: t.foldable, of: Mn(t.of, n, e) };
        if (Gn(t) && n.length > 0) {
          (u = n[0]), (c = n.slice(1));
          return { tag: t.tag, members: (0, o.pi)((0, o.pi)({}, t.members), ((i = {}), (i[u] = Mn(t.members[u], c, e)), i)) };
        }
        return e(t);
      }
      function Pn(t) {
        return "children" in t;
      }
      function Cn(t) {
        return "child" in t;
      }
      function zn(t) {
        return "foldable" in t;
      }
      function Gn(t) {
        return "members" in t;
      }
      function An(t) {
        return N.createElement(xn.F.Fragment, { children: t });
      }
      !(function (t) {
        function n(t) {
          return Cn(t)
            ? function (e) {
                var r = new Proxy(
                  {},
                  {
                    get: function () {
                      var r;
                      return n(t.child)({ children: null, notify: e.notify, state: null !== (r = e.state) && void 0 !== r ? r : h.E });
                    }
                  }
                );
                return t.grid({ children: r, state: h.E, notify: p.Q1 });
              }
            : Pn(t)
            ? function (e) {
                return (0, L.pipe)(
                  e.state,
                  kn(a.IM),
                  x.U(function (r) {
                    var i = (0, L.pipe)(
                      t.children,
                      a.Su(function (t, i) {
                        return Tn(t, n(i))({ children: null, notify: e.notify, state: r.get(t) || h.E });
                      })
                    );
                    return t.grid({
                      children: i,
                      state: r.get(Sn) || h.E,
                      notify: function (t) {
                        return e.notify({ key: Sn, action: t });
                      }
                    });
                  }),
                  An
                );
              }
            : zn(t)
            ? function (e) {
                return (0, L.pipe)(
                  e.state,
                  kn(t.foldable),
                  w.R(function (r, i) {
                    var o = new Map();
                    return (
                      i.forEach(function (i, u) {
                        var c = r.get(u);
                        if (void 0 !== c) o.set(u, c);
                        else {
                          var a = Tn(u, n(t.of));
                          o.set(u, a({ children: null, notify: e.notify, state: i }));
                        }
                      }),
                      o
                    );
                  }, new Map()),
                  x.U(function (t) {
                    var n = new Array();
                    return (
                      t.forEach(function (t) {
                        return n.push(t);
                      }),
                      n
                    );
                  }),
                  An
                );
              }
            : Gn(t)
            ? function (e) {
                return (0, L.pipe)(
                  e.state,
                  ((r = t.tag),
                  function (t) {
                    return t.pipe(function (t) {
                      return t.lift(
                        new En(function (t) {
                          return t[r];
                        })
                      );
                    });
                  }),
                  x.U(function (r) {
                    return Tn(r.key, n(t.members[r.key]))({ children: null, notify: e.notify, state: r });
                  }),
                  An
                );
                var r;
              }
            : t;
        }
        function e(t, n, r) {
          return Pn(t)
            ? { grid: e(t.grid, n, r), children: t.children }
            : zn(t)
            ? { foldable: t.foldable, of: e(t.of, n, r) }
            : function (e) {
                return t({ children: e.children, notify: (0, L.pipe)(e.notify, c.I_(r)), state: (0, L.pipe)(e.state, x.U(n)) });
              };
        }
        !(function (n) {
          (n.empty = function () {
            return null;
          }),
            (n.make = function (n) {
              return t.Grid.make(n);
            });
        })(t.Node || (t.Node = {})),
          (function (t) {
            t.make = function (t) {
              return function (n) {
                var e = n.children,
                  i = n.state,
                  o = n.notify;
                return N.createElement(t, {
                  slots: e,
                  state: i,
                  notify: function (t) {
                    return function () {
                      return o(t);
                    };
                  },
                  view: function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return (0, L.pipe)(i, S.j.apply(r, t), it.x());
                  }
                });
              };
            };
          })(t.Grid || (t.Grid = {})),
          (function (t) {
            t.make = function (t, n) {
              return { grid: t, child: n };
            };
          })(t.Composite || (t.Composite = {})),
          (function (t) {
            t.make = function (t, n) {
              return { grid: t, children: n };
            };
          })(t.Knot || (t.Knot = {})),
          (function (t) {
            t.make = function (t) {
              return {
                grid: function (t) {
                  return An(
                    (0, L.pipe)(
                      t.children,
                      a.KM(function (t, n) {
                        return n;
                      })
                    )
                  );
                },
                children: t
              };
            };
          })(t.Group || (t.Group = {})),
          (function (t) {
            t.make = function (t, n) {
              return { foldable: t, of: n };
            };
          })(t.List || (t.List = {})),
          (function (n) {
            (n.make = function (t, n) {
              return { tag: t, members: n };
            }),
              (n.asOption = function (n) {
                return { tag: "_tag", members: { Some: t.Group.make({ value: n }), None: t.Node.empty } };
              });
          })(t.Union || (t.Union = {})),
          (function (t) {
            t.make = function (t, n) {
              return function (e) {
                var r;
                return N.createElement(
                  xn.F.div,
                  (((r = {})["data-purpose"] = "animation-wrapper"),
                  (r.children = e.children.children),
                  (r.className = (0, L.pipe)(
                    e.state,
                    x.U(
                      (0, p.ls)(
                        u.map(function (e) {
                          return Boolean(t[e]) ? t[e] : n[e];
                        }),
                        u.toUndefined
                      )
                    ),
                    it.x()
                  )),
                  (r.onAnimationStart = (0, L.pipe)(
                    e.state,
                    x.U(
                      u.fold(
                        function () {
                          return p.Q1;
                        },
                        function (t) {
                          return function () {
                            return e.notify({ kind: "start", animationType: t });
                          };
                        }
                      )
                    )
                  )),
                  (r.onAnimationEnd = (0, L.pipe)(
                    e.state,
                    x.U(
                      u.fold(
                        function () {
                          return p.Q1;
                        },
                        function (t) {
                          return function () {
                            return e.notify({ kind: "end", animationType: t });
                          };
                        }
                      )
                    )
                  )),
                  r)
                );
              };
            };
          })(t.Transition || (t.Transition = {})),
          (function (n) {
            n.make = function (n, e) {
              return t.List.make(a.IM, t.Knot.make(n, { children: e }));
            };
          })(t.Animated || (t.Animated = {})),
          (t.mount = function (t, e) {
            var r = new G.xQ();
            return n(t)({
              children: null,
              notify: function (t) {
                return r.next(t);
              },
              state: (0, L.pipe)(e(r), T._(1), M.x())
            });
          }),
          (t.patch = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return function (n) {
              return function (e) {
                return Mn(e, t, n);
              };
            };
          }),
          (t.mapAction = function (t) {
            return function (n) {
              return e(n, p.yR, t);
            };
          }),
          (t.contramapState = function (t) {
            return function (n) {
              return e(n, t, p.yR);
            };
          }),
          (t.squash = n),
          (t.promap = e);
      })(Rn || (Rn = {}));
    }
  }
]);
