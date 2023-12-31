(self.webpackChunk = self.webpackChunk || []).push([
  [5275],
  {
    12989: (e, t, n) => {
      n.d(t, { G: () => o });
      var i = n(23239),
        r = n(5114),
        s = n(624);
      class o extends s.J {
        constructor() {
          super(), (this._popoverActionsHandler = i.h.create(r.none));
        }
        setPopoverActionsHandler(e) {
          this._popoverActionsHandler.set(r.some(e));
        }
        get popoverActionsHandlerAtom() {
          return this._popoverActionsHandler;
        }
      }
    },
    517: (e, t, n) => {
      n.d(t, { z: () => s });
      var i = n(5114),
        r = n(23239);
      class s {
        constructor() {
          (this.activePopoverStack = r.h.create(i.none)),
            (this.activePopoverView = r.h.create(i.none)),
            (this._popoverActionsHandler = r.h.create(i.none));
        }
        addPopover(e, t) {}
        getInteractionActions(e, t, n) {
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
    86782: (e, t, n) => {
      n.d(t, { U: () => z });
      var i = n(23239),
        r = n(72812),
        s = n(14454),
        o = n(57757),
        a = n(5114),
        c = n(31668),
        d = n(22232),
        l = n(71249),
        u = n(73975),
        p = n(57050),
        h = n(40151),
        v = n(95195),
        f = n(8125);
      class m {
        constructor() {
          (this.feed = h.E),
            (this.currentFeed = a.none),
            (this.onFeedRemove = h.E),
            (this.onFeedEmpty = h.E),
            (this.header = h.E),
            (this.footer = h.E),
            (this.pushFeed = () => v.right(null)),
            (this.popFeed = f.Q1),
            (this.focusCard = () => v.right(null)),
            (this.notifyCardFocused = f.Q1),
            (this.dispose = f.Q1);
        }
      }
      var g,
        A = n(33194),
        b = n(39040),
        w = n(32260),
        y = n(8901),
        I = n(32952),
        _ = n(9922),
        C = n(41398),
        S = n(77176),
        G = n(93508),
        E = n(19751),
        P = n(23063),
        x = n(69627),
        k = n(31528),
        M = n(26328),
        F = n(66268);
      class z {
        constructor(e, t, n, s, o) {
          (this.sduiManager = e),
            (this.sduiFeedbackService = t),
            (this.environment = n),
            (this.capiClient = s),
            (this.integrationModel = o),
            (this._focusedItem = i.h.create(a.none)),
            (this._sduiInlineCardActions = new I.xQ()),
            (this._subs = new _.w.Keeper()),
            (this.focusCard = (e) => {
              this._focusedItem.set(a.some(e));
            }),
            (this.handleSduiCardAction = (e, t, n) => {
              this._sduiInlineCardActions.next({ cardAction: e, cardModel: t, match: n });
            }),
            (this.handleGButtonPopoverAction = (e) => {
              this._sduiViewModel.sduiActionEvents.next(e),
                (0, p.zG)(
                  z.getSduiFeedActions(e.actions),
                  a.map((t) =>
                    this.integrationModel.openAssistant({ type: k.WT.sdui, action: { ...e, actions: t, type: F.lY.Type.sduiCardAction } })
                  )
                );
            }),
            (this.dispose = () => this._subs.dispose()),
            (this._sduiViewModel = new r.x(t, e, new m(), s, this._focusedItem.view(a.map((e) => e.id))));
          const c = this._sduiViewModel.sduiActionEvents
              .pipe(C.M(this._sduiInlineCardActions.pipe(S.U(a.some), G.O(a.none))))
              .subscribe(([e, t]) =>
                this._nativeHandling(
                  e,
                  (0, p.zG)(
                    t,
                    a.map((e) => e.match)
                  ),
                  (0, p.zG)(
                    t,
                    a.map((e) => e.cardModel)
                  )
                )
              ),
            d = this._sduiInlineCardActions
              .pipe(E.skipBy(g.eq))
              .subscribe(({ cardAction: e }) => this._sduiViewModel.sduiActionEvents.next(e));
          this._subs.push(c, d, this._sduiViewModel);
        }
        _nativeHandling({ actions: e, cardId: t, sourceId: n, scope: i }, r, s) {
          (0, p.zG)(
            z.getSduiFeedActions(e),
            a.map((e) => {
              (0, p.zG)(
                s,
                a.map((r) => {
                  r.onOpenExpandedViewBySduiAction(A.Oe.create(e, t, n, i));
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
                  return void this.environment.actions.openPopup(new c.Z(e.url));
                case "copyToClipboard":
                  return void (0, p.zG)((0, o.v)(e.text), P.q(1)).subscribe();
                case "stopApplyingAlerts":
                case "upgradeToPremium":
                  return (
                    (0, p.zG)(
                      s,
                      a.map((e) => e.openPlanComparisonPage({ forceUtmCampaign: y.L.Place.assistantCardList }))
                    ),
                    void (0, p.zG)(
                      r,
                      a.map((e) => e.hide())
                    )
                  );
                case "applyAlerts":
                  return void (0, p.zG)(
                    r,
                    a.map((t) => {
                      null != t.alert &&
                        ((0, p.zG)(
                          (0, b.UQ)(t.alert, t.plainText),
                          (e) => new w.U_(e, (e) => t.replace(null != e ? e : "", !1)),
                          (t) =>
                            (0, p.zG)(
                              a.fromNullable(t.replacements[e.alternativeIndex]),
                              a.map((e) => t.getOnReplace(e)())
                            )
                        ),
                        t.hide());
                    })
                  );
                case "closeCard":
                case "removeRoot":
                  return void (0, p.zG)(
                    r,
                    a.map((e) => e.hide())
                  );
                case "removeAlerts":
                  return void (0, p.zG)(
                    r,
                    a.map((e) => {
                      e.ignore(), e.hide();
                    })
                  );
                case "openGrammarlyGo":
                  return void (0, p.zG)(
                    a.sequenceArray([s, r]),
                    a.map(([e, t]) => {
                      if (t.alert && (0, x.t)(t.alert.patternName)) {
                        const n = (0, b.UQ)(t.alert, t.plainText);
                        if (n.length > 0 && n[0].newText) {
                          const i = n[0].newText;
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
                  (0, d.L0)(e);
              }
            });
        }
      }
      (z.getSduiFeedActions = (0, p.ls)(
        l.hX((e) => "popAssistantFeed" === e.type || "pushAssistantFeed" === e.type || "focusAssistantCard" === e.type),
        M.nI
      )),
        (function (e) {
          e.eq = u.MW({ cardAction: s.t.eq });
        })(g || (g = {}));
    },
    17232: (e, t, n) => {
      n.r(t), n.d(t, { createSduiInlineEngine: () => M, default: () => F });
      var i = n(5114),
        r = n(21038),
        s = n(24055),
        o = n(12054),
        a = n(78929),
        c = n(81531),
        d = n(46680),
        l = n(26393),
        u = n(92843),
        p = n(9922),
        h = n(93508),
        v = n(16118),
        f = n(77176),
        m = n(28811),
        g = n(57050);
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var i,
                r,
                s = [],
                o = !0,
                a = !1;
              try {
                for (n = n.call(e); !(o = (i = n.next()).done) && (s.push(i.value), !t || s.length !== t); o = !0);
              } catch (e) {
                (a = !0), (r = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (a) throw r;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return A(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var I = (function () {
          function e(t) {
            var n = this;
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              w(this, "_state", new Map()),
              w(this, "_subs", new p.w.Keeper()),
              w(this, "_log", c.C8.Logging.getLogger("SDUIInlineManager", d.i.TRACE, d.T.Manager.getColor())),
              this._subs.push(
                t
                  .pipe(
                    h.O(m.a.empty),
                    v.G(),
                    f.U(function (e) {
                      var t = y(e, 2),
                        n = t[0],
                        i = t[1];
                      return m.a.diff(n, i);
                    }),
                    f.U(function (e) {
                      return n._processSDUIItems(e);
                    })
                  )
                  .subscribe()
              );
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "getInlineItemForAlert",
                value: function (e) {
                  return i.fromNullable(this._state.get(e));
                }
              },
              {
                key: "_processSDUIItems",
                value: function (e) {
                  var t = this;
                  (0, g.zG)(
                    e,
                    u.v.forEach(
                      function (e) {
                        _(e) &&
                          (t._log.trace("inline item removed", { alertIds: e.alertIds, itemId: e.id }),
                          e.alertIds.forEach(function (e) {
                            return t._state.delete(e);
                          }));
                      },
                      function (e, n) {
                        _(n) &&
                          (t._log.trace("inline item updated", { alertIds: n.alertIds, itemId: n.id }),
                          n.alertIds.forEach(function (e) {
                            return t._state.set(e, n);
                          }));
                      },
                      function (e) {
                        _(e) &&
                          (t._log.trace("inline item added", { alertIds: e.alertIds, itemId: e.id }),
                          e.alertIds.forEach(function (n) {
                            return t._state.set(n, e);
                          }));
                      }
                    )
                  );
                }
              },
              {
                key: "dispose",
                value: function () {
                  this._subs.dispose();
                }
              }
            ]) && b(t.prototype, n),
            r && b(t, r),
            e
          );
        })(),
        _ = function (e) {
          return (0, g.zG)(l.ab.findFirst(e.content, "inlineCard"), i.isSome);
        },
        C = n(31903),
        S = n(85985),
        G = n(80358),
        E = n(33194),
        P = n(86782),
        x = n(12989),
        k = n(517);
      const M = (e, t, n, c, d, l, u, h = !1) => {
          const v = new p.w.Keeper(),
            m = (0, g.ls)(
              (e) => e.toString(),
              n,
              i.fromNullable,
              i.map((e) => r.j.AlertId.from(e.id))
            ),
            A = e.capiEvents.pipe(
              S.h(G.h.is("sdui_add", "sdui_remove", "sdui_update")),
              S.h(
                (e) =>
                  "sdui_remove" === e.kind ||
                  E.D1.InlineCard.isInlineCard(e.sdui) ||
                  E.D1.StrongAlertRef.isStrongAlertRefUpgradeHookContent(e.sdui) ||
                  E.D1.GButton.isGButtonContent(e.sdui) ||
                  E.D1.PopoverStack.isPopoverStack(e.sdui)
              ),
              S.h(s.e.isSduiEvent),
              f.U(o.al.fromSource(o.i5.CAPI))
            ),
            b = h ? new x.G() : new k.z(),
            w = new a.G(A, m, b),
            y = new I(w.state),
            _ = new C.Q({ sendUserAction: c }),
            M = new P.U(w, _, d, l, u);
          return (
            b.setPopoverActionsHandler(M),
            v.push(
              t.subscribe((e) => w.notifyAlertsChanged()),
              e.capiEvents
                .pipe(
                  S.h(G.h.is("session_started")),
                  S.h((e) => e.isNewSession)
                )
                .subscribe((e) => w.onSessionStarted()),
              e.capiEvents
                .pipe(
                  S.h(G.h.is("finish")),
                  S.h((e) => 0 === e.revision)
                )
                .subscribe((e) => w.onFirstCheckingFinished()),
              w,
              y,
              M
            ),
            {
              sduiBufferService: e,
              sduiManager: w,
              sduiInlineManager: y,
              sduiFeedbackService: _,
              inlineCardViewModel: M,
              dispose: () => {
                v.dispose();
              }
            }
          );
        },
        F = { createSduiInlineEngine: M };
    },
    57757: (e, t, n) => {
      n.d(t, { v: () => s });
      var i = n(44586),
        r = n(95195);
      function s(e, t = self) {
        return new i.y((n) => {
          var i, s;
          (null === (s = null === (i = t.navigator) || void 0 === i ? void 0 : i.clipboard) || void 0 === s ? void 0 : s.writeText)
            ? t.navigator.clipboard
                .writeText(e)
                .then(() => n.next(r.right(void 0)))
                .catch((e) => n.next(r.left(new Error(String(e)))))
            : n.next(r.left(new Error("The Clipboard API is not available.")));
        });
      }
    }
  }
]);
