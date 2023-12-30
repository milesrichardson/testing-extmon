(self.webpackChunk = self.webpackChunk || []).push([
  [8813],
  {
    48643: (e, t, n) => {
      n.d(t, { EJ: () => L, T9: () => R, l5: () => T });
      var r,
        o = n(50693),
        i = n(82900),
        a = n(74923),
        u = n(18775),
        s = n(31099),
        l = n(98314),
        c = n(71346),
        p = n(27378),
        d = n(71249),
        _ = n(40327),
        v = n(32952),
        h = n(44586),
        f = n(23239),
        m = n(8543),
        y = n(93508),
        b = n(77176),
        w = n(16118),
        x = n(98403),
        g = n(76974),
        C = n(24209),
        E = n(38062),
        k = n(50628),
        P = n(80900),
        D = n(17343),
        F = n(60797),
        S = n(69935),
        U = n(19751),
        A = n(5114),
        M = n(8125),
        T = (function (e) {
          (0, s._)(n, e);
          var t = (0, c._)(n);
          function n() {
            var e;
            return (
              (0, i._)(this, n),
              (e = t.apply(this, arguments)),
              (0, u._)(
                (0, o._)(e),
                "_state",
                e.props.state.pipe(
                  y.O(void 0),
                  b.U(function (e, t) {
                    return { state: e, key: t };
                  }),
                  w.G(),
                  b.U(function (t) {
                    var n = (0, l._)(t, 2),
                      r = n[0],
                      o = n[1],
                      i = e.props.stateToClassMapper(r.state, o.state);
                    return { prev: { key: r.key, state: r.state, view: N(i.prev) }, next: { key: o.key, state: o.state, view: N(i.next) } };
                  })
                )
              ),
              (0, u._)((0, o._)(e), "_elements", f.h.create(r.empty)),
              (0, u._)((0, o._)(e), "_done", new v.xQ()),
              (0, u._)((0, o._)(e), "_subs", []),
              e
            );
          }
          return (
            (0, a._)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.children;
                  this._subs.push(
                    this._state
                      .pipe(
                        b.U(function (n) {
                          var o = n.prev,
                            i = n.next,
                            a = t;
                          return void 0 === t
                            ? r.empty
                            : [
                                (0, _.pipe)(
                                  o.state,
                                  A.fromNullable,
                                  A.map(function (t) {
                                    return a({
                                      state: t,
                                      view: o.view,
                                      type: "prev",
                                      done: function () {
                                        return e._done.next("prev");
                                      }
                                    });
                                  }),
                                  A.chain(A.fromNullable),
                                  A.map(function (e) {
                                    return { key: o.key, entry: e };
                                  })
                                ),
                                (0, _.pipe)(
                                  a({ state: i.state, view: i.view, type: "next" }),
                                  A.fromNullable,
                                  A.map(function (e) {
                                    return { key: i.key, entry: e };
                                  })
                                )
                              ];
                        })
                      )
                      .subscribe(x.wW(this._elements)),
                    this._done.subscribe(function (t) {
                      "prev" === t &&
                        e._elements.modify(function (e) {
                          var t = (0, l._)(e, 2),
                            n = (t[0], t[1]);
                          return [A.none, n];
                        }),
                        "next" === t && e._elements.set(r.empty);
                    })
                  );
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._subs.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    (this._subs = []);
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    r = e.onMount,
                    o = e.onMouseDown;
                  return t
                    ? p.createElement(
                        m.F.div,
                        { className: n, mount: r, onMouseDown: o },
                        this._elements.view(d.IX.compact).view(function (e) {
                          return e.map(function (e) {
                            return p.createElement(p.Fragment, { key: e.key }, e.entry);
                          });
                        })
                      )
                    : null;
                }
              }
            ]),
            n
          );
        })(p.Component),
        L = function (e) {
          return { start: e, end: e };
        };
      function N(e) {
        var t = e.start,
          n = e.end;
        return h.y.create(function (e) {
          e.next(t);
          var r = requestAnimationFrame(function () {
            return requestAnimationFrame(function () {
              return e.next(n);
            });
          });
          return function () {
            return cancelAnimationFrame(r);
          };
        });
      }
      !(function (e) {
        e.empty = [A.none, A.none];
      })(r || (r = {}));
      var R = function (e) {
        var t = e.content.pipe(
          b.U(function (t) {
            return { className: e.classes.rendered, el: t, onTransitionEnd: M.Q1 };
          }),
          b.U(A.some),
          y.O(A.none),
          w.G(),
          b.U(function (t) {
            var n = (0, l._)(t, 2),
              r = n[0],
              o = n[1];
            return (0, _.pipe)(
              r,
              A.fold(
                function () {
                  return A.map(g.of)(o);
                },
                function (t) {
                  return (0, _.pipe)(
                    o,
                    A.map(function (n) {
                      var r = new v.xQ();
                      return C.T(
                        g.of({
                          className: e.classes.removing,
                          el: t.el,
                          onTransitionEnd: function () {
                            return r.next();
                          }
                        }),
                        E.S3(r.pipe(k.P()), P.H(e.timeout)).pipe(D.h(n))
                      );
                    })
                  );
                }
              )
            );
          }),
          F.oA,
          S.B(),
          U.shareReplay({ refCount: !0, bufferSize: 1 })
        );
        return p.createElement(
          m.F.div,
          {
            className: t.pipe(
              b.U(function (e) {
                return e.className;
              })
            ),
            onTransitionEnd: t.pipe(
              b.U(function (e) {
                return e.onTransitionEnd;
              })
            )
          },
          t.pipe(
            b.U(function (e) {
              return e.el;
            })
          )
        );
      };
    },
    101: (e, t, n) => {
      n.d(t, { l: () => r });
      var r,
        o = n(50693),
        i = n(82900),
        a = n(74923),
        u = n(18775),
        s = n(31099),
        l = n(50858),
        c = n(55818),
        p = n(71346),
        d = n(27378),
        _ = n(95300),
        v = n(60797),
        h = n(66310),
        f = n(24209),
        m = n(85089),
        y = n(49708),
        b = n(85985),
        w = n(76974),
        x = n(98403),
        g = n(17343),
        C = n(93508),
        E = n(77176),
        k = n(2844),
        P = n(41398),
        D = n(19751),
        F = n(18625),
        S = n(5114),
        U = n(19962),
        A = n(18208),
        M = n(81531);
      !(function (e) {
        var t;
        !(function (e) {
          e.nextLevel = function (e, t) {
            return { rect: e, level: t + 1 };
          };
        })(e.State || (e.State = {})),
          (function (e) {
            e.empty = { top: 0, bottom: 0 };
          })(e.Padding || (e.Padding = {})),
          (function (e) {
            (e.root = "root"), (e.inherit = "inherit");
          })((t = e.ContainerType || (e.ContainerType = {}))),
          (e.withViewportContainer = function (e, r) {
            return (function (k) {
              (0, s._)(D, k);
              var P = (0, p._)(D);
              function D() {
                var e;
                return (
                  (0, i._)(this, D),
                  (e = P.apply(this, arguments)),
                  (0, u._)((0, o._)(e), "_viewportEl", new _.X(S.none)),
                  (0, u._)((0, o._)(e), "_onMount", function (t) {
                    e._viewportEl.next(S.fromNullable(t)), e.props.onMount && t && e.props.onMount(t);
                  }),
                  e
                );
              }
              return (
                (0, a._)(D, [
                  {
                    key: "render",
                    value: function () {
                      var o = this.props,
                        i = o.name,
                        a = o.children,
                        u = this._viewportEl.pipe(
                          v.oA,
                          h.w(function (e) {
                            return f
                              .T(
                                m.Qr,
                                y.R(e, "transitionend").pipe(
                                  b.h(function (t) {
                                    return t.target === e;
                                  })
                                ),
                                w.of(!0).pipe(h.w(x.b2.rafScheduler))
                              )
                              .pipe(g.h(e), C.O(e), E.U(U.UL.fromEl));
                          })
                        ),
                        s = r.type === t.root ? n : A;
                      return d.createElement(
                        e,
                        (0, c._)((0, l._)({}, this.props), { onMount: this._onMount, name: i }),
                        d.createElement(s, { viewport: u, name: i }, a)
                      );
                    }
                  }
                ]),
                D
              );
            })(d.Component);
          });
        var n = (e.RootVirtualContainer = function (e) {
            var t = e.viewport,
              n = e.viewportPadding,
              o = void 0 === n ? w.of(r.Padding.empty) : n,
              i = e.name,
              a = e.children,
              u = d.useContext(r.Context);
            return d.createElement(
              R.Provider,
              {
                key: L(i),
                value: k.aj(t, o, T).pipe(
                  P.M(
                    u.pipe(
                      E.U(function (e) {
                        return e.level;
                      })
                    ),
                    r.State.nextLevel
                  ),
                  D.shareReplay({ bufferSize: 1, refCount: !0 })
                )
              },
              a
            );
          }),
          A = (e.InheritVirtualContainer = function (e) {
            var t = e.viewport,
              n = e.viewportPadding,
              o = void 0 === n ? w.of(U.UL.empty) : n,
              i = e.name,
              a = e.children,
              u = d.useContext(r.Context);
            return d.createElement(
              R.Provider,
              {
                key: L(i),
                value: k
                  .aj(
                    u.pipe(
                      E.U(function (e) {
                        return e.rect;
                      })
                    ),
                    k.aj(
                      t ||
                        u.pipe(
                          E.U(function (e) {
                            return e.rect;
                          })
                        ),
                      o,
                      T
                    ),
                    U.UL.intersection
                  )
                  .pipe(
                    E.U(
                      S.getOrElse(function () {
                        return (
                          M.C8.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport", { name: i }),
                          U.UL.empty
                        );
                      })
                    ),
                    P.M(
                      u.pipe(
                        E.U(function (e) {
                          return e.level;
                        })
                      ),
                      r.State.nextLevel
                    ),
                    D.shareReplay({ bufferSize: 1, refCount: !0 })
                  )
              },
              a
            );
          }),
          N = F.P(function () {
            return m.Qr.pipe(
              g.h(document.body),
              C.O(document.body),
              E.U(U.UL.fromEl),
              E.U(function (e) {
                return { rect: e, level: 0 };
              })
            );
          }).pipe(D.shareReplay({ bufferSize: 1, refCount: !0 })),
          R = (e.Context = d.createContext(N));
      })(r || (r = {}));
      var T = function (e, t) {
          return {
            top: e.top + t.top,
            bottom: e.bottom - t.bottom,
            height: e.height - t.top - t.bottom,
            left: e.left,
            right: e.right,
            width: e.width
          };
        },
        L = function (e) {
          return "viewportProvider".concat(A._A(e));
        };
    },
    18813: (e, t, n) => {
      n.d(t, { L: () => z });
      var r = n(50693),
        o = n(82900),
        i = n(74923),
        a = n(18775),
        u = n(31099),
        s = n(50858),
        l = n(55818),
        c = n(98314),
        p = n(71346),
        d = n(27378),
        _ = n(40327),
        v = n(32952),
        h = n(23239),
        f = n(8543),
        m = n(54001),
        y = n(16118),
        b = n(66310),
        w = n(80900),
        x = n(17343),
        g = n(76974),
        C = n(95093),
        E = n(77176),
        k = n(28043),
        P = n(2834),
        D = n(38194),
        F = n(93508),
        S = n(598),
        U = n(2844),
        A = n(98403),
        M = n(24713),
        T = n(50628),
        L = n(18208),
        N = n(19962),
        R = n(5114),
        H = n(22232),
        B = n(8125),
        V = n(48643),
        I = n(99094),
        W = n(33678),
        O = n(101),
        Q = n(90845),
        j = n(67992),
        q = (function (e) {
          (0, u._)(n, e);
          var t = (0, p._)(n);
          function n() {
            return (0, o._)(this, n), t.apply(this, arguments);
          }
          return n;
        })(V.l5),
        z = (function (e) {
          (0, u._)(n, e);
          var t = (0, p._)(n);
          function n() {
            var e;
            return (
              (0, o._)(this, n),
              (e = t.apply(this, arguments)),
              (0, a._)((0, r._)(e), "context", void 0),
              (0, a._)((0, r._)(e), "_uuid", L.fg(12)),
              (0, a._)((0, r._)(e), "_initialState", !1),
              (0, a._)((0, r._)(e), "_hovered", h.h.create(e._initialState)),
              (0, a._)((0, r._)(e), "_hidden", h.h.create(!e._initialState)),
              (0, a._)((0, r._)(e), "_listPosState", h.h.create({})),
              (0, a._)((0, r._)(e), "_dropdownEl", null),
              (0, a._)((0, r._)(e), "_subs", []),
              (0, a._)((0, r._)(e), "_viewport", h.h.create(N.UL.empty)),
              (0, a._)((0, r._)(e), "_labelRef", d.createRef()),
              (0, a._)(
                (0, r._)(e),
                "hovered",
                e._hovered.pipe(
                  y.G(),
                  b.w(function (t) {
                    var r = (0, c._)(t, 2),
                      o = r[0];
                    return r[1]
                      ? w.H(e.props.showDelay).pipe(x.h(!0))
                      : o
                      ? w.H(void 0 === e.props.closeDelay ? n.defaultProps.closeDelay : e.props.closeDelay).pipe(x.h(!1))
                      : g.of(!1);
                  }),
                  C.T(
                    n._hoveredForce.pipe(
                      E.U(
                        R.exists(function (t) {
                          return t === e._uuid;
                        })
                      )
                    )
                  ),
                  k.x(),
                  P.b(function (t) {
                    return t && n._hoveredForce.next(R.some(e._uuid));
                  }),
                  P.b(function (t) {
                    return t && e._hidden.set(!1);
                  }),
                  D.B(),
                  F.O(e._initialState)
                )
              ),
              (0, a._)((0, r._)(e), "_handleClickForAppearanceHover", function (t) {
                var r = t.target;
                if (!N.pK(r) && !0 !== e.props.dontCloseOnClickInside) {
                  var o = !N.q_(r, j.P.list);
                  n._hoveredForce.next(o ? R.some(e._uuid) : R.none), e._hovered.set(o);
                }
              }),
              (0, a._)((0, r._)(e), "_handleMouseEnterForAppearanceHover", function () {
                e._hovered.set(!0);
              }),
              (0, a._)((0, r._)(e), "_handleClickForAppearanceClick", function (t, n) {
                (n && !t.isTrusted) || (e._hovered.get() ? e._handleClickForAppearanceHover(t) : e._hovered.set(!0));
              }),
              (0, a._)((0, r._)(e), "_handleMouseEnterForAppearanceClick", function (t) {
                var r = t.target;
                N.q_(r, j.P.list) && (n._hoveredForce.next(R.some(e._uuid)), e._hovered.set(!0));
              }),
              (0, a._)((0, r._)(e), "_handleLabelKeyDownForAppearance", function (t) {
                ("Enter" !== t.key && " " !== t.key) || (e._hovered.set(!0), t.preventDefault());
              }),
              e
            );
          }
          return (
            (0, i._)(n, [
              {
                key: "_getHAlign",
                value: function (e) {
                  switch (e) {
                    case "left":
                    case "auto":
                      return { left: "0" };
                    case "right":
                      return { right: "0" };
                    case "center":
                      var t = this._dropdownEl ? this._dropdownEl.offsetWidth : 0;
                      return { right: "50%", marginRight: "-".concat(t / 2, "px") };
                    default:
                      return (0, H.vE)(e);
                  }
                }
              },
              {
                key: "_getVAlign",
                value: function (e) {
                  switch (e) {
                    case "top":
                      return { bottom: "100%" };
                    case "bottom":
                    case "auto":
                      return { top: "100%" };
                    default:
                      return (0, H.vE)(e);
                  }
                }
              },
              {
                key: "calcDropdownPosition",
                value: function () {
                  var e = this,
                    t = this.props.align,
                    n = this.props.vAlign;
                  this._listPosState.set((0, s._)({}, this._getHAlign(t), this._getVAlign(n)));
                  var r = "auto" === t,
                    o = "auto" === n;
                  (r || o) &&
                    requestAnimationFrame(function () {
                      if (e._dropdownEl) {
                        var i = e._viewport.get(),
                          a = e._dropdownEl.getBoundingClientRect();
                        e._listPosState.set(
                          (0, s._)(
                            {},
                            e._getHAlign(r ? (i.right < a.right ? "right" : "left") : t),
                            e._getVAlign(o ? (i.bottom < a.bottom ? "top" : "bottom") : n)
                          )
                        );
                      }
                    });
                }
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this._subs.push(
                    this.hovered
                      .pipe(
                        P.b(function (t) {
                          e.props.onVisibilityChange && e.props.onVisibilityChange(t);
                        }),
                        S.c(
                          (0, _.pipe)(
                            R.fromNullable(this.props.customPosition),
                            R.fold(
                              function () {
                                return g.of(R.none);
                              },
                              function (e) {
                                var t = e.top,
                                  n = e.left;
                                return U.aj(A.Dx(t), A.Dx(n)).pipe(E.U(R.some));
                              }
                            )
                          )
                        )
                      )
                      .subscribe(
                        R.fold(
                          function () {
                            return e.calcDropdownPosition();
                          },
                          function (t) {
                            var n = (0, c._)(t, 2),
                              r = n[0],
                              o = n[1];
                            return e._listPosState.set({ top: r, left: o });
                          }
                        )
                      ),
                    this.context.pipe(M.j("rect")).subscribe(A.wW(this._viewport))
                  ),
                    this.props.forceHide &&
                      this._subs.push(
                        this._hidden.pipe(b.w(A.wX(this.props.forceHide.pipe(T.P())))).subscribe(function () {
                          return e._hidden.set(!0);
                        })
                      );
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._subs.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    (this._subs = []);
                }
              },
              {
                key: "componentWillReciveProps",
                value: function () {
                  this.calcDropdownPosition();
                }
              },
              {
                key: "mapStateToClass",
                value: function (e, t) {
                  var n = { start: "", end: "" };
                  return t
                    ? { prev: n, next: { start: j.P.transparent, end: "" } }
                    : { prev: { start: "", end: j.P.transparent }, next: n };
                }
              },
              {
                key: "_behavior",
                value: function (e) {
                  var t = this;
                  return "mouseClick" === this.props.appearanceBehavior
                    ? {
                        onClickCapture: function (n) {
                          return t._handleClickForAppearanceClick(n, e);
                        },
                        onMouseEnter: this._handleMouseEnterForAppearanceClick,
                        onMouseLeave: function () {
                          return t._hovered.set(t._initialState);
                        }
                      }
                    : {
                        onClickCapture: this._handleClickForAppearanceHover,
                        onMouseEnter: this._handleMouseEnterForAppearanceHover,
                        onMouseLeave: function () {
                          return t._hovered.set(t._initialState);
                        }
                      };
                }
              },
              {
                key: "_labelBehavior",
                value: function () {
                  return { onKeyDown: this._handleLabelKeyDownForAppearance };
                }
              },
              {
                key: "_attachDropdownElementBehavior",
                value: function () {
                  var e,
                    t = this;
                  null === (e = this._dropdownEl) ||
                    void 0 === e ||
                    e.addEventListener("keydown", function (e) {
                      var n;
                      "Escape" === e.key &&
                        (t._hovered.set(t._initialState),
                        e.preventDefault(),
                        e.stopPropagation(),
                        (null === (n = t._labelRef.current) || void 0 === n ? void 0 : n.firstChild) &&
                          setTimeout(function () {
                            var e, n;
                            return null === (e = null === (n = t._labelRef.current) || void 0 === n ? void 0 : n.firstChild) || void 0 === e
                              ? void 0
                              : e.focus();
                          }, 0));
                    });
                }
              },
              {
                key: "_handleDropdownElementMount",
                value: function (e) {
                  (this._dropdownEl = e), this._attachDropdownElementBehavior();
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.label,
                    r = t.id,
                    o = t.name,
                    i = t.ariaLabelledBy,
                    a = t.theme,
                    u = void 0 === a ? {} : a,
                    c = Boolean(r) ? "label-".concat(o, "-").concat(r) : "label-".concat(o),
                    p = Boolean(r) ? "list-".concat(o, "-").concat(r) : "list-".concat(o);
                  return d.createElement(W.a.Context.Consumer, null, function (t) {
                    return d.createElement(I.f.Context.Consumer, null, function (r) {
                      return d.createElement(
                        I.f.Context.Provider,
                        { value: I.f.withValue(r, { hovered: e._hovered }) },
                        d.createElement(
                          f.F.div,
                          (0, l._)(
                            (0, s._)(
                              { role: "combobox" },
                              (0, m.Sh)(j.P.wrapper, u.dropdownContainer),
                              e._behavior(t.has(W.a.Flag.onlyTrustedEvents))
                            ),
                            {
                              "aria-haspopup": "listbox",
                              "aria-labelledby": null != i ? i : c,
                              "aria-expanded": A.U_(e._hidden),
                              "aria-controls": p
                            }
                          ),
                          d.createElement("label", (0, l._)((0, s._)({ id: c }, e._labelBehavior()), { ref: e._labelRef }), n),
                          d.createElement(q, { state: e.hovered, stateToClassMapper: e.mapStateToClass }, function (t) {
                            return t.state
                              ? d.createElement(
                                  f.F.div,
                                  null,
                                  e._hidden.view(function (n) {
                                    return d.createElement(
                                      G,
                                      (0, l._)(
                                        (0, s._)(
                                          {
                                            id: p,
                                            key: "list",
                                            name: e.props.name,
                                            onTransitionEnd:
                                              "prev" === t.type
                                                ? function () {
                                                    return e._hidden.set(!0);
                                                  }
                                                : B.Q1
                                          },
                                          (0, m.Sh)(u.dropdownList, t.view)
                                        ),
                                        {
                                          mount: e._handleDropdownElementMount.bind(e),
                                          style: e._listPosState,
                                          hidden: n,
                                          activeDescendantId: e.props.activeDescendantId
                                        }
                                      ),
                                      e.props.children
                                    );
                                  })
                                )
                              : null;
                          })
                        )
                      );
                    });
                  });
                }
              }
            ]),
            n
          );
        })(d.PureComponent);
      (0, a._)(z, "defaultProps", { align: "auto", vAlign: "auto", showDelay: 500, closeDelay: 500, appearanceBehavior: "mouseHover" }),
        (0, a._)(z, "Delimiter", function () {
          return d.createElement("div", { className: j.P.delimiter });
        }),
        (0, a._)(z, "_hoveredForce", new v.xQ()),
        (0, a._)(z, "contextType", O.l.Context);
      var G = function (e) {
        var t = Q.P.useElWatcher(),
          n = t.ref,
          r = t.onMount;
        return (
          Q.P.FocusTrap.useFocusTrap(n),
          d.createElement(I.f.Context.Consumer, null, function (t) {
            var n = I.f.emptyWithName("".concat(void 0 !== t.name ? "".concat(t.name, "/") : "", "dropdown-").concat(e.name));
            return d.createElement(
              I.f.Context.Provider,
              { value: n },
              d.createElement(
                f.F.div,
                (0, l._)((0, s._)({ id: e.id }, (0, m.Sh)(e.className, !0 === e.hidden ? j.P.hidden : j.P.list)), {
                  style: e.style,
                  mount: function (t) {
                    r(t), void 0 !== e.mount && e.mount(t);
                  },
                  role: "listbox",
                  "aria-labelledby": e.ariaLabelledBy,
                  "data-role": "dropdown-list",
                  "data-name": "dropdown-" + e.name,
                  "aria-activedescendant": e.activeDescendantId,
                  onTransitionEnd: e.onTransitionEnd
                }),
                e.children
              )
            );
          })
        );
      };
    },
    67992: (e, t, n) => {
      n.d(t, { P: () => s });
      var r = n(44060),
        o = n(89894),
        i = n(32096),
        a = {
          position: "absolute",
          zIndex: i.VN,
          display: "flex",
          flexDirection: "column",
          margin: "".concat(o.ux.rem(0.5), " 0"),
          padding: "".concat(o.ux.rem(0.5), " 0"),
          minWidth: o.ux.percent(100),
          borderRadius: o.ux.rem(i.Jr),
          background: r.Il.CoreNeutral0,
          boxShadow: r.uc.Z200,
          opacity: 1,
          transition: "opacity .2s"
        },
        u = { margin: o.ux.rem(0.5), height: o.ux.px(1), backgroundColor: r.Il.CoreNeutral20 },
        s = {
          wrapper: o.ux.style({ position: "relative" }),
          list: o.ux.style(a),
          transparent: o.ux.style({ opacity: 0 }),
          hidden: o.ux.style({ display: "none" }),
          delimiter: o.ux.style(u)
        };
    }
  }
]);
