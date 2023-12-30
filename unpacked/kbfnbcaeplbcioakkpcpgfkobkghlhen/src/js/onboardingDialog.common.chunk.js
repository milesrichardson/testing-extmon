(self.webpackChunk = self.webpackChunk || []).push([
  [8391],
  {
    92247: (e, t, n) => {
      n.d(t, { X: () => d });
      var i = n(27378),
        o = n(21899),
        s = n(54001),
        r = n(55047),
        a = n.n(r);
      const l = ({ isActive: e }) => i.createElement("div", { ...(0, s.Sh)(a().progressDot, e && a().active) }),
        c = ({ stepIndex: e, totalSteps: t }) =>
          i.createElement(
            "div",
            { className: a().progressDotsContainer },
            [...Array(t).keys()].map((t) => i.createElement(l, { key: t, isActive: t === e })),
            `${e + 1}/${t}`
          ),
        d = ({ title: e, skipText: t, nextText: n, index: s, totalSteps: r, onSkipClick: l, onNextClick: d }) =>
          i.createElement(
            "div",
            { className: a().newContent },
            i.createElement("h3", { className: a().newHeader }, e),
            i.createElement(
              "div",
              { className: a().buttonRow },
              i.createElement(c, { stepIndex: s, totalSteps: r }),
              i.createElement(
                "div",
                null,
                t && i.createElement(o.C9, { className: a().buttonMinWidth, clickHandler: l }, t),
                i.createElement(o.KM, { className: a().buttonMinWidth, clickHandler: d }, n)
              )
            )
          );
    },
    21899: (e, t, n) => {
      n.d(t, { C9: () => d, KM: () => c, PZ: () => h });
      var i = n(72154),
        o = n(27378),
        s = n(96309),
        r = n(54001),
        a = n(17330),
        l = n.n(a);
      const c = (e) =>
          o.createElement(
            i.M,
            { clickHandler: e.clickHandler },
            o.createElement("button", { ...(0, r.Sh)(l().buttonPrimary, e.className) }, e.children)
          ),
        d = (e) =>
          o.createElement(
            i.M,
            { clickHandler: e.clickHandler },
            o.createElement("button", { ...(0, r.Sh)(l().buttonTertiary, e.className) }, e.children)
          ),
        h = (e) =>
          o.createElement(
            i.M,
            { dataGrammarlyPart: "btnCloseOnboarding", clickHandler: e.clickHandler },
            o.createElement(s.P, { color: "white" })
          );
    },
    2407: (e, t, n) => {
      n.r(t), n.d(t, { OnboardingDialog: () => A });
      var i = n(78625),
        o = n(60865),
        s = n(43124),
        r = n(27378),
        a = n(41572),
        l = n(91831),
        c = n(44552),
        d = n(62447),
        h = n(23239),
        p = n(42356),
        m = n(6294),
        g = n(20641),
        u = n(22484),
        k = n(92247),
        v = n(21899),
        C = n(54001),
        w = n(55047),
        b = n.n(w);
      const E = ({ steps: e, onCloseClick: t, onFinishClick: n, onNextClick: i, onShow: o, onSkipClick: s }) => {
        const [a, l] = r.useState(0),
          c = a >= e.length - 1;
        r.useEffect(() => {
          o();
        }, []);
        return r.createElement(
          "div",
          { ...(0, C.Sh)(b().onboardingTour) },
          r.createElement("div", { className: b().close }, r.createElement(v.PZ, { clickHandler: () => t() })),
          e.map(
            (t, n) =>
              !!t.video &&
              n <= a + 1 &&
              r.createElement(
                "video",
                {
                  key: t.id,
                  ...(0, C.Sh)(b().newVideo, n === a && b().show),
                  autoPlay: !0,
                  loop: a < e.length - 1,
                  muted: !0,
                  height: 720,
                  width: 392,
                  preload: "auto",
                  poster: t.poster
                },
                r.createElement("source", { type: "video/mp4", src: t.video })
              )
          ),
          r.createElement(k.X, {
            title: e[a].title,
            skipText: c ? "" : "Skip tutorial",
            nextText: c ? "Finish" : "Next",
            index: a,
            totalSteps: e.length,
            onSkipClick: () => {
              s(a), l(e.length - 1);
            },
            onNextClick: c
              ? n
              : () => {
                  i(a), l((e) => e + 1);
                }
          })
        );
      };
      var y;
      !(function (e) {
        (e.inlineSuggestions = "inlineSuggestions"), (e.clickToAccept = "clickToAccept"), (e.happyWriting = "happyWriting");
      })(y || (y = {}));
      const _ = m.Rd().appConfig.url.assets.onboardingTour,
        f = [
          {
            id: y.inlineSuggestions,
            title: "To view inline suggestions, hover over the underlined text. Click the suggestion to accept it.",
            poster: _.inlineSuggestionsPreviewImage,
            video: _.inlineSuggestionsAnimation
          },
          {
            id: y.clickToAccept,
            title: "Grammarly keeps count of all your suggestions. To review them, click the number. Click the suggestion to accept it.",
            video: _.clickToAcceptAnimation
          },
          { id: y.happyWriting, title: "All right, you’re ready to go. Happy writing!", video: _.happyWritingAnimation }
        ],
        S = ({ onClose: e }) =>
          r.createElement(E, {
            steps: f,
            onCloseClick: () => {
              u.J.onboardingOverlayCloseButtonClick("dialog"), e();
            },
            onShow: () => {
              u.J.onboardingOverlayShow(), (0, g.Tb)().onboardingTutorialShow();
            },
            onNextClick: (e) => {
              u.J.onboardingOnboardingStepOverlayShow(f[e + 1].id);
            },
            onSkipClick: (e) => {
              u.J.onboardingSkipButtonClick("onboardingTour", f[e].id);
            },
            onFinishClick: () => {
              u.J.onboardingOverlayLetsWriteButtonClick("end-step"), e();
            }
          });
      var x = n(56913),
        N = n(33453);
      class T extends r.Component {
        constructor() {
          super(...arguments),
            (this._containerRef = null),
            (this.state = { hide: !1 }),
            (this.onClose = (e) => {
              e && e.stopPropagation(),
                this.setState({ hide: !0 }),
                this._containerRef && this._containerRef.addEventListener("animationend", () => this.props.onClose());
            }),
            (this.setOnboardingRef = (e) => {
              e && !this._containerRef
                ? ((this._containerRef = e), this._containerRef.addEventListener("click", this.preventClick))
                : !e &&
                  this._containerRef &&
                  (this._containerRef.removeEventListener("click", this.preventClick), (this._containerRef = null));
            }),
            (this.preventClick = (e) => {
              e.stopPropagation(), e.stopImmediatePropagation();
            });
        }
        componentDidMount() {
          this._sub = this.props.shouldClose.subscribe((e) => {
            e && this.onClose();
          });
        }
        componentWillUnmount() {
          var e;
          null === (e = this._sub) || void 0 === e || e.unsubscribe();
        }
        render() {
          const e = (0, p.cs)({ [N.onboardingDialog]: !0, [N.hide]: this.state.hide, [N.windows]: (0, x.ED)() }),
            t = (0, p.cs)({ [N.content]: !0, [N.newContent]: !0 });
          return r.createElement(
            "div",
            { ref: this.setOnboardingRef, className: e, "data-grammarly-part": "onboarding" },
            r.createElement(
              "div",
              { className: t },
              r.createElement(
                "div",
                { className: (0, p.cs)({ [N.viewContainer]: !0, [N.experiment]: !0 }) },
                r.createElement(S, { onClose: this.onClose })
              )
            )
          );
        }
      }
      class A extends (0, s.qH)(i.u) {
        constructor({ doc: e }) {
          super(),
            (this.view = null),
            (this.shouldClose = h.h.create(!1)),
            (this.onKey = (e) => {
              (0, s.rw)(e) === s.DG && this.view && this.shouldClose.set(!0);
            }),
            (this.onClose = () => {
              this.emit("hide"), this.remove();
            }),
            (this.component = () => (
              r.useEffect(
                () => (
                  (0, o.o)(this.doc.defaultView, "keydown", this.onKey, !1), () => (0, o.E)(this.doc.defaultView, "keydown", this.onKey, !1)
                ),
                []
              ),
              r.createElement(
                a.L,
                { chunkName: "onboardingDialog" },
                r.createElement(T, { onClose: this.onClose, shouldClose: this.shouldClose })
              )
            )),
            (this.doc = e),
            this.createView();
        }
        createView() {
          if (!this.view) {
            const e = this.component;
            this.view = l.V.get({ monitorAs: "onboarding" }).inject(
              c.EM.fromDocument(this.doc, "grammarly-onboarding"),
              c.zs.appendChild(this.doc.documentElement),
              d.G7.showWhenLoaded(r.createElement(e, null))
            );
          }
        }
        remove() {
          this.view && (this.view.dispose(), (this.view = null));
        }
      }
    },
    17330: (e) => {
      e.exports = { buttonPrimary: "GEQXE", buttonTertiary: "GlCUL" };
    },
    55047: (e) => {
      e.exports = {
        onboardingTour: "QxTji",
        close: "wANJy",
        video: "snJSq",
        show: "SpJfM",
        content: "fyyhj",
        header: "AbJ4U",
        text: "fC07E",
        footer: "ej2Q4",
        stepIndicator: "JBITr",
        white: "esQWz",
        newContent: "KnbK_",
        buttonRow: "wdInL",
        newVideo: "PcgZU",
        progressDotsContainer: "HNoF0",
        progressDot: "tUjkt",
        active: "Urkd9",
        newHeader: "onc2E",
        buttonMinWidth: "IIhOS"
      };
    },
    33453: (e) => {
      e.exports = {
        onboardingDialog: "C34_r",
        gr__onboarding_dialog_appear: "e5a0d",
        viewContainer: "m_w3l",
        view: "U4cvA",
        windows: "Qrrya",
        footer: "hQpsA",
        hide: "KZPo0",
        gr__onboarding_dialog_disappear: "VqUeC",
        content: "Dy2NW",
        gr__centered_onboarding_dialog_content_disappear: "EWOkF",
        gr__centered_onboarding_dialog_content_appear: "NKUJu",
        oldContent: "rkDPB",
        newContent: "vXNfQ",
        experiment: "lTA8O"
      };
    }
  }
]);
