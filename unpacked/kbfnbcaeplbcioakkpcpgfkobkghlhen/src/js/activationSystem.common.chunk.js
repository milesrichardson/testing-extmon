(self.webpackChunk = self.webpackChunk || []).push([
  [6132],
  {
    64757: (e, t, i) => {
      i.d(t, { L_: () => u, RZ: () => f, zx: () => d });
      var n = i(50858),
        a = i(55818),
        s = i(27378),
        l = i(8543),
        r = i(54001),
        o = i(31278),
        c = i(86732),
        m = i(1509),
        h = i(26215),
        p = i(94632);
      function d(e) {
        return s.createElement(h.Y, u(e, p.LI));
      }
      function u(e, t) {
        var i = (0, r.Sh)(e.className, t).className;
        return (0, a._)((0, n._)({}, e), { className: i });
      }
      !(function (e) {
        var t = (e.Animated = function (e) {
          return s.createElement(
            h.Y,
            (0, a._)((0, n._)({}, e), { animationMode: Boolean(e.animationMode) ? e.animationMode : c.m.FromClickPoint })
          );
        });
        (e.Primary = function (e) {
          return s.createElement(t, (0, n._)({ styleType: m.Z.Type.Button }, u(e, p.T$)));
        }),
          (e.Secondary = function (e) {
            return s.createElement(t, (0, n._)({ styleType: m.Z.Type.Button }, u(e, p.BD)));
          }),
          (e.Ghost = function (e) {
            return s.createElement(t, (0, n._)({ styleType: m.Z.Type.Button }, u(e, p.fk)));
          }),
          (e.Tertiary = function (e) {
            return s.createElement(t, (0, n._)({ styleType: m.Z.Type.Base }, u(e, p.UF)));
          }),
          (e.Flat = function (e) {
            return s.createElement(t, u(e, p.$H));
          }),
          (e.White = function (e) {
            return s.createElement(t, u(e, p.ix));
          }),
          (e.SidebarFlat = function (e) {
            return s.createElement(h.Y, (0, n._)({ styleType: m.Z.Type.H3Legacy }, u(e, p.HN)));
          }),
          (e.Caps = function (e) {
            return s.createElement(h.Y, (0, n._)({ styleType: m.Z.Type.H3Legacy }, u(e, p.Mp)));
          }),
          (e.Group = function (e) {
            var t = e.children,
              i = e.className,
              o = e.align,
              c = void 0 === o ? "horizontal" : o,
              m = e.sticky,
              h = e.name;
            return s.createElement(
              l.F.div,
              (0, a._)((0, n._)({ role: "group" }, (0, r.Sh)(i, "horizontal" === c ? (!0 === m ? p.vD : p.ru) : p.oc)), { "data-name": h }),
              t
            );
          });
      })(d || (d = {}));
      var f = function (e) {
        var t = e.title,
          i = e.titleAlign,
          n = e.buttonClass,
          a = e.iconClass,
          c = e.iconWidth,
          m = e.tooltipClass;
        return s.createElement(
          d,
          {
            name: "info-button",
            "aria-label": t,
            tag: h.X.div,
            title: s.createElement(l.F.div, (0, r.Sh)(p.bC, m), s.createElement("p", null, t)),
            titleAlign: i,
            className: n
          },
          s.createElement(o.JO.Info, { width: c, className: a })
        );
      };
    },
    47355: (e, t, i) => {
      i.r(t), i.d(t, { ActivationSystemFeatureImpl: () => O });
      var n = i(14601),
        a = i(76974),
        s = i(98403),
        l = i(5114),
        r = i(55415),
        o = i(23239),
        c = i(27378),
        m = i(10389),
        h = i(55649),
        p = i(37869),
        d = i(15389),
        u = i(96309),
        f = i(37902),
        y = i(90845),
        b = i(64757),
        _ = function () {
          return (
            (_ =
              Object.assign ||
              function (e) {
                for (var t, i = 1, n = arguments.length; i < n; i++)
                  for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            _.apply(this, arguments)
          );
        },
        g = function (e, t) {
          var i = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (i[n[a]] = e[n[a]]);
          }
          return i;
        },
        N = {
          bold: { fontWeight: "bolder" },
          italic: { fontStyle: "italic" },
          strikethrough: { textDecoration: "line-through" },
          regular: {}
        },
        v =
          (c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.className,
              s = g(e, ["as", "children", "className"]),
              l = i || "span";
            return c.createElement(l, _({ ref: t, className: "gds-token-typography-heading-large " + (a || "") }, s), n);
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.className,
              s = g(e, ["as", "children", "className"]),
              l = i || "span";
            return c.createElement(l, _({ ref: t, className: "gds-token-typography-heading-medium " + (a || "") }, s), n);
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.className,
              s = g(e, ["as", "children", "className"]),
              l = i || "span";
            return c.createElement(l, _({ ref: t, className: "gds-token-typography-heading-small " + (a || "") }, s), n);
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.className,
              s = g(e, ["as", "children", "className"]),
              l = i || "span";
            return c.createElement(l, _({ ref: t, className: "gds-token-typography-heading-x-small " + (a || "") }, s), n);
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.className,
              s = g(e, ["as", "children", "className"]),
              l = i || "span";
            return c.createElement(l, _({ ref: t, className: "gds-token-typography-text-large " + (a || "") }, s), n);
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.style,
              s = e.bold,
              l = e.italic,
              r = e.className,
              o = g(e, ["as", "children", "style", "bold", "italic", "className"]),
              m = i || "span";
            return c.createElement(
              m,
              _(
                {
                  ref: t,
                  style: Object.assign({}, a, s ? N.bold : {}, l ? N.italic : {}),
                  className: "gds-token-typography-text-medium " + (r || "")
                },
                o
              ),
              n
            );
          }),
          c.forwardRef(function (e, t) {
            var i = e.as,
              n = e.children,
              a = e.style,
              s = e.bold,
              l = e.italic,
              r = e.strikethrough,
              o = e.className,
              m = g(e, ["as", "children", "style", "bold", "italic", "strikethrough", "className"]),
              h = i || "span";
            return c.createElement(
              h,
              _(
                {
                  ref: t,
                  style: Object.assign({}, a, s ? N.bold : {}, l ? N.italic : {}, r ? N.strikethrough : {}),
                  className: "gds-token-typography-text-small " + (o || "")
                },
                m
              ),
              n
            );
          }));
      c.forwardRef(function (e, t) {
        var i = e.as,
          n = e.children,
          a = e.style,
          s = e.bold,
          l = e.italic,
          r = e.className,
          o = g(e, ["as", "children", "style", "bold", "italic", "className"]),
          m = i || "span";
        return c.createElement(
          m,
          _(
            {
              ref: t,
              style: Object.assign({}, a, s ? N.bold : {}, l ? N.italic : {}),
              className: "gds-token-typography-text-x-small " + (r || "")
            },
            o
          ),
          n
        );
      }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-heading-level-1 " + (a || "") }, s), n);
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-heading-level-2 " + (a || "") }, s), n);
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-heading-level-3 " + (a || "") }, s), n);
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-heading-level-4 " + (a || "") }, s), n);
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.style,
            s = e.bold,
            l = e.className,
            r = g(e, ["as", "children", "style", "bold", "className"]),
            o = i || "span";
          return c.createElement(
            o,
            _({ ref: t, style: Object.assign({}, a, s ? N.bold : {}), className: "gds-token-typoraphy-subheading " + l || 0 }, r),
            n
          );
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-paper " + (a || "") }, s), n);
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.style,
            s = e.bold,
            l = e.italic,
            r = e.strikethrough,
            o = e.className,
            m = g(e, ["as", "children", "style", "bold", "italic", "strikethrough", "className"]),
            h = i || "span";
          return c.createElement(
            h,
            _(
              {
                ref: t,
                style: Object.assign({}, a, s ? N.bold : {}, l ? N.italic : {}, r ? N.strikethrough : {}),
                className: "gds-token-typoraphy-body " + (o || "")
              },
              m
            ),
            n
          );
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.style,
            s = e.bold,
            l = e.italic,
            r = e.className,
            o = g(e, ["as", "children", "style", "bold", "italic", "className"]),
            m = i || "span";
          return c.createElement(
            m,
            _(
              {
                ref: t,
                style: Object.assign({}, a, s ? N.bold : {}, l ? N.italic : {}),
                className: "gds-token-typoraphy-small " + (r || "")
              },
              o
            ),
            n
          );
        }),
        c.forwardRef(function (e, t) {
          var i = e.as,
            n = e.children,
            a = e.className,
            s = g(e, ["as", "children", "className"]),
            l = i || "span";
          return c.createElement(l, _({ ref: t, className: "gds-token-typoraphy-button " + (a || "") }, s), n);
        });
      const E = ({ descriptionText: e, ctaText: t, onCtaClick: i, onDismiss: n, onMount: a, emotion: s, placementInfo: l }) => {
        const { referenceElement: r, placement: o, modifiers: m } = l,
          [h, _] = c.useState(null),
          { styles: g, attributes: N } = (0, p.D)(r, h, { placement: o, modifiers: m });
        return (
          y.P.useEffectOnDidMount(a),
          c.createElement(
            "div",
            { ref: _, className: d.inlinePill, style: g.popper, "data-test-attr": "inline-activation-pill", ...N.popper },
            c.createElement(u.P, { size: "small", "aria-label": "Dismiss", className: d.inlinePillCloseButton, onClick: n }),
            c.createElement(v, { className: d.inlinePillDescriptionText }, e),
            s &&
              c.createElement(f.dy, {
                size: "small-medium",
                unicodeHexArray: [s.emojiId],
                unicodeLiteral: s.emoji,
                className: d.inlinePillEmoji,
                "aria-hidden": "true"
              }),
            c.createElement(b.zx.Ghost, { className: d.inlinePillCTA, onClick: i }, t)
          )
        );
      };
      var P = i(31528),
        S = i(57050);
      const C = { cta: "See more in Grammarly", emotionHook: (e) => `Sounding ${e}` };
      var k;
      !(function (e) {
        (e.MINIMUM_TONE_COUNT = 3), (e.MINIMUM_TONE_CONFIDENCE = 0.5);
      })(k || (k = {}));
      var I = i(9629),
        T = i(68546),
        w = i(94602);
      class O {
        constructor(e) {
          (this._params = e),
            (this._subs = new n.w()),
            (this._log = h.Y.create("ActivationSystemFeatureImpl")),
            (this._emogenieState = o.h.create({ prevalentEmotion: l.none, allEmotions: l.none })),
            (this._areOtherGrammarlyPopupsOpen = o.h.create(!1)),
            (this._fieldContainer = l.none),
            (this._composeFieldContainer = l.none),
            (this._isCompose = !1),
            (this._toolbarInfo = o.h.create(l.none)),
            (this._inlinePillPlacement = o.h.create(l.none)),
            (this._isMinimized = o.h.create(!1)),
            (this._createToolbarInfoSubscription = () =>
              (0, S.zG)(this._fieldContainer, l.map(T.x.createToolbarVisibleObservable), l.getOrElse((0, S.a9)(a.of(null)))).subscribe(
                (e) => {
                  (0, S.zG)(e, l.fromNullable, s.wW(this._toolbarInfo));
                }
              )),
            (this._createIsMinimizedSubscription = () =>
              (0, S.zG)(
                this._composeFieldContainer,
                l.filter(() => this._isCompose),
                l.map(T.x.createMinimizableComposeContainerVisibilityObservable),
                l.getOrElse((0, S.a9)(a.of(null)))
              ).subscribe((e) => {
                (0, S.zG)(
                  e,
                  l.fromNullable,
                  l.map((e) => !e.visible),
                  l.getOrElse(() => !1),
                  s.wW(this._isMinimized)
                );
              })),
            (this._createInlinePillPlacementAtom = () =>
              o.h.combine(this._toolbarInfo, this._isMinimized, (e, t) =>
                (0, S.zG)(
                  l.Do,
                  l.bind("toolbar", () => e),
                  l.bind("sendButtonContainer", () => this._sendButtonContainer),
                  l.filter(() => !t),
                  l.map(({ toolbar: e, sendButtonContainer: t }) => {
                    const i = e.visible ? e.el : t,
                      n = e.visible ? 8 : 20;
                    return (0, w.tw)(i, n);
                  })
                )
              )),
            (this._createEmogenieStateSubscription = () =>
              this._params.emogenieService.viewState
                .view(r.H6("report", "prevalentEmotion"))
                .subscribe(
                  (0, S.ls)(
                    ({ report: e, prevalentEmotion: t }) => ({
                      allEmotions: l.fromNullable(null == e ? void 0 : e.emotions),
                      prevalentEmotion: l.fromNullable(t)
                    }),
                    s.wW(this._emogenieState)
                  )
                )),
            (this._createGrammarlyPopupsOpenSubscription = () =>
              o.h
                .combine(
                  this._params.assistantDynamicService.assistantOpenState.view((e) => "open" === e),
                  this._params.cheetahDynamicService.assistantState.view((e) => "opened" === e.kind),
                  this._params.gButtonPopupState.view((e) => "none" !== e.type),
                  (e, t, i) => e || t || i
                )
                .subscribe(s.wW(this._areOtherGrammarlyPopupsOpen))),
            (this._resetActivationState = () => {
              this._params.actions._resetActivationSystemSettings();
            }),
            (this._onInlinePillCTAClick = () => {
              this._log.debug("Inline pill CTA clicked"),
                this._params.gnar.activationSystemInlinePillCtaClick("inlinePill"),
                this._params.openEmogenieReport({ type: P.WT.activationSystem }),
                this._params.actions.setActivationSystemToneInlinePillCTAClicked().then(() => {
                  this.dispose();
                });
            }),
            (this._onDismissInlinePill = () => {
              this._log.debug("Dismissing inline pill"),
                this._params.gnar.activationSystemInlinePillDismissClick("inlinePill"),
                this._params.actions.setActivationSystemToneInlinePillDismissed().then(() => {
                  this.dispose();
                });
            }),
            (this._onInlinePillShown = () => {
              this._log.debug("Inline pill shown"),
                this._params.gnar.activationSystemInlinePillPopupShow(),
                this._params.actions.setActivationSystemToneInlinePillSeen();
            }),
            (this._textHasSufficientEmotionsToRenderPill = (e, t) =>
              e.length >= k.MINIMUM_TONE_COUNT && t.confidence >= k.MINIMUM_TONE_CONFIDENCE),
            (this._fieldContainer = w.jK(this._params.textField)),
            (this._composeFieldContainer = w.cY(this._params.textField)),
            (this._sendButtonContainer = w.cB(this._params.textField)),
            (this._isCompose = w.mh(this._composeFieldContainer)),
            this._subs.add(this._createToolbarInfoSubscription()),
            this._subs.add(this._createIsMinimizedSubscription()),
            (this._inlinePillPlacement = this._createInlinePillPlacementAtom()),
            this._subs.add(this._inlinePillPlacement.subscribe()),
            this._subs.add(this._createEmogenieStateSubscription()),
            this._subs.add(this._createGrammarlyPopupsOpenSubscription());
        }
        get inlinePillUI() {
          const { cta: e, emotionHook: t } = C;
          return o.h.combine(
            this._emogenieState,
            this._areOtherGrammarlyPopupsOpen,
            this._params.csPageState.view("activationSystem"),
            this._params.user,
            this._params.checkingStatus,
            this._inlinePillPlacement,
            (i, n, a, s, r, o) =>
              (0, S.zG)(
                l.Do,
                l.filter(() => !(0, w.Zl)(a)),
                l.bind("allEmotions", () => i.allEmotions),
                l.bind("prevalentEmotion", () => i.prevalentEmotion),
                l.bind("inlinePillPlacement", () => o),
                l.filter(({ allEmotions: e, prevalentEmotion: t }) => this._textHasSufficientEmotionsToRenderPill(e, t)),
                l.filter(() => s.anonymous),
                l.filter(() => !n),
                l.filter(() => "test" === this._params.experimentClient.getTreatment(I.p.AspToneInlinePillGmail)),
                l.fold(S.gn, ({ prevalentEmotion: i, inlinePillPlacement: n }) =>
                  c.createElement(E, {
                    ctaText: e,
                    descriptionText: t(i.name.toLowerCase()),
                    onCtaClick: this._onInlinePillCTAClick,
                    onDismiss: this._onDismissInlinePill,
                    onMount: this._onInlinePillShown,
                    placementInfo: n,
                    emotion: i,
                    checkingInProgress: r === m.Hq.inProgress
                  })
                )
              )
          );
        }
        dispose() {
          this._log.debug("Disposing"), this._subs.unsubscribe();
        }
      }
    },
    15389: (e) => {
      e.exports = {
        inlinePill: "BYavB",
        fadeIn: "zG7Sj",
        inlinePillCloseButton: "qkYqs",
        inlinePillDescriptionText: "sRTeW",
        inlinePillCTA: "UPAxJ",
        spin: "UclXr"
      };
    }
  }
]);
