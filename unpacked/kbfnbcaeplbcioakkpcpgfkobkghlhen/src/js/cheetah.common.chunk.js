(self.webpackChunk = self.webpackChunk || []).push([
  [4382],
  {
    21256: (e, t, i) => {
      i.r(t), i.d(t, { CheetahFeatureImpl: () => oi, isAssistantOpened: () => ri });
      var s = i(17771),
        n = i(17889),
        a = i(62965),
        r = i(6294),
        o = i(85892),
        l = i(57050),
        c = i(27378),
        d = i(54696),
        h = i(57757),
        p = i(55649),
        u = i(98805),
        g = i(33394),
        m = i(85441),
        v = i(14601),
        _ = i(32952),
        b = i(60797),
        S = i(66310),
        f = i(24209),
        w = i(85985),
        y = i(23063),
        A = i(40151),
        x = i(98403),
        I = i(2844),
        C = i(77176),
        R = i(2834),
        k = i(76974),
        E = i(28043),
        U = i(93508),
        T = i(16118),
        O = i(13444),
        B = i(12126),
        P = i(78674),
        M = i(17343),
        z = i(80544),
        G = i(79692),
        N = i(67434),
        F = i(19751),
        D = i(44586),
        q = i(97425),
        H = i(5114),
        W = i(8125),
        j = i(83078),
        V = i(95195),
        L = i(22232),
        $ = i(54001),
        Z = i(23239),
        Y = i(34217),
        Q = i(51325);
      const K = ({ width: e, height: t, top: i, left: s, visibility: n }) =>
        c.createElement("div", {
          "data-grammarly-part": "cheetah-highlight-rect",
          ...(0, $.Sh)(Q.highlightRect, "hidden" === n ? Q.hidden : null, "attention" === n ? Q.attention : null),
          style: { width: e, height: t, top: i, left: s }
        });
      var J = i(24426),
        X = i(88571),
        ee = i(4147),
        te = i(89894),
        ie = i(15073),
        se = i(42103),
        ne = i(51369),
        ae = i(90845),
        re = i(85665),
        oe = i(13713),
        le = i(41944);
      const ce = te.ux.style({
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, Arial",
          $nest: { "button, input, textarea": { fontFamily: "inherit" } }
        }),
        de = ({ children: e }) => {
          var t;
          const i = null === (t = c.useContext(re.nS.Context)) || void 0 === t ? void 0 : t.host;
          return c.createElement(
            ee.o,
            null,
            c.createElement(
              X.Q,
              { remSize: k.of(16), setter: (e) => ie.u.setRootCssVar(i || document.documentElement, e) },
              c.createElement(se.G.DefaultProvider, null, c.createElement("div", { className: ce }, e, c.createElement(ne.X, null)))
            )
          );
        },
        he = ({ children: e }) => {
          var t;
          const i = null === (t = c.useContext(re.nS.Context)) || void 0 === t ? void 0 : t.host,
            { onMount: s, ref: n } = ae.P.useElWatcher();
          return c.createElement(
            ee.o,
            null,
            c.createElement(
              X.Q,
              { remSize: k.of(16), setter: (e) => ie.u.setRootCssVar(i || document.documentElement, e) },
              c.createElement(
                se.G.DefaultProvider,
                null,
                c.createElement(
                  "div",
                  { className: ce, ref: s, "data-role": "onboarding-tooltips", style: { position: "absolute", zIndex: le.dl + 1 } },
                  c.createElement(oe.l.Provider, { value: { portalContainer: n } }, e),
                  c.createElement(ne.X, null)
                )
              )
            )
          );
        };
      var pe = i(37869),
        ue = i(50783);
      const ge = ({ referenceElement: e, placement: t, offset: i, disabled: s, onClick: n }) => {
        const [a, r] = c.useState(null),
          { styles: o, attributes: l } = (0, pe.D)(e, a, {
            placement: t,
            modifiers: i ? [{ name: "offset", options: { offset: i } }] : []
          });
        return c.createElement(
          "button",
          {
            ref: r,
            style: o.popper,
            ...l.popper,
            onClick: n,
            onMouseDown: (e) => {
              e.stopPropagation(), e.preventDefault();
            },
            "data-grammarly-part": "cheetah-reply-button",
            className: ue.replyButton,
            "data-disabled": s
          },
          c.createElement("div", { className: ue.icon }),
          c.createElement("span", null, "Reply quickly")
        );
      };
      var me = i(6726),
        ve = i(87491);
      const _e = ({ referenceElement: e, placement: t, offset: i, disabled: s, onMagicRewriteClick: n, onOpenRewriteClick: a }) => {
        const [r, o] = c.useState(null),
          { styles: l, attributes: d } = (0, pe.D)(e, r, {
            placement: t,
            modifiers: i ? [{ name: "offset", options: { offset: i } }] : []
          });
        return n || a
          ? c.createElement(
              "div",
              {
                ref: o,
                style: l.popper,
                ...d.popper,
                onMouseDown: (e) => {
                  e.stopPropagation(), e.preventDefault();
                },
                "data-grammarly-part": "cheetah-entry-button",
                className: ve.entryButton,
                "data-disabled": s
              },
              n
                ? c.createElement(
                    me.u,
                    { message: "Improve it" },
                    c.createElement(
                      "button",
                      {
                        onClick: n,
                        onMouseDown: (e) => {
                          e.stopPropagation(), e.preventDefault();
                        },
                        className: ve.entryButtonItem,
                        "data-disabled": s
                      },
                      c.createElement("i", { className: ve.rewriteIcon })
                    )
                  )
                : null,
              a
                ? c.createElement(
                    me.u,
                    { message: "Rewrite with Grammarly" },
                    c.createElement(
                      "button",
                      {
                        onClick: a,
                        onMouseDown: (e) => {
                          e.stopPropagation(), e.preventDefault();
                        },
                        className: ve.entryButtonItem,
                        "data-disabled": s
                      },
                      c.createElement("i", { className: ve.openIcon })
                    )
                  )
                : null
            )
          : null;
      };
      var be = i(49708),
        Se = i(8543),
        fe = i(48033);
      const we = () =>
          c.createElement(
            "svg",
            { className: fe.icon, viewBox: "0 0 16 16", fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round" },
            c.createElement("path", {
              d: "M8,16C12.418,16 16,12.418 16,8C16,3.582 12.418,0 8,0C3.582,0 0,3.582 0,8C0,12.418 3.582,16 8,16Z",
              fill: "#0A9A78"
            }),
            c.createElement("path", { d: "M4,8L12,8M8,4L8,12", fill: "none", fillRule: "nonzero", stroke: "white", strokeWidth: "1.5px" })
          ),
        ye = ({ overflow: e, ...t }) => (e ? c.createElement(xe, { ...t }) : c.createElement(Ae, { ...t })),
        Ae = ({ left: e, top: t, height: i }) =>
          c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { "data-grammarly-part": "cheetah-quasi-caret", className: fe.quasiCaret, style: { left: e, top: t + i, height: i + 8 } },
              c.createElement(we, null)
            )
          ),
        xe = ({ left: e, top: t, height: i }) => {
          const { ref: n, onMount: a } = ae.P.useElWatcher(),
            r = c.useMemo(() => Z.h.create(H.none), []),
            { rect: o, onMount: d } = ae.P.useRectWatcher(),
            h = c.useCallback((e) => {
              (e.style.pointerEvents = "all"),
                r.set(
                  (0, l.zG)(
                    s.Y(H.option)({
                      rect: H.some(e.getBoundingClientRect()),
                      goodParent: (0, l.zG)(
                        e.getBoundingClientRect(),
                        (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
                        ({ x: e, y: t }) => {
                          var i, s;
                          return H.fromNullable(
                            null === (s = null === (i = document.elementFromPoint(e, t)) || void 0 === i ? void 0 : i.shadowRoot) ||
                              void 0 === s
                              ? void 0
                              : s.elementFromPoint(e, t)
                          );
                        },
                        H.filter((t) => t === e || e.contains(t || null))
                      )
                    }),
                    H.fold(
                      () => H.none,
                      ({ rect: e }) => H.some({ x: e.x, y: e.y })
                    )
                  )
                ),
                (e.style.pointerEvents = "none");
            }, []),
            p = c.useMemo(() => be.R(document, "scroll", { capture: !0 }).pipe(U.O(null)), []);
          return (
            ae.P.useSubscriptionTo(I.aj([n.pipe(b.oA), p, o]).pipe(R.b(([e]) => h(e)))),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                {
                  "data-grammarly-part": "cheetah-quasi-caret",
                  className: fe.quasiCaret,
                  style: { left: e, top: t + i, height: i + 8 },
                  ref: (e) => {
                    a(e), d(e);
                  }
                },
                c.createElement(
                  Se.F.div,
                  {
                    style: r.pipe(
                      C.U((e) =>
                        (0, l.zG)(
                          e,
                          H.fold(
                            () => ({ opacity: 1 }),
                            () => ({ opacity: 0 })
                          )
                        )
                      )
                    )
                  },
                  c.createElement(we, null)
                )
              ),
              c.createElement(
                Se.F.Fragment,
                null,
                r.pipe(
                  C.U((e) =>
                    (0, l.zG)(
                      e,
                      H.fold(l.gn, (e) =>
                        c.createElement(
                          "div",
                          {
                            "data-grammarly-part": "cheetah-quasi-caret-fixed-bro",
                            className: fe.quasiCaret,
                            style: { transform: "none", position: "fixed", left: e.x, top: e.y, height: i + 8 }
                          },
                          c.createElement(we, null)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var Ie = i(10389),
        Ce = i(64015),
        Re = i(1846),
        ke = i(819),
        Ee = i(20545),
        Ue = i(24451),
        Te = i(69693),
        Oe = i(85746),
        Be = i(18941),
        Pe = i(55093),
        Me = i(21903),
        ze = i(43254),
        Ge = i(33148),
        Ne = i(84403),
        Fe = i(92627),
        De = i(99877),
        qe = i(35144),
        He = i(72004),
        We = i(36847),
        je = i(35298),
        Ve = i(29972),
        Le = i(7534);
      var $e = i(44358),
        Ze = i(81873),
        Ye = i(81531),
        Qe = i(65504),
        Ke = i(9205),
        Je = i(9629),
        Xe = i(88355),
        et = i(4068),
        tt = i(30857);
      function it(e) {
        var t, i;
        const s = "pushRewrite" === e.mode ? null : e;
        return null !== (i = null === (t = null == s ? void 0 : s.source) || void 0 === t ? void 0 : t.alertId) && void 0 !== i ? i : null;
      }
      function st(e, t, i, s) {
        switch (e.mode) {
          case "ideation":
            return { mode: e.mode, metadata: t, documentUrl: s };
          case "rewrite":
          case "quickRewrite":
            return { mode: e.mode, metadata: t };
          case "quickReply":
            return {
              mode: e.mode,
              quickReplyContext: (0, l.zG)(
                i,
                H.fold(() => et.H.empty, nt)
              ),
              metadata: t
            };
          case "pushRewrite":
            return { mode: e.mode, writingExpertContext: e.writingExpertContext };
          default:
            (0, L.L0)(e);
        }
      }
      function nt(e) {
        var t, i, s, n, a, r, o, c, d, h, p, u, g, m, v, _, b;
        const S = (e) => {
            var t;
            return null !==
              (t =
                null == e
                  ? void 0
                  : e.reduce((e, t) => {
                      var i;
                      return (
                        t.email &&
                          !e.has(t.email) &&
                          e.set(t.email, { name: null !== (i = t.name) && void 0 !== i ? i : "", email: t.email }),
                        e
                      );
                    }, new Map())) && void 0 !== t
              ? t
              : new Map();
          },
          f = S(
            null === (s = null === (i = null === (t = e.parents) || void 0 === t ? void 0 : t[0]) || void 0 === i ? void 0 : i.audience) ||
              void 0 === s
              ? void 0
              : s.indirectRecipients
          ),
          w = S(
            null === (r = null === (a = null === (n = e.parents) || void 0 === n ? void 0 : n[0]) || void 0 === a ? void 0 : a.audience) ||
              void 0 === r
              ? void 0
              : r.undisclosedRecipients
          ),
          y = S(
            null ===
              (h =
                null ===
                  (d = null === (c = null === (o = e.parents) || void 0 === o ? void 0 : o[0]) || void 0 === c ? void 0 : c.audience) ||
                void 0 === d
                  ? void 0
                  : d.recipients) || void 0 === h
              ? void 0
              : h.filter(({ email: e }) => (0, tt.HD)(e) && !f.has(e) && !w.has(e))
          ),
          A = S(null === (p = e.audience) || void 0 === p ? void 0 : p.indirectRecipients),
          x = S(null === (u = e.audience) || void 0 === u ? void 0 : u.undisclosedRecipients),
          I = S(
            null === (m = null === (g = e.audience) || void 0 === g ? void 0 : g.recipients) || void 0 === m
              ? void 0
              : m.filter(({ email: e }) => (0, tt.HD)(e) && !A.has(e) && !x.has(e))
          );
        return {
          previousMessageInfo: (0, l.zG)(
            Ce.YM(null !== (v = e.parents) && void 0 !== v ? v : []),
            H.fold(
              () => et.H.PreviousMessageInfo.empty,
              (e) => {
                var t;
                return {
                  author: (0, l.zG)(
                    Ce.YM(null !== (t = e.authors) && void 0 !== t ? t : []),
                    H.fold(
                      () => et.H.Person.empty,
                      (e) => {
                        var t, i;
                        return {
                          name: null !== (t = e.name) && void 0 !== t ? t : "",
                          email: null !== (i = e.email) && void 0 !== i ? i : ""
                        };
                      }
                    )
                  ),
                  directRecipients: Array.from(y.values()),
                  text: e.delta ? (0, Xe.l)(e.delta, "") : ""
                };
              }
            )
          ),
          title: null !== (_ = e.title) && void 0 !== _ ? _ : "",
          author: (0, l.zG)(
            Ce.YM(null !== (b = e.authors) && void 0 !== b ? b : []),
            H.fold(
              () => et.H.Person.empty,
              (e) => {
                var t, i;
                return { name: null !== (t = e.name) && void 0 !== t ? t : "", email: null !== (i = e.email) && void 0 !== i ? i : "" };
              }
            )
          ),
          directRecipients: Array.from(I.values()),
          indirectRecipients: Array.from(A.values()),
          undisclosedRecipients: Array.from(x.values())
        };
      }
      var at = i(41127),
        rt = i(8709),
        ot = i(20236),
        lt = i(67534);
      function ct(e, t, i, s) {
        const { left: n, right: a } = (0, l.zG)(
            e,
            Ce.UI(({ alertId: e, alternativeIndex: i }) =>
              (function (e, t, i) {
                return (0, l.zG)(
                  V.fromOption(() => `Alert ${e} not found`)(i(e)),
                  V.filterOrElse(ot.S.isCapiAlert, (t) => `Unsupported alert ${e} with type ${t._tag}`),
                  V.chain((i) =>
                    d.$.isWithTransformJson(i)
                      ? (0, l.zG)(
                          i.transformJSON.alternatives,
                          H.chain((e) => {
                            var i;
                            return H.fromNullable(null === (i = e.alternatives[t]) || void 0 === i ? void 0 : i.delta);
                          }),
                          V.fromOption(() => `Alternative ${t} not found for WithTransformJson alert ${e}`)
                        )
                      : d.$.isWithSubAlerts(i)
                      ? (0, l.zG)(
                          i.subalerts.alternatives,
                          H.chain((e) => {
                            var i;
                            return H.fromNullable(null === (i = e.alternatives[t]) || void 0 === i ? void 0 : i.delta);
                          }),
                          V.fromOption(() => `Alternative ${t} or context not found for WithSubAlerts alert ${e}`)
                        )
                      : d.$.isWithPosition(i)
                      ? V.right(
                          new rt.i()
                            .retain(i.transformRange.start)
                            .delete(i.transformRange.end - i.transformRange.start)
                            .insert(i.transformText)
                        )
                      : V.left(`Unsupported alert ${e}`)
                  ),
                  V.map((i) => ({ delta: i, alertId: e, alternativeIndex: t }))
                );
              })(e, i, t)
            ),
            Ce.oh
          ),
          r = a.reduce((e, t) => e.compose(t.delta), new rt.i()),
          o = (0, lt.g)(r),
          c = (0, lt.B)(r);
        return i
          .performBatchReplacements(o)
          .then(() => V.right(void 0))
          .catch((t) =>
            V.left(
              `Replacement error for [${e.map((e) => `alertId: ${e.alertId} altIdx: ${e.alternativeIndex}`).join(", ")}]: ` + String(t)
            )
          )
          .then((e) =>
            (0, l.zG)(
              s(),
              H.filter(() => c.length > 0),
              H.fold(
                () => Promise.resolve(V.right(void 0)),
                (e) =>
                  Promise.all(
                    c.map(({ range: t, formatting: i }) =>
                      e
                        .apply(t, i)
                        .then(() => V.right(void 0))
                        .catch((e) => V.left(String(e)))
                    )
                  ).then(
                    (0, l.ls)(Ce.oh, ({ left: e }) => (e.length > 0 ? V.left(`Formatting errors [${e.join(", ")}]`) : V.right(void 0)))
                  )
              )
            ).then((t) => {
              const i = n.concat(V.isLeft(e) ? [e.left] : []).concat(V.isLeft(t) ? [t.left] : []);
              return i.length > 0 ? V.left(new Error(`AlertApply - ${i.join(" - ")}`)) : V.right(void 0);
            })
          );
      }
      var dt = i(80358),
        ht = i(36919),
        pt = i(19125);
      var ut = i(71078),
        gt = i(18625);
      var mt = i(48015);
      function vt(e) {
        return i
          .e(8661)
          .then(i.bind(i, 19853))
          .then(({ createRevisionEngine: t }) => {
            const i = Z.h.create(e.initialAlertId),
              s = e.alertStateService
                .getActiveAlertByClick()
                .pipe(
                  C.U((e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.alertId) && void 0 !== t ? t : null;
                  })
                )
                .subscribe(x.wW(i)),
              n = p.Y.create("cheetah.revision"),
              { revisionEngine: a, dispose: r } = t({
                capiService: e.capiService,
                textEditorService: e.textEditorService,
                lifecycleService: e.lifecycleService,
                sduiService: {
                  supportedForms: e.supportedForms,
                  sduiItemCollectionChanges: ((c = e.sduiBufferService),
                  c
                    .pipe(
                      S.w(
                        H.fold(
                          () => A.E,
                          (e) =>
                            e.capiEvents.pipe(
                              w.h((0, W.Kg)(dt.h.is("sdui_add"), dt.h.is("sdui_update"), dt.h.is("sdui_remove"))),
                              C.U((e) => {
                                switch (e.kind) {
                                  case "sdui_add":
                                    return (0, pt.K5)(e.sduiRootId, e.sdui);
                                  case "sdui_update":
                                    return (0, pt.FE)(e.sduiRootId, e.sdui);
                                  case "sdui_remove":
                                    return (0, pt.Ul)(e.sduiRootId);
                                  default:
                                    return (0, l.Rz)(e);
                                }
                              })
                            )
                        )
                      )
                    )
                    .pipe(
                      (e) => e.pipe(ht.f(e.pipe(P.b(0)))),
                      w.h((e) => e.length > 0)
                    )).pipe(R.b((e) => n.trace("sduiService.sduiItemCollectionChanges", e)))
                },
                alertService: {
                  alertCollectionChanges: ((o = e.alertProcessor.alerts),
                  gt.P(() =>
                    o.changes.pipe(
                      C.U((e) => {
                        const t = new Set(e.addedAlerts.filter(ot.S.isCapiAlert).map((e) => e.id)),
                          i = new Set(e.removedAlerts.filter((e) => ot.S.isCapiAlert(e.alert)).map((e) => e.id));
                        return [
                          ...e.addedAlerts
                            .filter(ot.S.isCapiAlert)
                            .filter((e) => !i.has(e.id))
                            .map((e) => (0, ut.Tm)(e.id)),
                          ...e.removedAlerts
                            .filter((e) => ot.S.isCapiAlert(e.alert))
                            .filter((e) => !t.has(e.id))
                            .map((e) => (0, ut.qQ)(e.id, "textChange" === e.reason._tag ? "textChange" : "other"))
                        ];
                      }),
                      U.O(
                        Array.from(o.getAll())
                          .filter(ot.S.isCapiAlert)
                          .map((e) => (0, ut.Tm)(e.id))
                      ),
                      (e) => e.pipe(ht.f(e.pipe(P.b(0)))),
                      C.U((e) => e.flatMap(l.yR)),
                      w.h((e) => e.length > 0)
                    )
                  )).pipe(R.b((e) => n.trace("alertService.alertCollectionChange", e))),
                  selectedAlertId: i,
                  applyAlerts: (t) => {
                    const i = ct(
                      t,
                      (t) => H.fromNullable(e.alertProcessor.alerts.getAlertById(t)),
                      e.replacementService,
                      e.getFormattingService
                    ).then(
                      V.fold(
                        (e) => {
                          throw (n.warn("Error applying alerts", { applyAlertsInfo: t, error: e }), e);
                        },
                        () => {}
                      )
                    );
                    return e.requestAwaitService.addRequest(i), i;
                  },
                  removeAlerts: (t) =>
                    (0, mt.DV)(
                      () =>
                        Promise.resolve(
                          t.forEach(({ alertId: t, removalReason: i }) => {
                            e.alertProcessor.removeAlert(t, { _tag: "alertApplied" === i ? at.i.alertAccepted : at.i.ignore });
                          })
                        ),
                      (e) => (n.warn("Error removing alerts", { removedAlertsInfo: t, error: e }), Promise.reject(e))
                    ),
                  setAlertsVisibility: (t) => (
                    e.highlightsUpdater.setAlertsVisibility(t),
                    e.highlightsScroller.scrollToEmphasizedAlert(t, i.get()),
                    Promise.resolve(void 0)
                  ),
                  updateAlertsVisibility: (t) => (
                    e.highlightsUpdater.updateAlertsVisibility(t),
                    e.highlightsScroller.scrollToEmphasizedAlert(t, i.get()),
                    Promise.resolve(void 0)
                  )
                },
                monitoringService: {
                  notify: (t) =>
                    (function (e, t, i, s) {
                      "error" === t.kind
                        ? e.cheetah.error(t, i, s)
                        : "warn" === t.kind
                        ? e.cheetah.warning(t, i, s)
                        : "info" === t.kind
                        ? e.cheetah.info(t, i, s)
                        : (0, L.L0)(t.kind);
                    })(e.telemetry, t, e.domain, e.getSessionUuid())
                },
                logger: n
              });
            var o, c;
            return {
              revisionEngine: a,
              dispose: () => {
                e.highlightsUpdater.clearAll(), s.unsubscribe(), r();
              }
            };
          });
      }
      var _t = i(51129);
      function bt(e, t, i) {
        const s = "business" === i.previousUserType || "edu" === i.previousUserType || "ngo" === i.previousUserType;
        let n = "free";
        return (
          s ? (n = "institution") : "premium" === i.previousUserType && (n = "premium"),
          e.anonymous
            ? { kind: n, institutionType: s ? i.previousUserType : void 0 }
            : {
                id: e.id,
                isPremium: _t.n5.isPremium(e),
                dialect: t,
                email: e.email,
                institution: (0, l.zG)(
                  H.fromNullable(e.institutionInfo),
                  H.map(({ id: e, name: t }) => ({ id: e, name: t }))
                )
              }
        );
      }
      var St = i(13853),
        ft = i(7604),
        wt = i(95300),
        yt = i(73975);
      class At {
        constructor(e) {
          (this._params = e),
            (this._subs = new v.w()),
            (this._visibleAlerts = new wt.X(new Set())),
            (this._emphasizedAlerts = new wt.X(new Set())),
            (this.hasHighlights = this._visibleAlerts.pipe(
              C.U((e) => e.size > 0),
              U.O(!1),
              E.x(),
              F.shareReplay({ bufferSize: 1, refCount: !0 })
            )),
            (this.alertsFilter = I.aj([
              this._visibleAlerts.pipe(F.skipBy(St.Eh(yt.yv))),
              this._emphasizedAlerts.pipe(F.skipBy(St.Eh(yt.yv)))
            ]).pipe(
              P.b(0),
              C.U(
                ([e, t]) =>
                  (i) =>
                    e.has(i.id) || t.has(i.id)
              )
            )),
            this._subs.add(
              this._visibleAlerts.subscribe((e) => {
                var t;
                return null === (t = this._params.logger) || void 0 === t ? void 0 : t.debug("visible highlights", e);
              })
            ),
            this._subs.add(
              this._emphasizedAlerts.subscribe((e) => {
                var t;
                return null === (t = this._params.logger) || void 0 === t ? void 0 : t.debug("emphasized highlights", e);
              })
            );
        }
        setAlertsVisibility(e) {
          this.clearAll();
          const t = new Set(this._visibleAlerts.value),
            i = new Set(this._emphasizedAlerts.value);
          e
            .filter((e) => "hidden" !== e.visibility)
            .forEach(({ alertId: e, visibility: s }) => {
              this._params.getAlertById(e) && (t.add(e), "emphasized" === s && i.add(e));
            }),
            this._visibleAlerts.next(t),
            this._emphasizedAlerts.next(i);
        }
        updateAlertsVisibility(e) {
          const t = new Set(this._visibleAlerts.value),
            i = new Set(this._emphasizedAlerts.value);
          e.forEach(({ alertId: e, visibility: s }) => {
            this._params.getAlertById(e) && "hidden" !== s
              ? (t.add(e), "emphasized" === s ? i.add(e) : i.delete(e))
              : (t.delete(e), i.delete(e));
          }),
            this._visibleAlerts.next(t),
            this._emphasizedAlerts.next(i);
        }
        clearAll() {
          this._visibleAlerts.next(new Set()), this._emphasizedAlerts.next(new Set());
        }
        getHighlightVisualState(e) {
          const t = this._params.alertStateService.getHighlightedAlert().pipe(
              C.U((t) => {
                var i;
                return !0 === (null === (i = null == t ? void 0 : t.highlightIds) || void 0 === i ? void 0 : i.includes(e));
              }),
              U.O(!1),
              E.x()
            ),
            i = this._params.alertStateService.getActiveAlertByClick().pipe(
              C.U((t) => {
                var i;
                return !0 === (null === (i = null == t ? void 0 : t.highlightIds) || void 0 === i ? void 0 : i.includes(e));
              }),
              U.O(!1),
              E.x()
            ),
            s = this._emphasizedAlerts.pipe(
              C.U((t) => Array.from(t).some((t) => this._params.aquaAlertsWiring.getHighlightsForAlert(t).includes(e))),
              E.x()
            );
          return I.aj([t, i, s]).pipe(
            C.U(([e, t, i]) => ({ hovered: e, selectedByClick: t, emphasized: i })),
            U.O({ hovered: !1, selectedByClick: !1, emphasized: !1 }),
            T.G(),
            C.U(([e, t]) =>
              t.hovered || t.selectedByClick
                ? ft.pc.hovered
                : t.emphasized
                ? e.hovered || e.selectedByClick
                  ? ft.pc.hovered
                  : ft.pc.hoveredNeedsAttention
                : ft.pc.none
            ),
            U.O(ft.pc.none),
            E.x(),
            R.b((t) => {
              var i;
              return null === (i = this._params.logger) || void 0 === i ? void 0 : i.debug(`[${e}] visual state:`, t);
            })
          );
        }
        dispose() {
          this.clearAll(), this._subs.unsubscribe();
        }
      }
      class xt {
        constructor(e) {
          (this._params = e), (this._subscriptions = new v.w()), (this._currentEmphasizedAlertId = null);
        }
        scrollToEmphasizedAlert(e, t) {
          this._params.experimentClient.isGateEnabled(Ke.K.CheetahMergedWithExtensionScrolling) &&
            e.forEach(({ alertId: e, visibility: i }) => {
              const s = this._params.getAlertById(e);
              if (s && "emphasized" === i && e !== this._currentEmphasizedAlertId) {
                if (s.highlightRanges.length > 1 && e === t) return;
                const i = s.highlightRanges[0];
                i && (this._params.integration.scrollToHighlight(i), (this._currentEmphasizedAlertId = e));
              }
            });
        }
        dispose() {
          this._subscriptions.unsubscribe();
        }
      }
      var It = i(65432),
        Ct = i(62497),
        Rt = i(99966);
      class kt {
        constructor({ gOS: e, createEditSession: t, changes: i }) {
          (this._defaultSkillRequestsValue = { size: { width: 416, height: 245 }, close: !1 }),
            (this._bg = new Rt.X(new Ct.rr("skills-bg-d5ccc5edf7e1", (0, m.OB)().message))),
            (this._running = null),
            (this._requests = new wt.X(this._defaultSkillRequestsValue)),
            (this._gOS = e),
            (this._createEditSession = t),
            (this._editorChanges = i.subscribe(({ selection: e, document: t }) => {
              if (null == this._running) return;
              const i = new It.RS(this._running.rpc.call.bind(this._running.rpc));
              e && i.selectionUpdated(null), t && i.textUpdated(null);
            }));
        }
        dispose() {
          this._editorChanges.unsubscribe();
        }
        get skillRequests() {
          return this._requests.asObservable();
        }
        getSkills() {
          return a.Y3(async () => {
            try {
              return await this._bg.api.getSkills();
            } catch (e) {
              throw new Error(`Failed to get skills: ${e}`);
            }
          }, V.toError);
        }
        initSkill(e, t) {
          return (
            null != this._running && this._gOS.forceTerminate(this._running),
            a.Y3(
              () =>
                new Promise((i) => {
                  const s = { kind: "ui", id: `skill-${e.id}`, displayName: e.displayName, entryPoint: e.srcUrl, version: "1.0.0" };
                  this._gOS.registry.register(s);
                  const { applet: n } = this._gOS.createUIAppletContainer(
                    (0, It.SP)(s),
                    {
                      onInit: (e) => {
                        this._requests.next({ ...this._requests.getValue(), size: e.initialSize }), i(e.initialSize);
                      },
                      onResize: (e) => {
                        this._requests.next({ ...this._requests.getValue(), size: e });
                      },
                      onClose: () => {
                        this._requests.next({ ...this._requests.getValue(), close: !0 });
                      }
                    },
                    this._createEditSession(),
                    t
                  );
                  (this._running = n), this._requests.next(this._defaultSkillRequestsValue);
                }),
              V.toError
            )
          );
        }
        terminateSkill(e) {
          return a.Y3(async () => {
            if (null == this._running) return;
            const t = (0, It.SP)({ kind: "ui", id: `skill-${e.id}` });
            if ((0, It.SP)(this._running.manifest) !== t) return;
            const i = this._running;
            (this._running = null), await i.gracefullyUnloadApplet();
          }, V.toError);
        }
      }
      var Et = i(87827);
      class Ut extends Rt.X {
        constructor() {
          const e = mt.iy.create();
          super(new Ct.rr("gOS-bg-d5ccc5edf7e1", (0, m.OB)().message, e)), (this.id = e);
        }
      }
      function Tt(e) {
        return "dev-qa" === e || "qa" === e ? "qa" : "dev-preprod" === e ? "preprod" : "prod";
      }
      var Ot,
        Bt = i(24853);
      function Pt(e, t) {
        return JSON.stringify({ clientId: e, instanceId: t });
      }
      class Mt extends Bt.S {
        constructor(e, t) {
          super(new zt("gOS-fg-d5ccc5edf7e1", (0, m.OB)().message, e.id), {
            dispatchAction: ({ clientId: e }, i, s, n) => t.dispatchAction(Pt(e, i), s, n),
            dispose: ({ clientId: e }, i) => t.dispose(Pt(e, i))
          });
        }
      }
      class zt {
        constructor(e, t, i) {
          (this._rpcMessageName = e),
            (this._message = t),
            (this._clientId = i),
            (this.inbound = new D.y((e) => {
              const t = (t) => {
                t.clientId === this._clientId && e.next(t);
              };
              return this._message.on(this._rpcMessageName, t), () => this._message.off(this._rpcMessageName, t);
            })),
            (this.outbound = (e) => {
              this._message.sendBackground(this._rpcMessageName, e);
            });
        }
      }
      class Gt {
        constructor(e) {
          this._host = e;
        }
        _getContainerFor(e) {
          const t = this._host.getAppletContainer(e);
          if (null == t) throw new Error(`No applet container for context ${e}`);
          return t;
        }
        async dispatchAction(e, t, i) {
          const s = this._getContainerFor(e),
            n = t.split(".").slice(0, -1).join(".");
          return null == s.objects.get(n) ? await s.rpc.call(t, i) : await s.objects.execute(t, i);
        }
        async dispose(e) {}
      }
      class Nt {
        constructor(e) {
          var t;
          (this._didReceiveReadyMessage = !1),
            (this._onMessageListeners = []),
            (this._pendingOutgoingMessages = []),
            (this._onMessage = (e) => {
              null != e.source &&
                e.source === this._iframe.contentWindow &&
                ((this._didReceiveReadyMessage = !0),
                this._onMessageListeners.forEach((t) => t(e.data)),
                this._flushPendingOutgoingMessages());
            }),
            (this._flushPendingOutgoingMessages = () => {
              if (this._didReceiveReadyMessage && 0 !== this._pendingOutgoingMessages.length && null != this._iframe.contentWindow) {
                for (const e of this._pendingOutgoingMessages) this._iframe.contentWindow.postMessage(e, this._iframeTargetOrigin);
                this._pendingOutgoingMessages.length = 0;
              }
            }),
            (this._iframe = e);
          const i = new URL(e.src, self.location.href),
            s = i.origin,
            n = self.origin;
          (this._iframeTargetOrigin =
            "null" === n ||
            ("http:" === self.location.protocol && "https:" === i.protocol) ||
            !1 === (null === (t = e.getAttribute("sandbox")) || void 0 === t ? void 0 : t.includes("allow-same-origin"))
              ? "*"
              : s),
            self.addEventListener("message", this._onMessage);
        }
        postMessage(e) {
          null != this._iframe.contentWindow && this._didReceiveReadyMessage
            ? (this._flushPendingOutgoingMessages(), this._iframe.contentWindow.postMessage(e, this._iframeTargetOrigin))
            : this._pendingOutgoingMessages.push(e);
        }
        onMessage(e) {
          this._onMessageListeners.push(e);
        }
        dispose() {
          self.removeEventListener("message", this._onMessage),
            (this._onMessageListeners.length = 0),
            (this._pendingOutgoingMessages.length = 0);
        }
      }
      !(function (e) {
        (e.postMessage = "postMessage"), (e.resize = "resize"), (e.setSource = "setSource");
      })(Ot || (Ot = {}));
      class Ft {
        constructor(e, t) {
          const i = null != t ? t : document.createElement("iframe");
          null == i.getAttribute("sandbox") && i.setAttribute("sandbox", "allow-scripts"),
            (i.allow = "clipboard-read *; clipboard-write *"),
            (i.src = `${e.baseUri}src/gOS-sandbox.html`),
            (this._frame = i),
            (this._messenger = new Nt(i)),
            (this._shouldDetach = null == t);
        }
        setSource(e) {
          this._messenger.postMessage({ type: Ot.setSource, url: e });
        }
        resize(e) {
          const t = 0 === e.height ? "" : `${e.height}`;
          (this._frame.width = `${e.width}`), (this._frame.height = `${t}`), this._messenger.postMessage({ type: Ot.resize, size: e });
        }
        postMessage(e) {
          this._messenger.postMessage({ type: Ot.postMessage, data: e });
        }
        onMessage(e) {
          this._messenger.onMessage(e);
        }
        dispose() {
          this._messenger.dispose(), this._shouldDetach && this._frame.remove();
        }
        get frame() {
          return this._frame;
        }
      }
      class Dt {
        constructor(e, t = (0, m.OB)().browserApi) {
          (this._usingFrame = e), (this._api = t);
        }
        createBackgroundSandbox(e, t) {
          throw new Error("Not supported");
        }
        createUISandbox(e, t) {
          return new Ft(this._api, this._usingFrame);
        }
      }
      class qt {
        constructor(e, t, i) {
          (this._container = e), (this._delegates = t), (this._logger = i);
        }
        async initialize(e) {
          var t, i;
          this._resize(e.initialSize);
          const s = await this._container.createInitializeResponse(e);
          return null === (i = (t = this._delegates).onInit) || void 0 === i || i.call(t, e), { ...s, platform: "extension" };
        }
        async visuallyReady() {}
        async resizeFrame(e) {
          var t, i;
          null === (i = (t = this._delegates).onResize) || void 0 === i || i.call(t, this._resize(e));
        }
        _resize(e) {
          var t, i;
          const s = Math.max(
              null !== (i = null === (t = this._container.view.frame.parentElement) || void 0 === t ? void 0 : t.clientWidth) &&
                void 0 !== i
                ? i
                : 0,
              e.width
            ),
            n = e.height;
          return this._container.view.resize({ width: s, height: n }), { width: s, height: n };
        }
        async requestClose() {
          var e, t;
          null === (t = (e = this._delegates).onClose) || void 0 === t || t.call(e),
            setTimeout(() => {
              this._container.gracefullyUnloadApplet();
            }),
            (this._container.view.frame.style.display = "none");
        }
        async startDragMove() {}
        async log(e) {
          this._logger.log(e.level, e.message, e.data, "", -1, -1, "");
        }
        async openURL(e) {
          if (null == self.open(e.url, "_blank", "noopener")) throw new Error("Failed to open URL");
        }
        async triggerSettingsMenu(e) {}
      }
      class Ht {
        constructor(e, t, i) {
          (this.registry = i),
            (this._nextInstanceId = 0),
            (this._running = new Map()),
            (this._logger = p.Y.create("GOSRuntimeHost")),
            (this._root = new It._y(e, i).withContainerFactory(new Dt())),
            (this._background = t);
        }
        getAppletContainer(e) {
          return this._running.get(
            (function (e) {
              return JSON.parse(e);
            })(e).instanceId
          );
        }
        createUIAppletContainer(e, t = {}, i, s) {
          const n = this._nextInstanceId++;
          let a = this._root;
          null != s && (a = a.withContainerFactory(new Dt(s))),
            null != i && (a = a.withEditSession(i)),
            this._registerForwardingServices(a, (e, t) => this._background.dispatchAction(n, e, t));
          const r = a.createAppletView(e);
          this._running.set(n, r);
          const o = a.environment.makeLogger(e),
            l = new qt(r, t, o);
          return (
            r.objects.register(It.xe.objectName, new It.xe(l)),
            r.onBeforeUnload(() => {
              this._running.delete(n), this._background.dispose(n), r.view.dispose();
            }),
            new It.GO(r.rpc.call.bind(r.rpc.call))
              .start({
                entryPoint: "ideation",
                userState: {
                  settings: { inlineQuickReplyEnabled: !0, inlineRewriteEnabled: !0 },
                  usage: { promptsAllocated: 100, promptsRemaining: 100, refillDate: new Date().toISOString() }
                }
              })
              .catch(() => {}),
            { applet: r, host: l }
          );
        }
        forceTerminate(e) {
          this._logger.warn(`Force terminating applet: ${e.manifest.id}`),
            this._running.forEach((t, i) => {
              t === e && this._running.delete(i);
            });
          try {
            e.unloadApplet(), e.objects.dispose(), e.rpc.dispose();
          } catch (e) {
            this._logger.error(`Failed to force terminate applet: ${e}`);
          }
        }
        _registerForwardingServices(e, t) {
          e.registerObject("host.authorizedHttpClient", new It.Wr(new It.ik(t))),
            e.registerObject("host.capiSocket", new It.Hd(new It.C(t))),
            e.registerObject("host.userAccount", new It.Ng(new It.c3(t)));
        }
      }
      class Wt {
        static get shared() {
          return null === this._instance && (this._instance = new Wt(new Et.h((0, m.OB)().browserApi.preferences))), this._instance;
        }
        constructor(e) {
          (this.store = e), (this._cache = null);
        }
        get _state() {
          return null === this._cache && (this._cache = this._create()), this._cache;
        }
        _create() {
          const e = new It.Ic(),
            t = new Ut(),
            i = new Ht(
              (function (e, t) {
                const { bgRpc: i } = t,
                  { buildInfo: s, bundleInfo: n } = t.config;
                return {
                  environment: Tt(n.env),
                  async getContainerId() {
                    var e;
                    return null !== (e = await i.api.getContainerIdOrUndefined()) && void 0 !== e ? e : "";
                  },
                  async getUserId() {
                    var t, i;
                    return null !== (i = null === (t = (await e.get(["user"])).user) || void 0 === t ? void 0 : t.id) && void 0 !== i
                      ? i
                      : "-1";
                  },
                  clientName: n.extensionType,
                  clientVersion: s.version,
                  clientType: "extension",
                  isDebugMode: n.env.startsWith("dev"),
                  openURL(e) {},
                  makeLogger: (e) => {
                    return (
                      (t = p.Y.create(`applet/${e}`)),
                      {
                        log(e, i, s, n, a, r, o) {
                          const l = a > 0 ? `${i} (${o} at ${n}:${a}:${r})` : i;
                          switch (e) {
                            case "debug":
                              t.debug(l, s);
                              break;
                            case "info":
                              t.info(l, s);
                              break;
                            case "warn":
                              t.warn(l, s);
                              break;
                            case "error":
                              t.error(l, s);
                          }
                        }
                      }
                    );
                    var t;
                  },
                  makePerformanceTracker: () => ({})
                };
              })(this.store, (0, m.OB)()),
              t.api,
              e
            );
          return { registry: e, client: t, host: i, server: new Mt(t, new Gt(i)) };
        }
        get registry() {
          return this._state.registry;
        }
        get host() {
          return this._state.host;
        }
        dispose() {
          null !== this._cache && (Object.values(this._cache).forEach((e) => "dispose" in e && e.dispose()), (this._cache = null));
        }
      }
      Wt._instance = null;
      class jt {
        constructor(e) {
          this._options = e;
        }
        async getCapabilities() {
          return "plaintext" === this._options.type
            ? {
                insertText: "yes",
                insertTextWithFormatting: "no",
                insertTextWithImages: "no",
                insertTextWithLinks: "no",
                pasteImages: "no"
              }
            : {
                insertText: "yes",
                insertTextWithFormatting: "yes",
                insertTextWithImages: "yes",
                insertTextWithLinks: "yes",
                pasteImages: "yes"
              };
        }
        async setSelection({ range: e }) {
          this._options.setSelection(e);
        }
        async getDocumentState({ withSelection: e }) {
          let t;
          e && (t = this._options.getSelection().find(Boolean));
          return { doc: { ops: this._options.getText().ops }, selection: t };
        }
        async pasteImage({ data: e, format: t }) {
          const i = await Vt(t, e);
          if ((await this._copyToClipboard(i), "plaintext" === this._options.type)) throw new Error("Cannot paste image into plaintext");
          this._options.replaceText(new rt.i([{ insert: { image: URL.createObjectURL(i) } }]));
        }
        async _copyToClipboard(e) {
          const t = {};
          ["image/png", "text/html", "text/plain"].includes(e.type)
            ? (t[e.type] = e)
            : ((t[`web ${e.type}`] = e),
              e.type.startsWith("image/") && (t["text/html"] = new Blob([`<img src="${URL.createObjectURL(e)}">`], { type: "text/html" }))),
            await navigator.clipboard.write([new ClipboardItem(t)]);
        }
        async copyImage({ data: e, format: t }) {
          const i = await Vt(t, e);
          await this._copyToClipboard(i);
        }
        async copyText({ text: e }) {
          await navigator.clipboard.writeText(e);
        }
        async insertText({ text: e }) {
          await this._options.replaceText(e);
        }
        async insertAtCaret({ delta: e }) {
          "gDocs" === this._options.type
            ? await this._options.insertAtCaret(new rt.i(e.ops))
            : await this._options.replaceText(new rt.i(e.ops));
        }
        async applyDelta({ delta: e }) {
          await this._options.replaceText(new rt.i(e.ops));
        }
      }
      async function Vt(e, t) {
        if (!["png", "gif", "jpeg"].includes(e)) throw new Error(`Unsupported format: ${e}`);
        const i = await fetch(`data:image/${e};base64,${t}`);
        return await i.blob();
      }
      var Lt = i(45630);
      class $t {
        constructor(e) {
          (this._experimentClient = e), (this.gates = Lt.CI), (this.experiments = Lt.V);
        }
        getTreatment(e) {
          return a.Y3(
            async () => (await this._experimentClient.fetchTreatments(), this._experimentClient.getTreatment(e)),
            (e) => String(e)
          );
        }
        isGateEnabled(e) {
          return a.Y3(
            async () => (await this._experimentClient.fetchTreatments(), this._experimentClient.isGateEnabled(e)),
            (e) => String(e)
          );
        }
        logTreatment(e, t) {
          return a.Y3(
            async () => {
              await this._experimentClient.logTreatment(e, t);
            },
            (e) => String(e)
          );
        }
        peekTreatment(e) {
          return a.Y3(
            async () => (await this._experimentClient.fetchTreatments(), this._experimentClient.peekTreatment(e)),
            (e) => String(e)
          );
        }
      }
      var Zt = i(95399);
      function Yt(e, t, i) {
        return Zt.z(gt.P(() => B.D(t())).pipe(w.h(i)), e);
      }
      var Qt = i(53917),
        Kt = i(3236),
        Jt = i(40327),
        Xt = i(70063);
      class ei {
        constructor(e, t, i, s) {
          (this._height = t), (this._position = i), (this._dependencies = s), (this._subs = new v.w()), this.startTrackingAssistantDrag(e);
        }
        trackAssistantOpen(e) {
          const { checkingService: t, gnar: i, statisticsService: s } = this._dependencies,
            n = s.alertCounts.get(),
            a = (0, Jt.pipe)(
              t.get(),
              H.chain((e) => H.fromNullable(e.sessionUuid)),
              H.fold(
                () => "",
                (e) => e
              )
            );
          i.assistantPopupShow(
            "default",
            this._height.get(),
            this._position.get().left,
            this._position.get().top,
            n.unmutedCapiAlerts,
            n.filter((e) => ot.S.isCapiAlert(e) && e.outcome === Ie.TC.clarity).visibleNotInlineCapiAlerts,
            n.visibleInlineCapiAlerts,
            n.filter((e) => ot.S.isCapiAlert(e) && "priority" === e.assistantView).unmutedCapiAlerts,
            s.wordsCount.get(),
            "sticky",
            a,
            void 0,
            e,
            s.generalScore.get()
          );
        }
        trackAssistantClose() {
          const { gnar: e, statisticsService: t } = this._dependencies,
            i = t.alertCounts.get();
          e.assistantPopupCloseButtonClick(
            "default",
            i.unmutedCapiAlerts,
            i.filter((e) => ot.S.isCapiAlert(e) && e.outcome === Ie.TC.clarity).visibleNotInlineCapiAlerts,
            i.visibleInlineCapiAlerts,
            i.filter((e) => ot.S.isCapiAlert(e) && "priority" === e.assistantView).unmutedCapiAlerts,
            void 0
          );
        }
        startTrackingAssistantDrag(e) {
          const t = this._position.get();
          let i = t;
          this._subs.add(
            e
              .pipe(
                T.G(),
                w.h(([e, t]) => e && !t)
              )
              .subscribe(() => {
                const e = this._position.get();
                Xt.E9.l1Distance(e, i) < ei.MINIMAL_RECOGNIZABLE_DRAG_DISTANCE ||
                  (this._dependencies.gnar.assistantPopupDrag(e.left, e.top, this._height.get(), t.left, t.top), (i = e));
              })
          );
        }
        dispose() {
          this._subs.unsubscribe();
        }
      }
      ei.MINIMAL_RECOGNIZABLE_DRAG_DISTANCE = 10;
      const ti = { trackAssistantOpen: () => {}, trackAssistantClose: () => {}, startTrackingAssistantDrag: () => {}, dispose: () => {} },
        ii = "extension-assistant-open-attempt",
        si = (0, $.xb)(J.G),
        ni = new Set([
          "onboarding",
          "gdocsOnboardingPopup",
          "loginSSO",
          "accountMigration",
          "standWithUkraineGrammarlySuspended",
          "claimedUser",
          "dataControl",
          "noPaymentMethodSubscription",
          "grammarlyBusinessSigninPopup",
          "gdocsFeedbackUI"
        ]),
        ai = new Set([
          "onboarding",
          "gdocsOnboardingPopup",
          "loginSSO",
          "accountMigration",
          "standWithUkraineGrammarlySuspended",
          "claimedUser",
          "dataControl",
          "grammarlyBusinessSigninPopup"
        ]);
      function ri(e) {
        return "opened" === e.kind;
      }
      class oi {
        constructor(e) {
          (this._params = e),
            (this._subs = new v.w()),
            (this._log = p.Y.create("CheetahFeatureImpl")),
            (this._inlineButtonUI = Z.h.create(null)),
            (this._ideateButtonUI = Z.h.create(null)),
            (this._expandedIdeateButtonUI = Z.h.create(null)),
            (this._assistantUI = Z.h.create(null)),
            (this._highlightUI = Z.h.create(null)),
            (this._quasiCaretUI = Z.h.create(null)),
            (this._onboardingUI = Z.h.create(null)),
            (this._nativeCursorHider = Z.h.create(H.none)),
            (this._lastRestartAttemptTime = Z.h.create(0)),
            (this._contextHighlight = Z.h.create(H.none)),
            (this._highlightsUpdater = new At({
              getAlertById: (e) => this._params.alertProcessor.alerts.getAlertById(e),
              aquaAlertsWiring: this._params.aquaAlertsWiring,
              alertStateService: this._params.alertStateService,
              logger: p.Y.create("cheetah.revision.highlights")
            })),
            (this._highlightsScroller = new xt({
              integration: this._params.integration,
              experimentClient: this._params.experimentClient,
              getAlertById: (e) => this._params.alertProcessor.alerts.getAlertById(e)
            })),
            (this._ideateButtonTooltipNotificationState = Z.h.create(H.none)),
            (this._assistantFocused = Z.h.create(!1)),
            (this._inlineButtonRecentlyPressed = Z.h.create(!1)),
            (this._ideateButtonRecentlyHovered = Z.h.create(!1)),
            (this._selectionRange = Z.h.create(H.none)),
            (this._highlights = Z.h.create([])),
            (this._quasiCaretRect = Z.h.create(H.none)),
            (this._assistantUIState = Z.h.create(H.none)),
            (this._onboardingViewModels = Z.h.create(H.none)),
            (this._ideateButtonRefChange = new _.xQ()),
            (this._disposed = new _.xQ()),
            (this._initialOnboardingBlockedForSession = Z.h.create(!1)),
            (this._assistantServices = (function (
              e,
              t,
              i,
              s,
              n,
              o,
              c,
              d,
              b,
              A,
              x,
              E,
              U,
              T,
              O,
              B,
              P,
              M,
              W,
              $,
              Y,
              Q,
              K,
              J,
              X,
              ee,
              te,
              ie,
              se,
              ne,
              ae,
              re,
              oe,
              le,
              ce
            ) {
              const de = new _.xQ(),
                he = () =>
                  (0, l.zG)(
                    e.get(),
                    V.fromOption(() => new Error("checking service not initialized"))
                  ),
                pe = {
                  notify(e) {
                    null == ce || ce.info("received monitoring event", { event: e }),
                      (0, l.zG)(
                        he(),
                        V.map((e) => e.sessionUuid),
                        V.map((t) => {
                          "error" === e.kind
                            ? (re.cheetah.error(e, ne, t),
                              ("waitForContextTimeout" !== e.name && "waitForAckTimeout" !== e.name) ||
                                "getContext" !== e.source ||
                                (Date.now() - se.get() > u.LK(5)
                                  ? (se.set(Date.now()), ae())
                                  : (0, l.zG)(
                                      e.name,
                                      (e) =>
                                        "waitForAckTimeout" === e
                                          ? "ack"
                                          : "waitForContextTimeout" === e
                                          ? "setContext"
                                          : void (0, L.L0)(e),
                                      (e) => re.cheetah.sessionRestartTimeout(e, ne, t)
                                    )))
                            : "info" === e.kind
                            ? re.cheetah.info(e, ne, t)
                            : "warn" === e.kind
                            ? re.cheetah.warning(e, ne, t)
                            : (0, L.L0)(e.kind);
                        })
                      );
                  }
                },
                ue = new ze.t({
                  inboundCAPIMessages: Yt(t, i, Ge.J4),
                  sendCAPIMessage: ({ action: e, data: t, shouldInjectRev: i, shouldInjectSessionId: s }) =>
                    (0, l.zG)(
                      a.Uo(he()),
                      a.tS((n) => n.sendMessage(e, t, i, s))
                    ),
                  monitoringService: pe
                }),
                ge = new Ne.c(ue),
                me = {
                  user: Z.h.combine(s, o, n, bt),
                  setDialect: c,
                  signIn: () => {
                    const e = (0, m.OB)().browserApi;
                    e.beginOAuth ? e.beginOAuth() : self.open((0, g.s7)("signedOutUI"), "_blank", "noreferrer");
                  }
                },
                ve = new Fe.L(
                  ue,
                  A.view(
                    (0, l.ls)(
                      H.chain((e) => H.fromNullable(e.cheetahState)),
                      H.fold(
                        () => ({ enabled: !1 }),
                        (e) => ({ enabled: !0, userState: e })
                      )
                    )
                  )
                ),
                _e = d.pipe(
                  S.w(
                    H.fold(
                      () => k.of(H.none),
                      (e) => e.sessionService.session.view(H.some)
                    )
                  )
                ),
                be = x.pipe(
                  z.QV(G.E),
                  N.R((e, t) => {
                    const i = e.filter(ci);
                    return t && ci(t) ? [...i, t] : i;
                  }, []),
                  C.U(Ce.Z$),
                  F.shareReplay({ bufferSize: 1, refCount: !0 })
                ),
                Se = I.aj([be, E, U]).pipe(
                  C.U(([e, t, i]) =>
                    (0, l.zG)(
                      e,
                      H.filter(() => t),
                      H.fold(
                        () => ({}),
                        (e) => ({
                          [De.n.initialPopupAnchor]: i ? { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 } : void 0,
                          [De.n.initialBTSPopupAnchor]: i ? { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 } : void 0,
                          [De.n.rewriteTooltipAnchor]: { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 }
                        })
                      )
                    )
                  )
                ),
                fe = (e) => {
                  null == ce || ce.debug(`Completing step [${e}]`);
                  O.get()[e].extension.completed || B({ [e]: { completed: !0, lastSeen: Date.now() } });
                },
                we = () => {
                  const e = new Set();
                  (P.get().rewrite && M) || e.add(Ee.T.StepName.rewrite),
                    P.get().compose || e.add(Ee.T.StepName.initial),
                    P.get().onboarding ||
                      (e.add(Ee.T.StepName.initial),
                      e.add(Ee.T.StepName.initialBTS),
                      e.add(Ee.T.StepName.rewrite),
                      e.add(Ee.T.StepName.prompts),
                      e.add(Ee.T.StepName.review),
                      e.add(Ee.T.StepName.knowledgeHub),
                      e.add(Ee.T.StepName.references));
                  const t = (0, l.zG)(
                    A.get(),
                    H.map((e) => "ASSIGNMENT_WRITING" === e.defaultDocumentContext.writingIntent),
                    H.getOrElse(l.jv)
                  );
                  return (
                    (P.get().onboardingBTS && t) || e.add(Ee.T.StepName.initialBTS),
                    P.get().knowledgeHubIntegration || e.add(Ee.T.StepName.knowledgeHub),
                    (0, qe.Q)({
                      upstreamOnboardingState: O,
                      session: _e,
                      textStats: b,
                      forceDisabledOnboardingSteps: e,
                      assistantUIActions: de,
                      externalElements: Se,
                      hideAssistantOnboardingTooltips: d.pipe(
                        S.w(
                          H.fold(
                            () => Z.h.create(!1),
                            (e) => e.dragBehavior.pipe(C.U((e) => "draggable" === e.kind && e.isDragging))
                          )
                        )
                      ),
                      promptsAllocated: ve.availability.view(ke._.getPromptsAllocated),
                      client: "extension",
                      trackingService: ge,
                      disposed: T,
                      logger: Ye.C8.Logging.getLogger("OnboardingCompletionEffects"),
                      completeOnboardingStep: fe
                    })
                  );
                },
                ye = {
                  flush: () =>
                    a.fF(() =>
                      new D.y((t) => {
                        const i = new v.w();
                        return (
                          W.empty.get()
                            ? t.next(void 0)
                            : (W.flush(),
                              (0, l.zG)(
                                e.get(),
                                H.fold(
                                  () => t.next(void 0),
                                  (e) => {
                                    i.add(
                                      e.messages
                                        .pipe(
                                          w.h((e) => e._tag === Ie.J8.Type.submitOtAck),
                                          q.L(500, k.of(null)),
                                          R.b(() => t.next(void 0))
                                        )
                                        .subscribe()
                                    );
                                  }
                                )
                              )),
                          () => i.unsubscribe()
                        );
                      })
                        .pipe(y.q(1))
                        .toPromise()
                    ),
                  getText: (e) => a.tD(() => $(e)),
                  insertText: (e) => a.tD(() => Y(e)),
                  copyText: (e) => () => (0, h.v)(e).pipe(y.q(1)).toPromise(),
                  setContextHighlight: (e, t) => {
                    te.set(H.some({ range: e, visibility: t }));
                  },
                  selectedRange: Q,
                  textUpdated: ee
                },
                Ae = {
                  reportUphookShow: (e) =>
                    a.tD(() => {
                      e.isPremium ||
                        ((0, $e.n)(ie, {
                          placement: "grammarlyGoPrompts",
                          upgradeHookName: "grammarlyGoPrompts",
                          upgradeHookSlot: "grammarlyGo"
                        }),
                        re.upgradeHooks.showUpgradeHook("grammarlyGoPrompts", "grammarlyGo"));
                    }),
                  reportUphookClick: (e) =>
                    a.tD(() => {
                      e.isPremium
                        ? self.open(r.Rd().appConfig.url.support)
                        : ((0, $e.Q)(ie, {
                            placement: "grammarlyGoPrompts",
                            upgradeHookName: "grammarlyGoPrompts",
                            upgradeHookSlot: "grammarlyGo"
                          }),
                          re.upgradeHooks.clickUpgradeHook("grammarlyGoPrompts", "grammarlyGo"),
                          (0, Le.wW)("upHook", "grammarlyGoPrompts"));
                    })
                },
                xe = {
                  domain: k.of(ne),
                  submitFeedback: (e) =>
                    a.Y3(
                      () =>
                        (0, l.zG)(
                          e.source,
                          (e) =>
                            e === He.x.Source.resultCard
                              ? "cheetah-card"
                              : e === He.x.Source.quickReplyInitialActions || e === He.x.Source.intentCard
                              ? "cheetah-quick-reply"
                              : void (0, L.L0)(e),
                          (t) => ie.feedbackFormSubmit(e.mood, t, e.domain, e.message)
                        ),
                      (e) => new Error(String(e))
                    )
                },
                Re = new We.p({ capiService: ue, monitoringService: pe }),
                Ue = new je.j(
                  Z.h.create({
                    contextUpdatesClient:
                      oe.isGateEnabled(Ke.K.CheetahSelectionContextUpdates) &&
                      "test" === oe.getTreatment(Je.p.CheetahSelectionContextUpdates),
                    contextUpdatesServer:
                      oe.isGateEnabled(Ke.K.CheetahSelectionContextUpdatesServer) &&
                      "test" === oe.getTreatment(Je.p.CheetahSelectionContextUpdates)
                  })
                ),
                Te = new Ve.w({
                  capiService: ue,
                  logger: p.Y.create("cheetah.toneDetectorService"),
                  trackToneReportShow: ({ tones: t, brandTonesEnabled: i }) => {
                    var s, n;
                    return ie.emogenieReportShow(
                      t.map(({ name: e, confidence: t, prevalence: i }) => ({ name: e, confidence: t, prevalence: i })),
                      i,
                      t.length,
                      null !== (n = null === (s = H.toNullable(e.get())) || void 0 === s ? void 0 : s.sessionUuid) && void 0 !== n ? n : ""
                    );
                  }
                });
              let Oe, Be;
              {
                const e = j.dH((e) => e.disableByDomain.some((e) => new RegExp(e).test(ne)), !1)(le);
                oe.isGateEnabled(Ke.K.GOSRollout) &&
                  !e &&
                  ((Oe = new $t(oe)),
                  (Pe = {
                    gOS: Wt.shared.host,
                    createEditSession: () => {
                      return (
                        (e = {
                          replacementService: X.create(Kt.P.gOsSkillApplet),
                          selectionRange: Q,
                          textObserver: K,
                          selectionService: J
                        }),
                        new jt({
                          type: e.replacementService.capabilities,
                          getSelection: () =>
                            (0, l.zG)(
                              e.selectionRange.get(),
                              j.dH((e) => [e], [])
                            ),
                          setSelection: (t) => e.selectionService.setSelection(t),
                          getText: () => e.textObserver.getTextSource().getRichText(),
                          insertAtCaret: async (t) => e.replacementService.insertAtCurrentSelection(t),
                          replaceText: async (t, i) => {
                            await e.replacementService.performReplacement({
                              pos:
                                null != i
                                  ? i
                                  : (0, l.zG)(
                                      e.selectionRange.get(),
                                      H.getOrElse(() => ({ start: 0, end: 0 }))
                                    ),
                              value: t
                            });
                          }
                        })
                      );
                      var e;
                    },
                    changes: (0, f.T)(
                      Q.pipe(C.U(() => ({ selection: !0, document: !1 }))),
                      ee.pipe(C.U(() => ({ selection: !1, document: !0 })))
                    )
                  }),
                  (Be = new kt(Pe)));
              }
              var Pe;
              return {
                capiService: ue,
                userService: me,
                genAIAvailabilityService: ve,
                trackingService: ge,
                textEditorService: ye,
                feedbackService: xe,
                uphookService: Ae,
                monitoringService: pe,
                userSurveyService: Re,
                selectionContextAvailabilityService: Ue,
                toneDetectorService: Te,
                experimentService: Oe,
                skillService: Be,
                createOnboardingViewModels: we,
                notifyAssistantUIAction: (e) => de.next(e),
                dispose: () => {
                  ve.dispose(), Re.dispose(), Ue.dispose(), null == Be || Be.dispose();
                }
              };
            })(
              this._params.checkingService,
              this._params.checkingService.pipe(
                b.oA,
                S.w((e) => e.capiMessages)
              ),
              () => Object.values(this._params.latestCAPIMessages.get()),
              this._params.user,
              this._params.csPageState,
              this._params.dapiSettings.view((e) => {
                var t, i;
                return null !== (i = null !== (t = e.dialectStrong) && void 0 !== t ? t : e.dialectWeak) && void 0 !== i ? i : "american";
              }),
              (e) => a.fF(() => this._params.dapiActions.changeStrongDialect(e)),
              this._assistantUIState,
              this._params.textStats,
              this._params.capiStartAckMessage,
              this._ideateButtonRefChange,
              Z.h.combine(
                this._params.integration.canShowIdeateButtonPopups,
                this._params.gButtonPopupState.view("type").view((e) => !ni.has(e)),
                W.xD
              ),
              Z.h.combine(
                this._params.csPageState
                  .view("cheetah")
                  .view(
                    (e) => (null == e ? void 0 : e.canShowInitialOnboarding) || (null == e ? void 0 : e.canShowInitialBTSOnboarding) || !1
                  ),
                this._initialOnboardingBlockedForSession,
                (e, t) => e && !t
              ),
              f.T(this._params.csPageState.view("isActiveTab").pipe(w.h((e) => !e)), this._disposed).pipe(y.q(1)),
              this._params.dapiSettings.view((e) =>
                (function (e) {
                  const t = Re.Z.State.toClientState(Re.Z.decode(e.extension || ""), "extension"),
                    i = Re.Z.State.toClientState(Re.Z.decode(e.editor || ""), "editor"),
                    s = Re.Z.State.toClientState(Re.Z.decode(e.llamaMac || ""), "llamaMac"),
                    n = Re.Z.State.toClientState(Re.Z.decode(e.llamaWindows || ""), "llamaWin");
                  return (0, l.zG)(
                    Re.Z.State.empty,
                    Re.Z.State.patch(t, "extension"),
                    Re.Z.State.patch(i, "editor"),
                    Re.Z.State.patch(s, "llamaMac"),
                    Re.Z.State.patch(n, "llamaWin")
                  );
                })({
                  extension: e["cheetah:onboardingState"],
                  editor: e["cheetah:onboardingState:editor"],
                  llamaMac: e["cheetah:onboardingState:llamaMac"],
                  llamaWindows: e["cheetah:onboardingState:llamaWindows"]
                })
              ),
              (e) => {
                this._params.dapiActions.modifyCheetahOnboardingState(
                  (0, l.ls)(
                    Re.Z.decode,
                    (t) =>
                      (0, l.zG)(
                        Re.Z.State.toClientState(t, "extension"),
                        (t) => ({ ...t, ...e }),
                        (e) => Re.Z.State.patch(e, "extension")(t)
                      ),
                    Re.Z.encode
                  )
                );
              },
              this._params.featureFlags,
              this._params.integration.enableInlineRewrites,
              this._params.textChangeBuffer,
              (e) => this._params.integration.getText(e),
              (e) => this._insertText(e),
              this._selectionRange,
              this._params.textObserver,
              this._params.selectionService,
              this._params.replacementServiceInjector,
              this._params.integration.textUpdated,
              this._contextHighlight,
              this._params.gnar,
              this._lastRestartAttemptTime,
              this._params.domain,
              () => this._restartAssistant(),
              this._params.telemetry,
              this._params.experimentClient,
              this._params.integration.appActionsConfig.get(),
              this._log
            )),
            (this._isOnboardingPopupVisible = Z.h.create(!1)),
            (this._entryPointsEnabled = Z.h.create(!1)),
            (this._openAssistantSubject = new _.xQ()),
            (this.inlineButtonUI = this._inlineButtonUI.view()),
            (this.ideateButtonUI = this._ideateButtonUI.view()),
            (this.expandedIdeateButtonUI = this._expandedIdeateButtonUI.view()),
            (this.assistantUI = this._assistantUI.view()),
            (this.highlightUI = this._highlightUI.view()),
            (this.quasiCaretUI = this._quasiCaretUI.view()),
            (this.onboardingUI = this._onboardingUI.view()),
            (this.assistantState = this._assistantUI.view(
              (0, l.ls)(
                H.fromNullable,
                H.fold(
                  () => ({ kind: "closed" }),
                  () => ({ kind: "opened", supportsRevision: this._params.supportsRevision })
                )
              )
            )),
            (this.isOnboardingPopupVisible = this._isOnboardingPopupVisible.view()),
            (this.isAvailable = Z.h.combine(
              this._assistantServices.genAIAvailabilityService.availability.view((0, W.ff)(ke._.isUnavailable)),
              this._params.csPageState.view("cheetah"),
              (e, t) => {
                var i;
                return e && !0 === (null === (i = null == t ? void 0 : t.status) || void 0 === i ? void 0 : i.cheetahEnabled);
              }
            )),
            (this.userSettings = this._assistantServices.genAIAvailabilityService.availability.view("userSettings")),
            this._params.dapiActions.reloadPropsRateLimited(),
            this._subs.add(
              this._params.checkingService
                .pipe(
                  b.oA,
                  S.w((e) => e.readyState),
                  w.h((e) => e === Ie.kQ.ready || e === Ie.kQ.firstTextCheckCompleted),
                  y.q(1)
                )
                .subscribe(() => this._init())
            ),
            this._subs.add(this._setupIdeateTooltipStateObs());
          const t = this._onboardingViewModels.pipe(
            S.w(
              H.fold(
                () => A.E,
                (e) => e.onboarding.uiActions
              )
            )
          );
          this._subs.add(
            t.pipe(w.h(hi)).subscribe(() => {
              this._params.cheetahCSActions.cheetahInitialOnboardingShown();
            })
          ),
            this._subs.add(
              t.pipe(w.h(pi)).subscribe(() => {
                this._params.cheetahCSActions.cheetahInitialBTSOnboardingShown();
              })
            ),
            this._subs.add(
              this._getOnboardingVMStepActive([Ee.T.StepName.initial, Ee.T.StepName.initialBTS]).subscribe(
                x.wW(this._isOnboardingPopupVisible)
              )
            ),
            this._subs.add(
              this._params.gButtonPopupState
                .view("type")
                .view((e) => ai.has(e))
                .subscribe((e) => {
                  e && this._initialOnboardingBlockedForSession.set(!0);
                })
            ),
            this._subs.add(
              I.aj([this._params.gButtonDisabledReason, this._params.integration.entryPointsEnabled])
                .pipe(
                  C.U(
                    ([e, t]) =>
                      t &&
                      !(function (e) {
                        const t = new Set([
                          Qe.P.DATA_CONTROL_ACTIVE,
                          Qe.P.OFFLINE,
                          Qe.P.STAND_WITH_UKRAINE,
                          Qe.P.USER_CLAIMED,
                          Qe.P.USER_EDC_BLOCKED,
                          Qe.P.SIGNED_OUT_GB
                        ]);
                        return null !== e && t.has(e);
                      })(e)
                  )
                )
                .subscribe(x.wW(this._entryPointsEnabled))
            ),
            (0, Qt.G)(this._params.experimentClient) ||
              this._subs.add(
                this._params.csPageState
                  .view("cheetah")
                  .view((e) => {
                    var t;
                    return !1 === (null === (t = null == e ? void 0 : e.status) || void 0 === t ? void 0 : t.cheetahEnabled);
                  })
                  .subscribe(() => this._closeAssistant(Ze.j.disposed))
              ),
            this._registerDebugHelpers();
        }
        closeAssistant(e) {
          this._closeAssistant(e);
        }
        getHoveredStateBehavior(e) {
          return this._highlightsUpdater.getHighlightVisualState(e);
        }
        getAlertsFilter() {
          return this._highlightsUpdater.alertsFilter;
        }
        suggestStartSessionMode() {
          const e = this._params.featureFlags.get();
          return (0, l.zG)(
            this._params.integration.selectionRange.get(),
            H.filter((t) => di(t) && e.rewrite),
            H.fold(
              () => "ideation",
              () => "rewrite"
            )
          );
        }
        _init() {
          this._subs.add(this._assistantFocused.subscribe((e) => this._log.debug("Assistant " + (e ? "focused" : "blurred")))),
            this._subs.add(this._openAssistantSubject.pipe(S.w((e) => this._openAssistant(e))).subscribe()),
            this._subs.add(this._params.openAssistant.subscribe(this._openAssistantSubject)),
            this._subs.add(this._getInlineButtonUI().subscribe(x.wW(this._inlineButtonUI))),
            this._subs.add(this._getIdeateButtonUI().subscribe(x.wW(this._ideateButtonUI))),
            this._subs.add(this._getExpandedIdeateButtonUI().subscribe(x.wW(this._expandedIdeateButtonUI))),
            this._subs.add(this._getHighlightUI().subscribe(x.wW(this._highlightUI))),
            this._subs.add(this._getQuasiCaretUI().subscribe(x.wW(this._quasiCaretUI))),
            this._subs.add(this._getOnboardingUI().subscribe(x.wW(this._onboardingUI))),
            this._subs.add(this._updateSelectionRange().subscribe(x.wW(this._selectionRange))),
            this._subs.add(this._updateHighlightRects().subscribe(x.wW(this._highlights))),
            this._subs.add(this._updateQuasiCaretRect().subscribe(x.wW(this._quasiCaretRect))),
            this._subs.add(this._updateNativeCursor().subscribe()),
            this._subs.add(
              this.assistantState.subscribe((e) => {
                ri(e) && this._params.closeLegacyAssistant();
              })
            ),
            this._subs.add(this._createOnboardingViewModelWhenCheetahAvailable().subscribe()),
            this._subs.add(this._handleTryItOut().subscribe());
        }
        _handleTryItOut() {
          return this._onboardingViewModels.pipe(
            S.w(
              H.fold(
                () => A.E,
                (e) => e.onboarding.uiActions
              )
            ),
            w.h(Ue.l.is(Ue.l.Kind.tryItOut)),
            R.b(() =>
              this._openAssistantSubject.next({
                mode:
                  li(this._params.integration.quickReplyContext.get()) && this._params.featureFlags.get().quickReply
                    ? "quickReply"
                    : "ideation"
              })
            )
          );
        }
        _getOnboardingVMStepActive(e) {
          return this._onboardingViewModels.pipe(
            S.w(
              H.fold(
                () => k.of(!1),
                (t) =>
                  t.onboarding.activeStep.view(
                    (0, l.ls)(
                      H.filter((e) => e.show),
                      H.map((t) => e.includes(t.name)),
                      H.getOrElse(l.jv)
                    )
                  )
              )
            ),
            E.x()
          );
        }
        _setupIdeateTooltipStateObs() {
          return this._assistantServices.genAIAvailabilityService.availability
            .pipe(
              U.O(null),
              T.G(),
              C.U(([e, t]) => (e && t && ke._.isPassive(e) && ke._.isActive(t) ? H.some("You’ve got prompts!") : H.none)),
              S.w(
                H.fold(
                  () => k.of(H.none),
                  (e) => f.T(k.of(H.some(e)), k.of(H.none).pipe(O.g(3e3)))
                )
              )
            )
            .subscribe(x.wW(this._ideateButtonTooltipNotificationState));
        }
        _registerDebugHelpers() {
          !(function (e) {
            const t = self;
            t && ((t.cheetahDebug = t.cheetahDebug || {}), Object.assign(t.cheetahDebug, e));
          })({ clearOnboarding: () => this._params.dapiActions.modifyCheetahOnboardingState(() => Re.Z.encode(Re.Z.State.empty)) });
        }
        _createOnboardingViewModelWhenCheetahAvailable() {
          return Z.h
            .combine(
              this._params.featureFlags,
              this._assistantServices.genAIAvailabilityService.availability.view(ke._.isUsable),
              (e, t) => e.onboarding && t
            )
            .pipe(
              R.b((e) =>
                this._onboardingViewModels.modify(
                  (t) => (
                    (0, l.zG)(
                      t,
                      j.bw((e) => e.onboarding.dispose())
                    ),
                    e ? H.some(this._assistantServices.createOnboardingViewModels()) : H.none
                  )
                )
              )
            );
        }
        _onClickIdeateButton(e) {
          ri(this.assistantState.get()) ? this._closeAssistant(Ze.j.closed) : this._openAssistantSubject.next({ mode: e });
        }
        _updateSelectionRange() {
          return I.aj([this._params.integration.selectionRange, this.assistantState.view(ri)]).pipe(
            C.U(([e, t]) => ({
              selectionRange: e,
              assistantIsFocused: this._assistantFocused.get(),
              inlineButtonRecentlyPressed: this._inlineButtonRecentlyPressed.get(),
              ideateButtonRecentlyHovered: this._ideateButtonRecentlyHovered.get(),
              initialPopupOnboardingStepIsActive: this.isOnboardingPopupVisible.get(),
              assistantOpened: t
            })),
            R.b(({ inlineButtonRecentlyPressed: e, ideateButtonRecentlyHovered: t }) => {
              e && this._inlineButtonRecentlyPressed.set(!1), t && this._ideateButtonRecentlyHovered.set(!1);
            }),
            w.h(
              ({
                selectionRange: e,
                assistantIsFocused: t,
                inlineButtonRecentlyPressed: i,
                ideateButtonRecentlyHovered: s,
                initialPopupOnboardingStepIsActive: n,
                assistantOpened: a
              }) => !i && !s && (!a || !H.isNone(e) || (!t && !n))
            ),
            C.U(({ selectionRange: e }) => e)
          );
        }
        _updateHighlightRects() {
          return (
            (e = this._selectionRange),
            (t = this._contextHighlight),
            (i = this._params.integration),
            I.aj([
              e.pipe(
                S.w(
                  H.fold(
                    () => k.of([]),
                    (e) => i.getHighlightRects(e).pipe(C.U((e) => e.map((e) => ({ rect: e, visibility: "visible" }))))
                  )
                )
              ),
              t.pipe(
                S.w(
                  H.fold(
                    () => k.of([]),
                    (e) => i.getHighlightRects(e.range).pipe(C.U((t) => t.map((t) => ({ rect: t, visibility: e.visibility }))))
                  )
                )
              )
            ]).pipe(C.U(([e, t]) => (t.find((e) => "hidden" !== e.visibility) ? t : e)))
          );
          var e, t, i;
        }
        _updateQuasiCaretRect() {
          return I.aj([this._selectionRange, this._highlightsUpdater.hasHighlights]).pipe(
            S.w(([e, t]) =>
              (0, l.zG)(
                e,
                H.filter(() => !this._params.supportsRevision || !t),
                H.filter(d.SV.isCollapsed),
                H.fold(
                  () => k.of([]),
                  (e) => this._params.integration.getHighlightRects(e)
                )
              )
            ),
            C.U((e) =>
              (0, l.zG)(
                e,
                n.c2,
                H.map((e) => e[e.length - 1])
              )
            )
          );
        }
        _updateNativeCursor() {
          return Z.h.combine(this._quasiCaretRect, this.assistantState.view(ri), (e, t) =>
            (0, l.zG)(
              s.Y(H.option)({ nativeUIHider: H.fromNullable(this._params.integration.createNativeUIHider), quasiCaretRect: e }),
              H.filter(() => t),
              j.ew(() => {
                this._nativeCursorHider.modify(
                  (e) => (
                    (0, l.zG)(
                      e,
                      j.bw((e) => e.dispose())
                    ),
                    H.none
                  )
                );
              }),
              j.bw(({ nativeUIHider: e }) => {
                this._nativeCursorHider.modify(
                  (t) => (
                    (0, l.zG)(
                      t,
                      j.bw((e) => e.dispose())
                    ),
                    H.some(e())
                  )
                );
              })
            )
          );
        }
        _closeAssistant(e) {
          var t;
          (0, l.zG)(
            this._assistantUIState.get(),
            j.bw(({ dispose: e }) => e())
          ),
            this._assistantUIState.set(H.none),
            this._assistantUI.set(null),
            (e !== Ze.j.closed && e !== Ze.j.assistantBlurred) || this._params.integration.focusTextField(),
            null === (t = this._params.assistantDidClose) || void 0 === t || t.next();
        }
        _restartAssistant() {
          this._log.info("reconnecting checking service and restarting session"),
            (0, l.zG)(
              this._assistantUIState.get(),
              H.map(({ sessionService: e }) => e.session.get().mode),
              j.bw((e) => {
                this._closeAssistant(Ze.j.disposed),
                  (0, l.zG)(
                    this._params.checkingService.get(),
                    j.bw((e) => {
                      e.reconnect();
                    })
                  ),
                  Te.w.isPushRewrite(e)
                    ? this._openAssistantSubject.next({ mode: "ideation" })
                    : this._openAssistantSubject.next({ mode: e });
              })
            );
        }
        async _openAssistant(e) {
          var t;
          performance.mark(ii),
            ri(this.assistantState.get()) && this._closeAssistant(Ze.j.disposed),
            this._assistantFocused.set(!0),
            "pushRewrite" === e.mode && this._selectionRange.set(H.some(e.transformRange));
          const i = new Oe.Z({
              logger: p.Y.create("cheetah.sessionService"),
              startSessionOptions: st(
                e,
                { disableKnowledgeEngine: "disabled" === this._params.dapiSettings.get().serengetiState || void 0 },
                this._params.integration.quickReplyContext.get(),
                this._params.url
              ),
              textEditorService: this._assistantServices.textEditorService,
              capiService: this._assistantServices.capiService,
              userService: this._assistantServices.userService,
              trackingService: this._assistantServices.trackingService,
              monitoringService: this._assistantServices.monitoringService,
              selectionContextAvailability: this._assistantServices.selectionContextAvailabilityService.availability,
              skillService: this._assistantServices.skillService,
              experimentService: this._assistantServices.experimentService
            }),
            s = { openUrl: (e) => (self.open(e, "_blank", "noreferrer"), Promise.resolve()) },
            { revisionEngine: n, dispose: a } = this._params.supportsRevision
              ? await vt({
                  capiService: this._assistantServices.capiService,
                  textEditorService: this._assistantServices.textEditorService,
                  sduiBufferService: this._params.sduiBufferService,
                  lifecycleService: s,
                  alertProcessor: this._params.alertProcessor,
                  initialAlertId: it(e),
                  highlightsUpdater: this._highlightsUpdater,
                  highlightsScroller: this._highlightsScroller,
                  replacementService: this._params.replacementService,
                  getFormattingService: this._params.getFormattingService,
                  requestAwaitService: this._params.requestAwaitService,
                  alertStateService: this._params.alertStateService,
                  domain: this._params.domain,
                  getSessionUuid: () => {
                    var e, t;
                    return null !==
                      (t = null === (e = H.toNullable(this._params.checkingService.get())) || void 0 === e ? void 0 : e.sessionUuid) &&
                      void 0 !== t
                      ? t
                      : null;
                  },
                  telemetry: this._params.telemetry,
                  supportedForms: this._params.supportedForms
                })
              : { revisionEngine: void 0, dispose: l.Q1 },
            r = {
              logger: p.Y.create("cheetah.ui"),
              toneDetectorService: this._assistantServices.toneDetectorService,
              textEditorService: this._assistantServices.textEditorService,
              userService: this._assistantServices.userService,
              genAIAvailabilityService: this._assistantServices.genAIAvailabilityService,
              trackingService: this._assistantServices.trackingService,
              uphookService: this._assistantServices.uphookService,
              feedbackService: this._assistantServices.feedbackService,
              monitoringService: this._assistantServices.monitoringService,
              userSurveyService: this._assistantServices.userSurveyService,
              experimentService: this._assistantServices.experimentService,
              skillService: this._assistantServices.skillService,
              selectionContextAvailabilityService: this._assistantServices.selectionContextAvailabilityService,
              sessionService: i,
              revisionEngine: n,
              theme: Z.h.create({ flatUI: this._params.supportsRevision }),
              notifyAssistantUIAction: this._assistantServices.notifyAssistantUIAction,
              settingsOptions: this._params.supportsRevision
                ? { kind: "withView", getView: () => this._params.settingsService.getView() }
                : void 0
            };
          try {
            const e = await this._params.getHostInfo(),
              n = await this._params.integration.renderAssistant(({ sizeBehavior: t, dragBehavior: n, readyToDrag: o }) => {
                const l = B.D(n).pipe(C.U((e) => "draggable" === e.kind && e.isDragging)),
                  { assistantHeight: c, assistantPosition: d } = this._params.integration,
                  { gnar: h, checkingService: p, statisticsService: u } = this._params,
                  g = this._params.supportsRevision ? new ei(l, c, d, { gnar: h, checkingService: p, statisticsService: u }) : ti,
                  { assistantUI: m, dispose: v } = (0, Be.e)({
                    ...r,
                    lifecycleService: {
                      ...s,
                      sizeBehavior: t,
                      dragBehavior: n,
                      readyToDrag: o,
                      hostInfo: e,
                      starting: () => Promise.resolve([ii]),
                      visuallyReady: () => {
                        let e;
                        try {
                          e = performance.measure("extension-assistant-open-attempt-to-visually-ready", ii).duration;
                        } catch (t) {
                          e = void 0;
                        }
                        return g.trackAssistantOpen(e), Promise.resolve([ii]);
                      },
                      focusStateChanged: ({ isFocused: e }) => (this._assistantFocused.set(e), Promise.resolve()),
                      close: () => (this._closeAssistant(Ze.j.closed), g.trackAssistantClose(), Promise.resolve())
                    }
                  });
                return (
                  this._assistantUIState.set(
                    H.some({
                      sessionService: i,
                      dragBehavior: B.D(n),
                      dispose: () => {
                        a(), v(), i.dispose(), g.dispose(), this._assistantFocused.set(!1);
                      }
                    })
                  ),
                  m
                );
              });
            this._assistantUI.set(c.createElement(de, null, n)), null === (t = this._params.assistantDidOpen) || void 0 === t || t.next();
          } catch (e) {
            this._log.error("failed to open assistant", e), this._assistantUIState.set(H.none), this._assistantUI.set(null);
          }
        }
        _getInlineButtonUI() {
          return (0, l.zG)(
            s.Y(o.P)({
              inlineButtonInfo: this._params.integration.inlineButtonPlacement,
              selectionRange: this._selectionRange,
              selectionOngoing: f.T(
                this._params.integration.selectionRange.pipe(C.U((e) => (0, l.zG)(e, H.isSome))),
                this._params.integration.selectionRange.pipe(P.b(100), M.h(!1))
              ),
              assistantOpened: this.assistantState.view(ri),
              textMapIsEmpty: this._params.integration.textMapIsEmpty,
              quickReplyContext: this._params.integration.quickReplyContext,
              availability: this._assistantServices.genAIAvailabilityService.availability,
              entryPointsEnabled: this._entryPointsEnabled,
              featureFlags: this._params.featureFlags
            })
          ).pipe(
            C.U(
              ({
                inlineButtonInfo: e,
                selectionRange: t,
                selectionOngoing: i,
                assistantOpened: s,
                textMapIsEmpty: n,
                quickReplyContext: a,
                availability: r,
                entryPointsEnabled: o,
                featureFlags: d
              }) =>
                (0, l.zG)(
                  e,
                  H.filter(() => o),
                  H.filter(() => !s),
                  H.filter(() => ke._.isUsable(r)),
                  H.fold(l.gn, (e) =>
                    (0, l.zG)(
                      t,
                      H.fold(l.gn, (t) =>
                        n && H.isSome(a) && d.inlineQuickReply
                          ? c.createElement(ge, {
                              disabled: !1,
                              referenceElement: e.referenceElement,
                              placement: e.placement,
                              offset: H.toNullable(e.offset),
                              onClick: () => {
                                this._inlineButtonRecentlyPressed.set(!0), this._openAssistantSubject.next({ mode: "quickReply" });
                              }
                            })
                          : di(t) && (d.inlineRewrite || d.magicRewrite) && this._params.integration.enableInlineRewrites
                          ? c.createElement(_e, {
                              disabled: i,
                              referenceElement: e.referenceElement,
                              placement: e.placement,
                              offset: H.toNullable(e.offset),
                              onOpenRewriteClick: d.inlineRewrite
                                ? () => {
                                    this._inlineButtonRecentlyPressed.set(!0), this._openAssistantSubject.next({ mode: "rewrite" });
                                  }
                                : void 0,
                              onMagicRewriteClick: d.magicRewrite
                                ? () => {
                                    this._inlineButtonRecentlyPressed.set(!0), this._openAssistantSubject.next({ mode: "quickRewrite" });
                                  }
                                : void 0
                            })
                          : null
                      )
                    )
                  )
                )
            )
          );
        }
        _getOnboardingUI() {
          const e = this._params.featureFlags.get().externalOnboardingContextProviderFix ? he : de;
          return this._onboardingViewModels.view(H.fold(l.gn, (t) => c.createElement(e, null, Y.UI.mount(Pe.T, (0, Me.A)(t)))));
        }
        _getHighlightUI() {
          return Z.h.combine(this._highlights, this.assistantState.view(ri), this._assistantFocused, (e, t, i) =>
            t && i
              ? e.map(({ rect: e, visibility: t }, i) =>
                  c.createElement(K, {
                    key: `cheetah-highlight-rect-${i}`,
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height,
                    visibility: t
                  })
                )
              : null
          );
        }
        _getQuasiCaretUI() {
          return Z.h.combine(this._quasiCaretRect, this.assistantState.view(ri), (e, t) =>
            (0, l.zG)(
              e,
              H.filter(() => t),
              H.fold(
                () => null,
                (e) =>
                  c.createElement(ye, {
                    left: e.left,
                    top: e.top,
                    height: e.height,
                    overflow: this._params.integration.allowCustomCaretOverflow
                  })
              )
            )
          );
        }
        _getIdeateButtonUI() {
          return Z.h.combine(
            this._params.featureFlags,
            this._inlineButtonUI,
            this._selectionRange,
            this._params.integration.quickReplyContext,
            this._assistantServices.genAIAvailabilityService.availability,
            this._entryPointsEnabled,
            (e, t, i, s, n, a) =>
              (0, l.zG)(
                t,
                H.fromPredicate((e) => null === e),
                H.filter(() => a && e.ideateButton),
                H.filter(() => ke._.isUsable(n)),
                H.fold(l.gn, () => this._getIdeateButtonForSelectionRange(i, s, e))
              )
          );
        }
        _getExpandedIdeateButtonUI() {
          return this._params.supportsRevision
            ? Z.h.create(null)
            : Z.h.combine(
                this._params.featureFlags,
                this._selectionRange,
                this._params.integration.quickReplyContext,
                this._assistantServices.genAIAvailabilityService.availability,
                this._entryPointsEnabled,
                (e, t, i, s, n) =>
                  (0, l.zG)(
                    s,
                    H.fromPredicate((e) => ke._.isVisible(e)),
                    H.filter(() => n && e.ideateButton),
                    H.fold(l.gn, () => this._getIdeateButtonForSelectionRange(t, i, e))
                  )
              );
        }
        _getIdeateButtonForSelectionRange(e, t, i) {
          return this._params.supportsRevision
            ? null
            : (0, l.zG)(
                e,
                H.filter((e) => di(e) && i.rewrite),
                H.fold(
                  () => (li(t) && i.quickReply ? "quickReply" : i.compose ? "ideation" : null),
                  () => "rewrite"
                ),
                H.fromNullable,
                H.fold(l.gn, (e) =>
                  c.createElement(si, {
                    onMouseEnter: () => this._ideateButtonRecentlyHovered.set(!0),
                    onMouseLeave: () => this._ideateButtonRecentlyHovered.set(!1),
                    onClick: () => this._onClickIdeateButton(e),
                    mount: (e) => this._ideateButtonRefChange.next(e),
                    forceTooltipMessage: this._ideateButtonTooltipNotificationState.view(H.toUndefined)
                  })
                )
              );
        }
        _insertText(e) {
          "" !== e
            ? this._params.integration.insertText(e, this._selectionRange.get())
            : this._log.warn("insert() - attempting to insert empty response, skipping insert.");
        }
        dispose() {
          var e;
          this._disposed.next(null),
            this._highlightsUpdater.dispose(),
            this._closeAssistant(Ze.j.disposed),
            null ===
              (e = H.toUndefined(
                (0, l.zG)(
                  this._onboardingViewModels.get(),
                  H.map((e) => e.onboarding)
                )
              )) ||
              void 0 === e ||
              e.dispose(),
            this._assistantServices.dispose(),
            this._subs.unsubscribe(),
            (0, l.zG)(
              this._nativeCursorHider.get(),
              j.bw((e) => e.dispose())
            ),
            this._params.integration.dispose();
        }
      }
      function li(e) {
        return (0, l.zG)(
          e,
          H.exists((e) => Object.values(e).filter((e) => void 0 !== e).length > 0)
        );
      }
      function ci(e) {
        return e.isConnected && null !== e.offsetParent;
      }
      function di(e) {
        const t = e.end - e.start;
        return t >= 10 && t < 5e3;
      }
      function hi(e) {
        return (0, W.W9)(Ue.l.is(Ue.l.Kind.mount), (e) => e.step === Ee.T.StepName.initial)(e);
      }
      function pi(e) {
        return (0, W.W9)(Ue.l.is(Ue.l.Kind.mount), (e) => e.step === Ee.T.StepName.initialBTS)(e);
      }
    },
    67534: (e, t, i) => {
      i.d(t, { B: () => o, g: () => r });
      var s = i(17528),
        n = i(48015),
        a = i(36991);
      const r = (e) =>
          e
            .reduce(
              ({ actions: e, index: t }, i) => {
                const s = e[0];
                return a.s.isInsertString(i)
                  ? (e.unshift({ pos: { start: t, end: t }, value: i.insert }), { actions: e, index: t })
                  : a.s.isInsertEmbed(i)
                  ? { actions: e, index: t + 1 }
                  : a.s.isRetain(i)
                  ? { actions: e, index: t + i.retain }
                  : a.s.isDelete(i)
                  ? (s && s.pos.start === s.pos.end && s.pos.end === t
                      ? (s.pos = { ...s.pos, end: s.pos.end + i.delete })
                      : e.unshift({ pos: { start: t, end: t + i.delete }, value: "" }),
                    { actions: e, index: t + i.delete })
                  : void (0, n.vE)(i);
              },
              { actions: [], index: 0 }
            )
            .actions.reduce(
              (e, t) => (
                e.length && e[e.length - 1].value && e[e.length - 1].pos.start === t.pos.start
                  ? (e[e.length - 1].value = `${t.value}${e[e.length - 1].value}`)
                  : e.push(t),
                e
              ),
              []
            ),
        o = (e) =>
          e.reduce(
            ({ formattings: e, index: t }, i) =>
              s.m.hasFormatting(i)
                ? a.s.isInsertString(i)
                  ? (e.push({ range: { start: t, end: "\n" === i.insert ? t : t + i.insert.length }, formatting: i.attributes }),
                    { formattings: e, index: t + i.insert.length })
                  : a.s.isInsertEmbed(i)
                  ? { formattings: e, index: t + 1 }
                  : a.s.isRetain(i)
                  ? (e.push({ range: { start: t, end: t + i.retain }, formatting: i.attributes }), { formattings: e, index: t + i.retain })
                  : { formattings: e, index: t }
                : a.s.isInsertString(i)
                ? { formattings: e, index: t + i.insert.length }
                : a.s.isInsertEmbed(i)
                ? { formattings: e, index: t + 1 }
                : a.s.isRetain(i)
                ? { formattings: e, index: t + i.retain }
                : a.s.isDelete(i)
                ? { formattings: e, index: t }
                : void (0, n.vE)(i),
            { formattings: [], index: 0 }
          ).formattings;
    },
    88571: (e, t, i) => {
      i.d(t, { Q: () => l });
      var s = i(27378),
        n = i(15073),
        a = i(60797),
        r = i(95300),
        o = i(5114);
      const l = ({ children: e, remSize: t, setter: i }) => (
        (c += 1),
        s.useEffect(() => {
          const e = t.subscribe((e) => {
            d.next(o.some(e)), i(o.some(e));
          });
          return () => {
            e.unsubscribe(), (c -= 1), 0 === c && (d.next(o.none), i(o.none));
          };
        }, [t]),
        s.createElement(n.u.Context.Provider, { value: d.pipe(a.oA) }, e)
      );
      let c = 0;
      const d = new r.X(o.none);
    },
    57757: (e, t, i) => {
      i.d(t, { v: () => a });
      var s = i(44586),
        n = i(95195);
      function a(e, t = self) {
        return new s.y((i) => {
          var s, a;
          (null === (a = null === (s = t.navigator) || void 0 === s ? void 0 : s.clipboard) || void 0 === a ? void 0 : a.writeText)
            ? t.navigator.clipboard
                .writeText(e)
                .then(() => i.next(n.right(void 0)))
                .catch((e) => i.next(n.left(new Error(String(e)))))
            : i.next(n.left(new Error("The Clipboard API is not available.")));
        });
      }
    },
    51325: (e) => {
      e.exports = { highlightRect: "XWxTA", hidden: "o979x", attention: "bHjcD", blink: "oy7wj" };
    },
    87491: (e) => {
      e.exports = { entryButton: "cDocn", entryButtonItem: "dJCJe", rewriteIcon: "wGNWN", openIcon: "vIUqu", spin: "A8MjA" };
    },
    50783: (e) => {
      e.exports = { replyButton: "ZfD1U", icon: "BdxRh", spin: "MBS28" };
    },
    48033: (e) => {
      e.exports = { quasiCaret: "WhbAl", icon: "Yd_W5" };
    }
  }
]);
