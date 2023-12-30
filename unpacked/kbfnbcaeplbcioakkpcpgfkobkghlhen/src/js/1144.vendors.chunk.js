/*! For license information please see 1144.vendors.chunk.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [1144],
  {
    25335: (e, t, n) => {
      n.d(t, { zx: () => rt });
      var r = {};
      n.r(r),
        n.d(r, {
          base: () => D,
          button: () => W,
          header1: () => _,
          header2: () => P,
          header3: () => L,
          header3legacy: () => A,
          header4: () => I,
          header5: () => O,
          lawyer: () => B,
          p1: () => N,
          paper: () => R,
          score: () => H,
          small: () => F,
          smallLight: () => M,
          title: () => Y
        });
      var i,
        o = n(50858),
        a = n(55818),
        s = n(27378),
        l = n(8543),
        c = n(54001),
        u = n(18775),
        d = n(23239),
        m = n(2834),
        p = n(78674),
        h = n(77176),
        g = n(22232),
        f = n(44060);
      !(function (e) {
        var t = (e.empty = { hovered: void 0, disabled: void 0, active: void 0 }),
          n = (e.withValue = (e, t) => (0, o._)({}, e, t));
        (e.emptyWithName = (e) => n(t, { name: e })), (e.Context = s.createContext(t));
      })(i || (i = {}));
      var y,
        b = n(27190);
      !(function (e) {
        (e.None = "none"), (e.FromClickPoint = "fromClickPoint"), (e.FromCenter = "fromCenter");
      })(y || (y = {}));
      class v extends s.Component {
        componentDidMount() {
          this._el &&
            (this._subscription = this.props.mouseDownEvents
              .pipe(
                m.b((e) => {
                  if (!this._disabled.get() && this._el) {
                    const t = this._getAnimationStyle(this._el, e);
                    this._ripples.modify((e) => [...e, t]);
                  }
                }),
                p.b(1e3),
                m.b(() => this._ripples.modify(() => []))
              )
              .subscribe());
        }
        componentWillUnmount() {
          Boolean(this._subscription) && this._subscription.unsubscribe();
        }
        _getAnimationStyle(e, t) {
          const n = e.getBoundingClientRect(),
            r = n.width;
          switch (this.props.animationMode) {
            case y.None:
              throw new g.ej("unsupported mode, do not mount component if you do not need ripple animation");
            case y.FromCenter:
              return (0, a._)((0, o._)({}, (0, c.Sh)(C.rippleFromCenter, this.props.className)), {
                top: (n.height - r) / 2,
                left: 0,
                width: r,
                height: r
              });
            default:
              return (0, a._)((0, o._)({}, (0, c.Sh)(C.ripple, this.props.className)), {
                top: t.pageY - n.top - r / 2,
                left: t.pageX - n.left - r / 2,
                width: r,
                height: r
              });
          }
        }
        render() {
          return s.createElement(
            "span",
            { className: C.rippleContainer, ref: (e) => (this._el = e) },
            s.createElement(
              l.F.span,
              null,
              this._ripples.pipe(h.U((e) => e.map((e, t) => s.createElement("span", { className: e.className, key: t, style: e }))))
            )
          );
        }
        constructor(e, t) {
          super(e),
            (0, u._)(this, "context", void 0),
            (0, u._)(this, "_ripples", d.h.create(Array())),
            (0, u._)(this, "_el", void 0),
            (0, u._)(this, "_subscription", void 0),
            (0, u._)(this, "_disabled", d.h.create(!1).view()),
            (this._disabled = void 0 === t.disabled ? this._disabled : t.disabled);
        }
      }
      (0, u._)(v, "contextType", i.Context);
      const w = b.ux.keyframes({ to: { opacity: 0, transform: "scale(1)" } }),
        x = b.ux.keyframes({ to: { opacity: 0, transform: "scale(2)" } }),
        E = {
          position: "absolute",
          borderRadius: b.ux.percent(100),
          backgroundColor: f.Il.CoreNeutral90,
          opacity: 0.15,
          transform: "scale(0)",
          animation: `${x} .4s`
        },
        T = { animationName: w },
        C = b.ux.stylesheet({
          rippleContainer: [{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit", pointerEvents: "none" }],
          ripple: [E],
          rippleFromCenter: [E, T]
        });
      var k = n(98410),
        S = n(98403);
      const _ = b.ux.style({
          margin: 0,
          color: f.xv.H1Color,
          letterSpacing: f.xv.H1LetterSpacing,
          fontWeight: f.xv.H1Weight,
          fontSize: b.ux.rem(f.xv.H1Size),
          lineHeight: b.ux.rem(f.xv.H1LineHeight)
        }),
        P = b.ux.style({
          margin: 0,
          color: f.xv.H2Color,
          textTransform: "capitalize",
          letterSpacing: f.xv.H2LetterSpacing,
          fontWeight: f.xv.H2Weight,
          fontSize: b.ux.rem(f.xv.H2Size),
          lineHeight: b.ux.rem(f.xv.H2LineHeight)
        }),
        L = b.ux.style({
          margin: 0,
          color: f.xv.H3Color,
          letterSpacing: b.ux.rem(f.xv.H3LetterSpacing),
          fontWeight: f.xv.H3Weight,
          fontSize: b.ux.rem(f.xv.H3Size),
          lineHeight: b.ux.rem(f.xv.H3LineHeight)
        }),
        A = b.ux.style({
          margin: 0,
          color: f.Il.CoreNeutral50,
          textTransform: "uppercase",
          letterSpacing: b.ux.rem(0.04625),
          fontWeight: 700,
          fontSize: b.ux.rem(0.6875),
          lineHeight: b.ux.rem(1.5)
        }),
        W = b.ux.style({
          margin: 0,
          color: f.xv.ButtonColor,
          letterSpacing: b.ux.rem(f.xv.ButtonLetterSpacing),
          fontWeight: f.xv.ButtonWeight,
          fontSize: b.ux.rem(f.xv.ButtonSize),
          lineHeight: b.ux.rem(f.xv.ButtonLineHeight)
        }),
        I = b.ux.style({
          margin: 0,
          color: f.xv.H4Color,
          letterSpacing: b.ux.rem(f.xv.H4LetterSpacing),
          fontWeight: f.xv.H4Weight,
          fontSize: b.ux.rem(f.xv.H4Size),
          lineHeight: b.ux.rem(f.xv.H4LineHeight)
        }),
        R = b.ux.style({
          color: f.xv.PaperColor,
          letterSpacing: b.ux.rem(f.xv.PaperLetterSpacing),
          fontWeight: f.xv.PaperWeight,
          fontSize: b.ux.rem(f.xv.PaperSize),
          lineHeight: b.ux.rem(f.xv.PaperLineHeight)
        }),
        D = b.ux.style({
          color: f.xv.BodyColor,
          letterSpacing: b.ux.rem(f.xv.BodyLetterSpacing),
          fontWeight: f.xv.BodyWeight,
          fontSize: b.ux.rem(f.xv.BodySize),
          lineHeight: b.ux.rem(f.xv.BodyLineHeight)
        }),
        F = b.ux.style({
          color: f.xv.SmallColor,
          letterSpacing: b.ux.rem(f.xv.SmallLetterSpacing),
          fontWeight: f.xv.SmallWeight,
          fontSize: b.ux.rem(f.xv.SmallSize),
          lineHeight: b.ux.rem(f.xv.SmallLineHeight)
        }),
        M = b.ux.style({
          color: f.xv.SmallLightColor,
          letterSpacing: b.ux.rem(f.xv.SmallLightLetterSpacing),
          fontWeight: f.xv.SmallLightWeight,
          fontSize: b.ux.rem(f.xv.SmallLightSize),
          lineHeight: b.ux.rem(f.xv.SmallLightLineHeight)
        }),
        H = b.ux.style({
          color: f.xv.ScoreColor,
          letterSpacing: b.ux.rem(f.xv.ScoreLetterSpacing),
          fontWeight: f.xv.ScoreWeight,
          fontSize: b.ux.rem(f.xv.ScoreSize),
          lineHeight: b.ux.rem(f.xv.ScoreLineHeight)
        }),
        B = b.ux.style({
          color: f.Il.CoreNeutral70,
          letterSpacing: ".1px",
          fontWeight: 400,
          fontSize: b.ux.rem(0.6875),
          lineHeight: b.ux.rem(1)
        }),
        Y = b.ux.style({
          color: f.Il.CoreNeutral90,
          textTransform: "uppercase",
          letterSpacing: ".8px",
          fontWeight: 700,
          fontSize: b.ux.rem(0.75),
          lineHeight: b.ux.rem(2)
        }),
        N = b.ux.style({ color: f.Il.CoreNeutral90, letterSpacing: 0, fontSize: b.ux.rem(0.9375), lineHeight: b.ux.rem(1.5) }),
        O = b.ux.style({
          margin: 0,
          color: f.Il.CoreNeutral50,
          textTransform: "uppercase",
          letterSpacing: b.ux.rem(0.04625),
          fontWeight: 400,
          fontSize: b.ux.rem(0.5625),
          lineHeight: b.ux.rem(1)
        });
      function G(e) {
        var { nodeType: t, styleType: n, className: r, mount: i } = e,
          u = (0, k._)(e, ["nodeType", "styleType", "className", "mount"]);
        const d = l.F[t],
          m = S.Dx(n).pipe(h.U((e) => G.style[e]));
        return s.createElement(d, (0, a._)((0, o._)({}, (0, c.Sh)(m, r), u), { mount: i }));
      }
      !(function (e) {
        e.style = r;
        let t;
        !(function (e) {
          (e.H1 = "header1"),
            (e.H2 = "header2"),
            (e.H3 = "header3"),
            (e.H3Legacy = "header3legacy"),
            (e.H4 = "header4"),
            (e.H5 = "header5"),
            (e.Paper = "paper"),
            (e.Base = "base"),
            (e.Small = "small"),
            (e.SmallLight = "smallLight"),
            (e.Lawyer = "lawyer"),
            (e.Title = "title"),
            (e.Button = "button"),
            (e.Score = "score"),
            (e.P1 = "p1");
        })((t = e.Type || (e.Type = {})));
        (e.H1 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H1, nodeType: "h1" }, e))),
          (e.H2 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H2, nodeType: "h2" }, e))),
          (e.H3 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H3, nodeType: "h3" }, e))),
          (e.H3Legacy = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H3Legacy, nodeType: "h3" }, e))),
          (e.H4 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H4, nodeType: "h4" }, e))),
          (e.H5 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.H5, nodeType: "h5" }, e))),
          (e.Paper = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Paper, nodeType: "span" }, e))),
          (e.Base = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Base, nodeType: "div" }, e))),
          (e.Small = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Small, nodeType: "small" }, e))),
          (e.SmallLight = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.SmallLight, nodeType: "div" }, e))),
          (e.Lawyer = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Lawyer, nodeType: "span" }, e))),
          (e.Title = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Title, nodeType: "div" }, e))),
          (e.Button = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Button, nodeType: "div" }, e))),
          (e.Score = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.Score, nodeType: "div" }, e))),
          (e.P1 = (e) => s.createElement(G, (0, o._)({ styleType: G.Type.P1, nodeType: "div" }, e)));
      })(G || (G = {}));
      var $,
        U = n(51037),
        X = n(1169),
        j = n(40327),
        z = n(32952),
        V = n(66310),
        q = n(40151),
        Z = n(93508),
        K = n(24209),
        Q = n(2844),
        J = n(8125),
        ee = n(5114),
        te = n(81531),
        ne = n(31542),
        re = n(9922),
        ie = n(49708),
        oe = n(41398),
        ae = n(85985),
        se = n(80900),
        le = n(95093),
        ce = n(9223),
        ue = n(18208);
      !(function (e) {
        e.genUuid = () => ue.fg(12);
        var t = (e.defaultState = { visible: !1, content: ee.none }),
          n = (e.Context = s.createContext(void 0));
        class r {
          getTooltipObservable(e, n, r, i) {
            const o = K.T(ie.R(e, "mouseenter"), ie.R(e, "focus")),
              a = K.T(ie.R(e, "mouseleave"), ie.R(e, "blur")),
              s = $.genUuid(),
              l = () =>
                this._state.modify((e) =>
                  (0, j.pipe)(
                    e.content,
                    ee.exists((e) => e.uuid === s)
                  )
                    ? t
                    : e
                );
            return o.pipe(
              oe.M(S.Dx(n).pipe(ae.h(Boolean)), (e, t) => t),
              m.b((t) => this.content.set(ee.some({ target: e, content: t, alignment: r, uuid: s }))),
              V.w(() =>
                (0, j.pipe)(
                  i,
                  ee.fold(
                    () => q.E,
                    (e) => se.H(e)
                  )
                ).pipe(le.T(a), m.b(l))
              ),
              ce.x(l)
            );
          }
          constructor(e = d.h.create(t)) {
            (0, u._)(this, "_state", void 0),
              (0, u._)(this, "visible", void 0),
              (0, u._)(this, "content", void 0),
              (0, u._)(this, "hasContent", void 0),
              (0, u._)(this, "state", void 0),
              (0, u._)(this, "show", void 0),
              (0, u._)(this, "hide", void 0),
              (this._state = e),
              (this.visible = this._state.lens("visible")),
              (this.content = this._state.lens("content")),
              (this.hasContent = this._state.view((e) => ee.isSome(e.content))),
              (this.state = this._state.view((e) =>
                (0, j.pipe)(
                  e.content,
                  ee.filter(() => e.visible)
                )
              )),
              (this.show = () => {
                this.visible.set(!0);
              }),
              (this.hide = () => {
                this._state.set(t);
              });
          }
        }
        e.Impl = r;
        e.DefaultProvider = ({ children: e }) => s.createElement(n.Provider, { value: new r() }, e);
      })($ || ($ = {}));
      class de extends s.Component {
        componentDidMount() {
          this._attachEvents(this.props);
        }
        UNSAFE_componentWillReceiveProps(e) {
          this._subs.dispose(), this._attachEvents(e);
        }
        componentWillUnmount() {
          this._subs.dispose();
        }
        render() {
          return s.Children.only(this.props.children);
        }
        constructor(...e) {
          super(...e),
            (0, u._)(this, "context", void 0),
            (0, u._)(this, "_subs", new re.w.Keeper()),
            (0, u._)(this, "_attachEvents", (e) => {
              this._subs.push(
                this.context
                  .getTooltipObservable(ne.findDOMNode(this), e.title, null != e.align ? e.align : "auto", ee.fromNullable(e.duration))
                  .subscribe()
              );
            });
        }
      }
      (0, u._)(de, "contextType", $.Context);
      var me,
        pe = n(71249),
        he = n(26328),
        ge = n(57050),
        fe = n(76974),
        ye = n(85089),
        be = n(60797),
        ve = n(28043),
        we = n(598),
        xe = n(83401),
        Ee = n(13444),
        Te = n(93497),
        Ce = n(23063),
        ke = n(19962);
      !(function (e) {
        function t(e) {
          s.useEffect(() => {
            const t = e.subscribe();
            return () => t.unsubscribe();
          }, [e]);
        }
        e.useSubscriptionTo = t;
        const n = new Set();
        function r() {
          return s.useMemo(() => {
            const e = d.h.create(ee.none);
            return { ref: e, onMount: (t) => e.set(ee.fromNullable(t)) };
          }, []);
        }
        (e.useSingleton = function (e) {
          s.useEffect(
            () => (
              (0, g.kG)(!n.has(e), `Component ${e} can be mounted only once!`),
              n.add(e),
              () => {
                n.delete(e);
              }
            ),
            []
          );
        }),
          (e.useElWatcher = r);
        (e.useRectWatcher = () => {
          const { ref: e, onMount: t } = r();
          return {
            rect: e.pipe(
              V.w(
                ee.fold(
                  () => fe.of(ee.none),
                  (e) => ye.YC(e).pipe(Z.O(ke.UL.fromEl(e)), h.U(ee.some))
                )
              )
            ),
            onMount: t
          };
        }),
          (e.useEffectOnDidMount = (e) => {
            s.useEffect(e, []);
          }),
          (e.useEffectOnWillUnmount = (e) => {
            s.useEffect(() => e, []);
          }),
          (e.useMemoOnDidMount = (e) => s.useMemo(e, []));
        e.useAtomOf = function (e) {
          const t = me.useMemoOnDidMount(() => d.h.create(e));
          return (
            s.useEffect(() => {
              t.set(e);
            }, [e, t]),
            t
          );
        };
        const i =
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]',
          o = (e) => {
            try {
              e.focus({ preventScroll: !0 });
            } catch (e) {
              return !1;
            }
            return document.activeElement === e;
          };
        let a;
        !(function (e) {
          let n;
          !(function (e) {
            (e.firstFocusable = "firstFocusable"),
              (e.lastFocusable = "lastFocusable"),
              (e.existingActiveElement = "existingActiveElement"),
              (e.none = "none");
          })((n = e.InitialFocus || (e.InitialFocus = {}))),
            (e.useElementFocusTrap = function (e = a()) {
              const t = me.useElWatcher();
              return me.FocusTrap.useFocusTrap(t.ref, e), t;
            }),
            (e.useFocusTrap = function (e, n = a()) {
              t(n(e));
            });
          const r = (e, t, r) =>
            (0, ge.ls)(
              be.oA,
              h.U((e) => ({ first: he.YM(e), last: he.Z$(e), active: e.find((e) => e === document.activeElement) })),
              ve.x((e, t) => e.first === t.first && e.last === t.last),
              V.w(({ first: i, last: o, active: a }) =>
                K.T(
                  se.H(0).pipe(
                    m.b(() => {
                      switch (e) {
                        case n.firstFocusable:
                          return t(i);
                        case n.lastFocusable:
                          return t(o);
                        case n.existingActiveElement:
                          return !Boolean(a) && t(i);
                        case n.none:
                          return;
                        default:
                          return (0, g.vE)(e);
                      }
                    })
                  ),
                  r(o, "keydown").pipe(
                    ae.h((e) => ("Tab" === e.key || 9 === e.keyCode) && !1 === e.shiftKey),
                    m.b((e) => (t(i), e.preventDefault()))
                  ),
                  r(i, "keydown").pipe(
                    ae.h((e) => ("Tab" === e.key || 9 === e.keyCode) && e.shiftKey),
                    m.b((e) => (t(o), e.preventDefault()))
                  )
                )
              )
            );
          var a = (e.staticFocusTrap = (e = n.firstFocusable, t = (e) => e.focus(), a = (e, t) => ie.R(e, t)) =>
            (0, ge.ls)(h.U(ee.chain((e) => (0, j.pipe)(e.querySelectorAll(i), Array.from, pe.hX(o), he.nI))), r(e, t, a)));
          (e.dynamicFocusTrap = (e = n.existingActiveElement, t = (e) => e.focus(), o = (e, t) => ie.R(e, t)) =>
            (0, ge.ls)(
              be.cp((e) =>
                ye
                  .rl(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["tabindex"] })
                  .pipe(h.U(() => (0, j.pipe)(Array.from(e.querySelectorAll(i)), he.nI)))
              ),
              r(e, t, o)
            )),
            (e.noTrap = we.c(xe.C));
        })((a = e.FocusTrap || (e.FocusTrap = {}))),
          (e.useVisibilityObserverOnce = function (e) {
            const { ref: n, onMount: r } = me.useElWatcher();
            return (
              t(
                s.useMemo(() => {
                  const t = { rootMargin: "0px", threshold: 1 };
                  return n.pipe(
                    be.oA,
                    Ee.g(500),
                    V.w((e) => ye.n(e, t)),
                    V.w((e) => e),
                    Te.n((e) => !1 === e.isIntersecting),
                    m.b(e),
                    Ce.q(1)
                  );
                }, [n, e])
              ),
              r
            );
          });
      })(me || (me = {}));
      var Se = n(9546),
        _e = n(13578),
        Pe = n(77678),
        Le = n(62172),
        Ae = n(13785);
      const We = (e) =>
          (0, a._)((0, o._)({}, e.default), {
            $nest: (0, o._)(
              {
                "&:not([data-disabled='true'])[data-hovered='true']": (0, o._)({}, e.hovered),
                "&[data-disabled='true']": (0, o._)({}, e.disabled),
                "&:not([data-disabled='true']):active": (0, o._)({}, e.clicked),
                "&[data-active='true']": (0, o._)({}, e.toggled),
                "&[hidden]": (0, o._)({}, e.hidden)
              },
              b.f5.focusOutline
            )
          }),
        Ie = (e, t) => ({
          $nest: {
            "&[data-textpos='left']": { padding: `0 ${t} 0 ${e}` },
            "&[data-textpos='right']": { padding: `0 ${e} 0 ${t}` },
            "&[data-textpos='everywhere']": { padding: `0 ${e} 0 ${e}` }
          }
        }),
        Re = { minHeight: "auto", minWidth: b.ux.rem(Se.Ze) },
        De = (e, t, n) => ({
          $nest: {
            "& > i": (0, o._)({ stroke: b.ux.important(e), fill: Boolean(n) ? b.ux.important(e) : void 0 }, Re),
            '& > i[data-hovered="true"]': null != t ? { stroke: b.ux.important(t), fill: Boolean(n) ? b.ux.important(t) : void 0 } : {}
          }
        }),
        Fe = { borderRadius: b.ux.rem(Ae.fx) },
        Me = We({
          default: {
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            padding: 0,
            outline: "none",
            border: 0,
            backgroundColor: "transparent",
            verticalAlign: "middle",
            whiteSpace: "nowrap",
            cursor: "default",
            userSelect: "none",
            $nest: { "& > i": Re }
          },
          hovered: { cursor: "pointer" },
          disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
            $nest: { '& > i[data-disabled="true"]': { fill: "inherit", stroke: "inherit" } }
          },
          clicked: {},
          toggled: {},
          hidden: { display: "none" }
        }),
        He = b.ux.style({
          cursor: "pointer",
          border: "none",
          margin: 0,
          padding: 0,
          width: "auto",
          overflow: "visible",
          appearance: "none",
          fontFamily: "inherit",
          "-webkit-font-smoothing": "inherit",
          "-moz-osx-font-smoothing": "inherit",
          "-webkit-appearance": "none",
          "-moz-appearance": "none",
          $nest: { "&::-moz-focus-inner": { border: 0, padding: 0 } }
        }),
        Be = b.ux.style(Me),
        Ye = b.ux.style(
          Me,
          Fe,
          We({
            default: {
              padding: `0 ${b.ux.rem(Se.x)}`,
              backgroundColor: "transparent",
              color: _e.vU.InteractiveBranded.Primary.Default,
              lineHeight: b.ux.rem(Se.Ze),
              transition: "background-color .2s"
            },
            hovered: { backgroundColor: Pe.CoreNeutral1 },
            disabled: {},
            clicked: { transition: "none", transform: "scale(1)" },
            toggled: {},
            hidden: {}
          })
        ),
        Ne = b.ux.style({ display: "inline-flex" }),
        Oe = b.ux.style(
          Me,
          Fe,
          Ie(b.ux.rem(Se.x), 0),
          We({
            default: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: _e.vU.InteractiveBranded.Primary.Default,
              color: _e.XY.Content.OnPrimary.Default,
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s",
              minHeight: b.ux.rem(Se.Ze),
              minWidth: b.ux.rem(Se.Ze)
            },
            hovered: { backgroundColor: _e.vU.InteractiveBranded.Primary.Hover },
            disabled: {},
            clicked: {},
            toggled: { backgroundColor: _e.vU.InteractiveBranded.Primary.Hover },
            hidden: {}
          }),
          De(_e.XY.Content.OnPrimary.Default, void 0, !0)
        ),
        Ge = b.ux.style(
          Me,
          Fe,
          Ie(b.ux.rem(Se.x), 0),
          We({
            default: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              backgroundColor: "transparent",
              color: _e.vU.InteractiveBranded.Primary.Default,
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s",
              fontWeight: 400,
              border: `1px solid ${_e.vU.InteractiveBranded.Primary.Default}`,
              minHeight: b.ux.rem(Se.Ze),
              minWidth: b.ux.rem(Se.Ze)
            },
            hovered: { backgroundColor: Le.Blue0 },
            disabled: {},
            clicked: {},
            toggled: { backgroundColor: Le.Blue0 },
            hidden: {}
          }),
          De(_e.vU.InteractiveBranded.Primary.Default, void 0, !0)
        ),
        $e = b.ux.style(
          Me,
          {
            $nest: {
              [`.${Ne} &`]: {
                padding: `0 ${b.ux.rem(Se.x)}`,
                marginRight: b.ux.px(2),
                borderRadius: 0,
                $nest: {
                  "&:first-of-type": { borderRadius: `${b.ux.rem(Ae.fx)} 0 0 ${b.ux.rem(Ae.fx)}` },
                  "&:last-of-type": { marginRight: 0, borderRight: "none", borderRadius: `0 ${b.ux.rem(Ae.fx)} ${b.ux.rem(Ae.fx)} 0` }
                }
              },
              [`.${Ne} &:not([data-active='true'])`]: { backgroundColor: Pe.CoreNeutral10 }
            }
          },
          We({
            default: {
              padding: `0 ${b.ux.rem(Se.x)}`,
              borderRadius: b.ux.rem(Ae.fx),
              backgroundColor: Pe.CoreNeutral10,
              color: _e.vU.InteractiveBranded.Primary.Default,
              textTransform: "capitalize",
              letterSpacing: 0,
              fontSize: b.ux.rem(0.875),
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s"
            },
            hovered: { backgroundColor: Pe.CoreNeutral20 },
            toggled: {
              backgroundColor: _e.vU.InteractiveBranded.Primary.Default,
              color: _e.XY.Content.OnPrimary.Default,
              $nest: { "&:hover": { backgroundColor: _e.vU.InteractiveBranded.Primary.Hover, color: _e.XY.Content.OnPrimary.Default } }
            },
            disabled: {},
            clicked: {},
            hidden: {}
          })
        ),
        Ue = b.ux.style(
          Me,
          Fe,
          Ie(b.ux.rem(Se.x), 0),
          We({
            default: {
              display: "inline-flex",
              color: _e.vU.InteractiveBranded.Primary.Default,
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s",
              transitionProperty: "border, background, color",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              minHeight: b.ux.rem(Se.Ze),
              minWidth: b.ux.rem(Se.Ze)
            },
            hovered: { background: Le.Blue0 },
            disabled: {},
            clicked: {},
            toggled: { background: Le.Blue0 },
            hidden: {}
          }),
          {
            $nest: (0, a._)((0, o._)({}, De(_e.vU.InteractiveNeutral.Primary.Default, _e.vU.InteractiveBranded.Primary.Default).$nest), {
              "&[data-textpos] i[data-role='icon']": { margin: `${b.ux.rem(-0.1)} ${b.ux.rem(0.25)} 0 0` }
            })
          }
        ),
        Xe = b.ux.style(
          Me,
          Fe,
          Ie(b.ux.rem(Se.x), 0),
          We({
            default: {
              display: "inline-flex",
              color: _e.vU.InteractiveNeutral.Primary.Default,
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s",
              transitionProperty: "border, background, color",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              minHeight: b.ux.rem(Se.Ze),
              minWidth: b.ux.rem(Se.Ze)
            },
            hovered: { background: Le.BlueGray5, color: Le.BlueGray70 },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          De(_e.vU.InteractiveNeutral.Primary.Default, void 0, !0)
        ),
        je = b.ux.style(
          Me,
          Ie(b.ux.rem(Se.mh), b.ux.rem(Se.x)),
          We({
            default: {
              display: "inline-flex",
              color: Pe.CoreNeutral90,
              textAlign: "left",
              fontWeight: "normal",
              fontSize: b.ux.rem(0.875),
              lineHeight: b.ux.rem(Se.Ze),
              transitionDuration: ".2s",
              alignItems: "center",
              minHeight: b.ux.rem(Se.Ze)
            },
            hovered: { backgroundColor: Pe.CoreNeutral10, color: _e.vU.InteractiveBranded.Primary.Default },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          {
            $nest: (0, a._)((0, o._)({}, De(_e.vU.InteractiveNeutral.Primary.Default, _e.vU.InteractiveBranded.Primary.Default).$nest), {
              "&[data-textpos] i[data-role='icon']": { margin: `${b.ux.rem(-0.1)} ${b.ux.rem(0.25)} 0 0` }
            })
          }
        ),
        ze = b.ux.style(Me, Fe, {
          display: "flex",
          margin: `0 ${b.ux.rem(Se.x)} ${b.ux.rem(Se.x)}`,
          padding: `0 ${b.ux.rem(0.3)} 0 ${b.ux.rem(Se.x)}`,
          minHeight: b.ux.rem(Se.Ze),
          color: Pe.CoreNeutral70,
          textAlign: "left",
          whiteSpace: "normal",
          fontWeight: "normal",
          lineHeight: b.ux.rem(1.2),
          transition: "background .2s",
          alignItems: "center",
          $nest: { "&[data-hovered='true']": { background: Pe.CoreNeutral10 }, "&[data-active='true']": { background: Pe.CoreNeutral20 } }
        }),
        Ve = b.ux.style({ textDecoration: "none" }),
        qe = b.ux.style({
          display: "inline-flex",
          justifyContent: "space-around",
          $nest: { "& > *:not(:first-child)": { marginLeft: b.ux.rem(Se.x) } }
        }),
        Ze = b.ux.style({ display: "inline-flex", flexDirection: "column", $nest: { "& > *": { borderRadius: 0 } } });
      b.ux.style({ whiteSpace: "pre-line" });
      var Ke;
      !(function (e) {
        (e.button = "button"), (e.link = "a"), (e.div = "div");
      })(Ke || (Ke = {}));
      const Qe = (e) => {
        var {
            name: t,
            tag: n,
            title: r,
            titleAlign: l,
            active: u,
            animationMode: p,
            styleType: g,
            textPosition: f,
            onClick: b,
            role: w,
            children: x,
            type: E = "button"
          } = e,
          T = (0, k._)(e, [
            "name",
            "tag",
            "title",
            "titleAlign",
            "active",
            "animationMode",
            "styleType",
            "textPosition",
            "onClick",
            "role",
            "children",
            "type"
          ]);
        const C = s.useContext(i.Context),
          _ = d.h.create(!1),
          P = d.h.create(!1),
          L = d.h.create(!1),
          A = d.h.create(!1),
          W = new z.xQ(),
          I = S.Dx(t).pipe(h.U((e) => (void 0 !== C.name ? `${C.name}/${e}` : e))),
          R = { hovered: void 0 !== C.hovered ? d.h.combine(C.hovered, P, J.or) : P, disabled: L, active: A },
          D = I.pipe(
            V.w((e) => {
              var t, n, r;
              return (
                void 0 !== b
                  ? ((t = b),
                    (n = (e) => _.set(e)),
                    (r = (e) => P.set(e)),
                    L.pipe(
                      h.U((e) => {
                        return (
                          (i = (0, U._)(function* (i) {
                            if ((i.stopPropagation(), !e)) {
                              n(!0);
                              try {
                                return r(!1), yield t(i);
                              } finally {
                                n(!1);
                              }
                            }
                          })),
                          function (e) {
                            return i.apply(this, arguments);
                          }
                        );
                        var i;
                      })
                    ))
                  : q.E
              ).pipe(
                h.U((t) => (n) => {
                  var r;
                  return (
                    Qe._log.debug("Button clicked: " + e),
                    null === (r = t) || void 0 === r ? void 0 : r(n).catch((t) => Qe._log.error("Button click failed: " + e, t))
                  );
                })
              );
            }),
            Z.O(void 0)
          ),
          F = (0, j.pipe)(
            ee.fromNullable(f),
            ee.alt(() => nt.parseFromNodes(x)),
            ee.toUndefined
          ),
          M = (0, a._)((0, o._)({}, T), {
            styleType: g,
            role: null != w ? w : "button",
            onClick: D,
            onMouseOver: (e) => {
              var t, n;
              P.set(!0), null === (t = (n = T).onMouseOver) || void 0 === t || t.call(n, e);
            },
            onMouseLeave: (e) => {
              var t, n;
              P.set(!1), null === (t = (n = T).onMouseLeave) || void 0 === t || t.call(n, e);
            },
            onMouseDown: ({ pageX: e, pageY: t }) => W.next({ pageX: e, pageY: t }),
            "data-name": I,
            "data-disabled": R.disabled,
            "data-active": R.active,
            "data-hovered": R.hovered,
            "data-textpos": F,
            "aria-pressed": u,
            children:
              Boolean(p) && p !== y.None
                ? (function (e) {
                    return Array.isArray(e) ? [].concat.apply([], e) : [e];
                  })(x).concat(s.createElement(v, { key: "ripple", animationMode: null != p ? p : y.FromClickPoint, mouseDownEvents: W }))
                : x,
            tabIndex: void 0 !== T.tabIndex ? T.tabIndex : ((H = L), "boolean" == typeof H ? (0, j.pipe)(H, et) : (0, j.pipe)(H, h.U(et))),
            disabled: R.disabled
          });
        var H;
        const B = () =>
          void 0 === T.href || (n !== Ke.link && Boolean(n))
            ? n === Ke.div
              ? s.createElement(Je, (0, a._)((0, o._)({ tag: Ke.div }, M), { onKeyDown: tt, className: T.className }))
              : s.createElement(Je, (0, o._)((0, a._)((0, o._)({ tag: Ke.button }, M), { type: E }), (0, c.Sh)(He, T.className)))
            : s.createElement(
                Je,
                (0, o._)(
                  (0, a._)((0, o._)({ tag: Ke.link }, M), { href: T.href, target: T.target, rel: T.rel }),
                  (0, c.Sh)(Ve, T.className)
                )
              );
        return (
          me.useSubscriptionTo(
            K.T(
              Q.aj([S.Dx(T.disabled).pipe(h.U(Boolean)), _]).pipe(
                h.U(([e, t]) => e || t),
                m.b(S.wW(L))
              ),
              S.Dx(u).pipe(h.U(Boolean), m.b(S.wW(A)))
            )
          ),
          s.createElement(
            i.Context.Provider,
            { value: R },
            null != r ? s.createElement(de, { title: r, align: Boolean(l) ? l : "auto" }, B()) : B()
          )
        );
      };
      function Je(e) {
        var { tag: t, styleType: n } = e,
          r = (0, k._)(e, ["tag", "styleType"]);
        const i = l.F[t];
        return null != n ? s.createElement(G, (0, o._)({ styleType: n, nodeType: t }, r)) : s.createElement(i, r);
      }
      function et(e) {
        return e ? -1 : 0;
      }
      function tt(e) {
        (" " !== e.key && "Enter" !== e.key) || (e.target.click(), e.preventDefault());
      }
      var nt;
      function rt(e) {
        return s.createElement(Qe, it(e, Be));
      }
      function it(e, t) {
        const { className: n } = (0, c.Sh)(e.className, t);
        return (0, a._)((0, o._)({}, e), { className: n });
      }
      (Qe.__logSingleton = {
        __logger: void 0,
        get _log() {
          return (
            void 0 === Qe.__logSingleton.__logger && (Qe.__logSingleton.__logger = te.C8.Logging.getLogger("Button")),
            Qe.__logSingleton.__logger
          );
        }
      }),
        (Qe._log = Qe.__logSingleton._log),
        (function (e) {
          const t = new Map([
            ["+", "everywhere"],
            ["++", "everywhere"],
            ["+-", "left"],
            ["-+", "right"],
            ["+++", "everywhere"],
            ["+-+", "everywhere"],
            ["++-", "left"],
            ["-++", "right"],
            ["-+-", "surrounded"]
          ]);
          e.parseFromNodes = function (e) {
            const n = X.isElement(e) ? e.props.children : e,
              r = (Array.isArray(n) ? n : [n]).map((e) => ("string" == typeof e ? "+" : "-")).join("");
            return ee.fromNullable(t.get(r));
          };
        })(nt || (nt = {})),
        (function (e) {
          var t = (e.Animated = (e) =>
            s.createElement(
              Qe,
              (0, a._)((0, o._)({}, e), { animationMode: Boolean(e.animationMode) ? e.animationMode : y.FromClickPoint })
            ));
          (e.Primary = (e) => s.createElement(t, (0, o._)({ styleType: G.Type.Button }, it(e, Oe)))),
            (e.Secondary = (e) => s.createElement(t, (0, o._)({ styleType: G.Type.Button }, it(e, Ge)))),
            (e.Ghost = (e) => s.createElement(t, (0, o._)({ styleType: G.Type.Button }, it(e, Ue)))),
            (e.Tertiary = (e) => s.createElement(t, (0, o._)({ styleType: G.Type.Base }, it(e, Xe)))),
            (e.Flat = (e) => s.createElement(t, it(e, je))),
            (e.White = (e) => s.createElement(t, it(e, $e))),
            (e.SidebarFlat = (e) => s.createElement(Qe, (0, o._)({ styleType: G.Type.H3Legacy }, it(e, ze)))),
            (e.Caps = (e) => s.createElement(Qe, (0, o._)({ styleType: G.Type.H3Legacy }, it(e, Ye)))),
            (e.Group = ({ children: e, className: t, align: n = "horizontal", sticky: r, name: i }) =>
              s.createElement(
                l.F.div,
                (0, a._)((0, o._)({ role: "group" }, (0, c.Sh)(t, "horizontal" === n ? (!0 === r ? Ne : qe) : Ze)), { "data-name": i }),
                e
              ));
        })(rt || (rt = {}));
    },
    27190: (e, t, n) => {
      n.d(t, { f5: () => i, ux: () => r });
      var r,
        i,
        o = n(13578),
        a = n(54861),
        s = n(45614),
        l = n(40327),
        c = n(83171);
      !(function (e) {
        (e.stylesheet = function (e) {
          return (0, l.pipe)(
            e,
            s.Su((e, t) => c.style(...t, { $debugName: e }))
          );
        }),
          (e.prefixedStylesheet = function (e, t) {
            return (0, l.pipe)(
              t,
              s.Su((t, n) => c.style(...n, { $debugName: e + "-" + t }))
            );
          });
        (e.percent = a.aQ), (e.px = a.px), (e.vh = a.sI), (e.vw = a.E9), (e.important = a.ef), (e.color = a.$_);
        ({
          style: e.style,
          keyframes: e.keyframes,
          cssRaw: e.cssRaw,
          cssRule: e.cssRule,
          setStylesTarget: e.setStylesTarget,
          fontFace: e.fontFace
        } = c);
        (e.rem = (e) => `calc(${e}px * var(--rem))`),
          (e.joinClasses = (e) => e.filter(Boolean).join(" ")),
          (e.seconds = (e) => `${e}s`),
          (e.linearGradient = a.bC);
      })(r || (r = {})),
        (function (e) {
          e.focusOutline = {
            "&:focus": {
              boxShadow: `0 0 0 2px ${o.XY.Content.OnPrimary.Default}, 0 0 0 4px ${o.vU.InteractiveBranded.Primary.Default}`,
              zIndex: 1
            },
            "&:focus:not(:focus-visible)": { boxShadow: "none", $unique: !0 },
            "&:focus-visible": {
              boxShadow: `0 0 0 2px ${o.XY.Content.OnPrimary.Default}, 0 0 0 4px ${o.vU.InteractiveBranded.Primary.Default}`,
              zIndex: 1,
              $unique: !0
            }
          };
        })(i || (i = {}));
    },
    66672: (e, t, n) => {
      n.d(t, { B2: () => b, E_: () => v, II: () => f });
      var r = n(50858),
        i = n(55818),
        o = n(27378),
        a = n(57050),
        s = n(54001),
        l = n(44060),
        c = n(99094),
        u = n(89894),
        d = n(40456),
        m = n(32096),
        p = n(1509);
      function h(e) {
        return Boolean(e)
          ? function (t) {
              return "".concat(e, "/").concat(t);
            }
          : a.yR;
      }
      var g = function (e) {
          return o.createElement(p.Z, (0, r._)({}, w(e), (0, s.ak)({ value: e.value })));
        },
        f = function (e) {
          return o.createElement(g, (0, i._)((0, r._)({}, e), { nodeType: "input" }));
        },
        y = function (e) {
          return o.createElement(p.Z, (0, i._)((0, r._)({}, w(e)), { value: e.value, onChange: e.onChange }));
        },
        b = function (e) {
          return o.createElement(y, (0, i._)((0, r._)({}, e), { nodeType: "input" }));
        },
        v = function (e) {
          return o.createElement(y, (0, i._)((0, r._)({}, e, (0, s.Sh)(E.textArea, e.className)), { nodeType: "textarea" }));
        },
        w = function (e) {
          return (0, r._)(
            {
              "data-name":
                ((n = e.name), (i = o.useContext(c.f.Context).name), void 0 === n ? n : "string" == typeof n ? h(i)(n) : n.view(h(i))),
              "data-block-extension": e.blockExtension,
              mount:
                ((t = e.autofocus),
                !0 === t
                  ? function (e) {
                      return (
                        e &&
                        requestAnimationFrame(function () {
                          return e.focus();
                        })
                      );
                    }
                  : void 0),
              styleType: p.Z.Type.P1,
              nodeType: e.nodeType,
              placeholder: e.placeholder,
              onFocus: e.onFocus,
              onBlur: e.onBlur,
              onKeyPress: e.onKeyPress
            },
            (0, s.Sh)(E.inputField, e.className)
          );
          var t, n, i;
        },
        x = {
          width: u.ux.percent(100),
          outline: "none",
          border: "1px solid ".concat(d.xO),
          borderRadius: u.ux.rem(m.fx),
          background: l.Il.CoreNeutral0,
          $nest: { "&::placeholder": { color: d.FW, opacity: 1 }, "&:focus": { borderColor: l.Il.CoreBlue50 } }
        },
        E = u.ux.stylesheet({ inputField: [x], textArea: [{ resize: "none" }] });
    },
    61722: (e, t, n) => {
      n.d(t, { f: () => r });
      var r,
        i = n(82900),
        o = n(74923),
        a = n(18775),
        s = n(20096),
        l = n(44586),
        c = n(32952),
        u = n(19751),
        d = n(83840),
        m = n(8473),
        p = n(15789),
        h = n(2768),
        g = n(17343),
        f = n(50628),
        y = n(28043),
        b = n(66310),
        v = n(76974),
        w = n(24209),
        x = n(49708),
        E = n(77176),
        T = n(93508),
        C = n(85985),
        k = n(36303);
      !(function (e) {
        var t = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r;
            return (r = u).mergeStatic
              .apply(
                r,
                (0, s._)(
                  t.map(function (e) {
                    return e.pipe(d.i());
                  })
                )
              )
              .pipe(
                m.o(function (e) {
                  return e.hasValue;
                }),
                p.D()
              );
          },
          n = function (e, t, n) {
            return l.y
              .create(function (r) {
                var i,
                  o = self.requestAnimationFrame(function a(s) {
                    i || (i = s);
                    var l = s - i;
                    l < n ? (r.next(Math.round(e + (l / n) * (t - e))), (o = self.requestAnimationFrame(a))) : (r.next(t), r.complete());
                  });
                return function () {
                  return self.cancelAnimationFrame(o);
                };
              })
              .pipe(y.x());
          },
          r = (function () {
            function e() {
              (0, i._)(this, e);
            }
            return (
              (0, o._)(e, null, [
                {
                  key: "observable",
                  get: function () {
                    var e;
                    return null !== (e = this._obs) && void 0 !== e
                      ? e
                      : (this._obs = x.R(document, "visibilitychange").pipe(
                          E.U(function () {
                            return document.hidden;
                          }),
                          T.O(document.hidden),
                          C.h(Boolean),
                          g.h(void 0),
                          k.r(1)
                        ));
                  }
                }
              ]),
              e
            );
          })();
        (0, a._)(r, "_obs", void 0),
          (e.Hidden = r),
          (e.mergeUntilAnyCompletes = t),
          (e.createAnimationObservable = function (e, i, o) {
            return t(n(e, i, o).pipe(h.R(r.observable)), r.observable.pipe(g.h(i), f.P()));
          }),
          (e.fadeOutState = function (e) {
            var t = new c.xQ();
            return {
              state: e.pipe(
                b.w(function (e) {
                  return e ? v.of("inProgress") : w.T(v.of("fadeOut"), t.pipe(g.h("end")));
                })
              ),
              complete: function () {
                return t.next(!0);
              }
            };
          }),
          (e.rafSequence = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return l.y.create(function (n) {
              var r;
              function i() {
                n.next(e.shift()), e.length && (r = requestAnimationFrame(i));
              }
              return (
                t ? i() : (r = requestAnimationFrame(i)),
                function () {
                  return cancelAnimationFrame(r);
                }
              );
            });
          });
      })(r || (r = {}));
    },
    50474: (e, t, n) => {
      n.d(t, { m: () => y });
      var r = n(27378),
        i = n(88056);
      function o(e) {
        var t = e.href,
          n = e.children,
          i = e.className;
        return r.createElement("a", { target: "_blank", rel: "noopener noreferrer", className: i, href: t }, n);
      }
      var a,
        s = n(19429),
        l = n(18208);
      !(function (e) {
        (e.ClarityAICard = "clarityAiCard"),
          (e.CardMute = "cardMute"),
          (e.MuteQuotedAdvice = "muteQuotedAdvice"),
          (e.SeenPremiumPreviewUnderlines = "seenPremiumPreviewUnderlines"),
          (e.BulkAccept = "bulkAccept"),
          (e.PassiveVoiceCard = "passiveVoiceCard");
      })(a || (a = {}));
      var c = n(37539),
        u = n(91605);
      const d = ({ className: e }) =>
          r.createElement(
            "svg",
            { className: e, width: "24", height: "32", viewBox: "0 0 24 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            r.createElement("rect", { width: "32", height: "32", transform: "translate(-8)", fill: "white" }),
            r.createElement(
              "g",
              { clipPath: "url(#clip0_351_502)" },
              r.createElement("path", {
                d: "M13.7232 26.0005H1.19332C0.536995 26.0005 0 25.4645 0 24.8094V12.3027C0 11.6476 0.536995 11.1116 1.19332 11.1116H13.7232C14.3795 11.1116 14.9165 11.6476 14.9165 12.3027V24.8094C14.9165 25.4645 14.3795 26.0005 13.7232 26.0005Z",
                fill: "#40A7C7"
              }),
              r.createElement("circle", {
                cx: "2.29599",
                cy: "23.7965",
                r: "8.7413",
                fill: "#67B9D2",
                stroke: "#0E101A",
                strokeWidth: "0.5"
              }),
              r.createElement("circle", {
                cx: "2.29608",
                cy: "23.7963",
                r: "4.91522",
                fill: "#40A7C7",
                stroke: "#0E101A",
                strokeWidth: "0.5"
              })
            ),
            r.createElement("rect", {
              x: "0.25",
              y: "11.3613",
              width: "14.4165",
              height: "14.389",
              rx: "1.28043",
              stroke: "#0E101A",
              strokeWidth: "0.5"
            }),
            r.createElement("path", {
              d: "M17.8902 21.8741H5.36031C4.70399 21.8741 4.16699 21.3381 4.16699 20.6829V8.17622C4.16699 7.52111 4.70399 6.98511 5.36031 6.98511H17.8902C18.5465 6.98511 19.0835 7.52111 19.0835 8.17622V20.6829C19.0835 21.3381 18.5465 21.8741 17.8902 21.8741Z",
              fill: "#F0F2FC"
            }),
            r.createElement("path", {
              d: "M17.8902 21.8741H5.36031C4.70399 21.8741 4.16699 21.3381 4.16699 20.6829V8.17622C4.16699 7.52111 4.70399 6.98511 5.36031 6.98511H17.8902C18.5465 6.98511 19.0835 7.52111 19.0835 8.17622V20.6829C19.0835 21.3381 18.5465 21.8741 17.8902 21.8741Z",
              stroke: "#0E101A",
              strokeWidth: "0.5",
              strokeMiterlimit: "10",
              strokeLinecap: "round",
              strokeDasharray: "0.96 0.96"
            }),
            r.createElement("path", {
              d: "M16.6471 11.898H6.80224C6.63815 11.898 6.50391 11.764 6.50391 11.6003C6.50391 11.4365 6.63815 11.3025 6.80224 11.3025H16.6471C16.8112 11.3025 16.9455 11.4365 16.9455 11.6003C16.9455 11.764 16.8112 11.898 16.6471 11.898Z",
              fill: "#9FA6BF"
            }),
            r.createElement("path", {
              d: "M16.6471 14.7677H6.80224C6.63815 14.7677 6.50391 14.6337 6.50391 14.4699C6.50391 14.3061 6.63815 14.1721 6.80224 14.1721H16.6471C16.8112 14.1721 16.9455 14.3061 16.9455 14.4699C16.9455 14.6337 16.8112 14.7677 16.6471 14.7677Z",
              fill: "#9FA6BF"
            }),
            r.createElement("path", {
              d: "M11.4264 17.6373H6.80224C6.63815 17.6373 6.50391 17.5033 6.50391 17.3395C6.50391 17.1757 6.63815 17.0417 6.80224 17.0417H11.4264C11.5904 17.0417 11.7247 17.1757 11.7247 17.3395C11.7247 17.5033 11.5904 17.6373 11.4264 17.6373Z",
              fill: "#9FA6BF"
            }),
            r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: "clip0_351_502" },
                r.createElement("rect", { y: "11.1113", width: "14.9165", height: "14.889", rx: "1.53043", fill: "white" })
              )
            )
          ),
        m = ({ className: e }) =>
          r.createElement(
            "svg",
            { className: e, width: "25", height: "17", viewBox: "0 0 32 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            r.createElement("path", {
              d: "M15.4994 12C18.5265 12 20.9987 9.55275 20.9987 6.5C20.9987 3.44725 18.5518 1 15.4994 1C12.447 1 10 3.44725 10 6.5C10 9.55275 12.447 12 15.4994 12Z",
              fill: "#15C39A",
              stroke: "#0E101A",
              strokeWidth: "0.5",
              strokeMiterlimit: "10"
            }),
            r.createElement("path", {
              d: "M13 6.49976L15 8.49976L18.4108 4.55933",
              stroke: "white",
              strokeWidth: "0.5",
              strokeLinecap: "round"
            }),
            r.createElement("path", {
              d: "M6.5 12C9.53756 12 12 9.53757 12 6.5C12 3.46243 9.53756 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12Z",
              fill: "#F8E485",
              stroke: "#0E101A",
              strokeWidth: "0.5",
              strokeMiterlimit: "10"
            }),
            r.createElement("path", {
              d: "M4.99023 8.39847C5.41568 8.70495 5.9379 8.8855 6.50229 8.8855C7.06668 8.8855 7.58889 8.70495 8.01434 8.39847",
              stroke: "black",
              strokeWidth: "0.5"
            }),
            r.createElement("path", {
              d: "M4.11231 5.97981C4.37497 5.97981 4.58789 5.69746 4.58789 5.34916C4.58789 5.00086 4.37497 4.71851 4.11231 4.71851C3.84965 4.71851 3.63672 5.00086 3.63672 5.34916C3.63672 5.69746 3.84965 5.97981 4.11231 5.97981Z",
              fill: "#0E101A"
            }),
            r.createElement("path", {
              d: "M8.84278 5.97981C9.10544 5.97981 9.31836 5.69746 9.31836 5.34916C9.31836 5.00086 9.10544 4.71851 8.84278 4.71851C8.58012 4.71851 8.36719 5.00086 8.36719 5.34916C8.36719 5.69746 8.58012 5.97981 8.84278 5.97981Z",
              fill: "#0E101A"
            })
          ),
        p = ({ className: e }) =>
          r.createElement(
            "svg",
            { className: e, width: "25", height: "32", viewBox: "0 0 25 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            r.createElement("path", {
              d: "M14.1953 9.1817C14.0818 9.06814 13.9455 9 13.7865 9H9.24411H4.72444C4.5541 9 4.39511 9.07949 4.29291 9.21576L1.14731 13.1222C0.954254 13.3607 0.954254 13.7354 1.15866 13.9626L8.84665 22.8429C9.07377 23.1041 9.44852 23.1041 9.67564 22.8543L17.8292 13.9966C18.0563 13.7468 18.0563 13.3493 17.8292 13.1109L14.1953 9.1817Z",
              fill: "#F8E485",
              stroke: "black",
              strokeWidth: "0.5",
              strokeMiterlimit: "10"
            }),
            r.createElement("path", {
              d: "M7.58668 9L5.87193 13.3153C5.81515 13.4629 5.80379 13.6332 5.86057 13.7922L9.25601 23.036",
              fill: "#F8E485"
            }),
            r.createElement("path", {
              d: "M7.58668 9L5.87193 13.3153C5.81515 13.4629 5.80379 13.6332 5.86057 13.7922L9.25601 23.036",
              stroke: "black",
              strokeWidth: "0.5",
              strokeMiterlimit: "10"
            }),
            r.createElement("path", {
              d: "M10.9144 9L12.6292 13.3153C12.686 13.4629 12.6973 13.6332 12.6406 13.7922L9.24512 23.036",
              fill: "#F8E485"
            }),
            r.createElement("path", {
              d: "M10.9144 9L12.6292 13.3153C12.686 13.4629 12.6973 13.6332 12.6406 13.7922L9.24512 23.036",
              stroke: "black",
              strokeWidth: "0.5",
              strokeMiterlimit: "10"
            }),
            r.createElement("path", { d: "M17.9885 13.5427H1", stroke: "black", strokeWidth: "0.5", strokeMiterlimit: "10" })
          ),
        h = ({ className: e }) =>
          r.createElement(
            "svg",
            { className: e, width: "24", height: "24", viewBox: "0 0 32 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            r.createElement("path", {
              d: "M8.14946 10.1943C9.39647 11.4414 11.204 11.9358 13.626 11.6222C13.9557 9.34681 13.44 7.39486 12.1945 6.14933C10.948 4.90288 9.14158 4.40828 6.72121 4.72108C6.40841 7.14146 6.90301 8.94789 8.14946 10.1943Z",
              fill: "#99C2FF",
              stroke: "#2B2D38",
              strokeWidth: "0.5"
            }),
            r.createElement("path", {
              d: "M20.8508 10.1945C22.0978 8.94753 22.5923 7.14002 22.2787 4.71799C20.0033 4.38833 18.0514 4.90401 16.8058 6.14953C15.5594 7.39598 15.0648 9.20242 15.3776 11.6228C17.798 11.9356 19.6044 11.441 20.8508 10.1945Z",
              fill: "url(#paint0_linear_351_527)",
              stroke: "#2B2D38",
              strokeWidth: "0.5"
            }),
            r.createElement("path", {
              d: "M20.8505 14.8054C19.6035 13.5584 17.796 13.0639 15.374 13.3776C15.0443 15.6529 15.56 17.6049 16.8055 18.8504C18.052 20.0969 19.8584 20.5915 22.2788 20.2787C22.5916 17.8583 22.097 16.0519 20.8505 14.8054Z",
              fill: "#B8B4EF",
              stroke: "#2B2D38",
              strokeWidth: "0.5"
            }),
            r.createElement("path", {
              d: "M8.15014 14.8055C6.90313 16.0525 6.40864 17.86 6.72231 20.282C8.99767 20.6117 10.9496 20.096 12.1951 18.8505C13.4416 17.604 13.9362 15.7976 13.6234 13.3772C11.203 13.0644 9.39659 13.559 8.15014 14.8055Z",
              fill: "url(#paint1_linear_351_527)",
              stroke: "#2B2D38",
              strokeWidth: "0.5"
            }),
            r.createElement(
              "defs",
              null,
              r.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_351_527",
                  x1: "15.0103",
                  y1: "6.89005",
                  x2: "22.6603",
                  y2: "6.89004",
                  gradientUnits: "userSpaceOnUse"
                },
                r.createElement("stop", { stopColor: "#FFD0D8" }),
                r.createElement("stop", { offset: "0.0001", stopColor: "#F28C8C" })
              ),
              r.createElement(
                "linearGradient",
                { id: "paint1_linear_351_527", x1: "14.5006", y1: "18.11", x2: "6.85059", y2: "18.11", gradientUnits: "userSpaceOnUse" },
                r.createElement("stop", { stopColor: "#41D9B5" }),
                r.createElement("stop", { offset: "0.195885", stopColor: "#41D9B5" }),
                r.createElement("stop", { offset: "1", stopColor: "#0FDCAC" })
              )
            )
          ),
        g = s.VF((e) => ({
          hideAssistant: "Hide Assistant",
          textRemoved: `If you didn’t mean to delete that text, press ${e.commandKeyLabel("Z")} to undo.`,
          hotkeyLabelR: e.commandKeyLabel("R"),
          hotkeyLabelC: e.commandKeyLabel("C"),
          dunningNotification: {
            title: (e) => `Don’t lose your ${e ? "Grammarly Business" : "Premium"} features!`,
            description: (e) => `Please update your billing information to avoid losing access to Grammarly ${e ? "Business" : "Premium"}.`,
            cta: "Update payment information",
            secondaryCta: "Later"
          },
          survey: {
            oldUser: {
              title: "Share a feedback",
              content:
                "Hi! I'm Igor, a product designer at Grammarly.\nPlease, help me find out how the last update of\nthe interface affected your editing experience.",
              takeSurvey: "Take a survey",
              remindLater: "Remind me later"
            },
            newUser: {
              title: "Share your feedback",
              content:
                "Hi! I’m Igor, a product designer at Grammarly.\nPlease, let me know what you think of Grammarly and how we can improve.",
              takeSurvey: "Take a survey",
              remindLater: "Remind me later"
            },
            proofitPromo: {
              title: "Thorough Human Proofreading",
              content: "If you need extra confidence that your text is mistake-free, send it to our team of experienced proofreaders.",
              actions: { view: "Get Started", close: "Close" }
            },
            docx: {
              didYouKnow: "Did you know?",
              title: "You can use Grammarly in Microsoft Word!",
              content: "Get Grammarly’s suggestions while you write\nin Word or Outlook with our free add-in.",
              download: "Download Grammarly for MS Office",
              remindLater: "Remind me later"
            }
          },
          performance: {
            title: "Performance",
            scoreUnder100: (e) =>
              `Text score: ${e} out of 100. This score represents the quality of writing in this document. You can increase it by addressing Grammarly's suggestions.`,
            score100: "Great job! Your text scores 100 out of 100. This score represents the quality of writing in this document.",
            notEnoughTextToCalculateStats: "Write away! Grammarly needs at least 30 words to calculate document statistics.",
            wordCount: "Word count",
            characters: "Characters",
            words: "Words",
            sentence: "Sentence",
            sentences: "Sentences",
            readingTime: "Reading time",
            speakingTime: "Speaking time",
            readability: "Readability",
            readabilityScore: "Readability score",
            vocabulary: "Vocabulary",
            sectionTitleDescription: "Metrics compared to other Grammarly users",
            uniqueWords: "Measures vocabulary diversity by calculating\nthe number of unique words.",
            rareWords: "Measures depth of vocabulary by identifying words that are\nnot among the 5,000 most common English words.",
            readabilityDescription: "In the Flesch reading-ease test, higher scores\nindicate material that is easier to read.",
            uniqueWordsTitle: "Unique words",
            rareWordsTitle: "Rare words",
            wordLengthTitle: "Word length",
            sentenceLengthTitle: "Sentence length",
            notEnoughTextToGenerateReport: "We need at least 30 words to calculate document statistics and generate your report.",
            belowAverage: "Below average",
            average: "Average",
            aboveAverage: "Above average",
            report: {
              plagiarismDescription: (e, t) =>
                `${e}% of your text matches ${t} sources on the web\nor in archives of academic publications`,
              downloadPdfReport: "Download PDF report",
              preparingPdfReport: "Preparing PDF report...",
              readingEase: "reading ease",
              readingEaseDescription: "Rates the text by the number of years of\neducation needed to understand it",
              readingEaseMeasure: "grade level",
              uniqueWordsDescription:
                "Measures vocabulary diversity by calculating\nthe percentage of words used only once in your\ndocument",
              wordLengthDescription: "Measures average word length",
              wordLengthMeasure: "characters per word",
              sentenceLengthDescription: "Measures average sentence length",
              sentenceLengthMeasure: "words per sentence"
            },
            button: {
              score: "Overall score",
              score100: "Great job!",
              statuses: { calculating: "Calculating...", unavailable: "Text is too short", available: "See performance", paused: "Paused" }
            },
            onboarding: { title: "Document statistics", message: "See how your writing stacks up against other Grammarly users." }
          },
          sidebar: {
            content: {
              premiumIssues: {
                advancedAlerts: "Advanced issues",
                foundTitleSingular: { description1: "There is", description2: "advanced issue available only for Premium users." },
                foundTitlePlural: { description1: "There are", description2: "advanced issues available only for Premium users." }
              }
            },
            openLabel: "start assistant",
            fixErrorsLabel: "Correct with Assistant",
            checkingLabel: "Checking…",
            advancedAlerts: "Advanced suggestions",
            criticalIssue: (e) => l._6(e, "Critical issue", "Critical issues"),
            critical: (e) => l._6(e, "Critical", "Critical"),
            advanced: (e) => l._6(e, "Advanced", "Advanced"),
            criticalLabel: (e) => `${e} ${l._6(e, "Critical suggestion", "Critical suggestions")}`,
            advancedLabel: (e) => `${e} ${l._6(e, "Advanced suggestion", "Advanced suggestions")}`,
            advancedIssue: (e) => l._6(e, "Advanced issue", "Advanced\nissues"),
            premium: (e) => l._6(e, "Premium", "Premium"),
            free: (e) => l._6(e, "Suggestion", "Suggestions"),
            premiumLabel: (e) => `${e} ${l._6(e, "Premium suggestion", "Premium suggestions")}`,
            freeLabel: (e) => `${e} ${l._6(e, "Suggestion", "Suggestions")}`,
            premiumAlertsTitle: "Premium\nsuggestions",
            allAlerts: "All suggestions",
            backToAllAlerts: "Back to all suggestions ",
            seeAlerts: (e) => `${e} more ${l._6(e, "suggestion", "suggestions")}`,
            sendToProofreadersLabel: "Get Expert Writing Help",
            sendToProofreaders: r.createElement(r.Fragment, null, "Get Expert", r.createElement("br", null), "Writing Help")
          },
          successLens: {
            goPremium: "Go Premium",
            paidView: { title: "No critical issues" },
            emptyText: { title: "Nothing to check yet", firstLine: "Start writing or upload a document\nto see Grammarly’s feedback." },
            smallText: {
              title: "No issues found",
              firstLine: "Grammarly ran hundreds of checks\non your text and found no writing issues.",
              secondLine: "Check back in when you’re ready to write some more."
            },
            largeText: {
              title: "No issues found",
              firstLine: "Grammarly ran hundreds of checks\non your text and found no writing issues."
            },
            premiumOnboardingStartText: { title: "You've accepted your first Premium suggestion!" },
            premiumOnboardingCompleteText: { title: "You are a grammar star!", firstLine: "Thank you for purchasing Premium. Enjoy!" },
            mutedSuggestions: (e) => (1 === e ? `${e} suggestion has been turned off.` : `${e} suggestions have been turned off.`),
            fixedText: {
              titles: [
                "You made that look easy!",
                "That’s quite an improvement!",
                "Nothing can stop you now!",
                "You must have been practicing!",
                "Looking good!",
                "Give yourself a pat on the back!",
                "Great job!",
                "Everything’s clear and polished.",
                "To err is human; to edit, divine."
              ]
            },
            fixedTextDemoPremium: {
              title: "Great job!",
              firstLine: "You’ve got the hang of it now.",
              secondLine: "Time to write your own masterpiece!"
            },
            priorityFirstCheck: { title: "Great job!", firstLine: "No relevant suggestions." }
          },
          uploadDropZone: "Drag a text file here to upload",
          uploadDropZoneTypes: "Microsoft Word (.doc, .docx), OpenOffice (.odt), TXT and RTF are welcome",
          rtfCompatibilityModeNotificationTitle: "Your document’s formatting will be restored upon download.",
          notificationUploadFileText: "Upload a file in one of the following formats",
          denaliDocumentUploadNotification: {
            title: "The document was uploaded successfully",
            text: "Don’t worry! The previous document has been saved to",
            link: "My documents"
          },
          goals: {
            title: "Set goals",
            header: "Get tailored writing suggestions based on your goals and audience.",
            sections: {
              audience: {
                general: (e) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "General", e ? " (default)" : "", ":"),
                    " Easy for anyone to read with minimal effort."
                  ),
                knowledgeable: (e) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "Knowledgeable", e ? " (default)" : "", ":"),
                    " Requires focus to read and understand."
                  ),
                expert: (e) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "Expert", e ? " (default)" : "", ":"),
                    " May require rereading to understand."
                  )
              },
              formality: {
                formal: r.createElement(r.Fragment, null, r.createElement("b", null, "Formal:"), " Restricts slang and colloquialisms."),
                informal: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Informal:"),
                  " Allows slang and other more casual usages."
                ),
                neutral: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Neutral (default):"),
                  " Restricts slang but allows standard casual expressions."
                )
              },
              domain: {
                free: "Get customized suggestions for business writing, academic assignments, and more.",
                academic: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Academic:"),
                  " Strictly applies all rules and formal writing conventions."
                ),
                business: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Business:"),
                  " Applies almost all rules but allows some informal expressions."
                ),
                general: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "General (default):"),
                  " Applies most rules and conventions with medium strictness."
                ),
                mail: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Email: "),
                  " Applies almost all rules, plus email writing conventions."
                ),
                casual: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Casual:"),
                  " Applies most rules but allows stylistic flexibility."
                ),
                creative: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Creative:"),
                  " Allows some intentional bending of rules and conventions."
                )
              },
              tone: {
                experimental: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Experimental."),
                  " How do you want to sound? This helps us build new suggestions and won't affect your feedback today."
                ),
                options: {
                  neutral: "😐 Neutral",
                  confident: "🤝 Confident",
                  joyful: "🙂 Joyful",
                  optimistic: "✌️‌Optimistic",
                  friendly: "🤗 Friendly",
                  urgent: "⏰ Urgent",
                  analytical: "📊 Analytical",
                  respectful: "🙌 Respectful"
                }
              },
              type: {
                options: {
                  essay: r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "Experimental"),
                    ": An analytical or interpretive piece of writing, often to tell a story or argue a point."
                  ),
                  report: r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "Experimental"),
                    ": A written description intended to provide factual information (e.g. a lab report)."
                  ),
                  other: r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("b", null, "Other"),
                    ": Academic writing that is neither an essay or report."
                  )
                }
              },
              format: {
                formatTitle: (e) => ("mla" === e || "apa" === e ? e.toUpperCase() : e.charAt(0).toUpperCase() + e.slice(1)),
                options: {
                  apa: "Applies APA style to in-text and full citations.",
                  mla: "Applies MLA style to in-text and full citations.",
                  chicago: "Applies Chicago style to in-text and full citations.",
                  other: r.createElement(r.Fragment, null, r.createElement("b", null, "Other"), ": Any other citation format (eg: IEEE)")
                }
              },
              intent: {
                experimental: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("b", null, "Experimental."),
                  " What are you trying to do? This helps us build new suggestions and won't affect your feedback today."
                ),
                options: { inform: "Inform", describe: "Describe", convince: "Convince", tellStory: "Tell a Story", sell: "Sell" }
              }
            },
            footer: {
              showModalOnStart: r.createElement(
                r.Fragment,
                null,
                "Show ",
                r.createElement("b", null, "Set Goals"),
                " when I start a new document"
              ),
              reset: "Reset to defaults"
            },
            button: {
              title: "Goals",
              subtitle: (e, t, n) => (0 === e ? "Adjust goals" : `${Math.max(e, n)} of ${t} set`),
              subtitleAcademic: (e) => "Academic: " + e
            },
            onboarding: { title: "Set Goals", message: "Tell Grammarly about your writing goals to receive more precise suggestions." }
          },
          plagiarism: {
            webReferenceDescription: "Click to copy reference",
            publicationReferenceDescription: (e) => r.createElement(r.Fragment, null, "Click to copy reference (", e, ")"),
            lensDescription: (e, t, n, i) =>
              r.createElement(
                "span",
                null,
                r.createElement("em", null, e, "%"),
                " of your text matches",
                " ",
                r.createElement("em", null, t, " ", l._6(t, "fragment", "fragments")),
                " ",
                "from",
                " ",
                r.createElement("em", null, n, " ", l._6(n, "source", "sources")),
                " ",
                "on the web or in academic databases. Cite them in ",
                r.createElement(i, { type: "MLA" }),
                ",",
                " ",
                r.createElement(i, { type: "APA" }),
                ", or ",
                r.createElement(i, { type: "Chicago" }),
                " format, or in another style you prefer."
              ),
            percentileDescription: (e) => r.createElement(r.Fragment, null, e, " of your text matches this source:"),
            cardDescription: (e) =>
              r.createElement(
                "span",
                null,
                "Regardless of what subject you're writing for, make a reference using",
                " ",
                r.createElement(e, { type: "MLA" }),
                ", ",
                r.createElement(e, { type: "APA" }),
                ", or",
                " ",
                r.createElement(e, { type: "Chicago" }),
                " format, or another style you prefer."
              ),
            helpIconDescription: (e, t, n) =>
              `${e}% of your text ${l._6(c.g.prism.reverseGet(e), "matches", "match")}  ${t} ${l._6(
                t,
                "fragment",
                "fragments"
              )} from\n${n} ${l._6(n, "source", "sources")} on the web or in academic databases.`,
            loadingDescription:
              "Grammarly compares billions of web pages to your document and alerts you to passages that may need citations.",
            title: "Plagiarism",
            description: "Finds unoriginal text by checking against academic databases and over 16 billion web pages.",
            originalText: r.createElement(
              "span",
              null,
              "Looks like your text is 100% original. ",
              r.createElement("br", null),
              "We found no matching text in our databases or on the Internet."
            )
          },
          documentActions: {
            plagiarism: { tooltip: { available: "Plagiarism Check", emptyDocument: "Add text first to check for plagiarism" } },
            proofit: {
              tooltip: {
                available: "Save time with human expertise.",
                disabled: (e) =>
                  e === u.TV.DemoDoc
                    ? "Expert writing help is unavailable for Grammarly sample documents"
                    : "Add text first to get expert writing help"
              }
            }
          },
          documentPerformanceRankText: (e) =>
            r.createElement(
              "span",
              null,
              "Great job! Your text is expected to ",
              r.createElement("br", null),
              "perform ",
              r.createElement("b", null, "better than ", e, "%"),
              " of comparable ",
              r.createElement("br", null),
              "texts written by other Grammarly users."
            ),
          proofitTitle: "Get Expert Writing Help",
          proofitDescription: "Our writing experts are ready to check your document right now.",
          proofitOrderModal: {
            promo: {
              stepsNavigation: { howItWorks: "How it works", compareOptions: "Compare options", provideDetails: "Provide details" },
              step1: {
                title: "Save Time\nwith Human Expertise",
                description: "No time to polish your text?\nSend it to our team of writing experts."
              },
              step2: {
                title: "How it works",
                li1: r.createElement(
                  r.Fragment,
                  null,
                  "Select your editing option. If you choose",
                  r.createElement("br", null),
                  r.createElement("strong", null, "Correctness"),
                  ", our writing experts will fix",
                  r.createElement("br", null),
                  "writing mechanics (like spelling, grammar, and",
                  r.createElement("br", null),
                  "punctuation). For ",
                  r.createElement("strong", null, "Correctness and Clarity"),
                  ",",
                  r.createElement("br", null),
                  "they’ll also improve the overall focus, flow,",
                  r.createElement("br", null),
                  "and readability of each paragraph."
                ),
                li2: "Select how fast you want your document\nreturned and place your order.",
                li3: "Receive the edited version by email. We’ll share\na link to a .docx file marked with changes.",
                back: "got it",
                moreInformation: () =>
                  r.createElement(
                    r.Fragment,
                    null,
                    "For more information, refer to our",
                    " ",
                    r.createElement(
                      o,
                      { href: "https://support.grammarly.com/hc/en-us/articles/360029743831-Introducing-our-expert-writing-service" },
                      "support article"
                    )
                  )
              },
              step3: {
                header: {
                  correctness: { h1: "Correctness", h2: "Fix errors only" },
                  correctnessClarity: { h1: "Correctness\n& Clarity", h2: "Fix errors and\nimprove clarity" },
                  features: "features",
                  editingOptions: {
                    checkedLabel: "Available",
                    unavailable: "Unavailable",
                    featureIsAvailable: (e, t) => `${e} is available in ${t} option.`
                  }
                },
                spelling: { h1: "Spelling" },
                grammar: { h1: "Grammar" },
                punctuation: { h1: "Punctuation" },
                conciseness: { h1: "Conciseness", h2: "Streamline wordy sentences and paragraphs." },
                preciseness: { h1: "Preciseness", h2: "Clarify vague sentences and paragraphs." },
                focus: { h1: "Focus", h2: "Relate sentences to a paragraph’s main idea." },
                flow: { h1: "Flow", h2: "Ensure sentences are in logical order." }
              },
              step4: {
                title: "Provide optional details",
                subtitle: "Get better feedback by providing extra information.",
                primaryLanguage: "Your primary language",
                dialect: "Preferred English dialect",
                quotationType: "Quotation mark style",
                quotationTypeTooltip:
                  "American English and Canadian English generally use double quotation marks. British English and Australian English tend to use single quotation marks.",
                quotationTypeSingle: "‘Single’",
                quotationTypeDouble: "“Double”",
                spaceType: "Spaces after period",
                spaceTypeTooltip:
                  "Most writers and style guides consider one space after a period standard. However, some people use two spaces because of habit or special requirements. You can select a spacing style for this document based on your preference and needs.",
                spaceTypeSingle: "One space",
                spaceTypeDouble: "Two spaces",
                noteToEditor: "Leave a note for your editor",
                notePlaceholder:
                  "Is there something you would like us to keep in mind or pay special attention to? We’ll do our best to help.",
                choose: "Choose from the list"
              },
              step5: {
                title: "Free Reviews Terms and Conditions",
                credits: "Expert Writing Service Free Reviews (“Reviews”) are subject to Grammarly, Inc.’s (“Grammarly’s”) ",
                termsOfService: "Terms of Service",
                andFollowingTerms: " and the following terms:",
                term1:
                  "Grammarly may terminate or modify our Reviews programs at any time with or without notice to you. You should not rely upon the continued availability of any Reviews programs.",
                term2: "Reviews will have no currency or exchange value, and are not transferable or refundable.",
                term3:
                  "If you delete your account or downgrade to a free account, any Reviews remaining on your account will be forfeited and may not be reinstated.",
                term4: "Reviews may only be used for the intended purpose and in a lawful manner."
              }
            },
            order: {
              title: "How fast do you need your document returned?",
              tierBase: "Correctness only",
              tierClarity: "Correctness and Clarity",
              tierTitle: "Which editing option would you like?",
              compareOptions: "Compare options",
              warningConfirm: () =>
                r.createElement(
                  "span",
                  null,
                  "Your card will be charged after you click ",
                  r.createElement("strong", null, "Place order"),
                  "."
                ),
              iAgree: "I agree to the ",
              terms: "Free Reviews terms and conditions",
              placeOrder: "Place order",
              orderForFree: "Order for free",
              chooseOptions: "Choose from turnaround options to continue",
              confirm: "Confirm you agree to the terms to continue",
              recommended: "recommended",
              perWord: "per word",
              planIsSelected: (e, t, n) => `${e} plan for ${t} is selected. Price per word: ${n}.`,
              selectPlan: (e, t, n) => `Select ${e} plan for ${t}; ${n} per word.`,
              freeReviewsLeft: (e) => `${e} free review${(null != e ? e : 0) % 10 == 1 ? "" : "s"} left this month`,
              paymentWarnings: {
                payPal: (e) =>
                  r.createElement(
                    "span",
                    null,
                    "By placing an order you authorize a charge of",
                    " ",
                    r.createElement("b", { "data-name": "payment-warning-price" }, "$", l.T4(e)),
                    r.createElement("br", null),
                    "to your PayPal account"
                  ),
                creditCard: (e) =>
                  r.createElement(
                    "span",
                    null,
                    "By placing an order you agree that your card ",
                    r.createElement("br", null),
                    "will be charged",
                    " ",
                    r.createElement("b", { "data-name": "payment-warning-price" }, "$", l.T4(e))
                  ),
                updateBilling: "Update billing information"
              }
            },
            card: {
              toProtect: "To protect your security, we ask you to authorize\nthis charge by re-entering payment details\nfor Grammarly.",
              paymentSuccess: { title: "Success", message: "Your billing information has been updated successfully" },
              paymentError: {
                title: "Error",
                message: (e) =>
                  r.createElement(
                    "span",
                    null,
                    "There is an issue with the payment method you provided. Please review your payment  information and try again or select a different payment method",
                    r.createElement("br", null),
                    "If you need further assistance, please contact our ",
                    r.createElement("a", { href: e, target: "_blank", style: { color: "#fff" } }, "Support Team")
                  )
              }
            }
          },
          proofitSuccessModal: {
            title: "Your document will be ready by…",
            description: (e) =>
              r.createElement(
                "span",
                null,
                "We will email you at ",
                r.createElement("span", { "data-name": "useremail" }, e),
                " with a link to the corrected version in a DOCX file with all changes marked."
              )
          },
          proofitPayment: { creditCard: "Your card has been declined.", payPal: "Your PayPal account has been declined" },
          resolveLabel: "Mark as resolved and hide suggestion",
          resolve: r.createElement("span", null, "Mark as resolved and", r.createElement("br", null), "hide suggestion"),
          dismiss: "Dismiss",
          back: "Back",
          new: "New",
          done: "Done",
          on: "On",
          off: "Off",
          card: {
            less: "Less",
            more: "Learn more",
            cardActions: "Card actions for",
            description: "Suggestion description for",
            addToDict: "Add to dictionary",
            disabledForAnonymous: "Sign in to use this feature",
            like: "I'll address this",
            dislike: "Not helpful",
            wrong: "Incorrect suggestion",
            mute: "Turn off suggestions like this",
            moreActions: "More actions",
            offensive: "Offensive content",
            updatingSuggestion: "Updating suggestion…",
            or: "or",
            onboarding: {
              [a.ClarityAICard]: {
                title: "Grammarly just got smarter",
                content: "Grammarly now helps rewrite sentences to make your point clearer."
              },
              [a.PassiveVoiceCard]: {
                title: "Improved passive voice suggestions",
                content: "Grammarly now helps you rewrite passive voice sentences in the active voice."
              }
            },
            progressBarLabels: {
              readability: { min: "Hard to read", max: "Easy to read" },
              sentenceVariety: { min: "Monotonous", max: "Lively" },
              conciseness: { min: "Cluttered", max: "Concise" }
            },
            matchesNavigation: {
              next: "Next match",
              prev: "Previous match",
              currentMatchPosition: (e, t) => `${e} of ${t}`,
              numberOfMatches: (e) => `${e} ${l._6(e, "match", "matches")}`
            },
            todoAction: (e) => `Click to ${e}`,
            checking: "Checking...",
            actionDescription: { setGoals: "Set goals to get tailored writing suggestions", openPreferences: "Open settings" },
            fluency: {
              tooltip: "This suggestion is based on your language settings.",
              cardTitle: "Fluency improvements",
              cardFooter: (e = "multilingual") => `Common issue for ${e} speakers`
            },
            takeaway: {
              defaultTitle: "Is this your text's main point?",
              feedback: "Is this your text’s main point?",
              yes: "Yes",
              no: "No"
            },
            shortenIt: {
              acceptButtonCheckingLabel: "Rewriting",
              editPopupDismissButtonLabel: "Change back",
              editPopupKeepButtonLabel: "Looks good",
              collapsedButtonTooltip: "Review this change",
              notFoundLabel: "No shorter version found.",
              loadingLabel: "Looking for shorter versions..."
            },
            suggestedSnippet: {
              subheader: "New snippet",
              namePlaceholder: "Name",
              textPlaceholder: "Type your snippet",
              successStateTitle: "Snippet saved!",
              libraryLinkCaption: "Open library",
              explanation: (e) => r.createElement(r.Fragment, null, "To use this snippet later, type ", e, " and search by name"),
              details: (e) =>
                r.createElement(
                  r.Fragment,
                  null,
                  "To use a snippet while typing in the browser extension, press ",
                  e,
                  " to open your snippets library. Use the up and down arrow keys to browse your snippets or continue typing to search for a snippet by name or keyword in the content. You can edit and delete snippets from the Snippets page of your account. To use a different keyboard shortcut to insert your snippets, go to the Customize page of your account and click Features."
                ),
              validationMessages: {
                nameEmpty: "Name cannot be empty.",
                nameTooLong: "Snippet names cannot exceed 30 characters.",
                textEmpty: "Snippet cannot be empty.",
                textTooLong: "Snippets cannot exceed 1,000 characters."
              }
            },
            showChangesToggle: "Highlight changes",
            muteCitedText: (e) =>
              r.createElement(
                r.Fragment,
                null,
                "Don't want Grammarly to check quotes?",
                r.createElement("br", null),
                r.createElement("span", null, "Change this in ", e, ".")
              ),
            feedbackForm: {
              dismissReason: "Why did you dismiss this suggestion?",
              submit: "Submit",
              skip: "Skip",
              error: "Select one of the reasons first"
            },
            gbPrompt: { addRule: "Add rule", dismiss: "Dismiss", saveRule: "Save", cancelSavingRule: "Cancel" },
            gapCard: { placeholder: "Who or what…" },
            mutedAlertCard: {
              description: (e) =>
                r.createElement(
                  r.Fragment,
                  null,
                  "You’ve turned off suggestions related to ",
                  r.createElement("b", null, e),
                  ". They won’t appear in any Grammarly apps and extensions until you turn them back on."
                ),
              successButtonLabel: "Got it",
              undoButtonLabel: "Turn back on",
              settingsLabel: "Manage optional suggestions"
            }
          },
          placeholderRTF: {
            typeOrPasteText: `Type or paste (${e.commandKeyLabel("V")}) your text here or `,
            upload: "upload",
            ending: " a document."
          },
          placeholder: {
            typeOrPasteText: `Type or paste (${e.commandKeyLabel("V")}) your text here. `,
            upload: "Upload",
            ending: " a document to save original formatting."
          },
          placehoderWithoutUpload: { typeOrPasteText: `Type or paste (${e.commandKeyLabel("V")}) your text here.`, upload: "", ending: "" },
          toolbar: {
            label: "Document tools",
            loading: "Loading...",
            processing: "Processing your document...",
            backToMyGrammarly: "Back to My Grammarly",
            signOut: "Sign out",
            title: {
              rename: "Rename your document",
              renameLabel: (e) => `Document title: ${e}`,
              untitledDocumentLabel: "Give your document a name so you can find it later.",
              untitledDocument: "Untitled document",
              onboarding: { title: "Add a title", message: "Give your document a name so you can find it later." },
              detailedOnboarding: {
                title: "Name your document",
                message: "Don’t forget to give your document a name so you can find it later."
              }
            },
            formatting: {
              head: "Text formatting",
              bold: "Bold",
              italic: "Italic",
              underline: "Underline",
              header1: "Heading 1",
              header2: "Heading 2",
              link: "Link",
              orderedList: "Numbered list",
              bulletList: "Bullet list",
              clear: "Clear formatting",
              tooltips: {
                head: "Text format",
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                header1: "Heading 1",
                header2: "Heading 2",
                link: "Link",
                orderedList: "Numbered list",
                bulletList: "Bullet list",
                clear: "Clear formatting"
              },
              links: { apply: "Apply", change: "Change", remove: "Remove", placeholder: "Enter link URL" }
            }
          },
          footer: {
            word: "word",
            words: "words",
            character: "character",
            characters: "characters",
            readingTime: "reading time",
            speakingTime: "speaking time",
            readabilityScore: "readability score",
            disabledReadabilityScore: "Readability score — not enough text",
            rtfCompatibilityInfo: {
              message: { plainText: "⚠️ Formatting tools are ", textWithTooltip: "not available" },
              tooltip:
                "Your document’s formatting will be restored upon download. To preserve your document’s original formatting, Grammarly’s formatting tools are temporarily not available.",
              officeAddinPromo: { part1: "Try ", part2: "Grammarly for MS Office." }
            }
          },
          emogenie: {
            popup: {
              title: "Here’s how your text sounds",
              subtitle: "Which tones did we get right?",
              actions: { like: "Tone is detected correctly", dislike: "Tone is detected incorrectly" },
              intensities: {
                slight: "Slight intensity",
                moderate: "Moderate intensity",
                strong: "Strong intensity",
                veryStrong: "Very strong intensity"
              },
              textIsTooShortMessage: "Write away! Grammarly needs at least 30 words to detect your tone."
            }
          },
          vox: { styleGuide: "style guide" },
          mutedAlerts: {
            dialogue: {
              openBtnTooltip: "Manage deactivated suggestions",
              header: "Deactivated Suggestions",
              subHeader: "You’ve chosen to turn off the following types of suggestions:",
              on: "Turn on",
              off: "Turn back off",
              suggestions: (e) => `${e} ${l._6(e, "suggestion", "suggestions")} in this document`,
              footerSuggestions: (e) => `${e} ${l._6(e, "suggestion", "suggestions")}  will be turned back on`
            },
            onboarding: {
              cardMute: {
                description: "You can now deactivate certain types of suggestions (including Oxford commas and passive voice.)",
                buttonText: "Got it"
              },
              dialogue: { description: "Click this icon to manage deactivated suggestions." }
            }
          },
          preferences: {
            autoJumpToNextAlert: "Auto-jump to the next suggestion",
            autoScrollToNextAlert: "Auto-scroll to the next suggestion",
            autoJumpToNextAlertDescription:
              "When a suggestion is applied or rejected, automatically scroll the text to the next suggestion.",
            increaseFontSize: "Increase text font size",
            suggestionsVisualMode: {
              title: "Colorblind mode",
              description: "Use icons to identify different suggestion types (Clarity, Engagement, Conciseness, Delivery)",
              descritionSDUI: "Use different underline styles to indicate suggestion types (Correctness, Clarity, Engagement, and Delivery)"
            },
            muteQuotedAlerts: "Don’t check text inside quotes",
            suggestionManagementDescription:
              "You can deactivate certain types of suggestions (including Oxford commas and passive voice) or activate them back.",
            suggestionManagementLink: "Suggestions management"
          },
          actions: { free: "Free", select: "Select", close: "Close", gotIt: "Got it" },
          statuses: { disabled: "Disabled", selected: "Selected", unavailable: "Unavailable" },
          subscription: {
            paypal: {
              description: "You can subscribe to Grammarly with PayPal. Click on the button below to sign in to your Paypal account.",
              descriptionWhenConnected:
                "You're already subscribed to Grammarly with PayPal. Click the button below to change your Paypal information."
            },
            apple:
              "Since you purchased your Grammarly Premium subscription through the App Store, please open the Grammarly app on your iOS device to manage your subscription.\nWe're working on a way to bring this functionality to you in our desktop products, but it's not quite ready yet."
          },
          desktopUpdate: {
            softTitle: "New version is available",
            hardTitle: "Please update to the latest version",
            soft: "The new version of the Grammarly Editor contains bug fixes and provides a better experience.",
            hard: "Your current version of the Grammarly Editor is outdated and will not work properly.",
            reload: "Update",
            download: "Download the latest version"
          },
          undo: "Undo",
          switchToDenali: "You switched to the new Grammarly Editor for this document.",
          feedbackSend: "Your feedback has been sent. Thank you!",
          statisticsError: "Error on requesting document statistics. Please try again later.",
          referenceCopied: "Reference copied to clipboard",
          documentCopied: "Document copied to clipboard",
          downloadDocumentNotFoundError: "Requested document was not found.",
          isTemporaryDownloadError: "Document wasn't downloaded.\nPlease try again.",
          freemiumNotifications: {
            engagement:
              "Grammarly Premium suggests ways to make your writing more specific, vivid, and interesting to keep your readers engaged.",
            delivery:
              "Grammarly’s AI adjusts the level of formality, confidence, friendliness, and more in your writing so you can make the best impression.",
            plagiarism: "Grammarly compares billions of web pages to your document and alerts you to passages that may need citations."
          },
          whatsNew: { title: "What's New?" },
          fileSizeExceededNotification: {
            title: "Maximum document size exceeded",
            body: "Currently, Grammarly can support documents up to 4 MB and 100,000 characters (about 60 pages).\n    Try uploading your file in multiple parts or copying and pasting your text into the editor.",
            link: "Alternatively, you can install Grammarly for Microsoft Office"
          },
          SignOutModal: {
            business: {
              step1: {
                title: "Sign out of Grammarly Business?",
                information: "This will sign you out of Grammarly Business on all websites.",
                noAccessText: "You won't have access to:",
                features: [
                  {
                    title: "Premium suggestions",
                    description: "Suggestions to improve clarity, engagement and delivery",
                    icon: r.createElement(p, null)
                  },
                  { title: "Snippets", description: "Reusable text Snippets that save time", icon: r.createElement(d, null) },
                  { title: "Brand Tones", description: "Feedback about tones to use and avoid", icon: r.createElement(m, null) },
                  { title: "Style Guide", description: "Suggestions specific to your teams brand voice", icon: r.createElement(h, null) }
                ]
              },
              step2: {
                title: "Before you sign out, could you tell us why?",
                information: "We're always trying to improve and we value your feedback",
                options: [
                  { id: 1, text: "Grammarly is interrupting my workflow." },
                  { id: 2, text: "It's slowing down my computer." },
                  { id: 3, text: "I'm not happy with the suggestions." },
                  { id: 4, text: "I have security or privacy concerns." },
                  { id: 5, text: "I am on a shared computer." },
                  { id: 6, text: "I will be back soon." }
                ]
              }
            },
            consumerPremium: {
              step1: {
                title: "Sign out of Grammarly Premium?",
                information: "This will sign you out of Grammarly Premium on all websites.",
                noAccessText: "You won't have access to:",
                features: [
                  {
                    title: "Premium suggestions",
                    description: "Suggestions to improve clarity, engagement and delivery",
                    icon: r.createElement(p, null)
                  },
                  { title: "Personal dictionary", description: "Add words to your personal dictionary", icon: r.createElement(d, null) },
                  { title: "Google Docs", description: "Review and accept suggestions on Google Docs", icon: r.createElement(m, null) },
                  { title: "Weekly stats", description: "View your weekly writing insights", icon: r.createElement(h, null) }
                ]
              },
              step2: {
                title: "Before you sign out, could you tell us why?",
                information: "We're always trying to improve, and we value your feedback.",
                options: [
                  { id: 1, text: "Grammarly is interrupting my workflow." },
                  { id: 2, text: "It’s slowing down my computer." },
                  { id: 3, text: "I’m not happy with the suggestions." },
                  { id: 4, text: "I have security or privacy concerns." },
                  { id: 5, text: "I am on a shared computer." },
                  { id: 6, text: "Other" }
                ]
              }
            },
            consumer: {
              step1: {
                title: "Sign out of Grammarly?",
                information: "This will sign you out of Grammarly on all websites.",
                noAccessText: "You won't have access to:",
                features: [
                  { title: "Set your dialect", description: "Set your English dialect", icon: r.createElement(p, null) },
                  { title: "Personal dictionary", description: "Add words to your personal dictionary", icon: r.createElement(d, null) },
                  { title: "Google Docs", description: "Review and accept suggestions on Google Docs", icon: r.createElement(m, null) },
                  { title: "Weekly stats", description: "View your weekly writing insights", icon: r.createElement(h, null) }
                ]
              },
              step2: {
                title: "Before you sign out, could you tell us why?",
                information: "We're always trying to improve, and we value your feedback.",
                options: [
                  { id: 1, text: "Grammarly is interrupting my workflow." },
                  { id: 2, text: "It’s slowing down my computer." },
                  { id: 3, text: "I’m not happy with the suggestions." },
                  { id: 4, text: "I have security or privacy concerns." },
                  { id: 5, text: "I am on a shared computer." },
                  { id: 6, text: "Other" }
                ]
              }
            }
          },
          documentSettings: {
            label: "Document settings",
            toolbarLabel: "Document settings toolbar",
            close: "Close",
            myGrammarly: "My Grammarly",
            documentHeader: "DOCUMENT",
            newDocument: "New document",
            uploadFile: "Upload file",
            download: "Download",
            downloadLabel: "as .docx",
            print: "Print",
            template: "Insert Template",
            editHeader: "EDIT",
            undo: "Undo",
            redo: "Redo",
            cut: "Cut",
            copy: "Copy",
            paste: "Paste",
            selectAll: "Select all",
            editorSettings: "Editor settings",
            accountHeader: "ACCOUNT",
            eduLabel: "EDU",
            upgradeToPremium: "Upgrade to premium",
            language: "Language preference",
            subscription: "Subscription",
            logout: "Sign out",
            support: "Support",
            whatsNew: "What's new",
            feedback: "Send product feedback",
            reportABug: "Report a bug",
            privacyPolicy: "Privacy policy",
            termsOfService: "Terms of service",
            tooltips: {
              newDocument: "Create a new document",
              uploadFile: "Upload a file",
              language: "Personal dictionary and dialect",
              subscription: "Manage your subscription",
              logout: "This will sign you out of Grammarly on all websites"
            },
            onboarding: { title: "Shortcuts and settings", message: "Click to adjust your settings" },
            detailedOnboarding: {
              title: "Adjust settings",
              message: "You can manage suggestions, such as your preference for the Oxford comma."
            },
            supportTitle: "Support and feedback"
          },
          hotkeyUnsupported: "This action is unavailable using the menu, but you can still use ",
          goPremium: "Go Premium",
          editorSettingsModalHeader: "Editor settings",
          documentUploaded: { message: "Document successfully uploaded. ", link: "Open document for editing" },
          documentUploadGeneralError: "Document wasn't uploaded. Please try again.",
          documentIsEmpty: "The submitted file is empty.",
          noFileToUpload: "No files to upload!",
          oneDocumentIsAllowed: "Only one document upload at a time is allowed",
          tooltipUploadElementInput: "Click here to upload document",
          goBackToAllAlerts: "Go back to All Suggestions",
          beta: "Beta",
          premiumAlertLabel: {
            tooltip: {
              includedWithPaid: r.createElement(
                r.Fragment,
                null,
                r.createElement("div", null, "This suggestion is included"),
                r.createElement("div", null, "with your paid subscription.")
              )
            },
            new: "new"
          },
          premiumFreeTrial: (e) =>
            r.createElement(
              r.Fragment,
              null,
              "This advanced suggestion is included in your",
              " ",
              r.createElement("span", { style: { whiteSpace: "nowrap" } }, "1-week"),
              " Premium Trial.",
              " ",
              r.createElement("a", { onClick: e }, "Learn More"),
              "."
            ),
          freePremiumAlertFooter: { beforeIcon: "Your free", afterIcon: "Premium suggestion" },
          freeTrialAlertFooter: "This is a Premium suggestion. Enjoy your trial!",
          premiumFooter: { premium: "This is a Premium suggestion", trial: "Part of your 7-day trial" },
          premiumOnboardingFooter: "Premium suggestion",
          anonymousUserGenericSignInPrompt: (e) =>
            r.createElement(r.Fragment, null, r.createElement("a", { onClick: e }, "Sign in"), " to get key Grammarly features"),
          anonymousUserAddToDictionarySignInPrompt: (e) =>
            r.createElement(r.Fragment, null, r.createElement("a", { onClick: e }, "Sign in"), " to start your personalized dictionary"),
          inlineUpgradeHook: {
            suggestionIsPartOfPremium: "This suggestion is part of Grammarly Premium.",
            upgradeToPremium: "UPGRADE TO PREMIUM"
          },
          inlineCard: { addToDictionary: "Add to dictionary", dismiss: "Dismiss", seeMore: "See more" },
          changePlan: {
            title: (e) => r.createElement(r.Fragment, null, "Switch and save over ", e),
            confirmationDescription: (e, t, n, i, o) =>
              r.createElement(
                r.Fragment,
                null,
                "Your current plan ",
                e,
                " Plan will update to Annual on",
                " ",
                t.toLocaleDateString(),
                ", at which time you will be charged one payment of",
                " ",
                n,
                ". Your subscription will automatically renew every ",
                o,
                " months. You will be charged ",
                i,
                " on each renewal."
              ),
            cancelButton: "cancel",
            confirmationButton: (e) => `Switch to ${e} Plan`,
            promoBadge: (e) => `${e} PROMO`,
            savedBadge: (e) => `${e} SAVED`,
            perYear: "year",
            perMonth: "mo",
            successfulNotificationCopy: (e) => `You were switched to ${e} Plan`,
            hook: {
              title: "Your writing looks great with Grammarly Premium! Keep up the great work!",
              button: { switchTo: "Switch to Annual Plan ", price: (e) => r.createElement(r.Fragment, null, "Save ", e), cancel: "Later" }
            }
          },
          review: "Review",
          priorityLens: {
            prioritySuggestion: "Top suggestions",
            allSuggestion: "All suggestions",
            disabledAllSuggestion: "No additional suggestions",
            description: "Grammarly prioritizes suggestions based on the context of your writing.",
            descriptionLink: "goals"
          },
          feedModeSelector: {
            priority: "Top suggestions",
            priorityDescription: r.createElement(
              r.Fragment,
              null,
              "Prioritize suggestions based on the context ",
              r.createElement("br", null),
              " of your writing and your editing history."
            ),
            all: "All"
          },
          waysToUseGrammarly: (e, t, n, i, o, a) =>
            r.createElement(
              "ul",
              null,
              r.createElement(
                "li",
                null,
                "In your browser (",
                r.createElement("a", { href: e, target: "_blank" }, "Chrome"),
                ",",
                " ",
                r.createElement("a", { href: t, target: "_blank" }, "Edge"),
                ",",
                " ",
                r.createElement("a", { href: n, target: "_blank" }, "Firefox"),
                ",",
                " ",
                r.createElement("a", { href: i, target: "_blank" }, "Safari"),
                ")"
              ),
              r.createElement("li", null, r.createElement("a", { href: o, target: "_blank" }, "On your phone"), " ", "(iOS and Android)"),
              r.createElement("li", null, r.createElement("a", { href: a, target: "_blank" }, "On your desktop")),
              r.createElement("li", null, "In the Grammarly Editor")
            ),
          premiumOnboardingSurvey: {
            firstQuestion: {
              question: "How has your experience with Grammarly been?",
              answers: {
                verySatisfied: "Very satisfying",
                somewhatSatisfied: "Somewhat satisfying",
                neutral: "Neither satisfying nor dissatisfying",
                somewhatDissatisfied: "Somewhat dissatisfying",
                veryDissatisfied: "Very dissatisfying"
              }
            },
            secondSatisfactionQuestion: {
              question: "Great! Is there anything in particular that you’ve enjoyed?",
              answers: {
                plagiarismChecker: "Plagiarism checker",
                claritySuggestions: "Clarity suggestions",
                engagementSuggestions: "Engagement suggestions",
                toneSuggestions: "Delivery suggestions",
                usingMultipleDevices: "Using Grammarly Premium across devices"
              },
              learnMoreLink: "Learn more"
            },
            secondDissatisfactionQuestion: {
              question: "We’re sorry to hear that. What did you have trouble with?",
              answers: {
                lowQualitySuggestions: "Low-quality suggestions",
                poorPlagiarismSuggestions: "Can’t see plagiarism suggestions",
                noSupportForDesirableApp: "It doesn’t integrate with an app I use",
                aggressivePremiumPromotion: "It keeps asking me to upgrade",
                noPremiumSuggestions: "I can’t access Premium suggestions",
                premiumAndFreeAreIdentical: "The Premium and Free plans feel identical"
              }
            },
            completion: {
              enjoyment: { header: "Thank you so much for your feedback.", sub: "We hope you continue enjoying Grammarly!" },
              badExperience: {
                lowQuality:
                  "Thanks for letting us know. We are constantly working to improve our suggestions. If you click the flag icon on suggestions that are unhelpful, it helps us understand how we can adjust our algorithms to be more accurate.",
                noPlagiarism: r.createElement(
                  r.Fragment,
                  null,
                  "The plagiarism checker is turned off by default. To check your document for plagiarism, open a document in the Grammarly Editor and then click the Plagiarism button in the",
                  " ",
                  r.createElement("b", null, "lower right corner"),
                  "."
                ),
                noSupportForDesirableApp: (t, n, i, o, a, s) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    "We’re working hard to be wherever you write, but there are some applications that we don’t yet support. Still, we may have what you’re looking for. Here are a few different ways to access Grammarly:",
                    g(e).waysToUseGrammarly(t, n, i, o, a, s)
                  ),
                possibleMultipleAccounts:
                  "We recommend double-checking to make sure you’re logged into your Premium account. Try visiting app.grammarly.com and look for the Premium label in the upper left corner. If you don’t see it, you may have unintentionally created a second free account."
              }
            }
          },
          gbSatisfactionSurvey: {
            firstQuestion: {
              question: "How has your experience with Grammarly been?",
              answers: {
                verySatisfied: "Very satisfying",
                somewhatSatisfied: "Somewhat satisfying",
                neutral: "Neither satisfying nor dissatisfying",
                somewhatDissatisfied: "Somewhat dissatisfying",
                veryDissatisfied: "Very dissatisfying"
              }
            },
            secondSatisfactionQuestion: {
              question: "Great! Is there anything in particular that you’ve enjoyed?",
              answers: {
                admin: {
                  CreatingStrongCompanyBrand: "Creating a strong company brand",
                  SavingTimeWritingAndEditing: "Saving time writing and editing",
                  CentrallyManagingGrammarlyAccount: "Centrally managing team accounts and billing",
                  FeelingConfidentTheTeamWillSoundPolishedAndProfessional:
                    "Feeling confident the team will sound polished and professional",
                  EnablingTeamToCommunicateWithCustomersEffectively: "Enabling the team to communicate effectively",
                  ImprovingTeamsOverallWritingSkills: "Improving the team's overall writing skills",
                  Other: "Other"
                },
                teamMember: {
                  SavingTimeWritingAndEditing: "Saving time writing and editing",
                  SoundingFluentInEnglish: "Sounding fluent in English",
                  SoundingMoreProfessionalAndPolished: "Sounding more professional and polished",
                  ImprovingOverallWritingSkills: "Improving overall writing skills",
                  FeelingConfidentWhenCommunicating: "Feeling confident when communicating",
                  CommunicatingWithCustomersEffectively: "Communicating with customers effectively",
                  Other: "Other"
                }
              },
              learnMoreLink: "Learn more"
            },
            secondDissatisfactionQuestion: {
              question: "We’re sorry to hear that. What did you have trouble with?",
              answers: {
                admin: {
                  DoesntIntegrateWithAnAppIUse: "It doesn't integrate with an app the team uses",
                  LowQualitySuggestions: "Low-quality suggestions",
                  FeaturesAreMissing: "The features I expected were missing",
                  TechnicalDifficulties: "Technical difficulties",
                  NotSureWhatGrammarlyBusinessDoes: "I'm still not sure what Grammarly Business does",
                  Other: "Other",
                  DidntFindItValuable: "I didn't find it valuable"
                },
                teamMember: {
                  DoesntIntegrateWithAnAppIUse: "It doesn't integrate with an app I use",
                  LowQualitySuggestions: "Low-quality suggestions",
                  FeaturesAreMissing: "The features I expected were missing",
                  TechnicalDifficulties: "Technical difficulties",
                  NotSureWhatGrammarlyBusinessDoes: "I'm still not sure what Grammarly Business does",
                  Other: "Other",
                  DidntFindItValuable: "I didn't find it valuable"
                }
              }
            },
            thirdSatisfactionQuestion: {
              title: "Thank you.",
              question: r.createElement(
                r.Fragment,
                null,
                r.createElement("p", null, "We hope you continue enjoying Grammarly!"),
                r.createElement("p", null, "Is there anything else you'd like to share about your experience?")
              )
            },
            thirdDissatisfactionQuestion: {
              admin: {
                DoesntIntegrateWithAnAppIUse: (t, n, i, o, a, s) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "p",
                      null,
                      "We’re working hard to be wherever you write, but there are some applications that we don’t yet support."
                    ),
                    r.createElement(
                      "p",
                      null,
                      "Still, we may have what you’re looking for. Here are a few different ways to access Grammarly:"
                    ),
                    g(e).waysToUseGrammarly(t, n, i, o, a, s),
                    r.createElement("p", null, "Is there another app you need Grammarly in?")
                  ),
                LowQualitySuggestions: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "p",
                    null,
                    "Thanks for letting us know. We are constantly working to improve our suggestions. If you click the flag icon on suggestions that are unhelpful, it helps us understand how we can adjust our algorithms to be more accurate."
                  ),
                  r.createElement("p", null, "Is there anything else you'd like to share about your experience?")
                ),
                FeaturesAreMissing: "Thanks for letting us know. Which features did you expect to see?",
                TechnicalDifficulties: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("p", null, "Thanks for letting us know. We're here to help!"),
                  r.createElement("p", null, "Please let our support team know about the difficulties you're having here")
                ),
                NotSureWhatGrammarlyBusinessDoes:
                  "Thanks for letting us know. Grammarly Business can deliver real-time writing suggestions to help everyone on your team compose mistake-free and on-brand writing. Is there anything you need help with?",
                Other: "Is there anything in particular you found frustrating or annoying?",
                DidntFindItValuable: {
                  title: "Is there anything in particular you need help with?",
                  answers: {
                    CreatingAStrongCompanyBrand: "Creating a strong company brand",
                    SavingTimeWritingAndEditing: "Saving time writing and editing",
                    CentrallyManagingGrammarlyAccount: "Centrally managing Grammarly account settings, security, and billing",
                    FeelingConfidentTheTeamWillSoundPolished: "Feeling confident the team will sound polished and professional",
                    EnablingTheTeamToCommunicateWithCustomers: "Enabling the team to communicate with customers effectively",
                    ImprovingTheTeamsOverallWritingSkills: "Improving the team's overall writing skills",
                    Other: "Other"
                  }
                }
              },
              teamMember: {
                DoesntIntegrateWithAnAppIUse: (t, n, i, o, a, s) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "p",
                      null,
                      "We’re working hard to be wherever you write, but there are some applications that we don’t yet support."
                    ),
                    r.createElement(
                      "p",
                      null,
                      "Still, we may have what you’re looking for. Here are a few different ways to access Grammarly:"
                    ),
                    g(e).waysToUseGrammarly(t, n, i, o, a, s),
                    r.createElement("p", null, "Is there another app you need Grammarly in?")
                  ),
                LowQualitySuggestions: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "p",
                    null,
                    "Thanks for letting us know. We are constantly working to improve our suggestions. If you click the flag icon on suggestions that are unhelpful, it helps us understand how we can adjust our algorithms to be more accurate."
                  ),
                  r.createElement("p", null, "Is there anything else you'd like to share about your experience?")
                ),
                FeaturesAreMissing: "Thanks for letting us know. Which features did you expect to see?",
                TechnicalDifficulties: r.createElement(
                  r.Fragment,
                  null,
                  "Thanks for letting us know. Can you tell us more about what happened? We'll try to help."
                ),
                NotSureWhatGrammarlyBusinessDoes: (t, n, i, o, a, s) =>
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "p",
                      null,
                      "Thanks for letting us know. Grammarly helps compose polished, mistake-free writing wherever you write. Here are a few different ways to use Grammarly:"
                    ),
                    g(e).waysToUseGrammarly(t, n, i, o, a, s),
                    r.createElement("p", null, "Is there anything else you'd like to share about your experience?")
                  ),
                Other: "Is there anything in particular you found frustrating or annoying?",
                DidntFindItValuable: {
                  title: "Is there anything in particular you need help with?",
                  answers: {
                    SavingTimeWritingAndEditing: "Saving time writing and editing",
                    SoundingFluentInEnglish: "Sounding fluent in English",
                    SoundingMoreProfessionalAndPolished: "Sounding more professional and polished",
                    ImprovingOverallWritingSkills: "Improving overall writing skills",
                    FeelingConfidentWhenCommunicating: "Feeling confident when communicating",
                    CommunicatingWithCustomersEffectively: "Communicating with customers effectively",
                    Other: "Other"
                  }
                }
              }
            },
            thankYou: "Thank you so much for your feedback."
          },
          bulkAccept: {
            title: (e) => `Accept ${e} suggestions at once`,
            appliedTitle: (e) => `You’ve made ${e} instant corrections`,
            apply: (e) => `Accept all ${e}`,
            confirm: "Looks good",
            undoAll: "Undo all"
          },
          premiumSuggestions: "Premium suggestions",
          gbUpHook: {
            proTipBadge: "Pro Tip",
            dontShowAgain: "Don't Show Again",
            dismiss: "Dismiss",
            smbSpecificProfessionalism: {
              title: "Give your business a professional edge",
              description: "Help your team impress customers with clear, professional, and compelling communication.",
              cta: "Try Grammarly Business for free"
            },
            styleGuides: {
              title: "A strong business needs consistent writing",
              description: "Grammarly Business helps your team use a consistent voice and style everywhere they write.",
              cta: "Create a Grammarly Business style guide for free"
            }
          },
          gbVoxLensUpHook: {
            title: "Style guide",
            description:
              "Grammarly Business helps your whole team consistently match your company’s voice and style. Create a style guide with rules specific to your business.",
            cta: "Try Grammarly Business for free",
            maybeLater: "Maybe later"
          },
          gbEnableVoxLensHook: {
            title: "Create a company style guide",
            description:
              "Let Grammarly Business deliver customized writing feedback to help your team stay on-brand and in your company's voice.",
            cta: "Create a style guide",
            maybeLater: "Maybe later"
          },
          gbBillingMigration: {
            title: "Action required: Update your subscription",
            description: (e) =>
              `Your team’s subscription will expire on ${e}. Please add your billing information for uninterrupted access to Grammarly Business.`,
            cta: "Add Billing Information"
          },
          gbRuleCreated: { ruleSaved: "Rule saved successfully", viewStyleGuide: "View style guide" },
          premiumUngatingRenewalNotification: {
            title: "Your Grammarly Business subscription is about to renew",
            message: (e) => `On ${e}, your free trial of Grammarly Business will end and you'll be charged for a subscription renewal.`,
            cta: "Manage Your Subscription"
          },
          safariExtActivationNotification: {
            title: "Re-activate Grammarly Today",
            description:
              "Due to a recent update, Grammarly for Safari was turned off in your browser. Re-activate it today to enhance your writing across the web!",
            cta: "Re-activate"
          },
          undoCard: {
            title: "Instantly corrected",
            confirm: "Looks good",
            revert: (e) => r.createElement(r.Fragment, null, "Revert to ", e)
          },
          priorityList: {
            expand: "More",
            collapse: "Less",
            toggleButtonTooltip: (e) =>
              (e ? "Show" : "Hide") + " de-prioritized suggestion (less relevant for this text or those you often dismiss)",
            hint: "Grammarly de-prioritizes suggestions that are less relevant for this text or those you often dismiss.",
            successState: {
              allAlertsHint: "No more relevant suggestions.",
              outcomesHint: "You’ve addressed the most relevant suggestions.",
              firstCheckText: "No relevant suggestions."
            }
          },
          synfony: {
            back: "Back",
            applyTooltip: "Replace with this word",
            drilldownTooltip: (e) =>
              r.createElement(
                r.Fragment,
                null,
                "Explore alternatives related to",
                " ",
                r.createElement("b", null, r.createElement("i", null, e))
              ),
            onboardingTooltip: "Click the arrow to explore related words"
          },
          citation: {
            essayDetectionCard: {
              dropdownOptions: { apa: "APA", mla: "MLA", chicago: "Chicago", other: "Other" },
              examples: { chicago: "(Anderson 2005, 101)", mla: "(Anderson 101)", apa: "(Anderson, 2005)" }
            },
            citationStyleChangeNotification: { content: (e) => `Citation format set to ${e} and domain to Academic` }
          },
          premiumUpHookCard: {
            title: {
              weFound: "We found ",
              premiumIssues: (e) => `${e} additional writing issue${e > 1 ? "s" : ""}`,
              forPremium: " only for Premium users.",
              forPremiumExtended: " available only for Premium users."
            }
          },
          landmark: { sidebar: "Suggestions panel", documentMenu: "Document settings menu" },
          contentIsLoading: "Content is loading."
        }));
      function f(e) {
        return (t) => ("mac" === e || "ios" === e ? "⌘+" : "Ctrl+") + t;
      }
      var y;
      !(function (e) {
        (e.holder = g),
          (e.getConfig = function (e) {
            return { commandKeyLabel: f(e) };
          }),
          (e.Context = r.createContext(i.Y.invariantContent("PlatformTextResources")));
      })(y || (y = {}));
    },
    13351: (e, t, n) => {
      n.d(t, { u_: () => We, aV: () => Le, ay: () => Ae });
      var r = n(59312),
        i = n(27378),
        o = n(23239),
        a = n(8543),
        s = n(54001),
        l = n(25781),
        c = n(8125),
        u = n(22232),
        d = n(44060),
        m = n(64757),
        p = n(31278),
        h = n(50858),
        g = n(55818),
        f = n(20096),
        y = n(12271),
        b = n(40327);
      function v(e) {
        return getComputedStyle(e);
      }
      function w(e, t) {
        for (var n in t) {
          var r = t[n];
          "number" == typeof r && (r += "px"), (e.style[n] = r);
        }
        return e;
      }
      function x(e) {
        var t = document.createElement("div");
        return (t.className = e), t;
      }
      var E =
        "undefined" != typeof Element &&
        (Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector);
      function T(e, t) {
        if (!E) throw new Error("No element matching method supported");
        return E.call(e, t);
      }
      function C(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t) {
        return Array.prototype.filter.call(e.children, function (e) {
          return T(e, t);
        });
      }
      var S = "ps",
        _ = "ps__rtl",
        P = {
          thumb: function (e) {
            return "ps__thumb-" + e;
          },
          rail: function (e) {
            return "ps__rail-" + e;
          },
          consuming: "ps__child--consume"
        },
        L = {
          focus: "ps--focus",
          clicking: "ps--clicking",
          active: function (e) {
            return "ps--active-" + e;
          },
          scrolling: function (e) {
            return "ps--scrolling-" + e;
          }
        },
        A = { x: null, y: null };
      function W(e, t) {
        var n = e.element.classList,
          r = L.scrolling(t);
        n.contains(r) ? clearTimeout(A[t]) : n.add(r);
      }
      function I(e, t) {
        A[t] = setTimeout(function () {
          return e.isAlive && e.element.classList.remove(L.scrolling(t));
        }, e.settings.scrollingThreshold);
      }
      var R = function (e) {
          (this.element = e), (this.handlers = {});
        },
        D = { isEmpty: { configurable: !0 } };
      (R.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
      }),
        (R.prototype.unbind = function (e, t) {
          var n = this;
          this.handlers[e] = this.handlers[e].filter(function (r) {
            return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1);
          });
        }),
        (R.prototype.unbindAll = function () {
          for (var e in this.handlers) this.unbind(e);
        }),
        (D.isEmpty.get = function () {
          var e = this;
          return Object.keys(this.handlers).every(function (t) {
            return 0 === e.handlers[t].length;
          });
        }),
        Object.defineProperties(R.prototype, D);
      var F = function () {
        this.eventElements = [];
      };
      function M(e) {
        if ("function" == typeof self.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t;
      }
      function H(e, t, n, r, i) {
        var o;
        if ((void 0 === r && (r = !0), void 0 === i && (i = !1), "top" === t))
          o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
          if ("left" !== t) throw new Error("A proper axis should be provided");
          o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
        }
        !(function (e, t, n, r, i) {
          var o = n[0],
            a = n[1],
            s = n[2],
            l = n[3],
            c = n[4],
            u = n[5];
          void 0 === r && (r = !0);
          void 0 === i && (i = !1);
          var d = e.element;
          (e.reach[l] = null), d[s] < 1 && (e.reach[l] = "start");
          d[s] > e[o] - e[a] - 1 && (e.reach[l] = "end");
          t &&
            (d.dispatchEvent(M("ps-scroll-" + l)),
            t < 0 ? d.dispatchEvent(M("ps-scroll-" + c)) : t > 0 && d.dispatchEvent(M("ps-scroll-" + u)),
            r &&
              (function (e, t) {
                W(e, t), I(e, t);
              })(e, l));
          e.reach[l] && (t || i) && d.dispatchEvent(M("ps-" + l + "-reach-" + e.reach[l]));
        })(e, n, o, r, i);
      }
      function B(e) {
        return parseInt(e, 10) || 0;
      }
      (F.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
          return t.element === e;
        })[0];
        return t || ((t = new R(e)), this.eventElements.push(t)), t;
      }),
        (F.prototype.bind = function (e, t, n) {
          this.eventElement(e).bind(t, n);
        }),
        (F.prototype.unbind = function (e, t, n) {
          var r = this.eventElement(e);
          r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
        }),
        (F.prototype.unbindAll = function () {
          this.eventElements.forEach(function (e) {
            return e.unbindAll();
          }),
            (this.eventElements = []);
        }),
        (F.prototype.once = function (e, t, n) {
          var r = this.eventElement(e),
            i = function (e) {
              r.unbind(t, i), n(e);
            };
          r.bind(t, i);
        });
      var Y = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch:
          "undefined" != typeof self &&
          ("ontouchstart" in self ||
            ("maxTouchPoints" in self.navigator && self.navigator.maxTouchPoints > 0) ||
            (self.DocumentTouch && document instanceof self.DocumentTouch)),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
      };
      function N(e) {
        var t = e.element,
          n = Math.floor(t.scrollTop),
          r = t.getBoundingClientRect();
        (e.containerWidth = Math.round(r.width)),
          (e.containerHeight = Math.round(r.height)),
          (e.contentWidth = t.scrollWidth),
          (e.contentHeight = t.scrollHeight),
          t.contains(e.scrollbarXRail) ||
            (k(t, P.rail("x")).forEach(function (e) {
              return C(e);
            }),
            t.appendChild(e.scrollbarXRail)),
          t.contains(e.scrollbarYRail) ||
            (k(t, P.rail("y")).forEach(function (e) {
              return C(e);
            }),
            t.appendChild(e.scrollbarYRail)),
          !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
            ? ((e.scrollbarXActive = !0),
              (e.railXWidth = e.containerWidth - e.railXMarginWidth),
              (e.railXRatio = e.containerWidth / e.railXWidth),
              (e.scrollbarXWidth = O(e, B((e.railXWidth * e.containerWidth) / e.contentWidth))),
              (e.scrollbarXLeft = B(
                ((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth)) / (e.contentWidth - e.containerWidth)
              )))
            : (e.scrollbarXActive = !1),
          !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
            ? ((e.scrollbarYActive = !0),
              (e.railYHeight = e.containerHeight - e.railYMarginHeight),
              (e.railYRatio = e.containerHeight / e.railYHeight),
              (e.scrollbarYHeight = O(e, B((e.railYHeight * e.containerHeight) / e.contentHeight))),
              (e.scrollbarYTop = B((n * (e.railYHeight - e.scrollbarYHeight)) / (e.contentHeight - e.containerHeight))))
            : (e.scrollbarYActive = !1),
          e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
          e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
          (function (e, t) {
            var n = { width: t.railXWidth },
              r = Math.floor(e.scrollTop);
            t.isRtl ? (n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth) : (n.left = e.scrollLeft);
            t.isScrollbarXUsingBottom ? (n.bottom = t.scrollbarXBottom - r) : (n.top = t.scrollbarXTop + r);
            w(t.scrollbarXRail, n);
            var i = { top: r, height: t.railYHeight };
            t.isScrollbarYUsingRight
              ? t.isRtl
                ? (i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9)
                : (i.right = t.scrollbarYRight - e.scrollLeft)
              : t.isRtl
              ? (i.left =
                  t.negativeScrollAdjustment +
                  e.scrollLeft +
                  2 * t.containerWidth -
                  t.contentWidth -
                  t.scrollbarYLeft -
                  t.scrollbarYOuterWidth)
              : (i.left = t.scrollbarYLeft + e.scrollLeft);
            w(t.scrollbarYRail, i),
              w(t.scrollbarX, { left: t.scrollbarXLeft, width: t.scrollbarXWidth - t.railBorderXWidth }),
              w(t.scrollbarY, { top: t.scrollbarYTop, height: t.scrollbarYHeight - t.railBorderYWidth });
          })(t, e),
          e.scrollbarXActive
            ? t.classList.add(L.active("x"))
            : (t.classList.remove(L.active("x")),
              (e.scrollbarXWidth = 0),
              (e.scrollbarXLeft = 0),
              (t.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0)),
          e.scrollbarYActive
            ? t.classList.add(L.active("y"))
            : (t.classList.remove(L.active("y")), (e.scrollbarYHeight = 0), (e.scrollbarYTop = 0), (t.scrollTop = 0));
      }
      function O(e, t) {
        return (
          e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
          e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
          t
        );
      }
      function G(e, t) {
        var n = t[0],
          r = t[1],
          i = t[2],
          o = t[3],
          a = t[4],
          s = t[5],
          l = t[6],
          c = t[7],
          u = t[8],
          d = e.element,
          m = null,
          p = null,
          h = null;
        function g(t) {
          t.touches && t.touches[0] && (t[i] = t.touches[0].pageY),
            (d[l] = m + h * (t[i] - p)),
            W(e, c),
            N(e),
            t.stopPropagation(),
            t.type.startsWith("touch") && t.changedTouches.length > 1 && t.preventDefault();
        }
        function f() {
          I(e, c), e[u].classList.remove(L.clicking), e.event.unbind(e.ownerDocument, "mousemove", g);
        }
        function y(t, a) {
          (m = d[l]),
            a && t.touches && (t[i] = t.touches[0].pageY),
            (p = t[i]),
            (h = (e[r] - e[n]) / (e[o] - e[s])),
            a
              ? e.event.bind(e.ownerDocument, "touchmove", g)
              : (e.event.bind(e.ownerDocument, "mousemove", g), e.event.once(e.ownerDocument, "mouseup", f), t.preventDefault()),
            e[u].classList.add(L.clicking),
            t.stopPropagation();
        }
        e.event.bind(e[a], "mousedown", function (e) {
          y(e);
        }),
          e.event.bind(e[a], "touchstart", function (e) {
            y(e, !0);
          });
      }
      var $ = {
          "click-rail": function (e) {
            e.element,
              e.event.bind(e.scrollbarY, "mousedown", function (e) {
                return e.stopPropagation();
              }),
              e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                var n = t.pageY - self.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                (e.element.scrollTop += n * e.containerHeight), N(e), t.stopPropagation();
              }),
              e.event.bind(e.scrollbarX, "mousedown", function (e) {
                return e.stopPropagation();
              }),
              e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                var n = t.pageX - self.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                (e.element.scrollLeft += n * e.containerWidth), N(e), t.stopPropagation();
              });
          },
          "drag-thumb": function (e) {
            G(e, [
              "containerWidth",
              "contentWidth",
              "pageX",
              "railXWidth",
              "scrollbarX",
              "scrollbarXWidth",
              "scrollLeft",
              "x",
              "scrollbarXRail"
            ]),
              G(e, [
                "containerHeight",
                "contentHeight",
                "pageY",
                "railYHeight",
                "scrollbarY",
                "scrollbarYHeight",
                "scrollTop",
                "y",
                "scrollbarYRail"
              ]);
          },
          keyboard: function (e) {
            var t = e.element;
            e.event.bind(e.ownerDocument, "keydown", function (n) {
              if (
                !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                (T(t, ":hover") || T(e.scrollbarX, ":focus") || T(e.scrollbarY, ":focus"))
              ) {
                var r,
                  i = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                if (i) {
                  if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
                  else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                  if (
                    T((r = i), "input,[contenteditable]") ||
                    T(r, "select,[contenteditable]") ||
                    T(r, "textarea,[contenteditable]") ||
                    T(r, "button,[contenteditable]")
                  )
                    return;
                }
                var o = 0,
                  a = 0;
                switch (n.which) {
                  case 37:
                    o = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                    break;
                  case 38:
                    a = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                    break;
                  case 39:
                    o = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                    break;
                  case 40:
                    a = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                    break;
                  case 32:
                    a = n.shiftKey ? e.containerHeight : -e.containerHeight;
                    break;
                  case 33:
                    a = e.containerHeight;
                    break;
                  case 34:
                    a = -e.containerHeight;
                    break;
                  case 36:
                    a = e.contentHeight;
                    break;
                  case 35:
                    a = -e.contentHeight;
                    break;
                  default:
                    return;
                }
                (e.settings.suppressScrollX && 0 !== o) ||
                  (e.settings.suppressScrollY && 0 !== a) ||
                  ((t.scrollTop -= a),
                  (t.scrollLeft += o),
                  N(e),
                  (function (n, r) {
                    var i = Math.floor(t.scrollTop);
                    if (0 === n) {
                      if (!e.scrollbarYActive) return !1;
                      if ((0 === i && r > 0) || (i >= e.contentHeight - e.containerHeight && r < 0)) return !e.settings.wheelPropagation;
                    }
                    var o = t.scrollLeft;
                    if (0 === r) {
                      if (!e.scrollbarXActive) return !1;
                      if ((0 === o && n < 0) || (o >= e.contentWidth - e.containerWidth && n > 0)) return !e.settings.wheelPropagation;
                    }
                    return !0;
                  })(o, a) && n.preventDefault());
              }
            });
          },
          wheel: function (e) {
            var t = e.element;
            function n(n) {
              var r = (function (e) {
                  var t = e.deltaX,
                    n = -1 * e.deltaY;
                  return (
                    (void 0 !== t && void 0 !== n) || ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                    e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                    t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                    e.shiftKey ? [-n, -t] : [t, n]
                  );
                })(n),
                i = r[0],
                o = r[1];
              if (
                !(function (e, n, r) {
                  if (!Y.isWebKit && t.querySelector("select:focus")) return !0;
                  if (!t.contains(e)) return !1;
                  for (var i = e; i && i !== t; ) {
                    if (i.classList.contains(P.consuming)) return !0;
                    var o = v(i);
                    if (r && o.overflowY.match(/(scroll|auto)/)) {
                      var a = i.scrollHeight - i.clientHeight;
                      if (a > 0 && ((i.scrollTop > 0 && r < 0) || (i.scrollTop < a && r > 0))) return !0;
                    }
                    if (n && o.overflowX.match(/(scroll|auto)/)) {
                      var s = i.scrollWidth - i.clientWidth;
                      if (s > 0 && ((i.scrollLeft > 0 && n < 0) || (i.scrollLeft < s && n > 0))) return !0;
                    }
                    i = i.parentNode;
                  }
                  return !1;
                })(n.target, i, o)
              ) {
                var a = !1;
                e.settings.useBothWheelAxes
                  ? e.scrollbarYActive && !e.scrollbarXActive
                    ? (o ? (t.scrollTop -= o * e.settings.wheelSpeed) : (t.scrollTop += i * e.settings.wheelSpeed), (a = !0))
                    : e.scrollbarXActive &&
                      !e.scrollbarYActive &&
                      (i ? (t.scrollLeft += i * e.settings.wheelSpeed) : (t.scrollLeft -= o * e.settings.wheelSpeed), (a = !0))
                  : ((t.scrollTop -= o * e.settings.wheelSpeed), (t.scrollLeft += i * e.settings.wheelSpeed)),
                  N(e),
                  (a =
                    a ||
                    (function (n, r) {
                      var i = Math.floor(t.scrollTop),
                        o = 0 === t.scrollTop,
                        a = i + t.offsetHeight === t.scrollHeight,
                        s = 0 === t.scrollLeft,
                        l = t.scrollLeft + t.offsetWidth === t.scrollWidth;
                      return !(Math.abs(r) > Math.abs(n) ? o || a : s || l) || !e.settings.wheelPropagation;
                    })(i, o)),
                  a && !n.ctrlKey && (n.stopPropagation(), n.preventDefault());
              }
            }
            void 0 !== self.onwheel ? e.event.bind(t, "wheel", n) : void 0 !== self.onmousewheel && e.event.bind(t, "mousewheel", n);
          },
          touch: function (e) {
            if (Y.supportsTouch || Y.supportsIePointer) {
              var t = e.element,
                n = {},
                r = 0,
                i = {},
                o = null;
              Y.supportsTouch
                ? (e.event.bind(t, "touchstart", c), e.event.bind(t, "touchmove", u), e.event.bind(t, "touchend", d))
                : Y.supportsIePointer &&
                  (self.PointerEvent
                    ? (e.event.bind(t, "pointerdown", c), e.event.bind(t, "pointermove", u), e.event.bind(t, "pointerup", d))
                    : self.MSPointerEvent &&
                      (e.event.bind(t, "MSPointerDown", c), e.event.bind(t, "MSPointerMove", u), e.event.bind(t, "MSPointerUp", d)));
            }
            function a(n, r) {
              (t.scrollTop -= r), (t.scrollLeft -= n), N(e);
            }
            function s(e) {
              return e.targetTouches ? e.targetTouches[0] : e;
            }
            function l(e) {
              return (
                (!e.pointerType || "pen" !== e.pointerType || 0 !== e.buttons) &&
                (!(!e.targetTouches || 1 !== e.targetTouches.length) ||
                  !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
              );
            }
            function c(e) {
              if (l(e)) {
                var t = s(e);
                (n.pageX = t.pageX), (n.pageY = t.pageY), (r = new Date().getTime()), null !== o && clearInterval(o);
              }
            }
            function u(o) {
              if (l(o)) {
                var c = s(o),
                  u = { pageX: c.pageX, pageY: c.pageY },
                  d = u.pageX - n.pageX,
                  m = u.pageY - n.pageY;
                if (
                  (function (e, n, r) {
                    if (!t.contains(e)) return !1;
                    for (var i = e; i && i !== t; ) {
                      if (i.classList.contains(P.consuming)) return !0;
                      var o = v(i);
                      if (r && o.overflowY.match(/(scroll|auto)/)) {
                        var a = i.scrollHeight - i.clientHeight;
                        if (a > 0 && ((i.scrollTop > 0 && r < 0) || (i.scrollTop < a && r > 0))) return !0;
                      }
                      if (n && o.overflowX.match(/(scroll|auto)/)) {
                        var s = i.scrollWidth - i.clientWidth;
                        if (s > 0 && ((i.scrollLeft > 0 && n < 0) || (i.scrollLeft < s && n > 0))) return !0;
                      }
                      i = i.parentNode;
                    }
                    return !1;
                  })(o.target, d, m)
                )
                  return;
                a(d, m), (n = u);
                var p = new Date().getTime(),
                  h = p - r;
                h > 0 && ((i.x = d / h), (i.y = m / h), (r = p)),
                  (function (n, r) {
                    var i = Math.floor(t.scrollTop),
                      o = t.scrollLeft,
                      a = Math.abs(n),
                      s = Math.abs(r);
                    if (s > a) {
                      if ((r < 0 && i === e.contentHeight - e.containerHeight) || (r > 0 && 0 === i))
                        return 0 === self.scrollY && r > 0 && Y.isChrome;
                    } else if (a > s && ((n < 0 && o === e.contentWidth - e.containerWidth) || (n > 0 && 0 === o))) return !0;
                    return !0;
                  })(d, m) && o.preventDefault();
              }
            }
            function d() {
              e.settings.swipeEasing &&
                (clearInterval(o),
                (o = setInterval(function () {
                  e.isInitialized
                    ? clearInterval(o)
                    : i.x || i.y
                    ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                      ? clearInterval(o)
                      : e.element
                      ? (a(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                      : clearInterval(o)
                    : clearInterval(o);
                }, 10)));
            }
          }
        },
        U = function (e, t) {
          var n = this;
          if ((void 0 === t && (t = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName))
            throw new Error("no element is specified to initialize PerfectScrollbar");
          for (var r in ((this.element = e),
          e.classList.add(S),
          (this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
          }),
          t))
            this.settings[r] = t[r];
          (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
          var i,
            o,
            a = function () {
              return e.classList.add(L.focus);
            },
            s = function () {
              return e.classList.remove(L.focus);
            };
          (this.isRtl = "rtl" === v(e).direction),
            !0 === this.isRtl && e.classList.add(_),
            (this.isNegativeScroll = ((o = e.scrollLeft), (e.scrollLeft = -1), (i = e.scrollLeft < 0), (e.scrollLeft = o), i)),
            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
            (this.event = new F()),
            (this.ownerDocument = e.ownerDocument || document),
            (this.scrollbarXRail = x(P.rail("x"))),
            e.appendChild(this.scrollbarXRail),
            (this.scrollbarX = x(P.thumb("x"))),
            this.scrollbarXRail.appendChild(this.scrollbarX),
            this.scrollbarX.setAttribute("tabindex", 0),
            this.event.bind(this.scrollbarX, "focus", a),
            this.event.bind(this.scrollbarX, "blur", s),
            (this.scrollbarXActive = null),
            (this.scrollbarXWidth = null),
            (this.scrollbarXLeft = null);
          var l = v(this.scrollbarXRail);
          (this.scrollbarXBottom = parseInt(l.bottom, 10)),
            isNaN(this.scrollbarXBottom)
              ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = B(l.top)))
              : (this.isScrollbarXUsingBottom = !0),
            (this.railBorderXWidth = B(l.borderLeftWidth) + B(l.borderRightWidth)),
            w(this.scrollbarXRail, { display: "block" }),
            (this.railXMarginWidth = B(l.marginLeft) + B(l.marginRight)),
            w(this.scrollbarXRail, { display: "" }),
            (this.railXWidth = null),
            (this.railXRatio = null),
            (this.scrollbarYRail = x(P.rail("y"))),
            e.appendChild(this.scrollbarYRail),
            (this.scrollbarY = x(P.thumb("y"))),
            this.scrollbarYRail.appendChild(this.scrollbarY),
            this.scrollbarY.setAttribute("tabindex", 0),
            this.event.bind(this.scrollbarY, "focus", a),
            this.event.bind(this.scrollbarY, "blur", s),
            (this.scrollbarYActive = null),
            (this.scrollbarYHeight = null),
            (this.scrollbarYTop = null);
          var c = v(this.scrollbarYRail);
          (this.scrollbarYRight = parseInt(c.right, 10)),
            isNaN(this.scrollbarYRight)
              ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = B(c.left)))
              : (this.isScrollbarYUsingRight = !0),
            (this.scrollbarYOuterWidth = this.isRtl
              ? (function (e) {
                  var t = v(e);
                  return B(t.width) + B(t.paddingLeft) + B(t.paddingRight) + B(t.borderLeftWidth) + B(t.borderRightWidth);
                })(this.scrollbarY)
              : null),
            (this.railBorderYWidth = B(c.borderTopWidth) + B(c.borderBottomWidth)),
            w(this.scrollbarYRail, { display: "block" }),
            (this.railYMarginHeight = B(c.marginTop) + B(c.marginBottom)),
            w(this.scrollbarYRail, { display: "" }),
            (this.railYHeight = null),
            (this.railYRatio = null),
            (this.reach = {
              x: e.scrollLeft <= 0 ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
              y: e.scrollTop <= 0 ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }),
            (this.isAlive = !0),
            this.settings.handlers.forEach(function (e) {
              return $[e](n);
            }),
            (this.lastScrollTop = Math.floor(e.scrollTop)),
            (this.lastScrollLeft = e.scrollLeft),
            this.event.bind(this.element, "scroll", function (e) {
              return n.onScroll(e);
            }),
            N(this);
        };
      (U.prototype.update = function () {
        this.isAlive &&
          ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
          w(this.scrollbarXRail, { display: "block" }),
          w(this.scrollbarYRail, { display: "block" }),
          (this.railXMarginWidth = B(v(this.scrollbarXRail).marginLeft) + B(v(this.scrollbarXRail).marginRight)),
          (this.railYMarginHeight = B(v(this.scrollbarYRail).marginTop) + B(v(this.scrollbarYRail).marginBottom)),
          w(this.scrollbarXRail, { display: "none" }),
          w(this.scrollbarYRail, { display: "none" }),
          N(this),
          H(this, "top", 0, !1, !0),
          H(this, "left", 0, !1, !0),
          w(this.scrollbarXRail, { display: "" }),
          w(this.scrollbarYRail, { display: "" }));
      }),
        (U.prototype.onScroll = function (e) {
          this.isAlive &&
            (N(this),
            H(this, "top", this.element.scrollTop - this.lastScrollTop),
            H(this, "left", this.element.scrollLeft - this.lastScrollLeft),
            (this.lastScrollTop = Math.floor(this.element.scrollTop)),
            (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (U.prototype.destroy = function () {
          this.isAlive &&
            (this.event.unbindAll(),
            C(this.scrollbarX),
            C(this.scrollbarY),
            C(this.scrollbarXRail),
            C(this.scrollbarYRail),
            this.removePsClasses(),
            (this.element = null),
            (this.scrollbarX = null),
            (this.scrollbarY = null),
            (this.scrollbarXRail = null),
            (this.scrollbarYRail = null),
            (this.isAlive = !1));
        }),
        (U.prototype.removePsClasses = function () {
          this.element.className = this.element.className
            .split(" ")
            .filter(function (e) {
              return !e.match(/^ps([-_].+|)$/);
            })
            .join(" ");
        });
      const X = U;
      var j,
        z = n(60797),
        V = n(66310),
        q = n(85089),
        Z = n(78674),
        K = n(50628),
        Q = n(2834),
        J = n(24209),
        ee = n(66081),
        te = n(40151),
        ne = n(49708),
        re = n(98403),
        ie = n(77176),
        oe = n(67434),
        ae = n(5114),
        se = n(83078),
        le = n(90845),
        ce = n(18775),
        ue = n(89894),
        de = n(32096),
        me = "#7d7c7c",
        pe = "#3a3a3a",
        he = "ps--force",
        ge = "ps--hidden",
        fe = ue.ux.style({ position: "relative", overflow: "hidden !important" });
      ue.ux.cssRule(".ps", {
        overflow: ue.ux.important("hidden"),
        "overflow-anchor": "none",
        "-ms-touch-action": "auto",
        touchAction: "auto",
        "-ms-overflow-style": "none",
        position: "relative",
        border: "none !important",
        $nest: (0, g._)(
          (0, h._)(
            {},
            ((j = {
              "& .ps__rail-x, & .ps__rail-y": { zIndex: de.$n, pointerEvents: "all" },
              ".ps__rail-x": {
                display: "none",
                opacity: 0,
                transition: "background-color .2s linear, opacity .2s linear",
                "-webkit-transition": "background-color .2s linear, opacity .2s linear",
                height: 15,
                bottom: 0,
                position: "absolute"
              },
              ".ps__rail-y": {
                display: "none",
                opacity: "0",
                transition: "background-color .2s linear, opacity .2s linear",
                "-webkit-transition": "background-color .2s linear, opacity .2s linear",
                width: 15,
                right: 0,
                position: "absolute"
              },
              ".ps--active-x > .ps__rail-x, .ps--active-y > .ps__rail-y": { display: "block", "background-color": "transparent" }
            }),
            (0, ce._)(j, "&.".concat(ge, " > .ps__rail-x, &.").concat(ge, " > .ps__rail-y"), { opacity: 0 }),
            (0, ce._)(j, "&.".concat(he, " > .ps__rail-x, &.").concat(he, " > .ps__rail-y"), { opacity: 0.6 }),
            (0, ce._)(
              j,
              "&:hover > .ps__rail-x, &:hover > .ps__rail-y, &.ps--focus > .ps__rail-x, &.ps--focus > .ps__rail-y, &.ps--scrolling-x > .ps__rail-x, &.ps--scrolling-y > .ps__rail-y",
              { opacity: 0.6 }
            ),
            (0, ce._)(
              j,
              ".ps__rail-x:hover, .ps__rail-y:hover, .ps__rail-x:focus, .ps__rail-y:focus, .ps__rail-x.ps--clicking, .ps__rail-y.ps--clicking",
              { "background-color": "#eee", opacity: 0.9 }
            ),
            j),
            {
              ".ps__thumb-x": {
                backgroundColor: me,
                borderRadius: 6,
                transition: "background-color .2s linear, height .2s ease-in-out",
                "-webkit-transition": "background-color .2s linear, height .2s ease-in-out",
                height: 6,
                bottom: 2,
                position: "absolute"
              },
              ".ps__thumb-y": {
                backgroundColor: me,
                borderRadius: 6,
                transition: "background-color .2s linear, width .2s ease-in-out",
                "-webkit-transition": "background-color .2s linear, width .2s ease-in-out",
                width: 6,
                right: 2,
                position: "absolute"
              },
              ".ps__rail-x:hover > .ps__thumb-x, .ps__rail-x:focus > .ps__thumb-x, .ps__rail-x.ps--clicking .ps__thumb-x": {
                backgroundColor: pe,
                height: 11
              },
              ".ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y": {
                backgroundColor: pe,
                width: 11
              }
            }
          ),
          {
            "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": { overflow: ue.ux.important("auto") },
            "@supports (-ms-overflow-style: none)": { overflow: ue.ux.important("auto") }
          }
        )
      });
      var ye,
        be = function (e) {
          var t = e.update,
            n = e.children,
            r = e.onScroll,
            l = e.scrollTo,
            c = e.name,
            u = e.className,
            d = e.showWhenScrollable,
            m = o.h.create(ae.none),
            p = o.h.create(ae.none);
          return (
            le.P.useSubscriptionTo(
              m.pipe(z.oA).pipe(
                V.w(function (e) {
                  return q.YC(e).pipe(
                    Z.b(250),
                    K.P(),
                    Q.b(function () {
                      return p.set(
                        ae.some(
                          (function (e) {
                            return new X(e, { suppressScrollX: !0, minScrollbarLength: 40 });
                          })(e)
                        )
                      );
                    })
                  );
                })
              )
            ),
            le.P.useSubscriptionTo(
              p.pipe(z.oA).pipe(
                Q.b(ye.addA11yAttrs),
                V.w(function (e) {
                  return J.T(
                    q.YC(e.element).pipe(
                      ee.e(200),
                      Q.b(function () {
                        e.update();
                      })
                    ),
                    (null != l ? l : te.E).pipe(
                      Q.b(function (t) {
                        (e.element.scrollTop = t), e.update();
                      })
                    ),
                    (null != t ? t : te.E).pipe(
                      Q.b(function () {
                        e.update();
                      })
                    ),
                    ne.R(e.element, "scroll").pipe(Q.b(ye.updateVerticalValue(e)))
                  );
                })
              )
            ),
            le.P.useSubscriptionTo(
              m.pipe(z.oA).pipe(
                V.w(function (e) {
                  return re.Dx(u).pipe(
                    ie.U(function (e) {
                      return Boolean(e) ? e.split(" ") : [];
                    }),
                    oe.R(function (t, n) {
                      var r, i;
                      Boolean(t) && (r = e.classList).remove.apply(r, (0, f._)(t));
                      Boolean(n) && (i = e.classList).add.apply(i, (0, f._)(n));
                      return n;
                    }, [])
                  );
                })
              )
            ),
            le.P.useEffectOnWillUnmount(function () {
              (0, b.pipe)(
                p.get(),
                se.bw(function (e) {
                  e.destroy(), p.set(ae.none);
                })
              );
            }),
            i.createElement(
              "div",
              (0, g._)((0, h._)({}, (0, s.Sh)(!0 === d && he, fe)), {
                onScroll:
                  void 0 !== r
                    ? function (e) {
                        var t = e.target;
                        r.next({ scrollTop: t.scrollTop, scrollLeft: t.scrollLeft });
                      }
                    : void 0,
                ref: function (e) {
                  return m.set(ae.fromNullable(e));
                },
                "data-role": "scrollbar-".concat(c)
              }),
              i.createElement(a.F.Fragment, null, n)
            )
          );
        };
      !(function (e) {
        var t = function (e) {
          var t = e.deltaX,
            n = -1 * e.deltaY;
          return (
            (void 0 !== t && void 0 !== n) || ((t = (-1 * e.deltaX) / 6), (n = e.deltaY / 6)),
            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
            t != t && n != n && ((t = 0), (n = e.deltaY)),
            [t, n]
          );
        };
        (e.verticalScrollByWhellEvent = function (e) {
          return ne.R(e, "wheel", { passive: !0 }).pipe(
            ie.U(t),
            ie.U(y.Yg),
            Q.b(function (t) {
              return (e.scrollTop -= t);
            })
          );
        }),
          (e.addA11yAttrs = function (e) {
            e.scrollbarY.setAttribute("role", "scrollbar"),
              e.scrollbarY.setAttribute("aria-orientation", "vertical"),
              e.scrollbarY.setAttribute("aria-valuenow", "0");
          }),
          (e.updateVerticalValue = function (e) {
            return function () {
              var t = Math.floor((e.scrollbarY.offsetTop / (e.containerHeight - e.scrollbarY.offsetHeight)) * 100);
              e.scrollbarY.setAttribute("aria-valuenow", t.toString());
            };
          });
      })(ye || (ye = {}));
      var ve = n(24588),
        we = n(40219),
        xe = n(28043),
        Ee = n(55935),
        Te = n(85985),
        Ce = n(41398),
        ke = n(76974),
        Se = n(61722),
        _e = n(28706),
        Pe = n(17343);
      class Le extends i.Component {
        constructor() {
          super(...arguments),
            (this._overlayIndex = Le._index++),
            (this._subs = []),
            (this._visibilityState = o.h.create("hidden")),
            (this._onClick = () => {
              (!1 !== this.props.preventClose && null != this.props.preventClose) || this.props.visible.set(!1);
            });
        }
        componentDidMount() {
          this._visibilityState.set(this.props.visible.get() ? "visible" : "hidden"),
            this._subs.push(
              this._visibilityState
                .pipe(
                  ie.U((e) => "visible" === e),
                  xe.x()
                )
                .subscribe((e) =>
                  Le._activeOverlays.modify((t) => {
                    const n = new Set(t);
                    return e ? n.add(this._overlayIndex) : n.delete(this._overlayIndex), n;
                  })
                ),
              this.props.visible.pipe(Ee.T(1)).subscribe((e) => {
                const t = !0 === this.props.animate ? "fadeOut" : "hidden";
                this._visibilityState.set(e ? "visible" : t);
              })
            ),
            this._subs.push(
              this._visibilityState
                .pipe(
                  V.w((e) => ("visible" === e ? ne.R(document, "keydown") : te.E)),
                  Te.h((e) => e.keyCode === l.R.ESC_CODE),
                  Ce.M(this.props.onClose ? re.Dx(this.props.onClose) : ke.of(c.Q1))
                )
                .subscribe(([, e]) => {
                  var t;
                  (null !== (t = this.props.preventClose) && void 0 !== t && t) || this.props.visible.set(!1), e();
                })
            );
        }
        componentWillUnmount() {
          Le._activeOverlays.modify((e) => {
            const t = new Set(e);
            return t.delete(this._overlayIndex), t;
          }),
            this._subs.forEach((e) => e.unsubscribe()),
            (this._subs = []);
        }
        render() {
          return i.createElement(
            a.F.Fragment,
            null,
            this._visibilityState.view((e) => {
              switch (e) {
                case "visible":
                case "fadeOut":
                  return i.createElement(
                    a.F.div,
                    Object.assign(
                      {},
                      (0, s.Sh)(
                        !0 === this.props.animate ? this._getAnimatedTypeClass(e) : this._getTypeClass(e),
                        this._getPositionType(this.props.positionType)
                      ),
                      {
                        onClick: this.props.onClose
                          ? re.Dx(this.props.onClose).pipe(ie.U((e) => () => (this._onClick(), e())))
                          : this._onClick,
                        onTransitionEnd: () => {
                          "fadeOut" === e && this._visibilityState.set("hidden");
                        }
                      }
                    ),
                    i.createElement(
                      a.F.div,
                      Object.assign({}, (0, s.Sh)(!0 === this.props.animate && this._getContentClass(e))),
                      i.createElement(
                        "div",
                        { className: qe.scroll },
                        i.createElement(
                          a.F.div,
                          Object.assign({}, (0, s.Sh)(this._getAlignmentClass(), this._getSmallResolutionClass())),
                          this.props.children
                        )
                      )
                    )
                  );
                case "hidden":
                  return null;
                default:
                  return (0, u.vE)(e);
              }
            })
          );
        }
        _getSmallResolutionClass() {
          return "resize" === this.props.smallResolution ? qe.wrapperResize : "";
        }
        _getAlignmentClass() {
          switch (this.props.alignment) {
            case "top-center":
              return qe.wrapperTopCenter;
            case "bottom-right":
              return qe.wrapperBottomRight;
            case "none":
              return "";
            default:
              return qe.wrapperCenter;
          }
        }
        _getTypeClass(e) {
          if ("visible" !== e) return qe.wrapperTransparent;
          switch (this.props.overlayType) {
            case "light":
              return qe.wrapperLight;
            case "transparent":
              return qe.wrapperTransparent;
            default:
              return qe.wrapperDark;
          }
        }
        _getPositionType(e) {
          switch (e) {
            case "absolute":
              return qe.wrapperAbsolute;
            case "fixed":
              return qe.wrapperFixed;
            default:
              return (0, u.vE)(e);
          }
        }
        _getAnimatedTypeClass(e) {
          const t = "visible" === e;
          switch (this.props.overlayType) {
            case "light":
              return Se.f.rafSequence(t ? [qe.wrapperTransparent, qe.wrapperLight] : [qe.wrapperLight, qe.wrapperTransparent], !0);
            case "transparent":
              return ke.of(qe.wrapperTransparent);
            default:
              return Se.f.rafSequence(t ? [qe.wrapperTransparent, qe.wrapperDark] : [qe.wrapperDark, qe.wrapperTransparent], !0);
          }
        }
        _getContentClass(e) {
          const { contentFaded: t, content: n } = this.props.theme || qe,
            r = "visible" === e ? [t, n] : [n, t];
          return Se.f.rafSequence(r, !0);
        }
      }
      (Le.defaultProps = { visible: o.h.create(!0) }),
        (Le._activeOverlays = o.h.create(new Set())),
        (Le.activeCount = Le._activeOverlays.view((e) => e.size)),
        (Le._index = 0);
      const Ae = (e) => i.createElement(Le, Object.assign({}, e, { visible: o.h.create(!0), preventClose: !1 }), e.children);
      function We({ children: e, className: t, close: n, focusTrapMode: r, initialFocus: o }) {
        const l = i.useState("modal-title" + Math.floor(1e3 * Math.random()))[0],
          { onMount: u } = le.P.FocusTrap.useElementFocusTrap(
            (function (e, t) {
              switch (e) {
                case "dynamic":
                  return le.P.FocusTrap.dynamicFocusTrap(t);
                case "none":
                  return le.P.FocusTrap.noTrap;
                default:
                  return le.P.FocusTrap.staticFocusTrap(t);
              }
            })(r, o)
          );
        return i.createElement(
          "div",
          { ref: u, className: qe.contentWrapper },
          i.createElement(
            a.F.div,
            Object.assign({}, (0, s.Sh)(qe.modal, t), { onClick: _e.UW(c.Q1), role: "dialog", "aria-modal": !0, "aria-labelledby": l }),
            i.createElement(We.TitleIdContext.Provider, { value: l }, e),
            n
              ? i.createElement(
                  "div",
                  { className: qe.closeIconButtonContainer },
                  i.createElement(
                    m.zx,
                    { name: "modal-close", onClick: n },
                    i.createElement(p.JO.Close, { className: qe.closeIcon, width: 13 })
                  )
                )
              : null
          )
        );
      }
      !(function (e) {
        (e.TitleIdContext = i.createContext("modal-title")),
          (e.Header = ({ children: e, className: t }) => i.createElement(a.F.div, Object.assign({}, (0, s.Sh)(qe.header, t)), e)),
          (e.SpokenDescription = function (e) {
            var { nodeType: t = "div" } = e,
              n = (0, r._T)(e, ["nodeType"]);
            const o = a.F[t];
            return i.createElement(
              o,
              Object.assign({}, n, { tabIndex: -1 }, (0, s.Sh)(n.className, qe.spokenDescription), {
                mount: (e) => (null == e ? void 0 : e.focus())
              })
            );
          }),
          (e.Body = ({ children: e, className: t, wrapperClassName: n, name: r }) => {
            const { ref: o, onMount: l } = le.P.useElWatcher();
            return i.createElement(
              be,
              Object.assign({ name: r }, (0, s.Sh)(qe.scrollBody, n), {
                showWhenScrollable: !0,
                update: o.pipe(z.oA, V.w(q.YC), Pe.h(re.PU))
              }),
              i.createElement(a.F.div, Object.assign({}, (0, s.Sh)(qe.body, t), { mount: l }), e)
            );
          }),
          (e.Footer = ({ children: e, className: t }) => i.createElement(a.F.div, Object.assign({}, (0, s.Sh)(qe.footer, t)), " ", e, " "));
      })(We || (We = {}));
      const Ie = {
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: ue.ux.percent(100),
          height: ue.ux.percent(100),
          transition: `background ${ue.ux.seconds(0.2)}`,
          pointerEvents: "auto"
        },
        Re = { position: "fixed", zIndex: we.DY },
        De = { margin: `${ue.ux.rem(-0.5)} auto auto` },
        Fe = { background: "rgba(255, 255, 255, .7)" },
        Me = { background: "rgba(100, 107, 131, .4)" },
        He = { position: "absolute", top: ue.ux.rem(0.5), right: ue.ux.rem(0.5) },
        Be = { stroke: ve.FW },
        Ye = {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          maxHeight: "90vh",
          borderRadius: ue.ux.rem(we.Jr),
          boxShadow: d.uc.Z300
        },
        Ne = {
          position: "relative",
          overflow: "hidden",
          padding: `${ue.ux.rem(2.5)} ${ue.ux.rem(2)} ${ue.ux.rem(1)}`,
          borderTopLeftRadius: ue.ux.rem(we.Jr),
          borderTopRightRadius: ue.ux.rem(we.Jr),
          backgroundColor: d.Il.CoreNeutral1
        },
        Oe = { position: "absolute", top: ue.ux.px(10), right: "@top" },
        Ge = { padding: ue.ux.rem(2), backgroundColor: d.Il.CoreNeutral0 },
        $e = {
          display: "flex",
          padding: `0 ${ue.ux.rem(2)}`,
          height: ue.ux.rem(4),
          border: "0 solid transparent",
          borderWidth: "0 1px",
          borderBottomRightRadius: ue.ux.rem(we.Jr),
          borderBottomLeftRadius: ue.ux.rem(we.Jr),
          backgroundColor: d.Il.CoreNeutral1,
          alignItems: "center",
          justifyContent: "flex-end",
          $nest: { "& > *:not(:last-child)": { marginRight: ue.ux.rem(0.5) } }
        },
        Ue = { transitionDuration: ue.ux.seconds(0.2), transitionProperty: "opacity, transform", transformOrigin: "center" },
        Xe = { height: ue.ux.percent(100) },
        je = { position: "relative", display: "flex", padding: `${ue.ux.rem(0.5)} 0`, width: "100vw", height: "100vh" },
        ze = { $nest: { [`@media (${we.pZ})`]: { margin: `${ue.ux.rem(2)} auto auto` } } },
        Ve = { outline: ue.ux.important("none") },
        qe = ue.ux.prefixedStylesheet("modal", {
          wrapper: [Ie],
          wrapperFixed: [Re],
          wrapperAbsolute: [{ position: "absolute" }],
          wrapperTopCenter: [De],
          wrapperBottomRight: [{ margin: "auto 0 0 auto" }],
          wrapperCenter: [{ margin: "auto" }],
          wrapperLight: [Ie, Fe],
          wrapperDark: [Ie, Me],
          wrapperTransparent: [Ie, { overflow: "hidden", background: "transparent" }],
          closeIconButtonContainer: [He],
          closeIcon: [Be],
          modal: [Ye],
          header: [Ne],
          closeBtn: [Oe],
          body: [Ge],
          scrollBody: [{ position: "relative", flexGrow: 1 }],
          footer: [$e],
          contentBase: [Ue],
          contentFaded: [Ue, { opacity: 0, transform: "scale(.8)" }],
          content: [Ue, { opacity: 1, transform: "none" }],
          contentWrapper: [Xe],
          scroll: [je],
          wrapperResize: [ze],
          spokenDescription: [Ve]
        });
    },
    47861: (e, t, n) => {
      n.d(t, { i: () => g });
      var r = n(27378),
        i = n(8543),
        o = n(8125),
        a = n(13351),
        s = n(89894),
        l = n(40219),
        c = n(2844),
        u = n(28043),
        d = n(77176),
        m = n(14522),
        p = n(5802),
        h = n(50790);
      const g = ({ manager: e, views: t, onNotificationClose: n = o.Q1, theme: s = {} }) => {
        const l = (function (e, t, n = {}) {
            return (i) => {
              const o = e[i.type],
                a = (e) => () => {
                  i.actions.next(e);
                };
              return i.metadata.viewType === p.P.ViewType.standard
                ? r.createElement(
                    h.DI.Wrapper,
                    {
                      key: i.id,
                      notification: i,
                      onClose: () => {
                        i.actions.next("closedByUser"), t(i);
                      },
                      theme: n
                    },
                    o(i, a)
                  )
                : r.createElement(r.Fragment, { key: i.id }, o(i, a));
            };
          })(t, n, s.view),
          g = void 0 !== s.grid ? Object.assign({}, T, s.grid) : T,
          y = e.state.view((e) => e.filter(f(p.P.Position.bottomLeft))),
          b = e.state.view((e) => e.filter(f(p.P.Position.bottomRight))),
          v = e.state.view((e) => e.filter(f(p.P.Position.top)));
        return r.createElement(
          i.F.div,
          { className: g.container },
          c
            .aj(v, b, v, (e) => e.some(m._.isHighPriority))
            .pipe(
              u.x(),
              d.U(
                (e) =>
                  e &&
                  r.createElement(
                    "div",
                    { className: g.overlay },
                    r.createElement(a.aV, {
                      positionType: "absolute",
                      key: "notificationOverlay",
                      preventClose: !0,
                      overlayType: "light",
                      alignment: "top-center",
                      animate: !0,
                      theme: { content: E.overlayContent, contentFaded: E.overlayContentFaded }
                    })
                  )
              )
            ),
          r.createElement(
            i.F.div,
            { className: g.bottomLeft },
            y.view((e) => e.map(l))
          ),
          r.createElement(
            i.F.div,
            { className: g.bottomRight },
            b.view((e) => e.map(l))
          ),
          r.createElement(
            i.F.div,
            { className: g.top },
            v.view((e) => e.map(l))
          )
        );
      };
      function f(e) {
        return (t) => t.metadata.position === e;
      }
      const y = {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: l.nt,
          width: s.ux.percent(100),
          height: s.ux.percent(100),
          pointerEvents: "none"
        },
        b = {
          position: "absolute",
          zIndex: l.nt,
          display: "flex",
          flexDirection: "column",
          width: s.ux.rem(27),
          pointerEvents: "auto",
          alignItems: "flex-end"
        },
        v = { right: s.ux.rem(l.Ig), bottom: s.ux.rem(1.5) },
        w = { bottom: s.ux.rem(1.5), left: s.ux.rem(2) },
        x = { transition: "transform .1s", transformOrigin: "center" },
        E = s.ux.stylesheet({
          notificationContainer: [y],
          notificationWrapper: [b],
          bottomRightNotificationWrapper: [b, v],
          bottomLeftNotificationWrapper: [b, w],
          topNotificationWrapper: [b, { top: 0, right: 0, left: 0, margin: "0 auto" }],
          overlayContentBase: [x],
          overlayContent: [x, { transform: "none" }],
          overlayContentFaded: [x, { transform: "scale(.95)" }]
        }),
        T = {
          container: E.notificationContainer,
          bottomLeft: E.bottomLeftNotificationWrapper,
          bottomRight: E.bottomRightNotificationWrapper,
          top: E.topNotificationWrapper
        };
    },
    41966: (e, t, n) => {
      n.d(t, { r: () => r });
      var r,
        i = n(32952);
      !(function (e) {
        e.createBuilder = function () {
          return {
            build: (e, n) => {
              const r = t();
              return { make: (t, o) => ({ metadata: e, data: n, args: o, id: r, type: t, actions: new i.xQ() }) };
            }
          };
        };
        const t = (() => {
          let e = 1;
          return () => e++;
        })();
      })(r || (r = {}));
    },
    14522: (e, t, n) => {
      n.d(t, { _: () => r });
      var r,
        i = n(5802);
      !(function (e) {
        (e.isHighPriority = function (e) {
          return e.metadata.priority > i.P.Priority.average;
        }),
          (e.isCloseAction = function (e) {
            return (
              "timeout" === e ||
              "closedByUser" === e ||
              "closedByNotificationWithMorePriority" === e ||
              "closedByMaxNotificationOnScreen" === e
            );
          });
      })(r || (r = {}));
    },
    61813: (e, t, n) => {
      n.d(t, { y: () => w });
      var r = n(8125),
        i = n(81531),
        o = n(46680),
        a = n(18625),
        s = n(80900),
        l = n(17343),
        c = n(40151),
        u = n(95093),
        d = n(2768),
        m = n(85985),
        p = n(8473),
        h = n(50628),
        g = n(2834),
        f = n(9223),
        y = n(38194),
        b = n(14522),
        v = n(5802);
      class w {
        constructor(e, t, n, r) {
          (this.state = e),
            (this._factory = t),
            (this._maxNotificationsOnScreen = n),
            (this._defaultTimeout = r),
            (this._log = i.C8.Logging.getLogger("notificationsManager"));
        }
        enqueue(e, t) {
          const n = this._factory[e].make(e, t);
          return a.P(() => {
            const t =
              n.metadata.timeout !== v.P.TimeoutDisabled
                ? s.H(n.metadata.timeout === v.P.DefaultTimeout ? this._defaultTimeout : n.metadata.timeout).pipe(l.h("timeout"))
                : c.E;
            this.state.modify((e) => {
              const t = e.filter((t, r) =>
                t.metadata.priority < n.metadata.priority
                  ? (this._log.debug(`closing ${t.type} notification, ${n.type} have higher priority`),
                    t.actions.next("closedByNotificationWithMorePriority"),
                    !1)
                  : t.id !== n.id &&
                    (!(0 === r && e.length >= this._maxNotificationsOnScreen) ||
                      (this._log.debug(
                        `closing ${t.type} notification, more than ${this._maxNotificationsOnScreen} notification on the screen`
                      ),
                      t.actions.next("closedByMaxNotificationOnScreen"),
                      !1))
              );
              return t.push(n), t;
            });
            const i = n.actions.pipe(u.T(t.pipe(d.R(n.actions.pipe(m.h(b._.isCloseAction))))));
            return i.pipe(
              p.o((0, r.ff)(b._.isCloseAction)),
              u.T(i.pipe(h.P(b._.isCloseAction))),
              g.b((t) => {
                this._log.log(b._.isHighPriority(n) ? o.i.WARN : o.i.DEBUG, `Notification ${String(e)} is ${t}`);
              }),
              f.x(() => {
                this.state.modify((e) => e.filter((e) => e.id !== n.id));
              }),
              y.B()
            );
          });
        }
      }
    },
    5802: (e, t, n) => {
      n.d(t, { P: () => r });
      var r,
        i = n(22232);
      !(function (e) {
        let t, n, r, o;
        !(function (e) {
          (e.sparkles = "sparkles"), (e.priority = "priority");
        })((t = e.Icon || (e.Icon = {}))),
          (function (e) {
            (e[(e.lowest = 0)] = "lowest"),
              (e[(e.low = 1)] = "low"),
              (e[(e.average = 2)] = "average"),
              (e[(e.high = 3)] = "high"),
              (e[(e.highest = 4)] = "highest");
          })((n = e.Priority || (e.Priority = {}))),
          (function (e) {
            (e.top = "top"), (e.bottomLeft = "bottomLeft"), (e.bottomRight = "bottomRight");
          })((r = e.Position || (e.Position = {}))),
          (function (e) {
            (e.standard = "standard"), (e.custom = "custom");
          })((o = e.ViewType || (e.ViewType = {}))),
          (e.DefaultTimeout = "DefaultTimeout"),
          (e.TimeoutDisabled = "TimeoutDisabled"),
          (e.getAriaLiveProps = (t) => {
            const n = `${t.type}-${t.id}`;
            switch (t.metadata.priority) {
              case e.Priority.highest:
              case e.Priority.high:
                return { id: n, role: "alert", "aria-live": "assertive", "aria-labelledby": n };
              case e.Priority.average:
              case e.Priority.low:
              case e.Priority.lowest:
                return { id: n, role: "status", "aria-live": "polite", "aria-labelledby": n };
              default:
                (0, i.vE)(t.metadata.priority);
            }
          });
      })(r || (r = {}));
    },
    24588: (e, t, n) => {
      n.d(t, {
        AX: () => u,
        BZ: () => m,
        FW: () => a,
        UE: () => s,
        Xd: () => p,
        Zn: () => d,
        jj: () => i,
        kl: () => c,
        mb: () => l,
        xO: () => o
      });
      var r = n(40456);
      r.zh;
      const i = r.jj,
        o = r.xO,
        a = r.FW,
        s = r.UE,
        l = (r.VR, r.mb),
        c = r.kl,
        u = r.AX,
        d = (r.lh, r.Re, r.Zn),
        m = r.BZ,
        p = r.Xd;
      r.b6, r.Aw;
    },
    4890: (e, t, n) => {
      n.d(t, { j: () => r });
      var r,
        i = n(11064),
        o = n(23239),
        a = n(76974),
        s = n(22232),
        l = n(5114);
      !(function (e) {
        let t, n, r;
        !(function (e) {
          (e.RegularLightMode = "regularLightMode"), (e.ContrastLightMode = "contrastLightMode");
        })((t = e.CardVisualMode || (e.CardVisualMode = {}))),
          (function (e) {
            e.match =
              ({ onRegular: t, onContrast: n }) =>
              (r) => {
                switch (r) {
                  case e.RegularLightMode:
                    return t();
                  case e.ContrastLightMode:
                    return n();
                  default:
                    return (0, s.vE)(r);
                }
              };
          })((t = e.CardVisualMode || (e.CardVisualMode = {}))),
          (e.toJSON = function (e) {
            return Object.assign(Object.assign({}, e), { isNew: e.isNew._value });
          }),
          (function (e) {
            (e.cozy = "cozy"), (e.compact = "compact"), (e.minimal = "minimal");
          })((n = e.Density || (e.Density = {}))),
          (e.defaultOptions = {
            features: new Set(),
            layoutDensity: n.cozy,
            isNew: a.of(l.none),
            cardVisualMode: o.h.create(t.RegularLightMode)
          }),
          (function (e) {
            function t(t, n, r) {
              return (i) => {
                switch (i) {
                  case e.cozy:
                    return t();
                  case e.compact:
                    return n();
                  case e.minimal:
                    return r();
                  default:
                    return (0, s.vE)(i);
                }
              };
            }
            (e.match = function (e, n, r) {
              return t(i.of(e), i.of(n), i.of(r));
            }),
              (e.matchL = t),
              (e.matchOrDefault = function (e) {
                return (t, n) => (r) => (r === e ? t() : n());
              });
          })((n = e.Density || (e.Density = {}))),
          (function (e) {
            (e.showLabel = "showLabel"),
              (e.enableMuteQuotedAdvice = "enableMuteQuotedAdvice"),
              (e.showAnonymousUserFooters = "showAnonymousUserFooters"),
              (e.showPremiumTrialFooters = "showPremiumTrialFooters"),
              (e.showPersistentPremiumCardLabels = "showPersistentPremiumCardLabels"),
              (e.showNewPremiumCardLabels = "showNewPremiumCardLabels"),
              (e.showPremiumOnboarding = "showPremiumOnboarding"),
              (e.a11yContrast = "a11yContrast"),
              (e.showYellowFooterForTrialUsers = "showYellowFooterForTrialUsers"),
              (e.sduiContainerStyle = "sduiContainerStyle"),
              (e.demoDocOnboardingCopyV1 = "demoDocOnboardingCopyV1"),
              (e.showOnboardingTourA11yUpdates = "showOnboardingTourA11yUpdates");
          })((r = e.Features || (e.Features = {})));
      })(r || (r = {}));
    },
    87363: (e, t, n) => {
      n.d(t, { c: () => r });
      var r,
        i = n(23239),
        o = n(5114),
        a = n(22232),
        s = n(66896);
      !(function (e) {
        e.Mock = class {
          constructor(e = {}) {
            this._previewConfig = e;
          }
          get lensPreviews() {
            return Object.entries(this._previewConfig).reduce((e, [t, n]) => {
              const r = this.getLens(t).get();
              return (
                (e[t] = Object.assign(Object.assign({}, s.R.Info.base), {
                  logo: o.none,
                  id: t,
                  title: r.title,
                  description: r.description,
                  status: n.status,
                  progress: n.progress,
                  isUnavailable: n.isUnavailable
                })),
                e
              );
            }, {});
          }
          getLens(e) {
            const t = (t) => t.lensId === e;
            if (s.R.isOutcomeId(e)) return i.h.create(new s.R.LensImpl(s.R.Info.createOutcome(e), s.R.Meta.group.empty, t));
            switch (e) {
              case s.R.SpecialId.AllAlerts:
                return i.h.create(new s.R.LensImpl(s.R.Info.allAlerts, s.R.Meta.group.empty, t));
              case s.R.SpecialId.Premium:
                return i.h.create(new s.R.LensImpl(s.R.Info.premium, s.R.Meta.group.empty, t));
              case s.R.SpecialId.FreePremiumAlerts:
                return i.h.create(new s.R.LensImpl(s.R.Info.freePremium, s.R.Meta.group.empty, t));
              case s.R.SpecialId.Plagiarism:
                return i.h.create(new s.R.LensImpl(s.R.Info.plagiarism, s.R.Meta.group.empty, t));
              case s.R.SpecialId.Priority:
                return i.h.create(new s.R.LensImpl(s.R.Info.priority, s.R.Meta.group.empty, t));
              case s.R.SpecialId.PredictionTakeaways:
                return i.h.create(new s.R.LensImpl(s.R.Info.predictionTakeaways, s.R.Meta.group.empty, t));
              case s.R.SpecialId.PredictionEmogenie:
                return i.h.create(new s.R.LensImpl(s.R.Info.predictionEmogenie, s.R.Meta.group.empty, t));
              case s.R.SpecialId.RealTimeProofit:
                return i.h.create(new s.R.LensImpl(s.R.Info.realTimeProofit, s.R.Meta.group.empty, t));
              default:
                return (0, a.vE)(e);
            }
          }
          findLens() {
            return o.none;
          }
        };
      })(r || (r = {}));
    },
    35407: (e, t, n) => {
      n.d(t, { GG: () => l, Pj: () => s });
      var r = n(98314),
        i = n(17771),
        o = n(19429),
        a = n(55415),
        s = function (e) {
          return function (t) {
            return o.r1.map((0, i.g)(o.r1)(e, t), function (e) {
              var t = (0, r._)(e, 2),
                n = t[0],
                i = t[1];
              return (0, a.Fx)(n, i);
            });
          };
        },
        l = (0, i.Y)(o.r1);
    },
    93476: (e) => {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = "",
                r = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                (n += e(t)),
                r && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, r, i, o) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var a = {};
            if (r)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = !0);
              }
            for (var c = 0; c < e.length; c++) {
              var u = [].concat(e[c]);
              (r && a[u[0]]) ||
                (void 0 !== o &&
                  (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                  (u[5] = o)),
                n && (u[2] ? ((u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")), (u[2] = n)) : (u[2] = n)),
                i && (u[4] ? ((u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}")), (u[4] = i)) : (u[4] = "".concat(i))),
                t.push(u));
            }
          }),
          t
        );
      };
    },
    54933: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    }
  }
]);
