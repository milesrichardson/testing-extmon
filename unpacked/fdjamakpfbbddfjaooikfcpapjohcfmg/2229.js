"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2229],
  {
    363338: (e, t, a) => {
      a.d(t, { N: () => r });
      var l = a(696832),
        s = a(383849),
        n = a.n(s);
      const r = ({ disableHover: e = !1, ...t }) => {
        const [a, s] = l.useState(!1),
          { children: [r, ...o] = [] } = t;
        return l.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => s(!0), onMouseLeave: () => s(!1) },
          r,
          t.enabled && l.createElement("span", { className: n()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, o)
        );
      };
    },
    183218: (e, t, a) => {
      a.d(t, { j: () => g });
      var l = a(696832),
        s = a(651154),
        n = a(307973),
        r = a(535473),
        o = a(53830),
        i = a(400711),
        d = a(820283),
        p = a(488203),
        c = a(504085),
        u = a(962899);
      const h = (e, t) => (0, s.Z)(e, t, new Date("1900-01-01")),
        m = (e, t, a) => (l) => (s) => {
          if ("" === s.target.value) return void a("");
          const r = parseInt(s.target.value, 10),
            o = h(e, t),
            i = isNaN(o.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : o;
          a((0, n.Z)(l(i, r), t));
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
          value: s,
          label: n,
          dateFormat: g,
          monthLabelFormatter: y,
          onChange: S,
          allowEmpty: C = !1,
          locale: w,
          disabled: N = !1
        }) => {
          const { translate: L } = (0, p.Z)(),
            R = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                s = Math.abs(t - e) + 1,
                n = new Array(s).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? n : n.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            Z = ((I = (e) => y(e)), new Array(12).fill(null).map((e, t) => ({ label: I((0, i.Z)(new Date(), t)), value: t })));
          var I;
          const A = m(s, g, S),
            D = A(r.Z),
            F = A(o.Z),
            x = A(i.Z),
            k = h(s, g),
            O =
              ((H = (0, d.Z)("" === s ? 31 : k)),
              new Array(H || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var H;
          C && (R.unshift(E(L(_))), Z.unshift(E(L(v))), O.unshift(E(L(f))));
          const T = b(R, k.getFullYear()),
            B = b(Z, k.getMonth()),
            M = b(O, k.getDate()),
            V = w || new Intl.NumberFormat().resolvedOptions().locale,
            P = new Date(Date.UTC(2013, 11, 21)),
            K = /\D/g,
            U = P.toLocaleDateString(V, { day: "numeric" }).replace(K, ""),
            q = P.toLocaleDateString(V, { month: "numeric" }).replace(K, ""),
            Y = P.toLocaleDateString(V, { year: "numeric" }).replace(K, ""),
            $ = P.toLocaleDateString(V, { year: "numeric", month: "numeric", day: "numeric" }),
            G = $.match(/[.\-/]/);
          let X = ["month", "day", "year"];
          if (G) {
            const e = $.replace(/[\u200E\u200F]/g, "").split(G[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(K, "")) {
                  case U:
                    a || e.push("day");
                    break;
                  case q:
                    e.push("month");
                    break;
                  case Y:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (X = t);
            }
          }
          return l.createElement(
            u.Ejs,
            { alignItems: "center" },
            X.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(c.Z, {
                        key: `day-${s}`,
                        label: t ? "" : n,
                        ariaLabel: `${n} :${L(f)}`,
                        placeholder: M.label,
                        dataName: "dateDay",
                        options: O,
                        defaultOption: M,
                        onChange: D,
                        disabled: N
                      });
                case "month":
                  return l.createElement(c.Z, {
                    key: `month-${s}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${L(v)}`,
                    placeholder: B.label,
                    dataName: "dateMonth",
                    options: Z,
                    defaultOption: B,
                    onChange: x,
                    disabled: N
                  });
                case "year":
                  return l.createElement(c.Z, {
                    key: `year-${s}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${L(_)}`,
                    placeholder: T.label,
                    dataName: "dateYear",
                    options: R,
                    defaultOption: T,
                    onChange: F,
                    disabled: N
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    611913: (e, t, a) => {
      a.d(t, { Z: () => b });
      var l = a(696832),
        s = a(554712),
        n = a(383849),
        r = a.n(n),
        o = a(526849),
        i = a(957459),
        d = a(158549),
        p = a.n(d),
        c = a(876307),
        u = a(573630);
      const h = {
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
        },
        m = (e) => {
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
          return (0, c.tZ)(s.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: h.textarea,
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
              className: r()(h.input, { [h.error]: Boolean(this.props.error) }),
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
            ? (0, c.tZ)(
                p(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, c.tZ)("input", { ...a, ...e })
              )
            : (0, c.tZ)(
                "div",
                { className: h.inputRow },
                (0, c.tZ)("input", { ...a, ...t }),
                (0, c.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: h.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, c.tZ)(
            "div",
            { className: r()(h.container, this.props.multiLine ? h.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: h.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: h.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              u.Z,
              { tooltipText: e, className: r()(h.value, { [h.placeholder]: !this.props.value, [h.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => c });
      var l = a(696832),
        s = a(876307),
        n = a(526849),
        r = a(383849),
        o = a.n(r),
        i = a(957459);
      var d = a(855541);
      function p(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class c extends l.Component {
        constructor(e) {
          super(e),
            (this.select = l.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                l = p(this.props.options, a);
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
            (t = p(
              this.props.options,
              null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value
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
            a = o()("selectContainer--mo5uz0qo56", d.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = o()("selector--fgNHKzkAC3", this.props.classNames);
          let r;
          this.state.optionSelected
            ? (r = this.state.optionSelected.value)
            : this.props.options.length &&
              (r = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
          const i = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, s.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, s.tZ)(
                "label",
                { className: d.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, s.tZ)(
              "div",
              { className: a },
              (0, s.tZ)(
                "div",
                { className: l },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, s.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, s.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, i)
              ),
              (0, s.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: d.Z.select,
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
                this.props.options.map((e) => (0, s.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    16792: (e, t, a) => {
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
    865212: (e, t, a) => {
      a.d(t, { G1: () => c, ju: () => x, Dz: () => N, Nn: () => b, A0: () => v, xu: () => S, YI: () => p });
      var l = a(696832),
        s = a(788355),
        n = a(921310),
        r = a(363338);
      const o = (e) =>
        null === e.buttons
          ? l.createElement(l.Fragment, null, e.children)
          : l.createElement(r.N, { enabled: e.showButtonsOnHover }, e.children, e.buttons);
      var i = a(611913);
      const d = l.forwardRef(({ name: e, label: t, placeholder: a, disabled: n }, r) =>
          l.createElement(s.gN, { name: e }, ({ field: e, meta: s }) =>
            l.createElement(i.Z, {
              key: e.name,
              label: t,
              placeholder: a,
              disabled: n,
              ...e,
              value: e.value,
              error: void 0 !== s.error,
              ref: r
            })
          )
        ),
        p = l.memo(d),
        c = l.memo(
          l.forwardRef(({ name: e, label: t, placeholder: a, disabled: r = !1, handleCopy: i }, d) => {
            const { values: c } = (0, s.u6)();
            return l.createElement(
              o,
              { showButtonsOnHover: !!c[e], buttons: i ? l.createElement(n.m, { data: c[e], onCopy: i }) : null },
              l.createElement(p, { name: e, label: t, placeholder: a, ref: d, disabled: r })
            );
          })
        );
      var u = a(488203),
        h = a(616782),
        m = a(183218);
      const b = l.memo(({ name: e, label: t, disabled: a }) => {
        const { translate: n } = (0, u.Z)(),
          { setFieldValue: r } = (0, s.u6)(),
          o = (t) => r(e, "" === t ? null : t);
        return l.createElement(s.gN, { name: e }, ({ field: e }) => {
          var s;
          return l.createElement(m.j, {
            value: `${null != (s = e.value) ? s : ""}`,
            label: t,
            dateFormat: "yyyy-MM-dd",
            onChange: o,
            monthLabelFormatter: (e) => n.shortDate(e, h._T.M),
            yearsRange: [-100, 100],
            allowEmpty: !0,
            disabled: a
          });
        });
      });
      var f = a(167406);
      const v = l.memo(({ name: e, disabled: t }) => {
        const { setFieldValue: a } = (0, s.u6)();
        return l.createElement(s.gN, { name: e }, ({ field: s }) => {
          var n;
          return l.createElement(f.M, {
            labelSx: f.e,
            spaceId: null != (n = s.value) ? n : "",
            onChange: (t) => {
              a(e, t);
            },
            disabled: t
          });
        });
      });
      var _ = a(504085),
        E = a(16792);
      const g = (e, t = "") => ({ label: e(E.k.GENERIC_SELECT_PLACEHOLDER), value: t }),
        y = ({ name: e, label: t, placeholder: a, options: n, defaultOption: r, disabled: o = !1 }) =>
          l.createElement(s.gN, { name: e }, ({ field: e }) =>
            l.createElement(_.Z, { label: t, placeholder: a, options: n, defaultOption: r, disabled: o, ...e })
          ),
        S = l.memo(({ name: e, label: t, placeholder: a, disabled: n = !1, handleCopy: r }) => {
          const { setFieldValue: o, values: i } = (0, s.u6)();
          return (
            l.useEffect(() => {
              "FR" !== i.country && o(e, "");
            }, [e, o, i.country]),
            "FR" !== i.country ? null : l.createElement(c, { name: e, label: t, placeholder: a, handleCopy: r, disabled: n })
          );
        });
      var C = a(914662);
      const w = Object.keys(C.cH),
        N = l.memo(({ name: e, label: t, disabled: a = !1 }) => {
          var n;
          const { translate: r } = (0, u.Z)(),
            { values: o } = (0, s.u6)(),
            { current: i } = l.useRef(
              ((e) => {
                const t = w
                  .filter((e) => !(C.cH[e] === C.cH.UNIVERSAL || C.cH[e] === C.cH.NO_TYPE))
                  .map((t) => ({ label: e(`country_name_${C.cH[t]}`), value: C.cH[t] }))
                  .sort((e, t) => e.label.localeCompare(t.label));
                return [g(e, C.cH.UNIVERSAL), ...t];
              })(r)
            ),
            d = i[0],
            p = o[e],
            c =
              null != (n = i?.find(({ value: e }) => e === p))
                ? n
                : p && p !== C.cH.UNIVERSAL && p !== C.cH.NO_TYPE
                ? { label: p, value: p }
                : d;
          return l.createElement(y, { name: e, label: t, placeholder: d.value, options: i, defaultOption: c, disabled: a });
        });
      var L = a(369558),
        R = a(378552),
        Z = a(522640);
      const I = { queries: [{ type: L.N.GEOGRAPHIC_STATES, level: R.Y.LEVEL_0 }] },
        A = new Set(["AU", "CA", "US"]);
      const D = "country",
        F = "state",
        x = l.memo((e) => {
          var t;
          const { translate: a } = (0, u.Z)(),
            { initialValues: n, setFieldValue: r, values: o } = (0, s.u6)(),
            i = n[F],
            d = o[F],
            p = n[D],
            c = o[D],
            h = p !== c,
            m = (function (e, t) {
              const a = (function (e) {
                  const [t, a] = l.useState(null);
                  return (
                    l.useEffect(() => {
                      (async function () {
                        const [e] = await (0, Z.et)(I);
                        e?.type === L.N.GEOGRAPHIC_STATES && a(e.collection);
                      })().catch((t) => e(new Error(`[useStates] ${t}`)));
                    }, []),
                    t
                  );
                })(t),
                s = l.useMemo(() => {
                  if (!a) return null;
                  if (!e) return;
                  const t = null === e ? void 0 : C.cH[e];
                  if (!t) return;
                  if (!A.has(t)) return;
                  const l = a[t];
                  return void 0 !== l
                    ? (function (e) {
                        return e.sort((e, t) => e.name.localeCompare(t.name)).map(({ name: e, code: t }) => ({ label: e, value: t }));
                      })(Object.values(l))
                    : void 0;
                }, [a, e]);
              return s;
            })(c, e.handleError),
            { current: b } = l.useRef(g(a)),
            f = l.useMemo(() => (m ? [b, ...m] : void 0), [m, b]),
            v = null != (t = f?.find(({ value: e }) => e === d)) ? t : d ? { label: d, value: d } : b;
          return (
            l.useEffect(() => {
              r("state", h ? b.value : i);
            }, [h, b.value, i, r]),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(N, { name: D, label: e.countryFieldLabel, disabled: e.disabled }),
              b && f
                ? l.createElement(y, {
                    key: c,
                    name: F,
                    label: e.stateFieldLabel,
                    options: f,
                    defaultOption: v,
                    placeholder: b.label,
                    disabled: e.disabled
                  })
                : null
            )
          );
        });
    },
    386962: (e, t, a) => {
      a.d(t, { P: () => r });
      var l = a(696832),
        s = a(788355);
      const n = { form: "form--wPOcxT5leQ" };
      function r({ children: e, ...t }) {
        const { formId: a, formRef: r, initialValues: o, handleSubmit: i } = t;
        return l.createElement(s.J9, { innerRef: r, initialValues: o, onSubmit: i }, ({ values: t }) =>
          l.createElement(s.l0, { autoComplete: "off", className: n.form, id: a, noValidate: !0 }, e(t))
        );
      }
    },
    974910: (e, t, a) => {
      a.d(t, { h: () => i });
      var l = a(696832),
        s = a(962899),
        n = a(376452),
        r = a(5410),
        o = a(622602);
      const i = l.memo(({ country: e, description: t, title: a, type: i, tabs: d }) =>
        l.createElement(n.V9, {
          icon: l.createElement(o.e, { size: r.sk.Large, country: e, type: i }),
          iconBackgroundColor: s.colors.dashGreen06,
          title: a,
          titleDescription: t?.toUpperCase(),
          tabs: d
        })
      );
    },
    855541: (e, t, a) => {
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
