(self.webpackChunk = self.webpackChunk || []).push([
  [4628],
  {
    35111: (e, t, a) => {
      var o = a(91980),
        n = "chrome-extension://__MSG_@@extension_id__/",
        r = "moz-extension://__MSG_@@extension_id__/",
        l = "safari-web-extension://__MSG_@@extension_id__/",
        c = self.GR_RESOURCE_ROOT || n,
        i = self.GR_RESOURCE_ROOT || r,
        m = self.GR_RESOURCE_ROOT || l;
      e.exports = {
        __css: o.toString().replace(new RegExp(n, "g"), c).replace(new RegExp(r, "g"), i).replace(new RegExp(l, "g"), m),
        ...o.locals
      };
    },
    96092: (e, t, a) => {
      a.r(t), a.d(t, { GdocsFeedbackUI: () => c });
      var o = a(27378),
        n = a(22484),
        r = a(75105),
        l = a(60561);
      class c extends o.Component {
        constructor() {
          super(...arguments),
            (this._close = () => this.props.close()),
            (this._onSubmitFeedback = (e) => {
              n.J.feedbackSentButtonClick(e.text, "gdocs", e.score);
            });
        }
        render() {
          return o.createElement(r.X, {
            mainContent: o.createElement(l.q, {
              title: o.createElement("span", null, "How do you like ", o.createElement("br", null), " Grammarly for Google Docs?"),
              onClose: this._close,
              onSubmit: this._onSubmitFeedback,
              style: { height: 528 },
              withScore: !0,
              experimentClient: this.props.experimentClient
            }),
            onClose: this._close
          });
        }
      }
    },
    68610: (e, t, a) => {
      a.d(t, { J: () => s });
      var o = a(57050),
        n = a(27378),
        r = a(90845),
        l = a(60797),
        c = a(2834),
        i = a(54001),
        m = a(66206);
      const s = ({
        onChange: e,
        labelId: t,
        className: a,
        checkboxClassName: s,
        labelClassName: d,
        checked: u,
        children: b,
        disabled: f,
        useDS: h,
        dataGrammarlyPart: k = "ui-kit-checkbox",
        tabIndex: p = 0,
        onMount: v = o.Q1
      }) => {
        const [g, x] = n.useState(null != u && u);
        n.useEffect(() => {
          x(Boolean(u));
        }, [u]);
        const S = (t) => {
            t.preventDefault(), t.stopPropagation(), x(!g), null == e || e(!g);
          },
          { ref: E, onMount: F } = r.P.useElWatcher();
        return (
          n.useEffect(() => {
            const e = E.pipe(l.oA, c.b(v)).subscribe();
            return () => e.unsubscribe();
          }, []),
          n.createElement(
            "div",
            { "data-grammarly-part": k, ...(0, i.Sh)(m.checkboxContainer, a) },
            n.createElement(
              "div",
              {
                ...(0, i.Sh)(m.checkbox, s, g ? m.checkboxChecked : null, h ? m.checkboxDS : null),
                role: "checkbox",
                "aria-checked": g,
                tabIndex: p,
                "aria-labelledby": t,
                onKeyDown: (e) => {
                  " " === e.key && S(e);
                },
                onClick: f ? o.Q1 : S,
                ref: F
              },
              g ? n.createElement("div", { className: m.checkboxCheckmark }) : null
            ),
            n.createElement("label", { id: t, onClick: S, className: d }, b)
          )
        );
      };
    },
    8096: (e, t, a) => {
      a.d(t, { z: () => m });
      var o = a(27378),
        n = a(31542);
      const r = ({ children: e, style: t, dataGrammarlyPart: a = "ui-kit-iframe", ...r }) => {
        const [l, c] = o.useState(null),
          i = o.useCallback((e) => {
            var t, a;
            let o = null;
            "contentDocument" in e.target &&
              (o = null !== (a = null === (t = e.target.contentDocument) || void 0 === t ? void 0 : t.body) && void 0 !== a ? a : null),
              c(o),
              o && ((o.style.margin = "0"), (o.style.height = "100vh"), (o.style.overflowY = "hidden"));
          }, []);
        return o.createElement(
          "iframe",
          { ...r, style: { border: "none", ...t }, onLoad: i, srcDoc: "<html><body></body></html>", "data-grammarly-part": a },
          l && (0, n.createPortal)(e, l)
        );
      };
      var l = a(29927),
        c = a(35111),
        i = a.n(c);
      const m = ({ placeholder: e, onChange: t, ariaLabel: a, iframeTitle: n, className: c }) => {
        const [m, s] = o.useState("");
        return (
          o.useEffect(() => {
            t(m);
          }, [m]),
          o.createElement(
            r,
            { dataGrammarlyPart: "ui-kit-textbox", className: c, style: { width: "100%", height: "100%" }, title: n },
            o.createElement(l.b, null, i().__css),
            o.createElement("div", {
              role: "textbox",
              className: i().textBox,
              contentEditable: !0,
              onInput: (e) => s(e.target.innerText),
              "data-placeholder": e,
              "aria-placeholder": e,
              "aria-label": a
            })
          )
        );
      };
    },
    60561: (e, t, a) => {
      a.d(t, { q: () => B });
      var o = a(27378),
        n = a(9205),
        r = a(54001),
        l = a(62369),
        c = a(13311);
      const i = ({ fixSubmitButtonOverflowBottomPadding: e, className: t, ...a }) =>
          o.createElement(
            o.Fragment,
            null,
            o.createElement(l.z, { ...a, className: null != t ? t : c.feedbackFormSubmitButton }, a.children),
            o.createElement(m, { isEnabled: e })
          ),
        m = (e) =>
          e.isEnabled
            ? o.createElement(
                "div",
                { className: c.feedbackFormSubmitButtonFixOverflowBottomPadding },
                o.createElement("div", { className: c.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
              )
            : null,
        s = (e) =>
          o.createElement(
            "div",
            {
              "data-grammarly-part": "surveys-feedback-form-thank-you",
              ...(0, r.Sh)(c.feedbackFormContainer, c.feedbackFormContainerAlignCenter)
            },
            o.createElement(
              "div",
              { className: c.feedbackFormSuccessMessageTextContainer },
              o.createElement("div", { className: c.feedbackFormSuccessMessageIcon }),
              o.createElement("div", { className: c.feedbackFormSuccessMessageTitle }, "Thank you!"),
              o.createElement("div", { className: c.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
            ),
            o.createElement(i, { type: "button", kind: "success", onClick: e.onClose }, "Done")
          );
      var d = a(8096),
        u = a(48015),
        b = a(25985);
      const f = ({ options: e, onChange: t = () => null, ariaLabel: a, className: n }) => {
        const l = [],
          [c, i] = o.useState(null);
        o.useEffect(() => {
          var a;
          null !== c && (null === (a = l[c]) || void 0 === a || a.focus()), t(null !== c ? e[c].value : null);
        }, [c]);
        const m = null !== c ? e[c] : null;
        return o.createElement(
          "div",
          { "data-grammarly-part": "ui-kit-radio-group", className: n },
          o.createElement(
            "div",
            {
              className: b.radioGroup,
              role: "radiogroup",
              "aria-label": a,
              onKeyDown: (t) => {
                if (" " !== t.key || m) {
                  if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    i(((c || 0) + 1) % e.length);
                  } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    const a = (c || 0) - 1;
                    i(a < 0 ? e.length - 1 : a);
                  }
                } else t.preventDefault(), t.stopPropagation(), i(0);
              }
            },
            e.map((e, t) => {
              const a = (null == m ? void 0 : m.value) === e.value,
                n = 0 === t;
              return o.createElement(
                "div",
                {
                  key: e.value,
                  ...(0, r.Sh)(b.radioGroupOption, a ? b.radioGroupOptionSelected : null),
                  role: "radio",
                  tabIndex: a || (n && !m) ? 0 : -1,
                  "aria-checked": a,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), i(t);
                  },
                  ref: (e) => l.push(e)
                },
                e.render()
              );
            })
          )
        );
      };
      var h;
      !(function (e) {
        (e.bad = "bad"), (e.ok = "ok"), (e.good = "good");
      })(h || (h = {}));
      var k = a(73610);
      const p = (e) => {
        const t = [h.bad, h.ok, h.good];
        return e.isEnabled
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(f, {
                ariaLabel: "Feedback Score",
                options: t.map((e) => ({
                  value: e,
                  render: () =>
                    o.createElement(
                      "div",
                      { className: k.feedbackFormOption },
                      o.createElement("div", { ...(0, r.Sh)(k.feedbackFormOptionIcon, v(e)) }),
                      o.createElement(
                        "div",
                        null,
                        (function (e) {
                          switch (e) {
                            case h.bad:
                              return "I dislike it";
                            case h.ok:
                              return "It’s OK";
                            case h.good:
                              return "I like it";
                            default:
                              (0, u.vE)(e);
                          }
                        })(e)
                      )
                    )
                })),
                onChange: e.onChange,
                ...(0, r.Sh)(c.feedbackFormScore, e.compactDisplay && c.compact)
              }),
              !e.hideTextBoxTitle && o.createElement("div", { className: c.feedbackFormTextBoxTitle }, "Anything we can improve?")
            )
          : null;
      };
      function v(e) {
        switch (e) {
          case h.bad:
            return k.feedbackFormOptionIconDisheartening;
          case h.ok:
            return k.feedbackFormOptionIconNeutral;
          case h.good:
            return k.feedbackFormOptionIconSmiling;
          default:
            (0, u.vE)(e);
        }
      }
      const g = (e) => (e.isEnabled ? o.createElement("div", { className: c.feedbackFormLogo }) : null),
        x = (e) => {
          var t;
          if (!e.isEnabled) return null;
          const a =
            null !== (t = e.title) && void 0 !== t
              ? t
              : o.createElement("span", null, "How do you like ", o.createElement("br", null), " Grammarly?");
          return o.createElement("h3", { ...(0, r.Sh)(c.feedbackFormTitle, e.isCompact && c.compact) }, a);
        };
      var S = a(68610);
      const E = (e) =>
          e.domain
            ? o.createElement(
                o.Fragment,
                null,
                e.withHelpText &&
                  o.createElement(
                    "div",
                    { className: c.feedbackFormShareDomainTitle },
                    "Help improve Grammarly by sharing the domain you’re on:"
                  ),
                o.createElement(
                  S.J,
                  { labelId: "feedback-form-share-domain-checkbox", onChange: e.onChange, className: c.feedbackFormShareDomainCheckbox },
                  "Include the domain ",
                  o.createElement("b", null, e.domain),
                  " with my feedback"
                )
              )
            : null,
        F = (e) => {
          var t, a, n;
          const [l, m] = o.useState(null),
            [s, u] = o.useState(""),
            [b, f] = o.useState(!1);
          return o.createElement(
            "form",
            {
              "data-grammarly-part": "surveys-feedback-form-fields",
              ...(0, r.Sh)(c.feedbackFormContainer, "center" === e.align && c.feedbackFormContainerAlignCenter)
            },
            o.createElement(
              "div",
              { className: c.feedbackFormFields },
              o.createElement(g, { isEnabled: !e.hideLogo }),
              o.createElement(x, {
                isEnabled: !e.hideTitle,
                title: e.title,
                isCompact: null !== (t = e.compactDisplay) && void 0 !== t && t
              }),
              o.createElement(p, {
                isEnabled: e.withScore,
                compactDisplay: e.compactDisplay,
                hideTextBoxTitle: e.hideTextBoxTitle,
                onChange: m
              }),
              o.createElement(d.z, {
                onChange: u,
                placeholder: null !== (a = e.placeholderText) && void 0 !== a ? a : "Your thoughts here",
                ariaLabel: "Feedback Text",
                iframeTitle: "Feedback text field",
                ...(0, r.Sh)(c.feedbackFormTextBox, e.compactDisplay && c.compact)
              }),
              o.createElement(E, { domain: e.domain, withHelpText: !e.hideDomainHelpText, onChange: f })
            ),
            o.createElement(
              i,
              {
                type: "submit",
                kind: null !== (n = e.submitButtonKind) && void 0 !== n ? n : "success",
                disabled: e.withScore ? !l : !s,
                fixSubmitButtonOverflowBottomPadding: e.fixSubmitButtonOverflowBottomPadding,
                onClick: (t) => {
                  t.preventDefault();
                  const a = b ? e.domain : void 0;
                  e.withScore && l ? e.onSubmit({ score: l, text: s, domain: a }) : !e.withScore && s && e.onSubmit({ text: s, domain: a });
                }
              },
              "Submit"
            )
          );
        };
      var y = a(86061);
      const C = ({
          hideLogo: e = !1,
          align: t = "center",
          fixSubmitButtonOverflowBottomPadding: a = !1,
          showPostSubmitScreen: n = !0,
          ...r
        }) => {
          const [l, c] = o.useState(!1),
            i = l && n;
          return o.createElement(
            "div",
            {
              style: r.style,
              "data-grammarly-part": "surveys-feedback-form",
              role: "region",
              "aria-label": "Provide feedback",
              "aria-live": "polite"
            },
            i
              ? o.createElement(s, { fixSubmitButtonOverflowBottomPadding: a, onClose: r.onClose })
              : o.createElement(F, {
                  ...r,
                  hideLogo: e,
                  align: t,
                  fixSubmitButtonOverflowBottomPadding: a,
                  onSubmit: (e) => {
                    r.withScore ? ((0, y.n8)(e), r.onSubmit(e)) : ((0, y.TY)(e), r.onSubmit(e)), c(!0);
                  }
                })
          );
        },
        w = ({ hideLogo: e = !1, align: t = "center", fixSubmitButtonOverflowBottomPadding: a = !1, ...n }) => {
          var i;
          const m = [h.bad, h.ok, h.good],
            [s, u] = o.useState(null),
            [b, p] = o.useState(""),
            [v, g] = o.useState(!1),
            [x, E] = o.useState(!1);
          let F;
          return (
            (F =
              x && !1 !== n.showPostSubmitScreen
                ? o.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-thank-you",
                      ...(0, r.Sh)(c.feedbackFormContainer, c.feedbackFormContainerAlignCenter)
                    },
                    o.createElement(
                      "div",
                      { className: c.feedbackFormSuccessMessageTextContainer },
                      o.createElement("div", { className: c.feedbackFormSuccessMessageIcon }),
                      o.createElement("div", { className: c.feedbackFormSuccessMessageTitle }, "Thank you!"),
                      o.createElement("div", { className: c.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
                    ),
                    o.createElement(
                      l.z,
                      { className: c.feedbackFormSubmitButton, kind: "success", type: "submit", onClick: n.onClose },
                      "Done"
                    ),
                    a
                      ? o.createElement(
                          "div",
                          { className: c.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          o.createElement("div", { className: c.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )
                : o.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-fields",
                      ...(0, r.Sh)(c.feedbackFormContainer, "center" === t ? c.feedbackFormContainerAlignCenter : null)
                    },
                    o.createElement(
                      "div",
                      { className: c.feedbackFormFields },
                      e ? null : o.createElement("div", { className: c.feedbackFormLogo }),
                      n.hideTitle
                        ? null
                        : o.createElement(
                            "div",
                            { ...(0, r.Sh)(c.feedbackFormTitle, n.compactDisplay ? c.compact : null) },
                            n.title || o.createElement("span", null, "How do you like ", o.createElement("br", null), " Grammarly?")
                          ),
                      n.withScore
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(f, {
                              ariaLabel: "Feedback Score",
                              options: m.map((e) => ({
                                value: e,
                                render() {
                                  let t, a;
                                  return (
                                    e === h.bad
                                      ? ((t = k.feedbackFormOptionIconDisheartening), (a = "I dislike it"))
                                      : e === h.ok
                                      ? ((t = k.feedbackFormOptionIconNeutral), (a = "It’s OK"))
                                      : ((t = t = k.feedbackFormOptionIconSmiling), (a = "I like it")),
                                    o.createElement(
                                      "div",
                                      { className: k.feedbackFormOption },
                                      o.createElement("div", { ...(0, r.Sh)(k.feedbackFormOptionIcon, t) }),
                                      o.createElement("div", null, a)
                                    )
                                  );
                                }
                              })),
                              onChange: u,
                              ...(0, r.Sh)(c.feedbackFormScore, n.compactDisplay ? c.compact : null)
                            }),
                            n.hideTextBoxTitle
                              ? null
                              : o.createElement("div", { className: c.feedbackFormTextBoxTitle }, "Anything we can improve?")
                          )
                        : null,
                      o.createElement(d.z, {
                        onChange: p,
                        placeholder: n.placeholderText || "Your thoughts here",
                        ariaLabel: "Feedback Text",
                        ...(0, r.Sh)(c.feedbackFormTextBox, n.compactDisplay ? c.compact : null)
                      }),
                      n.domain
                        ? o.createElement(
                            o.Fragment,
                            null,
                            n.hideDomainHelpText
                              ? null
                              : o.createElement(
                                  "div",
                                  { className: c.feedbackFormShareDomainTitle },
                                  "Help improve Grammarly by sharing the domain you’re on:"
                                ),
                            o.createElement(
                              S.J,
                              { labelId: "feedback-form-share-domain-checkbox", onChange: g, className: c.feedbackFormShareDomainCheckbox },
                              "Include the domain ",
                              o.createElement("b", null, n.domain),
                              " with my feedback"
                            )
                          )
                        : null
                    ),
                    o.createElement(
                      l.z,
                      {
                        className: c.feedbackFormSubmitButton,
                        kind: null !== (i = n.submitButtonKind) && void 0 !== i ? i : "success",
                        type: "submit",
                        disabled: n.withScore ? !s : !b,
                        onClick: () => {
                          var e, t;
                          n.withScore && s
                            ? (null === (e = n.onSubmit) || void 0 === e || e.call(n, { score: s, text: b, domain: v ? n.domain : void 0 }),
                              E(!0))
                            : !n.withScore &&
                              b &&
                              (null === (t = n.onSubmit) || void 0 === t || t.call(n, { text: b, domain: v ? n.domain : void 0 }), E(!0));
                        }
                      },
                      "Submit"
                    ),
                    a
                      ? o.createElement(
                          "div",
                          { className: c.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          o.createElement("div", { className: c.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )),
            o.createElement(
              "div",
              { style: n.style, "data-grammarly-part": "surveys-feedback-form", role: "region", "aria-label": "Provide feedback" },
              F
            )
          );
        },
        B = ({ experimentClient: e, ...t }) =>
          e.isGateEnabled(n.K.ExtensionA11yKeyboardNavigation) ? o.createElement(C, { ...t }) : o.createElement(w, { ...t });
    },
    86061: (e, t, a) => {
      function o(e) {
        return "score" in e;
      }
      function n(e) {
        if (!o(e)) throw new Error("Received unexpected feedback form data without score");
      }
      function r(e) {
        if (o(e)) throw new Error("Received unexpected feedback form data with score");
      }
      a.d(t, { TY: () => r, dK: () => o, n8: () => n });
    },
    91980: (e, t, a) => {
      var o = a(54933),
        n = a(93476)(o);
      n.push([
        e.id,
        "._z3YOv-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._z3YOv-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",
        ""
      ]),
        (n.locals = { textBox: "_z3YOv-textBox" }),
        (e.exports = n);
    },
    93476: (e) => {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var a = "",
                o = void 0 !== t[5];
              return (
                t[4] && (a += "@supports (".concat(t[4], ") {")),
                t[2] && (a += "@media ".concat(t[2], " {")),
                o && (a += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                (a += e(t)),
                o && (a += "}"),
                t[2] && (a += "}"),
                t[4] && (a += "}"),
                a
              );
            }).join("");
          }),
          (t.i = function (e, a, o, n, r) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var l = {};
            if (o)
              for (var c = 0; c < this.length; c++) {
                var i = this[c][0];
                null != i && (l[i] = !0);
              }
            for (var m = 0; m < e.length; m++) {
              var s = [].concat(e[m]);
              (o && l[s[0]]) ||
                (void 0 !== r &&
                  (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")),
                  (s[5] = r)),
                a && (s[2] ? ((s[1] = "@media ".concat(s[2], " {").concat(s[1], "}")), (s[2] = a)) : (s[2] = a)),
                n && (s[4] ? ((s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}")), (s[4] = n)) : (s[4] = "".concat(n))),
                t.push(s));
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
    },
    66206: (e) => {
      e.exports = {
        checkboxContainer: "Te37e",
        checkbox: "mFHkX",
        checkboxDS: "DdH2q",
        checkboxChecked: "JhHnz",
        checkboxCheckmark: "zShXt",
        spin: "tww6q"
      };
    },
    25985: (e) => {
      e.exports = { radioGroup: "KAzfW", radioGroupOption: "WkjDU", radioGroupOptionSelected: "onilo" };
    },
    13311: (e) => {
      e.exports = {
        feedbackFormContainer: "kjElf",
        feedbackFormContainerAlignCenter: "hkEx2",
        feedbackFormFields: "Ua5wJ",
        feedbackFormTitle: "GnQ_a",
        feedbackFormTextBoxTitle: "kWEW0",
        feedbackFormLogo: "phQGV",
        compact: "b7yYp",
        feedbackFormScore: "ZOSRK",
        feedbackFormTextBox: "l8New",
        feedbackFormShareDomainTitle: "Qbnj_",
        feedbackFormShareDomainCheckbox: "VBCx1",
        feedbackFormSubmitButton: "tYYGU",
        feedbackFormSubmitButtonFixOverflowBottomPadding: "Opd8X",
        feedbackFormSubmitButtonFixOverflowBottomPaddingChild: "QKLT7",
        feedbackFormSuccessMessageTextContainer: "ARBzt",
        feedbackFormSuccessMessageIcon: "kJIzg",
        feedbackFormSuccessMessageTitle: "iXQnf",
        feedbackFormSuccessMessageSubtitle: "Ydufo",
        spin: "Vv6WG"
      };
    },
    73610: (e) => {
      e.exports = {
        feedbackFormOption: "sp8vS",
        feedbackFormOptionIcon: "eH6DL",
        feedbackFormOptionIconDisheartening: "DhaWh",
        feedbackFormOptionIconNeutral: "BS_8d",
        feedbackFormOptionIconSmiling: "dUZNd",
        spin: "uouSO"
      };
    }
  }
]);
