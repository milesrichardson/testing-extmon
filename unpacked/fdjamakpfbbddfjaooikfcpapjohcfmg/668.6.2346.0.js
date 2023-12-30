"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [668],
  {
    619733: (e, t, a) => {
      a.d(t, { N: () => r });
      var l = a(696832),
        n = a(383849),
        s = a.n(n);
      const r = ({ disableHover: e = !1, ...t }) => {
        const [a, n] = l.useState(!1),
          { children: [r, ...o] = [] } = t;
        return l.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
          r,
          t.enabled && l.createElement("span", { className: s()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, o)
        );
      };
    },
    280148: (e, t, a) => {
      a.d(t, { j: () => g });
      var l = a(696832),
        n = a(651154),
        s = a(307973),
        r = a(535473),
        o = a(53830),
        i = a(400711),
        p = a(820283),
        d = a(201389),
        u = a(59896),
        c = a(441217);
      const h = (e, t) => (0, n.Z)(e, t, new Date("1900-01-01")),
        m = (e, t, a) => (l) => (n) => {
          if ("" === n.target.value) return void a("");
          const r = parseInt(n.target.value, 10),
            o = h(e, t),
            i = isNaN(o.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : o;
          a((0, s.Z)(l(i, r), t));
        },
        b = (e, t) => {
          var a;
          return null != (a = e.find(({ value: e }) => t === e)) ? a : e[0];
        },
        f = "webapp_id_form_field_placeholder_day",
        v = "webapp_id_form_field_placeholder_month",
        _ = "webapp_id_form_field_placeholder_year",
        E = (e) => ({ label: e, value: "" }),
        g = ({
          yearsRange: e = [-120, 0],
          sortYears: t = "ASC",
          hideDay: a = !1,
          value: n,
          label: s,
          dateFormat: g,
          monthLabelFormatter: y,
          onChange: C,
          allowEmpty: S = !1,
          locale: Z
        }) => {
          const { translate: w } = (0, d.Z)(),
            L = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                n = Math.abs(t - e) + 1,
                s = new Array(n).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? s : s.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            N = ((R = (e) => y(e)), new Array(12).fill(null).map((e, t) => ({ label: R((0, i.Z)(new Date(), t)), value: t })));
          var R;
          const I = m(n, g, C),
            D = I(r.Z),
            A = I(o.Z),
            F = I(i.Z),
            x = h(n, g),
            k =
              ((O = (0, p.Z)("" === n ? 31 : x)),
              new Array(O || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var O;
          S && (L.unshift(E(w(_))), N.unshift(E(w(v))), k.unshift(E(w(f))));
          const T = b(L, x.getFullYear()),
            B = b(N, x.getMonth()),
            M = b(k, x.getDate()),
            H = Z || new Intl.NumberFormat().resolvedOptions().locale,
            V = new Date(Date.UTC(2013, 11, 21)),
            P = /\D/g,
            K = V.toLocaleDateString(H, { day: "numeric" }).replace(P, ""),
            U = V.toLocaleDateString(H, { month: "numeric" }).replace(P, ""),
            q = V.toLocaleDateString(H, { year: "numeric" }).replace(P, ""),
            $ = V.toLocaleDateString(H, { year: "numeric", month: "numeric", day: "numeric" }),
            G = $.match(/[.\-/]/);
          let Y = ["month", "day", "year"];
          if (G) {
            const e = $.replace(/[\u200E\u200F]/g, "").split(G[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(P, "")) {
                  case K:
                    a || e.push("day");
                    break;
                  case U:
                    e.push("month");
                    break;
                  case q:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (Y = t);
            }
          }
          return l.createElement(
            c.Ejs,
            { alignItems: "center" },
            Y.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(u.Z, {
                        key: `day-${n}`,
                        label: t ? "" : s,
                        ariaLabel: `${s} :${w(f)}`,
                        placeholder: M.label,
                        dataName: "dateDay",
                        options: k,
                        defaultOption: M,
                        onChange: D
                      });
                case "month":
                  return l.createElement(u.Z, {
                    key: `month-${n}`,
                    label: t ? "" : s,
                    ariaLabel: `${s} :${w(v)}`,
                    placeholder: B.label,
                    dataName: "dateMonth",
                    options: N,
                    defaultOption: B,
                    onChange: F
                  });
                case "year":
                  return l.createElement(u.Z, {
                    key: `year-${n}`,
                    label: t ? "" : s,
                    ariaLabel: `${s} :${w(_)}`,
                    placeholder: T.label,
                    dataName: "dateYear",
                    options: L,
                    defaultOption: T,
                    onChange: A
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    313661: (e, t, a) => {
      a.d(t, { Z: () => b });
      var l = a(696832),
        n = a(554712),
        s = a(383849),
        r = a.n(s),
        o = a(526849),
        i = a(769183),
        p = a(317894),
        d = a.n(p),
        u = a(142897),
        c = a(654),
        h = a(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class b extends l.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, i.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
        }
        componentDidUpdate() {
          null !== this.state.selectionRangeStart &&
            null !== this.state.selectionRangeEnd &&
            this.field.setSelectionRange(this.state.selectionRangeStart, this.state.selectionRangeEnd);
        }
        shouldComponentUpdate(e, t) {
          return !(
            (0, o.equals)(this.props.value, e.value) &&
            (0, o.equals)(this.props.error, e.error) &&
            (0, o.equals)(this.props.mask, e.mask) &&
            (0, o.equals)(this.props.label, e.label) &&
            (0, o.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, o.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
          );
        }
        getValue() {
          return this.field.value;
        }
        focus() {
          this.field.focus();
        }
        getTextarea() {
          var e;
          return (0, u.tZ)(n.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: h.Z.textarea,
            placeholder: this.props.placeholder,
            onBlur: this.props.handleFieldBlur,
            onKeyDown: this.props.onFieldKeyDown,
            onChange: this.handleChange
          });
        }
        getInput() {
          var e;
          const t = {
              onBlur: this.props.handleFieldBlur,
              onChange: this.handleChange,
              disabled: this.props.disabled,
              readOnly: this.props.readOnly,
              value: null != (e = this.props.value) ? e : ""
            },
            a = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: r()(h.Z.input, { [h.Z.error]: Boolean(this.props.error) }),
              sx: {
                ...(this.props.error && { "::placeholder": { color: "ds.text.danger.quiet" }, minWidth: "fit-content" }),
                border: "1px solid",
                borderColor: this.props.error ? "ds.border.danger.standard.idle" : "transparent"
              },
              name: this.props.name,
              "data-name": this.props.dataName,
              type: this.props.type || "text",
              placeholder: this.props.placeholder,
              onKeyDown: this.props.onFieldKeyDown
            };
          return this.props.mask
            ? (0, u.tZ)(
                d(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, u.tZ)("input", { ...a, ...e })
              )
            : (0, u.tZ)(
                "div",
                { className: h.Z.inputRow },
                (0, u.tZ)("input", { ...a, ...t }),
                (0, u.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: h.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, u.tZ)(
            "div",
            { className: r()(h.Z.container, this.props.multiLine ? h.Z.containerMultiLine : null) },
            this.props.label &&
              (0, u.tZ)(
                "label",
                { className: h.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, u.tZ)("span", { className: h.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, u.tZ)(
              c.Z,
              {
                tooltipText: e,
                className: r()(h.Z.value, { [h.Z.placeholder]: !this.props.value, [h.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => u });
      var l = a(696832),
        n = a(142897),
        s = a(526849),
        r = a(383849),
        o = a.n(r),
        i = a(769183);
      var p = a(255990);
      function d(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class u extends l.Component {
        constructor(e) {
          super(e),
            (this.select = l.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                l = d(this.props.options, a);
              this.setState({ optionSelected: l }), this.props.onChange && this.props.onChange(e);
            }),
            (this.handleKeyDown = (e) => {
              "Enter" === e.key && e.preventDefault(), this.props.onFieldKeyDown?.(e);
            }),
            (this.handleFocus = () => {
              this.setState({ isSelectFocused: !0 });
            }),
            (this.handleBlur = () => {
              this.setState({ isSelectFocused: !1 });
            });
          let t = null;
          this.props.options.length &&
            (t = d(
              this.props.options,
              null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, i.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            a = o()("selectContainer--mo5uz0qo56", p.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = o()("selector--fgNHKzkAC3", this.props.classNames);
          let r;
          this.state.optionSelected
            ? (r = this.state.optionSelected.value)
            : this.props.options.length &&
              (r = null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value);
          const i = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, n.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, n.tZ)(
                "label",
                { className: p.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, n.tZ)(
              "div",
              { className: a },
              (0, n.tZ)(
                "div",
                { className: l },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, n.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, n.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, i)
              ),
              (0, n.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: p.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: r,
                  name: this.props.name,
                  disabled: this.props.disabled,
                  "data-name": this.props.dataName,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  "aria-label": null != (e = this.props.ariaLabel) ? e : this.props.label
                },
                this.props.options.map((e) => (0, n.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    754171: (e, t, a) => {
      a.d(t, { k: () => l });
      const l = {
        NAME_LABEL: "webapp_id_form_field_label_name",
        NAME_PLACEHOLDER: "webapp_id_form_field_placeholder_name",
        ID_NUMBER_LABEL: "webapp_id_form_field_label_id_number",
        ID_NUMBER_PLACEHOLDER: "webapp_id_form_field_placeholder_id_number",
        COUNTRY_LABEL: "webapp_id_form_field_label_country",
        GENERIC_SELECT_PLACEHOLDER: "webapp_id_form_field_placeholder_select",
        EXPIRATION_DATE_LABEL_US: "webapp_id_form_field_label_expiration_date_us",
        EXPIRATION_DATE_LABEL_UK: "webapp_id_form_field_label_expiration_date_uk",
        ISSUE_DATE_LABEL: "webapp_id_form_field_label_issue_date"
      };
    },
    670570: (e, t, a) => {
      a.d(t, { G1: () => u, ju: () => A, Dz: () => w, Nn: () => b, A0: () => v, xu: () => C, YI: () => d });
      var l = a(696832),
        n = a(788355),
        s = a(694802),
        r = a(619733);
      const o = (e) =>
        null === e.buttons
          ? l.createElement(l.Fragment, null, e.children)
          : l.createElement(r.N, { enabled: e.showButtonsOnHover }, e.children, e.buttons);
      var i = a(313661);
      const p = l.forwardRef(({ name: e, label: t, placeholder: a, disabled: s }, r) =>
          l.createElement(n.gN, { name: e }, ({ field: e, meta: n }) =>
            l.createElement(i.Z, {
              key: e.name,
              label: t,
              placeholder: a,
              disabled: s,
              ...e,
              value: e.value,
              error: void 0 !== n.error,
              ref: r
            })
          )
        ),
        d = l.memo(p),
        u = l.memo(
          l.forwardRef(({ name: e, label: t, placeholder: a, handleCopy: r }, i) => {
            const { values: p } = (0, n.u6)();
            return l.createElement(
              o,
              { showButtonsOnHover: !!p[e], buttons: r ? l.createElement(s.m, { data: p[e], onCopy: r }) : null },
              l.createElement(d, { name: e, label: t, placeholder: a, ref: i })
            );
          })
        );
      var c = a(201389),
        h = a(819923),
        m = a(280148);
      const b = l.memo(({ name: e, label: t }) => {
        const { translate: a } = (0, c.Z)(),
          { setFieldValue: s } = (0, n.u6)(),
          r = (t) => s(e, "" === t ? null : t);
        return l.createElement(n.gN, { name: e }, ({ field: e }) => {
          var n;
          return l.createElement(m.j, {
            value: `${null != (n = e.value) ? n : ""}`,
            label: t,
            dateFormat: "yyyy-MM-dd",
            onChange: r,
            monthLabelFormatter: (e) => a.shortDate(e, h._T.M),
            yearsRange: [-100, 100],
            allowEmpty: !0
          });
        });
      });
      var f = a(839434);
      const v = l.memo(({ name: e }) => {
        const { setFieldValue: t } = (0, n.u6)();
        return l.createElement(n.gN, { name: e }, ({ field: a }) => {
          var n;
          return l.createElement(f.M, {
            labelSx: f.e,
            spaceId: null != (n = a.value) ? n : "",
            onChange: (a) => {
              t(e, a);
            }
          });
        });
      });
      var _ = a(59896),
        E = a(754171);
      const g = (e, t = "") => ({ label: e(E.k.GENERIC_SELECT_PLACEHOLDER), value: t }),
        y = ({ name: e, label: t, placeholder: a, options: s, defaultOption: r }) =>
          l.createElement(n.gN, { name: e }, ({ field: e }) =>
            l.createElement(_.Z, { label: t, placeholder: a, options: s, defaultOption: r, ...e })
          ),
        C = l.memo(({ name: e, label: t, placeholder: a, handleCopy: s }) => {
          const { setFieldValue: r, values: o } = (0, n.u6)();
          return (
            l.useEffect(() => {
              "FR" !== o.country && r(e, "");
            }, [e, r, o.country]),
            "FR" !== o.country ? null : l.createElement(u, { name: e, label: t, placeholder: a, handleCopy: s })
          );
        });
      var S = a(453576);
      const Z = Object.keys(S.Country),
        w = l.memo(({ name: e, label: t }) => {
          var a;
          const { translate: s } = (0, c.Z)(),
            { values: r } = (0, n.u6)(),
            { current: o } = l.useRef(
              ((e) => {
                const t = Z.filter((e) => !(S.Country[e] === S.Country.UNIVERSAL || S.Country[e] === S.Country.NO_TYPE))
                  .map((t) => ({ label: e(`country_name_${S.Country[t]}`), value: S.Country[t] }))
                  .sort((e, t) => e.label.localeCompare(t.label));
                return [g(e, S.Country.UNIVERSAL), ...t];
              })(s)
            ),
            i = o[0],
            p = r[e],
            d =
              null != (a = o?.find(({ value: e }) => e === p))
                ? a
                : p && p !== S.Country.UNIVERSAL && p !== S.Country.NO_TYPE
                ? { label: p, value: p }
                : i;
          return l.createElement(y, { name: e, label: t, placeholder: i.value, options: o, defaultOption: d });
        });
      var L = a(797518);
      const N = { queries: [{ type: S.StaticDataQueryType.GEOGRAPHIC_STATES, level: S.GeographicStateLevel.LEVEL_0 }] },
        R = new Set(["AU", "CA", "US"]);
      const I = "country",
        D = "state",
        A = l.memo((e) => {
          var t;
          const { translate: a } = (0, c.Z)(),
            { initialValues: s, setFieldValue: r, values: o } = (0, n.u6)(),
            i = s[D],
            p = o[D],
            d = s[I],
            u = o[I],
            h = d !== u,
            m = (function (e, t) {
              const a = (function (e) {
                  const [t, a] = l.useState(null);
                  return (
                    l.useEffect(() => {
                      (async function () {
                        const [e] = await (0, L.et)(N);
                        e?.type === S.StaticDataQueryType.GEOGRAPHIC_STATES && a(e.collection);
                      })().catch((t) => e(new Error(`[useStates] ${t}`)));
                    }, []),
                    t
                  );
                })(t),
                n = l.useMemo(() => {
                  if (!a) return null;
                  if (!e) return;
                  const t = null === e ? void 0 : S.Country[e];
                  if (!t) return;
                  if (!R.has(t)) return;
                  const l = a[t];
                  return void 0 !== l
                    ? (function (e) {
                        return e.sort((e, t) => e.name.localeCompare(t.name)).map(({ name: e, code: t }) => ({ label: e, value: t }));
                      })(Object.values(l))
                    : void 0;
                }, [a, e]);
              return n;
            })(u, e.handleError),
            { current: b } = l.useRef(g(a)),
            f = l.useMemo(() => (m ? [b, ...m] : void 0), [m, b]),
            v = null != (t = f?.find(({ value: e }) => e === p)) ? t : p ? { label: p, value: p } : b;
          return (
            l.useEffect(() => {
              r("state", h ? b.value : i);
            }, [h, b.value, i, r]),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(w, { name: I, label: e.countryFieldLabel }),
              b && f
                ? l.createElement(y, { key: u, name: D, label: e.stateFieldLabel, options: f, defaultOption: v, placeholder: b.label })
                : null
            )
          );
        });
    },
    276846: (e, t, a) => {
      a.d(t, { P: () => r });
      var l = a(696832),
        n = a(788355);
      const s = { form: "form--wPOcxT5leQ" };
      function r({ children: e, ...t }) {
        const { formId: a, formRef: r, initialValues: o, handleSubmit: i } = t;
        return l.createElement(n.J9, { innerRef: r, initialValues: o, onSubmit: i }, ({ values: t }) =>
          l.createElement(n.l0, { autoComplete: "off", className: s.form, id: a, noValidate: !0 }, e(t))
        );
      }
    },
    900125: (e, t, a) => {
      a.d(t, { h: () => i });
      var l = a(696832),
        n = a(441217),
        s = a(796446),
        r = a(343966),
        o = a(88222);
      const i = l.memo(({ country: e, description: t, title: a, type: i, tabs: p }) =>
        l.createElement(s.V9, {
          icon: l.createElement(o.e, { size: r.sk.Large, country: e, type: i }),
          iconBackgroundColor: n.colors.dashGreen06,
          title: a,
          titleDescription: t?.toUpperCase(),
          tabs: p
        })
      );
    },
    83126: (e, t, a) => {
      a.d(t, { Z: () => l });
      const l = {
        container: "container--Qypu77vxOn",
        containerMultiLine: "containerMultiLine--ncWYFwQEnR",
        _field: "_field--KII5X4xmLN",
        input: "input--Iq10hxAz32 _field--KII5X4xmLN",
        inputRow: "inputRow--gdD_j5S1R8",
        textarea: "textarea--VpIWTZemV2 _field--KII5X4xmLN",
        label: "label--Ww_r49kt_J",
        text: "text--oXyCzpUMwG",
        value: "value--aD7nWEqBIq",
        multiline: "multiline--fdPM1KFHPT"
      };
    },
    255990: (e, t, a) => {
      a.d(t, { Z: () => l });
      const l = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    }
  }
]);
