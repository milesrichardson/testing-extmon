(self.webpackChunk = self.webpackChunk || []).push([
  [1196],
  {
    87982: (e, t, i) => {
      i.r(t),
        i.d(t, {
          PlagiarismViewModelImpl: () => he,
          createPlagiarismEntities: () => Ie,
          createPlagiarismViewModels: () => ue,
          setupSduiManagement: () => u
        });
      var a = i(80358),
        s = i(24055),
        r = i(12054),
        n = i(55826),
        l = i(5114),
        o = i(83078),
        c = i(40327),
        d = i(85985),
        p = i(77176);
      function u(e, t, i) {
        const u = e
            .view((e) =>
              (0, c.pipe)(
                e,
                l.map((e) =>
                  e.sduiBufferService.capiEvents.pipe(
                    d.h(a.h.is("sdui_add", "sdui_remove", "sdui_update")),
                    d.h(s.e.isSduiEvent),
                    p.U(r.al.fromSource(r.i5.CAPI))
                  )
                ),
                o.MH
              )
            )
            .get(),
          g = new n.A(i, u, t),
          { sduiFeedbackService: m, capiClient: h } = e
            .view((e) =>
              (0, c.pipe)(
                e,
                l.map((e) => ({ sduiFeedbackService: e.sduiFeedbackService, capiClient: e.capiClient })),
                o.MH
              )
            )
            .get();
        return { sduiFeedbackService: m, capiClient: h, sduiManager: g };
      }
      var g = i(31442),
        m = i(64998),
        h = i(84174),
        v = i(52976),
        f = i(56913),
        A = i(95195),
        b = i(92843),
        I = i(71249),
        P = i(95574),
        S = i(55415),
        w = i(8125),
        C = i(23239),
        y = i(99861),
        E = i(20594),
        M = i(6100),
        k = i(66896),
        R = i(74660),
        B = i(4890),
        F = i(9922),
        L = i(76974),
        D = i(23063),
        U = i(24713),
        T = i(2834),
        q = i(32952),
        G = i(40151),
        x = i(2844),
        O = i(93508),
        H = i(16118),
        V = i(60797),
        j = i(16782),
        z = i(41398),
        W = i(66310),
        Q = i(35416),
        _ = i(30013),
        Z = i(73841),
        K = i(89770),
        N = i(57050),
        $ = i(13313),
        J = i(54216),
        X = i(57757),
        Y = i(54466),
        ee = i(83167),
        te = i(48521),
        ie = i(81531),
        ae = i(35607),
        se = i(20291),
        re = i(52098),
        ne = i(14592),
        le = i(13299),
        oe = i(66866),
        ce = i(21619),
        de = i(36689),
        pe = i(56143);
      const ue = ({ sduiEngine: e, engine: t, capiProxy: i, ded: a, showPlagiarismAlerts: s, environment: r }) => {
        const n = ie.C8.Logging.getLogger("gDocs.PlagiarismEngine"),
          c = new F.w.Keeper(),
          d = new g._(e.sduiManager.state),
          u = {
            features: new Set([E.IG.Features.showCardLabelInOutcomes]),
            cardLayoutDensityMode: B.j.Density.minimal,
            shouldAnimateAlertApply: E.IG.Default.shouldAnimateAlertApply,
            cardVisualMode: C.h.create(B.j.CardVisualMode.RegularLightMode)
          },
          S = (0, E.Ls)(
            () => A.left({ kind: "default", error: new Error("should not use hydration to render sdui cards") }),
            t.alertsReader,
            u,
            () => L.of(l.none),
            l.none
          ),
          w = y.p.getCapabilities(S, t.alertsReader),
          z = (0, N.a9)(N.yR),
          te = (e) => z,
          ue = J.t.create(J.t.defaultLensFilters, {
            ...J.t.defaultTextFilters,
            [k.R.SpecialId.Closed]: N.jv,
            [k.R.SpecialId.AllAlerts]: R.bZ.belongsToAllAlerts
          }),
          he = C.h.create($.A.defaultState),
          ve = new re.t(he.view("lenses"), ue, t.sessionModel.scoreStatus),
          fe = { create: (e, t) => M.v.WithSuccess.create(e, t, y.p.equatable.structEq, y.p.defaultOrd(w)) },
          Ae = _.v.createWithExternalItems(fe, w),
          be = new K.oq(
            t.alertsList.state,
            t.alertsReader,
            he.view("lenses"),
            t.positionManager,
            ve,
            (e, t, i, a, s) => (
              ((e) => {
                (0, N.zG)(
                  e,
                  o.bw((e) => {
                    c.push(
                      d.feed
                        .pipe(
                          D.q(1),
                          U.j("cards"),
                          T.b(
                            (0, N.ls)(
                              b.v.filter(N.jv, N.jv, (t) => t.alertIds.includes((0, N.MZ)(e.alert.id))),
                              b.v.foldMap(I.uZ())((0, N.a9)(I.cS), (0, N.a9)(I.cS), I.of),
                              I.YM,
                              o.bw((e) => {
                                requestAnimationFrame(() => {
                                  (0, N.zG)(
                                    d.focusCard(e.id),
                                    A.fold((e) => n.warn("Error on focusing SDUI item in a new lens", e), N.Q1)
                                  );
                                });
                              })
                            )
                          )
                        )
                        .subscribe()
                    );
                  })
                );
              })(a),
              Ae(
                e,
                t,
                i,
                a,
                (0, N.zG)(
                  s,
                  l.filter((e) => k.R.isWithAlertsId(e.id))
                )
              )
            ),
            te,
            w,
            ue
          ),
          Ie = C.h.create(be.emptyState(k.R.SpecialId.Plagiarism).patch({ alertSource: R.l$.sidebar })),
          Pe = M.v.Items.getRemoveDisposedItemsTransformer(w),
          Se = m.i.DisablePrevNextButtons.create(w),
          we = M.v.Items.getItemsPositionsUpdateTransformer(w),
          Ce = ee.Py.getDefaultBehavior(y.p.getActiveFocusableItem, w),
          ye = C.h.create(!0),
          Ee = C.h.create(k.R.SpecialId.AllAlerts),
          Me = (0, ee.u0)(() => a.getCursor().index, be),
          ke = (0, ee.VC)(
            be,
            Me,
            Ee,
            w,
            () => !1,
            () => !1
          ),
          Re = ee.sR.getStateTransformer(Ce, ke, w, ee.sR.getShouldAutoFocus(ye, w), N.Q1, Ee),
          Be = (0, N.ls)(Pe, P.L9(Re), P.L9(Se), P.L9(we)),
          Fe = new Y.Xx(
            { flush: () => a.flushChanges() },
            new q.xQ(),
            S,
            t.alertsService,
            t.alertsReader,
            () => Promise.resolve(),
            () => Promise.resolve(),
            (0, N.zG)(
              t.mutedAlertsCategoriesModel,
              l.map((e) => ({ model: e, openSuggestionsManagement: () => self.open((0, f.Um)().suggestionsSettings) }))
            ),
            l.none,
            N.jv,
            y.p.getActiveFocusableItem,
            w,
            Ie,
            r,
            { bufferTransitions: !0, showGbPrompt: !1 }
          ),
          Le = new h.q(e.sduiFeedbackService, w, Ie, e.sduiManager, d, t.alertsReader, e.capiClient, Fe, r),
          De = (0, N.zG)(ee.sR.focusFirstCardAfterBigCheck(Ie, C.h.create(i.checkingState), C.h.create(!0), { bigPaste: G.E }), (e) =>
            ee.sR.getSideEffect(e, w)
          ),
          Ue = (0, ne.xl)(Ie, ue, L.of(), C.h.create(!1), C.h.create(!0)),
          Te = x.aj([Ue, s]).pipe(p.U(([e, t]) => (t ? e : N.jv))),
          qe = new ne.o$(
            t.alertsList,
            t.alertsReader,
            t.positionManager,
            t.alertsService,
            a,
            Ie,
            Te,
            y.p.getActiveFocusableItem,
            L.of(void 0),
            !1
          ),
          Ge = new ae.o(() => A.right(void 0)),
          xe = (0, le.hp)(Ie, qe, C.h.create(16), Ge, a, n),
          Oe = t.alertsReader,
          He = Ie.view(Q.nL.getActiveAlertHighlight(y.p.getActiveFocusableItem)),
          Ve = new ce.mN(
            a,
            qe,
            t.alertsReader,
            He,
            Ie.view((e) => e.currentLens.meta.filter)
          ),
          je = [
            De,
            v.P.SideEffects.createSDUIFeedSideEffect(
              { ...w, findNextAlert: (0, N.a9)(l.none), selectItemByAlert: () => N.yR },
              d.feed.pipe(
                p.U(l.some),
                O.O(l.none),
                H.G(),
                p.U(([e, t]) =>
                  (0, N.zG)(
                    o.gz(e, t),
                    l.filter(([e, t]) => e.feedId === t.feedId),
                    l.map(([, e]) => ({ ...e, cards: (0, N.zG)(e.cards, b.v.filter(N.jv, N.W8, N.W8)) })),
                    l.alt(() => t)
                  )
                ),
                V.oA
              ),
              y.p.sduiToChecksFeedOrd(w),
              t.alertsReader
            ),
            ge(d, w),
            ...Le.getApplicatorEffects(),
            ...Fe.getApplicatorEffects(),
            Y.dv.changeAlertEffect(
              Ie,
              Fe,
              S,
              y.p.getActiveFocusableItem,
              t.alertsReader,
              l.some(xe),
              Me,
              n.getLogger("CardsViewModelEffects.changeAlertEffect")
            ),
            se.R7(Ie, Ge, w, (0, N.MZ)(Fe.actionEvents)),
            me(Le.sduiActionEvents, L.of(!0), w),
            (0, de.A7)(Ve, Ie, !0),
            oe.EQ.focusMarkByActiveAlert(Ie, qe, Oe, y.p.getActiveFocusableItem, n.getLogger("MarksEffects.focusMarkByActiveAlert")),
            oe.EQ.highlightMarkByHighlightedCard(Fe, Ie, qe, Oe, w, n.getLogger("MarksEffects.highlightMarkByHighlightedCard")),
            ((ze = Le.sduiActionEvents),
            (We = pe.u),
            {
              id: "sduiCopyToClipboardEffect",
              when: k.R.isWithAlertsId,
              what: Q.nL.Effect.Applicator.create(
                ze.pipe(
                  p.U(
                    (e) => (t) => (
                      e.actions.forEach((e) => {
                        "copyToClipboard" === e.type &&
                          (0, N.zG)((0, X.v)(e.text), D.q(1))
                            .pipe(W.w(() => We.enqueue("referenceCopied")))
                            .subscribe();
                      }),
                      t
                    )
                  )
                )
              )
            })
          ];
        var ze, We;
        const Qe = new Z.l(Ie, be, t.alertsReader, t.alertsService, je, y.p.getActiveFocusableItem, Be),
          _e = new j.t();
        return {
          ...e,
          checksFeedFlow: () => y.p.createCardListFlow(Fe)(Fe, Ie.lens(Q.nL.Prism.getLens()), _e, L.of(!1), w, y.p.listItemOrd),
          sduiFeedManager: d,
          handleSduiAction: (e) => {
            Le.sduiActionEvents.next(e);
          },
          capabilities: w,
          lensState: Ie,
          trackPlagiarismAlertsEditing: qe.getPlagiarismAlertsEditingTracker(),
          dispose: () => {
            Qe.dispose(), Fe.dispose(), Le.dispose(), c.dispose();
          }
        };
      };
      function ge(e, t) {
        return {
          id: "SDUIItemRemoveSideEffect",
          when: k.R.isWithAlertsId,
          what: Q.nL.Effect.Applicator.create(
            e.feed.pipe(
              p.U((e) => (i) => {
                const a = (0, N.zG)(
                  e.cards,
                  b.v.reduce(
                    [],
                    (e, a) =>
                      (0, N.zG)(
                        i.currentLens.items.get(a.id),
                        l.map(S.ei("value")),
                        l.filter((0, w.Kg)((0, N.ff)(te.o.isAnimatable), (0, N.ff)(te.o.isAnimatingRemoval))),
                        l.map(t.remove(N.W8, N.W8)),
                        l.fold(
                          () => e,
                          (t) => (e.push(t), e)
                        )
                      ),
                    N.yR,
                    N.yR
                  )
                );
                if (a.length > 0) {
                  const e = i.currentLens.items.add(a);
                  return Q.nL.Prism.getLens().compose(M.v.Prism.items).set(e, i);
                }
                return i;
              })
            )
          )
        };
      }
      function me(e, t, i) {
        return {
          id: "sduiFocusEffect",
          when: k.R.isWithAlertsId,
          what: Q.nL.Effect.Applicator.create(
            e.pipe(
              z.M(t),
              p.U(
                ([{ actions: e, cardId: t }, a]) =>
                  (s) =>
                    a && Boolean(e.find((e) => "notify" === e.type && "focus" === e.userAction)) && Q.nL.hasItems(s)
                      ? (0, N.zG)(
                          Q.In.getActiveItemOfType(y.p.isAlertRefSDUI)(s.currentLens),
                          l.filter((e) => !["focused", "removed"].includes(e.visualState.transition.type)),
                          l.map(() => Q.nL.Prism.getLensWithItems().modify(i.selectItemById((0, N.MZ)(t)), s)),
                          l.getOrElse((0, N.a9)(s))
                        )
                      : s
              )
            )
          )
        };
      }
      class he {
        constructor(e, t) {
          (this._plagiarismViewModelsFactory = e),
            (this._wrapNotifyPayload = t),
            (this.isShouldShowPlagiarismButton = C.h.create(!1)),
            (this.plagiarismButtonActions = C.h.create(l.none)),
            (this.plagiarismEngine = C.h.create(l.none));
        }
        setShowPlagiarismButton(e) {
          this.isShouldShowPlagiarismButton.set(e);
        }
        setPlagiarismButtonActions(e) {
          this.plagiarismButtonActions.set(l.some(e));
        }
        setPlagiarismEngine(e) {
          this.plagiarismEngine.set(l.some(e));
        }
        openPlagiarismPage() {
          const e = this._plagiarismViewModelsFactory();
          this.setPlagiarismEngine(e),
            l.isSome(this.plagiarismButtonActions.get()) && (0, c.pipe)(this.plagiarismButtonActions.get(), o.MH, e.handleSduiAction);
        }
        closePlagiarismPage() {
          (0, c.pipe)(
            this.plagiarismEngine.get(),
            o.bw((e) => e.handleSduiAction(this._wrapNotifyPayload([{ type: "disablePlagiarismCheck" }], "")))
          );
        }
      }
      var ve = i(11064),
        fe = i(33194),
        Ae = i(4694),
        be = i(79880);
      function Ie(e, t, i) {
        const a = (e, t, i, s) =>
            s.forEach((s) => {
              switch (s.type) {
                case "notify":
                  return void t.sduiFeedbackService.sendUserAction(s.sourceId || i.sourceId, s.userAction);
                case "enablePlagiarismCheck":
                  return void e.openPlagiarism();
                case "closePopover":
                  return void t.sduiManager.popoverManager.removePopover(s.rootPopoverId);
                case "interactPopover":
                  switch (
                    ((0, N.zG)(t.sduiManager.popoverManager.getInteractionActions(s.rootPopoverId, s.popoverViewId, s.interaction), (s) =>
                      a(e, t, i, s)
                    ),
                    s.interaction)
                  ) {
                    case be.fP.Fulfill:
                    case be.fP.Dismiss:
                      t.sduiManager.popoverManager.removePopover(s.rootPopoverId);
                  }
                  return;
                default:
                  return;
              }
            }),
          s = (t) => ({
            handleGButtonPopoverAction: (i) => {
              l.isSome(e) && a(t, e.value, i, i.actions);
            }
          });
        return (0, N.zG)(
          e,
          l.fold(
            () => l.none,
            (e) => {
              const a = t({ sduiEngine: e, ...i });
              return l.some({
                plagiarismVM: new he((0, ve.of)(a), Ae.Zq),
                plagiarismButtonSub: e.sduiManager.state.pipe(p.U((e) => fe.D1.GButton.getPlagiarismContent(e))),
                popover:
                  ((r = e.sduiManager),
                  r.popoverManager.activePopoverView.view(
                    l.chain((e) => ("component" === e.anchor.kind && "gButton:plagiarism" === e.anchor.id ? l.some(e) : l.none))
                  )),
                popoverActionsHandler: s,
                trackPlagiarismAlertsEditing: a.trackPlagiarismAlertsEditing
              });
              var r;
            }
          )
        );
      }
    },
    99861: (e, t, i) => {
      i.d(t, { p: () => a });
      var a,
        s = i(57050),
        r = i(35214),
        n = i(40327),
        l = i(33194),
        o = i(74660),
        c = i(7910),
        d = i(16892),
        p = i(48521),
        u = i(35416),
        g = i(6100),
        m = i(5114),
        h = i(45701),
        v = i(8125),
        f = i(22232),
        A = i(34217),
        b = i(52976),
        I = i(98182),
        P = i(74813),
        S = i(60984);
      !(function (e) {
        function t(e) {
          return u.nL.Items.mapper((e) => e.kind, { [b.P.Kind]: e });
        }
        function i(e) {
          return e.kind === b.P.Kind;
        }
        function a() {
          return { viewState: () => (e) => (e.kind === b.P.Kind ? { view: e, kind: "alertRefSDUI" } : {}) };
        }
        (e.isSelectableItem = i),
          (e.getActiveFocusableItem = (e) =>
            ((e) => (0, n.pipe)(u.In.getActiveItemOfType(i)(e), m.chain(b.P.Capabilities.toAlertItem)))(e)),
          (e.checksFeedItemsMapper = t),
          (e.isAlertRefSDUI = i),
          (e.defaultOrd = (t) =>
            (0, r.fold)(h.getMonoid())([
              (0, n.pipe)(h.ordBoolean, h.contramap((0, v.ff)(b.P.Item.isBulkAcceptSDUI))),
              (0, n.pipe)(h.ordBoolean, h.contramap(b.P.Item.isBulkDismissSDUI)),
              e.getByActiveAlertPositionOrd(t)
            ])),
          (e.sduiToChecksFeedOrd = function (t) {
            return (i) =>
              h.fromCompare((a, s) =>
                I.e.isSDUIItem(a) && I.e.isSDUIItem(s) ? I.e.getOrd(i).compare(a, s) : e.getByActiveAlertPositionOrd(t).compare(a, s)
              );
          }),
          (e.getByActiveAlertPositionOrd = (e) =>
            (0, r.fold)(h.getMonoid())([
              (0, n.pipe)(
                o.h$.ordHRange,
                h.contramap((t) =>
                  (0, n.pipe)(
                    e.hasActiveAlert(t),
                    m.map((e) => e.alert),
                    m.getOrElse(() => ({ getHighlightRanges: () => [{ start: 0, end: 0 }] }))
                  )
                )
              )
            ])),
          (e.item = () => A.UI.Union.make("kind", { alertRefSDUI: P.p.SquashedListCard(), empty: S.Q.Empty })),
          (e.viewState = a),
          (e.createCardListFlow = (e) =>
            (0, c.sJ)((t) => {
              switch (t.key) {
                case "empty":
                  break;
                case "alertRefSDUI":
                  e.actionEvents.next(t.action);
                  break;
                default:
                  (0, f.L0)(t);
              }
            })),
          (e.listItemOrd = (e) => h.contramap((e) => e.cell.item.view)(e).compare);
        const w = { equals: (e, t) => e.kind === t.kind && d.s.eqById.equals(e, t) },
          C = (e) => ({
            equals: (t, i) => {
              const a = { [b.P.Kind]: e };
              return w.equals(t, i) && ((s = (e) => e.kind), (r = a), (e, t) => r[s(e)].equals(e, t))(t, i);
              var s, r;
            }
          });
        function y() {
          return { changePosition: (e) => t(b.P.Capabilities.changePosition(e)) };
        }
        function E() {
          return {
            completeTransition: (e) => t(b.P.Capabilities.animatable.completeTransition(e)),
            transitionTo: (e) => t(b.P.Capabilities.animatable.transitionTo(e)),
            changeVisualState: (e) => t(b.P.Capabilities.animatable.changeVisualState(e))
          };
        }
        function M() {
          return {
            select: (e, i) => t(b.P.Capabilities.select.select(e, i)),
            selectByAlert: (e, i, a) => t(b.P.Capabilities.select.selectByAlert(e, i, a)),
            unselect: (e, i) => t(b.P.Capabilities.select.unselect((0, s.MZ)(e), i))
          };
        }
        function k() {
          return {
            removeAlertFromItem: (e, i) =>
              t((t) => (t.id === l.D1.SuccessReport.ID ? t : b.P.Capabilities.removeAlert.removeAlertFromItem(e, i)(t)))
          };
        }
        function R() {
          return { remove: (e, i) => t(b.P.Capabilities.remove.remove(e, i)) };
        }
        function B() {
          return { updateWithAlerts: (e) => t(s.yR) };
        }
        function F() {
          return { nextAlert: t(() => m.none), prevAlert: t(() => m.none) };
        }
        function L() {
          return { updateUserInput: (e) => t(s.yR) };
        }
        (e.equatable = { structEq: C(b.P.eq), idEq: C(w), visualStateEq: C(b.P.eq) }),
          (e.changePosition = y),
          (e.disposable = { isScheduledToDispose: t(b.P.Capabilities.disposable.isScheduledToDispose) }),
          (e.hidable = { isHidden: t(p.o.isHidden) }),
          (e.animatableItem = E),
          (e.hasAlertsQueries = {
            isSelectableByAlert: (e) => t(b.P.Capabilities.hasAlerts.isSelectableByAlert(e)),
            hasAlert: (e) => t(b.P.Capabilities.hasAlerts.hasAlert(e)),
            hasActiveAlert: t(b.P.Capabilities.hasAlerts.hasActiveAlert)
          }),
          (e.changePositionStrategyQueries = { useReferenceHeightOnRemove: t(s.jv) }),
          (e.select = M),
          (e.removeAlert = k),
          (e.remove = R),
          (e.updateWithAlert = B),
          (e.releaseAlert = () => g.v.Capabilities.getAlertReleaser({ ...k(), ...e.disposable })),
          (e.unselectable = () => g.v.Capabilities.getUnselectable(u.In.getActiveItem, { ...M(), isScheduledToDispose: s.jv })),
          (e.selectableByAlert = () =>
            g.v.Capabilities.getSelectableByAlert(u.In.getActiveItem, {
              ...e.hasAlertsQueries,
              ...M(),
              ...g.v.Capabilities.getHasChecksFeed(),
              ...e.disposable
            })),
          (e.selectableById = () => g.v.Capabilities.getSelectableById(u.In.getActiveItem, { ...M(), isScheduledToDispose: s.jv })),
          (e.updateMeta = () => ({ updateMeta: g.v.Capabilities.getMetaUpdatable().updateMeta })),
          (e.animatableFeed = (e) => g.v.Capabilities.getAnimatable(e, { ...k(), ...E(), ...g.v.Capabilities.getHasChecksFeed() })),
          (e.hasPriorityToggle = () => g.v.WithPriority.getHasPriorityToggle({ ...E(), ...e.hasAlertsQueries, ...e.disposable })),
          (e.alignable = { isValidToAlign: t((t) => !e.disposable.isScheduledToDispose(t)) }),
          (e.alertIterator = F),
          (e.itemReleaser = () => g.v.Capabilities.getItemReleaser()),
          (e.hasAlerts = g.v.Capabilities.getHasAlerts),
          (e.hasUserInput = L),
          (e.verifiable = () => g.v.Capabilities.getVerifiable(e.disposable)),
          (e.cloneable = () => ({ clone: t(d.s.Capabilities.getPojoCloneable().clone) }));
        const D = {
          getFeatures: t((e) =>
            b.P.Item.isBulkDismissSDUI(e) ? [b.P.Features.BulkDismiss] : b.P.Item.isBulkAcceptSDUI(e) ? [b.P.Features.BulkAccept] : []
          )
        };
        e.getCapabilities = function (t, i) {
          return {
            ...a(),
            ...e.disposable,
            ...e.hidable,
            ...e.equatable,
            ...L(),
            ...e.cloneable(),
            ...y(),
            ...E(),
            ...M(),
            ...R(),
            ...k(),
            ...B(),
            ...e.hasAlertsQueries,
            ...e.changePositionStrategyQueries,
            ...e.alignable,
            ...e.releaseAlert(t),
            ...e.unselectable(t),
            ...e.selectableByAlert(t),
            ...e.selectableById(t),
            ...e.updateMeta(t),
            ...e.animatableFeed(t),
            ...e.hasPriorityToggle(t),
            ...e.itemReleaser(),
            ...D,
            ...e.verifiable(),
            ...e.cloneable(),
            ...e.hasAlerts(F(), i, () => e.isSelectableItem, { ...e.hasAlertsQueries, ...e.disposable })
          };
        };
      })(a || (a = {}));
    },
    57757: (e, t, i) => {
      i.d(t, { v: () => r });
      var a = i(44586),
        s = i(95195);
      function r(e, t = self) {
        return new a.y((i) => {
          var a, r;
          (null === (r = null === (a = t.navigator) || void 0 === a ? void 0 : a.clipboard) || void 0 === r ? void 0 : r.writeText)
            ? t.navigator.clipboard
                .writeText(e)
                .then(() => i.next(s.right(void 0)))
                .catch((e) => i.next(s.left(new Error(String(e)))))
            : i.next(s.left(new Error("The Clipboard API is not available.")));
        });
      }
    }
  }
]);
