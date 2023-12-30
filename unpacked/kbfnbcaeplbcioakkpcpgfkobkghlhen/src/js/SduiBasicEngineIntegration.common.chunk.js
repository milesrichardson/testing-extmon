(self.webpackChunk = self.webpackChunk || []).push([
  [637],
  {
    12989: (e, t, s) => {
      s.d(t, { G: () => a });
      var i = s(23239),
        n = s(5114),
        o = s(624);
      class a extends o.J {
        constructor() {
          super(), (this._popoverActionsHandler = i.h.create(n.none));
        }
        setPopoverActionsHandler(e) {
          this._popoverActionsHandler.set(n.some(e));
        }
        get popoverActionsHandlerAtom() {
          return this._popoverActionsHandler;
        }
      }
    },
    517: (e, t, s) => {
      s.d(t, { z: () => o });
      var i = s(5114),
        n = s(23239);
      class o {
        constructor() {
          (this.activePopoverStack = n.h.create(i.none)),
            (this.activePopoverView = n.h.create(i.none)),
            (this._popoverActionsHandler = n.h.create(i.none));
        }
        addPopover(e, t) {}
        getInteractionActions(e, t, s) {
          return [];
        }
        removePopover(e, t) {}
        switchView(e) {}
        get popoverActionsHandlerAtom() {
          return this._popoverActionsHandler;
        }
        setPopoverActionsHandler(e) {}
      }
    },
    65586: (e, t, s) => {
      s.r(t), s.d(t, { createSduiBasicEngine: () => w, default: () => f });
      var i = s(5114),
        n = s(21038),
        o = s(24055),
        a = s(12054),
        r = s(78929),
        d = s(31903),
        c = s(9922),
        p = s(85985),
        l = s(77176),
        h = s(80358),
        u = s(84966),
        v = s(57050),
        m = s(86782),
        A = s(12989),
        g = s(517);
      const w = ({
          sduiBufferService: e,
          alertState: t,
          getByRawAlertId: s,
          sendUserAction: w,
          environment: f,
          capiClient: C,
          sduiPopoversSupported: b = !1
        }) => {
          const _ = new c.w.Keeper(),
            G = (0, v.ls)(
              (e) => e.toString(),
              s,
              i.fromNullable,
              i.map((e) => n.j.AlertId.from(e.id))
            ),
            S = e.capiEvents.pipe(
              p.h(h.h.is("sdui_add", "sdui_remove", "sdui_update")),
              p.h(o.e.isSduiEvent),
              l.U(a.al.fromSource(a.i5.CAPI))
            ),
            P = b ? new A.G() : new g.z(),
            x = new r.G(S, G, P),
            y = new d.Q({ sendUserAction: w }),
            E = new m.U(x, y, f, C, {
              openAssistant(e) {
                throw new Error("Method is not implemented");
              },
              closePopover: (t) => e.pushCapiSduiEvent({ kind: "sdui_remove", sduiRootId: u.t_.Id.create(t), rev: 0 })
            });
          return (
            P.setPopoverActionsHandler(E),
            _.push(
              t.subscribe((e) => x.notifyAlertsChanged()),
              e.capiEvents
                .pipe(
                  p.h(h.h.is("session_started")),
                  p.h((e) => e.isNewSession)
                )
                .subscribe((e) => x.onSessionStarted()),
              e.capiEvents
                .pipe(
                  p.h(h.h.is("finish")),
                  p.h((e) => 0 === e.revision)
                )
                .subscribe((e) => x.onFirstCheckingFinished()),
              x
            ),
            {
              sduiBufferService: e,
              sduiManager: x,
              sduiFeedbackService: y,
              dispose: () => {
                _.dispose();
              }
            }
          );
        },
        f = { createSduiBasicEngine: w };
    },
    86782: (e, t, s) => {
      s.d(t, { U: () => k });
      var i = s(23239),
        n = s(72812),
        o = s(14454),
        a = s(57757),
        r = s(5114),
        d = s(31668),
        c = s(22232),
        p = s(71249),
        l = s(73975),
        h = s(57050),
        u = s(40151),
        v = s(95195),
        m = s(8125);
      class A {
        constructor() {
          (this.feed = u.E),
            (this.currentFeed = r.none),
            (this.onFeedRemove = u.E),
            (this.onFeedEmpty = u.E),
            (this.header = u.E),
            (this.footer = u.E),
            (this.pushFeed = () => v.right(null)),
            (this.popFeed = m.Q1),
            (this.focusCard = () => v.right(null)),
            (this.notifyCardFocused = m.Q1),
            (this.dispose = m.Q1);
        }
      }
      var g,
        w = s(33194),
        f = s(39040),
        C = s(32260),
        b = s(8901),
        _ = s(32952),
        G = s(9922),
        S = s(41398),
        P = s(77176),
        x = s(93508),
        y = s(19751),
        E = s(23063),
        I = s(69627),
        F = s(31528),
        M = s(26328),
        z = s(66268);
      class k {
        constructor(e, t, s, o, a) {
          (this.sduiManager = e),
            (this.sduiFeedbackService = t),
            (this.environment = s),
            (this.capiClient = o),
            (this.integrationModel = a),
            (this._focusedItem = i.h.create(r.none)),
            (this._sduiInlineCardActions = new _.xQ()),
            (this._subs = new G.w.Keeper()),
            (this.focusCard = (e) => {
              this._focusedItem.set(r.some(e));
            }),
            (this.handleSduiCardAction = (e, t, s) => {
              this._sduiInlineCardActions.next({ cardAction: e, cardModel: t, match: s });
            }),
            (this.handleGButtonPopoverAction = (e) => {
              this._sduiViewModel.sduiActionEvents.next(e),
                (0, h.zG)(
                  k.getSduiFeedActions(e.actions),
                  r.map((t) =>
                    this.integrationModel.openAssistant({ type: F.WT.sdui, action: { ...e, actions: t, type: z.lY.Type.sduiCardAction } })
                  )
                );
            }),
            (this.dispose = () => this._subs.dispose()),
            (this._sduiViewModel = new n.x(t, e, new A(), o, this._focusedItem.view(r.map((e) => e.id))));
          const d = this._sduiViewModel.sduiActionEvents
              .pipe(S.M(this._sduiInlineCardActions.pipe(P.U(r.some), x.O(r.none))))
              .subscribe(([e, t]) =>
                this._nativeHandling(
                  e,
                  (0, h.zG)(
                    t,
                    r.map((e) => e.match)
                  ),
                  (0, h.zG)(
                    t,
                    r.map((e) => e.cardModel)
                  )
                )
              ),
            c = this._sduiInlineCardActions
              .pipe(y.skipBy(g.eq))
              .subscribe(({ cardAction: e }) => this._sduiViewModel.sduiActionEvents.next(e));
          this._subs.push(d, c, this._sduiViewModel);
        }
        _nativeHandling({ actions: e, cardId: t, sourceId: s, scope: i }, n, o) {
          (0, h.zG)(
            k.getSduiFeedActions(e),
            r.map((e) => {
              (0, h.zG)(
                o,
                r.map((n) => {
                  n.onOpenExpandedViewBySduiAction(w.Oe.create(e, t, s, i));
                })
              );
            })
          ),
            e.forEach((e) => {
              switch (e.type) {
                case "nextCard":
                case "prevCard":
                case "openSettings":
                case "openToneDetector":
                case "openFeedback":
                case "openLearnMore":
                case "transition":
                case "openCreateSnippetModal":
                case "nativeOpenAssistant":
                case "selectAlternative":
                case "highlightAlert":
                case "openPerformanceScore":
                case "nativeOpenUserSatisfactionFeedback":
                case "enablePlagiarismCheck":
                case "disablePlagiarismCheck":
                case "showHighlights":
                case "hideHighlights":
                case "notify":
                case "switchView":
                case "newRevision":
                case "interactPopover":
                case "pushAssistantFeed":
                case "popAssistantFeed":
                case "focusAssistantCard":
                  return;
                case "closePopover":
                  return void this.integrationModel.closePopover(e.rootPopoverId);
                case "openLink":
                  return void this.environment.actions.openPopup(new d.Z(e.url));
                case "copyToClipboard":
                  return void (0, h.zG)((0, a.v)(e.text), E.q(1)).subscribe();
                case "stopApplyingAlerts":
                case "upgradeToPremium":
                  return (
                    (0, h.zG)(
                      o,
                      r.map((e) => e.openPlanComparisonPage({ forceUtmCampaign: b.L.Place.assistantCardList }))
                    ),
                    void (0, h.zG)(
                      n,
                      r.map((e) => e.hide())
                    )
                  );
                case "applyAlerts":
                  return void (0, h.zG)(
                    n,
                    r.map((t) => {
                      null != t.alert &&
                        ((0, h.zG)(
                          (0, f.UQ)(t.alert, t.plainText),
                          (e) => new C.U_(e, (e) => t.replace(null != e ? e : "", !1)),
                          (t) =>
                            (0, h.zG)(
                              r.fromNullable(t.replacements[e.alternativeIndex]),
                              r.map((e) => t.getOnReplace(e)())
                            )
                        ),
                        t.hide());
                    })
                  );
                case "closeCard":
                case "removeRoot":
                  return void (0, h.zG)(
                    n,
                    r.map((e) => e.hide())
                  );
                case "removeAlerts":
                  return void (0, h.zG)(
                    n,
                    r.map((e) => {
                      e.ignore(), e.hide();
                    })
                  );
                case "openGrammarlyGo":
                  return void (0, h.zG)(
                    r.sequenceArray([o, n]),
                    r.map(([e, t]) => {
                      if (t.alert && (0, I.t)(t.alert.patternName)) {
                        const s = (0, f.UQ)(t.alert, t.plainText);
                        if (s.length > 0 && s[0].newText) {
                          const i = s[0].newText;
                          e.onOpenGrammarlyGo({
                            mode: "pushRewrite",
                            writingExpertContext: {
                              alertId: t.alert.id,
                              alertPname: t.alert.patternName,
                              originalText: t.alert.text,
                              replacementText: i
                            },
                            transformRange: t.alert.transformRange
                          });
                        } else e.onOpenGrammarlyGo({ mode: "ideation" });
                      } else e.onOpenGrammarlyGo({ mode: "ideation" });
                    })
                  );
                default:
                  (0, c.L0)(e);
              }
            });
        }
      }
      (k.getSduiFeedActions = (0, h.ls)(
        p.hX((e) => "popAssistantFeed" === e.type || "pushAssistantFeed" === e.type || "focusAssistantCard" === e.type),
        M.nI
      )),
        (function (e) {
          e.eq = l.MW({ cardAction: o.t.eq });
        })(g || (g = {}));
    },
    57757: (e, t, s) => {
      s.d(t, { v: () => o });
      var i = s(44586),
        n = s(95195);
      function o(e, t = self) {
        return new i.y((s) => {
          var i, o;
          (null === (o = null === (i = t.navigator) || void 0 === i ? void 0 : i.clipboard) || void 0 === o ? void 0 : o.writeText)
            ? t.navigator.clipboard
                .writeText(e)
                .then(() => s.next(n.right(void 0)))
                .catch((e) => s.next(n.left(new Error(String(e)))))
            : s.next(n.left(new Error("The Clipboard API is not available.")));
        });
      }
    }
  }
]);
