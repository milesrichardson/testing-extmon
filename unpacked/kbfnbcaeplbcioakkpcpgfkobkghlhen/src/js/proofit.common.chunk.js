(self.webpackChunk = self.webpackChunk || []).push([
  [4100],
  {
    92693: (e, t, i) => {
      i.d(t, { D: () => d, a: () => s });
      var s,
        o = i(59358),
        n = i(81591),
        r = i(48015),
        a = i(14601),
        l = i(78674),
        u = i(85985);
      !(function (e) {
        let t;
        !(function (e) {
          (e.default = "default"),
            (e.emogenie = "emogenie"),
            (e.feedback = "feedback"),
            (e.settings = "settings"),
            (e.proofitRequest = "proofitRequest"),
            (e.proofitReview = "proofitReview"),
            (e.startupPlaceholder = "startupPlaceholder");
        })((t = e.Type || (e.Type = {}))),
          (e.isDefault = function (t) {
            return t.type === e.Type.default;
          }),
          (e.isEmogenie = function (t) {
            return t.type === e.Type.emogenie;
          }),
          (e.isFeedback = function (t) {
            return t.type === e.Type.feedback;
          }),
          (e.isSettings = function (t) {
            return t.type === e.Type.settings;
          }),
          (e.isProofitRequest = function (t) {
            return t.type === e.Type.proofitRequest;
          }),
          (e.isProofitReview = function (t) {
            return t.type === e.Type.proofitReview;
          });
      })(s || (s = {}));
      class d extends n.A {
        constructor(e, t, i, n, d = o.V.defaultLayout) {
          super({ type: s.Type.startupPlaceholder }, { type: s.Type.default }),
            (this.browser = n),
            (this.layout = d),
            (this._sub = new a.w()),
            this._sub.add(
              t.subscribe((e) => {
                if (e.length > 0) for (; !this.activeViewHasAlerts(); ) this.popActiveView();
              })
            );
          const p = new Set([s.Type.emogenie]);
          this._sub.add(
            i.pipe(l.b(100), u.h(r.fQ)).subscribe(() => {
              if (p.has(this._activeView.get().type)) for (; this._activeView.get().type !== this._defaultView.type; ) this.popActiveView();
            })
          ),
            this._sub.add(
              this._activeView.subscribe((t) => {
                switch (t.type) {
                  case s.Type.settings:
                    return void e.assistantSettingsShow();
                  case s.Type.proofitRequest:
                    return void e.proofitRequestFormShow();
                  default:
                    return;
                }
              })
            );
        }
        activeViewHasAlerts() {
          switch (this._activeView.get().type) {
            case s.Type.default:
            case s.Type.emogenie:
              return !0;
            default:
              return !1;
          }
        }
        popActiveView() {
          const e = this._viewHistory.pop() || this._defaultView;
          this._activeView.set(e);
        }
        get isHeaderNavigationEnabled() {
          return this._activeView.view((e) => e.type !== s.Type.feedback);
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
    },
    31588: (e, t, i) => {
      i.r(t),
        i.d(t, {
          ProofitFeature: () => D,
          ProofitGmailInProgressRequestTracker: () => M,
          ProofitGmailIntegrationForComposeWindow: () => V,
          ProofitGmailIntegrationForThreads: () => U,
          ProofitTextReplacement: () => N,
          ProofitViewInjector: () => G.E
        });
      var s = i(2844),
        o = i(24209),
        n = i(76974),
        r = i(80900),
        a = i(44586),
        l = i(77843),
        u = i(77176),
        d = i(85985),
        p = i(28043),
        h = i(16118),
        c = i(93497),
        m = i(50628),
        g = i(66310),
        _ = i(17343),
        f = i(78674),
        v = i(41398),
        y = i(23063),
        b = i(8473),
        w = i(2768),
        E = i(13718),
        I = i(42833),
        C = i(85441),
        T = i(31528),
        R = i(92693),
        P = i(10389),
        S = i(62874),
        W = i(78002),
        x = i(98805),
        q = i(55649),
        L = i(23239),
        A = i(6660);
      class D {
        constructor(e, t, i, l, y, b, w, E, I, T, R, P, S, z, k) {
          (this.layout = e),
            (this._checkingStatus = t),
            (this._geometryInvalidated = l),
            (this._textObserver = y),
            (this._gnar = b),
            (this._state = w),
            (this._felog = E),
            (this._docId = I),
            (this._submitRequestToApi = T),
            (this._cancelRequestToApi = R),
            (this._reconnectSessionWithApi = P),
            (this._actions = S),
            (this.textReplacement = z),
            (this.isUsingSDUI = k),
            (this._subs = []),
            (this._textChangesDuringReviewSubscription = null),
            (this._calculateHighlightsRectsSubscription = null),
            (this._available = L.h.create("unknown")),
            (this._isEnglish = L.h.create("unknown")),
            (this.inProgressTabMounted = L.h.create(!1)),
            (this._conflictingInProgressTabMounted = L.h.create(!1)),
            (this.quotaRemaining = L.h.create(0)),
            (this.requestInfo = L.h.create(D.INITIAL_REQUEST_INFO)),
            (this.requestDisabledInfo = L.h.create(null)),
            (this._log = q.Y.create(`Proofit - docId: ${(0, A.Of)(I)}`)),
            (this.turnaroundTime = this._state.view((e) => {
              var t, i;
              return null !== (i = null === (t = e.dynamicConfig.proofit) || void 0 === t ? void 0 : t.turnaroundTime) && void 0 !== i
                ? i
                : 60;
            })),
            (this.layoutCreated = this.layout.pipe((0, u.U)((e) => null !== e))),
            (this._quotaResetDate = this._state
              .view(({ dapi: { billing_subscription_plan_period: e, billing_subscription_renewal_date: t } }) => ({
                billing_subscription_plan_period: e,
                billing_subscription_renewal_date: t
              }))
              .view((e) => {
                var t;
                return "MONTHLY" === e.billing_subscription_plan_period &&
                  null !== (t = e.billing_subscription_renewal_date) &&
                  void 0 !== t
                  ? t
                  : null;
              })),
            (this.disableHowItWorksInfo = this._state.view((e) => Boolean(e.page.disableProofitHowItWorksInfo))),
            this._subs.push(
              this.layout.subscribe((e) => {
                e &&
                  (this._subs.push(e.proofitInProgressTabLayout.mounted.subscribe((e) => this.inProgressTabMounted.set(e))),
                  this._subs.push(
                    e.proofitInProgressTabLayout.conflictingTabMounted.subscribe((e) => this._conflictingInProgressTabMounted.set(e))
                  ));
              })
            ),
            this._subs.push(
              (0, s.aj)([
                this._available,
                this._isEnglish,
                this.quotaRemaining,
                this._quotaResetDate,
                i,
                this._conflictingInProgressTabMounted,
                this.requestInfo.view("status")
              ])
                .pipe(
                  (0, u.U)(([e, t, i, s, o, n, r]) =>
                    r === W.eE.REVIEWING
                      ? null
                      : r === W.eE.INITIAL
                      ? { reason: W.rS.CHECKING_INITIAL_AVAILABILITY }
                      : 0 === i
                      ? { reason: W.rS.NO_FREE_TRIALS_LEFT, meta: { quotaResetDate: s } }
                      : !1 === t
                      ? { reason: W.rS.UNSUPPORTED_LANGUAGE }
                      : i < 0
                      ? { reason: W.rS.NOT_AVAILABLE_QUOTA_ERROR }
                      : !1 === e
                      ? { reason: W.rS.NOT_AVAILABLE }
                      : n
                      ? { reason: W.rS.CONFLICTING_REQUEST }
                      : o < W.fy
                      ? { reason: W.rS.NOT_ENOUGH_WORDS, meta: { wordsCount: o } }
                      : o > W.Vw
                      ? { reason: W.rS.TOO_MANY_WORDS, meta: { wordsCount: o } }
                      : null
                  )
                )
                .subscribe((e) => this.requestDisabledInfo.set(e))
            ),
            this._subs.push(
              this.requestDisabledInfo
                .pipe(
                  (0, u.U)((e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.reason) && void 0 !== t ? t : null;
                  }),
                  (0, d.h)((e) => e !== W.rS.CHECKING_INITIAL_AVAILABILITY),
                  (0, p.x)()
                )
                .subscribe((e) => {
                  null === e ? this._gnar.proofitButtonEnabled() : this._gnar.proofitButtonDisabled(e);
                })
            ),
            this._subs.push(
              this.requestInfo.pipe((0, h.G)()).subscribe(([e, t]) => {
                this._log.trace("Request info changes (previous vs. new):", { previousRequestInfo: e, newRequestInfo: t });
              })
            ),
            this._subs.push(
              (0, s.aj)([this._isEnglish, this._available])
                .pipe(
                  (0, c.n)(([e, t]) => "unknown" === e || "unknown" === t),
                  (0, m.P)()
                )
                .subscribe((e) => {
                  this.requestInfo.view("status").get() === W.eE.INITIAL && this.requestInfo.modify((e) => ({ ...e, status: W.eE.IDLE }));
                })
            ),
            (this.startedThenStoppedTyping = this._textObserver.contentChanges.async.pipe(
              (0, g.w)((e) => (0, o.T)((0, n.of)(e.changes.length > 0), (0, r.H)((0, x.m9)(2)).pipe((0, _.h)(!1)))),
              (0, h.G)(),
              (0, u.U)(([e, t]) => !0 === e && !1 === t)
            )),
            this._subs.push(
              new a.y((e) => {
                const t = () => e.next();
                return (0, C.OB)().message.on("bgSW-shutdown", t), () => (0, C.OB)().message.off("bgSW-shutdown", t);
              })
                .pipe(
                  (0, f.b)(x.E0),
                  (0, v.M)(this.requestInfo.view((e) => e.status)),
                  (0, d.h)(([, e]) => e === W.eE.IN_PROGRESS)
                )
                .subscribe(() => this._reconnectSessionWithApi())
            );
        }
        onAvailabilityData(e) {
          this._log.trace("Availability response received:", e),
            this._available.set(e.quota >= 0 && e.available),
            this.quotaRemaining.set(e.quota),
            e.quota < 0 && this._felog.proofit.availabilityQuotaError(this._getDataForErrorTracking());
        }
        setIsEnglish(e) {
          this._isEnglish.set(e);
        }
        onSubmitResponse(e) {
          this._log.trace("Submit response received:", e),
            "error" === e.status
              ? (this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.ERROR }),
                this._felog.proofit.submitResponseError(this._getDataForErrorTracking()))
              : "accepted" === e.status && this.requestInfo.modify((e) => ({ ...e, status: W.eE.ACCEPTED }));
        }
        onCancelResponse(e) {
          this._log.trace("Cancel response received:", e),
            this.quotaRemaining.set(e.quota),
            this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.CANCELED });
        }
        onProgress(e) {
          this._log.trace("Request in progress message received:", e);
          const t = this.requestInfo.get().status;
          (t !== W.eE.ACCEPTED && t !== W.eE.IN_PROGRESS) ||
            (this.requestInfo.modify((t) => ({
              ...t,
              status: W.eE.IN_PROGRESS,
              slicesChecked: e.checked,
              totalSlices: e.total,
              suggestionsMade: e.changesNumber,
              activeReviewers: e.activeReviewers
            })),
            t === W.eE.ACCEPTED &&
              this._subs.push(
                (0, l.F)(x.E0)
                  .pipe(
                    (0, y.q)(this.turnaroundTime.get() + 1),
                    (0, v.M)(this.requestInfo.view("status")),
                    (0, b.o)(([e, t]) => t === W.eE.IN_PROGRESS),
                    (0, u.U)(([e, t]) => this.turnaroundTime.get() - e)
                  )
                  .subscribe((e) => this.requestInfo.modify((t) => ({ ...t, secondsRemaining: e })))
              ));
        }
        onCompleted(e) {
          const t = this.requestInfo.get().timeStarted;
          if (t) {
            const e = (Date.now() - t) / 1e3;
            this._gnar.proofitOrderTurnaroundTimeInSeconds(e);
          }
          this._log.trace("Request completed message received:", e),
            this.requestInfo.modify((t) => ({
              ...t,
              status: W.eE.COMPLETED,
              slicesChecked: e.checked,
              totalSlices: e.total,
              suggestionsMade: e.changesNumber,
              textChanges: e.textChanges,
              timeStarted: void 0
            }));
        }
        onError(e) {
          this._log.trace("Request error message received:", e),
            this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.ERROR }),
            this._felog.proofit.progressError(this._getDataForErrorTracking(e.reason));
        }
        onRejected(e) {
          this._log.trace("Request rejected message received:", e),
            this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.REJECTED }),
            this._felog.proofit.progressRejected(this._getDataForErrorTracking(e.reason));
        }
        onCAPISessionStart() {
          (this.requestInfo.get().status !== W.eE.ACCEPTED && this.requestInfo.get().status !== W.eE.IN_PROGRESS) ||
            (this._log.trace('Submitting request again (with "reconnect: true")'), this._submitRequestToApi(!0));
        }
        resetRequest() {
          var e;
          this._log.trace("Resetting request."),
            null === (e = this._calculateHighlightsRectsSubscription) || void 0 === e || e.unsubscribe(),
            this.requestInfo.set(D.IDLE_REQUEST_INFO);
        }
        submitRequest() {
          this._log.trace("Submitting request."), this._actions.sentProofitRequest();
          const e = Date.now();
          this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.PREPARING });
          const t = this._checkingStatus.pipe(
            (0, f.b)(300),
            (0, d.h)((e) => e === P.Hq.idle)
          );
          (0, l.F)(100)
            .pipe((0, w.R)(t))
            .subscribe({
              complete: () => {
                this._submitRequestToApi(!1), this.requestInfo.set({ ...D.IDLE_REQUEST_INFO, status: W.eE.PRE_SUBMIT, timeStarted: e });
              }
            });
        }
        cancelRequest() {
          this._log.trace("Canceling request."),
            this._gnar.proofitOrderCanceled(),
            this._cancelRequestToApi(),
            this.requestInfo.modify((e) => ({ ...e, timeStarted: void 0, status: W.eE.PRE_CANCEL }));
        }
        async reviewRequest() {
          var e, t;
          this._log.trace("Reviewing request."),
            this._gnar.proofitOrderReviewed(),
            this.requestInfo.modify((e) => ({ ...e, status: W.eE.REVIEWING })),
            null === (e = this._textChangesDuringReviewSubscription) || void 0 === e || e.unsubscribe();
          const i = await this.textReplacement.applyTextChanges(this.requestInfo.get().textChanges);
          this._calculateHighlightsRects(i),
            null === (t = this._calculateHighlightsRectsSubscription) || void 0 === t || t.unsubscribe(),
            (this._calculateHighlightsRectsSubscription = this._geometryInvalidated
              .pipe((0, E.U)(S.S.hz10), (0, v.M)(this.requestInfo.view("highlights")))
              .subscribe(([e, t]) => {
                this._calculateHighlightsRects(t);
              })),
            this._subs.push(this._calculateHighlightsRectsSubscription),
            (this._textChangesDuringReviewSubscription = this._textObserver.contentChanges.immediate
              .pipe(
                (0, I.u)((0, r.H)(1e3)),
                (0, d.h)((e) => e.changes.length > 0),
                (0, m.P)()
              )
              .subscribe(() => this.resetRequest())),
            this._subs.push(this._textChangesDuringReviewSubscription);
        }
        _calculateHighlightsRects(e) {
          const t = this.textReplacement.calculateHighlightsRects(e);
          this.requestInfo.modify((e) => ({ ...e, highlights: t }));
        }
        dialogCaller() {
          return this._isInReview() ? { type: T.WT.proofitReview } : { type: T.WT.proofitRequest };
        }
        assistantViewType() {
          return this._isInReview() ? R.a.Type.proofitReview : R.a.Type.proofitRequest;
        }
        onDisableHowItWorksInfo(e) {
          e ? this._actions.disableProofitHowItWorksInfo() : this._actions.enableProofitHowItWorksInfo();
        }
        dispose() {
          this._subs.forEach((e) => e.unsubscribe());
        }
        _getDataForErrorTracking(e) {
          var t, i;
          const s = this.requestInfo.get();
          return {
            reason: null != e ? e : null,
            featureState: {
              available: this._available.get(),
              quotaRemaining: this.quotaRemaining.get(),
              isEnglish: this._isEnglish.get(),
              requestInfo: {
                status: s.status,
                slicesChecked: s.slicesChecked,
                totalSlices: s.totalSlices,
                suggestionsMade: s.suggestionsMade
              },
              requestDisabledReason:
                null !== (i = null === (t = this.requestDisabledInfo.get()) || void 0 === t ? void 0 : t.reason) && void 0 !== i ? i : null,
              docId: (0, A.Of)(this._docId)
            }
          };
        }
        _isInReview() {
          return this.requestInfo.get().status === W.eE.REVIEWING;
        }
      }
      (D.INITIAL_REQUEST_INFO = {
        status: W.eE.INITIAL,
        slicesChecked: 0,
        totalSlices: 0,
        suggestionsMade: 0,
        textChanges: [],
        highlights: [],
        activeReviewers: 0
      }),
        (D.IDLE_REQUEST_INFO = { ...D.INITIAL_REQUEST_INFO, status: W.eE.IDLE });
      var z = i(89456),
        k = i(8709),
        O = i(36991);
      class N {
        constructor(e, t, i, s, o) {
          (this._getCurrentTextMap = t),
            (this._geometryProvider = i),
            (this._geometryLayout = s),
            (this._replacementService = o),
            (this._log = q.Y.create(`ProofitTextReplacement - docId: ${(0, A.Of)(e)}`));
        }
        calculateHighlightsRects(e) {
          const t = e.map((e) => {
            const t = this._geometryProvider.create(e.range, this._getCurrentTextMap()),
              i = t ? this._geometryProvider.getClientRects(t) : [],
              s = (i ? Array.from(i) : []).map((e) =>
                z.UL.setPosition(this._geometryLayout.getCurrentConversionContext().clientToRelative(e), e)
              );
            return { ...e, rects: s };
          });
          return this._log.trace("Highlights rects calculated:", t), t;
        }
        async applyTextChanges(e) {
          var t;
          this._log.trace("Applying text changes:", e),
            this._log.trace("Text before changes:", `"${this._getCurrentTextMap().getPlainText()}"`);
          let i = 0,
            s = [];
          for (const o of e) {
            const e = o.context.s + i,
              n = o.context.e + i,
              r = await this._applyTextChangesToSlice(e, n, new k.i(null === (t = o.alternatives) || void 0 === t ? void 0 : t[0]));
            (i += r.indexRebase), (s = s.concat(r.highlights));
          }
          return this._log.trace("Text after changes:", `"${this._getCurrentTextMap().getPlainText()}"`), s;
        }
        async _applyTextChangesToSlice(e, t, i) {
          this._log.trace("Applying text changes to slice within the range:", `[${e}, ${t}]`),
            this._log.trace(
              "Text in slice before changes:",
              this._getCurrentTextMap()
                .getPlainText()
                .slice(e, t + 1)
            );
          let s = e - 1,
            o = 0,
            n = null;
          const r = [];
          for (let e = 0; e < i.ops.length; e++) {
            const t = i.ops[e],
              a = s + 1;
            let l = null,
              u = null,
              d = null;
            if (O.s.isRetain(t)) s += t.retain;
            else if (O.s.isInsertString(t)) {
              const r = i.ops[e + 1];
              r && O.s.isDelete(r) ? (n = t) : ((l = a), (u = ""), (d = t.insert), (s += d.length), (o += d.length));
            } else
              O.s.isDelete(t) &&
                ((l = a + t.delete),
                (u = this._getCurrentTextMap()
                  .getPlainText()
                  .slice(a, a + t.delete)),
                n ? ((d = n.insert), (n = null)) : (d = ""),
                (s += d.length),
                (o = o + d.length - t.delete));
            if (null !== l && null !== u && null !== d) {
              await this._replacementService.performReplacement({ pos: { start: a, end: l }, value: d });
              const e = { start: a, end: a + d.length };
              if (0 === d.length) {
                const t = this._getCurrentTextMap().getPlainText();
                " " === t[e.end]
                  ? (e.end = e.end + 1)
                  : " " === t[e.start - 1]
                  ? (e.start = e.start - 1)
                  : t[e.end]
                  ? (e.end = e.end + 1)
                  : t[e.start - 1] && (e.start = e.start - 1);
              }
              r.push({ range: e, originalText: u, rects: [] });
            }
          }
          return (
            this._log.trace(
              "Text in slice after changes:",
              this._getCurrentTextMap()
                .getPlainText()
                .slice(0 === e ? e : e + o, t + o + 1)
            ),
            { indexRebase: o, highlights: r }
          );
        }
      }
      class M {
        constructor() {
          this._inProgressId = L.h.create(null);
        }
        currentId() {
          return this._inProgressId.get();
        }
        sameRequestInProgress(e) {
          return this._inProgressId.view((t) => Boolean(t) && t === e);
        }
        differentRequestInProgress(e) {
          return this._inProgressId.view((t) => Boolean(t) && t !== e);
        }
        markInProgress(e) {
          this._inProgressId.set(e);
        }
        markNotInProgress() {
          this._inProgressId.set(null);
        }
      }
      (M.MESSAGE_ID = 0),
        (M.generateId = () => {
          const e = `proofit-in-progress-${M.MESSAGE_ID}`;
          return (M.MESSAGE_ID += 1), e;
        });
      var F = i(95113),
        H = i(5397);
      class V {
        constructor(e, t, i) {
          (this._targetTextField = e), (this._fieldContainer = t), (this._inProgressRequestTracker = i), (this._messageId = M.generateId());
        }
        getProofitLayout() {
          var e, t, i, s, o, n, r, a, l, u, d, p, h, c, m, g, _, f, v, y, b;
          const w =
              null ===
                (i =
                  null ===
                    (t = null === (e = this._targetTextField.closest("table")) || void 0 === e ? void 0 : e.closest("table:not(:scope)")) ||
                  void 0 === t
                    ? void 0
                    : t.querySelector('[command="Files"]')) || void 0 === i
                ? void 0
                : i.closest("table"),
            E = null == w ? void 0 : w.querySelector("tr td:first-of-type");
          (this._composeWindow = this._targetTextField.closest('[role="dialog"]')),
            (this._composeWindowContent =
              null === (o = null === (s = this._composeWindow) || void 0 === s ? void 0 : s.querySelector(":scope > .nH > .aaZ")) ||
              void 0 === o
                ? void 0
                : o.parentElement),
            (this._composeWindowLabel =
              null === (n = this._composeWindow) || void 0 === n ? void 0 : n.querySelector(":scope > .nH.Hy.aXJ"));
          const I =
              null === (a = null === (r = this._composeWindow) || void 0 === r ? void 0 : r.querySelector('input[name="draft"]')) ||
              void 0 === a
                ? void 0
                : a.value,
            C = I
              ? null === (l = this._targetTextField.ownerDocument.querySelector(`[data-standalone-draft-id="${I}"]`)) || void 0 === l
                ? void 0
                : l.closest("tr")
              : null;
          return (
            (this._draftItemLabel = null == C ? void 0 : C.querySelector(":scope > td.yX.xY > div.yW > span.bA4 > span.yP.boq")),
            (this._fullscreenContainer = null === (u = this._composeWindow) || void 0 === u ? void 0 : u.closest(".aVN")),
            (this._fullscreenOverlay = null === (d = this._fullscreenContainer) || void 0 === d ? void 0 : d.closest(".aSs")),
            (this._minimizedComposeWindowContainerWrapperList =
              this._targetTextField.ownerDocument.querySelector(".dw > div > .nH > .nH > .no")),
            (this._minimizedComposeWindowContainerWrapperListParent =
              null ===
                (m =
                  null ===
                    (c =
                      null ===
                        (h = null === (p = this._minimizedComposeWindowContainerWrapperList) || void 0 === p ? void 0 : p.parentElement) ||
                      void 0 === h
                        ? void 0
                        : h.parentElement) || void 0 === c
                    ? void 0
                    : c.parentElement) || void 0 === m
                ? void 0
                : m.parentElement),
            (this._minimizedComposeWindowContainerWrapper = this._fullscreenContainer
              ? Array.from(
                  null !==
                    (_ =
                      null === (g = this._minimizedComposeWindowContainerWrapperList) || void 0 === g
                        ? void 0
                        : g.querySelectorAll(":scope > .nH.nn")) && void 0 !== _
                    ? _
                    : []
                ).find((e) => {
                  const t = e.querySelector(":scope > .no > .nH.nn > .AD > .Hd");
                  return Boolean(t && !t.hasChildNodes());
                })
              : null ===
                  (y =
                    null === (v = null === (f = this._composeWindow) || void 0 === f ? void 0 : f.closest(".nH.nn")) || void 0 === v
                      ? void 0
                      : v.parentElement) || void 0 === y
              ? void 0
              : y.closest(".nH.nn")),
            (this._minimizedComposeWindowContainer =
              null === (b = this._minimizedComposeWindowContainerWrapper) || void 0 === b
                ? void 0
                : b.querySelector(":scope > .no > .nH.nn")),
            (this._hubspotSalesExtensionSidebarWidget = this._targetTextField.ownerDocument.querySelector(
              ".hubspot.hubspot-sales-sidebar-tab-container"
            )),
            w &&
            E &&
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainer
              ? {
                  proofitButtonLayout: { sibling: E, popupStyle: { zIndex: 1 } },
                  proofitInProgressTabLayout: {
                    container: this._minimizedComposeWindowContainer,
                    mounted: this._inProgressRequestTracker.sameRequestInProgress(this._messageId),
                    onMount: () => this._onMountInProgressTab(),
                    onUnmount: () => this._onUnmountInProgressTab(),
                    style: { position: "absolute", bottom: 0, right: 0, visibility: "visible" },
                    conflictingTabMounted: this._inProgressRequestTracker.differentRequestInProgress(this._messageId),
                    shouldLimitInteraction: Boolean(this._fullscreenContainer)
                  },
                  proofitHighlightsLayout: { container: this._fieldContainer, style: { position: "absolute", zIndex: H.wJ } },
                  proofitInProgressDraftItemLayout: {
                    clientRect: !this._fullscreenContainer && C ? F.z.createShared(C) : null,
                    style: {
                      position: "fixed",
                      backgroundColor: C ? getComputedStyle(C).backgroundColor : "rgba(242,245,245,0.8)",
                      opacity: 0.5
                    }
                  }
                }
              : null
          );
        }
        _onMountInProgressTab() {
          var e, t;
          if (
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainer
          ) {
            if (this._inProgressRequestTracker.currentId() === this._messageId) return;
            if (this._fullscreenContainer) {
              if (
                ((this._minimizedComposeWindowContainerWrapper.style.display = "block"),
                (this._fullscreenContainer.style.display = "none"),
                this._fullscreenOverlay)
              ) {
                const t = getComputedStyle(this._fullscreenOverlay),
                  i = this._targetTextField.ownerDocument.createElement("div");
                (i.style.backgroundColor = t.backgroundColor),
                  (i.style.height = "100%"),
                  (i.style.width = "100%"),
                  (i.style.position = "absolute"),
                  (i.style.top = "0"),
                  (i.style.left = "0"),
                  (i.style.zIndex = t.zIndex),
                  i.setAttribute("data-grammarly-proofit-in-progress-overlay", "true"),
                  (this._fullscreenOverlay.style.visibility = "hidden"),
                  null === (e = this._minimizedComposeWindowContainerWrapperListParent) ||
                    void 0 === e ||
                    e.insertAdjacentElement("beforebegin", i),
                  this._hubspotSalesExtensionSidebarWidget && (this._hubspotSalesExtensionSidebarWidget.style.visibility = "hidden");
              }
              null === (t = this._minimizedComposeWindowContainerWrapperList) ||
                void 0 === t ||
                t.querySelectorAll(":scope > .nH.nn").forEach((e) => {
                  e !== this._minimizedComposeWindowContainerWrapper && ((e.style.opacity = "0.5"), (e.style.pointerEvents = "none"));
                });
            } else this._composeWindowLabel && (this._composeWindowLabel.style.display = "none");
            this._draftItemLabel && (this._draftItemLabel.innerHTML = "Expert review in progress"),
              (this._minimizedComposeWindowContainerWrapper.style.height = "100vh"),
              (this._minimizedComposeWindowContainer.style.height = "100vh"),
              (this._minimizedComposeWindowContainer.style.zIndex = "2"),
              (this._composeWindowContent.style.display = "none"),
              this._composeWindow.setAttribute(
                "data-grammarly-proofit-in-progress-compose-window-container-width",
                this._minimizedComposeWindowContainer.style.width
              ),
              this._composeWindow.setAttribute(
                "data-grammarly-proofit-in-progress-compose-window-container-wrapper-width",
                this._minimizedComposeWindowContainerWrapper.style.width
              ),
              (this._minimizedComposeWindowContainer.style.width = "260px"),
              (this._minimizedComposeWindowContainerWrapper.style.width = "265px"),
              this._inProgressRequestTracker.markInProgress(this._messageId);
          }
        }
        _onUnmountInProgressTab() {
          var e;
          if (
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainer
          ) {
            if (this._inProgressRequestTracker.currentId() !== this._messageId) return;
            this._fullscreenContainer
              ? ((this._minimizedComposeWindowContainerWrapper.style.display = "none"),
                (this._fullscreenContainer.style.display = "block"),
                this._fullscreenOverlay &&
                  ((this._fullscreenOverlay.style.visibility = "inherit"),
                  null ===
                    (e = this._targetTextField.ownerDocument.body.querySelector(
                      'div[data-grammarly-proofit-in-progress-overlay="true"]'
                    )) ||
                    void 0 === e ||
                    e.remove()),
                this._minimizedComposeWindowContainerWrapperList.querySelectorAll(":scope > .nH.nn").forEach((e) => {
                  (e.style.opacity = "initial"), (e.style.pointerEvents = "initial");
                }),
                this._hubspotSalesExtensionSidebarWidget && (this._hubspotSalesExtensionSidebarWidget.style.visibility = "visible"))
              : this._composeWindowLabel && (this._composeWindowLabel.style.display = "block"),
              this._draftItemLabel && (this._draftItemLabel.innerHTML = "Draft"),
              (this._minimizedComposeWindowContainer.style.zIndex = "auto"),
              (this._composeWindowContent.style.display = "block");
            const t = this._composeWindow.getAttribute("data-grammarly-proofit-in-progress-compose-window-container-width"),
              i = this._composeWindow.getAttribute("data-grammarly-proofit-in-progress-compose-window-container-wrapper-width");
            t &&
              i &&
              ((this._minimizedComposeWindowContainer.style.width = t), (this._minimizedComposeWindowContainerWrapper.style.width = i)),
              this._composeWindow.removeAttribute("data-grammarly-proofit-in-progress-compose-window-container-width"),
              this._composeWindow.removeAttribute("data-grammarly-proofit-in-progress-compose-window-container-wrapper-width"),
              this._inProgressRequestTracker.markNotInProgress(),
              this._targetTextField.focus();
          }
        }
      }
      class U {
        constructor(e, t, i) {
          (this._targetTextField = e),
            (this._fieldContainer = t),
            (this._inProgressRequestTracker = i),
            (this._progressMessageElement = null),
            (this._hideComposeTab = (e) => {
              var t;
              e.setAttribute(
                "data-grammarly-proofit-in-progress-compose-window-wrapper-display",
                null !== (t = e.style.display) && void 0 !== t ? t : "inherit"
              ),
                (e.style.display = "none");
            }),
            (this._showComposeTab = (e) => {
              var t;
              const i = "data-grammarly-proofit-in-progress-compose-window-wrapper-display",
                s = null !== (t = e.getAttribute(i)) && void 0 !== t ? t : "";
              (e.style.display = s), e.removeAttribute(i);
            }),
            (this._messageId = M.generateId());
        }
        getProofitLayout() {
          var e, t, i, s, o, n, r, a, l, u;
          const d =
              null ===
                (i =
                  null ===
                    (t = null === (e = this._targetTextField.closest("table")) || void 0 === e ? void 0 : e.closest("table:not(:scope)")) ||
                  void 0 === t
                    ? void 0
                    : t.querySelector('[command="Files"]')) || void 0 === i
                ? void 0
                : i.closest("table"),
            p = null == d ? void 0 : d.querySelector("tr td:first-of-type");
          return (
            (this._composeWindow = this._targetTextField.closest('[role="region"]')),
            (this._composeWindowContent =
              null === (s = this._composeWindow) || void 0 === s ? void 0 : s.querySelector(":scope > table.HM > tbody > tr > td.I5")),
            (this._fullscreenOverlay = document.querySelector(".aSs")),
            (this._minimizedComposeWindowContainerWrapperList =
              this._targetTextField.ownerDocument.querySelector(".dw > div > .nH > .nH > .no")),
            (this._minimizedComposeWindowContainerWrapperListParent =
              null ===
                (a =
                  null ===
                    (r =
                      null ===
                        (n = null === (o = this._minimizedComposeWindowContainerWrapperList) || void 0 === o ? void 0 : o.parentElement) ||
                      void 0 === n
                        ? void 0
                        : n.parentElement) || void 0 === r
                    ? void 0
                    : r.parentElement) || void 0 === a
                ? void 0
                : a.parentElement),
            (this._minimizedComposeWindowContainerWrapper = Array.from(
              null !==
                (u =
                  null === (l = this._minimizedComposeWindowContainerWrapperList) || void 0 === l
                    ? void 0
                    : l.querySelectorAll(":scope > .nH.nn")) && void 0 !== u
                ? u
                : []
            ).find((e) => !e.hasChildNodes() && "2147483647" !== e.style.order)),
            (this._hubspotSalesExtensionSidebarWidget = this._targetTextField.ownerDocument.querySelector(
              ".hubspot.hubspot-sales-sidebar-tab-container"
            )),
            d &&
            p &&
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainerWrapperListParent
              ? {
                  proofitButtonLayout: { sibling: p, popupStyle: { zIndex: 1 } },
                  proofitInProgressTabLayout: {
                    container: this._minimizedComposeWindowContainerWrapper,
                    mounted: this._inProgressRequestTracker.sameRequestInProgress(this._messageId),
                    onMount: () => this._onMountInProgressTab(),
                    onUnmount: () => this._onUnmountInProgressTab(),
                    style: { position: "absolute", bottom: 0, right: 66, visibility: "visible" },
                    conflictingTabMounted: this._inProgressRequestTracker.differentRequestInProgress(this._messageId),
                    shouldLimitInteraction: !0
                  },
                  proofitHighlightsLayout: { container: this._fieldContainer, style: { position: "absolute", zIndex: H.wJ } },
                  proofitInProgressDraftItemLayout: null
                }
              : null
          );
        }
        _onMountInProgressTab() {
          if (
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainerWrapperListParent
          ) {
            if (this._inProgressRequestTracker.currentId() === this._messageId) return;
            this._addFullScreenOverlay(),
              this._allComposeTabContainers().forEach((e) => this._hideComposeTab(e)),
              (this._minimizedComposeWindowContainerWrapperListParent.style.top = "0"),
              (this._minimizedComposeWindowContainerWrapperListParent.style.position = "absolute"),
              (this._minimizedComposeWindowContainerWrapperListParent.style.zIndex = H.wJ.toString()),
              this._hideComposeWindowContent(),
              this._inProgressRequestTracker.markInProgress(this._messageId);
          }
        }
        _onUnmountInProgressTab() {
          if (
            this._composeWindow &&
            this._composeWindowContent &&
            this._minimizedComposeWindowContainerWrapperList &&
            this._minimizedComposeWindowContainerWrapper &&
            this._minimizedComposeWindowContainerWrapperListParent
          ) {
            if (this._inProgressRequestTracker.currentId() !== this._messageId) return;
            this._removeFullScreenOverlay(),
              this._allComposeTabContainers().forEach((e) => this._showComposeTab(e)),
              (this._minimizedComposeWindowContainerWrapper.style.height = ""),
              (this._minimizedComposeWindowContainerWrapperListParent.style.top = ""),
              (this._minimizedComposeWindowContainerWrapperListParent.style.position = ""),
              (this._minimizedComposeWindowContainerWrapperListParent.style.zIndex = ""),
              (this._composeWindowContent.style.display = "block"),
              this._progressMessageElement && (this._progressMessageElement.remove(), (this._progressMessageElement = null)),
              this._inProgressRequestTracker.markNotInProgress(),
              this._targetTextField.focus();
          }
        }
        _allComposeTabContainers() {
          var e, t;
          return Array.from(
            null !==
              (t =
                null === (e = this._minimizedComposeWindowContainerWrapperList) || void 0 === e
                  ? void 0
                  : e.querySelectorAll(":scope > .nH.nn > .no")) && void 0 !== t
              ? t
              : []
          );
        }
        _hideComposeWindowContent() {
          var e;
          this._composeWindowContent &&
            ((this._composeWindowContent.style.display = "none"),
            (this._progressMessageElement = this._buildProgressMessageElement()),
            null === (e = this._composeWindowContent.parentElement) || void 0 === e || e.appendChild(this._progressMessageElement));
        }
        _buildProgressMessageElement() {
          const e = this._targetTextField.ownerDocument.createElement("div");
          return (
            (e.style.background = "#F5F5F5"),
            (e.style.borderRadius = "2px"),
            (e.style.color = "#777"),
            (e.style.marginLeft = "8px"),
            (e.style.marginTop = "12px"),
            (e.style.padding = "7px"),
            (e.textContent = "Your email is being reviewed by our experts."),
            e
          );
        }
        _addFullScreenOverlay() {
          var e;
          const t = this._targetTextField.ownerDocument.createElement("div");
          if (
            ((t.style.height = "100%"),
            (t.style.width = "100%"),
            (t.style.position = "absolute"),
            (t.style.top = "0"),
            (t.style.left = "0"),
            t.setAttribute("data-grammarly-proofit-in-progress-overlay", "true"),
            this._fullscreenOverlay)
          ) {
            const e = getComputedStyle(this._fullscreenOverlay);
            (t.style.backgroundColor = e.backgroundColor),
              (t.style.zIndex = e.zIndex),
              (this._fullscreenOverlay.style.visibility = "hidden");
          } else (t.style.backgroundColor = "rgba(0, 0, 0, 0.5)"), (t.style.zIndex = "6");
          null === (e = this._minimizedComposeWindowContainerWrapperListParent) ||
            void 0 === e ||
            e.insertAdjacentElement("beforebegin", t),
            this._hubspotSalesExtensionSidebarWidget && (this._hubspotSalesExtensionSidebarWidget.style.visibility = "hidden");
        }
        _removeFullScreenOverlay() {
          var e;
          null === (e = this._targetTextField.ownerDocument.body.querySelector('div[data-grammarly-proofit-in-progress-overlay="true"]')) ||
            void 0 === e ||
            e.remove(),
            this._hubspotSalesExtensionSidebarWidget && (this._hubspotSalesExtensionSidebarWidget.style.visibility = "visible");
        }
      }
      var G = i(96601);
    },
    93072: (e, t, i) => {
      i.r(t),
        i.d(t, {
          ProofitButtonView: () => ie,
          ProofitHighlightsView: () => ye,
          ProofitInProgressDraftItemOverlayView: () => we,
          ProofitInProgressTabView: () => ce,
          ProofitViewInjector: () => se.E
        });
      var s = i(27378),
        o = i(92693),
        n = i(78002),
        r = i(42455),
        a = i(6726),
        l = i(37522),
        u = i(67506),
        d = i(157);
      const p = ({
        headerIcon: e = "logo-with-name",
        title: t,
        message: i,
        children: o,
        show: n = !1,
        placement: r = "auto",
        onClose: a,
        style: l
      }) =>
        s.createElement(
          u.J,
          {
            isOutsideReferenceElement: !1,
            headerIcon: e,
            mainContent: s.createElement(
              "div",
              { className: d.popoverMessageMainContent },
              s.createElement("div", { className: d.popoverMessageMainContentTitle }, t),
              i && s.createElement("div", { className: d.popoverMessageMainContentText }, i)
            ),
            show: n,
            placement: r,
            onClose: a,
            style: l
          },
          o
        );
      var h;
      !(function (e) {
        (e.emphasizedToEnabled = "emphasizedToEnabled"),
          (e.enabledToEnabled = "enabledToEnabled"),
          (e.emphasized = "emphasized"),
          (e.disabled = "disabled"),
          (e.enabled = "enabled");
      })(h || (h = {}));
      var c = i(80860),
        m = i(48015),
        g = i(59179),
        _ = i(89894);
      const f = 96,
        v = _.ux.keyframes({ from: { backgroundPosition: "0 0" }, to: { backgroundPosition: `${_.ux.px(-3264)} 0` } }),
        y = { height: _.ux.px(f), width: _.ux.px(f), transformOrigin: "top left" },
        b = {
          width: f,
          height: f,
          backgroundImage: `url(${g.y}proofitColorChange.png)`,
          animation: `${v} ${_.ux.seconds(2)} steps(34) forwards 1`,
          animationFillMode: "forwards"
        },
        w = { width: f, height: f, backgroundImage: `url(${g.y}proofitColorChange.png)`, backgroundPosition: [0, 0] },
        E = { width: f, height: f, backgroundImage: `url(${g.y}proofitColorChange.png)`, backgroundPosition: [0, -3264] },
        I = _.ux.style(b),
        C = _.ux.style(E),
        T = _.ux.style(w),
        R = _.ux.style(y),
        P = ({ size: e }) =>
          s.createElement(
            "div",
            { style: { height: e, width: e } },
            s.createElement("div", { className: R, style: { transform: `scale(${e / f})` } }, s.createElement("div", { className: I }))
          ),
        S = ({ size: e }) =>
          s.createElement(
            "div",
            { style: { height: e, width: e } },
            s.createElement("div", { className: R, style: { transform: `scale(${e / f})` } }, s.createElement("div", { className: C }))
          ),
        W = ({ size: e }) =>
          s.createElement(
            "div",
            { style: { height: e, width: e } },
            s.createElement("div", { className: R, style: { transform: `scale(${e / f})` } }, s.createElement("div", { className: T }))
          ),
        x = 96,
        q = _.ux.keyframes({ from: { backgroundPosition: "0 0" }, to: { backgroundPosition: `${_.ux.px(-8544)} 0` } }),
        L = { height: _.ux.px(x), width: _.ux.px(x), transformOrigin: "top left" },
        A = {
          width: x,
          height: x,
          backgroundImage: `url(${g.y}proofitSparkle.png)`,
          animation: `${q} ${_.ux.seconds(2)} steps(89) forwards 1`,
          animationFillMode: "forwards"
        },
        D = _.ux.style(A),
        z = _.ux.style(L),
        k = ({ size: e }) =>
          s.createElement(
            "div",
            { style: { height: e, width: e } },
            s.createElement("div", { className: z, style: { transform: `scale(${e / x})` } }, s.createElement("div", { className: D }))
          );
      var O = i(55446);
      function N(e) {
        const t = s.useRef();
        return (
          s.useEffect(() => {
            t.current = e;
          }),
          t.current
        );
      }
      const M = ({ prevIsDisabled: e, isDisabled: t, prevIsEmphasized: i, isEmphasized: o }) => {
          const n =
            ((a = t),
            (l = i),
            (u = o),
            (r = e) || !l || a || u
              ? r || l || a || u
                ? u
                  ? h.emphasized
                  : a
                  ? h.disabled
                  : h.enabled
                : h.enabledToEnabled
              : h.emphasizedToEnabled);
          var r, a, l, u;
          switch (n) {
            case h.emphasizedToEnabled:
            case h.enabledToEnabled:
              return s.createElement(S, { size: 20 });
            case h.enabled:
              return s.createElement(P, { size: 20 });
            case h.emphasized:
              return s.createElement(k, { size: 20 });
            case h.disabled:
              return s.createElement(W, { size: 20 });
            default:
              (0, m.vE)(n);
          }
        },
        F = ({
          style: e,
          onClick: t,
          disabledInfo: i,
          isEmphasized: o,
          showPopup: n,
          onPopupClose: r,
          disableIntroTooltip: u,
          popupStyle: d
        }) => {
          var h, m;
          const g = !!i,
            _ = null === (h = N(g)) || void 0 === h || h,
            f = null !== (m = N(o)) && void 0 !== m && m,
            v = s.createElement(
              "div",
              { "data-grammarly-part": "proofit-button", className: O.proofitButtonIcon, style: e },
              s.createElement(
                l.h,
                { onClick: t, disabled: g },
                s.createElement(M, { isDisabled: g, prevIsDisabled: _, isEmphasized: o, prevIsEmphasized: f })
              )
            );
          if (g)
            return s.createElement(
              a.u,
              { showDelay: 0, message: s.createElement(c.Q, { info: i, includeTitle: !0 }), withGrammarlyIcon: !0 },
              v
            );
          if (n) {
            let e,
              t,
              i = "";
            return (
              "canceled" === n
                ? ((e = "logo-with-name"), (i = "Your request was canceled."))
                : "error" === n
                ? ((e = "logo-error"), (i = "Something went wrong."), (t = "Please try again later."))
                : "rejected" === n &&
                  ((e = "logo-error"),
                  (i = "Order canceled by writing experts."),
                  (t = s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://support.grammarly.com/hc/en-us/articles/360024803951-Expert-writing-service-submission-stand"
                      },
                      "See our submission guidelines"
                    ),
                    ". We'll refund your credit to use on a different email."
                  ))),
              s.createElement(p, { show: Boolean(n), title: i, message: t, onClose: r, placement: "top", headerIcon: e, style: d }, v)
            );
          }
          return s.createElement(
            a.u,
            {
              showDelay: 1e3,
              message: s.createElement(
                s.Fragment,
                null,
                s.createElement("b", null, "Are you writing an important email?"),
                s.createElement("br", null),
                "Learn how to get instant help from our team of writing experts."
              ),
              withGrammarlyIcon: !0,
              disabled: u
            },
            v
          );
        };
      F.defaultProps = { disabledInfo: null, disableIntroTooltip: !1 };
      var H = i(16118),
        V = i(2844),
        U = i(85985),
        G = i(23063),
        $ = i(71032),
        B = i(17343),
        j = i(24209),
        Q = i(76974),
        Y = i(80900),
        J = i(93508),
        Z = i(2834),
        K = i(98403),
        X = i(77176),
        ee = i(23239),
        te = i(8543);
      const ie = ({
        layout: e,
        gButtonIsVisible: t,
        requestDisabledInfo: i,
        requestStatus: a,
        assistantActiveView: l,
        onOpenAssistant: u,
        onCloseAssistant: d,
        startedThenStoppedTyping: p,
        mouseObservable: h
      }) => {
        const [c, m] = s.useState(!1);
        s.useEffect(() => {
          const e = a.pipe(H.G()).subscribe(([e, t]) => {
            const i = e !== n.eE.CANCELED && t === n.eE.CANCELED,
              s = e !== n.eE.ERROR && t === n.eE.ERROR,
              o = e !== n.eE.REJECTED && t === n.eE.REJECTED;
            m(i ? "canceled" : s ? "error" : !!o && "rejected");
          });
          return () => e.unsubscribe();
        }, []);
        const g = ee.h.create(!1);
        return (
          (0, r.A)(
            V.aj([i, p]).pipe(
              U.h(([e, t]) => null === e && !0 === t),
              G.q(1),
              $.b(() => h.pipe(B.h(!0), G.q(1))),
              $.b(() => j.T(Q.of(!0), Y.H(4e3).pipe(B.h(!1), G.q(1)))),
              J.O(!1),
              Z.b(K.wW(g))
            )
          ),
          s.createElement(
            te.F.Fragment,
            null,
            V.aj([e.pipe(X.U((e) => (null == e ? void 0 : e.proofitButtonLayout))), t, i, a, l, g]).pipe(
              X.U(([e, t, i, r, a, l]) =>
                e && t
                  ? s.createElement(F, {
                      style: { marginLeft: 12, marginTop: 4 },
                      onClick: () => {
                        m(!1),
                          (null == a ? void 0 : a.type) === o.a.Type.proofitRequest ||
                          (null == a ? void 0 : a.type) === o.a.Type.proofitReview
                            ? d()
                            : u();
                      },
                      showPopup: c,
                      onPopupClose: () => m(!1),
                      disabledInfo: i,
                      disableIntroTooltip:
                        r !== n.eE.IDLE ||
                        (null == a ? void 0 : a.type) === o.a.Type.proofitRequest ||
                        (null == a ? void 0 : a.type) === o.a.Type.proofitReview,
                      popupStyle: e.popupStyle,
                      isEmphasized: l
                    })
                  : null
              )
            )
          )
        );
      };
      var se = i(96601),
        oe = i(70836),
        ne = i(62369),
        re = i(31742),
        ae = i(26679),
        le = i(54001),
        ue = i(5987),
        de = i(12618);
      const pe = (e) => {
        const t = (e) => {
            let t = Math.round(e);
            return t > 100 ? (t = 100) : t < 0 && (t = 0), t;
          },
          i = e.isCompleted ? null : 60 === e.turnaroundTime ? "1 minute" : `${e.turnaroundTime} seconds`;
        return s.createElement(
          "div",
          { "data-grammarly-part": "proofit-in-progress-tab", style: e.style },
          s.createElement(
            "div",
            { className: de.proofitInProgressTab },
            s.createElement(
              "div",
              { className: de.proofitInProgressTabContent },
              s.createElement(
                "div",
                {
                  ...(0, le.Sh)(
                    de.proofitInProgressTabTitleContainer,
                    e.secondaryTitle ? de.proofitInProgressTabTitleContainerMultiple : null
                  )
                },
                s.createElement("span", { ...(0, le.Sh)(de.proofitInProgressTabTitle, de.proofitInProgressTabTitleMain) }, e.title),
                e.secondaryTitle
                  ? s.createElement(
                      "span",
                      { ...(0, le.Sh)(de.proofitInProgressTabTitle, de.proofitInProgressTabTitleSecondary) },
                      e.secondaryTitle
                    )
                  : null
              ),
              e.isCompleted
                ? s.createElement(ne.z, { onClick: e.onReview, kind: "success", size: "small" }, "Review")
                : t(e.progress) < 100
                ? s.createElement(
                    re.m,
                    {
                      ariaMenuId: "proofit-in-progress-tab-actions-menu",
                      ariaMenuLabel: "Proofit In-Progress Tab Actions Menu",
                      sections: [
                        {
                          items: [
                            e.allowCancellation
                              ? { icon: s.createElement(ae.n, { color: oe.Z.neutral50 }), label: "Cancel order", onClick: e.onCancel }
                              : {
                                  icon: s.createElement(ae.n, { color: oe.Z.neutral40 }),
                                  label: "Cancel order",
                                  disabled: !0,
                                  tooltip: i ? `Request cancellation is available only if the review takes more than ${i}.` : void 0
                                }
                          ]
                        }
                      ],
                      placement: "top-end",
                      onToggle: e.onToggleMenu
                    },
                    s.createElement(l.h, { kind: "transparent" }, s.createElement("div", { className: ue.proofitInProgressTabMenuIcon }))
                  )
                : null
            ),
            e.isCompleted || e.hideProgressBar
              ? null
              : s.createElement("div", { className: de.proofitInProgressTabCompletionBar, style: { width: `${t(e.progress)}%` } })
          )
        );
      };
      var he = i(18208);
      const ce = ({ layout: e, requestInfo: t, turnaroundTime: i, onCancel: o, onReview: r }) => {
        const [a, l] = s.useState(null),
          [u, d] = s.useState(null),
          [h, c] = s.useState(null),
          [m, g] = s.useState(null),
          _ = [n.eE.ACCEPTED, n.eE.IN_PROGRESS, n.eE.COMPLETED];
        return s.createElement(
          te.F.Fragment,
          null,
          V.aj([e.pipe(X.U((e) => (null == e ? void 0 : e.proofitInProgressTabLayout))), t, i]).pipe(
            Z.b(([e, t]) => {
              e && _.includes(t.status)
                ? e.onMount()
                : e && !_.includes(t.status) && (e.onUnmount(), l(null), c(null), u && clearTimeout(u), m && clearTimeout(m));
            }),
            X.U(([e, t, i]) => {
              var u;
              const { suggestionsMade: m, slicesChecked: f, totalSlices: v, status: y, secondsRemaining: b, activeReviewers: w } = t;
              if (e && _.includes(t.status)) {
                const t = y === n.eE.ACCEPTED,
                  _ = y === n.eE.IN_PROGRESS,
                  E = y === n.eE.COMPLETED;
                let I = 0;
                v > 0 && (I = (f / v) * 100);
                let C,
                  T = "",
                  R = !0;
                if (t) T = "Connecting you to experts...";
                else if (_) {
                  T = m > 0 ? `${m} ${he._6(m, "suggestion", "suggestions")} made so far...` : "Review in progress...";
                  const e = null != b ? b : i;
                  (R = e > 0),
                    (C = R
                      ? w > 0
                        ? `${w} ${he._6(w, "expert", "experts")} reviewing...`
                        : `About ${e} ${he._6(e, "second", "seconds")} remaining...`
                      : "Wrapping up...");
                } else T = `${m} ${he._6(m, "suggestion", "suggestions")}`;
                let P,
                  S,
                  W = "";
                return (
                  E
                    ? null === h
                      ? (l(!1), c(!0), g(setTimeout(() => c(!1), 7e3)))
                      : h && ((W = "Your email is ready!"), (P = "Suggestions are highlighted."), (S = () => c(!1)))
                    : null === a
                    ? (l(!0), d(setTimeout(() => l(!1), 7e3)))
                    : a &&
                      ((W = "We're reviewing your email now."),
                      (P = s.createElement(
                        s.Fragment,
                        null,
                        "This takes just a few moments.",
                        e.shouldLimitInteraction
                          ? s.createElement(
                              s.Fragment,
                              null,
                              s.createElement("br", null),
                              "This page is temporarily paused while the experts review your email."
                            )
                          : null
                      )),
                      (S = () => l(!1))),
                  s.createElement(
                    "div",
                    { style: { ...e.style } },
                    s.createElement(
                      p,
                      {
                        show: null !== (u = a || h) && void 0 !== u ? u : void 0,
                        title: W,
                        message: P,
                        onClose: S,
                        placement: "top",
                        headerIcon: h ? "notification-ok" : void 0
                      },
                      E
                        ? s.createElement(pe, { isCompleted: E, title: T, onReview: r })
                        : s.createElement(pe, {
                            isCompleted: E,
                            title: T,
                            secondaryTitle: C,
                            progress: I,
                            onCancel: o,
                            onToggleMenu: (e) => {
                              e && (null == S || S());
                            },
                            hideProgressBar: !R,
                            allowCancellation: !R,
                            turnaroundTime: i
                          })
                    )
                  )
                );
              }
              return null;
            })
          )
        );
      };
      var me = i(40066),
        ge = i.n(me),
        _e = i(58782),
        fe = i.n(_e);
      const ve = ({ originalText: e, width: t, height: i, top: o, left: n, zIndex: r, position: l }) =>
        s.createElement(
          "div",
          { "data-grammarly-part": "proofit-highlight", style: { width: t, height: i, top: o, left: n, zIndex: r, position: l } },
          s.createElement(
            a.u,
            {
              showDelay: 0,
              message: s.createElement("div", { className: fe().proofitHighlightTooltip }, e),
              disabled: 0 === e.trim().length
            },
            s.createElement("div", { className: ge().proofitHighlight })
          )
        );
      ve.defaultProps = { zIndex: "auto", position: "fixed" };
      const ye = ({ layout: e, requestInfo: t, assistantActiveView: i, isUsingSDUI: r }) =>
        s.createElement(
          te.F.Fragment,
          null,
          V.aj([e.pipe(X.U((e) => (null == e ? void 0 : e.proofitHighlightsLayout.style))), t, i, r]).pipe(
            X.U(([e, t, i, r]) =>
              (!0 !== r && (null == i ? void 0 : i.type) !== o.a.Type.proofitReview) || !e || t.status !== n.eE.REVIEWING
                ? null
                : t.highlights.map((t) =>
                    t.rects.map((i) =>
                      s.createElement(ve, {
                        key: `${t.originalText}-${t.range.start}-${t.range.end}`,
                        originalText: t.originalText,
                        top: i.top,
                        left: i.left,
                        height: i.height,
                        width: i.width,
                        position: e.position,
                        zIndex: e.zIndex
                      })
                    )
                  )
            )
          )
        );
      var be = i(66310);
      const we = ({ layout: e, requestInfo: t }) => {
        const i = [n.eE.ACCEPTED, n.eE.IN_PROGRESS, n.eE.COMPLETED];
        return s.createElement(
          te.F.Fragment,
          null,
          V.aj([
            e.pipe(X.U((e) => (null == e ? void 0 : e.proofitInProgressDraftItemLayout))).pipe(
              be.w((e) => {
                var t, i;
                return null !== (i = null === (t = null == e ? void 0 : e.clientRect) || void 0 === t ? void 0 : t.pipe(J.O(null))) &&
                  void 0 !== i
                  ? i
                  : Q.of(null);
              })
            ),
            e.pipe(
              X.U((e) => {
                var t;
                return null === (t = null == e ? void 0 : e.proofitInProgressDraftItemLayout) || void 0 === t ? void 0 : t.style;
              })
            ),
            t.view("status")
          ]).pipe(
            X.U(([e, t, o]) =>
              e && t && i.includes(o)
                ? s.createElement(
                    a.u,
                    {
                      showDelay: 1e3,
                      message: s.createElement(
                        s.Fragment,
                        null,
                        s.createElement("b", null, "We're reviewing your email now."),
                        s.createElement("br", null),
                        "This will take just a few moments. We've temporarily paused your draft while the experts work on it."
                      ),
                      withGrammarlyIcon: !0
                    },
                    s.createElement("div", {
                      "data-grammarly-part": "proofit-in-progress-draft-item-overlay",
                      style: { top: e.top, left: e.left, width: e.width, height: e.height, ...t }
                    })
                  )
                : null
            )
          )
        );
      };
    },
    96601: (e, t, i) => {
      i.d(t, { E: () => a });
      var s = i(27378),
        o = i(91831),
        n = i(44552),
        r = i(62447);
      class a {
        constructor(e, t, i) {
          (this._outerDoc = e),
            (this._proofitLayout = t),
            (this._proofitElements = i),
            (this._proofitButtonView = void 0),
            (this._proofitInProgressTabView = void 0),
            (this._proofitInProgressDraftItemOverlayView = void 0),
            (this._proofitHighlightsView = void 0);
        }
        inject(e) {
          (this._proofitButtonView = o.V.get({ monitorAs: "proofit-button" }).inject(
            n.EM.fromDocument(this._outerDoc, "grammarly-proofit-button"),
            (e) => {
              var t;
              (e.style.zIndex = "1"),
                null === (t = this._proofitLayout) || void 0 === t || t.proofitButtonLayout.sibling.insertAdjacentElement("afterend", e);
            },
            r.G7.showWhenLoaded(s.createElement(this._proofitElements.proofitButton, null))
          )),
            (this._proofitInProgressTabView = o.V.get({ monitorAs: "proofit-in-progress-tab" }).inject(
              n.EM.fromDocument(this._outerDoc, "grammarly-proofit-in-progress-tab"),
              (e) => {
                var t;
                null === (t = this._proofitLayout) || void 0 === t || t.proofitInProgressTabLayout.container.appendChild(e);
              },
              r.G7.showWhenLoaded(s.createElement(this._proofitElements.proofitInProgressTab, null))
            )),
            (this._proofitInProgressDraftItemOverlayView = o.V.get({ monitorAs: "proofit-in-progress-draft-item-overlay" }).inject(
              n.EM.fromDocument(this._outerDoc, "grammarly-proofit-in-progress-draft-item-overlay"),
              n.zs.appendChild(this._outerDoc.documentElement),
              r.G7.showWhenLoaded(s.createElement(this._proofitElements.proofitInProgressDraftItemOverlay, null)),
              { eventPropagationHandler: null == e ? void 0 : e.eventPropagationHandler }
            )),
            (this._proofitHighlightsView = o.V.get({ monitorAs: "proofit-highlights" }).inject(
              n.EM.fromDocument(this._outerDoc, "grammarly-proofit-highlights"),
              (e) => {
                var t, i;
                null === (i = null === (t = this._proofitLayout) || void 0 === t ? void 0 : t.proofitHighlightsLayout.container) ||
                  void 0 === i ||
                  i.appendChild(e);
              },
              r.G7.showWhenLoaded(s.createElement(this._proofitElements.proofitHighlights, null))
            ));
        }
        dispose() {
          var e, t, i, s;
          null === (e = this._proofitButtonView) || void 0 === e || e.dispose(),
            null === (t = this._proofitInProgressTabView) || void 0 === t || t.dispose(),
            null === (i = this._proofitInProgressDraftItemOverlayView) || void 0 === i || i.dispose(),
            null === (s = this._proofitHighlightsView) || void 0 === s || s.dispose();
        }
      }
    },
    81591: (e, t, i) => {
      i.d(t, { A: () => o });
      var s = i(23239);
      class o {
        constructor(e, t) {
          (this._viewHistory = []),
            (this._startupPlaceHolder = e),
            (this._activeView = s.h.create(this._startupPlaceHolder)),
            (this._defaultView = t);
        }
        get activeView() {
          return this._activeView.view();
        }
        get lastView() {
          return this._viewHistory[this._viewHistory.length - 1] || this._defaultView;
        }
        pushActiveView(e) {
          const t = this._activeView.get();
          e.type !== t.type && (t.type !== this._startupPlaceHolder.type && this._viewHistory.push(t), this._activeView.set(e));
        }
        popActiveView() {
          const e = this._viewHistory.pop() || this._defaultView;
          this._activeView.set(e);
        }
        replaceActiveView(e) {
          e.type !== this._activeView.get().type && this._activeView.set(e);
        }
      }
    },
    80860: (e, t, i) => {
      i.d(t, { Q: () => a });
      var s = i(27378),
        o = i(48015),
        n = i(78002);
      const r = (e) => {
          if (e.reason === n.rS.NO_FREE_TRIALS_LEFT) {
            const t = "No email reviews left this month";
            let i;
            if (e.meta.quotaResetDate) {
              const t = Intl.DateTimeFormat([], { month: "short", day: "numeric" }).format(new Date(Date.parse(e.meta.quotaResetDate)));
              i = `You will get ${n.SR} free reviews again next month (${t}). You can also use paid expert writing help in Grammarly's web editor anytime.`;
            } else
              i = `You will get ${n.SR} free reviews again next month. You can also use paid expert writing help in Grammarly's web editor anytime.`;
            return { title: t, message: i };
          }
          return e.reason === n.rS.NOT_ENOUGH_WORDS
            ? { message: `Your email must be at least ${n.fy} words (currently ${e.meta.wordsCount}).` }
            : e.reason === n.rS.TOO_MANY_WORDS
            ? { message: `Your email must be under ${n.Vw} words (currently ${e.meta.wordsCount}).` }
            : ((e) => {
                switch (e) {
                  case n.rS.NOT_AVAILABLE:
                    return { message: "Our experts are currently working on other text. Please try again later." };
                  case n.rS.NOT_AVAILABLE_QUOTA_ERROR:
                    return {
                      title: "Something went wrong",
                      message: "We couldn't determine how many requests you have left. Please try again later."
                    };
                  case n.rS.CONFLICTING_REQUEST:
                    return {
                      title: "Separate request in progress",
                      message: "You can submit this request once the experts are finished with the one you already submitted."
                    };
                  case n.rS.CHECKING_INITIAL_AVAILABILITY:
                    return { message: "Checking for available experts..." };
                  case n.rS.UNSUPPORTED_LANGUAGE:
                    return { message: "Our writing experts can only help with emails written in English." };
                  default:
                    (0, o.vE)(e);
                }
              })(e.reason);
        },
        a = ({ info: e, includeTitle: t }) => {
          const i = r(e);
          return s.createElement(
            s.Fragment,
            null,
            t
              ? s.createElement(
                  s.Fragment,
                  null,
                  i.title ? s.createElement("b", null, i.title) : s.createElement("b", null, "Get expert writing help"),
                  s.createElement("br", null)
                )
              : null,
            i.message
          );
        };
      a.defaultProps = { includeTitle: !1 };
    },
    157: (e) => {
      e.exports = { popoverMessageMainContent: "_Uk7Q", popoverMessageMainContentTitle: "cC_NJ", popoverMessageMainContentText: "PMeLZ" };
    },
    55446: (e) => {
      e.exports = { proofitButtonIcon: "_2_gky" };
    },
    40066: (e) => {
      e.exports = { proofitHighlight: "NhBeP" };
    },
    58782: (e) => {
      e.exports = { proofitHighlightTooltip: "tSle0" };
    },
    5987: (e) => {
      e.exports = { proofitInProgressTabMenuIcon: "tLtQX", spin: "rboIv" };
    },
    12618: (e) => {
      e.exports = {
        proofitInProgressTab: "tdDUP",
        proofitInProgressTabContent: "ce2CZ",
        proofitInProgressTabTitleContainer: "cxFB6",
        proofitInProgressTabTitle: "JvWll",
        proofitInProgressTabTitleContainerMultiple: "z4LLE",
        proofitInProgressTabTitleMain: "JJZ_J",
        fade: "_vabv",
        proofitInProgressTabTitleSecondary: "BhhB7",
        proofitInProgressTabCompletionBar: "fRd8e"
      };
    }
  }
]);
