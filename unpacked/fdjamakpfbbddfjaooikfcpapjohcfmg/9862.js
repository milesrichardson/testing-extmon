"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9862],
  {
    183218: (e, t, a) => {
      a.d(t, { j: () => g });
      var l = a(696832),
        s = a(651154),
        i = a(307973),
        n = a(535473),
        o = a(53830),
        r = a(400711),
        d = a(820283),
        h = a(488203),
        p = a(504085),
        c = a(962899);
      const _ = (e, t) => (0, s.Z)(e, t, new Date("1900-01-01")),
        u = (e, t, a) => (l) => (s) => {
          if ("" === s.target.value) return void a("");
          const n = parseInt(s.target.value, 10),
            o = _(e, t),
            r = isNaN(o.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : o;
          a((0, i.Z)(l(r, n), t));
        },
        b = (e, t) => {
          var a;
          return null != (a = e.find(({ value: e }) => t === e)) ? a : e[0];
        },
        m = "webapp_id_form_field_placeholder_day",
        f = "webapp_id_form_field_placeholder_month",
        v = "webapp_id_form_field_placeholder_year",
        y = (e) => ({ label: e, value: "" }),
        g = ({
          yearsRange: e = [-120, 0],
          sortYears: t = "ASC",
          hideDay: a = !1,
          value: s,
          label: i,
          dateFormat: g,
          monthLabelFormatter: N,
          onChange: E,
          allowEmpty: S = !1,
          locale: A,
          disabled: w = !1
        }) => {
          const { translate: C } = (0, h.Z)(),
            D = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                s = Math.abs(t - e) + 1,
                i = new Array(s).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? i : i.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            T = ((Z = (e) => N(e)), new Array(12).fill(null).map((e, t) => ({ label: Z((0, r.Z)(new Date(), t)), value: t })));
          var Z;
          const I = u(s, g, E),
            M = I(n.Z),
            F = I(o.Z),
            L = I(r.Z),
            k = _(s, g),
            B =
              ((x = (0, d.Z)("" === s ? 31 : k)),
              new Array(x || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var x;
          S && (D.unshift(y(C(v))), T.unshift(y(C(f))), B.unshift(y(C(m))));
          const H = b(D, k.getFullYear()),
            R = b(T, k.getMonth()),
            P = b(B, k.getDate()),
            V = A || new Intl.NumberFormat().resolvedOptions().locale,
            O = new Date(Date.UTC(2013, 11, 21)),
            Y = /\D/g,
            $ = O.toLocaleDateString(V, { day: "numeric" }).replace(Y, ""),
            z = O.toLocaleDateString(V, { month: "numeric" }).replace(Y, ""),
            K = O.toLocaleDateString(V, { year: "numeric" }).replace(Y, ""),
            U = O.toLocaleDateString(V, { year: "numeric", month: "numeric", day: "numeric" }),
            j = U.match(/[.\-/]/);
          let q = ["month", "day", "year"];
          if (j) {
            const e = U.replace(/[\u200E\u200F]/g, "").split(j[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(Y, "")) {
                  case $:
                    a || e.push("day");
                    break;
                  case z:
                    e.push("month");
                    break;
                  case K:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (q = t);
            }
          }
          return l.createElement(
            c.Ejs,
            { alignItems: "center" },
            q.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(p.Z, {
                        key: `day-${s}`,
                        label: t ? "" : i,
                        ariaLabel: `${i} :${C(m)}`,
                        placeholder: P.label,
                        dataName: "dateDay",
                        options: B,
                        defaultOption: P,
                        onChange: M,
                        disabled: w
                      });
                case "month":
                  return l.createElement(p.Z, {
                    key: `month-${s}`,
                    label: t ? "" : i,
                    ariaLabel: `${i} :${C(f)}`,
                    placeholder: R.label,
                    dataName: "dateMonth",
                    options: T,
                    defaultOption: R,
                    onChange: L,
                    disabled: w
                  });
                case "year":
                  return l.createElement(p.Z, {
                    key: `year-${s}`,
                    label: t ? "" : i,
                    ariaLabel: `${i} :${C(v)}`,
                    placeholder: H.label,
                    dataName: "dateYear",
                    options: D,
                    defaultOption: H,
                    onChange: F,
                    disabled: w
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => p });
      var l = a(696832),
        s = a(876307),
        i = a(526849),
        n = a(383849),
        o = a.n(n),
        r = a(957459);
      var d = a(855541);
      function h(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class p extends l.Component {
        constructor(e) {
          super(e),
            (this.select = l.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                l = h(this.props.options, a);
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
            (t = h(
              this.props.options,
              null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, r.Z)(), optionSelected: t, isSelectFocused: !1 });
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
          let n;
          this.state.optionSelected
            ? (n = this.state.optionSelected.value)
            : this.props.options.length &&
              (n = null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value);
          const r = this.state.optionSelected
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
                (0, s.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, s.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: d.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: n,
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
    879862: (e, t, a) => {
      a.d(t, { P: () => S });
      var l = a(696832),
        s = a(526849),
        i = a(307973),
        n = a(433117),
        o = a(511329),
        r = a(242521),
        d = a(611913),
        h = a(504085),
        p = a(183218),
        c = a(66485),
        _ = a(616782),
        u = a(89600),
        b = a(167406),
        m = a(850506);
      let f = (function (e) {
        return (
          (e[(e.TITLE = 0)] = "TITLE"),
          (e[(e.FIRSTNAME = 1)] = "FIRSTNAME"),
          (e[(e.MIDDLENAME = 2)] = "MIDDLENAME"),
          (e[(e.LASTNAME = 3)] = "LASTNAME"),
          (e[(e.LASTNAME2 = 4)] = "LASTNAME2"),
          (e[(e.PSEUDO = 5)] = "PSEUDO"),
          (e[(e.BIRTHDATE = 6)] = "BIRTHDATE"),
          (e[(e.BIRTHPLACE = 7)] = "BIRTHPLACE"),
          e
        );
      })({});
      const v = (e) => e !== m.n.JAPAN,
        y = (e) => e === m.n.NORTH_AMERICA_AND_ASIA,
        g = (e) => e === m.n.SPANISH,
        N = "webapp_personal_info_edition_identity_error",
        E = "yyyy-MM-dd";
      class S extends r.ZP {
        constructor(...e) {
          super(...e),
            (this.isFieldVisible = ((e) => {
              const t = (0, m.S)(e),
                a = {
                  [f.TITLE]: v(t),
                  [f.FIRSTNAME]: !0,
                  [f.MIDDLENAME]: y(t),
                  [f.LASTNAME]: !0,
                  [f.LASTNAME2]: g(t),
                  [f.PSEUDO]: !0,
                  [f.BIRTHDATE]: !0,
                  [f.BIRTHPLACE]: !0
                };
              return (e, t) => a[e] || !!t;
            })(this.props.currentValues.localeFormat));
        }
        isFormValid() {
          return this.validateValues({ firstName: r.UE, lastName: r.UE });
        }
        render() {
          var e, t, a;
          const r = this.props.lee.translate,
            { shouldShowTrialDiscontinuedDialog: c } = this.context,
            m = [
              { label: r("webapp_personal_info_edition_identity_title_mr"), value: o.t.Mr },
              { label: r("webapp_personal_info_edition_identity_title_mrs"), value: o.t.Mrs },
              { label: r("webapp_personal_info_edition_identity_title_miss"), value: o.t.Miss },
              { label: r("webapp_personal_info_edition_identity_title_ms"), value: o.t.Ms },
              { label: r("webapp_personal_info_edition_identity_title_mx"), value: o.t.Mx },
              { label: r("webapp_personal_info_edition_identity_title_none_of_these"), value: o.t.NoneOfThese }
            ],
            v = (0, s.uniqBy)((e) => e.label, m),
            y = null != (e = v.find(({ value: e }) => this.state.values.title === e)) ? e : v[v.length - 1];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: u.Z.containerBlock },
              this.isFieldVisible(f.TITLE, null != (t = this.state.values.title) ? t : "") &&
                l.createElement(h.Z, {
                  label: r("webapp_personal_info_edition_identity_title_label"),
                  placeholder: y.label,
                  dataName: "title",
                  options: v,
                  defaultOption: y,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              this.isFieldVisible(f.FIRSTNAME, this.state.values.firstName) &&
                l.createElement(d.Z, {
                  type: "text",
                  label: r("webapp_personal_info_edition_identity_firstname_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_firstname"),
                  dataName: "firstName",
                  value: this.state.values.firstName,
                  error: this.state.errors.firstName ? r(N) : void 0,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              this.isFieldVisible(f.MIDDLENAME, this.state.values.middleName) &&
                l.createElement(d.Z, {
                  type: "text",
                  label: r("webapp_personal_info_edition_identity_middlename_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_middlename"),
                  dataName: "middleName",
                  value: this.state.values.middleName,
                  error: this.state.errors.middleName,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              this.isFieldVisible(f.LASTNAME, this.state.values.lastName) &&
                l.createElement(d.Z, {
                  type: "text",
                  label: r("webapp_personal_info_edition_identity_lastname_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_lastname"),
                  dataName: "lastName",
                  value: this.state.values.lastName,
                  error: this.state.errors.lastName ? r(N) : void 0,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              this.isFieldVisible(f.LASTNAME2, this.state.values.lastName2) &&
                l.createElement(d.Z, {
                  type: "text",
                  label: r("webapp_personal_info_edition_identity_lastname2_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_lastname2"),
                  dataName: "lastName2",
                  value: this.state.values.lastName2,
                  error: this.state.errors.lastName2,
                  onChange: this.handleChange,
                  disabled: !!c
                })
            ),
            l.createElement(
              "div",
              { className: u.Z.containerBlock },
              this.isFieldVisible(f.PSEUDO, this.state.values.pseudo) &&
                l.createElement(d.Z, {
                  type: "text",
                  label: r("webapp_personal_info_edition_identity_pseudo_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_pseudo"),
                  dataName: "pseudo",
                  value: this.state.values.pseudo,
                  error: this.state.errors.pseudo,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              this.isFieldVisible(f.BIRTHDATE, this.state.values.birthDate) &&
                l.createElement(p.j, {
                  label: r("webapp_personal_info_edition_identity_birthdate_label"),
                  value: (0, i.Z)((0, n.Z)(this.state.values.birthDate), E),
                  monthLabelFormatter: (e) => this.props.lee.translate.shortDate(e, _._T.MMMM),
                  dateFormat: E,
                  sortYears: "DESC",
                  onChange: (e) => this.handleChange(e, "birthDate"),
                  disabled: !!c
                }),
              this.isFieldVisible(f.BIRTHPLACE, this.state.values.birthPlace) &&
                l.createElement(d.Z, {
                  type: "textDateFieldSelect",
                  label: r("webapp_personal_info_edition_identity_birthplace_label"),
                  placeholder: r("webapp_personal_info_edition_identity_placeholder_no_birthplace"),
                  dataName: "birthPlace",
                  value: this.state.values.birthPlace,
                  error: this.state.errors.birthPlace,
                  onChange: this.handleChange,
                  disabled: !!c
                }),
              l.createElement(b.M, {
                labelSx: b.e,
                spaceId: null != (a = this.state.values.spaceId) ? a : "",
                onChange: (e) => this.handleChange(e, "spaceId"),
                disabled: !!c
              })
            )
          );
        }
      }
      S.contextType = c.gD;
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
    },
    89600: (e, t, a) => {
      a.d(t, { Z: () => l });
      const l = {
        container: "container--BvfulnQcuP",
        containerBlock: "containerBlock--lIB_8rMAqf",
        horizontalContainerBlock: "horizontalContainerBlock--XzyL0HxXte",
        secondItem: "secondItem--YxYGi1WTY5"
      };
    }
  }
]);
