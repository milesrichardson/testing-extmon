(self.webpackChunk = self.webpackChunk || []).push([
  [4382],
  {
    67551: (e, t, i) => {
      i.r(t), i.d(t, { CheetahFeatureImpl: () => kt, isAssistantOpened: () => Bt });
      var s = i(17771),
        a = i(17889),
        n = i(62965),
        r = i(6294),
        o = i(85892),
        l = i(57050),
        d = i(27378),
        h = i(54696),
        c = i(57757),
        u = i(55649),
        p = i(98805),
        g = i(14601),
        m = i(32952),
        v = i(60797),
        _ = i(66310),
        b = i(24209),
        S = i(85985),
        f = i(23063),
        y = i(40151),
        w = i(98403),
        A = i(2844),
        I = i(77176),
        x = i(2834),
        C = i(76974),
        R = i(28043),
        E = i(93508),
        U = i(16118),
        B = i(13444),
        k = i(12126),
        P = i(78674),
        O = i(17343),
        T = i(80544),
        z = i(79692),
        M = i(67434),
        G = i(19751),
        H = i(44586),
        N = i(97425),
        j = i(5114),
        D = i(8125),
        F = i(83078),
        q = i(95195),
        W = i(22232),
        V = i(54001),
        $ = i(23239),
        L = i(34217),
        Z = i(51325);
      const Q = ({ width: e, height: t, top: i, left: s, visibility: a }) =>
        d.createElement("div", {
          "data-grammarly-part": "cheetah-highlight-rect",
          ...(0, V.Sh)(Z.highlightRect, "hidden" === a ? Z.hidden : null, "attention" === a ? Z.attention : null),
          style: { width: e, height: t, top: i, left: s }
        });
      var Y = i(6726),
        K = i(16805);
      const J = d.forwardRef(function ({ forceTooltipMessage: e, onClick: t, onMouseEnter: i, onMouseLeave: s }, a) {
        return d.createElement(
          Y.u,
          { message: "Open GrammarlyGO", forcedMessage: e },
          d.createElement(
            "button",
            {
              onClick: t,
              "data-grammarly-part": "cheetah-ideate-button",
              className: K.ideateButton,
              ref: a,
              onMouseEnter: i,
              onMouseLeave: s
            },
            d.createElement("div", { className: K.ideateButtonIcon })
          )
        );
      });
      var X = i(88571),
        ee = i(4147),
        te = i(89894),
        ie = i(15073),
        se = i(42103),
        ae = i(51369),
        ne = i(85665);
      const re = te.ux.style({
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, Arial",
          $nest: { "button, input, textarea": { fontFamily: "inherit" } }
        }),
        oe = ({ children: e }) => {
          var t;
          const i = null === (t = d.useContext(ne.nS.Context)) || void 0 === t ? void 0 : t.host;
          return d.createElement(
            ee.o,
            null,
            d.createElement(
              X.Q,
              { remSize: C.of(16), setter: (e) => ie.u.setRootCssVar(i || document.documentElement, e) },
              d.createElement(se.G.DefaultProvider, null, d.createElement("div", { className: re }, e, d.createElement(ae.X, null)))
            )
          );
        };
      var le = i(37869),
        de = i(50783);
      const he = ({ referenceElement: e, placement: t, offset: i, disabled: s, onClick: a }) => {
        const [n, r] = d.useState(null),
          { styles: o, attributes: l } = (0, le.D)(e, n, {
            placement: t,
            modifiers: i ? [{ name: "offset", options: { offset: i } }] : []
          });
        return d.createElement(
          "button",
          {
            ref: r,
            style: o.popper,
            ...l.popper,
            onClick: a,
            onMouseDown: (e) => {
              e.stopPropagation(), e.preventDefault();
            },
            "data-grammarly-part": "cheetah-reply-button",
            className: de.replyButton,
            "data-disabled": s
          },
          d.createElement("div", { className: de.icon }),
          d.createElement("span", null, "Reply quickly")
        );
      };
      var ce = i(87491);
      const ue = ({ referenceElement: e, placement: t, offset: i, disabled: s, onMagicRewriteClick: a, onOpenRewriteClick: n }) => {
        const [r, o] = d.useState(null),
          { styles: l, attributes: h } = (0, le.D)(e, r, {
            placement: t,
            modifiers: i ? [{ name: "offset", options: { offset: i } }] : []
          });
        return a || n
          ? d.createElement(
              "div",
              {
                ref: o,
                style: l.popper,
                ...h.popper,
                onMouseDown: (e) => {
                  e.stopPropagation(), e.preventDefault();
                },
                "data-grammarly-part": "cheetah-entry-button",
                className: ce.entryButton,
                "data-disabled": s
              },
              a
                ? d.createElement(
                    Y.u,
                    { message: "Improve it" },
                    d.createElement(
                      "button",
                      {
                        onClick: a,
                        onMouseDown: (e) => {
                          e.stopPropagation(), e.preventDefault();
                        },
                        className: ce.entryButtonItem,
                        "data-disabled": s
                      },
                      d.createElement("i", { className: ce.rewriteIcon })
                    )
                  )
                : null,
              n
                ? d.createElement(
                    Y.u,
                    { message: "Open GrammarlyGO" },
                    d.createElement(
                      "button",
                      {
                        onClick: n,
                        onMouseDown: (e) => {
                          e.stopPropagation(), e.preventDefault();
                        },
                        className: ce.entryButtonItem,
                        "data-disabled": s
                      },
                      d.createElement("i", { className: ce.openIcon })
                    )
                  )
                : null
            )
          : null;
      };
      var pe = i(90845),
        ge = i(49708),
        me = i(8543),
        ve = i(48033);
      const _e = () =>
          d.createElement(
            "svg",
            { className: ve.icon, viewBox: "0 0 16 16", fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round" },
            d.createElement("path", {
              d: "M8,16C12.418,16 16,12.418 16,8C16,3.582 12.418,0 8,0C3.582,0 0,3.582 0,8C0,12.418 3.582,16 8,16Z",
              fill: "#0A9A78"
            }),
            d.createElement("path", { d: "M4,8L12,8M8,4L8,12", fill: "none", fillRule: "nonzero", stroke: "white", strokeWidth: "1.5px" })
          ),
        be = ({ overflow: e, ...t }) => (e ? d.createElement(fe, { ...t }) : d.createElement(Se, { ...t })),
        Se = ({ left: e, top: t, height: i }) =>
          d.createElement(
            d.Fragment,
            null,
            d.createElement(
              "div",
              { "data-grammarly-part": "cheetah-quasi-caret", className: ve.quasiCaret, style: { left: e, top: t + i, height: i + 8 } },
              d.createElement(_e, null)
            )
          ),
        fe = ({ left: e, top: t, height: i }) => {
          const { ref: a, onMount: n } = pe.P.useElWatcher(),
            r = d.useMemo(() => $.h.create(j.none), []),
            { rect: o, onMount: h } = pe.P.useRectWatcher(),
            c = d.useCallback((e) => {
              (e.style.pointerEvents = "all"),
                r.set(
                  (0, l.zG)(
                    s.Y(j.option)({
                      rect: j.some(e.getBoundingClientRect()),
                      goodParent: (0, l.zG)(
                        e.getBoundingClientRect(),
                        (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
                        ({ x: e, y: t }) => {
                          var i, s;
                          return j.fromNullable(
                            null === (s = null === (i = document.elementFromPoint(e, t)) || void 0 === i ? void 0 : i.shadowRoot) ||
                              void 0 === s
                              ? void 0
                              : s.elementFromPoint(e, t)
                          );
                        },
                        j.filter((t) => t === e || e.contains(t || null))
                      )
                    }),
                    j.fold(
                      () => j.none,
                      ({ rect: e }) => j.some({ x: e.x, y: e.y })
                    )
                  )
                ),
                (e.style.pointerEvents = "none");
            }, []),
            u = d.useMemo(() => ge.R(document, "scroll", { capture: !0 }).pipe(E.O(null)), []);
          return (
            pe.P.useSubscriptionTo(A.aj([a.pipe(v.oA), u, o]).pipe(x.b(([e]) => c(e)))),
            d.createElement(
              d.Fragment,
              null,
              d.createElement(
                "div",
                {
                  "data-grammarly-part": "cheetah-quasi-caret",
                  className: ve.quasiCaret,
                  style: { left: e, top: t + i, height: i + 8 },
                  ref: (e) => {
                    n(e), h(e);
                  }
                },
                d.createElement(
                  me.F.div,
                  {
                    style: r.pipe(
                      I.U((e) =>
                        (0, l.zG)(
                          e,
                          j.fold(
                            () => ({ opacity: 1 }),
                            () => ({ opacity: 0 })
                          )
                        )
                      )
                    )
                  },
                  d.createElement(_e, null)
                )
              ),
              d.createElement(
                me.F.Fragment,
                null,
                r.pipe(
                  I.U((e) =>
                    (0, l.zG)(
                      e,
                      j.fold(l.gn, (e) =>
                        d.createElement(
                          "div",
                          {
                            "data-grammarly-part": "cheetah-quasi-caret-fixed-bro",
                            className: ve.quasiCaret,
                            style: { transform: "none", position: "fixed", left: e.x, top: e.y, height: i + 8 }
                          },
                          d.createElement(_e, null)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var ye = i(10389),
        we = i(64015),
        Ae = i(12422),
        Ie = i(819),
        xe = i(50901),
        Ce = i(51478),
        Re = i(69693),
        Ee = i(94175),
        Ue = i(86262),
        Be = i(66768),
        ke = i(82471),
        Pe = i(43254),
        Oe = i(33148),
        Te = i(84403),
        ze = i(42724),
        Me = i(92627),
        Ge = i(99877),
        He = i(44848),
        Ne = i(72004),
        je = i(36847),
        De = i(35298),
        Fe = i(29972),
        qe = i(51129),
        We = i(7534);
      var Ve = i(44358),
        $e = i(81873),
        Le = i(81531),
        Ze = i(65504),
        Qe = i(9205),
        Ye = i(9629),
        Ke = i(88355),
        Je = i(4068),
        Xe = i(30857);
      function et(e) {
        var t, i;
        const s = "pushRewrite" === e.mode ? null : e;
        return null !== (i = null === (t = null == s ? void 0 : s.source) || void 0 === t ? void 0 : t.alertId) && void 0 !== i ? i : null;
      }
      function tt(e, t, i, s) {
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
                j.fold(() => Je.H.empty, it)
              ),
              metadata: t
            };
          case "pushRewrite":
            return { mode: e.mode, writingExpertContext: e.writingExpertContext };
          default:
            (0, W.L0)(e);
        }
      }
      function it(e) {
        var t, i, s, a, n, r, o, d, h, c, u, p, g, m, v, _, b;
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
          y = S(
            null === (r = null === (n = null === (a = e.parents) || void 0 === a ? void 0 : a[0]) || void 0 === n ? void 0 : n.audience) ||
              void 0 === r
              ? void 0
              : r.undisclosedRecipients
          ),
          w = S(
            null ===
              (c =
                null ===
                  (h = null === (d = null === (o = e.parents) || void 0 === o ? void 0 : o[0]) || void 0 === d ? void 0 : d.audience) ||
                void 0 === h
                  ? void 0
                  : h.recipients) || void 0 === c
              ? void 0
              : c.filter(({ email: e }) => (0, Xe.HD)(e) && !f.has(e) && !y.has(e))
          ),
          A = S(null === (u = e.audience) || void 0 === u ? void 0 : u.indirectRecipients),
          I = S(null === (p = e.audience) || void 0 === p ? void 0 : p.undisclosedRecipients),
          x = S(
            null === (m = null === (g = e.audience) || void 0 === g ? void 0 : g.recipients) || void 0 === m
              ? void 0
              : m.filter(({ email: e }) => (0, Xe.HD)(e) && !A.has(e) && !I.has(e))
          );
        return {
          previousMessageInfo: (0, l.zG)(
            we.YM(null !== (v = e.parents) && void 0 !== v ? v : []),
            j.fold(
              () => Je.H.PreviousMessageInfo.empty,
              (e) => {
                var t;
                return {
                  author: (0, l.zG)(
                    we.YM(null !== (t = e.authors) && void 0 !== t ? t : []),
                    j.fold(
                      () => Je.H.Person.empty,
                      (e) => {
                        var t, i;
                        return {
                          name: null !== (t = e.name) && void 0 !== t ? t : "",
                          email: null !== (i = e.email) && void 0 !== i ? i : ""
                        };
                      }
                    )
                  ),
                  directRecipients: Array.from(w.values()),
                  text: e.delta ? (0, Ke.l)(e.delta, "") : ""
                };
              }
            )
          ),
          title: null !== (_ = e.title) && void 0 !== _ ? _ : "",
          author: (0, l.zG)(
            we.YM(null !== (b = e.authors) && void 0 !== b ? b : []),
            j.fold(
              () => Je.H.Person.empty,
              (e) => {
                var t, i;
                return { name: null !== (t = e.name) && void 0 !== t ? t : "", email: null !== (i = e.email) && void 0 !== i ? i : "" };
              }
            )
          ),
          directRecipients: Array.from(x.values()),
          indirectRecipients: Array.from(A.values()),
          undisclosedRecipients: Array.from(I.values())
        };
      }
      var st = i(41127),
        at = i(8709),
        nt = i(20236),
        rt = i(67534);
      function ot(e, t, i, s) {
        const { left: a, right: n } = (0, l.zG)(
            e,
            we.UI(({ alertId: e, alternativeIndex: i }) =>
              (function (e, t, i) {
                return (0, l.zG)(
                  q.fromOption(() => `Alert ${e} not found`)(i(e)),
                  q.filterOrElse(nt.S.isCapiAlert, (t) => `Unsupported alert ${e} with type ${t._tag}`),
                  q.chain((i) =>
                    h.$.isWithTransformJson(i)
                      ? (0, l.zG)(
                          i.transformJSON.alternatives,
                          j.chain((e) => {
                            var i;
                            return j.fromNullable(null === (i = e.alternatives[t]) || void 0 === i ? void 0 : i.delta);
                          }),
                          q.fromOption(() => `Alternative ${t} not found for WithTransformJson alert ${e}`)
                        )
                      : h.$.isWithSubAlerts(i)
                      ? (0, l.zG)(
                          i.subalerts.alternatives,
                          j.chain((e) => {
                            var i;
                            return j.fromNullable(null === (i = e.alternatives[t]) || void 0 === i ? void 0 : i.delta);
                          }),
                          q.fromOption(() => `Alternative ${t} or context not found for WithSubAlerts alert ${e}`)
                        )
                      : h.$.isWithPosition(i)
                      ? q.right(
                          new at.i()
                            .retain(i.transformRange.start)
                            .delete(i.transformRange.end - i.transformRange.start)
                            .insert(i.transformText)
                        )
                      : q.left(`Unsupported alert ${e}`)
                  ),
                  q.map((i) => ({ delta: i, alertId: e, alternativeIndex: t }))
                );
              })(e, i, t)
            ),
            we.oh
          ),
          r = n.reduce((e, t) => e.compose(t.delta), new at.i()),
          o = (0, rt.g)(r),
          d = (0, rt.B)(r);
        return i
          .performBatchReplacements(o)
          .then(() => q.right(void 0))
          .catch((t) =>
            q.left(
              `Replacement error for [${e.map((e) => `alertId: ${e.alertId} altIdx: ${e.alternativeIndex}`).join(", ")}]: ` + String(t)
            )
          )
          .then((e) =>
            (0, l.zG)(
              s(),
              j.filter(() => d.length > 0),
              j.fold(
                () => Promise.resolve(q.right(void 0)),
                (e) =>
                  Promise.all(
                    d.map(({ range: t, formatting: i }) =>
                      e
                        .apply(t, i)
                        .then(() => q.right(void 0))
                        .catch((e) => q.left(String(e)))
                    )
                  ).then(
                    (0, l.ls)(we.oh, ({ left: e }) => (e.length > 0 ? q.left(`Formatting errors [${e.join(", ")}]`) : q.right(void 0)))
                  )
              )
            ).then((t) => {
              const i = a.concat(q.isLeft(e) ? [e.left] : []).concat(q.isLeft(t) ? [t.left] : []);
              return i.length > 0 ? q.left(new Error(`AlertApply - ${i.join(" - ")}`)) : q.right(void 0);
            })
          );
      }
      var lt = i(80358),
        dt = i(36919),
        ht = i(19125);
      var ct = i(71078),
        ut = i(18625);
      var pt = i(48015);
      function gt(e) {
        return i
          .e(8661)
          .then(i.bind(i, 19853))
          .then(({ createRevisionEngine: t }) => {
            const i = $.h.create(e.initialAlertId),
              s = e.alertStateService
                .getActiveAlertByClick()
                .pipe(
                  I.U((e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.alertId) && void 0 !== t ? t : null;
                  })
                )
                .subscribe(w.wW(i)),
              a = u.Y.create("cheetah.revision"),
              { revisionEngine: n, dispose: r } = t({
                capiService: e.capiService,
                sduiService: {
                  sduiItemCollectionChanges: ((d = e.sduiBufferService),
                  b
                    .T(
                      d.pipe(
                        U.G(),
                        I.U(([e, t]) => (j.isSome(e) ? j.some((0, ht.ex)()) : j.none)),
                        v.oA
                      ),
                      d.pipe(
                        _.w(
                          j.fold(
                            () => y.E,
                            (e) =>
                              e.capiEvents.pipe(
                                S.h((0, D.Kg)(lt.h.is("sdui_add"), lt.h.is("sdui_update"), lt.h.is("sdui_remove"))),
                                I.U((e) => {
                                  switch (e.kind) {
                                    case "sdui_add":
                                      return (0, ht.K5)(e.sduiRootId, e.sdui);
                                    case "sdui_update":
                                      return (0, ht.FE)(e.sduiRootId, e.sdui);
                                    case "sdui_remove":
                                      return (0, ht.Ul)(e.sduiRootId);
                                    default:
                                      return (0, l.Rz)(e);
                                  }
                                })
                              )
                          )
                        )
                      )
                    )
                    .pipe(
                      (e) => e.pipe(dt.f(e.pipe(P.b(0)))),
                      S.h((e) => e.length > 0)
                    )).pipe(x.b((e) => a.trace("sduiService.sduiItemCollectionChanges", e)))
                },
                alertService: {
                  alertCollectionChanges: ((o = e.alertProcessor.alerts),
                  ut.P(() =>
                    o.changes.pipe(
                      I.U((e) => {
                        const t = new Set(e.addedAlerts.filter(nt.S.isCapiAlert).map((e) => e.id)),
                          i = new Set(e.removedAlerts.filter((e) => nt.S.isCapiAlert(e.alert)).map((e) => e.id));
                        return [
                          ...e.addedAlerts
                            .filter(nt.S.isCapiAlert)
                            .filter((e) => !i.has(e.id))
                            .map((e) => (0, ct.Tm)(e.id)),
                          ...e.removedAlerts
                            .filter((e) => nt.S.isCapiAlert(e.alert))
                            .filter((e) => !t.has(e.id))
                            .map((e) => (0, ct.qQ)(e.id, "textChange" === e.reason._tag ? "textChange" : "other"))
                        ];
                      }),
                      E.O(
                        Array.from(o.getAll())
                          .filter(nt.S.isCapiAlert)
                          .map((e) => (0, ct.Tm)(e.id))
                      ),
                      (e) => e.pipe(dt.f(e.pipe(P.b(0)))),
                      I.U((e) => e.flatMap(l.yR)),
                      S.h((e) => e.length > 0)
                    )
                  )).pipe(x.b((e) => a.trace("alertService.alertCollectionChange", e))),
                  selectedAlertId: i,
                  applyAlerts: (t) => {
                    const i = ot(
                      t,
                      (t) => j.fromNullable(e.alertProcessor.alerts.getAlertById(t)),
                      e.replacementService,
                      e.getFormattingService
                    ).then(
                      q.fold(
                        (e) => {
                          throw (a.warn("Error applying alerts", { applyAlertsInfo: t, error: e }), e);
                        },
                        () => {}
                      )
                    );
                    return e.requestAwaitService.addRequest(i), i;
                  },
                  removeAlerts: (t) =>
                    (0, pt.DV)(
                      () =>
                        Promise.resolve(
                          t.forEach(({ alertId: t, removalReason: i }) => {
                            e.alertProcessor.removeAlert(t, { _tag: "alertApplied" === i ? st.i.alertAccepted : st.i.ignore });
                          })
                        ),
                      (e) => (a.warn("Error removing alerts", { removedAlertsInfo: t, error: e }), Promise.reject(e))
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
                        : (0, W.L0)(t.kind);
                    })(e.telemetry, t, e.domain, e.getSessionUuid())
                },
                logger: a
              });
            var o, d;
            return {
              revisionEngine: n,
              dispose: () => {
                e.highlightsUpdater.clearAll(), s.unsubscribe(), r();
              }
            };
          });
      }
      var mt = i(48044),
        vt = i(13853),
        _t = i(7604),
        bt = i(73975),
        St = i(95300),
        ft = i(32409);
      class yt {
        constructor(e) {
          (this._params = e),
            (this._subs = new g.w()),
            (this._visibleAlertsSubject = new St.X(new Map())),
            (this._emphasizedAlertsSubject = new St.X(new Map())),
            (this._visibleAlerts = this._visibleAlertsSubject.pipe(G.skipBy(mt.Eh(bt.yv, vt.Eh(bt.yv))))),
            (this._emphasizedAlerts = this._emphasizedAlertsSubject.pipe(G.skipBy(mt.Eh(bt.yv, vt.Eh(bt.yv))))),
            (this.hasHighlights = this._visibleAlerts.pipe(
              I.U((e) => e.size > 0),
              E.O(!1),
              R.x(),
              G.shareReplay({ bufferSize: 1, refCount: !0 })
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
          const t = new Map(this._visibleAlertsSubject.value),
            i = new Map(this._emphasizedAlertsSubject.value);
          e
            .filter((e) => "hidden" !== e.visibility)
            .forEach(({ alertId: e, visibility: s }) => {
              const a = this._params.getAlertById(e);
              if (a) {
                const n = a.highlightRanges.map((t) => ({ range: t, highlightId: wt(e, t) }));
                n.forEach(({ range: e, highlightId: t }) => {
                  this._params.highlightCollection.addHighlight(t, e, ft.M.getHighlightMeta(a, t, e, !1));
                }),
                  t.set(e, new Set(n.map((e) => e.highlightId))),
                  "emphasized" === s && i.set(e, new Set(n.map((e) => e.highlightId)));
              }
            }),
            this._visibleAlertsSubject.next(t),
            this._emphasizedAlertsSubject.next(i);
        }
        updateAlertsVisibility(e) {
          const t = new Map(this._visibleAlertsSubject.value),
            i = new Map(this._emphasizedAlertsSubject.value);
          e.forEach(({ alertId: e, visibility: s }) => {
            var a;
            const n = this._params.getAlertById(e);
            if (n && "hidden" !== s) {
              const a = n.highlightRanges.map((t) => ({ range: t, highlightId: wt(e, t) }));
              a.forEach(({ range: e, highlightId: t }) => {
                this._params.highlightCollection.updateHighlight(t, e, ft.M.getHighlightMeta(n, t, e, !1));
              }),
                t.set(e, new Set(a.map((e) => e.highlightId))),
                "emphasized" === s ? i.set(e, new Set(a.map((e) => e.highlightId))) : i.delete(e);
            } else {
              const s = Array.from(null !== (a = this._visibleAlertsSubject.value.get(e)) && void 0 !== a ? a : new Set());
              s.length > 0 && this._params.highlightCollection.removeHighlights(s), t.delete(e), i.delete(e);
            }
          }),
            this._visibleAlertsSubject.next(t),
            this._emphasizedAlertsSubject.next(i);
        }
        clearAll() {
          const e = new Set(
            Array.from(this._visibleAlertsSubject.value.values())
              .concat(Array.from(this._emphasizedAlertsSubject.value.values()))
              .flatMap((e) => Array.from(e))
          );
          e.size > 0 && this._params.highlightCollection.removeHighlights(Array.from(e)),
            this._visibleAlertsSubject.next(new Map()),
            this._emphasizedAlertsSubject.next(new Map());
        }
        getHighlightVisualState(e) {
          const t = this._params.alertStateService.getHighlightedAlert().pipe(
              I.U((t) => {
                var i;
                return !0 === (null === (i = null == t ? void 0 : t.highlightIds) || void 0 === i ? void 0 : i.includes(e));
              }),
              E.O(!1),
              R.x()
            ),
            i = this._params.alertStateService.getActiveAlertByClick().pipe(
              I.U((t) => {
                var i;
                return !0 === (null === (i = null == t ? void 0 : t.highlightIds) || void 0 === i ? void 0 : i.includes(e));
              }),
              E.O(!1),
              R.x()
            ),
            s = this._emphasizedAlerts.pipe(
              I.U((t) => Array.from(t.values()).some((t) => t.has(e))),
              R.x()
            );
          return A.aj([t, i, s]).pipe(
            I.U(([e, t, i]) => ({ hovered: e, selectedByClick: t, emphasized: i })),
            E.O({ hovered: !1, selectedByClick: !1, emphasized: !1 }),
            U.G(),
            I.U(([e, t]) =>
              t.hovered || t.selectedByClick
                ? _t.pc.hovered
                : t.emphasized
                ? e.hovered || e.selectedByClick
                  ? _t.pc.hovered
                  : _t.pc.hoveredNeedsAttention
                : _t.pc.none
            ),
            E.O(_t.pc.none),
            R.x(),
            x.b((t) => {
              var i;
              return null === (i = this._params.logger) || void 0 === i ? void 0 : i.debug(`[${e}] visual state:`, t);
            })
          );
        }
        dispose() {
          this.clearAll(), this._subs.unsubscribe();
        }
      }
      function wt(e, t) {
        return `${e}|${t.start}-${t.end}|cheetah`;
      }
      class At {
        constructor(e) {
          (this._params = e), (this._subscriptions = new g.w()), (this._currentEmphasizedAlertId = null);
        }
        scrollToEmphasizedAlert(e, t) {
          this._params.experimentClient.isGateEnabled(Qe.K.CheetahMergedWithExtensionScrolling) &&
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
      var It = i(95399);
      function xt(e, t, i) {
        return It.z(ut.P(() => k.D(t())).pipe(S.h(i)), e);
      }
      var Ct = i(53917);
      const Rt = (0, V.xb)(J),
        Et = new Set([
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
        Ut = new Set([
          "onboarding",
          "gdocsOnboardingPopup",
          "loginSSO",
          "accountMigration",
          "standWithUkraineGrammarlySuspended",
          "claimedUser",
          "dataControl",
          "grammarlyBusinessSigninPopup"
        ]);
      function Bt(e) {
        return "opened" === e.kind;
      }
      class kt {
        constructor(e) {
          (this._params = e),
            (this._subs = new g.w()),
            (this._log = u.Y.create("CheetahFeatureImpl")),
            (this._inlineButtonUI = $.h.create(null)),
            (this._ideateButtonUI = $.h.create(null)),
            (this._expandedIdeateButtonUI = $.h.create(null)),
            (this._assistantUI = $.h.create(null)),
            (this._highlightUI = $.h.create(null)),
            (this._quasiCaretUI = $.h.create(null)),
            (this._onboardingUI = $.h.create(null)),
            (this._nativeCursorHider = $.h.create(j.none)),
            (this._lastRestartAttemptTime = $.h.create(0)),
            (this._contextHighlight = $.h.create(j.none)),
            (this._highlightsUpdater = new yt({
              getAlertById: (e) => this._params.alertProcessor.alerts.getAlertById(e),
              highlightCollection: this._params.highlightCollection,
              alertStateService: this._params.alertStateService,
              logger: u.Y.create("cheetah.revision.highlights")
            })),
            (this._highlightsScroller = new At({
              integration: this._params.integration,
              experimentClient: this._params.experimentClient,
              getAlertById: (e) => this._params.alertProcessor.alerts.getAlertById(e)
            })),
            (this._ideateButtonTooltipNotificationState = $.h.create(j.none)),
            (this._assistantFocused = $.h.create(!1)),
            (this._inlineButtonRecentlyPressed = $.h.create(!1)),
            (this._ideateButtonRecentlyHovered = $.h.create(!1)),
            (this._selectionRange = $.h.create(j.none)),
            (this._highlights = $.h.create([])),
            (this._quasiCaretRect = $.h.create(j.none)),
            (this._assistantUIState = $.h.create(j.none)),
            (this._onboardingViewModels = $.h.create(j.none)),
            (this._ideateButtonRefChange = new m.xQ()),
            (this._disposed = new m.xQ()),
            (this._initialOnboardingBlockedForSession = $.h.create(!1)),
            (this._assistantServices = (function (
              e,
              t,
              i,
              s,
              a,
              o,
              d,
              h,
              v,
              b,
              y,
              w,
              R,
              E,
              U,
              B,
              k,
              P,
              O,
              D,
              F,
              V,
              L,
              Z,
              Q,
              Y,
              K,
              J,
              X,
              ee
            ) {
              const te = new m.xQ(),
                ie = () =>
                  (0, l.zG)(
                    e.get(),
                    q.fromOption(() => new Error("checking service not initialized"))
                  ),
                se = {
                  notify(e) {
                    null == ee || ee.info("received monitoring event", { event: e }),
                      (0, l.zG)(
                        ie(),
                        q.map((e) => e.sessionUuid),
                        q.map((t) => {
                          "error" === e.kind
                            ? (J.cheetah.error(e, Y, t),
                              ("waitForContextTimeout" !== e.name && "waitForAckTimeout" !== e.name) ||
                                "getContext" !== e.source ||
                                (Date.now() - Q.get() > p.LK(5)
                                  ? (Q.set(Date.now()), K())
                                  : (0, l.zG)(
                                      e.name,
                                      (e) =>
                                        "waitForAckTimeout" === e
                                          ? "ack"
                                          : "waitForContextTimeout" === e
                                          ? "setContext"
                                          : void (0, W.L0)(e),
                                      (e) => J.cheetah.sessionRestartTimeout(e, Y, t)
                                    )))
                            : "info" === e.kind
                            ? J.cheetah.info(e, Y, t)
                            : "warn" === e.kind
                            ? J.cheetah.warning(e, Y, t)
                            : (0, W.L0)(e.kind);
                        })
                      );
                  }
                },
                ae = new Pe.t({
                  inboundCAPIMessages: xt(t, i, Oe.J4),
                  sendCAPIMessage: ({ action: e, data: t, shouldInjectRev: i, shouldInjectSessionId: s }) =>
                    (0, l.zG)(
                      n.Uo(ie()),
                      n.tS((a) => a.sendMessage(e, t, i, s))
                    ),
                  monitoringService: se
                }),
                ne = new Te.c(ae),
                re = {
                  user: $.h.combine(s, a, (e, t) => {
                    var i;
                    return {
                      id: ze.n.Id.create(e.id),
                      isPremium: qe.n5.isPremium(e),
                      dialect: t,
                      institutionName: j.fromNullable(null === (i = e.institutionInfo) || void 0 === i ? void 0 : i.name)
                    };
                  }),
                  setDialect: o
                },
                oe = new Me.L(
                  ae,
                  v.view(
                    (0, l.ls)(
                      j.chain((e) => j.fromNullable(e.cheetahState)),
                      j.fold(
                        () => ({ enabled: !1 }),
                        (e) => ({ enabled: !0, userState: e })
                      )
                    )
                  )
                ),
                le = d.pipe(
                  _.w(
                    j.fold(
                      () => C.of(j.none),
                      (e) => e.sessionService.session.view(j.some)
                    )
                  )
                ),
                de = b.pipe(
                  T.QV(z.E),
                  M.R((e, t) => {
                    const i = e.filter(Ot);
                    return t && Ot(t) ? [...i, t] : i;
                  }, []),
                  I.U(we.Z$),
                  G.shareReplay({ bufferSize: 1, refCount: !0 })
                ),
                he = A.aj([de, y, w]).pipe(
                  I.U(([e, t, i]) =>
                    (0, l.zG)(
                      e,
                      j.filter(() => t),
                      j.fold(
                        () => ({}),
                        (e) => ({
                          [Ge.n.initialPopupAnchor]: i ? { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 } : void 0,
                          [Ge.n.initialBTSPopupAnchor]: i ? { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 } : void 0,
                          [Ge.n.rewriteTooltipAnchor]: { reference: e, placement: "top", offset: 8, boundaryAreaPadding: 10 }
                        })
                      )
                    )
                  )
                ),
                ce = (e) => {
                  null == ee || ee.debug(`Completing step [${e}]`);
                  E.get()[e].extension.completed || U({ [e]: { completed: !0, lastSeen: Date.now() } });
                },
                ue = () => {
                  const e = new Set();
                  (B.get().rewrite && k) || e.add(xe.T.StepName.rewrite),
                    B.get().compose || e.add(xe.T.StepName.initial),
                    B.get().onboarding ||
                      (e.add(xe.T.StepName.initial),
                      e.add(xe.T.StepName.initialBTS),
                      e.add(xe.T.StepName.rewrite),
                      e.add(xe.T.StepName.prompts),
                      e.add(xe.T.StepName.review),
                      e.add(xe.T.StepName.knowledgeHub),
                      e.add(xe.T.StepName.references));
                  const t = (0, l.zG)(
                    v.get(),
                    j.map((e) => "ASSIGNMENT_WRITING" === e.defaultDocumentContext.writingIntent),
                    j.getOrElse(l.jv)
                  );
                  return (
                    (B.get().onboardingBTS && t) || e.add(xe.T.StepName.initialBTS),
                    B.get().knowledgeHubIntegration || e.add(xe.T.StepName.knowledgeHub),
                    (0, He.Q)({
                      upstreamOnboardingState: E,
                      session: le,
                      textStats: h,
                      forceDisabledOnboardingSteps: e,
                      assistantUIActions: te,
                      externalElements: he,
                      hideAssistantOnboardingTooltips: d.pipe(
                        _.w(
                          j.fold(
                            () => $.h.create(!1),
                            (e) => e.dragBehavior.pipe(I.U((e) => "draggable" === e.kind && e.isDragging))
                          )
                        )
                      ),
                      promptsAllocated: oe.availability.view(Ie._.getPromptsAllocated),
                      client: "extension",
                      trackingService: ne,
                      disposed: R,
                      logger: Le.C8.Logging.getLogger("OnboardingCompletionEffects"),
                      completeOnboardingStep: ce
                    })
                  );
                },
                pe = {
                  flush: () =>
                    n.fF(() =>
                      new H.y((t) => {
                        const i = new g.w();
                        return (
                          P.empty.get()
                            ? t.next(void 0)
                            : (P.flush(),
                              (0, l.zG)(
                                e.get(),
                                j.fold(
                                  () => t.next(void 0),
                                  (e) => {
                                    i.add(
                                      e.messages
                                        .pipe(
                                          S.h((e) => e._tag === ye.J8.Type.submitOtAck),
                                          N.L(500, C.of(null)),
                                          x.b(() => t.next(void 0))
                                        )
                                        .subscribe()
                                    );
                                  }
                                )
                              )),
                          () => i.unsubscribe()
                        );
                      })
                        .pipe(f.q(1))
                        .toPromise()
                    ),
                  getText: (e) => n.tD(() => O(e)),
                  insertText: (e) => n.tD(() => D(e)),
                  copyText: (e) => () => (0, c.v)(e).pipe(f.q(1)).toPromise(),
                  setContextHighlight: (e, t) => {
                    L.set(j.some({ range: e, visibility: t }));
                  },
                  selectedRange: F,
                  textUpdated: V
                },
                ge = {
                  reportUphookShow: (e) =>
                    n.tD(() => {
                      e.isPremium ||
                        ((0, Ve.n)(Z, {
                          placement: "grammarlyGoPrompts",
                          upgradeHookName: "grammarlyGoPrompts",
                          upgradeHookSlot: "grammarlyGo"
                        }),
                        J.upgradeHooks.showUpgradeHook("grammarlyGoPrompts", "grammarlyGo"));
                    }),
                  reportUphookClick: (e) =>
                    n.tD(() => {
                      e.isPremium
                        ? self.open(r.Rd().appConfig.url.support)
                        : ((0, Ve.Q)(Z, {
                            placement: "grammarlyGoPrompts",
                            upgradeHookName: "grammarlyGoPrompts",
                            upgradeHookSlot: "grammarlyGo"
                          }),
                          J.upgradeHooks.clickUpgradeHook("grammarlyGoPrompts", "grammarlyGo"),
                          (0, We.wW)("upHook", "grammarlyGoPrompts"));
                    })
                },
                me = {
                  domain: C.of(Y),
                  submitFeedback: (e) =>
                    n.Y3(
                      () =>
                        (0, l.zG)(
                          e.source,
                          (e) =>
                            e === Ne.x.Source.resultCard
                              ? "cheetah-card"
                              : e === Ne.x.Source.quickReplyInitialActions || e === Ne.x.Source.intentCard
                              ? "cheetah-quick-reply"
                              : void (0, W.L0)(e),
                          (t) => Z.feedbackFormSubmit(e.mood, t, e.domain, e.message)
                        ),
                      (e) => new Error(String(e))
                    )
                },
                ve = new je.p({ capiService: ae, monitoringService: se }),
                _e = new De.j(
                  $.h.create({
                    contextUpdatesClient:
                      X.isGateEnabled(Qe.K.CheetahSelectionContextUpdates) &&
                      "test" === X.getTreatment(Ye.p.CheetahSelectionContextUpdates),
                    contextUpdatesServer:
                      X.isGateEnabled(Qe.K.CheetahSelectionContextUpdatesServer) &&
                      "test" === X.getTreatment(Ye.p.CheetahSelectionContextUpdates)
                  })
                ),
                be = new Fe.w({ capiService: ae, logger: u.Y.create("cheetah.toneDetectorService") });
              return {
                capiService: ae,
                userService: re,
                genAIAvailabilityService: oe,
                trackingService: ne,
                textEditorService: pe,
                feedbackService: me,
                uphookService: ge,
                monitoringService: se,
                userSurveyService: ve,
                selectionContextAvailabilityService: _e,
                toneDetectorService: be,
                createOnboardingViewModels: ue,
                notifyAssistantUIAction: (e) => te.next(e),
                dispose: () => {
                  oe.dispose(), ve.dispose(), _e.dispose();
                }
              };
            })(
              this._params.checkingService,
              this._params.checkingService.pipe(
                v.oA,
                _.w((e) => e.capiMessages)
              ),
              () => Object.values(this._params.latestCAPIMessages.get()),
              this._params.user,
              this._params.dapiSettings.view((e) => {
                var t, i;
                return null !== (i = null !== (t = e.dialectStrong) && void 0 !== t ? t : e.dialectWeak) && void 0 !== i ? i : "american";
              }),
              (e) => n.fF(() => this._params.dapiActions.changeStrongDialect(e)),
              this._assistantUIState,
              this._params.textStats,
              this._params.capiStartAckMessage,
              this._ideateButtonRefChange,
              $.h.combine(
                this._params.integration.canShowIdeateButtonPopups,
                this._params.gButtonPopupState.view("type").view((e) => !Et.has(e)),
                D.xD
              ),
              $.h.combine(
                this._params.csPageState
                  .view("cheetah")
                  .view(
                    (e) => (null == e ? void 0 : e.canShowInitialOnboarding) || (null == e ? void 0 : e.canShowInitialBTSOnboarding) || !1
                  ),
                this._initialOnboardingBlockedForSession,
                (e, t) => e && !t
              ),
              b.T(this._params.csPageState.view("isActiveTab").pipe(S.h((e) => !e)), this._disposed).pipe(f.q(1)),
              this._params.dapiSettings.view((e) =>
                (function (e) {
                  const t = Ae.Z.State.toClientState(Ae.Z.decode(e.extension || ""), "extension"),
                    i = Ae.Z.State.toClientState(Ae.Z.decode(e.editor || ""), "editor"),
                    s = Ae.Z.State.toClientState(Ae.Z.decode(e.llamaMac || ""), "llamaMac"),
                    a = Ae.Z.State.toClientState(Ae.Z.decode(e.llamaWindows || ""), "llamaWin");
                  return (0, l.zG)(
                    Ae.Z.State.empty,
                    Ae.Z.State.patch(t, "extension"),
                    Ae.Z.State.patch(i, "editor"),
                    Ae.Z.State.patch(s, "llamaMac"),
                    Ae.Z.State.patch(a, "llamaWin")
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
                    Ae.Z.decode,
                    (t) =>
                      (0, l.zG)(
                        Ae.Z.State.toClientState(t, "extension"),
                        (t) => ({ ...t, ...e }),
                        (e) => Ae.Z.State.patch(e, "extension")(t)
                      ),
                    Ae.Z.encode
                  )
                );
              },
              this._params.featureFlags,
              this._params.integration.enableInlineRewrites,
              this._params.textChangeBuffer,
              (e) => this._params.integration.getText(e),
              (e) => this._insertText(e),
              this._selectionRange,
              this._params.integration.textUpdated,
              this._contextHighlight,
              this._params.gnar,
              this._lastRestartAttemptTime,
              this._params.domain,
              () => this._restartAssistant(),
              this._params.telemetry,
              this._params.experimentClient,
              this._log
            )),
            (this._isOnboardingPopupVisible = $.h.create(!1)),
            (this._entryPointsEnabled = $.h.create(!1)),
            (this._openAssistantSubject = new m.xQ()),
            (this.inlineButtonUI = this._inlineButtonUI.view()),
            (this.ideateButtonUI = this._ideateButtonUI.view()),
            (this.expandedIdeateButtonUI = this._expandedIdeateButtonUI.view()),
            (this.assistantUI = this._assistantUI.view()),
            (this.highlightUI = this._highlightUI.view()),
            (this.quasiCaretUI = this._quasiCaretUI.view()),
            (this.onboardingUI = this._onboardingUI.view()),
            (this.assistantState = this._assistantUI.view(
              (0, l.ls)(
                j.fromNullable,
                j.fold(
                  () => ({ kind: "closed" }),
                  () => ({ kind: "opened", supportsRevision: this._params.supportsRevision })
                )
              )
            )),
            (this.isOnboardingPopupVisible = this._isOnboardingPopupVisible.view()),
            (this.isAvailable = $.h.combine(
              this._assistantServices.genAIAvailabilityService.availability.view((0, D.ff)(Ie._.isUnavailable)),
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
                  v.oA,
                  _.w((e) => e.readyState),
                  S.h((e) => e === ye.kQ.ready),
                  f.q(1)
                )
                .subscribe(() => this._init())
            ),
            this._subs.add(this._setupIdeateTooltipStateObs());
          const t = this._onboardingViewModels.pipe(
            _.w(
              j.fold(
                () => y.E,
                (e) => e.onboarding.uiActions
              )
            )
          );
          this._subs.add(
            t.pipe(S.h(zt)).subscribe(() => {
              this._params.cheetahCSActions.cheetahInitialOnboardingShown();
            })
          ),
            this._subs.add(
              t.pipe(S.h(Mt)).subscribe(() => {
                this._params.cheetahCSActions.cheetahInitialBTSOnboardingShown();
              })
            ),
            this._subs.add(
              this._getOnboardingVMStepActive([xe.T.StepName.initial, xe.T.StepName.initialBTS]).subscribe(
                w.wW(this._isOnboardingPopupVisible)
              )
            ),
            this._subs.add(
              this._params.gButtonPopupState
                .view("type")
                .view((e) => Ut.has(e))
                .subscribe((e) => {
                  e && this._initialOnboardingBlockedForSession.set(!0);
                })
            ),
            this._subs.add(
              A.aj([this._params.gButtonDisabledReason, this._params.integration.entryPointsEnabled])
                .pipe(
                  I.U(
                    ([e, t]) =>
                      t &&
                      !(function (e) {
                        const t = new Set([
                          Ze.P.DATA_CONTROL_ACTIVE,
                          Ze.P.OFFLINE,
                          Ze.P.STAND_WITH_UKRAINE,
                          Ze.P.USER_CLAIMED,
                          Ze.P.USER_EDC_BLOCKED,
                          Ze.P.SIGNED_OUT_GB
                        ]);
                        return null !== e && t.has(e);
                      })(e)
                  )
                )
                .subscribe(w.wW(this._entryPointsEnabled))
            ),
            (0, Ct.D)(this._params.experimentClient) ||
              this._subs.add(
                this._params.csPageState
                  .view("cheetah")
                  .view((e) => {
                    var t;
                    return !1 === (null === (t = null == e ? void 0 : e.status) || void 0 === t ? void 0 : t.cheetahEnabled);
                  })
                  .subscribe(() => this._closeAssistant($e.j.disposed))
              ),
            this._registerDebugHelpers();
        }
        closeAssistant(e) {
          this._closeAssistant(e);
        }
        getHoveredStateBehavior(e) {
          return this._highlightsUpdater.getHighlightVisualState(e);
        }
        _init() {
          this._subs.add(this._assistantFocused.subscribe((e) => this._log.debug("Assistant " + (e ? "focused" : "blurred")))),
            this._subs.add(this._openAssistantSubject.pipe(_.w((e) => this._openAssistant(e))).subscribe()),
            this._subs.add(this._params.openAssistant.subscribe(this._openAssistantSubject)),
            this._subs.add(this._getInlineButtonUI().subscribe(w.wW(this._inlineButtonUI))),
            this._subs.add(this._getIdeateButtonUI().subscribe(w.wW(this._ideateButtonUI))),
            this._subs.add(this._getExpandedIdeateButtonUI().subscribe(w.wW(this._expandedIdeateButtonUI))),
            this._subs.add(this._getHighlightUI().subscribe(w.wW(this._highlightUI))),
            this._subs.add(this._getQuasiCaretUI().subscribe(w.wW(this._quasiCaretUI))),
            this._subs.add(this._getOnboardingUI().subscribe(w.wW(this._onboardingUI))),
            this._subs.add(this._updateSelectionRange().subscribe(w.wW(this._selectionRange))),
            this._subs.add(this._updateHighlightRects().subscribe(w.wW(this._highlights))),
            this._subs.add(this._updateQuasiCaretRect().subscribe(w.wW(this._quasiCaretRect))),
            this._subs.add(this._updateNativeCursor().subscribe()),
            this._subs.add(
              this.assistantState.subscribe((e) => {
                Bt(e) && this._params.closeLegacyAssistant();
              })
            ),
            this._subs.add(this._createOnboardingViewModelWhenCheetahAvailable().subscribe()),
            this._subs.add(this._handleTryItOut().subscribe());
        }
        _handleTryItOut() {
          return this._onboardingViewModels.pipe(
            _.w(
              j.fold(
                () => y.E,
                (e) => e.onboarding.uiActions
              )
            ),
            S.h(Ce.l.is(Ce.l.Kind.tryItOut)),
            x.b(() =>
              this._openAssistantSubject.next({
                mode:
                  Pt(this._params.integration.quickReplyContext.get()) && this._params.featureFlags.get().quickReply
                    ? "quickReply"
                    : "ideation"
              })
            )
          );
        }
        _getOnboardingVMStepActive(e) {
          return this._onboardingViewModels.pipe(
            _.w(
              j.fold(
                () => C.of(!1),
                (t) =>
                  t.onboarding.activeStep.view(
                    (0, l.ls)(
                      j.filter((e) => e.show),
                      j.map((t) => e.includes(t.name)),
                      j.getOrElse(l.jv)
                    )
                  )
              )
            ),
            R.x()
          );
        }
        _setupIdeateTooltipStateObs() {
          return this._assistantServices.genAIAvailabilityService.availability
            .pipe(
              E.O(null),
              U.G(),
              I.U(([e, t]) => (e && t && Ie._.isPassive(e) && Ie._.isActive(t) ? j.some("You’ve got prompts!") : j.none)),
              _.w(
                j.fold(
                  () => C.of(j.none),
                  (e) => b.T(C.of(j.some(e)), C.of(j.none).pipe(B.g(3e3)))
                )
              )
            )
            .subscribe(w.wW(this._ideateButtonTooltipNotificationState));
        }
        _registerDebugHelpers() {
          !(function (e) {
            const t = self;
            t && ((t.cheetahDebug = t.cheetahDebug || {}), Object.assign(t.cheetahDebug, e));
          })({ clearOnboarding: () => this._params.dapiActions.modifyCheetahOnboardingState(() => Ae.Z.encode(Ae.Z.State.empty)) });
        }
        _createOnboardingViewModelWhenCheetahAvailable() {
          return $.h
            .combine(
              this._params.featureFlags,
              this._assistantServices.genAIAvailabilityService.availability.view(Ie._.isUsable),
              (e, t) => e.onboarding && t
            )
            .pipe(
              x.b((e) =>
                this._onboardingViewModels.modify(
                  (t) => (
                    (0, l.zG)(
                      t,
                      F.bw((e) => e.onboarding.dispose())
                    ),
                    e ? j.some(this._assistantServices.createOnboardingViewModels()) : j.none
                  )
                )
              )
            );
        }
        _onClickIdeateButton(e) {
          Bt(this.assistantState.get()) ? this._closeAssistant($e.j.closed) : this._openAssistantSubject.next({ mode: e });
        }
        _updateSelectionRange() {
          return A.aj([this._params.integration.selectionRange, this.assistantState.view(Bt)]).pipe(
            I.U(([e, t]) => ({
              selectionRange: e,
              assistantIsFocused: this._assistantFocused.get(),
              inlineButtonRecentlyPressed: this._inlineButtonRecentlyPressed.get(),
              ideateButtonRecentlyHovered: this._ideateButtonRecentlyHovered.get(),
              initialPopupOnboardingStepIsActive: this.isOnboardingPopupVisible.get(),
              assistantOpened: t
            })),
            x.b(({ inlineButtonRecentlyPressed: e, ideateButtonRecentlyHovered: t }) => {
              e && this._inlineButtonRecentlyPressed.set(!1), t && this._ideateButtonRecentlyHovered.set(!1);
            }),
            S.h(
              ({
                selectionRange: e,
                assistantIsFocused: t,
                inlineButtonRecentlyPressed: i,
                ideateButtonRecentlyHovered: s,
                initialPopupOnboardingStepIsActive: a,
                assistantOpened: n
              }) => !i && !s && (!n || !j.isNone(e) || (!t && !a))
            ),
            I.U(({ selectionRange: e }) => e)
          );
        }
        _updateHighlightRects() {
          return (
            (e = this._selectionRange),
            (t = this._contextHighlight),
            (i = this._params.integration),
            A.aj([
              e.pipe(
                _.w(
                  j.fold(
                    () => C.of([]),
                    (e) => i.getHighlightRects(e).pipe(I.U((e) => e.map((e) => ({ rect: e, visibility: "visible" }))))
                  )
                )
              ),
              t.pipe(
                _.w(
                  j.fold(
                    () => C.of([]),
                    (e) => i.getHighlightRects(e.range).pipe(I.U((t) => t.map((t) => ({ rect: t, visibility: e.visibility }))))
                  )
                )
              )
            ]).pipe(I.U(([e, t]) => (t.find((e) => "hidden" !== e.visibility) ? t : e)))
          );
          var e, t, i;
        }
        _updateQuasiCaretRect() {
          return A.aj([this._selectionRange, this._highlightsUpdater.hasHighlights]).pipe(
            _.w(([e, t]) =>
              (0, l.zG)(
                e,
                j.filter(() => !this._params.supportsRevision || !t),
                j.filter(h.SV.isCollapsed),
                j.fold(
                  () => C.of([]),
                  (e) => this._params.integration.getHighlightRects(e)
                )
              )
            ),
            I.U((e) =>
              (0, l.zG)(
                e,
                a.c2,
                j.map((e) => e[e.length - 1])
              )
            )
          );
        }
        _updateNativeCursor() {
          return $.h.combine(this._quasiCaretRect, this.assistantState.view(Bt), (e, t) =>
            (0, l.zG)(
              s.Y(j.option)({ nativeUIHider: j.fromNullable(this._params.integration.createNativeUIHider), quasiCaretRect: e }),
              j.filter(() => t),
              F.ew(() => {
                this._nativeCursorHider.modify(
                  (e) => (
                    (0, l.zG)(
                      e,
                      F.bw((e) => e.dispose())
                    ),
                    j.none
                  )
                );
              }),
              F.bw(({ nativeUIHider: e }) => {
                this._nativeCursorHider.modify(
                  (t) => (
                    (0, l.zG)(
                      t,
                      F.bw((e) => e.dispose())
                    ),
                    j.some(e())
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
            F.bw(({ dispose: e }) => e())
          ),
            this._assistantUIState.set(j.none),
            this._assistantUI.set(null),
            (e !== $e.j.closed && e !== $e.j.assistantBlurred) || this._params.integration.focusTextField(),
            null === (t = this._params.assistantDidClose) || void 0 === t || t.next();
        }
        _restartAssistant() {
          this._log.info("reconnecting checking service and restarting session"),
            (0, l.zG)(
              this._assistantUIState.get(),
              j.map(({ sessionService: e }) => e.session.get().mode),
              F.bw((e) => {
                this._closeAssistant($e.j.disposed),
                  (0, l.zG)(
                    this._params.checkingService.get(),
                    F.bw((e) => {
                      e.reconnect();
                    })
                  ),
                  Re.w.isPushRewrite(e)
                    ? this._openAssistantSubject.next({ mode: "ideation" })
                    : this._openAssistantSubject.next({ mode: e });
              })
            );
        }
        async _openAssistant(e) {
          var t;
          Bt(this.assistantState.get()) && this._closeAssistant($e.j.disposed),
            this._assistantFocused.set(!0),
            "pushRewrite" === e.mode && this._selectionRange.set(j.some(e.transformRange));
          const i = new Ee.Z({
              logger: u.Y.create("cheetah.sessionService"),
              startSessionOptions: tt(
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
              selectionContextAvailability: this._assistantServices.selectionContextAvailabilityService.availability
            }),
            { revisionEngine: s, dispose: a } = this._params.supportsRevision
              ? await gt({
                  capiService: this._assistantServices.capiService,
                  sduiBufferService: this._params.sduiBufferService,
                  alertProcessor: this._params.alertProcessor,
                  initialAlertId: et(e),
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
                      (t = null === (e = j.toNullable(this._params.checkingService.get())) || void 0 === e ? void 0 : e.sessionUuid) &&
                      void 0 !== t
                      ? t
                      : null;
                  },
                  telemetry: this._params.telemetry
                })
              : { revisionEngine: void 0, dispose: l.Q1 },
            n = {
              logger: u.Y.create("cheetah.ui"),
              toneDetectorService: this._assistantServices.toneDetectorService,
              textEditorService: this._assistantServices.textEditorService,
              userService: this._assistantServices.userService,
              genAIAvailabilityService: this._assistantServices.genAIAvailabilityService,
              trackingService: this._assistantServices.trackingService,
              uphookService: this._assistantServices.uphookService,
              feedbackService: this._assistantServices.feedbackService,
              monitoringService: this._assistantServices.monitoringService,
              userSurveyService: this._assistantServices.userSurveyService,
              selectionContextAvailabilityService: this._assistantServices.selectionContextAvailabilityService,
              sessionService: i,
              revisionEngine: s,
              theme: $.h.create({ flatUI: this._params.supportsRevision }),
              notifyAssistantUIAction: this._assistantServices.notifyAssistantUIAction,
              settingsOptions: this._params.supportsRevision
                ? { kind: "withView", getView: () => this._params.settingsService.getView() }
                : void 0
            };
          try {
            const e = await this._params.getHostInfo(),
              s = await this._params.integration.renderAssistant(({ sizeBehavior: t, dragBehavior: s, readyToDrag: r }) => {
                const { assistantUI: o, dispose: l } = (0, Ue.e)({
                  ...n,
                  lifecycleService: {
                    sizeBehavior: t,
                    dragBehavior: s,
                    readyToDrag: r,
                    hostInfo: e,
                    visuallyReady: () => Promise.resolve(),
                    focusStateChanged: ({ isFocused: e }) => (this._assistantFocused.set(e), Promise.resolve()),
                    close: () => (this._closeAssistant($e.j.closed), Promise.resolve())
                  }
                });
                return (
                  this._assistantUIState.set(
                    j.some({
                      sessionService: i,
                      dragBehavior: k.D(s),
                      dispose: () => {
                        a(), l(), i.dispose(), this._assistantFocused.set(!1);
                      }
                    })
                  ),
                  o
                );
              });
            this._assistantUI.set(d.createElement(oe, null, s)), null === (t = this._params.assistantDidOpen) || void 0 === t || t.next();
          } catch (e) {
            this._log.error("failed to open assistant", e), this._assistantUIState.set(j.none), this._assistantUI.set(null);
          }
        }
        _getInlineButtonUI() {
          return (0, l.zG)(
            s.Y(o.P)({
              inlineButtonInfo: this._params.integration.inlineButtonPlacement,
              selectionRange: this._selectionRange,
              selectionOngoing: b.T(
                this._params.integration.selectionRange.pipe(I.U((e) => (0, l.zG)(e, j.isSome))),
                this._params.integration.selectionRange.pipe(P.b(100), O.h(!1))
              ),
              assistantOpened: this.assistantState.view(Bt),
              textMapIsEmpty: this._params.integration.textMapIsEmpty,
              quickReplyContext: this._params.integration.quickReplyContext,
              availability: this._assistantServices.genAIAvailabilityService.availability,
              entryPointsEnabled: this._entryPointsEnabled,
              featureFlags: this._params.featureFlags
            })
          ).pipe(
            I.U(
              ({
                inlineButtonInfo: e,
                selectionRange: t,
                selectionOngoing: i,
                assistantOpened: s,
                textMapIsEmpty: a,
                quickReplyContext: n,
                availability: r,
                entryPointsEnabled: o,
                featureFlags: h
              }) =>
                (0, l.zG)(
                  e,
                  j.filter(() => o),
                  j.filter(() => !s),
                  j.filter(() => Ie._.isUsable(r)),
                  j.fold(l.gn, (e) =>
                    (0, l.zG)(
                      t,
                      j.fold(l.gn, (t) =>
                        a && j.isSome(n) && h.inlineQuickReply
                          ? d.createElement(he, {
                              disabled: !1,
                              referenceElement: e.referenceElement,
                              placement: e.placement,
                              offset: j.toNullable(e.offset),
                              onClick: () => {
                                this._inlineButtonRecentlyPressed.set(!0), this._openAssistantSubject.next({ mode: "quickReply" });
                              }
                            })
                          : Tt(t) && (h.inlineRewrite || h.magicRewrite) && this._params.integration.enableInlineRewrites
                          ? d.createElement(ue, {
                              disabled: i,
                              referenceElement: e.referenceElement,
                              placement: e.placement,
                              offset: j.toNullable(e.offset),
                              onOpenRewriteClick: h.inlineRewrite
                                ? () => {
                                    this._inlineButtonRecentlyPressed.set(!0), this._openAssistantSubject.next({ mode: "rewrite" });
                                  }
                                : void 0,
                              onMagicRewriteClick: h.magicRewrite
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
          return this._onboardingViewModels.view(j.fold(l.gn, (e) => d.createElement(oe, null, L.UI.mount(Be.T, (0, ke.A)(e)))));
        }
        _getHighlightUI() {
          return $.h.combine(this._highlights, this.assistantState.view(Bt), this._assistantFocused, (e, t, i) =>
            t && i
              ? e.map(({ rect: e, visibility: t }, i) =>
                  d.createElement(Q, {
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
          return $.h.combine(this._quasiCaretRect, this.assistantState.view(Bt), (e, t) =>
            (0, l.zG)(
              e,
              j.filter(() => t),
              j.fold(
                () => null,
                (e) =>
                  d.createElement(be, {
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
          return $.h.combine(
            this._params.featureFlags,
            this._inlineButtonUI,
            this._selectionRange,
            this._params.integration.quickReplyContext,
            this._assistantServices.genAIAvailabilityService.availability,
            this._entryPointsEnabled,
            (e, t, i, s, a, n) =>
              (0, l.zG)(
                t,
                j.fromPredicate((e) => null === e),
                j.filter(() => n && e.ideateButton),
                j.filter(() => Ie._.isUsable(a)),
                j.fold(l.gn, () => this._getIdeateButtonForSelectionRange(i, s, e))
              )
          );
        }
        _getExpandedIdeateButtonUI() {
          return this._params.supportsRevision
            ? $.h.create(null)
            : $.h.combine(
                this._params.featureFlags,
                this._selectionRange,
                this._params.integration.quickReplyContext,
                this._assistantServices.genAIAvailabilityService.availability,
                this._entryPointsEnabled,
                (e, t, i, s, a) =>
                  (0, l.zG)(
                    s,
                    j.fromPredicate((e) => Ie._.isVisible(e)),
                    j.filter(() => a && e.ideateButton),
                    j.fold(l.gn, () => this._getIdeateButtonForSelectionRange(t, i, e))
                  )
              );
        }
        _getIdeateButtonForSelectionRange(e, t, i) {
          return this._params.supportsRevision
            ? null
            : (0, l.zG)(
                e,
                j.filter((e) => Tt(e) && i.rewrite),
                j.fold(
                  () => (Pt(t) && i.quickReply ? "quickReply" : i.compose ? "ideation" : null),
                  () => "rewrite"
                ),
                j.fromNullable,
                j.fold(l.gn, (e) =>
                  d.createElement(Rt, {
                    onMouseEnter: () => this._ideateButtonRecentlyHovered.set(!0),
                    onMouseLeave: () => this._ideateButtonRecentlyHovered.set(!1),
                    onClick: () => this._onClickIdeateButton(e),
                    mount: (e) => this._ideateButtonRefChange.next(e),
                    forceTooltipMessage: this._ideateButtonTooltipNotificationState.view(j.toUndefined)
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
            this._closeAssistant($e.j.disposed),
            null ===
              (e = j.toUndefined(
                (0, l.zG)(
                  this._onboardingViewModels.get(),
                  j.map((e) => e.onboarding)
                )
              )) ||
              void 0 === e ||
              e.dispose(),
            this._assistantServices.dispose(),
            this._subs.unsubscribe(),
            (0, l.zG)(
              this._nativeCursorHider.get(),
              F.bw((e) => e.dispose())
            ),
            this._params.integration.dispose();
        }
      }
      function Pt(e) {
        return (0, l.zG)(
          e,
          j.exists((e) => Object.values(e).filter((e) => void 0 !== e).length > 0)
        );
      }
      function Ot(e) {
        return e.isConnected && null !== e.offsetParent;
      }
      function Tt(e) {
        const t = e.end - e.start;
        return t >= 10 && t < 5e3;
      }
      function zt(e) {
        return (0, D.W9)(Ce.l.is(Ce.l.Kind.mount), (e) => e.step === xe.T.StepName.initial)(e);
      }
      function Mt(e) {
        return (0, D.W9)(Ce.l.is(Ce.l.Kind.mount), (e) => e.step === xe.T.StepName.initialBTS)(e);
      }
    },
    67534: (e, t, i) => {
      i.d(t, { B: () => o, g: () => r });
      var s = i(17528),
        a = i(48015),
        n = i(36991);
      const r = (e) =>
          e
            .reduce(
              ({ actions: e, index: t }, i) => {
                const s = e[0];
                return n.s.isInsertString(i)
                  ? (e.unshift({ pos: { start: t, end: t }, value: i.insert }), { actions: e, index: t })
                  : n.s.isInsertEmbed(i)
                  ? { actions: e, index: t + 1 }
                  : n.s.isRetain(i)
                  ? { actions: e, index: t + i.retain }
                  : n.s.isDelete(i)
                  ? (s && s.pos.start === s.pos.end && s.pos.end === t
                      ? (s.pos = { ...s.pos, end: s.pos.end + i.delete })
                      : e.unshift({ pos: { start: t, end: t + i.delete }, value: "" }),
                    { actions: e, index: t + i.delete })
                  : void (0, a.vE)(i);
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
                ? n.s.isInsertString(i)
                  ? (e.push({ range: { start: t, end: "\n" === i.insert ? t : t + i.insert.length }, formatting: i.attributes }),
                    { formattings: e, index: t + i.insert.length })
                  : n.s.isInsertEmbed(i)
                  ? { formattings: e, index: t + 1 }
                  : n.s.isRetain(i)
                  ? (e.push({ range: { start: t, end: t + i.retain }, formatting: i.attributes }), { formattings: e, index: t + i.retain })
                  : { formattings: e, index: t }
                : n.s.isInsertString(i)
                ? { formattings: e, index: t + i.insert.length }
                : n.s.isInsertEmbed(i)
                ? { formattings: e, index: t + 1 }
                : n.s.isRetain(i)
                ? { formattings: e, index: t + i.retain }
                : n.s.isDelete(i)
                ? { formattings: e, index: t }
                : void (0, a.vE)(i),
            { formattings: [], index: 0 }
          ).formattings;
    },
    88571: (e, t, i) => {
      i.d(t, { Q: () => l });
      var s = i(27378),
        a = i(15073),
        n = i(60797),
        r = i(95300),
        o = i(5114);
      const l = ({ children: e, remSize: t, setter: i }) => (
        (d += 1),
        s.useEffect(() => {
          const e = t.subscribe((e) => {
            h.next(o.some(e)), i(o.some(e));
          });
          return () => {
            e.unsubscribe(), (d -= 1), 0 === d && (h.next(o.none), i(o.none));
          };
        }, [t]),
        s.createElement(a.u.Context.Provider, { value: h.pipe(n.oA) }, e)
      );
      let d = 0;
      const h = new r.X(o.none);
    },
    57757: (e, t, i) => {
      i.d(t, { v: () => n });
      var s = i(44586),
        a = i(95195);
      function n(e, t = self) {
        return new s.y((i) => {
          var s, n;
          (null === (n = null === (s = t.navigator) || void 0 === s ? void 0 : s.clipboard) || void 0 === n ? void 0 : n.writeText)
            ? t.navigator.clipboard
                .writeText(e)
                .then(() => i.next(a.right(void 0)))
                .catch((e) => i.next(a.left(new Error(String(e)))))
            : i.next(a.left(new Error("The Clipboard API is not available.")));
        });
      }
    },
    51325: (e) => {
      e.exports = { highlightRect: "XWxTA", hidden: "o979x", attention: "bHjcD", blink: "oy7wj" };
    },
    16805: (e) => {
      e.exports = { ideateButton: "_ErYR", ideateButtonIcon: "i8HXG", spin: "CSZH1" };
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
